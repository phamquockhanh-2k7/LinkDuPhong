module.exports = (req, res) => {
  // 1. Lấy link đích từ Biến môi trường
  // Nếu quên cài thì mặc định chuyển về Google
  const destination = process.env.TARGET_LINK || "https://google.com";

  // 2. Thực hiện chuyển hướng 301 (Vĩnh viễn - Tốt cho SEO)
  res.redirect(301, destination);
};
