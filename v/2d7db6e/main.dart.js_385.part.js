((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,C={
d36(d,e){return new C.apM(d,e,null)},
O6:function O6(d,e){this.a=d
this.b=e},
cE0:function cE0(){},
cE_:function cE_(){},
cE1:function cE1(){},
apM:function apM(d,e,f){this.e=d
this.f=e
this.a=f},
b2j:function b2j(d,e,f){this.a=d
this.b=e
this.c=f},
b2i:function b2i(d){this.a=d},
OU:function OU(d,e,f){this.c=d
this.d=e
this.a=f},
afr:function afr(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
ccr:function ccr(d){this.a=d},
ccs:function ccs(d){this.a=d},
cct:function cct(d,e){this.a=d
this.b=e},
ccu:function ccu(d){this.a=d},
ccw:function ccw(d,e){this.a=d
this.b=e},
ccv:function ccv(d,e){this.a=d
this.b=e},
a_d(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$a_d=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.akR(),$async$a_d)
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
s=J.cy(s==null?"Parceiro":s)
p=s}else{s=E.cDL(s.a(J.i(t.gL(r),"events")))
p=s}}if(t.gZ(r))o=""
else{s=x.Y.a(J.i(t.gL(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
o=J.cy(s==null?"":s)}u=E.cYi(p,"Reserva "+(t.gZ(r)?"":H.cGZ(J.i(t.gL(r),"booking_number"),o,J.i(t.gL(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a_d,v)}},D,E,F
J=c[1]
A=c[0]
B=c[2]
G=c[418]
H=c[151]
C=a.updateHolder(c[71],C)
D=c[417]
E=c[134]
F=c[198]
C.O6.prototype={
gO9(d){var w=this.b
return J.o(w==null?null:J.i(w,"status"),"open")}}
C.apM.prototype={
be(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.G($.d09().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.aq
w=k.b
if(k.gO9(0)){l=D.a10.h(0,w==null?q:J.i(w,"reason"))
return r.a1n("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fP,D.aC1,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.i(w,"status"),p))v=!(!k.gO9(0)&&D.a7K.q(0,k.a))
if(v){l=$.at
v=J.a7(w)
u=D.a12.h(0,v.h(w,o))
if(u==null)u=n
v=A.C(v.h(w,m))
return r.a1n(v==null?"":v,l,B.i5,u)}if(!(!k.gO9(0)&&D.a7K.q(0,k.a)))return B.aq
v=x.p
u=A.a([],v)
if(l&&J.o(J.i(w,"status"),p)){l=$.at
t=J.a7(w)
s=D.a12.h(0,t.h(w,o))
if(s==null)s=n
t=A.C(t.h(w,m))
B.e.n(u,A.a([r.a1n(t==null?"":t,l,B.i5,s),B.ad],v))}u.push(A.Gk(D.aCL,D.cc9,new C.b2j(r,d,e),A.iK(q,q,q,q,q,q,q,q,q,B.U,q,q,q,q,q,q,q,q,q,q,q)))
return A.A(u,B.F,B.h,B.l)},
a1n(d,e,f,g){var w=null,v=A.W(22),u=A.b6(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,w,A.aI(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.at,A.h(d,w,w,w,w,F.tg,w,w,w)],t))
return A.x(w,A.O(A.a([u,B.ae,A.a5(A.A(s,B.G,B.h,B.l),1)],t),B.G,B.h,B.l,0,w),B.r,w,w,new A.I(B.t,w,w,v,B.bi,w,B.x),w,w,w,B.bg,w,w,w)}}
C.OU.prototype={
R(){return new C.afr(new A.aE(B.ak,$.aa()))}}
C.afr.prototype={
m(){var w=this.e
w.Y$=$.aa()
w.W$=0
this.a6()},
Rl(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rl=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.B(m.a.a).length<10){r.p(new C.ccr(r))
w=1
break}r.p(new C.ccs(r))
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
r.p(new C.cct(r,q))}else r.p(new C.ccu(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Rl,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.dc(D.a10,n,n)
m.M(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eF(m,A.u(m).i("eF<1,2>")).gX(0);v.t();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.at
q=s?B.t:B.z
w.push(A.rT(o,t,new A.P(!0,q,o,o,o,o,o,B.bp,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.ccw(p,u),o,s,r,!1,o))}w=A.a([D.ceQ,B.aD,D.caE,B.a0,A.e0(B.be,w,B.r,B.bl,8,8),B.aB,A.cs(o,B.a7,!1,o,!0,B.y,o,A.ct(),p.e,o,o,o,o,o,2,B.PS,B.W,!0,o,!0,o,!1,o,B.aC,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.an,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.av,o,B.b_,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.Q,A.h(v,o,o,o,o,D.c4B,o,o,o)],n))
w.push(B.a0)
n=p.f?o:p.gaXJ()
v=A.cj(B.z,o,o,o,B.eC,o,B.ac,o,o,o)
w.push(A.bE(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o,o),n,v))
return A.dU(A.A(w,B.F,B.h,B.J),B.y,o,B.NH,o,B.a1)}}
var z=a.updateTypes(["F<O6?>(av,c)","OU(N)","F<~>()"])
C.cE0.prototype={
$2(d,e){return this.aF8(d,e)},
aF8(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
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
if(p==null)p=B.al
o=J.bh(p,x.P)
o.cv(0,new C.cE_())
q=o
o=A.Z(J.i(r,"status"))
p=J.aQ(q)===0?null:J.fs(q)
u=new C.O6(o,p)
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
C.cE_.prototype={
$2(d,e){var w="created_at"
return B.f.bC(A.Z(J.i(e,w)),A.Z(J.i(d,w)))},
$S:397}
C.cE1.prototype={
$2(d,e){return null},
$S:1514}
C.b2j.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.bW(null,new C.b2i(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.ak($.d09().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b2i.prototype={
$1(d){var w=this.a
return new C.OU(w.e,w.f,null)},
$S:z+1}
C.ccr.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.ccs.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.cct.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.ccu.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.ccw.prototype={
$1(d){var w=this.a
return w.p(new C.ccv(w,this.b))},
$S:10}
C.ccv.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.afr.prototype,"gaXJ","Rl",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.O6,A.J)
v(A.cK,[C.cE0,C.cE_,C.cE1])
w(C.apM,A.et)
v(A.bP,[C.b2j,C.ccr,C.ccs,C.cct,C.ccu,C.ccv])
v(A.bu,[C.b2i,C.ccw])
w(C.OU,A.G)
w(C.afr,A.Y)})()
A.bn(b.typeUniverse,JSON.parse('{"OU":{"G":[],"e":[],"f":[]},"apM":{"G":[],"e":[],"f":[]},"afr":{"Y":["OU"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.w
return{v:w("ay<O6?>"),w:w("c4<c,c>"),p:w("r<e>"),P:w("a4<c,@>"),e:w("lQ"),N:w("c"),y:w("y"),z:w("@"),g:w("t<@>?"),Y:w("a4<@,@>?"),q:w("O6?"),H:w("~")}})();(function constants(){D.aC1=new A.aW(57450,"HeroiconsSolid",null,!1)
D.aCL=new A.b7(G.E4,18,null,null,null,null)
D.bIm={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a10=new A.c4(D.bIm,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bIg={refund_full:0,refund_partial:1,partner_favor:2}
D.a12=new A.c4(D.bIg,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bIr={confirmed:0,completed:1,payment_overdue:2}
D.a7K=new A.ex(D.bIr,3,A.w("ex<c>"))
D.c4B=new A.P(!0,B.fP,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.caE=new A.D("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,F.tg,null,null,null,null,null,null,null,null)
D.cc9=new A.D("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.ceQ=new A.D("Abrir disputa",null,B.zf,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dTQ","d09",()=>B.bR.N9(0,new C.cE0(),new C.cE1(),x.q,x.N))})()};
(a=>{a["qj+Ac6FSatvwH6kGi6Pkkr6Bofs="]=a.current})($__dart_deferred_initializers__);