((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,C={
d4A(d,e){return new C.apW(d,e,null)},
Oc:function Oc(d,e){this.a=d
this.b=e},
cF8:function cF8(){},
cF7:function cF7(){},
cF9:function cF9(){},
apW:function apW(d,e,f){this.e=d
this.f=e
this.a=f},
b2x:function b2x(d,e,f){this.a=d
this.b=e
this.c=f},
b2w:function b2w(d){this.a=d},
OZ:function OZ(d,e,f){this.c=d
this.d=e
this.a=f},
afv:function afv(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
cde:function cde(d){this.a=d},
cdf:function cdf(d){this.a=d},
cdg:function cdg(d,e){this.a=d
this.b=e},
cdh:function cdh(d){this.a=d},
cdj:function cdj(d,e){this.a=d
this.b=e},
cdi:function cdi(d,e){this.a=d
this.b=e},
a_h(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$a_h=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.akY(),$async$a_h)
case 3:t=$.P()
s=t.b
s===$&&A.b()
w=4
return A.d(s.P("bookings").ai(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").U("id",d),$async$a_h)
case 4:r=g
w=5
return A.d(t.b.P("payments").ai(0,"booking_id, type, status, amount, paid_at, due_at, provider").U("booking_id",d).tD(0,"created_at"),$async$a_h)
case 5:q=g
t=J.a7(r)
if(t.gZ(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.i(t.gJ(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
s=J.cB(s==null?"Parceiro":s)
p=s}else{s=E.cET(s.a(J.i(t.gJ(r),"events")))
p=s}}if(t.gZ(r))o=""
else{s=x.Y.a(J.i(t.gJ(r),"partner_profiles"))
s=s==null?null:J.i(s,"business_name")
o=J.cB(s==null?"":s)}u=E.cZM(p,"Reserva "+(t.gZ(r)?"":H.cIf(J.i(t.gJ(r),"booking_number"),o,J.i(t.gJ(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a_h,v)}},D,E,F
J=c[1]
A=c[0]
B=c[2]
G=c[412]
H=c[150]
C=a.updateHolder(c[71],C)
D=c[411]
E=c[133]
F=c[192]
C.Oc.prototype={
gOe(d){var w=this.b
return J.o(w==null?null:J.i(w,"status"),"open")}}
C.apW.prototype={
ba(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.G($.d1E().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.ap
w=k.b
if(k.gOe(0)){l=D.a0Y.h(0,w==null?q:J.i(w,"reason"))
return r.a1v("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fS,D.aCl,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.i(w,"status"),p))v=!(!k.gOe(0)&&D.a7L.q(0,k.a))
if(v){l=$.au
v=J.a7(w)
u=D.a1_.h(0,v.h(w,o))
if(u==null)u=n
v=A.C(v.h(w,m))
return r.a1v(v==null?"":v,l,B.i7,u)}if(!(!k.gOe(0)&&D.a7L.q(0,k.a)))return B.ap
v=x.p
u=A.a([],v)
if(l&&J.o(J.i(w,"status"),p)){l=$.au
t=J.a7(w)
s=D.a1_.h(0,t.h(w,o))
if(s==null)s=n
t=A.C(t.h(w,m))
B.e.n(u,A.a([r.a1v(t==null?"":t,l,B.i7,s),B.ad],v))}u.push(A.Gn(D.aD4,D.cc4,new C.b2x(r,d,e),A.iM(q,q,q,q,q,q,q,q,q,B.W,q,q,q,q,q,q,q,q,q,q,q)))
return A.z(u,B.E,B.h,B.l)},
a1v(d,e,f,g){var w=null,v=A.W(22),u=A.b5(f,e,w,w,22),t=x.p,s=A.a([A.h(g,w,w,w,w,A.aJ(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.as,A.h(d,w,w,w,w,F.tg,w,w,w)],t))
return A.y(w,A.O(A.a([u,B.ae,A.a4(A.z(s,B.F,B.h,B.l),1)],t),B.F,B.h,B.l,0,w),B.r,w,w,new A.I(B.t,w,w,v,B.bs,w,B.x),w,w,w,B.bo,w,w,w)}}
C.OZ.prototype={
R(){return new C.afv(new A.aF(B.ak,$.aa()))}}
C.afv.prototype={
m(){var w=this.e
w.Y$=$.aa()
w.W$=0
this.a6()},
Rq(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rq=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.B(m.a.a).length<10){r.p(new C.cde(r))
w=1
break}r.p(new C.cdf(r))
t=4
p=$.P().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aK("open_dispute",A.R(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.B(m.a.a)],x.N,o),o),$async$Rq)
case 7:m=r.c
if(m!=null)A.am(m,!1).ae(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cU){q=m
r.p(new C.cdg(r,q))}else r.p(new C.cdh(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$Rq,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.da(D.a0Y,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.ep(m,A.u(m).i("ep<1,2>")).gX(0);v.t();){u=v.d
t=A.h(u.b,o,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.au
q=s?B.t:B.z
w.push(A.rU(o,t,new A.Q(!0,q,o,o,o,o,o,B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.cdj(p,u),o,s,r,!1,o))}w=A.a([D.ceM,B.aF,D.caD,B.a_,A.e2(B.be,w,B.r,B.bk,8,8),B.aB,A.cs(o,B.a6,!1,o,!0,B.y,o,A.cu(),p.e,o,o,o,o,o,2,B.PQ,B.T,!0,o,!0,o,!1,o,B.aC,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.an,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.au,o,B.b_,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.Q,A.h(v,o,o,o,o,D.c4F,o,o,o)],n))
w.push(B.a_)
n=p.f?o:p.gaY0()
v=A.ci(B.z,o,o,o,B.eD,o,B.ab,o,o,o)
w.push(A.bE(A.h(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o,o),n,v))
return A.dT(A.z(w,B.E,B.h,B.J),B.y,o,B.NH,o,B.av)}}
var z=a.updateTypes(["F<Oc?>(at,c)","OZ(N)","F<~>()"])
C.cF8.prototype={
$2(d,e){return this.aFj(d,e)},
aFj(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.P().b
p===$&&A.b()
w=7
return A.d(p.P("bookings").ai(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").U("id",e).ci(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.i(r,"disputes"))
if(p==null)p=B.ai
o=J.bf(p,x.P)
o.cr(0,new C.cF7())
q=o
o=A.a_(J.i(r,"status"))
p=J.aQ(q)===0?null:J.fl(q)
u=new C.Oc(o,p)
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
C.cF7.prototype={
$2(d,e){var w="created_at"
return B.f.bC(A.a_(J.i(e,w)),A.a_(J.i(d,w)))},
$S:361}
C.cF9.prototype={
$2(d,e){return null},
$S:1533}
C.b2x.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.bU(null,new C.b2w(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.aj($.d1E().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b2w.prototype={
$1(d){var w=this.a
return new C.OZ(w.e,w.f,null)},
$S:z+1}
C.cde.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.cdf.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.cdg.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.cdh.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.cdj.prototype={
$1(d){var w=this.a
return w.p(new C.cdi(w,this.b))},
$S:10}
C.cdi.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.afv.prototype,"gaY0","Rq",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.Oc,A.K)
v(A.cL,[C.cF8,C.cF7,C.cF9])
w(C.apW,A.ey)
v(A.bQ,[C.b2x,C.cde,C.cdf,C.cdg,C.cdh,C.cdi])
v(A.bx,[C.b2w,C.cdj])
w(C.OZ,A.G)
w(C.afv,A.Z)})()
A.bu(b.typeUniverse,JSON.parse('{"OZ":{"G":[],"e":[],"f":[]},"apW":{"G":[],"e":[],"f":[]},"afv":{"Z":["OZ"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.x
return{v:w("az<Oc?>"),w:w("c7<c,c>"),p:w("r<e>"),P:w("a5<c,@>"),e:w("lT"),N:w("c"),y:w("B"),z:w("@"),g:w("t<@>?"),Y:w("a5<@,@>?"),q:w("Oc?"),H:w("~")}})();(function constants(){D.aCl=new A.aY(57450,"HeroiconsSolid",null,!1)
D.aD4=new A.b8(G.Eb,18,null,null,null,null)
D.bIC={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a0Y=new A.c7(D.bIC,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bIw={refund_full:0,refund_partial:1,partner_favor:2}
D.a1_=new A.c7(D.bIw,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bIH={confirmed:0,completed:1,payment_overdue:2}
D.a7L=new A.ez(D.bIH,3,A.x("ez<c>"))
D.c4F=new A.Q(!0,B.fS,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.caD=new A.D("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,F.tg,null,null,null,null,null,null,null,null)
D.cc4=new A.D("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.ceM=new A.D("Abrir disputa",null,B.ti,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dVz","d1E",()=>B.bO.Ne(0,new C.cF8(),new C.cF9(),x.q,x.N))})()};
(a=>{a["O3loP6HOJFcMa0rEn+qUo2bX6o0="]=a.current})($__dart_deferred_initializers__);