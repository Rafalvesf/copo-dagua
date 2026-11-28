((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cMQ:function cMQ(){},cMP:function cMP(){},
dvv(){return new B.F7(null)},
F7:function F7(d){this.a=d},
aL3:function aL3(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
chk:function chk(d){this.a=d},
chj:function chj(){},
chh:function chh(){},
chg:function chg(d){this.a=d},
ch6:function ch6(d){this.a=d},
chf:function chf(d,e,f){this.a=d
this.b=e
this.c=f},
ch7:function ch7(){},
ch8:function ch8(d){this.a=d},
ch9:function ch9(){},
cha:function cha(){},
chb:function chb(){},
chi:function chi(){},
chc:function chc(d){this.a=d},
ch5:function ch5(d){this.a=d},
chd:function chd(d){this.a=d},
ch4:function ch4(d){this.a=d},
che:function che(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I,K
J=c[1]
A=c[0]
C=c[2]
G=c[153]
H=c[205]
B=a.updateHolder(c[36],B)
D=c[359]
E=c[80]
F=c[226]
I=c[121]
K=c[227]
B.F7.prototype={
P(){return new B.aL3(new A.aI(C.aq,$.ab()))}}
B.aL3.prototype={
ad(){this.ao()
this.w.am(0,new B.chk(this))},
m(){var x=this.w
x.a_$=$.ab()
x.X$=0
this.a6()},
t(d){var x=this,w=null,v=x.gS().G($.d2c(),y.m),u=x.w,t=C.f.C(u.a.a),s=y.u
return A.cO(w,C.ju,new A.by(C.aw,w,C.aC,C.x,A.a([A.bF(!1,new A.nb(A.a([A.aG(w,A.aT(d,C.b5,y.x).w.r.b,w),D.bLs,new A.S(C.ek,new G.G6(u,"Pesquisar conversas",!0,w),w),F.a9u],s),A.hA(v,new B.chf(x,t.toLowerCase(),d),new B.chg(x),new B.chh(),!1,!0,!1),w),w,C.Y,!1),D.bPm],s),w),!0,w)}}
var z=a.updateTypes([])
B.cMQ.prototype={
$1(d){return this.aGA(d)},
aGA(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cu(d)
t=$.Q().b
t===$&&A.b()
s=J
x=3
return A.d(t.R("conversations").al(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, wedding_date)").V("partner_id",u).cK(0,"last_message_at",!1),$async$$1)
case 3:v=s.dm(f,new B.cMP(),y.g).bx(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1467}
B.cMP.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="wedding_id",h="last_message_at"
y.y.a(d)
x=J.a6(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.y(v?j:J.i(w,"partner_name_1"))
t=A.y(v?j:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
r=A.a0(x.h(d,"id"))
q=A.a0(x.h(d,i))
p=A.a0(x.h(d,"partner_id"))
o=A.a0(x.h(d,i))
n=A.cZF(w,j)
m=A.y(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.d9(A.a0(x.h(d,h)))
l=A.y(v?j:J.i(w,"owner_id"))
k=A.zS(A.y(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"wedding_date")
return new A.eD(r,s,o,n,q,p,m,x,0,l,I.cJ4(k,A.d_(A.p(v==null?"":v))),C.j1)},
$S:1468}
B.chk.prototype={
$0(){return this.a.p(new B.chj())},
$S:0}
B.chj.prototype={
$0(){},
$S:0}
B.chh.prototype={
$0(){return C.f1},
$S:60}
B.chg.prototype={
$2(d,e){return new A.jj("N\xe3o foi poss\xedvel carregar.",new B.ch6(this.a),null)},
$S:52}
B.ch6.prototype={
$0(){return this.a.gS().ak($.d2c())},
$S:0}
B.chf.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.dg8(a5,new B.ch7()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a7<1>")
x=A.U(new A.a7(a3,new B.ch8(a4),w),w.i("z.E"))}if(a3.length===0)return D.aEh
if(x.length===0)return A.bG(A.h('Sem conversas para "'+C.f.C(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a7(a3,new B.ch9(),A.a8(a3).i("a7<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a7<1>")
u=A.U(new A.a7(x,new B.cha(),w),w.i("z.E"))}else u=x
t=A.F(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.I)(u),++s){r=u[s]
J.bn(t.bK(0,E.dg9(r.w),new B.chb()),r)}q=new B.chi()
w=y.u
a4=A.a([new A.S(K.CX,A.N(A.a([q.$3("Todas",!a4.x,new B.chc(a4)),C.ab,q.$4$count("N\xe3o lidas",a4.x,new B.chd(a4),v)],w),C.u,C.h,C.l,0,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.w(a2,A.h(C.FF[m],a2,a2,a2,a2,C.aH,a2,a2),C.r,a2,a2,F.Kz,a2,a2,F.Ns,C.hx,a2,a2,a2)
k=A.a([],w)
j=0
for(;;){i=t.h(0,m)
i.toString
if(!(j<J.aS(i)))break
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
f=E.cLd(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a5a(new A.cg(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.Fo,new B.che(n,t,m,j),j===J.aS(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.S(C.bz,A.x(k,C.u,C.h,C.l),a2)],w))}}return A.d3(a4,a2,H.kz,a2,a2,!1,!1)},
$S:1469}
B.ch7.prototype={
$1(d){return d.y},
$S:268}
B.ch8.prototype={
$1(d){return C.f.u(d.b.toLowerCase(),this.a)},
$S:132}
B.ch9.prototype={
$1(d){return d.x>0},
$S:132}
B.cha.prototype={
$1(d){return d.x>0},
$S:132}
B.chb.prototype={
$0(){return A.a([],y.B)},
$S:508}
B.chi.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.ay:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aH(v,v,e?C.t:C.z,v,v,v,v,v,v,v,v,14,v,v,C.E,v,v,!0,v,v,v,v,v,v,v,v),v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.z
w=A.W(10)
C.e.n(r,A.a([C.bg,A.w(C.J,A.h(A.p(g),v,v,v,v,A.aH(v,v,e?$.ay:C.t,v,v,v,v,v,v,v,v,11,v,v,C.E,v,v,!0,v,v,v,v,v,v,v,v),v,v),C.r,v,C.lp,new A.O(x,v,v,w,v,v,C.y),v,20,v,C.kB,v,v,v)],s))}return A.aO(A.w(v,A.N(r,C.u,C.h,C.I,0,v),C.r,v,v,new A.O(u,v,v,t,v,v,C.y),v,38,v,C.cF,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1470}
B.chc.prototype={
$0(){var x=this.a
return x.p(new B.ch5(x))},
$S:0}
B.ch5.prototype={
$0(){return this.a.x=!1},
$S:0}
B.chd.prototype={
$0(){var x=this.a
return x.p(new B.ch4(x))},
$S:0}
B.ch4.prototype={
$0(){return this.a.x=!0},
$S:0}
B.che.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ae(w.a).ag("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bv,[B.cMQ,B.cMP,B.chf,B.ch7,B.ch8,B.ch9,B.cha,B.chi])
w(B.F7,A.dB)
w(B.aL3,A.dx)
x(A.bO,[B.chk,B.chj,B.chh,B.ch6,B.chb,B.chc,B.ch5,B.chd,B.ch4,B.che])
w(B.chg,A.cM)})()
A.bq(b.typeUniverse,JSON.parse('{"F7":{"G":[],"e":[],"f":[]},"aL3":{"Z":["F7"]}}'))
var y=(function rtii(){var x=A.B
return{m:x("ax<t<eD>>"),g:x("eD"),B:x("r<eD>"),u:x("r<e>"),p:x("t<eD>"),y:x("a4<c,@>"),x:x("dC"),e:x("v"),A:x("a4<c,@>?"),q:x("L?")}})();(function constants(){D.aEh=new E.a3Z(C.Gf,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bLs=new A.lP("Mensagens",null,!1,null,20,!1,null)
D.bLK=new A.Lr(C.a21,null)
D.bPm=new A.eU(0,null,0,0,null,null,D.bLK,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_h","d2c",()=>A.ez(new B.cMQ(),null,!1,null,null,y.p))})()};
(a=>{a["eUXbuZAhg6jrEGIno0i98t2WLLk="]=a.current})($__dart_deferred_initializers__);