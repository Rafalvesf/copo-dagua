((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cLF:function cLF(){},cLE:function cLE(){},
dtI(){return new B.EU(null)},
EU:function EU(d){this.a=d},
aJL:function aJL(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cg8:function cg8(d){this.a=d},
cg7:function cg7(){},
cg5:function cg5(){},
cg4:function cg4(d){this.a=d},
cfV:function cfV(d){this.a=d},
cg3:function cg3(d,e,f){this.a=d
this.b=e
this.c=f},
cfW:function cfW(){},
cfX:function cfX(d){this.a=d},
cfY:function cfY(){},
cfZ:function cfZ(){},
cg_:function cg_(){},
cg6:function cg6(){},
cg0:function cg0(d){this.a=d},
cfU:function cfU(d){this.a=d},
cg1:function cg1(d){this.a=d},
cfT:function cfT(d){this.a=d},
cg2:function cg2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I,K
J=c[1]
A=c[0]
C=c[2]
G=c[155]
H=c[204]
B=a.updateHolder(c[36],B)
D=c[353]
E=c[81]
F=c[224]
I=c[120]
K=c[225]
B.EU.prototype={
S(){return new B.aJL(new A.aE(C.ak,$.aa()))}}
B.aJL.prototype={
ad(){this.aq()
this.w.an(0,new B.cg8(this))},
m(){var x=this.w
x.Z$=$.aa()
x.W$=0
this.a7()},
u(d){var x=this,w=null,v=x.gR().G($.d0N(),y.m),u=x.w,t=C.f.B(u.a.a),s=y.u
return A.cO(w,C.jj,new A.bC(C.aw,w,C.aC,C.y,A.a([A.bA(!1,new A.n1(A.a([A.aJ(w,A.aS(d,C.b5,y.x).w.r.b,w),D.bLs,new A.S(C.ee,new G.FP(u,"Pesquisar conversas",!0,w),w),F.a97],s),A.hC(v,new B.cg3(x,t.toLowerCase(),d),new B.cg4(x),new B.cg5(),!1,!0,!1),w),w,C.Z,!1),D.bPj],s),w),!0,w)}}
var z=a.updateTypes([])
B.cLF.prototype={
$1(d){return this.aFP(d)},
aFP(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Ci(d)
t=$.P().b
t===$&&A.b()
s=J
x=3
return A.d(t.P("conversations").ai(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, event_date)").U("partner_id",u).cJ(0,"last_message_at",!1),$async$$1)
case 3:v=s.d9(f,new B.cLE(),y.g).bx(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1455}
B.cLE.prototype={
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
n=A.cYb(w,j)
m=A.B(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.db(A.Y(x.h(d,h)))
l=A.B(v?j:J.i(w,"owner_id"))
k=A.zL(A.B(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"event_date")
return new A.eA(r,s,o,n,q,p,m,x,0,l,I.cI1(k,A.d0(A.p(v==null?"":v))),C.jV)},
$S:1456}
B.cg8.prototype={
$0(){return this.a.p(new B.cg7())},
$S:0}
B.cg7.prototype={
$0(){},
$S:0}
B.cg5.prototype={
$0(){return C.f0},
$S:59}
B.cg4.prototype={
$2(d,e){return new A.jf("N\xe3o foi poss\xedvel carregar.",new B.cfV(this.a),null)},
$S:51}
B.cfV.prototype={
$0(){return this.a.gR().aj($.d0N())},
$S:0}
B.cg3.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.deo(a5,new B.cfW()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a6<1>")
x=A.U(new A.a6(a3,new B.cfX(a4),w),w.i("w.E"))}if(a3.length===0)return D.aDV
if(x.length===0)return A.bN(A.h('Sem conversas para "'+C.f.B(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a6(a3,new B.cfY(),A.a8(a3).i("a6<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a6<1>")
u=A.U(new A.a6(x,new B.cfZ(),w),w.i("w.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.G)(u),++s){r=u[s]
J.bp(t.bH(0,E.dep(r.w),new B.cg_()),r)}q=new B.cg6()
w=y.u
a4=A.a([new A.S(K.CI,A.N(A.a([q.$3("Todas",!a4.x,new B.cg0(a4)),C.ab,q.$4$count("N\xe3o lidas",a4.x,new B.cg1(a4),v)],w),C.v,C.h,C.l,0,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.x(a2,A.h(C.Fp[m],a2,a2,a2,a2,C.aH,a2,a2),C.r,a2,a2,F.Ki,a2,a2,F.N9,C.i1,a2,a2,a2)
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
f=E.cK6(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4v(new A.cf(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.Fa,new B.cg2(n,t,m,j),j===J.aO(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.S(C.bG,A.z(k,C.v,C.h,C.l),a2)],w))}}return A.d4(a4,a2,H.nf,a2,a2,!1,!1)},
$S:1457}
B.cfW.prototype={
$1(d){return d.y},
$S:231}
B.cfX.prototype={
$1(d){return C.f.t(d.b.toLowerCase(),this.a)},
$S:149}
B.cfY.prototype={
$1(d){return d.x>0},
$S:149}
B.cfZ.prototype={
$1(d){return d.x>0},
$S:149}
B.cg_.prototype={
$0(){return A.a([],y.B)},
$S:424}
B.cg6.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.at:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aH(v,v,e?C.t:C.z,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.z
w=A.W(10)
C.e.n(r,A.a([C.bj,A.x(C.K,A.h(A.p(g),v,v,v,v,A.aH(v,v,e?$.at:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v),C.r,v,C.lb,new A.I(x,v,v,w,v,v,C.x),v,20,v,C.lo,v,v,v)],s))}return A.aX(A.x(v,A.N(r,C.v,C.h,C.J,0,v),C.r,v,v,new A.I(u,v,v,t,v,v,C.x),v,38,v,C.cG,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1458}
B.cg0.prototype={
$0(){var x=this.a
return x.p(new B.cfU(x))},
$S:0}
B.cfU.prototype={
$0(){return this.a.x=!1},
$S:0}
B.cg1.prototype={
$0(){var x=this.a
return x.p(new B.cfT(x))},
$S:0}
B.cfT.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cg2.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ac(w.a).ak("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bt,[B.cLF,B.cLE,B.cg3,B.cfW,B.cfX,B.cfY,B.cfZ,B.cg6])
w(B.EU,A.dB)
w(B.aJL,A.dv)
x(A.bK,[B.cg8,B.cg7,B.cg5,B.cfV,B.cg_,B.cg0,B.cfU,B.cg1,B.cfT,B.cg2])
w(B.cg4,A.cJ)})()
A.bq(b.typeUniverse,JSON.parse('{"EU":{"H":[],"e":[],"f":[]},"aJL":{"a1":["EU"]}}'))
var y=(function rtii(){var x=A.y
return{m:x("aw<t<eA>>"),g:x("eA"),B:x("r<eA>"),u:x("r<e>"),p:x("t<eA>"),y:x("a5<c,@>"),x:x("ds"),e:x("v"),A:x("a5<c,@>?"),q:x("L?")}})();(function constants(){D.aDV=new E.a3l(C.FX,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bLs=new A.lM("Mensagens",null,!1,null,20,!1,null)
D.bLK=new A.L9(C.a1J,null)
D.bPj=new A.eE(0,null,0,0,null,null,D.bLK,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYb","d0N",()=>A.ey(new B.cLF(),null,!1,null,null,y.p))})()};
(a=>{a["WTJQrkHA72NZazyrzwJ9lh7Oxzk="]=a.current})($__dart_deferred_initializers__);