_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/EDR":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("QeBL")}])},QeBL:function(t,n,e){"use strict";e.r(n),e.d(n,"__N_SSG",(function(){return Rt}));var o=e("BsWD");function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],o=!0,i=!1,a=void 0;try{for(var r,l=t[Symbol.iterator]();!(o=(r=l.next()).done)&&(e.push(r.value),!n||e.length!==n);o=!0);}catch(c){i=!0,a=c}finally{try{o||null==l.return||l.return()}finally{if(i)throw a}}return e}}(t,n)||Object(o.a)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a,r=e("q1tI"),l=e.n(r),c=e("vOnD");!function(t){t.Root="/",t.IndexSection="indexSection",t.PostSection="postSection",t.SeminarSection="seminarSection",t.EndSection="endSection"}(a||(a={}));var d=e("LQgq"),s=function(){var t=Object(r.useContext)(d.b);return{open:t.open,close:t.close}},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"up",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=Object(r.useRef)(),a=function(t){switch(t){case"up":return"translate3d(0, 20%, 0)";case"down":return"translate3d(0, -50%, 0)";case"left":return"translate3d(50%, 0, 0)";case"right":return"translate3d(-50%, 0, 0)";default:return}},l=Object(r.useCallback)((function(t){var a=i(t,1)[0],r=o.current;r&&a.isIntersecting&&(r.style.transitionProperty="all",r.style.transitionDuration="".concat(n,"s"),r.style.transitionTimingFunction="cubic-bezier(0, 0, 0.2, 1)",r.style.transitionDelay="".concat(e,"s"),r.style.opacity="1",r.style.transform="translate3d(0, 0, 0)")}),[e,n]);return Object(r.useEffect)((function(){var t,n=o.current;if(n)return(t=new IntersectionObserver(l,{threshold:.7})).observe(n),function(){return t&&t.disconnect()}}),[l]),{ref:o,style:{opacity:0,transform:a(t)}}},u=l.a.createElement,m=function(t){var n=t.href,e=t.children;return u("a",{href:"#".concat(n)},e)},g=Object(c.b)(["0%{transform:translateY(-50px);opacity:0;-webkit-clip-path:polygon(100% 0,100% 100%,0 100%,0 80%);clip-path:polygon(100% 0,100% 100%,0 100%,0 80%);}20%{transform:translateY(0);opacity:1;-webkit-clip-path:polygon(100% 0,100% 100%,0 100%,0 15%);clip-path:polygon(100% 0,100% 100%,0 100%,0 15%);}80%{transform:translateY(0);opacity:1;-webkit-clip-path:polygon(100% 0,100% 100%,0 100%,0 15%);clip-path:polygon(100% 0,100% 100%,0 100%,0 15%);}100%{transform:translateY(50px);opacity:0;-webkit-clip-path:polygon(100% 0,100% -0%,0 100%,0 100%);clip-path:polygon(100% 0,100% -0%,0 100%,0 100%);}"]),h=c.a.span.withConfig({displayName:"Styled__StyledNextSpan",componentId:"w4t7zu-0"})(["float:right;color:gray;animation-name:",";animation-duration:3s;animation-timing-function:ease;animation-iteration-count:infinite;"],g),f=l.a.createElement,y=function(t){var n=t.issueData.comments.edges.map((function(t){return{author:t.node.author.login,text:t.node.body,createdAt:new Date(t.node.createdAt)}}));return f(b,null,f("h1",null,"\ubc29\uba85\ub85d"),f(v,null,n.map((function(t,n){var e=t.author,o=t.text,i=t.createdAt;return f("div",{key:e+o},f(w,null,i.toLocaleDateString(),i.toLocaleTimeString(),"]"," "),f(k,{idx:n},e,": "),f("span",null,o))}))))},b=c.a.div.withConfig({displayName:"VisitorContent__Section",componentId:"sc-1m46f4q-0"})(["margin:5%;"]),v=c.a.div.withConfig({displayName:"VisitorContent__Content",componentId:"sc-1m46f4q-1"})(["overflow-y:auto;h3{font-family:system-ui;}"]),w=c.a.span.withConfig({displayName:"VisitorContent__LocaleSpan",componentId:"sc-1m46f4q-2"})(["color:gray;"]),_=["darkcyan","blue","purple","red","orange"],k=c.a.span.withConfig({displayName:"VisitorContent__Nickname",componentId:"sc-1m46f4q-3"})(["color:",";"],(function(t){return _[t.idx%_.length]})),C=l.a.createElement,S=function(t){var n=t.issueData,e=p(),o=s().open;return C(x,null,C(N,{id:a.EndSection},C("div",e,C("h1",null,"EndSection"),C(I,null,["#f9f7e8","magenta","lightgreen"].map((function(t,n){return C("h1",{key:n+t},C(h,{style:{color:t,fontSize:"7rem",marginRight:"5vh",backgroundColor:"black"}},":wq!"))}))),C("button",{onClick:function(){o({renderContent:function(){return C(y,{issueData:n})}})}},"\ubc29\uba85\ub85d \ubcf4\uae30"),C(m,{href:a.Root},"\u2191TOP"))))},x=c.a.section.withConfig({displayName:"EndSection__Section",componentId:"sc-1r4bjig-0"})(["padding-bottom:100px;"]),N=c.a.div.withConfig({displayName:"EndSection__Container",componentId:"sc-1r4bjig-1"})(["padding-top:120px;width:1200px;margin:0 auto;height:60vh;a{float:right;color:gray;}button{color:skyblue;font-size:1.5rem;background-color:transparent;border:none;cursor:pointer;}"]),I=c.a.div.withConfig({displayName:"EndSection__CenterToCenter",componentId:"sc-1r4bjig-2"})(["height:40vh;display:flex;align-items:center;justify-content:center;"]),E=c.a.div.withConfig({displayName:"Description",componentId:"sc-18n8zrp-0"})(["padding-top:1vh;font-family:system-ui;font-size:1.3rem;padding-left:5%;"]),j=l.a.createElement,O=function(){var t=p();return j(D,null,j(z,{id:a.IndexSection},j("div",t,j("img",{src:"/static/cover.png",width:"100%"}),j(U,null,j("h2",null,"\ud589\uc0ac \uc21c\uc11c"),j("ul",null,j("li",null,j("div",null,"1. ROAD-of-CODEr \uc5f0\ub9d0 \uc815\uc0b0",j("span",null,"(21:00 ~ 21:40)")),j(E,null,"- \ud55c \ud574\ub97c \ub3cc\uc544\ubcf4\uace0 \ub0b4\ub144\uc5d0 \ub300\ud55c \uc758\uacac \uacf5\uc720 \ubc0f \ud53c\ub4dc\ubc31")),j("li",null,j("div",null,"2. \uc791\uc740 \uc138\ubbf8\ub098",j("span",null,"(21:50 ~ 22:30)")),j(E,null,"- \ud558\uc601\ub2d8"),j(E,null,"- \ub0e0\ub0e0\ub9e8"),j(E,null,"- 1ilsang")),j("li",null,j("div",null,"3. \ub9c8\ubb34\ub9ac \ubc0f \ub124\ud2b8\uc6cc\ud0b9",j("span",null,"(22:30 ~ 23:00)")),j(E,null,"- \uc124\ubb38\uc870\uc0ac")))),j(m,{href:a.PostSection},j(h,null,"NEXT")))))},D=c.a.section.withConfig({displayName:"IndexSection__Section",componentId:"sc-1nrkkem-0"})(["padding-top:140px;padding-bottom:100px;background-color:white;div{position:relative;width:1200px;margin:0 auto;}"]),z=c.a.div.withConfig({displayName:"IndexSection__Container",componentId:"sc-1nrkkem-1"})(["padding-top:100px;overflow:hidden;"]),U=c.a.div.withConfig({displayName:"IndexSection__IndexArea",componentId:"sc-1nrkkem-2"})(["padding-left:15%;display:block;ul{list-style:none;}li{font-size:1.8rem;margin-top:2vh;span{font-family:system-ui;font-size:1.3rem;}}"]),R=[{title:"stupid-week",description:"\uc774\ubc88\uc8fc\ub294 \uc815\ub9d0 \uc804\uc124\uc774\ub2e4... \ub0b4\uac00\uc54c\ub358 \uadf8 \ucc10\ub530\uac19\ub358 \ud55c\uc8fc\uac00 \ub9de\ub0d0? \uac00\uc2b4\uc774 \uc6c5\uc7a5\ud574\uc9c4\ub2e4",repoUrl:"https://github.com/Road-of-CODEr/stupid-week",imageUrl:"/static/stupid-week.png"},{title:"we-hate-js",description:"\ub204\uad6c\ubcf4\ub2e4 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2eb\uc5b4\ud558\ub294 \uc0ac\ub78c\ub4e4\uc758 \uacf5\uac04",repoUrl:"https://github.com/Road-of-CODEr/we-hate-js",imageUrl:"/static/we-hate-js.png"},{title:"netty-reactive",description:"Spring Reactive\ub97c \uacf5\ubd80\ud558\uae30 \uc704\ud55c \uc800\uc7a5\uc18c",repoUrl:"https://github.com/Road-of-CODEr/netty-reactive",imageUrl:"/static/netty-reactive.png"},{title:"http-perfect-guide",description:"HTTP \uc644\ubcbd\uac00\uc774\ub4dc\ub97c \uc77d\uace0 \uc815\ub9ac\ud55c \uc800\uc7a5\uc18c",repoUrl:"https://github.com/Road-of-CODEr/http-perfect-guide",imageUrl:"/static/http-perfect-guide.png"},{title:"computer-science",description:'\uc774\uac8c \uc65c \uc804\uacf5"\uae30\ucd08"\uc784? \uc815\uc2e0\ub098\uac08\uac70\uac19\uc560',repoUrl:"https://github.com/Road-of-CODEr/computer-science",imageUrl:"/static/computer-science.png"},{title:"we-hate-jvm",description:"\ub204\uad6c\ubcf4\ub2e4 JVM \uc5b8\uc5b4\ub4e4\uc744 \uc2eb\uc5b4\ud558\ub294 \uc0ac\ub78c\ub4e4\uc758 \uacf5\uac04",repoUrl:"https://github.com/Road-of-CODEr/we-hate-jvm",imageUrl:"/static/we-hate-jvm.png"},{title:"one-percent-network",description:"\uc131\uacf5\uacfc \uc2e4\ud328\ub97c \uacb0\uc815\ud558\ub294 1%\uc758 \ub124\ud2b8\uc6cc\ud06c \uc6d0\ub9ac \uacf5\ubd80",repoUrl:"https://github.com/Road-of-CODEr/one-percent-network",imageUrl:"/static/one-percent-network.png"},{title:"clean-code",description:"\ud074\ub9b0\ucf54\ub4dc \ucc45 \uc2a4\ud130\ub514",repoUrl:"https://github.com/Road-of-CODEr/clean-code",imageUrl:"/static/clean-code.png"},{title:"do-it-react",description:"Do it \ub9ac\uc561\ud2b8 \ud504\ub85c\uadf8\ub798\ubc0d \uacf5\ubd80\ud558\ub294 \ub808\ud30c\uc9c0\ud1a0\ub9ac",repoUrl:"https://github.com/Road-of-CODEr/do-it-react",imageUrl:"/static/do-it-react.png"}],P=l.a.createElement,A=function(){return P(L,null,P("h1",null,"2021\ub144\uc5d0\ub294..."),P(T,null,P("h2",null,"1. \uc870\uae08 \ub354 \uce5c\ubaa9\uc744!!!"),P("h2",null,"2. \uc2a4\ud130\ub514\ub97c \ud65c\uc6a9\ud560 \uc218 \uc788\ub294 \ud1a0\uc774 \ud504\ub85c\uc81d\ud2b8"),P("h2",null,"3. \ube44\uc5b4\uc788\ub294 \ub808\ud3ec \uc5f4\uc2ec\ud788 \ucc44\uc6b0\uae30"),P("hr",null),P(Y,null,P("h2",null,"\ub354 \ub2e4\uc591\ud55c \uacf3\uc5d0 \uc18c\uac1c\ud560 \uc608\uc815"),P("h2",null,"\uc11c\ube0c \ubaa8\ub4c8\ub85c \uc0ac\uc6a9\ud560\uc9c0 \uc758\ubb38"),P("h2",null,"\ub2e4\uc591\ud55c \uc9c1\uad70\uc744 \uc12d\uc678\ud558\uace0 \uc2f6\uc5b4\uc694"))))},L=c.a.div.withConfig({displayName:"NextYearContent__Section",componentId:"sc-1cu5zdk-0"})(["margin:5%;h1{margin-bottom:3%;}"]),T=c.a.div.withConfig({displayName:"NextYearContent__Content",componentId:"sc-1cu5zdk-1"})(["overflow-y:auto;img{width:70%;}h3{font-family:system-ui;}a{margin-right:30%;color:skyblue;float:right;}hr{margin:5%;}"]),Y=c.a.div.withConfig({displayName:"NextYearContent__RightContent",componentId:"sc-1cu5zdk-2"})(["float:right;text-align:right;"]),B=l.a.createElement,q=function(t){var n=t.repoData,e=n.title,o=n.description,i=n.repoUrl,a=n.imageUrl;return B(V,null,B("h1",null,B("a",{href:i},e)),B(F,null,B("img",{src:a}),B("h3",null,o),B("a",{href:i},"\ub808\ud3ec \ub180\ub7ec\uac00\uae30")))},V=c.a.div.withConfig({displayName:"PostContent__Section",componentId:"sc-9e5gdw-0"})(["margin:5%;"]),F=c.a.div.withConfig({displayName:"PostContent__Content",componentId:"sc-9e5gdw-1"})(["overflow-y:auto;img{width:70%;}h3{font-family:system-ui;}a{margin-right:30%;color:skyblue;float:right;}"]),Q=l.a.createElement,J=function(){var t=p(),n=s().open;return Q(M,{id:a.PostSection},Q("div",null,Q(X,null,Q("h1",null,"\uadf8\ub8f9 \uc815\uc0b0"),Q(G,null),Q(W,null),Q(H,null),Q(K,null)),Q(Z,null,Q("div",t,Q("ul",null,R.map((function(t){var e=t.title;return Q("li",{key:e,onClick:function(){return function(t){n({renderContent:function(){return Q(q,{repoData:t})}})}(t)}},Q("h1",null,e))})))),Q($,null,Q(E,null,"2020\ub144\uc740 \ucf54\ub85c\ub098\ub85c \ubaa8\ub4e0 \uc138\ubbf8\ub098 \ubc0f \uc2a4\ud130\ub514\uac00 \uc6d0\uaca9\uc73c\ub85c \uc9c4\ud589\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),Q(E,null,"\uadf8\ub9cc\ud07c \ub2e4\uc591\ud55c \ub808\ud3ec\ub4e4\uc774 \ucd94\uac00\ub418\uc5c8\ub294\ub370\uc694, \uc5b4\ub5a4 \uac83\ub4e4\uc774 \ucd94\uac00\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud574 \ubcfc\uae4c\uc694?"),Q(E,null,"\ub9ce\uc774 \ucc38\uc5ec\ud574 \uc8fc\uc154\uc11c \uc815\ub9d0 \uac10\uc0ac\ud569\ub2c8\ub2e4."),Q(E,null,"\ub0b4\ub144\uc5d0 \ub9cc\ub098\uc694!"),Q(E,null),Q(tt,{onClick:function(){n({renderContent:function(){return Q(A,null)}})}},"\ub0b4\ub144\uc5d0\ub294 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694?"),Q(m,{href:a.SeminarSection},Q(h,null,"Next"))))))},M=c.a.section.withConfig({displayName:"PostSection__Section",componentId:"sc-1jrkal3-0"})(["padding-bottom:100px;"]),X=c.a.div.withConfig({displayName:"PostSection__TitleArea",componentId:"sc-1jrkal3-1"})(["background:url(/static/code-cover.jpg) 0 0 no-repeat;background-size:cover;height:40vh;h1{position:relative;width:1200px;padding-top:100px;margin:0 auto;color:white;font-size:6rem;line-height:9rem;}"]),G=c.a.div.withConfig({displayName:"PostSection__LineBody",componentId:"sc-1jrkal3-2"})(["background-color:lightseagreen;opacity:0.2;margin-top:10vh;height:20vh;width:100%;display:inline-block;transform:skewY(-3deg);"]),H=Object(c.a)(G).withConfig({displayName:"PostSection__LineBody2",componentId:"sc-1jrkal3-3"})(["background-color:lightcoral;margin-top:0;transform:skewY(-3deg);"]),W=Object(c.a)(H).withConfig({displayName:"PostSection__LineBody3",componentId:"sc-1jrkal3-4"})(["background-color:blue;transform:skewY(3deg);"]),K=Object(c.a)(H).withConfig({displayName:"PostSection__LineBody4",componentId:"sc-1jrkal3-5"})(["background-color:yellow;transform:skewY(3deg);"]),Z=c.a.div.withConfig({displayName:"PostSection__BodyArea",componentId:"sc-1jrkal3-6"})(["ul{width:63%;margin-left:18%;margin-top:-12vh;position:relative;z-index:2;padding:0;overflow-x:scroll;white-space:nowrap;&::-webkit-scrollbar{display:none !important;}}li{display:inline-block;overflow:hidden;width:350px;height:30vh;margin-right:35px;margin-top:35px;background-color:white;text-align:center;transition:width 2s,height 2s,background-color 2s,transform 2s;cursor:pointer;:hover{color:white;background-color:peru;transform:rotate(10deg);}}"]),$=c.a.div.withConfig({displayName:"PostSection__Container",componentId:"sc-1jrkal3-7"})(["padding-top:120px;width:1200px;margin:0 auto;height:30vh;position:relative;"]),tt=Object(c.a)(E).withConfig({displayName:"PostSection__OpenModalDescription",componentId:"sc-1jrkal3-8"})(["cursor:pointer;color:blueviolet;:hover{margin-left:10px;}"]),nt=l.a.createElement,et=function(){return nt(it,null,"|")},ot=Object(c.b)(["0%{opacity:0}50%{opacity:1}100%{opacity:0}"]),it=c.a.span.withConfig({displayName:"Cursor__StyledCursor",componentId:"sc-1w540q7-0"})(["display:inline-block;color:black;opacity:1;animation-name:",";animation-duration:1.2s;animation-timing-function:ease;animation-iteration-count:infinite;font-size:5rem;margin-bottom:30px;margin-left:25px;"],ot),at=l.a.createElement,rt=function(){return at(lt,null,at("p",null,at(ct,null,"One step closer"),at("br",null),at(ct,null,"to a")," ",at("span",null,at(m,{href:a.IndexSection},"better future")),at(ct,null,"..."),at(et,null)))},lt=c.a.div.withConfig({displayName:"TextArea__StyledTextArea",componentId:"sc-1daq1os-0"})(["z-index:100;position:absolute;top:50%;left:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:1200px;margin:-30px 0 0 -600px;box-sizing:border-box;font-size:6rem;@media (max-width:600px){left:40px;right:10px;width:auto;margin:10px 0 0;}"]),ct=c.a.span.withConfig({displayName:"TextArea__BlurFont",componentId:"sc-1daq1os-1"})(["font-family:'Noto Sans KR',sans-serif;filter:blur(3px);opacity:0.6;"]),dt=l.a.createElement,st=function(){return dt(pt,null,dt(ut,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0},dt("source",{src:"/static/fireground.mp4",type:"video/mp4"})))},pt=c.a.div.withConfig({displayName:"VideoArea__StyledVideoArea",componentId:"sc-1dooh9p-0"})(["overflow:hidden;position:absolute;top:0;left:0;width:100%;height:100vh;text-align:center;"]),ut=c.a.video.withConfig({displayName:"VideoArea__Video",componentId:"sc-1dooh9p-1"})(["width:100%;"]),mt=l.a.createElement,gt=function(){return mt(ht,{id:a.Root},mt(st,null),mt(rt,null))},ht=c.a.div.withConfig({displayName:"RootSection__Section",componentId:"sc-1tbgwub-0"})(["position:relative;height:100vh;min-height:700px;z-index:2;background-color:black;opacity:0.9;"]),ft=[{speaker:"hayoung0Lee",title:"\uc790\uc720\ub85c\uc6b4 \ub3c4\ube44\uc758 \ubbf8\ub798\uacc4\ud68d",description:"\uc0c8\ub85c\uc6b4 \uc8fc\uc778\uc744 \ucc3e\uace0\uc2f6\uc740 \ub3c4\ube44\uc758 2021\ub144 \uacc4\ud68d ?",avatarUrl:"/static/hayoung.jpg"},{speaker:"nnm",title:"\uc544\ubaa8\ub978\uc9c1\ub2e4",description:"\ub05d\ub0a0 \ub54c \uae4c\uc9c0 \ub05d\ub09c\uac8c \uc544\ub2c8\ub2e4. \uc5b4\ub5a4 \uc21c\uac04\uc5d0\ub3c4 \ubc29\uc2ec\ud560 \uc218 \uc5c6\uc5c8\ub358 \ucc98\uc808\ud55c \ucde8\uc5c5\uae30",avatarUrl:"/static/nnm.jpg"},{speaker:"1ilsang",title:"\ub274\ube44 \ub2e4\uc774\ubc84\uc758 \uc624\ud508\uc6cc\ud130 \ud0d0\ud5d8\uae30",description:"\ucf54\ub85c\ub098\uc640 \ud568\uaed8\ud558\ub294 \uac74\uc804\ud55c \ucde8\ubbf8 \uc0dd\ud65c",avatarUrl:"/static/1ilsang.jpg"}],yt=l.a.createElement,bt=function(t){var n=t.data,e=n.speaker,o=n.title,i=n.description,a=n.avatarUrl;return yt(vt,null,yt("h1",null,o),yt("img",{src:a,alt:i}),yt("h2",null,e," \ub2d8"),yt("h3",null,i))},vt=c.a.div.withConfig({displayName:"SeminarContent__Section",componentId:"c1hm7x-0"})(["margin:5%;img{width:30%;}h3{font-family:system-ui;}"]),wt=l.a.createElement,_t=function(){var t=p(),n=s().open;return wt(kt,{id:a.SeminarSection},wt("div",t,wt(Ct,null,wt("h1",null,"SeminarSection")),wt(It,null,wt(St,null,wt("ul",null,ft.map((function(t){var e=t.speaker,o=t.avatarUrl;return wt(xt,{key:e,onClick:function(){return function(t){n({renderContent:function(){return wt(bt,{data:t})}})}(t)},avatarUrl:o})})))),wt(Nt,null,wt(m,{href:a.EndSection},wt(h,null,"Next"))))))},kt=c.a.section.withConfig({displayName:"SeminarSection__Section",componentId:"sc-2pr9pe-0"})(["padding-top:10vh;padding-bottom:100px;"]),Ct=c.a.div.withConfig({displayName:"SeminarSection__TitleArea",componentId:"sc-2pr9pe-1"})(["margin-left:20vh;color:black;h1{color:black;font-size:4rem;}"]),St=Object(c.a)(Z).withConfig({displayName:"SeminarSection__BodyArea",componentId:"sc-2pr9pe-2"})(["ul{margin-left:25%;}li{:hover{transform:rotate(1deg);}}"]),xt=c.a.li.withConfig({displayName:"SeminarSection__BodyCoverList",componentId:"sc-2pr9pe-3"})(["background:url(/static/black.jpg) 0 0 no-repeat;background-size:cover;overflow:auto;border:1px solid gray;:hover{background:",";background-color:white;background-size:cover;cursor:pointer;}"],(function(t){return"url(".concat(t.avatarUrl,") 0 0 no-repeat;")})),Nt=c.a.div.withConfig({displayName:"SeminarSection__NextSpan",componentId:"sc-2pr9pe-4"})(["margin-right:40vh;"]),It=c.a.div.withConfig({displayName:"SeminarSection__LineBody",componentId:"sc-2pr9pe-5"})(["margin-top:20vh;background-color:magenta;opacity:0.8;height:20vh;width:100%;display:inline-block;transform:skewY(-3deg);h1{color:black;}"]),Et=l.a.createElement,jt=function(){return Et(Ot,null,Et("hr",null),Et("div",null,Et("p",null,"@1ilsang"),Et("p",null,"2020. 12. 27"),Et(Dt,null,Et("li",{className:"github"},Et("button",{type:"button",id:"footer-linkedin"},Et("a",{href:"https://github.com/Road-of-CODEr",target:"_blank"},"Github"))),Et("li",{className:"facebook"},Et("button",{type:"button",id:"footer-facebook"},Et("a",{href:"#",target:"_blank"},"Facebook"))))))},Ot=c.a.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"ca97io-0"})(["height:20vh;position:relative;width:1200px;margin:0 auto;div{padding-top:10px;}p{float:left;margin-right:49px;line-height:1.5rem;color:#1e1e1e;font-family:system-ui;}"]),Dt=c.a.ul.withConfig({displayName:"Footer__FooterSNS",componentId:"ca97io-1"})(["z-index:10;position:absolute;right:0;font-size:0;top:36px;li{display:inline-block;position:relative;margin-left:13px;vertical-align:top;button{border:0;border-radius:0;outline:0;box-sizing:border-box;font-family:inherit;background-color:transparent;cursor:pointer;a{text-decoration:none;color:black;}}}"]),zt=function(){var t=Object(r.useState)([0,0]),n=t[0],e=t[1];return Object(r.useLayoutEffect)((function(){function t(){e([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),n},Ut=l.a.createElement,Rt=!0,Pt=(n.default=function(t){var n=t.data,e=i(zt(),2),o=e[0],a=e[1];return Object(r.useEffect)((function(){console.log("Resize!",o)}),[o]),o<1240?Ut(Pt,null,Ut("h1",null,"1240px \uc774\ud558\ub294 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),Ut("h3",null,"width: ",o,", height: ",a)):Ut(Pt,null,Ut(gt,null),Ut(O,null),Ut(J,null),Ut(_t,null),Ut(S,{issueData:n}),Ut(jt,null))},c.a.main.withConfig({displayName:"pages__Main",componentId:"pie6ib-0"})(["padding-top:0;padding-bottom:0;position:relative;h1{margin-top:10vh;}"]))},Qetd:function(t,n,e){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports}},[["/EDR",0,1,2]]]);