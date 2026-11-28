((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dHl(d){var x
switch(d){case"paid":x=D.vo
break
case"cancelled":x=D.aBq
break
default:x=D.OE
break}return x},
d4C(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.Z(p.h(d,"id"))
A.C(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.C(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.C(w)==="transport"?C.qv:C.ek
v=A.C(p.h(d,"guest_name"))
u=A.C(p.h(d,"guest_avatar_url"))
t=A.aF(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aF(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aF(p.h(d,"amount"))
r=B.dHl(A.C(p.h(d,"status")))
p=A.C(p.h(d,"created_at"))
p=A.d4(p==null?"":p)
p=p==null?q:p.dM()
return new B.jJ(n,x,w,v,u,t,s,r,p==null?new A.ac(Date.now(),0,!1):p)},
a3n:function a3n(d,e){this.a=d
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
cNp:function cNp(){},
alo(){var x=A.W(22),w=$.at.cd(0.45)
return new A.K(C.t,null,A.bA(w,1),x,C.bn,null,C.x)},
alD(d){return""+A.ay(d)+" "+C.bh[A.an(d)-1]},
dfa(d){var x,w,v
if(d.b===C.ek&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.alD(w)}else{w.toString
x=B.alD(w)+" a "+B.alD(x)}return x}v=d.x
if(v==null)return null
return B.alD(v)+" \xb7 "+C.f.aV(C.j.k(A.ic(v)),2,"0")+":"+C.f.aV(C.j.k(A.hY(v)),2,"0")},
aal:function aal(d,e){this.c=d
this.a=e},
a9w:function a9w(d,e,f){this.c=d
this.d=e
this.a=f},
a4z:function a4z(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[200]
B.a3n.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jJ.prototype={
gue(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ek){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aal.prototype={
u(d){return new A.l7(this.c,6,null,null,null)}}
B.a9w.prototype={
u(d){var x=null,w=$.at,v=this.d,u=v?w:w.cd(0.14),t=A.W(999)
return A.y(x,A.h(this.c,x,x,x,x,A.aI(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.K(u,x,x,t,x,x,C.x),x,x,x,C.hu,x,x,x)}}
B.a4z.prototype={
u(d){var x=null,w=B.alo()
return A.y(x,A.A(A.a([D.c_n,C.Q,D.cfU,C.aF,A.h(this.c,x,x,x,x,C.bZ,C.a4,x,x)],y.e),C.v,C.h,C.l),C.r,x,x,w,x,x,x,C.d3,x,x,x)}}
var z=a.updateTypes([])
B.cNp.prototype={
$1(d){return this.aH9(d)},
aH9(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.Q().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.P("platform_settings").aj(0,"platform_commission_percentage").V("id",1).dQ(0),$async$$1)
case 3:v=t.du(s.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:192};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3n,A.eX)
x(B.jJ,A.J)
x(B.cNp,A.bw)
w(A.M,[B.aal,B.a9w,B.a4z])})()
A.br(b.typeUniverse,JSON.parse('{"aal":{"M":[],"e":[],"f":[]},"a9w":{"M":[],"e":[],"f":[]},"a4z":{"M":[],"e":[],"f":[]}}'))
var y={e:A.w("r<e>"),b:A.w("T"),k:A.w("a6<c,@>?")};(function constants(){var x=a.makeConstList
D.BW=new A.X(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.OE=new B.a3n(0,"pendingPayment")
D.vo=new B.a3n(1,"paid")
D.aBq=new B.a3n(2,"cancelled")
D.Fr=x([],A.w("r<jJ>"))
D.c_n=new A.N2(C.nW,-0.016,48,null)
D.cfU=new A.D("Em breve",null,C.hO,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZf","cUs",()=>A.ey(new B.cNp(),null,!1,null,null,y.b))})()};
(a=>{a["WNm+NcnjyhLEXHPNjLRnicCFDHw="]=a.current})($__dart_deferred_initializers__);