((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dGw(d){var x
switch(d){case"paid":x=D.v9
break
case"cancelled":x=D.aBe
break
default:x=D.Ok
break}return x},
d3H(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.Y(p.h(d,"id"))
A.B(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.B(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.B(w)==="transport"?C.q8:C.eg
v=A.B(p.h(d,"guest_name"))
u=A.B(p.h(d,"guest_avatar_url"))
t=A.aC(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aC(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aC(p.h(d,"amount"))
r=B.dGw(A.B(p.h(d,"status")))
p=A.B(p.h(d,"created_at"))
p=A.d0(p==null?"":p)
p=p==null?q:p.dF()
return new B.jF(n,x,w,v,u,t,s,r,p==null?new A.ae(Date.now(),0,!1):p)},
a35:function a35(d,e){this.a=d
this.b=e},
jF:function jF(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
cMy:function cMy(){},
akQ(){var x=A.W(22),w=$.at.cc(0.45)
return new A.I(C.t,null,A.bz(w,1),x,C.bq,null,C.x)},
al6(d){return""+A.aD(d)+" "+C.bg[A.av(d)-1]},
deh(d){var x,w,v
if(d.b===C.eg&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.al6(w)}else{w.toString
x=B.al6(w)+" a "+B.al6(x)}return x}v=d.x
if(v==null)return null
return B.al6(v)+" \xb7 "+C.f.aT(C.j.k(A.hX(v)),2,"0")+":"+C.f.aT(C.j.k(A.hN(v)),2,"0")},
a9W:function a9W(d,e){this.c=d
this.a=e},
a96:function a96(d,e,f){this.c=d
this.d=e
this.a=f},
a4h:function a4h(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[195]
B.a35.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jF.prototype={
gu1(){var x,w=this.d,v=this.r,u=""+v
if(w===C.eg){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.a9W.prototype={
u(d){return new A.kH(this.c,6,null,null,null)}}
B.a96.prototype={
u(d){var x=null,w=$.at,v=this.d,u=v?w:w.cc(0.14),t=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aH(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.I(u,x,x,t,x,x,C.x),x,x,x,C.hs,x,x,x)}}
B.a4h.prototype={
u(d){var x=null,w=B.akQ()
return A.x(x,A.y(A.a([D.bZQ,C.R,D.cco,C.aD,A.h(this.c,x,x,x,x,C.bZ,C.a4,x)],y.e),C.v,C.h,C.l),C.r,x,x,w,x,x,x,C.cH,x,x,x)}}
var z=a.updateTypes([])
B.cMy.prototype={
$1(d){return this.aGg(d)},
aGg(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.P().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.P("platform_settings").ai(0,"platform_commission_percentage").U("id",1).dM(0),$async$$1)
case 3:v=t.du(s.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:192};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a35,A.ff)
x(B.jF,A.L)
x(B.cMy,A.bv)
w(A.M,[B.a9W,B.a96,B.a4h])})()
A.bt(b.typeUniverse,JSON.parse('{"a9W":{"M":[],"e":[],"f":[]},"a96":{"M":[],"e":[],"f":[]},"a4h":{"M":[],"e":[],"f":[]}}'))
var y={e:A.z("r<e>"),b:A.z("T"),k:A.z("a5<c,@>?")};(function constants(){var x=a.makeConstList
D.BL=new A.Z(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.Ok=new B.a35(0,"pendingPayment")
D.v9=new B.a35(1,"paid")
D.aBe=new B.a35(2,"cancelled")
D.Fd=x([],A.z("r<jF>"))
D.bZQ=new A.VI(C.nL,-0.016,48,null)
D.cco=new A.D("Em breve",null,C.hM,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYq","cTA",()=>A.ey(new B.cMy(),null,!1,null,null,y.b))})()};
(a=>{a["xJWhhzjaybXTWWpmrEUpF4IWdH0="]=a.current})($__dart_deferred_initializers__);