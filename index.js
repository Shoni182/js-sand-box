(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();//! 1 ------ Колбек-функції -------
//! 2 ------ Стрілочні функції -------
//! 3 ------ Методи map і flatMap -------
const l=[{ship:"Green",health:100},{ship:"Yellow",health:43},{ship:"Dragon",health:60},{ship:"Star Crush",health:100},{ship:"Tiger",health:33},{ship:"Beta",health:70}],c=l.map(s=>s.health);console.log(c);//! 4 ------ Методи filter і find -------
//! 5 ------ Методи every, some і reduce -------
//! 6 ------  Метод toSorted-------
//# sourceMappingURL=index.js.map
