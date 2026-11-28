((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={fZ:function fZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},cGO:function cGO(){},cGN:function cGN(d,e){this.a=d
this.b=e},cFO:function cFO(){},a_q:function a_q(d,e,f){this.c=d
this.d=e
this.a=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[82],B)
D=c[219]
B.fZ.prototype={
gap(d){return this.b}}
B.a_q.prototype={
u(d){var x=null,w=A.a1(999)
return A.fo(!1,C.aD,!0,x,A.eJ(!1,w,!0,A.E(C.K,this.d?D.aIa:D.aE8,C.r,x,x,C.cG,x,44,x,x,x,x,44),x,!0,x,x,x,x,x,x,x,x,x,x,this.c,x,x,x,x,x,x,x),C.r,C.am,0,x,x,x,x,x,C.cx)}}
var z=a.updateTypes(["F<a4<c,fZ>>(au,c)"])
B.cGO.prototype={
$1(d){return this.aFO(d)},
aFO(d){var x=0,w=A.n(y.c),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=$.T()
n=o.b
n===$&&A.b()
u=n.gbE().e.a
if((u==null?null:u.r)==null){v=D.Wf
x=1
break}x=3
return A.d(n.R("chat_groups").az(0,"*").YJ(0,"last_message_at",!1,!1),$async$$1)
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
q=J.a6(r)
p=A.a0(q.h(r,"group_id"))
u.j(0,p,q.h(r,"last_read_at")==null?null:A.d8(A.a0(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.n)
for(n=J.bk(t,s),s=A.u(n),n=new A.ak(n,n.gA(n),s.i("ak<U.E>")),s=s.i("U.E");n.t();){r=n.d
if(r==null)r=s.a(r)
if(u.aw(0,J.h(r,"id")))o.push(new B.cGN(r,u).$0())}v=o
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1354}
B.cGN.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a6(t),r=s.h(t,u)==null?A.d8(A.a0(s.h(t,"created_at"))):A.d8(A.a0(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.a0(s.h(t,"id")),o=A.B(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.a0(s.h(t,"name"))
w=A.B(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.hm(q)
else v=!1
return new A.i1(p,o,x,w,r,v,A.B(s.h(t,"created_by")),J.o(s.h(t,"is_direct"),!0),J.o(s.h(t,"is_event_all"),!0),A.B(s.h(t,"photo_url")),A.B(s.h(t,"description")))},
$S:472}
B.cFO.prototype={
$2(d,e){return this.aFE(d,e)},
aFE(d,e){var x=0,w=A.n(y.u),v,u,t,s,r,q,p,o
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
r=J.a6(t)
s.j(0,A.a0(r.h(t,"profile_id")),new B.fZ(A.a0(r.h(t,"profile_id")),A.a0(r.h(t,"full_name")),A.B(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.fZ,A.H)
x(B.cGO,A.bx)
x(B.cGN,A.bR)
x(B.cFO,A.cR)
x(B.a_q,A.L)})()
A.bs(b.typeUniverse,JSON.parse('{"a_q":{"L":[],"e":[],"f":[]}}'))
var y={j:A.w("fZ"),n:A.w("r<i1>"),c:A.w("t<i1>"),i:A.w("t<@>"),u:A.w("a4<c,fZ>"),y:A.w("a4<c,@>"),w:A.w("c"),b:A.w("@"),v:A.w("ae?")};(function constants(){var x=a.makeConstList
D.aE8=new A.ba(C.ed,24,C.t,null,null,null)
D.aIa=new A.qM("M12 5v14M5 12h14",20,C.t,2.4,!1,C.d0,null)
D.Wf=x([],y.n)
D.Wh=x([],A.w("r<fZ>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dT2","Q4",()=>C.bT.$1$2$retry(new B.cGO(),A.aU8(),y.c))
x($,"dSF","a_g",()=>C.bT.N3(0,new B.cFO(),A.aU8(),y.u,y.w))})()};
(a=>{a["VfIgdnEY/AH3bLgb/uoT5EK7b0I="]=a.current})($__dart_deferred_initializers__);