((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cML:function cML(){},cMK:function cMK(){},
duY(){return new B.F0(null)},
F0:function F0(d){this.a=d},
aK6:function aK6(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
ch_:function ch_(d){this.a=d},
cgZ:function cgZ(){},
cgX:function cgX(){},
cgW:function cgW(d){this.a=d},
cgM:function cgM(d){this.a=d},
cgV:function cgV(d,e,f){this.a=d
this.b=e
this.c=f},
cgN:function cgN(){},
cgO:function cgO(d){this.a=d},
cgP:function cgP(){},
cgQ:function cgQ(){},
cgR:function cgR(){},
cgY:function cgY(){},
cgS:function cgS(d){this.a=d},
cgL:function cgL(d){this.a=d},
cgT:function cgT(d){this.a=d},
cgK:function cgK(d){this.a=d},
cgU:function cgU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I,K
J=c[1]
A=c[0]
C=c[2]
G=c[155]
H=c[205]
B=a.updateHolder(c[36],B)
D=c[354]
E=c[81]
F=c[225]
I=c[120]
K=c[226]
B.F0.prototype={
R(){return new B.aK6(new A.aF(C.ak,$.aa()))}}
B.aK6.prototype={
ad(){this.aq()
this.w.an(0,new B.ch_(this))},
m(){var x=this.w
x.Z$=$.aa()
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=x.gS().G($.d1Y(),y.m),u=x.w,t=C.f.B(u.a.a),s=y.u
return A.cP(w,C.jk,new A.bA(C.aw,w,C.aC,C.y,A.a([A.bB(!1,new A.n4(A.a([A.aK(w,A.aT(d,C.b5,y.x).w.r.b,w),D.bLy,new A.S(C.eg,new G.FW(u,"Pesquisar conversas",!0,w),w),F.a9d],s),A.hD(v,new B.cgV(x,t.toLowerCase(),d),new B.cgW(x),new B.cgX(),!1,!0,!1),w),w,C.Z,!1),D.bPo],s),w),!0,w)}}
var z=a.updateTypes([])
B.cML.prototype={
$1(d){return this.aFY(d)},
aFY(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Co(d)
t=$.Q().b
t===$&&A.b()
s=J
x=3
return A.d(t.P("conversations").al(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, event_date)").V("partner_id",u).cI(0,"last_message_at",!1),$async$$1)
case 3:v=s.da(f,new B.cMK(),y.g).bx(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1463}
B.cMK.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="wedding_id",h="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.C(v?j:J.i(w,"partner_name_1"))
t=A.C(v?j:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
r=A.Y(x.h(d,"id"))
q=A.Y(x.h(d,i))
p=A.Y(x.h(d,"partner_id"))
o=A.Y(x.h(d,i))
n=A.cZm(w,j)
m=A.C(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.dc(A.Y(x.h(d,h)))
l=A.C(v?j:J.i(w,"owner_id"))
k=A.zP(A.C(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"event_date")
return new A.eB(r,s,o,n,q,p,m,x,0,l,I.cJ7(k,A.d2(A.p(v==null?"":v))),C.jW)},
$S:1464}
B.ch_.prototype={
$0(){return this.a.p(new B.cgZ())},
$S:0}
B.cgZ.prototype={
$0(){},
$S:0}
B.cgX.prototype={
$0(){return C.f1},
$S:53}
B.cgW.prototype={
$2(d,e){return new A.ji("N\xe3o foi poss\xedvel carregar.",new B.cgM(this.a),null)},
$S:52}
B.cgM.prototype={
$0(){return this.a.gS().ai($.d1Y())},
$S:0}
B.cgV.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.dfA(a5,new B.cgN()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a6<1>")
x=A.U(new A.a6(a3,new B.cgO(a4),w),w.i("w.E"))}if(a3.length===0)return D.aE_
if(x.length===0)return A.bO(A.h('Sem conversas para "'+C.f.B(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a6(a3,new B.cgP(),A.a8(a3).i("a6<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a6<1>")
u=A.U(new A.a6(x,new B.cgQ(),w),w.i("w.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.G)(u),++s){r=u[s]
J.bb(t.bI(0,E.dfB(r.w),new B.cgR()),r)}q=new B.cgY()
w=y.u
a4=A.a([new A.S(K.CM,A.O(A.a([q.$3("Todas",!a4.x,new B.cgS(a4)),C.ab,q.$4$count("N\xe3o lidas",a4.x,new B.cgT(a4),v)],w),C.v,C.h,C.l,0,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.x(a2,A.h(C.Ft[m],a2,a2,a2,a2,C.aH,a2,a2),C.r,a2,a2,F.Kk,a2,a2,F.Nc,C.i2,a2,a2,a2)
k=A.a([],w)
j=0
for(;;){i=t.h(0,m)
i.toString
if(!(j<J.aO(i)))break
i=t.h(0,m)
i.toString
i=J.i(i,j)
h=t.h(0,m)
h.toString
h=J.i(h,j)
g=t.h(0,m)
g.toString
g=J.i(g,j)
f=t.h(0,m)
f.toString
f=E.cLc(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4D(new A.cg(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.Fe,new B.cgU(n,t,m,j),j===J.aO(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.S(C.bG,A.y(k,C.v,C.h,C.l),a2)],w))}}return A.d6(a4,a2,H.nh,a2,a2,!1,!1)},
$S:1465}
B.cgN.prototype={
$1(d){return d.y},
$S:233}
B.cgO.prototype={
$1(d){return C.f.t(d.b.toLowerCase(),this.a)},
$S:125}
B.cgP.prototype={
$1(d){return d.x>0},
$S:125}
B.cgQ.prototype={
$1(d){return d.x>0},
$S:125}
B.cgR.prototype={
$0(){return A.a([],y.B)},
$S:355}
B.cgY.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.au:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aI(v,v,e?C.t:C.z,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.z
w=A.W(10)
C.e.n(r,A.a([C.bj,A.x(C.K,A.h(A.p(g),v,v,v,v,A.aI(v,v,e?$.au:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v),C.r,v,C.lc,new A.I(x,v,v,w,v,v,C.x),v,20,v,C.ls,v,v,v)],s))}return A.aY(A.x(v,A.O(r,C.v,C.h,C.J,0,v),C.r,v,v,new A.I(u,v,v,t,v,v,C.x),v,38,v,C.cH,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1466}
B.cgS.prototype={
$0(){var x=this.a
return x.p(new B.cgL(x))},
$S:0}
B.cgL.prototype={
$0(){return this.a.x=!1},
$S:0}
B.cgT.prototype={
$0(){var x=this.a
return x.p(new B.cgK(x))},
$S:0}
B.cgK.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cgU.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ae(w.a).aj("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bt,[B.cML,B.cMK,B.cgV,B.cgN,B.cgO,B.cgP,B.cgQ,B.cgY])
w(B.F0,A.dC)
w(B.aK6,A.dw)
x(A.bL,[B.ch_,B.cgZ,B.cgX,B.cgM,B.cgR,B.cgS,B.cgL,B.cgT,B.cgK,B.cgU])
w(B.cgW,A.cK)})()
A.br(b.typeUniverse,JSON.parse('{"F0":{"H":[],"e":[],"f":[]},"aK6":{"a_":["F0"]}}'))
var y=(function rtii(){var x=A.A
return{m:x("ax<t<eB>>"),g:x("eB"),B:x("r<eB>"),u:x("r<e>"),p:x("t<eB>"),y:x("a3<c,@>"),x:x("du"),e:x("v"),A:x("a3<c,@>?"),q:x("M?")}})();(function constants(){D.aE_=new E.a3s(C.G0,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bLy=new A.lP("Mensagens",null,!1,null,20,!1,null)
D.bLQ=new A.Lg(C.a1M,null)
D.bPo=new A.eF(0,null,0,0,null,null,D.bLQ,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZz","d1Y",()=>A.ez(new B.cML(),null,!1,null,null,y.p))})()};
(a=>{a["z/ooy/CMacHvE3L6Dz2pfFcJB5U="]=a.current})($__dart_deferred_initializers__);