((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,G,B={
d0H(d){return new B.CD(d)},
CD:function CD(d){this.x=d
this.b=null},
baG:function baG(d){this.a=d},
d0I(d){return new B.a1l(d,null)},
a1l:function a1l(d,e){this.d=d
this.a=e},
aaA:function aaA(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bXj:function bXj(d){this.a=d},
bXi:function bXi(d,e){this.a=d
this.b=e},
bXh:function bXh(d,e){this.a=d
this.b=e},
bXl:function bXl(d){this.a=d},
bXm:function bXm(d,e,f){this.a=d
this.b=e
this.c=f},
bXo:function bXo(){},
bXn:function bXn(d,e){this.a=d
this.b=e},
bXk:function bXk(d,e,f){this.a=d
this.b=e
this.c=f},
bXp:function bXp(d){this.a=d}},D,E,F,H
J=c[1]
A=c[0]
C=c[2]
I=c[145]
G=c[241]
B=a.updateHolder(c[34],B)
D=c[110]
E=c[77]
F=c[239]
H=c[125]
B.CD.prototype={
cY(){A.iE(this.gLz(this),y.H)
return F.J5},
lG(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$lG=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.sa1(0,t.ga1(0).i8(!0))
s=$.Z()
r=s.b
r===$&&A.b()
q=t.x
n=E
m=!1
l=J
x=2
return A.d(r.S("messages").cz(0).a0("conversation_id",q).dE(0,"created_at",!0),$async$lG)
case 2:t.sa1(0,new n.jG(m,l.d1(f,new B.baG(t),y.y).bB(0)))
v=4
r=y.z
x=7
return A.d(s.b.b9("mark_conversation_read",A.Q(["p_conversation_id",q],y.N,r),r),$async$lG)
case 7:A.en(t).av($.cC6())
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
return A.m($async$lG,w)},
mA(d){return this.aD0(d)},
aD0(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
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
return A.d(s.dn(0,A.Q(["conversation_id",u.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cz(0).e_(0),$async$mA)
case 3:q=f
r=u.ga1(0)
t=A.Y(u.ga1(0).b,y.y)
t.push(u.a1Z(q))
u.sa1(0,r.Dp(t))
case 1:return A.l(v,w)}})
return A.m($async$mA,w)},
mz(d){return this.aCW(d)},
aCW(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mz=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.Z()
s=t.b
s===$&&A.b()
s=s.S("messages")
t=t.b.gbK().e.a
x=2
return A.d(s.dn(0,A.Q(["conversation_id",v.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cz(0).e_(0),$async$mz)
case 2:u=f
t=v.ga1(0)
s=A.Y(v.ga1(0).b,y.y)
s.push(v.a1Z(u))
v.sa1(0,t.Dp(s))
return A.l(null,w)}})
return A.m($async$mz,w)},
jD(d,e){return this.bjM(0,e)},
bjM(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jD=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.Z().b
p===$&&A.b()
x=2
return A.d(p.b9("delete_message",A.Q(["p_message_id",e],y.N,y.z),y.H),$async$jD)
case 2:p=v.ga1(0)
u=A.a([],y.t)
for(t=v.ga1(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa1(0,p.Dp(u))
return A.l(null,w)}})
return A.m($async$jD,w)},
a1Z(d){var x,w=J.a3(d),v=A.a1(w.h(d,"id")),u=A.a1(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.P(w.h(d,"body")),r=A.P(w.h(d,"attachment_url")),q=A.P(w.h(d,"attachment_type")),p=A.P(w.h(d,"attachment_name")),o=A.dg(A.a1(w.h(d,"created_at"))),n=A.P(w.h(d,"proposal_id")),m=A.P(w.h(d,"proposal_title")),l=A.b9(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.b9(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dO(w.h(d,"is_quote_request_notice"))
return E.cDe(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a1l.prototype={
R(){return new B.aaA(new A.aM(C.aj,$.ah()),A.JR(null,0,null,null))}}
B.aaA.prototype={
m(){var x=this.w
x.a_$=$.ah()
x.V$=0
this.x.m()
this.a9()},
a2_(){$.aw.k4$.push(new B.bXj(this))},
QQ(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$QQ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.L(s).length===0){x=1
break}t.jU(0,C.k6)
t=u.gU()
t.a2(0,$.AF().$1("c:"+u.a.d.a).gaW(),y.M).fK(0)
x=3
return A.d(t.a2(0,$.aNZ().$1(u.a.d.a).gaW(),y.Q).mA(s),$async$QQ)
case 3:u.a2_()
case 1:return A.l(v,w)}})
return A.m($async$QQ,w)},
Ia(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Ia=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(D.qv(q),$async$Ia)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gU().a2(0,$.aNZ().$1(s.a.d.a).gaW(),y.Q).mz(r),$async$Ia)
case 8:s.a2_()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.T(y.q).f.af(F.a69)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ia,w)},
al8(d,e,f){var x=null
if(!d||e.Q)return f
return A.dT(x,f,C.X,!1,x,x,x,x,x,x,x,new B.bXi(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bl)},
u(d){var x,w=this,v=null,u=w.gU(),t=$.aNZ(),s=y.n,r=u.M(t.$1(w.a.d.a),s)
u.p8(t.$1(w.a.d.a),new B.bXl(w),s)
s=w.a.d
s=A.bo(!1,D.cv7(s.d,v,s.b,v,new B.bXm(w,d,r),v,!1),v,C.V,!1)
if(r.a&&r.b.length===0)t=C.bk
else{t=E.cNL(new B.bXn(w,d),new B.bXo(),r.b,v)
x=A.a7(t).i("cV<1>")
t=A.Y(new A.cV(t,x),x.i("b3.E"))
t=A.cM(t,w.x,C.bK,v,v,!0,C.Z,!1)}return A.cG(v,C.kq,A.I(A.a([s,A.ab(t,1),A.nr(new D.NV(D.cAq(u.M($.AF().$1("c:"+w.a.d.a),y.a)),v),C.af,!0),new D.NT(w.w,w.gb4h(),w.gb4g(),"Escreve uma mensagem",new B.bXp(w),v)],y.p),C.x,C.l,C.q,0,C.w),!0,v)}}
var z=a.updateTypes(["H<~>()","jG()","kk(@)","~(jG?,jG)","z(kk)","e(kk,z)","CD(c)"])
B.baG.prototype={
$1(d){return this.a.a1Z(y.P.a(d))},
$S:z+2}
B.bXj.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.jh(0,C.cH,C.kL)},
$S:5}
B.bXi.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(H.MS(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(H.N0(s,new B.bXh(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.bXh.prototype={
$0(){var x=this.a
return x.gU().a2(0,$.aNZ().$1(x.a.d.a).gaW(),y.Q).jD(0,this.b.a)},
$S:2}
B.bXl.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a2_()},
$S:z+3}
B.bXm.prototype={
$0(){var x,w,v,u,t,s=this.a.gU(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a7(x).i("cV<1>"),x=new A.cV(x,w),x=new A.ap(x,x.gv(0),w.i("ap<b3.E>")),w=w.i("b3.E");x.p();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new D.z9(u,v==null?"":v,null,null))}}return D.Wk(this.b,s,!1,G.qh,r)},
$S:0}
B.bXo.prototype={
$1(d){return d.d},
$S:z+4}
B.bXn.prototype={
$2(d,e){var x,w=null,v=d.as
if(v!=null){x=d.at
if(x==null)x="file"
x=this.a.al8(e,d,new D.NS(v,x,d.ax,e,w))
v=x}else if(d.w!=null){v=d.x
if(v==null)v="Proposta"
v=E.cDf(F.bqM,d.z,"PROPOSTA ENVIADA",w,w,d.y,w,v)}else{v=this.a
x=d.e
if(e)v=v.al8(!0,d,new D.xA(x==null?"":x,!0,w,w))
else v=A.dT(w,new D.xA(x==null?"":x,!1,w,w),C.X,!1,w,w,w,w,w,w,w,new B.bXk(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.bl)}return v},
$S:z+5}
B.bXk.prototype={
$0(){return I.uQ(this.b,this.a.gU(),!1,null,null,G.qh,this.c.a)},
$S:0}
B.bXp.prototype={
$1(d){var x,w,v=this.a,u=v.gU(),t=u.a2(0,$.bi(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.L(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.L(s)}else{s=s?null:t.b
w=s==null?"":s}u.a2(0,$.AF().$1("c:"+v.a.d.a).gaW(),y.M).a9a(w)},
$S:6};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dgu","d0H",6)
var u
w(u=B.CD.prototype,"gi7","cY",1)
v(u,"gLz","lG",0)
w(u=B.aaA.prototype,"gb4h","QQ",0)
w(u,"gb4g","Ia",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CD,A.eO)
w(A.bv,[B.baG,B.bXj,B.bXo,B.bXp])
x(B.a1l,A.dx)
x(B.aaA,A.ds)
w(A.bI,[B.bXi,B.bXh,B.bXm,B.bXk])
w(A.cF,[B.bXl,B.bXn])})()
A.bx(b.typeUniverse,JSON.parse('{"CD":{"eO":["jG"]},"a1l":{"F":[],"e":[],"f":[]},"aaA":{"a0":["a1l"]}}'))
var y=(function rtii(){var x=A.v
return{D:x("cE"),y:x("kk"),n:x("jG"),t:x("q<kk>"),Y:x("q<z9>"),p:x("q<e>"),a:x("t<c>"),P:x("a2<c,@>"),Q:x("CD"),N:x("c"),M:x("ur"),q:x("dC"),z:x("@"),T:x("c?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dt_","aNZ",()=>F.IF.$3$1(B.dgu(),y.Q,y.n,y.N))})()};
(a=>{a["RLMQNoy6FKBd9USPoX8xeaApZ5g="]=a.current})($__dart_deferred_initializers__);