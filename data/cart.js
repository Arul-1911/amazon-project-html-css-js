export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productid: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionsId:'1'
    },
    {
      productid: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionsId:'2'
    },
  ];
}

//function save to localstorage
function saveToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

//addtocart functionality function
export function addToCart(productid) {
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
      deliveryOptionsId:'1'
    });
  }

  saveToLocalStorage();
}
//remove cart function
export function removeCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productid !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;

  saveToLocalStorage();
}

//calculateCartQuantity function

export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  return cartQuantity;
}


//updating quantity

export function updateQuantity(productId,newQuantity){
    let matchingItem;

    cart.forEach((cartItem) => {
      if(productId === cartItem.productid){
        matchingItem = cartItem;
      }
    });
    matchingItem.quantity = newQuantity;
    saveToLocalStorage();
}


export function updateDeliveryOption(productId, deliveryOptionsId){
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productid) {
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionsId = deliveryOptionsId;

  saveToLocalStorage();
}