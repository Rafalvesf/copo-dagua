((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cRO(d,e,f,g){return new B.K4(d,e,f,g,null)},
bbV(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.av(0,e)
w=f.av(0,e)
return e.ag(0,w.rp(A.ag(x.MQ(w)/t,0,1)))},
dnv(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.av(0,q),o=e.b,n=o.av(0,q),m=e.d,l=m.av(0,q),k=p.MQ(n),j=n.MQ(n),i=p.MQ(l),h=l.MQ(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bbV(d,q,o),B.bbV(d,o,x),B.bbV(d,x,m),B.bbV(d,m,q)]
v=A.di()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bf()},
du2(){var x=A.hn()
return new B.aAl(x,$.ac())},
d7Z(d,e,f){return Math.log(f/d)/Math.log(e/100)},
d9h(d,e){var x,w,v,u,t,s,r=new A.dg(new Float64Array(16))
r.cc(d)
r.ld(r)
x=e.a
w=e.b
v=new A.ey(new Float64Array(3))
v.hb(x,w,0)
v=r.nw(v)
u=e.c
t=new A.ey(new Float64Array(3))
t.hb(u,w,0)
t=r.nw(t)
w=e.d
s=new A.ey(new Float64Array(3))
s.hb(u,w,0)
s=r.nw(s)
u=new A.ey(new Float64Array(3))
u.hb(x,w,0)
u=r.nw(u)
x=new A.ey(new Float64Array(3))
x.cc(v)
w=new A.ey(new Float64Array(3))
w.cc(t)
v=new A.ey(new Float64Array(3))
v.cc(s)
t=new A.ey(new Float64Array(3))
t.cc(u)
return new B.a6y(x,w,v,t)},
d7Q(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.R,w=0;w<4;++w){v=r[w]
u=B.dnv(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.I(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.I(x.a,t)}return B.cV0(x)},
cV0(d){return new A.I(A.iU(C.k.a8(d.a,9)),A.iU(C.k.a8(d.b,9)))},
dAu(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bt:C.a1},
K4:function K4(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
adY:function adY(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.ev$=f
_.bF$=g
_.c=_.a=null},
c30:function c30(){},
aHq:function aHq(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAl:function aAl(d,e){var _=this
_.a=d
_.X$=0
_.Z$=e
_.aG$=_.bn$=0},
ado:function ado(d,e){this.a=d
this.b=e},
bjS:function bjS(d,e){this.a=d
this.b=e},
ajz:function ajz(){},
a6y:function a6y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[172],B)
D=c[435]
B.K4.prototype={
P(){var x=null,w=y.z
return new B.adY(new A.c2(x,w),new A.c2(x,w),x,x)}}
B.adY.prototype={
gdX(){var x=this.d
if(x===$){this.a.toString
x=B.du2()
this.d=x}return x},
gQG(){var x,w=$.az.ac$.x.h(0,this.e).gaO()
w.toString
x=y.g.a(w).gN(0)
return this.a.f.Nv(new A.ad(0,0,0+x.a,0+x.b))},
gV7(){var x=$.az.ac$.x.h(0,this.f).gaO()
x.toString
x=y.g.a(x).gN(0)
return new A.ad(0,0,0+x.a,0+x.b)},
DL(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.R)){x=new A.dg(new Float64Array(16))
x.cc(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dg(new Float64Array(16))
w.cc(a0)
w.eA(a1.a,a1.b,0,1)
v=B.d9h(w,d.gV7())
if(d.gQG().gaA7(0))return w
x=d.gQG()
u=d.ay
t=A.hn()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.eA(q/2,o/2,0,1)
t.tW(u)
t.eA(-q/2,-o/2,0,1)
u=new A.ey(new Float64Array(3))
u.hb(r,x,0)
u=t.nw(u)
q=new A.ey(new Float64Array(3))
q.hb(s,x,0)
q=t.nw(q)
x=new A.ey(new Float64Array(3))
x.hb(s,p,0)
x=t.nw(x)
s=new A.ey(new Float64Array(3))
s.hb(r,p,0)
s=t.nw(s)
r=new Float64Array(3)
new A.ey(r).cc(u)
u=new Float64Array(3)
new A.ey(u).cc(q)
q=new Float64Array(3)
new A.ey(q).cc(x)
x=new Float64Array(3)
new A.ey(x).cc(s)
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
x=new A.ey(new Float64Array(3))
x.hb(m,l,0)
u=new A.ey(new Float64Array(3))
u.hb(k,l,0)
s=new A.ey(new Float64Array(3))
s.hb(k,j,0)
r=new A.ey(new Float64Array(3))
r.hb(m,j,0)
q=new A.ey(new Float64Array(3))
q.cc(x)
x=new A.ey(new Float64Array(3))
x.cc(u)
u=new A.ey(new Float64Array(3))
u.cc(s)
s=new A.ey(new Float64Array(3))
s.cc(r)
i=new B.a6y(q,x,u,s)
h=B.d7Q(i,v)
if(h.l(0,C.R))return w
x=w.a_J().a
u=x[0]
x=x[1]
g=a0.Cm()
u-=h.a*g
x-=h.b*g
f=new A.dg(new Float64Array(16))
f.cc(a0)
s=new A.ey(new Float64Array(3))
s.hb(u,x,0)
f.aeD(s)
e=B.d7Q(i,B.d9h(f,d.gV7()))
if(e.l(0,C.R))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.dg(new Float64Array(16))
x.cc(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.dg(new Float64Array(16))
s.cc(a0)
r=new A.ey(new Float64Array(3))
r.hb(u,x,0)
s.aeD(r)
return s},
a4r(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dg(new Float64Array(16))
x.cc(d)
return x}w=q.gdX().a.Cm()
x=q.gV7()
v=q.gQG()
u=q.gV7()
t=q.gQG()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ag(s,t.ax,t.at)/w
x=new A.dg(new Float64Array(16))
x.cc(d)
x.nC(r,r,r,1)
return x},
b7B(d,e,f){var x,w,v,u
if(e===0){x=new A.dg(new Float64Array(16))
x.cc(d)
return x}w=this.gdX().nv(f)
x=new A.dg(new Float64Array(16))
x.cc(d)
v=w.a
u=w.b
x.eA(v,u,0,1)
x.tW(-e)
x.eA(-v,-u,0,1)
return x},
RP(d){var x
A:{x=!0
if(D.cm0===d){x=!1
break A}if(D.zH===d){this.a.toString
break A}if(D.tp===d||d==null){this.a.toString
break A}x=null}return x},
alf(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zH
else return D.tp},
b9i(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d2(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a_(0,v.gSg())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d2(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a_(0,v.gSm())
v.w=null}v.Q=v.ch=null
v.at=v.gdX().a.Cm()
v.as=v.gdX().nv(d.b)
v.ax=v.ay},
b9k(d){var x,w,v,u,t,s,r=this,q=r.gdX().a.Cm(),p=r.x=d.c,o=r.gdX().nv(p),n=r.ch
if(n===D.tp)n=r.ch=r.alf(d)
else if(n==null){n=r.alf(d)
r.ch=n}if(!r.RP(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdX().sv(0,r.a4r(r.gdX().a,n*d.d/q))
x=r.gdX().nv(p)
n=r.gdX()
w=r.gdX().a
v=r.as
v.toString
n.sv(0,r.DL(w,x.av(0,v)))
u=r.gdX().nv(p)
p=r.as
p.toString
if(!B.cV0(p).l(0,B.cV0(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdX().sv(0,r.b7B(r.gdX().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dAu(n,o)}n=r.as
n.toString
s=o.av(0,n)
r.gdX().sv(0,r.DL(r.gdX().a,s))
r.as=r.gdX().nv(p)
break}r.a.toString},
b9g(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a_(0,l.gSg())
x=l.w
if(x!=null)x.a.a_(0,l.gSm())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.RP(x)){l.Q=null
return}A:{if(D.tp===x){x=d.a.a
if(x.gen()<50){l.Q=null
return}w=l.gdX().a.a_J().a
v=w[0]
w=w[1]
l.a.toString
u=A.b6E(0.0000135,v,x.a,0)
l.a.toString
t=A.b6E(0.0000135,w,x.b,0)
x=x.gen()
l.a.toString
s=B.d7Z(x,0.0000135,10)
x=u.gFJ()
r=t.gFJ()
q=y.A
p=q.i("hj<bt.T>")
o=l.y
l.r=new A.bj(o,new A.hj(new A.kg(C.lh),new A.bz(new A.I(v,w),new A.I(x,r),q),p),p.i("bj<bt.T>"))
o.e=A.ec(0,0,0,C.k.aK(s*1000),0,0)
o.am(0,l.gSg())
l.y.co(0)
break A}if(D.zH===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdX().a.Cm()
l.a.toString
m=A.b6E(0.0026999999999999997,n,x/10,0)
l.a.toString
s=B.d7Z(w,0.0000135,0.1)
x=m.jM(0,s)
w=y.f
v=w.i("hj<bt.T>")
r=l.z
l.w=new A.bj(r,new A.hj(new A.kg(C.lh),new A.bz(n,x,w),v),v.i("bj<bt.T>"))
r.e=A.ec(0,0,0,C.k.aK(s*1000),0,0)
r.am(0,l.gSm())
l.z.co(0)
break A}break A}},
b62(d){var x,w,v,u,t,s,r,q=this,p=d.gh5(),o=d.gbA(d)
if(y.l.b(d)){x=d.ge_(d)===C.eV
if(x)q.a.toString
if(x){q.a.toString
x=o.ag(0,d.gud())
w=d.gud()
v=A.LE(d.gdV(d),null,w,x)
if(!q.RP(D.tp)){q.a.toString
return}u=q.gdX().nv(p)
t=q.gdX().nv(p.av(0,v))
q.gdX().sv(0,q.DL(q.gdX().a,t.av(0,u)))
q.a.toString
return}if(d.gud().b===0)return
x=d.gud()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.ghG(d)
else return
q.a.toString
if(!q.RP(D.zH))return
u=q.gdX().nv(p)
q.gdX().sv(0,q.a4r(q.gdX().a,s))
r=q.gdX().nv(p)
q.gdX().sv(0,q.DL(q.gdX().a,r.av(0,u)))
q.a.toString},
b2u(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a_(0,r.gSg())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdX().a.a_J().a
x=q[0]
q=q[1]
w=r.gdX()
v=r.gdX().a
u=r.gdX()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DL(v,u.nv(s.aC(0,t.gv(t))).av(0,r.gdX().nv(new A.I(x,q)))))},
b47(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a_(0,s.gSm())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aC(0,r.gv(r))
r=s.gdX().a.Cm()
x=s.gdX()
v=s.x
v===$&&A.b()
u=x.nv(v)
s.gdX().sv(0,s.a4r(s.gdX().a,w/r))
t=s.gdX().nv(s.x)
s.gdX().sv(0,s.DL(s.gdX().a,t.av(0,u)))},
b5b(){this.q(new B.c30())},
al(){var x=this,w=null
x.aH()
x.y=A.cB(w,w,w,1,w,x)
x.z=A.cB(w,w,w,1,w,x)
x.gdX().am(0,x.gamS())},
bb(d){this.bw(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdX().a_(0,x.gamS())
x.a.toString
w=x.gdX()
w.Z$=$.ac()
w.X$=0
x.aP7()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdX().a
w=u.a.w
v=new B.aHq(w,u.e,C.z,!0,x,t,t)
return A.Er(C.fS,A.dP(C.bY,v,C.a2,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gb9f(),u.gb9h(),u.gb9j(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.I(0,-0.005)),u.f,t,t,t,u.gb61(),t)}}
B.aHq.prototype={
u(d){var x=this,w=A.Nf(x.w,new A.hd(x.c,x.d),null,x.r,!0)
return A.wT(w,x.e,null)}}
B.aAl.prototype={
nv(d){var x=this.a,w=new A.dg(new Float64Array(16))
if(w.ld(x)===0)A.aj(A.fV(x,"other","Matrix cannot be inverted"))
x=new A.ey(new Float64Array(3))
x.hb(d.a,d.b,0)
x=w.nw(x).a
return new A.I(x[0],x[1])}}
B.ado.prototype={
I(){return"_GestureType."+this.b}}
B.bjS.prototype={
I(){return"PanAxis."+this.b}}
B.ajz.prototype={
bU(){this.cA()
this.d0()
this.h_()},
m(){var x=this,w=x.bF$
if(w!=null)w.a_(0,x.gfJ())
x.bF$=null
x.a7()}}
B.a6y.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a6y&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gC(d){var x=this
return A.at(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a7M)","~(a7N)","~(UW)","~(mc)"])
B.c30.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ajz.prototype
x.aP7=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.adY.prototype,"gb9h","b9i",1)
x(v,"gb9j","b9k",2)
x(v,"gb9f","b9g",3)
x(v,"gb61","b62",4)
w(v,"gSg","b2u",0)
w(v,"gSm","b47",0)
w(v,"gamS","b5b",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.K4,A.J)
w(B.ajz,A.a_)
w(B.adY,B.ajz)
w(B.c30,A.bR)
w(B.aHq,A.L)
w(B.aAl,A.d6)
v(A.fr,[B.ado,B.bjS])
w(B.a6y,A.H)
x(B.ajz,A.hN)})()
A.br(b.typeUniverse,JSON.parse('{"K4":{"J":[],"e":[],"f":[]},"adY":{"a_":["K4"]},"aHq":{"L":[],"e":[],"f":[]},"aAl":{"d6":["dg"],"aR":[]}}'))
var y={z:A.w("c2<a_<J>>"),B:A.w("LI"),l:A.w("Fj"),g:A.w("ah"),A:A.w("bz<I>"),f:A.w("bz<P>")};(function constants(){D.cpA=new B.bjS(3,"free")
D.tp=new B.ado(0,"pan")
D.zH=new B.ado(1,"scale")
D.cm0=new B.ado(2,"rotate")})()};
(a=>{a["umvppGnkHeN5t125kUewhfXOTBA="]=a.current})($__dart_deferred_initializers__);