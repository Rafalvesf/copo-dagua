((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
aXC(d,e,f){return new B.Zd(d,f,e,null)},
jM:function jM(d){this.a=d},
Zd:function Zd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a8x:function a8x(){var _=this
_.e=_.d=null
_.f=!1
_.c=_.a=_.r=null},
bHP:function bHP(d){this.a=d},
bHR:function bHR(d,e){this.a=d
this.b=e},
bHO:function bHO(d,e,f){this.a=d
this.b=e
this.c=f},
bHQ:function bHQ(d){this.a=d},
azi:function azi(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h}},D,E,F
A=c[0]
C=c[2]
B=a.updateHolder(c[157],B)
D=c[458]
E=c[418]
F=c[326]
B.jM.prototype={}
B.Zd.prototype={
R(){return new B.a8x()},
bqJ(d){return this.e.$1(d)}}
B.a8x.prototype={
aje(){var x=this.a,w=x.c.length
x=x.d
return w>3?1000*w+x:x},
alH(d){var x=this.a.c.length
return C.i.aj(C.i.aj(d,x)+x,x)},
bbg(){var x,w,v,u,t,s=this,r=s.d
if(r!=null&&r.f.length!==0){x=y.h.a(C.e.gfV(r.f)).gx7(0)
w=C.k.aN(x==null?r.as:x)}else w=s.aje()
x=s.a
v=x.c.length
if(v<=3)return C.i.ar(x.d,0,v-1)
u=w-s.alH(w)
x=s.a
v=x.c.length
x=x.d
t=A.a([u-v+x,u+x,u+v+x],y.b)
C.e.d4(t,new B.bHP(w))
return C.e.gN(t)},
a0o(d,e){var x,w=this.d
if(this.c==null||w==null||w.f.length===0)return
x=e==null?this.bbg():e
if(d)w.Jx(x,C.eJ,E.KG)
else w.bop(x)},
aUN(){return this.a0o(!0,null)},
a0n(d){return this.a0o(!0,d)},
ba(d){var x,w,v,u,t=this
t.bx(d)
x=d.c.length
w=t.a
v=w.c.length
if(x!==v){x=t.d
if(x!=null)x.m()
t.r=t.d=null
return}if(d.d!==w.d){u=t.r
t.r=null
$.aw.k4$.push(new B.bHR(t,u))}},
m(){var x=this.e
if(x!=null)x.aQ(0)
x=this.d
if(x!=null)x.m()
this.a9()},
aT6(d){var x,w=this
if(d instanceof A.zb&&d.d!=null){w.f=!0
x=w.e
if(x!=null)x.aQ(0)}else if(d instanceof A.q1&&w.f){w.f=!1
x=w.e
if(x!=null)x.aQ(0)
w.e=A.db(F.B5,w.gaUM())}return!1},
agN(d,e){var x=this.a
return new B.azi(x.c[d],d===x.d,!1,new B.bHO(this,d,e),null)},
aT4(d){return this.agN(d,null)},
u(d){var x,w,v=this,u=null,t=v.a.c.length
if(t===0)return A.aT(u,52,u)
if(t<=3){t=A.a([],y.e)
for(x=0;x<v.a.c.length;++x)t.push(new A.bJ(1,C.as,v.aT4(x),u))
return A.aT(A.W(t,C.x,C.m,C.q,0,u,u),52,u)}t=v.d
if(t==null)t=v.d=A.a0Z(v.aje(),0.3333333333333333)
w=v.a.c.length
if(w>3)w=u
return A.aT(new A.fo(v.gaT5(),A.a17(C.C,t,new B.bHQ(v),w,u,u,!1),u,y.f),52,u)}}
B.azi.prototype={
u(d){var x=null,w=this.d,v=w?C.v:C.L,u=w?$.a5:C.ad,t=A.T(999),s=A.a([],y.e)
s.push(A.i(this.c.a,x,x,x,A.as(x,x,v,x,x,x,x,x,x,x,x,14,x,x,w?C.F:C.bf,x,x,!0,x,x,x,x,x,x,x,x),x,x,x))
s=A.Ze(C.S,A.W(s,C.x,C.m,C.a_,0,x,x),C.js)
return A.bs(x,!0,x,A.b_(A.eA(C.S,s,x,C.cH,new A.K(u,x,x,t,x,x,C.y),C.ec,x,42,D.ao_,C.jE,x),this.f,x),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,C.a6,x)}}
var z=a.updateTypes(["~({animate:z,page:w?})","z(lB)"])
B.bHP.prototype={
$2(d,e){var x=this.a
return C.i.bC(Math.abs(d-x),Math.abs(e-x))},
$S:108}
B.bHR.prototype={
$1(d){return this.a.a0n(this.b)},
$S:5}
B.bHO.prototype={
$0(){var x,w,v=this.a,u=v.e
if(u!=null)u.aQ(0)
u=this.b
x=v.a
w=this.c
if(u===x.d)v.a0n(w)
else{v.r=w
x.bqJ(u)}},
$S:0}
B.bHQ.prototype={
$2(d,e){var x=this.a,w=x.a.c.length
return x.agN(w>3?x.alH(e):e,e)},
$S:463};(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_1u
var v
x(v=B.a8x.prototype,"gaUM",0,0,function(){return{animate:!0,page:null}},["$2$animate$page","$0","$1$page"],["a0o","aUN","a0n"],0,0,0)
w(v,"gaT5","aT6",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.jM,A.F)
x(B.Zd,A.G)
x(B.a8x,A.a0)
w(A.cD,[B.bHP,B.bHQ])
x(B.bHR,A.bv)
x(B.bHO,A.bI)
x(B.azi,A.M)})()
A.bx(b.typeUniverse,JSON.parse('{"Zd":{"G":[],"e":[],"f":[]},"a8x":{"a0":["Zd"]},"azi":{"M":[],"e":[],"f":[]}}'))
var y={e:A.v("q<e>"),b:A.v("q<w>"),f:A.v("fo<lB>"),h:A.v("uG")};(function constants(){D.ao_=new A.X(4,5,4,5)})()};
(a=>{a["5lXH/aJZjdyfzg6oBZTn/sF9TTw="]=a.current})($__dart_deferred_initializers__);