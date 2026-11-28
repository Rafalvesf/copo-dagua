((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dIT(d){var x
switch(d){case"paid":x=D.vk
break
case"cancelled":x=D.aBC
break
default:x=D.OI
break}return x},
d5G(d){var x,w,v,u,t,s,r,q=null,p=J.a6(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a0(p.h(d,"id"))
A.x(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.x(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.x(w)==="transport"?C.qe:C.el
v=A.x(p.h(d,"guest_name"))
u=A.x(p.h(d,"guest_avatar_url"))
t=A.aF(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aF(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aF(p.h(d,"amount"))
r=B.dIT(A.x(p.h(d,"status")))
p=A.x(p.h(d,"created_at"))
p=A.d0(p==null?"":p)
p=p==null?q:p.dH()
return new B.jJ(n,x,w,v,u,t,s,r,p==null?new A.ab(Date.now(),0,!1):p)},
a3K:function a3K(d,e){this.a=d
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
cO6:function cO6(){},
alP(){var x=A.W(22),w=$.ay.c7(0.45)
return new A.O(C.t,null,A.bR(w,1),x,C.bt,null,C.z)},
am1(d){return""+A.ax(d)+" "+C.be[A.aq(d)-1]},
dgu(d){var x,w,v
if(d.b===C.el&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.am1(w)}else{w.toString
x=B.am1(w)+" a "+B.am1(x)}return x}v=d.x
if(v==null)return null
return B.am1(v)+" \xb7 "+C.f.aP(C.j.k(A.i0(v)),2,"0")+":"+C.f.aP(C.j.k(A.hN(v)),2,"0")},
aaE:function aaE(d,e){this.c=d
this.a=e},
a9P:function a9P(d,e,f){this.c=d
this.d=e
this.a=f},
a4Z:function a4Z(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[198]
B.a3K.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jJ.prototype={
gu6(){var x,w=this.d,v=this.r,u=""+v
if(w===C.el){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aaE.prototype={
t(d){return new A.la(this.c,6,null,null,null)}}
B.a9P.prototype={
t(d){var x=null,w=$.ay,v=this.d,u=v?w:w.c7(0.14),t=A.W(999)
return A.w(x,A.h(this.c,x,x,x,x,A.aJ(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.E,x,x,!0,x,x,x,x,x,x,x,x),x,x),C.r,x,x,new A.O(u,x,x,t,x,x,C.z),x,x,x,C.i6,x,x,x)}}
B.a4Z.prototype={
t(d){var x=null,w=B.alP()
return A.w(x,A.y(A.a([D.c_w,C.S,D.cdn,C.aD,A.h(this.c,x,x,x,x,C.bJ,C.a6,x)],y.e),C.u,C.h,C.l),C.r,x,x,w,x,x,x,C.ck,x,x,x)}}
var z=a.updateTypes([])
B.cO6.prototype={
$1(d){return this.aH1(d)},
aH1(d){var x=0,w=A.n(y.b),v,u,t
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A
t=J
x=3
return A.d(A.alS(),$async$$1)
case 3:v=u.ds(t.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:171};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3K,A.fj)
x(B.jJ,A.L)
x(B.cO6,A.bv)
w(A.H,[B.aaE,B.a9P,B.a4Z])})()
A.bq(b.typeUniverse,JSON.parse('{"aaE":{"H":[],"e":[],"f":[]},"a9P":{"H":[],"e":[],"f":[]},"a4Z":{"H":[],"e":[],"f":[]}}'))
var y={e:A.B("r<e>"),b:A.B("T"),k:A.B("a5<c,@>?")};(function constants(){var x=a.makeConstList
D.C4=new A.Y(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.B)
D.OI=new B.a3K(0,"pendingPayment")
D.vk=new B.a3K(1,"paid")
D.aBC=new B.a3K(2,"cancelled")
D.Fy=x([],A.B("r<jJ>"))
D.c_w=new A.Wj(C.nW,-0.016,48,null)
D.cdn=new A.F("Em breve",null,C.fS,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_Z","cVt",()=>A.ey(new B.cO6(),null,!1,null,null,y.b))})()};
(a=>{a["daDnAa9skA2bLf0ou7p/a/vRTxw="]=a.current})($__dart_deferred_initializers__);