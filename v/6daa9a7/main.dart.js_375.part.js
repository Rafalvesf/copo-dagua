((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,G,B={
dlp(d){return new B.ED(d)},
ED:function ED(d){this.x=d
this.b=null},
bis:function bis(d){this.a=d},
dlq(d){return new B.a4G(d,null)},
a4G:function a4G(d,e){this.d=d
this.a=e},
aec:function aec(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
c9s:function c9s(d){this.a=d},
c9r:function c9r(d,e){this.a=d
this.b=e},
c9q:function c9q(d,e){this.a=d
this.b=e},
c9u:function c9u(d){this.a=d},
c9v:function c9v(d,e,f){this.a=d
this.b=e
this.c=f},
c9x:function c9x(){},
c9w:function c9w(d,e){this.a=d
this.b=e},
c9t:function c9t(d,e,f){this.a=d
this.b=e
this.c=f},
c9y:function c9y(d){this.a=d}},D,E,F,H
J=c[1]
A=c[0]
C=c[2]
I=c[149]
G=c[225]
B=a.updateHolder(c[35],B)
D=c[115]
E=c[79]
F=c[221]
H=c[131]
B.ED.prototype={
d1(){A.je(this.gNm(this),y.H)
return F.Kw},
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
case 2:t.sa2(0,new n.ke(m,l.d3(f,new B.bis(t),y.y).by(0)))
v=4
r=y.z
x=7
return A.d(s.b.aU("mark_conversation_read",A.S(["p_conversation_id",q],y.N,r),r),$async$m_)
case 7:A.eK(t).ah($.cUx())
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
t=A.W(u.ga2(0).b,y.y)
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
s=A.W(v.ga2(0).b,y.y)
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
a4x(d){var x,w=J.a7(d),v=A.a_(w.h(d,"id")),u=A.a_(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.J(w.h(d,"body")),r=A.J(w.h(d,"attachment_url")),q=A.J(w.h(d,"attachment_type")),p=A.J(w.h(d,"attachment_name")),o=A.d8(A.a_(w.h(d,"created_at"))),n=A.J(w.h(d,"proposal_id")),m=A.J(w.h(d,"proposal_title")),l=A.aL(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aL(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dS(w.h(d,"is_quote_request_notice"))
return E.cVJ(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a4G.prototype={
R(){return new B.aec(new A.aI(C.ao,$.ad()),A.oq(null,0,null,null))}}
B.aec.prototype={
m(){var x=this.w
x.Z$=$.ad()
x.X$=0
this.x.m()
this.a8()},
a4y(){$.aB.k4$.push(new B.c9s(this))},
SW(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$SW=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.D(s).length===0){x=1
break}t.jt(0,C.jM)
t=u.gT()
t.a1(0,$.Cq().$1("c:"+u.a.d.a).gaV(),y.M).fT(0)
x=3
return A.d(t.a1(0,$.aTW().$1(u.a.d.a).gaV(),y.Q).me(s),$async$SW)
case 3:u.a4y()
case 1:return A.l(v,w)}})
return A.m($async$SW,w)},
JU(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$JU=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(D.rq(q),$async$JU)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gT().a1(0,$.aTW().$1(s.a.d.a).gaV(),y.Q).mP(r),$async$JU)
case 8:s.a4y()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.O(y.q).f.a4(F.a83)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$JU,w)},
aox(d,e,f){var x=null
if(!d||e.Q)return f
return A.dQ(x,f,C.a3,!1,x,x,x,x,x,x,x,new B.c9r(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bd)},
u(d){var x,w=this,v=null,u=w.gT(),t=$.aTW(),s=y.n,r=u.G(t.$1(w.a.d.a),s)
u.pt(t.$1(w.a.d.a),new B.c9u(w),s)
s=w.a.d
s=A.bG(!1,D.cN3(s.d,v,s.b,v,new B.c9v(w,d,r),v,!1),v,C.a_,!1)
if(r.a&&r.b.length===0)t=C.cQ
else{t=E.d5V(new B.c9w(w,d),new B.c9x(),r.b,v)
x=A.a8(t).i("cY<1>")
t=A.W(new A.cY(t,x),x.i("b1.E"))
t=A.d5(t,w.x,C.bh,v,v,!0,C.a1,!1)}return A.cP(v,C.l_,A.B(A.a([s,A.a6(t,1),A.l0(new D.Qr(D.cSO(u.G($.Cq().$1("c:"+w.a.d.a),y.a)),v),C.a8,!0),new D.Qp(w.w,w.gbah(),w.gbag(),"Escreve uma mensagem",new B.c9y(w),v)],y.p),C.x,C.j,C.o,0,C.v),!0,v)}}
var z=a.updateTypes(["F<~>()","ke()","l_(@)","~(ke?,ke)","y(l_)","e(l_,y)","ED(c)"])
B.bis.prototype={
$1(d){return this.a.a4x(y.P.a(d))},
$S:z+2}
B.c9s.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.ja(0,C.ck,C.lj)},
$S:6}
B.c9r.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(H.Ph(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(H.Pt(s,new B.c9q(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.c9q.prototype={
$0(){var x=this.a
return x.gT().a1(0,$.aTW().$1(x.a.d.a).gaV(),y.Q).jR(0,this.b.a)},
$S:2}
B.c9u.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a4y()},
$S:z+3}
B.c9v.prototype={
$0(){var x,w,v,u,t,s=this.a.gT(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("cY<1>"),x=new A.cY(x,w),x=new A.ak(x,x.gA(0),w.i("ak<b1.E>")),w=w.i("b1.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new D.AR(u,v==null?"":v,null,null))}}return D.Zs(this.b,s,!1,G.rk,r)},
$S:0}
B.c9x.prototype={
$1(d){return d.d},
$S:z+4}
B.c9w.prototype={
$2(d,e){var x,w=null,v=d.as
if(v!=null){x=d.at
if(x==null)x="file"
x=this.a.aox(e,d,new D.Qo(v,x,d.ax,e,w))
v=x}else if(d.w!=null){v=d.x
if(v==null)v="Proposta"
v=E.cVK(F.by3,d.z,"PROPOSTA ENVIADA",w,w,d.y,w,v)}else{v=this.a
x=d.e
if(e)v=v.aox(!0,d,new D.zi(x==null?"":x,!0,w,w))
else v=A.dQ(w,new D.zi(x==null?"":x,!1,w,w),C.a3,!1,w,w,w,w,w,w,w,new B.c9t(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.bd)}return v},
$S:z+5}
B.c9t.prototype={
$0(){return I.wd(this.b,this.a.gT(),!1,null,null,G.rk,this.c.a)},
$S:0}
B.c9y.prototype={
$1(d){var x,w,v=this.a,u=v.gT(),t=u.a1(0,$.b8(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.D(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.D(s)}else{s=s?null:t.b
w=s==null?"":s}u.a1(0,$.Cq().$1("c:"+v.a.d.a).gaV(),y.M).ac9(w)},
$S:3};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dCD","dlp",6)
var u
w(u=B.ED.prototype,"giF","d1",1)
v(u,"gNm","m_",0)
w(u=B.aec.prototype,"gbah","SW",0)
w(u,"gbag","JU",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ED,A.f6)
w(A.bx,[B.bis,B.c9s,B.c9x,B.c9y])
x(B.a4G,A.dD)
x(B.aec,A.dv)
w(A.bR,[B.c9r,B.c9q,B.c9v,B.c9t])
w(A.cS,[B.c9u,B.c9w])})()
A.bu(b.typeUniverse,JSON.parse('{"ED":{"f6":["ke"]},"a4G":{"I":[],"e":[],"f":[]},"aec":{"a1":["a4G"]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cG"),y:x("l_"),n:x("ke"),t:x("t<l_>"),Y:x("t<AR>"),p:x("t<e>"),a:x("r<c>"),P:x("a5<c,@>"),Q:x("ED"),N:x("c"),M:x("vS"),q:x("dA"),z:x("@"),T:x("c?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dPe","aTW",()=>F.K5.$3$1(B.dCD(),y.Q,y.n,y.N))})()};
(a=>{a["tAackMpBtole8BommaUgricq4q8="]=a.current})($__dart_deferred_initializers__);