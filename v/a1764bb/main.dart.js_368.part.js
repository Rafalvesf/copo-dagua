((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,H,A={cEC:function cEC(){},cEB:function cEB(){},
dlb(){return new A.EC(null)},
EC:function EC(d){this.a=d},
aIe:function aIe(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
caJ:function caJ(d){this.a=d},
caI:function caI(){},
caG:function caG(){},
caF:function caF(d){this.a=d},
caw:function caw(d){this.a=d},
caE:function caE(d,e,f){this.a=d
this.b=e
this.c=f},
cax:function cax(d){this.a=d},
cay:function cay(){},
caz:function caz(){},
caA:function caA(){},
caH:function caH(){},
caB:function caB(d){this.a=d},
cav:function cav(d){this.a=d},
caC:function caC(d){this.a=d},
cau:function cau(d){this.a=d},
caD:function caD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I
J=c[1]
B=c[0]
C=c[2]
G=c[144]
H=c[194]
A=a.updateHolder(c[34],A)
D=c[313]
E=c[78]
F=c[214]
I=c[217]
A.EC.prototype={
R(){return new A.aIe(new B.aI(C.ao,$.ad()))}}
A.aIe.prototype={
am(){this.aJ()
this.w.al(0,new A.caJ(this))},
m(){var x=this.w
x.Z$=$.ad()
x.X$=0
this.a8()},
u(d){var x=this,w=null,v=x.gT().G($.cUc(),y.m),u=x.w,t=C.f.D(u.a.a),s=y.u
return B.cP(w,C.kZ,new B.bK(C.aC,w,C.aH,C.z,B.a([B.bH(!1,new B.m6(B.a([B.aO(w,B.aw(d,C.b7,y.x).w.r.b,w),D.bJS,new B.S(C.fH,new G.Fs(u,"Pesquisar conversas",!0,w),w),F.a8p],s),B.h3(v,new A.caE(x,t.toLowerCase(),d),new A.caF(x),new A.caG(),!1,!0,!1),w),w,C.a0,!1),D.bNB],s),w),!0,w)}}
var z=a.updateTypes([])
A.cEC.prototype={
$1(d){return this.aFq(d)},
aFq(d){var x=0,w=B.n(y.p),v,u,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=B.C3(d)
t=$.T().b
t===$&&B.b()
s=J
x=3
return B.d(t.P("conversations").aw(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").W("partner_id",u).dk(0,"last_message_at",!1),$async$$1)
case 3:v=s.d3(f,new A.cEB(),y.g).by(0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1417}
A.cEB.prototype={
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
p=B.cQF(w,n)
o=B.J(x.h(d,"last_message"))
return new B.hQ(v,s,p,r,q,o,x.h(d,l)==null?n:B.d8(B.a_(x.h(d,l))),0)},
$S:1418}
A.caJ.prototype={
$0(){return this.a.q(new A.caI())},
$S:0}
A.caI.prototype={
$0(){},
$S:0}
A.caG.prototype={
$0(){return C.br},
$S:38}
A.caF.prototype={
$2(d,e){return new B.jb("N\xe3o foi poss\xedvel carregar.",new A.caw(this.a),null)},
$S:45}
A.caw.prototype={
$0(){return this.a.gT().ah($.cUc())},
$S:0}
A.caE.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.d7(a4,new A.cax(a3))
x=B.W(a3,a3.$ti.i("y.E"))}a3=J.a7(a4)
if(a3.gY(a4))return D.aCO
w=J.a7(x)
if(w.gY(x))return B.bT(B.i('Sem conversas para "'+C.f.D(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.cH(a4,new A.cay()).gA(0)
a3=a1.a
if(a3.x){w=w.cH(x,new A.caz())
u=B.W(w,w.$ti.i("y.E"))}else u=x
t=B.A(y.e,y.p)
for(w=J.at(u);w.t();){s=w.gE(w)
J.by(t.bM(0,E.d6y(s.w),new A.caA()),s)}r=new A.caH()
w=y.u
a3=B.a([new B.S(I.Ci,B.Q(B.a([r.$3("Todas",!a3.x,new A.caB(a3)),C.al,r.$4$count("N\xe3o lidas",a3.x,new A.caC(a3),v)],w),C.x,C.j,C.p,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=B.i(F.VT[n],a2,a2,a2,a2,C.bB,a2,a2,a2)
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
f=E.cD9(J.h(f,j).w)
e=t.h(0,n)
e.toString
e=J.h(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.h(d,j)
a0=t.h(0,n)
a0.toString
k.push(new E.a3w(new B.cA(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,F.Vt,new A.caD(p,t,n,j),j===J.aS(a0)-1,!1,a2));++j}C.e.p(a3,B.a([new B.S(F.MW,m,a2),new B.S(C.bN,B.B(a2,B.C(k,C.x,C.j,C.p,0,C.v),C.b4,a2,a2,new B.O(C.u,a2,a2,new B.ce(l,l,l,l),C.bb,a2,C.y),a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return B.d5(a3,a2,H.n4,a2,a2,!1,C.a3,!1)},
$S:1419}
A.cax.prototype={
$1(d){return C.f.n(d.b.toLowerCase(),this.a)},
$S:183}
A.cay.prototype={
$1(d){return d.x>0},
$S:183}
A.caz.prototype={
$1(d){return d.x>0},
$S:183}
A.caA.prototype={
$0(){return B.a([],y.B)},
$S:1420}
A.caH.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.ap:C.u,t=B.a2(19),s=y.u,r=B.a([B.i(d,v,v,v,v,B.aH(v,v,e?C.u:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.u:C.A
w=B.a2(10)
C.e.p(r,B.a([C.bt,B.B(C.K,B.i(B.q(g),v,v,v,v,B.aH(v,v,e?$.ap:C.u,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.pe,new B.O(x,v,v,w,v,v,C.y),v,20,v,C.lk,v,v,v)],s))}return B.aT(B.B(v,B.Q(r,C.x,C.j,C.P,0,v,v),C.r,v,v,new B.O(u,v,v,t,v,v,C.y),v,38,v,C.dA,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1421}
A.caB.prototype={
$0(){var x=this.a
return x.q(new A.cav(x))},
$S:0}
A.cav.prototype={
$0(){return this.a.x=!1},
$S:0}
A.caC.prototype={
$0(){var x=this.a
return x.q(new A.cau(x))},
$S:0}
A.cau.prototype={
$0(){return this.a.x=!0},
$S:0}
A.caD.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.h(t,x)
u=v.h(0,u)
u.toString
x=J.h(u,x)
return B.aj(w.a).az("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cEC,A.cEB,A.caE,A.cax,A.cay,A.caz,A.caH])
w(A.EC,B.dD)
w(A.aIe,B.dv)
x(B.bR,[A.caJ,A.caI,A.caG,A.caw,A.caA,A.caB,A.cav,A.caC,A.cau,A.caD])
w(A.caF,B.cT)})()
B.bw(b.typeUniverse,JSON.parse('{"EC":{"I":[],"e":[],"f":[]},"aIe":{"a1":["EC"]}}'))
var y=(function rtii(){var x=B.x
return{m:x("ax<r<hQ>>"),g:x("hQ"),B:x("t<hQ>"),u:x("t<e>"),p:x("r<hQ>"),y:x("a5<c,@>"),x:x("dx"),e:x("v"),A:x("a5<c,@>?"),q:x("L?")}})();(function constants(){D.aCO=new E.a2o(C.Fq,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bJS=new B.la("Mensagens",null,!1,null,20,!1,null)
D.bK9=new B.KG(C.a1d,null)
D.bNB=new B.f7(0,null,0,0,null,null,D.bK9,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dOT","cUc",()=>B.ez(new A.cEC(),null,!1,null,null,y.p))})()};
(a=>{a["Ud3t5P7HlFdZrWtetbdreZ+sUM4="]=a.current})($__dart_deferred_initializers__);