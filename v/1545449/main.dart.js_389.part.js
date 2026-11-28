((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,H,A={cIm:function cIm(){},cIl:function cIl(){},
dpB(){return new A.EZ(null)},
EZ:function EZ(d){this.a=d},
aJK:function aJK(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
ceb:function ceb(d){this.a=d},
cea:function cea(){},
ce8:function ce8(){},
ce7:function ce7(d){this.a=d},
cdZ:function cdZ(d){this.a=d},
ce6:function ce6(d,e,f){this.a=d
this.b=e
this.c=f},
ce_:function ce_(d){this.a=d},
ce0:function ce0(){},
ce1:function ce1(){},
ce2:function ce2(){},
ce9:function ce9(){},
ce3:function ce3(d){this.a=d},
cdY:function cdY(d){this.a=d},
ce4:function ce4(d){this.a=d},
cdX:function cdX(d){this.a=d},
ce5:function ce5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I
J=c[1]
B=c[0]
C=c[2]
G=c[150]
H=c[200]
A=a.updateHolder(c[36],A)
D=c[344]
E=c[80]
F=c[221]
I=c[224]
A.EZ.prototype={
P(){return new A.aJK(new B.aI(C.ao,$.ac()))}}
A.aJK.prototype={
al(){this.aH()
this.w.am(0,new A.ceb(this))},
m(){var x=this.w
x.Z$=$.ac()
x.X$=0
this.a7()},
u(d){var x=this,w=null,v=x.gT().H($.cY2(),y.m),u=x.w,t=C.f.D(u.a.a),s=y.u
return B.cM(w,C.l6,new B.bB(C.aC,w,C.aH,C.z,B.a([B.bC(!1,new B.mg(B.a([B.aJ(w,B.aw(d,C.b5,y.x).w.r.b,w),D.bM5,new B.Q(C.fO,new G.FT(u,"Pesquisar conversas",!0,w),w),F.a9t],s),B.h9(v,new A.ce6(x,t.toLowerCase(),d),new A.ce7(x),new A.ce8(),!1,!0,!1),w),w,C.a_,!1),D.bPU],s),w),!0,w)}}
var z=a.updateTypes([])
A.cIm.prototype={
$1(d){return this.aGh(d)},
aGh(d){var x=0,w=B.n(y.p),v,u,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=B.Cp(d)
t=$.T().b
t===$&&B.b()
s=J
x=3
return B.d(t.R("conversations").az(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").W("partner_id",u).dl(0,"last_message_at",!1),$async$$1)
case 3:v=s.d3(f,new A.cIl(),y.g).by(0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1448}
A.cIl.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m="wedding_id",l="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=B.C(v?n:J.h(w,"partner_name_1"))
t=B.C(v?n:J.h(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
v=B.a1(x.h(d,"id"))
r=B.a1(x.h(d,m))
q=B.a1(x.h(d,"partner_id"))
B.a1(x.h(d,m))
p=B.cUv(w,n)
o=B.C(x.h(d,"last_message"))
return new B.hU(v,s,p,r,q,o,x.h(d,l)==null?n:B.d9(B.a1(x.h(d,l))),0)},
$S:1449}
A.ceb.prototype={
$0(){return this.a.q(new A.cea())},
$S:0}
A.cea.prototype={
$0(){},
$S:0}
A.ce8.prototype={
$0(){return C.eh},
$S:40}
A.ce7.prototype={
$2(d,e){return new B.jc("N\xe3o foi poss\xedvel carregar.",new A.cdZ(this.a),null)},
$S:48}
A.cdZ.prototype={
$0(){return this.a.gT().ai($.cY2())},
$S:0}
A.ce6.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.dc(a4,new A.ce_(a3))
x=B.V(a3,a3.$ti.i("z.E"))}a3=J.a7(a4)
if(a3.gY(a4))return D.aEj
w=J.a7(x)
if(w.gY(x))return B.bN(B.i('Sem conversas para "'+C.f.D(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.cI(a4,new A.ce0()).gA(0)
a3=a1.a
if(a3.x){w=w.cI(x,new A.ce1())
u=B.V(w,w.$ti.i("z.E"))}else u=x
t=B.A(y.e,y.p)
for(w=J.ar(u);w.t();){s=w.gE(w)
J.bw(t.bN(0,E.dav(s.w),new A.ce2()),s)}r=new A.ce9()
w=y.u
a3=B.a([new B.Q(I.CP,B.R(B.a([r.$3("Todas",!a3.x,new A.ce3(a3)),C.ak,r.$4$count("N\xe3o lidas",a3.x,new A.ce4(a3),v)],w),C.w,C.j,C.m,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=B.i(F.WK[n],a2,a2,a2,a2,C.bt,a2,a2,a2)
l=new B.b4(22,22)
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
f=E.cGT(J.h(f,j).w)
e=t.h(0,n)
e.toString
e=J.h(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.h(d,j)
a0=t.h(0,n)
a0.toString
k.push(new E.a4k(new B.cF(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,F.Wk,new A.ce5(p,t,n,j),j===J.aS(a0)-1,!1,a2));++j}C.e.n(a3,B.a([new B.Q(F.NK,m,a2),new B.Q(C.bM,B.D(a2,B.B(k,C.w,C.j,C.m,0,C.v),C.b1,a2,a2,new B.O(C.t,a2,a2,new B.cf(l,l,l,l),C.bb,a2,C.y),a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return B.cZ(a3,a2,H.ng,a2,a2,!1,C.a1,!1)},
$S:1450}
A.ce_.prototype={
$1(d){return C.f.p(d.b.toLowerCase(),this.a)},
$S:161}
A.ce0.prototype={
$1(d){return d.x>0},
$S:161}
A.ce1.prototype={
$1(d){return d.x>0},
$S:161}
A.ce2.prototype={
$0(){return B.a([],y.B)},
$S:1451}
A.ce9.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.ap:C.t,t=B.a0(19),s=y.u,r=B.a([B.i(d,v,v,v,v,B.aG(v,v,e?C.t:C.A,v,v,v,v,v,v,v,v,14,v,v,C.J,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.A
w=B.a0(10)
C.e.n(r,B.a([C.br,B.D(C.L,B.i(B.q(g),v,v,v,v,B.aG(v,v,e?$.ap:C.t,v,v,v,v,v,v,v,v,11,v,v,C.J,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.pt,new B.O(x,v,v,w,v,v,C.y),v,20,v,C.lu,v,v,v)],s))}return B.aU(B.D(v,B.R(r,C.w,C.j,C.K,0,v,v),C.r,v,v,new B.O(u,v,v,t,v,v,C.y),v,38,v,C.dB,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1452}
A.ce3.prototype={
$0(){var x=this.a
return x.q(new A.cdY(x))},
$S:0}
A.cdY.prototype={
$0(){return this.a.x=!1},
$S:0}
A.ce4.prototype={
$0(){var x=this.a
return x.q(new A.cdX(x))},
$S:0}
A.cdX.prototype={
$0(){return this.a.x=!0},
$S:0}
A.ce5.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.h(t,x)
u=v.h(0,u)
u.toString
x=J.h(u,x)
return B.ai(w.a).aq("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cIm,A.cIl,A.ce6,A.ce_,A.ce0,A.ce1,A.ce9])
w(A.EZ,B.dD)
w(A.aJK,B.dy)
x(B.bR,[A.ceb,A.cea,A.ce8,A.cdZ,A.ce2,A.ce3,A.cdY,A.ce4,A.cdX,A.ce5])
w(A.ce7,B.cR)})()
B.br(b.typeUniverse,JSON.parse('{"EZ":{"K":[],"e":[],"f":[]},"aJK":{"a_":["EZ"]}}'))
var y=(function rtii(){var x=B.w
return{m:x("ax<t<hU>>"),g:x("hU"),B:x("r<hU>"),u:x("r<e>"),p:x("t<hU>"),y:x("a4<c,@>"),x:x("dn"),e:x("v"),A:x("a4<c,@>?"),q:x("I?")}})();(function constants(){D.aEj=new E.a3b(C.G1,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bM5=new B.lG("Mensagens",null,!1,null,20,!1,null)
D.bMn=new B.L8(C.a2c,null)
D.bPU=new B.eZ(0,null,0,0,null,null,D.bMn,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTJ","cY2",()=>B.eE(new A.cIm(),null,!1,null,null,y.p))})()};
(a=>{a["4njMcKMJMve2yzJDDQhd6i4lBNI="]=a.current})($__dart_deferred_initializers__);