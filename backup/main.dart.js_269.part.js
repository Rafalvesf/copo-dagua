((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dIG(d){var x
switch(d){case"paid":x=D.vg
break
case"cancelled":x=D.aBB
break
default:x=D.OC
break}return x},
d5u(d){var x,w,v,u,t,s,r,q=null,p=J.a6(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a0(p.h(d,"id"))
A.y(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.y(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.y(w)==="transport"?C.qb:C.em
v=A.y(p.h(d,"guest_name"))
u=A.y(p.h(d,"guest_avatar_url"))
t=A.aF(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aF(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aF(p.h(d,"amount"))
r=B.dIG(A.y(p.h(d,"status")))
p=A.y(p.h(d,"created_at"))
p=A.d_(p==null?"":p)
p=p==null?q:p.dH()
return new B.jL(n,x,w,v,u,t,s,r,p==null?new A.aa(Date.now(),0,!1):p)},
a3I:function a3I(d,e){this.a=d
this.b=e},
jL:function jL(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
cNW:function cNW(){},
alM(){var x=A.W(22),w=$.ay.c3(0.45)
return new A.O(C.t,null,A.bE(w,1),x,C.bv,null,C.y)},
alZ(d){return""+A.aw(d)+" "+C.bd[A.aq(d)-1]},
dgi(d){var x,w,v
if(d.b===C.em&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.alZ(w)}else{w.toString
x=B.alZ(w)+" a "+B.alZ(x)}return x}v=d.x
if(v==null)return null
return B.alZ(v)+" \xb7 "+C.f.aN(C.j.k(A.i0(v)),2,"0")+":"+C.f.aN(C.j.k(A.hN(v)),2,"0")},
aaC:function aaC(d,e){this.c=d
this.a=e},
a9N:function a9N(d,e,f){this.c=d
this.d=e
this.a=f},
a4X:function a4X(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[198]
B.a3I.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jL.prototype={
gu6(){var x,w=this.d,v=this.r,u=""+v
if(w===C.em){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aaC.prototype={
t(d){return new A.lb(this.c,6,null,null,null)}}
B.a9N.prototype={
t(d){var x=null,w=$.ay,v=this.d,u=v?w:w.c3(0.14),t=A.W(999)
return A.w(x,A.h(this.c,x,x,x,x,A.aH(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.E,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.O(u,x,x,t,x,x,C.y),x,x,x,C.i5,x,x,x)}}
B.a4X.prototype={
t(d){var x=null,w=B.alM()
return A.w(x,A.x(A.a([D.c_x,C.S,D.cds,C.aE,A.h(this.c,x,x,x,x,C.bK,C.a3,x)],y.e),C.u,C.h,C.l),C.r,x,x,w,x,x,x,C.ck,x,x,x)}}
var z=a.updateTypes([])
B.cNW.prototype={
$1(d){return this.aH1(d)},
aH1(d){var x=0,w=A.n(y.b),v,u,t
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A
t=J
x=3
return A.d(A.alP(),$async$$1)
case 3:v=u.dt(t.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:171};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3I,A.fj)
x(B.jL,A.L)
x(B.cNW,A.bv)
w(A.H,[B.aaC,B.a9N,B.a4X])})()
A.bq(b.typeUniverse,JSON.parse('{"aaC":{"H":[],"e":[],"f":[]},"a9N":{"H":[],"e":[],"f":[]},"a4X":{"H":[],"e":[],"f":[]}}'))
var y={e:A.B("r<e>"),b:A.B("T"),k:A.B("a4<c,@>?")};(function constants(){var x=a.makeConstList
D.C0=new A.Y(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.OC=new B.a3I(0,"pendingPayment")
D.vg=new B.a3I(1,"paid")
D.aBB=new B.a3I(2,"cancelled")
D.Fs=x([],A.B("r<jL>"))
D.c_x=new A.Wi(C.nT,-0.016,48,null)
D.cds=new A.E("Em breve",null,C.fR,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_O","cVh",()=>A.ez(new B.cNW(),null,!1,null,null,y.b))})()};
(a=>{a["kshlz1MwdOxYHjlz9+3TINgXoso="]=a.current})($__dart_deferred_initializers__);