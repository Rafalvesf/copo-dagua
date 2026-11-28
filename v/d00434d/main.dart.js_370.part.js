((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,C={
d0O(d,e){return new C.apH(d,e,null)},
O1:function O1(d,e){this.a=d
this.b=e},
cC8:function cC8(){},
cC7:function cC7(){},
cC9:function cC9(){},
apH:function apH(d,e,f){this.e=d
this.f=e
this.a=f},
b22:function b22(d,e,f){this.a=d
this.b=e
this.c=f},
b21:function b21(d){this.a=d},
ON:function ON(d,e,f){this.c=d
this.d=e
this.a=f},
afe:function afe(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
cbj:function cbj(d){this.a=d},
cbk:function cbk(d){this.a=d},
cbl:function cbl(d,e){this.a=d
this.b=e},
cbm:function cbm(d){this.a=d},
cbo:function cbo(d,e){this.a=d
this.b=e},
cbn:function cbn(d,e){this.a=d
this.b=e},
a_4(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$a_4=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.akJ(),$async$a_4)
case 3:t=$.T()
s=t.b
s===$&&A.b()
w=4
return A.d(s.R("bookings").az(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").X("id",d),$async$a_4)
case 4:r=g
w=5
return A.d(t.b.R("payments").az(0,"booking_id, type, status, amount, paid_at, due_at, provider").X("booking_id",d).tJ(0,"created_at"),$async$a_4)
case 5:q=g
t=J.a7(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.i(t.gM(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
s=J.cz(s==null?"Parceiro":s)
p=s}else{s=E.cBT(s.a(J.i(t.gM(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.i(t.gM(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
o=J.cz(s==null?"":s)}u=E.cW4(p,"Reserva "+(t.gY(r)?"":G.cF1(J.i(t.gM(r),"booking_number"),o,J.i(t.gM(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a_4,v)}},D,E
J=c[1]
A=c[0]
B=c[2]
F=c[409]
G=c[149]
C=a.updateHolder(c[71],C)
D=c[408]
E=c[132]
C.O1.prototype={
gO9(d){var w=this.b
return J.o(w==null?null:J.i(w,"status"),"open")}}
C.apH.prototype={
bc(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.H($.cYT().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.ar
w=k.b
if(k.gO9(0)){l=D.a1n.h(0,w==null?q:J.i(w,"reason"))
return r.a1c("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fP,D.aCQ,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.i(w,"status"),p))v=!(!k.gO9(0)&&D.a8c.q(0,k.a))
if(v){l=$.ar
v=J.a7(w)
u=D.a1p.h(0,v.h(w,o))
if(u==null)u=n
v=A.E(v.h(w,m))
return r.a1c(v==null?"":v,l,B.i3,u)}if(!(!k.gO9(0)&&D.a8c.q(0,k.a)))return B.ar
v=x.p
u=A.a([],v)
if(l&&J.o(J.i(w,"status"),p)){l=$.ar
t=J.a7(w)
s=D.a1p.h(0,t.h(w,o))
if(s==null)s=n
t=A.E(t.h(w,m))
B.e.n(u,A.a([r.a1c(t==null?"":t,l,B.i3,s),B.ac],v))}u.push(A.Gh(D.aDD,D.ccX,new C.b22(r,d,e),A.ih(q,q,q,q,q,q,q,q,q,B.T,q,q,q,q,q,q,q,q,q,q,q)))
return A.B(u,B.I,B.i,B.m,0,B.v)},
a1c(d,e,f,g){var w=null,v=A.X(22),u=A.b2(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,w,A.aF(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.as,A.h(d,w,w,w,w,B.p4,w,w,w)],t))
return A.A(w,A.P(A.a([u,B.af,A.a4(A.B(s,B.G,B.i,B.m,0,B.v),1)],t),B.G,B.i,B.m,0,w,w),B.r,w,w,new A.M(B.t,w,w,v,B.bg,w,B.y),w,w,w,B.bj,w,w,w)}}
C.ON.prototype={
P(){return new C.afe(new A.aJ(B.ap,$.ad()))}}
C.afe.prototype={
m(){var w=this.e
w.Z$=$.ad()
w.W$=0
this.a6()},
Rf(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rf=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.C(m.a.a).length<10){r.p(new C.cbj(r))
w=1
break}r.p(new C.cbk(r))
t=4
p=$.T().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aS("open_dispute",A.S(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.C(m.a.a)],x.N,o),o),$async$Rf)
case 7:m=r.c
if(m!=null)A.an(m,!1).ak(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cU){q=m
r.p(new C.cbl(r,q))}else r.p(new C.cbm(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Rf,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d6(D.a1n,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eH(m,A.u(m).i("eH<1,2>")).gV(0);v.t();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.ar
q=s?B.t:B.A
w.push(A.rX(o,t,new A.N(!0,q,o,o,o,o,o,B.bk,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.cbo(p,u),o,s,r,!1,o))}w=A.a([D.cfu,B.aE,D.cbs,B.a1,A.eb(B.bf,w,B.r,B.bn,8,8),B.aC,A.cC(o,B.a9,!1,o,!0,B.z,o,A.cI(),p.e,o,o,o,o,o,2,B.Q9,B.a0,!0,o,!0,o,!1,o,B.aG,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.au,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.at,o,B.b1,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.X,A.h(v,o,o,o,o,D.c5r,o,o,o)],n))
w.push(B.a1)
n=p.f?o:p.gaXC()
v=A.cp(B.A,o,o,o,B.eA,o,B.ad,o,o,o)
w.push(A.bF(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o,o),n,v))
return A.dO(A.B(w,B.I,B.i,B.K,0,B.v),B.z,o,B.O2,o,o,B.a2)}}
var z=a.updateTypes(["F<O1?>(au,c)","ON(O)","F<~>()"])
C.cC8.prototype={
$2(d,e){return this.aEX(d,e)},
aEX(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.T().b
p===$&&A.b()
w=7
return A.d(p.R("bookings").az(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").X("id",e).ds(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.i(r,"disputes"))
if(p==null)p=B.am
o=J.bl(p,x.P)
o.cP(0,new C.cC7())
q=o
o=A.a2(J.i(r,"status"))
p=J.aR(q)===0?null:J.fu(q)
u=new C.O1(o,p)
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
C.cC7.prototype={
$2(d,e){var w="created_at"
return B.f.bE(A.a2(J.i(e,w)),A.a2(J.i(d,w)))},
$S:302}
C.cC9.prototype={
$2(d,e){return null},
$S:1523}
C.b22.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.cc(null,new C.b21(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.aj($.cYT().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b21.prototype={
$1(d){var w=this.a
return new C.ON(w.e,w.f,null)},
$S:z+1}
C.cbj.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.cbk.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.cbl.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.cbm.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.cbo.prototype={
$1(d){var w=this.a
return w.p(new C.cbn(w,this.b))},
$S:10}
C.cbn.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.afe.prototype,"gaXC","Rf",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.O1,A.K)
v(A.cQ,[C.cC8,C.cC7,C.cC9])
w(C.apH,A.ep)
v(A.bR,[C.b22,C.cbj,C.cbk,C.cbl,C.cbm,C.cbn])
v(A.bw,[C.b21,C.cbo])
w(C.ON,A.G)
w(C.afe,A.a_)})()
A.bp(b.typeUniverse,JSON.parse('{"ON":{"G":[],"e":[],"f":[]},"apH":{"G":[],"e":[],"f":[]},"afe":{"a_":["ON"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.w
return{v:w("ay<O1?>"),w:w("c1<c,c>"),p:w("r<e>"),P:w("a5<c,@>"),e:w("lL"),N:w("c"),y:w("x"),z:w("@"),g:w("t<@>?"),Y:w("a5<@,@>?"),q:w("O1?"),H:w("~")}})();(function constants(){D.aCQ=new A.aW(57450,"HeroiconsSolid",null,!1)
D.aDD=new A.ba(F.Ej,18,null,null,null,null)
D.bJ9={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a1n=new A.c1(D.bJ9,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bJ3={refund_full:0,refund_partial:1,partner_favor:2}
D.a1p=new A.c1(D.bJ3,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bJe={confirmed:0,completed:1,payment_overdue:2}
D.a8c=new A.ez(D.bJe,3,A.w("ez<c>"))
D.c5r=new A.N(!0,B.fP,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbs=new A.C("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,B.p4,null,null,null,null,null,null,null,null)
D.ccX=new A.C("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.cfu=new A.C("Abrir disputa",null,B.zg,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dRj","cYT",()=>B.bW.N6(0,new C.cC8(),new C.cC9(),x.q,x.N))})()};
(a=>{a["nlOX9BuCKsrAwwgezjpN2zft004="]=a.current})($__dart_deferred_initializers__);