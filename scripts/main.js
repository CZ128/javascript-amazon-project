import { products } from "../data/products.js";
import { card,count } from "../data/card.js";


let loadingString = "";
let quantity = 0;
products.forEach(product => {
  loadingString += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container" >
            <select data-id-quantity="${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart" >
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary" data-id-button="${product.id}">
            Add to Cart
          </button>
        </div>`
  document.querySelector(".products-grid").innerHTML = loadingString;
  document.querySelector(`[data-id-button="${product.id}"]`).addEventListener("click", () => {
    item.quantity += parseInt(document.querySelector(`[data-id-quantity="${product.id}"]`).value);
  });


});

let i = false;

document.querySelectorAll(".add-to-cart-button").forEach((button, index) => {
  button.addEventListener("click",
    () => {
      card.forEach((cardItem) => {
        if (cardItem.id === button.dataset.idButton) {
          i = true;
          cardItem.quantity += parseInt(document.querySelector(`[data-id-quantity="${button.dataset.idButton}"]`).value);
          count+=parseInt(document.querySelector(`[data-id-quantity="${button.dataset.idButton}"]`).value);
          document.querySelector(".cart-quantity").innerHTML=count;
        }
      });
      if (!i) {
        card.push({ id: button.dataset.idButton, 
          quantity: parseInt(document.querySelector(`[data-id-quantity="${button.dataset.idButton}"]`).value) });
        count+=parseInt(document.querySelector(`[data-id-quantity="${button.dataset.idButton}"]`).value);
        document.querySelector(".cart-quantity").innerHTML=count;
      i = false;
    }
    
});

});  
