// add to cart

var productsCount = document.getElementById ("products-count");
// console.log (productsCount);


var addToCartButtons = document.querySelectorAll(".add-to-cart");
// console.log (addToCartButtons);

for (var i = 0;  i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener ("click", function () {
		// console.log ("clicked") // (reestraciya podii)
		var prevProductsCount = +productsCount.textContent;
		                 // (zchytaty text chastyny elementu)
		productsCount.textContent = prevProductsCount + 1;
	}) 
	
}

// add like

var likedButtons = document.querySelectorAll(".heart");
console.log (likedButtons);


for (var i = 0; i < addToCartButtons.length; i++) {
	likedButtons[i].addEventListener ("click", function () {
	if (this.classList.contains("liked")) {
		this.classList.remove ("liked")
	} else 
		this.classList.add("liked")
	})

}

// slick slider

$('.slider').slick( {
	dots: true,
	autoplay:true,
	autoplaySpeed:10000,
})

// quantity input

var decrementButton = document.querySelectorAll(".decrement-button") [0];
var quantityInput = document.querySelectorAll(".quantity-input") [0];
var incrementButton = document.querySelectorAll(".increment-button") [0];

// console.log (quantityInput.value)

    // vidkluchennya knopky

    

incrementButton.addEventListener ("click", function (){

	var currentValue = +quantityInput.value
    var nextValue = currentValue + 1
    // console.log (nextValue)
    quantityInput.value = nextValue
})

decrementButton.addEventListener ("click", function (){

	var currentValue = +quantityInput.value
    var nextValue = currentValue - 1
    // console.log (nextValue)
    quantityInput.value = nextValue
})