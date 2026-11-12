((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,O,I,P,K,L,Q,E,F,H,M,R,S,G,T,U,B={
cVX(d){return new B.B4(d)},
B4:function B4(d){this.x=d
this.b=null},
aRM:function aRM(d){this.a=d},
aRN:function aRN(d){this.a=d},
clH:function clH(){},
ckS(d){var x=0,w=A.n(y.h),v,u,t,s,r,q,p
var $async$ckS=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=$.Z().b
p===$&&A.b()
x=3
return A.d(p.S("bookings").aO(0,"partner_profiles(business_name), payments(id, type, status, amount)").a0("proposal_id",d).dE(0,"created_at",!1).lE(1).em(),$async$ckS)
case 3:u=f
if(u==null){v=null
x=1
break}p=J.a3(u)
t=y.g.a(p.h(u,"payments"))
if(t==null)t=C.at
t=J.dL(t,new B.ckT())
s=A.Y(t,t.$ti.i("y.E"))
if(s.length===0){v=null
x=1
break}r=C.e.gN(s)
p=y.W.a(p.h(u,"partner_profiles"))
q=A.P(p==null?null:J.h(p,"business_name"))
if(q==null)q="Parceiro"
p=J.a3(r)
v=new A.fY([A.a1(p.h(r,"id")),A.a1(p.h(r,"type")),A.e_(p.h(r,"amount")),q])
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$ckS,w)},
afH(d){var x=0,w=A.n(y.T),v,u,t,s,r
var $async$afH=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(R.ag3(null,d),$async$afH)
case 3:u=$.Z().b
u===$&&A.b()
x=4
return A.d(u.S("bookings").aO(0,"status, payments(type, status)").a0("proposal_id",d).dE(0,"created_at",!1).lE(1).em(),$async$afH)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a3(t)
s=A.P(u.h(t,"status"))
if(s==null)s=""
if(C.f.be(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.g.a(u.h(t,"payments"))
u=new B.ckQ(r==null?C.at:r)
if(u.$2("final_payment","pending")){v="final_due"
x=1
break}if(u.$2("final_payment","paid")){v="paid"
x=1
break}if(s==="completed"){v="completed"
x=1
break}if(u.$2("deposit","paid")||s==="confirmed"){v="deposit_paid"
x=1
break}v="deposit_due"
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$afH,w)},
ckT:function ckT(){},
ckQ:function ckQ(d){this.a=d},
ckR:function ckR(d,e){this.a=d
this.b=e},
cVY(d){return new B.XO(d,null)},
XO:function XO(d,e){this.d=d
this.a=e},
a7f:function a7f(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bBi:function bBi(d){this.a=d},
bBh:function bBh(d,e){this.a=d
this.b=e},
bBg:function bBg(d,e){this.a=d
this.b=e},
bBk:function bBk(d){this.a=d},
bBl:function bBl(){},
bBm:function bBm(d){this.a=d},
bBn:function bBn(d,e,f){this.a=d
this.b=e
this.c=f},
bBp:function bBp(){},
bBo:function bBo(d,e){this.a=d
this.b=e},
bBj:function bBj(d,e,f){this.a=d
this.b=e
this.c=f},
bBq:function bBq(d,e){this.a=d
this.b=e},
bBr:function bBr(d){this.a=d},
ab5:function ab5(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.a=h},
ab6:function ab6(){var _=this
_.y=_.x=_.w=!1
_.z=null
_.d=$
_.c=_.a=null},
c54:function c54(d,e){this.a=d
this.b=e},
c52:function c52(d,e){this.a=d
this.b=e},
c53:function c53(d,e){this.a=d
this.b=e},
c55:function c55(){},
c4Y:function c4Y(d){this.a=d},
c4Z:function c4Z(d,e){this.a=d
this.b=e},
c4T:function c4T(d){this.a=d},
c4U:function c4U(d){this.a=d},
c4V:function c4V(d){this.a=d},
c4W:function c4W(d){this.a=d},
c4X:function c4X(d){this.a=d},
c51:function c51(d){this.a=d},
c5_:function c5_(d){this.a=d},
c50:function c50(d,e,f){this.a=d
this.b=e
this.c=f},
cin:function cin(){},
aEl:function aEl(d,e,f){this.c=d
this.d=e
this.a=f},
xB:function xB(d,e,f){this.a=d
this.b=e
this.c=f},
S_:function S_(d,e,f){this.r=d
this.w=e
this.a=f},
acQ:function acQ(){this.d=!1
this.c=this.a=null},
cao:function cao(d){this.a=d},
car:function car(d,e,f){this.a=d
this.b=e
this.c=f},
cas:function cas(d,e,f){this.a=d
this.b=e
this.c=f},
cap:function cap(d,e){this.a=d
this.b=e},
caq:function caq(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
C=c[2]
N=c[150]
O=c[242]
I=c[165]
P=c[145]
K=c[241]
L=c[190]
Q=c[103]
E=c[110]
F=c[77]
H=c[239]
M=c[125]
R=c[161]
S=c[140]
G=c[67]
T=c[197]
U=c[79]
B=a.updateHolder(c[57],B)
D=c[240]
B.B4.prototype={
cY(){A.iE(this.gLz(this),y.H)
return H.J5},
lG(d){return this.boU(0)},
boU(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$lG=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:l={}
t.sa1(0,t.ga1(0).i8(!0))
q=$.Z()
p=q.b
p===$&&A.b()
o=t.x
x=2
return A.d(p.S("messages").cz(0).a0("conversation_id",o).dE(0,"created_at",!0),$async$lG)
case 2:n=f
l.a=null
v=4
x=7
return A.d(q.b.S("conversations").aO(0,"couple_hidden_at").a0("id",o).em(),$async$lG)
case 7:s=f
q=s
r=A.P(q==null?null:J.h(q,"couple_hidden_at"))
if(r!=null)l.a=A.dg(r)
v=1
x=6
break
case 4:v=3
k=u.pop()
x=6
break
case 3:x=1
break
case 6:l=J.d1(n,new B.aRM(t),y.y).dk(0,new B.aRN(l))
l=A.Y(l,l.$ti.i("y.E"))
t.sa1(0,new F.jG(!1,l))
v=9
l=$.Z().b
l===$&&A.b()
q=y.z
x=12
return A.d(l.b9("mark_conversation_read",A.Q(["p_conversation_id",o],y.N,q),q),$async$lG)
case 12:A.en(t).av($.cCb())
v=1
x=11
break
case 9:v=8
j=u.pop()
x=11
break
case 8:x=1
break
case 11:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$lG,w)},
mA(d){return this.aCZ(d)},
aCZ(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$mA=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=C.f.L(d)
if(p.length===0){x=1
break}t=$.Z()
s=t.b
s===$&&A.b()
s=s.S("messages")
t=t.b.gbK().e.a
r=y.N
x=3
return A.d(s.dn(0,A.Q(["conversation_id",u.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cz(0).e_(0),$async$mA)
case 3:q=f
r=u.ga1(0)
t=A.Y(u.ga1(0).b,y.y)
t.push(u.Zs(q))
u.sa1(0,r.Dp(t))
case 1:return A.l(v,w)}})
return A.m($async$mA,w)},
mz(d){return this.aCU(d)},
aCU(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mz=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.Z()
s=t.b
s===$&&A.b()
s=s.S("messages")
t=t.b.gbK().e.a
x=2
return A.d(s.dn(0,A.Q(["conversation_id",v.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cz(0).e_(0),$async$mz)
case 2:u=f
t=v.ga1(0)
s=A.Y(v.ga1(0).b,y.y)
s.push(v.Zs(u))
v.sa1(0,t.Dp(s))
return A.l(null,w)}})
return A.m($async$mz,w)},
jD(d,e){return this.bjK(0,e)},
bjK(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jD=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.Z().b
p===$&&A.b()
x=2
return A.d(p.b9("delete_message",A.Q(["p_message_id",e],y.N,y.z),y.H),$async$jD)
case 2:p=v.ga1(0)
u=A.a([],y.t)
for(t=v.ga1(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa1(0,p.Dp(u))
return A.l(null,w)}})
return A.m($async$jD,w)},
Zs(d){var x,w=J.a3(d),v=A.a1(w.h(d,"id")),u=A.a1(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.P(w.h(d,"body")),r=A.P(w.h(d,"attachment_url")),q=A.P(w.h(d,"attachment_type")),p=A.P(w.h(d,"attachment_name")),o=A.dg(A.a1(w.h(d,"created_at"))),n=A.P(w.h(d,"proposal_id")),m=A.P(w.h(d,"proposal_title")),l=A.b9(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.b9(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dO(w.h(d,"is_quote_request_notice"))
return F.cDe(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.XO.prototype={
R(){return new B.a7f(new A.aM(C.aj,$.ah()),A.JR(null,0,null,null))}}
B.a7f.prototype={
m(){var x=this.w
x.a_$=$.ah()
x.V$=0
this.x.m()
this.a9()},
a2M(){$.aw.k4$.push(new B.bBi(this))},
QI(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$QI=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.d
x=3
return A.d(u.gU().a2(0,$.Nd().$1(t.f).ghr(),y.K),$async$QI)
case 3:s=e
t=u.c
if(t==null||s==null){x=1
break}S.a1m(t,s,!1)
case 1:return A.l(v,w)}})
return A.m($async$QI,w)},
Rc(d){return this.b6h(d)},
b6h(d){var x=0,w=A.n(y.H),v=this
var $async$Rc=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.w.sbN(0,d)
x=2
return A.d(v.Gu(),$async$Rc)
case 2:return A.l(null,w)}})
return A.m($async$Rc,w)},
Gu(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Gu=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p=s.w
o=p.a.a
if(J.aOa(o).length===0){x=1
break}p.jU(0,C.k6)
r=s.gU()
r.a2(0,$.AF().$1("c:"+s.a.d.a).gaW(),y.M).fK(0)
u=4
x=7
return A.d(r.a2(0,$.aNT().$1(s.a.d.a).gaW(),y.C).mA(o),$async$Gu)
case 7:s.a2M()
u=2
x=6
break
case 4:u=3
n=t.pop()
if(s.c==null){x=1
break}p.sbN(0,o)
s.c.T(y.q).f.af(D.bO7)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Gu,w)},
Gt(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Gt=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(E.qv(q),$async$Gt)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gU().a2(0,$.aNT().$1(s.a.d.a).gaW(),y.C).mz(r),$async$Gt)
case 8:s.a2M()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.T(y.q).f.af(H.a69)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Gt,w)},
akQ(d,e,f){var x=null
if(!d)return f
return A.dT(x,f,C.X,!1,x,x,x,x,x,x,x,new B.bBh(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bl)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gU(),f=$.aNT(),e=y.n,d=g.M(f.$1(i.a.d.a),e),a0=g.M($.cTj().$1(i.a.d.a),y.U),a1=a0.gt(a0)
a0=i.a
a0.toString
a0=g.M($.Nd().$1(a0.d.f),y.D)
x=a0.gt(a0)
w=g.M($.cx(),y.B).c
v=A.iq(new A.a4(w,new B.bBk(i),A.a7(w).i("a4<1>")))
a0=v==null
u=a0?h:v.r
if(a0)t=h
else{a0=A.a([v.gdW()],y.s)
if(u!=null)a0.push(""+A.aU(u)+" "+C.fD[A.aD(u)-1]+" "+A.aI(u))
t=C.e.ao(a0," \xb7 ")}a0=d.b
s=C.e.cl(a0,new B.bBl())
r=i.a.d.f
q=g.M($.cU6().$1(r),y.v)
p=g.M($.agC().$1(r),y.Q)
p=p.gt(p)
o=N.cP_(p==null?h:p.c)
n=o==null?h:o[0].toLowerCase()+C.f.bP(o,1)
m=E.cAq(g.M($.AF().$1("c:"+i.a.d.a),y.a))
g.p8(f.$1(i.a.d.a),new B.bBm(i),e)
g=i.a.d
if(q){f=A.a(["Online"],y.s)
if(n!=null)f.push(n)
f=C.e.ao(f," \xb7 ")}else if(x==null)f=h
else{f=A.a([],y.s)
e=x.c
if(e.length!==0)f.push(C.e.gN(e))
e=x.e
if(e.length!==0)f.push(e)
f=C.e.ao(f," \xb7 ")}i.a.toString
e=i.ga1L()
g=A.bo(!1,E.cv7(g.d,h,g.b,e,new B.bBn(i,a2,d),f,q),h,C.V,!1)
if(d.a&&a0.length===0)f=C.bk
else{if(s)f="Proposta recebida"
else f=x==null?h:A.iq(x.c)
i.a.toString
p=t==null?16:82
a0=F.cNL(new B.bBo(i,a2),new B.bBp(),a0,a1)
l=A.a7(a0).i("cV<1>")
a0=A.Y(new A.cV(a0,l),l.i("b3.E"))
f=new U.NU(t,f,"Ver perfil",e,A.cM(a0,i.x,new A.X(16,p,16,16),h,h,!0,C.Z,!1),h)}e=y.p
f=A.a([g,A.ab(A.nr(f,C.af,!0),1),A.nr(new E.NV(m,h),C.af,!0)],e)
i.a.toString
g=A.a([],e)
for(k=0;k<3;++k){j=D.bkw[k]
C.e.A(g,A.a([new B.aEl(j,new B.bBq(i,j),h),C.al],e))}f.push(A.nr(A.ez(A.V(g,C.x,C.l,C.q,0,h,h),D.amu,h,C.bs),C.af,!0))
f.push(new E.NT(i.w,i.gaNR(),i.gaNQ(),"Escreve uma mensagem",new B.bBr(i),h))
return A.cG(h,C.kq,A.I(f,C.x,C.l,C.q,0,C.w),!0,h)}}
B.ab5.prototype={
atI(d,e){var x=this.f,w=y.l
if(e){w=d.M($.Nc().$1(x),w)
w=w.gt(w)}else{w=d.a2(0,$.Nc().$1(x),w)
w=w.gt(w)}return w},
bls(d){return this.atI(d,!1)},
R(){return new B.ab6()}}
B.ab6.prototype={
ak(){this.aG()
var x=this.a.d.w
if(x!=null)G.afI(x).b7(new B.c54(this,x),y.P).eq(new B.c55())},
gaLo(){switch(this.z){case"deposit_paid":var x="Sinal pago"
break
case"final_due":x="Pagar restante"
break
case"paid":x="Tudo pago"
break
case"completed":x="Conclu\xeddo"
break
case"cancelled":x="Reserva cancelada"
break
default:x="Aceite \xb7 pagar sinal"
break}return x},
acU(){var x=null
this.c.T(y.q).f.af(A.cP(new B.S_("Pagar",new B.c4Y(this),x),x,x,x,x,C.C,x,D.c1u,x,C.a0,x,x,x,x,x,x,x,x,x,x))},
yN(d){return this.b3a(d)},
b3a(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$yN=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=u.a.d.w
if(l==null){x=1
break}x=3
return A.d(B.ckS(l),$async$yN)
case 3:t=f
s=u.c
if(s==null){x=1
break}if(t==null){A.au(s).b3("/bookings",null,y.X)
x=1
break}r=t.a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=I.iR(o,d)
x=4
return A.d(A.au(s).b3("/pay",new A.yM(q,n,p,r,null,!1,null,null,null,null,null),y.X),$async$yN)
case 4:if(u.c==null){x=1
break}x=5
return A.d(B.afH(l),$async$yN)
case 5:m=f
if(u.c!=null)u.q(new B.c4Z(u,m))
case 1:return A.l(v,w)}})
return A.m($async$yN,w)},
BA(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j
var $async$BA=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=r.c
k.toString
n=r.gU()
m=n.a2(0,$.cx(),y.B).b
x=3
return A.d(G.aMH(k,m==null?null:m.a,"este parceiro"),$async$BA)
case 3:q=e
if(q==null||r.c==null){x=1
break}r.q(new B.c4T(r))
u=5
k=r.a.d.w
k.toString
x=8
return A.d(G.afy(k,q),$async$BA)
case 8:if(r.c==null){s=[1]
x=6
break}n.av($.agD())
n.av($.lP())
r.q(new B.c4U(r))
r.acU()
s.push(7)
x=6
break
case 5:u=4
j=t.pop()
k=A.aa(j)
x=k instanceof A.dc?9:11
break
case 9:p=k
x=p.b==="P0001"?12:13
break
case 12:k=r.a.d.w
k.toString
x=14
return A.d(G.afI(k),$async$BA)
case 14:o=e
if(J.o(o,"accepted")){if(r.c==null){s=[1]
x=6
break}n.av($.agD())
n.av($.lP())
r.q(new B.c4V(r))
r.acU()
s=[1]
x=6
break}if(r.c!=null)r.q(new B.c4W(r))
case 13:k=r.c
if(k!=null){k=k.T(y.q).f
if(p.b==="P0001")n="Esta proposta j\xe1 n\xe3o est\xe1 dispon\xedvel \u2014 foi recusada ou expirou."
else if(p.b==="P0007")n="Este parceiro j\xe1 tem outra reserva confirmada nessa data. N\xe3o \xe9 poss\xedvel aceitar esta proposta."
else if(p.b==="P0010")n="Este parceiro j\xe1 n\xe3o est\xe1 dispon\xedvel para o vosso evento."
else n=p.b==="P0008"?"J\xe1 tens uma reserva com este parceiro. S\xf3 podes aceitar outra se essa for cancelada sem o sinal pago.":"N\xe3o foi poss\xedvel aceitar a proposta. Tenta novamente."
k.af(A.cP(null,null,null,null,null,C.C,null,A.i(n,null,null,null,null,null,null,null),null,C.a0,null,null,null,null,null,null,null,null,null,null))}x=10
break
case 11:k=r.c
if(k!=null)k.T(y.q).f.af(T.a65)
case 10:s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.q(new B.c4X(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$BA,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.d,l=o.gU(),k=l.M($.cx(),y.B).b,j=k==null?n:k.r,i=j==null?n:k.z.c+" \xb7 "+A.aU(j)+" "+C.fD[A.aD(j)-1]+" "+A.aI(j)
l=o.a.atI(l,!0)
if(l==null)l=L.fZ
x=m.y
w=x==null
v=l.oP(w?0:x)
l=o.a.r
u=i==null
t=u?m.x:i
if(t==null)t="Proposta"
u=u?n:m.x
x=w?n:Q.cAn(x,m.z,v)
w=m.z
w=w==null?n:new B.c51(v).$1(w)
s=v>0?"Valores j\xe1 com a taxa de servi\xe7o":n
r=A.a([new B.xB("Ver detalhe",new B.c5_(d),!1)],y.j)
q=o.x
if(q&&o.z==="cancelled")r.push(new B.xB("Pedir nova proposta",o.a.e,!0))
else if(q)r.push(new B.xB(o.gaLo(),new B.c50(o,v,d),!0))
else if(o.y)r.push(D.afT)
else{q=o.w
p=q?"A aceitar\u2026":"Aceitar"
r.push(new B.xB(p,q?n:o.gaLn(),!0))}return F.cDf(r,w,"PROPOSTA",l,s,x,u,t)}}
B.aEl.prototype={
u(d){var x=null,w=A.T(17),v=A.c5(D.ahv,1.5)
return A.aY(A.E(C.S,A.i(this.c,x,x,x,C.dE,x,x,x),C.t,x,x,new A.K(x,x,v,w,x,x,C.y),x,34,x,x,C.dx,x,x,x),this.d,x)}}
B.xB.prototype={}
B.S_.prototype={
R(){return new B.acQ()},
bqJ(){return this.w.$0()}}
B.acQ.prototype={
aYl(){var x=this
if(x.d)return
x.q(new B.cao(x))
x.a.bqJ()
x.c.T(y.q).f.a6Y(D.bNd)},
u(d){var x,w,v,u,t=this,s=null
A.ak(d)
x=A.cL5(d)
w=A.cxu(d)
v=new B.car(t,w,x)
u=A.fv(s,s,s,s,s,s,s,s,s,s,s,s,v.$0(),s,s,s,s,s,s,s,s)
v=v.$0()
v=u.bit(new B.cap(t,w).$0(),v)
u=t.d?s:t.gaYk()
return A.c8(A.i(t.a.r,s,s,s,s,s,s,s),s,s,u,s,v)}}
var z=a.updateTypes(["H<~>()","z(kk)","jG()","kk(@)","~(jG?,jG)","e(kk,z)","~()","B4(c)"])
B.aRM.prototype={
$1(d){return this.a.Zs(y.b.a(d))},
$S:z+3}
B.aRN.prototype={
$1(d){var x=this.a.a
return x==null||d.r.ik(x)},
$S:z+1}
B.clH.prototype={
$2(d,e){return d.M($.cuh(),y.R).n(0,e)},
$S:1206}
B.ckT.prototype={
$1(d){var x=J.a3(d)
if(J.o(x.h(d,"status"),"pending"))x=J.o(x.h(d,"type"),"deposit")||J.o(x.h(d,"type"),"final_payment")
else x=!1
return x},
$S:73}
B.ckQ.prototype={
$2(d,e){return J.agG(this.a,new B.ckR(d,e))},
$S:375}
B.ckR.prototype={
$1(d){var x=J.a3(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:73}
B.bBi.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.jh(0,C.cH,C.kL)},
$S:5}
B.bBh.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(M.MS(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(M.N0(s,new B.bBg(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.bBg.prototype={
$0(){var x=this.a
return x.gU().a2(0,$.aNT().$1(x.a.d.a).gaW(),y.C).jD(0,this.b.a)},
$S:2}
B.bBk.prototype={
$1(d){return d.a===this.a.a.d.e},
$S:91}
B.bBl.prototype={
$1(d){return d.w!=null},
$S:z+1}
B.bBm.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a2M()},
$S:z+4}
B.bBn.prototype={
$0(){var x,w,v,u,t,s=this.a.gU(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a7(x).i("cV<1>"),x=new A.cV(x,w),x=new A.ap(x,x.gv(0),w.i("ap<b3.E>")),w=w.i("b3.E");x.p();){v=x.d
if(v==null)v=w.a(v)
if(v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new E.z9(u,v==null?"":v,null,null))}}return E.Wk(this.b,s,!1,K.qh,r)},
$S:0}
B.bBp.prototype={
$1(d){return!d.d},
$S:z+1}
B.bBo.prototype={
$2(d,e){var x,w=this,v=null,u=d.as
if(u!=null){x=d.at
if(x==null)x="file"
x=w.a.akQ(e,d,new E.NS(u,x,d.ax,e,v))
u=x}else if(d.w!=null){u=w.a
x=u.a.d
x=new B.ab5(d,u.ga1L(),x.f,x.d,v)
u=x}else if(d.Q){u=d.e
u=A.dT(v,new E.xA(u==null?"":u,e,v,v),C.X,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.a.ga1L(),v,v,v,v,v,v,!1,C.bl)}else{u=w.a
x=d.e
if(e)u=u.akQ(!0,d,new E.xA(x==null?"":x,!0,v,v))
else u=A.dT(v,new E.xA(x==null?"":x,!1,v,v),C.X,!1,v,v,v,v,v,v,v,new B.bBj(u,w.b,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!1,C.bl)}return u},
$S:z+5}
B.bBj.prototype={
$0(){return P.uQ(this.b,this.a.gU(),!1,null,null,K.qh,this.c.a)},
$S:0}
B.bBq.prototype={
$0(){return this.a.Rc(this.b)},
$S:0}
B.bBr.prototype={
$1(d){var x,w=this.a,v=w.gU()
w=v.a2(0,$.AF().$1("c:"+w.a.d.a).gaW(),y.M)
x=v.a2(0,$.bi(),y.V).b
v=x==null?null:x.b
return w.a9a(C.f.L(v==null?"":v))},
$S:6}
B.c54.prototype={
$1(d){return this.azA(d)},
azA(d){var x=0,w=A.n(y.P),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null||d==null){x=1
break}s.q(new B.c52(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(B.afH(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.q(new B.c53(s,t))
case 4:case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1207}
B.c52.prototype={
$0(){var x=this.a,w=this.b,v=w==="accepted"
x.x=v
x.y=w!=="sent"&&!v},
$S:0}
B.c53.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.c55.prototype={
$1(d){},
$S:13}
B.c4Y.prototype={
$0(){var x,w=this.a,v=w.a
v.toString
v=v.bls(w.gU())
if(v==null)v=L.fZ
x=w.a.d.y
return w.yN(v.oP(x==null?0:x))},
$S:0}
B.c4Z.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.c4T.prototype={
$0(){return this.a.w=!0},
$S:0}
B.c4U.prototype={
$0(){return this.a.x=!0},
$S:0}
B.c4V.prototype={
$0(){return this.a.x=!0},
$S:0}
B.c4W.prototype={
$0(){return this.a.y=!0},
$S:0}
B.c4X.prototype={
$0(){return this.a.w=!1},
$S:0}
B.c51.prototype={
$1(d){return I.iR(d,this.a)},
$S:1}
B.c5_.prototype={
$0(){return A.au(this.a).b3("/bookings",null,y.X)},
$S:0}
B.c50.prototype={
$0(){var x=this.a,w=x.z
return w==null||w==="deposit_due"||w==="final_due"?x.yN(this.b):A.au(this.c).b3("/bookings",null,y.X)},
$S:0}
B.cin.prototype={
$2(d,e){return this.azL(d,e)},
azL(d,e){var x=0,w=A.n(y.O),v,u=2,t=[],s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
q=$.Z().b
q===$&&A.b()
x=7
return A.d(q.S("conversations").aO(0,"partner_last_read_at").a0("id",e).em(),$async$$2)
case 7:s=g
q=s
r=A.P(q==null?null:J.h(q,"partner_last_read_at"))
q=r==null?null:A.dg(r)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$2,w)},
$S:421}
B.cao.prototype={
$0(){this.a.d=!0},
$S:0}
B.car.prototype={
$0(){var x,w=this,v=w.a
v.a.toString
x=w.b.b
if(x!=null){if(x instanceof A.Ak)return x}else{x=w.c
x.gw5()
if(x.gw5() instanceof A.Ak)return y.E.a(x.gw5())}return A.nb(new B.cas(v,w.b,w.c))},
$S:1208}
B.cas.prototype={
$1(d){var x,w=this
if(d.n(0,C.an)){w.a.a.toString
x=w.b.c
return x==null?w.c.gKx():x}w.a.a.toString
x=w.b.b
return x==null?w.c.gw5():x},
$S:3}
B.cap.prototype={
$0(){var x,w,v=this.a
v.a.toString
x=this.b
w=x.as
if(w instanceof A.Ak)return w
return A.nb(new B.caq(v,x))},
$S:1209}
B.caq.prototype={
$1(d){var x,w=this
if(d.n(0,C.an)){w.a.a.toString
x=w.b.at
return x==null?C.ad:x}w.a.a.toString
x=w.b.as
return x==null?C.ad:x},
$S:3};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"ddK","cVX",7)
var u
w(u=B.B4.prototype,"gi7","cY",2)
v(u,"gLz","lG",0)
w(u=B.a7f.prototype,"ga1L","QI",0)
w(u,"gaNR","Gu",0)
w(u,"gaNQ","Gt",0)
w(B.ab6.prototype,"gaLn","BA",0)
w(B.acQ.prototype,"gaYk","aYl",6)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.B4,A.eO)
w(A.bv,[B.aRM,B.aRN,B.ckT,B.ckR,B.bBi,B.bBk,B.bBl,B.bBp,B.bBr,B.c54,B.c55,B.c51,B.cas,B.caq])
w(A.cF,[B.clH,B.ckQ,B.bBm,B.bBo,B.cin])
w(A.dx,[B.XO,B.ab5])
w(A.ds,[B.a7f,B.ab6])
w(A.bI,[B.bBh,B.bBg,B.bBn,B.bBj,B.bBq,B.c52,B.c53,B.c4Y,B.c4Z,B.c4T,B.c4U,B.c4V,B.c4W,B.c4X,B.c5_,B.c50,B.cao,B.car,B.cap])
x(B.aEl,A.M)
x(B.xB,A.G)
x(B.S_,A.F)
x(B.acQ,A.a0)})()
A.bx(b.typeUniverse,JSON.parse('{"B4":{"eO":["jG"]},"XO":{"F":[],"e":[],"f":[]},"ab5":{"F":[],"e":[],"f":[]},"a7f":{"a0":["XO"]},"ab6":{"a0":["ab5"]},"aEl":{"M":[],"e":[],"f":[]},"S_":{"F":[],"e":[],"f":[]},"acQ":{"a0":["S_"]}}'))
var y=(function rtii(){var x=A.v
return{l:x("aF<fb>"),U:x("aF<an?>"),D:x("aF<f_?>"),Q:x("aF<yI?>"),V:x("cE"),y:x("kk"),C:x("B4"),n:x("jG"),K:x("H<f_?>"),j:x("q<xB>"),t:x("q<kk>"),Y:x("q<z9>"),s:x("q<c>"),p:x("q<e>"),a:x("t<c>"),b:x("a2<c,@>"),P:x("bw"),R:x("bG<c>"),N:x("c"),M:x("ur"),B:x("ec"),E:x("wL"),q:x("dC"),v:x("z"),z:x("@"),O:x("an?"),g:x("t<@>?"),W:x("a2<@,@>?"),X:x("G?"),h:x("+(c,c,W,c)?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afT=new B.xB("Indispon\xedvel",null,!0)
D.ahv=new A.O(1,0.8392156862745098,0.8156862745098039,0.7607843137254902,C.A)
D.amu=new A.X(16,0,16,8)
D.bkw=x(["Posso visitar?","Pedir outra proposta","Obrigado!"],y.s)
D.bNd=new A.uf(0,"action")
D.bXV=new A.J("N\xe3o foi poss\xedvel enviar a mensagem. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bO7=new A.cd(D.bXV,null,null,null,null,null,null,null,null,null,null,null,null,C.a0,!1,null,null,null,C.C,null)
D.c1u=new A.J("Proposta aceite! Paga o sinal para confirmar.",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"drD","aNT",()=>H.IF.$3$1(B.ddK(),y.C,y.n,y.N))
x($,"dsm","cU6",()=>O.IH.$2$1(new B.clH(),y.v,y.N))
x($,"dqv","cTj",()=>C.cW.md(0,new B.cin(),y.O,y.N))})()};
(a=>{a["eq3ndarbGapvhP678BOnudOFn5g="]=a.current})($__dart_deferred_initializers__);