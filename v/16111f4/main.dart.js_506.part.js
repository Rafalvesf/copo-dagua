((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
dba(d,e){return null},
iA:function iA(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
i5:function i5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clu:function clu(){},
clt:function clt(d,e){this.a=d
this.b=e},
ckE:function ckE(){}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[78],B)
C=c[233]
B.iA.prototype={
gavr(){var x,w=this.r
if(w!=null){x=$.Z().b
x===$&&A.b()
x=x.gbK().e.a
x=x==null?null:x.r
w=w===(x==null?null:x.a)}else w=!1
return w},
gaF(d){return this.c}}
B.i5.prototype={
gaF(d){return this.b}}
var z=a.updateTypes(["H<a2<c,i5>>(ax,c)","bk?(w,F)"])
B.clu.prototype={
$1(d){return this.aAh(d)},
aAh(d){var x=0,w=A.n(y.c),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=$.Z()
n=o.b
n===$&&A.b()
u=n.gbK().e.a
if((u==null?null:u.r)==null){v=C.TK
x=1
break}x=3
return A.d(n.S("chat_groups").aP(0,"id, wedding_id, name, last_message, last_message_at, created_at, created_by").VQ(0,"last_message_at",!1,!1),$async$$1)
case 3:t=f
n=o.b.S("chat_group_members").aP(0,"group_id, last_read_at")
o=o.b.gbK().e.a
u=A.B(y.w,y.v)
m=s=y.y
l=J
x=4
return A.d(n.a0("profile_id",(o==null?null:o.r).a),$async$$1)
case 4:m,o=l.bA(f,s),n=A.r(o),o=new A.ap(o,o.gv(o),n.i("ap<a8.E>")),n=n.i("a8.E")
case 5:if(!o.p()){x=6
break}r=o.d
if(r==null)r=n.a(r)
q=J.a3(r)
p=A.a1(q.h(r,"group_id"))
u.j(0,p,q.h(r,"last_read_at")==null?null:A.df(A.a1(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.n)
for(n=J.bA(t,s),s=A.r(n),n=new A.ap(n,n.gv(n),s.i("ap<a8.E>")),s=s.i("a8.E");n.p();){r=n.d
if(r==null)r=s.a(r)
if(u.aD(0,J.h(r,"id")))o.push(new B.clt(r,u).$0())}v=o
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1206}
B.clt.prototype={
$0(){var x,w="last_message_at",v=this.a,u=J.a3(v),t=u.h(v,w)==null?A.df(A.a1(u.h(v,"created_at"))):A.df(A.a1(u.h(v,w))),s=this.b.h(0,u.h(v,"id")),r=A.a1(u.h(v,"id")),q=A.a1(u.h(v,"wedding_id")),p=A.a1(u.h(v,"name")),o=A.P(u.h(v,"last_message"))
if(u.h(v,w)!=null)x=s==null||t.ii(s)
else x=!1
return new B.iA(r,q,p,o,t,x,A.P(u.h(v,"created_by")))},
$S:453}
B.ckE.prototype={
$2(d,e){return this.aA8(d,e)},
aA8(d,e){var x=0,w=A.n(y.u),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:q=$.Z().b
q===$&&A.b()
u=y.w
t=y.b
s=A.B(u,y.j)
p=J
o=y.i
x=3
return A.d(q.bd("chat_group_people",A.R(["p_group_id",e],u,t),t),$async$$2)
case 3:q=p.bA(o.a(g),y.y),u=A.r(q),q=new A.ap(q,q.gv(q),u.i("ap<a8.E>")),u=u.i("a8.E")
case 4:if(!q.p()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a3(t)
s.j(0,A.a1(r.h(t,"profile_id")),new B.i5(A.a1(r.h(t,"profile_id")),A.a1(r.h(t,"full_name")),A.P(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0};(function installTearOffs(){var x=a._static_2
x(B,"ckF","dba",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.F,[B.iA,B.i5])
w(B.clu,A.bv)
w(B.clt,A.bI)
w(B.ckE,A.cD)})()
var y={j:A.v("i5"),n:A.v("q<iA>"),c:A.v("t<iA>"),i:A.v("t<@>"),u:A.v("a2<c,i5>"),y:A.v("a2<c,@>"),w:A.v("c"),b:A.v("@"),v:A.v("ao?")};(function constants(){var x=a.makeConstList
C.TK=x([],y.n)
C.TL=x([],A.v("q<i5>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"drM","Ww",()=>D.d4.$1$2$retry(new B.clu(),B.ckF(),y.c))
x($,"drp","ctn",()=>D.d4.Ub(0,new B.ckE(),B.ckF(),y.u,y.w))})()};
(a=>{a["aWFlRhiGe+cuRxUD5cPPXsRHAQE="]=a.current})($__dart_deferred_initializers__);