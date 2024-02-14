export const cart = [{
  productid:"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
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