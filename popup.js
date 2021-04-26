let productInput = document.getElementById("productID");
let categoryInput = document.getElementById("categoryID");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
    let productID = productInput.value
    let categoryID = categoryInput.value

    // Product redirects will always be active.
    if (productID != "") {
        chrome.tabs.create({
            active: true,
            url: "http://redirect.trendhim.com/redirect/type/product/id/"+productID
        })
    }

    // Category redirects will be active when we don't have a product specified.
    if (categoryID != "") {
        let categoryActive = false
        if (productID == "") {
            categoryActive = true
        }

        chrome.tabs.create({
            active: categoryActive,
            url: "http://redirect.trendhim.com/redirect/type/category/id/"+categoryID
        })
    }
});

productInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        submitButton.click()
    }
})

categoryInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        submitButton.click()
    }
})