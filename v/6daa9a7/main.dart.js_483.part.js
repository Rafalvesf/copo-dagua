((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={fW:function fW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},cDy:function cDy(){},cDx:function cDx(d,e){this.a=d
this.b=e},cCD:function cCD(){},ZT:function ZT(d,e,f){this.c=d
this.d=e
this.a=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[80],B)
D=c[215]
B.fW.prototype={
gau(d){return this.b}}
B.ZT.prototype={
u(d){var x=null,w=A.a2(999)
return A.fI(!1,C.aE,!0,x,A.eR(!1,w,!0,A.C(C.K,this.d?D.aGS:D.aCR,C.r,x,x,C.cD,x,44,x,x,x,x,44),x,!0,x,x,x,x,x,x,x,x,x,x,this.c,x,x,x,x,x,x,x),C.r,C.al,0,x,x,x,x,x,C.cG)}}
var z=a.updateTypes(["F<a5<c,fW>>(au,c)"])
B.cDy.prototype={
$1(d){return this.aF2(d)},
aF2(d){var x=0,w=A.n(y.c),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=$.T()
n=o.b
n===$&&A.b()
u=n.gbE().e.a
if((u==null?null:u.r)==null){v=D.Vw
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
case 4:m,o=l.bo(f,s),n=A.u(o),o=new A.ak(o,o.gA(o),n.i("ak<V.E>")),n=n.i("V.E")
case 5:if(!o.t()){x=6
break}r=o.d
if(r==null)r=n.a(r)
q=J.a7(r)
p=A.a_(q.h(r,"group_id"))
u.j(0,p,q.h(r,"last_read_at")==null?null:A.d8(A.a_(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.n)
for(n=J.bo(t,s),s=A.u(n),n=new A.ak(n,n.gA(n),s.i("ak<V.E>")),s=s.i("V.E");n.t();){r=n.d
if(r==null)r=s.a(r)
if(u.av(0,J.h(r,"id")))o.push(new B.cDx(r,u).$0())}v=o
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1336}
B.cDx.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a7(t),r=s.h(t,u)==null?A.d8(A.a_(s.h(t,"created_at"))):A.d8(A.a_(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.a_(s.h(t,"id")),o=A.J(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.a_(s.h(t,"name"))
w=A.J(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.hx(q)
else v=!1
return new A.hY(p,o,x,w,r,v,A.J(s.h(t,"created_by")),J.o(s.h(t,"is_direct"),!0),J.o(s.h(t,"is_event_all"),!0),A.J(s.h(t,"photo_url")),A.J(s.h(t,"description")))},
$S:467}
B.cCD.prototype={
$2(d,e){return this.aET(d,e)},
aET(d,e){var x=0,w=A.n(y.u),v,u,t,s,r,q,p,o
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
case 3:q=p.bo(o.a(g),y.y),u=A.u(q),q=new A.ak(q,q.gA(q),u.i("ak<V.E>")),u=u.i("V.E")
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
x(B.cDy,A.bx)
x(B.cDx,A.bR)
x(B.cCD,A.cS)
x(B.ZT,A.K)})()
A.bu(b.typeUniverse,JSON.parse('{"ZT":{"K":[],"e":[],"f":[]}}'))
var y={j:A.w("fW"),n:A.w("t<hY>"),c:A.w("r<hY>"),i:A.w("r<@>"),u:A.w("a5<c,fW>"),y:A.w("a5<c,@>"),w:A.w("c"),b:A.w("@"),v:A.w("af?")};(function constants(){var x=a.makeConstList
D.aCR=new A.bc(C.e8,24,C.u,null,null,null)
D.aGS=new A.qC("M12 5v14M5 12h14",20,C.u,2.4,!1,C.d8,null)
D.Vw=x([],y.n)
D.Vy=x([],A.w("t<fW>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dOJ","PI",()=>C.bS.$1$2$retry(new B.cDy(),A.aSM(),y.c))
x($,"dOl","ZJ",()=>C.bS.MH(0,new B.cCD(),A.aSM(),y.u,y.w))})()};
(a=>{a["9UBPLRKgKZcchSMyrpUcQloNqIQ="]=a.current})($__dart_deferred_initializers__);