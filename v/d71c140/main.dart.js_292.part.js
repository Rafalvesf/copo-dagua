((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dEg(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bU8
break A}if("confirmed"===w){x=new A.bW("Em vigor",C.fO,$.ar)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.bW("Conclu\xeddo",C.fO,$.ar):D.bUi
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bTP
break A}if("expired"===w){x=D.bU7
break A}x=D.bTK
break A}return x},
dr8(){return new B.Lh(null)},
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
cJI:function cJI(){},
cJG:function cJG(){},
cJH:function cJH(d){this.a=d},
cJE:function cJE(){},
cJF:function cJF(){},
Lh:function Lh(d){this.a=d},
blb:function blb(){},
bla:function bla(d){this.a=d},
bl6:function bl6(d){this.a=d},
bl9:function bl9(d){this.a=d},
bl8:function bl8(d){this.a=d},
bl7:function bl7(d){this.a=d},
bl4:function bl4(){},
bl5:function bl5(){},
aE6:function aE6(d,e){this.c=d
this.a=e},
bPy:function bPy(d,e,f){this.a=d
this.b=e
this.c=f},
bPx:function bPx(){},
bPw:function bPw(d,e,f){this.a=d
this.b=e
this.c=f},
bPv:function bPv(d,e){this.a=d
this.b=e},
aFX:function aFX(d){this.a=d},
bU4:function bU4(d){this.a=d}},D,F,G,H
J=c[1]
A=c[0]
C=c[2]
E=c[97]
B=a.updateHolder(c[25],B)
D=c[350]
F=c[149]
G=c[232]
H=c[241]
B.pz.prototype={}
B.Lh.prototype={
bc(d,e){var x=null,w=e.H($.cRp(),y.c)
return A.cO(x,C.by,A.bC(!0,new A.mg(A.a([A.aI(x,A.aw(d,C.b2,y.w).w.r.b,x),D.bMQ],y.p),A.hn(w,new B.bl9(e),new B.bla(e),new B.blb(),!1,!0,!1),x),x,C.Z,!1),!0,x)}}
B.aE6.prototype={
u(d){var x=null,w=this.c,v=B.dEg(w),u=w.y,t=u<=0?0:C.k.ae(w.Q/u,0,1),s=A.X(22),r=w.c,q=A.a4(A.h(r,x,x,x,x,C.aj,x,x,x),1),p=A.X(999),o=y.p
p=A.P(A.a([new A.cv(r,44,w.d,!1,!0,x),C.af,q,A.A(x,A.h(v.a,x,x,x,x,A.aF(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.M(v.b,x,x,p,x,x,C.y),x,x,x,C.nu,x,x,x)],o),C.w,C.i,C.m,0,x,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.PT(r))
return A.aU(A.A(x,A.B(A.a([p,C.b0,A.h(C.e.a2(q," \xb7 "),x,x,x,x,C.R,x,x,x),C.Q,new A.l2(t,5,x,C.bA,x),C.aE,A.h("Recebido "+A.aQ(w.Q,!0)+" de "+A.aQ(u,!0),x,x,x,x,C.bc,x,x,x)],o),C.G,C.i,C.m,0,C.v),C.r,x,x,new A.M(C.t,x,x,s,C.bg,x,C.y),x,x,x,C.bj,x,x,x),new B.bPy(this,d,w),x)},
biH(d,e){A.cc(C.t,new B.bPw(e,new B.bPx(),d),!1,d,!0,!0,C.mg,y.H)}}
B.aFX.prototype={
u(d){return A.bO(new A.Q(C.bO,A.B(A.a([D.c0p,C.cM,D.cge,C.X,D.ceA,C.bi,E.d6P("Ver pedidos",new B.bU4(d))],y.p),C.w,C.i,C.K,0,C.v),null),null,null)}}
var z=a.updateTypes(["R(R,pz)","F<t<pz>>(au)","pz()","e(t<pz>)"])
B.cJI.prototype={
$1(d){return this.aGq(d)},
aGq(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.H(A.cw($.b8(),new B.cJG(),y.D,q),q)
if(p==null){v=D.bAn
x=1
break}q=$.S().b
q===$&&A.b()
x=3
return A.d(q.R("bookings").az(0,"*, proposals(title, description, payment_terms), events(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").X("partner_id",p).dl(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bl(u,y.P),s=A.u(t),t=new A.ak(t,t.gA(t),s.i("ak<V.E>")),s=s.i("V.E");t.t();){r=t.d
q.push(new B.cJH(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cJG.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:16}
B.cJH.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k="booking_number",j="event_date",i=this.a,h=J.a7(i),g=y.h,f=g.a(h.h(i,"events")),e=g.a(h.h(i,"proposals"))
g=f==null
x=A.E(g?l:J.i(f,"partner_name_1"))
if(x==null)x=""
w=A.E(g?l:J.i(f,"partner_name_2"))
if(w==null)w=""
v=y.g.a(h.h(i,"payments"))
if(v==null)v=C.am
u=J.bl(v,y.P)
A.a2(h.h(i,"id"))
if(h.h(i,k)==null)v=l
else{v=h.h(i,k)
t=y.Y.a(h.h(i,"partner_profiles"))
t=t==null?l:J.i(t,"business_name")
v=F.cET(v,J.cy(t==null?"":t),h.h(i,"reference"))}if(x.length===0)t="Cliente"
else t=w.length===0?x:x+" & "+w
s=A.E(g?l:J.i(f,"profile_photo_url"))
if(s==null)s=A.E(g?l:J.i(f,"cover_photo_url"))
r=h.h(i,j)==null?l:A.da(A.a2(h.h(i,j)))
q=A.E(g?l:J.i(f,"venue"))
if((q==null?l:q.length!==0)===!0){f.toString
g=A.a2(J.i(f,"venue"))}else{q=A.E(g?l:J.i(f,"location"))
g=q}q=e==null
p=A.E(q?l:J.i(e,"title"))
if(p==null)p="Servi\xe7o"
o=A.E(q?l:J.i(e,"description"))
n=A.E(q?l:J.i(e,"payment_terms"))
m=A.aL(h.h(i,"total_amount"))
q=m==null?l:m
if(q==null)q=0
m=A.aL(h.h(i,"deposit_amount"))
if(m==null)m=l
if(m==null)m=0
return new B.pz(v,t,s,r,g,p,o,n,q,m,new A.a6(u,new B.cJE(),A.u(u).i("a6<V.E>")).d2(0,0,new B.cJF()),A.a2(h.h(i,"status")))},
$S:z+2}
B.cJE.prototype={
$1(d){return J.o(J.i(d,"status"),"paid")},
$S:35}
B.cJF.prototype={
$2(d,e){return d+A.dv(J.i(e,"amount"))},
$S:189}
B.blb.prototype={
$0(){return C.ek},
$S:47}
B.bla.prototype={
$2(d,e){return new A.jd("N\xe3o foi poss\xedvel carregar.",new B.bl6(this.a),null)},
$S:52}
B.bl6.prototype={
$0(){return this.a.ai($.cRp())},
$S:0}
B.bl9.prototype={
$1(d){var x,w=null,v=J.a7(d)
if(v.gY(d))v=D.cmY
else{x=A.a([new A.f2(new B.bl7(d),w),C.a1],y.p)
for(v=v.gV(d);v.t();)x.push(new A.Q(C.jy,new B.aE6(v.gE(v),w),w))
v=A.yc(A.cX(x,w,H.NO,w,w,!1,C.a2,!1),w,new B.bl8(this.a))}return v},
$S:z+3}
B.bl8.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.ai($.cRp())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.bl7.prototype={
$1(d){var x=this.a,w=J.c5(x),v=w.d2(x,0,new B.bl4()),u=w.d2(x,0,new B.bl5()),t=A.aQ(v,!1),s=w.gA(x)
x=w.gA(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.arq(D.b7k,A.eb(C.bf,A.a([new A.v5("Recebido "+A.aQ(u,!1),!0,!1,null),new A.v5("Falta "+A.aQ(C.k.ae(v-u,0,1/0),!1),!1,!1,null)],y.p),C.r,C.bn,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:1505}
B.bl4.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.bl5.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bPy.prototype={
$0(){return this.a.biH(this.b,this.c)},
$S:0}
B.bPx.prototype={
$2(d,e){var x=null
return new A.Q(C.e1,A.P(A.a([A.aI(A.h(d,x,x,x,x,C.R,x,x,x),x,110),A.a4(A.h(e,x,x,x,x,C.dt,x,x,x),1)],y.p),C.G,C.i,C.m,0,x,x),x)},
$S:143}
B.bPw.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.h(u==null?"Contrato":"Contrato "+u,w,w,w,w,C.hd,C.a6,w,w),C.aC,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
x=v.e
if(x!=null)u.push(t.$2("Data",A.PT(x)))
x=v.f
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Local",x))}u.push(t.$2("Valor",A.aQ(v.y,!0)))
u.push(t.$2("Sinal",A.aQ(v.z,!0)))
u.push(t.$2("Recebido",A.aQ(v.Q,!0)))
x=v.w
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Descri\xe7\xe3o",x))}v=v.x
if((v==null?w:v.length!==0)===!0){v.toString
u.push(t.$2("Condi\xe7\xf5es",v))}u.push(C.aC)
u.push(A.L9(D.aDD,D.cbM,new B.bPv(d,this.c),w))
return A.bC(!0,new A.Q(D.au9,A.dO(A.B(u,C.I,C.i,C.m,0,C.v),C.z,w,w,w,w,C.a2),w),w,C.Z,!0)},
$S:46}
B.bPv.prototype={
$0(){A.an(this.a,!1).bB()
A.ai(this.b).bS(0,"/partner-messages",null)},
$S:0}
B.bU4.prototype={
$0(){return A.ai(this.a).bS(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.pz,A.K)
w(A.bw,[B.cJI,B.cJG,B.cJE,B.bl9,B.bl7,B.bPw])
w(A.bS,[B.cJH,B.blb,B.bl6,B.bl8,B.bPy,B.bPv,B.bU4])
w(A.cQ,[B.cJF,B.bla,B.bl4,B.bl5,B.bPx])
x(B.Lh,A.ep)
w(A.I,[B.aE6,B.aFX])})()
A.bp(b.typeUniverse,JSON.parse('{"Lh":{"G":[],"e":[],"f":[]},"aE6":{"I":[],"e":[],"f":[]},"aFX":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{c:x("ay<t<pz>>"),D:x("cE"),o:x("r<pz>"),s:x("r<c>"),p:x("r<e>"),y:x("t<pz>"),P:x("a5<c,@>"),w:x("dg"),g:x("t<@>?"),h:x("a5<c,@>?"),Y:x("a5<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.au9=new A.a0(20,18,20,20)
D.aDD=new A.ba(C.fs,18,null,null,null,null)
D.b7k=x([C.nT,C.ef,C.bP],A.w("r<aW>"))
D.bAn=x([],y.o)
D.bMQ=new A.lH("Contratos",null,!0,null,20,!0,null)
D.bTK=new A.bW("Em an\xe1lise",C.aa,C.T)
D.bTP=new A.bW("Cancelado",C.aa,C.T)
D.bU7=new A.bW("Expirado",C.aa,C.T)
D.bU8=new A.bW("Aguarda sinal",C.uq,C.uu)
D.bUi=new A.bW("Falta o restante",C.uq,C.uu)
D.c0p=new A.MX(C.nT,-0.016,96,null)
D.cbM=new A.C("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.ceA=new A.C("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,G.IB,C.a6,null,null,null,null,null,null,null)
D.cge=new A.C("Ainda sem contratos",null,C.bl,C.a6,null,null,null,null,null,null,null)
D.cmY=new B.aFX(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVq","cRp",()=>A.eF(new B.cJI(),null,!1,null,null,y.y))})()};
(a=>{a["hYp6SNc7o9RlsAtblsI0qyffx7Q="]=a.current})($__dart_deferred_initializers__);