((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cX2(d,e,f,g){return new B.Kq(d,e,f,g,null)},
bcT(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aw(0,e)
w=f.aw(0,e)
return e.ak(0,w.rf(A.ai(x.Mz(w)/t,0,1)))},
dto(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aw(0,q),o=e.b,n=o.aw(0,q),m=e.d,l=m.aw(0,q),k=p.Mz(n),j=n.Mz(n),i=p.Mz(l),h=l.Mz(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bcT(d,q,o),B.bcT(d,o,x),B.bcT(d,x,m),B.bcT(d,m,q)]
v=A.ds()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bc()},
dzZ(){var x=A.fY()
return new B.aBh(x,$.aa())},
ddu(d,e,f){return Math.log(f/d)/Math.log(e/100)},
deT(d,e){var x,w,v,u,t,s,r=new A.di(new Float64Array(16))
r.c4(d)
r.l6(r)
x=e.a
w=e.b
v=new A.es(new Float64Array(3))
v.h5(x,w,0)
v=r.mP(v)
u=e.c
t=new A.es(new Float64Array(3))
t.h5(u,w,0)
t=r.mP(t)
w=e.d
s=new A.es(new Float64Array(3))
s.h5(u,w,0)
s=r.mP(s)
u=new A.es(new Float64Array(3))
u.h5(x,w,0)
u=r.mP(u)
x=new A.es(new Float64Array(3))
x.c4(v)
w=new A.es(new Float64Array(3))
w.c4(t)
v=new A.es(new Float64Array(3))
v.c4(s)
t=new A.es(new Float64Array(3))
t.c4(u)
return new B.a7a(x,w,v,t)},
ddj(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.T,w=0;w<4;++w){v=r[w]
u=B.dto(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.K(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.K(x.a,t)}return B.d_i(x)},
d_i(d){return new A.K(A.iN(C.k.a8(d.a,9)),A.iN(C.k.a8(d.b,9)))},
dGu(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bJ:C.av},
Kq:function Kq(d,e,f,g,h){var _=this
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
_.er$=f
_.bG$=g
_.c=_.a=null},
c5y:function c5y(){},
aIe:function aIe(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBh:function aBh(d,e){var _=this
_.a=d
_.V$=0
_.Z$=e
_.aJ$=_.bv$=0},
adT:function adT(d,e){this.a=d
this.b=e},
bla:function bla(d,e){this.a=d
this.b=e},
aka:function aka(){},
a7a:function a7a(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[178],B)
D=c[434]
B.Kq.prototype={
P(){var x=null,w=y.z
return new B.aes(new A.cm(x,w),new A.cm(x,w),x,x)}}
B.aes.prototype={
gdX(){var x=this.d
if(x===$){this.a.toString
x=B.dzZ()
this.d=x}return x},
gQf(){var x,w=$.az.a7$.x.h(0,this.e).gaM()
w.toString
x=y.g.a(w).gM(0)
return this.a.f.N8(new A.ab(0,0,0+x.a,0+x.b))},
gV3(){var x=$.az.a7$.x.h(0,this.f).gaM()
x.toString
x=y.g.a(x).gM(0)
return new A.ab(0,0,0+x.a,0+x.b)},
DE(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.T)){x=new A.di(new Float64Array(16))
x.c4(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.di(new Float64Array(16))
w.c4(a0)
w.e8(a1.a,a1.b,0,1)
v=B.deT(w,d.gV3())
if(d.gQf().gazK(0))return w
x=d.gQf()
u=d.ay
t=A.fY()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.e8(q/2,o/2,0,1)
t.tE(u)
t.e8(-q/2,-o/2,0,1)
u=new A.es(new Float64Array(3))
u.h5(r,x,0)
u=t.mP(u)
q=new A.es(new Float64Array(3))
q.h5(s,x,0)
q=t.mP(q)
x=new A.es(new Float64Array(3))
x.h5(s,p,0)
x=t.mP(x)
s=new A.es(new Float64Array(3))
s.h5(r,p,0)
s=t.mP(s)
r=new Float64Array(3)
new A.es(r).c4(u)
u=new Float64Array(3)
new A.es(u).c4(q)
q=new Float64Array(3)
new A.es(q).c4(x)
x=new Float64Array(3)
new A.es(x).c4(s)
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
x=new A.es(new Float64Array(3))
x.h5(m,l,0)
u=new A.es(new Float64Array(3))
u.h5(k,l,0)
s=new A.es(new Float64Array(3))
s.h5(k,j,0)
r=new A.es(new Float64Array(3))
r.h5(m,j,0)
q=new A.es(new Float64Array(3))
q.c4(x)
x=new A.es(new Float64Array(3))
x.c4(u)
u=new A.es(new Float64Array(3))
u.c4(s)
s=new A.es(new Float64Array(3))
s.c4(r)
i=new B.a7a(q,x,u,s)
h=B.ddj(i,v)
if(h.l(0,C.T))return w
x=w.a_w().a
u=x[0]
x=x[1]
g=a0.Ch()
u-=h.a*g
x-=h.b*g
f=new A.di(new Float64Array(16))
f.c4(a0)
s=new A.es(new Float64Array(3))
s.h5(u,x,0)
f.aez(s)
e=B.ddj(i,B.deT(f,d.gV3()))
if(e.l(0,C.T))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.di(new Float64Array(16))
x.c4(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.di(new Float64Array(16))
s.c4(a0)
r=new A.es(new Float64Array(3))
r.h5(u,x,0)
s.aez(r)
return s},
a4a(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.di(new Float64Array(16))
x.c4(d)
return x}w=q.gdX().a.Ch()
x=q.gV3()
v=q.gQf()
u=q.gV3()
t=q.gQf()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ai(s,t.ax,t.at)/w
x=new A.di(new Float64Array(16))
x.c4(d)
x.mU(r,r,r,1)
return x},
b6P(d,e,f){var x,w,v,u
if(e===0){x=new A.di(new Float64Array(16))
x.c4(d)
return x}w=this.gdX().nB(f)
x=new A.di(new Float64Array(16))
x.c4(d)
v=w.a
u=w.b
x.e8(v,u,0,1)
x.tE(-e)
x.e8(-v,-u,0,1)
return x},
Ry(d){var x
A:{x=!0
if(D.cme===d){x=!1
break A}if(D.zN===d){this.a.toString
break A}if(D.th===d||d==null){this.a.toString
break A}x=null}return x},
alb(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zN
else return D.th},
b8v(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cZ(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a3(0,v.gS1())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cZ(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a3(0,v.gS7())
v.w=null}v.Q=v.ch=null
v.at=v.gdX().a.Ch()
v.as=v.gdX().nB(d.b)
v.ax=v.ay},
b8x(d){var x,w,v,u,t,s,r=this,q=r.gdX().a.Ch(),p=r.x=d.c,o=r.gdX().nB(p),n=r.ch
if(n===D.th)n=r.ch=r.alb(d)
else if(n==null){n=r.alb(d)
r.ch=n}if(!r.Ry(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdX().sv(0,r.a4a(r.gdX().a,n*d.d/q))
x=r.gdX().nB(p)
n=r.gdX()
w=r.gdX().a
v=r.as
v.toString
n.sv(0,r.DE(w,x.aw(0,v)))
u=r.gdX().nB(p)
p=r.as
p.toString
if(!B.d_i(p).l(0,B.d_i(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdX().sv(0,r.b6P(r.gdX().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dGu(n,o)}n=r.as
n.toString
s=o.aw(0,n)
r.gdX().sv(0,r.DE(r.gdX().a,s))
r.as=r.gdX().nB(p)
break}r.a.toString},
b8t(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a3(0,l.gS1())
x=l.w
if(x!=null)x.a.a3(0,l.gS7())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.Ry(x)){l.Q=null
return}A:{if(D.th===x){x=d.a.a
if(x.gex()<50){l.Q=null
return}w=l.gdX().a.a_w().a
v=w[0]
w=w[1]
l.a.toString
u=A.arl(0.0000135,v,x.a,0,C.fk)
l.a.toString
t=A.arl(0.0000135,w,x.b,0,C.fk)
x=x.gex()
l.a.toString
s=B.ddu(x,0.0000135,10)
x=u.gFB()
r=t.gFB()
q=y.A
p=q.i("fT<bs.T>")
o=l.y
l.r=new A.bi(o,new A.fT(new A.kp(C.mW),new A.bC(new A.K(v,w),new A.K(x,r),q),p),p.i("bi<bs.T>"))
o.e=A.ei(0,0,0,C.k.aN(s*1000),0,0)
o.al(0,l.gS1())
l.y.cW(0)
break A}if(D.zN===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdX().a.Ch()
l.a.toString
m=A.arl(0.0026999999999999997,n,x/10,0,C.fk)
l.a.toString
s=B.ddu(w,0.0000135,0.1)
x=m.iy(0,s)
w=y.f
v=w.i("fT<bs.T>")
r=l.z
l.w=new A.bi(r,new A.fT(new A.kp(C.mW),new A.bC(n,x,w),v),v.i("bi<bs.T>"))
r.e=A.ei(0,0,0,C.k.aN(s*1000),0,0)
r.al(0,l.gS7())
l.z.cW(0)
break A}break A}},
b58(d){var x,w,v,u,t,s,r,q=this,p=d.gh0(),o=d.gby(d)
if(y.l.b(d)){x=d.ge_(d)===C.eZ
if(x)q.a.toString
if(x){q.a.toString
x=o.ak(0,d.gtX())
w=d.gtX()
v=A.M1(d.gdS(d),null,w,x)
if(!q.Ry(D.th)){q.a.toString
return}u=q.gdX().nB(p)
t=q.gdX().nB(p.aw(0,v))
q.gdX().sv(0,q.DE(q.gdX().a,t.aw(0,u)))
q.a.toString
return}if(d.gtX().b===0)return
x=d.gtX()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjX(d)
else return
q.a.toString
if(!q.Ry(D.zN))return
u=q.gdX().nB(p)
q.gdX().sv(0,q.a4a(q.gdX().a,s))
r=q.gdX().nB(p)
q.gdX().sv(0,q.DE(q.gdX().a,r.aw(0,u)))
q.a.toString},
b1Y(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a3(0,r.gS1())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdX().a.a_w().a
x=q[0]
q=q[1]
w=r.gdX()
v=r.gdX().a
u=r.gdX()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DE(v,u.nB(s.aI(0,t.gv(t))).aw(0,r.gdX().nB(new A.K(x,q)))))},
b3f(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a3(0,s.gS7())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aI(0,r.gv(r))
r=s.gdX().a.Ch()
x=s.gdX()
v=s.x
v===$&&A.b()
u=x.nB(v)
s.gdX().sv(0,s.a4a(s.gdX().a,w/r))
t=s.gdX().nB(s.x)
s.gdX().sv(0,s.DE(s.gdX().a,t.aw(0,u)))},
b4j(){this.n(new B.c5y())},
ac(){var x=this,w=null
x.ao()
x.y=A.cE(w,w,w,w,x)
x.z=A.cE(w,w,w,w,x)
x.gdX().al(0,x.gamI())},
bh(d){this.bD(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdX().a3(0,x.gamI())
x.a.toString
w=x.gdX()
w.Z$=$.aa()
w.V$=0
x.aOQ()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdX().a
w=u.a.w
v=new B.aIe(w,u.e,C.y,!0,x,t,t)
return A.Az(C.fv,A.cp(C.bu,v,C.U,!1,t,t,t,t,t,t,t,t,t,t,u.gb8s(),u.gb8u(),u.gb8w(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.K(0,-0.005)),u.f,t,t,t,u.gb57(),t)}}
B.aIe.prototype={
u(d){var x=this,w=A.NH(x.w,new A.hb(x.c,x.d),null,x.r,!0)
return A.uZ(w,x.e,null)}}
B.aBh.prototype={
nB(d){var x=this.a,w=new A.di(new Float64Array(16))
if(w.l6(x)===0)A.am(A.h4(x,"other","Matrix cannot be inverted"))
x=new A.es(new Float64Array(3))
x.h5(d.a,d.b,0)
x=w.mP(x).a
return new A.K(x[0],x[1])}}
B.adT.prototype={
I(){return"_GestureType."+this.b}}
B.bla.prototype={
I(){return"PanAxis."+this.b}}
B.aka.prototype={
bS(){this.cr()
this.cP()
this.fU()},
m(){var x=this,w=x.bG$
if(w!=null)w.a3(0,x.gfF())
x.bG$=null
x.a6()}}
B.a7a.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a7a&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.as(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a8m)","~(a8n)","~(Vr)","~(mk)"])
B.c5y.prototype={
$0(){},
$S:0};(function aliases(){var x=B.aka.prototype
x.aOQ=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aes.prototype,"gb8u","b8v",1)
x(v,"gb8w","b8x",2)
x(v,"gb8s","b8t",3)
x(v,"gb57","b58",4)
w(v,"gS1","b1Y",0)
w(v,"gS7","b3f",0)
w(v,"gamI","b4j",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Kq,A.G)
w(B.aka,A.Z)
w(B.aes,B.aka)
w(B.c5y,A.bL)
w(B.aIe,A.L)
w(B.aBh,A.cZ)
v(A.f7,[B.adT,B.bla])
w(B.a7a,A.M)
x(B.aka,A.hT)})()
A.br(b.typeUniverse,JSON.parse('{"Kq":{"G":[],"e":[],"f":[]},"aes":{"Z":["Kq"]},"aIe":{"L":[],"e":[],"f":[]},"aBh":{"cZ":["di"],"aW":[]}}'))
var y={z:A.A("cm<Z<G>>"),B:A.A("M5"),l:A.A("Fu"),g:A.A("ag"),A:A.A("bC<K>"),f:A.A("bC<T>")};(function constants(){D.P2=new A.b8(C.lD,20,C.t,null,null,null)
D.cpT=new B.bla(3,"free")
D.th=new B.adT(0,"pan")
D.zN=new B.adT(1,"scale")
D.cme=new B.adT(2,"rotate")})()};
(a=>{a["3zFktJSMcFmpXApyh5Rhw/inglc="]=a.current})($__dart_deferred_initializers__);