((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cL1:function cL1(){},cL0:function cL0(){},
dsz(){return new B.F7(null)},
F7:function F7(d){this.a=d},
aKr:function aKr(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cfL:function cfL(d){this.a=d},
cfK:function cfK(){},
cfI:function cfI(){},
cfH:function cfH(d){this.a=d},
cfy:function cfy(d){this.a=d},
cfG:function cfG(d,e,f){this.a=d
this.b=e
this.c=f},
cfz:function cfz(d){this.a=d},
cfA:function cfA(){},
cfB:function cfB(){},
cfC:function cfC(){},
cfJ:function cfJ(){},
cfD:function cfD(d){this.a=d},
cfx:function cfx(d){this.a=d},
cfE:function cfE(d){this.a=d},
cfw:function cfw(d){this.a=d},
cfF:function cfF(d,e,f,g){var _=this
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
B.F7.prototype={
P(){return new B.aKr(new A.aE(C.al,$.aa()))}}
B.aKr.prototype={
ag(){this.aA()
this.w.am(0,new B.cfL(this))},
m(){var x=this.w
x.Y$=$.aa()
x.V$=0
this.a6()},
u(d){var x=this,w=null,v=x.gS().H($.d_S(),y.m),u=x.w,t=C.f.C(u.a.a),s=y.u
return A.cP(w,C.lf,new A.bG(C.aB,w,C.aH,C.z,A.a([A.bC(!1,new A.mg(A.a([A.aG(w,A.aw(d,C.b4,y.x).w.r.b,w),D.bMM,new A.Q(C.ed,new G.G1(u,"Pesquisar conversas",!0,w),w),F.a9U],s),A.hp(v,new B.cfG(x,t.toLowerCase(),d),new B.cfH(x),new B.cfI(),!1,!0,!1),w),w,C.a_,!1),D.bQA],s),w),!0,w)}}
var z=a.updateTypes([])
B.cL1.prototype={
$1(d){return this.aGP(d)},
aGP(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cu(d)
t=$.S().b
t===$&&A.b()
s=J
x=3
return A.d(t.R("conversations").an(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").W("partner_id",u).d4(0,"last_message_at",!1),$async$$1)
case 3:v=s.d7(f,new B.cL0(),y.g).by(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1447}
B.cL0.prototype={
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
p=A.cXj(w,n)
o=A.D(x.h(d,"last_message"))
return new A.hU(v,s,p,r,q,o,x.h(d,l)==null?n:A.db(A.a1(x.h(d,l))),0)},
$S:1448}
B.cfL.prototype={
$0(){return this.a.p(new B.cfK())},
$S:0}
B.cfK.prototype={
$0(){},
$S:0}
B.cfI.prototype={
$0(){return C.em},
$S:46}
B.cfH.prototype={
$2(d,e){return new A.jf("N\xe3o foi poss\xedvel carregar.",new B.cfy(this.a),null)},
$S:52}
B.cfy.prototype={
$0(){return this.a.gS().ak($.d_S())},
$S:0}
B.cfG.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.d4(a4,new B.cfz(a3))
x=A.U(a3,a3.$ti.i("z.E"))}a3=J.a7(a4)
if(a3.gZ(a4))return D.aEV
w=J.a7(x)
if(w.gZ(x))return A.bO(A.h('Sem conversas para "'+C.f.C(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.cI(a4,new B.cfA()).gA(0)
a3=a1.a
if(a3.x){w=w.cI(x,new B.cfB())
u=A.U(w,w.$ti.i("z.E"))}else u=x
t=A.E(y.e,y.p)
for(w=J.aq(u);w.t();){s=w.gE(w)
J.by(t.bM(0,E.ddp(s.w),new B.cfC()),s)}r=new B.cfJ()
w=y.u
a3=A.a([new A.Q(I.Da,A.N(A.a([r.$3("Todas",!a3.x,new B.cfD(a3)),C.ag,r.$4$count("N\xe3o lidas",a3.x,new B.cfE(a3),v)],w),C.w,C.h,C.l,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=A.h(C.FT[n],a2,a2,a2,a2,C.aO,a2,a2,a2)
l=new A.b5(22,22)
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
f=E.cJy(J.i(f,j).w)
e=t.h(0,n)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.i(d,j)
a0=t.h(0,n)
a0.toString
k.push(new E.a4G(new A.cy(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.FG,new B.cfF(p,t,n,j),j===J.aR(a0)-1,!1,!1,a2));++j}C.e.n(a3,A.a([new A.Q(D.auG,m,a2),new A.Q(C.bU,A.B(a2,A.A(k,C.w,C.h,C.l,0,C.u),C.ba,a2,a2,new A.M(C.t,a2,a2,new A.ch(l,l,l,l),C.bh,a2,C.y),a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return A.d0(a3,a2,H.ny,a2,a2,!1,C.a2,!1)},
$S:1449}
B.cfz.prototype={
$1(d){return C.f.q(d.b.toLowerCase(),this.a)},
$S:184}
B.cfA.prototype={
$1(d){return d.x>0},
$S:184}
B.cfB.prototype={
$1(d){return d.x>0},
$S:184}
B.cfC.prototype={
$0(){return A.a([],y.B)},
$S:1450}
B.cfJ.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.at:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aH(v,v,e?C.t:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.A
w=A.W(10)
C.e.n(r,A.a([C.bn,A.B(C.L,A.h(A.q(g),v,v,v,v,A.aH(v,v,e?$.at:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.ll,new A.M(x,v,v,w,v,v,C.y),v,20,v,C.lE,v,v,v)],s))}return A.aW(A.B(v,A.N(r,C.w,C.h,C.K,0,v,v),C.r,v,v,new A.M(u,v,v,t,v,v,C.y),v,38,v,C.cL,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1451}
B.cfD.prototype={
$0(){var x=this.a
return x.p(new B.cfx(x))},
$S:0}
B.cfx.prototype={
$0(){return this.a.x=!1},
$S:0}
B.cfE.prototype={
$0(){var x=this.a
return x.p(new B.cfw(x))},
$S:0}
B.cfw.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cfF.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ai(w.a).au("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bx,[B.cL1,B.cL0,B.cfG,B.cfz,B.cfA,B.cfB,B.cfJ])
w(B.F7,A.dC)
w(B.aKr,A.dy)
x(A.bQ,[B.cfL,B.cfK,B.cfI,B.cfy,B.cfC,B.cfD,B.cfx,B.cfE,B.cfw,B.cfF])
w(B.cfH,A.cO)})()
A.bn(b.typeUniverse,JSON.parse('{"F7":{"G":[],"e":[],"f":[]},"aKr":{"Z":["F7"]}}'))
var y=(function rtii(){var x=A.w
return{m:x("ay<t<hU>>"),g:x("hU"),B:x("r<hU>"),u:x("r<e>"),p:x("t<hU>"),y:x("a5<c,@>"),x:x("df"),e:x("v"),A:x("a5<c,@>?"),q:x("J?")}})();(function constants(){D.auG=new A.a0(24,18,20,8)
D.aEV=new E.a3z(C.Gr,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bMM=new A.lI("Mensagens",null,!1,null,20,!1,null)
D.bN3=new A.Li(C.a2y,null)
D.bQA=new A.f_(0,null,0,0,null,null,D.bN3,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWQ","d_S",()=>A.eG(new B.cL1(),null,!1,null,null,y.p))})()};
(a=>{a["23sSdZSIvZ4r/PfMwKfVrqZ4h9M="]=a.current})($__dart_deferred_initializers__);