((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dIS(d){var x
switch(d){case"paid":x=D.vc
break
case"cancelled":x=D.aBo
break
default:x=D.Or
break}return x},
d5Q(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.Y(p.h(d,"id"))
A.A(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.h(o,"title")
A.A(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.h(o,"kind")
w=A.A(w)==="transport"?C.qa:C.ei
v=A.A(p.h(d,"guest_name"))
u=A.A(p.h(d,"guest_avatar_url"))
t=A.aD(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aD(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aD(p.h(d,"amount"))
r=B.dIS(A.A(p.h(d,"status")))
p=A.A(p.h(d,"created_at"))
p=A.d3(p==null?"":p)
p=p==null?q:p.dI()
return new B.jG(n,x,w,v,u,t,s,r,p==null?new A.ab(Date.now(),0,!1):p)},
a3r:function a3r(d,e){this.a=d
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
cOz:function cOz(){},
ali(){var x=A.W(22),w=$.au.cf(0.45)
return new A.J(C.t,null,A.bG(w,1),x,C.bs,null,C.x)},
alz(d){return""+A.aE(d)+" "+C.bi[A.aw(d)-1]},
dgx(d){var x,w,v
if(d.b===C.ei&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.alz(w)}else{w.toString
x=B.alz(w)+" a "+B.alz(x)}return x}v=d.x
if(v==null)return null
return B.alz(v)+" \xb7 "+C.f.aT(C.j.k(A.i_(v)),2,"0")+":"+C.f.aT(C.j.k(A.hQ(v)),2,"0")},
aaj:function aaj(d,e){this.c=d
this.a=e},
a9u:function a9u(d,e,f){this.c=d
this.d=e
this.a=f},
a4F:function a4F(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[198]
B.a3r.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jG.prototype={
gu6(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ei){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aaj.prototype={
u(d){return new A.kN(this.c,6,null,null,null)}}
B.a9u.prototype={
u(d){var x=null,w=$.au,v=this.d,u=v?w:w.cf(0.14),t=A.W(999)
return A.x(x,A.i(this.c,x,x,x,x,A.aH(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.J(u,x,x,t,x,x,C.x),x,x,x,C.hv,x,x,x)}}
B.a4F.prototype={
u(d){var x=null,w=B.ali()
return A.x(x,A.y(A.a([D.c_7,C.R,D.ccO,C.aC,A.i(this.c,x,x,x,x,C.c_,C.a4,x)],y.e),C.u,C.h,C.l),C.r,x,x,w,x,x,x,C.cJ,x,x,x)}}
var z=a.updateTypes([])
B.cOz.prototype={
$1(d){return this.aGx(d)},
aGx(d){var x=0,w=A.n(y.b),v,u,t
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A
t=J
x=3
return A.d(A.aln(),$async$$1)
case 3:v=u.ds(t.h(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:162};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3r,A.f7)
x(B.jG,A.M)
x(B.cOz,A.bu)
w(A.L,[B.aaj,B.a9u,B.a4F])})()
A.br(b.typeUniverse,JSON.parse('{"aaj":{"L":[],"e":[],"f":[]},"a9u":{"L":[],"e":[],"f":[]},"a4F":{"L":[],"e":[],"f":[]}}'))
var y={e:A.C("r<e>"),b:A.C("T"),k:A.C("a3<c,@>?")};(function constants(){var x=a.makeConstList
D.BS=new A.Z(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.Or=new B.a3r(0,"pendingPayment")
D.vc=new B.a3r(1,"paid")
D.aBo=new B.a3r(2,"cancelled")
D.Fk=x([],A.C("r<jG>"))
D.c_7=new A.W0(C.nK,-0.016,48,null)
D.ccO=new A.E("Em breve",null,C.hQ,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_Z","cVH",()=>A.ez(new B.cOz(),null,!1,null,null,y.b))})()};
(a=>{a["/wd7BW9LOQweKA0KyN3gfYCql2I="]=a.current})($__dart_deferred_initializers__);