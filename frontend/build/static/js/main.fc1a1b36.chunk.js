(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{262:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),i=n(44),s=n.n(i),o=n(12),l=n(20),j=n(23),d=n(5),b=n(277),u=n(278),h=n(161),x=n(279),O=n(280),f=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:"gkdfjoilfffffffffffffffffffffffjsofjo"})})},m=function(e){var t=e.actor,n=t.id,r=t.first_name,a=t.last_name,i=t.age,s=t.gender,o=t.image_link,j=t.seeking_role;return Object(c.jsx)(b.a,{role:"group",children:Object(c.jsx)(l.c,{to:"/actors/".concat(n),children:Object(c.jsxs)(u.a,{maxW:"md",w:"250px",h:"260px",rounded:"lg",borderRadius:"sm",boxShadow:"md",bg:Object(h.d)("white","gray.700"),_groupHover:{transform:"translateY( -3px ) scale( 1.02 ) ",boxShadow:"2xl"},children:[Object(c.jsx)(u.a,{w:"250px",h:"180px",overflow:"hidden",children:Object(c.jsx)(x.a,{src:o,alt:"actor image",fallback:Object(c.jsx)(f,{}),objectFit:"cover",boxSize:"250px"})}),Object(c.jsxs)(u.a,{pb:"6",pt:"2",pl:"4",children:[Object(c.jsxs)(u.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",isTruncated:!0,children:[r," ",a]}),Object(c.jsx)(u.a,{d:"flex",alignItems:"baseline",children:Object(c.jsxs)(u.a,{mt:"4px",color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",children:[i," yrs",Object(c.jsxs)(u.a,{as:"span",opacity:.7,pl:"4px",children:["\u2022 ",s]}),j?Object(c.jsx)(O.a,{colorScheme:"teal",ml:"19px",children:"Seeking role"}):null]})})]})]})})})},p=n(301),g=n(306),v=n(283),_=n(284),S=n(303),y=n(287),k=n(286),w=n(38),C=n.n(w),A="https://cast1ng-agency.herokuapp.com/api",R=function(){return C()("https://cast1ng-agency.herokuapp.com/api/actors",{headers:{"content-type":"application/json"}}).then((function(e){return e.data})).catch((function(e){e.response?console.log(e.response):e.request&&console.log(e.request)}))},q=function(e){var t=A+"/actors/"+e;return C()(t,{headers:{"content-type":"application/json"}}).then((function(e){return e.data})).catch((function(e){e.response?console.log(e.response):e.request&&console.log(e.request)}))},E=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(p.a)();return Object(r.useEffect)((function(){R().then((function(e){a(e.actors)})).catch((function(e){console.log(e),i({title:"Error",description:"An error has occured, Please try again later.",status:"error",duration:3e3,isClosable:!0})}))}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(b.a,{maxW:"xl",children:[Object(c.jsxs)(g.a,{columns:2,spacing:[52,36],pt:"20",children:[Object(c.jsx)(u.a,{children:Object(c.jsx)(v.a,{h:"80px",children:Object(c.jsx)(_.a,{textStyle:"heading",children:"Acotrs"})})}),Object(c.jsx)(u.a,{children:Object(c.jsx)(v.a,{h:"80px",children:Object(c.jsx)(l.c,{to:"/actors/add",children:Object(c.jsxs)(S.a,{colorScheme:"teal",variant:"solid",children:[Object(c.jsx)(k.a,{w:5,h:5,pr:"2"})," Add Actor"]})})})})]}),Object(c.jsx)(v.a,{children:Object(c.jsx)(y.a,{p:"10",mt:"5",children:Object(c.jsx)(g.a,{columns:[1,2,3],spacing:"40px",children:n.map((function(e){return Object(c.jsx)(u.a,{children:Object(c.jsx)(m,{actor:e})},e.id)}))})})})]})})},F=n(113),I=n.n(F),W=n(150),T=n(89),z=n(288),M=n(302),L=n(294),D=n(292),N=n(289),P=n(290),H=n(300),Y=n(293),B=function(){var e=Object(h.c)(),t=e.colorMode,n=e.toggleColorMode,a=Object(r.useState)(null),i=Object(d.a)(a,2),s=i[0],o=i[1],j=Object(T.b)(),b=j.loginWithRedirect,x=j.logout,O=j.user,f=j.isAuthenticated,m=j.isLoading,p=j.getAccessTokenSilently,g=p();return console.log(g),Object(r.useEffect)((function(){(function(){var e=Object(W.a)(I.a.mark((function e(){var t,n,c,r,a,i;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="coffeee-shop-fsnd.us.auth0.com",e.prev=1,e.next=4,p({audience:"https://".concat(t,"/api/v2/"),scope:"read:current_user"});case 4:return n=e.sent,console.log(n),c="https://".concat(t,"/api/v2/users/").concat(O.sub),e.next=9,fetch(c,{headers:{Authorization:"Bearer ".concat(n)}});case 9:return r=e.sent,e.next=12,r.json();case 12:a=e.sent,i=a.user_metadata,o(i),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),console.log(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(s),Object(c.jsx)("div",{children:Object(c.jsxs)(y.a,{pt:"6",pb:"4",px:"8",borderBottom:"1px",borderColor:Object(h.d)("gray.200","gray.700"),children:[Object(c.jsx)("h1",{children:s?Object(c.jsx)("pre",{children:JSON.stringify(s,null,2)}):"No user metadata defined"}),Object(c.jsx)(u.a,{px:"4",children:Object(c.jsx)(l.c,{to:"/",children:"CA"})}),Object(c.jsx)(u.a,{px:"4",children:Object(c.jsx)(l.c,{to:"/actors",children:Object(c.jsx)(S.a,{colorScheme:"teal",variant:"ghost",borderRadius:"8px",children:"Actors"})})}),Object(c.jsx)(u.a,{px:"4",children:Object(c.jsx)(l.c,{to:"/movies",children:Object(c.jsx)(S.a,{colorScheme:"teal",variant:"ghost",borderRadius:"8px",children:"Movies"})})}),Object(c.jsx)(z.a,{}),Object(c.jsx)(u.a,{children:Object(c.jsx)(S.a,{onClick:n,variant:"ghost",children:"light"===t?Object(c.jsx)(N.a,{w:4,h:4,color:"gray.600"}):Object(c.jsx)(P.a,{w:4,h:4,color:"gray.600"})})}),Object(c.jsx)(M.a,{isLoaded:!m,children:f?Object(c.jsx)(u.a,{px:"4",py:"1",children:Object(c.jsxs)(H.a,{children:[Object(c.jsx)(H.e,{children:Object(c.jsx)(D.a,{mr:"16px",size:"sm",src:O.picture,loading:"lazy",_hover:{cursor:"pointer"}})}),Object(c.jsx)(Y.a,{children:Object(c.jsxs)(H.d,{children:[Object(c.jsx)(H.b,{}),Object(c.jsx)(H.c,{w:"xs",children:Object(c.jsxs)(L.b,{w:"xs",children:[Object(c.jsx)(l.c,{to:"/",children:"Settings"}),Object(c.jsx)(S.a,{colorScheme:"teal",onClick:function(){return x({returnTo:window.location.origin})},children:"Log out"})]})})]})})]})}):Object(c.jsx)(u.a,{px:"4",children:Object(c.jsx)(S.a,{colorScheme:"teal",onClick:function(){return b()},children:"Log in"})})})]})})},G=function(){return Object(c.jsx)("div",{children:"hoome"})},J=n(295),V=n(296),U=n(55),Q=function(e){var t=Object(r.useState)({id:0,first_name:"",lastname:"",age:"",gender:"",image_link:"",seeking_role:!1,movies:[]}),n=Object(d.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(!1),o=Object(d.a)(s,2),j=o[0],h=o[1],m=Object(r.useRef)(),g=Object(p.a)(),k=e.match.params.actorId;Object(r.useEffect)((function(){q(k).then((function(e){i(e.actor)}))}),[]);var w=function(){(function(e){var t=A+"/actors/"+e;return C()(t,{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.data})).catch((function(e){if(e.response)return e.response.data;e.request}))})(k).then((function(e){e.success?(g({title:"Actor deleted",description:"Selected actor deleted successfully",status:"success",duration:3e3,isClosable:!0}),h(!1)):g({title:"Error",description:"An error has occured, Please try again later.",status:"error",duration:3e3,isClosable:!0})}))};return Object(c.jsxs)(b.a,{maxW:"xl",centerContent:!0,children:[Object(c.jsx)(u.a,{px:"10",pt:"10",children:Object(c.jsxs)(_.a,{textStyle:"title",children:[a.first_name," ",a.last_name]})}),Object(c.jsxs)(L.a,{px:"10",py:"5",textStyle:"info",children:[Object(c.jsx)(v.a,{children:Object(c.jsx)(u.a,{boxSize:"xs",overflow:"hidden",boxShadow:"lg",children:Object(c.jsx)(x.a,{maxW:"xs",objectFit:"cover",src:a.image_link,alt:"Actor image",fallback:Object(c.jsx)(f,{})})})}),a.seeking_role?Object(c.jsx)(O.a,{children:"Seeking role"}):null,Object(c.jsx)(v.a,{children:Object(c.jsxs)(b.a,{maxW:"3xs",my:"4",children:[Object(c.jsxs)(y.a,{children:[Object(c.jsx)(_.a,{children:"Age: "}),Object(c.jsx)(z.a,{}),Object(c.jsxs)(_.a,{children:[a.age," yrs"]})]}),Object(c.jsxs)(y.a,{children:[Object(c.jsx)(_.a,{children:"Gender: "}),Object(c.jsx)(z.a,{}),Object(c.jsxs)(_.a,{children:[a.gender," "]})]})]})}),Object(c.jsx)(_.a,{children:"Movies: "}),a.movies.map((function(e){return Object(c.jsx)(J.a,{as:l.b,to:"/movies/".concat(e.id),textStyle:"links",children:e.title},e.id)}))]}),Object(c.jsxs)(y.a,{p:"2",children:[Object(c.jsx)(l.c,{to:"/actors/".concat(k,"/edit"),children:Object(c.jsx)(S.a,{mr:"2",children:"Edit"})}),Object(c.jsx)(S.a,{ml:"2",bg:"red.500",onClick:function(){return h(!0)},children:"Delete"})]}),Object(c.jsx)(V.a,{isOpen:j,leastDestructiveRef:m,onClose:function(){return h(!1)},children:Object(c.jsx)(U.f,{children:Object(c.jsxs)(V.b,{children:[Object(c.jsx)(U.e,{fontSize:"lg",fontWeight:"bold",children:"Delete Actor"}),Object(c.jsx)(U.b,{children:"Are you sure? You can't undo this action afterwards."}),Object(c.jsxs)(U.d,{children:[Object(c.jsx)(S.a,{ref:m,onClick:function(){return h(!1)},children:"Cancel"}),Object(c.jsx)(S.a,{colorScheme:"red",onClick:function(){return w()},ml:3,children:"Delete"})]})]})})})]})},Z=function(){return Object(c.jsx)(u.a,{maxW:"xs",children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:"gkdfjoilfffffffffffffffffffffffjsofjo"})})})},K=function(e){var t=e.movie,n=t.id,r=t.title,i=t.poster,s=t.release_date,o=t.actors;return Object(c.jsx)(b.a,{children:Object(c.jsx)(u.a,{maxW:"md",w:"250px",h:"350px",rounded:"lg",borderRadius:"sm",boxShadow:"md",role:"group",bg:Object(h.d)("white","gray.700"),children:Object(c.jsxs)(l.c,{to:"/movies/".concat(n),children:[Object(c.jsxs)(u.a,{position:"absolute",w:"250px",h:"350px",py:"70px",textAlign:"center",color:"gray.300",fontWeight:"semibold",letterSpacing:"5px",fontSize:"xs",opacity:"0",textTransform:"uppercase",_groupHover:{opacity:1,transition:"opacity 0.2s ease-in",backgroundImage:"linear-gradient(to bottom, hsla(0, 0%, 0%, 0) 0%,hsla(0, 0%, 0%, 0.762) 94.1%,hsla(0, 0%, 0%, 0.790) 100%)"},children:[s.substring(7,16),Object(c.jsx)(_.a,{as:"p",mt:"200px",letterSpacing:"2px",children:o.slice(0,3).map((function(e,t){return t===o.length-1||2===t?Object(c.jsxs)(a.a.Fragment,{children:[" ",e.last_name]},e.id):Object(c.jsxs)(a.a.Fragment,{children:[" ",e.last_name," \u2022"]},e.id)}))})]}),Object(c.jsx)(u.a,{position:"absolute",w:"250px",mx:"auto",my:"auto",textAlign:"center",fontSize:"lg",fontWeight:"bold",textStyle:"heading",color:"white",pt:"275px",as:"span",_groupHover:{transform:"translateY(-60%)",transition:"transform 1000ms cubic-bezier(0.19, 1, 0.22, 1)"},children:r}),Object(c.jsx)(x.a,{w:"250px",h:"350px",src:i,alt:"movie poster",objectFit:"cover",fallback:Object(c.jsx)(Z,{})})]})})})},X="https://cast1ng-agency.herokuapp.com/api",$=function(){return C()("https://cast1ng-agency.herokuapp.com/api/movies",{headers:{"content-type":"application/json"}}).then((function(e){return e.data})).catch((function(e){e.response?console.log(e.response):e.request&&console.log(e.request)}))},ee=function(e){var t=X+"/movies/"+e;return C()(t,{headers:{"content-type":"application/json"}}).then((function(e){return e.data})).catch((function(e){if(e.response)return e.response.data;e.request&&console.log(e.request)}))},te=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(p.a)();return Object(r.useEffect)((function(){$().then((function(e){a(e.movies)})).catch((function(e){console.log(e),i({title:"Error",description:"Error has occured, Please try again later.",status:"error",duration:3e3,isClosable:!0})}))}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(b.a,{maxW:"xl",children:[Object(c.jsxs)(g.a,{columns:2,spacing:[52,36],pt:"20",children:[Object(c.jsx)(u.a,{children:Object(c.jsx)(v.a,{h:"80px",children:Object(c.jsx)(_.a,{textStyle:"heading",children:"Movies"})})}),Object(c.jsx)(u.a,{children:Object(c.jsx)(v.a,{h:"80px",children:Object(c.jsx)(l.c,{to:"/movies/add",children:Object(c.jsxs)(S.a,{colorScheme:"teal",variant:"solid",children:[Object(c.jsx)(k.a,{w:5,h:5,pr:"2"})," Add Movie"]})})})})]}),Object(c.jsx)(v.a,{children:Object(c.jsx)(y.a,{p:"10",mt:"5",children:Object(c.jsx)(g.a,{columns:[1,2,3],spacing:"40px",children:n.map((function(e){return Object(c.jsx)(u.a,{children:Object(c.jsx)(K,{movie:e})},e.id)}))})})})]})})},ne=function(e){var t=Object(r.useState)({id:0,title:"",poster:"",genre:"",release_date:"",seeking_talent:!1,actors:[]}),n=Object(d.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(!1),o=Object(d.a)(s,2),j=o[0],h=o[1],f=Object(r.useRef)(),m=Object(p.a)(),g=e.match.params.movieId;Object(r.useEffect)((function(){ee(g).then((function(e){i(e.movie)}))}),[]);var k=function(){(function(e){var t=X+"/movies/"+e;return C()(t,{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.data})).catch((function(e){if(e.response)return e.response.data;e.request}))})(g).then((function(e){e.success?(m({title:"Movie deleted",description:"Selected movie deleted successfully",status:"success",duration:3e3,isClosable:!0}),h(!1)):m({title:"Error",description:"An error has occured, Please try again later.",status:"error",duration:3e3,isClosable:!0})}))};return Object(c.jsxs)(b.a,{maxW:"xl",py:"10",centerContent:!0,children:[Object(c.jsx)(u.a,{px:"10",pt:"10",children:Object(c.jsx)(_.a,{textStyle:"title",children:a.title})}),Object(c.jsxs)(L.a,{px:"10",py:"5",textStyle:"info",children:[Object(c.jsx)(v.a,{children:Object(c.jsx)(u.a,{h:"450px",overflow:"hidden",boxShadow:"lg",children:Object(c.jsx)(x.a,{maxW:"xs",objectFit:"cover",src:a.poster,alt:"Movie poster",fallback:Object(c.jsx)(Z,{})})})}),a.seeking_talent?Object(c.jsx)(O.a,{children:"Seeking talent"}):null,Object(c.jsx)(v.a,{children:Object(c.jsxs)(b.a,{maxW:"xs",my:"4",children:[Object(c.jsxs)(y.a,{children:[Object(c.jsx)(_.a,{children:"Genre: "}),Object(c.jsx)(z.a,{}),Object(c.jsx)(_.a,{children:a.genre})]}),Object(c.jsxs)(y.a,{children:[Object(c.jsx)(_.a,{children:"Release Date: "}),Object(c.jsx)(z.a,{}),Object(c.jsx)(_.a,{children:a.release_date.substring(7,16)})]})]})}),Object(c.jsx)(_.a,{children:"Actors: "}),a.actors.map((function(e){return Object(c.jsxs)(J.a,{as:l.b,to:"/actors/".concat(e.id),textStyle:"links",children:[e.first_name," ",e.last_name]},e.id)}))]}),Object(c.jsxs)(y.a,{p:"2",children:[Object(c.jsx)(l.c,{to:"/movies/".concat(g,"/edit"),children:Object(c.jsx)(S.a,{mr:"2",children:"Edit"})}),Object(c.jsx)(S.a,{ml:"2",bg:"red.500",onClick:function(){return h(!0)},children:"Delete"})]}),Object(c.jsx)(V.a,{isOpen:j,leastDestructiveRef:f,onClose:function(){return h(!1)},children:Object(c.jsx)(U.f,{children:Object(c.jsxs)(V.b,{children:[Object(c.jsx)(U.e,{fontSize:"lg",fontWeight:"bold",children:"Delete Actor"}),Object(c.jsx)(U.b,{children:"Are you sure? You can't undo this action afterwards."}),Object(c.jsxs)(U.d,{children:[Object(c.jsx)(S.a,{ref:f,onClick:function(){return h(!1)},children:"Cancel"}),Object(c.jsx)(S.a,{colorScheme:"red",onClick:function(){return k()},ml:3,children:"Delete"})]})]})})})]})},ce=n(61),re=n(297),ae=n(307),ie=n(298),se=n(159),oe=n(308),le=n(27),je=n(154),de=n.n(je),be=n(158),ue=n(304),he=function(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),a=n[0],i=n[1];return Object(r.useEffect)((function(){"movies"===e.data?$().then((function(e){i(e.movies)})).catch((function(e){console.log(e)})):"actors"===e.data&&R().then((function(e){i(e.actors)})).catch((function(e){console.log(e)}))}),[]),Object(c.jsx)(u.a,{boxShadow:"base",borderRadius:"lg",maxH:"165px",overflow:"auto",bg:Object(h.d)("gray.100","#ffffff0a"),children:Object(c.jsx)(be.a,Object(o.a)(Object(o.a)({},e),{},{colorScheme:"teal",children:Object(c.jsx)(L.a,{pl:6,mt:1,spacing:1,children:a.map((function(t){return Object(c.jsx)(ue.a,{value:Number(t.id),children:"movies"===e.data?t.title:t.first_name+" "+t.last_name},t.id)}))})}))})},xe=(n(201),function(e){var t=Object(r.useState)({title:"",genre:"",release_date:"",poster:"",seeking_talent:!1,actors:{actor_ids:[]}}),n=Object(d.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)([]),l=Object(d.a)(s,2),j=l[0],h=l[1],x=Object(r.useState)(!1),O=Object(d.a)(x,2),f=O[0],m=O[1],g=Object(r.useState)(new Date),y=Object(d.a)(g,2),k=y[0],w=y[1],A=Object(p.a)(),R=e.match.params.movieId;console.log(k),Object(r.useEffect)((function(){"edit"===e.actionType&&ee(R).then((function(e){var t={title:e.movie.title,genre:e.movie.genre,release_date:e.movie.release_date,poster:e.movie.poster,seeking_talent:e.movie.seeking_talent,actors:{actor_ids:e.movie.actors.map((function(e){return e.id}))}};m(e.movie.seeking_talent),h(e.movie.actors.map((function(e){return e.id}))),i(t)}))}),[]);return Object(c.jsxs)(b.a,{maxW:"xl",py:"10",centerContent:!0,children:[Object(c.jsx)(u.a,{px:"10",pt:"5",children:Object(c.jsx)(_.a,{textStyle:"title",children:"edit"===e.actionType?"Edit Movie":"Add a new movie"})}),Object(c.jsx)(le.c,{initialValues:a,enableReinitialize:!0,validate:function(e){var t={};return e.title||(t.title="Required"),e.genre||(t.genre="Required"),e.release_date||(t.release_date="Required"),e.poster||(t.poster="Required"),e.seeking_talent=f,e.seeking_talent||(t.seeking_talent="Required"),t},onSubmit:function(t,n){var c;t.actors.actors_id=j,t.seeking_talent="true"===f,"edit"===e.actionType?function(e,t){var n=X+"/movies/"+t;return C()(n,{method:"PATCH",headers:{"content-type":"application/json"},data:e}).then((function(e){return e.data})).catch((function(e){if(e.response)return e.response.data;e.request}))}(t,R).then((function(e){e.success?(n.setSubmitting(!1),A({title:"Edit movie",description:"Movie information updated successfully.",status:"success",duration:3e3,isClosable:!0})):(n.setSubmitting(!1),A({title:"Error",description:"An error has occured!",status:"error",duration:3e3,isClosable:!0}))})):(c=t,C()("https://cast1ng-agency.herokuapp.com/api/movies",{method:"POST",headers:{"content-type":"application/json"},data:c}).then((function(e){return e.data})).catch((function(e){if(e.response)return e.response.data;e.request}))).then((function(e){e.success?(n.setSubmitting(!1),A({title:"Add movie",description:"Movie added correctly.",status:"success",duration:3e3,isClosable:!0})):(n.setSubmitting(!1),A({title:"Error",description:"An error has occured!",status:"error",duration:3e3,isClosable:!0}))}))},children:function(e){return Object(c.jsxs)(le.b,{children:[Object(c.jsxs)(L.b,{mt:"16",spacing:8,align:"stretch",w:["xs","sm","md","md"],children:[Object(c.jsx)(le.a,{name:"title",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(ce.a,{isInvalid:n.errors.title&&n.touched.title,isRequired:!0,children:[Object(c.jsx)(re.a,{htmlFor:"title",children:"Movie Title"}),Object(c.jsx)(ae.a,Object(o.a)(Object(o.a)({},t),{},{id:"title",variant:"filled",placeholder:"First name"})),Object(c.jsx)(ie.a,{children:n.errors.title})]})}}),Object(c.jsx)(le.a,{name:"genre",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(ce.a,{isInvalid:n.errors.genre&&n.touched.genre,isRequired:!0,children:[Object(c.jsx)(re.a,{htmlFor:"genre",children:"Genre"}),Object(c.jsx)(ae.a,Object(o.a)(Object(o.a)({},t),{},{id:"genre",variant:"filled",placeholder:"Last name"})),Object(c.jsx)(ie.a,{children:n.errors.genre})]})}}),Object(c.jsx)(le.a,{name:"poster",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(ce.a,{isInvalid:n.errors.poster&&n.touched.poster,isRequired:!0,children:[Object(c.jsx)(re.a,{htmlFor:"poster",children:"Poster"}),Object(c.jsx)(ae.a,Object(o.a)(Object(o.a)({},t),{},{id:"poster",variant:"filled",placeholder:"https://"})),Object(c.jsx)(ie.a,{children:n.errors.poster})]})}}),Object(c.jsx)(le.a,{name:"release_date",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(ce.a,{isInvalid:n.errors.release_date&&n.touched.release_date,isRequired:!0,children:[Object(c.jsx)(re.a,{htmlFor:"release_date",children:"Release Date"}),Object(c.jsx)(de.a,Object(o.a)(Object(o.a)({},t),{},{selected:k,onChange:function(e){return w(e)}})),Object(c.jsx)(ie.a,{children:n.errors.release_date})]})}}),Object(c.jsx)(le.a,{name:"seeking_talent",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(ce.a,{isInvalid:n.errors.seeking_talent&&n.touched.seeking_talent,isRequired:!0,children:[Object(c.jsx)(re.a,{htmlFor:"seeking_talent",children:"Seeking talent"}),Object(c.jsx)(se.a,Object(o.a)(Object(o.a)({},t),{},{onChange:m,value:f,children:Object(c.jsxs)(L.a,{direction:"row",spacing:5,children:[Object(c.jsx)(oe.a,{colorScheme:"green",value:"true",children:"Yes"}),Object(c.jsx)(oe.a,{colorScheme:"red",value:"false",children:"No"})]})})),Object(c.jsx)(ie.a,{children:n.errors.seeking_talent})]})}}),Object(c.jsxs)(ce.a,{children:[Object(c.jsx)(re.a,{htmlFor:"movies",children:"Actors: "}),Object(c.jsx)(he,{data:"actors",value:j,onChange:function(e){!function(e){var t=e.map((function(e){return Number(e)}));h(t)}(e)}})]})]}),Object(c.jsx)(v.a,{children:Object(c.jsx)(S.a,{mt:8,colorScheme:"teal",isLoading:e.isSubmitting,type:"submit",children:"Submit"})})]})}})]})}),Oe=function(e){var t=Object(r.useState)({first_name:"",last_name:"",age:"",gender:"",image_link:"",seeking_role:!1,movies:{movie_ids:[]}}),n=Object(d.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)([]),l=Object(d.a)(s,2),j=l[0],h=l[1],x=Object(r.useState)(!1),O=Object(d.a)(x,2),f=O[0],m=O[1],g=Object(p.a)(),y=e.match.params.actorId;Object(r.useEffect)((function(){"edit"===e.actionType&&q(y).then((function(e){console.log(e);var t={first_name:e.actor.first_name,last_name:e.actor.last_name,age:e.actor.age,gender:e.actor.gender,image_link:e.actor.image_link,seeking_role:e.actor.seeking_role,movies:{movie_ids:e.actor.movies.map((function(e){return e.id}))}};m(e.actor.seeking_role),h(e.actor.movies.map((function(e){return e.id}))),i(t)}))}),[]);return Object(c.jsxs)(b.a,{maxW:"xl",py:"10",centerContent:!0,children:[Object(c.jsx)(u.a,{px:"10",pt:"5",children:Object(c.jsx)(_.a,{textStyle:"title",children:"edit"===e.actionType?"Edit actor":"Enroll a new actor"})}),Object(c.jsx)(le.c,{initialValues:a,enableReinitialize:!0,validate:function(e){var t={};if(e.first_name||(t.first_name="Required"),e.last_name||(t.last_name="Required"),e.age?(isNaN(e.age)||e.age>100)&&(t.age="Not a valid age value"):t.age="Required",e.gender||(t.gender="Required"),e.image_link)try{new URL(e.image_link)}catch(n){t.image_link="Invalid image url"}return e.seeking_role=f,e.seeking_role||(t.seeking_role="Required"),t},onSubmit:function(t,n){var c;t.age=Number(t.age),t.movies.movie_ids=j,t.seeking_role="true"===f,"edit"===e.actionType?function(e,t){var n=A+"/actors/"+t;return C()(n,{method:"PATCH",headers:{"content-type":"application/json"},data:e}).then((function(e){return e.data})).catch((function(e){if(e.response)return e.response.data;e.request}))}(t,y).then((function(e){e.success?(n.setSubmitting(!1),g({title:"Edit actor",description:"Actor information updated successfully.",status:"success",duration:3e3,isClosable:!0})):(n.setSubmitting(!1),g({title:"Error",description:"An error has occured!",status:"error",duration:3e3,isClosable:!0}))})):(c=t,C()("https://cast1ng-agency.herokuapp.com/api/actors",{method:"POST",headers:{"content-type":"application/json"},data:c}).then((function(e){return e.data})).catch((function(e){if(e.response)return e.response.data;e.request}))).then((function(e){e.success?(n.setSubmitting(!1),g({title:"Enroll actor",description:"Actor added correctly.",status:"success",duration:3e3,isClosable:!0})):(n.setSubmitting(!1),g({title:"Error",description:"An error has occured!",status:"error",duration:3e3,isClosable:!0}))}))},children:function(e){return Object(c.jsxs)(le.b,{children:[Object(c.jsxs)(L.b,{mt:"16",spacing:8,align:"stretch",w:["xs","sm","md","md"],children:[Object(c.jsx)(le.a,{name:"first_name",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(ce.a,{isInvalid:n.errors.first_name&&n.touched.first_name,isRequired:!0,children:[Object(c.jsx)(re.a,{htmlFor:"first_name",children:"First Name"}),Object(c.jsx)(ae.a,Object(o.a)(Object(o.a)({},t),{},{id:"first_name",variant:"filled",placeholder:"First name"})),Object(c.jsx)(ie.a,{children:n.errors.first_name})]})}}),Object(c.jsx)(le.a,{name:"last_name",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(ce.a,{isInvalid:n.errors.last_name&&n.touched.last_name,isRequired:!0,children:[Object(c.jsx)(re.a,{htmlFor:"last_name",children:"Last Name"}),Object(c.jsx)(ae.a,Object(o.a)(Object(o.a)({},t),{},{id:"last_name",variant:"filled",placeholder:"Last name"})),Object(c.jsx)(ie.a,{children:n.errors.last_name})]})}}),Object(c.jsx)(le.a,{name:"age",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(ce.a,{isInvalid:n.errors.age&&n.touched.age,isRequired:!0,children:[Object(c.jsx)(re.a,{htmlFor:"age",children:"Age"}),Object(c.jsx)(ae.a,Object(o.a)(Object(o.a)({},t),{},{id:"age",variant:"filled",placeholder:"age"})),Object(c.jsx)(ie.a,{children:n.errors.age})]})}}),Object(c.jsx)(le.a,{name:"gender",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(ce.a,{isInvalid:n.errors.gender&&n.touched.gender,isRequired:!0,children:[Object(c.jsx)(re.a,{htmlFor:"gender",children:"Gender"}),Object(c.jsx)(ae.a,Object(o.a)(Object(o.a)({},t),{},{id:"gender",variant:"filled",placeholder:"gender"})),Object(c.jsx)(ie.a,{children:n.errors.gender})]})}}),Object(c.jsx)(le.a,{name:"image_link",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(ce.a,{isInvalid:n.errors.image_link&&n.touched.image_link,children:[Object(c.jsx)(re.a,{htmlFor:"image_link",children:"Profile image"}),Object(c.jsx)(ae.a,Object(o.a)(Object(o.a)({},t),{},{id:"image_link",variant:"filled",placeholder:"https://"})),Object(c.jsx)(ie.a,{children:n.errors.image_link})]})}}),Object(c.jsx)(le.a,{name:"seeking_role",children:function(e){var t=e.field,n=e.form;return Object(c.jsxs)(ce.a,{isInvalid:n.errors.seeking_role&&n.touched.seeking_role,isRequired:!0,children:[Object(c.jsx)(re.a,{htmlFor:"seeking_role",children:"Seeking roles"}),Object(c.jsx)(se.a,Object(o.a)(Object(o.a)({},t),{},{onChange:m,value:f,children:Object(c.jsxs)(L.a,{direction:"row",spacing:5,children:[Object(c.jsx)(oe.a,{colorScheme:"green",value:"true",children:"Yes"}),Object(c.jsx)(oe.a,{colorScheme:"red",value:"false",children:"No"})]})})),Object(c.jsx)(ie.a,{children:n.errors.seeking_role})]})}}),Object(c.jsxs)(ce.a,{children:[Object(c.jsx)(re.a,{htmlFor:"movies",children:"Movies: "}),Object(c.jsx)(he,{data:"movies",value:j,onChange:function(e){!function(e){var t=e.map((function(e){return Number(e)}));h(t)}(e)}})]})]}),Object(c.jsx)(v.a,{children:Object(c.jsx)(S.a,{mt:8,colorScheme:"teal",isLoading:e.isSubmitting,type:"submit",children:"Submit"})})]})}})]})},fe=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"404 not found"})})};var me=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(B,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/",component:G}),Object(c.jsx)(j.a,{exact:!0,path:"/movies",component:te}),Object(c.jsx)(j.a,{exact:!0,path:"/movies/add",component:xe}),Object(c.jsx)(j.a,{exact:!0,path:"/movies/:movieId",component:ne}),Object(c.jsx)(j.a,{exact:!0,path:"/movies/:movieId/edit",render:function(e){return Object(c.jsx)(xe,Object(o.a)(Object(o.a)({},e),{},{actionType:"edit"}))}}),Object(c.jsx)(j.a,{exact:!0,path:"/actors",component:E}),Object(c.jsx)(j.a,{exact:!0,path:"/actors/add",component:Oe}),Object(c.jsx)(j.a,{exact:!0,path:"/actors/:actorId",component:Q}),Object(c.jsx)(j.a,{exact:!0,path:"/actors/:actorId/edit",render:function(e){return Object(c.jsx)(Oe,Object(o.a)(Object(o.a)({},e),{},{actionType:"edit"}))}}),Object(c.jsx)(j.a,{exact:!0,path:"/404",component:fe})]})]})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,309)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},ge=function(e){var t=e.children,n=Object(j.f)();return Object(c.jsx)(T.a,{domain:"coffeee-shop-fsnd.us.auth0.com",clientId:"EuAfCzJjdnIVQIMF2eBgcefrxM3jdeyZ",redirectUri:window.location.origin,onRedirectCallback:function(e){n.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},children:t})},ve=n(305),_e=n(299),Se=n(282),ye=Object(_e.a)({styles:{global:function(e){return{body:{color:Object(Se.a)("gray.700","whiteAlpha.900")(e),fontFamily:"Lora, serif",fontWeights:{normal:400,medium:500,bold:700}},label:{color:Object(Se.a)("red.700","green.900")(e)}}}},textStyles:{heading:{textAlign:"center",fontWeight:"bold",letterSpacing:"-0.015em",lineHeight:"1.24",fontSize:{base:"2rem",md:"3.5rem"}},subheading:{textAlign:"center",fontWeight:"bold",letterSpacing:"-0.015em",lineHeight:"1.24",fontSize:{base:"1.70rem",md:"2.70rem"}},title:{textAlign:"center",fontWeight:"semibold",letterSpacing:"-0.015em",lineHeight:"1.24",fontSize:{base:"1.60rem",md:"2.60rem"}},info:{textAlign:"center",fontWeight:"regular",letterSpacing:"0.015em",lineHeight:"1.55",fontSize:{base:"1.15rem",md:"1.25rem"}},links:{color:"teal.500",fontWeight:"semibold",transition:"color 0.15s",transitionTimingFunction:"ease-out",_hover:{color:"teal.600"}}}});s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(ge,{children:Object(c.jsx)(ve.a,{theme:ye,children:Object(c.jsx)(me,{})})})}),document.getElementById("root")),pe()}},[[262,1,2]]]);
//# sourceMappingURL=main.fc1a1b36.chunk.js.map