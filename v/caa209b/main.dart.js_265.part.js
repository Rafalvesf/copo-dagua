((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dxV(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bQH
break A}if("confirmed"===w){x=new A.c3("Em vigor",C.fF,$.ap)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.c3("Conclu\xeddo",C.fF,$.ap):D.bQQ
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bQq
break A}if("expired"===w){x=D.bQG
break A}x=D.bQl
break A}return x},
dkY(){return new B.KH(null)},
pk:function pk(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.as=o},
cEr:function cEr(){},
cEp:function cEp(){},
cEq:function cEq(d){this.a=d},
cEn:function cEn(){},
cEo:function cEo(){},
KH:function KH(d){this.a=d},
bi9:function bi9(){},
bi8:function bi8(d){this.a=d},
bi4:function bi4(d){this.a=d},
bi7:function bi7(d){this.a=d},
bi6:function bi6(d){this.a=d},
bi5:function bi5(d){this.a=d},
bi2:function bi2(){},
bi3:function bi3(){},
aC8:function aC8(d,e){this.c=d
this.a=e},
bLD:function bLD(d,e,f){this.a=d
this.b=e
this.c=f},
bLC:function bLC(){},
bLB:function bLB(d,e,f){this.a=d
this.b=e
this.c=f},
bLA:function bLA(d,e){this.a=d
this.b=e},
aDY:function aDY(d){this.a=d},
bQb:function bQb(d){this.a=d}},D,F,G,H
J=c[1]
A=c[0]
C=c[2]
E=c[91]
B=a.updateHolder(c[23],B)
D=c[312]
F=c[140]
G=c[220]
H=c[228]
B.pk.prototype={}
B.KH.prototype={
bc(d,e){var x=null,w=e.F($.cLS(),y.c)
return A.cP(x,C.bF,A.bH(!0,new A.m5(A.a([A.aP(x,A.aw(d,C.b9,y.w).w.r.b,x),D.bJP],y.p),A.h3(w,new B.bi7(e),new B.bi8(e),new B.bi9(),!1,!0,!1),x),x,C.a0,!1),!0,x)}}
B.aC8.prototype={
v(d){var x=null,w=this.c,v=B.dxV(w),u=w.y,t=u<=0?0:C.k.aj(w.Q/u,0,1),s=A.a2(22),r=w.c,q=A.a6(A.i(r,x,x,x,x,C.ar,x,x,x),1),p=A.a2(999),o=y.p
p=A.Q(A.a([new A.cA(r,44,w.d,!1,!0,x),C.ai,q,A.C(x,A.i(v.a,x,x,x,x,A.aH(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.O(v.b,x,x,p,x,x,C.y),x,x,x,C.nc,x,x,x)],o),C.x,C.j,C.o,0,x,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.Pf(r))
return A.aT(A.C(x,A.B(A.a([p,C.bd,A.i(C.e.a3(q," \xb7 "),x,x,x,x,C.Z,x,x,x),C.R,new A.kW(t,5,x,C.bs,x),C.aF,A.i("Recebido "+A.aO(w.Q,!0)+" de "+A.aO(u,!0),x,x,x,x,C.b4,x,x,x)],o),C.I,C.j,C.o,0,C.v),C.r,x,x,new A.O(C.t,x,x,s,C.b0,x,C.y),x,x,x,C.bg,x,x,x),new B.bLD(this,d,w),x)},
bgR(d,e){A.ck(C.t,new B.bLB(e,new B.bLC(),d),!1,d,!0,!0,C.m2,y.H)}}
B.aDY.prototype={
v(d){return A.bT(new A.R(C.bN,A.B(A.a([D.bXb,C.d_,D.cbz,C.Y,D.c9Z,C.bk,E.d1a("Ver pedidos",new B.bQb(d))],y.p),C.x,C.j,C.P,0,C.v),null),null,null)}}
var z=a.updateTypes(["P(P,pk)","F<r<pk>>(au)","pk()","e(r<pk>)"])
B.cEr.prototype={
$1(d){return this.aFp(d)},
aFp(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.F(A.cw($.b8(),new B.cEp(),y.D,q),q)
if(p==null){v=D.bxJ
x=1
break}q=$.T().b
q===$&&A.b()
x=3
return A.d(q.P("bookings").aw(0,"id, booking_number, event_date, total_amount, deposit_amount, status, proposals(title, description, payment_terms), events(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").W("partner_id",p).dk(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bo(u,y.P),s=A.u(t),t=new A.ai(t,t.gA(t),s.i("ai<U.E>")),s=s.i("U.E");t.t();){r=t.d
q.push(new B.cEq(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cEp.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:16}
B.cEq.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k="booking_number",j="event_date",i=this.a,h=J.a7(i),g=y.h,f=g.a(h.h(i,"events")),e=g.a(h.h(i,"proposals"))
g=f==null
x=A.J(g?l:J.h(f,"partner_name_1"))
if(x==null)x=""
w=A.J(g?l:J.h(f,"partner_name_2"))
if(w==null)w=""
v=y.g.a(h.h(i,"payments"))
if(v==null)v=C.an
u=J.bo(v,y.P)
A.a_(h.h(i,"id"))
if(h.h(i,k)==null)v=l
else{v=h.h(i,k)
t=y.Y.a(h.h(i,"partner_profiles"))
t=t==null?l:J.h(t,"business_name")
v=F.czU(v,J.cN(t==null?"":t))}if(x.length===0)t="Cliente"
else t=w.length===0?x:x+" & "+w
s=A.J(g?l:J.h(f,"profile_photo_url"))
if(s==null)s=A.J(g?l:J.h(f,"cover_photo_url"))
r=h.h(i,j)==null?l:A.d8(A.a_(h.h(i,j)))
q=A.J(g?l:J.h(f,"venue"))
if((q==null?l:q.length!==0)===!0){f.toString
g=A.a_(J.h(f,"venue"))}else{q=A.J(g?l:J.h(f,"location"))
g=q}q=e==null
p=A.J(q?l:J.h(e,"title"))
if(p==null)p="Servi\xe7o"
o=A.J(q?l:J.h(e,"description"))
n=A.J(q?l:J.h(e,"payment_terms"))
m=A.aN(h.h(i,"total_amount"))
q=m==null?l:m
if(q==null)q=0
m=A.aN(h.h(i,"deposit_amount"))
if(m==null)m=l
if(m==null)m=0
return new B.pk(v,t,s,r,g,p,o,n,q,m,new A.a3(u,new B.cEn(),A.u(u).i("a3<U.E>")).dc(0,0,new B.cEo()),A.a_(h.h(i,"status")))},
$S:z+2}
B.cEn.prototype={
$1(d){return J.o(J.h(d,"status"),"paid")},
$S:35}
B.cEo.prototype={
$2(d,e){return d+A.dt(J.h(e,"amount"))},
$S:162}
B.bi9.prototype={
$0(){return C.br},
$S:38}
B.bi8.prototype={
$2(d,e){return new A.jb("N\xe3o foi poss\xedvel carregar.",new B.bi4(this.a),null)},
$S:45}
B.bi4.prototype={
$0(){return this.a.ah($.cLS())},
$S:0}
B.bi7.prototype={
$1(d){var x,w=null,v=J.a7(d)
if(v.gY(d))v=D.ci7
else{x=A.a([new A.eY(new B.bi5(d),w),C.a4],y.p)
for(v=v.gV(d);v.t();)x.push(new A.R(C.jm,new B.aC8(v.gE(v),w),w))
v=A.AI(A.d5(x,w,H.MF,w,w,!1,C.a3,!1),w,new B.bi6(this.a))}return v},
$S:z+3}
B.bi6.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.ah($.cLS())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.bi5.prototype={
$1(d){var x=this.a,w=J.c7(x),v=w.dc(x,0,new B.bi2()),u=w.dc(x,0,new B.bi3()),t=A.aO(v,!1),s=w.gA(x)
x=w.gA(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.apJ(D.b4Y,A.eo(C.bf,A.a([new A.uQ("Recebido "+A.aO(u,!1),!0,!1,null),new A.uQ("Falta "+A.aO(C.k.aj(v-u,0,1/0),!1),!1,!1,null)],y.p),C.r,C.bp,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:1475}
B.bi2.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.bi3.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bLD.prototype={
$0(){return this.a.bgR(this.b,this.c)},
$S:0}
B.bLC.prototype={
$2(d,e){var x=null
return new A.R(C.ek,A.Q(A.a([A.aP(A.i(d,x,x,x,x,C.Z,x,x,x),x,110),A.a6(A.i(e,x,x,x,x,C.ds,x,x,x),1)],y.p),C.I,C.j,C.o,0,x,x),x)},
$S:176}
B.bLB.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.i(u==null?"Contrato":"Contrato "+u,w,w,w,w,C.fw,C.a5,w,w),C.aB,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
x=v.e
if(x!=null)u.push(t.$2("Data",A.Pf(x)))
x=v.f
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Local",x))}u.push(t.$2("Valor",A.aO(v.y,!0)))
u.push(t.$2("Sinal",A.aO(v.z,!0)))
u.push(t.$2("Recebido",A.aO(v.Q,!0)))
x=v.w
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Descri\xe7\xe3o",x))}v=v.x
if((v==null?w:v.length!==0)===!0){v.toString
u.push(t.$2("Condi\xe7\xf5es",v))}u.push(C.aB)
u.push(A.Kz(D.aBx,D.c7o,new B.bLA(d,this.c),w))
return A.bH(!0,new A.R(D.asj,A.e2(A.B(u,C.J,C.j,C.o,0,C.v),C.z,w,w,w,C.a3),w),w,C.a0,!0)},
$S:42}
B.bLA.prototype={
$0(){A.as(this.a,!1).bJ()
A.aj(this.b).bQ(0,"/partner-messages",null)},
$S:0}
B.bQb.prototype={
$0(){return A.aj(this.a).bQ(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.pk,A.L)
w(A.bw,[B.cEr,B.cEp,B.cEn,B.bi7,B.bi5,B.bLB])
w(A.bR,[B.cEq,B.bi9,B.bi4,B.bi6,B.bLD,B.bLA,B.bQb])
w(A.cS,[B.cEo,B.bi8,B.bi2,B.bi3,B.bLC])
x(B.KH,A.em)
w(A.M,[B.aC8,B.aDY])})()
A.bx(b.typeUniverse,JSON.parse('{"KH":{"I":[],"e":[],"f":[]},"aC8":{"M":[],"e":[],"f":[]},"aDY":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.x
return{c:x("ax<r<pk>>"),D:x("cG"),o:x("t<pk>"),s:x("t<c>"),p:x("t<e>"),y:x("r<pk>"),P:x("a4<c,@>"),w:x("dx"),g:x("r<@>?"),h:x("a4<c,@>?"),Y:x("a4<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.asj=new A.a0(20,18,20,20)
D.aBx=new A.be(C.fh,18,null,null,null,null)
D.b4Y=x([C.nz,C.e4,C.bT],A.x("t<aW>"))
D.bxJ=x([],y.o)
D.bJP=new A.l9("Contratos",null,!0,null,20,!0,null)
D.bQl=new A.c3("Em an\xe1lise",C.aa,C.T)
D.bQq=new A.c3("Cancelado",C.aa,C.T)
D.bQG=new A.c3("Expirado",C.aa,C.T)
D.bQH=new A.c3("Aguarda sinal",C.tQ,C.tU)
D.bQQ=new A.c3("Falta o restante",C.tQ,C.tU)
D.bXb=new A.Mk(C.nz,-0.016,96,null)
D.c7o=new A.D("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.c9Z=new A.D("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,G.Hy,C.a5,null,null,null,null,null,null,null)
D.cbz=new A.D("Ainda sem contratos",null,C.bu,C.a5,null,null,null,null,null,null,null)
D.ci7=new B.aDY(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dOH","cLS",()=>A.ey(new B.cEr(),null,!1,null,null,y.y))})()};
(a=>{a["WHdr9I9aLY6FNSwxYdv+f+WCOvs="]=a.current})($__dart_deferred_initializers__);