"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247,129],{247:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var r=n(152),a=n(871),c=n(791),i=n(207),o=n(70),u=n(129),s=n(184);function f(){var t=(0,a.UO)().movieId,e=(0,c.useState)(null),n=(0,r.Z)(e,2),f=n[0],p=n[1];return(0,c.useEffect)((function(){i.xc(t).then((function(t){return p(t.cast)}))}),[t]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"Cast"}),f&&(0,s.jsx)(o.Z,{children:f.length>0?f.map((function(t){return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{style:{width:"185px"},src:null!==t.profile_path?"https://image.tmdb.org/t/p/w185".concat(t.profile_path):"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",alt:t.name}),(0,s.jsx)("p",{children:t.name}),(0,s.jsxs)("p",{children:["Character: ",t.character]})]},t.id)})):(0,s.jsx)(u.default,{text:"No information about the actors"})})]})}},70:function(t,e,n){n.d(e,{Z:function(){return c}});n(791);var r="GridList_grid__i85Yc",a=n(184);function c(t){var e=t.children;return(0,a.jsx)("ul",{className:r,children:e})}},207:function(t,e,n){n.d(e,{Hx:function(){return l},Ny:function(){return f},Tg:function(){return s},Y5:function(){return p},xc:function(){return h}});var r=n(861),a=n(757),c=n.n(a),i="f16772f2af0be9f113024bcab02efac7";function o(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)(c().mark((function t(){var e,n,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},t.next=4,fetch(e,n);case 4:if(!(r=t.sent).ok){t.next=11;break}return t.next=8,r.json();case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=Promise.reject(new Error("Not found"));case 12:return t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function s(){return o("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i))}function f(t){return o("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t))}function p(t){return o("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"))}function h(t){return o("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"))}function l(t){return o("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))}},129:function(t,e,n){n.r(e),n.d(e,{default:function(){return a}});n(791);var r=n(184);function a(t){var e=t.text;return(0,r.jsx)("h1",{children:e})}}}]);
//# sourceMappingURL=247.79645bf0.chunk.js.map