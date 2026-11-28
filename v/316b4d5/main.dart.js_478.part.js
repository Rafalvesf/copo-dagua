((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,F,E,G,B={
dFf(d){var x="partner_category",w=J.a6(d),v=A.a0(w.h(d,"name")),u=A.dt(w.h(d,"amount")),t=A.y(w.h(d,x))==null?null:A.qx(G.Vq,A.a0(w.h(d,x)))
return new B.nx(v,u,t,A.dt(w.h(d,"allocated")))},
doP(){return new B.zy()},
doQ(d){var x
A:{if("venue"===d){x=E.xW
break A}if("catering"===d){x=E.xS
break A}if("photography"===d){x=E.xT
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xU
break A}if("flowers_decor"===d){x=E.xV
break A}x=null
break A}return x},
uT:function uT(d,e){this.a=d
this.b=e},
zy:function zy(){this.b=this.x=null},
aZV:function aZV(){},
aZW:function aZW(d,e){this.a=d
this.b=e},
aZX:function aZX(){},
aZY:function aZY(){},
aZZ:function aZZ(){},
b__:function b__(){},
aZT:function aZT(d){this.a=d},
aZU:function aZU(d){this.a=d},
b_0:function b_0(d){this.a=d},
nx:function nx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
i6:function i6(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
a17:function a17(d,e){this.b=d
this.c=e},
b_1:function b_1(){}},C
J=c[1]
A=c[0]
D=c[2]
F=c[120]
E=c[220]
G=c[417]
B=a.updateHolder(c[77],B)
C=c[416]
B.uT.prototype={
ax_(d,e){var x=e==null?this.a:e
return new B.uT(x,d==null?this.b:d)},
im(d){return this.ax_(null,d)},
awJ(d){return this.ax_(d,null)}}
B.zy.prototype={
d0(){var x=y.V,w=A.eS(this).G(A.cA($.cp(),new B.aZV(),y.v,x),x)
x=w==null
this.x=x?null:w.a
if(!x)A.jK(new B.aZW(this,w),y.H)
return C.agN},
bY(d,e){return this.bxa(0,e)},
bxa(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l,k
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sZ(0,v.gZ(0).im(!0))
u=$.Q()
t=u.b
t===$&&A.b()
s=e.a
r=t.R("budgets").cu(0).V("wedding_id",s).cd().b6(new B.aZX(),y.h)
q=u.b.R("budget_categories").cu(0).V("wedding_id",s).cK(0,"position",!0).b6(new B.aZY(),y.p)
p=v.HN(s).cH(new B.aZZ(),new B.b__(),y.Y)
x=2
return A.d(r,$async$bY)
case 2:o=g
x=3
return A.d(q,$async$bY)
case 3:n=g
x=o!=null?4:6
break
case 4:m=A.dt(J.i(o,"total"))
x=5
break
case 6:m=e.as
if(m==null)m=0
x=m>0?7:8
break
case 7:x=9
return A.d(u.b.R("budgets").yi(A.R(["wedding_id",s,"total",m],y.N,y.K)),$async$bY)
case 9:case 8:case 5:l=J.dm(n,B.dJu(),y.u).bx(0)
x=10
return A.d(p,$async$bY)
case 10:k=g
if(k!=null)v.b7Q(l,k)
v.sZ(0,new B.uT(!1,new B.a17(m,l)))
return A.l(null,w)}})
return A.m($async$bY,w)},
Zr(d){var x=0,w=A.n(y.H),v=this,u
var $async$Zr=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.eS(v).a0(0,$.cp(),y.v).b
x=u!=null?2:3
break
case 2:x=4
return A.d(v.bY(0,u),$async$Zr)
case 4:case 3:return A.l(null,w)}})
return A.m($async$Zr,w)},
HN(d){return this.aSh(d)},
aSh(a2){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$HN=A.j(function(a3,a4){if(a3===1)return A.k(a4,w)
for(;;)switch(x){case 0:a0=$.Q().b
a0===$&&A.b()
x=3
return A.d(a0.R("bookings").al(0,"id, status, total_amount, partner_profiles(partner_profile_categories(partner_categories(slug, label_pt)))").V("wedding_id",a2),$async$HN)
case 3:u=a4
a0=y.O
t=A.F(y.N,a0)
s=A.F(a0,y.i)
r=A.a([],y.s)
for(a0=y.P,q=J.bi(u,a0),p=A.u(q),q=new A.aj(q,q.gA(q),p.i("aj<V.E>")),o=y.h,n=y.g,p=p.i("V.E");q.q();){m=q.d
if(m==null)m=p.a(m)
l=J.a6(m)
k=o.a(l.h(m,"partner_profiles"))
j=n.a(k==null?null:J.i(k,"partner_profile_categories"))
if(j==null)j=D.aj
k=J.a6(j)
i=k.gY(j)?null:o.a(J.i(a0.a(k.gJ(j)),"partner_categories"))
k=i==null
h=A.y(k?null:J.i(i,"slug"))
if(h==null)h="other"
g=A.y(k?null:J.i(i,"label_pt"))
f=new A.X(h,g==null?"Outros":g)
e=A.a0(l.h(m,"id"))
t.j(0,e,f)
if(C.bVr.u(0,l.h(m,"status"))){k=s.h(0,f)
if(k==null)k=0
m=A.aF(l.h(m,"total_amount"))
if(m==null)m=null
s.j(0,f,k+(m==null?0:m))}else r.push(e)}if(r.length===0){v=s
x=1
break}q=$.Q().b
q===$&&A.b()
a1=J
x=4
return A.d(q.R("payments").al(0,"booking_id, amount, refunded_amount, status").dE("booking_id",r).dE("status",["paid","refunded"]),$async$HN)
case 4:a0=a1.bi(a4,a0),q=A.u(a0),a0=new A.aj(a0,a0.gA(a0),q.i("aj<V.E>")),q=q.i("V.E")
case 5:if(!a0.q()){x=6
break}p=a0.d
if(p==null)p=q.a(p)
o=J.a6(p)
f=t.h(0,A.a0(o.h(p,"booking_id")))
if(f==null){x=5
break}n=A.dt(o.h(p,"amount"))
p=A.aF(o.h(p,"refunded_amount"))
if(p==null)p=null
d=n-(p==null?0:p)
if(d>0){p=s.h(0,f)
s.j(0,f,(p==null?0:p)+d)}x=5
break
case 6:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$HN,w)},
b7Q(d,e){var x,w,v,u,t,s,r,q
for(x=J.uH(e),x=x.gW(x);x.q();){w={}
v=x.gE(x)
w.a=null
u=v.a
w.a=u.b
t=B.doQ(u.a)
s=D.e.FK(d,new B.aZT(t))
if(s<0)s=D.e.FK(d,new B.aZU(w))
if(s>=0){r=d[s]
d[s]=new B.nx(r.a,r.b+v.b,r.c,r.d)}else{q=t==null?null:F.dvo(t)
w=q==null?w.a:q
D.e.B(d,new B.nx(w,v.b,t,0))}}},
OA(d,e){return this.bD7(d,e)},
bD7(d,e){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$OA=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:l=u.x
k=u.gZ(0).b
if(l==null||k==null){x=1
break}t=$.Q()
s=t.b
s===$&&A.b()
r=y.z
j=J
x=5
return A.d(s.R("budget_categories").bg(0,A.R(["allocated",e],r,r)).V("wedding_id",l).V("name",d).al(0,"id"),$async$OA)
case 5:x=j.dG(g)?3:4
break
case 3:s=k.c
q=A.f9(new A.a7(s,new B.b_0(d),A.a8(s).i("a7<1>")))
t=t.b.R("budget_categories")
if(q==null)r=null
else{r=q.c
r=r==null?null:r.b}x=6
return A.d(t.dc(0,A.R(["wedding_id",l,"name",d,"partner_category",r,"amount",0,"allocated",e,"position",s.length],y.N,y.X)),$async$OA)
case 6:case 4:t=u.gZ(0)
s=k.b
r=A.a([],y.Q)
for(p=k.c,o=p.length,n=0;n<p.length;p.length===o||(0,A.I)(p),++n){q=p[n]
m=q.a
r.push(m===d?new B.nx(m,q.b,q.c,e):q)}u.sZ(0,t.awJ(new B.a17(s,r)))
case 1:return A.l(v,w)}})
return A.m($async$OA,w)},
a_b(d){return this.bDp(d)},
bDp(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$a_b=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=u.x
if(r==null){x=1
break}t=$.Q().b
t===$&&A.b()
x=3
return A.d(t.R("budgets").yi(A.R(["wedding_id",r,"total",d,"updated_at",new A.aa(Date.now(),0,!1).cP()],y.N,y.K)),$async$a_b)
case 3:s=u.gZ(0).b
if(s==null){x=1
break}u.sZ(0,u.gZ(0).awJ(new B.a17(d,s.c)))
case 1:return A.l(v,w)}})
return A.m($async$a_b,w)}}
B.nx.prototype={
gar(d){return this.a}}
B.i6.prototype={}
B.a17.prototype={
gq3(){return D.e.cQ(this.c,0,new B.b_1())}}
var z=a.updateTypes(["C(nx)","uT()","T(T,nx)","nx(a4<c,@>)","zy()"])
B.aZV.prototype={
$1(d){return d.b},
$S:168}
B.aZW.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.aZX.prototype={
$1(d){return d},
$S:1330}
B.aZY.prototype={
$1(d){return d},
$S:42}
B.aZZ.prototype={
$1(d){return d},
$S:1331}
B.b__.prototype={
$1(d){return null},
$S:13}
B.aZT.prototype={
$1(d){var x=this.a
return x!=null&&d.c===x},
$S:z+0}
B.aZU.prototype={
$1(d){return d.a.toLowerCase()===this.a.a.toLowerCase()},
$S:z+0}
B.b_0.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.b_1.prototype={
$2(d,e){return d+e.b},
$S:z+2};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u
x(B,"dJu","dFf",3)
w(B,"dJt","doP",4)
v(B.zy.prototype,"giH","d0",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[B.uT,B.nx,B.i6,B.a17])
w(B.zy,A.fq)
x(A.bv,[B.aZV,B.aZX,B.aZY,B.aZZ,B.b__,B.aZT,B.aZU,B.b_0])
w(B.aZW,A.bO)
w(B.b_1,A.cM)})()
A.bq(b.typeUniverse,JSON.parse('{"zy":{"fq":["uT"]}}'))
var y=(function rtii(){var x=A.B
return{u:x("nx"),v:x("en"),Q:x("r<nx>"),s:x("r<c>"),p:x("t<a4<c,@>>"),P:x("a4<c,@>"),W:x("a4<+(c,c),T>"),K:x("L"),O:x("+(c,c)"),N:x("c"),i:x("T"),z:x("@"),V:x("f7?"),g:x("t<@>?"),h:x("a4<c,@>?"),Y:x("a4<+(c,c),T>?"),X:x("L?"),H:x("~")}})();(function constants(){C.agN=new B.uT(!1,null)
C.bIs={awaiting_deposit:0,confirmed:1,payment_overdue:2,disputed:3,completed:4}
C.bVr=new A.ei(C.bIs,5,A.B("ei<c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYo","CJ",()=>A.n1(B.dJt(),null,!1,null,null,A.B("zy"),A.B("uT")))})()};
(a=>{a["GIPApoYRgGv6rMU2Y6ivxvCLi2c="]=a.current})($__dart_deferred_initializers__);