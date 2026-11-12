((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,G,B={
d01(d){return new B.CC(d)},
CC:function CC(d){this.x=d
this.b=null},
baw:function baw(d){this.a=d},
d02(d){return new B.a1d(d,null)},
a1d:function a1d(d,e){this.d=d
this.a=e},
aav:function aav(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
bWM:function bWM(d){this.a=d},
bWL:function bWL(d,e){this.a=d
this.b=e},
bWK:function bWK(d,e){this.a=d
this.b=e},
bWO:function bWO(d){this.a=d},
bWP:function bWP(d,e,f){this.a=d
this.b=e
this.c=f},
bWR:function bWR(){},
bWQ:function bWQ(d,e){this.a=d
this.b=e},
bWN:function bWN(d,e,f){this.a=d
this.b=e
this.c=f},
bWS:function bWS(d){this.a=d}},D,E,F,H
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
B.CC.prototype={
cY(){A.iE(this.gLx(this),y.H)
return F.J3},
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
return A.d(r.S("messages").cz(0).a0("conversation_id",q).dI(0,"created_at",!0),$async$lG)
case 2:t.sa1(0,new n.jG(m,l.d1(f,new B.baw(t),y.y).bB(0)))
v=4
r=y.z
x=7
return A.d(s.b.bd("mark_conversation_read",A.R(["p_conversation_id",q],y.N,r),r),$async$lG)
case 7:A.en(t).aw($.cBu())
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
jD(d,e){return this.bjD(0,e)},
bjD(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
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
return E.cCC(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a1d.prototype={
R(){return new B.aav(new A.aM(C.aj,$.ah()),A.JP(null,0,null,null))}}
B.aav.prototype={
m(){var x=this.w
x.Z$=$.ah()
x.U$=0
this.x.m()
this.a9()},
a1Y(){$.aw.k4$.push(new B.bWM(this))},
QO(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$QO=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.L(s).length===0){x=1
break}t.jU(0,C.k6)
t=u.gV()
t.a2(0,$.AE().$1("c:"+u.a.d.a).gaZ(),y.M).fK(0)
x=3
return A.d(t.a2(0,$.aNR().$1(u.a.d.a).gaZ(),y.Q).mA(s),$async$QO)
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
return A.d(s.gV().a2(0,$.aNR().$1(s.a.d.a).gaZ(),y.Q).mz(r),$async$I8)
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
return A.dX(x,f,C.X,!1,x,x,x,x,x,x,x,new B.bWL(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bm)},
u(d){var x,w=this,v=null,u=w.gV(),t=$.aNR(),s=y.n,r=u.M(t.$1(w.a.d.a),s)
u.p8(t.$1(w.a.d.a),new B.bWO(w),s)
s=w.a.d
s=A.bn(!1,D.cuv(s.d,v,s.b,v,new B.bWP(w,d,r),v,!1),v,C.V,!1)
if(r.a&&r.b.length===0)t=C.bk
else{t=E.cN8(new B.bWQ(w,d),new B.bWR(),r.b,v)
x=A.a6(t).i("cU<1>")
t=A.Y(new A.cU(t,x),x.i("b3.E"))
t=A.cL(t,w.x,C.bK,v,v,!0,C.Y,!1)}return A.cF(v,C.kq,A.I(A.a([s,A.ac(t,1),A.nr(new D.NP(D.czO(u.M($.AE().$1("c:"+w.a.d.a),y.a)),v),C.af,!0),new D.NN(w.w,w.gb4c(),w.gb4b(),"Escreve uma mensagem",new B.bWS(w),v)],y.p),C.x,C.m,C.q,0,C.w),!0,v)}}
var z=a.updateTypes(["H<~>()","jG()","kk(@)","~(jG?,jG)","z(kk)","e(kk,z)","CC(c)"])
B.baw.prototype={
$1(d){return this.a.a1X(y.P.a(d))},
$S:z+2}
B.bWM.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.jh(0,C.cH,C.kL)},
$S:5}
B.bWL.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(H.MN(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(H.MV(s,new B.bWK(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.bWK.prototype={
$0(){var x=this.a
return x.gV().a2(0,$.aNR().$1(x.a.d.a).gaZ(),y.Q).jD(0,this.b.a)},
$S:2}
B.bWO.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a1Y()},
$S:z+3}
B.bWP.prototype={
$0(){var x,w,v,u,t,s=this.a.gV(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a6(x).i("cU<1>"),x=new A.cU(x,w),x=new A.ap(x,x.gv(0),w.i("ap<b3.E>")),w=w.i("b3.E");x.p();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new D.z8(u,v==null?"":v,null,null))}}return D.Wc(this.b,s,!1,G.qg,r)},
$S:0}
B.bWR.prototype={
$1(d){return d.d},
$S:z+4}
B.bWQ.prototype={
$2(d,e){var x,w=null,v=d.as
if(v!=null){x=d.at
if(x==null)x="file"
x=this.a.al2(e,d,new D.NM(v,x,d.ax,e,w))
v=x}else if(d.w!=null){v=d.x
if(v==null)v="Proposta"
v=E.cCD(F.bqG,d.z,"PROPOSTA ENVIADA",w,w,d.y,w,v)}else{v=this.a
x=d.e
if(e)v=v.al2(!0,d,new D.xz(x==null?"":x,!0,w,w))
else v=A.dX(w,new D.xz(x==null?"":x,!1,w,w),C.X,!1,w,w,w,w,w,w,w,new B.bWN(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.bm)}return v},
$S:z+5}
B.bWN.prototype={
$0(){return I.uQ(this.b,this.a.gV(),!1,null,null,G.qg,this.c.a)},
$S:0}
B.bWS.prototype={
$1(d){var x,w,v=this.a,u=v.gV(),t=u.a2(0,$.bp(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.L(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.L(s)}else{s=s?null:t.b
w=s==null?"":s}u.a2(0,$.AE().$1("c:"+v.a.d.a).gaZ(),y.M).a95(w)},
$S:6};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dfP","d01",6)
var u
w(u=B.CC.prototype,"gi7","cY",1)
v(u,"gLx","lG",0)
w(u=B.aav.prototype,"gb4c","QO",0)
w(u,"gb4b","I8",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.CC,A.eO)
w(A.bv,[B.baw,B.bWM,B.bWR,B.bWS])
x(B.a1d,A.dy)
x(B.aav,A.dw)
w(A.bI,[B.bWL,B.bWK,B.bWP,B.bWN])
w(A.cD,[B.bWO,B.bWQ])})()
A.bx(b.typeUniverse,JSON.parse('{"CC":{"eO":["jG"]},"a1d":{"G":[],"e":[],"f":[]},"aav":{"a0":["a1d"]}}'))
var y=(function rtii(){var x=A.v
return{D:x("cI"),y:x("kk"),n:x("jG"),t:x("q<kk>"),Y:x("q<z8>"),p:x("q<e>"),a:x("t<c>"),P:x("a2<c,@>"),Q:x("CC"),N:x("c"),M:x("ur"),q:x("dD"),z:x("@"),T:x("c?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dsk","aNR",()=>F.ID.$3$1(B.dfP(),y.Q,y.n,y.N))})()};
(a=>{a["30Qzeq1aS+KKIaMX5sFxL6qLx0M="]=a.current})($__dart_deferred_initializers__);