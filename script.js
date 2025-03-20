let element = document.querySelector("#counter");
let mybtn = document.querySelector("#incrementBtn");

mybtn.addEventListener("click",function (){
	
	alert(Number(element.textContent));
	let eleval = Number(element.textContent);
	eleval += 1;
	element.textContent = eleval;
	
});