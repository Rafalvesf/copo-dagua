((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,H,B={
dr6(d){return new B.EY(d)},
EY:function EY(d){this.x=d
this.b=null},
bl3:function bl3(d){this.a=d},
dr7(d){return new B.a5E(d,null)},
a5E:function a5E(d,e){this.d=d
this.a=e},
afq:function afq(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
cdf:function cdf(d){this.a=d},
cde:function cde(d,e){this.a=d
this.b=e},
cdd:function cdd(d,e){this.a=d
this.b=e},
cdh:function cdh(d){this.a=d},
cdi:function cdi(d,e,f){this.a=d
this.b=e
this.c=f},
cdk:function cdk(){},
cdj:function cdj(d,e){this.a=d
this.b=e},
cdg:function cdg(d,e,f){this.a=d
this.b=e
this.c=f},
cdl:function cdl(d){this.a=d},
afA:function afA(d,e){this.c=d
this.a=e},
aKj:function aKj(){var _=this
_.c=_.a=_.e=_.d=null},
ch7:function ch7(d,e){this.a=d
this.b=e},
ch5:function ch5(d,e){this.a=d
this.b=e},
ch6:function ch6(d,e){this.a=d
this.b=e},
ch8:function ch8(){}},F,D,G,E,I,L,M
J=c[1]
A=c[0]
C=c[2]
K=c[153]
H=c[234]
B=a.updateHolder(c[37],B)
F=c[351]
D=c[119]
G=c[83]
E=c[229]
I=c[134]
L=c[116]
M=c[231]
B.EY.prototype={
d5(){A.jg(this.gNK(this),y.H)
return E.Ly},
m8(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$m8=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.sa3(0,t.ga3(0).io(!0))
s=$.S()
r=s.b
r===$&&A.b()
q=t.x
n=G
m=!1
l=J
x=2
return A.d(r.R("messages").cj(0).X("conversation_id",q).dl(0,"created_at",!0),$async$m8)
case 2:t.sa3(0,new n.kg(m,l.d4(f,new B.bl3(t),y.y).by(0)))
v=4
r=y.z
x=7
return A.d(s.b.aT("mark_conversation_read",A.T(["p_conversation_id",q],y.N,r),r),$async$m8)
case 7:A.eP(t).ai($.cZA())
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
mm(d){return this.aIP(d)},
aIP(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$mm=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=C.f.C(d)
if(p.length===0){x=1
break}t=$.S()
s=t.b
s===$&&A.b()
s=s.R("messages")
t=t.b.gbD().e.a
r=y.N
x=3
return A.d(s.d8(0,A.T(["conversation_id",u.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cj(0).dP(0),$async$mm)
case 3:q=f
r=u.ga3(0)
t=A.U(u.ga3(0).b,y.y)
t.push(u.a5c(q))
u.sa3(0,r.F5(t))
case 1:return A.l(v,w)}})
return A.m($async$mm,w)},
mU(d){return this.aIK(d)},
aIK(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mU=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.S()
s=t.b
s===$&&A.b()
s=s.R("messages")
t=t.b.gbD().e.a
x=2
return A.d(s.d8(0,A.T(["conversation_id",v.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cj(0).dP(0),$async$mU)
case 2:u=f
t=v.ga3(0)
s=A.U(v.ga3(0).b,y.y)
s.push(v.a5c(u))
v.sa3(0,t.F5(s))
return A.l(null,w)}})
return A.m($async$mU,w)},
jV(d,e){return this.bsq(0,e)},
bsq(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jV=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.S().b
p===$&&A.b()
x=2
return A.d(p.aT("delete_message",A.T(["p_message_id",e],y.N,y.z),y.H),$async$jV)
case 2:p=v.ga3(0)
u=A.a([],y.t)
for(t=v.ga3(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa3(0,p.F5(u))
return A.l(null,w)}})
return A.m($async$jV,w)},
a5c(d){var x,w=J.a7(d),v=A.a2(w.h(d,"id")),u=A.a2(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.E(w.h(d,"body")),r=A.E(w.h(d,"attachment_url")),q=A.E(w.h(d,"attachment_type")),p=A.E(w.h(d,"attachment_name")),o=A.da(A.a2(w.h(d,"created_at"))),n=A.E(w.h(d,"proposal_id")),m=A.E(w.h(d,"proposal_title")),l=A.aL(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aL(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dX(w.h(d,"is_quote_request_notice"))
return G.d_M(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a5E.prototype={
P(){return new B.afq(new A.aJ(C.ap,$.ad()),A.nN(null,0,null,null))}}
B.afq.prototype={
m(){var x=this.w
x.Z$=$.ad()
x.W$=0
this.x.m()
this.a6()},
a5d(){$.az.k4$.push(new B.cdf(this))},
To(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$To=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.C(s).length===0){x=1
break}t.j6(0,C.j5)
t=u.gS()
t.a0(0,$.CL().$1("c:"+u.a.d.a).gaW(),y.M).d3(0)
x=3
return A.d(t.a0(0,$.aVZ().$1(u.a.d.a).gaW(),y.Q).mm(s),$async$To)
case 3:u.a5d()
case 1:return A.l(v,w)}})
return A.m($async$To,w)},
Kb(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Kb=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(D.rG(q),$async$Kb)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gS().a0(0,$.aVZ().$1(s.a.d.a).gaW(),y.Q).mU(r),$async$Kb)
case 8:s.a5d()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.O(y.q).f.a4(E.a9o)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Kb,w)},
api(d,e,f){var x=null
if(!d||e.Q)return f
return A.db(x,f,C.a0,!1,x,x,x,x,x,x,x,new B.cde(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.b_)},
u(d){var x,w,v,u=this,t=null,s=u.gS(),r=$.aVZ(),q=y.n,p=s.H(r.$1(u.a.d.a),q)
s.pu(r.$1(u.a.d.a),new B.cdh(u),q)
q=u.a.d
q=A.bC(!1,D.cSa(q.d,t,q.b,t,new B.cdi(u,d,p),t,!1),t,C.Z,!1)
if(p.a&&p.b.length===0)r=M.yW
else{r=u.x
x=p.b
w=x.length
x=G.dbb(new B.cdj(u,d),new B.cdk(),x,t)
v=A.a8(x).i("cW<1>")
x=A.U(new A.cW(x,v),v.i("aZ.E"))
r=new D.Kf(r,w,A.cX(x,r,C.bj,t,t,!0,C.a2,!1),t)}return A.cO(t,C.lc,A.B(A.a([q,A.a4(r,1),A.kh(new D.QZ(D.cXQ(s.H($.CL().$1("c:"+u.a.d.a),y.a)),t),C.aa,!0),new D.QX(u.w,u.gbbU(),u.gbbT(),"Escreve uma mensagem",new B.cdl(u),t)],y.p),C.w,C.i,C.m,0,C.v),!0,t)}}
B.afA.prototype={
P(){return new B.aKj()}}
B.aKj.prototype={
ak(){this.aD()
var x=this.a.c.w
if(x==null)return
L.PS(x).b7(new B.ch7(this,x),y.P).es(new B.ch8())},
u(d){var x,w,v,u,t,s,r,q=null,p=this.a.c,o=this.d
A:{if("accepted"===o){x=this.e
B:{if("deposit_paid"===x||"final_due"===x){w=F.bRK
break B}if("paid"===x||"completed"===x){w=E.a7f
break B}if("cancelled"===x){w=E.a7l
break B}w=F.bSN
break B}break A}if("rejected"===o||"declined"===o){w=F.bSq
break A}if("expired"===o){w=F.bRU
break A}w=F.bTn
break A}v=w.a
u=q
t=w.b
u=t
s=v
w=p.x
if(C.f.C(w==null?"":w).length===0)w="Proposta"
else{w.toString
w=C.f.C(w)}r=o==null||o==="sent"?"Recebes o total menos a taxa de servi\xe7o.":q
return G.d_N(E.bAA,p.z,"PROPOSTA",q,r,p.y,s,q,w,u)}}
var z=a.updateTypes(["F<~>()","kg()","jz(@)","~(kg?,kg)","x(jz)","e(jz,x)","EY(c)"])
B.bl3.prototype={
$1(d){return this.a.a5c(y.b.a(d))},
$S:z+2}
B.cdf.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.iI(0,C.cq,C.lz)},
$S:6}
B.cde.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(I.PO(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(I.Q0(s,new B.cdd(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.cdd.prototype={
$0(){var x=this.a
return x.gS().a0(0,$.aVZ().$1(x.a.d.a).gaW(),y.Q).jV(0,this.b.a)},
$S:1}
B.cdh.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a5d()},
$S:z+3}
B.cdi.prototype={
$0(){var x,w,v,u,t,s=this.a.gS(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("cW<1>"),x=new A.cW(x,w),x=new A.ak(x,x.gA(0),w.i("ak<aZ.E>")),w=w.i("aZ.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new D.Bb(u,v==null?"":v,null,null))}}return D.a_e(this.b,s,!1,H.rL,r)},
$S:0}
B.cdk.prototype={
$1(d){return d.d},
$S:z+4}
B.cdj.prototype={
$2(d,e){var x,w=null,v=d.as
if(v!=null){x=d.at
if(x==null)x="file"
x=this.a.api(e,d,new D.QV(v,x,d.ax,e,w))
v=x}else if(d.w!=null)v=new B.afA(d,w)
else{v=this.a
x=d.e
if(e)v=v.api(!0,d,new D.zI(x==null?"":x,!0,w,w))
else v=A.db(w,new D.zI(x==null?"":x,!1,w,w),C.a0,!1,w,w,w,w,w,w,w,new B.cdg(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.b_)}return v},
$S:z+5}
B.cdg.prototype={
$0(){return K.wu(this.b,this.a.gS(),!1,null,null,H.rL,this.c.a)},
$S:0}
B.cdl.prototype={
$1(d){var x,w,v=this.a,u=v.gS(),t=u.a0(0,$.b8(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.C(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.C(s)}else{s=s?null:t.b
w=s==null?"":s}u.a0(0,$.CL().$1("c:"+v.a.d.a).gaW(),y.M).acU(w)},
$S:3}
B.ch7.prototype={
$1(d){return this.aEK(d)},
aEK(d){var x=0,w=A.n(y.P),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null){x=1
break}s.q(new B.ch5(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(G.PR(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.q(new B.ch6(s,t))
case 4:case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:473}
B.ch5.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.ch6.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.ch8.prototype={
$1(d){},
$S:13};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dII","dr6",6)
var u
w(u=B.EY.prototype,"giL","d5",1)
v(u,"gNK","m8",0)
w(u=B.afq.prototype,"gbbU","To",0)
w(u,"gbbT","Kb",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.EY,A.fc)
w(A.bw,[B.bl3,B.cdf,B.cdk,B.cdl,B.ch7,B.ch8])
x(B.a5E,A.dB)
x(B.afq,A.dx)
w(A.bS,[B.cde,B.cdd,B.cdi,B.cdg,B.ch5,B.ch6])
w(A.cQ,[B.cdh,B.cdj])
x(B.afA,A.G)
x(B.aKj,A.a_)})()
A.bp(b.typeUniverse,JSON.parse('{"EY":{"fc":["kg"]},"a5E":{"G":[],"e":[],"f":[]},"afA":{"G":[],"e":[],"f":[]},"afq":{"a_":["a5E"]},"aKj":{"a_":["afA"]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cE"),y:x("jz"),n:x("kg"),t:x("r<jz>"),Y:x("r<Bb>"),p:x("r<e>"),a:x("t<c>"),b:x("a5<c,@>"),P:x("bx"),Q:x("EY"),N:x("c"),M:x("w5"),q:x("du"),z:x("@"),T:x("c?"),H:x("~")}})();(function constants(){F.bRK=new A.a3("Aceite \xb7 sinal recebido",E.u8)
F.bRU=new A.a3("Expirou",E.n8)
F.bSq=new A.a3("Recusada",E.n8)
F.bSN=new A.a3("Aceite \xb7 \xe0 espera do sinal",E.u7)
F.bTn=new A.a3("Enviada \xb7 \xe0 espera da resposta",E.n8)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVo","aVZ",()=>E.L7.$3$1(B.dII(),y.Q,y.n,y.N))})()};
(a=>{a["pp84t7bEkLp90ZkPRsoImDUgJ1w="]=a.current})($__dart_deferred_initializers__);