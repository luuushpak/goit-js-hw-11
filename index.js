import{a as d,S as p,i as a}from"./assets/vendor-dgoA7Xew.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function g(s){const r="https://pixabay.com/api/",n={key:"54460164-6af4a3dc8428f1e90ebc46cf5",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(r,{params:n}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new p(".gallery a");function h(s){const r=s.map(n=>{const{largeImageURL:o,webformatURL:e,tags:t,likes:i,views:u,comments:f,downloads:m}=n;return`<li class="gallery-item">
    <a href="${o}" class="gallery-link">
      <img
        src="${e}"
        alt="${t}"
        class="gallery-image"
      />
    </a>

    <div class="info">
      <p>Likes ${i}</p>
      <p>Views ${u}</p>
      <p>Comments ${f}</p>
      <p>Downloads ${m}</p>
    </div>
  </li>`}).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){c.innerHTML=""}function b(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}const S=document.querySelector(".form");S.addEventListener("submit",v);function v(s){s.preventDefault();const r=s.currentTarget,n=r.elements["search-text"].value.trim();if(n===""){a.warning({message:"Value cannot be an empty string",position:"topRight"});return}L(),b(),g(n).then(o=>{if(o.hits.length===0)throw new Error;h(o.hits)}).catch(()=>{a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{w(),r.reset()})}
//# sourceMappingURL=index.js.map
