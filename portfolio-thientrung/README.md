# Portfolio — Ta Quoc Thien Trung

Trang portfolio một trang, HTML/CSS/JS thuần, không cần build. Mở `index.html` là chạy.

## Sửa ở đâu

| Muốn sửa | Mở file |
| --- | --- |
| Email, LinkedIn, SĐT, ảnh chân dung, CV, **chứng chỉ** (`certs`), **tài liệu mẫu** (`samples`, `sampleGroups`), bật/tắt chế độ nháp | `js/config.js` |
| Chữ tiếng Anh trên trang | `index.html` |
| Chữ tiếng Việt | `js/i18n-vi.js` (cùng khóa `data-i18n` với bản Anh) |
| Nội dung 4 case, 3 tab vai trò, đoạn tóm tắt 60 giây (EN + VI) | `js/cases.js` |
| Màu, font | `css/tokens.css` |

## Chế độ nháp (draft)

`js/config.js` đang để `draft: true`. Ở chế độ này trang hiện thanh cam trên cùng và nhãn **DRAFT** ở mọi chỗ còn thiếu dữ liệu thật.
Khi đặt `draft: false`, trang tự ẩn: thanh nháp, nhãn DRAFT, **mọi con số chưa xác nhận**, và các nút chưa có link/file.

## Việc còn lại trước khi chạy chính thức

- [ ] Cập nhật 2 CV (thêm TrueCommerce, bỏ "Present" ở Gia Cat), đặt lại vào `cv/` đúng tên, rồi đặt `cv.ready: true` trong `js/config.js`
- [ ] Dán link xác minh của 3 chứng chỉ Google vào `certs → url` (để trống thì nút Verify tự ẩn)
- [ ] Kiểm chính sách bảo mật của công ty trước khi công khai nhóm mẫu "EDI integration" (xem `assets/samples/README.txt`)
- [ ] Chốt các con số trên trang cho khớp với CV

## Tài liệu mẫu

Mỗi mẫu trong `js/config.js → samples` có `tag` ghi rõ nguồn gốc (dựng lại và ẩn danh / dữ liệu giả lập / dự án tự thực hiện / đề bài luyện tập). Giữ nhãn này đúng với thực tế.
Muốn ẩn một mẫu: xóa dòng của nó trong `samples`. Muốn ẩn cả mục: để `samples: []`.

## Đưa lên GitHub Pages

1. Tạo repo tên **`yohh1234.github.io`** (public) trong tài khoản Yohh1234.
2. Đưa toàn bộ nội dung thư mục này lên nhánh `main` (file `index.html` nằm ở gốc repo).
3. Settings → Pages → Source: *Deploy from a branch* → `main` / root.
4. Trang chạy ở `https://yohh1234.github.io/`.

Nếu dùng repo tên khác (ví dụ `portfolio`), trang sẽ ở `https://yohh1234.github.io/portfolio/`; khi đó sửa địa chỉ trong `index.html` (canonical, og:url, og:image, JSON-LD), `robots.txt` và `sitemap.xml`.

## Link tiện dụng

- Mở thẳng bản tiếng Việt: `…/?lang=vi`
- Mở thẳng một case: `…/#case-03`
- Theo dõi từng đơn ứng tuyển: `…/?ref=tencongty` (ghi thành sự kiện `ref-tencongty` trên GoatCounter)
