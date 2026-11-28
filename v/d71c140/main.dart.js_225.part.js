((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cTh(d,e,f,g){return new B.K9(d,e,f,g,null)},
bcu(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.av(0,e)
w=f.av(0,e)
return e.ah(0,w.rn(A.ag(x.MO(w)/t,0,1)))},
dph(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.av(0,q),o=e.b,n=o.av(0,q),m=e.d,l=m.av(0,q),k=p.MO(n),j=n.MO(n),i=p.MO(l),h=l.MO(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bcu(d,q,o),B.bcu(d,o,x),B.bcu(d,x,m),B.bcu(d,m,q)]
v=A.dl()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bf()},
dvO(){var x=A.hp()
return new B.aAS(x,$.ad())},
d9y(d,e,f){return Math.log(f/d)/Math.log(e/100)},
daU(d,e){var x,w,v,u,t,s,r=new A.dk(new Float64Array(16))
r.cd(d)
r.le(r)
x=e.a
w=e.b
v=new A.ey(new Float64Array(3))
v.hc(x,w,0)
v=r.nw(v)
u=e.c
t=new A.ey(new Float64Array(3))
t.hc(u,w,0)
t=r.nw(t)
w=e.d
s=new A.ey(new Float64Array(3))
s.hc(u,w,0)
s=r.nw(s)
u=new A.ey(new Float64Array(3))
u.hc(x,w,0)
u=r.nw(u)
x=new A.ey(new Float64Array(3))
x.cd(v)
w=new A.ey(new Float64Array(3))
w.cd(t)
v=new A.ey(new Float64Array(3))
v.cd(s)
t=new A.ey(new Float64Array(3))
t.cd(u)
return new B.a6O(x,w,v,t)},
d9p(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.S,w=0;w<4;++w){v=r[w]
u=B.dph(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.L(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.L(x.a,t)}return B.cWx(x)},
cWx(d){return new A.L(A.iX(C.k.a8(d.a,9)),A.iX(C.k.a8(d.b,9)))},
dCi(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bt:C.a2},
K9:function K9(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
aeh:function aeh(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.ev$=f
_.bG$=g
_.c=_.a=null},
c41:function c41(){},
aHW:function aHW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAS:function aAS(d,e){var _=this
_.a=d
_.W$=0
_.Z$=e
_.aH$=_.bn$=0},
adH:function adH(d,e){this.a=d
this.b=e},
bks:function bks(d,e){this.a=d
this.b=e},
ak_:function ak_(){},
a6O:function a6O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[176],B)
D=c[446]
B.K9.prototype={
P(){var x=null,w=y.z
return new B.aeh(new A.c3(x,w),new A.c3(x,w),x,x)}}
B.aeh.prototype={
gdX(){var x=this.d
if(x===$){this.a.toString
x=B.dvO()
this.d=x}return x},
gQC(){var x,w=$.az.ac$.x.h(0,this.e).gaP()
w.toString
x=y.g.a(w).gN(0)
return this.a.f.Nt(new A.ae(0,0,0+x.a,0+x.b))},
gV6(){var x=$.az.ac$.x.h(0,this.f).gaP()
x.toString
x=y.g.a(x).gN(0)
return new A.ae(0,0,0+x.a,0+x.b)},
DK(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.S)){x=new A.dk(new Float64Array(16))
x.cd(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dk(new Float64Array(16))
w.cd(a0)
w.eA(a1.a,a1.b,0,1)
v=B.daU(w,d.gV6())
if(d.gQC().gaAf(0))return w
x=d.gQC()
u=d.ay
t=A.hp()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.eA(q/2,o/2,0,1)
t.tU(u)
t.eA(-q/2,-o/2,0,1)
u=new A.ey(new Float64Array(3))
u.hc(r,x,0)
u=t.nw(u)
q=new A.ey(new Float64Array(3))
q.hc(s,x,0)
q=t.nw(q)
x=new A.ey(new Float64Array(3))
x.hc(s,p,0)
x=t.nw(x)
s=new A.ey(new Float64Array(3))
s.hc(r,p,0)
s=t.nw(s)
r=new Float64Array(3)
new A.ey(r).cd(u)
u=new Float64Array(3)
new A.ey(u).cd(q)
q=new Float64Array(3)
new A.ey(q).cd(x)
x=new Float64Array(3)
new A.ey(x).cd(s)
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
x.hc(m,l,0)
u=new A.ey(new Float64Array(3))
u.hc(k,l,0)
s=new A.ey(new Float64Array(3))
s.hc(k,j,0)
r=new A.ey(new Float64Array(3))
r.hc(m,j,0)
q=new A.ey(new Float64Array(3))
q.cd(x)
x=new A.ey(new Float64Array(3))
x.cd(u)
u=new A.ey(new Float64Array(3))
u.cd(s)
s=new A.ey(new Float64Array(3))
s.cd(r)
i=new B.a6O(q,x,u,s)
h=B.d9p(i,v)
if(h.l(0,C.S))return w
x=w.a_K().a
u=x[0]
x=x[1]
g=a0.Ck()
u-=h.a*g
x-=h.b*g
f=new A.dk(new Float64Array(16))
f.cd(a0)
s=new A.ey(new Float64Array(3))
s.hc(u,x,0)
f.aeO(s)
e=B.d9p(i,B.daU(f,d.gV6()))
if(e.l(0,C.S))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.dk(new Float64Array(16))
x.cd(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.dk(new Float64Array(16))
s.cd(a0)
r=new A.ey(new Float64Array(3))
r.hc(u,x,0)
s.aeO(r)
return s},
a4y(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dk(new Float64Array(16))
x.cd(d)
return x}w=q.gdX().a.Ck()
x=q.gV6()
v=q.gQC()
u=q.gV6()
t=q.gQC()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ag(s,t.ax,t.at)/w
x=new A.dk(new Float64Array(16))
x.cd(d)
x.nC(r,r,r,1)
return x},
b7Y(d,e,f){var x,w,v,u
if(e===0){x=new A.dk(new Float64Array(16))
x.cd(d)
return x}w=this.gdX().nv(f)
x=new A.dk(new Float64Array(16))
x.cd(d)
v=w.a
u=w.b
x.eA(v,u,0,1)
x.tU(-e)
x.eA(-v,-u,0,1)
return x},
RL(d){var x
A:{x=!0
if(D.cnm===d){x=!1
break A}if(D.zV===d){this.a.toString
break A}if(D.tD===d||d==null){this.a.toString
break A}x=null}return x},
alr(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zV
else return D.tD},
b9F(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d3(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a_(0,v.gSd())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d3(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a_(0,v.gSj())
v.w=null}v.Q=v.ch=null
v.at=v.gdX().a.Ck()
v.as=v.gdX().nv(d.b)
v.ax=v.ay},
b9H(d){var x,w,v,u,t,s,r=this,q=r.gdX().a.Ck(),p=r.x=d.c,o=r.gdX().nv(p),n=r.ch
if(n===D.tD)n=r.ch=r.alr(d)
else if(n==null){n=r.alr(d)
r.ch=n}if(!r.RL(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdX().sv(0,r.a4y(r.gdX().a,n*d.d/q))
x=r.gdX().nv(p)
n=r.gdX()
w=r.gdX().a
v=r.as
v.toString
n.sv(0,r.DK(w,x.av(0,v)))
u=r.gdX().nv(p)
p=r.as
p.toString
if(!B.cWx(p).l(0,B.cWx(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdX().sv(0,r.b7Y(r.gdX().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dCi(n,o)}n=r.as
n.toString
s=o.av(0,n)
r.gdX().sv(0,r.DK(r.gdX().a,s))
r.as=r.gdX().nv(p)
break}r.a.toString},
b9D(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a_(0,l.gSd())
x=l.w
if(x!=null)x.a.a_(0,l.gSj())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.RL(x)){l.Q=null
return}A:{if(D.tD===x){x=d.a.a
if(x.gem()<50){l.Q=null
return}w=l.gdX().a.a_K().a
v=w[0]
w=w[1]
l.a.toString
u=A.b7d(0.0000135,v,x.a,0)
l.a.toString
t=A.b7d(0.0000135,w,x.b,0)
x=x.gem()
l.a.toString
s=B.d9y(x,0.0000135,10)
x=u.gFI()
r=t.gFI()
q=y.A
p=q.i("hk<bt.T>")
o=l.y
l.r=new A.bk(o,new A.hk(new A.kj(C.lo),new A.bz(new A.L(v,w),new A.L(x,r),q),p),p.i("bk<bt.T>"))
o.e=A.e6(0,0,0,C.k.aK(s*1000),0,0)
o.am(0,l.gSd())
l.y.cp(0)
break A}if(D.zV===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdX().a.Ck()
l.a.toString
m=A.b7d(0.0026999999999999997,n,x/10,0)
l.a.toString
s=B.d9y(w,0.0000135,0.1)
x=m.jL(0,s)
w=y.f
v=w.i("hk<bt.T>")
r=l.z
l.w=new A.bk(r,new A.hk(new A.kj(C.lo),new A.bz(n,x,w),v),v.i("bk<bt.T>"))
r.e=A.e6(0,0,0,C.k.aK(s*1000),0,0)
r.am(0,l.gSj())
l.z.cp(0)
break A}break A}},
b6n(d){var x,w,v,u,t,s,r,q=this,p=d.gh6(),o=d.gbA(d)
if(y.l.b(d)){x=d.ge_(d)===C.eY
if(x)q.a.toString
if(x){q.a.toString
x=o.ah(0,d.gua())
w=d.gua()
v=A.LM(d.gdV(d),null,w,x)
if(!q.RL(D.tD)){q.a.toString
return}u=q.gdX().nv(p)
t=q.gdX().nv(p.av(0,v))
q.gdX().sv(0,q.DK(q.gdX().a,t.av(0,u)))
q.a.toString
return}if(d.gua().b===0)return
x=d.gua()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gkd(d)
else return
q.a.toString
if(!q.RL(D.zV))return
u=q.gdX().nv(p)
q.gdX().sv(0,q.a4y(q.gdX().a,s))
r=q.gdX().nv(p)
q.gdX().sv(0,q.DK(q.gdX().a,r.av(0,u)))
q.a.toString},
b2O(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a_(0,r.gSd())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdX().a.a_K().a
x=q[0]
q=q[1]
w=r.gdX()
v=r.gdX().a
u=r.gdX()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DK(v,u.nv(s.aC(0,t.gv(t))).av(0,r.gdX().nv(new A.L(x,q)))))},
b4r(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a_(0,s.gSj())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aC(0,r.gv(r))
r=s.gdX().a.Ck()
x=s.gdX()
v=s.x
v===$&&A.b()
u=x.nv(v)
s.gdX().sv(0,s.a4y(s.gdX().a,w/r))
t=s.gdX().nv(s.x)
s.gdX().sv(0,s.DK(s.gdX().a,t.av(0,u)))},
b5v(){this.q(new B.c41())},
ak(){var x=this,w=null
x.aD()
x.y=A.cD(w,w,w,1,w,x)
x.z=A.cD(w,w,w,1,w,x)
x.gdX().am(0,x.gamZ())},
ba(d){this.bw(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdX().a_(0,x.gamZ())
x.a.toString
w=x.gdX()
w.Z$=$.ad()
w.W$=0
x.aPh()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdX().a
w=u.a.w
v=new B.aHW(w,u.e,C.z,!0,x,t,t)
return A.Ev(C.fV,A.db(C.bU,v,C.a0,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gb9C(),u.gb9E(),u.gb9G(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.L(0,-0.005)),u.f,t,t,t,u.gb6m(),t)}}
B.aHW.prototype={
u(d){var x=this,w=A.Nm(x.w,new A.he(x.c,x.d),null,x.r,!0)
return A.wX(w,x.e,null)}}
B.aAS.prototype={
nv(d){var x=this.a,w=new A.dk(new Float64Array(16))
if(w.le(x)===0)A.aj(A.fW(x,"other","Matrix cannot be inverted"))
x=new A.ey(new Float64Array(3))
x.hc(d.a,d.b,0)
x=w.nw(x).a
return new A.L(x[0],x[1])}}
B.adH.prototype={
I(){return"_GestureType."+this.b}}
B.bks.prototype={
I(){return"PanAxis."+this.b}}
B.ak_.prototype={
bU(){this.cB()
this.d0()
this.fZ()},
m(){var x=this,w=x.bG$
if(w!=null)w.a_(0,x.gfJ())
x.bG$=null
x.a6()}}
B.a6O.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a6O&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.at(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a81)","~(a82)","~(V2)","~(mc)"])
B.c41.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ak_.prototype
x.aPh=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aeh.prototype,"gb9E","b9F",1)
x(v,"gb9G","b9H",2)
x(v,"gb9C","b9D",3)
x(v,"gb6m","b6n",4)
w(v,"gSd","b2O",0)
w(v,"gSj","b4r",0)
w(v,"gamZ","b5v",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.K9,A.G)
w(B.ak_,A.a_)
w(B.aeh,B.ak_)
w(B.c41,A.bS)
w(B.aHW,A.I)
w(B.aAS,A.d7)
v(A.f6,[B.adH,B.bks])
w(B.a6O,A.K)
x(B.ak_,A.hP)})()
A.bp(b.typeUniverse,JSON.parse('{"K9":{"G":[],"e":[],"f":[]},"aeh":{"a_":["K9"]},"aHW":{"I":[],"e":[],"f":[]},"aAS":{"d7":["dk"],"aS":[]}}'))
var y={z:A.w("c3<a_<G>>"),B:A.w("LQ"),l:A.w("Fn"),g:A.w("ah"),A:A.w("bz<L>"),f:A.w("bz<R>")};(function constants(){D.cqZ=new B.bks(3,"free")
D.tD=new B.adH(0,"pan")
D.zV=new B.adH(1,"scale")
D.cnm=new B.adH(2,"rotate")})()};
(a=>{a["0/qNMNU6ah/uL9RbVUE40OxPgcc="]=a.current})($__dart_deferred_initializers__);