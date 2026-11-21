((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
ds8(d){var x
switch(d){case"paid":x=D.uK
break
case"cancelled":x=D.azR
break
default:x=D.NF
break}return x},
cRC(d){var x,w,v,u,t,s,r,q=null,p=J.a5(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a2(p.h(d,"id"))
A.M(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.h(o,"title")
A.M(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.h(o,"kind")
w=A.M(w)==="transport"?B.na:B.dK
v=A.M(p.h(d,"guest_name"))
u=A.M(p.h(d,"guest_avatar_url"))
t=A.aR(p.h(d,"quantity"))
t=t==null?q:B.j.G(t)
if(t==null)t=1
s=A.aR(p.h(d,"nights"))
s=s==null?q:B.j.G(s)
if(s==null)s=1
A.aR(p.h(d,"amount"))
r=C.ds8(A.M(p.h(d,"status")))
p=A.M(p.h(d,"created_at"))
p=A.eK(p==null?"":p)
p=p==null?q:p.eb()
return new C.jt(n,x,w,v,u,t,s,r,p==null?new A.ai(Date.now(),0,!1):p)},
a1g:function a1g(d,e){this.a=d
this.b=e},
jt:function jt(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
cA5:function cA5(){},
aiO(){var x=A.X(22),w=$.aj.c_(0.45)
return new A.L(B.u,null,A.cn(w,1),x,B.aI,null,B.y)},
aj2(d){return""+A.aQ(d)+" "+B.cX[A.aA(d)-1]},
d0X(d){var x,w,v
if(d.b===B.dK&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+C.aj2(w)}else{w.toString
x=C.aj2(w)+" a "+C.aj2(x)}return x}v=d.x
if(v==null)return null
return C.aj2(v)+" \xb7 "+B.f.aY(B.i.k(A.iX(v)),2,"0")+":"+B.f.aY(B.i.k(A.iJ(v)),2,"0")},
a89:function a89(d,e){this.c=d
this.a=e},
a7l:function a7l(d,e,f){this.c=d
this.d=e
this.a=f},
a2v:function a2v(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[70],C)
D=c[194]
C.a1g.prototype={
H(){return"GuestReservationStatus."+this.b}}
C.jt.prototype={
gu7(){var x,w=this.d,v=this.r,u=""+v
if(w===B.dK){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
C.a89.prototype={
u(d){var x=A.X(999),w=B.j.ai(this.c,0,1)
return A.eR(x,A.oV(B.B1,$.aj,6,w,null),B.aO)}}
C.a7l.prototype={
u(d){var x=null,w=$.aj,v=this.d,u=v?w:w.c_(0.14),t=A.X(999)
return A.C(x,A.i(this.c,x,x,x,x,A.aF(x,x,v?B.u:w,x,x,x,x,x,x,x,x,11,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.L(u,x,x,t,x,x,B.y),x,x,x,B.jY,x,x,x)}}
C.a2v.prototype={
u(d){var x=null,w=C.aiO()
return A.C(x,A.E(A.a([D.bWu,B.V,D.cbW,B.az,A.i(this.c,x,x,x,x,B.dn,B.a6,x,x)],y.e),B.x,B.k,B.p,0,B.w),B.r,x,x,w,x,x,x,B.cE,x,x,x)}}
var z=a.updateTypes([])
C.cA5.prototype={
$1(d){return this.aF7(d)},
aF7(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.R().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.P("platform_settings").aG(0,"platform_commission_percentage").V("id",1).dO(0),$async$$1)
case 3:v=t.dA(s.h(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:172};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.a1g,A.fx)
x(C.jt,A.K)
x(C.cA5,A.bx)
w(A.O,[C.a89,C.a7l,C.a2v])})()
A.bu(b.typeUniverse,JSON.parse('{"a89":{"O":[],"e":[],"f":[]},"a7l":{"O":[],"e":[],"f":[]},"a2v":{"O":[],"e":[],"f":[]}}'))
var y={e:A.w("r<e>"),b:A.w("U"),k:A.w("a3<c,@>?")};(function constants(){var x=a.makeConstList
D.B7=new A.P(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,B.C)
D.NF=new C.a1g(0,"pendingPayment")
D.uK=new C.a1g(1,"paid")
D.azR=new C.a1g(2,"cancelled")
D.Ex=x([],A.w("r<jt>"))
D.bWu=new A.AJ(B.jf,-0.016,48,null,null)
D.cbW=new A.A("Em breve",null,B.eQ,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dJb","cGB",()=>A.eE(new C.cA5(),null,!1,null,null,y.b))})()};
(a=>{a["i7knJl5a3Ic95XPtCSbOQ5POGPw="]=a.current})($__dart_deferred_initializers__);