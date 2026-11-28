((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aVy(d){return B.dL6(d)},
dL6(d){var x=0,w=A.n(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aVy=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.Q().b
r===$&&A.b()
x=7
return A.d(r.R("chat_groups").al(0,"*").V("id",d).cd(),$async$aVy)
case 7:s=f
if(s==null){v=null
x=1
break}r=A.a0(J.i(s,"id"))
q=A.x(J.i(s,"wedding_id"))
if(q==null)q=""
p=A.a0(J.i(s,"name"))
o=A.x(J.i(s,"last_message"))
n=J.i(s,"last_message_at")==null?null:A.d9(A.a0(J.i(s,"last_message_at")))
m=A.x(J.i(s,"created_by"))
l=J.o(J.i(s,"is_direct"),!0)
k=J.o(J.i(s,"is_event_all"),!0)
j=A.x(J.i(s,"photo_url"))
i=A.x(J.i(s,"description"))
v=new A.hE(r,q,p,o,n,!1,m,l,k,j,i)
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
return A.m($async$aVy,w)},
fU:function fU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cLo:function cLo(){},
cLn:function cLn(d,e){this.a=d
this.b=e},
cJj:function cJj(){},
cKg:function cKg(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[82],B)
D=c[224]
B.fU.prototype={
gaq(d){return this.b}}
var z=a.updateTypes(["D<t<fU>>(at,c)","D<a5<c,fU>>(at,c)"])
B.cLo.prototype={
$1(d){return this.aG4(d)},
aG4(d){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:A.tY(d)
u=$.Q()
t=u.b
t===$&&A.b()
s=t.gbt().e.a
if((s==null?null:s.r)==null){v=D.qN
x=1
break}x=3
return A.d(t.R("chat_groups").al(0,"*").YS(0,"last_message_at",!1,!1),$async$$1)
case 3:r=f
t=u.b.R("chat_group_members").al(0,"group_id, last_read_at")
u=u.b.gbt().e.a
s=A.E(y.N,y.X)
m=q=y.P
l=J
x=4
return A.d(t.V("profile_id",(u==null?null:u.r).a),$async$$1)
case 4:m,u=l.bi(f,q),t=A.u(u),u=new A.aj(u,u.gA(u),t.i("aj<V.E>")),t=t.i("V.E")
case 5:if(!u.q()){x=6
break}p=u.d
if(p==null)p=t.a(p)
o=J.a6(p)
n=A.a0(o.h(p,"group_id"))
s.j(0,n,o.h(p,"last_read_at")==null?null:A.d9(A.a0(o.h(p,"last_read_at"))))
x=5
break
case 6:u=A.a([],y.R)
for(t=J.bi(r,q),q=A.u(t),t=new A.aj(t,t.gA(t),q.i("aj<V.E>")),q=q.i("V.E");t.q();){p=t.d
if(p==null)p=q.a(p)
if(s.au(0,J.i(p,"id")))u.push(new B.cLn(p,s).$0())}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1357}
B.cLn.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a6(t),r=s.h(t,u)==null?A.d9(A.a0(s.h(t,"created_at"))):A.d9(A.a0(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.a0(s.h(t,"id")),o=A.x(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.a0(s.h(t,"name"))
w=A.x(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.h0(q)
else v=!1
return new A.hE(p,o,x,w,r,v,A.x(s.h(t,"created_by")),J.o(s.h(t,"is_direct"),!0),J.o(s.h(t,"is_event_all"),!0),A.x(s.h(t,"photo_url")),A.x(s.h(t,"description")))},
$S:488}
B.cJj.prototype={
$2(d,e){return this.aFG(d,e)},
aFG(d,e){var x=0,w=A.n(y.v),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&A.b()
u=y.z
o=y.j
x=3
return A.d(p.aH("event_chat_people",A.R(["p_wedding_id",e],y.N,u),u),$async$$2)
case 3:t=o.a(g)
u=A.a([],y.b)
for(p=J.bi(t,y.P),s=A.u(p),p=new A.aj(p,p.gA(p),s.i("aj<V.E>")),s=s.i("V.E");p.q();){r=p.d
if(r==null)r=s.a(r)
q=J.a6(r)
u.push(new B.fU(A.a0(q.h(r,"profile_id")),A.a0(q.h(r,"full_name")),A.x(q.h(r,"avatar_url")),A.a0(q.h(r,"role"))))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0}
B.cKg.prototype={
$2(d,e){return this.aFV(d,e)},
aFV(d,e){var x=0,w=A.n(y.Y),v,u,t,s,r,q,p,o
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
case 3:q=p.bi(o.a(g),y.P),u=A.u(q),q=new A.aj(q,q.gA(q),u.i("aj<V.E>")),u=u.i("V.E")
case 4:if(!q.q()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a6(t)
s.j(0,A.a0(r.h(t,"profile_id")),new B.fU(A.a0(r.h(t,"profile_id")),A.a0(r.h(t,"full_name")),A.x(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.fU,A.L)
x(B.cLo,A.bv)
x(B.cLn,A.bN)
w(A.cM,[B.cJj,B.cKg])})()
var y=(function rtii(){var x=A.B
return{w:x("fU"),R:x("r<hE>"),b:x("r<fU>"),W:x("t<hE>"),v:x("t<fU>"),j:x("t<@>"),Y:x("a5<c,fU>"),P:x("a5<c,@>"),N:x("c"),z:x("@"),l:x("hE?"),X:x("ab?")}})();(function constants(){var x=a.makeConstList
D.qN=x([],y.R)
D.Fv=x([],y.b)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZR","QI",()=>C.bL.$1$2$retry(new B.cLo(),A.aVF(),y.W))
x($,"dZ8","cV3",()=>C.bL.MV(0,new B.cJj(),A.aVF(),y.v,y.N))
x($,"dZt","QH",()=>C.bL.MV(0,new B.cKg(),A.aVF(),y.Y,y.N))})()};
(a=>{a["eoexFdLDnDlEsSvB3hKTwP/Bca8="]=a.current})($__dart_deferred_initializers__);