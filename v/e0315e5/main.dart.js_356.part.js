((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,C={
cOF(d,e){return new C.amL(d,e,null)},
MN:function MN(d,e){this.a=d
this.b=e},
cqS:function cqS(){},
cqR:function cqR(){},
cqT:function cqT(){},
amL:function amL(d,e,f){this.e=d
this.f=e
this.a=f},
aYA:function aYA(d,e,f){this.a=d
this.b=e
this.c=f},
aYz:function aYz(d){this.a=d},
Nx:function Nx(d,e,f){this.c=d
this.d=e
this.a=f},
acQ:function acQ(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
c28:function c28(d){this.a=d},
c29:function c29(d){this.a=d},
c2a:function c2a(d,e){this.a=d
this.b=e},
c2b:function c2b(d){this.a=d},
c2d:function c2d(d,e){this.a=d
this.b=e},
c2c:function c2c(d,e){this.a=d
this.b=e},
Yg(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$Yg=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.ai4(),$async$Yg)
case 3:t=$.R()
s=t.b
s===$&&A.b()
w=4
return A.d(s.T("bookings").aG(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").X("id",d),$async$Yg)
case 4:r=g
w=5
return A.d(t.b.T("payments").aG(0,"booking_id, type, status, amount, paid_at, due_at, provider").X("booking_id",d).xJ(0,"created_at"),$async$Yg)
case 5:q=g
t=J.a5(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.h(t.gN(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
s=J.cL(s==null?"Parceiro":s)
p=s}else{s=E.cqD(s.a(J.h(t.gN(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.h(t.gN(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
o=J.cL(s==null?"":s)}u=E.cJc(p,"Reserva "+(t.gY(r)?"":G.cto(J.h(t.gN(r),"booking_number"),o)),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Yg,v)}},D,E
J=c[1]
A=c[0]
B=c[2]
F=c[411]
G=c[140]
C=a.updateHolder(c[68],C)
D=c[199]
E=c[126]
C.MN.prototype={
gNk(d){var w=this.b
return J.p(w==null?null:J.h(w,"status"),"open")}}
C.amL.prototype={
bg(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.L($.cLP().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.aq
w=k.b
if(k.gNk(0)){l=D.a_G.h(0,w==null?q:J.h(w,"reason"))
return r.a06("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.eR,D.aA9,"Em disputa")}l=w!=null
v=!1
if(l)if(J.p(J.h(w,"status"),p))v=!(!k.gNk(0)&&D.a6g.n(0,k.a))
if(v){l=$.al
v=J.a5(w)
u=D.a_I.h(0,v.h(w,o))
if(u==null)u=n
v=A.L(v.h(w,m))
return r.a06(v==null?"":v,l,B.jX,u)}if(!(!k.gNk(0)&&D.a6g.n(0,k.a)))return B.aq
v=x.p
u=A.a([],v)
if(l&&J.p(J.h(w,"status"),p)){l=$.al
t=J.a5(w)
s=D.a_I.h(0,t.h(w,o))
if(s==null)s=n
t=A.L(t.h(w,m))
B.e.p(u,A.a([r.a06(t==null?"":t,l,B.jX,s),B.a8],v))}u.push(A.AL(D.aAQ,D.c7q,new C.aYA(r,d,e),A.hM(q,q,q,q,q,q,q,q,q,B.P,q,q,q,q,q,q,q,q,q,q,q)))
return A.G(u,B.I,B.l,B.q,0,B.w)},
a06(d,e,f,g){var w=null,v=A.W(22),u=A.b9(f,e,w,w,22),t=x.p,s=A.a([A.i(g,w,w,w,A.aH(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.p(s,A.a([B.au,A.i(d,w,w,w,B.of,w,w,w)],t))
return A.F(w,A.Y(A.a([u,B.ao,A.a9(A.G(s,B.J,B.l,B.q,0,B.w),1)],t),B.J,B.l,B.q,0,w,w),B.r,w,w,new A.M(B.u,w,w,v,B.aH,w,B.y),w,w,w,B.bc,w,w,w)}}
C.Nx.prototype={
R(){return new C.acQ(new A.aG(B.al,$.ae()))}}
C.acQ.prototype={
m(){var w=this.e
w.a0$=$.ae()
w.V$=0
this.a8()},
Qo(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qo=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.D(m.a.a).length<10){r.q(new C.c28(r))
w=1
break}r.q(new C.c29(r))
t=4
p=$.R().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.b2("open_dispute",A.Q(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.D(m.a.a)],x.N,o),o),$async$Qo)
case 7:m=r.c
if(m!=null)A.av(m,!1).aD(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a7(l)
if(m instanceof A.cV){q=m
r.q(new C.c2a(r,q))}else r.q(new C.c2b(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Qo,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d8(D.a_G,n,n)
m.J(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eF(m,A.u(m).i("eF<1,2>")).gW(0);v.t();){u=v.d
t=A.i(u.b,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.al
q=s?B.u:B.A
w.push(A.rb(o,t,new A.H(!0,q,o,o,o,o,o,B.bf,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.c2d(p,u),o,s,r,!1,o))}w=A.a([D.c9T,B.aD,D.c6_,B.a9,A.et(B.bj,w,B.r,B.bE,8,8),B.ai,A.cR(o,B.a7,!1,o,!0,B.z,o,A.cS(),p.e,o,o,o,o,o,2,B.Oz,B.a2,!0,o,!0,o,!1,o,B.aM,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.az,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.at,o,B.b9,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.p(w,A.a([B.a1,A.i(v,o,o,o,D.c09,o,o,o)],n))
w.push(B.a9)
n=p.f?o:p.gaVa()
v=A.cf(B.A,o,o,o,B.e4,o,B.ac,o,o,o)
w.push(A.bD(A.i(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o),n,v))
return A.ej(A.G(w,B.I,B.l,B.U,0,B.w),B.z,o,B.Ms,o,B.a0)}}
var z=a.updateTypes(["E<MN?>(at,c)","Nx(N)","E<~>()"])
C.cqS.prototype={
$2(d,e){return this.aD3(d,e)},
aD3(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.R().b
p===$&&A.b()
w=7
return A.d(p.T("bookings").aG(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").X("id",e).e0(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.h(r,"disputes"))
if(p==null)p=B.an
o=J.bw(p,x.P)
o.d6(0,new C.cqR())
q=o
o=A.a2(J.h(r,"status"))
p=J.aU(q)===0?null:J.ha(q)
u=new C.MN(o,p)
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
C.cqR.prototype={
$2(d,e){var w="created_at"
return B.f.bE(A.a2(J.h(e,w)),A.a2(J.h(d,w)))},
$S:371}
C.cqT.prototype={
$2(d,e){return null},
$S:1431}
C.aYA.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.bG(null,new C.aYz(t),u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.al($.cLP().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:2}
C.aYz.prototype={
$1(d){var w=this.a
return new C.Nx(w.e,w.f,null)},
$S:z+1}
C.c28.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.c29.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.c2a.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.c2b.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.c2d.prototype={
$1(d){var w=this.a
return w.q(new C.c2c(w,this.b))},
$S:10}
C.c2c.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.acQ.prototype,"gaVa","Qo",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.MN,A.J)
v(A.cM,[C.cqS,C.cqR,C.cqT])
w(C.amL,A.eD)
v(A.bM,[C.aYA,C.c28,C.c29,C.c2a,C.c2b,C.c2c])
v(A.bv,[C.aYz,C.c2d])
w(C.Nx,A.I)
w(C.acQ,A.a1)})()
A.bt(b.typeUniverse,JSON.parse('{"Nx":{"I":[],"e":[],"f":[]},"amL":{"I":[],"e":[],"f":[]},"acQ":{"a1":["Nx"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.w
return{v:w("aE<MN?>"),w:w("c6<c,c>"),p:w("r<e>"),P:w("a3<c,@>"),e:w("lr"),N:w("c"),y:w("z"),z:w("@"),g:w("t<@>?"),Y:w("a3<@,@>?"),q:w("MN?"),H:w("~")}})();(function constants(){D.aA9=new A.aQ(57450,"HeroiconsSolid",null,!1)
D.aAQ=new A.b3(F.Db,18,null,null,null,null)
D.bFx={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a_G=new A.c6(D.bFx,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bFr={refund_full:0,refund_partial:1,partner_favor:2}
D.a_I=new A.c6(D.bFr,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.Ca=new A.a0(4,0,0,8)
D.bFB={confirmed:0,completed:1,payment_overdue:2}
D.a6g=new A.em(D.bFB,3,A.w("em<c>"))
D.c09=new A.H(!0,B.eR,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6_=new A.C("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,B.of,null,null,null,null,null,null,null,null)
D.c7q=new A.C("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.c9T=new A.C("Abrir disputa",null,B.oh,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dCz","cLP",()=>B.cj.W_(0,new C.cqS(),new C.cqT(),x.q,x.N))})()};
(a=>{a["6WYLqj8IoSXuKbEjaQEz3VxsGiw="]=a.current})($__dart_deferred_initializers__);