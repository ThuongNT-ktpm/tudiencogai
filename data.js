// Database JSON (110 chương + 13 nhóm từ điển)
const dictionaryData = [
  {
    id: 0,
    group: "Nhóm Mầm Non Hóa",
    title: "Biến tấu ngữ âm (Nũng nịu)",
    data: [
      {
        original: "Không",
        variants:
          "Hong, khom, khơm, khum, hông, ko, hem, hum, hom, hơm, ham, khồng",
      },
      {
        original: "Rồi",
        variants: "Rùi, ùi, ròi, goi, gòi, rui",
      },
      {
        original: "Đồng ý",
        variants: "Okee, oke, oki, okila, okela, ok",
      },
      {
        original: "Thôi",
        variants: "Thuii, hoii, hoyy",
      },
      {
        original: "Trời",
        variants: "Chờii, chòi, chuii",
      },
      {
        original: "Vâng / Dạ",
        variants: "Vưngg, nhângg / Nhạ, daaaa",
      },
      {
        original: "Xin lỗi",
        variants: "Cin nhỗii, nhin nhỗii",
      },
      {
        original: "Đi / Được",
        variants: "Dii, ii, đuy / Đựtt",
      },
      {
        original: "Biết / Nhớ",
        variants: "Bicc, bitt, biett / Nhứ, nhớ, nhooo",
      },
      {
        original: "Ngủ ngon",
        variants: "Ngủ ngoan, nhủ nhon, ngủ ngonn",
      },
      {
        original: "Chưa",
        variants: "Chưaa",
      },
      {
        original: "Từ khác",
        variants: "Mà -> Mò, Ăng -> Ăngg, Ở -> Ợ, Nhé -> Nhiee, nhiaa, nhee",
      },
    ],
  },
  {
    id: 1,
    group: "Nhóm Gõ Tắt / Teen Code",
    title: "Nhanh - Gọn - Lẹ",
    data: [
      {
        key: "Hành động/Sự vật",
        value:
          "j (gì), jz (gì vậy), đljz (đang làm gì vậy), tus (bài viết), vc (việc)",
      },
      {
        key: "Động từ/Tính từ",
        value: "ns (nói), chs (chơi), cs (có), nx (nữa), đk (đúng không)",
      },
      {
        key: "Đại từ",
        value: "t (tao/tôi), m (mày), mn (mọi người)",
      },
      {
        key: "Chốt câu/Lời chúc",
        value: "r (rồi), z (vậy), snzz (sinh nhật vui vẻ), nn/n9 (ngủ ngon)",
      },
    ],
  },
  {
    id: 2,
    group: "Giải Mã Tâm Lý",
    title: "Từ ngắn ẩn ý cao",
    data: [
      {
        word: "À / Oke",
        meaning: "Trả lời có / Chốt đơn",
      },
      {
        word: "Kkk / Cũng cũng",
        meaning: "Đang vui / Hài lòng",
      },
      {
        word: "Thôi / Ô / Um",
        meaning: "Không thích / Bí văn / Tuỳ (tụt mood)",
      },
      {
        word: "Rồi rồi",
        meaning: "Thích sao thì làm (dỗi ngầm)",
      },
      {
        word: "Ờ / ?",
        meaning: "Không quan tâm / Bực mình",
      },
      {
        word: "Uk / Hmm",
        meaning: "Bực rồi / Đang nghi ngờ, không tin",
      },
      {
        word: "Không vs Hong",
        meaning: "Không = KHÔNG; Hong = CÓ (làm giá)",
      },
    ],
  },
  {
    id: 3,
    group: "Câu Nói Kinh Điển",
    title: "Nghĩa đen vs Nghĩa bóng",
    data: [
      {
        phrase: "Đợi em 5 phút",
        fact: "Thực tế là 25 - 30 phút",
      },
      {
        phrase: "Em ăn gì cũng được",
        fact: "Trừ những món em không thích (phải tự đoán)",
      },
      {
        phrase: "Mặt em xấu thế nhỉ",
        fact: "Cầu cứu lời khen. Hãy khen ngay!",
      },
      {
        phrase: "Em không sao thật mà",
        fact: "Đang có sao rất lớn. Hãy dỗ ngay",
      },
      {
        phrase: "Tuỳ anh",
        fact: "Cơ hội cuối để xin lỗi hoặc chọn đúng ý cô ấy",
      },
    ],
  },
  {
    id: 4,
    group: "Trending TikTok",
    title: "Ngôn ngữ Gen Z",
    data: [
      {
        slang: "Xà lơ / Cảm lạnh",
        usage: "Nói sai / Hành động gây thất vọng (ngược lãng mạn)",
      },
      {
        slang: "Bất ổn / Trầm kẽm",
        usage: "Có điềm / Cực kỳ mệt mỏi, chán nản",
      },
      {
        slang: "Keo lỳ / Mận",
        usage: "Khen ngợi sự quyến rũ / Đậm đà",
      },
      {
        slang: "Hết cứu / SOS",
        usage: "Cạn lời, không thể đỡ nổi",
      },
      {
        slang: "Cột sống",
        usage: "Cuộc sống (thường dùng để than vãn mệt mỏi)",
      },
    ],
  },
  {
    group: "Nhóm Thử thách sinh tồn",
    title: "Giải mã tâm lý",
    data: [
      {
        word: "Tùy / Sao cũng được",
        meaning:
          "Tôi đã có đáp án trong đầu rồi, tự mà suy nghĩ chọn cho đúng ý tôi, chọn sai là tới công chuyện!",
      },
      {
        word: "Em không sao / Không có gì",
        meaning:
          "Có sao và vấn đề đang rất lớn. Đang dỗi lắm rồi đấy, gặng hỏi và dỗ người ta ngay đi, đừng có mà tin rồi im luôn!",
      },
      {
        word: "Ai biết đâu / Tự đi mà hỏi",
        meaning:
          "Thực ra đã biết rõ mười mươi, nhưng đang muốn thử xem thái độ của bạn thế nào, xem bạn có thành thật khai báo không.",
      },
      {
        word: "Gì?",
        meaning:
          "Đang bực mình, mất kiên nhẫn. Hãy cẩn thận với tin nhắn tiếp theo của bạn.",
      },
    ],
  },
  {
    group: "Nhóm Bật đèn xanh & Nũng nịu",
    title: "Giải mã tâm lý",
    data: [
      {
        word: "Đang làm gì đó? / Đang đâu á?",
        meaning:
          "Đang nhớ anh, đang rảnh nè rủ người ta đi chơi đi, hoặc mau nói chuyện với em đi.",
      },
      {
        word: "Thật á? / Thế á?",
        meaning:
          "Đang rất hứng thú với câu chuyện, muốn bạn nói tiếp đi hoặc khen thêm nữa đi.",
      },
      {
        word: "Chữ kéo dài (vânggg, okiieee, dạaaa)",
        meaning:
          "Đang rất vui vẻ, tâm trạng tốt, muốn làm nũng và có cảm tình với bạn.",
      },
      {
        word: "Đẹp không? / Dễ thương không?",
        meaning:
          "Chỉ có một đáp án duy nhất là 'Có/Đẹp'. Chê là xác định mất điểm!",
      },
    ],
  },
  {
    group: "Nhóm Tụt mood & Muốn kết thúc câu chuyện",
    title: "Giải mã tâm lý",
    data: [
      {
        word: "Ngủ đi / Anh ngủ đi",
        meaning:
          "Tụt mood / Giận rồi, không muốn nhắn nữa. Dịch ngầm: Nếu anh đi ngủ thật thì anh chết chắc, mau dỗ đi!",
      },
      {
        word: "Haha / Hehe (trơ trọi)",
        meaning:
          "Nhạt quá không biết nói gì / Cười trừ cho qua chuyện / Muốn kết thúc đoạn hội thoại ngay lập tức.",
      },
      {
        word: "Dạ. / Vâng. (có dấu chấm ở cuối)",
        meaning:
          "Cực kỳ lạnh lùng. Không phải ngoan ngoãn đâu, mà là đang tạo khoảng cách, dỗi hoặc bực mình.",
      },
      {
        word: "Gửi một icon duy nhất (👍, 😊)",
        meaning: "Cạn lời, hết cứu. Hoàn toàn không muốn nói chuyện tiếp.",
      },
    ],
  },
  {
    group: "Nhóm Ghen ngầm & Dằn mặt",
    title: "Giải mã tâm lý",
    data: [
      {
        word: "Anh cứ đi chơi đi / Đi chơi vui vẻ nha",
        meaning:
          "Anh thử bước chân ra khỏi nhà xem, anh cứ đi vui vẻ đi rồi lúc về biết tay tôi!",
      },
      {
        word: "Bạn kia dễ thương/xinh nhỉ?",
        meaning:
          "Cấm tuyệt đối khen 'Ừ xinh'. Đáp án sống còn: 'Đâu? Anh thấy bình thường, sao xinh bằng em được'.",
      },
      {
        word: "Chả sao, em quen rồi",
        meaning:
          "Đang cực kỳ tủi thân và thất vọng. Anh lại vô tâm với em, mau xin lỗi và bù đắp ngay!",
      },
      {
        word: "Anh bận thì thôi / Đi làm việc của anh đi",
        meaning:
          "Không phải thông cảm đâu, mà là đang rất dỗi vì bạn không dành thời gian ưu tiên cho cô ấy.",
      },
    ],
  },
  {
    group: "Nhóm Bài toán hẹn hò & Ăn uống",
    title: "Giải mã tâm lý",
    data: [
      {
        word: "Ăn gì cũng được",
        meaning:
          "Hãy liệt kê các món ra đây, đến khi nào trúng món em đang thèm trong đầu thì em gật, còn lại em sẽ chê.",
      },
      {
        word: "Chờ em 5 phút / Em đang ra",
        meaning:
          "Hãy tự động cộng thêm ít nhất 20-30 phút nữa. Cô ấy có thể mới chỉ đang kẻ dở một bên lông mày.",
      },
      {
        word: "Em chẳng có gì để mặc cả",
        meaning:
          "Quần áo cũ em mặc chụp ảnh hết rồi, dẫn em đi mua đồ mới đi / Muốn được tư vấn khen mặc đẹp.",
      },
    ],
  },
  {
    group: "Nhóm Dỗi nhưng vẫn cần dỗ",
    title: "Giải mã tâm lý",
    data: [
      {
        word: "Kệ em",
        meaning:
          "Đừng có mà kệ em! Mau ôm em/dỗ em đi! Anh mà kệ em thật là anh cút luôn!",
      },
      {
        word: "Em muốn ở một mình",
        meaning:
          "Em đang rất buồn, đừng có bỏ đi, hãy ngồi im ở đây và an ủi em.",
      },
      {
        word: "Đừng nhắn tin cho em nữa",
        meaning:
          "Thử không nhắn xem? Bạn sẽ thành người yêu cũ ngay. Hãy nhắn liên tục cho đến khi cô ấy nguôi giận.",
      },
    ],
  },
  {
    group: "Nhóm Ngôn ngữ Icon và Dấu câu",
    title: "Giải mã tâm lý",
    data: [
      {
        word: "🙂 (Mặt cười mỉm)",
        meaning: "Nụ cười chết chóc. Mỉa mai, cạn lời hoặc 'Anh cứ đợi đấy'.",
      },
      {
        word: "🙃 (Mặt lộn ngược)",
        meaning: "Bất lực, bó tay, không còn gì để nói với anh.",
      },
      {
        word: "🙏 (Chắp tay)",
        meaning:
          "'Lạy anh', 'Em xin anh đấy', 'Thôi bỏ đi' (mang tính châm biếm).",
      },
      {
        word: "... (Dấu chấm lửng dài)",
        meaning:
          "Sự bất lực, thất vọng, không buồn giải thích thêm vì bạn quá ngốc không hiểu ý.",
      },
    ],
  },
  {
    group: "Bonus: Tốc độ rep tin nhắn",
    title: "Giải mã tâm lý",
    data: [
      {
        word: "Rep ngay lập tức",
        meaning:
          "Đang rất rảnh, cực kỳ thích nói chuyện với bạn, hoặc đang hóng drama.",
      },
      {
        word: "Đang chat tự nhiên mất tích",
        meaning:
          "Một là đi tắm/ngủ quên, hai là bạn vừa nói một câu vô duyên khiến nàng tụt mood.",
      },
      {
        word: "Seen không rep",
        meaning:
          "Đã đọc nhưng đang bận, đang ghim để trả lời cho ngầu, hoặc do câu chuyện quá nhạt không muốn rep.",
      },
    ],
  },
  {
    chapter: "Chương 1: Cơ chế 'Mầm Non Hóa' - Syntax Sugar",
    signs: "Hong, Khum, Khơm, Rùi, Gòi, Bicc, Đựtt...",
    analysis:
      "Hệ thống đang ở Safe Mode. Nàng đang vui vẻ, muốn làm nũng và kích hoạt quyền Admin che chở từ cậu.",
    handling:
      "Compile thoải mái, chiều chuộng lại. Lỗi Crash: Đang chat 'khum' tự nhiên chuyển thành 'Không.' có dấu chấm -> Giao diện mầm non đã tắt. Lập tức rà soát log chat để debug.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["hong", "khum", "khơm", "bicc", "đựtt"],
  },
  {
    chapter: "Chương 2: Thuật toán 'Double Text' - String Extension",
    signs: "Dạaaa, Vângggg, Ruiiii, Nhớ quáaaa...",
    analysis:
      "Dùng để gia tăng độ ngân vang cảm xúc. Chuỗi càng dài, cảm xúc (nhõng nhẽo, vui vẻ, kêu ca) càng mãnh liệt.",
    handling:
      "Trả về một Packet có dung lượng tương đương. Nàng nhắn 'Em đói quéeeeee', tuyệt đối không rep 'Ừ đi ăn'. Hãy rep: 'Đợi xíu anh qua chở đi ăn nhaaaa' để đồng bộ dữ liệu.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["dạaaa", "vângggg", "ruiiii", "quáaaa", "dùng"],
  },
  {
    chapter: "Chương 3: Lệnh Gõ Tắt - Quick Command",
    signs: "jz, đljz, ns, đk, r, z, K, Uh...",
    analysis:
      "Tối ưu hóa băng thông do nàng đang bận. Việc gõ tắt giúp duy trì kết nối Keep-Alive.",
    handling:
      "Bình thường: Return True để nàng làm việc. Lỗi nghiêm trọng: Nàng rep 1 ký tự 'K' hoặc 'Uh' -> Dập kết nối. Tự kiểm tra xem nói sai gì và xin lỗi ngay.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["đljz", "băng", "thông", "việc", "giúp"],
  },
  {
    chapter: "Chương 4: Giao Diện Ẩn - Giải mã Emoji",
    signs: "🙂 (Nụ cười phán xét), 🤡 (Mặt hề), 💅 (Sơn móng tay)...",
    analysis:
      "Icon chứa mã độc ẩn. 🙂 = 'Anh nghĩ lừa được tôi à?'. 🤡 = Tự chế giễu vì lỡ tin lời hứa.",
    handling:
      "Antivirus Scan: Không dùng icon tương tự rep lại kẻo xung đột. Xoa dịu bằng text, tìm nguyên nhân lỗi và đưa ra hành động chuộc lỗi thực tế.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["cười", "phán", "xét)", "(mặt", "(sơn"],
  },
  {
    chapter: "Chương 5: Nghệ Thuật Hậu Tố - Suffix Variables",
    signs: "nha, nhé, mò, dọ, đi chứ, ạ...",
    analysis:
      "Đổi một biến số, output khác hoàn toàn. 'nha/mò' = mềm mại. 'đi chứ' = ping cao. 'ạ' (Tùy anh ạ) = Firewall dựng lên, chấm dứt cấp quyền truy cập.",
    handling:
      "Variable Check: Đọc kỹ ký tự cuối. Nếu có hậu tố dằn mặt, không được rep 'Ừ'. Phải hạ giọng debug ngay.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["biến", "output", "khác", "hoàn", "toàn"],
  },
  {
    chapter: "Chương 6: Ghen Tuông - Firewall Alert",
    signs:
      "Tự nhiên khách sáo, gọi 'Ông' xưng 'Tôi', 'Nay thấy comment dạo vui ghê ha'.",
    analysis:
      "Firewall quét thấy tài nguyên sự chú ý của cậu đang phân bổ sai chỗ (VD: mải hàn mạch IoT, thả tim dạo).",
    handling:
      "Tắt máy ngay. Nhắn tin xác nhận mức độ ưu tiên: 'Nãy anh mải test cảm biến nên không để ý. Người yêu anh vẫn là Top 1'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["ghen tuông"],
    keywords: ["nhiên", "khách", "'ông'", "xưng", "'tôi'"],
  },
  {
    chapter: "Chương 7: Trang Phục - Giao diện UI/UX & Camera",
    signs: "Mất hút 2 tiếng trước giờ hẹn, hỏi 'Anh mặc áo màu gì?'.",
    analysis:
      "Nàng đang thiết kế UI. Chuẩn bị càng kỹ, event càng quan trọng. Nàng kỳ vọng cậu cũng mặc đồ tone-sur-tone.",
    handling:
      "Khen cụ thể dáng váy/màu sắc. Khi ra đường, tự động bật Module Camera, chủ động tìm góc sáng chụp 100 tấm không đợi nhắc.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["tiếng", "trước", "'anh", "thiết", "chuẩn"],
  },
  {
    chapter: "Chương 8: Ăn gì cũng được - Database Query",
    signs: "Đưa ra 5 quán chê cả 5, 'Trời nóng ăn cái đó sao ngon'.",
    analysis:
      "Đây là bài test thuật toán loại trừ. Nàng muốn cậu tự quan sát thời tiết và đoán ý.",
    handling:
      "Chuyển câu hỏi mở thành câu hỏi đóng: 'Trời Cần Thơ nay mát mát nè, mình ghé quán lẩu quen chỗ bờ kè nha, hay em thích ăn đồ nướng xèo xèo?'",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["quán", "'trời", "nóng", "ngon'", "test"],
  },
  {
    chapter: "Chương 9: Đơn vị Thời gian - Time Dilations",
    signs: "Đợi 5 phút nữa nha, Em sắp xuống rồi...",
    analysis:
      "5 phút của nàng dư sức để cậu code xong nguyên cái CSS. Thời gian co giãn theo tiến độ makeup.",
    handling:
      "Tuyệt đối không hối thúc. Cứ thong thả làm việc của mình. Nàng xuống thì bảo: 'Anh cũng đang tranh thủ đọc nốt tí tài liệu, em cứ từ từ'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["phút", "xuống", "code", "xong", "nguyên"],
  },
  {
    chapter: "Chương 10: Combo Reaction - Response 200 OK",
    signs: "U là chòiii, Mê xỉuuu, Sao anh giỏi thế 🥺",
    analysis:
      "Phản ứng khi nhận quà 'độc bản'. Con gái cực kỳ yếu lòng trước đồ handmade hoặc tech gifts tự làm bằng chất xám.",
    handling:
      "Khi nàng khen, hãy chốt hạ khẳng định chủ quyền: 'Mấy cái web 3D với hạt lấp lánh này anh chỉ code riêng cho người yêu anh thôi'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chòiii", "xỉuuu", "giỏi", "phản", "nhận"],
  },
  {
    chapter: "Chương 11: Nhắc Khéo - Dropping Hints",
    signs: "Dạo này mỏi cổ ghê, Tự nhiên thèm đồ ngọt ngang.",
    analysis:
      "Nàng thấy cậu đang cắm mặt bóc tách file log, không nỡ đòi đi chơi trực tiếp nên quăng Hint.",
    handling:
      "Tạm dừng script. Order ly trà sữa ship tới hoặc xách xe chạy qua bóp vai 15 phút. Giải quyết vấn đề tâm lý, không phải y tế.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhiên", "thèm", "ngọt", "ngang", "thấy"],
  },
  {
    chapter: "Chương 12: Hỏi Ý Kiến - A/B Testing",
    signs: "Tóc ngắn hay dài Sugoi hơn? Váy đỏ hay đen đẹp?",
    analysis:
      "Nàng cần một feedback có tâm từ End-user, không phải chọn đại cho xong chuyện.",
    handling:
      "Phân tích logic rồi mới chốt: 'Màu đen sang, nhưng màu đỏ tôn da em, anh vote màu đỏ'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngắn", "sugoi", "feedback", "end-user", "phải"],
  },
  {
    chapter: "Chương 13: Chiến Tranh Lạnh - Disconnecting",
    signs: "Đọc không rep, tắt active, block tạm thời.",
    analysis:
      "Hệ thống ngắt kết nối chủ động. Nàng muốn xem cậu có nỗ lực tìm Port khác để kết nối lại không.",
    handling:
      "Không được im lặng chờ 'bình tĩnh'. Tìm mọi kênh liên lạc, không được thì đứng trước cửa nhà mua sẵn đồ ăn nàng thích.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["active", "block", "thời", "thống", "ngắt"],
  },
  {
    chapter: "Chương 14: Hành Động Bất Thường - System Anomalies",
    signs: "Đang vui vẻ đột ngột chuyển sang cộc lốc, gắt gỏng.",
    analysis:
      "Mã độc vừa thực thi do cậu lỡ mồm chê sở thích hoặc quên mất ngày kỷ niệm.",
    handling:
      "Dừng mọi tác vụ. Rollback lại bộ nhớ 10 phút trước xem phát ngôn sai gì. Nhận lỗi ngay lập tức.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngột", "chuyển", "sang", "gỏng", "thực"],
  },
  {
    chapter: "Chương 15: Dâu Rụng - Server Maintenance",
    signs: "Cáu gắt vô cớ, khóc vì video lãng xẹt, ôm bụng.",
    analysis:
      "CPU chịu tải 100% do hormone. Hệ thống mong manh, logic lập trình vô hiệu.",
    handling:
      "Bật Safe Mode. Không tranh luận đúng sai. Cung cấp nước ấm, chườm bụng, đồ ngọt và nhẫn nhịn.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["khóc", "video", "lãng", "bụng", "chịu"],
  },
  {
    chapter: "Chương 16: Người Yêu Cũ - Historical Data",
    signs: "Hồi xưa anh có code tặng NYC vầy không? NYC anh cũng xinh mà.",
    analysis: "Bài test bảo mật rà quét file rác. Cực kỳ nguy hiểm.",
    handling:
      "Clear Cache ngay: 'Anh chả nhớ, bộ nhớ anh giờ chỉ cấp quyền truy cập duy nhất cho em thôi'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["code", "tặng", "cũng", "xinh", "test"],
  },
  {
    chapter: "Chương 17: Xin Lỗi - Hotfix & Patching",
    signs: "Anh biết anh sai ở đâu không?",
    analysis:
      "'Anh xin lỗi' chỉ là null value. Nàng cần biết cậu đã đọc được file log lỗi chưa và bản vá lỗi là gì.",
    handling:
      "Nêu rõ Exception: 'Anh sai vì mải code quên nhắn em'. Đưa phương án: 'Từ mai anh đặt báo thức không miss tin nhắn nữa'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["lỗi hệ thống"],
    keywords: ["biết", "'anh", "lỗi'", "null", "value"],
  },
  {
    chapter: "Chương 18: Ghen Ngầm - Background Process",
    signs: "Thôi anh cứ làm việc/chơi game tiếp đi, em ngủ đây.",
    analysis:
      "Tiến trình ghen chạy ngầm vì cảm thấy tủi thân do bị xếp sau các ưu tiên khác.",
    handling:
      "Shut down task phụ ngay. 'Mấy việc râu ria gì tầm này, anh cất máy đi ngủ cùng em đây'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["ghen tuông"],
    keywords: ["thôi", "việc/chơi", "game", "tiếp", "tiến"],
  },
  {
    chapter: "Chương 19: Kể Chuyện Bạn Bè - Third-party APIs",
    signs: "Con bạn em bảo dạo này em béo lên, Nhỏ A mới được bồ tặng túi.",
    analysis: "Gọi API bên thứ 3 để thăm dò ý kiến cậu hoặc đòi quà khéo.",
    handling:
      "Phủ nhận API nếu là lời chê ('Bạn em mắt kém rồi'). Bắt sóng nếu là gợi ý ('Cuối tuần anh chở đi lượn nha').",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["tặng", "thăm", "kiến", "hoặc", "khéo"],
  },
  {
    chapter: "Chương 20: Chụp Ảnh - Image Processing Module",
    signs: "Chụp tự nhiên vào, Trông mặt em to quá.",
    analysis:
      "Camera mặc định không đáp ứng được UI yêu cầu. Cần góc máy tính toán kỹ.",
    handling:
      "Chụp Burst liên tục. Căn góc từ dưới lên kéo chân. Luôn mồm khen 'Góc này xinh nè' để nàng tự tin tạo dáng.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chụp", "nhiên", "trông", "camera", "định"],
  },
  {
    chapter: "Chương 21: Thả Thính Mầm Non - Ping Request",
    signs: "Nhớ anh qué, Mún cắn một cái.",
    analysis:
      "Nàng gửi Ping kiểm tra độ trễ. Tâm trạng đang vui vẻ, dạt dào tình cảm.",
    handling:
      "Ping back ngay với năng lượng tương đương: 'Thương qué đi mò, rảnh anh phi qua đón liền!'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ping", "kiểm", "trạng", "tình"],
  },
  {
    chapter: "Chương 22: Tương Lai - Architecture Planning",
    signs: "Nuôi chó hay mèo? Thích con trai hay con gái?",
    analysis:
      "Nàng vẽ bản thiết kế tương lai xem cậu có commit source code vào dự án này không.",
    handling:
      "Phối hợp nhiệt tình: 'Nuôi mèo nha, mốt anh làm thêm máy cho ăn tự động bằng ESP32 nữa là chuẩn'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nuôi", "thích", "trai", "thiết", "tương"],
  },
  {
    chapter: "Chương 23: Mạng Xã Hội - Share & Tag API",
    signs: "Tag vào video hài, quán ăn mới mở, bài ngôn tình.",
    analysis:
      "Giao tiếp Asynchronous. Không cần rep ngay nhưng phải tương tác và bookmark.",
    handling:
      "Thả tim vào comment. Lưu địa chỉ. Cuối tuần tự động chở qua quán đã tag.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["video", "quán", "ngôn", "tình", "giao"],
  },
  {
    chapter: "Chương 24: Dỗi Yêu - Low Severity Bug",
    signs: "Ứ ừ, Géc xỉu, Dỗi 5 phút.",
    analysis: "Lỗi không sập hệ thống, chỉ là pop-up đòi sự chú ý.",
    handling:
      "Trêu chọc lại một chút rồi dỗ ngọt. Đừng dùng logic phân định đúng sai.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cần dỗ"],
    keywords: ["phút", "thống", "pop-up"],
  },
  {
    chapter: "Chương 25: Tặng Quà - Deploying to Production",
    signs: "Đừng mua tốn tiền, Em không thiếu gì đâu.",
    analysis:
      "Nàng thương ví tiền sinh viên nhưng vẫn khao khát được chiều chuộng.",
    handling:
      "Dùng chất xám, không vung tiền. Tự làm đồ tech độc quyền hoặc viết một cái web nhỏ xinh tên nàng là đủ hạ gục.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["đừng", "tiền", "thiếu", "thương", "sinh"],
  },
  {
    chapter: "Chương 26: Bảo Vệ Tài Nguyên - Access Control",
    signs: "Ai nhắn tin đấy? Pass điện thoại đổi à?",
    analysis:
      "Rà soát quyền truy cập hệ thống đảm bảo không có mã độc/trà xanh xâm nhập.",
    handling:
      "Cung cấp Full Access. Đọc pass rõ ràng, cho xem màn hình công khai. Càng minh bạch càng an toàn.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhắn", "pass", "điện", "thoại", "soát"],
  },
  {
    chapter: "Chương 27: Ăn Vạ - Overload CPU (100% Load)",
    signs: "Rep cộc lốc, than mệt mỏi, nằm ườn ra.",
    analysis:
      "Bộ nhớ đệm đầy. Nàng thấy cậu tất bật với dự án 'Bên Nhau Tuổi Già' không nỡ đòi hỏi nhưng vẫn muốn được vỗ về.",
    handling:
      "Gấp laptop lại. Chở nàng ra đường hóng gió, tấp quán quen làm tô hủ tiếu. Ngồi cạnh nghe nàng nói là CPU tự hạ nhiệt.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["than", "thấy", "'bên", "nhau", "tuổi"],
  },
  {
    chapter: "Chương 28: Nói Ngược - Inverted Logic Gate",
    signs: "Anh bận cứ làm việc đi, Em không sao thật mà.",
    analysis: "Cổng logic đảo ngược. False bề mặt thực chất là True bên trong.",
    handling:
      "Biên dịch lại mã: 'Em đang rất có sao'. Tạm dừng việc và quan tâm nàng ngay lập tức.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["việc", "thật", "cổng", "logic", "ngược"],
  },
  {
    chapter: "Chương 29: Chia Sẻ Tài Nguyên - System Integration",
    signs: "Cuối tuần em qua phụ anh chuẩn bị đồ cho mấy cô chú nha.",
    analysis:
      "Nàng muốn integrate vào cuộc sống của cậu, tôn trọng dự án tình nguyện của cậu và muốn đồng hành.",
    handling:
      "Accept ngay lập tức. Cùng nhau làm dự án chung là cách tối ưu hóa database tình cảm vững chắc nhất.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["cuối", "tuần", "chuẩn", "muốn", "integrate"],
  },
  {
    chapter: "Chương 30: Bật Đèn Xanh - System Optimization",
    signs: "Báo cáo lịch trình, chủ động rủ đi ăn, gửi icon tim liên tục.",
    analysis: "Hệ thống tối ưu hóa 100%. Code mượt mà, độ tin cậy 99.99%.",
    handling:
      "Duy trì phong độ. Cậu đã chính thức lấy được Full Quyền Root (Admin)!",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lịch", "trình", "động", "icon", "liên"],
  },
  {
    chapter: "Chương 31: Lỗi 'Không có gì' - Null Pointer Exception",
    signs: "Hỏi 'Em sao thế?' trả lời 'Không có gì', mặt lạnh tanh.",
    analysis:
      "Biến trả về Null nhưng thực chất bộ nhớ đang tràn. Đây là bẫy. Nếu cậu tin là 'không có gì' và bỏ đi làm việc khác, hệ thống sẽ sập hoàn toàn.",
    handling:
      "Không được Return. Phải ở lại Debug. Dùng hành động: Ôm từ phía sau, xoa đầu, và hỏi lại bằng giọng trầm ấm nhất: 'Nói anh nghe, ai làm ngừi iu anh buồn?'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["lỗi hệ thống"],
    keywords: ["'không", "lạnh", "tanh", "biến", "null"],
  },
  {
    chapter: "Chương 32: Đào lại chuyện cũ - Version Control (Git Revert)",
    signs:
      "Đang cãi nhau chuyện A, tự nhiên lôi chuyện B từ 6 tháng trước ra nói.",
    analysis:
      "Phái đẹp có một kho lưu trữ Git Commit cực kỳ chi tiết. Khi xung đột (Conflict) xảy ra, nàng sẽ Revert lại toàn bộ các commit lỗi cũ của cậu để tăng tính sát thương.",
    handling:
      "Tuyệt đối không cãi 'Chuyện qua rồi nhắc lại làm gì'. Lỗi cũ chưa được resolve triệt để. Nhận cả combo lỗi: 'Anh sai, cả chuyện cũ lẫn chuyện nay anh đều sai, anh xin lỗi'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhau", "chuyện", "nhiên", "tháng", "trước"],
  },
  {
    chapter: "Chương 33: Im lặng tuyệt đối - Deadlock (Khóa chết)",
    signs:
      "Cả hai đang tranh luận, nàng đột nhiên im lặng, nhìn đi chỗ khác, không thèm cãi nữa.",
    analysis:
      "Trạng thái Deadlock. CPU không xử lý thêm bất kỳ input nào nữa vì cảm thấy cậu không hiểu vấn đề. Mức độ nguy hiểm cao nhất.",
    handling:
      "Phá vỡ Deadlock bằng cách Force Stop cuộc cãi vã. Hạ giọng: 'Anh nóng quá, cho anh xin lỗi. Anh nghe em nói này'. Tuyệt đối không được im lặng thi gan.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["nguy hiểm cao", "cơn bão yên tĩnh"],
    keywords: ["tranh", "luận", "nhiên", "lặng", "nhìn"],
  },
  {
    chapter: "Chương 34: Đòi pass điện thoại - Penetration Testing Level 2",
    signs:
      "Tự nhiên đòi cầm điện thoại cậu, lướt check tin nhắn, xem phần search Facebook.",
    analysis:
      "Nàng đang thực hiện Pentest định kỳ để rà soát lỗ hổng bảo mật. Cần xem có mã độc (trà xanh) nào đang chạy ngầm không.",
    handling:
      "Giao nộp thiết bị vô điều kiện. Càng tỏ ra giấu giếm, điểm Trust Score (độ tin cậy) càng giảm. Pass phải luôn được share từ trước.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhiên", "điện", "thoại", "lướt", "check"],
  },
  {
    chapter: "Chương 35: So sánh với người khác - Benchmarking",
    signs: "'Anh xem bồ người ta kìa', 'Chồng người ta...'.",
    analysis:
      "Chạy Benchmark so sánh hiệu năng của cậu với các server nhà người ta. Nàng không có ý định đổi server, chỉ muốn server của mình nâng cấp tính năng.",
    handling:
      "Không tự ái. Nâng cấp tính năng bằng cách hỏi: 'Thế em thích được như vậy hả, cuối tuần anh set up y chang cho em luôn'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["'anh", "người", "kìa'", "'chồng", "chạy"],
  },
  {
    chapter: "Chương 36: Gọi bằng cả Họ Tên - DNS Resolution Error",
    signs: "Đang xưng Anh - Em, tự nhiên réo cả họ tên đầy đủ ra gọi.",
    analysis:
      "Mất phân giải tên miền thân mật. Lỗi hệ thống cực kỳ nghiêm trọng. Nàng đang ở trạng thái phán xét cao nhất.",
    handling:
      "Dạ ran. Không được trêu đùa. Tư thế đứng/ngồi nghiêm chỉnh và rà soát ngay lập tức xem mình vừa làm vỡ cái gì hay quên cái gì.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["xưng", "nhiên", "phân", "giải", "miền"],
  },
  {
    chapter: "Chương 37: Tự nhiên ngoan đột xuất - Trojan / Malware Suspicion",
    signs:
      "Đang bình thường tự nhiên nhắn tin siêu ngọt: 'Chồng ơi', 'Anh iu ơi', đấm lưng rót nước.",
    analysis:
      "Một đoạn mã Trojan đang được chèn vào. Thực chất nàng đang chuẩn bị xin xỏ một món đồ đắt tiền hoặc xin phép làm một việc có rủi ro cao.",
    handling:
      "Chuẩn bị sẵn tinh thần (và ví tiền). Mở port cho phép truy cập: 'Rồi, lại muốn xin anh cái gì nói mau'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["bất thường"],
    keywords: ["bình", "thường", "nhiên", "nhắn", "siêu"],
  },
  {
    chapter: "Chương 38: Mặc áo của cậu - Claiming Server Resources",
    signs: "Lấy áo thun rộng, áo khoác của cậu mặc dù nàng có cả tủ đồ.",
    analysis:
      "Hành động đánh dấu lãnh thổ. Áo có mùi hương của cậu giúp hệ thống của nàng thấy an toàn, giống như việc chiếm dụng tài nguyên Server để chạy local.",
    handling:
      "Khen đáng yêu. Tuyệt đối không đòi lại. Cứ để nàng mặc, nhìn như mấy bộ anime Nhật Bản mặc đồ oversize trông rất Kawaii.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thun", "rộng", "khoác", "hành", "động"],
  },
  {
    chapter: "Chương 39: Khóc không lý do - Memory Dump",
    signs:
      "Đang yên đang lành tự nhiên rơi nước mắt, hỏi thì bảo 'Tự nhiên buồn'.",
    analysis:
      "Bộ nhớ đang thực hiện Memory Dump do quá tải cảm xúc tích tụ từ lâu (deadline, bạn bè, gia đình...). Không cần logic ở đây.",
    handling:
      "Chỉ cần ôm chặt. Vỗ lưng. Không hỏi 'Tại sao'. Đợi hệ thống xả xong bộ nhớ đệm sẽ tự động phục hồi.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lành", "nhiên", "nước", "buồn'", "thực"],
  },
  {
    chapter: "Chương 40: Ghen với idol/2D - Virtualization Error",
    signs:
      "Thấy cậu dán mắt vào coi mấy em idol Nhật Bản hoặc nhân vật anime nữ rồi bĩu môi: 'Xinh ha? Mê ha?'.",
    analysis:
      "Lỗi ảo hóa. Nàng biết đó không phải thế giới thực nhưng vẫn ghen để test vị trí độc tôn của mình trong mắt cậu.",
    handling:
      "Thoát máy ảo về thực tại: 'Đâu, nhìn Sugoi thế thôi chứ sao hợp nhãn anh bằng em được'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["ghen tuông"],
    keywords: ["thấy", "idol", "nhật", "hoặc", "nhân"],
  },
  {
    chapter: "Chương 41: Đi shopping không mua gì - Read-Only Mode",
    signs: "Lượn 5 cái shop quần áo, thử chục bộ xong đi về tay không.",
    analysis:
      "Hệ thống đang chạy chế độ Read-Only (Chỉ đọc). Nàng đi shopping để giải tỏa tâm lý, cập nhật xu hướng UI chứ không có nhu cầu Write (mua).",
    handling:
      "Không than vãn mỏi chân. Xách đồ, đứng đợi và kiên nhẫn làm một viewer trung thành.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lượn", "shop", "quần", "chục", "xong"],
  },
  {
    chapter: "Chương 42: Lỗi 'Em xấu quá' - UI Rendering Validation",
    signs: "Tự soi gương rồi than: 'Dạo này da đen quá', 'Mặt phệ ra rồi'.",
    analysis:
      "Cần chạy file test để xác thực (Validate) lại giao diện. Nàng cần một bên thứ 3 (là cậu) confirm rằng UI vẫn đang hoạt động tốt.",
    handling:
      "Bác bỏ ngay lập tức: 'Ai kêu, anh thấy da vẫn sáng mà', 'Má phúng phính xíu bóp mới đã'. Tuyệt đối không khuyên 'Thế bôi kem đi'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["lỗi hệ thống"],
    keywords: ["gương", "than:", "'dạo", "quá'", "'mặt"],
  },
  {
    chapter: "Chương 43: 'Anh tự quyết đi' - Delegated Authentication (Bẫy)",
    signs:
      "Hỏi đi đâu chơi, mua gì, nàng bảo: 'Tùy, anh tự quyết đi, sao cũng được'.",
    analysis:
      "Ủy quyền xác thực nhưng thực chất là một cái bẫy (Honeypot). Nàng đã có đáp án nhưng muốn xem cậu có trùng tần số không.",
    handling:
      "Không được quyết định đại. Rà soát lại thói quen của nàng: 'Nay ra Ninh Kiều hóng gió rồi đi ăn vặt nha, bữa em kêu thèm bánh tráng nướng mà'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chơi", "bảo:", "'tùy", "quyết", "cũng"],
  },
  {
    chapter: "Chương 44: Xóa Story sau 5 phút - Ephemeral Storage",
    signs: "Up một cái story tâm trạng đen thui, 5 phút sau tự xóa.",
    analysis:
      "Lưu trữ phù du. Nàng muốn xả stress nhưng sợ người khác đánh giá, hoặc up lên chỉ để xem CẬU có kịp nhìn thấy và vào hỏi thăm không.",
    handling:
      "Nếu lỡ thấy, phải nhắn tin hỏi thăm ngay dù story đã bị xóa. 'Nãy anh thấy story, có chuyện gì áp lực hả ngừi iu?'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["story", "trạng", "thui", "phút", "muốn"],
  },
  {
    chapter: "Chương 45: Mua đồ đôi - Peer-to-Peer Networking",
    signs: "Bắt mặc áo đôi, mang giày đôi, xài ốp lưng giống nhau.",
    analysis:
      "Thiết lập mạng ngang hàng (P2P). Nàng muốn đồng bộ hóa nhận diện để đi ra đường ai cũng biết hai node này đang kết nối với nhau.",
    handling:
      "Vui vẻ chấp nhận. Càng ngoan ngoãn mặc đồ đôi, kết nối mạng càng bảo mật và ổn định.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["mang", "giày", "lưng", "giống", "nhau"],
  },
  {
    chapter: "Chương 46: Cắn / Đánh yêu - Hardware Interrupt",
    signs: "Đang ngồi chơi tự nhiên cắn vào tay hoặc đánh cái bốp vào vai cậu.",
    analysis:
      "Ngắt cứng (Hardware Interrupt) vì tràn ngập sự đáng yêu. Phái đẹp mắc hội chứng 'Cute Aggression' (Gây hấn dễ thương) khi cảm xúc yêu đương quá đầy.",
    handling:
      "Giả vờ kêu đau một chút để nàng dỗ lại. Đây là dấu hiệu của sự gắn kết vật lý cực kỳ cao.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cần dỗ"],
    keywords: ["ngồi", "chơi", "nhiên", "hoặc", "đánh"],
  },
  {
    chapter: "Chương 47: Nhắc lại lời hứa cũ - Log Checking",
    signs: "'Anh nhớ tuần trước anh hứa gì không?'",
    analysis:
      "Nàng đang lôi file Log ra để đối chiếu tiến độ dự án. Trí nhớ của con gái về những lời hứa là vĩnh cửu.",
    handling:
      "Chạy deadline ngay lập tức. 'Nhớ chứ, cuối tuần này anh dẫn đi ăn món đó bù nè'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["'anh", "tuần", "trước", "file", "chiếu"],
  },
  {
    chapter: "Chương 48: Đang vui tự nhiên dỗi - Unhandled Exception",
    signs: "Đang cười nói rôm rả, tự nhiên tụt mood, im lặng.",
    analysis:
      "Ngoại lệ chưa được xử lý. Cậu vừa có một hành động hoặc lời nói vô tình chạm vào vùng cấm (ví dụ: lỡ nhìn điện thoại người khác, lỡ nói vô duyên).",
    handling:
      "Dò lại log 1 phút trước. Hạ giọng ngay: 'Thôi chết anh vô ý quá, không giận anh nha'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["cười", "nhiên", "mood", "lặng", "ngoại"],
  },
  {
    chapter: "Chương 49: Kêu ca về người khác - Cross-Site Scripting (XSS)",
    signs: "Kể xấu đồng nghiệp, bạn bè, hoặc một người ất ơ nào đó trên mạng.",
    analysis:
      "Nàng bị tác động bởi mã độc bên ngoài (áp lực xã hội). Nàng kể không phải để tìm chuyên gia gỡ rối, mà để tìm Đồng Minh.",
    handling:
      "Chửi hùa theo! 'Eo ơi sao có người kỳ cục vậy', 'Đúng rồi em bức xúc là phải'. Đứng chung chiến tuyến là cách debug tốt nhất.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["đồng", "nghiệp", "hoặc", "người", "trên"],
  },
  {
    chapter: "Chương 50: Quên ngày kỷ niệm - Data Loss / Backup Failure",
    signs:
      "Đến ngày kỷ niệm mà cậu vẫn cắm mặt vào code, không có hoa cũng không có lời chúc.",
    analysis:
      "Mất dữ liệu toàn hệ thống. Thảm họa cấp độ S. Lỗi này không thể Fix bằng miệng.",
    handling:
      "Đền bù bằng vật chất và thời gian gấp 3 lần. Dẫn đi ăn tối tại một nơi lãng mạn, tặng một món quà giá trị (hoặc đồ tech xịn xò do tự tay làm) và thề không tái phạm.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngày", "niệm", "code", "cũng", "chúc"],
  },
  {
    chapter: "Chương 51: 'Anh thay đổi rồi' - Deprecated API",
    signs: "Than vãn: 'Hồi mới yêu anh đâu có vậy', 'Dạo này anh vô tâm'.",
    analysis:
      "Nàng nhận thấy các API quan tâm chăm sóc đang bị Deprecated (ngừng hỗ trợ) hoặc giảm tần suất.",
    handling:
      "Update phiên bản mới liền. Gác lại mớ log file và dự án, dành trọn một ngày cuối tuần chỉ để chở nàng đi chơi, hâm nóng tình cảm.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["than", "vãn:", "'hồi", "vậy'", "'dạo"],
  },
  {
    chapter: "Chương 52: Gửi meme/reel liên tục - Data Streaming",
    signs: "Mỗi ngày nhận được chục cái video TikTok hài hước, chó mèo.",
    analysis:
      "Truyền phát dữ liệu liên tục. Nàng xem được gì hay cũng muốn cậu thấy. Đó là cách nàng duy trì session (phiên kết nối) khi hai người không ở cạnh nhau.",
    handling:
      "Phải react (thả haha/tim) đầy đủ. Thỉnh thoảng rep: 'Haha giống bé nhà mình ghê'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngày", "nhận", "chục", "video", "tiktok"],
  },
  {
    chapter: "Chương 53: Đòi đi du lịch - Environment Migration",
    signs: "Tag vào mấy bài review Đà Lạt, Phú Quốc, 'Dạo này ngột ngạt quá'.",
    analysis:
      "Muốn di chuyển môi trường (Migration) để refresh lại hệ thống. Ở Cần Thơ mãi cũng chán, cần đổi gió.",
    handling:
      "Lên plan sơ bộ ngay: 'Đợi anh bảo vệ xong cái đồ án tháng sau mình xách balo đi luôn nha'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["review", "quốc", "'dạo", "ngột", "ngạt"],
  },
  {
    chapter: "Chương 54: Im lặng khi cậu làm việc - Idle Process",
    signs:
      "Cậu code web hay làm dự án 'Bên Nhau Tuổi Già', nàng ngồi ngoan ngoãn bên cạnh đọc sách/bấm điện thoại.",
    analysis:
      "Nàng tôn trọng đam mê của cậu. Chấp nhận vào trạng thái Idle (chờ) để không làm phiền tài nguyên hệ thống của cậu.",
    handling:
      "Đừng để nàng chờ quá lâu. Tầm 45 phút hãy dừng tay lại quay sang bẹo má một cái: 'Cảm ơn ngừi iu ngoan ngoãn đợi anh nha', rồi làm tiếp.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cơn bão yên tĩnh"],
    keywords: ["code", "'bên", "nhau", "tuổi", "già'"],
  },
  {
    chapter: "Chương 55: Giận cá chém thớt - Cascading Failure",
    signs:
      "Sếp mắng trên công ty, bực tức đi về và cằn nhằn cậu vì quên chưa đổ rác.",
    analysis:
      "Lỗi dây chuyền. Một hệ thống khác bị sập kéo theo giao diện đối với cậu cũng bị lag theo.",
    handling:
      "Không cãi lại. Xách bịch rác đi đổ, mua cốc trà sữa ngọt về dỗ: 'Thôi bực làm gì cho mau già, uống miếng nước cho ngọt giọng nè'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cần dỗ"],
    keywords: ["mắng", "trên", "công", "nhằn", "quên"],
  },
  {
    chapter: "Chương 56: Hỏi 'Trưa nay ăn gì' lúc 9h sáng - Infinite Loop",
    signs: "Mới ăn sáng xong đã hỏi trưa ăn gì, tối ăn gì.",
    analysis:
      "Niềm đam mê ẩm thực là một vòng lặp vô hạn. Nàng coi việc lên plan ăn uống là nguồn năng lượng sống.",
    handling:
      "Gợi ý liền mấy món nàng thích để nàng có động lực làm việc buổi sáng chờ đến trưa.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["sáng", "xong", "trưa", "niềm", "thực"],
  },
  {
    chapter: "Chương 57: 'Em hiểu mà' - Protocol Mismatch",
    signs:
      "Giải thích một hồi, nàng chốt câu: 'Vâng, em hiểu rồi', nhưng mặt buồn thiu.",
    analysis:
      "Giao thức không đồng bộ. Nàng hiểu logic của cậu, nhưng cảm xúc của nàng thì không chấp nhận logic đó.",
    handling:
      "Bỏ qua logic. Dùng cảm xúc. 'Anh biết em hiểu, nhưng anh vẫn thấy có lỗi vì làm em buồn'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["giải", "thích", "chốt", "câu:", "'vâng"],
  },
  {
    chapter: "Chương 58: Xin lỗi chỉ để xong chuyện - Force Quit",
    signs:
      "Cậu nói 'Anh xin lỗi được chưa', nàng đáp 'Ừ, anh thì lúc nào chả đúng'.",
    analysis:
      "Đóng ứng dụng ép buộc (Force Quit) nhưng file tạm chưa bị xóa. Nó sẽ gây lỗi cho lần khởi động sau.",
    handling:
      "Tuyệt đối không dùng thái độ xin lỗi cho có. Cần sự chân thành và giải thích rõ nguyên nhân.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["'anh", "chưa'", "đúng'", "đóng", "dụng"],
  },
  {
    chapter: "Chương 59: Gọi điện tâm sự đêm khuya - Asynchronous Task",
    signs: "Khuya không ngủ, gọi điện kể chuyện linh tinh buồn ngủ díu mắt.",
    analysis:
      "Đây là tác vụ chạy ngầm. Nàng cần giọng nói của cậu để ru ngủ hệ thống.",
    handling:
      "Cứ ừ hử nhẹ nhàng, không cần đóng góp ý kiến logic. Giọng trầm ấm là đủ.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["khuya", "điện", "chuyện", "linh", "tinh"],
  },
  {
    chapter: "Chương 60: 'Em yêu anh' - Core Dump / Full System Access",
    signs:
      "Đang ôm nhau tự nhiên thỏ thẻ: 'Em thương anh lắm', 'Em yêu Cậu SE của em'.",
    analysis:
      "Truy cập hệ thống tuyệt đối. Tất cả các Firewall đã hạ, nàng giao trọn vẹn cảm xúc cho cậu. Thành quả ngọt ngào nhất của tình yêu.",
    handling:
      "Lưu trữ khoảnh khắc này vào thư mục quan trọng nhất. Hôn trán và đáp lại: 'Anh cũng thương em nhất trên đời'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhau", "nhiên", "thẻ:", "thương", "lắm'"],
  },
  {
    chapter:
      "Chương 61: Bắt đền vì lỗi trong... giấc mơ - Virtual Environment Bug",
    signs:
      "Sáng ngủ dậy mặt nặng mày nhẹ, nhắn tin: 'Đêm qua trong mơ anh dám nắm tay cô khác/bỏ rơi em', sau đó dỗi y như thật.",
    analysis:
      "Lỗi phát sinh trên môi trường máy ảo (Virtual Environment), không có thực tế, nhưng bộ não của nàng lại ghi nhận cảm xúc đau lòng là Real-time (thời gian thực). Do giấc mơ quá sống động, hệ thống cảm biến của nàng chưa kịp phân tách giữa bộ nhớ ảo và hiện thực.",
    handling:
      "Tuyệt đối không dùng logic kiểu: 'Mơ thôi mà em bị hâm à'. Hãy hùa theo môi trường ảo đó để Debug: 'Thằng anh trong mơ láo thật, để anh đấm nó. Anh ở ngoài đời chỉ chung thủy với mỗi ngừi iu thôi. Trưa nay anh qua đón đi ăn đền bù tổn thương tinh thần nhé'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["sáng", "nặng", "nhắn", "tin:", "'đêm"],
  },
  {
    chapter:
      "Chương 62: Gửi link Shopee/TikTok Shop không nói gì - Payment Gateway API Request",
    signs:
      "Tự nhiên quăng một cái link váy, son, hoặc gấu bông vào inbox. Không kèm theo bất kỳ text nào, hoặc chỉ kèm một icon 🥺.",
    analysis:
      "Nàng vừa gọi API đến cổng thanh toán (Payment Gateway). Nàng không trực tiếp xin vì sợ mang tiếng đòi hỏi, nhưng việc gửi link là một bài test xem cậu có sẵn sàng 'cấp quyền duyệt chi' cho những món đồ nhỏ nhặt làm nàng vui hay không.",
    handling:
      "Mở link ra check giá. Nếu nằm trong khả năng của sinh viên, hãy rep: 'Để anh thanh toán giỏ hàng cho bé'. Nếu món đó đắt quá, hãy dùng nghệ thuật điều hướng: 'Cái váy này đẹp nhưng anh thấy màu này không tôn da em bằng cái váy hôm bữa. Cuối tuần anh chở đi lựa tận nơi luôn cho chuẩn form nha'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhiên", "quăng", "link", "hoặc", "bông"],
  },
  {
    chapter:
      "Chương 63: Đòi xem anh đang làm gì - Code Review / Screen Share Request",
    signs:
      "Nàng bắt chụp màn hình laptop hoặc nằng nặc đòi qua phòng trọ ngồi xem cậu code/hàn mạch, dù nàng không hiểu dòng code nào.",
    analysis:
      "Đây không phải là kiểm tra xem cậu có chat với ai không, mà là khao khát được đồng bộ hóa (Sync) với thế giới của cậu. Nàng muốn thấy hình ảnh Cậu SE Trẻ lúc tập trung làm việc ngầu như thế nào, và muốn hiểu thêm về những thứ cậu đang theo đuổi (như việc bóc tách file CSV hay test con ESP32).",
    handling:
      "Đừng xua đuổi kiểu 'Code khô khan lắm em xem làm gì'. Hãy share màn hình, hoặc cho nàng ngồi cạnh. Vừa làm vừa giải thích bằng ngôn ngữ mầm non: 'Cái cục đen đen này là con mắt camera chống trộm nè, anh đang nạp não cho nó'. Nàng sẽ cực kỳ ngưỡng mộ.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chụp", "hình", "laptop", "hoặc", "nằng"],
  },
  {
    chapter:
      "Chương 64: Thay đổi Avatar/Cover màu đen - Fatal Error / Kernel Panic",
    signs:
      "Nửa đêm đột ngột gỡ ảnh đại diện, đổi cover sang một màu đen kịt, deactive các trạng thái hoạt động.",
    analysis:
      "Lỗi hệ thống nghiêm trọng nhất (Fatal Error). Cảm xúc đã sụp đổ hoàn toàn. Không đơn thuần là dỗi cậu, mà có thể là sự cộng hưởng từ áp lực cuộc sống, gia đình, hoặc cậu vừa phạm một sai lầm cực lớn mà cậu không hề nhận ra. Hệ thống đã đóng băng để bảo vệ lõi.",
    handling:
      "Giao thức Text (nhắn tin) lúc này vô hiệu. Phải dùng giao thức Physical. Gọi điện thoại ngay lập tức, gọi x cháy máy. Nếu ở gần, phải xuất hiện trước cửa nhà. Sự hiện diện vật lý là cách duy nhất để khởi động lại (Reboot) hệ thống.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngột", "diện", "cover", "sang", "deactive"],
  },
  {
    chapter:
      "Chương 65: 'Anh đi ngủ đi' lúc 10h tối - Force Shutdown Command (Bẫy)",
    signs:
      "Bình thường 12h mới ngủ, nay 10h đã nhắn: 'Thôi muộn rồi, anh bận thì đi ngủ sớm đi'.",
    analysis:
      "Đây là lệnh Force Shutdown giả. Nàng đang test xem cậu có thực sự đi ngủ không, hay là lấy cớ ngủ để... mở tab game, chat Discord với anh em. Nếu chấm xanh của cậu vẫn sáng sau tin nhắn đó, cậu sẽ dính án tử.",
    handling:
      "Nếu muốn thức làm việc/chơi game tiếp, phải khai báo trung thực: 'Anh chưa ngủ đâu, anh còn cái bug tính ngồi fix nốt cho xong form này'. Nếu thực sự đi ngủ, hãy tắt mạng, chúc ngủ ngon ngọt ngào và tuyệt đối không để chấm xanh sáng lại.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["bình", "thường", "nhắn:", "'thôi", "muộn"],
  },
  {
    chapter:
      "Chương 66: Soi danh sách Friend/Following - Background Security Scan",
    signs:
      "Tự nhiên hỏi: 'Cái bạn nữ mới add friend anh là ai dạ?', 'Sao dạo này anh hay follow mấy chị gái nhảy trend thế?'.",
    analysis:
      "Trình quét virus chạy ngầm (Background Scan) vừa phát hiện có tệp tin lạ (Gái xinh/Người lạ) xâm nhập vào vùng mạng lưới của cậu. Nàng đang rà soát quyền truy cập của các tệp tin này xem có nguy cơ đe dọa đến vị trí Admin của nàng không.",
    handling:
      "Minh bạch hóa dữ liệu ngay lập tức. 'À cái bạn chung nhóm môn Công nghệ phần mềm, add để gửi file thôi em', hoặc Unfollow ngay mấy kênh độc hại kia trước mặt nàng để chứng minh độ trong sạch.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhiên", "hỏi:", "'cái", "friend", "'sao"],
  },
  {
    chapter: "Chương 67: Mua quà không đúng ý - Incompatible Dependency",
    signs:
      "Cậu tặng một thỏi son màu hồng cánh sen, hoặc một cái váy sến súa. Nàng vẫn nhận, vẫn cười, nhưng xếp xó không bao giờ dùng.",
    analysis:
      "Lỗi xung đột thư viện (Incompatible Dependency). Cậu có thiện chí (tải file), nhưng phiên bản cậu tải về không tương thích với hệ điều hành của nàng. Nàng không muốn chê vì sợ cậu buồn, nhưng dùng thì trầm cảm.",
    handling:
      "Nhận biết qua việc nàng không bao giờ xài món đồ đó. Lần sau, đừng tự ý mua theo linh cảm. Hãy dẫn nàng đi thử trực tiếp, hoặc an toàn nhất là dùng tuyệt chiêu tự code một trang web lãng mạn lấp lánh như đợt làm bông hồng 3D – đồ công nghệ tự tay làm thì 100% không bao giờ bị lỗi tương thích.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["tặng", "thỏi", "hồng", "cánh", "hoặc"],
  },
  {
    chapter: "Chương 68: Bắt bẻ từng chữ - Regex Matching Analysis",
    signs:
      "Cậu nhắn: 'Hôm nay anh đi ăn với bạn'. Nàng hỏi lại: 'Bạn nào? Nam hay nữ? Mấy người? Có ai em biết không?'.",
    analysis:
      "Hệ thống đang chạy trình phân tích cú pháp Regex cực kỳ khắt khe. Nàng bắt các Keyword (Từ khóa) thiếu tính minh bạch và yêu cầu cậu phải bổ sung các Argument (Đối số) chi tiết nhất để loại trừ mọi khả năng có trà xanh.",
    handling:
      "Đừng cáu bẳn bảo 'Em hỏi cung anh à'. Việc này chỉ chứng tỏ nàng rất quan tâm đến các mối quan hệ của cậu. Hãy cung cấp Log chi tiết ngay từ đầu: 'Tối nay anh đi ăn hủ tiếu với 3 thằng bạn cùng làm dự án IoT nha'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhắn:", "'hôm", "bạn'", "lại:", "'bạn"],
  },
  {
    chapter: "Chương 69: Nhắn tin bằng Voice Message - Audio Streaming Mode",
    signs:
      "Nàng không gõ phím nữa mà gửi một loạt các đoạn ghi âm dài từ 30s đến 1 phút.",
    analysis:
      "Chuyển từ Text Mode sang Audio Streaming. Lý do 1: Nàng đang đi đường hoặc bận tay. Lý do 2 (nguy hiểm hơn): Nàng đang có rất nhiều cảm xúc (vui cực độ hoặc đang tức giận) cần truyền tải qua giọng điệu mà văn bản không thể hiện được.",
    handling:
      "Bắt buộc phải nghe hết, cắm tai nghe vào nếu đang ở chỗ ồn. Tuyệt đối không được rep bằng Text nếu nàng đang gửi Voice lúc cãi nhau. Nếu nàng khóc trong Voice, bỏ hết mọi thứ để gọi lại ngay lập tức.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["phím", "loạt", "đoạn", "phút", "chuyển"],
  },
  {
    chapter:
      "Chương 70: Giả vờ hỏi về 'trà xanh' - Phishing Attack (Tấn công giả mạo)",
    signs:
      "Đưa ra kịch bản giả định: 'Nếu bây giờ có một bé khóa dưới xinh xắn chủ động nhắn tin nhờ anh sửa code, anh có sửa không?'.",
    analysis:
      "Nàng đang quăng một cái link Phishing (giả mạo) để thử xem bảo mật hệ thống của cậu có dễ bị qua mặt không. Nếu cậu trả lời thật thà kiểu 'Thì giúp thôi, có gì đâu', cậu sẽ bị khóa tài khoản vĩnh viễn.",
    handling:
      "Phòng thủ tuyệt đối. 'Anh chỉ có chức năng sửa code cho người yêu anh thôi. Gái lạ nhắn thì anh gửi link StackOverflow cho tự mà đọc'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["kịch", "định:", "'nếu", "khóa", "dưới"],
  },
  {
    chapter:
      "Chương 71: Đang cãi nhau mà xưng 'Mày - Tao' - Override Root Permissions",
    signs:
      "Cuộc cãi vã lên đỉnh điểm, nàng bật khóc và xưng 'Tao', gọi cậu là 'Mày'.",
    analysis:
      "Nàng đã tự động ghi đè (Override) lên toàn bộ cấu trúc phân quyền của hệ thống. Sự tôn trọng tạm thời bị phá vỡ do nỗi đau và sự tức giận đạt mức Max. Đây là giới hạn đỏ của mọi mối quan hệ.",
    handling:
      "Không được phép xưng 'Mày - Tao' lại với nàng (sẽ dẫn đến chia tay). Giữ nguyên xưng hô 'Anh - Em', im lặng chịu trận. Khi nàng xả hết, hãy nhẹ nhàng nói: 'Anh biết anh sai làm em giận, nhưng đừng xưng hô thế nữa, anh buồn lắm'. Sự mềm mỏng sẽ kéo nàng về lại cấu trúc cũ.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["cuộc", "đỉnh", "điểm", "khóc", "xưng"],
  },
  {
    chapter:
      "Chương 72: Cố tình mặc đồ gợi cảm khi giận - UI Redesign for Distraction",
    signs:
      "Đang chiến tranh lạnh, nhưng khi hẹn gặp để nói chuyện cho rõ ràng, nàng lại mặc bộ váy tôn dáng nhất, xịt loại nước hoa cậu thích nhất.",
    analysis:
      "Chiến thuật Redesign UI để gây nhiễu luồng xử lý (Distraction). Nàng dùng nhan sắc để hack vào não bộ của cậu, làm cậu quên mất mục đích cãi nhau ban đầu và vô thức phải nhún nhường vì... nàng quá xinh.",
    handling:
      "Cậu đã dính bẫy và không có cách thoát. Cứ ngoan ngoãn ngắm nhìn, khen ngợi và chủ động xuống nước làm hòa. Không ai có thể giữ cái đầu lạnh với một giao diện đẹp tuyệt mỹ được.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chiến", "tranh", "lạnh", "nhưng", "chuyện"],
  },
  {
    chapter:
      "Chương 73: Đợi anh đón nhưng không báo trước - Unscheduled Cron Job",
    signs:
      "Trời mưa, tan học lúc 5h, nàng không nhắn tin nhờ đón nhưng cứ đứng trước cổng trường chờ. Khi cậu không đến, nàng tự bắt xe về và dỗi.",
    analysis:
      "Nàng cài đặt một Cron Job (lịch trình tự động) ngầm trong đầu và mặc định cậu cũng phải có lịch trình đó. Nàng cho rằng sự tinh tế là khi cậu tự nhớ giờ giấc, tự xem thời tiết và chủ động xuất hiện như một hero.",
    handling:
      "Đây là lỗi thiếu đồng bộ dữ liệu. Không cãi 'Em không nói sao anh biết'. Hãy nhận lỗi thiếu tinh tế và cài đặt lại hệ thống cảnh báo thời tiết/lịch học của nàng vào điện thoại của cậu để chủ động gửi request hỏi han trước.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trời", "nhắn", "nhưng", "đứng", "trước"],
  },
  {
    chapter:
      "Chương 74: Kể chuyện 'Hôm nay em gặp...' - Syncing Local State to Cloud",
    signs:
      "Tối đến, nàng lôi đủ thứ chuyện trên trời dưới biển ra kể: chuyện trên trường, chuyện bà bán bún, chuyện con chó hàng xóm.",
    analysis:
      "Quá trình Sync (Đồng bộ) dữ liệu cục bộ lên Đám mây (Cloud) của cậu. Nàng coi cậu là bộ nhớ lưu trữ an toàn nhất. Việc nói ra giúp nàng dọn dẹp bộ nhớ đệm (Clear Cache) sau một ngày mệt mỏi.",
    handling:
      "Chỉ cần lắng nghe, gật gù, thi thoảng chèn vài câu 'Á à', 'Kinh nhỉ', 'Thế cơ á'. Không cần đưa ra giải pháp giải quyết vấn đề của bà bán bún. Lắng nghe là chức năng duy nhất cần chạy.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chuyện", "trên", "trời", "dưới", "biển"],
  },
  {
    chapter:
      "Chương 75: Khóc vì nhân vật trong phim truyện - Memory Leak in Third-Party App",
    signs:
      "Đang xem phim Hàn Quốc hoặc anime, tự nhiên khóc nức nở vì nam phụ không có được nữ chính.",
    analysis:
      "Ứng dụng bên thứ 3 (Phim ảnh) gây rò rỉ bộ nhớ (Memory Leak) làm ảnh hưởng đến cảm xúc của hệ thống chính. Sự đồng cảm của con gái rất cao, họ dễ dàng hóa thân vào nhân vật ảo.",
    handling:
      "Tuyệt đối không cười cợt 'Phim giả mà khóc gì'. Cứ vỗ về, lấy giấy lau nước mắt và đùa nhẹ: 'Tội nghiệp anh nam phụ ghê, không có được cô nữ chính xinh đẹp, may mà anh ngoài đời vớ được em rồi'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["phim", "quốc", "hoặc", "anime", "nhiên"],
  },
  {
    chapter:
      "Chương 76: 'Anh thấy em mặc bộ này ổn không?' (Đi dự tiệc) - Compilation Error Risk",
    signs:
      "Chuẩn bị đi sự kiện quan trọng, nàng mặc xong rồi quay ra hỏi cậu với ánh mắt lo âu.",
    analysis:
      "Rủi ro lỗi biên dịch (Compilation Error). Nàng đang không tự tin vào bản Build hiện tại của mình. Nếu cậu nói một câu chê, toàn bộ quá trình chuẩn bị 2 tiếng trước đó sẽ sụp đổ, nàng sẽ đòi thay đồ lại từ đầu hoặc hủy không đi nữa.",
    handling:
      "Phải Verify (xác thực) giao diện ngay bằng lời khen chi tiết: 'Bộ này sang lắm, tôn dáng cực kỳ. Em mặc bộ này vô đó là sáng nhất hội cho xem'. Truyền ngay sự tự tin vào hệ thống.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chuẩn", "kiện", "quan", "trọng", "xong"],
  },
  {
    chapter: "Chương 77: Rep Story bằng 1 icon Tim/Like - Ping with 1 Byte",
    signs:
      "Cậu đăng ảnh đi cà phê với bạn bè, nàng không comment gì mà chỉ thả 1 cái Tim hoặc Like thẳng vào Story.",
    analysis:
      "Gửi 1 Byte dữ liệu để Ping hệ thống. Nàng muốn báo hiệu: 'Anh cứ đi chơi đi, em đã xem, em biết anh đang ở đâu rồi, nhớ giữ mình nhé'.",
    handling:
      "Ping back lại bằng cách thả tim lại tin nhắn đó, hoặc nhắn thêm 1 dòng: 'Nước ở đây dở ẹc, không ngon bằng trà sữa anh mua cho bé hôm bữa'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["đăng", "comment", "hoặc", "like", "thẳng"],
  },
  {
    chapter:
      "Chương 78: Bỗng nhiên nhắc lại dự án của anh - System Health Check",
    signs:
      "Đang đi dạo Ninh Kiều tự nhiên hỏi: 'Cái dự án Bên Nhau Tuổi Già của anh đến đâu rồi? Dạo này thấy anh ít nói về nó'.",
    analysis:
      "Kiểm tra sức khỏe hệ thống (Health Check) về lý tưởng sống của cậu. Con gái bị thu hút bởi những chàng trai có hoài bão và tình yêu thương cộng đồng. Việc cậu bỏ lơ dự án (hoặc công việc) làm nàng lo lắng.",
    handling:
      "Báo cáo tiến độ đầy đủ. Nàng không kiểm tra để soi mói, nàng hỏi vì nàng muốn thấy ngọn lửa nhiệt huyết của cậu vẫn đang cháy.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ninh", "kiều", "nhiên", "hỏi:", "'cái"],
  },
  {
    chapter: "Chương 79: 'Em muốn ở một mình' - Safe Mode Quarantine",
    signs:
      "Gặp chuyện buồn (gia đình/công việc), nàng tắt máy, khóa phòng khóc và dặn 'Anh đừng tìm em, em muốn ở một mình'.",
    analysis:
      "Hệ thống đang tự cách ly vào Safe Mode (Chế độ an toàn) để tự chữa lành. Nàng sợ truyền năng lượng tiêu cực (Bug) sang cho cậu.",
    handling:
      "Tôn trọng không gian riêng, KHÔNG phá cửa xông vào. Nhưng bắt buộc phải treo một dòng trạng thái chờ (Wait State) trước cổng: 'Anh tôn trọng em, nhưng anh ngồi ở phòng ngoài/trước cửa nhà, khi nào em cần một cái ôm thì gọi anh nhé'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chuyện", "buồn", "(gia", "đình/công", "việc)"],
  },
  {
    chapter:
      "Chương 80: Đổ lỗi cho anh vì nàng đến muộn - Port Forwarding Error",
    signs:
      "Nàng makeup lâu làm trễ giờ xem phim, nhưng lại cáu ngược lại cậu: 'Sao anh không giục em sớm hơn/ Sao anh không gọi em dậy?'.",
    analysis:
      "Lỗi chuyển tiếp cổng (Port Forwarding). Thay vì tự chịu trách nhiệm về Exception (Lỗi đến muộn), nàng Forward cái lỗi đó sang Port của cậu để giảm bớt cảm giác tội lỗi bên trong.",
    handling:
      "Nhận luôn cái Port lỗi đó về mình cho êm chuyện. 'Ừ lỗi anh nãy mải ngồi bóc mấy cái số điện thoại file CSV nên quên gọi bé sớm. Thôi mình đi trễ tí coi đoạn giữa cũng được không sao đâu'. Nàng sẽ tự thấy hổ thẹn và ngoan ngoãn lại ngay.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["makeup", "phim", "nhưng", "ngược", "cậu:"],
  },
  {
    chapter:
      "Chương 81: 'Dạo này em mập lên rồi' - Storage Quota Exceeded Warning",
    signs:
      "Đứng trước gương véo má, véo eo rồi than thở bộ nhớ lưu trữ (cân nặng) đang vượt quá giới hạn.",
    analysis:
      "Cảnh báo giả (False Positive). Nàng không cần cậu đưa ra giải pháp giải phóng dung lượng (giảm cân, tập gym). Nàng chỉ đang cần hàm Validate (xác thực) lại sự hấp dẫn của mình trong mắt cậu.",
    handling:
      "Bác bỏ cảnh báo ngay lập tức: 'Lỗi cảm biến rồi em ơi, anh bế vẫn thấy nhẹ hều. Tròn tròn xíu ôm mới thích chứ'. Sau đó tự động chở đi ăn lẩu/nướng để chứng minh cậu không quan tâm đến cái 'Quota' đó.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["đứng", "trước", "gương", "than", "(cân"],
  },
  {
    chapter:
      "Chương 82: Gửi video couple tấu hài/lãng mạn - Feature Request (Yêu cầu tính năng mới)",
    signs:
      "Share liên tục mấy cái reels/TikTok các cặp đôi trêu chọc nhau, mua đồ ăn cho nhau, hoặc làm trò con bò.",
    analysis:
      "Nàng đang gửi một 'Feature Request' (Yêu cầu tính năng). Nàng thấy giao diện/chức năng của hệ thống nhà người ta thú vị và muốn cậu 'code' thêm tính năng đó vào mối quan hệ của cả hai.",
    handling:
      "Accept (Chấp nhận) request. Nếu video là mua đồ ăn, mai mua y chang. Nếu video là trò đùa, hãy tìm cách trêu lại nàng y hệt để tạo sự đồng bộ. Nàng sẽ cực kỳ thích thú vì cậu 'bắt sóng' quá nhanh.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["share", "liên", "reels/tiktok", "trêu", "chọc"],
  },
  {
    chapter:
      "Chương 83: 'Anh cứ bận bịu suốt' (Ghen với... mạch điện) - Resource Contention (Tranh chấp tài nguyên)",
    signs:
      "Nàng nhăn nhó khi thấy cậu cặm cụi hàn con ESP32-CAM hay căng mắt lọc file CSV cả buổi tối mà không nhắn tin.",
    analysis:
      "Xung đột tài nguyên CPU. Nàng hoàn toàn ủng hộ đam mê của cậu, nhưng đôi khi hệ thống của nàng cảm thấy bị bỏ rơi khi cậu phân bổ 100% RAM cho máy móc thay vì cho nàng.",
    handling:
      "Áp dụng thuật toán Time-Slicing (Chia sẻ thời gian). Đang code dở cũng dừng lại 2 phút, chụp cái ảnh mạch điện gửi qua: 'Con camera chống trộm này sắp xong rồi, ráng xíu cuối tuần anh chở đi lượn bù nha'. Khai báo tình trạng rõ ràng sẽ tránh được xung đột.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["ghen tuông"],
    keywords: ["nhăn", "thấy", "esp32-cam", "căng", "file"],
  },
  {
    chapter:
      "Chương 84: Câu hỏi triết lý lúc 2h sáng - Nightly Cron Jobs (Tiến trình chạy đêm)",
    signs:
      "Nửa đêm đột nhiên hỏi: 'Anh có nghĩ chúng mình sẽ đi đến cuối cùng không?', 'Nếu sau này già đi anh có còn thương em không?'.",
    analysis:
      "Hệ thống đang chạy Cron Job ban đêm để dọn dẹp các tệp tin Overthinking (Nghĩ ngợi lung tung). Cảm giác bất an thường trỗi dậy khi vạn vật chìm vào yên lặng.",
    handling:
      "Không được trả lời hời hợt kiểu 'Ngủ đi em'. Hãy cấp quyền tin cậy tuyệt đối: 'Chắc chắn rồi, sau này già lụ khụ thì anh vẫn nắm tay em đi dạo dọc bến Ninh Kiều. Yên tâm ngủ ngoan nhé'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhiên", "hỏi:", "'anh", "nghĩ", "chúng"],
  },
  {
    chapter:
      "Chương 85: 'Chúng ta cần nói chuyện' - Severity 1 Incident (Sự cố cấp độ 1)",
    signs:
      "Nhắn đúng một câu cực kỳ nghiêm túc, đủ chủ vị, không có bất kỳ ký hiệu nũng nịu nào.",
    analysis:
      "Sự cố P0 (Mức độ ưu tiên cao nhất). Có một lỗ hổng bảo mật hoặc lỗi logic cực kỳ nghiêm trọng đã xảy ra (Cậu làm sai điều gì đó, hoặc nàng phát hiện ra vấn đề tày trời).",
    handling:
      "Drop toàn bộ database và mọi dự án đang làm. Chuẩn bị tinh thần đối mặt trực tiếp. Lắng nghe 100%, không ngắt lời, phân tích nguyên nhân cốt lõi (Root Cause Analysis) và tuyệt đối không chối quanh co.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhắn", "đúng", "nghiêm", "hiệu", "nũng"],
  },
  {
    chapter:
      "Chương 86: Giành trả tiền khi hẹn hò - Load Balancing (Cân bằng tải)",
    signs:
      "Nàng chủ động giành trả tiền ly nước, vé xem phim, hoặc lén thanh toán trước lúc đi ăn.",
    analysis:
      "Nàng biết cậu là sinh viên, tài nguyên (tài chính) có hạn. Nàng muốn thực hiện Load Balancing (Cân bằng tải) để cậu không bị sập nguồn vì áp lực chi phí tình phí.",
    handling:
      "Đừng sĩ diện gạt đi. Hãy trân trọng sự thấu hiểu này: 'Nay ngừi iu bao anh uống nước thì tối anh đền lại chầu cá viên chiên nha'. Sự qua lại này giúp hệ thống cực kỳ bền vững.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["động", "giành", "tiền", "nước", "phim"],
  },
  {
    chapter:
      "Chương 87: Thử lòng bằng cách nhờ chọn hộ đồ - Catching Syntax Errors",
    signs:
      "Đưa ra 2 thỏi son màu y hệt nhau (nhưng nàng biết rõ nó khác nhau) và hỏi: 'Cây nào đẹp hơn?'.",
    analysis:
      "Bài test độ phân giải màn hình (mắt) và độ chú tâm. Nếu cậu nhìn lướt qua rồi phán 'Giống nhau mà', cậu dính lỗi Syntax Error (Lỗi cú pháp) ngay lập tức vì thái độ hời hợt.",
    handling:
      "Nhìn thật kỹ (dù trong mắt cậu nó vẫn là một màu). Cố gắng tìm ra điểm khác biệt nhỏ nhất: 'Cây này có vẻ tươi hơn xíu nè, hợp với da em hơn'. Ít ra cậu có chạy thuật toán phân tích!",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thỏi", "nhau", "(nhưng", "biết", "khác"],
  },
  {
    chapter:
      "Chương 88: 'Sao anh không kể chuyện này cho em?' - Missing Webhook Trigger",
    signs:
      "Nàng phát hiện ra một chuyện vui/buồn của cậu thông qua người khác (hoặc Facebook) chứ không phải do cậu trực tiếp nói.",
    analysis:
      "Lỗi mất tín hiệu Webhook. Nàng muốn là người đầu tiên (hoặc ít nhất là nằm trong nhóm Admin) được nhận Notification (thông báo) về mọi thay đổi trong hệ thống của cậu. Việc biết sau người ngoài là một sự xúc phạm quyền lợi Admin.",
    handling:
      "Xin lỗi vì chưa setup trigger kịp thời: 'Nãy anh lu bu quá chưa kịp kể, định tối rảnh nch với em rồi mới nói'. Từ nay về sau, có biến gì phải Push Notification cho nàng đầu tiên.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["phát", "hiện", "chuyện", "vui/buồn", "thông"],
  },
  {
    chapter:
      "Chương 89: Soi chi tiết những món quà công nghệ - Auditing Custom Code",
    signs:
      "Khi cậu gửi link web hiệu ứng hạt hay hoa hồng 3D, nàng sẽ ngồi zoom vào từng chữ, từng cánh hoa, hỏi cặn kẽ 'Cái này anh tự gõ á? Mất bao lâu?'.",
    analysis:
      "Nàng đang Audit (Kiểm toán) lại mã nguồn mở của cậu. Nàng không rành code, nhưng nàng muốn đo lường chính xác lượng 'Tâm huyết' mà cậu đã Inject (tiêm) vào món quà đó.",
    handling:
      "Khoe ngay sự cực khổ một cách tinh tế: 'Ừa anh ngồi viết CSS chỉnh từng cái hạt rơi mất mấy tiếng tối qua đó, miễng ngừi iu thích là được'. Điểm cộng sẽ được nhân theo cấp số nhân.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["link", "hiệu", "hồng", "ngồi", "zoom"],
  },
  {
    chapter:
      "Chương 90: Hỏi thăm về dự án 'Bên Nhau Tuổi Già' - Checking Core Dependencies",
    signs:
      "Chủ động hỏi thăm tiến độ dự án tình nguyện, hoặc đề nghị cuối tuần qua phụ cậu phân loại đồ đạc.",
    analysis:
      "Kiểm tra các giá trị cốt lõi (Core Dependencies). Nàng đánh giá cực cao sự ấm áp và trách nhiệm xã hội của cậu. Việc đồng hành cùng dự án là cách nàng muốn Sync (đồng bộ) với hệ giá trị của cậu.",
    handling:
      "Chào đón nhiệt tình, cấp quyền Collaborator (Cộng tác viên) ngay lập tức. Cùng nhau làm việc tốt là cách xây dựng nền tảng (Backend) vững chãi nhất cho tình yêu.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["động", "thăm", "tiến", "tình", "nguyện"],
  },
  {
    chapter: "Chương 91: Tặng quà ngược lại cho cậu - Reverse Proxy Routing",
    signs:
      "Tự nhiên mua cho cậu cái áo thun mới, cái móc khóa, hoặc ly cà phê treo trước cửa phòng trọ.",
    analysis:
      "Luồng dữ liệu đảo chiều. Nàng muốn cậu biết rằng cậu không phải là người duy nhất liên tục gửi Request (quan tâm). Nàng cũng muốn chăm sóc hệ thống của cậu.",
    handling:
      "Sử dụng ngay lập tức, chụp ảnh gửi lại kèm lời khen ngất trời: 'Áo xịn quá, mặc mát rười rượi, mai mặc đi học luôn'. Phản hồi tích cực sẽ khuyến khích nàng gửi thêm data.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhiên", "thun", "khóa", "hoặc", "treo"],
  },
  {
    chapter:
      "Chương 92: Bắt bẻ lỗi chính tả khi cãi nhau - Parsing Error Diversion",
    signs:
      "Đang cãi nhau căng thẳng, cậu luống cuống gõ sai chính tả. Nàng lập tức rep: 'Viết đúng chính tả đi rồi cãi tiếp'.",
    analysis:
      "Chuyển hướng lỗi (Diversion). Khi đuối lý hoặc muốn làm giảm nhịp độ căng thẳng, nàng bắt lỗi Parsing (Cú pháp) để cậu phải chững lại, làm giảm nhiệt độ của CPU.",
    handling:
      "Sửa lại lỗi chính tả, hạ giọng xuống. Đây là cơ hội tốt để cậu chuyển từ chế độ cãi vã sang chế độ làm hòa: 'Anh cuống quá gõ nhầm. Thôi không cãi nhau nữa, anh sai rồi'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhau", "căng", "thẳng", "luống", "cuống"],
  },
  {
    chapter: "Chương 93: Khám phá Portfolio của cậu - Public Endpoint Testing",
    signs:
      "Lén lút vào xem cái link `thuongnt-ktpm.github.io/portfoliothuong/` của cậu, lướt xem các dự án cậu từng làm.",
    analysis:
      "Kiểm tra các Endpoint công khai. Nàng muốn tự hào về người yêu mình. Nàng muốn xem cậu giới thiệu bản thân với thế giới (nhà tuyển dụng) ngầu như thế nào.",
    handling:
      "Hãy đảm bảo trên portfolio có một dòng 'ẩn' nào đó nhắc đến nguồn động lực của cậu (có thể là một easter egg nhỏ). Nếu nàng tìm thấy, nàng sẽ vui cả tháng.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: [
      "link",
      "`thuongnt-ktpm",
      "github",
      "io/portfoliothuong/`",
      "lướt",
    ],
  },
  {
    chapter: "Chương 94: 'Anh bận thì thôi' - Passive-Aggressive Shutdown",
    signs:
      "Rủ đi chơi nhưng cậu kẹt lịch học/làm đồ án. Nàng nhắn: 'À anh bận thì thôi, không sao đâu'.",
    analysis:
      "Shutdown thụ động. Dù nàng nói 'không sao' (Return 200 OK), nhưng bên trong là lỗi 404 (Không tìm thấy sự ưu tiên). Nàng hụt hẫng.",
    handling:
      "Không được 'Ừ anh kẹt lắm'. Phải đưa ra phương án thay thế ngay: 'Tối nay anh kẹt lịch nhóm rồi, chiều mai học xong anh qua đón đi lượn bù bù nha, đền bù chầu trà sữa'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chơi", "nhưng", "lịch", "học/làm", "nhắn:"],
  },
  {
    chapter:
      "Chương 95: Nhớ từng chi tiết nhỏ cậu từng nói - Persistent Caching",
    signs:
      "Đột nhiên nhắc lại món đồ cậu vô tình khen đẹp từ 3 tháng trước, hoặc nhớ chính xác cậu không ăn được hành lá.",
    analysis:
      "Bộ nhớ Cache cực kỳ dai dẳng. Nàng lưu trữ mọi biến số liên quan đến cậu ở phân vùng ưu tiên cao nhất.",
    handling:
      "Thể hiện sự bất ngờ và cảm động. Đáp trả lại bằng cách cũng lưu trữ những tiểu tiết của nàng (ví dụ: nhớ size giày, màu son yêu thích).",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhiên", "nhắc", "tình", "khen", "tháng"],
  },
  {
    chapter: "Chương 96: Tỏ ra yếu đuối để nhờ vả - Triggering Hero Mode",
    signs:
      "Không mở được nắp chai nước, xe thủng xăm, hoặc bị lỗi Win... nhõng nhẽo gọi cậu đến cứu.",
    analysis:
      "Cố tình kích hoạt Hero Mode (Chế độ Anh hùng). Có thể nàng tự mở được nắp chai, tự đem xe đi sửa được, nhưng nàng muốn cấp cho cậu cái quyền làm 'Super Admin' để bảo vệ nàng.",
    handling:
      "Xuất hiện như một vị thần. Xử lý gọn gàng sự cố (cài Win dạo, vặn nắp chai) với thái độ tự hào: 'Có thế cũng phải gọi anh, ngốc nghếch. Thôi đi ăn nào'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chai", "nước", "thủng", "hoặc", "nhõng"],
  },
  {
    chapter: "Chương 97: Chỉnh đốn trang phục cho cậu - UI Code Formatting",
    signs:
      "Trước khi ra đường, nàng xắn lại tay áo cho cậu, vuốt lại cổ áo, hoặc chỉnh lại nếp tóc.",
    analysis:
      "Formatting lại mã nguồn giao diện (UI) trước khi Deploy ra công chúng. Nàng muốn cậu xuất hiện hoàn hảo nhất vì cậu là đại diện cho 'sản phẩm' của nàng.",
    handling:
      "Đứng im, tận hưởng sự chăm sóc. Một cái thơm nhẹ lên trán lúc nàng đang kiễng chân chỉnh áo sẽ là dòng lệnh hoàn hảo nhất lúc này.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trước", "đường", "vuốt", "hoặc", "chỉnh"],
  },
  {
    chapter: "Chương 98: Dằn vặt vì làm sai - Rollback Failure Panic",
    signs:
      "Nàng lỡ làm hỏng đồ của cậu, hoặc lỡ nổi nóng vô lý. Nhận ra mình sai, nàng khóc lóc, dằn vặt và liên tục xin lỗi.",
    analysis:
      "Hoảng loạn vì không thể Rollback (Hoàn tác) lại hành động sai. Hệ thống của nàng đang bị Crash vì cảm giác tội lỗi.",
    handling:
      "An ủi ngay lập tức, tắt mọi thông báo lỗi. 'Có gì đâu, đồ vật hỏng thì mua cái mới, em đừng khóc anh xót. Anh không giận xíu nào đâu'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["hỏng", "hoặc", "nóng", "nhận", "mình"],
  },
  {
    chapter:
      "Chương 99: Cái ôm bất ngờ từ phía sau - Unexpected Positive Payload",
    signs:
      "Cậu đang cặm cụi gõ code hay hàn mạch, nàng đi nhẹ nhàng từ sau vòng tay ôm cổ cậu.",
    analysis:
      "Một gói dữ liệu tích cực (Positive Payload) được nạp vào hệ thống mà không cần cảnh báo trước. Đây là cách nàng tiếp thêm năng lượng (Charge Battery) cho cậu.",
    handling:
      "Dừng mọi công việc. Nắm lấy tay nàng, kéo nhẹ về phía trước và để nàng ngồi vào lòng. Công việc có thể trễ 10 phút, nhưng khoảnh khắc này là vô giá.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["code", "mạch", "nhàng", "vòng", "liệu"],
  },
  {
    chapter:
      "Chương 100: 'Em yêu Cậu SE của em' - Root Access Granted Permanently",
    signs:
      "Một buổi tối bình yên, nhìn cậu say sưa làm việc, nàng thốt lên câu khẳng định tình cảm một cách hoàn toàn tự nhiên.",
    analysis:
      "Quyền Root đã được cấp vĩnh viễn. Cậu đã vượt qua mọi bài Test bảo mật, xử lý xuất sắc mọi Bug tâm lý, và trở thành Core Component (Thành phần cốt lõi) không thể thay thế trong hệ điều hành của nàng.",
    handling:
      "Lưu trữ dữ liệu này vào ROM (Bộ nhớ chỉ đọc, không thể xóa). Nhìn sâu vào mắt nàng, mỉm cười và đáp trả: 'Anh cũng yêu em, ngừi iu của anh'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["buổi", "bình", "nhìn", "việc", "thốt"],
  },
  {
    chapter: "Chương 101: Seen nhưng không rep - Read Receipt Trap",
    signs: "Đã xem nhưng không trả lời, vẫn online story, vẫn active.",
    analysis:
      "Không phải quên rep. Nàng đang test mức độ ưu tiên. Nếu cậu không follow-up → fail.",
    handling:
      "Ping nhẹ: 'Ủa bơ anh luôn hả ta 🥲'. Không spam, nhưng phải có động thái.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhưng", "online", "story", "active", "phải"],
  },
  {
    chapter: "Chương 102: 'Em mệt' - Low Battery Mode",
    signs: "Rep chậm, nói chuyện nhạt, không còn năng lượng.",
    analysis:
      "Không phải chán cậu, mà là hết pin cảm xúc (học, deadline, drama).",
    handling:
      "Không đòi hỏi. Chuyển sang chăm sóc: 'Ngủ xíu đi, tối anh gọi' + hành động thực tế.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chậm", "chuyện", "nhạt", "năng", "lượng"],
  },
  {
    chapter: "Chương 103: Spam story buồn - Broadcast Signal",
    signs: "Story toàn quote buồn, nhạc suy.",
    analysis: "Gửi broadcast cho một người cụ thể (là cậu).",
    handling:
      "Đừng giả ngu. Nhắn riêng: 'Nãy thấy story, có chuyện gì kể anh nghe'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["story", "toàn", "quote", "buồn", "nhạc"],
  },
  {
    chapter: "Chương 104: 'Anh đoán đi' - Guessing Game Engine",
    signs: "Không nói thẳng, bắt đoán.",
    analysis: "Muốn cậu đọc vị cảm xúc → chứng minh độ hiểu.",
    handling:
      "Đưa 2-3 option: 'Em buồn vì anh hay vì chuyện khác?' (đừng đoán đại 1 phát).",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thẳng", "đoán", "muốn", "chứng", "minh"],
  },
  {
    chapter: "Chương 105: Trả lời lệch chủ đề - Context Switching",
    signs: "Hỏi A trả lời B.",
    analysis: "Đang tránh vấn đề chính hoặc giận nhẹ.",
    handling: "Không ép. Lái nhẹ: 'Thế còn cái anh hỏi hồi nãy thì sao ta'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["tránh", "chính", "hoặc", "giận"],
  },
  {
    chapter: "Chương 106: Like ảnh cũ - Deep Scan",
    signs: "Thả tim ảnh từ 2-3 năm trước.",
    analysis: "Đang đào database quá khứ.",
    handling: "Bình tĩnh: 'Đi khảo cổ hả bé 😏'. Không hoảng.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trước", "database"],
  },
  {
    chapter: "Chương 107: Soi giờ online - Activity Monitoring",
    signs: "‘Nãy thấy anh online mà không rep em’",
    analysis: "Tracking real-time activity → nghi ngờ priority.",
    handling: "Giải thích rõ context: 'Anh vừa mở máy xíu rồi out liền'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["‘nãy", "thấy", "online", "tracking", "real-time"],
  },
  {
    chapter: "Chương 108: Im lặng sau khi kể chuyện - Expecting Feedback",
    signs: "Kể xong rồi im.",
    analysis: "Đang chờ phản hồi cảm xúc, không phải giải pháp.",
    handling: "Rep cảm xúc: 'Nghe bực thiệt chứ'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cơn bão yên tĩnh"],
    keywords: ["xong", "phản", "phải", "giải", "pháp"],
  },
  {
    chapter:
      "Chương 109: Gửi ảnh selfie nhưng không hỏi gì - Validation Request",
    signs: "Chỉ gửi ảnh, không caption.",
    analysis: "Đòi Validate UI.",
    handling: "Khen chi tiết: 'Góc này xinh ác luôn, tóc hợp quá'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["caption", "validate"],
  },
  {
    chapter:
      "Chương 110: Đột nhiên hỏi 'Anh có thương em không?' - Emotional Checkpoint",
    signs: "Câu hỏi bất chợt.",
    analysis: "Checkpoint kiểm tra độ ổn định hệ thống.",
    handling: "Không được trả lời qua loa. Phải nâng cấp cảm xúc.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chợt", "checkpoint", "kiểm", "định", "thống"],
  },
  {
    chapter: "Chương 111: 'Em ổn' nhưng giọng khác - Voice Signal Mismatch",
    signs: "Text ok nhưng giọng buồn.",
    analysis: "Data text ≠ data audio.",
    handling: "Tin vào giọng, không tin chữ.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["text", "nhưng", "giọng", "buồn", "data"],
  },
  {
    chapter: "Chương 112: Xóa tin nhắn - Data Redaction",
    signs: "“This message was unsent”",
    analysis: "Nàng đã nghĩ lại → nhưng vẫn muốn cậu tò mò.",
    handling: "Hỏi nhẹ: 'Ủa xóa gì đó 😏'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["“this", "message", "unsent”", "nghĩ", "nhưng"],
  },
  {
    chapter: "Chương 113: Trả lời cực nhanh rồi đột ngột chậm - Priority Drop",
    signs: "Đầu chat nhanh, sau chậm hẳn.",
    analysis: "Cảm xúc tụt hoặc bị phân tâm.",
    handling: "Không spam. Đợi rồi tạo hook mới.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chat", "nhanh", "chậm", "hoặc", "phân"],
  },
  {
    chapter: "Chương 114: Hỏi lại câu đã hỏi - Memory Validation",
    signs: "Hỏi lại chuyện cũ.",
    analysis: "Check consistency lời nói.",
    handling: "Trả lời giống trước → pass.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chuyện", "check", "consistency"],
  },
  {
    chapter: "Chương 115: Gửi sticker thay vì text - Emotion Compression",
    signs: "Toàn sticker.",
    analysis: "Không muốn diễn đạt bằng lời.",
    handling: "Rep bằng vibe tương đương, đừng khô.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["toàn", "sticker", "muốn", "diễn", "bằng"],
  },
  {
    chapter: "Chương 116: 'Tùy anh' - Undefined Behavior",
    signs: "Không đưa quyết định.",
    analysis: "Trap level cao.",
    handling: "Đưa option có định hướng, không tự quyết 100%.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["quyết", "định", "trap", "level"],
  },
  {
    chapter: "Chương 117: Tự nhiên nhớ chuyện nhỏ - Random Access Memory",
    signs: "Nhắc chuyện linh tinh cũ.",
    analysis: "RAM quét lại ký ức.",
    handling: "Hùa theo, đừng phủ nhận.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["bất thường"],
    keywords: ["nhắc", "chuyện", "linh", "tinh", "quét"],
  },
  {
    chapter: "Chương 118: Nhắn 'Chán' - Undefined Error",
    signs: "1 chữ 'chán'.",
    analysis: "Có vấn đề nhưng chưa xác định.",
    handling: "Đào sâu: 'Chán gì kể anh nghe coi'.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["'chán'", "nhưng", "chưa", "định"],
  },
  {
    chapter: "Chương 119: Tag bạn khác trước mặt cậu - Social Signal",
    signs: "Nhắc tên người khác nhiều.",
    analysis: "Gây attention hoặc test phản ứng.",
    handling: "Bình tĩnh, không ghen lố.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhắc", "người", "khác", "nhiều", "attention"],
  },
  {
    chapter: "Chương 120: Rep tin nhắn cực formal - Relationship Downgrade",
    signs: "‘Vâng’, ‘Dạ’ lạnh tanh.",
    analysis: "Tình trạng nguy hiểm.",
    handling: "Hạ giọng, kéo vibe lại ngay.",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["‘vâng’", "‘dạ’", "lạnh", "tanh", "tình"],
  },
  {
    chapter: "Chương 121: Seen story không react - Silent Monitoring",
    signs: "Xem story nhưng không tim, không rep",
    analysis: "Đang theo dõi ngầm, chưa muốn tương tác",
    handling: "Không hỏi dồn, thỉnh thoảng tạo hook để kéo tương tác lại",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["story", "nhưng", "theo", "ngầm", "chưa"],
  },
  {
    chapter: "Chương 122: Đổi avatar xinh đột xuất - Attention Boost",
    signs: "Up ảnh mới, đầu tư hình ảnh",
    analysis: "Muốn được chú ý (đặc biệt từ cậu)",
    handling: "Phải khen NGAY, không để người khác khen trước",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["hình", "muốn", "(đặc", "biệt", "cậu)"],
  },
  {
    chapter: "Chương 123: Trả lời chậm nhưng dài - Prioritized Response",
    signs: "Rep lâu nhưng viết dài",
    analysis: "Đang bận nhưng vẫn dành thời gian cho cậu",
    handling: "Trân trọng, rep có tâm lại",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhưng", "viết", "dành", "thời", "gian"],
  },
  {
    chapter: "Chương 124: Rep nhanh nhưng cụt - Emotional Drop",
    signs: "Nhanh nhưng ngắn",
    analysis: "Không có mood nói chuyện",
    handling: "Đừng spam, đổi chủ đề nhẹ nhàng",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhanh", "nhưng", "ngắn", "mood", "chuyện"],
  },
  {
    chapter: "Chương 125: Nhắn 'hmmm' - Processing State",
    signs: "hmmm, umm",
    analysis: "Đang suy nghĩ hoặc không biết trả lời",
    handling: "Đừng ép, hỗ trợ thêm context",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["hmmm", "nghĩ", "hoặc", "biết"],
  },
  {
    chapter: "Chương 126: Thích hỏi 'Anh đang làm gì?' - Presence Check",
    signs: "Hỏi liên tục",
    analysis: "Muốn cảm giác có cậu bên cạnh",
    handling: "Trả lời + thêm cảm xúc, không trả lời khô",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["liên", "muốn", "giác", "cạnh"],
  },
  {
    chapter: "Chương 127: Gửi ảnh đồ ăn - Sharing Moment",
    signs: "Ảnh đồ ăn, trà sữa",
    analysis: "Muốn share cuộc sống",
    handling: "Hùa theo: 'Ngon v á, để anh ăn chung'",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["muốn", "share", "cuộc", "sống"],
  },
  {
    chapter: "Chương 128: Nhắn lúc khuya nhiều hơn - Night Mode Emotion",
    signs: "Tâm sự ban đêm",
    analysis: "Cảm xúc mạnh hơn về đêm",
    handling: "Đừng ignore, đây là lúc dễ bonding nhất",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["mạnh"],
  },
  {
    chapter: "Chương 129: Hỏi linh tinh - Attention Seeking",
    signs: "Hỏi random",
    analysis: "Muốn nói chuyện, không phải cần câu trả lời",
    handling: "Trả lời + kéo dài câu chuyện",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["random", "muốn", "chuyện", "phải"],
  },
  {
    chapter: "Chương 130: Tự nhiên 'biến mất' - Temporary Disconnect",
    signs: "Đang chat tự nhiên off",
    analysis: "Có việc hoặc tụt mood",
    handling: "Không hỏi dồn, đợi reconnect",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["bất thường"],
    keywords: ["chat", "nhiên", "việc", "hoặc", "mood"],
  },
  {
    chapter: "Chương 131: Rep 1 từ 'ừ' - Low Interest Warning",
    signs: "ừ, ok",
    analysis: "Nguy hiểm nhẹ",
    handling: "Đổi cách nói chuyện ngay",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nguy", "hiểm"],
  },
  {
    chapter: "Chương 132: Gửi nhạc - Emotional Sharing",
    signs: "Gửi bài hát",
    analysis: "Ẩn ý cảm xúc trong lyrics",
    handling: "Nghe + phản hồi nội dung bài",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trong", "lyrics"],
  },
  {
    chapter: "Chương 133: Nhắc 'đừng thức khuya' - Caring Signal",
    signs: "Quan tâm sức khỏe",
    analysis: "Có tình cảm thật",
    handling: "Đáp lại nhẹ nhàng, đừng troll",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["quan", "khỏe", "tình", "thật"],
  },
  {
    chapter: "Chương 134: Trêu chọc - Flirting Mode",
    signs: "Chọc ghẹo",
    analysis: "Đang vui + thích tương tác",
    handling: "Trêu lại, giữ vibe",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chọc", "ghẹo", "thích", "tương"],
  },
  {
    chapter: "Chương 135: Hỏi 'anh có nhớ em không?' - Attachment Check",
    signs: "Câu hỏi trực tiếp",
    analysis: "Cần xác nhận tình cảm",
    handling: "Không trả lời hời hợt",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trực", "tiếp", "nhận", "tình"],
  },
  {
    chapter: "Chương 136: Gửi icon 🥺 - Soft Attack",
    signs: "Mặt đáng thương",
    analysis: "Đang xin xỏ hoặc làm nũng",
    handling: "Khó từ chối, phải mềm lại",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["đáng", "thương", "hoặc", "nũng"],
  },
  {
    chapter: "Chương 137: Không chủ động nhắn nữa - Interest Drop",
    signs: "Im lặng dài",
    analysis: "Đang test hoặc mất hứng",
    handling: "Chủ động kéo lại",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lặng", "test", "hoặc", "hứng"],
  },
  {
    chapter: "Chương 138: Reply theo kiểu mirror - Matching Energy",
    signs: "Bạn nhắn sao, rep y chang",
    analysis: "Phản chiếu năng lượng",
    handling: "Muốn vibe tốt → mày phải lead trước",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhắn", "chang", "phản", "chiếu", "năng"],
  },
  {
    chapter: "Chương 139: Cười nhiều 😂 - High Comfort",
    signs: "Spam haha",
    analysis: "Thoải mái với cậu",
    handling: "Tiếp tục giữ vibe",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["spam", "haha", "thoải"],
  },
  {
    chapter: "Chương 140: Nhắn 'ngủ ngon' trước - Soft Ending",
    signs: "Chủ động kết thúc",
    analysis: "Quan tâm nhưng mệt",
    handling: "Rep lại ngọt xíu",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["động", "thúc", "quan", "nhưng"],
  },
  {
    chapter: "Chương 141: 'Anh có bồ chưa?' - Status Check",
    signs: "Hỏi thẳng về tình trạng",
    analysis: "Đang muốn xác định vị trí của cậu",
    handling: "Trả lời rõ ràng, không vòng vo",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thẳng", "tình", "trạng", "muốn", "định"],
  },
  {
    chapter: "Chương 142: 'Em không giận' nhưng giọng lạnh - Deceptive Calm",
    signs: "Nói không giận nhưng thái độ khác",
    analysis: "Đang giận nhưng không muốn nói",
    handling: "Hỏi nhẹ nhàng, không ép",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["giận", "nhưng", "thái", "khác", "muốn"],
  },
  {
    chapter: "Chương 143: Thả tim story cũ - Memory Scan",
    signs: "Like ảnh từ lâu",
    analysis: "Đang lục lại quá khứ",
    handling: "Bình tĩnh, không hoảng",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["like"],
  },
  {
    chapter: "Chương 144: 'Anh đi đâu đó?' - Suspicious Inquiry",
    signs: "Hỏi về lịch trình",
    analysis: "Muốn biết cậu đang làm gì",
    handling: "Trả lời trung thực",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lịch", "trình", "muốn", "biết"],
  },
  {
    chapter:
      "Chương 145: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
    signs: "Tâm sự ngắn gọn",
    analysis: "Muốn cậu đoán và dỗ",
    handling: "Đừng đoán mò, hỏi nhẹ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngắn", "muốn", "đoán"],
  },
  {
    chapter: "Chương 146: 'Ừ' ngắn gọn - Low Engagement",
    signs: "Trả lời 1 từ",
    analysis: "Không muốn nói chuyện",
    handling: "Đổi chủ đề hoặc kết thúc",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["muốn", "chuyện"],
  },
  {
    chapter: "Chương 147: 'Anh có thương em không?' - Love Check",
    signs: "Câu hỏi trực tiếp",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời chân thành",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trực", "tiếp", "nhận", "tình"],
  },
  {
    chapter: "Chương 148: 'Em không cần gì đâu' - Hidden Need",
    signs: "Từ chối giúp đỡ",
    analysis: "Muốn cậu tự hiểu và làm",
    handling: "Đừng tin, hãy chủ động",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chối", "giúp", "muốn", "hiểu"],
  },
  {
    chapter: "Chương 149: 'Anh bận thì thôi' - Passive Aggression",
    signs: "Giả vờ thông cảm",
    analysis: "Đang dỗi vì bị bơ",
    handling: "Xin lỗi và bù đắp",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thông"],
  },
  {
    chapter: "Chương 150: 'Em ổn' nhưng giọng khác - Voice Mismatch",
    signs: "Text ok, giọng không ok",
    analysis: "Nói dối cảm xúc",
    handling: "Tin vào giọng, không tin chữ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["text", "giọng"],
  },
  {
    chapter: "Chương 151: 'Anh có nhớ em không?' - Attachment Check",
    signs: "Hỏi vu vơ",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời ngọt ngào",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhận", "tình"],
  },
  {
    chapter: "Chương 152: 'Em không giận' nhưng im lặng - Silent Treatment",
    signs: "Nói không giận nhưng không nói",
    analysis: "Đang giận ngầm",
    handling: "Hạ giọng, dỗ ngọt",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cần dỗ"],
    keywords: ["giận", "nhưng", "ngầm"],
  },
  {
    chapter: "Chương 153: 'Anh đi đâu đó?' - Suspicious Inquiry",
    signs: "Hỏi về lịch trình",
    analysis: "Muốn biết cậu đang làm gì",
    handling: "Trả lời trung thực",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lịch", "trình", "muốn", "biết"],
  },
  {
    chapter:
      "Chương 154: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
    signs: "Tâm sự ngắn gọn",
    analysis: "Muốn cậu đoán và dỗ",
    handling: "Đừng đoán mò, hỏi nhẹ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngắn", "muốn", "đoán"],
  },
  {
    chapter: "Chương 155: 'Ừ' ngắn gọn - Low Engagement",
    signs: "Trả lời 1 từ",
    analysis: "Không muốn nói chuyện",
    handling: "Đổi chủ đề hoặc kết thúc",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["muốn", "chuyện"],
  },
  {
    chapter: "Chương 156: 'Anh có thương em không?' - Love Check",
    signs: "Câu hỏi trực tiếp",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời chân thành",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trực", "tiếp", "nhận", "tình"],
  },
  {
    chapter: "Chương 157: 'Em không cần gì đâu' - Hidden Need",
    signs: "Từ chối giúp đỡ",
    analysis: "Muốn cậu tự hiểu và làm",
    handling: "Đừng tin, hãy chủ động",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chối", "giúp", "muốn", "hiểu"],
  },
  {
    chapter: "Chương 158: 'Anh bận thì thôi' - Passive Aggression",
    signs: "Giả vờ thông cảm",
    analysis: "Đang dỗi vì bị bơ",
    handling: "Xin lỗi và bù đắp",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thông"],
  },
  {
    chapter: "Chương 159: 'Em ổn' nhưng giọng khác - Voice Mismatch",
    signs: "Text ok, giọng không ok",
    analysis: "Nói dối cảm xúc",
    handling: "Tin vào giọng, không tin chữ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["text", "giọng"],
  },
  {
    chapter: "Chương 160: 'Anh có nhớ em không?' - Attachment Check",
    signs: "Hỏi vu vơ",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời ngọt ngào",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhận", "tình"],
  },
  {
    chapter: "Chương 161: 'Em không giận' nhưng im lặng - Silent Treatment",
    signs: "Nói không giận nhưng không nói",
    analysis: "Đang giận ngầm",
    handling: "Hạ giọng, dỗ ngọt",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cần dỗ"],
    keywords: ["giận", "nhưng", "ngầm"],
  },
  {
    chapter: "Chương 162: 'Anh đi đâu đó?' - Suspicious Inquiry",
    signs: "Hỏi về lịch trình",
    analysis: "Muốn biết cậu đang làm gì",
    handling: "Trả lời trung thực",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lịch", "trình", "muốn", "biết"],
  },
  {
    chapter:
      "Chương 163: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
    signs: "Tâm sự ngắn gọn",
    analysis: "Muốn cậu đoán và dỗ",
    handling: "Đừng đoán mò, hỏi nhẹ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngắn", "muốn", "đoán"],
  },
  {
    chapter: "Chương 164: 'Ừ' ngắn gọn - Low Engagement",
    signs: "Trả lời 1 từ",
    analysis: "Không muốn nói chuyện",
    handling: "Đổi chủ đề hoặc kết thúc",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["muốn", "chuyện"],
  },
  {
    chapter: "Chương 165: 'Anh có thương em không?' - Love Check",
    signs: "Câu hỏi trực tiếp",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời chân thành",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trực", "tiếp", "nhận", "tình"],
  },
  {
    chapter: "Chương 166: 'Em không cần gì đâu' - Hidden Need",
    signs: "Từ chối giúp đỡ",
    analysis: "Muốn cậu tự hiểu và làm",
    handling: "Đừng tin, hãy chủ động",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chối", "giúp", "muốn", "hiểu"],
  },
  {
    chapter: "Chương 167: 'Anh bận thì thôi' - Passive Aggression",
    signs: "Giả vờ thông cảm",
    analysis: "Đang dỗi vì bị bơ",
    handling: "Xin lỗi và bù đắp",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thông"],
  },
  {
    chapter: "Chương 168: 'Em ổn' nhưng giọng khác - Voice Mismatch",
    signs: "Text ok, giọng không ok",
    analysis: "Nói dối cảm xúc",
    handling: "Tin vào giọng, không tin chữ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["text", "giọng"],
  },
  {
    chapter: "Chương 169: 'Anh có nhớ em không?' - Attachment Check",
    signs: "Hỏi vu vơ",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời ngọt ngào",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhận", "tình"],
  },
  {
    chapter: "Chương 170: 'Em không giận' nhưng im lặng - Silent Treatment",
    signs: "Nói không giận nhưng không nói",
    analysis: "Đang giận ngầm",
    handling: "Hạ giọng, dỗ ngọt",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cần dỗ"],
    keywords: ["giận", "nhưng", "ngầm"],
  },
  {
    chapter: "Chương 171: 'Anh đi đâu đó?' - Suspicious Inquiry",
    signs: "Hỏi về lịch trình",
    analysis: "Muốn biết cậu đang làm gì",
    handling: "Trả lời trung thực",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lịch", "trình", "muốn", "biết"],
  },
  {
    chapter:
      "Chương 172: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
    signs: "Tâm sự ngắn gọn",
    analysis: "Muốn cậu đoán và dỗ",
    handling: "Đừng đoán mò, hỏi nhẹ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngắn", "muốn", "đoán"],
  },
  {
    chapter: "Chương 173: 'Ừ' ngắn gọn - Low Engagement",
    signs: "Trả lời 1 từ",
    analysis: "Không muốn nói chuyện",
    handling: "Đổi chủ đề hoặc kết thúc",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["muốn", "chuyện"],
  },
  {
    chapter: "Chương 174: 'Anh có thương em không?' - Love Check",
    signs: "Câu hỏi trực tiếp",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời chân thành",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trực", "tiếp", "nhận", "tình"],
  },
  {
    chapter: "Chương 175: 'Em không cần gì đâu' - Hidden Need",
    signs: "Từ chối giúp đỡ",
    analysis: "Muốn cậu tự hiểu và làm",
    handling: "Đừng tin, hãy chủ động",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chối", "giúp", "muốn", "hiểu"],
  },
  {
    chapter: "Chương 176: 'Anh bận thì thôi' - Passive Aggression",
    signs: "Giả vờ thông cảm",
    analysis: "Đang dỗi vì bị bơ",
    handling: "Xin lỗi và bù đắp",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thông"],
  },
  {
    chapter: "Chương 177: 'Em ổn' nhưng giọng khác - Voice Mismatch",
    signs: "Text ok, giọng không ok",
    analysis: "Nói dối cảm xúc",
    handling: "Tin vào giọng, không tin chữ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["text", "giọng"],
  },
  {
    chapter: "Chương 178: 'Anh có nhớ em không?' - Attachment Check",
    signs: "Hỏi vu vơ",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời ngọt ngào",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhận", "tình"],
  },
  {
    chapter: "Chương 179: 'Em không giận' nhưng im lặng - Silent Treatment",
    signs: "Nói không giận nhưng không nói",
    analysis: "Đang giận ngầm",
    handling: "Hạ giọng, dỗ ngọt",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cần dỗ"],
    keywords: ["giận", "nhưng", "ngầm"],
  },
  {
    chapter: "Chương 180: 'Anh đi đâu đó?' - Suspicious Inquiry",
    signs: "Hỏi về lịch trình",
    analysis: "Muốn biết cậu đang làm gì",
    handling: "Trả lời trung thực",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lịch", "trình", "muốn", "biết"],
  },
  {
    chapter:
      "Chương 181: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
    signs: "Tâm sự ngắn gọn",
    analysis: "Muốn cậu đoán và dỗ",
    handling: "Đừng đoán mò, hỏi nhẹ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngắn", "muốn", "đoán"],
  },
  {
    chapter: "Chương 182: 'Ừ' ngắn gọn - Low Engagement",
    signs: "Trả lời 1 từ",
    analysis: "Không muốn nói chuyện",
    handling: "Đổi chủ đề hoặc kết thúc",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["muốn", "chuyện"],
  },
  {
    chapter: "Chương 183: 'Anh có thương em không?' - Love Check",
    signs: "Câu hỏi trực tiếp",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời chân thành",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trực", "tiếp", "nhận", "tình"],
  },
  {
    chapter: "Chương 184: 'Em không cần gì đâu' - Hidden Need",
    signs: "Từ chối giúp đỡ",
    analysis: "Muốn cậu tự hiểu và làm",
    handling: "Đừng tin, hãy chủ động",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chối", "giúp", "muốn", "hiểu"],
  },
  {
    chapter: "Chương 185: 'Anh bận thì thôi' - Passive Aggression",
    signs: "Giả vờ thông cảm",
    analysis: "Đang dỗi vì bị bơ",
    handling: "Xin lỗi và bù đắp",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thông"],
  },
  {
    chapter: "Chương 186: 'Em ổn' nhưng giọng khác - Voice Mismatch",
    signs: "Text ok, giọng không ok",
    analysis: "Nói dối cảm xúc",
    handling: "Tin vào giọng, không tin chữ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["text", "giọng"],
  },
  {
    chapter: "Chương 187: 'Anh có nhớ em không?' - Attachment Check",
    signs: "Hỏi vu vơ",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời ngọt ngào",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhận", "tình"],
  },
  {
    chapter: "Chương 188: 'Em không giận' nhưng im lặng - Silent Treatment",
    signs: "Nói không giận nhưng không nói",
    analysis: "Đang giận ngầm",
    handling: "Hạ giọng, dỗ ngọt",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cần dỗ"],
    keywords: ["giận", "nhưng", "ngầm"],
  },
  {
    chapter: "Chương 189: 'Anh đi đâu đó?' - Suspicious Inquiry",
    signs: "Hỏi về lịch trình",
    analysis: "Muốn biết cậu đang làm gì",
    handling: "Trả lời trung thực",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lịch", "trình", "muốn", "biết"],
  },
  {
    chapter:
      "Chương 190: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
    signs: "Tâm sự ngắn gọn",
    analysis: "Muốn cậu đoán và dỗ",
    handling: "Đừng đoán mò, hỏi nhẹ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngắn", "muốn", "đoán"],
  },
  {
    chapter: "Chương 191: 'Ừ' ngắn gọn - Low Engagement",
    signs: "Trả lời 1 từ",
    analysis: "Không muốn nói chuyện",
    handling: "Đổi chủ đề hoặc kết thúc",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["muốn", "chuyện"],
  },
  {
    chapter: "Chương 192: 'Anh có thương em không?' - Love Check",
    signs: "Câu hỏi trực tiếp",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời chân thành",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trực", "tiếp", "nhận", "tình"],
  },
  {
    chapter: "Chương 193: 'Em không cần gì đâu' - Hidden Need",
    signs: "Từ chối giúp đỡ",
    analysis: "Muốn cậu tự hiểu và làm",
    handling: "Đừng tin, hãy chủ động",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chối", "giúp", "muốn", "hiểu"],
  },
  {
    chapter: "Chương 194: 'Anh bận thì thôi' - Passive Aggression",
    signs: "Giả vờ thông cảm",
    analysis: "Đang dỗi vì bị bơ",
    handling: "Xin lỗi và bù đắp",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thông"],
  },
  {
    chapter: "Chương 195: 'Em ổn' nhưng giọng khác - Voice Mismatch",
    signs: "Text ok, giọng không ok",
    analysis: "Nói dối cảm xúc",
    handling: "Tin vào giọng, không tin chữ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["text", "giọng"],
  },
  {
    chapter: "Chương 196: 'Anh có nhớ em không?' - Attachment Check",
    signs: "Hỏi vu vơ",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời ngọt ngào",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhận", "tình"],
  },
  {
    chapter: "Chương 197: 'Em không giận' nhưng im lặng - Silent Treatment",
    signs: "Nói không giận nhưng không nói",
    analysis: "Đang giận ngầm",
    handling: "Hạ giọng, dỗ ngọt",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cần dỗ"],
    keywords: ["giận", "nhưng", "ngầm"],
  },
  {
    chapter: "Chương 198: 'Anh đi đâu đó?' - Suspicious Inquiry",
    signs: "Hỏi về lịch trình",
    analysis: "Muốn biết cậu đang làm gì",
    handling: "Trả lời trung thực",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lịch", "trình", "muốn", "biết"],
  },
  {
    chapter:
      "Chương 199: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
    signs: "Tâm sự ngắn gọn",
    analysis: "Muốn cậu đoán và dỗ",
    handling: "Đừng đoán mò, hỏi nhẹ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngắn", "muốn", "đoán"],
  },
  {
    chapter: "Chương 200: 'Ừ' ngắn gọn - Low Engagement",
    signs: "Trả lời 1 từ",
    analysis: "Không muốn nói chuyện",
    handling: "Đổi chủ đề hoặc kết thúc",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["muốn", "chuyện"],
  },
  {
    chapter: "Chương 201: 'Anh có thương em không?' - Love Check",
    signs: "Câu hỏi trực tiếp",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời chân thành",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trực", "tiếp", "nhận", "tình"],
  },
  {
    chapter: "Chương 202: 'Em không cần gì đâu' - Hidden Need",
    signs: "Từ chối giúp đỡ",
    analysis: "Muốn cậu tự hiểu và làm",
    handling: "Đừng tin, hãy chủ động",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chối", "giúp", "muốn", "hiểu"],
  },
  {
    chapter: "Chương 203: 'Anh bận thì thôi' - Passive Aggression",
    signs: "Giả vờ thông cảm",
    analysis: "Đang dỗi vì bị bơ",
    handling: "Xin lỗi và bù đắp",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thông"],
  },
  {
    chapter: "Chương 204: 'Em ổn' nhưng giọng khác - Voice Mismatch",
    signs: "Text ok, giọng không ok",
    analysis: "Nói dối cảm xúc",
    handling: "Tin vào giọng, không tin chữ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["text", "giọng"],
  },
  {
    chapter: "Chương 205: 'Anh có nhớ em không?' - Attachment Check",
    signs: "Hỏi vu vơ",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời ngọt ngào",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhận", "tình"],
  },
  {
    chapter: "Chương 206: 'Em không giận' nhưng im lặng - Silent Treatment",
    signs: "Nói không giận nhưng không nói",
    analysis: "Đang giận ngầm",
    handling: "Hạ giọng, dỗ ngọt",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cần dỗ"],
    keywords: ["giận", "nhưng", "ngầm"],
  },
  {
    chapter: "Chương 207: 'Anh đi đâu đó?' - Suspicious Inquiry",
    signs: "Hỏi về lịch trình",
    analysis: "Muốn biết cậu đang làm gì",
    handling: "Trả lời trung thực",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lịch", "trình", "muốn", "biết"],
  },
  {
    chapter:
      "Chương 208: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
    signs: "Tâm sự ngắn gọn",
    analysis: "Muốn cậu đoán và dỗ",
    handling: "Đừng đoán mò, hỏi nhẹ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngắn", "muốn", "đoán"],
  },
  {
    chapter: "Chương 209: 'Ừ' ngắn gọn - Low Engagement",
    signs: "Trả lời 1 từ",
    analysis: "Không muốn nói chuyện",
    handling: "Đổi chủ đề hoặc kết thúc",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["muốn", "chuyện"],
  },
  {
    chapter: "Chương 210: 'Anh có thương em không?' - Love Check",
    signs: "Câu hỏi trực tiếp",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời chân thành",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trực", "tiếp", "nhận", "tình"],
  },
  {
    chapter: "Chương 211: 'Em không cần gì đâu' - Hidden Need",
    signs: "Từ chối giúp đỡ",
    analysis: "Muốn cậu tự hiểu và làm",
    handling: "Đừng tin, hãy chủ động",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chối", "giúp", "muốn", "hiểu"],
  },
  {
    chapter: "Chương 212: 'Anh bận thì thôi' - Passive Aggression",
    signs: "Giả vờ thông cảm",
    analysis: "Đang dỗi vì bị bơ",
    handling: "Xin lỗi và bù đắp",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thông"],
  },
  {
    chapter: "Chương 213: 'Em ổn' nhưng giọng khác - Voice Mismatch",
    signs: "Text ok, giọng không ok",
    analysis: "Nói dối cảm xúc",
    handling: "Tin vào giọng, không tin chữ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["text", "giọng"],
  },
  {
    chapter: "Chương 214: 'Anh có nhớ em không?' - Attachment Check",
    signs: "Hỏi vu vơ",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời ngọt ngào",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhận", "tình"],
  },
  {
    chapter: "Chương 215: 'Em không giận' nhưng im lặng - Silent Treatment",
    signs: "Nói không giận nhưng không nói",
    analysis: "Đang giận ngầm",
    handling: "Hạ giọng, dỗ ngọt",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cần dỗ"],
    keywords: ["giận", "nhưng", "ngầm"],
  },
  {
    chapter: "Chương 216: 'Anh đi đâu đó?' - Suspicious Inquiry",
    signs: "Hỏi về lịch trình",
    analysis: "Muốn biết cậu đang làm gì",
    handling: "Trả lời trung thực",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lịch", "trình", "muốn", "biết"],
  },
  {
    chapter:
      "Chương 217: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
    signs: "Tâm sự ngắn gọn",
    analysis: "Muốn cậu đoán và dỗ",
    handling: "Đừng đoán mò, hỏi nhẹ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngắn", "muốn", "đoán"],
  },
  {
    chapter: "Chương 218: 'Ừ' ngắn gọn - Low Engagement",
    signs: "Trả lời 1 từ",
    analysis: "Không muốn nói chuyện",
    handling: "Đổi chủ đề hoặc kết thúc",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["muốn", "chuyện"],
  },
  {
    chapter: "Chương 219: 'Anh có thương em không?' - Love Check",
    signs: "Câu hỏi trực tiếp",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời chân thành",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trực", "tiếp", "nhận", "tình"],
  },
  {
    chapter: "Chương 220: 'Em không cần gì đâu' - Hidden Need",
    signs: "Từ chối giúp đỡ",
    analysis: "Muốn cậu tự hiểu và làm",
    handling: "Đừng tin, hãy chủ động",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chối", "giúp", "muốn", "hiểu"],
  },
  {
    chapter: "Chương 221: 'Anh bận thì thôi' - Passive Aggression",
    signs: "Giả vờ thông cảm",
    analysis: "Đang dỗi vì bị bơ",
    handling: "Xin lỗi và bù đắp",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thông"],
  },
  {
    chapter: "Chương 222: 'Em ổn' nhưng giọng khác - Voice Mismatch",
    signs: "Text ok, giọng không ok",
    analysis: "Nói dối cảm xúc",
    handling: "Tin vào giọng, không tin chữ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["text", "giọng"],
  },
  {
    chapter: "Chương 223: 'Anh có nhớ em không?' - Attachment Check",
    signs: "Hỏi vu vơ",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời ngọt ngào",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhận", "tình"],
  },
  {
    chapter: "Chương 224: 'Em không giận' nhưng im lặng - Silent Treatment",
    signs: "Nói không giận nhưng không nói",
    analysis: "Đang giận ngầm",
    handling: "Hạ giọng, dỗ ngọt",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cần dỗ"],
    keywords: ["giận", "nhưng", "ngầm"],
  },
  {
    chapter: "Chương 225: 'Anh đi đâu đó?' - Suspicious Inquiry",
    signs: "Hỏi về lịch trình",
    analysis: "Muốn biết cậu đang làm gì",
    handling: "Trả lời trung thực",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lịch", "trình", "muốn", "biết"],
  },
  {
    chapter:
      "Chương 226: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
    signs: "Tâm sự ngắn gọn",
    analysis: "Muốn cậu đoán và dỗ",
    handling: "Đừng đoán mò, hỏi nhẹ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngắn", "muốn", "đoán"],
  },
  {
    chapter: "Chương 227: 'Ừ' ngắn gọn - Low Engagement",
    signs: "Trả lời 1 từ",
    analysis: "Không muốn nói chuyện",
    handling: "Đổi chủ đề hoặc kết thúc",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["muốn", "chuyện"],
  },
  {
    chapter: "Chương 228: 'Anh có thương em không?' - Love Check",
    signs: "Câu hỏi trực tiếp",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời chân thành",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trực", "tiếp", "nhận", "tình"],
  },
  {
    chapter: "Chương 229: 'Em không cần gì đâu' - Hidden Need",
    signs: "Từ chối giúp đỡ",
    analysis: "Muốn cậu tự hiểu và làm",
    handling: "Đừng tin, hãy chủ động",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chối", "giúp", "muốn", "hiểu"],
  },
  {
    chapter: "Chương 230: 'Anh bận thì thôi' - Passive Aggression",
    signs: "Giả vờ thông cảm",
    analysis: "Đang dỗi vì bị bơ",
    handling: "Xin lỗi và bù đắp",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thông"],
  },
  {
    chapter: "Chương 231: 'Em ổn' nhưng giọng khác - Voice Mismatch",
    signs: "Text ok, giọng không ok",
    analysis: "Nói dối cảm xúc",
    handling: "Tin vào giọng, không tin chữ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["text", "giọng"],
  },
  {
    chapter: "Chương 232: 'Anh có nhớ em không?' - Attachment Check",
    signs: "Hỏi vu vơ",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời ngọt ngào",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhận", "tình"],
  },
  {
    chapter: "Chương 233: 'Em không giận' nhưng im lặng - Silent Treatment",
    signs: "Nói không giận nhưng không nói",
    analysis: "Đang giận ngầm",
    handling: "Hạ giọng, dỗ ngọt",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cần dỗ"],
    keywords: ["giận", "nhưng", "ngầm"],
  },
  {
    chapter: "Chương 234: 'Anh đi đâu đó?' - Suspicious Inquiry",
    signs: "Hỏi về lịch trình",
    analysis: "Muốn biết cậu đang làm gì",
    handling: "Trả lời trung thực",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lịch", "trình", "muốn", "biết"],
  },
  {
    chapter:
      "Chương 235: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
    signs: "Tâm sự ngắn gọn",
    analysis: "Muốn cậu đoán và dỗ",
    handling: "Đừng đoán mò, hỏi nhẹ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngắn", "muốn", "đoán"],
  },
  {
    chapter: "Chương 236: 'Ừ' ngắn gọn - Low Engagement",
    signs: "Trả lời 1 từ",
    analysis: "Không muốn nói chuyện",
    handling: "Đổi chủ đề hoặc kết thúc",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["muốn", "chuyện"],
  },
  {
    chapter: "Chương 237: 'Anh có thương em không?' - Love Check",
    signs: "Câu hỏi trực tiếp",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời chân thành",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trực", "tiếp", "nhận", "tình"],
  },
  {
    chapter: "Chương 238: 'Em không cần gì đâu' - Hidden Need",
    signs: "Từ chối giúp đỡ",
    analysis: "Muốn cậu tự hiểu và làm",
    handling: "Đừng tin, hãy chủ động",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chối", "giúp", "muốn", "hiểu"],
  },
  {
    chapter: "Chương 239: 'Anh bận thì thôi' - Passive Aggression",
    signs: "Giả vờ thông cảm",
    analysis: "Đang dỗi vì bị bơ",
    handling: "Xin lỗi và bù đắp",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thông"],
  },
  {
    chapter: "Chương 240: 'Em ổn' nhưng giọng khác - Voice Mismatch",
    signs: "Text ok, giọng không ok",
    analysis: "Nói dối cảm xúc",
    handling: "Tin vào giọng, không tin chữ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["text", "giọng"],
  },
  {
    chapter: "Chương 241: 'Anh có nhớ em không?' - Attachment Check",
    signs: "Hỏi vu vơ",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời ngọt ngào",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhận", "tình"],
  },
  {
    chapter: "Chương 242: 'Em không giận' nhưng im lặng - Silent Treatment",
    signs: "Nói không giận nhưng không nói",
    analysis: "Đang giận ngầm",
    handling: "Hạ giọng, dỗ ngọt",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cần dỗ"],
    keywords: ["giận", "nhưng", "ngầm"],
  },
  {
    chapter: "Chương 243: 'Anh đi đâu đó?' - Suspicious Inquiry",
    signs: "Hỏi về lịch trình",
    analysis: "Muốn biết cậu đang làm gì",
    handling: "Trả lời trung thực",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lịch", "trình", "muốn", "biết"],
  },
  {
    chapter:
      "Chương 244: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
    signs: "Tâm sự ngắn gọn",
    analysis: "Muốn cậu đoán và dỗ",
    handling: "Đừng đoán mò, hỏi nhẹ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngắn", "muốn", "đoán"],
  },
  {
    chapter: "Chương 245: 'Ừ' ngắn gọn - Low Engagement",
    signs: "Trả lời 1 từ",
    analysis: "Không muốn nói chuyện",
    handling: "Đổi chủ đề hoặc kết thúc",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["muốn", "chuyện"],
  },
  {
    chapter: "Chương 246: 'Anh có thương em không?' - Love Check",
    signs: "Câu hỏi trực tiếp",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời chân thành",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trực", "tiếp", "nhận", "tình"],
  },
  {
    chapter: "Chương 247: 'Em không cần gì đâu' - Hidden Need",
    signs: "Từ chối giúp đỡ",
    analysis: "Muốn cậu tự hiểu và làm",
    handling: "Đừng tin, hãy chủ động",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chối", "giúp", "muốn", "hiểu"],
  },
  {
    chapter: "Chương 248: 'Anh bận thì thôi' - Passive Aggression",
    signs: "Giả vờ thông cảm",
    analysis: "Đang dỗi vì bị bơ",
    handling: "Xin lỗi và bù đắp",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thông"],
  },
  {
    chapter: "Chương 249: 'Em ổn' nhưng giọng khác - Voice Mismatch",
    signs: "Text ok, giọng không ok",
    analysis: "Nói dối cảm xúc",
    handling: "Tin vào giọng, không tin chữ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["text", "giọng"],
  },
  {
    chapter: "Chương 250: 'Anh có nhớ em không?' - Attachment Check",
    signs: "Hỏi vu vơ",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời ngọt ngào",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhận", "tình"],
  },
  {
    chapter: "Chương 251: 'Em không giận' nhưng im lặng - Silent Treatment",
    signs: "Nói không giận nhưng không nói",
    analysis: "Đang giận ngầm",
    handling: "Hạ giọng, dỗ ngọt",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["cần dỗ"],
    keywords: ["giận", "nhưng", "ngầm"],
  },
  {
    chapter: "Chương 252: 'Anh đi đâu đó?' - Suspicious Inquiry",
    signs: "Hỏi về lịch trình",
    analysis: "Muốn biết cậu đang làm gì",
    handling: "Trả lời trung thực",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["lịch", "trình", "muốn", "biết"],
  },
  {
    chapter:
      "Chương 253: 'Em buồn' nhưng không nói lý do - Emotional Blackmail",
    signs: "Tâm sự ngắn gọn",
    analysis: "Muốn cậu đoán và dỗ",
    handling: "Đừng đoán mò, hỏi nhẹ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["ngắn", "muốn", "đoán"],
  },
  {
    chapter: "Chương 254: 'Ừ' ngắn gọn - Low Engagement",
    signs: "Trả lời 1 từ",
    analysis: "Không muốn nói chuyện",
    handling: "Đổi chủ đề hoặc kết thúc",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["muốn", "chuyện"],
  },
  {
    chapter: "Chương 255: 'Anh có thương em không?' - Love Check",
    signs: "Câu hỏi trực tiếp",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời chân thành",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["trực", "tiếp", "nhận", "tình"],
  },
  {
    chapter: "Chương 256: 'Em không cần gì đâu' - Hidden Need",
    signs: "Từ chối giúp đỡ",
    analysis: "Muốn cậu tự hiểu và làm",
    handling: "Đừng tin, hãy chủ động",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["chối", "giúp", "muốn", "hiểu"],
  },
  {
    chapter: "Chương 257: 'Anh bận thì thôi' - Passive Aggression",
    signs: "Giả vờ thông cảm",
    analysis: "Đang dỗi vì bị bơ",
    handling: "Xin lỗi và bù đắp",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["thông"],
  },
  {
    chapter: "Chương 258: 'Em ổn' nhưng giọng khác - Voice Mismatch",
    signs: "Text ok, giọng không ok",
    analysis: "Nói dối cảm xúc",
    handling: "Tin vào giọng, không tin chữ",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["text", "giọng"],
  },
  {
    chapter: "Chương 259: 'Anh có nhớ em không?' - Attachment Check",
    signs: "Hỏi vu vơ",
    analysis: "Cần xác nhận tình cảm",
    handling: "Trả lời ngọt ngào",
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
    tags: ["protocol"],
    keywords: ["nhận", "tình"],
  },
  {
    chapter: "Chương 260: 'Haha' nhưng không có emoji - Dry Laugh",
    signs: "haha",
    analysis: "Cười xã giao, không thật sự vui",
    handling: "Đổi chủ đề ngay",
    tags: ["protocol"],
    level: "low",
    keywords: ["haha", "cười", "giao", "thật"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 261: Gửi ảnh cũ - Memory Recall",
    signs: "Ảnh hồi xưa",
    analysis: "Đang nhớ lại kỷ niệm",
    handling: "Hùa theo cảm xúc",
    tags: ["protocol"],
    level: "medium",
    keywords: ["niệm"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 262: Hỏi lịch trình - Tracking",
    signs: "Hôm nay anh làm gì",
    analysis: "Quan tâm + kiểm tra",
    handling: "Trả lời rõ ràng",
    tags: ["protocol"],
    level: "low",
    keywords: ["quan", "kiểm"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 263: Thả react chậm - Delayed Emotion",
    signs: "Tim sau vài phút",
    analysis: "Không phải ưu tiên cao",
    handling: "Tăng sức hút lại",
    tags: ["protocol"],
    level: "low",
    keywords: ["phút", "phải", "tiên"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 264: Nhắn nhiều dấu chấm... - Hesitation",
    signs: "...",
    analysis: "Đang do dự hoặc buồn",
    handling: "Hỏi nhẹ nhàng",
    tags: ["protocol"],
    level: "medium",
    keywords: ["hoặc", "buồn"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 265: Rep kiểu hỏi lại - Defensive Mode",
    signs: "Ủa sao hỏi vậy",
    analysis: "Đang nghi ngờ",
    handling: "Giải thích rõ",
    tags: ["protocol"],
    level: "medium",
    keywords: ["nghi"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 266: Gửi ảnh không mặt - Low Confidence",
    signs: "Ảnh che mặt",
    analysis: "Thiếu tự tin",
    handling: "Khen nhẹ nhàng",
    tags: ["protocol"],
    level: "low",
    keywords: ["thiếu"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 267: Nói chuyện đứt quãng - Multitasking",
    signs: "Rep ngắt quãng",
    analysis: "Đang bận",
    handling: "Không spam",
    tags: ["protocol"],
    level: "low",
    keywords: ["ngắt", "quãng"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 268: Gửi voice cười - High Mood",
    signs: "voice cười",
    analysis: "Mood cao",
    handling: "Giữ vibe",
    tags: ["protocol"],
    level: "low",
    keywords: ["voice", "cười", "mood"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 269: Nhắn 'đi ngủ đây' nhưng vẫn online - Fake Exit",
    signs: "nói ngủ nhưng online",
    analysis: "Test hoặc chưa muốn ngủ",
    handling: "Không bắt lỗi",
    tags: ["protocol"],
    level: "medium",
    keywords: ["nhưng", "online", "test", "hoặc", "chưa"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 270: Không hỏi lại - No Engagement",
    signs: "chỉ trả lời, không hỏi",
    analysis: "Thiếu hứng thú",
    handling: "Tạo câu hỏi mở",
    tags: ["protocol"],
    level: "medium",
    keywords: ["thiếu", "hứng"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 271: Gửi sticker buồn - Sad Mode",
    signs: "sticker buồn",
    analysis: "Mood thấp",
    handling: "Dỗ",
    tags: ["protocol"],
    level: "medium",
    keywords: ["sticker", "buồn", "mood", "thấp"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 272: Tag bài deep - Overthinking",
    signs: "tag quote buồn",
    analysis: "Đang suy nghĩ nhiều",
    handling: "Hỏi thăm",
    tags: ["protocol"],
    level: "high",
    keywords: ["quote", "buồn", "nghĩ", "nhiều"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 273: Nhắn 'chắc vậy' - Uncertain",
    signs: "chắc vậy",
    analysis: "Không chắc chắn",
    handling: "Củng cố lại",
    tags: ["protocol"],
    level: "low",
    keywords: ["chắc", "chắn"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 274: Nhắn 'tùy' nhiều lần - Passive Resistance",
    signs: "tùy tùy",
    analysis: "Không hài lòng",
    handling: "Đổi approach",
    tags: ["protocol"],
    level: "high",
    keywords: ["lòng"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 275: Gửi ảnh chó mèo - Soft Mood",
    signs: "pet",
    analysis: "Muốn vibe dễ thương",
    handling: "Hùa theo",
    tags: ["protocol"],
    level: "low",
    keywords: ["muốn", "vibe", "thương"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 276: Nhắn 'ừm' kéo dài - Mild Annoy",
    signs: "ừmmmm",
    analysis: "Hơi khó chịu",
    handling: "Đổi cách nói",
    tags: ["protocol"],
    level: "medium",
    keywords: ["ừmmmm", "chịu"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 277: Seen lâu mới rep - Priority Issue",
    signs: "seen lâu",
    analysis: "Không ưu tiên",
    handling: "Tăng giá trị bản thân",
    tags: ["protocol"],
    level: "medium",
    keywords: ["seen", "tiên"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 278: Gửi ảnh trời mưa - Mood Sharing",
    signs: "ảnh mưa",
    analysis: "Tâm trạng",
    handling: "Hỏi cảm xúc",
    tags: ["protocol"],
    level: "low",
    keywords: ["trạng"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 279: Hỏi 'đang ở đâu' - Location Check",
    signs: "ở đâu",
    analysis: "Quan tâm + kiểm tra",
    handling: "Trả lời rõ",
    tags: ["protocol"],
    level: "low",
    keywords: ["quan", "kiểm"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 280: 'Không biết nữa' - Avoidance Mode",
    signs: "không biết",
    analysis: "Tránh trả lời hoặc chưa muốn nói",
    handling: "Không ép, chuyển hướng nhẹ",
    tags: ["protocol"],
    level: "medium",
    keywords: ["biết", "tránh", "hoặc", "chưa", "muốn"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 281: Rep 'okie' - Neutral Response",
    signs: "okie",
    analysis: "Trung lập, không cảm xúc mạnh",
    handling: "Thêm gia vị vào câu chuyện",
    tags: ["protocol"],
    level: "low",
    keywords: ["okie", "trung", "mạnh"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 282: Gửi icon 😐 - Blank Emotion",
    signs: "😐",
    analysis: "Không hài lòng nhẹ",
    handling: "Check lại lời nói trước đó",
    tags: ["protocol"],
    level: "medium",
    keywords: ["lòng"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 283: Hỏi lại nhiều lần - Doubt Loop",
    signs: "hỏi lại",
    analysis: "Thiếu tin tưởng",
    handling: "Trả lời nhất quán",
    tags: ["protocol"],
    level: "high",
    keywords: ["thiếu", "tưởng"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 284: Nhắn 'kệ đi' - Defensive Wall",
    signs: "kệ",
    analysis: "Đang tự bảo vệ",
    handling: "Đừng bỏ qua, phải dỗ",
    tags: ["cần dỗ"],
    level: "high",
    keywords: [],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 285: Gửi ảnh bản thân liên tục - Self-focus",
    signs: "ảnh nhiều",
    analysis: "Muốn được chú ý",
    handling: "Khen + tương tác",
    tags: ["protocol"],
    level: "low",
    keywords: ["nhiều", "muốn"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 286: Rep kiểu 'ờ' - Cold Response",
    signs: "ờ",
    analysis: "Cảm xúc thấp",
    handling: "Đổi vibe ngay",
    tags: ["protocol"],
    level: "high",
    keywords: ["thấp"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 287: Gửi gif - Expressive Mode",
    signs: "gif",
    analysis: "Muốn truyền cảm xúc nhanh",
    handling: "Rep cùng vibe",
    tags: ["protocol"],
    level: "low",
    keywords: ["muốn", "truyền", "nhanh"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 288: Nhắn 'tự nhiên nhớ' - Sudden Emotion",
    signs: "nhớ",
    analysis: "Cảm xúc thật",
    handling: "Đáp lại mạnh hơn",
    tags: ["protocol"],
    level: "low",
    keywords: ["thật"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 289: Rep không dấu - Casual Mode",
    signs: "ko dau",
    analysis: "Thoải mái hoặc lười",
    handling: "Không quá nghiêm trọng",
    tags: ["protocol"],
    level: "low",
    keywords: ["thoải", "hoặc", "lười"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 290: Nhắn 'thôi' - Shutdown",
    signs: "thôi",
    analysis: "Muốn kết thúc",
    handling: "Đừng để kết thúc thật",
    tags: ["protocol"],
    level: "high",
    keywords: ["thôi", "muốn", "thúc"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 291: Gửi ảnh đồ uống - Chill Mode",
    signs: "trà sữa",
    analysis: "Mood ổn",
    handling: "Hùa theo",
    tags: ["protocol"],
    level: "low",
    keywords: ["mood"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 292: Nhắn 'cũng được' - Low Preference",
    signs: "cũng được",
    analysis: "Không thích lắm",
    handling: "Đề xuất khác",
    tags: ["protocol"],
    level: "medium",
    keywords: ["cũng", "thích"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 293: Rep cực dài - Emotional Dump",
    signs: "text dài",
    analysis: "Xả cảm xúc",
    handling: "Đọc kỹ + phản hồi chi tiết",
    tags: ["protocol"],
    level: "high",
    keywords: ["text"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 294: Gửi meme tình yêu - Soft Hint",
    signs: "meme tình yêu",
    analysis: "Thả hint",
    handling: "Bắt sóng ngay",
    tags: ["protocol"],
    level: "medium",
    keywords: ["meme", "tình", "hint"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 295: Nhắn 'đi đâu cũng được' - Hidden Preference",
    signs: "đâu cũng được",
    analysis: "Có ý nhưng không nói",
    handling: "Đoán dựa lịch sử",
    tags: ["protocol"],
    level: "high",
    keywords: ["cũng", "nhưng"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 296: Gửi ảnh outfit - Approval Request",
    signs: "đồ mặc",
    analysis: "Cần feedback",
    handling: "Khen cụ thể",
    tags: ["protocol"],
    level: "medium",
    keywords: ["feedback"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 297: Nhắn 'tự nhiên buồn' - Mood Drop",
    signs: "buồn",
    analysis: "Cảm xúc tụt",
    handling: "Dỗ",
    tags: ["protocol"],
    level: "high",
    keywords: ["buồn"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 298: Gửi ảnh bạn bè - Social Share",
    signs: "bạn bè",
    analysis: "Chia sẻ môi trường sống",
    handling: "Hỏi thêm",
    tags: ["protocol"],
    level: "low",
    keywords: ["chia", "trường", "sống"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 299: Nhắn 'đang bận' - Busy Mode",
    signs: "bận",
    analysis: "Không rảnh",
    handling: "Respect",
    tags: ["protocol"],
    level: "low",
    keywords: ["rảnh"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 300: Nhắn 'đừng lo' - Reassurance",
    signs: "đừng lo",
    analysis: "Trấn an",
    handling: "Tin nhưng vẫn quan tâm",
    tags: ["protocol"],
    level: "low",
    keywords: ["đừng", "trấn"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 301: Gửi ảnh bài tập - Stress Sharing",
    signs: "bài tập",
    analysis: "Áp lực",
    handling: "Động viên",
    tags: ["protocol"],
    level: "medium",
    keywords: [],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 302: Nhắn 'phiền ghê' - Annoyed",
    signs: "phiền",
    analysis: "Khó chịu",
    handling: "Giảm tương tác",
    tags: ["protocol"],
    level: "high",
    keywords: ["phiền", "chịu"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 303: Gửi icon 😴 - Sleepy",
    signs: "😴",
    analysis: "Buồn ngủ",
    handling: "Kết thúc nhẹ",
    tags: ["protocol"],
    level: "low",
    keywords: ["buồn"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 304: Nhắn 'hehe' - Playful",
    signs: "hehe",
    analysis: "Đang vui nhẹ",
    handling: "Giữ vibe",
    tags: ["protocol"],
    level: "low",
    keywords: ["hehe"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 305: Gửi ảnh selfie nhiều góc - High Investment",
    signs: "selfie nhiều",
    analysis: "Đầu tư cảm xúc",
    handling: "Khen kỹ",
    tags: ["protocol"],
    level: "medium",
    keywords: ["selfie", "nhiều"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 306: Nhắn 'không sao đâu' - Hidden Hurt",
    signs: "không sao",
    analysis: "Có sao thật",
    handling: "Đừng tin literal",
    tags: ["protocol"],
    level: "high",
    keywords: ["thật"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 307: Gửi ảnh màn hình chat - Transparency",
    signs: "screenshot",
    analysis: "Muốn chia sẻ",
    handling: "Phản hồi",
    tags: ["protocol"],
    level: "low",
    keywords: ["screenshot", "muốn", "chia"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 308: Nhắn 'hết chuyện rồi' - Conversation End",
    signs: "hết chuyện",
    analysis: "Cạn topic",
    handling: "Lead topic mới",
    tags: ["protocol"],
    level: "medium",
    keywords: ["chuyện", "topic"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 309: Gửi nhạc buồn - Sad Signal",
    signs: "nhạc buồn",
    analysis: "Mood thấp",
    handling: "Quan tâm ngay",
    tags: ["protocol"],
    level: "high",
    keywords: ["nhạc", "buồn", "mood", "thấp"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 310: Nhắn 'ngại quá' - Shy Mode",
    signs: "ngại",
    analysis: "Ngại thật",
    handling: "Trấn an",
    tags: ["protocol"],
    level: "low",
    keywords: ["ngại", "thật"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 311: Gửi ảnh trời đẹp - Positive Share",
    signs: "trời đẹp",
    analysis: "Mood tốt",
    handling: "Hưởng ứng",
    tags: ["protocol"],
    level: "low",
    keywords: ["trời", "mood"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 312: Nhắn 'tự nhiên thấy lạ' - Suspicion",
    signs: "lạ",
    analysis: "Đang nghi ngờ",
    handling: "Giải thích",
    tags: ["protocol"],
    level: "high",
    keywords: ["nghi"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 313: Gửi ảnh đồ mới - Show Off",
    signs: "mua đồ",
    analysis: "Muốn khoe",
    handling: "Khen",
    tags: ["protocol"],
    level: "low",
    keywords: ["muốn", "khoe"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 314: Nhắn 'được rồi' - Acceptance",
    signs: "được rồi",
    analysis: "Chấp nhận",
    handling: "Confirm lại",
    tags: ["protocol"],
    level: "low",
    keywords: ["chấp", "nhận"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 315: Gửi ảnh đồ ăn tự nấu - Effort",
    signs: "tự nấu",
    analysis: "Đầu tư",
    handling: "Khen mạnh",
    tags: ["protocol"],
    level: "medium",
    keywords: [],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 316: Nhắn 'đừng nói nữa' - Stop Command",
    signs: "đừng nói",
    analysis: "Quá tải",
    handling: "Dừng ngay",
    tags: ["protocol"],
    level: "critical",
    keywords: ["đừng"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 317: Gửi ảnh buồn - Emotional Signal",
    signs: "ảnh buồn",
    analysis: "Mood thấp",
    handling: "Dỗ",
    tags: ["protocol"],
    level: "high",
    keywords: ["buồn", "mood", "thấp"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 318: Nhắn 'mệt' - Exhaustion",
    signs: "mệt",
    analysis: "Hết năng lượng",
    handling: "Chăm sóc",
    tags: ["protocol"],
    level: "high",
    keywords: ["năng", "lượng"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 319: Nhắn 'ở đây thôi' - Stay Mode",
    signs: "ở đây",
    analysis: "Muốn ở cạnh",
    handling: "Ở lại",
    tags: ["protocol"],
    level: "medium",
    keywords: ["muốn", "cạnh"],
    reply: [
      "Có, em nói đúng lắm ạ.",
      "Anh hiểu rồi, anh sẽ cố gắng tốt hơn.",
      "Em yên tâm, anh sẽ giải quyết ngay.",
    ],
  },
  {
    chapter: "Chương 320: Seen nhưng rep chậm - Latency Issue",
    signs:
      "Seen xong 5–10 phút mới trả lời, hoặc đang nói chuyện tự nhiên mất hút",
    analysis:
      "Không phải lúc nào cũng giận. Có thể đang bận thật, hoặc test xem cậu có bị phụ thuộc không.",
    handling: "Đừng spam. Giữ giá nhẹ. Nhưng nếu kéo dài → phải check lại.",
    reply: [
      "Ủa seen rồi mà trốn đâu mất tiêu rồi 😏",
      "Bận hả, xong nhớ rep anh nhaaa",
      "Mất tích kiểu này là anh phải đi tìm đó nha",
    ],
    tags: ["protocol"],
    keywords: ["seen", "xong", "5–10", "phút", "hoặc"],
  },
  {
    chapter: "Chương 321: Tự nhiên kể chuyện tiêu cực - Emotional Dump",
    signs: "Than mệt, stress, ghét người này người kia",
    analysis: "Không cần giải pháp. Cần người nghe.",
    handling: "Đừng đưa lời khuyên logic quá nhiều.",
    reply: [
      "Ừ kể anh nghe hết đi, anh nghe nè",
      "Nghe mà thấy tức giùm luôn á 😤",
      "Hôm nay bé của anh bị hành quá rồi",
    ],
    tags: ["bất thường"],
    keywords: ["than", "stress", "ghét", "người", "giải"],
  },
  {
    chapter: "Chương 322: Đăng story buồn - Attention Signal",
    signs: "Story nhạc buồn, cap deep",
    analysis: "Không phải cho tất cả mọi người, mà là cho 'người cần thấy'.",
    handling: "Phải vào hỏi riêng, không comment công khai.",
    reply: [
      "Nãy anh thấy story, có chuyện gì không đó",
      "Sao nay buồn vậy, kể anh nghe coi",
      "Ai làm bé buồn rồi, nói anh xử 😏",
    ],
    tags: ["protocol"],
    keywords: ["story", "nhạc", "buồn", "deep", "phải"],
  },
  {
    chapter: "Chương 323: Trả lời cụt ngủn - Low Energy Mode",
    signs: "Ừ, ok, k, tùy",
    analysis: "Đang tụt mood hoặc chán",
    handling: "Đổi vibe, đừng hỏi dồn",
    reply: [
      "Thôi không hỏi nữa, qua đây anh chọc cho cười nè 😌",
      "Mood tụt hả, anh kéo mood lên cho nè",
      "Đang buồn đúng không, anh đoán trúng rồi",
    ],
    tags: ["protocol"],
    keywords: ["mood", "hoặc", "chán"],
  },
  {
    chapter: "Chương 324: Hỏi linh tinh - Random Query",
    signs: "Anh đang làm gì, ăn chưa, ngủ chưa",
    analysis: "Không phải hỏi thông tin, mà là nhớ",
    handling: "Đừng trả lời khô",
    reply: [
      "Đang nhớ em nè chứ làm gì 😏",
      "Chưa ăn, đợi em chở đi ăn chung nè",
      "Ngủ sao được khi chưa nói chuyện với em",
    ],
    tags: ["protocol"],
    keywords: ["chưa", "phải", "thông"],
  },
  {
    chapter: "Chương 325: Thả icon 🥺 - Soft Attack",
    signs: "🥺🥺🥺",
    analysis: "Xin xỏ hoặc làm nũng",
    handling: "Đừng từ chối thẳng",
    reply: [
      "Rồi rồi, nhìn cái icon là anh mềm liền rồi đó",
      "Định xin gì nói lẹ đi 😏",
      "🥺 cái là anh chịu thua luôn rồi",
    ],
    tags: ["protocol"],
    keywords: ["🥺🥺🥺", "hoặc", "nũng"],
  },
  {
    chapter: "Chương 326: So sánh nhẹ - Micro Jealousy",
    signs: "Người ta được chở đi chơi, người ta được tặng quà",
    analysis: "Muốn được quan tâm hơn",
    handling: "Đừng phòng thủ",
    reply: [
      "Ừ để anh làm cho em hơn người ta luôn 😌",
      "Người ta sao bằng em được",
      "Để anh nâng cấp bản em liền",
    ],
    tags: ["protocol"],
    keywords: ["người", "chơi", "tặng", "muốn", "quan"],
  },
  {
    chapter: "Chương 327: Im lặng khi cãi nhau - Passive Defense",
    signs: "Không rep, không nói",
    analysis: "Đang tổn thương chứ không phải không quan tâm",
    handling: "Phải chủ động",
    reply: [
      "Anh biết em đang buồn, đừng im vậy mà",
      "Nói anh nghe đi, anh sửa",
      "Đừng tắt tiếng với anh nha",
    ],
    tags: ["cơn bão yên tĩnh"],
    keywords: ["thương", "phải", "quan"],
  },
  {
    chapter: "Chương 328: Nhắn ban đêm - Late Night Vulnerability",
    signs: "Khuya mới nói chuyện sâu",
    analysis: "Đây là lúc thật nhất",
    handling: "Phải ấm áp, không troll",
    reply: [
      "Đêm dễ nghĩ nhiều lắm, anh ở đây mà",
      "Ngủ đi, anh canh giấc cho 😌",
      "Có anh rồi không cần lo gì đâu",
    ],
    tags: ["protocol"],
    keywords: ["khuya", "chuyện", "thật", "nhất"],
  },
  {
    chapter: "Chương 329: Tự nhiên ngọt bất thường - Pre-Request State",
    signs: "Anh ơi, anh iu, chồng ơi…",
    analysis: "Chuẩn bị xin cái gì đó",
    handling: "Nhận ra nhưng vẫn chiều",
    reply: [
      "Ngọt vậy là anh biết có chuyện rồi nha 😏",
      "Rồi nói đi, muốn gì anh nghe",
      "Hôm nay ngoan dữ vậy, định xin gì đây",
    ],
    tags: ["bất thường"],
    keywords: ["chồng", "chuẩn"],
  },
];
