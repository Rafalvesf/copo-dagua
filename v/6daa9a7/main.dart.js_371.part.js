((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,H,A={cEZ:function cEZ(){},cEY:function cEY(){},
dlv(){return new A.EI(null)},
EI:function EI(d){this.a=d},
aIu:function aIu(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cbl:function cbl(d){this.a=d},
cbk:function cbk(){},
cbi:function cbi(){},
cbh:function cbh(d){this.a=d},
cb8:function cb8(d){this.a=d},
cbg:function cbg(d,e,f){this.a=d
this.b=e
this.c=f},
cb9:function cb9(d){this.a=d},
cba:function cba(){},
cbb:function cbb(){},
cbc:function cbc(){},
cbj:function cbj(){},
cbd:function cbd(d){this.a=d},
cb7:function cb7(d){this.a=d},
cbe:function cbe(d){this.a=d},
cb6:function cb6(d){this.a=d},
cbf:function cbf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I
J=c[1]
B=c[0]
C=c[2]
G=c[147]
H=c[197]
A=a.updateHolder(c[34],A)
D=c[333]
E=c[78]
F=c[217]
I=c[220]
A.EI.prototype={
R(){return new A.aIu(new B.aI(C.ao,$.ad()))}}
A.aIu.prototype={
am(){this.aJ()
this.w.al(0,new A.cbl(this))},
m(){var x=this.w
x.Z$=$.ad()
x.X$=0
this.a8()},
u(d){var x=this,w=null,v=x.gT().G($.cUu(),y.m),u=x.w,t=C.f.D(u.a.a),s=y.u
return B.cP(w,C.l_,new B.bH(C.aB,w,C.aH,C.z,B.a([B.bG(!1,new B.m6(B.a([B.aO(w,B.aw(d,C.b7,y.x).w.r.b,w),D.bKh,new B.Q(C.fI,new G.Fy(u,"Pesquisar conversas",!0,w),w),F.a8x],s),B.h3(v,new A.cbg(x,t.toLowerCase(),d),new A.cbh(x),new A.cbi(),!1,!0,!1),w),w,C.a_,!1),D.bO1],s),w),!0,w)}}
var z=a.updateTypes([])
A.cEZ.prototype={
$1(d){return this.aFv(d)},
aFv(d){var x=0,w=B.n(y.p),v,u,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=B.C7(d)
t=$.T().b
t===$&&B.b()
s=J
x=3
return B.d(t.P("conversations").aw(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").W("partner_id",u).dk(0,"last_message_at",!1),$async$$1)
case 3:v=s.d3(f,new A.cEY(),y.g).by(0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1422}
A.cEY.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m="wedding_id",l="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=B.J(v?n:J.h(w,"partner_name_1"))
t=B.J(v?n:J.h(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
v=B.a_(x.h(d,"id"))
r=B.a_(x.h(d,m))
q=B.a_(x.h(d,"partner_id"))
B.a_(x.h(d,m))
p=B.cQW(w,n)
o=B.J(x.h(d,"last_message"))
return new B.hQ(v,s,p,r,q,o,x.h(d,l)==null?n:B.d8(B.a_(x.h(d,l))),0)},
$S:1423}
A.cbl.prototype={
$0(){return this.a.q(new A.cbk())},
$S:0}
A.cbk.prototype={
$0(){},
$S:0}
A.cbi.prototype={
$0(){return C.dV},
$S:40}
A.cbh.prototype={
$2(d,e){return new B.jb("N\xe3o foi poss\xedvel carregar.",new A.cb8(this.a),null)},
$S:47}
A.cb8.prototype={
$0(){return this.a.gT().ah($.cUu())},
$S:0}
A.cbg.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.d7(a4,new A.cb9(a3))
x=B.W(a3,a3.$ti.i("z.E"))}a3=J.a7(a4)
if(a3.gY(a4))return D.aD0
w=J.a7(x)
if(w.gY(x))return B.bV(B.i('Sem conversas para "'+C.f.D(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.cH(a4,new A.cba()).gA(0)
a3=a1.a
if(a3.x){w=w.cH(x,new A.cbb())
u=B.W(w,w.$ti.i("z.E"))}else u=x
t=B.A(y.e,y.p)
for(w=J.at(u);w.t();){s=w.gE(w)
J.by(t.bM(0,E.d6P(s.w),new A.cbc()),s)}r=new A.cbj()
w=y.u
a3=B.a([new B.Q(I.Ci,B.R(B.a([r.$3("Todas",!a3.x,new A.cbd(a3)),C.ak,r.$4$count("N\xe3o lidas",a3.x,new A.cbe(a3),v)],w),C.x,C.j,C.o,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=B.i(F.VX[n],a2,a2,a2,a2,C.bB,a2,a2,a2)
l=new B.b5(22,22)
k=B.a([],w)
j=0
for(;;){i=t.h(0,n)
i.toString
if(!(j<J.aS(i)))break
i=t.h(0,n)
i.toString
i=J.h(i,j)
h=t.h(0,n)
h.toString
h=J.h(h,j)
g=t.h(0,n)
g.toString
g=J.h(g,j)
f=t.h(0,n)
f.toString
f=E.cDw(J.h(f,j).w)
e=t.h(0,n)
e.toString
e=J.h(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.h(d,j)
a0=t.h(0,n)
a0.toString
k.push(new E.a3E(new B.cA(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,F.Vx,new A.cbf(p,t,n,j),j===J.aS(a0)-1,!1,a2));++j}C.e.p(a3,B.a([new B.Q(F.N_,m,a2),new B.Q(C.bM,B.C(a2,B.B(k,C.x,C.j,C.o,0,C.v),C.b4,a2,a2,new B.O(C.u,a2,a2,new B.ce(l,l,l,l),C.bb,a2,C.y),a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return B.d5(a3,a2,H.n5,a2,a2,!1,C.a1,!1)},
$S:1424}
A.cb9.prototype={
$1(d){return C.f.n(d.b.toLowerCase(),this.a)},
$S:184}
A.cba.prototype={
$1(d){return d.x>0},
$S:184}
A.cbb.prototype={
$1(d){return d.x>0},
$S:184}
A.cbc.prototype={
$0(){return B.a([],y.B)},
$S:1425}
A.cbj.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.ap:C.u,t=B.a2(19),s=y.u,r=B.a([B.i(d,v,v,v,v,B.aH(v,v,e?C.u:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.u:C.A
w=B.a2(10)
C.e.p(r,B.a([C.bs,B.C(C.K,B.i(B.q(g),v,v,v,v,B.aH(v,v,e?$.ap:C.u,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.pf,new B.O(x,v,v,w,v,v,C.y),v,20,v,C.ln,v,v,v)],s))}return B.aT(B.C(v,B.R(r,C.x,C.j,C.N,0,v,v),C.r,v,v,new B.O(u,v,v,t,v,v,C.y),v,38,v,C.dA,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1426}
A.cbd.prototype={
$0(){var x=this.a
return x.q(new A.cb7(x))},
$S:0}
A.cb7.prototype={
$0(){return this.a.x=!1},
$S:0}
A.cbe.prototype={
$0(){var x=this.a
return x.q(new A.cb6(x))},
$S:0}
A.cb6.prototype={
$0(){return this.a.x=!0},
$S:0}
A.cbf.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.h(t,x)
u=v.h(0,u)
u.toString
x=J.h(u,x)
return B.aj(w.a).az("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cEZ,A.cEY,A.cbg,A.cb9,A.cba,A.cbb,A.cbj])
w(A.EI,B.dD)
w(A.aIu,B.dv)
x(B.bR,[A.cbl,A.cbk,A.cbi,A.cb8,A.cbc,A.cbd,A.cb7,A.cbe,A.cb6,A.cbf])
w(A.cbh,B.cS)})()
B.bu(b.typeUniverse,JSON.parse('{"EI":{"I":[],"e":[],"f":[]},"aIu":{"a1":["EI"]}}'))
var y=(function rtii(){var x=B.w
return{m:x("ax<r<hQ>>"),g:x("hQ"),B:x("t<hQ>"),u:x("t<e>"),p:x("r<hQ>"),y:x("a5<c,@>"),x:x("dx"),e:x("v"),A:x("a5<c,@>?"),q:x("L?")}})();(function constants(){D.aD0=new E.a2w(C.Fr,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bKh=new B.la("Mensagens",null,!1,null,20,!1,null)
D.bKz=new B.KK(C.a1j,null)
D.bO1=new B.f0(0,null,0,0,null,null,D.bKz,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dPh","cUu",()=>B.ez(new A.cEZ(),null,!1,null,null,y.p))})()};
(a=>{a["sz238TJy4KTt1lqs0G3Y95pQGNk="]=a.current})($__dart_deferred_initializers__);