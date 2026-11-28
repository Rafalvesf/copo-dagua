((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cSF(d,e,f,g){return new B.K7(d,e,f,g,null)},
bcc(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.av(0,e)
w=f.av(0,e)
return e.ah(0,w.rn(A.ag(x.ML(w)/t,0,1)))},
doB(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.av(0,q),o=e.b,n=o.av(0,q),m=e.d,l=m.av(0,q),k=p.ML(n),j=n.ML(n),i=p.ML(l),h=l.ML(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bcc(d,q,o),B.bcc(d,o,x),B.bcc(d,x,m),B.bcc(d,m,q)]
v=A.dj()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bf()},
dv7(){var x=A.hp()
return new B.aAC(x,$.ac())},
d8V(d,e,f){return Math.log(f/d)/Math.log(e/100)},
dae(d,e){var x,w,v,u,t,s,r=new A.di(new Float64Array(16))
r.cd(d)
r.le(r)
x=e.a
w=e.b
v=new A.ey(new Float64Array(3))
v.hb(x,w,0)
v=r.nw(v)
u=e.c
t=new A.ey(new Float64Array(3))
t.hb(u,w,0)
t=r.nw(t)
w=e.d
s=new A.ey(new Float64Array(3))
s.hb(u,w,0)
s=r.nw(s)
u=new A.ey(new Float64Array(3))
u.hb(x,w,0)
u=r.nw(u)
x=new A.ey(new Float64Array(3))
x.cd(v)
w=new A.ey(new Float64Array(3))
w.cd(t)
v=new A.ey(new Float64Array(3))
v.cd(s)
t=new A.ey(new Float64Array(3))
t.cd(u)
return new B.a6E(x,w,v,t)},
d8M(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.R,w=0;w<4;++w){v=r[w]
u=B.doB(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.K(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.K(x.a,t)}return B.cVV(x)},
cVV(d){return new A.K(A.iV(C.k.a8(d.a,9)),A.iV(C.k.a8(d.b,9)))},
dBC(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bt:C.a1},
K7:function K7(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
ae7:function ae7(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.ev$=f
_.bG$=g
_.c=_.a=null},
c3I:function c3I(){},
aHF:function aHF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAC:function aAC(d,e){var _=this
_.a=d
_.W$=0
_.Z$=e
_.aH$=_.bn$=0},
adx:function adx(d,e){this.a=d
this.b=e},
bka:function bka(d,e){this.a=d
this.b=e},
ajM:function ajM(){},
a6E:function a6E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[175],B)
D=c[441]
B.K7.prototype={
P(){var x=null,w=y.z
return new B.ae7(new A.c3(x,w),new A.c3(x,w),x,x)}}
B.ae7.prototype={
gdX(){var x=this.d
if(x===$){this.a.toString
x=B.dv7()
this.d=x}return x},
gQz(){var x,w=$.az.ac$.x.h(0,this.e).gaP()
w.toString
x=y.g.a(w).gN(0)
return this.a.f.Nq(new A.ae(0,0,0+x.a,0+x.b))},
gV3(){var x=$.az.ac$.x.h(0,this.f).gaP()
x.toString
x=y.g.a(x).gN(0)
return new A.ae(0,0,0+x.a,0+x.b)},
DJ(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.R)){x=new A.di(new Float64Array(16))
x.cd(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.di(new Float64Array(16))
w.cd(a0)
w.eA(a1.a,a1.b,0,1)
v=B.dae(w,d.gV3())
if(d.gQz().gaAa(0))return w
x=d.gQz()
u=d.ay
t=A.hp()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.eA(q/2,o/2,0,1)
t.tU(u)
t.eA(-q/2,-o/2,0,1)
u=new A.ey(new Float64Array(3))
u.hb(r,x,0)
u=t.nw(u)
q=new A.ey(new Float64Array(3))
q.hb(s,x,0)
q=t.nw(q)
x=new A.ey(new Float64Array(3))
x.hb(s,p,0)
x=t.nw(x)
s=new A.ey(new Float64Array(3))
s.hb(r,p,0)
s=t.nw(s)
r=new Float64Array(3)
new A.ey(r).cd(u)
u=new Float64Array(3)
new A.ey(u).cd(q)
q=new Float64Array(3)
new A.ey(q).cd(x)
x=new Float64Array(3)
new A.ey(x).cd(s)
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
x.hb(m,l,0)
u=new A.ey(new Float64Array(3))
u.hb(k,l,0)
s=new A.ey(new Float64Array(3))
s.hb(k,j,0)
r=new A.ey(new Float64Array(3))
r.hb(m,j,0)
q=new A.ey(new Float64Array(3))
q.cd(x)
x=new A.ey(new Float64Array(3))
x.cd(u)
u=new A.ey(new Float64Array(3))
u.cd(s)
s=new A.ey(new Float64Array(3))
s.cd(r)
i=new B.a6E(q,x,u,s)
h=B.d8M(i,v)
if(h.l(0,C.R))return w
x=w.a_H().a
u=x[0]
x=x[1]
g=a0.Ck()
u-=h.a*g
x-=h.b*g
f=new A.di(new Float64Array(16))
f.cd(a0)
s=new A.ey(new Float64Array(3))
s.hb(u,x,0)
f.aeJ(s)
e=B.d8M(i,B.dae(f,d.gV3()))
if(e.l(0,C.R))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.di(new Float64Array(16))
x.cd(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.di(new Float64Array(16))
s.cd(a0)
r=new A.ey(new Float64Array(3))
r.hb(u,x,0)
s.aeJ(r)
return s},
a4v(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.di(new Float64Array(16))
x.cd(d)
return x}w=q.gdX().a.Ck()
x=q.gV3()
v=q.gQz()
u=q.gV3()
t=q.gQz()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.ag(s,t.ax,t.at)/w
x=new A.di(new Float64Array(16))
x.cd(d)
x.nC(r,r,r,1)
return x},
b7R(d,e,f){var x,w,v,u
if(e===0){x=new A.di(new Float64Array(16))
x.cd(d)
return x}w=this.gdX().nv(f)
x=new A.di(new Float64Array(16))
x.cd(d)
v=w.a
u=w.b
x.eA(v,u,0,1)
x.tU(-e)
x.eA(-v,-u,0,1)
return x},
RI(d){var x
A:{x=!0
if(D.cn7===d){x=!1
break A}if(D.zU===d){this.a.toString
break A}if(D.tC===d||d==null){this.a.toString
break A}x=null}return x},
alm(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zU
else return D.tC},
b9y(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d3(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a_(0,v.gSa())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.d3(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a_(0,v.gSg())
v.w=null}v.Q=v.ch=null
v.at=v.gdX().a.Ck()
v.as=v.gdX().nv(d.b)
v.ax=v.ay},
b9A(d){var x,w,v,u,t,s,r=this,q=r.gdX().a.Ck(),p=r.x=d.c,o=r.gdX().nv(p),n=r.ch
if(n===D.tC)n=r.ch=r.alm(d)
else if(n==null){n=r.alm(d)
r.ch=n}if(!r.RI(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdX().sv(0,r.a4v(r.gdX().a,n*d.d/q))
x=r.gdX().nv(p)
n=r.gdX()
w=r.gdX().a
v=r.as
v.toString
n.sv(0,r.DJ(w,x.av(0,v)))
u=r.gdX().nv(p)
p=r.as
p.toString
if(!B.cVV(p).l(0,B.cVV(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdX().sv(0,r.b7R(r.gdX().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dBC(n,o)}n=r.as
n.toString
s=o.av(0,n)
r.gdX().sv(0,r.DJ(r.gdX().a,s))
r.as=r.gdX().nv(p)
break}r.a.toString},
b9w(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a_(0,l.gSa())
x=l.w
if(x!=null)x.a.a_(0,l.gSg())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.RI(x)){l.Q=null
return}A:{if(D.tC===x){x=d.a.a
if(x.gem()<50){l.Q=null
return}w=l.gdX().a.a_H().a
v=w[0]
w=w[1]
l.a.toString
u=A.b6W(0.0000135,v,x.a,0)
l.a.toString
t=A.b6W(0.0000135,w,x.b,0)
x=x.gem()
l.a.toString
s=B.d8V(x,0.0000135,10)
x=u.gFH()
r=t.gFH()
q=y.A
p=q.i("hk<bu.T>")
o=l.y
l.r=new A.bk(o,new A.hk(new A.kk(C.lj),new A.bz(new A.K(v,w),new A.K(x,r),q),p),p.i("bk<bu.T>"))
o.e=A.e5(0,0,0,C.k.aK(s*1000),0,0)
o.am(0,l.gSa())
l.y.cp(0)
break A}if(D.zU===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdX().a.Ck()
l.a.toString
m=A.b6W(0.0026999999999999997,n,x/10,0)
l.a.toString
s=B.d8V(w,0.0000135,0.1)
x=m.jL(0,s)
w=y.f
v=w.i("hk<bu.T>")
r=l.z
l.w=new A.bk(r,new A.hk(new A.kk(C.lj),new A.bz(n,x,w),v),v.i("bk<bu.T>"))
r.e=A.e5(0,0,0,C.k.aK(s*1000),0,0)
r.am(0,l.gSg())
l.z.cp(0)
break A}break A}},
b6g(d){var x,w,v,u,t,s,r,q=this,p=d.gh5(),o=d.gbA(d)
if(y.l.b(d)){x=d.ge_(d)===C.eX
if(x)q.a.toString
if(x){q.a.toString
x=o.ah(0,d.gua())
w=d.gua()
v=A.LK(d.gdV(d),null,w,x)
if(!q.RI(D.tC)){q.a.toString
return}u=q.gdX().nv(p)
t=q.gdX().nv(p.av(0,v))
q.gdX().sv(0,q.DJ(q.gdX().a,t.av(0,u)))
q.a.toString
return}if(d.gua().b===0)return
x=d.gua()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gkd(d)
else return
q.a.toString
if(!q.RI(D.zU))return
u=q.gdX().nv(p)
q.gdX().sv(0,q.a4v(q.gdX().a,s))
r=q.gdX().nv(p)
q.gdX().sv(0,q.DJ(q.gdX().a,r.av(0,u)))
q.a.toString},
b2H(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a_(0,r.gSa())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdX().a.a_H().a
x=q[0]
q=q[1]
w=r.gdX()
v=r.gdX().a
u=r.gdX()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DJ(v,u.nv(s.aC(0,t.gv(t))).av(0,r.gdX().nv(new A.K(x,q)))))},
b4k(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a_(0,s.gSg())
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
u=x.nv(v)
s.gdX().sv(0,s.a4v(s.gdX().a,w/r))
t=s.gdX().nv(s.x)
s.gdX().sv(0,s.DJ(s.gdX().a,t.av(0,u)))},
b5o(){this.q(new B.c3I())},
ak(){var x=this,w=null
x.aD()
x.y=A.cC(w,w,w,1,w,x)
x.z=A.cC(w,w,w,1,w,x)
x.gdX().am(0,x.gamU())},
ba(d){this.bw(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdX().a_(0,x.gamU())
x.a.toString
w=x.gdX()
w.Z$=$.ac()
w.W$=0
x.aPc()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdX().a
w=u.a.w
v=new B.aHF(w,u.e,C.z,!0,x,t,t)
return A.Eu(C.fS,A.de(C.bU,v,C.a0,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gb9v(),u.gb9x(),u.gb9z(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.K(0,-0.005)),u.f,t,t,t,u.gb6f(),t)}}
B.aHF.prototype={
u(d){var x=this,w=A.Nk(x.w,new A.hd(x.c,x.d),null,x.r,!0)
return A.wX(w,x.e,null)}}
B.aAC.prototype={
nv(d){var x=this.a,w=new A.di(new Float64Array(16))
if(w.le(x)===0)A.aj(A.fV(x,"other","Matrix cannot be inverted"))
x=new A.ey(new Float64Array(3))
x.hb(d.a,d.b,0)
x=w.nw(x).a
return new A.K(x[0],x[1])}}
B.adx.prototype={
I(){return"_GestureType."+this.b}}
B.bka.prototype={
I(){return"PanAxis."+this.b}}
B.ajM.prototype={
bU(){this.cB()
this.d0()
this.fZ()},
m(){var x=this,w=x.bG$
if(w!=null)w.a_(0,x.gfJ())
x.bG$=null
x.a6()}}
B.a6E.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a6E&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gC(d){var x=this
return A.at(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a7S)","~(a7T)","~(V_)","~(mc)"])
B.c3I.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ajM.prototype
x.aPc=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.ae7.prototype,"gb9x","b9y",1)
x(v,"gb9z","b9A",2)
x(v,"gb9v","b9w",3)
x(v,"gb6f","b6g",4)
w(v,"gSa","b2H",0)
w(v,"gSg","b4k",0)
w(v,"gamU","b5o",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.K7,A.H)
w(B.ajM,A.a_)
w(B.ae7,B.ajM)
w(B.c3I,A.bT)
w(B.aHF,A.L)
w(B.aAC,A.d6)
v(A.fg,[B.adx,B.bka])
w(B.a6E,A.J)
x(B.ajM,A.hN)})()
A.bq(b.typeUniverse,JSON.parse('{"K7":{"H":[],"e":[],"f":[]},"ae7":{"a_":["K7"]},"aHF":{"L":[],"e":[],"f":[]},"aAC":{"d6":["di"],"aS":[]}}'))
var y={z:A.w("c3<a_<H>>"),B:A.w("LO"),l:A.w("Fm"),g:A.w("ah"),A:A.w("bz<K>"),f:A.w("bz<R>")};(function constants(){D.cqK=new B.bka(3,"free")
D.tC=new B.adx(0,"pan")
D.zU=new B.adx(1,"scale")
D.cn7=new B.adx(2,"rotate")})()};
(a=>{a["QHNPBQXuZNgfnxAlU1PkxoulZgQ="]=a.current})($__dart_deferred_initializers__);