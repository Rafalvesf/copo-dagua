((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dI6(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bUk
break A}if("confirmed"===w){x=new A.bW("Em vigor",C.fT,$.au)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.bW("Conclu\xeddo",C.fT,$.au):D.bUw
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bU2
break A}if("expired"===w){x=D.bUj
break A}x=D.bTY
break A}return x},
duV(){return new B.Lx(null)},
pG:function pG(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cNd:function cNd(){},
cNb:function cNb(){},
cNc:function cNc(d){this.a=d},
cN9:function cN9(){},
cNa:function cNa(){},
Lx:function Lx(d){this.a=d},
bm2:function bm2(){},
bm1:function bm1(d){this.a=d},
blY:function blY(d){this.a=d},
bm0:function bm0(d){this.a=d},
bm_:function bm_(d){this.a=d},
blZ:function blZ(d){this.a=d},
blW:function blW(){},
blX:function blX(){},
aEL:function aEL(d,e){this.c=d
this.a=e},
bRa:function bRa(d,e,f){this.a=d
this.b=e
this.c=f},
bR9:function bR9(){},
bR8:function bR8(d,e,f){this.a=d
this.b=e
this.c=f},
bR7:function bR7(d,e){this.a=d
this.b=e},
aGE:function aGE(d){this.a=d},
bWd:function bWd(d){this.a=d}},D,F,G
J=c[1]
A=c[0]
C=c[2]
E=c[96]
B=a.updateHolder(c[25],B)
D=c[355]
F=c[150]
G=c[238]
B.pG.prototype={}
B.Lx.prototype={
bf(d,e){var x=null,w=e.H($.cV3(),y.c)
return A.cQ(x,C.bA,A.bF(!0,new A.n7(A.a([A.aH(x,A.ax(d,C.b7,y.w).w.r.b,x),D.bN2],y.p),A.hG(w,new B.bm0(e),new B.bm1(e),new B.bm2(),!1,!0,!1),x),x,C.a_,!1),!0,x)}}
B.aEL.prototype={
u(d){var x=null,w=this.c,v=B.dI6(w),u=w.y,t=u<=0?0:C.k.ah(w.Q/u,0,1),s=A.W(22),r=w.c,q=A.a4(A.h(r,x,x,x,x,C.ab,x,x,x),1),p=A.W(999),o=y.p
p=A.O(A.a([new A.cq(r,44,w.d,!1,!0,x),C.af,q,A.z(x,A.h(v.a,x,x,x,x,A.aJ(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.I(v.b,x,x,p,x,x,C.y),x,x,x,C.hE,x,x,x)],o),C.w,C.h,C.l,0,x,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.Qg(r))
return A.aX(A.z(x,A.y(A.a([p,C.aX,A.h(C.e.a0(q," \xb7 "),x,x,x,x,C.O,x,x,x),C.S,new A.l7(t,5,x,C.bG,x),C.aG,A.h("Recebido "+A.aM(w.Q,!0)+" de "+A.aM(u,!0),x,x,x,x,C.bd,x,x,x)],o),C.H,C.h,C.l,0,C.u),C.r,x,x,new A.I(C.t,x,x,s,C.bj,x,C.y),x,x,x,C.bh,x,x,x),new B.bRa(this,d,w),x)},
bkm(d,e){A.bZ(C.t,new B.bR8(e,new B.bR9(),d),!1,d,!0,!0,C.mr,y.H)}}
B.aGE.prototype={
u(d){return A.bK(new A.R(C.bQ,A.y(A.a([D.c0J,C.cT,D.cgL,C.R,D.cf2,C.bi,E.daw("Ver pedidos",new B.bWd(d))],y.p),C.w,C.h,C.K,0,C.u),null),null,null)}}
var z=a.updateTypes(["S(S,pG)","F<t<pG>>(av)","pG()","e(t<pG>)"])
B.cNd.prototype={
$1(d){return this.aHB(d)},
aHB(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.H(A.cJ($.ba(),new B.cNb(),y.D,q),q)
if(p==null){v=D.bAD
x=1
break}q=$.Q().b
q===$&&A.b()
x=3
return A.d(q.P("bookings").ak(0,"*, proposals(title, description, payment_terms), events(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").V("partner_id",p).cV(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bi(u,y.P),s=A.u(t),t=new A.ak(t,t.gA(t),s.i("ak<V.E>")),s=s.i("V.E");t.t();){r=t.d
q.push(new B.cNc(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cNb.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
B.cNc.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k="booking_number",j="event_date",i=this.a,h=J.a7(i),g=y.h,f=g.a(h.h(i,"events")),e=g.a(h.h(i,"proposals"))
g=f==null
x=A.C(g?l:J.i(f,"partner_name_1"))
if(x==null)x=""
w=A.C(g?l:J.i(f,"partner_name_2"))
if(w==null)w=""
v=y.g.a(h.h(i,"payments"))
if(v==null)v=C.am
u=J.bi(v,y.P)
A.Z(h.h(i,"id"))
if(h.h(i,k)==null)v=l
else{v=h.h(i,k)
t=y.Y.a(h.h(i,"partner_profiles"))
t=t==null?l:J.i(t,"business_name")
v=F.cIi(v,J.cA(t==null?"":t),h.h(i,"reference"))}if(x.length===0)t="Cliente"
else t=w.length===0?x:x+" & "+w
s=A.C(g?l:J.i(f,"profile_photo_url"))
if(s==null)s=A.C(g?l:J.i(f,"cover_photo_url"))
r=h.h(i,j)==null?l:A.db(A.Z(h.h(i,j)))
q=A.C(g?l:J.i(f,"venue"))
if((q==null?l:q.length!==0)===!0){f.toString
g=A.Z(J.i(f,"venue"))}else{q=A.C(g?l:J.i(f,"location"))
g=q}q=e==null
p=A.C(q?l:J.i(e,"title"))
if(p==null)p="Servi\xe7o"
o=A.C(q?l:J.i(e,"description"))
n=A.C(q?l:J.i(e,"payment_terms"))
m=A.aI(h.h(i,"total_amount"))
q=m==null?l:m
if(q==null)q=0
m=A.aI(h.h(i,"deposit_amount"))
if(m==null)m=l
if(m==null)m=0
return new B.pG(v,t,s,r,g,p,o,n,q,m,new A.a6(u,new B.cN9(),A.u(u).i("a6<V.E>")).cZ(0,0,new B.cNa()),A.Z(h.h(i,"status")))},
$S:z+2}
B.cN9.prototype={
$1(d){return J.o(J.i(d,"status"),"paid")},
$S:33}
B.cNa.prototype={
$2(d,e){return d+A.dt(J.i(e,"amount"))},
$S:185}
B.bm2.prototype={
$0(){return C.eD},
$S:48}
B.bm1.prototype={
$2(d,e){return new A.jh("N\xe3o foi poss\xedvel carregar.",new B.blY(this.a),null)},
$S:49}
B.blY.prototype={
$0(){return this.a.al($.cV3())},
$S:0}
B.bm0.prototype={
$1(d){var x,w=null,v=J.a7(d)
if(v.gZ(d))v=D.cny
else{x=A.a([new A.f5(new B.blZ(d),w),C.a1],y.p)
for(v=v.gX(d);v.t();)x.push(new A.R(C.jI,new B.aEL(v.gE(v),w),w))
v=A.Bf(A.cZ(x,w,D.aue,w,w,!1,C.a2,!1),w,new B.bm_(this.a))}return v},
$S:z+3}
B.bm_.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.al($.cV3())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.blZ.prototype={
$1(d){var x=this.a,w=J.cb(x),v=w.cZ(x,0,new B.blW()),u=w.cZ(x,0,new B.blX()),t=A.aM(v,!1),s=w.gA(x)
x=w.gA(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.as2(D.b7w,A.e1(C.bf,A.a([new A.vd("Recebido "+A.aM(u,!1),!0,!1,null),new A.vd("Falta "+A.aM(C.k.ah(v-u,0,1/0),!1),!1,!1,null)],y.p),C.r,C.bl,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:1508}
B.blW.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.blX.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bRa.prototype={
$0(){return this.a.bkm(this.b,this.c)},
$S:0}
B.bR9.prototype={
$2(d,e){var x=null
return new A.R(C.dX,A.O(A.a([A.aH(A.h(d,x,x,x,x,C.O,x,x,x),x,110),A.a4(A.h(e,x,x,x,x,C.dQ,x,x,x),1)],y.p),C.H,C.h,C.l,0,x,x),x)},
$S:145}
B.bR8.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.h(u==null?"Contrato":"Contrato "+u,w,w,w,w,C.hl,C.a6,w,w),C.aC,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
x=v.e
if(x!=null)u.push(t.$2("Data",A.Qg(x)))
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
u.push(A.Lp(D.aDN,D.cc8,new B.bR7(d,this.c),w))
return A.bF(!0,new A.R(D.aui,A.dR(A.y(u,C.G,C.h,C.l,0,C.u),C.z,w,w,w,w,C.a2),w),w,C.a_,!0)},
$S:44}
B.bR7.prototype={
$0(){A.am(this.a,!1).bw()
A.ai(this.b).bR(0,"/partner-messages",null)},
$S:0}
B.bWd.prototype={
$0(){return A.ai(this.a).bR(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.pG,A.L)
w(A.by,[B.cNd,B.cNb,B.cN9,B.bm0,B.blZ,B.bR8])
w(A.bQ,[B.cNc,B.bm2,B.blY,B.bm_,B.bRa,B.bR7,B.bWd])
w(A.cL,[B.cNa,B.bm1,B.blW,B.blX,B.bR9])
x(B.Lx,A.ex)
w(A.J,[B.aEL,B.aGE])})()
A.bs(b.typeUniverse,JSON.parse('{"Lx":{"G":[],"e":[],"f":[]},"aEL":{"J":[],"e":[],"f":[]},"aGE":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{c:x("ay<t<pG>>"),D:x("cF"),o:x("r<pG>"),s:x("r<c>"),p:x("r<e>"),y:x("t<pG>"),P:x("a5<c,@>"),w:x("di"),g:x("t<@>?"),h:x("a5<c,@>?"),Y:x("a5<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aue=new A.a2(20,12,20,40)
D.aui=new A.a2(20,18,20,20)
D.aDN=new A.b8(C.h2,18,null,null,null,null)
D.b7w=x([C.lW,C.el,C.bR],A.w("r<aV>"))
D.bAD=x([],y.o)
D.bN2=new A.lL("Contratos",null,!0,null,20,!0,null)
D.bTY=new A.bW("Em an\xe1lise",C.a7,C.V)
D.bU2=new A.bW("Cancelado",C.a7,C.V)
D.bUj=new A.bW("Expirado",C.a7,C.V)
D.bUk=new A.bW("Aguarda sinal",C.uF,C.uJ)
D.bUw=new A.bW("Falta o restante",C.uF,C.uJ)
D.c0J=new A.Nc(C.lW,-0.016,96,null)
D.cc8=new A.D("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.cf2=new A.D("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,G.IK,C.a6,null,null,null,null,null,null,null)
D.cgL=new A.D("Ainda sem contratos",null,C.bk,C.a6,null,null,null,null,null,null,null)
D.cny=new B.aGE(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZn","cV3",()=>A.eH(new B.cNd(),null,!1,null,null,y.y))})()};
(a=>{a["Zy62AOlXU5rPHwASYYQ2ibuhb9w="]=a.current})($__dart_deferred_initializers__);