"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[394],{394:function(n,e,r){r.r(e),r.d(e,{MovieDetails:function(){return R},default:function(){return O}});var t,o,i,a,c,s,u,p,d,l=r(861),x=r(439),f=r(757),h=r.n(f),g=r(791),m=r(689),v=r(234),b=r(966),w=r(184),y=function(n){var e=n.movie,r=e.release_date,t=e.poster_path,o=e.overview,i=e.title,a=e.vote_average,c=e.genres,s=parseInt(r);return(0,w.jsxs)("div",{children:[(0,w.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(t),alt:o,width:"220px"}),(0,w.jsxs)("div",{children:[(0,w.jsx)("h2",{children:i}),(0,w.jsxs)("p",{children:["Year: ",s]}),(0,w.jsxs)("p",{children:["User score: ",a]}),(0,w.jsx)("h3",{children:"Overview"}),(0,w.jsx)("p",{children:o}),c&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h3",{children:"Genres"}),(0,w.jsx)("p",{children:c.map((function(n){return n.name})).join(", ")})]})]})]})},Z=r(168),j=r(444),k=r(87),P=(j.ZP.ul(t||(t=(0,Z.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n  background-color: ",";\n  list-style-type: none;\n  @media (min-width: 768px) {\n    grid-template-columns: 1fr 1fr;\n  }\n  @media (min-width: 1280px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n"])),(function(n){return n.theme.colors.backgroundPrimary})),j.ZP.li(o||(o=(0,Z.Z)(["\n  width: 90%;\n  padding: 5px;\n  border-radius: 2px;\n  font-weight: bald;\n\n  background-color: ",";\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  text-decoration: none;\n"])),(function(n){return n.theme.colors.middleAccent})),j.ZP.h2(i||(i=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n\n  text-shadow: ",";\n"])),(function(n){return" 0 1px 1px ".concat(n.theme.colors.secondaryAccent)})),(0,j.ZP)(k.OL)(a||(a=(0,Z.Z)(["\n  font-size: 15px;\n  font-weight: bald;\n  color: ",";\n  margin-bottom: 10px;\n"])),(function(n){return n.theme.colors.secondaryWhite}))),_=j.ZP.div(c||(c=(0,Z.Z)(["\n  display: inline-block;\n  margin-bottom: 10px;\n  padding: 6px;\n  font-weight: bold;\n  cursor: pointer;\n  font-size: 15px;\n  outline: none;\n  border-radius: ",";\n\n  background-color: ",";\n  box-shadow: ",";\n  transition: ",";\n\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n"])),(function(n){return n.theme.borderRadius.sm}),(function(n){return n.theme.colors.secondaryAccent}),(function(n){return" 0 1px 3px ".concat(n.theme.colors.secondaryAccent)}),(function(n){return n.theme.transition})),A=(0,j.ZP)(k.OL)(s||(s=(0,Z.Z)(["\n  font-size: 15px;\n  font-weight: bald;\n  color: ",";\n  margin-bottom: 10px;\n"])),(function(n){return n.theme.colors.secondaryWhite})),z=j.ZP.div(u||(u=(0,Z.Z)(["\n  display: inline-block;\n  margin-bottom: 10px;\n  padding: 6px;\n  margin-right: 10px;\n  font-weight: bold;\n  cursor: pointer;\n  font-size: 15px;\n  outline: none;\n  border-radius: ",";\n\n  background-color: ",";\n  box-shadow: ",";\n  transition: ",";\n\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n"])),(function(n){return n.theme.borderRadius.sm}),(function(n){return n.theme.colors.primaryAccent}),(function(n){return" 0 1px 3px ".concat(n.theme.colors.secondaryAccent)}),(function(n){return n.theme.transition})),M=(0,j.ZP)(k.OL)(p||(p=(0,Z.Z)(["\n  font-size: 15px;\n  font-weight: bald;\n  color: ",";\n  margin-bottom: 10px;\n"])),(function(n){return n.theme.colors.secondaryWhite})),I=j.ZP.div(d||(d=(0,Z.Z)(["\n  display: inline-block;\n  margin-bottom: 10px;\n  padding: 6px;\n  font-weight: bold;\n  cursor: pointer;\n  font-size: 15px;\n  outline: none;\n  border-radius: ",";\n\n  background-color: ",";\n  box-shadow: ",";\n  transition: ",";\n\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n"])),(function(n){return n.theme.borderRadius.sm}),(function(n){return n.theme.colors.primaryAccent}),(function(n){return" 0 1px 3px ".concat(n.theme.colors.secondaryAccent)}),(function(n){return n.theme.transition})),R=function(){var n,e,r=(0,g.useState)([]),t=(0,x.Z)(r,2),o=t[0],i=t[1],a=(0,m.UO)().movieId,c=(0,g.useState)(!1),s=(0,x.Z)(c,2),u=s[0],p=s[1],d=(0,g.useState)(null),f=(0,x.Z)(d,2),Z=f[0],j=f[1],k=null!==(n=null===(e=(0,m.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,g.useEffect)((function(){if(a){var n=function(){var n=(0,l.Z)(h().mark((function n(e){var r;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,(0,v.Pg)(e);case 4:r=n.sent,i(r),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),j(n.t0.message),console.log("getMovieById:",n.t0.message);case 12:return n.prev=12,p(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,8,12,15]])})));return function(e){return n.apply(this,arguments)}}();n(a)}}),[a]),(0,w.jsxs)("div",{children:[(0,w.jsx)(_,{children:(0,w.jsx)(P,{to:k,children:"Go back"})}),(0,w.jsxs)("div",{children:[u&&(0,w.jsx)(b.a,{}),Z&&(0,w.jsx)("p",{children:"Something went wrong! Please try again!"}),o&&(0,w.jsx)(y,{movie:o}),(0,w.jsxs)("div",{children:[(0,w.jsx)("h3",{children:"Additional Information"}),(0,w.jsx)(z,{children:(0,w.jsx)(A,{to:"cast",state:{from:k},children:"Cast"})}),(0,w.jsx)(I,{children:(0,w.jsx)(M,{to:"reviews",state:{from:k},children:"Reviews"})})]}),(0,w.jsx)(m.j3,{})]})]})},O=R},234:function(n,e,r){r.d(e,{Df:function(){return u},Pg:function(){return d},Ph:function(){return p},tx:function(){return x},zv:function(){return l}});var t=r(861),o=r(757),i=r.n(o),a=r(243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="f687d24021b781b06892bcf3760eb617",s="en-US",u=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/trending/movie/day",{params:{api_key:c,language:s}});case 2:return e=n.sent,console.log("getTrendingMovies:",e),r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t,o,u=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:1,n.next=3,a.Z.get("/search/movie",{params:{api_key:c,language:s,page:r,query:e}});case 3:return t=n.sent,console.log("getMovieById response:",t),o=t.data,n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e),{params:{api_key:c,language:s}});case 2:return r=n.sent,console.log("getMovieById response:",r),t=r.data,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/credits"),{params:{api_key:c,language:s}});case 2:return r=n.sent,console.log("getMovieCredits response:",r),t=r.data,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(e,"/reviews"),{params:{api_key:c,language:s,page:1}});case 2:return r=n.sent,console.log("getMovieReviews response:",r),t=r.data,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=394.beeca3b9.chunk.js.map