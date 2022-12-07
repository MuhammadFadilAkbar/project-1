
var print = function(obj) {
    var string = '';

    for(var go in obj) {
        if(typeof obj[go] == 'string') {
            string+= go + ': ' + obj[go]+' </br>';
        }
        else {
            string+= go + ': { </br>' + print(obj[go]) + '}';
        }
    }

    return string;
}

function klik() { 

    var out = document.getElementById("output");

    var daftarAnggota = {
        email: document.getElementById("email").value,
        nama: document.getElementById("nama").value,
        kota: document.getElementById("kota").value,
        alamat: document.getElementById("alamat").value
    }

    out.innerHTML = print(daftarAnggota);

}

