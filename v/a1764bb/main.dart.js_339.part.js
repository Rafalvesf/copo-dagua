((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,C={
cWj(d,e){return new C.ao0(d,e,null)},
Nr:function Nr(d,e){this.a=d
this.b=e},
cxe:function cxe(){},
cxd:function cxd(){},
cxf:function cxf(){},
ao0:function ao0(d,e,f){this.e=d
this.f=e
this.a=f},
b_C:function b_C(d,e,f){this.a=d
this.b=e
this.c=f},
b_B:function b_B(d){this.a=d},
Od:function Od(d,e,f){this.c=d
this.d=e
this.a=f},
adQ:function adQ(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
c6M:function c6M(d){this.a=d},
c6N:function c6N(d){this.a=d},
c6O:function c6O(d,e){this.a=d
this.b=e},
c6P:function c6P(d){this.a=d},
c6R:function c6R(d,e){this.a=d
this.b=e},
c6Q:function c6Q(d,e){this.a=d
this.b=e},
Z8(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$Z8=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.aj7(),$async$Z8)
case 3:t=$.T()
s=t.b
s===$&&A.b()
w=4
return A.d(s.P("bookings").aw(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").W("id",d),$async$Z8)
case 4:r=g
w=5
return A.d(t.b.P("payments").aw(0,"booking_id, type, status, amount, paid_at, due_at, provider").W("booking_id",d).tF(0,"created_at"),$async$Z8)
case 5:q=g
t=J.a7(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.h(t.gM(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
s=J.cN(s==null?"Parceiro":s)
p=s}else{s=E.cwZ(s.a(J.h(t.gM(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.h(t.gM(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
o=J.cN(s==null?"":s)}u=E.cQB(p,"Reserva "+(t.gY(r)?"":G.cA2(J.h(t.gM(r),"booking_number"),o)),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Z8,v)}},D,E
J=c[1]
A=c[0]
B=c[2]
F=c[386]
G=c[141]
C=a.updateHolder(c[69],C)
D=c[385]
E=c[125]
C.Nr.prototype={
gNI(d){var w=this.b
return J.o(w==null?null:J.h(w,"status"),"open")}}
C.ao0.prototype={
bc(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.G($.cTp().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.aq
w=k.b
if(k.gNI(0)){l=D.a09.h(0,w==null?q:J.h(w,"reason"))
return r.a0B("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fF,D.aAN,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.h(w,"status"),p))v=!(!k.gNI(0)&&D.a6R.n(0,k.a))
if(v){l=$.ap
v=J.a7(w)
u=D.a0b.h(0,v.h(w,o))
if(u==null)u=n
v=A.J(v.h(w,m))
return r.a0B(v==null?"":v,l,B.hS,u)}if(!(!k.gNI(0)&&D.a6R.n(0,k.a)))return B.aq
v=x.p
u=A.a([],v)
if(l&&J.o(J.h(w,"status"),p)){l=$.ap
t=J.a7(w)
s=D.a0b.h(0,t.h(w,o))
if(s==null)s=n
t=A.J(t.h(w,m))
B.e.p(u,A.a([r.a0B(t==null?"":t,l,B.hS,s),B.af],v))}u.push(A.FM(D.aBx,D.c8A,new C.b_C(r,d,e),A.id(q,q,q,q,q,q,q,q,q,B.T,q,q,q,q,q,q,q,q,q,q,q)))
return A.C(u,B.J,B.j,B.p,0,B.v)},
a0B(d,e,f,g){var w=null,v=A.a2(22),u=A.b3(f,e,w,w,22),t=x.p,s=A.a([A.i(g,w,w,w,w,A.aH(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.p(s,A.a([B.ar,A.i(d,w,w,w,w,B.oF,w,w,w)],t))
return A.B(w,A.Q(A.a([u,B.ag,A.a6(A.C(s,B.I,B.j,B.p,0,B.v),1)],t),B.I,B.j,B.p,0,w,w),B.r,w,w,new A.O(B.u,w,w,v,B.bb,w,B.y),w,w,w,B.bg,w,w,w)}}
C.Od.prototype={
R(){return new C.adQ(new A.aI(B.ao,$.ad()))}}
C.adQ.prototype={
m(){var w=this.e
w.Z$=$.ad()
w.X$=0
this.a8()},
QO(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QO=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.D(m.a.a).length<10){r.q(new C.c6M(r))
w=1
break}r.q(new C.c6N(r))
t=4
p=$.T().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aU("open_dispute",A.R(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.D(m.a.a)],x.N,o),o),$async$QO)
case 7:m=r.c
if(m!=null)A.as(m,!1).ak(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cS){q=m
r.q(new C.c6O(r,q))}else r.q(new C.c6P(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$QO,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d2(D.a09,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eB(m,A.u(m).i("eB<1,2>")).gV(0);v.t();){u=v.d
t=A.i(u.b,o,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.ap
q=s?B.u:B.A
w.push(A.rE(o,t,new A.M(!0,q,o,o,o,o,o,B.bf,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.c6R(p,u),o,s,r,!1,o))}w=A.a([D.caT,B.aF,D.c77,B.a4,A.ei(B.be,w,B.r,B.bm,8,8),B.aB,A.cM(o,B.a9,!1,o,!0,B.z,o,A.cQ(),p.e,o,o,o,o,o,2,B.P0,B.a2,!0,o,!0,o,!1,o,B.aK,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ax,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.as,o,B.b8,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.p(w,A.a([B.Z,A.i(v,o,o,o,o,D.c1h,o,o,o)],n))
w.push(B.a4)
n=p.f?o:p.gaWp()
v=A.cv(B.A,o,o,o,B.en,o,B.ah,o,o,o)
w.push(A.bM(A.i(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o,o),n,v))
return A.e4(A.C(w,B.J,B.j,B.P,0,B.v),B.z,o,B.MV,o,B.a3)}}
var z=a.updateTypes(["F<Nr?>(au,c)","Od(N)","F<~>()"])
C.cxe.prototype={
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
if(p==null)p=B.aj
o=J.bo(p,x.P)
o.cO(0,new C.cxd())
q=o
o=A.a_(J.h(r,"status"))
p=J.aS(q)===0?null:J.fz(q)
u=new C.Nr(o,p)
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
C.cxd.prototype={
$2(d,e){var w="created_at"
return B.f.bC(A.a_(J.h(e,w)),A.a_(J.h(d,w)))},
$S:391}
C.cxf.prototype={
$2(d,e){return null},
$S:1493}
C.b_C.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.ck(null,new C.b_B(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.ah($.cTp().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:2}
C.b_B.prototype={
$1(d){var w=this.a
return new C.Od(w.e,w.f,null)},
$S:z+1}
C.c6M.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.c6N.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.c6O.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.c6P.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.c6R.prototype={
$1(d){var w=this.a
return w.q(new C.c6Q(w,this.b))},
$S:10}
C.c6Q.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.adQ.prototype,"gaWp","QO",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.Nr,A.L)
v(A.cT,[C.cxe,C.cxd,C.cxf])
w(C.ao0,A.eo)
v(A.bR,[C.b_C,C.c6M,C.c6N,C.c6O,C.c6P,C.c6Q])
v(A.bx,[C.b_B,C.c6R])
w(C.Od,A.I)
w(C.adQ,A.a1)})()
A.bw(b.typeUniverse,JSON.parse('{"Od":{"I":[],"e":[],"f":[]},"ao0":{"I":[],"e":[],"f":[]},"adQ":{"a1":["Od"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.x
return{v:w("ax<Nr?>"),w:w("c0<c,c>"),p:w("t<e>"),P:w("a5<c,@>"),e:w("lF"),N:w("c"),y:w("z"),z:w("@"),g:w("r<@>?"),Y:w("a5<@,@>?"),q:w("Nr?"),H:w("~")}})();(function constants(){D.aAN=new A.aW(57450,"HeroiconsSolid",null,!1)
D.aBx=new A.be(F.Dq,18,null,null,null,null)
D.bGl={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a09=new A.c0(D.bGl,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bGf={refund_full:0,refund_partial:1,partner_favor:2}
D.a0b=new A.c0(D.bGf,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bGq={confirmed:0,completed:1,payment_overdue:2}
D.a6R=new A.eu(D.bGq,3,A.x("eu<c>"))
D.c1h=new A.M(!0,B.fF,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c77=new A.D("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,B.oF,null,null,null,null,null,null,null,null)
D.c8A=new A.D("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.caT=new A.D("Abrir disputa",null,B.yG,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dKI","cTp",()=>B.bT.MH(0,new C.cxe(),new C.cxf(),x.q,x.N))})()};
(a=>{a["G5cjlMfwfkfpijmxxIhmGLHUVaI="]=a.current})($__dart_deferred_initializers__);