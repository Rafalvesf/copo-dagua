((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,I,Q,R,E,G,H,K,F,S,T,B={
df0(d){return new B.CM(d)},
CM:function CM(d){this.x=d
this.b=null},
aXR:function aXR(d){this.a=d},
aXS:function aXS(d){this.a=d},
cCE:function cCE(){},
cBQ(d){var x=0,w=A.n(y.h),v,u,t,s,r,q,p
var $async$cBQ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&A.b()
x=3
return A.d(p.P("bookings").aw(0,"partner_profiles(business_name), payments(id, type, status, amount)").W("proposal_id",d).dk(0,"created_at",!1).jm(1).dz(),$async$cBQ)
case 3:u=f
if(u==null){v=null
x=1
break}p=J.a7(u)
t=y.g.a(p.h(u,"payments"))
if(t==null)t=C.aj
t=J.d7(t,new B.cBR())
s=A.W(t,t.$ti.i("y.E"))
if(s.length===0){v=null
x=1
break}r=C.e.gM(s)
p=y.W.a(p.h(u,"partner_profiles"))
q=A.J(p==null?null:J.h(p,"business_name"))
if(q==null)q="Parceiro"
p=J.a7(r)
v=new A.ig([A.a_(p.h(r,"id")),A.a_(p.h(r,"type")),A.dp(p.h(r,"amount")),q])
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cBQ,w)},
ajt(d){var x=0,w=A.n(y.T),v,u,t,s,r,q,p,o,n
var $async$ajt=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(A.ajV(null,d),$async$ajt)
case 3:u=$.T().b
u===$&&A.b()
x=4
return A.d(u.P("bookings").aw(0,"status, total_amount, deposit_amount, payments(type, status)").W("proposal_id",d).dk(0,"created_at",!1).jm(1).dz(),$async$ajt)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a7(t)
s=A.J(u.h(t,"status"))
if(s==null)s=""
if(C.f.b3(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.g.a(u.h(t,"payments"))
q=new B.cBO(r==null?C.aj:r)
if(q.$2("final_payment","pending")){v="final_due"
x=1
break}if(q.$2("final_payment","paid")){v="paid"
x=1
break}if(s==="completed"){v="completed"
x=1
break}p=A.aL(u.h(t,"total_amount"))
o=p==null?null:p
if(o==null)o=0
if(o>0){u=A.aL(u.h(t,"deposit_amount"))
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
return A.m($async$ajt,w)},
cBR:function cBR(){},
cBO:function cBO(d){this.a=d},
cBP:function cBP(d,e){this.a=d
this.b=e},
df1(d){return new B.a_R(d,null)},
a_R:function a_R(d,e){this.d=d
this.a=e},
aaH:function aaH(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bJM:function bJM(d){this.a=d},
bJL:function bJL(d,e){this.a=d
this.b=e},
bJK:function bJK(d,e){this.a=d
this.b=e},
bJO:function bJO(d){this.a=d},
bJP:function bJP(){},
bJQ:function bJQ(d){this.a=d},
bJR:function bJR(d,e,f){this.a=d
this.b=e
this.c=f},
bJT:function bJT(){},
bJS:function bJS(d,e){this.a=d
this.b=e},
bJN:function bJN(d,e,f){this.a=d
this.b=e
this.c=f},
bJU:function bJU(d,e){this.a=d
this.b=e},
bJV:function bJV(d){this.a=d},
aeA:function aeA(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.a=j},
aeB:function aeB(){var _=this
_.y=_.x=_.w=!1
_.z=null
_.d=$
_.c=_.a=null},
cj1:function cj1(d,e){this.a=d
this.b=e},
cj_:function cj_(d,e){this.a=d
this.b=e},
cj0:function cj0(d,e){this.a=d
this.b=e},
cj2:function cj2(){},
ciO:function ciO(d){this.a=d},
ciP:function ciP(){},
ciQ:function ciQ(d,e){this.a=d
this.b=e},
ciW:function ciW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ciU:function ciU(d,e,f){this.a=d
this.b=e
this.c=f},
ciV:function ciV(d){this.a=d},
ciR:function ciR(d){this.a=d},
ciS:function ciS(d){this.a=d},
ciT:function ciT(d,e){this.a=d
this.b=e},
ciJ:function ciJ(d){this.a=d},
ciK:function ciK(d){this.a=d},
ciL:function ciL(d){this.a=d},
ciM:function ciM(d){this.a=d},
ciN:function ciN(d){this.a=d},
ciZ:function ciZ(d){this.a=d},
ciX:function ciX(d){this.a=d},
ciY:function ciY(d,e,f){this.a=d
this.b=e
this.c=f},
cyI:function cyI(){},
aJJ:function aJJ(d,e,f){this.c=d
this.d=e
this.a=f},
Xu:function Xu(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
wu:function wu(d,e,f){this.a=d
this.b=e
this.c=f},
UN:function UN(d,e,f){this.r=d
this.w=e
this.a=f},
agu:function agu(){this.d=!1
this.c=this.a=null},
cq9:function cq9(d){this.a=d},
cqc:function cqc(d,e,f){this.a=d
this.b=e
this.c=f},
cqd:function cqd(d,e,f){this.a=d
this.b=e
this.c=f},
cqa:function cqa(d,e){this.a=d
this.b=e},
cqb:function cqb(d,e){this.a=d
this.b=e}},D,L
J=c[1]
A=c[0]
C=c[2]
M=c[159]
N=c[223]
O=c[153]
P=c[146]
I=c[222]
Q=c[220]
R=c[110]
E=c[114]
G=c[79]
H=c[218]
K=c[128]
F=c[71]
S=c[185]
T=c[81]
B=a.updateHolder(c[60],B)
D=c[219]
L=c[221]
B.CM.prototype={
d1(){A.jd(this.gNm(this),y.H)
return H.Ks},
m_(d){return this.bvt(0)},
bvt(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$m_=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:l={}
t.sa2(0,t.ga2(0).il(!0))
q=$.T()
p=q.b
p===$&&A.b()
o=t.x
x=2
return A.d(p.P("messages").cj(0).W("conversation_id",o).dk(0,"created_at",!0),$async$m_)
case 2:n=f
l.a=null
v=4
x=7
return A.d(q.b.P("conversations").aw(0,"couple_hidden_at").W("id",o).dz(),$async$m_)
case 7:s=f
q=s
r=A.J(q==null?null:J.h(q,"couple_hidden_at"))
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
case 6:l=J.d3(n,new B.aXR(t),y.y).cH(0,new B.aXS(l))
l=A.W(l,l.$ti.i("y.E"))
t.sa2(0,new G.kd(!1,l))
v=9
l=$.T().b
l===$&&A.b()
q=y.z
x=12
return A.d(l.aU("mark_conversation_read",A.R(["p_conversation_id",o],y.N,q),q),$async$m_)
case 12:A.eK(t).ah($.cUj())
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
return A.m($async$m_,w)},
me(d){return this.aHQ(d)},
aHQ(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$me=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=C.f.D(d)
if(p.length===0){x=1
break}t=$.T()
s=t.b
s===$&&A.b()
s=s.P("messages")
t=t.b.gbE().e.a
r=y.N
x=3
return A.d(s.dd(0,A.R(["conversation_id",u.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cj(0).dN(0),$async$me)
case 3:q=f
r=u.ga2(0)
t=A.W(u.ga2(0).b,y.y)
t.push(u.a0W(q))
u.sa2(0,r.ES(t))
case 1:return A.l(v,w)}})
return A.m($async$me,w)},
mP(d){return this.aHL(d)},
aHL(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mP=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.T()
s=t.b
s===$&&A.b()
s=s.P("messages")
t=t.b.gbE().e.a
x=2
return A.d(s.dd(0,A.R(["conversation_id",v.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cj(0).dN(0),$async$mP)
case 2:u=f
t=v.ga2(0)
s=A.W(v.ga2(0).b,y.y)
s.push(v.a0W(u))
v.sa2(0,t.ES(s))
return A.l(null,w)}})
return A.m($async$mP,w)},
jR(d,e){return this.bqt(0,e)},
bqt(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jR=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&A.b()
x=2
return A.d(p.aU("delete_message",A.R(["p_message_id",e],y.N,y.z),y.H),$async$jR)
case 2:p=v.ga2(0)
u=A.a([],y.t)
for(t=v.ga2(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.G)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa2(0,p.ES(u))
return A.l(null,w)}})
return A.m($async$jR,w)},
a0W(d){var x,w=J.a7(d),v=A.a_(w.h(d,"id")),u=A.a_(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.J(w.h(d,"body")),r=A.J(w.h(d,"attachment_url")),q=A.J(w.h(d,"attachment_type")),p=A.J(w.h(d,"attachment_name")),o=A.d8(A.a_(w.h(d,"created_at"))),n=A.J(w.h(d,"proposal_id")),m=A.J(w.h(d,"proposal_title")),l=A.aL(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aL(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dR(w.h(d,"is_quote_request_notice"))
return G.cVs(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a_R.prototype={
R(){return new B.aaH(new A.aI(C.ao,$.ad()),A.oq(null,0,null,null))}}
B.aaH.prototype={
m(){var x=this.w
x.Z$=$.ad()
x.X$=0
this.x.m()
this.a8()},
a5m(){$.aB.k4$.push(new B.bJM(this))},
SO(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$SO=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.d
x=3
return A.d(u.gT().a1(0,$.yQ().$1(t.f).gej(),y.K),$async$SO)
case 3:s=e
t=u.c
if(t==null||s==null){x=1
break}O.Tn(t,s,!1)
case 1:return A.l(v,w)}})
return A.m($async$SO,w)},
Tk(d){return this.bch(d)},
bch(d){var x=0,w=A.n(y.H),v=this
var $async$Tk=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.w.sbx(0,d)
x=2
return A.d(v.HX(),$async$Tk)
case 2:return A.l(null,w)}})
return A.m($async$Tk,w)},
HX(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$HX=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p=s.w
o=p.a.a
if(J.aTW(o).length===0){x=1
break}p.jt(0,C.jL)
r=s.gT()
r.a1(0,$.Cm().$1("c:"+s.a.d.a).gaV(),y.M).fT(0)
u=4
x=7
return A.d(r.a1(0,$.akp().$1(s.a.d.a).gaV(),y.C).me(o),$async$HX)
case 7:s.a5m()
u=2
x=6
break
case 4:u=3
n=t.pop()
if(s.c==null){x=1
break}p.sbx(0,o)
s.c.O(y.q).f.a4(D.bWl)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HX,w)},
HW(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$HW=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(E.rn(q),$async$HW)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gT().a1(0,$.akp().$1(s.a.d.a).gaV(),y.C).mP(r),$async$HW)
case 8:s.a5m()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.O(y.q).f.a4(H.a7X)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HW,w)},
ao9(d,e,f){var x=null
if(!d)return f
return A.dQ(x,f,C.a2,!1,x,x,x,x,x,x,x,new B.bJL(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bc)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gT(),f=$.akp(),e=y.n,d=g.G(f.$1(i.a.d.a),e),a0=g.G($.dcb().$1(i.a.d.a),y.U),a1=a0.gv(a0)
a0=i.a
a0.toString
a0=g.G($.yQ().$1(a0.d.f),y.D)
x=a0.gv(a0)
w=g.G($.cm(),y.B).c
v=A.eS(new A.a3(w,new B.bJO(i),A.a8(w).i("a3<1>")))
a0=v==null
u=a0?h:v.r
if(a0)t=h
else{a0=A.a([v.gcu()],y.s)
if(u!=null)a0.push(""+A.aN(u)+" "+C.co[A.ay(u)-1]+" "+A.aG(u))
t=C.e.a3(a0," \xb7 ")}a0=d.b
s=C.e.c4(a0,new B.bJP())
r=i.a.d.f
q=g.G($.dd6().$1(r),y.v)
p=g.G($.ZC().$1(r),y.Q)
p=p.gv(p)
o=M.cS6(p==null?h:p.c)
n=o==null?h:o[0].toLowerCase()+C.f.bD(o,1)
m=E.cSx(g.G($.Cm().$1("c:"+i.a.d.a),y.a))
g.pt(f.$1(i.a.d.a),new B.bJQ(i),e)
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
e=i.ga4l()
g=A.bH(!1,E.cMM(g.d,h,g.b,e,new B.bJR(i,a2,d),f,q),h,C.a0,!1)
if(d.a&&a0.length===0)f=C.br
else{if(s)f="Proposta recebida"
else f=x==null?h:A.eS(x.c)
i.a.toString
p=t==null?16:82
a0=G.d5E(new B.bJS(i,a2),new B.bJT(),a0,a1)
l=A.a8(a0).i("cY<1>")
a0=A.W(new A.cY(a0,l),l.i("b1.E"))
f=new T.Qk(t,f,"Ver perfil",e,A.d5(a0,i.x,new A.a0(16,p,16,16),h,h,!0,C.a3,!1),h)}e=y.p
f=A.a([g,A.a6(A.l_(f,C.aa,!0),1),A.l_(new E.Ql(m,h),C.aa,!0)],e)
i.a.toString
g=A.a([],e)
for(k=0;k<3;++k){j=D.brd[k]
C.e.p(g,A.a([new B.aJJ(j,new B.bJU(i,j),h),C.al],e))}f.push(A.l_(A.e4(A.Q(g,C.x,C.j,C.p,0,h,h),C.z,h,D.arw,h,C.bI),C.aa,!0))
f.push(new E.Qj(i.w,i.gaSR(),i.gaSQ(),"Escreve uma mensagem",new B.bJV(i),h))
return A.cP(h,C.kZ,A.C(f,C.x,C.j,C.p,0,C.v),!0,h)}}
B.aeA.prototype={
axB(d,e){var x=this.f,w=y.l
if(e){w=d.G($.Cj().$1(x),w)
w=w.gv(w)}else{w=d.a1(0,$.Cj().$1(x),w)
w=w.gv(w)}return w},
a98(d){return this.axB(d,!1)},
R(){return new B.aeB()}}
B.aeB.prototype={
am(){this.aJ()
var x=this.a.d.w
if(x!=null)F.aju(x).b7(new B.cj1(this,x),y.P).eD(new B.cj2())},
gaQn(){switch(this.z){case"deposit_paid":var x="Sinal pago"
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
aQm(){var x=null
this.c.O(y.q).f.a4(A.cz(new B.UN("Pagar",new B.ciO(this),x),x,x,x,x,C.z,x,D.caC,x,C.W,x,x,x,x,x,x,x,x,x,x))},
uD(d){return this.b8X(d)},
b8X(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$uD=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=u.a.d.w
if(l==null){x=1
break}x=3
return A.d(B.cBQ(l),$async$uD)
case 3:t=f
s=u.c
if(s==null){x=1
break}if(t==null){A.aj(s).az("/bookings",null,y.X)
x=1
break}r=t.a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=A.j8(o,d)
x=4
return A.d(A.aj(s).az("/pay",new A.pn(q,n,p,r,o,new B.ciP(),null,!1,null,null,null,null,null,null,null),y.X),$async$uD)
case 4:if(u.c==null){x=1
break}x=5
return A.d(B.ajt(l),$async$uD)
case 5:m=f
if(u.c!=null)u.q(new B.ciQ(u,m))
case 1:return A.l(v,w)}})
return A.m($async$uD,w)},
KM(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$KM=A.j(function(a0,a1){if(a0===1){t.push(a1)
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
l=l.P("payments").aw(0,"due_at, bookings!inner(proposal_id)")
k=f.w
k.toString
x=7
return A.d(l.W("bookings.proposal_id",k).W("status","pending").jm(1).dz(),$async$KM)
case 7:q=a1
k=q
p=k==null?null:J.h(k,"due_at")
if(typeof p=="string")r=A.ej(p)
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
i=l==null?null:C.i.aS(l.d0(new A.af(Date.now(),0,!1)).a,864e8)
h=n||i==null||i<=6
l=s.a
l.toString
l=l.a98(s.gT())
g=(l==null?C.f0:l).lc(e)
l=s.c
l.toString
x=8
return A.d(A.ck(null,new B.ciW(s,f,e,n,o,m,h,g),!1,l,!0,!0,null,y.H),$async$KM)
case 8:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$KM,w)},
Tt(){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Tt=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:r=u.a.d.w
if(r==null){x=1
break}u.q(new B.ciR(u))
t=u.c
t.toString
x=3
return A.d(F.Zb(t,u.a.r,r,new B.ciS(u)),$async$Tt)
case 3:s=e
if(u.c==null){x=1
break}if(s)u.gT().ah($.yU())
u.q(new B.ciT(u,s))
case 1:return A.l(v,w)}})
return A.m($async$Tt,w)},
rv(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$rv=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:d=r.c
d.toString
i=r.gT()
h=i.a1(0,$.cm(),y.B).b
x=3
return A.d(F.aS9(d,h==null?null:h.a,"este parceiro"),$async$rv)
case 3:q=a3
if(q==null||r.c==null){x=1
break}r.q(new B.ciJ(r))
u=5
d=r.a.d.w
d.toString
x=8
return A.d(F.ajj(d,q),$async$rv)
case 8:if(r.c==null){s=[1]
x=6
break}i.ah($.yU())
i.ah($.jt())
r.q(new B.ciK(r))
u=10
d=$.T().b
d===$&&A.b()
d=d.P("bookings").aw(0,"id")
h=r.a.d.w
h.toString
x=13
return A.d(d.W("proposal_id",h).dz(),$async$rv)
case 13:p=a3
h=p
o=A.J(h==null?null:J.h(h,"id"))
x=o!=null&&r.c!=null?14:15
break
case 14:d=r.c
d.toString
x=16
return A.d(F.ajD(d,o,r.a.r),$async$rv)
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
case 17:d=d.a98(i)
if(d==null)d=C.f0
x=20
return A.d(r.uD(d.lc(m)),$async$rv)
case 20:x=18
break
case 19:x=21
return A.d(r.KM(),$async$rv)
case 21:case 18:s.push(7)
x=6
break
case 5:u=4
a1=t.pop()
d=A.a9(a1)
x=d instanceof A.cS?22:24
break
case 22:k=d
x=k.b==="P0001"?25:26
break
case 25:d=r.a.d.w
d.toString
x=27
return A.d(F.aju(d),$async$rv)
case 27:j=a3
if(J.o(j,"accepted")){if(r.c==null){s=[1]
x=6
break}i.ah($.yU())
i.ah($.jt())
r.q(new B.ciL(r))
r.aQm()
s=[1]
x=6
break}if(r.c!=null)r.q(new B.ciM(r))
case 26:d=r.c
if(d!=null){d=d.O(y.q).f
if(k.b==="P0001")i="Esta proposta j\xe1 n\xe3o est\xe1 dispon\xedvel \u2014 foi recusada ou expirou."
else if(k.b==="P0007")i="Este parceiro j\xe1 tem outra reserva confirmada nessa data. N\xe3o \xe9 poss\xedvel aceitar esta proposta."
else if(k.b==="P0010")i="Este parceiro j\xe1 n\xe3o est\xe1 dispon\xedvel para o vosso evento."
else i=k.b==="P0008"?"J\xe1 tens uma reserva com este parceiro. S\xf3 podes aceitar outra se essa for cancelada sem nada pago.":"N\xe3o foi poss\xedvel aceitar a proposta. Tenta novamente."
d.a4(A.cz(null,null,null,null,null,C.z,null,A.i(i,null,null,null,null,null,null,null,null),null,C.W,null,null,null,null,null,null,null,null,null,null))}x=23
break
case 24:d=r.c
if(d!=null)d.O(y.q).f.a4(S.a7Q)
case 23:s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.q(new B.ciN(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$rv,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.d,l=o.gT(),k=l.G($.cm(),y.B).b,j=k==null?n:k.r,i=j==null?n:k.z.c+" \xb7 "+A.aN(j)+" "+C.co[A.ay(j)-1]+" "+A.aG(j)
l=o.a.axB(l,!0)
if(l==null)l=C.f0
x=m.y
w=x==null
v=l.lc(w?0:x)
l=o.a.x
u=i==null
t=u?m.x:i
if(t==null)t="Proposta"
u=u?n:m.x
x=w?n:R.cSv(x,m.z,v)
w=m.z
w=w==null?n:new B.ciZ(v).$1(w)
s=v>0?"Valores j\xe1 com a taxa de servi\xe7o":n
r=A.a([],y.j)
if(!o.x&&!o.y)r.push(new B.wu("Recusar",o.w?n:o.gbdk(),!1))
else r.push(new B.wu("Ver detalhe",new B.ciX(d),!1))
q=o.x
if(q&&o.z==="cancelled")r.push(new B.wu("Pedir nova proposta",o.a.e,!0))
else if(q)r.push(new B.wu(o.gaQn(),new B.ciY(o,v,d),!0))
else if(o.y)r.push(D.aiv)
else{q=o.w
p=q?"A aceitar\u2026":"Aceitar"
r.push(new B.wu(p,q?n:o.gaQl(),!0))}return G.cVt(r,w,"PROPOSTA",l,s,x,u,t)}}
B.aJJ.prototype={
u(d){var x=null,w=A.a2(17),v=A.bU(D.amg,1.5)
return A.aT(A.B(C.K,A.i(this.c,x,x,x,x,C.ds,x,x,x),C.r,x,x,new A.O(x,x,v,w,x,x,C.y),x,34,x,C.dA,x,x,x),this.d,x)}}
B.Xu.prototype={
u(d){var x=this,w=null,v=A.bT(A.B(w,w,C.r,w,w,new A.O(C.Be,w,w,A.a2(999),w,w,C.y),w,4,C.pX,w,w,w,40),w,w),u=x.r,t=A.i(u?"Paga para confirmar":"Reservado!",w,w,w,w,C.by,w,w,w),s=A.i(u?"Falta pouco para o prazo. Paga para confirmar.":"Guard\xe1mos a tua reserva. Ainda n\xe3o \xe9 preciso pagar.",w,w,w,w,Q.Hy,w,w,w),r=A.a2(22),q=y.p,p=A.a([A.i(x.c,w,w,w,w,C.ap,w,w,w),C.bd,A.i("Total "+A.aP(x.d,!1),w,w,w,w,C.Y,w,w,w)],q),o=x.e
if(o!=null)C.e.p(p,A.a([D.apG,A.Q(A.a([D.ayr,A.i(A.aP(o,!1),w,w,w,w,C.ap,w,w,w)],q),C.x,C.j,C.p,0,w,w)],q))
r=A.B(w,A.C(p,C.I,C.j,C.p,0,C.v),C.r,w,w,new A.O(C.aa,w,w,r,w,w,C.y),w,w,w,C.bg,w,w,w)
p=u?x.w:x.x
o=A.cv(C.A,w,w,C.u,w,w,C.ah,w,w,L.a8J)
v=A.a([v,t,C.aF,s,C.aB,r,C.a4,A.aO(A.bM(A.i(u?"Pagar "+A.aP(x.f,!1):"OK",w,w,w,w,w,w,w,w),p,o),52,w),C.af,A.cr(D.ccO,w,w,x.x,w,A.id(w,w,w,w,w,w,w,w,w,C.A,w,C.iQ,w,w,w,w,w,w,w,L.a8S,w))],q)
if(!u)C.e.p(v,A.a([C.aF,D.cdU],q))
return A.bH(!0,A.B(w,A.C(v,C.J,C.j,C.P,0,C.v),C.r,w,w,w,w,w,w,D.arD,w,w,w),w,C.a0,!1)}}
B.wu.prototype={}
B.UN.prototype={
R(){return new B.agu()},
bxp(){return this.w.$0()}}
B.agu.prototype={
b2L(){var x=this
if(x.d)return
x.q(new B.cq9(x))
x.a.bxp()
x.c.O(y.q).f.a9U(D.bVc)},
u(d){var x,w,v,u,t=this,s=null
A.aq(d)
x=A.d2H(d)
w=A.cPl(d)
v=new B.cqc(t,w,x)
u=A.id(s,s,s,s,s,s,s,s,s,s,s,s,v.$0(),s,s,s,s,s,s,s,s)
v=v.$0()
v=u.bp6(new B.cqa(t,w).$0(),v)
u=t.d?s:t.gb2K()
return A.cr(A.i(t.a.r,s,s,s,s,s,s,s,s),s,s,u,s,v)}}
var z=a.updateTypes(["F<~>()","z(kZ)","kd()","kZ(@)","~(kd?,kd)","e(kZ,z)","Xu(N)","~()","CM(c)"])
B.aXR.prototype={
$1(d){return this.a.a0W(y.b.a(d))},
$S:z+3}
B.aXS.prototype={
$1(d){var x=this.a.a
return x==null||d.r.hx(x)},
$S:z+1}
B.cCE.prototype={
$2(d,e){return d.G($.cLY(),y.R).n(0,e)},
$S:1332}
B.cBR.prototype={
$1(d){var x=J.a7(d)
if(J.o(x.h(d,"status"),"pending"))x=J.o(x.h(d,"type"),"deposit")||J.o(x.h(d,"type"),"final_payment")
else x=!1
return x},
$S:75}
B.cBO.prototype={
$2(d,e){return J.rr(this.a,new B.cBP(d,e))},
$S:329}
B.cBP.prototype={
$1(d){var x=J.a7(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:75}
B.bJM.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.ja(0,C.cn,C.lh)},
$S:5}
B.bJL.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(K.Pc(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(K.Po(s,new B.bJK(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.bJK.prototype={
$0(){var x=this.a
return x.gT().a1(0,$.akp().$1(x.a.d.a).gaV(),y.C).jR(0,this.b.a)},
$S:2}
B.bJO.prototype={
$1(d){return d.a===this.a.a.d.e},
$S:86}
B.bJP.prototype={
$1(d){return d.w!=null},
$S:z+1}
B.bJQ.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a5m()},
$S:z+4}
B.bJR.prototype={
$0(){var x,w,v,u,t,s=this.a.gT(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("cY<1>"),x=new A.cY(x,w),x=new A.ak(x,x.gA(0),w.i("ak<b1.E>")),w=w.i("b1.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new E.AO(u,v==null?"":v,null,null))}}return E.Zj(this.b,s,!1,I.rk,r)},
$S:0}
B.bJT.prototype={
$1(d){return!d.d},
$S:z+1}
B.bJS.prototype={
$2(d,e){var x,w=this,v=null,u=d.as
if(u!=null){x=d.at
if(x==null)x="file"
x=w.a.ao9(e,d,new E.Qi(u,x,d.ax,e,v))
u=x}else if(d.w!=null){u=w.a
x=u.a.d
x=new B.aeA(d,u.ga4l(),x.f,x.b,x.a,x.d,v)
u=x}else if(d.Q){u=d.e
u=A.dQ(v,new E.zf(u==null?"":u,e,v,v),C.a2,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.a.ga4l(),v,v,v,v,v,v,!1,C.bc)}else{u=w.a
x=d.e
if(e)u=u.ao9(!0,d,new E.zf(x==null?"":x,!0,v,v))
else u=A.dQ(v,new E.zf(x==null?"":x,!1,v,v),C.a2,!1,v,v,v,v,v,v,v,new B.bJN(u,w.b,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!1,C.bc)}return u},
$S:z+5}
B.bJN.prototype={
$0(){return P.w9(this.b,this.a.gT(),!1,null,null,I.rk,this.c.a)},
$S:0}
B.bJU.prototype={
$0(){return this.a.Tk(this.b)},
$S:0}
B.bJV.prototype={
$1(d){var x,w=this.a,v=w.gT()
w=v.a1(0,$.Cm().$1("c:"+w.a.d.a).gaV(),y.M)
x=v.a1(0,$.b8(),y.V).b
v=x==null?null:x.b
return w.ac9(C.f.D(v==null?"":v))},
$S:3}
B.cj1.prototype={
$1(d){return this.aDS(d)},
aDS(d){var x=0,w=A.n(y.P),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null||d==null){x=1
break}s.q(new B.cj_(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(B.ajt(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.q(new B.cj0(s,t))
case 4:case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1333}
B.cj_.prototype={
$0(){var x=this.a,w=this.b,v=w==="accepted"
x.x=v
x.y=w!=="sent"&&!v},
$S:0}
B.cj0.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cj2.prototype={
$1(d){},
$S:14}
B.ciO.prototype={
$0(){var x,w=this.a,v=w.a
v.toString
v=v.a98(w.gT())
if(v==null)v=C.f0
x=w.a.d.y
return w.uD(v.lc(x==null?0:x))},
$S:0}
B.ciP.prototype={
$1(d){return A.as(d,!1).bJ()},
$S:108}
B.ciQ.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.ciW.prototype={
$1(d){var x,w=this,v=w.b.x
if(C.f.D(v==null?"":v).length===0)v="Reserva"
else{v.toString
v=C.f.D(v)}x=w.d?w.e:null
return new B.Xu(v,w.c,x,w.f,w.r,new B.ciU(w.a,d,w.w),new B.ciV(d),null)},
$S:z+6}
B.ciU.prototype={
$0(){A.as(this.b,!1).bJ()
this.a.uD(this.c)},
$S:0}
B.ciV.prototype={
$0(){return A.as(this.a,!1).bJ()},
$S:0}
B.ciR.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ciS.prototype={
$1(d){var x=this.a
return x.gT().a1(0,$.akp().$1(x.a.w).gaV(),y.C).me(d)},
$S:186}
B.ciT.prototype={
$0(){var x=this.a
x.w=!1
if(this.b)x.y=!0},
$S:0}
B.ciJ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ciK.prototype={
$0(){return this.a.x=!0},
$S:0}
B.ciL.prototype={
$0(){return this.a.x=!0},
$S:0}
B.ciM.prototype={
$0(){return this.a.y=!0},
$S:0}
B.ciN.prototype={
$0(){return this.a.w=!1},
$S:0}
B.ciZ.prototype={
$1(d){return A.j8(d,this.a)},
$S:1}
B.ciX.prototype={
$0(){return A.aj(this.a).az("/bookings",null,y.X)},
$S:0}
B.ciY.prototype={
$0(){var x=this.a,w=x.z
return w==null||w==="deposit_due"||w==="final_due"?x.uD(this.b):A.aj(this.c).az("/bookings",null,y.X)},
$S:0}
B.cyI.prototype={
$2(d,e){return this.aEa(d,e)},
aEa(d,e){var x=0,w=A.n(y.O),v,u=2,t=[],s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
q=$.T().b
q===$&&A.b()
x=7
return A.d(q.P("conversations").aw(0,"partner_last_read_at").W("id",e).dz(),$async$$2)
case 7:s=g
q=s
r=A.J(q==null?null:J.h(q,"partner_last_read_at"))
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
$S:497}
B.cq9.prototype={
$0(){this.a.d=!0},
$S:0}
B.cqc.prototype={
$0(){var x,w=this,v=w.a
v.a.toString
x=w.b.b
if(x!=null){if(x instanceof A.C1)return x}else{x=w.c
x.gx3()
if(x.gx3() instanceof A.C1)return y.E.a(x.gx3())}return A.nO(new B.cqd(v,w.b,w.c))},
$S:1334}
B.cqd.prototype={
$1(d){var x,w=this
if(d.n(0,C.av)){w.a.a.toString
x=w.b.c
return x==null?w.c.gMq():x}w.a.a.toString
x=w.b.b
return x==null?w.c.gx3():x},
$S:6}
B.cqa.prototype={
$0(){var x,w,v=this.a
v.a.toString
x=this.b
w=x.as
if(w instanceof A.C1)return w
return A.nO(new B.cqb(v,x))},
$S:1335}
B.cqb.prototype={
$1(d){var x,w=this
if(d.n(0,C.av)){w.a.a.toString
x=w.b.at
return x==null?C.ak:x}w.a.a.toString
x=w.b.as
return x==null?C.ak:x},
$S:6};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dyY","df0",8)
var u
w(u=B.CM.prototype,"giF","d1",2)
v(u,"gNm","m_",0)
w(u=B.aaH.prototype,"ga4l","SO",0)
w(u,"gaSR","HX",0)
w(u,"gaSQ","HW",0)
w(u=B.aeB.prototype,"gbdk","Tt",0)
w(u,"gaQl","rv",0)
w(B.agu.prototype,"gb2K","b2L",7)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CM,A.f5)
w(A.bx,[B.aXR,B.aXS,B.cBR,B.cBP,B.bJM,B.bJO,B.bJP,B.bJT,B.bJV,B.cj1,B.cj2,B.ciP,B.ciW,B.ciS,B.ciZ,B.cqd,B.cqb])
w(A.cT,[B.cCE,B.cBO,B.bJQ,B.bJS,B.cyI])
w(A.dD,[B.a_R,B.aeA])
w(A.dv,[B.aaH,B.aeB])
w(A.bR,[B.bJL,B.bJK,B.bJR,B.bJN,B.bJU,B.cj_,B.cj0,B.ciO,B.ciQ,B.ciU,B.ciV,B.ciR,B.ciT,B.ciJ,B.ciK,B.ciL,B.ciM,B.ciN,B.ciX,B.ciY,B.cq9,B.cqc,B.cqa])
w(A.K,[B.aJJ,B.Xu])
x(B.wu,A.L)
x(B.UN,A.I)
x(B.agu,A.a1)})()
A.bw(b.typeUniverse,JSON.parse('{"CM":{"f5":["kd"]},"a_R":{"I":[],"e":[],"f":[]},"aeA":{"I":[],"e":[],"f":[]},"Xu":{"K":[],"e":[],"f":[]},"aaH":{"a1":["a_R"]},"aeB":{"a1":["aeA"]},"aJJ":{"K":[],"e":[],"f":[]},"UN":{"I":[],"e":[],"f":[]},"agu":{"a1":["UN"]}}'))
var y=(function rtii(){var x=A.x
return{l:x("ax<f2>"),U:x("ax<af?>"),D:x("ax<dN?>"),Q:x("ax<Ap?>"),V:x("cG"),y:x("kZ"),C:x("CM"),n:x("kd"),K:x("F<dN?>"),j:x("t<wu>"),t:x("t<kZ>"),Y:x("t<AO>"),s:x("t<c>"),p:x("t<e>"),a:x("r<c>"),b:x("a5<c,@>"),P:x("bA"),R:x("bI<c>"),N:x("c"),M:x("vO"),B:x("ea"),E:x("y8"),q:x("dA"),v:x("z"),z:x("@"),O:x("af?"),g:x("r<@>?"),W:x("a5<@,@>?"),X:x("L?"),h:x("+(c,c,P,c)?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aiv=new B.wu("Indispon\xedvel",null,!0)
D.amg=new A.U(1,0.8392156862745098,0.8156862745098039,0.7607843137254902,C.C)
D.apG=new A.kk(22,null,null,null,C.d5,null)
D.arw=new A.a0(16,0,16,8)
D.arD=new A.a0(16,12,16,18)
D.c6P=new A.D("Sinal para confirmar",null,C.Y,null,null,null,null,null,null,null,null)
D.ayr=new A.bV(1,C.ay,D.c6P,null)
D.brd=x(["Posso visitar?","Pedir outra proposta","Obrigado!"],y.s)
D.bVc=new A.vE(0,"action")
D.c53=new A.D("N\xe3o foi poss\xedvel enviar a mensagem. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bWl=new A.bJ(D.c53,null,null,null,null,null,null,null,null,null,null,null,null,C.W,!1,null,null,null,C.z,null)
D.caC=new A.D("Proposta aceite! Paga para confirmar.",null,null,null,null,null,null,null,null,null,null)
D.ccO=new A.D("Pagar depois",null,null,null,null,null,null,null,null,null,null)
D.c2U=new A.M(!0,C.T,null,null,null,null,13,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cdU=new A.D("Avisamos-te 3 dias antes do prazo para pagares!",null,D.c2U,C.a5,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dNf","akp",()=>H.K1.$3$1(B.dyY(),y.C,y.n,y.N))
x($,"dO5","dd6",()=>N.AA.$2$1(new B.cCE(),y.v,y.N))
x($,"dM0","dcb",()=>C.bT.hf(0,new B.cyI(),y.O,y.N))})()};
(a=>{a["ZEARbHr2Gz2Ue9Jx0JEFMbm0EZY="]=a.current})($__dart_deferred_initializers__);