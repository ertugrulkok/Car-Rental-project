const carlenght = document.getElementById("lenghtofcars");

function ready() {
  var addToCartButtons = document.getElementsByClassName("btn");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }
  var carCol = document.getElementsByClassName("col");
  for (var i = 0; i < carCol.length; i++) {
    var selector = carCol[i];
  }
  carlenght.innerHTML = $(".col:visible").length;
}

ready();

function myFunction() {
  var X = document.getElementsByClassName("expensive");
  var checkBox = document.getElementById("flexCheckChecked");
  for (i = 0; i < X.length; i++) {
  if (checkBox.checked == true) {
          X[i].style.display = "none";
    }
   else {
         X[i].style.display = "block";
    
  }
  ready();
}}
function myFunction1() {
  var X = document.getElementsByClassName("auto");
  var checkBox = document.getElementById("flexCheckDefault");
  if (checkBox.checked == true) {
    for (i = 0; i < X.length; i++) {
      X[i].style.display = "none";
    }
  } else {
    for (i = 0; i < X.length; i++) {
      X[i].style.display = "block";
    }
  }
  ready();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement;
  var title = shopItem.getElementsByClassName("card-title")[0].innerText;
  var price = shopItem.getElementsByClassName("price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("card-img-top")[0].src;

  popUp(title, price, imageSrc);
}

function popUp(title, price, imageSrc) {
  var model = document.getElementById("model");
  var money = document.getElementById("price");
  var image = document.getElementById("d-block");
  model.innerHTML = title;
  money.innerHTML = price;
  image.src = imageSrc;
}
$('#Date1').val(new Date().toJSON().slice(0,10));
$('#Date2').val(new Date().toJSON().slice(0,10));