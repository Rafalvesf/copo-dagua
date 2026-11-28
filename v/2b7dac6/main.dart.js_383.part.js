((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,C={
d3w(d,e){return new C.apQ(d,e,null)},
O7:function O7(d,e){this.a=d
this.b=e},
cEm:function cEm(){},
cEl:function cEl(){},
cEn:function cEn(){},
apQ:function apQ(d,e,f){this.e=d
this.f=e
this.a=f},
b2o:function b2o(d,e,f){this.a=d
this.b=e
this.c=f},
b2n:function b2n(d){this.a=d},
OV:function OV(d,e,f){this.c=d
this.d=e
this.a=f},
aft:function aft(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
ccV:function ccV(d){this.a=d},
ccW:function ccW(d){this.a=d},
ccX:function ccX(d,e){this.a=d
this.b=e},
ccY:function ccY(d){this.a=d},
cd_:function cd_(d,e){this.a=d
this.b=e},
ccZ:function ccZ(d,e){this.a=d
this.b=e},
a_d(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$a_d=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.akT(),$async$a_d)
case 3:t=$.Q()
s=t.b
s===$&&A.b()
w=4
return A.d(s.P("bookings").aj(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("id",d),$async$a_d)
case 4:r=g
w=5
return A.d(t.b.P("payments").aj(0,"booking_id, type, status, amount, paid_at, due_at, provider").V("booking_id",d).tD(0,"created_at"),$async$a_d)
case 5:q=g
t=J.a7(r)
if(t.gZ(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.i(t.gL(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
s=J.cx(s==null?"Parceiro":s)
p=s}else{s=E.cE6(s.a(J.i(t.gL(r),"events")))
p=s}}if(t.gZ(r))o=""
else{s=x.Y.a(J.i(t.gL(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
o=J.cx(s==null?"":s)}u=E.cYJ(p,"Reserva "+(t.gZ(r)?"":H.cHl(J.i(t.gL(r),"booking_number"),o,J.i(t.gL(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a_d,v)}},D,E,F
J=c[1]
A=c[0]
B=c[2]
G=c[413]
H=c[150]
C=a.updateHolder(c[71],C)
D=c[412]
E=c[133]
F=c[194]
C.O7.prototype={
gO9(d){var w=this.b
return J.o(w==null?null:J.i(w,"status"),"open")}}
C.apQ.prototype={
bb(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.G($.d0B().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.ap
w=k.b
if(k.gO9(0)){l=D.a0W.h(0,w==null?q:J.i(w,"reason"))
return r.a1n("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fP,D.aBZ,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.i(w,"status"),p))v=!(!k.gO9(0)&&D.a7H.q(0,k.a))
if(v){l=$.at
v=J.a7(w)
u=D.a0Y.h(0,v.h(w,o))
if(u==null)u=n
v=A.C(v.h(w,m))
return r.a1n(v==null?"":v,l,B.i4,u)}if(!(!k.gO9(0)&&D.a7H.q(0,k.a)))return B.ap
v=x.p
u=A.a([],v)
if(l&&J.o(J.i(w,"status"),p)){l=$.at
t=J.a7(w)
s=D.a0Y.h(0,t.h(w,o))
if(s==null)s=n
t=A.C(t.h(w,m))
B.e.n(u,A.a([r.a1n(t==null?"":t,l,B.i4,s),B.ac],v))}u.push(A.Gl(D.aCI,D.cbP,new C.b2o(r,d,e),A.iK(q,q,q,q,q,q,q,q,q,B.V,q,q,q,q,q,q,q,q,q,q,q)))
return A.A(u,B.E,B.h,B.l)},
a1n(d,e,f,g){var w=null,v=A.W(22),u=A.b5(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,w,A.aI(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.aq,A.h(d,w,w,w,w,F.te,w,w,w)],t))
return A.x(w,A.O(A.a([u,B.ad,A.a4(A.A(s,B.G,B.h,B.l),1)],t),B.G,B.h,B.l,0,w),B.r,w,w,new A.K(B.t,w,w,v,B.bn,w,B.x),w,w,w,B.bg,w,w,w)}}
C.OV.prototype={
R(){return new C.aft(new A.aE(B.aj,$.aa()))}}
C.aft.prototype={
m(){var w=this.e
w.Y$=$.aa()
w.W$=0
this.a6()},
Rl(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rl=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.B(m.a.a).length<10){r.p(new C.ccV(r))
w=1
break}r.p(new C.ccW(r))
t=4
p=$.Q().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aK("open_dispute",A.R(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.B(m.a.a)],x.N,o),o),$async$Rl)
case 7:m=r.c
if(m!=null)A.am(m,!1).ae(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cT){q=m
r.p(new C.ccX(r,q))}else r.p(new C.ccY(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Rl,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.dd(D.a0W,n,n)
m.M(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eD(m,A.u(m).i("eD<1,2>")).gX(0);v.t();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.at
q=s?B.t:B.z
w.push(A.rU(o,t,new A.P(!0,q,o,o,o,o,o,B.bp,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.cd_(p,u),o,s,r,!1,o))}w=A.a([D.cew,B.aD,D.cal,B.a0,A.e_(B.be,w,B.r,B.bl,8,8),B.aB,A.cr(o,B.a6,!1,o,!0,B.y,o,A.cs(),p.e,o,o,o,o,o,2,B.PO,B.W,!0,o,!0,o,!1,o,B.aC,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ao,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.at,o,B.b_,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.R,A.h(v,o,o,o,o,D.c4l,o,o,o)],n))
w.push(B.a0)
n=p.f?o:p.gaXM()
v=A.cj(B.z,o,o,o,B.eC,o,B.ab,o,o,o)
w.push(A.bE(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o,o),n,v))
return A.dT(A.A(w,B.E,B.h,B.J),B.y,o,B.NG,o,B.av)}}
var z=a.updateTypes(["F<O7?>(au,c)","OV(N)","F<~>()"])
C.cEm.prototype={
$2(d,e){return this.aF9(d,e)},
aF9(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.Q().b
p===$&&A.b()
w=7
return A.d(p.P("bookings").aj(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").V("id",e).cj(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.i(r,"disputes"))
if(p==null)p=B.ak
o=J.bh(p,x.P)
o.cD(0,new C.cEl())
q=o
o=A.Z(J.i(r,"status"))
p=J.aQ(q)===0?null:J.fl(q)
u=new C.O7(o,p)
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$$2,v)},
$S:z+0}
C.cEl.prototype={
$2(d,e){var w="created_at"
return B.f.bE(A.Z(J.i(e,w)),A.Z(J.i(d,w)))},
$S:363}
C.cEn.prototype={
$2(d,e){return null},
$S:1523}
C.b2o.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.bW(null,new C.b2n(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.ak($.d0B().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b2n.prototype={
$1(d){var w=this.a
return new C.OV(w.e,w.f,null)},
$S:z+1}
C.ccV.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.ccW.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.ccX.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.ccY.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.cd_.prototype={
$1(d){var w=this.a
return w.p(new C.ccZ(w,this.b))},
$S:10}
C.ccZ.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.aft.prototype,"gaXM","Rl",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.O7,A.J)
v(A.cK,[C.cEm,C.cEl,C.cEn])
w(C.apQ,A.et)
v(A.bO,[C.b2o,C.ccV,C.ccW,C.ccX,C.ccY,C.ccZ])
v(A.bw,[C.b2n,C.cd_])
w(C.OV,A.G)
w(C.aft,A.Y)})()
A.br(b.typeUniverse,JSON.parse('{"OV":{"G":[],"e":[],"f":[]},"apQ":{"G":[],"e":[],"f":[]},"aft":{"Y":["OV"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.w
return{v:w("az<O7?>"),w:w("c3<c,c>"),p:w("r<e>"),P:w("a5<c,@>"),e:w("lR"),N:w("c"),y:w("B"),z:w("@"),g:w("t<@>?"),Y:w("a5<@,@>?"),q:w("O7?"),H:w("~")}})();(function constants(){D.aBZ=new A.aY(57450,"HeroiconsSolid",null,!1)
D.aCI=new A.b7(G.E2,18,null,null,null,null)
D.bIg={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a0W=new A.c3(D.bIg,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bIa={refund_full:0,refund_partial:1,partner_favor:2}
D.a0Y=new A.c3(D.bIa,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bIl={confirmed:0,completed:1,payment_overdue:2}
D.a7H=new A.ex(D.bIl,3,A.w("ex<c>"))
D.c4l=new A.P(!0,B.fP,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cal=new A.D("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,F.te,null,null,null,null,null,null,null,null)
D.cbP=new A.D("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.cew=new A.D("Abrir disputa",null,B.tg,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dUk","d0B",()=>B.bS.N9(0,new C.cEm(),new C.cEn(),x.q,x.N))})()};
(a=>{a["rvmj+2KE4jVC9vQHxjUjnW1t2ZA="]=a.current})($__dart_deferred_initializers__);