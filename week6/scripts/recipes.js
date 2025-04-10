
document.getElementById("buttonClick").addEventListener("click", () => {
    let count = localStorage.getItem("reviewCount");
    if (count === "null") {
        count = 1;
    } else {
        count = parseInt(count) + 1;
    }
    localStorage.setItem("reviewCount", count);
    document.getElementById("review-count").textContent = count;
});


