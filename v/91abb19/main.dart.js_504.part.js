((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={fZ:function fZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},cHM:function cHM(){},cHL:function cHL(d,e){this.a=d
this.b=e},cGM:function cGM(){},a_x:function a_x(d,e,f){this.c=d
this.d=e
this.a=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[83],B)
D=c[222]
B.fZ.prototype={
gaq(d){return this.b}}
B.a_x.prototype={
u(d){var x=null,w=A.Y(999)
return A.fo(!1,C.aD,!0,x,A.eF(!1,w,!0,A.A(C.L,this.d?D.aIO:D.aEH,C.r,x,x,C.cu,x,44,x,x,x,x,44),x,!0,x,x,x,x,x,x,x,x,x,x,this.c,x,x,x,x,x,x,x),C.r,C.ao,0,x,x,x,x,x,C.cB)}}
var z=a.updateTypes(["F<a4<c,fZ>>(au,c)"])
B.cHM.prototype={
$1(d){return this.aFU(d)},
aFU(d){var x=0,w=A.n(y.c),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=$.T()
n=o.b
n===$&&A.b()
u=n.gbE().e.a
if((u==null?null:u.r)==null){v=D.Wy
x=1
break}x=3
return A.d(n.R("chat_groups").az(0,"*").YJ(0,"last_message_at",!1,!1),$async$$1)
case 3:t=f
n=o.b.R("chat_group_members").az(0,"group_id, last_read_at")
o=o.b.gbE().e.a
u=A.C(y.w,y.v)
m=s=y.y
l=J
x=4
return A.d(n.X("profile_id",(o==null?null:o.r).a),$async$$1)
case 4:m,o=l.bl(f,s),n=A.u(o),o=new A.ak(o,o.gA(o),n.i("ak<U.E>")),n=n.i("U.E")
case 5:if(!o.t()){x=6
break}r=o.d
if(r==null)r=n.a(r)
q=J.a7(r)
p=A.a2(q.h(r,"group_id"))
u.j(0,p,q.h(r,"last_read_at")==null?null:A.d9(A.a2(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.n)
for(n=J.bl(t,s),s=A.u(n),n=new A.ak(n,n.gA(n),s.i("ak<U.E>")),s=s.i("U.E");n.t();){r=n.d
if(r==null)r=s.a(r)
if(u.aw(0,J.i(r,"id")))o.push(new B.cHL(r,u).$0())}v=o
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1356}
B.cHL.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a7(t),r=s.h(t,u)==null?A.d9(A.a2(s.h(t,"created_at"))):A.d9(A.a2(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.a2(s.h(t,"id")),o=A.E(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.a2(s.h(t,"name"))
w=A.E(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.hk(q)
else v=!1
return new A.i2(p,o,x,w,r,v,A.E(s.h(t,"created_by")),J.o(s.h(t,"is_direct"),!0),J.o(s.h(t,"is_event_all"),!0),A.E(s.h(t,"photo_url")),A.E(s.h(t,"description")))},
$S:338}
B.cGM.prototype={
$2(d,e){return this.aFK(d,e)},
aFK(d,e){var x=0,w=A.n(y.u),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:q=$.T().b
q===$&&A.b()
u=y.w
t=y.b
s=A.C(u,y.j)
p=J
o=y.i
x=3
return A.d(q.aT("chat_group_people",A.S(["p_group_id",e],u,t),t),$async$$2)
case 3:q=p.bl(o.a(g),y.y),u=A.u(q),q=new A.ak(q,q.gA(q),u.i("ak<U.E>")),u=u.i("U.E")
case 4:if(!q.t()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a7(t)
s.j(0,A.a2(r.h(t,"profile_id")),new B.fZ(A.a2(r.h(t,"profile_id")),A.a2(r.h(t,"full_name")),A.E(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.fZ,A.J)
x(B.cHM,A.bx)
x(B.cHL,A.bT)
x(B.cGM,A.cQ)
x(B.a_x,A.L)})()
A.bq(b.typeUniverse,JSON.parse('{"a_x":{"L":[],"e":[],"f":[]}}'))
var y={j:A.w("fZ"),n:A.w("r<i2>"),c:A.w("t<i2>"),i:A.w("t<@>"),u:A.w("a4<c,fZ>"),y:A.w("a4<c,@>"),w:A.w("c"),b:A.w("@"),v:A.w("ad?")};(function constants(){var x=a.makeConstList
D.aEH=new A.b9(C.ee,24,C.t,null,null,null)
D.aIO=new A.lE("M12 5v14M5 12h14",20,C.t,2.4,!1,C.cm,null)
D.Wy=x([],y.n)
D.WB=x([],A.w("r<fZ>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUa","Qb",()=>C.bW.$1$2$retry(new B.cHM(),A.aUv(),y.c))
x($,"dTN","a_n",()=>C.bW.N0(0,new B.cGM(),A.aUv(),y.u,y.w))})()};
(a=>{a["SWJrrfJ1gt/ALh2VeXr1qknnMbc="]=a.current})($__dart_deferred_initializers__);