((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cXa(d,e,f,g){return new B.Ko(d,e,f,g,null)},
bdy(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aw(0,e)
w=f.aw(0,e)
return e.aj(0,w.rh(A.ai(x.MG(w)/t,0,1)))},
dtK(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aw(0,q),o=e.b,n=o.aw(0,q),m=e.d,l=m.aw(0,q),k=p.MG(n),j=n.MG(n),i=p.MG(l),h=l.MG(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bdy(d,q,o),B.bdy(d,o,x),B.bdy(d,x,m),B.bdy(d,m,q)]
v=A.dr()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bd()},
dAk(){var x=A.fX()
return new B.aBP(x,$.aa())},
ddH(d,e,f){return Math.log(f/d)/Math.log(e/100)},
df7(d,e){var x,w,v,u,t,s,r=new A.dh(new Float64Array(16))
r.c4(d)
r.l7(r)
x=e.a
w=e.b
v=new A.et(new Float64Array(3))
v.h7(x,w,0)
v=r.mR(v)
u=e.c
t=new A.et(new Float64Array(3))
t.h7(u,w,0)
t=r.mR(t)
w=e.d
s=new A.et(new Float64Array(3))
s.h7(u,w,0)
s=r.mR(s)
u=new A.et(new Float64Array(3))
u.h7(x,w,0)
u=r.mR(u)
x=new A.et(new Float64Array(3))
x.c4(v)
w=new A.et(new Float64Array(3))
w.c4(t)
v=new A.et(new Float64Array(3))
v.c4(s)
t=new A.et(new Float64Array(3))
t.c4(u)
return new B.a7r(x,w,v,t)},
ddw(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.R,w=0;w<4;++w){v=r[w]
u=B.dtK(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.K(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.K(x.a,t)}return B.d_t(x)},
d_t(d){return new A.K(A.j3(C.k.aa(d.a,9)),A.j3(C.k.aa(d.b,9)))},
dGP(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bQ:C.au},
Ko:function Ko(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
aeP:function aeP(d,e,f,g){var _=this
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
c6u:function c6u(){},
aIN:function aIN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBP:function aBP(d,e){var _=this
_.a=d
_.X$=0
_.a_$=e
_.aE$=_.bu$=0},
aed:function aed(d,e){this.a=d
this.b=e},
blP:function blP(d,e){this.a=d
this.b=e},
akD:function akD(){},
a7r:function a7r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[180],B)
D=c[451]
B.Ko.prototype={
P(){var x=null,w=y.z
return new B.aeP(new A.cm(x,w),new A.cm(x,w),x,x)}}
B.aeP.prototype={
gdV(){var x=this.d
if(x===$){this.a.toString
x=B.dAk()
this.d=x}return x},
gQp(){var x,w=$.aA.a7$.x.h(0,this.e).gaM()
w.toString
x=y.g.a(w).gM(0)
return this.a.f.Nf(new A.ac(0,0,0+x.a,0+x.b))},
gVd(){var x=$.aA.a7$.x.h(0,this.f).gaM()
x.toString
x=y.g.a(x).gM(0)
return new A.ac(0,0,0+x.a,0+x.b)},
DD(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.R)){x=new A.dh(new Float64Array(16))
x.c4(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dh(new Float64Array(16))
w.c4(a0)
w.e8(a1.a,a1.b,0,1)
v=B.df7(w,d.gVd())
if(d.gQp().gaAf(0))return w
x=d.gQp()
u=d.ay
t=A.fX()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.e8(q/2,o/2,0,1)
t.tF(u)
t.e8(-q/2,-o/2,0,1)
u=new A.et(new Float64Array(3))
u.h7(r,x,0)
u=t.mR(u)
q=new A.et(new Float64Array(3))
q.h7(s,x,0)
q=t.mR(q)
x=new A.et(new Float64Array(3))
x.h7(s,p,0)
x=t.mR(x)
s=new A.et(new Float64Array(3))
s.h7(r,p,0)
s=t.mR(s)
r=new Float64Array(3)
new A.et(r).c4(u)
u=new Float64Array(3)
new A.et(u).c4(q)
q=new Float64Array(3)
new A.et(q).c4(x)
x=new Float64Array(3)
new A.et(x).c4(s)
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
q.c4(x)
x=new A.et(new Float64Array(3))
x.c4(u)
u=new A.et(new Float64Array(3))
u.c4(s)
s=new A.et(new Float64Array(3))
s.c4(r)
i=new B.a7r(q,x,u,s)
h=B.ddw(i,v)
if(h.l(0,C.R))return w
x=w.a_E().a
u=x[0]
x=x[1]
g=a0.Ck()
u-=h.a*g
x-=h.b*g
f=new A.dh(new Float64Array(16))
f.c4(a0)
s=new A.et(new Float64Array(3))
s.h7(u,x,0)
f.aeM(s)
e=B.ddw(i,B.df7(f,d.gVd()))
if(e.l(0,C.R))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.dh(new Float64Array(16))
x.c4(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.dh(new Float64Array(16))
s.c4(a0)
r=new A.et(new Float64Array(3))
r.h7(u,x,0)
s.aeM(r)
return s},
a4m(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dh(new Float64Array(16))
x.c4(d)
return x}w=q.gdV().a.Ck()
x=q.gVd()
v=q.gQp()
u=q.gVd()
t=q.gQp()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ai(s,t.ax,t.at)/w
x=new A.dh(new Float64Array(16))
x.c4(d)
x.mW(r,r,r,1)
return x},
b7z(d,e,f){var x,w,v,u
if(e===0){x=new A.dh(new Float64Array(16))
x.c4(d)
return x}w=this.gdV().nD(f)
x=new A.dh(new Float64Array(16))
x.c4(d)
v=w.a
u=w.b
x.e8(v,u,0,1)
x.tF(-e)
x.e8(-v,-u,0,1)
return x},
RK(d){var x
A:{x=!0
if(D.cmu===d){x=!1
break A}if(D.zR===d){this.a.toString
break A}if(D.tq===d||d==null){this.a.toString
break A}x=null}return x},
alv(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zR
else return D.tq},
b9i(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cY(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a2(0,v.gSd())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cY(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a2(0,v.gSj())
v.w=null}v.Q=v.ch=null
v.at=v.gdV().a.Ck()
v.as=v.gdV().nD(d.b)
v.ax=v.ay},
b9k(d){var x,w,v,u,t,s,r=this,q=r.gdV().a.Ck(),p=r.x=d.c,o=r.gdV().nD(p),n=r.ch
if(n===D.tq)n=r.ch=r.alv(d)
else if(n==null){n=r.alv(d)
r.ch=n}if(!r.RK(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdV().sv(0,r.a4m(r.gdV().a,n*d.d/q))
x=r.gdV().nD(p)
n=r.gdV()
w=r.gdV().a
v=r.as
v.toString
n.sv(0,r.DD(w,x.aw(0,v)))
u=r.gdV().nD(p)
p=r.as
p.toString
if(!B.d_t(p).l(0,B.d_t(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdV().sv(0,r.b7z(r.gdV().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dGP(n,o)}n=r.as
n.toString
s=o.aw(0,n)
r.gdV().sv(0,r.DD(r.gdV().a,s))
r.as=r.gdV().nD(p)
break}r.a.toString},
b9g(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a2(0,l.gSd())
x=l.w
if(x!=null)x.a.a2(0,l.gSj())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.RK(x)){l.Q=null
return}A:{if(D.tq===x){x=d.a.a
if(x.gey()<50){l.Q=null
return}w=l.gdV().a.a_E().a
v=w[0]
w=w[1]
l.a.toString
u=A.arS(0.0000135,v,x.a,0,C.f4)
l.a.toString
t=A.arS(0.0000135,w,x.b,0,C.f4)
x=x.gey()
l.a.toString
s=B.ddH(x,0.0000135,10)
x=u.gFC()
r=t.gFC()
q=y.A
p=q.i("fR<br.T>")
o=l.y
l.r=new A.bk(o,new A.fR(new A.kv(C.n4),new A.bC(new A.K(v,w),new A.K(x,r),q),p),p.i("bk<br.T>"))
o.e=A.e8(0,0,0,C.k.aN(s*1000),0,0)
o.am(0,l.gSd())
l.y.cW(0)
break A}if(D.zR===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdV().a.Ck()
l.a.toString
m=A.arS(0.0026999999999999997,n,x/10,0,C.f4)
l.a.toString
s=B.ddH(w,0.0000135,0.1)
x=m.iB(0,s)
w=y.f
v=w.i("fR<br.T>")
r=l.z
l.w=new A.bk(r,new A.fR(new A.kv(C.n4),new A.bC(n,x,w),v),v.i("bk<br.T>"))
r.e=A.e8(0,0,0,C.k.aN(s*1000),0,0)
r.am(0,l.gSj())
l.z.cW(0)
break A}break A}},
b5S(d){var x,w,v,u,t,s,r,q=this,p=d.gh2(),o=d.gbz(d)
if(y.l.b(d)){x=d.gdY(d)===C.eY
if(x)q.a.toString
if(x){q.a.toString
x=o.aj(0,d.gtY())
w=d.gtY()
v=A.LY(d.gdR(d),null,w,x)
if(!q.RK(D.tq)){q.a.toString
return}u=q.gdV().nD(p)
t=q.gdV().nD(p.aw(0,v))
q.gdV().sv(0,q.DD(q.gdV().a,t.aw(0,u)))
q.a.toString
return}if(d.gtY().b===0)return
x=d.gtY()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.ghG(d)
else return
q.a.toString
if(!q.RK(D.zR))return
u=q.gdV().nD(p)
q.gdV().sv(0,q.a4m(q.gdV().a,s))
r=q.gdV().nD(p)
q.gdV().sv(0,q.DD(q.gdV().a,r.aw(0,u)))
q.a.toString},
b2D(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a2(0,r.gSd())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdV().a.a_E().a
x=q[0]
q=q[1]
w=r.gdV()
v=r.gdV().a
u=r.gdV()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DD(v,u.nD(s.aK(0,t.gv(t))).aw(0,r.gdV().nD(new A.K(x,q)))))},
b3V(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a2(0,s.gSj())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aK(0,r.gv(r))
r=s.gdV().a.Ck()
x=s.gdV()
v=s.x
v===$&&A.b()
u=x.nD(v)
s.gdV().sv(0,s.a4m(s.gdV().a,w/r))
t=s.gdV().nD(s.x)
s.gdV().sv(0,s.DD(s.gdV().a,t.aw(0,u)))},
b4Z(){this.p(new B.c6u())},
ad(){var x=this,w=null
x.ao()
x.y=A.cF(w,w,w,w,x)
x.z=A.cF(w,w,w,w,x)
x.gdV().am(0,x.gan_())},
bh(d){this.bC(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdV().a2(0,x.gan_())
x.a.toString
w=x.gdV()
w.a_$=$.aa()
w.X$=0
x.aPn()},
t(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdV().a
w=u.a.w
v=new B.aIN(w,u.e,C.y,!0,x,t,t)
return A.Au(C.fz,A.cG(C.bs,v,C.Y,!1,t,t,t,t,t,t,t,t,t,t,u.gb9f(),u.gb9h(),u.gb9j(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.K(0,-0.005)),u.f,t,t,t,u.gb5R(),t)}}
B.aIN.prototype={
t(d){var x=this,w=A.NE(x.w,new A.h9(x.c,x.d),null,x.r,!0)
return A.uT(w,x.e,null)}}
B.aBP.prototype={
nD(d){var x=this.a,w=new A.dh(new Float64Array(16))
if(w.l7(x)===0)A.al(A.h2(x,"other","Matrix cannot be inverted"))
x=new A.et(new Float64Array(3))
x.h7(d.a,d.b,0)
x=w.mR(x).a
return new A.K(x[0],x[1])}}
B.aed.prototype={
I(){return"_GestureType."+this.b}}
B.blP.prototype={
I(){return"PanAxis."+this.b}}
B.akD.prototype={
bS(){this.cr()
this.cN()
this.fW()},
m(){var x=this,w=x.bG$
if(w!=null)w.a2(0,x.gfJ())
x.bG$=null
x.a6()}}
B.a7r.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a7r&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.au(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a8E)","~(a8F)","~(VE)","~(mm)"])
B.c6u.prototype={
$0(){},
$S:0};(function aliases(){var x=B.akD.prototype
x.aPn=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aeP.prototype,"gb9h","b9i",1)
x(v,"gb9j","b9k",2)
x(v,"gb9f","b9g",3)
x(v,"gb5R","b5S",4)
w(v,"gSd","b2D",0)
w(v,"gSj","b3V",0)
w(v,"gan_","b4Z",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Ko,A.G)
w(B.akD,A.Z)
w(B.aeP,B.akD)
w(B.c6u,A.bN)
w(B.aIN,A.H)
w(B.aBP,A.d_)
v(A.fj,[B.aed,B.blP])
w(B.a7r,A.L)
x(B.akD,A.hR)})()
A.bq(b.typeUniverse,JSON.parse('{"Ko":{"G":[],"e":[],"f":[]},"aeP":{"Z":["Ko"]},"aIN":{"H":[],"e":[],"f":[]},"aBP":{"d_":["dh"],"aW":[]}}'))
var y={z:A.B("cm<Z<G>>"),B:A.B("M1"),l:A.B("Fs"),g:A.B("ag"),A:A.B("bC<K>"),f:A.B("bC<T>")};(function constants(){D.cpY=new B.blP(3,"free")
D.tq=new B.aed(0,"pan")
D.zR=new B.aed(1,"scale")
D.cmu=new B.aed(2,"rotate")})()};
(a=>{a["dmhIO1A9kPZdeKSK/lC9u0p4I7M="]=a.current})($__dart_deferred_initializers__);