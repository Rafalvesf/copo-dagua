((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dIw(d){var x
switch(d){case"paid":x=D.va
break
case"cancelled":x=D.aBw
break
default:x=D.Ot
break}return x},
d5w(d){var x,w,v,u,t,s,r,q=null,p=J.a6(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a_(p.h(d,"id"))
A.B(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.B(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.B(w)==="transport"?C.q8:C.ej
v=A.B(p.h(d,"guest_name"))
u=A.B(p.h(d,"guest_avatar_url"))
t=A.aE(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aE(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aE(p.h(d,"amount"))
r=B.dIw(A.B(p.h(d,"status")))
p=A.B(p.h(d,"created_at"))
p=A.d3(p==null?"":p)
p=p==null?q:p.dJ()
return new B.jJ(n,x,w,v,u,t,s,r,p==null?new A.ad(Date.now(),0,!1):p)},
a3t:function a3t(d,e){this.a=d
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
cO9:function cO9(){},
alo(){var x=A.W(22),w=$.au.ce(0.45)
return new A.J(C.t,null,A.bG(w,1),x,C.bs,null,C.x)},
alF(d){return""+A.aD(d)+" "+C.be[A.aw(d)-1]},
dgc(d){var x,w,v
if(d.b===C.ej&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.alF(w)}else{w.toString
x=B.alF(w)+" a "+B.alF(x)}return x}v=d.x
if(v==null)return null
return B.alF(v)+" \xb7 "+C.f.aT(C.j.k(A.i_(v)),2,"0")+":"+C.f.aT(C.j.k(A.hQ(v)),2,"0")},
aal:function aal(d,e){this.c=d
this.a=e},
a9w:function a9w(d,e,f){this.c=d
this.d=e
this.a=f},
a4H:function a4H(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[198]
B.a3t.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jJ.prototype={
gu5(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ej){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aal.prototype={
u(d){return new A.kO(this.c,6,null,null,null)}}
B.a9w.prototype={
u(d){var x=null,w=$.au,v=this.d,u=v?w:w.ce(0.14),t=A.W(999)
return A.w(x,A.h(this.c,x,x,x,x,A.aH(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.J(u,x,x,t,x,x,C.x),x,x,x,C.hw,x,x,x)}}
B.a4H.prototype={
u(d){var x=null,w=B.alo()
return A.w(x,A.x(A.a([D.c_h,C.R,D.cd2,C.aB,A.h(this.c,x,x,x,x,C.c_,C.a4,x)],y.e),C.u,C.h,C.l),C.r,x,x,w,x,x,x,C.cB,x,x,x)}}
var z=a.updateTypes([])
B.cO9.prototype={
$1(d){return this.aGt(d)},
aGt(d){var x=0,w=A.n(y.b),v,u,t
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A
t=J
x=3
return A.d(A.alt(),$async$$1)
case 3:v=u.dt(t.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:190};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3t,A.f7)
x(B.jJ,A.M)
x(B.cO9,A.bu)
w(A.L,[B.aal,B.a9w,B.a4H])})()
A.br(b.typeUniverse,JSON.parse('{"aal":{"L":[],"e":[],"f":[]},"a9w":{"L":[],"e":[],"f":[]},"a4H":{"L":[],"e":[],"f":[]}}'))
var y={e:A.A("r<e>"),b:A.A("T"),k:A.A("a3<c,@>?")};(function constants(){var x=a.makeConstList
D.BU=new A.Y(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.Ot=new B.a3t(0,"pendingPayment")
D.va=new B.a3t(1,"paid")
D.aBw=new B.a3t(2,"cancelled")
D.Fn=x([],A.A("r<jJ>"))
D.c_h=new A.W3(C.nL,-0.016,48,null)
D.cd2=new A.D("Em breve",null,C.hQ,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_E","cVm",()=>A.ey(new B.cO9(),null,!1,null,null,y.b))})()};
(a=>{a["islnOx0qST2X4QGCvCA1ucsr8+I="]=a.current})($__dart_deferred_initializers__);