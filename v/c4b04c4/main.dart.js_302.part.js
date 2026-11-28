((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dHn(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bUh
break A}if("confirmed"===w){x=new A.bW("Em vigor",C.fR,$.au)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.bW("Conclu\xeddo",C.fR,$.au):D.bUt
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bU_
break A}if("expired"===w){x=D.bUg
break A}x=D.bTV
break A}return x},
duc(){return new B.Lq(null)},
pE:function pE(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cMx:function cMx(){},
cMv:function cMv(){},
cMw:function cMw(d){this.a=d},
cMt:function cMt(){},
cMu:function cMu(){},
Lq:function Lq(d){this.a=d},
blO:function blO(){},
blN:function blN(d){this.a=d},
blJ:function blJ(d){this.a=d},
blM:function blM(d){this.a=d},
blL:function blL(d){this.a=d},
blK:function blK(d){this.a=d},
blH:function blH(){},
blI:function blI(){},
aEv:function aEv(d,e){this.c=d
this.a=e},
bQI:function bQI(d,e,f){this.a=d
this.b=e
this.c=f},
bQH:function bQH(){},
bQG:function bQG(d,e,f){this.a=d
this.b=e
this.c=f},
bQF:function bQF(d,e){this.a=d
this.b=e},
aGn:function aGn(d){this.a=d},
bVF:function bVF(d){this.a=d}},D,F,G,H
J=c[1]
A=c[0]
C=c[2]
E=c[96]
B=a.updateHolder(c[25],B)
D=c[355]
F=c[150]
G=c[237]
H=c[249]
B.pE.prototype={}
B.Lq.prototype={
bg(d,e){var x=null,w=e.H($.cUn(),y.c)
return A.cP(x,C.bA,A.bF(!0,new A.mh(A.a([A.aI(x,A.ax(d,C.b4,y.w).w.r.b,x),D.bN_],y.p),A.hq(w,new B.blM(e),new B.blN(e),new B.blO(),!1,!0,!1),x),x,C.a_,!1),!0,x)}}
B.aEv.prototype={
u(d){var x=null,w=this.c,v=B.dHn(w),u=w.y,t=u<=0?0:C.k.ag(w.Q/u,0,1),s=A.V(22),r=w.c,q=A.a4(A.h(r,x,x,x,x,C.ab,x,x,x),1),p=A.V(999),o=y.p
p=A.N(A.a([new A.cp(r,44,w.d,!1,!0,x),C.af,q,A.z(x,A.h(v.a,x,x,x,x,A.aJ(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.I(v.b,x,x,p,x,x,C.y),x,x,x,C.hC,x,x,x)],o),C.w,C.h,C.l,0,x,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.Qa(r))
return A.aW(A.z(x,A.x(A.a([p,C.aW,A.h(C.e.a0(q," \xb7 "),x,x,x,x,C.N,x,x,x),C.R,new A.l4(t,5,x,C.bF,x),C.aF,A.h("Recebido "+A.aM(w.Q,!0)+" de "+A.aM(u,!0),x,x,x,x,C.bb,x,x,x)],o),C.H,C.h,C.l,0,C.u),C.r,x,x,new A.I(C.t,x,x,s,C.bi,x,C.y),x,x,x,C.bh,x,x,x),new B.bQI(this,d,w),x)},
bjB(d,e){A.bZ(C.t,new B.bQG(e,new B.bQH(),d),!1,d,!0,!0,C.mt,y.H)}}
B.aGn.prototype={
u(d){return A.bN(new A.Q(C.bV,A.x(A.a([D.c0H,C.cR,D.cgH,C.S,D.ceZ,C.bj,E.d9P("Ver pedidos",new B.bVF(d))],y.p),C.w,C.h,C.K,0,C.u),null),null,null)}}
var z=a.updateTypes(["S(S,pE)","F<t<pE>>(av)","pE()","e(t<pE>)"])
B.cMx.prototype={
$1(d){return this.aH6(d)},
aH6(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.H(A.cI($.ba(),new B.cMv(),y.D,q),q)
if(p==null){v=D.bAz
x=1
break}q=$.R().b
q===$&&A.b()
x=3
return A.d(q.P("bookings").al(0,"*, proposals(title, description, payment_terms), events(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").V("partner_id",p).cT(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bh(u,y.P),s=A.u(t),t=new A.al(t,t.gA(t),s.i("al<W.E>")),s=s.i("W.E");t.t();){r=t.d
q.push(new B.cMw(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cMv.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.cMw.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k="booking_number",j="event_date",i=this.a,h=J.a7(i),g=y.h,f=g.a(h.h(i,"events")),e=g.a(h.h(i,"proposals"))
g=f==null
x=A.C(g?l:J.i(f,"partner_name_1"))
if(x==null)x=""
w=A.C(g?l:J.i(f,"partner_name_2"))
if(w==null)w=""
v=y.g.a(h.h(i,"payments"))
if(v==null)v=C.am
u=J.bh(v,y.P)
A.a0(h.h(i,"id"))
if(h.h(i,k)==null)v=l
else{v=h.h(i,k)
t=y.Y.a(h.h(i,"partner_profiles"))
t=t==null?l:J.i(t,"business_name")
v=F.cHC(v,J.cA(t==null?"":t),h.h(i,"reference"))}if(x.length===0)t="Cliente"
else t=w.length===0?x:x+" & "+w
s=A.C(g?l:J.i(f,"profile_photo_url"))
if(s==null)s=A.C(g?l:J.i(f,"cover_photo_url"))
r=h.h(i,j)==null?l:A.dd(A.a0(h.h(i,j)))
q=A.C(g?l:J.i(f,"venue"))
if((q==null?l:q.length!==0)===!0){f.toString
g=A.a0(J.i(f,"venue"))}else{q=A.C(g?l:J.i(f,"location"))
g=q}q=e==null
p=A.C(q?l:J.i(e,"title"))
if(p==null)p="Servi\xe7o"
o=A.C(q?l:J.i(e,"description"))
n=A.C(q?l:J.i(e,"payment_terms"))
m=A.aH(h.h(i,"total_amount"))
q=m==null?l:m
if(q==null)q=0
m=A.aH(h.h(i,"deposit_amount"))
if(m==null)m=l
if(m==null)m=0
return new B.pE(v,t,s,r,g,p,o,n,q,m,new A.a6(u,new B.cMt(),A.u(u).i("a6<W.E>")).cZ(0,0,new B.cMu()),A.a0(h.h(i,"status")))},
$S:z+2}
B.cMt.prototype={
$1(d){return J.o(J.i(d,"status"),"paid")},
$S:33}
B.cMu.prototype={
$2(d,e){return d+A.ds(J.i(e,"amount"))},
$S:182}
B.blO.prototype={
$0(){return C.eq},
$S:44}
B.blN.prototype={
$2(d,e){return new A.jg("N\xe3o foi poss\xedvel carregar.",new B.blJ(this.a),null)},
$S:51}
B.blJ.prototype={
$0(){return this.a.aj($.cUn())},
$S:0}
B.blM.prototype={
$1(d){var x,w=null,v=J.a7(d)
if(v.gZ(d))v=D.cnv
else{x=A.a([new A.f4(new B.blK(d),w),C.a1],y.p)
for(v=v.gX(d);v.t();)x.push(new A.Q(C.jG,new B.aEv(v.gE(v),w),w))
v=A.yg(A.d0(x,w,H.NU,w,w,!1,C.a3,!1),w,new B.blL(this.a))}return v},
$S:z+3}
B.blL.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.aj($.cUn())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.blK.prototype={
$1(d){var x=this.a,w=J.cb(x),v=w.cZ(x,0,new B.blH()),u=w.cZ(x,0,new B.blI()),t=A.aM(v,!1),s=w.gA(x)
x=w.gA(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.arM(D.b7t,A.e1(C.bf,A.a([new A.v9("Recebido "+A.aM(u,!1),!0,!1,null),new A.v9("Falta "+A.aM(C.k.ag(v-u,0,1/0),!1),!1,!1,null)],y.p),C.r,C.bl,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:1508}
B.blH.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.blI.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bQI.prototype={
$0(){return this.a.bjB(this.b,this.c)},
$S:0}
B.bQH.prototype={
$2(d,e){var x=null
return new A.Q(C.dX,A.N(A.a([A.aI(A.h(d,x,x,x,x,C.N,x,x,x),x,110),A.a4(A.h(e,x,x,x,x,C.dQ,x,x,x),1)],y.p),C.H,C.h,C.l,0,x,x),x)},
$S:153}
B.bQG.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.h(u==null?"Contrato":"Contrato "+u,w,w,w,w,C.hj,C.a6,w,w),C.aC,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
x=v.e
if(x!=null)u.push(t.$2("Data",A.Qa(x)))
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
u.push(A.Li(D.aDJ,D.cc5,new B.bQF(d,this.c),w))
return A.bF(!0,new A.Q(D.auh,A.dR(A.x(u,C.G,C.h,C.l,0,C.u),C.z,w,w,w,w,C.a3),w),w,C.a_,!0)},
$S:46}
B.bQF.prototype={
$0(){A.am(this.a,!1).bx()
A.ag(this.b).bS(0,"/partner-messages",null)},
$S:0}
B.bVF.prototype={
$0(){return A.ag(this.a).bS(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.pE,A.L)
w(A.bz,[B.cMx,B.cMv,B.cMt,B.blM,B.blK,B.bQG])
w(A.bR,[B.cMw,B.blO,B.blJ,B.blL,B.bQI,B.bQF,B.bVF])
w(A.cN,[B.cMu,B.blN,B.blH,B.blI,B.bQH])
x(B.Lq,A.eq)
w(A.J,[B.aEv,B.aGn])})()
A.br(b.typeUniverse,JSON.parse('{"Lq":{"G":[],"e":[],"f":[]},"aEv":{"J":[],"e":[],"f":[]},"aGn":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{c:x("ay<t<pE>>"),D:x("cF"),o:x("r<pE>"),s:x("r<c>"),p:x("r<e>"),y:x("t<pE>"),P:x("a5<c,@>"),w:x("dg"),g:x("t<@>?"),h:x("a5<c,@>?"),Y:x("a5<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.auh=new A.a2(20,18,20,20)
D.aDJ=new A.b7(C.h_,18,null,null,null,null)
D.b7t=x([C.lZ,C.el,C.bQ],A.w("r<aV>"))
D.bAz=x([],y.o)
D.bN_=new A.lI("Contratos",null,!0,null,20,!0,null)
D.bTV=new A.bW("Em an\xe1lise",C.a7,C.V)
D.bU_=new A.bW("Cancelado",C.a7,C.V)
D.bUg=new A.bW("Expirado",C.a7,C.V)
D.bUh=new A.bW("Aguarda sinal",C.uD,C.uH)
D.bUt=new A.bW("Falta o restante",C.uD,C.uH)
D.c0H=new A.N5(C.lZ,-0.016,96,null)
D.cc5=new A.D("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.ceZ=new A.D("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,G.IK,C.a6,null,null,null,null,null,null,null)
D.cgH=new A.D("Ainda sem contratos",null,C.bk,C.a6,null,null,null,null,null,null,null)
D.cnv=new B.aGn(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYC","cUn",()=>A.eI(new B.cMx(),null,!1,null,null,y.y))})()};
(a=>{a["L3h3erS8SmAE8TxAhCVp4tnXFss="]=a.current})($__dart_deferred_initializers__);