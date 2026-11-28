((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,G,B={
dph(d){return new B.ET(d)},
ET:function ET(d){this.x=d
this.b=null},
bko:function bko(d){this.a=d},
dpi(d){return new B.a5l(d,null)},
a5l:function a5l(d,e){this.d=d
this.a=e},
af0:function af0(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
cc9:function cc9(d){this.a=d},
cc8:function cc8(d,e){this.a=d
this.b=e},
cc7:function cc7(d,e){this.a=d
this.b=e},
ccb:function ccb(d){this.a=d},
ccc:function ccc(d,e,f){this.a=d
this.b=e
this.c=f},
cce:function cce(){},
ccd:function ccd(d,e){this.a=d
this.b=e},
cca:function cca(d,e,f){this.a=d
this.b=e
this.c=f},
ccf:function ccf(d){this.a=d}},D,E,F,H
J=c[1]
A=c[0]
C=c[2]
I=c[152]
G=c[229]
B=a.updateHolder(c[37],B)
D=c[117]
E=c[81]
F=c[225]
H=c[134]
B.ET.prototype={
d4(){A.je(this.gNM(this),y.H)
return F.La},
m6(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$m6=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.sa2(0,t.ga2(0).ip(!0))
s=$.T()
r=s.b
r===$&&A.b()
q=t.x
n=E
m=!1
l=J
x=2
return A.d(r.R("messages").cj(0).W("conversation_id",q).dl(0,"created_at",!0),$async$m6)
case 2:t.sa2(0,new n.kd(m,l.d3(f,new B.bko(t),y.y).by(0)))
v=4
r=y.z
x=7
return A.d(s.b.aT("mark_conversation_read",A.S(["p_conversation_id",q],y.N,r),r),$async$m6)
case 7:A.eP(t).ai($.cY0())
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
mk(d){return this.aIF(d)},
aIF(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
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
t.push(u.a56(q))
u.sa2(0,r.F6(t))
case 1:return A.l(v,w)}})
return A.m($async$mk,w)},
mV(d){return this.aIA(d)},
aIA(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mV=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.T()
s=t.b
s===$&&A.b()
s=s.R("messages")
t=t.b.gbE().e.a
x=2
return A.d(s.de(0,A.S(["conversation_id",v.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cj(0).dP(0),$async$mV)
case 2:u=f
t=v.ga2(0)
s=A.V(v.ga2(0).b,y.y)
s.push(v.a56(u))
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
for(t=v.ga2(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.K)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa2(0,p.F6(u))
return A.l(null,w)}})
return A.m($async$jW,w)},
a56(d){var x,w=J.a6(d),v=A.a0(w.h(d,"id")),u=A.a0(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.B(w.h(d,"body")),r=A.B(w.h(d,"attachment_url")),q=A.B(w.h(d,"attachment_type")),p=A.B(w.h(d,"attachment_name")),o=A.d8(A.a0(w.h(d,"created_at"))),n=A.B(w.h(d,"proposal_id")),m=A.B(w.h(d,"proposal_title")),l=A.aJ(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aJ(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dU(w.h(d,"is_quote_request_notice"))
return E.cZc(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a5l.prototype={
P(){return new B.af0(new A.aI(C.an,$.ac()),A.oz(null,0,null,null))}}
B.af0.prototype={
m(){var x=this.w
x.Z$=$.ac()
x.X$=0
this.x.m()
this.a7()},
a57(){$.az.k4$.push(new B.cc9(this))},
Tp(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Tp=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.D(s).length===0){x=1
break}t.j5(0,C.j_)
t=u.gT()
t.a1(0,$.CG().$1("c:"+u.a.d.a).gaX(),y.M).d2(0)
x=3
return A.d(t.a1(0,$.aVj().$1(u.a.d.a).gaX(),y.Q).mk(s),$async$Tp)
case 3:u.a57()
case 1:return A.l(v,w)}})
return A.m($async$Tp,w)},
Kb(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Kb=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(D.rC(q),$async$Kb)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gT().a1(0,$.aVj().$1(s.a.d.a).gaX(),y.Q).mV(r),$async$Kb)
case 8:s.a57()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.O(y.q).f.a4(F.a8W)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Kb,w)},
apa(d,e,f){var x=null
if(!d||e.Q)return f
return A.dP(x,f,C.a2,!1,x,x,x,x,x,x,x,new B.cc8(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bd)},
u(d){var x,w=this,v=null,u=w.gT(),t=$.aVj(),s=y.n,r=u.H(t.$1(w.a.d.a),s)
u.pv(t.$1(w.a.d.a),new B.ccb(w),s)
s=w.a.d
s=A.bD(!1,D.cQA(s.d,v,s.b,v,new B.ccc(w,d,r),v,!1),v,C.a_,!1)
if(r.a&&r.b.length===0)t=C.cX
else{t=E.d9v(new B.ccd(w,d),new B.cce(),r.b,v)
x=A.a8(t).i("cZ<1>")
t=A.V(new A.cZ(t,x),x.i("aZ.E"))
t=A.d_(t,w.x,C.bg,v,v,!0,C.a1,!1)}return A.cM(v,C.l6,A.C(A.a([s,A.a7(t,1),A.kD(new D.QO(D.cWg(u.H($.CG().$1("c:"+w.a.d.a),y.a)),v),C.ac,!0),new D.QM(w.w,w.gbbw(),w.gbbv(),"Escreve uma mensagem",new B.ccf(w),v)],y.p),C.w,C.j,C.m,0,C.v),!0,v)}}
var z=a.updateTypes(["F<~>()","kd()","l3(@)","~(kd?,kd)","y(l3)","e(l3,y)","ET(c)"])
B.bko.prototype={
$1(d){return this.a.a56(y.P.a(d))},
$S:z+2}
B.cc9.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.jd(0,C.cl,C.lq)},
$S:5}
B.cc8.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(H.PE(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(H.PQ(s,new B.cc7(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.cc7.prototype={
$0(){var x=this.a
return x.gT().a1(0,$.aVj().$1(x.a.d.a).gaX(),y.Q).jW(0,this.b.a)},
$S:1}
B.ccb.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a57()},
$S:z+3}
B.ccc.prototype={
$0(){var x,w,v,u,t,s=this.a.gT(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("cZ<1>"),x=new A.cZ(x,w),x=new A.ak(x,x.gA(0),w.i("ak<aZ.E>")),w=w.i("aZ.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new D.B9(u,v==null?"":v,null,null))}}return D.a__(this.b,s,!1,G.rB,r)},
$S:0}
B.cce.prototype={
$1(d){return d.d},
$S:z+4}
B.ccd.prototype={
$2(d,e){var x,w=null,v=d.as
if(v!=null){x=d.at
if(x==null)x="file"
x=this.a.apa(e,d,new D.QL(v,x,d.ax,e,w))
v=x}else if(d.w!=null){v=d.x
if(v==null)v="Proposta"
v=E.cZd(F.bzz,d.z,"PROPOSTA ENVIADA",w,w,d.y,w,v)}else{v=this.a
x=d.e
if(e)v=v.apa(!0,d,new D.zC(x==null?"":x,!0,w,w))
else v=A.dP(w,new D.zC(x==null?"":x,!1,w,w),C.a2,!1,w,w,w,w,w,w,w,new B.cca(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.bd)}return v},
$S:z+5}
B.cca.prototype={
$0(){return I.wq(this.b,this.a.gT(),!1,null,null,G.rB,this.c.a)},
$S:0}
B.ccf.prototype={
$1(d){var x,w,v=this.a,u=v.gT(),t=u.a1(0,$.b8(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.D(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.D(s)}else{s=s?null:t.b
w=s==null?"":s}u.a1(0,$.CG().$1("c:"+v.a.d.a).gaX(),y.M).acJ(w)},
$S:3};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dGS","dph",6)
var u
w(u=B.ET.prototype,"giJ","d4",1)
v(u,"gNM","m6",0)
w(u=B.af0.prototype,"gbbw","Tp",0)
w(u,"gbbv","Kb",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ET,A.fb)
w(A.bx,[B.bko,B.cc9,B.cce,B.ccf])
x(B.a5l,A.dD)
x(B.af0,A.dy)
w(A.bR,[B.cc8,B.cc7,B.ccc,B.cca])
w(A.cR,[B.ccb,B.ccd])})()
A.br(b.typeUniverse,JSON.parse('{"ET":{"fb":["kd"]},"a5l":{"J":[],"e":[],"f":[]},"af0":{"a_":["a5l"]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cG"),y:x("l3"),n:x("kd"),t:x("r<l3>"),Y:x("r<B9>"),p:x("r<e>"),a:x("t<c>"),P:x("a4<c,@>"),Q:x("ET"),N:x("c"),M:x("w2"),q:x("ds"),z:x("@"),T:x("c?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTA","aVj",()=>F.KK.$3$1(B.dGS(),y.Q,y.n,y.N))})()};
(a=>{a["xyHwagvmBaPT1TNK6/3I2AEfjbg="]=a.current})($__dart_deferred_initializers__);