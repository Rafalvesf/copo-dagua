((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dDA(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bU1
break A}if("confirmed"===w){x=new A.bW("Em vigor",C.fL,$.ar)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.bW("Conclu\xeddo",C.fL,$.ar):D.bUb
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bTI
break A}if("expired"===w){x=D.bU0
break A}x=D.bTD
break A}return x},
dqs(){return new B.Lf(null)},
pz:function pz(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cJb:function cJb(){},
cJ9:function cJ9(){},
cJa:function cJa(d){this.a=d},
cJ7:function cJ7(){},
cJ8:function cJ8(){},
Lf:function Lf(d){this.a=d},
bkU:function bkU(){},
bkT:function bkT(d){this.a=d},
bkP:function bkP(d){this.a=d},
bkS:function bkS(d){this.a=d},
bkR:function bkR(d){this.a=d},
bkQ:function bkQ(d){this.a=d},
bkN:function bkN(){},
bkO:function bkO(){},
aDQ:function aDQ(d,e){this.c=d
this.a=e},
bPb:function bPb(d,e,f){this.a=d
this.b=e
this.c=f},
bPa:function bPa(){},
bP9:function bP9(d,e,f){this.a=d
this.b=e
this.c=f},
bP8:function bP8(d,e){this.a=d
this.b=e},
aFG:function aFG(d){this.a=d},
bTL:function bTL(d){this.a=d}},D,F,G,H
J=c[1]
A=c[0]
C=c[2]
E=c[96]
B=a.updateHolder(c[25],B)
D=c[347]
F=c[148]
G=c[231]
H=c[240]
B.pz.prototype={}
B.Lf.prototype={
bc(d,e){var x=null,w=e.H($.cQN(),y.c)
return A.cO(x,C.by,A.bF(!0,new A.mg(A.a([A.aI(x,A.aw(d,C.b0,y.w).w.r.b,x),D.bMK],y.p),A.hn(w,new B.bkS(e),new B.bkT(e),new B.bkU(),!1,!0,!1),x),x,C.a_,!1),!0,x)}}
B.aDQ.prototype={
u(d){var x=null,w=this.c,v=B.dDA(w),u=w.y,t=u<=0?0:C.k.ae(w.Q/u,0,1),s=A.Y(22),r=w.c,q=A.a5(A.h(r,x,x,x,x,C.aj,x,x,x),1),p=A.Y(999),o=y.p
p=A.P(A.a([new A.cw(r,44,w.d,!1,!0,x),C.ah,q,A.A(x,A.h(v.a,x,x,x,x,A.aF(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.M(v.b,x,x,p,x,x,C.y),x,x,x,C.ns,x,x,x)],o),C.w,C.i,C.m,0,x,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.PQ(r))
return A.aU(A.A(x,A.B(A.a([p,C.bc,A.h(C.e.a2(q," \xb7 "),x,x,x,x,C.T,x,x,x),C.Q,new A.l2(t,5,x,C.bA,x),C.aE,A.h("Recebido "+A.aQ(w.Q,!0)+" de "+A.aQ(u,!0),x,x,x,x,C.ba,x,x,x)],o),C.G,C.i,C.m,0,C.v),C.r,x,x,new A.M(C.t,x,x,s,C.bf,x,C.y),x,x,x,C.bj,x,x,x),new B.bPb(this,d,w),x)},
biA(d,e){A.co(C.t,new B.bP9(e,new B.bPa(),d),!1,d,!0,!0,C.ma,y.H)}}
B.aFG.prototype={
u(d){return A.bO(new A.Q(C.bM,A.B(A.a([D.c0i,C.cL,D.cg2,C.X,D.cep,C.bg,E.d6c("Ver pedidos",new B.bTL(d))],y.p),C.w,C.i,C.K,0,C.v),null),null,null)}}
var z=a.updateTypes(["R(R,pz)","F<t<pz>>(au)","pz()","e(t<pz>)"])
B.cJb.prototype={
$1(d){return this.aGl(d)},
aGl(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.H(A.cv($.b8(),new B.cJ9(),y.D,q),q)
if(p==null){v=D.bAg
x=1
break}q=$.T().b
q===$&&A.b()
x=3
return A.d(q.R("bookings").az(0,"*, proposals(title, description, payment_terms), events(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").X("partner_id",p).dl(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bl(u,y.P),s=A.u(t),t=new A.ak(t,t.gA(t),s.i("ak<U.E>")),s=s.i("U.E");t.t();){r=t.d
q.push(new B.cJa(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cJ9.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.cJa.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k="booking_number",j="event_date",i=this.a,h=J.a7(i),g=y.h,f=g.a(h.h(i,"events")),e=g.a(h.h(i,"proposals"))
g=f==null
x=A.E(g?l:J.i(f,"partner_name_1"))
if(x==null)x=""
w=A.E(g?l:J.i(f,"partner_name_2"))
if(w==null)w=""
v=y.g.a(h.h(i,"payments"))
if(v==null)v=C.al
u=J.bl(v,y.P)
A.a2(h.h(i,"id"))
if(h.h(i,k)==null)v=l
else{v=h.h(i,k)
t=y.Y.a(h.h(i,"partner_profiles"))
t=t==null?l:J.i(t,"business_name")
v=F.cEn(v,J.cy(t==null?"":t),h.h(i,"reference"))}if(x.length===0)t="Cliente"
else t=w.length===0?x:x+" & "+w
s=A.E(g?l:J.i(f,"profile_photo_url"))
if(s==null)s=A.E(g?l:J.i(f,"cover_photo_url"))
r=h.h(i,j)==null?l:A.d9(A.a2(h.h(i,j)))
q=A.E(g?l:J.i(f,"venue"))
if((q==null?l:q.length!==0)===!0){f.toString
g=A.a2(J.i(f,"venue"))}else{q=A.E(g?l:J.i(f,"location"))
g=q}q=e==null
p=A.E(q?l:J.i(e,"title"))
if(p==null)p="Servi\xe7o"
o=A.E(q?l:J.i(e,"description"))
n=A.E(q?l:J.i(e,"payment_terms"))
m=A.aK(h.h(i,"total_amount"))
q=m==null?l:m
if(q==null)q=0
m=A.aK(h.h(i,"deposit_amount"))
if(m==null)m=l
if(m==null)m=0
return new B.pz(v,t,s,r,g,p,o,n,q,m,new A.a6(u,new B.cJ7(),A.u(u).i("a6<U.E>")).d2(0,0,new B.cJ8()),A.a2(h.h(i,"status")))},
$S:z+2}
B.cJ7.prototype={
$1(d){return J.o(J.i(d,"status"),"paid")},
$S:35}
B.cJ8.prototype={
$2(d,e){return d+A.du(J.i(e,"amount"))},
$S:155}
B.bkU.prototype={
$0(){return C.ei},
$S:48}
B.bkT.prototype={
$2(d,e){return new A.jd("N\xe3o foi poss\xedvel carregar.",new B.bkP(this.a),null)},
$S:50}
B.bkP.prototype={
$0(){return this.a.ai($.cQN())},
$S:0}
B.bkS.prototype={
$1(d){var x,w=null,v=J.a7(d)
if(v.gY(d))v=D.cmJ
else{x=A.a([new A.f2(new B.bkQ(d),w),C.a3],y.p)
for(v=v.gV(d);v.t();)x.push(new A.Q(C.jw,new B.aDQ(v.gE(v),w),w))
v=A.yc(A.cX(x,w,H.NL,w,w,!1,C.a1,!1),w,new B.bkR(this.a))}return v},
$S:z+3}
B.bkR.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.ai($.cQN())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.bkQ.prototype={
$1(d){var x=this.a,w=J.c5(x),v=w.d2(x,0,new B.bkN()),u=w.d2(x,0,new B.bkO()),t=A.aQ(v,!1),s=w.gA(x)
x=w.gA(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.ara(D.b7e,A.ea(C.bd,A.a([new A.v4("Recebido "+A.aQ(u,!1),!0,!1,null),new A.v4("Falta "+A.aQ(C.k.ae(v-u,0,1/0),!1),!1,!1,null)],y.p),C.r,C.bm,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:1503}
B.bkN.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.bkO.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bPb.prototype={
$0(){return this.a.biA(this.b,this.c)},
$S:0}
B.bPa.prototype={
$2(d,e){var x=null
return new A.Q(C.e0,A.P(A.a([A.aI(A.h(d,x,x,x,x,C.T,x,x,x),x,110),A.a5(A.h(e,x,x,x,x,C.dt,x,x,x),1)],y.p),C.G,C.i,C.m,0,x,x),x)},
$S:141}
B.bP9.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.h(u==null?"Contrato":"Contrato "+u,w,w,w,w,C.ha,C.a6,w,w),C.aB,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
x=v.e
if(x!=null)u.push(t.$2("Data",A.PQ(x)))
x=v.f
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Local",x))}u.push(t.$2("Valor",A.aQ(v.y,!0)))
u.push(t.$2("Sinal",A.aQ(v.z,!0)))
u.push(t.$2("Recebido",A.aQ(v.Q,!0)))
x=v.w
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Descri\xe7\xe3o",x))}v=v.x
if((v==null?w:v.length!==0)===!0){v.toString
u.push(t.$2("Condi\xe7\xf5es",v))}u.push(C.aB)
u.push(A.L7(D.aDy,D.cbE,new B.bP8(d,this.c),w))
return A.bF(!0,new A.Q(D.au4,A.dV(A.B(u,C.I,C.i,C.m,0,C.v),C.z,w,w,w,w,C.a1),w),w,C.a_,!0)},
$S:46}
B.bP8.prototype={
$0(){A.ap(this.a,!1).bF()
A.ai(this.b).bS(0,"/partner-messages",null)},
$S:0}
B.bTL.prototype={
$0(){return A.ai(this.a).bS(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.pz,A.J)
w(A.bx,[B.cJb,B.cJ9,B.cJ7,B.bkS,B.bkQ,B.bP9])
w(A.bT,[B.cJa,B.bkU,B.bkP,B.bkR,B.bPb,B.bP8,B.bTL])
w(A.cQ,[B.cJ8,B.bkT,B.bkN,B.bkO,B.bPa])
x(B.Lf,A.eo)
w(A.L,[B.aDQ,B.aFG])})()
A.bq(b.typeUniverse,JSON.parse('{"Lf":{"H":[],"e":[],"f":[]},"aDQ":{"L":[],"e":[],"f":[]},"aFG":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{c:x("ax<t<pz>>"),D:x("cD"),o:x("r<pz>"),s:x("r<c>"),p:x("r<e>"),y:x("t<pz>"),P:x("a4<c,@>"),w:x("dm"),g:x("t<@>?"),h:x("a4<c,@>?"),Y:x("a4<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.au4=new A.a0(20,18,20,20)
D.aDy=new A.b9(C.fp,18,null,null,null,null)
D.b7e=x([C.nS,C.ed,C.bN],A.w("r<aW>"))
D.bAg=x([],y.o)
D.bMK=new A.lH("Contratos",null,!0,null,20,!0,null)
D.bTD=new A.bW("Em an\xe1lise",C.ac,C.S)
D.bTI=new A.bW("Cancelado",C.ac,C.S)
D.bU0=new A.bW("Expirado",C.ac,C.S)
D.bU1=new A.bW("Aguarda sinal",C.up,C.ut)
D.bUb=new A.bW("Falta o restante",C.up,C.ut)
D.c0i=new A.MV(C.nS,-0.016,96,null)
D.cbE=new A.D("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.cep=new A.D("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,G.Iz,C.a6,null,null,null,null,null,null,null)
D.cg2=new A.D("Ainda sem contratos",null,C.bq,C.a6,null,null,null,null,null,null,null)
D.cmJ=new B.aFG(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUI","cQN",()=>A.eE(new B.cJb(),null,!1,null,null,y.y))})()};
(a=>{a["y6NK2+bX3ZrDotc8i/P1j1RtMh8="]=a.current})($__dart_deferred_initializers__);