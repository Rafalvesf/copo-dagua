((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dFs(d){var x
switch(d){case"paid":x=D.vy
break
case"cancelled":x=D.aC6
break
default:x=D.P3
break}return x},
d2P(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a1(p.h(d,"id"))
A.D(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.D(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.D(w)==="transport"?C.qJ:C.ef
v=A.D(p.h(d,"guest_name"))
u=A.D(p.h(d,"guest_avatar_url"))
t=A.aL(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aL(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aL(p.h(d,"amount"))
r=B.dFs(A.D(p.h(d,"status")))
p=A.D(p.h(d,"created_at"))
p=A.dq(p==null?"":p)
p=p==null?q:p.e0()
return new B.jG(n,x,w,v,u,t,s,r,p==null?new A.ad(Date.now(),0,!1):p)},
a3h:function a3h(d,e){this.a=d
this.b=e},
jG:function jG(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
cLJ:function cLJ(){},
alm(){var x=A.X(22),w=$.at.cc(0.45)
return new A.M(C.t,null,A.bz(w,1),x,C.bh,null,C.y)},
alC(d){return""+A.aH(d)+" "+C.bO[A.ax(d)-1]},
ddn(d){var x,w,v
if(d.b===C.ef&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.alC(w)}else{w.toString
x=B.alC(w)+" a "+B.alC(x)}return x}v=d.x
if(v==null)return null
return B.alC(v)+" \xb7 "+C.f.aY(C.j.k(A.ic(v)),2,"0")+":"+C.f.aY(C.j.k(A.hY(v)),2,"0")},
aac:function aac(d,e){this.c=d
this.a=e},
a9o:function a9o(d,e,f){this.c=d
this.d=e
this.a=f},
a4r:function a4r(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[200]
B.a3h.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jG.prototype={
gui(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ef){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aac.prototype={
u(d){return new A.l4(this.c,6,null,null,null)}}
B.a9o.prototype={
u(d){var x=null,w=$.at,v=this.d,u=v?w:w.cc(0.14),t=A.X(999)
return A.B(x,A.h(this.c,x,x,x,x,A.aI(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.M(u,x,x,t,x,x,C.y),x,x,x,C.lD,x,x,x)}}
B.a4r.prototype={
u(d){var x=null,w=B.alm()
return A.B(x,A.A(A.a([D.c0s,C.R,D.ch0,C.aE,A.h(this.c,x,x,x,x,C.cf,C.a6,x,x)],y.e),C.w,C.h,C.l,0,C.u),C.r,x,x,w,x,x,x,C.dn,x,x,x)}}
var z=a.updateTypes([])
B.cLJ.prototype={
$1(d){return this.aHb(d)},
aHb(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.S().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.R("platform_settings").ao(0,"platform_commission_percentage").W("id",1).dP(0),$async$$1)
case 3:v=t.dw(s.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:180};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3h,A.f7)
x(B.jG,A.J)
x(B.cLJ,A.bw)
w(A.H,[B.aac,B.a9o,B.a4r])})()
A.bn(b.typeUniverse,JSON.parse('{"aac":{"H":[],"e":[],"f":[]},"a9o":{"H":[],"e":[],"f":[]},"a4r":{"H":[],"e":[],"f":[]}}'))
var y={e:A.w("r<e>"),b:A.w("R"),k:A.w("a5<c,@>?")};(function constants(){var x=a.makeConstList
D.Cc=new A.W(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.P3=new B.a3h(0,"pendingPayment")
D.vy=new B.a3h(1,"paid")
D.aC6=new B.a3h(2,"cancelled")
D.FJ=x([],A.w("r<jG>"))
D.c0s=new A.N_(C.o1,-0.016,48,null)
D.ch0=new A.C("Em breve",null,C.hf,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXa","cSH",()=>A.eG(new B.cLJ(),null,!1,null,null,y.b))})()};
(a=>{a["7E4XtngPjQFf968U9TB11hxrHKo="]=a.current})($__dart_deferred_initializers__);