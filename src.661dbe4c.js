parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QCba":[function(require,module,exports) {
var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var c in t=arguments[i])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)},t={icon:document.querySelector("div#search i"),input:document.querySelector("div#search input"),onInputClick:function(){return t.active(t.icon.parentElement)},isActive:!1,active:function(e){t.isActive=!t.isActive,t.isActive?e.classList.add("active"):(t.input.value="",e.classList.remove("active"))}};t.icon.addEventListener("click",t.onInputClick);var i={clickCatcher:document.querySelector("div#click-catcher"),nav:document.querySelector("body > nav"),hamburger:document.querySelector("#hamburger"),isActive:!1,listItems:null,activeListItem:null,active:function(){i.isActive=!i.isActive,i.isActive?[i.nav,i.clickCatcher].forEach(function(e){return e.classList.add("active")}):[i.nav,i.clickCatcher].forEach(function(e){return e.classList.remove("active")})},onClickCatcherClick:function(e){console.log("Click catcher click"),e.stopPropagation(),i.active()},hamburgerOnClick:function(){i.active(),console.log("hamburgerOnClick")},navOnClick:function(){i.active()},setActiveListItem:function(e){i.activeListItem.classList.remove("active"),i.activeListItem=e,i.activeListItem.classList.add("active")},listItemClick:function(e){var t=e.target;switch(t.id){case"xd":alert("bap");break;case"?":alert("me")}i.setActiveListItem(t)}};i.listItems=i.nav.querySelectorAll("ul > li"),i.listItems.forEach(function(e){return e.addEventListener("click",i.listItemClick)}),i.activeListItem=i.listItems[0],i.activeListItem.classList.add("active"),i.hamburger.addEventListener("click",i.hamburgerOnClick),i.nav.addEventListener("click",i.navOnClick),i.clickCatcher.addEventListener("click",i.onClickCatcherClick);var n={h1:document.querySelector("header > h1"),makeHeaderAnimatable:function(){var e=n.h1.innerText.trim();n.h1.innerHTML="";for(var t=0,i=e;t<i.length;t++){var c=i[t],s=document.createElement("span");s.innerText=c," "===c&&s.classList.add("empty"),n.h1.appendChild(s)}},date:document.querySelector("header > div#date"),setDate:function(){n.date.innerHTML="\n\t\t\t<small>Today is</small>\n\t\t\t<strong>"+(new Date).toISOString()+"</strong>"}};n.makeHeaderAnimatable(),n.setDate();var c={slideshow:document.querySelector("section#slideshow"),innerSlideshow:null,position:0,num:0,figures:null},s=e(e({},c),{figures:c.slideshow.querySelectorAll("figure"),innerSlideshow:c.slideshow.querySelector("#inner-slideshow"),innerSlideshowTransform:"",controls:{left:c.slideshow.querySelector("#left"),setPosition:function(){var e=s.position;console.log("position: ",e),0===e?s.controls.left.classList.add("inactive"):s.controls.left.classList.remove("inactive"),e===s.num-1?s.controls.right.classList.add("inactive"):s.controls.right.classList.remove("inactive"),s.innerSlideshow.style.transform="translateX(-"+(100*e+50)+"%)"},onLeftClick:function(){console.log("left"),s.position=Math.max(0,--s.position),s.controls.setPosition()},right:c.slideshow.querySelector("#right"),onRightClick:function(){console.log("right"),s.position=Math.min(s.num-1,++s.position),s.controls.setPosition()}}});s.num=s.figures.length,s.controls.setPosition(),["left","right"].forEach(function(e){s.controls[e].addEventListener("click",s.controls["on"+e[0].toUpperCase()+e.slice(1)+"Click"])});
},{}]},{},["QCba"], null)
//# sourceMappingURL=src.661dbe4c.js.map