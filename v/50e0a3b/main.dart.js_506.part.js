((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
dnO(d,e){return null},
iq:function iq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cvK:function cvK(){},
cvJ:function cvJ(d,e){this.a=d
this.b=e},
cuQ:function cuQ(){},
YO:function YO(d,e,f){this.c=d
this.d=e
this.a=f}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[78],B)
D=c[233]
B.iq.prototype={
gaA(d){return this.b}}
B.YO.prototype={
u(d){var x=null,w=A.Z(999)
return A.fd(!1,C.at,!0,x,A.eC(!1,w,!0,A.G(C.P,this.d?D.aFH:D.aBQ,C.t,x,x,C.mj,x,44,x,x,x,x,44),x,!0,x,x,x,x,x,x,x,x,x,x,this.c,x,x,x,x,x,x,x),C.t,C.ag,0,x,x,x,x,x,C.cG)}}
var z=a.updateTypes(["E<a3<c,iq>>(au,c)","bq?(w,J)"])
B.cvK.prototype={
$1(d){return this.aDW(d)},
aDW(d){var x=0,w=A.n(y.c),v,u,t,s,r,q,p,o,n,m,l
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:o=$.S()
n=o.b
n===$&&A.b()
u=n.gbH().e.a
if((u==null?null:u.r)==null){v=D.V6
x=1
break}x=3
return A.d(n.T("chat_groups").aI(0,"*").XC(0,"last_message_at",!1,!1),$async$$1)
case 3:t=f
n=o.b.T("chat_group_members").aI(0,"group_id, last_read_at")
o=o.b.gbH().e.a
u=A.A(y.w,y.v)
m=s=y.y
l=J
x=4
return A.d(n.X("profile_id",(o==null?null:o.r).a),$async$$1)
case 4:m,o=l.by(f,s),n=A.u(o),o=new A.ap(o,o.gA(o),n.i("ap<T.E>")),n=n.i("T.E")
case 5:if(!o.t()){x=6
break}r=o.d
if(r==null)r=n.a(r)
q=J.a5(r)
p=A.a2(q.h(r,"group_id"))
u.j(0,p,q.h(r,"last_read_at")==null?null:A.dd(A.a2(q.h(r,"last_read_at"))))
x=5
break
case 6:o=A.a([],y.n)
for(n=J.by(t,s),s=A.u(n),n=new A.ap(n,n.gA(n),s.i("ap<T.E>")),s=s.i("T.E");n.t();){r=n.d
if(r==null)r=s.a(r)
if(u.az(0,J.h(r,"id")))o.push(new B.cvJ(r,u).$0())}v=o
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1276}
B.cvJ.prototype={
$0(){var x,w,v,u="last_message_at",t=this.a,s=J.a5(t),r=s.h(t,u)==null?A.dd(A.a2(s.h(t,"created_at"))):A.dd(A.a2(s.h(t,u))),q=this.b.h(0,s.h(t,"id")),p=A.a2(s.h(t,"id")),o=A.L(s.h(t,"wedding_id"))
if(o==null)o=""
x=A.a2(s.h(t,"name"))
w=A.L(s.h(t,"last_message"))
if(s.h(t,u)!=null)v=q==null||r.i0(q)
else v=!1
return new A.hT(p,o,x,w,r,v,A.L(s.h(t,"created_by")),J.o(s.h(t,"is_direct"),!0))},
$S:360}
B.cuQ.prototype={
$2(d,e){return this.aDM(d,e)},
aDM(d,e){var x=0,w=A.n(y.u),v,u,t,s,r,q,p,o
var $async$$2=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:q=$.S().b
q===$&&A.b()
u=y.w
t=y.b
s=A.A(u,y.j)
p=J
o=y.i
x=3
return A.d(q.b4("chat_group_people",A.Q(["p_group_id",e],u,t),t),$async$$2)
case 3:q=p.by(o.a(g),y.y),u=A.u(q),q=new A.ap(q,q.gA(q),u.i("ap<T.E>")),u=u.i("T.E")
case 4:if(!q.t()){x=5
break}t=q.d
if(t==null)t=u.a(t)
r=J.a5(t)
s.j(0,A.a2(r.h(t,"profile_id")),new B.iq(A.a2(r.h(t,"profile_id")),A.a2(r.h(t,"full_name")),A.L(r.h(t,"avatar_url")),""))
x=4
break
case 5:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$2,w)},
$S:z+0};(function installTearOffs(){var x=a._static_2
x(B,"cuR","dnO",1)})();(function inheritance(){var x=a.inherit
x(B.iq,A.J)
x(B.cvK,A.bw)
x(B.cvJ,A.bL)
x(B.cuQ,A.cM)
x(B.YO,A.O)})()
A.bt(b.typeUniverse,JSON.parse('{"YO":{"O":[],"e":[],"f":[]}}'))
var y={j:A.v("iq"),n:A.v("r<hT>"),c:A.v("t<hT>"),i:A.v("t<@>"),u:A.v("a3<c,iq>"),y:A.v("a3<c,@>"),w:A.v("c"),b:A.v("@"),v:A.v("ai?")};(function constants(){var x=a.makeConstList
D.aBQ=new A.bi(C.e2,24,C.u,null,null,null)
D.aFH=new A.jG("M12 5v14M5 12h14",20,C.u,2.4,!1,C.cd,null)
D.V6=x([],y.n)
D.V8=x([],A.v("r<iq>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dFB","OV",()=>C.cm.$1$2$retry(new B.cvK(),B.cuR(),y.c))
x($,"dFd","ajs",()=>C.cm.VW(0,new B.cuQ(),B.cuR(),y.u,y.w))})()};
(a=>{a["DKnNzfx2mSdC4tvNFfCLzNiOXNA="]=a.current})($__dart_deferred_initializers__);