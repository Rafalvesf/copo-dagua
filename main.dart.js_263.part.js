((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
ddb(d){var x
switch(d){case"paid":x=D.u1
break
case"cancelled":x=D.auI
break
default:x=D.Mr
break}return x},
cFe(d){var x,w,v,u,t,s,r,q=null,p=J.a3(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a1(p.h(d,"id"))
A.P(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.h(o,"title")
A.P(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.h(o,"kind")
w=A.P(w)==="transport"?B.mF:B.dG
v=A.P(p.h(d,"guest_name"))
u=A.P(p.h(d,"guest_avatar_url"))
t=A.b8(p.h(d,"quantity"))
t=t==null?q:B.k.D(t)
if(t==null)t=1
s=A.b8(p.h(d,"nights"))
s=s==null?q:B.k.D(s)
if(s==null)s=1
A.b8(p.h(d,"amount"))
r=C.ddb(A.P(p.h(d,"status")))
p=A.P(p.h(d,"created_at"))
p=A.fN(p==null?"":p)
p=p==null?q:p.fq()
return new C.ja(n,x,w,v,u,t,s,r,p==null?new A.am(Date.now(),0,!1):p)},
ZZ:function ZZ(d,e){this.a=d
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
con:function con(){},
afT(){var x=A.T(22),w=$.a9.bV(0.45)
return new A.L(B.v,null,A.cc(w,1),x,B.ap,null,B.y)},
ag6(d){return""+A.aY(d)+" "+B.fC[A.aH(d)-1]},
cP3(d){var x,w,v
if(d.b===B.dG&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+C.ag6(w)}else{w.toString
x=C.ag6(w)+" a "+C.ag6(x)}return x}v=d.x
if(v==null)return null
return C.ag6(v)+" \xb7 "+B.f.aY(B.i.k(A.iX(v)),2,"0")+":"+B.f.aY(B.i.k(A.iH(v)),2,"0")},
a5z:function a5z(d,e){this.c=d
this.a=e},
a4S:function a4S(d,e,f){this.c=d
this.d=e
this.a=f},
a07:function a07(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[68],C)
D=c[201]
C.ZZ.prototype={
H(){return"GuestReservationStatus."+this.b}}
C.ja.prototype={
gvn(){var x,w=this.d,v=this.r,u=""+v
if(w===B.dG){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
C.a5z.prototype={
u(d){var x=A.T(999),w=B.k.an(this.c,0,1)
return A.es(x,A.kV(B.rN,$.a9,6,w,null),B.aG)}}
C.a4S.prototype={
u(d){var x=null,w=$.a9,v=this.d,u=v?w:w.bV(0.14),t=A.T(999)
return A.E(x,A.i(this.c,x,x,x,A.as(x,x,v?B.v:w,x,x,x,x,x,x,x,x,11,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.t,x,x,new A.L(u,x,x,t,x,x,B.y),x,x,x,x,B.ft,x,x,x)}}
C.a07.prototype={
u(d){var x=null,w=C.afT()
return A.E(x,A.J(A.a([D.bPs,B.W,D.c3E,B.aI,A.i(this.c,x,x,x,B.hC,B.a6,x,x)],y.e),B.x,B.m,B.q,0,B.w),B.t,x,x,w,x,x,x,x,B.f7,x,x,x)}}
var z=a.updateTypes([])
C.con.prototype={
$1(d){return this.aBj(d)},
aBj(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.W().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.T("platform_settings").aN(0,"platform_commission_percentage").a_("id",1).e_(0),$async$$1)
case 3:v=t.e1(s.h(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:242};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.ZZ,A.fr)
x(C.ja,A.F)
x(C.con,A.bv)
w(A.N,[C.a5z,C.a4S,C.a07])})()
A.bx(b.typeUniverse,JSON.parse('{"a5z":{"N":[],"e":[],"f":[]},"a4S":{"N":[],"e":[],"f":[]},"a07":{"N":[],"e":[],"f":[]}}'))
var y={e:A.v("q<e>"),b:A.v("V"),k:A.v("a2<c,@>?")};(function constants(){var x=a.makeConstList
D.Mr=new C.ZZ(0,"pendingPayment")
D.u1=new C.ZZ(1,"paid")
D.auI=new C.ZZ(2,"cancelled")
D.DN=x([],A.v("q<ja>"))
D.bPs=new A.hk(B.h1,-0.016,48,null,null)
D.c3E=new A.I("Em breve",null,B.cU,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dtO","cuG",()=>A.eA(new C.con(),null,!1,null,null,y.b))})()};
(a=>{a["U72ynN57bZxc1lObDUNkVtKPj3Y="]=a.current})($__dart_deferred_initializers__);