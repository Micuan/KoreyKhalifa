

var button = document.querySelector('i');
var isMenuOpened = false;

function navActivate(){
	if(isMenuOpened == false){
		isMenuOpened = true;
		button.classList.remove("fa-bars")
		button.classList.add("fa-times")

	}	
else{
	
	isMenuOpened = false;
	button.classList.add("fa-bars")
	button.classList.remove("fa-times")
}

}

 button.addEventListener('click', function(){ 
     navActivate();

 })


// var page = document.querySelector('navPopUp');
// var isMenuOpened = false;

// function navAct(){
// 	if(isMenuOpened == false){
// 		isMenuOpened = true;
// 		page.classList.remove("navPopUp")
// 	}	
// else{
	
// 	isMenuOpened = false;
// 	page.classList.add("navPopUp")
	
// }

// }


 // button.addEventListener('click', function(){ 
 //     navActivate();

 // })


//navActiavtion ends here 

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});