(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();//! 1 ------ Асинхронність -------
const i=document.querySelector("btn-10"),l=()=>{const n=setTimeout(()=>{console.log("I love async JS")},2e3);console.log(n)};i.addEventListener("click",l);//! 2 ------ -------
//! 3 ------ -------
//! 4 ------ -------
//! 5 ------ -------
//# sourceMappingURL=index.js.map
