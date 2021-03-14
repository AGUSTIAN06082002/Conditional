//buat sebuah handleSubmit function

function handleSubmit(event){

    //prefent reload page
    event.preventDefault()

    //default username & pasword
    var def_email = "admin@gmail.com"
    var def_pasword = "admin123"

    //tangkap value dari input 
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    if(def_email === email && def_pasword === password){
        alert('login berhasil...!')
        window.location.href = 'home.html'
    }
    else{
        alert('Login gagal...!')
    }
}