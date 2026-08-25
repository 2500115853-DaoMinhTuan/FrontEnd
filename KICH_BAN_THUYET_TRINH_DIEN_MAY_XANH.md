# KỊCH BẢN NÓI THUYẾT TRÌNH BÁO CÁO ĐỒ ÁN FRONT-END (NHÓM 2 NGƯỜI)
## TRÌNH BÀY TRƯỚC THẦY VÀ CẢ LỚP
### ĐỀ TÀI: XÂY DỰNG WEBSITE THƯƠNG MẠI ĐIỆN TỬ MÔ PHỎNG ĐIỆN MÁY XANH

- **Đối tượng lắng nghe:** Thầy giảng viên & Toàn thể các bạn sinh viên trong lớp
- **Thời lượng:** 5 – 7 phút (chia đều 50/50 cho 2 thành viên)
- **Công nghệ cốt lõi:** HTML5 Semantic, CSS3 (Grid / Flexbox / 3 Breakpoints Responsive), Vanilla JavaScript (State-driven UI)
- **Hình thức:** Thuyết trình nói kết hợp thao tác Live Demo trực tiếp trên màn hình chiếu

---

## 👥 BẢNG PHÂN CÔNG NHIỆM VỤ NHÓM 2 NGƯỜI

| STT | Thành viên | MSSV | Vai trò | Phân công nhiệm vụ cụ thể |
| :---: | :--- | :---: | :---: | :--- |
| 1 | **[Tên Bạn 1 - Mở đầu & Demo Layout]** | [MSSV 1] | Nhóm trưởng | Dựng Semantic HTML5, CSS Design System, Layout Grid/Flexbox, UI Header, Banner, Danh mục |
| 2 | **[Tên Bạn 2 - Logic JS & Luồng nghiệp vụ]** | [MSSV 2] | Lập trình viên | Quản lý State JS, Tìm kiếm thời gian thực, Lọc/Sắp xếp, Luồng Giỏ hàng, Toast, Modal Tài khoản, Responsive |

---

# 🎙️ TOÀN VĂN KỊCH BẢN NÓI THUYẾT TRÌNH CHI TIẾT

---

## 👤 PHẦN 1: BẠN 1 TRÌNH BÀY (0:00 – 03:00)
**Nhiệm vụ:** *Chào Thầy & cả lớp, Giới thiệu thành viên, Giới thiệu tổng quan & 3 Lý do cốt lõi chọn Điện Máy Xanh, Kiến trúc HTML/CSS & Live Demo Vị trí 1 đến 4.*

`[Cả 2 bạn cùng bước lên bục giảng, đứng thẳng tự tin. Bạn 1 mỉm cười, ánh mắt hướng về Thầy và toàn thể lớp học]`

> "Em xin kính chào Thầy và chào tất cả các bạn đang có mặt trong buổi học ngày hôm nay!
> 
> Nhóm 2 người chúng em gồm:
> - Em là **[Tên Bạn 1]**;
> - Và bạn đồng hành cùng em là **[Tên Bạn 2]**.
> 
> Đến với buổi báo cáo cuối kỳ môn Phát triển Web Front-End, nhóm em xin phép được giới thiệu dự án: **'Xây dựng Website thương mại điện tử mô phỏng hệ thống Điện Máy Xanh'** được phát triển hoàn toàn bằng bộ ba công nghệ: **HTML5, CSS3 và JavaScript thuần (Vanilla JS)**."

`[Bạn 1 chỉ tay lên màn hình máy chiếu hoặc Slide tổng quan]`

> "Thưa Thầy và các bạn, khi bắt đầu lựa chọn đề tài cuối kỳ, nhóm mình đã quyết định chọn mô phỏng Điện Máy Xanh vì **3 lý do cực kỳ đúng trọng tâm chuyên môn Front-End** sau đây:
> 
> 1. **Thứ nhất – Tính thực tế và trải nghiệm quen thuộc:** Chắc hẳn Thầy và tất cả các bạn ở đây đều đã từng truy cập Điện Máy Xanh để mua sắm hoặc tra cứu sản phẩm. Đây là một mô hình E-commerce chuẩn mực tại Việt Nam với giao diện trực quan, rõ ràng. Việc mô phỏng lại trang web này giúp nhóm em tiếp cận gần nhất với tiêu chuẩn thiết kế thương mại điện tử thực tế.
> 
> 2. **Thứ hai – Thử thách về Bố cục Layout (Grid & Flexbox đa tầng):** Giao diện Điện Máy Xanh có mật độ thông tin dày đặc và cấu trúc lưới rất phức tạp: từ thanh tìm kiếm, cụm 6 danh mục, khối khuyến mãi, đến lưới sản phẩm 4 cột. Đây là đề tài lý tưởng nhất để nhóm em rèn luyện kỹ năng phân chia layout chuẩn và giải quyết bài toán **Responsive Web Design** để web co giãn mượt mà trên cả Laptop, Máy tính bảng và Điện thoại.
> 
> 3. **Thứ ba – Thử thách xử lý luồng dữ liệu Client-side bằng JavaScript thuần:** Thay vì sử dụng các Framework có sẵn, việc chọn một website bán hàng với lượng dữ liệu phong phú giúp nhóm em thực hành quản lý dữ liệu đối tượng JSON, giải quyết bài toán tìm kiếm tức thì (Real-time Search), lọc sản phẩm 2 chiều, sắp xếp giá và luồng giỏ hàng hoàn toàn bằng **Vanilla JavaScript** để nắm vững bản chất cốt lõi của lập trình Web.
> 
> **Về mặt Nền tảng Kỹ thuật Front-End (HTML5 & CSS3):**
> - **Cấu trúc HTML5:** Sử dụng 100% chuẩn **Semantic Web** (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) giúp tài liệu mạch lạc, chuẩn SEO và tạo khung tĩnh vững chắc sẵn sàng đón dữ liệu động.
> - **Hệ thống CSS3:** Sử dụng chính xác màu nhận diện thương hiệu Điện Máy Xanh: Xanh dương chủ đạo (`#009DE0`, `#0076a3`), điểm nhấn giá sale màu đỏ (`#d70018`) trên nền xám sáng (`#f3f4f6`). Bố cục phối hợp mượt mà giữa **CSS Grid** và **Flexbox**.
> 
> `[Bạn 1 bắt đầu thao tác chuột trực tiếp trên trình duyệt]`
> 
> Ngay sau đây, em xin demo **4 vị trí giao diện đầu tiên** trên trang:
> 
> 📍 **Vị trí 1: Top Header & Main Header**
> - Phía trên là banner khuyến mãi. Bên dưới là Logo thương hiệu nền xanh nổi bật.
> - Ở giữa là **Thanh tìm kiếm thời gian thực**. `[Gõ nhanh chữ 'samsung' vào ô tìm kiếm]` Sự kiện `input` lập tức lắng nghe từng ký tự, lọc và hiển thị ngay các sản phẩm Samsung mà không cần bấm nút tìm hay tải lại trang.
> - Bên phải gồm nút Tài khoản và nút Giỏ hàng có Badge hiển thị số lượng sản phẩm.
> 
> 📍 **Vị trí 2: Thanh điều hướng (Navigation Bar)**
> - Cung cấp liên kết nhanh đến từng ngành hàng, tích hợp hiệu ứng **Smooth Scroll** cuộn trang êm ái.
> 
> 📍 **Vị trí 3: Banner Slider & Khối Cam kết (Benefits)**
> - `[Cuộn nhẹ chuột xuống]` Trình chiếu banner tiếp thị đi kèm 4 khối biểu tượng cam kết uy tín của hệ thống.
> 
> 📍 **Vị trí 4: Cụm 6 Danh mục sản phẩm (Categories)**
> - `[Click vào icon danh mục 'Điện lạnh']` Khi click vào icon danh mục, hàm `selectCategory()` được gọi: vừa kích hoạt bộ lọc dữ liệu, vừa tự động cuộn màn hình xuống khu vực sản phẩm bên dưới."

---

### 🔄 CÂU CHUYỂN GIAO LƯỢT NÓI (HAND-OVER)
`[Bạn 1 quay sang mỉm cười và hướng tay về Bạn 2]`

> **Bạn 1:** *"Và để tiếp tục buổi báo cáo, em xin nhường lại quyền trình bày cho bạn **[Tên Bạn 2]** để demo chi tiết về các thuật toán JavaScript xử lý bộ lọc nâng cao, luồng giỏ hàng và hệ thống tài khoản ạ!"*

---

## 👤 PHẦN 2: BẠN 2 TRÌNH BÀY (03:00 – 06:30)
**Nhiệm vụ:** *Kiến trúc JavaScript, Live Demo Vị trí 5 đến 10, Kiểm tra Responsive F12, Tổng kết & Kết thúc.*

`[Bạn 2 bước lên tiếp quản chuột và bàn phím, tự tin chào Thầy và cả lớp]`

> "Em xin kính chào Thầy và các bạn! Mình là **[Tên Bạn 2]**. Tiếp theo, mình xin phép được trình bày về tư duy lập trình JavaScript và demo các luồng tương tác tiếp theo của trang web:
> 
> Toàn bộ logic ứng dụng được nhóm mình xây dựng theo mô hình **State-driven UI** (Giao diện điều khiển bởi trạng thái dữ liệu):
> - Dữ liệu 12 sản phẩm được tổ chức dưới dạng mảng Object JSON chứa đầy đủ ID, tên, giá bán, giá cũ, tag khuyến mãi, hình ảnh và đánh giá sao.
> - Hàm trung tâm `renderProducts()` xử lý pipeline lọc 2 chiều: kết hợp đồng thời giữa danh mục đang chọn và từ khóa gõ vào ô tìm kiếm, sau đó mới đi qua bộ sắp xếp giá.
> 
> `[Bạn 2 thao tác demo trực tiếp trên màn hình]`
> 
> Mình xin đi tiếp vào các vị trí chức năng:
> 
> 📍 **Vị trí 5: Thanh công cụ Lọc & Sắp xếp (Filter Bar)**
> - Các nút lọc ngành hàng có hiệu ứng `active` đồng bộ.
> - `[Chọn sắp xếp 'Giá thấp → cao', rồi 'Giá cao → thấp']` Menu sắp xếp kích hoạt thuật toán `.sort()`, lập tức đảo lại thứ tự hiển thị của toàn bộ sản phẩm ngay tức thì.
> 
> 📍 **Vị trí 6: Lưới Sản phẩm chính (Product Grid) & Khối Empty State**
> - Các thẻ sản phẩm được render động bằng JS, có nhãn giảm giá đỏ, rating ⭐, giá mới, giá niêm yết cũ gạch ngang, tag 'Trả góp 0%' và nút 'Thêm vào giỏ'.
> - Phía trên có bộ đếm hiển thị tổng số lượng sản phẩm tìm thấy.
> - `[Gõ từ khóa không khớp như 'xyz888' vào ô tìm kiếm]` Khi không có dữ liệu khớp, khối **Empty State** tự động xuất hiện với icon kính lúp và thông báo lịch sự cho người dùng.
> 
> 📍 **Vị trí 7 & 8: Khối Khuyến mãi, Ngăn kéo Giỏ hàng & Toast Thông báo**
> - `[Xóa từ khóa, bấm nút 'Thêm vào giỏ' ở 2 sản phẩm khác nhau]`
> - Khi em bấm thêm vào giỏ: Hệ thống kiểm tra ID — nếu sản phẩm đã có thì tăng số lượng (`quantity++`), nếu chưa có thì thêm mới vào mảng `cart`.
> - Một **Toast Notification** tự động trượt ra ở góc dưới màn hình trong `2.2 giây` và Badge trên Header nhảy số tức thì.
> - `[Click mở Giỏ hàng trên Header]` Ngăn kéo Giỏ hàng trượt ra từ bên phải màn hình rất mượt mà: hiển thị ảnh thu nhỏ, tên món, số lượng, thành tiền, tổng thanh toán định dạng `VND` chuẩn và nút thanh toán.
> 
> 📍 **Vị trí 9: Popup Đăng nhập / Đăng ký (Account Modal)**
> - `[Click vào nút 'Tài khoản' trên Header]` Popup quản lý tài khoản mô phỏng đầy đủ: kiểm tra chống trùng lặp khi Đăng ký và kiểm tra đúng tài khoản/mật khẩu khi Đăng nhập với các thông báo lỗi trực quan.
> 
> 📍 **Vị trí 10: Chân trang (Footer) & Trải nghiệm Responsive**
> - Chân trang cung cấp đầy đủ liên kết mạng xã hội, chính sách bảo hành và hotline hỗ trợ.
> - `[Nhấn F12 chuyển sang chế độ Device Toolbar Responsive]`
> - Nhóm em xây dựng **3 Breakpoints**:
>   + Ở màn hình **Tablet (700px)**: Lưới sản phẩm tự chia thành 2 cột, thanh Menu chuyển sang cuộn ngang cảm ứng (`overflow-x: auto`).
>   + Ở màn hình **Mobile (450px)**: Toàn bộ layout chuyển về 1 cột duy nhất, kích thước chữ và nút bấm được tối ưu cho thao tác một tay."

`[Cả 2 bạn cùng đứng thẳng hàng nghiêm túc, Bạn 2 nói phần tổng kết]`

> "Kính thưa Thầy và các bạn, thông qua đồ án môn Front-End này, nhóm 2 người chúng em đã:
> 1. Hoàn thành 100% mục tiêu xây dựng website mô phỏng Điện Máy Xanh chuẩn thẩm mỹ và đầy đủ chức năng thương mại điện tử.
> 2. Phối hợp làm việc nhóm hiệu quả, làm chủ kỹ thuật phân chia Layout CSS và xử lý dữ liệu với JavaScript thuần.
> 
> **Về hướng phát triển tiếp theo:** Nhóm dự kiến sẽ phát triển thêm **Backend RESTful API** (bằng Node.js/Express & MongoDB), tích hợp cổng thanh toán trực tuyến (VNPay/Momo) và xây dựng trang Admin Dashboard quản lý đơn hàng.
> 
> Nhóm chúng em xin chân thành cảm ơn Thầy và các bạn đã chú ý lắng nghe bài thuyết trình!  
> **Nhóm em xin trân trọng kính mời Thầy và các bạn trong lớp nhận xét và đặt câu hỏi cho 2 đứa em ạ!**"

`[Cả 2 bạn đồng loạt cúi đầu chào lịch sự, mỉm cười và chuẩn bị cho phần Q&A]`

---

## 🎯 BỘ CÂU HỎI VẤN ĐÁP PHÂN VAI CHO 2 BẠN (Q&A CHEATSHEET)

### ❓ Câu 1 (Thầy hỏi BẠN 1): "Em tổ chức CSS Layout và Responsive cho website này như thế nào?"
> **👉 Bạn 1 trả lời:**  
> *"Dạ thưa Thầy, em kết hợp CSS Grid cho các khối dạng lưới lớn (như Danh mục 6 cột, Sản phẩm 4 cột, Footer 4 cột) và dùng Flexbox cho các thanh Header, Navigation và từng item trong Giỏ hàng.  
> Về Responsive, em chia 3 Breakpoint chính: `@media (max-width: 1000px)` hạ về 3 cột; `@media (max-width: 700px)` hạ về 2 cột và cho Menu cuộn ngang bằng `overflow-x: auto`; và `@media (max-width: 450px)` chuyển về 1 cột cho Mobile để tối ưu trải nghiệm chạm ngón tay ạ."*

### ❓ Câu 2 (Thầy hỏi BẠN 2): "Hàm `renderProducts()` hoạt động ra sao khi người dùng vừa gõ tìm kiếm vừa chọn danh mục?"
> **👉 Bạn 2 trả lời:**  
> *"Dạ thưa Thầy, em áp dụng cơ chế lọc kết hợp (Combined Filter). Trong callback `.filter()`, em kiểm tra đồng thời 2 điều kiện: `categoryMatch` (kiểm tra category) và `searchMatch` (dùng `.includes()` kiểm tra chuỗi tìm kiếm viết thường). Kết quả phải thỏa mãn cả hai (`categoryMatch && searchMatch`). Sau đó mảng kết quả mới đi qua bước `.sort()` theo giá rồi mới render ra DOM, đảm bảo dữ liệu hiển thị không bao giờ bị xung đột ạ."*

### ❓ Câu 3 (Thầy hỏi BẠN 2): "Nghiệp vụ thêm vào giỏ hàng `addToCart()` xử lý như thế nào khi khách bấm thêm 1 sản phẩm nhiều lần?"
> **👉 Bạn 2 trả lời:**  
> *"Dạ, em dùng hàm `cart.find(item => item.id === id)`. Nếu tìm thấy sản phẩm đã có trong mảng `cart`, em chỉ cần tăng `existing.quantity++`. Nếu chưa có thì em mới `.push()` một đối tượng mới với `quantity: 1`. Sau đó em gọi hàm `updateCart()` để tính lại tổng tiền, cập nhật badge số lượng và hiển thị toast thông báo trong 2.2 giây ạ."*

### ❓ Câu 4 (Thầy hỏi cả 2 bạn): "2 em đã phân chia công việc và phối hợp như thế nào trong suốt quá trình làm bài?"
> **👉 Bạn 1 & Bạn 2 trả lời:**  
> *"Dạ thưa Thầy, nhóm 2 người chúng em thống nhất giao diện và cấu trúc dữ liệu JSON ngay từ đầu. Bạn [Tên Bạn 1] dựng khung HTML Semantic và hoàn thiện hệ thống CSS Design System cùng Layout tĩnh. Sau đó Bạn [Tên Bạn 2] ghép nối mã JavaScript để xử lý logic tìm kiếm, lọc, render sản phẩm, giỏ hàng và modal tài khoản. 2 đứa em cùng review và test Responsive trên nhiều kích thước màn hình để đảm bảo sản phẩm hoàn thiện nhất ạ."*
