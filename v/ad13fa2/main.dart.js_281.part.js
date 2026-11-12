((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,E,B={
aXQ(d,e,f){return new B.Zp(d,f,e,null)},
jN:function jN(d){this.a=d},
Zp:function Zp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a8G:function a8G(){var _=this
_.e=_.d=null
_.f=!1
_.c=_.a=_.r=null},
bIa:function bIa(d){this.a=d},
bIc:function bIc(d,e){this.a=d
this.b=e},
bI9:function bI9(d,e,f){this.a=d
this.b=e
this.c=f},
bIb:function bIb(d){this.a=d},
azz:function azz(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h}},D,F
A=c[0]
C=c[2]
E=c[438]
B=a.updateHolder(c[158],B)
D=c[453]
F=c[411]
B.jN.prototype={}
B.Zp.prototype={
R(){return new B.a8G()},
br9(d){return this.e.$1(d)}}
B.a8G.prototype={
ajy(){var x=this.a,w=x.c.length
x=x.d
return w>3?1000*w+x:x},
alZ(d){var x=this.a.c.length
return C.i.ah(C.i.ah(d,x)+x,x)},
bbI(){var x,w,v,u,t,s=this,r=s.d
if(r!=null&&r.f.length!==0){x=y.h.a(C.e.gfV(r.f)).gx8(0)
w=C.k.aP(x==null?r.as:x)}else w=s.ajy()
x=s.a
v=x.c.length
if(v<=3)return C.i.an(x.d,0,v-1)
u=w-s.alZ(w)
x=s.a
v=x.c.length
x=x.d
t=A.a([u-v+x,u+x,u+v+x],y.b)
C.e.d4(t,new B.bIa(w))
return C.e.gO(t)},
a0G(d,e){var x,w=this.d
if(this.c==null||w==null||w.f.length===0)return
x=e==null?this.bbI():e
if(d)w.JI(x,C.eI,F.KG)
else w.boR(x)},
aV8(){return this.a0G(!0,null)},
a0F(d){return this.a0G(!0,d)},
bb(d){var x,w,v,u,t=this
t.bx(d)
x=d.c.length
w=t.a
v=w.c.length
if(x!==v){x=t.d
if(x!=null)x.m()
t.r=t.d=null
return}if(d.d!==w.d){u=t.r
t.r=null
$.aw.k4$.push(new B.bIc(t,u))}},
m(){var x=this.e
if(x!=null)x.aQ(0)
x=this.d
if(x!=null)x.m()
this.aa()},
aTs(d){var x,w=this
if(d instanceof A.zh&&d.d!=null){w.f=!0
x=w.e
if(x!=null)x.aQ(0)}else if(d instanceof A.q3&&w.f){w.f=!1
x=w.e
if(x!=null)x.aQ(0)
w.e=A.dc(E.KB,w.gaV7())}return!1},
ah4(d,e){var x=this.a
return new B.azz(x.c[d],d===x.d,!1,new B.bI9(this,d,e),null)},
aTq(d){return this.ah4(d,null)},
u(d){var x,w,v=this,u=null,t=v.a.c.length
if(t===0)return A.aU(u,52,u)
if(t<=3){t=A.a([],y.e)
for(x=0;x<v.a.c.length;++x)t.push(new A.bN(1,C.au,v.aTq(x),u))
return A.aU(A.Z(t,C.x,C.m,C.q,0,u,u),52,u)}t=v.d
if(t==null)t=v.d=A.a1b(v.ajy(),0.3333333333333333)
w=v.a.c.length
if(w>3)w=u
return A.aU(new A.fo(v.gaTr(),A.a1k(C.D,t,new B.bIb(v),w,u,u,!1),u,y.f),52,u)}}
B.azz.prototype={
u(d){var x=null,w=this.d,v=w?C.v:C.L,u=w?$.a9:C.ae,t=A.T(999),s=A.a([],y.e)
s.push(A.i(this.c.a,x,x,x,A.as(x,x,v,x,x,x,x,x,x,x,x,14,x,x,w?C.F:C.bd,x,x,!0,x,x,x,x,x,x,x,x),x,x,x))
s=A.akO(C.T,A.Z(s,C.x,C.m,C.a0,0,x,x),C.ku)
return A.bs(x,!0,x,A.b0(A.eT(C.T,s,x,C.cJ,new A.L(u,x,x,t,x,x,C.y),C.eJ,x,42,D.ao0,C.jx,x),this.f,x),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,w,x,x,x,x,x,x,C.a7,x)}}
var z=a.updateTypes(["~({animate:z,page:w?})","z(lC)"])
B.bIa.prototype={
$2(d,e){var x=this.a
return C.i.bC(Math.abs(d-x),Math.abs(e-x))},
$S:115}
B.bIc.prototype={
$1(d){return this.a.a0F(this.b)},
$S:6}
B.bI9.prototype={
$0(){var x,w,v=this.a,u=v.e
if(u!=null)u.aQ(0)
u=this.b
x=v.a
w=this.c
if(u===x.d)v.a0F(w)
else{v.r=w
x.br9(u)}},
$S:0}
B.bIb.prototype={
$2(d,e){var x=this.a,w=x.a.c.length
return x.ah4(w>3?x.alZ(e):e,e)},
$S:415};(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_1u
var v
x(v=B.a8G.prototype,"gaV7",0,0,function(){return{animate:!0,page:null}},["$2$animate$page","$0","$1$page"],["a0G","aV8","a0F"],0,0,0)
w(v,"gaTr","aTs",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.jN,A.F)
x(B.Zp,A.G)
x(B.a8G,A.a0)
w(A.cD,[B.bIa,B.bIb])
x(B.bIc,A.bv)
x(B.bI9,A.bI)
x(B.azz,A.N)})()
A.bx(b.typeUniverse,JSON.parse('{"Zp":{"G":[],"e":[],"f":[]},"a8G":{"a0":["Zp"]},"azz":{"N":[],"e":[],"f":[]}}'))
var y={e:A.v("q<e>"),b:A.v("q<w>"),f:A.v("fo<lC>"),h:A.v("uG")};(function constants(){D.ao0=new A.Y(4,5,4,5)})()};
(a=>{a["FAAB8ZPA57B47BwL1v5B7M4gsrY="]=a.current})($__dart_deferred_initializers__);