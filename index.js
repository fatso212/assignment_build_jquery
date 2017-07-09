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

function addClass(arg, match){
	arg.className = match;
	console.log(hasClass(arg, match));
}

function matchClass(arg){
	return arg.classList;
}

function $(arg){

	if (typeof arg !== "string"){
		return arg;
	} else {
	var name = arg.slice(1, arg.length);
	var selector;
	switch(arg[0]){
	case "#":
		return document.getElementById(name);
	break;

	case ".":
		return  document.getElementsByClassName(name);
	break;

	default:
		return document.getElementsByTagName(arg);
	break;
  }
 }
}

//var mine = new SimpleObject();
style.html($(".goodbye")[0], "what the heck");
style.css($(".goodbye")[0], "border", "1px solid black");
style.css($(".goodbye")[1], "color", "orange");
style.css($(".goodbye")[2], "color", "red");
style.css($(".goodbye")[3], "color", "blue");


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



