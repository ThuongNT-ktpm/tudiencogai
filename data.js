// Database JSON (110 chương + 13 nhóm từ điển)
const dictionaryData = [
    {
        "id": 0,
        "group": "Nhóm Mầm Non Hóa",
        "title": "Biến tấu ngữ âm (Nũng nịu)",
        "data": [
            { "original": "Không", "variants": "Hong, khom, khơm, khum, hông, ko, hem, hum, hom, hơm, ham, khồng" },
            { "original": "Rồi", "variants": "Rùi, ùi, ròi, goi, gòi, rui" },
            { "original": "Đồng ý", "variants": "Okee, oke, oki, okila, okela, ok" },
            { "original": "Thôi", "variants": "Thuii, hoii, hoyy" },
            { "original": "Trời", "variants": "Chờii, chòi, chuii" },
            { "original": "Vâng / Dạ", "variants": "Vưngg, nhângg / Nhạ, daaaa" },
            { "original": "Xin lỗi", "variants": "Cin nhỗii, nhin nhỗii" },
            { "original": "Đi / Được", "variants": "Dii, ii, đuy / Đựtt" },
            { "original": "Biết / Nhớ", "variants": "Bicc, bitt, biett / Nhứ, nhớ, nhooo" },
            { "original": "Ngủ ngon", "variants": "Ngủ ngoan, nhủ nhon, ngủ ngonn" },
            { "original": "Chưa", "variants": "Chưaa" },
            { "original": "Từ khác", "variants": "Mà -> Mò, Ăng -> Ăngg, Ở -> Ợ, Nhé -> Nhiee, nhiaa, nhee" }
        ]
    },
    {
        "id": 1,
        "group": "Nhóm Gõ Tắt / Teen Code",
        "title": "Nhanh - Gọn - Lẹ",
        "data": [
            { "key": "Hành động/Sự vật", "value": "j (gì), jz (gì vậy), đljz (đang làm gì vậy), tus (bài viết), vc (việc)" },
            { "key": "Động từ/Tính từ", "value": "ns (nói), chs (chơi), cs (có), nx (nữa), đk (đúng không)" },
            { "key": "Đại từ", "value": "t (tao/tôi), m (mày), mn (mọi người)" },
            { "key": "Chốt câu/Lời chúc", "value": "r (rồi), z (vậy), snzz (sinh nhật vui vẻ), nn/n9 (ngủ ngon)" }
        ]
    },
    {
        "id": 2,
        "group": "Giải Mã Tâm Lý",
        "title": "Từ ngắn ẩn ý cao",
        "data": [
            { "word": "À / Oke", "meaning": "Trả lời có / Chốt đơn" },
            { "word": "Kkk / Cũng cũng", "meaning": "Đang vui / Hài lòng" },
            { "word": "Thôi / Ô / Um", "meaning": "Không thích / Bí văn / Tuỳ (tụt mood)" },
            { "word": "Rồi rồi", "meaning": "Thích sao thì làm (dỗi ngầm)" },
            { "word": "Ờ / ?", "meaning": "Không quan tâm / Bực mình" },
            { "word": "Uk / Hmm", "meaning": "Bực rồi / Đang nghi ngờ, không tin" },
            { "word": "Không vs Hong", "meaning": "Không = KHÔNG; Hong = CÓ (làm giá)" }
        ]
    },
    {
        "id": 3,
        "group": "Câu Nói Kinh Điển",
        "title": "Nghĩa đen vs Nghĩa bóng",
        "data": [
            { "phrase": "Đợi em 5 phút", "fact": "Thực tế là 25 - 30 phút" },
            { "phrase": "Em ăn gì cũng được", "fact": "Trừ những món em không thích (phải tự đoán)" },
            { "phrase": "Mặt em xấu thế nhỉ", "fact": "Cầu cứu lời khen. Hãy khen ngay!" },
            { "phrase": "Em không sao thật mà", "fact": "Đang có sao rất lớn. Hãy dỗ ngay" },
            { "phrase": "Tuỳ anh", "fact": "Cơ hội cuối để xin lỗi hoặc chọn đúng ý cô ấy" }
        ]
    },
    {
        "id": 4,
        "group": "Trending TikTok",
        "title": "Ngôn ngữ Gen Z",
        "data": [
            { "slang": "Xà lơ / Cảm lạnh", "usage": "Nói sai / Hành động gây thất vọng (ngược lãng mạn)" },
            { "slang": "Bất ổn / Trầm kẽm", "usage": "Có điềm / Cực kỳ mệt mỏi, chán nản" },
            { "slang": "Keo lỳ / Mận", "usage": "Khen ngợi sự quyến rũ / Đậm đà" },
            { "slang": "Hết cứu / SOS", "usage": "Cạn lời, không thể đỡ nổi" },
            { "slang": "Cột sống", "usage": "Cuộc sống (thường dùng để than vãn mệt mỏi)" }
        ]
    },
    {
        "group": "Nhóm Thử thách sinh tồn",
        "title": "Giải mã tâm lý",
        "data": [
            { "word": "Tùy / Sao cũng được", "meaning": "Tôi đã có đáp án trong đầu rồi, tự mà suy nghĩ chọn cho đúng ý tôi, chọn sai là tới công chuyện!" },
            { "word": "Em không sao / Không có gì", "meaning": "Có sao và vấn đề đang rất lớn. Đang dỗi lắm rồi đấy, gặng hỏi và dỗ người ta ngay đi, đừng có mà tin rồi im luôn!" },
            { "word": "Ai biết đâu / Tự đi mà hỏi", "meaning": "Thực ra đã biết rõ mười mươi, nhưng đang muốn thử xem thái độ của bạn thế nào, xem bạn có thành thật khai báo không." },
            { "word": "Gì?", "meaning": "Đang bực mình, mất kiên nhẫn. Hãy cẩn thận với tin nhắn tiếp theo của bạn." }
        ]
    },
    {
        "group": "Nhóm Bật đèn xanh & Nũng nịu",
        "title": "Giải mã tâm lý",
        "data": [
            { "word": "Đang làm gì đó? / Đang đâu á?", "meaning": "Đang nhớ anh, đang rảnh nè rủ người ta đi chơi đi, hoặc mau nói chuyện với em đi." },
            { "word": "Thật á? / Thế á?", "meaning": "Đang rất hứng thú với câu chuyện, muốn bạn nói tiếp đi hoặc khen thêm nữa đi." },
            { "word": "Chữ kéo dài (vânggg, okiieee, dạaaa)", "meaning": "Đang rất vui vẻ, tâm trạng tốt, muốn làm nũng và có cảm tình với bạn." },
            { "word": "Đẹp không? / Dễ thương không?", "meaning": "Chỉ có một đáp án duy nhất là 'Có/Đẹp'. Chê là xác định mất điểm!" }
        ]
    },
    {
        "group": "Nhóm Tụt mood & Muốn kết thúc câu chuyện",
        "title": "Giải mã tâm lý",
        "data": [
            { "word": "Ngủ đi / Anh ngủ đi", "meaning": "Tụt mood / Giận rồi, không muốn nhắn nữa. Dịch ngầm: Nếu anh đi ngủ thật thì anh chết chắc, mau dỗ đi!" },
            { "word": "Haha / Hehe (trơ trọi)", "meaning": "Nhạt quá không biết nói gì / Cười trừ cho qua chuyện / Muốn kết thúc đoạn hội thoại ngay lập tức." },
            { "word": "Dạ. / Vâng. (có dấu chấm ở cuối)", "meaning": "Cực kỳ lạnh lùng. Không phải ngoan ngoãn đâu, mà là đang tạo khoảng cách, dỗi hoặc bực mình." },
            { "word": "Gửi một icon duy nhất (👍, 😊)", "meaning": "Cạn lời, hết cứu. Hoàn toàn không muốn nói chuyện tiếp." }
        ]
    },
    {
        "group": "Nhóm Ghen ngầm & Dằn mặt",
        "title": "Giải mã tâm lý",
        "data": [
            { "word": "Anh cứ đi chơi đi / Đi chơi vui vẻ nha", "meaning": "Anh thử bước chân ra khỏi nhà xem, anh cứ đi vui vẻ đi rồi lúc về biết tay tôi!" },
            { "word": "Bạn kia dễ thương/xinh nhỉ?", "meaning": "Cấm tuyệt đối khen 'Ừ xinh'. Đáp án sống còn: 'Đâu? Anh thấy bình thường, sao xinh bằng em được'." },
            { "word": "Chả sao, em quen rồi", "meaning": "Đang cực kỳ tủi thân và thất vọng. Anh lại vô tâm với em, mau xin lỗi và bù đắp ngay!" },
            { "word": "Anh bận thì thôi / Đi làm việc của anh đi", "meaning": "Không phải thông cảm đâu, mà là đang rất dỗi vì bạn không dành thời gian ưu tiên cho cô ấy." }
        ]
    },
    {
        "group": "Nhóm Bài toán hẹn hò & Ăn uống",
        "title": "Giải mã tâm lý",
        "data": [
            { "word": "Ăn gì cũng được", "meaning": "Hãy liệt kê các món ra đây, đến khi nào trúng món em đang thèm trong đầu thì em gật, còn lại em sẽ chê." },
            { "word": "Chờ em 5 phút / Em đang ra", "meaning": "Hãy tự động cộng thêm ít nhất 20-30 phút nữa. Cô ấy có thể mới chỉ đang kẻ dở một bên lông mày." },
            { "word": "Em chẳng có gì để mặc cả", "meaning": "Quần áo cũ em mặc chụp ảnh hết rồi, dẫn em đi mua đồ mới đi / Muốn được tư vấn khen mặc đẹp." }
        ]
    },
    {
        "group": "Nhóm Dỗi nhưng vẫn cần dỗ",
        "title": "Giải mã tâm lý",
        "data": [
            { "word": "Kệ em", "meaning": "Đừng có mà kệ em! Mau ôm em/dỗ em đi! Anh mà kệ em thật là anh cút luôn!" },
            { "word": "Em muốn ở một mình", "meaning": "Em đang rất buồn, đừng có bỏ đi, hãy ngồi im ở đây và an ủi em." },
            { "word": "Đừng nhắn tin cho em nữa", "meaning": "Thử không nhắn xem? Bạn sẽ thành người yêu cũ ngay. Hãy nhắn liên tục cho đến khi cô ấy nguôi giận." }
        ]
    },
    {
        "group": "Nhóm Ngôn ngữ Icon và Dấu câu",
        "title": "Giải mã tâm lý",
        "data": [
            { "word": "🙂 (Mặt cười mỉm)", "meaning": "Nụ cười chết chóc. Mỉa mai, cạn lời hoặc 'Anh cứ đợi đấy'." },
            { "word": "🙃 (Mặt lộn ngược)", "meaning": "Bất lực, bó tay, không còn gì để nói với anh." },
            { "word": "🙏 (Chắp tay)", "meaning": "'Lạy anh', 'Em xin anh đấy', 'Thôi bỏ đi' (mang tính châm biếm)." },
            { "word": "... (Dấu chấm lửng dài)", "meaning": "Sự bất lực, thất vọng, không buồn giải thích thêm vì bạn quá ngốc không hiểu ý." }
        ]
    },
    {
        "group": "Bonus: Tốc độ rep tin nhắn",
        "title": "Giải mã tâm lý",
        "data": [
            { "word": "Rep ngay lập tức", "meaning": "Đang rất rảnh, cực kỳ thích nói chuyện với bạn, hoặc đang hóng drama." },
            { "word": "Đang chat tự nhiên mất tích", "meaning": "Một là đi tắm/ngủ quên, hai là bạn vừa nói một câu vô duyên khiến nàng tụt mood." },
            { "word": "Seen không rep", "meaning": "Đã đọc nhưng đang bận, đang ghim để trả lời cho ngầu, hoặc do câu chuyện quá nhạt không muốn rep." }
        ]
    },
    {
        chapter: "Chương 1: Cơ chế 'Mầm Non Hóa' - Syntax Sugar",
        signs: "Hong, Khum, Khơm, Rùi, Gòi, Bicc, Đựtt...",
        analysis: "Hệ thống đang ở Safe Mode. Nàng đang vui vẻ, muốn làm nũng và kích hoạt quyền Admin che chở từ cậu.",
        handling: "Compile thoải mái, chiều chuộng lại. Lỗi Crash: Đang chat 'khum' tự nhiên chuyển thành 'Không.' có dấu chấm -> Giao diện mầm non đã tắt. Lập tức rà soát log chat để debug."
    },
    {
        chapter: "Chương 2: Thuật toán 'Double Text' - String Extension",
        signs: "Dạaaa, Vângggg, Ruiiii, Nhớ quáaaa...",
        analysis: "Dùng để gia tăng độ ngân vang cảm xúc. Chuỗi càng dài, cảm xúc (nhõng nhẽo, vui vẻ, kêu ca) càng mãnh liệt.",
        handling: "Trả về một Packet có dung lượng tương đương. Nàng nhắn 'Em đói quéeeeee', tuyệt đối không rep 'Ừ đi ăn'. Hãy rep: 'Đợi xíu anh qua chở đi ăn nhaaaa' để đồng bộ dữ liệu."
    },
    {
        chapter: "Chương 3: Lệnh Gõ Tắt - Quick Command",
        signs: "jz, đljz, ns, đk, r, z, K, Uh...",
        analysis: "Tối ưu hóa băng thông do nàng đang bận. Việc gõ tắt giúp duy trì kết nối Keep-Alive.",
        handling: "Bình thường: Return True để nàng làm việc. Lỗi nghiêm trọng: Nàng rep 1 ký tự 'K' hoặc 'Uh' -> Dập kết nối. Tự kiểm tra xem nói sai gì và xin lỗi ngay."
    },
    {
        chapter: "Chương 4: Giao Diện Ẩn - Giải mã Emoji",
        signs: "🙂 (Nụ cười phán xét), 🤡 (Mặt hề), 💅 (Sơn móng tay)...",
        analysis: "Icon chứa mã độc ẩn. 🙂 = 'Anh nghĩ lừa được tôi à?'. 🤡 = Tự chế giễu vì lỡ tin lời hứa.",
        handling: "Antivirus Scan: Không dùng icon tương tự rep lại kẻo xung đột. Xoa dịu bằng text, tìm nguyên nhân lỗi và đưa ra hành động chuộc lỗi thực tế."
    },
    {
        chapter: "Chương 5: Nghệ Thuật Hậu Tố - Suffix Variables",
        signs: "nha, nhé, mò, dọ, đi chứ, ạ...",
        analysis: "Đổi một biến số, output khác hoàn toàn. 'nha/mò' = mềm mại. 'đi chứ' = ping cao. 'ạ' (Tùy anh ạ) = Firewall dựng lên, chấm dứt cấp quyền truy cập.",
        handling: "Variable Check: Đọc kỹ ký tự cuối. Nếu có hậu tố dằn mặt, không được rep 'Ừ'. Phải hạ giọng debug ngay."
    },
    {
        chapter: "Chương 6: Ghen Tuông - Firewall Alert",
        signs: "Tự nhiên khách sáo, gọi 'Ông' xưng 'Tôi', 'Nay thấy comment dạo vui ghê ha'.",
        analysis: "Firewall quét thấy tài nguyên sự chú ý của cậu đang phân bổ sai chỗ (VD: mải hàn mạch IoT, thả tim dạo).",
        handling: "Tắt máy ngay. Nhắn tin xác nhận mức độ ưu tiên: 'Nãy anh mải test cảm biến nên không để ý. Người yêu anh vẫn là Top 1'."
    },
    {
        chapter: "Chương 7: Trang Phục - Giao diện UI/UX & Camera",
        signs: "Mất hút 2 tiếng trước giờ hẹn, hỏi 'Anh mặc áo màu gì?'.",
        analysis: "Nàng đang thiết kế UI. Chuẩn bị càng kỹ, event càng quan trọng. Nàng kỳ vọng cậu cũng mặc đồ tone-sur-tone.",
        handling: "Khen cụ thể dáng váy/màu sắc. Khi ra đường, tự động bật Module Camera, chủ động tìm góc sáng chụp 100 tấm không đợi nhắc."
    },
    {
        chapter: "Chương 8: Ăn gì cũng được - Database Query",
        signs: "Đưa ra 5 quán chê cả 5, 'Trời nóng ăn cái đó sao ngon'.",
        analysis: "Đây là bài test thuật toán loại trừ. Nàng muốn cậu tự quan sát thời tiết và đoán ý.",
        handling: "Chuyển câu hỏi mở thành câu hỏi đóng: 'Trời Cần Thơ nay mát mát nè, mình ghé quán lẩu quen chỗ bờ kè nha, hay em thích ăn đồ nướng xèo xèo?'"
    },
    {
        chapter: "Chương 9: Đơn vị Thời gian - Time Dilations",
        signs: "Đợi 5 phút nữa nha, Em sắp xuống rồi...",
        analysis: "5 phút của nàng dư sức để cậu code xong nguyên cái CSS. Thời gian co giãn theo tiến độ makeup.",
        handling: "Tuyệt đối không hối thúc. Cứ thong thả làm việc của mình. Nàng xuống thì bảo: 'Anh cũng đang tranh thủ đọc nốt tí tài liệu, em cứ từ từ'."
    },
    {
        chapter: "Chương 10: Combo Reaction - Response 200 OK",
        signs: "U là chòiii, Mê xỉuuu, Sao anh giỏi thế 🥺",
        analysis: "Phản ứng khi nhận quà 'độc bản'. Con gái cực kỳ yếu lòng trước đồ handmade hoặc tech gifts tự làm bằng chất xám.",
        handling: "Khi nàng khen, hãy chốt hạ khẳng định chủ quyền: 'Mấy cái web 3D với hạt lấp lánh này anh chỉ code riêng cho người yêu anh thôi'."
    },
    {
        chapter: "Chương 11: Nhắc Khéo - Dropping Hints",
        signs: "Dạo này mỏi cổ ghê, Tự nhiên thèm đồ ngọt ngang.",
        analysis: "Nàng thấy cậu đang cắm mặt bóc tách file log, không nỡ đòi đi chơi trực tiếp nên quăng Hint.",
        handling: "Tạm dừng script. Order ly trà sữa ship tới hoặc xách xe chạy qua bóp vai 15 phút. Giải quyết vấn đề tâm lý, không phải y tế."
    },
    {
        chapter: "Chương 12: Hỏi Ý Kiến - A/B Testing",
        signs: "Tóc ngắn hay dài Sugoi hơn? Váy đỏ hay đen đẹp?",
        analysis: "Nàng cần một feedback có tâm từ End-user, không phải chọn đại cho xong chuyện.",
        handling: "Phân tích logic rồi mới chốt: 'Màu đen sang, nhưng màu đỏ tôn da em, anh vote màu đỏ'."
    },
    {
        chapter: "Chương 13: Chiến Tranh Lạnh - Disconnecting",
        signs: "Đọc không rep, tắt active, block tạm thời.",
        analysis: "Hệ thống ngắt kết nối chủ động. Nàng muốn xem cậu có nỗ lực tìm Port khác để kết nối lại không.",
        handling: "Không được im lặng chờ 'bình tĩnh'. Tìm mọi kênh liên lạc, không được thì đứng trước cửa nhà mua sẵn đồ ăn nàng thích."
    },
    {
        chapter: "Chương 14: Hành Động Bất Thường - System Anomalies",
        signs: "Đang vui vẻ đột ngột chuyển sang cộc lốc, gắt gỏng.",
        analysis: "Mã độc vừa thực thi do cậu lỡ mồm chê sở thích hoặc quên mất ngày kỷ niệm.",
        handling: "Dừng mọi tác vụ. Rollback lại bộ nhớ 10 phút trước xem phát ngôn sai gì. Nhận lỗi ngay lập tức."
    },
    {
        chapter: "Chương 15: Dâu Rụng - Server Maintenance",
        signs: "Cáu gắt vô cớ, khóc vì video lãng xẹt, ôm bụng.",
        analysis: "CPU chịu tải 100% do hormone. Hệ thống mong manh, logic lập trình vô hiệu.",
        handling: "Bật Safe Mode. Không tranh luận đúng sai. Cung cấp nước ấm, chườm bụng, đồ ngọt và nhẫn nhịn."
    },
    {
        chapter: "Chương 16: Người Yêu Cũ - Historical Data",
        signs: "Hồi xưa anh có code tặng NYC vầy không? NYC anh cũng xinh mà.",
        analysis: "Bài test bảo mật rà quét file rác. Cực kỳ nguy hiểm.",
        handling: "Clear Cache ngay: 'Anh chả nhớ, bộ nhớ anh giờ chỉ cấp quyền truy cập duy nhất cho em thôi'."
    },
    {
        chapter: "Chương 17: Xin Lỗi - Hotfix & Patching",
        signs: "Anh biết anh sai ở đâu không?",
        analysis: "'Anh xin lỗi' chỉ là null value. Nàng cần biết cậu đã đọc được file log lỗi chưa và bản vá lỗi là gì.",
        handling: "Nêu rõ Exception: 'Anh sai vì mải code quên nhắn em'. Đưa phương án: 'Từ mai anh đặt báo thức không miss tin nhắn nữa'."
    },
    {
        chapter: "Chương 18: Ghen Ngầm - Background Process",
        signs: "Thôi anh cứ làm việc/chơi game tiếp đi, em ngủ đây.",
        analysis: "Tiến trình ghen chạy ngầm vì cảm thấy tủi thân do bị xếp sau các ưu tiên khác.",
        handling: "Shut down task phụ ngay. 'Mấy việc râu ria gì tầm này, anh cất máy đi ngủ cùng em đây'."
    },
    {
        chapter: "Chương 19: Kể Chuyện Bạn Bè - Third-party APIs",
        signs: "Con bạn em bảo dạo này em béo lên, Nhỏ A mới được bồ tặng túi.",
        analysis: "Gọi API bên thứ 3 để thăm dò ý kiến cậu hoặc đòi quà khéo.",
        handling: "Phủ nhận API nếu là lời chê ('Bạn em mắt kém rồi'). Bắt sóng nếu là gợi ý ('Cuối tuần anh chở đi lượn nha')."
    },
    {
        chapter: "Chương 20: Chụp Ảnh - Image Processing Module",
        signs: "Chụp tự nhiên vào, Trông mặt em to quá.",
        analysis: "Camera mặc định không đáp ứng được UI yêu cầu. Cần góc máy tính toán kỹ.",
        handling: "Chụp Burst liên tục. Căn góc từ dưới lên kéo chân. Luôn mồm khen 'Góc này xinh nè' để nàng tự tin tạo dáng."
    },
    {
        chapter: "Chương 21: Thả Thính Mầm Non - Ping Request",
        signs: "Nhớ anh qué, Mún cắn một cái.",
        analysis: "Nàng gửi Ping kiểm tra độ trễ. Tâm trạng đang vui vẻ, dạt dào tình cảm.",
        handling: "Ping back ngay với năng lượng tương đương: 'Thương qué đi mò, rảnh anh phi qua đón liền!'."
    },
    {
        chapter: "Chương 22: Tương Lai - Architecture Planning",
        signs: "Nuôi chó hay mèo? Thích con trai hay con gái?",
        analysis: "Nàng vẽ bản thiết kế tương lai xem cậu có commit source code vào dự án này không.",
        handling: "Phối hợp nhiệt tình: 'Nuôi mèo nha, mốt anh làm thêm máy cho ăn tự động bằng ESP32 nữa là chuẩn'."
    },
    {
        chapter: "Chương 23: Mạng Xã Hội - Share & Tag API",
        signs: "Tag vào video hài, quán ăn mới mở, bài ngôn tình.",
        analysis: "Giao tiếp Asynchronous. Không cần rep ngay nhưng phải tương tác và bookmark.",
        handling: "Thả tim vào comment. Lưu địa chỉ. Cuối tuần tự động chở qua quán đã tag."
    },
    {
        chapter: "Chương 24: Dỗi Yêu - Low Severity Bug",
        signs: "Ứ ừ, Géc xỉu, Dỗi 5 phút.",
        analysis: "Lỗi không sập hệ thống, chỉ là pop-up đòi sự chú ý.",
        handling: "Trêu chọc lại một chút rồi dỗ ngọt. Đừng dùng logic phân định đúng sai."
    },
    {
        chapter: "Chương 25: Tặng Quà - Deploying to Production",
        signs: "Đừng mua tốn tiền, Em không thiếu gì đâu.",
        analysis: "Nàng thương ví tiền sinh viên nhưng vẫn khao khát được chiều chuộng.",
        handling: "Dùng chất xám, không vung tiền. Tự làm đồ tech độc quyền hoặc viết một cái web nhỏ xinh tên nàng là đủ hạ gục."
    },
    {
        chapter: "Chương 26: Bảo Vệ Tài Nguyên - Access Control",
        signs: "Ai nhắn tin đấy? Pass điện thoại đổi à?",
        analysis: "Rà soát quyền truy cập hệ thống đảm bảo không có mã độc/trà xanh xâm nhập.",
        handling: "Cung cấp Full Access. Đọc pass rõ ràng, cho xem màn hình công khai. Càng minh bạch càng an toàn."
    },
    {
        chapter: "Chương 27: Ăn Vạ - Overload CPU (100% Load)",
        signs: "Rep cộc lốc, than mệt mỏi, nằm ườn ra.",
        analysis: "Bộ nhớ đệm đầy. Nàng thấy cậu tất bật với dự án 'Bên Nhau Tuổi Già' không nỡ đòi hỏi nhưng vẫn muốn được vỗ về.",
        handling: "Gấp laptop lại. Chở nàng ra đường hóng gió, tấp quán quen làm tô hủ tiếu. Ngồi cạnh nghe nàng nói là CPU tự hạ nhiệt."
    },
    {
        chapter: "Chương 28: Nói Ngược - Inverted Logic Gate",
        signs: "Anh bận cứ làm việc đi, Em không sao thật mà.",
        analysis: "Cổng logic đảo ngược. False bề mặt thực chất là True bên trong.",
        handling: "Biên dịch lại mã: 'Em đang rất có sao'. Tạm dừng việc và quan tâm nàng ngay lập tức."
    },
    {
        chapter: "Chương 29: Chia Sẻ Tài Nguyên - System Integration",
        signs: "Cuối tuần em qua phụ anh chuẩn bị đồ cho mấy cô chú nha.",
        analysis: "Nàng muốn integrate vào cuộc sống của cậu, tôn trọng dự án tình nguyện của cậu và muốn đồng hành.",
        handling: "Accept ngay lập tức. Cùng nhau làm dự án chung là cách tối ưu hóa database tình cảm vững chắc nhất."
    },
    {
        chapter: "Chương 30: Bật Đèn Xanh - System Optimization",
        signs: "Báo cáo lịch trình, chủ động rủ đi ăn, gửi icon tim liên tục.",
        analysis: "Hệ thống tối ưu hóa 100%. Code mượt mà, độ tin cậy 99.99%.",
        handling: "Duy trì phong độ. Cậu đã chính thức lấy được Full Quyền Root (Admin)!"
    },
    {
        chapter: "Chương 31: Lỗi 'Không có gì' - Null Pointer Exception",
        signs: "Hỏi 'Em sao thế?' trả lời 'Không có gì', mặt lạnh tanh.",
        analysis: "Biến trả về Null nhưng thực chất bộ nhớ đang tràn. Đây là bẫy. Nếu cậu tin là 'không có gì' và bỏ đi làm việc khác, hệ thống sẽ sập hoàn toàn.",
        handling: "Không được Return. Phải ở lại Debug. Dùng hành động: Ôm từ phía sau, xoa đầu, và hỏi lại bằng giọng trầm ấm nhất: 'Nói anh nghe, ai làm ngừi iu anh buồn?'."
    },
    {
        chapter: "Chương 32: Đào lại chuyện cũ - Version Control (Git Revert)",
        signs: "Đang cãi nhau chuyện A, tự nhiên lôi chuyện B từ 6 tháng trước ra nói.",
        analysis: "Phái đẹp có một kho lưu trữ Git Commit cực kỳ chi tiết. Khi xung đột (Conflict) xảy ra, nàng sẽ Revert lại toàn bộ các commit lỗi cũ của cậu để tăng tính sát thương.",
        handling: "Tuyệt đối không cãi 'Chuyện qua rồi nhắc lại làm gì'. Lỗi cũ chưa được resolve triệt để. Nhận cả combo lỗi: 'Anh sai, cả chuyện cũ lẫn chuyện nay anh đều sai, anh xin lỗi'."
    },
    {
        chapter: "Chương 33: Im lặng tuyệt đối - Deadlock (Khóa chết)",
        signs: "Cả hai đang tranh luận, nàng đột nhiên im lặng, nhìn đi chỗ khác, không thèm cãi nữa.",
        analysis: "Trạng thái Deadlock. CPU không xử lý thêm bất kỳ input nào nữa vì cảm thấy cậu không hiểu vấn đề. Mức độ nguy hiểm cao nhất.",
        handling: "Phá vỡ Deadlock bằng cách Force Stop cuộc cãi vã. Hạ giọng: 'Anh nóng quá, cho anh xin lỗi. Anh nghe em nói này'. Tuyệt đối không được im lặng thi gan."
    },
    {
        chapter: "Chương 34: Đòi pass điện thoại - Penetration Testing Level 2",
        signs: "Tự nhiên đòi cầm điện thoại cậu, lướt check tin nhắn, xem phần search Facebook.",
        analysis: "Nàng đang thực hiện Pentest định kỳ để rà soát lỗ hổng bảo mật. Cần xem có mã độc (trà xanh) nào đang chạy ngầm không.",
        handling: "Giao nộp thiết bị vô điều kiện. Càng tỏ ra giấu giếm, điểm Trust Score (độ tin cậy) càng giảm. Pass phải luôn được share từ trước."
    },
    {
        chapter: "Chương 35: So sánh với người khác - Benchmarking",
        signs: "'Anh xem bồ người ta kìa', 'Chồng người ta...'.",
        analysis: "Chạy Benchmark so sánh hiệu năng của cậu với các server nhà người ta. Nàng không có ý định đổi server, chỉ muốn server của mình nâng cấp tính năng.",
        handling: "Không tự ái. Nâng cấp tính năng bằng cách hỏi: 'Thế em thích được như vậy hả, cuối tuần anh set up y chang cho em luôn'."
    },
    {
        chapter: "Chương 36: Gọi bằng cả Họ Tên - DNS Resolution Error",
        signs: "Đang xưng Anh - Em, tự nhiên réo cả họ tên đầy đủ ra gọi.",
        analysis: "Mất phân giải tên miền thân mật. Lỗi hệ thống cực kỳ nghiêm trọng. Nàng đang ở trạng thái phán xét cao nhất.",
        handling: "Dạ ran. Không được trêu đùa. Tư thế đứng/ngồi nghiêm chỉnh và rà soát ngay lập tức xem mình vừa làm vỡ cái gì hay quên cái gì."
    },
    {
        chapter: "Chương 37: Tự nhiên ngoan đột xuất - Trojan / Malware Suspicion",
        signs: "Đang bình thường tự nhiên nhắn tin siêu ngọt: 'Chồng ơi', 'Anh iu ơi', đấm lưng rót nước.",
        analysis: "Một đoạn mã Trojan đang được chèn vào. Thực chất nàng đang chuẩn bị xin xỏ một món đồ đắt tiền hoặc xin phép làm một việc có rủi ro cao.",
        handling: "Chuẩn bị sẵn tinh thần (và ví tiền). Mở port cho phép truy cập: 'Rồi, lại muốn xin anh cái gì nói mau'."
    },
    {
        chapter: "Chương 38: Mặc áo của cậu - Claiming Server Resources",
        signs: "Lấy áo thun rộng, áo khoác của cậu mặc dù nàng có cả tủ đồ.",
        analysis: "Hành động đánh dấu lãnh thổ. Áo có mùi hương của cậu giúp hệ thống của nàng thấy an toàn, giống như việc chiếm dụng tài nguyên Server để chạy local.",
        handling: "Khen đáng yêu. Tuyệt đối không đòi lại. Cứ để nàng mặc, nhìn như mấy bộ anime Nhật Bản mặc đồ oversize trông rất Kawaii."
    },
    {
        chapter: "Chương 39: Khóc không lý do - Memory Dump",
        signs: "Đang yên đang lành tự nhiên rơi nước mắt, hỏi thì bảo 'Tự nhiên buồn'.",
        analysis: "Bộ nhớ đang thực hiện Memory Dump do quá tải cảm xúc tích tụ từ lâu (deadline, bạn bè, gia đình...). Không cần logic ở đây.",
        handling: "Chỉ cần ôm chặt. Vỗ lưng. Không hỏi 'Tại sao'. Đợi hệ thống xả xong bộ nhớ đệm sẽ tự động phục hồi."
    },
    {
        chapter: "Chương 40: Ghen với idol/2D - Virtualization Error",
        signs: "Thấy cậu dán mắt vào coi mấy em idol Nhật Bản hoặc nhân vật anime nữ rồi bĩu môi: 'Xinh ha? Mê ha?'.",
        analysis: "Lỗi ảo hóa. Nàng biết đó không phải thế giới thực nhưng vẫn ghen để test vị trí độc tôn của mình trong mắt cậu.",
        handling: "Thoát máy ảo về thực tại: 'Đâu, nhìn Sugoi thế thôi chứ sao hợp nhãn anh bằng em được'."
    },
    {
        chapter: "Chương 41: Đi shopping không mua gì - Read-Only Mode",
        signs: "Lượn 5 cái shop quần áo, thử chục bộ xong đi về tay không.",
        analysis: "Hệ thống đang chạy chế độ Read-Only (Chỉ đọc). Nàng đi shopping để giải tỏa tâm lý, cập nhật xu hướng UI chứ không có nhu cầu Write (mua).",
        handling: "Không than vãn mỏi chân. Xách đồ, đứng đợi và kiên nhẫn làm một viewer trung thành."
    },
    {
        chapter: "Chương 42: Lỗi 'Em xấu quá' - UI Rendering Validation",
        signs: "Tự soi gương rồi than: 'Dạo này da đen quá', 'Mặt phệ ra rồi'.",
        analysis: "Cần chạy file test để xác thực (Validate) lại giao diện. Nàng cần một bên thứ 3 (là cậu) confirm rằng UI vẫn đang hoạt động tốt.",
        handling: "Bác bỏ ngay lập tức: 'Ai kêu, anh thấy da vẫn sáng mà', 'Má phúng phính xíu bóp mới đã'. Tuyệt đối không khuyên 'Thế bôi kem đi'."
    },
    {
        chapter: "Chương 43: 'Anh tự quyết đi' - Delegated Authentication (Bẫy)",
        signs: "Hỏi đi đâu chơi, mua gì, nàng bảo: 'Tùy, anh tự quyết đi, sao cũng được'.",
        analysis: "Ủy quyền xác thực nhưng thực chất là một cái bẫy (Honeypot). Nàng đã có đáp án nhưng muốn xem cậu có trùng tần số không.",
        handling: "Không được quyết định đại. Rà soát lại thói quen của nàng: 'Nay ra Ninh Kiều hóng gió rồi đi ăn vặt nha, bữa em kêu thèm bánh tráng nướng mà'."
    },
    {
        chapter: "Chương 44: Xóa Story sau 5 phút - Ephemeral Storage",
        signs: "Up một cái story tâm trạng đen thui, 5 phút sau tự xóa.",
        analysis: "Lưu trữ phù du. Nàng muốn xả stress nhưng sợ người khác đánh giá, hoặc up lên chỉ để xem CẬU có kịp nhìn thấy và vào hỏi thăm không.",
        handling: "Nếu lỡ thấy, phải nhắn tin hỏi thăm ngay dù story đã bị xóa. 'Nãy anh thấy story, có chuyện gì áp lực hả ngừi iu?'."
    },
    {
        chapter: "Chương 45: Mua đồ đôi - Peer-to-Peer Networking",
        signs: "Bắt mặc áo đôi, mang giày đôi, xài ốp lưng giống nhau.",
        analysis: "Thiết lập mạng ngang hàng (P2P). Nàng muốn đồng bộ hóa nhận diện để đi ra đường ai cũng biết hai node này đang kết nối với nhau.",
        handling: "Vui vẻ chấp nhận. Càng ngoan ngoãn mặc đồ đôi, kết nối mạng càng bảo mật và ổn định."
    },
    {
        chapter: "Chương 46: Cắn / Đánh yêu - Hardware Interrupt",
        signs: "Đang ngồi chơi tự nhiên cắn vào tay hoặc đánh cái bốp vào vai cậu.",
        analysis: "Ngắt cứng (Hardware Interrupt) vì tràn ngập sự đáng yêu. Phái đẹp mắc hội chứng 'Cute Aggression' (Gây hấn dễ thương) khi cảm xúc yêu đương quá đầy.",
        handling: "Giả vờ kêu đau một chút để nàng dỗ lại. Đây là dấu hiệu của sự gắn kết vật lý cực kỳ cao."
    },
    {
        chapter: "Chương 47: Nhắc lại lời hứa cũ - Log Checking",
        signs: "'Anh nhớ tuần trước anh hứa gì không?'",
        analysis: "Nàng đang lôi file Log ra để đối chiếu tiến độ dự án. Trí nhớ của con gái về những lời hứa là vĩnh cửu.",
        handling: "Chạy deadline ngay lập tức. 'Nhớ chứ, cuối tuần này anh dẫn đi ăn món đó bù nè'."
    },
    {
        chapter: "Chương 48: Đang vui tự nhiên dỗi - Unhandled Exception",
        signs: "Đang cười nói rôm rả, tự nhiên tụt mood, im lặng.",
        analysis: "Ngoại lệ chưa được xử lý. Cậu vừa có một hành động hoặc lời nói vô tình chạm vào vùng cấm (ví dụ: lỡ nhìn điện thoại người khác, lỡ nói vô duyên).",
        handling: "Dò lại log 1 phút trước. Hạ giọng ngay: 'Thôi chết anh vô ý quá, không giận anh nha'."
    },
    {
        chapter: "Chương 49: Kêu ca về người khác - Cross-Site Scripting (XSS)",
        signs: "Kể xấu đồng nghiệp, bạn bè, hoặc một người ất ơ nào đó trên mạng.",
        analysis: "Nàng bị tác động bởi mã độc bên ngoài (áp lực xã hội). Nàng kể không phải để tìm chuyên gia gỡ rối, mà để tìm Đồng Minh.",
        handling: "Chửi hùa theo! 'Eo ơi sao có người kỳ cục vậy', 'Đúng rồi em bức xúc là phải'. Đứng chung chiến tuyến là cách debug tốt nhất."
    },
    {
        chapter: "Chương 50: Quên ngày kỷ niệm - Data Loss / Backup Failure",
        signs: "Đến ngày kỷ niệm mà cậu vẫn cắm mặt vào code, không có hoa cũng không có lời chúc.",
        analysis: "Mất dữ liệu toàn hệ thống. Thảm họa cấp độ S. Lỗi này không thể Fix bằng miệng.",
        handling: "Đền bù bằng vật chất và thời gian gấp 3 lần. Dẫn đi ăn tối tại một nơi lãng mạn, tặng một món quà giá trị (hoặc đồ tech xịn xò do tự tay làm) và thề không tái phạm."
    },
    {
        chapter: "Chương 51: 'Anh thay đổi rồi' - Deprecated API",
        signs: "Than vãn: 'Hồi mới yêu anh đâu có vậy', 'Dạo này anh vô tâm'.",
        analysis: "Nàng nhận thấy các API quan tâm chăm sóc đang bị Deprecated (ngừng hỗ trợ) hoặc giảm tần suất.",
        handling: "Update phiên bản mới liền. Gác lại mớ log file và dự án, dành trọn một ngày cuối tuần chỉ để chở nàng đi chơi, hâm nóng tình cảm."
    },
    {
        chapter: "Chương 52: Gửi meme/reel liên tục - Data Streaming",
        signs: "Mỗi ngày nhận được chục cái video TikTok hài hước, chó mèo.",
        analysis: "Truyền phát dữ liệu liên tục. Nàng xem được gì hay cũng muốn cậu thấy. Đó là cách nàng duy trì session (phiên kết nối) khi hai người không ở cạnh nhau.",
        handling: "Phải react (thả haha/tim) đầy đủ. Thỉnh thoảng rep: 'Haha giống bé nhà mình ghê'."
    },
    {
        chapter: "Chương 53: Đòi đi du lịch - Environment Migration",
        signs: "Tag vào mấy bài review Đà Lạt, Phú Quốc, 'Dạo này ngột ngạt quá'.",
        analysis: "Muốn di chuyển môi trường (Migration) để refresh lại hệ thống. Ở Cần Thơ mãi cũng chán, cần đổi gió.",
        handling: "Lên plan sơ bộ ngay: 'Đợi anh bảo vệ xong cái đồ án tháng sau mình xách balo đi luôn nha'."
    },
    {
        chapter: "Chương 54: Im lặng khi cậu làm việc - Idle Process",
        signs: "Cậu code web hay làm dự án 'Bên Nhau Tuổi Già', nàng ngồi ngoan ngoãn bên cạnh đọc sách/bấm điện thoại.",
        analysis: "Nàng tôn trọng đam mê của cậu. Chấp nhận vào trạng thái Idle (chờ) để không làm phiền tài nguyên hệ thống của cậu.",
        handling: "Đừng để nàng chờ quá lâu. Tầm 45 phút hãy dừng tay lại quay sang bẹo má một cái: 'Cảm ơn ngừi iu ngoan ngoãn đợi anh nha', rồi làm tiếp."
    },
    {
        chapter: "Chương 55: Giận cá chém thớt - Cascading Failure",
        signs: "Sếp mắng trên công ty, bực tức đi về và cằn nhằn cậu vì quên chưa đổ rác.",
        analysis: "Lỗi dây chuyền. Một hệ thống khác bị sập kéo theo giao diện đối với cậu cũng bị lag theo.",
        handling: "Không cãi lại. Xách bịch rác đi đổ, mua cốc trà sữa ngọt về dỗ: 'Thôi bực làm gì cho mau già, uống miếng nước cho ngọt giọng nè'."
    },
    {
        chapter: "Chương 56: Hỏi 'Trưa nay ăn gì' lúc 9h sáng - Infinite Loop",
        signs: "Mới ăn sáng xong đã hỏi trưa ăn gì, tối ăn gì.",
        analysis: "Niềm đam mê ẩm thực là một vòng lặp vô hạn. Nàng coi việc lên plan ăn uống là nguồn năng lượng sống.",
        handling: "Gợi ý liền mấy món nàng thích để nàng có động lực làm việc buổi sáng chờ đến trưa."
    },
    {
        chapter: "Chương 57: 'Em hiểu mà' - Protocol Mismatch",
        signs: "Giải thích một hồi, nàng chốt câu: 'Vâng, em hiểu rồi', nhưng mặt buồn thiu.",
        analysis: "Giao thức không đồng bộ. Nàng hiểu logic của cậu, nhưng cảm xúc của nàng thì không chấp nhận logic đó.",
        handling: "Bỏ qua logic. Dùng cảm xúc. 'Anh biết em hiểu, nhưng anh vẫn thấy có lỗi vì làm em buồn'."
    },
    {
        chapter: "Chương 58: Xin lỗi chỉ để xong chuyện - Force Quit",
        signs: "Cậu nói 'Anh xin lỗi được chưa', nàng đáp 'Ừ, anh thì lúc nào chả đúng'.",
        analysis: "Đóng ứng dụng ép buộc (Force Quit) nhưng file tạm chưa bị xóa. Nó sẽ gây lỗi cho lần khởi động sau.",
        handling: "Tuyệt đối không dùng thái độ xin lỗi cho có. Cần sự chân thành và giải thích rõ nguyên nhân."
    },
    {
        chapter: "Chương 59: Gọi điện tâm sự đêm khuya - Asynchronous Task",
        signs: "Khuya không ngủ, gọi điện kể chuyện linh tinh buồn ngủ díu mắt.",
        analysis: "Đây là tác vụ chạy ngầm. Nàng cần giọng nói của cậu để ru ngủ hệ thống.",
        handling: "Cứ ừ hử nhẹ nhàng, không cần đóng góp ý kiến logic. Giọng trầm ấm là đủ."
    },
    {
        chapter: "Chương 60: 'Em yêu anh' - Core Dump / Full System Access",
        signs: "Đang ôm nhau tự nhiên thỏ thẻ: 'Em thương anh lắm', 'Em yêu Cậu SE của em'.",
        analysis: "Truy cập hệ thống tuyệt đối. Tất cả các Firewall đã hạ, nàng giao trọn vẹn cảm xúc cho cậu. Thành quả ngọt ngào nhất của tình yêu.",
        handling: "Lưu trữ khoảnh khắc này vào thư mục quan trọng nhất. Hôn trán và đáp lại: 'Anh cũng thương em nhất trên đời'."
    },
    {
        chapter: "Chương 61: Bắt đền vì lỗi trong... giấc mơ - Virtual Environment Bug",
        signs: "Sáng ngủ dậy mặt nặng mày nhẹ, nhắn tin: 'Đêm qua trong mơ anh dám nắm tay cô khác/bỏ rơi em', sau đó dỗi y như thật.",
        analysis: "Lỗi phát sinh trên môi trường máy ảo (Virtual Environment), không có thực tế, nhưng bộ não của nàng lại ghi nhận cảm xúc đau lòng là Real-time (thời gian thực). Do giấc mơ quá sống động, hệ thống cảm biến của nàng chưa kịp phân tách giữa bộ nhớ ảo và hiện thực.",
        handling: "Tuyệt đối không dùng logic kiểu: 'Mơ thôi mà em bị hâm à'. Hãy hùa theo môi trường ảo đó để Debug: 'Thằng anh trong mơ láo thật, để anh đấm nó. Anh ở ngoài đời chỉ chung thủy với mỗi ngừi iu thôi. Trưa nay anh qua đón đi ăn đền bù tổn thương tinh thần nhé'."
    },
    {
        chapter: "Chương 62: Gửi link Shopee/TikTok Shop không nói gì - Payment Gateway API Request",
        signs: "Tự nhiên quăng một cái link váy, son, hoặc gấu bông vào inbox. Không kèm theo bất kỳ text nào, hoặc chỉ kèm một icon 🥺.",
        analysis: "Nàng vừa gọi API đến cổng thanh toán (Payment Gateway). Nàng không trực tiếp xin vì sợ mang tiếng đòi hỏi, nhưng việc gửi link là một bài test xem cậu có sẵn sàng 'cấp quyền duyệt chi' cho những món đồ nhỏ nhặt làm nàng vui hay không.",
        handling: "Mở link ra check giá. Nếu nằm trong khả năng của sinh viên, hãy rep: 'Để anh thanh toán giỏ hàng cho bé'. Nếu món đó đắt quá, hãy dùng nghệ thuật điều hướng: 'Cái váy này đẹp nhưng anh thấy màu này không tôn da em bằng cái váy hôm bữa. Cuối tuần anh chở đi lựa tận nơi luôn cho chuẩn form nha'."
    },
    {
        chapter: "Chương 63: Đòi xem anh đang làm gì - Code Review / Screen Share Request",
        signs: "Nàng bắt chụp màn hình laptop hoặc nằng nặc đòi qua phòng trọ ngồi xem cậu code/hàn mạch, dù nàng không hiểu dòng code nào.",
        analysis: "Đây không phải là kiểm tra xem cậu có chat với ai không, mà là khao khát được đồng bộ hóa (Sync) với thế giới của cậu. Nàng muốn thấy hình ảnh Cậu SE Trẻ lúc tập trung làm việc ngầu như thế nào, và muốn hiểu thêm về những thứ cậu đang theo đuổi (như việc bóc tách file CSV hay test con ESP32).",
        handling: "Đừng xua đuổi kiểu 'Code khô khan lắm em xem làm gì'. Hãy share màn hình, hoặc cho nàng ngồi cạnh. Vừa làm vừa giải thích bằng ngôn ngữ mầm non: 'Cái cục đen đen này là con mắt camera chống trộm nè, anh đang nạp não cho nó'. Nàng sẽ cực kỳ ngưỡng mộ."
    },
    {
        chapter: "Chương 64: Thay đổi Avatar/Cover màu đen - Fatal Error / Kernel Panic",
        signs: "Nửa đêm đột ngột gỡ ảnh đại diện, đổi cover sang một màu đen kịt, deactive các trạng thái hoạt động.",
        analysis: "Lỗi hệ thống nghiêm trọng nhất (Fatal Error). Cảm xúc đã sụp đổ hoàn toàn. Không đơn thuần là dỗi cậu, mà có thể là sự cộng hưởng từ áp lực cuộc sống, gia đình, hoặc cậu vừa phạm một sai lầm cực lớn mà cậu không hề nhận ra. Hệ thống đã đóng băng để bảo vệ lõi.",
        handling: "Giao thức Text (nhắn tin) lúc này vô hiệu. Phải dùng giao thức Physical. Gọi điện thoại ngay lập tức, gọi x cháy máy. Nếu ở gần, phải xuất hiện trước cửa nhà. Sự hiện diện vật lý là cách duy nhất để khởi động lại (Reboot) hệ thống."
    },
    {
        chapter: "Chương 65: 'Anh đi ngủ đi' lúc 10h tối - Force Shutdown Command (Bẫy)",
        signs: "Bình thường 12h mới ngủ, nay 10h đã nhắn: 'Thôi muộn rồi, anh bận thì đi ngủ sớm đi'.",
        analysis: "Đây là lệnh Force Shutdown giả. Nàng đang test xem cậu có thực sự đi ngủ không, hay là lấy cớ ngủ để... mở tab game, chat Discord với anh em. Nếu chấm xanh của cậu vẫn sáng sau tin nhắn đó, cậu sẽ dính án tử.",
        handling: "Nếu muốn thức làm việc/chơi game tiếp, phải khai báo trung thực: 'Anh chưa ngủ đâu, anh còn cái bug tính ngồi fix nốt cho xong form này'. Nếu thực sự đi ngủ, hãy tắt mạng, chúc ngủ ngon ngọt ngào và tuyệt đối không để chấm xanh sáng lại."
    },
    {
        chapter: "Chương 66: Soi danh sách Friend/Following - Background Security Scan",
        signs: "Tự nhiên hỏi: 'Cái bạn nữ mới add friend anh là ai dạ?', 'Sao dạo này anh hay follow mấy chị gái nhảy trend thế?'.",
        analysis: "Trình quét virus chạy ngầm (Background Scan) vừa phát hiện có tệp tin lạ (Gái xinh/Người lạ) xâm nhập vào vùng mạng lưới của cậu. Nàng đang rà soát quyền truy cập của các tệp tin này xem có nguy cơ đe dọa đến vị trí Admin của nàng không.",
        handling: "Minh bạch hóa dữ liệu ngay lập tức. 'À cái bạn chung nhóm môn Công nghệ phần mềm, add để gửi file thôi em', hoặc Unfollow ngay mấy kênh độc hại kia trước mặt nàng để chứng minh độ trong sạch."
    },
    {
        chapter: "Chương 67: Mua quà không đúng ý - Incompatible Dependency",
        signs: "Cậu tặng một thỏi son màu hồng cánh sen, hoặc một cái váy sến súa. Nàng vẫn nhận, vẫn cười, nhưng xếp xó không bao giờ dùng.",
        analysis: "Lỗi xung đột thư viện (Incompatible Dependency). Cậu có thiện chí (tải file), nhưng phiên bản cậu tải về không tương thích với hệ điều hành của nàng. Nàng không muốn chê vì sợ cậu buồn, nhưng dùng thì trầm cảm.",
        handling: "Nhận biết qua việc nàng không bao giờ xài món đồ đó. Lần sau, đừng tự ý mua theo linh cảm. Hãy dẫn nàng đi thử trực tiếp, hoặc an toàn nhất là dùng tuyệt chiêu tự code một trang web lãng mạn lấp lánh như đợt làm bông hồng 3D – đồ công nghệ tự tay làm thì 100% không bao giờ bị lỗi tương thích."
    },
    {
        chapter: "Chương 68: Bắt bẻ từng chữ - Regex Matching Analysis",
        signs: "Cậu nhắn: 'Hôm nay anh đi ăn với bạn'. Nàng hỏi lại: 'Bạn nào? Nam hay nữ? Mấy người? Có ai em biết không?'.",
        analysis: "Hệ thống đang chạy trình phân tích cú pháp Regex cực kỳ khắt khe. Nàng bắt các Keyword (Từ khóa) thiếu tính minh bạch và yêu cầu cậu phải bổ sung các Argument (Đối số) chi tiết nhất để loại trừ mọi khả năng có trà xanh.",
        handling: "Đừng cáu bẳn bảo 'Em hỏi cung anh à'. Việc này chỉ chứng tỏ nàng rất quan tâm đến các mối quan hệ của cậu. Hãy cung cấp Log chi tiết ngay từ đầu: 'Tối nay anh đi ăn hủ tiếu với 3 thằng bạn cùng làm dự án IoT nha'."
    },
    {
        chapter: "Chương 69: Nhắn tin bằng Voice Message - Audio Streaming Mode",
        signs: "Nàng không gõ phím nữa mà gửi một loạt các đoạn ghi âm dài từ 30s đến 1 phút.",
        analysis: "Chuyển từ Text Mode sang Audio Streaming. Lý do 1: Nàng đang đi đường hoặc bận tay. Lý do 2 (nguy hiểm hơn): Nàng đang có rất nhiều cảm xúc (vui cực độ hoặc đang tức giận) cần truyền tải qua giọng điệu mà văn bản không thể hiện được.",
        handling: "Bắt buộc phải nghe hết, cắm tai nghe vào nếu đang ở chỗ ồn. Tuyệt đối không được rep bằng Text nếu nàng đang gửi Voice lúc cãi nhau. Nếu nàng khóc trong Voice, bỏ hết mọi thứ để gọi lại ngay lập tức."
    },
    {
        chapter: "Chương 70: Giả vờ hỏi về 'trà xanh' - Phishing Attack (Tấn công giả mạo)",
        signs: "Đưa ra kịch bản giả định: 'Nếu bây giờ có một bé khóa dưới xinh xắn chủ động nhắn tin nhờ anh sửa code, anh có sửa không?'.",
        analysis: "Nàng đang quăng một cái link Phishing (giả mạo) để thử xem bảo mật hệ thống của cậu có dễ bị qua mặt không. Nếu cậu trả lời thật thà kiểu 'Thì giúp thôi, có gì đâu', cậu sẽ bị khóa tài khoản vĩnh viễn.",
        handling: "Phòng thủ tuyệt đối. 'Anh chỉ có chức năng sửa code cho người yêu anh thôi. Gái lạ nhắn thì anh gửi link StackOverflow cho tự mà đọc'."
    },
    {
        chapter: "Chương 71: Đang cãi nhau mà xưng 'Mày - Tao' - Override Root Permissions",
        signs: "Cuộc cãi vã lên đỉnh điểm, nàng bật khóc và xưng 'Tao', gọi cậu là 'Mày'.",
        analysis: "Nàng đã tự động ghi đè (Override) lên toàn bộ cấu trúc phân quyền của hệ thống. Sự tôn trọng tạm thời bị phá vỡ do nỗi đau và sự tức giận đạt mức Max. Đây là giới hạn đỏ của mọi mối quan hệ.",
        handling: "Không được phép xưng 'Mày - Tao' lại với nàng (sẽ dẫn đến chia tay). Giữ nguyên xưng hô 'Anh - Em', im lặng chịu trận. Khi nàng xả hết, hãy nhẹ nhàng nói: 'Anh biết anh sai làm em giận, nhưng đừng xưng hô thế nữa, anh buồn lắm'. Sự mềm mỏng sẽ kéo nàng về lại cấu trúc cũ."
    },
    {
        chapter: "Chương 72: Cố tình mặc đồ gợi cảm khi giận - UI Redesign for Distraction",
        signs: "Đang chiến tranh lạnh, nhưng khi hẹn gặp để nói chuyện cho rõ ràng, nàng lại mặc bộ váy tôn dáng nhất, xịt loại nước hoa cậu thích nhất.",
        analysis: "Chiến thuật Redesign UI để gây nhiễu luồng xử lý (Distraction). Nàng dùng nhan sắc để hack vào não bộ của cậu, làm cậu quên mất mục đích cãi nhau ban đầu và vô thức phải nhún nhường vì... nàng quá xinh.",
        handling: "Cậu đã dính bẫy và không có cách thoát. Cứ ngoan ngoãn ngắm nhìn, khen ngợi và chủ động xuống nước làm hòa. Không ai có thể giữ cái đầu lạnh với một giao diện đẹp tuyệt mỹ được."
    },
    {
        chapter: "Chương 73: Đợi anh đón nhưng không báo trước - Unscheduled Cron Job",
        signs: "Trời mưa, tan học lúc 5h, nàng không nhắn tin nhờ đón nhưng cứ đứng trước cổng trường chờ. Khi cậu không đến, nàng tự bắt xe về và dỗi.",
        analysis: "Nàng cài đặt một Cron Job (lịch trình tự động) ngầm trong đầu và mặc định cậu cũng phải có lịch trình đó. Nàng cho rằng sự tinh tế là khi cậu tự nhớ giờ giấc, tự xem thời tiết và chủ động xuất hiện như một hero.",
        handling: "Đây là lỗi thiếu đồng bộ dữ liệu. Không cãi 'Em không nói sao anh biết'. Hãy nhận lỗi thiếu tinh tế và cài đặt lại hệ thống cảnh báo thời tiết/lịch học của nàng vào điện thoại của cậu để chủ động gửi request hỏi han trước."
    },
    {
        chapter: "Chương 74: Kể chuyện 'Hôm nay em gặp...' - Syncing Local State to Cloud",
        signs: "Tối đến, nàng lôi đủ thứ chuyện trên trời dưới biển ra kể: chuyện trên trường, chuyện bà bán bún, chuyện con chó hàng xóm.",
        analysis: "Quá trình Sync (Đồng bộ) dữ liệu cục bộ lên Đám mây (Cloud) của cậu. Nàng coi cậu là bộ nhớ lưu trữ an toàn nhất. Việc nói ra giúp nàng dọn dẹp bộ nhớ đệm (Clear Cache) sau một ngày mệt mỏi.",
        handling: "Chỉ cần lắng nghe, gật gù, thi thoảng chèn vài câu 'Á à', 'Kinh nhỉ', 'Thế cơ á'. Không cần đưa ra giải pháp giải quyết vấn đề của bà bán bún. Lắng nghe là chức năng duy nhất cần chạy."
    },
    {
        chapter: "Chương 75: Khóc vì nhân vật trong phim truyện - Memory Leak in Third-Party App",
        signs: "Đang xem phim Hàn Quốc hoặc anime, tự nhiên khóc nức nở vì nam phụ không có được nữ chính.",
        analysis: "Ứng dụng bên thứ 3 (Phim ảnh) gây rò rỉ bộ nhớ (Memory Leak) làm ảnh hưởng đến cảm xúc của hệ thống chính. Sự đồng cảm của con gái rất cao, họ dễ dàng hóa thân vào nhân vật ảo.",
        handling: "Tuyệt đối không cười cợt 'Phim giả mà khóc gì'. Cứ vỗ về, lấy giấy lau nước mắt và đùa nhẹ: 'Tội nghiệp anh nam phụ ghê, không có được cô nữ chính xinh đẹp, may mà anh ngoài đời vớ được em rồi'."
    },
    {
        chapter: "Chương 76: 'Anh thấy em mặc bộ này ổn không?' (Đi dự tiệc) - Compilation Error Risk",
        signs: "Chuẩn bị đi sự kiện quan trọng, nàng mặc xong rồi quay ra hỏi cậu với ánh mắt lo âu.",
        analysis: "Rủi ro lỗi biên dịch (Compilation Error). Nàng đang không tự tin vào bản Build hiện tại của mình. Nếu cậu nói một câu chê, toàn bộ quá trình chuẩn bị 2 tiếng trước đó sẽ sụp đổ, nàng sẽ đòi thay đồ lại từ đầu hoặc hủy không đi nữa.",
        handling: "Phải Verify (xác thực) giao diện ngay bằng lời khen chi tiết: 'Bộ này sang lắm, tôn dáng cực kỳ. Em mặc bộ này vô đó là sáng nhất hội cho xem'. Truyền ngay sự tự tin vào hệ thống."
    },
    {
        chapter: "Chương 77: Rep Story bằng 1 icon Tim/Like - Ping with 1 Byte",
        signs: "Cậu đăng ảnh đi cà phê với bạn bè, nàng không comment gì mà chỉ thả 1 cái Tim hoặc Like thẳng vào Story.",
        analysis: "Gửi 1 Byte dữ liệu để Ping hệ thống. Nàng muốn báo hiệu: 'Anh cứ đi chơi đi, em đã xem, em biết anh đang ở đâu rồi, nhớ giữ mình nhé'.",
        handling: "Ping back lại bằng cách thả tim lại tin nhắn đó, hoặc nhắn thêm 1 dòng: 'Nước ở đây dở ẹc, không ngon bằng trà sữa anh mua cho bé hôm bữa'."
    },
    {
        chapter: "Chương 78: Bỗng nhiên nhắc lại dự án của anh - System Health Check",
        signs: "Đang đi dạo Ninh Kiều tự nhiên hỏi: 'Cái dự án Bên Nhau Tuổi Già của anh đến đâu rồi? Dạo này thấy anh ít nói về nó'.",
        analysis: "Kiểm tra sức khỏe hệ thống (Health Check) về lý tưởng sống của cậu. Con gái bị thu hút bởi những chàng trai có hoài bão và tình yêu thương cộng đồng. Việc cậu bỏ lơ dự án (hoặc công việc) làm nàng lo lắng.",
        handling: "Báo cáo tiến độ đầy đủ. Nàng không kiểm tra để soi mói, nàng hỏi vì nàng muốn thấy ngọn lửa nhiệt huyết của cậu vẫn đang cháy."
    },
    {
        chapter: "Chương 79: 'Em muốn ở một mình' - Safe Mode Quarantine",
        signs: "Gặp chuyện buồn (gia đình/công việc), nàng tắt máy, khóa phòng khóc và dặn 'Anh đừng tìm em, em muốn ở một mình'.",
        analysis: "Hệ thống đang tự cách ly vào Safe Mode (Chế độ an toàn) để tự chữa lành. Nàng sợ truyền năng lượng tiêu cực (Bug) sang cho cậu.",
        handling: "Tôn trọng không gian riêng, KHÔNG phá cửa xông vào. Nhưng bắt buộc phải treo một dòng trạng thái chờ (Wait State) trước cổng: 'Anh tôn trọng em, nhưng anh ngồi ở phòng ngoài/trước cửa nhà, khi nào em cần một cái ôm thì gọi anh nhé'."
    },
    {
        chapter: "Chương 80: Đổ lỗi cho anh vì nàng đến muộn - Port Forwarding Error",
        signs: "Nàng makeup lâu làm trễ giờ xem phim, nhưng lại cáu ngược lại cậu: 'Sao anh không giục em sớm hơn/ Sao anh không gọi em dậy?'.",
        analysis: "Lỗi chuyển tiếp cổng (Port Forwarding). Thay vì tự chịu trách nhiệm về Exception (Lỗi đến muộn), nàng Forward cái lỗi đó sang Port của cậu để giảm bớt cảm giác tội lỗi bên trong.",
        handling: "Nhận luôn cái Port lỗi đó về mình cho êm chuyện. 'Ừ lỗi anh nãy mải ngồi bóc mấy cái số điện thoại file CSV nên quên gọi bé sớm. Thôi mình đi trễ tí coi đoạn giữa cũng được không sao đâu'. Nàng sẽ tự thấy hổ thẹn và ngoan ngoãn lại ngay."
    }, {
        chapter: "Chương 81: 'Dạo này em mập lên rồi' - Storage Quota Exceeded Warning",
        signs: "Đứng trước gương véo má, véo eo rồi than thở bộ nhớ lưu trữ (cân nặng) đang vượt quá giới hạn.",
        analysis: "Cảnh báo giả (False Positive). Nàng không cần cậu đưa ra giải pháp giải phóng dung lượng (giảm cân, tập gym). Nàng chỉ đang cần hàm Validate (xác thực) lại sự hấp dẫn của mình trong mắt cậu.",
        handling: "Bác bỏ cảnh báo ngay lập tức: 'Lỗi cảm biến rồi em ơi, anh bế vẫn thấy nhẹ hều. Tròn tròn xíu ôm mới thích chứ'. Sau đó tự động chở đi ăn lẩu/nướng để chứng minh cậu không quan tâm đến cái 'Quota' đó."
    },
    {
        chapter: "Chương 82: Gửi video couple tấu hài/lãng mạn - Feature Request (Yêu cầu tính năng mới)",
        signs: "Share liên tục mấy cái reels/TikTok các cặp đôi trêu chọc nhau, mua đồ ăn cho nhau, hoặc làm trò con bò.",
        analysis: "Nàng đang gửi một 'Feature Request' (Yêu cầu tính năng). Nàng thấy giao diện/chức năng của hệ thống nhà người ta thú vị và muốn cậu 'code' thêm tính năng đó vào mối quan hệ của cả hai.",
        handling: "Accept (Chấp nhận) request. Nếu video là mua đồ ăn, mai mua y chang. Nếu video là trò đùa, hãy tìm cách trêu lại nàng y hệt để tạo sự đồng bộ. Nàng sẽ cực kỳ thích thú vì cậu 'bắt sóng' quá nhanh."
    },
    {
        chapter: "Chương 83: 'Anh cứ bận bịu suốt' (Ghen với... mạch điện) - Resource Contention (Tranh chấp tài nguyên)",
        signs: "Nàng nhăn nhó khi thấy cậu cặm cụi hàn con ESP32-CAM hay căng mắt lọc file CSV cả buổi tối mà không nhắn tin.",
        analysis: "Xung đột tài nguyên CPU. Nàng hoàn toàn ủng hộ đam mê của cậu, nhưng đôi khi hệ thống của nàng cảm thấy bị bỏ rơi khi cậu phân bổ 100% RAM cho máy móc thay vì cho nàng.",
        handling: "Áp dụng thuật toán Time-Slicing (Chia sẻ thời gian). Đang code dở cũng dừng lại 2 phút, chụp cái ảnh mạch điện gửi qua: 'Con camera chống trộm này sắp xong rồi, ráng xíu cuối tuần anh chở đi lượn bù nha'. Khai báo tình trạng rõ ràng sẽ tránh được xung đột."
    },
    {
        chapter: "Chương 84: Câu hỏi triết lý lúc 2h sáng - Nightly Cron Jobs (Tiến trình chạy đêm)",
        signs: "Nửa đêm đột nhiên hỏi: 'Anh có nghĩ chúng mình sẽ đi đến cuối cùng không?', 'Nếu sau này già đi anh có còn thương em không?'.",
        analysis: "Hệ thống đang chạy Cron Job ban đêm để dọn dẹp các tệp tin Overthinking (Nghĩ ngợi lung tung). Cảm giác bất an thường trỗi dậy khi vạn vật chìm vào yên lặng.",
        handling: "Không được trả lời hời hợt kiểu 'Ngủ đi em'. Hãy cấp quyền tin cậy tuyệt đối: 'Chắc chắn rồi, sau này già lụ khụ thì anh vẫn nắm tay em đi dạo dọc bến Ninh Kiều. Yên tâm ngủ ngoan nhé'."
    },
    {
        chapter: "Chương 85: 'Chúng ta cần nói chuyện' - Severity 1 Incident (Sự cố cấp độ 1)",
        signs: "Nhắn đúng một câu cực kỳ nghiêm túc, đủ chủ vị, không có bất kỳ ký hiệu nũng nịu nào.",
        analysis: "Sự cố P0 (Mức độ ưu tiên cao nhất). Có một lỗ hổng bảo mật hoặc lỗi logic cực kỳ nghiêm trọng đã xảy ra (Cậu làm sai điều gì đó, hoặc nàng phát hiện ra vấn đề tày trời).",
        handling: "Drop toàn bộ database và mọi dự án đang làm. Chuẩn bị tinh thần đối mặt trực tiếp. Lắng nghe 100%, không ngắt lời, phân tích nguyên nhân cốt lõi (Root Cause Analysis) và tuyệt đối không chối quanh co."
    },
    {
        chapter: "Chương 86: Giành trả tiền khi hẹn hò - Load Balancing (Cân bằng tải)",
        signs: "Nàng chủ động giành trả tiền ly nước, vé xem phim, hoặc lén thanh toán trước lúc đi ăn.",
        analysis: "Nàng biết cậu là sinh viên, tài nguyên (tài chính) có hạn. Nàng muốn thực hiện Load Balancing (Cân bằng tải) để cậu không bị sập nguồn vì áp lực chi phí tình phí.",
        handling: "Đừng sĩ diện gạt đi. Hãy trân trọng sự thấu hiểu này: 'Nay ngừi iu bao anh uống nước thì tối anh đền lại chầu cá viên chiên nha'. Sự qua lại này giúp hệ thống cực kỳ bền vững."
    },
    {
        chapter: "Chương 87: Thử lòng bằng cách nhờ chọn hộ đồ - Catching Syntax Errors",
        signs: "Đưa ra 2 thỏi son màu y hệt nhau (nhưng nàng biết rõ nó khác nhau) và hỏi: 'Cây nào đẹp hơn?'.",
        analysis: "Bài test độ phân giải màn hình (mắt) và độ chú tâm. Nếu cậu nhìn lướt qua rồi phán 'Giống nhau mà', cậu dính lỗi Syntax Error (Lỗi cú pháp) ngay lập tức vì thái độ hời hợt.",
        handling: "Nhìn thật kỹ (dù trong mắt cậu nó vẫn là một màu). Cố gắng tìm ra điểm khác biệt nhỏ nhất: 'Cây này có vẻ tươi hơn xíu nè, hợp với da em hơn'. Ít ra cậu có chạy thuật toán phân tích!"
    },
    {
        chapter: "Chương 88: 'Sao anh không kể chuyện này cho em?' - Missing Webhook Trigger",
        signs: "Nàng phát hiện ra một chuyện vui/buồn của cậu thông qua người khác (hoặc Facebook) chứ không phải do cậu trực tiếp nói.",
        analysis: "Lỗi mất tín hiệu Webhook. Nàng muốn là người đầu tiên (hoặc ít nhất là nằm trong nhóm Admin) được nhận Notification (thông báo) về mọi thay đổi trong hệ thống của cậu. Việc biết sau người ngoài là một sự xúc phạm quyền lợi Admin.",
        handling: "Xin lỗi vì chưa setup trigger kịp thời: 'Nãy anh lu bu quá chưa kịp kể, định tối rảnh nch với em rồi mới nói'. Từ nay về sau, có biến gì phải Push Notification cho nàng đầu tiên."
    },
    {
        chapter: "Chương 89: Soi chi tiết những món quà công nghệ - Auditing Custom Code",
        signs: "Khi cậu gửi link web hiệu ứng hạt hay hoa hồng 3D, nàng sẽ ngồi zoom vào từng chữ, từng cánh hoa, hỏi cặn kẽ 'Cái này anh tự gõ á? Mất bao lâu?'.",
        analysis: "Nàng đang Audit (Kiểm toán) lại mã nguồn mở của cậu. Nàng không rành code, nhưng nàng muốn đo lường chính xác lượng 'Tâm huyết' mà cậu đã Inject (tiêm) vào món quà đó.",
        handling: "Khoe ngay sự cực khổ một cách tinh tế: 'Ừa anh ngồi viết CSS chỉnh từng cái hạt rơi mất mấy tiếng tối qua đó, miễng ngừi iu thích là được'. Điểm cộng sẽ được nhân theo cấp số nhân."
    },
    {
        chapter: "Chương 90: Hỏi thăm về dự án 'Bên Nhau Tuổi Già' - Checking Core Dependencies",
        signs: "Chủ động hỏi thăm tiến độ dự án tình nguyện, hoặc đề nghị cuối tuần qua phụ cậu phân loại đồ đạc.",
        analysis: "Kiểm tra các giá trị cốt lõi (Core Dependencies). Nàng đánh giá cực cao sự ấm áp và trách nhiệm xã hội của cậu. Việc đồng hành cùng dự án là cách nàng muốn Sync (đồng bộ) với hệ giá trị của cậu.",
        handling: "Chào đón nhiệt tình, cấp quyền Collaborator (Cộng tác viên) ngay lập tức. Cùng nhau làm việc tốt là cách xây dựng nền tảng (Backend) vững chãi nhất cho tình yêu."
    },
    {
        chapter: "Chương 91: Tặng quà ngược lại cho cậu - Reverse Proxy Routing",
        signs: "Tự nhiên mua cho cậu cái áo thun mới, cái móc khóa, hoặc ly cà phê treo trước cửa phòng trọ.",
        analysis: "Luồng dữ liệu đảo chiều. Nàng muốn cậu biết rằng cậu không phải là người duy nhất liên tục gửi Request (quan tâm). Nàng cũng muốn chăm sóc hệ thống của cậu.",
        handling: "Sử dụng ngay lập tức, chụp ảnh gửi lại kèm lời khen ngất trời: 'Áo xịn quá, mặc mát rười rượi, mai mặc đi học luôn'. Phản hồi tích cực sẽ khuyến khích nàng gửi thêm data."
    },
    {
        chapter: "Chương 92: Bắt bẻ lỗi chính tả khi cãi nhau - Parsing Error Diversion",
        signs: "Đang cãi nhau căng thẳng, cậu luống cuống gõ sai chính tả. Nàng lập tức rep: 'Viết đúng chính tả đi rồi cãi tiếp'.",
        analysis: "Chuyển hướng lỗi (Diversion). Khi đuối lý hoặc muốn làm giảm nhịp độ căng thẳng, nàng bắt lỗi Parsing (Cú pháp) để cậu phải chững lại, làm giảm nhiệt độ của CPU.",
        handling: "Sửa lại lỗi chính tả, hạ giọng xuống. Đây là cơ hội tốt để cậu chuyển từ chế độ cãi vã sang chế độ làm hòa: 'Anh cuống quá gõ nhầm. Thôi không cãi nhau nữa, anh sai rồi'."
    },
    {
        chapter: "Chương 93: Khám phá Portfolio của cậu - Public Endpoint Testing",
        signs: "Lén lút vào xem cái link `thuongnt-ktpm.github.io/portfoliothuong/` của cậu, lướt xem các dự án cậu từng làm.",
        analysis: "Kiểm tra các Endpoint công khai. Nàng muốn tự hào về người yêu mình. Nàng muốn xem cậu giới thiệu bản thân với thế giới (nhà tuyển dụng) ngầu như thế nào.",
        handling: "Hãy đảm bảo trên portfolio có một dòng 'ẩn' nào đó nhắc đến nguồn động lực của cậu (có thể là một easter egg nhỏ). Nếu nàng tìm thấy, nàng sẽ vui cả tháng."
    },
    {
        chapter: "Chương 94: 'Anh bận thì thôi' - Passive-Aggressive Shutdown",
        signs: "Rủ đi chơi nhưng cậu kẹt lịch học/làm đồ án. Nàng nhắn: 'À anh bận thì thôi, không sao đâu'.",
        analysis: "Shutdown thụ động. Dù nàng nói 'không sao' (Return 200 OK), nhưng bên trong là lỗi 404 (Không tìm thấy sự ưu tiên). Nàng hụt hẫng.",
        handling: "Không được 'Ừ anh kẹt lắm'. Phải đưa ra phương án thay thế ngay: 'Tối nay anh kẹt lịch nhóm rồi, chiều mai học xong anh qua đón đi lượn bù bù nha, đền bù chầu trà sữa'."
    },
    {
        chapter: "Chương 95: Nhớ từng chi tiết nhỏ cậu từng nói - Persistent Caching",
        signs: "Đột nhiên nhắc lại món đồ cậu vô tình khen đẹp từ 3 tháng trước, hoặc nhớ chính xác cậu không ăn được hành lá.",
        analysis: "Bộ nhớ Cache cực kỳ dai dẳng. Nàng lưu trữ mọi biến số liên quan đến cậu ở phân vùng ưu tiên cao nhất.",
        handling: "Thể hiện sự bất ngờ và cảm động. Đáp trả lại bằng cách cũng lưu trữ những tiểu tiết của nàng (ví dụ: nhớ size giày, màu son yêu thích)."
    },
    {
        chapter: "Chương 96: Tỏ ra yếu đuối để nhờ vả - Triggering Hero Mode",
        signs: "Không mở được nắp chai nước, xe thủng xăm, hoặc bị lỗi Win... nhõng nhẽo gọi cậu đến cứu.",
        analysis: "Cố tình kích hoạt Hero Mode (Chế độ Anh hùng). Có thể nàng tự mở được nắp chai, tự đem xe đi sửa được, nhưng nàng muốn cấp cho cậu cái quyền làm 'Super Admin' để bảo vệ nàng.",
        handling: "Xuất hiện như một vị thần. Xử lý gọn gàng sự cố (cài Win dạo, vặn nắp chai) với thái độ tự hào: 'Có thế cũng phải gọi anh, ngốc nghếch. Thôi đi ăn nào'."
    },
    {
        chapter: "Chương 97: Chỉnh đốn trang phục cho cậu - UI Code Formatting",
        signs: "Trước khi ra đường, nàng xắn lại tay áo cho cậu, vuốt lại cổ áo, hoặc chỉnh lại nếp tóc.",
        analysis: "Formatting lại mã nguồn giao diện (UI) trước khi Deploy ra công chúng. Nàng muốn cậu xuất hiện hoàn hảo nhất vì cậu là đại diện cho 'sản phẩm' của nàng.",
        handling: "Đứng im, tận hưởng sự chăm sóc. Một cái thơm nhẹ lên trán lúc nàng đang kiễng chân chỉnh áo sẽ là dòng lệnh hoàn hảo nhất lúc này."
    },
    {
        chapter: "Chương 98: Dằn vặt vì làm sai - Rollback Failure Panic",
        signs: "Nàng lỡ làm hỏng đồ của cậu, hoặc lỡ nổi nóng vô lý. Nhận ra mình sai, nàng khóc lóc, dằn vặt và liên tục xin lỗi.",
        analysis: "Hoảng loạn vì không thể Rollback (Hoàn tác) lại hành động sai. Hệ thống của nàng đang bị Crash vì cảm giác tội lỗi.",
        handling: "An ủi ngay lập tức, tắt mọi thông báo lỗi. 'Có gì đâu, đồ vật hỏng thì mua cái mới, em đừng khóc anh xót. Anh không giận xíu nào đâu'."
    },
    {
        chapter: "Chương 99: Cái ôm bất ngờ từ phía sau - Unexpected Positive Payload",
        signs: "Cậu đang cặm cụi gõ code hay hàn mạch, nàng đi nhẹ nhàng từ sau vòng tay ôm cổ cậu.",
        analysis: "Một gói dữ liệu tích cực (Positive Payload) được nạp vào hệ thống mà không cần cảnh báo trước. Đây là cách nàng tiếp thêm năng lượng (Charge Battery) cho cậu.",
        handling: "Dừng mọi công việc. Nắm lấy tay nàng, kéo nhẹ về phía trước và để nàng ngồi vào lòng. Công việc có thể trễ 10 phút, nhưng khoảnh khắc này là vô giá."
    },
    {
        chapter: "Chương 100: 'Em yêu Cậu SE của em' - Root Access Granted Permanently",
        signs: "Một buổi tối bình yên, nhìn cậu say sưa làm việc, nàng thốt lên câu khẳng định tình cảm một cách hoàn toàn tự nhiên.",
        analysis: "Quyền Root đã được cấp vĩnh viễn. Cậu đã vượt qua mọi bài Test bảo mật, xử lý xuất sắc mọi Bug tâm lý, và trở thành Core Component (Thành phần cốt lõi) không thể thay thế trong hệ điều hành của nàng.",
        handling: "Lưu trữ dữ liệu này vào ROM (Bộ nhớ chỉ đọc, không thể xóa). Nhìn sâu vào mắt nàng, mỉm cười và đáp trả: 'Anh cũng yêu em, ngừi iu của anh'."
    }, {
        chapter: "Chương 101: Seen nhưng không rep - Read Receipt Trap",
        signs: "Đã xem nhưng không trả lời, vẫn online story, vẫn active.",
        analysis: "Không phải quên rep. Nàng đang test mức độ ưu tiên. Nếu cậu không follow-up → fail.",
        handling: "Ping nhẹ: 'Ủa bơ anh luôn hả ta 🥲'. Không spam, nhưng phải có động thái."
    },
    {
        chapter: "Chương 102: 'Em mệt' - Low Battery Mode",
        signs: "Rep chậm, nói chuyện nhạt, không còn năng lượng.",
        analysis: "Không phải chán cậu, mà là hết pin cảm xúc (học, deadline, drama).",
        handling: "Không đòi hỏi. Chuyển sang chăm sóc: 'Ngủ xíu đi, tối anh gọi' + hành động thực tế."
    },
    {
        chapter: "Chương 103: Spam story buồn - Broadcast Signal",
        signs: "Story toàn quote buồn, nhạc suy.",
        analysis: "Gửi broadcast cho một người cụ thể (là cậu).",
        handling: "Đừng giả ngu. Nhắn riêng: 'Nãy thấy story, có chuyện gì kể anh nghe'."
    },
    {
        chapter: "Chương 104: 'Anh đoán đi' - Guessing Game Engine",
        signs: "Không nói thẳng, bắt đoán.",
        analysis: "Muốn cậu đọc vị cảm xúc → chứng minh độ hiểu.",
        handling: "Đưa 2-3 option: 'Em buồn vì anh hay vì chuyện khác?' (đừng đoán đại 1 phát)."
    },
    {
        chapter: "Chương 105: Trả lời lệch chủ đề - Context Switching",
        signs: "Hỏi A trả lời B.",
        analysis: "Đang tránh vấn đề chính hoặc giận nhẹ.",
        handling: "Không ép. Lái nhẹ: 'Thế còn cái anh hỏi hồi nãy thì sao ta'."
    },
    {
        chapter: "Chương 106: Like ảnh cũ - Deep Scan",
        signs: "Thả tim ảnh từ 2-3 năm trước.",
        analysis: "Đang đào database quá khứ.",
        handling: "Bình tĩnh: 'Đi khảo cổ hả bé 😏'. Không hoảng."
    },
    {
        chapter: "Chương 107: Soi giờ online - Activity Monitoring",
        signs: "‘Nãy thấy anh online mà không rep em’",
        analysis: "Tracking real-time activity → nghi ngờ priority.",
        handling: "Giải thích rõ context: 'Anh vừa mở máy xíu rồi out liền'."
    },
    {
        chapter: "Chương 108: Im lặng sau khi kể chuyện - Expecting Feedback",
        signs: "Kể xong rồi im.",
        analysis: "Đang chờ phản hồi cảm xúc, không phải giải pháp.",
        handling: "Rep cảm xúc: 'Nghe bực thiệt chứ'."
    },
    {
        chapter: "Chương 109: Gửi ảnh selfie nhưng không hỏi gì - Validation Request",
        signs: "Chỉ gửi ảnh, không caption.",
        analysis: "Đòi Validate UI.",
        handling: "Khen chi tiết: 'Góc này xinh ác luôn, tóc hợp quá'."
    },
    {
        chapter: "Chương 110: Đột nhiên hỏi 'Anh có thương em không?' - Emotional Checkpoint",
        signs: "Câu hỏi bất chợt.",
        analysis: "Checkpoint kiểm tra độ ổn định hệ thống.",
        handling: "Không được trả lời qua loa. Phải nâng cấp cảm xúc."
    },
    {
        chapter: "Chương 111: 'Em ổn' nhưng giọng khác - Voice Signal Mismatch",
        signs: "Text ok nhưng giọng buồn.",
        analysis: "Data text ≠ data audio.",
        handling: "Tin vào giọng, không tin chữ."
    },
    {
        chapter: "Chương 112: Xóa tin nhắn - Data Redaction",
        signs: "“This message was unsent”",
        analysis: "Nàng đã nghĩ lại → nhưng vẫn muốn cậu tò mò.",
        handling: "Hỏi nhẹ: 'Ủa xóa gì đó 😏'."
    },
    {
        chapter: "Chương 113: Trả lời cực nhanh rồi đột ngột chậm - Priority Drop",
        signs: "Đầu chat nhanh, sau chậm hẳn.",
        analysis: "Cảm xúc tụt hoặc bị phân tâm.",
        handling: "Không spam. Đợi rồi tạo hook mới."
    },
    {
        chapter: "Chương 114: Hỏi lại câu đã hỏi - Memory Validation",
        signs: "Hỏi lại chuyện cũ.",
        analysis: "Check consistency lời nói.",
        handling: "Trả lời giống trước → pass."
    },
    {
        chapter: "Chương 115: Gửi sticker thay vì text - Emotion Compression",
        signs: "Toàn sticker.",
        analysis: "Không muốn diễn đạt bằng lời.",
        handling: "Rep bằng vibe tương đương, đừng khô."
    },
    {
        chapter: "Chương 116: 'Tùy anh' - Undefined Behavior",
        signs: "Không đưa quyết định.",
        analysis: "Trap level cao.",
        handling: "Đưa option có định hướng, không tự quyết 100%."
    },
    {
        chapter: "Chương 117: Tự nhiên nhớ chuyện nhỏ - Random Access Memory",
        signs: "Nhắc chuyện linh tinh cũ.",
        analysis: "RAM quét lại ký ức.",
        handling: "Hùa theo, đừng phủ nhận."
    },
    {
        chapter: "Chương 118: Nhắn 'Chán' - Undefined Error",
        signs: "1 chữ 'chán'.",
        analysis: "Có vấn đề nhưng chưa xác định.",
        handling: "Đào sâu: 'Chán gì kể anh nghe coi'."
    },
    {
        chapter: "Chương 119: Tag bạn khác trước mặt cậu - Social Signal",
        signs: "Nhắc tên người khác nhiều.",
        analysis: "Gây attention hoặc test phản ứng.",
        handling: "Bình tĩnh, không ghen lố."
    },
    {
        chapter: "Chương 120: Rep tin nhắn cực formal - Relationship Downgrade",
        signs: "‘Vâng’, ‘Dạ’ lạnh tanh.",
        analysis: "Tình trạng nguy hiểm.",
        handling: "Hạ giọng, kéo vibe lại ngay."
    }, {
        chapter: "Chương 121: Seen story không react - Silent Monitoring",
        signs: "Xem story nhưng không tim, không rep",
        analysis: "Đang theo dõi ngầm, chưa muốn tương tác",
        handling: "Không hỏi dồn, thỉnh thoảng tạo hook để kéo tương tác lại"
    },
    {
        chapter: "Chương 122: Đổi avatar xinh đột xuất - Attention Boost",
        signs: "Up ảnh mới, đầu tư hình ảnh",
        analysis: "Muốn được chú ý (đặc biệt từ cậu)",
        handling: "Phải khen NGAY, không để người khác khen trước"
    },
    {
        chapter: "Chương 123: Trả lời chậm nhưng dài - Prioritized Response",
        signs: "Rep lâu nhưng viết dài",
        analysis: "Đang bận nhưng vẫn dành thời gian cho cậu",
        handling: "Trân trọng, rep có tâm lại"
    },
    {
        chapter: "Chương 124: Rep nhanh nhưng cụt - Emotional Drop",
        signs: "Nhanh nhưng ngắn",
        analysis: "Không có mood nói chuyện",
        handling: "Đừng spam, đổi chủ đề nhẹ nhàng"
    },
    {
        chapter: "Chương 125: Nhắn 'hmmm' - Processing State",
        signs: "hmmm, umm",
        analysis: "Đang suy nghĩ hoặc không biết trả lời",
        handling: "Đừng ép, hỗ trợ thêm context"
    },
    {
        chapter: "Chương 126: Thích hỏi 'Anh đang làm gì?' - Presence Check",
        signs: "Hỏi liên tục",
        analysis: "Muốn cảm giác có cậu bên cạnh",
        handling: "Trả lời + thêm cảm xúc, không trả lời khô"
    },
    {
        chapter: "Chương 127: Gửi ảnh đồ ăn - Sharing Moment",
        signs: "Ảnh đồ ăn, trà sữa",
        analysis: "Muốn share cuộc sống",
        handling: "Hùa theo: 'Ngon v á, để anh ăn chung'"
    },
    {
        chapter: "Chương 128: Nhắn lúc khuya nhiều hơn - Night Mode Emotion",
        signs: "Tâm sự ban đêm",
        analysis: "Cảm xúc mạnh hơn về đêm",
        handling: "Đừng ignore, đây là lúc dễ bonding nhất"
    },
    {
        chapter: "Chương 129: Hỏi linh tinh - Attention Seeking",
        signs: "Hỏi random",
        analysis: "Muốn nói chuyện, không phải cần câu trả lời",
        handling: "Trả lời + kéo dài câu chuyện"
    },
    {
        chapter: "Chương 130: Tự nhiên 'biến mất' - Temporary Disconnect",
        signs: "Đang chat tự nhiên off",
        analysis: "Có việc hoặc tụt mood",
        handling: "Không hỏi dồn, đợi reconnect"
    },
    {
        chapter: "Chương 131: Rep 1 từ 'ừ' - Low Interest Warning",
        signs: "ừ, ok",
        analysis: "Nguy hiểm nhẹ",
        handling: "Đổi cách nói chuyện ngay"
    },
    {
        chapter: "Chương 132: Gửi nhạc - Emotional Sharing",
        signs: "Gửi bài hát",
        analysis: "Ẩn ý cảm xúc trong lyrics",
        handling: "Nghe + phản hồi nội dung bài"
    },
    {
        chapter: "Chương 133: Nhắc 'đừng thức khuya' - Caring Signal",
        signs: "Quan tâm sức khỏe",
        analysis: "Có tình cảm thật",
        handling: "Đáp lại nhẹ nhàng, đừng troll"
    },
    {
        chapter: "Chương 134: Trêu chọc - Flirting Mode",
        signs: "Chọc ghẹo",
        analysis: "Đang vui + thích tương tác",
        handling: "Trêu lại, giữ vibe"
    },
    {
        chapter: "Chương 135: Hỏi 'anh có nhớ em không?' - Attachment Check",
        signs: "Câu hỏi trực tiếp",
        analysis: "Cần xác nhận tình cảm",
        handling: "Không trả lời hời hợt"
    },
    {
        chapter: "Chương 136: Gửi icon 🥺 - Soft Attack",
        signs: "Mặt đáng thương",
        analysis: "Đang xin xỏ hoặc làm nũng",
        handling: "Khó từ chối, phải mềm lại"
    },
    {
        chapter: "Chương 137: Không chủ động nhắn nữa - Interest Drop",
        signs: "Im lặng dài",
        analysis: "Đang test hoặc mất hứng",
        handling: "Chủ động kéo lại"
    },
    {
        chapter: "Chương 138: Reply theo kiểu mirror - Matching Energy",
        signs: "Bạn nhắn sao, rep y chang",
        analysis: "Phản chiếu năng lượng",
        handling: "Muốn vibe tốt → mày phải lead trước"
    },
    {
        chapter: "Chương 139: Cười nhiều 😂 - High Comfort",
        signs: "Spam haha",
        analysis: "Thoải mái với cậu",
        handling: "Tiếp tục giữ vibe"
    },
    {
        chapter: "Chương 140: Nhắn 'ngủ ngon' trước - Soft Ending",
        signs: "Chủ động kết thúc",
        analysis: "Quan tâm nhưng mệt",
        handling: "Rep lại ngọt xíu"
    },
    {
        chapter: "Chương 141: 'Anh có bồ chưa?' - Status Check",
        signs: "Hỏi thẳng về tình trạng",
        analysis: "Đang muốn xác định vị trí của cậu",
        handling: "Trả lời rõ ràng, không vòng vo"
    },
    {
        chapter: "Chương 142: 'Em không giận' nhưng giọng lạnh - Deceptive Calm",
        signs: "Nói không giận nhưng thái độ khác",
        analysis: "Đang giận nhưng không muốn nói",
        handling: "Hỏi nhẹ nhàng, không ép"
    },
    {
        chapter: "Chương 143: Thả tim story cũ - Memory Scan",
        signs: "Like ảnh từ lâu",
        analysis: "Đang lục lại quá khứ",
        handling: "Bình tĩnh, không hoảng"
    },
    {
        chapter: "Chương 144: 'Anh đi đâu đó?' - Suspicious Inquiry",
        signs: "Hỏi về lịch trình",
        analysis: "Muốn biết cậu đang làm gì",
        handling: "Trả lời trung thực"
    },
    {
        chapter: "Chương 145: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
        signs: "Tâm sự ngắn gọn",
        analysis: "Muốn cậu đoán và dỗ",
        handling: "Đừng đoán mò, hỏi nhẹ"
    },
    {
        chapter: "Chương 146: 'Ừ' ngắn gọn - Low Engagement",
        signs: "Trả lời 1 từ",
        analysis: "Không muốn nói chuyện",
        handling: "Đổi chủ đề hoặc kết thúc"
    },
    {
        chapter: "Chương 147: 'Anh có thương em không?' - Love Check",
        signs: "Câu hỏi trực tiếp",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời chân thành"
    },
    {
        chapter: "Chương 148: 'Em không cần gì đâu' - Hidden Need",
        signs: "Từ chối giúp đỡ",
        analysis: "Muốn cậu tự hiểu và làm",
        handling: "Đừng tin, hãy chủ động"
    },
    {
        chapter: "Chương 149: 'Anh bận thì thôi' - Passive Aggression",
        signs: "Giả vờ thông cảm",
        analysis: "Đang dỗi vì bị bơ",
        handling: "Xin lỗi và bù đắp"
    },
    {
        chapter: "Chương 150: 'Em ổn' nhưng giọng khác - Voice Mismatch",
        signs: "Text ok, giọng không ok",
        analysis: "Nói dối cảm xúc",
        handling: "Tin vào giọng, không tin chữ"
    },
    {
        chapter: "Chương 151: 'Anh có nhớ em không?' - Attachment Check",
        signs: "Hỏi vu vơ",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời ngọt ngào"
    },
    {
        chapter: "Chương 152: 'Em không giận' nhưng im lặng - Silent Treatment",
        signs: "Nói không giận nhưng không nói",
        analysis: "Đang giận ngầm",
        handling: "Hạ giọng, dỗ ngọt"
    },
    {
        chapter: "Chương 153: 'Anh đi đâu đó?' - Suspicious Inquiry",
        signs: "Hỏi về lịch trình",
        analysis: "Muốn biết cậu đang làm gì",
        handling: "Trả lời trung thực"
    },
    {
        chapter: "Chương 154: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
        signs: "Tâm sự ngắn gọn",
        analysis: "Muốn cậu đoán và dỗ",
        handling: "Đừng đoán mò, hỏi nhẹ"
    },
    {
        chapter: "Chương 155: 'Ừ' ngắn gọn - Low Engagement",
        signs: "Trả lời 1 từ",
        analysis: "Không muốn nói chuyện",
        handling: "Đổi chủ đề hoặc kết thúc"
    },
    {
        chapter: "Chương 156: 'Anh có thương em không?' - Love Check",
        signs: "Câu hỏi trực tiếp",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời chân thành"
    },
    {
        chapter: "Chương 157: 'Em không cần gì đâu' - Hidden Need",
        signs: "Từ chối giúp đỡ",
        analysis: "Muốn cậu tự hiểu và làm",
        handling: "Đừng tin, hãy chủ động"
    },
    {
        chapter: "Chương 158: 'Anh bận thì thôi' - Passive Aggression",
        signs: "Giả vờ thông cảm",
        analysis: "Đang dỗi vì bị bơ",
        handling: "Xin lỗi và bù đắp"
    },
    {
        chapter: "Chương 159: 'Em ổn' nhưng giọng khác - Voice Mismatch",
        signs: "Text ok, giọng không ok",
        analysis: "Nói dối cảm xúc",
        handling: "Tin vào giọng, không tin chữ"
    },
    {
        chapter: "Chương 160: 'Anh có nhớ em không?' - Attachment Check",
        signs: "Hỏi vu vơ",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời ngọt ngào"
    },
    {
        chapter: "Chương 161: 'Em không giận' nhưng im lặng - Silent Treatment",
        signs: "Nói không giận nhưng không nói",
        analysis: "Đang giận ngầm",
        handling: "Hạ giọng, dỗ ngọt"
    },
    {
        chapter: "Chương 162: 'Anh đi đâu đó?' - Suspicious Inquiry",
        signs: "Hỏi về lịch trình",
        analysis: "Muốn biết cậu đang làm gì",
        handling: "Trả lời trung thực"
    },
    {
        chapter: "Chương 163: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
        signs: "Tâm sự ngắn gọn",
        analysis: "Muốn cậu đoán và dỗ",
        handling: "Đừng đoán mò, hỏi nhẹ"
    },
    {
        chapter: "Chương 164: 'Ừ' ngắn gọn - Low Engagement",
        signs: "Trả lời 1 từ",
        analysis: "Không muốn nói chuyện",
        handling: "Đổi chủ đề hoặc kết thúc"
    },
    {
        chapter: "Chương 165: 'Anh có thương em không?' - Love Check",
        signs: "Câu hỏi trực tiếp",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời chân thành"
    },
    {
        chapter: "Chương 166: 'Em không cần gì đâu' - Hidden Need",
        signs: "Từ chối giúp đỡ",
        analysis: "Muốn cậu tự hiểu và làm",
        handling: "Đừng tin, hãy chủ động"
    },
    {
        chapter: "Chương 167: 'Anh bận thì thôi' - Passive Aggression",
        signs: "Giả vờ thông cảm",
        analysis: "Đang dỗi vì bị bơ",
        handling: "Xin lỗi và bù đắp"
    },
    {
        chapter: "Chương 168: 'Em ổn' nhưng giọng khác - Voice Mismatch",
        signs: "Text ok, giọng không ok",
        analysis: "Nói dối cảm xúc",
        handling: "Tin vào giọng, không tin chữ"
    },
    {
        chapter: "Chương 169: 'Anh có nhớ em không?' - Attachment Check",
        signs: "Hỏi vu vơ",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời ngọt ngào"
    },
    {
        chapter: "Chương 170: 'Em không giận' nhưng im lặng - Silent Treatment",
        signs: "Nói không giận nhưng không nói",
        analysis: "Đang giận ngầm",
        handling: "Hạ giọng, dỗ ngọt"
    },
    {
        chapter: "Chương 171: 'Anh đi đâu đó?' - Suspicious Inquiry",
        signs: "Hỏi về lịch trình",
        analysis: "Muốn biết cậu đang làm gì",
        handling: "Trả lời trung thực"
    },
    {
        chapter: "Chương 172: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
        signs: "Tâm sự ngắn gọn",
        analysis: "Muốn cậu đoán và dỗ",
        handling: "Đừng đoán mò, hỏi nhẹ"
    },
    {
        chapter: "Chương 173: 'Ừ' ngắn gọn - Low Engagement",
        signs: "Trả lời 1 từ",
        analysis: "Không muốn nói chuyện",
        handling: "Đổi chủ đề hoặc kết thúc"
    },
    {
        chapter: "Chương 174: 'Anh có thương em không?' - Love Check",
        signs: "Câu hỏi trực tiếp",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời chân thành"
    },
    {
        chapter: "Chương 175: 'Em không cần gì đâu' - Hidden Need",
        signs: "Từ chối giúp đỡ",
        analysis: "Muốn cậu tự hiểu và làm",
        handling: "Đừng tin, hãy chủ động"
    },
    {
        chapter: "Chương 176: 'Anh bận thì thôi' - Passive Aggression",
        signs: "Giả vờ thông cảm",
        analysis: "Đang dỗi vì bị bơ",
        handling: "Xin lỗi và bù đắp"
    },
    {
        chapter: "Chương 177: 'Em ổn' nhưng giọng khác - Voice Mismatch",
        signs: "Text ok, giọng không ok",
        analysis: "Nói dối cảm xúc",
        handling: "Tin vào giọng, không tin chữ"
    },
    {
        chapter: "Chương 178: 'Anh có nhớ em không?' - Attachment Check",
        signs: "Hỏi vu vơ",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời ngọt ngào"
    },
    {
        chapter: "Chương 179: 'Em không giận' nhưng im lặng - Silent Treatment",
        signs: "Nói không giận nhưng không nói",
        analysis: "Đang giận ngầm",
        handling: "Hạ giọng, dỗ ngọt"
    },
    {
        chapter: "Chương 180: 'Anh đi đâu đó?' - Suspicious Inquiry",
        signs: "Hỏi về lịch trình",
        analysis: "Muốn biết cậu đang làm gì",
        handling: "Trả lời trung thực"
    },
    {
        chapter: "Chương 181: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
        signs: "Tâm sự ngắn gọn",
        analysis: "Muốn cậu đoán và dỗ",
        handling: "Đừng đoán mò, hỏi nhẹ"
    },
    {
        chapter: "Chương 182: 'Ừ' ngắn gọn - Low Engagement",
        signs: "Trả lời 1 từ",
        analysis: "Không muốn nói chuyện",
        handling: "Đổi chủ đề hoặc kết thúc"
    },
    {
        chapter: "Chương 183: 'Anh có thương em không?' - Love Check",
        signs: "Câu hỏi trực tiếp",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời chân thành"
    },
    {
        chapter: "Chương 184: 'Em không cần gì đâu' - Hidden Need",
        signs: "Từ chối giúp đỡ",
        analysis: "Muốn cậu tự hiểu và làm",
        handling: "Đừng tin, hãy chủ động"
    },
    {
        chapter: "Chương 185: 'Anh bận thì thôi' - Passive Aggression",
        signs: "Giả vờ thông cảm",
        analysis: "Đang dỗi vì bị bơ",
        handling: "Xin lỗi và bù đắp"
    },
    {
        chapter: "Chương 186: 'Em ổn' nhưng giọng khác - Voice Mismatch",
        signs: "Text ok, giọng không ok",
        analysis: "Nói dối cảm xúc",
        handling: "Tin vào giọng, không tin chữ"
    },
    {
        chapter: "Chương 187: 'Anh có nhớ em không?' - Attachment Check",
        signs: "Hỏi vu vơ",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời ngọt ngào"
    },
    {
        chapter: "Chương 188: 'Em không giận' nhưng im lặng - Silent Treatment",
        signs: "Nói không giận nhưng không nói",
        analysis: "Đang giận ngầm",
        handling: "Hạ giọng, dỗ ngọt"
    },
    {
        chapter: "Chương 189: 'Anh đi đâu đó?' - Suspicious Inquiry",
        signs: "Hỏi về lịch trình",
        analysis: "Muốn biết cậu đang làm gì",
        handling: "Trả lời trung thực"
    },
    {
        chapter: "Chương 190: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
        signs: "Tâm sự ngắn gọn",
        analysis: "Muốn cậu đoán và dỗ",
        handling: "Đừng đoán mò, hỏi nhẹ"
    },
    {
        chapter: "Chương 191: 'Ừ' ngắn gọn - Low Engagement",
        signs: "Trả lời 1 từ",
        analysis: "Không muốn nói chuyện",
        handling: "Đổi chủ đề hoặc kết thúc"
    },
    {
        chapter: "Chương 192: 'Anh có thương em không?' - Love Check",
        signs: "Câu hỏi trực tiếp",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời chân thành"
    },
    {
        chapter: "Chương 193: 'Em không cần gì đâu' - Hidden Need",
        signs: "Từ chối giúp đỡ",
        analysis: "Muốn cậu tự hiểu và làm",
        handling: "Đừng tin, hãy chủ động"
    },
    {
        chapter: "Chương 194: 'Anh bận thì thôi' - Passive Aggression",
        signs: "Giả vờ thông cảm",
        analysis: "Đang dỗi vì bị bơ",
        handling: "Xin lỗi và bù đắp"
    },
    {
        chapter: "Chương 195: 'Em ổn' nhưng giọng khác - Voice Mismatch",
        signs: "Text ok, giọng không ok",
        analysis: "Nói dối cảm xúc",
        handling: "Tin vào giọng, không tin chữ"
    },
    {
        chapter: "Chương 196: 'Anh có nhớ em không?' - Attachment Check",
        signs: "Hỏi vu vơ",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời ngọt ngào"
    },
    {
        chapter: "Chương 197: 'Em không giận' nhưng im lặng - Silent Treatment",
        signs: "Nói không giận nhưng không nói",
        analysis: "Đang giận ngầm",
        handling: "Hạ giọng, dỗ ngọt"
    },
    {
        chapter: "Chương 198: 'Anh đi đâu đó?' - Suspicious Inquiry",
        signs: "Hỏi về lịch trình",
        analysis: "Muốn biết cậu đang làm gì",
        handling: "Trả lời trung thực"
    },
    {
        chapter: "Chương 199: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
        signs: "Tâm sự ngắn gọn",
        analysis: "Muốn cậu đoán và dỗ",
        handling: "Đừng đoán mò, hỏi nhẹ"
    },
    {
        chapter: "Chương 200: 'Ừ' ngắn gọn - Low Engagement",
        signs: "Trả lời 1 từ",
        analysis: "Không muốn nói chuyện",
        handling: "Đổi chủ đề hoặc kết thúc"
    },
    {
        chapter: "Chương 201: 'Anh có thương em không?' - Love Check",
        signs: "Câu hỏi trực tiếp",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời chân thành"
    },
    {
        chapter: "Chương 202: 'Em không cần gì đâu' - Hidden Need",
        signs: "Từ chối giúp đỡ",
        analysis: "Muốn cậu tự hiểu và làm",
        handling: "Đừng tin, hãy chủ động"
    },
    {
        chapter: "Chương 203: 'Anh bận thì thôi' - Passive Aggression",
        signs: "Giả vờ thông cảm",
        analysis: "Đang dỗi vì bị bơ",
        handling: "Xin lỗi và bù đắp"
    },
    {
        chapter: "Chương 204: 'Em ổn' nhưng giọng khác - Voice Mismatch",
        signs: "Text ok, giọng không ok",
        analysis: "Nói dối cảm xúc",
        handling: "Tin vào giọng, không tin chữ"
    },
    {
        chapter: "Chương 205: 'Anh có nhớ em không?' - Attachment Check",
        signs: "Hỏi vu vơ",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời ngọt ngào"
    },
    {
        chapter: "Chương 206: 'Em không giận' nhưng im lặng - Silent Treatment",
        signs: "Nói không giận nhưng không nói",
        analysis: "Đang giận ngầm",
        handling: "Hạ giọng, dỗ ngọt"
    },
    {
        chapter: "Chương 207: 'Anh đi đâu đó?' - Suspicious Inquiry",
        signs: "Hỏi về lịch trình",
        analysis: "Muốn biết cậu đang làm gì",
        handling: "Trả lời trung thực"
    },
    {
        chapter: "Chương 208: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
        signs: "Tâm sự ngắn gọn",
        analysis: "Muốn cậu đoán và dỗ",
        handling: "Đừng đoán mò, hỏi nhẹ"
    },
    {
        chapter: "Chương 209: 'Ừ' ngắn gọn - Low Engagement",
        signs: "Trả lời 1 từ",
        analysis: "Không muốn nói chuyện",
        handling: "Đổi chủ đề hoặc kết thúc"
    },
    {
        chapter: "Chương 210: 'Anh có thương em không?' - Love Check",
        signs: "Câu hỏi trực tiếp",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời chân thành"
    },
    {
        chapter: "Chương 211: 'Em không cần gì đâu' - Hidden Need",
        signs: "Từ chối giúp đỡ",
        analysis: "Muốn cậu tự hiểu và làm",
        handling: "Đừng tin, hãy chủ động"
    },
    {
        chapter: "Chương 212: 'Anh bận thì thôi' - Passive Aggression",
        signs: "Giả vờ thông cảm",
        analysis: "Đang dỗi vì bị bơ",
        handling: "Xin lỗi và bù đắp"
    },
    {
        chapter: "Chương 213: 'Em ổn' nhưng giọng khác - Voice Mismatch",
        signs: "Text ok, giọng không ok",
        analysis: "Nói dối cảm xúc",
        handling: "Tin vào giọng, không tin chữ"
    },
    {
        chapter: "Chương 214: 'Anh có nhớ em không?' - Attachment Check",
        signs: "Hỏi vu vơ",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời ngọt ngào"
    },
    {
        chapter: "Chương 215: 'Em không giận' nhưng im lặng - Silent Treatment",
        signs: "Nói không giận nhưng không nói",
        analysis: "Đang giận ngầm",
        handling: "Hạ giọng, dỗ ngọt"
    },
    {
        chapter: "Chương 216: 'Anh đi đâu đó?' - Suspicious Inquiry",
        signs: "Hỏi về lịch trình",
        analysis: "Muốn biết cậu đang làm gì",
        handling: "Trả lời trung thực"
    },
    {
        chapter: "Chương 217: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
        signs: "Tâm sự ngắn gọn",
        analysis: "Muốn cậu đoán và dỗ",
        handling: "Đừng đoán mò, hỏi nhẹ"
    },
    {
        chapter: "Chương 218: 'Ừ' ngắn gọn - Low Engagement",
        signs: "Trả lời 1 từ",
        analysis: "Không muốn nói chuyện",
        handling: "Đổi chủ đề hoặc kết thúc"
    },
    {
        chapter: "Chương 219: 'Anh có thương em không?' - Love Check",
        signs: "Câu hỏi trực tiếp",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời chân thành"
    },
    {
        chapter: "Chương 220: 'Em không cần gì đâu' - Hidden Need",
        signs: "Từ chối giúp đỡ",
        analysis: "Muốn cậu tự hiểu và làm",
        handling: "Đừng tin, hãy chủ động"
    },
    {
        chapter: "Chương 221: 'Anh bận thì thôi' - Passive Aggression",
        signs: "Giả vờ thông cảm",
        analysis: "Đang dỗi vì bị bơ",
        handling: "Xin lỗi và bù đắp"
    },
    {
        chapter: "Chương 222: 'Em ổn' nhưng giọng khác - Voice Mismatch",
        signs: "Text ok, giọng không ok",
        analysis: "Nói dối cảm xúc",
        handling: "Tin vào giọng, không tin chữ"
    },
    {
        chapter: "Chương 223: 'Anh có nhớ em không?' - Attachment Check",
        signs: "Hỏi vu vơ",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời ngọt ngào"
    },
    {
        chapter: "Chương 224: 'Em không giận' nhưng im lặng - Silent Treatment",
        signs: "Nói không giận nhưng không nói",
        analysis: "Đang giận ngầm",
        handling: "Hạ giọng, dỗ ngọt"
    },
    {
        chapter: "Chương 225: 'Anh đi đâu đó?' - Suspicious Inquiry",
        signs: "Hỏi về lịch trình",
        analysis: "Muốn biết cậu đang làm gì",
        handling: "Trả lời trung thực"
    },
    {
        chapter: "Chương 226: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
        signs: "Tâm sự ngắn gọn",
        analysis: "Muốn cậu đoán và dỗ",
        handling: "Đừng đoán mò, hỏi nhẹ"
    },
    {
        chapter: "Chương 227: 'Ừ' ngắn gọn - Low Engagement",
        signs: "Trả lời 1 từ",
        analysis: "Không muốn nói chuyện",
        handling: "Đổi chủ đề hoặc kết thúc"
    },
    {
        chapter: "Chương 228: 'Anh có thương em không?' - Love Check",
        signs: "Câu hỏi trực tiếp",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời chân thành"
    },
    {
        chapter: "Chương 229: 'Em không cần gì đâu' - Hidden Need",
        signs: "Từ chối giúp đỡ",
        analysis: "Muốn cậu tự hiểu và làm",
        handling: "Đừng tin, hãy chủ động"
    },
    {
        chapter: "Chương 230: 'Anh bận thì thôi' - Passive Aggression",
        signs: "Giả vờ thông cảm",
        analysis: "Đang dỗi vì bị bơ",
        handling: "Xin lỗi và bù đắp"
    },
    {
        chapter: "Chương 231: 'Em ổn' nhưng giọng khác - Voice Mismatch",
        signs: "Text ok, giọng không ok",
        analysis: "Nói dối cảm xúc",
        handling: "Tin vào giọng, không tin chữ"
    },
    {
        chapter: "Chương 232: 'Anh có nhớ em không?' - Attachment Check",
        signs: "Hỏi vu vơ",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời ngọt ngào"
    },
    {
        chapter: "Chương 233: 'Em không giận' nhưng im lặng - Silent Treatment",
        signs: "Nói không giận nhưng không nói",
        analysis: "Đang giận ngầm",
        handling: "Hạ giọng, dỗ ngọt"
    },
    {
        chapter: "Chương 234: 'Anh đi đâu đó?' - Suspicious Inquiry",
        signs: "Hỏi về lịch trình",
        analysis: "Muốn biết cậu đang làm gì",
        handling: "Trả lời trung thực"
    },
    {
        chapter: "Chương 235: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
        signs: "Tâm sự ngắn gọn",
        analysis: "Muốn cậu đoán và dỗ",
        handling: "Đừng đoán mò, hỏi nhẹ"
    },
    {
        chapter: "Chương 236: 'Ừ' ngắn gọn - Low Engagement",
        signs: "Trả lời 1 từ",
        analysis: "Không muốn nói chuyện",
        handling: "Đổi chủ đề hoặc kết thúc"
    },
    {
        chapter: "Chương 237: 'Anh có thương em không?' - Love Check",
        signs: "Câu hỏi trực tiếp",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời chân thành"
    },
    {
        chapter: "Chương 238: 'Em không cần gì đâu' - Hidden Need",
        signs: "Từ chối giúp đỡ",
        analysis: "Muốn cậu tự hiểu và làm",
        handling: "Đừng tin, hãy chủ động"
    },
    {
        chapter: "Chương 239: 'Anh bận thì thôi' - Passive Aggression",
        signs: "Giả vờ thông cảm",
        analysis: "Đang dỗi vì bị bơ",
        handling: "Xin lỗi và bù đắp"
    },
    {
        chapter: "Chương 240: 'Em ổn' nhưng giọng khác - Voice Mismatch",
        signs: "Text ok, giọng không ok",
        analysis: "Nói dối cảm xúc",
        handling: "Tin vào giọng, không tin chữ"
    },
    {
        chapter: "Chương 241: 'Anh có nhớ em không?' - Attachment Check",
        signs: "Hỏi vu vơ",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời ngọt ngào"
    },
    {
        chapter: "Chương 242: 'Em không giận' nhưng im lặng - Silent Treatment",
        signs: "Nói không giận nhưng không nói",
        analysis: "Đang giận ngầm",
        handling: "Hạ giọng, dỗ ngọt"
    },
    {
        chapter: "Chương 243: 'Anh đi đâu đó?' - Suspicious Inquiry",
        signs: "Hỏi về lịch trình",
        analysis: "Muốn biết cậu đang làm gì",
        handling: "Trả lời trung thực"
    },
    {
        chapter: "Chương 244: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
        signs: "Tâm sự ngắn gọn",
        analysis: "Muốn cậu đoán và dỗ",
        handling: "Đừng đoán mò, hỏi nhẹ"
    },
    {
        chapter: "Chương 245: 'Ừ' ngắn gọn - Low Engagement",
        signs: "Trả lời 1 từ",
        analysis: "Không muốn nói chuyện",
        handling: "Đổi chủ đề hoặc kết thúc"
    },
    {
        chapter: "Chương 246: 'Anh có thương em không?' - Love Check",
        signs: "Câu hỏi trực tiếp",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời chân thành"
    },
    {
        chapter: "Chương 247: 'Em không cần gì đâu' - Hidden Need",
        signs: "Từ chối giúp đỡ",
        analysis: "Muốn cậu tự hiểu và làm",
        handling: "Đừng tin, hãy chủ động"
    },
    {
        chapter: "Chương 248: 'Anh bận thì thôi' - Passive Aggression",
        signs: "Giả vờ thông cảm",
        analysis: "Đang dỗi vì bị bơ",
        handling: "Xin lỗi và bù đắp"
    },
    {
        chapter: "Chương 249: 'Em ổn' nhưng giọng khác - Voice Mismatch",
        signs: "Text ok, giọng không ok",
        analysis: "Nói dối cảm xúc",
        handling: "Tin vào giọng, không tin chữ"
    },
    {
        chapter: "Chương 250: 'Anh có nhớ em không?' - Attachment Check",
        signs: "Hỏi vu vơ",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời ngọt ngào"
    },
    {
        chapter: "Chương 251: 'Em không giận' nhưng im lặng - Silent Treatment",
        signs: "Nói không giận nhưng không nói",
        analysis: "Đang giận ngầm",
        handling: "Hạ giọng, dỗ ngọt"
    },
    {
        chapter: "Chương 252: 'Anh đi đâu đó?' - Suspicious Inquiry",
        signs: "Hỏi về lịch trình",
        analysis: "Muốn biết cậu đang làm gì",
        handling: "Trả lời trung thực"
    },
    {
        chapter: "Chương 253: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
        signs: "Tâm sự ngắn gọn",
        analysis: "Muốn cậu đoán và dỗ",
        handling: "Đừng đoán mò, hỏi nhẹ"
    },
    {
        chapter: "Chương 254: 'Ừ' ngắn gọn - Low Engagement",
        signs: "Trả lời 1 từ",
        analysis: "Không muốn nói chuyện",
        handling: "Đổi chủ đề hoặc kết thúc"
    },
    {
        chapter: "Chương 255: 'Anh có thương em không?' - Love Check",
        signs: "Câu hỏi trực tiếp",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời chân thành"
    },
    {
        chapter: "Chương 256: 'Em không cần gì đâu' - Hidden Need",
        signs: "Từ chối giúp đỡ",
        analysis: "Muốn cậu tự hiểu và làm",
        handling: "Đừng tin, hãy chủ động"
    },
    {
        chapter: "Chương 257: 'Anh bận thì thôi' - Passive Aggression",
        signs: "Giả vờ thông cảm",
        analysis: "Đang dỗi vì bị bơ",
        handling: "Xin lỗi và bù đắp"
    },
    {
        chapter: "Chương 258: 'Em ổn' nhưng giọng khác - Voice Mismatch",
        signs: "Text ok, giọng không ok",
        analysis: "Nói dối cảm xúc",
        handling: "Tin vào giọng, không tin chữ"
    },
    {
        chapter: "Chương 259: 'Anh có nhớ em không?' - Attachment Check",
        signs: "Hỏi vu vơ",
        analysis: "Cần xác nhận tình cảm",
        handling: "Trả lời ngọt ngào"
    },
    {
        chapter: "Chương 141: 'Haha' nhưng không có emoji - Dry Laugh",
        signs: "haha",
        analysis: "Cười xã giao, không thật sự vui",
        handling: "Đổi chủ đề ngay",
        tags: ["chat"],
        level: "low",
        keywords: ["haha"]
    },
    {
        chapter: "Chương 142: Gửi ảnh cũ - Memory Recall",
        signs: "Ảnh hồi xưa",
        analysis: "Đang nhớ lại kỷ niệm",
        handling: "Hùa theo cảm xúc",
        tags: ["kỷ niệm"],
        level: "medium",
        keywords: ["ảnh cũ"]
    },
    {
        chapter: "Chương 143: Hỏi lịch trình - Tracking",
        signs: "Hôm nay anh làm gì",
        analysis: "Quan tâm + kiểm tra",
        handling: "Trả lời rõ ràng",
        tags: ["quan tâm"],
        level: "low",
        keywords: ["làm gì"]
    },
    {
        chapter: "Chương 144: Thả react chậm - Delayed Emotion",
        signs: "Tim sau vài phút",
        analysis: "Không phải ưu tiên cao",
        handling: "Tăng sức hút lại",
        tags: ["attention"],
        level: "low",
        keywords: ["react"]
    },
    {
        chapter: "Chương 145: Nhắn nhiều dấu chấm... - Hesitation",
        signs: "...",
        analysis: "Đang do dự hoặc buồn",
        handling: "Hỏi nhẹ nhàng",
        tags: ["cảm xúc"],
        level: "medium",
        keywords: ["..."]
    },
    {
        chapter: "Chương 146: Rep kiểu hỏi lại - Defensive Mode",
        signs: "Ủa sao hỏi vậy",
        analysis: "Đang nghi ngờ",
        handling: "Giải thích rõ",
        tags: ["nghi ngờ"],
        level: "medium",
        keywords: ["sao hỏi"]
    },
    {
        chapter: "Chương 147: Gửi ảnh không mặt - Low Confidence",
        signs: "Ảnh che mặt",
        analysis: "Thiếu tự tin",
        handling: "Khen nhẹ nhàng",
        tags: ["tự ti"],
        level: "low",
        keywords: ["che mặt"]
    },
    {
        chapter: "Chương 148: Nói chuyện đứt quãng - Multitasking",
        signs: "Rep ngắt quãng",
        analysis: "Đang bận",
        handling: "Không spam",
        tags: ["bận"],
        level: "low",
        keywords: ["rep chậm"]
    },
    {
        chapter: "Chương 149: Gửi voice cười - High Mood",
        signs: "voice cười",
        analysis: "Mood cao",
        handling: "Giữ vibe",
        tags: ["vui"],
        level: "low",
        keywords: ["voice"]
    },
    {
        chapter: "Chương 150: Nhắn 'đi ngủ đây' nhưng vẫn online - Fake Exit",
        signs: "nói ngủ nhưng online",
        analysis: "Test hoặc chưa muốn ngủ",
        handling: "Không bắt lỗi",
        tags: ["test"],
        level: "medium",
        keywords: ["ngủ"]
    },
    {
        chapter: "Chương 151: Không hỏi lại - No Engagement",
        signs: "chỉ trả lời, không hỏi",
        analysis: "Thiếu hứng thú",
        handling: "Tạo câu hỏi mở",
        tags: ["chán"],
        level: "medium",
        keywords: ["không hỏi"]
    },
    {
        chapter: "Chương 152: Gửi sticker buồn - Sad Mode",
        signs: "sticker buồn",
        analysis: "Mood thấp",
        handling: "Dỗ",
        tags: ["buồn"],
        level: "medium",
        keywords: ["buồn"]
    },
    {
        chapter: "Chương 153: Tag bài deep - Overthinking",
        signs: "tag quote buồn",
        analysis: "Đang suy nghĩ nhiều",
        handling: "Hỏi thăm",
        tags: ["overthinking"],
        level: "high",
        keywords: ["buồn"]
    },
    {
        chapter: "Chương 154: Nhắn 'chắc vậy' - Uncertain",
        signs: "chắc vậy",
        analysis: "Không chắc chắn",
        handling: "Củng cố lại",
        tags: ["phân vân"],
        level: "low",
        keywords: ["chắc"]
    },
    {
        chapter: "Chương 155: Nhắn 'tùy' nhiều lần - Passive Resistance",
        signs: "tùy tùy",
        analysis: "Không hài lòng",
        handling: "Đổi approach",
        tags: ["dỗi"],
        level: "high",
        keywords: ["tùy"]
    },
    {
        chapter: "Chương 156: Gửi ảnh chó mèo - Soft Mood",
        signs: "pet",
        analysis: "Muốn vibe dễ thương",
        handling: "Hùa theo",
        tags: ["cute"],
        level: "low",
        keywords: ["chó", "mèo"]
    },
    {
        chapter: "Chương 157: Nhắn 'ừm' kéo dài - Mild Annoy",
        signs: "ừmmmm",
        analysis: "Hơi khó chịu",
        handling: "Đổi cách nói",
        tags: ["giận nhẹ"],
        level: "medium",
        keywords: ["ừm"]
    },
    {
        chapter: "Chương 158: Seen lâu mới rep - Priority Issue",
        signs: "seen lâu",
        analysis: "Không ưu tiên",
        handling: "Tăng giá trị bản thân",
        tags: ["priority"],
        level: "medium",
        keywords: ["seen"]
    },
    {
        chapter: "Chương 159: Gửi ảnh trời mưa - Mood Sharing",
        signs: "ảnh mưa",
        analysis: "Tâm trạng",
        handling: "Hỏi cảm xúc",
        tags: ["mood"],
        level: "low",
        keywords: ["mưa"]
    },
    {
        chapter: "Chương 160: Hỏi 'đang ở đâu' - Location Check",
        signs: "ở đâu",
        analysis: "Quan tâm + kiểm tra",
        handling: "Trả lời rõ",
        tags: ["check"],
        level: "low",
        keywords: ["ở đâu"]
    },
    {
        chapter: "Chương 161: 'Không biết nữa' - Avoidance Mode",
        signs: "không biết",
        analysis: "Tránh trả lời hoặc chưa muốn nói",
        handling: "Không ép, chuyển hướng nhẹ",
        tags: ["né tránh"],
        level: "medium",
        keywords: ["không biết"]
    },
    {
        chapter: "Chương 162: Rep 'okie' - Neutral Response",
        signs: "okie",
        analysis: "Trung lập, không cảm xúc mạnh",
        handling: "Thêm gia vị vào câu chuyện",
        tags: ["neutral"],
        level: "low",
        keywords: ["okie"]
    },
    {
        chapter: "Chương 163: Gửi icon 😐 - Blank Emotion",
        signs: "😐",
        analysis: "Không hài lòng nhẹ",
        handling: "Check lại lời nói trước đó",
        tags: ["giận nhẹ"],
        level: "medium",
        keywords: ["😐"]
    },
    {
        chapter: "Chương 164: Hỏi lại nhiều lần - Doubt Loop",
        signs: "hỏi lại",
        analysis: "Thiếu tin tưởng",
        handling: "Trả lời nhất quán",
        tags: ["nghi ngờ"],
        level: "high",
        keywords: ["thật không"]
    },
    {
        chapter: "Chương 165: Nhắn 'kệ đi' - Defensive Wall",
        signs: "kệ",
        analysis: "Đang tự bảo vệ",
        handling: "Đừng bỏ qua, phải dỗ",
        tags: ["dỗi"],
        level: "high",
        keywords: ["kệ"]
    },
    {
        chapter: "Chương 166: Gửi ảnh bản thân liên tục - Self-focus",
        signs: "ảnh nhiều",
        analysis: "Muốn được chú ý",
        handling: "Khen + tương tác",
        tags: ["attention"],
        level: "low",
        keywords: ["ảnh"]
    },
    {
        chapter: "Chương 167: Rep kiểu 'ờ' - Cold Response",
        signs: "ờ",
        analysis: "Cảm xúc thấp",
        handling: "Đổi vibe ngay",
        tags: ["lạnh"],
        level: "high",
        keywords: ["ờ"]
    },
    {
        chapter: "Chương 168: Gửi gif - Expressive Mode",
        signs: "gif",
        analysis: "Muốn truyền cảm xúc nhanh",
        handling: "Rep cùng vibe",
        tags: ["fun"],
        level: "low",
        keywords: ["gif"]
    },
    {
        chapter: "Chương 169: Nhắn 'tự nhiên nhớ' - Sudden Emotion",
        signs: "nhớ",
        analysis: "Cảm xúc thật",
        handling: "Đáp lại mạnh hơn",
        tags: ["tình cảm"],
        level: "low",
        keywords: ["nhớ"]
    },
    {
        chapter: "Chương 170: Rep không dấu - Casual Mode",
        signs: "ko dau",
        analysis: "Thoải mái hoặc lười",
        handling: "Không quá nghiêm trọng",
        tags: ["casual"],
        level: "low",
        keywords: ["ko"]
    },
    {
        chapter: "Chương 171: Nhắn 'thôi' - Shutdown",
        signs: "thôi",
        analysis: "Muốn kết thúc",
        handling: "Đừng để kết thúc thật",
        tags: ["end"],
        level: "high",
        keywords: ["thôi"]
    },
    {
        chapter: "Chương 172: Gửi ảnh đồ uống - Chill Mode",
        signs: "trà sữa",
        analysis: "Mood ổn",
        handling: "Hùa theo",
        tags: ["chill"],
        level: "low",
        keywords: ["trà sữa"]
    },
    {
        chapter: "Chương 173: Nhắn 'cũng được' - Low Preference",
        signs: "cũng được",
        analysis: "Không thích lắm",
        handling: "Đề xuất khác",
        tags: ["neutral"],
        level: "medium",
        keywords: ["cũng được"]
    },
    {
        chapter: "Chương 174: Rep cực dài - Emotional Dump",
        signs: "text dài",
        analysis: "Xả cảm xúc",
        handling: "Đọc kỹ + phản hồi chi tiết",
        tags: ["tâm sự"],
        level: "high",
        keywords: ["dài"]
    },
    {
        chapter: "Chương 175: Gửi meme tình yêu - Soft Hint",
        signs: "meme tình yêu",
        analysis: "Thả hint",
        handling: "Bắt sóng ngay",
        tags: ["hint"],
        level: "medium",
        keywords: ["meme"]
    },
    {
        chapter: "Chương 176: Nhắn 'đi đâu cũng được' - Hidden Preference",
        signs: "đâu cũng được",
        analysis: "Có ý nhưng không nói",
        handling: "Đoán dựa lịch sử",
        tags: ["trap"],
        level: "high",
        keywords: ["đâu cũng"]
    },
    {
        chapter: "Chương 177: Gửi ảnh outfit - Approval Request",
        signs: "đồ mặc",
        analysis: "Cần feedback",
        handling: "Khen cụ thể",
        tags: ["UI"],
        level: "medium",
        keywords: ["mặc"]
    },
    {
        chapter: "Chương 178: Nhắn 'tự nhiên buồn' - Mood Drop",
        signs: "buồn",
        analysis: "Cảm xúc tụt",
        handling: "Dỗ",
        tags: ["buồn"],
        level: "high",
        keywords: ["buồn"]
    },
    {
        chapter: "Chương 179: Gửi ảnh bạn bè - Social Share",
        signs: "bạn bè",
        analysis: "Chia sẻ môi trường sống",
        handling: "Hỏi thêm",
        tags: ["social"],
        level: "low",
        keywords: ["bạn"]
    },
    {
        chapter: "Chương 180: Nhắn 'đang bận' - Busy Mode",
        signs: "bận",
        analysis: "Không rảnh",
        handling: "Respect",
        tags: ["busy"],
        level: "low",
        keywords: ["bận"]
    },
    {
        chapter: "Chương 181: Nhắn 'đừng lo' - Reassurance",
        signs: "đừng lo",
        analysis: "Trấn an",
        handling: "Tin nhưng vẫn quan tâm",
        tags: ["care"],
        level: "low",
        keywords: ["đừng lo"]
    },
    {
        chapter: "Chương 182: Gửi ảnh bài tập - Stress Sharing",
        signs: "bài tập",
        analysis: "Áp lực",
        handling: "Động viên",
        tags: ["stress"],
        level: "medium",
        keywords: ["bài"]
    },
    {
        chapter: "Chương 183: Nhắn 'phiền ghê' - Annoyed",
        signs: "phiền",
        analysis: "Khó chịu",
        handling: "Giảm tương tác",
        tags: ["giận"],
        level: "high",
        keywords: ["phiền"]
    },
    {
        chapter: "Chương 184: Gửi icon 😴 - Sleepy",
        signs: "😴",
        analysis: "Buồn ngủ",
        handling: "Kết thúc nhẹ",
        tags: ["sleep"],
        level: "low",
        keywords: ["😴"]
    },
    {
        chapter: "Chương 185: Nhắn 'hehe' - Playful",
        signs: "hehe",
        analysis: "Đang vui nhẹ",
        handling: "Giữ vibe",
        tags: ["fun"],
        level: "low",
        keywords: ["hehe"]
    },
    {
        chapter: "Chương 186: Gửi ảnh selfie nhiều góc - High Investment",
        signs: "selfie nhiều",
        analysis: "Đầu tư cảm xúc",
        handling: "Khen kỹ",
        tags: ["attention"],
        level: "medium",
        keywords: ["selfie"]
    },
    {
        chapter: "Chương 187: Nhắn 'không sao đâu' - Hidden Hurt",
        signs: "không sao",
        analysis: "Có sao thật",
        handling: "Đừng tin literal",
        tags: ["giận"],
        level: "high",
        keywords: ["không sao"]
    },
    {
        chapter: "Chương 188: Gửi ảnh màn hình chat - Transparency",
        signs: "screenshot",
        analysis: "Muốn chia sẻ",
        handling: "Phản hồi",
        tags: ["share"],
        level: "low",
        keywords: ["ảnh màn hình"]
    },
    {
        chapter: "Chương 189: Nhắn 'hết chuyện rồi' - Conversation End",
        signs: "hết chuyện",
        analysis: "Cạn topic",
        handling: "Lead topic mới",
        tags: ["end"],
        level: "medium",
        keywords: ["hết chuyện"]
    },
    {
        chapter: "Chương 190: Gửi nhạc buồn - Sad Signal",
        signs: "nhạc buồn",
        analysis: "Mood thấp",
        handling: "Quan tâm ngay",
        tags: ["buồn"],
        level: "high",
        keywords: ["nhạc"]
    },
    {
        chapter: "Chương 191: Nhắn 'ngại quá' - Shy Mode",
        signs: "ngại",
        analysis: "Ngại thật",
        handling: "Trấn an",
        tags: ["shy"],
        level: "low",
        keywords: ["ngại"]
    },
    {
        chapter: "Chương 192: Gửi ảnh trời đẹp - Positive Share",
        signs: "trời đẹp",
        analysis: "Mood tốt",
        handling: "Hưởng ứng",
        tags: ["vui"],
        level: "low",
        keywords: ["trời"]
    },
    {
        chapter: "Chương 193: Nhắn 'tự nhiên thấy lạ' - Suspicion",
        signs: "lạ",
        analysis: "Đang nghi ngờ",
        handling: "Giải thích",
        tags: ["nghi"],
        level: "high",
        keywords: ["lạ"]
    },
    {
        chapter: "Chương 194: Gửi ảnh đồ mới - Show Off",
        signs: "mua đồ",
        analysis: "Muốn khoe",
        handling: "Khen",
        tags: ["khoe"],
        level: "low",
        keywords: ["mua"]
    },
    {
        chapter: "Chương 195: Nhắn 'được rồi' - Acceptance",
        signs: "được rồi",
        analysis: "Chấp nhận",
        handling: "Confirm lại",
        tags: ["ok"],
        level: "low",
        keywords: ["được"]
    },
    {
        chapter: "Chương 196: Gửi ảnh đồ ăn tự nấu - Effort",
        signs: "tự nấu",
        analysis: "Đầu tư",
        handling: "Khen mạnh",
        tags: ["effort"],
        level: "medium",
        keywords: ["nấu"]
    },
    {
        chapter: "Chương 197: Nhắn 'đừng nói nữa' - Stop Command",
        signs: "đừng nói",
        analysis: "Quá tải",
        handling: "Dừng ngay",
        tags: ["stop"],
        level: "critical",
        keywords: ["đừng nói"]
    },
    {
        chapter: "Chương 198: Gửi ảnh buồn - Emotional Signal",
        signs: "ảnh buồn",
        analysis: "Mood thấp",
        handling: "Dỗ",
        tags: ["buồn"],
        level: "high",
        keywords: ["buồn"]
    },
    {
        chapter: "Chương 199: Nhắn 'mệt' - Exhaustion",
        signs: "mệt",
        analysis: "Hết năng lượng",
        handling: "Chăm sóc",
        tags: ["mệt"],
        level: "high",
        keywords: ["mệt"]
    },
    {
        chapter: "Chương 200: Nhắn 'ở đây thôi' - Stay Mode",
        signs: "ở đây",
        analysis: "Muốn ở cạnh",
        handling: "Ở lại",
        tags: ["gắn kết"],
        level: "medium",
        keywords: ["ở đây"]
    }, {
        chapter: "Chương 101: Seen nhưng rep chậm - Latency Issue",
        signs: "Seen xong 5–10 phút mới trả lời, hoặc đang nói chuyện tự nhiên mất hút",
        analysis: "Không phải lúc nào cũng giận. Có thể đang bận thật, hoặc test xem cậu có bị phụ thuộc không.",
        handling: "Đừng spam. Giữ giá nhẹ. Nhưng nếu kéo dài → phải check lại.",
        reply: [
            "Ủa seen rồi mà trốn đâu mất tiêu rồi 😏",
            "Bận hả, xong nhớ rep anh nhaaa",
            "Mất tích kiểu này là anh phải đi tìm đó nha"
        ]
    },
    {
        chapter: "Chương 102: Tự nhiên kể chuyện tiêu cực - Emotional Dump",
        signs: "Than mệt, stress, ghét người này người kia",
        analysis: "Không cần giải pháp. Cần người nghe.",
        handling: "Đừng đưa lời khuyên logic quá nhiều.",
        reply: [
            "Ừ kể anh nghe hết đi, anh nghe nè",
            "Nghe mà thấy tức giùm luôn á 😤",
            "Hôm nay bé của anh bị hành quá rồi"
        ]
    },
    {
        chapter: "Chương 103: Đăng story buồn - Attention Signal",
        signs: "Story nhạc buồn, cap deep",
        analysis: "Không phải cho tất cả mọi người, mà là cho 'người cần thấy'.",
        handling: "Phải vào hỏi riêng, không comment công khai.",
        reply: [
            "Nãy anh thấy story, có chuyện gì không đó",
            "Sao nay buồn vậy, kể anh nghe coi",
            "Ai làm bé buồn rồi, nói anh xử 😏"
        ]
    },
    {
        chapter: "Chương 104: Trả lời cụt ngủn - Low Energy Mode",
        signs: "Ừ, ok, k, tùy",
        analysis: "Đang tụt mood hoặc chán",
        handling: "Đổi vibe, đừng hỏi dồn",
        reply: [
            "Thôi không hỏi nữa, qua đây anh chọc cho cười nè 😌",
            "Mood tụt hả, anh kéo mood lên cho nè",
            "Đang buồn đúng không, anh đoán trúng rồi"
        ]
    },
    {
        chapter: "Chương 105: Hỏi linh tinh - Random Query",
        signs: "Anh đang làm gì, ăn chưa, ngủ chưa",
        analysis: "Không phải hỏi thông tin, mà là nhớ",
        handling: "Đừng trả lời khô",
        reply: [
            "Đang nhớ em nè chứ làm gì 😏",
            "Chưa ăn, đợi em chở đi ăn chung nè",
            "Ngủ sao được khi chưa nói chuyện với em"
        ]
    },
    {
        chapter: "Chương 106: Thả icon 🥺 - Soft Attack",
        signs: "🥺🥺🥺",
        analysis: "Xin xỏ hoặc làm nũng",
        handling: "Đừng từ chối thẳng",
        reply: [
            "Rồi rồi, nhìn cái icon là anh mềm liền rồi đó",
            "Định xin gì nói lẹ đi 😏",
            "🥺 cái là anh chịu thua luôn rồi"
        ]
    },
    {
        chapter: "Chương 107: So sánh nhẹ - Micro Jealousy",
        signs: "Người ta được chở đi chơi, người ta được tặng quà",
        analysis: "Muốn được quan tâm hơn",
        handling: "Đừng phòng thủ",
        reply: [
            "Ừ để anh làm cho em hơn người ta luôn 😌",
            "Người ta sao bằng em được",
            "Để anh nâng cấp bản em liền"
        ]
    },
    {
        chapter: "Chương 108: Im lặng khi cãi nhau - Passive Defense",
        signs: "Không rep, không nói",
        analysis: "Đang tổn thương chứ không phải không quan tâm",
        handling: "Phải chủ động",
        reply: [
            "Anh biết em đang buồn, đừng im vậy mà",
            "Nói anh nghe đi, anh sửa",
            "Đừng tắt tiếng với anh nha"
        ]
    },
    {
        chapter: "Chương 109: Nhắn ban đêm - Late Night Vulnerability",
        signs: "Khuya mới nói chuyện sâu",
        analysis: "Đây là lúc thật nhất",
        handling: "Phải ấm áp, không troll",
        reply: [
            "Đêm dễ nghĩ nhiều lắm, anh ở đây mà",
            "Ngủ đi, anh canh giấc cho 😌",
            "Có anh rồi không cần lo gì đâu"
        ]
    },
    {
        chapter: "Chương 110: Tự nhiên ngọt bất thường - Pre-Request State",
        signs: "Anh ơi, anh iu, chồng ơi…",
        analysis: "Chuẩn bị xin cái gì đó",
        handling: "Nhận ra nhưng vẫn chiều",
        reply: [
            "Ngọt vậy là anh biết có chuyện rồi nha 😏",
            "Rồi nói đi, muốn gì anh nghe",
            "Hôm nay ngoan dữ vậy, định xin gì đây"
        ]
    }
];
