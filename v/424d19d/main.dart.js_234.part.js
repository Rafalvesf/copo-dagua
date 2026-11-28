((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cWN(d,e,f,g){return new B.Kq(d,e,f,g,null)},
bcL(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aw(0,e)
w=f.aw(0,e)
return e.ak(0,w.rf(A.ai(x.My(w)/t,0,1)))},
dt9(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aw(0,q),o=e.b,n=o.aw(0,q),m=e.d,l=m.aw(0,q),k=p.My(n),j=n.My(n),i=p.My(l),h=l.My(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bcL(d,q,o),B.bcL(d,o,x),B.bcL(d,x,m),B.bcL(d,m,q)]
v=A.dr()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bc()},
dzK(){var x=A.fX()
return new B.aBb(x,$.aa())},
ddc(d,e,f){return Math.log(f/d)/Math.log(e/100)},
deB(d,e){var x,w,v,u,t,s,r=new A.di(new Float64Array(16))
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
dd1(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.T,w=0;w<4;++w){v=r[w]
u=B.dt9(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.K(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.K(x.a,t)}return B.d_3(x)},
d_3(d){return new A.K(A.iN(C.k.a8(d.a,9)),A.iN(C.k.a8(d.b,9)))},
dGf(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bJ:C.av},
Kq:function Kq(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
aer:function aer(d,e,f,g){var _=this
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
c5n:function c5n(){},
aI8:function aI8(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBb:function aBb(d,e){var _=this
_.a=d
_.V$=0
_.Z$=e
_.aJ$=_.bv$=0},
adT:function adT(d,e){this.a=d
this.b=e},
bl2:function bl2(d,e){this.a=d
this.b=e},
ak7:function ak7(){},
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
return new B.aer(new A.cl(x,w),new A.cl(x,w),x,x)}}
B.aer.prototype={
gdX(){var x=this.d
if(x===$){this.a.toString
x=B.dzK()
this.d=x}return x},
gQe(){var x,w=$.az.a7$.x.h(0,this.e).gaM()
w.toString
x=y.g.a(w).gM(0)
return this.a.f.N7(new A.ab(0,0,0+x.a,0+x.b))},
gV2(){var x=$.az.a7$.x.h(0,this.f).gaM()
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
v=B.deB(w,d.gV2())
if(d.gQe().gazI(0))return w
x=d.gQe()
u=d.ay
t=A.fX()
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
h=B.dd1(i,v)
if(h.l(0,C.T))return w
x=w.a_v().a
u=x[0]
x=x[1]
g=a0.Ch()
u-=h.a*g
x-=h.b*g
f=new A.di(new Float64Array(16))
f.c4(a0)
s=new A.es(new Float64Array(3))
s.h5(u,x,0)
f.aex(s)
e=B.dd1(i,B.deB(f,d.gV2()))
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
s.aex(r)
return s},
a49(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.di(new Float64Array(16))
x.c4(d)
return x}w=q.gdX().a.Ch()
x=q.gV2()
v=q.gQe()
u=q.gV2()
t=q.gQe()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ai(s,t.ax,t.at)/w
x=new A.di(new Float64Array(16))
x.c4(d)
x.mU(r,r,r,1)
return x},
b6M(d,e,f){var x,w,v,u
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
Rx(d){var x
A:{x=!0
if(D.clX===d){x=!1
break A}if(D.zK===d){this.a.toString
break A}if(D.ti===d||d==null){this.a.toString
break A}x=null}return x},
al9(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zK
else return D.ti},
b8s(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cZ(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a3(0,v.gS0())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cZ(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a3(0,v.gS6())
v.w=null}v.Q=v.ch=null
v.at=v.gdX().a.Ch()
v.as=v.gdX().nB(d.b)
v.ax=v.ay},
b8u(d){var x,w,v,u,t,s,r=this,q=r.gdX().a.Ch(),p=r.x=d.c,o=r.gdX().nB(p),n=r.ch
if(n===D.ti)n=r.ch=r.al9(d)
else if(n==null){n=r.al9(d)
r.ch=n}if(!r.Rx(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdX().sv(0,r.a49(r.gdX().a,n*d.d/q))
x=r.gdX().nB(p)
n=r.gdX()
w=r.gdX().a
v=r.as
v.toString
n.sv(0,r.DE(w,x.aw(0,v)))
u=r.gdX().nB(p)
p=r.as
p.toString
if(!B.d_3(p).l(0,B.d_3(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdX().sv(0,r.b6M(r.gdX().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dGf(n,o)}n=r.as
n.toString
s=o.aw(0,n)
r.gdX().sv(0,r.DE(r.gdX().a,s))
r.as=r.gdX().nB(p)
break}r.a.toString},
b8q(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a3(0,l.gS0())
x=l.w
if(x!=null)x.a.a3(0,l.gS6())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.Rx(x)){l.Q=null
return}A:{if(D.ti===x){x=d.a.a
if(x.gex()<50){l.Q=null
return}w=l.gdX().a.a_v().a
v=w[0]
w=w[1]
l.a.toString
u=A.arh(0.0000135,v,x.a,0,C.fk)
l.a.toString
t=A.arh(0.0000135,w,x.b,0,C.fk)
x=x.gex()
l.a.toString
s=B.ddc(x,0.0000135,10)
x=u.gFB()
r=t.gFB()
q=y.A
p=q.i("fS<bs.T>")
o=l.y
l.r=new A.bi(o,new A.fS(new A.kp(C.mV),new A.bC(new A.K(v,w),new A.K(x,r),q),p),p.i("bi<bs.T>"))
o.e=A.ei(0,0,0,C.k.aN(s*1000),0,0)
o.al(0,l.gS0())
l.y.cW(0)
break A}if(D.zK===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdX().a.Ch()
l.a.toString
m=A.arh(0.0026999999999999997,n,x/10,0,C.fk)
l.a.toString
s=B.ddc(w,0.0000135,0.1)
x=m.iy(0,s)
w=y.f
v=w.i("fS<bs.T>")
r=l.z
l.w=new A.bi(r,new A.fS(new A.kp(C.mV),new A.bC(n,x,w),v),v.i("bi<bs.T>"))
r.e=A.ei(0,0,0,C.k.aN(s*1000),0,0)
r.al(0,l.gS6())
l.z.cW(0)
break A}break A}},
b55(d){var x,w,v,u,t,s,r,q=this,p=d.gh0(),o=d.gby(d)
if(y.l.b(d)){x=d.ge_(d)===C.eY
if(x)q.a.toString
if(x){q.a.toString
x=o.ak(0,d.gtX())
w=d.gtX()
v=A.M1(d.gdS(d),null,w,x)
if(!q.Rx(D.ti)){q.a.toString
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
if(!q.Rx(D.zK))return
u=q.gdX().nB(p)
q.gdX().sv(0,q.a49(q.gdX().a,s))
r=q.gdX().nB(p)
q.gdX().sv(0,q.DE(q.gdX().a,r.aw(0,u)))
q.a.toString},
b1V(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a3(0,r.gS0())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdX().a.a_v().a
x=q[0]
q=q[1]
w=r.gdX()
v=r.gdX().a
u=r.gdX()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DE(v,u.nB(s.aI(0,t.gv(t))).aw(0,r.gdX().nB(new A.K(x,q)))))},
b3c(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a3(0,s.gS6())
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
s.gdX().sv(0,s.a49(s.gdX().a,w/r))
t=s.gdX().nB(s.x)
s.gdX().sv(0,s.DE(s.gdX().a,t.aw(0,u)))},
b4g(){this.n(new B.c5n())},
ac(){var x=this,w=null
x.ap()
x.y=A.cD(w,w,w,w,x)
x.z=A.cD(w,w,w,w,x)
x.gdX().al(0,x.gamG())},
bh(d){this.bD(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdX().a3(0,x.gamG())
x.a.toString
w=x.gdX()
w.Z$=$.aa()
w.V$=0
x.aOO()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdX().a
w=u.a.w
v=new B.aI8(w,u.e,C.y,!0,x,t,t)
return A.AA(C.fu,A.cp(C.bu,v,C.U,!1,t,t,t,t,t,t,t,t,t,t,u.gb8p(),u.gb8r(),u.gb8t(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.K(0,-0.005)),u.f,t,t,t,u.gb54(),t)}}
B.aI8.prototype={
u(d){var x=this,w=A.NH(x.w,new A.ha(x.c,x.d),null,x.r,!0)
return A.uY(w,x.e,null)}}
B.aBb.prototype={
nB(d){var x=this.a,w=new A.di(new Float64Array(16))
if(w.l6(x)===0)A.am(A.h3(x,"other","Matrix cannot be inverted"))
x=new A.es(new Float64Array(3))
x.h5(d.a,d.b,0)
x=w.mP(x).a
return new A.K(x[0],x[1])}}
B.adT.prototype={
I(){return"_GestureType."+this.b}}
B.bl2.prototype={
I(){return"PanAxis."+this.b}}
B.ak7.prototype={
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
var z=a.updateTypes(["~()","~(a8m)","~(a8n)","~(Vq)","~(mk)"])
B.c5n.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ak7.prototype
x.aOO=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aer.prototype,"gb8r","b8s",1)
x(v,"gb8t","b8u",2)
x(v,"gb8p","b8q",3)
x(v,"gb54","b55",4)
w(v,"gS0","b1V",0)
w(v,"gS6","b3c",0)
w(v,"gamG","b4g",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Kq,A.G)
w(B.ak7,A.Z)
w(B.aer,B.ak7)
w(B.c5n,A.bL)
w(B.aI8,A.L)
w(B.aBb,A.cZ)
v(A.f7,[B.adT,B.bl2])
w(B.a7a,A.M)
x(B.ak7,A.hT)})()
A.br(b.typeUniverse,JSON.parse('{"Kq":{"G":[],"e":[],"f":[]},"aer":{"Z":["Kq"]},"aI8":{"L":[],"e":[],"f":[]},"aBb":{"cZ":["di"],"aV":[]}}'))
var y={z:A.B("cl<Z<G>>"),B:A.B("M5"),l:A.B("Fs"),g:A.B("ag"),A:A.B("bC<K>"),f:A.B("bC<T>")};(function constants(){D.P1=new A.b8(C.lC,20,C.t,null,null,null)
D.cpA=new B.bl2(3,"free")
D.ti=new B.adT(0,"pan")
D.zK=new B.adT(1,"scale")
D.clX=new B.adT(2,"rotate")})()};
(a=>{a["fH6kM4ETK2j02MzZh5yd7nXnubA="]=a.current})($__dart_deferred_initializers__);