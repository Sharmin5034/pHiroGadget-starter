//localStroge add to cart
const addToCart =id=>{
let shoppingCart = {};
const storgeCart =localStorage.getItem('Shopping-cart');
if(storgeCart){
    shoppingCart = JSON.parse(storgeCart)
}
const quantity = shoppingCart[id]
if(quantity){
    const newQuantity = quantity + 1;
    shoppingCart[id]= newQuantity;
}
else{
    shoppingCart[id] = 1;
}
localStorage.setItem('Shopping-cart', JSON.stringify(shoppingCart))
}
export {addToCart}