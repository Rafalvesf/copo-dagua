((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dGQ(d){var x
switch(d){case"paid":x=D.vC
break
case"cancelled":x=D.aCd
break
default:x=D.Pb
break}return x},
d47(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a_(p.h(d,"id"))
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
t=A.aL(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aL(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aL(p.h(d,"amount"))
r=B.dGQ(A.C(p.h(d,"status")))
p=A.C(p.h(d,"created_at"))
p=A.dh(p==null?"":p)
p=p==null?q:p.e1()
return new B.jG(n,x,w,v,u,t,s,r,p==null?new A.ad(Date.now(),0,!1):p)},
a3l:function a3l(d,e){this.a=d
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
cMX:function cMX(){},
alv(){var x=A.W(22),w=$.at.cd(0.45)
return new A.L(C.t,null,A.bB(w,1),x,C.bi,null,C.y)},
alL(d){return""+A.aH(d)+" "+C.bG[A.au(d)-1]},
deI(d){var x,w,v
if(d.b===C.ej&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.alL(w)}else{w.toString
x=B.alL(w)+" a "+B.alL(x)}return x}v=d.x
if(v==null)return null
return B.alL(v)+" \xb7 "+C.f.aY(C.j.k(A.ic(v)),2,"0")+":"+C.f.aY(C.j.k(A.hY(v)),2,"0")},
aag:function aag(d,e){this.c=d
this.a=e},
a9s:function a9s(d,e,f){this.c=d
this.d=e
this.a=f},
a4v:function a4v(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[200]
B.a3l.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jG.prototype={
gui(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ej){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aag.prototype={
u(d){return new A.l4(this.c,6,null,null,null)}}
B.a9s.prototype={
u(d){var x=null,w=$.at,v=this.d,u=v?w:w.cd(0.14),t=A.W(999)
return A.B(x,A.h(this.c,x,x,x,x,A.aI(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.L(u,x,x,t,x,x,C.y),x,x,x,C.i7,x,x,x)}}
B.a4v.prototype={
u(d){var x=null,w=B.alv()
return A.B(x,A.y(A.a([D.c0E,C.R,D.chg,C.aF,A.h(this.c,x,x,x,x,C.c9,C.a6,x,x)],y.e),C.w,C.h,C.l,0,C.u),C.r,x,x,w,x,x,x,C.dn,x,x,x)}}
var z=a.updateTypes([])
B.cMX.prototype={
$1(d){return this.aHr(d)},
aHr(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.R().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.R("platform_settings").am(0,"platform_commission_percentage").V("id",1).dP(0),$async$$1)
case 3:v=t.ds(s.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:192};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3l,A.f8)
x(B.jG,A.K)
x(B.cMX,A.by)
w(A.I,[B.aag,B.a9s,B.a4v])})()
A.bq(b.typeUniverse,JSON.parse('{"aag":{"I":[],"e":[],"f":[]},"a9s":{"I":[],"e":[],"f":[]},"a4v":{"I":[],"e":[],"f":[]}}'))
var y={e:A.w("r<e>"),b:A.w("S"),k:A.w("a5<c,@>?")};(function constants(){var x=a.makeConstList
D.Cf=new A.X(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.Pb=new B.a3l(0,"pendingPayment")
D.vC=new B.a3l(1,"paid")
D.aCd=new B.a3l(2,"cancelled")
D.FN=x([],A.w("r<jG>"))
D.c0E=new A.N1(C.o5,-0.016,48,null)
D.chg=new A.D("Em breve",null,C.hh,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYC","cTZ",()=>A.eI(new B.cMX(),null,!1,null,null,y.b))})()};
(a=>{a["nUKPhZg3wWdwGGqfKG9DEp20B/Y="]=a.current})($__dart_deferred_initializers__);