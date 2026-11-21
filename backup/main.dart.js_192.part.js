((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B={
cJt(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="created_at",i="partner_response_at",h="wedding_date",g=J.a5(a0),f=y.c,e=f.a(g.h(a0,"events")),d=f.a(g.h(a0,"profiles"))
f=e==null
x=A.M(f?k:J.h(e,"partner_name_1"))
w=A.M(f?k:J.h(e,"partner_name_2"))
if(x==null||x.length===0)v="Casal"
else v=w==null||w.length===0?x:x+" & "+w
u=A.a2(g.h(a0,"id"))
A.a2(g.h(a0,"booking_id"))
A.a2(g.h(a0,"partner_id"))
t=A.cq(g.h(a0,"rating"))
s=A.M(g.h(a0,"comment"))
r=A.dc(A.a2(g.h(a0,j)))
q=A.M(g.h(a0,"partner_response"))
p=g.h(a0,i)==null?k:A.dc(A.a2(g.h(a0,i)))
o=A.M(g.h(a0,"status"))
if(o==null)o="published"
n=A.M(f?k:J.h(e,"cover_photo_url"))
if((d==null?k:J.h(d,j))==null)g=A.dc(A.a2(g.h(a0,j)))
else{d.toString
g=A.dc(A.a2(J.h(d,j)))}if((f?k:J.h(e,h))==null)m=k
else{e.toString
m=A.dc(A.a2(J.h(e,h)))}l=A.M(f?k:J.h(e,"location"))
return new B.eV(u,t,s,r,q,p,o,v,n,g,m,l,A.eB(f?k:J.h(e,"estimated_guests")))},
eV:function eV(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.at=o
_.ax=p}}
J=c[1]
A=c[0]
B=a.updateHolder(c[164],B)
B.eV.prototype={}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.eV,A.K)})()
var y={c:A.w("a3<c,@>?")}};
(a=>{a["7vL1okrC2DOgp2zMpwy4IaBARfc="]=a.current})($__dart_deferred_initializers__);