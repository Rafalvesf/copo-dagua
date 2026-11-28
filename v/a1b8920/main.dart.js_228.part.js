((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cWo(d,e,f,g){return new B.Kj(d,e,f,g,null)},
bcG(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.az(0,e)
w=f.az(0,e)
return e.am(0,w.rf(A.ai(x.MW(w)/t,0,1)))},
dsx(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.az(0,q),o=e.b,n=o.az(0,q),m=e.d,l=m.az(0,q),k=p.MW(n),j=n.MW(n),i=p.MW(l),h=l.MW(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bcG(d,q,o),B.bcG(d,o,x),B.bcG(d,x,m),B.bcG(d,m,q)]
v=A.dq()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bg()},
dz8(){var x=A.fW()
return new B.aB_(x,$.aa())},
dcI(d,e,f){return Math.log(f/d)/Math.log(e/100)},
de4(d,e){var x,w,v,u,t,s,r=new A.dl(new Float64Array(16))
r.c9(d)
r.la(r)
x=e.a
w=e.b
v=new A.es(new Float64Array(3))
v.h8(x,w,0)
v=r.mP(v)
u=e.c
t=new A.es(new Float64Array(3))
t.h8(u,w,0)
t=r.mP(t)
w=e.d
s=new A.es(new Float64Array(3))
s.h8(u,w,0)
s=r.mP(s)
u=new A.es(new Float64Array(3))
u.h8(x,w,0)
u=r.mP(u)
x=new A.es(new Float64Array(3))
x.c9(v)
w=new A.es(new Float64Array(3))
w.c9(t)
v=new A.es(new Float64Array(3))
v.c9(s)
t=new A.es(new Float64Array(3))
t.c9(u)
return new B.a72(x,w,v,t)},
dcy(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.T,w=0;w<4;++w){v=r[w]
u=B.dsx(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.L(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.L(x.a,t)}return B.cZD(x)},
cZD(d){return new A.L(A.iO(C.k.a9(d.a,9)),A.iO(C.k.a9(d.b,9)))},
dFD(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bF:C.av},
Kj:function Kj(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
aet:function aet(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.er$=f
_.bG$=g
_.c=_.a=null},
c5O:function c5O(){},
aI2:function aI2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aB_:function aB_(d,e){var _=this
_.a=d
_.W$=0
_.Y$=e
_.aI$=_.bu$=0},
adU:function adU(d,e){this.a=d
this.b=e},
bkJ:function bkJ(d,e){this.a=d
this.b=e},
ak7:function ak7(){},
a72:function a72(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[177],B)
D=c[433]
B.Kj.prototype={
R(){var x=null,w=y.z
return new B.aet(new A.bY(x,w),new A.bY(x,w),x,x)}}
B.aet.prototype={
ge0(){var x=this.d
if(x===$){this.a.toString
x=B.dz8()
this.d=x}return x},
gQI(){var x,w=$.aA.a7$.x.h(0,this.e).gaO()
w.toString
x=y.g.a(w).gN(0)
return this.a.f.Ny(new A.ad(0,0,0+x.a,0+x.b))},
gVu(){var x=$.aA.a7$.x.h(0,this.f).gaO()
x.toString
x=y.g.a(x).gN(0)
return new A.ad(0,0,0+x.a,0+x.b)},
DP(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.T)){x=new A.dl(new Float64Array(16))
x.c9(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dl(new Float64Array(16))
w.c9(a0)
w.eb(a1.a,a1.b,0,1)
v=B.de4(w,d.gVu())
if(d.gQI().gaAv(0))return w
x=d.gQI()
u=d.ay
t=A.fW()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.eb(q/2,o/2,0,1)
t.tO(u)
t.eb(-q/2,-o/2,0,1)
u=new A.es(new Float64Array(3))
u.h8(r,x,0)
u=t.mP(u)
q=new A.es(new Float64Array(3))
q.h8(s,x,0)
q=t.mP(q)
x=new A.es(new Float64Array(3))
x.h8(s,p,0)
x=t.mP(x)
s=new A.es(new Float64Array(3))
s.h8(r,p,0)
s=t.mP(s)
r=new Float64Array(3)
new A.es(r).c9(u)
u=new Float64Array(3)
new A.es(u).c9(q)
q=new Float64Array(3)
new A.es(q).c9(x)
x=new Float64Array(3)
new A.es(x).c9(s)
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
x=new A.es(new Float64Array(3))
x.h8(m,l,0)
u=new A.es(new Float64Array(3))
u.h8(k,l,0)
s=new A.es(new Float64Array(3))
s.h8(k,j,0)
r=new A.es(new Float64Array(3))
r.h8(m,j,0)
q=new A.es(new Float64Array(3))
q.c9(x)
x=new A.es(new Float64Array(3))
x.c9(u)
u=new A.es(new Float64Array(3))
u.c9(s)
s=new A.es(new Float64Array(3))
s.c9(r)
i=new B.a72(q,x,u,s)
h=B.dcy(i,v)
if(h.l(0,C.T))return w
x=w.a02().a
u=x[0]
x=x[1]
g=a0.Co()
u-=h.a*g
x-=h.b*g
f=new A.dl(new Float64Array(16))
f.c9(a0)
s=new A.es(new Float64Array(3))
s.h8(u,x,0)
f.af6(s)
e=B.dcy(i,B.de4(f,d.gVu()))
if(e.l(0,C.T))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.dl(new Float64Array(16))
x.c9(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.dl(new Float64Array(16))
s.c9(a0)
r=new A.es(new Float64Array(3))
r.h8(u,x,0)
s.af6(r)
return s},
a4N(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dl(new Float64Array(16))
x.c9(d)
return x}w=q.ge0().a.Co()
x=q.gVu()
v=q.gQI()
u=q.gVu()
t=q.gQI()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ai(s,t.ax,t.at)/w
x=new A.dl(new Float64Array(16))
x.c9(d)
x.mU(r,r,r,1)
return x},
b86(d,e,f){var x,w,v,u
if(e===0){x=new A.dl(new Float64Array(16))
x.c9(d)
return x}w=this.ge0().nx(f)
x=new A.dl(new Float64Array(16))
x.c9(d)
v=w.a
u=w.b
x.eb(v,u,0,1)
x.tO(-e)
x.eb(-v,-u,0,1)
return x},
RX(d){var x
A:{x=!0
if(D.cm0===d){x=!1
break A}if(D.zP===d){this.a.toString
break A}if(D.tB===d||d==null){this.a.toString
break A}x=null}return x},
alN(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zP
else return D.tB},
b9N(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d3(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a_(0,v.gSp())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d3(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a_(0,v.gSv())
v.w=null}v.Q=v.ch=null
v.at=v.ge0().a.Co()
v.as=v.ge0().nx(d.b)
v.ax=v.ay},
b9P(d){var x,w,v,u,t,s,r=this,q=r.ge0().a.Co(),p=r.x=d.c,o=r.ge0().nx(p),n=r.ch
if(n===D.tB)n=r.ch=r.alN(d)
else if(n==null){n=r.alN(d)
r.ch=n}if(!r.RX(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.ge0().sv(0,r.a4N(r.ge0().a,n*d.d/q))
x=r.ge0().nx(p)
n=r.ge0()
w=r.ge0().a
v=r.as
v.toString
n.sv(0,r.DP(w,x.az(0,v)))
u=r.ge0().nx(p)
p=r.as
p.toString
if(!B.cZD(p).l(0,B.cZD(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.ge0().sv(0,r.b86(r.ge0().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dFD(n,o)}n=r.as
n.toString
s=o.az(0,n)
r.ge0().sv(0,r.DP(r.ge0().a,s))
r.as=r.ge0().nx(p)
break}r.a.toString},
b9L(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a_(0,l.gSp())
x=l.w
if(x!=null)x.a.a_(0,l.gSv())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.RX(x)){l.Q=null
return}A:{if(D.tB===x){x=d.a.a
if(x.gex()<50){l.Q=null
return}w=l.ge0().a.a02().a
v=w[0]
w=w[1]
l.a.toString
u=A.ard(0.0000135,v,x.a,0,C.fH)
l.a.toString
t=A.ard(0.0000135,w,x.b,0,C.fH)
x=x.gex()
l.a.toString
s=B.dcI(x,0.0000135,10)
x=u.gFM()
r=t.gFM()
q=y.A
p=q.i("ho<by.T>")
o=l.y
l.r=new A.bq(o,new A.ho(new A.l9(C.lk),new A.bG(new A.L(v,w),new A.L(x,r),q),p),p.i("bq<by.T>"))
o.e=A.ec(0,0,0,C.k.aL(s*1000),0,0)
o.an(0,l.gSp())
l.y.ct(0)
break A}if(D.zP===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.ge0().a.Co()
l.a.toString
m=A.ard(0.0026999999999999997,n,x/10,0,C.fH)
l.a.toString
s=B.dcI(w,0.0000135,0.1)
x=m.iB(0,s)
w=y.f
v=w.i("ho<by.T>")
r=l.z
l.w=new A.bq(r,new A.ho(new A.l9(C.lk),new A.bG(n,x,w),v),v.i("bq<by.T>"))
r.e=A.ec(0,0,0,C.k.aL(s*1000),0,0)
r.an(0,l.gSv())
l.z.ct(0)
break A}break A}},
b6t(d){var x,w,v,u,t,s,r,q=this,p=d.gh4(),o=d.gbA(d)
if(y.l.b(d)){x=d.ge2(d)===C.f0
if(x)q.a.toString
if(x){q.a.toString
x=o.am(0,d.gu5())
w=d.gu5()
v=A.LT(d.gdX(d),null,w,x)
if(!q.RX(D.tB)){q.a.toString
return}u=q.ge0().nx(p)
t=q.ge0().nx(p.az(0,v))
q.ge0().sv(0,q.DP(q.ge0().a,t.az(0,u)))
q.a.toString
return}if(d.gu5().b===0)return
x=d.gu5()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gk8(d)
else return
q.a.toString
if(!q.RX(D.zP))return
u=q.ge0().nx(p)
q.ge0().sv(0,q.a4N(q.ge0().a,s))
r=q.ge0().nx(p)
q.ge0().sv(0,q.DP(q.ge0().a,r.az(0,u)))
q.a.toString},
b32(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a_(0,r.gSp())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.ge0().a.a02().a
x=q[0]
q=q[1]
w=r.ge0()
v=r.ge0().a
u=r.ge0()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DP(v,u.nx(s.aM(0,t.gv(t))).az(0,r.ge0().nx(new A.L(x,q)))))},
b4w(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a_(0,s.gSv())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aM(0,r.gv(r))
r=s.ge0().a.Co()
x=s.ge0()
v=s.x
v===$&&A.b()
u=x.nx(v)
s.ge0().sv(0,s.a4N(s.ge0().a,w/r))
t=s.ge0().nx(s.x)
s.ge0().sv(0,s.DP(s.ge0().a,t.az(0,u)))},
b5C(){this.p(new B.c5O())},
ac(){var x=this,w=null
x.ap()
x.y=A.cI(w,w,w,1,w,x)
x.z=A.cI(w,w,w,1,w,x)
x.ge0().an(0,x.ganl())},
bh(d){this.bB(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.ge0().a_(0,x.ganl())
x.a.toString
w=x.ge0()
w.Y$=$.aa()
w.W$=0
x.aPy()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.ge0().a
w=u.a.w
v=new B.aI2(w,u.e,C.y,!0,x,t,t)
return A.Ez(C.fW,A.cP(C.bw,v,C.W,!1,t,t,t,t,t,t,t,t,t,t,u.gb9K(),u.gb9M(),u.gb9O(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.L(0,-0.005)),u.f,t,t,t,u.gb6s(),t)}}
B.aI2.prototype={
u(d){var x=this,w=A.Nt(x.w,new A.hg(x.c,x.d),null,x.r,!0)
return A.wY(w,x.e,null)}}
B.aB_.prototype={
nx(d){var x=this.a,w=new A.dl(new Float64Array(16))
if(w.la(x)===0)A.al(A.h0(x,"other","Matrix cannot be inverted"))
x=new A.es(new Float64Array(3))
x.h8(d.a,d.b,0)
x=w.mP(x).a
return new A.L(x[0],x[1])}}
B.adU.prototype={
I(){return"_GestureType."+this.b}}
B.bkJ.prototype={
I(){return"PanAxis."+this.b}}
B.ak7.prototype={
bW(){this.cG()
this.d4()
this.fX()},
m(){var x=this,w=x.bG$
if(w!=null)w.a_(0,x.gfI())
x.bG$=null
x.a6()}}
B.a72.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a72&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.as(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a8f)","~(a8g)","~(Vc)","~(mk)"])
B.c5O.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ak7.prototype
x.aPy=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aet.prototype,"gb9M","b9N",1)
x(v,"gb9O","b9P",2)
x(v,"gb9K","b9L",3)
x(v,"gb6s","b6t",4)
w(v,"gSp","b32",0)
w(v,"gSv","b4w",0)
w(v,"ganl","b5C",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Kj,A.G)
w(B.ak7,A.Y)
w(B.aet,B.ak7)
w(B.c5O,A.bO)
w(B.aI2,A.M)
w(B.aB_,A.d_)
v(A.eX,[B.adU,B.bkJ])
w(B.a72,A.J)
x(B.ak7,A.hR)})()
A.bt(b.typeUniverse,JSON.parse('{"Kj":{"G":[],"e":[],"f":[]},"aet":{"Y":["Kj"]},"aI2":{"M":[],"e":[],"f":[]},"aB_":{"d_":["dl"],"aU":[]}}'))
var y={z:A.w("bY<Y<G>>"),B:A.w("LX"),l:A.w("Fs"),g:A.w("ah"),A:A.w("bG<L>"),f:A.w("bG<S>")};(function constants(){D.Pa=new A.b7(C.lE,20,C.t,null,null,null)
D.cpD=new B.bkJ(3,"free")
D.tB=new B.adU(0,"pan")
D.zP=new B.adU(1,"scale")
D.cm0=new B.adU(2,"rotate")})()};
(a=>{a["Wq/WJGt/FC+x/2GSXXfc45IzwM0="]=a.current})($__dart_deferred_initializers__);