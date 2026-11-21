((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dr3(d,e){return null},
iu:function iu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cxU:function cxU(){},
cxT:function cxT(d,e){this.a=d
this.b=e},
cwZ:function cwZ(){},
YZ:function YZ(d,e,f){this.c=d
this.d=e
this.a=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[78],B)
D=c[218]
B.iu.prototype={
gau(d){return this.b}}
B.YZ.prototype={
u(d){var x=null,w=A.X(999)
return A.fp(!1,C.aC,!0,x,A.eO(!1,w,!0,A.C(C.O,this.d?D.aGi:D.aCr,C.r,x,x,C.ml,x,44,x,x,x,x,44),x,!0,x,x,x,x,x,x,x,x,x,x,this.c,x,x,x,x,x,x,x),C.r,C.ao,0,x,x,x,x,x,C.cH)}}
var z=a.updateTypes(["G<a3<c,iu>>(au,c)","bo?(v,K)"])
B.cxU.prototype={
$1(d){return this.aEg(d)},
aEg(d){var x=0,w=A.n(y.c),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=$.R()
n=o.b
n===$&&A.b()
u=n.gbF().e.a
if((u==null?null:u.r)==null){v=D.Ve
x=1
break}x=3
return A.d(n.P("chat_groups").aG(0,"*").XS(0,"last_message_at",!1,!1),$async$$1)
case 3:t=f
n=o.b.P("chat_group_members").aG(0,"group_id, last_read_at")
o=o.b.gbF().e.a
u=A.B(y.w,y.v)
m=s=y.y
l=J
x=4
return A.d(n.V("profile_id",(o==null?null:o.r).a),$async$$1)
case 4:m,o=l.bw(f,s),n=A.u(o),o=new A.an(o,o.gA(o),n.i("an<V.E>")),n=n.i("V.E")
case 5:if(!o.t()){x=6
break}r=o.d
if(r==null)r=n.a(r)
q=J.a5(r)
p=A.a2(q.h(r,"group_id"))
u.j(0,p,q.h(r,"last_read_at")==null?null:A.dc(A.a2(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.n)
for(n=J.bw(t,s),s=A.u(n),n=new A.an(n,n.gA(n),s.i("an<V.E>")),s=s.i("V.E");n.t();){r=n.d
if(r==null)r=s.a(r)
if(u.av(0,J.h(r,"id")))o.push(new B.cxT(r,u).$0())}v=o
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1308}
B.cxT.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a5(t),r=s.h(t,u)==null?A.dc(A.a2(s.h(t,"created_at"))):A.dc(A.a2(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.a2(s.h(t,"id")),o=A.M(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.a2(s.h(t,"name"))
w=A.M(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.hE(q)
else v=!1
return new A.hV(p,o,x,w,r,v,A.M(s.h(t,"created_by")),J.o(s.h(t,"is_direct"),!0))},
$S:322}
B.cwZ.prototype={
$2(d,e){return this.aE6(d,e)},
aE6(d,e){var x=0,w=A.n(y.u),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:q=$.R().b
q===$&&A.b()
u=y.w
t=y.b
s=A.B(u,y.j)
p=J
o=y.i
x=3
return A.d(q.b1("chat_group_people",A.Q(["p_group_id",e],u,t),t),$async$$2)
case 3:q=p.bw(o.a(g),y.y),u=A.u(q),q=new A.an(q,q.gA(q),u.i("an<V.E>")),u=u.i("V.E")
case 4:if(!q.t()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a5(t)
s.j(0,A.a2(r.h(t,"profile_id")),new B.iu(A.a2(r.h(t,"profile_id")),A.a2(r.h(t,"full_name")),A.M(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0};(function installTearOffs(){var x=a._static_2
x(B,"cx_","dr3",1)})();(function inheritance(){var x=a.inherit
x(B.iu,A.K)
x(B.cxU,A.bx)
x(B.cxT,A.bS)
x(B.cwZ,A.cS)
x(B.YZ,A.O)})()
A.bu(b.typeUniverse,JSON.parse('{"YZ":{"O":[],"e":[],"f":[]}}'))
var y={j:A.w("iu"),n:A.w("r<hV>"),c:A.w("t<hV>"),i:A.w("t<@>"),u:A.w("a3<c,iu>"),y:A.w("a3<c,@>"),w:A.w("c"),b:A.w("@"),v:A.w("ai?")};(function constants(){var x=a.makeConstList
D.aCr=new A.b6(C.e4,24,C.u,null,null,null)
D.aGi=new A.kB("M12 5v14M5 12h14",20,C.u,2.4,!1,C.cc,null)
D.Ve=x([],y.n)
D.Vg=x([],A.w("r<iu>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dIa","P2",()=>C.ch.$1$2$retry(new B.cxU(),B.cx_(),y.c))
x($,"dHN","ajD",()=>C.ch.Wa(0,new B.cwZ(),B.cx_(),y.u,y.w))})()};
(a=>{a["GbEO2Qmpb9PwomBDRdQV06TcijU="]=a.current})($__dart_deferred_initializers__);