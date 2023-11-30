let shoppingBasket = [];
let basketAmounts = [];
let basketPrices = [];

let basketContainer = document.getElementById("basketContainer");

function showPopup() {
  basketContainer.classList.add("hide-basket");
}
function closePopup() {
  basketContainer.classList.remove("hide-basket");
}

// Basket Functions
menuList();

function renderBasket() {
  basketContainer.innerHTML = ``;
  load()
  if(shoppingBasket.length > 0) {
    for (let i = 0; i < shoppingBasket.length; i++) {
      let amount = basketAmounts[i];
      let meal = shoppingBasket[i];
      let price = basketPrices[i];
      let sum = price * basketAmounts[i];
      priceSingle = sum
      basketContainer.innerHTML += postBasketItem(i, amount, meal, priceSingle);
    }
    basketContainer.innerHTML += postTotalSum();
    renderTotal();

  }else {
    basketContainer.innerHTML += postBasketEmpty();
  }
}

function menuList() {
  let menulist = document.getElementById("menulist");
  for (let i = 0; i < meals.length; i++) {
    const meal = meals[i];
    let name = meal["name"];
    let description = meal["description"];
    let price = meal["price"];
    menulist.innerHTML /*html*/ += postAllHTML(name, description, price, i);
  }
}

function addToBasket(indexMeals) {
  let menuArray = meals[indexMeals];
  let price = menuArray["price"];
  let meal = menuArray["name"];
  let indexBasket = shoppingBasket.indexOf(menuArray["name"]);
  if(indexBasket == -1) {
    shoppingBasket.push(meal);
    basketPrices.push(price);
    basketAmounts.push(1);
  }else {
    increaseAmount(indexBasket);
  }
  save();
  renderBasket();
}

function deleteMenu(position) {
  shoppingBasket.splice(position, 1)
  basketPrices.splice(position, 1)
  basketAmounts.splice(position, 1)
  save();
  renderBasket();
}

function save() {
  setArray("shoppingBasket", shoppingBasket);
  setArray("basketAmounts", basketAmounts);
  setArray("basketPrices", basketPrices);
}

function load() {
  let shoppingBasketLocal = localStorage.getItem('shoppingBasket');
  let basketAmountsLocal = localStorage.getItem('basketAmounts');
  let basketPricesLocal = localStorage.getItem('basketPrices');
  if (shoppingBasketLocal && basketAmountsLocal && basketPricesLocal) {
    shoppingBasket = JSON.parse(shoppingBasketLocal);
    basketAmounts = JSON.parse(basketAmountsLocal);
    basketPrices = JSON.parse(basketPricesLocal);
  }
}

function setArray(key, array) {
  localStorage.setItem(key, JSON.stringify(array));
}

function getArray(key) {
  return JSON.parse(localStorage.getItem(key));
}

function decreaseAmount(i) {
  if (basketAmounts[i] == 1) {
    deleteMenu(i);
    save()
    renderBasket(); 
  }else{
    basketAmounts[i]--;
    save()
    renderBasket(); 
  }
}
function increaseAmount(indexBasket) {
  basketAmounts[indexBasket]++;
  save();
  renderBasket();
}

function renderTotal(){
  let sum = 0;
  let totalSum = 0;
  deliveryCosts = 2.00;
  let priceSubTotal = document.getElementById("subTotal");
  let priceTotal = document.getElementById("totalSum");
  for (let i = 0; i < basketPrices.length; i++ ) {
    sum += basketPrices[i] * basketAmounts[i];
    totalSum = sum + deliveryCosts;
  }
  priceSubTotal.innerHTML = `${sum.toFixed(2)
    .replace(".", ",")} €`;

  priceTotal.innerHTML = `${totalSum.toFixed(2)
    .replace(".", ",")} €`;
}