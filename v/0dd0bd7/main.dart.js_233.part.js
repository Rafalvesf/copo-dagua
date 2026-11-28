((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cVL(d,e,f,g){return new B.K7(d,e,f,g,null)},
bbX(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aw(0,e)
w=f.aw(0,e)
return e.am(0,w.r9(A.ak(x.Mv(w)/t,0,1)))},
ds3(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aw(0,q),o=e.b,n=o.aw(0,q),m=e.d,l=m.aw(0,q),k=p.Mv(n),j=n.Mv(n),i=p.Mv(l),h=l.Mv(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bbX(d,q,o),B.bbX(d,o,x),B.bbX(d,x,m),B.bbX(d,m,q)]
v=A.dt()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.be()},
dyG(){var x=A.fU()
return new B.aAD(x,$.aa())},
dca(d,e,f){return Math.log(f/d)/Math.log(e/100)},
ddw(d,e){var x,w,v,u,t,s,r=new A.dj(new Float64Array(16))
r.c4(d)
r.l6(r)
x=e.a
w=e.b
v=new A.er(new Float64Array(3))
v.h3(x,w,0)
v=r.mM(v)
u=e.c
t=new A.er(new Float64Array(3))
t.h3(u,w,0)
t=r.mM(t)
w=e.d
s=new A.er(new Float64Array(3))
s.h3(u,w,0)
s=r.mM(s)
u=new A.er(new Float64Array(3))
u.h3(x,w,0)
u=r.mM(u)
x=new A.er(new Float64Array(3))
x.c4(v)
w=new A.er(new Float64Array(3))
w.c4(t)
v=new A.er(new Float64Array(3))
v.c4(s)
t=new A.er(new Float64Array(3))
t.c4(u)
return new B.a6O(x,w,v,t)},
dc0(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.T,w=0;w<4;++w){v=r[w]
u=B.ds3(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.K(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.K(x.a,t)}return B.cZ5(x)},
cZ5(d){return new A.K(A.iJ(C.k.a8(d.a,9)),A.iJ(C.k.a8(d.b,9)))},
dF9(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bJ:C.av},
K7:function K7(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
ae2:function ae2(d,e,f,g){var _=this
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
c4X:function c4X(){},
aHw:function aHw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAD:function aAD(d,e){var _=this
_.a=d
_.W$=0
_.Z$=e
_.aJ$=_.bv$=0},
adu:function adu(d,e){this.a=d
this.b=e},
bkb:function bkb(d,e){this.a=d
this.b=e},
ajH:function ajH(){},
a6O:function a6O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[178],B)
D=c[433]
B.K7.prototype={
S(){var x=null,w=y.z
return new B.ae2(new A.ck(x,w),new A.ck(x,w),x,x)}}
B.ae2.prototype={
gdW(){var x=this.d
if(x===$){this.a.toString
x=B.dyG()
this.d=x}return x},
gQa(){var x,w=$.ay.a6$.x.h(0,this.e).gaM()
w.toString
x=y.g.a(w).gM(0)
return this.a.f.N4(new A.ae(0,0,0+x.a,0+x.b))},
gUZ(){var x=$.ay.a6$.x.h(0,this.f).gaM()
x.toString
x=y.g.a(x).gM(0)
return new A.ae(0,0,0+x.a,0+x.b)},
Dz(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.T)){x=new A.dj(new Float64Array(16))
x.c4(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dj(new Float64Array(16))
w.c4(a0)
w.e8(a1.a,a1.b,0,1)
v=B.ddw(w,d.gUZ())
if(d.gQa().gazD(0))return w
x=d.gQa()
u=d.ay
t=A.fU()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.e8(q/2,o/2,0,1)
t.tE(u)
t.e8(-q/2,-o/2,0,1)
u=new A.er(new Float64Array(3))
u.h3(r,x,0)
u=t.mM(u)
q=new A.er(new Float64Array(3))
q.h3(s,x,0)
q=t.mM(q)
x=new A.er(new Float64Array(3))
x.h3(s,p,0)
x=t.mM(x)
s=new A.er(new Float64Array(3))
s.h3(r,p,0)
s=t.mM(s)
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
i=new B.a6O(q,x,u,s)
h=B.dc0(i,v)
if(h.l(0,C.T))return w
x=w.a_q().a
u=x[0]
x=x[1]
g=a0.Cc()
u-=h.a*g
x-=h.b*g
f=new A.dj(new Float64Array(16))
f.c4(a0)
s=new A.er(new Float64Array(3))
s.h3(u,x,0)
f.aet(s)
e=B.dc0(i,B.ddw(f,d.gUZ()))
if(e.l(0,C.T))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.dj(new Float64Array(16))
x.c4(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.dj(new Float64Array(16))
s.c4(a0)
r=new A.er(new Float64Array(3))
r.h3(u,x,0)
s.aet(r)
return s},
a47(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dj(new Float64Array(16))
x.c4(d)
return x}w=q.gdW().a.Cc()
x=q.gUZ()
v=q.gQa()
u=q.gUZ()
t=q.gQa()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ak(s,t.ax,t.at)/w
x=new A.dj(new Float64Array(16))
x.c4(d)
x.mS(r,r,r,1)
return x},
b6t(d,e,f){var x,w,v,u
if(e===0){x=new A.dj(new Float64Array(16))
x.c4(d)
return x}w=this.gdW().nv(f)
x=new A.dj(new Float64Array(16))
x.c4(d)
v=w.a
u=w.b
x.e8(v,u,0,1)
x.tE(-e)
x.e8(-v,-u,0,1)
return x},
Rs(d){var x
A:{x=!0
if(D.clD===d){x=!1
break A}if(D.zH===d){this.a.toString
break A}if(D.ti===d||d==null){this.a.toString
break A}x=null}return x},
al5(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zH
else return D.ti},
b89(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cZ(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a2(0,v.gRW())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cZ(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a2(0,v.gS1())
v.w=null}v.Q=v.ch=null
v.at=v.gdW().a.Cc()
v.as=v.gdW().nv(d.b)
v.ax=v.ay},
b8b(d){var x,w,v,u,t,s,r=this,q=r.gdW().a.Cc(),p=r.x=d.c,o=r.gdW().nv(p),n=r.ch
if(n===D.ti)n=r.ch=r.al5(d)
else if(n==null){n=r.al5(d)
r.ch=n}if(!r.Rs(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdW().sv(0,r.a47(r.gdW().a,n*d.d/q))
x=r.gdW().nv(p)
n=r.gdW()
w=r.gdW().a
v=r.as
v.toString
n.sv(0,r.Dz(w,x.aw(0,v)))
u=r.gdW().nv(p)
p=r.as
p.toString
if(!B.cZ5(p).l(0,B.cZ5(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdW().sv(0,r.b6t(r.gdW().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dF9(n,o)}n=r.as
n.toString
s=o.aw(0,n)
r.gdW().sv(0,r.Dz(r.gdW().a,s))
r.as=r.gdW().nv(p)
break}r.a.toString},
b87(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a2(0,l.gRW())
x=l.w
if(x!=null)x.a.a2(0,l.gS1())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.Rs(x)){l.Q=null
return}A:{if(D.ti===x){x=d.a.a
if(x.gev()<50){l.Q=null
return}w=l.gdW().a.a_q().a
v=w[0]
w=w[1]
l.a.toString
u=A.aqN(0.0000135,v,x.a,0,C.fK)
l.a.toString
t=A.aqN(0.0000135,w,x.b,0,C.fK)
x=x.gev()
l.a.toString
s=B.dca(x,0.0000135,10)
x=u.gFv()
r=t.gFv()
q=y.A
p=q.i("hn<by.T>")
o=l.y
l.r=new A.bo(o,new A.hn(new A.l6(C.mS),new A.bF(new A.K(v,w),new A.K(x,r),q),p),p.i("bo<by.T>"))
o.e=A.ea(0,0,0,C.k.aN(s*1000),0,0)
o.an(0,l.gRW())
l.y.cw(0)
break A}if(D.zH===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdW().a.Cc()
l.a.toString
m=A.aqN(0.0026999999999999997,n,x/10,0,C.fK)
l.a.toString
s=B.dca(w,0.0000135,0.1)
x=m.ix(0,s)
w=y.f
v=w.i("hn<by.T>")
r=l.z
l.w=new A.bo(r,new A.hn(new A.l6(C.mS),new A.bF(n,x,w),v),v.i("bo<by.T>"))
r.e=A.ea(0,0,0,C.k.aN(s*1000),0,0)
r.an(0,l.gS1())
l.z.cw(0)
break A}break A}},
b4R(d){var x,w,v,u,t,s,r,q=this,p=d.gfZ(),o=d.gby(d)
if(y.l.b(d)){x=d.gdY(d)===C.eY
if(x)q.a.toString
if(x){q.a.toString
x=o.am(0,d.gtW())
w=d.gtW()
v=A.LK(d.gdR(d),null,w,x)
if(!q.Rs(D.ti)){q.a.toString
return}u=q.gdW().nv(p)
t=q.gdW().nv(p.aw(0,v))
q.gdW().sv(0,q.Dz(q.gdW().a,t.aw(0,u)))
q.a.toString
return}if(d.gtW().b===0)return
x=d.gtW()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjX(d)
else return
q.a.toString
if(!q.Rs(D.zH))return
u=q.gdW().nv(p)
q.gdW().sv(0,q.a47(q.gdW().a,s))
r=q.gdW().nv(p)
q.gdW().sv(0,q.Dz(q.gdW().a,r.aw(0,u)))
q.a.toString},
b1G(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a2(0,r.gRW())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdW().a.a_q().a
x=q[0]
q=q[1]
w=r.gdW()
v=r.gdW().a
u=r.gdW()
t=r.r
s=t.b
t=t.a
w.sv(0,r.Dz(v,u.nv(s.aH(0,t.gv(t))).aw(0,r.gdW().nv(new A.K(x,q)))))},
b2Y(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a2(0,s.gS1())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aH(0,r.gv(r))
r=s.gdW().a.Cc()
x=s.gdW()
v=s.x
v===$&&A.b()
u=x.nv(v)
s.gdW().sv(0,s.a47(s.gdW().a,w/r))
t=s.gdW().nv(s.x)
s.gdW().sv(0,s.Dz(s.gdW().a,t.aw(0,u)))},
b41(){this.p(new B.c4X())},
ad(){var x=this,w=null
x.aq()
x.y=A.cI(w,w,w,w,x)
x.z=A.cI(w,w,w,w,x)
x.gdW().an(0,x.gamC())},
bm(d){this.bE(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdW().a2(0,x.gamC())
x.a.toString
w=x.gdW()
w.Z$=$.aa()
w.W$=0
x.aOD()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdW().a
w=u.a.w
v=new B.aHw(w,u.e,C.y,!0,x,t,t)
return A.Eo(C.fX,A.cp(C.bu,v,C.W,!1,t,t,t,t,t,t,t,t,t,t,u.gb86(),u.gb88(),u.gb8a(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.K(0,-0.005)),u.f,t,t,t,u.gb4Q(),t)}}
B.aHw.prototype={
u(d){var x=this,w=A.Nn(x.w,new A.hf(x.c,x.d),null,x.r,!0)
return A.wU(w,x.e,null)}}
B.aAD.prototype={
nv(d){var x=this.a,w=new A.dj(new Float64Array(16))
if(w.l6(x)===0)A.al(A.h_(x,"other","Matrix cannot be inverted"))
x=new A.er(new Float64Array(3))
x.h3(d.a,d.b,0)
x=w.mM(x).a
return new A.K(x[0],x[1])}}
B.adu.prototype={
I(){return"_GestureType."+this.b}}
B.bkb.prototype={
I(){return"PanAxis."+this.b}}
B.ajH.prototype={
bV(){this.cH()
this.d6()
this.fS()},
m(){var x=this,w=x.bF$
if(w!=null)w.a2(0,x.gfE())
x.bF$=null
x.a7()}}
B.a6O.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a6O&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.ar(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a80)","~(a81)","~(V6)","~(mg)"])
B.c4X.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ajH.prototype
x.aOD=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.ae2.prototype,"gb88","b89",1)
x(v,"gb8a","b8b",2)
x(v,"gb86","b87",3)
x(v,"gb4Q","b4R",4)
w(v,"gRW","b1G",0)
w(v,"gS1","b2Y",0)
w(v,"gamC","b41",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.K7,A.G)
w(B.ajH,A.a0)
w(B.ae2,B.ajH)
w(B.c4X,A.bK)
w(B.aHw,A.M)
w(B.aAD,A.d1)
v(A.ff,[B.adu,B.bkb])
w(B.a6O,A.L)
x(B.ajH,A.hQ)})()
A.bp(b.typeUniverse,JSON.parse('{"K7":{"G":[],"e":[],"f":[]},"ae2":{"a0":["K7"]},"aHw":{"M":[],"e":[],"f":[]},"aAD":{"d1":["dj"],"aV":[]}}'))
var y={z:A.y("ck<a0<G>>"),B:A.y("LO"),l:A.y("Fg"),g:A.y("aj"),A:A.y("bF<K>"),f:A.y("bF<T>")};(function constants(){D.OU=new A.b7(C.lz,20,C.t,null,null,null)
D.cph=new B.bkb(3,"free")
D.ti=new B.adu(0,"pan")
D.zH=new B.adu(1,"scale")
D.clD=new B.adu(2,"rotate")})()};
(a=>{a["Uh75I1oEktzLwI9dVq7OT9CDgSY="]=a.current})($__dart_deferred_initializers__);