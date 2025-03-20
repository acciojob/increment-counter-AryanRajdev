let element = document.querySelector("#val");
let mybtn = document.querySelector("#btn");

mybtn.addEventListener("click",function (){
	
	alert(element.textContent);
	let eleval = Number(element.textContent);
	eleval += 1;
	element.textContent = eleval;
	
});