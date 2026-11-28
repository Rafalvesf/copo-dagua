((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dEf(d){var x
switch(d){case"paid":x=D.vr
break
case"cancelled":x=D.aCb
break
default:x=D.P2
break}return x},
d1G(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a2(p.h(d,"id"))
A.E(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.E(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.E(w)==="transport"?C.qA:C.ee
v=A.E(p.h(d,"guest_name"))
u=A.E(p.h(d,"guest_avatar_url"))
t=A.aL(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aL(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aL(p.h(d,"amount"))
r=B.dEf(A.E(p.h(d,"status")))
p=A.E(p.h(d,"created_at"))
p=A.dK(p==null?"":p)
p=p==null?q:p.e0()
return new B.jE(n,x,w,v,u,t,s,r,p==null?new A.ac(Date.now(),0,!1):p)},
a36:function a36(d,e){this.a=d
this.b=e},
jE:function jE(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
cKB:function cKB(){},
ale(){var x=A.X(22),w=$.ar.cc(0.45)
return new A.M(C.t,null,A.bA(w,1),x,C.bg,null,C.y)},
alu(d){return""+A.aK(d)+" "+C.c2[A.ax(d)-1]},
dcc(d){var x,w,v
if(d.b===C.ee&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.alu(w)}else{w.toString
x=B.alu(w)+" a "+B.alu(x)}return x}v=d.x
if(v==null)return null
return B.alu(v)+" \xb7 "+C.f.aX(C.j.k(A.hM(v)),2,"0")+":"+C.f.aX(C.j.k(A.hv(v)),2,"0")},
aa2:function aa2(d,e){this.c=d
this.a=e},
a9e:function a9e(d,e,f){this.c=d
this.d=e
this.a=f},
a4h:function a4h(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[197]
B.a36.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jE.prototype={
guh(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ee){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aa2.prototype={
u(d){return new A.l2(this.c,6,null,null,null)}}
B.a9e.prototype={
u(d){var x=null,w=$.ar,v=this.d,u=v?w:w.cc(0.14),t=A.X(999)
return A.A(x,A.h(this.c,x,x,x,x,A.aF(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.M(u,x,x,t,x,x,C.y),x,x,x,C.nu,x,x,x)}}
B.a4h.prototype={
u(d){var x=null,w=B.ale()
return A.A(x,A.B(A.a([D.c0r,C.Q,D.cgR,C.aE,A.h(this.c,x,x,x,x,C.cy,C.a6,x,x)],y.e),C.w,C.i,C.m,0,C.v),C.r,x,x,w,x,x,x,C.dk,x,x,x)}}
var z=a.updateTypes([])
B.cKB.prototype={
$1(d){return this.aGS(d)},
aGS(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.S().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.R("platform_settings").az(0,"platform_commission_percentage").X("id",1).dP(0),$async$$1)
case 3:v=t.dv(s.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:171};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a36,A.f6)
x(B.jE,A.K)
x(B.cKB,A.bw)
w(A.I,[B.aa2,B.a9e,B.a4h])})()
A.bp(b.typeUniverse,JSON.parse('{"aa2":{"I":[],"e":[],"f":[]},"a9e":{"I":[],"e":[],"f":[]},"a4h":{"I":[],"e":[],"f":[]}}'))
var y={e:A.w("r<e>"),b:A.w("R"),k:A.w("a5<c,@>?")};(function constants(){var x=a.makeConstList
D.C6=new A.W(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.P2=new B.a36(0,"pendingPayment")
D.vr=new B.a36(1,"paid")
D.aCb=new B.a36(2,"cancelled")
D.FF=x([],A.w("r<jE>"))
D.c0r=new A.MX(C.nU,-0.016,48,null)
D.cgR=new A.C("Em breve",null,C.hd,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVX","cRw",()=>A.eF(new B.cKB(),null,!1,null,null,y.b))})()};
(a=>{a["9XG+s2audiD08mz1TCdkHV1e6Wc="]=a.current})($__dart_deferred_initializers__);