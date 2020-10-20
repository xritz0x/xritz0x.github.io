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

/*
	** Creating Slider From here 
*/
let sections = Array.from(document.querySelectorAll('.section')); // cashing all the sections in array
let sectionsLength = sections.length; // sections's length
let prev = document.querySelector('.prev'); // cashing prev button
let next = document.querySelector('.next'); // cashing next button
let current = 1; // Enter The Start Number
let dots = document.querySelector('.nav-control .dots'); // cashing dots div
let listSlides = document.createElement('ul'); // creating ul in dots div
dots.appendChild(listSlides); // add the ul to dots div
listSlides.classList.add('list-unstyled'); // add class to the added list
// creating list items according to how many sections we have
for (let i = 1;i <= sectionsLength ; i++){
	let element = document.createElement('li'); // create li
	element.setAttribute('data-index',i); // set attr to the added li have its number
	element.appendChild(document.createTextNode(i)); // add text in the li have section's index
	listSlides.appendChild(element); // append the li s to the ul "listSlides" 
}
let theList = document.querySelector(".nav-control .dots ul"); // cashing the created ul
ulist = Array.from(theList.children); // cashing ul li in var
document.querySelector('.nav-control ul li:nth-child(1)').classList.add('active');
const toggleActive = () => { // remove all the elements which have class active and li
	sections.forEach(sec => {
		sec.classList.remove('active');
	})
	ulist.forEach(li => {
		li.classList.remove('active');
	})	
}

const checker = () => {
	toggleActive(); // normalizing 
	sections[current -1].classList.add('active'); // setting class current to the selected 
	theList.children[current -1].classList.add('active'); // seeting class active to the li
		if (current === 1){
			prev.classList.add('disabled');
		}else {
			prev.classList.remove('disabled');
		}

		if (current === sectionsLength){
			next.classList.add('disabled');
		}else {
			next.classList.remove('disabled');
		}

}
ulist.forEach(lis => { // if i clicked on li it change me to the section which have "data-index"'s value
	lis.addEventListener('click',() => {
		current = lis.getAttribute('data-index');
		checker(); 
				/*
				when i run the function it starts again to remove all sections which have active class
				and setting again the current value by array[current -1].classList.add('active') becaue the array index minus 1
				and add disabled class to the prev if its the first section and same for next
				*/
	});
});
/*
	** its automatically slides !! how cool is it ?
*/
let automatic = () => {
	let count = setInterval(() => {
		if (current < sectionsLength){ // if current less than sections length its gonna add +1
				current++;
				checker();
			}else if (current == sectionsLength){ // double = because one of them is string and the another is number so its ==
			    current =1;
			    checker();
			}

	} ,3000) 
}
automatic();

const nextFunction = () => {
	if (current > 0 && current <= sectionsLength -1 /* bc if it's the last sectioni can click next */){
		current = current+1;
		checker();
		/*
			when i run the function it starts again to remove all sections which have active class
			and setting again the current value by array[current -1].classList.add('active') becaue the array index minus 1
			and add disabled class to the prev if its the first section and same for next
		*/
	}
}
const prevFunction = () => {
	if (current > 1/* it's bc if it's 0 i can click on prev on first section and take me back to unknown section whick isnt here */ && current <= sectionsLength){
		current = current-1;
		checker();
	}
}
/*
	** creating autamatic slider
*/
prev.addEventListener('click',prevFunction);
next.addEventListener('click',nextFunction);
