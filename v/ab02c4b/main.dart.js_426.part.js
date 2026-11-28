((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cN_:function cN_(){},cMZ:function cMZ(){},
dvf(){return new B.F2(null)},
F2:function F2(d){this.a=d},
aKg:function aKg(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
chd:function chd(d){this.a=d},
chc:function chc(){},
cha:function cha(){},
ch9:function ch9(d){this.a=d},
ch_:function ch_(d){this.a=d},
ch8:function ch8(d,e,f){this.a=d
this.b=e
this.c=f},
ch0:function ch0(){},
ch1:function ch1(d){this.a=d},
ch2:function ch2(){},
ch3:function ch3(){},
ch4:function ch4(){},
chb:function chb(){},
ch5:function ch5(d){this.a=d},
cgZ:function cgZ(d){this.a=d},
ch6:function ch6(d){this.a=d},
cgY:function cgY(d){this.a=d},
ch7:function ch7(d,e,f,g){var _=this
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
B.F2.prototype={
R(){return new B.aKg(new A.aF(C.ak,$.aa()))}}
B.aKg.prototype={
ad(){this.aq()
this.w.an(0,new B.chd(this))},
m(){var x=this.w
x.Z$=$.aa()
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=x.gS().G($.d2b(),y.m),u=x.w,t=C.f.B(u.a.a),s=y.u
return A.cP(w,C.jl,new A.bA(C.aw,w,C.aC,C.y,A.a([A.bB(!1,new A.n4(A.a([A.aK(w,A.aT(d,C.b5,y.x).w.r.b,w),D.bLw,new A.S(C.eh,new G.FY(u,"Pesquisar conversas",!0,w),w),F.a9d],s),A.hD(v,new B.ch8(x,t.toLowerCase(),d),new B.ch9(x),new B.cha(),!1,!0,!1),w),w,C.Z,!1),D.bPm],s),w),!0,w)}}
var z=a.updateTypes([])
B.cN_.prototype={
$1(d){return this.aG1(d)},
aG1(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cq(d)
t=$.Q().b
t===$&&A.b()
s=J
x=3
return A.d(t.P("conversations").al(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, event_date)").V("partner_id",u).cK(0,"last_message_at",!1),$async$$1)
case 3:v=s.da(f,new B.cMZ(),y.g).bx(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1463}
B.cMZ.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="wedding_id",h="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.C(v?j:J.i(w,"partner_name_1"))
t=A.C(v?j:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
r=A.Y(x.h(d,"id"))
q=A.Y(x.h(d,i))
p=A.Y(x.h(d,"partner_id"))
o=A.Y(x.h(d,i))
n=A.cZA(w,j)
m=A.C(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.dc(A.Y(x.h(d,h)))
l=A.C(v?j:J.i(w,"owner_id"))
k=A.zR(A.C(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"event_date")
return new A.eB(r,s,o,n,q,p,m,x,0,l,I.cJm(k,A.d2(A.p(v==null?"":v))),C.jW)},
$S:1464}
B.chd.prototype={
$0(){return this.a.p(new B.chc())},
$S:0}
B.chc.prototype={
$0(){},
$S:0}
B.cha.prototype={
$0(){return C.f1},
$S:53}
B.ch9.prototype={
$2(d,e){return new A.jk("N\xe3o foi poss\xedvel carregar.",new B.ch_(this.a),null)},
$S:52}
B.ch_.prototype={
$0(){return this.a.gS().ai($.d2b())},
$S:0}
B.ch8.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.dfS(a5,new B.ch0()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a6<1>")
x=A.U(new A.a6(a3,new B.ch1(a4),w),w.i("w.E"))}if(a3.length===0)return D.aDY
if(x.length===0)return A.bO(A.h('Sem conversas para "'+C.f.B(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a6(a3,new B.ch2(),A.a8(a3).i("a6<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a6<1>")
u=A.U(new A.a6(x,new B.ch3(),w),w.i("w.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.G)(u),++s){r=u[s]
J.bb(t.bI(0,E.dfT(r.w),new B.ch4()),r)}q=new B.chb()
w=y.u
a4=A.a([new A.S(K.CM,A.O(A.a([q.$3("Todas",!a4.x,new B.ch5(a4)),C.ac,q.$4$count("N\xe3o lidas",a4.x,new B.ch6(a4),v)],w),C.v,C.h,C.l,0,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.x(a2,A.h(C.Ft[m],a2,a2,a2,a2,C.aH,a2,a2),C.r,a2,a2,F.Kk,a2,a2,F.Nd,C.i4,a2,a2,a2)
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
f=E.cLr(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4K(new A.ch(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.Fe,new B.ch7(n,t,m,j),j===J.aO(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.S(C.bH,A.y(k,C.v,C.h,C.l),a2)],w))}}return A.d6(a4,a2,H.ng,a2,a2,!1,!1)},
$S:1465}
B.ch0.prototype={
$1(d){return d.y},
$S:233}
B.ch1.prototype={
$1(d){return C.f.t(d.b.toLowerCase(),this.a)},
$S:125}
B.ch2.prototype={
$1(d){return d.x>0},
$S:125}
B.ch3.prototype={
$1(d){return d.x>0},
$S:125}
B.ch4.prototype={
$0(){return A.a([],y.B)},
$S:355}
B.chb.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.au:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aI(v,v,e?C.t:C.z,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.z
w=A.W(10)
C.e.n(r,A.a([C.bj,A.x(C.K,A.h(A.p(g),v,v,v,v,A.aI(v,v,e?$.au:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v),C.r,v,C.ld,new A.J(x,v,v,w,v,v,C.x),v,20,v,C.ls,v,v,v)],s))}return A.aY(A.x(v,A.O(r,C.v,C.h,C.J,0,v),C.r,v,v,new A.J(u,v,v,t,v,v,C.x),v,38,v,C.cH,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1466}
B.ch5.prototype={
$0(){var x=this.a
return x.p(new B.cgZ(x))},
$S:0}
B.cgZ.prototype={
$0(){return this.a.x=!1},
$S:0}
B.ch6.prototype={
$0(){var x=this.a
return x.p(new B.cgY(x))},
$S:0}
B.cgY.prototype={
$0(){return this.a.x=!0},
$S:0}
B.ch7.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ae(w.a).aj("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bu,[B.cN_,B.cMZ,B.ch8,B.ch0,B.ch1,B.ch2,B.ch3,B.chb])
w(B.F2,A.dC)
w(B.aKg,A.dw)
x(A.bL,[B.chd,B.chc,B.cha,B.ch_,B.ch4,B.ch5,B.cgZ,B.ch6,B.cgY,B.ch7])
w(B.ch9,A.cK)})()
A.br(b.typeUniverse,JSON.parse('{"F2":{"H":[],"e":[],"f":[]},"aKg":{"a_":["F2"]}}'))
var y=(function rtii(){var x=A.z
return{m:x("ax<t<eB>>"),g:x("eB"),B:x("r<eB>"),u:x("r<e>"),p:x("t<eB>"),y:x("a3<c,@>"),x:x("du"),e:x("v"),A:x("a3<c,@>?"),q:x("M?")}})();(function constants(){D.aDY=new E.a3z(C.G0,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bLw=new A.lP("Mensagens",null,!1,null,20,!1,null)
D.bLO=new A.Lj(C.a1N,null)
D.bPm=new A.eF(0,null,0,0,null,null,D.bLO,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZR","d2b",()=>A.ez(new B.cN_(),null,!1,null,null,y.p))})()};
(a=>{a["P2FAtxZUiHjFrKg4m/d3VJSEAYY="]=a.current})($__dart_deferred_initializers__);