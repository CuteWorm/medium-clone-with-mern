(this["webpackJsonpmedium-clone-with-mern"]=this["webpackJsonpmedium-clone-with-mern"]||[]).push([[9],{108:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(31),l=a(654),i=a(622),o=a(109),s=a.n(o),u=a(95);a(114);t.a=function(){return n.a.createElement("div",{className:"header-wrapper"},n.a.createElement("div",{className:"ui container"},n.a.createElement(l.a,{secondary:!0,className:"site-header"},n.a.createElement(l.a.Item,{name:"logo",className:"logo",as:c.b,to:"/"},n.a.createElement(i.a,{src:s.a,alt:"Logo"})),n.a.createElement(l.a.Item,{name:"topStories"},n.a.createElement(c.b,{to:"/"},"Top Stories")),n.a.createElement(l.a.Menu,{position:"right",className:"sign-in"},n.a.createElement(l.a.Item,{name:"signin"},n.a.createElement(u.a,null))))))}},109:function(e,t,a){e.exports=a.p+"static/media/stories-logo.a38b51bf.svg"},112:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},139:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"g",(function(){return u})),a.d(t,"f",(function(){return m})),a.d(t,"c",(function(){return d})),a.d(t,"e",(function(){return p})),a.d(t,"b",(function(){return f})),a.d(t,"a",(function(){return E}));var r=a(9),n=a.n(r),c=a(15),l=a(25),i=a(2),o=a(23),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("/articles/feed?page=".concat(e));case 2:r=t.sent,a({type:1===e?i.LOAD_ARTICLES:i.LOAD_MORE_ARTICLES,payload:r.data.articles});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},u=function(){return function(){var e=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:i.RESET_ARTICLES});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/articles/popular");case 2:a=e.sent,t({type:i.LOAD_ARTICLES_POPULAR,payload:a.data.articles});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("/articles/"+e);case 2:(r=t.sent).data&&a({type:i.LOAD_ARTICLE_DETAILS_SUCCESS,payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var e=Object(c.a)(n.a.mark((function e(t,a){var r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(o.a)(a),e.next=3,l.a.get("/articles/me",r);case 3:(c=e.sent).data&&t({type:i.LOAD_MY_ARTICLES,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a,r){var c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(o.a)(r),t.next=3,l.a.delete("articles/"+e,c);case 3:t.sent.data.success&&a({type:i.DELETE_ARTICLE_SUCCESS,payload:e});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a,r){var c,s;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(o.a)(r),t.next=3,l.a.patch("articles/".concat(e,"/clap"),c);case 3:(s=t.sent).data.success&&a({type:i.ARTICLE_CLAP_SUCCESS,payload:s.data.article});case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}},143:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(18),l=a(108);a(115);t.a=Object(c.b)((function(e){return{auth:e.auth}}),{})((function(e){e.auth;var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,null),n.a.createElement("div",{className:"page-content"},t))}))},254:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(0),n=a.n(r),c=a(31),l=a(371),i=a(622);function o(e){var t=e.authorId,a=e.authorName,r=e.authorImageUrl,o=e.createdAt;return n.a.createElement("div",null,n.a.createElement(l.a,{size:"small"},n.a.createElement(i.a,{circular:!0,src:r}),n.a.createElement(l.a.Content,null,n.a.createElement(c.b,{to:"authors/".concat(t)},a),n.a.createElement(l.a.Subheader,null,o))))}},362:function(e,t){},363:function(e,t){},620:function(e,t,a){},655:function(e,t,a){"use strict";a.r(t),a.d(t,"ViewStory",(function(){return O}));var r=a(0),n=a.n(r),c=a(18),l=a(143),i=a(257),o=a(621),s=a(352),u=a.n(s),m=a(31),d=a(371),p=a(622),f=a(651),E=a(139),h=a(254),g=a(640),b=a(641),v=a(642),w=a(614);function y(e){var t=e.url;return n.a.createElement("div",null,n.a.createElement(g.a,{url:t},n.a.createElement(w.SocialIcon,{url:t,network:"facebook",style:{marginLeft:"10px",width:"30px",height:"30px"}})),n.a.createElement(b.a,{url:t},n.a.createElement(w.SocialIcon,{url:t,network:"linkedin",style:{marginLeft:"10px",width:"30px",height:"30px"}})),n.a.createElement(v.a,{url:t},n.a.createElement(w.SocialIcon,{url:t,network:"twitter",style:{marginLeft:"10px",width:"30px",height:"30px"}})))}a(620);var I={loadArticleDetails:E.c},S=Object(c.b)((function(e){return{article:e.articleViewer.articleDetails}}),I)((function(e){var t=e.articleId,a=e.article,c=e.loadArticleDetails;Object(r.useEffect)((function(){c(t)}),[t,c]);return a?n.a.createElement("div",{className:"story-viewer-wrapper narrow-page-content"},n.a.createElement(d.a,{as:"h1"},a.title),n.a.createElement("div",{style:{display:"flex",marginBottom:"3rem",marginTop:"2rem",alignItems:"center"}},n.a.createElement(h.a,{authorId:a.author.id,authorName:a.author.name,authorImageUrl:a.author.profileImageUrl,createdAt:a.displayedDate}),n.a.createElement("div",{style:{flex:1}}),n.a.createElement(y,{url:window.location.href})),n.a.createElement(p.a,{src:a.featureImage}),u()(a.content),n.a.createElement("div",{style:{display:"flex",marginBottom:"3rem",marginTop:"2rem",alignItems:"center"}},n.a.createElement(o.a,{count:0,countTotal:0,maxCount:50,isClicked:!1,onCountChange:function(){}}),n.a.createElement("div",{style:{flex:1}}),n.a.createElement(y,{url:window.location.href})),n.a.createElement(f.a,{info:!0,style:{textAlign:"center"}},n.a.createElement(m.b,{to:"/view-story/".concat(a._id,"/comments")},"See responses (",a.comments.length,")"))):n.a.createElement("div",null,"Loading...")})),x=a(11),O=function(){var e=Object(x.f)()._id;return n.a.createElement(l.a,null,n.a.createElement(i.a,null,n.a.createElement(S,{articleId:e})))};t.default=Object(c.b)((function(e){return{}}),{})(O)},95:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(18),l=a(31),i=a(622),o=a(649),s=a(23),u=a(646),m=a(656),d=a(657),p=a(636),f=a(653),E=a(373),h=a(19),g=a(106),b=a(11),v=a(651),w=a(645),y=a(105),I=y.a({email:y.b().email("Invalid email address").required("Required"),password:y.b().min(6,"Must be 6 characters at minimum").max(20,"Must be 20 characters or less").required("Required")}),S=Object(c.b)((function(e){return{auth:e.auth}}),{loginUserWithEmail:s.e})((function(e){var t=Object(g.a)({initialValues:{email:"",password:""},validationSchema:I,onSubmit:function(t){e.loginUserWithEmail(t)}});return e.auth.isAuthenticated?n.a.createElement(b.a,{to:"/"}):n.a.createElement("div",null,n.a.createElement(v.a,{attached:!0,header:"Already signed up?",content:"Login here"}),n.a.createElement(w.a,{className:"attached fluid segment",onSubmit:t.handleSubmit},n.a.createElement(v.a,{negative:!0,style:{display:e.auth.error?"block":"none"}},n.a.createElement("p",null,e.auth.error&&e.auth.error.errorMessage)),n.a.createElement(w.a.Input,Object.assign({name:"email",label:"Email",type:"text",placeholder:"Email"},t.getFieldProps("email"),t.touched.email&&t.errors.email?{error:t.errors.email}:{})),n.a.createElement(w.a.Input,Object.assign({name:"password",label:"Password",type:"password",placeholder:"Password"},t.getFieldProps("password"),t.touched.password&&t.errors.password?{error:t.errors.password}:{})),n.a.createElement(f.a,{type:"submit"},"Submit")))})),x=a(9),O=a.n(x),L=a(15),k=a(2),A=a(24),C=y.a({firstName:y.b().min(2,"Must be 2 characters at minimum").max(30,"Must be 30 characters or less").required("This field is required"),lastName:y.b().min(2,"Must be 2 characters at minimum").max(30,"Must be 30 characters or less").required("This field is required"),email:y.b().email("Invalid email address").required("This field is required"),password:y.b().min(6,"Must be 6 characters at minimum").max(20,"Must be 20 characters or less").required("This field is required")}),_=Object(c.b)((function(e){return{auth:e.auth,register:e.register}}),{registerUser:function(e){return function(){var t=Object(L.a)(O.a.mark((function t(a,r){var n,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:k.REGISTER_WITH_EMAIL_LOADING}),t.prev=1,t.next=4,A.a.post("/register",e);case 4:n=t.sent,a({type:k.REGISTER_WITH_EMAIL_SUCCESS}),a({type:k.LOGIN_WITH_EMAIL_SUCCESS,payload:{token:n.data.token,me:n.data.me}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a({type:k.REGISTER_WITH_EMAIL_FAIL,payload:{error:(null===t.t0||void 0===t.t0||null===(c=t.t0.response)||void 0===c?void 0:c.data.message)||t.t0.message}});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,a){return t.apply(this,arguments)}}()}})((function(e){var t=Object(g.a)({initialValues:{firstName:"",lastName:"",email:"",password:""},validationSchema:C,onSubmit:function(t){e.registerUser(t)}});return e.auth.isAuthenticated?n.a.createElement(b.a,{to:"/"}):n.a.createElement("div",null,n.a.createElement(v.a,{attached:!0,header:"Welcome to our site!",content:"Fill out the form below to sign-up for a new account"}),n.a.createElement(w.a,{className:"attached fluid segment",onSubmit:t.handleSubmit},n.a.createElement(v.a,{negative:!0,style:{display:e.register.error?"block":"none"}},n.a.createElement("p",null,e.register.error&&e.register.error)),n.a.createElement(w.a.Input,Object.assign({name:"firstName",label:"First name",type:"text",placeholder:"First name"},t.getFieldProps("firstName"),t.touched.firstName&&t.errors.firstName?{error:t.errors.firstName}:{})),n.a.createElement(w.a.Input,Object.assign({name:"lastName",label:"Last name",type:"text",placeholder:"Last name"},t.getFieldProps("lastName"),t.touched.lastName&&t.errors.lastName?{error:t.errors.lastName}:{})),n.a.createElement(w.a.Input,Object.assign({name:"email",label:"Email",type:"email",placeholder:"Email"},t.getFieldProps("email"),t.touched.email&&t.errors.email?{error:t.errors.email}:{})),n.a.createElement(w.a.Input,Object.assign({name:"password",label:"Password",type:"password",placeholder:"Password"},t.getFieldProps("password"),t.touched.password&&t.errors.password?{error:t.errors.password}:{})),n.a.createElement(f.a,{type:"submit"},"Submit")))})),j=(a(112),Object(c.b)((function(e){return{}}),{})((function(e){var t=e.open,a=e.trigger;return n.a.createElement(u.a,{open:t,trigger:a},n.a.createElement(u.a.Header,null,"Welcome"),n.a.createElement(u.a.Content,null,n.a.createElement(m.a,null,n.a.createElement(d.a,{columns:2,stackable:!0},n.a.createElement(p.a,{vertical:!0},"Or"),n.a.createElement(d.a.Row,null,n.a.createElement(d.a.Column,null,n.a.createElement(_,null)),n.a.createElement(d.a.Column,null,n.a.createElement(S,null),n.a.createElement(p.a,{horizontal:!0},"Or Sign in with socials"),n.a.createElement(m.a,null,n.a.createElement(f.a,{color:"facebook",onClick:function(){return window.location.href=h.d}},n.a.createElement(E.a,{name:"facebook"})," Facebook"),n.a.createElement(f.a,{color:"google plus",onClick:function(){return window.location.href=h.e}},n.a.createElement(E.a,{name:"google"})," Google"))))))))}))),N=function(e){var t=e.auth,a=e.logOut,r=e.buttonText;if(!t.isAuthenticated||!t.me)return n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{trigger:n.a.createElement("button",{id:"signInButton"},r)}));var c=n.a.createElement("span",null,n.a.createElement(i.a,{avatar:!0,src:t.me.profileImageUrl})," ",t.me.name);return n.a.createElement(o.a,{trigger:c},n.a.createElement(o.a.Menu,null,n.a.createElement(o.a.Item,{key:"new-story"},n.a.createElement(l.b,{to:"/new-story"},"New story")),n.a.createElement(o.a.Item,{key:"stories"},n.a.createElement(l.b,{to:"/my-stories"},"Stories")),n.a.createElement(o.a.Item,{key:"logout",onClick:function(){return a()}},"Logout")))};N.defaultProps={buttonText:"Sign in/Sign up"};t.a=Object(c.b)((function(e){return{auth:e.auth}}),{logOut:s.d})(N)}}]);
//# sourceMappingURL=ViewStory.2c7a6bd4.chunk.js.map