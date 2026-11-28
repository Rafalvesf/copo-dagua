((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cX4(d,e,f,g){return new B.Kj(d,e,f,g,null)},
bcQ(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.az(0,e)
w=f.az(0,e)
return e.am(0,w.rg(A.ai(x.N_(w)/t,0,1)))},
dtj(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.az(0,q),o=e.b,n=o.az(0,q),m=e.d,l=m.az(0,q),k=p.N_(n),j=n.N_(n),i=p.N_(l),h=l.N_(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bcQ(d,q,o),B.bcQ(d,o,x),B.bcQ(d,x,m),B.bcQ(d,m,q)]
v=A.dq()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bg()},
dzW(){var x=A.fW()
return new B.aBb(x,$.aa())},
dds(d,e,f){return Math.log(f/d)/Math.log(e/100)},
deO(d,e){var x,w,v,u,t,s,r=new A.dl(new Float64Array(16))
r.c9(d)
r.la(r)
x=e.a
w=e.b
v=new A.et(new Float64Array(3))
v.h8(x,w,0)
v=r.mP(v)
u=e.c
t=new A.et(new Float64Array(3))
t.h8(u,w,0)
t=r.mP(t)
w=e.d
s=new A.et(new Float64Array(3))
s.h8(u,w,0)
s=r.mP(s)
u=new A.et(new Float64Array(3))
u.h8(x,w,0)
u=r.mP(u)
x=new A.et(new Float64Array(3))
x.c9(v)
w=new A.et(new Float64Array(3))
w.c9(t)
v=new A.et(new Float64Array(3))
v.c9(s)
t=new A.et(new Float64Array(3))
t.c9(u)
return new B.a77(x,w,v,t)},
ddi(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.T,w=0;w<4;++w){v=r[w]
u=B.dtj(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.L(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.L(x.a,t)}return B.d_m(x)},
d_m(d){return new A.L(A.iP(C.k.a9(d.a,9)),A.iP(C.k.a9(d.b,9)))},
dGq(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bF:C.av},
Kj:function Kj(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
aey:function aey(d,e,f,g){var _=this
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
c68:function c68(){},
aIe:function aIe(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBb:function aBb(d,e){var _=this
_.a=d
_.W$=0
_.Y$=e
_.aI$=_.bu$=0},
adZ:function adZ(d,e){this.a=d
this.b=e},
bl4:function bl4(d,e){this.a=d
this.b=e},
akf:function akf(){},
a77:function a77(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[177],B)
D=c[432]
B.Kj.prototype={
R(){var x=null,w=y.z
return new B.aey(new A.c_(x,w),new A.c_(x,w),x,x)}}
B.aey.prototype={
ge0(){var x=this.d
if(x===$){this.a.toString
x=B.dzW()
this.d=x}return x},
gQM(){var x,w=$.aA.a7$.x.h(0,this.e).gaO()
w.toString
x=y.g.a(w).gN(0)
return this.a.f.NC(new A.ae(0,0,0+x.a,0+x.b))},
gVz(){var x=$.aA.a7$.x.h(0,this.f).gaO()
x.toString
x=y.g.a(x).gN(0)
return new A.ae(0,0,0+x.a,0+x.b)},
DP(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.T)){x=new A.dl(new Float64Array(16))
x.c9(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dl(new Float64Array(16))
w.c9(a0)
w.eb(a1.a,a1.b,0,1)
v=B.deO(w,d.gVz())
if(d.gQM().gaAE(0))return w
x=d.gQM()
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
u=new A.et(new Float64Array(3))
u.h8(r,x,0)
u=t.mP(u)
q=new A.et(new Float64Array(3))
q.h8(s,x,0)
q=t.mP(q)
x=new A.et(new Float64Array(3))
x.h8(s,p,0)
x=t.mP(x)
s=new A.et(new Float64Array(3))
s.h8(r,p,0)
s=t.mP(s)
r=new Float64Array(3)
new A.et(r).c9(u)
u=new Float64Array(3)
new A.et(u).c9(q)
q=new Float64Array(3)
new A.et(q).c9(x)
x=new Float64Array(3)
new A.et(x).c9(s)
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
x=new A.et(new Float64Array(3))
x.h8(m,l,0)
u=new A.et(new Float64Array(3))
u.h8(k,l,0)
s=new A.et(new Float64Array(3))
s.h8(k,j,0)
r=new A.et(new Float64Array(3))
r.h8(m,j,0)
q=new A.et(new Float64Array(3))
q.c9(x)
x=new A.et(new Float64Array(3))
x.c9(u)
u=new A.et(new Float64Array(3))
u.c9(s)
s=new A.et(new Float64Array(3))
s.c9(r)
i=new B.a77(q,x,u,s)
h=B.ddi(i,v)
if(h.l(0,C.T))return w
x=w.a07().a
u=x[0]
x=x[1]
g=a0.Co()
u-=h.a*g
x-=h.b*g
f=new A.dl(new Float64Array(16))
f.c9(a0)
s=new A.et(new Float64Array(3))
s.h8(u,x,0)
f.afe(s)
e=B.ddi(i,B.deO(f,d.gVz()))
if(e.l(0,C.T))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.dl(new Float64Array(16))
x.c9(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.dl(new Float64Array(16))
s.c9(a0)
r=new A.et(new Float64Array(3))
r.h8(u,x,0)
s.afe(r)
return s},
a4S(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dl(new Float64Array(16))
x.c9(d)
return x}w=q.ge0().a.Co()
x=q.gVz()
v=q.gQM()
u=q.gVz()
t=q.gQM()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ai(s,t.ax,t.at)/w
x=new A.dl(new Float64Array(16))
x.c9(d)
x.mU(r,r,r,1)
return x},
b8i(d,e,f){var x,w,v,u
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
S0(d){var x
A:{x=!0
if(D.cmm===d){x=!1
break A}if(D.zW===d){this.a.toString
break A}if(D.tC===d||d==null){this.a.toString
break A}x=null}return x},
alX(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zW
else return D.tC},
b9Z(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d3(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a0(0,v.gSt())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d3(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a0(0,v.gSz())
v.w=null}v.Q=v.ch=null
v.at=v.ge0().a.Co()
v.as=v.ge0().nx(d.b)
v.ax=v.ay},
ba0(d){var x,w,v,u,t,s,r=this,q=r.ge0().a.Co(),p=r.x=d.c,o=r.ge0().nx(p),n=r.ch
if(n===D.tC)n=r.ch=r.alX(d)
else if(n==null){n=r.alX(d)
r.ch=n}if(!r.S0(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.ge0().sv(0,r.a4S(r.ge0().a,n*d.d/q))
x=r.ge0().nx(p)
n=r.ge0()
w=r.ge0().a
v=r.as
v.toString
n.sv(0,r.DP(w,x.az(0,v)))
u=r.ge0().nx(p)
p=r.as
p.toString
if(!B.d_m(p).l(0,B.d_m(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.ge0().sv(0,r.b8i(r.ge0().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dGq(n,o)}n=r.as
n.toString
s=o.az(0,n)
r.ge0().sv(0,r.DP(r.ge0().a,s))
r.as=r.ge0().nx(p)
break}r.a.toString},
b9X(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a0(0,l.gSt())
x=l.w
if(x!=null)x.a.a0(0,l.gSz())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.S0(x)){l.Q=null
return}A:{if(D.tC===x){x=d.a.a
if(x.gex()<50){l.Q=null
return}w=l.ge0().a.a07().a
v=w[0]
w=w[1]
l.a.toString
u=A.arm(0.0000135,v,x.a,0,C.fK)
l.a.toString
t=A.arm(0.0000135,w,x.b,0,C.fK)
x=x.gex()
l.a.toString
s=B.dds(x,0.0000135,10)
x=u.gFM()
r=t.gFM()
q=y.A
p=q.i("hp<bz.T>")
o=l.y
l.r=new A.bq(o,new A.hp(new A.la(C.ll),new A.bG(new A.L(v,w),new A.L(x,r),q),p),p.i("bq<bz.T>"))
o.e=A.ed(0,0,0,C.k.aL(s*1000),0,0)
o.an(0,l.gSt())
l.y.cu(0)
break A}if(D.zW===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.ge0().a.Co()
l.a.toString
m=A.arm(0.0026999999999999997,n,x/10,0,C.fK)
l.a.toString
s=B.dds(w,0.0000135,0.1)
x=m.iB(0,s)
w=y.f
v=w.i("hp<bz.T>")
r=l.z
l.w=new A.bq(r,new A.hp(new A.la(C.ll),new A.bG(n,x,w),v),v.i("bq<bz.T>"))
r.e=A.ed(0,0,0,C.k.aL(s*1000),0,0)
r.an(0,l.gSz())
l.z.cu(0)
break A}break A}},
b6F(d){var x,w,v,u,t,s,r,q=this,p=d.gh4(),o=d.gbA(d)
if(y.l.b(d)){x=d.ge2(d)===C.f1
if(x)q.a.toString
if(x){q.a.toString
x=o.am(0,d.gu5())
w=d.gu5()
v=A.LV(d.gdY(d),null,w,x)
if(!q.S0(D.tC)){q.a.toString
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
if(!q.S0(D.zW))return
u=q.ge0().nx(p)
q.ge0().sv(0,q.a4S(q.ge0().a,s))
r=q.ge0().nx(p)
q.ge0().sv(0,q.DP(q.ge0().a,r.az(0,u)))
q.a.toString},
b3e(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a0(0,r.gSt())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.ge0().a.a07().a
x=q[0]
q=q[1]
w=r.ge0()
v=r.ge0().a
u=r.ge0()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DP(v,u.nx(s.aM(0,t.gv(t))).az(0,r.ge0().nx(new A.L(x,q)))))},
b4I(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a0(0,s.gSz())
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
s.ge0().sv(0,s.a4S(s.ge0().a,w/r))
t=s.ge0().nx(s.x)
s.ge0().sv(0,s.DP(s.ge0().a,t.az(0,u)))},
b5O(){this.p(new B.c68())},
ac(){var x=this,w=null
x.ap()
x.y=A.cJ(w,w,w,1,w,x)
x.z=A.cJ(w,w,w,1,w,x)
x.ge0().an(0,x.ganv())},
bh(d){this.bB(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.ge0().a0(0,x.ganv())
x.a.toString
w=x.ge0()
w.Y$=$.aa()
w.W$=0
x.aPK()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.ge0().a
w=u.a.w
v=new B.aIe(w,u.e,C.y,!0,x,t,t)
return A.EA(C.fZ,A.cy(C.br,v,C.U,!1,t,t,t,t,t,t,t,t,t,t,u.gb9W(),u.gb9Y(),u.gba_(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.L(0,-0.005)),u.f,t,t,t,u.gb6E(),t)}}
B.aIe.prototype={
u(d){var x=this,w=A.Nv(x.w,new A.hh(x.c,x.d),null,x.r,!0)
return A.wZ(w,x.e,null)}}
B.aBb.prototype={
nx(d){var x=this.a,w=new A.dl(new Float64Array(16))
if(w.la(x)===0)A.al(A.h0(x,"other","Matrix cannot be inverted"))
x=new A.et(new Float64Array(3))
x.h8(d.a,d.b,0)
x=w.mP(x).a
return new A.L(x[0],x[1])}}
B.adZ.prototype={
I(){return"_GestureType."+this.b}}
B.bl4.prototype={
I(){return"PanAxis."+this.b}}
B.akf.prototype={
bW(){this.cG()
this.d4()
this.fY()},
m(){var x=this,w=x.bG$
if(w!=null)w.a0(0,x.gfI())
x.bG$=null
x.a6()}}
B.a77.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a77&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.as(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a8k)","~(a8l)","~(Vf)","~(mk)"])
B.c68.prototype={
$0(){},
$S:0};(function aliases(){var x=B.akf.prototype
x.aPK=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aey.prototype,"gb9Y","b9Z",1)
x(v,"gba_","ba0",2)
x(v,"gb9W","b9X",3)
x(v,"gb6E","b6F",4)
w(v,"gSt","b3e",0)
w(v,"gSz","b4I",0)
w(v,"ganv","b5O",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Kj,A.G)
w(B.akf,A.Y)
w(B.aey,B.akf)
w(B.c68,A.bQ)
w(B.aIe,A.M)
w(B.aBb,A.d0)
v(A.f_,[B.adZ,B.bl4])
w(B.a77,A.K)
x(B.akf,A.hT)})()
A.bu(b.typeUniverse,JSON.parse('{"Kj":{"G":[],"e":[],"f":[]},"aey":{"Y":["Kj"]},"aIe":{"M":[],"e":[],"f":[]},"aBb":{"d0":["dl"],"aU":[]}}'))
var y={z:A.x("c_<Y<G>>"),B:A.x("LZ"),l:A.x("Fs"),g:A.x("ah"),A:A.x("bG<L>"),f:A.x("bG<T>")};(function constants(){D.Pg=new A.b8(C.lF,20,C.t,null,null,null)
D.cpY=new B.bl4(3,"free")
D.tC=new B.adZ(0,"pan")
D.zW=new B.adZ(1,"scale")
D.cmm=new B.adZ(2,"rotate")})()};
(a=>{a["C8Cynfb6XVmq3E3sKLCr70on540="]=a.current})($__dart_deferred_initializers__);