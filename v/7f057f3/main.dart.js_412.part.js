((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cNf:function cNf(){},cNe:function cNe(){},
duZ(){return new B.Fc(null)},
Fc:function Fc(d){this.a=d},
aKV:function aKV(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
chs:function chs(d){this.a=d},
chr:function chr(){},
chp:function chp(){},
cho:function cho(d){this.a=d},
che:function che(d){this.a=d},
chn:function chn(d,e,f){this.a=d
this.b=e
this.c=f},
chf:function chf(){},
chg:function chg(d){this.a=d},
chh:function chh(){},
chi:function chi(){},
chj:function chj(){},
chq:function chq(){},
chk:function chk(d){this.a=d},
chd:function chd(d){this.a=d},
chl:function chl(d){this.a=d},
chc:function chc(d){this.a=d},
chm:function chm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I,K
J=c[1]
A=c[0]
C=c[2]
G=c[153]
H=c[208]
B=a.updateHolder(c[36],B)
D=c[356]
E=c[82]
F=c[229]
I=c[118]
K=c[230]
B.Fc.prototype={
R(){return new B.aKV(new A.aF(C.al,$.aa()))}}
B.aKV.prototype={
ae(){this.ao()
this.w.an(0,new B.chs(this))},
m(){var x=this.w
x.Y$=$.aa()
x.W$=0
this.a5()},
u(d){var x=this,w=null,v=x.gS().H($.d2c(),y.m),u=x.w,t=C.f.C(u.a.a),s=y.u
return A.cQ(w,C.js,new A.bB(C.ay,w,C.aE,C.z,A.a([A.bF(!1,new A.n7(A.a([A.aH(w,A.ax(d,C.b7,y.x).w.r.b,w),D.bN0,new A.R(C.ei,new G.G7(u,"Pesquisar conversas",!0,w),w),F.aa0],s),A.hG(v,new B.chn(x,t.toLowerCase(),d),new B.cho(x),new B.chp(),!1,!0,!1),w),w,C.a_,!1),D.bQR],s),w),!0,w)}}
var z=a.updateTypes([])
B.cNf.prototype={
$1(d){return this.aHC(d)},
aHC(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.CC(d)
t=$.Q().b
t===$&&A.b()
s=J
x=3
return A.d(t.P("conversations").ak(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, event_date)").V("partner_id",u).cV(0,"last_message_at",!1),$async$$1)
case 3:v=s.d9(f,new B.cNe(),y.g).by(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1454}
B.cNe.prototype={
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
n=A.cZA(w,j)
m=A.C(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.db(A.Z(x.h(d,h)))
l=A.C(v?j:J.i(w,"owner_id"))
k=A.A6(A.C(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"event_date")
return new A.eF(r,s,o,n,q,p,m,x,0,l,I.cJI(k,A.d5(A.q(v==null?"":v))),C.k2)},
$S:1455}
B.chs.prototype={
$0(){return this.a.p(new B.chr())},
$S:0}
B.chr.prototype={
$0(){},
$S:0}
B.chp.prototype={
$0(){return C.eD},
$S:48}
B.cho.prototype={
$2(d,e){return new A.jh("N\xe3o foi poss\xedvel carregar.",new B.che(this.a),null)},
$S:49}
B.che.prototype={
$0(){return this.a.gS().al($.d2c())},
$S:0}
B.chn.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.dfO(a5,new B.chf()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a6<1>")
x=A.U(new A.a6(a3,new B.chg(a4),w),w.i("B.E"))}if(a3.length===0)return D.aF9
if(x.length===0)return A.bK(A.h('Sem conversas para "'+C.f.C(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a6(a3,new B.chh(),A.a8(a3).i("a6<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a6<1>")
u=A.U(new A.a6(x,new B.chi(),w),w.i("B.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.H)(u),++s){r=u[s]
J.bv(t.bJ(0,E.dfP(r.w),new B.chj()),r)}q=new B.chq()
w=y.u
a4=A.a([new A.R(K.Df,A.O(A.a([q.$3("Todas",!a4.x,new B.chk(a4)),C.ag,q.$4$count("N\xe3o lidas",a4.x,new B.chl(a4),v)],w),C.w,C.h,C.l,0,a2,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.z(a2,A.h(C.FW[m],a2,a2,a2,a2,C.aP,a2,a2,a2),C.r,a2,a2,F.L0,a2,a2,F.NX,C.iN,a2,a2,a2)
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
f=E.cLM(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a5_(new A.cq(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.FI,new B.chm(n,t,m,j),j===J.aR(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.R(C.bQ,A.y(k,C.w,C.h,C.l,0,C.u),a2)],w))}}return A.cZ(a4,a2,H.nE,a2,a2,!1,C.a2,!1)},
$S:1456}
B.chf.prototype={
$1(d){return d.y},
$S:258}
B.chg.prototype={
$1(d){return C.f.q(d.b.toLowerCase(),this.a)},
$S:149}
B.chh.prototype={
$1(d){return d.x>0},
$S:149}
B.chi.prototype={
$1(d){return d.x>0},
$S:149}
B.chj.prototype={
$0(){return A.a([],y.B)},
$S:500}
B.chq.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.au:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aJ(v,v,e?C.t:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.A
w=A.W(10)
C.e.n(r,A.a([C.bn,A.z(C.L,A.h(A.q(g),v,v,v,v,A.aJ(v,v,e?$.au:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.lv,new A.I(x,v,v,w,v,v,C.y),v,20,v,C.lK,v,v,v)],s))}return A.aX(A.z(v,A.O(r,C.w,C.h,C.K,0,v,v),C.r,v,v,new A.I(u,v,v,t,v,v,C.y),v,38,v,C.cJ,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1457}
B.chk.prototype={
$0(){var x=this.a
return x.p(new B.chd(x))},
$S:0}
B.chd.prototype={
$0(){return this.a.x=!1},
$S:0}
B.chl.prototype={
$0(){var x=this.a
return x.p(new B.chc(x))},
$S:0}
B.chc.prototype={
$0(){return this.a.x=!0},
$S:0}
B.chm.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ai(w.a).aw("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.by,[B.cNf,B.cNe,B.chn,B.chf,B.chg,B.chh,B.chi,B.chq])
w(B.Fc,A.dA)
w(B.aKV,A.du)
x(A.bQ,[B.chs,B.chr,B.chp,B.che,B.chj,B.chk,B.chd,B.chl,B.chc,B.chm])
w(B.cho,A.cL)})()
A.bs(b.typeUniverse,JSON.parse('{"Fc":{"G":[],"e":[],"f":[]},"aKV":{"Y":["Fc"]}}'))
var y=(function rtii(){var x=A.w
return{m:x("ay<t<eF>>"),g:x("eF"),B:x("r<eF>"),u:x("r<e>"),p:x("t<eF>"),y:x("a5<c,@>"),x:x("di"),e:x("v"),A:x("a5<c,@>?"),q:x("L?")}})();(function constants(){D.aF9=new E.a3R(C.Gv,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bN0=new A.lL("Mensagens",null,!1,null,20,!1,null)
D.bNi=new A.Lv(C.a2F,null)
D.bQR=new A.eM(0,null,0,0,null,null,D.bNi,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZo","d2c",()=>A.eH(new B.cNf(),null,!1,null,null,y.p))})()};
(a=>{a["HMSQ/JGeMa4cjDi3n0cCi4Svo/s="]=a.current})($__dart_deferred_initializers__);