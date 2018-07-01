(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/J1G":function(l,n,u){"use strict";u.r(n);var a=u("LoAr"),e=function(){},o=u("C9Ky"),t=u("7tlY"),i=u("WAtv"),r=u("ChgE"),d=u("fxml"),c=u("YzpY"),b=u("TeY9"),s=u("Gien"),g=u("981U"),V=u("WT9V"),p=u("GcYS"),h=u("WV+C"),y=u("0xYh"),m=u("Z5FQ"),x=function(){this.docs="import { BrowserAnimationsModule } from '@angular/platform-browser/animations';\nimport { GalleryModule } from  '@ngx-gallery/core';\nimport { GalleryLightbox } from  '@ngx-gallery/lightbox';\n\n@NgModule({\n imports: [\n    BrowserAnimationsModule,\n    GalleryModule.forRoot(galleryConfig?),\n    GalleryLightbox.forRoot(lightboxConfig?)\n ]\n})",this.importStyle="@import '~@ngx-gallery/core/styles/gallery';\n@import '~@ngx-gallery/core/styles/lightbox';"},O=a.Ma({encapsulation:0,styles:[[""]],data:{}});function f(l){return a.fb(2,[(l()(),a.Oa(0,0,null,null,15,"section",[],null,null,null,null,null)),(l()(),a.Oa(1,0,null,null,2,"section-title",[],null,null,null,r.b,r.a)),a.Na(2,49152,null,0,d.a,[],null,null),(l()(),a.db(-1,0,["Installation"])),(l()(),a.Oa(4,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.db(-1,null,["Install the following packages"])),(l()(),a.Oa(6,0,null,null,4,"div",[["class","install"]],null,null,null,null,null)),(l()(),a.Oa(7,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a.db(-1,null,["NPM"])),(l()(),a.Oa(9,0,null,null,1,"hl-code",[["code","npm i -S @ngx-gallery/core @ngx-gallery/lightbox @angular/cdk"]],null,null,null,c.b,c.a)),a.Na(10,4243456,null,0,b.a,[a.h],{code:[0,"code"],disabled:[1,"disabled"]},null),(l()(),a.Oa(11,0,null,null,4,"div",[["class","install"]],null,null,null,null,null)),(l()(),a.Oa(12,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a.db(-1,null,["YARN"])),(l()(),a.Oa(14,0,null,null,1,"hl-code",[["code","yarn add @ngx-gallery/core @ngx-gallery/lightbox @angular/cdk"]],null,null,null,c.b,c.a)),a.Na(15,4243456,null,0,b.a,[a.h],{code:[0,"code"],disabled:[1,"disabled"]},null),(l()(),a.Oa(16,0,null,null,38,"section",[],null,null,null,null,null)),(l()(),a.Oa(17,0,null,null,2,"section-title",[],null,null,null,r.b,r.a)),a.Na(18,49152,null,0,d.a,[],null,null),(l()(),a.db(-1,0,["Usage"])),(l()(),a.Oa(20,0,null,null,10,"div",[["class","usage-title"]],null,null,null,null,null)),(l()(),a.Oa(21,0,null,null,1,"span",[["class","section-number"]],null,null,null,null,null)),(l()(),a.db(-1,null,["1"])),(l()(),a.Oa(23,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),a.db(-1,null,["Import "])),(l()(),a.Oa(25,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a.db(-1,null,["GalleryModule"])),(l()(),a.db(-1,null,[" and "])),(l()(),a.Oa(28,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),a.db(-1,null,["LightboxModule"])),(l()(),a.db(-1,null,[" in the root module"])),(l()(),a.Oa(31,0,null,null,1,"hl-code",[],null,null,null,c.b,c.a)),a.Na(32,4243456,null,0,b.a,[a.h],{code:[0,"code"]},null),(l()(),a.Oa(33,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Oa(34,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Oa(35,0,null,null,6,"div",[["class","usage-title"]],null,null,null,null,null)),(l()(),a.Oa(36,0,null,null,1,"span",[["class","section-number"]],null,null,null,null,null)),(l()(),a.db(-1,null,["2"])),(l()(),a.Oa(38,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),a.db(-1,null,["Import gallery and lightbox styles "])),(l()(),a.Oa(40,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),a.db(-1,null,["src/styles.scss"])),(l()(),a.Oa(42,0,null,null,1,"hl-code",[],null,null,null,c.b,c.a)),a.Na(43,4243456,null,0,b.a,[a.h],{code:[0,"code"]},null),(l()(),a.Oa(44,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Oa(45,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),a.Oa(46,0,null,null,8,"div",[["class","usage-title"]],null,null,null,null,null)),(l()(),a.Oa(47,0,null,null,1,"span",[["class","section-number"]],null,null,null,null,null)),(l()(),a.db(-1,null,["3"])),(l()(),a.Oa(49,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),a.db(-1,null,["See "])),(l()(),a.Oa(51,0,null,null,3,"a",[["class","inline-button"],["color","accent"],["mat-button",""],["routerLink","/lightbox"],["style","padding: 0 0.5em"]],[[1,"target",0],[8,"href",4],[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.Xa(l,52).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),"click"===n&&(e=!1!==a.Xa(l,53)._haltDisabledEvents(u)&&e),e},s.c,s.a)),a.Na(52,671744,null,0,g.q,[g.o,g.a,V.h],{routerLink:[0,"routerLink"]},null),a.Na(53,180224,null,0,p.a,[h.a,y.b,a.k,[2,m.a]],{color:[0,"color"]},null),(l()(),a.db(-1,0,["Lightbox Example"]))],function(l,n){var u=n.component;l(n,10,0,"npm i -S @ngx-gallery/core @ngx-gallery/lightbox @angular/cdk",!0),l(n,15,0,"yarn add @ngx-gallery/core @ngx-gallery/lightbox @angular/cdk",!0),l(n,32,0,u.docs),l(n,43,0,u.importStyle),l(n,52,0,"/lightbox"),l(n,53,0,"accent")},function(l,n){l(n,51,0,a.Xa(n,52).target,a.Xa(n,52).href,a.Xa(n,53).disabled?-1:0,a.Xa(n,53).disabled||null,a.Xa(n,53).disabled.toString(),"NoopAnimations"===a.Xa(n,53)._animationMode)})}var k=a.Ka("app-doc-lightbox",x,function(l){return a.fb(0,[(l()(),a.Oa(0,0,null,null,1,"app-doc-lightbox",[],null,null,null,f,O)),a.Na(1,49152,null,0,x,[],null,null)],null,null)},{},{},[]),L=u("y7gG"),v=u("LYzL"),N=u("eXL1"),w=u("C7Lb"),M=u("s8WJ"),S=u("SPdK"),X=u("+3V+"),j=u("Ho7M"),C=u("dgjn"),G=u("/hyk"),K=u("rXXt"),A=u("abkR"),Y=u("IvSS"),W=u("V3Ng"),R=u("a198"),I=u("w9fW"),U=u("vvyD"),z=u("AFqu"),D=u("UelK"),E=u("WgBV"),F=u("LxDK"),J=u("V7OE"),B=u("wwR/"),P=u("ResS"),_=u("9LWm"),q=u("U+go"),T=u("FOLC"),H=u("PCNd"),Q=u("rh80");u.d(n,"DocLightboxModuleNgFactory",function(){return Z});var Z=a.La(e,[],function(l){return a.Ua([a.Va(512,a.j,a.Aa,[[8,[o.a,t.a,i.a,k]],[3,a.j],a.v]),a.Va(4608,V.m,V.l,[a.s,[2,V.x]]),a.Va(4608,L.c,L.c,[]),a.Va(4608,v.a,v.a,[]),a.Va(4608,N.a,N.a,[N.g,N.c,a.j,N.f,N.d,a.p,a.x,V.d,w.b]),a.Va(5120,N.h,N.i,[N.a]),a.Va(5120,M.c,M.d,[N.a]),a.Va(4608,M.e,M.e,[N.a,a.p,[2,V.g],[2,M.b],M.c,[3,M.e],N.c]),a.Va(4608,S.k,S.j,[S.d,S.h]),a.Va(5120,a.b,function(l,n){return[S.n(l,n)]},[V.d,a.z]),a.Va(1073742336,V.c,V.c,[]),a.Va(1073742336,g.r,g.r,[[2,g.x],[2,g.o]]),a.Va(1073742336,L.d,L.d,[]),a.Va(1073742336,h.b,h.b,[]),a.Va(1073742336,X.b,X.b,[]),a.Va(1073742336,j.a,j.a,[]),a.Va(1073742336,C.a,C.a,[]),a.Va(1073742336,w.a,w.a,[]),a.Va(1073742336,v.d,v.d,[[2,v.b]]),a.Va(1073742336,G.b,G.b,[]),a.Va(1073742336,v.f,v.f,[]),a.Va(1073742336,p.c,p.c,[]),a.Va(1073742336,K.b,K.b,[]),a.Va(1073742336,A.g,A.g,[]),a.Va(1073742336,Y.b,Y.b,[]),a.Va(1073742336,N.e,N.e,[]),a.Va(1073742336,M.j,M.j,[]),a.Va(1073742336,W.h,W.h,[]),a.Va(1073742336,R.b,R.b,[]),a.Va(1073742336,I.j,I.j,[]),a.Va(1073742336,U.a,U.a,[]),a.Va(1073742336,z.c,z.c,[]),a.Va(1073742336,S.e,S.e,[]),a.Va(1073742336,D.b,D.b,[]),a.Va(1073742336,E.a,E.a,[]),a.Va(1073742336,F.a,F.a,[]),a.Va(1073742336,J.a,J.a,[[2,S.l],a.z]),a.Va(1073742336,B.d,B.d,[]),a.Va(1073742336,P.c,P.c,[]),a.Va(1073742336,_.b,_.b,[]),a.Va(1073742336,q.b,q.b,[]),a.Va(1073742336,T.e,T.e,[]),a.Va(1073742336,H.a,H.a,[]),a.Va(1073742336,e,e,[]),a.Va(256,R.a,{separatorKeyCodes:[Q.f]},[]),a.Va(1024,g.m,function(){return[[{path:"",component:x}]]},[])])})}}]);