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