((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={h_:function h_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},cIi:function cIi(){},cIh:function cIh(d,e){this.a=d
this.b=e},cHi:function cHi(){},a_F:function a_F(d,e,f){this.c=d
this.d=e
this.a=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[84],B)
D=c[222]
B.h_.prototype={
gar(d){return this.b}}
B.a_F.prototype={
u(d){var x=null,w=A.X(999)
return A.fo(!1,C.aD,!0,x,A.eB(!1,w,!0,A.A(C.L,this.d?D.aIU:D.aEM,C.r,x,x,C.ck,x,44,x,x,x,x,44),x,!0,x,x,x,x,x,x,x,x,x,x,this.c,x,x,x,x,x,x,x),C.r,C.an,0,x,x,x,x,x,C.cC)}}
var z=a.updateTypes(["F<a5<c,h_>>(au,c)"])
B.cIi.prototype={
$1(d){return this.aFZ(d)},
aFZ(d){var x=0,w=A.n(y.c),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=$.S()
n=o.b
n===$&&A.b()
u=n.gbD().e.a
if((u==null?null:u.r)==null){v=D.WC
x=1
break}x=3
return A.d(n.R("chat_groups").az(0,"*").YM(0,"last_message_at",!1,!1),$async$$1)
case 3:t=f
n=o.b.R("chat_group_members").az(0,"group_id, last_read_at")
o=o.b.gbD().e.a
u=A.D(y.w,y.v)
m=s=y.y
l=J
x=4
return A.d(n.X("profile_id",(o==null?null:o.r).a),$async$$1)
case 4:m,o=l.bl(f,s),n=A.u(o),o=new A.ak(o,o.gA(o),n.i("ak<V.E>")),n=n.i("V.E")
case 5:if(!o.t()){x=6
break}r=o.d
if(r==null)r=n.a(r)
q=J.a7(r)
p=A.a2(q.h(r,"group_id"))
u.j(0,p,q.h(r,"last_read_at")==null?null:A.da(A.a2(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.n)
for(n=J.bl(t,s),s=A.u(n),n=new A.ak(n,n.gA(n),s.i("ak<V.E>")),s=s.i("V.E");n.t();){r=n.d
if(r==null)r=s.a(r)
if(u.aw(0,J.i(r,"id")))o.push(new B.cIh(r,u).$0())}v=o
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1356}
B.cIh.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a7(t),r=s.h(t,u)==null?A.da(A.a2(s.h(t,"created_at"))):A.da(A.a2(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.a2(s.h(t,"id")),o=A.E(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.a2(s.h(t,"name"))
w=A.E(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.h4(q)
else v=!1
return new A.i2(p,o,x,w,r,v,A.E(s.h(t,"created_by")),J.o(s.h(t,"is_direct"),!0),J.o(s.h(t,"is_event_all"),!0),A.E(s.h(t,"photo_url")),A.E(s.h(t,"description")))},
$S:474}
B.cHi.prototype={
$2(d,e){return this.aFP(d,e)},
aFP(d,e){var x=0,w=A.n(y.u),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:q=$.S().b
q===$&&A.b()
u=y.w
t=y.b
s=A.D(u,y.j)
p=J
o=y.i
x=3
return A.d(q.aT("chat_group_people",A.T(["p_group_id",e],u,t),t),$async$$2)
case 3:q=p.bl(o.a(g),y.y),u=A.u(q),q=new A.ak(q,q.gA(q),u.i("ak<V.E>")),u=u.i("V.E")
case 4:if(!q.t()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a7(t)
s.j(0,A.a2(r.h(t,"profile_id")),new B.h_(A.a2(r.h(t,"profile_id")),A.a2(r.h(t,"full_name")),A.E(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.h_,A.K)
x(B.cIi,A.bw)
x(B.cIh,A.bS)
x(B.cHi,A.cQ)
x(B.a_F,A.I)})()
A.bp(b.typeUniverse,JSON.parse('{"a_F":{"I":[],"e":[],"f":[]}}'))
var y={j:A.w("h_"),n:A.w("r<i2>"),c:A.w("t<i2>"),i:A.w("t<@>"),u:A.w("a5<c,h_>"),y:A.w("a5<c,@>"),w:A.w("c"),b:A.w("@"),v:A.w("ac?")};(function constants(){var x=a.makeConstList
D.aEM=new A.ba(C.eg,24,C.t,null,null,null)
D.aIU=new A.lE("M12 5v14M5 12h14",20,C.t,2.4,!1,C.cn,null)
D.WC=x([],y.n)
D.WF=x([],A.w("r<h_>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUT","Qe",()=>C.bW.$1$2$retry(new B.cIi(),A.aUN(),y.c))
x($,"dUv","a_v",()=>C.bW.N3(0,new B.cHi(),A.aUN(),y.u,y.w))})()};
(a=>{a["V2Onkcbwjcpdkdbq2FYn5tcxNlI="]=a.current})($__dart_deferred_initializers__);