((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cN1:function cN1(){},cN0:function cN0(){},
dvm(){return new B.F9(null)},
F9:function F9(d){this.a=d},
aKw:function aKw(d){var _=this
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
G=c[155]
H=c[205]
B=a.updateHolder(c[36],B)
D=c[354]
E=c[81]
F=c[225]
I=c[120]
K=c[226]
B.F9.prototype={
P(){return new B.aKw(new A.aF(C.ak,$.aa()))}}
B.aKw.prototype={
ac(){this.ao()
this.w.al(0,new B.ch3(this))},
m(){var x=this.w
x.Z$=$.aa()
x.V$=0
this.a6()},
u(d){var x=this,w=null,v=x.gR().G($.d2h(),y.m),u=x.w,t=C.f.B(u.a.a),s=y.u
return A.cP(w,C.jn,new A.bA(C.aw,w,C.aD,C.y,A.a([A.bB(!1,new A.n9(A.a([A.aK(w,A.aT(d,C.b5,y.x).w.r.b,w),D.bLM,new A.S(C.eh,new G.G6(u,"Pesquisar conversas",!0,w),w),F.a9h],s),A.hE(v,new B.cgZ(x,t.toLowerCase(),d),new B.ch_(x),new B.ch0(),!1,!0,!1),w),w,C.Z,!1),D.bPC],s),w),!0,w)}}
var z=a.updateTypes([])
B.cN1.prototype={
$1(d){return this.aG1(d)},
aG1(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cu(d)
t=$.Q().b
t===$&&A.b()
s=J
x=3
return A.d(t.S("conversations").an(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, wedding_date)").X("partner_id",u).cJ(0,"last_message_at",!1),$async$$1)
case 3:v=s.dl(f,new B.cN0(),y.g).bx(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1461}
B.cN0.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="wedding_id",h="last_message_at"
y.y.a(d)
x=J.a6(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.B(v?j:J.i(w,"partner_name_1"))
t=A.B(v?j:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
r=A.a_(x.h(d,"id"))
q=A.a_(x.h(d,i))
p=A.a_(x.h(d,"partner_id"))
o=A.a_(x.h(d,i))
n=A.cZI(w,j)
m=A.B(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.da(A.a_(x.h(d,h)))
l=A.B(v?j:J.i(w,"owner_id"))
k=A.zV(A.B(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"wedding_date")
return new A.ez(r,s,o,n,q,p,m,x,0,l,I.cJk(k,A.d3(A.p(v==null?"":v))),C.iX)},
$S:1462}
B.ch3.prototype={
$0(){return this.a.n(new B.ch2())},
$S:0}
B.ch2.prototype={
$0(){},
$S:0}
B.ch0.prototype={
$0(){return C.f1},
$S:64}
B.ch_.prototype={
$2(d,e){return new A.jl("N\xe3o foi poss\xedvel carregar.",new B.cgQ(this.a),null)},
$S:51}
B.cgQ.prototype={
$0(){return this.a.gR().ai($.d2h())},
$S:0}
B.cgZ.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.dg2(a5,new B.cgR()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a7<1>")
x=A.U(new A.a7(a3,new B.cgS(a4),w),w.i("y.E"))}if(a3.length===0)return D.aE9
if(x.length===0)return A.bM(A.h('Sem conversas para "'+C.f.B(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a7(a3,new B.cgT(),A.a8(a3).i("a7<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a7<1>")
u=A.U(new A.a7(x,new B.cgU(),w),w.i("y.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.H)(u),++s){r=u[s]
J.bn(t.bJ(0,E.dg3(r.w),new B.cgV()),r)}q=new B.ch1()
w=y.u
a4=A.a([new A.S(K.CR,A.O(A.a([q.$3("Todas",!a4.x,new B.cgW(a4)),C.ac,q.$4$count("N\xe3o lidas",a4.x,new B.cgX(a4),v)],w),C.u,C.h,C.l,0,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.w(a2,A.h(C.Fy[m],a2,a2,a2,a2,C.aH,a2,a2),C.r,a2,a2,F.Km,a2,a2,F.Ng,C.i5,a2,a2,a2)
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
f=E.cLt(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4V(new A.ch(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.Fj,new B.cgY(n,t,m,j),j===J.aO(a0)-1,!1,!1,a2));++j}C.e.p(a4,A.a([l,new A.S(C.bF,A.x(k,C.u,C.h,C.l),a2)],w))}}return A.d6(a4,a2,H.ng,a2,a2,!1,!1)},
$S:1463}
B.cgR.prototype={
$1(d){return d.y},
$S:233}
B.cgS.prototype={
$1(d){return C.f.t(d.b.toLowerCase(),this.a)},
$S:129}
B.cgT.prototype={
$1(d){return d.x>0},
$S:129}
B.cgU.prototype={
$1(d){return d.x>0},
$S:129}
B.cgV.prototype={
$0(){return A.a([],y.B)},
$S:308}
B.ch1.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.au:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aH(v,v,e?C.t:C.z,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.z
w=A.W(10)
C.e.p(r,A.a([C.bg,A.w(C.K,A.h(A.p(g),v,v,v,v,A.aH(v,v,e?$.au:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v),C.r,v,C.le,new A.J(x,v,v,w,v,v,C.x),v,20,v,C.lt,v,v,v)],s))}return A.aV(A.w(v,A.O(r,C.u,C.h,C.J,0,v),C.r,v,v,new A.J(u,v,v,t,v,v,C.x),v,38,v,C.cJ,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1464}
B.cgW.prototype={
$0(){var x=this.a
return x.n(new B.cgP(x))},
$S:0}
B.cgP.prototype={
$0(){return this.a.x=!1},
$S:0}
B.cgX.prototype={
$0(){var x=this.a
return x.n(new B.cgO(x))},
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
return A.ae(w.a).ag("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bu,[B.cN1,B.cN0,B.cgZ,B.cgR,B.cgS,B.cgT,B.cgU,B.ch1])
w(B.F9,A.dC)
w(B.aKw,A.dx)
x(A.bL,[B.ch3,B.ch2,B.ch0,B.cgQ,B.cgV,B.cgW,B.cgP,B.cgX,B.cgO,B.cgY])
w(B.ch_,A.cL)})()
A.br(b.typeUniverse,JSON.parse('{"F9":{"G":[],"e":[],"f":[]},"aKw":{"Z":["F9"]}}'))
var y=(function rtii(){var x=A.A
return{m:x("ax<t<ez>>"),g:x("ez"),B:x("r<ez>"),u:x("r<e>"),p:x("t<ez>"),y:x("a3<c,@>"),x:x("dw"),e:x("v"),A:x("a3<c,@>?"),q:x("M?")}})();(function constants(){D.aE9=new E.a3K(C.G6,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bLM=new A.lQ("Mensagens",null,!1,null,20,!1,null)
D.bM3=new A.Lt(C.a1S,null)
D.bPC=new A.eL(0,null,0,0,null,null,D.bM3,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_7","d2h",()=>A.ey(new B.cN1(),null,!1,null,null,y.p))})()};
(a=>{a["Y/cL1OCQa29QgW7W0X4pzlh2cxc="]=a.current})($__dart_deferred_initializers__);