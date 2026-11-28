((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,G,B={
dkW(d){return new B.Ev(d)},
Ev:function Ev(d){this.x=d
this.b=null},
bi1:function bi1(d){this.a=d},
dkX(d){return new B.a4w(d,null)},
a4w:function a4w(d,e){this.d=d
this.a=e},
ae_:function ae_(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
c8H:function c8H(d){this.a=d},
c8G:function c8G(d,e){this.a=d
this.b=e},
c8F:function c8F(d,e){this.a=d
this.b=e},
c8J:function c8J(d){this.a=d},
c8K:function c8K(d,e,f){this.a=d
this.b=e
this.c=f},
c8M:function c8M(){},
c8L:function c8L(d,e){this.a=d
this.b=e},
c8I:function c8I(d,e,f){this.a=d
this.b=e
this.c=f},
c8N:function c8N(d){this.a=d}},D,E,F,H
J=c[1]
A=c[0]
C=c[2]
I=c[145]
G=c[222]
B=a.updateHolder(c[35],B)
D=c[113]
E=c[78]
F=c[218]
H=c[127]
B.Ev.prototype={
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
case 2:t.sa2(0,new n.kd(m,l.d3(f,new B.bi1(t),y.y).by(0)))
v=4
r=y.z
x=7
return A.d(s.b.aU("mark_conversation_read",A.S(["p_conversation_id",q],y.N,r),r),$async$m_)
case 7:A.eI(t).ah($.cU6())
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
me(d){return this.aHS(d)},
aHS(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
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
return A.d(s.dd(0,A.S(["conversation_id",u.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cj(0).dN(0),$async$me)
case 3:q=f
r=u.ga2(0)
t=A.V(u.ga2(0).b,y.y)
t.push(u.a4x(q))
u.sa2(0,r.ES(t))
case 1:return A.l(v,w)}})
return A.m($async$me,w)},
mP(d){return this.aHN(d)},
aHN(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mP=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.T()
s=t.b
s===$&&A.b()
s=s.P("messages")
t=t.b.gbE().e.a
x=2
return A.d(s.dd(0,A.S(["conversation_id",v.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cj(0).dN(0),$async$mP)
case 2:u=f
t=v.ga2(0)
s=A.V(v.ga2(0).b,y.y)
s.push(v.a4x(u))
v.sa2(0,t.ES(s))
return A.l(null,w)}})
return A.m($async$mP,w)},
jR(d,e){return this.bqv(0,e)},
bqv(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
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
a4x(d){var x,w=J.a7(d),v=A.a_(w.h(d,"id")),u=A.a_(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.J(w.h(d,"body")),r=A.J(w.h(d,"attachment_url")),q=A.J(w.h(d,"attachment_type")),p=A.J(w.h(d,"attachment_name")),o=A.d8(A.a_(w.h(d,"created_at"))),n=A.J(w.h(d,"proposal_id")),m=A.J(w.h(d,"proposal_title")),l=A.aN(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aN(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.e5(w.h(d,"is_quote_request_notice"))
return E.cVj(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a4w.prototype={
R(){return new B.ae_(new A.aI(C.ao,$.ad()),A.oq(null,0,null,null))}}
B.ae_.prototype={
m(){var x=this.w
x.Z$=$.ad()
x.X$=0
this.x.m()
this.a8()},
a4y(){$.aB.k4$.push(new B.c8H(this))},
SW(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$SW=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.D(s).length===0){x=1
break}t.jt(0,C.jM)
t=u.gT()
t.a1(0,$.Ck().$1("c:"+u.a.d.a).gaV(),y.M).fT(0)
x=3
return A.d(t.a1(0,$.aTF().$1(u.a.d.a).gaV(),y.Q).me(s),$async$SW)
case 3:u.a4y()
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
return A.d(s.gT().a1(0,$.aTF().$1(s.a.d.a).gaV(),y.Q).mP(r),$async$JS)
case 8:s.a4y()
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
aow(d,e,f){var x=null
if(!d||e.Q)return f
return A.dP(x,f,C.a2,!1,x,x,x,x,x,x,x,new B.c8G(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bc)},
v(d){var x,w=this,v=null,u=w.gT(),t=$.aTF(),s=y.n,r=u.F(t.$1(w.a.d.a),s)
u.pt(t.$1(w.a.d.a),new B.c8J(w),s)
s=w.a.d
s=A.bH(!1,D.cMD(s.d,v,s.b,v,new B.c8K(w,d,r),v,!1),v,C.a0,!1)
if(r.a&&r.b.length===0)t=C.br
else{t=E.d5u(new B.c8L(w,d),new B.c8M(),r.b,v)
x=A.a8(t).i("cY<1>")
t=A.V(new A.cY(t,x),x.i("b0.E"))
t=A.d5(t,w.x,C.bg,v,v,!0,C.a3,!1)}return A.cP(v,C.kY,A.B(A.a([s,A.a6(t,1),A.kZ(new D.Qj(D.cSo(u.F($.Ck().$1("c:"+w.a.d.a),y.a)),v),C.aa,!0),new D.Qh(w.w,w.gbaf(),w.gbae(),"Escreve uma mensagem",new B.c8N(w),v)],y.p),C.x,C.j,C.o,0,C.v),!0,v)}}
var z=a.updateTypes(["F<~>()","kd()","kY(@)","~(kd?,kd)","z(kY)","e(kY,z)","Ev(c)"])
B.bi1.prototype={
$1(d){return this.a.a4x(y.P.a(d))},
$S:z+2}
B.c8H.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.ja(0,C.cn,C.li)},
$S:5}
B.c8G.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(H.Pb(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(H.Pn(s,new B.c8F(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.c8F.prototype={
$0(){var x=this.a
return x.gT().a1(0,$.aTF().$1(x.a.d.a).gaV(),y.Q).jR(0,this.b.a)},
$S:2}
B.c8J.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a4y()},
$S:z+3}
B.c8K.prototype={
$0(){var x,w,v,u,t,s=this.a.gT(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("cY<1>"),x=new A.cY(x,w),x=new A.ai(x,x.gA(0),w.i("ai<b0.E>")),w=w.i("b0.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new D.AM(u,v==null?"":v,null,null))}}return D.Zg(this.b,s,!1,G.rk,r)},
$S:0}
B.c8M.prototype={
$1(d){return d.d},
$S:z+4}
B.c8L.prototype={
$2(d,e){var x,w=null,v=d.as
if(v!=null){x=d.at
if(x==null)x="file"
x=this.a.aow(e,d,new D.Qg(v,x,d.ax,e,w))
v=x}else if(d.w!=null){v=d.x
if(v==null)v="Proposta"
v=E.cVk(F.bxH,d.z,"PROPOSTA ENVIADA",w,w,d.y,w,v)}else{v=this.a
x=d.e
if(e)v=v.aow(!0,d,new D.zd(x==null?"":x,!0,w,w))
else v=A.dP(w,new D.zd(x==null?"":x,!1,w,w),C.a2,!1,w,w,w,w,w,w,w,new B.c8I(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.bc)}return v},
$S:z+5}
B.c8I.prototype={
$0(){return I.w8(this.b,this.a.gT(),!1,null,null,G.rk,this.c.a)},
$S:0}
B.c8N.prototype={
$1(d){var x,w,v=this.a,u=v.gT(),t=u.a1(0,$.b8(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.D(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.D(s)}else{s=s?null:t.b
w=s==null?"":s}u.a1(0,$.Ck().$1("c:"+v.a.d.a).gaV(),y.M).aca(w)},
$S:3};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dCa","dkW",6)
var u
w(u=B.Ev.prototype,"giF","d1",1)
v(u,"gNm","m_",0)
w(u=B.ae_.prototype,"gbaf","SW",0)
w(u,"gbae","JS",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ev,A.f6)
w(A.bw,[B.bi1,B.c8H,B.c8M,B.c8N])
x(B.a4w,A.dD)
x(B.ae_,A.dv)
w(A.bR,[B.c8G,B.c8F,B.c8K,B.c8I])
w(A.cS,[B.c8J,B.c8L])})()
A.bx(b.typeUniverse,JSON.parse('{"Ev":{"f6":["kd"]},"a4w":{"I":[],"e":[],"f":[]},"ae_":{"a1":["a4w"]}}'))
var y=(function rtii(){var x=A.x
return{D:x("cG"),y:x("kY"),n:x("kd"),t:x("t<kY>"),Y:x("t<AM>"),p:x("t<e>"),a:x("r<c>"),P:x("a4<c,@>"),Q:x("Ev"),N:x("c"),M:x("vO"),q:x("dA"),z:x("@"),T:x("c?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dOF","aTF",()=>F.K1.$3$1(B.dCa(),y.Q,y.n,y.N))})()};
(a=>{a["dA0SM2lBzUClPgNUxJVTOMgn1Wg="]=a.current})($__dart_deferred_initializers__);