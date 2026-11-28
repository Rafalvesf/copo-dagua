((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cJd:function cJd(){},cJc:function cJc(){},
dqw(){return new B.F1(null)},
F1:function F1(d){this.a=d},
aJY:function aJY(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
ceR:function ceR(d){this.a=d},
ceQ:function ceQ(){},
ceO:function ceO(){},
ceN:function ceN(d){this.a=d},
ceE:function ceE(d){this.a=d},
ceM:function ceM(d,e,f){this.a=d
this.b=e
this.c=f},
ceF:function ceF(d){this.a=d},
ceG:function ceG(){},
ceH:function ceH(){},
ceI:function ceI(){},
ceP:function ceP(){},
ceJ:function ceJ(d){this.a=d},
ceD:function ceD(d){this.a=d},
ceK:function ceK(d){this.a=d},
ceC:function ceC(d){this.a=d},
ceL:function ceL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I
J=c[1]
A=c[0]
C=c[2]
G=c[151]
H=c[203]
B=a.updateHolder(c[36],B)
D=c[349]
E=c[81]
F=c[224]
I=c[227]
B.F1.prototype={
P(){return new B.aJY(new A.aJ(C.ap,$.ac()))}}
B.aJY.prototype={
ak(){this.aD()
this.w.am(0,new B.ceR(this))},
m(){var x=this.w
x.Z$=$.ac()
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=x.gS().H($.cYV(),y.m),u=x.w,t=C.f.D(u.a.a),s=y.u
return A.cO(w,C.l7,new A.bB(C.aA,w,C.aG,C.z,A.a([A.bF(!1,new A.mg(A.a([A.aI(w,A.aw(d,C.b0,y.x).w.r.b,w),D.bMI,new A.Q(C.eO,new G.FX(u,"Pesquisar conversas",!0,w),w),F.a9M],s),A.hn(v,new B.ceM(x,t.toLowerCase(),d),new B.ceN(x),new B.ceO(),!1,!0,!1),w),w,C.a_,!1),D.bQw],s),w),!0,w)}}
var z=a.updateTypes([])
B.cJd.prototype={
$1(d){return this.aGm(d)},
aGm(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cq(d)
t=$.T().b
t===$&&A.b()
s=J
x=3
return A.d(t.R("conversations").az(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url)").X("partner_id",u).dl(0,"last_message_at",!1),$async$$1)
case 3:v=s.d4(f,new B.cJc(),y.g).by(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1448}
B.cJc.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=null,m="wedding_id",l="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.E(v?n:J.i(w,"partner_name_1"))
t=A.E(v?n:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
v=A.a2(x.h(d,"id"))
r=A.a2(x.h(d,m))
q=A.a2(x.h(d,"partner_id"))
A.a2(x.h(d,m))
p=A.cVm(w,n)
o=A.E(x.h(d,"last_message"))
return new A.hT(v,s,p,r,q,o,x.h(d,l)==null?n:A.d9(A.a2(x.h(d,l))),0)},
$S:1449}
B.ceR.prototype={
$0(){return this.a.q(new B.ceQ())},
$S:0}
B.ceQ.prototype={
$0(){},
$S:0}
B.ceO.prototype={
$0(){return C.ei},
$S:48}
B.ceN.prototype={
$2(d,e){return new A.jd("N\xe3o foi poss\xedvel carregar.",new B.ceE(this.a),null)},
$S:50}
B.ceE.prototype={
$0(){return this.a.gS().ai($.cYV())},
$S:0}
B.ceM.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.b
if(a3.length===0)x=a4
else{a3=J.dc(a4,new B.ceF(a3))
x=A.V(a3,a3.$ti.i("z.E"))}a3=J.a7(a4)
if(a3.gY(a4))return D.aER
w=J.a7(x)
if(w.gY(x))return A.bO(A.h('Sem conversas para "'+C.f.D(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=a3.cz(a4,new B.ceG()).gA(0)
a3=a1.a
if(a3.x){w=w.cz(x,new B.ceH())
u=A.V(w,w.$ti.i("z.E"))}else u=x
t=A.C(y.e,y.p)
for(w=J.aq(u);w.t();){s=w.gE(w)
J.bt(t.bM(0,E.dbo(s.w),new B.ceI()),s)}r=new B.ceP()
w=y.u
a3=A.a([new A.Q(I.D3,A.P(A.a([r.$3("Todas",!a3.x,new B.ceJ(a3)),C.ai,r.$4$count("N\xe3o lidas",a3.x,new B.ceK(a3),v)],w),C.w,C.i,C.m,0,a2,a2),a2)],w)
for(s=[0,1,2],q=s.length,p=a1.c,o=0;o<q;++o){n=s[o]
if(t.h(0,n)!=null){m=A.h(C.FO[n],a2,a2,a2,a2,C.bh,a2,a2,a2)
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
f=E.cHK(J.i(f,j).w)
e=t.h(0,n)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,n)
d.toString
d=J.i(d,j)
a0=t.h(0,n)
a0.toString
k.push(new E.a4n(new A.cw(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,!1,!1,d.x,F.WA,new B.ceL(p,t,n,j),j===J.aR(a0)-1,!1,a2));++j}C.e.n(a3,A.a([new A.Q(D.auG,m,a2),new A.Q(C.bM,A.A(a2,A.B(k,C.w,C.i,C.m,0,C.v),C.b8,a2,a2,new A.M(C.t,a2,a2,new A.ch(l,l,l,l),C.bf,a2,C.y),a2,a2,a2,a2,a2,a2,a2),a2)],w))}}return A.cX(a3,a2,H.nm,a2,a2,!1,C.a1,!1)},
$S:1450}
B.ceF.prototype={
$1(d){return C.f.p(d.b.toLowerCase(),this.a)},
$S:156}
B.ceG.prototype={
$1(d){return d.x>0},
$S:156}
B.ceH.prototype={
$1(d){return d.x>0},
$S:156}
B.ceI.prototype={
$0(){return A.a([],y.B)},
$S:1451}
B.ceP.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.ar:C.t,t=A.Y(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aF(v,v,e?C.t:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.A
w=A.Y(10)
C.e.n(r,A.a([C.bl,A.A(C.L,A.h(A.q(g),v,v,v,v,A.aF(v,v,e?$.ar:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.ld,new A.M(x,v,v,w,v,v,C.y),v,20,v,C.lx,v,v,v)],s))}return A.aU(A.A(v,A.P(r,C.w,C.i,C.K,0,v,v),C.r,v,v,new A.M(u,v,v,t,v,v,C.y),v,38,v,C.dj,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1452}
B.ceJ.prototype={
$0(){var x=this.a
return x.q(new B.ceD(x))},
$S:0}
B.ceD.prototype={
$0(){return this.a.x=!1},
$S:0}
B.ceK.prototype={
$0(){var x=this.a
return x.q(new B.ceC(x))},
$S:0}
B.ceC.prototype={
$0(){return this.a.x=!0},
$S:0}
B.ceL.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ai(w.a).ar("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bx,[B.cJd,B.cJc,B.ceM,B.ceF,B.ceG,B.ceH,B.ceP])
w(B.F1,A.dB)
w(B.aJY,A.dw)
x(A.bT,[B.ceR,B.ceQ,B.ceO,B.ceE,B.ceI,B.ceJ,B.ceD,B.ceK,B.ceC,B.ceL])
w(B.ceN,A.cQ)})()
A.bq(b.typeUniverse,JSON.parse('{"F1":{"H":[],"e":[],"f":[]},"aJY":{"a_":["F1"]}}'))
var y=(function rtii(){var x=A.w
return{m:x("ax<t<hT>>"),g:x("hT"),B:x("r<hT>"),u:x("r<e>"),p:x("t<hT>"),y:x("a4<c,@>"),x:x("dm"),e:x("v"),A:x("a4<c,@>?"),q:x("J?")}})();(function constants(){D.auG=new A.a0(24,18,20,8)
D.aER=new E.a3e(C.Gl,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bMI=new A.lH("Mensagens",null,!1,null,20,!1,null)
D.bN_=new A.Ld(C.a2q,null)
D.bQw=new A.eZ(0,null,0,0,null,null,D.bN_,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUJ","cYV",()=>A.eE(new B.cJd(),null,!1,null,null,y.p))})()};
(a=>{a["D5CsdZAqoG4b1LCmG/5UGo3iWgI="]=a.current})($__dart_deferred_initializers__);