((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dHS(d){var x
switch(d){case"paid":x=D.vb
break
case"cancelled":x=D.aBk
break
default:x=D.On
break}return x},
d4W(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.Y(p.h(d,"id"))
A.B(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.B(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.B(w)==="transport"?C.q9:C.ei
v=A.B(p.h(d,"guest_name"))
u=A.B(p.h(d,"guest_avatar_url"))
t=A.aD(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aD(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aD(p.h(d,"amount"))
r=B.dHS(A.B(p.h(d,"status")))
p=A.B(p.h(d,"created_at"))
p=A.d2(p==null?"":p)
p=p==null?q:p.dG()
return new B.jG(n,x,w,v,u,t,s,r,p==null?new A.ac(Date.now(),0,!1):p)},
a3b:function a3b(d,e){this.a=d
this.b=e},
jG:function jG(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
cNJ:function cNJ(){},
al4(){var x=A.W(22),w=$.au.cc(0.45)
return new A.I(C.t,null,A.bF(w,1),x,C.bq,null,C.x)},
all(d){return""+A.aE(d)+" "+C.bg[A.aw(d)-1]},
dfx(d){var x,w,v
if(d.b===C.ei&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.all(w)}else{w.toString
x=B.all(w)+" a "+B.all(x)}return x}v=d.x
if(v==null)return null
return B.all(v)+" \xb7 "+C.f.aT(C.j.k(A.hZ(v)),2,"0")+":"+C.f.aT(C.j.k(A.hO(v)),2,"0")},
aa5:function aa5(d,e){this.c=d
this.a=e},
a9g:function a9g(d,e,f){this.c=d
this.d=e
this.a=f},
a4p:function a4p(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[198]
B.a3b.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jG.prototype={
gu4(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ei){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aa5.prototype={
u(d){return new A.kK(this.c,6,null,null,null)}}
B.a9g.prototype={
u(d){var x=null,w=$.au,v=this.d,u=v?w:w.cc(0.14),t=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aI(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.I(u,x,x,t,x,x,C.x),x,x,x,C.hu,x,x,x)}}
B.a4p.prototype={
u(d){var x=null,w=B.al4()
return A.x(x,A.y(A.a([D.bZY,C.R,D.ccC,C.aE,A.h(this.c,x,x,x,x,C.c_,C.a3,x)],y.e),C.v,C.h,C.l),C.r,x,x,w,x,x,x,C.cH,x,x,x)}}
var z=a.updateTypes([])
B.cNJ.prototype={
$1(d){return this.aGo(d)},
aGo(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.Q().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.P("platform_settings").ai(0,"platform_commission_percentage").U("id",1).dO(0),$async$$1)
case 3:v=t.dv(s.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:183};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3b,A.fg)
x(B.jG,A.M)
x(B.cNJ,A.bt)
w(A.L,[B.aa5,B.a9g,B.a4p])})()
A.bq(b.typeUniverse,JSON.parse('{"aa5":{"L":[],"e":[],"f":[]},"a9g":{"L":[],"e":[],"f":[]},"a4p":{"L":[],"e":[],"f":[]}}'))
var y={e:A.z("r<e>"),b:A.z("T"),k:A.z("a5<c,@>?")};(function constants(){var x=a.makeConstList
D.BO=new A.Z(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.On=new B.a3b(0,"pendingPayment")
D.vb=new B.a3b(1,"paid")
D.aBk=new B.a3b(2,"cancelled")
D.Fh=x([],A.z("r<jG>"))
D.bZY=new A.VQ(C.nL,-0.016,48,null)
D.ccC=new A.D("Em breve",null,C.hP,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZS","cUL",()=>A.ez(new B.cNJ(),null,!1,null,null,y.b))})()};
(a=>{a["VtqB8qCJUyUghWdhzhKyoYfN4Vo="]=a.current})($__dart_deferred_initializers__);