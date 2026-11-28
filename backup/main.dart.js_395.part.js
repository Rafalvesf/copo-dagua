((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,C={
d4h(d,e){return new C.aqc(d,e,null)},
Om:function Om(d,e){this.a=d
this.b=e},
cEm:function cEm(){},
cEl:function cEl(){},
cEn:function cEn(){},
aqc:function aqc(d,e,f){this.e=d
this.f=e
this.a=f},
b36:function b36(d,e,f){this.a=d
this.b=e
this.c=f},
b35:function b35(d){this.a=d},
P8:function P8(d,e,f){this.c=d
this.d=e
this.a=f},
afL:function afL(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
cd9:function cd9(d){this.a=d},
cda:function cda(d){this.a=d},
cdb:function cdb(d,e){this.a=d
this.b=e},
cdc:function cdc(d){this.a=d},
cde:function cde(d,e){this.a=d
this.b=e},
cdd:function cdd(d,e){this.a=d
this.b=e},
a_y(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$a_y=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.alj(),$async$a_y)
case 3:t=$.Q()
s=t.b
s===$&&A.b()
w=4
return A.d(s.R("bookings").al(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("id",d),$async$a_y)
case 4:r=g
w=5
return A.d(t.b.R("payments").al(0,"booking_id, type, status, amount, paid_at, due_at, provider").V("booking_id",d).tv(0,"created_at"),$async$a_y)
case 5:q=g
t=J.a6(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.i(t.gJ(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
s=J.cy(s==null?"Parceiro":s)
p=s}else{s=E.cE6(s.a(J.i(t.gJ(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.i(t.gJ(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
o=J.cy(s==null?"":s)}u=E.cZC(p,"Reserva "+(t.gY(r)?"":H.cHB(J.i(t.gJ(r),"booking_number"),o,J.i(t.gJ(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a_y,v)}},D,E,F
J=c[1]
A=c[0]
B=c[2]
G=c[413]
H=c[150]
C=a.updateHolder(c[71],C)
D=c[412]
E=c[134]
F=c[193]
C.Om.prototype={
gNU(d){var w=this.b
return J.o(w==null?null:J.i(w,"status"),"open")}}
C.aqc.prototype={
b8(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.G($.d1n().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.ag
w=k.b
if(k.gNU(0)){l=D.a0R.h(0,w==null?q:J.i(w,"reason"))
return r.a10("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fX,D.aCa,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.i(w,"status"),p))v=!(!k.gNU(0)&&D.a7G.u(0,k.a))
if(v){l=$.ay
v=J.a6(w)
u=D.a0T.h(0,v.h(w,o))
if(u==null)u=n
v=A.y(v.h(w,m))
return r.a10(v==null?"":v,l,B.hC,u)}if(!(!k.gNU(0)&&D.a7G.u(0,k.a)))return B.ag
v=x.p
u=A.a([],v)
if(l&&J.o(J.i(w,"status"),p)){l=$.ay
t=J.a6(w)
s=D.a0T.h(0,t.h(w,o))
if(s==null)s=n
t=A.y(t.h(w,m))
B.e.n(u,A.a([r.a10(t==null?"":t,l,B.hC,s),B.ae],v))}u.push(new A.am(A.Gu(D.aCW,D.cbt,new C.b36(r,d,e),A.jy(q,q,q,q,q,q,q,q,q,B.V,q,q,q,q,q,q,q,q,q,q,q)),q))
return A.x(u,B.F,B.h,B.l)},
a10(d,e,f,g){var w=null,v=A.W(22),u=A.b4(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,w,A.aH(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.E,w,w,!0,w,w,w,w,w,w,w,w),w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.ap,A.h(d,w,w,w,w,F.t2,w,w)],t))
return A.w(w,A.N(A.a([u,B.al,A.a5(A.x(s,B.G,B.h,B.l),1)],t),B.G,B.h,B.l,0,w),B.r,w,w,new A.O(B.t,w,w,v,B.bv,w,B.y),w,w,w,B.bt,w,w,w)}}
C.P8.prototype={
P(){return new C.afL(new A.aI(B.aq,$.ab()))}}
C.afL.prototype={
m(){var w=this.e
w.a_$=$.ab()
w.X$=0
this.a6()},
R4(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$R4=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.C(m.a.a).length<10){r.p(new C.cd9(r))
w=1
break}r.p(new C.cda(r))
t=4
p=$.Q().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aH("open_dispute",A.R(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.C(m.a.a)],x.N,o),o),$async$R4)
case 7:m=r.c
if(m!=null)A.ap(m,!1).au(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cQ){q=m
r.p(new C.cdb(r,q))}else r.p(new C.cdc(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$R4,v)},
t(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d7(D.a0R,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.er(m,A.u(m).i("er<1,2>")).gW(0);v.q();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.ay
q=s?B.t:B.z
w.push(A.rR(o,t,new A.P(!0,q,o,o,o,o,o,B.bj,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.cde(p,u),o,s,r,!1,o))}w=A.a([D.chq,B.aE,D.ceu,B.a0,A.em(B.bl,w,B.r,B.bq,8,8),B.aB,A.cr(o,B.a8,!1,o,!0,B.x,o,A.ct(),p.e,o,o,o,o,o,2,B.PJ,B.a_,!0,o,!0,o,!1,o,B.aD,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.am,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.ay,o,B.b3,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.M,A.h(v,o,o,o,o,D.c4I,o,o)],n))
w.push(B.a0)
n=p.f?o:p.gaXF()
v=A.cd(B.a4,o,o,o,B.eD,o,B.a9,o,o,o)
w.push(new A.am(A.bD(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o),n,v),o))
return A.dU(A.x(w,B.F,B.h,B.I),B.x,o,B.ND,o,B.av)}}
var z=a.updateTypes(["D<Om?>(at,c)","P8(M)","D<~>()"])
C.cEm.prototype={
$2(d,e){return this.aEY(d,e)},
aEY(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.Q().b
p===$&&A.b()
w=7
return A.d(p.R("bookings").al(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").V("id",e).cd(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.i(r,"disputes"))
if(p==null)p=B.aj
o=J.bi(p,x.P)
o.cv(0,new C.cEl())
q=o
o=A.a0(J.i(r,"status"))
p=J.aS(q)===0?null:J.fG(q)
u=new C.Om(o,p)
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
C.cEl.prototype={
$2(d,e){var w="created_at"
return B.f.bA(A.a0(J.i(e,w)),A.a0(J.i(d,w)))},
$S:308}
C.cEn.prototype={
$2(d,e){return null},
$S:1550}
C.b36.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.bR(null,new C.b35(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.ak($.d1n().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b35.prototype={
$1(d){var w=this.a
return new C.P8(w.e,w.f,null)},
$S:z+1}
C.cd9.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.cda.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.cdb.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.cdc.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.cde.prototype={
$1(d){var w=this.a
return w.p(new C.cdd(w,this.b))},
$S:10}
C.cdd.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.afL.prototype,"gaXF","R4",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.Om,A.L)
v(A.cM,[C.cEm,C.cEl,C.cEn])
w(C.aqc,A.ev)
v(A.bO,[C.b36,C.cd9,C.cda,C.cdb,C.cdc,C.cdd])
v(A.bv,[C.b35,C.cde])
w(C.P8,A.G)
w(C.afL,A.Z)})()
A.bq(b.typeUniverse,JSON.parse('{"P8":{"G":[],"e":[],"f":[]},"aqc":{"G":[],"e":[],"f":[]},"afL":{"Z":["P8"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.B
return{v:w("ax<Om?>"),w:w("c9<c,c>"),p:w("r<e>"),P:w("a4<c,@>"),e:w("lU"),N:w("c"),y:w("C"),z:w("@"),g:w("t<@>?"),Y:w("a4<@,@>?"),q:w("Om?"),H:w("~")}})();(function constants(){D.aCa=new A.aZ(57450,"HeroiconsSolid",null,!1)
D.aCW=new A.ba(G.E5,18,null,null,null,null)
D.bHZ={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a0R=new A.c9(D.bHZ,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bHS={refund_full:0,refund_partial:1,partner_favor:2}
D.a0T=new A.c9(D.bHS,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bI3={confirmed:0,completed:1,payment_overdue:2}
D.a7G=new A.ei(D.bI3,3,A.B("ei<c>"))
D.c4I=new A.P(!0,B.fX,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbt=new A.E("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null)
D.ceu=new A.E("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,F.t2,null,null,null,null,null,null,null)
D.chq=new A.E("Abrir disputa",null,B.t3,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dVS","d1n",()=>B.bM.MV(0,new C.cEm(),new C.cEn(),x.q,x.N))})()};
(a=>{a["SMcO9Y1GyfIBUC6UDFOOczyfSTY="]=a.current})($__dart_deferred_initializers__);