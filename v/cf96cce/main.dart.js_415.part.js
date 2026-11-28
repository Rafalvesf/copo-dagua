((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,M,I,K,N,B={
dsj(d){return new B.F1(d)},
F1:function F1(d){this.x=d
this.b=null},
blk:function blk(d){this.a=d},
dsk(d){return new B.a5O(d,null)},
a5O:function a5O(d,e){this.d=d
this.a=e},
afy:function afy(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
cdP:function cdP(d){this.a=d},
cdO:function cdO(d,e){this.a=d
this.b=e},
cdN:function cdN(d,e){this.a=d
this.b=e},
cdR:function cdR(d){this.a=d},
cdS:function cdS(d,e,f){this.a=d
this.b=e
this.c=f},
cdU:function cdU(){},
cdT:function cdT(d,e){this.a=d
this.b=e},
cdQ:function cdQ(d,e,f){this.a=d
this.b=e
this.c=f},
cdV:function cdV(d){this.a=d},
afI:function afI(d,e,f){this.c=d
this.d=e
this.a=f},
aKv:function aKv(){var _=this
_.c=_.a=_.e=_.d=null},
chH:function chH(d,e){this.a=d
this.b=e},
chF:function chF(d,e){this.a=d
this.b=e},
chG:function chG(d,e){this.a=d
this.b=e},
chI:function chI(){},
chJ:function chJ(d){this.a=d},
chK:function chK(d){this.a=d},
chL:function chL(d){this.a=d},
bxh:function bxh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i}},E,G,D,F,L,O,P
J=c[1]
A=c[0]
C=c[2]
H=c[234]
M=c[154]
I=c[240]
K=c[236]
N=c[119]
B=a.updateHolder(c[37],B)
E=c[120]
G=c[235]
D=c[83]
F=c[231]
L=c[136]
O=c[116]
P=c[233]
B.F1.prototype={
d6(){A.ji(this.gNX(this),y.H)
return F.LA},
m8(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$m8=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.sa4(0,t.ga4(0).ip(!0))
s=$.S()
r=s.b
r===$&&A.b()
q=t.x
n=D
m=!1
l=J
x=2
return A.d(r.R("messages").cj(0).W("conversation_id",q).da(0,"created_at",!0),$async$m8)
case 2:t.sa4(0,new n.kh(m,l.d7(f,new B.blk(t),y.y).by(0)))
v=4
r=y.z
x=7
return A.d(s.b.aM("mark_conversation_read",A.T(["p_conversation_id",q],y.N,r),r),$async$m8)
case 7:A.eQ(t).ak($.d_L())
v=1
x=6
break
case 4:v=3
o=u.pop()
x=6
break
case 3:x=1
break
case 6:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$m8,w)},
mn(d){return this.aJ8(d)},
aJ8(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$mn=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=C.f.C(d)
if(p.length===0){x=1
break}t=$.S()
s=t.b
s===$&&A.b()
s=s.R("messages")
t=t.b.gbD().e.a
r=y.N
x=3
return A.d(s.d9(0,A.T(["conversation_id",u.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cj(0).dP(0),$async$mn)
case 3:q=f
r=u.ga4(0)
t=A.U(u.ga4(0).b,y.y)
t.push(u.a5u(q))
u.sa4(0,r.Fg(t))
case 1:return A.l(v,w)}})
return A.m($async$mn,w)},
mU(d){return this.aJ3(d)},
aJ3(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mU=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.S()
s=t.b
s===$&&A.b()
s=s.R("messages")
t=t.b.gbD().e.a
x=2
return A.d(s.d9(0,A.T(["conversation_id",v.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cj(0).dP(0),$async$mU)
case 2:u=f
t=v.ga4(0)
s=A.U(v.ga4(0).b,y.y)
s.push(v.a5u(u))
v.sa4(0,t.Fg(s))
return A.l(null,w)}})
return A.m($async$mU,w)},
jV(d,e){return this.bsV(0,e)},
bsV(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jV=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.S().b
p===$&&A.b()
x=2
return A.d(p.aM("delete_message",A.T(["p_message_id",e],y.N,y.z),y.H),$async$jV)
case 2:p=v.ga4(0)
u=A.a([],y.t)
for(t=v.ga4(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.K)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa4(0,p.Fg(u))
return A.l(null,w)}})
return A.m($async$jV,w)},
a5u(d){var x,w,v=J.a7(d),u=A.a1(v.h(d,"id")),t=A.a1(v.h(d,"conversation_id")),s=J.o(v.h(d,"sender_role"),"partner"),r=A.D(v.h(d,"body")),q=A.D(v.h(d,"attachment_url")),p=A.D(v.h(d,"attachment_type")),o=A.D(v.h(d,"attachment_name")),n=A.db(A.a1(v.h(d,"created_at"))),m=A.D(v.h(d,"proposal_id")),l=A.D(v.h(d,"proposal_title")),k=A.aL(v.h(d,"proposal_price"))
if(k==null)k=null
x=A.aL(v.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dX(v.h(d,"is_quote_request_notice"))
return D.d0X(o,p,q,A.D(v.h(d,"change_request_id")),t,s,u,w===!0,x,m,k,l,n,r)}}
B.a5O.prototype={
P(){return new B.afy(new A.aF(C.al,$.ab()),A.nQ(null,0,null,null))}}
B.afy.prototype={
m(){var x=this.w
x.Z$=$.ab()
x.V$=0
this.x.m()
this.a6()},
a5v(){$.az.k4$.push(new B.cdP(this))},
TD(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$TD=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.C(s).length===0){x=1
break}t.j7(0,C.j9)
t=u.gS()
t.a0(0,$.CO().$1("c:"+u.a.d.a).gaX(),y.M).d4(0)
x=3
return A.d(t.a0(0,$.aWc().$1(u.a.d.a).gaX(),y.Q).mn(s),$async$TD)
case 3:u.a5v()
case 1:return A.l(v,w)}})
return A.m($async$TD,w)},
Kl(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Kl=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(E.rH(q),$async$Kl)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gS().a0(0,$.aWc().$1(s.a.d.a).gaX(),y.Q).mU(r),$async$Kl)
case 8:s.a5v()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.O(y.q).f.a3(F.a9p)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Kl,w)},
apC(d,e,f){var x=null
if(!d||e.Q)return f
return A.cW(x,f,C.Z,!1,x,x,x,x,x,x,x,new B.cdO(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.aV)},
Km(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Km=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:l=s.a.d.e
k=$.S().b
k===$&&A.b()
p=k.gbD().e.a
p=p==null?null:p.r
r=p==null?null:p.a
if(l==null||r==null){x=1
break}q=null
u=4
x=7
return A.d(k.R("bookings").ao(0,"id, people").W("wedding_id",l).W("partner_id",r).ep("status",["awaiting_deposit","confirmed"]).da(0,"created_at",!1).i8(1).d3(),$async$Km)
case 7:q=e
u=2
x=6
break
case 4:u=3
j=t.pop()
x=6
break
case 3:x=2
break
case 6:k=s.c
if(k==null){x=1
break}if(q==null){k.O(y.q).f.a3(F.a9k)
x=1
break}p=A.a1(J.i(q,"id"))
n=s.a.d.b
m=A.aL(J.i(q,"people"))
m=m==null?null:C.k.F(m)
if(m==null)m=1
x=8
return A.d(D.alD(k,p,m,null,n,"Reserva \xb7 "+n),$async$Km)
case 8:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Km,w)},
u(d){var x,w,v,u=this,t=null,s=u.gS(),r=$.aWc(),q=y.n,p=s.H(r.$1(u.a.d.a),q)
s.pu(r.$1(u.a.d.a),new B.cdR(u),q)
q=u.a.d
q=A.bC(!1,E.cTm(q.d,t,A.a([new A.a3("Pedir altera\xe7\xe3o",u.gbci())],y.k),q.b,t,new B.cdS(u,d,p),t,t,!1),t,C.a_,!1)
if(p.a&&p.b.length===0)r=P.z5
else{r=u.x
x=p.b
w=x.length
x=D.dcm(new B.cdT(u,d),new B.cdU(),x,t)
v=A.a8(x).i("cX<1>")
x=A.U(new A.cX(x,v),v.i("b_.E"))
r=new E.Kk(r,w,A.d0(x,r,C.bj,t,t,!0,C.a2,!1),t)}return A.cP(t,C.lg,A.A(A.a([q,A.a4(r,1),A.kI(new E.R5(E.cZ0(s.H($.CO().$1("c:"+u.a.d.a),y.a)),t),C.a7,!0),E.cTl(u.w,"Escreve uma mensagem",u.gbch(),new B.cdV(u),t,u.gbcj(),C.a8)],y.p),C.w,C.h,C.l,0,C.u),!0,t)}}
B.afI.prototype={
P(){return new B.aKv()}}
B.aKv.prototype={
ah(){this.aA()
this.apB()},
apB(){var x=this.a.c.w
if(x==null)return
O.PZ(x).b7(new B.chH(this,x),y.P).eu(new B.chI())},
E8(d){return this.bb1(d)},
bb1(a3){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$E8=A.j(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:a1=s.a.c.w
if(a1==null){x=1
break}r=null
u=4
q=$.S().b
q===$&&A.b()
x=7
return A.d(q.R("proposals").ao(0,"id, title, description, price, deposit_amount, created_at, quote_request_id, quote_requests(id, wedding_id, event_date, people, message, location)").W("id",a1).d3(),$async$E8)
case 7:r=a5
u=2
x=6
break
case 4:u=3
a2=t.pop()
x=6
break
case 3:x=2
break
case 6:if(r==null||s.c==null){x=1
break}o=y.h.a(J.i(r,"quote_requests"))
q=o==null
n=q?null:J.i(o,"event_date")
m=A.dq(A.q(n==null?"":n))
n=A.a([],y.s)
l=m==null
if(!l)n.push(C.ez[A.hi(m)-1]+", "+A.aH(m)+" "+C.bO[A.ax(m)-1])
if((q?null:J.i(o,"people"))!=null){o.toString
n.push(A.q(J.i(o,"people"))+" pessoas")}k=A.D(q?null:J.i(o,"location"))
k=k==null?null:k.length!==0
if(k===!0){o.toString
n.push(A.a1(J.i(o,"location")))}j=C.e.a2(n," \xb7 ")
n=s.c
n.toString
k=A.q(J.i(r,"quote_request_id"))
i=q?null:J.i(o,"wedding_id")
i=A.q(i==null?"":i)
h=s.a.d
l=l?"Pedido":""+A.aH(m)+" "+C.bO[A.ax(m)-1]
g=A.D(q?null:J.i(o,"message"))
if(a3){q=J.i(r,"title")
q=A.q(q==null?"":q)
f=A.D(J.i(r,"description"))
e=A.aL(J.i(r,"price"))
if(e==null)e=0
d=A.aL(J.i(r,"deposit_amount"))
if(d==null)d=0
a0=J.i(r,"created_at")
q=new B.bxh(a1,q,f,e,d,A.dq(A.q(a0==null?"":a0)))}else q=null
x=8
return A.d(N.alE(n,h,i,l,q,k,j,g,"Pedido de or\xe7amento"),$async$E8)
case 8:if(a5&&s.c!=null)s.apB()
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$E8,w)},
u(d){var x,w,v,u=this,t=null,s="PROPOSTA",r=u.a,q=r.c,p=q.x
if(C.f.C(p==null?"":p).length===0)x="Proposta"
else{p.toString
x=C.f.C(p)}p=u.d
w=p==="accepted"
if(w){v=u.e
v=v==="deposit_paid"||v==="final_due"||v==="paid"||v==="completed"}else v=!1
if(v){r=r.d
p=A.a([],y.L)
w=q.z
if(w!=null)p.push(new A.a3("Sinal",A.aM(w,!1)))
return D.uM(A.a([new D.jR("Ver reserva",new B.chJ(d),!1)],y.l),t,"Reserva confirmada",C.i5,t,t,t,p,"Dia reservado na tua agenda",t,r+" \xb7 "+x,F.ng)}if(w&&u.e==="cancelled")return D.uM(F.FA,t,"Reserva cancelada",H.lT,t,t,t,G.kI,"Cancelada",t,r.d+" \xb7 "+x,F.fo)
if(w){r=A.a([],y.L)
p=q.z
if(p!=null)r.push(new A.a3("Sinal",A.aM(p,!1)))
return D.uM(F.FA,t,s,K.vG,t,"Avisamos-te quando o sinal for pago.",t,r,"Aceite \xb7 \xe0 espera do sinal",t,x,F.nf)}if(p==="rejected"||p==="declined"||p==="expired"){r=p==="expired"?"Expirou":"Recusada"
p=q.y
p=p==null?t:A.aM(p,!1)
return D.uM(A.a([new D.jR("Enviar outra proposta",new B.chK(u),!0)],y.l),t,s,H.lT,t,t,t,G.kI,r,p,x,F.fo)}r=q.y
p=r==null?t:"Recebes "+A.aM(r,!1)+" menos a taxa de servi\xe7o."
return D.uM(A.a([new D.jR("Editar proposta",new B.chL(u),!1)],y.l),q.z,s,K.vG,t,p,r,G.kI,"Enviada \xb7 \xe0 espera da resposta",t,x,F.fo)}}
B.bxh.prototype={}
var z=a.updateTypes(["F<~>()","kh()","jB(@)","~(kh?,kh)","x(jB)","e(jB,x)","F1(c)"])
B.blk.prototype={
$1(d){return this.a.a5u(y.b.a(d))},
$S:z+2}
B.cdP.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.iJ(0,C.cq,C.lB)},
$S:6}
B.cdO.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(L.PV(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(L.Q7(s,new B.cdN(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.cdN.prototype={
$0(){var x=this.a
return x.gS().a0(0,$.aWc().$1(x.a.d.a).gaX(),y.Q).jV(0,this.b.a)},
$S:1}
B.cdR.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a5v()},
$S:z+3}
B.cdS.prototype={
$0(){var x,w,v,u,t,s=this.a.gS(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("cX<1>"),x=new A.cX(x,w),x=new A.al(x,x.gA(0),w.i("al<b_.E>")),w=w.i("b_.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ay:t
r.push(new E.Bc(u,v==null?"":v,null,null))}}return E.a_p(this.b,s,!1,I.rT,r)},
$S:0}
B.cdU.prototype={
$1(d){return d.d},
$S:z+4}
B.cdT.prototype={
$2(d,e){var x,w=this,v=null,u=d.at
if(u!=null){x=d.ax
if(x==null)x="file"
x=w.a.apC(e,d,new E.R2(u,x,d.ay,e,v))
u=x}else{u=d.as
if(u!=null)u=new D.R0(u,e,v,v)
else{if(d.Q){u=d.e
u=C.f.b2(u==null?"":u,"Pediu um or\xe7amento")
if(u)w.a.a.toString}else u=!1
if(u){u=w.a.a.d
u=D.d60(u.e,v,v,u.b,u.f,!0)}else if(d.w!=null)u=new B.afI(d,w.a.a.d.b,v)
else{u=w.a
x=d.e
if(e)u=u.apC(!0,d,new E.zI(x==null?"":x,!0,v,v))
else u=A.cW(v,new E.zI(x==null?"":x,!1,v,v),C.Z,!1,v,v,v,v,v,v,v,new B.cdQ(u,w.b,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!1,C.aV)}}}return u},
$S:z+5}
B.cdQ.prototype={
$0(){return M.ww(this.b,this.a.gS(),!1,null,null,I.rT,this.c.a)},
$S:0}
B.cdV.prototype={
$1(d){var x,w,v=this.a,u=v.gS(),t=u.a0(0,$.ba(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.C(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.C(s)}else{s=s?null:t.b
w=s==null?"":s}u.a0(0,$.CO().$1("c:"+v.a.d.a).gaX(),y.M).adb(w)},
$S:3}
B.chH.prototype={
$1(d){return this.aF3(d)},
aF3(d){var x=0,w=A.n(y.P),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null){x=1
break}s.p(new B.chF(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(D.PY(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.p(new B.chG(s,t))
case 4:case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:338}
B.chF.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.chG.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.chI.prototype={
$1(d){},
$S:13}
B.chJ.prototype={
$0(){return A.ai(this.a).au("/partner-requests",null,y.X)},
$S:0}
B.chK.prototype={
$0(){return this.a.E8(!1)},
$S:0}
B.chL.prototype={
$0(){return this.a.E8(!0)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dJV","dsj",6)
var u
w(u=B.F1.prototype,"giM","d6",1)
v(u,"gNX","m8",0)
w(u=B.afy.prototype,"gbcj","TD",0)
w(u,"gbch","Kl",0)
w(u,"gbci","Km",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.F1,A.fd)
w(A.bw,[B.blk,B.cdP,B.cdU,B.cdV,B.chH,B.chI])
x(B.a5O,A.dC)
x(B.afy,A.dy)
w(A.bQ,[B.cdO,B.cdN,B.cdS,B.cdQ,B.chF,B.chG,B.chJ,B.chK,B.chL])
w(A.cO,[B.cdR,B.cdT])
x(B.afI,A.G)
x(B.aKv,A.Z)
x(B.bxh,A.J)})()
A.bn(b.typeUniverse,JSON.parse('{"F1":{"fd":["kh"]},"a5O":{"G":[],"e":[],"f":[]},"afI":{"G":[],"e":[],"f":[]},"afy":{"Z":["a5O"]},"aKv":{"Z":["afI"]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cE"),y:x("jB"),n:x("kh"),l:x("r<jR>"),t:x("r<jB>"),L:x("r<+(c,c)>"),k:x("r<+(c,~())>"),Y:x("r<Bc>"),s:x("r<c>"),p:x("r<e>"),a:x("t<c>"),b:x("a5<c,@>"),P:x("bx"),Q:x("F1"),N:x("c"),M:x("w6"),q:x("dm"),z:x("@"),h:x("a5<c,@>?"),X:x("J?"),T:x("c?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWC","aWc",()=>F.La.$3$1(B.dJV(),y.Q,y.n,y.N))})()};
(a=>{a["edzVs9Netrrajbq/mYh0fnz+N9s="]=a.current})($__dart_deferred_initializers__);