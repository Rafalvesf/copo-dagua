((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,G,B={
dc0(d){return new B.DZ(d)},
DZ:function DZ(d){this.x=d
this.b=null},
bfg:function bfg(d){this.a=d},
dc1(d){return new B.a3A(d,null)},
a3A:function a3A(d,e){this.d=d
this.a=e},
ad8:function ad8(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
c3i:function c3i(d){this.a=d},
c3h:function c3h(d,e){this.a=d
this.b=e},
c3g:function c3g(d,e){this.a=d
this.b=e},
c3k:function c3k(d){this.a=d},
c3l:function c3l(d,e,f){this.a=d
this.b=e
this.c=f},
c3n:function c3n(){},
c3m:function c3m(d,e){this.a=d
this.b=e},
c3j:function c3j(d,e,f){this.a=d
this.b=e
this.c=f},
c3o:function c3o(d){this.a=d}},D,E,F,H
J=c[1]
A=c[0]
C=c[2]
I=c[151]
G=c[244]
B=a.updateHolder(c[34],B)
D=c[115]
E=c[77]
F=c[240]
H=c[133]
B.DZ.prototype={
cX(){A.iR(this.gMT(this),y.H)
return F.JY},
lX(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$lX=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.sa1(0,t.ga1(0).ik(!0))
s=$.S()
r=s.b
r===$&&A.b()
q=t.x
n=E
m=!1
l=J
x=2
return A.d(r.T("messages").cq(0).X("conversation_id",q).dw(0,"created_at",!0),$async$lX)
case 2:t.sa1(0,new n.k3(m,l.d1(f,new B.bfg(t),y.y).bA(0)))
v=4
r=y.z
x=7
return A.d(s.b.b4("mark_conversation_read",A.Q(["p_conversation_id",q],y.N,r),r),$async$lX)
case 7:A.er(t).al($.cM8())
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
return A.m($async$lX,w)},
mO(d){return this.aGN(d)},
aGN(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$mO=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=C.f.D(d)
if(p.length===0){x=1
break}t=$.S()
s=t.b
s===$&&A.b()
s=s.T("messages")
t=t.b.gbH().e.a
r=y.N
x=3
return A.d(s.dg(0,A.Q(["conversation_id",u.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cq(0).e_(0),$async$mO)
case 3:q=f
r=u.ga1(0)
t=A.W(u.ga1(0).b,y.y)
t.push(u.a3W(q))
u.sa1(0,r.Ew(t))
case 1:return A.l(v,w)}})
return A.m($async$mO,w)},
mN(d){return this.aGI(d)},
aGI(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mN=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.S()
s=t.b
s===$&&A.b()
s=s.T("messages")
t=t.b.gbH().e.a
x=2
return A.d(s.dg(0,A.Q(["conversation_id",v.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cq(0).e_(0),$async$mN)
case 2:u=f
t=v.ga1(0)
s=A.W(v.ga1(0).b,y.y)
s.push(v.a3W(u))
v.sa1(0,t.Ew(s))
return A.l(null,w)}})
return A.m($async$mN,w)},
jS(d,e){return this.boN(0,e)},
boN(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jS=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.S().b
p===$&&A.b()
x=2
return A.d(p.b4("delete_message",A.Q(["p_message_id",e],y.N,y.z),y.H),$async$jS)
case 2:p=v.ga1(0)
u=A.a([],y.t)
for(t=v.ga1(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.K)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa1(0,p.Ew(u))
return A.l(null,w)}})
return A.m($async$jS,w)},
a3W(d){var x,w=J.a5(d),v=A.a2(w.h(d,"id")),u=A.a2(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.L(w.h(d,"body")),r=A.L(w.h(d,"attachment_url")),q=A.L(w.h(d,"attachment_type")),p=A.L(w.h(d,"attachment_name")),o=A.dd(A.a2(w.h(d,"created_at"))),n=A.L(w.h(d,"proposal_id")),m=A.L(w.h(d,"proposal_title")),l=A.aX(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aX(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.e2(w.h(d,"is_quote_request_notice"))
return E.cNk(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a3A.prototype={
R(){return new B.ad8(new A.aH(C.al,$.ag()),A.t8(null,0,null,null))}}
B.ad8.prototype={
m(){var x=this.w
x.a0$=$.ag()
x.V$=0
this.x.m()
this.a8()},
a3X(){$.ay.k4$.push(new B.c3i(this))},
So(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$So=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.D(s).length===0){x=1
break}t.jJ(0,C.km)
t=u.gU()
t.a2(0,$.BT().$1("c:"+u.a.d.a).gaW(),y.M).fS(0)
x=3
return A.d(t.a2(0,$.aRQ().$1(u.a.d.a).gaW(),y.Q).mO(s),$async$So)
case 3:u.a3X()
case 1:return A.l(v,w)}})
return A.m($async$So,w)},
Js(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Js=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(D.qZ(q),$async$Js)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gU().a2(0,$.aRQ().$1(s.a.d.a).gaW(),y.Q).mN(r),$async$Js)
case 8:s.a3X()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.S(y.q).f.a7(F.a7n)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Js,w)},
anP(d,e,f){var x=null
if(!d||e.Q)return f
return A.dO(x,f,C.a1,!1,x,x,x,x,x,x,x,new B.c3h(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bg)},
u(d){var x,w=this,v=null,u=w.gU(),t=$.aRQ(),s=y.n,r=u.M(t.$1(w.a.d.a),s)
u.pp(t.$1(w.a.d.a),new B.c3k(w),s)
s=w.a.d
s=A.bB(!1,D.cF_(s.d,v,s.b,v,new B.c3l(w,d,r),v,!1),v,C.X,!1)
if(r.a&&r.b.length===0)t=C.bq
else{t=E.cYk(new B.c3m(w,d),new B.c3n(),r.b,v)
x=A.a6(t).i("cV<1>")
t=A.W(new A.cV(t,x),x.i("b2.E"))
t=A.d3(t,w.x,C.be,v,v,!0,C.Z,!1)}return A.cP(v,C.kE,A.I(A.a([s,A.ae(t,1),A.mj(new D.PH(D.cKr(u.M($.BT().$1("c:"+w.a.d.a),y.a)),v),C.am,!0),new D.PF(w.w,w.gb8O(),w.gb8N(),"Escreve uma mensagem",new B.c3o(w),v)],y.p),C.x,C.l,C.q,0,C.w),!0,v)}}
var z=a.updateTypes(["E<~>()","k3()","kJ(@)","~(k3?,k3)","z(kJ)","e(kJ,z)","DZ(c)"])
B.bfg.prototype={
$1(d){return this.a.a3W(y.P.a(d))},
$S:z+2}
B.c3i.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.iD(0,C.cr,C.j_)},
$S:6}
B.c3h.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(H.Ow(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(H.OF(s,new B.c3g(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.c3g.prototype={
$0(){var x=this.a
return x.gU().a2(0,$.aRQ().$1(x.a.d.a).gaW(),y.Q).jS(0,this.b.a)},
$S:2}
B.c3k.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a3X()},
$S:z+3}
B.c3l.prototype={
$0(){var x,w,v,u,t,s=this.a.gU(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a6(x).i("cV<1>"),x=new A.cV(x,w),x=new A.ap(x,x.gA(0),w.i("ap<b2.E>")),w=w.i("b2.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new D.Ao(u,v==null?"":v,null,null))}}return D.Yo(this.b,s,!1,G.r5,r)},
$S:0}
B.c3n.prototype={
$1(d){return d.d},
$S:z+4}
B.c3m.prototype={
$2(d,e){var x,w=null,v=d.as
if(v!=null){x=d.at
if(x==null)x="file"
x=this.a.anP(e,d,new D.PE(v,x,d.ax,e,w))
v=x}else if(d.w!=null){v=d.x
if(v==null)v="Proposta"
v=E.cNl(F.bwv,d.z,"PROPOSTA ENVIADA",w,w,d.y,w,v)}else{v=this.a
x=d.e
if(e)v=v.anP(!0,d,new D.yN(x==null?"":x,!0,w,w))
else v=A.dO(w,new D.yN(x==null?"":x,!1,w,w),C.a1,!1,w,w,w,w,w,w,w,new B.c3j(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.bg)}return v},
$S:z+5}
B.c3j.prototype={
$0(){return I.vI(this.b,this.a.gU(),!1,null,null,G.r5,this.c.a)},
$S:0}
B.c3o.prototype={
$1(d){var x,w,v=this.a,u=v.gU(),t=u.a2(0,$.bc(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.D(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.D(s)}else{s=s?null:t.b
w=s==null?"":s}u.a2(0,$.BT().$1("c:"+v.a.d.a).gaW(),y.M).abq(w)},
$S:3};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dsZ","dc0",6)
var u
w(u=B.DZ.prototype,"gij","cX",1)
v(u,"gMT","lX",0)
w(u=B.ad8.prototype,"gb8O","So",0)
w(u,"gb8N","Js",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.DZ,A.eU)
w(A.bw,[B.bfg,B.c3i,B.c3n,B.c3o])
x(B.a3A,A.dv)
x(B.ad8,A.dk)
w(A.bL,[B.c3h,B.c3g,B.c3l,B.c3j])
w(A.cM,[B.c3k,B.c3m])})()
A.bt(b.typeUniverse,JSON.parse('{"DZ":{"eU":["k3"]},"a3A":{"H":[],"e":[],"f":[]},"ad8":{"a1":["a3A"]}}'))
var y=(function rtii(){var x=A.v
return{D:x("cv"),y:x("kJ"),n:x("k3"),t:x("r<kJ>"),Y:x("r<Ao>"),p:x("r<e>"),a:x("t<c>"),P:x("a3<c,@>"),Q:x("DZ"),N:x("c"),M:x("vk"),q:x("dF"),z:x("@"),T:x("c?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dG3","aRQ",()=>F.Jx.$3$1(B.dsZ(),y.Q,y.n,y.N))})()};
(a=>{a["HRwO9OgSFVhQmjgIiZQ2MwV9Jtg="]=a.current})($__dart_deferred_initializers__);