((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,C={
d_a(d,e){return new C.apf(d,e,null)},
NX:function NX(d,e){this.a=d
this.b=e},
cAF:function cAF(){},
cAE:function cAE(){},
cAG:function cAG(){},
apf:function apf(d,e,f){this.e=d
this.f=e
this.a=f},
b1t:function b1t(d,e,f){this.a=d
this.b=e
this.c=f},
b1s:function b1s(d){this.a=d},
OI:function OI(d,e,f){this.c=d
this.d=e
this.a=f},
aeU:function aeU(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
cac:function cac(d){this.a=d},
cad:function cad(d){this.a=d},
cae:function cae(d,e){this.a=d
this.b=e},
caf:function caf(d){this.a=d},
cah:function cah(d,e){this.a=d
this.b=e},
cag:function cag(d,e){this.a=d
this.b=e},
ZT(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$ZT=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.aki(),$async$ZT)
case 3:t=$.T()
s=t.b
s===$&&A.b()
w=4
return A.d(s.R("bookings").az(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").W("id",d),$async$ZT)
case 4:r=g
w=5
return A.d(t.b.R("payments").az(0,"booking_id, type, status, amount, paid_at, due_at, provider").W("booking_id",d).tK(0,"created_at"),$async$ZT)
case 5:q=g
t=J.a7(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.h(t.gM(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
s=J.cx(s==null?"Parceiro":s)
p=s}else{s=E.cAp(s.a(J.h(t.gM(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.h(t.gM(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
o=J.cx(s==null?"":s)}u=E.cUr(p,"Reserva "+(t.gY(r)?"":G.cDv(J.h(t.gM(r),"booking_number"),o,J.h(t.gM(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$ZT,v)}},D,E
J=c[1]
A=c[0]
B=c[2]
F=c[403]
G=c[147]
C=a.updateHolder(c[71],C)
D=c[402]
E=c[131]
C.NX.prototype={
gO8(d){var w=this.b
return J.o(w==null?null:J.h(w,"status"),"open")}}
C.apf.prototype={
bc(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.H($.cXe().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.as
w=k.b
if(k.gO8(0)){l=D.a12.h(0,w==null?q:J.h(w,"reason"))
return r.a19("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fL,D.aCb,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.h(w,"status"),p))v=!(!k.gO8(0)&&D.a7Q.p(0,k.a))
if(v){l=$.ap
v=J.a7(w)
u=D.a14.h(0,v.h(w,o))
if(u==null)u=n
v=A.C(v.h(w,m))
return r.a19(v==null?"":v,l,B.i_,u)}if(!(!k.gO8(0)&&D.a7Q.p(0,k.a)))return B.as
v=x.p
u=A.a([],v)
if(l&&J.o(J.h(w,"status"),p)){l=$.ap
t=J.a7(w)
s=D.a14.h(0,t.h(w,o))
if(s==null)s=n
t=A.C(t.h(w,m))
B.e.n(u,A.a([r.a19(t==null?"":t,l,B.i_,s),B.aa],v))}u.push(A.Gd(D.aD_,D.cbG,new C.b1t(r,d,e),A.ig(q,q,q,q,q,q,q,q,q,B.S,q,q,q,q,q,q,q,q,q,q,q)))
return A.B(u,B.I,B.j,B.m,0,B.v)},
a19(d,e,f,g){var w=null,v=A.a0(22),u=A.b2(f,e,w,w,22),t=x.p,s=A.a([A.i(g,w,w,w,w,A.aG(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.J,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.at,A.i(d,w,w,w,w,B.oT,w,w,w)],t))
return A.D(w,A.R(A.a([u,B.ag,A.a6(A.B(s,B.G,B.j,B.m,0,B.v),1)],t),B.G,B.j,B.m,0,w,w),B.r,w,w,new A.O(B.t,w,w,v,B.bb,w,B.y),w,w,w,B.bg,w,w,w)}}
C.OI.prototype={
P(){return new C.aeU(new A.aI(B.ao,$.ac()))}}
C.aeU.prototype={
m(){var w=this.e
w.Z$=$.ac()
w.X$=0
this.a7()},
Rg(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rg=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.D(m.a.a).length<10){r.q(new C.cac(r))
w=1
break}r.q(new C.cad(r))
t=4
p=$.T().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aT("open_dispute",A.S(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.D(m.a.a)],x.N,o),o),$async$Rg)
case 7:m=r.c
if(m!=null)A.aq(m,!1).aj(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cU){q=m
r.q(new C.cae(r,q))}else r.q(new C.caf(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Rg,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d5(D.a12,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eH(m,A.u(m).i("eH<1,2>")).gV(0);v.t();){u=v.d
t=A.i(u.b,o,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.ap
q=s?B.t:B.A
w.push(A.rT(o,t,new A.M(!0,q,o,o,o,o,o,B.bh,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.cah(p,u),o,s,r,!1,o))}w=A.a([D.ce_,B.aF,D.ca7,B.a3,A.ea(B.bc,w,B.r,B.bj,8,8),B.aB,A.cN(o,B.a9,!1,o,!0,B.z,o,A.cQ(),p.e,o,o,o,o,o,2,B.PR,B.a2,!0,o,!0,o,!1,o,B.aJ,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aw,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.au,o,B.b8,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.X,A.i(v,o,o,o,o,D.c4e,o,o,o)],n))
w.push(B.a3)
n=p.f?o:p.gaXk()
v=A.cu(B.A,o,o,o,B.ey,o,B.af,o,o,o)
w.push(A.bE(A.i(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o,o),n,v))
return A.dX(A.B(w,B.I,B.j,B.K,0,B.v),B.z,o,B.NJ,o,o,B.a1)}}
var z=a.updateTypes(["F<NX?>(av,c)","OI(N)","F<~>()"])
C.cAF.prototype={
$2(d,e){return this.aEL(d,e)},
aEL(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.T().b
p===$&&A.b()
w=7
return A.d(p.R("bookings").az(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").W("id",e).dA(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.h(r,"disputes"))
if(p==null)p=B.aj
o=J.bk(p,x.P)
o.cO(0,new C.cAE())
q=o
o=A.a1(J.h(r,"status"))
p=J.aS(q)===0?null:J.fu(q)
u=new C.NX(o,p)
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
C.cAE.prototype={
$2(d,e){var w="created_at"
return B.f.bC(A.a1(J.h(e,w)),A.a1(J.h(d,w)))},
$S:527}
C.cAG.prototype={
$2(d,e){return null},
$S:1520}
C.b1t.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.cn(null,new C.b1s(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.ai($.cXe().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b1s.prototype={
$1(d){var w=this.a
return new C.OI(w.e,w.f,null)},
$S:z+1}
C.cac.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.cad.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.cae.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.caf.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.cah.prototype={
$1(d){var w=this.a
return w.q(new C.cag(w,this.b))},
$S:10}
C.cag.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.aeU.prototype,"gaXk","Rg",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.NX,A.I)
v(A.cR,[C.cAF,C.cAE,C.cAG])
w(C.apf,A.en)
v(A.bR,[C.b1t,C.cac,C.cad,C.cae,C.caf,C.cag])
v(A.bx,[C.b1s,C.cah])
w(C.OI,A.K)
w(C.aeU,A.a_)})()
A.br(b.typeUniverse,JSON.parse('{"OI":{"K":[],"e":[],"f":[]},"apf":{"K":[],"e":[],"f":[]},"aeU":{"a_":["OI"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.w
return{v:w("ax<NX?>"),w:w("c3<c,c>"),p:w("r<e>"),P:w("a4<c,@>"),e:w("lK"),N:w("c"),y:w("y"),z:w("@"),g:w("t<@>?"),Y:w("a4<@,@>?"),q:w("NX?"),H:w("~")}})();(function constants(){D.aCb=new A.aV(57450,"HeroiconsSolid",null,!1)
D.aD_=new A.ba(F.E0,18,null,null,null,null)
D.bIo={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a12=new A.c3(D.bIo,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bIi={refund_full:0,refund_partial:1,partner_favor:2}
D.a14=new A.c3(D.bIi,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bIt={confirmed:0,completed:1,payment_overdue:2}
D.a7Q=new A.ez(D.bIt,3,A.w("ez<c>"))
D.c4e=new A.M(!0,B.fL,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ca7=new A.E("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,B.oT,null,null,null,null,null,null,null,null)
D.cbG=new A.E("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.ce_=new A.E("Abrir disputa",null,B.ej,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dPs","cXe",()=>B.bU.N5(0,new C.cAF(),new C.cAG(),x.q,x.N))})()};
(a=>{a["MQvsGwaAb6i8iMuT2Xn+XivjOcI="]=a.current})($__dart_deferred_initializers__);