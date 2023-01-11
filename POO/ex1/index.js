import { Pizza } from './pizza.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let pizza = new Pizza("La Veggie", "tomate","fromage", "légumes" );
    let pizza2 = new Pizza("La Meattie", "tomate","fromage", "viande" );
    let pizza3 = new Pizza("La Fishie", "tomate","fromage", "poisson" );
    console.log(pizza);
    console.log(pizza2);
    console.log(pizza3);
    
    
});