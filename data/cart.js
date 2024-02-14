export const cart = [];

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