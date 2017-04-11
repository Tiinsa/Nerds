

var link = document.querySelector(".footer-contacts a.btn");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".feedback-circle-btn");
var login = document.querySelector("#feedback-login");
var email = document.querySelector("#feedback-email");
var textarea = document.querySelector("#feedback-textarea");
var form = popup.querySelector("form");
var storageLogin = localStorage.getItem("login", login.value);
var storageEmail = localStorage.getItem("email", email.value);


link.addEventListener("click", function(event) {
	event.preventDefault();
    popup.classList.remove("feedback-error");
    popup.classList.add("feedback-shown");
	popup.classList.add("feedback-show");
	if (storageLogin) {
        login.value = storageLogin;
        if (storageEmail) {
        	email.value = storageEmail;
        	textarea.focus();
        }
        else {
        	email.focus();
        }
    } 
    else {
        login.focus();
    }
})

close.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.remove("feedback-shown");
})

form.addEventListener("submit", function(event){
    if (!(login.value&&email.value&&textarea.value)) {
        event.preventDefault();
        popup.classList.remove("feedback-show");
        popup.classList.remove("feedback-error");
        // void popup.offsetWidth;
        // popup.classList.add("feedback-error");
        setTimeout(function() {popup.classList.add("feedback-error");}, 10);
        // popup.classList.add("feedback-error");
        // setTimeout(function() {popup.classList.remove("feedback-error");}, 10);
    } else {
		localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value);
	}

})

window.addEventListener("keydown", function(event){
	if (event.keyCode === 27) {
		if (popup.classList.contains("feedback-shown")) {
			popup.classList.remove("feedback-shown");
		}
	}
})


function initialize() {
    var x = 59.9386115;
    var y = 30.3235393;
    var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(x+0.0005, y-0.0035),
        scrollwheel: false,
		disableDefaultUI: true
    }
    var map = new  google.maps.Map(
        document.querySelector(".map-script"),
        mapOptions
    );
    var image = "img/marker.png"; 
    var myLatLng = new google.maps.LatLng(x, y);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
google.maps.event.addDomListener(window, "load", initialize);