!function(e){"function"==typeof define&&define.amd?define(e):"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=e():window.autocomplete=e()}(function(){"use strict";function e(e){function t(){y++,m=[],s=void 0,h.display="none"}function n(){for(;v.firstChild;)v.removeChild(v.firstChild);var n=!1,o="#9?$";m.forEach(function(e){e.group&&(n=!0)});var r=function(e){var t=c.createElement("div");return t.textContent=e.label,t};e.render&&(r=e.render);var l=function(e){var t=c.createElement("div");return t.textContent=e,t};if(e.renderGroup&&(l=e.renderGroup),m.forEach(function(n){if(n.group&&n.group!==o){o=n.group;var i=l(n.group);i&&(i.className+=" group",v.appendChild(i))}var f=r(n);f&&(f.addEventListener("click",function(o){e.onSelect(n.item,u),t(),o.preventDefault(),o.stopPropagation()}),n===s&&(f.className+=" selected"),v.appendChild(f))}),m.length<1){if(!e.emptyMsg)return void t();var f=c.createElement("div");f.className="empty",f.textContent=e.emptyMsg,v.appendChild(f)}var d=u.getBoundingClientRect(),a=d.top+u.offsetHeight+c.body.scrollTop;h.top=a+"px",h.left=d.left+"px",h.width=u.offsetWidth+"px",h.maxHeight=window.innerHeight-(d.top+u.offsetHeight)+"px",h.height="auto",h.display="block",i()}function o(o){var i=o.which||o.keyCode||0,r=++y;38!==i&&40!==i&&13!==i&&27!==i&&(u.value.length>=g?u.value!==p&&e.fetch(u.value,function(e){y===r&&e&&(m=e,s=m.length>0?m[0]:void 0,n())}):t(),p=u.value)}function i(){var e=v.getElementsByClassName("selected");if(e.length>0){var t=e[0],n=t.previousElementSibling;if(n&&n.className.indexOf("group")!==-1&&!n.previousElementSibling&&(t=n),t.offsetTop<v.scrollTop)v.scrollTop=t.offsetTop;else{var o=t.offsetTop+t.offsetHeight,i=v.scrollTop+v.offsetHeight;o>i&&(v.scrollTop+=o-i)}}}function r(){if(m.length<1)s=void 0;else if(s===m[0])s=m[m.length-1];else for(var e=m.length-1;e>0;e--)if(s===m[e]||1===e){s=m[e-1];break}}function l(){if(m.length<1&&(s=void 0),!s||s===m[m.length-1])return void(s=m[0]);for(var e=0;e<m.length-1;e++)if(s===m[e]){s=m[e+1];break}}function f(o){var i=o.which||o.keyCode||0;return 38===i||40===i||27===i?(27===i?t():(38===i?r():l(),n()),void o.preventDefault()):void(13===i&&s&&(e.onSelect(s.item,u),t()))}function d(){setTimeout(function(){c.activeElement!==u&&t()},100)}function a(){u.removeEventListener("keydown",f),u.removeEventListener("keyup",o),u.removeEventListener("focus",o),u.removeEventListener("blur",d),t();var e=v.parentNode;e&&e.removeChild(v)}var u,s,p,c=document,v=c.createElement("div"),h=v.style,m=[],g=e.minLength||2,y=0;if(!e.input)throw"input undefined";return u=e.input,p=u.value,c.body.appendChild(v),v.className="autocomplete "+(e.className||""),h.position="absolute",u.addEventListener("keydown",f),u.addEventListener("keyup",o),u.addEventListener("focus",o),u.addEventListener("blur",d),{destroy:a}}return e});