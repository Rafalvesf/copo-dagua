((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dGR(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bUc
break A}if("confirmed"===w){x=new A.bW("Em vigor",C.fP,$.at)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.bW("Conclu\xeddo",C.fP,$.at):D.bUo
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bTV
break A}if("expired"===w){x=D.bUb
break A}x=D.bTQ
break A}return x},
dtG(){return new B.Lm(null)},
pD:function pD(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cM3:function cM3(){},
cM1:function cM1(){},
cM2:function cM2(d){this.a=d},
cM_:function cM_(){},
cM0:function cM0(){},
Lm:function Lm(d){this.a=d},
blJ:function blJ(){},
blI:function blI(d){this.a=d},
blE:function blE(d){this.a=d},
blH:function blH(d){this.a=d},
blG:function blG(d){this.a=d},
blF:function blF(d){this.a=d},
blC:function blC(){},
blD:function blD(){},
aEs:function aEs(d,e){this.c=d
this.a=e},
bQw:function bQw(d,e,f){this.a=d
this.b=e
this.c=f},
bQv:function bQv(){},
bQu:function bQu(d,e,f){this.a=d
this.b=e
this.c=f},
bQt:function bQt(d,e){this.a=d
this.b=e},
aGj:function aGj(d){this.a=d},
bVd:function bVd(d){this.a=d}},D,F,G,H
J=c[1]
A=c[0]
C=c[2]
E=c[96]
B=a.updateHolder(c[25],B)
D=c[354]
F=c[150]
G=c[237]
H=c[249]
B.pD.prototype={}
B.Lm.prototype={
bg(d,e){var x=null,w=e.H($.cTS(),y.c)
return A.cP(x,C.bz,A.bE(!0,new A.mg(A.a([A.aG(x,A.ax(d,C.b4,y.w).w.r.b,x),D.bMV],y.p),A.hq(w,new B.blH(e),new B.blI(e),new B.blJ(),!1,!0,!1),x),x,C.a_,!1),!0,x)}}
B.aEs.prototype={
u(d){var x=null,w=this.c,v=B.dGR(w),u=w.y,t=u<=0?0:C.k.ag(w.Q/u,0,1),s=A.W(22),r=w.c,q=A.a4(A.h(r,x,x,x,x,C.ae,x,x,x),1),p=A.W(999),o=y.p
p=A.N(A.a([new A.cp(r,44,w.d,!1,!0,x),C.af,q,A.B(x,A.h(v.a,x,x,x,x,A.aI(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.L(v.b,x,x,p,x,x,C.y),x,x,x,C.i7,x,x,x)],o),C.w,C.h,C.l,0,x,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.Q6(r))
return A.aW(A.B(x,A.y(A.a([p,C.aY,A.h(C.e.a0(q," \xb7 "),x,x,x,x,C.O,x,x,x),C.R,new A.l4(t,5,x,C.bE,x),C.aF,A.h("Recebido "+A.aM(w.Q,!0)+" de "+A.aM(u,!0),x,x,x,x,C.bb,x,x,x)],o),C.H,C.h,C.l,0,C.u),C.r,x,x,new A.L(C.t,x,x,s,C.bi,x,C.y),x,x,x,C.bh,x,x,x),new B.bQw(this,d,w),x)},
bjr(d,e){A.c1(C.t,new B.bQu(e,new B.bQv(),d),!1,d,!0,!0,C.mo,y.H)}}
B.aGj.prototype={
u(d){return A.bN(new A.Q(C.bV,A.y(A.a([D.c0C,C.cR,D.cgD,C.S,D.ceW,C.bj,E.d9h("Ver pedidos",new B.bVd(d))],y.p),C.w,C.h,C.K,0,C.u),null),null,null)}}
var z=a.updateTypes(["S(S,pD)","F<t<pD>>(av)","pD()","e(t<pD>)"])
B.cM3.prototype={
$1(d){return this.aH_(d)},
aH_(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.H(A.cI($.ba(),new B.cM1(),y.D,q),q)
if(p==null){v=D.bAs
x=1
break}q=$.R().b
q===$&&A.b()
x=3
return A.d(q.R("bookings").am(0,"*, proposals(title, description, payment_terms), events(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").V("partner_id",p).d1(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bh(u,y.P),s=A.u(t),t=new A.al(t,t.gA(t),s.i("al<V.E>")),s=s.i("V.E");t.t();){r=t.d
q.push(new B.cM2(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cM1.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:19}
B.cM2.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k="booking_number",j="event_date",i=this.a,h=J.a7(i),g=y.h,f=g.a(h.h(i,"events")),e=g.a(h.h(i,"proposals"))
g=f==null
x=A.C(g?l:J.i(f,"partner_name_1"))
if(x==null)x=""
w=A.C(g?l:J.i(f,"partner_name_2"))
if(w==null)w=""
v=y.g.a(h.h(i,"payments"))
if(v==null)v=C.am
u=J.bh(v,y.P)
A.a_(h.h(i,"id"))
if(h.h(i,k)==null)v=l
else{v=h.h(i,k)
t=y.Y.a(h.h(i,"partner_profiles"))
t=t==null?l:J.i(t,"business_name")
v=F.cH8(v,J.cA(t==null?"":t),h.h(i,"reference"))}if(x.length===0)t="Cliente"
else t=w.length===0?x:x+" & "+w
s=A.C(g?l:J.i(f,"profile_photo_url"))
if(s==null)s=A.C(g?l:J.i(f,"cover_photo_url"))
r=h.h(i,j)==null?l:A.dc(A.a_(h.h(i,j)))
q=A.C(g?l:J.i(f,"venue"))
if((q==null?l:q.length!==0)===!0){f.toString
g=A.a_(J.i(f,"venue"))}else{q=A.C(g?l:J.i(f,"location"))
g=q}q=e==null
p=A.C(q?l:J.i(e,"title"))
if(p==null)p="Servi\xe7o"
o=A.C(q?l:J.i(e,"description"))
n=A.C(q?l:J.i(e,"payment_terms"))
m=A.aL(h.h(i,"total_amount"))
q=m==null?l:m
if(q==null)q=0
m=A.aL(h.h(i,"deposit_amount"))
if(m==null)m=l
if(m==null)m=0
return new B.pD(v,t,s,r,g,p,o,n,q,m,new A.a6(u,new B.cM_(),A.u(u).i("a6<V.E>")).cY(0,0,new B.cM0()),A.a_(h.h(i,"status")))},
$S:z+2}
B.cM_.prototype={
$1(d){return J.o(J.i(d,"status"),"paid")},
$S:33}
B.cM0.prototype={
$2(d,e){return d+A.ds(J.i(e,"amount"))},
$S:155}
B.blJ.prototype={
$0(){return C.ep},
$S:45}
B.blI.prototype={
$2(d,e){return new A.jf("N\xe3o foi poss\xedvel carregar.",new B.blE(this.a),null)},
$S:49}
B.blE.prototype={
$0(){return this.a.aj($.cTS())},
$S:0}
B.blH.prototype={
$1(d){var x,w=null,v=J.a7(d)
if(v.gZ(d))v=D.cnt
else{x=A.a([new A.f4(new B.blF(d),w),C.a1],y.p)
for(v=v.gX(d);v.t();)x.push(new A.Q(C.jE,new B.aEs(v.gE(v),w),w))
v=A.yg(A.d0(x,w,H.NU,w,w,!1,C.a3,!1),w,new B.blG(this.a))}return v},
$S:z+3}
B.blG.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.aj($.cTS())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.blF.prototype={
$1(d){var x=this.a,w=J.cb(x),v=w.cY(x,0,new B.blC()),u=w.cY(x,0,new B.blD()),t=A.aM(v,!1),s=w.gA(x)
x=w.gA(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.arJ(D.b7o,A.e1(C.bf,A.a([new A.v8("Recebido "+A.aM(u,!1),!0,!1,null),new A.v8("Falta "+A.aM(C.k.ag(v-u,0,1/0),!1),!1,!1,null)],y.p),C.r,C.bl,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:1508}
B.blC.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.blD.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bQw.prototype={
$0(){return this.a.bjr(this.b,this.c)},
$S:0}
B.bQv.prototype={
$2(d,e){var x=null
return new A.Q(C.dV,A.N(A.a([A.aG(A.h(d,x,x,x,x,C.O,x,x,x),x,110),A.a4(A.h(e,x,x,x,x,C.dP,x,x,x),1)],y.p),C.H,C.h,C.l,0,x,x),x)},
$S:150}
B.bQu.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.h(u==null?"Contrato":"Contrato "+u,w,w,w,w,C.hh,C.a6,w,w),C.aC,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
x=v.e
if(x!=null)u.push(t.$2("Data",A.Q6(x)))
x=v.f
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Local",x))}u.push(t.$2("Valor",A.aM(v.y,!0)))
u.push(t.$2("Sinal",A.aM(v.z,!0)))
u.push(t.$2("Recebido",A.aM(v.Q,!0)))
x=v.w
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Descri\xe7\xe3o",x))}v=v.x
if((v==null?w:v.length!==0)===!0){v.toString
u.push(t.$2("Condi\xe7\xf5es",v))}u.push(C.aC)
u.push(A.Le(D.aDD,D.cc1,new B.bQt(d,this.c),w))
return A.bE(!0,new A.Q(D.aub,A.dQ(A.y(u,C.G,C.h,C.l,0,C.u),C.z,w,w,w,w,C.a3),w),w,C.a_,!0)},
$S:47}
B.bQt.prototype={
$0(){A.am(this.a,!1).bx()
A.ah(this.b).bS(0,"/partner-messages",null)},
$S:0}
B.bVd.prototype={
$0(){return A.ah(this.a).bS(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.pD,A.K)
w(A.by,[B.cM3,B.cM1,B.cM_,B.blH,B.blF,B.bQu])
w(A.bR,[B.cM2,B.blJ,B.blE,B.blG,B.bQw,B.bQt,B.bVd])
w(A.cN,[B.cM0,B.blI,B.blC,B.blD,B.bQv])
x(B.Lm,A.eq)
w(A.I,[B.aEs,B.aGj])})()
A.bq(b.typeUniverse,JSON.parse('{"Lm":{"G":[],"e":[],"f":[]},"aEs":{"I":[],"e":[],"f":[]},"aGj":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{c:x("ay<t<pD>>"),D:x("cF"),o:x("r<pD>"),s:x("r<c>"),p:x("r<e>"),y:x("t<pD>"),P:x("a5<c,@>"),w:x("df"),g:x("t<@>?"),h:x("a5<c,@>?"),Y:x("a5<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aub=new A.a2(20,18,20,20)
D.aDD=new A.b7(C.fY,18,null,null,null,null)
D.b7o=x([C.lS,C.ek,C.bQ],A.w("r<aV>"))
D.bAs=x([],y.o)
D.bMV=new A.lI("Contratos",null,!0,null,20,!0,null)
D.bTQ=new A.bW("Em an\xe1lise",C.a7,C.V)
D.bTV=new A.bW("Cancelado",C.a7,C.V)
D.bUb=new A.bW("Expirado",C.a7,C.V)
D.bUc=new A.bW("Aguarda sinal",C.uA,C.uE)
D.bUo=new A.bW("Falta o restante",C.uA,C.uE)
D.c0C=new A.N1(C.lS,-0.016,96,null)
D.cc1=new A.D("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.ceW=new A.D("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,G.IK,C.a6,null,null,null,null,null,null,null)
D.cgD=new A.D("Ainda sem contratos",null,C.bk,C.a6,null,null,null,null,null,null,null)
D.cnt=new B.aGj(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dY5","cTS",()=>A.eI(new B.cM3(),null,!1,null,null,y.y))})()};
(a=>{a["ro/ZaFtDqXt12piT14O/eqHSSuE="]=a.current})($__dart_deferred_initializers__);