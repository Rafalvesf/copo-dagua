((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,I,Q,R,E,G,H,K,F,S,T,B={
diY(d){return new B.D5(d)},
D5:function D5(d){this.x=d
this.b=null},
aZA:function aZA(d){this.a=d},
aZB:function aZB(d){this.a=d},
cGb:function cGb(){},
cFn(d){var x=0,w=A.n(y.h),v,u,t,s,r,q,p
var $async$cFn=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&A.b()
x=3
return A.d(p.R("bookings").az(0,"partner_profiles(business_name), payments(id, type, status, amount)").W("proposal_id",d).dl(0,"created_at",!1).jp(1).dA(),$async$cFn)
case 3:u=f
if(u==null){v=null
x=1
break}p=J.a6(u)
t=y.g.a(p.h(u,"payments"))
if(t==null)t=C.aj
t=J.db(t,new B.cFo())
s=A.V(t,t.$ti.i("z.E"))
if(s.length===0){v=null
x=1
break}r=C.e.gM(s)
p=y.W.a(p.h(u,"partner_profiles"))
q=A.B(p==null?null:J.h(p,"business_name"))
if(q==null)q="Parceiro"
p=J.a6(r)
v=new A.k0([A.a0(p.h(r,"id")),A.a0(p.h(r,"type")),A.dt(p.h(r,"amount")),q])
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cFn,w)},
akz(d){var x=0,w=A.n(y.T),v,u,t,s,r,q,p,o,n
var $async$akz=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(A.al0(null,d),$async$akz)
case 3:u=$.T().b
u===$&&A.b()
x=4
return A.d(u.R("bookings").az(0,"status, total_amount, deposit_amount, payments(type, status)").W("proposal_id",d).dl(0,"created_at",!1).jp(1).dA(),$async$akz)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a6(t)
s=A.B(u.h(t,"status"))
if(s==null)s=""
if(C.f.b4(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.g.a(u.h(t,"payments"))
q=new B.cFl(r==null?C.aj:r)
if(q.$2("final_payment","pending")){v="final_due"
x=1
break}if(q.$2("final_payment","paid")){v="paid"
x=1
break}if(s==="completed"){v="completed"
x=1
break}p=A.aJ(u.h(t,"total_amount"))
o=p==null?null:p
if(o==null)o=0
if(o>0){u=A.aJ(u.h(t,"deposit_amount"))
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
return A.m($async$akz,w)},
cFo:function cFo(){},
cFl:function cFl(d){this.a=d},
cFm:function cFm(d,e){this.a=d
this.b=e},
diZ(d){return new B.a0y(d,null)},
a0y:function a0y(d,e){this.d=d
this.a=e},
abx:function abx(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bMC:function bMC(d){this.a=d},
bMB:function bMB(d,e){this.a=d
this.b=e},
bMA:function bMA(d,e){this.a=d
this.b=e},
bME:function bME(d){this.a=d},
bMF:function bMF(){},
bMG:function bMG(d){this.a=d},
bMH:function bMH(d,e,f){this.a=d
this.b=e
this.c=f},
bMJ:function bMJ(){},
bMI:function bMI(d,e){this.a=d
this.b=e},
bMD:function bMD(d,e,f){this.a=d
this.b=e
this.c=f},
bMK:function bMK(d,e){this.a=d
this.b=e},
bML:function bML(d){this.a=d},
afB:function afB(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.a=j},
afC:function afC(){var _=this
_.y=_.x=_.w=!1
_.z=null
_.d=$
_.c=_.a=null},
cmu:function cmu(d,e){this.a=d
this.b=e},
cms:function cms(d,e){this.a=d
this.b=e},
cmt:function cmt(d,e){this.a=d
this.b=e},
cmv:function cmv(){},
cmg:function cmg(d){this.a=d},
cmh:function cmh(){},
cmi:function cmi(d,e){this.a=d
this.b=e},
cmo:function cmo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cmm:function cmm(d,e,f){this.a=d
this.b=e
this.c=f},
cmn:function cmn(d){this.a=d},
cmj:function cmj(d){this.a=d},
cmk:function cmk(d){this.a=d},
cml:function cml(d,e){this.a=d
this.b=e},
cmb:function cmb(d){this.a=d},
cmc:function cmc(d){this.a=d},
cmd:function cmd(d){this.a=d},
cme:function cme(d){this.a=d},
cmf:function cmf(d){this.a=d},
cmr:function cmr(d){this.a=d},
cmp:function cmp(d){this.a=d},
cmq:function cmq(d,e,f){this.a=d
this.b=e
this.c=f},
cC2:function cC2(){},
aLa:function aLa(d,e,f){this.c=d
this.d=e
this.a=f},
Y7:function Y7(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
wM:function wM(d,e,f){this.a=d
this.b=e
this.c=f},
Vp:function Vp(d,e,f){this.r=d
this.w=e
this.a=f},
ahx:function ahx(){this.d=!1
this.c=this.a=null},
ctP:function ctP(d){this.a=d},
ctS:function ctS(d,e,f){this.a=d
this.b=e
this.c=f},
ctT:function ctT(d,e,f){this.a=d
this.b=e
this.c=f},
ctQ:function ctQ(d,e){this.a=d
this.b=e},
ctR:function ctR(d,e){this.a=d
this.b=e}},D,L
J=c[1]
A=c[0]
C=c[2]
M=c[166]
N=c[230]
O=c[160]
P=c[152]
I=c[229]
Q=c[227]
R=c[114]
E=c[117]
G=c[81]
H=c[225]
K=c[134]
F=c[73]
S=c[192]
T=c[83]
B=a.updateHolder(c[62],B)
D=c[226]
L=c[228]
B.D5.prototype={
d4(){A.je(this.gNK(this),y.H)
return H.L9},
m6(d){return this.bwU(0)},
bwU(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$m6=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:l={}
t.sa2(0,t.ga2(0).ip(!0))
q=$.T()
p=q.b
p===$&&A.b()
o=t.x
x=2
return A.d(p.R("messages").cj(0).W("conversation_id",o).dl(0,"created_at",!0),$async$m6)
case 2:n=f
l.a=null
v=4
x=7
return A.d(q.b.R("conversations").az(0,"couple_hidden_at").W("id",o).dA(),$async$m6)
case 7:s=f
q=s
r=A.B(q==null?null:J.h(q,"couple_hidden_at"))
if(r!=null)l.a=A.d8(r)
v=1
x=6
break
case 4:v=3
k=u.pop()
x=6
break
case 3:x=1
break
case 6:l=J.d3(n,new B.aZA(t),y.y).cI(0,new B.aZB(l))
l=A.V(l,l.$ti.i("z.E"))
t.sa2(0,new G.kd(!1,l))
v=9
l=$.T().b
l===$&&A.b()
q=y.z
x=12
return A.d(l.aT("mark_conversation_read",A.S(["p_conversation_id",o],y.N,q),q),$async$m6)
case 12:A.eP(t).ai($.cY2())
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
return A.m($async$m6,w)},
mk(d){return this.aIC(d)},
aIC(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$mk=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=C.f.D(d)
if(p.length===0){x=1
break}t=$.T()
s=t.b
s===$&&A.b()
s=s.R("messages")
t=t.b.gbE().e.a
r=y.N
x=3
return A.d(s.de(0,A.S(["conversation_id",u.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cj(0).dP(0),$async$mk)
case 3:q=f
r=u.ga2(0)
t=A.V(u.ga2(0).b,y.y)
t.push(u.a1s(q))
u.sa2(0,r.F6(t))
case 1:return A.l(v,w)}})
return A.m($async$mk,w)},
mV(d){return this.aIx(d)},
aIx(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mV=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.T()
s=t.b
s===$&&A.b()
s=s.R("messages")
t=t.b.gbE().e.a
x=2
return A.d(s.de(0,A.S(["conversation_id",v.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cj(0).dP(0),$async$mV)
case 2:u=f
t=v.ga2(0)
s=A.V(v.ga2(0).b,y.y)
s.push(v.a1s(u))
v.sa2(0,t.F6(s))
return A.l(null,w)}})
return A.m($async$mV,w)},
jW(d,e){return this.brV(0,e)},
brV(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jW=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&A.b()
x=2
return A.d(p.aT("delete_message",A.S(["p_message_id",e],y.N,y.z),y.H),$async$jW)
case 2:p=v.ga2(0)
u=A.a([],y.t)
for(t=v.ga2(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.K)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa2(0,p.F6(u))
return A.l(null,w)}})
return A.m($async$jW,w)},
a1s(d){var x,w=J.a6(d),v=A.a0(w.h(d,"id")),u=A.a0(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.B(w.h(d,"body")),r=A.B(w.h(d,"attachment_url")),q=A.B(w.h(d,"attachment_type")),p=A.B(w.h(d,"attachment_name")),o=A.d8(A.a0(w.h(d,"created_at"))),n=A.B(w.h(d,"proposal_id")),m=A.B(w.h(d,"proposal_title")),l=A.aJ(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aJ(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dU(w.h(d,"is_quote_request_notice"))
return G.cZa(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a0y.prototype={
P(){return new B.abx(new A.aI(C.an,$.ac()),A.oz(null,0,null,null))}}
B.abx.prototype={
m(){var x=this.w
x.Z$=$.ac()
x.X$=0
this.x.m()
this.a7()},
a5V(){$.az.k4$.push(new B.bMC(this))},
Tg(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Tg=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.d
x=3
return A.d(u.gT().a1(0,$.zb().$1(t.f).gem(),y.B),$async$Tg)
case 3:s=e
t=u.c
if(t==null||s==null){x=1
break}O.TU(t,s,!1)
case 1:return A.l(v,w)}})
return A.m($async$Tg,w)},
TP(d){return this.bdD(d)},
bdD(d){var x=0,w=A.n(y.H),v=this
var $async$TP=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.w.sbx(0,d)
x=2
return A.d(v.Ib(),$async$TP)
case 2:return A.l(null,w)}})
return A.m($async$TP,w)},
Ib(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Ib=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p=s.w
o=p.a.a
if(J.aVz(o).length===0){x=1
break}p.j5(0,C.iZ)
r=s.gT()
r.a1(0,$.CF().$1("c:"+s.a.d.a).gaX(),y.M).d2(0)
u=4
x=7
return A.d(r.a1(0,$.alw().$1(s.a.d.a).gaX(),y.C).mk(o),$async$Ib)
case 7:s.a5V()
u=2
x=6
break
case 4:u=3
n=t.pop()
if(s.c==null){x=1
break}p.sbx(0,o)
s.c.O(y.q).f.a4(D.bZf)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ib,w)},
Ia(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Ia=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(E.rC(q),$async$Ia)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gT().a1(0,$.alw().$1(s.a.d.a).gaX(),y.C).mV(r),$async$Ia)
case 8:s.a5V()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.O(y.q).f.a4(H.a8V)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ia,w)},
aoN(d,e,f){var x=null
if(!d)return f
return A.dO(x,f,C.a2,!1,x,x,x,x,x,x,x,new B.bMB(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bd)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gT(),f=$.alw(),e=y.n,d=g.H(f.$1(i.a.d.a),e),a0=g.H($.dg0().$1(i.a.d.a),y.U),a1=a0.gv(a0)
a0=i.a
a0.toString
a0=g.H($.zb().$1(a0.d.f),y.D)
x=a0.gv(a0)
w=g.H($.co(),y.v).c
v=A.eV(new A.a5(w,new B.bME(i),A.a8(w).i("a5<1>")))
a0=v==null
u=a0?h:v.r
if(a0)t=h
else{a0=A.a([v.gcu()],y.s)
if(u!=null)a0.push(""+A.aM(u)+" "+C.co[A.ay(u)-1]+" "+A.aE(u))
t=C.e.a3(a0," \xb7 ")}a0=d.b
s=C.e.c4(a0,new B.bMF())
r=i.a.d.f
q=g.H($.dgW().$1(r),y.w)
p=g.H($.a_j().$1(r),y.Q)
p=p.gv(p)
o=M.cVO(p==null?h:p.c)
n=o==null?h:o[0].toLowerCase()+C.f.bD(o,1)
m=E.cWe(g.H($.CF().$1("c:"+i.a.d.a),y.a))
g.pv(f.$1(i.a.d.a),new B.bMG(i),e)
g=i.a.d
if(q){f=A.a(["Online"],y.s)
if(n!=null)f.push(n)
f=C.e.a3(f," \xb7 ")}else if(x==null)f=h
else{f=A.a([],y.s)
e=x.c
if(e.length!==0)f.push(C.e.gM(e))
e=x.e
if(e.length!==0)f.push(e)
f=C.e.a3(f," \xb7 ")}i.a.toString
e=i.ga4U()
g=A.bD(!1,E.cQy(g.d,h,g.b,e,new B.bMH(i,a2,d),f,q),h,C.a_,!1)
if(d.a&&a0.length===0)f=C.cX
else{if(s)f="Proposta recebida"
else f=x==null?h:A.eV(x.c)
i.a.toString
p=t==null?16:82
a0=G.d9t(new B.bMI(i,a2),new B.bMJ(),a0,a1)
l=A.a8(a0).i("cZ<1>")
a0=A.V(new A.cZ(a0,l),l.i("aZ.E"))
f=new T.QN(t,f,"Ver perfil",e,A.d_(a0,i.x,new A.a2(16,p,16,16),h,h,!0,C.a1,!1),h)}e=y.p
f=A.a([g,A.a7(A.kD(f,C.a9,!0),1),A.kD(new E.QO(m,h),C.a9,!0)],e)
i.a.toString
g=A.a([],e)
for(k=0;k<3;++k){j=D.bsS[k]
C.e.n(g,A.a([new B.aLa(j,new B.bMK(i,j),h),C.al],e))}f.push(A.kD(A.dX(A.Q(g,C.w,C.j,C.m,0,h,h),C.z,h,D.asM,h,h,C.bx),C.a9,!0))
f.push(new E.QM(i.w,i.gaTI(),i.gaTH(),"Escreve uma mensagem",new B.bML(i),h))
return A.cM(h,C.l5,A.C(f,C.w,C.j,C.m,0,C.v),!0,h)}}
B.afB.prototype={
ayg(d,e){var x=this.f,w=y.l
if(e){w=d.H($.CC().$1(x),w)
w=w.gv(w)}else{w=d.a1(0,$.CC().$1(x),w)
w=w.gv(w)}return w},
a9F(d){return this.ayg(d,!1)},
P(){return new B.afC()}}
B.afC.prototype={
al(){this.aH()
var x=this.a.d.w
if(x!=null)F.akA(x).b7(new B.cmu(this,x),y.P).eF(new B.cmv())},
gaRc(){switch(this.z){case"deposit_paid":var x="Sinal pago"
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
aRb(){var x=null
this.c.O(y.q).f.a4(A.cA(new B.Vp("Pagar",new B.cmg(this),x),x,x,x,x,C.z,x,D.cdH,x,C.X,x,x,x,x,x,x,x,x,x,x))},
uJ(d){return this.ba9(d)},
ba9(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$uJ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=u.a.d.w
if(l==null){x=1
break}x=3
return A.d(B.cFn(l),$async$uJ)
case 3:t=f
s=u.c
if(s==null){x=1
break}if(t==null){A.ai(s).au("/bookings",null,y.X)
x=1
break}r=t.a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=A.j8(o,d)
x=4
return A.d(A.ai(s).au("/pay",new A.on(q,n,p,r,o,new B.cmh(),null,!1,null,null,null,null,null,null,null),y.X),$async$uJ)
case 4:if(u.c==null){x=1
break}x=5
return A.d(B.akz(l),$async$uJ)
case 5:m=f
if(u.c!=null)u.q(new B.cmi(u,m))
case 1:return A.l(v,w)}})
return A.m($async$uJ,w)},
L5(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$L5=A.j(function(a0,a1){if(a0===1){t.push(a1)
x=u}for(;;)switch(x){case 0:f=s.a.d
e=f.y
if(e==null)e=0
o=f.z
if(o==null)o=0
n=o>0&&o<e
m=n?o:e
r=null
u=4
l=$.T().b
l===$&&A.b()
l=l.R("payments").az(0,"due_at, bookings!inner(proposal_id)")
k=f.w
k.toString
x=7
return A.d(l.W("bookings.proposal_id",k).W("status","pending").jp(1).dA(),$async$L5)
case 7:q=a1
k=q
p=k==null?null:J.h(k,"due_at")
if(typeof p=="string")r=A.dK(p)
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
i=l==null?null:C.i.aS(l.cV(new A.ae(Date.now(),0,!1)).a,864e8)
h=n||i==null||i<=6
l=s.a
l.toString
l=l.a9F(s.gT())
g=(l==null?C.f4:l).lg(e)
l=s.c
l.toString
x=8
return A.d(A.cn(null,new B.cmo(s,f,e,n,o,m,h,g),!1,l,!0,!0,null,y.H),$async$L5)
case 8:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$L5,w)},
TY(){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$TY=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:r=u.a.d.w
if(r==null){x=1
break}u.q(new B.cmj(u))
t=u.c
t.toString
x=3
return A.d(F.ZS(t,u.a.r,r,new B.cmk(u)),$async$TY)
case 3:s=e
if(u.c==null){x=1
break}if(s)u.gT().ai($.zf())
u.q(new B.cml(u,s))
case 1:return A.l(v,w)}})
return A.m($async$TY,w)},
rD(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$rD=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:d=r.c
d.toString
i=r.gT()
h=i.a1(0,$.co(),y.v).b
x=3
return A.d(F.aTM(d,h==null?null:h.a,"este parceiro"),$async$rD)
case 3:q=a3
if(q==null||r.c==null){x=1
break}r.q(new B.cmb(r))
u=5
d=r.a.d.w
d.toString
x=8
return A.d(F.ako(d,q),$async$rD)
case 8:if(r.c==null){s=[1]
x=6
break}i.ai($.zf())
i.ai($.jv())
r.q(new B.cmc(r))
u=10
d=$.T().b
d===$&&A.b()
d=d.R("bookings").az(0,"id")
h=r.a.d.w
h.toString
x=13
return A.d(d.W("proposal_id",h).dA(),$async$rD)
case 13:p=a3
h=p
o=A.B(h==null?null:J.h(h,"id"))
x=o!=null&&r.c!=null?14:15
break
case 14:d=r.c
d.toString
x=16
return A.d(F.akJ(d,o,r.a.r),$async$rD)
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
case 17:d=d.a9F(i)
if(d==null)d=C.f4
x=20
return A.d(r.uJ(d.lg(m)),$async$rD)
case 20:x=18
break
case 19:x=21
return A.d(r.L5(),$async$rD)
case 21:case 18:s.push(7)
x=6
break
case 5:u=4
a1=t.pop()
d=A.a9(a1)
x=d instanceof A.cU?22:24
break
case 22:k=d
x=k.b==="P0001"?25:26
break
case 25:d=r.a.d.w
d.toString
x=27
return A.d(F.akA(d),$async$rD)
case 27:j=a3
if(J.o(j,"accepted")){if(r.c==null){s=[1]
x=6
break}i.ai($.zf())
i.ai($.jv())
r.q(new B.cmd(r))
r.aRb()
s=[1]
x=6
break}if(r.c!=null)r.q(new B.cme(r))
case 26:d=r.c
if(d!=null){d=d.O(y.q).f
if(k.b==="P0001")i="Esta proposta j\xe1 n\xe3o est\xe1 dispon\xedvel \u2014 foi recusada ou expirou."
else if(k.b==="P0007")i="Este parceiro j\xe1 tem outra reserva confirmada nessa data. N\xe3o \xe9 poss\xedvel aceitar esta proposta."
else if(k.b==="P0010")i="Este parceiro j\xe1 n\xe3o est\xe1 dispon\xedvel para o vosso evento."
else i=k.b==="P0008"?"J\xe1 tens uma reserva com este parceiro. S\xf3 podes aceitar outra se essa for cancelada sem nada pago.":"N\xe3o foi poss\xedvel aceitar a proposta. Tenta novamente."
d.a4(A.cA(null,null,null,null,null,C.z,null,A.i(i,null,null,null,null,null,null,null,null),null,C.X,null,null,null,null,null,null,null,null,null,null))}x=23
break
case 24:d=r.c
if(d!=null)d.O(y.q).f.a4(S.a8O)
case 23:s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.q(new B.cmf(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$rD,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.d,l=o.gT(),k=l.H($.co(),y.v).b,j=k==null?n:k.r,i=j==null?n:k.z.c+" \xb7 "+A.aM(j)+" "+C.co[A.ay(j)-1]+" "+A.aE(j)
l=o.a.ayg(l,!0)
if(l==null)l=C.f4
x=m.y
w=x==null
v=l.lg(w?0:x)
l=o.a.x
u=i==null
t=u?m.x:i
if(t==null)t="Proposta"
u=u?n:m.x
x=w?n:R.cWc(x,m.z,v)
w=m.z
w=w==null?n:new B.cmr(v).$1(w)
s=v>0?"Valores j\xe1 com a taxa de servi\xe7o":n
r=A.a([],y.j)
if(!o.x&&!o.y)r.push(new B.wM("Recusar",o.w?n:o.gbeG(),!1))
else r.push(new B.wM("Ver detalhe",new B.cmp(d),!1))
q=o.x
if(q&&o.z==="cancelled")r.push(new B.wM("Pedir nova proposta",o.a.e,!0))
else if(q)r.push(new B.wM(o.gaRc(),new B.cmq(o,v,d),!0))
else if(o.y)r.push(D.ajO)
else{q=o.w
p=q?"A aceitar\u2026":"Aceitar"
r.push(new B.wM(p,q?n:o.gaRa(),!0))}return G.cZb(r,w,"PROPOSTA",l,s,x,u,t)}}
B.aLa.prototype={
u(d){var x=null,w=A.a1(17),v=A.bV(D.ant,1.5)
return A.aU(A.E(C.K,A.i(this.c,x,x,x,x,C.dt,x,x,x),C.r,x,x,new A.O(x,x,v,w,x,x,C.y),x,34,x,C.dB,x,x,x),this.d,x)}}
B.Y7.prototype={
u(d){var x=this,w=null,v=A.bN(A.E(w,w,C.r,w,w,new A.O(C.BM,w,w,A.a1(999),w,w,C.y),w,4,C.qa,w,w,w,40),w,w),u=x.r,t=A.i(u?"Paga para confirmar":"Reservado!",w,w,w,w,C.bv,w,w,w),s=A.i(u?"Falta pouco para o prazo. Paga para confirmar.":"Guard\xe1mos a tua reserva. Ainda n\xe3o \xe9 preciso pagar.",w,w,w,w,Q.Ic,w,w,w),r=A.a1(22),q=y.p,p=A.a([A.i(x.c,w,w,w,w,C.ao,w,w,w),C.be,A.i("Total "+A.aQ(x.d,!1),w,w,w,w,C.W,w,w,w)],q),o=x.e
if(o!=null)C.e.n(p,A.a([D.ar_,A.Q(A.a([D.azP,A.i(A.aQ(o,!1),w,w,w,w,C.ao,w,w,w)],q),C.w,C.j,C.m,0,w,w)],q))
r=A.E(w,A.C(p,C.H,C.j,C.m,0,C.v),C.r,w,w,new A.O(C.a9,w,w,r,w,w,C.y),w,w,w,C.bg,w,w,w)
p=u?x.w:x.x
o=A.cu(C.A,w,w,C.t,w,w,C.af,w,w,L.a9I)
v=A.a([v,t,C.aE,s,C.aA,r,C.a3,A.aL(A.bC(A.i(u?"Pagar "+A.aQ(x.f,!1):"OK",w,w,w,w,w,w,w,w),p,o),52,w),C.ac,A.cp(D.cfW,w,w,x.x,w,A.ie(w,w,w,w,w,w,w,w,w,C.A,w,C.iV,w,w,w,w,w,w,w,L.a9R,w))],q)
if(!u)C.e.n(v,A.a([C.aE,D.ch6],q))
return A.bD(!0,A.E(w,A.C(v,C.J,C.j,C.L,0,C.v),C.r,w,w,w,w,w,w,D.asT,w,w,w),w,C.a_,!1)}}
B.wM.prototype={}
B.Vp.prototype={
P(){return new B.ahx()},
byP(){return this.w.$0()}}
B.ahx.prototype={
b3M(){var x=this
if(x.d)return
x.q(new B.ctP(x))
x.a.byP()
x.c.O(y.q).f.aar(D.bY5)},
u(d){var x,w,v,u,t=this,s=null
A.as(d)
x=A.d6x(d)
w=A.cT3(d)
v=new B.ctS(t,w,x)
u=A.ie(s,s,s,s,s,s,s,s,s,s,s,s,v.$0(),s,s,s,s,s,s,s,s)
v=v.$0()
v=u.bqv(new B.ctQ(t,w).$0(),v)
u=t.d?s:t.gb3L()
return A.cp(A.i(t.a.r,s,s,s,s,s,s,s,s),s,s,u,s,v)}}
var z=a.updateTypes(["F<~>()","y(l3)","kd()","l3(@)","~(kd?,kd)","e(l3,y)","Y7(N)","~()","D5(c)"])
B.aZA.prototype={
$1(d){return this.a.a1s(y.b.a(d))},
$S:z+3}
B.aZB.prototype={
$1(d){var x=this.a.a
return x==null||d.r.hm(x)},
$S:z+1}
B.cGb.prototype={
$2(d,e){return d.H($.cPK(),y.R).p(0,e)},
$S:1350}
B.cFo.prototype={
$1(d){var x=J.a6(d)
if(J.o(x.h(d,"status"),"pending"))x=J.o(x.h(d,"type"),"deposit")||J.o(x.h(d,"type"),"final_payment")
else x=!1
return x},
$S:74}
B.cFl.prototype={
$2(d,e){return J.rG(this.a,new B.cFm(d,e))},
$S:397}
B.cFm.prototype={
$1(d){var x=J.a6(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:74}
B.bMC.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.jd(0,C.cl,C.lp)},
$S:5}
B.bMB.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(K.PE(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(K.PQ(s,new B.bMA(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.bMA.prototype={
$0(){var x=this.a
return x.gT().a1(0,$.alw().$1(x.a.d.a).gaX(),y.C).jW(0,this.b.a)},
$S:1}
B.bME.prototype={
$1(d){return d.a===this.a.a.d.e},
$S:88}
B.bMF.prototype={
$1(d){return d.w!=null},
$S:z+1}
B.bMG.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a5V()},
$S:z+4}
B.bMH.prototype={
$0(){var x,w,v,u,t,s=this.a.gT(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("cZ<1>"),x=new A.cZ(x,w),x=new A.ak(x,x.gA(0),w.i("ak<aZ.E>")),w=w.i("aZ.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new E.B8(u,v==null?"":v,null,null))}}return E.a__(this.b,s,!1,I.rA,r)},
$S:0}
B.bMJ.prototype={
$1(d){return!d.d},
$S:z+1}
B.bMI.prototype={
$2(d,e){var x,w=this,v=null,u=d.as
if(u!=null){x=d.at
if(x==null)x="file"
x=w.a.aoN(e,d,new E.QL(u,x,d.ax,e,v))
u=x}else if(d.w!=null){u=w.a
x=u.a.d
x=new B.afB(d,u.ga4U(),x.f,x.b,x.a,x.d,v)
u=x}else if(d.Q){u=d.e
u=A.dO(v,new E.zB(u==null?"":u,e,v,v),C.a2,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.a.ga4U(),v,v,v,v,v,v,!1,C.bd)}else{u=w.a
x=d.e
if(e)u=u.aoN(!0,d,new E.zB(x==null?"":x,!0,v,v))
else u=A.dO(v,new E.zB(x==null?"":x,!1,v,v),C.a2,!1,v,v,v,v,v,v,v,new B.bMD(u,w.b,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!1,C.bd)}return u},
$S:z+5}
B.bMD.prototype={
$0(){return P.wq(this.b,this.a.gT(),!1,null,null,I.rA,this.c.a)},
$S:0}
B.bMK.prototype={
$0(){return this.a.TP(this.b)},
$S:0}
B.bML.prototype={
$1(d){var x,w=this.a,v=w.gT()
w=v.a1(0,$.CF().$1("c:"+w.a.d.a).gaX(),y.M)
x=v.a1(0,$.b8(),y.V).b
v=x==null?null:x.b
return w.acI(C.f.D(v==null?"":v))},
$S:3}
B.cmu.prototype={
$1(d){return this.aED(d)},
aED(d){var x=0,w=A.n(y.P),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null||d==null){x=1
break}s.q(new B.cms(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(B.akz(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.q(new B.cmt(s,t))
case 4:case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1351}
B.cms.prototype={
$0(){var x=this.a,w=this.b,v=w==="accepted"
x.x=v
x.y=w!=="sent"&&!v},
$S:0}
B.cmt.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cmv.prototype={
$1(d){},
$S:14}
B.cmg.prototype={
$0(){var x,w=this.a,v=w.a
v.toString
v=v.a9F(w.gT())
if(v==null)v=C.f4
x=w.a.d.y
return w.uJ(v.lg(x==null?0:x))},
$S:0}
B.cmh.prototype={
$1(d){return A.aq(d,!1).bJ()},
$S:115}
B.cmi.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cmo.prototype={
$1(d){var x,w=this,v=w.b.x
if(C.f.D(v==null?"":v).length===0)v="Reserva"
else{v.toString
v=C.f.D(v)}x=w.d?w.e:null
return new B.Y7(v,w.c,x,w.f,w.r,new B.cmm(w.a,d,w.w),new B.cmn(d),null)},
$S:z+6}
B.cmm.prototype={
$0(){A.aq(this.b,!1).bJ()
this.a.uJ(this.c)},
$S:0}
B.cmn.prototype={
$0(){return A.aq(this.a,!1).bJ()},
$S:0}
B.cmj.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cmk.prototype={
$1(d){var x=this.a
return x.gT().a1(0,$.alw().$1(x.a.w).gaX(),y.C).mk(d)},
$S:180}
B.cml.prototype={
$0(){var x=this.a
x.w=!1
if(this.b)x.y=!0},
$S:0}
B.cmb.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cmc.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cmd.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cme.prototype={
$0(){return this.a.y=!0},
$S:0}
B.cmf.prototype={
$0(){return this.a.w=!1},
$S:0}
B.cmr.prototype={
$1(d){return A.j8(d,this.a)},
$S:2}
B.cmp.prototype={
$0(){return A.ai(this.a).au("/bookings",null,y.X)},
$S:0}
B.cmq.prototype={
$0(){var x=this.a,w=x.z
return w==null||w==="deposit_due"||w==="final_due"?x.uJ(this.b):A.ai(this.c).au("/bookings",null,y.X)},
$S:0}
B.cC2.prototype={
$2(d,e){return this.aEW(d,e)},
aEW(d,e){var x=0,w=A.n(y.O),v,u=2,t=[],s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
q=$.T().b
q===$&&A.b()
x=7
return A.d(q.R("conversations").az(0,"partner_last_read_at").W("id",e).dA(),$async$$2)
case 7:s=g
q=s
r=A.B(q==null?null:J.h(q,"partner_last_read_at"))
q=r==null?null:A.d8(r)
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
$S:454}
B.ctP.prototype={
$0(){this.a.d=!0},
$S:0}
B.ctS.prototype={
$0(){var x,w=this,v=w.a
v.a.toString
x=w.b.b
if(x!=null){if(x instanceof A.Cl)return x}else{x=w.c
x.gxb()
if(x.gxb() instanceof A.Cl)return y.E.a(x.gxb())}return A.nV(new B.ctT(v,w.b,w.c))},
$S:1352}
B.ctT.prototype={
$1(d){var x,w=this
if(d.p(0,C.ax)){w.a.a.toString
x=w.b.c
return x==null?w.c.gMM():x}w.a.a.toString
x=w.b.b
return x==null?w.c.gxb():x},
$S:6}
B.ctQ.prototype={
$0(){var x,w,v=this.a
v.a.toString
x=this.b
w=x.as
if(w instanceof A.Cl)return w
return A.nV(new B.ctR(v,x))},
$S:1353}
B.ctR.prototype={
$1(d){var x,w=this
if(d.p(0,C.ax)){w.a.a.toString
x=w.b.at
return x==null?C.am:x}w.a.a.toString
x=w.b.as
return x==null?C.am:x},
$S:6};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dDj","diY",8)
var u
w(u=B.D5.prototype,"giJ","d4",2)
v(u,"gNK","m6",0)
w(u=B.abx.prototype,"ga4U","Tg",0)
w(u,"gaTI","Ib",0)
w(u,"gaTH","Ia",0)
w(u=B.afC.prototype,"gbeG","TY",0)
w(u,"gaRa","rD",0)
w(B.ahx.prototype,"gb3L","b3M",7)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.D5,A.fa)
w(A.bx,[B.aZA,B.aZB,B.cFo,B.cFm,B.bMC,B.bME,B.bMF,B.bMJ,B.bML,B.cmu,B.cmv,B.cmh,B.cmo,B.cmk,B.cmr,B.ctT,B.ctR])
w(A.cR,[B.cGb,B.cFl,B.bMG,B.bMI,B.cC2])
w(A.dD,[B.a0y,B.afB])
w(A.dy,[B.abx,B.afC])
w(A.bR,[B.bMB,B.bMA,B.bMH,B.bMD,B.bMK,B.cms,B.cmt,B.cmg,B.cmi,B.cmm,B.cmn,B.cmj,B.cml,B.cmb,B.cmc,B.cmd,B.cme,B.cmf,B.cmp,B.cmq,B.ctP,B.ctS,B.ctQ])
w(A.L,[B.aLa,B.Y7])
x(B.wM,A.H)
x(B.Vp,A.J)
x(B.ahx,A.a_)})()
A.bs(b.typeUniverse,JSON.parse('{"D5":{"fa":["kd"]},"a0y":{"J":[],"e":[],"f":[]},"afB":{"J":[],"e":[],"f":[]},"Y7":{"L":[],"e":[],"f":[]},"abx":{"a_":["a0y"]},"afC":{"a_":["afB"]},"aLa":{"L":[],"e":[],"f":[]},"Vp":{"J":[],"e":[],"f":[]},"ahx":{"a_":["Vp"]}}'))
var y=(function rtii(){var x=A.w
return{l:x("ax<f7>"),U:x("ax<ae?>"),D:x("ax<dP?>"),Q:x("ax<AM?>"),V:x("cG"),y:x("l3"),C:x("D5"),n:x("kd"),v:x("ed"),B:x("F<dP?>"),j:x("r<wM>"),t:x("r<l3>"),Y:x("r<B8>"),s:x("r<c>"),p:x("r<e>"),a:x("t<c>"),b:x("a4<c,@>"),P:x("by"),R:x("bL<c>"),N:x("c"),M:x("w2"),E:x("yu"),q:x("ds"),w:x("y"),z:x("@"),O:x("ae?"),g:x("t<@>?"),W:x("a4<@,@>?"),X:x("H?"),h:x("+(c,c,P,c)?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ajO=new B.wM("Indispon\xedvel",null,!0)
D.ant=new A.W(1,0.8392156862745098,0.8156862745098039,0.7607843137254902,C.C)
D.ar_=new A.kj(22,null,null,null,C.d7,null)
D.asM=new A.a2(16,0,16,8)
D.asT=new A.a2(16,12,16,18)
D.c9K=new A.D("Sinal para confirmar",null,C.W,null,null,null,null,null,null,null,null)
D.azP=new A.bT(1,C.aw,D.c9K,null)
D.bsS=x(["Posso visitar?","Pedir outra proposta","Obrigado!"],y.s)
D.bY5=new A.vT(0,"action")
D.c7Y=new A.D("N\xe3o foi poss\xedvel enviar a mensagem. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZf=new A.bI(D.c7Y,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.z,null)
D.cdH=new A.D("Proposta aceite! Paga para confirmar.",null,null,null,null,null,null,null,null,null,null)
D.cfW=new A.D("Pagar depois",null,null,null,null,null,null,null,null,null,null)
D.c5O=new A.M(!0,C.S,null,null,null,null,13,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ch6=new A.D("Avisamos-te 3 dias antes do prazo para pagares!",null,D.c5O,C.a5,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dRS","alw",()=>H.KJ.$3$1(B.dDj(),y.C,y.n,y.N))
x($,"dSO","dgW",()=>N.B7.$2$1(new B.cGb(),y.w,y.N))
x($,"dQD","dg0",()=>C.bT.hi(0,new B.cC2(),y.O,y.N))})()};
(a=>{a["DXShoDM7mPQFFHy6yEro+EUUWbo="]=a.current})($__dart_deferred_initializers__);