/*
var myArr = [7,7,7,7,7,6,5,4,3,5,6,7676,666,666,5];

var newSimpleObject = new SimpleObject(myArr);
console.log(newSimpleObject.array);

newSimpleObject.each(function(index, element){
	console.log("this is awesome!" + index + element + "great");
});

var tzviFoo = new Foo("tzvi");
var heshyFoo = new Foo("heshy");
var mendyFoo = new Foo("mendy");
console.log(tzviFoo);
console.log(heshyFoo);
console.log(mendyFoo);
document.write(tzviFoo.name +"<br>");
document.write(heshyFoo.name +"<br>");
document.write(mendyFoo.name +"<br>");
var newBar = new Bar("crazy", 1000);
console.log(Bar("tzvi", 742));
console.log(Bar("mendy", 541));
console.log(Bar("mendy", 1091));

console.log("newBar" + newBar.name, newBar.address);

function Foo(name){
	this.name = name;
}

function Bar(name, address){
	return {name: name, address: address};
}
*/

 function Styles() {
	this.html = (el, arg) => {
		el.innerHTML = arg;
	};

	this.css = (element, attr, val) => {
		element.style[attr] = val;
	};
}

var style =  new Styles();

function SimpleObject(collection, each){
	this.collection = collection;
	this.each = function(func){
		let i = 0;
			while(i < this.collection.length){
			(func)(this.collection[i], i);
		i += 1;
   	  }
 	};
 	this.eachOne = function(collection, func){
 		let i = 0;
		while(i < collection.length){
			(func)(collection[i], i);
			i += 1;
 		}
  	};
 }

function hasClass(arg, match){
	return arg.className === match;
}



function matchClass(arg){
	return arg.classList;
}


function Jquery(){
	this.arg = "";
    this.doc = function(arg){
    	var selector;
		if (typeof arg !== "string"){
			this.arg = arg;
		} else {
		var name = arg.slice(1, arg.length);
		switch(arg[0]){
		case "#":
			this.arg =  document.getElementById(name);
		break;

		case ".":
			this.arg = document.getElementsByClassName(name);
		break;

		default:
			this.arg = document.getElementsByTagName(arg);
		break;
  		}
 	  }
 	  return this;
 	};

 	this.html = function(text){
		this.arg.innerHTML = text;
		return this;
	};

	this.addClass = function(match){
		this.arg.className = match;
		return this;
	}
	this.css = function(attr, val){
		this.arg.style[attr] = val;
		return this;
	};


}
var $ =  new Jquery();
$.doc("#hello")
	.html("Ccrv");

$.doc("#hello")
	.addClass("class2")
	.html("ajrnvqerv")
	.css("background", "black");


//var mine = new SimpleObject();


/*

function idx (element, index){
	return element[index];
}
console.log(document.getElementsByClassName
	("goodbye")[0].className + "hello there");
console.log($("div"));
console.log(hasClass($('.goodbye')[0], "goodbye"));
console.log(addClass($('.goodbye')[0], "class2"));
console.log(matchClass($(".goodbye")[0]));

*/


/*

mine.eachOne($(".goodbye"), function(el, index){
	el.style.backgroundColor = "blue";
	el.style.color  = "white";
	el.style.borderRadius = "10px";
	el.style.padding = "10px";
	el.style.margin = "10px";
	
});

*/



