((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cKS:function cKS(){},cKR:function cKR(){},
dsp(){return new B.F6(null)},
F6:function F6(d){this.a=d},
aKq:function aKq(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cfK:function cfK(d){this.a=d},
cfJ:function cfJ(){},
cfH:function cfH(){},
cfG:function cfG(d){this.a=d},
cfx:function cfx(d){this.a=d},
cfF:function cfF(d,e,f){this.a=d
this.b=e
this.c=f},
cfy:function cfy(d){this.a=d},
cfz:function cfz(){},
cfA:function cfA(){},
cfB:function cfB(){},
cfI:function cfI(){},
cfC:function cfC(d){this.a=d},
cfw:function cfw(d){this.a=d},
cfD:function cfD(d){this.a=d},
cfv:function cfv(d){this.a=d},
cfE:function cfE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I
J=c[1]
A=c[0]
C=c[2]
G=c[153]
H=c[207]
B=a.updateHolder(c[36],B)
D=c[353]
E=c[82]
F=c[229]
I=c[228]
B.F6.prototype={
P(){return new B.aKq(new A.aF(C.al,$.ab()))}}
B.aKq.prototype={
ah(){this.aA()
this.w.am(0,new B.cfK(this))},
m(){var x=this.w
x.Z$=$.ab()
x.V$=0
this.a6()},
u(d){var x=this,w=null,v=x.gS().H($.d_I(),y.m),u=x.w,t=C.f.C(u.a.a),s=y.u
return A.cP(w,C.lg,new A.bE(C.aB,w,C.aH,C.z,A.a([A.bC(!1,new A.mg(A.a([A.aG(w,A.aw(d,C.b4,y.x).w.r.b,w),D.bML,new A.Q(C.ed,new G.G0(u,"Pesquisar conversas",!0,w),w),F.a9T],s),A.hp(v,new B.cfF(x,t.toLowerCase(),d),new B.cfG(x),new B.cfH(),!1,!0,!1),w),w,C.a_,!1),D.bQz],s),w),!0,w)}}
var z=a.updateTypes([])
B.cKS.prototype={
$1(d){return this.aGL(d)},
aGL(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cu(d)
t=$.S().b
t===$&&A.b()
s=J
x=3
return A.d(t.R("conversations").ao(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").W("partner_id",u).da(0,"last_message_at",!1),$async$$1)
case 3:v=s.d7(f,new B.cKR(),y.g).by(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1446}
B.cKR.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m="wedding_id",l="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.D(v?n:J.i(w,"partner_name_1"))
t=A.D(v?n:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
v=A.a1(x.h(d,"id"))
r=A.a1(x.h(d,m))
q=A.a1(x.h(d,"partner_id"))
A.a1(x.h(d,m))
p=A.cX9(w,n)
o=A.D(x.h(d,"last_message"))
return new A.hU(v,s,p,r,q,o,x.h(d,l)==null?n:A.db(A.a1(x.h(d,l))),0)},
$S:1447}
B.cfK.prototype={
$0(){return this.a.p(new B.cfJ())},
$S:0}
B.cfJ.prototype={
$0(){},
$S:0}
B.cfH.prototype={
$0(){return C.em},
$S:44}
B.cfG.prototype={
$2(d,e){return new A.jf("N\xe3o foi poss\xedvel carregar.",new B.cfx(this.a),null)},
$S:50}
B.cfx.prototype={
$0(){return this.a.gS().ak($.d_I())},
$S:0}
B.cfF.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.d4(a4,new B.cfy(a3))
x=A.U(a3,a3.$ti.i("z.E"))}a3=J.a7(a4)
if(a3.gY(a4))return D.aEU
w=J.a7(x)
if(w.gY(x))return A.bO(A.h('Sem conversas para "'+C.f.C(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.cI(a4,new B.cfz()).gA(0)
a3=a1.a
if(a3.x){w=w.cI(x,new B.cfA())
u=A.U(w,w.$ti.i("z.E"))}else u=x
t=A.E(y.e,y.p)
for(w=J.aq(u);w.t();){s=w.gE(w)
J.by(t.bM(0,E.ddf(s.w),new B.cfB()),s)}r=new B.cfI()
w=y.u
a3=A.a([new A.Q(I.Da,A.O(A.a([r.$3("Todas",!a3.x,new B.cfC(a3)),C.ag,r.$4$count("N\xe3o lidas",a3.x,new B.cfD(a3),v)],w),C.w,C.h,C.l,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=A.h(C.FT[n],a2,a2,a2,a2,C.aS,a2,a2,a2)
l=new A.b4(22,22)
k=A.a([],w)
j=0
for(;;){i=t.h(0,n)
i.toString
if(!(j<J.aR(i)))break
i=t.h(0,n)
i.toString
i=J.i(i,j)
h=t.h(0,n)
h.toString
h=J.i(h,j)
g=t.h(0,n)
g.toString
g=J.i(g,j)
f=t.h(0,n)
f.toString
f=E.cJo(J.i(f,j).w)
e=t.h(0,n)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.i(d,j)
a0=t.h(0,n)
a0.toString
k.push(new E.a4G(new A.cx(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.FG,new B.cfE(p,t,n,j),j===J.aR(a0)-1,!1,!1,a2));++j}C.e.n(a3,A.a([new A.Q(D.auF,m,a2),new A.Q(C.bU,A.B(a2,A.A(k,C.w,C.h,C.l,0,C.u),C.ba,a2,a2,new A.M(C.t,a2,a2,new A.ch(l,l,l,l),C.bh,a2,C.y),a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return A.d0(a3,a2,H.ny,a2,a2,!1,C.a2,!1)},
$S:1448}
B.cfy.prototype={
$1(d){return C.f.q(d.b.toLowerCase(),this.a)},
$S:177}
B.cfz.prototype={
$1(d){return d.x>0},
$S:177}
B.cfA.prototype={
$1(d){return d.x>0},
$S:177}
B.cfB.prototype={
$0(){return A.a([],y.B)},
$S:1449}
B.cfI.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.at:C.t,t=A.X(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aI(v,v,e?C.t:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.A
w=A.X(10)
C.e.n(r,A.a([C.bn,A.B(C.L,A.h(A.q(g),v,v,v,v,A.aI(v,v,e?$.at:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.lm,new A.M(x,v,v,w,v,v,C.y),v,20,v,C.lF,v,v,v)],s))}return A.aW(A.B(v,A.O(r,C.w,C.h,C.K,0,v,v),C.r,v,v,new A.M(u,v,v,t,v,v,C.y),v,38,v,C.cX,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1450}
B.cfC.prototype={
$0(){var x=this.a
return x.p(new B.cfw(x))},
$S:0}
B.cfw.prototype={
$0(){return this.a.x=!1},
$S:0}
B.cfD.prototype={
$0(){var x=this.a
return x.p(new B.cfv(x))},
$S:0}
B.cfv.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cfE.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ai(w.a).au("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bw,[B.cKS,B.cKR,B.cfF,B.cfy,B.cfz,B.cfA,B.cfI])
w(B.F6,A.dC)
w(B.aKq,A.dy)
x(A.bQ,[B.cfK,B.cfJ,B.cfH,B.cfx,B.cfB,B.cfC,B.cfw,B.cfD,B.cfv,B.cfE])
w(B.cfG,A.cO)})()
A.bn(b.typeUniverse,JSON.parse('{"F6":{"G":[],"e":[],"f":[]},"aKq":{"Z":["F6"]}}'))
var y=(function rtii(){var x=A.w
return{m:x("ay<t<hU>>"),g:x("hU"),B:x("r<hU>"),u:x("r<e>"),p:x("t<hU>"),y:x("a5<c,@>"),x:x("df"),e:x("v"),A:x("a5<c,@>?"),q:x("J?")}})();(function constants(){D.auF=new A.a0(24,18,20,8)
D.aEU=new E.a3z(C.Gr,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bML=new A.lI("Mensagens",null,!1,null,20,!1,null)
D.bN2=new A.Li(C.a2x,null)
D.bQz=new A.f_(0,null,0,0,null,null,D.bN2,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWF","d_I",()=>A.eG(new B.cKS(),null,!1,null,null,y.p))})()};
(a=>{a["ZoZCUrp0tCFePK6/4823VCdErTs="]=a.current})($__dart_deferred_initializers__);