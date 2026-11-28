((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cXe(d,e,f,g){return new B.Kp(d,e,f,g,null)},
bdk(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aA(0,e)
w=f.aA(0,e)
return e.ai(0,w.rr(A.ah(x.Nh(w)/t,0,1)))},
dtm(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aA(0,q),o=e.b,n=o.aA(0,q),m=e.d,l=m.aA(0,q),k=p.Nh(n),j=n.Nh(n),i=p.Nh(l),h=l.Nh(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bdk(d,q,o),B.bdk(d,o,x),B.bdk(d,x,m),B.bdk(d,m,q)]
v=A.dn()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bh()},
dzX(){var x=A.h_()
return new B.aBw(x,$.aa())},
ddA(d,e,f){return Math.log(f/d)/Math.log(e/100)},
deX(d,e){var x,w,v,u,t,s,r=new A.dh(new Float64Array(16))
r.cc(d)
r.lg(r)
x=e.a
w=e.b
v=new A.ew(new Float64Array(3))
v.hi(x,w,0)
v=r.mT(v)
u=e.c
t=new A.ew(new Float64Array(3))
t.hi(u,w,0)
t=r.mT(t)
w=e.d
s=new A.ew(new Float64Array(3))
s.hi(u,w,0)
s=r.mT(s)
u=new A.ew(new Float64Array(3))
u.hi(x,w,0)
u=r.mT(u)
x=new A.ew(new Float64Array(3))
x.cc(v)
w=new A.ew(new Float64Array(3))
w.cc(t)
v=new A.ew(new Float64Array(3))
v.cc(s)
t=new A.ew(new Float64Array(3))
t.cc(u)
return new B.a7k(x,w,v,t)},
ddq(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.U,w=0;w<4;++w){v=r[w]
u=B.dtm(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.M(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.M(x.a,t)}return B.d_t(x)},
d_t(d){return new A.M(A.iP(C.k.a9(d.a,9)),A.iP(C.k.a9(d.b,9)))},
dGr(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bw:C.a2},
Kp:function Kp(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
aeS:function aeS(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.eu$=f
_.bG$=g
_.c=_.a=null},
c6E:function c6E(){},
aIG:function aIG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBw:function aBw(d,e){var _=this
_.a=d
_.W$=0
_.Y$=e
_.aI$=_.bm$=0},
aeg:function aeg(d,e){this.a=d
this.b=e},
blo:function blo(d,e){this.a=d
this.b=e},
akE:function akE(){},
a7k:function a7k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[180],B)
D=c[433]
B.Kp.prototype={
P(){var x=null,w=y.z
return new B.aeS(new A.bX(x,w),new A.bX(x,w),x,x)}}
B.aeS.prototype={
ge0(){var x=this.d
if(x===$){this.a.toString
x=B.dzX()
this.d=x}return x},
gRa(){var x,w=$.aB.a8$.x.h(0,this.e).gaO()
w.toString
x=y.g.a(w).gN(0)
return this.a.f.NX(new A.ae(0,0,0+x.a,0+x.b))},
gVY(){var x=$.aB.a8$.x.h(0,this.f).gaO()
x.toString
x=y.g.a(x).gN(0)
return new A.ae(0,0,0+x.a,0+x.b)},
E4(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.U)){x=new A.dh(new Float64Array(16))
x.cc(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dh(new Float64Array(16))
w.cc(a0)
w.ec(a1.a,a1.b,0,1)
v=B.deX(w,d.gVY())
if(d.gRa().gaBt(0))return w
x=d.gRa()
u=d.ay
t=A.h_()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.ec(q/2,o/2,0,1)
t.tY(u)
t.ec(-q/2,-o/2,0,1)
u=new A.ew(new Float64Array(3))
u.hi(r,x,0)
u=t.mT(u)
q=new A.ew(new Float64Array(3))
q.hi(s,x,0)
q=t.mT(q)
x=new A.ew(new Float64Array(3))
x.hi(s,p,0)
x=t.mT(x)
s=new A.ew(new Float64Array(3))
s.hi(r,p,0)
s=t.mT(s)
r=new Float64Array(3)
new A.ew(r).cc(u)
u=new Float64Array(3)
new A.ew(u).cc(q)
q=new Float64Array(3)
new A.ew(q).cc(x)
x=new Float64Array(3)
new A.ew(x).cc(s)
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
x=new A.ew(new Float64Array(3))
x.hi(m,l,0)
u=new A.ew(new Float64Array(3))
u.hi(k,l,0)
s=new A.ew(new Float64Array(3))
s.hi(k,j,0)
r=new A.ew(new Float64Array(3))
r.hi(m,j,0)
q=new A.ew(new Float64Array(3))
q.cc(x)
x=new A.ew(new Float64Array(3))
x.cc(u)
u=new A.ew(new Float64Array(3))
u.cc(s)
s=new A.ew(new Float64Array(3))
s.cc(r)
i=new B.a7k(q,x,u,s)
h=B.ddq(i,v)
if(h.l(0,C.U))return w
x=w.a0z().a
u=x[0]
x=x[1]
g=a0.CF()
u-=h.a*g
x-=h.b*g
f=new A.dh(new Float64Array(16))
f.cc(a0)
s=new A.ew(new Float64Array(3))
s.hi(u,x,0)
f.afL(s)
e=B.ddq(i,B.deX(f,d.gVY()))
if(e.l(0,C.U))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.dh(new Float64Array(16))
x.cc(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.dh(new Float64Array(16))
s.cc(a0)
r=new A.ew(new Float64Array(3))
r.hi(u,x,0)
s.afL(r)
return s},
a5o(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dh(new Float64Array(16))
x.cc(d)
return x}w=q.ge0().a.CF()
x=q.gVY()
v=q.gRa()
u=q.gVY()
t=q.gRa()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ah(s,t.ax,t.at)/w
x=new A.dh(new Float64Array(16))
x.cc(d)
x.mY(r,r,r,1)
return x},
b9s(d,e,f){var x,w,v,u
if(e===0){x=new A.dh(new Float64Array(16))
x.cc(d)
return x}w=this.ge0().nC(f)
x=new A.dh(new Float64Array(16))
x.cc(d)
v=w.a
u=w.b
x.ec(v,u,0,1)
x.tY(-e)
x.ec(-v,-u,0,1)
return x},
So(d){var x
A:{x=!0
if(D.co3===d){x=!1
break A}if(D.A9===d){this.a.toString
break A}if(D.tS===d||d==null){this.a.toString
break A}x=null}return x},
amu(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.A9
else return D.tS},
bb9(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d6(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a_(0,v.gSS())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d6(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a_(0,v.gSY())
v.w=null}v.Q=v.ch=null
v.at=v.ge0().a.CF()
v.as=v.ge0().nC(d.b)
v.ax=v.ay},
bbb(d){var x,w,v,u,t,s,r=this,q=r.ge0().a.CF(),p=r.x=d.c,o=r.ge0().nC(p),n=r.ch
if(n===D.tS)n=r.ch=r.amu(d)
else if(n==null){n=r.amu(d)
r.ch=n}if(!r.So(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.ge0().sv(0,r.a5o(r.ge0().a,n*d.d/q))
x=r.ge0().nC(p)
n=r.ge0()
w=r.ge0().a
v=r.as
v.toString
n.sv(0,r.E4(w,x.aA(0,v)))
u=r.ge0().nC(p)
p=r.as
p.toString
if(!B.d_t(p).l(0,B.d_t(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.ge0().sv(0,r.b9s(r.ge0().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dGr(n,o)}n=r.as
n.toString
s=o.aA(0,n)
r.ge0().sv(0,r.E4(r.ge0().a,s))
r.as=r.ge0().nC(p)
break}r.a.toString},
bb7(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a_(0,l.gSS())
x=l.w
if(x!=null)x.a.a_(0,l.gSY())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.So(x)){l.Q=null
return}A:{if(D.tS===x){x=d.a.a
if(x.ger()<50){l.Q=null
return}w=l.ge0().a.a0z().a
v=w[0]
w=w[1]
l.a.toString
u=A.arM(0.0000135,v,x.a,0,C.fM)
l.a.toString
t=A.arM(0.0000135,w,x.b,0,C.fM)
x=x.ger()
l.a.toString
s=B.ddA(x,0.0000135,10)
x=u.gG3()
r=t.gG3()
q=y.A
p=q.i("hs<by.T>")
o=l.y
l.r=new A.bm(o,new A.hs(new A.km(C.lA),new A.bE(new A.M(v,w),new A.M(x,r),q),p),p.i("bm<by.T>"))
o.e=A.ef(0,0,0,C.k.aJ(s*1000),0,0)
o.an(0,l.gSS())
l.y.cs(0)
break A}if(D.A9===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.ge0().a.CF()
l.a.toString
m=A.arM(0.0026999999999999997,n,x/10,0,C.fM)
l.a.toString
s=B.ddA(w,0.0000135,0.1)
x=m.iI(0,s)
w=y.f
v=w.i("hs<by.T>")
r=l.z
l.w=new A.bm(r,new A.hs(new A.km(C.lA),new A.bE(n,x,w),v),v.i("bm<by.T>"))
r.e=A.ef(0,0,0,C.k.aJ(s*1000),0,0)
r.an(0,l.gSY())
l.z.cs(0)
break A}break A}},
b7P(d){var x,w,v,u,t,s,r,q=this,p=d.ghc(),o=d.gbB(d)
if(y.l.b(d)){x=d.ge1(d)===C.f2
if(x)q.a.toString
if(x){q.a.toString
x=o.ai(0,d.gug())
w=d.gug()
v=A.M1(d.gdZ(d),null,w,x)
if(!q.So(D.tS)){q.a.toString
return}u=q.ge0().nC(p)
t=q.ge0().nC(p.aA(0,v))
q.ge0().sv(0,q.E4(q.ge0().a,t.aA(0,u)))
q.a.toString
return}if(d.gug().b===0)return
x=d.gug()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gkf(d)
else return
q.a.toString
if(!q.So(D.A9))return
u=q.ge0().nC(p)
q.ge0().sv(0,q.a5o(q.ge0().a,s))
r=q.ge0().nC(p)
q.ge0().sv(0,q.E4(q.ge0().a,r.aA(0,u)))
q.a.toString},
b4e(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a_(0,r.gSS())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.ge0().a.a0z().a
x=q[0]
q=q[1]
w=r.ge0()
v=r.ge0().a
u=r.ge0()
t=r.r
s=t.b
t=t.a
w.sv(0,r.E4(v,u.nC(s.aF(0,t.gv(t))).aA(0,r.ge0().nC(new A.M(x,q)))))},
b5S(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a_(0,s.gSY())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aF(0,r.gv(r))
r=s.ge0().a.CF()
x=s.ge0()
v=s.x
v===$&&A.b()
u=x.nC(v)
s.ge0().sv(0,s.a5o(s.ge0().a,w/r))
t=s.ge0().nC(s.x)
s.ge0().sv(0,s.E4(s.ge0().a,t.aA(0,u)))},
b6Y(){this.p(new B.c6E())},
ad(){var x=this,w=null
x.ao()
x.y=A.cE(w,w,w,1,w,x)
x.z=A.cE(w,w,w,1,w,x)
x.ge0().an(0,x.gao3())},
ba(d){this.bw(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.ge0().a_(0,x.gao3())
x.a.toString
w=x.ge0()
w.Y$=$.aa()
w.W$=0
x.aQw()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.ge0().a
w=u.a.w
v=new B.aIG(w,u.e,C.z,!0,x,t,t)
return A.EF(C.h0,A.cM(C.bz,v,C.X,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gbb6(),u.gbb8(),u.gbba(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.M(0,-0.005)),u.f,t,t,t,u.gb7O(),t)}}
B.aIG.prototype={
u(d){var x=this,w=A.NC(x.w,new A.hk(x.c,x.d),null,x.r,!0)
return A.x2(w,x.e,null)}}
B.aBw.prototype={
nC(d){var x=this.a,w=new A.dh(new Float64Array(16))
if(w.lg(x)===0)A.al(A.h3(x,"other","Matrix cannot be inverted"))
x=new A.ew(new Float64Array(3))
x.hi(d.a,d.b,0)
x=w.mT(x).a
return new A.M(x[0],x[1])}}
B.aeg.prototype={
I(){return"_GestureType."+this.b}}
B.blo.prototype={
I(){return"PanAxis."+this.b}}
B.akE.prototype={
bV(){this.cD()
this.d4()
this.h1()},
m(){var x=this,w=x.bG$
if(w!=null)w.a_(0,x.gfN())
x.bG$=null
x.a5()}}
B.a7k.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a7k&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.at(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a8z)","~(a8A)","~(Vq)","~(mm)"])
B.c6E.prototype={
$0(){},
$S:0};(function aliases(){var x=B.akE.prototype
x.aQw=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aeS.prototype,"gbb8","bb9",1)
x(v,"gbba","bbb",2)
x(v,"gbb6","bb7",3)
x(v,"gb7O","b7P",4)
w(v,"gSS","b4e",0)
w(v,"gSY","b5S",0)
w(v,"gao3","b6Y",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Kp,A.G)
w(B.akE,A.Y)
w(B.aeS,B.akE)
w(B.c6E,A.bQ)
w(B.aIG,A.J)
w(B.aBw,A.d_)
v(A.f3,[B.aeg,B.blo])
w(B.a7k,A.L)
x(B.akE,A.hT)})()
A.bs(b.typeUniverse,JSON.parse('{"Kp":{"G":[],"e":[],"f":[]},"aeS":{"Y":["Kp"]},"aIG":{"J":[],"e":[],"f":[]},"aBw":{"d_":["dh"],"aS":[]}}'))
var y={z:A.w("bX<Y<G>>"),B:A.w("M5"),l:A.w("Fx"),g:A.w("ag"),A:A.w("bE<M>"),f:A.w("bE<S>")};(function constants(){D.PM=new A.b7(C.lV,20,C.t,null,null,null)
D.crH=new B.blo(3,"free")
D.tS=new B.aeg(0,"pan")
D.A9=new B.aeg(1,"scale")
D.co3=new B.aeg(2,"rotate")})()};
(a=>{a["DlSre+76zEqFExkMW6BBwybhmaA="]=a.current})($__dart_deferred_initializers__);