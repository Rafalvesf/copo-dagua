((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dos(d,e){return null},
ir:function ir(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cwo:function cwo(){},
cwn:function cwn(d,e){this.a=d
this.b=e},
cvv:function cvv(){},
YR:function YR(d,e,f){this.c=d
this.d=e
this.a=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[78],B)
D=c[230]
B.ir.prototype={
gar(d){return this.b}}
B.YR.prototype={
u(d){var x=null,w=A.X(999)
return A.fl(!1,C.az,!0,x,A.eJ(!1,w,!0,A.F(C.O,this.d?D.aG3:D.aCa,C.r,x,x,C.mh,x,44,x,x,x,x,44),x,!0,x,x,x,x,x,x,x,x,x,x,this.c,x,x,x,x,x,x,x),C.r,C.ap,0,x,x,x,x,x,C.cD)}}
var z=a.updateTypes(["E<a3<c,ir>>(at,c)","bn?(v,J)"])
B.cwo.prototype={
$1(d){return this.aDT(d)},
aDT(d){var x=0,w=A.n(y.c),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=$.R()
n=o.b
n===$&&A.b()
u=n.gbG().e.a
if((u==null?null:u.r)==null){v=D.V6
x=1
break}x=3
return A.d(n.S("chat_groups").aG(0,"*").XH(0,"last_message_at",!1,!1),$async$$1)
case 3:t=f
n=o.b.S("chat_group_members").aG(0,"group_id, last_read_at")
o=o.b.gbG().e.a
u=A.A(y.w,y.v)
m=s=y.y
l=J
x=4
return A.d(n.X("profile_id",(o==null?null:o.r).a),$async$$1)
case 4:m,o=l.bw(f,s),n=A.u(o),o=new A.ao(o,o.gA(o),n.i("ao<T.E>")),n=n.i("T.E")
case 5:if(!o.t()){x=6
break}r=o.d
if(r==null)r=n.a(r)
q=J.a5(r)
p=A.a2(q.h(r,"group_id"))
u.j(0,p,q.h(r,"last_read_at")==null?null:A.dc(A.a2(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.n)
for(n=J.bw(t,s),s=A.u(n),n=new A.ao(n,n.gA(n),s.i("ao<T.E>")),s=s.i("T.E");n.t();){r=n.d
if(r==null)r=s.a(r)
if(u.au(0,J.h(r,"id")))o.push(new B.cwn(r,u).$0())}v=o
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1276}
B.cwn.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a5(t),r=s.h(t,u)==null?A.dc(A.a2(s.h(t,"created_at"))):A.dc(A.a2(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.a2(s.h(t,"id")),o=A.L(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.a2(s.h(t,"name"))
w=A.L(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.hX(q)
else v=!1
return new A.hS(p,o,x,w,r,v,A.L(s.h(t,"created_by")),J.p(s.h(t,"is_direct"),!0))},
$S:445}
B.cvv.prototype={
$2(d,e){return this.aDJ(d,e)},
aDJ(d,e){var x=0,w=A.n(y.u),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:q=$.R().b
q===$&&A.b()
u=y.w
t=y.b
s=A.A(u,y.j)
p=J
o=y.i
x=3
return A.d(q.b2("chat_group_people",A.Q(["p_group_id",e],u,t),t),$async$$2)
case 3:q=p.bw(o.a(g),y.y),u=A.u(q),q=new A.ao(q,q.gA(q),u.i("ao<T.E>")),u=u.i("T.E")
case 4:if(!q.t()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a5(t)
s.j(0,A.a2(r.h(t,"profile_id")),new B.ir(A.a2(r.h(t,"profile_id")),A.a2(r.h(t,"full_name")),A.L(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0};(function installTearOffs(){var x=a._static_2
x(B,"cvw","dos",1)})();(function inheritance(){var x=a.inherit
x(B.ir,A.J)
x(B.cwo,A.bv)
x(B.cwn,A.bN)
x(B.cvv,A.cM)
x(B.YR,A.O)})()
A.bt(b.typeUniverse,JSON.parse('{"YR":{"O":[],"e":[],"f":[]}}'))
var y={j:A.w("ir"),n:A.w("r<hS>"),c:A.w("t<hS>"),i:A.w("t<@>"),u:A.w("a3<c,ir>"),y:A.w("a3<c,@>"),w:A.w("c"),b:A.w("@"),v:A.w("ah?")};(function constants(){var x=a.makeConstList
D.aCa=new A.b5(C.e0,24,C.u,null,null,null)
D.aG3=new A.k9("M12 5v14M5 12h14",20,C.u,2.4,!1,C.cb,null)
D.V6=x([],y.n)
D.V8=x([],A.w("r<ir>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dGf","OX",()=>C.cj.$1$2$retry(new B.cwo(),B.cvw(),y.c))
x($,"dFS","ajo",()=>C.cj.VZ(0,new B.cvv(),B.cvw(),y.u,y.w))})()};
(a=>{a["Ln4gtycYjNXYv/q5mr0wrXP8xi8="]=a.current})($__dart_deferred_initializers__);