((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,C={
cQE(d,e){return new C.an1(d,e,null)},
MX:function MX(d,e){this.a=d
this.b=e},
csn:function csn(){},
csm:function csm(){},
cso:function cso(){},
an1:function an1(d,e,f){this.e=d
this.f=e
this.a=f},
aZ_:function aZ_(d,e,f){this.a=d
this.b=e
this.c=f},
aYZ:function aYZ(d){this.a=d},
NG:function NG(d,e,f){this.c=d
this.d=e
this.a=f},
ad6:function ad6(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
c2P:function c2P(d){this.a=d},
c2Q:function c2Q(d){this.a=d},
c2R:function c2R(d,e){this.a=d
this.b=e},
c2S:function c2S(d){this.a=d},
c2U:function c2U(d,e){this.a=d
this.b=e},
c2T:function c2T(d,e){this.a=d
this.b=e},
Yp(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$Yp=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.aij(),$async$Yp)
case 3:t=$.R()
s=t.b
s===$&&A.b()
w=4
return A.d(s.P("bookings").aG(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("id",d),$async$Yp)
case 4:r=g
w=5
return A.d(t.b.P("payments").aG(0,"booking_id, type, status, amount, paid_at, due_at, provider").V("booking_id",d).xM(0,"created_at"),$async$Yp)
case 5:q=g
t=J.a5(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.h(t.gN(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
s=J.cJ(s==null?"Parceiro":s)
p=s}else{s=E.cs7(s.a(J.h(t.gN(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.h(t.gN(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
o=J.cJ(s==null?"":s)}u=E.cL0(p,"Reserva "+(t.gY(r)?"":G.cv1(J.h(t.gN(r),"booking_number"),o)),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Yp,v)}},D,E
J=c[1]
A=c[0]
B=c[2]
F=c[394]
G=c[137]
C=a.updateHolder(c[68],C)
D=c[188]
E=c[124]
C.MX.prototype={
gNq(d){var w=this.b
return J.o(w==null?null:J.h(w,"status"),"open")}}
C.an1.prototype={
bg(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.L($.cNN().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.aq
w=k.b
if(k.gNq(0)){l=D.a_V.h(0,w==null?q:J.h(w,"reason"))
return r.a0g("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.f9,D.aAr,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.h(w,"status"),p))v=!(!k.gNq(0)&&D.a6x.n(0,k.a))
if(v){l=$.aj
v=J.a5(w)
u=D.a_X.h(0,v.h(w,o))
if(u==null)u=n
v=A.M(v.h(w,m))
return r.a0g(v==null?"":v,l,B.k3,u)}if(!(!k.gNq(0)&&D.a6x.n(0,k.a)))return B.aq
v=x.p
u=A.a([],v)
if(l&&J.o(J.h(w,"status"),p)){l=$.aj
t=J.a5(w)
s=D.a_X.h(0,t.h(w,o))
if(s==null)s=n
t=A.M(t.h(w,m))
B.e.p(u,A.a([r.a0g(t==null?"":t,l,B.k3,s),B.ac],v))}u.push(A.AR(D.aB6,D.c86,new C.aZ_(r,d,e),A.hQ(q,q,q,q,q,q,q,q,q,B.P,q,q,q,q,q,q,q,q,q,q,q)))
return A.E(u,B.J,B.k,B.p,0,B.w)},
a0g(d,e,f,g){var w=null,v=A.X(22),u=A.b7(f,e,w,w,22),t=x.p,s=A.a([A.i(g,w,w,w,w,A.aF(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.p(s,A.a([B.ar,A.i(d,w,w,w,w,B.ol,w,w,w)],t))
return A.C(w,A.S(A.a([u,B.ak,A.a7(A.E(s,B.I,B.k,B.p,0,B.w),1)],t),B.I,B.k,B.p,0,w,w),B.r,w,w,new A.L(B.u,w,w,v,B.aI,w,B.y),w,w,w,B.b9,w,w,w)}}
C.NG.prototype={
S(){return new C.ad6(new A.aH(B.am,$.ae()))}}
C.ad6.prototype={
m(){var w=this.e
w.a0$=$.ae()
w.W$=0
this.aa()},
Qx(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qx=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.D(m.a.a).length<10){r.q(new C.c2P(r))
w=1
break}r.q(new C.c2Q(r))
t=4
p=$.R().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.b1("open_dispute",A.Q(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.D(m.a.a)],x.N,o),o),$async$Qx)
case 7:m=r.c
if(m!=null)A.at(m,!1).ar(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cW){q=m
r.q(new C.c2R(r,q))}else r.q(new C.c2S(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Qx,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d8(D.a_V,n,n)
m.J(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eu(m,A.u(m).i("eu<1,2>")).gX(0);v.t();){u=v.d
t=A.i(u.b,o,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.aj
q=s?B.u:B.z
w.push(A.rf(o,t,new A.H(!0,q,o,o,o,o,o,B.be,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.c2U(p,u),o,s,r,!1,o))}w=A.a([D.caD,B.az,D.c6E,B.a7,A.er(B.bj,w,B.r,B.bA,8,8),B.al,A.cR(o,B.aa,!1,o,!0,B.A,o,A.cT(),p.e,o,o,o,o,o,2,B.OM,B.a1,!0,o,!0,o,!1,o,B.aN,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ay,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.as,o,B.bc,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.p(w,A.a([B.Y,A.i(v,o,o,o,o,D.c0I,o,o,o)],n))
w.push(B.a7)
n=p.f?o:p.gaVA()
v=A.cc(B.z,o,o,o,B.en,o,B.a9,o,o,o)
w.push(A.bB(A.i(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o,o),n,v))
return A.eg(A.E(w,B.J,B.k,B.U,0,B.w),B.A,o,B.MI,o,B.a2)}}
var z=a.updateTypes(["G<MX?>(au,c)","NG(N)","G<~>()"])
C.csn.prototype={
$2(d,e){return this.aDp(d,e)},
aDp(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.R().b
p===$&&A.b()
w=7
return A.d(p.P("bookings").aG(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").V("id",e).dM(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.h(r,"disputes"))
if(p==null)p=B.an
o=J.bw(p,x.P)
o.cX(0,new C.csm())
q=o
o=A.a2(J.h(r,"status"))
p=J.aU(q)===0?null:J.hc(q)
u=new C.MX(o,p)
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
C.csm.prototype={
$2(d,e){var w="created_at"
return B.f.bC(A.a2(J.h(e,w)),A.a2(J.h(d,w)))},
$S:380}
C.cso.prototype={
$2(d,e){return null},
$S:1440}
C.aZ_.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.cB(null,new C.aYZ(t),!0,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.aj($.cNN().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:2}
C.aYZ.prototype={
$1(d){var w=this.a
return new C.NG(w.e,w.f,null)},
$S:z+1}
C.c2P.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.c2Q.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.c2R.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.c2S.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.c2U.prototype={
$1(d){var w=this.a
return w.q(new C.c2T(w,this.b))},
$S:10}
C.c2T.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.ad6.prototype,"gaVA","Qx",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.MX,A.K)
v(A.cS,[C.csn,C.csm,C.cso])
w(C.an1,A.eD)
v(A.bS,[C.aZ_,C.c2P,C.c2Q,C.c2R,C.c2S,C.c2T])
v(A.bx,[C.aYZ,C.c2U])
w(C.NG,A.I)
w(C.ad6,A.a1)})()
A.bu(b.typeUniverse,JSON.parse('{"NG":{"I":[],"e":[],"f":[]},"an1":{"I":[],"e":[],"f":[]},"ad6":{"a1":["NG"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.w
return{v:w("aB<MX?>"),w:w("c5<c,c>"),p:w("r<e>"),P:w("a3<c,@>"),e:w("lu"),N:w("c"),y:w("z"),z:w("@"),g:w("t<@>?"),Y:w("a3<@,@>?"),q:w("MX?"),H:w("~")}})();(function constants(){D.aAr=new A.aS(57450,"HeroiconsSolid",null,!1)
D.aB6=new A.b6(F.Dc,18,null,null,null,null)
D.bFO={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a_V=new A.c5(D.bFO,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bFI={refund_full:0,refund_partial:1,partner_favor:2}
D.a_X=new A.c5(D.bFI,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.C9=new A.a0(4,0,0,8)
D.bFS={confirmed:0,completed:1,payment_overdue:2}
D.a6x=new A.eo(D.bFS,3,A.w("eo<c>"))
D.c0I=new A.H(!0,B.f9,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6E=new A.A("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,B.ol,null,null,null,null,null,null,null,null)
D.c86=new A.A("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.caD=new A.A("Abrir disputa",null,B.on,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dEF","cNN",()=>B.ch.Wa(0,new C.csn(),new C.cso(),x.q,x.N))})()};
(a=>{a["Ot/mHb432RMvuTBSG9698QQ+QSk="]=a.current})($__dart_deferred_initializers__);