let element = document.querySelector("#counter");
let mybtn = document.querySelector("#incrementBtn");

mybtn.addEventListener("click",function (){
	
	alert(element.textContent);
	let eleval = Number(element.textContent);
	eleval += 1;
	element.textContent = eleval;
	
});