((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,C={
cIg(d,e){return new C.akQ(d,e,null)},
LH:function LH(d,e){this.a=d
this.b=e},
ckK:function ckK(){},
ckJ:function ckJ(){},
ckL:function ckL(){},
akQ:function akQ(d,e,f){this.e=d
this.f=e
this.a=f},
aUO:function aUO(d,e,f){this.a=d
this.b=e
this.c=f},
aUN:function aUN(d){this.a=d},
Ms:function Ms(d,e,f){this.c=d
this.d=e
this.a=f},
ab5:function ab5(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
bWu:function bWu(d){this.a=d},
bWv:function bWv(d){this.a=d},
bWw:function bWw(d,e){this.a=d
this.b=e},
bWx:function bWx(d){this.a=d},
bWz:function bWz(d,e){this.a=d
this.b=e},
bWy:function bWy(d,e){this.a=d
this.b=e},
WF(d,e){var w=0,v=A.m(x.e),u,t,s,r,q,p,o
var $async$WF=A.i(function(f,g){if(f===1)return A.j(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.agi(),$async$WF)
case 3:t=$.Q()
s=t.b
s===$&&A.b()
w=4
return A.d(s.P("bookings").az(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").W("id",d),$async$WF)
case 4:r=g
w=5
return A.d(t.b.P("payments").az(0,"booking_id, type, status, amount, paid_at, due_at, provider").W("booking_id",d).x6(0,"created_at"),$async$WF)
case 5:q=g
t=J.a3(r)
if(t.gZ(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.f(t.gO(r),"partner_profiles"))
s=s==null?null:J.f(s,"business_name")
s=J.d1(s==null?"Parceiro":s)
p=s}else{s=E.cku(s.a(J.f(t.gO(r),"events")))
p=s}}if(t.gZ(r))o=""
else{s=x.Y.a(J.f(t.gO(r),"partner_profiles"))
s=s==null?null:J.f(s,"business_name")
o=J.d1(s==null?"":s)}u=E.cCU(p,"Reserva "+(t.gZ(r)?"":G.cnm(J.f(t.gO(r),"booking_number"),o)),r,q,e)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$WF,v)}},D,E
J=c[1]
A=c[0]
B=c[2]
F=c[418]
G=c[139]
C=a.updateHolder(c[68],C)
D=c[203]
E=c[126]
C.LH.prototype={
gMp(d){var w=this.b
return J.n(w==null?null:J.f(w,"status"),"open")}}
C.akQ.prototype={
bc(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.M($.cFw().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.aq
w=k.b
if(k.gMp(0)){l=D.a_c.h(0,w==null?q:J.f(w,"reason"))
return r.ZZ("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.eQ,D.azk,"Em disputa")}l=w!=null
v=!1
if(l)if(J.n(J.f(w,"status"),p))v=!(!k.gMp(0)&&D.a5L.n(0,k.a))
if(v){l=$.ag
v=J.a3(w)
u=D.a_e.h(0,v.h(w,o))
if(u==null)u=n
v=A.I(v.h(w,m))
return r.ZZ(v==null?"":v,l,B.jP,u)}if(!(!k.gMp(0)&&D.a5L.n(0,k.a)))return B.aq
v=x.p
u=A.a([],v)
if(l&&J.n(J.f(w,"status"),p)){l=$.ag
t=J.a3(w)
s=D.a_e.h(0,t.h(w,o))
if(s==null)s=n
t=A.I(t.h(w,m))
B.e.q(u,A.a([r.ZZ(t==null?"":t,l,B.jP,s),B.aa],v))}u.push(A.A6(D.aA0,D.c6X,new C.aUO(r,d,e),A.hF(q,q,q,q,q,q,q,q,q,B.P,q,q,q,q,q,q,q,q,q,q,q)))
return A.D(u,B.J,B.j,B.q,0,B.w)},
ZZ(d,e,f,g){var w=null,v=A.W(22),u=A.b0(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,A.aF(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.q(s,A.a([B.av,A.h(d,w,w,w,B.o4,w,w,w)],t))
return A.B(w,A.S(A.a([u,B.ai,A.a5(A.D(s,B.I,B.j,B.q,0,B.w),1)],t),B.I,B.j,B.q,0,w,w),B.r,w,w,new A.J(B.u,w,w,v,B.aJ,w,B.y),w,w,w,B.b8,w,w,w)}}
C.Ms.prototype={
S(){return new C.ab5(new A.aE(B.am,$.ac()))}}
C.ab5.prototype={
m(){var w=this.e
w.T$=$.ac()
w.X$=0
this.a5()},
Pq(){var w=0,v=A.m(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pq=A.i(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.D(m.a.a).length<10){r.p(new C.bWu(r))
w=1
break}r.p(new C.bWv(r))
t=4
p=$.Q().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aT("open_dispute",A.U(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.D(m.a.a)],x.N,o),o),$async$Pq)
case 7:m=r.c
if(m!=null)A.ar(m,!1).ap(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.af(l)
if(m instanceof A.cT){q=m
r.p(new C.bWw(r,q))}else r.p(new C.bWx(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$Pq,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.dc(D.a_c,n,n)
m.L(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eM(m,A.t(m).i("eM<1,2>")).gY(0);v.t();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.ag
q=s?B.u:B.z
w.push(A.qO(o,t,new A.E(!0,q,o,o,o,o,o,B.be,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.bWz(p,u),o,s,r,!1,o))}w=A.a([D.c9t,B.aA,D.c5t,B.a7,A.eg(B.bh,w,B.r,B.bw,8,8),B.al,A.cP(o,B.ab,!1,o,!0,B.A,o,A.cQ(),p.e,o,o,o,o,o,2,B.O4,B.a2,!0,o,!0,o,!1,o,B.aO,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ay,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.at,o,B.bb,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.q(w,A.a([B.Z,A.h(v,o,o,o,D.c_x,o,o,o)],n))
w.push(B.a7)
n=p.f?o:p.gaSt()
v=A.c3(B.z,o,o,o,B.e2,o,B.a8,o,o,o)
w.push(A.by(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o),n,v))
return A.e9(A.D(w,B.J,B.j,B.V,0,B.w),B.A,o,B.M1,o,B.a_)}}
var z=a.updateTypes(["G<LH?>(at,c)","Ms(M)","G<~>()"])
C.ckK.prototype={
$2(d,e){return this.aAI(d,e)},
aAI(d,e){var w=0,v=A.m(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.i(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.Q().b
p===$&&A.b()
w=7
return A.d(p.P("bookings").az(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").W("id",e).dv(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.f(r,"disputes"))
if(p==null)p=B.an
o=J.bv(p,x.P)
o.cY(0,new C.ckJ())
q=o
o=A.a1(J.f(r,"status"))
p=J.b2(q)===0?null:J.h0(q)
u=new C.LH(o,p)
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
case 6:case 1:return A.k(u,v)
case 2:return A.j(s.at(-1),v)}})
return A.l($async$$2,v)},
$S:z+0}
C.ckJ.prototype={
$2(d,e){var w="created_at"
return B.f.bB(A.a1(J.f(e,w)),A.a1(J.f(d,w)))},
$S:272}
C.ckL.prototype={
$2(d,e){return null},
$S:1355}
C.aUO.prototype={
$0(){var w=0,v=A.m(x.H),u=this,t
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.cx(null,new C.aUN(t),!0,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.ai($.cFw().$1(t.e))
return A.k(null,v)}})
return A.l($async$$0,v)},
$S:2}
C.aUN.prototype={
$1(d){var w=this.a
return new C.Ms(w.e,w.f,null)},
$S:z+1}
C.bWu.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.bWv.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.bWw.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.bWx.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.bWz.prototype={
$1(d){var w=this.a
return w.p(new C.bWy(w,this.b))},
$S:10}
C.bWy.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.ab5.prototype,"gaSt","Pq",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.LH,A.H)
v(A.cG,[C.ckK,C.ckJ,C.ckL])
w(C.akQ,A.es)
v(A.bI,[C.aUO,C.bWu,C.bWv,C.bWw,C.bWx,C.bWy])
v(A.bq,[C.aUN,C.bWz])
w(C.Ms,A.F)
w(C.ab5,A.a_)})()
A.bj(b.typeUniverse,JSON.parse('{"Ms":{"F":[],"e":[]},"akQ":{"F":[],"e":[]},"ab5":{"a_":["Ms"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.u
return{v:w("aA<LH?>"),w:w("c6<c,c>"),p:w("q<e>"),P:w("a6<c,@>"),e:w("lc"),N:w("c"),y:w("y"),z:w("@"),g:w("r<@>?"),Y:w("a6<@,@>?"),q:w("LH?"),H:w("~")}})();(function constants(){D.azk=new A.aO(57450,"HeroiconsSolid",null,!1)
D.aA0=new A.aZ(F.CN,18,null,null,null,null)
D.bEG={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a_c=new A.c6(D.bEG,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bEA={refund_full:0,refund_partial:1,partner_favor:2}
D.a_e=new A.c6(D.bEA,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.BL=new A.Z(4,0,0,8)
D.bEK={confirmed:0,completed:1,payment_overdue:2}
D.a5L=new A.eh(D.bEK,3,A.u("eh<c>"))
D.c_x=new A.E(!0,B.eQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5t=new A.z("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,B.o4,null,null,null,null,null,null,null,null)
D.c6X=new A.z("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.c9t=new A.z("Abrir disputa",null,B.o6,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dsX","cFw",()=>B.cb.V0(0,new C.ckK(),new C.ckL(),x.q,x.N))})()};
(a=>{a["0ThKE8hOkMSgI8BpXWAHrpLuj+o="]=a.current})($__dart_deferred_initializers__);