((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,I,P,Q,E,G,H,K,R,F,S,T,B={
d9h(d){return new B.Co(d)},
Co:function Co(d){this.x=d
this.b=null},
aWl:function aWl(d){this.a=d},
aWm:function aWm(d){this.a=d},
cxo:function cxo(){},
cwz(d){var x=0,w=A.n(y.h),v,u,t,s,r,q,p
var $async$cwz=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=$.R().b
p===$&&A.b()
x=3
return A.d(p.P("bookings").aG(0,"partner_profiles(business_name), payments(id, type, status, amount)").V("proposal_id",d).du(0,"created_at",!1).lW(1).dM(),$async$cwz)
case 3:u=f
if(u==null){v=null
x=1
break}p=J.a5(u)
t=y.g.a(p.h(u,"payments"))
if(t==null)t=C.an
t=J.dp(t,new B.cwA())
s=A.W(t,t.$ti.i("y.E"))
if(s.length===0){v=null
x=1
break}r=C.e.gN(s)
p=y.W.a(p.h(u,"partner_profiles"))
q=A.M(p==null?null:J.h(p,"business_name"))
if(q==null)q="Parceiro"
p=J.a5(r)
v=new A.ia([A.a2(p.h(r,"id")),A.a2(p.h(r,"type")),A.dA(p.h(r,"amount")),q])
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cwz,w)},
aiF(d){var x=0,w=A.n(y.T),v,u,t,s,r,q,p,o,n
var $async$aiF=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(A.aj4(null,d),$async$aiF)
case 3:u=$.R().b
u===$&&A.b()
x=4
return A.d(u.P("bookings").aG(0,"status, total_amount, deposit_amount, payments(type, status)").V("proposal_id",d).du(0,"created_at",!1).lW(1).dM(),$async$aiF)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a5(t)
s=A.M(u.h(t,"status"))
if(s==null)s=""
if(C.f.b3(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.g.a(u.h(t,"payments"))
q=new B.cwx(r==null?C.an:r)
if(q.$2("final_payment","pending")){v="final_due"
x=1
break}if(q.$2("final_payment","paid")){v="paid"
x=1
break}if(s==="completed"){v="completed"
x=1
break}p=A.aR(u.h(t,"total_amount"))
o=p==null?null:p
if(o==null)o=0
if(o>0){u=A.aR(u.h(t,"deposit_amount"))
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
return A.m($async$aiF,w)},
cwA:function cwA(){},
cwx:function cwx(d){this.a=d},
cwy:function cwy(d,e){this.a=d
this.b=e},
d9i(d){return new B.a_4(d,null)},
a_4:function a_4(d,e){this.d=d
this.a=e},
a9X:function a9X(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bHa:function bHa(d){this.a=d},
bH9:function bH9(d,e){this.a=d
this.b=e},
bH8:function bH8(d,e){this.a=d
this.b=e},
bHc:function bHc(d){this.a=d},
bHd:function bHd(){},
bHe:function bHe(d){this.a=d},
bHf:function bHf(d,e,f){this.a=d
this.b=e
this.c=f},
bHh:function bHh(){},
bHg:function bHg(d,e){this.a=d
this.b=e},
bHb:function bHb(d,e,f){this.a=d
this.b=e
this.c=f},
bHi:function bHi(d,e){this.a=d
this.b=e},
bHj:function bHj(d){this.a=d},
adR:function adR(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.a=j},
adS:function adS(){var _=this
_.y=_.x=_.w=!1
_.z=null
_.d=$
_.c=_.a=null},
ced:function ced(d,e){this.a=d
this.b=e},
ceb:function ceb(d,e){this.a=d
this.b=e},
cec:function cec(d,e){this.a=d
this.b=e},
cee:function cee(){},
ce_:function ce_(d){this.a=d},
ce0:function ce0(){},
ce1:function ce1(d,e){this.a=d
this.b=e},
ce7:function ce7(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ce5:function ce5(d,e,f){this.a=d
this.b=e
this.c=f},
ce6:function ce6(d){this.a=d},
ce2:function ce2(d){this.a=d},
ce3:function ce3(d){this.a=d},
ce4:function ce4(d,e){this.a=d
this.b=e},
cdV:function cdV(d){this.a=d},
cdW:function cdW(d){this.a=d},
cdX:function cdX(d){this.a=d},
cdY:function cdY(d){this.a=d},
cdZ:function cdZ(d){this.a=d},
cea:function cea(d){this.a=d},
ce8:function ce8(d){this.a=d},
ce9:function ce9(d,e,f){this.a=d
this.b=e
this.c=f},
ctN:function ctN(){},
aIv:function aIv(d,e,f){this.c=d
this.d=e
this.a=f},
WQ:function WQ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
w9:function w9(d,e,f){this.a=d
this.b=e
this.c=f},
U9:function U9(d,e,f){this.r=d
this.w=e
this.a=f},
afK:function afK(){this.d=!1
this.c=this.a=null},
clc:function clc(d){this.a=d},
clf:function clf(d,e,f){this.a=d
this.b=e
this.c=f},
clg:function clg(d,e,f){this.a=d
this.b=e
this.c=f},
cld:function cld(d,e){this.a=d
this.b=e},
cle:function cle(d,e){this.a=d
this.b=e}},D,L
J=c[1]
A=c[0]
C=c[2]
M=c[150]
N=c[200]
O=c[145]
I=c[229]
P=c[227]
Q=c[107]
E=c[113]
G=c[77]
H=c[225]
K=c[127]
R=c[140]
F=c[69]
S=c[192]
T=c[79]
B=a.updateHolder(c[59],B)
D=c[226]
L=c[228]
B.Co.prototype={
cT(){A.iQ(this.gN5(this),y.H)
return H.Kd},
lY(d){return this.buu(0)},
buu(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$lY=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:l={}
t.sa1(0,t.ga1(0).ig(!0))
q=$.R()
p=q.b
p===$&&A.b()
o=t.x
x=2
return A.d(p.P("messages").cl(0).V("conversation_id",o).du(0,"created_at",!0),$async$lY)
case 2:n=f
l.a=null
v=4
x=7
return A.d(q.b.P("conversations").aG(0,"couple_hidden_at").V("id",o).dM(),$async$lY)
case 7:s=f
q=s
r=A.M(q==null?null:J.h(q,"couple_hidden_at"))
if(r!=null)l.a=A.dc(r)
v=1
x=6
break
case 4:v=3
k=u.pop()
x=6
break
case 3:x=1
break
case 6:l=J.d0(n,new B.aWl(t),y.y).dj(0,new B.aWm(l))
l=A.W(l,l.$ti.i("y.E"))
t.sa1(0,new G.k7(!1,l))
v=9
l=$.R().b
l===$&&A.b()
q=y.z
x=12
return A.d(l.b1("mark_conversation_read",A.Q(["p_conversation_id",o],y.N,q),q),$async$lY)
case 12:A.ew(t).aj($.cOI())
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
return A.m($async$lY,w)},
mc(d){return this.aH4(d)},
aH4(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$mc=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=C.f.D(d)
if(p.length===0){x=1
break}t=$.R()
s=t.b
s===$&&A.b()
s=s.P("messages")
t=t.b.gbF().e.a
r=y.N
x=3
return A.d(s.d9(0,A.Q(["conversation_id",u.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cl(0).dO(0),$async$mc)
case 3:q=f
r=u.ga1(0)
t=A.W(u.ga1(0).b,y.y)
t.push(u.a0B(q))
u.sa1(0,r.EC(t))
case 1:return A.l(v,w)}})
return A.m($async$mc,w)},
mO(d){return this.aH_(d)},
aH_(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mO=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.R()
s=t.b
s===$&&A.b()
s=s.P("messages")
t=t.b.gbF().e.a
x=2
return A.d(s.d9(0,A.Q(["conversation_id",v.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cl(0).dO(0),$async$mO)
case 2:u=f
t=v.ga1(0)
s=A.W(v.ga1(0).b,y.y)
s.push(v.a0B(u))
v.sa1(0,t.EC(s))
return A.l(null,w)}})
return A.m($async$mO,w)},
jO(d,e){return this.bpr(0,e)},
bpr(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jO=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.R().b
p===$&&A.b()
x=2
return A.d(p.b1("delete_message",A.Q(["p_message_id",e],y.N,y.z),y.H),$async$jO)
case 2:p=v.ga1(0)
u=A.a([],y.t)
for(t=v.ga1(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa1(0,p.EC(u))
return A.l(null,w)}})
return A.m($async$jO,w)},
a0B(d){var x,w=J.a5(d),v=A.a2(w.h(d,"id")),u=A.a2(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.M(w.h(d,"body")),r=A.M(w.h(d,"attachment_url")),q=A.M(w.h(d,"attachment_type")),p=A.M(w.h(d,"attachment_name")),o=A.dc(A.a2(w.h(d,"created_at"))),n=A.M(w.h(d,"proposal_id")),m=A.M(w.h(d,"proposal_title")),l=A.aR(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aR(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.e0(w.h(d,"is_quote_request_notice"))
return G.cPP(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a_4.prototype={
S(){return new B.a9X(new A.aH(C.am,$.ae()),A.t9(null,0,null,null))}}
B.a9X.prototype={
m(){var x=this.w
x.a0$=$.ae()
x.W$=0
this.x.m()
this.aa()},
a54(){$.az.k4$.push(new B.bHa(this))},
Sv(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Sv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.d
x=3
return A.d(u.gU().a2(0,$.P4().$1(t.f).geP(),y.K),$async$Sv)
case 3:s=e
t=u.c
if(t==null||s==null){x=1
break}R.a3N(t,s,!1)
case 1:return A.l(v,w)}})
return A.m($async$Sv,w)},
T0(d){return this.bbf(d)},
bbf(d){var x=0,w=A.n(y.H),v=this
var $async$T0=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.w.sbA(0,d)
x=2
return A.d(v.HG(),$async$T0)
case 2:return A.l(null,w)}})
return A.m($async$T0,w)},
HG(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$HG=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p=s.w
o=p.a.a
if(J.aSt(o).length===0){x=1
break}p.jF(0,C.ks)
r=s.gU()
r.a2(0,$.BZ().$1("c:"+s.a.d.a).gaU(),y.M).fR(0)
u=4
x=7
return A.d(r.a2(0,$.ajz().$1(s.a.d.a).gaU(),y.C).mc(o),$async$HG)
case 7:s.a54()
u=2
x=6
break
case 4:u=3
n=t.pop()
if(s.c==null){x=1
break}p.sbA(0,o)
s.c.R(y.q).f.a5(D.bVB)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HG,w)},
HF(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$HF=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(E.r0(q),$async$HF)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gU().a2(0,$.ajz().$1(s.a.d.a).gaU(),y.C).mO(r),$async$HF)
case 8:s.a54()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.R(y.q).f.a5(H.a7z)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HF,w)},
anL(d,e,f){var x=null
if(!d)return f
return A.dH(x,f,C.a1,!1,x,x,x,x,x,x,x,new B.bH9(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bd)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gU(),f=$.ajz(),e=y.n,d=g.L(f.$1(i.a.d.a),e),a0=g.L($.d6z().$1(i.a.d.a),y.U),a1=a0.gv(a0)
a0=i.a
a0.toString
a0=g.L($.P4().$1(a0.d.f),y.D)
x=a0.gv(a0)
w=g.L($.cC(),y.B).c
v=A.i2(new A.a4(w,new B.bHc(i),A.a8(w).i("a4<1>")))
a0=v==null
u=a0?h:v.r
if(a0)t=h
else{a0=A.a([v.gde()],y.s)
if(u!=null)a0.push(""+A.aQ(u)+" "+C.cX[A.aA(u)-1]+" "+A.aG(u))
t=C.e.a9(a0," \xb7 ")}a0=d.b
s=C.e.ci(a0,new B.bHd())
r=i.a.d.f
q=g.L($.d7r().$1(r),y.v)
p=g.L($.YT().$1(r),y.Q)
p=p.gv(p)
o=M.cMx(p==null?h:p.c)
n=o==null?h:o[0].toLowerCase()+C.f.bI(o,1)
m=E.cMX(g.L($.BZ().$1("c:"+i.a.d.a),y.a))
g.pq(f.$1(i.a.d.a),new B.bHe(i),e)
g=i.a.d
if(q){f=A.a(["Online"],y.s)
if(n!=null)f.push(n)
f=C.e.a9(f," \xb7 ")}else if(x==null)f=h
else{f=A.a([],y.s)
e=x.c
if(e.length!==0)f.push(C.e.gN(e))
e=x.e
if(e.length!==0)f.push(e)
f=C.e.a9(f," \xb7 ")}i.a.toString
e=i.ga41()
g=A.bE(!1,E.cHf(g.d,h,g.b,e,new B.bHf(i,a2,d),f,q),h,C.Z,!1)
if(d.a&&a0.length===0)f=C.bp
else{if(s)f="Proposta recebida"
else f=x==null?h:A.i2(x.c)
i.a.toString
p=t==null?16:82
a0=G.d_W(new B.bHg(i,a2),new B.bHh(),a0,a1)
l=A.a8(a0).i("cX<1>")
a0=A.W(new A.cX(a0,l),l.i("b3.E"))
f=new T.PO(t,f,"Ver perfil",e,A.d5(a0,i.x,new A.a0(16,p,16,16),h,h,!0,C.a2,!1),h)}e=y.p
f=A.a([g,A.a7(A.lK(f,C.ag,!0),1),A.lK(new E.PP(m,h),C.ag,!0)],e)
i.a.toString
g=A.a([],e)
for(k=0;k<3;++k){j=D.bqQ[k]
C.e.p(g,A.a([new B.aIv(j,new B.bHi(i,j),h),C.ax],e))}f.push(A.lK(A.eg(A.S(g,C.x,C.k,C.p,0,h,h),C.A,h,D.arq,h,C.bv),C.ag,!0))
f.push(new E.PN(i.w,i.gaS1(),i.gaS0(),"Escreve uma mensagem",new B.bHj(i),h))
return A.cP(h,C.kK,A.E(f,C.x,C.k,C.p,0,C.w),!0,h)}}
B.adR.prototype={
ax1(d,e){var x=this.f,w=y.l
if(e){w=d.L($.BV().$1(x),w)
w=w.gv(w)}else{w=d.a2(0,$.BV().$1(x),w)
w=w.gv(w)}return w},
a8O(d){return this.ax1(d,!1)},
S(){return new B.adS()}}
B.adS.prototype={
al(){this.aI()
var x=this.a.d.w
if(x!=null)F.aiG(x).b8(new B.ced(this,x),y.P).eC(new B.cee())},
gaPB(){switch(this.z){case"deposit_paid":var x="Sinal pago"
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
aPA(){var x=null
this.c.R(y.q).f.a5(A.cA(new B.U9("Pagar",new B.ce_(this),x),x,x,x,x,C.A,x,D.cah,x,C.X,x,x,x,x,x,x,x,x,x,x))},
uy(d){return this.b7Z(d)},
b7Z(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$uy=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=u.a.d.w
if(l==null){x=1
break}x=3
return A.d(B.cwz(l),$async$uy)
case 3:t=f
s=u.c
if(s==null){x=1
break}if(t==null){A.ar(s).aW("/bookings",null,y.X)
x=1
break}r=t.a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=A.ic(o,d)
x=4
return A.d(A.ar(s).aW("/pay",new A.qv(q,n,p,r,o,new B.ce0(),null,!1,null,null,null,null,null,null),y.X),$async$uy)
case 4:if(u.c==null){x=1
break}x=5
return A.d(B.aiF(l),$async$uy)
case 5:m=f
if(u.c!=null)u.q(new B.ce1(u,m))
case 1:return A.l(v,w)}})
return A.m($async$uy,w)},
Kt(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Kt=A.j(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:f=s.a.d
e=f.y
if(e==null)e=0
o=f.z
if(o==null)o=0
n=o>0&&o<e
m=n?o:e
r=null
u=4
l=$.R().b
l===$&&A.b()
l=l.P("payments").aG(0,"due_at, bookings!inner(proposal_id)")
k=f.w
k.toString
x=7
return A.d(l.V("bookings.proposal_id",k).V("status","pending").lW(1).dM(),$async$Kt)
case 7:q=a1
k=q
p=k==null?null:J.h(k,"due_at")
if(typeof p=="string")r=A.eK(p)
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
i=l==null?null:C.i.aT(l.cZ(new A.ai(Date.now(),0,!1)).a,864e8)
h=n||i==null||i<=6
l=s.a
l.toString
l=l.a8O(s.gU())
g=(l==null?C.fb:l).lI(e)
l=s.c
l.toString
x=8
return A.d(A.cB(null,new B.ce7(s,f,e,n,o,m,h,g),!0,l,!0,!0,null,y.H),$async$Kt)
case 8:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Kt,w)},
T9(){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$T9=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:r=u.a.d.w
if(r==null){x=1
break}u.q(new B.ce2(u))
t=u.c
t.toString
x=3
return A.d(F.Ys(t,u.a.r,r,new B.ce3(u)),$async$T9)
case 3:s=e
if(u.c==null){x=1
break}if(s)u.gU().aj($.P5())
u.q(new B.ce4(u,s))
case 1:return A.l(v,w)}})
return A.m($async$T9,w)},
rn(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$rn=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:d=r.c
d.toString
i=r.gU()
h=i.a2(0,$.cC(),y.B).b
x=3
return A.d(F.aQP(d,h==null?null:h.a,"este parceiro"),$async$rn)
case 3:q=a3
if(q==null||r.c==null){x=1
break}r.q(new B.cdV(r))
u=5
d=r.a.d.w
d.toString
x=8
return A.d(F.aiv(d,q),$async$rn)
case 8:if(r.c==null){s=[1]
x=6
break}i.aj($.P5())
i.aj($.lH())
r.q(new B.cdW(r))
u=10
d=$.R().b
d===$&&A.b()
d=d.P("bookings").aG(0,"id")
h=r.a.d.w
h.toString
x=13
return A.d(d.V("proposal_id",h).dM(),$async$rn)
case 13:p=a3
h=p
o=A.M(h==null?null:J.h(h,"id"))
x=o!=null&&r.c!=null?14:15
break
case 14:d=r.c
d.toString
x=16
return A.d(F.OK(d,o,r.a.r),$async$rn)
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
case 17:d=d.a8O(i)
if(d==null)d=C.fb
x=20
return A.d(r.uy(d.lI(m)),$async$rn)
case 20:x=18
break
case 19:x=21
return A.d(r.Kt(),$async$rn)
case 21:case 18:s.push(7)
x=6
break
case 5:u=4
a1=t.pop()
d=A.a9(a1)
x=d instanceof A.cW?22:24
break
case 22:k=d
x=k.b==="P0001"?25:26
break
case 25:d=r.a.d.w
d.toString
x=27
return A.d(F.aiG(d),$async$rn)
case 27:j=a3
if(J.o(j,"accepted")){if(r.c==null){s=[1]
x=6
break}i.aj($.P5())
i.aj($.lH())
r.q(new B.cdX(r))
r.aPA()
s=[1]
x=6
break}if(r.c!=null)r.q(new B.cdY(r))
case 26:d=r.c
if(d!=null){d=d.R(y.q).f
if(k.b==="P0001")i="Esta proposta j\xe1 n\xe3o est\xe1 dispon\xedvel \u2014 foi recusada ou expirou."
else if(k.b==="P0007")i="Este parceiro j\xe1 tem outra reserva confirmada nessa data. N\xe3o \xe9 poss\xedvel aceitar esta proposta."
else if(k.b==="P0010")i="Este parceiro j\xe1 n\xe3o est\xe1 dispon\xedvel para o vosso evento."
else i=k.b==="P0008"?"J\xe1 tens uma reserva com este parceiro. S\xf3 podes aceitar outra se essa for cancelada sem nada pago.":"N\xe3o foi poss\xedvel aceitar a proposta. Tenta novamente."
d.a5(A.cA(null,null,null,null,null,C.A,null,A.i(i,null,null,null,null,null,null,null,null),null,C.X,null,null,null,null,null,null,null,null,null,null))}x=23
break
case 24:d=r.c
if(d!=null)d.R(y.q).f.a5(S.a7t)
case 23:s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.q(new B.cdZ(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$rn,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.d,l=o.gU(),k=l.L($.cC(),y.B).b,j=k==null?n:k.r,i=j==null?n:k.z.c+" \xb7 "+A.aQ(j)+" "+C.cX[A.aA(j)-1]+" "+A.aG(j)
l=o.a.ax1(l,!0)
if(l==null)l=C.fb
x=m.y
w=x==null
v=l.lI(w?0:x)
l=o.a.x
u=i==null
t=u?m.x:i
if(t==null)t="Proposta"
u=u?n:m.x
x=w?n:Q.cMU(x,m.z,v)
w=m.z
w=w==null?n:new B.cea(v).$1(w)
s=v>0?"Valores j\xe1 com a taxa de servi\xe7o":n
r=A.a([],y.j)
if(!o.x&&!o.y)r.push(new B.w9("Recusar",o.w?n:o.gbch(),!1))
else r.push(new B.w9("Ver detalhe",new B.ce8(d),!1))
q=o.x
if(q&&o.z==="cancelled")r.push(new B.w9("Pedir nova proposta",o.a.e,!0))
else if(q)r.push(new B.w9(o.gaPB(),new B.ce9(o,v,d),!0))
else if(o.y)r.push(D.ail)
else{q=o.w
p=q?"A aceitar\u2026":"Aceitar"
r.push(new B.w9(p,q?n:o.gaPz(),!0))}return G.cPQ(r,w,"PROPOSTA",l,s,x,u,t)}}
B.aIv.prototype={
u(d){var x=null,w=A.X(17),v=A.cn(D.am9,1.5)
return A.aZ(A.C(C.O,A.i(this.c,x,x,x,x,C.dQ,x,x,x),C.r,x,x,new A.L(x,x,v,w,x,x,C.y),x,34,x,C.dg,x,x,x),this.d,x)}}
B.WQ.prototype={
u(d){var x=this,w=null,v=A.bR(A.C(w,w,C.r,w,w,new A.L(C.B0,w,w,A.X(999),w,w,C.y),w,4,C.u9,w,w,w,40),w,w),u=x.r,t=A.i(u?"Paga para confirmar":"Reservado!",w,w,w,w,C.by,w,w,w),s=A.i(u?"Falta pouco para o prazo. Paga para confirmar.":"Guard\xe1mos a tua reserva. Ainda n\xe3o \xe9 preciso pagar.",w,w,w,w,P.Hh,w,w,w),r=A.X(22),q=y.p,p=A.a([A.i(x.c,w,w,w,w,C.aD,w,w,w),C.bg,A.i("Total "+A.aX(x.d,!1),w,w,w,w,C.a3,w,w,w)],q),o=x.e
if(o!=null)C.e.p(p,A.a([D.apB,A.S(A.a([D.ayg,A.i(A.aX(o,!1),w,w,w,w,C.aD,w,w,w)],q),C.x,C.k,C.p,0,w,w)],q))
r=A.C(w,A.E(p,C.I,C.k,C.p,0,C.w),C.r,w,w,new A.L(C.ag,w,w,r,w,w,C.y),w,w,w,C.b9,w,w,w)
p=u?x.w:x.x
o=A.cc(C.z,w,w,C.u,w,w,C.a9,w,w,L.a8n)
v=A.a([v,t,C.az,s,C.al,r,C.a7,A.aM(A.bB(A.i(u?"Pagar "+A.aX(x.f,!1):"OK",w,w,w,w,w,w,w,w),p,o),52,w),C.ac,A.cm(D.cct,w,w,x.x,w,A.hQ(w,w,w,w,w,w,w,w,w,C.z,w,C.iD,w,w,w,w,w,w,w,L.a8v,w))],q)
if(!u)C.e.p(v,A.a([C.az,D.cdB],q))
return A.bE(!0,A.C(w,A.E(v,C.J,C.k,C.U,0,C.w),C.r,w,w,w,w,w,w,D.arv,w,w,w),w,C.Z,!1)}}
B.w9.prototype={}
B.U9.prototype={
S(){return new B.afK()},
bws(){return this.w.$0()}}
B.afK.prototype={
b1U(){var x=this
if(x.d)return
x.q(new B.clc(x))
x.a.bws()
x.c.R(y.q).f.a9y(D.bUw)},
u(d){var x,w,v,u,t=this,s=null
A.ap(d)
x=A.cY2(d)
w=A.cJO(d)
v=new B.clf(t,w,x)
u=A.hQ(s,s,s,s,s,s,s,s,s,s,s,s,v.$0(),s,s,s,s,s,s,s,s)
v=v.$0()
v=u.bo4(new B.cld(t,w).$0(),v)
u=t.d?s:t.gb1T()
return A.cm(A.i(t.a.r,s,s,s,s,s,s,s,s),s,s,u,s,v)}}
var z=a.updateTypes(["G<~>()","z(kR)","k7()","kR(@)","~(k7?,k7)","e(kR,z)","WQ(N)","~()","Co(c)"])
B.aWl.prototype={
$1(d){return this.a.a0B(y.b.a(d))},
$S:z+3}
B.aWm.prototype={
$1(d){var x=this.a.a
return x==null||d.r.hE(x)},
$S:z+1}
B.cxo.prototype={
$2(d,e){return d.L($.cGs(),y.R).n(0,e)},
$S:1304}
B.cwA.prototype={
$1(d){var x=J.a5(d)
if(J.o(x.h(d,"status"),"pending"))x=J.o(x.h(d,"type"),"deposit")||J.o(x.h(d,"type"),"final_payment")
else x=!1
return x},
$S:77}
B.cwx.prototype={
$2(d,e){return J.P6(this.a,new B.cwy(d,e))},
$S:314}
B.cwy.prototype={
$1(d){var x=J.a5(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:77}
B.bHa.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.iA(0,C.cm,C.l2)},
$S:6}
B.bH9.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(K.OA(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(K.ON(s,new B.bH8(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.bH8.prototype={
$0(){var x=this.a
return x.gU().a2(0,$.ajz().$1(x.a.d.a).gaU(),y.C).jO(0,this.b.a)},
$S:2}
B.bHc.prototype={
$1(d){return d.a===this.a.a.d.e},
$S:91}
B.bHd.prototype={
$1(d){return d.w!=null},
$S:z+1}
B.bHe.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a54()},
$S:z+4}
B.bHf.prototype={
$0(){var x,w,v,u,t,s=this.a.gU(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("cX<1>"),x=new A.cX(x,w),x=new A.an(x,x.gA(0),w.i("an<b3.E>")),w=w.i("b3.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new E.Ar(u,v==null?"":v,null,null))}}return E.Yy(this.b,s,!1,I.r8,r)},
$S:0}
B.bHh.prototype={
$1(d){return!d.d},
$S:z+1}
B.bHg.prototype={
$2(d,e){var x,w=this,v=null,u=d.as
if(u!=null){x=d.at
if(x==null)x="file"
x=w.a.anL(e,d,new E.PM(u,x,d.ax,e,v))
u=x}else if(d.w!=null){u=w.a
x=u.a.d
x=new B.adR(d,u.ga41(),x.f,x.b,x.a,x.d,v)
u=x}else if(d.Q){u=d.e
u=A.dH(v,new E.yT(u==null?"":u,e,v,v),C.a1,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.a.ga41(),v,v,v,v,v,v,!1,C.bd)}else{u=w.a
x=d.e
if(e)u=u.anL(!0,d,new E.yT(x==null?"":x,!0,v,v))
else u=A.dH(v,new E.yT(x==null?"":x,!1,v,v),C.a1,!1,v,v,v,v,v,v,v,new B.bHb(u,w.b,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!1,C.bd)}return u},
$S:z+5}
B.bHb.prototype={
$0(){return O.vN(this.b,this.a.gU(),!1,null,null,I.r8,this.c.a)},
$S:0}
B.bHi.prototype={
$0(){return this.a.T0(this.b)},
$S:0}
B.bHj.prototype={
$1(d){var x,w=this.a,v=w.gU()
w=v.a2(0,$.BZ().$1("c:"+w.a.d.a).gaU(),y.M)
x=v.a2(0,$.bb(),y.V).b
v=x==null?null:x.b
return w.abQ(C.f.D(v==null?"":v))},
$S:3}
B.ced.prototype={
$1(d){return this.aDj(d)},
aDj(d){var x=0,w=A.n(y.P),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null||d==null){x=1
break}s.q(new B.ceb(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(B.aiF(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.q(new B.cec(s,t))
case 4:case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1305}
B.ceb.prototype={
$0(){var x=this.a,w=this.b,v=w==="accepted"
x.x=v
x.y=w!=="sent"&&!v},
$S:0}
B.cec.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cee.prototype={
$1(d){},
$S:13}
B.ce_.prototype={
$0(){var x,w=this.a,v=w.a
v.toString
v=v.a8O(w.gU())
if(v==null)v=C.fb
x=w.a.d.y
return w.uy(v.lI(x==null?0:x))},
$S:0}
B.ce0.prototype={
$1(d){return A.at(d,!1).bP()},
$S:107}
B.ce1.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.ce7.prototype={
$1(d){var x,w=this,v=w.b.x
if(C.f.D(v==null?"":v).length===0)v="Reserva"
else{v.toString
v=C.f.D(v)}x=w.d?w.e:null
return new B.WQ(v,w.c,x,w.f,w.r,new B.ce5(w.a,d,w.w),new B.ce6(d),null)},
$S:z+6}
B.ce5.prototype={
$0(){A.at(this.b,!1).bP()
this.a.uy(this.c)},
$S:0}
B.ce6.prototype={
$0(){return A.at(this.a,!1).bP()},
$S:0}
B.ce2.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ce3.prototype={
$1(d){var x=this.a
return x.gU().a2(0,$.ajz().$1(x.a.w).gaU(),y.C).mc(d)},
$S:198}
B.ce4.prototype={
$0(){var x=this.a
x.w=!1
if(this.b)x.y=!0},
$S:0}
B.cdV.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cdW.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cdX.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cdY.prototype={
$0(){return this.a.y=!0},
$S:0}
B.cdZ.prototype={
$0(){return this.a.w=!1},
$S:0}
B.cea.prototype={
$1(d){return A.ic(d,this.a)},
$S:1}
B.ce8.prototype={
$0(){return A.ar(this.a).aW("/bookings",null,y.X)},
$S:0}
B.ce9.prototype={
$0(){var x=this.a,w=x.z
return w==null||w==="deposit_due"||w==="final_due"?x.uy(this.b):A.ar(this.c).aW("/bookings",null,y.X)},
$S:0}
B.ctN.prototype={
$2(d,e){return this.aDA(d,e)},
aDA(d,e){var x=0,w=A.n(y.O),v,u=2,t=[],s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
q=$.R().b
q===$&&A.b()
x=7
return A.d(q.P("conversations").aG(0,"partner_last_read_at").V("id",e).dM(),$async$$2)
case 7:s=g
q=s
r=A.M(q==null?null:J.h(q,"partner_last_read_at"))
q=r==null?null:A.dc(r)
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
$S:468}
B.clc.prototype={
$0(){this.a.d=!0},
$S:0}
B.clf.prototype={
$0(){var x,w=this,v=w.a
v.a.toString
x=w.b.b
if(x!=null){if(x instanceof A.BF)return x}else{x=w.c
x.gwO()
if(x.gwO() instanceof A.BF)return y.E.a(x.gwO())}return A.nE(new B.clg(v,w.b,w.c))},
$S:1306}
B.clg.prototype={
$1(d){var x,w=this
if(d.n(0,C.at)){w.a.a.toString
x=w.b.c
return x==null?w.c.gM7():x}w.a.a.toString
x=w.b.b
return x==null?w.c.gwO():x},
$S:5}
B.cld.prototype={
$0(){var x,w,v=this.a
v.a.toString
x=this.b
w=x.as
if(w instanceof A.BF)return w
return A.nE(new B.cle(v,x))},
$S:1307}
B.cle.prototype={
$1(d){var x,w=this
if(d.n(0,C.at)){w.a.a.toString
x=w.b.at
return x==null?C.ao:x}w.a.a.toString
x=w.b.as
return x==null?C.ao:x},
$S:5};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dt2","d9h",8)
var u
w(u=B.Co.prototype,"gie","cT",2)
v(u,"gN5","lY",0)
w(u=B.a9X.prototype,"ga41","Sv",0)
w(u,"gaS1","HG",0)
w(u,"gaS0","HF",0)
w(u=B.adS.prototype,"gbch","T9",0)
w(u,"gaPz","rn",0)
w(B.afK.prototype,"gb1T","b1U",7)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Co,A.f_)
w(A.bx,[B.aWl,B.aWm,B.cwA,B.cwy,B.bHa,B.bHc,B.bHd,B.bHh,B.bHj,B.ced,B.cee,B.ce0,B.ce7,B.ce3,B.cea,B.clg,B.cle])
w(A.cS,[B.cxo,B.cwx,B.bHe,B.bHg,B.ctN])
w(A.dw,[B.a_4,B.adR])
w(A.dq,[B.a9X,B.adS])
w(A.bS,[B.bH9,B.bH8,B.bHf,B.bHb,B.bHi,B.ceb,B.cec,B.ce_,B.ce1,B.ce5,B.ce6,B.ce2,B.ce4,B.cdV,B.cdW,B.cdX,B.cdY,B.cdZ,B.ce8,B.ce9,B.clc,B.clf,B.cld])
w(A.O,[B.aIv,B.WQ])
x(B.w9,A.K)
x(B.U9,A.I)
x(B.afK,A.a1)})()
A.bu(b.typeUniverse,JSON.parse('{"Co":{"f_":["k7"]},"a_4":{"I":[],"e":[],"f":[]},"adR":{"I":[],"e":[],"f":[]},"WQ":{"O":[],"e":[],"f":[]},"a9X":{"a1":["a_4"]},"adS":{"a1":["adR"]},"aIv":{"O":[],"e":[],"f":[]},"U9":{"I":[],"e":[],"f":[]},"afK":{"a1":["U9"]}}'))
var y=(function rtii(){var x=A.w
return{l:x("aB<eZ>"),U:x("aB<ai?>"),D:x("aB<ef?>"),Q:x("aB<xe?>"),V:x("cw"),y:x("kR"),C:x("Co"),n:x("k7"),K:x("G<ef?>"),j:x("r<w9>"),t:x("r<kR>"),Y:x("r<Ar>"),s:x("r<c>"),p:x("r<e>"),a:x("t<c>"),b:x("a3<c,@>"),P:x("bz"),R:x("bF<c>"),N:x("c"),M:x("vr"),B:x("e7"),E:x("xU"),q:x("dJ"),v:x("z"),z:x("@"),O:x("ai?"),g:x("t<@>?"),W:x("a3<@,@>?"),X:x("K?"),h:x("+(c,c,U,c)?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ail=new B.w9("Indispon\xedvel",null,!0)
D.am9=new A.P(1,0.8392156862745098,0.8156862745098039,0.7607843137254902,C.C)
D.apB=new A.lj(22,null,null,null,C.da,null)
D.arq=new A.a0(16,0,16,8)
D.arv=new A.a0(16,12,16,18)
D.c6l=new A.A("Sinal para confirmar",null,C.a3,null,null,null,null,null,null,null,null)
D.ayg=new A.bT(1,C.av,D.c6l,null)
D.bqQ=x(["Posso visitar?","Pedir outra proposta","Obrigado!"],y.s)
D.bUw=new A.vg(0,"action")
D.c4B=new A.A("N\xe3o foi poss\xedvel enviar a mensagem. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bVB=new A.bX(D.c4B,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.A,null)
D.cah=new A.A("Proposta aceite! Paga para confirmar.",null,null,null,null,null,null,null,null,null,null)
D.cct=new A.A("Pagar depois",null,null,null,null,null,null,null,null,null,null)
D.c2p=new A.H(!0,C.P,null,null,null,null,13,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cdB=new A.A("Avisamos-te 3 dias antes do prazo para pagares!",null,D.c2p,C.a6,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dHb","ajz",()=>H.JM.$3$1(B.dt2(),y.C,y.n,y.N))
x($,"dHX","d7r",()=>N.JO.$2$1(new B.cxo(),y.v,y.N))
x($,"dFY","d6z",()=>C.ch.jv(0,new B.ctN(),y.O,y.N))})()};
(a=>{a["cNmfoISX/bAKxyOFgsXDVGybhik="]=a.current})($__dart_deferred_initializers__);