((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={fY:function fY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},cKZ:function cKZ(){},cKY:function cKY(d,e){this.a=d
this.b=e},cJU:function cJU(){},a_S:function a_S(d,e,f){this.c=d
this.d=e
this.a=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[84],B)
D=c[226]
B.fY.prototype={
gao(d){return this.b}}
B.a_S.prototype={
u(d){var x=null,w=A.V(999)
return A.fq(!1,C.aE,!0,x,A.eC(!1,w,!0,A.z(C.L,this.d?D.aJ0:D.aEW,C.r,x,x,C.cg,x,44,x,x,x,x,44),x,!0,x,x,x,x,x,x,x,x,x,x,this.c,x,x,x,x,x,x,x),C.r,C.ao,0,x,x,x,x,x,C.cE)}}
var z=a.updateTypes(["F<a5<c,fY>>(av,c)"])
B.cKZ.prototype={
$1(d){return this.aGC(d)},
aGC(d){var x=0,w=A.n(y.c),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=$.R()
n=o.b
n===$&&A.b()
u=n.gbA().e.a
if((u==null?null:u.r)==null){v=D.rf
x=1
break}x=3
return A.d(n.P("chat_groups").am(0,"*").Zf(0,"last_message_at",!1,!1),$async$$1)
case 3:t=f
n=o.b.P("chat_group_members").am(0,"group_id, last_read_at")
o=o.b.gbA().e.a
u=A.E(y.w,y.v)
m=s=y.y
l=J
x=4
return A.d(n.V("profile_id",(o==null?null:o.r).a),$async$$1)
case 4:m,o=l.bh(f,s),n=A.u(o),o=new A.al(o,o.gA(o),n.i("al<W.E>")),n=n.i("W.E")
case 5:if(!o.t()){x=6
break}r=o.d
if(r==null)r=n.a(r)
q=J.a7(r)
p=A.a0(q.h(r,"group_id"))
u.j(0,p,q.h(r,"last_read_at")==null?null:A.dc(A.a0(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.n)
for(n=J.bh(t,s),s=A.u(n),n=new A.al(n,n.gA(n),s.i("al<W.E>")),s=s.i("W.E");n.t();){r=n.d
if(r==null)r=s.a(r)
if(u.aw(0,J.i(r,"id")))o.push(new B.cKY(r,u).$0())}v=o
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1358}
B.cKY.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a7(t),r=s.h(t,u)==null?A.dc(A.a0(s.h(t,"created_at"))):A.dc(A.a0(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.a0(s.h(t,"id")),o=A.C(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.a0(s.h(t,"name"))
w=A.C(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.fP(q)
else v=!1
return new A.hV(p,o,x,w,r,v,A.C(s.h(t,"created_by")),J.o(s.h(t,"is_direct"),!0),J.o(s.h(t,"is_event_all"),!0),A.C(s.h(t,"photo_url")),A.C(s.h(t,"description")))},
$S:342}
B.cJU.prototype={
$2(d,e){return this.aGs(d,e)},
aGs(d,e){var x=0,w=A.n(y.u),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:q=$.R().b
q===$&&A.b()
u=y.w
t=y.b
s=A.E(u,y.j)
p=J
o=y.i
x=3
return A.d(q.aL("chat_group_people",A.T(["p_group_id",e],u,t),t),$async$$2)
case 3:q=p.bh(o.a(g),y.y),u=A.u(q),q=new A.al(q,q.gA(q),u.i("al<W.E>")),u=u.i("W.E")
case 4:if(!q.t()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a7(t)
s.j(0,A.a0(r.h(t,"profile_id")),new B.fY(A.a0(r.h(t,"profile_id")),A.a0(r.h(t,"full_name")),A.C(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.fY,A.L)
x(B.cKZ,A.bz)
x(B.cKY,A.bR)
x(B.cJU,A.cN)
x(B.a_S,A.J)})()
A.bq(b.typeUniverse,JSON.parse('{"a_S":{"J":[],"e":[],"f":[]}}'))
var y={j:A.w("fY"),n:A.w("r<hV>"),c:A.w("t<hV>"),i:A.w("t<@>"),u:A.w("a5<c,fY>"),y:A.w("a5<c,@>"),w:A.w("c"),b:A.w("@"),v:A.w("ac?")};(function constants(){var x=a.makeConstList
D.aEW=new A.b7(C.el,24,C.t,null,null,null)
D.aJ0=new A.mU("M12 5v14M5 12h14",20,C.t,2.4,!1,C.cD,null)
D.rf=x([],y.n)
D.FK=x([],A.w("r<fY>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXU","Qw",()=>C.bY.$1$2$retry(new B.cKZ(),A.aVe(),y.c))
x($,"dXw","Qv",()=>C.bY.Nl(0,new B.cJU(),A.aVe(),y.u,y.w))})()};
(a=>{a["JFpqI9AZ1Z5HPg4d3zAKzNuQoyc="]=a.current})($__dart_deferred_initializers__);