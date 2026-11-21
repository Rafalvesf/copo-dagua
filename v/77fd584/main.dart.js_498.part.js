((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,O,P,Q,K,H,R,E,F,I,L,S,T,G,U,V,B={
d6E(d){return new B.Ch(d)},
Ch:function Ch(d){this.x=d
this.b=null},
aVV:function aVV(d){this.a=d},
aVW:function aVW(d){this.a=d},
cvU:function cvU(){},
cv4(d){var x=0,w=A.n(y.h),v,u,t,s,r,q,p
var $async$cv4=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=$.R().b
p===$&&A.b()
x=3
return A.d(p.S("bookings").aG(0,"partner_profiles(business_name), payments(id, type, status, amount)").X("proposal_id",d).du(0,"created_at",!1).lU(1).e0(),$async$cv4)
case 3:u=f
if(u==null){v=null
x=1
break}p=J.a5(u)
t=y.g.a(p.h(u,"payments"))
if(t==null)t=C.an
t=J.dr(t,new B.cv5())
s=A.U(t,t.$ti.i("y.E"))
if(s.length===0){v=null
x=1
break}r=C.e.gN(s)
p=y.W.a(p.h(u,"partner_profiles"))
q=A.L(p==null?null:J.h(p,"business_name"))
if(q==null)q="Parceiro"
p=J.a5(r)
v=new A.j_([A.a2(p.h(r,"id")),A.a2(p.h(r,"type")),A.dR(p.h(r,"amount")),q])
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cv4,w)},
air(d){var x=0,w=A.n(y.T),v,u,t,s,r,q,p,o,n
var $async$air=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(S.aiR(null,d),$async$air)
case 3:u=$.R().b
u===$&&A.b()
x=4
return A.d(u.S("bookings").aG(0,"status, total_amount, deposit_amount, payments(type, status)").X("proposal_id",d).du(0,"created_at",!1).lU(1).e0(),$async$air)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a5(t)
s=A.L(u.h(t,"status"))
if(s==null)s=""
if(C.f.b3(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.g.a(u.h(t,"payments"))
q=new B.cv2(r==null?C.an:r)
if(q.$2("final_payment","pending")){v="final_due"
x=1
break}if(q.$2("final_payment","paid")){v="paid"
x=1
break}if(s==="completed"){v="completed"
x=1
break}p=A.aV(u.h(t,"total_amount"))
o=p==null?null:p
if(o==null)o=0
if(o>0){u=A.aV(u.h(t,"deposit_amount"))
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
return A.m($async$air,w)},
cv5:function cv5(){},
cv2:function cv2(d){this.a=d},
cv3:function cv3(d,e){this.a=d
this.b=e},
d6F(d){return new B.ZV(d,null)},
ZV:function ZV(d,e){this.d=d
this.a=e},
a9K:function a9K(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bGI:function bGI(d){this.a=d},
bGH:function bGH(d,e){this.a=d
this.b=e},
bGG:function bGG(d,e){this.a=d
this.b=e},
bGK:function bGK(d){this.a=d},
bGL:function bGL(){},
bGM:function bGM(d){this.a=d},
bGN:function bGN(d,e,f){this.a=d
this.b=e
this.c=f},
bGP:function bGP(){},
bGO:function bGO(d,e){this.a=d
this.b=e},
bGJ:function bGJ(d,e,f){this.a=d
this.b=e
this.c=f},
bGQ:function bGQ(d,e){this.a=d
this.b=e},
bGR:function bGR(d){this.a=d},
adD:function adD(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.a=h},
adE:function adE(){var _=this
_.y=_.x=_.w=!1
_.z=null
_.d=$
_.c=_.a=null},
cdF:function cdF(d,e){this.a=d
this.b=e},
cdD:function cdD(d,e){this.a=d
this.b=e},
cdE:function cdE(d,e){this.a=d
this.b=e},
cdG:function cdG(){},
cdu:function cdu(d){this.a=d},
cdv:function cdv(){},
cdw:function cdw(d,e){this.a=d
this.b=e},
cdz:function cdz(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cdx:function cdx(d,e,f){this.a=d
this.b=e
this.c=f},
cdy:function cdy(d){this.a=d},
cdp:function cdp(d){this.a=d},
cdq:function cdq(d){this.a=d},
cdr:function cdr(d){this.a=d},
cds:function cds(d){this.a=d},
cdt:function cdt(d){this.a=d},
cdC:function cdC(d){this.a=d},
cdA:function cdA(d){this.a=d},
cdB:function cdB(d,e,f){this.a=d
this.b=e
this.c=f},
csq:function csq(){},
aI6:function aI6(d,e,f){this.c=d
this.d=e
this.a=f},
WJ:function WJ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
yP:function yP(d,e,f){this.a=d
this.b=e
this.c=f},
U5:function U5(d,e,f){this.r=d
this.w=e
this.a=f},
afx:function afx(){this.d=!1
this.c=this.a=null},
cjR:function cjR(d){this.a=d},
cjU:function cjU(d,e,f){this.a=d
this.b=e
this.c=f},
cjV:function cjV(d,e,f){this.a=d
this.b=e
this.c=f},
cjS:function cjS(d,e){this.a=d
this.b=e},
cjT:function cjT(d,e){this.a=d
this.b=e}},D,M
J=c[1]
A=c[0]
C=c[2]
N=c[152]
O=c[241]
P=c[238]
Q=c[148]
K=c[240]
H=c[198]
R=c[109]
E=c[114]
F=c[77]
I=c[236]
L=c[131]
S=c[165]
T=c[143]
G=c[69]
U=c[203]
V=c[79]
B=a.updateHolder(c[59],B)
D=c[237]
M=c[239]
B.Ch.prototype={
cT(){A.iO(this.gMZ(this),y.H)
return I.K0},
lW(d){return this.btJ(0)},
btJ(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$lW=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:l={}
t.sa2(0,t.ga2(0).ic(!0))
q=$.R()
p=q.b
p===$&&A.b()
o=t.x
x=2
return A.d(p.S("messages").cl(0).X("conversation_id",o).du(0,"created_at",!0),$async$lW)
case 2:n=f
l.a=null
v=4
x=7
return A.d(q.b.S("conversations").aG(0,"couple_hidden_at").X("id",o).e0(),$async$lW)
case 7:s=f
q=s
r=A.L(q==null?null:J.h(q,"couple_hidden_at"))
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
case 6:l=J.d0(n,new B.aVV(t),y.y).dj(0,new B.aVW(l))
l=A.U(l,l.$ti.i("y.E"))
t.sa2(0,new F.k1(!1,l))
v=9
l=$.R().b
l===$&&A.b()
q=y.z
x=12
return A.d(l.b2("mark_conversation_read",A.Q(["p_conversation_id",o],y.N,q),q),$async$lW)
case 12:A.es(t).al($.cMS())
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
return A.m($async$lW,w)},
mL(d){return this.aGH(d)},
aGH(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$mL=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=C.f.D(d)
if(p.length===0){x=1
break}t=$.R()
s=t.b
s===$&&A.b()
s=s.S("messages")
t=t.b.gbG().e.a
r=y.N
x=3
return A.d(s.dg(0,A.Q(["conversation_id",u.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cl(0).dT(0),$async$mL)
case 3:q=f
r=u.ga2(0)
t=A.U(u.ga2(0).b,y.y)
t.push(u.a0r(q))
u.sa2(0,r.EA(t))
case 1:return A.l(v,w)}})
return A.m($async$mL,w)},
mK(d){return this.aGC(d)},
aGC(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mK=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.R()
s=t.b
s===$&&A.b()
s=s.S("messages")
t=t.b.gbG().e.a
x=2
return A.d(s.dg(0,A.Q(["conversation_id",v.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cl(0).dT(0),$async$mK)
case 2:u=f
t=v.ga2(0)
s=A.U(v.ga2(0).b,y.y)
s.push(v.a0r(u))
v.sa2(0,t.EA(s))
return A.l(null,w)}})
return A.m($async$mK,w)},
jM(d,e){return this.boH(0,e)},
boH(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jM=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.R().b
p===$&&A.b()
x=2
return A.d(p.b2("delete_message",A.Q(["p_message_id",e],y.N,y.z),y.H),$async$jM)
case 2:p=v.ga2(0)
u=A.a([],y.t)
for(t=v.ga2(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.K)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa2(0,p.EA(u))
return A.l(null,w)}})
return A.m($async$jM,w)},
a0r(d){var x,w=J.a5(d),v=A.a2(w.h(d,"id")),u=A.a2(w.h(d,"conversation_id")),t=J.p(w.h(d,"sender_role"),"partner"),s=A.L(w.h(d,"body")),r=A.L(w.h(d,"attachment_url")),q=A.L(w.h(d,"attachment_type")),p=A.L(w.h(d,"attachment_name")),o=A.dc(A.a2(w.h(d,"created_at"))),n=A.L(w.h(d,"proposal_id")),m=A.L(w.h(d,"proposal_title")),l=A.aV(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aV(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.e2(w.h(d,"is_quote_request_notice"))
return F.cNZ(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.ZV.prototype={
P(){return new B.a9K(new A.aG(C.al,$.ad()),A.t7(null,0,null,null))}}
B.a9K.prototype={
m(){var x=this.w
x.a0$=$.ad()
x.V$=0
this.x.m()
this.a8()},
a4P(){$.ay.k4$.push(new B.bGI(this))},
Sn(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Sn=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.d
x=3
return A.d(u.gU().a1(0,$.P_().$1(t.f).gf_(),y.K),$async$Sn)
case 3:s=e
t=u.c
if(t==null||s==null){x=1
break}T.a3B(t,s,!1)
case 1:return A.l(v,w)}})
return A.m($async$Sn,w)},
ST(d){return this.baJ(d)},
baJ(d){var x=0,w=A.n(y.H),v=this
var $async$ST=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.w.sbz(0,d)
x=2
return A.d(v.HD(),$async$ST)
case 2:return A.l(null,w)}})
return A.m($async$ST,w)},
HD(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$HD=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p=s.w
o=p.a.a
if(J.aS3(o).length===0){x=1
break}p.jD(0,C.km)
r=s.gU()
r.a1(0,$.BS().$1("c:"+s.a.d.a).gaW(),y.M).fQ(0)
u=4
x=7
return A.d(r.a1(0,$.aRI().$1(s.a.d.a).gaW(),y.C).mL(o),$async$HD)
case 7:s.a4P()
u=2
x=6
break
case 4:u=3
n=t.pop()
if(s.c==null){x=1
break}p.sbz(0,o)
s.c.R(y.q).f.a7(D.bV4)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HD,w)},
HC(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$HC=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(E.qW(q),$async$HC)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gU().a1(0,$.aRI().$1(s.a.d.a).gaW(),y.C).mK(r),$async$HC)
case 8:s.a4P()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.R(y.q).f.a7(I.a7l)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HC,w)},
ans(d,e,f){var x=null
if(!d)return f
return A.dH(x,f,C.a2,!1,x,x,x,x,x,x,x,new B.bGH(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bd)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gU(),f=$.aRI(),e=y.n,d=g.L(f.$1(i.a.d.a),e),a0=g.L($.d3V().$1(i.a.d.a),y.U),a1=a0.gv(a0)
a0=i.a
a0.toString
a0=g.L($.P_().$1(a0.d.f),y.D)
x=a0.gv(a0)
w=g.L($.cC(),y.B).c
v=A.i_(new A.a4(w,new B.bGK(i),A.a6(w).i("a4<1>")))
a0=v==null
u=a0?h:v.r
if(a0)t=h
else{a0=A.a([v.gd3()],y.s)
if(u!=null)a0.push(""+A.aR(u)+" "+C.dM[A.aB(u)-1]+" "+A.aF(u))
t=C.e.aa(a0," \xb7 ")}a0=d.b
s=C.e.cg(a0,new B.bGL())
r=i.a.d.f
q=g.L($.d4N().$1(r),y.v)
p=g.L($.YK().$1(r),y.Q)
p=p.gv(p)
o=N.cKP(p==null?h:p.c)
n=o==null?h:o[0].toLowerCase()+C.f.bJ(o,1)
m=E.cL6(g.L($.BS().$1("c:"+i.a.d.a),y.a))
g.pl(f.$1(i.a.d.a),new B.bGM(i),e)
g=i.a.d
if(q){f=A.a(["Online"],y.s)
if(n!=null)f.push(n)
f=C.e.aa(f," \xb7 ")}else if(x==null)f=h
else{f=A.a([],y.s)
e=x.c
if(e.length!==0)f.push(C.e.gN(e))
e=x.e
if(e.length!==0)f.push(e)
f=C.e.aa(f," \xb7 ")}i.a.toString
e=i.ga3O()
g=A.bA(!1,E.cFD(g.d,h,g.b,e,new B.bGN(i,a2,d),f,q),h,C.Z,!1)
if(d.a&&a0.length===0)f=C.bo
else{if(s)f="Proposta recebida"
else f=x==null?h:A.i_(x.c)
i.a.toString
p=t==null?16:82
a0=F.cYZ(new B.bGO(i,a2),new B.bGP(),a0,a1)
l=A.a6(a0).i("cW<1>")
a0=A.U(new A.cW(a0,l),l.i("b2.E"))
f=new V.PK(t,f,"Ver perfil",e,A.d2(a0,i.x,new A.a0(16,p,16,16),h,h,!0,C.a0,!1),h)}e=y.p
f=A.a([g,A.a9(A.lG(f,C.af,!0),1),A.lG(new E.PL(m,h),C.af,!0)],e)
i.a.toString
g=A.a([],e)
for(k=0;k<3;++k){j=D.bqx[k]
C.e.p(g,A.a([new B.aI6(j,new B.bGQ(i,j),h),C.ay],e))}f.push(A.lG(A.ek(A.Y(g,C.x,C.l,C.q,0,h,h),C.z,h,D.ara,h,C.bu),C.af,!0))
f.push(new E.PJ(i.w,i.gaRC(),i.gaRB(),"Escreve uma mensagem",new B.bGR(i),h))
return A.cP(h,C.kH,A.G(f,C.x,C.l,C.q,0,C.w),!0,h)}}
B.adD.prototype={
awI(d,e){var x=this.f,w=y.l
if(e){w=d.L($.OZ().$1(x),w)
w=w.gv(w)}else{w=d.a1(0,$.OZ().$1(x),w)
w=w.gv(w)}return w},
awH(d){return this.awI(d,!1)},
P(){return new B.adE()}}
B.adE.prototype={
aj(){this.aH()
var x=this.a.d.w
if(x!=null)G.ais(x).b8(new B.cdF(this,x),y.P).eA(new B.cdG())},
gaPc(){switch(this.z){case"deposit_paid":var x="Sinal pago"
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
aPb(){var x=null
this.c.R(y.q).f.a7(A.cB(new B.U5("Pagar",new B.cdu(this),x),x,x,x,x,C.z,x,D.c9B,x,C.Y,x,x,x,x,x,x,x,x,x,x))},
wt(d){return this.b7t(d)},
b7t(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$wt=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=u.a.d.w
if(l==null){x=1
break}x=3
return A.d(B.cv4(l),$async$wt)
case 3:t=f
s=u.c
if(s==null){x=1
break}if(t==null){A.ar(s).aU("/bookings",null,y.X)
x=1
break}r=t.a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=A.ii(o,d)
x=4
return A.d(A.ar(s).aU("/pay",new A.rZ(q,n,p,r,o,new B.cdv(),null,!1,null,null,null,null,null),y.X),$async$wt)
case 4:if(u.c==null){x=1
break}x=5
return A.d(B.air(l),$async$wt)
case 5:m=f
if(u.c!=null)u.q(new B.cdw(u,m))
case 1:return A.l(v,w)}})
return A.m($async$wt,w)},
Ko(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Ko=A.j(function(a0,a1){if(a0===1){t.push(a1)
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
l=l.S("bookings").aG(0,"choice_deadline")
k=f.w
k.toString
x=7
return A.d(l.X("proposal_id",k).e0(),$async$Ko)
case 7:q=a1
k=q
p=k==null?null:J.h(k,"choice_deadline")
if(typeof p=="string")r=A.eN(p)
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
i=l==null?null:C.i.aX(l.dd(new A.ah(Date.now(),0,!1)).a,864e8)
h=i==null||i<=3
l=s.a
l.toString
l=l.awH(s.gU())
g=(l==null?H.fz:l).nW(e)
l=s.c
l.toString
x=8
return A.d(A.bG(null,new B.cdz(s,f,e,n,o,m,h,g),l,!0,!0,null,y.H),$async$Ko)
case 8:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ko,w)},
yS(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j
var $async$yS=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=r.c
k.toString
n=r.gU()
m=n.a1(0,$.cC(),y.B).b
x=3
return A.d(G.aQq(k,m==null?null:m.a,"este parceiro"),$async$yS)
case 3:q=e
if(q==null||r.c==null){x=1
break}r.q(new B.cdp(r))
u=5
k=r.a.d.w
k.toString
x=8
return A.d(G.aih(k,q),$async$yS)
case 8:if(r.c==null){s=[1]
x=6
break}n.al($.ajr())
n.al($.mc())
r.q(new B.cdq(r))
x=9
return A.d(r.Ko(),$async$yS)
case 9:s.push(7)
x=6
break
case 5:u=4
j=t.pop()
k=A.a7(j)
x=k instanceof A.cV?10:12
break
case 10:p=k
x=p.b==="P0001"?13:14
break
case 13:k=r.a.d.w
k.toString
x=15
return A.d(G.ais(k),$async$yS)
case 15:o=e
if(J.p(o,"accepted")){if(r.c==null){s=[1]
x=6
break}n.al($.ajr())
n.al($.mc())
r.q(new B.cdr(r))
r.aPb()
s=[1]
x=6
break}if(r.c!=null)r.q(new B.cds(r))
case 14:k=r.c
if(k!=null){k=k.R(y.q).f
if(p.b==="P0001")n="Esta proposta j\xe1 n\xe3o est\xe1 dispon\xedvel \u2014 foi recusada ou expirou."
else if(p.b==="P0007")n="Este parceiro j\xe1 tem outra reserva confirmada nessa data. N\xe3o \xe9 poss\xedvel aceitar esta proposta."
else if(p.b==="P0010")n="Este parceiro j\xe1 n\xe3o est\xe1 dispon\xedvel para o vosso evento."
else n=p.b==="P0008"?"J\xe1 tens uma reserva com este parceiro. S\xf3 podes aceitar outra se essa for cancelada sem nada pago.":"N\xe3o foi poss\xedvel aceitar a proposta. Tenta novamente."
k.a7(A.cB(null,null,null,null,null,C.z,null,A.i(n,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}x=11
break
case 12:k=r.c
if(k!=null)k.R(y.q).f.a7(U.a7f)
case 11:s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.q(new B.cdt(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$yS,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.d,l=o.gU(),k=l.L($.cC(),y.B).b,j=k==null?n:k.r,i=j==null?n:k.z.c+" \xb7 "+A.aR(j)+" "+C.dM[A.aB(j)-1]+" "+A.aF(j)
l=o.a.awI(l,!0)
if(l==null)l=H.fz
x=m.y
w=x==null
v=l.nW(w?0:x)
l=o.a.r
u=i==null
t=u?m.x:i
if(t==null)t="Proposta"
u=u?n:m.x
x=w?n:R.cL3(x,m.z,v)
w=m.z
w=w==null?n:new B.cdC(v).$1(w)
s=v>0?"Valores j\xe1 com a taxa de servi\xe7o":n
r=A.a([new B.yP("Ver detalhe",new B.cdA(d),!1)],y.j)
q=o.x
if(q&&o.z==="cancelled")r.push(new B.yP("Pedir nova proposta",o.a.e,!0))
else if(q)r.push(new B.yP(o.gaPc(),new B.cdB(o,v,d),!0))
else if(o.y)r.push(D.ai9)
else{q=o.w
p=q?"A aceitar\u2026":"Aceitar"
r.push(new B.yP(p,q?n:o.gaPa(),!0))}return F.cO_(r,w,"PROPOSTA",l,s,x,u,t)}}
B.aI6.prototype={
u(d){var x=null,w=A.X(17),v=A.cx(D.alY,1.5)
return A.b0(A.F(C.O,A.i(this.c,x,x,x,C.dE,x,x,x),C.r,x,x,new A.M(x,x,v,w,x,x,C.y),x,34,x,C.dK,x,x,x),this.d,x)}}
B.WJ.prototype={
u(d){var x=this,w=null,v=A.bT(A.F(w,w,C.r,w,w,new A.M(C.tB,w,w,A.X(999),w,w,C.y),w,4,C.u9,w,w,w,40),w,w),u=x.r,t=A.i(u?"Paga para confirmar":"Reservado!",w,w,w,C.bR,w,w,w),s=A.i(u?"Falta pouco para o prazo. Paga para confirmar.":"Guard\xe1mos a tua reserva. Ainda n\xe3o \xe9 preciso pagar.",w,w,w,P.H9,w,w,w),r=A.X(22),q=y.p,p=A.a([A.i(x.c,w,w,w,C.aH,w,w,w),C.be,A.i("Total "+A.b8(x.d,!1),w,w,w,C.a6,w,w,w)],q),o=x.e
if(o!=null)C.e.p(p,A.a([D.apr,A.Y(A.a([D.ay2,A.i(A.b8(o,!1),w,w,w,C.aH,w,w,w)],q),C.x,C.l,C.q,0,w,w)],q))
r=A.F(w,A.G(p,C.J,C.l,C.q,0,C.w),C.r,w,w,new A.M(C.af,w,w,r,w,w,C.y),w,w,w,C.bc,w,w,w)
p=u?x.w:x.x
o=A.cf(C.A,w,w,C.u,w,w,C.ac,w,w,M.a88)
v=A.a([v,t,C.aD,s,C.ai,r,C.aa,A.aM(A.bD(A.i(u?"Pagar "+A.b8(x.f,!1):"OK",w,w,w,w,w,w,w),p,o),52,w),C.a8,A.ci(D.cbI,w,w,x.x,w,A.hM(w,w,w,w,w,w,w,w,w,C.A,w,C.iy,w,w,w,w,w,w,w,M.a8g,w))],q)
if(!u)C.e.p(v,A.a([C.aD,D.ccP],q))
return A.bA(!0,A.F(w,A.G(v,C.I,C.l,C.U,0,C.w),C.r,w,w,w,w,w,w,D.arf,w,w,w),w,C.Z,!1)}}
B.yP.prototype={}
B.U5.prototype={
P(){return new B.afx()},
bvH(){return this.w.$0()}}
B.afx.prototype={
b1q(){var x=this
if(x.d)return
x.q(new B.cjR(x))
x.a.bvH()
x.c.R(y.q).f.a9h(D.bU0)},
u(d){var x,w,v,u,t=this,s=null
A.ap(d)
x=A.cW7(d)
w=A.cI8(d)
v=new B.cjU(t,w,x)
u=A.hM(s,s,s,s,s,s,s,s,s,s,s,s,v.$0(),s,s,s,s,s,s,s,s)
v=v.$0()
v=u.bnk(new B.cjS(t,w).$0(),v)
u=t.d?s:t.gb1p()
return A.ci(A.i(t.a.r,s,s,s,s,s,s,s),s,s,u,s,v)}}
var z=a.updateTypes(["E<~>()","z(kN)","k1()","kN(@)","~(k1?,k1)","e(kN,z)","WJ(N)","~()","Ch(c)"])
B.aVV.prototype={
$1(d){return this.a.a0r(y.b.a(d))},
$S:z+3}
B.aVW.prototype={
$1(d){var x=this.a.a
return x==null||d.r.hX(x)},
$S:z+1}
B.cvU.prototype={
$2(d,e){return d.L($.cER(),y.R).n(0,e)},
$S:1272}
B.cv5.prototype={
$1(d){var x=J.a5(d)
if(J.p(x.h(d,"status"),"pending"))x=J.p(x.h(d,"type"),"deposit")||J.p(x.h(d,"type"),"final_payment")
else x=!1
return x},
$S:73}
B.cv2.prototype={
$2(d,e){return J.P0(this.a,new B.cv3(d,e))},
$S:384}
B.cv3.prototype={
$1(d){var x=J.a5(d)
return J.p(x.h(d,"type"),this.a)&&J.p(x.h(d,"status"),this.b)},
$S:73}
B.bGI.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.iA(0,C.cl,C.l_)},
$S:7}
B.bGH.prototype={
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
return A.d(L.OH(s,new B.bGG(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.bGG.prototype={
$0(){var x=this.a
return x.gU().a1(0,$.aRI().$1(x.a.d.a).gaW(),y.C).jM(0,this.b.a)},
$S:2}
B.bGK.prototype={
$1(d){return d.a===this.a.a.d.e},
$S:93}
B.bGL.prototype={
$1(d){return d.w!=null},
$S:z+1}
B.bGM.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a4P()},
$S:z+4}
B.bGN.prototype={
$0(){var x,w,v,u,t,s=this.a.gU(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a6(x).i("cW<1>"),x=new A.cW(x,w),x=new A.ao(x,x.gA(0),w.i("ao<b2.E>")),w=w.i("b2.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new E.Am(u,v==null?"":v,null,null))}}return E.Yq(this.b,s,!1,K.r9,r)},
$S:0}
B.bGP.prototype={
$1(d){return!d.d},
$S:z+1}
B.bGO.prototype={
$2(d,e){var x,w=this,v=null,u=d.as
if(u!=null){x=d.at
if(x==null)x="file"
x=w.a.ans(e,d,new E.PI(u,x,d.ax,e,v))
u=x}else if(d.w!=null){u=w.a
x=u.a.d
x=new B.adD(d,u.ga3O(),x.f,x.d,v)
u=x}else if(d.Q){u=d.e
u=A.dH(v,new E.yO(u==null?"":u,e,v,v),C.a2,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.a.ga3O(),v,v,v,v,v,v,!1,C.bd)}else{u=w.a
x=d.e
if(e)u=u.ans(!0,d,new E.yO(x==null?"":x,!0,v,v))
else u=A.dH(v,new E.yO(x==null?"":x,!1,v,v),C.a2,!1,v,v,v,v,v,v,v,new B.bGJ(u,w.b,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!1,C.bd)}return u},
$S:z+5}
B.bGJ.prototype={
$0(){return Q.vL(this.b,this.a.gU(),!1,null,null,K.r9,this.c.a)},
$S:0}
B.bGQ.prototype={
$0(){return this.a.ST(this.b)},
$S:0}
B.bGR.prototype={
$1(d){var x,w=this.a,v=w.gU()
w=v.a1(0,$.BS().$1("c:"+w.a.d.a).gaW(),y.M)
x=v.a1(0,$.b7(),y.V).b
v=x==null?null:x.b
return w.abz(C.f.D(v==null?"":v))},
$S:3}
B.cdF.prototype={
$1(d){return this.aCY(d)},
aCY(d){var x=0,w=A.n(y.P),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null||d==null){x=1
break}s.q(new B.cdD(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(B.air(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.q(new B.cdE(s,t))
case 4:case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1273}
B.cdD.prototype={
$0(){var x=this.a,w=this.b,v=w==="accepted"
x.x=v
x.y=w!=="sent"&&!v},
$S:0}
B.cdE.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cdG.prototype={
$1(d){},
$S:14}
B.cdu.prototype={
$0(){var x,w=this.a,v=w.a
v.toString
v=v.awH(w.gU())
if(v==null)v=H.fz
x=w.a.d.y
return w.wt(v.nW(x==null?0:x))},
$S:0}
B.cdv.prototype={
$1(d){return A.av(d,!1).bS()},
$S:141}
B.cdw.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cdz.prototype={
$1(d){var x,w=this,v=w.b.x
if(C.f.D(v==null?"":v).length===0)v="Reserva"
else{v.toString
v=C.f.D(v)}x=w.d?w.e:null
return new B.WJ(v,w.c,x,w.f,w.r,new B.cdx(w.a,d,w.w),new B.cdy(d),null)},
$S:z+6}
B.cdx.prototype={
$0(){A.av(this.b,!1).bS()
this.a.wt(this.c)},
$S:0}
B.cdy.prototype={
$0(){return A.av(this.a,!1).bS()},
$S:0}
B.cdp.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cdq.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cdr.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cds.prototype={
$0(){return this.a.y=!0},
$S:0}
B.cdt.prototype={
$0(){return this.a.w=!1},
$S:0}
B.cdC.prototype={
$1(d){return A.ii(d,this.a)},
$S:1}
B.cdA.prototype={
$0(){return A.ar(this.a).aU("/bookings",null,y.X)},
$S:0}
B.cdB.prototype={
$0(){var x=this.a,w=x.z
return w==null||w==="deposit_due"||w==="final_due"?x.wt(this.b):A.ar(this.c).aU("/bookings",null,y.X)},
$S:0}
B.csq.prototype={
$2(d,e){return this.aDc(d,e)},
aDc(d,e){var x=0,w=A.n(y.O),v,u=2,t=[],s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
q=$.R().b
q===$&&A.b()
x=7
return A.d(q.S("conversations").aG(0,"partner_last_read_at").X("id",e).e0(),$async$$2)
case 7:s=g
q=s
r=A.L(q==null?null:J.h(q,"partner_last_read_at"))
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
$S:436}
B.cjR.prototype={
$0(){this.a.d=!0},
$S:0}
B.cjU.prototype={
$0(){var x,w=this,v=w.a
v.a.toString
x=w.b.b
if(x!=null){if(x instanceof A.By)return x}else{x=w.c
x.gwL()
if(x.gwL() instanceof A.By)return y.E.a(x.gwL())}return A.nD(new B.cjV(v,w.b,w.c))},
$S:1274}
B.cjV.prototype={
$1(d){var x,w=this
if(d.n(0,C.ar)){w.a.a.toString
x=w.b.c
return x==null?w.c.gM_():x}w.a.a.toString
x=w.b.b
return x==null?w.c.gwL():x},
$S:4}
B.cjS.prototype={
$0(){var x,w,v=this.a
v.a.toString
x=this.b
w=x.as
if(w instanceof A.By)return w
return A.nD(new B.cjT(v,x))},
$S:1275}
B.cjT.prototype={
$1(d){var x,w=this
if(d.n(0,C.ar)){w.a.a.toString
x=w.b.at
return x==null?C.ap:x}w.a.a.toString
x=w.b.as
return x==null?C.ap:x},
$S:4};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dqq","d6E",8)
var u
w(u=B.Ch.prototype,"gib","cT",2)
v(u,"gMZ","lW",0)
w(u=B.a9K.prototype,"ga3O","Sn",0)
w(u,"gaRC","HD",0)
w(u,"gaRB","HC",0)
w(B.adE.prototype,"gaPa","yS",0)
w(B.afx.prototype,"gb1p","b1q",7)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ch,A.eY)
w(A.bv,[B.aVV,B.aVW,B.cv5,B.cv3,B.bGI,B.bGK,B.bGL,B.bGP,B.bGR,B.cdF,B.cdG,B.cdv,B.cdz,B.cdC,B.cjV,B.cjT])
w(A.cM,[B.cvU,B.cv2,B.bGM,B.bGO,B.csq])
w(A.ds,[B.ZV,B.adD])
w(A.di,[B.a9K,B.adE])
w(A.bN,[B.bGH,B.bGG,B.bGN,B.bGJ,B.bGQ,B.cdD,B.cdE,B.cdu,B.cdw,B.cdx,B.cdy,B.cdp,B.cdq,B.cdr,B.cds,B.cdt,B.cdA,B.cdB,B.cjR,B.cjU,B.cjS])
w(A.O,[B.aI6,B.WJ])
x(B.yP,A.J)
x(B.U5,A.I)
x(B.afx,A.a1)})()
A.bt(b.typeUniverse,JSON.parse('{"Ch":{"eY":["k1"]},"ZV":{"I":[],"e":[],"f":[]},"adD":{"I":[],"e":[],"f":[]},"WJ":{"O":[],"e":[],"f":[]},"a9K":{"a1":["ZV"]},"adE":{"a1":["adD"]},"aI6":{"O":[],"e":[],"f":[]},"U5":{"I":[],"e":[],"f":[]},"afx":{"a1":["U5"]}}'))
var y=(function rtii(){var x=A.w
return{l:x("aE<fk>"),U:x("aE<ah?>"),D:x("aE<eK?>"),Q:x("aE<x9?>"),V:x("cw"),y:x("kN"),C:x("Ch"),n:x("k1"),K:x("E<eK?>"),j:x("r<yP>"),t:x("r<kN>"),Y:x("r<Am>"),s:x("r<c>"),p:x("r<e>"),a:x("t<c>"),b:x("a3<c,@>"),P:x("by"),R:x("bH<c>"),N:x("c"),M:x("vo"),B:x("e8"),E:x("xR"),q:x("dF"),v:x("z"),z:x("@"),O:x("ah?"),g:x("t<@>?"),W:x("a3<@,@>?"),X:x("J?"),h:x("+(c,c,S,c)?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ai9=new B.yP("Indispon\xedvel",null,!0)
D.alY=new A.P(1,0.8392156862745098,0.8156862745098039,0.7607843137254902,C.C)
D.apr=new A.lf(22,null,null,null,C.d7,null)
D.ara=new A.a0(16,0,16,8)
D.arf=new A.a0(16,12,16,18)
D.c5K=new A.B("Sinal para confirmar",null,C.a6,null,null,null,null,null,null,null,null)
D.ay2=new A.c0(1,C.aw,D.c5K,null)
D.bqx=x(["Posso visitar?","Pedir outra proposta","Obrigado!"],y.s)
D.bU0=new A.vd(0,"action")
D.c44=new A.B("N\xe3o foi poss\xedvel enviar a mensagem. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bV4=new A.bX(D.c44,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.c9B=new A.B("Proposta aceite! Paga para confirmar.",null,null,null,null,null,null,null,null,null,null)
D.cbI=new A.B("Pagar depois",null,null,null,null,null,null,null,null,null,null)
D.c1T=new A.H(!0,C.Q,null,null,null,null,13,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccP=new A.B("Avisamos-te 3 dias antes do prazo para pagares!",null,D.c1T,C.a5,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dFf","aRI",()=>I.JA.$3$1(B.dqq(),y.C,y.n,y.N))
x($,"dG0","d4N",()=>O.JC.$2$1(new B.cvU(),y.v,y.N))
x($,"dE1","d3V",()=>C.cj.jt(0,new B.csq(),y.O,y.N))})()};
(a=>{a["lJfuOaFJqeq1fBr0PTwvJpDIM7U="]=a.current})($__dart_deferred_initializers__);