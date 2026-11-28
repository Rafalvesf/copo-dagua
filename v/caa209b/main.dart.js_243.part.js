((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dxU(d){var x
switch(d){case"paid":x=D.uV
break
case"cancelled":x=D.aA6
break
default:x=D.NT
break}return x},
cX7(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a_(p.h(d,"id"))
A.J(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.h(o,"title")
A.J(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.h(o,"kind")
w=A.J(w)==="transport"?C.qa:C.e3
v=A.J(p.h(d,"guest_name"))
u=A.J(p.h(d,"guest_avatar_url"))
t=A.aN(p.h(d,"quantity"))
t=t==null?q:C.k.G(t)
if(t==null)t=1
s=A.aN(p.h(d,"nights"))
s=s==null?q:C.k.G(s)
if(s==null)s=1
A.aN(p.h(d,"amount"))
r=B.dxU(A.J(p.h(d,"status")))
p=A.J(p.h(d,"created_at"))
p=A.eh(p==null?"":p)
p=p==null?q:p.eH()
return new B.jz(n,x,w,v,u,t,s,r,p==null?new A.af(Date.now(),0,!1):p)},
a24:function a24(d,e){this.a=d
this.b=e},
jz:function jz(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
cFi:function cFi(){},
ajB(){var x=A.a2(22),w=$.ap.ci(0.45)
return new A.O(C.t,null,A.bV(w,1),x,C.b0,null,C.y)},
ajR(d){return""+A.aM(d)+" "+C.cp[A.ay(d)-1]},
d6w(d){var x,w,v
if(d.b===C.e3&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.ajR(w)}else{w.toString
x=B.ajR(w)+" a "+B.ajR(x)}return x}v=d.x
if(v==null)return null
return B.ajR(v)+" \xb7 "+C.f.aZ(C.i.k(A.io(v)),2,"0")+":"+C.f.aZ(C.i.k(A.i8(v)),2,"0")},
a8Q:function a8Q(d,e){this.c=d
this.a=e},
a82:function a82(d,e,f){this.c=d
this.d=e
this.a=f},
a3e:function a3e(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[72],B)
D=c[186]
B.a24.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jz.prototype={
guc(){var x,w=this.d,v=this.r,u=""+v
if(w===C.e3){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.a8Q.prototype={
v(d){return new A.kW(this.c,6,null,null,null)}}
B.a82.prototype={
v(d){var x=null,w=$.ap,v=this.d,u=v?w:w.ci(0.14),t=A.a2(999)
return A.C(x,A.i(this.c,x,x,x,x,A.aH(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.O(u,x,x,t,x,x,C.y),x,x,x,C.nc,x,x,x)}}
B.a3e.prototype={
v(d){var x=null,w=B.ajB()
return A.C(x,A.B(A.a([D.bXd,C.R,D.cca,C.aF,A.i(this.c,x,x,x,x,C.dl,C.a5,x,x)],y.e),C.x,C.j,C.o,0,C.v),C.r,x,x,w,x,x,x,C.de,x,x,x)}}
var z=a.updateTypes([])
B.cFi.prototype={
$1(d){return this.aFR(d)},
aFR(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.T().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.P("platform_settings").aw(0,"platform_commission_percentage").W("id",1).dN(0),$async$$1)
case 3:v=t.dt(s.h(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:185};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a24,A.fy)
x(B.jz,A.L)
x(B.cFi,A.bw)
w(A.M,[B.a8Q,B.a82,B.a3e])})()
A.bx(b.typeUniverse,JSON.parse('{"a8Q":{"M":[],"e":[],"f":[]},"a82":{"M":[],"e":[],"f":[]},"a3e":{"M":[],"e":[],"f":[]}}'))
var y={e:A.x("t<e>"),b:A.x("P"),k:A.x("a4<c,@>?")};(function constants(){var x=a.makeConstList
D.Bl=new A.W(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.NT=new B.a24(0,"pendingPayment")
D.uV=new B.a24(1,"paid")
D.aA6=new B.a24(2,"cancelled")
D.EJ=x([],A.x("t<jz>"))
D.bXd=new A.Mk(C.lw,-0.016,48,null)
D.cca=new A.D("Em breve",null,C.fw,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dPd","cLZ",()=>A.ey(new B.cFi(),null,!1,null,null,y.b))})()};
(a=>{a["Ql+3VHRMxifP13uYrKKDaDEXENU="]=a.current})($__dart_deferred_initializers__);