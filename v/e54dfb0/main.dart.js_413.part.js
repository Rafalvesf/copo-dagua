((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cNA:function cNA(){},cNz:function cNz(){},
dvi(){return new B.Fc(null)},
Fc:function Fc(d){this.a=d},
aKY:function aKY(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
chE:function chE(d){this.a=d},
chD:function chD(){},
chB:function chB(){},
chA:function chA(d){this.a=d},
chq:function chq(d){this.a=d},
chz:function chz(d,e,f){this.a=d
this.b=e
this.c=f},
chr:function chr(){},
chs:function chs(d){this.a=d},
cht:function cht(){},
chu:function chu(){},
chv:function chv(){},
chC:function chC(){},
chw:function chw(d){this.a=d},
chp:function chp(d){this.a=d},
chx:function chx(d){this.a=d},
cho:function cho(d){this.a=d},
chy:function chy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I,K
J=c[1]
A=c[0]
C=c[2]
G=c[154]
H=c[209]
B=a.updateHolder(c[36],B)
D=c[357]
E=c[82]
F=c[230]
I=c[119]
K=c[231]
B.Fc.prototype={
P(){return new B.aKY(new A.aF(C.al,$.aa()))}}
B.aKY.prototype={
ad(){this.ao()
this.w.an(0,new B.chE(this))},
m(){var x=this.w
x.Y$=$.aa()
x.W$=0
this.a5()},
u(d){var x=this,w=null,v=x.gS().H($.d2w(),y.m),u=x.w,t=C.f.C(u.a.a),s=y.u
return A.cQ(w,C.js,new A.bB(C.az,w,C.aF,C.z,A.a([A.bF(!1,new A.na(A.a([A.aH(w,A.ax(d,C.b7,y.x).w.r.b,w),D.bN4,new A.R(C.ei,new G.G7(u,"Pesquisar conversas",!0,w),w),F.aa1],s),A.hG(v,new B.chz(x,t.toLowerCase(),d),new B.chA(x),new B.chB(),!1,!0,!1),w),w,C.a_,!1),D.bQV],s),w),!0,w)}}
var z=a.updateTypes([])
B.cNA.prototype={
$1(d){return this.aHF(d)},
aHF(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.CC(d)
t=$.Q().b
t===$&&A.b()
s=J
x=3
return A.d(t.R("conversations").ak(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, event_date)").V("partner_id",u).cV(0,"last_message_at",!1),$async$$1)
case 3:v=s.d9(f,new B.cNz(),y.g).bz(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1454}
B.cNz.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="wedding_id",h="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.C(v?j:J.i(w,"partner_name_1"))
t=A.C(v?j:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
r=A.Z(x.h(d,"id"))
q=A.Z(x.h(d,i))
p=A.Z(x.h(d,"partner_id"))
o=A.Z(x.h(d,i))
n=A.cZU(w,j)
m=A.C(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.db(A.Z(x.h(d,h)))
l=A.C(v?j:J.i(w,"owner_id"))
k=A.A6(A.C(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"event_date")
return new A.eG(r,s,o,n,q,p,m,x,0,l,I.cK0(k,A.d5(A.q(v==null?"":v))),C.k2)},
$S:1455}
B.chE.prototype={
$0(){return this.a.p(new B.chD())},
$S:0}
B.chD.prototype={
$0(){},
$S:0}
B.chB.prototype={
$0(){return C.eD},
$S:50}
B.chA.prototype={
$2(d,e){return new A.jh("N\xe3o foi poss\xedvel carregar.",new B.chq(this.a),null)},
$S:51}
B.chq.prototype={
$0(){return this.a.gS().al($.d2w())},
$S:0}
B.chz.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.dg7(a5,new B.chr()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a6<1>")
x=A.U(new A.a6(a3,new B.chs(a4),w),w.i("B.E"))}if(a3.length===0)return D.aFb
if(x.length===0)return A.bK(A.h('Sem conversas para "'+C.f.C(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a6(a3,new B.cht(),A.a8(a3).i("a6<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a6<1>")
u=A.U(new A.a6(x,new B.chu(),w),w.i("B.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.H)(u),++s){r=u[s]
J.bv(t.bJ(0,E.dg8(r.w),new B.chv()),r)}q=new B.chC()
w=y.u
a4=A.a([new A.R(K.Df,A.O(A.a([q.$3("Todas",!a4.x,new B.chw(a4)),C.ag,q.$4$count("N\xe3o lidas",a4.x,new B.chx(a4),v)],w),C.v,C.h,C.l,0,a2,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.z(a2,A.h(C.FW[m],a2,a2,a2,a2,C.aO,a2,a2,a2),C.r,a2,a2,F.L0,a2,a2,F.NX,C.iO,a2,a2,a2)
k=A.a([],w)
j=0
for(;;){i=t.h(0,m)
i.toString
if(!(j<J.aR(i)))break
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
f=E.cM4(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a54(new A.cq(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.FI,new B.chy(n,t,m,j),j===J.aR(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.R(C.bQ,A.x(k,C.v,C.h,C.l,0,C.u),a2)],w))}}return A.cZ(a4,a2,H.nF,a2,a2,!1,C.a2,!1)},
$S:1456}
B.chr.prototype={
$1(d){return d.y},
$S:268}
B.chs.prototype={
$1(d){return C.f.q(d.b.toLowerCase(),this.a)},
$S:140}
B.cht.prototype={
$1(d){return d.x>0},
$S:140}
B.chu.prototype={
$1(d){return d.x>0},
$S:140}
B.chv.prototype={
$0(){return A.a([],y.B)},
$S:507}
B.chC.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.au:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aJ(v,v,e?C.t:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.A
w=A.W(10)
C.e.n(r,A.a([C.bk,A.z(C.L,A.h(A.q(g),v,v,v,v,A.aJ(v,v,e?$.au:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.lv,new A.I(x,v,v,w,v,v,C.y),v,20,v,C.lL,v,v,v)],s))}return A.aY(A.z(v,A.O(r,C.v,C.h,C.K,0,v,v),C.r,v,v,new A.I(u,v,v,t,v,v,C.y),v,38,v,C.cL,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1457}
B.chw.prototype={
$0(){var x=this.a
return x.p(new B.chp(x))},
$S:0}
B.chp.prototype={
$0(){return this.a.x=!1},
$S:0}
B.chx.prototype={
$0(){var x=this.a
return x.p(new B.cho(x))},
$S:0}
B.cho.prototype={
$0(){return this.a.x=!0},
$S:0}
B.chy.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ai(w.a).aw("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bw,[B.cNA,B.cNz,B.chz,B.chr,B.chs,B.cht,B.chu,B.chC])
w(B.Fc,A.dA)
w(B.aKY,A.du)
x(A.bQ,[B.chE,B.chD,B.chB,B.chq,B.chv,B.chw,B.chp,B.chx,B.cho,B.chy])
w(B.chA,A.cL)})()
A.bs(b.typeUniverse,JSON.parse('{"Fc":{"G":[],"e":[],"f":[]},"aKY":{"Y":["Fc"]}}'))
var y=(function rtii(){var x=A.w
return{m:x("az<t<eG>>"),g:x("eG"),B:x("r<eG>"),u:x("r<e>"),p:x("t<eG>"),y:x("a5<c,@>"),x:x("di"),e:x("v"),A:x("a5<c,@>?"),q:x("L?")}})();(function constants(){D.aFb=new E.a3W(C.Gv,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bN4=new A.lM("Mensagens",null,!1,null,20,!1,null)
D.bNm=new A.Lv(C.a2G,null)
D.bQV=new A.eM(0,null,0,0,null,null,D.bNm,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZK","d2w",()=>A.eI(new B.cNA(),null,!1,null,null,y.p))})()};
(a=>{a["S9mlS6zEQM5ya9zQKPjuCRvVcyc="]=a.current})($__dart_deferred_initializers__);