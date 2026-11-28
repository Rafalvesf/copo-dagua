((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,F,E,G,B={
dEG(d){var x="partner_category",w=J.a7(d),v=A.Y(w.h(d,"name")),u=A.dv(w.h(d,"amount")),t=A.C(w.h(d,x))==null?null:A.qy(G.Vd,A.Y(w.h(d,x)))
return new B.np(v,u,t,A.dv(w.h(d,"allocated")))},
doe(){return new B.zt()},
dof(d){var x
A:{if("venue"===d){x=E.xP
break A}if("catering"===d){x=E.xL
break A}if("photography"===d){x=E.xM
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xN
break A}if("flowers_decor"===d){x=E.xO
break A}x=null
break A}return x},
uP:function uP(d,e){this.a=d
this.b=e},
zt:function zt(){this.b=this.x=null},
aYV:function aYV(){},
aYW:function aYW(d,e){this.a=d
this.b=e},
aYX:function aYX(){},
aYY:function aYY(){},
aYZ:function aYZ(){},
aZ_:function aZ_(){},
aYT:function aYT(d){this.a=d},
aYU:function aYU(d){this.a=d},
aZ0:function aZ0(d){this.a=d},
np:function np(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
i4:function i4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
a0J:function a0J(d,e){this.b=d
this.c=e},
aZ1:function aZ1(){}},C
J=c[1]
A=c[0]
D=c[2]
F=c[119]
E=c[219]
G=c[414]
B=a.updateHolder(c[77],B)
C=c[413]
B.uP.prototype={
awv(d,e){var x=e==null?this.a:e
return new B.uP(x,d==null?this.b:d)},
ik(d){return this.awv(null,d)},
awg(d){return this.awv(d,null)}}
B.zt.prototype={
d1(){var x=y.V,w=A.eQ(this).G(A.cB($.cq(),new B.aYV(),y.v,x),x)
x=w==null
this.x=x?null:w.a
if(!x)A.j6(new B.aYW(this,w),y.H)
return C.agB},
bY(d,e){return this.bw0(0,e)},
bw0(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l,k
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa1(0,v.ga1(0).ik(!0))
u=$.Q()
t=u.b
t===$&&A.b()
s=e.a
r=t.P("budgets").cl(0).V("wedding_id",s).cj().b3(new B.aYX(),y.h)
q=u.b.P("budget_categories").cl(0).V("wedding_id",s).cI(0,"position",!0).b3(new B.aYY(),y.p)
p=v.HM(s).cr(new B.aYZ(),new B.aZ_(),y.Y)
x=2
return A.d(r,$async$bY)
case 2:o=g
x=3
return A.d(q,$async$bY)
case 3:n=g
x=o!=null?4:6
break
case 4:m=A.dv(J.i(o,"total"))
x=5
break
case 6:m=e.as
if(m==null)m=0
x=m>0?7:8
break
case 7:x=9
return A.d(u.b.P("budgets").yl(A.R(["wedding_id",s,"total",m],y.N,y.K)),$async$bY)
case 9:case 8:case 5:l=J.da(n,B.dIS(),y.u).bx(0)
x=10
return A.d(p,$async$bY)
case 10:k=g
if(k!=null)v.b6X(l,k)
v.sa1(0,new B.uP(!1,new B.a0J(m,l)))
return A.l(null,w)}})
return A.m($async$bY,w)},
Zk(d){var x=0,w=A.n(y.H),v=this,u
var $async$Zk=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.eQ(v).a_(0,$.cq(),y.v).b
x=u!=null?2:3
break
case 2:x=4
return A.d(v.bY(0,u),$async$Zk)
case 4:case 3:return A.l(null,w)}})
return A.m($async$Zk,w)},
HM(d){return this.aRG(d)},
aRG(a2){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$HM=A.j(function(a3,a4){if(a3===1)return A.k(a4,w)
for(;;)switch(x){case 0:a0=$.Q().b
a0===$&&A.b()
x=3
return A.d(a0.P("bookings").al(0,"id, status, total_amount, partner_profiles(partner_profile_categories(partner_categories(slug, label_pt)))").V("wedding_id",a2),$async$HM)
case 3:u=a4
a0=y.O
t=A.E(y.N,a0)
s=A.E(a0,y.i)
r=A.a([],y.s)
for(a0=y.P,q=J.bf(u,a0),p=A.u(q),q=new A.ag(q,q.gA(q),p.i("ag<V.E>")),o=y.h,n=y.g,p=p.i("V.E");q.q();){m=q.d
if(m==null)m=p.a(m)
l=J.a7(m)
k=o.a(l.h(m,"partner_profiles"))
j=n.a(k==null?null:J.i(k,"partner_profile_categories"))
if(j==null)j=D.ai
k=J.a7(j)
i=k.gY(j)?null:o.a(J.i(a0.a(k.gJ(j)),"partner_categories"))
k=i==null
h=A.C(k?null:J.i(i,"slug"))
if(h==null)h="other"
g=A.C(k?null:J.i(i,"label_pt"))
f=new A.X(h,g==null?"Outros":g)
e=A.Y(l.h(m,"id"))
t.j(0,e,f)
if(C.bV1.t(0,l.h(m,"status"))){k=s.h(0,f)
if(k==null)k=0
m=A.aD(l.h(m,"total_amount"))
if(m==null)m=null
s.j(0,f,k+(m==null?0:m))}else r.push(e)}if(r.length===0){v=s
x=1
break}q=$.Q().b
q===$&&A.b()
a1=J
x=4
return A.d(q.P("payments").al(0,"booking_id, amount, refunded_amount, status").da("booking_id",r).da("status",["paid","refunded"]),$async$HM)
case 4:a0=a1.bf(a4,a0),q=A.u(a0),a0=new A.ag(a0,a0.gA(a0),q.i("ag<V.E>")),q=q.i("V.E")
case 5:if(!a0.q()){x=6
break}p=a0.d
if(p==null)p=q.a(p)
o=J.a7(p)
f=t.h(0,A.Y(o.h(p,"booking_id")))
if(f==null){x=5
break}n=A.dv(o.h(p,"amount"))
p=A.aD(o.h(p,"refunded_amount"))
if(p==null)p=null
d=n-(p==null?0:p)
if(d>0){p=s.h(0,f)
s.j(0,f,(p==null?0:p)+d)}x=5
break
case 6:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$HM,w)},
b6X(d,e){var x,w,v,u,t,s,r,q
for(x=J.uD(e),x=x.gX(x);x.q();){w={}
v=x.gE(x)
w.a=null
u=v.a
w.a=u.b
t=B.dof(u.a)
s=D.e.FH(d,new B.aYT(t))
if(s<0)s=D.e.FH(d,new B.aYU(w))
if(s>=0){r=d[s]
d[s]=new B.np(r.a,r.b+v.b,r.c,r.d)}else{q=t==null?null:F.duR(t)
w=q==null?w.a:q
D.e.C(d,new B.np(w,v.b,t,0))}}},
Or(d,e){return this.bBY(d,e)},
bBY(d,e){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$Or=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:l=u.x
k=u.ga1(0).b
if(l==null||k==null){x=1
break}t=$.Q()
s=t.b
s===$&&A.b()
r=y.z
j=J
x=5
return A.d(s.P("budget_categories").bh(0,A.R(["allocated",e],r,r)).V("wedding_id",l).V("name",d).al(0,"id"),$async$Or)
case 5:x=j.dg(g)?3:4
break
case 3:s=k.c
q=A.eL(new A.a6(s,new B.aZ0(d),A.a8(s).i("a6<1>")))
t=t.b.P("budget_categories")
if(q==null)r=null
else{r=q.c
r=r==null?null:r.b}x=6
return A.d(t.d0(0,A.R(["wedding_id",l,"name",d,"partner_category",r,"amount",0,"allocated",e,"position",s.length],y.N,y.X)),$async$Or)
case 6:case 4:t=u.ga1(0)
s=k.b
r=A.a([],y.Q)
for(p=k.c,o=p.length,n=0;n<p.length;p.length===o||(0,A.G)(p),++n){q=p[n]
m=q.a
r.push(m===d?new B.np(m,q.b,q.c,e):q)}u.sa1(0,t.awg(new B.a0J(s,r)))
case 1:return A.l(v,w)}})
return A.m($async$Or,w)},
a_2(d){return this.bCf(d)},
bCf(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$a_2=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=u.x
if(r==null){x=1
break}t=$.Q().b
t===$&&A.b()
x=3
return A.d(t.P("budgets").yl(A.R(["wedding_id",r,"total",d,"updated_at",new A.ab(Date.now(),0,!1).cf()],y.N,y.K)),$async$a_2)
case 3:s=u.ga1(0).b
if(s==null){x=1
break}u.sa1(0,u.ga1(0).awg(new B.a0J(d,s.c)))
case 1:return A.l(v,w)}})
return A.m($async$a_2,w)}}
B.np.prototype={
gap(d){return this.a}}
B.i4.prototype={}
B.a0J.prototype={
gpX(){return D.e.cU(this.c,0,new B.aZ1())}}
var z=a.updateTypes(["B(np)","uP()","T(T,np)","np(a3<c,@>)","zt()"])
B.aYV.prototype={
$1(d){return d.b},
$S:175}
B.aYW.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.aYX.prototype={
$1(d){return d},
$S:398}
B.aYY.prototype={
$1(d){return d},
$S:29}
B.aYZ.prototype={
$1(d){return d},
$S:1336}
B.aZ_.prototype={
$1(d){return null},
$S:11}
B.aYT.prototype={
$1(d){var x=this.a
return x!=null&&d.c===x},
$S:z+0}
B.aYU.prototype={
$1(d){return d.a.toLowerCase()===this.a.a.toLowerCase()},
$S:z+0}
B.aZ0.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.aZ1.prototype={
$2(d,e){return d+e.b},
$S:z+2};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u
x(B,"dIS","dEG",3)
w(B,"dIR","doe",4)
v(B.zt.prototype,"giD","d1",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.M,[B.uP,B.np,B.i4,B.a0J])
w(B.zt,A.fb)
x(A.bt,[B.aYV,B.aYX,B.aYY,B.aYZ,B.aZ_,B.aYT,B.aYU,B.aZ0])
w(B.aYW,A.bL)
w(B.aZ1,A.cK)})()
A.br(b.typeUniverse,JSON.parse('{"zt":{"fb":["uP"]}}'))
var y=(function rtii(){var x=A.A
return{u:x("np"),v:x("ed"),Q:x("r<np>"),s:x("r<c>"),p:x("t<a3<c,@>>"),P:x("a3<c,@>"),W:x("a3<+(c,c),T>"),K:x("M"),O:x("+(c,c)"),N:x("c"),i:x("T"),z:x("@"),V:x("fl?"),g:x("t<@>?"),h:x("a3<c,@>?"),Y:x("a3<+(c,c),T>?"),X:x("M?"),H:x("~")}})();(function constants(){C.agB=new B.uP(!1,null)
C.bIu={awaiting_deposit:0,confirmed:1,payment_overdue:2,disputed:3,completed:4}
C.bV1=new A.ey(C.bIu,5,A.A("ey<c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXI","CD",()=>A.mW(B.dIR(),null,!1,null,null,A.A("zt"),A.A("uP")))})()};
(a=>{a["fRAlQz6IlXbo7wycL4/asSnPH5c="]=a.current})($__dart_deferred_initializers__);