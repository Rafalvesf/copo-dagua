((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,C={
d4K(d,e){return new C.apN(d,e,null)},
Ol:function Ol(d,e){this.a=d
this.b=e},
cF7:function cF7(){},
cF6:function cF6(){},
cF8:function cF8(){},
apN:function apN(d,e,f){this.e=d
this.f=e
this.a=f},
b2o:function b2o(d,e,f){this.a=d
this.b=e
this.c=f},
b2n:function b2n(d){this.a=d},
P7:function P7(d,e,f){this.c=d
this.d=e
this.a=f},
afk:function afk(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
cd6:function cd6(d){this.a=d},
cd7:function cd7(d){this.a=d},
cd8:function cd8(d,e){this.a=d
this.b=e},
cd9:function cd9(d){this.a=d},
cdb:function cdb(d,e){this.a=d
this.b=e},
cda:function cda(d,e){this.a=d
this.b=e},
a_i(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$a_i=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.akO(),$async$a_i)
case 3:t=$.Q()
s=t.b
s===$&&A.b()
w=4
return A.d(s.P("bookings").al(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").V("id",d),$async$a_i)
case 4:r=g
w=5
return A.d(t.b.P("payments").al(0,"booking_id, type, status, amount, paid_at, due_at, provider").V("booking_id",d).tv(0,"created_at"),$async$a_i)
case 5:q=g
t=J.a7(r)
if(t.gY(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.h(t.gJ(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
s=J.cy(s==null?"Parceiro":s)
p=s}else{s=E.cER(s.a(J.h(t.gJ(r),"events")))
p=s}}if(t.gY(r))o=""
else{s=x.Y.a(J.h(t.gJ(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
o=J.cy(s==null?"":s)}u=E.d__(p,"Reserva "+(t.gY(r)?"":H.cIh(J.h(t.gJ(r),"booking_number"),o,J.h(t.gJ(r),"reference"))),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a_i,v)}},D,E,F
J=c[1]
A=c[0]
B=c[2]
G=c[410]
H=c[152]
C=a.updateHolder(c[71],C)
D=c[409]
E=c[134]
F=c[192]
C.Ol.prototype={
gNN(d){var w=this.b
return J.o(w==null?null:J.h(w,"status"),"open")}}
C.apN.prototype={
b9(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.G($.d1O().$1(r.e),x.v),k=l.gv(l)
if(k==null)return B.an
w=k.b
if(k.gNN(0)){l=D.a0G.h(0,w==null?q:J.h(w,"reason"))
return r.a0W("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.fT,D.aBY,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.h(w,"status"),p))v=!(!k.gNN(0)&&D.a7t.t(0,k.a))
if(v){l=$.au
v=J.a7(w)
u=D.a0I.h(0,v.h(w,o))
if(u==null)u=n
v=A.A(v.h(w,m))
return r.a0W(v==null?"":v,l,B.ib,u)}if(!(!k.gNN(0)&&D.a7t.t(0,k.a)))return B.an
v=x.p
u=A.a([],v)
if(l&&J.o(J.h(w,"status"),p)){l=$.au
t=J.a7(w)
s=D.a0I.h(0,t.h(w,o))
if(s==null)s=n
t=A.A(t.h(w,m))
B.e.n(u,A.a([r.a0W(t==null?"":t,l,B.ib,s),B.ad],v))}u.push(new A.am(A.Gs(D.aCG,D.caQ,new C.b2o(r,d,e),A.je(q,q,q,q,q,q,q,q,q,B.W,q,q,q,q,q,q,q,q,q,q,q)),q))
return A.y(u,B.E,B.h,B.l)},
a0W(d,e,f,g){var w=null,v=A.W(22),u=A.b9(f,e,w,w,22),t=x.p,s=A.a([A.i(g,w,w,w,w,A.aH(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w)],t)
if(d.length!==0)B.e.n(s,A.a([B.ar,A.i(d,w,w,w,w,F.rZ,w,w)],t))
return A.x(w,A.O(A.a([u,B.af,A.a5(A.y(s,B.G,B.h,B.l),1)],t),B.G,B.h,B.l,0,w),B.r,w,w,new A.J(B.t,w,w,v,B.bs,w,B.x),w,w,w,B.bo,w,w,w)}}
C.P7.prototype={
R(){return new C.afk(new A.aF(B.ak,$.aa()))}}
C.afk.prototype={
m(){var w=this.e
w.Z$=$.aa()
w.W$=0
this.a6()},
QW(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QW=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.B(m.a.a).length<10){r.p(new C.cd6(r))
w=1
break}r.p(new C.cd7(r))
t=4
p=$.Q().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.aG("open_dispute",A.R(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.B(m.a.a)],x.N,o),o),$async$QW)
case 7:m=r.c
if(m!=null)A.al(m,!1).ah(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.a9(l)
if(m instanceof A.cU){q=m
r.p(new C.cd8(r,q))}else r.p(new C.cd9(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$QW,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.d9(D.a0G,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.ee(m,A.u(m).i("ee<1,2>")).gX(0);v.q();){u=v.d
t=A.i(u.b,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.au
q=s?B.t:B.z
w.push(A.rW(o,t,new A.P(!0,q,o,o,o,o,o,B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.cdb(p,u),o,s,r,!1,o))}w=A.a([D.cgS,B.aC,D.cdV,B.a_,A.e5(B.bh,w,B.r,B.bl,8,8),B.aA,A.cs(o,B.a6,!1,o,!0,B.y,o,A.cu(),p.e,o,o,o,o,o,2,B.PC,B.U,!0,o,!0,o,!1,o,B.aB,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.al,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.au,o,B.b0,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.n(w,A.a([B.P,A.i(v,o,o,o,o,D.c48,o,o)],n))
w.push(B.a_)
n=p.f?o:p.gaX6()
v=A.ce(B.z,o,o,o,B.eC,o,B.ab,o,o,o)
w.push(new A.am(A.bD(A.i(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o),n,v),o))
return A.dS(A.y(w,B.E,B.h,B.J),B.y,o,B.Nq,o,B.av)}}
var z=a.updateTypes(["F<Ol?>(at,c)","P7(N)","F<~>()"])
C.cF7.prototype={
$2(d,e){return this.aEu(d,e)},
aEu(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.Q().b
p===$&&A.b()
w=7
return A.d(p.P("bookings").al(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").V("id",e).cj(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.h(r,"disputes"))
if(p==null)p=B.aj
o=J.bf(p,x.P)
o.ct(0,new C.cF6())
q=o
o=A.Y(J.h(r,"status"))
p=J.aN(q)===0?null:J.fh(q)
u=new C.Ol(o,p)
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$$2,v)},
$S:z+0}
C.cF6.prototype={
$2(d,e){var w="created_at"
return B.f.by(A.Y(J.h(e,w)),A.Y(J.h(d,w)))},
$S:311}
C.cF8.prototype={
$2(d,e){return null},
$S:1543}
C.b2o.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.bQ(null,new C.b2n(t),!1,u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.ai($.d1O().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:1}
C.b2n.prototype={
$1(d){var w=this.a
return new C.P7(w.e,w.f,null)},
$S:z+1}
C.cd6.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.cd7.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.cd8.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.cd9.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.cdb.prototype={
$1(d){var w=this.a
return w.p(new C.cda(w,this.b))},
$S:10}
C.cda.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.afk.prototype,"gaX6","QW",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.Ol,A.M)
v(A.cL,[C.cF7,C.cF6,C.cF8])
w(C.apN,A.ew)
v(A.bL,[C.b2o,C.cd6,C.cd7,C.cd8,C.cd9,C.cda])
v(A.bu,[C.b2n,C.cdb])
w(C.P7,A.G)
w(C.afk,A.a_)})()
A.br(b.typeUniverse,JSON.parse('{"P7":{"G":[],"e":[],"f":[]},"apN":{"G":[],"e":[],"f":[]},"afk":{"a_":["P7"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.C
return{v:w("ax<Ol?>"),w:w("c7<c,c>"),p:w("r<e>"),P:w("a3<c,@>"),e:w("lU"),N:w("c"),y:w("B"),z:w("@"),g:w("t<@>?"),Y:w("a3<@,@>?"),q:w("Ol?"),H:w("~")}})();(function constants(){D.aBY=new A.b0(57450,"HeroiconsSolid",null,!1)
D.aCG=new A.b8(G.DY,18,null,null,null,null)
D.bI5={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.a0G=new A.c7(D.bI5,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bI_={refund_full:0,refund_partial:1,partner_favor:2}
D.a0I=new A.c7(D.bI_,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.bIa={confirmed:0,completed:1,payment_overdue:2}
D.a7t=new A.ey(D.bIa,3,A.C("ey<c>"))
D.c48=new A.P(!0,B.fT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.caQ=new A.E("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null)
D.cdV=new A.E("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,F.rZ,null,null,null,null,null,null,null)
D.cgS=new A.E("Abrir disputa",null,B.t0,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"dW1","d1O",()=>B.bK.MP(0,new C.cF7(),new C.cF8(),x.q,x.N))})()};
(a=>{a["4k7J/MmYEq6dpqSU/tDrLyxZT3k="]=a.current})($__dart_deferred_initializers__);