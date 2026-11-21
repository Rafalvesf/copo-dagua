((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dhb(d){var x
switch(d){case"paid":x=D.ut
break
case"cancelled":x=D.ayK
break
default:x=D.MY
break}return x},
cJc(d){var x,w,v,u,t,s,r,q=null,p=J.a3(d),o=y.c.a(p.h(d,"guest_offers")),n=A.a1(p.h(d,"id"))
A.I(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.f(o,"title")
A.I(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.f(o,"kind")
w=A.I(w)==="transport"?B.mV:B.dH
v=A.I(p.h(d,"guest_name"))
u=A.I(p.h(d,"guest_avatar_url"))
t=A.aM(p.h(d,"quantity"))
t=t==null?q:B.k.E(t)
if(t==null)t=1
s=A.aM(p.h(d,"nights"))
s=s==null?q:B.k.E(s)
if(s==null)s=1
A.aM(p.h(d,"amount"))
r=C.dhb(A.I(p.h(d,"status")))
p=A.I(p.h(d,"created_at"))
p=A.et(p==null?"":p)
p=p==null?q:p.eJ()
return new C.j9(n,x,w,v,u,t,s,r,p==null?new A.an(Date.now(),0,!1):p)},
a_v:function a_v(d,e){this.a=d
this.b=e},
j9:function j9(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
agO(){var x=A.W(22),w=$.ag.bV(0.45)
return new A.J(B.u,null,A.ck(w,1),x,B.aJ,null,B.y)},
ah2(d){return""+A.aN(d)+" "+B.dq[A.ay(d)-1]},
cSO(d){var x,w,v
if(d.b===B.dH&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+C.ah2(w)}else{w.toString
x=C.ah2(w)+" a "+C.ah2(x)}return x}v=d.x
if(v==null)return null
return C.ah2(v)+" \xb7 "+B.f.aS(B.i.j(A.iH(v)),2,"0")+":"+B.f.aS(B.i.j(A.iu(v)),2,"0")},
a6c:function a6c(d,e){this.c=d
this.a=e},
a5p:function a5p(d,e,f){this.c=d
this.d=e
this.a=f},
a0I:function a0I(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[70],C)
D=c[216]
C.a_v.prototype={
J(){return"GuestReservationStatus."+this.b}}
C.j9.prototype={
gtw(){var x,w=this.d,v=this.r,u=""+v
if(w===B.dH){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
C.a6c.prototype={
u(d){var x=A.W(999),w=B.k.af(this.c,0,1)
return A.ey(x,A.nx(B.AJ,$.ag,6,w,null),B.aM)}}
C.a5p.prototype={
u(d){var x=null,w=$.ag,v=this.d,u=v?w:w.bV(0.14),t=A.W(999)
return A.B(x,A.h(this.c,x,x,x,A.aF(x,x,v?B.u:w,x,x,x,x,x,x,x,x,11,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.J(u,x,x,t,x,x,B.y),x,x,x,B.jK,x,x,x)}}
C.a0I.prototype={
u(d){var x=null,w=C.agO()
return A.B(x,A.D(A.a([D.bVh,B.U,D.caL,B.aA,A.h(this.c,x,x,x,B.ds,B.a6,x,x)],y.e),B.x,B.j,B.q,0,B.w),B.r,x,x,w,x,x,x,B.cN,x,x,x)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.a_v,A.fn)
x(C.j9,A.H)
w(A.O,[C.a6c,C.a5p,C.a0I])})()
A.bj(b.typeUniverse,JSON.parse('{"a6c":{"O":[],"e":[]},"a5p":{"O":[],"e":[]},"a0I":{"O":[],"e":[]}}'))
var y={e:A.u("q<e>"),c:A.u("a6<c,@>?")};(function constants(){var x=a.makeConstList
D.AP=new A.P(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,B.C)
D.MY=new C.a_v(0,"pendingPayment")
D.ut=new C.a_v(1,"paid")
D.ayK=new C.a_v(2,"cancelled")
D.E4=x([],A.u("q<j9>"))
D.bVh=new A.A_(B.j5,-0.016,48,null,null)
D.caL=new A.z("Em breve",null,B.eK,null,null,null,null,null,null,null,null)})()};
(a=>{a["7CBHfJfR6xVCfBTqyI9vbfG5AYU="]=a.current})($__dart_deferred_initializers__);