((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dy4(d){var x
switch(d){case"paid":x=D.uV
break
case"cancelled":x=D.aA9
break
default:x=D.NT
break}return x},
cXg(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a_(p.h(d,"id"))
A.J(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.h(o,"title")
A.J(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.h(o,"kind")
w=A.J(w)==="transport"?C.qa:C.e4
v=A.J(p.h(d,"guest_name"))
u=A.J(p.h(d,"guest_avatar_url"))
t=A.aL(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aL(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aL(p.h(d,"amount"))
r=B.dy4(A.J(p.h(d,"status")))
p=A.J(p.h(d,"created_at"))
p=A.ej(p==null?"":p)
p=p==null?q:p.eH()
return new B.jz(n,x,w,v,u,t,s,r,p==null?new A.af(Date.now(),0,!1):p)},
a26:function a26(d,e){this.a=d
this.b=e},
jz:function jz(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
cFr:function cFr(){},
ajE(){var x=A.a2(22),w=$.ap.ci(0.45)
return new A.O(C.u,null,A.bU(w,1),x,C.bb,null,C.y)},
ajU(d){return""+A.aN(d)+" "+C.co[A.ay(d)-1]},
d6G(d){var x,w,v
if(d.b===C.e4&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.ajU(w)}else{w.toString
x=B.ajU(w)+" a "+B.ajU(x)}return x}v=d.x
if(v==null)return null
return B.ajU(v)+" \xb7 "+C.f.aZ(C.i.k(A.ip(v)),2,"0")+":"+C.f.aZ(C.i.k(A.i8(v)),2,"0")},
a8T:function a8T(d,e){this.c=d
this.a=e},
a84:function a84(d,e,f){this.c=d
this.d=e
this.a=f},
a3g:function a3g(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[72],B)
D=c[187]
B.a26.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jz.prototype={
guc(){var x,w=this.d,v=this.r,u=""+v
if(w===C.e4){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.a8T.prototype={
u(d){return new A.kX(this.c,6,null,null,null)}}
B.a84.prototype={
u(d){var x=null,w=$.ap,v=this.d,u=v?w:w.ci(0.14),t=A.a2(999)
return A.B(x,A.i(this.c,x,x,x,x,A.aH(x,x,v?C.u:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.O(u,x,x,t,x,x,C.y),x,x,x,C.nb,x,x,x)}}
B.a3g.prototype={
u(d){var x=null,w=B.ajE()
return A.B(x,A.C(A.a([D.bXj,C.R,D.cce,C.aF,A.i(this.c,x,x,x,x,C.dr,C.a5,x,x)],y.e),C.x,C.j,C.p,0,C.v),C.r,x,x,w,x,x,x,C.df,x,x,x)}}
var z=a.updateTypes([])
B.cFr.prototype={
$1(d){return this.aFR(d)},
aFR(d){var x=0,w=A.n(y.b),v,u,t,s
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
$S:185};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a26,A.fx)
x(B.jz,A.L)
x(B.cFr,A.bx)
w(A.K,[B.a8T,B.a84,B.a3g])})()
A.bw(b.typeUniverse,JSON.parse('{"a8T":{"K":[],"e":[],"f":[]},"a84":{"K":[],"e":[],"f":[]},"a3g":{"K":[],"e":[],"f":[]}}'))
var y={e:A.x("t<e>"),b:A.x("P"),k:A.x("a5<c,@>?")};(function constants(){var x=a.makeConstList
D.Bk=new A.U(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.NT=new B.a26(0,"pendingPayment")
D.uV=new B.a26(1,"paid")
D.aA9=new B.a26(2,"cancelled")
D.EJ=x([],A.x("t<jz>"))
D.bXj=new A.Ml(C.lu,-0.016,48,null)
D.cce=new A.D("Em breve",null,C.fu,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dPo","cM7",()=>A.ez(new B.cFr(),null,!1,null,null,y.b))})()};
(a=>{a["IoKZGyzElc9WO7topHmGD7ThXyQ="]=a.current})($__dart_deferred_initializers__);