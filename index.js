import{a as y,S as O,i}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();y.create({baseURL:"https://pixabay.com/api",url:"/"});async function g(e,r){const a={key:"55064967-1c5dabe6bc7cd06c1c4335f3a",image_type:"photo",q:e,orientation:"horizontal",safesearch:!0,per_page:15,page:r};return(await y.get("https://pixabay.com/api/",{params:a})).data}const $=document.querySelector(".gallery"),h=document.querySelector(".the_loader"),b=document.querySelector(".load");new O(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function L(e){return e.map(D).join("")}function D(e){return`<li class="gallery-item">
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
      </li>`}function P(){$.innerHTML=""}function v(){h.classList.add("loader")}function l(){h.classList.remove("loader")}function w(){b.classList.remove("hidden")}function u(){b.classList.add("hidden")}let d,s,c;const x=document.querySelector(".form"),I=document.querySelector(".load"),S=document.querySelector(".gallery"),p=document.querySelector(".js-target");I.addEventListener("click",M);x.addEventListener("submit",R);async function R(e){if(e.preventDefault(),u(),v(),P(),s=1,d=new FormData(e.target).get("search-text").trim(),d==""){l();return}m.unobserve(p);try{const a=await g(d,s);c=Math.ceil(a.totalHits/15),c===0&&(l(),i.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}));const n=L(a.hits);S.innerHTML=n}catch{i.error({title:"Error",message:err.message})}l(),s>=c?(u(),i.show({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"})):w(),q()}async function M(){u(),v(),s+=1,m.unobserve(p);try{const e=await g(d,s),r=L(e.hits);S.insertAdjacentHTML("beforeend",r)}catch{console.log("whyyy"),i.error({title:"Error"})}l(),q(),s>=c?(u(),i.show({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"})):w()}const m=new IntersectionObserver(e=>{e[0].isIntersecting&&(console.log("Викликаю onLoadMore"),M())});function q(){console.log("Перевірка чи треба вирубати onLoadMore"),s>=c?(m.unobserve(p),console.log("Вирубили onLoadMore")):(console.log("Підняли onLoadMore"),m.observe(p))}
//# sourceMappingURL=index.js.map
