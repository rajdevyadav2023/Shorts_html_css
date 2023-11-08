const searchInput = document.getElementById("search-input");


// to bold border
searchInput.addEventListener("focusin", function(e){
    e.target.parentElement.style.border = "2px solid #aaa"
})
// to remove bold border
searchInput.addEventListener("focusout", function(e){
    e.target.parentElement.style.border = "2px solid #ccc"
})