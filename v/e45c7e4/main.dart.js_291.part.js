((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dCt(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bTi
break A}if("confirmed"===w){x=new A.c_("Em vigor",C.fK,$.ap)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.c_("Conclu\xeddo",C.fK,$.ap):D.bTs
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bT1
break A}if("expired"===w){x=D.bTh
break A}x=D.bSX
break A}return x},
dpm(){return new B.L9(null)},
pv:function pv(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cIi:function cIi(){},
cIg:function cIg(){},
cIh:function cIh(d){this.a=d},
cIe:function cIe(){},
cIf:function cIf(){},
L9:function L9(d){this.a=d},
bkB:function bkB(){},
bkA:function bkA(d){this.a=d},
bkw:function bkw(d){this.a=d},
bkz:function bkz(d){this.a=d},
bky:function bky(d){this.a=d},
bkx:function bkx(d){this.a=d},
bku:function bku(){},
bkv:function bkv(){},
aDz:function aDz(d,e){this.c=d
this.a=e},
bOC:function bOC(d,e,f){this.a=d
this.b=e
this.c=f},
bOB:function bOB(){},
bOA:function bOA(d,e,f){this.a=d
this.b=e
this.c=f},
bOz:function bOz(d,e){this.a=d
this.b=e},
aFq:function aFq(d){this.a=d},
bTb:function bTb(d){this.a=d}},D,F,G,H
J=c[1]
A=c[0]
C=c[2]
E=c[95]
B=a.updateHolder(c[25],B)
D=c[343]
F=c[147]
G=c[227]
H=c[235]
B.pv.prototype={}
B.L9.prototype={
bc(d,e){var x=null,w=e.H($.cPT(),y.c)
return A.cM(x,C.bx,A.bE(!0,new A.mf(A.a([A.aJ(x,A.aw(d,C.b5,y.w).w.r.b,x),D.bM7],y.p),A.h9(w,new B.bkz(e),new B.bkA(e),new B.bkB(),!1,!0,!1),x),x,C.a_,!1),!0,x)}}
B.aDz.prototype={
u(d){var x=null,w=this.c,v=B.dCt(w),u=w.y,t=u<=0?0:C.k.ah(w.Q/u,0,1),s=A.a0(22),r=w.c,q=A.a6(A.i(r,x,x,x,x,C.ao,x,x,x),1),p=A.a0(999),o=y.p
p=A.Q(A.a([new A.cF(r,44,w.d,!1,!0,x),C.ag,q,A.D(x,A.i(v.a,x,x,x,x,A.aG(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.O(v.b,x,x,p,x,x,C.y),x,x,x,C.nm,x,x,x)],o),C.w,C.j,C.m,0,x,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.PK(r))
return A.aU(A.D(x,A.B(A.a([p,C.be,A.i(C.e.a3(q," \xb7 "),x,x,x,x,C.W,x,x,x),C.P,new A.l1(t,5,x,C.bu,x),C.aE,A.i("Recebido "+A.aQ(w.Q,!0)+" de "+A.aQ(u,!0),x,x,x,x,C.b9,x,x,x)],o),C.H,C.j,C.m,0,C.v),C.r,x,x,new A.O(C.t,x,x,s,C.bb,x,C.y),x,x,x,C.bg,x,x,x),new B.bOC(this,d,w),x)},
bie(d,e){A.cn(C.t,new B.bOA(e,new B.bOB(),d),!1,d,!0,!0,C.ma,y.H)}}
B.aFq.prototype={
u(d){return A.bN(new A.R(C.bM,A.B(A.a([D.c_l,C.cz,D.ceW,C.X,D.cdj,C.bf,E.d5g("Ver pedidos",new B.bTb(d))],y.p),C.w,C.j,C.L,0,C.v),null),null,null)}}
var z=a.updateTypes(["P(P,pv)","F<t<pv>>(av)","pv()","e(t<pv>)"])
B.cIi.prototype={
$1(d){return this.aGg(d)},
aGg(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.H(A.cv($.b8(),new B.cIg(),y.D,q),q)
if(p==null){v=D.bzD
x=1
break}q=$.T().b
q===$&&A.b()
x=3
return A.d(q.R("bookings").az(0,"*, proposals(title, description, payment_terms), events(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").W("partner_id",p).dl(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.bk(u,y.P),s=A.u(t),t=new A.ak(t,t.gA(t),s.i("ak<U.E>")),s=s.i("U.E");t.t();){r=t.d
q.push(new B.cIh(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cIg.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.cIh.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k="booking_number",j="event_date",i=this.a,h=J.a7(i),g=y.h,f=g.a(h.h(i,"events")),e=g.a(h.h(i,"proposals"))
g=f==null
x=A.C(g?l:J.h(f,"partner_name_1"))
if(x==null)x=""
w=A.C(g?l:J.h(f,"partner_name_2"))
if(w==null)w=""
v=y.g.a(h.h(i,"payments"))
if(v==null)v=C.aj
u=J.bk(v,y.P)
A.a1(h.h(i,"id"))
if(h.h(i,k)==null)v=l
else{v=h.h(i,k)
t=y.Y.a(h.h(i,"partner_profiles"))
t=t==null?l:J.h(t,"business_name")
v=F.cDt(v,J.cx(t==null?"":t),h.h(i,"reference"))}if(x.length===0)t="Cliente"
else t=w.length===0?x:x+" & "+w
s=A.C(g?l:J.h(f,"profile_photo_url"))
if(s==null)s=A.C(g?l:J.h(f,"cover_photo_url"))
r=h.h(i,j)==null?l:A.d9(A.a1(h.h(i,j)))
q=A.C(g?l:J.h(f,"venue"))
if((q==null?l:q.length!==0)===!0){f.toString
g=A.a1(J.h(f,"venue"))}else{q=A.C(g?l:J.h(f,"location"))
g=q}q=e==null
p=A.C(q?l:J.h(e,"title"))
if(p==null)p="Servi\xe7o"
o=A.C(q?l:J.h(e,"description"))
n=A.C(q?l:J.h(e,"payment_terms"))
m=A.aK(h.h(i,"total_amount"))
q=m==null?l:m
if(q==null)q=0
m=A.aK(h.h(i,"deposit_amount"))
if(m==null)m=l
if(m==null)m=0
return new B.pv(v,t,s,r,g,p,o,n,q,m,new A.a5(u,new B.cIe(),A.u(u).i("a5<U.E>")).d7(0,0,new B.cIf()),A.a1(h.h(i,"status")))},
$S:z+2}
B.cIe.prototype={
$1(d){return J.o(J.h(d,"status"),"paid")},
$S:35}
B.cIf.prototype={
$2(d,e){return d+A.dt(J.h(e,"amount"))},
$S:164}
B.bkB.prototype={
$0(){return C.eg},
$S:42}
B.bkA.prototype={
$2(d,e){return new A.jc("N\xe3o foi poss\xedvel carregar.",new B.bkw(this.a),null)},
$S:44}
B.bkw.prototype={
$0(){return this.a.ai($.cPT())},
$S:0}
B.bkz.prototype={
$1(d){var x,w=null,v=J.a7(d)
if(v.gY(d))v=D.clC
else{x=A.a([new A.f2(new B.bkx(d),w),C.a3],y.p)
for(v=v.gV(d);v.t();)x.push(new A.R(C.jw,new B.aDz(v.gE(v),w),w))
v=A.y8(A.cZ(x,w,H.Nu,w,w,!1,C.a1,!1),w,new B.bky(this.a))}return v},
$S:z+3}
B.bky.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.ai($.cPT())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.bkx.prototype={
$1(d){var x=this.a,w=J.c9(x),v=w.d7(x,0,new B.bku()),u=w.d7(x,0,new B.bkv()),t=A.aQ(v,!1),s=w.gA(x)
x=w.gA(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.aqY(D.b6C,A.e9(C.bc,A.a([new A.v3("Recebido "+A.aQ(u,!1),!0,!1,null),new A.v3("Falta "+A.aQ(C.k.ah(v-u,0,1/0),!1),!1,!1,null)],y.p),C.r,C.bj,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:1501}
B.bku.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.bkv.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bOC.prototype={
$0(){return this.a.bie(this.b,this.c)},
$S:0}
B.bOB.prototype={
$2(d,e){var x=null
return new A.R(C.et,A.Q(A.a([A.aJ(A.i(d,x,x,x,x,C.W,x,x,x),x,110),A.a6(A.i(e,x,x,x,x,C.dv,x,x,x),1)],y.p),C.H,C.j,C.m,0,x,x),x)},
$S:181}
B.bOA.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.i(u==null?"Contrato":"Contrato "+u,w,w,w,w,C.fz,C.a5,w,w),C.aA,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
x=v.e
if(x!=null)u.push(t.$2("Data",A.PK(x)))
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
u.push(A.L1(D.aD2,D.caB,new B.bOz(d,this.c),w))
return A.bE(!0,new A.R(D.atA,A.dX(A.B(u,C.J,C.j,C.m,0,C.v),C.z,w,w,w,w,C.a1),w),w,C.a_,!0)},
$S:47}
B.bOz.prototype={
$0(){A.aq(this.a,!1).bJ()
A.ai(this.b).bS(0,"/partner-messages",null)},
$S:0}
B.bTb.prototype={
$0(){return A.ai(this.a).bS(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.pv,A.H)
w(A.bx,[B.cIi,B.cIg,B.cIe,B.bkz,B.bkx,B.bOA])
w(A.bR,[B.cIh,B.bkB,B.bkw,B.bky,B.bOC,B.bOz,B.bTb])
w(A.cR,[B.cIf,B.bkA,B.bku,B.bkv,B.bOB])
x(B.L9,A.en)
w(A.L,[B.aDz,B.aFq])})()
A.br(b.typeUniverse,JSON.parse('{"L9":{"J":[],"e":[],"f":[]},"aDz":{"L":[],"e":[],"f":[]},"aFq":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{c:x("ax<t<pv>>"),D:x("cG"),o:x("r<pv>"),s:x("r<c>"),p:x("r<e>"),y:x("t<pv>"),P:x("a4<c,@>"),w:x("dn"),g:x("t<@>?"),h:x("a4<c,@>?"),Y:x("a4<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.atA=new A.a2(20,18,20,20)
D.aD2=new A.ba(C.fm,18,null,null,null,null)
D.b6C=x([C.nK,C.ec,C.bN],A.w("r<aV>"))
D.bzD=x([],y.o)
D.bM7=new A.lG("Contratos",null,!0,null,20,!0,null)
D.bSX=new A.c_("Em an\xe1lise",C.ac,C.S)
D.bT1=new A.c_("Cancelado",C.ac,C.S)
D.bTh=new A.c_("Expirado",C.ac,C.S)
D.bTi=new A.c_("Aguarda sinal",C.u9,C.ud)
D.bTs=new A.c_("Falta o restante",C.u9,C.ud)
D.c_l=new A.MQ(C.nK,-0.016,96,null)
D.caB=new A.E("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.cdj=new A.E("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,G.Ig,C.a5,null,null,null,null,null,null,null)
D.ceW=new A.E("Ainda sem contratos",null,C.bw,C.a5,null,null,null,null,null,null,null)
D.clC=new B.aFq(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTF","cPT",()=>A.eE(new B.cIi(),null,!1,null,null,y.y))})()};
(a=>{a["3aslciD8ksttlQtZKPRt7SbSQ0s="]=a.current})($__dart_deferred_initializers__);