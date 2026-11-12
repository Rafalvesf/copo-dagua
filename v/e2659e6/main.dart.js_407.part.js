((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cF1(d,e,f,g){return new B.a_q(d,e,f,g,null)},
b36(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aC(0,e)
w=f.aC(0,e)
return e.ad(0,w.qS(A.af(x.Kw(w)/t,0,1)))},
cZp(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aC(0,q),o=e.b,n=o.aC(0,q),m=e.d,l=m.aC(0,q),k=p.Kw(n),j=n.Kw(n),i=p.Kw(l),h=l.Kw(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.b36(d,q,o),B.b36(d,o,x),B.b36(d,x,m),B.b36(d,m,q)]
v=A.di()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bn()},
d4E(){var x=A.hh()
return new B.atV(x,$.ah())},
cLO(d,e,f){return Math.log(f/d)/Math.log(e/100)},
cMV(d,e){var x,w,v,u,t,s,r=new A.d5(new Float64Array(16))
r.cD(d)
r.kR(r)
x=e.a
w=e.b
v=new A.eb(new Float64Array(3))
v.fT(x,w,0)
v=r.nd(v)
u=e.c
t=new A.eb(new Float64Array(3))
t.fT(u,w,0)
t=r.nd(t)
w=e.d
s=new A.eb(new Float64Array(3))
s.fT(u,w,0)
s=r.nd(s)
u=new A.eb(new Float64Array(3))
u.fT(x,w,0)
u=r.nd(u)
x=new A.eb(new Float64Array(3))
x.cD(v)
w=new A.eb(new Float64Array(3))
w.cD(t)
v=new A.eb(new Float64Array(3))
v.cD(s)
t=new A.eb(new Float64Array(3))
t.cD(u)
return new B.a2g(x,w,v,t)},
cLD(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.O,w=0;w<4;++w){v=r[w]
u=B.cZp(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.D(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.D(x.a,t)}return B.cyE(x)},
cyE(d){return new A.D(A.qr(C.k.a8(d.a,9)),A.qr(C.k.a8(d.b,9)))},
daw(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bs:C.Y},
a_q:function a_q(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
a9q:function a9q(d,e,f,g){var _=this
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
bPp:function bPp(){},
aAH:function aAH(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
atV:function atV(d,e){var _=this
_.a=d
_.U$=0
_.Z$=e
_.az$=_.bl$=0},
a8U:function a8U(d,e){this.a=d
this.b=e},
ba_:function ba_(d,e){this.a=d
this.b=e},
aeB:function aeB(){},
a2g:function a2g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[126],B)
D=c[406]
B.a_q.prototype={
R(){var x=null,w=y.z
return new B.a9q(new A.c6(x,w),new A.c6(x,w),x,x)}}
B.a9q.prototype={
gdQ(){var x=this.d
if(x===$){this.a.toString
x=B.d4E()
this.d=x}return x},
gOo(){var x,w=$.aw.a5$.x.h(0,this.e).gaL()
w.toString
x=y.g.a(w).gJ(0)
return this.a.f.Lg(new A.ae(0,0,0+x.a,0+x.b))},
gSk(){var x=$.aw.a5$.x.h(0,this.f).gaL()
x.toString
x=y.g.a(x).gJ(0)
return new A.ae(0,0,0+x.a,0+x.b)},
Cf(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.O)){x=new A.d5(new Float64Array(16))
x.cD(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.d5(new Float64Array(16))
w.cD(a0)
w.en(a1.a,a1.b,0,1)
v=B.cMV(w,d.gSk())
if(d.gOo().gavq(0))return w
x=d.gOo()
u=d.ay
t=A.hh()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.en(q/2,o/2,0,1)
t.Fa(u)
t.en(-q/2,-o/2,0,1)
u=new A.eb(new Float64Array(3))
u.fT(r,x,0)
u=t.nd(u)
q=new A.eb(new Float64Array(3))
q.fT(s,x,0)
q=t.nd(q)
x=new A.eb(new Float64Array(3))
x.fT(s,p,0)
x=t.nd(x)
s=new A.eb(new Float64Array(3))
s.fT(r,p,0)
s=t.nd(s)
r=new Float64Array(3)
new A.eb(r).cD(u)
u=new Float64Array(3)
new A.eb(u).cD(q)
q=new Float64Array(3)
new A.eb(q).cD(x)
x=new Float64Array(3)
new A.eb(x).cD(s)
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
x=new A.eb(new Float64Array(3))
x.fT(m,l,0)
u=new A.eb(new Float64Array(3))
u.fT(k,l,0)
s=new A.eb(new Float64Array(3))
s.fT(k,j,0)
r=new A.eb(new Float64Array(3))
r.fT(m,j,0)
q=new A.eb(new Float64Array(3))
q.cD(x)
x=new A.eb(new Float64Array(3))
x.cD(u)
u=new A.eb(new Float64Array(3))
u.cD(s)
s=new A.eb(new Float64Array(3))
s.cD(r)
i=new B.a2g(q,x,u,s)
h=B.cLD(i,v)
if(h.l(0,C.O))return w
x=w.XE().a
u=x[0]
x=x[1]
g=a0.B1()
u-=h.a*g
x-=h.b*g
f=new A.d5(new Float64Array(16))
f.cD(a0)
s=new A.eb(new Float64Array(3))
s.fT(u,x,0)
f.aaR(s)
e=B.cLD(i,B.cMV(f,d.gSk()))
if(e.l(0,C.O))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.d5(new Float64Array(16))
x.cD(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.d5(new Float64Array(16))
s.cD(a0)
r=new A.eb(new Float64Array(3))
r.fT(u,x,0)
s.aaR(r)
return s},
a1j(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.d5(new Float64Array(16))
x.cD(d)
return x}w=q.gdQ().a.B1()
x=q.gSk()
v=q.gOo()
u=q.gSk()
t=q.gOo()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.af(s,t.ax,t.at)/w
x=new A.d5(new Float64Array(16))
x.cD(d)
x.tz(r,r,r,1)
return x},
b0R(d,e,f){var x,w,v,u
if(e===0){x=new A.d5(new Float64Array(16))
x.cD(d)
return x}w=this.gdQ().nc(f)
x=new A.d5(new Float64Array(16))
x.cD(d)
v=w.a
u=w.b
x.en(v,u,0,1)
x.Fa(-e)
x.en(-v,-u,0,1)
return x},
Pm(d){var x
A:{x=!0
if(D.c8S===d){x=!1
break A}if(D.yw===d){this.a.toString
break A}if(D.qY===d||d==null){this.a.toString
break A}x=null}return x},
ahg(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.yw
else return D.qY},
b2i(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fK(0)
x=v.y
x.sq(0,x.a)
x=v.r
if(x!=null)x.a.Y(0,v.gPN())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.fK(0)
x=v.z
x.sq(0,x.a)
x=v.w
if(x!=null)x.a.Y(0,v.gPT())
v.w=null}v.Q=v.ch=null
v.at=v.gdQ().a.B1()
v.as=v.gdQ().nc(d.b)
v.ax=v.ay},
b2k(d){var x,w,v,u,t,s,r=this,q=r.gdQ().a.B1(),p=r.x=d.c,o=r.gdQ().nc(p),n=r.ch
if(n===D.qY)n=r.ch=r.ahg(d)
else if(n==null){n=r.ahg(d)
r.ch=n}if(!r.Pm(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdQ().sq(0,r.a1j(r.gdQ().a,n*d.d/q))
x=r.gdQ().nc(p)
n=r.gdQ()
w=r.gdQ().a
v=r.as
v.toString
n.sq(0,r.Cf(w,x.aC(0,v)))
u=r.gdQ().nc(p)
p=r.as
p.toString
if(!B.cyE(p).l(0,B.cyE(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdQ().sq(0,r.b0R(r.gdQ().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.daw(n,o)}n=r.as
n.toString
s=o.aC(0,n)
r.gdQ().sq(0,r.Cf(r.gdQ().a,s))
r.as=r.gdQ().nc(p)
break}r.a.toString},
b2g(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.Y(0,l.gPN())
x=l.w
if(x!=null)x.a.Y(0,l.gPT())
x=l.y
x===$&&A.b()
x.sq(0,x.a)
x=l.z
x===$&&A.b()
x.sq(0,x.a)
x=l.ch
if(!l.Pm(x)){l.Q=null
return}A:{if(D.qY===x){x=d.a.a
if(x.gej()<50){l.Q=null
return}w=l.gdQ().a.XE().a
v=w[0]
w=w[1]
l.a.toString
u=A.aYS(0.0000135,v,x.a,0)
l.a.toString
t=A.aYS(0.0000135,w,x.b,0)
x=x.gej()
l.a.toString
s=B.cLO(x,0.0000135,10)
x=u.gE0()
r=t.gE0()
q=y.A
p=q.i("fx<bl.T>")
o=l.y
l.r=new A.bd(o,new A.fx(new A.iB(C.kC),new A.bq(new A.D(v,w),new A.D(x,r),q),p),p.i("bd<bl.T>"))
o.e=A.e2(0,0,0,C.k.aN(s*1000),0,0)
o.ai(0,l.gPN())
l.y.cn(0)
break A}if(D.yw===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdQ().a.B1()
l.a.toString
m=A.aYS(0.0026999999999999997,n,x/10,0)
l.a.toString
s=B.cLO(w,0.0000135,0.1)
x=m.jt(0,s)
w=y.f
v=w.i("fx<bl.T>")
r=l.z
l.w=new A.bd(r,new A.fx(new A.iB(C.kC),new A.bq(n,x,w),v),v.i("bd<bl.T>"))
r.e=A.e2(0,0,0,C.k.aN(s*1000),0,0)
r.ai(0,l.gPT())
l.z.cn(0)
break A}break A}},
b_y(d){var x,w,v,u,t,s,r,q=this,p=d.gfQ(),o=d.gbz(d)
if(y.l.b(d)){x=d.gdX(d)===C.ex
if(x)q.a.toString
if(x){q.a.toString
x=o.ad(0,d.gtA())
w=d.gtA()
v=A.Ja(d.gdN(d),null,w,x)
if(!q.Pm(D.qY)){q.a.toString
return}u=q.gdQ().nc(p)
t=q.gdQ().nc(p.aC(0,v))
q.gdQ().sq(0,q.Cf(q.gdQ().a,t.aC(0,u)))
q.a.toString
return}if(d.gtA().b===0)return
x=d.gtA()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gi_(d)
else return
q.a.toString
if(!q.Pm(D.yw))return
u=q.gdQ().nc(p)
q.gdQ().sq(0,q.a1j(q.gdQ().a,s))
r=q.gdQ().nc(p)
q.gdQ().sq(0,q.Cf(q.gdQ().a,r.aC(0,u)))
q.a.toString},
aX_(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.Y(0,r.gPN())
r.r=null
q=r.y
q.sq(0,q.a)
return}q=r.gdQ().a.XE().a
x=q[0]
q=q[1]
w=r.gdQ()
v=r.gdQ().a
u=r.gdQ()
t=r.r
s=t.b
t=t.a
w.sq(0,r.Cf(v,u.nc(s.av(0,t.gq(t))).aC(0,r.gdQ().nc(new A.D(x,q)))))},
aYB(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.Y(0,s.gPT())
s.w=null
r=s.z
r.sq(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.av(0,r.gq(r))
r=s.gdQ().a.B1()
x=s.gdQ()
v=s.x
v===$&&A.b()
u=x.nc(v)
s.gdQ().sq(0,s.a1j(s.gdQ().a,w/r))
t=s.gdQ().nc(s.x)
s.gdQ().sq(0,s.Cf(s.gdQ().a,t.aC(0,u)))},
aZE(){this.t(new B.bPp())},
ak(){var x=this,w=null
x.aG()
x.y=A.cr(w,w,w,1,w,x)
x.z=A.cr(w,w,w,1,w,x)
x.gdQ().ai(0,x.gaiO())},
ba(d){this.bx(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdQ().Y(0,x.gaiO())
x.a.toString
w=x.gdQ()
w.Z$=$.ah()
w.U$=0
x.aJd()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdQ().a
w=u.a.w
v=new B.aAH(w,u.e,C.C,!0,x,t,t)
return A.I3(C.h0,A.dX(C.c5,v,C.X,!1,t,t,t,t,t,t,t,t,t,t,t,t,u.gb2f(),u.gb2h(),u.gb2j(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.D(0,-0.005)),u.f,t,t,t,u.gb_x(),t)}}
B.aAH.prototype={
u(d){var x=this,w=A.Sv(x.w,new A.nB(x.c,x.d),null,x.r,!0)
return A.xG(w,x.e,null)}}
B.atV.prototype={
nc(d){var x=this.a,w=new A.d5(new Float64Array(16))
if(w.kR(x)===0)A.aj(A.hP(x,"other","Matrix cannot be inverted"))
x=new A.eb(new Float64Array(3))
x.fT(d.a,d.b,0)
x=w.nd(x).a
return new A.D(x[0],x[1])}}
B.a8U.prototype={
H(){return"_GestureType."+this.b}}
B.ba_.prototype={
H(){return"PanAxis."+this.b}}
B.aeB.prototype={
c2(){this.cK()
this.d7()
this.h0()},
m(){var x=this,w=x.bF$
if(w!=null)w.Y(0,x.gfL())
x.bF$=null
x.a9()}}
B.a2g.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a2g&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gC(d){var x=this
return A.ar(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a3r)","~(a3s)","~(Ru)","~(lw)"])
B.bPp.prototype={
$0(){},
$S:0};(function aliases(){var x=B.aeB.prototype
x.aJd=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.a9q.prototype,"gb2h","b2i",1)
x(v,"gb2j","b2k",2)
x(v,"gb2f","b2g",3)
x(v,"gb_x","b_y",4)
w(v,"gPN","aX_",0)
w(v,"gPT","aYB",0)
w(v,"gaiO","aZE",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.a_q,A.G)
w(B.aeB,A.a0)
w(B.a9q,B.aeB)
w(B.bPp,A.bI)
w(B.aAH,A.M)
w(B.atV,A.du)
v(A.fq,[B.a8U,B.ba_])
w(B.a2g,A.F)
x(B.aeB,A.hy)})()
A.bx(b.typeUniverse,JSON.parse('{"a_q":{"G":[],"e":[],"f":[]},"a9q":{"a0":["a_q"]},"aAH":{"M":[],"e":[],"f":[]},"atV":{"du":["d5"],"aP":[]}}'))
var y={z:A.v("c6<a0<G>>"),B:A.v("Je"),l:A.v("D0"),g:A.v("ad"),A:A.v("bq<D>"),f:A.v("bq<V>")};(function constants(){D.L6=new A.X(16,10,16,0)
D.ccf=new B.ba_(3,"free")
D.qY=new B.a8U(0,"pan")
D.yw=new B.a8U(1,"scale")
D.c8S=new B.a8U(2,"rotate")})()};
(a=>{a["qcPtI40ELGP+Lf6Ijj01EE7mrd0="]=a.current})($__dart_deferred_initializers__);