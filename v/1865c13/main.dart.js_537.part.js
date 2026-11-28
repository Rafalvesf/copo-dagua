((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aUb(d){return B.dJ_(d)},
dJ_(d){var x=0,w=A.n(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aUb=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
x=7
return A.d(r.P("chat_groups").ai(0,"*").U("id",d).cf(),$async$aUb)
case 7:s=f
if(s==null){v=null
x=1
break}r=A.Y(J.i(s,"id"))
q=A.B(J.i(s,"wedding_id"))
if(q==null)q=""
p=A.Y(J.i(s,"name"))
o=A.B(J.i(s,"last_message"))
n=J.i(s,"last_message_at")==null?null:A.db(A.Y(J.i(s,"last_message_at")))
m=A.B(J.i(s,"created_by"))
l=J.o(J.i(s,"is_direct"),!0)
k=J.o(J.i(s,"is_event_all"),!0)
j=A.B(J.i(s,"photo_url"))
i=A.B(J.i(s,"description"))
v=new A.hG(r,q,p,o,n,!1,m,l,k,j,i)
x=1
break
u=2
x=6
break
case 4:u=3
g=t.pop()
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUb,w)},
fS:function fS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cK8:function cK8(){},
cK7:function cK7(d,e){this.a=d
this.b=e},
cI7:function cI7(){},
cJ3:function cJ3(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[83],B)
D=c[222]
B.fS.prototype={
gap(d){return this.b}}
var z=a.updateTypes(["F<t<fS>>(as,c)","F<a5<c,fS>>(as,c)"])
B.cK8.prototype={
$1(d){return this.aFk(d)},
aFk(d){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=$.P()
n=o.b
n===$&&A.b()
u=n.gbu().e.a
if((u==null?null:u.r)==null){v=D.qF
x=1
break}x=3
return A.d(n.P("chat_groups").ai(0,"*").YB(0,"last_message_at",!1,!1),$async$$1)
case 3:t=f
n=o.b.P("chat_group_members").ai(0,"group_id, last_read_at")
o=o.b.gbu().e.a
u=A.E(y.N,y.X)
m=s=y.P
l=J
x=4
return A.d(n.U("profile_id",(o==null?null:o.r).a),$async$$1)
case 4:m,o=l.bd(f,s),n=A.u(o),o=new A.ag(o,o.gA(o),n.i("ag<V.E>")),n=n.i("V.E")
case 5:if(!o.q()){x=6
break}r=o.d
if(r==null)r=n.a(r)
q=J.a7(r)
p=A.Y(q.h(r,"group_id"))
u.j(0,p,q.h(r,"last_read_at")==null?null:A.db(A.Y(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.R)
for(n=J.bd(t,s),s=A.u(n),n=new A.ag(n,n.gA(n),s.i("ag<V.E>")),s=s.i("V.E");n.q();){r=n.d
if(r==null)r=s.a(r)
if(u.au(0,J.i(r,"id")))o.push(new B.cK7(r,u).$0())}v=o
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1352}
B.cK7.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a7(t),r=s.h(t,u)==null?A.db(A.Y(s.h(t,"created_at"))):A.db(A.Y(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.Y(s.h(t,"id")),o=A.B(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.Y(s.h(t,"name"))
w=A.B(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.hc(q)
else v=!1
return new A.hG(p,o,x,w,r,v,A.B(s.h(t,"created_by")),J.o(s.h(t,"is_direct"),!0),J.o(s.h(t,"is_event_all"),!0),A.B(s.h(t,"photo_url")),A.B(s.h(t,"description")))},
$S:410}
B.cI7.prototype={
$2(d,e){return this.aEW(d,e)},
aEW(d,e){var x=0,w=A.n(y.v),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.P().b
p===$&&A.b()
u=y.z
o=y.j
x=3
return A.d(p.aG("event_chat_people",A.R(["p_wedding_id",e],y.N,u),u),$async$$2)
case 3:t=o.a(g)
u=A.a([],y.b)
for(p=J.bd(t,y.P),s=A.u(p),p=new A.ag(p,p.gA(p),s.i("ag<V.E>")),s=s.i("V.E");p.q();){r=p.d
if(r==null)r=s.a(r)
q=J.a7(r)
u.push(new B.fS(A.Y(q.h(r,"profile_id")),A.Y(q.h(r,"full_name")),A.B(q.h(r,"avatar_url")),A.Y(q.h(r,"role"))))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0}
B.cJ3.prototype={
$2(d,e){return this.aFa(d,e)},
aFa(d,e){var x=0,w=A.n(y.Y),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:q=$.P().b
q===$&&A.b()
u=y.N
t=y.z
s=A.E(u,y.w)
p=J
o=y.j
x=3
return A.d(q.aG("chat_group_people",A.R(["p_group_id",e],u,t),t),$async$$2)
case 3:q=p.bd(o.a(g),y.P),u=A.u(q),q=new A.ag(q,q.gA(q),u.i("ag<V.E>")),u=u.i("V.E")
case 4:if(!q.q()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a7(t)
s.j(0,A.Y(r.h(t,"profile_id")),new B.fS(A.Y(r.h(t,"profile_id")),A.Y(r.h(t,"full_name")),A.B(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.fS,A.L)
x(B.cK8,A.bt)
x(B.cK7,A.bK)
w(A.cJ,[B.cI7,B.cJ3])})()
var y=(function rtii(){var x=A.y
return{w:x("fS"),R:x("r<hG>"),b:x("r<fS>"),W:x("t<hG>"),v:x("t<fS>"),j:x("t<@>"),Y:x("a5<c,fS>"),P:x("a5<c,@>"),N:x("c"),z:x("@"),l:x("hG?"),X:x("ae?")}})();(function constants(){var x=a.makeConstList
D.qF=x([],y.R)
D.Fb=x([],y.b)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXB","Ql",()=>C.bO.$1$2$retry(new B.cK8(),A.aUj(),y.W))
x($,"dWU","cTs",()=>C.bO.ML(0,new B.cI7(),A.aUj(),y.v,y.N))
x($,"dXd","Qk",()=>C.bO.ML(0,new B.cJ3(),A.aUj(),y.Y,y.N))})()};
(a=>{a["AdV6NuxgW6il3z9trBTQ/gpUhk4="]=a.current})($__dart_deferred_initializers__);