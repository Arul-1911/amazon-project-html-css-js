export const cart = [{
  productid:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:2
},{
  productid:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity:1
}];

//addtocart functionality function
export function addToCart(productid){
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if (productid === cartItem.productid) {
        matchingItem = cartItem;
      }
    });
  
    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productid}`
    );
    const quantity = Number(quantitySelector.value);
  
    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      cart.push({
         productid,
         quantity,
      });
    }
  
  }