((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,H,I,K,A={crw:function crw(){},crv:function crv(){},
d59(){return new A.De(null)},
De:function De(d){this.a=d},
aDy:function aDy(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
bZF:function bZF(d){this.a=d},
bZE:function bZE(){},
bZC:function bZC(){},
bZB:function bZB(d){this.a=d},
bZs:function bZs(d){this.a=d},
bZA:function bZA(d,e,f){this.a=d
this.b=e
this.c=f},
bZt:function bZt(d){this.a=d},
bZu:function bZu(){},
bZv:function bZv(){},
bZw:function bZw(){},
bZD:function bZD(){},
bZx:function bZx(d){this.a=d},
bZr:function bZr(d){this.a=d},
bZy:function bZy(d){this.a=d},
bZq:function bZq(d){this.a=d},
bZz:function bZz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,F,E,L,M
J=c[1]
B=c[0]
C=c[2]
G=c[184]
H=c[145]
I=c[222]
K=c[241]
A=a.updateHolder(c[33],A)
D=c[345]
F=c[76]
E=c[244]
L=c[113]
M=c[247]
A.De.prototype={
S(){return new A.aDy(new B.aE(C.am,$.ac()))}}
A.aDy.prototype={
ak(){this.aE()
this.w.aj(0,new A.bZF(this))},
m(){var x=this.w
x.T$=$.ac()
x.X$=0
this.a5()},
u(d){var x=this,w=null,v=x.gV().M($.cGe(),y.m),u=x.w,t=C.f.D(u.a.a),s=y.u
return B.cM(w,C.kw,new B.bL(C.aE,w,C.aH,C.A,B.a([B.bA(!1,new B.kL(B.a([B.aJ(w,B.au(d,C.ba,y.x).w.r.b,w),D.bI4,new B.R(C.hw,new H.E4(u,"Pesquisar conversas",!0,w),w),E.a7c],s),B.fC(v,new A.bZA(x,t.toLowerCase(),d),new A.bZB(x),new A.bZC(),!1,!0,!1),w),w,C.Y,!1),D.bLL],s),w),!0,w)}}
var z=a.updateTypes([])
A.crw.prototype={
$1(d){return this.aC1(d)},
aC1(d){var x=0,w=B.m(y.p),v,u,t,s
var $async$$1=B.i(function(e,f){if(e===1)return B.j(f,w)
for(;;)switch(x){case 0:u=B.AU(d)
t=$.Q().b
t===$&&B.b()
s=J
x=3
return B.d(t.P("conversations").az(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").W("partner_id",u).dj(0,"last_message_at",!1),$async$$1)
case 3:v=s.d0(f,new A.crv(),y.g).bx(0)
x=1
break
case 1:return B.k(v,w)}})
return B.l($async$$1,w)},
$S:1271}
A.crv.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m="wedding_id",l="last_message_at"
y.y.a(d)
x=J.a3(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=B.I(v?n:J.f(w,"partner_name_1"))
t=B.I(v?n:J.f(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
v=B.a1(x.h(d,"id"))
r=B.a1(x.h(d,m))
q=B.a1(x.h(d,"partner_id"))
B.a1(x.h(d,m))
p=B.cCX(w,n)
o=B.I(x.h(d,"last_message"))
return new G.hJ(v,s,p,r,q,o,x.h(d,l)==null?n:B.d9(B.a1(x.h(d,l))),0)},
$S:1272}
A.bZF.prototype={
$0(){return this.a.p(new A.bZE())},
$S:0}
A.bZE.prototype={
$0(){},
$S:0}
A.bZC.prototype={
$0(){return C.bn},
$S:37}
A.bZB.prototype={
$2(d,e){return new B.iQ("N\xe3o foi poss\xedvel carregar.",new A.bZs(this.a),null)},
$S:45}
A.bZs.prototype={
$0(){return this.a.gV().ai($.cGe())},
$S:0}
A.bZA.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.da(a4,new A.bZt(a3))
x=B.Y(a3,a3.$ti.i("x.E"))}a3=J.a3(a4)
if(a3.gZ(a4))return D.aBu
w=J.a3(x)
if(w.gZ(x))return B.bP(B.h('Sem conversas para "'+C.f.D(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.de(a4,new A.bZu()).gA(0)
a3=a1.a
if(a3.x){w=w.de(x,new A.bZv())
u=B.Y(w,w.$ti.i("x.E"))}else u=x
t=B.K(y.e,y.p)
for(w=J.ax(u);w.t();){s=w.gG(w)
J.bO(t.bO(0,F.cSG(s.w),new A.bZw()),s)}r=new A.bZD()
w=y.u
a3=B.a([new B.R(M.BG,B.S(B.a([r.$3("Todas",!a3.x,new A.bZx(a3)),C.ax,r.$4$count("N\xe3o lidas",a3.x,new A.bZy(a3),v)],w),C.x,C.j,C.q,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=B.h(E.UX[n],a2,a2,a2,C.bT,a2,a2,a2)
l=new B.aV(22,22)
k=B.a([],w)
j=0
for(;;){i=t.h(0,n)
i.toString
if(!(j<J.b2(i)))break
i=t.h(0,n)
i.toString
i=J.f(i,j)
h=t.h(0,n)
h.toString
h=J.f(h,j)
g=t.h(0,n)
g.toString
g=J.f(g,j)
f=t.h(0,n)
f.toString
f=F.cq6(J.f(f,j).w)
e=t.h(0,n)
e.toString
e=J.f(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.f(d,j)
a0=t.h(0,n)
a0.toString
k.push(new F.a0Z(new B.e0(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,E.Ux,new A.bZz(p,t,n,j),j===J.b2(a0)-1,!1,a2));++j}C.e.q(a3,B.a([new B.R(E.M2,m,a2),new B.R(C.c9,B.B(a2,B.D(k,C.x,C.j,C.q,0,C.w),C.aM,a2,a2,new B.J(C.u,a2,a2,new B.bX(l,l,l,l),C.aJ,a2,C.y),a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return B.cX(a3,a2,I.tS,a2,a2,!1,C.a_,!1)},
$S:1273}
A.bZt.prototype={
$1(d){return C.f.n(d.b.toLowerCase(),this.a)},
$S:152}
A.bZu.prototype={
$1(d){return d.x>0},
$S:152}
A.bZv.prototype={
$1(d){return d.x>0},
$S:152}
A.bZw.prototype={
$0(){return B.a([],y.B)},
$S:1274}
A.bZD.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.ag:C.u,t=B.W(19),s=y.u,r=B.a([B.h(d,v,v,v,B.aF(v,v,e?C.u:C.z,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.u:C.z
w=B.W(10)
C.e.q(r,B.a([C.bC,B.B(C.O,B.h(B.p(g),v,v,v,B.aF(v,v,e?$.ag:C.u,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,K.rZ,new B.J(x,v,v,w,v,v,C.y),v,20,v,C.kT,v,v,v)],s))}return B.aY(B.B(v,B.S(r,C.x,C.j,C.V,0,v,v),C.r,v,v,new B.J(u,v,v,t,v,v,C.y),v,38,v,C.d9,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1275}
A.bZx.prototype={
$0(){var x=this.a
return x.p(new A.bZr(x))},
$S:0}
A.bZr.prototype={
$0(){return this.a.x=!1},
$S:0}
A.bZy.prototype={
$0(){var x=this.a
return x.p(new A.bZq(x))},
$S:0}
A.bZq.prototype={
$0(){return this.a.x=!0},
$S:0}
A.bZz.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.f(t,x)
u=v.h(0,u)
u.toString
x=J.f(u,x)
return B.ap(w.a).aQ("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bq,[A.crw,A.crv,A.bZA,A.bZt,A.bZu,A.bZv,A.bZD])
w(A.De,B.dk)
w(A.aDy,B.df)
x(B.bI,[A.bZF,A.bZE,A.bZC,A.bZs,A.bZw,A.bZx,A.bZr,A.bZy,A.bZq,A.bZz])
w(A.bZB,B.cG)})()
B.bj(b.typeUniverse,JSON.parse('{"De":{"F":[],"e":[]},"aDy":{"a_":["De"]}}'))
var y=(function rtii(){var x=B.u
return{m:x("aA<r<hJ>>"),g:x("hJ"),B:x("q<hJ>"),u:x("q<e>"),p:x("r<hJ>"),y:x("a6<c,@>"),x:x("dh"),e:x("v"),A:x("a6<c,@>?"),q:x("H?")}})();(function constants(){D.aBu=new L.a_L(C.EK,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,null,null,180,!1,null)
D.bI4=new B.k_("Mensagens",null,!1,null,20,!1,null)
D.bIj=new B.J6(C.a0e,null)
D.bLL=new B.fK(0,null,0,0,null,null,D.bIj,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dwB","cGe",()=>B.eu(new A.crw(),null,!1,null,null,y.p))})()};
(a=>{a["pIEBGBoyzMyOgjWvKu4mGGKrLaI="]=a.current})($__dart_deferred_initializers__);