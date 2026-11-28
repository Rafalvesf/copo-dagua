((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={fY:function fY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},cKE:function cKE(){},cKD:function cKD(d,e){this.a=d
this.b=e},cJz:function cJz(){},a_T:function a_T(d,e,f){this.c=d
this.d=e
this.a=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[84],B)
D=c[226]
B.fY.prototype={
gao(d){return this.b}}
B.a_T.prototype={
u(d){var x=null,w=A.W(999)
return A.fq(!1,C.aE,!0,x,A.eC(!1,w,!0,A.B(C.L,this.d?D.aIX:D.aER,C.r,x,x,C.cg,x,44,x,x,x,x,44),x,!0,x,x,x,x,x,x,x,x,x,x,this.c,x,x,x,x,x,x,x),C.r,C.ap,0,x,x,x,x,x,C.cD)}}
var z=a.updateTypes(["F<a5<c,fY>>(av,c)"])
B.cKE.prototype={
$1(d){return this.aGy(d)},
aGy(d){var x=0,w=A.n(y.c),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=$.R()
n=o.b
n===$&&A.b()
u=n.gbB().e.a
if((u==null?null:u.r)==null){v=D.rf
x=1
break}x=3
return A.d(n.R("chat_groups").am(0,"*").Zc(0,"last_message_at",!1,!1),$async$$1)
case 3:t=f
n=o.b.R("chat_group_members").am(0,"group_id, last_read_at")
o=o.b.gbB().e.a
u=A.E(y.w,y.v)
m=s=y.y
l=J
x=4
return A.d(n.V("profile_id",(o==null?null:o.r).a),$async$$1)
case 4:m,o=l.bh(f,s),n=A.u(o),o=new A.al(o,o.gA(o),n.i("al<V.E>")),n=n.i("V.E")
case 5:if(!o.t()){x=6
break}r=o.d
if(r==null)r=n.a(r)
q=J.a7(r)
p=A.a_(q.h(r,"group_id"))
u.j(0,p,q.h(r,"last_read_at")==null?null:A.dc(A.a_(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.n)
for(n=J.bh(t,s),s=A.u(n),n=new A.al(n,n.gA(n),s.i("al<V.E>")),s=s.i("V.E");n.t();){r=n.d
if(r==null)r=s.a(r)
if(u.aw(0,J.i(r,"id")))o.push(new B.cKD(r,u).$0())}v=o
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1356}
B.cKD.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a7(t),r=s.h(t,u)==null?A.dc(A.a_(s.h(t,"created_at"))):A.dc(A.a_(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.a_(s.h(t,"id")),o=A.C(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.a_(s.h(t,"name"))
w=A.C(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.h5(q)
else v=!1
return new A.hV(p,o,x,w,r,v,A.C(s.h(t,"created_by")),J.o(s.h(t,"is_direct"),!0),J.o(s.h(t,"is_event_all"),!0),A.C(s.h(t,"photo_url")),A.C(s.h(t,"description")))},
$S:341}
B.cJz.prototype={
$2(d,e){return this.aGo(d,e)},
aGo(d,e){var x=0,w=A.n(y.u),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:q=$.R().b
q===$&&A.b()
u=y.w
t=y.b
s=A.E(u,y.j)
p=J
o=y.i
x=3
return A.d(q.aM("chat_group_people",A.T(["p_group_id",e],u,t),t),$async$$2)
case 3:q=p.bh(o.a(g),y.y),u=A.u(q),q=new A.al(q,q.gA(q),u.i("al<V.E>")),u=u.i("V.E")
case 4:if(!q.t()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a7(t)
s.j(0,A.a_(r.h(t,"profile_id")),new B.fY(A.a_(r.h(t,"profile_id")),A.a_(r.h(t,"full_name")),A.C(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.fY,A.K)
x(B.cKE,A.by)
x(B.cKD,A.bR)
x(B.cJz,A.cN)
x(B.a_T,A.I)})()
A.bq(b.typeUniverse,JSON.parse('{"a_T":{"I":[],"e":[],"f":[]}}'))
var y={j:A.w("fY"),n:A.w("r<hV>"),c:A.w("t<hV>"),i:A.w("t<@>"),u:A.w("a5<c,fY>"),y:A.w("a5<c,@>"),w:A.w("c"),b:A.w("@"),v:A.w("ad?")};(function constants(){var x=a.makeConstList
D.aER=new A.b7(C.el,24,C.t,null,null,null)
D.aIX=new A.mU("M12 5v14M5 12h14",20,C.t,2.4,!1,C.cC,null)
D.rf=x([],y.n)
D.FK=x([],A.w("r<fY>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXy","Qt",()=>C.bX.$1$2$retry(new B.cKE(),A.aVb(),y.c))
x($,"dXa","Qs",()=>C.bX.Nk(0,new B.cJz(),A.aVb(),y.u,y.w))})()};
(a=>{a["TB1C1gZybX+I42snY7Xi/lLy6uc="]=a.current})($__dart_deferred_initializers__);