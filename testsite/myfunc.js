function myFunction(){
	document.getElementById("mydiv").style.border = "1px solid black";
	document.getElementById("mydiv").style.width='500px';
	request('http://localhost/test2.html')
};

async function request(urla) {
	let url = urla		//'http://localhost/test2.html';
	let response = await fetch(url);
	let	obj = await response.text()
	document.getElementById("resp").innerHTML = obj;
	console.log(obj)
}