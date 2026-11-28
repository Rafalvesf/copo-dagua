((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cVe(d,e,f,g){return new B.K5(d,e,f,g,null)},
bbQ(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aw(0,e)
w=f.aw(0,e)
return e.am(0,w.r9(A.ak(x.Mw(w)/t,0,1)))},
drs(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aw(0,q),o=e.b,n=o.aw(0,q),m=e.d,l=m.aw(0,q),k=p.Mw(n),j=n.Mw(n),i=p.Mw(l),h=l.Mw(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bbQ(d,q,o),B.bbQ(d,o,x),B.bbQ(d,x,m),B.bbQ(d,m,q)]
v=A.dt()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bf()},
dy4(){var x=A.fU()
return new B.aAy(x,$.aa())},
dbA(d,e,f){return Math.log(f/d)/Math.log(e/100)},
dcW(d,e){var x,w,v,u,t,s,r=new A.dh(new Float64Array(16))
r.c4(d)
r.l6(r)
x=e.a
w=e.b
v=new A.er(new Float64Array(3))
v.h3(x,w,0)
v=r.mL(v)
u=e.c
t=new A.er(new Float64Array(3))
t.h3(u,w,0)
t=r.mL(t)
w=e.d
s=new A.er(new Float64Array(3))
s.h3(u,w,0)
s=r.mL(s)
u=new A.er(new Float64Array(3))
u.h3(x,w,0)
u=r.mL(u)
x=new A.er(new Float64Array(3))
x.c4(v)
w=new A.er(new Float64Array(3))
w.c4(t)
v=new A.er(new Float64Array(3))
v.c4(s)
t=new A.er(new Float64Array(3))
t.c4(u)
return new B.a6L(x,w,v,t)},
dbq(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.T,w=0;w<4;++w){v=r[w]
u=B.drs(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.K(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.K(x.a,t)}return B.cYw(x)},
cYw(d){return new A.K(A.iI(C.k.a8(d.a,9)),A.iI(C.k.a8(d.b,9)))},
dEx(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bJ:C.av},
K5:function K5(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
ae_:function ae_(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.ep$=f
_.bF$=g
_.c=_.a=null},
c4B:function c4B(){},
aHr:function aHr(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAy:function aAy(d,e){var _=this
_.a=d
_.W$=0
_.Z$=e
_.aJ$=_.bv$=0},
adr:function adr(d,e){this.a=d
this.b=e},
bk4:function bk4(d,e){this.a=d
this.b=e},
ajE:function ajE(){},
a6L:function a6L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[175],B)
D=c[427]
B.K5.prototype={
S(){var x=null,w=y.z
return new B.ae_(new A.ck(x,w),new A.ck(x,w),x,x)}}
B.ae_.prototype={
gdW(){var x=this.d
if(x===$){this.a.toString
x=B.dy4()
this.d=x}return x},
gQ9(){var x,w=$.ay.a6$.x.h(0,this.e).gaM()
w.toString
x=y.g.a(w).gM(0)
return this.a.f.N5(new A.ad(0,0,0+x.a,0+x.b))},
gUV(){var x=$.ay.a6$.x.h(0,this.f).gaM()
x.toString
x=y.g.a(x).gM(0)
return new A.ad(0,0,0+x.a,0+x.b)},
Dy(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.T)){x=new A.dh(new Float64Array(16))
x.c4(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dh(new Float64Array(16))
w.c4(a0)
w.e8(a1.a,a1.b,0,1)
v=B.dcW(w,d.gUV())
if(d.gQ9().gazB(0))return w
x=d.gQ9()
u=d.ay
t=A.fU()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.e8(q/2,o/2,0,1)
t.tC(u)
t.e8(-q/2,-o/2,0,1)
u=new A.er(new Float64Array(3))
u.h3(r,x,0)
u=t.mL(u)
q=new A.er(new Float64Array(3))
q.h3(s,x,0)
q=t.mL(q)
x=new A.er(new Float64Array(3))
x.h3(s,p,0)
x=t.mL(x)
s=new A.er(new Float64Array(3))
s.h3(r,p,0)
s=t.mL(s)
r=new Float64Array(3)
new A.er(r).c4(u)
u=new Float64Array(3)
new A.er(u).c4(q)
q=new Float64Array(3)
new A.er(q).c4(x)
x=new Float64Array(3)
new A.er(x).c4(s)
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
x=new A.er(new Float64Array(3))
x.h3(m,l,0)
u=new A.er(new Float64Array(3))
u.h3(k,l,0)
s=new A.er(new Float64Array(3))
s.h3(k,j,0)
r=new A.er(new Float64Array(3))
r.h3(m,j,0)
q=new A.er(new Float64Array(3))
q.c4(x)
x=new A.er(new Float64Array(3))
x.c4(u)
u=new A.er(new Float64Array(3))
u.c4(s)
s=new A.er(new Float64Array(3))
s.c4(r)
i=new B.a6L(q,x,u,s)
h=B.dbq(i,v)
if(h.l(0,C.T))return w
x=w.a_n().a
u=x[0]
x=x[1]
g=a0.Cb()
u-=h.a*g
x-=h.b*g
f=new A.dh(new Float64Array(16))
f.c4(a0)
s=new A.er(new Float64Array(3))
s.h3(u,x,0)
f.aes(s)
e=B.dbq(i,B.dcW(f,d.gUV()))
if(e.l(0,C.T))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.dh(new Float64Array(16))
x.c4(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.dh(new Float64Array(16))
s.c4(a0)
r=new A.er(new Float64Array(3))
r.h3(u,x,0)
s.aes(r)
return s},
a47(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dh(new Float64Array(16))
x.c4(d)
return x}w=q.gdW().a.Cb()
x=q.gUV()
v=q.gQ9()
u=q.gUV()
t=q.gQ9()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ak(s,t.ax,t.at)/w
x=new A.dh(new Float64Array(16))
x.c4(d)
x.mR(r,r,r,1)
return x},
b6q(d,e,f){var x,w,v,u
if(e===0){x=new A.dh(new Float64Array(16))
x.c4(d)
return x}w=this.gdW().nu(f)
x=new A.dh(new Float64Array(16))
x.c4(d)
v=w.a
u=w.b
x.e8(v,u,0,1)
x.tC(-e)
x.e8(-v,-u,0,1)
return x},
Rp(d){var x
A:{x=!0
if(D.clx===d){x=!1
break A}if(D.zF===d){this.a.toString
break A}if(D.th===d||d==null){this.a.toString
break A}x=null}return x},
al3(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zF
else return D.th},
b86(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cZ(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a2(0,v.gRS())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cZ(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a2(0,v.gRY())
v.w=null}v.Q=v.ch=null
v.at=v.gdW().a.Cb()
v.as=v.gdW().nu(d.b)
v.ax=v.ay},
b88(d){var x,w,v,u,t,s,r=this,q=r.gdW().a.Cb(),p=r.x=d.c,o=r.gdW().nu(p),n=r.ch
if(n===D.th)n=r.ch=r.al3(d)
else if(n==null){n=r.al3(d)
r.ch=n}if(!r.Rp(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdW().sv(0,r.a47(r.gdW().a,n*d.d/q))
x=r.gdW().nu(p)
n=r.gdW()
w=r.gdW().a
v=r.as
v.toString
n.sv(0,r.Dy(w,x.aw(0,v)))
u=r.gdW().nu(p)
p=r.as
p.toString
if(!B.cYw(p).l(0,B.cYw(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdW().sv(0,r.b6q(r.gdW().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dEx(n,o)}n=r.as
n.toString
s=o.aw(0,n)
r.gdW().sv(0,r.Dy(r.gdW().a,s))
r.as=r.gdW().nu(p)
break}r.a.toString},
b84(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a2(0,l.gRS())
x=l.w
if(x!=null)x.a.a2(0,l.gRY())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.Rp(x)){l.Q=null
return}A:{if(D.th===x){x=d.a.a
if(x.gev()<50){l.Q=null
return}w=l.gdW().a.a_n().a
v=w[0]
w=w[1]
l.a.toString
u=A.aqH(0.0000135,v,x.a,0,C.fJ)
l.a.toString
t=A.aqH(0.0000135,w,x.b,0,C.fJ)
x=x.gev()
l.a.toString
s=B.dbA(x,0.0000135,10)
x=u.gFu()
r=t.gFu()
q=y.A
p=q.i("hn<by.T>")
o=l.y
l.r=new A.bo(o,new A.hn(new A.l6(C.mP),new A.bF(new A.K(v,w),new A.K(x,r),q),p),p.i("bo<by.T>"))
o.e=A.e9(0,0,0,C.k.aN(s*1000),0,0)
o.an(0,l.gRS())
l.y.cw(0)
break A}if(D.zF===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdW().a.Cb()
l.a.toString
m=A.aqH(0.0026999999999999997,n,x/10,0,C.fJ)
l.a.toString
s=B.dbA(w,0.0000135,0.1)
x=m.ix(0,s)
w=y.f
v=w.i("hn<by.T>")
r=l.z
l.w=new A.bo(r,new A.hn(new A.l6(C.mP),new A.bF(n,x,w),v),v.i("bo<by.T>"))
r.e=A.e9(0,0,0,C.k.aN(s*1000),0,0)
r.an(0,l.gRY())
l.z.cw(0)
break A}break A}},
b4O(d){var x,w,v,u,t,s,r,q=this,p=d.gfZ(),o=d.gby(d)
if(y.l.b(d)){x=d.gdY(d)===C.eY
if(x)q.a.toString
if(x){q.a.toString
x=o.am(0,d.gtU())
w=d.gtU()
v=A.LI(d.gdR(d),null,w,x)
if(!q.Rp(D.th)){q.a.toString
return}u=q.gdW().nu(p)
t=q.gdW().nu(p.aw(0,v))
q.gdW().sv(0,q.Dy(q.gdW().a,t.aw(0,u)))
q.a.toString
return}if(d.gtU().b===0)return
x=d.gtU()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjX(d)
else return
q.a.toString
if(!q.Rp(D.zF))return
u=q.gdW().nu(p)
q.gdW().sv(0,q.a47(q.gdW().a,s))
r=q.gdW().nu(p)
q.gdW().sv(0,q.Dy(q.gdW().a,r.aw(0,u)))
q.a.toString},
b1D(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a2(0,r.gRS())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdW().a.a_n().a
x=q[0]
q=q[1]
w=r.gdW()
v=r.gdW().a
u=r.gdW()
t=r.r
s=t.b
t=t.a
w.sv(0,r.Dy(v,u.nu(s.aH(0,t.gv(t))).aw(0,r.gdW().nu(new A.K(x,q)))))},
b2V(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a2(0,s.gRY())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aH(0,r.gv(r))
r=s.gdW().a.Cb()
x=s.gdW()
v=s.x
v===$&&A.b()
u=x.nu(v)
s.gdW().sv(0,s.a47(s.gdW().a,w/r))
t=s.gdW().nu(s.x)
s.gdW().sv(0,s.Dy(s.gdW().a,t.aw(0,u)))},
b3Z(){this.p(new B.c4B())},
ad(){var x=this,w=null
x.aq()
x.y=A.cI(w,w,w,w,x)
x.z=A.cI(w,w,w,w,x)
x.gdW().an(0,x.gamA())},
bm(d){this.bE(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdW().a2(0,x.gamA())
x.a.toString
w=x.gdW()
w.Z$=$.aa()
w.W$=0
x.aOA()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdW().a
w=u.a.w
v=new B.aHr(w,u.e,C.y,!0,x,t,t)
return A.En(C.fX,A.ct(C.bu,v,C.W,!1,t,t,t,t,t,t,t,t,t,t,u.gb83(),u.gb85(),u.gb87(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.K(0,-0.005)),u.f,t,t,t,u.gb4N(),t)}}
B.aHr.prototype={
u(d){var x=this,w=A.Nl(x.w,new A.hf(x.c,x.d),null,x.r,!0)
return A.wT(w,x.e,null)}}
B.aAy.prototype={
nu(d){var x=this.a,w=new A.dh(new Float64Array(16))
if(w.l6(x)===0)A.al(A.fZ(x,"other","Matrix cannot be inverted"))
x=new A.er(new Float64Array(3))
x.h3(d.a,d.b,0)
x=w.mL(x).a
return new A.K(x[0],x[1])}}
B.adr.prototype={
I(){return"_GestureType."+this.b}}
B.bk4.prototype={
I(){return"PanAxis."+this.b}}
B.ajE.prototype={
bV(){this.cH()
this.d6()
this.fS()},
m(){var x=this,w=x.bF$
if(w!=null)w.a2(0,x.gfE())
x.bF$=null
x.a7()}}
B.a6L.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a6L&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.ar(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a7Y)","~(a7Z)","~(V4)","~(mg)"])
B.c4B.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ajE.prototype
x.aOA=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.ae_.prototype,"gb85","b86",1)
x(v,"gb87","b88",2)
x(v,"gb83","b84",3)
x(v,"gb4N","b4O",4)
w(v,"gRS","b1D",0)
w(v,"gRY","b2V",0)
w(v,"gamA","b3Z",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.K5,A.H)
w(B.ajE,A.a1)
w(B.ae_,B.ajE)
w(B.c4B,A.bN)
w(B.aHr,A.M)
w(B.aAy,A.d1)
v(A.ff,[B.adr,B.bk4])
w(B.a6L,A.L)
x(B.ajE,A.hQ)})()
A.bt(b.typeUniverse,JSON.parse('{"K5":{"H":[],"e":[],"f":[]},"ae_":{"a1":["K5"]},"aHr":{"M":[],"e":[],"f":[]},"aAy":{"d1":["dh"],"aV":[]}}'))
var y={z:A.z("ck<a1<H>>"),B:A.z("LM"),l:A.z("Ff"),g:A.z("aj"),A:A.z("bF<K>"),f:A.z("bF<T>")};(function constants(){D.OT=new A.b7(C.lx,20,C.t,null,null,null)
D.cpb=new B.bk4(3,"free")
D.th=new B.adr(0,"pan")
D.zF=new B.adr(1,"scale")
D.clx=new B.adr(2,"rotate")})()};
(a=>{a["gjKPd8zdyaGbWd1adN/0VE4w5Hw="]=a.current})($__dart_deferred_initializers__);