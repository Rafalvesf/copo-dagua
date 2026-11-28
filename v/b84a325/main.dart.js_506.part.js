((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,I,Q,R,E,G,H,K,F,S,T,B={
djc(d){return new B.D8(d)},
D8:function D8(d){this.x=d
this.b=null},
aZH:function aZH(d){this.a=d},
aZI:function aZI(d){this.a=d},
cGk:function cGk(){},
cFw(d){var x=0,w=A.n(y.h),v,u,t,s,r,q,p
var $async$cFw=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&A.b()
x=3
return A.d(p.R("bookings").az(0,"partner_profiles(business_name), payments(id, type, status, amount)").W("proposal_id",d).dl(0,"created_at",!1).jo(1).dA(),$async$cFw)
case 3:u=f
if(u==null){v=null
x=1
break}p=J.a7(u)
t=y.g.a(p.h(u,"payments"))
if(t==null)t=C.ak
t=J.dc(t,new B.cFx())
s=A.V(t,t.$ti.i("z.E"))
if(s.length===0){v=null
x=1
break}r=C.e.gM(s)
p=y.W.a(p.h(u,"partner_profiles"))
q=A.C(p==null?null:J.h(p,"business_name"))
if(q==null)q="Parceiro"
p=J.a7(r)
v=new A.k2([A.a1(p.h(r,"id")),A.a1(p.h(r,"type")),A.dt(p.h(r,"amount")),q])
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cFw,w)},
akG(d){var x=0,w=A.n(y.T),v,u,t,s,r,q,p,o,n
var $async$akG=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(A.al7(null,d),$async$akG)
case 3:u=$.T().b
u===$&&A.b()
x=4
return A.d(u.R("bookings").az(0,"status, total_amount, deposit_amount, payments(type, status)").W("proposal_id",d).dl(0,"created_at",!1).jo(1).dA(),$async$akG)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a7(t)
s=A.C(u.h(t,"status"))
if(s==null)s=""
if(C.f.b4(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.g.a(u.h(t,"payments"))
q=new B.cFu(r==null?C.ak:r)
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
return A.m($async$akG,w)},
cFx:function cFx(){},
cFu:function cFu(d){this.a=d},
cFv:function cFv(d,e){this.a=d
this.b=e},
djd(d){return new B.a0A(d,null)},
a0A:function a0A(d,e){this.d=d
this.a=e},
abD:function abD(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bMK:function bMK(d){this.a=d},
bMJ:function bMJ(d,e){this.a=d
this.b=e},
bMI:function bMI(d,e){this.a=d
this.b=e},
bMM:function bMM(d){this.a=d},
bMN:function bMN(){},
bMO:function bMO(d){this.a=d},
bMP:function bMP(d,e,f){this.a=d
this.b=e
this.c=f},
bMR:function bMR(){},
bMQ:function bMQ(d,e){this.a=d
this.b=e},
bML:function bML(d,e,f){this.a=d
this.b=e
this.c=f},
bMS:function bMS(d,e){this.a=d
this.b=e},
bMT:function bMT(d){this.a=d},
afI:function afI(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.a=j},
afJ:function afJ(){var _=this
_.y=_.x=_.w=!1
_.z=null
_.d=$
_.c=_.a=null},
cmA:function cmA(d,e){this.a=d
this.b=e},
cmy:function cmy(d,e){this.a=d
this.b=e},
cmz:function cmz(d,e){this.a=d
this.b=e},
cmB:function cmB(){},
cmm:function cmm(d){this.a=d},
cmn:function cmn(){},
cmo:function cmo(d,e){this.a=d
this.b=e},
cmu:function cmu(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cms:function cms(d,e,f){this.a=d
this.b=e
this.c=f},
cmt:function cmt(d){this.a=d},
cmp:function cmp(d){this.a=d},
cmq:function cmq(d){this.a=d},
cmr:function cmr(d,e){this.a=d
this.b=e},
cmh:function cmh(d){this.a=d},
cmi:function cmi(d){this.a=d},
cmj:function cmj(d){this.a=d},
cmk:function cmk(d){this.a=d},
cml:function cml(d){this.a=d},
cmx:function cmx(d){this.a=d},
cmv:function cmv(d){this.a=d},
cmw:function cmw(d,e,f){this.a=d
this.b=e
this.c=f},
cCb:function cCb(){},
aLf:function aLf(d,e,f){this.c=d
this.d=e
this.a=f},
Y9:function Y9(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
wO:function wO(d,e,f){this.a=d
this.b=e
this.c=f},
Vq:function Vq(d,e,f){this.r=d
this.w=e
this.a=f},
ahE:function ahE(){this.d=!1
this.c=this.a=null},
ctY:function ctY(d){this.a=d},
cu0:function cu0(d,e,f){this.a=d
this.b=e
this.c=f},
cu1:function cu1(d,e,f){this.a=d
this.b=e
this.c=f},
ctZ:function ctZ(d,e){this.a=d
this.b=e},
cu_:function cu_(d,e){this.a=d
this.b=e}},D,L,U
J=c[1]
A=c[0]
C=c[2]
M=c[166]
N=c[232]
O=c[159]
P=c[150]
I=c[231]
Q=c[229]
R=c[113]
E=c[116]
G=c[81]
H=c[226]
K=c[131]
F=c[73]
S=c[193]
T=c[83]
B=a.updateHolder(c[62],B)
D=c[227]
L=c[230]
U=c[228]
B.D8.prototype={
d4(){A.jf(this.gND(this),y.H)
return H.La},
m6(d){return this.bwS(0)},
bwS(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$m6=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:l={}
t.sa2(0,t.ga2(0).im(!0))
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
case 6:l=J.d3(n,new B.aZH(t),y.y).cI(0,new B.aZI(l))
l=A.V(l,l.$ti.i("z.E"))
t.sa2(0,new G.kf(!1,l))
v=9
l=$.T().b
l===$&&A.b()
q=y.z
x=12
return A.d(l.aT("mark_conversation_read",A.S(["p_conversation_id",o],y.N,q),q),$async$m6)
case 12:A.eP(t).ai($.cYb())
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
mk(d){return this.aIw(d)},
aIw(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
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
t.push(u.a1m(q))
u.sa2(0,r.F2(t))
case 1:return A.l(v,w)}})
return A.m($async$mk,w)},
mT(d){return this.aIr(d)},
aIr(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mT=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.T()
s=t.b
s===$&&A.b()
s=s.R("messages")
t=t.b.gbE().e.a
x=2
return A.d(s.de(0,A.S(["conversation_id",v.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cj(0).dP(0),$async$mT)
case 2:u=f
t=v.ga2(0)
s=A.V(v.ga2(0).b,y.y)
s.push(v.a1m(u))
v.sa2(0,t.F2(s))
return A.l(null,w)}})
return A.m($async$mT,w)},
jV(d,e){return this.brR(0,e)},
brR(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jV=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&A.b()
x=2
return A.d(p.aT("delete_message",A.S(["p_message_id",e],y.N,y.z),y.H),$async$jV)
case 2:p=v.ga2(0)
u=A.a([],y.t)
for(t=v.ga2(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.H)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa2(0,p.F2(u))
return A.l(null,w)}})
return A.m($async$jV,w)},
a1m(d){var x,w=J.a7(d),v=A.a1(w.h(d,"id")),u=A.a1(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.C(w.h(d,"body")),r=A.C(w.h(d,"attachment_url")),q=A.C(w.h(d,"attachment_type")),p=A.C(w.h(d,"attachment_name")),o=A.d9(A.a1(w.h(d,"created_at"))),n=A.C(w.h(d,"proposal_id")),m=A.C(w.h(d,"proposal_title")),l=A.aK(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aK(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dU(w.h(d,"is_quote_request_notice"))
return G.cZj(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a0A.prototype={
P(){return new B.abD(new A.aI(C.ao,$.ac()),A.oB(null,0,null,null))}}
B.abD.prototype={
m(){var x=this.w
x.Z$=$.ac()
x.X$=0
this.x.m()
this.a7()},
a5Q(){$.az.k4$.push(new B.bMK(this))},
T7(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$T7=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.d
x=3
return A.d(u.gT().a1(0,$.zg().$1(t.f).gel(),y.B),$async$T7)
case 3:s=e
t=u.c
if(t==null||s==null){x=1
break}O.TU(t,s,!1)
case 1:return A.l(v,w)}})
return A.m($async$T7,w)},
TG(d){return this.bdx(d)},
bdx(d){var x=0,w=A.n(y.H),v=this
var $async$TG=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.w.sbx(0,d)
x=2
return A.d(v.I5(),$async$TG)
case 2:return A.l(null,w)}})
return A.m($async$TG,w)},
I5(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$I5=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p=s.w
o=p.a.a
if(J.aVF(o).length===0){x=1
break}p.j4(0,C.iY)
r=s.gT()
r.a1(0,$.CI().$1("c:"+s.a.d.a).gaX(),y.M).d2(0)
u=4
x=7
return A.d(r.a1(0,$.alD().$1(s.a.d.a).gaX(),y.C).mk(o),$async$I5)
case 7:s.a5Q()
u=2
x=6
break
case 4:u=3
n=t.pop()
if(s.c==null){x=1
break}p.sbx(0,o)
s.c.O(y.q).f.a4(D.bZA)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$I5,w)},
I4(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$I4=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(E.rC(q),$async$I4)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gT().a1(0,$.alD().$1(s.a.d.a).gaX(),y.C).mT(r),$async$I4)
case 8:s.a5Q()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.O(y.q).f.a4(H.a90)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$I4,w)},
aoI(d,e,f){var x=null
if(!d)return f
return A.dP(x,f,C.a2,!1,x,x,x,x,x,x,x,new B.bMJ(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bd)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gT(),f=$.alD(),e=y.n,d=g.H(f.$1(i.a.d.a),e),a0=g.H($.dgf().$1(i.a.d.a),y.U),a1=a0.gv(a0)
a0=i.a
a0.toString
a0=g.H($.zg().$1(a0.d.f),y.D)
x=a0.gv(a0)
w=g.H($.co(),y.v).c
v=A.eW(new A.a5(w,new B.bMM(i),A.a8(w).i("a5<1>")))
a0=v==null
u=a0?h:v.r
if(a0)t=h
else{a0=A.a([v.gcu()],y.s)
if(u!=null)a0.push(""+A.aN(u)+" "+C.co[A.ay(u)-1]+" "+A.aE(u))
t=C.e.a3(a0," \xb7 ")}a0=d.b
s=C.e.c4(a0,new B.bMN())
r=i.a.d.f
q=g.H($.dha().$1(r),y.w)
p=g.H($.a_l().$1(r),y.Q)
p=p.gv(p)
o=M.cVX(p==null?h:p.c)
n=o==null?h:o[0].toLowerCase()+C.f.bD(o,1)
m=E.cWn(g.H($.CI().$1("c:"+i.a.d.a),y.a))
g.pt(f.$1(i.a.d.a),new B.bMO(i),e)
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
e=i.ga4O()
g=A.bC(!1,E.cQI(g.d,h,g.b,e,new B.bMP(i,a2,d),f,q),h,C.a_,!1)
if(d.a&&a0.length===0)f=U.yH
else{if(s)f="Proposta recebida"
else f=x==null?h:A.eW(x.c)
i.a.toString
p=t==null?16:82
a0=G.d9C(new B.bMQ(i,a2),new B.bMR(),a0,a1)
l=A.a8(a0).i("d_<1>")
a0=A.V(new A.d_(a0,l),l.i("aZ.E"))
f=new T.QN(t,f,"Ver perfil",e,A.cZ(a0,i.x,new A.a2(16,p,16,16),h,h,!0,C.a1,!1),h)}e=y.p
f=A.a([g,A.a6(A.kF(f,C.ac,!0),1),A.kF(new E.QO(m,h),C.ac,!0)],e)
i.a.toString
g=A.a([],e)
for(k=0;k<3;++k){j=D.bsV[k]
C.e.n(g,A.a([new B.aLf(j,new B.bMS(i,j),h),C.ai],e))}f.push(A.kF(A.dX(A.Q(g,C.w,C.j,C.m,0,h,h),C.z,h,D.asR,h,h,C.bp),C.ac,!0))
f.push(new E.QM(i.w,i.gaTC(),i.gaTB(),"Escreve uma mensagem",new B.bMT(i),h))
return A.cM(h,C.l3,A.B(f,C.w,C.j,C.m,0,C.v),!0,h)}}
B.afI.prototype={
aya(d,e){var x=this.f,w=y.l
if(e){w=d.H($.CF().$1(x),w)
w=w.gv(w)}else{w=d.a1(0,$.CF().$1(x),w)
w=w.gv(w)}return w},
a9z(d){return this.aya(d,!1)},
P(){return new B.afJ()}}
B.afJ.prototype={
al(){this.aH()
var x=this.a.d.w
if(x!=null)F.akH(x).b7(new B.cmA(this,x),y.P).eE(new B.cmB())},
gaR6(){switch(this.z){case"deposit_paid":var x="Sinal pago"
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
aR5(){var x=null
this.c.O(y.q).f.a4(A.cA(new B.Vq("Pagar",new B.cmm(this),x),x,x,x,x,C.z,x,D.ce2,x,C.Y,x,x,x,x,x,x,x,x,x,x))},
uH(d){return this.ba3(d)},
ba3(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$uH=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=u.a.d.w
if(l==null){x=1
break}x=3
return A.d(B.cFw(l),$async$uH)
case 3:t=f
s=u.c
if(s==null){x=1
break}if(t==null){A.ai(s).ar("/bookings",null,y.X)
x=1
break}r=t.a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=A.j9(o,d)
x=4
return A.d(A.ai(s).ar("/pay",new A.op(q,n,p,r,o,new B.cmn(),null,!1,null,null,null,null,null,null,null),y.X),$async$uH)
case 4:if(u.c==null){x=1
break}x=5
return A.d(B.akG(l),$async$uH)
case 5:m=f
if(u.c!=null)u.q(new B.cmo(u,m))
case 1:return A.l(v,w)}})
return A.m($async$uH,w)},
L0(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$L0=A.j(function(a0,a1){if(a0===1){t.push(a1)
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
return A.d(l.W("bookings.proposal_id",k).W("status","pending").jo(1).dA(),$async$L0)
case 7:q=a1
k=q
p=k==null?null:J.h(k,"due_at")
if(typeof p=="string")r=A.dL(p)
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
l=l.a9z(s.gT())
g=(l==null?C.f6:l).lg(e)
l=s.c
l.toString
x=8
return A.d(A.cn(null,new B.cmu(s,f,e,n,o,m,h,g),!1,l,!0,!0,null,y.H),$async$L0)
case 8:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$L0,w)},
TP(){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$TP=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:r=u.a.d.w
if(r==null){x=1
break}u.q(new B.cmp(u))
t=u.c
t.toString
x=3
return A.d(F.ZU(t,u.a.r,r,new B.cmq(u)),$async$TP)
case 3:s=e
if(u.c==null){x=1
break}if(s)u.gT().ai($.zk())
u.q(new B.cmr(u,s))
case 1:return A.l(v,w)}})
return A.m($async$TP,w)},
rB(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$rB=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:d=r.c
d.toString
i=r.gT()
h=i.a1(0,$.co(),y.v).b
x=3
return A.d(F.aTR(d,h==null?null:h.a,"este parceiro"),$async$rB)
case 3:q=a3
if(q==null||r.c==null){x=1
break}r.q(new B.cmh(r))
u=5
d=r.a.d.w
d.toString
x=8
return A.d(F.akv(d,q),$async$rB)
case 8:if(r.c==null){s=[1]
x=6
break}i.ai($.zk())
i.ai($.jw())
r.q(new B.cmi(r))
u=10
d=$.T().b
d===$&&A.b()
d=d.R("bookings").az(0,"id")
h=r.a.d.w
h.toString
x=13
return A.d(d.W("proposal_id",h).dA(),$async$rB)
case 13:p=a3
h=p
o=A.C(h==null?null:J.h(h,"id"))
x=o!=null&&r.c!=null?14:15
break
case 14:d=r.c
d.toString
x=16
return A.d(F.akQ(d,o,r.a.r),$async$rB)
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
case 17:d=d.a9z(i)
if(d==null)d=C.f6
x=20
return A.d(r.uH(d.lg(m)),$async$rB)
case 20:x=18
break
case 19:x=21
return A.d(r.L0(),$async$rB)
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
return A.d(F.akH(d),$async$rB)
case 27:j=a3
if(J.o(j,"accepted")){if(r.c==null){s=[1]
x=6
break}i.ai($.zk())
i.ai($.jw())
r.q(new B.cmj(r))
r.aR5()
s=[1]
x=6
break}if(r.c!=null)r.q(new B.cmk(r))
case 26:d=r.c
if(d!=null){d=d.O(y.q).f
if(k.b==="P0001")i="Esta proposta j\xe1 n\xe3o est\xe1 dispon\xedvel \u2014 foi recusada ou expirou."
else if(k.b==="P0007")i="Este parceiro j\xe1 tem outra reserva confirmada nessa data. N\xe3o \xe9 poss\xedvel aceitar esta proposta."
else if(k.b==="P0010")i="Este parceiro j\xe1 n\xe3o est\xe1 dispon\xedvel para o vosso evento."
else i=k.b==="P0008"?"J\xe1 tens uma reserva com este parceiro. S\xf3 podes aceitar outra se essa for cancelada sem nada pago.":"N\xe3o foi poss\xedvel aceitar a proposta. Tenta novamente."
d.a4(A.cA(null,null,null,null,null,C.z,null,A.i(i,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}x=23
break
case 24:d=r.c
if(d!=null)d.O(y.q).f.a4(S.a8U)
case 23:s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.q(new B.cml(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$rB,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.d,l=o.gT(),k=l.H($.co(),y.v).b,j=k==null?n:k.r,i=j==null?n:k.z.c+" \xb7 "+A.aN(j)+" "+C.co[A.ay(j)-1]+" "+A.aE(j)
l=o.a.aya(l,!0)
if(l==null)l=C.f6
x=m.y
w=x==null
v=l.lg(w?0:x)
l=o.a.x
u=i==null
t=u?m.x:i
if(t==null)t="Proposta"
u=u?n:m.x
x=w?n:R.cWl(x,m.z,v)
w=m.z
w=w==null?n:new B.cmx(v).$1(w)
s=v>0?"Valores j\xe1 com a taxa de servi\xe7o":n
r=A.a([],y.j)
if(!o.x&&!o.y)r.push(new B.wO("Recusar",o.w?n:o.gbeA(),!1))
else r.push(new B.wO("Ver detalhe",new B.cmv(d),!1))
q=o.x
if(q&&o.z==="cancelled")r.push(new B.wO("Pedir nova proposta",o.a.e,!0))
else if(q)r.push(new B.wO(o.gaR6(),new B.cmw(o,v,d),!0))
else if(o.y)r.push(D.ajV)
else{q=o.w
p=q?"A aceitar\u2026":"Aceitar"
r.push(new B.wO(p,q?n:o.gaR4(),!0))}return G.cZk(r,w,"PROPOSTA",l,s,x,u,t)}}
B.aLf.prototype={
u(d){var x=null,w=A.a0(17),v=A.bV(D.anA,1.5)
return A.aU(A.D(C.L,A.i(this.c,x,x,x,x,C.dt,x,x,x),C.r,x,x,new A.O(x,x,v,w,x,x,C.y),x,34,x,C.dA,x,x,x),this.d,x)}}
B.Y9.prototype={
u(d){var x=this,w=null,v=A.bN(A.D(w,w,C.r,w,w,new A.O(C.BP,w,w,A.a0(999),w,w,C.y),w,4,C.qc,w,w,w,40),w,w),u=x.r,t=A.i(u?"Paga para confirmar":"Reservado!",w,w,w,w,C.bu,w,w,w),s=A.i(u?"Falta pouco para o prazo. Paga para confirmar.":"Guard\xe1mos a tua reserva. Ainda n\xe3o \xe9 preciso pagar.",w,w,w,w,Q.Id,w,w,w),r=A.a0(22),q=y.p,p=A.a([A.i(x.c,w,w,w,w,C.ap,w,w,w),C.be,A.i("Total "+A.aQ(x.d,!1),w,w,w,w,C.W,w,w,w)],q),o=x.e
if(o!=null)C.e.n(p,A.a([D.ar6,A.Q(A.a([D.azR,A.i(A.aQ(o,!1),w,w,w,w,C.ap,w,w,w)],q),C.w,C.j,C.m,0,w,w)],q))
r=A.D(w,A.B(p,C.G,C.j,C.m,0,C.v),C.r,w,w,new A.O(C.ac,w,w,r,w,w,C.y),w,w,w,C.bg,w,w,w)
p=u?x.w:x.x
o=A.cu(C.A,w,w,C.t,w,w,C.af,w,w,L.a9P)
v=A.a([v,t,C.aF,s,C.aB,r,C.a3,A.aJ(A.bD(A.i(u?"Pagar "+A.aQ(x.f,!1):"OK",w,w,w,w,w,w,w,w),p,o),52,w),C.aa,A.cs(D.cgj,w,w,x.x,w,A.ig(w,w,w,w,w,w,w,w,w,C.A,w,C.iU,w,w,w,w,w,w,w,L.a9Y,w))],q)
if(!u)C.e.n(v,A.a([C.aF,D.chp],q))
return A.bC(!0,A.D(w,A.B(v,C.I,C.j,C.K,0,C.v),C.r,w,w,w,w,w,w,D.asX,w,w,w),w,C.a_,!1)}}
B.wO.prototype={}
B.Vq.prototype={
P(){return new B.ahE()},
byN(){return this.w.$0()}}
B.ahE.prototype={
b3F(){var x=this
if(x.d)return
x.q(new B.ctY(x))
x.a.byN()
x.c.O(y.q).f.aal(D.bYq)},
u(d){var x,w,v,u,t=this,s=null
A.as(d)
x=A.d6G(d)
w=A.cTc(d)
v=new B.cu0(t,w,x)
u=A.ig(s,s,s,s,s,s,s,s,s,s,s,s,v.$0(),s,s,s,s,s,s,s,s)
v=v.$0()
v=u.bqr(new B.ctZ(t,w).$0(),v)
u=t.d?s:t.gb3E()
return A.cs(A.i(t.a.r,s,s,s,s,s,s,s,s),s,s,u,s,v)}}
var z=a.updateTypes(["F<~>()","y(l4)","kf()","l4(@)","~(kf?,kf)","e(l4,y)","Y9(N)","~()","D8(c)"])
B.aZH.prototype={
$1(d){return this.a.a1m(y.b.a(d))},
$S:z+3}
B.aZI.prototype={
$1(d){var x=this.a.a
return x==null||d.r.hk(x)},
$S:z+1}
B.cGk.prototype={
$2(d,e){return d.H($.cPU(),y.R).p(0,e)},
$S:1353}
B.cFx.prototype={
$1(d){var x=J.a7(d)
if(J.o(x.h(d,"status"),"pending"))x=J.o(x.h(d,"type"),"deposit")||J.o(x.h(d,"type"),"final_payment")
else x=!1
return x},
$S:78}
B.cFu.prototype={
$2(d,e){return J.rG(this.a,new B.cFv(d,e))},
$S:399}
B.cFv.prototype={
$1(d){var x=J.a7(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:78}
B.bMK.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.jc(0,C.cl,C.ln)},
$S:6}
B.bMJ.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(K.PF(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(K.PQ(s,new B.bMI(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.bMI.prototype={
$0(){var x=this.a
return x.gT().a1(0,$.alD().$1(x.a.d.a).gaX(),y.C).jV(0,this.b.a)},
$S:1}
B.bMM.prototype={
$1(d){return d.a===this.a.a.d.e},
$S:93}
B.bMN.prototype={
$1(d){return d.w!=null},
$S:z+1}
B.bMO.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a5Q()},
$S:z+4}
B.bMP.prototype={
$0(){var x,w,v,u,t,s=this.a.gT(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("d_<1>"),x=new A.d_(x,w),x=new A.ak(x,x.gA(0),w.i("ak<aZ.E>")),w=w.i("aZ.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new E.Bb(u,v==null?"":v,null,null))}}return E.a_1(this.b,s,!1,I.rB,r)},
$S:0}
B.bMR.prototype={
$1(d){return!d.d},
$S:z+1}
B.bMQ.prototype={
$2(d,e){var x,w=this,v=null,u=d.as
if(u!=null){x=d.at
if(x==null)x="file"
x=w.a.aoI(e,d,new E.QL(u,x,d.ax,e,v))
u=x}else if(d.w!=null){u=w.a
x=u.a.d
x=new B.afI(d,u.ga4O(),x.f,x.b,x.a,x.d,v)
u=x}else if(d.Q){u=d.e
u=A.dP(v,new E.zG(u==null?"":u,e,v,v),C.a2,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.a.ga4O(),v,v,v,v,v,v,!1,C.bd)}else{u=w.a
x=d.e
if(e)u=u.aoI(!0,d,new E.zG(x==null?"":x,!0,v,v))
else u=A.dP(v,new E.zG(x==null?"":x,!1,v,v),C.a2,!1,v,v,v,v,v,v,v,new B.bML(u,w.b,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!1,C.bd)}return u},
$S:z+5}
B.bML.prototype={
$0(){return P.ws(this.b,this.a.gT(),!1,null,null,I.rB,this.c.a)},
$S:0}
B.bMS.prototype={
$0(){return this.a.TG(this.b)},
$S:0}
B.bMT.prototype={
$1(d){var x,w=this.a,v=w.gT()
w=v.a1(0,$.CI().$1("c:"+w.a.d.a).gaX(),y.M)
x=v.a1(0,$.b8(),y.V).b
v=x==null?null:x.b
return w.acF(C.f.D(v==null?"":v))},
$S:3}
B.cmA.prototype={
$1(d){return this.aEx(d)},
aEx(d){var x=0,w=A.n(y.P),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null||d==null){x=1
break}s.q(new B.cmy(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(B.akG(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.q(new B.cmz(s,t))
case 4:case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1354}
B.cmy.prototype={
$0(){var x=this.a,w=this.b,v=w==="accepted"
x.x=v
x.y=w!=="sent"&&!v},
$S:0}
B.cmz.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cmB.prototype={
$1(d){},
$S:14}
B.cmm.prototype={
$0(){var x,w=this.a,v=w.a
v.toString
v=v.a9z(w.gT())
if(v==null)v=C.f6
x=w.a.d.y
return w.uH(v.lg(x==null?0:x))},
$S:0}
B.cmn.prototype={
$1(d){return A.aq(d,!1).bJ()},
$S:110}
B.cmo.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cmu.prototype={
$1(d){var x,w=this,v=w.b.x
if(C.f.D(v==null?"":v).length===0)v="Reserva"
else{v.toString
v=C.f.D(v)}x=w.d?w.e:null
return new B.Y9(v,w.c,x,w.f,w.r,new B.cms(w.a,d,w.w),new B.cmt(d),null)},
$S:z+6}
B.cms.prototype={
$0(){A.aq(this.b,!1).bJ()
this.a.uH(this.c)},
$S:0}
B.cmt.prototype={
$0(){return A.aq(this.a,!1).bJ()},
$S:0}
B.cmp.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cmq.prototype={
$1(d){var x=this.a
return x.gT().a1(0,$.alD().$1(x.a.w).gaX(),y.C).mk(d)},
$S:181}
B.cmr.prototype={
$0(){var x=this.a
x.w=!1
if(this.b)x.y=!0},
$S:0}
B.cmh.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cmi.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cmj.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cmk.prototype={
$0(){return this.a.y=!0},
$S:0}
B.cml.prototype={
$0(){return this.a.w=!1},
$S:0}
B.cmx.prototype={
$1(d){return A.j9(d,this.a)},
$S:2}
B.cmv.prototype={
$0(){return A.ai(this.a).ar("/bookings",null,y.X)},
$S:0}
B.cmw.prototype={
$0(){var x=this.a,w=x.z
return w==null||w==="deposit_due"||w==="final_due"?x.uH(this.b):A.ai(this.c).ar("/bookings",null,y.X)},
$S:0}
B.cCb.prototype={
$2(d,e){return this.aEQ(d,e)},
aEQ(d,e){var x=0,w=A.n(y.O),v,u=2,t=[],s,r,q,p,o
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
$S:456}
B.ctY.prototype={
$0(){this.a.d=!0},
$S:0}
B.cu0.prototype={
$0(){var x,w=this,v=w.a
v.a.toString
x=w.b.b
if(x!=null){if(x instanceof A.Co)return x}else{x=w.c
x.gx9()
if(x.gx9() instanceof A.Co)return y.E.a(x.gx9())}return A.nY(new B.cu1(v,w.b,w.c))},
$S:1355}
B.cu1.prototype={
$1(d){var x,w=this
if(d.p(0,C.ay)){w.a.a.toString
x=w.b.c
return x==null?w.c.gMF():x}w.a.a.toString
x=w.b.b
return x==null?w.c.gx9():x},
$S:5}
B.ctZ.prototype={
$0(){var x,w,v=this.a
v.a.toString
x=this.b
w=x.as
if(w instanceof A.Co)return w
return A.nY(new B.cu_(v,x))},
$S:1356}
B.cu_.prototype={
$1(d){var x,w=this
if(d.p(0,C.ay)){w.a.a.toString
x=w.b.at
return x==null?C.an:x}w.a.a.toString
x=w.b.as
return x==null?C.an:x},
$S:5};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dDx","djc",8)
var u
w(u=B.D8.prototype,"giJ","d4",2)
v(u,"gND","m6",0)
w(u=B.abD.prototype,"ga4O","T7",0)
w(u,"gaTC","I5",0)
w(u,"gaTB","I4",0)
w(u=B.afJ.prototype,"gbeA","TP",0)
w(u,"gaR4","rB",0)
w(B.ahE.prototype,"gb3E","b3F",7)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.D8,A.fb)
w(A.bx,[B.aZH,B.aZI,B.cFx,B.cFv,B.bMK,B.bMM,B.bMN,B.bMR,B.bMT,B.cmA,B.cmB,B.cmn,B.cmu,B.cmq,B.cmx,B.cu1,B.cu_])
w(A.cR,[B.cGk,B.cFu,B.bMO,B.bMQ,B.cCb])
w(A.dD,[B.a0A,B.afI])
w(A.dy,[B.abD,B.afJ])
w(A.bR,[B.bMJ,B.bMI,B.bMP,B.bML,B.bMS,B.cmy,B.cmz,B.cmm,B.cmo,B.cms,B.cmt,B.cmp,B.cmr,B.cmh,B.cmi,B.cmj,B.cmk,B.cml,B.cmv,B.cmw,B.ctY,B.cu0,B.ctZ])
w(A.L,[B.aLf,B.Y9])
x(B.wO,A.I)
x(B.Vq,A.K)
x(B.ahE,A.a_)})()
A.bq(b.typeUniverse,JSON.parse('{"D8":{"fb":["kf"]},"a0A":{"K":[],"e":[],"f":[]},"afI":{"K":[],"e":[],"f":[]},"Y9":{"L":[],"e":[],"f":[]},"abD":{"a_":["a0A"]},"afJ":{"a_":["afI"]},"aLf":{"L":[],"e":[],"f":[]},"Vq":{"K":[],"e":[],"f":[]},"ahE":{"a_":["Vq"]}}'))
var y=(function rtii(){var x=A.w
return{l:x("ax<f8>"),U:x("ax<ae?>"),D:x("ax<dQ?>"),Q:x("ax<AP?>"),V:x("cG"),y:x("l4"),C:x("D8"),n:x("kf"),v:x("ed"),B:x("F<dQ?>"),j:x("r<wO>"),t:x("r<l4>"),Y:x("r<Bb>"),s:x("r<c>"),p:x("r<e>"),a:x("t<c>"),b:x("a4<c,@>"),P:x("by"),R:x("bL<c>"),N:x("c"),M:x("w4"),E:x("yz"),q:x("ds"),w:x("y"),z:x("@"),O:x("ae?"),g:x("t<@>?"),W:x("a4<@,@>?"),X:x("I?"),h:x("+(c,c,P,c)?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ajV=new B.wO("Indispon\xedvel",null,!0)
D.anA=new A.W(1,0.8392156862745098,0.8156862745098039,0.7607843137254902,C.C)
D.ar6=new A.kl(22,null,null,null,C.d5,null)
D.asR=new A.a2(16,0,16,8)
D.asX=new A.a2(16,12,16,18)
D.c9W=new A.E("Sinal para confirmar",null,C.W,null,null,null,null,null,null,null,null)
D.azR=new A.bT(1,C.ax,D.c9W,null)
D.bsV=x(["Posso visitar?","Pedir outra proposta","Obrigado!"],y.s)
D.bYq=new A.vV(0,"action")
D.c8c=new A.E("N\xe3o foi poss\xedvel enviar a mensagem. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bZA=new A.bI(D.c8c,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.ce2=new A.E("Proposta aceite! Paga para confirmar.",null,null,null,null,null,null,null,null,null,null)
D.cgj=new A.E("Pagar depois",null,null,null,null,null,null,null,null,null,null)
D.c6_=new A.M(!0,C.S,null,null,null,null,13,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.chp=new A.E("Avisamos-te 3 dias antes do prazo para pagares!",null,D.c6_,C.a5,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dS_","alD",()=>H.KL.$3$1(B.dDx(),y.C,y.n,y.N))
x($,"dSW","dha",()=>N.B9.$2$1(new B.cGk(),y.w,y.N))
x($,"dQL","dgf",()=>C.bU.hg(0,new B.cCb(),y.O,y.N))})()};
(a=>{a["ZDNEYlBjMkXN9fN2AZwJ/GVQmio="]=a.current})($__dart_deferred_initializers__);