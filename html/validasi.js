function validateForm(){
	let x = document.forms["login"]["nama"].value;
	let y = document.forms["login"]["Pass"].value;
	
	if (x =="" && y == ""){
		alert("Password dan username tidak boleh kosong");
		return false;
    }
	else if (x == "" || y == ""){
		alert("Salah satu tidak boleh kosong");
		return false;
	}
	else if (x !="pabw" || y != "ujiankk2"){
		alert("username atau password salah");
		return false;
	}
	else {
		window.location.href = "login.html";
	}
}
	