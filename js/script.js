
var btnEntry = document.querySelector('.main-navigation-login');
var btnMap = document.querySelector('.show-map');
var btnCloseLogin = document.querySelector('.modal-login .modal-close');
var btnCloseMap = document.querySelector('.modal-map .modal-close');
var popupLogin = document.querySelector('.modal-login');
var popupMap = document.querySelector('.modal-map');

var form = popupLogin.querySelector('.form-login');
var inputLogin = popupLogin.querySelector('.text-input-login');
var inputPassword = popupLogin.querySelector('.text-input-password');

var btnPrevious = document.querySelector('.button-previous');
var btnNext = document.querySelector('.button-next');
var slider = document.querySelector('.slider');
if (slider) {
	var prevImages = slider.querySelectorAll('a');
	var currentImg = prevImages.length;
}



var btnDisabler = function(){
	if (currentImg >= prevImages.length) {
		btnPrevious.classList.add('button-disabled');
	} else {
		btnPrevious.classList.remove('button-disabled');
	}

	if (currentImg == 1) {
		btnNext.classList.add('button-disabled');
	
	} else {
		btnNext.classList.remove('button-disabled');
	}
}
	

btnEntry.addEventListener('click', function(evt){
	evt.preventDefault();
	popupLogin.classList.remove('modal--arrive');
	popupLogin.offsetWidth = popupLogin.offsetWidth;
	popupLogin.classList.add('modal--show');
	popupLogin.classList.add('modal--arrive');

});

form.addEventListener('submit', function(evt){
	if (!inputLogin.value || !inputPassword.value){
		evt.preventDefault();
		popupLogin.classList.remove('login--stress');
		popupLogin.offsetWidth = popupLogin.offsetWidth;
		popupLogin.classList.add('login--stress');
	}
});

btnMap.addEventListener('click', function(evt){
	evt.preventDefault();
	popupMap.classList.add('modal--show');
});

btnCloseLogin.addEventListener('click', function(evt){
	evt.preventDefault();
	popupLogin.classList.remove('modal--show');
		popupLogin.classList.remove('modal--arrive');
		popupLogin.classList.remove('login--stress');
});

window.addEventListener('keydown', function(evt){
	if (evt.keyCode == 27 && (popupMap.classList.contains('modal--show') || popupLogin.classList.contains('modal--show'))){
		popupMap.classList.remove('modal--show');
		popupLogin.classList.remove('modal--show');
		popupLogin.classList.remove('modal--arrive');
		popupLogin.classList.remove('login--stress');
		evt.preventDefault();
	}
});

btnCloseMap.addEventListener('click', function(evt){
	evt.preventDefault();
	popupMap.classList.remove('modal--show');
});
if (btnNext && btnPrevious){
btnNext.addEventListener('click', function(evt){
	evt.preventDefault();
	
	if (currentImg !== 1) {
		for (var i=0; i < prevImages.length; i++){
		prevImages[i].classList.remove('z-ind');
		}
		currentImg--;
		prevImages[currentImg-1].classList.add('z-ind');
	}
	btnDisabler();	
});
btnPrevious.addEventListener('click', function(evt){
	evt.preventDefault();
	if (currentImg < prevImages.length) {

		for (var i=0; i < prevImages.length; i++){
		prevImages[i].classList.remove('z-ind');
		}
		currentImg++;
		prevImages[currentImg-1].classList.add('z-ind');
	} 
	btnDisabler();
});
btnDisabler();
}
	
	

