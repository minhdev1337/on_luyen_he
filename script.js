// =================================================================
// 1. KHAI BÁO BIẾN VÀ DỮ LIỆU
// =================================================================

const questions = [
    // ---BẮT ĐẦU ĐỀ SỐ 10---
    // Câu 1 (Giữ nguyên)
    {
        type: "multiple",
        question: "Trong hình dưới đây có bao nhiêu hình bình hành:",
        options: ["6 hình", "8 hình", "9 hình", "10 hình"],
        answer: "10 hình"
    },
    // Câu 2 (Giữ nguyên)
    {
        type: "multiple",
        question: "32m² 25dm² = ? dm²",
        options: ["32025", "320025", "3225", "32250"],
        answer: "3225"
    },
    // Câu 3 (Giữ nguyên)
    {
        type: "multiple",
        question: "Giá trị của biểu thức 5 x 136 x 20 + 20 x 164 x 5 là:",
        options: ["200000", "30000", "13600", "300000"],
        answer: "30000"
    },
    // Câu 4 (Giữ nguyên)
    {
        type: "multiple",
        question: "Rút gọn phân số 63/45 được phân số:",
        options: ["6/5", "4/5", "7/5", "3/5"],
        answer: "7/5"
    },
    // Câu 5 (Chuyển thành Đúng/Sai theo yêu cầu)
    {
        type: "boolean",
        question: "Trong cuộc bình chọn biểu tượng của Việt Nam, hoa sen là loài được bình chọn nhiều nhất. Đúng hay Sai?",
        answer: "true"
    },
    // Câu 6 (Giữ nguyên)
    {
        type: "multiple",
        question: "Trung bình cộng số gạo bán được trong hai ngày là 100 kg. Biết ngày thứ nhất bán ít hơn ngày thứ hai là 24 kg. Tìm số kg gạo bán được trong ngày thứ nhất?",
        options: ["88 kg", "112 kg", "38 kg", "62 kg"],
        answer: "88 kg"
    },
    // Câu 7 (Tự luận -> Trả lời ngắn)
    {
        type: "short",
        question: "Điền số thích hợp: 3 tấn 3 yến = ... kg",
        answer: "3030"
    },
    // Câu 8 (Tự luận -> Trả lời ngắn)
    {
        type: "short",
        question: "Điền số thích hợp: 3 phút 15 giây = ... giây",
        answer: "195"
    },
    // Câu 9 (Tự luận -> Trả lời ngắn)
    {
        type: "short",
        question: "Điền số thích hợp: 2 km² 75 m² = ... m²",
        answer: "2000075"
    },
    // Câu 10 (Chuyển thành Đúng/Sai theo yêu cầu)
    {
        type: "boolean",
        question: "12500 cm² bằng 1 mét vuông và 25 đề-xi-mét-vuông. Đúng hay Sai?",
        answer: "true"
    },
    // Câu 11 (Tự luận -> Trả lời ngắn)
    {
        type: "short",
        question: "Một trại nuôi gà thu hoạch được 345 quả trứng. Sau khi bán lần đầu, số trứng còn lại là 115 quả. Lần thứ hai bán được 4/5 số trứng còn lại đó. Hỏi lần thứ ba bán được bao nhiêu quả trứng?",
        answer: "23"
    },
    // Câu 12 (Tự luận -> Trả lời ngắn)
    {
        type: "short",
        question: "Tìm một số, biết rằng khi thêm chữ số 5 vào bên phải số đó ta được số mới hơn số đã cho là 3407 đơn vị.",
        answer: "378"
    },
    // --- BẮT ĐẦU CÂU HỎI TỪ ĐỀ SỐ 9 ---
    // Câu 13 (Giữ nguyên)
    {
        type: "multiple",
        question: "Rút gọn phân số 63/72 ta được phân số:",
        options: ["7/8", "6/7", "4/5", "3/8"],
        answer: "7/8"
    },
    // Câu 14 (Giữ nguyên)
    {
        type: "multiple",
        question: "Năm 1760 thuộc thế kỉ thứ mấy?",
        options: ["XIV", "XVII", "XVIII", "XIX"],
        answer: "XVIII"
    },
    // Câu 15 (Chuyển thành Đúng/Sai theo yêu cầu)
    {
        type: "boolean",
        question: "4 phút 18 giây bằng 258 giây. Đúng hay Sai?",
        answer: "true"
    },
    // Câu 16 (Giữ nguyên)
    {
        type: "multiple",
        question: "Tổng của bốn số là 660. Trung bình cộng của ba số đầu là 135. Hỏi số thứ tư là bao nhiêu?",
        options: ["120", "255", "235", "250"],
        answer: "255"
    },
    // Câu 17 (Giữ nguyên)
    {
        type: "multiple",
        question: "An làm được 5/12 số bài tập trong ngày đầu, ngày thứ hai làm được bằng một nửa ngày đầu. Hỏi An còn lại bao nhiêu phần bài tập?",
        options: ["7/12", "5/8", "3/8", "1/4"],
        answer: "3/8"
    },
    // Câu 18 (Tự luận -> Trả lời ngắn)
    {
        type: "short",
        question: "Điền số thích hợp: 35m² 9dm² = ... dm²",
        answer: "3509"
    },
    // Câu 19 (Tự luận -> Trả lời ngắn)
    {
        type: "short",
        question: "Điền số thích hợp: 6 tấn 12 kg = ... kg",
        answer: "6012"
    },
    // Câu 20 (Chuyển thành Đúng/Sai theo yêu cầu)
    {
        type: "boolean",
        question: "8026 kg bằng 80 tạ và 26 kg. Đúng hay Sai?",
        answer: "true"
    },
    // Câu 21 (Tự luận -> Trả lời ngắn)
    {
        type: "short",
        question: "Một chiếc máy giặt giá 8.640.000 đồng. Trả trước 1/3, số còn lại trả góp trong 12 tháng. Hỏi mỗi tháng phải trả bao nhiêu tiền? (chỉ điền số)",
        answer: "480000"
    },
    // Câu 22 (Tự luận -> Trả lời ngắn)
    {
        type: "short",
        question: "Một thửa ruộng hình chữ nhật có chu vi 136m. Nếu tăng chiều rộng 8m và giảm chiều dài 8m thì nó trở thành hình vuông. Tính diện tích thửa ruộng đó.",
        answer: "1092"
    },
    // Câu 23 (Tự luận -> Trả lời ngắn)
    {
        type: "short",
        question: "Người ta dùng 234 chữ số để đánh số trang một quyển sách, bắt đầu từ trang 1. Hỏi quyển sách đó dày bao nhiêu trang?",
        answer: "114"
    },
    // --- CÂU HỎI TỪ ĐỀ SỐ 8 ---
{
    type: "multiple",
    question: "Giá trị của chữ số 9 trong số 1 593 207 là:",
    options: ["9000", "90000", "900000", "900"],
    answer: "90000"
},
// Câu 25 (Chuyển thành Đúng/Sai theo yêu cầu)
{
    type: "boolean",
    question: "5m² 20cm² bằng 50020 cm². Đúng hay Sai?",
    answer: "true"
},
{
    type: "multiple",
    question: "3/8 tấn bằng bao nhiêu kg?",
    options: ["380", "1000", "375", "400"],
    answer: "375"
},
{
    type: "multiple",
    question: "Trung bình cộng của các số 43; 166; 151 là:",
    options: ["360", "180", "120", "12"],
    answer: "120"
},
{
    type: "multiple",
    question: "Một cửa hàng buổi sáng bán 1/7 số gạo, buổi chiều bán 2/7 số gạo. Hỏi cửa hàng còn lại bao nhiêu phần số gạo?",
    options: ["4 kg", "4/7", "3/14", "2/7"],
    answer: "4/7"
},
{
    type: "multiple",
    question: "Hà chạy quanh hồ hình chữ nhật dài 250m, rộng 150m. Cứ 100m thì Hà chạy mất 2 phút. Hỏi Hà chạy một vòng hồ hết bao nhiêu phút?",
    options: ["16 phút", "12 phút", "15 phút", "18 phút"],
    answer: "16 phút"
},
// Câu 30 (Chuyển thành Đúng/Sai theo yêu cầu)
{
    type: "boolean",
    question: "Giá trị của x trong biểu thức 'x : 3/2 = 6/15 - 1/3' là 1/10. Đúng hay Sai?",
    answer: "true"
},
{
    type: "short",
    question: "Một cửa hàng có 2800kg gạo. Tuần đầu bán 3/7 số gạo, tuần hai bán 2/5 số gạo CÒN LẠI. Hỏi cuối cùng cửa hàng còn lại bao nhiêu kg gạo?",
    answer: "960"
},
{
    type: "short",
    question: "Năm ngoái, lớp của Hà (32 bạn) đóng 1.120.000 đồng tiền ăn dã ngoại. Năm nay, mỗi suất ăn tăng 5.000 đồng. Hỏi năm nay cả lớp phải đóng bao nhiêu tiền ăn?",
    answer: "1280000"
},
{
    type: "short",
    question: "Tính giá trị biểu thức sau: (240 * 50 + 48 * 100) / (42 * 37 + 21 * 126)",
    answer: "4"
},
// --- CÂU HỎI TỪ ĐỀ SỐ 7 ---
{
    type: "multiple",
    question: "Số 'Một trăm năm mươi triệu không trăm ba mươi sáu nghìn không trăm linh hai' được viết là:",
    options: ["150036020", "105063020", "150036002", "105063002"],
    answer: "150036002"
},
// Câu 35 (Chuyển thành Đúng/Sai theo yêu cầu)
{
    type: "boolean",
    question: "7m² 8cm² bằng 70008 cm². Đúng hay Sai?",
    answer: "true"
},
{
    type: "multiple",
    question: "Phân số nào sau đây bằng phân số 4/7:",
    options: ["6/21", "9/21", "16/28", "15/21"],
    answer: "16/28"
},
{
    type: "multiple",
    question: "Một xe máy giờ đầu đi được 1/4 quãng đường, giờ thứ hai đi được 5/12 quãng đường. Hỏi xe máy cần đi thêm bao nhiêu phần quãng đường nữa?",
    options: ["7/12", "1/3", "2/5", "1/2"],
    answer: "1/3"
},
{
    type: "multiple",
    question: "Trong cuộc thi chạy, Lan chạy hết 4 phút 15 giây, Mai hết 150 giây, Hoa hết 8/3 phút. Ai là người chiến thắng?",
    options: ["Lan", "Mai", "Hoa", "Lan và Hoa"],
    answer: "Mai"
},
{
    type: "multiple",
    question: "Hà và An mua mũ giá 88.000 đồng. Chị Hà góp nhiều hơn em An 8.000 đồng. Hỏi Hà đã góp bao nhiêu tiền?",
    options: ["54000 đồng", "46000 đồng", "48000 đồng", "40000 đồng"],
    answer: "48000 đồng"
},
// Câu 40 (Chuyển thành Đúng/Sai theo yêu cầu)
{
    type: "boolean",
    question: "Giá trị của biểu thức (2/3 + 1/4) : 5/4 là 11/15. Đúng hay Sai?",
    answer: "true"
},
{
    type: "short",
    question: "Một mảnh đất 1020 m². Bác Tư dùng 1/4 diện tích làm ao cá và 2/5 diện tích trồng rau. Hỏi diện tích để xây nhà là bao nhiêu mét vuông?",
    answer: "357"
},
{
    type: "short",
    question: "Cô Hà mua 6kg táo hết 375.000 đồng. Vì người bán không có tiền lẻ, cô lấy thêm 2kg táo nữa cho đủ số tiền đã đưa. Hỏi cô Hà đã đưa bao nhiêu tiền? (chỉ điền số)",
    answer: "500000"
},
{
    type: "short",
    question: "Người ta dùng 150 viên gạch hình vuông cạnh 60cm để lát nền một căn phòng. Hỏi diện tích căn phòng là bao nhiêu mét vuông?",
    answer: "54"
},
{
    type: "short",
    question: "Một căn phòng hình chữ nhật có diện tích 54 m² và chiều dài 9m. Hỏi chiều rộng căn phòng là bao nhiêu mét?",
    answer: "6"
},
// --- CÂU HỎI TỪ ĐỀ SỐ 6 ---
{
    type: "multiple",
    question: "12 thế kỉ bằng bao nhiêu năm?",
    options: ["1200", "120", "15", "12000"],
    answer: "1200"
},
{
    type: "multiple",
    question: "37m² 9dm² = ? dm²",
    options: ["379", "3709", "37009", "3790"],
    answer: "3709"
},
// Câu 55 (Chuyển thành Đúng/Sai theo yêu cầu)
{
    type: "boolean",
    question: "Phân số tối giản của 63/135 là 7/15. Đúng hay Sai?",
    answer: "true"
},
{
    type: "multiple",
    question: "Giá trị của biểu thức (2/9 x 3/4) + 5/2 là:",
    options: ["8/3", "3/4", "1/4", "15/3"],
    answer: "8/3"
},
{
    type: "multiple",
    question: "Mẹ hơn con 25 tuổi. 5 năm nữa, tổng số tuổi của hai mẹ con là 55 tuổi. Tuổi con hiện nay là:",
    options: ["15 tuổi", "10 tuổi", "8 tuổi", "12 tuổi"],
    answer: "10 tuổi"
},
{
    type: "multiple",
    question: "Cứ mỗi 150 kg măng tươi cho ra 1 yến măng khô. Hỏi 1 tấn 2 tạ măng tươi thu được bao nhiêu kg măng khô?",
    options: ["12 kg", "20 kg", "120 kg", "80 kg"],
    answer: "80 kg"
},
{
    type: "short",
    question: "Một thùng có 150 lít dầu. Lần đầu lấy ra 2/5 số dầu, lần hai lấy 2/5 số dầu CÒN LẠI. Hỏi sau 2 lần lấy, trong thùng còn lại bao nhiêu lít dầu?",
    answer: "54"
},
// Câu 60 (Chuyển thành Đúng/Sai theo yêu cầu)
{
    type: "boolean",
    question: "Giá trị của tổng 1/2 + 1/6 + 1/12 + ... + 1/380 (tức là đến 1/(19*20)) là 19/20. Đúng hay Sai?",
    answer: "true"
},

// --- CÂU HỎI TỪ ĐỀ SỐ 5 ---
{
    type: "multiple",
    question: "Trong các phân số sau đây, phân số nào là phân số tối giản:",
    options: ["25/27", "15/42", "12/30", "18/21"],
    answer: "25/27"
},
{
    type: "multiple",
    question: "Phân số 3/5 bằng phân số nào dưới đây:",
    options: ["30/18", "18/30", "12/15", "9/20"],
    answer: "18/30"
},
{
    type: "boolean",
    question: "2/5 m² lớn hơn 3500 cm². Đúng hay Sai?",
    answer: "true"
},
{
    type: "multiple",
    question: "Các phân số 3/4; 5/6; 1/2; 4/3 xếp theo thứ tự tăng dần là:",
    options: ["5/6; 3/4; 1/2; 4/3", "1/2; 3/4; 5/6; 4/3", "4/3; 5/6; 3/4; 1/2", "1/2; 5/6; 3/4; 4/3"],
    answer: "1/2; 3/4; 5/6; 4/3"
},
// Câu 65 (Chuyển thành Đúng/Sai theo yêu cầu)
{
    type: "boolean",
    question: "Hai thửa ruộng thu hoạch được 64 tạ thóc, thửa 1 hơn thửa 2 là 10 tạ. Vậy sản lượng của hai thửa lần lượt là 3700kg và 2700kg. Đúng hay Sai?",
    answer: "true"
},
{
    type: "multiple",
    question: "Tổng của 4 số là 170. Trung bình cộng của 3 số đầu là 45. Hỏi số thứ tư là bao nhiêu?",
    options: ["120", "35", "30", "50"],
    answer: "35"
},
{
    type: "short",
    question: "Tính bằng cách thuận tiện: 23 + 23 x 2 + 23 x 3 + 23 x 4",
    answer: "230"
},
{
    type: "short",
    question: "Một kho gạo chứa 465 tạ gạo. Tuần đầu chuyển đi 2/5 số gạo, tuần hai chuyển đi 1/3 số gạo CÒN LẠI. Hỏi sau 2 tuần, trong kho còn lại bao nhiêu tạ gạo?",
    answer: "186"
},
{
    type: "short",
    question: "Vườn hoa hình chữ nhật dài 11m, rộng 7m. Một vườn hoa hình vuông có chu vi bằng chu vi hình chữ nhật đó. Tính diện tích vườn hình vuông.",
    answer: "81"
},
// --- CÂU HỎI TỪ ĐỀ SỐ 4 ---
// Câu 45 (Chuyển thành Đúng/Sai theo yêu cầu)
{
    type: "boolean",
    question: "Số gồm 5 triệu, 6 trăm nghìn, 6 trăm, 4 chục và 3 đơn vị được viết là 5.600.643. Đúng hay Sai?",
    answer: "true"
},
{
    type: "multiple",
    question: "Trong các phân số sau, phân số nào bằng phân số 7/8?",
    options: ["14/24", "35/16", "32/64", "49/56"],
    answer: "49/56"
},
{
    type: "multiple",
    question: "Số thứ nhất là 72. Số thứ hai bằng 5/2 số thứ nhất. Tìm số thứ hai.",
    options: ["180", "120", "170", "160"],
    answer: "180"
},
{
    type: "multiple",
    question: "Rút gọn biểu thức (17x21x4) / (7x34x2x8) ta được kết quả là:",
    options: ["17/4", "17/34", "3/8", "21/8"],
    answer: "3/8"
},
{
    type: "multiple",
    question: "Số trung bình cộng của hai số bằng 40. Biết rằng một trong hai số đó bằng 58. Tìm số kia?",
    options: ["98", "18", "49", "22"],
    answer: "22"
},
// Câu 50 (Chuyển thành Đúng/Sai theo yêu cầu)
{
    type: "boolean",
    question: "Nếu 36 lít dầu chia đều vào 3 can, thì cần 84 can để chứa hết 1008 lít dầu. Đúng hay Sai?",
    answer: "true"
},
{
    type: "short",
    question: "Một thửa ruộng hình chữ nhật có chu vi là 164m. Nếu tăng chiều rộng 8m và giảm chiều dài 4m thì nó trở thành hình vuông. Diện tích thửa ruộng đó là bao nhiêu m²?",
    answer: "1645"
},
{
    type: "short",
    question: "Tính tổng 1/(1x2) + 1/(2x3) + ... + 1/(24x25). Nếu kết quả là phân số a/b tối giản, hãy điền giá trị của a.",
    answer: "24"
},
    // --- CÂU HỎI TỪ ĐỀ SỐ 1 ---
    {
        type: "multiple",
        question: "Giá trị của số 5 trong số 15 203 907 là:",
        options: ["500", "50000", "500000", "5000000"],
        answer: "5000000"
    },
    {
        type: "multiple",
        question: "Số thích hợp để viết vào chỗ chấm 9m² 6dm² = ..... dm² là:",
        options: ["96", "960", "9006", "906"],
        answer: "906"
    },
    {
        type: "multiple",
        question: "Phân số lớn nhất trong các phân số 3/4; 7/7; 3/2; 99/100 là:",
        options: ["3/4", "7/7", "3/2", "99/100"],
        answer: "3/2"
    },
    {
        type: "multiple",
        question: "Phân số bằng phân số 5/6 là:",
        options: ["24/20", "15/24", "20/24", "18/20"],
        answer: "20/24"
    },
    // Câu 5 (Chuyển thành Đúng/Sai theo yêu cầu)
    {
        type: "boolean",
        question: "Hiền mua 12 quyển vở hết 102.000đ. Mai mua 8 quyển vở tương tự nhưng thiếu 15.000đ. Vậy Mai đang có 53.000đ. Đúng hay Sai?",
        answer: "true"
    },
    {
        type: "multiple",
        question: "Lớp 4A có 45 học sinh. Biết số học sinh nữ chiếm 3/5 số học sinh cả lớp. Hỏi lớp đó có bao nhiêu học sinh nam?",
        options: ["15 học sinh", "18 học sinh", "27 học sinh", "20 học sinh"],
        answer: "18 học sinh"
    },
    {
        type: "short",
        question: "Tìm x, biết: 20160 : x = 56",
        answer: "360"
    },
    {
        type: "short",
        question: "Tìm x, biết: x + 5270 = 1582 × 5",
        answer: "2640"
    },
    {
        type: "short",
        question: "Tìm x, biết: x - 735 = 9828 : 52",
        answer: "924"
    },
    // Câu 10 (Chuyển thành Đúng/Sai theo yêu cầu)
    {
        type: "boolean",
        question: "Kết quả của phép tính 11/12 - (3/4 - 1/9) là 5/18. Đúng hay Sai?",
        answer: "true"
    },
    {
        type: "short",
        question: "Một cửa hàng ngày thứ nhất bán 245kg hoa quả, ngày hai bán hơn ngày một 47kg, ngày ba bán ít hơn tổng hai ngày đầu 186kg. Hỏi trung bình mỗi ngày bán được bao nhiêu kg?",
        answer: "296"
    },
    {
        type: "short",
        question: "Vườn hoa hình chữ nhật dài 12m, rộng 6m. Vườn rau hình vuông có chu vi bằng chu vi vườn hoa. Tính diện tích vườn rau (m²).",
        answer: "81"
    },
    {
        type: "short",
        question: "Tính nhanh: 10005 × 12 + 28 × 10005 + 10005 + 10005 × 37 + 10005 × 22",
        answer: "1000500"
    },

    // --- CÂU HỎI TỪ ĐỀ SỐ 2 ---
    {
        type: "multiple",
        question: "Chữ số 3 trong số 1.238.580 có giá trị là:",
        options: ["300", "3000", "30000", "300000"],
        answer: "30000"
    },
    // Câu 15 (Chuyển thành Đúng/Sai theo yêu cầu)
    {
        type: "boolean",
        question: "47 tấn 6 yến bằng 47060 kg. Đúng hay Sai?",
        answer: "true"
    },
    {
        type: "multiple",
        question: "Phân số nào sau đây bằng phân số 5/9:",
        options: ["10/20", "20/36", "25/40", "15/32"],
        answer: "20/36"
    },
    {
        type: "multiple",
        question: "Một ô tô 2 giờ đầu mỗi giờ chạy 80km, 3 giờ sau mỗi giờ chạy 75km. Hỏi trung bình mỗi giờ ô tô chạy được bao nhiêu km?",
        options: ["60 km", "65 km", "75 km", "77 km"],
        answer: "77 km"
    },
    {
        type: "multiple",
        question: "Một xe máy đi trong 1/5 phút được 300m. Hỏi trong một giây người đó đi được bao nhiêu mét?",
        options: ["25 m", "50 m", "60 m", "12 m"],
        answer: "25 m"
    },
    {
        type: "short",
        question: "Để lát nền phòng học dài 12m, rộng 8m bằng gạch vuông cạnh 40cm với giá 25.000 đồng/viên, cần tổng cộng bao nhiêu tiền mua gạch? (chỉ điền số)",
        answer: "15000000"
    },
    // Câu 20 (Chuyển thành Đúng/Sai theo yêu cầu)
    {
        type: "boolean",
        question: "Một đàn gà có 165 con. Lần đầu bán 3/5, lần hai bán 2/3 số còn lại. Vậy cuối cùng còn lại 22 con. Đúng hay Sai?",
        answer: "true"
    },
    {
        type: "short",
        question: "Tìm một số tự nhiên có ba chữ số biết rằng khi viết thêm chữ số 2 vào bên phải số đó thì được một số lớn hơn số ban đầu 4106 đơn vị.",
        answer: "456"
    },

    // --- CÂU HỎI TỪ ĐỀ SỐ 3 ---
    {
        type: "multiple",
        question: "Giá trị của chữ số 8 trong số 28 245 301 là:",
        options: ["8000", "80000", "800000", "8000000"],
        answer: "8000000"
    },
    {
        type: "multiple",
        question: "Số trung bình cộng của hai số là 45. Biết số thứ nhất là 58. Tìm số thứ hai.",
        options: ["32", "90", "51", "18"],
        answer: "32"
    },
    {
        type: "multiple",
        question: "3 kg 7g = ... g",
        options: ["37 g", "307 g", "370 g", "3007 g"],
        answer: "3007 g"
    },
    // Câu 25 (Chuyển thành Đúng/Sai theo yêu cầu)
    {
        type: "boolean",
        question: "Một cửa hàng trong 2 ngày bán được 620kg gạo. Vậy trong 7 ngày cửa hàng đó bán được 2170kg gạo. Đúng hay Sai?",
        answer: "true"
    },
    {
        type: "multiple",
        question: "Vườn rau có 3/5 diện tích trồng rau cải, 4/15 trồng su hào, còn lại trồng hoa. Hỏi diện tích trồng hoa chiếm bao nhiêu phần?",
        options: ["13/15", "2/15", "1/15", "3/20"],
        answer: "2/15"
    },
    {
        type: "short",
        question: "Tìm x, biết: 75 × x = 1800",
        answer: "24"
    },
    {
        type: "short",
        question: "Tìm x, biết: 1855 : x = 35",
        answer: "53"
    },
    {
        type: "short",
        question: "Một cửa hàng ngày thứ nhất bán 180 tạ gạo, ngày thứ hai 270 tạ, ngày thứ ba bán kém ngày thứ hai một nửa. Hỏi trung bình mỗi ngày bán được bao nhiêu tạ gạo?",
        answer: "195"
    },
    // Câu 30 (Chuyển thành Đúng/Sai theo yêu cầu)
    {
        type: "boolean",
        question: "Một thửa ruộng dài 150m, rộng bằng 1/3 chiều dài. Cứ 10m² thu hoạch được 5kg thóc. Vậy cả thửa ruộng thu hoạch được 375 yến thóc. Đúng hay Sai?",
        answer: "true"
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const activeQuestions = shuffle([...questions]).slice(0, 45);

let currentQuestionIndex = 0;
let userAnswers = [];
let isPaused = false;

// --- Âm thanh ---
const alertAudio = new Audio("taptrung.mp3");
alertAudio.loop = true;
const breakTimeAudio = new Audio("gionghi.mp3");
// --- DOM Elements ---
const videoElement = document.getElementById("webcam");
const overlayCanvas = document.getElementById("overlay");
const overlayCtx = overlayCanvas.getContext("2d");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const timerElement = document.getElementById("timer");
const topBarContainer = document.querySelector(".top-bar-container");
const videoContainer = document.querySelector(".video-container");
const loaderOverlay = document.getElementById("loader-overlay");

const quizSection = document.getElementById("quiz-section");
const resultsContainer = document.getElementById("results-container");
const finalScoreElement = document.getElementById("final-score");
const finalTimeElement = document.getElementById("final-time");
const finalViolationsElement = document.getElementById("final-violations");
const restartBtn = document.getElementById("restart-btn");
const wrongAnswersContainer = document.getElementById("wrong-answers-container");

const menuBtn = document.getElementById("menu-btn");
const pauseModal = document.getElementById("pause-modal");
const pauseBtn = document.getElementById("pause-btn");
const resumeOverlay = document.getElementById("resume-overlay");
const resumeBtn = document.getElementById("resume-btn");
const exitBtn = document.getElementById("exit-btn");
const prevBtn = document.getElementById("prev-btn");
const nextSubmitBtn = document.getElementById("next-submit-btn");
const finalCorrectCountElement = document.getElementById("final-correct-count");
const appWrapper = document.getElementById("app-wrapper");
const startOverlay = document.getElementById("start-overlay");
const startBtn = document.getElementById("start-btn");
const breakOverlay = document.getElementById("break-overlay");
const breakCountdownElement = document.getElementById("break-countdown");

// --- Ngưỡng giám sát ---
const YAW_THRESHOLD = 1.4; 
const WRITING_ZONE_BOUNDARY = 0.75; 

// --- Biến làm mượt (Debounce) & Đếm vi phạm ---
let faceLostCounter = 0;
const FACE_LOST_THRESHOLD = 15; 
let violationFrameCounter = 0;
const VIOLATION_DEBOUNCE_THRESHOLD = 7; 
// === PHẦN MỚI THÊM VÀO ===
let isCurrentlyViolating = false; // Cờ theo dõi trạng thái vi phạm
let violationCount = 0; // Biến đếm số lần vi phạm
let nonViolationCounter = 0;
const NON_VIOLATION_THRESHOLD = 5;
// ==========================

// --- Biến cho đồng hồ và camera ---
let totalSeconds = 0;
let timerInterval = null;
let videoStream = null;

// =================================================================
// 2. LOGIC & GIAO DIỆN CÂU HỎI
// =================================================================

function updateProgressBar() { const progressPercent = ((currentQuestionIndex + 1) / activeQuestions.length) * 100; progressFill.style.width = `${progressPercent}%`; progressText.textContent = `Câu ${currentQuestionIndex + 1}/${activeQuestions.length}`; }
function showQuestion(index) {
    const q = activeQuestions[index];
    const container = document.getElementById("question-container");
    container.innerHTML = `<h2>Câu ${index + 1}: ${q.question}</h2>`;
    if (q.type === "multiple" || q.type === "boolean") {
        let optionsHTML = '<div class="options-container">';
        if (q.type === "multiple") {
            q.options.forEach((opt, i) => { optionsHTML += `<div class="answer-option"><input type="radio" id="opt-${i}" name="q${index}" value="${opt}"><label for="opt-${i}">${opt}</label></div>`; });
        } else if (q.type === "boolean") {
            optionsHTML += `<div class="answer-option"><input type="radio" id="opt-true" name="q${index}" value="true"><label for="opt-true">Đúng</label></div><div class="answer-option"><input type="radio" id="opt-false" name="q${index}" value="false"><label for="opt-false">Sai</label></div>`;
        }
        optionsHTML += '</div>';
        container.innerHTML += optionsHTML;
    } 
    else if (q.type === "short") { container.innerHTML += `<div><input type="text" id="short-answer" /></div>`; }
    updateProgressBar();
    updateNavigationButtons();
    // --- PHẦN CODE ĐỂ KHÔI PHỤC CÂU TRẢ LỜI ĐÃ LƯU ---
    const savedAnswer = userAnswers[index];
    if (savedAnswer) {
        if (q.type === 'short') {
            document.getElementById('short-answer').value = savedAnswer;
        } else {
            // Dùng cho trắc nghiệm và đúng/sai
            const selectedInput = document.querySelector(`input[name="q${index}"][value="${savedAnswer}"]`);
            if (selectedInput) {
                selectedInput.checked = true;
            }
        }
    }
}
function saveAnswer() { const q = activeQuestions[currentQuestionIndex]; const inputSelector = q.type === 'short' ? '#short-answer' : `input[name="q${currentQuestionIndex}"]:checked`; const selectedElement = document.querySelector(inputSelector); userAnswers[currentQuestionIndex] = selectedElement ? (selectedElement.value || "") : ""; }

function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    if (currentQuestionIndex === activeQuestions.length - 1) { nextSubmitBtn.textContent = "Nộp bài"; } 
    else { nextSubmitBtn.textContent = "Câu tiếp"; }
}

prevBtn.onclick = () => { saveAnswer(); if (currentQuestionIndex > 0) { currentQuestionIndex--; showQuestion(currentQuestionIndex); } };
nextSubmitBtn.onclick = () => { saveAnswer(); if (currentQuestionIndex === activeQuestions.length - 1) { submitQuiz(); } else { currentQuestionIndex++; showQuestion(currentQuestionIndex); } };

function submitQuiz() {
    pauseTimer();
    isPaused = true;
    // --- QUY TRÌNH TẮT CAMERA TOÀN DIỆN (BẢN CUỐI CÙNG) ---
    // 1. Đóng và giải phóng tài nguyên của FaceMesh
    faceMesh.close();

    // 2. Dừng tất cả các track (video, audio) trong luồng
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    
    // 3. Dừng video element
    videoElement.pause();
    
    // 4. Gỡ luồng khỏi video element để giải phóng hoàn toàn
    videoElement.srcObject = null;
    // --- KẾT THÚC ---

    // Tính điểm và câu sai
    let score = 0;
    let wrongAnswersHTML = '';
    activeQuestions.forEach((q, i) => {
        const userAnswerRaw = userAnswers[i] || "";
        const userAnswer = userAnswerRaw.toLowerCase();
        const correctAnswer = q.answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            score++;
        } else {
            let displayUserAnswer = userAnswerRaw || "<em>Chưa trả lời</em>";
            let displayCorrectAnswer = q.answer;
            if (q.type === 'boolean') {
                if (userAnswerRaw === 'true') displayUserAnswer = 'Đúng';
                if (userAnswerRaw === 'false') displayUserAnswer = 'Sai';
                if (q.answer === 'true') displayCorrectAnswer = 'Đúng';
                if (q.answer === 'false') displayCorrectAnswer = 'Sai';
            }
            wrongAnswersHTML += `<div class="wrong-answer-item"><p class="wrong-answer-q">${i + 1}. ${q.question}</p><p class="user-answer">Bạn đã chọn: ${displayUserAnswer}</p><p class="correct-answer">Đáp án đúng: ${displayCorrectAnswer}</p></div>`;
        }
    });

    const totalQuestions = activeQuestions.length;
    
    // --- LOGIC HIỂN THỊ ĐIỂM ĐÃ SỬA ---
    const scoreOutOf10 = totalQuestions > 0 ? (score / totalQuestions) * 10 : 0;
    // Cập nhật dòng điểm trên thang 10
    finalScoreElement.textContent = `Điểm: ${scoreOutOf10.toFixed(1)}/10`;
    // Cập nhật dòng số câu đúng (MỚI)
    finalCorrectCountElement.textContent = `Số câu đúng: ${score}/${totalQuestions}`;
    // --- KẾT THÚC SỬA ĐỔI ---
    
    const wrongCount = totalQuestions - score;
    const wrongPercentage = totalQuestions > 0 ? (wrongCount / totalQuestions) * 100 : 0;
    finalScoreElement.classList.remove('score-green', 'score-red', 'score-yellow');
    if (wrongPercentage <= 10) {
        finalScoreElement.classList.add('score-green');
    } else if (wrongPercentage > 10 && wrongPercentage <= 35) {
        finalScoreElement.classList.add('score-yellow');
    } else {
        finalScoreElement.classList.add('score-red');
    }
    
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    finalTimeElement.textContent = `Thời gian làm bài: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    finalViolationsElement.textContent = `Số lần mất tập trung: ${violationCount}`;

    if (wrongAnswersHTML) {
        wrongAnswersContainer.innerHTML = `<h3>Các câu trả lời sai:</h3>` + wrongAnswersHTML;
    } else {
        wrongAnswersContainer.innerHTML = '';
    }
    
    quizSection.style.display = 'none';
    topBarContainer.style.display = 'none';
    videoContainer.style.display = 'none';
    menuBtn.style.display = 'none';
    resultsContainer.style.display = 'block';
}
function runTimer() {
    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        // Chỉ chạy khi không ở trạng thái tạm dừng
        if (!isPaused) {
            totalSeconds++;
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            // KIỂM TRA GIỜ NGHỈ DỰA TRÊN ĐỒNG HỒ LÀM BÀI
            // Đặt là 60 giây để test (1 phút). Sửa thành 900 cho 15 phút
            if (totalSeconds > 0 && totalSeconds % 900 === 0) {
                startBreak();
            }
        }
    }, 1000);
}
function pauseTimer() { clearInterval(timerInterval); }
// --- CÁC HÀM MỚI CHO GIỜ NGHỈ ---
function startBreak() {
    if (isPaused) return; 

    isPaused = true;
    pauseTimer();
    stopAudio(alertAudio);
    breakTimeAudio.play();
    breakOverlay.style.display = 'flex';
    
    // Đặt thời gian nghỉ (tính bằng giây). Ví dụ: 3 phút = 180 giây
    let countdownSeconds = 180; 

    // --- PHẦN SỬA LỖI ---
    // Tạo một hàm riêng để cập nhật hiển thị
    const updateCountdownDisplay = () => {
        const minutes = Math.floor(countdownSeconds / 60);
        const seconds = countdownSeconds % 60;
        breakCountdownElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    // Hiển thị thời gian ban đầu ngay lập tức
    updateCountdownDisplay();

    countdownInterval = setInterval(() => {
        countdownSeconds--;
        // Cập nhật lại hiển thị sau mỗi giây
        updateCountdownDisplay();

        if (countdownSeconds < 0) { // Dùng "< 0" để đảm bảo 00:00 được hiển thị
            endBreak();
        }
    }, 1000);
}
function endBreak() {
    clearInterval(countdownInterval);
    breakOverlay.style.display = 'none';
    isPaused = false;
    runTimer();
}
// =================================================================
// 3. LOGIC GIÁM SÁT
// =================================================================

function playLoop(audio) { if (audio.paused) audio.play().catch(e => console.error("Lỗi:", e)); }
function stopAudio(audio) { audio.pause(); audio.currentTime = 0; }

const faceMesh = new FaceMesh({ locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}` });
faceMesh.setOptions({ maxNumFaces: 1, refineLandmarks: true, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });

faceMesh.onResults(results => {
    if (isPaused) {
        if (videoStream && videoStream.getTracks().some(track => track.enabled)) {
             overlayCtx.fillStyle = "rgba(0,0,0,0.8)";
             overlayCtx.fillRect(0, 0, overlayCanvas.width, overlayCanvas.height);
        }
        return;
    }
    overlayCtx.save();
    overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
    let isViolationThisFrame = false;
    const isFaceDetected = results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0;
    if (isFaceDetected) {
        faceLostCounter = 0; 
        const landmarks = results.multiFaceLandmarks[0];
        const nose = landmarks[1];
        if (nose.y > WRITING_ZONE_BOUNDARY) { isViolationThisFrame = false; }
        else {
            const leftSide = landmarks[234]; const rightSide = landmarks[454];
            const ratio = Math.abs(nose.x - leftSide.x) / Math.abs(nose.x - rightSide.x);
            if (ratio > YAW_THRESHOLD || ratio < 1 / YAW_THRESHOLD) { isViolationThisFrame = true; }
        }
    } else { faceLostCounter++; }
    if (faceLostCounter > FACE_LOST_THRESHOLD) { isViolationThisFrame = true; }
    if (isViolationThisFrame) { violationFrameCounter++; } 
    else { violationFrameCounter = 0; }
    
    let frameColor = "#00FF00";
    if (violationFrameCounter > VIOLATION_DEBOUNCE_THRESHOLD) {
    playLoop(alertAudio);
    frameColor = "#FF0000";

    if (!isCurrentlyViolating) {
        violationCount++;
        isCurrentlyViolating = true;
    }

    nonViolationCounter = 0; // reset đếm thoát
} else {
    nonViolationCounter++;
    if (nonViolationCounter > NON_VIOLATION_THRESHOLD) {
        stopAudio(alertAudio);
        isCurrentlyViolating = false;
    }
}

    
    const fixedFrameWidth = 240; const fixedFrameX = (overlayCanvas.width - fixedFrameWidth) / 2; const fixedFrameY = 0; const fixedFrameHeight = overlayCanvas.height;
    overlayCtx.strokeStyle = frameColor; overlayCtx.lineWidth = 2; overlayCtx.strokeRect(fixedFrameX, fixedFrameY, fixedFrameWidth, fixedFrameHeight);
    const boundaryY = overlayCanvas.height * WRITING_ZONE_BOUNDARY;
    if (boundaryY > fixedFrameY && boundaryY < fixedFrameY + fixedFrameHeight) {
        overlayCtx.beginPath(); overlayCtx.setLineDash([5, 10]); overlayCtx.moveTo(fixedFrameX, boundaryY);
        overlayCtx.lineTo(fixedFrameX + fixedFrameWidth, boundaryY);
        overlayCtx.strokeStyle = 'rgba(0, 123, 255, 0.5)'; overlayCtx.lineWidth = 1; overlayCtx.stroke(); overlayCtx.setLineDash([]);
    }
    if (isFaceDetected) {
        const landmarks = results.multiFaceLandmarks[0];
        let minX = 1, maxX = 0, minY = 1, maxY = 0;
        for (const landmark of landmarks) { minX = Math.min(minX, landmark.x); maxX = Math.max(maxX, landmark.x); minY = Math.min(minY, landmark.y); maxY = Math.max(maxY, landmark.y); }
        const bboxX = minX * overlayCanvas.width; const bboxY = minY * overlayCanvas.height;
        const bboxWidth = (maxX - minX) * overlayCanvas.width; const bboxHeight = (maxY - minY) * overlayCanvas.height;
        overlayCtx.strokeStyle = frameColor; overlayCtx.lineWidth = 4;
        overlayCtx.strokeRect(bboxX, bboxY, bboxWidth, bboxHeight);
    }
    overlayCtx.restore();
});

// =================================================================
// 4. KHỞI TẠO HỆ THỐNG VÀ SỰ KIỆN MENU
// =================================================================

// =================================================================
// 4. KHỞI TẠO HỆ THỐNG VÀ SỰ KIỆN MENU
// =================================================================

// Hàm khởi tạo chính (sẽ được gọi khi nhấn nút Bắt đầu)
async function startApp() {
    loaderOverlay.style.display = 'flex'; // Hiện vòng xoay chờ
    try {
        videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = videoStream;

        // Chờ cho đến khi video sẵn sàng để tránh bị kẹt
        videoElement.onloadedmetadata = () => {
            videoElement.play();

            const camera = new Camera(videoElement, { 
                onFrame: async () => { await faceMesh.send({ image: videoElement }); }, 
                width: 300, 
                height: 225 
            });
            camera.start();

            // Bắt đầu các tính năng của bài thi
            showQuestion(currentQuestionIndex);
            runTimer();
            // Đặt lại 15 phút (900000 ms)
            breakInterval = setInterval(startBreak, 900000); 

            // Ẩn vòng xoay chờ khi mọi thứ đã hoàn tất
            loaderOverlay.style.display = 'none';
        }

    } catch (error) {
        alert("Không thể khởi động camera. Vui lòng cấp quyền và tải lại trang.");
        console.error("Lỗi Camera:", error);
        // Nếu có lỗi cũng phải ẩn vòng xoay chờ
        loaderOverlay.style.display = 'none';
    }
}

// --- Gán sự kiện cho tất cả các nút ---

// Sự kiện cho nút Bắt đầu
startBtn.onclick = () => {
    // Ẩn trang bắt đầu
    startOverlay.style.display = 'none';
    
    // Hiện giao diện ứng dụng chính
    appWrapper.style.display = 'block';

    // Gọi hàm để khởi tạo camera, giám sát,...
    startApp();
};

// Sự kiện cho các nút trong menu tạm dừng
menuBtn.addEventListener('click', () => {
    pauseModal.style.display = 'flex';
});

pauseModal.addEventListener('click', (e) => {
    if (e.target === pauseModal) {
        pauseModal.style.display = 'none';
    }
});

pauseBtn.addEventListener('click', () => {
    isPaused = true;
    pauseTimer();
    stopAudio(alertAudio);
    if (videoStream) { videoStream.getTracks().forEach(track => track.enabled = false); }
    pauseModal.style.display = 'none';
    resumeOverlay.style.display = 'flex';
});

resumeBtn.addEventListener('click', () => {
    isPaused = false;
    runTimer();
    if (videoStream) { videoStream.getTracks().forEach(track => track.enabled = true); }
    resumeOverlay.style.display = 'none';
});

// Sự kiện cho nút Thoát và Làm lại bài
exitBtn.addEventListener('click', () => {
    window.location.reload();
});

restartBtn.addEventListener('click', () => {
    window.location.reload();
});