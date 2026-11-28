((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dCq(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bTe
break A}if("confirmed"===w){x=new A.bZ("Em vigor",C.fJ,$.ap)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.bZ("Conclu\xeddo",C.fJ,$.ap):D.bTo
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bSY
break A}if("expired"===w){x=D.bTd
break A}x=D.bST
break A}return x},
dpj(){return new B.L8(null)},
pt:function pt(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cIe:function cIe(){},
cIc:function cIc(){},
cId:function cId(d){this.a=d},
cIa:function cIa(){},
cIb:function cIb(){},
L8:function L8(d){this.a=d},
bkw:function bkw(){},
bkv:function bkv(d){this.a=d},
bkr:function bkr(d){this.a=d},
bku:function bku(d){this.a=d},
bkt:function bkt(d){this.a=d},
bks:function bks(d){this.a=d},
bkp:function bkp(){},
bkq:function bkq(){},
aDv:function aDv(d,e){this.c=d
this.a=e},
bOx:function bOx(d,e,f){this.a=d
this.b=e
this.c=f},
bOw:function bOw(){},
bOv:function bOv(d,e,f){this.a=d
this.b=e
this.c=f},
bOu:function bOu(d,e){this.a=d
this.b=e},
aFm:function aFm(d){this.a=d},
bT6:function bT6(d){this.a=d}},D,F,G,H
J=c[1]
A=c[0]
C=c[2]
E=c[95]
B=a.updateHolder(c[25],B)
D=c[345]
F=c[147]
G=c[227]
H=c[236]
B.pt.prototype={}
B.L8.prototype={
bc(d,e){var x=null,w=e.H($.cPP(),y.c)
return A.cM(x,C.bw,A.bD(!0,new A.me(A.a([A.aL(x,A.aw(d,C.b5,y.w).w.r.b,x),D.bM3],y.p),A.h9(w,new B.bku(e),new B.bkv(e),new B.bkw(),!1,!0,!1),x),x,C.a_,!1),!0,x)}}
B.aDv.prototype={
u(d){var x=null,w=this.c,v=B.dCq(w),u=w.y,t=u<=0?0:C.k.ah(w.Q/u,0,1),s=A.a1(22),r=w.c,q=A.a7(A.i(r,x,x,x,x,C.ao,x,x,x),1),p=A.a1(999),o=y.p
p=A.Q(A.a([new A.cF(r,44,w.d,!1,!0,x),C.ah,q,A.E(x,A.i(v.a,x,x,x,x,A.aG(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.O(v.b,x,x,p,x,x,C.y),x,x,x,C.nk,x,x,x)],o),C.w,C.j,C.m,0,x,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.PI(r))
return A.aU(A.E(x,A.C(A.a([p,C.be,A.i(C.e.a3(q," \xb7 "),x,x,x,x,C.W,x,x,x),C.P,new A.l1(t,5,x,C.bt,x),C.aE,A.i("Recebido "+A.aQ(w.Q,!0)+" de "+A.aQ(u,!0),x,x,x,x,C.b9,x,x,x)],o),C.H,C.j,C.m,0,C.v),C.r,x,x,new A.O(C.t,x,x,s,C.bb,x,C.y),x,x,x,C.bg,x,x,x),new B.bOx(this,d,w),x)},
bie(d,e){A.cn(C.t,new B.bOv(e,new B.bOw(),d),!1,d,!0,!0,C.m9,y.H)}}
B.aFm.prototype={
u(d){return A.bN(new A.R(C.bQ,A.C(A.a([D.c_b,C.cz,D.ceM,C.Y,D.cd9,C.bf,E.d5d("Ver pedidos",new B.bT6(d))],y.p),C.w,C.j,C.L,0,C.v),null),null,null)}}
var z=a.updateTypes(["P(P,pt)","F<t<pt>>(av)","pt()","e(t<pt>)"])
B.cIe.prototype={
$1(d){return this.aGg(d)},
aGg(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.H(A.cv($.b8(),new B.cIc(),y.D,q),q)
if(p==null){v=D.bzB
x=1
break}q=$.T().b
q===$&&A.b()
x=3
return A.d(q.R("bookings").az(0,"*, proposals(title, description, payment_terms), events(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").W("partner_id",p).dl(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bk(u,y.P),s=A.u(t),t=new A.ak(t,t.gA(t),s.i("ak<U.E>")),s=s.i("U.E");t.t();){r=t.d
q.push(new B.cId(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cIc.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
B.cId.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k="booking_number",j="event_date",i=this.a,h=J.a6(i),g=y.h,f=g.a(h.h(i,"events")),e=g.a(h.h(i,"proposals"))
g=f==null
x=A.B(g?l:J.h(f,"partner_name_1"))
if(x==null)x=""
w=A.B(g?l:J.h(f,"partner_name_2"))
if(w==null)w=""
v=y.g.a(h.h(i,"payments"))
if(v==null)v=C.aj
u=J.bk(v,y.P)
A.a0(h.h(i,"id"))
if(h.h(i,k)==null)v=l
else{v=h.h(i,k)
t=y.Y.a(h.h(i,"partner_profiles"))
t=t==null?l:J.h(t,"business_name")
v=F.cDp(v,J.cx(t==null?"":t),h.h(i,"reference"))}if(x.length===0)t="Cliente"
else t=w.length===0?x:x+" & "+w
s=A.B(g?l:J.h(f,"profile_photo_url"))
if(s==null)s=A.B(g?l:J.h(f,"cover_photo_url"))
r=h.h(i,j)==null?l:A.d8(A.a0(h.h(i,j)))
q=A.B(g?l:J.h(f,"venue"))
if((q==null?l:q.length!==0)===!0){f.toString
g=A.a0(J.h(f,"venue"))}else{q=A.B(g?l:J.h(f,"location"))
g=q}q=e==null
p=A.B(q?l:J.h(e,"title"))
if(p==null)p="Servi\xe7o"
o=A.B(q?l:J.h(e,"description"))
n=A.B(q?l:J.h(e,"payment_terms"))
m=A.aJ(h.h(i,"total_amount"))
q=m==null?l:m
if(q==null)q=0
m=A.aJ(h.h(i,"deposit_amount"))
if(m==null)m=l
if(m==null)m=0
return new B.pt(v,t,s,r,g,p,o,n,q,m,new A.a5(u,new B.cIa(),A.u(u).i("a5<U.E>")).d7(0,0,new B.cIb()),A.a0(h.h(i,"status")))},
$S:z+2}
B.cIa.prototype={
$1(d){return J.o(J.h(d,"status"),"paid")},
$S:34}
B.cIb.prototype={
$2(d,e){return d+A.dt(J.h(e,"amount"))},
$S:155}
B.bkw.prototype={
$0(){return C.dZ},
$S:40}
B.bkv.prototype={
$2(d,e){return new A.jb("N\xe3o foi poss\xedvel carregar.",new B.bkr(this.a),null)},
$S:48}
B.bkr.prototype={
$0(){return this.a.ai($.cPP())},
$S:0}
B.bku.prototype={
$1(d){var x,w=null,v=J.a6(d)
if(v.gY(d))v=D.cls
else{x=A.a([new A.f2(new B.bks(d),w),C.a3],y.p)
for(v=v.gV(d);v.t();)x.push(new A.R(C.jv,new B.aDv(v.gE(v),w),w))
v=A.y7(A.d_(x,w,H.Nq,w,w,!1,C.a1,!1),w,new B.bkt(this.a))}return v},
$S:z+3}
B.bkt.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.ai($.cPP())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.bks.prototype={
$1(d){var x=this.a,w=J.c9(x),v=w.d7(x,0,new B.bkp()),u=w.d7(x,0,new B.bkq()),t=A.aQ(v,!1),s=w.gA(x)
x=w.gA(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.aqU(D.b6B,A.e9(C.bc,A.a([new A.v3("Recebido "+A.aQ(u,!1),!0,!1,null),new A.v3("Falta "+A.aQ(C.k.ah(v-u,0,1/0),!1),!1,!1,null)],y.p),C.r,C.bj,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:1500}
B.bkp.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.bkq.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bOx.prototype={
$0(){return this.a.bie(this.b,this.c)},
$S:0}
B.bOw.prototype={
$2(d,e){var x=null
return new A.R(C.er,A.Q(A.a([A.aL(A.i(d,x,x,x,x,C.W,x,x,x),x,110),A.a7(A.i(e,x,x,x,x,C.dt,x,x,x),1)],y.p),C.H,C.j,C.m,0,x,x),x)},
$S:156}
B.bOv.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.i(u==null?"Contrato":"Contrato "+u,w,w,w,w,C.fy,C.a5,w,w),C.aA,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
x=v.e
if(x!=null)u.push(t.$2("Data",A.PI(x)))
x=v.f
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Local",x))}u.push(t.$2("Valor",A.aQ(v.y,!0)))
u.push(t.$2("Sinal",A.aQ(v.z,!0)))
u.push(t.$2("Recebido",A.aQ(v.Q,!0)))
x=v.w
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Descri\xe7\xe3o",x))}v=v.x
if((v==null?w:v.length!==0)===!0){v.toString
u.push(t.$2("Condi\xe7\xf5es",v))}u.push(C.aA)
u.push(A.L0(D.aD1,D.car,new B.bOu(d,this.c),w))
return A.bD(!0,new A.R(D.atz,A.dX(A.C(u,C.J,C.j,C.m,0,C.v),C.z,w,w,w,w,C.a1),w),w,C.a_,!0)},
$S:43}
B.bOu.prototype={
$0(){A.aq(this.a,!1).bJ()
A.ai(this.b).bS(0,"/partner-messages",null)},
$S:0}
B.bT6.prototype={
$0(){return A.ai(this.a).bS(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.pt,A.H)
w(A.bx,[B.cIe,B.cIc,B.cIa,B.bku,B.bks,B.bOv])
w(A.bR,[B.cId,B.bkw,B.bkr,B.bkt,B.bOx,B.bOu,B.bT6])
w(A.cR,[B.cIb,B.bkv,B.bkp,B.bkq,B.bOw])
x(B.L8,A.en)
w(A.L,[B.aDv,B.aFm])})()
A.br(b.typeUniverse,JSON.parse('{"L8":{"J":[],"e":[],"f":[]},"aDv":{"L":[],"e":[],"f":[]},"aFm":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{c:x("ax<t<pt>>"),D:x("cG"),o:x("r<pt>"),s:x("r<c>"),p:x("r<e>"),y:x("t<pt>"),P:x("a4<c,@>"),w:x("dn"),g:x("t<@>?"),h:x("a4<c,@>?"),Y:x("a4<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.atz=new A.a2(20,18,20,20)
D.aD1=new A.ba(C.fl,18,null,null,null,null)
D.b6B=x([C.nH,C.ec,C.bM],A.w("r<aV>"))
D.bzB=x([],y.o)
D.bM3=new A.lG("Contratos",null,!0,null,20,!0,null)
D.bST=new A.bZ("Em an\xe1lise",C.ac,C.S)
D.bSY=new A.bZ("Cancelado",C.ac,C.S)
D.bTd=new A.bZ("Expirado",C.ac,C.S)
D.bTe=new A.bZ("Aguarda sinal",C.u9,C.ud)
D.bTo=new A.bZ("Falta o restante",C.u9,C.ud)
D.c_b=new A.MO(C.nH,-0.016,96,null)
D.car=new A.D("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.cd9=new A.D("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,G.Id,C.a5,null,null,null,null,null,null,null)
D.ceM=new A.D("Ainda sem contratos",null,C.bv,C.a5,null,null,null,null,null,null,null)
D.cls=new B.aFm(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTC","cPP",()=>A.eE(new B.cIe(),null,!1,null,null,y.y))})()};
(a=>{a["VZniDS2dj4sIPD4chKhCyGVbboQ="]=a.current})($__dart_deferred_initializers__);