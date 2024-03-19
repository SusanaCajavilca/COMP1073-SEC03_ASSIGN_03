// Susana Cajavilca Turco - # 200553998
console.log("Please, when entering the Phone Number, you have to follow the pattern"); // a short notification, please read it

// declaring the constants to use in the assignment*****************

//constant to display my name and ID
const nameIdStudent = document.querySelector("#studentId");

//constant to display the image
const pizzaImage = document.querySelector("#image");

//constants to validate and store the input from the user: 8 fields
const nameData = document.querySelector("#name");
const phoneNumberData = document.querySelector("#phoneNumber");
const sizeData  = document.querySelector("#size");
const doughData  = document.querySelector("#dough");
const typeData  = document.querySelector("#type");
const quantityData  = document.querySelector("#quantity");
const saucesData  = document.querySelector("#sauces");
const sidesData  = document.querySelector("#sides");

//constant for the 'Send' button
const submit = document.querySelector("#submit");

//constant for the message paragraph: order or error message
const message = document.querySelector("#formResult");

//declaring empty variables********************************************
var arrayData = new Array(8);
var pizzaOrder;

//adding an image dinamycally using a javascript***********************
const image = document.createElement("img");
image.setAttribute("src","images/pizza_image.jpg")
pizzaImage.appendChild(image);


//adding event listener***********************************************
submit.addEventListener("click",validationForm);

//creating functions*****************************************************

//validation of the data provided by the user, checks that data is complete and valid
//all of the 8 fields are validated
function validationForm(event){

   // I am using an if - else if - else structure to validate the input
   if(nameData.value === ""){
    // if the name field is empty, then:
    message.textContent = "Please, enter your name";
    nameData.focus();
    event.preventDefault();
    message.style.backgroundColor= "white";
    nameIdStudent.textContent = "";

   }
   else if (nameData.value.match(/\d/)){
    // if the name field have a digit, then:
    message.textContent = "Please, enter a valid name";
    nameData.focus();
    event.preventDefault();
    message.style.backgroundColor= "white";
    nameIdStudent.textContent = "";

   }

   else if(phoneNumberData.value === ""){
    // if the phone number field is empty, then:
    message.textContent = "Please, enter your phone number";
    phoneNumberData.focus();
    event.preventDefault();
    message.style.backgroundColor= "white";
    nameIdStudent.textContent = "";

   }
   else if (!phoneNumberData.value.match(/^\d{3}-\d{3}-\d{4}$/)){
    // if the phone number field does not match with the proper format, then:
    message.textContent = "Please, enter a valid phone number";
    phoneNumberData.focus();
    event.preventDefault();
    message.style.backgroundColor= "white";
    nameIdStudent.textContent = "";

   }
   else if(sizeData.value === ""){
    // if the size has not been selected, then:
    message.textContent = "Please, pick the size of the pizza";
    sizeData.focus();
    event.preventDefault();
    message.style.backgroundColor= "white";
    nameIdStudent.textContent = "";
      
   }
   else if(doughData.value === ""){
     // if the dough has not been selected, then:
    message.textContent = "Please, pick the dough of the pizza";
    doughData.focus();
    event.preventDefault();
    message.style.backgroundColor= "white";
    nameIdStudent.textContent = "";
      
   }
   else if(typeData.value === ""){
    // if the type has not been selected, then:  
    message.textContent = "Please, pick the type of the pizza";
    typeData.focus();
    event.preventDefault();
    message.style.backgroundColor= "white";
    nameIdStudent.textContent = "";

   }
   else if(quantityData.value === ""){
    // if the quantity has not been selected, then:
    message.textContent = "Please, pick how many pizzas you want";
    quantityData.focus();
    event.preventDefault();
    message.style.backgroundColor= "white";
    nameIdStudent.textContent = "";
      
   }
   else if(saucesData.value === "" ){
    // if the sauce has not been selected, then:
    message.textContent = "Please, pick the sauce you want";
    saucesData.focus();
    event.preventDefault();
    message.style.backgroundColor= "white";
    nameIdStudent.textContent = "";
      
   }
   else if(sidesData.value === ""){
    // if the side has not been selected, then:
    message.textContent = "Please, pick the side you want";
    sidesData.focus();
    event.preventDefault();
    message.style.backgroundColor= "white";
    nameIdStudent.textContent = "";
      
   }
   else{
    // if all the validations have been successfully aproved, then:
     nameIdStudent.textContent = "Susana Cajavilca Turco Cod#: 200553998"; // adding name and student ID dinamycally

     //storing the values in my Array
     arrayData[0] = nameData.value;
     arrayData[1] = phoneNumberData.value;
     arrayData[2] = sizeData.value;
     arrayData[3] = doughData.value;
     arrayData[4] = typeData.value;
     arrayData[5] = Number(quantityData.value);  // this field is a number, not a string
     arrayData[6] = saucesData.value;
     arrayData[7] = sidesData.value;
     event.preventDefault();
     
     // creating a object of a Pizza class, using the constructor
     pizzaOrder = new Pizza(arrayData[0],arrayData[1],arrayData[2],arrayData[3],arrayData[4],arrayData[5],arrayData[6],arrayData[7]);
     pizzaOrder.printPizza();           // calling first method
     pizzaOrder.printInConsolePizza();  // calling second method

   }
   
   
}

// creating a Pizza class*****************************************************

class Pizza{

  //8 variables 
  nameCustomer;  
  phoneNumberCustomer;
  pizzaSize;
  pizzaDough;
  pizzaType; 
  pizzaQuantity;   // number
  pizzaSauce; 
  pizzaSides;

  //constructor
  constructor (nameCustomer, phoneNumberCustomer,pizzaSize, pizzaDough, pizzaType, pizzaQuantity, pizzaSauce, pizzaSides){
    
    //The form has 8 fields to fill in 
    //Name, Phone Number, Size, Dough, Type, Quantity, Sauce, Sides 
    this.nameCustomer = nameCustomer;
    this.phoneNumberCustomer = phoneNumberCustomer;
    this.pizzaSize = pizzaSize;
    this.pizzaDough = pizzaDough;
    this.pizzaType = pizzaType;
    this.pizzaQuantity = pizzaQuantity;  //number
    this.pizzaSauce = pizzaSauce;
    this.pizzaSides = pizzaSides;
  }

  // first method printPizza: prints the data of the Pizza object into html body
  // the following printPizza method did not work properly using 'textContent',
  //I had to change it to innerHTML so I could use the '<br>' 
  //and print each element of the Pizza class in one diferent line
  printPizza(){

      message.innerHTML = `*****This is your Order:*****<br>
      Name: ${this.nameCustomer}<br>
      Phone Number: ${this.phoneNumberCustomer}<br>
      Size: ${this.pizzaSize}<br>
      Dough type: ${this.pizzaDough}<br>
      Pizza type: ${this.pizzaType}<br>
      #: ${this.pizzaQuantity} pizzas<br>
      Sauce: ${this.pizzaSauce}<br>
      Sides: ${this.pizzaSides}<br>   
      ***** End of the order *****`;
      message.style.backgroundColor= "lightblue";

  }

  // second method printInConsolePizza: prints the data of the Pizza object into the console
  printInConsolePizza(){
    console.log(this);
  }
}


//***rubric notes*****************************************************
// comments and structure
// studentID and Name shown by clicking button
// validate each field
// more than 6 class variables
// at least one constructor and one method used in class
// one array, loop or conditional structure
//*** 



