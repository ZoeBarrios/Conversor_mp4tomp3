let URLinput = document.querySelector('.URL-input');
let boton=document.getElementById('btn')
let title=document.getElementById('title')

boton.addEventListener('click',async ()=>{
	if(URLinput.value){
		const res = await fetch(`https://graceful-sandy-samba.glitch.me/mp4tomp3?url=${URLinput.value}&title=${title.value}`);
		if(res.status == 200) {
			var a = document.createElement('a');
			a.href = `https://graceful-sandy-samba.glitch.me/mp4tomp3?url=${URLinput.value}&title=${title.value}`;
			a.setAttribute('download', '');
			a.click();
		} else if(res.status == 400) {
			alert("Invalid url");
		}
    
	}else{
		alert("Debe ingresar una URL")
	}
    
})