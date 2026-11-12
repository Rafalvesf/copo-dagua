((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
ddc(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bJ_
break A}if("confirmed"===w){x=new A.cn("Em vigor",C.du,$.a9)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.cn("Conclu\xeddo",C.du,$.a9):D.bJd
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bJf
break A}if("expired"===w){x=D.bJ9
break A}x=D.bJ5
break A}return x},
d13(){return new B.IS(null)},
oI:function oI(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.as=o},
cnB:function cnB(){},
cnz:function cnz(){},
cnA:function cnA(d){this.a=d},
cnx:function cnx(){},
cny:function cny(){},
IS:function IS(d){this.a=d},
bb0:function bb0(){},
bb_:function bb_(d){this.a=d},
baW:function baW(d){this.a=d},
baZ:function baZ(d){this.a=d},
baY:function baY(d){this.a=d},
baX:function baX(d){this.a=d},
baU:function baU(){},
baV:function baV(){},
axj:function axj(d,e){this.c=d
this.a=e},
bD5:function bD5(d,e,f){this.a=d
this.b=e
this.c=f},
bD4:function bD4(){},
bD3:function bD3(d,e,f){this.a=d
this.b=e
this.c=f},
bD2:function bD2(d,e){this.a=d
this.b=e},
az9:function az9(d){this.a=d},
bGE:function bGE(d){this.a=d}},D,F
J=c[1]
A=c[0]
C=c[2]
E=c[87]
B=a.updateHolder(c[21],B)
D=c[323]
F=c[139]
B.oI.prototype={}
B.IS.prototype={
bf(d,e){var x=null,w=e.M($.cuA(),y.c)
return A.cL(x,C.bh,A.bp(!0,new A.ir(A.a([A.aU(x,A.at(d,C.ba,y.w).w.r.b,x),D.bCl],y.p),A.ft(w,new B.baZ(e),new B.bb_(e),new B.bb0(),!1,!0,!1),x),x,C.V,!1),!0,x)}}
B.axj.prototype={
u(d){var x=null,w=this.c,v=B.ddc(w),u=w.y,t=u<=0?0:C.k.an(w.Q/u,0,1),s=A.T(22),r=w.c,q=A.ac(A.i(r,x,x,x,C.c2,x,x,x),1),p=A.T(999),o=y.p
p=A.Z(A.a([new A.fy(r,44,w.d,!1,!0,x),C.aj,q,A.E(x,A.i(v.a,x,x,x,A.as(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.t,x,x,new A.L(v.b,x,x,p,x,x,C.y),x,x,x,x,C.ft,x,x,x)],o),C.x,C.m,C.q,0,x,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.N_(r))
return A.b0(A.E(x,A.J(A.a([p,C.be,A.i(C.e.ap(q," \xb7 "),x,x,x,C.bm,x,x,x),C.W,A.es(A.T(3),A.kV(C.bb,$.a9,5,t,x),C.aG),C.aI,A.i("Recebido "+A.by(w.Q,!0)+" de "+A.by(u,!0),x,x,x,C.az,x,x,x)],o),C.I,C.m,C.q,0,C.w),C.t,x,x,new A.L(C.v,x,x,s,C.ap,x,C.y),x,x,x,x,C.bF,x,x,x),new B.bD5(this,d,w),x)},
baK(d,e){A.cb(C.v,new B.bD3(e,new B.bD4(),d),d,!0,!0,C.hw,y.H)}}
B.az9.prototype={
u(d){return A.bE(new A.a_(C.cz,A.J(A.a([D.bPu,C.cS,D.c3d,C.a4,D.c1H,C.bM,E.cK7("Ver pedidos",new B.bGE(d))],y.p),C.x,C.m,C.a0,0,C.w),null),null,null)}}
var z=a.updateTypes(["V(V,oI)","H<t<oI>>(ax)","oI()","e(t<oI>)"])
B.cnB.prototype={
$1(d){return this.aAW(d)},
aAW(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.M(A.cB($.be(),new B.cnz(),y.D,q),q)
if(p==null){v=D.bqR
x=1
break}q=$.W().b
q===$&&A.b()
x=3
return A.d(q.T("bookings").aN(0,"id, booking_number, event_date, total_amount, deposit_amount, status, proposals(title, description, payment_terms), weddings(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").a_("partner_id",p).dF(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bA(u,y.P),s=A.r(t),t=new A.ap(t,t.gv(t),s.i("ap<a5.E>")),s=s.i("a5.E");t.p();){r=t.d
q.push(new B.cnA(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cnz.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.cnA.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k="booking_number",j="event_date",i=this.a,h=J.a3(i),g=y.h,f=g.a(h.h(i,"weddings")),e=g.a(h.h(i,"proposals"))
g=f==null
x=A.P(g?l:J.h(f,"partner_name_1"))
if(x==null)x=""
w=A.P(g?l:J.h(f,"partner_name_2"))
if(w==null)w=""
v=y.g.a(h.h(i,"payments"))
if(v==null)v=C.at
u=J.bA(v,y.P)
A.a1(h.h(i,"id"))
if(h.h(i,k)==null)v=l
else{v=h.h(i,k)
t=y.Y.a(h.h(i,"partner_profiles"))
t=t==null?l:J.h(t,"business_name")
v=F.cjF(v,J.cG(t==null?"":t))}if(x.length===0)t="Cliente"
else t=w.length===0?x:x+" & "+w
s=A.P(g?l:J.h(f,"profile_photo_url"))
if(s==null)s=A.P(g?l:J.h(f,"cover_photo_url"))
r=h.h(i,j)==null?l:A.de(A.a1(h.h(i,j)))
q=A.P(g?l:J.h(f,"venue"))
if((q==null?l:q.length!==0)===!0){f.toString
g=A.a1(J.h(f,"venue"))}else{q=A.P(g?l:J.h(f,"location"))
g=q}q=e==null
p=A.P(q?l:J.h(e,"title"))
if(p==null)p="Servi\xe7o"
o=A.P(q?l:J.h(e,"description"))
n=A.P(q?l:J.h(e,"payment_terms"))
m=A.b8(h.h(i,"total_amount"))
q=m==null?l:m
if(q==null)q=0
m=A.b8(h.h(i,"deposit_amount"))
if(m==null)m=l
if(m==null)m=0
return new B.oI(v,t,s,r,g,p,o,n,q,m,new A.a4(u,new B.cnx(),A.r(u).i("a4<a5.E>")).dT(0,0,new B.cny()),A.a1(h.h(i,"status")))},
$S:z+2}
B.cnx.prototype={
$1(d){return J.o(J.h(d,"status"),"paid")},
$S:39}
B.cny.prototype={
$2(d,e){return d+A.e1(J.h(e,"amount"))},
$S:452}
B.bb0.prototype={
$0(){return C.bl},
$S:27}
B.bb_.prototype={
$2(d,e){return new A.iS("N\xe3o foi poss\xedvel carregar.",new B.baW(this.a),null)},
$S:41}
B.baW.prototype={
$0(){return this.a.av($.cuA())},
$S:0}
B.baZ.prototype={
$1(d){var x,w=null,v=J.a3(d)
if(v.gZ(d))v=D.c9p
else{x=A.a([new A.eJ(new B.baX(d),w),C.ak],y.p)
for(v=v.gW(d);v.p();)x.push(new A.a_(C.eK,new B.axj(v.gF(v),w),w))
v=A.z9(A.cO(x,w,C.Bp,w,w,!1,C.Z,!1),w,new B.baY(this.a))}return v},
$S:z+3}
B.baY.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.av($.cuA())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.baX.prototype={
$1(d){var x=this.a,w=J.cs(x),v=w.dT(x,0,new B.baU()),u=w.dT(x,0,new B.baV()),t=A.by(v,!1),s=w.gv(x)
x=w.gv(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.ll(D.aZo,A.e9(C.bf,A.a([new A.hw("Recebido "+A.by(u,!1),!0,null),new A.hw("Falta "+A.by(C.k.an(v-u,0,1/0),!1),!1,null)],y.p),C.t,C.bt,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:243}
B.baU.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.baV.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bD5.prototype={
$0(){return this.a.baK(this.b,this.c)},
$S:0}
B.bD4.prototype={
$2(d,e){var x=null
return new A.a_(C.jw,A.Z(A.a([A.aU(A.i(d,x,x,x,C.bm,x,x,x),x,110),A.ac(A.i(e,x,x,x,C.e6,x,x,x),1)],y.p),C.I,C.m,C.q,0,x,x),x)},
$S:293}
B.bD3.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.i(u==null?"Contrato":"Contrato "+u,w,w,w,C.cU,C.a6,w,w),C.as,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
x=v.e
if(x!=null)u.push(t.$2("Data",A.N_(x)))
x=v.f
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Local",x))}u.push(t.$2("Valor",A.by(v.y,!0)))
u.push(t.$2("Sinal",A.by(v.z,!0)))
u.push(t.$2("Recebido",A.by(v.Q,!0)))
x=v.w
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Descri\xe7\xe3o",x))}v=v.x
if((v==null?w:v.length!==0)===!0){v.toString
u.push(t.$2("Condi\xe7\xf5es",v))}u.push(C.as)
u.push(A.yK(D.aw9,D.c_p,new B.bD2(d,this.c),w))
return A.bp(!0,new A.a_(D.an9,A.ey(A.J(u,C.R,C.m,C.q,0,C.w),w,w,C.Z),w),w,C.V,!0)},
$S:51}
B.bD2.prototype={
$0(){A.aB(this.a,!1).c8()
A.au(this.b).bX(0,"/partner-messages",null)},
$S:0}
B.bGE.prototype={
$0(){return A.au(this.a).bX(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.oI,A.F)
w(A.bv,[B.cnB,B.cnz,B.cnx,B.baZ,B.baX,B.bD3])
w(A.bI,[B.cnA,B.bb0,B.baW,B.baY,B.bD5,B.bD2,B.bGE])
w(A.cD,[B.cny,B.bb_,B.baU,B.baV,B.bD4])
x(B.IS,A.en)
w(A.N,[B.axj,B.az9])})()
A.bx(b.typeUniverse,JSON.parse('{"IS":{"G":[],"e":[],"f":[]},"axj":{"N":[],"e":[],"f":[]},"az9":{"N":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.v
return{c:x("aF<t<oI>>"),D:x("cC"),o:x("q<oI>"),s:x("q<c>"),p:x("q<e>"),y:x("t<oI>"),P:x("a2<c,@>"),w:x("d8"),g:x("t<@>?"),h:x("a2<c,@>?"),Y:x("a2<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.an9=new A.Y(20,18,20,20)
D.aw9=new A.b_(C.h0,18,null,null,null,null)
D.aZo=x([C.iT,C.cl,C.bo],A.v("q<aC>"))
D.bqR=x([],y.o)
D.bCl=new A.hi("Contratos",null,!0,null,34,20,!0,null)
D.bJ_=new A.cn("Aguarda sinal",C.rK,C.rP)
D.bJ5=new A.cn("Em an\xe1lise",C.ag,C.L)
D.bJ9=new A.cn("Expirado",C.ag,C.L)
D.bJd=new A.cn("Falta o restante",C.rK,C.rP)
D.bJf=new A.cn("Cancelado",C.ag,C.L)
D.bPu=new A.hk(C.iT,-0.016,96,null,null)
D.c_p=new A.I("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.bQN=new A.C(!0,C.L,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c1H=new A.I("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,D.bQN,C.a6,null,null,null,null,null,null,null)
D.c3d=new A.I("Ainda sem contratos",null,C.cE,C.a6,null,null,null,null,null,null,null)
D.c9p=new B.az9(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dtl","cuA",()=>A.eA(new B.cnB(),null,!1,null,null,y.y))})()};
(a=>{a["EhExeVxwWttmdXGVkVLz57Hdbsk="]=a.current})($__dart_deferred_initializers__);