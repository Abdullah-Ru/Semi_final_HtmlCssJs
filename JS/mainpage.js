let username = localStorage.getItem('username')
let button1 = document.getElementById('button_1')
let im = document.getElementById("IMG1")
let header = document.getElementById('headd')
let username_h2 = document.createElement('h3')
header.appendChild(username_h2)
username_h2.setAttribute('id', "userh2")
if(username) {
    button1.remove()
    im.style.position = 'absoulte'
    im.style.right = '-440px'
    username_h2.textContent = `مرحبًا بك مجددًا ${username} `

} else {
    window.location.href = '/HTML/mainpage.html'
    header.removeChild(username_h2)
}
