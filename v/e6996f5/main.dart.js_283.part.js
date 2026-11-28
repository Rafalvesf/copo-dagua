((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dHO(d){var x
switch(d){case"paid":x=D.vc
break
case"cancelled":x=D.aBm
break
default:x=D.Oo
break}return x},
d4S(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.Y(p.h(d,"id"))
A.B(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.B(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.B(w)==="transport"?C.qa:C.ei
v=A.B(p.h(d,"guest_name"))
u=A.B(p.h(d,"guest_avatar_url"))
t=A.aD(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aD(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aD(p.h(d,"amount"))
r=B.dHO(A.B(p.h(d,"status")))
p=A.B(p.h(d,"created_at"))
p=A.d2(p==null?"":p)
p=p==null?q:p.dF()
return new B.jG(n,x,w,v,u,t,s,r,p==null?new A.ac(Date.now(),0,!1):p)},
a3a:function a3a(d,e){this.a=d
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
cNF:function cNF(){},
al0(){var x=A.W(22),w=$.au.cc(0.45)
return new A.I(C.t,null,A.bF(w,1),x,C.bq,null,C.x)},
alh(d){return""+A.aE(d)+" "+C.bg[A.aw(d)-1]},
dft(d){var x,w,v
if(d.b===C.ei&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.alh(w)}else{w.toString
x=B.alh(w)+" a "+B.alh(x)}return x}v=d.x
if(v==null)return null
return B.alh(v)+" \xb7 "+C.f.aT(C.j.k(A.hZ(v)),2,"0")+":"+C.f.aT(C.j.k(A.hO(v)),2,"0")},
aa2:function aa2(d,e){this.c=d
this.a=e},
a9d:function a9d(d,e,f){this.c=d
this.d=e
this.a=f},
a4n:function a4n(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[198]
B.a3a.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jG.prototype={
gu4(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ei){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aa2.prototype={
u(d){return new A.kI(this.c,6,null,null,null)}}
B.a9d.prototype={
u(d){var x=null,w=$.au,v=this.d,u=v?w:w.cc(0.14),t=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aI(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.I(u,x,x,t,x,x,C.x),x,x,x,C.hs,x,x,x)}}
B.a4n.prototype={
u(d){var x=null,w=B.al0()
return A.x(x,A.z(A.a([D.c__,C.R,D.ccE,C.aE,A.h(this.c,x,x,x,x,C.c_,C.a3,x)],y.e),C.v,C.h,C.l),C.r,x,x,w,x,x,x,C.cH,x,x,x)}}
var z=a.updateTypes([])
B.cNF.prototype={
$1(d){return this.aGn(d)},
aGn(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.Q().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.P("platform_settings").ai(0,"platform_commission_percentage").U("id",1).dN(0),$async$$1)
case 3:v=t.dv(s.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:183};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3a,A.fg)
x(B.jG,A.M)
x(B.cNF,A.bs)
w(A.L,[B.aa2,B.a9d,B.a4n])})()
A.bq(b.typeUniverse,JSON.parse('{"aa2":{"L":[],"e":[],"f":[]},"a9d":{"L":[],"e":[],"f":[]},"a4n":{"L":[],"e":[],"f":[]}}'))
var y={e:A.y("r<e>"),b:A.y("T"),k:A.y("a5<c,@>?")};(function constants(){var x=a.makeConstList
D.BP=new A.Z(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.Oo=new B.a3a(0,"pendingPayment")
D.vc=new B.a3a(1,"paid")
D.aBm=new B.a3a(2,"cancelled")
D.Fh=x([],A.y("r<jG>"))
D.c__=new A.VP(C.nM,-0.016,48,null)
D.ccE=new A.D("Em breve",null,C.hN,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZO","cUH",()=>A.ez(new B.cNF(),null,!1,null,null,y.b))})()};
(a=>{a["gtyounucLdiPmhVWEiTk454wW20="]=a.current})($__dart_deferred_initializers__);