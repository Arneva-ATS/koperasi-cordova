var data = window.localStorage.getItem('key');
if (data == null || data == undefined) {
    window.location.replace('login.html');
} else {
    var parse = JSON.parse(data);
    console.log(parse.id);
    document.getElementById("nama").innerHTML = parse.name;
    document.getElementById("email").innerHTML = parse.email;
    document.getElementById("lastmod").innerHTML = parse.created_at;
    document.getElementById("nama_toko").innerHTML = parse.nama_toko;
    document.getElementById("nama_koperasi").innerHTML = parse.nama_koperasi;
    document.getElementById("kode_user").innerHTML = parse.id;
}

