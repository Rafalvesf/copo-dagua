((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
cWn(d,e,f,g){return new B.Kc(d,e,f,g,null)},
bcd(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aw(0,e)
w=f.aw(0,e)
return e.am(0,w.r9(A.aj(x.Mw(w)/t,0,1)))},
dsI(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aw(0,q),o=e.b,n=o.aw(0,q),m=e.d,l=m.aw(0,q),k=p.Mw(n),j=n.Mw(n),i=p.Mw(l),h=l.Mw(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[B.bcd(d,q,o),B.bcd(d,o,x),B.bcd(d,x,m),B.bcd(d,m,q)]
v=A.du()
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.be()},
dzj(){var x=A.fW()
return new B.aAP(x,$.aa())},
dcM(d,e,f){return Math.log(f/d)/Math.log(e/100)},
de7(d,e){var x,w,v,u,t,s,r=new A.dk(new Float64Array(16))
r.c4(d)
r.l6(r)
x=e.a
w=e.b
v=new A.es(new Float64Array(3))
v.h3(x,w,0)
v=r.mM(v)
u=e.c
t=new A.es(new Float64Array(3))
t.h3(u,w,0)
t=r.mM(t)
w=e.d
s=new A.es(new Float64Array(3))
s.h3(u,w,0)
s=r.mM(s)
u=new A.es(new Float64Array(3))
u.h3(x,w,0)
u=r.mM(u)
x=new A.es(new Float64Array(3))
x.c4(v)
w=new A.es(new Float64Array(3))
w.c4(t)
v=new A.es(new Float64Array(3))
v.c4(s)
t=new A.es(new Float64Array(3))
t.c4(u)
return new B.a6R(x,w,v,t)},
dcC(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.T,w=0;w<4;++w){v=r[w]
u=B.dsI(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new A.K(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new A.K(x.a,t)}return B.cZG(x)},
cZG(d){return new A.K(A.iL(C.k.a8(d.a,9)),A.iL(C.k.a8(d.b,9)))},
dFN(d,e){if(d.l(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.bJ:C.av},
Kc:function Kc(d,e,f,g,h){var _=this
_.f=d
_.w=e
_.at=f
_.ax=g
_.a=h},
ae8:function ae8(d,e,f,g){var _=this
_.d=$
_.e=d
_.f=e
_.w=_.r=null
_.z=_.y=_.x=$
_.at=_.as=_.Q=null
_.ay=_.ax=0
_.ch=null
_.er$=f
_.bF$=g
_.c=_.a=null},
c5l:function c5l(){},
aHK:function aHK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAP:function aAP(d,e){var _=this
_.a=d
_.W$=0
_.Z$=e
_.aJ$=_.bv$=0},
adA:function adA(d,e){this.a=d
this.b=e},
bks:function bks(d,e){this.a=d
this.b=e},
ajO:function ajO(){},
a6R:function a6R(d,e,f,g){var _=this
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
return new B.ae8(new A.cl(x,w),new A.cl(x,w),x,x)}}
B.ae8.prototype={
gdW(){var x=this.d
if(x===$){this.a.toString
x=B.dzj()
this.d=x}return x},
gQb(){var x,w=$.az.a6$.x.h(0,this.e).gaM()
w.toString
x=y.g.a(w).gM(0)
return this.a.f.N5(new A.ad(0,0,0+x.a,0+x.b))},
gV_(){var x=$.az.a6$.x.h(0,this.f).gaM()
x.toString
x=y.g.a(x).gM(0)
return new A.ad(0,0,0+x.a,0+x.b)},
DA(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.l(0,C.T)){x=new A.dk(new Float64Array(16))
x.c4(a0)
return x}if(d.Q!=null){d.a.toString
switch(3){case 3:break}}w=new A.dk(new Float64Array(16))
w.c4(a0)
w.e8(a1.a,a1.b,0,1)
v=B.de7(w,d.gV_())
if(d.gQb().gazH(0))return w
x=d.gQb()
u=d.ay
t=A.fW()
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
u.h3(r,x,0)
u=t.mM(u)
q=new A.es(new Float64Array(3))
q.h3(s,x,0)
q=t.mM(q)
x=new A.es(new Float64Array(3))
x.h3(s,p,0)
x=t.mM(x)
s=new A.es(new Float64Array(3))
s.h3(r,p,0)
s=t.mM(s)
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
i=new B.a6R(q,x,u,s)
h=B.dcC(i,v)
if(h.l(0,C.T))return w
x=w.a_r().a
u=x[0]
x=x[1]
g=a0.Cc()
u-=h.a*g
x-=h.b*g
f=new A.dk(new Float64Array(16))
f.c4(a0)
s=new A.es(new Float64Array(3))
s.h3(u,x,0)
f.aew(s)
e=B.dcC(i,B.de7(f,d.gV_()))
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
s.aew(r)
return s},
a48(d,e){var x,w,v,u,t,s,r,q=this
if(e===1){x=new A.dk(new Float64Array(16))
x.c4(d)
return x}w=q.gdW().a.Cc()
x=q.gV_()
v=q.gQb()
u=q.gV_()
t=q.gQb()
s=Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b)))
t=q.a
r=A.aj(s,t.ax,t.at)/w
x=new A.dk(new Float64Array(16))
x.c4(d)
x.mS(r,r,r,1)
return x},
b6D(d,e,f){var x,w,v,u
if(e===0){x=new A.dk(new Float64Array(16))
x.c4(d)
return x}w=this.gdW().nx(f)
x=new A.dk(new Float64Array(16))
x.c4(d)
v=w.a
u=w.b
x.e8(v,u,0,1)
x.tE(-e)
x.e8(-v,-u,0,1)
return x},
Rt(d){var x
A:{x=!0
if(D.clN===d){x=!1
break A}if(D.zJ===d){this.a.toString
break A}if(D.tk===d||d==null){this.a.toString
break A}x=null}return x},
al8(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.zJ
else return D.tk},
b8j(d){var x,w,v=this
v.a.toString
x=v.y
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cX(0)
x=v.y
x.sv(0,x.a)
x=v.r
if(x!=null)x.a.a2(0,v.gRX())
v.r=null}x=v.z
x===$&&A.b()
w=x.r
if(w!=null&&w.a!=null){x.cX(0)
x=v.z
x.sv(0,x.a)
x=v.w
if(x!=null)x.a.a2(0,v.gS2())
v.w=null}v.Q=v.ch=null
v.at=v.gdW().a.Cc()
v.as=v.gdW().nx(d.b)
v.ax=v.ay},
b8l(d){var x,w,v,u,t,s,r=this,q=r.gdW().a.Cc(),p=r.x=d.c,o=r.gdW().nx(p),n=r.ch
if(n===D.tk)n=r.ch=r.al8(d)
else if(n==null){n=r.al8(d)
r.ch=n}if(!r.Rt(n)){r.a.toString
return}switch(n.a){case 1:n=r.at
n.toString
r.gdW().sv(0,r.a48(r.gdW().a,n*d.d/q))
x=r.gdW().nx(p)
n=r.gdW()
w=r.gdW().a
v=r.as
v.toString
n.sv(0,r.DA(w,x.aw(0,v)))
u=r.gdW().nx(p)
p=r.as
p.toString
if(!B.cZG(p).l(0,B.cZG(u)))r.as=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}w=r.ax
w.toString
t=w+n
r.gdW().sv(0,r.b6D(r.gdW().a,r.ay-t,p))
r.ay=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.Q==null){n=r.as
n.toString
r.Q=B.dFN(n,o)}n=r.as
n.toString
s=o.aw(0,n)
r.gdW().sv(0,r.DA(r.gdW().a,s))
r.as=r.gdW().nx(p)
break}r.a.toString},
b8h(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this
l.a.toString
l.as=l.ax=l.at=null
x=l.r
if(x!=null)x.a.a2(0,l.gRX())
x=l.w
if(x!=null)x.a.a2(0,l.gS2())
x=l.y
x===$&&A.b()
x.sv(0,x.a)
x=l.z
x===$&&A.b()
x.sv(0,x.a)
x=l.ch
if(!l.Rt(x)){l.Q=null
return}A:{if(D.tk===x){x=d.a.a
if(x.gex()<50){l.Q=null
return}w=l.gdW().a.a_r().a
v=w[0]
w=w[1]
l.a.toString
u=A.aqX(0.0000135,v,x.a,0,C.fi)
l.a.toString
t=A.aqX(0.0000135,w,x.b,0,C.fi)
x=x.gex()
l.a.toString
s=B.dcM(x,0.0000135,10)
x=u.gFx()
r=t.gFx()
q=y.A
p=q.i("ho<bx.T>")
o=l.y
l.r=new A.bm(o,new A.ho(new A.l8(C.mU),new A.bE(new A.K(v,w),new A.K(x,r),q),p),p.i("bm<bx.T>"))
o.e=A.ei(0,0,0,C.k.aN(s*1000),0,0)
o.an(0,l.gRX())
l.y.cz(0)
break A}if(D.zJ===x){x=d.b
w=Math.abs(x)
if(w<0.1){l.Q=null
return}n=l.gdW().a.Cc()
l.a.toString
m=A.aqX(0.0026999999999999997,n,x/10,0,C.fi)
l.a.toString
s=B.dcM(w,0.0000135,0.1)
x=m.ix(0,s)
w=y.f
v=w.i("ho<bx.T>")
r=l.z
l.w=new A.bm(r,new A.ho(new A.l8(C.mU),new A.bE(n,x,w),v),v.i("bm<bx.T>"))
r.e=A.ei(0,0,0,C.k.aN(s*1000),0,0)
r.an(0,l.gS2())
l.z.cz(0)
break A}break A}},
b4X(d){var x,w,v,u,t,s,r,q=this,p=d.gfZ(),o=d.gby(d)
if(y.l.b(d)){x=d.gdY(d)===C.eY
if(x)q.a.toString
if(x){q.a.toString
x=o.am(0,d.gtX())
w=d.gtX()
v=A.LP(d.gdS(d),null,w,x)
if(!q.Rt(D.tk)){q.a.toString
return}u=q.gdW().nx(p)
t=q.gdW().nx(p.aw(0,v))
q.gdW().sv(0,q.DA(q.gdW().a,t.aw(0,u)))
q.a.toString
return}if(d.gtX().b===0)return
x=d.gtX()
q.a.toString
s=Math.exp(-x.b/200)}else if(y.B.b(d))s=d.gjX(d)
else return
q.a.toString
if(!q.Rt(D.zJ))return
u=q.gdW().nx(p)
q.gdW().sv(0,q.a48(q.gdW().a,s))
r=q.gdW().nx(p)
q.gdW().sv(0,q.DA(q.gdW().a,r.aw(0,u)))
q.a.toString},
b1M(){var x,w,v,u,t,s,r=this,q=r.y
q===$&&A.b()
q=q.r
if(!(q!=null&&q.a!=null)){r.Q=null
q=r.r
if(q!=null)q.a.a2(0,r.gRX())
r.r=null
q=r.y
q.sv(0,q.a)
return}q=r.gdW().a.a_r().a
x=q[0]
q=q[1]
w=r.gdW()
v=r.gdW().a
u=r.gdW()
t=r.r
s=t.b
t=t.a
w.sv(0,r.DA(v,u.nx(s.aG(0,t.gv(t))).aw(0,r.gdW().nx(new A.K(x,q)))))},
b33(){var x,w,v,u,t,s=this,r=s.z
r===$&&A.b()
r=r.r
if(!(r!=null&&r.a!=null)){s.Q=null
r=s.w
if(r!=null)r.a.a2(0,s.gS2())
s.w=null
r=s.z
r.sv(0,r.a)
return}r=s.w
x=r.b
r=r.a
w=x.aG(0,r.gv(r))
r=s.gdW().a.Cc()
x=s.gdW()
v=s.x
v===$&&A.b()
u=x.nx(v)
s.gdW().sv(0,s.a48(s.gdW().a,w/r))
t=s.gdW().nx(s.x)
s.gdW().sv(0,s.DA(s.gdW().a,t.aw(0,u)))},
b47(){this.p(new B.c5l())},
ad(){var x=this,w=null
x.aq()
x.y=A.cG(w,w,w,w,x)
x.z=A.cG(w,w,w,w,x)
x.gdW().an(0,x.gamF())},
bi(d){this.bD(d)
this.a.toString
return},
m(){var x=this,w=x.y
w===$&&A.b()
w.m()
w=x.z
w===$&&A.b()
w.m()
x.gdW().a2(0,x.gamF())
x.a.toString
w=x.gdW()
w.Z$=$.aa()
w.W$=0
x.aOI()},
u(d){var x,w,v,u=this,t=null
u.a.toString
x=u.gdW().a
w=u.a.w
v=new B.aHK(w,u.e,C.y,!0,x,t,t)
return A.Au(C.ft,A.cp(C.bu,v,C.U,!1,t,t,t,t,t,t,t,t,t,t,u.gb8g(),u.gb8i(),u.gb8k(),t,t,t,t,t,t,t,t,t,t,t,!1,new A.K(0,-0.005)),u.f,t,t,t,u.gb4W(),t)}}
B.aHK.prototype={
u(d){var x=this,w=A.Ns(x.w,new A.h7(x.c,x.d),null,x.r,!0)
return A.uS(w,x.e,null)}}
B.aAP.prototype={
nx(d){var x=this.a,w=new A.dk(new Float64Array(16))
if(w.l6(x)===0)A.an(A.h1(x,"other","Matrix cannot be inverted"))
x=new A.es(new Float64Array(3))
x.h3(d.a,d.b,0)
x=w.mM(x).a
return new A.K(x[0],x[1])}}
B.adA.prototype={
I(){return"_GestureType."+this.b}}
B.bks.prototype={
I(){return"PanAxis."+this.b}}
B.ajO.prototype={
bT(){this.cv()
this.cY()
this.fS()},
m(){var x=this,w=x.bF$
if(w!=null)w.a2(0,x.gfE())
x.bF$=null
x.a7()}}
B.a6R.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.a6R&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.as(x.a,x.b,x.c,x.d,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b,C.b)}}
var z=a.updateTypes(["~()","~(a83)","~(a84)","~(Vc)","~(mh)"])
B.c5l.prototype={
$0(){},
$S:0};(function aliases(){var x=B.ajO.prototype
x.aOI=x.m})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.ae8.prototype,"gb8i","b8j",1)
x(v,"gb8k","b8l",2)
x(v,"gb8g","b8h",3)
x(v,"gb4W","b4X",4)
w(v,"gRX","b1M",0)
w(v,"gS2","b33",0)
w(v,"gamF","b47",0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(B.Kc,A.G)
w(B.ajO,A.a0)
w(B.ae8,B.ajO)
w(B.c5l,A.bL)
w(B.aHK,A.L)
w(B.aAP,A.d3)
v(A.fg,[B.adA,B.bks])
w(B.a6R,A.M)
x(B.ajO,A.hS)})()
A.bq(b.typeUniverse,JSON.parse('{"Kc":{"G":[],"e":[],"f":[]},"ae8":{"a0":["Kc"]},"aHK":{"L":[],"e":[],"f":[]},"aAP":{"d3":["dk"],"aU":[]}}'))
var y={z:A.y("cl<a0<G>>"),B:A.y("LT"),l:A.y("Fk"),g:A.y("ah"),A:A.y("bE<K>"),f:A.y("bE<T>")};(function constants(){D.OX=new A.b8(C.lB,20,C.t,null,null,null)
D.cpr=new B.bks(3,"free")
D.tk=new B.adA(0,"pan")
D.zJ=new B.adA(1,"scale")
D.clN=new B.adA(2,"rotate")})()};
(a=>{a["lmn+4DXZ/3HSilQTXq78Knt1IPg="]=a.current})($__dart_deferred_initializers__);