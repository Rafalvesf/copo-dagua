((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dHb(d){var x
switch(d){case"paid":x=D.vC
break
case"cancelled":x=D.aCi
break
default:x=D.Pb
break}return x},
d4u(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a0(p.h(d,"id"))
A.C(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.C(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.C(w)==="transport"?C.qK:C.ej
v=A.C(p.h(d,"guest_name"))
u=A.C(p.h(d,"guest_avatar_url"))
t=A.aI(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aI(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aI(p.h(d,"amount"))
r=B.dHb(A.C(p.h(d,"status")))
p=A.C(p.h(d,"created_at"))
p=A.dd(p==null?"":p)
p=p==null?q:p.e1()
return new B.jG(n,x,w,v,u,t,s,r,p==null?new A.ac(Date.now(),0,!1):p)},
a3k:function a3k(d,e){this.a=d
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
cNh:function cNh(){},
alv(){var x=A.V(22),w=$.au.cd(0.45)
return new A.I(C.t,null,A.bB(w,1),x,C.bi,null,C.y)},
alL(d){return""+A.aC(d)+" "+C.by[A.ar(d)-1]},
df4(d){var x,w,v
if(d.b===C.ej&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.alL(w)}else{w.toString
x=B.alL(w)+" a "+B.alL(x)}return x}v=d.x
if(v==null)return null
return B.alL(v)+" \xb7 "+C.f.aY(C.j.k(A.ic(v)),2,"0")+":"+C.f.aY(C.j.k(A.hY(v)),2,"0")},
aaf:function aaf(d,e){this.c=d
this.a=e},
a9r:function a9r(d,e,f){this.c=d
this.d=e
this.a=f},
a4u:function a4u(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[200]
B.a3k.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jG.prototype={
guj(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ej){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aaf.prototype={
u(d){return new A.l4(this.c,6,null,null,null)}}
B.a9r.prototype={
u(d){var x=null,w=$.au,v=this.d,u=v?w:w.cd(0.14),t=A.V(999)
return A.z(x,A.h(this.c,x,x,x,x,A.aJ(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.I(u,x,x,t,x,x,C.y),x,x,x,C.hA,x,x,x)}}
B.a4u.prototype={
u(d){var x=null,w=B.alv()
return A.z(x,A.x(A.a([D.c0I,C.R,D.chi,C.aF,A.h(this.c,x,x,x,x,C.c6,C.a6,x,x)],y.e),C.w,C.h,C.l,0,C.u),C.r,x,x,w,x,x,x,C.dp,x,x,x)}}
var z=a.updateTypes([])
B.cNh.prototype={
$1(d){return this.aHv(d)},
aHv(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.R().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.P("platform_settings").am(0,"platform_commission_percentage").V("id",1).dQ(0),$async$$1)
case 3:v=t.ds(s.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:191};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3k,A.f8)
x(B.jG,A.L)
x(B.cNh,A.bz)
w(A.J,[B.aaf,B.a9r,B.a4u])})()
A.bq(b.typeUniverse,JSON.parse('{"aaf":{"J":[],"e":[],"f":[]},"a9r":{"J":[],"e":[],"f":[]},"a4u":{"J":[],"e":[],"f":[]}}'))
var y={e:A.w("r<e>"),b:A.w("S"),k:A.w("a5<c,@>?")};(function constants(){var x=a.makeConstList
D.Cg=new A.X(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.Pb=new B.a3k(0,"pendingPayment")
D.vC=new B.a3k(1,"paid")
D.aCi=new B.a3k(2,"cancelled")
D.FN=x([],A.w("r<jG>"))
D.c0I=new A.N4(C.o5,-0.016,48,null)
D.chi=new A.D("Em breve",null,C.hh,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYY","cUl",()=>A.eI(new B.cNh(),null,!1,null,null,y.b))})()};
(a=>{a["Tj74Osv9dDLgcLkRfrD5b1ABCnY="]=a.current})($__dart_deferred_initializers__);