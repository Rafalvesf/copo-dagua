((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={fW:function fW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},cD2:function cD2(){},cD1:function cD1(d,e){this.a=d
this.b=e},cC7:function cC7(){},ZH:function ZH(d,e,f){this.c=d
this.d=e
this.a=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[79],B)
D=c[212]
B.fW.prototype={
gar(d){return this.b}}
B.ZH.prototype={
v(d){var x=null,w=A.a2(999)
return A.fR(!1,C.aE,!0,x,A.eR(!1,w,!0,A.C(C.K,this.d?D.aGC:D.aCC,C.r,x,x,C.cE,x,44,x,x,x,x,44),x,!0,x,x,x,x,x,x,x,x,x,x,this.c,x,x,x,x,x,x,x),C.r,C.ak,0,x,x,x,x,x,C.cV)}}
var z=a.updateTypes(["F<a4<c,fW>>(au,c)"])
B.cD2.prototype={
$1(d){return this.aEY(d)},
aEY(d){var x=0,w=A.n(y.c),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=$.T()
n=o.b
n===$&&A.b()
u=n.gbE().e.a
if((u==null?null:u.r)==null){v=D.Vs
x=1
break}x=3
return A.d(n.P("chat_groups").aw(0,"*").Yd(0,"last_message_at",!1,!1),$async$$1)
case 3:t=f
n=o.b.P("chat_group_members").aw(0,"group_id, last_read_at")
o=o.b.gbE().e.a
u=A.A(y.w,y.v)
m=s=y.y
l=J
x=4
return A.d(n.W("profile_id",(o==null?null:o.r).a),$async$$1)
case 4:m,o=l.bo(f,s),n=A.u(o),o=new A.ai(o,o.gA(o),n.i("ai<U.E>")),n=n.i("U.E")
case 5:if(!o.t()){x=6
break}r=o.d
if(r==null)r=n.a(r)
q=J.a7(r)
p=A.a_(q.h(r,"group_id"))
u.j(0,p,q.h(r,"last_read_at")==null?null:A.d8(A.a_(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.n)
for(n=J.bo(t,s),s=A.u(n),n=new A.ai(n,n.gA(n),s.i("ai<U.E>")),s=s.i("U.E");n.t();){r=n.d
if(r==null)r=s.a(r)
if(u.au(0,J.h(r,"id")))o.push(new B.cD1(r,u).$0())}v=o
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1336}
B.cD1.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a7(t),r=s.h(t,u)==null?A.d8(A.a_(s.h(t,"created_at"))):A.d8(A.a_(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.a_(s.h(t,"id")),o=A.J(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.a_(s.h(t,"name"))
w=A.J(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.hx(q)
else v=!1
return new A.hY(p,o,x,w,r,v,A.J(s.h(t,"created_by")),J.o(s.h(t,"is_direct"),!0),J.o(s.h(t,"is_event_all"),!0),A.J(s.h(t,"photo_url")),A.J(s.h(t,"description")))},
$S:435}
B.cC7.prototype={
$2(d,e){return this.aEO(d,e)},
aEO(d,e){var x=0,w=A.n(y.u),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:q=$.T().b
q===$&&A.b()
u=y.w
t=y.b
s=A.A(u,y.j)
p=J
o=y.i
x=3
return A.d(q.aU("chat_group_people",A.S(["p_group_id",e],u,t),t),$async$$2)
case 3:q=p.bo(o.a(g),y.y),u=A.u(q),q=new A.ai(q,q.gA(q),u.i("ai<U.E>")),u=u.i("U.E")
case 4:if(!q.t()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a7(t)
s.j(0,A.a_(r.h(t,"profile_id")),new B.fW(A.a_(r.h(t,"profile_id")),A.a_(r.h(t,"full_name")),A.J(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.fW,A.L)
x(B.cD2,A.bw)
x(B.cD1,A.bR)
x(B.cC7,A.cS)
x(B.ZH,A.M)})()
A.bx(b.typeUniverse,JSON.parse('{"ZH":{"M":[],"e":[],"f":[]}}'))
var y={j:A.x("fW"),n:A.x("t<hY>"),c:A.x("r<hY>"),i:A.x("r<@>"),u:A.x("a4<c,fW>"),y:A.x("a4<c,@>"),w:A.x("c"),b:A.x("@"),v:A.x("af?")};(function constants(){var x=a.makeConstList
D.aCC=new A.be(C.e5,24,C.t,null,null,null)
D.aGC=new A.qB("M12 5v14M5 12h14",20,C.t,2.4,!1,C.d7,null)
D.Vs=x([],y.n)
D.Vu=x([],A.x("t<fW>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dO9","PB",()=>C.bU.$1$2$retry(new B.cD2(),A.aSw(),y.c))
x($,"dNM","Zw",()=>C.bU.MH(0,new B.cC7(),A.aSw(),y.u,y.w))})()};
(a=>{a["jpyRpSNCuKbeqg8Lv6FJ/C5Nip4="]=a.current})($__dart_deferred_initializers__);