((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dc2(d){var x
switch(d){case"paid":x=D.tW
break
case"cancelled":x=D.auH
break
default:x=D.Mr
break}return x},
cEd(d){var x,w,v,u,t,s,r,q=null,p=J.a3(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a1(p.h(d,"id"))
A.P(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.h(o,"title")
A.P(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.h(o,"kind")
w=A.P(w)==="transport"?B.mC:B.dG
v=A.P(p.h(d,"guest_name"))
u=A.P(p.h(d,"guest_avatar_url"))
t=A.b9(p.h(d,"quantity"))
t=t==null?q:B.k.D(t)
if(t==null)t=1
s=A.b9(p.h(d,"nights"))
s=s==null?q:B.k.D(s)
if(s==null)s=1
A.b9(p.h(d,"amount"))
r=C.dc2(A.P(p.h(d,"status")))
p=A.P(p.h(d,"created_at"))
p=A.h_(p==null?"":p)
p=p==null?q:p.fq()
return new C.ja(n,x,w,v,u,t,s,r,p==null?new A.ao(Date.now(),0,!1):p)},
ZL:function ZL(d,e){this.a=d
this.b=e},
ja:function ja(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
cnu:function cnu(){},
afH(){var x=A.T(22),w=$.a4.bZ(0.45)
return new A.K(B.v,null,A.c9(w,1),x,B.an,null,B.y)},
afT(d){return""+A.aV(d)+" "+B.fD[A.aD(d)-1]},
cNX(d){var x,w,v
if(d.b===B.dG&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+C.afT(w)}else{w.toString
x=C.afT(w)+" a "+C.afT(x)}return x}v=d.x
if(v==null)return null
return C.afT(v)+" \xb7 "+B.f.aW(B.i.k(A.iW(v)),2,"0")+":"+B.f.aW(B.i.k(A.iJ(v)),2,"0")},
a5l:function a5l(d,e){this.c=d
this.a=e},
a4E:function a4E(d,e,f){this.c=d
this.d=e
this.a=f},
a_U:function a_U(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[68],C)
D=c[201]
C.ZL.prototype={
H(){return"GuestReservationStatus."+this.b}}
C.ja.prototype={
gvn(){var x,w=this.d,v=this.r,u=""+v
if(w===B.dG){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
C.a5l.prototype={
u(d){var x=A.T(999),w=B.k.ar(this.c,0,1)
return A.et(x,A.kV(B.rB,$.a4,6,w,null),B.aH)}}
C.a4E.prototype={
u(d){var x=null,w=$.a4,v=this.d,u=v?w:w.bZ(0.14),t=A.T(999)
return A.E(x,A.i(this.c,x,x,x,A.as(x,x,v?B.v:w,x,x,x,x,x,x,x,x,11,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.t,x,x,new A.K(u,x,x,t,x,x,B.y),x,x,x,x,B.ft,x,x,x)}}
C.a_U.prototype={
u(d){var x=null,w=C.afH()
return A.E(x,A.I(A.a([D.bOJ,B.X,D.c2Z,B.aF,A.i(this.c,x,x,x,B.ik,B.aa,x,x)],y.e),B.x,B.l,B.q,0,B.w),B.t,x,x,w,x,x,x,x,B.eM,x,x,x)}}
var z=a.updateTypes([])
C.cnu.prototype={
$1(d){return this.aB0(d)},
aB0(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.Z().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.S("platform_settings").aP(0,"platform_commission_percentage").a0("id",1).dZ(0),$async$$1)
case 3:v=t.e0(s.h(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:246};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.ZL,A.fq)
x(C.ja,A.F)
x(C.cnu,A.bv)
w(A.M,[C.a5l,C.a4E,C.a_U])})()
A.bx(b.typeUniverse,JSON.parse('{"a5l":{"M":[],"e":[],"f":[]},"a4E":{"M":[],"e":[],"f":[]},"a_U":{"M":[],"e":[],"f":[]}}'))
var y={e:A.v("q<e>"),b:A.v("X"),k:A.v("a2<c,@>?")};(function constants(){var x=a.makeConstList
D.Mr=new C.ZL(0,"pendingPayment")
D.tW=new C.ZL(1,"paid")
D.auH=new C.ZL(2,"cancelled")
D.DL=x([],A.v("q<ja>"))
D.bOJ=new A.hl(B.fy,-0.016,48,null,null)
D.c2Z=new A.J("Em breve",null,B.cT,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dsF","ctE",()=>A.eD(new C.cnu(),null,!1,null,null,y.b))})()};
(a=>{a["QDnPcWumjRD4wH0Vgi9XaT2US0k="]=a.current})($__dart_deferred_initializers__);