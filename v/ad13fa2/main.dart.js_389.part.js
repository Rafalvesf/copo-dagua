((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,G,B={
d11(d){return new B.CL(d)},
CL:function CL(d){this.x=d
this.b=null},
baT:function baT(d){this.a=d},
d12(d){return new B.a1q(d,null)},
a1q:function a1q(d,e){this.d=d
this.a=e},
aaC:function aaC(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bXf:function bXf(d){this.a=d},
bXe:function bXe(d,e){this.a=d
this.b=e},
bXd:function bXd(d,e){this.a=d
this.b=e},
bXh:function bXh(d){this.a=d},
bXi:function bXi(d,e,f){this.a=d
this.b=e
this.c=f},
bXk:function bXk(){},
bXj:function bXj(d,e){this.a=d
this.b=e},
bXg:function bXg(d,e,f){this.a=d
this.b=e
this.c=f},
bXl:function bXl(d){this.a=d}},D,E,F,H
J=c[1]
A=c[0]
C=c[2]
I=c[146]
G=c[241]
B=a.updateHolder(c[34],B)
D=c[111]
E=c[77]
F=c[239]
H=c[128]
B.CL.prototype={
cY(){A.iC(this.gLH(this),y.H)
return F.J1},
lF(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$lF=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.sa1(0,t.ga1(0).i8(!0))
s=$.W()
r=s.b
r===$&&A.b()
q=t.x
n=E
m=!1
l=J
x=2
return A.d(r.T("messages").cw(0).a_("conversation_id",q).dF(0,"created_at",!0),$async$lF)
case 2:t.sa1(0,new n.jH(m,l.d1(f,new B.baT(t),y.y).bB(0)))
v=4
r=y.z
x=7
return A.d(s.b.b9("mark_conversation_read",A.Q(["p_conversation_id",q],y.N,r),r),$async$lF)
case 7:A.em(t).av($.cCl())
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
return A.m($async$lF,w)},
mz(d){return this.aDd(d)},
aDd(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$mz=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=C.f.L(d)
if(p.length===0){x=1
break}t=$.W()
s=t.b
s===$&&A.b()
s=s.T("messages")
t=t.b.gbI().e.a
r=y.N
x=3
return A.d(s.dn(0,A.Q(["conversation_id",u.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cw(0).e_(0),$async$mz)
case 3:q=f
r=u.ga1(0)
t=A.X(u.ga1(0).b,y.y)
t.push(u.a2a(q))
u.sa1(0,r.Dv(t))
case 1:return A.l(v,w)}})
return A.m($async$mz,w)},
my(d){return this.aD8(d)},
aD8(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$my=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.W()
s=t.b
s===$&&A.b()
s=s.T("messages")
t=t.b.gbI().e.a
x=2
return A.d(s.dn(0,A.Q(["conversation_id",v.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cw(0).e_(0),$async$my)
case 2:u=f
t=v.ga1(0)
s=A.X(v.ga1(0).b,y.y)
s.push(v.a2a(u))
v.sa1(0,t.Dv(s))
return A.l(null,w)}})
return A.m($async$my,w)},
jE(d,e){return this.bk4(0,e)},
bk4(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jE=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.W().b
p===$&&A.b()
x=2
return A.d(p.b9("delete_message",A.Q(["p_message_id",e],y.N,y.z),y.H),$async$jE)
case 2:p=v.ga1(0)
u=A.a([],y.t)
for(t=v.ga1(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.K)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa1(0,p.Dv(u))
return A.l(null,w)}})
return A.m($async$jE,w)},
a2a(d){var x,w=J.a3(d),v=A.a1(w.h(d,"id")),u=A.a1(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.P(w.h(d,"body")),r=A.P(w.h(d,"attachment_url")),q=A.P(w.h(d,"attachment_type")),p=A.P(w.h(d,"attachment_name")),o=A.de(A.a1(w.h(d,"created_at"))),n=A.P(w.h(d,"proposal_id")),m=A.P(w.h(d,"proposal_title")),l=A.b8(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.b8(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dN(w.h(d,"is_quote_request_notice"))
return E.cDt(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a1q.prototype={
R(){return new B.aaC(new A.aP(C.am,$.ah()),A.JY(null,0,null,null))}}
B.aaC.prototype={
m(){var x=this.w
x.a0$=$.ah()
x.V$=0
this.x.m()
this.aa()},
a2b(){$.aw.k4$.push(new B.bXf(this))},
R_(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$R_=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.L(s).length===0){x=1
break}t.jv(0,C.k2)
t=u.gU()
t.a2(0,$.AJ().$1("c:"+u.a.d.a).gaV(),y.M).fL(0)
x=3
return A.d(t.a2(0,$.aO0().$1(u.a.d.a).gaV(),y.Q).mz(s),$async$R_)
case 3:u.a2b()
case 1:return A.l(v,w)}})
return A.m($async$R_,w)},
Ih(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Ih=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(D.qy(q),$async$Ih)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gU().a2(0,$.aO0().$1(s.a.d.a).gaV(),y.Q).my(r),$async$Ih)
case 8:s.a2b()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.S(y.q).f.ad(F.a60)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ih,w)},
alm(d,e,f){var x=null
if(!d||e.Q)return f
return A.dI(x,f,C.Y,!1,x,x,x,x,x,x,x,new B.bXe(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bg)},
u(d){var x,w=this,v=null,u=w.gU(),t=$.aO0(),s=y.n,r=u.M(t.$1(w.a.d.a),s)
u.p8(t.$1(w.a.d.a),new B.bXh(w),s)
s=w.a.d
s=A.bp(!1,D.cvn(s.d,v,s.b,v,new B.bXi(w,d,r),v,!1),v,C.V,!1)
if(r.a&&r.b.length===0)t=C.bl
else{t=E.cO6(new B.bXj(w,d),new B.bXk(),r.b,v)
x=A.a6(t).i("cV<1>")
t=A.X(new A.cV(t,x),x.i("b2.E"))
t=A.cO(t,w.x,C.bF,v,v,!0,C.Z,!1)}return A.cL(v,C.km,A.J(A.a([s,A.ac(t,1),A.nq(new D.O0(D.cAF(u.M($.AJ().$1("c:"+w.a.d.a),y.a)),v),C.ag,!0),new D.NZ(w.w,w.gb4y(),w.gb4x(),"Escreve uma mensagem",new B.bXl(w),v)],y.p),C.x,C.m,C.q,0,C.w),!0,v)}}
var z=a.updateTypes(["H<~>()","jH()","kn(@)","~(jH?,jH)","z(kn)","e(kn,z)","CL(c)"])
B.baT.prototype={
$1(d){return this.a.a2a(y.P.a(d))},
$S:z+2}
B.bXf.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.jh(0,C.cJ,C.kI)},
$S:6}
B.bXe.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(H.MY(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(H.N6(s,new B.bXd(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.bXd.prototype={
$0(){var x=this.a
return x.gU().a2(0,$.aO0().$1(x.a.d.a).gaV(),y.Q).jE(0,this.b.a)},
$S:2}
B.bXh.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a2b()},
$S:z+3}
B.bXi.prototype={
$0(){var x,w,v,u,t,s=this.a.gU(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a6(x).i("cV<1>"),x=new A.cV(x,w),x=new A.ap(x,x.gv(0),w.i("ap<b2.E>")),w=w.i("b2.E");x.p();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new D.ze(u,v==null?"":v,null,null))}}return D.Wp(this.b,s,!1,G.qr,r)},
$S:0}
B.bXk.prototype={
$1(d){return d.d},
$S:z+4}
B.bXj.prototype={
$2(d,e){var x,w=null,v=d.as
if(v!=null){x=d.at
if(x==null)x="file"
x=this.a.alm(e,d,new D.NY(v,x,d.ax,e,w))
v=x}else if(d.w!=null){v=d.x
if(v==null)v="Proposta"
v=E.cDu(F.bqO,d.z,"PROPOSTA ENVIADA",w,w,d.y,w,v)}else{v=this.a
x=d.e
if(e)v=v.alm(!0,d,new D.xE(x==null?"":x,!0,w,w))
else v=A.dI(w,new D.xE(x==null?"":x,!1,w,w),C.Y,!1,w,w,w,w,w,w,w,new B.bXg(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.bg)}return v},
$S:z+5}
B.bXg.prototype={
$0(){return I.uP(this.b,this.a.gU(),!1,null,null,G.qr,this.c.a)},
$S:0}
B.bXl.prototype={
$1(d){var x,w,v=this.a,u=v.gU(),t=u.a2(0,$.be(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.L(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.L(s)}else{s=s?null:t.b
w=s==null?"":s}u.a2(0,$.AJ().$1("c:"+v.a.d.a).gaV(),y.M).a9k(w)},
$S:5};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dgN","d11",6)
var u
w(u=B.CL.prototype,"gi7","cY",1)
v(u,"gLH","lF",0)
w(u=B.aaC.prototype,"gb4y","R_",0)
w(u,"gb4x","Ih",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CL,A.eM)
w(A.bv,[B.baT,B.bXf,B.bXk,B.bXl])
x(B.a1q,A.dx)
x(B.aaC,A.dt)
w(A.bI,[B.bXe,B.bXd,B.bXi,B.bXg])
w(A.cD,[B.bXh,B.bXj])})()
A.bx(b.typeUniverse,JSON.parse('{"CL":{"eM":["jH"]},"a1q":{"G":[],"e":[],"f":[]},"aaC":{"a0":["a1q"]}}'))
var y=(function rtii(){var x=A.v
return{D:x("cC"),y:x("kn"),n:x("jH"),t:x("q<kn>"),Y:x("q<ze>"),p:x("q<e>"),a:x("t<c>"),P:x("a2<c,@>"),Q:x("CL"),N:x("c"),M:x("uq"),q:x("dB"),z:x("@"),T:x("c?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dtj","aO0",()=>F.IC.$3$1(B.dgN(),y.Q,y.n,y.N))})()};
(a=>{a["+i+BAEcNNf7RBD9ang0MsmMzwEM="]=a.current})($__dart_deferred_initializers__);