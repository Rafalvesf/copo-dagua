((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cX8(d,e,f,g){return new B.Kk(d,e,f,g,null)},
bcE(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aw(0,e)
w=f.aw(0,e)
return e.am(0,w.rd(A.aj(x.MA(w)/t,0,1)))},
dtw(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aw(0,q),o=e.b,n=o.aw(0,q),m=e.d,l=m.aw(0,q),k=p.MA(n),j=n.MA(n),i=p.MA(l),h=l.MA(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bcE(d,q,o),B.bcE(d,o,x),B.bcE(d,x,m),B.bcE(d,m,q)]
v=A.dr()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bc()},
dA6(){var x=A.fX()
return new B.aBa(x,$.aa())},
ddz(d,e,f){return Math.log(f/d)/Math.log(e/100)},
deV(d,e){var x,w,v,u,t,s,r=new A.dk(new Float64Array(16))
r.c4(d)
r.l7(r)
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
return new B.a76(x,w,v,t)},
ddo(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.T,w=0;w<4;++w){v=r[w]
u=B.dtw(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.K(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.K(x.a,t)}return B.d_q(x)},
d_q(d){return new A.K(A.iN(C.k.a8(d.a,9)),A.iN(C.k.a8(d.b,9)))},
dGA(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bJ:C.av},
Kk:function Kk(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
aen:function aen(d,e,f,g){var _=this
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
c5W:function c5W(){},
aI8:function aI8(d,e,f,g,h,i,j){var _=this
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
adP:function adP(d,e){this.a=d
this.b=e},
bkU:function bkU(d,e){this.a=d
this.b=e},
ak5:function ak5(){},
a76:function a76(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[178],B)
D=c[433]
B.Kk.prototype={
R(){var x=null,w=y.z
return new B.aen(new A.cl(x,w),new A.cl(x,w),x,x)}}
B.aen.prototype={
gdW(){var x=this.d
if(x===$){this.a.toString
x=B.dA6()
this.d=x}return x},
gQg(){var x,w=$.az.a7$.x.h(0,this.e).gaM()
w.toString
x=y.g.a(w).gM(0)
return this.a.f.N9(new A.ac(0,0,0+x.a,0+x.b))},
gV5(){var x=$.az.a7$.x.h(0,this.f).gaM()
x.toString
x=y.g.a(x).gM(0)
return new A.ac(0,0,0+x.a,0+x.b)},
DH(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.T)){x=new A.dk(new Float64Array(16))
x.c4(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dk(new Float64Array(16))
w.c4(a0)
w.e8(a1.a,a1.b,0,1)
v=B.deV(w,d.gV5())
if(d.gQg().gazO(0))return w
x=d.gQg()
u=d.ay
t=A.fX()
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
i=new B.a76(q,x,u,s)
h=B.ddo(i,v)
if(h.l(0,C.T))return w
x=w.a_y().a
u=x[0]
x=x[1]
g=a0.Ck()
u-=h.a*g
x-=h.b*g
f=new A.dk(new Float64Array(16))
f.c4(a0)
s=new A.es(new Float64Array(3))
s.h5(u,x,0)
f.aeB(s)
e=B.ddo(i,B.deV(f,d.gV5()))
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
return x}w=q.gdW().a.Ck()
x=q.gV5()
v=q.gQg()
u=q.gV5()
t=q.gQg()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.aj(s,t.ax,t.at)/w
x=new A.dk(new Float64Array(16))
x.c4(d)
x.mU(r,r,r,1)
return x},
b6R(d,e,f){var x,w,v,u
if(e===0){x=new A.dk(new Float64Array(16))
x.c4(d)
return x}w=this.gdW().nA(f)
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
if(D.clR===d){x=!1
break A}if(D.zK===d){this.a.toString
break A}if(D.tk===d||d==null){this.a.toString
break A}x=null}return x},
ale(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zK
else return D.tk},
b8x(d){var x,w,v=this
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
v.at=v.gdW().a.Ck()
v.as=v.gdW().nA(d.b)
v.ax=v.ay},
b8z(d){var x,w,v,u,t,s,r=this,q=r.gdW().a.Ck(),p=r.x=d.c,o=r.gdW().nA(p),n=r.ch
if(n===D.tk)n=r.ch=r.ale(d)
else if(n==null){n=r.ale(d)
r.ch=n}if(!r.Rz(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdW().sv(0,r.a4d(r.gdW().a,n*d.d/q))
x=r.gdW().nA(p)
n=r.gdW()
w=r.gdW().a
v=r.as
v.toString
n.sv(0,r.DH(w,x.aw(0,v)))
u=r.gdW().nA(p)
p=r.as
p.toString
if(!B.d_q(p).l(0,B.d_q(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdW().sv(0,r.b6R(r.gdW().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dGA(n,o)}n=r.as
n.toString
s=o.aw(0,n)
r.gdW().sv(0,r.DH(r.gdW().a,s))
r.as=r.gdW().nA(p)
break}r.a.toString},
b8v(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
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
return}A:{if(D.tk===x){x=d.a.a
if(x.gex()<50){l.Q=null
return}w=l.gdW().a.a_y().a
v=w[0]
w=w[1]
l.a.toString
u=A.arh(0.0000135,v,x.a,0,C.fk)
l.a.toString
t=A.arh(0.0000135,w,x.b,0,C.fk)
x=x.gex()
l.a.toString
s=B.ddz(x,0.0000135,10)
x=u.gFC()
r=t.gFC()
q=y.A
p=q.i("fR<bs.T>")
o=l.y
l.r=new A.bk(o,new A.fR(new A.kn(C.mV),new A.bC(new A.K(v,w),new A.K(x,r),q),p),p.i("bk<bs.T>"))
o.e=A.ej(0,0,0,C.k.aN(s*1000),0,0)
o.an(0,l.gS2())
l.y.cW(0)
break A}if(D.zK===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdW().a.Ck()
l.a.toString
m=A.arh(0.0026999999999999997,n,x/10,0,C.fk)
l.a.toString
s=B.ddz(w,0.0000135,0.1)
x=m.iy(0,s)
w=y.f
v=w.i("fR<bs.T>")
r=l.z
l.w=new A.bk(r,new A.fR(new A.kn(C.mV),new A.bC(n,x,w),v),v.i("bk<bs.T>"))
r.e=A.ej(0,0,0,C.k.aN(s*1000),0,0)
r.an(0,l.gS8())
l.z.cW(0)
break A}break A}},
b5a(d){var x,w,v,u,t,s,r,q=this,p=d.gh0(),o=d.gby(d)
if(y.l.b(d)){x=d.gdZ(d)===C.eZ
if(x)q.a.toString
if(x){q.a.toString
x=o.am(0,d.gtY())
w=d.gtY()
v=A.LX(d.gdS(d),null,w,x)
if(!q.Rz(D.tk)){q.a.toString
return}u=q.gdW().nA(p)
t=q.gdW().nA(p.aw(0,v))
q.gdW().sv(0,q.DH(q.gdW().a,t.aw(0,u)))
q.a.toString
return}if(d.gtY().b===0)return
x=d.gtY()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjX(d)
else return
q.a.toString
if(!q.Rz(D.zK))return
u=q.gdW().nA(p)
q.gdW().sv(0,q.a4d(q.gdW().a,s))
r=q.gdW().nA(p)
q.gdW().sv(0,q.DH(q.gdW().a,r.aw(0,u)))
q.a.toString},
b2_(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a3(0,r.gS2())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdW().a.a_y().a
x=q[0]
q=q[1]
w=r.gdW()
v=r.gdW().a
u=r.gdW()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DH(v,u.nA(s.aH(0,t.gv(t))).aw(0,r.gdW().nA(new A.K(x,q)))))},
b3h(){var x,w,v,u,t,s=this,r=s.z
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
w=x.aH(0,r.gv(r))
r=s.gdW().a.Ck()
x=s.gdW()
v=s.x
v===$&&A.b()
u=x.nA(v)
s.gdW().sv(0,s.a4d(s.gdW().a,w/r))
t=s.gdW().nA(s.x)
s.gdW().sv(0,s.DH(s.gdW().a,t.aw(0,u)))},
b4l(){this.p(new B.c5W())},
ad(){var x=this,w=null
x.aq()
x.y=A.cA(w,w,w,w,x)
x.z=A.cA(w,w,w,w,x)
x.gdW().an(0,x.gamL())},
bi(d){this.bD(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdW().a3(0,x.gamL())
x.a.toString
w=x.gdW()
w.Z$=$.aa()
w.W$=0
x.aOU()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdW().a
w=u.a.w
v=new B.aI8(w,u.e,C.y,!0,x,t,t)
return A.Ax(C.fu,A.cp(C.bu,v,C.U,!1,t,t,t,t,t,t,t,t,t,t,u.gb8u(),u.gb8w(),u.gb8y(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.K(0,-0.005)),u.f,t,t,t,u.gb59(),t)}}
B.aI8.prototype={
u(d){var x=this,w=A.NB(x.w,new A.h9(x.c,x.d),null,x.r,!0)
return A.uW(w,x.e,null)}}
B.aBa.prototype={
nA(d){var x=this.a,w=new A.dk(new Float64Array(16))
if(w.l7(x)===0)A.an(A.h3(x,"other","Matrix cannot be inverted"))
x=new A.es(new Float64Array(3))
x.h5(d.a,d.b,0)
x=w.mP(x).a
return new A.K(x[0],x[1])}}
B.adP.prototype={
I(){return"_GestureType."+this.b}}
B.bkU.prototype={
I(){return"PanAxis."+this.b}}
B.ak5.prototype={
bS(){this.cp()
this.cP()
this.fU()},
m(){var x=this,w=x.bG$
if(w!=null)w.a3(0,x.gfG())
x.bG$=null
x.a6()}}
B.a76.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a76&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.as(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a8i)","~(a8j)","~(Vn)","~(mi)"])
B.c5W.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ak5.prototype
x.aOU=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aen.prototype,"gb8w","b8x",1)
x(v,"gb8y","b8z",2)
x(v,"gb8u","b8v",3)
x(v,"gb59","b5a",4)
w(v,"gS2","b2_",0)
w(v,"gS8","b3h",0)
w(v,"gamL","b4l",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Kk,A.H)
w(B.ak5,A.a_)
w(B.aen,B.ak5)
w(B.c5W,A.bL)
w(B.aI8,A.L)
w(B.aBa,A.d3)
v(A.fg,[B.adP,B.bkU])
w(B.a76,A.M)
x(B.ak5,A.hT)})()
A.br(b.typeUniverse,JSON.parse('{"Kk":{"H":[],"e":[],"f":[]},"aen":{"a_":["Kk"]},"aI8":{"L":[],"e":[],"f":[]},"aBa":{"d3":["dk"],"aV":[]}}'))
var y={z:A.z("cl<a_<H>>"),B:A.z("M0"),l:A.z("Fp"),g:A.z("ah"),A:A.z("bC<K>"),f:A.z("bC<T>")};(function constants(){D.OY=new A.b8(C.lC,20,C.t,null,null,null)
D.cpv=new B.bkU(3,"free")
D.tk=new B.adP(0,"pan")
D.zK=new B.adP(1,"scale")
D.clR=new B.adP(2,"rotate")})()};
(a=>{a["syDGVzPUM07fhELZuqFg7Yu592w="]=a.current})($__dart_deferred_initializers__);