((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dIp(d){var x
switch(d){case"paid":x=D.vI
break
case"cancelled":x=D.aCp
break
default:x=D.Pb
break}return x},
d5G(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.Z(p.h(d,"id"))
A.C(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.C(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.C(w)==="transport"?C.qO:C.ek
v=A.C(p.h(d,"guest_name"))
u=A.C(p.h(d,"guest_avatar_url"))
t=A.aI(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aI(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aI(p.h(d,"amount"))
r=B.dIp(A.C(p.h(d,"status")))
p=A.C(p.h(d,"created_at"))
p=A.d5(p==null?"":p)
p=p==null?q:p.dQ()
return new B.jJ(n,x,w,v,u,t,s,r,p==null?new A.ac(Date.now(),0,!1):p)},
a3E:function a3E(d,e){this.a=d
this.b=e},
jJ:function jJ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
cOr:function cOr(){},
alU(){var x=A.W(22),w=$.au.ce(0.45)
return new A.I(C.t,null,A.bD(w,1),x,C.bj,null,C.y)},
am8(d){return""+A.aA(d)+" "+C.bn[A.ao(d)-1]},
dgg(d){var x,w,v
if(d.b===C.ek&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.am8(w)}else{w.toString
x=B.am8(w)+" a "+B.am8(x)}return x}v=d.x
if(v==null)return null
return B.am8(v)+" \xb7 "+C.f.aW(C.j.k(A.id(v)),2,"0")+":"+C.f.aW(C.j.k(A.i_(v)),2,"0")},
aaz:function aaz(d,e){this.c=d
this.a=e},
a9L:function a9L(d,e,f){this.c=d
this.d=e
this.a=f},
a4Q:function a4Q(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[202]
B.a3E.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jJ.prototype={
guo(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ek){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aaz.prototype={
u(d){return new A.l8(this.c,6,null,null,null)}}
B.a9L.prototype={
u(d){var x=null,w=$.au,v=this.d,u=v?w:w.ce(0.14),t=A.W(999)
return A.z(x,A.h(this.c,x,x,x,x,A.aJ(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.I(u,x,x,t,x,x,C.y),x,x,x,C.hD,x,x,x)}}
B.a4Q.prototype={
u(d){var x=null,w=B.alU()
return A.z(x,A.x(A.a([D.c0P,C.S,D.chu,C.aH,A.h(this.c,x,x,x,x,C.c4,C.a6,x,x)],y.e),C.v,C.h,C.l,0,C.u),C.r,x,x,w,x,x,x,C.dr,x,x,x)}}
var z=a.updateTypes([])
B.cOr.prototype={
$1(d){return this.aI5(d)},
aI5(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.Q().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.R("platform_settings").ak(0,"platform_commission_percentage").V("id",1).dS(0),$async$$1)
case 3:v=t.dt(s.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:185};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3E,A.f3)
x(B.jJ,A.L)
x(B.cOr,A.bw)
w(A.J,[B.aaz,B.a9L,B.a4Q])})()
A.bs(b.typeUniverse,JSON.parse('{"aaz":{"J":[],"e":[],"f":[]},"a9L":{"J":[],"e":[],"f":[]},"a4Q":{"J":[],"e":[],"f":[]}}'))
var y={e:A.w("r<e>"),b:A.w("S"),k:A.w("a5<c,@>?")};(function constants(){var x=a.makeConstList
D.Ch=new A.X(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.Pb=new B.a3E(0,"pendingPayment")
D.vI=new B.a3E(1,"paid")
D.aCp=new B.a3E(2,"cancelled")
D.FM=x([],A.w("r<jJ>"))
D.c0P=new A.Nc(C.o9,-0.016,48,null)
D.chu=new A.D("Em breve",null,C.hY,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_f","cVu",()=>A.eI(new B.cOr(),null,!1,null,null,y.b))})()};
(a=>{a["iItI8zhrL+6pFAZZJX5Rs/EchJo="]=a.current})($__dart_deferred_initializers__);