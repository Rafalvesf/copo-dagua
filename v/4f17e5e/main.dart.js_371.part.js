((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,G,B={
dl_(d){return new B.Ex(d)},
Ex:function Ex(d){this.x=d
this.b=null},
bi2:function bi2(d){this.a=d},
dl0(d){return new B.a4x(d,null)},
a4x:function a4x(d,e){this.d=d
this.a=e},
ae0:function ae0(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
c8K:function c8K(d){this.a=d},
c8J:function c8J(d,e){this.a=d
this.b=e},
c8I:function c8I(d,e){this.a=d
this.b=e},
c8M:function c8M(d){this.a=d},
c8N:function c8N(d,e,f){this.a=d
this.b=e
this.c=f},
c8P:function c8P(){},
c8O:function c8O(d,e){this.a=d
this.b=e},
c8L:function c8L(d,e,f){this.a=d
this.b=e
this.c=f},
c8Q:function c8Q(d){this.a=d}},D,E,F,H
J=c[1]
A=c[0]
C=c[2]
I=c[146]
G=c[222]
B=a.updateHolder(c[35],B)
D=c[114]
E=c[79]
F=c[218]
H=c[128]
B.Ex.prototype={
d1(){A.jd(this.gNm(this),y.H)
return F.Ks},
m_(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$m_=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.sa2(0,t.ga2(0).il(!0))
s=$.T()
r=s.b
r===$&&A.b()
q=t.x
n=E
m=!1
l=J
x=2
return A.d(r.P("messages").cj(0).W("conversation_id",q).dk(0,"created_at",!0),$async$m_)
case 2:t.sa2(0,new n.kd(m,l.d3(f,new B.bi2(t),y.y).by(0)))
v=4
r=y.z
x=7
return A.d(s.b.aU("mark_conversation_read",A.R(["p_conversation_id",q],y.N,r),r),$async$m_)
case 7:A.eK(t).ah($.cU9())
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
return A.d(s.dd(0,A.R(["conversation_id",u.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cj(0).dN(0),$async$me)
case 3:q=f
r=u.ga2(0)
t=A.W(u.ga2(0).b,y.y)
t.push(u.a4w(q))
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
return A.d(s.dd(0,A.R(["conversation_id",v.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cj(0).dN(0),$async$mP)
case 2:u=f
t=v.ga2(0)
s=A.W(v.ga2(0).b,y.y)
s.push(v.a4w(u))
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
a4w(d){var x,w=J.a7(d),v=A.a_(w.h(d,"id")),u=A.a_(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.J(w.h(d,"body")),r=A.J(w.h(d,"attachment_url")),q=A.J(w.h(d,"attachment_type")),p=A.J(w.h(d,"attachment_name")),o=A.d8(A.a_(w.h(d,"created_at"))),n=A.J(w.h(d,"proposal_id")),m=A.J(w.h(d,"proposal_title")),l=A.aL(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aL(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.e6(w.h(d,"is_quote_request_notice"))
return E.cVm(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a4x.prototype={
R(){return new B.ae0(new A.aI(C.ao,$.ad()),A.oq(null,0,null,null))}}
B.ae0.prototype={
m(){var x=this.w
x.Z$=$.ad()
x.X$=0
this.x.m()
this.a8()},
a4x(){$.aB.k4$.push(new B.c8K(this))},
SW(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$SW=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.D(s).length===0){x=1
break}t.jt(0,C.jL)
t=u.gT()
t.a1(0,$.Cm().$1("c:"+u.a.d.a).gaV(),y.M).fT(0)
x=3
return A.d(t.a1(0,$.aTG().$1(u.a.d.a).gaV(),y.Q).me(s),$async$SW)
case 3:u.a4x()
case 1:return A.l(v,w)}})
return A.m($async$SW,w)},
JS(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$JS=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(D.rn(q),$async$JS)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gT().a1(0,$.aTG().$1(s.a.d.a).gaV(),y.Q).mP(r),$async$JS)
case 8:s.a4x()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.O(y.q).f.a4(F.a7X)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$JS,w)},
aou(d,e,f){var x=null
if(!d||e.Q)return f
return A.dQ(x,f,C.a2,!1,x,x,x,x,x,x,x,new B.c8J(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bc)},
u(d){var x,w=this,v=null,u=w.gT(),t=$.aTG(),s=y.n,r=u.G(t.$1(w.a.d.a),s)
u.pt(t.$1(w.a.d.a),new B.c8M(w),s)
s=w.a.d
s=A.bH(!1,D.cMG(s.d,v,s.b,v,new B.c8N(w,d,r),v,!1),v,C.a0,!1)
if(r.a&&r.b.length===0)t=C.br
else{t=E.d5y(new B.c8O(w,d),new B.c8P(),r.b,v)
x=A.a8(t).i("cY<1>")
t=A.W(new A.cY(t,x),x.i("b1.E"))
t=A.d5(t,w.x,C.bg,v,v,!0,C.a3,!1)}return A.cP(v,C.kZ,A.C(A.a([s,A.a6(t,1),A.kZ(new D.Qk(D.cSr(u.G($.Cm().$1("c:"+w.a.d.a),y.a)),v),C.aa,!0),new D.Qi(w.w,w.gbad(),w.gbac(),"Escreve uma mensagem",new B.c8Q(w),v)],y.p),C.x,C.j,C.p,0,C.v),!0,v)}}
var z=a.updateTypes(["F<~>()","kd()","kY(@)","~(kd?,kd)","z(kY)","e(kY,z)","Ex(c)"])
B.bi2.prototype={
$1(d){return this.a.a4w(y.P.a(d))},
$S:z+2}
B.c8K.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.ja(0,C.cn,C.lh)},
$S:5}
B.c8J.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(H.Pc(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(H.Po(s,new B.c8I(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.c8I.prototype={
$0(){var x=this.a
return x.gT().a1(0,$.aTG().$1(x.a.d.a).gaV(),y.Q).jR(0,this.b.a)},
$S:2}
B.c8M.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a4x()},
$S:z+3}
B.c8N.prototype={
$0(){var x,w,v,u,t,s=this.a.gT(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("cY<1>"),x=new A.cY(x,w),x=new A.ak(x,x.gA(0),w.i("ak<b1.E>")),w=w.i("b1.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new D.AO(u,v==null?"":v,null,null))}}return D.Zi(this.b,s,!1,G.rk,r)},
$S:0}
B.c8P.prototype={
$1(d){return d.d},
$S:z+4}
B.c8O.prototype={
$2(d,e){var x,w=null,v=d.as
if(v!=null){x=d.at
if(x==null)x="file"
x=this.a.aou(e,d,new D.Qh(v,x,d.ax,e,w))
v=x}else if(d.w!=null){v=d.x
if(v==null)v="Proposta"
v=E.cVn(F.bxM,d.z,"PROPOSTA ENVIADA",w,w,d.y,w,v)}else{v=this.a
x=d.e
if(e)v=v.aou(!0,d,new D.zf(x==null?"":x,!0,w,w))
else v=A.dQ(w,new D.zf(x==null?"":x,!1,w,w),C.a2,!1,w,w,w,w,w,w,w,new B.c8L(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.bc)}return v},
$S:z+5}
B.c8L.prototype={
$0(){return I.w8(this.b,this.a.gT(),!1,null,null,G.rk,this.c.a)},
$S:0}
B.c8Q.prototype={
$1(d){var x,w,v=this.a,u=v.gT(),t=u.a1(0,$.b8(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.D(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.D(s)}else{s=s?null:t.b
w=s==null?"":s}u.a1(0,$.Cm().$1("c:"+v.a.d.a).gaV(),y.M).ac8(w)},
$S:3};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dCf","dl_",6)
var u
w(u=B.Ex.prototype,"giF","d1",1)
v(u,"gNm","m_",0)
w(u=B.ae0.prototype,"gbad","SW",0)
w(u,"gbac","JS",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ex,A.f5)
w(A.bx,[B.bi2,B.c8K,B.c8P,B.c8Q])
x(B.a4x,A.dD)
x(B.ae0,A.dv)
w(A.bR,[B.c8J,B.c8I,B.c8N,B.c8L])
w(A.cS,[B.c8M,B.c8O])})()
A.bw(b.typeUniverse,JSON.parse('{"Ex":{"f5":["kd"]},"a4x":{"I":[],"e":[],"f":[]},"ae0":{"a1":["a4x"]}}'))
var y=(function rtii(){var x=A.x
return{D:x("cG"),y:x("kY"),n:x("kd"),t:x("t<kY>"),Y:x("t<AO>"),p:x("t<e>"),a:x("r<c>"),P:x("a5<c,@>"),Q:x("Ex"),N:x("c"),M:x("vN"),q:x("dA"),z:x("@"),T:x("c?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dOK","aTG",()=>F.K1.$3$1(B.dCf(),y.Q,y.n,y.N))})()};
(a=>{a["PLCvtGv7pojoTgzTFRJZ/pv/sho="]=a.current})($__dart_deferred_initializers__);