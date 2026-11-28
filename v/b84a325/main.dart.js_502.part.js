((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={fZ:function fZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},cGX:function cGX(){},cGW:function cGW(d,e){this.a=d
this.b=e},cFX:function cFX(){},a_s:function a_s(d,e,f){this.c=d
this.d=e
this.a=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[82],B)
D=c[220]
B.fZ.prototype={
gaq(d){return this.b}}
B.a_s.prototype={
u(d){var x=null,w=A.a0(999)
return A.fn(!1,C.aE,!0,x,A.eF(!1,w,!0,A.D(C.L,this.d?D.aIe:D.aEc,C.r,x,x,C.cG,x,44,x,x,x,x,44),x,!0,x,x,x,x,x,x,x,x,x,x,this.c,x,x,x,x,x,x,x),C.r,C.an,0,x,x,x,x,x,C.cx)}}
var z=a.updateTypes(["F<a4<c,fZ>>(av,c)"])
B.cGX.prototype={
$1(d){return this.aFI(d)},
aFI(d){var x=0,w=A.n(y.c),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=$.T()
n=o.b
n===$&&A.b()
u=n.gbE().e.a
if((u==null?null:u.r)==null){v=D.Wi
x=1
break}x=3
return A.d(n.R("chat_groups").az(0,"*").YE(0,"last_message_at",!1,!1),$async$$1)
case 3:t=f
n=o.b.R("chat_group_members").az(0,"group_id, last_read_at")
o=o.b.gbE().e.a
u=A.A(y.w,y.v)
m=s=y.y
l=J
x=4
return A.d(n.W("profile_id",(o==null?null:o.r).a),$async$$1)
case 4:m,o=l.bk(f,s),n=A.u(o),o=new A.ak(o,o.gA(o),n.i("ak<U.E>")),n=n.i("U.E")
case 5:if(!o.t()){x=6
break}r=o.d
if(r==null)r=n.a(r)
q=J.a7(r)
p=A.a1(q.h(r,"group_id"))
u.j(0,p,q.h(r,"last_read_at")==null?null:A.d9(A.a1(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.n)
for(n=J.bk(t,s),s=A.u(n),n=new A.ak(n,n.gA(n),s.i("ak<U.E>")),s=s.i("U.E");n.t();){r=n.d
if(r==null)r=s.a(r)
if(u.aw(0,J.h(r,"id")))o.push(new B.cGW(r,u).$0())}v=o
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1357}
B.cGW.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a7(t),r=s.h(t,u)==null?A.d9(A.a1(s.h(t,"created_at"))):A.d9(A.a1(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.a1(s.h(t,"id")),o=A.C(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.a1(s.h(t,"name"))
w=A.C(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.hk(q)
else v=!1
return new A.i1(p,o,x,w,r,v,A.C(s.h(t,"created_by")),J.o(s.h(t,"is_direct"),!0),J.o(s.h(t,"is_event_all"),!0),A.C(s.h(t,"photo_url")),A.C(s.h(t,"description")))},
$S:473}
B.cFX.prototype={
$2(d,e){return this.aFy(d,e)},
aFy(d,e){var x=0,w=A.n(y.u),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:q=$.T().b
q===$&&A.b()
u=y.w
t=y.b
s=A.A(u,y.j)
p=J
o=y.i
x=3
return A.d(q.aT("chat_group_people",A.S(["p_group_id",e],u,t),t),$async$$2)
case 3:q=p.bk(o.a(g),y.y),u=A.u(q),q=new A.ak(q,q.gA(q),u.i("ak<U.E>")),u=u.i("U.E")
case 4:if(!q.t()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a7(t)
s.j(0,A.a1(r.h(t,"profile_id")),new B.fZ(A.a1(r.h(t,"profile_id")),A.a1(r.h(t,"full_name")),A.C(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.fZ,A.I)
x(B.cGX,A.bx)
x(B.cGW,A.bR)
x(B.cFX,A.cR)
x(B.a_s,A.L)})()
A.bq(b.typeUniverse,JSON.parse('{"a_s":{"L":[],"e":[],"f":[]}}'))
var y={j:A.w("fZ"),n:A.w("r<i1>"),c:A.w("t<i1>"),i:A.w("t<@>"),u:A.w("a4<c,fZ>"),y:A.w("a4<c,@>"),w:A.w("c"),b:A.w("@"),v:A.w("ae?")};(function constants(){var x=a.makeConstList
D.aEc=new A.ba(C.ee,24,C.t,null,null,null)
D.aIe=new A.qO("M12 5v14M5 12h14",20,C.t,2.4,!1,C.cZ,null)
D.Wi=x([],y.n)
D.Wk=x([],A.w("r<fZ>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTa","Q4",()=>C.bU.$1$2$retry(new B.cGX(),A.aUd(),y.c))
x($,"dSN","a_i",()=>C.bU.MX(0,new B.cFX(),A.aUd(),y.u,y.w))})()};
(a=>{a["RhnAy/6MBxjx1S+Oz8STtBUa5PY="]=a.current})($__dart_deferred_initializers__);