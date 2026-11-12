((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,C={
cEk(d,e){return new C.ak0(d,e,null)},
Lr:function Lr(d,e){this.a=d
this.b=e},
chh:function chh(){},
chg:function chg(){},
chi:function chi(){},
ak0:function ak0(d,e,f){this.e=d
this.f=e
this.a=f},
aUu:function aUu(d,e,f){this.a=d
this.b=e
this.c=f},
aUt:function aUt(d){this.a=d},
M7:function M7(d,e,f){this.c=d
this.d=e
this.a=f},
aan:function aan(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
bVN:function bVN(d){this.a=d},
bVO:function bVO(d){this.a=d},
bVP:function bVP(d,e){this.a=d
this.b=e},
bVQ:function bVQ(d){this.a=d},
bVS:function bVS(d,e){this.a=d
this.b=e},
bVR:function bVR(d,e){this.a=d
this.b=e},
Wi(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$Wi=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.afq(),$async$Wi)
case 3:t=$.W()
s=t.b
s===$&&A.b()
w=4
return A.d(s.T("bookings").aN(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), weddings(partner_name_1, partner_name_2, location), proposals(title)").a_("id",d),$async$Wi)
case 4:r=g
w=5
return A.d(t.b.T("payments").aN(0,"booking_id, type, status, amount, paid_at, due_at, provider").a_("booking_id",d).x7(0,"created_at"),$async$Wi)
case 5:q=g
t=J.a3(r)
if(t.gZ(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.h(t.gO(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
s=J.cG(s==null?"Parceiro":s)
p=s}else{s=E.ch3(s.a(J.h(t.gO(r),"weddings")))
p=s}}if(t.gZ(r))o=""
else{s=x.Y.a(J.h(t.gO(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
o=J.cG(s==null?"":s)}u=E.cyX(p,"Reserva "+(t.gZ(r)?"":G.cjF(J.h(t.gO(r),"booking_number"),o)),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$Wi,v)}},D,E
J=c[1]
A=c[0]
B=c[2]
F=c[403]
G=c[139]
C=a.updateHolder(c[66],C)
D=c[194]
E=c[125]
C.Lr.prototype={
ga8b(d){var w=this.b
return J.o(w==null?null:J.h(w,"status"),"open")}}
C.ak0.prototype={
bf(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.M($.cBv().$1(r.e),x.v),k=l.gt(l)
if(k==null)return B.av
w=k.b
if(k.ga8b(0)){l=D.Zn.h(0,w==null?q:J.h(w,"reason"))
return r.Zo("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.dZ,D.avp,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.h(w,"status"),p))v=!(!k.ga8b(0)&&D.a5_.n(0,k.a))
if(v){l=$.a9
v=J.a3(w)
u=D.Zp.h(0,v.h(w,o))
if(u==null)u=n
v=A.P(v.h(w,m))
return r.Zo(v==null?"":v,l,B.jC,u)}if(!(!k.ga8b(0)&&D.a5_.n(0,k.a)))return B.av
v=x.p
u=A.a([],v)
if(l&&J.o(J.h(w,"status"),p)){l=$.a9
t=J.a3(w)
s=D.Zp.h(0,t.h(w,o))
if(s==null)s=n
t=A.P(t.h(w,m))
B.e.A(u,A.a([r.Zo(t==null?"":t,l,B.jC,s),B.a5],v))}u.push(A.zD(D.aw7,D.c0l,new C.aUu(r,d,e),A.fV(q,q,q,q,q,q,q,q,q,B.L,q,q,q,q,q,q,q,q,q,q,q)))
return A.J(u,B.R,B.m,B.q,0,B.w)},
Zo(d,e,f,g){var w=null,v=A.T(22),u=A.aK(f,e,w,w,22),t=x.p,s=A.a([A.i(g,w,w,w,A.as(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.A(s,A.a([B.aK,A.i(d,w,w,w,B.lD,w,w,w)],t))
return A.E(w,A.Z(A.a([u,B.aj,A.ac(A.J(s,B.I,B.m,B.q,0,B.w),1)],t),B.I,B.m,B.q,0,w,w),B.t,w,w,new A.L(B.v,w,w,v,B.ap,w,B.y),w,w,w,w,B.bF,w,w,w)}}
C.M7.prototype={
R(){return new C.aan(new A.aP(B.am,$.ah()))}}
C.aan.prototype={
m(){var w=this.e
w.a0$=$.ah()
w.V$=0
this.aa()},
P5(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$P5=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.L(m.a.a).length<10){r.q(new C.bVN(r))
w=1
break}r.q(new C.bVO(r))
t=4
p=$.W().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.b9("open_dispute",A.Q(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.L(m.a.a)],x.N,o),o),$async$P5)
case 7:m=r.c
if(m!=null)A.aB(m,!1).aX(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.aa(l)
if(m instanceof A.db){q=m
r.q(new C.bVP(r,q))}else r.q(new C.bVQ(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$P5,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.dg(D.Zn,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eB(m,A.r(m).i("eB<1,2>")).gW(0);v.p();){u=v.d
t=A.i(u.b,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.a9
q=s?B.v:B.C
w.push(A.on(o,t,new A.C(!0,q,o,o,o,o,o,B.bd,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.bVS(p,u),o,s,r,!1,o))}w=A.a([D.c2y,B.aI,D.c_a,B.ak,A.e9(B.bf,w,B.t,B.bt,8,8),B.as,A.cF(o,B.aa,!1,o,!0,B.D,o,A.cI(),p.e,o,o,o,o,o,2,B.Nt,B.Y,!0,o,!0,o,!1,o,B.aH,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aw,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.ar,o,B.b5,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.A(w,A.a([B.a4,A.i(v,o,o,o,D.bUs,o,o,o)],n))
w.push(B.ak)
n=p.f?o:p.gaRx()
v=A.cA(B.C,o,o,o,B.e3,o,B.al,o,o)
w.push(A.bQ(A.i(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o),n,v))
return A.ey(A.J(w,B.R,B.m,B.a0,0,B.w),B.Lw,o,B.Z)}}
var z=a.updateTypes(["H<Lr?>(ax,c)","M7(M)","H<~>()"])
C.chh.prototype={
$2(d,e){return this.azQ(d,e)},
azQ(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.W().b
p===$&&A.b()
w=7
return A.d(p.T("bookings").aN(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").a_("id",e).ec(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.h(r,"disputes"))
if(p==null)p=B.at
o=J.bA(p,x.P)
o.d4(0,new C.chg())
q=o
o=A.a1(J.h(r,"status"))
p=J.aX(q)===0?null:J.hB(q)
u=new C.Lr(o,p)
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
C.chg.prototype={
$2(d,e){var w="created_at"
return B.f.bC(A.a1(J.h(e,w)),A.a1(J.h(d,w)))},
$S:274}
C.chi.prototype={
$2(d,e){return null},
$S:1349}
C.aUu.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.cb(null,new C.aUt(t),u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.av($.cBv().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:2}
C.aUt.prototype={
$1(d){var w=this.a
return new C.M7(w.e,w.f,null)},
$S:z+1}
C.bVN.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.bVO.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.bVP.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.bVQ.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.bVS.prototype={
$1(d){var w=this.a
return w.q(new C.bVR(w,this.b))},
$S:10}
C.bVR.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.aan.prototype,"gaRx","P5",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.Lr,A.F)
v(A.cD,[C.chh,C.chg,C.chi])
w(C.ak0,A.en)
v(A.bI,[C.aUu,C.bVN,C.bVO,C.bVP,C.bVQ,C.bVR])
v(A.bv,[C.aUt,C.bVS])
w(C.M7,A.G)
w(C.aan,A.a0)})()
A.bx(b.typeUniverse,JSON.parse('{"M7":{"G":[],"e":[],"f":[]},"ak0":{"G":[],"e":[],"f":[]},"aan":{"a0":["M7"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.v
return{v:w("aF<Lr?>"),w:w("ch<c,c>"),p:w("q<e>"),P:w("a2<c,@>"),e:w("l0"),N:w("c"),y:w("z"),z:w("@"),g:w("t<@>?"),Y:w("a2<@,@>?"),q:w("Lr?"),H:w("~")}})();(function constants(){D.avp=new A.aC(57450,"HeroiconsSolid",null,!1)
D.aw7=new A.b_(F.ub,18,null,null,null,null)
D.bzv={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.Zn=new A.ch(D.bzv,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bzq={refund_full:0,refund_partial:1,partner_favor:2}
D.Zp=new A.ch(D.bzq,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.LA=new A.Y(4,0,0,8)
D.c06=new A.I("Documentos",null,B.c2,null,null,null,null,null,null,null,null)
D.a_f=new A.a_(D.LA,D.c06,null)
D.bzz={confirmed:0,completed:1,payment_overdue:2}
D.a5_=new A.et(D.bzz,3,A.v("et<c>"))
D.bUs=new A.C(!0,B.dZ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c_a=new A.I("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,B.lD,null,null,null,null,null,null,null,null)
D.c0l=new A.I("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.c2y=new A.I("Abrir disputa",null,B.k5,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dpE","cBv",()=>B.cY.Ut(0,new C.chh(),new C.chi(),x.q,x.N))})()};
(a=>{a["EqeU70orI9TaQHLAB0xlecffJ74="]=a.current})($__dart_deferred_initializers__);