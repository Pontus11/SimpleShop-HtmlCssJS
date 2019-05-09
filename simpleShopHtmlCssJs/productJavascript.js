/**
 * Created by pontu on 2019-01-03.
 */
/*
Javascript file that takes care of the product page functionality.
Displays the product image and description of the item the user clicked on that was stored in
the local storage.
Also takes care of the functionality and animation of adding items to the basket.
 */
$(document).ready(function() {
  var image = $(window)[0].localStorage.getItem('productImage');
  var description = $(window)[0].localStorage.getItem('productDescription');

  var data = $(window)[0].localStorage.getItem('basket');
  var basket = JSON.parse(data);

  $("#productImage").attr('src', image);
  $("#hiddenImage").attr('src', image);
  $("#productDescription").text(description);


  /*
  Function for adding items to basket. Takes care of adding the product image and description
  to the array of basket items saved in local storage.
  Also takes care of the add item to basket animation that makes the item "fly" to the
  top right corner.
   */
  var addingToBasket = false;
  $("#addButton").click(function() {
    if(addingToBasket == false) {
      addingToBasket = true;
      basket.push(image + "_" + description);
      $(window)[0].localStorage.setItem('basket', JSON.stringify(basket));

      $("#hiddenImage").css("visibility", "visible");
      $("#hiddenImage").animate({
        top: '0%',
        right: '6%',
        width: '2%'
      }, 800, function () {
        $("#hiddenImage").css({
          visibility: 'hidden',
          top: '13%',
          right: '35%',
          width: '30%'
        });
        addingToBasket = false;
      });
    }
  });
});
