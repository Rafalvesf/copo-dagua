((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dIh(d){var x
switch(d){case"paid":x=D.va
break
case"cancelled":x=D.aBp
break
default:x=D.Os
break}return x},
d5e(d){var x,w,v,u,t,s,r,q=null,p=J.a6(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a_(p.h(d,"id"))
A.A(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.A(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.A(w)==="transport"?C.q9:C.ej
v=A.A(p.h(d,"guest_name"))
u=A.A(p.h(d,"guest_avatar_url"))
t=A.aD(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aD(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aD(p.h(d,"amount"))
r=B.dIh(A.A(p.h(d,"status")))
p=A.A(p.h(d,"created_at"))
p=A.d3(p==null?"":p)
p=p==null?q:p.dJ()
return new B.jH(n,x,w,v,u,t,s,r,p==null?new A.ad(Date.now(),0,!1):p)},
a3t:function a3t(d,e){this.a=d
this.b=e},
jH:function jH(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
cNY:function cNY(){},
alk(){var x=A.W(22),w=$.au.ce(0.45)
return new A.J(C.t,null,A.bG(w,1),x,C.bs,null,C.x)},
alB(d){return""+A.aE(d)+" "+C.bi[A.aw(d)-1]},
dfW(d){var x,w,v
if(d.b===C.ej&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.alB(w)}else{w.toString
x=B.alB(w)+" a "+B.alB(x)}return x}v=d.x
if(v==null)return null
return B.alB(v)+" \xb7 "+C.f.aT(C.j.k(A.i_(v)),2,"0")+":"+C.f.aT(C.j.k(A.hQ(v)),2,"0")},
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
B.jH.prototype={
gu5(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ej){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aal.prototype={
u(d){return new A.kN(this.c,6,null,null,null)}}
B.a9w.prototype={
u(d){var x=null,w=$.au,v=this.d,u=v?w:w.ce(0.14),t=A.W(999)
return A.w(x,A.h(this.c,x,x,x,x,A.aH(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.J(u,x,x,t,x,x,C.x),x,x,x,C.hv,x,x,x)}}
B.a4H.prototype={
u(d){var x=null,w=B.alk()
return A.w(x,A.x(A.a([D.c_6,C.R,D.ccO,C.aC,A.h(this.c,x,x,x,x,C.c_,C.a4,x)],y.e),C.u,C.h,C.l),C.r,x,x,w,x,x,x,C.cJ,x,x,x)}}
var z=a.updateTypes([])
B.cNY.prototype={
$1(d){return this.aGr(d)},
aGr(d){var x=0,w=A.n(y.b),v,u,t
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A
t=J
x=3
return A.d(A.alp(),$async$$1)
case 3:v=u.ds(t.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:190};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3t,A.f7)
x(B.jH,A.M)
x(B.cNY,A.bu)
w(A.L,[B.aal,B.a9w,B.a4H])})()
A.br(b.typeUniverse,JSON.parse('{"aal":{"L":[],"e":[],"f":[]},"a9w":{"L":[],"e":[],"f":[]},"a4H":{"L":[],"e":[],"f":[]}}'))
var y={e:A.B("r<e>"),b:A.B("T"),k:A.B("a3<c,@>?")};(function constants(){var x=a.makeConstList
D.BQ=new A.Y(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.Os=new B.a3t(0,"pendingPayment")
D.va=new B.a3t(1,"paid")
D.aBp=new B.a3t(2,"cancelled")
D.Fk=x([],A.B("r<jH>"))
D.c_6=new A.W2(C.nK,-0.016,48,null)
D.ccO=new A.D("Em breve",null,C.hQ,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_p","cV7",()=>A.ey(new B.cNY(),null,!1,null,null,y.b))})()};
(a=>{a["wf9DFJAYctp5eKXmYEPQM+Gg5Og="]=a.current})($__dart_deferred_initializers__);