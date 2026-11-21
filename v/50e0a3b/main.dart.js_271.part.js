((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
doS(d){var x
switch(d){case"paid":x=D.uK
break
case"cancelled":x=D.azk
break
default:x=D.Nv
break}return x},
cP6(d){var x,w,v,u,t,s,r,q=null,p=J.a5(d),o=y.c.a(p.h(d,"guest_offers")),n=A.a2(p.h(d,"id"))
A.L(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.h(o,"title")
A.L(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.h(o,"kind")
w=A.L(w)==="transport"?B.n5:B.dI
v=A.L(p.h(d,"guest_name"))
u=A.L(p.h(d,"guest_avatar_url"))
t=A.aX(p.h(d,"quantity"))
t=t==null?q:B.j.G(t)
if(t==null)t=1
s=A.aX(p.h(d,"nights"))
s=s==null?q:B.j.G(s)
if(s==null)s=1
A.aX(p.h(d,"amount"))
r=C.doS(A.L(p.h(d,"status")))
p=A.L(p.h(d,"created_at"))
p=A.eO(p==null?"":p)
p=p==null?q:p.f6()
return new C.ju(n,x,w,v,u,t,s,r,p==null?new A.ai(Date.now(),0,!1):p)},
a14:function a14(d,e){this.a=d
this.b=e},
ju:function ju(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
aiC(){var x=A.Z(22),w=$.ao.cg(0.45)
return new A.N(B.u,null,A.cE(w,1),x,B.aE,null,B.y)},
aiR(d){return""+A.aQ(d)+" "+B.e4[A.aC(d)-1]},
cZl(d){var x,w,v
if(d.b===B.dI&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+C.aiR(w)}else{w.toString
x=C.aiR(w)+" a "+C.aiR(x)}return x}v=d.x
if(v==null)return null
return C.aiR(v)+" \xb7 "+B.f.aU(B.i.k(A.iX(v)),2,"0")+":"+B.f.aU(B.i.k(A.iJ(v)),2,"0")},
a7Y:function a7Y(d,e){this.c=d
this.a=e},
a7a:function a7a(d,e,f){this.c=d
this.d=e
this.a=f},
a2h:function a2h(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[70],C)
D=c[207]
C.a14.prototype={
H(){return"GuestReservationStatus."+this.b}}
C.ju.prototype={
gw1(){var x,w=this.d,v=this.r,u=""+v
if(w===B.dI){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
C.a7Y.prototype={
u(d){var x=A.Z(999),w=B.j.aj(this.c,0,1)
return A.fs(x,A.qe(B.B0,$.ao,6,w,null),B.aS)}}
C.a7a.prototype={
u(d){var x=null,w=$.ao,v=this.d,u=v?w:w.cg(0.14),t=A.Z(999)
return A.G(x,A.i(this.c,x,x,x,A.aE(x,x,v?B.u:w,x,x,x,x,x,x,x,x,11,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.t,x,x,new A.N(u,x,x,t,x,x,B.y),x,x,x,B.j2,x,x,x)}}
C.a2h.prototype={
u(d){var x=null,w=C.aiC()
return A.G(x,A.I(A.a([D.bVr,B.U,D.cay,B.aF,A.i(this.c,x,x,x,B.e8,B.a3,x,x)],y.e),B.x,B.l,B.q,0,B.w),B.t,x,x,w,x,x,x,B.cY,x,x,x)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.a14,A.fw)
x(C.ju,A.J)
w(A.O,[C.a7Y,C.a7a,C.a2h])})()
A.bt(b.typeUniverse,JSON.parse('{"a7Y":{"O":[],"e":[],"f":[]},"a7a":{"O":[],"e":[],"f":[]},"a2h":{"O":[],"e":[],"f":[]}}'))
var y={e:A.v("r<e>"),c:A.v("a3<c,@>?")};(function constants(){var x=a.makeConstList
D.B6=new A.P(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,B.C)
D.Nv=new C.a14(0,"pendingPayment")
D.uK=new C.a14(1,"paid")
D.azk=new C.a14(2,"cancelled")
D.En=x([],A.v("r<ju>"))
D.bVr=new A.AF(B.j9,-0.016,48,null,null)
D.cay=new A.C("Em breve",null,B.eq,null,null,null,null,null,null,null,null)})()};
(a=>{a["p6b2eKCuXn+EV5ThHEzo+W4DuOc="]=a.current})($__dart_deferred_initializers__);