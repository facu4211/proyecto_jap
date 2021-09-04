const usernav = document.getElementById('usernav');


let username = JSON.parse(localStorage.getItem('user'));

if(username != null){
    usernav.innerHTML= '<a href="#" id="close" class="py-2 d-none d-md-inline-block ">'+'Bienvenido ' + username[0].usuario+'</a>'
}

console.log(username);