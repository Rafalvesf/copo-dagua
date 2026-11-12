((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,C={
cDj(d,e){return new C.ajL(d,e,null)},
Lf:function Lf(d,e){this.a=d
this.b=e},
cgq:function cgq(){},
cgp:function cgp(){},
cgr:function cgr(){},
ajL:function ajL(d,e,f){this.e=d
this.f=e
this.a=f},
aUb:function aUb(d,e,f){this.a=d
this.b=e
this.c=f},
aUa:function aUa(d){this.a=d},
LV:function LV(d,e,f){this.c=d
this.d=e
this.a=f},
aad:function aad(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
bVa:function bVa(d){this.a=d},
bVb:function bVb(d){this.a=d},
bVc:function bVc(d,e){this.a=d
this.b=e},
bVd:function bVd(d){this.a=d},
bVf:function bVf(d,e){this.a=d
this.b=e},
bVe:function bVe(d,e){this.a=d
this.b=e},
W3(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$W3=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.afd(),$async$W3)
case 3:t=$.Z()
s=t.b
s===$&&A.b()
w=4
return A.d(s.S("bookings").aP(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), weddings(partner_name_1, partner_name_2, location), proposals(title)").a0("id",d),$async$W3)
case 4:r=g
w=5
return A.d(t.b.S("payments").aP(0,"booking_id, type, status, amount, paid_at, due_at, provider").a0("booking_id",d).x6(0,"created_at"),$async$W3)
case 5:q=g
t=J.a3(r)
if(t.ga_(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.h(t.gN(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
s=J.cJ(s==null?"Parceiro":s)
p=s}else{s=E.cgc(s.a(J.h(t.gN(r),"weddings")))
p=s}}if(t.ga_(r))o=""
else{s=x.Y.a(J.h(t.gN(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
o=J.cJ(s==null?"":s)}u=E.cxZ(p,"Reserva "+(t.ga_(r)?"":G.ciO(J.h(t.gN(r),"booking_number"),o)),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$W3,v)}},D,E
J=c[1]
A=c[0]
B=c[2]
F=c[410]
G=c[137]
C=a.updateHolder(c[66],C)
D=c[192]
E=c[123]
C.Lf.prototype={
ga7X(d){var w=this.b
return J.o(w==null?null:J.h(w,"status"),"open")}}
C.ajL.prototype={
bf(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.M($.cAv().$1(r.e),x.v),k=l.gq(l)
if(k==null)return B.aw
w=k.b
if(k.ga7X(0)){l=D.Zq.h(0,w==null?q:J.h(w,"reason"))
return r.Z4("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.e0,D.avo,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.h(w,"status"),p))v=!(!k.ga7X(0)&&D.a53.n(0,k.a))
if(v){l=$.a4
v=J.a3(w)
u=D.Zs.h(0,v.h(w,o))
if(u==null)u=n
v=A.P(v.h(w,m))
return r.Z4(v==null?"":v,l,B.kV,u)}if(!(!k.ga7X(0)&&D.a53.n(0,k.a)))return B.aw
v=x.p
u=A.a([],v)
if(l&&J.o(J.h(w,"status"),p)){l=$.a4
t=J.a3(w)
s=D.Zs.h(0,t.h(w,o))
if(s==null)s=n
t=A.P(t.h(w,m))
B.e.A(u,A.a([r.Z4(t==null?"":t,l,B.kV,s),B.a5],v))}u.push(A.zx(D.aw6,D.c_I,new C.aUb(r,d,e),A.fv(q,q,q,q,q,q,q,q,q,B.K,q,q,q,q,q,q,q,q,q,q,q)))
return A.I(u,B.S,B.l,B.q,0,B.w)},
Z4(d,e,f,g){var w=null,v=A.T(22),u=A.aI(f,e,w,w,22),t=x.p,s=A.a([A.i(g,w,w,w,A.as(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.A(s,A.a([B.aK,A.i(d,w,w,w,B.lD,w,w,w)],t))
return A.E(w,A.W(A.a([u,B.at,A.ab(A.I(s,B.I,B.l,B.q,0,B.w),1)],t),B.I,B.l,B.q,0,w,w),B.t,w,w,new A.K(B.v,w,w,v,B.an,w,B.y),w,w,w,w,B.bK,w,w,w)}}
C.LV.prototype={
R(){return new C.aad(new A.aM(B.aj,$.ah()))}}
C.aad.prototype={
m(){var w=this.e
w.Z$=$.ah()
w.U$=0
this.aa()},
OW(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OW=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.L(m.a.a).length<10){r.t(new C.bVa(r))
w=1
break}r.t(new C.bVb(r))
t=4
p=$.Z().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.bd("open_dispute",A.R(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.L(m.a.a)],x.N,o),o),$async$OW)
case 7:m=r.c
if(m!=null)A.aC(m,!1).b0(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.aa(l)
if(m instanceof A.dm){q=m
r.t(new C.bVc(r,q))}else r.t(new C.bVd(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$OW,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.dg(D.Zq,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eE(m,A.r(m).i("eE<1,2>")).gW(0);v.p();){u=v.d
t=A.i(u.b,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.a4
q=s?B.v:B.E
w.push(A.os(o,t,new A.C(!0,q,o,o,o,o,o,B.bd,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.bVf(p,u),o,s,r,!1,o))}w=A.a([D.c1T,B.aF,D.bZx,B.ai,A.eg(B.bk,w,B.t,B.bv,8,8),B.aq,A.cA(o,B.a9,!1,o,!0,B.C,o,A.cH(),p.e,o,o,o,o,o,2,B.Nu,B.Y,!0,o,!0,o,!1,o,B.aG,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.av,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.au,o,B.b6,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.A(w,A.a([B.a4,A.i(v,o,o,o,D.bTJ,o,o,o)],n))
w.push(B.ai)
n=p.f?o:p.gaRc()
v=A.cE(B.E,o,o,o,B.e6,o,B.ap,o,o)
w.push(A.bQ(A.i(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o),n,v))
return A.ez(A.I(w,B.S,B.l,B.a_,0,B.w),B.Lv,o,B.Z)}}
var z=a.updateTypes(["H<Lf?>(ax,c)","LV(N)","H<~>()"])
C.cgq.prototype={
$2(d,e){return this.azy(d,e)},
azy(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.Z().b
p===$&&A.b()
w=7
return A.d(p.S("bookings").aP(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").a0("id",e).em(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.h(r,"disputes"))
if(p==null)p=B.as
o=J.bA(p,x.P)
o.d4(0,new C.cgp())
q=o
o=A.a1(J.h(r,"status"))
p=J.b0(q)===0?null:J.hA(q)
u=new C.Lf(o,p)
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
C.cgp.prototype={
$2(d,e){var w="created_at"
return B.f.bC(A.a1(J.h(e,w)),A.a1(J.h(d,w)))},
$S:275}
C.cgr.prototype={
$2(d,e){return null},
$S:1342}
C.aUb.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.cd(null,new C.aUa(t),u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.aw($.cAv().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:2}
C.aUa.prototype={
$1(d){var w=this.a
return new C.LV(w.e,w.f,null)},
$S:z+1}
C.bVa.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.bVb.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.bVc.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.bVd.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.bVf.prototype={
$1(d){var w=this.a
return w.t(new C.bVe(w,this.b))},
$S:10}
C.bVe.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.aad.prototype,"gaRc","OW",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.Lf,A.F)
v(A.cD,[C.cgq,C.cgp,C.cgr])
w(C.ajL,A.ei)
v(A.bI,[C.aUb,C.bVa,C.bVb,C.bVc,C.bVd,C.bVe])
v(A.bv,[C.aUa,C.bVf])
w(C.LV,A.G)
w(C.aad,A.a0)})()
A.bx(b.typeUniverse,JSON.parse('{"LV":{"G":[],"e":[],"f":[]},"ajL":{"G":[],"e":[],"f":[]},"aad":{"a0":["LV"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.v
return{v:w("aG<Lf?>"),w:w("ch<c,c>"),p:w("q<e>"),P:w("a2<c,@>"),e:w("l0"),N:w("c"),y:w("z"),z:w("@"),g:w("t<@>?"),Y:w("a2<@,@>?"),q:w("Lf?"),H:w("~")}})();(function constants(){D.avo=new A.aB(57450,"HeroiconsSolid",null,!1)
D.aw6=new A.aY(F.u5,18,null,null,null,null)
D.bzl={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.Zq=new A.ch(D.bzl,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bzg={refund_full:0,refund_partial:1,partner_favor:2}
D.Zs=new A.ch(D.bzg,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.Lz=new A.V(4,0,0,8)
D.c_s=new A.J("Documentos",null,B.co,null,null,null,null,null,null,null,null)
D.a_j=new A.a_(D.Lz,D.c_s,null)
D.bzp={confirmed:0,completed:1,payment_overdue:2}
D.a53=new A.eB(D.bzp,3,A.v("eB<c>"))
D.bTJ=new A.C(!0,B.e0,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bZx=new A.J("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,B.lD,null,null,null,null,null,null,null,null)
D.c_I=new A.J("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.c1T=new A.J("Abrir disputa",null,B.k9,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dow","cAv",()=>B.d4.Ub(0,new C.cgq(),new C.cgr(),x.q,x.N))})()};
(a=>{a["r6qXYu80LETetGVdpg/sU23vpEI="]=a.current})($__dart_deferred_initializers__);