((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cPN(d,e,f,g){return new B.a1I(d,e,f,g,null)},
b7F(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.ar(0,e)
w=f.ar(0,e)
return e.ad(0,w.re(A.ac(x.LU(w)/t,0,1)))},
dak(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.ar(0,q),o=e.b,n=o.ar(0,q),m=e.d,l=m.ar(0,q),k=p.LU(n),j=n.LU(n),i=p.LU(l),h=l.LU(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.b7F(d,q,o),B.b7F(d,o,x),B.b7F(d,x,m),B.b7F(d,m,q)]
v=A.dj()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bj()},
dgG(){var x=A.hf()
return new B.axz(x,$.ag())},
cWP(d,e,f){return Math.log(f/d)/Math.log(e/100)},
cY2(d,e){var x,w,v,u,t,s,r=new A.da(new Float64Array(16))
r.cc(d)
r.l8(r)
x=e.a
w=e.b
v=new A.em(new Float64Array(3))
v.h4(x,w,0)
v=r.nu(v)
u=e.c
t=new A.em(new Float64Array(3))
t.h4(u,w,0)
t=r.nu(t)
w=e.d
s=new A.em(new Float64Array(3))
s.h4(u,w,0)
s=r.nu(s)
u=new A.em(new Float64Array(3))
u.h4(x,w,0)
u=r.nu(u)
x=new A.em(new Float64Array(3))
x.cc(v)
w=new A.em(new Float64Array(3))
w.cc(t)
v=new A.em(new Float64Array(3))
v.cc(s)
t=new A.em(new Float64Array(3))
t.cc(u)
return new B.a4J(x,w,v,t)},
cWE(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.O,w=0;w<4;++w){v=r[w]
u=B.dak(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.D(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.D(x.a,t)}return B.cJj(x)},
cJj(d){return new A.D(A.jA(C.j.ac(d.a,9)),A.jA(C.j.ac(d.b,9)))},
dn_(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bH:C.Z},
a1I:function a1I(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
ac3:function ac3(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.eq$=f
_.bB$=g
_.c=_.a=null},
bWo:function bWo(){},
aEy:function aEy(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
axz:function axz(d,e){var _=this
_.a=d
_.V$=0
_.a0$=e
_.aD$=_.bq$=0},
aby:function aby(d,e){this.a=d
this.b=e},
beI:function beI(d,e){this.a=d
this.b=e},
aht:function aht(){},
a4J:function a4J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[134],B)
D=c[413]
B.a1I.prototype={
R(){var x=null,w=y.z
return new B.ac3(new A.cf(x,w),new A.cf(x,w),x,x)}}
B.ac3.prototype={
gdU(){var x=this.d
if(x===$){this.a.toString
x=B.dgG()
this.d=x}return x},
gPL(){var x,w=$.ay.a9$.x.h(0,this.e).gaK()
w.toString
x=y.g.a(w).gL(0)
return this.a.f.MB(new A.aa(0,0,0+x.a,0+x.b))},
gU_(){var x=$.ay.a9$.x.h(0,this.f).gaK()
x.toString
x=y.g.a(x).gL(0)
return new A.aa(0,0,0+x.a,0+x.b)},
Dh(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.O)){x=new A.da(new Float64Array(16))
x.cc(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.da(new Float64Array(16))
w.cc(a0)
w.ew(a1.a,a1.b,0,1)
v=B.cY2(w,d.gU_())
if(d.gPL().gayx(0))return w
x=d.gPL()
u=d.ay
t=A.hf()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.ew(q/2,o/2,0,1)
t.tN(u)
t.ew(-q/2,-o/2,0,1)
u=new A.em(new Float64Array(3))
u.h4(r,x,0)
u=t.nu(u)
q=new A.em(new Float64Array(3))
q.h4(s,x,0)
q=t.nu(q)
x=new A.em(new Float64Array(3))
x.h4(s,p,0)
x=t.nu(x)
s=new A.em(new Float64Array(3))
s.h4(r,p,0)
s=t.nu(s)
r=new Float64Array(3)
new A.em(r).cc(u)
u=new Float64Array(3)
new A.em(u).cc(q)
q=new Float64Array(3)
new A.em(q).cc(x)
x=new Float64Array(3)
new A.em(x).cc(s)
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
x=new A.em(new Float64Array(3))
x.h4(m,l,0)
u=new A.em(new Float64Array(3))
u.h4(k,l,0)
s=new A.em(new Float64Array(3))
s.h4(k,j,0)
r=new A.em(new Float64Array(3))
r.h4(m,j,0)
q=new A.em(new Float64Array(3))
q.cc(x)
x=new A.em(new Float64Array(3))
x.cc(u)
u=new A.em(new Float64Array(3))
u.cc(s)
s=new A.em(new Float64Array(3))
s.cc(r)
i=new B.a4J(q,x,u,s)
h=B.cWE(i,v)
if(h.l(0,C.O))return w
x=w.ZA().a
u=x[0]
x=x[1]
g=a0.BU()
u-=h.a*g
x-=h.b*g
f=new A.da(new Float64Array(16))
f.cc(a0)
s=new A.em(new Float64Array(3))
s.h4(u,x,0)
f.adh(s)
e=B.cWE(i,B.cY2(f,d.gU_()))
if(e.l(0,C.O))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.da(new Float64Array(16))
x.cc(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.da(new Float64Array(16))
s.cc(a0)
r=new A.em(new Float64Array(3))
r.h4(u,x,0)
s.adh(r)
return s},
a3i(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.da(new Float64Array(16))
x.cc(d)
return x}w=q.gdU().a.BU()
x=q.gU_()
v=q.gPL()
u=q.gU_()
t=q.gPL()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ac(s,t.ax,t.at)/w
x=new A.da(new Float64Array(16))
x.cc(d)
x.nA(r,r,r,1)
return x},
b5d(d,e,f){var x,w,v,u
if(e===0){x=new A.da(new Float64Array(16))
x.cc(d)
return x}w=this.gdU().nt(f)
x=new A.da(new Float64Array(16))
x.cc(d)
v=w.a
u=w.b
x.ew(v,u,0,1)
x.tN(-e)
x.ew(-v,-u,0,1)
return x},
QN(d){var x
A:{x=!0
if(D.cgX===d){x=!1
break A}if(D.z6===d){this.a.toString
break A}if(D.rP===d||d==null){this.a.toString
break A}x=null}return x},
ajV(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.z6
else return D.rP},
b6K(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fS(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.Z(0,v.gRg())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fS(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.Z(0,v.gRm())
v.w=null}v.Q=v.ch=null
v.at=v.gdU().a.BU()
v.as=v.gdU().nt(d.b)
v.ax=v.ay},
b6M(d){var x,w,v,u,t,s,r=this,q=r.gdU().a.BU(),p=r.x=d.c,o=r.gdU().nt(p),n=r.ch
if(n===D.rP)n=r.ch=r.ajV(d)
else if(n==null){n=r.ajV(d)
r.ch=n}if(!r.QN(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdU().sv(0,r.a3i(r.gdU().a,n*d.d/q))
x=r.gdU().nt(p)
n=r.gdU()
w=r.gdU().a
v=r.as
v.toString
n.sv(0,r.Dh(w,x.ar(0,v)))
u=r.gdU().nt(p)
p=r.as
p.toString
if(!B.cJj(p).l(0,B.cJj(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdU().sv(0,r.b5d(r.gdU().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dn_(n,o)}n=r.as
n.toString
s=o.ar(0,n)
r.gdU().sv(0,r.Dh(r.gdU().a,s))
r.as=r.gdU().nt(p)
break}r.a.toString},
b6I(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.Z(0,l.gRg())
x=l.w
if(x!=null)x.a.Z(0,l.gRm())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.QN(x)){l.Q=null
return}A:{if(D.rP===x){x=d.a.a
if(x.geh()<50){l.Q=null
return}w=l.gdU().a.ZA().a
v=w[0]
w=w[1]
l.a.toString
u=A.b2g(0.0000135,v,x.a,0)
l.a.toString
t=A.b2g(0.0000135,w,x.b,0)
x=x.geh()
l.a.toString
s=B.cWP(x,0.0000135,10)
x=u.gF9()
r=t.gF9()
q=y.A
p=q.i("fM<bn.T>")
o=l.y
l.r=new A.bb(o,new A.fM(new A.iO(C.kM),new A.bv(new A.D(v,w),new A.D(x,r),q),p),p.i("bb<bn.T>"))
o.e=A.ea(0,0,0,C.j.aJ(s*1000),0,0)
o.ai(0,l.gRg())
l.y.co(0)
break A}if(D.z6===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdU().a.BU()
l.a.toString
m=A.b2g(0.0026999999999999997,n,x/10,0)
l.a.toString
s=B.cWP(w,0.0000135,0.1)
x=m.jI(0,s)
w=y.f
v=w.i("fM<bn.T>")
r=l.z
l.w=new A.bb(r,new A.fM(new A.iO(C.kM),new A.bv(n,x,w),v),v.i("bb<bn.T>"))
r.e=A.ea(0,0,0,C.j.aJ(s*1000),0,0)
r.ai(0,l.gRm())
l.z.co(0)
break A}break A}},
b3O(d){var x,w,v,u,t,s,r,q=this,p=d.gh_(),o=d.gbz(d)
if(y.l.b(d)){x=d.gdW(d)===C.eH
if(x)q.a.toString
if(x){q.a.toString
x=o.ad(0,d.gu2())
w=d.gu2()
v=A.KG(d.gdS(d),null,w,x)
if(!q.QN(D.rP)){q.a.toString
return}u=q.gdU().nt(p)
t=q.gdU().nt(p.ar(0,v))
q.gdU().sv(0,q.Dh(q.gdU().a,t.ar(0,u)))
q.a.toString
return}if(d.gu2().b===0)return
x=d.gu2()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.ghw(d)
else return
q.a.toString
if(!q.QN(D.z6))return
u=q.gdU().nt(p)
q.gdU().sv(0,q.a3i(q.gdU().a,s))
r=q.gdU().nt(p)
q.gdU().sv(0,q.Dh(q.gdU().a,r.ar(0,u)))
q.a.toString},
b0h(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.Z(0,r.gRg())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdU().a.ZA().a
x=q[0]
q=q[1]
w=r.gdU()
v=r.gdU().a
u=r.gdU()
t=r.r
s=t.b
t=t.a
w.sv(0,r.Dh(v,u.nt(s.av(0,t.gv(t))).ar(0,r.gdU().nt(new A.D(x,q)))))},
b1T(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.Z(0,s.gRm())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.av(0,r.gv(r))
r=s.gdU().a.BU()
x=s.gdU()
v=s.x
v===$&&A.b()
u=x.nt(v)
s.gdU().sv(0,s.a3i(s.gdU().a,w/r))
t=s.gdU().nt(s.x)
s.gdU().sv(0,s.Dh(s.gdU().a,t.ar(0,u)))},
b2X(){this.q(new B.bWo())},
ak(){var x=this,w=null
x.aH()
x.y=A.cC(w,w,w,1,w,x)
x.z=A.cC(w,w,w,1,w,x)
x.gdU().ai(0,x.galw())},
bb(d){this.bw(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdU().Z(0,x.galw())
x.a.toString
w=x.gdU()
w.a0$=$.ag()
w.V$=0
x.aNc()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdU().a
w=u.a.w
v=new B.aEy(w,u.e,C.z,!0,x,t,t)
return A.Dx(C.fF,A.dO(C.c6,v,C.a1,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gb6H(),u.gb6J(),u.gb6L(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.D(0,-0.005)),u.f,t,t,t,u.gb3N(),t)}}
B.aEy.prototype={
u(d){var x=this,w=A.Mb(x.w,new A.o_(x.c,x.d),null,x.r,!0)
return A.yS(w,x.e,null)}}
B.axz.prototype={
nt(d){var x=this.a,w=new A.da(new Float64Array(16))
if(w.l8(x)===0)A.ah(A.hG(x,"other","Matrix cannot be inverted"))
x=new A.em(new Float64Array(3))
x.h4(d.a,d.b,0)
x=w.nu(x).a
return new A.D(x[0],x[1])}}
B.aby.prototype={
H(){return"_GestureType."+this.b}}
B.beI.prototype={
H(){return"PanAxis."+this.b}}
B.aht.prototype={
c4(){this.cP()
this.d8()
this.fT()},
m(){var x=this,w=x.bB$
if(w!=null)w.Z(0,x.gfH())
x.bB$=null
x.a8()}}
B.a4J.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a4J&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gC(d){var x=this
return A.aq(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a5Y)","~(a5Z)","~(Tz)","~(lT)"])
B.bWo.prototype={
$0(){},
$S:0};(function aliases(){var x=B.aht.prototype
x.aNc=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.ac3.prototype,"gb6J","b6K",1)
x(v,"gb6L","b6M",2)
x(v,"gb6H","b6I",3)
x(v,"gb3N","b3O",4)
w(v,"gRg","b0h",0)
w(v,"gRm","b1T",0)
w(v,"galw","b2X",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.a1I,A.H)
w(B.aht,A.a1)
w(B.ac3,B.aht)
w(B.bWo,A.bL)
w(B.aEy,A.O)
w(B.axz,A.dr)
v(A.fw,[B.aby,B.beI])
w(B.a4J,A.J)
x(B.aht,A.hA)})()
A.bt(b.typeUniverse,JSON.parse('{"a1I":{"H":[],"e":[],"f":[]},"ac3":{"a1":["a1I"]},"aEy":{"O":[],"e":[],"f":[]},"axz":{"dr":["da"],"aO":[]}}'))
var y={z:A.v("cf<a1<H>>"),B:A.v("KK"),l:A.v("En"),g:A.v("ad"),A:A.v("bv<D>"),f:A.v("bv<R>")};(function constants(){D.M7=new A.a0(16,10,16,0)
D.ckr=new B.beI(3,"free")
D.rP=new B.aby(0,"pan")
D.z6=new B.aby(1,"scale")
D.cgX=new B.aby(2,"rotate")})()};
(a=>{a["8TXCQ47ikJOTVvGlHZwB2ZNFjaE="]=a.current})($__dart_deferred_initializers__);