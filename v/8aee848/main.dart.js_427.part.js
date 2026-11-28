((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cNm:function cNm(){},cNl:function cNl(){},
dvE(){return new B.F5(null)},
F5:function F5(d){this.a=d},
aKr:function aKr(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
chy:function chy(d){this.a=d},
chx:function chx(){},
chv:function chv(){},
chu:function chu(d){this.a=d},
chk:function chk(d){this.a=d},
cht:function cht(d,e,f){this.a=d
this.b=e
this.c=f},
chl:function chl(){},
chm:function chm(d){this.a=d},
chn:function chn(){},
cho:function cho(){},
chp:function chp(){},
chw:function chw(){},
chq:function chq(d){this.a=d},
chj:function chj(d){this.a=d},
chr:function chr(d){this.a=d},
chi:function chi(d){this.a=d},
chs:function chs(d,e,f,g){var _=this
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
R(){return new B.aKr(new A.aF(C.ak,$.aa()))}}
B.aKr.prototype={
ad(){this.aq()
this.w.an(0,new B.chy(this))},
m(){var x=this.w
x.Z$=$.aa()
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=x.gS().G($.d2z(),y.m),u=x.w,t=C.f.B(u.a.a),s=y.u
return A.cP(w,C.jl,new A.bA(C.aw,w,C.aD,C.y,A.a([A.bB(!1,new A.n5(A.a([A.aK(w,A.aT(d,C.b5,y.x).w.r.b,w),D.bLC,new A.S(C.eh,new G.G2(u,"Pesquisar conversas",!0,w),w),F.a9h],s),A.hE(v,new B.cht(x,t.toLowerCase(),d),new B.chu(x),new B.chv(),!1,!0,!1),w),w,C.Z,!1),D.bPs],s),w),!0,w)}}
var z=a.updateTypes([])
B.cNm.prototype={
$1(d){return this.aG4(d)},
aG4(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Ct(d)
t=$.P().b
t===$&&A.b()
s=J
x=3
return A.d(t.P("conversations").al(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, event_date)").V("partner_id",u).cK(0,"last_message_at",!1),$async$$1)
case 3:v=s.d7(f,new B.cNl(),y.g).bx(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1467}
B.cNl.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="wedding_id",h="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.B(v?j:J.h(w,"partner_name_1"))
t=A.B(v?j:J.h(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
r=A.Y(x.h(d,"id"))
q=A.Y(x.h(d,i))
p=A.Y(x.h(d,"partner_id"))
o=A.Y(x.h(d,i))
n=A.cZY(w,j)
m=A.B(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.dc(A.Y(x.h(d,h)))
l=A.B(v?j:J.h(w,"owner_id"))
k=A.zT(A.B(v?j:J.h(w,"event_type")))
v=v?j:J.h(w,"event_date")
return new A.eB(r,s,o,n,q,p,m,x,0,l,I.cJI(k,A.d3(A.p(v==null?"":v))),C.jX)},
$S:1468}
B.chy.prototype={
$0(){return this.a.p(new B.chx())},
$S:0}
B.chx.prototype={
$0(){},
$S:0}
B.chv.prototype={
$0(){return C.f1},
$S:57}
B.chu.prototype={
$2(d,e){return new A.jk("N\xe3o foi poss\xedvel carregar.",new B.chk(this.a),null)},
$S:51}
B.chk.prototype={
$0(){return this.a.gS().ai($.d2z())},
$S:0}
B.cht.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.dgf(a5,new B.chl()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a6<1>")
x=A.U(new A.a6(a3,new B.chm(a4),w),w.i("w.E"))}if(a3.length===0)return D.aE1
if(x.length===0)return A.bO(A.i('Sem conversas para "'+C.f.B(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a6(a3,new B.chn(),A.a8(a3).i("a6<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a6<1>")
u=A.U(new A.a6(x,new B.cho(),w),w.i("w.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.H)(u),++s){r=u[s]
J.ba(t.bI(0,E.dgg(r.w),new B.chp()),r)}q=new B.chw()
w=y.u
a4=A.a([new A.S(K.CO,A.O(A.a([q.$3("Todas",!a4.x,new B.chq(a4)),C.ac,q.$4$count("N\xe3o lidas",a4.x,new B.chr(a4),v)],w),C.u,C.h,C.l,0,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.x(a2,A.i(C.Fv[m],a2,a2,a2,a2,C.aH,a2,a2),C.r,a2,a2,F.Kl,a2,a2,F.Ne,C.i4,a2,a2,a2)
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
f=E.cLO(J.h(f,j).w)
e=t.h(0,m)
e.toString
e=J.h(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.h(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4U(new A.ch(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.Fg,new B.chs(n,t,m,j),j===J.aN(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.S(C.bF,A.y(k,C.u,C.h,C.l),a2)],w))}}return A.d6(a4,a2,H.ng,a2,a2,!1,!1)},
$S:1469}
B.chl.prototype={
$1(d){return d.y},
$S:271}
B.chm.prototype={
$1(d){return C.f.t(d.b.toLowerCase(),this.a)},
$S:141}
B.chn.prototype={
$1(d){return d.x>0},
$S:141}
B.cho.prototype={
$1(d){return d.x>0},
$S:141}
B.chp.prototype={
$0(){return A.a([],y.B)},
$S:502}
B.chw.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.au:C.t,t=A.W(19),s=y.u,r=A.a([A.i(d,v,v,v,v,A.aH(v,v,e?C.t:C.z,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.z
w=A.W(10)
C.e.n(r,A.a([C.be,A.x(C.K,A.i(A.p(g),v,v,v,v,A.aH(v,v,e?$.au:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v),C.r,v,C.ld,new A.J(x,v,v,w,v,v,C.x),v,20,v,C.lt,v,v,v)],s))}return A.aX(A.x(v,A.O(r,C.u,C.h,C.J,0,v),C.r,v,v,new A.J(u,v,v,t,v,v,C.x),v,38,v,C.cH,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1470}
B.chq.prototype={
$0(){var x=this.a
return x.p(new B.chj(x))},
$S:0}
B.chj.prototype={
$0(){return this.a.x=!1},
$S:0}
B.chr.prototype={
$0(){var x=this.a
return x.p(new B.chi(x))},
$S:0}
B.chi.prototype={
$0(){return this.a.x=!0},
$S:0}
B.chs.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.h(t,x)
u=v.h(0,u)
u.toString
x=J.h(u,x)
return A.ae(w.a).aj("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bu,[B.cNm,B.cNl,B.cht,B.chl,B.chm,B.chn,B.cho,B.chw])
w(B.F5,A.dC)
w(B.aKr,A.dw)
x(A.bL,[B.chy,B.chx,B.chv,B.chk,B.chp,B.chq,B.chj,B.chr,B.chi,B.chs])
w(B.chu,A.cK)})()
A.br(b.typeUniverse,JSON.parse('{"F5":{"G":[],"e":[],"f":[]},"aKr":{"a_":["F5"]}}'))
var y=(function rtii(){var x=A.z
return{m:x("ax<t<eB>>"),g:x("eB"),B:x("r<eB>"),u:x("r<e>"),p:x("t<eB>"),y:x("a3<c,@>"),x:x("du"),e:x("v"),A:x("a3<c,@>?"),q:x("M?")}})();(function constants(){D.aE1=new E.a3J(C.G2,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bLC=new A.lP("Mensagens",null,!1,null,20,!1,null)
D.bLU=new A.Lq(C.a1S,null)
D.bPs=new A.eF(0,null,0,0,null,null,D.bLU,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_l","d2z",()=>A.ez(new B.cNm(),null,!1,null,null,y.p))})()};
(a=>{a["1TZx+as126GcQQ1FsR5K2rzJ6XQ="]=a.current})($__dart_deferred_initializers__);