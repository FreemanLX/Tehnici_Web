function round_type(ex){
		if(ex < 10)
			 return '0' + ex;
	return ex;

}


function validateEmail(email) {
    const regex = /^\S+@\S+$/;
    if(regex.test(email.toLowerCase())){
		return true;
	}
	
	return false;
}

function verify(){
	var x = document.forms["form_t"];
	for(i = 0; i<x.length; i++){
		if(x[i].value == ""){
		    alert("Something isn't filled or you didn't checked the agreement of data collection.");
		    return false;
		}
	}
	if(validateEmail(document.forms["form_t"]["semail"].value) == false){
		alert("This email doesn't exist.");
		return false;
	}
	var t = document.forms["form_t"]["condition"].value;
	if(t == ""){
        alert("Something isn't filled or you didn't checked the agreement of data collection.");
		return false;
	}
	
	return true;
}

function generate_animation(element){
	var elem = document.getElementById(element);
    elem.style.animationName="fadeIn";
	elem.style.animationDuration="1s";	
}

function lambda_type(){
		datejs = new Date();
		y = datejs.getFullYear();
		m = datejs.getMonth() + 1;
		d = datejs.getDate();
		var inner = document.getElementById("date");
		var h = round_type(datejs.getHours());
		var min = round_type(datejs.getMinutes());
		var s = round_type(datejs.getSeconds());
		inner.innerHTML = "Date: 	" + m + "/" + d + "/" + y + "   	Time: " + h + ":" + min + ":" + s;
}


let menus = ["work", "home", "education", "projects", "about", "contact"]; ///main menus

function update(){ 
   setInterval(lambda_type, 1000);
}
		
function hide(element){
	document.getElementById(element).style.display = "none";
}		

function show(element){
	document.getElementById(element).style.display = "block";
}

function if_is_hidden(element){
	if(document.getElementById(element).style.display == "block")
		  return 0; 
	return 1;
}

function moving_to(element){
	generate_animation(element);
	for(i = 0; i<menus.length; i++){
	     if(if_is_hidden(menus[i]) == 0){
			  hide(menus[i]);
		 }
			 
	}
	if(element != "home"){
		hide("home");
		hide("data");
	}
	show(element);
}			
			  
function hide_wexp(){
	    moving_to("work");
}

function hide_edexp(){
	    moving_to("education");
}

function hide_myprojects(){
	    moving_to("projects");
}

function contact_form(){
	    moving_to("contact");
}

function listen(s){
	   if(s.matches){
			document.getElementById("data").style.display="block";
		}
		else{
			document.getElementById("data").style.display="none";
		}
}

function hide_home(){
	    moving_to("home");
		var s = window.matchMedia("(min-width: 1280px) and (min-height: 900px)");
		listen(s);
		s.addListener(listen);
}
   
function about(){
	    moving_to("about");		
}


var font_t = "";

function change_font_target(evt){	
	evt.target.style.fontFamily = font_t;
	evt.currentTarget.style.fontFamily = font_t;
}

function font_not_installed_do(font){
	 font_t = font;
	 var elems = document.getElementsByTagName("body");
     for(i = 0; i<elems.length; i++){
		  var compStyles = window.getComputedStyle(elems[i]);
		  if(compStyles.getPropertyValue('font-family') != font){
			      if(window.document.documentMode){
			          elems[i].addEventListener('', change_font_target, null);
				  }
                  else{
					  if(font == "Segoe UI"){
					     elems[i].classList.add("new_font_windows");
					  }
					  if(font == "BlinkMacSystemFont"){
						 elems[i].classList.add("new_font_apple_chrome"); 
					  }
					  if(font == "-apple-system"){
						 elems[i].classList.add("new_font_apple"); 				  
					  }
					  if(font == "sans-serif"){
						 elems[i].classList.add("new_font_linux");
					  }
					  
				  }				  
				  
		  }
	 }
	 
	
}

function detect_OS_and_prepare(){
	localStorage.fontSetting = "Segoe UI";
	var OS="";
	if (navigator.appVersion.indexOf("Win")!=-1){
		 OS = "Windows";
	}
	if (navigator.appVersion.indexOf("Mac")!=-1){
		OS="MacOS";
		if((verOffset=navigator.userAgent.indexOf("Chrome")) != -1){
			localStorage.fontSetting = "BlinkMacSystemFont";
		}
		else{
			localStorage.fontSetting = "-apple-system";
		}
	}
	if (navigator.appVersion.indexOf("X11")!=-1){
		OS="UNIX";
		localStorage.fontSetting = "sans-serif";
	}
	if (navigator.appVersion.indexOf("Linux")!=-1){
		OS="Linux";
		localStorage.fontSetting = "sans-serif";
	}
   //alert(OS);
   font_not_installed_do(localStorage.fontSetting);
   localStorage.clear();	
}


var r = 0,
g = 0,
b = 0;

easter_egg_on = 0;
function easter_egg(key){
	if(key.keyCode == "220"){
			var elems = document.querySelector('html');
			document.getElementById("html").style.backgroundImage = 'none';
		    easter_egg_on = 1;
			stop = rainbow(elems);
	}
}

function rainbow(elems){
		if (r <= 255 && g == 0 && b == 0) r++;
		if (r == 255 && b == 0 && g <= 255) g++;
		if (r == 255 && g == 255 && b <= 255) b++;
		if (b == 255 && g == 255 && r > 0) r--;
		if (r == 0 && b == 255 && g > 0)  g--;
		if (r == 0 && g == 0 && b > 0) b--;
		var timer = setTimeout(function() {
			rainbow(elems);
		}, 100);
		elems.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}

window.addEventListener("keydown", easter_egg, false);

