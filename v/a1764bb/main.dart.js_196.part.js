((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cNZ(d,e,f,g){return new B.JE(d,e,f,g,null)},
b9P(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aq(0,e)
w=f.aq(0,e)
return e.ag(0,w.rk(A.ag(x.Mr(w)/t,0,1)))},
djn(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aq(0,q),o=e.b,n=o.aq(0,q),m=e.d,l=m.aq(0,q),k=p.Mr(n),j=n.Mr(n),i=p.Mr(l),h=l.Mr(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.b9P(d,q,o),B.b9P(d,o,x),B.b9P(d,x,m),B.b9P(d,m,q)]
v=A.di()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bi()},
dpI(){var x=A.hk()
return new B.ayV(x,$.ad())},
d46(d,e,f){return Math.log(f/d)/Math.log(e/100)},
d5n(d,e){var x,w,v,u,t,s,r=new A.de(new Float64Array(16))
r.cc(d)
r.l9(r)
x=e.a
w=e.b
v=new A.et(new Float64Array(3))
v.h7(x,w,0)
v=r.ns(v)
u=e.c
t=new A.et(new Float64Array(3))
t.h7(u,w,0)
t=r.ns(t)
w=e.d
s=new A.et(new Float64Array(3))
s.h7(u,w,0)
s=r.ns(s)
u=new A.et(new Float64Array(3))
u.h7(x,w,0)
u=r.ns(u)
x=new A.et(new Float64Array(3))
x.cc(v)
w=new A.et(new Float64Array(3))
w.cc(t)
v=new A.et(new Float64Array(3))
v.cc(s)
t=new A.et(new Float64Array(3))
t.cc(u)
return new B.a5G(x,w,v,t)},
d3X(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.Q,w=0;w<4;++w){v=r[w]
u=B.djn(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.H(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.H(x.a,t)}return B.cRd(x)},
cRd(d){return new A.H(A.iS(C.k.a7(d.a,9)),A.iS(C.k.a7(d.b,9)))},
dw7(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bI:C.a3},
JE:function JE(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
acZ:function acZ(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.es$=f
_.bF$=g
_.c=_.a=null},
c_M:function c_M(){},
aFW:function aFW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ayV:function ayV(d,e){var _=this
_.a=d
_.X$=0
_.Z$=e
_.aG$=_.bo$=0},
acr:function acr(d,e){this.a=d
this.b=e},
bhr:function bhr(d,e){this.a=d
this.b=e},
aiq:function aiq(){},
a5G:function a5G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[165],B)
D=c[420]
B.JE.prototype={
R(){var x=null,w=y.z
return new B.acZ(new A.bZ(x,w),new A.bZ(x,w),x,x)}}
B.acZ.prototype={
gdV(){var x=this.d
if(x===$){this.a.toString
x=B.dpI()
this.d=x}return x},
gQf(){var x,w=$.aB.ac$.x.h(0,this.e).gaN()
w.toString
x=y.g.a(w).gN(0)
return this.a.f.N6(new A.ac(0,0,0+x.a,0+x.b))},
gUB(){var x=$.aB.ac$.x.h(0,this.f).gaN()
x.toString
x=y.g.a(x).gN(0)
return new A.ac(0,0,0+x.a,0+x.b)},
Dz(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.Q)){x=new A.de(new Float64Array(16))
x.cc(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.de(new Float64Array(16))
w.cc(a0)
w.ey(a1.a,a1.b,0,1)
v=B.d5n(w,d.gUB())
if(d.gQf().gazq(0))return w
x=d.gQf()
u=d.ay
t=A.hk()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.ey(q/2,o/2,0,1)
t.tQ(u)
t.ey(-q/2,-o/2,0,1)
u=new A.et(new Float64Array(3))
u.h7(r,x,0)
u=t.ns(u)
q=new A.et(new Float64Array(3))
q.h7(s,x,0)
q=t.ns(q)
x=new A.et(new Float64Array(3))
x.h7(s,p,0)
x=t.ns(x)
s=new A.et(new Float64Array(3))
s.h7(r,p,0)
s=t.ns(s)
r=new Float64Array(3)
new A.et(r).cc(u)
u=new Float64Array(3)
new A.et(u).cc(q)
q=new Float64Array(3)
new A.et(q).cc(x)
x=new Float64Array(3)
new A.et(x).cc(s)
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
x.h7(m,l,0)
u=new A.et(new Float64Array(3))
u.h7(k,l,0)
s=new A.et(new Float64Array(3))
s.h7(k,j,0)
r=new A.et(new Float64Array(3))
r.h7(m,j,0)
q=new A.et(new Float64Array(3))
q.cc(x)
x=new A.et(new Float64Array(3))
x.cc(u)
u=new A.et(new Float64Array(3))
u.cc(s)
s=new A.et(new Float64Array(3))
s.cc(r)
i=new B.a5G(q,x,u,s)
h=B.d3X(i,v)
if(h.l(0,C.Q))return w
x=w.a_a().a
u=x[0]
x=x[1]
g=a0.Ca()
u-=h.a*g
x-=h.b*g
f=new A.de(new Float64Array(16))
f.cc(a0)
s=new A.et(new Float64Array(3))
s.h7(u,x,0)
f.ae2(s)
e=B.d3X(i,B.d5n(f,d.gUB()))
if(e.l(0,C.Q))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.de(new Float64Array(16))
x.cc(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.de(new Float64Array(16))
s.cc(a0)
r=new A.et(new Float64Array(3))
r.h7(u,x,0)
s.ae2(r)
return s},
a3T(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.de(new Float64Array(16))
x.cc(d)
return x}w=q.gdV().a.Ca()
x=q.gUB()
v=q.gQf()
u=q.gUB()
t=q.gQf()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ag(s,t.ax,t.at)/w
x=new A.de(new Float64Array(16))
x.cc(d)
x.ny(r,r,r,1)
return x},
b6w(d,e,f){var x,w,v,u
if(e===0){x=new A.de(new Float64Array(16))
x.cc(d)
return x}w=this.gdV().nr(f)
x=new A.de(new Float64Array(16))
x.cc(d)
v=w.a
u=w.b
x.ey(v,u,0,1)
x.tQ(-e)
x.ey(-v,-u,0,1)
return x},
Rk(d){var x
A:{x=!0
if(D.ciz===d){x=!1
break A}if(D.zj===d){this.a.toString
break A}if(D.t8===d||d==null){this.a.toString
break A}x=null}return x},
akD(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zj
else return D.t8},
b84(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fT(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a_(0,v.gRN())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fT(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a_(0,v.gRT())
v.w=null}v.Q=v.ch=null
v.at=v.gdV().a.Ca()
v.as=v.gdV().nr(d.b)
v.ax=v.ay},
b86(d){var x,w,v,u,t,s,r=this,q=r.gdV().a.Ca(),p=r.x=d.c,o=r.gdV().nr(p),n=r.ch
if(n===D.t8)n=r.ch=r.akD(d)
else if(n==null){n=r.akD(d)
r.ch=n}if(!r.Rk(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdV().sv(0,r.a3T(r.gdV().a,n*d.d/q))
x=r.gdV().nr(p)
n=r.gdV()
w=r.gdV().a
v=r.as
v.toString
n.sv(0,r.Dz(w,x.aq(0,v)))
u=r.gdV().nr(p)
p=r.as
p.toString
if(!B.cRd(p).l(0,B.cRd(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdV().sv(0,r.b6w(r.gdV().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dw7(n,o)}n=r.as
n.toString
s=o.aq(0,n)
r.gdV().sv(0,r.Dz(r.gdV().a,s))
r.as=r.gdV().nr(p)
break}r.a.toString},
b82(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a_(0,l.gRN())
x=l.w
if(x!=null)x.a.a_(0,l.gRT())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.Rk(x)){l.Q=null
return}A:{if(D.t8===x){x=d.a.a
if(x.gek()<50){l.Q=null
return}w=l.gdV().a.a_a().a
v=w[0]
w=w[1]
l.a.toString
u=A.b4z(0.0000135,v,x.a,0)
l.a.toString
t=A.b4z(0.0000135,w,x.b,0)
x=x.gek()
l.a.toString
s=B.d46(x,0.0000135,10)
x=u.gFu()
r=t.gFu()
q=y.A
p=q.i("hd<bp.T>")
o=l.y
l.r=new A.bf(o,new A.hd(new A.kg(C.l7),new A.bv(new A.H(v,w),new A.H(x,r),q),p),p.i("bf<bp.T>"))
o.e=A.ed(0,0,0,C.k.aI(s*1000),0,0)
o.al(0,l.gRN())
l.y.co(0)
break A}if(D.zj===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdV().a.Ca()
l.a.toString
m=A.b4z(0.0026999999999999997,n,x/10,0)
l.a.toString
s=B.d46(w,0.0000135,0.1)
x=m.jI(0,s)
w=y.f
v=w.i("hd<bp.T>")
r=l.z
l.w=new A.bf(r,new A.hd(new A.kg(C.l7),new A.bv(n,x,w),v),v.i("bf<bp.T>"))
r.e=A.ed(0,0,0,C.k.aI(s*1000),0,0)
r.al(0,l.gRT())
l.z.co(0)
break A}break A}},
b50(d){var x,w,v,u,t,s,r,q=this,p=d.gh1(),o=d.gbA(d)
if(y.l.b(d)){x=d.gdY(d)===C.eO
if(x)q.a.toString
if(x){q.a.toString
x=o.ag(0,d.gu5())
w=d.gu5()
v=A.Lb(d.gdS(d),null,w,x)
if(!q.Rk(D.t8)){q.a.toString
return}u=q.gdV().nr(p)
t=q.gdV().nr(p.aq(0,v))
q.gdV().sv(0,q.Dz(q.gdV().a,t.aq(0,u)))
q.a.toString
return}if(d.gu5().b===0)return
x=d.gu5()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.ghA(d)
else return
q.a.toString
if(!q.Rk(D.zj))return
u=q.gdV().nr(p)
q.gdV().sv(0,q.a3T(q.gdV().a,s))
r=q.gdV().nr(p)
q.gdV().sv(0,q.Dz(q.gdV().a,r.aq(0,u)))
q.a.toString},
b1u(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a_(0,r.gRN())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdV().a.a_a().a
x=q[0]
q=q[1]
w=r.gdV()
v=r.gdV().a
u=r.gdV()
t=r.r
s=t.b
t=t.a
w.sv(0,r.Dz(v,u.nr(s.aB(0,t.gv(t))).aq(0,r.gdV().nr(new A.H(x,q)))))},
b35(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a_(0,s.gRT())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aB(0,r.gv(r))
r=s.gdV().a.Ca()
x=s.gdV()
v=s.x
v===$&&A.b()
u=x.nr(v)
s.gdV().sv(0,s.a3T(s.gdV().a,w/r))
t=s.gdV().nr(s.x)
s.gdV().sv(0,s.Dz(s.gdV().a,t.aq(0,u)))},
b49(){this.q(new B.c_M())},
am(){var x=this,w=null
x.aJ()
x.y=A.cF(w,w,w,1,w,x)
x.z=A.cF(w,w,w,1,w,x)
x.gdV().al(0,x.game())},
bb(d){this.bw(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdV().a_(0,x.game())
x.a.toString
w=x.gdV()
w.Z$=$.ad()
w.X$=0
x.aOh()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdV().a
w=u.a.w
v=new B.aFW(w,u.e,C.z,!0,x,t,t)
return A.E4(C.fK,A.dQ(C.c0,v,C.a2,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gb81(),u.gb83(),u.gb85(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.H(0,-0.005)),u.f,t,t,t,u.gb5_(),t)}}
B.aFW.prototype={
u(d){var x=this,w=A.ML(x.w,new A.h7(x.c,x.d),null,x.r,!0)
return A.CR(w,x.e,null)}}
B.ayV.prototype={
nr(d){var x=this.a,w=new A.de(new Float64Array(16))
if(w.l9(x)===0)A.ai(A.hN(x,"other","Matrix cannot be inverted"))
x=new A.et(new Float64Array(3))
x.h7(d.a,d.b,0)
x=w.ns(x).a
return new A.H(x[0],x[1])}}
B.acr.prototype={
I(){return"_GestureType."+this.b}}
B.bhr.prototype={
I(){return"PanAxis."+this.b}}
B.aiq.prototype={
bW(){this.cJ()
this.d7()
this.fV()},
m(){var x=this,w=x.bF$
if(w!=null)w.a_(0,x.gfG())
x.bF$=null
x.a8()}}
B.a5G.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a5G&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gC(d){var x=this
return A.ar(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a6U)","~(a6V)","~(Uk)","~(m3)"])
B.c_M.prototype={
$0(){},
$S:0};(function aliases(){var x=B.aiq.prototype
x.aOh=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.acZ.prototype,"gb83","b84",1)
x(v,"gb85","b86",2)
x(v,"gb81","b82",3)
x(v,"gb5_","b50",4)
w(v,"gRN","b1u",0)
w(v,"gRT","b35",0)
w(v,"game","b49",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.JE,A.I)
w(B.aiq,A.a1)
w(B.acZ,B.aiq)
w(B.c_M,A.bR)
w(B.aFW,A.K)
w(B.ayV,A.d9)
v(A.fx,[B.acr,B.bhr])
w(B.a5G,A.L)
x(B.aiq,A.hI)})()
A.bw(b.typeUniverse,JSON.parse('{"JE":{"I":[],"e":[],"f":[]},"acZ":{"a1":["JE"]},"aFW":{"K":[],"e":[],"f":[]},"ayV":{"d9":["de"],"aR":[]}}'))
var y={z:A.x("bZ<a1<I>>"),B:A.x("Lf"),l:A.x("EW"),g:A.x("ah"),A:A.x("bv<H>"),f:A.x("bv<P>")};(function constants(){D.cm3=new B.bhr(3,"free")
D.t8=new B.acr(0,"pan")
D.zj=new B.acr(1,"scale")
D.ciz=new B.acr(2,"rotate")})()};
(a=>{a["NYSJsJlY/4yLLU/OTEAYRL7MWac="]=a.current})($__dart_deferred_initializers__);