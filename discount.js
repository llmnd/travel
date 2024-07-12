function showDiscountDetails(discountId) {
    const details = document.getElementById(discountId);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
