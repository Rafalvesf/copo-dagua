((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,G,B={
dfi(d){return new B.E2(d)},
E2:function E2(d){this.x=d
this.b=null},
bfN:function bfN(d){this.a=d},
dfj(d){return new B.a3M(d,null)},
a3M:function a3M(d,e){this.d=d
this.a=e},
adj:function adj(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
c4b:function c4b(d){this.a=d},
c4a:function c4a(d,e){this.a=d
this.b=e},
c49:function c49(d,e){this.a=d
this.b=e},
c4d:function c4d(d){this.a=d},
c4e:function c4e(d,e,f){this.a=d
this.b=e
this.c=f},
c4g:function c4g(){},
c4f:function c4f(d,e){this.a=d
this.b=e},
c4c:function c4c(d,e,f){this.a=d
this.b=e
this.c=f},
c4h:function c4h(d){this.a=d}},D,E,F,H
J=c[1]
A=c[0]
C=c[2]
I=c[145]
G=c[229]
B=a.updateHolder(c[34],B)
D=c[113]
E=c[77]
F=c[225]
H=c[127]
B.E2.prototype={
cT(){A.iQ(this.gN5(this),y.H)
return F.Kd},
lY(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$lY=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.sa1(0,t.ga1(0).ig(!0))
s=$.R()
r=s.b
r===$&&A.b()
q=t.x
n=E
m=!1
l=J
x=2
return A.d(r.P("messages").cl(0).V("conversation_id",q).du(0,"created_at",!0),$async$lY)
case 2:t.sa1(0,new n.k7(m,l.d0(f,new B.bfN(t),y.y).bz(0)))
v=4
r=y.z
x=7
return A.d(s.b.b1("mark_conversation_read",A.Q(["p_conversation_id",q],y.N,r),r),$async$lY)
case 7:A.ew(t).aj($.cOD())
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
return A.m($async$lY,w)},
mc(d){return this.aH6(d)},
aH6(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$mc=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=C.f.D(d)
if(p.length===0){x=1
break}t=$.R()
s=t.b
s===$&&A.b()
s=s.P("messages")
t=t.b.gbF().e.a
r=y.N
x=3
return A.d(s.d9(0,A.Q(["conversation_id",u.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cl(0).dO(0),$async$mc)
case 3:q=f
r=u.ga1(0)
t=A.W(u.ga1(0).b,y.y)
t.push(u.a4d(q))
u.sa1(0,r.EC(t))
case 1:return A.l(v,w)}})
return A.m($async$mc,w)},
mO(d){return this.aH1(d)},
aH1(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mO=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.R()
s=t.b
s===$&&A.b()
s=s.P("messages")
t=t.b.gbF().e.a
x=2
return A.d(s.d9(0,A.Q(["conversation_id",v.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cl(0).dO(0),$async$mO)
case 2:u=f
t=v.ga1(0)
s=A.W(v.ga1(0).b,y.y)
s.push(v.a4d(u))
v.sa1(0,t.EC(s))
return A.l(null,w)}})
return A.m($async$mO,w)},
jO(d,e){return this.bpt(0,e)},
bpt(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jO=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.R().b
p===$&&A.b()
x=2
return A.d(p.b1("delete_message",A.Q(["p_message_id",e],y.N,y.z),y.H),$async$jO)
case 2:p=v.ga1(0)
u=A.a([],y.t)
for(t=v.ga1(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa1(0,p.EC(u))
return A.l(null,w)}})
return A.m($async$jO,w)},
a4d(d){var x,w=J.a5(d),v=A.a2(w.h(d,"id")),u=A.a2(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.M(w.h(d,"body")),r=A.M(w.h(d,"attachment_url")),q=A.M(w.h(d,"attachment_type")),p=A.M(w.h(d,"attachment_name")),o=A.dc(A.a2(w.h(d,"created_at"))),n=A.M(w.h(d,"proposal_id")),m=A.M(w.h(d,"proposal_title")),l=A.aR(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aR(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.e0(w.h(d,"is_quote_request_notice"))
return E.cPO(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a3M.prototype={
S(){return new B.adj(new A.aH(C.am,$.ae()),A.t9(null,0,null,null))}}
B.adj.prototype={
m(){var x=this.w
x.a0$=$.ae()
x.W$=0
this.x.m()
this.aa()},
a4e(){$.az.k4$.push(new B.c4b(this))},
SD(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$SD=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.D(s).length===0){x=1
break}t.jF(0,C.ks)
t=u.gU()
t.a2(0,$.BZ().$1("c:"+u.a.d.a).gaU(),y.M).fR(0)
x=3
return A.d(t.a2(0,$.aSd().$1(u.a.d.a).gaU(),y.Q).mc(s),$async$SD)
case 3:u.a4e()
case 1:return A.l(v,w)}})
return A.m($async$SD,w)},
Jz(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Jz=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(D.r0(q),$async$Jz)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gU().a2(0,$.aSd().$1(s.a.d.a).gaU(),y.Q).mO(r),$async$Jz)
case 8:s.a4e()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.R(y.q).f.a5(F.a7z)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Jz,w)},
ao7(d,e,f){var x=null
if(!d||e.Q)return f
return A.dH(x,f,C.a1,!1,x,x,x,x,x,x,x,new B.c4a(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bd)},
u(d){var x,w=this,v=null,u=w.gU(),t=$.aSd(),s=y.n,r=u.L(t.$1(w.a.d.a),s)
u.pq(t.$1(w.a.d.a),new B.c4d(w),s)
s=w.a.d
s=A.bE(!1,D.cHe(s.d,v,s.b,v,new B.c4e(w,d,r),v,!1),v,C.Z,!1)
if(r.a&&r.b.length===0)t=C.bp
else{t=E.d_V(new B.c4f(w,d),new B.c4g(),r.b,v)
x=A.a8(t).i("cX<1>")
t=A.W(new A.cX(t,x),x.i("b3.E"))
t=A.d5(t,w.x,C.b9,v,v,!0,C.a2,!1)}return A.cP(v,C.kK,A.E(A.a([s,A.a7(t,1),A.lK(new D.PP(D.cMW(u.L($.BZ().$1("c:"+w.a.d.a),y.a)),v),C.ag,!0),new D.PN(w.w,w.gb9g(),w.gb9f(),"Escreve uma mensagem",new B.c4h(w),v)],y.p),C.x,C.k,C.p,0,C.w),!0,v)}}
var z=a.updateTypes(["G<~>()","k7()","kR(@)","~(k7?,k7)","z(kR)","e(kR,z)","E2(c)"])
B.bfN.prototype={
$1(d){return this.a.a4d(y.P.a(d))},
$S:z+2}
B.c4b.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.iA(0,C.cm,C.l2)},
$S:6}
B.c4a.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(H.OA(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(H.ON(s,new B.c49(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.c49.prototype={
$0(){var x=this.a
return x.gU().a2(0,$.aSd().$1(x.a.d.a).gaU(),y.Q).jO(0,this.b.a)},
$S:2}
B.c4d.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a4e()},
$S:z+3}
B.c4e.prototype={
$0(){var x,w,v,u,t,s=this.a.gU(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("cX<1>"),x=new A.cX(x,w),x=new A.an(x,x.gA(0),w.i("an<b3.E>")),w=w.i("b3.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new D.Ar(u,v==null?"":v,null,null))}}return D.Yy(this.b,s,!1,G.r8,r)},
$S:0}
B.c4g.prototype={
$1(d){return d.d},
$S:z+4}
B.c4f.prototype={
$2(d,e){var x,w=null,v=d.as
if(v!=null){x=d.at
if(x==null)x="file"
x=this.a.ao7(e,d,new D.PM(v,x,d.ax,e,w))
v=x}else if(d.w!=null){v=d.x
if(v==null)v="Proposta"
v=E.cPP(F.bx9,d.z,"PROPOSTA ENVIADA",w,w,d.y,w,v)}else{v=this.a
x=d.e
if(e)v=v.ao7(!0,d,new D.yT(x==null?"":x,!0,w,w))
else v=A.dH(w,new D.yT(x==null?"":x,!1,w,w),C.a1,!1,w,w,w,w,w,w,w,new B.c4c(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.bd)}return v},
$S:z+5}
B.c4c.prototype={
$0(){return I.vN(this.b,this.a.gU(),!1,null,null,G.r8,this.c.a)},
$S:0}
B.c4h.prototype={
$1(d){var x,w,v=this.a,u=v.gU(),t=u.a2(0,$.bb(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.D(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.D(s)}else{s=s?null:t.b
w=s==null?"":s}u.a2(0,$.BZ().$1("c:"+v.a.d.a).gaU(),y.M).abQ(w)},
$S:3};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dwj","dfi",6)
var u
w(u=B.E2.prototype,"gie","cT",1)
v(u,"gN5","lY",0)
w(u=B.adj.prototype,"gb9g","SD",0)
w(u,"gb9f","Jz",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.E2,A.f_)
w(A.bx,[B.bfN,B.c4b,B.c4g,B.c4h])
x(B.a3M,A.dw)
x(B.adj,A.dq)
w(A.bS,[B.c4a,B.c49,B.c4e,B.c4c])
w(A.cS,[B.c4d,B.c4f])})()
A.bu(b.typeUniverse,JSON.parse('{"E2":{"f_":["k7"]},"a3M":{"I":[],"e":[],"f":[]},"adj":{"a1":["a3M"]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cw"),y:x("kR"),n:x("k7"),t:x("r<kR>"),Y:x("r<Ar>"),p:x("r<e>"),a:x("t<c>"),P:x("a3<c,@>"),Q:x("E2"),N:x("c"),M:x("vr"),q:x("dJ"),z:x("@"),T:x("c?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dID","aSd",()=>F.JM.$3$1(B.dwj(),y.Q,y.n,y.N))})()};
(a=>{a["4pcY4YUttPc9UwIZ1C8hPwfp1B4="]=a.current})($__dart_deferred_initializers__);