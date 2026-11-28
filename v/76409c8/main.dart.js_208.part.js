((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cWZ(d,e,f,g){return new B.Ko(d,e,f,g,null)},
bdz(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.az(0,e)
w=f.az(0,e)
return e.aj(0,w.rh(A.ai(x.MG(w)/t,0,1)))},
dtx(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.az(0,q),o=e.b,n=o.az(0,q),m=e.d,l=m.az(0,q),k=p.MG(n),j=n.MG(n),i=p.MG(l),h=l.MG(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bdz(d,q,o),B.bdz(d,o,x),B.bdz(d,x,m),B.bdz(d,m,q)]
v=A.ds()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bd()},
dA7(){var x=A.fY()
return new B.aBO(x,$.ab())},
ddv(d,e,f){return Math.log(f/d)/Math.log(e/100)},
deW(d,e){var x,w,v,u,t,s,r=new A.di(new Float64Array(16))
r.c5(d)
r.l7(r)
x=e.a
w=e.b
v=new A.et(new Float64Array(3))
v.h7(x,w,0)
v=r.mR(v)
u=e.c
t=new A.et(new Float64Array(3))
t.h7(u,w,0)
t=r.mR(t)
w=e.d
s=new A.et(new Float64Array(3))
s.h7(u,w,0)
s=r.mR(s)
u=new A.et(new Float64Array(3))
u.h7(x,w,0)
u=r.mR(u)
x=new A.et(new Float64Array(3))
x.c5(v)
w=new A.et(new Float64Array(3))
w.c5(t)
v=new A.et(new Float64Array(3))
v.c5(s)
t=new A.et(new Float64Array(3))
t.c5(u)
return new B.a7o(x,w,v,t)},
ddk(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.R,w=0;w<4;++w){v=r[w]
u=B.dtx(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.K(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.K(x.a,t)}return B.d_h(x)},
d_h(d){return new A.K(A.j2(C.k.aa(d.a,9)),A.j2(C.k.aa(d.b,9)))},
dGC(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bR:C.av},
Ko:function Ko(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
aeM:function aeM(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.eu$=f
_.bG$=g
_.c=_.a=null},
c6p:function c6p(){},
aIN:function aIN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBO:function aBO(d,e){var _=this
_.a=d
_.X$=0
_.a_$=e
_.aF$=_.bt$=0},
aea:function aea(d,e){this.a=d
this.b=e},
blM:function blM(d,e){this.a=d
this.b=e},
akA:function akA(){},
a7o:function a7o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[180],B)
D=c[452]
B.Ko.prototype={
P(){var x=null,w=y.z
return new B.aeM(new A.cm(x,w),new A.cm(x,w),x,x)}}
B.aeM.prototype={
gdW(){var x=this.d
if(x===$){this.a.toString
x=B.dA7()
this.d=x}return x},
gQo(){var x,w=$.aA.a7$.x.h(0,this.e).gaO()
w.toString
x=y.g.a(w).gM(0)
return this.a.f.Nf(new A.ac(0,0,0+x.a,0+x.b))},
gVb(){var x=$.aA.a7$.x.h(0,this.f).gaO()
x.toString
x=y.g.a(x).gM(0)
return new A.ac(0,0,0+x.a,0+x.b)},
DC(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.R)){x=new A.di(new Float64Array(16))
x.c5(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.di(new Float64Array(16))
w.c5(a0)
w.e8(a1.a,a1.b,0,1)
v=B.deW(w,d.gVb())
if(d.gQo().gaAf(0))return w
x=d.gQo()
u=d.ay
t=A.fY()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.e8(q/2,o/2,0,1)
t.tF(u)
t.e8(-q/2,-o/2,0,1)
u=new A.et(new Float64Array(3))
u.h7(r,x,0)
u=t.mR(u)
q=new A.et(new Float64Array(3))
q.h7(s,x,0)
q=t.mR(q)
x=new A.et(new Float64Array(3))
x.h7(s,p,0)
x=t.mR(x)
s=new A.et(new Float64Array(3))
s.h7(r,p,0)
s=t.mR(s)
r=new Float64Array(3)
new A.et(r).c5(u)
u=new Float64Array(3)
new A.et(u).c5(q)
q=new Float64Array(3)
new A.et(q).c5(x)
x=new Float64Array(3)
new A.et(x).c5(s)
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
x=new A.et(new Float64Array(3))
x.h7(m,l,0)
u=new A.et(new Float64Array(3))
u.h7(k,l,0)
s=new A.et(new Float64Array(3))
s.h7(k,j,0)
r=new A.et(new Float64Array(3))
r.h7(m,j,0)
q=new A.et(new Float64Array(3))
q.c5(x)
x=new A.et(new Float64Array(3))
x.c5(u)
u=new A.et(new Float64Array(3))
u.c5(s)
s=new A.et(new Float64Array(3))
s.c5(r)
i=new B.a7o(q,x,u,s)
h=B.ddk(i,v)
if(h.l(0,C.R))return w
x=w.a_C().a
u=x[0]
x=x[1]
g=a0.Cj()
u-=h.a*g
x-=h.b*g
f=new A.di(new Float64Array(16))
f.c5(a0)
s=new A.et(new Float64Array(3))
s.h7(u,x,0)
f.aeL(s)
e=B.ddk(i,B.deW(f,d.gVb()))
if(e.l(0,C.R))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.di(new Float64Array(16))
x.c5(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.di(new Float64Array(16))
s.c5(a0)
r=new A.et(new Float64Array(3))
r.h7(u,x,0)
s.aeL(r)
return s},
a4j(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.di(new Float64Array(16))
x.c5(d)
return x}w=q.gdW().a.Cj()
x=q.gVb()
v=q.gQo()
u=q.gVb()
t=q.gQo()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ai(s,t.ax,t.at)/w
x=new A.di(new Float64Array(16))
x.c5(d)
x.mW(r,r,r,1)
return x},
b7z(d,e,f){var x,w,v,u
if(e===0){x=new A.di(new Float64Array(16))
x.c5(d)
return x}w=this.gdW().nD(f)
x=new A.di(new Float64Array(16))
x.c5(d)
v=w.a
u=w.b
x.e8(v,u,0,1)
x.tF(-e)
x.e8(-v,-u,0,1)
return x},
RJ(d){var x
A:{x=!0
if(D.cmC===d){x=!1
break A}if(D.zM===d){this.a.toString
break A}if(D.tm===d||d==null){this.a.toString
break A}x=null}return x},
alv(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zM
else return D.tm},
b9i(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cY(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a2(0,v.gSc())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cY(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a2(0,v.gSi())
v.w=null}v.Q=v.ch=null
v.at=v.gdW().a.Cj()
v.as=v.gdW().nD(d.b)
v.ax=v.ay},
b9k(d){var x,w,v,u,t,s,r=this,q=r.gdW().a.Cj(),p=r.x=d.c,o=r.gdW().nD(p),n=r.ch
if(n===D.tm)n=r.ch=r.alv(d)
else if(n==null){n=r.alv(d)
r.ch=n}if(!r.RJ(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdW().sv(0,r.a4j(r.gdW().a,n*d.d/q))
x=r.gdW().nD(p)
n=r.gdW()
w=r.gdW().a
v=r.as
v.toString
n.sv(0,r.DC(w,x.az(0,v)))
u=r.gdW().nD(p)
p=r.as
p.toString
if(!B.d_h(p).l(0,B.d_h(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdW().sv(0,r.b7z(r.gdW().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dGC(n,o)}n=r.as
n.toString
s=o.az(0,n)
r.gdW().sv(0,r.DC(r.gdW().a,s))
r.as=r.gdW().nD(p)
break}r.a.toString},
b9g(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a2(0,l.gSc())
x=l.w
if(x!=null)x.a.a2(0,l.gSi())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.RJ(x)){l.Q=null
return}A:{if(D.tm===x){x=d.a.a
if(x.gez()<50){l.Q=null
return}w=l.gdW().a.a_C().a
v=w[0]
w=w[1]
l.a.toString
u=A.arP(0.0000135,v,x.a,0,C.f4)
l.a.toString
t=A.arP(0.0000135,w,x.b,0,C.f4)
x=x.gez()
l.a.toString
s=B.ddv(x,0.0000135,10)
x=u.gFC()
r=t.gFC()
q=y.A
p=q.i("fS<br.T>")
o=l.y
l.r=new A.bk(o,new A.fS(new A.kv(C.n2),new A.bC(new A.K(v,w),new A.K(x,r),q),p),p.i("bk<br.T>"))
o.e=A.e8(0,0,0,C.k.aP(s*1000),0,0)
o.am(0,l.gSc())
l.y.cW(0)
break A}if(D.zM===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdW().a.Cj()
l.a.toString
m=A.arP(0.0026999999999999997,n,x/10,0,C.f4)
l.a.toString
s=B.ddv(w,0.0000135,0.1)
x=m.iA(0,s)
w=y.f
v=w.i("fS<br.T>")
r=l.z
l.w=new A.bk(r,new A.fS(new A.kv(C.n2),new A.bC(n,x,w),v),v.i("bk<br.T>"))
r.e=A.e8(0,0,0,C.k.aP(s*1000),0,0)
r.am(0,l.gSi())
l.z.cW(0)
break A}break A}},
b5S(d){var x,w,v,u,t,s,r,q=this,p=d.gh2(),o=d.gbz(d)
if(y.l.b(d)){x=d.ge_(d)===C.eY
if(x)q.a.toString
if(x){q.a.toString
x=o.aj(0,d.gtY())
w=d.gtY()
v=A.LY(d.gdS(d),null,w,x)
if(!q.RJ(D.tm)){q.a.toString
return}u=q.gdW().nD(p)
t=q.gdW().nD(p.az(0,v))
q.gdW().sv(0,q.DC(q.gdW().a,t.az(0,u)))
q.a.toString
return}if(d.gtY().b===0)return
x=d.gtY()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.ghG(d)
else return
q.a.toString
if(!q.RJ(D.zM))return
u=q.gdW().nD(p)
q.gdW().sv(0,q.a4j(q.gdW().a,s))
r=q.gdW().nD(p)
q.gdW().sv(0,q.DC(q.gdW().a,r.az(0,u)))
q.a.toString},
b2D(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a2(0,r.gSc())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdW().a.a_C().a
x=q[0]
q=q[1]
w=r.gdW()
v=r.gdW().a
u=r.gdW()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DC(v,u.nD(s.aK(0,t.gv(t))).az(0,r.gdW().nD(new A.K(x,q)))))},
b3V(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a2(0,s.gSi())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aK(0,r.gv(r))
r=s.gdW().a.Cj()
x=s.gdW()
v=s.x
v===$&&A.b()
u=x.nD(v)
s.gdW().sv(0,s.a4j(s.gdW().a,w/r))
t=s.gdW().nD(s.x)
s.gdW().sv(0,s.DC(s.gdW().a,t.az(0,u)))},
b4Z(){this.p(new B.c6p())},
ad(){var x=this,w=null
x.ao()
x.y=A.cF(w,w,w,w,x)
x.z=A.cF(w,w,w,w,x)
x.gdW().am(0,x.gan_())},
bh(d){this.bC(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdW().a2(0,x.gan_())
x.a.toString
w=x.gdW()
w.a_$=$.ab()
w.X$=0
x.aPn()},
t(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdW().a
w=u.a.w
v=new B.aIN(w,u.e,C.x,!0,x,t,t)
return A.Aw(C.fx,A.d5(C.bu,v,C.a_,!1,t,t,t,t,t,t,t,t,t,t,u.gb9f(),u.gb9h(),u.gb9j(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.K(0,-0.005)),u.f,t,t,t,u.gb5R(),t)}}
B.aIN.prototype={
t(d){var x=this,w=A.NE(x.w,new A.h9(x.c,x.d),null,x.r,!0)
return A.uW(w,x.e,null)}}
B.aBO.prototype={
nD(d){var x=this.a,w=new A.di(new Float64Array(16))
if(w.l7(x)===0)A.al(A.h3(x,"other","Matrix cannot be inverted"))
x=new A.et(new Float64Array(3))
x.h7(d.a,d.b,0)
x=w.mR(x).a
return new A.K(x[0],x[1])}}
B.aea.prototype={
I(){return"_GestureType."+this.b}}
B.blM.prototype={
I(){return"PanAxis."+this.b}}
B.akA.prototype={
bS(){this.cr()
this.cN()
this.fW()},
m(){var x=this,w=x.bG$
if(w!=null)w.a2(0,x.gfK())
x.bG$=null
x.a6()}}
B.a7o.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a7o&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.au(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a8B)","~(a8C)","~(VC)","~(mo)"])
B.c6p.prototype={
$0(){},
$S:0};(function aliases(){var x=B.akA.prototype
x.aPn=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aeM.prototype,"gb9h","b9i",1)
x(v,"gb9j","b9k",2)
x(v,"gb9f","b9g",3)
x(v,"gb5R","b5S",4)
w(v,"gSc","b2D",0)
w(v,"gSi","b3V",0)
w(v,"gan_","b4Z",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Ko,A.G)
w(B.akA,A.Z)
w(B.aeM,B.akA)
w(B.c6p,A.bO)
w(B.aIN,A.H)
w(B.aBO,A.cZ)
v(A.fj,[B.aea,B.blM])
w(B.a7o,A.L)
x(B.akA,A.hR)})()
A.bq(b.typeUniverse,JSON.parse('{"Ko":{"G":[],"e":[],"f":[]},"aeM":{"Z":["Ko"]},"aIN":{"H":[],"e":[],"f":[]},"aBO":{"cZ":["di"],"aW":[]}}'))
var y={z:A.B("cm<Z<G>>"),B:A.B("M1"),l:A.B("Fu"),g:A.B("ag"),A:A.B("bC<K>"),f:A.B("bC<T>")};(function constants(){D.cq7=new B.blM(3,"free")
D.tm=new B.aea(0,"pan")
D.zM=new B.aea(1,"scale")
D.cmC=new B.aea(2,"rotate")})()};
(a=>{a["olLmnf9HgTaQ75UNp2w42nCUMS4="]=a.current})($__dart_deferred_initializers__);