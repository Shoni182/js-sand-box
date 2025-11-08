(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();//! 1 ------ Формат JSON -------
//! 2 ------  Вебсховище -------
const n=document.querySelector(".feedback-form"),c="goit-example-message";n.addEventListener("input",r=>{localStorage.setItem(c,r.target.value)});n.addEventListener("submit",r=>{r.preventDefault(),console.log(r.target.elements.message.value),localStorage.removeItem(c),n.reset()});//! 3 ------ -------
//! 4 ------ -------
//! 5 ------ -------
//# sourceMappingURL=index.js.map
