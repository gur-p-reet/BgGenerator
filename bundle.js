(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var css = document.querySelector("h3");
var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn=document.getElementById("genNew");
// console.log(body);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ c1.value 
	+ ", " 
	+ c2.value 
	+ ")";
    css.textContent = body.style.background + ";";  
 }

c1.addEventListener("input", setGradient);
c2.addEventListener("input", setGradient);

function setBg(){

    var col1 = "#"+Math.floor(Math.random()*16777215).toString(16);
    var col2 =  "#"+Math.floor(Math.random()*16777215).toString(16);  
    body.style.background = 
	"linear-gradient(to right, " 
	+ col1 
	+ ", " 
	+ col2 
	+ ")";
	document.querySelector(".color1").setAttribute("value",col1);
	document.querySelector(".color2").setAttribute("value",col2);
	css.textContent = body.style.background + ";";

}

btn.addEventListener("click", setBg)


},{}]},{},[1]);
