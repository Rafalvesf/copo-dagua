((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,G,B={
d_T(d){return new B.CC(d)},
CC:function CC(d){this.x=d
this.b=null},
baq:function baq(d){this.a=d},
d_U(d){return new B.a1a(d,null)},
a1a:function a1a(d,e){this.d=d
this.a=e},
aas:function aas(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bWD:function bWD(d){this.a=d},
bWC:function bWC(d,e){this.a=d
this.b=e},
bWB:function bWB(d,e){this.a=d
this.b=e},
bWF:function bWF(d){this.a=d},
bWG:function bWG(d,e,f){this.a=d
this.b=e
this.c=f},
bWI:function bWI(){},
bWH:function bWH(d,e){this.a=d
this.b=e},
bWE:function bWE(d,e,f){this.a=d
this.b=e
this.c=f},
bWJ:function bWJ(d){this.a=d}},D,E,F,H
J=c[1]
A=c[0]
C=c[2]
I=c[145]
G=c[240]
B=a.updateHolder(c[34],B)
D=c[110]
E=c[77]
F=c[238]
H=c[125]
B.CC.prototype={
cY(){A.iE(this.gLx(this),y.H)
return F.J4},
lG(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$lG=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.sa1(0,t.ga1(0).i6(!0))
s=$.Z()
r=s.b
r===$&&A.b()
q=t.x
n=E
m=!1
l=J
x=2
return A.d(r.S("messages").cz(0).a0("conversation_id",q).dI(0,"created_at",!0),$async$lG)
case 2:t.sa1(0,new n.jG(m,l.d1(f,new B.baq(t),y.y).bB(0)))
v=4
r=y.z
x=7
return A.d(s.b.bd("mark_conversation_read",A.R(["p_conversation_id",q],y.N,r),r),$async$lG)
case 7:A.eo(t).aw($.cBm())
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
mA(d){return this.aCW(d)},
aCW(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
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
return A.d(s.dm(0,A.R(["conversation_id",u.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cz(0).dZ(0),$async$mA)
case 3:q=f
r=u.ga1(0)
t=A.Y(u.ga1(0).b,y.y)
t.push(u.a1X(q))
u.sa1(0,r.Do(t))
case 1:return A.l(v,w)}})
return A.m($async$mA,w)},
mz(d){return this.aCR(d)},
aCR(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mz=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.Z()
s=t.b
s===$&&A.b()
s=s.S("messages")
t=t.b.gbK().e.a
x=2
return A.d(s.dm(0,A.R(["conversation_id",v.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cz(0).dZ(0),$async$mz)
case 2:u=f
t=v.ga1(0)
s=A.Y(v.ga1(0).b,y.y)
s.push(v.a1X(u))
v.sa1(0,t.Do(s))
return A.l(null,w)}})
return A.m($async$mz,w)},
jD(d,e){return this.bjB(0,e)},
bjB(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jD=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.Z().b
p===$&&A.b()
x=2
return A.d(p.bd("delete_message",A.R(["p_message_id",e],y.N,y.z),y.H),$async$jD)
case 2:p=v.ga1(0)
u=A.a([],y.t)
for(t=v.ga1(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.L)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa1(0,p.Do(u))
return A.l(null,w)}})
return A.m($async$jD,w)},
a1X(d){var x,w=J.a3(d),v=A.a1(w.h(d,"id")),u=A.a1(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.P(w.h(d,"body")),r=A.P(w.h(d,"attachment_url")),q=A.P(w.h(d,"attachment_type")),p=A.P(w.h(d,"attachment_name")),o=A.df(A.a1(w.h(d,"created_at"))),n=A.P(w.h(d,"proposal_id")),m=A.P(w.h(d,"proposal_title")),l=A.b9(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.b9(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dN(w.h(d,"is_quote_request_notice"))
return E.cCu(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a1a.prototype={
R(){return new B.aas(new A.aM(C.aj,$.ah()),A.JO(null,0,null,null))}}
B.aas.prototype={
m(){var x=this.w
x.Z$=$.ah()
x.U$=0
this.x.m()
this.aa()},
a1Y(){$.aw.k4$.push(new B.bWD(this))},
QO(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$QO=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.L(s).length===0){x=1
break}t.jU(0,C.k6)
t=u.gV()
t.a2(0,$.AE().$1("c:"+u.a.d.a).gaZ(),y.M).fK(0)
x=3
return A.d(t.a2(0,$.aNL().$1(u.a.d.a).gaZ(),y.Q).mA(s),$async$QO)
case 3:u.a1Y()
case 1:return A.l(v,w)}})
return A.m($async$QO,w)},
I8(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$I8=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(D.qu(q),$async$I8)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gV().a2(0,$.aNL().$1(s.a.d.a).gaZ(),y.Q).mz(r),$async$I8)
case 8:s.a1Y()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.T(y.q).f.ah(F.a67)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$I8,w)},
al2(d,e,f){var x=null
if(!d||e.Q)return f
return A.dY(x,f,C.Y,!1,x,x,x,x,x,x,x,new B.bWC(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bo)},
u(d){var x,w=this,v=null,u=w.gV(),t=$.aNL(),s=y.n,r=u.M(t.$1(w.a.d.a),s)
u.p8(t.$1(w.a.d.a),new B.bWF(w),s)
s=w.a.d
s=A.bn(!1,D.cum(s.d,v,s.b,v,new B.bWG(w,d,r),v,!1),v,C.V,!1)
if(r.a&&r.b.length===0)t=C.bl
else{t=E.cN_(new B.bWH(w,d),new B.bWI(),r.b,v)
x=A.a6(t).i("cU<1>")
t=A.Y(new A.cU(t,x),x.i("b3.E"))
t=A.cL(t,w.x,C.bK,v,v,!0,C.Z,!1)}return A.cF(v,C.kq,A.I(A.a([s,A.ab(t,1),A.nr(new D.NO(D.czG(u.M($.AE().$1("c:"+w.a.d.a),y.a)),v),C.af,!0),new D.NM(w.w,w.gb4b(),w.gb4a(),"Escreve uma mensagem",new B.bWJ(w),v)],y.p),C.x,C.l,C.q,0,C.w),!0,v)}}
var z=a.updateTypes(["H<~>()","jG()","kk(@)","~(jG?,jG)","z(kk)","e(kk,z)","CC(c)"])
B.baq.prototype={
$1(d){return this.a.a1X(y.P.a(d))},
$S:z+2}
B.bWD.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.jh(0,C.cH,C.kK)},
$S:5}
B.bWC.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(H.MM(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(H.MU(s,new B.bWB(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.bWB.prototype={
$0(){var x=this.a
return x.gV().a2(0,$.aNL().$1(x.a.d.a).gaZ(),y.Q).jD(0,this.b.a)},
$S:2}
B.bWF.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a1Y()},
$S:z+3}
B.bWG.prototype={
$0(){var x,w,v,u,t,s=this.a.gV(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a6(x).i("cU<1>"),x=new A.cU(x,w),x=new A.ap(x,x.gv(0),w.i("ap<b3.E>")),w=w.i("b3.E");x.p();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new D.z7(u,v==null?"":v,null,null))}}return D.Wb(this.b,s,!1,G.qd,r)},
$S:0}
B.bWI.prototype={
$1(d){return d.d},
$S:z+4}
B.bWH.prototype={
$2(d,e){var x,w=null,v=d.as
if(v!=null){x=d.at
if(x==null)x="file"
x=this.a.al2(e,d,new D.NL(v,x,d.ax,e,w))
v=x}else if(d.w!=null){v=d.x
if(v==null)v="Proposta"
v=E.cCv(F.bqE,d.z,"PROPOSTA ENVIADA",w,w,d.y,w,v)}else{v=this.a
x=d.e
if(e)v=v.al2(!0,d,new D.xy(x==null?"":x,!0,w,w))
else v=A.dY(w,new D.xy(x==null?"":x,!1,w,w),C.Y,!1,w,w,w,w,w,w,w,new B.bWE(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.bo)}return v},
$S:z+5}
B.bWE.prototype={
$0(){return I.uP(this.b,this.a.gV(),!1,null,null,G.qd,this.c.a)},
$S:0}
B.bWJ.prototype={
$1(d){var x,w,v=this.a,u=v.gV(),t=u.a2(0,$.bp(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.L(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.L(s)}else{s=s?null:t.b
w=s==null?"":s}u.a2(0,$.AE().$1("c:"+v.a.d.a).gaZ(),y.M).a95(w)},
$S:6};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dfG","d_T",6)
var u
w(u=B.CC.prototype,"gi5","cY",1)
v(u,"gLx","lG",0)
w(u=B.aas.prototype,"gb4b","QO",0)
w(u,"gb4a","I8",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CC,A.eO)
w(A.bv,[B.baq,B.bWD,B.bWI,B.bWJ])
x(B.a1a,A.dy)
x(B.aas,A.dw)
w(A.bI,[B.bWC,B.bWB,B.bWG,B.bWE])
w(A.cD,[B.bWF,B.bWH])})()
A.bx(b.typeUniverse,JSON.parse('{"CC":{"eO":["jG"]},"a1a":{"G":[],"e":[],"f":[]},"aas":{"a0":["a1a"]}}'))
var y=(function rtii(){var x=A.v
return{D:x("cI"),y:x("kk"),n:x("jG"),t:x("q<kk>"),Y:x("q<z7>"),p:x("q<e>"),a:x("t<c>"),P:x("a2<c,@>"),Q:x("CC"),N:x("c"),M:x("uq"),q:x("dD"),z:x("@"),T:x("c?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dsb","aNL",()=>F.IE.$3$1(B.dfG(),y.Q,y.n,y.N))})()};
(a=>{a["ws6LJOUiFQuu5dbrGjIeAxfK+Ps="]=a.current})($__dart_deferred_initializers__);