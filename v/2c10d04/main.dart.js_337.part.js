((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,C={
cWa(d,e){return new C.anZ(d,e,null)},
Nq:function Nq(d,e){this.a=d
this.b=e},
cx5:function cx5(){},
cx4:function cx4(){},
cx6:function cx6(){},
anZ:function anZ(d,e,f){this.e=d
this.f=e
this.a=f},
b_B:function b_B(d,e,f){this.a=d
this.b=e
this.c=f},
b_A:function b_A(d){this.a=d},
Oc:function Oc(d,e,f){this.c=d
this.d=e
this.a=f},
adN:function adN(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
c6D:function c6D(d){this.a=d},
c6E:function c6E(d){this.a=d},
c6F:function c6F(d,e){this.a=d
this.b=e},
c6G:function c6G(d){this.a=d},
c6I:function c6I(d,e){this.a=d
this.b=e},
c6H:function c6H(d,e){this.a=d
this.b=e},
Z5(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$Z5=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.aj4(),$async$Z5)
case 3:t=$.T()
s=t.b
s===$&&A.b()
w=4
return A.d(s.P("bookings").aw(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").W("id",d),$async$Z5)
case 4:r=g
w=5
return A.d(t.b.P("payments").aw(0,"booking_id, type, status, amount, paid_at, due_at, provider").W("booking_id",d).tF(0,"created_at"),$async$Z5)
case 5:q=g
t=J.a7(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.h(t.gM(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
s=J.cN(s==null?"Parceiro":s)
p=s}else{s=E.cwQ(s.a(J.h(t.gM(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.h(t.gM(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
o=J.cN(s==null?"":s)}u=E.cQs(p,"Reserva "+(t.gY(r)?"":G.czU(J.h(t.gM(r),"booking_number"),o)),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Z5,v)}},D,E
J=c[1]
A=c[0]
B=c[2]
F=c[385]
G=c[140]
C=a.updateHolder(c[69],C)
D=c[384]
E=c[124]
C.Nq.prototype={
gNI(d){var w=this.b
return J.o(w==null?null:J.h(w,"status"),"open")}}
C.anZ.prototype={
bc(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.F($.cTg().$1(r.e),x.v),k=l.gu(l)
if(k==null)return B.ap
w=k.b
if(k.gNI(0)){l=D.a09.h(0,w==null?q:J.h(w,"reason"))
return r.a0B("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fG,D.aAK,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.h(w,"status"),p))v=!(!k.gNI(0)&&D.a6R.n(0,k.a))
if(v){l=$.ap
v=J.a7(w)
u=D.a0b.h(0,v.h(w,o))
if(u==null)u=n
v=A.J(v.h(w,m))
return r.a0B(v==null?"":v,l,B.hS,u)}if(!(!k.gNI(0)&&D.a6R.n(0,k.a)))return B.ap
v=x.p
u=A.a([],v)
if(l&&J.o(J.h(w,"status"),p)){l=$.ap
t=J.a7(w)
s=D.a0b.h(0,t.h(w,o))
if(s==null)s=n
t=A.J(t.h(w,m))
B.e.p(u,A.a([r.a0B(t==null?"":t,l,B.hS,s),B.ae],v))}u.push(A.FK(D.aBv,D.c8t,new C.b_B(r,d,e),A.id(q,q,q,q,q,q,q,q,q,B.T,q,q,q,q,q,q,q,q,q,q,q)))
return A.B(u,B.J,B.j,B.o,0,B.v)},
a0B(d,e,f,g){var w=null,v=A.a2(22),u=A.b2(f,e,w,w,22),t=x.p,s=A.a([A.i(g,w,w,w,w,A.aH(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.p(s,A.a([B.aq,A.i(d,w,w,w,w,B.oF,w,w,w)],t))
return A.C(w,A.Q(A.a([u,B.ai,A.a6(A.B(s,B.I,B.j,B.o,0,B.v),1)],t),B.I,B.j,B.o,0,w,w),B.r,w,w,new A.O(B.t,w,w,v,B.b0,w,B.y),w,w,w,B.bg,w,w,w)}}
C.Oc.prototype={
R(){return new C.adN(new A.aI(B.ao,$.ad()))}}
C.adN.prototype={
m(){var w=this.e
w.Z$=$.ad()
w.X$=0
this.a8()},
QO(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QO=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.D(m.a.a).length<10){r.q(new C.c6D(r))
w=1
break}r.q(new C.c6E(r))
t=4
p=$.T().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aU("open_dispute",A.S(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.D(m.a.a)],x.N,o),o),$async$QO)
case 7:m=r.c
if(m!=null)A.as(m,!1).ak(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cU){q=m
r.q(new C.c6F(r,q))}else r.q(new C.c6G(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$QO,v)},
v(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d2(D.a09,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eA(m,A.u(m).i("eA<1,2>")).gV(0);v.t();){u=v.d
t=A.i(u.b,o,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.ap
q=s?B.t:B.A
w.push(A.rE(o,t,new A.K(!0,q,o,o,o,o,o,B.be,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.c6I(p,u),o,s,r,!1,o))}w=A.a([D.caP,B.aF,D.c71,B.a4,A.eo(B.bf,w,B.r,B.bp,8,8),B.aB,A.cM(o,B.a9,!1,o,!0,B.z,o,A.cQ(),p.e,o,o,o,o,o,2,B.P0,B.a2,!0,o,!0,o,!1,o,B.aK,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ax,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.as,o,B.ba,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.p(w,A.a([B.Y,A.i(v,o,o,o,o,D.c1b,o,o,o)],n))
w.push(B.a4)
n=p.f?o:p.gaWp()
v=A.cv(B.A,o,o,o,B.en,o,B.ag,o,o,o)
w.push(A.bM(A.i(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o,o),n,v))
return A.e2(A.B(w,B.J,B.j,B.P,0,B.v),B.z,o,B.MV,o,B.a3)}}
var z=a.updateTypes(["F<Nq?>(au,c)","Oc(N)","F<~>()"])
C.cx5.prototype={
$2(d,e){return this.aDZ(d,e)},
aDZ(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.T().b
p===$&&A.b()
w=7
return A.d(p.P("bookings").aw(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").W("id",e).dz(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.h(r,"disputes"))
if(p==null)p=B.an
o=J.bo(p,x.P)
o.cO(0,new C.cx4())
q=o
o=A.a_(J.h(r,"status"))
p=J.aS(q)===0?null:J.fA(q)
u=new C.Nq(o,p)
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
C.cx4.prototype={
$2(d,e){var w="created_at"
return B.f.bC(A.a_(J.h(e,w)),A.a_(J.h(d,w)))},
$S:391}
C.cx6.prototype={
$2(d,e){return null},
$S:1493}
C.b_B.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.ck(null,new C.b_A(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.ah($.cTg().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:2}
C.b_A.prototype={
$1(d){var w=this.a
return new C.Oc(w.e,w.f,null)},
$S:z+1}
C.c6D.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.c6E.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.c6F.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.c6G.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.c6I.prototype={
$1(d){var w=this.a
return w.q(new C.c6H(w,this.b))},
$S:10}
C.c6H.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.adN.prototype,"gaWp","QO",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.Nq,A.L)
v(A.cS,[C.cx5,C.cx4,C.cx6])
w(C.anZ,A.em)
v(A.bR,[C.b_B,C.c6D,C.c6E,C.c6F,C.c6G,C.c6H])
v(A.bw,[C.b_A,C.c6I])
w(C.Oc,A.I)
w(C.adN,A.a1)})()
A.bx(b.typeUniverse,JSON.parse('{"Oc":{"I":[],"e":[],"f":[]},"anZ":{"I":[],"e":[],"f":[]},"adN":{"a1":["Oc"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.x
return{v:w("ax<Nq?>"),w:w("c0<c,c>"),p:w("t<e>"),P:w("a4<c,@>"),e:w("lE"),N:w("c"),y:w("z"),z:w("@"),g:w("r<@>?"),Y:w("a4<@,@>?"),q:w("Nq?"),H:w("~")}})();(function constants(){D.aAK=new A.aW(57450,"HeroiconsSolid",null,!1)
D.aBv=new A.be(F.Dq,18,null,null,null,null)
D.bGh={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a09=new A.c0(D.bGh,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bGb={refund_full:0,refund_partial:1,partner_favor:2}
D.a0b=new A.c0(D.bGb,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bGm={confirmed:0,completed:1,payment_overdue:2}
D.a6R=new A.et(D.bGm,3,A.x("et<c>"))
D.c1b=new A.K(!0,B.fG,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c71=new A.D("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,B.oF,null,null,null,null,null,null,null,null)
D.c8t=new A.D("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.caP=new A.D("Abrir disputa",null,B.yG,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dKx","cTg",()=>B.bU.MH(0,new C.cx5(),new C.cx6(),x.q,x.N))})()};
(a=>{a["4oNMAAooX6NyQ9B5xuSXrULEQqo="]=a.current})($__dart_deferred_initializers__);