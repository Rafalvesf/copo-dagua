((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aUR(d){return B.dJy(d)},
dJy(d){var x=0,w=A.n(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aUR=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.P().b
r===$&&A.b()
x=7
return A.d(r.P("chat_groups").aj(0,"*").V("id",d).cj(),$async$aUR)
case 7:s=f
if(s==null){v=null
x=1
break}r=A.Z(J.i(s,"id"))
q=A.C(J.i(s,"wedding_id"))
if(q==null)q=""
p=A.Z(J.i(s,"name"))
o=A.C(J.i(s,"last_message"))
n=J.i(s,"last_message_at")==null?null:A.dc(A.Z(J.i(s,"last_message_at")))
m=A.C(J.i(s,"created_by"))
l=J.o(J.i(s,"is_direct"),!0)
k=J.o(J.i(s,"is_event_all"),!0)
j=A.C(J.i(s,"photo_url"))
i=A.C(J.i(s,"description"))
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
return A.m($async$aUR,w)},
fU:function fU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cKX:function cKX(){},
cKW:function cKW(d,e){this.a=d
this.b=e},
cIX:function cIX(){},
cJS:function cJS(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[83],B)
D=c[226]
B.fU.prototype={
gar(d){return this.b}}
var z=a.updateTypes(["F<t<fU>>(au,c)","F<a6<c,fU>>(au,c)"])
B.cKX.prototype={
$1(d){return this.aGd(d)},
aGd(d){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=$.P()
n=o.b
n===$&&A.b()
u=n.gbx().e.a
if((u==null?null:u.r)==null){v=D.r0
x=1
break}x=3
return A.d(n.P("chat_groups").aj(0,"*").Z5(0,"last_message_at",!1,!1),$async$$1)
case 3:t=f
n=o.b.P("chat_group_members").aj(0,"group_id, last_read_at")
o=o.b.gbx().e.a
u=A.E(y.N,y.X)
m=s=y.P
l=J
x=4
return A.d(n.V("profile_id",(o==null?null:o.r).a),$async$$1)
case 4:m,o=l.bh(f,s),n=A.u(o),o=new A.aj(o,o.gA(o),n.i("aj<V.E>")),n=n.i("V.E")
case 5:if(!o.t()){x=6
break}r=o.d
if(r==null)r=n.a(r)
q=J.a7(r)
p=A.Z(q.h(r,"group_id"))
u.j(0,p,q.h(r,"last_read_at")==null?null:A.dc(A.Z(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.R)
for(n=J.bh(t,s),s=A.u(n),n=new A.aj(n,n.gA(n),s.i("aj<V.E>")),s=s.i("V.E");n.t();){r=n.d
if(r==null)r=s.a(r)
if(u.av(0,J.i(r,"id")))o.push(new B.cKW(r,u).$0())}v=o
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1345}
B.cKW.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a7(t),r=s.h(t,u)==null?A.dc(A.Z(s.h(t,"created_at"))):A.dc(A.Z(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.Z(s.h(t,"id")),o=A.C(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.Z(s.h(t,"name"))
w=A.C(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.fN(q)
else v=!1
return new A.hG(p,o,x,w,r,v,A.C(s.h(t,"created_by")),J.o(s.h(t,"is_direct"),!0),J.o(s.h(t,"is_event_all"),!0),A.C(s.h(t,"photo_url")),A.C(s.h(t,"description")))},
$S:473}
B.cIX.prototype={
$2(d,e){return this.aFQ(d,e)},
aFQ(d,e){var x=0,w=A.n(y.v),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.P().b
p===$&&A.b()
u=y.z
o=y.j
x=3
return A.d(p.aK("event_chat_people",A.R(["p_wedding_id",e],y.N,u),u),$async$$2)
case 3:t=o.a(g)
u=A.a([],y.b)
for(p=J.bh(t,y.P),s=A.u(p),p=new A.aj(p,p.gA(p),s.i("aj<V.E>")),s=s.i("V.E");p.t();){r=p.d
if(r==null)r=s.a(r)
q=J.a7(r)
u.push(new B.fU(A.Z(q.h(r,"profile_id")),A.Z(q.h(r,"full_name")),A.C(q.h(r,"avatar_url")),A.Z(q.h(r,"role"))))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0}
B.cJS.prototype={
$2(d,e){return this.aG3(d,e)},
aG3(d,e){var x=0,w=A.n(y.Y),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:q=$.P().b
q===$&&A.b()
u=y.N
t=y.z
s=A.E(u,y.w)
p=J
o=y.j
x=3
return A.d(q.aK("chat_group_people",A.R(["p_group_id",e],u,t),t),$async$$2)
case 3:q=p.bh(o.a(g),y.P),u=A.u(q),q=new A.aj(q,q.gA(q),u.i("aj<V.E>")),u=u.i("V.E")
case 4:if(!q.t()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a7(t)
s.j(0,A.Z(r.h(t,"profile_id")),new B.fU(A.Z(r.h(t,"profile_id")),A.Z(r.h(t,"full_name")),A.C(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.fU,A.J)
x(B.cKX,A.bw)
x(B.cKW,A.bO)
w(A.cL,[B.cIX,B.cJS])})()
var y=(function rtii(){var x=A.w
return{w:x("fU"),R:x("r<hG>"),b:x("r<fU>"),W:x("t<hG>"),v:x("t<fU>"),j:x("t<@>"),Y:x("a6<c,fU>"),P:x("a6<c,@>"),N:x("c"),z:x("@"),l:x("hG?"),X:x("ac?")}})();(function constants(){var x=a.makeConstList
D.r0=x([],y.R)
D.Fo=x([],y.b)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dY9","Qr",()=>C.bR.$1$2$retry(new B.cKX(),A.aUZ(),y.W))
x($,"dXt","cU5",()=>C.bR.Na(0,new B.cIX(),A.aUZ(),y.v,y.N))
x($,"dXM","Qq",()=>C.bR.Na(0,new B.cJS(),A.aUZ(),y.Y,y.N))})()};
(a=>{a["aoJ6svUlK02PbUbdaWNRa6zWOIo="]=a.current})($__dart_deferred_initializers__);