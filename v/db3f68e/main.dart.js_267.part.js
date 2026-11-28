((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dCC(d){var x
switch(d){case"paid":x=D.vc
break
case"cancelled":x=D.aBA
break
default:x=D.OJ
break}return x},
d0a(d){var x,w,v,u,t,s,r,q=null,p=J.a7(d),o=y.k.a(p.h(d,"guest_offers")),n=A.a1(p.h(d,"id"))
A.C(p.h(d,"offer_id"))
x=p.h(d,"offer_title")
if(x==null)x=o==null?q:J.h(o,"title")
A.C(x)
if(x==null)x=""
w=p.h(d,"kind")
if(w==null)w=o==null?q:J.h(o,"kind")
w=A.C(w)==="transport"?C.qq:C.eb
v=A.C(p.h(d,"guest_name"))
u=A.C(p.h(d,"guest_avatar_url"))
t=A.aK(p.h(d,"quantity"))
t=t==null?q:C.k.F(t)
if(t==null)t=1
s=A.aK(p.h(d,"nights"))
s=s==null?q:C.k.F(s)
if(s==null)s=1
A.aK(p.h(d,"amount"))
r=B.dCC(A.C(p.h(d,"status")))
p=A.C(p.h(d,"created_at"))
p=A.dK(p==null?"":p)
p=p==null?q:p.eh()
return new B.jC(n,x,w,v,u,t,s,r,p==null?new A.ae(Date.now(),0,!1):p)},
a2U:function a2U(d,e){this.a=d
this.b=e},
jC:function jC(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.y=k
_.z=l},
cJd:function cJd(){},
akQ(){var x=A.a0(22),w=$.ap.cd(0.45)
return new A.O(C.t,null,A.bV(w,1),x,C.bb,null,C.y)},
al5(d){return""+A.aN(d)+" "+C.co[A.ay(d)-1]},
daC(d){var x,w,v
if(d.b===C.eb&&d.r!=null){x=d.w
w=d.r
if(x==null){w.toString
x="A partir de "+B.al5(w)}else{w.toString
x=B.al5(w)+" a "+B.al5(x)}return x}v=d.x
if(v==null)return null
return B.al5(v)+" \xb7 "+C.f.aW(C.i.k(A.hK(v)),2,"0")+":"+C.f.aW(C.i.k(A.ht(v)),2,"0")},
a9N:function a9N(d,e){this.c=d
this.a=e},
a8Z:function a8Z(d,e,f){this.c=d
this.d=e
this.a=f},
a44:function a44(d,e){this.c=d
this.a=e}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[74],B)
D=c[194]
B.a2U.prototype={
I(){return"GuestReservationStatus."+this.b}}
B.jC.prototype={
guj(){var x,w=this.d,v=this.r,u=""+v
if(w===C.eb){w=v===1?w.e:w.f
v=this.w
x=v===1?"noite":"noites"
x=u+" "+w+" \xb7 "+v+" "+x
w=x}else{w=v===1?w.e:w.f
w=u+" "+w}return w}}
B.a9N.prototype={
u(d){return new A.l1(this.c,6,null,null,null)}}
B.a8Z.prototype={
u(d){var x=null,w=$.ap,v=this.d,u=v?w:w.cd(0.14),t=A.a0(999)
return A.D(x,A.i(this.c,x,x,x,x,A.aG(x,x,v?C.t:w,x,x,x,x,x,x,x,x,11,x,x,C.J,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.O(u,x,x,t,x,x,C.y),x,x,x,C.nn,x,x,x)}}
B.a44.prototype={
u(d){var x=null,w=B.akQ()
return A.D(x,A.B(A.a([D.c_o,C.P,D.cg0,C.aF,A.i(this.c,x,x,x,x,C.dt,C.a5,x,x)],y.e),C.w,C.j,C.m,0,C.v),C.r,x,x,w,x,x,x,C.cY,x,x,x)}}
var z=a.updateTypes([])
B.cJd.prototype={
$1(d){return this.aGI(d)},
aGI(d){var x=0,w=A.n(y.b),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.T().b
u===$&&A.b()
t=A
s=J
x=3
return A.d(u.R("platform_settings").az(0,"platform_commission_percentage").W("id",1).dP(0),$async$$1)
case 3:v=t.dt(s.h(f,"platform_commission_percentage"))
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:157};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.a2U,A.fr)
x(B.jC,A.I)
x(B.cJd,A.bx)
w(A.L,[B.a9N,B.a8Z,B.a44])})()
A.br(b.typeUniverse,JSON.parse('{"a9N":{"L":[],"e":[],"f":[]},"a8Z":{"L":[],"e":[],"f":[]},"a44":{"L":[],"e":[],"f":[]}}'))
var y={e:A.w("r<e>"),b:A.w("P"),k:A.w("a4<c,@>?")};(function constants(){var x=a.makeConstList
D.BS=new A.W(1,0.9647058823529412,0.8901960784313725,0.8745098039215686,C.C)
D.OJ=new B.a2U(0,"pendingPayment")
D.vc=new B.a2U(1,"paid")
D.aBA=new B.a2U(2,"cancelled")
D.Fk=x([],A.w("r<jC>"))
D.c_o=new A.MR(C.nM,-0.016,48,null)
D.cg0=new A.E("Em breve",null,C.ej,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUe","cQ1",()=>A.eE(new B.cJd(),null,!1,null,null,y.b))})()};
(a=>{a["8fHlz98jdRODFupZzul+6BDo9sk="]=a.current})($__dart_deferred_initializers__);