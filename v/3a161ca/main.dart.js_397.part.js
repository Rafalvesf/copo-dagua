((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,C={
d46(d,e){return new C.apC(d,e,null)},
O9:function O9(d,e){this.a=d
this.b=e},
cEz:function cEz(){},
cEy:function cEy(){},
cEA:function cEA(){},
apC:function apC(d,e,f){this.e=d
this.f=e
this.a=f},
b29:function b29(d,e,f){this.a=d
this.b=e
this.c=f},
b28:function b28(d){this.a=d},
OW:function OW(d,e,f){this.c=d
this.d=e
this.a=f},
af8:function af8(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
ccD:function ccD(d){this.a=d},
ccE:function ccE(d){this.a=d},
ccF:function ccF(d,e){this.a=d
this.b=e},
ccG:function ccG(d){this.a=d},
ccI:function ccI(d,e){this.a=d
this.b=e},
ccH:function ccH(d,e){this.a=d
this.b=e},
a_b(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$a_b=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.akD(),$async$a_b)
case 3:t=$.Q()
s=t.b
s===$&&A.b()
w=4
return A.d(s.P("bookings").al(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("id",d),$async$a_b)
case 4:r=g
w=5
return A.d(t.b.P("payments").al(0,"booking_id, type, status, amount, paid_at, due_at, provider").V("booking_id",d).tu(0,"created_at"),$async$a_b)
case 5:q=g
t=J.a7(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.i(t.gJ(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
s=J.cy(s==null?"Parceiro":s)
p=s}else{s=E.cEi(s.a(J.i(t.gJ(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.i(t.gJ(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
o=J.cy(s==null?"":s)}u=E.cZm(p,"Reserva "+(t.gY(r)?"":H.cHK(J.i(t.gJ(r),"booking_number"),o,J.i(t.gJ(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a_b,v)}},D,E,F
J=c[1]
A=c[0]
B=c[2]
G=c[410]
H=c[152]
C=a.updateHolder(c[71],C)
D=c[409]
E=c[134]
F=c[192]
C.O9.prototype={
gNM(d){var w=this.b
return J.o(w==null?null:J.i(w,"status"),"open")}}
C.apC.prototype={
ba(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.G($.d1b().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.ao
w=k.b
if(k.gNM(0)){l=D.a0C.h(0,w==null?q:J.i(w,"reason"))
return r.a0T("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fT,D.aBU,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.i(w,"status"),p))v=!(!k.gNM(0)&&D.a7s.t(0,k.a))
if(v){l=$.au
v=J.a7(w)
u=D.a0E.h(0,v.h(w,o))
if(u==null)u=n
v=A.C(v.h(w,m))
return r.a0T(v==null?"":v,l,B.ia,u)}if(!(!k.gNM(0)&&D.a7s.t(0,k.a)))return B.ao
v=x.p
u=A.a([],v)
if(l&&J.o(J.i(w,"status"),p)){l=$.au
t=J.a7(w)
s=D.a0E.h(0,t.h(w,o))
if(s==null)s=n
t=A.C(t.h(w,m))
B.e.n(u,A.a([r.a0T(t==null?"":t,l,B.ia,s),B.ac],v))}u.push(new A.am(A.Gl(D.aCC,D.caD,new C.b29(r,d,e),A.jc(q,q,q,q,q,q,q,q,q,B.W,q,q,q,q,q,q,q,q,q,q,q)),q))
return A.y(u,B.E,B.h,B.l)},
a0T(d,e,f,g){var w=null,v=A.W(22),u=A.b9(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,w,A.aI(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.ar,A.h(d,w,w,w,w,F.t_,w,w)],t))
return A.x(w,A.O(A.a([u,B.af,A.a5(A.y(s,B.G,B.h,B.l),1)],t),B.G,B.h,B.l,0,w),B.r,w,w,new A.I(B.t,w,w,v,B.bq,w,B.x),w,w,w,B.bn,w,w,w)}}
C.OW.prototype={
R(){return new C.af8(new A.aF(B.ak,$.aa()))}}
C.af8.prototype={
m(){var w=this.e
w.Z$=$.aa()
w.W$=0
this.a6()},
QU(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QU=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.B(m.a.a).length<10){r.p(new C.ccD(r))
w=1
break}r.p(new C.ccE(r))
t=4
p=$.Q().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aH("open_dispute",A.R(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.B(m.a.a)],x.N,o),o),$async$QU)
case 7:m=r.c
if(m!=null)A.al(m,!1).af(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cU){q=m
r.p(new C.ccF(r,q))}else r.p(new C.ccG(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$QU,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d8(D.a0C,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.ee(m,A.u(m).i("ee<1,2>")).gX(0);v.q();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.au
q=s?B.t:B.z
w.push(A.rT(o,t,new A.P(!0,q,o,o,o,o,o,B.bm,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.ccI(p,u),o,s,r,!1,o))}w=A.a([D.cgF,B.aE,D.cdI,B.a_,A.e4(B.bf,w,B.r,B.bk,8,8),B.aA,A.cs(o,B.a6,!1,o,!0,B.y,o,A.cu(),p.e,o,o,o,o,o,2,B.Pw,B.U,!0,o,!0,o,!1,o,B.aB,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.al,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.au,o,B.b0,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.P,A.h(v,o,o,o,o,D.c3Y,o,o)],n))
w.push(B.a_)
n=p.f?o:p.gaWX()
v=A.cc(B.z,o,o,o,B.eC,o,B.aa,o,o,o)
w.push(new A.am(A.bD(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o),n,v),o))
return A.dS(A.y(w,B.E,B.h,B.J),B.y,o,B.Np,o,B.av)}}
var z=a.updateTypes(["F<O9?>(at,c)","OW(N)","F<~>()"])
C.cEz.prototype={
$2(d,e){return this.aEn(d,e)},
aEn(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.Q().b
p===$&&A.b()
w=7
return A.d(p.P("bookings").al(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").V("id",e).cj(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.i(r,"disputes"))
if(p==null)p=B.ai
o=J.bf(p,x.P)
o.ct(0,new C.cEy())
q=o
o=A.Y(J.i(r,"status"))
p=J.aO(q)===0?null:J.fi(q)
u=new C.O9(o,p)
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
C.cEy.prototype={
$2(d,e){var w="created_at"
return B.f.bA(A.Y(J.i(e,w)),A.Y(J.i(d,w)))},
$S:412}
C.cEA.prototype={
$2(d,e){return null},
$S:1540}
C.b29.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.bQ(null,new C.b28(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.ai($.d1b().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b28.prototype={
$1(d){var w=this.a
return new C.OW(w.e,w.f,null)},
$S:z+1}
C.ccD.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.ccE.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.ccF.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.ccG.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.ccI.prototype={
$1(d){var w=this.a
return w.p(new C.ccH(w,this.b))},
$S:10}
C.ccH.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.af8.prototype,"gaWX","QU",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.O9,A.M)
v(A.cK,[C.cEz,C.cEy,C.cEA])
w(C.apC,A.ew)
v(A.bL,[C.b29,C.ccD,C.ccE,C.ccF,C.ccG,C.ccH])
v(A.bt,[C.b28,C.ccI])
w(C.OW,A.H)
w(C.af8,A.a_)})()
A.br(b.typeUniverse,JSON.parse('{"OW":{"H":[],"e":[],"f":[]},"apC":{"H":[],"e":[],"f":[]},"af8":{"a_":["OW"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.A
return{v:w("ax<O9?>"),w:w("c6<c,c>"),p:w("r<e>"),P:w("a3<c,@>"),e:w("lU"),N:w("c"),y:w("B"),z:w("@"),g:w("t<@>?"),Y:w("a3<@,@>?"),q:w("O9?"),H:w("~")}})();(function constants(){D.aBU=new A.b0(57450,"HeroiconsSolid",null,!1)
D.aCC=new A.b8(G.DW,18,null,null,null,null)
D.bI0={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a0C=new A.c6(D.bI0,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bHV={refund_full:0,refund_partial:1,partner_favor:2}
D.a0E=new A.c6(D.bHV,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bI5={confirmed:0,completed:1,payment_overdue:2}
D.a7s=new A.ey(D.bI5,3,A.A("ey<c>"))
D.c3Y=new A.P(!0,B.fT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.caD=new A.D("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null)
D.cdI=new A.D("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,F.t_,null,null,null,null,null,null,null)
D.cgF=new A.D("Abrir disputa",null,B.t1,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dVd","d1b",()=>B.bP.MO(0,new C.cEz(),new C.cEA(),x.q,x.N))})()};
(a=>{a["9Ad2tyczbMT4GZyAN1pSOP1k9Q8="]=a.current})($__dart_deferred_initializers__);