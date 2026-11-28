((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,G,B={
dpu(d){return new B.EU(d)},
EU:function EU(d){this.x=d
this.b=null},
bkx:function bkx(d){this.a=d},
dpv(d){return new B.a5r(d,null)},
a5r:function a5r(d,e){this.d=d
this.a=e},
af7:function af7(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
cch:function cch(d){this.a=d},
ccg:function ccg(d,e){this.a=d
this.b=e},
ccf:function ccf(d,e){this.a=d
this.b=e},
ccj:function ccj(d){this.a=d},
cck:function cck(d,e,f){this.a=d
this.b=e
this.c=f},
ccm:function ccm(){},
ccl:function ccl(d,e){this.a=d
this.b=e},
cci:function cci(d,e,f){this.a=d
this.b=e
this.c=f},
ccn:function ccn(d){this.a=d}},D,E,F,H,K
J=c[1]
A=c[0]
C=c[2]
I=c[150]
G=c[231]
B=a.updateHolder(c[37],B)
D=c[116]
E=c[81]
F=c[226]
H=c[131]
K=c[228]
B.EU.prototype={
d4(){A.jf(this.gND(this),y.H)
return F.La},
m6(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$m6=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.sa2(0,t.ga2(0).im(!0))
s=$.T()
r=s.b
r===$&&A.b()
q=t.x
n=E
m=!1
l=J
x=2
return A.d(r.R("messages").cj(0).W("conversation_id",q).dl(0,"created_at",!0),$async$m6)
case 2:t.sa2(0,new n.kf(m,l.d3(f,new B.bkx(t),y.y).by(0)))
v=4
r=y.z
x=7
return A.d(s.b.aT("mark_conversation_read",A.S(["p_conversation_id",q],y.N,r),r),$async$m6)
case 7:A.eP(t).ai($.cY7())
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
return A.m($async$m6,w)},
mk(d){return this.aIy(d)},
aIy(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
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
return A.d(s.de(0,A.S(["conversation_id",u.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cj(0).dP(0),$async$mk)
case 3:q=f
r=u.ga2(0)
t=A.V(u.ga2(0).b,y.y)
t.push(u.a5_(q))
u.sa2(0,r.F2(t))
case 1:return A.l(v,w)}})
return A.m($async$mk,w)},
mT(d){return this.aIt(d)},
aIt(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mT=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.T()
s=t.b
s===$&&A.b()
s=s.R("messages")
t=t.b.gbE().e.a
x=2
return A.d(s.de(0,A.S(["conversation_id",v.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cj(0).dP(0),$async$mT)
case 2:u=f
t=v.ga2(0)
s=A.V(v.ga2(0).b,y.y)
s.push(v.a5_(u))
v.sa2(0,t.F2(s))
return A.l(null,w)}})
return A.m($async$mT,w)},
jV(d,e){return this.brT(0,e)},
brT(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
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
a5_(d){var x,w=J.a7(d),v=A.a1(w.h(d,"id")),u=A.a1(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.C(w.h(d,"body")),r=A.C(w.h(d,"attachment_url")),q=A.C(w.h(d,"attachment_type")),p=A.C(w.h(d,"attachment_name")),o=A.d9(A.a1(w.h(d,"created_at"))),n=A.C(w.h(d,"proposal_id")),m=A.C(w.h(d,"proposal_title")),l=A.aK(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aK(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dU(w.h(d,"is_quote_request_notice"))
return E.cZj(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a5r.prototype={
P(){return new B.af7(new A.aI(C.ao,$.ac()),A.oB(null,0,null,null))}}
B.af7.prototype={
m(){var x=this.w
x.Z$=$.ac()
x.X$=0
this.x.m()
this.a7()},
a50(){$.az.k4$.push(new B.cch(this))},
Tf(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Tf=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.D(s).length===0){x=1
break}t.j4(0,C.iY)
t=u.gT()
t.a1(0,$.CI().$1("c:"+u.a.d.a).gaX(),y.M).d2(0)
x=3
return A.d(t.a1(0,$.aVq().$1(u.a.d.a).gaX(),y.Q).mk(s),$async$Tf)
case 3:u.a50()
case 1:return A.l(v,w)}})
return A.m($async$Tf,w)},
K4(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$K4=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(D.rC(q),$async$K4)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gT().a1(0,$.aVq().$1(s.a.d.a).gaX(),y.Q).mT(r),$async$K4)
case 8:s.a50()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.O(y.q).f.a4(F.a90)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$K4,w)},
ap4(d,e,f){var x=null
if(!d||e.Q)return f
return A.dP(x,f,C.a2,!1,x,x,x,x,x,x,x,new B.ccg(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bd)},
u(d){var x,w=this,v=null,u=w.gT(),t=$.aVq(),s=y.n,r=u.H(t.$1(w.a.d.a),s)
u.pt(t.$1(w.a.d.a),new B.ccj(w),s)
s=w.a.d
s=A.bC(!1,D.cQI(s.d,v,s.b,v,new B.cck(w,d,r),v,!1),v,C.a_,!1)
if(r.a&&r.b.length===0)t=K.yH
else{t=E.d9C(new B.ccl(w,d),new B.ccm(),r.b,v)
x=A.a8(t).i("d_<1>")
t=A.V(new A.d_(t,x),x.i("aZ.E"))
t=A.cZ(t,w.x,C.bg,v,v,!0,C.a1,!1)}return A.cM(v,C.l3,A.B(A.a([s,A.a6(t,1),A.kF(new D.QO(D.cWn(u.H($.CI().$1("c:"+w.a.d.a),y.a)),v),C.ac,!0),new D.QM(w.w,w.gbbp(),w.gbbo(),"Escreve uma mensagem",new B.ccn(w),v)],y.p),C.w,C.j,C.m,0,C.v),!0,v)}}
var z=a.updateTypes(["F<~>()","kf()","l4(@)","~(kf?,kf)","y(l4)","e(l4,y)","EU(c)"])
B.bkx.prototype={
$1(d){return this.a.a5_(y.P.a(d))},
$S:z+2}
B.cch.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.jc(0,C.cl,C.ln)},
$S:6}
B.ccg.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(H.PF(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(H.PQ(s,new B.ccf(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.ccf.prototype={
$0(){var x=this.a
return x.gT().a1(0,$.aVq().$1(x.a.d.a).gaX(),y.Q).jV(0,this.b.a)},
$S:1}
B.ccj.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a50()},
$S:z+3}
B.cck.prototype={
$0(){var x,w,v,u,t,s=this.a.gT(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("d_<1>"),x=new A.d_(x,w),x=new A.ak(x,x.gA(0),w.i("ak<aZ.E>")),w=w.i("aZ.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new D.Bb(u,v==null?"":v,null,null))}}return D.a_1(this.b,s,!1,G.rB,r)},
$S:0}
B.ccm.prototype={
$1(d){return d.d},
$S:z+4}
B.ccl.prototype={
$2(d,e){var x,w=null,v=d.as
if(v!=null){x=d.at
if(x==null)x="file"
x=this.a.ap4(e,d,new D.QL(v,x,d.ax,e,w))
v=x}else if(d.w!=null){v=d.x
if(v==null)v="Proposta"
v=E.cZk(F.bzF,d.z,"PROPOSTA ENVIADA",w,w,d.y,w,v)}else{v=this.a
x=d.e
if(e)v=v.ap4(!0,d,new D.zG(x==null?"":x,!0,w,w))
else v=A.dP(w,new D.zG(x==null?"":x,!1,w,w),C.a2,!1,w,w,w,w,w,w,w,new B.cci(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.bd)}return v},
$S:z+5}
B.cci.prototype={
$0(){return I.ws(this.b,this.a.gT(),!1,null,null,G.rB,this.c.a)},
$S:0}
B.ccn.prototype={
$1(d){var x,w,v=this.a,u=v.gT(),t=u.a1(0,$.b8(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.D(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.D(s)}else{s=s?null:t.b
w=s==null?"":s}u.a1(0,$.CI().$1("c:"+v.a.d.a).gaX(),y.M).acF(w)},
$S:3};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dH4","dpu",6)
var u
w(u=B.EU.prototype,"giJ","d4",1)
v(u,"gND","m6",0)
w(u=B.af7.prototype,"gbbp","Tf",0)
w(u,"gbbo","K4",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.EU,A.fb)
w(A.bx,[B.bkx,B.cch,B.ccm,B.ccn])
x(B.a5r,A.dD)
x(B.af7,A.dy)
w(A.bR,[B.ccg,B.ccf,B.cck,B.cci])
w(A.cR,[B.ccj,B.ccl])})()
A.bq(b.typeUniverse,JSON.parse('{"EU":{"fb":["kf"]},"a5r":{"K":[],"e":[],"f":[]},"af7":{"a_":["a5r"]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cG"),y:x("l4"),n:x("kf"),t:x("r<l4>"),Y:x("r<Bb>"),p:x("r<e>"),a:x("t<c>"),P:x("a4<c,@>"),Q:x("EU"),N:x("c"),M:x("w4"),q:x("ds"),z:x("@"),T:x("c?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTG","aVq",()=>F.KL.$3$1(B.dH4(),y.Q,y.n,y.N))})()};
(a=>{a["UbWzBjIalfCaUHooJf95X9MAjjU="]=a.current})($__dart_deferred_initializers__);