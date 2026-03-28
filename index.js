import{a as h,S as P,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&f(p)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function f(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();h.create({baseURL:"https://pixabay.com/api",url:"/"});async function g(e,o){const s={key:"55064967-1c5dabe6bc7cd06c1c4335f3a",image_type:"photo",q:e,orientation:"horizontal",safesearch:!0,per_page:15,page:o};return(await h.get("https://pixabay.com/api/",{params:s})).data}const y=document.querySelector(".gallery"),b=document.querySelector(".the_loader"),v=document.querySelector(".load");let L=new P(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function $(e){const o=e.map(w).join("");y.innerHTML=o,L.refresh()}function D(e){const o=e.map(w).join("");y.insertAdjacentHTML("beforeend",o),L.refresh()}function w(e){return`<li class="gallery-item">
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
      </li>`}function R(){y.innerHTML=""}function S(){b.classList.add("loader")}function c(){b.classList.remove("loader")}function q(){v.classList.remove("hidden")}function d(){v.classList.add("hidden")}let l,a,i;const j=document.querySelector(".form"),x=document.querySelector(".load"),E=document.querySelector(".gallery"),u=document.querySelector(".js-target");x.addEventListener("click",M);j.addEventListener("submit",I);async function I(e){if(e.preventDefault(),d(),S(),R(),a=1,l=new FormData(e.target).get("search-text").trim(),l==""){c();return}m.unobserve(u);try{const s=await g(l,a);i=Math.ceil(s.totalHits/15),i===0&&(c(),n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"})),$(s.hits)}catch(s){n.error({title:"Error",message:s.message})}c(),a>=i?(d(),n.show({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"})):q(),O()}async function M(){d(),S(),a+=1,m.unobserve(u);try{const e=await g(l,a);D(e.hits)}catch{console.log("whyyy"),n.error({title:"Error"})}c(),O(),k(),a>=i?(d(),n.show({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"})):q()}const m=new IntersectionObserver(e=>{e[0].isIntersecting&&(console.log("Викликаю onLoadMore"),M())});function O(){a>=i?m.unobserve(u):m.observe(u)}function k(){const o=E.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
