((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cGQ(d,e,f,g){return new B.J7(d,e,f,g,null)},
b7G(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aq(0,e)
w=f.aq(0,e)
return e.af(0,w.r7(A.af(x.M0(w)/t,0,1)))},
db_(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aq(0,q),o=e.b,n=o.aq(0,q),m=e.d,l=m.aq(0,q),k=p.M0(n),j=n.M0(n),i=p.M0(l),h=l.M0(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.b7G(d,q,o),B.b7G(d,o,x),B.b7G(d,x,m),B.b7G(d,m,q)]
v=A.dn()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bo()},
dhj(){var x=A.he()
return new B.axw(x,$.ad())},
cXt(d,e,f){return Math.log(f/d)/Math.log(e/100)},
cYH(d,e){var x,w,v,u,t,s,r=new A.d9(new Float64Array(16))
r.cc(d)
r.l5(r)
x=e.a
w=e.b
v=new A.el(new Float64Array(3))
v.h4(x,w,0)
v=r.nn(v)
u=e.c
t=new A.el(new Float64Array(3))
t.h4(u,w,0)
t=r.nn(t)
w=e.d
s=new A.el(new Float64Array(3))
s.h4(u,w,0)
s=r.nn(s)
u=new A.el(new Float64Array(3))
u.h4(x,w,0)
u=r.nn(u)
x=new A.el(new Float64Array(3))
x.cc(v)
w=new A.el(new Float64Array(3))
w.cc(t)
v=new A.el(new Float64Array(3))
v.cc(s)
t=new A.el(new Float64Array(3))
t.cc(u)
return new B.a4J(x,w,v,t)},
cXi(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.P,w=0;w<4;++w){v=r[w]
u=B.db_(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.D(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.D(x.a,t)}return B.cJX(x)},
cJX(d){return new A.D(A.jz(C.j.ac(d.a,9)),A.jz(C.j.ac(d.b,9)))},
dnE(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bu:C.a0},
J7:function J7(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
ac1:function ac1(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.eo$=f
_.bD$=g
_.c=_.a=null},
bWL:function bWL(){},
aEw:function aEw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
axw:function axw(d,e){var _=this
_.a=d
_.V$=0
_.a0$=e
_.aD$=_.bn$=0},
abw:function abw(d,e){this.a=d
this.b=e},
beJ:function beJ(d,e){this.a=d
this.b=e},
ahq:function ahq(){},
a4J:function a4J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[167],B)
D=c[448]
B.J7.prototype={
P(){var x=null,w=y.z
return new B.ac1(new A.ck(x,w),new A.ck(x,w),x,x)}}
B.ac1.prototype={
gdU(){var x=this.d
if(x===$){this.a.toString
x=B.dhj()
this.d=x}return x},
gPR(){var x,w=$.ay.a9$.x.h(0,this.e).gaM()
w.toString
x=y.g.a(w).gM(0)
return this.a.f.MH(new A.ac(0,0,0+x.a,0+x.b))},
gU6(){var x=$.ay.a9$.x.h(0,this.f).gaM()
x.toString
x=y.g.a(x).gM(0)
return new A.ac(0,0,0+x.a,0+x.b)},
Dj(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.P)){x=new A.d9(new Float64Array(16))
x.cc(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.d9(new Float64Array(16))
w.cc(a0)
w.ev(a1.a,a1.b,0,1)
v=B.cYH(w,d.gU6())
if(d.gPR().gayu(0))return w
x=d.gPR()
u=d.ay
t=A.he()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.ev(q/2,o/2,0,1)
t.tF(u)
t.ev(-q/2,-o/2,0,1)
u=new A.el(new Float64Array(3))
u.h4(r,x,0)
u=t.nn(u)
q=new A.el(new Float64Array(3))
q.h4(s,x,0)
q=t.nn(q)
x=new A.el(new Float64Array(3))
x.h4(s,p,0)
x=t.nn(x)
s=new A.el(new Float64Array(3))
s.h4(r,p,0)
s=t.nn(s)
r=new Float64Array(3)
new A.el(r).cc(u)
u=new Float64Array(3)
new A.el(u).cc(q)
q=new Float64Array(3)
new A.el(q).cc(x)
x=new Float64Array(3)
new A.el(x).cc(s)
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
x=new A.el(new Float64Array(3))
x.h4(m,l,0)
u=new A.el(new Float64Array(3))
u.h4(k,l,0)
s=new A.el(new Float64Array(3))
s.h4(k,j,0)
r=new A.el(new Float64Array(3))
r.h4(m,j,0)
q=new A.el(new Float64Array(3))
q.cc(x)
x=new A.el(new Float64Array(3))
x.cc(u)
u=new A.el(new Float64Array(3))
u.cc(s)
s=new A.el(new Float64Array(3))
s.cc(r)
i=new B.a4J(q,x,u,s)
h=B.cXi(i,v)
if(h.l(0,C.P))return w
x=w.ZF().a
u=x[0]
x=x[1]
g=a0.BV()
u-=h.a*g
x-=h.b*g
f=new A.d9(new Float64Array(16))
f.cc(a0)
s=new A.el(new Float64Array(3))
s.h4(u,x,0)
f.adp(s)
e=B.cXi(i,B.cYH(f,d.gU6()))
if(e.l(0,C.P))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.d9(new Float64Array(16))
x.cc(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.d9(new Float64Array(16))
s.cc(a0)
r=new A.el(new Float64Array(3))
r.h4(u,x,0)
s.adp(r)
return s},
a3l(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.d9(new Float64Array(16))
x.cc(d)
return x}w=q.gdU().a.BV()
x=q.gU6()
v=q.gPR()
u=q.gU6()
t=q.gPR()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.af(s,t.ax,t.at)/w
x=new A.d9(new Float64Array(16))
x.cc(d)
x.nt(r,r,r,1)
return x},
b56(d,e,f){var x,w,v,u
if(e===0){x=new A.d9(new Float64Array(16))
x.cc(d)
return x}w=this.gdU().nm(f)
x=new A.d9(new Float64Array(16))
x.cc(d)
v=w.a
u=w.b
x.ev(v,u,0,1)
x.tF(-e)
x.ev(-v,-u,0,1)
return x},
QV(d){var x
A:{x=!0
if(D.chA===d){x=!1
break A}if(D.z7===d){this.a.toString
break A}if(D.rU===d||d==null){this.a.toString
break A}x=null}return x},
ajX(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.z7
else return D.rU},
b6E(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fQ(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.Z(0,v.gRm())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fQ(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.Z(0,v.gRs())
v.w=null}v.Q=v.ch=null
v.at=v.gdU().a.BV()
v.as=v.gdU().nm(d.b)
v.ax=v.ay},
b6G(d){var x,w,v,u,t,s,r=this,q=r.gdU().a.BV(),p=r.x=d.c,o=r.gdU().nm(p),n=r.ch
if(n===D.rU)n=r.ch=r.ajX(d)
else if(n==null){n=r.ajX(d)
r.ch=n}if(!r.QV(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdU().sv(0,r.a3l(r.gdU().a,n*d.d/q))
x=r.gdU().nm(p)
n=r.gdU()
w=r.gdU().a
v=r.as
v.toString
n.sv(0,r.Dj(w,x.aq(0,v)))
u=r.gdU().nm(p)
p=r.as
p.toString
if(!B.cJX(p).l(0,B.cJX(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdU().sv(0,r.b56(r.gdU().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dnE(n,o)}n=r.as
n.toString
s=o.aq(0,n)
r.gdU().sv(0,r.Dj(r.gdU().a,s))
r.as=r.gdU().nm(p)
break}r.a.toString},
b6C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.Z(0,l.gRm())
x=l.w
if(x!=null)x.a.Z(0,l.gRs())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.QV(x)){l.Q=null
return}A:{if(D.rU===x){x=d.a.a
if(x.geg()<50){l.Q=null
return}w=l.gdU().a.ZF().a
v=w[0]
w=w[1]
l.a.toString
u=A.b2h(0.0000135,v,x.a,0)
l.a.toString
t=A.b2h(0.0000135,w,x.b,0)
x=x.geg()
l.a.toString
s=B.cXt(x,0.0000135,10)
x=u.gFc()
r=t.gFc()
q=y.A
p=q.i("h5<bp.T>")
o=l.y
l.r=new A.be(o,new A.h5(new A.k3(C.kQ),new A.bu(new A.D(v,w),new A.D(x,r),q),p),p.i("be<bp.T>"))
o.e=A.e9(0,0,0,C.j.aI(s*1000),0,0)
o.ak(0,l.gRm())
l.y.cp(0)
break A}if(D.z7===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdU().a.BV()
l.a.toString
m=A.b2h(0.0026999999999999997,n,x/10,0)
l.a.toString
s=B.cXt(w,0.0000135,0.1)
x=m.jC(0,s)
w=y.f
v=w.i("h5<bp.T>")
r=l.z
l.w=new A.be(r,new A.h5(new A.k3(C.kQ),new A.bu(n,x,w),v),v.i("be<bp.T>"))
r.e=A.e9(0,0,0,C.j.aI(s*1000),0,0)
r.ak(0,l.gRs())
l.z.cp(0)
break A}break A}},
b3H(d){var x,w,v,u,t,s,r,q=this,p=d.gfZ(),o=d.gbw(d)
if(y.l.b(d)){x=d.gdX(d)===C.eH
if(x)q.a.toString
if(x){q.a.toString
x=o.af(0,d.gtV())
w=d.gtV()
v=A.KE(d.gdQ(d),null,w,x)
if(!q.QV(D.rU)){q.a.toString
return}u=q.gdU().nm(p)
t=q.gdU().nm(p.aq(0,v))
q.gdU().sv(0,q.Dj(q.gdU().a,t.aq(0,u)))
q.a.toString
return}if(d.gtV().b===0)return
x=d.gtV()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.ghu(d)
else return
q.a.toString
if(!q.QV(D.z7))return
u=q.gdU().nm(p)
q.gdU().sv(0,q.a3l(q.gdU().a,s))
r=q.gdU().nm(p)
q.gdU().sv(0,q.Dj(q.gdU().a,r.aq(0,u)))
q.a.toString},
b09(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.Z(0,r.gRm())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdU().a.ZF().a
x=q[0]
q=q[1]
w=r.gdU()
v=r.gdU().a
u=r.gdU()
t=r.r
s=t.b
t=t.a
w.sv(0,r.Dj(v,u.nm(s.aA(0,t.gv(t))).aq(0,r.gdU().nm(new A.D(x,q)))))},
b1L(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.Z(0,s.gRs())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aA(0,r.gv(r))
r=s.gdU().a.BV()
x=s.gdU()
v=s.x
v===$&&A.b()
u=x.nm(v)
s.gdU().sv(0,s.a3l(s.gdU().a,w/r))
t=s.gdU().nm(s.x)
s.gdU().sv(0,s.Dj(s.gdU().a,t.aq(0,u)))},
b2P(){this.q(new B.bWL())},
aj(){var x=this,w=null
x.aH()
x.y=A.cE(w,w,w,1,w,x)
x.z=A.cE(w,w,w,1,w,x)
x.gdU().ak(0,x.galx())},
bb(d){this.by(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdU().Z(0,x.galx())
x.a.toString
w=x.gdU()
w.a0$=$.ad()
w.V$=0
x.aN6()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdU().a
w=u.a.w
v=new B.aEw(w,u.e,C.z,!0,x,t,t)
return A.Dt(C.fC,A.dH(C.c0,v,C.a2,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gb6B(),u.gb6D(),u.gb6F(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.D(0,-0.005)),u.f,t,t,t,u.gb3G(),t)}}
B.aEw.prototype={
u(d){var x=this,w=A.M8(x.w,new A.ni(x.c,x.d),null,x.r,!0)
return A.Cl(w,x.e,null)}}
B.axw.prototype={
nm(d){var x=this.a,w=new A.d9(new Float64Array(16))
if(w.l5(x)===0)A.ai(A.hF(x,"other","Matrix cannot be inverted"))
x=new A.el(new Float64Array(3))
x.h4(d.a,d.b,0)
x=w.nn(x).a
return new A.D(x[0],x[1])}}
B.abw.prototype={
H(){return"_GestureType."+this.b}}
B.beJ.prototype={
H(){return"PanAxis."+this.b}}
B.ahq.prototype={
c_(){this.cL()
this.d8()
this.fS()},
m(){var x=this,w=x.bD$
if(w!=null)w.Z(0,x.gfE())
x.bD$=null
x.a8()}}
B.a4J.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a4J&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gC(d){var x=this
return A.aq(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a5X)","~(a5Y)","~(TG)","~(lT)"])
B.bWL.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ahq.prototype
x.aN6=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.ac1.prototype,"gb6D","b6E",1)
x(v,"gb6F","b6G",2)
x(v,"gb6B","b6C",3)
x(v,"gb3G","b3H",4)
w(v,"gRm","b09",0)
w(v,"gRs","b1L",0)
w(v,"galx","b2P",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.J7,A.I)
w(B.ahq,A.a1)
w(B.ac1,B.ahq)
w(B.bWL,A.bN)
w(B.aEw,A.O)
w(B.axw,A.dC)
v(A.fv,[B.abw,B.beJ])
w(B.a4J,A.J)
x(B.ahq,A.hA)})()
A.bt(b.typeUniverse,JSON.parse('{"J7":{"I":[],"e":[],"f":[]},"ac1":{"a1":["J7"]},"aEw":{"O":[],"e":[],"f":[]},"axw":{"dC":["d9"],"aO":[]}}'))
var y={z:A.w("ck<a1<I>>"),B:A.w("KI"),l:A.w("Ek"),g:A.w("ag"),A:A.w("bu<D>"),f:A.w("bu<S>")};(function constants(){D.cl4=new B.beJ(3,"free")
D.rU=new B.abw(0,"pan")
D.z7=new B.abw(1,"scale")
D.chA=new B.abw(2,"rotate")})()};
(a=>{a["qEsMuybEK0LTjNneefO/G/5xOf4="]=a.current})($__dart_deferred_initializers__);