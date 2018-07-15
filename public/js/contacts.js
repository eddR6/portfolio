let changeheader = function () {
 let head = document.querySelector(".headpart");
 let logo = document.querySelector(".logo");
 let logo1 = document.querySelector(".logo h1");
 let logo2 = document.querySelector(".headpart div h2");
 let navi = document.querySelector(".headpart div nav");
 let naviul = document.querySelector(".ulpart");
 let ulli = document.querySelectorAll(".ulpart li");
 let ullia = document.querySelectorAll(".ulpart li a");
 let ulliahover = document.querySelectorAll(".ulpart li a:hover");

 let ypos = window.pageYOffset;

if(screen.width>1030){


	if (ypos > 20 ) {
	 head.style.height = "60px"
	 head.style.borderBottom = "3px solid rgb(173,1,1)";
	 head.style.backgroundColor = "white";
	 logo.style.lineHeight = "30px";
	 logo.style.padding = "7px 12px 7px 12px";
	 logo.style.marginTop = "7px";
	 logo1.style.fontSize = "20px";
	 logo2.style.marginTop = "33px";
	 logo2.style.color = "black";
	 logo2.style.fontSize = "13px";
	 logo2.style.border = "0";
	 for (let i = 0; i <= 3; i++) {
		 ulli[i].style.margin = "24px 13px 0px 13px";
	 }
	 for (let j = 0; j <= 3; j++) {
		 if(j!=3)
		 {ullia[j].style.color = "black";}
		 ullia[j].style.fontSize = "14px";
	 }
 }
 else {
	 head.style.height = "120px"
	 head.style.borderBottom = "1px solid white";
	 head.style.backgroundColor = "rgba(0,0,0,0)";
	 logo.style.lineHeight = "60px";
	 logo.style.padding = "15px 25px 15px 25px";
	 logo.style.marginTop = "15px";
	 logo1.style.fontSize = "40px";
	 logo2.style.marginTop = "66px";
	 logo2.style.color = "white";
	 logo2.style.fontSize = "26px";
	 logo2.style.borderTop = "2px solid white";
	 logo2.style.borderBottom = "2px solid white";
	 logo2.style.borderRight = "2px solid rgba(173,1,1,1)";
	 for (let i = 0; i <= 3; i++) {
		 ulli[i].style.margin = "52px 10px 0px 10px";
	 }


	 for (let j = 0; j <= 3; j++) {
		 if(j!=3)
		 {ullia[j].style.color = "white";}
		 ullia[j].style.fontSize = "16px";
	 }
 }
}else if(screen.width<=1030){
 if (ypos > 20 ) {
	 head.style.height = "50px";
	 head.style.borderBottom = "3px solid rgb(173,1,1)";
	 head.style.backgroundColor = "white";
	 logo.style.lineHeight = "30px";
	 logo.style.padding = "8px 6px 4px 6px";
	 logo.style.marginTop = "7px";
	 logo1.style.fontSize = "16px";
	 logo2.style.display = "none";

	 logo.style.marginLeft="1%";
	 naviul.style.float="right";
	 naviul.style.marginLeft="0";
	 naviul.style.width="65%";
	 for (let i = 0; i <= 3; i++) {
		 ulli[i].style.margin = "0px 2px 0px 8px";
	 }
	 for (let j = 0; j <= 3; j++) {
		 if(j!=3)
		 {ullia[j].style.color = "black";}
		 ullia[j].style.fontSize = "8px";
		 ullia[j].style.padding="1px 5px"
	 }
 }
 else {
	 head.style.height = "120px";
	 logo.style.marginLeft="35%";
	 head.style.borderBottom = "1px solid white";
	 head.style.backgroundColor = "rgba(0,0,0,0)";
	 logo.style.lineHeight = "40px";
	 logo.style.padding = "10px 15px 10px 15px";
	 logo.style.marginTop = "7px";
	 logo1.style.fontSize = "20px";
	 logo2.style.display = "block";
	 naviul.style.width="100%";
	 naviul.style.float="left";
	 naviul.style.marginLeft="7vw";

	 for (let i = 0; i <= 3; i++) {
		 ulli[i].style.margin = "0px 3px 0px 3px";
	 }


	 for (let j = 0; j <= 3; j++) {
		 if(j!=3)
		 {ullia[j].style.color = "white";}
		 ullia[j].style.fontSize = "14px";
		 ullia[j].style.padding="2px 10px"
	 }
 }
}

}
window.addEventListener("scroll", changeheader);
