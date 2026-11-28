((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dIb(d){var x
switch(d){case"paid":x=D.vH
break
case"cancelled":x=D.aCn
break
default:x=D.Pb
break}return x},
d5s(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.Z(p.h(d,"id"))
A.C(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.C(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.C(w)==="transport"?C.qO:C.ek
v=A.C(p.h(d,"guest_name"))
u=A.C(p.h(d,"guest_avatar_url"))
t=A.aI(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aI(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aI(p.h(d,"amount"))
r=B.dIb(A.C(p.h(d,"status")))
p=A.C(p.h(d,"created_at"))
p=A.d5(p==null?"":p)
p=p==null?q:p.dQ()
return new B.jJ(n,x,w,v,u,t,s,r,p==null?new A.ac(Date.now(),0,!1):p)},
a3A:function a3A(d,e){this.a=d
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
cOc:function cOc(){},
alQ(){var x=A.W(22),w=$.au.ce(0.45)
return new A.I(C.t,null,A.bC(w,1),x,C.bj,null,C.y)},
am4(d){return""+A.aA(d)+" "+C.bn[A.ao(d)-1]},
dg2(d){var x,w,v
if(d.b===C.ek&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.am4(w)}else{w.toString
x=B.am4(w)+" a "+B.am4(x)}return x}v=d.x
if(v==null)return null
return B.am4(v)+" \xb7 "+C.f.aX(C.j.k(A.id(v)),2,"0")+":"+C.f.aX(C.j.k(A.i_(v)),2,"0")},
aav:function aav(d,e){this.c=d
this.a=e},
a9H:function a9H(d,e,f){this.c=d
this.d=e
this.a=f},
a4M:function a4M(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[202]
B.a3A.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jJ.prototype={
gun(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ek){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aav.prototype={
u(d){return new A.l8(this.c,6,null,null,null)}}
B.a9H.prototype={
u(d){var x=null,w=$.au,v=this.d,u=v?w:w.ce(0.14),t=A.W(999)
return A.z(x,A.h(this.c,x,x,x,x,A.aJ(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.I(u,x,x,t,x,x,C.y),x,x,x,C.hE,x,x,x)}}
B.a4M.prototype={
u(d){var x=null,w=B.alQ()
return A.z(x,A.y(A.a([D.c0L,C.S,D.chn,C.aG,A.h(this.c,x,x,x,x,C.c6,C.a6,x,x)],y.e),C.w,C.h,C.l,0,C.u),C.r,x,x,w,x,x,x,C.dr,x,x,x)}}
var z=a.updateTypes([])
B.cOc.prototype={
$1(d){return this.aI2(d)},
aI2(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.Q().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.P("platform_settings").ak(0,"platform_commission_percentage").V("id",1).dS(0),$async$$1)
case 3:v=t.dt(s.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:161};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3A,A.f3)
x(B.jJ,A.L)
x(B.cOc,A.bw)
w(A.J,[B.aav,B.a9H,B.a4M])})()
A.bs(b.typeUniverse,JSON.parse('{"aav":{"J":[],"e":[],"f":[]},"a9H":{"J":[],"e":[],"f":[]},"a4M":{"J":[],"e":[],"f":[]}}'))
var y={e:A.w("r<e>"),b:A.w("S"),k:A.w("a5<c,@>?")};(function constants(){var x=a.makeConstList
D.Ch=new A.X(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.Pb=new B.a3A(0,"pendingPayment")
D.vH=new B.a3A(1,"paid")
D.aCn=new B.a3A(2,"cancelled")
D.FM=x([],A.w("r<jJ>"))
D.c0L=new A.Nc(C.o9,-0.016,48,null)
D.chn=new A.D("Em breve",null,C.hl,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_0","cVg",()=>A.eH(new B.cOc(),null,!1,null,null,y.b))})()};
(a=>{a["qbRtkmNpYBDKf7474OzIx6BSo94="]=a.current})($__dart_deferred_initializers__);