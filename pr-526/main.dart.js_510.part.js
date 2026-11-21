((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dg6(d,e){return null},
ib:function ib(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cq8:function cq8(){},
cq7:function cq7(d,e){this.a=d
this.b=e},
cpi:function cpi(){},
Xe:function Xe(d,e,f){this.c=d
this.d=e
this.a=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[78],B)
D=c[242]
B.ib.prototype={}
B.Xe.prototype={
u(d){var x=null,w=A.W(999)
return A.fd(!1,C.aB,!0,x,A.eE(!1,w,!0,A.B(C.O,this.d?D.aFe:D.aBl,C.r,x,x,C.ma,x,44,x,x,x,x,44),x,!0,x,x,x,x,x,x,x,x,x,x,this.c,x,x,x,x,x,x,x),C.r,C.ao,0,x,x,x,x,x,C.cE)}}
var z=a.updateTypes(["G<a6<c,ib>>(at,c)","bi?(v,H)"])
B.cq8.prototype={
$1(d){return this.aBA(d)},
aBA(d){var x=0,w=A.m(y.c),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:o=$.Q()
n=o.b
n===$&&A.b()
u=n.gbC().e.a
if((u==null?null:u.r)==null){v=D.Uw
x=1
break}x=3
return A.d(n.P("chat_groups").az(0,"*").WD(0,"last_message_at",!1,!1),$async$$1)
case 3:t=f
n=o.b.P("chat_group_members").az(0,"group_id, last_read_at")
o=o.b.gbC().e.a
u=A.K(y.w,y.v)
m=s=y.y
l=J
x=4
return A.d(n.W("profile_id",(o==null?null:o.r).a),$async$$1)
case 4:m,o=l.bv(f,s),n=A.t(o),o=new A.al(o,o.gA(o),n.i("al<V.E>")),n=n.i("V.E")
case 5:if(!o.t()){x=6
break}r=o.d
if(r==null)r=n.a(r)
q=J.a3(r)
p=A.a1(q.h(r,"group_id"))
u.k(0,p,q.h(r,"last_read_at")==null?null:A.d9(A.a1(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.n)
for(n=J.bv(t,s),s=A.t(n),n=new A.al(n,n.gA(n),s.i("al<V.E>")),s=s.i("V.E");n.t();){r=n.d
if(r==null)r=s.a(r)
if(u.aA(0,J.f(r,"id")))o.push(new B.cq7(r,u).$0())}v=o
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$1,w)},
$S:1201}
B.cq7.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a3(t),r=s.h(t,u)==null?A.d9(A.a1(s.h(t,"created_at"))):A.d9(A.a1(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.a1(s.h(t,"id")),o=A.I(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.a1(s.h(t,"name"))
w=A.I(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.jb(q)
else v=!1
return new A.hK(p,o,x,w,r,v,A.I(s.h(t,"created_by")),J.n(s.h(t,"is_direct"),!0))},
$S:441}
B.cpi.prototype={
$2(d,e){return this.aBp(d,e)},
aBp(d,e){var x=0,w=A.m(y.u),v,u,t,s,r,q,p,o
var $async$$2=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:q=$.Q().b
q===$&&A.b()
u=y.w
t=y.b
s=A.K(u,y.j)
p=J
o=y.i
x=3
return A.d(q.aT("chat_group_people",A.U(["p_group_id",e],u,t),t),$async$$2)
case 3:q=p.bv(o.a(g),y.y),u=A.t(q),q=new A.al(q,q.gA(q),u.i("al<V.E>")),u=u.i("V.E")
case 4:if(!q.t()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a3(t)
s.k(0,A.a1(r.h(t,"profile_id")),new B.ib(A.a1(r.h(t,"profile_id")),A.a1(r.h(t,"full_name")),A.I(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$2,w)},
$S:z+0};(function installTearOffs(){var x=a._static_2
x(B,"cpj","dg6",1)})();(function inheritance(){var x=a.inherit
x(B.ib,A.H)
x(B.cq8,A.bq)
x(B.cq7,A.bI)
x(B.cpi,A.cG)
x(B.Xe,A.O)})()
A.bj(b.typeUniverse,JSON.parse('{"Xe":{"O":[],"e":[]}}'))
var y={j:A.u("ib"),n:A.u("q<hK>"),c:A.u("r<hK>"),i:A.u("r<@>"),u:A.u("a6<c,ib>"),y:A.u("a6<c,@>"),w:A.u("c"),b:A.u("@"),v:A.u("an?")};(function constants(){var x=a.makeConstList
D.aBl=new A.aZ(C.eg,24,C.u,null,null,null)
D.aFe=new A.jY("M12 5v14M5 12h14",20,C.u,2.4,!1,C.ca,null)
D.Uw=x([],y.n)
D.Uy=x([],A.u("q<ib>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dw5","NI",()=>C.cb.$1$2$retry(new B.cq8(),B.cpj(),y.c))
x($,"dvJ","ahB",()=>C.cb.V0(0,new B.cpi(),B.cpj(),y.u,y.w))})()};
(a=>{a["F+e5Mo3raUp+xC+2iGh+3A1jLi4="]=a.current})($__dart_deferred_initializers__);