((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cNs:function cNs(){},cNr:function cNr(){},
dvK(){return new B.F5(null)},
F5:function F5(d){this.a=d},
aKn:function aKn(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
chx:function chx(d){this.a=d},
chw:function chw(){},
chu:function chu(){},
cht:function cht(d){this.a=d},
chj:function chj(d){this.a=d},
chs:function chs(d,e,f){this.a=d
this.b=e
this.c=f},
chk:function chk(){},
chl:function chl(d){this.a=d},
chm:function chm(){},
chn:function chn(){},
cho:function cho(){},
chv:function chv(){},
chp:function chp(d){this.a=d},
chi:function chi(d){this.a=d},
chq:function chq(d){this.a=d},
chh:function chh(d){this.a=d},
chr:function chr(d,e,f,g){var _=this
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
B.F5.prototype={
R(){return new B.aKn(new A.aF(C.ak,$.aa()))}}
B.aKn.prototype={
ad(){this.aq()
this.w.an(0,new B.chx(this))},
m(){var x=this.w
x.Z$=$.aa()
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=x.gS().G($.d2E(),y.m),u=x.w,t=C.f.B(u.a.a),s=y.u
return A.cP(w,C.jn,new A.bA(C.aw,w,C.aD,C.y,A.a([A.bB(!1,new A.n5(A.a([A.aK(w,A.aT(d,C.b5,y.x).w.r.b,w),D.bLE,new A.S(C.eg,new G.G2(u,"Pesquisar conversas",!0,w),w),F.a9f],s),A.hE(v,new B.chs(x,t.toLowerCase(),d),new B.cht(x),new B.chu(),!1,!0,!1),w),w,C.Z,!1),D.bPu],s),w),!0,w)}}
var z=a.updateTypes([])
B.cNs.prototype={
$1(d){return this.aG5(d)},
aG5(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Ct(d)
t=$.Q().b
t===$&&A.b()
s=J
x=3
return A.d(t.P("conversations").al(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, wedding_date)").V("partner_id",u).cK(0,"last_message_at",!1),$async$$1)
case 3:v=s.d7(f,new B.cNr(),y.g).bx(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1466}
B.cNr.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="wedding_id",h="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.A(v?j:J.h(w,"partner_name_1"))
t=A.A(v?j:J.h(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
r=A.Y(x.h(d,"id"))
q=A.Y(x.h(d,i))
p=A.Y(x.h(d,"partner_id"))
o=A.Y(x.h(d,i))
n=A.d_3(w,j)
m=A.A(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.dc(A.Y(x.h(d,h)))
l=A.A(v?j:J.h(w,"owner_id"))
k=A.zU(A.A(v?j:J.h(w,"event_type")))
v=v?j:J.h(w,"wedding_date")
return new A.eB(r,s,o,n,q,p,m,x,0,l,I.cJM(k,A.d3(A.p(v==null?"":v))),C.iW)},
$S:1467}
B.chx.prototype={
$0(){return this.a.p(new B.chw())},
$S:0}
B.chw.prototype={
$0(){},
$S:0}
B.chu.prototype={
$0(){return C.f0},
$S:61}
B.cht.prototype={
$2(d,e){return new A.jk("N\xe3o foi poss\xedvel carregar.",new B.chj(this.a),null)},
$S:49}
B.chj.prototype={
$0(){return this.a.gS().ai($.d2E())},
$S:0}
B.chs.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.dgn(a5,new B.chk()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a6<1>")
x=A.U(new A.a6(a3,new B.chl(a4),w),w.i("w.E"))}if(a3.length===0)return D.aE3
if(x.length===0)return A.bO(A.i('Sem conversas para "'+C.f.B(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a6(a3,new B.chm(),A.a8(a3).i("a6<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a6<1>")
u=A.U(new A.a6(x,new B.chn(),w),w.i("w.E"))}else u=x
t=A.D(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.H)(u),++s){r=u[s]
J.ba(t.bI(0,E.dgo(r.w),new B.cho()),r)}q=new B.chv()
w=y.u
a4=A.a([new A.S(K.CO,A.O(A.a([q.$3("Todas",!a4.x,new B.chp(a4)),C.ac,q.$4$count("N\xe3o lidas",a4.x,new B.chq(a4),v)],w),C.u,C.h,C.l,0,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.x(a2,A.i(C.Fv[m],a2,a2,a2,a2,C.aH,a2,a2),C.r,a2,a2,F.Kk,a2,a2,F.Ne,C.i4,a2,a2,a2)
k=A.a([],w)
j=0
for(;;){i=t.h(0,m)
i.toString
if(!(j<J.aN(i)))break
i=t.h(0,m)
i.toString
i=J.h(i,j)
h=t.h(0,m)
h.toString
h=J.h(h,j)
g=t.h(0,m)
g.toString
g=J.h(g,j)
f=t.h(0,m)
f.toString
f=E.cLU(J.h(f,j).w)
e=t.h(0,m)
e.toString
e=J.h(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.h(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4T(new A.ch(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.Fg,new B.chr(n,t,m,j),j===J.aN(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.S(C.bF,A.y(k,C.u,C.h,C.l),a2)],w))}}return A.d6(a4,a2,H.nf,a2,a2,!1,!1)},
$S:1468}
B.chk.prototype={
$1(d){return d.y},
$S:271}
B.chl.prototype={
$1(d){return C.f.t(d.b.toLowerCase(),this.a)},
$S:132}
B.chm.prototype={
$1(d){return d.x>0},
$S:132}
B.chn.prototype={
$1(d){return d.x>0},
$S:132}
B.cho.prototype={
$0(){return A.a([],y.B)},
$S:509}
B.chv.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.au:C.t,t=A.W(19),s=y.u,r=A.a([A.i(d,v,v,v,v,A.aH(v,v,e?C.t:C.z,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.z
w=A.W(10)
C.e.n(r,A.a([C.bf,A.x(C.K,A.i(A.p(g),v,v,v,v,A.aH(v,v,e?$.au:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v),C.r,v,C.lc,new A.J(x,v,v,w,v,v,C.x),v,20,v,C.ls,v,v,v)],s))}return A.aX(A.x(v,A.O(r,C.u,C.h,C.J,0,v),C.r,v,v,new A.J(u,v,v,t,v,v,C.x),v,38,v,C.cI,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1469}
B.chp.prototype={
$0(){var x=this.a
return x.p(new B.chi(x))},
$S:0}
B.chi.prototype={
$0(){return this.a.x=!1},
$S:0}
B.chq.prototype={
$0(){var x=this.a
return x.p(new B.chh(x))},
$S:0}
B.chh.prototype={
$0(){return this.a.x=!0},
$S:0}
B.chr.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.h(t,x)
u=v.h(0,u)
u.toString
x=J.h(u,x)
return A.ae(w.a).aj("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bu,[B.cNs,B.cNr,B.chs,B.chk,B.chl,B.chm,B.chn,B.chv])
w(B.F5,A.dC)
w(B.aKn,A.dw)
x(A.bL,[B.chx,B.chw,B.chu,B.chj,B.cho,B.chp,B.chi,B.chq,B.chh,B.chr])
w(B.cht,A.cL)})()
A.br(b.typeUniverse,JSON.parse('{"F5":{"G":[],"e":[],"f":[]},"aKn":{"a_":["F5"]}}'))
var y=(function rtii(){var x=A.C
return{m:x("ax<t<eB>>"),g:x("eB"),B:x("r<eB>"),u:x("r<e>"),p:x("t<eB>"),y:x("a3<c,@>"),x:x("dv"),e:x("v"),A:x("a3<c,@>?"),q:x("M?")}})();(function constants(){D.aE3=new E.a3I(C.G3,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bLE=new A.lP("Mensagens",null,!1,null,20,!1,null)
D.bLW=new A.Lr(C.a1Q,null)
D.bPu=new A.eM(0,null,0,0,null,null,D.bLW,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_s","d2E",()=>A.ez(new B.cNs(),null,!1,null,null,y.p))})()};
(a=>{a["9zp4j9HGSd4j+X2KO8ZqzH+d6qs="]=a.current})($__dart_deferred_initializers__);