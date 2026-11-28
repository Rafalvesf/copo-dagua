((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dHC(d){var x
switch(d){case"paid":x=D.vp
break
case"cancelled":x=D.aBx
break
default:x=D.OB
break}return x},
d4O(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a_(p.h(d,"id"))
A.C(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.C(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.C(w)==="transport"?C.qv:C.ej
v=A.C(p.h(d,"guest_name"))
u=A.C(p.h(d,"guest_avatar_url"))
t=A.aF(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aF(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aF(p.h(d,"amount"))
r=B.dHC(A.C(p.h(d,"status")))
p=A.C(p.h(d,"created_at"))
p=A.d4(p==null?"":p)
p=p==null?q:p.dM()
return new B.jJ(n,x,w,v,u,t,s,r,p==null?new A.ac(Date.now(),0,!1):p)},
a3k:function a3k(d,e){this.a=d
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
cNz:function cNz(){},
alk(){var x=A.W(22),w=$.au.ce(0.45)
return new A.K(C.t,null,A.bA(w,1),x,C.br,null,C.x)},
alz(d){return""+A.ay(d)+" "+C.bg[A.an(d)-1]},
dfo(d){var x,w,v
if(d.b===C.ej&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.alz(w)}else{w.toString
x=B.alz(w)+" a "+B.alz(x)}return x}v=d.x
if(v==null)return null
return B.alz(v)+" \xb7 "+C.f.aV(C.j.k(A.ic(v)),2,"0")+":"+C.f.aV(C.j.k(A.i_(v)),2,"0")},
aah:function aah(d,e){this.c=d
this.a=e},
a9s:function a9s(d,e,f){this.c=d
this.d=e
this.a=f},
a4w:function a4w(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[199]
B.a3k.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jJ.prototype={
gue(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ej){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aah.prototype={
u(d){return new A.kI(this.c,6,null,null,null)}}
B.a9s.prototype={
u(d){var x=null,w=$.au,v=this.d,u=v?w:w.ce(0.14),t=A.W(999)
return A.B(x,A.h(this.c,x,x,x,x,A.aJ(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.G,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.K(u,x,x,t,x,x,C.x),x,x,x,C.hu,x,x,x)}}
B.a4w.prototype={
u(d){var x=null,w=B.alk()
return A.B(x,A.A(A.a([D.c_r,C.R,D.cfQ,C.aF,A.h(this.c,x,x,x,x,C.bZ,C.a4,x,x)],y.e),C.v,C.h,C.l),C.r,x,x,w,x,x,x,C.cH,x,x,x)}}
var z=a.updateTypes([])
B.cNz.prototype={
$1(d){return this.aHa(d)},
aHa(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.P().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.P("platform_settings").ai(0,"platform_commission_percentage").V("id",1).dQ(0),$async$$1)
case 3:v=t.du(s.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:179};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3k,A.eX)
x(B.jJ,A.J)
x(B.cNz,A.bw)
w(A.M,[B.aah,B.a9s,B.a4w])})()
A.bt(b.typeUniverse,JSON.parse('{"aah":{"M":[],"e":[],"f":[]},"a9s":{"M":[],"e":[],"f":[]},"a4w":{"M":[],"e":[],"f":[]}}'))
var y={e:A.w("r<e>"),b:A.w("S"),k:A.w("a4<c,@>?")};(function constants(){var x=a.makeConstList
D.BW=new A.X(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.OB=new B.a3k(0,"pendingPayment")
D.vp=new B.a3k(1,"paid")
D.aBx=new B.a3k(2,"cancelled")
D.Fr=x([],A.w("r<jJ>"))
D.c_r=new A.VQ(C.nX,-0.016,48,null)
D.cfQ=new A.D("Em breve",null,C.hO,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZy","cUE",()=>A.ey(new B.cNz(),null,!1,null,null,y.b))})()};
(a=>{a["yId5ldBs2sj6Y41+srUuDh7aV6E="]=a.current})($__dart_deferred_initializers__);