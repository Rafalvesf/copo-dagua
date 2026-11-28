((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,C={
d3j(d,e){return new C.apk(d,e,null)},
O4:function O4(d,e){this.a=d
this.b=e},
cDR:function cDR(){},
cDQ:function cDQ(){},
cDS:function cDS(){},
apk:function apk(d,e,f){this.e=d
this.f=e
this.a=f},
b1L:function b1L(d,e,f){this.a=d
this.b=e
this.c=f},
b1K:function b1K(d){this.a=d},
OR:function OR(d,e,f){this.c=d
this.d=e
this.a=f},
aeZ:function aeZ(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
cbZ:function cbZ(d){this.a=d},
cc_:function cc_(d){this.a=d},
cc0:function cc0(d,e){this.a=d
this.b=e},
cc1:function cc1(d){this.a=d},
cc3:function cc3(d,e){this.a=d
this.b=e},
cc2:function cc2(d,e){this.a=d
this.b=e},
a_4(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$a_4=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.akp(),$async$a_4)
case 3:t=$.Q()
s=t.b
s===$&&A.b()
w=4
return A.d(s.P("bookings").ai(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").U("id",d),$async$a_4)
case 4:r=g
w=5
return A.d(t.b.P("payments").ai(0,"booking_id, type, status, amount, paid_at, due_at, provider").U("booking_id",d).tt(0,"created_at"),$async$a_4)
case 5:q=g
t=J.a7(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.i(t.gJ(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
s=J.cy(s==null?"Parceiro":s)
p=s}else{s=E.cDA(s.a(J.i(t.gJ(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.i(t.gJ(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
o=J.cy(s==null?"":s)}u=E.cYx(p,"Reserva "+(t.gY(r)?"":H.cGY(J.i(t.gJ(r),"booking_number"),o,J.i(t.gJ(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a_4,v)}},D,E,F
J=c[1]
A=c[0]
B=c[2]
G=c[410]
H=c[152]
C=a.updateHolder(c[71],C)
D=c[409]
E=c[134]
F=c[192]
C.O4.prototype={
gNI(d){var w=this.b
return J.o(w==null?null:J.i(w,"status"),"open")}}
C.apk.prototype={
b9(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.G($.d0o().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.ao
w=k.b
if(k.gNI(0)){l=D.a0z.h(0,w==null?q:J.i(w,"reason"))
return r.a0P("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fS,D.aBS,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.i(w,"status"),p))v=!(!k.gNI(0)&&D.a7o.t(0,k.a))
if(v){l=$.au
v=J.a7(w)
u=D.a0B.h(0,v.h(w,o))
if(u==null)u=n
v=A.B(v.h(w,m))
return r.a0P(v==null?"":v,l,B.i8,u)}if(!(!k.gNI(0)&&D.a7o.t(0,k.a)))return B.ao
v=x.p
u=A.a([],v)
if(l&&J.o(J.i(w,"status"),p)){l=$.au
t=J.a7(w)
s=D.a0B.h(0,t.h(w,o))
if(s==null)s=n
t=A.B(t.h(w,m))
B.e.n(u,A.a([r.a0P(t==null?"":t,l,B.i8,s),B.ac],v))}u.push(new A.al(A.Gf(D.aCA,D.cav,new C.b1L(r,d,e),A.jb(q,q,q,q,q,q,q,q,q,B.V,q,q,q,q,q,q,q,q,q,q,q)),q))
return A.z(u,B.E,B.h,B.l)},
a0P(d,e,f,g){var w=null,v=A.W(22),u=A.b9(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,w,A.aI(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.ar,A.h(d,w,w,w,w,F.rY,w,w)],t))
return A.x(w,A.N(A.a([u,B.af,A.a4(A.z(s,B.G,B.h,B.l),1)],t),B.G,B.h,B.l,0,w),B.r,w,w,new A.I(B.t,w,w,v,B.bq,w,B.x),w,w,w,B.bn,w,w,w)}}
C.OR.prototype={
S(){return new C.aeZ(new A.aF(B.ak,$.aa()))}}
C.aeZ.prototype={
m(){var w=this.e
w.Z$=$.aa()
w.W$=0
this.a7()},
QP(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QP=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.B(m.a.a).length<10){r.p(new C.cbZ(r))
w=1
break}r.p(new C.cc_(r))
t=4
p=$.Q().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aG("open_dispute",A.R(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.B(m.a.a)],x.N,o),o),$async$QP)
case 7:m=r.c
if(m!=null)A.an(m,!1).af(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cT){q=m
r.p(new C.cc0(r,q))}else r.p(new C.cc1(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$QP,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d8(D.a0z,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eo(m,A.u(m).i("eo<1,2>")).gX(0);v.q();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.au
q=s?B.t:B.z
w.push(A.rQ(o,t,new A.P(!0,q,o,o,o,o,o,B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.cc3(p,u),o,s,r,!1,o))}w=A.a([D.cgx,B.aD,D.cdA,B.a_,A.e4(B.bf,w,B.r,B.bk,8,8),B.aA,A.cs(o,B.a6,!1,o,!0,B.y,o,A.cu(),p.e,o,o,o,o,o,2,B.Pt,B.W,!0,o,!0,o,!1,o,B.aB,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.al,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.au,o,B.b0,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.P,A.h(v,o,o,o,o,D.c3Q,o,o)],n))
w.push(B.a_)
n=p.f?o:p.gaWN()
v=A.cc(B.z,o,o,o,B.eA,o,B.aa,o,o,o)
w.push(new A.al(A.bB(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o),n,v),o))
return A.dS(A.z(w,B.E,B.h,B.J),B.y,o,B.Nm,o,B.av)}}
var z=a.updateTypes(["F<O4?>(at,c)","OR(O)","F<~>()"])
C.cDR.prototype={
$2(d,e){return this.aEh(d,e)},
aEh(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.Q().b
p===$&&A.b()
w=7
return A.d(p.P("bookings").ai(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").U("id",e).cf(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.i(r,"disputes"))
if(p==null)p=B.ai
o=J.be(p,x.P)
o.cq(0,new C.cDQ())
q=o
o=A.Y(J.i(r,"status"))
p=J.aP(q)===0?null:J.fi(q)
u=new C.O4(o,p)
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
C.cDQ.prototype={
$2(d,e){var w="created_at"
return B.f.bA(A.Y(J.i(e,w)),A.Y(J.i(d,w)))},
$S:407}
C.cDS.prototype={
$2(d,e){return null},
$S:1533}
C.b1L.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.bQ(null,new C.b1K(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.aj($.d0o().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b1K.prototype={
$1(d){var w=this.a
return new C.OR(w.e,w.f,null)},
$S:z+1}
C.cbZ.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.cc_.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.cc0.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.cc1.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.cc3.prototype={
$1(d){var w=this.a
return w.p(new C.cc2(w,this.b))},
$S:10}
C.cc2.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.aeZ.prototype,"gaWN","QP",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.O4,A.L)
v(A.cK,[C.cDR,C.cDQ,C.cDS])
w(C.apk,A.ew)
v(A.bL,[C.b1L,C.cbZ,C.cc_,C.cc0,C.cc1,C.cc2])
v(A.bs,[C.b1K,C.cc3])
w(C.OR,A.G)
w(C.aeZ,A.a0)})()
A.bq(b.typeUniverse,JSON.parse('{"OR":{"G":[],"e":[],"f":[]},"apk":{"G":[],"e":[],"f":[]},"aeZ":{"a0":["OR"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.y
return{v:w("ax<O4?>"),w:w("c6<c,c>"),p:w("r<e>"),P:w("a5<c,@>"),e:w("lS"),N:w("c"),y:w("C"),z:w("@"),g:w("t<@>?"),Y:w("a5<@,@>?"),q:w("O4?"),H:w("~")}})();(function constants(){D.aBS=new A.b_(57450,"HeroiconsSolid",null,!1)
D.aCA=new A.b8(G.DU,18,null,null,null,null)
D.bHY={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a0z=new A.c6(D.bHY,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bHS={refund_full:0,refund_partial:1,partner_favor:2}
D.a0B=new A.c6(D.bHS,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bI2={confirmed:0,completed:1,payment_overdue:2}
D.a7o=new A.ey(D.bI2,3,A.y("ey<c>"))
D.c3Q=new A.P(!0,B.fS,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cav=new A.D("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null)
D.cdA=new A.D("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,F.rY,null,null,null,null,null,null,null)
D.cgx=new A.D("Abrir disputa",null,B.t_,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dUi","d0o",()=>B.bO.MK(0,new C.cDR(),new C.cDS(),x.q,x.N))})()};
(a=>{a["YHzDw+EAFeB3JZizwgW+BE1uz7M="]=a.current})($__dart_deferred_initializers__);