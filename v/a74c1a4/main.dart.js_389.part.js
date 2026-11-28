((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,C={
d2D(d,e){return new C.ape(d,e,null)},
O1:function O1(d,e){this.a=d
this.b=e},
cDj:function cDj(){},
cDi:function cDi(){},
cDk:function cDk(){},
ape:function ape(d,e,f){this.e=d
this.f=e
this.a=f},
b1D:function b1D(d,e,f){this.a=d
this.b=e
this.c=f},
b1C:function b1C(d){this.a=d},
OO:function OO(d,e,f){this.c=d
this.d=e
this.a=f},
aeV:function aeV(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
cbB:function cbB(d){this.a=d},
cbC:function cbC(d){this.a=d},
cbD:function cbD(d,e){this.a=d
this.b=e},
cbE:function cbE(d){this.a=d},
cbG:function cbG(d,e){this.a=d
this.b=e},
cbF:function cbF(d,e){this.a=d
this.b=e},
a_0(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$a_0=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.akl(),$async$a_0)
case 3:t=$.P()
s=t.b
s===$&&A.b()
w=4
return A.d(s.P("bookings").ai(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").U("id",d),$async$a_0)
case 4:r=g
w=5
return A.d(t.b.P("payments").ai(0,"booking_id, type, status, amount, paid_at, due_at, provider").U("booking_id",d).tr(0,"created_at"),$async$a_0)
case 5:q=g
t=J.a7(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.i(t.gJ(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
s=J.cx(s==null?"Parceiro":s)
p=s}else{s=E.cD3(s.a(J.i(t.gJ(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.i(t.gJ(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
o=J.cx(s==null?"":s)}u=E.cXS(p,"Reserva "+(t.gY(r)?"":H.cGq(J.i(t.gJ(r),"booking_number"),o,J.i(t.gJ(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a_0,v)}},D,E,F
J=c[1]
A=c[0]
B=c[2]
G=c[407]
H=c[151]
C=a.updateHolder(c[71],C)
D=c[406]
E=c[133]
F=c[189]
C.O1.prototype={
gNH(d){var w=this.b
return J.o(w==null?null:J.i(w,"status"),"open")}}
C.ape.prototype={
b9(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.G($.d_I().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.ao
w=k.b
if(k.gNH(0)){l=D.a0y.h(0,w==null?q:J.i(w,"reason"))
return r.a0M("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fQ,D.aBO,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.i(w,"status"),p))v=!(!k.gNH(0)&&D.a7n.t(0,k.a))
if(v){l=$.at
v=J.a7(w)
u=D.a0A.h(0,v.h(w,o))
if(u==null)u=n
v=A.B(v.h(w,m))
return r.a0M(v==null?"":v,l,B.i7,u)}if(!(!k.gNH(0)&&D.a7n.t(0,k.a)))return B.ao
v=x.p
u=A.a([],v)
if(l&&J.o(J.i(w,"status"),p)){l=$.at
t=J.a7(w)
s=D.a0A.h(0,t.h(w,o))
if(s==null)s=n
t=A.B(t.h(w,m))
B.e.n(u,A.a([r.a0M(t==null?"":t,l,B.i7,s),B.ac],v))}u.push(A.Gc(D.aCw,D.cap,new C.b1D(r,d,e),A.j8(q,q,q,q,q,q,q,q,q,B.V,q,q,q,q,q,q,q,q,q,q,q)))
return A.y(u,B.E,B.h,B.l)},
a0M(d,e,f,g){var w=null,v=A.W(22),u=A.b8(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,w,A.aH(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.ar,A.h(d,w,w,w,w,F.rX,w,w)],t))
return A.x(w,A.O(A.a([u,B.ae,A.a4(A.y(s,B.G,B.h,B.l),1)],t),B.G,B.h,B.l,0,w),B.r,w,w,new A.I(B.t,w,w,v,B.bq,w,B.x),w,w,w,B.bn,w,w,w)}}
C.OO.prototype={
S(){return new C.aeV(new A.aE(B.ak,$.aa()))}}
C.aeV.prototype={
m(){var w=this.e
w.Z$=$.aa()
w.W$=0
this.a7()},
QO(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QO=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.B(m.a.a).length<10){r.p(new C.cbB(r))
w=1
break}r.p(new C.cbC(r))
t=4
p=$.P().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aG("open_dispute",A.R(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.B(m.a.a)],x.N,o),o),$async$QO)
case 7:m=r.c
if(m!=null)A.am(m,!1).ae(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cS){q=m
r.p(new C.cbD(r,q))}else r.p(new C.cbE(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$QO,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d7(D.a0y,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.en(m,A.u(m).i("en<1,2>")).gX(0);v.q();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.at
q=s?B.t:B.z
w.push(A.rO(o,t,new A.Q(!0,q,o,o,o,o,o,B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.cbG(p,u),o,s,r,!1,o))}w=A.a([D.cgr,B.aD,D.cdu,B.a0,A.e_(B.be,w,B.r,B.bk,8,8),B.aA,A.cp(o,B.a5,!1,o,!0,B.y,o,A.cr(),p.e,o,o,o,o,o,2,B.Ps,B.W,!0,o,!0,o,!1,o,B.aB,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.al,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.au,o,B.b_,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.P,A.h(v,o,o,o,o,D.c3K,o,o)],n))
w.push(B.a0)
n=p.f?o:p.gaWJ()
v=A.cc(B.z,o,o,o,B.eB,o,B.aa,o,o,o)
w.push(A.bB(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o),n,v))
return A.dR(A.y(w,B.E,B.h,B.J),B.y,o,B.Nl,o,B.av)}}
var z=a.updateTypes(["F<O1?>(as,c)","OO(N)","F<~>()"])
C.cDj.prototype={
$2(d,e){return this.aEd(d,e)},
aEd(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.P().b
p===$&&A.b()
w=7
return A.d(p.P("bookings").ai(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").U("id",e).cf(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.i(r,"disputes"))
if(p==null)p=B.ai
o=J.bd(p,x.P)
o.cq(0,new C.cDi())
q=o
o=A.Y(J.i(r,"status"))
p=J.aO(q)===0?null:J.fh(q)
u=new C.O1(o,p)
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
C.cDi.prototype={
$2(d,e){var w="created_at"
return B.f.bA(A.Y(J.i(e,w)),A.Y(J.i(d,w)))},
$S:406}
C.cDk.prototype={
$2(d,e){return null},
$S:1532}
C.b1D.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.bS(null,new C.b1C(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.aj($.d_I().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b1C.prototype={
$1(d){var w=this.a
return new C.OO(w.e,w.f,null)},
$S:z+1}
C.cbB.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.cbC.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.cbD.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.cbE.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.cbG.prototype={
$1(d){var w=this.a
return w.p(new C.cbF(w,this.b))},
$S:10}
C.cbF.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.aeV.prototype,"gaWJ","QO",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.O1,A.L)
v(A.cJ,[C.cDj,C.cDi,C.cDk])
w(C.ape,A.ev)
v(A.bN,[C.b1D,C.cbB,C.cbC,C.cbD,C.cbE,C.cbF])
v(A.bv,[C.b1C,C.cbG])
w(C.OO,A.H)
w(C.aeV,A.a1)})()
A.bt(b.typeUniverse,JSON.parse('{"OO":{"H":[],"e":[],"f":[]},"ape":{"H":[],"e":[],"f":[]},"aeV":{"a1":["OO"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.z
return{v:w("aw<O1?>"),w:w("c5<c,c>"),p:w("r<e>"),P:w("a5<c,@>"),e:w("lR"),N:w("c"),y:w("C"),z:w("@"),g:w("t<@>?"),Y:w("a5<@,@>?"),q:w("O1?"),H:w("~")}})();(function constants(){D.aBO=new A.aZ(57450,"HeroiconsSolid",null,!1)
D.aCw=new A.b7(G.DR,18,null,null,null,null)
D.bHU={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a0y=new A.c5(D.bHU,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bHO={refund_full:0,refund_partial:1,partner_favor:2}
D.a0A=new A.c5(D.bHO,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bHZ={confirmed:0,completed:1,payment_overdue:2}
D.a7n=new A.ex(D.bHZ,3,A.z("ex<c>"))
D.c3K=new A.Q(!0,B.fQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cap=new A.D("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null)
D.cdu=new A.D("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,F.rX,null,null,null,null,null,null,null)
D.cgr=new A.D("Abrir disputa",null,B.rZ,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dTw","d_I",()=>B.bO.ML(0,new C.cDj(),new C.cDk(),x.q,x.N))})()};
(a=>{a["2HxoOJO2rF41JYQ87MrIMuPXeAE="]=a.current})($__dart_deferred_initializers__);