const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector(".btnlogin-popup");
const iconClose = document.querySelector(".icon-close")

registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active')
})

btnPopup.addEventListener('click', () => {
    // console.warn(wrapper)
    wrapper.classList.add("active-popup");

    wrapper.classList.remove("active");
})

iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
})

