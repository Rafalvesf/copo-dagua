((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cWf(d,e,f,g){return new B.Kj(d,e,f,g,null)},
bd5(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aA(0,e)
w=f.aA(0,e)
return e.ak(0,w.rp(A.ah(x.N7(w)/t,0,1)))},
dsl(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aA(0,q),o=e.b,n=o.aA(0,q),m=e.d,l=m.aA(0,q),k=p.N7(n),j=n.N7(n),i=p.N7(l),h=l.N7(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bd5(d,q,o),B.bd5(d,o,x),B.bd5(d,x,m),B.bd5(d,m,q)]
v=A.dm()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.be()},
dyU(){var x=A.ht()
return new B.aBd(x,$.aa())},
dcz(d,e,f){return Math.log(f/d)/Math.log(e/100)},
ddW(d,e){var x,w,v,u,t,s,r=new A.dl(new Float64Array(16))
r.cc(d)
r.lf(r)
x=e.a
w=e.b
v=new A.ez(new Float64Array(3))
v.hd(x,w,0)
v=r.nx(v)
u=e.c
t=new A.ez(new Float64Array(3))
t.hd(u,w,0)
t=r.nx(t)
w=e.d
s=new A.ez(new Float64Array(3))
s.hd(u,w,0)
s=r.nx(s)
u=new A.ez(new Float64Array(3))
u.hd(x,w,0)
u=r.nx(u)
x=new A.ez(new Float64Array(3))
x.cc(v)
w=new A.ez(new Float64Array(3))
w.cc(t)
v=new A.ez(new Float64Array(3))
v.cc(s)
t=new A.ez(new Float64Array(3))
t.cc(u)
return new B.a70(x,w,v,t)},
dcp(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.U,w=0;w<4;++w){v=r[w]
u=B.dsl(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.M(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.M(x.a,t)}return B.cZv(x)},
cZv(d){return new A.M(A.iO(C.k.a8(d.a,9)),A.iO(C.k.a8(d.b,9)))},
dFo(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.by:C.a3},
Kj:function Kj(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
aey:function aey(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.ex$=f
_.bG$=g
_.c=_.a=null},
c5R:function c5R(){},
aIm:function aIm(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBd:function aBd(d,e){var _=this
_.a=d
_.W$=0
_.Y$=e
_.aH$=_.bn$=0},
adW:function adW(d,e){this.a=d
this.b=e},
bl3:function bl3(d,e){this.a=d
this.b=e},
akh:function akh(){},
a70:function a70(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[178],B)
D=c[432]
B.Kj.prototype={
R(){var x=null,w=y.z
return new B.aey(new A.c6(x,w),new A.c6(x,w),x,x)}}
B.aey.prototype={
gdZ(){var x=this.d
if(x===$){this.a.toString
x=B.dyU()
this.d=x}return x},
gQW(){var x,w=$.aB.ad$.x.h(0,this.e).gaP()
w.toString
x=y.g.a(w).gN(0)
return this.a.f.NN(new A.ae(0,0,0+x.a,0+x.b))},
gVC(){var x=$.aB.ad$.x.h(0,this.f).gaP()
x.toString
x=y.g.a(x).gN(0)
return new A.ae(0,0,0+x.a,0+x.b)},
DY(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.U)){x=new A.dl(new Float64Array(16))
x.cc(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dl(new Float64Array(16))
w.cc(a0)
w.eB(a1.a,a1.b,0,1)
v=B.ddW(w,d.gVC())
if(d.gQW().gaAV(0))return w
x=d.gQW()
u=d.ay
t=A.ht()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.eB(q/2,o/2,0,1)
t.tW(u)
t.eB(-q/2,-o/2,0,1)
u=new A.ez(new Float64Array(3))
u.hd(r,x,0)
u=t.nx(u)
q=new A.ez(new Float64Array(3))
q.hd(s,x,0)
q=t.nx(q)
x=new A.ez(new Float64Array(3))
x.hd(s,p,0)
x=t.nx(x)
s=new A.ez(new Float64Array(3))
s.hd(r,p,0)
s=t.nx(s)
r=new Float64Array(3)
new A.ez(r).cc(u)
u=new Float64Array(3)
new A.ez(u).cc(q)
q=new Float64Array(3)
new A.ez(q).cc(x)
x=new Float64Array(3)
new A.ez(x).cc(s)
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
x=new A.ez(new Float64Array(3))
x.hd(m,l,0)
u=new A.ez(new Float64Array(3))
u.hd(k,l,0)
s=new A.ez(new Float64Array(3))
s.hd(k,j,0)
r=new A.ez(new Float64Array(3))
r.hd(m,j,0)
q=new A.ez(new Float64Array(3))
q.cc(x)
x=new A.ez(new Float64Array(3))
x.cc(u)
u=new A.ez(new Float64Array(3))
u.cc(s)
s=new A.ez(new Float64Array(3))
s.cc(r)
i=new B.a70(q,x,u,s)
h=B.dcp(i,v)
if(h.l(0,C.U))return w
x=w.a0h().a
u=x[0]
x=x[1]
g=a0.Cw()
u-=h.a*g
x-=h.b*g
f=new A.dl(new Float64Array(16))
f.cc(a0)
s=new A.ez(new Float64Array(3))
s.hd(u,x,0)
f.afq(s)
e=B.dcp(i,B.ddW(f,d.gVC()))
if(e.l(0,C.U))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.dl(new Float64Array(16))
x.cc(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.dl(new Float64Array(16))
s.cc(a0)
r=new A.ez(new Float64Array(3))
r.hd(u,x,0)
s.afq(r)
return s},
a5a(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dl(new Float64Array(16))
x.cc(d)
return x}w=q.gdZ().a.Cw()
x=q.gVC()
v=q.gQW()
u=q.gVC()
t=q.gQW()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ah(s,t.ax,t.at)/w
x=new A.dl(new Float64Array(16))
x.cc(d)
x.nD(r,r,r,1)
return x},
b8I(d,e,f){var x,w,v,u
if(e===0){x=new A.dl(new Float64Array(16))
x.cc(d)
return x}w=this.gdZ().nw(f)
x=new A.dl(new Float64Array(16))
x.cc(d)
v=w.a
u=w.b
x.eB(v,u,0,1)
x.tW(-e)
x.eB(-v,-u,0,1)
return x},
S7(d){var x
A:{x=!0
if(D.cnU===d){x=!1
break A}if(D.A7===d){this.a.toString
break A}if(D.tQ===d||d==null){this.a.toString
break A}x=null}return x},
am4(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.A7
else return D.tQ},
bap(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d5(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a_(0,v.gSA())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d5(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a_(0,v.gSG())
v.w=null}v.Q=v.ch=null
v.at=v.gdZ().a.Cw()
v.as=v.gdZ().nw(d.b)
v.ax=v.ay},
bar(d){var x,w,v,u,t,s,r=this,q=r.gdZ().a.Cw(),p=r.x=d.c,o=r.gdZ().nw(p),n=r.ch
if(n===D.tQ)n=r.ch=r.am4(d)
else if(n==null){n=r.am4(d)
r.ch=n}if(!r.S7(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdZ().sv(0,r.a5a(r.gdZ().a,n*d.d/q))
x=r.gdZ().nw(p)
n=r.gdZ()
w=r.gdZ().a
v=r.as
v.toString
n.sv(0,r.DY(w,x.aA(0,v)))
u=r.gdZ().nw(p)
p=r.as
p.toString
if(!B.cZv(p).l(0,B.cZv(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdZ().sv(0,r.b8I(r.gdZ().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dFo(n,o)}n=r.as
n.toString
s=o.aA(0,n)
r.gdZ().sv(0,r.DY(r.gdZ().a,s))
r.as=r.gdZ().nw(p)
break}r.a.toString},
ban(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a_(0,l.gSA())
x=l.w
if(x!=null)x.a.a_(0,l.gSG())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.S7(x)){l.Q=null
return}A:{if(D.tQ===x){x=d.a.a
if(x.gep()<50){l.Q=null
return}w=l.gdZ().a.a0h().a
v=w[0]
w=w[1]
l.a.toString
u=A.b7P(0.0000135,v,x.a,0)
l.a.toString
t=A.b7P(0.0000135,w,x.b,0)
x=x.gep()
l.a.toString
s=B.dcz(x,0.0000135,10)
x=u.gFX()
r=t.gFX()
q=y.A
p=q.i("hn<bw.T>")
o=l.y
l.r=new A.bm(o,new A.hn(new A.kk(C.lC),new A.bC(new A.M(v,w),new A.M(x,r),q),p),p.i("bm<bw.T>"))
o.e=A.e4(0,0,0,C.k.aK(s*1000),0,0)
o.an(0,l.gSA())
l.y.cp(0)
break A}if(D.A7===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdZ().a.Cw()
l.a.toString
m=A.b7P(0.0026999999999999997,n,x/10,0)
l.a.toString
s=B.dcz(w,0.0000135,0.1)
x=m.jL(0,s)
w=y.f
v=w.i("hn<bw.T>")
r=l.z
l.w=new A.bm(r,new A.hn(new A.kk(C.lC),new A.bC(n,x,w),v),v.i("bm<bw.T>"))
r.e=A.e4(0,0,0,C.k.aK(s*1000),0,0)
r.an(0,l.gSG())
l.z.cp(0)
break A}break A}},
b77(d){var x,w,v,u,t,s,r,q=this,p=d.gh7(),o=d.gbC(d)
if(y.l.b(d)){x=d.ge1(d)===C.f2
if(x)q.a.toString
if(x){q.a.toString
x=o.ak(0,d.gud())
w=d.gud()
v=A.LV(d.gdX(d),null,w,x)
if(!q.S7(D.tQ)){q.a.toString
return}u=q.gdZ().nw(p)
t=q.gdZ().nw(p.aA(0,v))
q.gdZ().sv(0,q.DY(q.gdZ().a,t.aA(0,u)))
q.a.toString
return}if(d.gud().b===0)return
x=d.gud()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gke(d)
else return
q.a.toString
if(!q.S7(D.A7))return
u=q.gdZ().nw(p)
q.gdZ().sv(0,q.a5a(q.gdZ().a,s))
r=q.gdZ().nw(p)
q.gdZ().sv(0,q.DY(q.gdZ().a,r.aA(0,u)))
q.a.toString},
b3z(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a_(0,r.gSA())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdZ().a.a0h().a
x=q[0]
q=q[1]
w=r.gdZ()
v=r.gdZ().a
u=r.gdZ()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DY(v,u.nw(s.aD(0,t.gv(t))).aA(0,r.gdZ().nw(new A.M(x,q)))))},
b5c(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a_(0,s.gSG())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aD(0,r.gv(r))
r=s.gdZ().a.Cw()
x=s.gdZ()
v=s.x
v===$&&A.b()
u=x.nw(v)
s.gdZ().sv(0,s.a5a(s.gdZ().a,w/r))
t=s.gdZ().nw(s.x)
s.gdZ().sv(0,s.DY(s.gdZ().a,t.aA(0,u)))},
b6g(){this.p(new B.c5R())},
ac(){var x=this,w=null
x.au()
x.y=A.cE(w,w,w,1,w,x)
x.z=A.cE(w,w,w,1,w,x)
x.gdZ().an(0,x.ganB())},
ba(d){this.bz(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdZ().a_(0,x.ganB())
x.a.toString
w=x.gdZ()
w.Y$=$.aa()
w.W$=0
x.aPY()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdZ().a
w=u.a.w
v=new B.aIm(w,u.e,C.z,!0,x,t,t)
return A.EB(C.fZ,A.cR(C.bN,v,C.Y,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gbam(),u.gbao(),u.gbaq(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.M(0,-0.005)),u.f,t,t,t,u.gb76(),t)}}
B.aIm.prototype={
u(d){var x=this,w=A.Nv(x.w,new A.hh(x.c,x.d),null,x.r,!0)
return A.x0(w,x.e,null)}}
B.aBd.prototype={
nw(d){var x=this.a,w=new A.dl(new Float64Array(16))
if(w.lf(x)===0)A.ak(A.h0(x,"other","Matrix cannot be inverted"))
x=new A.ez(new Float64Array(3))
x.hd(d.a,d.b,0)
x=w.nx(x).a
return new A.M(x[0],x[1])}}
B.adW.prototype={
I(){return"_GestureType."+this.b}}
B.bl3.prototype={
I(){return"PanAxis."+this.b}}
B.akh.prototype={
bU(){this.cB()
this.d3()
this.h_()},
m(){var x=this,w=x.bG$
if(w!=null)w.a_(0,x.gfJ())
x.bG$=null
x.a6()}}
B.a70.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a70&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.at(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a8f)","~(a8g)","~(Vj)","~(md)"])
B.c5R.prototype={
$0(){},
$S:0};(function aliases(){var x=B.akh.prototype
x.aPY=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aey.prototype,"gbao","bap",1)
x(v,"gbaq","bar",2)
x(v,"gbam","ban",3)
x(v,"gb76","b77",4)
w(v,"gSA","b3z",0)
w(v,"gSG","b5c",0)
w(v,"ganB","b6g",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Kj,A.G)
w(B.akh,A.Y)
w(B.aey,B.akh)
w(B.c5R,A.bR)
w(B.aIm,A.J)
w(B.aBd,A.d4)
v(A.f8,[B.adW,B.bl3])
w(B.a70,A.L)
x(B.akh,A.hP)})()
A.br(b.typeUniverse,JSON.parse('{"Kj":{"G":[],"e":[],"f":[]},"aey":{"Y":["Kj"]},"aIm":{"J":[],"e":[],"f":[]},"aBd":{"d4":["dl"],"aT":[]}}'))
var y={z:A.w("c6<Y<G>>"),B:A.w("LZ"),l:A.w("Ft"),g:A.w("ai"),A:A.w("bC<M>"),f:A.w("bC<S>")};(function constants(){D.PL=new A.b7(C.lX,20,C.t,null,null,null)
D.crx=new B.bl3(3,"free")
D.tQ=new B.adW(0,"pan")
D.A7=new B.adW(1,"scale")
D.cnU=new B.adW(2,"rotate")})()};
(a=>{a["0wNFLUcSPfBUwWHrVa24PycqTK0="]=a.current})($__dart_deferred_initializers__);