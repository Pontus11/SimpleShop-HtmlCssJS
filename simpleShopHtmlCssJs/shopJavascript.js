/**
 * Created by pontu on 2019-01-03.
 */
/*
Javascript file for the functionality of the shop page.
Takes care of loading all images and descriptions into arrays.
depending on the users sort preference it then adds the images and descriptions inside divs to the page.

 */
var preloadedMugImages = ['geniusMug.png', 'homeMug.png', 'caffeineMug.png'];
var mugImages = [];
for (var i = 0; i < preloadedMugImages.length; i++) {
  mugImages[i] = new Image();
  mugImages[i].src = preloadedMugImages[i];
}
var mugDescriptions = ['Genius Mug - £15.99', 'Home Mug - £19.99', 'Caffeine Mug - £29.99'];

var preloadedFruitImages = ['redApple.png', 'goldenApple.png', 'greenApple.png'];
var fruitImages = [];
for (var i = 0; i < preloadedFruitImages.length; i++) {
  fruitImages[i] = new Image();
  fruitImages[i].src = preloadedFruitImages[i];
}
var fruitDescriptions = ['Red Apple - £0.99', 'Golden Apple - £1.59', 'Green Apple - £0.49'];

var preloadedDecorationImages = ['pillow.png', 'sheep.png', 'ragdoll.png', 'penguin.png'];
var decorationImages = [];
for (var i = 0; i < preloadedDecorationImages.length; i++) {
  decorationImages[i] = new Image();
  decorationImages[i].src = preloadedDecorationImages[i];
}
var decorationDescriptions = ['Giraffe Pillow - £29.99', 'Sheep - £39.99', 'Rag Doll - £59.99', 'Penguin - £299.99'];

/*
Sets the sort type for the shop page based of the history state that was pushed if user
clicked a specific sub option under shop
 */
$(document).ready(function() {
  if(history.state == 0) {
    $("#sortType").val("Everything");
  }
  else if(history.state == 1) {
    $("#sortType").val("Decoration");
  }
  else if(history.state == 2) {
    $("#sortType").val("Fruit");
  }
  else if(history.state == 3) {
    $("#sortType").val("Mugs");
  }
  displayProducts();

  if($("#sortType").change(function() {
    displayProducts();
  }));
});

/*
Function used to display items on shop page. If everything is selected all items are displayed by creating images and text for everything in the arrays.
If a sub option has been selected only that type of item is generated.
 */
function displayProducts() {
  $("#productsDiv").empty();

  if($("#sortType").val() == "Everything") {
    for (var a = 0; a < mugImages.length; a++) {
      var imageSrc = mugImages[a].src;
      var productDescription = mugDescriptions[a];
      $("#productsDiv").append("<div> <img src='" + imageSrc + "'> " + productDescription + "</div>");
    }
    for (var b = 0; b < fruitImages.length; b++) {
      var imageSrc = fruitImages[b].src;
      var productDescription = fruitDescriptions[b];
      $("#productsDiv").append("<div> <img src='" + imageSrc + "'> " + productDescription + "</div>");
    }
    for (var c = 0; c < decorationImages.length; c++) {
      var imageSrc = decorationImages[c].src;
      var productDescription = decorationDescriptions[c];
      $("#productsDiv").append("<div> <img src='" + imageSrc + "'> " + productDescription + "</div>");
    }
  }
  else if($("#sortType").val() == "Mugs") {
    for (var d = 0; d < mugImages.length; d++) {
      var imageSrc = mugImages[d].src;
      var productDescription = mugDescriptions[d];
      $("#productsDiv").append("<div> <img src='" + imageSrc + "'> " + productDescription + "</div>");
    }
  }
  else if($("#sortType").val() == "Fruit") {
    for (var e = 0; e < fruitImages.length; e++) {
      var imageSrc = fruitImages[e].src;
      var productDescription = fruitDescriptions[e];
      $("#productsDiv").append("<div> <img src='" + imageSrc + "'> " + productDescription + "</div>");
    }
  }
  else if($("#sortType").val() == "Decoration") {
    for (var f = 0; f < decorationImages.length; f++) {
      var imageSrc = decorationImages[f].src;
      var productDescription = decorationDescriptions[f];
      $("#productsDiv").append("<div> <img src='" + imageSrc + "'> " + productDescription + "</div>");
    }
  }
  /*
  If a product is clicked the product image and description is saved to local storage.
  User is then redirected to product page.
   */
  $("div div").click(function() {
    $(window)[0].localStorage.setItem('productImage', $(this).find("img").attr('src'));
    $(window)[0].localStorage.setItem('productDescription', $(this).text());
    $(window)[0].location.href = "productHtml.html"
  });
}
