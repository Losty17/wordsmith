(()=>{"use strict";var e={609:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(81),o=n.n(a),i=n(645),s=n.n(i)()(o());s.push([e.id,".command-palette {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    border-radius: 6px;\n    background: #fff;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    animation-duration: 0.2s;\n    animation-fill-mode: forwards;\n    animation-timing-function: cubic-bezier(.5,.1,.4,2);\n    max-height: 312px;\n    overflow-y: auto;\n}\n\n.command-palette-command {\n    display: flex;\n    flex-direction: row;\n    gap: 12px;\n    padding: 16px 12px;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: background 0.1s ease-in-out;\n    border-bottom: 1px solid #eee;\n}\n\n.command-palette-command.selected {\n    background: #eee;\n}\n\n.command-palette-command-icon {\n    width: 48px;\n    height: 48px;\n    background-color: black;\n    align-self: center;\n    /* background: attr(data-icon) center center no-repeat; */\n}\n\n.command-palette-command-content {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n}\n\n.command-palette-command-name-container {\n    display: flex;\n    flex-direction: row;\n    gap: 4px;\n}\n\n.command-palette-command-name {\n    font-weight: bold;\n}\n\n.command-palette-command-shortcut {\n    color: #999;\n}\n\n.command-palette-command-description {\n}\n\n/* Animations */\n@keyframes command-palette-appear {\n    0% {\n        transform: scale(.9);\n        opacity: 0%;\n    }\n    100% {\n        transform: scale(1);\n        opacity: 100%;\n    }\n}\n\n@keyframes command-palette-disappear {\n    0% {\n        transform: scale(1);\n        opacity: 100%;\n    }\n    100% {\n        transform: scale(.9);\n        opacity: 0%;\n    }\n}",""]);const r=s},771:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(81),o=n.n(a),i=n(645),s=n.n(i)()(o());s.push([e.id,"body {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    width: 100vw;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n[placeholder]:empty::before {\n    content: attr(placeholder);\n    color: #555; \n}\n\n[placeholder]:not(:empty):focus::before {\n    content: \"\";\n}",""]);const r=s},703:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(81),o=n.n(a),i=n(645),s=n.n(i)()(o());s.push([e.id,'.text-editor {\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n    margin: 0 auto;\n    padding: 8px;\n}\n\n.text-editor-block {\n    padding: 8px;\n}\n\n.text-editor-block:focus {\n    outline: none;\n}\n\n.text-editor-block[type="default"] {\n    text-align: justify;\n}\n\n.text-editor-block[type="h1"] {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.text-editor-block[type="h2"] {\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n.text-editor-block[type="h3"] {\n    font-size: 1.17rem;\n    font-weight: bold;\n}\n\n.text-editor-block[type="h4"] {\n    font-size: 1rem;\n    font-weight: bold;\n}',""]);const r=s},29:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(81),o=n.n(a),i=n(645),s=n.n(i)()(o());s.push([e.id,":root {\n}",""]);const r=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&s[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},s=[],r=0;r<e.length;r++){var c=e[r],d=a.base?c[0]+a.base:c[0],l=i[d]||0,m="".concat(d," ").concat(l);i[d]=l+1;var p=n(m),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var h=o(u,a);a.byIndex=r,t.splice(r,0,{identifier:m,updater:h,references:1})}s.push(m)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=a(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var r=n(i[s]);t[r].references--}for(var c=a(e,o),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(e){let t="";switch(e.key){case"Backspace":if(t="destroyCommandPalette",0===this.textContent.length){e.preventDefault();const t=this.previousSibling;t&&(t.focus(),this.remove())}break;case"/":t="newCommandPalette";break;case"Enter":t="newBlock";break;case"ArrowUp":case"ArrowDown":t="changeFocus";break;default:return}var n,a;t&&(n=t,a={block:this,trigger:e,key:e.key},document.dispatchEvent(new CustomEvent(n,{detail:a})))}class t extends HTMLDivElement{static Padding=8;static DefaultPlaceholder="Type '/' for commands";static Types={Default:"default",Title:"h1",Subtitle:"h2",Heading:"h3",Subheading:"h4"};constructor(){super(),this.classList.add("text-editor-block"),this.setAttribute("contenteditable","true"),this.addEventListener("keydown",e.bind(this)),this.type=t.Types.Default,this.placeholder=t.DefaultPlaceholder}get type(){return this.getAttribute("type")}set type(e){this.setAttribute("type",e)}get placeholder(){return this.getAttribute("placeholder")}set placeholder(e){this.setAttribute("placeholder",e)}getCursorPosition(){let e=0;if(0!==window.getSelection().rangeCount){const t=window.getSelection().getRangeAt(0),n=t.cloneRange();n.selectNodeContents(this),n.setEnd(t.endContainer,t.endOffset),e=n.toString().length}return e}setCursorPosition(e){const t=document.createRange(),n=window.getSelection();t.setStart(this.childNodes[2],e),t.collapse(!0),n.removeAllRanges(),n.addRange(t)}getLineHeight(){var e,t=document.createElement(this.nodeName);return t.setAttribute("style","margin:0; padding:0; font-family:"+(this.style.fontFamily||"inherit")+"; font-size:"+(this.style.fontSize||"inherit")),t.innerHTML="A",this.parentNode.appendChild(t),e=t.clientHeight,t.parentNode.removeChild(t),e}}customElements.define("editor-block",t,{extends:"div"});const a=[{name:"Title",type:"title",icon:"h1",shortcut:"",description:"Convert the selected block into a Title."},{name:"Subtitle",type:"subtitle",icon:"h2",shortcut:"",description:"Convert the selected block into a Subtitle."},{name:"Heading",type:"heading",icon:"h3",shortcut:"",description:"Convert the selected block into a Heading."},{name:"Subheading",type:"subheading",icon:"h4",shortcut:"",description:"Convert the selected block into a Subheading."}];class o extends HTMLDivElement{constructor(){super(),this.commandList=[],this.selectedCommand=0,this.classList.add("command-palette")}init(e,t){return this.style.left=`${e}px`,this.style.top=`${t}px`,this.style.transform="scale(.8)",this.style.opacity="0%",this.#e(),document.body.appendChild(this),this.style.animationName="command-palette-appear",this}destroy(){this.style.animationName="command-palette-disappear",setTimeout((()=>this.remove()),200)}changeSelectedCommand(e){this.selectedCommand="ArrowUp"===e?0===this.selectedCommand?0:this.selectedCommand-1:this.selectedCommand===this.commandList.length-1?this.commandList.length-1:this.selectedCommand+1,this.#t()}executeCommand(){const{type:e}=this.commandList[this.selectedCommand].dataset;console.log("type",e),this.destroy()}#t(){this.querySelectorAll(".selected").forEach((e=>e.classList.remove("selected"))),this.commandList[this.selectedCommand].classList.add("selected")}#e(){a.forEach((e=>{const{name:t,type:n,icon:a,shortcut:o,description:i}=e,s=document.createElement("span");s.classList.add("command-palette-command-icon"),s.setAttribute("data-icon",a);const r=document.createElement("div");r.classList.add("command-palette-command");const c=document.createElement("span");c.classList.add("command-palette-command-name-container");const d=document.createElement("span");d.classList.add("command-palette-command-name"),d.innerText=t;const l=document.createElement("span");l.classList.add("command-palette-command-shortcut"),l.innerText=o?`(${o})`:"",c.appendChild(d),c.appendChild(l);const m=document.createElement("span");m.classList.add("command-palette-command-description"),m.innerText=`${i}`;const p=document.createElement("span");p.classList.add("command-palette-command-content"),p.appendChild(c),p.appendChild(m),r.appendChild(s),r.appendChild(p),r.setAttribute("data-type",n),r.addEventListener("click",(()=>{this.selectedCommand=this.commandList.indexOf(r),this.executeCommand()})),r.addEventListener("mouseenter",(()=>{this.selectedCommand=this.commandList.indexOf(r),this.#t()})),this.appendChild(r),this.commandList.push(r)})),this.#t()}}function i(e,t){Array.isArray(e)?e.forEach((e=>document.addEventListener(e,t))):document.addEventListener(e,t)}customElements.define("command-palette",o,{extends:"div"});var s=n(379),r=n.n(s),c=n(795),d=n.n(c),l=n(569),m=n.n(l),p=n(565),u=n.n(p),h=n(216),f=n.n(h),g=n(589),y=n.n(g),b=n(29),v={};v.styleTagTransform=y(),v.setAttributes=u(),v.insert=m().bind(null,"head"),v.domAPI=d(),v.insertStyleElement=f(),r()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;var x=n(771),C={};C.styleTagTransform=y(),C.setAttributes=u(),C.insert=m().bind(null,"head"),C.domAPI=d(),C.insertStyleElement=f(),r()(x.Z,C),x.Z&&x.Z.locals&&x.Z.locals;var k=n(703),w={};w.styleTagTransform=y(),w.setAttributes=u(),w.insert=m().bind(null,"head"),w.domAPI=d(),w.insertStyleElement=f(),r()(k.Z,w),k.Z&&k.Z.locals&&k.Z.locals;var E=n(609),S={};S.styleTagTransform=y(),S.setAttributes=u(),S.insert=m().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=f(),r()(E.Z,S),E.Z&&E.Z.locals&&E.Z.locals,new class{constructor(e){this.root=e,this.element=document.createElement("div"),this.blocks=[],this.pageTitle=void 0,this.commandPalette=void 0}init(){return this.element.classList.add("text-editor"),this.root.appendChild(this.element),0===this.blocks.length&&(this.pageTitle=this.createBlock("h1"),this.pageTitle.placeholder="Untitled",this.blocks.push(this.pageTitle,this.createBlock("default"))),this.blocks.forEach((e=>this.element.appendChild(e))),i("contextmenu",(e=>{if(e.preventDefault(),this.commandPalette)return;const{clientX:t,clientY:n}=e,a=document.createElement("div",{is:"command-palette"}).init(t,n);this.commandPalette=a})),i("newCommandPalette",(e=>{if(this.commandPalette)return;const{block:n}=e.detail,{x:a,y:o}=n.getBoundingClientRect(),i=document.createElement("div",{is:"command-palette"}).init(a+t.Padding,o+n.getLineHeight()+2*t.Padding);this.commandPalette=i})),i(["destroyCommandPalette","mousedown"],(()=>{this.commandPalette&&(this.commandPalette.destroy(),this.commandPalette=void 0)})),i("newBlock",(e=>{const{block:t,trigger:n}=e.detail;if(n.preventDefault(),this.commandPalette)return this.commandPalette.executeCommand();const a=this.createBlock();t.after(a),this.blocks.push(a),a.focus(),t!==this.pageTitle&&(t.placeholder=""),t.blur()})),i("changeFocus",(e=>{const{block:t,trigger:n,key:a}=e.detail;if(!this.commandPalette)return("ArrowUp"===a?t.previousSibling:t.nextSibling)?.focus();n.preventDefault(),this.commandPalette.changeSelectedCommand(a)})),this}destroy(){}createBlock(e=t.Types.Default){const n=document.createElement("div",{is:"editor-block"});return n.type=e,n}}(document.body).init()})()})();