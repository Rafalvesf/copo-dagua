((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,C={
cOa(d,e){return new C.amP(d,e,null)},
MP:function MP(d,e){this.a=d
this.b=e},
cqn:function cqn(){},
cqm:function cqm(){},
cqo:function cqo(){},
amP:function amP(d,e,f){this.e=d
this.f=e
this.a=f},
aYz:function aYz(d,e,f){this.a=d
this.b=e
this.c=f},
aYy:function aYy(d){this.a=d},
Nz:function Nz(d,e,f){this.c=d
this.d=e
this.a=f},
acV:function acV(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
c1U:function c1U(d){this.a=d},
c1V:function c1V(d){this.a=d},
c1W:function c1W(d,e){this.a=d
this.b=e},
c1X:function c1X(d){this.a=d},
c1Z:function c1Z(d,e){this.a=d
this.b=e},
c1Y:function c1Y(d,e){this.a=d
this.b=e},
Yg(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$Yg=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.ai8(),$async$Yg)
case 3:t=$.S()
s=t.b
s===$&&A.b()
w=4
return A.d(s.T("bookings").aI(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").X("id",d),$async$Yg)
case 4:r=g
w=5
return A.d(t.b.T("payments").aI(0,"booking_id, type, status, amount, paid_at, due_at, provider").X("booking_id",d).xR(0,"created_at"),$async$Yg)
case 5:q=g
t=J.a5(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.h(t.gN(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
s=J.cL(s==null?"Parceiro":s)
p=s}else{s=E.cq8(s.a(J.h(t.gN(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.h(t.gN(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
o=J.cL(s==null?"":s)}u=E.cIJ(p,"Reserva "+(t.gY(r)?"":G.csT(J.h(t.gN(r),"booking_number"),o)),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Yg,v)}},D,E
J=c[1]
A=c[0]
B=c[2]
F=c[420]
G=c[143]
C=a.updateHolder(c[68],C)
D=c[202]
E=c[128]
C.MP.prototype={
gNf(d){var w=this.b
return J.o(w==null?null:J.h(w,"status"),"open")}}
C.amP.prototype={
bk(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.M($.cLi().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.aq
w=k.b
if(k.gNf(0)){l=D.a_L.h(0,w==null?q:J.h(w,"reason"))
return r.a02("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.eT,D.azW,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.h(w,"status"),p))v=!(!k.gNf(0)&&D.a6m.n(0,k.a))
if(v){l=$.ao
v=J.a5(w)
u=D.a_N.h(0,v.h(w,o))
if(u==null)u=n
v=A.L(v.h(w,m))
return r.a02(v==null?"":v,l,B.jX,u)}if(!(!k.gNf(0)&&D.a6m.n(0,k.a)))return B.aq
v=x.p
u=A.a([],v)
if(l&&J.o(J.h(w,"status"),p)){l=$.ao
t=J.a5(w)
s=D.a_N.h(0,t.h(w,o))
if(s==null)s=n
t=A.L(t.h(w,m))
B.e.p(u,A.a([r.a02(t==null?"":t,l,B.jX,s),B.ab],v))}u.push(A.AN(D.aAA,D.c6U,new C.aYz(r,d,e),A.hN(q,q,q,q,q,q,q,q,q,B.R,q,q,q,q,q,q,q,q,q,q,q)))
return A.I(u,B.I,B.l,B.q,0,B.w)},
a02(d,e,f,g){var w=null,v=A.Z(22),u=A.b6(f,e,w,w,22),t=x.p,s=A.a([A.i(g,w,w,w,A.aE(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.p(s,A.a([B.ax,A.i(d,w,w,w,B.oe,w,w,w)],t))
return A.G(w,A.a_(A.a([u,B.aw,A.ae(A.I(s,B.L,B.l,B.q,0,B.w),1)],t),B.L,B.l,B.q,0,w,w),B.t,w,w,new A.N(B.u,w,w,v,B.aE,w,B.y),w,w,w,B.be,w,w,w)}}
C.Nz.prototype={
R(){return new C.acV(new A.aH(B.al,$.ag()))}}
C.acV.prototype={
m(){var w=this.e
w.a0$=$.ag()
w.V$=0
this.a8()},
Qh(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qh=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.D(m.a.a).length<10){r.q(new C.c1U(r))
w=1
break}r.q(new C.c1V(r))
t=4
p=$.S().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.b4("open_dispute",A.Q(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.D(m.a.a)],x.N,o),o),$async$Qh)
case 7:m=r.c
if(m!=null)A.av(m,!1).aG(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cY){q=m
r.q(new C.c1W(r,q))}else r.q(new C.c1X(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Qh,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d9(D.a_L,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eD(m,A.u(m).i("eD<1,2>")).gW(0);v.t();){u=v.d
t=A.i(u.b,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.ao
q=s?B.u:B.A
w.push(A.rd(o,t,new A.F(!0,q,o,o,o,o,o,B.bf,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.c1Z(p,u),o,s,r,!1,o))}w=A.a([D.c9m,B.aF,D.c5v,B.ad,A.ew(B.bl,w,B.t,B.bG,8,8),B.ak,A.cO(o,B.a7,!1,o,!0,B.z,o,A.cR(),p.e,o,o,o,o,o,2,B.OF,B.a1,!0,o,!0,o,!1,o,B.aK,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aA,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.ap,o,B.b9,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.p(w,A.a([B.a0,A.i(v,o,o,o,D.c_C,o,o,o)],n))
w.push(B.ad)
n=p.f?o:p.gaVe()
v=A.ch(B.A,o,o,o,B.e6,o,B.aa,o,o,o)
w.push(A.bE(A.i(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o),n,v))
return A.ev(A.I(w,B.I,B.l,B.W,0,B.w),B.z,o,B.Mw,o,B.Z)}}
var z=a.updateTypes(["E<MP?>(au,c)","Nz(M)","E<~>()"])
C.cqn.prototype={
$2(d,e){return this.aD5(d,e)},
aD5(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.S().b
p===$&&A.b()
w=7
return A.d(p.T("bookings").aI(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").X("id",e).dX(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.h(r,"disputes"))
if(p==null)p=B.ao
o=J.by(p,x.P)
o.d7(0,new C.cqm())
q=o
o=A.a2(J.h(r,"status"))
p=J.aT(q)===0?null:J.hF(q)
u=new C.MP(o,p)
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
C.cqm.prototype={
$2(d,e){var w="created_at"
return B.f.bD(A.a2(J.h(e,w)),A.a2(J.h(d,w)))},
$S:370}
C.cqo.prototype={
$2(d,e){return null},
$S:1432}
C.aYz.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.c8(null,new C.aYy(t),u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.al($.cLi().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:2}
C.aYy.prototype={
$1(d){var w=this.a
return new C.Nz(w.e,w.f,null)},
$S:z+1}
C.c1U.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.c1V.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.c1W.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.c1X.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.c1Z.prototype={
$1(d){var w=this.a
return w.q(new C.c1Y(w,this.b))},
$S:10}
C.c1Y.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.acV.prototype,"gaVe","Qh",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.MP,A.J)
v(A.cM,[C.cqn,C.cqm,C.cqo])
w(C.amP,A.eA)
v(A.bL,[C.aYz,C.c1U,C.c1V,C.c1W,C.c1X,C.c1Y])
v(A.bw,[C.aYy,C.c1Z])
w(C.Nz,A.H)
w(C.acV,A.a1)})()
A.bt(b.typeUniverse,JSON.parse('{"Nz":{"H":[],"e":[],"f":[]},"amP":{"H":[],"e":[],"f":[]},"acV":{"a1":["Nz"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.v
return{v:w("aF<MP?>"),w:w("c5<c,c>"),p:w("r<e>"),P:w("a3<c,@>"),e:w("lr"),N:w("c"),y:w("z"),z:w("@"),g:w("t<@>?"),Y:w("a3<@,@>?"),q:w("MP?"),H:w("~")}})();(function constants(){D.azW=new A.aP(57450,"HeroiconsSolid",null,!1)
D.aAA=new A.bi(F.D4,18,null,null,null,null)
D.bFa={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a_L=new A.c5(D.bFa,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bF4={refund_full:0,refund_partial:1,partner_favor:2}
D.a_N=new A.c5(D.bF4,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.C2=new A.a0(4,0,0,8)
D.bFe={confirmed:0,completed:1,payment_overdue:2}
D.a6m=new A.en(D.bFe,3,A.v("en<c>"))
D.c_C=new A.F(!0,B.eT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5v=new A.C("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,B.oe,null,null,null,null,null,null,null,null)
D.c6U=new A.C("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.c9m=new A.C("Abrir disputa",null,B.og,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dC6","cLi",()=>B.cm.VW(0,new C.cqn(),new C.cqo(),x.q,x.N))})()};
(a=>{a["d++oWW/C/yuiwxybrZC6wN4pvao="]=a.current})($__dart_deferred_initializers__);