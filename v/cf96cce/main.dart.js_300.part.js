((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dFt(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bU2
break A}if("confirmed"===w){x=new A.bW("Em vigor",C.fO,$.at)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.bW("Conclu\xeddo",C.fO,$.at):D.bUe
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bTL
break A}if("expired"===w){x=D.bU1
break A}x=D.bTG
break A}return x},
dsl(){return new B.Lk(null)},
pA:function pA(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cKQ:function cKQ(){},
cKO:function cKO(){},
cKP:function cKP(d){this.a=d},
cKM:function cKM(){},
cKN:function cKN(){},
Lk:function Lk(d){this.a=d},
bls:function bls(){},
blr:function blr(d){this.a=d},
bln:function bln(d){this.a=d},
blq:function blq(d){this.a=d},
blp:function blp(d){this.a=d},
blo:function blo(d){this.a=d},
bll:function bll(){},
blm:function blm(){},
aEi:function aEi(d,e){this.c=d
this.a=e},
bQa:function bQa(d,e,f){this.a=d
this.b=e
this.c=f},
bQ9:function bQ9(){},
bQ8:function bQ8(d,e,f){this.a=d
this.b=e
this.c=f},
bQ7:function bQ7(d,e){this.a=d
this.b=e},
aG9:function aG9(d){this.a=d},
bUS:function bUS(d){this.a=d}},D,F,G,H
J=c[1]
A=c[0]
C=c[2]
E=c[97]
B=a.updateHolder(c[25],B)
D=c[352]
F=c[150]
G=c[237]
H=c[247]
B.pA.prototype={}
B.Lk.prototype={
bg(d,e){var x=null,w=e.H($.cSA(),y.c)
return A.cP(x,C.bz,A.bC(!0,new A.mg(A.a([A.aG(x,A.aw(d,C.b4,y.w).w.r.b,x),D.bMN],y.p),A.hp(w,new B.blq(e),new B.blr(e),new B.bls(),!1,!0,!1),x),x,C.a_,!1),!0,x)}}
B.aEi.prototype={
u(d){var x=null,w=this.c,v=B.dFt(w),u=w.y,t=u<=0?0:C.k.af(w.Q/u,0,1),s=A.X(22),r=w.c,q=A.a4(A.h(r,x,x,x,x,C.ae,x,x,x),1),p=A.X(999),o=y.p
p=A.O(A.a([new A.cx(r,44,w.d,!1,!0,x),C.af,q,A.B(x,A.h(v.a,x,x,x,x,A.aI(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.M(v.b,x,x,p,x,x,C.y),x,x,x,C.lD,x,x,x)],o),C.w,C.h,C.l,0,x,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.Q_(r))
return A.aW(A.B(x,A.A(A.a([p,C.b1,A.h(C.e.a2(q," \xb7 "),x,x,x,x,C.P,x,x,x),C.R,new A.l4(t,5,x,C.bD,x),C.aE,A.h("Recebido "+A.aM(w.Q,!0)+" de "+A.aM(u,!0),x,x,x,x,C.bd,x,x,x)],o),C.H,C.h,C.l,0,C.u),C.r,x,x,new A.M(C.t,x,x,s,C.bh,x,C.y),x,x,x,C.bj,x,x,x),new B.bQa(this,d,w),x)},
bjb(d,e){A.c9(C.t,new B.bQ8(e,new B.bQ9(),d),!1,d,!0,!0,C.mk,y.H)}}
B.aG9.prototype={
u(d){return A.bO(new A.Q(C.bU,A.A(A.a([D.c0q,C.cM,D.cgn,C.T,D.ceH,C.bi,E.d7Z("Ver pedidos",new B.bUS(d))],y.p),C.w,C.h,C.K,0,C.u),null),null,null)}}
var z=a.updateTypes(["R(R,pA)","F<t<pA>>(au)","pA()","e(t<pA>)"])
B.cKQ.prototype={
$1(d){return this.aGK(d)},
aGK(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.H(A.cH($.ba(),new B.cKO(),y.D,q),q)
if(p==null){v=D.bAk
x=1
break}q=$.S().b
q===$&&A.b()
x=3
return A.d(q.R("bookings").ao(0,"*, proposals(title, description, payment_terms), events(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").W("partner_id",p).da(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bl(u,y.P),s=A.u(t),t=new A.al(t,t.gA(t),s.i("al<V.E>")),s=s.i("V.E");t.t();){r=t.d
q.push(new B.cKP(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cKO.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:19}
B.cKP.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k="booking_number",j="event_date",i=this.a,h=J.a7(i),g=y.h,f=g.a(h.h(i,"events")),e=g.a(h.h(i,"proposals"))
g=f==null
x=A.D(g?l:J.i(f,"partner_name_1"))
if(x==null)x=""
w=A.D(g?l:J.i(f,"partner_name_2"))
if(w==null)w=""
v=y.g.a(h.h(i,"payments"))
if(v==null)v=C.an
u=J.bl(v,y.P)
A.a1(h.h(i,"id"))
if(h.h(i,k)==null)v=l
else{v=h.h(i,k)
t=y.Y.a(h.h(i,"partner_profiles"))
t=t==null?l:J.i(t,"business_name")
v=F.cG0(v,J.cA(t==null?"":t),h.h(i,"reference"))}if(x.length===0)t="Cliente"
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
return new B.pA(v,t,s,r,g,p,o,n,q,m,new A.a6(u,new B.cKM(),A.u(u).i("a6<V.E>")).d_(0,0,new B.cKN()),A.a1(h.h(i,"status")))},
$S:z+2}
B.cKM.prototype={
$1(d){return J.o(J.i(d,"status"),"paid")},
$S:35}
B.cKN.prototype={
$2(d,e){return d+A.dw(J.i(e,"amount"))},
$S:185}
B.bls.prototype={
$0(){return C.em},
$S:44}
B.blr.prototype={
$2(d,e){return new A.jf("N\xe3o foi poss\xedvel carregar.",new B.bln(this.a),null)},
$S:50}
B.bln.prototype={
$0(){return this.a.ak($.cSA())},
$S:0}
B.blq.prototype={
$1(d){var x,w=null,v=J.a7(d)
if(v.gY(d))v=D.cna
else{x=A.a([new A.f2(new B.blo(d),w),C.a1],y.p)
for(v=v.gX(d);v.t();)x.push(new A.Q(C.jA,new B.aEi(v.gE(v),w),w))
v=A.yc(A.d0(x,w,H.NO,w,w,!1,C.a2,!1),w,new B.blp(this.a))}return v},
$S:z+3}
B.blp.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.ak($.cSA())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.blo.prototype={
$1(d){var x=this.a,w=J.cb(x),v=w.d_(x,0,new B.bll()),u=w.d_(x,0,new B.blm()),t=A.aM(v,!1),s=w.gA(x)
x=w.gA(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.arA(D.b7g,A.e7(C.bf,A.a([new A.v4("Recebido "+A.aM(u,!1),!0,!1,null),new A.v4("Falta "+A.aM(C.k.af(v-u,0,1/0),!1),!1,!1,null)],y.p),C.r,C.bl,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:1502}
B.bll.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.blm.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bQa.prototype={
$0(){return this.a.bjb(this.b,this.c)},
$S:0}
B.bQ9.prototype={
$2(d,e){var x=null
return new A.Q(C.ec,A.O(A.a([A.aG(A.h(d,x,x,x,x,C.P,x,x,x),x,110),A.a4(A.h(e,x,x,x,x,C.dM,x,x,x),1)],y.p),C.H,C.h,C.l,0,x,x),x)},
$S:137}
B.bQ8.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.h(u==null?"Contrato":"Contrato "+u,w,w,w,w,C.hf,C.a6,w,w),C.aC,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
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
u.push(A.Lc(D.aDw,D.cbP,new B.bQ7(d,this.c),w))
return A.bC(!0,new A.Q(D.au3,A.dQ(A.A(u,C.G,C.h,C.l,0,C.u),C.z,w,w,w,w,C.a2),w),w,C.a_,!0)},
$S:45}
B.bQ7.prototype={
$0(){A.am(this.a,!1).bB()
A.ai(this.b).bQ(0,"/partner-messages",null)},
$S:0}
B.bUS.prototype={
$0(){return A.ai(this.a).bQ(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.pA,A.J)
w(A.bw,[B.cKQ,B.cKO,B.cKM,B.blq,B.blo,B.bQ8])
w(A.bQ,[B.cKP,B.bls,B.bln,B.blp,B.bQa,B.bQ7,B.bUS])
w(A.cO,[B.cKN,B.blr,B.bll,B.blm,B.bQ9])
x(B.Lk,A.eq)
w(A.H,[B.aEi,B.aG9])})()
A.bn(b.typeUniverse,JSON.parse('{"Lk":{"G":[],"e":[],"f":[]},"aEi":{"H":[],"e":[],"f":[]},"aG9":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{c:x("ay<t<pA>>"),D:x("cE"),o:x("r<pA>"),s:x("r<c>"),p:x("r<e>"),y:x("t<pA>"),P:x("a5<c,@>"),w:x("df"),g:x("t<@>?"),h:x("a5<c,@>?"),Y:x("a5<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.au3=new A.a0(20,18,20,20)
D.aDw=new A.b7(C.fX,18,null,null,null,null)
D.b7g=x([C.lQ,C.eg,C.bN],A.w("r<aV>"))
D.bAk=x([],y.o)
D.bMN=new A.lI("Contratos",null,!0,null,20,!0,null)
D.bTG=new A.bW("Em an\xe1lise",C.a7,C.U)
D.bTL=new A.bW("Cancelado",C.a7,C.U)
D.bU1=new A.bW("Expirado",C.a7,C.U)
D.bU2=new A.bW("Aguarda sinal",C.uw,C.uA)
D.bUe=new A.bW("Falta o restante",C.uw,C.uA)
D.c0q=new A.N_(C.lQ,-0.016,96,null)
D.cbP=new A.C("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.ceH=new A.C("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,G.IF,C.a6,null,null,null,null,null,null,null)
D.cgn=new A.C("Ainda sem contratos",null,C.bk,C.a6,null,null,null,null,null,null,null)
D.cna=new B.aG9(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWE","cSA",()=>A.eG(new B.cKQ(),null,!1,null,null,y.y))})()};
(a=>{a["nTm7Vxt9Th/nCysB/xGqaS4Efb4="]=a.current})($__dart_deferred_initializers__);