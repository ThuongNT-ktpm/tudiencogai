// ==========================================
// 1. HÀM CHUẨN HÓA DỮ LIỆU (NORMALIZE DB)
// ==========================================
function normalizeDatabase(data) {
    const db = {
        terminology_api: [],
        troubleshooting_protocols: []
    };

    data.forEach(item => {
        // Tách bảng Xử lý sự cố (Protocols) — có field "chapter"
        if (item.chapter) {
            const colonIdx = item.chapter.indexOf(': ');
            const chapter = colonIdx >= 0 ? item.chapter.slice(0, colonIdx) : item.chapter;
            const concept = colonIdx >= 0 ? item.chapter.slice(colonIdx + 2) : '';

            db.troubleshooting_protocols.push({
                chapter,
                concept,
                symptoms: item.signs
                    ? item.signs.split(',').map(s => s.trim())
                    : [],
                root_cause_analysis: item.analysis || '',
                resolution: item.handling || '',
                // Hỗ trợ field reply[] mới (mảng câu gợi ý cụ thể)
                reply_suggestions: Array.isArray(item.reply) ? item.reply : [],
                // Hỗ trợ metadata mới
                tags: Array.isArray(item.tags) ? item.tags : [],
                level: item.level || '',
                keywords: Array.isArray(item.keywords) ? item.keywords : []
            });
        }
        // Tách bảng Từ điển (Terminology) — có field "group" và "data"
        else if (item.group && Array.isArray(item.data)) {
            const normalizedItems = item.data.map(entry => {
                // Ưu tiên: original > phrase > slang > word > key > Unknown
                const term = entry.original || entry.phrase || entry.slang || entry.word || entry.key || 'Unknown';
                // Ưu tiên: variants > fact > usage > meaning > value > Unknown
                const definition = entry.variants || entry.fact || entry.usage || entry.meaning || entry.value || 'Unknown';
                return { term, definition };
            });

            db.terminology_api.push({
                category: item.group,
                module_name: item.title || '',
                items: normalizedItems
            });
        }
    });

    return db;
}

// Chạy hàm chuẩn hóa với mảng dictionaryData (lấy từ file data.js)
const dbData = normalizeDatabase(dictionaryData);


// ==========================================
// 2. KHỞI TẠO DOM & RENDER GIAO DIỆN
// ==========================================
const container = document.getElementById('dictionaryContainer');
const searchBar = document.getElementById('searchBar');
const noResult = document.getElementById('noResult');

function displayData(data) {
    container.innerHTML = '';

    const hasTerms = data.terminology_api.length > 0;
    const hasProtocols = data.troubleshooting_protocols.length > 0;

    if (hasTerms === false && hasProtocols === false) {
        noResult.style.display = 'block';
        return;
    }
    noResult.style.display = 'none';

    // --- Render Từ Điển (Terminology) ---
    data.terminology_api.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card card-terminology';

        let listHtml = '<ul class="term-list">';
        item.items.forEach(d => {
            listHtml += `<li><span class="term-key">${escapeHtml(d.term)}</span>: ${escapeHtml(d.definition)}</li>`;
        });
        listHtml += '</ul>';

        card.innerHTML = `
            <div class="chapter-title terminology-title">${escapeHtml(item.category)} — ${escapeHtml(item.module_name)}</div>
            <div class="section">${listHtml}</div>
        `;
        container.appendChild(card);
    });

    // --- Render Xử Lý Sự Cố (Protocols) ---
    data.troubleshooting_protocols.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card card-protocol';

        const symptomsStr = item.symptoms.join(', ');

        // Badge level nếu có
        const levelBadge = item.level
            ? `<span class="badge-level badge-${item.level}">${item.level.toUpperCase()}</span>`
            : '';

        // Tags hiển thị nếu có
        const tagsHtml = item.tags.length > 0
            ? renderTags(item.tags)
            : '';

        // Truyền toàn bộ reply suggestions qua data attribute (JSON)
        const repliesJson = escapeAttr(JSON.stringify(item.reply_suggestions));

        card.innerHTML = `
            <div class="chapter-title protocol-title">${escapeHtml(item.chapter)}: ${escapeHtml(item.concept)} ${levelBadge}</div>
            <div class="section"><span class="label label-danger"> Dấu hiệu:</span> ${escapeHtml(symptomsStr)}</div>
            <div class="section"><span class="label label-info"> Phân tích:</span> ${escapeHtml(item.root_cause_analysis)}</div>
            <div class="section"><span class="label label-warning"> Xử lý:</span> ${escapeHtml(item.resolution)}</div>
            ${tagsHtml}
            <button class="btn-reply"
                data-chapter="${escapeAttr(item.chapter)}"
                data-concept="${escapeAttr(item.concept)}"
                data-resolution="${escapeAttr(item.resolution)}"
                data-replies="${repliesJson}">
                💬 Gợi ý Reply
            </button>
        `;
        container.appendChild(card);
    });

    // Gắn sự kiện cho tất cả nút gợi ý reply
    container.querySelectorAll('.btn-reply').forEach(btn => {
        btn.addEventListener('click', () => {
            const chapter = btn.dataset.chapter;
            const concept = btn.dataset.concept;
            const resolution = btn.dataset.resolution;
            let replies = [];
            try { replies = JSON.parse(btn.dataset.replies); } catch { replies = []; }
            openReplyModal(chapter, concept, resolution, replies);
        });
    });
}

// Render danh sách tag thành HTML (tránh nested template literals)
function renderTags(tags) {
    const items = tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');
    return `<div class="section tag-row">${items}</div>`;
}

// Escape HTML để tránh XSS
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;');
}

function escapeAttr(str) {
    if (!str) return '';
    return String(str)
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

// Chạy lần đầu khi load trang
displayData(dbData);


// ==========================================
// 3. LOGIC TÌM KIẾM (SEARCH ENGINE)
// ==========================================
function removeAccents(str) {
    if (!str) return '';
    return str.normalize('NFD')
        .replaceAll(/[\u0300-\u036f]/g, '')
        .replaceAll('đ', 'd')
        .replaceAll('Đ', 'D');
}

function doSearch(query) {
    const searchString = removeAccents(query.toLowerCase().trim());

    if (!searchString) {
        displayData(dbData);
        return;
    }

    const filteredDB = {
        terminology_api: [],
        troubleshooting_protocols: []
    };

    // Lọc Từ điển
    dbData.terminology_api.forEach(item => {
        const headerStr = removeAccents((item.category + ' ' + item.module_name).toLowerCase());
        const isHeaderMatch = headerStr.includes(searchString);

        const filteredItems = item.items.filter(d => {
            const content = removeAccents((d.term + ' ' + d.definition).toLowerCase());
            return isHeaderMatch || content.includes(searchString);
        });

        if (filteredItems.length > 0) {
            filteredDB.terminology_api.push({ ...item, items: filteredItems });
        }
    });

    // Lọc Protocol (bao gồm cả keywords mới)
    dbData.troubleshooting_protocols.forEach(item => {
        const fullContent = [
            item.chapter,
            item.concept,
            item.symptoms.join(' '),
            item.root_cause_analysis,
            item.resolution,
            item.tags.join(' '),
            item.keywords.join(' ')
        ].join(' ');

        if (removeAccents(fullContent.toLowerCase()).includes(searchString)) {
            filteredDB.troubleshooting_protocols.push(item);
        }
    });

    displayData(filteredDB);
}

// Lắng nghe cả keyup lẫn input (bao gồm paste, clear)
searchBar.addEventListener('keyup', e => doSearch(e.target.value));
searchBar.addEventListener('input', e => doSearch(e.target.value));


// ==========================================
// 4. TÍNH NĂNG GỢI Ý REPLY (MODAL)
// ==========================================

// Tạo modal DOM một lần
const modalOverlay = document.createElement('div');
modalOverlay.className = 'modal-overlay';
modalOverlay.id = 'replyModal';
modalOverlay.innerHTML = `
    <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div class="modal-header">
            <div class="modal-title" id="modalTitle"> Gợi ý Reply cho nàng</div>
            <button class="modal-close" id="modalClose" title="Đóng">✕</button>
        </div>
        <div class="modal-context" id="modalContext"></div>
        <div class="modal-content" id="modalContentText"></div>
        <div class="modal-reply-list" id="modalReplyList"></div>
        <div class="modal-footer">
            <button class="btn-copy" id="btnCopy">📋 Sao chép xử lý</button>
        </div>
    </div>
`;
document.body.appendChild(modalOverlay);

const modalClose = document.getElementById('modalClose');
const modalContext = document.getElementById('modalContext');
const modalContentText = document.getElementById('modalContentText');
const modalReplyList = document.getElementById('modalReplyList');
const btnCopy = document.getElementById('btnCopy');

function openReplyModal(chapter, concept, resolution, replies) {
    modalContext.textContent = `${chapter}: ${concept}`;
    modalContentText.textContent = resolution;
    btnCopy.textContent = '📋 Sao chép xử lý';
    btnCopy.classList.remove('copied');

    // Render danh sách câu reply cụ thể (nếu có)
    modalReplyList.innerHTML = '';
    if (replies.length > 0) {
        const title = document.createElement('div');
        title.className = 'reply-list-title';
        title.textContent = '✏️ Câu mẫu để nhắn:';
        modalReplyList.appendChild(title);

        replies.forEach(text => {
            const item = document.createElement('div');
            item.className = 'reply-item';
            item.innerHTML = `
                <span class="reply-text">${escapeHtml(text)}</span>
                <button class="btn-copy-small" title="Sao chép câu này">📋</button>
            `;
            // Sự kiện copy từng câu
            item.querySelector('.btn-copy-small').addEventListener('click', async () => {
                await copyToClipboard(text, item.querySelector('.btn-copy-small'));
            });
            modalReplyList.appendChild(item);
        });
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeReplyModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Hàm copy chung (dùng cho cả nút chính lẫn từng câu)
async function copyToClipboard(text, button) {
    const original = button.textContent;
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        // Fallback cho trình duyệt cũ
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy'); // fallback cho trình duyệt cũ (deprecated nhưng vẫn cần thiết)
        ta.remove();
    }
    button.textContent = 'Đã sao chép!';
    button.classList.add('copied');
    setTimeout(() => {
        button.textContent = original;
        button.classList.remove('copied');
    }, 2000);
}

// Đóng modal
modalClose.addEventListener('click', closeReplyModal);
modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) closeReplyModal();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeReplyModal();
});

// Nút Sao chép nội dung xử lý chính
btnCopy.addEventListener('click', async () => {
    btnCopy.textContent = '📋 Sao chép xử lý';
    btnCopy.classList.remove('copied');
    await copyToClipboard(modalContentText.textContent, btnCopy);
    btnCopy.textContent = ' Đã sao chép!';
});