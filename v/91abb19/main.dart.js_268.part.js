((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dDz(d){var x
switch(d){case"paid":x=D.vp
break
case"cancelled":x=D.aC5
break
default:x=D.P_
break}return x},
d13(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a2(p.h(d,"id"))
A.E(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.E(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.E(w)==="transport"?C.qB:C.ec
v=A.E(p.h(d,"guest_name"))
u=A.E(p.h(d,"guest_avatar_url"))
t=A.aK(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aK(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aK(p.h(d,"amount"))
r=B.dDz(A.E(p.h(d,"status")))
p=A.E(p.h(d,"created_at"))
p=A.dN(p==null?"":p)
p=p==null?q:p.e8()
return new B.jE(n,x,w,v,u,t,s,r,p==null?new A.ad(Date.now(),0,!1):p)},
a2X:function a2X(d,e){this.a=d
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
cK4:function cK4(){},
akZ(){var x=A.Y(22),w=$.ar.cc(0.45)
return new A.M(C.t,null,A.bA(w,1),x,C.bf,null,C.y)},
ale(d){return""+A.aM(d)+" "+C.ch[A.ay(d)-1]},
dbw(d){var x,w,v
if(d.b===C.ec&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.ale(w)}else{w.toString
x=B.ale(w)+" a "+B.ale(x)}return x}v=d.x
if(v==null)return null
return B.ale(v)+" \xb7 "+C.f.aY(C.j.k(A.hY(v)),2,"0")+":"+C.f.aY(C.j.k(A.hK(v)),2,"0")},
a9T:function a9T(d,e){this.c=d
this.a=e},
a94:function a94(d,e,f){this.c=d
this.d=e
this.a=f},
a47:function a47(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[196]
B.a2X.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jE.prototype={
guh(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ec){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.a9T.prototype={
u(d){return new A.l2(this.c,6,null,null,null)}}
B.a94.prototype={
u(d){var x=null,w=$.ar,v=this.d,u=v?w:w.cc(0.14),t=A.Y(999)
return A.A(x,A.h(this.c,x,x,x,x,A.aF(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.M(u,x,x,t,x,x,C.y),x,x,x,C.ns,x,x,x)}}
B.a47.prototype={
u(d){var x=null,w=B.akZ()
return A.A(x,A.B(A.a([D.c0k,C.Q,D.cgE,C.aE,A.h(this.c,x,x,x,x,C.d2,C.a6,x,x)],y.e),C.w,C.i,C.m,0,C.v),C.r,x,x,w,x,x,x,C.dk,x,x,x)}}
var z=a.updateTypes([])
B.cK4.prototype={
$1(d){return this.aGN(d)},
aGN(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.T().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.R("platform_settings").az(0,"platform_commission_percentage").X("id",1).dP(0),$async$$1)
case 3:v=t.du(s.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:157};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a2X,A.fg)
x(B.jE,A.J)
x(B.cK4,A.bx)
w(A.L,[B.a9T,B.a94,B.a47])})()
A.bq(b.typeUniverse,JSON.parse('{"a9T":{"L":[],"e":[],"f":[]},"a94":{"L":[],"e":[],"f":[]},"a47":{"L":[],"e":[],"f":[]}}'))
var y={e:A.w("r<e>"),b:A.w("R"),k:A.w("a4<c,@>?")};(function constants(){var x=a.makeConstList
D.C5=new A.W(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.P_=new B.a2X(0,"pendingPayment")
D.vp=new B.a2X(1,"paid")
D.aC5=new B.a2X(2,"cancelled")
D.FD=x([],A.w("r<jE>"))
D.c0k=new A.MV(C.nT,-0.016,48,null)
D.cgE=new A.D("Em breve",null,C.ha,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVe","cQU",()=>A.eE(new B.cK4(),null,!1,null,null,y.b))})()};
(a=>{a["wbaPzWDOFiZ1Va3KZQ1H1TTPOns="]=a.current})($__dart_deferred_initializers__);