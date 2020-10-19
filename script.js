let meters = document.querySelectorAll('.about-me .container .row-about .meters .meter span.name');
/*
	## How to extract the child
*/
const chil = (element) => {
	let ar1 = Array.from(element.children);
	let el2 = ar1[0].children;
	let ar2 = Array.from(el2);
	let el3 = ar2[0];
	return el3; 
}
meters.forEach((meter) => {
	meter.addEventListener('mouseenter',(event) => {
		var i = 10;
		let targetted = event.target;
		let selected = getComputedStyle(targetted);
		let selectedStyle = selected.width.slice(0,3); 
		targetted.width = "10px";
		chil(targetted.parentNode).style.display = "none";
		let bar = setInterval(() => {
			selectedStyle;
			targetted.style.width = i + "px";
			i++;
			if (i == selectedStyle){
				clearInterval(bar)
				chil(targetted.parentNode).style.display = "inline";
			}
		} ,1)
	}, { once: true });
});
/*
	New Things i've learned during coding this project in js
	getComputedStyle => it graps element's style the whole style from style file
	slice => it slice what i specify for it ex : slice(start , end) , the start and end index are excepted in counting
	{once: true} => add it in addEventListener Make it starts once 
	Array.from(htmlCollection) => it turns html Collection into array	
*/