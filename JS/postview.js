let buttt = document.getElementById('buttt')
let foot = document.getElementById('footer')
let username =localStorage.getItem('username')
if (username) {
    buttt.addEventListener('click', function addcomment() {
        let divbord = document.createElement('div')
        let bord = document.createElement('div')
        foot.appendChild(divbord)
        divbord.appendChild(bord)
        let h3_bord = document.createElement('h3')
        bord.appendChild(h3_bord)
        let p_bord = document.createElement("p")
        bord.appendChild(p_bord)
        let button_bord = document.createElement('button')
        let i_bord = document.createElement('i')
        bord.appendChild(button_bord)
        button_bord.append(i_bord)
        /////////////////////////////////////////
        bord.setAttribute('id', 'bord_1')
        i_bord.setAttribute('class', 'fa-solid fa-trash')
        button_bord.setAttribute('id', 'buttt1')
        /////////////////////////////////////////
        let username = localStorage.getItem('username')
        h3_bord.textContent = `من ${username}`;
        h3_bord.setAttribute('id', 'h33')
        /////////////////////////////////////////
        let p_bord_user = prompt("ادخل نص التعليق")
            p_bord.textContent = p_bord_user ;
        p_bord.setAttribute('id', 'p33')
        button_bord.addEventListener('click', function () {
            divbord.removeChild(bord)
        })
    })
    
} else {
    Swal.fire({
        title: "انت غير مسجل فالمدونة",
        text:  "يتم تحويلك الى صفحة تسجيل الدخول",
        background: "#DDB892",
        allowOutsideClick : false,
        confirmButtonText: "حسنًا",
        icon: "warning",
        confirmButtonColor:"#9C6644",
    })
    setTimeout(() => {
        window.location.href = '/HTML/Login.html'
    }, 3000);
}