((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dpw(d){var x
switch(d){case"paid":x=D.uN
break
case"cancelled":x=D.azA
break
default:x=D.Nu
break}return x},
cPK(d){var x,w,v,u,t,s,r,q=null,p=J.a5(d),o=y.c.a(p.h(d,"guest_offers")),n=A.a2(p.h(d,"id"))
A.L(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.h(o,"title")
A.L(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.h(o,"kind")
w=A.L(w)==="transport"?B.n4:B.dL
v=A.L(p.h(d,"guest_name"))
u=A.L(p.h(d,"guest_avatar_url"))
t=A.aV(p.h(d,"quantity"))
t=t==null?q:B.j.F(t)
if(t==null)t=1
s=A.aV(p.h(d,"nights"))
s=s==null?q:B.j.F(s)
if(s==null)s=1
A.aV(p.h(d,"amount"))
r=C.dpw(A.L(p.h(d,"status")))
p=A.L(p.h(d,"created_at"))
p=A.eN(p==null?"":p)
p=p==null?q:p.f4()
return new C.jq(n,x,w,v,u,t,s,r,p==null?new A.ah(Date.now(),0,!1):p)},
a16:function a16(d,e){this.a=d
this.b=e},
jq:function jq(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
aiA(){var x=A.X(22),w=$.an.c4(0.45)
return new A.M(B.u,null,A.cx(w,1),x,B.aK,null,B.y)},
aiO(d){return""+A.aR(d)+" "+B.dM[A.aB(d)-1]},
d__(d){var x,w,v
if(d.b===B.dL&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+C.aiO(w)}else{w.toString
x=C.aiO(w)+" a "+C.aiO(x)}return x}v=d.x
if(v==null)return null
return C.aiO(v)+" \xb7 "+B.f.aT(B.i.k(A.iV(v)),2,"0")+":"+B.f.aT(B.i.k(A.iH(v)),2,"0")},
a7X:function a7X(d,e){this.c=d
this.a=e},
a79:function a79(d,e,f){this.c=d
this.d=e
this.a=f},
a2h:function a2h(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[70],C)
D=c[204]
C.a16.prototype={
H(){return"GuestReservationStatus."+this.b}}
C.jq.prototype={
gu1(){var x,w=this.d,v=this.r,u=""+v
if(w===B.dL){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
C.a7X.prototype={
u(d){var x=A.X(999),w=B.j.ai(this.c,0,1)
return A.eV(x,A.qd(B.B0,$.an,6,w,null),B.aN)}}
C.a79.prototype={
u(d){var x=null,w=$.an,v=this.d,u=v?w:w.c4(0.14),t=A.X(999)
return A.F(x,A.i(this.c,x,x,x,A.aH(x,x,v?B.u:w,x,x,x,x,x,x,x,x,11,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),B.r,x,x,new A.M(u,x,x,t,x,x,B.y),x,x,x,B.jS,x,x,x)}}
C.a2h.prototype={
u(d){var x=null,w=C.aiA()
return A.F(x,A.G(A.a([D.bVX,B.V,D.cb9,B.aD,A.i(this.c,x,x,x,B.e5,B.a5,x,x)],y.e),B.x,B.l,B.q,0,B.w),B.r,x,x,w,x,x,x,B.cP,x,x,x)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.a16,A.fv)
x(C.jq,A.J)
w(A.O,[C.a7X,C.a79,C.a2h])})()
A.bt(b.typeUniverse,JSON.parse('{"a7X":{"O":[],"e":[],"f":[]},"a79":{"O":[],"e":[],"f":[]},"a2h":{"O":[],"e":[],"f":[]}}'))
var y={e:A.w("r<e>"),c:A.w("a3<c,@>?")};(function constants(){var x=a.makeConstList
D.B6=new A.P(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,B.C)
D.Nu=new C.a16(0,"pendingPayment")
D.uN=new C.a16(1,"paid")
D.azA=new C.a16(2,"cancelled")
D.Ep=x([],A.w("r<jq>"))
D.bVX=new A.AD(B.jb,-0.016,48,null,null)
D.cb9=new A.B("Em breve",null,B.eL,null,null,null,null,null,null,null,null)})()};
(a=>{a["tUChdK28biBOcT6vh6clu5ae8Bs="]=a.current})($__dart_deferred_initializers__);