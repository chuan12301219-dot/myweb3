
// 卡比 KABI 網站互動功能

console.log("歡迎來到卡比 KABI ♡");

// 導覽列目前頁面標示
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.color = "#e58aa9";
    link.style.fontWeight = "bold";
  }
});
