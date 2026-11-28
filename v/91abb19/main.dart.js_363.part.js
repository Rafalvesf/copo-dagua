((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,C={
d02(d,e){return new C.apq(d,e,null)},
O_:function O_(d,e){this.a=d
this.b=e},
cBw:function cBw(){},
cBv:function cBv(){},
cBx:function cBx(){},
apq:function apq(d,e,f){this.e=d
this.f=e
this.a=f},
b1J:function b1J(d,e,f){this.a=d
this.b=e
this.c=f},
b1I:function b1I(d){this.a=d},
OL:function OL(d,e,f){this.c=d
this.d=e
this.a=f},
af3:function af3(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
caS:function caS(d){this.a=d},
caT:function caT(d){this.a=d},
caU:function caU(d,e){this.a=d
this.b=e},
caV:function caV(d){this.a=d},
caX:function caX(d,e){this.a=d
this.b=e},
caW:function caW(d,e){this.a=d
this.b=e},
ZW(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$ZW=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.akt(),$async$ZW)
case 3:t=$.T()
s=t.b
s===$&&A.b()
w=4
return A.d(s.R("bookings").az(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").X("id",d),$async$ZW)
case 4:r=g
w=5
return A.d(t.b.R("payments").az(0,"booking_id, type, status, amount, paid_at, due_at, provider").X("booking_id",d).tJ(0,"created_at"),$async$ZW)
case 5:q=g
t=J.a7(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.i(t.gM(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
s=J.cy(s==null?"Parceiro":s)
p=s}else{s=E.cBg(s.a(J.i(t.gM(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.i(t.gM(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
o=J.cy(s==null?"":s)}u=E.cVi(p,"Reserva "+(t.gY(r)?"":G.cEn(J.i(t.gM(r),"booking_number"),o,J.i(t.gM(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$ZW,v)}},D,E
J=c[1]
A=c[0]
B=c[2]
F=c[406]
G=c[148]
C=a.updateHolder(c[71],C)
D=c[405]
E=c[131]
C.O_.prototype={
gO3(d){var w=this.b
return J.o(w==null?null:J.i(w,"status"),"open")}}
C.apq.prototype={
bc(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.H($.cY6().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.ar
w=k.b
if(k.gO3(0)){l=D.a1h.h(0,w==null?q:J.i(w,"reason"))
return r.a16("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fM,D.aCI,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.i(w,"status"),p))v=!(!k.gO3(0)&&D.a85.p(0,k.a))
if(v){l=$.ar
v=J.a7(w)
u=D.a1j.h(0,v.h(w,o))
if(u==null)u=n
v=A.E(v.h(w,m))
return r.a16(v==null?"":v,l,B.i1,u)}if(!(!k.gO3(0)&&D.a85.p(0,k.a)))return B.ar
v=x.p
u=A.a([],v)
if(l&&J.o(J.i(w,"status"),p)){l=$.ar
t=J.a7(w)
s=D.a1j.h(0,t.h(w,o))
if(s==null)s=n
t=A.E(t.h(w,m))
B.e.n(u,A.a([r.a16(t==null?"":t,l,B.i1,s),B.ab],v))}u.push(A.Gg(D.aDw,D.ccK,new C.b1J(r,d,e),A.ig(q,q,q,q,q,q,q,q,q,B.S,q,q,q,q,q,q,q,q,q,q,q)))
return A.B(u,B.I,B.i,B.m,0,B.v)},
a16(d,e,f,g){var w=null,v=A.Y(22),u=A.b2(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,w,A.aF(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.as,A.h(d,w,w,w,w,B.p2,w,w,w)],t))
return A.A(w,A.P(A.a([u,B.ah,A.a5(A.B(s,B.G,B.i,B.m,0,B.v),1)],t),B.G,B.i,B.m,0,w,w),B.r,w,w,new A.M(B.t,w,w,v,B.bf,w,B.y),w,w,w,B.bj,w,w,w)}}
C.OL.prototype={
P(){return new C.af3(new A.aJ(B.ap,$.ac()))}}
C.af3.prototype={
m(){var w=this.e
w.Z$=$.ac()
w.W$=0
this.a6()},
R9(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$R9=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.D(m.a.a).length<10){r.q(new C.caS(r))
w=1
break}r.q(new C.caT(r))
t=4
p=$.T().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aT("open_dispute",A.S(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.D(m.a.a)],x.N,o),o),$async$R9)
case 7:m=r.c
if(m!=null)A.ap(m,!1).aj(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cU){q=m
r.q(new C.caU(r,q))}else r.q(new C.caV(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$R9,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d5(D.a1h,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eH(m,A.u(m).i("eH<1,2>")).gV(0);v.t();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.ar
q=s?B.t:B.A
w.push(A.rU(o,t,new A.N(!0,q,o,o,o,o,o,B.bk,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.caX(p,u),o,s,r,!1,o))}w=A.a([D.cff,B.aE,D.cbh,B.a3,A.ea(B.bd,w,B.r,B.bm,8,8),B.aB,A.cJ(o,B.a9,!1,o,!0,B.z,o,A.cL(),p.e,o,o,o,o,o,2,B.Q5,B.a0,!0,o,!0,o,!1,o,B.aH,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.au,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.at,o,B.b6,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.X,A.h(v,o,o,o,o,D.c5h,o,o,o)],n))
w.push(B.a3)
n=p.f?o:p.gaXs()
v=A.cs(B.A,o,o,o,B.ey,o,B.ad,o,o,o)
w.push(A.bE(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o,o),n,v))
return A.dV(A.B(w,B.I,B.i,B.K,0,B.v),B.z,o,B.O_,o,o,B.a1)}}
var z=a.updateTypes(["F<O_?>(au,c)","OL(O)","F<~>()"])
C.cBw.prototype={
$2(d,e){return this.aEP(d,e)},
aEP(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.T().b
p===$&&A.b()
w=7
return A.d(p.R("bookings").az(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").X("id",e).dA(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.i(r,"disputes"))
if(p==null)p=B.al
o=J.bl(p,x.P)
o.cP(0,new C.cBv())
q=o
o=A.a2(J.i(r,"status"))
p=J.aR(q)===0?null:J.fu(q)
u=new C.O_(o,p)
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
C.cBv.prototype={
$2(d,e){var w="created_at"
return B.f.bC(A.a2(J.i(e,w)),A.a2(J.i(d,w)))},
$S:395}
C.cBx.prototype={
$2(d,e){return null},
$S:1521}
C.b1J.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.co(null,new C.b1I(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.ai($.cY6().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b1I.prototype={
$1(d){var w=this.a
return new C.OL(w.e,w.f,null)},
$S:z+1}
C.caS.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.caT.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.caU.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.caV.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.caX.prototype={
$1(d){var w=this.a
return w.q(new C.caW(w,this.b))},
$S:10}
C.caW.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.af3.prototype,"gaXs","R9",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.O_,A.J)
v(A.cQ,[C.cBw,C.cBv,C.cBx])
w(C.apq,A.eo)
v(A.bT,[C.b1J,C.caS,C.caT,C.caU,C.caV,C.caW])
v(A.bx,[C.b1I,C.caX])
w(C.OL,A.H)
w(C.af3,A.a_)})()
A.bq(b.typeUniverse,JSON.parse('{"OL":{"H":[],"e":[],"f":[]},"apq":{"H":[],"e":[],"f":[]},"af3":{"a_":["OL"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.w
return{v:w("ax<O_?>"),w:w("c1<c,c>"),p:w("r<e>"),P:w("a4<c,@>"),e:w("lL"),N:w("c"),y:w("y"),z:w("@"),g:w("t<@>?"),Y:w("a4<@,@>?"),q:w("O_?"),H:w("~")}})();(function constants(){D.aCI=new A.aW(57450,"HeroiconsSolid",null,!1)
D.aDw=new A.b9(F.Eh,18,null,null,null,null)
D.bJ2={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a1h=new A.c1(D.bJ2,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bIX={refund_full:0,refund_partial:1,partner_favor:2}
D.a1j=new A.c1(D.bIX,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bJ7={confirmed:0,completed:1,payment_overdue:2}
D.a85=new A.ez(D.bJ7,3,A.w("ez<c>"))
D.c5h=new A.N(!0,B.fM,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbh=new A.D("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,B.p2,null,null,null,null,null,null,null,null)
D.ccK=new A.D("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.cff=new A.D("Abrir disputa",null,B.zg,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dQr","cY6",()=>B.bW.N0(0,new C.cBw(),new C.cBx(),x.q,x.N))})()};
(a=>{a["yEVRGcNL1WrjnpeH483qwMdgZBM="]=a.current})($__dart_deferred_initializers__);