((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,G,B={
d54(d){return new B.D9(d)},
D9:function D9(d){this.x=d
this.b=null},
baG:function baG(d){this.a=d},
d55(d){return new B.a1W(d,null)},
a1W:function a1W(d,e){this.d=d
this.a=e},
abj:function abj(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bXT:function bXT(d){this.a=d},
bXS:function bXS(d,e){this.a=d
this.b=e},
bXR:function bXR(d,e){this.a=d
this.b=e},
bXV:function bXV(d){this.a=d},
bXW:function bXW(d,e,f){this.a=d
this.b=e
this.c=f},
bXY:function bXY(){},
bXX:function bXX(d,e){this.a=d
this.b=e},
bXU:function bXU(d,e,f){this.a=d
this.b=e
this.c=f},
bXZ:function bXZ(d){this.a=d}},D,E,F,H
J=c[1]
A=c[0]
C=c[2]
I=c[147]
G=c[253]
B=a.updateHolder(c[34],B)
D=c[114]
E=c[77]
F=c[249]
H=c[130]
B.D9.prototype={
cP(){A.iB(this.gM4(this),y.H)
return F.JC},
lG(d){var x=0,w=A.m(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$lG=A.i(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.sa1(0,t.ga1(0).i2(!0))
s=$.Q()
r=s.b
r===$&&A.b()
q=t.x
n=E
m=!1
l=J
x=2
return A.d(r.P("messages").cf(0).W("conversation_id",q).dj(0,"created_at",!0),$async$lG)
case 2:t.sa1(0,new n.jS(m,l.d0(f,new B.baG(t),y.y).bx(0)))
v=4
r=y.z
x=7
return A.d(s.b.aT("mark_conversation_read",A.U(["p_conversation_id",q],y.N,r),r),$async$lG)
case 7:A.el(t).ai($.cGk())
v=1
x=6
break
case 4:v=3
o=u.pop()
x=6
break
case 3:x=1
break
case 6:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$lG,w)},
lT(d){return this.aEi(d)},
aEi(d){var x=0,w=A.m(y.H),v,u=this,t,s,r,q,p
var $async$lT=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:p=C.f.D(d)
if(p.length===0){x=1
break}t=$.Q()
s=t.b
s===$&&A.b()
s=s.P("messages")
t=t.b.gbC().e.a
r=y.N
x=3
return A.d(s.d1(0,A.U(["conversation_id",u.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cf(0).dH(0),$async$lT)
case 3:q=f
r=u.ga1(0)
t=A.Y(u.ga1(0).b,y.y)
t.push(u.a2K(q))
u.sa1(0,r.DR(t))
case 1:return A.k(v,w)}})
return A.l($async$lT,w)},
mp(d){return this.aEd(d)},
aEd(d){var x=0,w=A.m(y.H),v=this,u,t,s
var $async$mp=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=$.Q()
s=t.b
s===$&&A.b()
s=s.P("messages")
t=t.b.gbC().e.a
x=2
return A.d(s.d1(0,A.U(["conversation_id",v.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cf(0).dH(0),$async$mp)
case 2:u=f
t=v.ga1(0)
s=A.Y(v.ga1(0).b,y.y)
s.push(v.a2K(u))
v.sa1(0,t.DR(s))
return A.k(null,w)}})
return A.l($async$mp,w)},
kb(d,e){return this.bli(0,e)},
bli(d,e){var x=0,w=A.m(y.H),v=this,u,t,s,r,q,p
var $async$kb=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&A.b()
x=2
return A.d(p.aT("delete_message",A.U(["p_message_id",e],y.N,y.z),y.H),$async$kb)
case 2:p=v.ga1(0)
u=A.a([],y.t)
for(t=v.ga1(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa1(0,p.DR(u))
return A.k(null,w)}})
return A.l($async$kb,w)},
a2K(d){var x,w=J.a3(d),v=A.a1(w.h(d,"id")),u=A.a1(w.h(d,"conversation_id")),t=J.n(w.h(d,"sender_role"),"partner"),s=A.I(w.h(d,"body")),r=A.I(w.h(d,"attachment_url")),q=A.I(w.h(d,"attachment_type")),p=A.I(w.h(d,"attachment_name")),o=A.d9(A.a1(w.h(d,"created_at"))),n=A.I(w.h(d,"proposal_id")),m=A.I(w.h(d,"proposal_title")),l=A.aM(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aM(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dT(w.h(d,"is_quote_request_notice"))
return E.cHt(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a1W.prototype={
S(){return new B.abj(new A.aE(C.am,$.ac()),A.rI(null,0,null,null))}}
B.abj.prototype={
m(){var x=this.w
x.T$=$.ac()
x.X$=0
this.x.m()
this.a5()},
a2L(){$.az.ry$.push(new B.bXT(this))},
Rz(){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$Rz=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.D(s).length===0){x=1
break}t.jl(0,C.kc)
t=u.gV()
t.a2(0,$.Bb().$1("c:"+u.a.d.a).gaR(),y.M).fG(0)
x=3
return A.d(t.a2(0,$.aOx().$1(u.a.d.a).gaR(),y.Q).lT(s),$async$Rz)
case 3:u.a2L()
case 1:return A.k(v,w)}})
return A.l($async$Rz,w)},
IB(){var x=0,w=A.m(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$IB=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(D.qz(q),$async$IB)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gV().a2(0,$.aOx().$1(s.a.d.a).gaR(),y.Q).mp(r),$async$IB)
case 8:s.a2L()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.R(y.q).f.a3(F.a6K)
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$IB,w)},
alQ(d,e,f){var x=null
if(!d||e.Q)return f
return A.dB(x,f,C.a2,!1,x,x,x,x,x,x,x,new B.bXS(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bc)},
u(d){var x,w=this,v=null,u=w.gV(),t=$.aOx(),s=y.n,r=u.M(t.$1(w.a.d.a),s)
u.oT(t.$1(w.a.d.a),new B.bXV(w),s)
s=w.a.d
s=A.bA(!1,D.czk(s.d,v,s.b,v,new B.bXW(w,d,r),v,!1),v,C.Y,!1)
if(r.a&&r.b.length===0)t=C.bn
else{t=E.cRO(new B.bXX(w,d),new B.bXY(),r.b,v)
x=A.a8(t).i("d_<1>")
t=A.Y(new A.d_(t,x),x.i("bb.E"))
t=A.cX(t,w.x,C.b8,v,v,!0,C.a_,!1)}return A.cM(v,C.kw,A.D(A.a([s,A.a5(t,1),A.lp(new D.Oo(D.cEK(u.M($.Bb().$1("c:"+w.a.d.a),y.a)),v),C.ag,!0),new D.Om(w.w,w.gb5K(),w.gb5J(),"Escreve uma mensagem",new B.bXZ(w),v)],y.p),C.x,C.j,C.q,0,C.w),!0,v)}}
var z=a.updateTypes(["G<~>()","jS()","kD(@)","~(jS?,jS)","y(kD)","e(kD,y)","D9(c)"])
B.baG.prototype={
$1(d){return this.a.a2K(y.P.a(d))},
$S:z+2}
B.bXT.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.ij(0,C.cj,C.kO)},
$S:7}
B.bXS.prototype={
$0(){var x=0,w=A.m(y.H),v,u=this,t,s
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(H.Ni(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(H.Nu(s,new B.bXR(t,u.b)),$async$$0)
case 4:case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:2}
B.bXR.prototype={
$0(){var x=this.a
return x.gV().a2(0,$.aOx().$1(x.a.d.a).gaR(),y.Q).kb(0,this.b.a)},
$S:2}
B.bXV.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a2L()},
$S:z+3}
B.bXW.prototype={
$0(){var x,w,v,u,t,s=this.a.gV(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("d_<1>"),x=new A.d_(x,w),x=new A.al(x,x.gA(0),w.i("al<bb.E>")),w=w.i("bb.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new D.zI(u,v==null?"":v,null,null))}}return D.WN(this.b,s,!1,G.qT,r)},
$S:0}
B.bXY.prototype={
$1(d){return d.d},
$S:z+4}
B.bXX.prototype={
$2(d,e){var x,w=null,v=d.as
if(v!=null){x=d.at
if(x==null)x="file"
x=this.a.alQ(e,d,new D.Ol(v,x,d.ax,e,w))
v=x}else if(d.w!=null){v=d.x
if(v==null)v="Proposta"
v=E.cHu(F.bw3,d.z,"PROPOSTA ENVIADA",w,w,d.y,w,v)}else{v=this.a
x=d.e
if(e)v=v.alQ(!0,d,new D.ya(x==null?"":x,!0,w,w))
else v=A.dB(w,new D.ya(x==null?"":x,!1,w,w),C.a2,!1,w,w,w,w,w,w,w,new B.bXU(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.bc)}return v},
$S:z+5}
B.bXU.prototype={
$0(){return I.vd(this.b,this.a.gV(),!1,null,null,G.qT,this.c.a)},
$S:0}
B.bXZ.prototype={
$1(d){var x,w,v=this.a,u=v.gV(),t=u.a2(0,$.b6(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.D(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.D(s)}else{s=s?null:t.b
w=s==null?"":s}u.a2(0,$.Bb().$1("c:"+v.a.d.a).gaR(),y.M).a9V(w)},
$S:3};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dlg","d54",6)
var u
w(u=B.D9.prototype,"gi1","cP",1)
v(u,"gM4","lG",0)
w(u=B.abj.prototype,"gb5K","Rz",0)
w(u,"gb5J","IB",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.D9,A.eO)
w(A.bq,[B.baG,B.bXT,B.bXY,B.bXZ])
x(B.a1W,A.dk)
x(B.abj,A.df)
w(A.bI,[B.bXS,B.bXR,B.bXW,B.bXU])
w(A.cG,[B.bXV,B.bXX])})()
A.bj(b.typeUniverse,JSON.parse('{"D9":{"eO":["jS"]},"a1W":{"F":[],"e":[]},"abj":{"a_":["a1W"]}}'))
var y=(function rtii(){var x=A.u
return{D:x("ct"),y:x("kD"),n:x("jS"),t:x("q<kD>"),Y:x("q<zI>"),p:x("q<e>"),a:x("r<c>"),P:x("a6<c,@>"),Q:x("D9"),N:x("c"),M:x("uT"),q:x("dv"),z:x("@"),T:x("c?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dwy","aOx",()=>F.Jc.$3$1(B.dlg(),y.Q,y.n,y.N))})()};
(a=>{a["mSi9M61SW4xf3F/nzBHkD4UgfK0="]=a.current})($__dart_deferred_initializers__);