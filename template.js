function postBasketItem(i, amount, meal, price) {
  return `
  <div id="post${i}" class="item-basket">
  <div onclick="closePopup()" class="close-btn"><img src="./svg/close.svg" alt=""></div>
  <div class="basket-single-wrapper">
      <div class="item-amount"><h3>${amount}</h3></div> 
      <div class="item-menu"><h4>${meal}</h4></div>

        <div id="singlePrice${i}"class="item-price"><p>${price
          .toFixed(2)
          .replace(".", ",")} €</p></div>

    </div>
        <div class="counter">
            <button onclick="deleteMenu(${i})"><img class="delete" src="./svg/delete.png" alt=""></button>
            <button onclick="decreaseAmount(${i})" class="item-minus">
                <img src="./svg/minus.svg" alt="">
            </button>
                <p class="amount">${amount}</p>
            <button onclick="increaseAmount(${i})"class="item-plus">
                <img src="./svg/add-button.svg" alt="">
            </button>
        </div>

  </div>
`;

}

function postBasketEmpty() {
  return `
    <div onclick="closePopup()" class="close-btn"><img src="./svg/close.svg" alt=""></div>
    <div class="flex"><img src="./svg/bag-shopping.svg" alt=""></div>
    <h2>Fülle deinen Warenkorb</h2>
    <p class="basket-container-text">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.  </p>`;
}


function postAllHTML(name, description, price, i) {
  return `
    <div class="menu-item" onclick="addToBasket(${i})">
      <h3 id="name${i}">${name}</h3>
      <div id="menu-item-info${i}" class="menu-item-info">
        ${description}
      </div>
      <div id="menu-item-price${i}" class="menu-item-price">${price.toFixed(2).replace(".", ",")} €</div>
      <button class="add-menu" onclick="addToBasket(${i})" id="addMenu${i}"><img src="./svg/add-button.svg" alt=""></button>
    </div>
  `;
}
  function postTotalSum(){
    return `
    <div id="totalContainer" class="total-container">
        <span class="subtotalsum">Zwischensumme: </span>
        <span class="subtotal" id="subTotal"></span>
    </div>
    <div class="total-container"><span class="totalsum">Gesamtsumme: </span><span class="totalsum" id="totalSum"></span></div>
    `;
  }