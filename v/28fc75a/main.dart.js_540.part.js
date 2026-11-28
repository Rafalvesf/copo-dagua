((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aUO(d){return B.dKF(d)},
dKF(d){var x=0,w=A.n(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aUO=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
x=7
return A.d(r.P("chat_groups").al(0,"*").V("id",d).cj(),$async$aUO)
case 7:s=f
if(s==null){v=null
x=1
break}r=A.Y(J.i(s,"id"))
q=A.C(J.i(s,"wedding_id"))
if(q==null)q=""
p=A.Y(J.i(s,"name"))
o=A.C(J.i(s,"last_message"))
n=J.i(s,"last_message_at")==null?null:A.dc(A.Y(J.i(s,"last_message_at")))
m=A.C(J.i(s,"created_by"))
l=J.o(J.i(s,"is_direct"),!0)
k=J.o(J.i(s,"is_event_all"),!0)
j=A.C(J.i(s,"photo_url"))
i=A.C(J.i(s,"description"))
v=new A.hH(r,q,p,o,n,!1,m,l,k,j,i)
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
return A.m($async$aUO,w)},
fU:function fU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cLx:function cLx(){},
cLw:function cLw(d,e){this.a=d
this.b=e},
cJv:function cJv(){},
cKs:function cKs(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[83],B)
D=c[223]
B.fU.prototype={
gap(d){return this.b}}
var z=a.updateTypes(["F<t<fU>>(at,c)","F<a3<c,fU>>(at,c)"])
B.cLx.prototype={
$1(d){return this.aFy(d)},
aFy(d){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:A.tZ(d)
u=$.Q()
t=u.b
t===$&&A.b()
s=t.gbu().e.a
if((s==null?null:s.r)==null){v=D.qI
x=1
break}x=3
return A.d(t.P("chat_groups").al(0,"*").YI(0,"last_message_at",!1,!1),$async$$1)
case 3:r=f
t=u.b.P("chat_group_members").al(0,"group_id, last_read_at")
u=u.b.gbu().e.a
s=A.E(y.N,y.X)
m=q=y.P
l=J
x=4
return A.d(t.V("profile_id",(u==null?null:u.r).a),$async$$1)
case 4:m,u=l.bf(f,q),t=A.u(u),u=new A.ag(u,u.gA(u),t.i("ag<V.E>")),t=t.i("V.E")
case 5:if(!u.q()){x=6
break}p=u.d
if(p==null)p=t.a(p)
o=J.a7(p)
n=A.Y(o.h(p,"group_id"))
s.j(0,n,o.h(p,"last_read_at")==null?null:A.dc(A.Y(o.h(p,"last_read_at"))))
x=5
break
case 6:u=A.a([],y.R)
for(t=J.bf(r,q),q=A.u(t),t=new A.ag(t,t.gA(t),q.i("ag<V.E>")),q=q.i("V.E");t.q();){p=t.d
if(p==null)p=q.a(p)
if(s.au(0,J.i(p,"id")))u.push(new B.cLw(p,s).$0())}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1360}
B.cLw.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a7(t),r=s.h(t,u)==null?A.dc(A.Y(s.h(t,"created_at"))):A.dc(A.Y(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.Y(s.h(t,"id")),o=A.C(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.Y(s.h(t,"name"))
w=A.C(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.he(q)
else v=!1
return new A.hH(p,o,x,w,r,v,A.C(s.h(t,"created_by")),J.o(s.h(t,"is_direct"),!0),J.o(s.h(t,"is_event_all"),!0),A.C(s.h(t,"photo_url")),A.C(s.h(t,"description")))},
$S:406}
B.cJv.prototype={
$2(d,e){return this.aF9(d,e)},
aF9(d,e){var x=0,w=A.n(y.v),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&A.b()
u=y.z
o=y.j
x=3
return A.d(p.aH("event_chat_people",A.R(["p_wedding_id",e],y.N,u),u),$async$$2)
case 3:t=o.a(g)
u=A.a([],y.b)
for(p=J.bf(t,y.P),s=A.u(p),p=new A.ag(p,p.gA(p),s.i("ag<V.E>")),s=s.i("V.E");p.q();){r=p.d
if(r==null)r=s.a(r)
q=J.a7(r)
u.push(new B.fU(A.Y(q.h(r,"profile_id")),A.Y(q.h(r,"full_name")),A.C(q.h(r,"avatar_url")),A.Y(q.h(r,"role"))))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0}
B.cKs.prototype={
$2(d,e){return this.aFo(d,e)},
aFo(d,e){var x=0,w=A.n(y.Y),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:q=$.Q().b
q===$&&A.b()
u=y.N
t=y.z
s=A.E(u,y.w)
p=J
o=y.j
x=3
return A.d(q.aH("chat_group_people",A.R(["p_group_id",e],u,t),t),$async$$2)
case 3:q=p.bf(o.a(g),y.P),u=A.u(q),q=new A.ag(q,q.gA(q),u.i("ag<V.E>")),u=u.i("V.E")
case 4:if(!q.q()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a7(t)
s.j(0,A.Y(r.h(t,"profile_id")),new B.fU(A.Y(r.h(t,"profile_id")),A.Y(r.h(t,"full_name")),A.C(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.fU,A.M)
x(B.cLx,A.bu)
x(B.cLw,A.bL)
w(A.cK,[B.cJv,B.cKs])})()
var y=(function rtii(){var x=A.z
return{w:x("fU"),R:x("r<hH>"),b:x("r<fU>"),W:x("t<hH>"),v:x("t<fU>"),j:x("t<@>"),Y:x("a3<c,fU>"),P:x("a3<c,@>"),N:x("c"),z:x("@"),l:x("hH?"),X:x("ab?")}})();(function constants(){var x=a.makeConstList
D.qI=x([],y.R)
D.Ff=x([],y.b)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZo","Qw",()=>C.bP.$1$2$retry(new B.cLx(),A.aUW(),y.W))
x($,"dYH","cUV",()=>C.bP.MP(0,new B.cJv(),A.aUW(),y.v,y.N))
x($,"dZ0","Qv",()=>C.bP.MP(0,new B.cKs(),A.aUW(),y.Y,y.N))})()};
(a=>{a["CbO9y1DIRrfirnQ9+tJrMvBp1ps="]=a.current})($__dart_deferred_initializers__);