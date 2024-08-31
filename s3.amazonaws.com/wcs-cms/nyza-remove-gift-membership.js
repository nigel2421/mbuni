function docReady(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(fn, 1);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

docReady(function() {
	// Add Gift Membership to Top Description 
	var description = document.querySelector('[itemprop=description]');
	description.insertAdjacentHTML('afterend', '<br><br><strong>Looking to give the gift of membership?</strong> <a href="https://bronxzoo.com/shop/catalogs/gift-membership">Purchase a gift Membership here.</a><br><br><strong>Already a Member?</strong> <a href="https://wcsmembers.com/">Find your benefit and renewal information here.</a>');
	
	// Change Top Container Size
	var container = document.getElementsByClassName("pad-2-horizontal-medium");
	console.log(container);
	container[0].classList.add("container-small");
	container[0].classList.remove("container-extra-small");
	
	// Remove Gift Checkboxes
	var giftCheckbox = document.getElementsByClassName("membership-table__header__form__checkbox");
	
	for (var i = 0; i < giftCheckbox.length; i++) {
		giftCheckbox[i].style.display="none";
	}
});
    