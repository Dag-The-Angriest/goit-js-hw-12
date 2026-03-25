import{a as m,S as w,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();m.create({baseURL:"https://pixabay.com/api",url:"/"});async function f(e,r){const s={key:"55064967-1c5dabe6bc7cd06c1c4335f3a",image_type:"photo",q:e,orientation:"horizontal",safesearch:!0,per_page:15,page:r};return(await m.get("https://pixabay.com/api/",{params:s})).data}const S=document.querySelector(".gallery"),y=document.querySelector(".the_loader"),h=document.querySelector(".load");new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(e){return e.map(q).join("")}function q(e){return`<li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
              <img
                class="gallery-image"
                src="${e.webformatURL}"
                alt="${e.tags}"
              /> 
          </a>
          <div class="flex">
                <div>
                    <p class="bold">Likes</p>
                    <p >${e.likes}</p>
                </div>
                <div>
                    <p class="bold">Views</p>
                    <p >${e.views}</p>
                </div>
                <div>
                    <p class="bold">Comments</p>
                    <p >${e.comments}</p>
                </div>
                <div>
                    <p class="bold">Downloads</p>
                    <p >${e.downloads}</p>
                </div>
              </div>
      </li>`}function M(){S.innerHTML=""}function b(){y.classList.add("loader")}function c(){y.classList.remove("loader")}function L(){h.classList.remove("hidden")}function u(){h.classList.add("hidden")}let l,a,d;const $=document.querySelector(".form"),D=document.querySelector(".load"),v=document.querySelector(".gallery");D.addEventListener("click",x);$.addEventListener("submit",P);async function P(e){if(e.preventDefault(),u(),b(),M(),a=1,l=new FormData(e.target).get("search-text").trim(),l==""){c();return}try{const s=await f(l,a);d=Math.ceil(s.totalHits/15),d===0&&(c(),n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}));const i=g(s.hits);v.innerHTML=i}catch{n.error({title:"Error",message:err.message})}c(),a>=d?(u(),n.show({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"})):L()}async function x(){u(),b(),a+=1;try{const e=await f(l,a),r=g(e.hits);v.insertAdjacentHTML("beforeend",r)}catch{console.log("whyyy"),n.error({title:"Error"})}c(),a>=d?(u(),n.show({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"})):L()}
//# sourceMappingURL=index.js.map
