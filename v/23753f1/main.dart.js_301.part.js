((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dH1(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bTi
break A}if("confirmed"===w){x=new A.bV("Em vigor",C.fP,$.at)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.bV("Conclu\xeddo",C.fP,$.at):D.bTu
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bT0
break A}if("expired"===w){x=D.bTh
break A}x=D.bSW
break A}return x},
dtR(){return new B.Ll(null)},
px:function px(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cMa:function cMa(){},
cM8:function cM8(){},
cM9:function cM9(d){this.a=d},
cM6:function cM6(){},
cM7:function cM7(){},
Ll:function Ll(d){this.a=d},
blz:function blz(){},
bly:function bly(d){this.a=d},
blu:function blu(d){this.a=d},
blx:function blx(d){this.a=d},
blw:function blw(d){this.a=d},
blv:function blv(d){this.a=d},
bls:function bls(){},
blt:function blt(){},
aEf:function aEf(d,e){this.c=d
this.a=e},
bQN:function bQN(d,e,f){this.a=d
this.b=e
this.c=f},
bQM:function bQM(){},
bQL:function bQL(d,e,f){this.a=d
this.b=e
this.c=f},
bQK:function bQK(d,e){this.a=d
this.b=e},
aG5:function aG5(d){this.a=d},
bVq:function bVq(d){this.a=d}},D,F,G
J=c[1]
A=c[0]
C=c[2]
E=c[97]
B=a.updateHolder(c[25],B)
D=c[359]
F=c[151]
G=c[241]
B.px.prototype={}
B.Ll.prototype={
bc(d,e){var x=null,w=e.G($.cU3(),y.c)
return A.cP(x,C.by,A.bD(!0,new A.n4(A.a([A.aH(x,A.aO(d,C.b5,y.w).w.r.b,x),D.bM0],y.p),A.hC(w,new B.blx(e),new B.bly(e),new B.blz(),!1,!0,!1),x),x,C.Z,!1),!0,x)}}
B.aEf.prototype={
u(d){var x=null,w=this.c,v=B.dH1(w),u=w.y,t=u<=0?0:C.k.ah(w.Q/u,0,1),s=A.W(22),r=w.c,q=A.a4(A.h(r,x,x,x,x,C.a9,x,x,x),1),p=A.W(999),o=y.p
p=A.O(A.a([new A.cq(r,44,w.d,!1,!0,x),C.ad,q,A.x(x,A.h(v.a,x,x,x,x,A.aI(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.E,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.I(v.b,x,x,p,x,x,C.x),x,x,x,C.hx,x,x,x)],o),C.v,C.h,C.l,0,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.Q3(r))
return A.aX(A.x(x,A.A(A.a([p,C.aV,A.h(C.e.a2(q," \xb7 "),x,x,x,x,C.N,x,x,x),C.R,new A.l7(t,5,x,C.bE,x),C.aD,A.h("Recebido "+A.aK(w.Q,!0)+" de "+A.aK(u,!0),x,x,x,x,C.bb,x,x,x)],o),C.G,C.h,C.l),C.r,x,x,new A.I(C.t,x,x,s,C.bi,x,C.x),x,x,x,C.bg,x,x,x),new B.bQN(this,d,w),x)},
biT(d,e){A.bW(C.t,new B.bQL(e,new B.bQM(),d),!1,d,!0,!0,C.me,y.H)}}
B.aG5.prototype={
u(d){return A.bM(new A.S(C.bL,A.A(A.a([D.c_A,C.cS,D.cfG,C.Q,D.cdX,C.bh,E.d9s("Ver pedidos",new B.bVq(d))],y.p),C.v,C.h,C.J),null),null,null)}}
var z=a.updateTypes(["T(T,px)","F<t<px>>(av)","px()","e(t<px>)"])
B.cMa.prototype={
$1(d){return this.aGF(d)},
aGF(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.G(A.cI($.b9(),new B.cM8(),y.D,q),q)
if(p==null){v=D.bzB
x=1
break}q=$.Q().b
q===$&&A.b()
x=3
return A.d(q.P("bookings").aj(0,"*, proposals(title, description, payment_terms), events(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").V("partner_id",p).cR(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bh(u,y.P),s=A.u(t),t=new A.al(t,t.gA(t),s.i("al<V.E>")),s=s.i("V.E");t.t();){r=t.d
q.push(new B.cM9(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cM8.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.cM9.prototype={
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
v=F.cHc(v,J.cy(t==null?"":t),h.h(i,"reference"))}if(x.length===0)t="Cliente"
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
m=A.aG(h.h(i,"total_amount"))
q=m==null?l:m
if(q==null)q=0
m=A.aG(h.h(i,"deposit_amount"))
if(m==null)m=l
if(m==null)m=0
return new B.px(v,t,s,r,g,p,o,n,q,m,new A.a6(u,new B.cM6(),A.u(u).i("a6<V.E>")).cW(0,0,new B.cM7()),A.Z(h.h(i,"status")))},
$S:z+2}
B.cM6.prototype={
$1(d){return J.o(J.i(d,"status"),"paid")},
$S:33}
B.cM7.prototype={
$2(d,e){return d+A.dt(J.i(e,"amount"))},
$S:194}
B.blz.prototype={
$0(){return C.eD},
$S:52}
B.bly.prototype={
$2(d,e){return new A.jg("N\xe3o foi poss\xedvel carregar.",new B.blu(this.a),null)},
$S:50}
B.blu.prototype={
$0(){return this.a.ak($.cU3())},
$S:0}
B.blx.prototype={
$1(d){var x,w=null,v=J.a7(d)
if(v.gZ(d))v=D.cm8
else{x=A.a([new A.f7(new B.blv(d),w),C.a0],y.p)
for(v=v.gX(d);v.t();)x.push(new A.S(C.jA,new B.aEf(v.gE(v),w),w))
v=A.B5(A.d5(x,w,D.ati,w,w,!1,!1),w,new B.blw(this.a))}return v},
$S:z+3}
B.blw.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.ak($.cU3())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.blv.prototype={
$1(d){var x=this.a,w=J.c8(x),v=w.cW(x,0,new B.bls()),u=w.cW(x,0,new B.blt()),t=A.aK(v,!1),s=w.gA(x)
x=w.gA(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.arz(D.b6x,A.e0(C.be,A.a([new A.v8("Recebido "+A.aK(u,!1),!0,!1,null),new A.v8("Falta "+A.aK(C.k.ah(v-u,0,1/0),!1),!1,!1,null)],y.p),C.r,C.bl,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:1496}
B.bls.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.blt.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bQN.prototype={
$0(){return this.a.biT(this.b,this.c)},
$S:0}
B.bQM.prototype={
$2(d,e){var x=null
return new A.S(C.dX,A.O(A.a([A.aH(A.h(d,x,x,x,x,C.N,x,x,x),x,110),A.a4(A.h(e,x,x,x,x,C.dQ,x,x,x),1)],y.p),C.G,C.h,C.l,0,x),x)},
$S:126}
B.bQL.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.h(u==null?"Contrato":"Contrato "+u,w,w,w,w,C.hR,C.a4,w,w),C.aB,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
x=v.e
if(x!=null)u.push(t.$2("Data",A.Q3(x)))
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
u.push(A.Ld(D.aCO,D.cb0,new B.bQK(d,this.c),w))
return A.bD(!0,new A.S(D.atm,A.dU(A.A(u,C.F,C.h,C.l),C.y,w,w,w,C.av),w),w,C.Z,!0)},
$S:43}
B.bQK.prototype={
$0(){A.am(this.a,!1).bp()
A.ah(this.b).bQ(0,"/partner-messages",null)},
$S:0}
B.bVq.prototype={
$0(){return A.ah(this.a).bQ(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.px,A.J)
w(A.bw,[B.cMa,B.cM8,B.cM6,B.blx,B.blv,B.bQL])
w(A.bP,[B.cM9,B.blz,B.blu,B.blw,B.bQN,B.bQK,B.bVq])
w(A.cK,[B.cM7,B.bly,B.bls,B.blt,B.bQM])
x(B.Ll,A.et)
w(A.L,[B.aEf,B.aG5])})()
A.bn(b.typeUniverse,JSON.parse('{"Ll":{"G":[],"e":[],"f":[]},"aEf":{"L":[],"e":[],"f":[]},"aG5":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{c:x("ay<t<px>>"),D:x("cH"),o:x("r<px>"),s:x("r<c>"),p:x("r<e>"),y:x("t<px>"),P:x("a5<c,@>"),w:x("dg"),g:x("t<@>?"),h:x("a5<c,@>?"),Y:x("a5<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ati=new A.a3(20,12,20,40)
D.atm=new A.a3(20,18,20,20)
D.aCO=new A.b7(C.f9,18,null,null,null,null)
D.b6x=x([C.lI,C.ej,C.bM],A.w("r<aW>"))
D.bzB=x([],y.o)
D.bM0=new A.lM("Contratos",null,!0,null,20,!0,null)
D.bSW=new A.bV("Em an\xe1lise",C.a5,C.U)
D.bT0=new A.bV("Cancelado",C.a5,C.U)
D.bTh=new A.bV("Expirado",C.a5,C.U)
D.bTi=new A.bV("Aguarda sinal",C.un,C.ur)
D.bTu=new A.bV("Falta o restante",C.un,C.ur)
D.c_A=new A.N0(C.lI,-0.016,96,null)
D.cb0=new A.D("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.cdX=new A.D("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,G.Iq,C.a4,null,null,null,null,null,null,null)
D.cfG=new A.D("Ainda sem contratos",null,C.bj,C.a4,null,null,null,null,null,null,null)
D.cm8=new B.aG5(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYn","cU3",()=>A.eD(new B.cMa(),null,!1,null,null,y.y))})()};
(a=>{a["NuimvN+jhcMKK31P/slMb3ep02g="]=a.current})($__dart_deferred_initializers__);