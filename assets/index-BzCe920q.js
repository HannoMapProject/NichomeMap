var x=Object.defineProperty;var v=(i,t,n)=>t in i?x(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n;var c=(i,t,n)=>v(i,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();class w{constructor(t,n,r,e,o){c(this,"parent");c(this,"canvas");c(this,"context");c(this,"path");c(this,"image");c(this,"posData");console.log("[map] loading"),this.path=t,this.image=new Image,this.image.addEventListener("load",()=>{console.log("[map] the map image loaded"),this.initialize()}),this.image.src=this.path;const l=document.getElementById(n);l===null?(console.error("[map] the parent element was not found"),this.parent=document.createElement("section")):this.parent=l,this.canvas=document.createElement("canvas"),this.canvas.innerText="地図イメージ",this.canvas.width=r,this.canvas.height=e,this.parent.append(this.canvas);const h=this.canvas.getContext("2d");h===null?(console.error("[map] the canvas context was null"),this.context=new CanvasRenderingContext2D):this.context=h,this.context.strokeStyle="#a00",this.context.lineWidth=10,this.posData=o}initialize(){console.log("[map] initializing");const t=new Date(Date.now());this.draw(t),console.log("[map] loaded")}draw(t){const{x:n,y:r}=this.getPosition(t);this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.drawImage(this.image,0,0),this.context.beginPath(),this.context.arc(n,r,10,0,Math.PI*2),this.context.closePath(),this.context.stroke()}getPosition(t){const n=this.posData.getPosition(t);return{x:n[0],y:n[1]}}}class N{constructor(t,n,r,e){c(this,"year");c(this,"month");c(this,"date");c(this,"positions",[]);this.year=n,this.month=r,this.date=e,t.split(/\r?\n/).forEach(l=>{const h=l.split(",").map(a=>parseInt(a)),s=new p(h[0],h[1],this.parseTime(h[2],h[3],h[4]));this.positions.push(s)})}parseTime(t,n,r){return isNaN(t)||isNaN(n)||isNaN(r)?null:new Date(this.year,this.month-1,this.date+t,n,r)}getPosition(t){let n=[];for(let s=0;s<this.positions.length;s++){const a=this.positions[s];if(a.time===null)n.push(a);else{if(a.time.getTime()===t.getTime())return[a.x,a.y];if(a.time.getTime()<t.getTime())n=[a];else{n.push(a);break}}}if(n.length===1)return[n[0].x,n[0].y];const r=[];let e=0;for(let s=0;s<n.length-1;s++){const a=p.range(n[s],n[s+1]);r[s]=a,e+=a}if(e===0)return[n[0].x,n[0].y];const o=t.getTime()-n[0].time.getTime();let l=e/p.rag(n[0],n[n.length-1])*o;const h=[0,0];console.log(l);for(let s=0;s<r.length;s++)if(l>r[s])l-=r[s];else{const a=l/r[s],f=(n[s+1].x-n[s].x)*a,y=(n[s+1].y-n[s].y)*a;h[0]=n[s].x+f,h[1]=n[s].y+y;break}return h}}class p{constructor(t,n,r){c(this,"x");c(this,"y");c(this,"time");this.x=t,this.y=n,this.time=r}static range(t,n){const r=t.x-n.x,e=t.y-n.y;return Math.sqrt(r*r+e*e)}static rag(t,n){return t.time===null||n.time===null?0:n.time.getTime()-t.time.getTime()}}const P=`242,142,0,12,15\r
239,146,,,\r
215,131,,,\r
197,167,,,\r
245,205,0,12,45\r
234,220,,,\r
186,193,,,\r
175,223,,,\r
214,240,0,13,10\r
283,273,,,\r
284,292,,,\r
224,267,,,\r
265,308,0,13,30\r
226,379,,,\r
181,340,,,\r
194,325,0,13,50\r
238,356,,,\r
250,334,,,\r
214,308,,,\r
212,314,0,14,10\r
212,314,0,14,40\r
208,303,,,\r
224,269,,,\r
168,242,0,15,0\r
214,130,0,15,25\r
229,140,,,\r
239,94,,,\r
229,140,,,\r
239,146,,,\r
242,142,0,16,00\r
242,142,0,17,10\r
239,146,,,\r
321,170,,,\r
328,141,,,\r
359,151,,,\r
366,178,,,\r
368,179,0,17,40\r
321,170,,,\r
333,196,,,\r
489,267,0,18,15\r
508,216,,,\r
550,260,0,18,25\r
508,216,,,\r
474,308,,,\r
540,347,,,\r
474,308,0,18,50\r
464,377,,,\r
340,300,,,\r
352,254,,,\r
325,238,,,\r
323,236,0,19,5\r
325,238,,,\r
284,274,,,\r
281,218,,,\r
282,236,,,\r
245,236,,,\r
234,220,,,\r
256,203,0,19,20\r
324,237,,,\r
332,194,,,\r
398,222,0,19,40\r
398,222,0,20,0\r
332,194,,,\r
320,170,0,20,20\r
281,160,,,\r
270,191,,,\r
234,221,,,\r
186,194,,,\r
196,167,,,\r
183,162,,,\r
196,167,,,\r
174,221,,,\r
214,240,,,\r
232,224,,,\r
214,240,,,\r
218,245,,,\r
222,240,0,21,00\r
165,110,1,9,30\r
156,105,,,\r
159,88,,,\r
80,23,1,9,40\r
52,8,,,\r
29,7,1,9,45\r
29,7,1,10,0\r
52,8,,,\r
159,88,,,\r
156,105,,,\r
165,110,1,10,20\r
189,195,1,10,30\r
285,160,1,11,40\r
509,218,1,12,30\r
510,209,1,12,32\r
510,209,1,13,20\r
469,326,1,14,20\r
497,248,1,14,45\r
497,248,1,15,35\r
512,212,1,15,45\r
512,212,1,16,10\r
328,171,1,16,25\r
328,171,1,16,38\r
229,149,1,16,50\r
229,149,1,17,45\r
229,149,1,17,52\r
323,167,1,17,55\r
323,167,1,18,0\r
501,214,1,18,15\r
501,214,1,18,34\r
490,266,,,\r
496,270,1,18,37\r
496,270,1,18,47\r
490,266,,,\r
470,318,1,18,53\r
470,318,1,19,05\r
477,300,1,19,10\r
477,300,1,19,10\r
477,300,1,20,0\r
508,216,,,\r
321,171,,,\r
330,191,1,20,30\r
330,191,1,20,45\r
318,290,,,\r
218,242,1,20,55\r
224,240,1,21,00`,u=2024,d=11,g=2,T=new N(P,u,d,g),D=new w("./map.png","map-section",738,398,T),m=document.getElementById("form-time");for(let i=0;i<m.children.length;i++){const t=m.children.item(i);t==null||t.addEventListener("change",I)}function I(){const i=parseInt(m.day.value),t=parseInt(m.hour.value),n=parseInt(m.min.value);if(!isNaN(i)&&!isNaN(t)&&!isNaN(n)){const r=new Date(u,d-1,g+i,t,n);D.draw(r)}}