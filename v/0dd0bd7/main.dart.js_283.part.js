((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dH9(d){var x
switch(d){case"paid":x=D.va
break
case"cancelled":x=D.aBi
break
default:x=D.Ol
break}return x},
d4h(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.Y(p.h(d,"id"))
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
r=B.dH9(A.B(p.h(d,"status")))
p=A.B(p.h(d,"created_at"))
p=A.d0(p==null?"":p)
p=p==null?q:p.dF()
return new B.jF(n,x,w,v,u,t,s,r,p==null?new A.ac(Date.now(),0,!1):p)},
a37:function a37(d,e){this.a=d
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
cN4:function cN4(){},
akT(){var x=A.W(22),w=$.at.cc(0.45)
return new A.I(C.t,null,A.bD(w,1),x,C.bq,null,C.x)},
al9(d){return""+A.aD(d)+" "+C.bg[A.av(d)-1]},
deS(d){var x,w,v
if(d.b===C.eg&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.al9(w)}else{w.toString
x=B.al9(w)+" a "+B.al9(x)}return x}v=d.x
if(v==null)return null
return B.al9(v)+" \xb7 "+C.f.aT(C.j.k(A.hX(v)),2,"0")+":"+C.f.aT(C.j.k(A.hN(v)),2,"0")},
a9Z:function a9Z(d,e){this.c=d
this.a=e},
a99:function a99(d,e,f){this.c=d
this.d=e
this.a=f},
a4k:function a4k(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[198]
B.a37.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jF.prototype={
gu3(){var x,w=this.d,v=this.r,u=""+v
if(w===C.eg){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.a9Z.prototype={
u(d){return new A.kH(this.c,6,null,null,null)}}
B.a99.prototype={
u(d){var x=null,w=$.at,v=this.d,u=v?w:w.cc(0.14),t=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aH(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.I(u,x,x,t,x,x,C.x),x,x,x,C.hs,x,x,x)}}
B.a4k.prototype={
u(d){var x=null,w=B.akT()
return A.x(x,A.z(A.a([D.bZQ,C.R,D.ccu,C.aD,A.h(this.c,x,x,x,x,C.c_,C.a3,x)],y.e),C.v,C.h,C.l),C.r,x,x,w,x,x,x,C.cH,x,x,x)}}
var z=a.updateTypes([])
B.cN4.prototype={
$1(d){return this.aGj(d)},
aGj(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.Q().b
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
x(B.a37,A.ff)
x(B.jF,A.L)
x(B.cN4,A.br)
w(A.M,[B.a9Z,B.a99,B.a4k])})()
A.bp(b.typeUniverse,JSON.parse('{"a9Z":{"M":[],"e":[],"f":[]},"a99":{"M":[],"e":[],"f":[]},"a4k":{"M":[],"e":[],"f":[]}}'))
var y={e:A.y("r<e>"),b:A.y("T"),k:A.y("a5<c,@>?")};(function constants(){var x=a.makeConstList
D.BN=new A.Z(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.Ol=new B.a37(0,"pendingPayment")
D.va=new B.a37(1,"paid")
D.aBi=new B.a37(2,"cancelled")
D.Ff=x([],A.y("r<jF>"))
D.bZQ=new A.VK(C.nK,-0.016,48,null)
D.ccu=new A.D("Em breve",null,C.hN,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZ6","cU6",()=>A.ey(new B.cN4(),null,!1,null,null,y.b))})()};
(a=>{a["QVZNnE4CDqTmtB0EwNkOuS7R+Ew="]=a.current})($__dart_deferred_initializers__);