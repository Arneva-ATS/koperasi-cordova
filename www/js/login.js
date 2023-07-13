function alertFailed() {
    console.log('failed');
}

function doLogin(){
    const em = document.getElementById("email").value;
    const pw = document.getElementById("password").value;
    if (em == "" || pw == "") {
        navigator.notification.alert(
            'Pastikan data anda benar!',    // message
            alertFailed,                    // callback
            'Login Gagal',                 // title
            'OK'                            // buttonName
        );
    } else {
        var formdata = new FormData();
        formdata.append("email", em);
        formdata.append("password", pw);
        var ajax = new XMLHttpRequest();
        ajax.open("POST", "http://34.28.160.3/arnawa/public/api/login");
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                 var akun = JSON.parse(ajax.responseText)
                if (akun.response_code == 200) {
                    window.localStorage.setItem('key', JSON.stringify(akun.data));
                    window.location.replace('index.html');
                } else {
                    navigator.notification.alert(
                        akun.message,    // message
                        alertFailed,                    // callback
                        'Login Gagal',                 // title
                        'OK'                            // buttonName
                    );
                }
            }
        }
        ajax.send(formdata);
    }
}

function reset(){
    document.getElementById("email").value="";
    document.getElementById("password").value="";
}