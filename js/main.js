document.addEventListener("DOMContentLoaded", () => {
    let controls = document.querySelector(".controls"),
        options = document.querySelector(".options"),
        selectedBox = document.querySelector(".selected");

    let optionsChildren = Array.from(options.children);

    optionsChildren.forEach(el => {
        if (el.classList.contains("selected")) {
            selectedBox.innerHTML = el.innerHTML;
        }

        el.addEventListener("click", () => {
            selectedBox.innerHTML = el.innerHTML
            options.classList.add("closed")
        })
    });

    controls.addEventListener("click", () => {
        options.classList.contains("closed") ? options.classList.remove("closed") : options.classList.add("closed")
    });



})