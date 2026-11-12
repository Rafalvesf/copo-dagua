((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,O,I,P,K,L,Q,E,F,H,M,R,S,G,T,U,B={
cVi(d){return new B.B3(d)},
B3:function B3(d){this.x=d
this.b=null},
aRE:function aRE(d){this.a=d},
aRF:function aRF(d){this.a=d},
cl8:function cl8(){},
ckl(d){var x=0,w=A.n(y.h),v,u,t,s,r,q,p
var $async$ckl=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=$.Z().b
p===$&&A.b()
x=3
return A.d(p.S("bookings").aP(0,"partner_profiles(business_name), payments(id, type, status, amount)").a0("proposal_id",d).dI(0,"created_at",!1).lE(1).em(),$async$ckl)
case 3:u=f
if(u==null){v=null
x=1
break}p=J.a3(u)
t=y.g.a(p.h(u,"payments"))
if(t==null)t=C.at
t=J.dL(t,new B.ckm())
s=A.Y(t,t.$ti.i("y.E"))
if(s.length===0){v=null
x=1
break}r=C.e.gN(s)
p=y.W.a(p.h(u,"partner_profiles"))
q=A.P(p==null?null:J.h(p,"business_name"))
if(q==null)q="Parceiro"
p=J.a3(r)
v=new A.fX([A.a1(p.h(r,"id")),A.a1(p.h(r,"type")),A.e_(p.h(r,"amount")),q])
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$ckl,w)},
afC(d){var x=0,w=A.n(y.T),v,u,t,s,r
var $async$afC=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(R.afY(null,d),$async$afC)
case 3:u=$.Z().b
u===$&&A.b()
x=4
return A.d(u.S("bookings").aP(0,"status, payments(type, status)").a0("proposal_id",d).dI(0,"created_at",!1).lE(1).em(),$async$afC)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a3(t)
s=A.P(u.h(t,"status"))
if(s==null)s=""
if(C.f.be(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.g.a(u.h(t,"payments"))
u=new B.ckj(r==null?C.at:r)
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
return A.m($async$afC,w)},
ckm:function ckm(){},
ckj:function ckj(d){this.a=d},
ckk:function ckk(d,e){this.a=d
this.b=e},
cVj(d){return new B.XG(d,null)},
XG:function XG(d,e){this.d=d
this.a=e},
a7a:function a7a(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bB7:function bB7(d){this.a=d},
bB6:function bB6(d,e){this.a=d
this.b=e},
bB5:function bB5(d,e){this.a=d
this.b=e},
bB9:function bB9(d){this.a=d},
bBa:function bBa(){},
bBb:function bBb(d){this.a=d},
bBc:function bBc(d,e,f){this.a=d
this.b=e
this.c=f},
bBe:function bBe(){},
bBd:function bBd(d,e){this.a=d
this.b=e},
bB8:function bB8(d,e,f){this.a=d
this.b=e
this.c=f},
bBf:function bBf(d,e){this.a=d
this.b=e},
bBg:function bBg(d){this.a=d},
ab0:function ab0(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.a=h},
ab1:function ab1(){var _=this
_.y=_.x=_.w=!1
_.z=null
_.d=$
_.c=_.a=null},
c4x:function c4x(d,e){this.a=d
this.b=e},
c4v:function c4v(d,e){this.a=d
this.b=e},
c4w:function c4w(d,e){this.a=d
this.b=e},
c4y:function c4y(){},
c4q:function c4q(d){this.a=d},
c4r:function c4r(d,e){this.a=d
this.b=e},
c4l:function c4l(d){this.a=d},
c4m:function c4m(d){this.a=d},
c4n:function c4n(d){this.a=d},
c4o:function c4o(d){this.a=d},
c4p:function c4p(d){this.a=d},
c4u:function c4u(d){this.a=d},
c4s:function c4s(d){this.a=d},
c4t:function c4t(d,e,f){this.a=d
this.b=e
this.c=f},
chQ:function chQ(){},
aEd:function aEd(d,e,f){this.c=d
this.d=e
this.a=f},
xA:function xA(d,e,f){this.a=d
this.b=e
this.c=f},
RT:function RT(d,e,f){this.r=d
this.w=e
this.a=f},
acL:function acL(){this.d=!1
this.c=this.a=null},
c9R:function c9R(d){this.a=d},
c9U:function c9U(d,e,f){this.a=d
this.b=e
this.c=f},
c9V:function c9V(d,e,f){this.a=d
this.b=e
this.c=f},
c9S:function c9S(d,e){this.a=d
this.b=e},
c9T:function c9T(d,e){this.a=d
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
B.B3.prototype={
cY(){A.iE(this.gLx(this),y.H)
return H.J3},
lG(d){return this.boL(0)},
boL(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$lG=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:l={}
t.sa1(0,t.ga1(0).i8(!0))
q=$.Z()
p=q.b
p===$&&A.b()
o=t.x
x=2
return A.d(p.S("messages").cz(0).a0("conversation_id",o).dI(0,"created_at",!0),$async$lG)
case 2:n=f
l.a=null
v=4
x=7
return A.d(q.b.S("conversations").aP(0,"couple_hidden_at").a0("id",o).em(),$async$lG)
case 7:s=f
q=s
r=A.P(q==null?null:J.h(q,"couple_hidden_at"))
if(r!=null)l.a=A.df(r)
v=1
x=6
break
case 4:v=3
k=u.pop()
x=6
break
case 3:x=1
break
case 6:l=J.d1(n,new B.aRE(t),y.y).dv(0,new B.aRF(l))
l=A.Y(l,l.$ti.i("y.E"))
t.sa1(0,new F.jG(!1,l))
v=9
l=$.Z().b
l===$&&A.b()
q=y.z
x=12
return A.d(l.bd("mark_conversation_read",A.R(["p_conversation_id",o],y.N,q),q),$async$lG)
case 12:A.en(t).aw($.cBz())
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
mA(d){return this.aCU(d)},
aCU(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
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
return A.d(s.dm(0,A.R(["conversation_id",u.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cz(0).dZ(0),$async$mA)
case 3:q=f
r=u.ga1(0)
t=A.Y(u.ga1(0).b,y.y)
t.push(u.Zq(q))
u.sa1(0,r.Do(t))
case 1:return A.l(v,w)}})
return A.m($async$mA,w)},
mz(d){return this.aCP(d)},
aCP(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mz=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.Z()
s=t.b
s===$&&A.b()
s=s.S("messages")
t=t.b.gbK().e.a
x=2
return A.d(s.dm(0,A.R(["conversation_id",v.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cz(0).dZ(0),$async$mz)
case 2:u=f
t=v.ga1(0)
s=A.Y(v.ga1(0).b,y.y)
s.push(v.Zq(u))
v.sa1(0,t.Do(s))
return A.l(null,w)}})
return A.m($async$mz,w)},
jD(d,e){return this.bjB(0,e)},
bjB(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jD=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.Z().b
p===$&&A.b()
x=2
return A.d(p.bd("delete_message",A.R(["p_message_id",e],y.N,y.z),y.H),$async$jD)
case 2:p=v.ga1(0)
u=A.a([],y.t)
for(t=v.ga1(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa1(0,p.Do(u))
return A.l(null,w)}})
return A.m($async$jD,w)},
Zq(d){var x,w=J.a3(d),v=A.a1(w.h(d,"id")),u=A.a1(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.P(w.h(d,"body")),r=A.P(w.h(d,"attachment_url")),q=A.P(w.h(d,"attachment_type")),p=A.P(w.h(d,"attachment_name")),o=A.df(A.a1(w.h(d,"created_at"))),n=A.P(w.h(d,"proposal_id")),m=A.P(w.h(d,"proposal_title")),l=A.b9(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.b9(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dN(w.h(d,"is_quote_request_notice"))
return F.cCC(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.XG.prototype={
R(){return new B.a7a(new A.aM(C.aj,$.ah()),A.JP(null,0,null,null))}}
B.a7a.prototype={
m(){var x=this.w
x.Z$=$.ah()
x.U$=0
this.x.m()
this.a9()},
a2J(){$.aw.k4$.push(new B.bB7(this))},
QG(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$QG=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.d
x=3
return A.d(u.gV().a2(0,$.N7().$1(t.f).ghr(),y.K),$async$QG)
case 3:s=e
t=u.c
if(t==null||s==null){x=1
break}S.a1e(t,s,!1)
case 1:return A.l(v,w)}})
return A.m($async$QG,w)},
Ra(d){return this.b6b(d)},
b6b(d){var x=0,w=A.n(y.H),v=this
var $async$Ra=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.w.sbN(0,d)
x=2
return A.d(v.Gt(),$async$Ra)
case 2:return A.l(null,w)}})
return A.m($async$Ra,w)},
Gt(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Gt=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p=s.w
o=p.a.a
if(J.aO2(o).length===0){x=1
break}p.jU(0,C.k6)
r=s.gV()
r.a2(0,$.AE().$1("c:"+s.a.d.a).gaZ(),y.M).fK(0)
u=4
x=7
return A.d(r.a2(0,$.aNL().$1(s.a.d.a).gaZ(),y.C).mA(o),$async$Gt)
case 7:s.a2J()
u=2
x=6
break
case 4:u=3
n=t.pop()
if(s.c==null){x=1
break}p.sbN(0,o)
s.c.T(y.q).f.ah(D.bNZ)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Gt,w)},
Gs(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Gs=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(E.qu(q),$async$Gs)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gV().a2(0,$.aNL().$1(s.a.d.a).gaZ(),y.C).mz(r),$async$Gs)
case 8:s.a2J()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.T(y.q).f.ah(H.a67)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Gs,w)},
akK(d,e,f){var x=null
if(!d)return f
return A.dX(x,f,C.X,!1,x,x,x,x,x,x,x,new B.bB6(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bm)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gV(),f=$.aNL(),e=y.n,d=g.M(f.$1(i.a.d.a),e),a0=g.M($.cSF().$1(i.a.d.a),y.U),a1=a0.gq(a0)
a0=i.a
a0.toString
a0=g.M($.N7().$1(a0.d.f),y.D)
x=a0.gq(a0)
w=g.M($.cC(),y.B).c
v=A.iq(new A.a4(w,new B.bB9(i),A.a6(w).i("a4<1>")))
a0=v==null
u=a0?h:v.r
if(a0)t=h
else{a0=A.a([v.ge0()],y.s)
if(u!=null)a0.push(""+A.aU(u)+" "+C.fD[A.aD(u)-1]+" "+A.aI(u))
t=C.e.aq(a0," \xb7 ")}a0=d.b
s=C.e.cl(a0,new B.bBa())
r=i.a.d.f
q=g.M($.cTs().$1(r),y.v)
p=g.M($.agw().$1(r),y.Q)
p=p.gq(p)
o=N.cOm(p==null?h:p.c)
n=o==null?h:o[0].toLowerCase()+C.f.bP(o,1)
m=E.czO(g.M($.AE().$1("c:"+i.a.d.a),y.a))
g.p8(f.$1(i.a.d.a),new B.bBb(i),e)
g=i.a.d
if(q){f=A.a(["Online"],y.s)
if(n!=null)f.push(n)
f=C.e.aq(f," \xb7 ")}else if(x==null)f=h
else{f=A.a([],y.s)
e=x.c
if(e.length!==0)f.push(C.e.gN(e))
e=x.e
if(e.length!==0)f.push(e)
f=C.e.aq(f," \xb7 ")}i.a.toString
e=i.ga1J()
g=A.bn(!1,E.cuv(g.d,h,g.b,e,new B.bBc(i,a2,d),f,q),h,C.V,!1)
if(d.a&&a0.length===0)f=C.bk
else{if(s)f="Proposta recebida"
else f=x==null?h:A.iq(x.c)
i.a.toString
p=t==null?16:82
a0=F.cN8(new B.bBd(i,a2),new B.bBe(),a0,a1)
l=A.a6(a0).i("cU<1>")
a0=A.Y(new A.cU(a0,l),l.i("b3.E"))
f=new U.NO(t,f,"Ver perfil",e,A.cL(a0,i.x,new A.X(16,p,16,16),h,h,!0,C.Y,!1),h)}e=y.p
f=A.a([g,A.ac(A.nr(f,C.af,!0),1),A.nr(new E.NP(m,h),C.af,!0)],e)
i.a.toString
g=A.a([],e)
for(k=0;k<3;++k){j=D.bkr[k]
C.e.A(g,A.a([new B.aEd(j,new B.bBf(i,j),h),C.an],e))}f.push(A.nr(A.ez(A.W(g,C.x,C.m,C.q,0,h,h),D.amr,h,C.bs),C.af,!0))
f.push(new E.NN(i.w,i.gaNM(),i.gaNL(),"Escreve uma mensagem",new B.bBg(i),h))
return A.cF(h,C.kq,A.I(f,C.x,C.m,C.q,0,C.w),!0,h)}}
B.ab0.prototype={
atD(d,e){var x=this.f,w=y.l
if(e){w=d.M($.N6().$1(x),w)
w=w.gq(w)}else{w=d.a2(0,$.N6().$1(x),w)
w=w.gq(w)}return w},
blj(d){return this.atD(d,!1)},
R(){return new B.ab1()}}
B.ab1.prototype={
ak(){this.aG()
var x=this.a.d.w
if(x!=null)G.afD(x).b7(new B.c4x(this,x),y.P).eq(new B.c4y())},
gaLj(){switch(this.z){case"deposit_paid":var x="Sinal pago"
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
acP(){var x=null
this.c.T(y.q).f.ah(A.cV(new B.RT("Pagar",new B.c4q(this),x),x,x,x,x,C.C,x,D.c1i,x,C.a0,x,x,x,x,x,x,x,x,x,x))},
yN(d){return this.b35(d)},
b35(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$yN=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=u.a.d.w
if(l==null){x=1
break}x=3
return A.d(B.ckl(l),$async$yN)
case 3:t=f
s=u.c
if(s==null){x=1
break}if(t==null){A.av(s).b5("/bookings",null,y.X)
x=1
break}r=t.a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=I.iR(o,d)
x=4
return A.d(A.av(s).b5("/pay",new A.yL(q,n,p,r,null,!1,null,null,null,null,null),y.X),$async$yN)
case 4:if(u.c==null){x=1
break}x=5
return A.d(B.afC(l),$async$yN)
case 5:m=f
if(u.c!=null)u.t(new B.c4r(u,m))
case 1:return A.l(v,w)}})
return A.m($async$yN,w)},
BA(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j
var $async$BA=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=r.c
k.toString
n=r.gV()
m=n.a2(0,$.cC(),y.B).b
x=3
return A.d(G.aMz(k,m==null?null:m.a,"este parceiro"),$async$BA)
case 3:q=e
if(q==null||r.c==null){x=1
break}r.t(new B.c4l(r))
u=5
k=r.a.d.w
k.toString
x=8
return A.d(G.aft(k,q),$async$BA)
case 8:if(r.c==null){s=[1]
x=6
break}n.aw($.agx())
n.aw($.lO())
r.t(new B.c4m(r))
r.acP()
s.push(7)
x=6
break
case 5:u=4
j=t.pop()
k=A.aa(j)
x=k instanceof A.dm?9:11
break
case 9:p=k
x=p.b==="P0001"?12:13
break
case 12:k=r.a.d.w
k.toString
x=14
return A.d(G.afD(k),$async$BA)
case 14:o=e
if(J.o(o,"accepted")){if(r.c==null){s=[1]
x=6
break}n.aw($.agx())
n.aw($.lO())
r.t(new B.c4n(r))
r.acP()
s=[1]
x=6
break}if(r.c!=null)r.t(new B.c4o(r))
case 13:k=r.c
if(k!=null){k=k.T(y.q).f
if(p.b==="P0001")n="Esta proposta j\xe1 n\xe3o est\xe1 dispon\xedvel \u2014 foi recusada ou expirou."
else if(p.b==="P0007")n="Este parceiro j\xe1 tem outra reserva confirmada nessa data. N\xe3o \xe9 poss\xedvel aceitar esta proposta."
else if(p.b==="P0010")n="Este parceiro j\xe1 n\xe3o est\xe1 dispon\xedvel para o vosso evento."
else n=p.b==="P0008"?"J\xe1 tens uma reserva com este parceiro. S\xf3 podes aceitar outra se essa for cancelada sem o sinal pago.":"N\xe3o foi poss\xedvel aceitar a proposta. Tenta novamente."
k.ah(A.cV(null,null,null,null,null,C.C,null,A.i(n,null,null,null,null,null,null,null),null,C.a0,null,null,null,null,null,null,null,null,null,null))}x=10
break
case 11:k=r.c
if(k!=null)k.T(y.q).f.ah(T.a63)
case 10:s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.t(new B.c4p(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$BA,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.d,l=o.gV(),k=l.M($.cC(),y.B).b,j=k==null?n:k.r,i=j==null?n:k.z.c+" \xb7 "+A.aU(j)+" "+C.fD[A.aD(j)-1]+" "+A.aI(j)
l=o.a.atD(l,!0)
if(l==null)l=L.fY
x=m.y
w=x==null
v=l.oP(w?0:x)
l=o.a.r
u=i==null
t=u?m.x:i
if(t==null)t="Proposta"
u=u?n:m.x
x=w?n:Q.czL(x,m.z,v)
w=m.z
w=w==null?n:new B.c4u(v).$1(w)
s=v>0?"Valores j\xe1 com a taxa de servi\xe7o":n
r=A.a([new B.xA("Ver detalhe",new B.c4s(d),!1)],y.j)
q=o.x
if(q&&o.z==="cancelled")r.push(new B.xA("Pedir nova proposta",o.a.e,!0))
else if(q)r.push(new B.xA(o.gaLj(),new B.c4t(o,v,d),!0))
else if(o.y)r.push(D.afP)
else{q=o.w
p=q?"A aceitar\u2026":"Aceitar"
r.push(new B.xA(p,q?n:o.gaLi(),!0))}return F.cCD(r,w,"PROPOSTA",l,s,x,u,t)}}
B.aEd.prototype={
u(d){var x=null,w=A.T(17),v=A.c8(D.ahr,1.5)
return A.b_(A.E(C.S,A.i(this.c,x,x,x,C.dD,x,x,x),C.t,x,x,new A.K(x,x,v,w,x,x,C.y),x,34,x,x,C.dI,x,x,x),this.d,x)}}
B.xA.prototype={}
B.RT.prototype={
R(){return new B.acL()},
bqA(){return this.w.$0()}}
B.acL.prototype={
aYg(){var x=this
if(x.d)return
x.t(new B.c9R(x))
x.a.bqA()
x.c.T(y.q).f.a6U(D.bN4)},
u(d){var x,w,v,u,t=this,s=null
A.ak(d)
x=A.cKt(d)
w=A.cwS(d)
v=new B.c9U(t,w,x)
u=A.fv(s,s,s,s,s,s,s,s,s,s,s,s,v.$0(),s,s,s,s,s,s,s,s)
v=v.$0()
v=u.bik(new B.c9S(t,w).$0(),v)
u=t.d?s:t.gaYf()
return A.c7(A.i(t.a.r,s,s,s,s,s,s,s),s,s,u,s,v)}}
var z=a.updateTypes(["H<~>()","z(kk)","jG()","kk(@)","~(jG?,jG)","e(kk,z)","~()","B3(c)"])
B.aRE.prototype={
$1(d){return this.a.Zq(y.b.a(d))},
$S:z+3}
B.aRF.prototype={
$1(d){var x=this.a.a
return x==null||d.r.ik(x)},
$S:z+1}
B.cl8.prototype={
$2(d,e){return d.M($.ctF(),y.R).n(0,e)},
$S:1203}
B.ckm.prototype={
$1(d){var x=J.a3(d)
if(J.o(x.h(d,"status"),"pending"))x=J.o(x.h(d,"type"),"deposit")||J.o(x.h(d,"type"),"final_payment")
else x=!1
return x},
$S:66}
B.ckj.prototype={
$2(d,e){return J.agA(this.a,new B.ckk(d,e))},
$S:419}
B.ckk.prototype={
$1(d){var x=J.a3(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:66}
B.bB7.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.jh(0,C.cH,C.kL)},
$S:5}
B.bB6.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(M.MN(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(M.MV(s,new B.bB5(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.bB5.prototype={
$0(){var x=this.a
return x.gV().a2(0,$.aNL().$1(x.a.d.a).gaZ(),y.C).jD(0,this.b.a)},
$S:2}
B.bB9.prototype={
$1(d){return d.a===this.a.a.d.e},
$S:93}
B.bBa.prototype={
$1(d){return d.w!=null},
$S:z+1}
B.bBb.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a2J()},
$S:z+4}
B.bBc.prototype={
$0(){var x,w,v,u,t,s=this.a.gV(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a6(x).i("cU<1>"),x=new A.cU(x,w),x=new A.ap(x,x.gv(0),w.i("ap<b3.E>")),w=w.i("b3.E");x.p();){v=x.d
if(v==null)v=w.a(v)
if(v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new E.z8(u,v==null?"":v,null,null))}}return E.Wc(this.b,s,!1,K.qg,r)},
$S:0}
B.bBe.prototype={
$1(d){return!d.d},
$S:z+1}
B.bBd.prototype={
$2(d,e){var x,w=this,v=null,u=d.as
if(u!=null){x=d.at
if(x==null)x="file"
x=w.a.akK(e,d,new E.NM(u,x,d.ax,e,v))
u=x}else if(d.w!=null){u=w.a
x=u.a.d
x=new B.ab0(d,u.ga1J(),x.f,x.d,v)
u=x}else if(d.Q){u=d.e
u=A.dX(v,new E.xz(u==null?"":u,e,v,v),C.X,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.a.ga1J(),v,v,v,v,v,v,!1,C.bm)}else{u=w.a
x=d.e
if(e)u=u.akK(!0,d,new E.xz(x==null?"":x,!0,v,v))
else u=A.dX(v,new E.xz(x==null?"":x,!1,v,v),C.X,!1,v,v,v,v,v,v,v,new B.bB8(u,w.b,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!1,C.bm)}return u},
$S:z+5}
B.bB8.prototype={
$0(){return P.uQ(this.b,this.a.gV(),!1,null,null,K.qg,this.c.a)},
$S:0}
B.bBf.prototype={
$0(){return this.a.Ra(this.b)},
$S:0}
B.bBg.prototype={
$1(d){var x,w=this.a,v=w.gV()
w=v.a2(0,$.AE().$1("c:"+w.a.d.a).gaZ(),y.M)
x=v.a2(0,$.bp(),y.V).b
v=x==null?null:x.b
return w.a95(C.f.L(v==null?"":v))},
$S:6}
B.c4x.prototype={
$1(d){return this.azw(d)},
azw(d){var x=0,w=A.n(y.P),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null||d==null){x=1
break}s.t(new B.c4v(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(B.afC(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.t(new B.c4w(s,t))
case 4:case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1204}
B.c4v.prototype={
$0(){var x=this.a,w=this.b,v=w==="accepted"
x.x=v
x.y=w!=="sent"&&!v},
$S:0}
B.c4w.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.c4y.prototype={
$1(d){},
$S:13}
B.c4q.prototype={
$0(){var x,w=this.a,v=w.a
v.toString
v=v.blj(w.gV())
if(v==null)v=L.fY
x=w.a.d.y
return w.yN(v.oP(x==null?0:x))},
$S:0}
B.c4r.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.c4l.prototype={
$0(){return this.a.w=!0},
$S:0}
B.c4m.prototype={
$0(){return this.a.x=!0},
$S:0}
B.c4n.prototype={
$0(){return this.a.x=!0},
$S:0}
B.c4o.prototype={
$0(){return this.a.y=!0},
$S:0}
B.c4p.prototype={
$0(){return this.a.w=!1},
$S:0}
B.c4u.prototype={
$1(d){return I.iR(d,this.a)},
$S:1}
B.c4s.prototype={
$0(){return A.av(this.a).b5("/bookings",null,y.X)},
$S:0}
B.c4t.prototype={
$0(){var x=this.a,w=x.z
return w==null||w==="deposit_due"||w==="final_due"?x.yN(this.b):A.av(this.c).b5("/bookings",null,y.X)},
$S:0}
B.chQ.prototype={
$2(d,e){return this.azH(d,e)},
azH(d,e){var x=0,w=A.n(y.O),v,u=2,t=[],s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
q=$.Z().b
q===$&&A.b()
x=7
return A.d(q.S("conversations").aP(0,"partner_last_read_at").a0("id",e).em(),$async$$2)
case 7:s=g
q=s
r=A.P(q==null?null:J.h(q,"partner_last_read_at"))
q=r==null?null:A.df(r)
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
$S:446}
B.c9R.prototype={
$0(){this.a.d=!0},
$S:0}
B.c9U.prototype={
$0(){var x,w=this,v=w.a
v.a.toString
x=w.b.b
if(x!=null){if(x instanceof A.Aj)return x}else{x=w.c
x.gw5()
if(x.gw5() instanceof A.Aj)return y.E.a(x.gw5())}return A.nb(new B.c9V(v,w.b,w.c))},
$S:1205}
B.c9V.prototype={
$1(d){var x,w=this
if(d.n(0,C.al)){w.a.a.toString
x=w.b.c
return x==null?w.c.gKv():x}w.a.a.toString
x=w.b.b
return x==null?w.c.gw5():x},
$S:3}
B.c9S.prototype={
$0(){var x,w,v=this.a
v.a.toString
x=this.b
w=x.as
if(w instanceof A.Aj)return w
return A.nb(new B.c9T(v,x))},
$S:1206}
B.c9T.prototype={
$1(d){var x,w=this
if(d.n(0,C.al)){w.a.a.toString
x=w.b.at
return x==null?C.ad:x}w.a.a.toString
x=w.b.as
return x==null?C.ad:x},
$S:3};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dd4","cVi",7)
var u
w(u=B.B3.prototype,"gi7","cY",2)
v(u,"gLx","lG",0)
w(u=B.a7a.prototype,"ga1J","QG",0)
w(u,"gaNM","Gt",0)
w(u,"gaNL","Gs",0)
w(B.ab1.prototype,"gaLi","BA",0)
w(B.acL.prototype,"gaYf","aYg",6)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.B3,A.eO)
w(A.bv,[B.aRE,B.aRF,B.ckm,B.ckk,B.bB7,B.bB9,B.bBa,B.bBe,B.bBg,B.c4x,B.c4y,B.c4u,B.c9V,B.c9T])
w(A.cD,[B.cl8,B.ckj,B.bBb,B.bBd,B.chQ])
w(A.dy,[B.XG,B.ab0])
w(A.dw,[B.a7a,B.ab1])
w(A.bI,[B.bB6,B.bB5,B.bBc,B.bB8,B.bBf,B.c4v,B.c4w,B.c4q,B.c4r,B.c4l,B.c4m,B.c4n,B.c4o,B.c4p,B.c4s,B.c4t,B.c9R,B.c9U,B.c9S])
x(B.aEd,A.M)
x(B.xA,A.F)
x(B.RT,A.G)
x(B.acL,A.a0)})()
A.bx(b.typeUniverse,JSON.parse('{"B3":{"eO":["jG"]},"XG":{"G":[],"e":[],"f":[]},"ab0":{"G":[],"e":[],"f":[]},"a7a":{"a0":["XG"]},"ab1":{"a0":["ab0"]},"aEd":{"M":[],"e":[],"f":[]},"RT":{"G":[],"e":[],"f":[]},"acL":{"a0":["RT"]}}'))
var y=(function rtii(){var x=A.v
return{l:x("aG<fb>"),U:x("aG<an?>"),D:x("aG<f_?>"),Q:x("aG<yH?>"),V:x("cI"),y:x("kk"),C:x("B3"),n:x("jG"),K:x("H<f_?>"),j:x("q<xA>"),t:x("q<kk>"),Y:x("q<z8>"),s:x("q<c>"),p:x("q<e>"),a:x("t<c>"),b:x("a2<c,@>"),P:x("bw"),R:x("bG<c>"),N:x("c"),M:x("ur"),B:x("ec"),E:x("wK"),q:x("dD"),v:x("z"),z:x("@"),O:x("an?"),g:x("t<@>?"),W:x("a2<@,@>?"),X:x("F?"),h:x("+(c,c,V,c)?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afP=new B.xA("Indispon\xedvel",null,!0)
D.ahr=new A.O(1,0.8392156862745098,0.8156862745098039,0.7607843137254902,C.A)
D.amr=new A.X(16,0,16,8)
D.bkr=x(["Posso visitar?","Pedir outra proposta","Obrigado!"],y.s)
D.bN4=new A.uf(0,"action")
D.bXK=new A.J("N\xe3o foi poss\xedvel enviar a mensagem. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bNZ=new A.cc(D.bXK,null,null,null,null,null,null,null,null,null,null,null,null,C.a0,!1,null,null,null,C.C,null)
D.c1i=new A.J("Proposta aceite! Paga o sinal para confirmar.",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dqZ","aNL",()=>H.ID.$3$1(B.dd4(),y.C,y.n,y.N))
x($,"drH","cTs",()=>O.IF.$2$1(new B.cl8(),y.v,y.N))
x($,"dpR","cSF",()=>C.d4.md(0,new B.chQ(),y.O,y.N))})()};
(a=>{a["B947y5AGTqEvJmSdW13ImqRO4iY="]=a.current})($__dart_deferred_initializers__);