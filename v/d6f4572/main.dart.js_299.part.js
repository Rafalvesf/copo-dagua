((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dFE(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bU3
break A}if("confirmed"===w){x=new A.bW("Em vigor",C.fP,$.at)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.bW("Conclu\xeddo",C.fP,$.at):D.bUf
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bTM
break A}if("expired"===w){x=D.bU2
break A}x=D.bTH
break A}return x},
dsv(){return new B.Lk(null)},
pB:function pB(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cL_:function cL_(){},
cKY:function cKY(){},
cKZ:function cKZ(d){this.a=d},
cKW:function cKW(){},
cKX:function cKX(){},
Lk:function Lk(d){this.a=d},
blt:function blt(){},
bls:function bls(d){this.a=d},
blo:function blo(d){this.a=d},
blr:function blr(d){this.a=d},
blq:function blq(d){this.a=d},
blp:function blp(d){this.a=d},
blm:function blm(){},
bln:function bln(){},
aEj:function aEj(d,e){this.c=d
this.a=e},
bQb:function bQb(d,e,f){this.a=d
this.b=e
this.c=f},
bQa:function bQa(){},
bQ9:function bQ9(d,e,f){this.a=d
this.b=e
this.c=f},
bQ8:function bQ8(d,e){this.a=d
this.b=e},
aGa:function aGa(d){this.a=d},
bUT:function bUT(d){this.a=d}},D,F,G,H
J=c[1]
A=c[0]
C=c[2]
E=c[97]
B=a.updateHolder(c[25],B)
D=c[352]
F=c[150]
G=c[237]
H=c[247]
B.pB.prototype={}
B.Lk.prototype={
bg(d,e){var x=null,w=e.H($.cSK(),y.c)
return A.cP(x,C.bz,A.bC(!0,new A.mg(A.a([A.aG(x,A.aw(d,C.b4,y.w).w.r.b,x),D.bMO],y.p),A.hp(w,new B.blr(e),new B.bls(e),new B.blt(),!1,!0,!1),x),x,C.a_,!1),!0,x)}}
B.aEj.prototype={
u(d){var x=null,w=this.c,v=B.dFE(w),u=w.y,t=u<=0?0:C.k.af(w.Q/u,0,1),s=A.W(22),r=w.c,q=A.a4(A.h(r,x,x,x,x,C.ae,x,x,x),1),p=A.W(999),o=y.p
p=A.N(A.a([new A.cy(r,44,w.d,!1,!0,x),C.af,q,A.B(x,A.h(v.a,x,x,x,x,A.aH(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.M(v.b,x,x,p,x,x,C.y),x,x,x,C.lC,x,x,x)],o),C.w,C.h,C.l,0,x,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.Q_(r))
return A.aW(A.B(x,A.A(A.a([p,C.b1,A.h(C.e.a2(q," \xb7 "),x,x,x,x,C.P,x,x,x),C.R,new A.l4(t,5,x,C.bD,x),C.aF,A.h("Recebido "+A.aM(w.Q,!0)+" de "+A.aM(u,!0),x,x,x,x,C.bd,x,x,x)],o),C.H,C.h,C.l,0,C.u),C.r,x,x,new A.M(C.t,x,x,s,C.bh,x,C.y),x,x,x,C.bj,x,x,x),new B.bQb(this,d,w),x)},
bjf(d,e){A.c9(C.t,new B.bQ9(e,new B.bQa(),d),!1,d,!0,!0,C.mk,y.H)}}
B.aGa.prototype={
u(d){return A.bO(new A.Q(C.bU,A.A(A.a([D.c0s,C.cN,D.cgs,C.S,D.ceM,C.bi,E.d88("Ver pedidos",new B.bUT(d))],y.p),C.w,C.h,C.K,0,C.u),null),null,null)}}
var z=a.updateTypes(["R(R,pB)","F<t<pB>>(au)","pB()","e(t<pB>)"])
B.cL_.prototype={
$1(d){return this.aGO(d)},
aGO(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.H(A.cH($.ba(),new B.cKY(),y.D,q),q)
if(p==null){v=D.bAl
x=1
break}q=$.S().b
q===$&&A.b()
x=3
return A.d(q.R("bookings").an(0,"*, proposals(title, description, payment_terms), events(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").W("partner_id",p).d4(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bl(u,y.P),s=A.u(t),t=new A.al(t,t.gA(t),s.i("al<V.E>")),s=s.i("V.E");t.t();){r=t.d
q.push(new B.cKZ(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cKY.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.cKZ.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k="booking_number",j="event_date",i=this.a,h=J.a7(i),g=y.h,f=g.a(h.h(i,"events")),e=g.a(h.h(i,"proposals"))
g=f==null
x=A.D(g?l:J.i(f,"partner_name_1"))
if(x==null)x=""
w=A.D(g?l:J.i(f,"partner_name_2"))
if(w==null)w=""
v=y.g.a(h.h(i,"payments"))
if(v==null)v=C.am
u=J.bl(v,y.P)
A.a1(h.h(i,"id"))
if(h.h(i,k)==null)v=l
else{v=h.h(i,k)
t=y.Y.a(h.h(i,"partner_profiles"))
t=t==null?l:J.i(t,"business_name")
v=F.cGa(v,J.cA(t==null?"":t),h.h(i,"reference"))}if(x.length===0)t="Cliente"
else t=w.length===0?x:x+" & "+w
s=A.D(g?l:J.i(f,"profile_photo_url"))
if(s==null)s=A.D(g?l:J.i(f,"cover_photo_url"))
r=h.h(i,j)==null?l:A.db(A.a1(h.h(i,j)))
q=A.D(g?l:J.i(f,"venue"))
if((q==null?l:q.length!==0)===!0){f.toString
g=A.a1(J.i(f,"venue"))}else{q=A.D(g?l:J.i(f,"location"))
g=q}q=e==null
p=A.D(q?l:J.i(e,"title"))
if(p==null)p="Servi\xe7o"
o=A.D(q?l:J.i(e,"description"))
n=A.D(q?l:J.i(e,"payment_terms"))
m=A.aL(h.h(i,"total_amount"))
q=m==null?l:m
if(q==null)q=0
m=A.aL(h.h(i,"deposit_amount"))
if(m==null)m=l
if(m==null)m=0
return new B.pB(v,t,s,r,g,p,o,n,q,m,new A.a6(u,new B.cKW(),A.u(u).i("a6<V.E>")).d_(0,0,new B.cKX()),A.a1(h.h(i,"status")))},
$S:z+2}
B.cKW.prototype={
$1(d){return J.o(J.i(d,"status"),"paid")},
$S:34}
B.cKX.prototype={
$2(d,e){return d+A.ds(J.i(e,"amount"))},
$S:161}
B.blt.prototype={
$0(){return C.em},
$S:46}
B.bls.prototype={
$2(d,e){return new A.jf("N\xe3o foi poss\xedvel carregar.",new B.blo(this.a),null)},
$S:52}
B.blo.prototype={
$0(){return this.a.ak($.cSK())},
$S:0}
B.blr.prototype={
$1(d){var x,w=null,v=J.a7(d)
if(v.gZ(d))v=D.cng
else{x=A.a([new A.f3(new B.blp(d),w),C.a1],y.p)
for(v=v.gX(d);v.t();)x.push(new A.Q(C.jA,new B.aEj(v.gE(v),w),w))
v=A.yc(A.d0(x,w,H.NO,w,w,!1,C.a2,!1),w,new B.blq(this.a))}return v},
$S:z+3}
B.blq.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.ak($.cSK())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.blp.prototype={
$1(d){var x=this.a,w=J.cb(x),v=w.d_(x,0,new B.blm()),u=w.d_(x,0,new B.bln()),t=A.aM(v,!1),s=w.gA(x)
x=w.gA(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.arB(D.b7h,A.e0(C.bf,A.a([new A.v5("Recebido "+A.aM(u,!1),!0,!1,null),new A.v5("Falta "+A.aM(C.k.af(v-u,0,1/0),!1),!1,!1,null)],y.p),C.r,C.bl,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:1503}
B.blm.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.bln.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bQb.prototype={
$0(){return this.a.bjf(this.b,this.c)},
$S:0}
B.bQa.prototype={
$2(d,e){var x=null
return new A.Q(C.ec,A.N(A.a([A.aG(A.h(d,x,x,x,x,C.P,x,x,x),x,110),A.a4(A.h(e,x,x,x,x,C.dM,x,x,x),1)],y.p),C.H,C.h,C.l,0,x,x),x)},
$S:144}
B.bQ9.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.h(u==null?"Contrato":"Contrato "+u,w,w,w,w,C.hh,C.a6,w,w),C.aC,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
x=v.e
if(x!=null)u.push(t.$2("Data",A.Q_(x)))
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
u.push(A.Lc(D.aDx,D.cbS,new B.bQ8(d,this.c),w))
return A.bC(!0,new A.Q(D.au4,A.dQ(A.A(u,C.G,C.h,C.l,0,C.u),C.z,w,w,w,w,C.a2),w),w,C.a_,!0)},
$S:43}
B.bQ8.prototype={
$0(){A.am(this.a,!1).bB()
A.ai(this.b).bQ(0,"/partner-messages",null)},
$S:0}
B.bUT.prototype={
$0(){return A.ai(this.a).bQ(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.pB,A.J)
w(A.bx,[B.cL_,B.cKY,B.cKW,B.blr,B.blp,B.bQ9])
w(A.bQ,[B.cKZ,B.blt,B.blo,B.blq,B.bQb,B.bQ8,B.bUT])
w(A.cO,[B.cKX,B.bls,B.blm,B.bln,B.bQa])
x(B.Lk,A.eq)
w(A.H,[B.aEj,B.aGa])})()
A.bn(b.typeUniverse,JSON.parse('{"Lk":{"G":[],"e":[],"f":[]},"aEj":{"H":[],"e":[],"f":[]},"aGa":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{c:x("ay<t<pB>>"),D:x("cE"),o:x("r<pB>"),s:x("r<c>"),p:x("r<e>"),y:x("t<pB>"),P:x("a5<c,@>"),w:x("df"),g:x("t<@>?"),h:x("a5<c,@>?"),Y:x("a5<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.au4=new A.a0(20,18,20,20)
D.aDx=new A.b7(C.fY,18,null,null,null,null)
D.b7h=x([C.lP,C.eg,C.bN],A.w("r<aV>"))
D.bAl=x([],y.o)
D.bMO=new A.lI("Contratos",null,!0,null,20,!0,null)
D.bTH=new A.bW("Em an\xe1lise",C.a7,C.U)
D.bTM=new A.bW("Cancelado",C.a7,C.U)
D.bU2=new A.bW("Expirado",C.a7,C.U)
D.bU3=new A.bW("Aguarda sinal",C.uw,C.uA)
D.bUf=new A.bW("Falta o restante",C.uw,C.uA)
D.c0s=new A.N_(C.lP,-0.016,96,null)
D.cbS=new A.C("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.ceM=new A.C("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,G.IF,C.a6,null,null,null,null,null,null,null)
D.cgs=new A.C("Ainda sem contratos",null,C.bk,C.a6,null,null,null,null,null,null,null)
D.cng=new B.aGa(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWP","cSK",()=>A.eG(new B.cL_(),null,!1,null,null,y.y))})()};
(a=>{a["3P/TlgBgy7e0dBu4AFrrnGqscZs="]=a.current})($__dart_deferred_initializers__);