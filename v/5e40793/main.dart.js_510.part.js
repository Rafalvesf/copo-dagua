((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,O,I,P,K,L,Q,E,F,H,M,R,S,G,T,U,B={
cV8(d){return new B.B3(d)},
B3:function B3(d){this.x=d
this.b=null},
aRy:function aRy(d){this.a=d},
aRz:function aRz(d){this.a=d},
cl_:function cl_(){},
ckc(d){var x=0,w=A.n(y.h),v,u,t,s,r,q,p
var $async$ckc=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=$.Z().b
p===$&&A.b()
x=3
return A.d(p.S("bookings").aP(0,"partner_profiles(business_name), payments(id, type, status, amount)").a0("proposal_id",d).dI(0,"created_at",!1).lE(1).em(),$async$ckc)
case 3:u=f
if(u==null){v=null
x=1
break}p=J.a3(u)
t=y.g.a(p.h(u,"payments"))
if(t==null)t=C.as
t=J.dL(t,new B.ckd())
s=A.Y(t,t.$ti.i("y.E"))
if(s.length===0){v=null
x=1
break}r=C.e.gN(s)
p=y.W.a(p.h(u,"partner_profiles"))
q=A.P(p==null?null:J.h(p,"business_name"))
if(q==null)q="Parceiro"
p=J.a3(r)
v=new A.fW([A.a1(p.h(r,"id")),A.a1(p.h(r,"type")),A.e0(p.h(r,"amount")),q])
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$ckc,w)},
afy(d){var x=0,w=A.n(y.T),v,u,t,s,r
var $async$afy=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(R.afU(null,d),$async$afy)
case 3:u=$.Z().b
u===$&&A.b()
x=4
return A.d(u.S("bookings").aP(0,"status, payments(type, status)").a0("proposal_id",d).dI(0,"created_at",!1).lE(1).em(),$async$afy)
case 4:t=f
if(t==null){v=null
x=1
break}u=J.a3(t)
s=A.P(u.h(t,"status"))
if(s==null)s=""
if(C.f.be(s,"cancelled")||s==="expired"){v="cancelled"
x=1
break}r=y.g.a(u.h(t,"payments"))
u=new B.cka(r==null?C.as:r)
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
return A.m($async$afy,w)},
ckd:function ckd(){},
cka:function cka(d){this.a=d},
ckb:function ckb(d,e){this.a=d
this.b=e},
cV9(d){return new B.XE(d,null)},
XE:function XE(d,e){this.d=d
this.a=e},
a77:function a77(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bAZ:function bAZ(d){this.a=d},
bAY:function bAY(d,e){this.a=d
this.b=e},
bAX:function bAX(d,e){this.a=d
this.b=e},
bB0:function bB0(d){this.a=d},
bB1:function bB1(){},
bB2:function bB2(d){this.a=d},
bB3:function bB3(d,e,f){this.a=d
this.b=e
this.c=f},
bB5:function bB5(){},
bB4:function bB4(d,e){this.a=d
this.b=e},
bB_:function bB_(d,e,f){this.a=d
this.b=e
this.c=f},
bB6:function bB6(d,e){this.a=d
this.b=e},
bB7:function bB7(d){this.a=d},
aaY:function aaY(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.a=h},
aaZ:function aaZ(){var _=this
_.y=_.x=_.w=!1
_.z=null
_.d=$
_.c=_.a=null},
c4p:function c4p(d,e){this.a=d
this.b=e},
c4n:function c4n(d,e){this.a=d
this.b=e},
c4o:function c4o(d,e){this.a=d
this.b=e},
c4q:function c4q(){},
c4i:function c4i(d){this.a=d},
c4j:function c4j(d,e){this.a=d
this.b=e},
c4d:function c4d(d){this.a=d},
c4e:function c4e(d){this.a=d},
c4f:function c4f(d){this.a=d},
c4g:function c4g(d){this.a=d},
c4h:function c4h(d){this.a=d},
c4m:function c4m(d){this.a=d},
c4k:function c4k(d){this.a=d},
c4l:function c4l(d,e,f){this.a=d
this.b=e
this.c=f},
chI:function chI(){},
aE7:function aE7(d,e,f){this.c=d
this.d=e
this.a=f},
xz:function xz(d,e,f){this.a=d
this.b=e
this.c=f},
RT:function RT(d,e,f){this.r=d
this.w=e
this.a=f},
acI:function acI(){this.d=!1
this.c=this.a=null},
c9J:function c9J(d){this.a=d},
c9M:function c9M(d,e,f){this.a=d
this.b=e
this.c=f},
c9N:function c9N(d,e,f){this.a=d
this.b=e
this.c=f},
c9K:function c9K(d,e){this.a=d
this.b=e},
c9L:function c9L(d,e){this.a=d
this.b=e}},D
J=c[1]
A=c[0]
C=c[2]
N=c[150]
O=c[241]
I=c[165]
P=c[145]
K=c[240]
L=c[190]
Q=c[103]
E=c[110]
F=c[77]
H=c[238]
M=c[125]
R=c[161]
S=c[140]
G=c[67]
T=c[198]
U=c[79]
B=a.updateHolder(c[57],B)
D=c[239]
B.B3.prototype={
cY(){A.iE(this.gLx(this),y.H)
return H.J4},
lG(d){return this.boI(0)},
boI(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j
var $async$lG=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:l={}
t.sa1(0,t.ga1(0).i6(!0))
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
case 6:l=J.d1(n,new B.aRy(t),y.y).dv(0,new B.aRz(l))
l=A.Y(l,l.$ti.i("y.E"))
t.sa1(0,new F.jG(!1,l))
v=9
l=$.Z().b
l===$&&A.b()
q=y.z
x=12
return A.d(l.bd("mark_conversation_read",A.R(["p_conversation_id",o],y.N,q),q),$async$lG)
case 12:A.eo(t).aw($.cBq())
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
mA(d){return this.aCT(d)},
aCT(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
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
mz(d){return this.aCO(d)},
aCO(d){var x=0,w=A.n(y.H),v=this,u,t,s
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
jD(d,e){return this.bjy(0,e)},
bjy(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
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
return F.cCt(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.XE.prototype={
R(){return new B.a77(new A.aM(C.aj,$.ah()),A.JO(null,0,null,null))}}
B.a77.prototype={
m(){var x=this.w
x.Z$=$.ah()
x.U$=0
this.x.m()
this.aa()},
a2J(){$.aw.k4$.push(new B.bAZ(this))},
QG(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$QG=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a.d
x=3
return A.d(u.gV().a2(0,$.N6().$1(t.f).ghr(),y.K),$async$QG)
case 3:s=e
t=u.c
if(t==null||s==null){x=1
break}S.a1b(t,s,!1)
case 1:return A.l(v,w)}})
return A.m($async$QG,w)},
Ra(d){return this.b69(d)},
b69(d){var x=0,w=A.n(y.H),v=this
var $async$Ra=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:v.w.sbM(0,d)
x=2
return A.d(v.Gt(),$async$Ra)
case 2:return A.l(null,w)}})
return A.m($async$Ra,w)},
Gt(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Gt=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p=s.w
o=p.a.a
if(J.aNX(o).length===0){x=1
break}p.jU(0,C.k6)
r=s.gV()
r.a2(0,$.AE().$1("c:"+s.a.d.a).gaZ(),y.M).fK(0)
u=4
x=7
return A.d(r.a2(0,$.aNF().$1(s.a.d.a).gaZ(),y.C).mA(o),$async$Gt)
case 7:s.a2J()
u=2
x=6
break
case 4:u=3
n=t.pop()
if(s.c==null){x=1
break}p.sbM(0,o)
s.c.T(y.q).f.ah(D.bNU)
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
return A.d(s.gV().a2(0,$.aNF().$1(s.a.d.a).gaZ(),y.C).mz(r),$async$Gs)
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
return A.dY(x,f,C.Y,!1,x,x,x,x,x,x,x,new B.bAY(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bo)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gV(),f=$.aNF(),e=y.n,d=g.M(f.$1(i.a.d.a),e),a0=g.M($.cSv().$1(i.a.d.a),y.U),a1=a0.gq(a0)
a0=i.a
a0.toString
a0=g.M($.N6().$1(a0.d.f),y.D)
x=a0.gq(a0)
w=g.M($.cB(),y.B).c
v=A.iq(new A.a5(w,new B.bB0(i),A.a6(w).i("a5<1>")))
a0=v==null
u=a0?h:v.r
if(a0)t=h
else{a0=A.a([v.ge0()],y.s)
if(u!=null)a0.push(""+A.aV(u)+" "+C.fD[A.aD(u)-1]+" "+A.aJ(u))
t=C.e.aq(a0," \xb7 ")}a0=d.b
s=C.e.cl(a0,new B.bB1())
r=i.a.d.f
q=g.M($.cTi().$1(r),y.v)
p=g.M($.ags().$1(r),y.Q)
p=p.gq(p)
o=N.cOc(p==null?h:p.c)
n=o==null?h:o[0].toLowerCase()+C.f.bT(o,1)
m=E.czF(g.M($.AE().$1("c:"+i.a.d.a),y.a))
g.p8(f.$1(i.a.d.a),new B.bB2(i),e)
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
g=A.bn(!1,E.cum(g.d,h,g.b,e,new B.bB3(i,a2,d),f,q),h,C.V,!1)
if(d.a&&a0.length===0)f=C.bl
else{if(s)f="Proposta recebida"
else f=x==null?h:A.iq(x.c)
i.a.toString
p=t==null?16:82
a0=F.cMZ(new B.bB4(i,a2),new B.bB5(),a0,a1)
l=A.a6(a0).i("cU<1>")
a0=A.Y(new A.cU(a0,l),l.i("b3.E"))
f=new U.NN(t,f,"Ver perfil",e,A.cL(a0,i.x,new A.V(16,p,16,16),h,h,!0,C.Z,!1),h)}e=y.p
f=A.a([g,A.ab(A.nr(f,C.af,!0),1),A.nr(new E.NO(m,h),C.af,!0)],e)
i.a.toString
g=A.a([],e)
for(k=0;k<3;++k){j=D.bkq[k]
C.e.A(g,A.a([new B.aE7(j,new B.bB6(i,j),h),C.ao],e))}f.push(A.nr(A.ez(A.W(g,C.x,C.l,C.q,0,h,h),D.amq,h,C.bs),C.af,!0))
f.push(new E.NM(i.w,i.gaNK(),i.gaNJ(),"Escreve uma mensagem",new B.bB7(i),h))
return A.cF(h,C.kq,A.I(f,C.x,C.l,C.q,0,C.w),!0,h)}}
B.aaY.prototype={
atD(d,e){var x=this.f,w=y.l
if(e){w=d.M($.N5().$1(x),w)
w=w.gq(w)}else{w=d.a2(0,$.N5().$1(x),w)
w=w.gq(w)}return w},
blg(d){return this.atD(d,!1)},
R(){return new B.aaZ()}}
B.aaZ.prototype={
ak(){this.aG()
var x=this.a.d.w
if(x!=null)G.afz(x).b7(new B.c4p(this,x),y.P).eq(new B.c4q())},
gaLh(){switch(this.z){case"deposit_paid":var x="Sinal pago"
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
this.c.T(y.q).f.ah(A.cV(new B.RT("Pagar",new B.c4i(this),x),x,x,x,x,C.C,x,D.c1g,x,C.a0,x,x,x,x,x,x,x,x,x,x))},
yN(d){return this.b33(d)},
b33(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$yN=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=u.a.d.w
if(l==null){x=1
break}x=3
return A.d(B.ckc(l),$async$yN)
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
r=I.iQ(o,d)
x=4
return A.d(A.av(s).b5("/pay",new A.yK(q,n,p,r,null,!1,null,null,null,null,null),y.X),$async$yN)
case 4:if(u.c==null){x=1
break}x=5
return A.d(B.afy(l),$async$yN)
case 5:m=f
if(u.c!=null)u.t(new B.c4j(u,m))
case 1:return A.l(v,w)}})
return A.m($async$yN,w)},
BA(){var x=0,w=A.n(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j
var $async$BA=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=r.c
k.toString
n=r.gV()
m=n.a2(0,$.cB(),y.B).b
x=3
return A.d(G.aMt(k,m==null?null:m.a,"este parceiro"),$async$BA)
case 3:q=e
if(q==null||r.c==null){x=1
break}r.t(new B.c4d(r))
u=5
k=r.a.d.w
k.toString
x=8
return A.d(G.afp(k,q),$async$BA)
case 8:if(r.c==null){s=[1]
x=6
break}n.aw($.agt())
n.aw($.lO())
r.t(new B.c4e(r))
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
return A.d(G.afz(k),$async$BA)
case 14:o=e
if(J.o(o,"accepted")){if(r.c==null){s=[1]
x=6
break}n.aw($.agt())
n.aw($.lO())
r.t(new B.c4f(r))
r.acP()
s=[1]
x=6
break}if(r.c!=null)r.t(new B.c4g(r))
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
if(r.c!=null)r.t(new B.c4h(r))
x=s.pop()
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$BA,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.d,l=o.gV(),k=l.M($.cB(),y.B).b,j=k==null?n:k.r,i=j==null?n:k.z.c+" \xb7 "+A.aV(j)+" "+C.fD[A.aD(j)-1]+" "+A.aJ(j)
l=o.a.atD(l,!0)
if(l==null)l=L.fX
x=m.y
w=x==null
v=l.oP(w?0:x)
l=o.a.r
u=i==null
t=u?m.x:i
if(t==null)t="Proposta"
u=u?n:m.x
x=w?n:Q.czC(x,m.z,v)
w=m.z
w=w==null?n:new B.c4m(v).$1(w)
s=v>0?"Valores j\xe1 com a taxa de servi\xe7o":n
r=A.a([new B.xz("Ver detalhe",new B.c4k(d),!1)],y.j)
q=o.x
if(q&&o.z==="cancelled")r.push(new B.xz("Pedir nova proposta",o.a.e,!0))
else if(q)r.push(new B.xz(o.gaLh(),new B.c4l(o,v,d),!0))
else if(o.y)r.push(D.afK)
else{q=o.w
p=q?"A aceitar\u2026":"Aceitar"
r.push(new B.xz(p,q?n:o.gaLg(),!0))}return F.cCu(r,w,"PROPOSTA",l,s,x,u,t)}}
B.aE7.prototype={
u(d){var x=null,w=A.T(17),v=A.c9(D.ahm,1.5)
return A.b_(A.E(C.T,A.i(this.c,x,x,x,C.e6,x,x,x),C.t,x,x,new A.K(x,x,v,w,x,x,C.y),x,34,x,x,C.ec,x,x,x),this.d,x)}}
B.xz.prototype={}
B.RT.prototype={
R(){return new B.acI()},
bqx(){return this.w.$0()}}
B.acI.prototype={
aYe(){var x=this
if(x.d)return
x.t(new B.c9J(x))
x.a.bqx()
x.c.T(y.q).f.a6U(D.bN_)},
u(d){var x,w,v,u,t=this,s=null
A.ak(d)
x=A.cKk(d)
w=A.cwK(d)
v=new B.c9M(t,w,x)
u=A.fv(s,s,s,s,s,s,s,s,s,s,s,s,v.$0(),s,s,s,s,s,s,s,s)
v=v.$0()
v=u.bih(new B.c9K(t,w).$0(),v)
u=t.d?s:t.gaYd()
return A.c7(A.i(t.a.r,s,s,s,s,s,s,s),s,s,u,s,v)}}
var z=a.updateTypes(["H<~>()","z(kk)","jG()","kk(@)","~(jG?,jG)","e(kk,z)","~()","B3(c)"])
B.aRy.prototype={
$1(d){return this.a.Zq(y.b.a(d))},
$S:z+3}
B.aRz.prototype={
$1(d){var x=this.a.a
return x==null||d.r.ii(x)},
$S:z+1}
B.cl_.prototype={
$2(d,e){return d.M($.ctw(),y.R).n(0,e)},
$S:1202}
B.ckd.prototype={
$1(d){var x=J.a3(d)
if(J.o(x.h(d,"status"),"pending"))x=J.o(x.h(d,"type"),"deposit")||J.o(x.h(d,"type"),"final_payment")
else x=!1
return x},
$S:66}
B.cka.prototype={
$2(d,e){return J.agw(this.a,new B.ckb(d,e))},
$S:419}
B.ckb.prototype={
$1(d){var x=J.a3(d)
return J.o(x.h(d,"type"),this.a)&&J.o(x.h(d,"status"),this.b)},
$S:66}
B.bAZ.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.jh(0,C.cH,C.kK)},
$S:5}
B.bAY.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(M.MM(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(M.MU(s,new B.bAX(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.bAX.prototype={
$0(){var x=this.a
return x.gV().a2(0,$.aNF().$1(x.a.d.a).gaZ(),y.C).jD(0,this.b.a)},
$S:2}
B.bB0.prototype={
$1(d){return d.a===this.a.a.d.e},
$S:93}
B.bB1.prototype={
$1(d){return d.w!=null},
$S:z+1}
B.bB2.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a2J()},
$S:z+4}
B.bB3.prototype={
$0(){var x,w,v,u,t,s=this.a.gV(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a6(x).i("cU<1>"),x=new A.cU(x,w),x=new A.ap(x,x.gv(0),w.i("ap<b3.E>")),w=w.i("b3.E");x.p();){v=x.d
if(v==null)v=w.a(v)
if(v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new E.z7(u,v==null?"":v,null,null))}}return E.Wb(this.b,s,!1,K.qd,r)},
$S:0}
B.bB5.prototype={
$1(d){return!d.d},
$S:z+1}
B.bB4.prototype={
$2(d,e){var x,w=this,v=null,u=d.as
if(u!=null){x=d.at
if(x==null)x="file"
x=w.a.akK(e,d,new E.NL(u,x,d.ax,e,v))
u=x}else if(d.w!=null){u=w.a
x=u.a.d
x=new B.aaY(d,u.ga1J(),x.f,x.d,v)
u=x}else if(d.Q){u=d.e
u=A.dY(v,new E.xy(u==null?"":u,e,v,v),C.Y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.a.ga1J(),v,v,v,v,v,v,!1,C.bo)}else{u=w.a
x=d.e
if(e)u=u.akK(!0,d,new E.xy(x==null?"":x,!0,v,v))
else u=A.dY(v,new E.xy(x==null?"":x,!1,v,v),C.Y,!1,v,v,v,v,v,v,v,new B.bB_(u,w.b,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!1,C.bo)}return u},
$S:z+5}
B.bB_.prototype={
$0(){return P.uP(this.b,this.a.gV(),!1,null,null,K.qd,this.c.a)},
$S:0}
B.bB6.prototype={
$0(){return this.a.Ra(this.b)},
$S:0}
B.bB7.prototype={
$1(d){var x,w=this.a,v=w.gV()
w=v.a2(0,$.AE().$1("c:"+w.a.d.a).gaZ(),y.M)
x=v.a2(0,$.bp(),y.V).b
v=x==null?null:x.b
return w.a95(C.f.L(v==null?"":v))},
$S:6}
B.c4p.prototype={
$1(d){return this.azv(d)},
azv(d){var x=0,w=A.n(y.P),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null||d==null){x=1
break}s.t(new B.c4n(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(B.afy(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.t(new B.c4o(s,t))
case 4:case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1203}
B.c4n.prototype={
$0(){var x=this.a,w=this.b,v=w==="accepted"
x.x=v
x.y=w!=="sent"&&!v},
$S:0}
B.c4o.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.c4q.prototype={
$1(d){},
$S:13}
B.c4i.prototype={
$0(){var x,w=this.a,v=w.a
v.toString
v=v.blg(w.gV())
if(v==null)v=L.fX
x=w.a.d.y
return w.yN(v.oP(x==null?0:x))},
$S:0}
B.c4j.prototype={
$0(){return this.a.z=this.b},
$S:0}
B.c4d.prototype={
$0(){return this.a.w=!0},
$S:0}
B.c4e.prototype={
$0(){return this.a.x=!0},
$S:0}
B.c4f.prototype={
$0(){return this.a.x=!0},
$S:0}
B.c4g.prototype={
$0(){return this.a.y=!0},
$S:0}
B.c4h.prototype={
$0(){return this.a.w=!1},
$S:0}
B.c4m.prototype={
$1(d){return I.iQ(d,this.a)},
$S:1}
B.c4k.prototype={
$0(){return A.av(this.a).b5("/bookings",null,y.X)},
$S:0}
B.c4l.prototype={
$0(){var x=this.a,w=x.z
return w==null||w==="deposit_due"||w==="final_due"?x.yN(this.b):A.av(this.c).b5("/bookings",null,y.X)},
$S:0}
B.chI.prototype={
$2(d,e){return this.azG(d,e)},
azG(d,e){var x=0,w=A.n(y.O),v,u=2,t=[],s,r,q,p,o
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
B.c9J.prototype={
$0(){this.a.d=!0},
$S:0}
B.c9M.prototype={
$0(){var x,w=this,v=w.a
v.a.toString
x=w.b.b
if(x!=null){if(x instanceof A.Aj)return x}else{x=w.c
x.gw5()
if(x.gw5() instanceof A.Aj)return y.E.a(x.gw5())}return A.nb(new B.c9N(v,w.b,w.c))},
$S:1204}
B.c9N.prototype={
$1(d){var x,w=this
if(d.n(0,C.al)){w.a.a.toString
x=w.b.c
return x==null?w.c.gKv():x}w.a.a.toString
x=w.b.b
return x==null?w.c.gw5():x},
$S:3}
B.c9K.prototype={
$0(){var x,w,v=this.a
v.a.toString
x=this.b
w=x.as
if(w instanceof A.Aj)return w
return A.nb(new B.c9L(v,x))},
$S:1205}
B.c9L.prototype={
$1(d){var x,w=this
if(d.n(0,C.al)){w.a.a.toString
x=w.b.at
return x==null?C.ad:x}w.a.a.toString
x=w.b.as
return x==null?C.ad:x},
$S:3};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dcV","cV8",7)
var u
w(u=B.B3.prototype,"gi5","cY",2)
v(u,"gLx","lG",0)
w(u=B.a77.prototype,"ga1J","QG",0)
w(u,"gaNK","Gt",0)
w(u,"gaNJ","Gs",0)
w(B.aaZ.prototype,"gaLg","BA",0)
w(B.acI.prototype,"gaYd","aYe",6)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.B3,A.eO)
w(A.bv,[B.aRy,B.aRz,B.ckd,B.ckb,B.bAZ,B.bB0,B.bB1,B.bB5,B.bB7,B.c4p,B.c4q,B.c4m,B.c9N,B.c9L])
w(A.cD,[B.cl_,B.cka,B.bB2,B.bB4,B.chI])
w(A.dy,[B.XE,B.aaY])
w(A.dw,[B.a77,B.aaZ])
w(A.bI,[B.bAY,B.bAX,B.bB3,B.bB_,B.bB6,B.c4n,B.c4o,B.c4i,B.c4j,B.c4d,B.c4e,B.c4f,B.c4g,B.c4h,B.c4k,B.c4l,B.c9J,B.c9M,B.c9K])
x(B.aE7,A.M)
x(B.xz,A.F)
x(B.RT,A.G)
x(B.acI,A.a0)})()
A.bx(b.typeUniverse,JSON.parse('{"B3":{"eO":["jG"]},"XE":{"G":[],"e":[],"f":[]},"aaY":{"G":[],"e":[],"f":[]},"a77":{"a0":["XE"]},"aaZ":{"a0":["aaY"]},"aE7":{"M":[],"e":[],"f":[]},"RT":{"G":[],"e":[],"f":[]},"acI":{"a0":["RT"]}}'))
var y=(function rtii(){var x=A.v
return{l:x("aG<fb>"),U:x("aG<ao?>"),D:x("aG<f_?>"),Q:x("aG<yG?>"),V:x("cI"),y:x("kk"),C:x("B3"),n:x("jG"),K:x("H<f_?>"),j:x("q<xz>"),t:x("q<kk>"),Y:x("q<z7>"),s:x("q<c>"),p:x("q<e>"),a:x("t<c>"),b:x("a2<c,@>"),P:x("bw"),R:x("bG<c>"),N:x("c"),M:x("uq"),B:x("ed"),E:x("wK"),q:x("dD"),v:x("z"),z:x("@"),O:x("ao?"),g:x("t<@>?"),W:x("a2<@,@>?"),X:x("F?"),h:x("+(c,c,X,c)?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afK=new B.xz("Indispon\xedvel",null,!0)
D.ahm=new A.O(1,0.8392156862745098,0.8156862745098039,0.7607843137254902,C.A)
D.amq=new A.V(16,0,16,8)
D.bkq=x(["Posso visitar?","Pedir outra proposta","Obrigado!"],y.s)
D.bN_=new A.uf(0,"action")
D.bXK=new A.J("N\xe3o foi poss\xedvel enviar a mensagem. Tenta novamente.",null,null,null,null,null,null,null,null,null,null)
D.bNU=new A.cc(D.bXK,null,null,null,null,null,null,null,null,null,null,null,null,C.a0,!1,null,null,null,C.C,null)
D.c1g=new A.J("Proposta aceite! Paga o sinal para confirmar.",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dqP","aNF",()=>H.IE.$3$1(B.dcV(),y.C,y.n,y.N))
x($,"drx","cTi",()=>O.IG.$2$1(new B.cl_(),y.v,y.N))
x($,"dpH","cSv",()=>C.d4.md(0,new B.chI(),y.O,y.N))})()};
(a=>{a["PKSmoz7ojzCG5Gc1CE2vVGV36yE="]=a.current})($__dart_deferred_initializers__);