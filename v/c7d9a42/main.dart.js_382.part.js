((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,C={
d1Z(d,e){return new C.apR(d,e,null)},
O5:function O5(d,e){this.a=d
this.b=e},
cDg:function cDg(){},
cDf:function cDf(){},
cDh:function cDh(){},
apR:function apR(d,e,f){this.e=d
this.f=e
this.a=f},
b2i:function b2i(d,e,f){this.a=d
this.b=e
this.c=f},
b2h:function b2h(d){this.a=d},
OS:function OS(d,e,f){this.c=d
this.d=e
this.a=f},
afm:function afm(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
cbM:function cbM(d){this.a=d},
cbN:function cbN(d){this.a=d},
cbO:function cbO(d,e){this.a=d
this.b=e},
cbP:function cbP(d){this.a=d},
cbR:function cbR(d,e){this.a=d
this.b=e},
cbQ:function cbQ(d,e){this.a=d
this.b=e},
a_d(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$a_d=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.akS(),$async$a_d)
case 3:t=$.S()
s=t.b
s===$&&A.b()
w=4
return A.d(s.R("bookings").an(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").W("id",d),$async$a_d)
case 4:r=g
w=5
return A.d(t.b.R("payments").an(0,"booking_id, type, status, amount, paid_at, due_at, provider").W("booking_id",d).tK(0,"created_at"),$async$a_d)
case 5:q=g
t=J.a7(r)
if(t.gZ(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.i(t.gM(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
s=J.cA(s==null?"Parceiro":s)
p=s}else{s=E.cD0(s.a(J.i(t.gM(r),"events")))
p=s}}if(t.gZ(r))o=""
else{s=x.Y.a(J.i(t.gM(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
o=J.cA(s==null?"":s)}u=E.cXf(p,"Reserva "+(t.gZ(r)?"":H.cGa(J.i(t.gM(r),"booking_number"),o,J.i(t.gM(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a_d,v)}},D,E,F
J=c[1]
A=c[0]
B=c[2]
G=c[411]
H=c[150]
C=a.updateHolder(c[71],C)
D=c[410]
E=c[133]
F=c[194]
C.O5.prototype={
gOi(d){var w=this.b
return J.o(w==null?null:J.i(w,"status"),"open")}}
C.apR.prototype={
bg(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.H($.d_3().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.at
w=k.b
if(k.gOi(0)){l=D.a1p.h(0,w==null?q:J.i(w,"reason"))
return r.a1p("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fQ,D.aCK,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.i(w,"status"),p))v=!(!k.gOi(0)&&D.a8a.q(0,k.a))
if(v){l=$.at
v=J.a7(w)
u=D.a1r.h(0,v.h(w,o))
if(u==null)u=n
v=A.D(v.h(w,m))
return r.a1p(v==null?"":v,l,B.i5,u)}if(!(!k.gOi(0)&&D.a8a.q(0,k.a)))return B.at
v=x.p
u=A.a([],v)
if(l&&J.o(J.i(w,"status"),p)){l=$.at
t=J.a7(w)
s=D.a1r.h(0,t.h(w,o))
if(s==null)s=n
t=A.D(t.h(w,m))
B.e.n(u,A.a([r.a1p(t==null?"":t,l,B.i5,s),B.ac],v))}u.push(A.Gl(D.aDv,D.cd0,new C.b2i(r,d,e),A.ih(q,q,q,q,q,q,q,q,q,B.U,q,q,q,q,q,q,q,q,q,q,q)))
return A.A(u,B.G,B.h,B.l,0,B.u)},
a1p(d,e,f,g){var w=null,v=A.W(22),u=A.b3(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,w,A.aH(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.au,A.h(d,w,w,w,w,F.tp,w,w,w)],t))
return A.B(w,A.N(A.a([u,B.af,A.a4(A.A(s,B.H,B.h,B.l,0,B.u),1)],t),B.H,B.h,B.l,0,w,w),B.r,w,w,new A.M(B.t,w,w,v,B.bh,w,B.y),w,w,w,B.bj,w,w,w)}}
C.OS.prototype={
P(){return new C.afm(new A.aE(B.al,$.aa()))}}
C.afm.prototype={
m(){var w=this.e
w.Y$=$.aa()
w.V$=0
this.a6()},
Rr(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rr=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.C(m.a.a).length<10){r.p(new C.cbM(r))
w=1
break}r.p(new C.cbN(r))
t=4
p=$.S().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aM("open_dispute",A.T(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.C(m.a.a)],x.N,o),o),$async$Rr)
case 7:m=r.c
if(m!=null)A.am(m,!1).ad(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cT){q=m
r.p(new C.cbO(r,q))}else r.p(new C.cbP(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Rr,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d8(D.a1p,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eI(m,A.u(m).i("eI<1,2>")).gX(0);v.t();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.at
q=s?B.t:B.A
w.push(A.rY(o,t,new A.P(!0,q,o,o,o,o,o,B.bq,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.cbR(p,u),o,s,r,!1,o))}w=A.a([D.cfD,B.aF,D.cbv,B.a1,A.e0(B.bf,w,B.r,B.bl,8,8),B.aC,A.cr(o,B.a8,!1,o,!0,B.z,o,A.cw(),p.e,o,o,o,o,o,2,B.Qc,B.Z,!0,o,!0,o,!1,o,B.aD,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ar,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.aq,o,B.b2,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.S,A.h(v,o,o,o,o,D.c5t,o,o,o)],n))
w.push(B.a1)
n=p.f?o:p.gaY_()
v=A.cq(B.A,o,o,o,B.eC,o,B.ad,o,o,o)
w.push(A.bE(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o,o),n,v))
return A.dQ(A.A(w,B.G,B.h,B.K,0,B.u),B.z,o,B.O2,o,o,B.a2)}}
var z=a.updateTypes(["F<O5?>(au,c)","OS(O)","F<~>()"])
C.cDg.prototype={
$2(d,e){return this.aFh(d,e)},
aFh(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.S().b
p===$&&A.b()
w=7
return A.d(p.R("bookings").an(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").W("id",e).d0(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.i(r,"disputes"))
if(p==null)p=B.am
o=J.bl(p,x.P)
o.cO(0,new C.cDf())
q=o
o=A.a1(J.i(r,"status"))
p=J.aR(q)===0?null:J.ft(q)
u=new C.O5(o,p)
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
C.cDf.prototype={
$2(d,e){var w="created_at"
return B.f.bE(A.a1(J.i(e,w)),A.a1(J.i(d,w)))},
$S:373}
C.cDh.prototype={
$2(d,e){return null},
$S:1522}
C.b2i.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.c9(null,new C.b2h(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.ak($.d_3().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b2h.prototype={
$1(d){var w=this.a
return new C.OS(w.e,w.f,null)},
$S:z+1}
C.cbM.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.cbN.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.cbO.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.cbP.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.cbR.prototype={
$1(d){var w=this.a
return w.p(new C.cbQ(w,this.b))},
$S:10}
C.cbQ.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.afm.prototype,"gaY_","Rr",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.O5,A.J)
v(A.cO,[C.cDg,C.cDf,C.cDh])
w(C.apR,A.eq)
v(A.bQ,[C.b2i,C.cbM,C.cbN,C.cbO,C.cbP,C.cbQ])
v(A.bx,[C.b2h,C.cbR])
w(C.OS,A.G)
w(C.afm,A.Z)})()
A.bn(b.typeUniverse,JSON.parse('{"OS":{"G":[],"e":[],"f":[]},"apR":{"G":[],"e":[],"f":[]},"afm":{"Z":["OS"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.w
return{v:w("ay<O5?>"),w:w("c2<c,c>"),p:w("r<e>"),P:w("a5<c,@>"),e:w("lM"),N:w("c"),y:w("x"),z:w("@"),g:w("t<@>?"),Y:w("a5<@,@>?"),q:w("O5?"),H:w("~")}})();(function constants(){D.aCK=new A.aV(57450,"HeroiconsSolid",null,!1)
D.aDv=new A.b7(G.El,18,null,null,null,null)
D.bJ8={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a1p=new A.c2(D.bJ8,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bJ2={refund_full:0,refund_partial:1,partner_favor:2}
D.a1r=new A.c2(D.bJ2,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bJd={confirmed:0,completed:1,payment_overdue:2}
D.a8a=new A.eA(D.bJd,3,A.w("eA<c>"))
D.c5t=new A.P(!0,B.fQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbv=new A.C("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,F.tp,null,null,null,null,null,null,null,null)
D.cd0=new A.C("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.cfD=new A.C("Abrir disputa",null,B.zq,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dSy","d_3",()=>B.bX.Ng(0,new C.cDg(),new C.cDh(),x.q,x.N))})()};
(a=>{a["Fyu1vq0fzxWo+9GnTZHNjQHCYr8="]=a.current})($__dart_deferred_initializers__);