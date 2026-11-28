((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cNk:function cNk(){},cNj:function cNj(){},
dvm(){return new B.F6(null)},
F6:function F6(d){this.a=d},
aKw:function aKw(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
chB:function chB(d){this.a=d},
chA:function chA(){},
chy:function chy(){},
chx:function chx(d){this.a=d},
chn:function chn(d){this.a=d},
chw:function chw(d,e,f){this.a=d
this.b=e
this.c=f},
cho:function cho(){},
chp:function chp(d){this.a=d},
chq:function chq(){},
chr:function chr(){},
chs:function chs(){},
chz:function chz(){},
cht:function cht(d){this.a=d},
chm:function chm(d){this.a=d},
chu:function chu(d){this.a=d},
chl:function chl(d){this.a=d},
chv:function chv(d,e,f,g){var _=this
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
D=c[356]
E=c[81]
F=c[226]
I=c[119]
K=c[227]
B.F6.prototype={
R(){return new B.aKw(new A.aF(C.ak,$.aa()))}}
B.aKw.prototype={
ac(){this.ap()
this.w.an(0,new B.chB(this))},
m(){var x=this.w
x.Y$=$.aa()
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=x.gS().G($.d2t(),y.m),u=x.w,t=C.f.B(u.a.a),s=y.u
return A.cQ(w,C.jo,new A.bC(C.ax,w,C.aD,C.y,A.a([A.bA(!1,new A.n8(A.a([A.aH(w,A.aO(d,C.b6,y.x).w.r.b,w),D.bMb,new A.S(C.eh,new G.G1(u,"Pesquisar conversas",!0,w),w),F.a9t],s),A.hE(v,new B.chw(x,t.toLowerCase(),d),new B.chx(x),new B.chy(),!1,!0,!1),w),w,C.Z,!1),D.bQ2],s),w),!0,w)}}
var z=a.updateTypes([])
B.cNk.prototype={
$1(d){return this.aGV(d)},
aGV(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cv(d)
t=$.P().b
t===$&&A.b()
s=J
x=3
return A.d(t.P("conversations").ai(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, event_date)").U("partner_id",u).cO(0,"last_message_at",!1),$async$$1)
case 3:v=s.dc(f,new B.cNj(),y.g).by(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1456}
B.cNj.prototype={
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
n=A.cZQ(w,j)
m=A.C(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.de(A.a_(x.h(d,h)))
l=A.C(v?j:J.i(w,"owner_id"))
k=A.zX(A.C(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"event_date")
return new A.eD(r,s,o,n,q,p,m,x,0,l,I.cJG(k,A.d4(A.p(v==null?"":v))),C.jX)},
$S:1457}
B.chB.prototype={
$0(){return this.a.p(new B.chA())},
$S:0}
B.chA.prototype={
$0(){},
$S:0}
B.chy.prototype={
$0(){return C.eE},
$S:53}
B.chx.prototype={
$2(d,e){return new A.ji("N\xe3o foi poss\xedvel carregar.",new B.chn(this.a),null)},
$S:50}
B.chn.prototype={
$0(){return this.a.gS().aj($.d2t())},
$S:0}
B.chw.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.dg2(a5,new B.cho()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a6<1>")
x=A.U(new A.a6(a3,new B.chp(a4),w),w.i("w.E"))}if(a3.length===0)return D.aEt
if(x.length===0)return A.bM(A.h('Sem conversas para "'+C.f.B(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a6(a3,new B.chq(),A.a8(a3).i("a6<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a6<1>")
u=A.U(new A.a6(x,new B.chr(),w),w.i("w.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.H)(u),++s){r=u[s]
J.br(t.bI(0,E.dg3(r.w),new B.chs()),r)}q=new B.chz()
w=y.u
a4=A.a([new A.S(K.D0,A.O(A.a([q.$3("Todas",!a4.x,new B.cht(a4)),C.ac,q.$4$count("N\xe3o lidas",a4.x,new B.chu(a4),v)],w),C.v,C.h,C.l,0,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.y(a2,A.h(C.FI[m],a2,a2,a2,a2,C.aI,a2,a2,a2),C.r,a2,a2,F.KC,a2,a2,F.Nv,C.iK,a2,a2,a2)
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
f=E.cLL(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4Q(new A.cj(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.Fu,new B.chv(n,t,m,j),j===J.aQ(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.S(C.bI,A.z(k,C.v,C.h,C.l),a2)],w))}}return A.d5(a4,a2,H.nq,a2,a2,!1,!1)},
$S:1458}
B.cho.prototype={
$1(d){return d.y},
$S:260}
B.chp.prototype={
$1(d){return C.f.q(d.b.toLowerCase(),this.a)},
$S:131}
B.chq.prototype={
$1(d){return d.x>0},
$S:131}
B.chr.prototype={
$1(d){return d.x>0},
$S:131}
B.chs.prototype={
$0(){return A.a([],y.B)},
$S:499}
B.chz.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.au:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aJ(v,v,e?C.t:C.z,v,v,v,v,v,v,v,v,14,v,v,C.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.z
w=A.W(10)
C.e.n(r,A.a([C.bh,A.y(C.K,A.h(A.p(g),v,v,v,v,A.aJ(v,v,e?$.au:C.t,v,v,v,v,v,v,v,v,11,v,v,C.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.lf,new A.I(x,v,v,w,v,v,C.x),v,20,v,C.nA,v,v,v)],s))}return A.aW(A.y(v,A.O(r,C.v,C.h,C.J,0,v),C.r,v,v,new A.I(u,v,v,t,v,v,C.x),v,38,v,C.cH,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1459}
B.cht.prototype={
$0(){var x=this.a
return x.p(new B.chm(x))},
$S:0}
B.chm.prototype={
$0(){return this.a.x=!1},
$S:0}
B.chu.prototype={
$0(){var x=this.a
return x.p(new B.chl(x))},
$S:0}
B.chl.prototype={
$0(){return this.a.x=!0},
$S:0}
B.chv.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ad(w.a).ak("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bx,[B.cNk,B.cNj,B.chw,B.cho,B.chp,B.chq,B.chr,B.chz])
w(B.F6,A.dB)
w(B.aKw,A.dv)
x(A.bQ,[B.chB,B.chA,B.chy,B.chn,B.chs,B.cht,B.chm,B.chu,B.chl,B.chv])
w(B.chx,A.cL)})()
A.bu(b.typeUniverse,JSON.parse('{"F6":{"G":[],"e":[],"f":[]},"aKw":{"Z":["F6"]}}'))
var y=(function rtii(){var x=A.x
return{m:x("az<t<eD>>"),g:x("eD"),B:x("r<eD>"),u:x("r<e>"),p:x("t<eD>"),y:x("a5<c,@>"),x:x("dh"),e:x("v"),A:x("a5<c,@>?"),q:x("K?")}})();(function constants(){D.aEt=new E.a3F(C.Gh,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bMb=new A.lO("Mensagens",null,!1,null,20,!1,null)
D.bMt=new A.Lm(C.a26,null)
D.bQ2=new A.eG(0,null,0,0,null,null,D.bMt,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZX","d2t",()=>A.eA(new B.cNk(),null,!1,null,null,y.p))})()};
(a=>{a["UQEJv39iT088/ScwDBp4zAQCs3s="]=a.current})($__dart_deferred_initializers__);