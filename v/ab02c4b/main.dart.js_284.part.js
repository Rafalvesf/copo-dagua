((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dIl(d){var x
switch(d){case"paid":x=D.vd
break
case"cancelled":x=D.aBi
break
default:x=D.Oo
break}return x},
d5m(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.Y(p.h(d,"id"))
A.C(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.C(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.C(w)==="transport"?C.qa:C.ej
v=A.C(p.h(d,"guest_name"))
u=A.C(p.h(d,"guest_avatar_url"))
t=A.aD(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aD(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aD(p.h(d,"amount"))
r=B.dIl(A.C(p.h(d,"status")))
p=A.C(p.h(d,"created_at"))
p=A.d2(p==null?"":p)
p=p==null?q:p.dH()
return new B.jH(n,x,w,v,u,t,s,r,p==null?new A.ab(Date.now(),0,!1):p)},
a3i:function a3i(d,e){this.a=d
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
cO7:function cO7(){},
ala(){var x=A.W(22),w=$.au.cc(0.45)
return new A.J(C.t,null,A.bH(w,1),x,C.br,null,C.x)},
alr(d){return""+A.aE(d)+" "+C.bg[A.aw(d)-1]},
dg1(d){var x,w,v
if(d.b===C.ej&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.alr(w)}else{w.toString
x=B.alr(w)+" a "+B.alr(x)}return x}v=d.x
if(v==null)return null
return B.alr(v)+" \xb7 "+C.f.aT(C.j.k(A.i_(v)),2,"0")+":"+C.f.aT(C.j.k(A.hP(v)),2,"0")},
aaa:function aaa(d,e){this.c=d
this.a=e},
a9l:function a9l(d,e,f){this.c=d
this.d=e
this.a=f},
a4w:function a4w(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[198]
B.a3i.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jH.prototype={
gu6(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ej){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aaa.prototype={
u(d){return new A.kL(this.c,6,null,null,null)}}
B.a9l.prototype={
u(d){var x=null,w=$.au,v=this.d,u=v?w:w.cc(0.14),t=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aI(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.J(u,x,x,t,x,x,C.x),x,x,x,C.hv,x,x,x)}}
B.a4w.prototype={
u(d){var x=null,w=B.ala()
return A.x(x,A.y(A.a([D.c__,C.R,D.ccE,C.aE,A.h(this.c,x,x,x,x,C.c_,C.a4,x)],y.e),C.v,C.h,C.l),C.r,x,x,w,x,x,x,C.cI,x,x,x)}}
var z=a.updateTypes([])
B.cO7.prototype={
$1(d){return this.aGt(d)},
aGt(d){var x=0,w=A.n(y.b),v,u,t
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A
t=J
x=3
return A.d(A.alf(),$async$$1)
case 3:v=u.dv(t.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:193};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3i,A.fg)
x(B.jH,A.M)
x(B.cO7,A.bu)
w(A.L,[B.aaa,B.a9l,B.a4w])})()
A.br(b.typeUniverse,JSON.parse('{"aaa":{"L":[],"e":[],"f":[]},"a9l":{"L":[],"e":[],"f":[]},"a4w":{"L":[],"e":[],"f":[]}}'))
var y={e:A.z("r<e>"),b:A.z("T"),k:A.z("a3<c,@>?")};(function constants(){var x=a.makeConstList
D.BQ=new A.Z(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.Oo=new B.a3i(0,"pendingPayment")
D.vd=new B.a3i(1,"paid")
D.aBi=new B.a3i(2,"cancelled")
D.Fi=x([],A.z("r<jH>"))
D.c__=new A.VV(C.nL,-0.016,48,null)
D.ccE=new A.D("Em breve",null,C.hQ,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_n","cVd",()=>A.ez(new B.cO7(),null,!1,null,null,y.b))})()};
(a=>{a["e86bGB1mZ+2OI6wTKhTu7MDJBKA="]=a.current})($__dart_deferred_initializers__);