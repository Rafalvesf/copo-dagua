((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cWF(d,e,f,g){return new B.Kc(d,e,f,g,null)},
bck(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aw(0,e)
w=f.aw(0,e)
return e.am(0,w.r9(A.aj(x.Mz(w)/t,0,1)))},
dsZ(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aw(0,q),o=e.b,n=o.aw(0,q),m=e.d,l=m.aw(0,q),k=p.Mz(n),j=n.Mz(n),i=p.Mz(l),h=l.Mz(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bck(d,q,o),B.bck(d,o,x),B.bck(d,x,m),B.bck(d,m,q)]
v=A.dr()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bc()},
dzA(){var x=A.fY()
return new B.aAT(x,$.aa())},
dd2(d,e,f){return Math.log(f/d)/Math.log(e/100)},
deo(d,e){var x,w,v,u,t,s,r=new A.dk(new Float64Array(16))
r.c4(d)
r.l6(r)
x=e.a
w=e.b
v=new A.es(new Float64Array(3))
v.h3(x,w,0)
v=r.mN(v)
u=e.c
t=new A.es(new Float64Array(3))
t.h3(u,w,0)
t=r.mN(t)
w=e.d
s=new A.es(new Float64Array(3))
s.h3(u,w,0)
s=r.mN(s)
u=new A.es(new Float64Array(3))
u.h3(x,w,0)
u=r.mN(u)
x=new A.es(new Float64Array(3))
x.c4(v)
w=new A.es(new Float64Array(3))
w.c4(t)
v=new A.es(new Float64Array(3))
v.c4(s)
t=new A.es(new Float64Array(3))
t.c4(u)
return new B.a6T(x,w,v,t)},
dcT(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.T,w=0;w<4;++w){v=r[w]
u=B.dsZ(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.K(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.K(x.a,t)}return B.cZX(x)},
cZX(d){return new A.K(A.iM(C.k.a8(d.a,9)),A.iM(C.k.a8(d.b,9)))},
dG3(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bJ:C.av},
Kc:function Kc(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
aeb:function aeb(d,e,f,g){var _=this
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
c5v:function c5v(){},
aHQ:function aHQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAT:function aAT(d,e){var _=this
_.a=d
_.W$=0
_.Z$=e
_.aJ$=_.bv$=0},
adD:function adD(d,e){this.a=d
this.b=e},
bkz:function bkz(d,e){this.a=d
this.b=e},
ajS:function ajS(){},
a6T:function a6T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
A=c[0]
C=c[2]
B=a.updateHolder(c[178],B)
D=c[433]
B.Kc.prototype={
R(){var x=null,w=y.z
return new B.aeb(new A.cl(x,w),new A.cl(x,w),x,x)}}
B.aeb.prototype={
gdW(){var x=this.d
if(x===$){this.a.toString
x=B.dzA()
this.d=x}return x},
gQf(){var x,w=$.az.a7$.x.h(0,this.e).gaM()
w.toString
x=y.g.a(w).gM(0)
return this.a.f.N8(new A.ad(0,0,0+x.a,0+x.b))},
gV3(){var x=$.az.a7$.x.h(0,this.f).gaM()
x.toString
x=y.g.a(x).gM(0)
return new A.ad(0,0,0+x.a,0+x.b)},
DE(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.T)){x=new A.dk(new Float64Array(16))
x.c4(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dk(new Float64Array(16))
w.c4(a0)
w.e8(a1.a,a1.b,0,1)
v=B.deo(w,d.gV3())
if(d.gQf().gazJ(0))return w
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
t.tF(u)
t.e8(-q/2,-o/2,0,1)
u=new A.es(new Float64Array(3))
u.h3(r,x,0)
u=t.mN(u)
q=new A.es(new Float64Array(3))
q.h3(s,x,0)
q=t.mN(q)
x=new A.es(new Float64Array(3))
x.h3(s,p,0)
x=t.mN(x)
s=new A.es(new Float64Array(3))
s.h3(r,p,0)
s=t.mN(s)
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
x.h3(m,l,0)
u=new A.es(new Float64Array(3))
u.h3(k,l,0)
s=new A.es(new Float64Array(3))
s.h3(k,j,0)
r=new A.es(new Float64Array(3))
r.h3(m,j,0)
q=new A.es(new Float64Array(3))
q.c4(x)
x=new A.es(new Float64Array(3))
x.c4(u)
u=new A.es(new Float64Array(3))
u.c4(s)
s=new A.es(new Float64Array(3))
s.c4(r)
i=new B.a6T(q,x,u,s)
h=B.dcT(i,v)
if(h.l(0,C.T))return w
x=w.a_v().a
u=x[0]
x=x[1]
g=a0.Cg()
u-=h.a*g
x-=h.b*g
f=new A.dk(new Float64Array(16))
f.c4(a0)
s=new A.es(new Float64Array(3))
s.h3(u,x,0)
f.aey(s)
e=B.dcT(i,B.deo(f,d.gV3()))
if(e.l(0,C.T))return f
s=e.a===0
if(!s&&e.b!==0){x=new A.dk(new Float64Array(16))
x.c4(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new A.dk(new Float64Array(16))
s.c4(a0)
r=new A.es(new Float64Array(3))
r.h3(u,x,0)
s.aey(r)
return s},
a4a(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dk(new Float64Array(16))
x.c4(d)
return x}w=q.gdW().a.Cg()
x=q.gV3()
v=q.gQf()
u=q.gV3()
t=q.gQf()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.aj(s,t.ax,t.at)/w
x=new A.dk(new Float64Array(16))
x.c4(d)
x.mT(r,r,r,1)
return x},
b6G(d,e,f){var x,w,v,u
if(e===0){x=new A.dk(new Float64Array(16))
x.c4(d)
return x}w=this.gdW().ny(f)
x=new A.dk(new Float64Array(16))
x.c4(d)
v=w.a
u=w.b
x.e8(v,u,0,1)
x.tF(-e)
x.e8(-v,-u,0,1)
return x},
Rx(d){var x
A:{x=!0
if(D.clL===d){x=!1
break A}if(D.zJ===d){this.a.toString
break A}if(D.tk===d||d==null){this.a.toString
break A}x=null}return x},
alb(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zJ
else return D.tk},
b8m(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cX(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a3(0,v.gS0())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cX(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a3(0,v.gS6())
v.w=null}v.Q=v.ch=null
v.at=v.gdW().a.Cg()
v.as=v.gdW().ny(d.b)
v.ax=v.ay},
b8o(d){var x,w,v,u,t,s,r=this,q=r.gdW().a.Cg(),p=r.x=d.c,o=r.gdW().ny(p),n=r.ch
if(n===D.tk)n=r.ch=r.alb(d)
else if(n==null){n=r.alb(d)
r.ch=n}if(!r.Rx(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdW().sv(0,r.a4a(r.gdW().a,n*d.d/q))
x=r.gdW().ny(p)
n=r.gdW()
w=r.gdW().a
v=r.as
v.toString
n.sv(0,r.DE(w,x.aw(0,v)))
u=r.gdW().ny(p)
p=r.as
p.toString
if(!B.cZX(p).l(0,B.cZX(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdW().sv(0,r.b6G(r.gdW().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dG3(n,o)}n=r.as
n.toString
s=o.aw(0,n)
r.gdW().sv(0,r.DE(r.gdW().a,s))
r.as=r.gdW().ny(p)
break}r.a.toString},
b8k(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
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
return}A:{if(D.tk===x){x=d.a.a
if(x.gex()<50){l.Q=null
return}w=l.gdW().a.a_v().a
v=w[0]
w=w[1]
l.a.toString
u=A.ar1(0.0000135,v,x.a,0,C.fk)
l.a.toString
t=A.ar1(0.0000135,w,x.b,0,C.fk)
x=x.gex()
l.a.toString
s=B.dd2(x,0.0000135,10)
x=u.gFz()
r=t.gFz()
q=y.A
p=q.i("fR<bs.T>")
o=l.y
l.r=new A.bn(o,new A.fR(new A.km(C.mV),new A.bC(new A.K(v,w),new A.K(x,r),q),p),p.i("bn<bs.T>"))
o.e=A.ej(0,0,0,C.k.aN(s*1000),0,0)
o.an(0,l.gS0())
l.y.d_(0)
break A}if(D.zJ===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdW().a.Cg()
l.a.toString
m=A.ar1(0.0026999999999999997,n,x/10,0,C.fk)
l.a.toString
s=B.dd2(w,0.0000135,0.1)
x=m.ix(0,s)
w=y.f
v=w.i("fR<bs.T>")
r=l.z
l.w=new A.bn(r,new A.fR(new A.km(C.mV),new A.bC(n,x,w),v),v.i("bn<bs.T>"))
r.e=A.ej(0,0,0,C.k.aN(s*1000),0,0)
r.an(0,l.gS6())
l.z.d_(0)
break A}break A}},
b5_(d){var x,w,v,u,t,s,r,q=this,p=d.gfZ(),o=d.gby(d)
if(y.l.b(d)){x=d.gdY(d)===C.eZ
if(x)q.a.toString
if(x){q.a.toString
x=o.am(0,d.gtY())
w=d.gtY()
v=A.LP(d.gdS(d),null,w,x)
if(!q.Rx(D.tk)){q.a.toString
return}u=q.gdW().ny(p)
t=q.gdW().ny(p.aw(0,v))
q.gdW().sv(0,q.DE(q.gdW().a,t.aw(0,u)))
q.a.toString
return}if(d.gtY().b===0)return
x=d.gtY()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjX(d)
else return
q.a.toString
if(!q.Rx(D.zJ))return
u=q.gdW().ny(p)
q.gdW().sv(0,q.a4a(q.gdW().a,s))
r=q.gdW().ny(p)
q.gdW().sv(0,q.DE(q.gdW().a,r.aw(0,u)))
q.a.toString},
b1P(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a3(0,r.gS0())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdW().a.a_v().a
x=q[0]
q=q[1]
w=r.gdW()
v=r.gdW().a
u=r.gdW()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DE(v,u.ny(s.aG(0,t.gv(t))).aw(0,r.gdW().ny(new A.K(x,q)))))},
b36(){var x,w,v,u,t,s=this,r=s.z
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
w=x.aG(0,r.gv(r))
r=s.gdW().a.Cg()
x=s.gdW()
v=s.x
v===$&&A.b()
u=x.ny(v)
s.gdW().sv(0,s.a4a(s.gdW().a,w/r))
t=s.gdW().ny(s.x)
s.gdW().sv(0,s.DE(s.gdW().a,t.aw(0,u)))},
b4a(){this.p(new B.c5v())},
ad(){var x=this,w=null
x.aq()
x.y=A.cD(w,w,w,w,x)
x.z=A.cD(w,w,w,w,x)
x.gdW().an(0,x.gamI())},
bi(d){this.bC(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdW().a3(0,x.gamI())
x.a.toString
w=x.gdW()
w.Z$=$.aa()
w.W$=0
x.aOL()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdW().a
w=u.a.w
v=new B.aHQ(w,u.e,C.y,!0,x,t,t)
return A.Av(C.fu,A.cp(C.bu,v,C.U,!1,t,t,t,t,t,t,t,t,t,t,u.gb8j(),u.gb8l(),u.gb8n(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.K(0,-0.005)),u.f,t,t,t,u.gb4Z(),t)}}
B.aHQ.prototype={
u(d){var x=this,w=A.Ns(x.w,new A.h9(x.c,x.d),null,x.r,!0)
return A.uS(w,x.e,null)}}
B.aAT.prototype={
ny(d){var x=this.a,w=new A.dk(new Float64Array(16))
if(w.l6(x)===0)A.an(A.h3(x,"other","Matrix cannot be inverted"))
x=new A.es(new Float64Array(3))
x.h3(d.a,d.b,0)
x=w.mN(x).a
return new A.K(x[0],x[1])}}
B.adD.prototype={
I(){return"_GestureType."+this.b}}
B.bkz.prototype={
I(){return"PanAxis."+this.b}}
B.ajS.prototype={
bS(){this.cu()
this.cP()
this.fS()},
m(){var x=this,w=x.bG$
if(w!=null)w.a3(0,x.gfE())
x.bG$=null
x.a6()}}
B.a6T.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a6T&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.as(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a85)","~(a87)","~(Vd)","~(mi)"])
B.c5v.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ajS.prototype
x.aOL=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.aeb.prototype,"gb8l","b8m",1)
x(v,"gb8n","b8o",2)
x(v,"gb8j","b8k",3)
x(v,"gb4Z","b5_",4)
w(v,"gS0","b1P",0)
w(v,"gS6","b36",0)
w(v,"gamI","b4a",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Kc,A.H)
w(B.ajS,A.a_)
w(B.aeb,B.ajS)
w(B.c5v,A.bL)
w(B.aHQ,A.L)
w(B.aAT,A.d3)
v(A.fg,[B.adD,B.bkz])
w(B.a6T,A.M)
x(B.ajS,A.hS)})()
A.br(b.typeUniverse,JSON.parse('{"Kc":{"H":[],"e":[],"f":[]},"aeb":{"a_":["Kc"]},"aHQ":{"L":[],"e":[],"f":[]},"aAT":{"d3":["dk"],"aV":[]}}'))
var y={z:A.A("cl<a_<H>>"),B:A.A("LT"),l:A.A("Fl"),g:A.A("ah"),A:A.A("bC<K>"),f:A.A("bC<T>")};(function constants(){D.OW=new A.b8(C.lC,20,C.t,null,null,null)
D.cpp=new B.bkz(3,"free")
D.tk=new B.adD(0,"pan")
D.zJ=new B.adD(1,"scale")
D.clL=new B.adD(2,"rotate")})()};
(a=>{a["WNXV2fxxKh7XcbffT8G11odf5kQ="]=a.current})($__dart_deferred_initializers__);