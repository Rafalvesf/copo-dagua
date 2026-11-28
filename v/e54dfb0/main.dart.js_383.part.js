((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,C={
d4F(d,e){return new C.aql(d,e,null)},
Oj:function Oj(d,e){this.a=d
this.b=e},
cFD:function cFD(){},
cFC:function cFC(){},
cFE:function cFE(){},
aql:function aql(d,e,f){this.e=d
this.f=e
this.a=f},
b30:function b30(d,e,f){this.a=d
this.b=e
this.c=f},
b3_:function b3_(d){this.a=d},
P6:function P6(d,e,f){this.c=d
this.d=e
this.a=f},
afO:function afO(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
cdD:function cdD(d){this.a=d},
cdE:function cdE(d){this.a=d},
cdF:function cdF(d,e){this.a=d
this.b=e},
cdG:function cdG(d){this.a=d},
cdI:function cdI(d,e){this.a=d
this.b=e},
cdH:function cdH(d,e){this.a=d
this.b=e},
a_v(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$a_v=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.alo(),$async$a_v)
case 3:t=$.Q()
s=t.b
s===$&&A.b()
w=4
return A.d(s.R("bookings").ak(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("id",d),$async$a_v)
case 4:r=g
w=5
return A.d(t.b.R("payments").ak(0,"booking_id, type, status, amount, paid_at, due_at, provider").V("booking_id",d).tN(0,"created_at"),$async$a_v)
case 5:q=g
t=J.a7(r)
if(t.gZ(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.i(t.gL(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
s=J.cA(s==null?"Parceiro":s)
p=s}else{s=E.cFn(s.a(J.i(t.gL(r),"events")))
p=s}}if(t.gZ(r))o=""
else{s=x.Y.a(J.i(t.gL(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
o=J.cA(s==null?"":s)}u=E.cZQ(p,"Reserva "+(t.gZ(r)?"":H.cIB(J.i(t.gL(r),"booking_number"),o,J.i(t.gL(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a_v,v)}},D,E,F
J=c[1]
A=c[0]
B=c[2]
G=c[414]
H=c[151]
C=a.updateHolder(c[71],C)
D=c[413]
E=c[134]
F=c[196]
C.Oj.prototype={
gOA(d){var w=this.b
return J.o(w==null?null:J.i(w,"status"),"open")}}
C.aql.prototype={
bf(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.H($.d1G().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.as
w=k.b
if(k.gOA(0)){l=D.a1y.h(0,w==null?q:J.i(w,"reason"))
return r.a1Y("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fU,D.aD1,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.i(w,"status"),p))v=!(!k.gOA(0)&&D.a8i.q(0,k.a))
if(v){l=$.au
v=J.a7(w)
u=D.a1A.h(0,v.h(w,o))
if(u==null)u=n
v=A.C(v.h(w,m))
return r.a1Y(v==null?"":v,l,B.ib,u)}if(!(!k.gOA(0)&&D.a8i.q(0,k.a)))return B.as
v=x.p
u=A.a([],v)
if(l&&J.o(J.i(w,"status"),p)){l=$.au
t=J.a7(w)
s=D.a1A.h(0,t.h(w,o))
if(s==null)s=n
t=A.C(t.h(w,m))
B.e.n(u,A.a([r.a1Y(t==null?"":t,l,B.ib,s),B.ae],v))}u.push(A.Gs(D.aDM,D.cdm,new C.b30(r,d,e),A.ii(q,q,q,q,q,q,q,q,q,B.V,q,q,q,q,q,q,q,q,q,q,q)))
return A.x(u,B.G,B.h,B.l,0,B.u)},
a1Y(d,e,f,g){var w=null,v=A.W(22),u=A.b6(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,w,A.aJ(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.av,A.h(d,w,w,w,w,F.tx,w,w,w)],t))
return A.z(w,A.O(A.a([u,B.af,A.a4(A.x(s,B.H,B.h,B.l,0,B.u),1)],t),B.H,B.h,B.l,0,w,w),B.r,w,w,new A.I(B.t,w,w,v,B.bj,w,B.y),w,w,w,B.bh,w,w,w)}}
C.P6.prototype={
P(){return new C.afO(new A.aF(B.al,$.aa()))}}
C.afO.prototype={
m(){var w=this.e
w.Y$=$.aa()
w.W$=0
this.a5()},
RQ(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$RQ=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.C(m.a.a).length<10){r.p(new C.cdD(r))
w=1
break}r.p(new C.cdE(r))
t=4
p=$.Q().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aM("open_dispute",A.T(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.C(m.a.a)],x.N,o),o),$async$RQ)
case 7:m=r.c
if(m!=null)A.am(m,!1).af(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cU){q=m
r.p(new C.cdF(r,q))}else r.p(new C.cdG(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$RQ,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.dd(D.a1y,n,n)
m.M(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eK(m,A.u(m).i("eK<1,2>")).gX(0);v.t();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.au
q=s?B.t:B.A
w.push(A.t4(o,t,new A.P(!0,q,o,o,o,o,o,B.br,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.cdI(p,u),o,s,r,!1,o))}w=A.a([D.cg1,B.aH,D.cbR,B.a1,A.e2(B.bf,w,B.r,B.bm,8,8),B.aC,A.cs(o,B.a8,!1,o,!0,B.z,o,A.cu(),p.e,o,o,o,o,o,2,B.Qm,B.X,!0,o,!0,o,!1,o,B.aD,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aq,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.at,o,B.b2,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.R,A.h(v,o,o,o,o,D.c5O,o,o,o)],n))
w.push(B.a1)
n=p.f?o:p.gaYQ()
v=A.co(B.A,o,o,o,B.eC,o,B.ad,o,o,o)
w.push(A.bG(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o,o),n,v))
return A.dR(A.x(w,B.G,B.h,B.K,0,B.u),B.z,o,B.O8,o,o,B.a2)}}
var z=a.updateTypes(["F<Oj?>(av,c)","P6(N)","F<~>()"])
C.cFD.prototype={
$2(d,e){return this.aG7(d,e)},
aG7(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.Q().b
p===$&&A.b()
w=7
return A.d(p.R("bookings").ak(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").V("id",e).cm(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.i(r,"disputes"))
if(p==null)p=B.am
o=J.bi(p,x.P)
o.cC(0,new C.cFC())
q=o
o=A.Z(J.i(r,"status"))
p=J.aR(q)===0?null:J.fx(q)
u=new C.Oj(o,p)
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
C.cFC.prototype={
$2(d,e){var w="created_at"
return B.f.bE(A.Z(J.i(e,w)),A.Z(J.i(d,w)))},
$S:307}
C.cFE.prototype={
$2(d,e){return null},
$S:1528}
C.b30.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.bZ(null,new C.b3_(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.al($.d1G().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b3_.prototype={
$1(d){var w=this.a
return new C.P6(w.e,w.f,null)},
$S:z+1}
C.cdD.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.cdE.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.cdF.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.cdG.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.cdI.prototype={
$1(d){var w=this.a
return w.p(new C.cdH(w,this.b))},
$S:10}
C.cdH.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.afO.prototype,"gaYQ","RQ",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.Oj,A.L)
v(A.cL,[C.cFD,C.cFC,C.cFE])
w(C.aql,A.ex)
v(A.bQ,[C.b30,C.cdD,C.cdE,C.cdF,C.cdG,C.cdH])
v(A.bw,[C.b3_,C.cdI])
w(C.P6,A.G)
w(C.afO,A.Y)})()
A.bs(b.typeUniverse,JSON.parse('{"P6":{"G":[],"e":[],"f":[]},"aql":{"G":[],"e":[],"f":[]},"afO":{"Y":["P6"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.w
return{v:w("az<Oj?>"),w:w("c5<c,c>"),p:w("r<e>"),P:w("a5<c,@>"),e:w("lQ"),N:w("c"),y:w("y"),z:w("@"),g:w("t<@>?"),Y:w("a5<@,@>?"),q:w("Oj?"),H:w("~")}})();(function constants(){D.aD1=new A.aV(57450,"HeroiconsSolid",null,!1)
D.aDM=new A.b7(G.Ep,18,null,null,null,null)
D.bJs={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a1y=new A.c5(D.bJs,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bJm={refund_full:0,refund_partial:1,partner_favor:2}
D.a1A=new A.c5(D.bJm,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bJx={confirmed:0,completed:1,payment_overdue:2}
D.a8i=new A.eA(D.bJx,3,A.w("eA<c>"))
D.c5O=new A.P(!0,B.fU,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbR=new A.D("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,F.tx,null,null,null,null,null,null,null,null)
D.cdm=new A.D("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.cg1=new A.D("Abrir disputa",null,B.zx,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dVr","d1G",()=>B.bX.Nx(0,new C.cFD(),new C.cFE(),x.q,x.N))})()};
(a=>{a["bajrZgJSOZCC26n8RWerb+reqiE="]=a.current})($__dart_deferred_initializers__);