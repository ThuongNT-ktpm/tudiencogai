const container = document.getElementById('dictionaryContainer');
        const searchBar = document.getElementById('searchBar');
        const noResult = document.getElementById('noResult');

        // Hàm Render giao diện
        function displayData(data) {
            container.innerHTML = '';
            if (data.length === 0) {
                noResult.style.display = 'block';
                return;
            }
            noResult.style.display = 'none';

            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';

                if (item.chapter) {
                    card.innerHTML = `
        <div class="chapter-title">${item.chapter}</div>
        <div class="section"><span class="label">Dấu hiệu:</span> ${item.signs}</div>
        <div class="section"><span class="label">Phân tích:</span> ${item.analysis}</div>
        <div class="section"><span class="label">Quy trình xử lý:</span> ${item.handling}</div>
    `;
                } else if (item.group) {
                    let dataHtml = '<ul style="margin: 5px 0; padding-left: 20px;">';
                    if (item.data && Array.isArray(item.data)) {
                        item.data.forEach(d => {
                            if (d.original) dataHtml += `<li><b>${d.original}</b>: ${d.variants}</li>`;
                            else if (d.key) dataHtml += `<li><b>${d.key}</b>: ${d.value}</li>`;
                            else if (d.word) dataHtml += `<li><b>${d.word}</b>: ${d.meaning}</li>`;
                            else if (d.phrase) dataHtml += `<li><b>${d.phrase}</b>: ${d.fact}</li>`;
                            else if (d.slang) dataHtml += `<li><b>${d.slang}</b>: ${d.usage}</li>`;
                        });
                    }
                    dataHtml += '</ul>';
                    card.innerHTML = `
        <div class="chapter-title">${item.group} - ${item.title}</div>
        <div class="section">${dataHtml}</div>
    `;
                }

                container.appendChild(card);
            });
        }

        // Khởi tạo ban đầu
        displayData(dictionaryData);

        // Hàm loại bỏ dấu tiếng Việt để tìm kiếm tương đối
        function removeAccents(str) {
            if (!str) return "";
            return str.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replaceAll('đ', 'd')
                .replaceAll('Đ', 'D');
        }

        // Sự kiện Search (Lọc theo Dấu hiệu hoặc Tên chương)
        searchBar.addEventListener('keyup', (e) => {
            const searchString = removeAccents(e.target.value.toLowerCase().trim());

            if (!searchString) {
                displayData(dictionaryData);
                return;
            }

            const filteredData = [];

            dictionaryData.forEach(item => {
                if (item.chapter) {
                    const signs = removeAccents((item.signs || "").toLowerCase());
                    const chapter = removeAccents((item.chapter || "").toLowerCase());
                    const analysis = removeAccents((item.analysis || "").toLowerCase());
                    const handling = removeAccents((item.handling || "").toLowerCase());

                    if (signs.includes(searchString) || chapter.includes(searchString) ||
                        analysis.includes(searchString) || handling.includes(searchString)) {
                        filteredData.push(item);
                    }
                } else if (item.group) {
                    const groupTitleStr = removeAccents(((item.group || "") + " " + (item.title || "")).toLowerCase());
                    const isGroupMatch = groupTitleStr.includes(searchString);

                    if (item.data && Array.isArray(item.data)) {
                        const filteredChildren = item.data.filter(d => {
                            const content = removeAccents(JSON.stringify(d).toLowerCase());
                            return isGroupMatch || content.includes(searchString);
                        });

                        if (filteredChildren.length > 0) {
                            filteredData.push({
                                ...item,
                                data: filteredChildren
                            });
                        }
                    } else if (isGroupMatch) {
                        filteredData.push(item);
                    }
                }
            });

            displayData(filteredData);
        });