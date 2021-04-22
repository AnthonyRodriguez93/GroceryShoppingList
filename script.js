// CACHING ELEMENTS I NEED TO VARIABLES 
var button = document.getElementById("enter"); 
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var item = document.querySelectorAll("li");
var array = []
// END OF VARIABLES

item.forEach(doneClass); //creates a forEach loop and runs doneClass for each item in the array 
function doneClass(i) { // i in the () braces so I can refrence it in the next line
	i.addEventListener("click", function() { //adds an event listener to each item (being i) in the item array if it detects a click it run the next line
		this.classList.toggle("done"); //adds class "done" on a toggle for each click event in the array
	});
}



item.forEach(addbtn); //Creates another forEach loop on item that runs a function with a callback of i
function addbtn(n) {
	var btn = document.createElement("button"); //creates a new button element and stores that into a btn variable
	btn.appendChild(document.createTextNode("Delete")); //adds the text inside the button element
	n.appendChild(btn); //using the callback attaches the button to each li element
	array.push(btn); //pushes the button elements to the array above

	addListToBtns(btn);  //Adds listeners to each button element using the addListToBtns function see below

}

function addListToBtns(k){ //Makes a function named addListToBtns with a callback of k
	k.addEventListener("click", getDeleted) //Uses the callback to add listeners on each btn, when clicked it runs the function below
};

function getDeleted(){
	var del = document.querySelectorAll("li"); //Puts the "li" elements in a variable
	var n = del.length; // makes a length variable for the loop later
	var makeHandler = function(num){ //this variable holds a function
		return function() {
			this.closest("li").remove(); // Had to google this but the website "https://www.tutorialspoint.com/how-to-remove-li-elements-on-button-click-in-javascript" HELPED A LOT. It grabs the element of "li" closest to this event and removes it.
		};
	};

	for (var i =0; i < n; i++) { //loop through each iteration of the li elements using the del variable
		del[i].onclick = makeHandler(); //on click it runs the makeHandler function which in turn deletes that iteration of the element
	}
	
}


		


// ORIGINAL PART OF THE SCRIPT 

function inputLength() {
	return input.value.length;
}

function createListElement() { 
	var li = document.createElement("li"); //Creates a new li element and stores that into a li variable
	li.appendChild(document.createTextNode(input.value)); //adds a text node to the element input.value being whatever the user typed
	ul.appendChild(li); //adds the li to the end of the ul list
	input.value = ""; //clears the input text field


	doneClass(li);
	addbtn(li);
}

function addListAfterClick() { 
	if (inputLength() > 0) { //checks if the length of user input is greater than 0
		createListElement(); // creates a list element using above function
	}
}

button.addEventListener("click", addListAfterClick); //Adds an event listener on the enter button for click IF anyone clicks on the button it runs the addListAfterClick Function see above

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) { //checks if the input is greater than zero AND if the event that triggered it is equal to the keycode for the enter key
		createListElement(); //creates a list element using the function from earlier
	}
}

input.addEventListener("keypress", addListAfterKeypress); //Adds an event listener on the input text field for keypresses IF anyone presses a key with the input field in focus it runs the addListAfterKeypress Function see above

