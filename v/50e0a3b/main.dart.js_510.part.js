((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,O,P,Q,K,H,R,E,F,I,L,S,T,G,U,V,B={
d60(d){return new B.Cl(d)},
Cl:function Cl(d){this.x=d
this.b=null},
aVV:function aVV(d){this.a=d},
aVW:function aVW(d){this.a=d},
cvf:function cvf(){},
cuo(d){var x=0,w=A.n(y.h),v,u,t,s,r,q,p
var $async$cuo=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=$.S().b
p===$&&A.b()
x=3
return A.d(p.T("bookings").aI(0,"partner_profiles(business_name), payments(id, type, status, amount)").X("proposal_id",d).dw(0,"created_at",!1).lV(1).dX(),$async$cuo)
case 3:u=f
if(u==null){v=null
x=1
break}p=J.a5(u)
t=y.g.a(p.h(u,"payments"))
if(t==null)t=C.ao
t=J.dB(t,new B.cup())
s=A.W(t,t.$ti.i("y.E"))
if(s.length===0){v=null
x=1
break}r=C.e.gN(s)
p=y.W.a(p.h(u,"partner_profiles"))
q=A.L(p==null?null:J.h(p,"business_name"))
if(q==null)q="Parceiro"
p=J.a5(r)
v=new A.j3([A.a2(p.h(r,"id")),A.a2(p.h(r,"type")),A.dT(p.h(r,"amount")),q])
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cuo,w)},
aiu(d){var x=0,w=A.n(y.T),v,u,t,s,r,q,p,o,n
var $async$aiu=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(S.aiV(null,d),$async$aiu)
case 3:u=$.S().b
u===$&&A.b()
x=4
return A.d(u.T("bookings").aI(0,"status, total_amount, deposit_amount, payments(type, status)").X("proposal_id",d).dw(0,"created_at",!1).lV(1).dX(),$async$aiu)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a5(t)
s=A.L(u.h(t,"status"))
if(s==null)s=""
if(C.f.b5(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.g.a(u.h(t,"payments"))
q=new B.cum(r==null?C.ao:r)
if(q.$2("final_payment","pending")){v="final_due"
x=1
break}if(q.$2("final_payment","paid")){v="paid"
x=1
break}if(s==="completed"){v="completed"
x=1
break}p=A.aX(u.h(t,"total_amount"))
o=p==null?null:p
if(o==null)o=0
if(o>0){u=A.aX(u.h(t,"deposit_amount"))
if(u==null)u=null
n=(u==null?0:u)>=o}else n=!1
if(n&&q.$2("deposit","paid")){v="paid"
x=1
break}if(q.$2("deposit","paid")||s==="confirmed"){v="deposit_paid"
x=1
break}v="deposit_due"
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aiu,w)},
cup:function cup(){},
cum:function cum(d){this.a=d},
cun:function cun(d,e){this.a=d
this.b=e},
d61(d){return new B.ZT(d,null)},
ZT:function ZT(d,e){this.d=d
this.a=e},
a9N:function a9N(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bGn:function bGn(d){this.a=d},
bGm:function bGm(d,e){this.a=d
this.b=e},
bGl:function bGl(d,e){this.a=d
this.b=e},
bGp:function bGp(d){this.a=d},
bGq:function bGq(){},
bGr:function bGr(d){this.a=d},
bGs:function bGs(d,e,f){this.a=d
this.b=e
this.c=f},
bGu:function bGu(){},
bGt:function bGt(d,e){this.a=d
this.b=e},
bGo:function bGo(d,e,f){this.a=d
this.b=e
this.c=f},
bGv:function bGv(d,e){this.a=d
this.b=e},
bGw:function bGw(d){this.a=d},
adH:function adH(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.a=h},
adI:function adI(){var _=this
_.y=_.x=_.w=!1
_.z=null
_.d=$
_.c=_.a=null},
cdn:function cdn(d,e){this.a=d
this.b=e},
cdl:function cdl(d,e){this.a=d
this.b=e},
cdm:function cdm(d,e){this.a=d
this.b=e},
cdo:function cdo(){},
cdc:function cdc(d){this.a=d},
cdd:function cdd(){},
cde:function cde(d,e){this.a=d
this.b=e},
cdh:function cdh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cdf:function cdf(d,e,f){this.a=d
this.b=e
this.c=f},
cdg:function cdg(d){this.a=d},
cd7:function cd7(d){this.a=d},
cd8:function cd8(d){this.a=d},
cd9:function cd9(d){this.a=d},
cda:function cda(d){this.a=d},
cdb:function cdb(d){this.a=d},
cdk:function cdk(d){this.a=d},
cdi:function cdi(d){this.a=d},
cdj:function cdj(d,e,f){this.a=d
this.b=e
this.c=f},
crL:function crL(){},
aI7:function aI7(d,e,f){this.c=d
this.d=e
this.a=f},
WG:function WG(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
yO:function yO(d,e,f){this.a=d
this.b=e
this.c=f},
U_:function U_(d,e,f){this.r=d
this.w=e
this.a=f},
afB:function afB(){this.d=!1
this.c=this.a=null},
cjf:function cjf(d){this.a=d},
cji:function cji(d,e,f){this.a=d
this.b=e
this.c=f},
cjj:function cjj(d,e,f){this.a=d
this.b=e
this.c=f},
cjg:function cjg(d,e){this.a=d
this.b=e},
cjh:function cjh(d,e){this.a=d
this.b=e}},D,M
J=c[1]
A=c[0]
C=c[2]
N=c[156]
O=c[245]
P=c[242]
Q=c[151]
K=c[244]
H=c[201]
R=c[110]
E=c[115]
F=c[77]
I=c[240]
L=c[133]
S=c[169]
T=c[146]
G=c[69]
U=c[206]
V=c[79]
B=a.updateHolder(c[59],B)
D=c[241]
M=c[243]
B.Cl.prototype={
cX(){A.iR(this.gMT(this),y.H)
return I.JY},
lX(d){return this.btV(0)},
btV(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$lX=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:l={}
t.sa1(0,t.ga1(0).ik(!0))
q=$.S()
p=q.b
p===$&&A.b()
o=t.x
x=2
return A.d(p.T("messages").cq(0).X("conversation_id",o).dw(0,"created_at",!0),$async$lX)
case 2:n=f
l.a=null
v=4
x=7
return A.d(q.b.T("conversations").aI(0,"couple_hidden_at").X("id",o).dX(),$async$lX)
case 7:s=f
q=s
r=A.L(q==null?null:J.h(q,"couple_hidden_at"))
if(r!=null)l.a=A.dd(r)
v=1
x=6
break
case 4:v=3
k=u.pop()
x=6
break
case 3:x=1
break
case 6:l=J.d1(n,new B.aVV(t),y.y).dj(0,new B.aVW(l))
l=A.W(l,l.$ti.i("y.E"))
t.sa1(0,new F.k3(!1,l))
v=9
l=$.S().b
l===$&&A.b()
q=y.z
x=12
return A.d(l.b4("mark_conversation_read",A.Q(["p_conversation_id",o],y.N,q),q),$async$lX)
case 12:A.er(t).al($.cMc())
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
return A.m($async$lX,w)},
mO(d){return this.aGL(d)},
aGL(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$mO=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=C.f.D(d)
if(p.length===0){x=1
break}t=$.S()
s=t.b
s===$&&A.b()
s=s.T("messages")
t=t.b.gbH().e.a
r=y.N
x=3
return A.d(s.dg(0,A.Q(["conversation_id",u.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cq(0).e_(0),$async$mO)
case 3:q=f
r=u.ga1(0)
t=A.W(u.ga1(0).b,y.y)
t.push(u.a0n(q))
u.sa1(0,r.Ew(t))
case 1:return A.l(v,w)}})
return A.m($async$mO,w)},
mN(d){return this.aGG(d)},
aGG(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mN=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.S()
s=t.b
s===$&&A.b()
s=s.T("messages")
t=t.b.gbH().e.a
x=2
return A.d(s.dg(0,A.Q(["conversation_id",v.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cq(0).e_(0),$async$mN)
case 2:u=f
t=v.ga1(0)
s=A.W(v.ga1(0).b,y.y)
s.push(v.a0n(u))
v.sa1(0,t.Ew(s))
return A.l(null,w)}})
return A.m($async$mN,w)},
jS(d,e){return this.boL(0,e)},
boL(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jS=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.S().b
p===$&&A.b()
x=2
return A.d(p.b4("delete_message",A.Q(["p_message_id",e],y.N,y.z),y.H),$async$jS)
case 2:p=v.ga1(0)
u=A.a([],y.t)
for(t=v.ga1(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.K)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa1(0,p.Ew(u))
return A.l(null,w)}})
return A.m($async$jS,w)},
a0n(d){var x,w=J.a5(d),v=A.a2(w.h(d,"id")),u=A.a2(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.L(w.h(d,"body")),r=A.L(w.h(d,"attachment_url")),q=A.L(w.h(d,"attachment_type")),p=A.L(w.h(d,"attachment_name")),o=A.dd(A.a2(w.h(d,"created_at"))),n=A.L(w.h(d,"proposal_id")),m=A.L(w.h(d,"proposal_title")),l=A.aX(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aX(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.e2(w.h(d,"is_quote_request_notice"))
return F.cNk(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.ZT.prototype={
R(){return new B.a9N(new A.aH(C.al,$.ag()),A.t8(null,0,null,null))}}
B.a9N.prototype={
m(){var x=this.w
x.a0$=$.ag()
x.V$=0
this.x.m()
this.a8()},
a4M(){$.ay.k4$.push(new B.bGn(this))},
Sg(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Sg=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.d
x=3
return A.d(u.gU().a2(0,$.OY().$1(t.f).gf1(),y.K),$async$Sg)
case 3:s=e
t=u.c
if(t==null||s==null){x=1
break}T.a3B(t,s,!1)
case 1:return A.l(v,w)}})
return A.m($async$Sg,w)},
SL(d){return this.baR(d)},
baR(d){var x=0,w=A.n(y.H),v=this
var $async$SL=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.w.sbF(0,d)
x=2
return A.d(v.HB(),$async$SL)
case 2:return A.l(null,w)}})
return A.m($async$SL,w)},
HB(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$HB=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p=s.w
o=p.a.a
if(J.aS4(o).length===0){x=1
break}p.jJ(0,C.km)
r=s.gU()
r.a2(0,$.BT().$1("c:"+s.a.d.a).gaW(),y.M).fS(0)
u=4
x=7
return A.d(r.a2(0,$.aRJ().$1(s.a.d.a).gaW(),y.C).mO(o),$async$HB)
case 7:s.a4M()
u=2
x=6
break
case 4:u=3
n=t.pop()
if(s.c==null){x=1
break}p.sbF(0,o)
s.c.S(y.q).f.a7(D.bUA)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HB,w)},
HA(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$HA=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(E.qZ(q),$async$HA)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gU().a2(0,$.aRJ().$1(s.a.d.a).gaW(),y.C).mN(r),$async$HA)
case 8:s.a4M()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.S(y.q).f.a7(I.a7n)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HA,w)},
ans(d,e,f){var x=null
if(!d)return f
return A.dO(x,f,C.a1,!1,x,x,x,x,x,x,x,new B.bGm(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bg)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gU(),f=$.aRJ(),e=y.n,d=g.M(f.$1(i.a.d.a),e),a0=g.M($.d3f().$1(i.a.d.a),y.U),a1=a0.gv(a0)
a0=i.a
a0.toString
a0=g.M($.OY().$1(a0.d.f),y.D)
x=a0.gv(a0)
w=g.M($.cB(),y.B).c
v=A.i0(new A.a4(w,new B.bGp(i),A.a6(w).i("a4<1>")))
a0=v==null
u=a0?h:v.r
if(a0)t=h
else{a0=A.a([v.gdA()],y.s)
if(u!=null)a0.push(""+A.aQ(u)+" "+C.e4[A.aC(u)-1]+" "+A.aG(u))
t=C.e.ah(a0," \xb7 ")}a0=d.b
s=C.e.ci(a0,new B.bGq())
r=i.a.d.f
q=g.M($.d47().$1(r),y.v)
p=g.M($.ajv().$1(r),y.Q)
p=p.gv(p)
o=N.cZJ(p==null?h:p.c)
n=o==null?h:o[0].toLowerCase()+C.f.bM(o,1)
m=E.cKr(g.M($.BT().$1("c:"+i.a.d.a),y.a))
g.pp(f.$1(i.a.d.a),new B.bGr(i),e)
g=i.a.d
if(q){f=A.a(["Online"],y.s)
if(n!=null)f.push(n)
f=C.e.ah(f," \xb7 ")}else if(x==null)f=h
else{f=A.a([],y.s)
e=x.c
if(e.length!==0)f.push(C.e.gN(e))
e=x.e
if(e.length!==0)f.push(e)
f=C.e.ah(f," \xb7 ")}i.a.toString
e=i.ga3K()
g=A.bB(!1,E.cF_(g.d,h,g.b,e,new B.bGs(i,a2,d),f,q),h,C.X,!1)
if(d.a&&a0.length===0)f=C.bq
else{if(s)f="Proposta recebida"
else f=x==null?h:A.i0(x.c)
i.a.toString
p=t==null?16:82
a0=F.cYk(new B.bGt(i,a2),new B.bGu(),a0,a1)
l=A.a6(a0).i("cV<1>")
a0=A.W(new A.cV(a0,l),l.i("b2.E"))
f=new V.PG(t,f,"Ver perfil",e,A.d3(a0,i.x,new A.a0(16,p,16,16),h,h,!0,C.Z,!1),h)}e=y.p
f=A.a([g,A.ae(A.mj(f,C.am,!0),1),A.mj(new E.PH(m,h),C.am,!0)],e)
i.a.toString
g=A.a([],e)
for(k=0;k<3;++k){j=D.bq9[k]
C.e.p(g,A.a([new B.aI7(j,new B.bGv(i,j),h),C.aC],e))}f.push(A.mj(A.ev(A.a_(g,C.x,C.l,C.q,0,h,h),C.z,h,D.ar0,h,C.bH),C.am,!0))
f.push(new E.PF(i.w,i.gaRI(),i.gaRH(),"Escreve uma mensagem",new B.bGw(i),h))
return A.cP(h,C.kE,A.I(f,C.x,C.l,C.q,0,C.w),!0,h)}}
B.adH.prototype={
awL(d,e){var x=this.f,w=y.l
if(e){w=d.M($.OX().$1(x),w)
w=w.gv(w)}else{w=d.a2(0,$.OX().$1(x),w)
w=w.gv(w)}return w},
awK(d){return this.awL(d,!1)},
R(){return new B.adI()}}
B.adI.prototype={
ak(){this.aH()
var x=this.a.d.w
if(x!=null)G.aiv(x).b9(new B.cdn(this,x),y.P).eB(new B.cdo())},
gaPi(){switch(this.z){case"deposit_paid":var x="Sinal pago"
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
aPh(){var x=null
this.c.S(y.q).f.a7(A.cz(new B.U_("Pagar",new B.cdc(this),x),x,x,x,x,C.z,x,D.c90,x,C.Y,x,x,x,x,x,x,x,x,x,x))},
wu(d){return this.b7y(d)},
b7y(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$wu=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=u.a.d.w
if(l==null){x=1
break}x=3
return A.d(B.cuo(l),$async$wu)
case 3:t=f
s=u.c
if(s==null){x=1
break}if(t==null){A.ar(s).aV("/bookings",null,y.X)
x=1
break}r=t.a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=A.ij(o,d)
x=4
return A.d(A.ar(s).aV("/pay",new A.rZ(q,n,p,r,o,new B.cdd(),null,!1,null,null,null,null,null),y.X),$async$wu)
case 4:if(u.c==null){x=1
break}x=5
return A.d(B.aiu(l),$async$wu)
case 5:m=f
if(u.c!=null)u.q(new B.cde(u,m))
case 1:return A.l(v,w)}})
return A.m($async$wu,w)},
Kk(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Kk=A.j(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:f=s.a.d
e=f.y
if(e==null)e=0
o=f.z
if(o==null)o=0
n=o>0&&o<e
m=n?o:e
r=null
u=4
l=$.S().b
l===$&&A.b()
l=l.T("bookings").aI(0,"choice_deadline")
k=f.w
k.toString
x=7
return A.d(l.X("proposal_id",k).dX(),$async$Kk)
case 7:q=a1
k=q
p=k==null?null:J.h(k,"choice_deadline")
if(typeof p=="string")r=A.eO(p)
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
i=l==null?null:C.i.aX(l.dd(new A.ai(Date.now(),0,!1)).a,864e8)
h=i==null||i<=3
l=s.a
l.toString
l=l.awK(s.gU())
g=(l==null?H.fC:l).o0(e)
l=s.c
l.toString
x=8
return A.d(A.yo(C.ag,null,new B.cdh(s,f,e,n,o,m,h,g),l,null,!0,!0,null,y.H),$async$Kk)
case 8:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Kk,w)},
yX(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j
var $async$yX=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=r.c
k.toString
n=r.gU()
m=n.a2(0,$.cB(),y.B).b
x=3
return A.d(G.aQu(k,m==null?null:m.a,"este parceiro"),$async$yX)
case 3:q=e
if(q==null||r.c==null){x=1
break}r.q(new B.cd7(r))
u=5
k=r.a.d.w
k.toString
x=8
return A.d(G.aik(k,q),$async$yX)
case 8:if(r.c==null){s=[1]
x=6
break}n.al($.ajw())
n.al($.mc())
r.q(new B.cd8(r))
x=9
return A.d(r.Kk(),$async$yX)
case 9:s.push(7)
x=6
break
case 5:u=4
j=t.pop()
k=A.a9(j)
x=k instanceof A.cY?10:12
break
case 10:p=k
x=p.b==="P0001"?13:14
break
case 13:k=r.a.d.w
k.toString
x=15
return A.d(G.aiv(k),$async$yX)
case 15:o=e
if(J.o(o,"accepted")){if(r.c==null){s=[1]
x=6
break}n.al($.ajw())
n.al($.mc())
r.q(new B.cd9(r))
r.aPh()
s=[1]
x=6
break}if(r.c!=null)r.q(new B.cda(r))
case 14:k=r.c
if(k!=null){k=k.S(y.q).f
if(p.b==="P0001")n="Esta proposta j\xe1 n\xe3o est\xe1 dispon\xedvel \u2014 foi recusada ou expirou."
else if(p.b==="P0007")n="Este parceiro j\xe1 tem outra reserva confirmada nessa data. N\xe3o \xe9 poss\xedvel aceitar esta proposta."
else if(p.b==="P0010")n="Este parceiro j\xe1 n\xe3o est\xe1 dispon\xedvel para o vosso evento."
else n=p.b==="P0008"?"J\xe1 tens uma reserva com este parceiro. S\xf3 podes aceitar outra se essa for cancelada sem nada pago.":"N\xe3o foi poss\xedvel aceitar a proposta. Tenta novamente."
k.a7(A.cz(null,null,null,null,null,C.z,null,A.i(n,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}x=11
break
case 12:k=r.c
if(k!=null)k.S(y.q).f.a7(U.a7h)
case 11:s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.q(new B.cdb(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$yX,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.d,l=o.gU(),k=l.M($.cB(),y.B).b,j=k==null?n:k.r,i=j==null?n:k.z.c+" \xb7 "+A.aQ(j)+" "+C.e4[A.aC(j)-1]+" "+A.aG(j)
l=o.a.awL(l,!0)
if(l==null)l=H.fC
x=m.y
w=x==null
v=l.o0(w?0:x)
l=o.a.r
u=i==null
t=u?m.x:i
if(t==null)t="Proposta"
u=u?n:m.x
x=w?n:R.cKo(x,m.z,v)
w=m.z
w=w==null?n:new B.cdk(v).$1(w)
s=v>0?"Valores j\xe1 com a taxa de servi\xe7o":n
r=A.a([new B.yO("Ver detalhe",new B.cdi(d),!1)],y.j)
q=o.x
if(q&&o.z==="cancelled")r.push(new B.yO("Pedir nova proposta",o.a.e,!0))
else if(q)r.push(new B.yO(o.gaPi(),new B.cdj(o,v,d),!0))
else if(o.y)r.push(D.ai1)
else{q=o.w
p=q?"A aceitar\u2026":"Aceitar"
r.push(new B.yO(p,q?n:o.gaPg(),!0))}return F.cNl(r,w,"PROPOSTA",l,s,x,u,t)}}
B.aI7.prototype={
u(d){var x=null,w=A.Z(17),v=A.cE(D.alQ,1.5)
return A.ba(A.G(C.P,A.i(this.c,x,x,x,C.dN,x,x,x),C.t,x,x,new A.N(x,x,v,w,x,x,C.y),x,34,x,C.dt,x,x,x),this.d,x)}}
B.WG.prototype={
u(d){var x=this,w=null,v=A.Z(28),u=A.cE(D.aiw,1),t=A.bO(A.G(w,w,C.t,w,w,new A.N(C.pc,w,w,A.Z(999),w,w,C.y),w,4,C.u6,w,w,w,40),w,w),s=x.r,r=A.i(s?"Paga para confirmar":"Reservado!",w,w,w,C.bR,w,w,w),q=A.i(s?"Falta pouco para o prazo. Paga para confirmar.":"Guard\xe1mos a tua reserva. Ainda n\xe3o \xe9 preciso pagar.",w,w,w,P.yl,w,w,w),p=A.Z(22),o=y.p,n=A.a([A.i(x.c,w,w,w,C.aT,w,w,w),C.bh,A.i("Total "+A.bh(x.d,!1),w,w,w,C.ah,w,w,w)],o),m=x.e
if(m!=null)C.e.p(n,A.a([D.apg,A.a_(A.a([D.axO,A.i(A.bh(m,!1),w,w,w,C.aT,w,w,w)],o),C.x,C.l,C.q,0,w,w)],o))
p=A.G(w,A.I(n,C.L,C.l,C.q,0,C.w),C.t,w,w,new A.N(C.u,w,w,p,C.aE,w,C.y),w,w,w,C.be,w,w,w)
n=s?x.w:x.x
m=A.ch(C.A,w,w,C.u,w,w,C.aa,w,w,M.a8b)
t=A.a([t,r,C.aF,q,C.ak,p,C.ad,A.aS(A.bE(A.i(s?"Pagar "+A.bh(x.f,!1):"OK",w,w,w,w,w,w,w),n,m),52,w),C.ab,A.cl(D.cb6,w,w,x.x,w,A.hN(w,w,w,w,w,w,w,w,w,C.A,w,C.it,w,w,w,w,w,w,w,M.a8j,w))],o)
if(!s)C.e.p(t,A.a([C.aF,D.ccd],o))
return A.bB(!0,A.G(w,A.I(t,C.I,C.l,C.W,0,C.w),C.t,w,w,new A.N(C.am,w,u,v,w,w,C.y),w,w,C.ds,D.ar4,w,w,w),w,C.X,!1)}}
B.yO.prototype={}
B.U_.prototype={
R(){return new B.afB()},
bvU(){return this.w.$0()}}
B.afB.prototype={
b1y(){var x=this
if(x.d)return
x.q(new B.cjf(x))
x.a.bvU()
x.c.S(y.q).f.a97(D.bTw)},
u(d){var x,w,v,u,t=this,s=null
A.al(d)
x=A.cVt(d)
w=A.cHt(d)
v=new B.cji(t,w,x)
u=A.hN(s,s,s,s,s,s,s,s,s,s,s,s,v.$0(),s,s,s,s,s,s,s,s)
v=v.$0()
v=u.bnp(new B.cjg(t,w).$0(),v)
u=t.d?s:t.gb1x()
return A.cl(A.i(t.a.r,s,s,s,s,s,s,s),s,s,u,s,v)}}
var z=a.updateTypes(["E<~>()","z(kJ)","k3()","kJ(@)","~(k3?,k3)","e(kJ,z)","WG(M)","~()","Cl(c)"])
B.aVV.prototype={
$1(d){return this.a.a0n(y.b.a(d))},
$S:z+3}
B.aVW.prototype={
$1(d){var x=this.a.a
return x==null||d.r.i0(x)},
$S:z+1}
B.cvf.prototype={
$2(d,e){return d.M($.cEc(),y.R).n(0,e)},
$S:1272}
B.cup.prototype={
$1(d){var x=J.a5(d)
if(J.o(x.h(d,"status"),"pending"))x=J.o(x.h(d,"type"),"deposit")||J.o(x.h(d,"type"),"final_payment")
else x=!1
return x},
$S:71}
B.cum.prototype={
$2(d,e){return J.OZ(this.a,new B.cun(d,e))},
$S:305}
B.cun.prototype={
$1(d){var x=J.a5(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:71}
B.bGn.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.iD(0,C.cr,C.j_)},
$S:6}
B.bGm.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(L.Ow(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(L.OF(s,new B.bGl(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.bGl.prototype={
$0(){var x=this.a
return x.gU().a2(0,$.aRJ().$1(x.a.d.a).gaW(),y.C).jS(0,this.b.a)},
$S:2}
B.bGp.prototype={
$1(d){return d.a===this.a.a.d.e},
$S:92}
B.bGq.prototype={
$1(d){return d.w!=null},
$S:z+1}
B.bGr.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a4M()},
$S:z+4}
B.bGs.prototype={
$0(){var x,w,v,u,t,s=this.a.gU(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a6(x).i("cV<1>"),x=new A.cV(x,w),x=new A.ap(x,x.gA(0),w.i("ap<b2.E>")),w=w.i("b2.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new E.Ao(u,v==null?"":v,null,null))}}return E.Yo(this.b,s,!1,K.r5,r)},
$S:0}
B.bGu.prototype={
$1(d){return!d.d},
$S:z+1}
B.bGt.prototype={
$2(d,e){var x,w=this,v=null,u=d.as
if(u!=null){x=d.at
if(x==null)x="file"
x=w.a.ans(e,d,new E.PE(u,x,d.ax,e,v))
u=x}else if(d.w!=null){u=w.a
x=u.a.d
x=new B.adH(d,u.ga3K(),x.f,x.d,v)
u=x}else if(d.Q){u=d.e
u=A.dO(v,new E.yN(u==null?"":u,e,v,v),C.a1,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.a.ga3K(),v,v,v,v,v,v,!1,C.bg)}else{u=w.a
x=d.e
if(e)u=u.ans(!0,d,new E.yN(x==null?"":x,!0,v,v))
else u=A.dO(v,new E.yN(x==null?"":x,!1,v,v),C.a1,!1,v,v,v,v,v,v,v,new B.bGo(u,w.b,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!1,C.bg)}return u},
$S:z+5}
B.bGo.prototype={
$0(){return Q.vI(this.b,this.a.gU(),!1,null,null,K.r5,this.c.a)},
$S:0}
B.bGv.prototype={
$0(){return this.a.SL(this.b)},
$S:0}
B.bGw.prototype={
$1(d){var x,w=this.a,v=w.gU()
w=v.a2(0,$.BT().$1("c:"+w.a.d.a).gaW(),y.M)
x=v.a2(0,$.bc(),y.V).b
v=x==null?null:x.b
return w.abq(C.f.D(v==null?"":v))},
$S:3}
B.cdn.prototype={
$1(d){return this.aD0(d)},
aD0(d){var x=0,w=A.n(y.P),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null||d==null){x=1
break}s.q(new B.cdl(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(B.aiu(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.q(new B.cdm(s,t))
case 4:case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1273}
B.cdl.prototype={
$0(){var x=this.a,w=this.b,v=w==="accepted"
x.x=v
x.y=w!=="sent"&&!v},
$S:0}
B.cdm.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cdo.prototype={
$1(d){},
$S:14}
B.cdc.prototype={
$0(){var x,w=this.a,v=w.a
v.toString
v=v.awK(w.gU())
if(v==null)v=H.fC
x=w.a.d.y
return w.wu(v.o0(x==null?0:x))},
$S:0}
B.cdd.prototype={
$1(d){return A.av(d,!1).bS()},
$S:164}
B.cde.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cdh.prototype={
$1(d){var x,w=this,v=w.b.x
if(C.f.D(v==null?"":v).length===0)v="Reserva"
else{v.toString
v=C.f.D(v)}x=w.d?w.e:null
return new B.WG(v,w.c,x,w.f,w.r,new B.cdf(w.a,d,w.w),new B.cdg(d),null)},
$S:z+6}
B.cdf.prototype={
$0(){A.av(this.b,!1).bS()
this.a.wu(this.c)},
$S:0}
B.cdg.prototype={
$0(){return A.av(this.a,!1).bS()},
$S:0}
B.cd7.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cd8.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cd9.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cda.prototype={
$0(){return this.a.y=!0},
$S:0}
B.cdb.prototype={
$0(){return this.a.w=!1},
$S:0}
B.cdk.prototype={
$1(d){return A.ij(d,this.a)},
$S:1}
B.cdi.prototype={
$0(){return A.ar(this.a).aV("/bookings",null,y.X)},
$S:0}
B.cdj.prototype={
$0(){var x=this.a,w=x.z
return w==null||w==="deposit_due"||w==="final_due"?x.wu(this.b):A.ar(this.c).aV("/bookings",null,y.X)},
$S:0}
B.crL.prototype={
$2(d,e){return this.aDf(d,e)},
aDf(d,e){var x=0,w=A.n(y.O),v,u=2,t=[],s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
q=$.S().b
q===$&&A.b()
x=7
return A.d(q.T("conversations").aI(0,"partner_last_read_at").X("id",e).dX(),$async$$2)
case 7:s=g
q=s
r=A.L(q==null?null:J.h(q,"partner_last_read_at"))
q=r==null?null:A.dd(r)
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
$S:410}
B.cjf.prototype={
$0(){this.a.d=!0},
$S:0}
B.cji.prototype={
$0(){var x,w=this,v=w.a
v.a.toString
x=w.b.b
if(x!=null){if(x instanceof A.Bz)return x}else{x=w.c
x.gwO()
if(x.gwO() instanceof A.Bz)return y.E.a(x.gwO())}return A.nG(new B.cjj(v,w.b,w.c))},
$S:1274}
B.cjj.prototype={
$1(d){var x,w=this
if(d.n(0,C.ar)){w.a.a.toString
x=w.b.c
return x==null?w.c.gLT():x}w.a.a.toString
x=w.b.b
return x==null?w.c.gwO():x},
$S:4}
B.cjg.prototype={
$0(){var x,w,v=this.a
v.a.toString
x=this.b
w=x.as
if(w instanceof A.Bz)return w
return A.nG(new B.cjh(v,x))},
$S:1275}
B.cjh.prototype={
$1(d){var x,w=this
if(d.n(0,C.ar)){w.a.a.toString
x=w.b.at
return x==null?C.ag:x}w.a.a.toString
x=w.b.as
return x==null?C.ag:x},
$S:4};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dpN","d60",8)
var u
w(u=B.Cl.prototype,"gij","cX",2)
v(u,"gMT","lX",0)
w(u=B.a9N.prototype,"ga3K","Sg",0)
w(u,"gaRI","HB",0)
w(u,"gaRH","HA",0)
w(B.adI.prototype,"gaPg","yX",0)
w(B.afB.prototype,"gb1x","b1y",7)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Cl,A.eU)
w(A.bw,[B.aVV,B.aVW,B.cup,B.cun,B.bGn,B.bGp,B.bGq,B.bGu,B.bGw,B.cdn,B.cdo,B.cdd,B.cdh,B.cdk,B.cjj,B.cjh])
w(A.cM,[B.cvf,B.cum,B.bGr,B.bGt,B.crL])
w(A.dv,[B.ZT,B.adH])
w(A.dk,[B.a9N,B.adI])
w(A.bL,[B.bGm,B.bGl,B.bGs,B.bGo,B.bGv,B.cdl,B.cdm,B.cdc,B.cde,B.cdf,B.cdg,B.cd7,B.cd8,B.cd9,B.cda,B.cdb,B.cdi,B.cdj,B.cjf,B.cji,B.cjg])
w(A.O,[B.aI7,B.WG])
x(B.yO,A.J)
x(B.U_,A.H)
x(B.afB,A.a1)})()
A.bt(b.typeUniverse,JSON.parse('{"Cl":{"eU":["k3"]},"ZT":{"H":[],"e":[],"f":[]},"adH":{"H":[],"e":[],"f":[]},"WG":{"O":[],"e":[],"f":[]},"a9N":{"a1":["ZT"]},"adI":{"a1":["adH"]},"aI7":{"O":[],"e":[],"f":[]},"U_":{"H":[],"e":[],"f":[]},"afB":{"a1":["U_"]}}'))
var y=(function rtii(){var x=A.v
return{l:x("aF<fk>"),U:x("aF<ai?>"),D:x("aF<f2?>"),Q:x("aF<A_?>"),V:x("cv"),y:x("kJ"),C:x("Cl"),n:x("k3"),K:x("E<f2?>"),j:x("r<yO>"),t:x("r<kJ>"),Y:x("r<Ao>"),s:x("r<c>"),p:x("r<e>"),a:x("t<c>"),b:x("a3<c,@>"),P:x("bz"),R:x("bG<c>"),N:x("c"),M:x("vk"),B:x("e8"),E:x("xP"),q:x("dF"),v:x("z"),z:x("@"),O:x("ai?"),g:x("t<@>?"),W:x("a3<@,@>?"),X:x("J?"),h:x("+(c,c,R,c)?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ai1=new B.yO("Indispon\xedvel",null,!0)
D.aiw=new A.P(1,0.8941176470588236,0.8745098039215686,0.8313725490196079,C.C)
D.alQ=new A.P(1,0.8392156862745098,0.8156862745098039,0.7607843137254902,C.C)
D.apg=new A.lg(22,null,null,null,C.dn,null)
D.ar0=new A.a0(16,0,16,8)
D.ar4=new A.a0(16,12,16,18)
D.c5d=new A.C("Sinal para confirmar",null,C.ah,null,null,null,null,null,null,null,null)
D.axO=new A.bZ(1,C.au,D.c5d,null)
D.bq9=x(["Posso visitar?","Pedir outra proposta","Obrigado!"],y.s)
D.bTw=new A.v8(0,"action")
D.c3u=new A.C("N\xe3o foi poss\xedvel enviar a mensagem. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bUA=new A.bY(D.c3u,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.c90=new A.C("Proposta aceite! Paga para confirmar.",null,null,null,null,null,null,null,null,null,null)
D.cb6=new A.C("Pagar depois",null,null,null,null,null,null,null,null,null,null)
D.c1j=new A.F(!0,C.R,null,null,null,null,13,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccd=new A.C("Avisamos-te 3 dias antes do prazo para pagares!",null,D.c1j,C.a3,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dEB","aRJ",()=>I.Jx.$3$1(B.dpN(),y.C,y.n,y.N))
x($,"dFm","d47",()=>O.Jz.$2$1(new B.cvf(),y.v,y.N))
x($,"dDn","d3f",()=>C.cm.jy(0,new B.crL(),y.O,y.N))})()};
(a=>{a["bDk6odwc298TuXfgP9Vypuu0TkE="]=a.current})($__dart_deferred_initializers__);