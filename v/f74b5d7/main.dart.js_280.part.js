((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dIu(d){var x
switch(d){case"paid":x=D.vr
break
case"cancelled":x=D.aBM
break
default:x=D.OG
break}return x},
d5B(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a_(p.h(d,"id"))
A.C(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.C(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.C(w)==="transport"?C.qv:C.ej
v=A.C(p.h(d,"guest_name"))
u=A.C(p.h(d,"guest_avatar_url"))
t=A.aE(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aE(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aE(p.h(d,"amount"))
r=B.dIu(A.C(p.h(d,"status")))
p=A.C(p.h(d,"created_at"))
p=A.d4(p==null?"":p)
p=p==null?q:p.dM()
return new B.jJ(n,x,w,v,u,t,s,r,p==null?new A.ac(Date.now(),0,!1):p)},
a3p:function a3p(d,e){this.a=d
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
cOh:function cOh(){},
als(){var x=A.W(22),w=$.au.ce(0.45)
return new A.I(C.t,null,A.bB(w,1),x,C.bs,null,C.x)},
alJ(d){return""+A.ay(d)+" "+C.bg[A.an(d)-1]},
dgb(d){var x,w,v
if(d.b===C.ej&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.alJ(w)}else{w.toString
x=B.alJ(w)+" a "+B.alJ(x)}return x}v=d.x
if(v==null)return null
return B.alJ(v)+" \xb7 "+C.f.aU(C.j.k(A.i0(v)),2,"0")+":"+C.f.aU(C.j.k(A.hQ(v)),2,"0")},
aam:function aam(d,e){this.c=d
this.a=e},
a9x:function a9x(d,e,f){this.c=d
this.d=e
this.a=f},
a4B:function a4B(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[198]
B.a3p.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jJ.prototype={
gue(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ej){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aam.prototype={
u(d){return new A.kK(this.c,6,null,null,null)}}
B.a9x.prototype={
u(d){var x=null,w=$.au,v=this.d,u=v?w:w.ce(0.14),t=A.W(999)
return A.y(x,A.h(this.c,x,x,x,x,A.aJ(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.G,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.I(u,x,x,t,x,x,C.x),x,x,x,C.hv,x,x,x)}}
B.a4B.prototype={
u(d){var x=null,w=B.als()
return A.y(x,A.z(A.a([D.c_L,C.R,D.cgd,C.aF,A.h(this.c,x,x,x,x,C.bZ,C.a5,x,x)],y.e),C.v,C.h,C.l),C.r,x,x,w,x,x,x,C.cI,x,x,x)}}
var z=a.updateTypes([])
B.cOh.prototype={
$1(d){return this.aHm(d)},
aHm(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.P().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.P("platform_settings").ai(0,"platform_commission_percentage").U("id",1).dR(0),$async$$1)
case 3:v=t.du(s.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:193};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3p,A.f_)
x(B.jJ,A.K)
x(B.cOh,A.bx)
w(A.M,[B.aam,B.a9x,B.a4B])})()
A.bu(b.typeUniverse,JSON.parse('{"aam":{"M":[],"e":[],"f":[]},"a9x":{"M":[],"e":[],"f":[]},"a4B":{"M":[],"e":[],"f":[]}}'))
var y={e:A.x("r<e>"),b:A.x("T"),k:A.x("a5<c,@>?")};(function constants(){var x=a.makeConstList
D.C3=new A.Y(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.OG=new B.a3p(0,"pendingPayment")
D.vr=new B.a3p(1,"paid")
D.aBM=new B.a3p(2,"cancelled")
D.Fy=x([],A.x("r<jJ>"))
D.c_L=new A.VT(C.nY,-0.016,48,null)
D.cgd=new A.D("Em breve",null,C.hP,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_t","cVo",()=>A.eA(new B.cOh(),null,!1,null,null,y.b))})()};
(a=>{a["vtRX93WyQdUU1gIaSy8Z9+Xvk74="]=a.current})($__dart_deferred_initializers__);