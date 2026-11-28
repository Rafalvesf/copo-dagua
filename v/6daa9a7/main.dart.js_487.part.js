((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,I,Q,R,E,G,H,K,F,S,T,B={
dfh(d){return new B.CQ(d)},
CQ:function CQ(d){this.x=d
this.b=null},
aY5:function aY5(d){this.a=d},
aY6:function aY6(d){this.a=d},
cD0:function cD0(){},
cCc(d){var x=0,w=A.n(y.h),v,u,t,s,r,q,p
var $async$cCc=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&A.b()
x=3
return A.d(p.P("bookings").aw(0,"partner_profiles(business_name), payments(id, type, status, amount)").W("proposal_id",d).dk(0,"created_at",!1).jm(1).dz(),$async$cCc)
case 3:u=f
if(u==null){v=null
x=1
break}p=J.a7(u)
t=y.g.a(p.h(u,"payments"))
if(t==null)t=C.aj
t=J.d7(t,new B.cCd())
s=A.W(t,t.$ti.i("z.E"))
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
return A.m($async$cCc,w)},
ajC(d){var x=0,w=A.n(y.T),v,u,t,s,r,q,p,o,n
var $async$ajC=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(A.ak3(null,d),$async$ajC)
case 3:u=$.T().b
u===$&&A.b()
x=4
return A.d(u.P("bookings").aw(0,"status, total_amount, deposit_amount, payments(type, status)").W("proposal_id",d).dk(0,"created_at",!1).jm(1).dz(),$async$ajC)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a7(t)
s=A.J(u.h(t,"status"))
if(s==null)s=""
if(C.f.b3(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.g.a(u.h(t,"payments"))
q=new B.cCa(r==null?C.aj:r)
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
return A.m($async$ajC,w)},
cCd:function cCd(){},
cCa:function cCa(d){this.a=d},
cCb:function cCb(d,e){this.a=d
this.b=e},
dfi(d){return new B.a_Z(d,null)},
a_Z:function a_Z(d,e){this.d=d
this.a=e},
aaQ:function aaQ(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bK2:function bK2(d){this.a=d},
bK1:function bK1(d,e){this.a=d
this.b=e},
bK0:function bK0(d,e){this.a=d
this.b=e},
bK4:function bK4(d){this.a=d},
bK5:function bK5(){},
bK6:function bK6(d){this.a=d},
bK7:function bK7(d,e,f){this.a=d
this.b=e
this.c=f},
bK9:function bK9(){},
bK8:function bK8(d,e){this.a=d
this.b=e},
bK3:function bK3(d,e,f){this.a=d
this.b=e
this.c=f},
bKa:function bKa(d,e){this.a=d
this.b=e},
bKb:function bKb(d){this.a=d},
aeK:function aeK(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.a=j},
aeL:function aeL(){var _=this
_.y=_.x=_.w=!1
_.z=null
_.d=$
_.c=_.a=null},
cjE:function cjE(d,e){this.a=d
this.b=e},
cjC:function cjC(d,e){this.a=d
this.b=e},
cjD:function cjD(d,e){this.a=d
this.b=e},
cjF:function cjF(){},
cjq:function cjq(d){this.a=d},
cjr:function cjr(){},
cjs:function cjs(d,e){this.a=d
this.b=e},
cjy:function cjy(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
cjw:function cjw(d,e,f){this.a=d
this.b=e
this.c=f},
cjx:function cjx(d){this.a=d},
cjt:function cjt(d){this.a=d},
cju:function cju(d){this.a=d},
cjv:function cjv(d,e){this.a=d
this.b=e},
cjl:function cjl(d){this.a=d},
cjm:function cjm(d){this.a=d},
cjn:function cjn(d){this.a=d},
cjo:function cjo(d){this.a=d},
cjp:function cjp(d){this.a=d},
cjB:function cjB(d){this.a=d},
cjz:function cjz(d){this.a=d},
cjA:function cjA(d,e,f){this.a=d
this.b=e
this.c=f},
cyZ:function cyZ(){},
aJZ:function aJZ(d,e,f){this.c=d
this.d=e
this.a=f},
XD:function XD(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
wy:function wy(d,e,f){this.a=d
this.b=e
this.c=f},
UW:function UW(d,e,f){this.r=d
this.w=e
this.a=f},
agE:function agE(){this.d=!1
this.c=this.a=null},
cqM:function cqM(d){this.a=d},
cqP:function cqP(d,e,f){this.a=d
this.b=e
this.c=f},
cqQ:function cqQ(d,e,f){this.a=d
this.b=e
this.c=f},
cqN:function cqN(d,e){this.a=d
this.b=e},
cqO:function cqO(d,e){this.a=d
this.b=e}},D,L
J=c[1]
A=c[0]
C=c[2]
M=c[162]
N=c[226]
O=c[156]
P=c[149]
I=c[225]
Q=c[223]
R=c[111]
E=c[115]
G=c[79]
H=c[221]
K=c[131]
F=c[71]
S=c[188]
T=c[81]
B=a.updateHolder(c[60],B)
D=c[222]
L=c[224]
B.CQ.prototype={
d1(){A.je(this.gNm(this),y.H)
return H.Kw},
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
case 6:l=J.d3(n,new B.aY5(t),y.y).cH(0,new B.aY6(l))
l=A.W(l,l.$ti.i("z.E"))
t.sa2(0,new G.ke(!1,l))
v=9
l=$.T().b
l===$&&A.b()
q=y.z
x=12
return A.d(l.aU("mark_conversation_read",A.S(["p_conversation_id",o],y.N,q),q),$async$m_)
case 12:A.eK(t).ah($.cUB())
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
return A.d(s.dd(0,A.S(["conversation_id",u.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cj(0).dN(0),$async$me)
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
return A.d(s.dd(0,A.S(["conversation_id",v.x,"sender_role","couple","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cj(0).dN(0),$async$mP)
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
return A.d(p.aU("delete_message",A.S(["p_message_id",e],y.N,y.z),y.H),$async$jR)
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
w=A.dS(w.h(d,"is_quote_request_notice"))
return G.cVJ(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a_Z.prototype={
R(){return new B.aaQ(new A.aI(C.ao,$.ad()),A.oq(null,0,null,null))}}
B.aaQ.prototype={
m(){var x=this.w
x.Z$=$.ad()
x.X$=0
this.x.m()
this.a8()},
a5m(){$.aB.k4$.push(new B.bK2(this))},
SO(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$SO=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.d
x=3
return A.d(u.gT().a1(0,$.yT().$1(t.f).gej(),y.B),$async$SO)
case 3:s=e
t=u.c
if(t==null||s==null){x=1
break}O.Tt(t,s,!1)
case 1:return A.l(v,w)}})
return A.m($async$SO,w)},
Tk(d){return this.bcj(d)},
bcj(d){var x=0,w=A.n(y.H),v=this
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
if(J.aUa(o).length===0){x=1
break}p.jt(0,C.jM)
r=s.gT()
r.a1(0,$.Cq().$1("c:"+s.a.d.a).gaV(),y.M).fT(0)
u=4
x=7
return A.d(r.a1(0,$.aky().$1(s.a.d.a).gaV(),y.C).me(o),$async$HX)
case 7:s.a5m()
u=2
x=6
break
case 4:u=3
n=t.pop()
if(s.c==null){x=1
break}p.sbx(0,o)
s.c.O(y.q).f.a4(D.bX9)
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
return A.d(E.rq(q),$async$HW)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gT().a1(0,$.aky().$1(s.a.d.a).gaV(),y.C).mP(r),$async$HW)
case 8:s.a5m()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.O(y.q).f.a4(H.a83)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$HW,w)},
aoa(d,e,f){var x=null
if(!d)return f
return A.dQ(x,f,C.a3,!1,x,x,x,x,x,x,x,new B.bK1(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bd)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gT(),f=$.aky(),e=y.n,d=g.G(f.$1(i.a.d.a),e),a0=g.G($.dcs().$1(i.a.d.a),y.U),a1=a0.gv(a0)
a0=i.a
a0.toString
a0=g.G($.yT().$1(a0.d.f),y.D)
x=a0.gv(a0)
w=g.G($.cm(),y.v).c
v=A.eS(new A.a3(w,new B.bK4(i),A.a8(w).i("a3<1>")))
a0=v==null
u=a0?h:v.r
if(a0)t=h
else{a0=A.a([v.gcu()],y.s)
if(u!=null)a0.push(""+A.aN(u)+" "+C.cn[A.ay(u)-1]+" "+A.aG(u))
t=C.e.a3(a0," \xb7 ")}a0=d.b
s=C.e.c4(a0,new B.bK5())
r=i.a.d.f
q=g.G($.ddn().$1(r),y.w)
p=g.G($.ZM().$1(r),y.Q)
p=p.gv(p)
o=M.cSn(p==null?h:p.c)
n=o==null?h:o[0].toLowerCase()+C.f.bD(o,1)
m=E.cSO(g.G($.Cq().$1("c:"+i.a.d.a),y.a))
g.pt(f.$1(i.a.d.a),new B.bK6(i),e)
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
g=A.bG(!1,E.cN3(g.d,h,g.b,e,new B.bK7(i,a2,d),f,q),h,C.a_,!1)
if(d.a&&a0.length===0)f=C.cQ
else{if(s)f="Proposta recebida"
else f=x==null?h:A.eS(x.c)
i.a.toString
p=t==null?16:82
a0=G.d5V(new B.bK8(i,a2),new B.bK9(),a0,a1)
l=A.a8(a0).i("cY<1>")
a0=A.W(new A.cY(a0,l),l.i("b1.E"))
f=new T.Qq(t,f,"Ver perfil",e,A.d5(a0,i.x,new A.a0(16,p,16,16),h,h,!0,C.a1,!1),h)}e=y.p
f=A.a([g,A.a6(A.l0(f,C.a8,!0),1),A.l0(new E.Qr(m,h),C.a8,!0)],e)
i.a.toString
g=A.a([],e)
for(k=0;k<3;++k){j=D.brv[k]
C.e.p(g,A.a([new B.aJZ(j,new B.bKa(i,j),h),C.ak],e))}f.push(A.l0(A.dV(A.R(g,C.x,C.j,C.o,0,h,h),C.z,h,D.arG,h,h,C.by),C.a8,!0))
f.push(new E.Qp(i.w,i.gaSR(),i.gaSQ(),"Escreve uma mensagem",new B.bKb(i),h))
return A.cP(h,C.l_,A.B(f,C.x,C.j,C.o,0,C.v),!0,h)}}
B.aeK.prototype={
axB(d,e){var x=this.f,w=y.l
if(e){w=d.G($.Cn().$1(x),w)
w=w.gv(w)}else{w=d.a1(0,$.Cn().$1(x),w)
w=w.gv(w)}return w},
a98(d){return this.axB(d,!1)},
R(){return new B.aeL()}}
B.aeL.prototype={
am(){this.aJ()
var x=this.a.d.w
if(x!=null)F.ajD(x).b7(new B.cjE(this,x),y.P).eD(new B.cjF())},
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
this.c.O(y.q).f.a4(A.cz(new B.UW("Pagar",new B.cjq(this),x),x,x,x,x,C.z,x,D.cbp,x,C.W,x,x,x,x,x,x,x,x,x,x))},
uD(d){return this.b8Z(d)},
b8Z(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$uD=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=u.a.d.w
if(l==null){x=1
break}x=3
return A.d(B.cCc(l),$async$uD)
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
return A.d(A.aj(s).az("/pay",new A.po(q,n,p,r,o,new B.cjr(),null,!1,null,null,null,null,null,null,null),y.X),$async$uD)
case 4:if(u.c==null){x=1
break}x=5
return A.d(B.ajC(l),$async$uD)
case 5:m=f
if(u.c!=null)u.q(new B.cjs(u,m))
case 1:return A.l(v,w)}})
return A.m($async$uD,w)},
KO(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$KO=A.j(function(a0,a1){if(a0===1){t.push(a1)
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
return A.d(l.W("bookings.proposal_id",k).W("status","pending").jm(1).dz(),$async$KO)
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
g=(l==null?C.f1:l).lc(e)
l=s.c
l.toString
x=8
return A.d(A.ck(null,new B.cjy(s,f,e,n,o,m,h,g),!1,l,!0,!0,null,y.H),$async$KO)
case 8:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$KO,w)},
Tt(){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$Tt=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:r=u.a.d.w
if(r==null){x=1
break}u.q(new B.cjt(u))
t=u.c
t.toString
x=3
return A.d(F.Zk(t,u.a.r,r,new B.cju(u)),$async$Tt)
case 3:s=e
if(u.c==null){x=1
break}if(s)u.gT().ah($.yX())
u.q(new B.cjv(u,s))
case 1:return A.l(v,w)}})
return A.m($async$Tt,w)},
rv(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$rv=A.j(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:d=r.c
d.toString
i=r.gT()
h=i.a1(0,$.cm(),y.v).b
x=3
return A.d(F.aSo(d,h==null?null:h.a,"este parceiro"),$async$rv)
case 3:q=a3
if(q==null||r.c==null){x=1
break}r.q(new B.cjl(r))
u=5
d=r.a.d.w
d.toString
x=8
return A.d(F.ajs(d,q),$async$rv)
case 8:if(r.c==null){s=[1]
x=6
break}i.ah($.yX())
i.ah($.ju())
r.q(new B.cjm(r))
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
return A.d(F.ajM(d,o,r.a.r),$async$rv)
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
if(d==null)d=C.f1
x=20
return A.d(r.uD(d.lc(m)),$async$rv)
case 20:x=18
break
case 19:x=21
return A.d(r.KO(),$async$rv)
case 21:case 18:s.push(7)
x=6
break
case 5:u=4
a1=t.pop()
d=A.a9(a1)
x=d instanceof A.cT?22:24
break
case 22:k=d
x=k.b==="P0001"?25:26
break
case 25:d=r.a.d.w
d.toString
x=27
return A.d(F.ajD(d),$async$rv)
case 27:j=a3
if(J.o(j,"accepted")){if(r.c==null){s=[1]
x=6
break}i.ah($.yX())
i.ah($.ju())
r.q(new B.cjn(r))
r.aQm()
s=[1]
x=6
break}if(r.c!=null)r.q(new B.cjo(r))
case 26:d=r.c
if(d!=null){d=d.O(y.q).f
if(k.b==="P0001")i="Esta proposta j\xe1 n\xe3o est\xe1 dispon\xedvel \u2014 foi recusada ou expirou."
else if(k.b==="P0007")i="Este parceiro j\xe1 tem outra reserva confirmada nessa data. N\xe3o \xe9 poss\xedvel aceitar esta proposta."
else if(k.b==="P0010")i="Este parceiro j\xe1 n\xe3o est\xe1 dispon\xedvel para o vosso evento."
else i=k.b==="P0008"?"J\xe1 tens uma reserva com este parceiro. S\xf3 podes aceitar outra se essa for cancelada sem nada pago.":"N\xe3o foi poss\xedvel aceitar a proposta. Tenta novamente."
d.a4(A.cz(null,null,null,null,null,C.z,null,A.i(i,null,null,null,null,null,null,null,null),null,C.W,null,null,null,null,null,null,null,null,null,null))}x=23
break
case 24:d=r.c
if(d!=null)d.O(y.q).f.a4(S.a7X)
case 23:s.push(7)
x=6
break
case 4:s=[2]
case 6:u=2
if(r.c!=null)r.q(new B.cjp(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$rv,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.d,l=o.gT(),k=l.G($.cm(),y.v).b,j=k==null?n:k.r,i=j==null?n:k.z.c+" \xb7 "+A.aN(j)+" "+C.cn[A.ay(j)-1]+" "+A.aG(j)
l=o.a.axB(l,!0)
if(l==null)l=C.f1
x=m.y
w=x==null
v=l.lc(w?0:x)
l=o.a.x
u=i==null
t=u?m.x:i
if(t==null)t="Proposta"
u=u?n:m.x
x=w?n:R.cSM(x,m.z,v)
w=m.z
w=w==null?n:new B.cjB(v).$1(w)
s=v>0?"Valores j\xe1 com a taxa de servi\xe7o":n
r=A.a([],y.j)
if(!o.x&&!o.y)r.push(new B.wy("Recusar",o.w?n:o.gbdm(),!1))
else r.push(new B.wy("Ver detalhe",new B.cjz(d),!1))
q=o.x
if(q&&o.z==="cancelled")r.push(new B.wy("Pedir nova proposta",o.a.e,!0))
else if(q)r.push(new B.wy(o.gaQn(),new B.cjA(o,v,d),!0))
else if(o.y)r.push(D.aiD)
else{q=o.w
p=q?"A aceitar\u2026":"Aceitar"
r.push(new B.wy(p,q?n:o.gaQl(),!0))}return G.cVK(r,w,"PROPOSTA",l,s,x,u,t)}}
B.aJZ.prototype={
u(d){var x=null,w=A.a2(17),v=A.bU(D.amo,1.5)
return A.aT(A.C(C.K,A.i(this.c,x,x,x,x,C.ds,x,x,x),C.r,x,x,new A.O(x,x,v,w,x,x,C.y),x,34,x,C.dA,x,x,x),this.d,x)}}
B.XD.prototype={
u(d){var x=this,w=null,v=A.bV(A.C(w,w,C.r,w,w,new A.O(C.Bd,w,w,A.a2(999),w,w,C.y),w,4,C.pY,w,w,w,40),w,w),u=x.r,t=A.i(u?"Paga para confirmar":"Reservado!",w,w,w,w,C.bx,w,w,w),s=A.i(u?"Falta pouco para o prazo. Paga para confirmar.":"Guard\xe1mos a tua reserva. Ainda n\xe3o \xe9 preciso pagar.",w,w,w,w,Q.HC,w,w,w),r=A.a2(22),q=y.p,p=A.a([A.i(x.c,w,w,w,w,C.ap,w,w,w),C.be,A.i("Total "+A.aP(x.d,!1),w,w,w,w,C.Z,w,w,w)],q),o=x.e
if(o!=null)C.e.p(p,A.a([D.apR,A.R(A.a([D.ayB,A.i(A.aP(o,!1),w,w,w,w,C.ap,w,w,w)],q),C.x,C.j,C.o,0,w,w)],q))
r=A.C(w,A.B(p,C.I,C.j,C.o,0,C.v),C.r,w,w,new A.O(C.a8,w,w,r,w,w,C.y),w,w,w,C.bh,w,w,w)
p=u?x.w:x.x
o=A.cv(C.A,w,w,C.u,w,w,C.ah,w,w,L.a8R)
v=A.a([v,t,C.aF,s,C.aC,r,C.a4,A.aO(A.bM(A.i(u?"Pagar "+A.aP(x.f,!1):"OK",w,w,w,w,w,w,w,w),p,o),52,w),C.ae,A.cr(D.cdB,w,w,x.x,w,A.id(w,w,w,w,w,w,w,w,w,C.A,w,C.iR,w,w,w,w,w,w,w,L.a9_,w))],q)
if(!u)C.e.p(v,A.a([C.aF,D.ceH],q))
return A.bG(!0,A.C(w,A.B(v,C.J,C.j,C.N,0,C.v),C.r,w,w,w,w,w,w,D.arN,w,w,w),w,C.a_,!1)}}
B.wy.prototype={}
B.UW.prototype={
R(){return new B.agE()},
bxp(){return this.w.$0()}}
B.agE.prototype={
b2N(){var x=this
if(x.d)return
x.q(new B.cqM(x))
x.a.bxp()
x.c.O(y.q).f.a9U(D.bW0)},
u(d){var x,w,v,u,t=this,s=null
A.aq(d)
x=A.d2Y(d)
w=A.cPC(d)
v=new B.cqP(t,w,x)
u=A.id(s,s,s,s,s,s,s,s,s,s,s,s,v.$0(),s,s,s,s,s,s,s,s)
v=v.$0()
v=u.bp6(new B.cqN(t,w).$0(),v)
u=t.d?s:t.gb2M()
return A.cr(A.i(t.a.r,s,s,s,s,s,s,s,s),s,s,u,s,v)}}
var z=a.updateTypes(["F<~>()","y(l_)","ke()","l_(@)","~(ke?,ke)","e(l_,y)","XD(N)","~()","CQ(c)"])
B.aY5.prototype={
$1(d){return this.a.a0W(y.b.a(d))},
$S:z+3}
B.aY6.prototype={
$1(d){var x=this.a.a
return x==null||d.r.hx(x)},
$S:z+1}
B.cD0.prototype={
$2(d,e){return d.G($.cMg(),y.R).n(0,e)},
$S:1332}
B.cCd.prototype={
$1(d){var x=J.a7(d)
if(J.o(x.h(d,"status"),"pending"))x=J.o(x.h(d,"type"),"deposit")||J.o(x.h(d,"type"),"final_payment")
else x=!1
return x},
$S:77}
B.cCa.prototype={
$2(d,e){return J.ru(this.a,new B.cCb(d,e))},
$S:396}
B.cCb.prototype={
$1(d){var x=J.a7(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:77}
B.bK2.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.ja(0,C.ck,C.lj)},
$S:6}
B.bK1.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(K.Ph(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(K.Pt(s,new B.bK0(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.bK0.prototype={
$0(){var x=this.a
return x.gT().a1(0,$.aky().$1(x.a.d.a).gaV(),y.C).jR(0,this.b.a)},
$S:2}
B.bK4.prototype={
$1(d){return d.a===this.a.a.d.e},
$S:93}
B.bK5.prototype={
$1(d){return d.w!=null},
$S:z+1}
B.bK6.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a5m()},
$S:z+4}
B.bK7.prototype={
$0(){var x,w,v,u,t,s=this.a.gT(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("cY<1>"),x=new A.cY(x,w),x=new A.ak(x,x.gA(0),w.i("ak<b1.E>")),w=w.i("b1.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new E.AR(u,v==null?"":v,null,null))}}return E.Zs(this.b,s,!1,I.rk,r)},
$S:0}
B.bK9.prototype={
$1(d){return!d.d},
$S:z+1}
B.bK8.prototype={
$2(d,e){var x,w=this,v=null,u=d.as
if(u!=null){x=d.at
if(x==null)x="file"
x=w.a.aoa(e,d,new E.Qo(u,x,d.ax,e,v))
u=x}else if(d.w!=null){u=w.a
x=u.a.d
x=new B.aeK(d,u.ga4l(),x.f,x.b,x.a,x.d,v)
u=x}else if(d.Q){u=d.e
u=A.dQ(v,new E.zi(u==null?"":u,e,v,v),C.a3,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.a.ga4l(),v,v,v,v,v,v,!1,C.bd)}else{u=w.a
x=d.e
if(e)u=u.aoa(!0,d,new E.zi(x==null?"":x,!0,v,v))
else u=A.dQ(v,new E.zi(x==null?"":x,!1,v,v),C.a3,!1,v,v,v,v,v,v,v,new B.bK3(u,w.b,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!1,C.bd)}return u},
$S:z+5}
B.bK3.prototype={
$0(){return P.wd(this.b,this.a.gT(),!1,null,null,I.rk,this.c.a)},
$S:0}
B.bKa.prototype={
$0(){return this.a.Tk(this.b)},
$S:0}
B.bKb.prototype={
$1(d){var x,w=this.a,v=w.gT()
w=v.a1(0,$.Cq().$1("c:"+w.a.d.a).gaV(),y.M)
x=v.a1(0,$.b8(),y.V).b
v=x==null?null:x.b
return w.ac9(C.f.D(v==null?"":v))},
$S:3}
B.cjE.prototype={
$1(d){return this.aDS(d)},
aDS(d){var x=0,w=A.n(y.P),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null||d==null){x=1
break}s.q(new B.cjC(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(B.ajC(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.q(new B.cjD(s,t))
case 4:case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1333}
B.cjC.prototype={
$0(){var x=this.a,w=this.b,v=w==="accepted"
x.x=v
x.y=w!=="sent"&&!v},
$S:0}
B.cjD.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cjF.prototype={
$1(d){},
$S:14}
B.cjq.prototype={
$0(){var x,w=this.a,v=w.a
v.toString
v=v.a98(w.gT())
if(v==null)v=C.f1
x=w.a.d.y
return w.uD(v.lc(x==null?0:x))},
$S:0}
B.cjr.prototype={
$1(d){return A.as(d,!1).bJ()},
$S:110}
B.cjs.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.cjy.prototype={
$1(d){var x,w=this,v=w.b.x
if(C.f.D(v==null?"":v).length===0)v="Reserva"
else{v.toString
v=C.f.D(v)}x=w.d?w.e:null
return new B.XD(v,w.c,x,w.f,w.r,new B.cjw(w.a,d,w.w),new B.cjx(d),null)},
$S:z+6}
B.cjw.prototype={
$0(){A.as(this.b,!1).bJ()
this.a.uD(this.c)},
$S:0}
B.cjx.prototype={
$0(){return A.as(this.a,!1).bJ()},
$S:0}
B.cjt.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cju.prototype={
$1(d){var x=this.a
return x.gT().a1(0,$.aky().$1(x.a.w).gaV(),y.C).me(d)},
$S:171}
B.cjv.prototype={
$0(){var x=this.a
x.w=!1
if(this.b)x.y=!0},
$S:0}
B.cjl.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cjm.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cjn.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cjo.prototype={
$0(){return this.a.y=!0},
$S:0}
B.cjp.prototype={
$0(){return this.a.w=!1},
$S:0}
B.cjB.prototype={
$1(d){return A.j8(d,this.a)},
$S:1}
B.cjz.prototype={
$0(){return A.aj(this.a).az("/bookings",null,y.X)},
$S:0}
B.cjA.prototype={
$0(){var x=this.a,w=x.z
return w==null||w==="deposit_due"||w==="final_due"?x.uD(this.b):A.aj(this.c).az("/bookings",null,y.X)},
$S:0}
B.cyZ.prototype={
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
$S:449}
B.cqM.prototype={
$0(){this.a.d=!0},
$S:0}
B.cqP.prototype={
$0(){var x,w=this,v=w.a
v.a.toString
x=w.b.b
if(x!=null){if(x instanceof A.C5)return x}else{x=w.c
x.gx3()
if(x.gx3() instanceof A.C5)return y.E.a(x.gx3())}return A.nO(new B.cqQ(v,w.b,w.c))},
$S:1334}
B.cqQ.prototype={
$1(d){var x,w=this
if(d.n(0,C.aw)){w.a.a.toString
x=w.b.c
return x==null?w.c.gMq():x}w.a.a.toString
x=w.b.b
return x==null?w.c.gx3():x},
$S:5}
B.cqN.prototype={
$0(){var x,w,v=this.a
v.a.toString
x=this.b
w=x.as
if(w instanceof A.C5)return w
return A.nO(new B.cqO(v,x))},
$S:1335}
B.cqO.prototype={
$1(d){var x,w=this
if(d.n(0,C.aw)){w.a.a.toString
x=w.b.at
return x==null?C.al:x}w.a.a.toString
x=w.b.as
return x==null?C.al:x},
$S:5};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dze","dfh",8)
var u
w(u=B.CQ.prototype,"giF","d1",2)
v(u,"gNm","m_",0)
w(u=B.aaQ.prototype,"ga4l","SO",0)
w(u,"gaSR","HX",0)
w(u,"gaSQ","HW",0)
w(u=B.aeL.prototype,"gbdm","Tt",0)
w(u,"gaQl","rv",0)
w(B.agE.prototype,"gb2M","b2N",7)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CQ,A.f6)
w(A.bx,[B.aY5,B.aY6,B.cCd,B.cCb,B.bK2,B.bK4,B.bK5,B.bK9,B.bKb,B.cjE,B.cjF,B.cjr,B.cjy,B.cju,B.cjB,B.cqQ,B.cqO])
w(A.cS,[B.cD0,B.cCa,B.bK6,B.bK8,B.cyZ])
w(A.dD,[B.a_Z,B.aeK])
w(A.dv,[B.aaQ,B.aeL])
w(A.bR,[B.bK1,B.bK0,B.bK7,B.bK3,B.bKa,B.cjC,B.cjD,B.cjq,B.cjs,B.cjw,B.cjx,B.cjt,B.cjv,B.cjl,B.cjm,B.cjn,B.cjo,B.cjp,B.cjz,B.cjA,B.cqM,B.cqP,B.cqN])
w(A.K,[B.aJZ,B.XD])
x(B.wy,A.L)
x(B.UW,A.I)
x(B.agE,A.a1)})()
A.bu(b.typeUniverse,JSON.parse('{"CQ":{"f6":["ke"]},"a_Z":{"I":[],"e":[],"f":[]},"aeK":{"I":[],"e":[],"f":[]},"XD":{"K":[],"e":[],"f":[]},"aaQ":{"a1":["a_Z"]},"aeL":{"a1":["aeK"]},"aJZ":{"K":[],"e":[],"f":[]},"UW":{"I":[],"e":[],"f":[]},"agE":{"a1":["UW"]}}'))
var y=(function rtii(){var x=A.w
return{l:x("ax<f3>"),U:x("ax<af?>"),D:x("ax<dN?>"),Q:x("ax<As?>"),V:x("cG"),y:x("l_"),C:x("CQ"),n:x("ke"),v:x("e8"),B:x("F<dN?>"),j:x("t<wy>"),t:x("t<l_>"),Y:x("t<AR>"),s:x("t<c>"),p:x("t<e>"),a:x("r<c>"),b:x("a5<c,@>"),P:x("bA"),R:x("bJ<c>"),N:x("c"),M:x("vS"),E:x("yb"),q:x("dA"),w:x("y"),z:x("@"),O:x("af?"),g:x("r<@>?"),W:x("a5<@,@>?"),X:x("L?"),h:x("+(c,c,P,c)?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aiD=new B.wy("Indispon\xedvel",null,!0)
D.amo=new A.U(1,0.8392156862745098,0.8156862745098039,0.7607843137254902,C.C)
D.apR=new A.kk(22,null,null,null,C.d5,null)
D.arG=new A.a0(16,0,16,8)
D.arN=new A.a0(16,12,16,18)
D.c7C=new A.D("Sinal para confirmar",null,C.Z,null,null,null,null,null,null,null,null)
D.ayB=new A.bT(1,C.ay,D.c7C,null)
D.brv=x(["Posso visitar?","Pedir outra proposta","Obrigado!"],y.s)
D.bW0=new A.vI(0,"action")
D.c5R=new A.D("N\xe3o foi poss\xedvel enviar a mensagem. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bX9=new A.bK(D.c5R,null,null,null,null,null,null,null,null,null,null,null,null,C.W,!1,null,null,null,C.z,null)
D.cbp=new A.D("Proposta aceite! Paga para confirmar.",null,null,null,null,null,null,null,null,null,null)
D.cdB=new A.D("Pagar depois",null,null,null,null,null,null,null,null,null,null)
D.c3H=new A.M(!0,C.T,null,null,null,null,13,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ceH=new A.D("Avisamos-te 3 dias antes do prazo para pagares!",null,D.c3H,C.a5,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dNy","aky",()=>H.K5.$3$1(B.dze(),y.C,y.n,y.N))
x($,"dOu","ddn",()=>N.Az.$2$1(new B.cD0(),y.w,y.N))
x($,"dMj","dcs",()=>C.bS.hf(0,new B.cyZ(),y.O,y.N))})()};
(a=>{a["i6zV6lEKJGy5/8kpuAdmvwrVAuY="]=a.current})($__dart_deferred_initializers__);