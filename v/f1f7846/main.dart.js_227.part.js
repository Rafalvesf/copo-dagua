((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cW6(d,e,f,g){return new B.Ki(d,e,f,g,null)},
bd3(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aA(0,e)
w=f.aA(0,e)
return e.ak(0,w.rp(A.ag(x.N5(w)/t,0,1)))},
dsa(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aA(0,q),o=e.b,n=o.aA(0,q),m=e.d,l=m.aA(0,q),k=p.N5(n),j=n.N5(n),i=p.N5(l),h=l.N5(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bd3(d,q,o),B.bd3(d,o,x),B.bd3(d,x,m),B.bd3(d,m,q)]
v=A.dm()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.be()},
dyJ(){var x=A.ht()
return new B.aBb(x,$.aa())},
dco(d,e,f){return Math.log(f/d)/Math.log(e/100)},
ddL(d,e){var x,w,v,u,t,s,r=new A.dl(new Float64Array(16))
r.cc(d)
r.lf(r)
x=e.a
w=e.b
v=new A.ez(new Float64Array(3))
v.hd(x,w,0)
v=r.nx(v)
u=e.c
t=new A.ez(new Float64Array(3))
t.hd(u,w,0)
t=r.nx(t)
w=e.d
s=new A.ez(new Float64Array(3))
s.hd(u,w,0)
s=r.nx(s)
u=new A.ez(new Float64Array(3))
u.hd(x,w,0)
u=r.nx(u)
x=new A.ez(new Float64Array(3))
x.cc(v)
w=new A.ez(new Float64Array(3))
w.cc(t)
v=new A.ez(new Float64Array(3))
v.cc(s)
t=new A.ez(new Float64Array(3))
t.cc(u)
return new B.a7_(x,w,v,t)},
dce(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.U,w=0;w<4;++w){v=r[w]
u=B.dsa(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.M(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.M(x.a,t)}return B.cZl(x)},
cZl(d){return new A.M(A.iN(C.k.a8(d.a,9)),A.iN(C.k.a8(d.b,9)))},
dFd(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bx:C.a3},
Ki:function Ki(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
aew:function aew(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.ex$=f
_.bG$=g
_.c=_.a=null},
c5I:function c5I(){},
aIk:function aIk(d,e,f,g,h,i,j){var _=this
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
_.aH$=_.bn$=0},
adU:function adU(d,e){this.a=d
this.b=e},
bl1:function bl1(d,e){this.a=d
this.b=e},
akf:function akf(){},
a7_:function a7_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[178],B)
D=c[432]
B.Ki.prototype={
R(){var x=null,w=y.z
return new B.aew(new A.c6(x,w),new A.c6(x,w),x,x)}}
B.aew.prototype={
gdY(){var x=this.d
if(x===$){this.a.toString
x=B.dyJ()
this.d=x}return x},
gQV(){var x,w=$.aA.ac$.x.h(0,this.e).gaP()
w.toString
x=y.g.a(w).gN(0)
return this.a.f.NL(new A.ae(0,0,0+x.a,0+x.b))},
gVy(){var x=$.aA.ac$.x.h(0,this.f).gaP()
x.toString
x=y.g.a(x).gN(0)
return new A.ae(0,0,0+x.a,0+x.b)},
DX(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.U)){x=new A.dl(new Float64Array(16))
x.cc(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dl(new Float64Array(16))
w.cc(a0)
w.eB(a1.a,a1.b,0,1)
v=B.ddL(w,d.gVy())
if(d.gQV().gaAS(0))return w
x=d.gQV()
u=d.ay
t=A.ht()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.eB(q/2,o/2,0,1)
t.tW(u)
t.eB(-q/2,-o/2,0,1)
u=new A.ez(new Float64Array(3))
u.hd(r,x,0)
u=t.nx(u)
q=new A.ez(new Float64Array(3))
q.hd(s,x,0)
q=t.nx(q)
x=new A.ez(new Float64Array(3))
x.hd(s,p,0)
x=t.nx(x)
s=new A.ez(new Float64Array(3))
s.hd(r,p,0)
s=t.nx(s)
r=new Float64Array(3)
new A.ez(r).cc(u)
u=new Float64Array(3)
new A.ez(u).cc(q)
q=new Float64Array(3)
new A.ez(q).cc(x)
x=new Float64Array(3)
new A.ez(x).cc(s)
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
q.cc(x)
x=new A.ez(new Float64Array(3))
x.cc(u)
u=new A.ez(new Float64Array(3))
u.cc(s)
s=new A.ez(new Float64Array(3))
s.cc(r)
i=new B.a7_(q,x,u,s)
h=B.dce(i,v)
if(h.l(0,C.U))return w
x=w.a0d().a
u=x[0]
x=x[1]
g=a0.Cv()
u-=h.a*g
x-=h.b*g
f=new A.dl(new Float64Array(16))
f.cc(a0)
s=new A.ez(new Float64Array(3))
s.hd(u,x,0)
f.afn(s)
e=B.dce(i,B.ddL(f,d.gVy()))
if(e.l(0,C.U))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.dl(new Float64Array(16))
x.cc(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.dl(new Float64Array(16))
s.cc(a0)
r=new A.ez(new Float64Array(3))
r.hd(u,x,0)
s.afn(r)
return s},
a57(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dl(new Float64Array(16))
x.cc(d)
return x}w=q.gdY().a.Cv()
x=q.gVy()
v=q.gQV()
u=q.gVy()
t=q.gQV()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ag(s,t.ax,t.at)/w
x=new A.dl(new Float64Array(16))
x.cc(d)
x.nD(r,r,r,1)
return x},
b8F(d,e,f){var x,w,v,u
if(e===0){x=new A.dl(new Float64Array(16))
x.cc(d)
return x}w=this.gdY().nw(f)
x=new A.dl(new Float64Array(16))
x.cc(d)
v=w.a
u=w.b
x.eB(v,u,0,1)
x.tW(-e)
x.eB(-v,-u,0,1)
return x},
S6(d){var x
A:{x=!0
if(D.cnT===d){x=!1
break A}if(D.A6===d){this.a.toString
break A}if(D.tN===d||d==null){this.a.toString
break A}x=null}return x},
am1(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.A6
else return D.tN},
bam(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d5(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a_(0,v.gSz())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d5(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a_(0,v.gSF())
v.w=null}v.Q=v.ch=null
v.at=v.gdY().a.Cv()
v.as=v.gdY().nw(d.b)
v.ax=v.ay},
bao(d){var x,w,v,u,t,s,r=this,q=r.gdY().a.Cv(),p=r.x=d.c,o=r.gdY().nw(p),n=r.ch
if(n===D.tN)n=r.ch=r.am1(d)
else if(n==null){n=r.am1(d)
r.ch=n}if(!r.S6(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdY().sv(0,r.a57(r.gdY().a,n*d.d/q))
x=r.gdY().nw(p)
n=r.gdY()
w=r.gdY().a
v=r.as
v.toString
n.sv(0,r.DX(w,x.aA(0,v)))
u=r.gdY().nw(p)
p=r.as
p.toString
if(!B.cZl(p).l(0,B.cZl(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdY().sv(0,r.b8F(r.gdY().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dFd(n,o)}n=r.as
n.toString
s=o.aA(0,n)
r.gdY().sv(0,r.DX(r.gdY().a,s))
r.as=r.gdY().nw(p)
break}r.a.toString},
bak(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a_(0,l.gSz())
x=l.w
if(x!=null)x.a.a_(0,l.gSF())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.S6(x)){l.Q=null
return}A:{if(D.tN===x){x=d.a.a
if(x.gep()<50){l.Q=null
return}w=l.gdY().a.a0d().a
v=w[0]
w=w[1]
l.a.toString
u=A.b7N(0.0000135,v,x.a,0)
l.a.toString
t=A.b7N(0.0000135,w,x.b,0)
x=x.gep()
l.a.toString
s=B.dco(x,0.0000135,10)
x=u.gFW()
r=t.gFW()
q=y.A
p=q.i("hn<bw.T>")
o=l.y
l.r=new A.bm(o,new A.hn(new A.kk(C.lv),new A.bC(new A.M(v,w),new A.M(x,r),q),p),p.i("bm<bw.T>"))
o.e=A.e4(0,0,0,C.k.aK(s*1000),0,0)
o.an(0,l.gSz())
l.y.co(0)
break A}if(D.A6===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdY().a.Cv()
l.a.toString
m=A.b7N(0.0026999999999999997,n,x/10,0)
l.a.toString
s=B.dco(w,0.0000135,0.1)
x=m.jL(0,s)
w=y.f
v=w.i("hn<bw.T>")
r=l.z
l.w=new A.bm(r,new A.hn(new A.kk(C.lv),new A.bC(n,x,w),v),v.i("bm<bw.T>"))
r.e=A.e4(0,0,0,C.k.aK(s*1000),0,0)
r.an(0,l.gSF())
l.z.co(0)
break A}break A}},
b74(d){var x,w,v,u,t,s,r,q=this,p=d.gh7(),o=d.gbC(d)
if(y.l.b(d)){x=d.ge0(d)===C.f1
if(x)q.a.toString
if(x){q.a.toString
x=o.ak(0,d.gud())
w=d.gud()
v=A.LU(d.gdW(d),null,w,x)
if(!q.S6(D.tN)){q.a.toString
return}u=q.gdY().nw(p)
t=q.gdY().nw(p.aA(0,v))
q.gdY().sv(0,q.DX(q.gdY().a,t.aA(0,u)))
q.a.toString
return}if(d.gud().b===0)return
x=d.gud()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gke(d)
else return
q.a.toString
if(!q.S6(D.A6))return
u=q.gdY().nw(p)
q.gdY().sv(0,q.a57(q.gdY().a,s))
r=q.gdY().nw(p)
q.gdY().sv(0,q.DX(q.gdY().a,r.aA(0,u)))
q.a.toString},
b3w(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a_(0,r.gSz())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdY().a.a0d().a
x=q[0]
q=q[1]
w=r.gdY()
v=r.gdY().a
u=r.gdY()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DX(v,u.nw(s.aD(0,t.gv(t))).aA(0,r.gdY().nw(new A.M(x,q)))))},
b59(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a_(0,s.gSF())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aD(0,r.gv(r))
r=s.gdY().a.Cv()
x=s.gdY()
v=s.x
v===$&&A.b()
u=x.nw(v)
s.gdY().sv(0,s.a57(s.gdY().a,w/r))
t=s.gdY().nw(s.x)
s.gdY().sv(0,s.DX(s.gdY().a,t.aA(0,u)))},
b6d(){this.p(new B.c5I())},
ad(){var x=this,w=null
x.ar()
x.y=A.cE(w,w,w,1,w,x)
x.z=A.cE(w,w,w,1,w,x)
x.gdY().an(0,x.gany())},
ba(d){this.bz(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdY().a_(0,x.gany())
x.a.toString
w=x.gdY()
w.Y$=$.aa()
w.W$=0
x.aPV()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdY().a
w=u.a.w
v=new B.aIk(w,u.e,C.z,!0,x,t,t)
return A.EB(C.fY,A.cR(C.bN,v,C.Y,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gbaj(),u.gbal(),u.gban(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.M(0,-0.005)),u.f,t,t,t,u.gb73(),t)}}
B.aIk.prototype={
u(d){var x=this,w=A.Nu(x.w,new A.hh(x.c,x.d),null,x.r,!0)
return A.x0(w,x.e,null)}}
B.aBb.prototype={
nw(d){var x=this.a,w=new A.dl(new Float64Array(16))
if(w.lf(x)===0)A.ak(A.h0(x,"other","Matrix cannot be inverted"))
x=new A.ez(new Float64Array(3))
x.hd(d.a,d.b,0)
x=w.nx(x).a
return new A.M(x[0],x[1])}}
B.adU.prototype={
I(){return"_GestureType."+this.b}}
B.bl1.prototype={
I(){return"PanAxis."+this.b}}
B.akf.prototype={
bU(){this.cA()
this.d3()
this.h_()},
m(){var x=this,w=x.bG$
if(w!=null)w.a_(0,x.gfJ())
x.bG$=null
x.a6()}}
B.a7_.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a7_&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.at(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a8e)","~(a8f)","~(Vi)","~(mc)"])
B.c5I.prototype={
$0(){},
$S:0};(function aliases(){var x=B.akf.prototype
x.aPV=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aew.prototype,"gbal","bam",1)
x(v,"gban","bao",2)
x(v,"gbaj","bak",3)
x(v,"gb73","b74",4)
w(v,"gSz","b3w",0)
w(v,"gSF","b59",0)
w(v,"gany","b6d",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Ki,A.G)
w(B.akf,A.Y)
w(B.aew,B.akf)
w(B.c5I,A.bR)
w(B.aIk,A.J)
w(B.aBb,A.d3)
v(A.f8,[B.adU,B.bl1])
w(B.a7_,A.L)
x(B.akf,A.hP)})()
A.bq(b.typeUniverse,JSON.parse('{"Ki":{"G":[],"e":[],"f":[]},"aew":{"Y":["Ki"]},"aIk":{"J":[],"e":[],"f":[]},"aBb":{"d3":["dl"],"aT":[]}}'))
var y={z:A.w("c6<Y<G>>"),B:A.w("LY"),l:A.w("Ft"),g:A.w("ai"),A:A.w("bC<M>"),f:A.w("bC<S>")};(function constants(){D.PL=new A.b7(C.lQ,20,C.t,null,null,null)
D.crw=new B.bl1(3,"free")
D.tN=new B.adU(0,"pan")
D.A6=new B.adU(1,"scale")
D.cnT=new B.adU(2,"rotate")})()};
(a=>{a["qV5IyUZIS3agXzCnzrjnNm1l33k="]=a.current})($__dart_deferred_initializers__);