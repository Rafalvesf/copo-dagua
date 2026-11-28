((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,B={
dHn(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bT9
break A}if("confirmed"===w){x=new A.bV("Em vigor",C.fO,$.au)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.bV("Conclu\xeddo",C.fO,$.au):D.bTl
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bSS
break A}if("expired"===w){x=D.bT8
break A}x=D.bSN
break A}return x},
duc(){return new B.Lo(null)},
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
cMr:function cMr(){},
cMp:function cMp(){},
cMq:function cMq(d){this.a=d},
cMn:function cMn(){},
cMo:function cMo(){},
Lo:function Lo(d){this.a=d},
blw:function blw(){},
blv:function blv(d){this.a=d},
blr:function blr(d){this.a=d},
blu:function blu(d){this.a=d},
blt:function blt(d){this.a=d},
bls:function bls(d){this.a=d},
blp:function blp(){},
blq:function blq(){},
aEf:function aEf(d,e){this.c=d
this.a=e},
bR1:function bR1(d,e,f){this.a=d
this.b=e
this.c=f},
bR0:function bR0(){},
bR_:function bR_(d,e,f){this.a=d
this.b=e
this.c=f},
bQZ:function bQZ(d,e){this.a=d
this.b=e},
aG5:function aG5(d){this.a=d},
bVF:function bVF(d){this.a=d}},D,G,H
J=c[1]
A=c[0]
C=c[2]
E=c[94]
F=c[97]
B=a.updateHolder(c[25],B)
D=c[356]
G=c[150]
H=c[237]
B.pz.prototype={}
B.Lo.prototype={
bb(d,e){var x=null,w=e.G($.cUm(),y.c)
return A.cQ(x,C.bx,A.bD(!0,new A.n7(A.a([A.aH(x,A.aO(d,C.b5,y.w).w.r.b,x),D.bLP],y.p),A.hC(w,new B.blu(e),new B.blv(e),new B.blw(),!1,!0,!1),x),x,C.Z,!1),!0,x)}}
B.aEf.prototype={
u(d){var x=null,w=this.c,v=B.dHn(w),u=w.y,t=u<=0?0:C.k.ah(w.Q/u,0,1),s=A.W(22),r=w.c,q=A.a5(A.h(r,x,x,x,x,C.a9,x,x,x),1),p=A.W(999),o=y.p
p=A.O(A.a([new A.ci(r,44,w.d,!1,!0,x),C.ae,q,A.A(x,A.h(v.a,x,x,x,x,A.aJ(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.K(v.b,x,x,p,x,x,C.x),x,x,x,C.ht,x,x,x)],o),C.v,C.h,C.l,0,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.Q4(r))
return A.aW(A.A(x,A.B(A.a([p,C.aU,A.h(C.e.a0(q," \xb7 "),x,x,x,x,C.M,x,x,x),C.R,new A.l7(t,5,x,C.bH,x),C.aF,A.h("Recebido "+A.aK(w.Q,!0)+" de "+A.aK(u,!0),x,x,x,x,C.bf,x,x,x)],o),C.G,C.h,C.l),C.r,x,x,new A.K(C.t,x,x,s,C.bp,x,C.x),x,x,x,C.bk,x,x,x),new B.bR1(this,d,w),x)},
biX(d,e){A.bW(C.t,new B.bR_(e,new B.bR0(),d),!1,d,!0,!0,C.mb,y.H)}}
B.aG5.prototype={
u(d){return A.bL(new A.S(C.bO,A.B(A.a([D.c_l,C.dh,D.cfa,C.Q,D.cdt,C.bi,F.d9M("Ver pedidos",new B.bVF(d))],y.p),C.v,C.h,C.J),null),null,null)}}
var z=a.updateTypes(["T(T,pz)","F<t<pz>>(at)","pz()","e(t<pz>)"])
B.cMr.prototype={
$1(d){return this.aGH(d)},
aGH(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.G(A.cG($.b8(),new B.cMp(),y.D,q),q)
if(p==null){v=D.bzs
x=1
break}q=$.P().b
q===$&&A.b()
x=3
return A.d(q.P("bookings").aj(0,"*, proposals(title, description, payment_terms), events(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").V("partner_id",p).cR(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bh(u,y.P),s=A.u(t),t=new A.aj(t,t.gA(t),s.i("aj<V.E>")),s=s.i("V.E");t.t();){r=t.d
q.push(new B.cMq(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cMp.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
B.cMq.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k="booking_number",j="event_date",i=this.a,h=J.a7(i),g=y.h,f=g.a(h.h(i,"events")),e=g.a(h.h(i,"proposals"))
g=f==null
x=A.C(g?l:J.i(f,"partner_name_1"))
if(x==null)x=""
w=A.C(g?l:J.i(f,"partner_name_2"))
if(w==null)w=""
v=y.g.a(h.h(i,"payments"))
if(v==null)v=C.ak
u=J.bh(v,y.P)
A.Z(h.h(i,"id"))
if(h.h(i,k)==null)v=l
else{v=h.h(i,k)
t=y.Y.a(h.h(i,"partner_profiles"))
t=t==null?l:J.i(t,"business_name")
v=G.cHq(v,J.cx(t==null?"":t),h.h(i,"reference"))}if(x.length===0)t="Cliente"
else t=w.length===0?x:x+" & "+w
s=A.C(g?l:J.i(f,"profile_photo_url"))
if(s==null)s=A.C(g?l:J.i(f,"cover_photo_url"))
r=h.h(i,j)==null?l:A.dc(A.Z(h.h(i,j)))
q=A.C(g?l:J.i(f,"venue"))
if((q==null?l:q.length!==0)===!0){f.toString
g=A.Z(J.i(f,"venue"))}else{q=A.C(g?l:J.i(f,"location"))
g=q}q=e==null
p=A.C(q?l:J.i(e,"title"))
if(p==null)p="Servi\xe7o"
o=A.C(q?l:J.i(e,"description"))
n=A.C(q?l:J.i(e,"payment_terms"))
m=A.aF(h.h(i,"total_amount"))
q=m==null?l:m
if(q==null)q=0
m=A.aF(h.h(i,"deposit_amount"))
if(m==null)m=l
if(m==null)m=0
return new B.pz(v,t,s,r,g,p,o,n,q,m,new A.a4(u,new B.cMn(),A.u(u).i("a4<V.E>")).d_(0,0,new B.cMo()),A.Z(h.h(i,"status")))},
$S:z+2}
B.cMn.prototype={
$1(d){return J.o(J.i(d,"status"),"paid")},
$S:34}
B.cMo.prototype={
$2(d,e){return d+A.du(J.i(e,"amount"))},
$S:175}
B.blw.prototype={
$0(){return C.eD},
$S:49}
B.blv.prototype={
$2(d,e){return new A.ji("N\xe3o foi poss\xedvel carregar.",new B.blr(this.a),null)},
$S:50}
B.blr.prototype={
$0(){return this.a.ak($.cUm())},
$S:0}
B.blu.prototype={
$1(d){var x,w=null,v=J.a7(d)
if(v.gZ(d))v=D.cly
else{x=A.a([new A.f7(new B.bls(d),w),C.a0],y.p)
for(v=v.gX(d);v.t();)x.push(new A.S(C.jD,new B.aEf(v.gE(v),w),w))
v=A.B3(A.d6(x,w,D.ata,w,w,!1,!1),w,new B.blt(this.a))}return v},
$S:z+3}
B.blt.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.ak($.cUm())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.bls.prototype={
$1(d){var x=this.a,w=J.cc(x),v=w.d_(x,0,new B.blp()),u=w.d_(x,0,new B.blq()),t=A.aK(v,!1),s=w.gA(x)
x=w.gA(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.cW1(D.b6q,A.e_(C.bd,A.a([E.baE("Recebido "+A.aK(u,!1),!0),E.baE("Falta "+A.aK(C.k.ah(v-u,0,1/0),!1),!1)],y.p),C.r,C.bj,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:1505}
B.blp.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.blq.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bR1.prototype={
$0(){return this.a.biX(this.b,this.c)},
$S:0}
B.bR0.prototype={
$2(d,e){var x=null
return new A.S(C.dW,A.O(A.a([A.aH(A.h(d,x,x,x,x,C.M,x,x,x),x,110),A.a5(A.h(e,x,x,x,x,C.e_,x,x,x),1)],y.p),C.G,C.h,C.l,0,x),x)},
$S:152}
B.bR_.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.h(u==null?"Contrato":"Contrato "+u,w,w,w,w,C.hN,C.a4,w,w),C.aB,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
x=v.e
if(x!=null)u.push(t.$2("Data",A.Q4(x)))
x=v.f
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Local",x))}u.push(t.$2("Valor",A.aK(v.y,!0)))
u.push(t.$2("Sinal",A.aK(v.z,!0)))
u.push(t.$2("Recebido",A.aK(v.Q,!0)))
x=v.w
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Descri\xe7\xe3o",x))}v=v.x
if((v==null?w:v.length!==0)===!0){v.toString
u.push(t.$2("Condi\xe7\xf5es",v))}u.push(C.aB)
u.push(A.Lg(D.aCK,D.cay,new B.bQZ(d,this.c),w))
return A.bD(!0,new A.S(D.ate,A.dT(A.B(u,C.E,C.h,C.l),C.y,w,w,w,C.av),w),w,C.Z,!0)},
$S:44}
B.bQZ.prototype={
$0(){A.am(this.a,!1).bp()
A.ae(this.b).bQ(0,"/partner-messages",null)},
$S:0}
B.bVF.prototype={
$0(){return A.ae(this.a).bQ(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.pz,A.J)
w(A.bw,[B.cMr,B.cMp,B.cMn,B.blu,B.bls,B.bR_])
w(A.bO,[B.cMq,B.blw,B.blr,B.blt,B.bR1,B.bQZ,B.bVF])
w(A.cL,[B.cMo,B.blv,B.blp,B.blq,B.bR0])
x(B.Lo,A.et)
w(A.M,[B.aEf,B.aG5])})()
A.br(b.typeUniverse,JSON.parse('{"Lo":{"G":[],"e":[],"f":[]},"aEf":{"M":[],"e":[],"f":[]},"aG5":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{c:x("az<t<pz>>"),D:x("cJ"),o:x("r<pz>"),s:x("r<c>"),p:x("r<e>"),y:x("t<pz>"),P:x("a6<c,@>"),w:x("dh"),g:x("t<@>?"),h:x("a6<c,@>?"),Y:x("a6<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ata=new A.a3(20,12,20,40)
D.ate=new A.a3(20,18,20,20)
D.aCK=new A.b7(C.fd,18,null,null,null,null)
D.b6q=x([C.nV,C.ez,C.bQ],A.w("r<aY>"))
D.bzs=x([],y.o)
D.bLP=new A.lO("Contratos",null,!0,null,20,!0,null)
D.bSN=new A.bV("Em an\xe1lise",C.a5,C.V)
D.bSS=new A.bV("Cancelado",C.a5,C.V)
D.bT8=new A.bV("Expirado",C.a5,C.V)
D.LR=new A.X(1,0.984313725490196,0.9372549019607843,0.8274509803921568,C.C)
D.M5=new A.X(1,0.5411764705882353,0.35294117647058826,0,C.C)
D.bT9=new A.bV("Aguarda sinal",D.LR,D.M5)
D.bTl=new A.bV("Falta o restante",D.LR,D.M5)
D.c_l=new A.VR(C.nV,-0.016,96,null)
D.cay=new A.D("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.cdt=new A.D("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,H.Iq,C.a4,null,null,null,null,null,null,null)
D.cfa=new A.D("Ainda sem contratos",null,C.bm,C.a4,null,null,null,null,null,null,null)
D.cly=new B.aG5(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYL","cUm",()=>A.ey(new B.cMr(),null,!1,null,null,y.y))})()};
(a=>{a["kYjKQJNXlq3SSwJ+Hp4HqUkSLRg="]=a.current})($__dart_deferred_initializers__);