((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,C={
d3F(d,e){return new C.aq1(d,e,null)},
Oc:function Oc(d,e){this.a=d
this.b=e},
cEF:function cEF(){},
cEE:function cEE(){},
cEG:function cEG(){},
aq1:function aq1(d,e,f){this.e=d
this.f=e
this.a=f},
b2C:function b2C(d,e,f){this.a=d
this.b=e
this.c=f},
b2B:function b2B(d){this.a=d},
P_:function P_(d,e,f){this.c=d
this.d=e
this.a=f},
aft:function aft(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
ccP:function ccP(d){this.a=d},
ccQ:function ccQ(d){this.a=d},
ccR:function ccR(d,e){this.a=d
this.b=e},
ccS:function ccS(d){this.a=d},
ccU:function ccU(d,e){this.a=d
this.b=e},
ccT:function ccT(d,e){this.a=d
this.b=e},
a_i(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$a_i=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.al1(),$async$a_i)
case 3:t=$.R()
s=t.b
s===$&&A.b()
w=4
return A.d(s.P("bookings").al(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("id",d),$async$a_i)
case 4:r=g
w=5
return A.d(t.b.P("payments").al(0,"booking_id, type, status, amount, paid_at, due_at, provider").V("booking_id",d).tL(0,"created_at"),$async$a_i)
case 5:q=g
t=J.a7(r)
if(t.gZ(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.i(t.gK(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
s=J.cA(s==null?"Parceiro":s)
p=s}else{s=E.cEp(s.a(J.i(t.gK(r),"events")))
p=s}}if(t.gZ(r))o=""
else{s=x.Y.a(J.i(t.gK(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
o=J.cA(s==null?"":s)}u=E.cYS(p,"Reserva "+(t.gZ(r)?"":H.cHC(J.i(t.gK(r),"booking_number"),o,J.i(t.gK(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a_i,v)}},D,E,F
J=c[1]
A=c[0]
B=c[2]
G=c[413]
H=c[150]
C=a.updateHolder(c[71],C)
D=c[412]
E=c[133]
F=c[194]
C.Oc.prototype={
gOo(d){var w=this.b
return J.o(w==null?null:J.i(w,"status"),"open")}}
C.aq1.prototype={
bg(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.H($.d0I().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.au
w=k.b
if(k.gOo(0)){l=D.a1y.h(0,w==null?q:J.i(w,"reason"))
return r.a1H("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fS,D.aCW,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.i(w,"status"),p))v=!(!k.gOo(0)&&D.a8j.q(0,k.a))
if(v){l=$.au
v=J.a7(w)
u=D.a1A.h(0,v.h(w,o))
if(u==null)u=n
v=A.C(v.h(w,m))
return r.a1H(v==null?"":v,l,B.ia,u)}if(!(!k.gOo(0)&&D.a8j.q(0,k.a)))return B.au
v=x.p
u=A.a([],v)
if(l&&J.o(J.i(w,"status"),p)){l=$.au
t=J.a7(w)
s=D.a1A.h(0,t.h(w,o))
if(s==null)s=n
t=A.C(t.h(w,m))
B.e.n(u,A.a([r.a1H(t==null?"":t,l,B.ia,s),B.ad],v))}u.push(A.Gm(D.aDH,D.cde,new C.b2C(r,d,e),A.ih(q,q,q,q,q,q,q,q,q,B.V,q,q,q,q,q,q,q,q,q,q,q)))
return A.x(u,B.G,B.h,B.l,0,B.u)},
a1H(d,e,f,g){var w=null,v=A.V(22),u=A.b4(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,w,A.aJ(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.av,A.h(d,w,w,w,w,F.tv,w,w,w)],t))
return A.z(w,A.N(A.a([u,B.af,A.a4(A.x(s,B.H,B.h,B.l,0,B.u),1)],t),B.H,B.h,B.l,0,w,w),B.r,w,w,new A.I(B.t,w,w,v,B.bi,w,B.y),w,w,w,B.bh,w,w,w)}}
C.P_.prototype={
R(){return new C.aft(new A.aF(B.al,$.aa()))}}
C.aft.prototype={
m(){var w=this.e
w.Y$=$.aa()
w.W$=0
this.a6()},
Ry(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ry=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.C(m.a.a).length<10){r.p(new C.ccP(r))
w=1
break}r.p(new C.ccQ(r))
t=4
p=$.R().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aL("open_dispute",A.T(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.C(m.a.a)],x.N,o),o),$async$Ry)
case 7:m=r.c
if(m!=null)A.am(m,!1).ae(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cU){q=m
r.p(new C.ccR(r,q))}else r.p(new C.ccS(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Ry,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.da(D.a1y,n,n)
m.L(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eK(m,A.u(m).i("eK<1,2>")).gX(0);v.t();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.au
q=s?B.t:B.A
w.push(A.t2(o,t,new A.P(!0,q,o,o,o,o,o,B.br,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.ccU(p,u),o,s,r,!1,o))}w=A.a([D.cfR,B.aF,D.cbJ,B.a1,A.e1(B.bf,w,B.r,B.bl,8,8),B.aC,A.cs(o,B.a8,!1,o,!0,B.z,o,A.cu(),p.e,o,o,o,o,o,2,B.Ql,B.Y,!0,o,!0,o,!1,o,B.aD,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aq,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.ar,o,B.b2,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.S,A.h(v,o,o,o,o,D.c5H,o,o,o)],n))
w.push(B.a1)
n=p.f?o:p.gaYh()
v=A.cn(B.A,o,o,o,B.eD,o,B.ae,o,o,o)
w.push(A.bG(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o,o),n,v))
return A.dR(A.x(w,B.G,B.h,B.K,0,B.u),B.z,o,B.O9,o,o,B.a3)}}
var z=a.updateTypes(["F<Oc?>(av,c)","P_(O)","F<~>()"])
C.cEF.prototype={
$2(d,e){return this.aFA(d,e)},
aFA(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.R().b
p===$&&A.b()
w=7
return A.d(p.P("bookings").al(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").V("id",e).cn(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.i(r,"disputes"))
if(p==null)p=B.am
o=J.bh(p,x.P)
o.cA(0,new C.cEE())
q=o
o=A.a0(J.i(r,"status"))
p=J.aR(q)===0?null:J.fw(q)
u=new C.Oc(o,p)
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
C.cEE.prototype={
$2(d,e){var w="created_at"
return B.f.bD(A.a0(J.i(e,w)),A.a0(J.i(d,w)))},
$S:307}
C.cEG.prototype={
$2(d,e){return null},
$S:1527}
C.b2C.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.bZ(null,new C.b2B(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.aj($.d0I().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b2B.prototype={
$1(d){var w=this.a
return new C.P_(w.e,w.f,null)},
$S:z+1}
C.ccP.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.ccQ.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.ccR.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.ccS.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.ccU.prototype={
$1(d){var w=this.a
return w.p(new C.ccT(w,this.b))},
$S:10}
C.ccT.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.aft.prototype,"gaYh","Ry",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.Oc,A.L)
v(A.cN,[C.cEF,C.cEE,C.cEG])
w(C.aq1,A.eq)
v(A.bR,[C.b2C,C.ccP,C.ccQ,C.ccR,C.ccS,C.ccT])
v(A.bz,[C.b2B,C.ccU])
w(C.P_,A.G)
w(C.aft,A.Y)})()
A.br(b.typeUniverse,JSON.parse('{"P_":{"G":[],"e":[],"f":[]},"aq1":{"G":[],"e":[],"f":[]},"aft":{"Y":["P_"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.w
return{v:w("ay<Oc?>"),w:w("c4<c,c>"),p:w("r<e>"),P:w("a5<c,@>"),e:w("lM"),N:w("c"),y:w("y"),z:w("@"),g:w("t<@>?"),Y:w("a5<@,@>?"),q:w("Oc?"),H:w("~")}})();(function constants(){D.aCW=new A.aV(57450,"HeroiconsSolid",null,!1)
D.aDH=new A.b7(G.Eq,18,null,null,null,null)
D.bJl={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a1y=new A.c4(D.bJl,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bJf={refund_full:0,refund_partial:1,partner_favor:2}
D.a1A=new A.c4(D.bJf,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bJq={confirmed:0,completed:1,payment_overdue:2}
D.a8j=new A.eA(D.bJq,3,A.w("eA<c>"))
D.c5H=new A.P(!0,B.fS,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbJ=new A.D("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,F.tv,null,null,null,null,null,null,null,null)
D.cde=new A.D("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.cfR=new A.D("Abrir disputa",null,B.zv,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dUl","d0I",()=>B.bY.Nn(0,new C.cEF(),new C.cEG(),x.q,x.N))})()};
(a=>{a["POLra5MtU0iB5+ZOvr2EX2dTcY8="]=a.current})($__dart_deferred_initializers__);