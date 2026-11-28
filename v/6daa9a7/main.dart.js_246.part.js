((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dyl(d){var x
switch(d){case"paid":x=D.uW
break
case"cancelled":x=D.aAk
break
default:x=D.NX
break}return x},
cXz(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a_(p.h(d,"id"))
A.J(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.h(o,"title")
A.J(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.h(o,"kind")
w=A.J(w)==="transport"?C.qb:C.e6
v=A.J(p.h(d,"guest_name"))
u=A.J(p.h(d,"guest_avatar_url"))
t=A.aL(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aL(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aL(p.h(d,"amount"))
r=B.dyl(A.J(p.h(d,"status")))
p=A.J(p.h(d,"created_at"))
p=A.ej(p==null?"":p)
p=p==null?q:p.eH()
return new B.jA(n,x,w,v,u,t,s,r,p==null?new A.af(Date.now(),0,!1):p)},
a2e:function a2e(d,e){this.a=d
this.b=e},
jA:function jA(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
cFO:function cFO(){},
ajN(){var x=A.a2(22),w=$.ap.ci(0.45)
return new A.O(C.u,null,A.bU(w,1),x,C.bb,null,C.y)},
ak2(d){return""+A.aN(d)+" "+C.cn[A.ay(d)-1]},
d6X(d){var x,w,v
if(d.b===C.e6&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.ak2(w)}else{w.toString
x=B.ak2(w)+" a "+B.ak2(x)}return x}v=d.x
if(v==null)return null
return B.ak2(v)+" \xb7 "+C.f.aZ(C.i.k(A.ip(v)),2,"0")+":"+C.f.aZ(C.i.k(A.i8(v)),2,"0")},
a92:function a92(d,e){this.c=d
this.a=e},
a8e:function a8e(d,e,f){this.c=d
this.d=e
this.a=f},
a3o:function a3o(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[72],B)
D=c[190]
B.a2e.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jA.prototype={
guc(){var x,w=this.d,v=this.r,u=""+v
if(w===C.e6){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.a92.prototype={
u(d){return new A.kY(this.c,6,null,null,null)}}
B.a8e.prototype={
u(d){var x=null,w=$.ap,v=this.d,u=v?w:w.ci(0.14),t=A.a2(999)
return A.C(x,A.i(this.c,x,x,x,x,A.aH(x,x,v?C.u:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.O(u,x,x,t,x,x,C.y),x,x,x,C.nb,x,x,x)}}
B.a3o.prototype={
u(d){var x=null,w=B.ajN()
return A.C(x,A.B(A.a([D.bY6,C.Q,D.cd1,C.aF,A.i(this.c,x,x,x,x,C.dr,C.a5,x,x)],y.e),C.x,C.j,C.o,0,C.v),C.r,x,x,w,x,x,x,C.df,x,x,x)}}
var z=a.updateTypes([])
B.cFO.prototype={
$1(d){return this.aFW(d)},
aFW(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.T().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.P("platform_settings").aw(0,"platform_commission_percentage").W("id",1).dN(0),$async$$1)
case 3:v=t.dp(s.h(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:186};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a2e,A.fx)
x(B.jA,A.L)
x(B.cFO,A.bx)
w(A.K,[B.a92,B.a8e,B.a3o])})()
A.bu(b.typeUniverse,JSON.parse('{"a92":{"K":[],"e":[],"f":[]},"a8e":{"K":[],"e":[],"f":[]},"a3o":{"K":[],"e":[],"f":[]}}'))
var y={e:A.w("t<e>"),b:A.w("P"),k:A.w("a5<c,@>?")};(function constants(){var x=a.makeConstList
D.Bj=new A.U(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.NX=new B.a2e(0,"pendingPayment")
D.uW=new B.a2e(1,"paid")
D.aAk=new B.a2e(2,"cancelled")
D.EK=x([],A.w("t<jA>"))
D.bY6=new A.Mq(C.lx,-0.016,48,null)
D.cd1=new A.D("Em breve",null,C.fv,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dPN","cMq",()=>A.ez(new B.cFO(),null,!1,null,null,y.b))})()};
(a=>{a["M0FxafpHFGxT5HYUB63sCu0DhpU="]=a.current})($__dart_deferred_initializers__);