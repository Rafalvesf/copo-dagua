((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dcS(d){var x
switch(d){case"paid":x=D.u0
break
case"cancelled":x=D.auM
break
default:x=D.Mu
break}return x},
cEZ(d){var x,w,v,u,t,s,r,q=null,p=J.a3(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a1(p.h(d,"id"))
A.P(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.h(o,"title")
A.P(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.h(o,"kind")
w=A.P(w)==="transport"?B.mC:B.dJ
v=A.P(p.h(d,"guest_name"))
u=A.P(p.h(d,"guest_avatar_url"))
t=A.b9(p.h(d,"quantity"))
t=t==null?q:B.k.D(t)
if(t==null)t=1
s=A.b9(p.h(d,"nights"))
s=s==null?q:B.k.D(s)
if(s==null)s=1
A.b9(p.h(d,"amount"))
r=C.dcS(A.P(p.h(d,"status")))
p=A.P(p.h(d,"created_at"))
p=A.fO(p==null?"":p)
p=p==null?q:p.fq()
return new C.ja(n,x,w,v,u,t,s,r,p==null?new A.an(Date.now(),0,!1):p)},
ZW:function ZW(d,e){this.a=d
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
cob:function cob(){},
afQ(){var x=A.T(22),w=$.a5.bW(0.45)
return new A.K(B.v,null,A.c5(w,1),x,B.aq,null,B.y)},
ag1(d){return""+A.aU(d)+" "+B.fD[A.aD(d)-1]},
cOK(d){var x,w,v
if(d.b===B.dJ&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+C.ag1(w)}else{w.toString
x=C.ag1(w)+" a "+C.ag1(x)}return x}v=d.x
if(v==null)return null
return C.ag1(v)+" \xb7 "+B.f.aX(B.i.k(A.iX(v)),2,"0")+":"+B.f.aX(B.i.k(A.iJ(v)),2,"0")},
a5t:function a5t(d,e){this.c=d
this.a=e},
a4M:function a4M(d,e,f){this.c=d
this.d=e
this.a=f},
a04:function a04(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[68],C)
D=c[200]
C.ZW.prototype={
H(){return"GuestReservationStatus."+this.b}}
C.ja.prototype={
gvn(){var x,w=this.d,v=this.r,u=""+v
if(w===B.dJ){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
C.a5t.prototype={
u(d){var x=A.T(999),w=B.k.ar(this.c,0,1)
return A.eu(x,A.kV(B.rE,$.a5,6,w,null),B.aH)}}
C.a4M.prototype={
u(d){var x=null,w=$.a5,v=this.d,u=v?w:w.bW(0.14),t=A.T(999)
return A.E(x,A.i(this.c,x,x,x,A.as(x,x,v?B.v:w,x,x,x,x,x,x,x,x,11,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.t,x,x,new A.K(u,x,x,t,x,x,B.y),x,x,x,x,B.ft,x,x,x)}}
C.a04.prototype={
u(d){var x=null,w=C.afQ()
return A.E(x,A.I(A.a([D.bOX,B.Y,D.c3c,B.aF,A.i(this.c,x,x,x,B.hH,B.aa,x,x)],y.e),B.x,B.l,B.q,0,B.w),B.t,x,x,w,x,x,x,x,B.f6,x,x,x)}}
var z=a.updateTypes([])
C.cob.prototype={
$1(d){return this.aB6(d)},
aB6(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.Z().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.S("platform_settings").aO(0,"platform_commission_percentage").a0("id",1).e_(0),$async$$1)
case 3:v=t.e_(s.h(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:248};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.ZW,A.fq)
x(C.ja,A.G)
x(C.cob,A.bv)
w(A.M,[C.a5t,C.a4M,C.a04])})()
A.bx(b.typeUniverse,JSON.parse('{"a5t":{"M":[],"e":[],"f":[]},"a4M":{"M":[],"e":[],"f":[]},"a04":{"M":[],"e":[],"f":[]}}'))
var y={e:A.v("q<e>"),b:A.v("W"),k:A.v("a2<c,@>?")};(function constants(){var x=a.makeConstList
D.Mu=new C.ZW(0,"pendingPayment")
D.u0=new C.ZW(1,"paid")
D.auM=new C.ZW(2,"cancelled")
D.DO=x([],A.v("q<ja>"))
D.bOX=new A.hl(B.fy,-0.016,48,null,null)
D.c3c=new A.J("Em breve",null,B.cT,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dtu","cup",()=>A.eD(new C.cob(),null,!1,null,null,y.b))})()};
(a=>{a["E5HLi1Tjo/b/104gELjAk9YbTck="]=a.current})($__dart_deferred_initializers__);