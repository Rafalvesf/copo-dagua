((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cIt(d,e,f,g){return new B.Jg(d,e,f,g,null)},
b87(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aq(0,e)
w=f.aq(0,e)
return e.af(0,w.rb(A.ag(x.M8(w)/t,0,1)))},
ddD(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aq(0,q),o=e.b,n=o.aq(0,q),m=e.d,l=m.aq(0,q),k=p.M8(n),j=n.M8(n),i=p.M8(l),h=l.M8(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.b87(d,q,o),B.b87(d,o,x),B.b87(d,x,m),B.b87(d,m,q)]
v=A.dh()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bj()},
djW(){var x=A.hg()
return new B.axV(x,$.ae())},
cZq(d,e,f){return Math.log(f/d)/Math.log(e/100)},
d_F(d,e){var x,w,v,u,t,s,r=new A.d9(new Float64Array(16))
r.cc(d)
r.l5(r)
x=e.a
w=e.b
v=new A.en(new Float64Array(3))
v.h5(x,w,0)
v=r.nr(v)
u=e.c
t=new A.en(new Float64Array(3))
t.h5(u,w,0)
t=r.nr(t)
w=e.d
s=new A.en(new Float64Array(3))
s.h5(u,w,0)
s=r.nr(s)
u=new A.en(new Float64Array(3))
u.h5(x,w,0)
u=r.nr(u)
x=new A.en(new Float64Array(3))
x.cc(v)
w=new A.en(new Float64Array(3))
w.cc(t)
v=new A.en(new Float64Array(3))
v.cc(s)
t=new A.en(new Float64Array(3))
t.cc(u)
return new B.a4V(x,w,v,t)},
cZf(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.Q,w=0;w<4;++w){v=r[w]
u=B.ddD(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.F(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.F(x.a,t)}return B.cLC(x)},
cLC(d){return new A.F(A.j3(C.j.a4(d.a,9)),A.j3(C.j.a4(d.b,9)))},
dqg(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bv:C.a2},
Jg:function Jg(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
ace:function ace(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.eq$=f
_.bD$=g
_.c=_.a=null},
bXk:function bXk(){},
aEV:function aEV(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
axV:function axV(d,e){var _=this
_.a=d
_.W$=0
_.a0$=e
_.aE$=_.bo$=0},
abJ:function abJ(d,e){this.a=d
this.b=e},
bfb:function bfb(d,e){this.a=d
this.b=e},
ahE:function ahE(){},
a4V:function a4V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[167],B)
D=c[433]
B.Jg.prototype={
S(){var x=null,w=y.z
return new B.ace(new A.cl(x,w),new A.cl(x,w),x,x)}}
B.ace.prototype={
gdV(){var x=this.d
if(x===$){this.a.toString
x=B.djW()
this.d=x}return x},
gPY(){var x,w=$.az.ab$.x.h(0,this.e).gaM()
w.toString
x=y.g.a(w).gM(0)
return this.a.f.MP(new A.ac(0,0,0+x.a,0+x.b))},
gUh(){var x=$.az.ab$.x.h(0,this.f).gaM()
x.toString
x=y.g.a(x).gM(0)
return new A.ac(0,0,0+x.a,0+x.b)},
Dm(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.Q)){x=new A.d9(new Float64Array(16))
x.cc(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.d9(new Float64Array(16))
w.cc(a0)
w.ex(a1.a,a1.b,0,1)
v=B.d_F(w,d.gUh())
if(d.gPY().gayP(0))return w
x=d.gPY()
u=d.ay
t=A.hg()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.ex(q/2,o/2,0,1)
t.tM(u)
t.ex(-q/2,-o/2,0,1)
u=new A.en(new Float64Array(3))
u.h5(r,x,0)
u=t.nr(u)
q=new A.en(new Float64Array(3))
q.h5(s,x,0)
q=t.nr(q)
x=new A.en(new Float64Array(3))
x.h5(s,p,0)
x=t.nr(x)
s=new A.en(new Float64Array(3))
s.h5(r,p,0)
s=t.nr(s)
r=new Float64Array(3)
new A.en(r).cc(u)
u=new Float64Array(3)
new A.en(u).cc(q)
q=new Float64Array(3)
new A.en(q).cc(x)
x=new Float64Array(3)
new A.en(x).cc(s)
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
x=new A.en(new Float64Array(3))
x.h5(m,l,0)
u=new A.en(new Float64Array(3))
u.h5(k,l,0)
s=new A.en(new Float64Array(3))
s.h5(k,j,0)
r=new A.en(new Float64Array(3))
r.h5(m,j,0)
q=new A.en(new Float64Array(3))
q.cc(x)
x=new A.en(new Float64Array(3))
x.cc(u)
u=new A.en(new Float64Array(3))
u.cc(s)
s=new A.en(new Float64Array(3))
s.cc(r)
i=new B.a4V(q,x,u,s)
h=B.cZf(i,v)
if(h.l(0,C.Q))return w
x=w.ZP().a
u=x[0]
x=x[1]
g=a0.BZ()
u-=h.a*g
x-=h.b*g
f=new A.d9(new Float64Array(16))
f.cc(a0)
s=new A.en(new Float64Array(3))
s.h5(u,x,0)
f.adH(s)
e=B.cZf(i,B.d_F(f,d.gUh()))
if(e.l(0,C.Q))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.d9(new Float64Array(16))
x.cc(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.d9(new Float64Array(16))
s.cc(a0)
r=new A.en(new Float64Array(3))
r.h5(u,x,0)
s.adH(r)
return s},
a3z(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.d9(new Float64Array(16))
x.cc(d)
return x}w=q.gdV().a.BZ()
x=q.gUh()
v=q.gPY()
u=q.gUh()
t=q.gPY()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ag(s,t.ax,t.at)/w
x=new A.d9(new Float64Array(16))
x.cc(d)
x.nx(r,r,r,1)
return x},
b5B(d,e,f){var x,w,v,u
if(e===0){x=new A.d9(new Float64Array(16))
x.cc(d)
return x}w=this.gdV().nq(f)
x=new A.d9(new Float64Array(16))
x.cc(d)
v=w.a
u=w.b
x.ex(v,u,0,1)
x.tM(-e)
x.ex(-v,-u,0,1)
return x},
R2(d){var x
A:{x=!0
if(D.cil===d){x=!1
break A}if(D.z7===d){this.a.toString
break A}if(D.rU===d||d==null){this.a.toString
break A}x=null}return x},
akg(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.z7
else return D.rU},
b79(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fR(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.Z(0,v.gRu())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fR(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.Z(0,v.gRA())
v.w=null}v.Q=v.ch=null
v.at=v.gdV().a.BZ()
v.as=v.gdV().nq(d.b)
v.ax=v.ay},
b7b(d){var x,w,v,u,t,s,r=this,q=r.gdV().a.BZ(),p=r.x=d.c,o=r.gdV().nq(p),n=r.ch
if(n===D.rU)n=r.ch=r.akg(d)
else if(n==null){n=r.akg(d)
r.ch=n}if(!r.R2(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdV().sv(0,r.a3z(r.gdV().a,n*d.d/q))
x=r.gdV().nq(p)
n=r.gdV()
w=r.gdV().a
v=r.as
v.toString
n.sv(0,r.Dm(w,x.aq(0,v)))
u=r.gdV().nq(p)
p=r.as
p.toString
if(!B.cLC(p).l(0,B.cLC(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdV().sv(0,r.b5B(r.gdV().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dqg(n,o)}n=r.as
n.toString
s=o.aq(0,n)
r.gdV().sv(0,r.Dm(r.gdV().a,s))
r.as=r.gdV().nq(p)
break}r.a.toString},
b77(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.Z(0,l.gRu())
x=l.w
if(x!=null)x.a.Z(0,l.gRA())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.R2(x)){l.Q=null
return}A:{if(D.rU===x){x=d.a.a
if(x.gei()<50){l.Q=null
return}w=l.gdV().a.ZP().a
v=w[0]
w=w[1]
l.a.toString
u=A.b2K(0.0000135,v,x.a,0)
l.a.toString
t=A.b2K(0.0000135,w,x.b,0)
x=x.gei()
l.a.toString
s=B.cZq(x,0.0000135,10)
x=u.gFd()
r=t.gFd()
q=y.A
p=q.i("h7<bp.T>")
o=l.y
l.r=new A.bg(o,new A.h7(new A.k8(C.kU),new A.bt(new A.F(v,w),new A.F(x,r),q),p),p.i("bg<bp.T>"))
o.e=A.e9(0,0,0,C.j.aH(s*1000),0,0)
o.ak(0,l.gRu())
l.y.cp(0)
break A}if(D.z7===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdV().a.BZ()
l.a.toString
m=A.b2K(0.0026999999999999997,n,x/10,0)
l.a.toString
s=B.cZq(w,0.0000135,0.1)
x=m.jE(0,s)
w=y.f
v=w.i("h7<bp.T>")
r=l.z
l.w=new A.bg(r,new A.h7(new A.k8(C.kU),new A.bt(n,x,w),v),v.i("bg<bp.T>"))
r.e=A.e9(0,0,0,C.j.aH(s*1000),0,0)
r.ak(0,l.gRA())
l.z.cp(0)
break A}break A}},
b4a(d){var x,w,v,u,t,s,r,q=this,p=d.gh_(),o=d.gbw(d)
if(y.l.b(d)){x=d.gdY(d)===C.eM
if(x)q.a.toString
if(x){q.a.toString
x=o.af(0,d.gu1())
w=d.gu1()
v=A.KM(d.gdT(d),null,w,x)
if(!q.R2(D.rU)){q.a.toString
return}u=q.gdV().nq(p)
t=q.gdV().nq(p.aq(0,v))
q.gdV().sv(0,q.Dm(q.gdV().a,t.aq(0,u)))
q.a.toString
return}if(d.gu1().b===0)return
x=d.gu1()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.ghw(d)
else return
q.a.toString
if(!q.R2(D.z7))return
u=q.gdV().nq(p)
q.gdV().sv(0,q.a3z(q.gdV().a,s))
r=q.gdV().nq(p)
q.gdV().sv(0,q.Dm(q.gdV().a,r.aq(0,u)))
q.a.toString},
b0D(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.Z(0,r.gRu())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdV().a.ZP().a
x=q[0]
q=q[1]
w=r.gdV()
v=r.gdV().a
u=r.gdV()
t=r.r
s=t.b
t=t.a
w.sv(0,r.Dm(v,u.nq(s.aB(0,t.gv(t))).aq(0,r.gdV().nq(new A.F(x,q)))))},
b2e(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.Z(0,s.gRA())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aB(0,r.gv(r))
r=s.gdV().a.BZ()
x=s.gdV()
v=s.x
v===$&&A.b()
u=x.nq(v)
s.gdV().sv(0,s.a3z(s.gdV().a,w/r))
t=s.gdV().nq(s.x)
s.gdV().sv(0,s.Dm(s.gdV().a,t.aq(0,u)))},
b3i(){this.q(new B.bXk())},
al(){var x=this,w=null
x.aI()
x.y=A.cE(w,w,w,1,w,x)
x.z=A.cE(w,w,w,1,w,x)
x.gdV().ak(0,x.galR())},
bb(d){this.by(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdV().Z(0,x.galR())
x.a.toString
w=x.gdV()
w.a0$=$.ae()
w.W$=0
x.aNv()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdV().a
w=u.a.w
v=new B.aEV(w,u.e,C.A,!0,x,t,t)
return A.DA(C.fF,A.dH(C.c_,v,C.a1,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gb76(),u.gb78(),u.gb7a(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.F(0,-0.005)),u.f,t,t,t,u.gb49(),t)}}
B.aEV.prototype={
u(d){var x=this,w=A.Mh(x.w,new A.nj(x.c,x.d),null,x.r,!0)
return A.Cs(w,x.e,null)}}
B.axV.prototype={
nq(d){var x=this.a,w=new A.d9(new Float64Array(16))
if(w.l5(x)===0)A.ah(A.hI(x,"other","Matrix cannot be inverted"))
x=new A.en(new Float64Array(3))
x.h5(d.a,d.b,0)
x=w.nr(x).a
return new A.F(x[0],x[1])}}
B.abJ.prototype={
H(){return"_GestureType."+this.b}}
B.bfb.prototype={
H(){return"PanAxis."+this.b}}
B.ahE.prototype={
c0(){this.cL()
this.d8()
this.fT()},
m(){var x=this,w=x.bD$
if(w!=null)w.Z(0,x.gfE())
x.bD$=null
x.aa()}}
B.a4V.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a4V&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gC(d){var x=this
return A.aq(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a68)","~(a69)","~(TJ)","~(lX)"])
B.bXk.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ahE.prototype
x.aNv=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.ace.prototype,"gb78","b79",1)
x(v,"gb7a","b7b",2)
x(v,"gb76","b77",3)
x(v,"gb49","b4a",4)
w(v,"gRu","b0D",0)
w(v,"gRA","b2e",0)
w(v,"galR","b3i",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Jg,A.I)
w(B.ahE,A.a1)
w(B.ace,B.ahE)
w(B.bXk,A.bS)
w(B.aEV,A.O)
w(B.axV,A.dD)
v(A.fx,[B.abJ,B.bfb])
w(B.a4V,A.K)
x(B.ahE,A.hD)})()
A.bu(b.typeUniverse,JSON.parse('{"Jg":{"I":[],"e":[],"f":[]},"ace":{"a1":["Jg"]},"aEV":{"O":[],"e":[],"f":[]},"axV":{"dD":["d9"],"aO":[]}}'))
var y={z:A.w("cl<a1<I>>"),B:A.w("KQ"),l:A.w("Es"),g:A.w("af"),A:A.w("bt<F>"),f:A.w("bt<U>")};(function constants(){D.clP=new B.bfb(3,"free")
D.rU=new B.abJ(0,"pan")
D.z7=new B.abJ(1,"scale")
D.cil=new B.abJ(2,"rotate")})()};
(a=>{a["9eg/jet7ssY00qp6nwa90LXxfuQ="]=a.current})($__dart_deferred_initializers__);