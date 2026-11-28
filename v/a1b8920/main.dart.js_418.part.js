((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cMD:function cMD(){},cMC:function cMC(){},
duv(){return new B.F6(null)},
F6:function F6(d){this.a=d},
aKk:function aKk(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
ch3:function ch3(d){this.a=d},
ch2:function ch2(){},
ch0:function ch0(){},
ch_:function ch_(d){this.a=d},
cgQ:function cgQ(d){this.a=d},
cgZ:function cgZ(d,e,f){this.a=d
this.b=e
this.c=f},
cgR:function cgR(){},
cgS:function cgS(d){this.a=d},
cgT:function cgT(){},
cgU:function cgU(){},
cgV:function cgV(){},
ch1:function ch1(){},
cgW:function cgW(d){this.a=d},
cgP:function cgP(d){this.a=d},
cgX:function cgX(d){this.a=d},
cgO:function cgO(d){this.a=d},
cgY:function cgY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I,K
J=c[1]
A=c[0]
C=c[2]
G=c[153]
H=c[206]
B=a.updateHolder(c[36],B)
D=c[357]
E=c[81]
F=c[227]
I=c[119]
K=c[228]
B.F6.prototype={
R(){return new B.aKk(new A.aE(C.aj,$.aa()))}}
B.aKk.prototype={
ac(){this.ap()
this.w.an(0,new B.ch3(this))},
m(){var x=this.w
x.Y$=$.aa()
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=x.gS().G($.d1G(),y.m),u=x.w,t=C.f.B(u.a.a),s=y.u
return A.cQ(w,C.jn,new A.bB(C.ax,w,C.aD,C.y,A.a([A.bD(!1,new A.n8(A.a([A.aH(w,A.aO(d,C.b5,y.x).w.r.b,w),D.bLT,new A.T(C.eh,new G.G1(u,"Pesquisar conversas",!0,w),w),F.a9m],s),A.hC(v,new B.cgZ(x,t.toLowerCase(),d),new B.ch_(x),new B.ch0(),!1,!0,!1),w),w,C.Z,!1),D.bPK],s),w),!0,w)}}
var z=a.updateTypes([])
B.cMD.prototype={
$1(d){return this.aGK(d)},
aGK(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cu(d)
t=$.P().b
t===$&&A.b()
s=J
x=3
return A.d(t.P("conversations").ai(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, event_date)").V("partner_id",u).cO(0,"last_message_at",!1),$async$$1)
case 3:v=s.da(f,new B.cMC(),y.g).by(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1449}
B.cMC.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="wedding_id",h="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.C(v?j:J.i(w,"partner_name_1"))
t=A.C(v?j:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
r=A.a_(x.h(d,"id"))
q=A.a_(x.h(d,i))
p=A.a_(x.h(d,"partner_id"))
o=A.a_(x.h(d,i))
n=A.cZ3(w,j)
m=A.C(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.dc(A.a_(x.h(d,h)))
l=A.C(v?j:J.i(w,"owner_id"))
k=A.zW(A.C(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"event_date")
return new A.eA(r,s,o,n,q,p,m,x,0,l,I.cJ0(k,A.d4(A.q(v==null?"":v))),C.jV)},
$S:1450}
B.ch3.prototype={
$0(){return this.a.p(new B.ch2())},
$S:0}
B.ch2.prototype={
$0(){},
$S:0}
B.ch0.prototype={
$0(){return C.eD},
$S:51}
B.ch_.prototype={
$2(d,e){return new A.ji("N\xe3o foi poss\xedvel carregar.",new B.cgQ(this.a),null)},
$S:50}
B.cgQ.prototype={
$0(){return this.a.gS().ak($.d1G())},
$S:0}
B.cgZ.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.dff(a5,new B.cgR()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a5<1>")
x=A.U(new A.a5(a3,new B.cgS(a4),w),w.i("x.E"))}if(a3.length===0)return D.aEd
if(x.length===0)return A.bL(A.h('Sem conversas para "'+C.f.B(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a5(a3,new B.cgT(),A.a8(a3).i("a5<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a5<1>")
u=A.U(new A.a5(x,new B.cgU(),w),w.i("x.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.H)(u),++s){r=u[s]
J.br(t.bI(0,E.dfg(r.w),new B.cgV()),r)}q=new B.ch1()
w=y.u
a4=A.a([new A.T(K.CT,A.O(A.a([q.$3("Todas",!a4.x,new B.cgW(a4)),C.ad,q.$4$count("N\xe3o lidas",a4.x,new B.cgX(a4),v)],w),C.v,C.h,C.l,0,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.B(a2,A.h(C.FB[m],a2,a2,a2,a2,C.aJ,a2,a2,a2),C.r,a2,a2,F.Kw,a2,a2,F.Nq,C.iK,a2,a2,a2)
k=A.a([],w)
j=0
for(;;){i=t.h(0,m)
i.toString
if(!(j<J.aQ(i)))break
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
f=E.cL5(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4L(new A.ci(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.Fn,new B.cgY(n,t,m,j),j===J.aQ(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.T(C.bO,A.A(k,C.v,C.h,C.l),a2)],w))}}return A.d6(a4,a2,H.nq,a2,a2,!1,!1)},
$S:1451}
B.cgR.prototype={
$1(d){return d.y},
$S:267}
B.cgS.prototype={
$1(d){return C.f.q(d.b.toLowerCase(),this.a)},
$S:125}
B.cgT.prototype={
$1(d){return d.x>0},
$S:125}
B.cgU.prototype={
$1(d){return d.x>0},
$S:125}
B.cgV.prototype={
$0(){return A.a([],y.B)},
$S:504}
B.ch1.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.au:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aJ(v,v,e?C.t:C.z,v,v,v,v,v,v,v,v,14,v,v,C.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.z
w=A.W(10)
C.e.n(r,A.a([C.bh,A.B(C.K,A.h(A.q(g),v,v,v,v,A.aJ(v,v,e?$.au:C.t,v,v,v,v,v,v,v,v,11,v,v,C.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.le,new A.K(x,v,v,w,v,v,C.x),v,20,v,C.nz,v,v,v)],s))}return A.aX(A.B(v,A.O(r,C.v,C.h,C.J,0,v),C.r,v,v,new A.K(u,v,v,t,v,v,C.x),v,38,v,C.cP,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1452}
B.cgW.prototype={
$0(){var x=this.a
return x.p(new B.cgP(x))},
$S:0}
B.cgP.prototype={
$0(){return this.a.x=!1},
$S:0}
B.cgX.prototype={
$0(){var x=this.a
return x.p(new B.cgO(x))},
$S:0}
B.cgO.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cgY.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ae(w.a).al("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bw,[B.cMD,B.cMC,B.cgZ,B.cgR,B.cgS,B.cgT,B.cgU,B.ch1])
w(B.F6,A.dA)
w(B.aKk,A.dv)
x(A.bO,[B.ch3,B.ch2,B.ch0,B.cgQ,B.cgV,B.cgW,B.cgP,B.cgX,B.cgO,B.cgY])
w(B.ch_,A.cK)})()
A.bt(b.typeUniverse,JSON.parse('{"F6":{"G":[],"e":[],"f":[]},"aKk":{"Y":["F6"]}}'))
var y=(function rtii(){var x=A.w
return{m:x("az<t<eA>>"),g:x("eA"),B:x("r<eA>"),u:x("r<e>"),p:x("t<eA>"),y:x("a4<c,@>"),x:x("dh"),e:x("v"),A:x("a4<c,@>?"),q:x("J?")}})();(function constants(){D.aEd=new E.a3A(C.Ga,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bLT=new A.lO("Mensagens",null,!1,null,20,!1,null)
D.bMa=new A.Lm(C.a20,null)
D.bPK=new A.eF(0,null,0,0,null,null,D.bMa,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZ2","d1G",()=>A.ey(new B.cMD(),null,!1,null,null,y.p))})()};
(a=>{a["NJo3q1K6EU4/xIbFBpXTV/9q6iA="]=a.current})($__dart_deferred_initializers__);