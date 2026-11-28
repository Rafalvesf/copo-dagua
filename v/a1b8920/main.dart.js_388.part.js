((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,C={
d3N(d,e){return new C.apM(d,e,null)},
Oa:function Oa(d,e){this.a=d
this.b=e},
cEv:function cEv(){},
cEu:function cEu(){},
cEw:function cEw(){},
apM:function apM(d,e,f){this.e=d
this.f=e
this.a=f},
b2m:function b2m(d,e,f){this.a=d
this.b=e
this.c=f},
b2l:function b2l(d){this.a=d},
OX:function OX(d,e,f){this.c=d
this.d=e
this.a=f},
afp:function afp(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
ccS:function ccS(d){this.a=d},
ccT:function ccT(d){this.a=d},
ccU:function ccU(d,e){this.a=d
this.b=e},
ccV:function ccV(d){this.a=d},
ccX:function ccX(d,e){this.a=d
this.b=e},
ccW:function ccW(d,e){this.a=d
this.b=e},
a_d(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$a_d=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.akP(),$async$a_d)
case 3:t=$.P()
s=t.b
s===$&&A.b()
w=4
return A.d(s.P("bookings").ai(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("id",d),$async$a_d)
case 4:r=g
w=5
return A.d(t.b.P("payments").ai(0,"booking_id, type, status, amount, paid_at, due_at, provider").V("booking_id",d).tD(0,"created_at"),$async$a_d)
case 5:q=g
t=J.a7(r)
if(t.gZ(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.i(t.gJ(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
s=J.cy(s==null?"Parceiro":s)
p=s}else{s=E.cEf(s.a(J.i(t.gJ(r),"events")))
p=s}}if(t.gZ(r))o=""
else{s=x.Y.a(J.i(t.gJ(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
o=J.cy(s==null?"":s)}u=E.cZ_(p,"Reserva "+(t.gZ(r)?"":H.cHA(J.i(t.gJ(r),"booking_number"),o,J.i(t.gJ(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a_d,v)}},D,E,F
J=c[1]
A=c[0]
B=c[2]
G=c[413]
H=c[150]
C=a.updateHolder(c[71],C)
D=c[412]
E=c[133]
F=c[193]
C.Oa.prototype={
gOa(d){var w=this.b
return J.o(w==null?null:J.i(w,"status"),"open")}}
C.apM.prototype={
bb(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.G($.d0R().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.ap
w=k.b
if(k.gOa(0)){l=D.a0S.h(0,w==null?q:J.i(w,"reason"))
return r.a1q("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fP,D.aC6,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.i(w,"status"),p))v=!(!k.gOa(0)&&D.a7E.q(0,k.a))
if(v){l=$.au
v=J.a7(w)
u=D.a0U.h(0,v.h(w,o))
if(u==null)u=n
v=A.C(v.h(w,m))
return r.a1q(v==null?"":v,l,B.i6,u)}if(!(!k.gOa(0)&&D.a7E.q(0,k.a)))return B.ap
v=x.p
u=A.a([],v)
if(l&&J.o(J.i(w,"status"),p)){l=$.au
t=J.a7(w)
s=D.a0U.h(0,t.h(w,o))
if(s==null)s=n
t=A.C(t.h(w,m))
B.e.n(u,A.a([r.a1q(t==null?"":t,l,B.i6,s),B.ab],v))}u.push(A.Gn(D.aCQ,D.cbJ,new C.b2m(r,d,e),A.iL(q,q,q,q,q,q,q,q,q,B.V,q,q,q,q,q,q,q,q,q,q,q)))
return A.A(u,B.E,B.h,B.l)},
a1q(d,e,f,g){var w=null,v=A.W(22),u=A.b5(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,w,A.aJ(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.ar,A.h(d,w,w,w,w,F.tf,w,w,w)],t))
return A.B(w,A.O(A.a([u,B.ae,A.a6(A.A(s,B.F,B.h,B.l),1)],t),B.F,B.h,B.l,0,w),B.r,w,w,new A.K(B.t,w,w,v,B.br,w,B.x),w,w,w,B.bn,w,w,w)}}
C.OX.prototype={
R(){return new C.afp(new A.aE(B.aj,$.aa()))}}
C.afp.prototype={
m(){var w=this.e
w.Y$=$.aa()
w.W$=0
this.a6()},
Rm(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rm=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.B(m.a.a).length<10){r.p(new C.ccS(r))
w=1
break}r.p(new C.ccT(r))
t=4
p=$.P().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aK("open_dispute",A.R(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.B(m.a.a)],x.N,o),o),$async$Rm)
case 7:m=r.c
if(m!=null)A.am(m,!1).ae(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cU){q=m
r.p(new C.ccU(r,q))}else r.p(new C.ccV(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Rm,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.dd(D.a0S,n,n)
m.M(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eD(m,A.u(m).i("eD<1,2>")).gX(0);v.t();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.au
q=s?B.t:B.z
w.push(A.rT(o,t,new A.Q(!0,q,o,o,o,o,o,B.bo,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.ccX(p,u),o,s,r,!1,o))}w=A.a([D.cep,B.aF,D.cah,B.a0,A.e1(B.bd,w,B.r,B.bj,8,8),B.aB,A.cs(o,B.a6,!1,o,!0,B.y,o,A.ct(),p.e,o,o,o,o,o,2,B.PK,B.W,!0,o,!0,o,!1,o,B.aC,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ao,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.at,o,B.b_,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.Q,A.h(v,o,o,o,o,D.c4l,o,o,o)],n))
w.push(B.a0)
n=p.f?o:p.gaXP()
v=A.ck(B.z,o,o,o,B.eC,o,B.ac,o,o,o)
w.push(A.bE(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o,o),n,v))
return A.dT(A.A(w,B.E,B.h,B.J),B.y,o,B.NC,o,B.av)}}
var z=a.updateTypes(["F<Oa?>(at,c)","OX(N)","F<~>()"])
C.cEv.prototype={
$2(d,e){return this.aF9(d,e)},
aF9(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.P().b
p===$&&A.b()
w=7
return A.d(p.P("bookings").ai(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").V("id",e).ck(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.i(r,"disputes"))
if(p==null)p=B.ak
o=J.bh(p,x.P)
o.cw(0,new C.cEu())
q=o
o=A.a_(J.i(r,"status"))
p=J.aQ(q)===0?null:J.fk(q)
u=new C.Oa(o,p)
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
C.cEu.prototype={
$2(d,e){var w="created_at"
return B.f.bC(A.a_(J.i(e,w)),A.a_(J.i(d,w)))},
$S:307}
C.cEw.prototype={
$2(d,e){return null},
$S:1528}
C.b2m.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.bW(null,new C.b2l(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.ak($.d0R().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b2l.prototype={
$1(d){var w=this.a
return new C.OX(w.e,w.f,null)},
$S:z+1}
C.ccS.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.ccT.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.ccU.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.ccV.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.ccX.prototype={
$1(d){var w=this.a
return w.p(new C.ccW(w,this.b))},
$S:10}
C.ccW.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.afp.prototype,"gaXP","Rm",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.Oa,A.J)
v(A.cK,[C.cEv,C.cEu,C.cEw])
w(C.apM,A.et)
v(A.bO,[C.b2m,C.ccS,C.ccT,C.ccU,C.ccV,C.ccW])
v(A.bw,[C.b2l,C.ccX])
w(C.OX,A.G)
w(C.afp,A.Y)})()
A.bt(b.typeUniverse,JSON.parse('{"OX":{"G":[],"e":[],"f":[]},"apM":{"G":[],"e":[],"f":[]},"afp":{"Y":["OX"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.w
return{v:w("az<Oa?>"),w:w("c3<c,c>"),p:w("r<e>"),P:w("a4<c,@>"),e:w("lT"),N:w("c"),y:w("z"),z:w("@"),g:w("t<@>?"),Y:w("a4<@,@>?"),q:w("Oa?"),H:w("~")}})();(function constants(){D.aC6=new A.aZ(57450,"HeroiconsSolid",null,!1)
D.aCQ=new A.b7(G.E2,18,null,null,null,null)
D.bIm={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a0S=new A.c3(D.bIm,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bIg={refund_full:0,refund_partial:1,partner_favor:2}
D.a0U=new A.c3(D.bIg,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bIr={confirmed:0,completed:1,payment_overdue:2}
D.a7E=new A.ex(D.bIr,3,A.w("ex<c>"))
D.c4l=new A.Q(!0,B.fP,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cah=new A.D("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,F.tf,null,null,null,null,null,null,null,null)
D.cbJ=new A.D("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.cep=new A.D("Abrir disputa",null,B.th,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dUH","d0R",()=>B.bP.Na(0,new C.cEv(),new C.cEw(),x.q,x.N))})()};
(a=>{a["WjaVq6KfKuCxoxO0nZTxUAn64ZQ="]=a.current})($__dart_deferred_initializers__);