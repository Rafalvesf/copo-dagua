((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dcd(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bIr
break A}if("confirmed"===w){x=new A.ct("Em vigor",C.cX,$.a5)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.ct("Conclu\xeddo",C.cX,$.a5):D.bIH
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bIJ
break A}if("expired"===w){x=D.bID
break A}x=D.bIz
break A}return x},
d03(){return new B.II(null)},
oL:function oL(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cmR:function cmR(){},
cmP:function cmP(){},
cmQ:function cmQ(d){this.a=d},
cmN:function cmN(){},
cmO:function cmO(){},
II:function II(d){this.a=d},
baE:function baE(){},
baD:function baD(d){this.a=d},
baz:function baz(d){this.a=d},
baC:function baC(d){this.a=d},
baB:function baB(d){this.a=d},
baA:function baA(d){this.a=d},
bax:function bax(){},
bay:function bay(){},
ax1:function ax1(d,e){this.c=d
this.a=e},
bCR:function bCR(d,e,f){this.a=d
this.b=e
this.c=f},
bCQ:function bCQ(){},
bCP:function bCP(d,e,f){this.a=d
this.b=e
this.c=f},
bCO:function bCO(d,e){this.a=d
this.b=e},
ayT:function ayT(d){this.a=d},
bGs:function bGs(d){this.a=d}},D,F
J=c[1]
A=c[0]
C=c[2]
E=c[87]
B=a.updateHolder(c[21],B)
D=c[336]
F=c[137]
B.oL.prototype={}
B.II.prototype={
bf(d,e){var x=null,w=e.M($.ctH(),y.c)
return A.cF(x,C.bd,A.bn(!0,new A.is(A.a([A.aT(x,A.at(d,C.bb,y.w).w.r.b,x),D.bC1],y.p),A.fj(w,new B.baC(e),new B.baD(e),new B.baE(),!1,!0,!1),x),x,C.V,!1),!0,x)}}
B.ax1.prototype={
u(d){var x=null,w=this.c,v=B.dcd(w),u=w.y,t=u<=0?0:C.k.ar(w.Q/u,0,1),s=A.T(22),r=w.c,q=A.ac(A.i(r,x,x,x,C.co,x,x,x),1),p=A.T(999),o=y.p
p=A.W(A.a([new A.fw(r,44,w.d,!1,!0,x),C.ar,q,A.E(x,A.i(v.a,x,x,x,A.as(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.t,x,x,new A.K(v.b,x,x,p,x,x,C.y),x,x,x,x,C.ft,x,x,x)],o),C.x,C.m,C.q,0,x,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.VZ(r))
return A.b_(A.E(x,A.I(A.a([p,C.bc,A.i(C.e.aq(q," \xb7 "),x,x,x,C.bh,x,x,x),C.Z,A.eu(A.T(3),A.kV(C.aZ,$.a5,5,t,x),C.aH),C.aF,A.i("Recebido "+A.by(w.Q,!0)+" de "+A.by(u,!0),x,x,x,C.ay,x,x,x)],o),C.I,C.m,C.q,0,C.w),C.t,x,x,new A.K(C.v,x,x,s,C.ap,x,C.y),x,x,x,x,C.bK,x,x,x),new B.bCR(this,d,w),x)},
bak(d,e){A.cd(C.v,new B.bCP(e,new B.bCQ(),d),d,!0,!0,C.hA,y.H)}}
B.ayT.prototype={
u(d){return A.bF(new A.a_(C.cy,A.I(A.a([D.bOQ,C.cM,D.c2A,C.a4,D.c14,C.bH,E.cJe("Ver pedidos",new B.bGs(d))],y.p),C.x,C.m,C.a_,0,C.w),null),null,null)}}
var z=a.updateTypes(["V(V,oL)","H<t<oL>>(ax)","oL()","e(t<oL>)"])
B.cmR.prototype={
$1(d){return this.aAE(d)},
aAE(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.M(A.cA($.bp(),new B.cmP(),y.D,q),q)
if(p==null){v=D.bqJ
x=1
break}q=$.Z().b
q===$&&A.b()
x=3
return A.d(q.S("bookings").aP(0,"id, booking_number, event_date, total_amount, deposit_amount, status, proposals(title, description, payment_terms), weddings(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").a0("partner_id",p).dI(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bA(u,y.P),s=A.r(t),t=new A.ap(t,t.gv(t),s.i("ap<a8.E>")),s=s.i("a8.E");t.p();){r=t.d
q.push(new B.cmQ(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cmP.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.cmQ.prototype={
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
v=F.ciW(v,J.cJ(t==null?"":t))}if(x.length===0)t="Cliente"
else t=w.length===0?x:x+" & "+w
s=A.P(g?l:J.h(f,"profile_photo_url"))
if(s==null)s=A.P(g?l:J.h(f,"cover_photo_url"))
r=h.h(i,j)==null?l:A.df(A.a1(h.h(i,j)))
q=A.P(g?l:J.h(f,"venue"))
if((q==null?l:q.length!==0)===!0){f.toString
g=A.a1(J.h(f,"venue"))}else{q=A.P(g?l:J.h(f,"location"))
g=q}q=e==null
p=A.P(q?l:J.h(e,"title"))
if(p==null)p="Servi\xe7o"
o=A.P(q?l:J.h(e,"description"))
n=A.P(q?l:J.h(e,"payment_terms"))
m=A.b9(h.h(i,"total_amount"))
q=m==null?l:m
if(q==null)q=0
m=A.b9(h.h(i,"deposit_amount"))
if(m==null)m=l
if(m==null)m=0
return new B.oL(v,t,s,r,g,p,o,n,q,m,new A.a4(u,new B.cmN(),A.r(u).i("a4<a8.E>")).dS(0,0,new B.cmO()),A.a1(h.h(i,"status")))},
$S:z+2}
B.cmN.prototype={
$1(d){return J.o(J.h(d,"status"),"paid")},
$S:41}
B.cmO.prototype={
$2(d,e){return d+A.e_(J.h(e,"amount"))},
$S:458}
B.baE.prototype={
$0(){return C.bk},
$S:25}
B.baD.prototype={
$2(d,e){return new A.iT("N\xe3o foi poss\xedvel carregar.",new B.baz(this.a),null)},
$S:40}
B.baz.prototype={
$0(){return this.a.aw($.ctH())},
$S:0}
B.baC.prototype={
$1(d){var x,w=null,v=J.a3(d)
if(v.ga_(d))v=D.c8F
else{x=A.a([new A.em(new B.baA(d),w),C.ai],y.p)
for(v=v.gW(d);v.p();)x.push(new A.a_(C.eK,new B.ax1(v.gF(v),w),w))
v=A.z3(A.cL(x,w,C.Bm,w,w,!1,C.Y,!1),w,new B.baB(this.a))}return v},
$S:z+3}
B.baB.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.aw($.ctH())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.baA.prototype={
$1(d){var x=this.a,w=J.cv(x),v=w.dS(x,0,new B.bax()),u=w.dS(x,0,new B.bay()),t=A.by(v,!1),s=w.gv(x)
x=w.gv(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.ll(D.aZk,A.ef(C.bj,A.a([new A.hv("Recebido "+A.by(u,!1),!0,null),new A.hv("Falta "+A.by(C.k.ar(v-u,0,1/0),!1),!1,null)],y.p),C.t,C.bw,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:247}
B.bax.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.bay.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bCR.prototype={
$0(){return this.a.bak(this.b,this.c)},
$S:0}
B.bCQ.prototype={
$2(d,e){var x=null
return new A.a_(C.jD,A.W(A.a([A.aT(A.i(d,x,x,x,C.bh,x,x,x),x,110),A.ac(A.i(e,x,x,x,C.dD,x,x,x),1)],y.p),C.I,C.m,C.q,0,x,x),x)},
$S:294}
B.bCP.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.i(u==null?"Contrato":"Contrato "+u,w,w,w,C.cT,C.aa,w,w),C.aq,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
x=v.e
if(x!=null)u.push(t.$2("Data",A.VZ(x)))
x=v.f
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Local",x))}u.push(t.$2("Valor",A.by(v.y,!0)))
u.push(t.$2("Sinal",A.by(v.z,!0)))
u.push(t.$2("Recebido",A.by(v.Q,!0)))
x=v.w
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Descri\xe7\xe3o",x))}v=v.x
if((v==null?w:v.length!==0)===!0){v.toString
u.push(t.$2("Condi\xe7\xf5es",v))}u.push(C.aq)
u.push(A.yE(D.aw8,D.bZN,new B.bCO(d,this.c),w))
return A.bn(!0,new A.a_(D.an8,A.ez(A.I(u,C.T,C.m,C.q,0,C.w),w,w,C.Y),w),w,C.V,!0)},
$S:51}
B.bCO.prototype={
$0(){A.aC(this.a,!1).c7()
A.av(this.b).c_(0,"/partner-messages",null)},
$S:0}
B.bGs.prototype={
$0(){return A.av(this.a).c_(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.oL,A.F)
w(A.bv,[B.cmR,B.cmP,B.cmN,B.baC,B.baA,B.bCP])
w(A.bI,[B.cmQ,B.baE,B.baz,B.baB,B.bCR,B.bCO,B.bGs])
w(A.cD,[B.cmO,B.baD,B.bax,B.bay,B.bCQ])
x(B.II,A.ei)
w(A.M,[B.ax1,B.ayT])})()
A.bx(b.typeUniverse,JSON.parse('{"II":{"G":[],"e":[],"f":[]},"ax1":{"M":[],"e":[],"f":[]},"ayT":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.v
return{c:x("aG<t<oL>>"),D:x("cI"),o:x("q<oL>"),s:x("q<c>"),p:x("q<e>"),y:x("t<oL>"),P:x("a2<c,@>"),w:x("d8"),g:x("t<@>?"),h:x("a2<c,@>?"),Y:x("a2<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.an8=new A.X(20,18,20,20)
D.aw8=new A.aY(C.h2,18,null,null,null,null)
D.aZk=x([C.iU,C.ci,C.bg],A.v("q<aB>"))
D.bqJ=x([],y.o)
D.bC1=new A.hj("Contratos",null,!0,null,34,20,!0,null)
D.bIr=new A.ct("Aguarda sinal",C.rA,C.rF)
D.bIz=new A.ct("Em an\xe1lise",C.af,C.L)
D.bID=new A.ct("Expirado",C.af,C.L)
D.bIH=new A.ct("Falta o restante",C.rA,C.rF)
D.bIJ=new A.ct("Cancelado",C.af,C.L)
D.bOQ=new A.hl(C.iU,-0.016,96,null,null)
D.bZN=new A.J("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.bQ6=new A.C(!0,C.L,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c14=new A.J("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,D.bQ6,C.aa,null,null,null,null,null,null,null)
D.c2A=new A.J("Ainda sem contratos",null,C.cN,C.aa,null,null,null,null,null,null,null)
D.c8F=new B.ayT(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dsm","ctH",()=>A.eD(new B.cmR(),null,!1,null,null,y.y))})()};
(a=>{a["JfaNPy4zT/s08AOmAoQLuCmg+rU="]=a.current})($__dart_deferred_initializers__);