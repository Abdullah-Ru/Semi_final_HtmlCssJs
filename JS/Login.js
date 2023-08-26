let Login = document.getElementById("Login")
Login.addEventListener("submit", function Log(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "عبدالله" && password == "123123" || username == "غالي" && password == "1212" || username == "بتال" && password == "1111") {
        localStorage.setItem("username", username)
        setTimeout(function() {
            window.location.href = "/HTML/mainpage.html"
        }, 4000);
        Swal.fire({
            title: "! تم تسجيل دخولك بنجاح",
            text: "... يتم تحويلك الى الصفحة الرئيسية",
            background: "#DDB892",
            allowOutsideClick : false,
            confirmButtonText: "حسنًا",
            icon: "success",
            confirmButtonColor:"#9C6644",

        })
    } else {
        alert("غير صحيح حاول مره اخرى")
    }
})