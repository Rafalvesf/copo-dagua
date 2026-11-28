((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,C={
d3u(d,e){return new C.aq_(d,e,null)},
Ob:function Ob(d,e){this.a=d
this.b=e},
cEw:function cEw(){},
cEv:function cEv(){},
cEx:function cEx(){},
aq_:function aq_(d,e,f){this.e=d
this.f=e
this.a=f},
b2A:function b2A(d,e,f){this.a=d
this.b=e
this.c=f},
b2z:function b2z(d){this.a=d},
OZ:function OZ(d,e,f){this.c=d
this.d=e
this.a=f},
afr:function afr(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
ccG:function ccG(d){this.a=d},
ccH:function ccH(d){this.a=d},
ccI:function ccI(d,e){this.a=d
this.b=e},
ccJ:function ccJ(d){this.a=d},
ccL:function ccL(d,e){this.a=d
this.b=e},
ccK:function ccK(d,e){this.a=d
this.b=e},
a_h(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$a_h=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.al_(),$async$a_h)
case 3:t=$.R()
s=t.b
s===$&&A.b()
w=4
return A.d(s.P("bookings").am(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("id",d),$async$a_h)
case 4:r=g
w=5
return A.d(t.b.P("payments").am(0,"booking_id, type, status, amount, paid_at, due_at, provider").V("booking_id",d).tL(0,"created_at"),$async$a_h)
case 5:q=g
t=J.a7(r)
if(t.gZ(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.i(t.gK(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
s=J.cA(s==null?"Parceiro":s)
p=s}else{s=E.cEg(s.a(J.i(t.gK(r),"events")))
p=s}}if(t.gZ(r))o=""
else{s=x.Y.a(J.i(t.gK(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
o=J.cA(s==null?"":s)}u=E.cYJ(p,"Reserva "+(t.gZ(r)?"":H.cHt(J.i(t.gK(r),"booking_number"),o,J.i(t.gK(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a_h,v)}},D,E,F
J=c[1]
A=c[0]
B=c[2]
G=c[413]
H=c[150]
C=a.updateHolder(c[71],C)
D=c[412]
E=c[133]
F=c[194]
C.Ob.prototype={
gOn(d){var w=this.b
return J.o(w==null?null:J.i(w,"status"),"open")}}
C.aq_.prototype={
bg(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.H($.d0y().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.au
w=k.b
if(k.gOn(0)){l=D.a1y.h(0,w==null?q:J.i(w,"reason"))
return r.a1D("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fR,D.aCV,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.i(w,"status"),p))v=!(!k.gOn(0)&&D.a8j.q(0,k.a))
if(v){l=$.au
v=J.a7(w)
u=D.a1A.h(0,v.h(w,o))
if(u==null)u=n
v=A.C(v.h(w,m))
return r.a1D(v==null?"":v,l,B.ia,u)}if(!(!k.gOn(0)&&D.a8j.q(0,k.a)))return B.au
v=x.p
u=A.a([],v)
if(l&&J.o(J.i(w,"status"),p)){l=$.au
t=J.a7(w)
s=D.a1A.h(0,t.h(w,o))
if(s==null)s=n
t=A.C(t.h(w,m))
B.e.n(u,A.a([r.a1D(t==null?"":t,l,B.ia,s),B.ad],v))}u.push(A.Gm(D.aDG,D.cdd,new C.b2A(r,d,e),A.ih(q,q,q,q,q,q,q,q,q,B.V,q,q,q,q,q,q,q,q,q,q,q)))
return A.x(u,B.G,B.h,B.l,0,B.u)},
a1D(d,e,f,g){var w=null,v=A.V(22),u=A.b4(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,w,A.aJ(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.av,A.h(d,w,w,w,w,F.ts,w,w,w)],t))
return A.z(w,A.N(A.a([u,B.af,A.a4(A.x(s,B.H,B.h,B.l,0,B.u),1)],t),B.H,B.h,B.l,0,w,w),B.r,w,w,new A.I(B.t,w,w,v,B.bi,w,B.y),w,w,w,B.bh,w,w,w)}}
C.OZ.prototype={
R(){return new C.afr(new A.aF(B.al,$.aa()))}}
C.afr.prototype={
m(){var w=this.e
w.Y$=$.aa()
w.W$=0
this.a6()},
Rx(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rx=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.C(m.a.a).length<10){r.p(new C.ccG(r))
w=1
break}r.p(new C.ccH(r))
t=4
p=$.R().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aL("open_dispute",A.T(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.C(m.a.a)],x.N,o),o),$async$Rx)
case 7:m=r.c
if(m!=null)A.am(m,!1).ae(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cU){q=m
r.p(new C.ccI(r,q))}else r.p(new C.ccJ(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Rx,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d9(D.a1y,n,n)
m.L(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eK(m,A.u(m).i("eK<1,2>")).gX(0);v.t();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.au
q=s?B.t:B.A
w.push(A.t1(o,t,new A.P(!0,q,o,o,o,o,o,B.bq,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.ccL(p,u),o,s,r,!1,o))}w=A.a([D.cfQ,B.aF,D.cbI,B.a1,A.e1(B.bf,w,B.r,B.bl,8,8),B.aC,A.cs(o,B.a8,!1,o,!0,B.z,o,A.cu(),p.e,o,o,o,o,o,2,B.Ql,B.Y,!0,o,!0,o,!1,o,B.aD,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aq,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.ar,o,B.b2,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.S,A.h(v,o,o,o,o,D.c5G,o,o,o)],n))
w.push(B.a1)
n=p.f?o:p.gaYe()
v=A.cn(B.A,o,o,o,B.eC,o,B.ae,o,o,o)
w.push(A.bG(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o,o),n,v))
return A.dR(A.x(w,B.G,B.h,B.K,0,B.u),B.z,o,B.O9,o,o,B.a3)}}
var z=a.updateTypes(["F<Ob?>(av,c)","OZ(O)","F<~>()"])
C.cEw.prototype={
$2(d,e){return this.aFx(d,e)},
aFx(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.R().b
p===$&&A.b()
w=7
return A.d(p.P("bookings").am(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").V("id",e).cJ(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.i(r,"disputes"))
if(p==null)p=B.am
o=J.bh(p,x.P)
o.cz(0,new C.cEv())
q=o
o=A.a0(J.i(r,"status"))
p=J.aR(q)===0?null:J.fv(q)
u=new C.Ob(o,p)
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
C.cEv.prototype={
$2(d,e){var w="created_at"
return B.f.bD(A.a0(J.i(e,w)),A.a0(J.i(d,w)))},
$S:307}
C.cEx.prototype={
$2(d,e){return null},
$S:1527}
C.b2A.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.bZ(null,new C.b2z(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.aj($.d0y().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b2z.prototype={
$1(d){var w=this.a
return new C.OZ(w.e,w.f,null)},
$S:z+1}
C.ccG.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.ccH.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.ccI.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.ccJ.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.ccL.prototype={
$1(d){var w=this.a
return w.p(new C.ccK(w,this.b))},
$S:10}
C.ccK.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.afr.prototype,"gaYe","Rx",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.Ob,A.L)
v(A.cN,[C.cEw,C.cEv,C.cEx])
w(C.aq_,A.eq)
v(A.bR,[C.b2A,C.ccG,C.ccH,C.ccI,C.ccJ,C.ccK])
v(A.bz,[C.b2z,C.ccL])
w(C.OZ,A.G)
w(C.afr,A.Y)})()
A.bq(b.typeUniverse,JSON.parse('{"OZ":{"G":[],"e":[],"f":[]},"aq_":{"G":[],"e":[],"f":[]},"afr":{"Y":["OZ"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.w
return{v:w("ay<Ob?>"),w:w("c4<c,c>"),p:w("r<e>"),P:w("a5<c,@>"),e:w("lM"),N:w("c"),y:w("y"),z:w("@"),g:w("t<@>?"),Y:w("a5<@,@>?"),q:w("Ob?"),H:w("~")}})();(function constants(){D.aCV=new A.aV(57450,"HeroiconsSolid",null,!1)
D.aDG=new A.b7(G.Ep,18,null,null,null,null)
D.bJk={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a1y=new A.c4(D.bJk,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bJe={refund_full:0,refund_partial:1,partner_favor:2}
D.a1A=new A.c4(D.bJe,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bJp={confirmed:0,completed:1,payment_overdue:2}
D.a8j=new A.eA(D.bJp,3,A.w("eA<c>"))
D.c5G=new A.P(!0,B.fR,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbI=new A.D("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,F.ts,null,null,null,null,null,null,null,null)
D.cdd=new A.D("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.cfQ=new A.D("Abrir disputa",null,B.zu,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dUa","d0y",()=>B.bY.Nl(0,new C.cEw(),new C.cEx(),x.q,x.N))})()};
(a=>{a["rKWbt+mJQwuGCGiDeqMWiyRuXO0="]=a.current})($__dart_deferred_initializers__);