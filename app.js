/*
Write a console app to allow your users order a pizza.
You have got a menu of five pizza types. Each pizza has four ingredients.
A user can choose from two types of pizza dough.
A user can add some additional ingredients to their order.
A user can choose a custom pizza with four ingredients.
A user can order more than one pizza.
After the user confirms their order, the total is displayed.


*/

// global scope
let pizzaName;
let ingredientsArray = new Array();
let pizzaMenu = new  Array();
prompt("Hi!");
let user = false;

if (prompt("If you are a customer, then type: 2 or if you are ADMIN, then type:1")==="1") {
    roleChecker:
    for (let i=0;i<=4;i++) {
         createPizza();
         console.log(pizzaMenu.length);
         console.log(ingredientsArray);
        ingredientsArray.length=0;

    }
}else if (prompt("If you are a customer, then type: 2 or if you are ADMIN, then type:1")==="2"){
    
}else {
    prompt("Sometjing is wrong with our input, please press OK and try again");
    continue roleChecker;

}
displayMenu();


//console.log("hello!");
/*
function obtainPizzaName () {
    pizzaName = prompt("Tell me what's the name of the pizza to be ADDED to PIZZAMENU");
    return pizzaName;
}

function obtainIngredients () {
    return prompt("Enter the ingredients with commas");
}
*/

function createPizza () {


    let pizza = {
        type:"pizza",
        //name: pizzaName,
        name: prompt("What's the name of the pizza?"),
        ingredients:prompt("Enter the ingredients with commas"),
        dough:"ordinary",
        price: 6
    }
    pizzaMenu.push(pizza)
    return pizza;
}
function displayMenu () {
    //pizzaMenu.forEach(pizza=>console.log(pizza));
    for(let obj in pizzaMenu) {console.log(obj)};
}


