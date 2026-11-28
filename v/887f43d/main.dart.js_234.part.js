((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cXm(d,e,f,g){return new B.Ko(d,e,f,g,null)},
bcK(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aw(0,e)
w=f.aw(0,e)
return e.am(0,w.rg(A.aj(x.MA(w)/t,0,1)))},
dtM(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aw(0,q),o=e.b,n=o.aw(0,q),m=e.d,l=m.aw(0,q),k=p.MA(n),j=n.MA(n),i=p.MA(l),h=l.MA(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bcK(d,q,o),B.bcK(d,o,x),B.bcK(d,x,m),B.bcK(d,m,q)]
v=A.dr()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bc()},
dAl(){var x=A.fW()
return new B.aBa(x,$.aa())},
ddP(d,e,f){return Math.log(f/d)/Math.log(e/100)},
dfc(d,e){var x,w,v,u,t,s,r=new A.dk(new Float64Array(16))
r.c4(d)
r.l7(r)
x=e.a
w=e.b
v=new A.es(new Float64Array(3))
v.h5(x,w,0)
v=r.mQ(v)
u=e.c
t=new A.es(new Float64Array(3))
t.h5(u,w,0)
t=r.mQ(t)
w=e.d
s=new A.es(new Float64Array(3))
s.h5(u,w,0)
s=r.mQ(s)
u=new A.es(new Float64Array(3))
u.h5(x,w,0)
u=r.mQ(u)
x=new A.es(new Float64Array(3))
x.c4(v)
w=new A.es(new Float64Array(3))
w.c4(t)
v=new A.es(new Float64Array(3))
v.c4(s)
t=new A.es(new Float64Array(3))
t.c4(u)
return new B.a78(x,w,v,t)},
ddE(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.T,w=0;w<4;++w){v=r[w]
u=B.dtM(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.K(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.K(x.a,t)}return B.d_D(x)},
d_D(d){return new A.K(A.iO(C.k.a8(d.a,9)),A.iO(C.k.a8(d.b,9)))},
dGR(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bJ:C.av},
Ko:function Ko(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
aep:function aep(d,e,f,g){var _=this
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
c62:function c62(){},
aI6:function aI6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBa:function aBa(d,e){var _=this
_.a=d
_.W$=0
_.Z$=e
_.aJ$=_.bv$=0},
adR:function adR(d,e){this.a=d
this.b=e},
bl1:function bl1(d,e){this.a=d
this.b=e},
ak5:function ak5(){},
a78:function a78(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[178],B)
D=c[434]
B.Ko.prototype={
R(){var x=null,w=y.z
return new B.aep(new A.cl(x,w),new A.cl(x,w),x,x)}}
B.aep.prototype={
gdX(){var x=this.d
if(x===$){this.a.toString
x=B.dAl()
this.d=x}return x},
gQg(){var x,w=$.az.a7$.x.h(0,this.e).gaM()
w.toString
x=y.g.a(w).gM(0)
return this.a.f.N9(new A.ac(0,0,0+x.a,0+x.b))},
gV5(){var x=$.az.a7$.x.h(0,this.f).gaM()
x.toString
x=y.g.a(x).gM(0)
return new A.ac(0,0,0+x.a,0+x.b)},
DF(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.T)){x=new A.dk(new Float64Array(16))
x.c4(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dk(new Float64Array(16))
w.c4(a0)
w.e8(a1.a,a1.b,0,1)
v=B.dfc(w,d.gV5())
if(d.gQg().gazO(0))return w
x=d.gQg()
u=d.ay
t=A.fW()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.e8(q/2,o/2,0,1)
t.tF(u)
t.e8(-q/2,-o/2,0,1)
u=new A.es(new Float64Array(3))
u.h5(r,x,0)
u=t.mQ(u)
q=new A.es(new Float64Array(3))
q.h5(s,x,0)
q=t.mQ(q)
x=new A.es(new Float64Array(3))
x.h5(s,p,0)
x=t.mQ(x)
s=new A.es(new Float64Array(3))
s.h5(r,p,0)
s=t.mQ(s)
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
i=new B.a78(q,x,u,s)
h=B.ddE(i,v)
if(h.l(0,C.T))return w
x=w.a_y().a
u=x[0]
x=x[1]
g=a0.Ci()
u-=h.a*g
x-=h.b*g
f=new A.dk(new Float64Array(16))
f.c4(a0)
s=new A.es(new Float64Array(3))
s.h5(u,x,0)
f.aeB(s)
e=B.ddE(i,B.dfc(f,d.gV5()))
if(e.l(0,C.T))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.dk(new Float64Array(16))
x.c4(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.dk(new Float64Array(16))
s.c4(a0)
r=new A.es(new Float64Array(3))
r.h5(u,x,0)
s.aeB(r)
return s},
a4d(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dk(new Float64Array(16))
x.c4(d)
return x}w=q.gdX().a.Ci()
x=q.gV5()
v=q.gQg()
u=q.gV5()
t=q.gQg()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.aj(s,t.ax,t.at)/w
x=new A.dk(new Float64Array(16))
x.c4(d)
x.mV(r,r,r,1)
return x},
b6S(d,e,f){var x,w,v,u
if(e===0){x=new A.dk(new Float64Array(16))
x.c4(d)
return x}w=this.gdX().nC(f)
x=new A.dk(new Float64Array(16))
x.c4(d)
v=w.a
u=w.b
x.e8(v,u,0,1)
x.tF(-e)
x.e8(-v,-u,0,1)
return x},
Rz(d){var x
A:{x=!0
if(D.clX===d){x=!1
break A}if(D.zL===d){this.a.toString
break A}if(D.tj===d||d==null){this.a.toString
break A}x=null}return x},
ale(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zL
else return D.tj},
b8y(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cZ(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a3(0,v.gS2())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cZ(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a3(0,v.gS8())
v.w=null}v.Q=v.ch=null
v.at=v.gdX().a.Ci()
v.as=v.gdX().nC(d.b)
v.ax=v.ay},
b8A(d){var x,w,v,u,t,s,r=this,q=r.gdX().a.Ci(),p=r.x=d.c,o=r.gdX().nC(p),n=r.ch
if(n===D.tj)n=r.ch=r.ale(d)
else if(n==null){n=r.ale(d)
r.ch=n}if(!r.Rz(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdX().sv(0,r.a4d(r.gdX().a,n*d.d/q))
x=r.gdX().nC(p)
n=r.gdX()
w=r.gdX().a
v=r.as
v.toString
n.sv(0,r.DF(w,x.aw(0,v)))
u=r.gdX().nC(p)
p=r.as
p.toString
if(!B.d_D(p).l(0,B.d_D(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdX().sv(0,r.b6S(r.gdX().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dGR(n,o)}n=r.as
n.toString
s=o.aw(0,n)
r.gdX().sv(0,r.DF(r.gdX().a,s))
r.as=r.gdX().nC(p)
break}r.a.toString},
b8w(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a3(0,l.gS2())
x=l.w
if(x!=null)x.a.a3(0,l.gS8())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.Rz(x)){l.Q=null
return}A:{if(D.tj===x){x=d.a.a
if(x.gex()<50){l.Q=null
return}w=l.gdX().a.a_y().a
v=w[0]
w=w[1]
l.a.toString
u=A.arg(0.0000135,v,x.a,0,C.fk)
l.a.toString
t=A.arg(0.0000135,w,x.b,0,C.fk)
x=x.gex()
l.a.toString
s=B.ddP(x,0.0000135,10)
x=u.gFC()
r=t.gFC()
q=y.A
p=q.i("fR<bs.T>")
o=l.y
l.r=new A.bk(o,new A.fR(new A.ko(C.mV),new A.bC(new A.K(v,w),new A.K(x,r),q),p),p.i("bk<bs.T>"))
o.e=A.ej(0,0,0,C.k.aN(s*1000),0,0)
o.an(0,l.gS2())
l.y.cW(0)
break A}if(D.zL===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdX().a.Ci()
l.a.toString
m=A.arg(0.0026999999999999997,n,x/10,0,C.fk)
l.a.toString
s=B.ddP(w,0.0000135,0.1)
x=m.iy(0,s)
w=y.f
v=w.i("fR<bs.T>")
r=l.z
l.w=new A.bk(r,new A.fR(new A.ko(C.mV),new A.bC(n,x,w),v),v.i("bk<bs.T>"))
r.e=A.ej(0,0,0,C.k.aN(s*1000),0,0)
r.an(0,l.gS8())
l.z.cW(0)
break A}break A}},
b5b(d){var x,w,v,u,t,s,r,q=this,p=d.gh0(),o=d.gbz(d)
if(y.l.b(d)){x=d.ge_(d)===C.eY
if(x)q.a.toString
if(x){q.a.toString
x=o.am(0,d.gtY())
w=d.gtY()
v=A.M_(d.gdS(d),null,w,x)
if(!q.Rz(D.tj)){q.a.toString
return}u=q.gdX().nC(p)
t=q.gdX().nC(p.aw(0,v))
q.gdX().sv(0,q.DF(q.gdX().a,t.aw(0,u)))
q.a.toString
return}if(d.gtY().b===0)return
x=d.gtY()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjY(d)
else return
q.a.toString
if(!q.Rz(D.zL))return
u=q.gdX().nC(p)
q.gdX().sv(0,q.a4d(q.gdX().a,s))
r=q.gdX().nC(p)
q.gdX().sv(0,q.DF(q.gdX().a,r.aw(0,u)))
q.a.toString},
b20(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a3(0,r.gS2())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdX().a.a_y().a
x=q[0]
q=q[1]
w=r.gdX()
v=r.gdX().a
u=r.gdX()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DF(v,u.nC(s.aI(0,t.gv(t))).aw(0,r.gdX().nC(new A.K(x,q)))))},
b3i(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a3(0,s.gS8())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aI(0,r.gv(r))
r=s.gdX().a.Ci()
x=s.gdX()
v=s.x
v===$&&A.b()
u=x.nC(v)
s.gdX().sv(0,s.a4d(s.gdX().a,w/r))
t=s.gdX().nC(s.x)
s.gdX().sv(0,s.DF(s.gdX().a,t.aw(0,u)))},
b4m(){this.p(new B.c62())},
ad(){var x=this,w=null
x.aq()
x.y=A.cD(w,w,w,w,x)
x.z=A.cD(w,w,w,w,x)
x.gdX().an(0,x.gamL())},
bi(d){this.bD(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdX().a3(0,x.gamL())
x.a.toString
w=x.gdX()
w.Z$=$.aa()
w.W$=0
x.aOU()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdX().a
w=u.a.w
v=new B.aI6(w,u.e,C.y,!0,x,t,t)
return A.Az(C.fu,A.cp(C.bu,v,C.U,!1,t,t,t,t,t,t,t,t,t,t,u.gb8v(),u.gb8x(),u.gb8z(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.K(0,-0.005)),u.f,t,t,t,u.gb5a(),t)}}
B.aI6.prototype={
u(d){var x=this,w=A.NF(x.w,new A.ha(x.c,x.d),null,x.r,!0)
return A.uW(w,x.e,null)}}
B.aBa.prototype={
nC(d){var x=this.a,w=new A.dk(new Float64Array(16))
if(w.l7(x)===0)A.an(A.h3(x,"other","Matrix cannot be inverted"))
x=new A.es(new Float64Array(3))
x.h5(d.a,d.b,0)
x=w.mQ(x).a
return new A.K(x[0],x[1])}}
B.adR.prototype={
I(){return"_GestureType."+this.b}}
B.bl1.prototype={
I(){return"PanAxis."+this.b}}
B.ak5.prototype={
bS(){this.cv()
this.cP()
this.fU()},
m(){var x=this,w=x.bG$
if(w!=null)w.a3(0,x.gfF())
x.bG$=null
x.a6()}}
B.a78.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a78&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.as(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a8k)","~(a8l)","~(Vo)","~(mi)"])
B.c62.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ak5.prototype
x.aOU=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aep.prototype,"gb8x","b8y",1)
x(v,"gb8z","b8A",2)
x(v,"gb8v","b8w",3)
x(v,"gb5a","b5b",4)
w(v,"gS2","b20",0)
w(v,"gS8","b3i",0)
w(v,"gamL","b4m",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Ko,A.G)
w(B.ak5,A.a_)
w(B.aep,B.ak5)
w(B.c62,A.bL)
w(B.aI6,A.L)
w(B.aBa,A.cZ)
v(A.f7,[B.adR,B.bl1])
w(B.a78,A.M)
x(B.ak5,A.hT)})()
A.br(b.typeUniverse,JSON.parse('{"Ko":{"G":[],"e":[],"f":[]},"aep":{"a_":["Ko"]},"aI6":{"L":[],"e":[],"f":[]},"aBa":{"cZ":["dk"],"aW":[]}}'))
var y={z:A.C("cl<a_<G>>"),B:A.C("M3"),l:A.C("Fq"),g:A.C("ah"),A:A.C("bC<K>"),f:A.C("bC<T>")};(function constants(){D.P0=new A.b8(C.lC,20,C.t,null,null,null)
D.cpA=new B.bl1(3,"free")
D.tj=new B.adR(0,"pan")
D.zL=new B.adR(1,"scale")
D.clX=new B.adR(2,"rotate")})()};
(a=>{a["z3OFAPImhS2nS46ZCcwTHEky6K8="]=a.current})($__dart_deferred_initializers__);