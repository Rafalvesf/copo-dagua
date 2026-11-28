((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dIL(d){var x
switch(d){case"paid":x=D.vd
break
case"cancelled":x=D.aBn
break
default:x=D.Os
break}return x},
d5L(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.Y(p.h(d,"id"))
A.B(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.h(o,"title")
A.B(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.h(o,"kind")
w=A.B(w)==="transport"?C.qd:C.ej
v=A.B(p.h(d,"guest_name"))
u=A.B(p.h(d,"guest_avatar_url"))
t=A.aD(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aD(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aD(p.h(d,"amount"))
r=B.dIL(A.B(p.h(d,"status")))
p=A.B(p.h(d,"created_at"))
p=A.d3(p==null?"":p)
p=p==null?q:p.dH()
return new B.jH(n,x,w,v,u,t,s,r,p==null?new A.ab(Date.now(),0,!1):p)},
a3s:function a3s(d,e){this.a=d
this.b=e},
jH:function jH(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
cOu:function cOu(){},
alk(){var x=A.W(22),w=$.au.cc(0.45)
return new A.J(C.t,null,A.bH(w,1),x,C.br,null,C.x)},
alB(d){return""+A.aE(d)+" "+C.bh[A.aw(d)-1]},
dgp(d){var x,w,v
if(d.b===C.ej&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.alB(w)}else{w.toString
x=B.alB(w)+" a "+B.alB(x)}return x}v=d.x
if(v==null)return null
return B.alB(v)+" \xb7 "+C.f.aT(C.j.k(A.i_(v)),2,"0")+":"+C.f.aT(C.j.k(A.hP(v)),2,"0")},
aak:function aak(d,e){this.c=d
this.a=e},
a9v:function a9v(d,e,f){this.c=d
this.d=e
this.a=f},
a4G:function a4G(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[198]
B.a3s.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jH.prototype={
gu5(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ej){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aak.prototype={
u(d){return new A.kN(this.c,6,null,null,null)}}
B.a9v.prototype={
u(d){var x=null,w=$.au,v=this.d,u=v?w:w.cc(0.14),t=A.W(999)
return A.x(x,A.i(this.c,x,x,x,x,A.aH(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.J(u,x,x,t,x,x,C.x),x,x,x,C.hv,x,x,x)}}
B.a4G.prototype={
u(d){var x=null,w=B.alk()
return A.x(x,A.y(A.a([D.c_6,C.R,D.ccM,C.aC,A.i(this.c,x,x,x,x,C.c_,C.a4,x)],y.e),C.u,C.h,C.l),C.r,x,x,w,x,x,x,C.cI,x,x,x)}}
var z=a.updateTypes([])
B.cOu.prototype={
$1(d){return this.aGw(d)},
aGw(d){var x=0,w=A.n(y.b),v,u,t
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A
t=J
x=3
return A.d(A.alp(),$async$$1)
case 3:v=u.dv(t.h(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:164};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3s,A.f7)
x(B.jH,A.M)
x(B.cOu,A.bu)
w(A.L,[B.aak,B.a9v,B.a4G])})()
A.br(b.typeUniverse,JSON.parse('{"aak":{"L":[],"e":[],"f":[]},"a9v":{"L":[],"e":[],"f":[]},"a4G":{"L":[],"e":[],"f":[]}}'))
var y={e:A.z("r<e>"),b:A.z("T"),k:A.z("a3<c,@>?")};(function constants(){var x=a.makeConstList
D.BS=new A.Z(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.Os=new B.a3s(0,"pendingPayment")
D.vd=new B.a3s(1,"paid")
D.aBn=new B.a3s(2,"cancelled")
D.Fk=x([],A.z("r<jH>"))
D.c_6=new A.W0(C.nL,-0.016,48,null)
D.ccM=new A.D("Em breve",null,C.hQ,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_S","cVC",()=>A.ez(new B.cOu(),null,!1,null,null,y.b))})()};
(a=>{a["fjb8thWcrEG9DqWC4BKdRHrMdeI="]=a.current})($__dart_deferred_initializers__);