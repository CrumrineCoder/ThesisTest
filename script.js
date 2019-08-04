let hamburgerIsOpen = false;

window.onload = function () {
    document.getElementsByClassName("hamburgerNavButtonContainer")[0].addEventListener("click", function () {
        hamburgerIsOpen = !hamburgerIsOpen;
        if (hamburgerIsOpen) {
            document.getElementsByClassName("diffContainer")[0].classList.remove("active");
            document.getElementsByClassName("diffContainer2")[0].classList.add("active");
            document.getElementsByClassName("hamburgerNavButtonContainer")[0].classList.add("open");
        } else {
            document.getElementsByClassName("diffContainer")[0].classList.add("active");
            document.getElementsByClassName("diffContainer2")[0].classList.remove("active");
            document.getElementsByClassName("hamburgerNavButtonContainer")[0].classList.remove("open");
        }
    });
}   