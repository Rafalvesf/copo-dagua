((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,C={
cOO(d,e){return new C.amO(d,e,null)},
MP:function MP(d,e){this.a=d
this.b=e},
cr1:function cr1(){},
cr0:function cr0(){},
cr2:function cr2(){},
amO:function amO(d,e,f){this.e=d
this.f=e
this.a=f},
aYy:function aYy(d,e,f){this.a=d
this.b=e
this.c=f},
aYx:function aYx(d){this.a=d},
Nz:function Nz(d,e,f){this.c=d
this.d=e
this.a=f},
acU:function acU(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
c2e:function c2e(d){this.a=d},
c2f:function c2f(d){this.a=d},
c2g:function c2g(d,e){this.a=d
this.b=e},
c2h:function c2h(d){this.a=d},
c2j:function c2j(d,e){this.a=d
this.b=e},
c2i:function c2i(d,e){this.a=d
this.b=e},
Yi(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$Yi=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.ai5(),$async$Yi)
case 3:t=$.R()
s=t.b
s===$&&A.b()
w=4
return A.d(s.S("bookings").aG(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").X("id",d),$async$Yi)
case 4:r=g
w=5
return A.d(t.b.S("payments").aG(0,"booking_id, type, status, amount, paid_at, due_at, provider").X("booking_id",d).xJ(0,"created_at"),$async$Yi)
case 5:q=g
t=J.a5(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.h(t.gN(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
s=J.cL(s==null?"Parceiro":s)
p=s}else{s=E.cqN(s.a(J.h(t.gN(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.h(t.gN(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
o=J.cL(s==null?"":s)}u=E.cJm(p,"Reserva "+(t.gY(r)?"":G.cty(J.h(t.gN(r),"booking_number"),o)),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Yi,v)}},D,E
J=c[1]
A=c[0]
B=c[2]
F=c[409]
G=c[140]
C=a.updateHolder(c[68],C)
D=c[199]
E=c[126]
C.MP.prototype={
gNk(d){var w=this.b
return J.p(w==null?null:J.h(w,"status"),"open")}}
C.amO.prototype={
bg(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.L($.cLY().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.aq
w=k.b
if(k.gNk(0)){l=D.a_M.h(0,w==null?q:J.h(w,"reason"))
return r.a05("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.f7,D.aAa,"Em disputa")}l=w!=null
v=!1
if(l)if(J.p(J.h(w,"status"),p))v=!(!k.gNk(0)&&D.a6k.n(0,k.a))
if(v){l=$.an
v=J.a5(w)
u=D.a_O.h(0,v.h(w,o))
if(u==null)u=n
v=A.L(v.h(w,m))
return r.a05(v==null?"":v,l,B.jX,u)}if(!(!k.gNk(0)&&D.a6k.n(0,k.a)))return B.aq
v=x.p
u=A.a([],v)
if(l&&J.p(J.h(w,"status"),p)){l=$.an
t=J.a5(w)
s=D.a_O.h(0,t.h(w,o))
if(s==null)s=n
t=A.L(t.h(w,m))
B.e.p(u,A.a([r.a05(t==null?"":t,l,B.jX,s),B.a8],v))}u.push(A.AL(D.aAP,D.c7t,new C.aYy(r,d,e),A.hM(q,q,q,q,q,q,q,q,q,B.Q,q,q,q,q,q,q,q,q,q,q,q)))
return A.G(u,B.I,B.l,B.q,0,B.w)},
a05(d,e,f,g){var w=null,v=A.X(22),u=A.b6(f,e,w,w,22),t=x.p,s=A.a([A.i(g,w,w,w,A.aH(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.p(s,A.a([B.au,A.i(d,w,w,w,B.og,w,w,w)],t))
return A.F(w,A.Y(A.a([u,B.am,A.a9(A.G(s,B.J,B.l,B.q,0,B.w),1)],t),B.J,B.l,B.q,0,w,w),B.r,w,w,new A.M(B.u,w,w,v,B.aK,w,B.y),w,w,w,B.bc,w,w,w)}}
C.Nz.prototype={
P(){return new C.acU(new A.aG(B.al,$.ad()))}}
C.acU.prototype={
m(){var w=this.e
w.a0$=$.ad()
w.V$=0
this.a8()},
Qo(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qo=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.D(m.a.a).length<10){r.q(new C.c2e(r))
w=1
break}r.q(new C.c2f(r))
t=4
p=$.R().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.b2("open_dispute",A.Q(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.D(m.a.a)],x.N,o),o),$async$Qo)
case 7:m=r.c
if(m!=null)A.av(m,!1).aC(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a7(l)
if(m instanceof A.cV){q=m
r.q(new C.c2g(r,q))}else r.q(new C.c2h(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Qo,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d8(D.a_M,n,n)
m.J(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eE(m,A.u(m).i("eE<1,2>")).gW(0);v.t();){u=v.d
t=A.i(u.b,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.an
q=s?B.u:B.A
w.push(A.rb(o,t,new A.H(!0,q,o,o,o,o,o,B.bg,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.c2j(p,u),o,s,r,!1,o))}w=A.a([D.c9X,B.aD,D.c61,B.aa,A.ey(B.bk,w,B.r,B.bI,8,8),B.ai,A.cR(o,B.a7,!1,o,!0,B.z,o,A.cS(),p.e,o,o,o,o,o,2,B.OF,B.a2,!0,o,!0,o,!1,o,B.aM,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aB,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.at,o,B.b9,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.p(w,A.a([B.a1,A.i(v,o,o,o,D.c0b,o,o,o)],n))
w.push(B.aa)
n=p.f?o:p.gaV8()
v=A.cf(B.A,o,o,o,B.e3,o,B.ac,o,o,o)
w.push(A.bD(A.i(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o),n,v))
return A.ek(A.G(w,B.I,B.l,B.U,0,B.w),B.z,o,B.Mv,o,B.a0)}}
var z=a.updateTypes(["E<MP?>(at,c)","Nz(N)","E<~>()"])
C.cr1.prototype={
$2(d,e){return this.aD2(d,e)},
aD2(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.R().b
p===$&&A.b()
w=7
return A.d(p.S("bookings").aG(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").X("id",e).e0(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.h(r,"disputes"))
if(p==null)p=B.an
o=J.bw(p,x.P)
o.cY(0,new C.cr0())
q=o
o=A.a2(J.h(r,"status"))
p=J.aU(q)===0?null:J.ha(q)
u=new C.MP(o,p)
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
C.cr0.prototype={
$2(d,e){var w="created_at"
return B.f.bC(A.a2(J.h(e,w)),A.a2(J.h(d,w)))},
$S:348}
C.cr2.prototype={
$2(d,e){return null},
$S:1429}
C.aYy.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.bG(null,new C.aYx(t),u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.al($.cLY().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:2}
C.aYx.prototype={
$1(d){var w=this.a
return new C.Nz(w.e,w.f,null)},
$S:z+1}
C.c2e.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.c2f.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.c2g.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.c2h.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.c2j.prototype={
$1(d){var w=this.a
return w.q(new C.c2i(w,this.b))},
$S:10}
C.c2i.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.acU.prototype,"gaV8","Qo",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.MP,A.J)
v(A.cM,[C.cr1,C.cr0,C.cr2])
w(C.amO,A.eC)
v(A.bN,[C.aYy,C.c2e,C.c2f,C.c2g,C.c2h,C.c2i])
v(A.bv,[C.aYx,C.c2j])
w(C.Nz,A.I)
w(C.acU,A.a1)})()
A.bt(b.typeUniverse,JSON.parse('{"Nz":{"I":[],"e":[],"f":[]},"amO":{"I":[],"e":[],"f":[]},"acU":{"a1":["Nz"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.w
return{v:w("aE<MP?>"),w:w("c6<c,c>"),p:w("r<e>"),P:w("a3<c,@>"),e:w("lr"),N:w("c"),y:w("z"),z:w("@"),g:w("t<@>?"),Y:w("a3<@,@>?"),q:w("MP?"),H:w("~")}})();(function constants(){D.aAa=new A.aQ(57450,"HeroiconsSolid",null,!1)
D.aAP=new A.b5(F.D8,18,null,null,null,null)
D.bFv={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a_M=new A.c6(D.bFv,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bFp={refund_full:0,refund_partial:1,partner_favor:2}
D.a_O=new A.c6(D.bFp,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.C9=new A.a0(4,0,0,8)
D.bFz={confirmed:0,completed:1,payment_overdue:2}
D.a6k=new A.en(D.bFz,3,A.w("en<c>"))
D.c0b=new A.H(!0,B.f7,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c61=new A.B("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,B.og,null,null,null,null,null,null,null,null)
D.c7t=new A.B("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.c9X=new A.B("Abrir disputa",null,B.oi,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dCL","cLY",()=>B.cj.VZ(0,new C.cr1(),new C.cr2(),x.q,x.N))})()};
(a=>{a["qTkrKpBWz8yP0utAIupk+RrX+e4="]=a.current})($__dart_deferred_initializers__);