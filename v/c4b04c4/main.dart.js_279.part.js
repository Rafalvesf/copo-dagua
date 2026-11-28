((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dHm(d){var x
switch(d){case"paid":x=D.vF
break
case"cancelled":x=D.aCj
break
default:x=D.Pb
break}return x},
d4F(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a0(p.h(d,"id"))
A.C(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.i(o,"title")
A.C(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.i(o,"kind")
w=A.C(w)==="transport"?C.qM:C.ek
v=A.C(p.h(d,"guest_name"))
u=A.C(p.h(d,"guest_avatar_url"))
t=A.aH(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aH(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aH(p.h(d,"amount"))
r=B.dHm(A.C(p.h(d,"status")))
p=A.C(p.h(d,"created_at"))
p=A.d2(p==null?"":p)
p=p==null?q:p.dP()
return new B.jH(n,x,w,v,u,t,s,r,p==null?new A.ab(Date.now(),0,!1):p)},
a3l:function a3l(d,e){this.a=d
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
cNq:function cNq(){},
alx(){var x=A.V(22),w=$.au.cd(0.45)
return new A.I(C.t,null,A.bB(w,1),x,C.bi,null,C.y)},
alN(d){return""+A.aA(d)+" "+C.bm[A.ar(d)-1]},
dff(d){var x,w,v
if(d.b===C.ek&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.alN(w)}else{w.toString
x=B.alN(w)+" a "+B.alN(x)}return x}v=d.x
if(v==null)return null
return B.alN(v)+" \xb7 "+C.f.aY(C.j.k(A.ic(v)),2,"0")+":"+C.f.aY(C.j.k(A.hY(v)),2,"0")},
aag:function aag(d,e){this.c=d
this.a=e},
a9s:function a9s(d,e,f){this.c=d
this.d=e
this.a=f},
a4v:function a4v(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[200]
B.a3l.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jH.prototype={
guj(){var x,w=this.d,v=this.r,u=""+v
if(w===C.ek){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.aag.prototype={
u(d){return new A.l4(this.c,6,null,null,null)}}
B.a9s.prototype={
u(d){var x=null,w=$.au,v=this.d,u=v?w:w.cd(0.14),t=A.V(999)
return A.z(x,A.h(this.c,x,x,x,x,A.aJ(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.I(u,x,x,t,x,x,C.y),x,x,x,C.hC,x,x,x)}}
B.a4v.prototype={
u(d){var x=null,w=B.alx()
return A.z(x,A.x(A.a([D.c0J,C.R,D.chj,C.aF,A.h(this.c,x,x,x,x,C.c6,C.a6,x,x)],y.e),C.w,C.h,C.l,0,C.u),C.r,x,x,w,x,x,x,C.dp,x,x,x)}}
var z=a.updateTypes([])
B.cNq.prototype={
$1(d){return this.aHy(d)},
aHy(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.R().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.P("platform_settings").al(0,"platform_commission_percentage").V("id",1).dR(0),$async$$1)
case 3:v=t.ds(s.i(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:191};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a3l,A.f8)
x(B.jH,A.L)
x(B.cNq,A.bz)
w(A.J,[B.aag,B.a9s,B.a4v])})()
A.br(b.typeUniverse,JSON.parse('{"aag":{"J":[],"e":[],"f":[]},"a9s":{"J":[],"e":[],"f":[]},"a4v":{"J":[],"e":[],"f":[]}}'))
var y={e:A.w("r<e>"),b:A.w("S"),k:A.w("a5<c,@>?")};(function constants(){var x=a.makeConstList
D.Ch=new A.X(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.Pb=new B.a3l(0,"pendingPayment")
D.vF=new B.a3l(1,"paid")
D.aCj=new B.a3l(2,"cancelled")
D.FN=x([],A.w("r<jH>"))
D.c0J=new A.N5(C.o8,-0.016,48,null)
D.chj=new A.D("Em breve",null,C.hj,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZ8","cUu",()=>A.eI(new B.cNq(),null,!1,null,null,y.b))})()};
(a=>{a["xyU7zePX/Y9kiT0d2VTEsQi0Ndw="]=a.current})($__dart_deferred_initializers__);