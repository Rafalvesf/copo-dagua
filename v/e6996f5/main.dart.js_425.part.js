((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cMx:function cMx(){},cMw:function cMw(){},
duH(){return new B.F_(null)},
F_:function F_(d){this.a=d},
aK0:function aK0(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cgQ:function cgQ(d){this.a=d},
cgP:function cgP(){},
cgN:function cgN(){},
cgM:function cgM(d){this.a=d},
cgC:function cgC(d){this.a=d},
cgL:function cgL(d,e,f){this.a=d
this.b=e
this.c=f},
cgD:function cgD(){},
cgE:function cgE(d){this.a=d},
cgF:function cgF(){},
cgG:function cgG(){},
cgH:function cgH(){},
cgO:function cgO(){},
cgI:function cgI(d){this.a=d},
cgB:function cgB(d){this.a=d},
cgJ:function cgJ(d){this.a=d},
cgA:function cgA(d){this.a=d},
cgK:function cgK(d,e,f,g){var _=this
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
B.F_.prototype={
R(){return new B.aK0(new A.aF(C.ak,$.aa()))}}
B.aK0.prototype={
ad(){this.aq()
this.w.an(0,new B.cgQ(this))},
m(){var x=this.w
x.Z$=$.aa()
x.W$=0
this.a7()},
u(d){var x=this,w=null,v=x.gS().G($.d1I(),y.m),u=x.w,t=C.f.B(u.a.a),s=y.u
return A.cP(w,C.ji,new A.bA(C.aw,w,C.aC,C.y,A.a([A.bB(!1,new A.n3(A.a([A.aK(w,A.aT(d,C.b5,y.x).w.r.b,w),D.bLA,new A.S(C.eg,new G.FV(u,"Pesquisar conversas",!0,w),w),F.a9e],s),A.hD(v,new B.cgL(x,t.toLowerCase(),d),new B.cgM(x),new B.cgN(),!1,!0,!1),w),w,C.Z,!1),D.bPq],s),w),!0,w)}}
var z=a.updateTypes([])
B.cMx.prototype={
$1(d){return this.aFW(d)},
aFW(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cn(d)
t=$.Q().b
t===$&&A.b()
s=J
x=3
return A.d(t.P("conversations").ai(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, event_date)").U("partner_id",u).cJ(0,"last_message_at",!1),$async$$1)
case 3:v=s.da(f,new B.cMw(),y.g).bx(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1461}
B.cMw.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="wedding_id",h="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.B(v?j:J.i(w,"partner_name_1"))
t=A.B(v?j:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
r=A.Y(x.h(d,"id"))
q=A.Y(x.h(d,i))
p=A.Y(x.h(d,"partner_id"))
o=A.Y(x.h(d,i))
n=A.cZ5(w,j)
m=A.B(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.dc(A.Y(x.h(d,h)))
l=A.B(v?j:J.i(w,"owner_id"))
k=A.zP(A.B(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"event_date")
return new A.eB(r,s,o,n,q,p,m,x,0,l,I.cIU(k,A.d2(A.p(v==null?"":v))),C.jV)},
$S:1462}
B.cgQ.prototype={
$0(){return this.a.p(new B.cgP())},
$S:0}
B.cgP.prototype={
$0(){},
$S:0}
B.cgN.prototype={
$0(){return C.f0},
$S:58}
B.cgM.prototype={
$2(d,e){return new A.jh("N\xe3o foi poss\xedvel carregar.",new B.cgC(this.a),null)},
$S:50}
B.cgC.prototype={
$0(){return this.a.gS().aj($.d1I())},
$S:0}
B.cgL.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.dfj(a5,new B.cgD()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a6<1>")
x=A.U(new A.a6(a3,new B.cgE(a4),w),w.i("w.E"))}if(a3.length===0)return D.aE1
if(x.length===0)return A.bO(A.h('Sem conversas para "'+C.f.B(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a6(a3,new B.cgF(),A.a8(a3).i("a6<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a6<1>")
u=A.U(new A.a6(x,new B.cgG(),w),w.i("w.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.H)(u),++s){r=u[s]
J.br(t.bI(0,E.dfk(r.w),new B.cgH()),r)}q=new B.cgO()
w=y.u
a4=A.a([new A.S(K.CL,A.O(A.a([q.$3("Todas",!a4.x,new B.cgI(a4)),C.ab,q.$4$count("N\xe3o lidas",a4.x,new B.cgJ(a4),v)],w),C.v,C.h,C.l,0,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.x(a2,A.h(C.Fs[m],a2,a2,a2,a2,C.aH,a2,a2),C.r,a2,a2,F.Kk,a2,a2,F.Nd,C.i1,a2,a2,a2)
k=A.a([],w)
j=0
for(;;){i=t.h(0,m)
i.toString
if(!(j<J.aP(i)))break
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
f=E.cKZ(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4B(new A.cg(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.Fd,new B.cgK(n,t,m,j),j===J.aP(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.S(C.bG,A.z(k,C.v,C.h,C.l),a2)],w))}}return A.d6(a4,a2,H.nh,a2,a2,!1,!1)},
$S:1463}
B.cgD.prototype={
$1(d){return d.y},
$S:245}
B.cgE.prototype={
$1(d){return C.f.t(d.b.toLowerCase(),this.a)},
$S:137}
B.cgF.prototype={
$1(d){return d.x>0},
$S:137}
B.cgG.prototype={
$1(d){return d.x>0},
$S:137}
B.cgH.prototype={
$0(){return A.a([],y.B)},
$S:368}
B.cgO.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.au:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aI(v,v,e?C.t:C.z,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.z
w=A.W(10)
C.e.n(r,A.a([C.bj,A.x(C.K,A.h(A.p(g),v,v,v,v,A.aI(v,v,e?$.au:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v),C.r,v,C.lc,new A.I(x,v,v,w,v,v,C.x),v,20,v,C.lr,v,v,v)],s))}return A.aY(A.x(v,A.O(r,C.v,C.h,C.J,0,v),C.r,v,v,new A.I(u,v,v,t,v,v,C.x),v,38,v,C.cG,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1464}
B.cgI.prototype={
$0(){var x=this.a
return x.p(new B.cgB(x))},
$S:0}
B.cgB.prototype={
$0(){return this.a.x=!1},
$S:0}
B.cgJ.prototype={
$0(){var x=this.a
return x.p(new B.cgA(x))},
$S:0}
B.cgA.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cgK.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ae(w.a).ak("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bs,[B.cMx,B.cMw,B.cgL,B.cgD,B.cgE,B.cgF,B.cgG,B.cgO])
w(B.F_,A.dC)
w(B.aK0,A.dw)
x(A.bL,[B.cgQ,B.cgP,B.cgN,B.cgC,B.cgH,B.cgI,B.cgB,B.cgJ,B.cgA,B.cgK])
w(B.cgM,A.cK)})()
A.bq(b.typeUniverse,JSON.parse('{"F_":{"G":[],"e":[],"f":[]},"aK0":{"a0":["F_"]}}'))
var y=(function rtii(){var x=A.y
return{m:x("ax<t<eB>>"),g:x("eB"),B:x("r<eB>"),u:x("r<e>"),p:x("t<eB>"),y:x("a5<c,@>"),x:x("dt"),e:x("v"),A:x("a5<c,@>?"),q:x("M?")}})();(function constants(){D.aE1=new E.a3q(C.G_,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bLA=new A.lN("Mensagens",null,!1,null,20,!1,null)
D.bLS=new A.Lg(C.a1N,null)
D.bPq=new A.eF(0,null,0,0,null,null,D.bLS,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZh","d1I",()=>A.ez(new B.cMx(),null,!1,null,null,y.p))})()};
(a=>{a["Jg2YBlX88pO0pU602SNo9BlArQc="]=a.current})($__dart_deferred_initializers__);