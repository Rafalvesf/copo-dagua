((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,C={
d47(d,e){return new C.apO(d,e,null)},
On:function On(d,e){this.a=d
this.b=e},
cEs:function cEs(){},
cEr:function cEr(){},
cEt:function cEt(){},
apO:function apO(d,e,f){this.e=d
this.f=e
this.a=f},
b2q:function b2q(d,e,f){this.a=d
this.b=e
this.c=f},
b2p:function b2p(d){this.a=d},
P9:function P9(d,e,f){this.c=d
this.d=e
this.a=f},
afm:function afm(d){var _=this
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
a_k(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$a_k=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.akQ(),$async$a_k)
case 3:t=$.Q()
s=t.b
s===$&&A.b()
w=4
return A.d(s.S("bookings").an(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").X("id",d),$async$a_k)
case 4:r=g
w=5
return A.d(t.b.S("payments").an(0,"booking_id, type, status, amount, paid_at, due_at, provider").X("booking_id",d).tu(0,"created_at"),$async$a_k)
case 5:q=g
t=J.a6(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.i(t.gJ(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
s=J.cy(s==null?"Parceiro":s)
p=s}else{s=E.cEb(s.a(J.i(t.gJ(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.i(t.gJ(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
o=J.cy(s==null?"":s)}u=E.cZq(p,"Reserva "+(t.gY(r)?"":H.cHF(J.i(t.gJ(r),"booking_number"),o,J.i(t.gJ(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a_k,v)}},D,E,F
J=c[1]
A=c[0]
B=c[2]
G=c[410]
H=c[152]
C=a.updateHolder(c[71],C)
D=c[409]
E=c[134]
F=c[192]
C.On.prototype={
gNL(d){var w=this.b
return J.o(w==null?null:J.i(w,"status"),"open")}}
C.apO.prototype={
b9(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.G($.d1d().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.an
w=k.b
if(k.gNL(0)){l=D.a0G.h(0,w==null?q:J.i(w,"reason"))
return r.a0T("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fT,D.aBY,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.i(w,"status"),p))v=!(!k.gNL(0)&&D.a7t.t(0,k.a))
if(v){l=$.au
v=J.a6(w)
u=D.a0I.h(0,v.h(w,o))
if(u==null)u=n
v=A.A(v.h(w,m))
return r.a0T(v==null?"":v,l,B.ic,u)}if(!(!k.gNL(0)&&D.a7t.t(0,k.a)))return B.an
v=x.p
u=A.a([],v)
if(l&&J.o(J.i(w,"status"),p)){l=$.au
t=J.a6(w)
s=D.a0I.h(0,t.h(w,o))
if(s==null)s=n
t=A.A(t.h(w,m))
B.e.p(u,A.a([r.a0T(t==null?"":t,l,B.ic,s),B.ad],v))}u.push(new A.ak(A.Gu(D.aCG,D.caP,new C.b2q(r,d,e),A.jf(q,q,q,q,q,q,q,q,q,B.W,q,q,q,q,q,q,q,q,q,q,q)),q))
return A.x(u,B.E,B.h,B.l)},
a0T(d,e,f,g){var w=null,v=A.W(22),u=A.b9(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,w,A.aH(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w)],t)
if(d.length!==0)B.e.p(s,A.a([B.ar,A.h(d,w,w,w,w,F.rY,w,w)],t))
return A.w(w,A.O(A.a([u,B.af,A.a5(A.x(s,B.G,B.h,B.l),1)],t),B.G,B.h,B.l,0,w),B.r,w,w,new A.J(B.t,w,w,v,B.bs,w,B.x),w,w,w,B.bp,w,w,w)}}
C.P9.prototype={
P(){return new C.afm(new A.aF(B.ak,$.aa()))}}
C.afm.prototype={
m(){var w=this.e
w.Z$=$.aa()
w.V$=0
this.a6()},
QU(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QU=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.B(m.a.a).length<10){r.n(new C.ccr(r))
w=1
break}r.n(new C.ccs(r))
t=4
p=$.Q().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aG("open_dispute",A.R(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.B(m.a.a)],x.N,o),o),$async$QU)
case 7:m=r.c
if(m!=null)A.an(m,!1).aq(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cU){q=m
r.n(new C.cct(r,q))}else r.n(new C.ccu(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$QU,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d8(D.a0G,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eo(m,A.u(m).i("eo<1,2>")).gW(0);v.q();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.au
q=s?B.t:B.z
w.push(A.rX(o,t,new A.P(!0,q,o,o,o,o,o,B.bo,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.ccw(p,u),o,s,r,!1,o))}w=A.a([D.cgR,B.aC,D.cdU,B.a_,A.e5(B.bh,w,B.r,B.bl,8,8),B.aA,A.cs(o,B.a6,!1,o,!0,B.y,o,A.cu(),p.e,o,o,o,o,o,2,B.PC,B.U,!0,o,!0,o,!1,o,B.aB,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.al,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.au,o,B.b0,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.p(w,A.a([B.P,A.h(v,o,o,o,o,D.c47,o,o)],n))
w.push(B.a_)
n=p.f?o:p.gaX1()
v=A.ce(B.z,o,o,o,B.eC,o,B.ab,o,o,o)
w.push(new A.ak(A.bD(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o),n,v),o))
return A.dR(A.x(w,B.E,B.h,B.J),B.y,o,B.Nq,o,B.av)}}
var z=a.updateTypes(["F<On?>(at,c)","P9(N)","F<~>()"])
C.cEs.prototype={
$2(d,e){return this.aEo(d,e)},
aEo(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.Q().b
p===$&&A.b()
w=7
return A.d(p.S("bookings").an(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").X("id",e).cl(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.i(r,"disputes"))
if(p==null)p=B.aj
o=J.bj(p,x.P)
o.cv(0,new C.cEr())
q=o
o=A.a_(J.i(r,"status"))
p=J.aO(q)===0?null:J.fs(q)
u=new C.On(o,p)
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
C.cEr.prototype={
$2(d,e){var w="created_at"
return B.f.bA(A.a_(J.i(e,w)),A.a_(J.i(d,w)))},
$S:405}
C.cEt.prototype={
$2(d,e){return null},
$S:1538}
C.b2q.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.bP(null,new C.b2p(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.ai($.d1d().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b2p.prototype={
$1(d){var w=this.a
return new C.P9(w.e,w.f,null)},
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
return w.n(new C.ccv(w,this.b))},
$S:10}
C.ccv.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.afm.prototype,"gaX1","QU",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.On,A.M)
v(A.cL,[C.cEs,C.cEr,C.cEt])
w(C.apO,A.ew)
v(A.bL,[C.b2q,C.ccr,C.ccs,C.cct,C.ccu,C.ccv])
v(A.bu,[C.b2p,C.ccw])
w(C.P9,A.G)
w(C.afm,A.Z)})()
A.br(b.typeUniverse,JSON.parse('{"P9":{"G":[],"e":[],"f":[]},"apO":{"G":[],"e":[],"f":[]},"afm":{"Z":["P9"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.B
return{v:w("ax<On?>"),w:w("c7<c,c>"),p:w("r<e>"),P:w("a3<c,@>"),e:w("lV"),N:w("c"),y:w("C"),z:w("@"),g:w("t<@>?"),Y:w("a3<@,@>?"),q:w("On?"),H:w("~")}})();(function constants(){D.aBY=new A.b0(57450,"HeroiconsSolid",null,!1)
D.aCG=new A.b8(G.DY,18,null,null,null,null)
D.bI5={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a0G=new A.c7(D.bI5,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bI_={refund_full:0,refund_partial:1,partner_favor:2}
D.a0I=new A.c7(D.bI_,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bIa={confirmed:0,completed:1,payment_overdue:2}
D.a7t=new A.eA(D.bIa,3,A.B("eA<c>"))
D.c47=new A.P(!0,B.fT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.caP=new A.D("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null)
D.cdU=new A.D("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,F.rY,null,null,null,null,null,null,null)
D.cgR=new A.D("Abrir disputa",null,B.t_,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dVs","d1d",()=>B.bK.MN(0,new C.cEs(),new C.cEt(),x.q,x.N))})()};
(a=>{a["da4gJUmAU6qv4+QCb6fhmc5wE0Q="]=a.current})($__dart_deferred_initializers__);