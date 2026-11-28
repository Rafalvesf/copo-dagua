((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cMQ:function cMQ(){},cMP:function cMP(){},
dv7(){return new B.F7(null)},
F7:function F7(d){this.a=d},
aKp:function aKp(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cgS:function cgS(d){this.a=d},
cgR:function cgR(){},
cgP:function cgP(){},
cgO:function cgO(d){this.a=d},
cgE:function cgE(d){this.a=d},
cgN:function cgN(d,e,f){this.a=d
this.b=e
this.c=f},
cgF:function cgF(){},
cgG:function cgG(d){this.a=d},
cgH:function cgH(){},
cgI:function cgI(){},
cgJ:function cgJ(){},
cgQ:function cgQ(){},
cgK:function cgK(d){this.a=d},
cgD:function cgD(d){this.a=d},
cgL:function cgL(d){this.a=d},
cgC:function cgC(d){this.a=d},
cgM:function cgM(d,e,f,g){var _=this
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
B.F7.prototype={
P(){return new B.aKp(new A.aF(C.ak,$.aa()))}}
B.aKp.prototype={
ac(){this.ap()
this.w.al(0,new B.cgS(this))},
m(){var x=this.w
x.Z$=$.aa()
x.V$=0
this.a6()},
u(d){var x=this,w=null,v=x.gR().G($.d22(),y.m),u=x.w,t=C.f.B(u.a.a),s=y.u
return A.cP(w,C.jn,new A.bA(C.aw,w,C.aD,C.y,A.a([A.bB(!1,new A.n7(A.a([A.aK(w,A.aT(d,C.b5,y.x).w.r.b,w),D.bLD,new A.S(C.eh,new G.G4(u,"Pesquisar conversas",!0,w),w),F.a9f],s),A.hE(v,new B.cgN(x,t.toLowerCase(),d),new B.cgO(x),new B.cgP(),!1,!0,!1),w),w,C.Z,!1),D.bPt],s),w),!0,w)}}
var z=a.updateTypes([])
B.cMQ.prototype={
$1(d){return this.aG_(d)},
aG_(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cv(d)
t=$.Q().b
t===$&&A.b()
s=J
x=3
return A.d(t.S("conversations").an(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, wedding_date)").X("partner_id",u).cJ(0,"last_message_at",!1),$async$$1)
case 3:v=s.dl(f,new B.cMP(),y.g).bx(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1461}
B.cMP.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="wedding_id",h="last_message_at"
y.y.a(d)
x=J.a6(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.A(v?j:J.i(w,"partner_name_1"))
t=A.A(v?j:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
r=A.a_(x.h(d,"id"))
q=A.a_(x.h(d,i))
p=A.a_(x.h(d,"partner_id"))
o=A.a_(x.h(d,i))
n=A.cZt(w,j)
m=A.A(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.da(A.a_(x.h(d,h)))
l=A.A(v?j:J.i(w,"owner_id"))
k=A.zV(A.A(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"wedding_date")
return new A.ez(r,s,o,n,q,p,m,x,0,l,I.cJ8(k,A.d3(A.p(v==null?"":v))),C.iW)},
$S:1462}
B.cgS.prototype={
$0(){return this.a.n(new B.cgR())},
$S:0}
B.cgR.prototype={
$0(){},
$S:0}
B.cgP.prototype={
$0(){return C.f0},
$S:64}
B.cgO.prototype={
$2(d,e){return new A.jl("N\xe3o foi poss\xedvel carregar.",new B.cgE(this.a),null)},
$S:51}
B.cgE.prototype={
$0(){return this.a.gR().ai($.d22())},
$S:0}
B.cgN.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.dfM(a5,new B.cgF()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a7<1>")
x=A.U(new A.a7(a3,new B.cgG(a4),w),w.i("y.E"))}if(a3.length===0)return D.aE3
if(x.length===0)return A.bN(A.h('Sem conversas para "'+C.f.B(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a7(a3,new B.cgH(),A.a8(a3).i("a7<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a7<1>")
u=A.U(new A.a7(x,new B.cgI(),w),w.i("y.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.H)(u),++s){r=u[s]
J.bn(t.bJ(0,E.dfN(r.w),new B.cgJ()),r)}q=new B.cgQ()
w=y.u
a4=A.a([new A.S(K.CO,A.O(A.a([q.$3("Todas",!a4.x,new B.cgK(a4)),C.ac,q.$4$count("N\xe3o lidas",a4.x,new B.cgL(a4),v)],w),C.u,C.h,C.l,0,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.w(a2,A.h(C.Fv[m],a2,a2,a2,a2,C.aH,a2,a2),C.r,a2,a2,F.Kk,a2,a2,F.Ne,C.i5,a2,a2,a2)
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
f=E.cLh(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4V(new A.ch(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.Fg,new B.cgM(n,t,m,j),j===J.aO(a0)-1,!1,!1,a2));++j}C.e.p(a4,A.a([l,new A.S(C.bF,A.x(k,C.u,C.h,C.l),a2)],w))}}return A.d6(a4,a2,H.nf,a2,a2,!1,!1)},
$S:1463}
B.cgF.prototype={
$1(d){return d.y},
$S:232}
B.cgG.prototype={
$1(d){return C.f.t(d.b.toLowerCase(),this.a)},
$S:129}
B.cgH.prototype={
$1(d){return d.x>0},
$S:129}
B.cgI.prototype={
$1(d){return d.x>0},
$S:129}
B.cgJ.prototype={
$0(){return A.a([],y.B)},
$S:331}
B.cgQ.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.au:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aH(v,v,e?C.t:C.z,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.z
w=A.W(10)
C.e.p(r,A.a([C.bf,A.w(C.K,A.h(A.p(g),v,v,v,v,A.aH(v,v,e?$.au:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v),C.r,v,C.lc,new A.J(x,v,v,w,v,v,C.x),v,20,v,C.ls,v,v,v)],s))}return A.aX(A.w(v,A.O(r,C.u,C.h,C.J,0,v),C.r,v,v,new A.J(u,v,v,t,v,v,C.x),v,38,v,C.cI,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1464}
B.cgK.prototype={
$0(){var x=this.a
return x.n(new B.cgD(x))},
$S:0}
B.cgD.prototype={
$0(){return this.a.x=!1},
$S:0}
B.cgL.prototype={
$0(){var x=this.a
return x.n(new B.cgC(x))},
$S:0}
B.cgC.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cgM.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ae(w.a).ah("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bu,[B.cMQ,B.cMP,B.cgN,B.cgF,B.cgG,B.cgH,B.cgI,B.cgQ])
w(B.F7,A.dC)
w(B.aKp,A.dw)
x(A.bL,[B.cgS,B.cgR,B.cgP,B.cgE,B.cgJ,B.cgK,B.cgD,B.cgL,B.cgC,B.cgM])
w(B.cgO,A.cL)})()
A.br(b.typeUniverse,JSON.parse('{"F7":{"G":[],"e":[],"f":[]},"aKp":{"Z":["F7"]}}'))
var y=(function rtii(){var x=A.B
return{m:x("ax<t<ez>>"),g:x("ez"),B:x("r<ez>"),u:x("r<e>"),p:x("t<ez>"),y:x("a3<c,@>"),x:x("dv"),e:x("v"),A:x("a3<c,@>?"),q:x("M?")}})();(function constants(){D.aE3=new E.a3K(C.G3,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bLD=new A.lQ("Mensagens",null,!1,null,20,!1,null)
D.bLV=new A.Lt(C.a1Q,null)
D.bPt=new A.eL(0,null,0,0,null,null,D.bLV,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZT","d22",()=>A.ey(new B.cMQ(),null,!1,null,null,y.p))})()};
(a=>{a["zqrt2oo90HU3z48HzZtP4gREfrQ="]=a.current})($__dart_deferred_initializers__);