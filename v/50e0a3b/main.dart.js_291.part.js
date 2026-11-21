((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,B={
doT(d){var x,w=d.as
A:{if("awaiting_deposit"===w){x=D.bPe
break A}if("confirmed"===w){x=new A.cp("Em vigor",C.fx,$.ao)
break A}if("completed"===w){x=d.Q+0.009>=d.y?new A.cp("Conclu\xeddo",C.fx,$.ao):D.bPn
break A}if("cancelled_by_couple"===w||"cancelled_by_partner"===w){x=D.bPp
break A}if("expired"===w){x=D.bPk
break A}x=D.bPh
break A}return x},
dc2(){return new B.Kd(null)},
p3:function p3(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cx3:function cx3(){},
cx1:function cx1(){},
cx2:function cx2(d){this.a=d},
cx_:function cx_(){},
cx0:function cx0(){},
Kd:function Kd(d){this.a=d},
bfo:function bfo(){},
bfn:function bfn(d){this.a=d},
bfj:function bfj(d){this.a=d},
bfm:function bfm(d){this.a=d},
bfl:function bfl(d){this.a=d},
bfk:function bfk(d){this.a=d},
bfh:function bfh(){},
bfi:function bfi(){},
aAO:function aAO(d,e){this.c=d
this.a=e},
bIn:function bIn(d,e,f){this.a=d
this.b=e
this.c=f},
bIm:function bIm(){},
bIl:function bIl(d,e,f){this.a=d
this.b=e
this.c=f},
bIk:function bIk(d,e){this.a=d
this.b=e},
aCE:function aCE(d){this.a=d},
bMM:function bMM(d){this.a=d}},D,G,H
J=c[1]
A=c[0]
C=c[2]
E=c[242]
F=c[90]
B=a.updateHolder(c[22],B)
D=c[344]
G=c[143]
H=c[251]
B.p3.prototype={}
B.Kd.prototype={
bk(d,e){var x=null,w=e.M($.cEf(),y.c)
return A.cP(x,C.bz,A.bB(!0,new A.kU(A.a([A.aS(x,A.at(d,C.bb,y.w).w.r.b,x),D.bID],y.p),A.fO(w,new B.bfm(e),new B.bfn(e),new B.bfo(),!1,!0,!1),x),x,C.X,!1),!0,x)}}
B.aAO.prototype={
u(d){var x=null,w=this.c,v=B.doT(w),u=w.y,t=u<=0?0:C.j.aj(w.Q/u,0,1),s=A.Z(22),r=w.c,q=A.ae(A.i(r,x,x,x,C.aT,x,x,x),1),p=A.Z(999),o=y.p
p=A.a_(A.a([new A.e7(r,44,w.d,!1,!0,x),C.aw,q,A.G(x,A.i(v.a,x,x,x,A.aE(x,x,v.c,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.t,x,x,new A.N(v.b,x,x,p,x,x,C.y),x,x,x,C.j2,x,x,x)],o),C.x,C.l,C.q,0,x,x)
q=A.a([w.r],y.s)
r=w.e
if(r!=null)q.push(A.Oy(r))
return A.ba(A.G(x,A.I(A.a([p,C.bh,A.i(C.e.ah(q," \xb7 "),x,x,x,C.ah,x,x,x),C.U,A.fs(A.Z(3),A.qe(C.bK,$.ao,5,t,x),C.aS),C.aF,A.i("Recebido "+A.bh(w.Q,!0)+" de "+A.bh(u,!0),x,x,x,C.b0,x,x,x)],o),C.L,C.l,C.q,0,C.w),C.t,x,x,new A.N(C.u,x,x,s,C.aE,x,C.y),x,x,x,C.be,x,x,x),new B.bIn(this,d,w),x)},
bfg(d,e){A.c8(C.u,new B.bIl(e,new B.bIm(),d),d,!0,!0,C.hH,y.H)}}
B.aCE.prototype={
u(d){return A.bO(new A.U(C.cc,A.I(A.a([D.bVs,C.cJ,D.ca1,C.a0,D.c8u,C.bx,F.cU8("Ver pedidos",new B.bMM(d))],y.p),C.x,C.l,C.W,0,C.w),null),null,null)}}
var z=a.updateTypes(["R(R,p3)","E<t<p3>>(au)","p3()","e(t<p3>)"])
B.cx3.prototype={
$1(d){return this.aEm(d)},
aEm(d){var x=0,w=A.n(y.y),v,u,t,s,r,q,p
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:q=y.T
p=d.M(A.cG($.bc(),new B.cx1(),y.D,q),q)
if(p==null){v=D.bwx
x=1
break}q=$.S().b
q===$&&A.b()
x=3
return A.d(q.T("bookings").aI(0,"id, booking_number, event_date, total_amount, deposit_amount, status, proposals(title, description, payment_terms), events(partner_name_1, partner_name_2, venue, location, profile_photo_url, cover_photo_url), payments(status, amount), partner_profiles(business_name)").X("partner_id",p).dw(0,"event_date",!0),$async$$1)
case 3:u=f
q=A.a([],y.o)
for(t=J.by(u,y.P),s=A.u(t),t=new A.ap(t,t.gA(t),s.i("ap<T.E>")),s=s.i("T.E");t.t();){r=t.d
q.push(new B.cx2(r==null?s.a(r):r).$0())}v=q
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:z+1}
B.cx1.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
B.cx2.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=null,k="booking_number",j="event_date",i=this.a,h=J.a5(i),g=y.h,f=g.a(h.h(i,"events")),e=g.a(h.h(i,"proposals"))
g=f==null
x=A.L(g?l:J.h(f,"partner_name_1"))
if(x==null)x=""
w=A.L(g?l:J.h(f,"partner_name_2"))
if(w==null)w=""
v=y.g.a(h.h(i,"payments"))
if(v==null)v=C.ao
u=J.by(v,y.P)
A.a2(h.h(i,"id"))
if(h.h(i,k)==null)v=l
else{v=h.h(i,k)
t=y.Y.a(h.h(i,"partner_profiles"))
t=t==null?l:J.h(t,"business_name")
v=G.csT(v,J.cL(t==null?"":t))}if(x.length===0)t="Cliente"
else t=w.length===0?x:x+" & "+w
s=A.L(g?l:J.h(f,"profile_photo_url"))
if(s==null)s=A.L(g?l:J.h(f,"cover_photo_url"))
r=h.h(i,j)==null?l:A.dd(A.a2(h.h(i,j)))
q=A.L(g?l:J.h(f,"venue"))
if((q==null?l:q.length!==0)===!0){f.toString
g=A.a2(J.h(f,"venue"))}else{q=A.L(g?l:J.h(f,"location"))
g=q}q=e==null
p=A.L(q?l:J.h(e,"title"))
if(p==null)p="Servi\xe7o"
o=A.L(q?l:J.h(e,"description"))
n=A.L(q?l:J.h(e,"payment_terms"))
m=A.aX(h.h(i,"total_amount"))
q=m==null?l:m
if(q==null)q=0
m=A.aX(h.h(i,"deposit_amount"))
if(m==null)m=l
if(m==null)m=0
return new B.p3(v,t,s,r,g,p,o,n,q,m,new A.a4(u,new B.cx_(),A.u(u).i("a4<T.E>")).dM(0,0,new B.cx0()),A.a2(h.h(i,"status")))},
$S:z+2}
B.cx_.prototype={
$1(d){return J.o(J.h(d,"status"),"paid")},
$S:39}
B.cx0.prototype={
$2(d,e){return d+A.dT(J.h(e,"amount"))},
$S:211}
B.bfo.prototype={
$0(){return C.bq},
$S:38}
B.bfn.prototype={
$2(d,e){return new A.j8("N\xe3o foi poss\xedvel carregar.",new B.bfj(this.a),null)},
$S:43}
B.bfj.prototype={
$0(){return this.a.al($.cEf())},
$S:0}
B.bfm.prototype={
$1(d){var x,w=null,v=J.a5(d)
if(v.gY(d))v=D.cgA
else{x=A.a([new A.eI(new B.bfk(d),w),C.ad],y.p)
for(v=v.gW(d);v.t();)x.push(new A.U(C.hw,new B.aAO(v.gF(v),w),w))
v=A.Aj(A.d3(x,w,H.Mk,w,w,!1,C.Z,!1),w,new B.bfl(this.a))}return v},
$S:z+3}
B.bfl.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v=u.a.al($.cEf())
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.bfk.prototype={
$1(d){var x=this.a,w=J.cA(x),v=w.dM(x,0,new B.bfh()),u=w.dM(x,0,new B.bfi()),t=A.bh(v,!1),s=w.gA(x)
x=w.gA(x)===1?"contrato":"contratos"
w=v<=0?0:u/v
return A.aow(D.b3Z,A.ew(C.bl,A.a([new A.un("Recebido "+A.bh(u,!1),!0,!1,null),new A.un("Falta "+A.bh(C.j.aj(v-u,0,1/0),!1),!1,!1,null)],y.p),C.t,C.bG,8,8),"CONTRATADO",w,""+s+" "+x,t)},
$S:1412}
B.bfh.prototype={
$2(d,e){return d+e.y},
$S:z+0}
B.bfi.prototype={
$2(d,e){return d+e.Q},
$S:z+0}
B.bIn.prototype={
$0(){return this.a.bfg(this.b,this.c)},
$S:0}
B.bIm.prototype={
$2(d,e){var x=null
return new A.U(C.i9,A.a_(A.a([A.aS(A.i(d,x,x,x,C.ah,x,x,x),x,110),A.ae(A.i(e,x,x,x,C.dN,x,x,x),1)],y.p),C.L,C.l,C.q,0,x,x),x)},
$S:415}
B.bIl.prototype={
$1(d){var x,w=null,v=this.a,u=v.b,t=this.b
u=A.a([A.i(u==null?"Contrato":"Contrato "+u,w,w,w,C.eq,C.a3,w,w),C.ak,t.$2("Cliente",v.c),t.$2("Servi\xe7o",v.r)],y.p)
x=v.e
if(x!=null)u.push(t.$2("Data",A.Oy(x)))
x=v.f
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Local",x))}u.push(t.$2("Valor",A.bh(v.y,!0)))
u.push(t.$2("Sinal",A.bh(v.z,!0)))
u.push(t.$2("Recebido",A.bh(v.Q,!0)))
x=v.w
if((x==null?w:x.length!==0)===!0){x.toString
u.push(t.$2("Descri\xe7\xe3o",x))}v=v.x
if((v==null?w:v.length!==0)===!0){v.toString
u.push(t.$2("Condi\xe7\xf5es",v))}u.push(C.ak)
u.push(A.DO(D.aAC,D.c5S,new B.bIk(d,this.c),w))
return A.bB(!0,new A.U(D.arK,A.ev(A.I(u,C.I,C.l,C.q,0,C.w),C.z,w,w,w,C.Z),w),w,C.X,!0)},
$S:50}
B.bIk.prototype={
$0(){A.av(this.a,!1).bS()
A.ar(this.b).bR(0,"/partner-messages",null)},
$S:0}
B.bMM.prototype={
$0(){return A.ar(this.a).bR(0,"/partner-requests",null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.p3,A.J)
w(A.bw,[B.cx3,B.cx1,B.cx_,B.bfm,B.bfk,B.bIl])
w(A.bL,[B.cx2,B.bfo,B.bfj,B.bfl,B.bIn,B.bIk,B.bMM])
w(A.cM,[B.cx0,B.bfn,B.bfh,B.bfi,B.bIm])
x(B.Kd,A.eA)
w(A.O,[B.aAO,B.aCE])})()
A.bt(b.typeUniverse,JSON.parse('{"Kd":{"H":[],"e":[],"f":[]},"aAO":{"O":[],"e":[],"f":[]},"aCE":{"O":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.v
return{c:x("aF<t<p3>>"),D:x("cv"),o:x("r<p3>"),s:x("r<c>"),p:x("r<e>"),y:x("t<p3>"),P:x("a3<c,@>"),w:x("dn"),g:x("t<@>?"),h:x("a3<c,@>?"),Y:x("a3<@,@>?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.arK=new A.a0(20,18,20,20)
D.aAC=new A.bi(C.hz,18,null,null,null,null)
D.b3Z=x([C.nc,C.el,C.bN],A.v("r<aP>"))
D.bwx=x([],y.o)
D.bID=new A.kd("Contratos",null,!0,null,20,!0,null)
D.bPe=new A.cp("Aguarda sinal",C.tv,C.tz)
D.bPh=new A.cp("Em an\xe1lise",C.am,C.R)
D.bPk=new A.cp("Expirado",C.am,C.R)
D.bPn=new A.cp("Falta o restante",C.tv,C.tz)
D.bPp=new A.cp("Cancelado",C.am,C.R)
D.bVs=new A.AF(C.nc,-0.016,96,null,null)
D.c5S=new A.C("Falar com o cliente",null,null,null,null,null,null,null,null,null,null)
D.c8u=new A.C("Quando um cliente aceitar uma proposta tua, o contrato aparece aqui com o valor, as condi\xe7\xf5es e os pagamentos.",null,E.yl,C.a3,null,null,null,null,null,null,null)
D.ca1=new A.C("Ainda sem contratos",null,C.bR,C.a3,null,null,null,null,null,null,null)
D.cgA=new B.aCE(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dG5","cEf",()=>A.eB(new B.cx3(),null,!1,null,null,y.y))})()};
(a=>{a["SJGSGA6wh0NKs0spoWmBOUUHEyE="]=a.current})($__dart_deferred_initializers__);