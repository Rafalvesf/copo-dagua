((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dym(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bRc
break A}if("confirmed"===w){x=new A.c5("Em vigor",C.fF,$.ap)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.c5("Conclu\xeddo",C.fF,$.ap):D.bRl
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bQW
break A}if("expired"===w){x=D.bRb
break A}x=D.bQR
break A}return x},
dlr(){return new B.KM(null)},
pl:function pl(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cEX:function cEX(){},
cEV:function cEV(){},
cEW:function cEW(d){this.a=d},
cET:function cET(){},
cEU:function cEU(){},
KM:function KM(d){this.a=d},
biA:function biA(){},
biz:function biz(d){this.a=d},
biv:function biv(d){this.a=d},
biy:function biy(d){this.a=d},
bix:function bix(d){this.a=d},
biw:function biw(d){this.a=d},
bit:function bit(){},
biu:function biu(){},
aCn:function aCn(d,e){this.c=d
this.a=e},
bM2:function bM2(d,e,f){this.a=d
this.b=e
this.c=f},
bM1:function bM1(){},
bM0:function bM0(d,e,f){this.a=d
this.b=e
this.c=f},
bM_:function bM_(d,e){this.a=d
this.b=e},
aEc:function aEc(d){this.a=d},
bQB:function bQB(d){this.a=d}},D,F,G,H
J=c[1]
A=c[0]
C=c[2]
E=c[92]
B=a.updateHolder(c[23],B)
D=c[332]
F=c[144]
G=c[223]
H=c[231]
B.pl.prototype={}
B.KM.prototype={
bc(d,e){var x=null,w=e.G($.cMj(),y.c)
return A.cP(x,C.bE,A.bG(!0,new A.m6(A.a([A.aO(x,A.aw(d,C.b7,y.w).w.r.b,x),D.bKj],y.p),A.h3(w,new B.biy(e),new B.biz(e),new B.biA(),!1,!0,!1),x),x,C.a_,!1),!0,x)}}
B.aCn.prototype={
u(d){var x=null,w=this.c,v=B.dym(w),u=w.y,t=u<=0?0:C.k.aj(w.Q/u,0,1),s=A.a2(22),r=w.c,q=A.a6(A.i(r,x,x,x,x,C.ap,x,x,x),1),p=A.a2(999),o=y.p
p=A.R(A.a([new A.cA(r,44,w.d,!1,!0,x),C.ag,q,A.C(x,A.i(v.a,x,x,x,x,A.aH(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.O(v.b,x,x,p,x,x,C.y),x,x,x,C.nb,x,x,x)],o),C.x,C.j,C.o,0,x,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.Pl(r))
return A.aT(A.C(x,A.B(A.a([p,C.be,A.i(C.e.a3(q," \xb7 "),x,x,x,x,C.Z,x,x,x),C.Q,new A.kY(t,5,x,C.br,x),C.aF,A.i("Recebido "+A.aP(w.Q,!0)+" de "+A.aP(u,!0),x,x,x,x,C.b9,x,x,x)],o),C.I,C.j,C.o,0,C.v),C.r,x,x,new A.O(C.u,x,x,s,C.bb,x,C.y),x,x,x,C.bh,x,x,x),new B.bM2(this,d,w),x)},
bgT(d,e){A.ck(C.u,new B.bM0(e,new B.bM1(),d),!1,d,!0,!0,C.m2,y.H)}}
B.aEc.prototype={
u(d){return A.bV(new A.Q(C.bM,A.B(A.a([D.bY4,C.cW,D.ccq,C.X,D.caS,C.bf,E.d1C("Ver pedidos",new B.bQB(d))],y.p),C.x,C.j,C.N,0,C.v),null),null,null)}}
var z=a.updateTypes(["P(P,pl)","F<r<pl>>(au)","pl()","e(r<pl>)"])
B.cEX.prototype={
$1(d){return this.aFu(d)},
aFu(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.G(A.cw($.b8(),new B.cEV(),y.D,q),q)
if(p==null){v=D.by5
x=1
break}q=$.T().b
q===$&&A.b()
x=3
return A.d(q.P("bookings").aw(0,"id, booking_number, event_date, total_amount, deposit_amount, status, proposals(title, description, payment_terms), events(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").W("partner_id",p).dk(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bo(u,y.P),s=A.u(t),t=new A.ak(t,t.gA(t),s.i("ak<V.E>")),s=s.i("V.E");t.t();){r=t.d
q.push(new B.cEW(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cEV.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
B.cEW.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k="booking_number",j="event_date",i=this.a,h=J.a7(i),g=y.h,f=g.a(h.h(i,"events")),e=g.a(h.h(i,"proposals"))
g=f==null
x=A.J(g?l:J.h(f,"partner_name_1"))
if(x==null)x=""
w=A.J(g?l:J.h(f,"partner_name_2"))
if(w==null)w=""
v=y.g.a(h.h(i,"payments"))
if(v==null)v=C.aj
u=J.bo(v,y.P)
A.a_(h.h(i,"id"))
if(h.h(i,k)==null)v=l
else{v=h.h(i,k)
t=y.Y.a(h.h(i,"partner_profiles"))
t=t==null?l:J.h(t,"business_name")
v=F.cAj(v,J.cN(t==null?"":t))}if(x.length===0)t="Cliente"
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
m=A.aL(h.h(i,"total_amount"))
q=m==null?l:m
if(q==null)q=0
m=A.aL(h.h(i,"deposit_amount"))
if(m==null)m=l
if(m==null)m=0
return new B.pl(v,t,s,r,g,p,o,n,q,m,new A.a3(u,new B.cET(),A.u(u).i("a3<V.E>")).dc(0,0,new B.cEU()),A.a_(h.h(i,"status")))},
$S:z+2}
B.cET.prototype={
$1(d){return J.o(J.h(d,"status"),"paid")},
$S:34}
B.cEU.prototype={
$2(d,e){return d+A.dp(J.h(e,"amount"))},
$S:189}
B.biA.prototype={
$0(){return C.dV},
$S:40}
B.biz.prototype={
$2(d,e){return new A.jb("N\xe3o foi poss\xedvel carregar.",new B.biv(this.a),null)},
$S:47}
B.biv.prototype={
$0(){return this.a.ah($.cMj())},
$S:0}
B.biy.prototype={
$1(d){var x,w=null,v=J.a7(d)
if(v.gY(d))v=D.ciW
else{x=A.a([new A.eY(new B.biw(d),w),C.a4],y.p)
for(v=v.gV(d);v.t();)x.push(new A.Q(C.jm,new B.aCn(v.gE(v),w),w))
v=A.AN(A.d5(x,w,H.MJ,w,w,!1,C.a1,!1),w,new B.bix(this.a))}return v},
$S:z+3}
B.bix.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.ah($.cMj())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.biw.prototype={
$1(d){var x=this.a,w=J.c9(x),v=w.dc(x,0,new B.bit()),u=w.dc(x,0,new B.biu()),t=A.aP(v,!1),s=w.gA(x)
x=w.gA(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.apV(D.b5f,A.eb(C.bc,A.a([new A.uU("Recebido "+A.aP(u,!1),!0,!1,null),new A.uU("Falta "+A.aP(C.k.aj(v-u,0,1/0),!1),!1,!1,null)],y.p),C.r,C.bl,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:1475}
B.bit.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.biu.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bM2.prototype={
$0(){return this.a.bgT(this.b,this.c)},
$S:0}
B.bM1.prototype={
$2(d,e){var x=null
return new A.Q(C.em,A.R(A.a([A.aO(A.i(d,x,x,x,x,C.Z,x,x,x),x,110),A.a6(A.i(e,x,x,x,x,C.ds,x,x,x),1)],y.p),C.I,C.j,C.o,0,x,x),x)},
$S:179}
B.bM0.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.i(u==null?"Contrato":"Contrato "+u,w,w,w,w,C.fv,C.a5,w,w),C.aC,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
x=v.e
if(x!=null)u.push(t.$2("Data",A.Pl(x)))
x=v.f
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Local",x))}u.push(t.$2("Valor",A.aP(v.y,!0)))
u.push(t.$2("Sinal",A.aP(v.z,!0)))
u.push(t.$2("Recebido",A.aP(v.Q,!0)))
x=v.w
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Descri\xe7\xe3o",x))}v=v.x
if((v==null?w:v.length!==0)===!0){v.toString
u.push(t.$2("Condi\xe7\xf5es",v))}u.push(C.aC)
u.push(A.KE(D.aBL,D.c8h,new B.bM_(d,this.c),w))
return A.bG(!0,new A.Q(D.ass,A.dV(A.B(u,C.J,C.j,C.o,0,C.v),C.z,w,w,w,w,C.a1),w),w,C.a_,!0)},
$S:45}
B.bM_.prototype={
$0(){A.as(this.a,!1).bJ()
A.aj(this.b).bQ(0,"/partner-messages",null)},
$S:0}
B.bQB.prototype={
$0(){return A.aj(this.a).bQ(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.pl,A.L)
w(A.bx,[B.cEX,B.cEV,B.cET,B.biy,B.biw,B.bM0])
w(A.bR,[B.cEW,B.biA,B.biv,B.bix,B.bM2,B.bM_,B.bQB])
w(A.cS,[B.cEU,B.biz,B.bit,B.biu,B.bM1])
x(B.KM,A.eo)
w(A.K,[B.aCn,B.aEc])})()
A.bu(b.typeUniverse,JSON.parse('{"KM":{"I":[],"e":[],"f":[]},"aCn":{"K":[],"e":[],"f":[]},"aEc":{"K":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{c:x("ax<r<pl>>"),D:x("cG"),o:x("t<pl>"),s:x("t<c>"),p:x("t<e>"),y:x("r<pl>"),P:x("a5<c,@>"),w:x("dx"),g:x("r<@>?"),h:x("a5<c,@>?"),Y:x("a5<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ass=new A.a0(20,18,20,20)
D.aBL=new A.bc(C.fi,18,null,null,null,null)
D.b5f=x([C.ny,C.e7,C.bR],A.w("t<aW>"))
D.by5=x([],y.o)
D.bKj=new A.la("Contratos",null,!0,null,20,!0,null)
D.bQR=new A.c5("Em an\xe1lise",C.a8,C.T)
D.bQW=new A.c5("Cancelado",C.a8,C.T)
D.bRb=new A.c5("Expirado",C.a8,C.T)
D.bRc=new A.c5("Aguarda sinal",C.tR,C.tV)
D.bRl=new A.c5("Falta o restante",C.tR,C.tV)
D.bY4=new A.Mq(C.ny,-0.016,96,null)
D.c8h=new A.D("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.caS=new A.D("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,G.HC,C.a5,null,null,null,null,null,null,null)
D.ccq=new A.D("Ainda sem contratos",null,C.bx,C.a5,null,null,null,null,null,null,null)
D.ciW=new B.aEc(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dPg","cMj",()=>A.ez(new B.cEX(),null,!1,null,null,y.y))})()};
(a=>{a["ZhfT+XSnq+FGiQIqJs4hpxXRg7o="]=a.current})($__dart_deferred_initializers__);