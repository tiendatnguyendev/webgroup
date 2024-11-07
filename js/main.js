// script.js

document.getElementById("search-button").addEventListener("click", function() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const category = document.getElementById("category").value;
    const priceRange = document.getElementById("price-range").value;

    // Hiển thị các giá trị lọc đã chọn (chỉ là ví dụ, bạn có thể thay bằng hành động thực tế)
    console.log("Từ khóa:", query);
    console.log("Phân loại:", category);
    console.log("Khoảng giá:", priceRange);

    // Thực hiện logic tìm kiếm ở đây, chẳng hạn: tìm kiếm trong danh sách sản phẩm hoặc gửi yêu cầu đến server
});
