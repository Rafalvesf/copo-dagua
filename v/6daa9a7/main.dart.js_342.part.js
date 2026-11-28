((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,C={
cWA(d,e){return new C.aoa(d,e,null)},
Nw:function Nw(d,e){this.a=d
this.b=e},
cxv:function cxv(){},
cxu:function cxu(){},
cxw:function cxw(){},
aoa:function aoa(d,e,f){this.e=d
this.f=e
this.a=f},
b_R:function b_R(d,e,f){this.a=d
this.b=e
this.c=f},
b_Q:function b_Q(d){this.a=d},
Oi:function Oi(d,e,f){this.c=d
this.d=e
this.a=f},
ae_:function ae_(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
c7o:function c7o(d){this.a=d},
c7p:function c7p(d){this.a=d},
c7q:function c7q(d,e){this.a=d
this.b=e},
c7r:function c7r(d){this.a=d},
c7t:function c7t(d,e){this.a=d
this.b=e},
c7s:function c7s(d,e){this.a=d
this.b=e},
Zh(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$Zh=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.ajg(),$async$Zh)
case 3:t=$.T()
s=t.b
s===$&&A.b()
w=4
return A.d(s.P("bookings").aw(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").W("id",d),$async$Zh)
case 4:r=g
w=5
return A.d(t.b.P("payments").aw(0,"booking_id, type, status, amount, paid_at, due_at, provider").W("booking_id",d).tF(0,"created_at"),$async$Zh)
case 5:q=g
t=J.a7(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.h(t.gM(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
s=J.cN(s==null?"Parceiro":s)
p=s}else{s=E.cxf(s.a(J.h(t.gM(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.h(t.gM(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
o=J.cN(s==null?"":s)}u=E.cQS(p,"Reserva "+(t.gY(r)?"":G.cAj(J.h(t.gM(r),"booking_number"),o)),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Zh,v)}},D,E
J=c[1]
A=c[0]
B=c[2]
F=c[392]
G=c[144]
C=a.updateHolder(c[69],C)
D=c[391]
E=c[128]
C.Nw.prototype={
gNI(d){var w=this.b
return J.o(w==null?null:J.h(w,"status"),"open")}}
C.aoa.prototype={
bc(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.G($.cTG().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.aq
w=k.b
if(k.gNI(0)){l=D.a0d.h(0,w==null?q:J.h(w,"reason"))
return r.a0B("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fG,D.aAY,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.h(w,"status"),p))v=!(!k.gNI(0)&&D.a6X.n(0,k.a))
if(v){l=$.ap
v=J.a7(w)
u=D.a0f.h(0,v.h(w,o))
if(u==null)u=n
v=A.J(v.h(w,m))
return r.a0B(v==null?"":v,l,B.hT,u)}if(!(!k.gNI(0)&&D.a6X.n(0,k.a)))return B.aq
v=x.p
u=A.a([],v)
if(l&&J.o(J.h(w,"status"),p)){l=$.ap
t=J.a7(w)
s=D.a0f.h(0,t.h(w,o))
if(s==null)s=n
t=A.J(t.h(w,m))
B.e.p(u,A.a([r.a0B(t==null?"":t,l,B.hT,s),B.ae],v))}u.push(A.FS(D.aBJ,D.c9n,new C.b_R(r,d,e),A.id(q,q,q,q,q,q,q,q,q,B.T,q,q,q,q,q,q,q,q,q,q,q)))
return A.B(u,B.J,B.j,B.o,0,B.v)},
a0B(d,e,f,g){var w=null,v=A.a2(22),u=A.b3(f,e,w,w,22),t=x.p,s=A.a([A.i(g,w,w,w,w,A.aH(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.p(s,A.a([B.ar,A.i(d,w,w,w,w,B.oG,w,w,w)],t))
return A.C(w,A.R(A.a([u,B.ag,A.a6(A.B(s,B.I,B.j,B.o,0,B.v),1)],t),B.I,B.j,B.o,0,w,w),B.r,w,w,new A.O(B.u,w,w,v,B.bb,w,B.y),w,w,w,B.bh,w,w,w)}}
C.Oi.prototype={
R(){return new C.ae_(new A.aI(B.ao,$.ad()))}}
C.ae_.prototype={
m(){var w=this.e
w.Z$=$.ad()
w.X$=0
this.a8()},
QO(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QO=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.D(m.a.a).length<10){r.q(new C.c7o(r))
w=1
break}r.q(new C.c7p(r))
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
if(m instanceof A.cT){q=m
r.q(new C.c7q(r,q))}else r.q(new C.c7r(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$QO,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d2(D.a0d,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eB(m,A.u(m).i("eB<1,2>")).gV(0);v.t();){u=v.d
t=A.i(u.b,o,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.ap
q=s?B.u:B.A
w.push(A.rH(o,t,new A.M(!0,q,o,o,o,o,o,B.bg,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.c7t(p,u),o,s,r,!1,o))}w=A.a([D.cbG,B.aF,D.c7V,B.a4,A.eb(B.bc,w,B.r,B.bl,8,8),B.aC,A.cM(o,B.aa,!1,o,!0,B.z,o,A.cQ(),p.e,o,o,o,o,o,2,B.P4,B.a3,!0,o,!0,o,!1,o,B.aK,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.au,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.as,o,B.b8,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.p(w,A.a([B.X,A.i(v,o,o,o,o,D.c24,o,o,o)],n))
w.push(B.a4)
n=p.f?o:p.gaWp()
v=A.cv(B.A,o,o,o,B.ep,o,B.ah,o,o,o)
w.push(A.bM(A.i(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o,o),n,v))
return A.dV(A.B(w,B.J,B.j,B.N,0,B.v),B.z,o,B.MZ,o,o,B.a1)}}
var z=a.updateTypes(["F<Nw?>(au,c)","Oi(N)","F<~>()"])
C.cxv.prototype={
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
o.cO(0,new C.cxu())
q=o
o=A.a_(J.h(r,"status"))
p=J.aS(q)===0?null:J.fz(q)
u=new C.Nw(o,p)
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
C.cxu.prototype={
$2(d,e){var w="created_at"
return B.f.bC(A.a_(J.h(e,w)),A.a_(J.h(d,w)))},
$S:287}
C.cxw.prototype={
$2(d,e){return null},
$S:1493}
C.b_R.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.ck(null,new C.b_Q(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.ah($.cTG().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:2}
C.b_Q.prototype={
$1(d){var w=this.a
return new C.Oi(w.e,w.f,null)},
$S:z+1}
C.c7o.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.c7p.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.c7q.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.c7r.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.c7t.prototype={
$1(d){var w=this.a
return w.q(new C.c7s(w,this.b))},
$S:10}
C.c7s.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.ae_.prototype,"gaWp","QO",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.Nw,A.L)
v(A.cS,[C.cxv,C.cxu,C.cxw])
w(C.aoa,A.eo)
v(A.bR,[C.b_R,C.c7o,C.c7p,C.c7q,C.c7r,C.c7s])
v(A.bx,[C.b_Q,C.c7t])
w(C.Oi,A.I)
w(C.ae_,A.a1)})()
A.bu(b.typeUniverse,JSON.parse('{"Oi":{"I":[],"e":[],"f":[]},"aoa":{"I":[],"e":[],"f":[]},"ae_":{"a1":["Oi"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.w
return{v:w("ax<Nw?>"),w:w("c0<c,c>"),p:w("t<e>"),P:w("a5<c,@>"),e:w("lF"),N:w("c"),y:w("y"),z:w("@"),g:w("r<@>?"),Y:w("a5<@,@>?"),q:w("Nw?"),H:w("~")}})();(function constants(){D.aAY=new A.aW(57450,"HeroiconsSolid",null,!1)
D.aBJ=new A.bc(F.Dr,18,null,null,null,null)
D.bGG={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a0d=new A.c0(D.bGG,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bGA={refund_full:0,refund_partial:1,partner_favor:2}
D.a0f=new A.c0(D.bGA,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bGL={confirmed:0,completed:1,payment_overdue:2}
D.a6X=new A.eu(D.bGL,3,A.w("eu<c>"))
D.c24=new A.M(!0,B.fG,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7V=new A.D("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,B.oG,null,null,null,null,null,null,null,null)
D.c9n=new A.D("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.cbG=new A.D("Abrir disputa",null,B.yF,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dL0","cTG",()=>B.bS.MH(0,new C.cxv(),new C.cxw(),x.q,x.N))})()};
(a=>{a["Tg46GsBgKfMivpIQXRxApZDyA0w="]=a.current})($__dart_deferred_initializers__);