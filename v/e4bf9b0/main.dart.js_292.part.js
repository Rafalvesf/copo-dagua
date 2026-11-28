((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dCo(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bTd
break A}if("confirmed"===w){x=new A.bZ("Em vigor",C.fJ,$.ap)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.bZ("Conclu\xeddo",C.fJ,$.ap):D.bTn
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bSX
break A}if("expired"===w){x=D.bTc
break A}x=D.bSS
break A}return x},
dph(){return new B.L7(null)},
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
cId:function cId(){},
cIb:function cIb(){},
cIc:function cIc(d){this.a=d},
cI9:function cI9(){},
cIa:function cIa(){},
L7:function L7(d){this.a=d},
bkx:function bkx(){},
bkw:function bkw(d){this.a=d},
bks:function bks(d){this.a=d},
bkv:function bkv(d){this.a=d},
bku:function bku(d){this.a=d},
bkt:function bkt(d){this.a=d},
bkq:function bkq(){},
bkr:function bkr(){},
aDv:function aDv(d,e){this.c=d
this.a=e},
bOy:function bOy(d,e,f){this.a=d
this.b=e
this.c=f},
bOx:function bOx(){},
bOw:function bOw(d,e,f){this.a=d
this.b=e
this.c=f},
bOv:function bOv(d,e){this.a=d
this.b=e},
aFm:function aFm(d){this.a=d},
bT7:function bT7(d){this.a=d}},D,F,G,H
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
B.L7.prototype={
bc(d,e){var x=null,w=e.H($.cPN(),y.c)
return A.cM(x,C.bw,A.bD(!0,new A.me(A.a([A.aL(x,A.aw(d,C.b5,y.w).w.r.b,x),D.bM2],y.p),A.h9(w,new B.bkv(e),new B.bkw(e),new B.bkx(),!1,!0,!1),x),x,C.a_,!1),!0,x)}}
B.aDv.prototype={
u(d){var x=null,w=this.c,v=B.dCo(w),u=w.y,t=u<=0?0:C.k.ah(w.Q/u,0,1),s=A.a1(22),r=w.c,q=A.a7(A.i(r,x,x,x,x,C.ao,x,x,x),1),p=A.a1(999),o=y.p
p=A.Q(A.a([new A.cF(r,44,w.d,!1,!0,x),C.ah,q,A.E(x,A.i(v.a,x,x,x,x,A.aG(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.O(v.b,x,x,p,x,x,C.y),x,x,x,C.nj,x,x,x)],o),C.w,C.j,C.m,0,x,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.PI(r))
return A.aU(A.E(x,A.C(A.a([p,C.be,A.i(C.e.a3(q," \xb7 "),x,x,x,x,C.W,x,x,x),C.P,new A.l1(t,5,x,C.bt,x),C.aE,A.i("Recebido "+A.aQ(w.Q,!0)+" de "+A.aQ(u,!0),x,x,x,x,C.b9,x,x,x)],o),C.H,C.j,C.m,0,C.v),C.r,x,x,new A.O(C.t,x,x,s,C.bb,x,C.y),x,x,x,C.bg,x,x,x),new B.bOy(this,d,w),x)},
bid(d,e){A.cn(C.t,new B.bOw(e,new B.bOx(),d),!1,d,!0,!0,C.m8,y.H)}}
B.aFm.prototype={
u(d){return A.bN(new A.R(C.bQ,A.C(A.a([D.c_a,C.cz,D.ceK,C.Y,D.cd8,C.bf,E.d5b("Ver pedidos",new B.bT7(d))],y.p),C.w,C.j,C.L,0,C.v),null),null,null)}}
var z=a.updateTypes(["P(P,pt)","F<t<pt>>(au)","pt()","e(t<pt>)"])
B.cId.prototype={
$1(d){return this.aGf(d)},
aGf(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.H(A.cv($.b8(),new B.cIb(),y.D,q),q)
if(p==null){v=D.bzy
x=1
break}q=$.T().b
q===$&&A.b()
x=3
return A.d(q.R("bookings").az(0,"*, proposals(title, description, payment_terms), events(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").W("partner_id",p).dl(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bk(u,y.P),s=A.u(t),t=new A.ak(t,t.gA(t),s.i("ak<U.E>")),s=s.i("U.E");t.t();){r=t.d
q.push(new B.cIc(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cIb.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.cIc.prototype={
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
v=F.cDo(v,J.cx(t==null?"":t),h.h(i,"reference"))}if(x.length===0)t="Cliente"
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
return new B.pt(v,t,s,r,g,p,o,n,q,m,new A.a5(u,new B.cI9(),A.u(u).i("a5<U.E>")).d7(0,0,new B.cIa()),A.a0(h.h(i,"status")))},
$S:z+2}
B.cI9.prototype={
$1(d){return J.o(J.h(d,"status"),"paid")},
$S:34}
B.cIa.prototype={
$2(d,e){return d+A.dt(J.h(e,"amount"))},
$S:160}
B.bkx.prototype={
$0(){return C.dZ},
$S:40}
B.bkw.prototype={
$2(d,e){return new A.jb("N\xe3o foi poss\xedvel carregar.",new B.bks(this.a),null)},
$S:47}
B.bks.prototype={
$0(){return this.a.ai($.cPN())},
$S:0}
B.bkv.prototype={
$1(d){var x,w=null,v=J.a6(d)
if(v.gY(d))v=D.clq
else{x=A.a([new A.f2(new B.bkt(d),w),C.a3],y.p)
for(v=v.gV(d);v.t();)x.push(new A.R(C.jt,new B.aDv(v.gE(v),w),w))
v=A.y6(A.d_(x,w,H.Np,w,w,!1,C.a1,!1),w,new B.bku(this.a))}return v},
$S:z+3}
B.bku.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.ai($.cPN())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.bkt.prototype={
$1(d){var x=this.a,w=J.c9(x),v=w.d7(x,0,new B.bkq()),u=w.d7(x,0,new B.bkr()),t=A.aQ(v,!1),s=w.gA(x)
x=w.gA(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.aqU(D.b6z,A.e9(C.bc,A.a([new A.v3("Recebido "+A.aQ(u,!1),!0,!1,null),new A.v3("Falta "+A.aQ(C.k.ah(v-u,0,1/0),!1),!1,!1,null)],y.p),C.r,C.bj,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:1499}
B.bkq.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.bkr.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bOy.prototype={
$0(){return this.a.bid(this.b,this.c)},
$S:0}
B.bOx.prototype={
$2(d,e){var x=null
return new A.R(C.er,A.Q(A.a([A.aL(A.i(d,x,x,x,x,C.W,x,x,x),x,110),A.a7(A.i(e,x,x,x,x,C.dt,x,x,x),1)],y.p),C.H,C.j,C.m,0,x,x),x)},
$S:164}
B.bOw.prototype={
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
u.push(A.L_(D.aD0,D.caq,new B.bOv(d,this.c),w))
return A.bD(!0,new A.R(D.aty,A.dX(A.C(u,C.J,C.j,C.m,0,C.v),C.z,w,w,w,w,C.a1),w),w,C.a_,!0)},
$S:46}
B.bOv.prototype={
$0(){A.aq(this.a,!1).bJ()
A.ai(this.b).bS(0,"/partner-messages",null)},
$S:0}
B.bT7.prototype={
$0(){return A.ai(this.a).bS(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.pt,A.H)
w(A.bx,[B.cId,B.cIb,B.cI9,B.bkv,B.bkt,B.bOw])
w(A.bR,[B.cIc,B.bkx,B.bks,B.bku,B.bOy,B.bOv,B.bT7])
w(A.cR,[B.cIa,B.bkw,B.bkq,B.bkr,B.bOx])
x(B.L7,A.en)
w(A.L,[B.aDv,B.aFm])})()
A.bs(b.typeUniverse,JSON.parse('{"L7":{"J":[],"e":[],"f":[]},"aDv":{"L":[],"e":[],"f":[]},"aFm":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{c:x("ax<t<pt>>"),D:x("cG"),o:x("r<pt>"),s:x("r<c>"),p:x("r<e>"),y:x("t<pt>"),P:x("a4<c,@>"),w:x("dn"),g:x("t<@>?"),h:x("a4<c,@>?"),Y:x("a4<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aty=new A.a2(20,18,20,20)
D.aD0=new A.ba(C.fl,18,null,null,null,null)
D.b6z=x([C.nG,C.ec,C.bL],A.w("r<aV>"))
D.bzy=x([],y.o)
D.bM2=new A.lG("Contratos",null,!0,null,20,!0,null)
D.bSS=new A.bZ("Em an\xe1lise",C.a9,C.S)
D.bSX=new A.bZ("Cancelado",C.a9,C.S)
D.bTc=new A.bZ("Expirado",C.a9,C.S)
D.bTd=new A.bZ("Aguarda sinal",C.u7,C.ub)
D.bTn=new A.bZ("Falta o restante",C.u7,C.ub)
D.c_a=new A.MO(C.nG,-0.016,96,null)
D.caq=new A.D("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.cd8=new A.D("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,G.Ic,C.a5,null,null,null,null,null,null,null)
D.ceK=new A.D("Ainda sem contratos",null,C.bv,C.a5,null,null,null,null,null,null,null)
D.clq=new B.aFm(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTA","cPN",()=>A.eE(new B.cId(),null,!1,null,null,y.y))})()};
(a=>{a["oGuDnz5kwOsSERSiXlEqcK+o8vk="]=a.current})($__dart_deferred_initializers__);