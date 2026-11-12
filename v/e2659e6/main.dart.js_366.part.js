((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,F,G,C={
cDs(d,e){return new C.ajQ(d,e,null)},
Lg:function Lg(d,e){this.a=d
this.b=e},
cgy:function cgy(){},
cgx:function cgx(){},
cgz:function cgz(){},
ajQ:function ajQ(d,e,f){this.e=d
this.f=e
this.a=f},
aUh:function aUh(d,e,f){this.a=d
this.b=e
this.c=f},
aUg:function aUg(d){this.a=d},
LW:function LW(d,e,f){this.c=d
this.d=e
this.a=f},
aag:function aag(d){var _=this
_.d="service_different"
_.e=d
_.f=!1
_.c=_.a=_.r=null},
bVj:function bVj(d){this.a=d},
bVk:function bVk(d){this.a=d},
bVl:function bVl(d,e){this.a=d
this.b=e},
bVm:function bVm(d){this.a=d},
bVo:function bVo(d,e){this.a=d
this.b=e},
bVn:function bVn(d,e){this.a=d
this.b=e},
W4(d,e){var w=0,v=A.n(x.e),u,t,s,r,q,p,o
var $async$W4=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:w=3
return A.d(E.afh(),$async$W4)
case 3:t=$.Z()
s=t.b
s===$&&A.b()
w=4
return A.d(s.S("bookings").aP(0,"id, booking_number, event_date, status, total_amount, partner_profiles(business_name), weddings(partner_name_1, partner_name_2, location), proposals(title)").a0("id",d),$async$W4)
case 4:r=g
w=5
return A.d(t.b.S("payments").aP(0,"booking_id, type, status, amount, paid_at, due_at, provider").a0("booking_id",d).x6(0,"created_at"),$async$W4)
case 5:q=g
t=J.a3(r)
if(t.ga_(r))p=e?"Parceiro":"Organizador"
else{s=x.Y
if(e){s=s.a(J.h(t.gN(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
s=J.cJ(s==null?"Parceiro":s)
p=s}else{s=E.cgk(s.a(J.h(t.gN(r),"weddings")))
p=s}}if(t.ga_(r))o=""
else{s=x.Y.a(J.h(t.gN(r),"partner_profiles"))
s=s==null?null:J.h(s,"business_name")
o=J.cJ(s==null?"":s)}u=E.cy6(p,"Reserva "+(t.ga_(r)?"":G.ciW(J.h(t.gN(r),"booking_number"),o)),r,q,e)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$W4,v)}},D,E
J=c[1]
A=c[0]
B=c[2]
F=c[410]
G=c[137]
C=a.updateHolder(c[66],C)
D=c[191]
E=c[123]
C.Lg.prototype={
ga7X(d){var w=this.b
return J.o(w==null?null:J.h(w,"status"),"open")}}
C.ajQ.prototype={
bf(d,e){var w,v,u,t,s,r=this,q=null,p="resolved",o="resolution",n="Disputa resolvida",m="admin_note",l=e.M($.cAE().$1(r.e),x.v),k=l.gq(l)
if(k==null)return B.aw
w=k.b
if(k.ga7X(0)){l=D.Zq.h(0,w==null?q:J.h(w,"reason"))
return r.Z4("A equipa \xc0 Nossa! est\xe1 a analisar: "+(l==null?"disputa aberta":l)+". Recebes uma notifica\xe7\xe3o com a decis\xe3o.",B.e0,D.avo,"Em disputa")}l=w!=null
v=!1
if(l)if(J.o(J.h(w,"status"),p))v=!(!k.ga7X(0)&&D.a53.n(0,k.a))
if(v){l=$.a5
v=J.a3(w)
u=D.Zs.h(0,v.h(w,o))
if(u==null)u=n
v=A.P(v.h(w,m))
return r.Z4(v==null?"":v,l,B.jJ,u)}if(!(!k.ga7X(0)&&D.a53.n(0,k.a)))return B.aw
v=x.p
u=A.a([],v)
if(l&&J.o(J.h(w,"status"),p)){l=$.a5
t=J.a3(w)
s=D.Zs.h(0,t.h(w,o))
if(s==null)s=n
t=A.P(t.h(w,m))
B.e.A(u,A.a([r.Z4(t==null?"":t,l,B.jJ,s),B.a5],v))}u.push(A.zy(D.aw6,D.c_K,new C.aUh(r,d,e),A.fv(q,q,q,q,q,q,q,q,q,B.L,q,q,q,q,q,q,q,q,q,q,q)))
return A.I(u,B.T,B.m,B.q,0,B.w)},
Z4(d,e,f,g){var w=null,v=A.T(22),u=A.aJ(f,e,w,w,22),t=x.p,s=A.a([A.i(g,w,w,w,A.as(w,w,e,w,w,w,w,w,w,w,w,14,w,w,B.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],t)
if(d.length!==0)B.e.A(s,A.a([B.aK,A.i(d,w,w,w,B.lF,w,w,w)],t))
return A.E(w,A.W(A.a([u,B.ar,A.ac(A.I(s,B.I,B.m,B.q,0,B.w),1)],t),B.I,B.m,B.q,0,w,w),B.t,w,w,new A.K(B.v,w,w,v,B.ap,w,B.y),w,w,w,w,B.bK,w,w,w)}}
C.LW.prototype={
R(){return new C.aag(new A.aM(B.aj,$.ah()))}}
C.aag.prototype={
m(){var w=this.e
w.Z$=$.ah()
w.U$=0
this.a9()},
OW(){var w=0,v=A.n(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OW=A.j(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(B.f.L(m.a.a).length<10){r.t(new C.bVj(r))
w=1
break}r.t(new C.bVk(r))
t=4
p=$.Z().b
p===$&&A.b()
o=x.z
w=7
return A.d(p.bd("open_dispute",A.R(["p_booking_id",r.a.c,"p_reason",r.d,"p_description",B.f.L(m.a.a)],x.N,o),o),$async$OW)
case 7:m=r.c
if(m!=null)A.aC(m,!1).b0(!0)
t=2
w=6
break
case 4:t=3
l=s.pop()
m=A.aa(l)
if(m instanceof A.dm){q=m
r.t(new C.bVl(r,q))}else r.t(new C.bVm(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.l(u,v)
case 2:return A.k(s.at(-1),v)}})
return A.m($async$OW,v)},
u(d){var w,v,u,t,s,r,q,p=this,o=null,n=x.N,m=A.dg(D.Zq,n,n)
m.K(0,p.a.d?"partner_no_show":"couple_no_show")
n=x.p
w=A.a([],n)
for(v=new A.eE(m,A.r(m).i("eE<1,2>")).gW(0);v.p();){u=v.d
t=A.i(u.b,o,o,o,o,o,o,o)
s=p.d===u.a
r=$.a5
q=s?B.v:B.E
w.push(A.os(o,t,new A.C(!0,q,o,o,o,o,o,B.bf,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,new C.bVo(p,u),o,s,r,!1,o))}w=A.a([D.c1U,B.aF,D.bZy,B.ai,A.ef(B.bj,w,B.t,B.bw,8,8),B.aq,A.cB(o,B.a9,!1,o,!0,B.C,o,A.cH(),p.e,o,o,o,o,o,2,B.Nv,B.X,!0,o,!0,o,!1,o,B.aG,o,o,o,o,o,o,o,o,5,3,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.av,o,o,o,o,o,o,o,o,o,o,o,o,!0,B.au,o,B.b6,o,o,o,o)],n)
v=p.r
if(v!=null)B.e.A(w,A.a([B.a4,A.i(v,o,o,o,D.bTK,o,o,o)],n))
w.push(B.ai)
n=p.f?o:p.gaRe()
v=A.cE(B.E,o,o,o,B.e6,o,B.ao,o,o)
w.push(A.bQ(A.i(p.f?"A enviar\u2026":"Enviar disputa",o,o,o,o,o,o,o),n,v))
return A.ez(A.I(w,B.T,B.m,B.a_,0,B.w),B.Lv,o,B.Y)}}
var z=a.updateTypes(["H<Lg?>(ax,c)","LW(N)","H<~>()"])
C.cgy.prototype={
$2(d,e){return this.azz(d,e)},
azz(d,e){var w=0,v=A.n(x.q),u,t=2,s=[],r,q,p,o,n,m
var $async$$2=A.j(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=$.Z().b
p===$&&A.b()
w=7
return A.d(p.S("bookings").aP(0,"status, disputes(id, status, reason, resolution, refund_amount, admin_note, created_at)").a0("id",e).em(),$async$$2)
case 7:r=g
if(r==null){u=null
w=1
break}p=x.g.a(J.h(r,"disputes"))
if(p==null)p=B.at
o=J.bA(p,x.P)
o.d4(0,new C.cgx())
q=o
o=A.a1(J.h(r,"status"))
p=J.b0(q)===0?null:J.hA(q)
u=new C.Lg(o,p)
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
C.cgx.prototype={
$2(d,e){var w="created_at"
return B.f.bC(A.a1(J.h(e,w)),A.a1(J.h(d,w)))},
$S:275}
C.cgz.prototype={
$2(d,e){return null},
$S:1342}
C.aUh.prototype={
$0(){var w=0,v=A.n(x.H),u=this,t
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.d(A.cd(null,new C.aUg(t),u.b,!0,!0,null,x.y),$async$$0)
case 2:if(e===!0)u.c.aw($.cAE().$1(t.e))
return A.l(null,v)}})
return A.m($async$$0,v)},
$S:2}
C.aUg.prototype={
$1(d){var w=this.a
return new C.LW(w.e,w.f,null)},
$S:z+1}
C.bVj.prototype={
$0(){return this.a.r="Explica o que aconteceu (m\xedn. 10 caracteres)."},
$S:0}
C.bVk.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.bVl.prototype={
$0(){var w=this.a
w.f=!1
w.r=this.b.b==="P0001"?"Esta reserva j\xe1 n\xe3o permite abrir disputa (ou j\xe1 tem uma aberta).":y.d},
$S:0}
C.bVm.prototype={
$0(){var w=this.a
w.f=!1
w.r=y.d},
$S:0}
C.bVo.prototype={
$1(d){var w=this.a
return w.t(new C.bVn(w,this.b))},
$S:10}
C.bVn.prototype={
$0(){return this.a.d=this.b.a},
$S:0};(function installTearOffs(){var w=a._instance_0u
w(C.aag.prototype,"gaRe","OW",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(C.Lg,A.F)
v(A.cD,[C.cgy,C.cgx,C.cgz])
w(C.ajQ,A.ei)
v(A.bI,[C.aUh,C.bVj,C.bVk,C.bVl,C.bVm,C.bVn])
v(A.bv,[C.aUg,C.bVo])
w(C.LW,A.G)
w(C.aag,A.a0)})()
A.bx(b.typeUniverse,JSON.parse('{"LW":{"G":[],"e":[],"f":[]},"ajQ":{"G":[],"e":[],"f":[]},"aag":{"a0":["LW"]}}'))
var y={d:"N\xe3o foi poss\xedvel abrir a disputa. Tenta novamente."}
var x=(function rtii(){var w=A.v
return{v:w("aG<Lg?>"),w:w("ch<c,c>"),p:w("q<e>"),P:w("a2<c,@>"),e:w("l0"),N:w("c"),y:w("z"),z:w("@"),g:w("t<@>?"),Y:w("a2<@,@>?"),q:w("Lg?"),H:w("~")}})();(function constants(){D.avo=new A.aB(57450,"HeroiconsSolid",null,!1)
D.aw6=new A.aY(F.u8,18,null,null,null,null)
D.bzn={service_not_provided:0,service_different:1,partner_no_show:2,couple_no_show:3,payment_issue:4,other:5}
D.Zq=new A.ch(D.bzn,["Servi\xe7o n\xe3o prestado","Servi\xe7o diferente do combinado","O parceiro n\xe3o apareceu","O organizador n\xe3o apareceu","Problema com pagamento","Outro"],x.w)
D.bzi={refund_full:0,refund_partial:1,partner_favor:2}
D.Zs=new A.ch(D.bzi,["Reembolso total ao organizador","Reembolso parcial ao organizador","Decidido a favor do parceiro"],x.w)
D.Lz=new A.X(4,0,0,8)
D.c_u=new A.J("Documentos",null,B.co,null,null,null,null,null,null,null,null)
D.a_i=new A.a_(D.Lz,D.c_u,null)
D.bzr={confirmed:0,completed:1,payment_overdue:2}
D.a53=new A.eB(D.bzr,3,A.v("eB<c>"))
D.bTK=new A.C(!0,B.e0,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bZy=new A.J("A equipa \xc0 Nossa! analisa e decide em poucos dias \xfateis. Enquanto isso, a reserva fica em disputa.",null,B.lF,null,null,null,null,null,null,null,null)
D.c_K=new A.J("H\xe1 um problema com esta reserva? Abrir disputa",null,null,null,null,null,null,null,null,null,null)
D.c1U=new A.J("Abrir disputa",null,B.k9,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"doG","cAE",()=>B.d4.Ub(0,new C.cgy(),new C.cgz(),x.q,x.N))})()};
(a=>{a["bz/fjlGmTL0fyolg+L6nzQHGohE="]=a.current})($__dart_deferred_initializers__);