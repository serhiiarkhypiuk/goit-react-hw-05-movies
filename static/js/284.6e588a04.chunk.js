"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[284],{510:function(e,t,n){n.d(t,{Z:function(){return a}});n(791);var r="PageHeading_title__1wPIF",i=n(184);function a(e){var t=e.text;return(0,i.jsx)("h1",{className:r,children:t})}},207:function(e,t,n){n.d(t,{Hx:function(){return h},Ny:function(){return l},Tg:function(){return u},Y5:function(){return d},xc:function(){return f}});var r=n(861),i=n(757),a=n.n(i),c="f16772f2af0be9f113024bcab02efac7";function o(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function e(){var t,n,r,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",n=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function u(){return o("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c))}function l(e){return o("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(e))}function d(e){return o("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"))}function f(e){return o("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"))}function h(e){return o("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"))}},284:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(152),i=n(791),a=n(871),c=n(504),o=n(510),s=n(207),u=n(568),l=n(184);function d(){var e,t,n=(0,a.UO)().movieId,d=(0,i.useState)(null),f=(0,r.Z)(d,2),h=f[0],p=f[1],v=(0,a.TH)(),x=null!==(e=null===v||void 0===v||null===(t=v.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,i.useEffect)((function(){s.Y5(n).then(p)}),[n]),(0,l.jsxs)(l.Fragment,{children:[h&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{text:h.title}),(0,l.jsx)(c.rU,{className:"button",to:x,children:"Go back"}),(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w342".concat(h.poster_path),alt:h.title}),(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"start",marginLeft:"20px"},children:[(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"User score: "}),h.vote_average," from ",h.vote_count," votes"]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Overview: "}),h.overview]}),(0,l.jsx)("hr",{}),(0,l.jsxs)("ul",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"start",marginLeft:"20px",border:"2px solid #df2c14",borderRadius:"3px"},children:[(0,l.jsx)("li",{children:(0,l.jsx)(c.OL,{to:"cast",className:function(e){return e.isActive?u.Z.activeLink:u.Z.link},state:{from:x},children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.OL,{to:"reviews",className:function(e){return e.isActive?u.Z.activeLink:u.Z.link},state:{from:x},children:"Reviews"})})]})]})]})]}),(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(a.j3,{})})]})}},568:function(e,t){t.Z={link:"SharedLayout_link__A+Wt9",activeLink:"SharedLayout_activeLink__GkZZ9 SharedLayout_link__A+Wt9",header:"SharedLayout_header__HMjkG"}}}]);
//# sourceMappingURL=284.6e588a04.chunk.js.map