"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{126:function(e,n,r){r.d(n,{e:function(){return s}});r(791);var t=r(689),a=r(87),u=r(184),s=function(e){var n=e.movies,r=e.title,s=(0,t.TH)();return(0,u.jsxs)("div",{children:[r&&(0,u.jsx)("h2",{children:r}),(0,u.jsx)("ul",{children:(null===n||void 0===n?void 0:n.length)&&n.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:s},children:e.title})},e.id)}))})]})}},680:function(e,n,r){r.r(n),r.d(n,{HomePage:function(){return l}});var t=r(861),a=r(439),u=r(757),s=r.n(u),o=r(791),c=r(234),i=r(126),p=r(966),f=r(184),l=function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),r=n[0],u=n[1],l=(0,o.useState)(!1),v=(0,a.Z)(l,2),g=v[0],d=v[1],h=(0,o.useState)(null),m=(0,a.Z)(h,2),x=m[0],w=m[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,c.Df)();case 4:n=e.sent,u(n.results),console.log(n.results),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),w(e.t0.message),console.log("getTrendingMovies error:",e.t0.message);case 13:return e.prev=13,d(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log("Homepage error:",x),(0,f.jsxs)("div",{children:[g&&(0,f.jsx)(p.a,{}),x&&(0,f.jsx)("p",{children:"HOMEPAGE Something went wrong! Please try again!"}),(0,f.jsx)(i.e,{movies:r,title:"Trending today"})]})};n.default=l},234:function(e,n,r){r.d(n,{Df:function(){return i},Pg:function(){return f},Ph:function(){return p},tx:function(){return v},zv:function(){return l}});var t=r(861),a=r(757),u=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="f687d24021b781b06892bcf3760eb617",c="en-US",i=function(){var e=(0,t.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day",{params:{api_key:o,language:c}});case 2:return n=e.sent,console.log("getTrendingMovies:",n),r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t,a,i=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:1,e.next=3,s.Z.get("/search/movie",{params:{api_key:o,language:c,page:r,query:n}});case 3:return t=e.sent,console.log("getMovieById response:",t),a=t.data,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n),{params:{api_key:o,language:c}});case 2:return r=e.sent,console.log("getMovieById response:",r),t=r.data,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/credits"),{params:{api_key:o,language:c}});case 2:return r=e.sent,console.log("getMovieCredits response:",r),t=r.data,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(n,"/reviews"),{params:{api_key:o,language:c,page:1}});case 2:return r=e.sent,console.log("getMovieReviews response:",r),t=r.data,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.6e95a518.chunk.js.map