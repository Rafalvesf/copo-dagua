((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,I,Q,R,E,G,H,K,F,S,T,B={
djc(d){return new B.D7(d)},
D7:function D7(d){this.x=d
this.b=null},
aZG:function aZG(d){this.a=d},
aZH:function aZH(d){this.a=d},
cGi:function cGi(){},
cFu(d){var x=0,w=A.n(y.h),v,u,t,s,r,q,p
var $async$cFu=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&A.b()
x=3
return A.d(p.R("bookings").az(0,"partner_profiles(business_name), payments(id, type, status, amount)").W("proposal_id",d).dl(0,"created_at",!1).jp(1).dA(),$async$cFu)
case 3:u=f
if(u==null){v=null
x=1
break}p=J.a7(u)
t=y.g.a(p.h(u,"payments"))
if(t==null)t=C.aj
t=J.dc(t,new B.cFv())
s=A.V(t,t.$ti.i("z.E"))
if(s.length===0){v=null
x=1
break}r=C.e.gM(s)
p=y.W.a(p.h(u,"partner_profiles"))
q=A.C(p==null?null:J.h(p,"business_name"))
if(q==null)q="Parceiro"
p=J.a7(r)
v=new A.k1([A.a1(p.h(r,"id")),A.a1(p.h(r,"type")),A.dt(p.h(r,"amount")),q])
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cFu,w)},
akF(d){var x=0,w=A.n(y.T),v,u,t,s,r,q,p,o,n
var $async$akF=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(A.al6(null,d),$async$akF)
case 3:u=$.T().b
u===$&&A.b()
x=4
return A.d(u.R("bookings").az(0,"status, total_amount, deposit_amount, payments(type, status)").W("proposal_id",d).dl(0,"created_at",!1).jp(1).dA(),$async$akF)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a7(t)
s=A.C(u.h(t,"status"))
if(s==null)s=""
if(C.f.b4(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.g.a(u.h(t,"payments"))
q=new B.cFs(r==null?C.aj:r)
if(q.$2("final_payment","pending")){v="final_due"
x=1
break}if(q.$2("final_payment","paid")){v="paid"
x=1
break}if(s==="completed"){v="completed"
x=1
break}p=A.aK(u.h(t,"total_amount"))
o=p==null?null:p
if(o==null)o=0
if(o>0){u=A.aK(u.h(t,"deposit_amount"))
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
return A.m($async$akF,w)},
cFv:function cFv(){},
cFs:function cFs(d){this.a=d},
cFt:function cFt(d,e){this.a=d
this.b=e},
djd(d){return new B.a0C(d,null)},
a0C:function a0C(d,e){this.d=d
this.a=e},
abC:function abC(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bMJ:function bMJ(d){this.a=d},
bMI:function bMI(d,e){this.a=d
this.b=e},
bMH:function bMH(d,e){this.a=d
this.b=e},
bML:function bML(d){this.a=d},
bMM:function bMM(){},
bMN:function bMN(d){this.a=d},
bMO:function bMO(d,e,f){this.a=d
this.b=e
this.c=f},
bMQ:function bMQ(){},
bMP:function bMP(d,e){this.a=d
this.b=e},
bMK:function bMK(d,e,f){this.a=d
this.b=e
this.c=f},
bMR:function bMR(d,e){this.a=d
this.b=e},
bMS:function bMS(d){this.a=d},
afH:function afH(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.a=j},
afI:function afI(){var _=this
_.y=_.x=_.w=!1
_.z=null
_.d=$
_.c=_.a=null},
cmz:function cmz(d,e){this.a=d
this.b=e},
cmx:function cmx(d,e){this.a=d
this.b=e},
cmy:function cmy(d,e){this.a=d
this.b=e},
cmA:function cmA(){},
cml:function cml(d){this.a=d},
cmm:function cmm(){},
cmn:function cmn(d,e){this.a=d
this.b=e},
cmt:function cmt(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cmr:function cmr(d,e,f){this.a=d
this.b=e
this.c=f},
cms:function cms(d){this.a=d},
cmo:function cmo(d){this.a=d},
cmp:function cmp(d){this.a=d},
cmq:function cmq(d,e){this.a=d
this.b=e},
cmg:function cmg(d){this.a=d},
cmh:function cmh(d){this.a=d},
cmi:function cmi(d){this.a=d},
cmj:function cmj(d){this.a=d},
cmk:function cmk(d){this.a=d},
cmw:function cmw(d){this.a=d},
cmu:function cmu(d){this.a=d},
cmv:function cmv(d,e,f){this.a=d
this.b=e
this.c=f},
cC9:function cC9(){},
aLe:function aLe(d,e,f){this.c=d
this.d=e
this.a=f},
Yb:function Yb(d,e,f,g,h,i,j,k){var _=this
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
Vt:function Vt(d,e,f){this.r=d
this.w=e
this.a=f},
ahD:function ahD(){this.d=!1
this.c=this.a=null},
ctW:function ctW(d){this.a=d},
ctZ:function ctZ(d,e,f){this.a=d
this.b=e
this.c=f},
cu_:function cu_(d,e,f){this.a=d
this.b=e
this.c=f},
ctX:function ctX(d,e){this.a=d
this.b=e},
ctY:function ctY(d,e){this.a=d
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
B.D7.prototype={
d4(){A.jf(this.gNM(this),y.H)
return H.Ld},
m6(d){return this.bwX(0)},
bwX(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j
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
r=A.C(q==null?null:J.h(q,"couple_hidden_at"))
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
case 6:l=J.d3(n,new B.aZG(t),y.y).cI(0,new B.aZH(l))
l=A.V(l,l.$ti.i("z.E"))
t.sa2(0,new G.ke(!1,l))
v=9
l=$.T().b
l===$&&A.b()
q=y.z
x=12
return A.d(l.aT("mark_conversation_read",A.S(["p_conversation_id",o],y.N,q),q),$async$m6)
case 12:A.eP(t).ai($.cY9())
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
mk(d){return this.aID(d)},
aID(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
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
t.push(u.a1u(q))
u.sa2(0,r.F6(t))
case 1:return A.l(v,w)}})
return A.m($async$mk,w)},
mV(d){return this.aIy(d)},
aIy(d){var x=0,w=A.n(y.H),v=this,u,t,s
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
s.push(v.a1u(u))
v.sa2(0,t.F6(s))
return A.l(null,w)}})
return A.m($async$mV,w)},
jW(d,e){return this.brY(0,e)},
brY(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jW=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&A.b()
x=2
return A.d(p.aT("delete_message",A.S(["p_message_id",e],y.N,y.z),y.H),$async$jW)
case 2:p=v.ga2(0)
u=A.a([],y.t)
for(t=v.ga2(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.H)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa2(0,p.F6(u))
return A.l(null,w)}})
return A.m($async$jW,w)},
a1u(d){var x,w=J.a7(d),v=A.a1(w.h(d,"id")),u=A.a1(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.C(w.h(d,"body")),r=A.C(w.h(d,"attachment_url")),q=A.C(w.h(d,"attachment_type")),p=A.C(w.h(d,"attachment_name")),o=A.d9(A.a1(w.h(d,"created_at"))),n=A.C(w.h(d,"proposal_id")),m=A.C(w.h(d,"proposal_title")),l=A.aK(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aK(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dU(w.h(d,"is_quote_request_notice"))
return G.cZh(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a0C.prototype={
P(){return new B.abC(new A.aI(C.ao,$.ac()),A.oB(null,0,null,null))}}
B.abC.prototype={
m(){var x=this.w
x.Z$=$.ac()
x.X$=0
this.x.m()
this.a7()},
a5Y(){$.az.k4$.push(new B.bMJ(this))},
Th(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Th=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.d
x=3
return A.d(u.gT().a1(0,$.zd().$1(t.f).gem(),y.B),$async$Th)
case 3:s=e
t=u.c
if(t==null||s==null){x=1
break}O.TX(t,s,!1)
case 1:return A.l(v,w)}})
return A.m($async$Th,w)},
TQ(d){return this.bdE(d)},
bdE(d){var x=0,w=A.n(y.H),v=this
var $async$TQ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.w.sbx(0,d)
x=2
return A.d(v.Ic(),$async$TQ)
case 2:return A.l(null,w)}})
return A.m($async$TQ,w)},
Ic(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Ic=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p=s.w
o=p.a.a
if(J.aVE(o).length===0){x=1
break}p.j5(0,C.j_)
r=s.gT()
r.a1(0,$.CH().$1("c:"+s.a.d.a).gaX(),y.M).d2(0)
u=4
x=7
return A.d(r.a1(0,$.alC().$1(s.a.d.a).gaX(),y.C).mk(o),$async$Ic)
case 7:s.a5Y()
u=2
x=6
break
case 4:u=3
n=t.pop()
if(s.c==null){x=1
break}p.sbx(0,o)
s.c.O(y.q).f.a4(D.bZr)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ic,w)},
Ib(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Ib=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(E.rC(q),$async$Ib)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gT().a1(0,$.alC().$1(s.a.d.a).gaX(),y.C).mV(r),$async$Ib)
case 8:s.a5Y()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.O(y.q).f.a4(H.a9_)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ib,w)},
aoP(d,e,f){var x=null
if(!d)return f
return A.dP(x,f,C.a2,!1,x,x,x,x,x,x,x,new B.bMI(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bd)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gT(),f=$.alC(),e=y.n,d=g.H(f.$1(i.a.d.a),e),a0=g.H($.dgf().$1(i.a.d.a),y.U),a1=a0.gv(a0)
a0=i.a
a0.toString
a0=g.H($.zd().$1(a0.d.f),y.D)
x=a0.gv(a0)
w=g.H($.co(),y.v).c
v=A.eV(new A.a5(w,new B.bML(i),A.a8(w).i("a5<1>")))
a0=v==null
u=a0?h:v.r
if(a0)t=h
else{a0=A.a([v.gcu()],y.s)
if(u!=null)a0.push(""+A.aN(u)+" "+C.co[A.ay(u)-1]+" "+A.aE(u))
t=C.e.a3(a0," \xb7 ")}a0=d.b
s=C.e.c4(a0,new B.bMM())
r=i.a.d.f
q=g.H($.dha().$1(r),y.w)
p=g.H($.a_n().$1(r),y.Q)
p=p.gv(p)
o=M.cVV(p==null?h:p.c)
n=o==null?h:o[0].toLowerCase()+C.f.bD(o,1)
m=E.cWl(g.H($.CH().$1("c:"+i.a.d.a),y.a))
g.pv(f.$1(i.a.d.a),new B.bMN(i),e)
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
e=i.ga4W()
g=A.bC(!1,E.cQG(g.d,h,g.b,e,new B.bMO(i,a2,d),f,q),h,C.a_,!1)
if(d.a&&a0.length===0)f=C.cW
else{if(s)f="Proposta recebida"
else f=x==null?h:A.eV(x.c)
i.a.toString
p=t==null?16:82
a0=G.d9A(new B.bMP(i,a2),new B.bMQ(),a0,a1)
l=A.a8(a0).i("d_<1>")
a0=A.V(new A.d_(a0,l),l.i("aZ.E"))
f=new T.QP(t,f,"Ver perfil",e,A.cZ(a0,i.x,new A.a2(16,p,16,16),h,h,!0,C.a1,!1),h)}e=y.p
f=A.a([g,A.a6(A.kE(f,C.ac,!0),1),A.kE(new E.QQ(m,h),C.ac,!0)],e)
i.a.toString
g=A.a([],e)
for(k=0;k<3;++k){j=D.bsS[k]
C.e.n(g,A.a([new B.aLe(j,new B.bMR(i,j),h),C.ak],e))}f.push(A.kE(A.dX(A.R(g,C.w,C.j,C.m,0,h,h),C.z,h,D.asO,h,h,C.bp),C.ac,!0))
f.push(new E.QO(i.w,i.gaTJ(),i.gaTI(),"Escreve uma mensagem",new B.bMS(i),h))
return A.cM(h,C.l6,A.B(f,C.w,C.j,C.m,0,C.v),!0,h)}}
B.afH.prototype={
ayh(d,e){var x=this.f,w=y.l
if(e){w=d.H($.CE().$1(x),w)
w=w.gv(w)}else{w=d.a1(0,$.CE().$1(x),w)
w=w.gv(w)}return w},
a9H(d){return this.ayh(d,!1)},
P(){return new B.afI()}}
B.afI.prototype={
al(){this.aH()
var x=this.a.d.w
if(x!=null)F.akG(x).b7(new B.cmz(this,x),y.P).eF(new B.cmA())},
gaRd(){switch(this.z){case"deposit_paid":var x="Sinal pago"
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
aRc(){var x=null
this.c.O(y.q).f.a4(A.cA(new B.Vt("Pagar",new B.cml(this),x),x,x,x,x,C.z,x,D.cdU,x,C.Y,x,x,x,x,x,x,x,x,x,x))},
uJ(d){return this.baa(d)},
baa(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$uJ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=u.a.d.w
if(l==null){x=1
break}x=3
return A.d(B.cFu(l),$async$uJ)
case 3:t=f
s=u.c
if(s==null){x=1
break}if(t==null){A.ai(s).aq("/bookings",null,y.X)
x=1
break}r=t.a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=A.j9(o,d)
x=4
return A.d(A.ai(s).aq("/pay",new A.op(q,n,p,r,o,new B.cmm(),null,!1,null,null,null,null,null,null,null),y.X),$async$uJ)
case 4:if(u.c==null){x=1
break}x=5
return A.d(B.akF(l),$async$uJ)
case 5:m=f
if(u.c!=null)u.q(new B.cmn(u,m))
case 1:return A.l(v,w)}})
return A.m($async$uJ,w)},
L7(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$L7=A.j(function(a0,a1){if(a0===1){t.push(a1)
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
return A.d(l.W("bookings.proposal_id",k).W("status","pending").jp(1).dA(),$async$L7)
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
l=l.a9H(s.gT())
g=(l==null?C.f6:l).lg(e)
l=s.c
l.toString
x=8
return A.d(A.cn(null,new B.cmt(s,f,e,n,o,m,h,g),!1,l,!0,!0,null,y.H),$async$L7)
case 8:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$L7,w)},
TZ(){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$TZ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:r=u.a.d.w
if(r==null){x=1
break}u.q(new B.cmo(u))
t=u.c
t.toString
x=3
return A.d(F.ZW(t,u.a.r,r,new B.cmp(u)),$async$TZ)
case 3:s=e
if(u.c==null){x=1
break}if(s)u.gT().ai($.zh())
u.q(new B.cmq(u,s))
case 1:return A.l(v,w)}})
return A.m($async$TZ,w)},
rD(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$rD=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:d=r.c
d.toString
i=r.gT()
h=i.a1(0,$.co(),y.v).b
x=3
return A.d(F.aTQ(d,h==null?null:h.a,"este parceiro"),$async$rD)
case 3:q=a3
if(q==null||r.c==null){x=1
break}r.q(new B.cmg(r))
u=5
d=r.a.d.w
d.toString
x=8
return A.d(F.aku(d,q),$async$rD)
case 8:if(r.c==null){s=[1]
x=6
break}i.ai($.zh())
i.ai($.jw())
r.q(new B.cmh(r))
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
o=A.C(h==null?null:J.h(h,"id"))
x=o!=null&&r.c!=null?14:15
break
case 14:d=r.c
d.toString
x=16
return A.d(F.akP(d,o,r.a.r),$async$rD)
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
case 17:d=d.a9H(i)
if(d==null)d=C.f6
x=20
return A.d(r.uJ(d.lg(m)),$async$rD)
case 20:x=18
break
case 19:x=21
return A.d(r.L7(),$async$rD)
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
return A.d(F.akG(d),$async$rD)
case 27:j=a3
if(J.o(j,"accepted")){if(r.c==null){s=[1]
x=6
break}i.ai($.zh())
i.ai($.jw())
r.q(new B.cmi(r))
r.aRc()
s=[1]
x=6
break}if(r.c!=null)r.q(new B.cmj(r))
case 26:d=r.c
if(d!=null){d=d.O(y.q).f
if(k.b==="P0001")i="Esta proposta j\xe1 n\xe3o est\xe1 dispon\xedvel \u2014 foi recusada ou expirou."
else if(k.b==="P0007")i="Este parceiro j\xe1 tem outra reserva confirmada nessa data. N\xe3o \xe9 poss\xedvel aceitar esta proposta."
else if(k.b==="P0010")i="Este parceiro j\xe1 n\xe3o est\xe1 dispon\xedvel para o vosso evento."
else i=k.b==="P0008"?"J\xe1 tens uma reserva com este parceiro. S\xf3 podes aceitar outra se essa for cancelada sem nada pago.":"N\xe3o foi poss\xedvel aceitar a proposta. Tenta novamente."
d.a4(A.cA(null,null,null,null,null,C.z,null,A.i(i,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}x=23
break
case 24:d=r.c
if(d!=null)d.O(y.q).f.a4(S.a8T)
case 23:s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.q(new B.cmk(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$rD,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.d,l=o.gT(),k=l.H($.co(),y.v).b,j=k==null?n:k.r,i=j==null?n:k.z.c+" \xb7 "+A.aN(j)+" "+C.co[A.ay(j)-1]+" "+A.aE(j)
l=o.a.ayh(l,!0)
if(l==null)l=C.f6
x=m.y
w=x==null
v=l.lg(w?0:x)
l=o.a.x
u=i==null
t=u?m.x:i
if(t==null)t="Proposta"
u=u?n:m.x
x=w?n:R.cWj(x,m.z,v)
w=m.z
w=w==null?n:new B.cmw(v).$1(w)
s=v>0?"Valores j\xe1 com a taxa de servi\xe7o":n
r=A.a([],y.j)
if(!o.x&&!o.y)r.push(new B.wM("Recusar",o.w?n:o.gbeH(),!1))
else r.push(new B.wM("Ver detalhe",new B.cmu(d),!1))
q=o.x
if(q&&o.z==="cancelled")r.push(new B.wM("Pedir nova proposta",o.a.e,!0))
else if(q)r.push(new B.wM(o.gaRd(),new B.cmv(o,v,d),!0))
else if(o.y)r.push(D.ajS)
else{q=o.w
p=q?"A aceitar\u2026":"Aceitar"
r.push(new B.wM(p,q?n:o.gaRb(),!0))}return G.cZi(r,w,"PROPOSTA",l,s,x,u,t)}}
B.aLe.prototype={
u(d){var x=null,w=A.a0(17),v=A.bV(D.anx,1.5)
return A.aU(A.D(C.L,A.i(this.c,x,x,x,x,C.du,x,x,x),C.r,x,x,new A.O(x,x,v,w,x,x,C.y),x,34,x,C.dB,x,x,x),this.d,x)}}
B.Yb.prototype={
u(d){var x=this,w=null,v=A.bN(A.D(w,w,C.r,w,w,new A.O(C.BM,w,w,A.a0(999),w,w,C.y),w,4,C.qc,w,w,w,40),w,w),u=x.r,t=A.i(u?"Paga para confirmar":"Reservado!",w,w,w,w,C.bu,w,w,w),s=A.i(u?"Falta pouco para o prazo. Paga para confirmar.":"Guard\xe1mos a tua reserva. Ainda n\xe3o \xe9 preciso pagar.",w,w,w,w,Q.If,w,w,w),r=A.a0(22),q=y.p,p=A.a([A.i(x.c,w,w,w,w,C.ap,w,w,w),C.be,A.i("Total "+A.aQ(x.d,!1),w,w,w,w,C.W,w,w,w)],q),o=x.e
if(o!=null)C.e.n(p,A.a([D.ar3,A.R(A.a([D.azP,A.i(A.aQ(o,!1),w,w,w,w,C.ap,w,w,w)],q),C.w,C.j,C.m,0,w,w)],q))
r=A.D(w,A.B(p,C.G,C.j,C.m,0,C.v),C.r,w,w,new A.O(C.ac,w,w,r,w,w,C.y),w,w,w,C.bg,w,w,w)
p=u?x.w:x.x
o=A.cu(C.A,w,w,C.t,w,w,C.af,w,w,L.a9O)
v=A.a([v,t,C.aF,s,C.aB,r,C.a3,A.aJ(A.bE(A.i(u?"Pagar "+A.aQ(x.f,!1):"OK",w,w,w,w,w,w,w,w),p,o),52,w),C.aa,A.cs(D.cga,w,w,x.x,w,A.ig(w,w,w,w,w,w,w,w,w,C.A,w,C.iW,w,w,w,w,w,w,w,L.a9X,w))],q)
if(!u)C.e.n(v,A.a([C.aF,D.chg],q))
return A.bC(!0,A.D(w,A.B(v,C.I,C.j,C.K,0,C.v),C.r,w,w,w,w,w,w,D.asU,w,w,w),w,C.a_,!1)}}
B.wM.prototype={}
B.Vt.prototype={
P(){return new B.ahD()},
byS(){return this.w.$0()}}
B.ahD.prototype={
b3N(){var x=this
if(x.d)return
x.q(new B.ctW(x))
x.a.byS()
x.c.O(y.q).f.aat(D.bYh)},
u(d){var x,w,v,u,t=this,s=null
A.as(d)
x=A.d6E(d)
w=A.cTa(d)
v=new B.ctZ(t,w,x)
u=A.ig(s,s,s,s,s,s,s,s,s,s,s,s,v.$0(),s,s,s,s,s,s,s,s)
v=v.$0()
v=u.bqy(new B.ctX(t,w).$0(),v)
u=t.d?s:t.gb3M()
return A.cs(A.i(t.a.r,s,s,s,s,s,s,s,s),s,s,u,s,v)}}
var z=a.updateTypes(["F<~>()","y(l3)","ke()","l3(@)","~(ke?,ke)","e(l3,y)","Yb(N)","~()","D7(c)"])
B.aZG.prototype={
$1(d){return this.a.a1u(y.b.a(d))},
$S:z+3}
B.aZH.prototype={
$1(d){var x=this.a.a
return x==null||d.r.hm(x)},
$S:z+1}
B.cGi.prototype={
$2(d,e){return d.H($.cPS(),y.R).p(0,e)},
$S:1352}
B.cFv.prototype={
$1(d){var x=J.a7(d)
if(J.o(x.h(d,"status"),"pending"))x=J.o(x.h(d,"type"),"deposit")||J.o(x.h(d,"type"),"final_payment")
else x=!1
return x},
$S:81}
B.cFs.prototype={
$2(d,e){return J.rG(this.a,new B.cFt(d,e))},
$S:306}
B.cFt.prototype={
$1(d){var x=J.a7(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:81}
B.bMJ.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.jd(0,C.cl,C.lq)},
$S:5}
B.bMI.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(K.PH(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(K.PS(s,new B.bMH(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.bMH.prototype={
$0(){var x=this.a
return x.gT().a1(0,$.alC().$1(x.a.d.a).gaX(),y.C).jW(0,this.b.a)},
$S:1}
B.bML.prototype={
$1(d){return d.a===this.a.a.d.e},
$S:86}
B.bMM.prototype={
$1(d){return d.w!=null},
$S:z+1}
B.bMN.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a5Y()},
$S:z+4}
B.bMO.prototype={
$0(){var x,w,v,u,t,s=this.a.gT(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("d_<1>"),x=new A.d_(x,w),x=new A.ak(x,x.gA(0),w.i("ak<aZ.E>")),w=w.i("aZ.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new E.B9(u,v==null?"":v,null,null))}}return E.a_3(this.b,s,!1,I.rB,r)},
$S:0}
B.bMQ.prototype={
$1(d){return!d.d},
$S:z+1}
B.bMP.prototype={
$2(d,e){var x,w=this,v=null,u=d.as
if(u!=null){x=d.at
if(x==null)x="file"
x=w.a.aoP(e,d,new E.QN(u,x,d.ax,e,v))
u=x}else if(d.w!=null){u=w.a
x=u.a.d
x=new B.afH(d,u.ga4W(),x.f,x.b,x.a,x.d,v)
u=x}else if(d.Q){u=d.e
u=A.dP(v,new E.zD(u==null?"":u,e,v,v),C.a2,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.a.ga4W(),v,v,v,v,v,v,!1,C.bd)}else{u=w.a
x=d.e
if(e)u=u.aoP(!0,d,new E.zD(x==null?"":x,!0,v,v))
else u=A.dP(v,new E.zD(x==null?"":x,!1,v,v),C.a2,!1,v,v,v,v,v,v,v,new B.bMK(u,w.b,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!1,C.bd)}return u},
$S:z+5}
B.bMK.prototype={
$0(){return P.wq(this.b,this.a.gT(),!1,null,null,I.rB,this.c.a)},
$S:0}
B.bMR.prototype={
$0(){return this.a.TQ(this.b)},
$S:0}
B.bMS.prototype={
$1(d){var x,w=this.a,v=w.gT()
w=v.a1(0,$.CH().$1("c:"+w.a.d.a).gaX(),y.M)
x=v.a1(0,$.b8(),y.V).b
v=x==null?null:x.b
return w.acK(C.f.D(v==null?"":v))},
$S:3}
B.cmz.prototype={
$1(d){return this.aEE(d)},
aEE(d){var x=0,w=A.n(y.P),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null||d==null){x=1
break}s.q(new B.cmx(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(B.akF(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.q(new B.cmy(s,t))
case 4:case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1353}
B.cmx.prototype={
$0(){var x=this.a,w=this.b,v=w==="accepted"
x.x=v
x.y=w!=="sent"&&!v},
$S:0}
B.cmy.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cmA.prototype={
$1(d){},
$S:14}
B.cml.prototype={
$0(){var x,w=this.a,v=w.a
v.toString
v=v.a9H(w.gT())
if(v==null)v=C.f6
x=w.a.d.y
return w.uJ(v.lg(x==null?0:x))},
$S:0}
B.cmm.prototype={
$1(d){return A.aq(d,!1).bJ()},
$S:110}
B.cmn.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cmt.prototype={
$1(d){var x,w=this,v=w.b.x
if(C.f.D(v==null?"":v).length===0)v="Reserva"
else{v.toString
v=C.f.D(v)}x=w.d?w.e:null
return new B.Yb(v,w.c,x,w.f,w.r,new B.cmr(w.a,d,w.w),new B.cms(d),null)},
$S:z+6}
B.cmr.prototype={
$0(){A.aq(this.b,!1).bJ()
this.a.uJ(this.c)},
$S:0}
B.cms.prototype={
$0(){return A.aq(this.a,!1).bJ()},
$S:0}
B.cmo.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cmp.prototype={
$1(d){var x=this.a
return x.gT().a1(0,$.alC().$1(x.a.w).gaX(),y.C).mk(d)},
$S:174}
B.cmq.prototype={
$0(){var x=this.a
x.w=!1
if(this.b)x.y=!0},
$S:0}
B.cmg.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cmh.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cmi.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cmj.prototype={
$0(){return this.a.y=!0},
$S:0}
B.cmk.prototype={
$0(){return this.a.w=!1},
$S:0}
B.cmw.prototype={
$1(d){return A.j9(d,this.a)},
$S:2}
B.cmu.prototype={
$0(){return A.ai(this.a).aq("/bookings",null,y.X)},
$S:0}
B.cmv.prototype={
$0(){var x=this.a,w=x.z
return w==null||w==="deposit_due"||w==="final_due"?x.uJ(this.b):A.ai(this.c).aq("/bookings",null,y.X)},
$S:0}
B.cC9.prototype={
$2(d,e){return this.aEX(d,e)},
aEX(d,e){var x=0,w=A.n(y.O),v,u=2,t=[],s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
q=$.T().b
q===$&&A.b()
x=7
return A.d(q.R("conversations").az(0,"partner_last_read_at").W("id",e).dA(),$async$$2)
case 7:s=g
q=s
r=A.C(q==null?null:J.h(q,"partner_last_read_at"))
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
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$2,w)},
$S:377}
B.ctW.prototype={
$0(){this.a.d=!0},
$S:0}
B.ctZ.prototype={
$0(){var x,w=this,v=w.a
v.a.toString
x=w.b.b
if(x!=null){if(x instanceof A.Cn)return x}else{x=w.c
x.gxb()
if(x.gxb() instanceof A.Cn)return y.E.a(x.gxb())}return A.nZ(new B.cu_(v,w.b,w.c))},
$S:1354}
B.cu_.prototype={
$1(d){var x,w=this
if(d.p(0,C.ay)){w.a.a.toString
x=w.b.c
return x==null?w.c.gMO():x}w.a.a.toString
x=w.b.b
return x==null?w.c.gxb():x},
$S:6}
B.ctX.prototype={
$0(){var x,w,v=this.a
v.a.toString
x=this.b
w=x.as
if(w instanceof A.Cn)return w
return A.nZ(new B.ctY(v,x))},
$S:1355}
B.ctY.prototype={
$1(d){var x,w=this
if(d.p(0,C.ay)){w.a.a.toString
x=w.b.at
return x==null?C.an:x}w.a.a.toString
x=w.b.as
return x==null?C.an:x},
$S:6};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dDy","djc",8)
var u
w(u=B.D7.prototype,"giK","d4",2)
v(u,"gNM","m6",0)
w(u=B.abC.prototype,"ga4W","Th",0)
w(u,"gaTJ","Ic",0)
w(u,"gaTI","Ib",0)
w(u=B.afI.prototype,"gbeH","TZ",0)
w(u,"gaRb","rD",0)
w(B.ahD.prototype,"gb3M","b3N",7)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.D7,A.fb)
w(A.bx,[B.aZG,B.aZH,B.cFv,B.cFt,B.bMJ,B.bML,B.bMM,B.bMQ,B.bMS,B.cmz,B.cmA,B.cmm,B.cmt,B.cmp,B.cmw,B.cu_,B.ctY])
w(A.cR,[B.cGi,B.cFs,B.bMN,B.bMP,B.cC9])
w(A.dD,[B.a0C,B.afH])
w(A.dy,[B.abC,B.afI])
w(A.bR,[B.bMI,B.bMH,B.bMO,B.bMK,B.bMR,B.cmx,B.cmy,B.cml,B.cmn,B.cmr,B.cms,B.cmo,B.cmq,B.cmg,B.cmh,B.cmi,B.cmj,B.cmk,B.cmu,B.cmv,B.ctW,B.ctZ,B.ctX])
w(A.L,[B.aLe,B.Yb])
x(B.wM,A.I)
x(B.Vt,A.K)
x(B.ahD,A.a_)})()
A.br(b.typeUniverse,JSON.parse('{"D7":{"fb":["ke"]},"a0C":{"K":[],"e":[],"f":[]},"afH":{"K":[],"e":[],"f":[]},"Yb":{"L":[],"e":[],"f":[]},"abC":{"a_":["a0C"]},"afI":{"a_":["afH"]},"aLe":{"L":[],"e":[],"f":[]},"Vt":{"K":[],"e":[],"f":[]},"ahD":{"a_":["Vt"]}}'))
var y=(function rtii(){var x=A.w
return{l:x("ax<f8>"),U:x("ax<ae?>"),D:x("ax<dQ?>"),Q:x("ax<AN?>"),V:x("cG"),y:x("l3"),C:x("D7"),n:x("ke"),v:x("ed"),B:x("F<dQ?>"),j:x("r<wM>"),t:x("r<l3>"),Y:x("r<B9>"),s:x("r<c>"),p:x("r<e>"),a:x("t<c>"),b:x("a4<c,@>"),P:x("by"),R:x("bL<c>"),N:x("c"),M:x("w2"),E:x("yw"),q:x("ds"),w:x("y"),z:x("@"),O:x("ae?"),g:x("t<@>?"),W:x("a4<@,@>?"),X:x("I?"),h:x("+(c,c,P,c)?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ajS=new B.wM("Indispon\xedvel",null,!0)
D.anx=new A.W(1,0.8392156862745098,0.8156862745098039,0.7607843137254902,C.C)
D.ar3=new A.kk(22,null,null,null,C.d6,null)
D.asO=new A.a2(16,0,16,8)
D.asU=new A.a2(16,12,16,18)
D.c9N=new A.E("Sinal para confirmar",null,C.W,null,null,null,null,null,null,null,null)
D.azP=new A.bT(1,C.ax,D.c9N,null)
D.bsS=x(["Posso visitar?","Pedir outra proposta","Obrigado!"],y.s)
D.bYh=new A.vT(0,"action")
D.c83=new A.E("N\xe3o foi poss\xedvel enviar a mensagem. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZr=new A.bI(D.c83,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.cdU=new A.E("Proposta aceite! Paga para confirmar.",null,null,null,null,null,null,null,null,null,null)
D.cga=new A.E("Pagar depois",null,null,null,null,null,null,null,null,null,null)
D.c5R=new A.M(!0,C.S,null,null,null,null,13,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.chg=new A.E("Avisamos-te 3 dias antes do prazo para pagares!",null,D.c5R,C.a5,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dS_","alC",()=>H.KN.$3$1(B.dDy(),y.C,y.n,y.N))
x($,"dSW","dha",()=>N.B6.$2$1(new B.cGi(),y.w,y.N))
x($,"dQL","dgf",()=>C.bU.hi(0,new B.cC9(),y.O,y.N))})()};
(a=>{a["7R3e06m66gkd2Q09moKs0kEUe34="]=a.current})($__dart_deferred_initializers__);