/**
 * Created by pontu on 2019-01-03.
 */

/*
Javascript file  for the basket functionality.
Takes care of generating all the items that have been "put" in the basket.
Retrieves the items that are saved in local storage and creates img and text descriptions for them.
also adds up the total sum to display to the user.
Also takes care of the functionality for removing items out of the basket or emptying the basket
entirely.
 */
var basket;
var data;
$(document).ready(function() {
  DisplayBasket();

  $("#emptyButton").click(function() {
    basket = [];
    $(window)[0].localStorage.setItem('basket', JSON.stringify(basket));
    DisplayBasket();
  });
});

/*
Function that generates all the image and text that are going to be displayed on the basket page.
retrieves the information from local storage.
Adds the remove item functionality to the remove item button under every basket item.
Also rounds up the total amount that gets displayed to user.
 */
function DisplayBasket() {
  $("#productsHolder").empty();
  data = $(window)[0].localStorage.getItem('basket');
  basket = JSON.parse(data);
  var totalAmount = 0;
  for(var i = 0; i < basket.length; i++) {
    var dataArray = basket[i].split("_");
    var productImage = dataArray[0];
    var productDescription = dataArray[1];
    $("#productsHolder").append("<div> <img src='" + productImage + "'> <br> " + productDescription + " <br><button value='" + basket[i] + "'>Remove this item</button></div>");
    var amount = productDescription.split("£")[1];
    totalAmount += parseFloat(amount);
  }
  $("div button").click(function() {
    var valueToRemove = $(this).attr("value");
    var indexToRemove = basket.indexOf(valueToRemove);
    basket.splice(indexToRemove,1);
    $(window)[0].localStorage.setItem("basket", JSON.stringify(basket));
    DisplayBasket();
  });
  totalAmount = Math.round(totalAmount * 100) / 100;
  $("#totalDisplay").text("Total amount: £" + totalAmount);
}
