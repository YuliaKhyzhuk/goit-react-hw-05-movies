"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[408],{408:function(e,n,r){r.r(n),r.d(n,{MovieDetails:function(){return f},default:function(){return h}});var t=r(861),a=r(439),s=r(757),i=r.n(s),o=r(791),c=r(87),u=r(689),p=r(234),l=r(323),v=r(184),d=function(e){var n=e.movie,r=n.release_date,t=n.poster_path,a=n.overview,s=n.title,i=n.vote_average,o=n.genres,c=parseInt(r);return(0,v.jsxs)("div",{children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(t),alt:a,width:"370px"}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:s}),(0,v.jsxs)("p",{children:["Year: ",c]}),(0,v.jsxs)("p",{children:["User score: ",i]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:a}),o&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:o.map((function(e){return e.name})).join(", ")})]})]})]})},f=function(){var e,n,r=(0,o.useState)([]),s=(0,a.Z)(r,2),f=s[0],h=s[1],g=(0,u.UO)().movieId,x=(0,o.useState)(!1),m=(0,a.Z)(x,2),j=m[0],w=m[1],k=(0,o.useState)(null),y=(0,a.Z)(k,2),b=y[0],Z=y[1],_=null!==(e=null===(n=(0,u.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,o.useEffect)((function(){if(g){var e=function(){var e=(0,t.Z)(i().mark((function e(n){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,p.Pg)(n);case 4:r=e.sent,h(r),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),Z(e.t0.message),console.log("getMovieById:",e.t0.message);case 12:return e.prev=12,w(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(n){return e.apply(this,arguments)}}();e()}}),[g]),(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{children:(0,v.jsx)(c.OL,{to:_,children:"Go back"})}),(0,v.jsxs)("div",{children:[j&&(0,v.jsx)(l.a,{}),0!==b&&(0,v.jsx)("p",{children:"Something went wrong! Please try again!"}),f&&(0,v.jsx)(d,{movie:f}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h3",{children:"Additional Information"}),(0,v.jsx)(c.OL,{to:"cast",state:{from:_},children:"Cast"}),(0,v.jsx)(c.OL,{to:"reviews",state:{from:_},children:"Reviews"})]}),(0,v.jsx)(u.j3,{})]})]})},h=f},234:function(e,n,r){r.d(n,{Df:function(){return u},Pg:function(){return l},Ph:function(){return p},tx:function(){return d},zv:function(){return v}});var t=r(861),a=r(757),s=r.n(a),i=r(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="f687d24021b781b06892bcf3760eb617",c="en-US",u=function(){var e=(0,t.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day",{params:{api_key:o,language:c}});case 2:return n=e.sent,console.log("getTrendingMovies:",n),r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t,a,u=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:1,e.next=3,i.Z.get("/search/movie",{params:{api_key:o,language:c,page:r,query:n}});case 3:return t=e.sent,console.log("getMovieById response:",t),a=t.data,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n),{params:{api_key:o,language:c}});case 2:return r=e.sent,console.log("getMovieById response:",r),t=r.data,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n,"/credits"),{params:{api_key:o,language:c}});case 2:return r=e.sent,console.log("getMovieCredits response:",r),t=r.data,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(s().mark((function e(n){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(n,"/reviews"),{params:{api_key:o,language:c,page:1}});case 2:return r=e.sent,console.log("getMovieReviews response:",r),t=r.data,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=408.f7e0e02e.chunk.js.map