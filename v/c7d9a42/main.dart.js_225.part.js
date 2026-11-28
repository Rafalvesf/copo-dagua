((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cUD(d,e,f,g){return new B.Ke(d,e,f,g,null)},
bcM(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aw(0,e)
w=f.aw(0,e)
return e.aj(0,w.rn(A.ag(x.N0(w)/t,0,1)))},
dqD(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aw(0,q),o=e.b,n=o.aw(0,q),m=e.d,l=m.aw(0,q),k=p.N0(n),j=n.N0(n),i=p.N0(l),h=l.N0(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bcM(d,q,o),B.bcM(d,o,x),B.bcM(d,x,m),B.bcM(d,m,q)]
v=A.dl()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.be()},
dxc(){var x=A.hr()
return new B.aB2(x,$.aa())},
daT(d,e,f){return Math.log(f/d)/Math.log(e/100)},
dce(d,e){var x,w,v,u,t,s,r=new A.dk(new Float64Array(16))
r.cd(d)
r.le(r)
x=e.a
w=e.b
v=new A.ez(new Float64Array(3))
v.hd(x,w,0)
v=r.nw(v)
u=e.c
t=new A.ez(new Float64Array(3))
t.hd(u,w,0)
t=r.nw(t)
w=e.d
s=new A.ez(new Float64Array(3))
s.hd(u,w,0)
s=r.nw(s)
u=new A.ez(new Float64Array(3))
u.hd(x,w,0)
u=r.nw(u)
x=new A.ez(new Float64Array(3))
x.cd(v)
w=new A.ez(new Float64Array(3))
w.cd(t)
v=new A.ez(new Float64Array(3))
v.cd(s)
t=new A.ez(new Float64Array(3))
t.cd(u)
return new B.a6X(x,w,v,t)},
daJ(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.T,w=0;w<4;++w){v=r[w]
u=B.dqD(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.L(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.L(x.a,t)}return B.cXS(x)},
cXS(d){return new A.L(A.iN(C.k.a8(d.a,9)),A.iN(C.k.a8(d.b,9)))},
dDH(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bx:C.a2},
Ke:function Ke(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
aes:function aes(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.ew$=f
_.bG$=g
_.c=_.a=null},
c4O:function c4O(){},
aI9:function aI9(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aB2:function aB2(d,e){var _=this
_.a=d
_.V$=0
_.Y$=e
_.aH$=_.bn$=0},
adR:function adR(d,e){this.a=d
this.b=e},
bkK:function bkK(d,e){this.a=d
this.b=e},
ak9:function ak9(){},
a6X:function a6X(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[178],B)
D=c[432]
B.Ke.prototype={
P(){var x=null,w=y.z
return new B.aes(new A.c4(x,w),new A.c4(x,w),x,x)}}
B.aes.prototype={
gdX(){var x=this.d
if(x===$){this.a.toString
x=B.dxc()
this.d=x}return x},
gQP(){var x,w=$.az.ac$.x.h(0,this.e).gaP()
w.toString
x=y.g.a(w).gN(0)
return this.a.f.NG(new A.ae(0,0,0+x.a,0+x.b))},
gVm(){var x=$.az.ac$.x.h(0,this.f).gaP()
x.toString
x=y.g.a(x).gN(0)
return new A.ae(0,0,0+x.a,0+x.b)},
DU(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.T)){x=new A.dk(new Float64Array(16))
x.cd(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dk(new Float64Array(16))
w.cd(a0)
w.eC(a1.a,a1.b,0,1)
v=B.dce(w,d.gVm())
if(d.gQP().gaAD(0))return w
x=d.gQP()
u=d.ay
t=A.hr()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.eC(q/2,o/2,0,1)
t.tV(u)
t.eC(-q/2,-o/2,0,1)
u=new A.ez(new Float64Array(3))
u.hd(r,x,0)
u=t.nw(u)
q=new A.ez(new Float64Array(3))
q.hd(s,x,0)
q=t.nw(q)
x=new A.ez(new Float64Array(3))
x.hd(s,p,0)
x=t.nw(x)
s=new A.ez(new Float64Array(3))
s.hd(r,p,0)
s=t.nw(s)
r=new Float64Array(3)
new A.ez(r).cd(u)
u=new Float64Array(3)
new A.ez(u).cd(q)
q=new Float64Array(3)
new A.ez(q).cd(x)
x=new Float64Array(3)
new A.ez(x).cd(s)
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
x=new A.ez(new Float64Array(3))
x.hd(m,l,0)
u=new A.ez(new Float64Array(3))
u.hd(k,l,0)
s=new A.ez(new Float64Array(3))
s.hd(k,j,0)
r=new A.ez(new Float64Array(3))
r.hd(m,j,0)
q=new A.ez(new Float64Array(3))
q.cd(x)
x=new A.ez(new Float64Array(3))
x.cd(u)
u=new A.ez(new Float64Array(3))
u.cd(s)
s=new A.ez(new Float64Array(3))
s.cd(r)
i=new B.a6X(q,x,u,s)
h=B.daJ(i,v)
if(h.l(0,C.T))return w
x=w.a0_().a
u=x[0]
x=x[1]
g=a0.Cr()
u-=h.a*g
x-=h.b*g
f=new A.dk(new Float64Array(16))
f.cd(a0)
s=new A.ez(new Float64Array(3))
s.hd(u,x,0)
f.af8(s)
e=B.daJ(i,B.dce(f,d.gVm()))
if(e.l(0,C.T))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.dk(new Float64Array(16))
x.cd(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.dk(new Float64Array(16))
s.cd(a0)
r=new A.ez(new Float64Array(3))
r.hd(u,x,0)
s.af8(r)
return s},
a4T(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dk(new Float64Array(16))
x.cd(d)
return x}w=q.gdX().a.Cr()
x=q.gVm()
v=q.gQP()
u=q.gVm()
t=q.gQP()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ag(s,t.ax,t.at)/w
x=new A.dk(new Float64Array(16))
x.cd(d)
x.nC(r,r,r,1)
return x},
b8p(d,e,f){var x,w,v,u
if(e===0){x=new A.dk(new Float64Array(16))
x.cd(d)
return x}w=this.gdX().nv(f)
x=new A.dk(new Float64Array(16))
x.cd(d)
v=w.a
u=w.b
x.eC(v,u,0,1)
x.tV(-e)
x.eC(-v,-u,0,1)
return x},
S_(d){var x
A:{x=!0
if(D.cnF===d){x=!1
break A}if(D.A3===d){this.a.toString
break A}if(D.tJ===d||d==null){this.a.toString
break A}x=null}return x},
alN(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.A3
else return D.tJ},
ba6(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d5(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a_(0,v.gSs())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d5(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a_(0,v.gSy())
v.w=null}v.Q=v.ch=null
v.at=v.gdX().a.Cr()
v.as=v.gdX().nv(d.b)
v.ax=v.ay},
ba8(d){var x,w,v,u,t,s,r=this,q=r.gdX().a.Cr(),p=r.x=d.c,o=r.gdX().nv(p),n=r.ch
if(n===D.tJ)n=r.ch=r.alN(d)
else if(n==null){n=r.alN(d)
r.ch=n}if(!r.S_(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdX().sv(0,r.a4T(r.gdX().a,n*d.d/q))
x=r.gdX().nv(p)
n=r.gdX()
w=r.gdX().a
v=r.as
v.toString
n.sv(0,r.DU(w,x.aw(0,v)))
u=r.gdX().nv(p)
p=r.as
p.toString
if(!B.cXS(p).l(0,B.cXS(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdX().sv(0,r.b8p(r.gdX().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dDH(n,o)}n=r.as
n.toString
s=o.aw(0,n)
r.gdX().sv(0,r.DU(r.gdX().a,s))
r.as=r.gdX().nv(p)
break}r.a.toString},
ba4(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a_(0,l.gSs())
x=l.w
if(x!=null)x.a.a_(0,l.gSy())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.S_(x)){l.Q=null
return}A:{if(D.tJ===x){x=d.a.a
if(x.geo()<50){l.Q=null
return}w=l.gdX().a.a0_().a
v=w[0]
w=w[1]
l.a.toString
u=A.b7v(0.0000135,v,x.a,0)
l.a.toString
t=A.b7v(0.0000135,w,x.b,0)
x=x.geo()
l.a.toString
s=B.daT(x,0.0000135,10)
x=u.gFT()
r=t.gFT()
q=y.A
p=q.i("hm<bu.T>")
o=l.y
l.r=new A.bk(o,new A.hm(new A.kj(C.lq),new A.bA(new A.L(v,w),new A.L(x,r),q),p),p.i("bk<bu.T>"))
o.e=A.e3(0,0,0,C.k.aK(s*1000),0,0)
o.am(0,l.gSs())
l.y.co(0)
break A}if(D.A3===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdX().a.Cr()
l.a.toString
m=A.b7v(0.0026999999999999997,n,x/10,0)
l.a.toString
s=B.daT(w,0.0000135,0.1)
x=m.jL(0,s)
w=y.f
v=w.i("hm<bu.T>")
r=l.z
l.w=new A.bk(r,new A.hm(new A.kj(C.lq),new A.bA(n,x,w),v),v.i("bk<bu.T>"))
r.e=A.e3(0,0,0,C.k.aK(s*1000),0,0)
r.am(0,l.gSy())
l.z.co(0)
break A}break A}},
b6P(d){var x,w,v,u,t,s,r,q=this,p=d.gh7(),o=d.gbA(d)
if(y.l.b(d)){x=d.ge_(d)===C.f0
if(x)q.a.toString
if(x){q.a.toString
x=o.aj(0,d.guc())
w=d.guc()
v=A.LP(d.gdV(d),null,w,x)
if(!q.S_(D.tJ)){q.a.toString
return}u=q.gdX().nv(p)
t=q.gdX().nv(p.aw(0,v))
q.gdX().sv(0,q.DU(q.gdX().a,t.aw(0,u)))
q.a.toString
return}if(d.guc().b===0)return
x=d.guc()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gkd(d)
else return
q.a.toString
if(!q.S_(D.A3))return
u=q.gdX().nv(p)
q.gdX().sv(0,q.a4T(q.gdX().a,s))
r=q.gdX().nv(p)
q.gdX().sv(0,q.DU(q.gdX().a,r.aw(0,u)))
q.a.toString},
b3g(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a_(0,r.gSs())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdX().a.a0_().a
x=q[0]
q=q[1]
w=r.gdX()
v=r.gdX().a
u=r.gdX()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DU(v,u.nv(s.aD(0,t.gv(t))).aw(0,r.gdX().nv(new A.L(x,q)))))},
b4U(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a_(0,s.gSy())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aD(0,r.gv(r))
r=s.gdX().a.Cr()
x=s.gdX()
v=s.x
v===$&&A.b()
u=x.nv(v)
s.gdX().sv(0,s.a4T(s.gdX().a,w/r))
t=s.gdX().nv(s.x)
s.gdX().sv(0,s.DU(s.gdX().a,t.aw(0,u)))},
b5Y(){this.p(new B.c4O())},
ag(){var x=this,w=null
x.aA()
x.y=A.cD(w,w,w,1,w,x)
x.z=A.cD(w,w,w,1,w,x)
x.gdX().am(0,x.ganj())},
ba(d){this.bx(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdX().a_(0,x.ganj())
x.a.toString
w=x.gdX()
w.Y$=$.aa()
w.V$=0
x.aPF()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdX().a
w=u.a.w
v=new B.aI9(w,u.e,C.z,!0,x,t,t)
return A.Ez(C.fX,A.cV(C.bV,v,C.Z,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gba3(),u.gba5(),u.gba7(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.L(0,-0.005)),u.f,t,t,t,u.gb6O(),t)}}
B.aI9.prototype={
u(d){var x=this,w=A.Np(x.w,new A.he(x.c,x.d),null,x.r,!0)
return A.wY(w,x.e,null)}}
B.aB2.prototype={
nv(d){var x=this.a,w=new A.dk(new Float64Array(16))
if(w.le(x)===0)A.aj(A.fX(x,"other","Matrix cannot be inverted"))
x=new A.ez(new Float64Array(3))
x.hd(d.a,d.b,0)
x=w.nw(x).a
return new A.L(x[0],x[1])}}
B.adR.prototype={
I(){return"_GestureType."+this.b}}
B.bkK.prototype={
I(){return"PanAxis."+this.b}}
B.ak9.prototype={
bU(){this.cA()
this.d2()
this.fZ()},
m(){var x=this,w=x.bG$
if(w!=null)w.a_(0,x.gfJ())
x.bG$=null
x.a6()}}
B.a6X.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a6X&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.as(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a8b)","~(a8c)","~(Va)","~(mc)"])
B.c4O.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ak9.prototype
x.aPF=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aes.prototype,"gba5","ba6",1)
x(v,"gba7","ba8",2)
x(v,"gba3","ba4",3)
x(v,"gb6O","b6P",4)
w(v,"gSs","b3g",0)
w(v,"gSy","b4U",0)
w(v,"ganj","b5Y",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Ke,A.G)
w(B.ak9,A.Z)
w(B.aes,B.ak9)
w(B.c4O,A.bQ)
w(B.aI9,A.H)
w(B.aB2,A.d3)
v(A.f7,[B.adR,B.bkK])
w(B.a6X,A.J)
x(B.ak9,A.hO)})()
A.bn(b.typeUniverse,JSON.parse('{"Ke":{"G":[],"e":[],"f":[]},"aes":{"Z":["Ke"]},"aI9":{"H":[],"e":[],"f":[]},"aB2":{"d3":["dk"],"aS":[]}}'))
var y={z:A.w("c4<Z<G>>"),B:A.w("LT"),l:A.w("Fs"),g:A.w("ah"),A:A.w("bA<L>"),f:A.w("bA<R>")};(function constants(){D.PD=new A.b7(C.lO,20,C.t,null,null,null)
D.cri=new B.bkK(3,"free")
D.tJ=new B.adR(0,"pan")
D.A3=new B.adR(1,"scale")
D.cnF=new B.adR(2,"rotate")})()};
(a=>{a["N6c+S2THsM+W9N55Xhwo52Y3tps="]=a.current})($__dart_deferred_initializers__);