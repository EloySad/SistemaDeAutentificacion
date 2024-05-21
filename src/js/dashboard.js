(function () {
    const userSesion = localStorage.getItem("userSesion")

    if (userSesion == null) {
        window.location.href = "/"
    }
})()

const btnLogout = document.getElementById("btn-logout")

btnLogout.addEventListener("click", () => {
    localStorage.removeItem("userSesion")
    window.location.href = "/"
})