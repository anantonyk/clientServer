function parser(){
	let url = document.getElementById("urlname").value

	if(iscorrectURL(url)){
	document.getElementById("results").style.display = "block"
	document.getElementById("negres").style.display = "none"
	res = url.match(/^(?:(?<prtcl>\w+)(?:=?:\/\/)(?:(?<login>[\w\d-]+):(?<password>[\w\d-]+)@)?(?<host>(?:[\w\d-]+\.)+[\w\d-]+)(:(?<port>\d+))?(?<way>(?:(?:\/[\w\d]+)+))?)(\?(?<parameters>[\w\d-]+))?(#(?<anchor>[\w\d-]+))?$/).groups
	//(?:[\w-]+\.)+\w+(?:(?:\/\w+)+)?$/)
	console.log(res)
	document.getElementById("boolresult").innerHTML = iscorrectURL(url)
	document.getElementById("protocolres").innerHTML = res.prtcl
	document.getElementById("login").innerHTML = res.login	
	document.getElementById("password").innerHTML = res.password	
	document.getElementById("host").innerHTML = res.host	
	document.getElementById("port").innerHTML = res.port
	document.getElementById("way").innerHTML = res.way
	document.getElementById("parameters").innerHTML = res.parameters
	document.getElementById("anchor").innerHTML = res.anchor
	}
	else {
		document.getElementById("negres").style.display = "block"
		document.getElementById("results").style.display = "none"

	}


}

function iscorrectURL(url){
	return /^(?:(?<prtcl>\w+)(?:=?:\/\/)(?:(?<login>[\w\d-]+):(?<password>[\w\d-]+)@)?(?<host>(?:[\w\d-]+\.)+[\w\d-]+)(:(?<port>\d+))?(?<way>(?:(?:\/[\w\d]+)+))?)(\?(?<parameters>[\w\d-]+))?(#(?<anchor>[\w\d-]+))?$/.test(url)
}