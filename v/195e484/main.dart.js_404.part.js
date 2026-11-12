((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cFE(d,e,f,g){return new B.a_y(d,e,f,g,null)},
b3g(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aC(0,e)
w=f.aC(0,e)
return e.ad(0,w.qS(A.af(x.Ky(w)/t,0,1)))},
d_4(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aC(0,q),o=e.b,n=o.aC(0,q),m=e.d,l=m.aC(0,q),k=p.Ky(n),j=n.Ky(n),i=p.Ky(l),h=l.Ky(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.b3g(d,q,o),B.b3g(d,o,x),B.b3g(d,x,m),B.b3g(d,m,q)]
v=A.dj()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bn()},
d5j(){var x=A.hh()
return new B.au0(x,$.ah())},
cMq(d,e,f){return Math.log(f/d)/Math.log(e/100)},
cNx(d,e){var x,w,v,u,t,s,r=new A.d5(new Float64Array(16))
r.cD(d)
r.kR(r)
x=e.a
w=e.b
v=new A.eb(new Float64Array(3))
v.fT(x,w,0)
v=r.nd(v)
u=e.c
t=new A.eb(new Float64Array(3))
t.fT(u,w,0)
t=r.nd(t)
w=e.d
s=new A.eb(new Float64Array(3))
s.fT(u,w,0)
s=r.nd(s)
u=new A.eb(new Float64Array(3))
u.fT(x,w,0)
u=r.nd(u)
x=new A.eb(new Float64Array(3))
x.cD(v)
w=new A.eb(new Float64Array(3))
w.cD(t)
v=new A.eb(new Float64Array(3))
v.cD(s)
t=new A.eb(new Float64Array(3))
t.cD(u)
return new B.a2o(x,w,v,t)},
cMf(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.O,w=0;w<4;++w){v=r[w]
u=B.d_4(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.D(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.D(x.a,t)}return B.czg(x)},
czg(d){return new A.D(A.qs(C.k.a8(d.a,9)),A.qs(C.k.a8(d.b,9)))},
dbb(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bs:C.Z},
a_y:function a_y(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
a9v:function a9v(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.eu$=f
_.bF$=g
_.c=_.a=null},
bPV:function bPV(){},
aAP:function aAP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
au0:function au0(d,e){var _=this
_.a=d
_.V$=0
_.a_$=e
_.az$=_.bl$=0},
a8Z:function a8Z(d,e){this.a=d
this.b=e},
ba9:function ba9(d,e){this.a=d
this.b=e},
aeG:function aeG(){},
a2o:function a2o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[126],B)
D=c[404]
B.a_y.prototype={
R(){var x=null,w=y.z
return new B.a9v(new A.c7(x,w),new A.c7(x,w),x,x)}}
B.a9v.prototype={
gdQ(){var x=this.d
if(x===$){this.a.toString
x=B.d5j()
this.d=x}return x},
gOq(){var x,w=$.aw.a5$.x.h(0,this.e).gaL()
w.toString
x=y.g.a(w).gJ(0)
return this.a.f.Li(new A.ae(0,0,0+x.a,0+x.b))},
gSm(){var x=$.aw.a5$.x.h(0,this.f).gaL()
x.toString
x=y.g.a(x).gJ(0)
return new A.ae(0,0,0+x.a,0+x.b)},
Cg(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.O)){x=new A.d5(new Float64Array(16))
x.cD(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.d5(new Float64Array(16))
w.cD(a0)
w.en(a1.a,a1.b,0,1)
v=B.cNx(w,d.gSm())
if(d.gOq().gavv(0))return w
x=d.gOq()
u=d.ay
t=A.hh()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.en(q/2,o/2,0,1)
t.Fb(u)
t.en(-q/2,-o/2,0,1)
u=new A.eb(new Float64Array(3))
u.fT(r,x,0)
u=t.nd(u)
q=new A.eb(new Float64Array(3))
q.fT(s,x,0)
q=t.nd(q)
x=new A.eb(new Float64Array(3))
x.fT(s,p,0)
x=t.nd(x)
s=new A.eb(new Float64Array(3))
s.fT(r,p,0)
s=t.nd(s)
r=new Float64Array(3)
new A.eb(r).cD(u)
u=new Float64Array(3)
new A.eb(u).cD(q)
q=new Float64Array(3)
new A.eb(q).cD(x)
x=new Float64Array(3)
new A.eb(x).cD(s)
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
x=new A.eb(new Float64Array(3))
x.fT(m,l,0)
u=new A.eb(new Float64Array(3))
u.fT(k,l,0)
s=new A.eb(new Float64Array(3))
s.fT(k,j,0)
r=new A.eb(new Float64Array(3))
r.fT(m,j,0)
q=new A.eb(new Float64Array(3))
q.cD(x)
x=new A.eb(new Float64Array(3))
x.cD(u)
u=new A.eb(new Float64Array(3))
u.cD(s)
s=new A.eb(new Float64Array(3))
s.cD(r)
i=new B.a2o(q,x,u,s)
h=B.cMf(i,v)
if(h.l(0,C.O))return w
x=w.XG().a
u=x[0]
x=x[1]
g=a0.B1()
u-=h.a*g
x-=h.b*g
f=new A.d5(new Float64Array(16))
f.cD(a0)
s=new A.eb(new Float64Array(3))
s.fT(u,x,0)
f.aaW(s)
e=B.cMf(i,B.cNx(f,d.gSm()))
if(e.l(0,C.O))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.d5(new Float64Array(16))
x.cD(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.d5(new Float64Array(16))
s.cD(a0)
r=new A.eb(new Float64Array(3))
r.fT(u,x,0)
s.aaW(r)
return s},
a1l(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.d5(new Float64Array(16))
x.cD(d)
return x}w=q.gdQ().a.B1()
x=q.gSm()
v=q.gOq()
u=q.gSm()
t=q.gOq()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.af(s,t.ax,t.at)/w
x=new A.d5(new Float64Array(16))
x.cD(d)
x.tz(r,r,r,1)
return x},
b0W(d,e,f){var x,w,v,u
if(e===0){x=new A.d5(new Float64Array(16))
x.cD(d)
return x}w=this.gdQ().nc(f)
x=new A.d5(new Float64Array(16))
x.cD(d)
v=w.a
u=w.b
x.en(v,u,0,1)
x.Fb(-e)
x.en(-v,-u,0,1)
return x},
Po(d){var x
A:{x=!0
if(D.c95===d){x=!1
break A}if(D.yz===d){this.a.toString
break A}if(D.qZ===d||d==null){this.a.toString
break A}x=null}return x},
ahl(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.yz
else return D.qZ},
b2n(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fK(0)
x=v.y
x.st(0,x.a)
x=v.r
if(x!=null)x.a.Y(0,v.gPP())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fK(0)
x=v.z
x.st(0,x.a)
x=v.w
if(x!=null)x.a.Y(0,v.gPV())
v.w=null}v.Q=v.ch=null
v.at=v.gdQ().a.B1()
v.as=v.gdQ().nc(d.b)
v.ax=v.ay},
b2p(d){var x,w,v,u,t,s,r=this,q=r.gdQ().a.B1(),p=r.x=d.c,o=r.gdQ().nc(p),n=r.ch
if(n===D.qZ)n=r.ch=r.ahl(d)
else if(n==null){n=r.ahl(d)
r.ch=n}if(!r.Po(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdQ().st(0,r.a1l(r.gdQ().a,n*d.d/q))
x=r.gdQ().nc(p)
n=r.gdQ()
w=r.gdQ().a
v=r.as
v.toString
n.st(0,r.Cg(w,x.aC(0,v)))
u=r.gdQ().nc(p)
p=r.as
p.toString
if(!B.czg(p).l(0,B.czg(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdQ().st(0,r.b0W(r.gdQ().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dbb(n,o)}n=r.as
n.toString
s=o.aC(0,n)
r.gdQ().st(0,r.Cg(r.gdQ().a,s))
r.as=r.gdQ().nc(p)
break}r.a.toString},
b2l(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.Y(0,l.gPP())
x=l.w
if(x!=null)x.a.Y(0,l.gPV())
x=l.y
x===$&&A.b()
x.st(0,x.a)
x=l.z
x===$&&A.b()
x.st(0,x.a)
x=l.ch
if(!l.Po(x)){l.Q=null
return}A:{if(D.qZ===x){x=d.a.a
if(x.gej()<50){l.Q=null
return}w=l.gdQ().a.XG().a
v=w[0]
w=w[1]
l.a.toString
u=A.aZ_(0.0000135,v,x.a,0)
l.a.toString
t=A.aZ_(0.0000135,w,x.b,0)
x=x.gej()
l.a.toString
s=B.cMq(x,0.0000135,10)
x=u.gE1()
r=t.gE1()
q=y.A
p=q.i("fx<bm.T>")
o=l.y
l.r=new A.bd(o,new A.fx(new A.iB(C.kC),new A.bq(new A.D(v,w),new A.D(x,r),q),p),p.i("bd<bm.T>"))
o.e=A.e2(0,0,0,C.k.aN(s*1000),0,0)
o.ai(0,l.gPP())
l.y.cn(0)
break A}if(D.yz===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdQ().a.B1()
l.a.toString
m=A.aZ_(0.0026999999999999997,n,x/10,0)
l.a.toString
s=B.cMq(w,0.0000135,0.1)
x=m.jt(0,s)
w=y.f
v=w.i("fx<bm.T>")
r=l.z
l.w=new A.bd(r,new A.fx(new A.iB(C.kC),new A.bq(n,x,w),v),v.i("bd<bm.T>"))
r.e=A.e2(0,0,0,C.k.aN(s*1000),0,0)
r.ai(0,l.gPV())
l.z.cn(0)
break A}break A}},
b_D(d){var x,w,v,u,t,s,r,q=this,p=d.gfQ(),o=d.gbz(d)
if(y.l.b(d)){x=d.gdY(d)===C.ex
if(x)q.a.toString
if(x){q.a.toString
x=o.ad(0,d.gtA())
w=d.gtA()
v=A.Jc(d.gdN(d),null,w,x)
if(!q.Po(D.qZ)){q.a.toString
return}u=q.gdQ().nc(p)
t=q.gdQ().nc(p.aC(0,v))
q.gdQ().st(0,q.Cg(q.gdQ().a,t.aC(0,u)))
q.a.toString
return}if(d.gtA().b===0)return
x=d.gtA()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gi_(d)
else return
q.a.toString
if(!q.Po(D.yz))return
u=q.gdQ().nc(p)
q.gdQ().st(0,q.a1l(q.gdQ().a,s))
r=q.gdQ().nc(p)
q.gdQ().st(0,q.Cg(q.gdQ().a,r.aC(0,u)))
q.a.toString},
aX4(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.Y(0,r.gPP())
r.r=null
q=r.y
q.st(0,q.a)
return}q=r.gdQ().a.XG().a
x=q[0]
q=q[1]
w=r.gdQ()
v=r.gdQ().a
u=r.gdQ()
t=r.r
s=t.b
t=t.a
w.st(0,r.Cg(v,u.nc(s.aw(0,t.gt(t))).aC(0,r.gdQ().nc(new A.D(x,q)))))},
aYG(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.Y(0,s.gPV())
s.w=null
r=s.z
r.st(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aw(0,r.gt(r))
r=s.gdQ().a.B1()
x=s.gdQ()
v=s.x
v===$&&A.b()
u=x.nc(v)
s.gdQ().st(0,s.a1l(s.gdQ().a,w/r))
t=s.gdQ().nc(s.x)
s.gdQ().st(0,s.Cg(s.gdQ().a,t.aC(0,u)))},
aZJ(){this.q(new B.bPV())},
ak(){var x=this,w=null
x.aG()
x.y=A.ct(w,w,w,1,w,x)
x.z=A.ct(w,w,w,1,w,x)
x.gdQ().ai(0,x.gaiU())},
bb(d){this.bx(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdQ().Y(0,x.gaiU())
x.a.toString
w=x.gdQ()
w.a_$=$.ah()
w.V$=0
x.aJi()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdQ().a
w=u.a.w
v=new B.aAP(w,u.e,C.C,!0,x,t,t)
return A.I5(C.h1,A.dT(C.c6,v,C.X,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gb2k(),u.gb2m(),u.gb2o(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.D(0,-0.005)),u.f,t,t,t,u.gb_C(),t)}}
B.aAP.prototype={
u(d){var x=this,w=A.SC(x.w,new A.nB(x.c,x.d),null,x.r,!0)
return A.xH(w,x.e,null)}}
B.au0.prototype={
nc(d){var x=this.a,w=new A.d5(new Float64Array(16))
if(w.kR(x)===0)A.aj(A.hP(x,"other","Matrix cannot be inverted"))
x=new A.eb(new Float64Array(3))
x.fT(d.a,d.b,0)
x=w.nd(x).a
return new A.D(x[0],x[1])}}
B.a8Z.prototype={
H(){return"_GestureType."+this.b}}
B.ba9.prototype={
H(){return"PanAxis."+this.b}}
B.aeG.prototype={
c2(){this.cK()
this.d7()
this.h0()},
m(){var x=this,w=x.bF$
if(w!=null)w.Y(0,x.gfL())
x.bF$=null
x.a9()}}
B.a2o.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a2o&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gC(d){var x=this
return A.ar(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a3z)","~(a3A)","~(RA)","~(lx)"])
B.bPV.prototype={
$0(){},
$S:0};(function aliases(){var x=B.aeG.prototype
x.aJi=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.a9v.prototype,"gb2m","b2n",1)
x(v,"gb2o","b2p",2)
x(v,"gb2k","b2l",3)
x(v,"gb_C","b_D",4)
w(v,"gPP","aX4",0)
w(v,"gPV","aYG",0)
w(v,"gaiU","aZJ",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.a_y,A.F)
w(B.aeG,A.a0)
w(B.a9v,B.aeG)
w(B.bPV,A.bI)
w(B.aAP,A.M)
w(B.au0,A.dv)
v(A.fq,[B.a8Z,B.ba9])
w(B.a2o,A.G)
x(B.aeG,A.hy)})()
A.bx(b.typeUniverse,JSON.parse('{"a_y":{"F":[],"e":[],"f":[]},"a9v":{"a0":["a_y"]},"aAP":{"M":[],"e":[],"f":[]},"au0":{"dv":["d5"],"aP":[]}}'))
var y={z:A.v("c7<a0<F>>"),B:A.v("Jg"),l:A.v("D1"),g:A.v("ad"),A:A.v("bq<D>"),f:A.v("bq<W>")};(function constants(){D.L9=new A.X(16,10,16,0)
D.cct=new B.ba9(3,"free")
D.qZ=new B.a8Z(0,"pan")
D.yz=new B.a8Z(1,"scale")
D.c95=new B.a8Z(2,"rotate")})()};
(a=>{a["9GKRjFT9HV15Q+eblJ4u5v3gNak="]=a.current})($__dart_deferred_initializers__);