(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{204:function(e,t,n){},265:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),i=n(46),s=n.n(i),o=n(14),l=n(24),d=n(16),j=n(158),u=n(64),b=n(280),h=function(e){var t=e.component,n=Object(j.a)(e,["component"]);return Object(c.jsx)(l.a,Object(d.a)({component:Object(u.c)(t,{onRedirecting:function(){return Object(c.jsx)(b.a,{})}})},n))},x=n(31),O=n.n(x),m=n(51),p=n(5),f=n(36),g=n.n(f),v=function(e){return g()("https://cast1ng-agency.herokuapp.com/api/role",{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.data})).catch((function(e){if(e.response)return e.response.data;console.log(e)}))},y=Object(r.createContext)(),S=function(e){var t=e.children,n=Object(r.useState)(""),a=Object(p.a)(n,2),i=a[0],s=a[1],o=Object(r.useState)(null),l=Object(p.a)(o,2),d=l[0],j=l[1],b=Object(u.b)(),h=b.user,x=b.isAuthenticated,f=b.getAccessTokenSilently;return Object(r.useEffect)((function(){(function(){var e=Object(m.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x){e.next=9;break}return e.next=3,f();case 3:return t=e.sent,j(t),e.next=7,v(t);case 7:(n=e.sent).success?s(n.role):console.log("error while getting user role");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[x]),Object(c.jsx)(y.Provider,{value:{isAuthenticated:x,token:d,user:h,userRole:i},children:t})},_=n(284),k=n(285),w=n(163),A=n(286),C=n(287),R=n(281),E=n(283),W=n(282),F=function(){return Object(c.jsxs)(R.a,{maxW:"xs",flexDirection:"column",alignItems:"center",justifyContent:"center",opacity:"0.50",h:"250px",mx:"auto",my:"0",children:[Object(c.jsx)(W.a,{}),Object(c.jsx)(E.a,{mt:"2",children:"image not available"})]})},z=function(e){var t=e.actor,n=t.id,r=t.first_name,a=t.last_name,i=t.age,s=t.gender,l=t.image_link,d=t.seeking_role;return Object(c.jsx)(_.a,{role:"group",children:Object(c.jsx)(o.c,{to:"/actors/".concat(n),children:Object(c.jsxs)(k.a,{maxW:"md",w:"250px",h:"260px",rounded:"lg",borderRadius:"sm",boxShadow:"md",bg:Object(w.d)("gray.50","gray.700"),_groupHover:{transform:"translateY( -3px ) scale( 1.02 ) ",boxShadow:"2xl"},children:[Object(c.jsx)(k.a,{w:"250px",h:"180px",overflow:"hidden",children:Object(c.jsx)(A.a,{src:l,alt:"actor image",fallback:Object(c.jsx)(F,{}),objectFit:"cover",boxSize:"250px"})}),Object(c.jsxs)(k.a,{pb:"6",pt:"2",pl:"4",children:[Object(c.jsxs)(k.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:[r," ",a]}),Object(c.jsx)(k.a,{d:"flex",alignItems:"baseline",children:Object(c.jsxs)(k.a,{mt:"4px",color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",children:[i," yrs",Object(c.jsxs)(k.a,{as:"span",opacity:.7,pl:"4px",children:["\u2022 ",s]}),d?Object(c.jsx)(C.a,{colorScheme:"teal",ml:"19px",children:"Seeking role"}):null]})})]})]})})})},I=n(306),q=n(310),D=n(290),H=n(311),L=n(291),P="https://cast1ng-agency.herokuapp.com/api",M=function(){return g()("https://cast1ng-agency.herokuapp.com/api/actors",{headers:{"content-type":"application/json"}}).then((function(e){return e.data})).catch((function(e){if(e.response)return console.log(e.response),e.response.data;console.log(e.request)}))},T=function(e){var t=P+"/actors/"+e;return g()(t,{headers:{"content-type":"application/json"}}).then((function(e){return e.data})).catch((function(e){if(e.response)return console.log(e.response),e.response.data;console.log(e.request)}))},B=function(e,t){var n=P+"/actors/"+e;return g()(n,{method:"DELETE",headers:{"content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.data})).catch((function(e){if(e.response)return console.log(e.response),e.response.data;console.log(e.request)}))},N=function(e,t){return g()("https://cast1ng-agency.herokuapp.com/api/actors",{method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer ".concat(t)},data:e}).then((function(e){return e.data})).catch((function(e){if(e.response)return console.log(e.response),e.response.data;console.log(e.request)}))},G=function(e,t,n){var c=P+"/actors/"+t;return g()(c,{method:"PATCH",headers:{"content-type":"application/json",Authorization:"Bearer ".concat(n)},data:e}).then((function(e){return e.data})).catch((function(e){if(e.response)return console.log(e.response),e.response.data;console.log(e.request)}))},Y=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1],i=Object(I.a)(),s=Object(r.useContext)(y),l=s.isAuthenticated,d=s.userRole;return Object(r.useEffect)((function(){M().then((function(e){a(e.actors)})).catch((function(e){console.log(e),i({title:"Error",description:"An error has occured, Please try again later.",status:"error",duration:3e3,isClosable:!0})}))}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(_.a,{maxW:"xl",position:"relative",minH:"calc(100vh - 81px)",children:[Object(c.jsxs)(q.a,{columns:2,spacing:[52,36],pt:"20",children:[Object(c.jsx)(k.a,{children:Object(c.jsx)(D.a,{h:"80px",children:Object(c.jsx)(E.a,{textStyle:"heading",children:"Actors"})})}),Object(c.jsx)(k.a,{children:Object(c.jsx)(D.a,{h:"80px",children:l&&"Casting Assistant"!==d?Object(c.jsx)(o.c,{to:"/actors/add",children:Object(c.jsxs)(H.a,{colorScheme:"teal",variant:"solid",children:[Object(c.jsx)(L.a,{w:5,h:5,pr:"2"})," Add Actor"]})}):null})})]}),Object(c.jsx)(D.a,{children:Object(c.jsx)(R.a,{p:"10",mt:"5",children:Object(c.jsx)(q.a,{columns:[1,2,3],spacing:"40px",children:n.map((function(e){return Object(c.jsx)(k.a,{children:Object(c.jsx)(z,{actor:e})},e.id)}))})})})]})})},V=n(292),J=n(307),U=n(305),Q=n(296),Z=n(297),K=n(293),X=n(294),$=function(){var e=Object(w.c)(),t=e.colorMode,n=e.toggleColorMode,a=Object(r.useContext)(y),i=a.isAuthenticated,s=a.user,l=Object(u.b)(),d=l.loginWithRedirect,j=l.logout,b=l.isLoading;return Object(c.jsxs)(R.a,{pt:"6",pb:"4",px:"8",borderBottom:"1px",borderColor:Object(w.d)("gray.200","gray.700"),children:[Object(c.jsx)(k.a,{px:"4",children:Object(c.jsx)(o.c,{to:"/",children:Object(c.jsx)(k.a,{as:"button",h:"42px",w:"42px",color:"white",borderRadius:"50%",fontSize:"16px",fontWeight:"bold",bg:"linear-gradient(299deg, rgba(44,122,123,1) 0%, rgba(79,209,197,1) 100%)",_hover:{bg:"#38B2AC"},_active:{bg:"#4FD1C5",outline:"none"},_focus:{outline:"none"},children:"CA"})})}),Object(c.jsx)(k.a,{px:"4",children:Object(c.jsx)(o.c,{to:"/actors",children:Object(c.jsx)(H.a,{colorScheme:"teal",variant:"ghost",borderRadius:"8px",children:"Actors"})})}),Object(c.jsx)(k.a,{px:"4",children:Object(c.jsx)(o.c,{to:"/movies",children:Object(c.jsx)(H.a,{colorScheme:"teal",variant:"ghost",borderRadius:"8px",children:"Movies"})})}),Object(c.jsx)(V.a,{}),Object(c.jsx)(k.a,{children:Object(c.jsx)(H.a,{onClick:n,variant:"ghost",children:"light"===t?Object(c.jsx)(K.a,{w:4,h:4,color:"gray.600"}):Object(c.jsx)(X.a,{w:4,h:4,color:"gray.600"})})}),Object(c.jsx)(J.a,{isLoaded:!b,children:i?Object(c.jsx)(k.a,{px:"4",py:"1",children:Object(c.jsxs)(U.a,{children:[Object(c.jsx)(U.e,{children:Object(c.jsx)(Q.a,{mr:"16px",size:"sm",src:s.picture,loading:"lazy",_hover:{cursor:"pointer"}})}),Object(c.jsx)(Z.a,{children:Object(c.jsxs)(U.d,{children:[Object(c.jsx)(U.b,{}),Object(c.jsx)(U.c,{children:Object(c.jsx)(H.a,{colorScheme:"teal",onClick:function(){return j({returnTo:window.location.origin})},children:"Log out"})})]})})]})}):Object(c.jsx)(k.a,{px:"4",children:Object(c.jsx)(H.a,{colorScheme:"teal",onClick:function(){return d()},children:"Log in"})})})]})},ee=n(298),te=n(299),ne=function(e){var t=e.action,n=e.actionLink;return Object(c.jsx)(k.a,{children:Object(c.jsx)(o.c,{to:n,children:Object(c.jsxs)(H.a,{maxW:"md",w:"150px",h:"150px",boxShadow:"base",borderStyle:"dashed",borderColor:"teal.500",borderRadius:"md",opacity:"1",bg:Object(w.d)("gray.50","gray.700"),children:[Object(c.jsx)(L.a,{display:"block",w:6,h:6,pr:"2",position:"absolute",top:"30%",right:"40%"}),Object(c.jsx)(E.a,{display:"block",fontSize:"xl",mt:"8",children:t})]})})})},ce="https://cast1ng-agency.herokuapp.com/api",re=function(){return g()("https://cast1ng-agency.herokuapp.com/api/movies",{headers:{"content-type":"application/json"}}).then((function(e){return e.data})).catch((function(e){if(e.response)return console.log(e.response),e.response.data;console.log(e.request)}))},ae=function(e){var t=ce+"/movies/"+e;return g()(t,{headers:{"content-type":"application/json"}}).then((function(e){return e.data})).catch((function(e){if(e.response)return console.log(e.response),e.response.data;console.log(e.request)}))},ie=function(e,t){var n=ce+"/movies/"+e;return g()(n,{method:"DELETE",headers:{"content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.data})).catch((function(e){if(e.response)return console.log(e.response),e.response.data;console.log(e.request)}))},se=function(e,t){return g()("https://cast1ng-agency.herokuapp.com/api/movies",{method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer ".concat(t)},data:e}).then((function(e){return e.data})).catch((function(e){if(e.response)return console.log(e.response),e.response.data;console.log(e.request)}))},oe=function(e,t,n){var c=ce+"/movies/"+t;return g()(c,{method:"PATCH",headers:{"content-type":"application/json",Authorization:"Bearer ".concat(n)},data:e}).then((function(e){return e.data})).catch((function(e){if(e.response)return console.log(e.response),e.response.data;console.log(e.request)}))},le=function(){var e=Object(r.useState)(0),t=Object(p.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(0),s=Object(p.a)(i,2),l=s[0],d=s[1],j=Object(r.useContext)(y),u=j.user,b=j.userRole,h=j.isAuthenticated;return Object(r.useEffect)((function(){re().then((function(e){a(e.movies.length)})).catch((function(e){console.log(e)})),M().then((function(e){d(e.actors.length)})).catch((function(e){console.log(e)}))}),[]),Object(c.jsxs)(_.a,{maxW:"xl",pt:"20",px:"20",position:"relative",minH:"calc(100vh - 81px)",centerContent:!0,children:[Object(c.jsx)(E.a,{textStyle:"heading",children:"Dashboard"}),Object(c.jsxs)(k.a,{mt:"20",textAlign:"center",children:[Object(c.jsxs)(E.a,{fontSize:"lg",children:["Welcome ",h?u.nickname+" !":"!"]}),Object(c.jsxs)(E.a,{fontSize:"md",children:["you're in the ",Object(c.jsx)("strong",{children:h?b:"guest"})," ","Dashboard"]})]}),Object(c.jsxs)(q.a,{columns:[1,2,4],spacing:"20px",mt:"10",children:[Object(c.jsx)(k.a,{maxW:"md",w:"150px",h:"150px",boxShadow:"base",borderRadius:"md",opacity:"1",bg:Object(w.d)("gray.50","gray.700"),children:Object(c.jsxs)(ee.a,{pt:"8",pl:"4",children:[Object(c.jsx)(ee.c,{fontSize:"xl",children:"Actors"}),Object(c.jsx)(ee.d,{children:l}),Object(c.jsx)(ee.b,{children:Object(c.jsx)(te.a,{as:o.b,to:"/actors",textStyle:"links",children:"View all actors"})})]})}),Object(c.jsx)(k.a,{maxW:"md",w:"150px",h:"150px",boxShadow:"base",borderRadius:"md",opacity:"1",bg:Object(w.d)("gray.50","gray.700"),children:Object(c.jsxs)(ee.a,{pt:"8",pl:"4",children:[Object(c.jsx)(ee.c,{fontSize:"xl",children:"Movies"}),Object(c.jsx)(ee.d,{children:n}),Object(c.jsx)(ee.b,{children:Object(c.jsx)(te.a,{as:o.b,to:"/movies",textStyle:"links",children:"View all movies"})})]})}),h?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(ne,{action:"Add actors",actionLink:"/actors/add"}),Object(c.jsx)(ne,{action:"Add movies",actionLink:"/movies/add"})]}):null]})]})},de=n(300),je=n(301),ue=n(57),be=function(e){var t=Object(r.useState)({id:0,first_name:"",lastname:"",age:"",gender:"",image_link:"",seeking_role:!1,movies:[]}),n=Object(p.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(!1),d=Object(p.a)(s,2),j=d[0],u=d[1],b=Object(r.useContext)(y),h=b.isAuthenticated,x=b.userRole,f=b.token,g=Object(r.useRef)(),v=Object(I.a)(),S=Object(l.f)(),w=e.match.params.actorId;Object(r.useEffect)((function(){T(w).then((function(e){e.success?i(e.actor):S.push("/404")}))}),[]);var W=function(){var e=Object(m.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(w,f);case 2:e.sent.success?(v({title:"Actor deleted",description:"Selected actor deleted successfully",status:"success",duration:3e3,isClosable:!0}),u(!1)):v({title:"Error",description:"An error has occured, Please try again later.",status:"error",duration:3e3,isClosable:!0});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)(_.a,{maxW:"xl",position:"relative",minH:"calc(100vh - 81px)",centerContent:!0,children:[Object(c.jsx)(k.a,{px:"10",pt:"10",children:Object(c.jsxs)(E.a,{textStyle:"title",children:[a.first_name," ",a.last_name]})}),Object(c.jsxs)(de.a,{px:"10",py:"5",textStyle:"info",children:[Object(c.jsx)(D.a,{children:Object(c.jsx)(k.a,{boxSize:"xs",overflow:"hidden",boxShadow:"lg",children:Object(c.jsx)(A.a,{maxW:"xs",objectFit:"cover",src:a.image_link,alt:"Actor image",fallback:Object(c.jsx)(F,{})})})}),a.seeking_role?Object(c.jsx)(C.a,{children:"Seeking role"}):null,Object(c.jsx)(D.a,{children:Object(c.jsxs)(_.a,{maxW:"3xs",my:"4",children:[Object(c.jsxs)(R.a,{children:[Object(c.jsx)(E.a,{children:"Age: "}),Object(c.jsx)(V.a,{}),Object(c.jsxs)(E.a,{children:[a.age," yrs"]})]}),Object(c.jsxs)(R.a,{children:[Object(c.jsx)(E.a,{children:"Gender: "}),Object(c.jsx)(V.a,{}),Object(c.jsxs)(E.a,{children:[a.gender," "]})]})]})}),Object(c.jsx)(E.a,{children:"Movies: "}),a.movies.map((function(e){return Object(c.jsx)(te.a,{as:o.b,to:"/movies/".concat(e.id),textStyle:"links",children:e.title},e.id)}))]}),Object(c.jsxs)(R.a,{p:"2",children:[!h||"Executive Producer"!==x&&"Casting Director"!==x?null:Object(c.jsx)(o.c,{to:"/actors/".concat(w,"/edit"),children:Object(c.jsx)(H.a,{mr:"2",children:"Edit"})}),h&&"Executive Producer"===x?Object(c.jsx)(H.a,{ml:"2",bg:"red.500",onClick:function(){return u(!0)},children:"Delete"}):null]}),Object(c.jsx)(je.a,{isOpen:j,leastDestructiveRef:g,onClose:function(){return u(!1)},children:Object(c.jsx)(ue.f,{children:Object(c.jsxs)(je.b,{children:[Object(c.jsx)(ue.e,{fontSize:"lg",fontWeight:"bold",children:"Delete Actor"}),Object(c.jsx)(ue.b,{children:"Are you sure? You can't undo this action afterwards."}),Object(c.jsxs)(ue.d,{children:[Object(c.jsx)(H.a,{ref:g,onClick:function(){return u(!1)},children:"Cancel"}),Object(c.jsx)(H.a,{colorScheme:"red",onClick:function(){return W()},ml:3,children:"Delete"})]})]})})})]})},he=function(e){var t=e.movie,n=t.id,r=t.title,i=t.poster,s=t.release_date,l=t.actors;return Object(c.jsx)(_.a,{children:Object(c.jsx)(k.a,{maxW:"md",w:"250px",h:"350px",rounded:"lg",borderRadius:"sm",boxShadow:"md",role:"group",bg:Object(w.d)("white","gray.700"),children:Object(c.jsxs)(o.c,{to:"/movies/".concat(n),children:[Object(c.jsxs)(k.a,{position:"absolute",w:"250px",h:"350px",py:"70px",textAlign:"center",color:"gray.300",fontWeight:"semibold",letterSpacing:"5px",fontSize:"xs",opacity:"0",textTransform:"uppercase",_groupHover:{opacity:1,transition:"opacity 0.2s ease-in",backgroundImage:"linear-gradient(to bottom, hsla(0, 0%, 0%, 0) 0%,hsla(0, 0%, 0%, 0.762) 94.1%,hsla(0, 0%, 0%, 0.790) 100%)"},children:[s.substring(7,16),Object(c.jsx)(E.a,{as:"p",mt:"200px",letterSpacing:"2px",children:l.slice(0,3).map((function(e,t){return t===l.length-1||2===t?Object(c.jsxs)(a.a.Fragment,{children:[" ",e.last_name]},e.id):Object(c.jsxs)(a.a.Fragment,{children:[" ",e.last_name," \u2022"]},e.id)}))})]}),Object(c.jsx)(k.a,{position:"absolute",w:"250px",mx:"auto",my:"auto",textAlign:"center",fontSize:"lg",fontWeight:"bold",textStyle:"heading",color:"white",pt:"275px",as:"span",_groupHover:{transform:"translateY(-60%)",transition:"transform 1000ms cubic-bezier(0.19, 1, 0.22, 1)"},children:r}),Object(c.jsx)(A.a,{w:"250px",h:"350px",src:i,alt:"movie poster",objectFit:"cover",fallback:Object(c.jsx)(F,{})})]})})})},xe=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1],i=Object(I.a)(),s=Object(r.useContext)(y),l=s.isAuthenticated,d=s.userRole;return Object(r.useEffect)((function(){re().then((function(e){a(e.movies)})).catch((function(e){console.log(e),i({title:"Error",description:"Error has occured, Please try again later.",status:"error",duration:3e3,isClosable:!0})}))}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(_.a,{maxW:"xl",position:"relative",minH:"calc(100vh - 81px)",children:[Object(c.jsxs)(q.a,{columns:2,spacing:[52,36],pt:"20",children:[Object(c.jsx)(k.a,{children:Object(c.jsx)(D.a,{h:"80px",children:Object(c.jsx)(E.a,{textStyle:"heading",children:"Movies"})})}),Object(c.jsx)(k.a,{children:Object(c.jsx)(D.a,{h:"80px",children:l&&"Executive Producer"===d?Object(c.jsx)(o.c,{to:"/movies/add",children:Object(c.jsxs)(H.a,{colorScheme:"teal",variant:"solid",children:[Object(c.jsx)(L.a,{w:5,h:5,pr:"2"})," Add Movie"]})}):null})})]}),Object(c.jsx)(D.a,{children:Object(c.jsx)(R.a,{p:"10",mt:"5",children:Object(c.jsx)(q.a,{columns:[1,2,3],spacing:"40px",children:n.map((function(e){return Object(c.jsx)(k.a,{children:Object(c.jsx)(he,{movie:e})},e.id)}))})})})]})})},Oe=function(e){var t=Object(r.useState)({id:0,title:"",poster:"",genre:"",release_date:"",seeking_talent:!1,actors:[]}),n=Object(p.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(!1),d=Object(p.a)(s,2),j=d[0],u=d[1],b=Object(r.useContext)(y),h=b.isAuthenticated,x=b.userRole,f=b.token,g=Object(r.useRef)(),v=Object(I.a)(),S=Object(l.f)(),w=e.match.params.movieId;Object(r.useEffect)((function(){ae(w).then((function(e){e.success?i(e.movie):S.push("/404")}))}),[]);var W=function(){var e=Object(m.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie(w,f);case 2:e.sent.success?(v({title:"Movie deleted",description:"Selected movie deleted successfully",status:"success",duration:3e3,isClosable:!0}),u(!1)):v({title:"Error",description:"An error has occured, Please try again later.",status:"error",duration:3e3,isClosable:!0});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)(_.a,{maxW:"xl",position:"relative",minH:"calc(100vh - 81px)",centerContent:!0,children:[Object(c.jsx)(k.a,{px:"10",pt:"10",children:Object(c.jsx)(E.a,{textStyle:"title",children:a.title})}),Object(c.jsxs)(de.a,{px:"10",py:"5",textStyle:"info",children:[Object(c.jsx)(D.a,{children:Object(c.jsx)(k.a,{h:"450px",minW:"250px",overflow:"hidden",boxShadow:"lg",children:Object(c.jsx)(A.a,{maxW:"xs",objectFit:"cover",src:a.poster,alt:"Movie poster",fallback:Object(c.jsx)(F,{})})})}),a.seeking_talent?Object(c.jsx)(C.a,{children:"Seeking talent"}):null,Object(c.jsx)(D.a,{children:Object(c.jsxs)(_.a,{maxW:"xs",my:"4",children:[Object(c.jsxs)(R.a,{children:[Object(c.jsx)(E.a,{children:"Genre: "}),Object(c.jsx)(V.a,{}),Object(c.jsx)(E.a,{children:a.genre})]}),Object(c.jsxs)(R.a,{children:[Object(c.jsx)(E.a,{children:"Release Date: "}),Object(c.jsx)(V.a,{}),Object(c.jsx)(E.a,{children:a.release_date.substring(7,16)})]})]})}),Object(c.jsx)(E.a,{children:"Actors: "}),a.actors.map((function(e){return Object(c.jsxs)(te.a,{as:o.b,to:"/actors/".concat(e.id),textStyle:"links",children:[e.first_name," ",e.last_name]},e.id)}))]}),Object(c.jsxs)(R.a,{p:"2",children:[!h||"Executive Producer"!==x&&"Casting Director"!==x?null:Object(c.jsx)(o.c,{to:"/movies/".concat(w,"/edit"),children:Object(c.jsx)(H.a,{mr:"2",children:"Edit"})}),h&&"Executive Producer"===x?Object(c.jsx)(H.a,{ml:"2",bg:"red.500",onClick:function(){return u(!0)},children:"Delete"}):null]}),Object(c.jsx)(je.a,{isOpen:j,leastDestructiveRef:g,onClose:function(){return u(!1)},children:Object(c.jsx)(ue.f,{children:Object(c.jsxs)(je.b,{children:[Object(c.jsx)(ue.e,{fontSize:"lg",fontWeight:"bold",children:"Delete Actor"}),Object(c.jsx)(ue.b,{children:"Are you sure? You can't undo this action afterwards."}),Object(c.jsxs)(ue.d,{children:[Object(c.jsx)(H.a,{ref:g,onClick:function(){return u(!1)},children:"Cancel"}),Object(c.jsx)(H.a,{colorScheme:"red",onClick:function(){return W()},ml:3,children:"Delete"})]})]})})})]})},me=n(63),pe=n(302),fe=n(312),ge=n(303),ve=n(160),ye=n(313),Se=n(159),_e=n(308),ke=function(e){var t=Object(r.useState)([]),n=Object(p.a)(t,2),a=n[0],i=n[1];return Object(r.useEffect)((function(){"movies"===e.data?re().then((function(e){i(e.movies)})).catch((function(e){console.log(e)})):"actors"===e.data&&M().then((function(e){i(e.actors)})).catch((function(e){console.log(e)}))}),[]),Object(c.jsx)(k.a,{boxShadow:"base",borderRadius:"lg",maxH:"165px",overflow:"auto",bg:Object(w.d)("gray.100","#ffffff0a"),children:Object(c.jsx)(Se.a,Object(d.a)(Object(d.a)({},e),{},{colorScheme:"teal",children:Object(c.jsx)(de.a,{pl:6,mt:1,spacing:1,children:a.map((function(t){return Object(c.jsx)(_e.a,{value:Number(t.id),children:"movies"===e.data?t.title:t.first_name+" "+t.last_name},t.id)}))})}))})},we=n(154),Ae=n.n(we),Ce=(n(203),n(204),n(29)),Re=function(e){var t=Object(r.useState)({title:"",genre:"",release_date:"",poster:"",seeking_talent:!1,actors:{actor_ids:[]}}),n=Object(p.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)([]),o=Object(p.a)(s,2),j=o[0],u=o[1],b=Object(r.useState)(!1),h=Object(p.a)(b,2),x=h[0],f=h[1],g=Object(r.useState)(new Date),v=Object(p.a)(g,2),S=v[0],w=v[1],A=Object(r.useContext)(y).token,C=Object(I.a)(),R=Object(l.f)(),W=e.match.params.movieId,F=e.match.url.includes("edit")?"edit":"add";Object(r.useEffect)((function(){"edit"===F&&ae(W).then((function(e){if(e.success){var t={title:e.movie.title,genre:e.movie.genre,release_date:e.movie.release_date,poster:e.movie.poster,seeking_talent:e.movie.seeking_talent,actors:{actor_ids:e.movie.actors.map((function(e){return e.id}))}};f(e.movie.seeking_talent),u(e.movie.actors.map((function(e){return e.id}))),i(t)}else R.push("/404")}))}),[]);var z=function(){var e=Object(m.a)(O.a.mark((function e(t,n,c){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("edit"!==c){e.next=6;break}return e.next=3,oe(t,W,A);case 3:r=e.sent,e.next=9;break;case 6:return e.next=8,se(t,A);case 8:r=e.sent;case 9:r.success?(n.setSubmitting(!1),C({title:"edit"===c?"Edit movie":"Add movie",description:"edit"===c?"Movie information updated successfully.":"Movie added successfully.",status:"success",duration:3e3,isClosable:!0})):(n.setSubmitting(!1),C({title:"Error",description:"An error has occured!",status:"error",duration:3e3,isClosable:!0}));case 10:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(c.jsxs)(_.a,{maxW:"xl",position:"relative",minH:"calc(100vh - 81px)",py:"20",centerContent:!0,children:[Object(c.jsx)(k.a,{px:"10",pt:"5",children:Object(c.jsx)(E.a,{textStyle:"title",children:"edit"===F?"Edit Movie":"Add a new movie"})}),Object(c.jsx)(Ce.c,{initialValues:a,enableReinitialize:!0,validate:function(e){var t={};if(e.title||(t.title="Required"),e.genre||(t.genre="Required"),e.release_date=S,e.release_date||(t.release_date="Required"),e.poster)try{new URL(e.poster)}catch(n){t.poster="Invalid image url"}return e.seeking_talent=x,e.seeking_talent||(t.seeking_talent="Required"),t},onSubmit:function(e,t){e.actors.actors_id=j,e.seeking_talent="true"===x,z(e,t,"edit"===F?"edit":"add")},children:function(e){return Object(c.jsxs)(Ce.b,{children:[Object(c.jsxs)(de.b,{mt:"16",spacing:8,align:"stretch",w:["xs","sm","md","md"],children:[Object(c.jsx)(Ce.a,{name:"title",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(me.a,{isInvalid:n.errors.title&&n.touched.title,isRequired:!0,children:[Object(c.jsx)(pe.a,{htmlFor:"title",children:"Movie Title"}),Object(c.jsx)(fe.a,Object(d.a)(Object(d.a)({},t),{},{id:"title",variant:"filled",placeholder:"title"})),Object(c.jsx)(ge.a,{children:n.errors.title})]})}}),Object(c.jsx)(Ce.a,{name:"genre",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(me.a,{isInvalid:n.errors.genre&&n.touched.genre,isRequired:!0,children:[Object(c.jsx)(pe.a,{htmlFor:"genre",children:"Genre"}),Object(c.jsx)(fe.a,Object(d.a)(Object(d.a)({},t),{},{id:"genre",variant:"filled",placeholder:"genre"})),Object(c.jsx)(ge.a,{children:n.errors.genre})]})}}),Object(c.jsx)(Ce.a,{name:"poster",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(me.a,{isInvalid:n.errors.poster&&n.touched.poster,children:[Object(c.jsx)(pe.a,{htmlFor:"poster",children:"Poster"}),Object(c.jsx)(fe.a,Object(d.a)(Object(d.a)({},t),{},{id:"poster",variant:"filled",placeholder:"https://"})),Object(c.jsx)(ge.a,{children:n.errors.poster})]})}}),Object(c.jsx)(Ce.a,{name:"release_date",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(me.a,{isInvalid:n.errors.release_date&&n.touched.release_date,isRequired:!0,children:[Object(c.jsx)(pe.a,{htmlFor:"release_date",children:"Release Date"}),Object(c.jsx)(Ae.a,Object(d.a)(Object(d.a)({},t),{},{selected:S,onChange:function(e){return w(e)}})),Object(c.jsx)(ge.a,{children:n.errors.release_date})]})}}),Object(c.jsx)(Ce.a,{name:"seeking_talent",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(me.a,{isInvalid:n.errors.seeking_talent&&n.touched.seeking_talent,isRequired:!0,children:[Object(c.jsx)(pe.a,{htmlFor:"seeking_talent",children:"Seeking talent"}),Object(c.jsx)(ve.a,Object(d.a)(Object(d.a)({},t),{},{onChange:f,value:x,children:Object(c.jsxs)(de.a,{direction:"row",spacing:5,children:[Object(c.jsx)(ye.a,{colorScheme:"green",value:"true",children:"Yes"}),Object(c.jsx)(ye.a,{colorScheme:"red",value:"false",children:"No"})]})})),Object(c.jsx)(ge.a,{children:n.errors.seeking_talent})]})}}),Object(c.jsxs)(me.a,{children:[Object(c.jsx)(pe.a,{htmlFor:"movies",children:"Actors: "}),Object(c.jsx)(ke,{data:"actors",value:j,onChange:function(e){!function(e){var t=e.map((function(e){return Number(e)}));u(t)}(e)}})]})]}),Object(c.jsx)(D.a,{children:Object(c.jsx)(H.a,{mt:8,colorScheme:"teal",isLoading:e.isSubmitting,type:"submit",children:"Submit"})})]})}})]})},Ee=function(e){var t=Object(r.useState)({first_name:"",last_name:"",age:"",gender:"",image_link:"",seeking_role:!1,movies:{movie_ids:[]}}),n=Object(p.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)([]),o=Object(p.a)(s,2),j=o[0],u=o[1],b=Object(r.useState)(!1),h=Object(p.a)(b,2),x=h[0],f=h[1],g=Object(r.useContext)(y).token,v=Object(I.a)(),S=Object(l.f)(),w=e.match.params.actorId,A=e.match.url.includes("edit")?"edit":"add";Object(r.useEffect)((function(){"edit"===A&&T(w).then((function(e){if(e.success){var t={first_name:e.actor.first_name,last_name:e.actor.last_name,age:e.actor.age,gender:e.actor.gender,image_link:e.actor.image_link,seeking_role:e.actor.seeking_role,movies:{movie_ids:e.actor.movies.map((function(e){return e.id}))}};f(e.actor.seeking_role),u(e.actor.movies.map((function(e){return e.id}))),i(t)}else S.push("/404")}))}),[]);var C=function(){var e=Object(m.a)(O.a.mark((function e(t,n,c){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("edit"!==c){e.next=6;break}return e.next=3,G(t,w,g);case 3:r=e.sent,e.next=9;break;case 6:return e.next=8,N(t,g);case 8:r=e.sent;case 9:r.success?(n.setSubmitting(!1),v({title:"edit"===c?"Edit actor":"Add actor",description:"edit"===c?"Actor information updated successfully.":"Actor added successfully.",status:"success",duration:3e3,isClosable:!0})):(n.setSubmitting(!1),v({title:"Error",description:"An error has occured!",status:"error",duration:3e3,isClosable:!0}));case 10:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}();return Object(c.jsxs)(_.a,{maxW:"xl",position:"relative",minH:"calc(100vh - 81px)",py:"20",centerContent:!0,children:[Object(c.jsx)(k.a,{px:"10",pt:"5",children:Object(c.jsx)(E.a,{textStyle:"title",children:"edit"===A?"Edit actor":"Enroll a new actor"})}),Object(c.jsx)(Ce.c,{initialValues:a,enableReinitialize:!0,validate:function(e){var t={};if(e.first_name||(t.first_name="Required"),e.last_name||(t.last_name="Required"),e.age?(isNaN(e.age)||e.age>100)&&(t.age="Not a valid age value"):t.age="Required",e.gender||(t.gender="Required"),e.image_link)try{new URL(e.image_link)}catch(n){t.image_link="Invalid image url"}return e.seeking_role=x,e.seeking_role||(t.seeking_role="Required"),t},onSubmit:function(e,t){e.age=Number(e.age),e.movies.movie_ids=j,e.seeking_role="true"===x,C(e,t,"edit"===A?"edit":"add")},children:function(e){return Object(c.jsxs)(Ce.b,{children:[Object(c.jsxs)(de.b,{mt:"16",spacing:8,align:"stretch",w:["xs","sm","md","md"],children:[Object(c.jsx)(Ce.a,{name:"first_name",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(me.a,{isInvalid:n.errors.first_name&&n.touched.first_name,isRequired:!0,children:[Object(c.jsx)(pe.a,{htmlFor:"first_name",children:"First Name"}),Object(c.jsx)(fe.a,Object(d.a)(Object(d.a)({},t),{},{id:"first_name",variant:"filled",placeholder:"First name"})),Object(c.jsx)(ge.a,{children:n.errors.first_name})]})}}),Object(c.jsx)(Ce.a,{name:"last_name",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(me.a,{isInvalid:n.errors.last_name&&n.touched.last_name,isRequired:!0,children:[Object(c.jsx)(pe.a,{htmlFor:"last_name",children:"Last Name"}),Object(c.jsx)(fe.a,Object(d.a)(Object(d.a)({},t),{},{id:"last_name",variant:"filled",placeholder:"Last name"})),Object(c.jsx)(ge.a,{children:n.errors.last_name})]})}}),Object(c.jsx)(Ce.a,{name:"age",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(me.a,{isInvalid:n.errors.age&&n.touched.age,isRequired:!0,children:[Object(c.jsx)(pe.a,{htmlFor:"age",children:"Age"}),Object(c.jsx)(fe.a,Object(d.a)(Object(d.a)({},t),{},{id:"age",variant:"filled",placeholder:"age"})),Object(c.jsx)(ge.a,{children:n.errors.age})]})}}),Object(c.jsx)(Ce.a,{name:"gender",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(me.a,{isInvalid:n.errors.gender&&n.touched.gender,isRequired:!0,children:[Object(c.jsx)(pe.a,{htmlFor:"gender",children:"Gender"}),Object(c.jsx)(fe.a,Object(d.a)(Object(d.a)({},t),{},{id:"gender",variant:"filled",placeholder:"gender"})),Object(c.jsx)(ge.a,{children:n.errors.gender})]})}}),Object(c.jsx)(Ce.a,{name:"image_link",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(me.a,{isInvalid:n.errors.image_link&&n.touched.image_link,children:[Object(c.jsx)(pe.a,{htmlFor:"image_link",children:"Profile image"}),Object(c.jsx)(fe.a,Object(d.a)(Object(d.a)({},t),{},{id:"image_link",variant:"filled",placeholder:"https://"})),Object(c.jsx)(ge.a,{children:n.errors.image_link})]})}}),Object(c.jsx)(Ce.a,{name:"seeking_role",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(me.a,{isInvalid:n.errors.seeking_role&&n.touched.seeking_role,isRequired:!0,children:[Object(c.jsx)(pe.a,{htmlFor:"seeking_role",children:"Seeking roles"}),Object(c.jsx)(ve.a,Object(d.a)(Object(d.a)({},t),{},{onChange:f,value:x,children:Object(c.jsxs)(de.a,{direction:"row",spacing:5,children:[Object(c.jsx)(ye.a,{colorScheme:"green",value:"true",children:"Yes"}),Object(c.jsx)(ye.a,{colorScheme:"red",value:"false",children:"No"})]})})),Object(c.jsx)(ge.a,{children:n.errors.seeking_role})]})}}),Object(c.jsxs)(me.a,{children:[Object(c.jsx)(pe.a,{htmlFor:"movies",children:"Movies: "}),Object(c.jsx)(ke,{data:"movies",value:j,onChange:function(e){!function(e){var t=e.map((function(e){return Number(e)}));u(t)}(e)}})]})]}),Object(c.jsx)(D.a,{children:Object(c.jsx)(H.a,{mt:8,colorScheme:"teal",isLoading:e.isSubmitting,type:"submit",children:"Submit"})})]})}})]})},We=function(){return Object(c.jsx)(_.a,{maxW:"xl",pt:"20",px:"20",position:"relative",minH:"calc(100vh - 81px)",centerContent:!0,children:Object(c.jsxs)(k.a,{mt:"20",textAlign:"center",children:[Object(c.jsx)(E.a,{textStyle:"heading",children:"404"}),Object(c.jsx)(E.a,{textStyle:"title",my:"10",children:"Not Found"}),Object(c.jsx)(te.a,{as:o.b,to:"/",textStyle:"links",children:"Go home"})]})})},Fe=function(){return Object(c.jsx)(k.a,{as:"footer",textAlign:"center",position:"absolute",bottom:"2",w:"100%",children:Object(c.jsx)(te.a,{href:"https://github.com/maryamradd/fsnd-CastingAgency",isExternal:!0,decoration:"none",fontSize:"sm",opacity:"0.35",_hover:{decoration:"none",opacity:.75},children:"view src on Github"})})};var ze=function(){return Object(c.jsx)(S,{children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)($,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:le}),Object(c.jsx)(l.a,{exact:!0,path:"/movies",component:xe}),Object(c.jsx)(h,{exact:!0,path:"/movies/add",component:Re}),Object(c.jsx)(l.a,{exact:!0,path:"/movies/:movieId",component:Oe}),Object(c.jsx)(h,{exact:!0,path:"/movies/:movieId/edit",component:Re}),Object(c.jsx)(l.a,{exact:!0,path:"/actors",component:Y}),Object(c.jsx)(h,{exact:!0,path:"/actors/add",component:Ee}),Object(c.jsx)(l.a,{exact:!0,path:"/actors/:actorId",component:be}),Object(c.jsx)(h,{exact:!0,path:"/actors/:actorId/edit",component:Ee}),Object(c.jsx)(l.a,{component:We})]}),Object(c.jsx)(Fe,{})]})})},Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,314)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},qe=function(e){var t=e.children,n=Object(l.f)();return Object(c.jsx)(u.a,{domain:"coffeee-shop-fsnd.us.auth0.com",clientId:"EuAfCzJjdnIVQIMF2eBgcefrxM3jdeyZ",redirectUri:"https://cast1ng-agency.herokuapp.com/",onRedirectCallback:function(e){n.replace((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname),window.location.reload()},audience:"casting-agency-api",children:t})},De=n(309),He=n(304),Le=n(289),Pe=Object(He.a)({styles:{global:function(e){return{body:{color:Object(Le.a)("gray.700","whiteAlpha.900")(e),fontFamily:"Lora, serif",fontWeights:{normal:400,medium:500,bold:700}},label:{color:Object(Le.a)("gray.700","gray.500")(e)}}}},textStyles:{heading:{textAlign:"center",fontWeight:"bold",letterSpacing:"-0.015em",lineHeight:"1.24",fontSize:{base:"2rem",md:"3.5rem"}},subheading:{textAlign:"center",fontWeight:"bold",letterSpacing:"-0.015em",lineHeight:"1.24",fontSize:{base:"1.70rem",md:"2.70rem"}},title:{textAlign:"center",fontWeight:"semibold",letterSpacing:"-0.015em",lineHeight:"1.24",fontSize:{base:"1.60rem",md:"2.60rem"}},info:{textAlign:"center",fontWeight:"regular",letterSpacing:"0.015em",lineHeight:"1.55",fontSize:{base:"1.15rem",md:"1.25rem"}},links:{color:"teal.500",fontWeight:"semibold",transition:"color 0.15s",transitionTimingFunction:"ease-out",_hover:{color:"teal.600"}}}});s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(qe,{children:Object(c.jsx)(De.a,{theme:Pe,children:Object(c.jsx)(ze,{})})})}),document.getElementById("root")),Ie()}},[[265,1,2]]]);
//# sourceMappingURL=main.9caf8041.chunk.js.map