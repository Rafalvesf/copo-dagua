((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cAv(d,e,f,g){return new B.Ia(d,e,f,g,null)},
b3c(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.ao(0,e)
w=f.ao(0,e)
return e.ae(0,w.qD(A.ae(x.L5(w)/t,0,1)))},
d3s(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.ao(0,q),o=e.b,n=o.ao(0,q),m=e.d,l=m.ao(0,q),k=p.L5(n),j=n.L5(n),i=p.L5(l),h=l.L5(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.b3c(d,q,o),B.b3c(d,o,x),B.b3c(d,x,m),B.b3c(d,m,q)]
v=A.dE()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bt()},
d99(){var x=A.h4()
return new B.auv(x,$.ac())},
cQn(d,e,f){return Math.log(f/d)/Math.log(e/100)},
cRA(d,e){var x,w,v,u,t,s,r=new A.d6(new Float64Array(16))
r.c8(d)
r.kQ(r)
x=e.a
w=e.b
v=new A.ec(new Float64Array(3))
v.fU(x,w,0)
v=r.n2(v)
u=e.c
t=new A.ec(new Float64Array(3))
t.fU(u,w,0)
t=r.n2(t)
w=e.d
s=new A.ec(new Float64Array(3))
s.fU(u,w,0)
s=r.n2(s)
u=new A.ec(new Float64Array(3))
u.fU(x,w,0)
u=r.n2(u)
x=new A.ec(new Float64Array(3))
x.c8(v)
w=new A.ec(new Float64Array(3))
w.c8(t)
v=new A.ec(new Float64Array(3))
v.c8(s)
t=new A.ec(new Float64Array(3))
t.c8(u)
return new B.a33(x,w,v,t)},
cQc(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.Q,w=0;w<4;++w){v=r[w]
u=B.d3s(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.C(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.C(x.a,t)}return B.cDq(x)},
cDq(d){return new A.C(A.iO(C.k.a8(d.a,9)),A.iO(C.k.a8(d.b,9)))},
dfh(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bz:C.a_},
Ia:function Ia(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
aaa:function aaa(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.eg$=f
_.bz$=g
_.c=_.a=null},
bPY:function bPY(){},
aBn:function aBn(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
auv:function auv(d,e){var _=this
_.a=d
_.X$=0
_.T$=e
_.b3$=_.b5$=0},
a9G:function a9G(d,e){this.a=d
this.b=e},
ba7:function ba7(d,e){this.a=d
this.b=e},
afE:function afE(){},
a33:function a33(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[170],B)
D=c[459]
B.Ia.prototype={
S(){var x=null,w=y.z
return new B.aaa(new A.cn(x,w),new A.cn(x,w),x,x)}}
B.aaa.prototype={
gdP(){var x=this.d
if(x===$){this.a.toString
x=B.d99()
this.d=x}return x},
gOS(){var x,w=$.az.aI$.x.h(0,this.e).gaJ()
w.toString
x=y.g.a(w).gN(0)
return this.a.f.LM(new A.aa(0,0,0+x.a,0+x.b))},
gTa(){var x=$.az.aI$.x.h(0,this.f).gaJ()
x.toString
x=y.g.a(x).gN(0)
return new A.aa(0,0,0+x.a,0+x.b)},
Cz(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.Q)){x=new A.d6(new Float64Array(16))
x.c8(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.d6(new Float64Array(16))
w.c8(a0)
w.ek(a1.a,a1.b,0,1)
v=B.cRA(w,d.gTa())
if(d.gOS().gawr(0))return w
x=d.gOS()
u=d.ay
t=A.h4()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.ek(q/2,o/2,0,1)
t.t9(u)
t.ek(-q/2,-o/2,0,1)
u=new A.ec(new Float64Array(3))
u.fU(r,x,0)
u=t.n2(u)
q=new A.ec(new Float64Array(3))
q.fU(s,x,0)
q=t.n2(q)
x=new A.ec(new Float64Array(3))
x.fU(s,p,0)
x=t.n2(x)
s=new A.ec(new Float64Array(3))
s.fU(r,p,0)
s=t.n2(s)
r=new Float64Array(3)
new A.ec(r).c8(u)
u=new Float64Array(3)
new A.ec(u).c8(q)
q=new Float64Array(3)
new A.ec(q).c8(x)
x=new Float64Array(3)
new A.ec(x).c8(s)
s=r[0]
p=u[0]
o=q[0]
n=x[0]
m=Math.min(s,Math.min(p,Math.min(o,n)))
r=r[1]
u=u[1]
q=q[1]
x=x[1]
l=Math.min(r,Math.min(u,Math.min(q,x)))
k=Math.max(s,Math.max(p,Math.max(o,n)))
j=Math.max(r,Math.max(u,Math.max(q,x)))
x=new A.ec(new Float64Array(3))
x.fU(m,l,0)
u=new A.ec(new Float64Array(3))
u.fU(k,l,0)
s=new A.ec(new Float64Array(3))
s.fU(k,j,0)
r=new A.ec(new Float64Array(3))
r.fU(m,j,0)
q=new A.ec(new Float64Array(3))
q.c8(x)
x=new A.ec(new Float64Array(3))
x.c8(u)
u=new A.ec(new Float64Array(3))
u.c8(s)
s=new A.ec(new Float64Array(3))
s.c8(r)
i=new B.a33(q,x,u,s)
h=B.cQc(i,v)
if(h.l(0,C.Q))return w
x=w.YA().a
u=x[0]
x=x[1]
g=a0.Bc()
u-=h.a*g
x-=h.b*g
f=new A.d6(new Float64Array(16))
f.c8(a0)
s=new A.ec(new Float64Array(3))
s.fU(u,x,0)
f.abJ(s)
e=B.cQc(i,B.cRA(f,d.gTa()))
if(e.l(0,C.Q))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.d6(new Float64Array(16))
x.c8(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.d6(new Float64Array(16))
s.c8(a0)
r=new A.ec(new Float64Array(3))
r.fU(u,x,0)
s.abJ(r)
return s},
a27(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.d6(new Float64Array(16))
x.c8(d)
return x}w=q.gdP().a.Bc()
x=q.gTa()
v=q.gOS()
u=q.gTa()
t=q.gOS()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ae(s,t.ax,t.at)/w
x=new A.d6(new Float64Array(16))
x.c8(d)
x.n8(r,r,r,1)
return x},
b2d(d,e,f){var x,w,v,u
if(e===0){x=new A.d6(new Float64Array(16))
x.c8(d)
return x}w=this.gdP().n1(f)
x=new A.d6(new Float64Array(16))
x.c8(d)
v=w.a
u=w.b
x.ek(v,u,0,1)
x.t9(-e)
x.ek(-v,-u,0,1)
return x},
Q_(d){var x
A:{x=!0
if(D.ch4===d){x=!1
break A}if(D.yL===d){this.a.toString
break A}if(D.rH===d||d==null){this.a.toString
break A}x=null}return x},
ai6(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.yL
else return D.rH},
b3I(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fG(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a_(0,v.gQp())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fG(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a_(0,v.gQv())
v.w=null}v.Q=v.ch=null
v.at=v.gdP().a.Bc()
v.as=v.gdP().n1(d.b)
v.ax=v.ay},
b3K(d){var x,w,v,u,t,s,r=this,q=r.gdP().a.Bc(),p=r.x=d.c,o=r.gdP().n1(p),n=r.ch
if(n===D.rH)n=r.ch=r.ai6(d)
else if(n==null){n=r.ai6(d)
r.ch=n}if(!r.Q_(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdP().sv(0,r.a27(r.gdP().a,n*d.d/q))
x=r.gdP().n1(p)
n=r.gdP()
w=r.gdP().a
v=r.as
v.toString
n.sv(0,r.Cz(w,x.ao(0,v)))
u=r.gdP().n1(p)
p=r.as
p.toString
if(!B.cDq(p).l(0,B.cDq(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdP().sv(0,r.b2d(r.gdP().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dfh(n,o)}n=r.as
n.toString
s=o.ao(0,n)
r.gdP().sv(0,r.Cz(r.gdP().a,s))
r.as=r.gdP().n1(p)
break}r.a.toString},
b3G(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a_(0,l.gQp())
x=l.w
if(x!=null)x.a.a_(0,l.gQv())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.Q_(x)){l.Q=null
return}A:{if(D.rH===x){x=d.a.a
if(x.ge8()<50){l.Q=null
return}w=l.gdP().a.YA().a
v=w[0]
w=w[1]
l.a.toString
u=A.aZi(0.0000135,v,x.a,0)
l.a.toString
t=A.aZi(0.0000135,w,x.b,0)
x=x.ge8()
l.a.toString
s=B.cQn(x,0.0000135,10)
x=u.gEt()
r=t.gEt()
q=y.A
p=q.i("fW<bk.T>")
o=l.y
l.r=new A.b8(o,new A.fW(new A.jT(C.kG),new A.bp(new A.C(v,w),new A.C(x,r),q),p),p.i("b8<bk.T>"))
o.e=A.eW(0,0,0,C.k.aF(s*1000),0,0)
o.aj(0,l.gQp())
l.y.ck(0)
break A}if(D.yL===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdP().a.Bc()
l.a.toString
m=A.aZi(0.0026999999999999997,n,x/10,0)
l.a.toString
s=B.cQn(w,0.0000135,0.1)
x=m.jk(0,s)
w=y.f
v=w.i("fW<bk.T>")
r=l.z
l.w=new A.b8(r,new A.fW(new A.jT(C.kG),new A.bp(n,x,w),v),v.i("b8<bk.T>"))
r.e=A.eW(0,0,0,C.k.aF(s*1000),0,0)
r.aj(0,l.gQv())
l.z.ck(0)
break A}break A}},
b8s(d){var x,w,v,u,t,s,r,q=this,p=d.gfO(),o=d.gbp(d)
if(y.l.b(d)){x=d.gdR(d)===C.eG
if(x)q.a.toString
if(x){q.a.toString
x=o.ae(0,d.gtq())
w=d.gtq()
v=A.JA(d.gdN(d),null,w,x)
if(!q.Q_(D.rH)){q.a.toString
return}u=q.gdP().n1(p)
t=q.gdP().n1(p.ao(0,v))
q.gdP().sv(0,q.Cz(q.gdP().a,t.ao(0,u)))
q.a.toString
return}if(d.gtq().b===0)return
x=d.gtq()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.ghm(d)
else return
q.a.toString
if(!q.Q_(D.yL))return
u=q.gdP().n1(p)
q.gdP().sv(0,q.a27(q.gdP().a,s))
r=q.gdP().n1(p)
q.gdP().sv(0,q.Cz(q.gdP().a,r.ao(0,u)))
q.a.toString},
aYk(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a_(0,r.gQp())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdP().a.YA().a
x=q[0]
q=q[1]
w=r.gdP()
v=r.gdP().a
u=r.gdP()
t=r.r
s=t.b
t=t.a
w.sv(0,r.Cz(v,u.n1(s.ar(0,t.gv(t))).ao(0,r.gdP().n1(new A.C(x,q)))))},
aZW(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a_(0,s.gQv())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.ar(0,r.gv(r))
r=s.gdP().a.Bc()
x=s.gdP()
v=s.x
v===$&&A.b()
u=x.n1(v)
s.gdP().sv(0,s.a27(s.gdP().a,w/r))
t=s.gdP().n1(s.x)
s.gdP().sv(0,s.Cz(s.gdP().a,t.ao(0,u)))},
b0_(){this.p(new B.bPY())},
ak(){var x=this,w=null
x.aE()
x.y=A.cy(w,w,w,1,w,x)
x.z=A.cy(w,w,w,1,w,x)
x.gdP().aj(0,x.gajD())},
b4(d){this.bs(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdP().a_(0,x.gajD())
x.a.toString
w=x.gdP()
w.T$=$.ac()
w.X$=0
x.aKx()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdP().a
w=u.a.w
v=new B.aBn(w,u.e,C.A,!0,x,t,t)
return A.CK(C.fy,A.dB(C.bY,v,C.a2,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gb3F(),u.gb3H(),u.gb3J(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.C(0,-0.005)),u.f,t,t,t,u.gb8r(),t)}}
B.aBn.prototype={
u(d){var x=this,w=A.L1(x.w,new A.mU(x.c,x.d),null,x.r,!0)
return A.BE(w,x.e,null)}}
B.auv.prototype={
n1(d){var x=this.a,w=new A.d6(new Float64Array(16))
if(w.kQ(x)===0)A.ai(A.il(x,"other","Matrix cannot be inverted"))
x=new A.ec(new Float64Array(3))
x.fU(d.a,d.b,0)
x=w.n2(x).a
return new A.C(x[0],x[1])}}
B.a9G.prototype={
J(){return"_GestureType."+this.b}}
B.ba7.prototype={
J(){return"PanAxis."+this.b}}
B.afE.prototype={
bW(){this.cH()
this.d_()
this.fI()},
m(){var x=this,w=x.bz$
if(w!=null)w.a_(0,x.gfq())
x.bz$=null
x.a5()}}
B.a33.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a33&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gB(d){var x=this
return A.ao(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a4h)","~(a4i)","~(S6)","~(lA)"])
B.bPY.prototype={
$0(){},
$S:0};(function aliases(){var x=B.afE.prototype
x.aKx=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aaa.prototype,"gb3H","b3I",1)
x(v,"gb3J","b3K",2)
x(v,"gb3F","b3G",3)
x(v,"gb8r","b8s",4)
w(v,"gQp","aYk",0)
w(v,"gQv","aZW",0)
w(v,"gajD","b0_",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Ia,A.F)
w(B.afE,A.a_)
w(B.aaa,B.afE)
w(B.bPY,A.bI)
w(B.aBn,A.O)
w(B.auv,A.dy)
v(A.fn,[B.a9G,B.ba7])
w(B.a33,A.H)
x(B.afE,A.hs)})()
A.bj(b.typeUniverse,JSON.parse('{"Ia":{"F":[],"e":[]},"aaa":{"a_":["Ia"]},"aBn":{"O":[],"e":[]},"auv":{"dy":["d6"],"aL":[]}}'))
var y={z:A.u("cn<a_<F>>"),B:A.u("JE"),l:A.u("Dy"),g:A.u("ad"),A:A.u("bp<C>"),f:A.u("bp<T>")};(function constants(){D.ckw=new B.ba7(3,"free")
D.rH=new B.a9G(0,"pan")
D.yL=new B.a9G(1,"scale")
D.ch4=new B.a9G(2,"rotate")})()};
(a=>{a["UkmYQTHL8kp8qgmCxaZT/413Wd4="]=a.current})($__dart_deferred_initializers__);