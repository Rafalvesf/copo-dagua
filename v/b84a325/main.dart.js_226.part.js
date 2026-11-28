((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cRS(d,e,f,g){return new B.K4(d,e,f,g,null)},
bbY(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.av(0,e)
w=f.av(0,e)
return e.ah(0,w.rn(A.ag(x.MH(w)/t,0,1)))},
dnF(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.av(0,q),o=e.b,n=o.av(0,q),m=e.d,l=m.av(0,q),k=p.MH(n),j=n.MH(n),i=p.MH(l),h=l.MH(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bbY(d,q,o),B.bbY(d,o,x),B.bbY(d,x,m),B.bbY(d,m,q)]
v=A.di()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bf()},
dub(){var x=A.hn()
return new B.aAn(x,$.ac())},
d82(d,e,f){return Math.log(f/d)/Math.log(e/100)},
d9l(d,e){var x,w,v,u,t,s,r=new A.dh(new Float64Array(16))
r.cc(d)
r.ld(r)
x=e.a
w=e.b
v=new A.ey(new Float64Array(3))
v.ha(x,w,0)
v=r.nu(v)
u=e.c
t=new A.ey(new Float64Array(3))
t.ha(u,w,0)
t=r.nu(t)
w=e.d
s=new A.ey(new Float64Array(3))
s.ha(u,w,0)
s=r.nu(s)
u=new A.ey(new Float64Array(3))
u.ha(x,w,0)
u=r.nu(u)
x=new A.ey(new Float64Array(3))
x.cc(v)
w=new A.ey(new Float64Array(3))
w.cc(t)
v=new A.ey(new Float64Array(3))
v.cc(s)
t=new A.ey(new Float64Array(3))
t.cc(u)
return new B.a6A(x,w,v,t)},
d7U(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.R,w=0;w<4;++w){v=r[w]
u=B.dnF(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.J(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.J(x.a,t)}return B.cV4(x)},
cV4(d){return new A.J(A.iU(C.k.a8(d.a,9)),A.iU(C.k.a8(d.b,9)))},
dAD(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bp:C.a1},
K4:function K4(d,e,f,g,h){var _=this
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
_.eu$=f
_.bF$=g
_.c=_.a=null},
c34:function c34(){},
aHs:function aHs(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAn:function aAn(d,e){var _=this
_.a=d
_.X$=0
_.Z$=e
_.aG$=_.bn$=0},
adq:function adq(d,e){this.a=d
this.b=e},
bjW:function bjW(d,e){this.a=d
this.b=e},
ajC:function ajC(){},
a6A:function a6A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[172],B)
D=c[438]
B.K4.prototype={
P(){var x=null,w=y.z
return new B.ae_(new A.c2(x,w),new A.c2(x,w),x,x)}}
B.ae_.prototype={
gdX(){var x=this.d
if(x===$){this.a.toString
x=B.dub()
this.d=x}return x},
gQw(){var x,w=$.az.ac$.x.h(0,this.e).gaO()
w.toString
x=y.g.a(w).gN(0)
return this.a.f.Nm(new A.ad(0,0,0+x.a,0+x.b))},
gUY(){var x=$.az.ac$.x.h(0,this.f).gaO()
x.toString
x=y.g.a(x).gN(0)
return new A.ad(0,0,0+x.a,0+x.b)},
DI(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.R)){x=new A.dh(new Float64Array(16))
x.cc(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dh(new Float64Array(16))
w.cc(a0)
w.ez(a1.a,a1.b,0,1)
v=B.d9l(w,d.gUY())
if(d.gQw().gaA0(0))return w
x=d.gQw()
u=d.ay
t=A.hn()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.ez(q/2,o/2,0,1)
t.tU(u)
t.ez(-q/2,-o/2,0,1)
u=new A.ey(new Float64Array(3))
u.ha(r,x,0)
u=t.nu(u)
q=new A.ey(new Float64Array(3))
q.ha(s,x,0)
q=t.nu(q)
x=new A.ey(new Float64Array(3))
x.ha(s,p,0)
x=t.nu(x)
s=new A.ey(new Float64Array(3))
s.ha(r,p,0)
s=t.nu(s)
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
x.ha(m,l,0)
u=new A.ey(new Float64Array(3))
u.ha(k,l,0)
s=new A.ey(new Float64Array(3))
s.ha(k,j,0)
r=new A.ey(new Float64Array(3))
r.ha(m,j,0)
q=new A.ey(new Float64Array(3))
q.cc(x)
x=new A.ey(new Float64Array(3))
x.cc(u)
u=new A.ey(new Float64Array(3))
u.cc(s)
s=new A.ey(new Float64Array(3))
s.cc(r)
i=new B.a6A(q,x,u,s)
h=B.d7U(i,v)
if(h.l(0,C.R))return w
x=w.a_C().a
u=x[0]
x=x[1]
g=a0.Ck()
u-=h.a*g
x-=h.b*g
f=new A.dh(new Float64Array(16))
f.cc(a0)
s=new A.ey(new Float64Array(3))
s.ha(u,x,0)
f.aez(s)
e=B.d7U(i,B.d9l(f,d.gUY()))
if(e.l(0,C.R))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.dh(new Float64Array(16))
x.cc(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.dh(new Float64Array(16))
s.cc(a0)
r=new A.ey(new Float64Array(3))
r.ha(u,x,0)
s.aez(r)
return s},
a4k(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dh(new Float64Array(16))
x.cc(d)
return x}w=q.gdX().a.Ck()
x=q.gUY()
v=q.gQw()
u=q.gUY()
t=q.gQw()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ag(s,t.ax,t.at)/w
x=new A.dh(new Float64Array(16))
x.cc(d)
x.nA(r,r,r,1)
return x},
b7u(d,e,f){var x,w,v,u
if(e===0){x=new A.dh(new Float64Array(16))
x.cc(d)
return x}w=this.gdX().nt(f)
x=new A.dh(new Float64Array(16))
x.cc(d)
v=w.a
u=w.b
x.ez(v,u,0,1)
x.tU(-e)
x.ez(-v,-u,0,1)
return x},
RE(d){var x
A:{x=!0
if(D.cm8===d){x=!1
break A}if(D.zI===d){this.a.toString
break A}if(D.tp===d||d==null){this.a.toString
break A}x=null}return x},
ala(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zI
else return D.tp},
b9b(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d2(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a_(0,v.gS6())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d2(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a_(0,v.gSc())
v.w=null}v.Q=v.ch=null
v.at=v.gdX().a.Ck()
v.as=v.gdX().nt(d.b)
v.ax=v.ay},
b9d(d){var x,w,v,u,t,s,r=this,q=r.gdX().a.Ck(),p=r.x=d.c,o=r.gdX().nt(p),n=r.ch
if(n===D.tp)n=r.ch=r.ala(d)
else if(n==null){n=r.ala(d)
r.ch=n}if(!r.RE(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdX().sv(0,r.a4k(r.gdX().a,n*d.d/q))
x=r.gdX().nt(p)
n=r.gdX()
w=r.gdX().a
v=r.as
v.toString
n.sv(0,r.DI(w,x.av(0,v)))
u=r.gdX().nt(p)
p=r.as
p.toString
if(!B.cV4(p).l(0,B.cV4(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdX().sv(0,r.b7u(r.gdX().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dAD(n,o)}n=r.as
n.toString
s=o.av(0,n)
r.gdX().sv(0,r.DI(r.gdX().a,s))
r.as=r.gdX().nt(p)
break}r.a.toString},
b99(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a_(0,l.gS6())
x=l.w
if(x!=null)x.a.a_(0,l.gSc())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.RE(x)){l.Q=null
return}A:{if(D.tp===x){x=d.a.a
if(x.gem()<50){l.Q=null
return}w=l.gdX().a.a_C().a
v=w[0]
w=w[1]
l.a.toString
u=A.b6H(0.0000135,v,x.a,0)
l.a.toString
t=A.b6H(0.0000135,w,x.b,0)
x=x.gem()
l.a.toString
s=B.d82(x,0.0000135,10)
x=u.gFF()
r=t.gFF()
q=y.A
p=q.i("hj<bt.T>")
o=l.y
l.r=new A.bj(o,new A.hj(new A.kh(C.le),new A.bz(new A.J(v,w),new A.J(x,r),q),p),p.i("bj<bt.T>"))
o.e=A.e5(0,0,0,C.k.aK(s*1000),0,0)
o.am(0,l.gS6())
l.y.co(0)
break A}if(D.zI===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdX().a.Ck()
l.a.toString
m=A.b6H(0.0026999999999999997,n,x/10,0)
l.a.toString
s=B.d82(w,0.0000135,0.1)
x=m.jL(0,s)
w=y.f
v=w.i("hj<bt.T>")
r=l.z
l.w=new A.bj(r,new A.hj(new A.kh(C.le),new A.bz(n,x,w),v),v.i("bj<bt.T>"))
r.e=A.e5(0,0,0,C.k.aK(s*1000),0,0)
r.am(0,l.gSc())
l.z.co(0)
break A}break A}},
b5W(d){var x,w,v,u,t,s,r,q=this,p=d.gh4(),o=d.gbA(d)
if(y.l.b(d)){x=d.ge_(d)===C.eV
if(x)q.a.toString
if(x){q.a.toString
x=o.ah(0,d.gua())
w=d.gua()
v=A.LF(d.gdV(d),null,w,x)
if(!q.RE(D.tp)){q.a.toString
return}u=q.gdX().nt(p)
t=q.gdX().nt(p.av(0,v))
q.gdX().sv(0,q.DI(q.gdX().a,t.av(0,u)))
q.a.toString
return}if(d.gua().b===0)return
x=d.gua()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gkd(d)
else return
q.a.toString
if(!q.RE(D.zI))return
u=q.gdX().nt(p)
q.gdX().sv(0,q.a4k(q.gdX().a,s))
r=q.gdX().nt(p)
q.gdX().sv(0,q.DI(q.gdX().a,r.av(0,u)))
q.a.toString},
b2m(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a_(0,r.gS6())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdX().a.a_C().a
x=q[0]
q=q[1]
w=r.gdX()
v=r.gdX().a
u=r.gdX()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DI(v,u.nt(s.aC(0,t.gv(t))).av(0,r.gdX().nt(new A.J(x,q)))))},
b4_(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a_(0,s.gSc())
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
u=x.nt(v)
s.gdX().sv(0,s.a4k(s.gdX().a,w/r))
t=s.gdX().nt(s.x)
s.gdX().sv(0,s.DI(s.gdX().a,t.av(0,u)))},
b53(){this.q(new B.c34())},
al(){var x=this,w=null
x.aH()
x.y=A.cB(w,w,w,1,w,x)
x.z=A.cB(w,w,w,1,w,x)
x.gdX().am(0,x.gamM())},
bb(d){this.bw(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdX().a_(0,x.gamM())
x.a.toString
w=x.gdX()
w.Z$=$.ac()
w.X$=0
x.aP0()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdX().a
w=u.a.w
v=new B.aHs(w,u.e,C.z,!0,x,t,t)
return A.Er(C.fP,A.dP(C.bZ,v,C.a2,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gb98(),u.gb9a(),u.gb9c(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.J(0,-0.005)),u.f,t,t,t,u.gb5V(),t)}}
B.aHs.prototype={
u(d){var x=this,w=A.Nf(x.w,new A.hd(x.c,x.d),null,x.r,!0)
return A.wV(w,x.e,null)}}
B.aAn.prototype={
nt(d){var x=this.a,w=new A.dh(new Float64Array(16))
if(w.ld(x)===0)A.aj(A.fV(x,"other","Matrix cannot be inverted"))
x=new A.ey(new Float64Array(3))
x.ha(d.a,d.b,0)
x=w.nu(x).a
return new A.J(x[0],x[1])}}
B.adq.prototype={
I(){return"_GestureType."+this.b}}
B.bjW.prototype={
I(){return"PanAxis."+this.b}}
B.ajC.prototype={
bU(){this.cA()
this.d0()
this.fZ()},
m(){var x=this,w=x.bF$
if(w!=null)w.a_(0,x.gfI())
x.bF$=null
x.a7()}}
B.a6A.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a6A&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gC(d){var x=this
return A.at(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a7O)","~(a7P)","~(UV)","~(mc)"])
B.c34.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ajC.prototype
x.aP0=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.ae_.prototype,"gb9a","b9b",1)
x(v,"gb9c","b9d",2)
x(v,"gb98","b99",3)
x(v,"gb5V","b5W",4)
w(v,"gS6","b2m",0)
w(v,"gSc","b4_",0)
w(v,"gamM","b53",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.K4,A.K)
w(B.ajC,A.a_)
w(B.ae_,B.ajC)
w(B.c34,A.bR)
w(B.aHs,A.L)
w(B.aAn,A.d6)
v(A.fr,[B.adq,B.bjW])
w(B.a6A,A.I)
x(B.ajC,A.hO)})()
A.bq(b.typeUniverse,JSON.parse('{"K4":{"K":[],"e":[],"f":[]},"ae_":{"a_":["K4"]},"aHs":{"L":[],"e":[],"f":[]},"aAn":{"d6":["dh"],"aR":[]}}'))
var y={z:A.w("c2<a_<K>>"),B:A.w("LJ"),l:A.w("Fj"),g:A.w("ah"),A:A.w("bz<J>"),f:A.w("bz<P>")};(function constants(){D.cpI=new B.bjW(3,"free")
D.tp=new B.adq(0,"pan")
D.zI=new B.adq(1,"scale")
D.cm8=new B.adq(2,"rotate")})()};
(a=>{a["mjfm75M50xz33CCAzLh8Bk9ZrmQ="]=a.current})($__dart_deferred_initializers__);