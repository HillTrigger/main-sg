(()=>{var e,t={1183:()=>{const e=document.querySelector(".footer__arrow-up"),t=document.querySelector(".footer__mobile-arrow-up");function r(){window.scrollTo({top:0,behavior:"smooth"})}e.addEventListener("click",r),t.addEventListener("click",r),window.addEventListener("scroll",(()=>{0===window.scrollY?e.style.display="none":e.style.display="block"})),0===window.scrollY&&(e.style.display="none")},1859:()=>{const e=document.querySelector(".footer__main"),t=document.querySelector(".footer__inner");function r(){const r=t.offsetHeight;e.style.height="".concat(r,"px");const o=window.innerHeight;t.style.position=r>o?"relative":"fixed"}document.addEventListener("DOMContentLoaded",r),window.addEventListener("resize",r)},6463:(e,t,r)=>{"use strict";function o(){document.querySelector(".header__top-input").classList.remove("header__top-input--active")}const c=document.querySelector(".header__search"),n=document.querySelector(".header__top-input"),a=document.querySelector(".header__search-close");function s(){let e=document.querySelector(".header__dropdown-arrow");document.querySelector(".header__contacts").classList.add("hidden"),e.classList.remove("header__dropdown-arrow--open")}function d(e){e.classList.remove("header__top-inner--active")}c.addEventListener("click",(()=>{n.classList.add("header__top-input--active"),setTimeout((()=>{n.focus()}),1e3)})),a.addEventListener("click",(()=>{o()}));let i=0,l=document.querySelector(".header__top"),u=document.querySelector(".header__top-inner");const _=document.querySelector(".header__burger");function h(e){return e*parseFloat(getComputedStyle(document.documentElement).fontSize)}const m=document.querySelector(".header__burger"),p=document.querySelector(".header__side-menu"),y=document.querySelector(".header__top-inner"),f=document.querySelector(".header__menu"),v=document.querySelector("body");function g(e){document.querySelector(".side-menu__search").classList.remove("side-menu__search--active")}const S=document.querySelector(".header__burger"),q=document.querySelector(".header__side-menu"),L=document.querySelector(".header__top-inner"),w=document.querySelector(".header__menu"),b=document.querySelector("body");function k(){0==window.scrollY&&d(L),S.classList.remove("header__burger--active"),q.classList.remove("header__side-menu--active"),w.classList.remove("header__menu--side-bar-open"),g(),b.classList.remove("lock"),w.style.paddingRight="".concat(h(1.125),"px"),b.style.paddingRight=0}window.addEventListener("scroll",(function(){let e=window.scrollY;e>i?l.classList.add("hidden-top"):e<i&&l.classList.remove("hidden-top"),i=e,e>0?function(e){e.classList.add("header__top-inner--active")}(u):_.classList.contains("header__burger--active")||d(u),s(),o()}));let E=document.querySelector(".header__dropdown"),x=document.querySelector(".header__dropdown-arrow"),O=document.querySelector(".header__contacts");E.addEventListener("click",(e=>function(e,t,r){e.stopPropagation(),e.target.closest(".header__contacts")||(t.classList.contains("hidden")?function(e,t){e.classList.remove("hidden"),t.classList.add("header__dropdown-arrow--open")}(t,r):function(e,t){e.classList.add("hidden"),t.classList.remove("header__dropdown-arrow--open")}(t,r))}(e,O,x)));const j=document.querySelector(".header__search"),T=document.querySelector(".header__top-input"),A=document.querySelector(".header__burger"),M=document.querySelector(".header__side-menu");A.addEventListener("click",(e=>{A.contains(e.target)&&(A.classList.contains("header__burger--active")?k():function(){const e=window.innerWidth-document.documentElement.clientWidth;m.classList.add("header__burger--active"),p.classList.add("header__side-menu--active"),y.classList.add("header__top-inner--active"),f.classList.add("header__menu--side-bar-open"),v.classList.add("lock"),f.style.paddingRight="".concat(e+h(1.125),"px"),v.style.paddingRight="".concat(e,"px")}())}));const C=document.querySelector(".header__top-inner");document.addEventListener("click",(function(e){O.contains(e.target)||e.target===E||s(),T.contains(e.target)||j.contains(e.target)||o(),M.contains(e.target)||A.contains(e.target)||C.contains(e.target)||k()}));let H=document.querySelector(".header__pagination-current"),P=document.querySelector(".header__bg"),R=2;document.querySelector(".header__pagination").addEventListener("click",(function(e){let t=e.target.closest(".header__pagination-page");if(t){let e=t.dataset.page;P.classList.remove("header__bg--".concat(R)),P.offsetWidth,P.classList.add("header__bg--".concat(e)),R=e,document.querySelector(".header__pagination-page--active").classList.remove("header__pagination-page--active"),t.classList.add("header__pagination-page--active"),H.textContent="0"+e;let r=document.querySelector(".header__title--active"),o=document.querySelector(".header__title--".concat(e));r.classList.remove("header__title--active"),o.classList.add("header__title--active");let c=document.querySelector(".header__sub-title--active"),n=document.querySelector(".header__sub-title--".concat(e));c.classList.remove("header__sub-title--active"),n.classList.add("header__sub-title--active")}})),["./assests/header/headerMain/back1.jpg","./assests/header/headerMain/back2.jpg","./assests/header/headerMain/back3.jpg","./assests/header/headerMain/back4.jpg"].forEach((e=>{(new Image).src=e}));const W=document.querySelector(".side-menu__search-close"),Y=document.querySelector(".header__search-mobile");W.addEventListener("click",g),Y.addEventListener("click",(function(e){document.querySelector(".side-menu__search").classList.add("side-menu__search--active")}));var z=r(4555),I=r.n(z);new(I())({el:document.querySelector(".odometor-stats--1"),value:11,format:"",theme:"default"}),new(I())({el:document.querySelector(".odometor-stats--2"),value:9,format:"(,ddd),d",theme:"default"}),new(I())({el:document.querySelector(".odometor-stats--3"),value:111,format:"(,ddd)",theme:"default"});r(2367);let F,V=h(17.625);function B(){clearTimeout(F);let e=document.querySelectorAll(".populars__card");F=setTimeout((()=>{for(let t of e){let e=.73*t.offsetWidth,r=t.querySelector(".populars__filter");e<=V?(t.style.height="".concat(V,"px"),r.style.height="".concat(V,"px")):(t.style.height="".concat(e,"px"),r.style.height="".concat(e,"px"))}}),200)}B(),window.addEventListener("resize",B);var D=r(8094),G=r(8582);let J=h(36);console.log(J);new D.A(".forecast__cards",{modules:[G.Vx],slidesPerView:1,width:h(16.375),navigation:{nextEl:".forecast__right-btn",prevEl:".forecast__left-btn"},simulateTouch:!1,spaceBetween:h(2.75),slidesPerGroup:1,centeredSlides:!1,breakpoints:{[+J]:{width:h(26.75)}}});r(1859);const K=document.querySelector(".switch__input"),N=document.querySelectorAll(".checkbox__inp"),Q=document.querySelector(".subscribe__settings");K.addEventListener("change",(function(){if(this.checked)for(let e of N)e.checked=!0;else for(let e of N)e.checked=!1})),Q.addEventListener("click",(e=>{if(e.target.closest(".subscribe__switch"))return;const t=Array.from(N).every((e=>e.checked));Array.from(N).every((e=>!e.checked));K.checked=!!t}));r(1183);let U=new IntersectionObserver((function(e){e.forEach((e=>{if(e.isIntersecting){let t=e.target;if(t.classList.add("element-show"),t.classList.contains("stats__stat"))switch(+t.dataset.index){case 1:return void(t.querySelector(".odometor-stats--1").innerHTML=25);case 2:t.querySelector(".odometor-stats--2").innerHTML=1.2;break;case 3:return void(t.querySelector(".odometor-stats--3").innerHTML=378);default:return}t.classList.contains("strategies__title")&&t.querySelector(".strategies__line").classList.add("element-show"),t.classList.contains("populars__main-title")&&t.querySelector(".populars__line").classList.add("element-show"),t.classList.contains("forecast__card-title")&&t.querySelector(".populars__line").classList.add("element-show")}}))}),{threshold:[.3]}),X=[...document.querySelectorAll(".stats__stat"),document.querySelector(".strategies__title"),...document.querySelectorAll(".strategies__card"),document.querySelector(".populars__main-title"),...document.querySelectorAll(".populars__card"),document.querySelector(".populars__all-products"),document.querySelector(".forecast__top"),...document.querySelectorAll(".forecast__card"),document.querySelector(".main__subscribe"),document.querySelector(".main__question")];for(let e of X)U.observe(e)}},r={};function o(e){var c=r[e];if(void 0!==c)return c.exports;var n=r[e]={exports:{}};return t[e].call(n.exports,n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,r,c,n)=>{if(!r){var a=1/0;for(l=0;l<e.length;l++){for(var[r,c,n]=e[l],s=!0,d=0;d<r.length;d++)(!1&n||a>=n)&&Object.keys(o.O).every((e=>o.O[e](r[d])))?r.splice(d--,1):(s=!1,n<a&&(a=n));if(s){e.splice(l--,1);var i=c();void 0!==i&&(t=i)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[r,c,n]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var c,n,[a,s,d]=r,i=0;if(a.some((t=>0!==e[t]))){for(c in s)o.o(s,c)&&(o.m[c]=s[c]);if(d)var l=d(o)}for(t&&t(r);i<a.length;i++)n=a[i],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(l)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=o.O(void 0,[681],(()=>o(6463)));c=o.O(c)})();