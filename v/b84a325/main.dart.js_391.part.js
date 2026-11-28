((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,G,H,A={cIo:function cIo(){},cIn:function cIn(){},
dpA(){return new A.EZ(null)},
EZ:function EZ(d){this.a=d},
aJL:function aJL(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cec:function cec(d){this.a=d},
ceb:function ceb(){},
ce9:function ce9(){},
ce8:function ce8(d){this.a=d},
ce_:function ce_(d){this.a=d},
ce7:function ce7(d,e,f){this.a=d
this.b=e
this.c=f},
ce0:function ce0(d){this.a=d},
ce1:function ce1(){},
ce2:function ce2(){},
ce3:function ce3(){},
cea:function cea(){},
ce4:function ce4(d){this.a=d},
cdZ:function cdZ(d){this.a=d},
ce5:function ce5(d){this.a=d},
cdY:function cdY(d){this.a=d},
ce6:function ce6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I
J=c[1]
B=c[0]
C=c[2]
G=c[148]
H=c[202]
A=a.updateHolder(c[36],A)
D=c[347]
E=c[80]
F=c[222]
I=c[225]
A.EZ.prototype={
P(){return new A.aJL(new B.aI(C.ao,$.ac()))}}
A.aJL.prototype={
al(){this.aH()
this.w.am(0,new A.cec(this))},
m(){var x=this.w
x.Z$=$.ac()
x.X$=0
this.a7()},
u(d){var x=this,w=null,v=x.gT().H($.cY4(),y.m),u=x.w,t=C.f.D(u.a.a),s=y.u
return B.cM(w,C.l3,new B.bB(C.aC,w,C.aH,C.z,B.a([B.bC(!1,new B.mg(B.a([B.aJ(w,B.aw(d,C.b5,y.x).w.r.b,w),D.bM5,new B.R(C.fM,new G.FT(u,"Pesquisar conversas",!0,w),w),F.a9u],s),B.h9(v,new A.ce7(x,t.toLowerCase(),d),new A.ce8(x),new A.ce9(),!1,!0,!1),w),w,C.a_,!1),D.bPU],s),w),!0,w)}}
var z=a.updateTypes([])
A.cIo.prototype={
$1(d){return this.aGa(d)},
aGa(d){var x=0,w=B.n(y.p),v,u,t,s
var $async$$1=B.j(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:u=B.Cq(d)
t=$.T().b
t===$&&B.b()
s=J
x=3
return B.d(t.R("conversations").az(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").W("partner_id",u).dl(0,"last_message_at",!1),$async$$1)
case 3:v=s.d3(f,new A.cIn(),y.g).by(0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$$1,w)},
$S:1449}
A.cIn.prototype={
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
p=B.cUx(w,n)
o=B.C(x.h(d,"last_message"))
return new B.hU(v,s,p,r,q,o,x.h(d,l)==null?n:B.d9(B.a1(x.h(d,l))),0)},
$S:1450}
A.cec.prototype={
$0(){return this.a.q(new A.ceb())},
$S:0}
A.ceb.prototype={
$0(){},
$S:0}
A.ce9.prototype={
$0(){return C.eh},
$S:42}
A.ce8.prototype={
$2(d,e){return new B.jc("N\xe3o foi poss\xedvel carregar.",new A.ce_(this.a),null)},
$S:43}
A.ce_.prototype={
$0(){return this.a.gT().ai($.cY4())},
$S:0}
A.ce7.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.dc(a4,new A.ce0(a3))
x=B.V(a3,a3.$ti.i("z.E"))}a3=J.a7(a4)
if(a3.gY(a4))return D.aEm
w=J.a7(x)
if(w.gY(x))return B.bN(B.i('Sem conversas para "'+C.f.D(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.cI(a4,new A.ce1()).gA(0)
a3=a1.a
if(a3.x){w=w.cI(x,new A.ce2())
u=B.V(w,w.$ti.i("z.E"))}else u=x
t=B.A(y.e,y.p)
for(w=J.ar(u);w.t();){s=w.gE(w)
J.bw(t.bN(0,E.dav(s.w),new A.ce3()),s)}r=new A.cea()
w=y.u
a3=B.a([new B.R(I.CR,B.Q(B.a([r.$3("Todas",!a3.x,new A.ce4(a3)),C.ai,r.$4$count("N\xe3o lidas",a3.x,new A.ce5(a3),v)],w),C.w,C.j,C.m,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=B.i(F.WJ[n],a2,a2,a2,a2,C.bt,a2,a2,a2)
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
f=E.cGV(J.h(f,j).w)
e=t.h(0,n)
e.toString
e=J.h(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.h(d,j)
a0=t.h(0,n)
a0.toString
k.push(new E.a4k(new B.cF(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,F.Wj,new A.ce6(p,t,n,j),j===J.aS(a0)-1,!1,a2));++j}C.e.n(a3,B.a([new B.R(F.NI,m,a2),new B.R(C.bM,B.D(a2,B.B(k,C.w,C.j,C.m,0,C.v),C.b1,a2,a2,new B.O(C.t,a2,a2,new B.cf(l,l,l,l),C.bb,a2,C.y),a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return B.cZ(a3,a2,H.nd,a2,a2,!1,C.a1,!1)},
$S:1451}
A.ce0.prototype={
$1(d){return C.f.p(d.b.toLowerCase(),this.a)},
$S:184}
A.ce1.prototype={
$1(d){return d.x>0},
$S:184}
A.ce2.prototype={
$1(d){return d.x>0},
$S:184}
A.ce3.prototype={
$0(){return B.a([],y.B)},
$S:1452}
A.cea.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.ap:C.t,t=B.a0(19),s=y.u,r=B.a([B.i(d,v,v,v,v,B.aG(v,v,e?C.t:C.A,v,v,v,v,v,v,v,v,14,v,v,C.J,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.A
w=B.a0(10)
C.e.n(r,B.a([C.br,B.D(C.L,B.i(B.q(g),v,v,v,v,B.aG(v,v,e?$.ap:C.t,v,v,v,v,v,v,v,v,11,v,v,C.J,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.pt,new B.O(x,v,v,w,v,v,C.y),v,20,v,C.lr,v,v,v)],s))}return B.aU(B.D(v,B.Q(r,C.w,C.j,C.K,0,v,v),C.r,v,v,new B.O(u,v,v,t,v,v,C.y),v,38,v,C.dA,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1453}
A.ce4.prototype={
$0(){var x=this.a
return x.q(new A.cdZ(x))},
$S:0}
A.cdZ.prototype={
$0(){return this.a.x=!1},
$S:0}
A.ce5.prototype={
$0(){var x=this.a
return x.q(new A.cdY(x))},
$S:0}
A.cdY.prototype={
$0(){return this.a.x=!0},
$S:0}
A.ce6.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.h(t,x)
u=v.h(0,u)
u.toString
x=J.h(u,x)
return B.ai(w.a).ar("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cIo,A.cIn,A.ce7,A.ce0,A.ce1,A.ce2,A.cea])
w(A.EZ,B.dD)
w(A.aJL,B.dy)
x(B.bR,[A.cec,A.ceb,A.ce9,A.ce_,A.ce3,A.ce4,A.cdZ,A.ce5,A.cdY,A.ce6])
w(A.ce8,B.cR)})()
B.bq(b.typeUniverse,JSON.parse('{"EZ":{"K":[],"e":[],"f":[]},"aJL":{"a_":["EZ"]}}'))
var y=(function rtii(){var x=B.w
return{m:x("ax<t<hU>>"),g:x("hU"),B:x("r<hU>"),u:x("r<e>"),p:x("t<hU>"),y:x("a4<c,@>"),x:x("dn"),e:x("v"),A:x("a4<c,@>?"),q:x("I?")}})();(function constants(){D.aEm=new E.a3a(C.G2,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bM5=new B.lH("Mensagens",null,!1,null,20,!1,null)
D.bMn=new B.L8(C.a2b,null)
D.bPU=new B.f_(0,null,0,0,null,null,D.bMn,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTJ","cY4",()=>B.eE(new A.cIo(),null,!1,null,null,y.p))})()};
(a=>{a["HteNgJ1+qBq/ImJqW00BZV/7F6E="]=a.current})($__dart_deferred_initializers__);