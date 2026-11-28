((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cVF(d,e,f,g){return new B.Kf(d,e,f,g,null)},
bcD(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.az(0,e)
w=f.az(0,e)
return e.al(0,w.rf(A.ai(x.MV(w)/t,0,1)))},
drJ(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.az(0,q),o=e.b,n=o.az(0,q),m=e.d,l=m.az(0,q),k=p.MV(n),j=n.MV(n),i=p.MV(l),h=l.MV(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bcD(d,q,o),B.bcD(d,o,x),B.bcD(d,x,m),B.bcD(d,m,q)]
v=A.dn()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bg()},
dyk(){var x=A.fV()
return new B.aAW(x,$.aa())},
dbY(d,e,f){return Math.log(f/d)/Math.log(e/100)},
ddk(d,e){var x,w,v,u,t,s,r=new A.dj(new Float64Array(16))
r.ca(d)
r.la(r)
x=e.a
w=e.b
v=new A.es(new Float64Array(3))
v.h9(x,w,0)
v=r.mP(v)
u=e.c
t=new A.es(new Float64Array(3))
t.h9(u,w,0)
t=r.mP(t)
w=e.d
s=new A.es(new Float64Array(3))
s.h9(u,w,0)
s=r.mP(s)
u=new A.es(new Float64Array(3))
u.h9(x,w,0)
u=r.mP(u)
x=new A.es(new Float64Array(3))
x.ca(v)
w=new A.es(new Float64Array(3))
w.ca(t)
v=new A.es(new Float64Array(3))
v.ca(s)
t=new A.es(new Float64Array(3))
t.ca(u)
return new B.a73(x,w,v,t)},
dbO(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.T,w=0;w<4;++w){v=r[w]
u=B.drJ(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.M(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.M(x.a,t)}return B.cYW(x)},
cYW(d){return new A.M(A.iN(C.k.a9(d.a,9)),A.iN(C.k.a9(d.b,9)))},
dEP(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bx:C.a1},
Kf:function Kf(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
aev:function aev(d,e,f,g){var _=this
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
c5s:function c5s(){},
aI_:function aI_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAW:function aAW(d,e){var _=this
_.a=d
_.W$=0
_.Y$=e
_.aI$=_.bu$=0},
adW:function adW(d,e){this.a=d
this.b=e},
bkH:function bkH(d,e){this.a=d
this.b=e},
ak9:function ak9(){},
a73:function a73(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[182],B)
D=c[437]
B.Kf.prototype={
R(){var x=null,w=y.z
return new B.aev(new A.bY(x,w),new A.bY(x,w),x,x)}}
B.aev.prototype={
gdZ(){var x=this.d
if(x===$){this.a.toString
x=B.dyk()
this.d=x}return x},
gQG(){var x,w=$.aA.a7$.x.h(0,this.e).gaO()
w.toString
x=y.g.a(w).gN(0)
return this.a.f.Nx(new A.ad(0,0,0+x.a,0+x.b))},
gVr(){var x=$.aA.a7$.x.h(0,this.f).gaO()
x.toString
x=y.g.a(x).gN(0)
return new A.ad(0,0,0+x.a,0+x.b)},
DM(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.T)){x=new A.dj(new Float64Array(16))
x.ca(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dj(new Float64Array(16))
w.ca(a0)
w.eb(a1.a,a1.b,0,1)
v=B.ddk(w,d.gVr())
if(d.gQG().gaAu(0))return w
x=d.gQG()
u=d.ay
t=A.fV()
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
u.h9(r,x,0)
u=t.mP(u)
q=new A.es(new Float64Array(3))
q.h9(s,x,0)
q=t.mP(q)
x=new A.es(new Float64Array(3))
x.h9(s,p,0)
x=t.mP(x)
s=new A.es(new Float64Array(3))
s.h9(r,p,0)
s=t.mP(s)
r=new Float64Array(3)
new A.es(r).ca(u)
u=new Float64Array(3)
new A.es(u).ca(q)
q=new Float64Array(3)
new A.es(q).ca(x)
x=new Float64Array(3)
new A.es(x).ca(s)
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
x.h9(m,l,0)
u=new A.es(new Float64Array(3))
u.h9(k,l,0)
s=new A.es(new Float64Array(3))
s.h9(k,j,0)
r=new A.es(new Float64Array(3))
r.h9(m,j,0)
q=new A.es(new Float64Array(3))
q.ca(x)
x=new A.es(new Float64Array(3))
x.ca(u)
u=new A.es(new Float64Array(3))
u.ca(s)
s=new A.es(new Float64Array(3))
s.ca(r)
i=new B.a73(q,x,u,s)
h=B.dbO(i,v)
if(h.l(0,C.T))return w
x=w.a0_().a
u=x[0]
x=x[1]
g=a0.Cm()
u-=h.a*g
x-=h.b*g
f=new A.dj(new Float64Array(16))
f.ca(a0)
s=new A.es(new Float64Array(3))
s.h9(u,x,0)
f.af3(s)
e=B.dbO(i,B.ddk(f,d.gVr()))
if(e.l(0,C.T))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.dj(new Float64Array(16))
x.ca(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.dj(new Float64Array(16))
s.ca(a0)
r=new A.es(new Float64Array(3))
r.h9(u,x,0)
s.af3(r)
return s},
a4J(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dj(new Float64Array(16))
x.ca(d)
return x}w=q.gdZ().a.Cm()
x=q.gVr()
v=q.gQG()
u=q.gVr()
t=q.gQG()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ai(s,t.ax,t.at)/w
x=new A.dj(new Float64Array(16))
x.ca(d)
x.mU(r,r,r,1)
return x},
b8_(d,e,f){var x,w,v,u
if(e===0){x=new A.dj(new Float64Array(16))
x.ca(d)
return x}w=this.gdZ().nx(f)
x=new A.dj(new Float64Array(16))
x.ca(d)
v=w.a
u=w.b
x.eb(v,u,0,1)
x.tO(-e)
x.eb(-v,-u,0,1)
return x},
RV(d){var x
A:{x=!0
if(D.cmx===d){x=!1
break A}if(D.zS===d){this.a.toString
break A}if(D.tB===d||d==null){this.a.toString
break A}x=null}return x},
alL(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zS
else return D.tB},
b9G(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d2(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a_(0,v.gSn())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d2(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a_(0,v.gSt())
v.w=null}v.Q=v.ch=null
v.at=v.gdZ().a.Cm()
v.as=v.gdZ().nx(d.b)
v.ax=v.ay},
b9I(d){var x,w,v,u,t,s,r=this,q=r.gdZ().a.Cm(),p=r.x=d.c,o=r.gdZ().nx(p),n=r.ch
if(n===D.tB)n=r.ch=r.alL(d)
else if(n==null){n=r.alL(d)
r.ch=n}if(!r.RV(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdZ().sv(0,r.a4J(r.gdZ().a,n*d.d/q))
x=r.gdZ().nx(p)
n=r.gdZ()
w=r.gdZ().a
v=r.as
v.toString
n.sv(0,r.DM(w,x.az(0,v)))
u=r.gdZ().nx(p)
p=r.as
p.toString
if(!B.cYW(p).l(0,B.cYW(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdZ().sv(0,r.b8_(r.gdZ().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dEP(n,o)}n=r.as
n.toString
s=o.az(0,n)
r.gdZ().sv(0,r.DM(r.gdZ().a,s))
r.as=r.gdZ().nx(p)
break}r.a.toString},
b9E(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a_(0,l.gSn())
x=l.w
if(x!=null)x.a.a_(0,l.gSt())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.RV(x)){l.Q=null
return}A:{if(D.tB===x){x=d.a.a
if(x.gex()<50){l.Q=null
return}w=l.gdZ().a.a0_().a
v=w[0]
w=w[1]
l.a.toString
u=A.ard(0.0000135,v,x.a,0,C.fH)
l.a.toString
t=A.ard(0.0000135,w,x.b,0,C.fH)
x=x.gex()
l.a.toString
s=B.dbY(x,0.0000135,10)
x=u.gFJ()
r=t.gFJ()
q=y.A
p=q.i("hn<by.T>")
o=l.y
l.r=new A.br(o,new A.hn(new A.l8(C.ll),new A.bG(new A.M(v,w),new A.M(x,r),q),p),p.i("br<by.T>"))
o.e=A.ec(0,0,0,C.k.aM(s*1000),0,0)
o.am(0,l.gSn())
l.y.cs(0)
break A}if(D.zS===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdZ().a.Cm()
l.a.toString
m=A.ard(0.0026999999999999997,n,x/10,0,C.fH)
l.a.toString
s=B.dbY(w,0.0000135,0.1)
x=m.iB(0,s)
w=y.f
v=w.i("hn<by.T>")
r=l.z
l.w=new A.br(r,new A.hn(new A.l8(C.ll),new A.bG(n,x,w),v),v.i("br<by.T>"))
r.e=A.ec(0,0,0,C.k.aM(s*1000),0,0)
r.am(0,l.gSt())
l.z.cs(0)
break A}break A}},
b6m(d){var x,w,v,u,t,s,r,q=this,p=d.gh5(),o=d.gbA(d)
if(y.l.b(d)){x=d.ge0(d)===C.f_
if(x)q.a.toString
if(x){q.a.toString
x=o.al(0,d.gu5())
w=d.gu5()
v=A.LQ(d.gdW(d),null,w,x)
if(!q.RV(D.tB)){q.a.toString
return}u=q.gdZ().nx(p)
t=q.gdZ().nx(p.az(0,v))
q.gdZ().sv(0,q.DM(q.gdZ().a,t.az(0,u)))
q.a.toString
return}if(d.gu5().b===0)return
x=d.gu5()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gk8(d)
else return
q.a.toString
if(!q.RV(D.zS))return
u=q.gdZ().nx(p)
q.gdZ().sv(0,q.a4J(q.gdZ().a,s))
r=q.gdZ().nx(p)
q.gdZ().sv(0,q.DM(q.gdZ().a,r.az(0,u)))
q.a.toString},
b2W(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a_(0,r.gSn())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdZ().a.a0_().a
x=q[0]
q=q[1]
w=r.gdZ()
v=r.gdZ().a
u=r.gdZ()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DM(v,u.nx(s.aL(0,t.gv(t))).az(0,r.gdZ().nx(new A.M(x,q)))))},
b4p(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a_(0,s.gSt())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aL(0,r.gv(r))
r=s.gdZ().a.Cm()
x=s.gdZ()
v=s.x
v===$&&A.b()
u=x.nx(v)
s.gdZ().sv(0,s.a4J(s.gdZ().a,w/r))
t=s.gdZ().nx(s.x)
s.gdZ().sv(0,s.DM(s.gdZ().a,t.az(0,u)))},
b5v(){this.p(new B.c5s())},
ac(){var x=this,w=null
x.ao()
x.y=A.cH(w,w,w,1,w,x)
x.z=A.cH(w,w,w,1,w,x)
x.gdZ().am(0,x.ganj())},
bh(d){this.bB(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdZ().a_(0,x.ganj())
x.a.toString
w=x.gdZ()
w.Y$=$.aa()
w.W$=0
x.aPu()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdZ().a
w=u.a.w
v=new B.aI_(w,u.e,C.y,!0,x,t,t)
return A.Ey(C.fX,A.cL(C.by,v,C.W,!1,t,t,t,t,t,t,t,t,t,t,u.gb9D(),u.gb9F(),u.gb9H(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.M(0,-0.005)),u.f,t,t,t,u.gb6l(),t)}}
B.aI_.prototype={
u(d){var x=this,w=A.Nq(x.w,new A.hg(x.c,x.d),null,x.r,!0)
return A.wX(w,x.e,null)}}
B.aAW.prototype={
nx(d){var x=this.a,w=new A.dj(new Float64Array(16))
if(w.la(x)===0)A.al(A.fZ(x,"other","Matrix cannot be inverted"))
x=new A.es(new Float64Array(3))
x.h9(d.a,d.b,0)
x=w.mP(x).a
return new A.M(x[0],x[1])}}
B.adW.prototype={
I(){return"_GestureType."+this.b}}
B.bkH.prototype={
I(){return"PanAxis."+this.b}}
B.ak9.prototype={
bW(){this.cE()
this.d3()
this.fX()},
m(){var x=this,w=x.bG$
if(w!=null)w.a_(0,x.gfJ())
x.bG$=null
x.a6()}}
B.a73.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a73&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.as(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a8h)","~(a8i)","~(Vc)","~(mi)"])
B.c5s.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ak9.prototype
x.aPu=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aev.prototype,"gb9F","b9G",1)
x(v,"gb9H","b9I",2)
x(v,"gb9D","b9E",3)
x(v,"gb6l","b6m",4)
w(v,"gSn","b2W",0)
w(v,"gSt","b4p",0)
w(v,"ganj","b5v",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Kf,A.G)
w(B.ak9,A.Y)
w(B.aev,B.ak9)
w(B.c5s,A.bP)
w(B.aI_,A.L)
w(B.aAW,A.cZ)
v(A.eW,[B.adW,B.bkH])
w(B.a73,A.J)
x(B.ak9,A.hQ)})()
A.bn(b.typeUniverse,JSON.parse('{"Kf":{"G":[],"e":[],"f":[]},"aev":{"Y":["Kf"]},"aI_":{"L":[],"e":[],"f":[]},"aAW":{"cZ":["dj"],"aU":[]}}'))
var y={z:A.w("bY<Y<G>>"),B:A.w("LU"),l:A.w("Fq"),g:A.w("ag"),A:A.w("bG<M>"),f:A.w("bG<T>")};(function constants(){D.Ph=new A.b7(C.lG,20,C.t,null,null,null)
D.cqa=new B.bkH(3,"free")
D.tB=new B.adW(0,"pan")
D.zS=new B.adW(1,"scale")
D.cmx=new B.adW(2,"rotate")})()};
(a=>{a["J30a1vYe3VezqkI+nn/DSLlOdZw="]=a.current})($__dart_deferred_initializers__);