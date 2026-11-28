((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={h_:function h_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},cJq:function cJq(){},cJp:function cJp(d,e){this.a=d
this.b=e},cIq:function cIq(){},a_Q:function a_Q(d,e,f){this.c=d
this.d=e
this.a=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[84],B)
D=c[226]
B.h_.prototype={
gaq(d){return this.b}}
B.a_Q.prototype={
u(d){var x=null,w=A.X(999)
return A.fo(!1,C.aD,!0,x,A.eC(!1,w,!0,A.B(C.L,this.d?D.aIQ:D.aEK,C.r,x,x,C.cg,x,44,x,x,x,x,44),x,!0,x,x,x,x,x,x,x,x,x,x,this.c,x,x,x,x,x,x,x),C.r,C.ap,0,x,x,x,x,x,C.cC)}}
var z=a.updateTypes(["F<a5<c,h_>>(au,c)"])
B.cJq.prototype={
$1(d){return this.aGi(d)},
aGi(d){var x=0,w=A.n(y.c),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=$.S()
n=o.b
n===$&&A.b()
u=n.gbD().e.a
if((u==null?null:u.r)==null){v=D.WF
x=1
break}x=3
return A.d(n.R("chat_groups").ao(0,"*").Z0(0,"last_message_at",!1,!1),$async$$1)
case 3:t=f
n=o.b.R("chat_group_members").ao(0,"group_id, last_read_at")
o=o.b.gbD().e.a
u=A.E(y.w,y.v)
m=s=y.y
l=J
x=4
return A.d(n.W("profile_id",(o==null?null:o.r).a),$async$$1)
case 4:m,o=l.bl(f,s),n=A.u(o),o=new A.al(o,o.gA(o),n.i("al<V.E>")),n=n.i("V.E")
case 5:if(!o.t()){x=6
break}r=o.d
if(r==null)r=n.a(r)
q=J.a7(r)
p=A.a1(q.h(r,"group_id"))
u.j(0,p,q.h(r,"last_read_at")==null?null:A.db(A.a1(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.n)
for(n=J.bl(t,s),s=A.u(n),n=new A.al(n,n.gA(n),s.i("al<V.E>")),s=s.i("V.E");n.t();){r=n.d
if(r==null)r=s.a(r)
if(u.az(0,J.i(r,"id")))o.push(new B.cJp(r,u).$0())}v=o
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1352}
B.cJp.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a7(t),r=s.h(t,u)==null?A.db(A.a1(s.h(t,"created_at"))):A.db(A.a1(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.a1(s.h(t,"id")),o=A.D(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.a1(s.h(t,"name"))
w=A.D(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.h5(q)
else v=!1
return new A.i2(p,o,x,w,r,v,A.D(s.h(t,"created_by")),J.o(s.h(t,"is_direct"),!0),J.o(s.h(t,"is_event_all"),!0),A.D(s.h(t,"photo_url")),A.D(s.h(t,"description")))},
$S:402}
B.cIq.prototype={
$2(d,e){return this.aG8(d,e)},
aG8(d,e){var x=0,w=A.n(y.u),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:q=$.S().b
q===$&&A.b()
u=y.w
t=y.b
s=A.E(u,y.j)
p=J
o=y.i
x=3
return A.d(q.aM("chat_group_people",A.T(["p_group_id",e],u,t),t),$async$$2)
case 3:q=p.bl(o.a(g),y.y),u=A.u(q),q=new A.al(q,q.gA(q),u.i("al<V.E>")),u=u.i("V.E")
case 4:if(!q.t()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a7(t)
s.j(0,A.a1(r.h(t,"profile_id")),new B.h_(A.a1(r.h(t,"profile_id")),A.a1(r.h(t,"full_name")),A.D(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.h_,A.J)
x(B.cJq,A.bw)
x(B.cJp,A.bQ)
x(B.cIq,A.cO)
x(B.a_Q,A.H)})()
A.bn(b.typeUniverse,JSON.parse('{"a_Q":{"H":[],"e":[],"f":[]}}'))
var y={j:A.w("h_"),n:A.w("r<i2>"),c:A.w("t<i2>"),i:A.w("t<@>"),u:A.w("a5<c,h_>"),y:A.w("a5<c,@>"),w:A.w("c"),b:A.w("@"),v:A.w("ad?")};(function constants(){var x=a.makeConstList
D.aEK=new A.b7(C.eh,24,C.t,null,null,null)
D.aIQ=new A.mU("M12 5v14M5 12h14",20,C.t,2.4,!1,C.cB,null)
D.WF=x([],y.n)
D.WH=x([],A.w("r<h_>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dW6","Ql",()=>C.bX.$1$2$retry(new B.cJq(),A.aV_(),y.c))
x($,"dVJ","a_G",()=>C.bX.Ng(0,new B.cIq(),A.aV_(),y.u,y.w))})()};
(a=>{a["kuX3lzHHZgkCShYfHIopI6hr/Jo="]=a.current})($__dart_deferred_initializers__);