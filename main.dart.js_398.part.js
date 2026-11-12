((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cFU(d,e,f,g){return new B.a_B(d,e,f,g,null)},
b3m(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aC(0,e)
w=f.aC(0,e)
return e.ac(0,w.qQ(A.af(x.KG(w)/t,0,1)))},
d_n(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aC(0,q),o=e.b,n=o.aC(0,q),m=e.d,l=m.aC(0,q),k=p.KG(n),j=n.KG(n),i=p.KG(l),h=l.KG(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.b3m(d,q,o),B.b3m(d,o,x),B.b3m(d,x,m),B.b3m(d,m,q)]
v=A.dj()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bo()},
d5E(){var x=A.hf()
return new B.aud(x,$.ah())},
cMK(d,e,f){return Math.log(f/d)/Math.log(e/100)},
cNR(d,e){var x,w,v,u,t,s,r=new A.d5(new Float64Array(16))
r.cD(d)
r.kR(r)
x=e.a
w=e.b
v=new A.eb(new Float64Array(3))
v.fU(x,w,0)
v=r.nc(v)
u=e.c
t=new A.eb(new Float64Array(3))
t.fU(u,w,0)
t=r.nc(t)
w=e.d
s=new A.eb(new Float64Array(3))
s.fU(u,w,0)
s=r.nc(s)
u=new A.eb(new Float64Array(3))
u.fU(x,w,0)
u=r.nc(u)
x=new A.eb(new Float64Array(3))
x.cD(v)
w=new A.eb(new Float64Array(3))
w.cD(t)
v=new A.eb(new Float64Array(3))
v.cD(s)
t=new A.eb(new Float64Array(3))
t.cD(u)
return new B.a2u(x,w,v,t)},
cMz(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.O,w=0;w<4;++w){v=r[w]
u=B.d_n(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.D(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.D(x.a,t)}return B.czt(x)},
czt(d){return new A.D(A.qv(C.k.a8(d.a,9)),A.qv(C.k.a8(d.b,9)))},
dbw(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bu:C.Z},
a_B:function a_B(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
a9y:function a9y(d,e,f,g){var _=this
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
bPR:function bPR(){},
aAY:function aAY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aud:function aud(d,e){var _=this
_.a=d
_.V$=0
_.a0$=e
_.az$=_.bl$=0},
a92:function a92(d,e){this.a=d
this.b=e},
bam:function bam(d,e){this.a=d
this.b=e},
aeK:function aeK(){},
a2u:function a2u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[129],B)
D=c[397]
B.a_B.prototype={
R(){var x=null,w=y.z
return new B.a9y(new A.c3(x,w),new A.c3(x,w),x,x)}}
B.a9y.prototype={
gdR(){var x=this.d
if(x===$){this.a.toString
x=B.d5E()
this.d=x}return x},
gOy(){var x,w=$.aw.a5$.x.h(0,this.e).gaL()
w.toString
x=y.g.a(w).gJ(0)
return this.a.f.Lq(new A.ae(0,0,0+x.a,0+x.b))},
gSA(){var x=$.aw.a5$.x.h(0,this.f).gaL()
x.toString
x=y.g.a(x).gJ(0)
return new A.ae(0,0,0+x.a,0+x.b)},
Cm(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.O)){x=new A.d5(new Float64Array(16))
x.cD(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.d5(new Float64Array(16))
w.cD(a0)
w.en(a1.a,a1.b,0,1)
v=B.cNR(w,d.gSA())
if(d.gOy().gavJ(0))return w
x=d.gOy()
u=d.ay
t=A.hf()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.en(q/2,o/2,0,1)
t.Fh(u)
t.en(-q/2,-o/2,0,1)
u=new A.eb(new Float64Array(3))
u.fU(r,x,0)
u=t.nc(u)
q=new A.eb(new Float64Array(3))
q.fU(s,x,0)
q=t.nc(q)
x=new A.eb(new Float64Array(3))
x.fU(s,p,0)
x=t.nc(x)
s=new A.eb(new Float64Array(3))
s.fU(r,p,0)
s=t.nc(s)
r=new Float64Array(3)
new A.eb(r).cD(u)
u=new Float64Array(3)
new A.eb(u).cD(q)
q=new Float64Array(3)
new A.eb(q).cD(x)
x=new Float64Array(3)
new A.eb(x).cD(s)
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
x=new A.eb(new Float64Array(3))
x.fU(m,l,0)
u=new A.eb(new Float64Array(3))
u.fU(k,l,0)
s=new A.eb(new Float64Array(3))
s.fU(k,j,0)
r=new A.eb(new Float64Array(3))
r.fU(m,j,0)
q=new A.eb(new Float64Array(3))
q.cD(x)
x=new A.eb(new Float64Array(3))
x.cD(u)
u=new A.eb(new Float64Array(3))
u.cD(s)
s=new A.eb(new Float64Array(3))
s.cD(r)
i=new B.a2u(q,x,u,s)
h=B.cMz(i,v)
if(h.l(0,C.O))return w
x=w.XY().a
u=x[0]
x=x[1]
g=a0.B4()
u-=h.a*g
x-=h.b*g
f=new A.d5(new Float64Array(16))
f.cD(a0)
s=new A.eb(new Float64Array(3))
s.fU(u,x,0)
f.ab5(s)
e=B.cMz(i,B.cNR(f,d.gSA()))
if(e.l(0,C.O))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.d5(new Float64Array(16))
x.cD(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.d5(new Float64Array(16))
s.cD(a0)
r=new A.eb(new Float64Array(3))
r.fU(u,x,0)
s.ab5(r)
return s},
a1A(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.d5(new Float64Array(16))
x.cD(d)
return x}w=q.gdR().a.B4()
x=q.gSA()
v=q.gOy()
u=q.gSA()
t=q.gOy()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.af(s,t.ax,t.at)/w
x=new A.d5(new Float64Array(16))
x.cD(d)
x.ty(r,r,r,1)
return x},
b1c(d,e,f){var x,w,v,u
if(e===0){x=new A.d5(new Float64Array(16))
x.cD(d)
return x}w=this.gdR().nb(f)
x=new A.d5(new Float64Array(16))
x.cD(d)
v=w.a
u=w.b
x.en(v,u,0,1)
x.Fh(-e)
x.en(-v,-u,0,1)
return x},
Pw(d){var x
A:{x=!0
if(D.c9A===d){x=!1
break A}if(D.yz===d){this.a.toString
break A}if(D.r8===d||d==null){this.a.toString
break A}x=null}return x},
ahy(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.yz
else return D.r8},
b2E(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fL(0)
x=v.y
x.st(0,x.a)
x=v.r
if(x!=null)x.a.Y(0,v.gPX())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fL(0)
x=v.z
x.st(0,x.a)
x=v.w
if(x!=null)x.a.Y(0,v.gQ2())
v.w=null}v.Q=v.ch=null
v.at=v.gdR().a.B4()
v.as=v.gdR().nb(d.b)
v.ax=v.ay},
b2G(d){var x,w,v,u,t,s,r=this,q=r.gdR().a.B4(),p=r.x=d.c,o=r.gdR().nb(p),n=r.ch
if(n===D.r8)n=r.ch=r.ahy(d)
else if(n==null){n=r.ahy(d)
r.ch=n}if(!r.Pw(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdR().st(0,r.a1A(r.gdR().a,n*d.d/q))
x=r.gdR().nb(p)
n=r.gdR()
w=r.gdR().a
v=r.as
v.toString
n.st(0,r.Cm(w,x.aC(0,v)))
u=r.gdR().nb(p)
p=r.as
p.toString
if(!B.czt(p).l(0,B.czt(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdR().st(0,r.b1c(r.gdR().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dbw(n,o)}n=r.as
n.toString
s=o.aC(0,n)
r.gdR().st(0,r.Cm(r.gdR().a,s))
r.as=r.gdR().nb(p)
break}r.a.toString},
b2C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.Y(0,l.gPX())
x=l.w
if(x!=null)x.a.Y(0,l.gQ2())
x=l.y
x===$&&A.b()
x.st(0,x.a)
x=l.z
x===$&&A.b()
x.st(0,x.a)
x=l.ch
if(!l.Pw(x)){l.Q=null
return}A:{if(D.r8===x){x=d.a.a
if(x.gej()<50){l.Q=null
return}w=l.gdR().a.XY().a
v=w[0]
w=w[1]
l.a.toString
u=A.aZ5(0.0000135,v,x.a,0)
l.a.toString
t=A.aZ5(0.0000135,w,x.b,0)
x=x.gej()
l.a.toString
s=B.cMK(x,0.0000135,10)
x=u.gE7()
r=t.gE7()
q=y.A
p=q.i("fz<bl.T>")
o=l.y
l.r=new A.bc(o,new A.fz(new A.iz(C.kz),new A.bq(new A.D(v,w),new A.D(x,r),q),p),p.i("bc<bl.T>"))
o.e=A.e2(0,0,0,C.k.aP(s*1000),0,0)
o.ai(0,l.gPX())
l.y.cn(0)
break A}if(D.yz===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdR().a.B4()
l.a.toString
m=A.aZ5(0.0026999999999999997,n,x/10,0)
l.a.toString
s=B.cMK(w,0.0000135,0.1)
x=m.jt(0,s)
w=y.f
v=w.i("fz<bl.T>")
r=l.z
l.w=new A.bc(r,new A.fz(new A.iz(C.kz),new A.bq(n,x,w),v),v.i("bc<bl.T>"))
r.e=A.e2(0,0,0,C.k.aP(s*1000),0,0)
r.ai(0,l.gQ2())
l.z.cn(0)
break A}break A}},
b_U(d){var x,w,v,u,t,s,r,q=this,p=d.gfR(),o=d.gbz(d)
if(y.l.b(d)){x=d.gdY(d)===C.ew
if(x)q.a.toString
if(x){q.a.toString
x=o.ac(0,d.gtz())
w=d.gtz()
v=A.Jj(d.gdO(d),null,w,x)
if(!q.Pw(D.r8)){q.a.toString
return}u=q.gdR().nb(p)
t=q.gdR().nb(p.aC(0,v))
q.gdR().st(0,q.Cm(q.gdR().a,t.aC(0,u)))
q.a.toString
return}if(d.gtz().b===0)return
x=d.gtz()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gi0(d)
else return
q.a.toString
if(!q.Pw(D.yz))return
u=q.gdR().nb(p)
q.gdR().st(0,q.a1A(q.gdR().a,s))
r=q.gdR().nb(p)
q.gdR().st(0,q.Cm(q.gdR().a,r.aC(0,u)))
q.a.toString},
aXl(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.Y(0,r.gPX())
r.r=null
q=r.y
q.st(0,q.a)
return}q=r.gdR().a.XY().a
x=q[0]
q=q[1]
w=r.gdR()
v=r.gdR().a
u=r.gdR()
t=r.r
s=t.b
t=t.a
w.st(0,r.Cm(v,u.nb(s.aw(0,t.gt(t))).aC(0,r.gdR().nb(new A.D(x,q)))))},
aYX(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.Y(0,s.gQ2())
s.w=null
r=s.z
r.st(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aw(0,r.gt(r))
r=s.gdR().a.B4()
x=s.gdR()
v=s.x
v===$&&A.b()
u=x.nb(v)
s.gdR().st(0,s.a1A(s.gdR().a,w/r))
t=s.gdR().nb(s.x)
s.gdR().st(0,s.Cm(s.gdR().a,t.aC(0,u)))},
b__(){this.q(new B.bPR())},
ak(){var x=this,w=null
x.aG()
x.y=A.cu(w,w,w,1,w,x)
x.z=A.cu(w,w,w,1,w,x)
x.gdR().ai(0,x.gaj7())},
bb(d){this.bx(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdR().Y(0,x.gaj7())
x.a.toString
w=x.gdR()
w.a0$=$.ah()
w.V$=0
x.aJx()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdR().a
w=u.a.w
v=new B.aAY(w,u.e,C.D,!0,x,t,t)
return A.Ic(C.fZ,A.dI(C.c6,v,C.Y,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gb2B(),u.gb2D(),u.gb2F(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.D(0,-0.005)),u.f,t,t,t,u.gb_T(),t)}}
B.aAY.prototype={
u(d){var x=this,w=A.SK(x.w,new A.oA(x.c,x.d),null,x.r,!0)
return A.xM(w,x.e,null)}}
B.aud.prototype={
nb(d){var x=this.a,w=new A.d5(new Float64Array(16))
if(w.kR(x)===0)A.ak(A.hS(x,"other","Matrix cannot be inverted"))
x=new A.eb(new Float64Array(3))
x.fU(d.a,d.b,0)
x=w.nc(x).a
return new A.D(x[0],x[1])}}
B.a92.prototype={
H(){return"_GestureType."+this.b}}
B.bam.prototype={
H(){return"PanAxis."+this.b}}
B.aeK.prototype={
c2(){this.cK()
this.d7()
this.h0()},
m(){var x=this,w=x.bF$
if(w!=null)w.Y(0,x.gfM())
x.bF$=null
x.aa()}}
B.a2u.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a2u&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gC(d){var x=this
return A.ar(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a3F)","~(a3G)","~(RI)","~(lw)"])
B.bPR.prototype={
$0(){},
$S:0};(function aliases(){var x=B.aeK.prototype
x.aJx=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.a9y.prototype,"gb2D","b2E",1)
x(v,"gb2F","b2G",2)
x(v,"gb2B","b2C",3)
x(v,"gb_T","b_U",4)
w(v,"gPX","aXl",0)
w(v,"gQ2","aYX",0)
w(v,"gaj7","b__",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.a_B,A.G)
w(B.aeK,A.a0)
w(B.a9y,B.aeK)
w(B.bPR,A.bI)
w(B.aAY,A.N)
w(B.aud,A.dv)
v(A.fr,[B.a92,B.bam])
w(B.a2u,A.F)
x(B.aeK,A.hz)})()
A.bx(b.typeUniverse,JSON.parse('{"a_B":{"G":[],"e":[],"f":[]},"a9y":{"a0":["a_B"]},"aAY":{"N":[],"e":[],"f":[]},"aud":{"dv":["d5"],"aO":[]}}'))
var y={z:A.v("c3<a0<G>>"),B:A.v("Jn"),l:A.v("D9"),g:A.v("ad"),A:A.v("bq<D>"),f:A.v("bq<V>")};(function constants(){D.L7=new A.Y(16,10,16,0)
D.cd0=new B.bam(3,"free")
D.r8=new B.a92(0,"pan")
D.yz=new B.a92(1,"scale")
D.c9A=new B.a92(2,"rotate")})()};
(a=>{a["5MWbDtZph6UYkX/gf/VkMSDwzN4="]=a.current})($__dart_deferred_initializers__);