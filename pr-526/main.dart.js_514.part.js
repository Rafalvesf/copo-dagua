((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,O,P,G,Q,R,K,S,E,H,I,L,T,F,U,V,B={
d_r(d){return new B.Bz(d)},
Bz:function Bz(d){this.x=d
this.b=null},
aSu:function aSu(d){this.a=d},
aSv:function aSv(d){this.a=d},
cpI:function cpI(){},
coT(d){var x=0,w=A.m(y.h),v,u,t,s,r,q,p
var $async$coT=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&A.b()
x=3
return A.d(p.P("bookings").az(0,"partner_profiles(business_name), payments(id, type, status, amount)").W("proposal_id",d).dj(0,"created_at",!1).l0(1).dv(),$async$coT)
case 3:u=f
if(u==null){v=null
x=1
break}p=J.a3(u)
t=y.g.a(p.h(u,"payments"))
if(t==null)t=C.an
t=J.da(t,new B.coU())
s=A.Y(t,t.$ti.i("x.E"))
if(s.length===0){v=null
x=1
break}r=C.e.gO(s)
p=y.W.a(p.h(u,"partner_profiles"))
q=A.I(p==null?null:J.f(p,"business_name"))
if(q==null)q="Parceiro"
p=J.a3(r)
v=new A.iN([A.a1(p.h(r,"id")),A.a1(p.h(r,"type")),A.dp(p.h(r,"amount")),q])
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$coT,w)},
agG(d){var x=0,w=A.m(y.T),v,u,t,s,r,q,p,o,n
var $async$agG=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:x=3
return A.d(P.ah4(null,d),$async$agG)
case 3:u=$.Q().b
u===$&&A.b()
x=4
return A.d(u.P("bookings").az(0,"status, total_amount, deposit_amount, payments(type, status)").W("proposal_id",d).dj(0,"created_at",!1).l0(1).dv(),$async$agG)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a3(t)
s=A.I(u.h(t,"status"))
if(s==null)s=""
if(C.f.b9(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.g.a(u.h(t,"payments"))
q=new B.coR(r==null?C.an:r)
if(q.$2("final_payment","pending")){v="final_due"
x=1
break}if(q.$2("final_payment","paid")){v="paid"
x=1
break}if(s==="completed"){v="completed"
x=1
break}p=A.aM(u.h(t,"total_amount"))
o=p==null?null:p
if(o==null)o=0
if(o>0){u=A.aM(u.h(t,"deposit_amount"))
if(u==null)u=null
n=(u==null?0:u)>=o}else n=!1
if(n&&q.$2("deposit","paid")){v="paid"
x=1
break}if(q.$2("deposit","paid")||s==="confirmed"){v="deposit_paid"
x=1
break}v="deposit_due"
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$agG,w)},
coU:function coU(){},
coR:function coR(d){this.a=d},
coS:function coS(d,e){this.a=d
this.b=e},
d_s(d){return new B.Ym(d,null)},
Ym:function Ym(d,e){this.d=d
this.a=e},
a7V:function a7V(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bzN:function bzN(d){this.a=d},
bzM:function bzM(d,e){this.a=d
this.b=e},
bzL:function bzL(d,e){this.a=d
this.b=e},
bzP:function bzP(d){this.a=d},
bzQ:function bzQ(){},
bzR:function bzR(d){this.a=d},
bzS:function bzS(d,e,f){this.a=d
this.b=e
this.c=f},
bzU:function bzU(){},
bzT:function bzT(d,e){this.a=d
this.b=e},
bzO:function bzO(d,e,f){this.a=d
this.b=e
this.c=f},
bzV:function bzV(d,e){this.a=d
this.b=e},
bzW:function bzW(d){this.a=d},
abR:function abR(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.a=j},
abS:function abS(){var _=this
_.y=_.x=_.w=!1
_.z=null
_.d=$
_.c=_.a=null},
c6I:function c6I(d,e){this.a=d
this.b=e},
c6G:function c6G(d,e){this.a=d
this.b=e},
c6H:function c6H(d,e){this.a=d
this.b=e},
c6J:function c6J(){},
c6u:function c6u(d){this.a=d},
c6v:function c6v(){},
c6w:function c6w(d,e){this.a=d
this.b=e},
c6C:function c6C(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
c6A:function c6A(d,e,f){this.a=d
this.b=e
this.c=f},
c6B:function c6B(d){this.a=d},
c6x:function c6x(d){this.a=d},
c6y:function c6y(d){this.a=d},
c6z:function c6z(d,e){this.a=d
this.b=e},
c6p:function c6p(d){this.a=d},
c6q:function c6q(d){this.a=d},
c6r:function c6r(d){this.a=d},
c6s:function c6s(d){this.a=d},
c6t:function c6t(d){this.a=d},
c6F:function c6F(d){this.a=d},
c6D:function c6D(d){this.a=d},
c6E:function c6E(d,e,f){this.a=d
this.b=e
this.c=f},
cm6:function cm6(){},
aEX:function aEX(d,e,f){this.c=d
this.d=e
this.a=f},
V6:function V6(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
vw:function vw(d,e,f){this.a=d
this.b=e
this.c=f},
St:function St(d,e,f){this.r=d
this.w=e
this.a=f},
adK:function adK(){this.d=!1
this.c=this.a=null},
cdG:function cdG(d){this.a=d},
cdJ:function cdJ(d,e,f){this.a=d
this.b=e
this.c=f},
cdK:function cdK(d,e,f){this.a=d
this.b=e
this.c=f},
cdH:function cdH(d,e){this.a=d
this.b=e},
cdI:function cdI(d,e){this.a=d
this.b=e}},D,M
J=c[1]
A=c[0]
C=c[2]
N=c[151]
O=c[215]
P=c[176]
G=c[202]
Q=c[251]
R=c[147]
K=c[253]
S=c[109]
E=c[114]
H=c[77]
I=c[249]
L=c[130]
T=c[142]
F=c[69]
U=c[207]
V=c[79]
B=a.updateHolder(c[59],B)
D=c[250]
M=c[252]
B.Bz.prototype={
cP(){A.iB(this.gM4(this),y.H)
return I.JC},
lG(d){return this.bqa(0)},
bqa(d){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$lG=A.i(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:l={}
t.sa1(0,t.ga1(0).i2(!0))
q=$.Q()
p=q.b
p===$&&A.b()
o=t.x
x=2
return A.d(p.P("messages").cf(0).W("conversation_id",o).dj(0,"created_at",!0),$async$lG)
case 2:n=f
l.a=null
v=4
x=7
return A.d(q.b.P("conversations").az(0,"couple_hidden_at").W("id",o).dv(),$async$lG)
case 7:s=f
q=s
r=A.I(q==null?null:J.f(q,"couple_hidden_at"))
if(r!=null)l.a=A.d9(r)
v=1
x=6
break
case 4:v=3
k=u.pop()
x=6
break
case 3:x=1
break
case 6:l=J.d0(n,new B.aSu(t),y.y).de(0,new B.aSv(l))
l=A.Y(l,l.$ti.i("x.E"))
t.sa1(0,new H.jS(!1,l))
v=9
l=$.Q().b
l===$&&A.b()
q=y.z
x=12
return A.d(l.aT("mark_conversation_read",A.U(["p_conversation_id",o],y.N,q),q),$async$lG)
case 12:A.el(t).ai($.cGo())
v=1
x=11
break
case 9:v=8
j=u.pop()
x=11
break
case 8:x=1
break
case 11:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$lG,w)},
lT(d){return this.aEg(d)},
aEg(d){var x=0,w=A.m(y.H),v,u=this,t,s,r,q,p
var $async$lT=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:p=C.f.D(d)
if(p.length===0){x=1
break}t=$.Q()
s=t.b
s===$&&A.b()
s=s.P("messages")
t=t.b.gbC().e.a
r=y.N
x=3
return A.d(s.d1(0,A.U(["conversation_id",u.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cf(0).dH(0),$async$lT)
case 3:q=f
r=u.ga1(0)
t=A.Y(u.ga1(0).b,y.y)
t.push(u.a_i(q))
u.sa1(0,r.DR(t))
case 1:return A.k(v,w)}})
return A.l($async$lT,w)},
mp(d){return this.aEb(d)},
aEb(d){var x=0,w=A.m(y.H),v=this,u,t,s
var $async$mp=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=$.Q()
s=t.b
s===$&&A.b()
s=s.P("messages")
t=t.b.gbC().e.a
x=2
return A.d(s.d1(0,A.U(["conversation_id",v.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cf(0).dH(0),$async$mp)
case 2:u=f
t=v.ga1(0)
s=A.Y(v.ga1(0).b,y.y)
s.push(v.a_i(u))
v.sa1(0,t.DR(s))
return A.k(null,w)}})
return A.l($async$mp,w)},
kb(d,e){return this.blg(0,e)},
blg(d,e){var x=0,w=A.m(y.H),v=this,u,t,s,r,q,p
var $async$kb=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&A.b()
x=2
return A.d(p.aT("delete_message",A.U(["p_message_id",e],y.N,y.z),y.H),$async$kb)
case 2:p=v.ga1(0)
u=A.a([],y.t)
for(t=v.ga1(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa1(0,p.DR(u))
return A.k(null,w)}})
return A.l($async$kb,w)},
a_i(d){var x,w=J.a3(d),v=A.a1(w.h(d,"id")),u=A.a1(w.h(d,"conversation_id")),t=J.n(w.h(d,"sender_role"),"partner"),s=A.I(w.h(d,"body")),r=A.I(w.h(d,"attachment_url")),q=A.I(w.h(d,"attachment_type")),p=A.I(w.h(d,"attachment_name")),o=A.d9(A.a1(w.h(d,"created_at"))),n=A.I(w.h(d,"proposal_id")),m=A.I(w.h(d,"proposal_title")),l=A.aM(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aM(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dT(w.h(d,"is_quote_request_notice"))
return H.cHt(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.Ym.prototype={
S(){return new B.a7V(new A.aE(C.am,$.ac()),A.rI(null,0,null,null))}}
B.a7V.prototype={
m(){var x=this.w
x.T$=$.ac()
x.X$=0
this.x.m()
this.a5()},
a3D(){$.az.ry$.push(new B.bzN(this))},
Rs(){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$Rs=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.a.d
x=3
return A.d(u.gV().a2(0,$.NL().$1(t.f).geD(),y.K),$async$Rs)
case 3:s=e
t=u.c
if(t==null||s==null){x=1
break}T.a1X(t,s,!1)
case 1:return A.k(v,w)}})
return A.l($async$Rs,w)},
RW(d){return this.b7J(d)},
b7J(d){var x=0,w=A.m(y.H),v=this
var $async$RW=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:v.w.sbv(0,d)
x=2
return A.d(v.GM(),$async$RW)
case 2:return A.k(null,w)}})
return A.l($async$RW,w)},
GM(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$GM=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p=s.w
o=p.a.a
if(J.aOL(o).length===0){x=1
break}p.jl(0,C.kc)
r=s.gV()
r.a2(0,$.Bb().$1("c:"+s.a.d.a).gaR(),y.M).fG(0)
u=4
x=7
return A.d(r.a2(0,$.ahx().$1(s.a.d.a).gaR(),y.C).lT(o),$async$GM)
case 7:s.a3D()
u=2
x=6
break
case 4:u=3
n=t.pop()
if(s.c==null){x=1
break}p.sbv(0,o)
s.c.R(y.q).f.a3(D.bUn)
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$GM,w)},
GL(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$GL=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(E.qz(q),$async$GL)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gV().a2(0,$.ahx().$1(s.a.d.a).gaR(),y.C).mp(r),$async$GL)
case 8:s.a3D()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.R(y.q).f.a3(I.a6K)
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$GL,w)},
alu(d,e,f){var x=null
if(!d)return f
return A.dB(x,f,C.a2,!1,x,x,x,x,x,x,x,new B.bzM(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bc)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gV(),f=$.ahx(),e=y.n,d=g.M(f.$1(i.a.d.a),e),a0=g.M($.cXT().$1(i.a.d.a),y.U),a1=a0.gv(a0)
a0=i.a
a0.toString
a0=g.M($.NL().$1(a0.d.f),y.D)
x=a0.gv(a0)
w=g.M($.cw(),y.B).c
v=A.hD(new A.a2(w,new B.bzP(i),A.a8(w).i("a2<1>")))
a0=v==null
u=a0?h:v.r
if(a0)t=h
else{a0=A.a([v.gd5()],y.s)
if(u!=null)a0.push(""+A.aN(u)+" "+C.dq[A.ay(u)-1]+" "+A.aD(u))
t=C.e.a6(a0," \xb7 ")}a0=d.b
s=C.e.cd(a0,new B.bzQ())
r=i.a.d.f
q=g.M($.cYC().$1(r),y.v)
p=g.M($.ahF().$1(r),y.Q)
p=p.gv(p)
o=N.cTd(p==null?h:p.c)
n=o==null?h:o[0].toLowerCase()+C.f.bJ(o,1)
m=E.cEK(g.M($.Bb().$1("c:"+i.a.d.a),y.a))
g.oT(f.$1(i.a.d.a),new B.bzR(i),e)
g=i.a.d
if(q){f=A.a(["Online"],y.s)
if(n!=null)f.push(n)
f=C.e.a6(f," \xb7 ")}else if(x==null)f=h
else{f=A.a([],y.s)
e=x.c
if(e.length!==0)f.push(C.e.gO(e))
e=x.e
if(e.length!==0)f.push(e)
f=C.e.a6(f," \xb7 ")}i.a.toString
e=i.ga2z()
g=A.bA(!1,E.czk(g.d,h,g.b,e,new B.bzS(i,a2,d),f,q),h,C.Y,!1)
if(d.a&&a0.length===0)f=C.bn
else{if(s)f="Proposta recebida"
else f=x==null?h:A.hD(x.c)
i.a.toString
p=t==null?16:82
a0=H.cRO(new B.bzT(i,a2),new B.bzU(),a0,a1)
l=A.a8(a0).i("d_<1>")
a0=A.Y(new A.d_(a0,l),l.i("bb.E"))
f=new V.On(t,f,"Ver perfil",e,A.cX(a0,i.x,new A.Z(16,p,16,16),h,h,!0,C.a_,!1),h)}e=y.p
f=A.a([g,A.a5(A.lp(f,C.ag,!0),1),A.lp(new E.Oo(m,h),C.ag,!0)],e)
i.a.toString
g=A.a([],e)
for(k=0;k<3;++k){j=D.bpJ[k]
C.e.q(g,A.a([new B.aEX(j,new B.bzV(i,j),h),C.ax],e))}f.push(A.lp(A.e9(A.S(g,C.x,C.j,C.q,0,h,h),C.A,h,D.aqm,h,C.bz),C.ag,!0))
f.push(new E.Om(i.w,i.gaP9(),i.gaP7(),"Escreve uma mensagem",new B.bzW(i),h))
return A.cM(h,C.kw,A.D(f,C.x,C.j,C.q,0,C.w),!0,h)}}
B.abR.prototype={
auw(d,e){var x=this.f,w=y.l
if(e){w=d.M($.NK().$1(x),w)
w=w.gv(w)}else{w=d.a2(0,$.NK().$1(x),w)
w=w.gv(w)}return w},
a77(d){return this.auw(d,!1)},
S(){return new B.abS()}}
B.abS.prototype={
ak(){this.aE()
var x=this.a.d.w
if(x!=null)F.agH(x).b7(new B.c6I(this,x),y.P).ep(new B.c6J())},
gaMA(){switch(this.z){case"deposit_paid":var x="Sinal pago"
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
aMz(){var x=null
this.c.R(y.q).f.a3(A.cr(new B.St("Pagar",new B.c6u(this),x),x,x,x,x,C.A,x,D.c97,x,C.X,x,x,x,x,x,x,x,x,x,x))},
tW(d){return this.b4t(d)},
b4t(d){var x=0,w=A.m(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$tW=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:l=u.a.d.w
if(l==null){x=1
break}x=3
return A.d(B.coT(l),$async$tW)
case 3:t=f
s=u.c
if(s==null){x=1
break}if(t==null){A.ap(s).aQ("/bookings",null,y.X)
x=1
break}r=t.a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=A.i4(o,d)
x=4
return A.d(A.ap(s).aQ("/pay",new A.rA(q,n,p,r,o,new B.c6v(),null,!1,null,null,null,null,null),y.X),$async$tW)
case 4:if(u.c==null){x=1
break}x=5
return A.d(B.agG(l),$async$tW)
case 5:m=f
if(u.c!=null)u.p(new B.c6w(u,m))
case 1:return A.k(v,w)}})
return A.l($async$tW,w)},
Jw(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jw=A.i(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:f=s.a.d
e=f.y
if(e==null)e=0
o=f.z
if(o==null)o=0
n=o>0&&o<e
m=n?o:e
r=null
u=4
l=$.Q().b
l===$&&A.b()
l=l.P("payments").az(0,"due_at, bookings!inner(proposal_id)")
k=f.w
k.toString
x=7
return A.d(l.W("bookings.proposal_id",k).W("status","pending").l0(1).dv(),$async$Jw)
case 7:q=a1
k=q
p=k==null?null:J.f(k,"due_at")
if(typeof p=="string")r=A.et(p)
u=2
x=6
break
case 4:u=3
d=t.pop()
x=6
break
case 3:x=2
break
case 6:if(s.c==null){x=1
break}l=r
i=l==null?null:C.i.aV(l.da(new A.an(Date.now(),0,!1)).a,864e8)
h=n||i==null||i<=6
l=s.a
l.toString
l=l.a77(s.gV())
g=(l==null?G.f7:l).mL(e)
l=s.c
l.toString
x=8
return A.d(A.cx(null,new B.c6C(s,f,e,n,o,m,h,g),!0,l,!0,!0,null,y.H),$async$Jw)
case 8:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Jw,w)},
P0(){var x=0,w=A.m(y.H),v,u=this,t,s,r
var $async$P0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:r=u.a.d.w
if(r==null){x=1
break}u.p(new B.c6x(u))
t=u.c
t.toString
x=3
return A.d(F.WH(t,u.a.r,r,new B.c6y(u)),$async$P0)
case 3:s=e
if(u.c==null){x=1
break}if(s)u.gV().ai($.NM())
u.p(new B.c6z(u,s))
case 1:return A.k(v,w)}})
return A.l($async$P0,w)},
qQ(){var x=0,w=A.m(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$qQ=A.i(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:d=r.c
d.toString
i=r.gV()
h=i.a2(0,$.cw(),y.B).b
x=3
return A.d(F.aNd(d,h==null?null:h.a,"este parceiro"),$async$qQ)
case 3:q=a3
if(q==null||r.c==null){x=1
break}r.p(new B.c6p(r))
u=5
d=r.a.d.w
d.toString
x=8
return A.d(F.agv(d,q),$async$qQ)
case 8:if(r.c==null){s=[1]
x=6
break}i.ai($.NM())
i.ai($.lR())
r.p(new B.c6q(r))
u=10
d=$.Q().b
d===$&&A.b()
d=d.P("bookings").az(0,"id")
h=r.a.d.w
h.toString
x=13
return A.d(d.W("proposal_id",h).dv(),$async$qQ)
case 13:p=a3
h=p
o=A.I(h==null?null:J.f(h,"id"))
x=o!=null&&r.c!=null?14:15
break
case 14:d=r.c
d.toString
x=16
return A.d(F.Nr(d,o,r.a.r),$async$qQ)
case 16:case 15:u=5
x=12
break
case 10:u=9
a0=t.pop()
x=12
break
case 9:x=5
break
case 12:if(r.c==null){s=[1]
x=6
break}d=r.a
n=d.d
f=n.y
m=f==null?0:f
e=n.z
l=e==null?0:e
x=l>0&&l<m?17:19
break
case 17:d=d.a77(i)
if(d==null)d=G.f7
x=20
return A.d(r.tW(d.mL(m)),$async$qQ)
case 20:x=18
break
case 19:x=21
return A.d(r.Jw(),$async$qQ)
case 21:case 18:s.push(7)
x=6
break
case 5:u=4
a1=t.pop()
d=A.af(a1)
x=d instanceof A.cT?22:24
break
case 22:k=d
x=k.b==="P0001"?25:26
break
case 25:d=r.a.d.w
d.toString
x=27
return A.d(F.agH(d),$async$qQ)
case 27:j=a3
if(J.n(j,"accepted")){if(r.c==null){s=[1]
x=6
break}i.ai($.NM())
i.ai($.lR())
r.p(new B.c6r(r))
r.aMz()
s=[1]
x=6
break}if(r.c!=null)r.p(new B.c6s(r))
case 26:d=r.c
if(d!=null){d=d.R(y.q).f
if(k.b==="P0001")i="Esta proposta j\xe1 n\xe3o est\xe1 dispon\xedvel \u2014 foi recusada ou expirou."
else if(k.b==="P0007")i="Este parceiro j\xe1 tem outra reserva confirmada nessa data. N\xe3o \xe9 poss\xedvel aceitar esta proposta."
else if(k.b==="P0010")i="Este parceiro j\xe1 n\xe3o est\xe1 dispon\xedvel para o vosso evento."
else i=k.b==="P0008"?"J\xe1 tens uma reserva com este parceiro. S\xf3 podes aceitar outra se essa for cancelada sem nada pago.":"N\xe3o foi poss\xedvel aceitar a proposta. Tenta novamente."
d.a3(A.cr(null,null,null,null,null,C.A,null,A.h(i,null,null,null,null,null,null,null),null,C.X,null,null,null,null,null,null,null,null,null,null))}x=23
break
case 24:d=r.c
if(d!=null)d.R(y.q).f.a3(U.a6E)
case 23:s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.p(new B.c6t(r))
x=s.pop()
break
case 7:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$qQ,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.d,l=o.gV(),k=l.M($.cw(),y.B).b,j=k==null?n:k.r,i=j==null?n:k.z.c+" \xb7 "+A.aN(j)+" "+C.dq[A.ay(j)-1]+" "+A.aD(j)
l=o.a.auw(l,!0)
if(l==null)l=G.f7
x=m.y
w=x==null
v=l.mL(w?0:x)
l=o.a.x
u=i==null
t=u?m.x:i
if(t==null)t="Proposta"
u=u?n:m.x
x=w?n:S.cEH(x,m.z,v)
w=m.z
w=w==null?n:new B.c6F(v).$1(w)
s=v>0?"Valores j\xe1 com a taxa de servi\xe7o":n
r=A.a([],y.j)
if(!o.x&&!o.y)r.push(new B.vw("Recusar",o.w?n:o.gaP8(),!1))
else r.push(new B.vw("Ver detalhe",new B.c6D(d),!1))
q=o.x
if(q&&o.z==="cancelled")r.push(new B.vw("Pedir nova proposta",o.a.e,!0))
else if(q)r.push(new B.vw(o.gaMA(),new B.c6E(o,v,d),!0))
else if(o.y)r.push(D.ahl)
else{q=o.w
p=q?"A aceitar\u2026":"Aceitar"
r.push(new B.vw(p,q?n:o.gaMy(),!0))}return H.cHu(r,w,"PROPOSTA",l,s,x,u,t)}}
B.aEX.prototype={
u(d){var x=null,w=A.W(17),v=A.ck(D.al9,1.5)
return A.aY(A.B(C.O,A.h(this.c,x,x,x,C.dB,x,x,x),C.r,x,x,new A.J(x,x,v,w,x,x,C.y),x,34,x,C.d9,x,x,x),this.d,x)}}
B.V6.prototype={
u(d){var x=this,w=null,v=A.bP(A.B(w,w,C.r,w,w,new A.J(C.AI,w,w,A.W(999),w,w,C.y),w,4,C.tR,w,w,w,40),w,w),u=x.r,t=A.h(u?"Paga para confirmar":"Reservado!",w,w,w,C.bE,w,w,w),s=A.h(u?"Falta pouco para o prazo. Paga para confirmar.":"Guard\xe1mos a tua reserva. Ainda n\xe3o \xe9 preciso pagar.",w,w,w,Q.GL,w,w,w),r=A.W(22),q=y.p,p=A.a([A.h(x.c,w,w,w,C.aC,w,w,w),C.bf,A.h("Total "+A.aT(x.d,!1),w,w,w,C.a5,w,w,w)],q),o=x.e
if(o!=null)C.e.q(p,A.a([D.aow,A.S(A.a([D.axb,A.h(A.aT(o,!1),w,w,w,C.aC,w,w,w)],q),C.x,C.j,C.q,0,w,w)],q))
r=A.B(w,A.D(p,C.I,C.j,C.q,0,C.w),C.r,w,w,new A.J(C.ag,w,w,r,w,w,C.y),w,w,w,C.b8,w,w,w)
p=u?x.w:x.x
o=A.c3(C.z,w,w,C.u,w,w,C.a8,w,w,M.a7x)
v=A.a([v,t,C.aA,s,C.al,r,C.a7,A.aJ(A.by(A.h(u?"Pagar "+A.aT(x.f,!1):"OK",w,w,w,w,w,w,w),p,o),52,w),C.aa,A.cj(D.cbj,w,w,x.x,w,A.hF(w,w,w,w,w,w,w,w,w,C.z,w,C.it,w,w,w,w,w,w,w,M.a7F,w))],q)
if(!u)C.e.q(v,A.a([C.aA,D.ccr],q))
return A.bA(!0,A.B(w,A.D(v,C.J,C.j,C.V,0,C.w),C.r,w,w,w,w,w,w,D.aqp,w,w,w),w,C.Y,!1)}}
B.vw.prototype={}
B.St.prototype={
S(){return new B.adK()},
bs6(){return this.w.$0()}}
B.adK.prototype={
aZB(){var x=this
if(x.d)return
x.p(new B.cdG(x))
x.a.bs6()
x.c.R(y.q).f.a7Q(D.bTg)},
u(d){var x,w,v,u,t=this,s=null
A.am(d)
x=A.cP2(d)
w=A.cBH(d)
v=new B.cdJ(t,w,x)
u=A.hF(s,s,s,s,s,s,s,s,s,s,s,s,v.$0(),s,s,s,s,s,s,s,s)
v=v.$0()
v=u.bjT(new B.cdH(t,w).$0(),v)
u=t.d?s:t.gaZA()
return A.cj(A.h(t.a.r,s,s,s,s,s,s,s),s,s,u,s,v)}}
var z=a.updateTypes(["G<~>()","y(kD)","jS()","kD(@)","~(jS?,jS)","e(kD,y)","V6(M)","~()","Bz(c)"])
B.aSu.prototype={
$1(d){return this.a.a_i(y.b.a(d))},
$S:z+3}
B.aSv.prototype={
$1(d){var x=this.a.a
return x==null||d.r.jb(x)},
$S:z+1}
B.cpI.prototype={
$2(d,e){return d.M($.cyC(),y.R).n(0,e)},
$S:1197}
B.coU.prototype={
$1(d){var x=J.a3(d)
if(J.n(x.h(d,"status"),"pending"))x=J.n(x.h(d,"type"),"deposit")||J.n(x.h(d,"type"),"final_payment")
else x=!1
return x},
$S:73}
B.coR.prototype={
$2(d,e){return J.NN(this.a,new B.coS(d,e))},
$S:416}
B.coS.prototype={
$1(d){var x=J.a3(d)
return J.n(x.h(d,"type"),this.a)&&J.n(x.h(d,"status"),this.b)},
$S:73}
B.bzN.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.ij(0,C.cj,C.kO)},
$S:7}
B.bzM.prototype={
$0(){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(L.Ni(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(L.Nu(s,new B.bzL(t,u.b)),$async$$0)
case 4:case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:2}
B.bzL.prototype={
$0(){var x=this.a
return x.gV().a2(0,$.ahx().$1(x.a.d.a).gaR(),y.C).kb(0,this.b.a)},
$S:2}
B.bzP.prototype={
$1(d){return d.a===this.a.a.d.e},
$S:93}
B.bzQ.prototype={
$1(d){return d.w!=null},
$S:z+1}
B.bzR.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a3D()},
$S:z+4}
B.bzS.prototype={
$0(){var x,w,v,u,t,s=this.a.gV(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("d_<1>"),x=new A.d_(x,w),x=new A.al(x,x.gA(0),w.i("al<bb.E>")),w=w.i("bb.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new E.zI(u,v==null?"":v,null,null))}}return E.WN(this.b,s,!1,K.qT,r)},
$S:0}
B.bzU.prototype={
$1(d){return!d.d},
$S:z+1}
B.bzT.prototype={
$2(d,e){var x,w=this,v=null,u=d.as
if(u!=null){x=d.at
if(x==null)x="file"
x=w.a.alu(e,d,new E.Ol(u,x,d.ax,e,v))
u=x}else if(d.w!=null){u=w.a
x=u.a.d
x=new B.abR(d,u.ga2z(),x.f,x.b,x.a,x.d,v)
u=x}else if(d.Q){u=d.e
u=A.dB(v,new E.ya(u==null?"":u,e,v,v),C.a2,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.a.ga2z(),v,v,v,v,v,v,!1,C.bc)}else{u=w.a
x=d.e
if(e)u=u.alu(!0,d,new E.ya(x==null?"":x,!0,v,v))
else u=A.dB(v,new E.ya(x==null?"":x,!1,v,v),C.a2,!1,v,v,v,v,v,v,v,new B.bzO(u,w.b,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!1,C.bc)}return u},
$S:z+5}
B.bzO.prototype={
$0(){return R.vd(this.b,this.a.gV(),!1,null,null,K.qT,this.c.a)},
$S:0}
B.bzV.prototype={
$0(){return this.a.RW(this.b)},
$S:0}
B.bzW.prototype={
$1(d){var x,w=this.a,v=w.gV()
w=v.a2(0,$.Bb().$1("c:"+w.a.d.a).gaR(),y.M)
x=v.a2(0,$.b6(),y.V).b
v=x==null?null:x.b
return w.a9V(C.f.D(v==null?"":v))},
$S:3}
B.c6I.prototype={
$1(d){return this.aAC(d)},
aAC(d){var x=0,w=A.m(y.P),v,u=this,t,s
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null||d==null){x=1
break}s.p(new B.c6G(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(B.agG(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.p(new B.c6H(s,t))
case 4:case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:1198}
B.c6G.prototype={
$0(){var x=this.a,w=this.b,v=w==="accepted"
x.x=v
x.y=w!=="sent"&&!v},
$S:0}
B.c6H.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.c6J.prototype={
$1(d){},
$S:13}
B.c6u.prototype={
$0(){var x,w=this.a,v=w.a
v.toString
v=v.a77(w.gV())
if(v==null)v=G.f7
x=w.a.d.y
return w.tW(v.mL(x==null?0:x))},
$S:0}
B.c6v.prototype={
$1(d){return A.ar(d,!1).bL()},
$S:162}
B.c6w.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.c6C.prototype={
$1(d){var x,w=this,v=w.b.x
if(C.f.D(v==null?"":v).length===0)v="Reserva"
else{v.toString
v=C.f.D(v)}x=w.d?w.e:null
return new B.V6(v,w.c,x,w.f,w.r,new B.c6A(w.a,d,w.w),new B.c6B(d),null)},
$S:z+6}
B.c6A.prototype={
$0(){A.ar(this.b,!1).bL()
this.a.tW(this.c)},
$S:0}
B.c6B.prototype={
$0(){return A.ar(this.a,!1).bL()},
$S:0}
B.c6x.prototype={
$0(){return this.a.w=!0},
$S:0}
B.c6y.prototype={
$1(d){var x=this.a
return x.gV().a2(0,$.ahx().$1(x.a.w).gaR(),y.C).lT(d)},
$S:179}
B.c6z.prototype={
$0(){var x=this.a
x.w=!1
if(this.b)x.y=!0},
$S:0}
B.c6p.prototype={
$0(){return this.a.w=!0},
$S:0}
B.c6q.prototype={
$0(){return this.a.x=!0},
$S:0}
B.c6r.prototype={
$0(){return this.a.x=!0},
$S:0}
B.c6s.prototype={
$0(){return this.a.y=!0},
$S:0}
B.c6t.prototype={
$0(){return this.a.w=!1},
$S:0}
B.c6F.prototype={
$1(d){return A.i4(d,this.a)},
$S:1}
B.c6D.prototype={
$0(){return A.ap(this.a).aQ("/bookings",null,y.X)},
$S:0}
B.c6E.prototype={
$0(){var x=this.a,w=x.z
return w==null||w==="deposit_due"||w==="final_due"?x.tW(this.b):A.ap(this.c).aQ("/bookings",null,y.X)},
$S:0}
B.cm6.prototype={
$2(d,e){return this.aAS(d,e)},
aAS(d,e){var x=0,w=A.m(y.O),v,u=2,t=[],s,r,q,p,o
var $async$$2=A.i(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
q=$.Q().b
q===$&&A.b()
x=7
return A.d(q.P("conversations").az(0,"partner_last_read_at").W("id",e).dv(),$async$$2)
case 7:s=g
q=s
r=A.I(q==null?null:J.f(q,"partner_last_read_at"))
q=r==null?null:A.d9(r)
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
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$2,w)},
$S:437}
B.cdG.prototype={
$0(){this.a.d=!0},
$S:0}
B.cdJ.prototype={
$0(){var x,w=this,v=w.a
v.a.toString
x=w.b.b
if(x!=null){if(x instanceof A.AS)return x}else{x=w.c
x.gwa()
if(x.gwa() instanceof A.AS)return y.E.a(x.gwa())}return A.nc(new B.cdK(v,w.b,w.c))},
$S:1199}
B.cdK.prototype={
$1(d){var x,w=this
if(d.n(0,C.ar)){w.a.a.toString
x=w.b.c
return x==null?w.c.gL4():x}w.a.a.toString
x=w.b.b
return x==null?w.c.gwa():x},
$S:5}
B.cdH.prototype={
$0(){var x,w,v=this.a
v.a.toString
x=this.b
w=x.as
if(w instanceof A.AS)return w
return A.nc(new B.cdI(v,x))},
$S:1200}
B.cdI.prototype={
$1(d){var x,w=this
if(d.n(0,C.ar)){w.a.a.toString
x=w.b.at
return x==null?C.ao:x}w.a.a.toString
x=w.b.as
return x==null?C.ao:x},
$S:5};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"di7","d_r",8)
var u
w(u=B.Bz.prototype,"gi1","cP",2)
v(u,"gM4","lG",0)
w(u=B.a7V.prototype,"ga2z","Rs",0)
w(u,"gaP9","GM",0)
w(u,"gaP7","GL",0)
w(u=B.abS.prototype,"gaP8","P0",0)
w(u,"gaMy","qQ",0)
w(B.adK.prototype,"gaZA","aZB",7)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Bz,A.eO)
w(A.bq,[B.aSu,B.aSv,B.coU,B.coS,B.bzN,B.bzP,B.bzQ,B.bzU,B.bzW,B.c6I,B.c6J,B.c6v,B.c6C,B.c6y,B.c6F,B.cdK,B.cdI])
w(A.cG,[B.cpI,B.coR,B.bzR,B.bzT,B.cm6])
w(A.dk,[B.Ym,B.abR])
w(A.df,[B.a7V,B.abS])
w(A.bI,[B.bzM,B.bzL,B.bzS,B.bzO,B.bzV,B.c6G,B.c6H,B.c6u,B.c6w,B.c6A,B.c6B,B.c6x,B.c6z,B.c6p,B.c6q,B.c6r,B.c6s,B.c6t,B.c6D,B.c6E,B.cdG,B.cdJ,B.cdH])
w(A.O,[B.aEX,B.V6])
x(B.vw,A.H)
x(B.St,A.F)
x(B.adK,A.a_)})()
A.bj(b.typeUniverse,JSON.parse('{"Bz":{"eO":["jS"]},"Ym":{"F":[],"e":[]},"abR":{"F":[],"e":[]},"V6":{"O":[],"e":[]},"a7V":{"a_":["Ym"]},"abS":{"a_":["abR"]},"aEX":{"O":[],"e":[]},"St":{"F":[],"e":[]},"adK":{"a_":["St"]}}'))
var y=(function rtii(){var x=A.u
return{l:x("aA<fc>"),U:x("aA<an?>"),D:x("aA<eZ?>"),Q:x("aA<zj?>"),V:x("ct"),y:x("kD"),C:x("Bz"),n:x("jS"),K:x("G<eZ?>"),j:x("q<vw>"),t:x("q<kD>"),Y:x("q<zI>"),s:x("q<c>"),p:x("q<e>"),a:x("r<c>"),b:x("a6<c,@>"),P:x("bJ"),R:x("bC<c>"),N:x("c"),M:x("uT"),B:x("e1"),E:x("xc"),q:x("dv"),v:x("y"),z:x("@"),O:x("an?"),g:x("r<@>?"),W:x("a6<@,@>?"),X:x("H?"),h:x("+(c,c,T,c)?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ahl=new B.vw("Indispon\xedvel",null,!0)
D.al9=new A.P(1,0.8392156862745098,0.8156862745098039,0.7607843137254902,C.C)
D.aow=new A.l1(22,null,null,null,C.cX,null)
D.aqm=new A.Z(16,0,16,8)
D.aqp=new A.Z(16,12,16,18)
D.c5a=new A.z("Sinal para confirmar",null,C.a5,null,null,null,null,null,null,null,null)
D.axb=new A.bR(1,C.au,D.c5a,null)
D.bpJ=x(["Posso visitar?","Pedir outra proposta","Obrigado!"],y.s)
D.bTg=new A.uJ(0,"action")
D.c3q=new A.z("N\xe3o foi poss\xedvel enviar a mensagem. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bUn=new A.bS(D.c3q,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.A,null)
D.c97=new A.z("Proposta aceite! Paga para confirmar.",null,null,null,null,null,null,null,null,null,null)
D.cbj=new A.z("Pagar depois",null,null,null,null,null,null,null,null,null,null)
D.c1d=new A.E(!0,C.P,null,null,null,null,13,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccr=new A.z("Avisamos-te 3 dias antes do prazo para pagares!",null,D.c1d,C.a6,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dv9","ahx",()=>I.Jc.$3$1(B.di7(),y.C,y.n,y.N))
x($,"dvT","cYC",()=>O.Je.$2$1(new B.cpI(),y.v,y.N))
x($,"du4","cXT",()=>C.cb.iq(0,new B.cm6(),y.O,y.N))})()};
(a=>{a["f2+JMAeU6AwqRORQtlnGq0i0IuQ="]=a.current})($__dart_deferred_initializers__);