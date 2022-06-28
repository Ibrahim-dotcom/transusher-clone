let scrollupButton = document.querySelector("#forward-arrow");
scrollupButton.addEventListener("click",() =>{
	window.scrollTo({
		top : 0,
		left : 0,
		behavior : "smooth"  
    });
});


let scrollContainer = document.querySelector("#scroll-container");
let moveLeftArrow= document.querySelector("#move-left-arrow");
let moveRightArrow= document.querySelector("#move-right-arrow");
let movedBy= 0;
moveRightArrow.addEventListener("click", ()=>moveRight());
moveLeftArrow.addEventListener("click", ()=>moveLeft());
function moveRight(){
	
	if( movedBy < 720){
		scrollContainer.scrollTo({
		left: movedBy + 360,
		behavior: "smooth"
    });
    movedBy += 360;
    }
    else {
    	scrollContainer.scrollTo({
    	    left: 0,
            behavior:"smooth"
        })
        movedBy = 0;
    }
}
function moveLeft(){
	
	if(movedBy >359){
		scrollContainer.scrollTo({
		left: movedBy - 360,
		behavior: "smooth"
    });
    movedBy -= 360;
    }
    else{
    	scrollContainer.scrollTo({
    	    left:0,
           behaviour: "smooth"
        });
        movedBy = 720;
    }
}

let intervalId = setInterval(moveRight, 4500);

let forms = document.getElementsByTagName("form");
for(let i = 0;i < forms.length; i++){
	forms[i].addEventListener("focusin",()=>clearInterval(intervalId));
	forms[i].addEventListener("focusout",()=>intervalId=setInterval(moveRight, 4500));
}
function fixNavBar(){
	let navBar= document.querySelector("#nav-bar");
	if(window.pageYOffset >100){
		navBar.classList.add("fixedNavBar");
		navBar.classList.remove("navbar");
    }
	else {
		navBar.classList.add("navbar");
		navBar.classList.remove("fixedNavBar");
     }
}
window.addEventListener("scroll", fixNavBar);

//DROPDOWN
let menubar = document.querySelector("#menu-bar");
let closeMenubar = document.querySelector("#close-menu-bar");
let dropdown= document.querySelector("#drop-down");
menubar.addEventListener("click", showDropDown);
closeMenubar.addEventListener("click", hideDropDown);

function showDropDown(){
	menubar.style.display = "none";
	closeMenubar.style.display = "block";
		dropdown.style.height = "400px"
	    dropdown.style.opacity = "100%";
}
function hideDropDown(){
	closeMenubar.style.display = "none";
	menubar.style.display = "block";
		dropdown.style.height = "0px"
	    dropdown.style.opacity = "0%";
	    
}
//Statistics counter----------------------------------
let stats = document.querySelector("#counter");
let countries = document.querySelector("#countries");
let roads = document.querySelector("#roads");
let ports = document.querySelector("#ports");
let clients = document.querySelector("#clients");
function updateCountries(){
	let rect = stats.getBoundingClientRect();
	if(window.innerHeight - 50 > rect.top){
		let countriesStats= setInterval(() => {
			countries.innerHTML = ~~countries.innerHTML+1;
			 if(~~countries.innerHTML >119){
                  clearInterval(countriesStats);
                  countries.innerHTML = "120";
                  window.removeEventListener("scroll", updateCountries);
             }    
        },100);
    }
}

function updateRoads(){
	let rect = stats.getBoundingClientRect();
	if(window.innerHeight - 50 > rect.top){
		let roadsStats= setInterval(() => {
			roads.innerHTML = ~~roads.innerHTML+1;
			 if(~~roads.innerHTML >2299){
                 clearInterval(roadsStats);
                 roads.innerHTML = "2300";
                 window.removeEventListener("scroll", updateRoads);
             }    
        },20);
    }
}

function updatePorts(){
	let rect = stats.getBoundingClientRect();
	if(window.innerHeight - 50 > rect.top ){
		let portsStats= setInterval(() => {
			ports.innerHTML = ~~ports.innerHTML+1;
			 if(~~ports.innerHTML >3199){
                  clearInterval(portsStats);
                  ports.innerHTML = "3200";
                  window.removeEventListener("scroll", updatePorts);
             }    
        },20);
    }
}

function updateClients(){
	let rect = stats.getBoundingClientRect();
	if(window.innerHeight - 50 > rect.top ){
		let clientsStats= setInterval(() => {
		   clients.innerHTML = ~~clients.innerHTML+1;
			 if(~~clients.innerHTML >3199){
                  clearInterval(clientsStats);
                  clients.innerHTML = "5000";
                  window.removeEventListener("scroll", updateClients);
             }    
        },20);
    }
}
window.addEventListener("scroll", updateCountries);
window.addEventListener("scroll",updateRoads);
window.addEventListener("scroll",updatePorts);
window.addEventListener("scroll", updateClients);
/* FOR THE SECOND AUTO/MANUALLY SLIDING  WINDOW */
let servicesWrapper = document.querySelector(".services-wrapper");
let leftArrows = document.querySelectorAll(".left-arrow");
let rightArrows = document.querySelectorAll(".right-arrow");
let scrolledLeft= 0;
for(let i = 0; i < rightArrows.length; i++){
	rightArrows[i].addEventListener("click", moveServicesRight);
	leftArrows[i].addEventListener("click", moveServicesLeft);
}
 setInterval(moveServicesRight, 4500);
function moveServicesRight(){
	if(scrolledLeft < 720){
		servicesWrapper.scrollTo({
		left: scrolledLeft+360,
		behaviour: "smooth"
    });
    scrolledLeft += 360;
    }
   else{
   	servicesWrapper.scrollTo({
		left: 0,
		behaviour: "smooth"
    });
    scrolledLeft = 0;
   }
}

function moveServicesLeft(){
	if(scrolledLeft >0){
		servicesWrapper.scrollTo({
		left: scrolledLeft -360,
		behaviour: "smooth"
    });
    scrolledLeft -= 360;
    }
    else{
    	servicesWrapper.scrollTo({
		left: 720,
		behaviour: "smooth"
    });
    scrolledLeft =720;
    }
}
/* ######Animate image cover#######*/
let coverImageContainer = document.querySelector("#image-cover-container");
let imageCover = document.querySelector("#image-cover");
coverImageContainer.addEventListener("mouseover",() => imageCover.style.left = "90px");
coverImageContainer.addEventListener("mouseout",() => imageCover.style.left = "60px");
