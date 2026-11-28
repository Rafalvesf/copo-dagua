((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,F,E,G,B={
dDG(d){var x="partner_category",w=J.a7(d),v=A.Z(w.h(d,"name")),u=A.dt(w.h(d,"amount")),t=A.C(w.h(d,x))==null?null:A.qA(G.VC,A.Z(w.h(d,x)))
return new B.no(v,u,t,A.dt(w.h(d,"allocated")))},
dnb(){return new B.zC()},
dnc(d){var x
A:{if("venue"===d){x=E.y1
break A}if("catering"===d){x=E.xY
break A}if("photography"===d){x=E.xZ
break A}if("music_dj"===d||"bands_musicians"===d){x=E.y_
break A}if("flowers_decor"===d){x=E.y0
break A}x=null
break A}return x},
uM:function uM(d,e){this.a=d
this.b=e},
zC:function zC(){this.b=this.x=null},
aZf:function aZf(){},
aZg:function aZg(d,e){this.a=d
this.b=e},
aZh:function aZh(){},
aZi:function aZi(){},
aZj:function aZj(){},
aZk:function aZk(){},
aZd:function aZd(d){this.a=d},
aZe:function aZe(d){this.a=d},
aZl:function aZl(d){this.a=d},
no:function no(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
i2:function i2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
a0Q:function a0Q(d,e){this.b=d
this.c=e},
aZm:function aZm(){}},C
J=c[1]
A=c[0]
D=c[2]
F=c[118]
E=c[226]
G=c[421]
B=a.updateHolder(c[77],B)
C=c[420]
B.uM.prototype={
axc(d,e){var x=e==null?this.a:e
return new B.uM(x,d==null?this.b:d)},
im(d){return this.axc(null,d)},
awZ(d){return this.axc(d,null)}}
B.zC.prototype={
d5(){var x=y.V,w=A.eQ(this).G(A.cI($.cr(),new B.aZf(),y.v,x),x)
x=w==null
this.x=x?null:w.a
if(!x)A.jk(new B.aZg(this,w),y.H)
return C.agR},
bY(d,e){return this.bxe(0,e)},
bxe(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l,k
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).im(!0))
u=$.Q()
t=u.b
t===$&&A.b()
s=e.a
r=t.P("budgets").cl(0).V("wedding_id",s).cj().b6(new B.aZh(),y.h)
q=u.b.P("budget_categories").cl(0).V("wedding_id",s).cR(0,"position",!0).b6(new B.aZi(),y.p)
p=v.I3(s).cC(new B.aZj(),new B.aZk(),y.Y)
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
return A.d(u.b.P("budgets").yu(A.R(["wedding_id",s,"total",m],y.N,y.K)),$async$bY)
case 9:case 8:case 5:l=J.d9(n,B.dHO(),y.u).by(0)
x=10
return A.d(p,$async$bY)
case 10:k=g
if(k!=null)v.b8h(l,k)
v.sa4(0,new B.uM(!1,new B.a0Q(m,l)))
return A.l(null,w)}})
return A.m($async$bY,w)},
ZP(d){var x=0,w=A.n(y.H),v=this,u
var $async$ZP=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.eQ(v).a0(0,$.cr(),y.v).b
x=u!=null?2:3
break
case 2:x=4
return A.d(v.bY(0,u),$async$ZP)
case 4:case 3:return A.l(null,w)}})
return A.m($async$ZP,w)},
I3(d){return this.aSo(d)},
aSo(a2){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$I3=A.j(function(a3,a4){if(a3===1)return A.k(a4,w)
for(;;)switch(x){case 0:a0=$.Q().b
a0===$&&A.b()
x=3
return A.d(a0.P("bookings").aj(0,"id, status, total_amount, partner_profiles(partner_profile_categories(partner_categories(slug, label_pt)))").V("wedding_id",a2),$async$I3)
case 3:u=a4
a0=y.O
t=A.E(y.N,a0)
s=A.E(a0,y.i)
r=A.a([],y.s)
for(a0=y.P,q=J.bh(u,a0),p=A.u(q),q=new A.al(q,q.gA(q),p.i("al<V.E>")),o=y.h,n=y.g,p=p.i("V.E");q.t();){m=q.d
if(m==null)m=p.a(m)
l=J.a7(m)
k=o.a(l.h(m,"partner_profiles"))
j=n.a(k==null?null:J.i(k,"partner_profile_categories"))
if(j==null)j=D.ak
k=J.a7(j)
i=k.gZ(j)?null:o.a(J.i(a0.a(k.gL(j)),"partner_categories"))
k=i==null
h=A.C(k?null:J.i(i,"slug"))
if(h==null)h="other"
g=A.C(k?null:J.i(i,"label_pt"))
f=new A.a_(h,g==null?"Outros":g)
e=A.Z(l.h(m,"id"))
t.j(0,e,f)
if(C.bVu.q(0,l.h(m,"status"))){k=s.h(0,f)
if(k==null)k=0
m=A.aG(l.h(m,"total_amount"))
if(m==null)m=null
s.j(0,f,k+(m==null?0:m))}else r.push(e)}if(r.length===0){v=s
x=1
break}q=$.Q().b
q===$&&A.b()
a1=J
x=4
return A.d(q.P("payments").aj(0,"booking_id, amount, refunded_amount, status").dN("booking_id",r).dN("status",["paid","refunded"]),$async$I3)
case 4:a0=a1.bh(a4,a0),q=A.u(a0),a0=new A.al(a0,a0.gA(a0),q.i("al<V.E>")),q=q.i("V.E")
case 5:if(!a0.t()){x=6
break}p=a0.d
if(p==null)p=q.a(p)
o=J.a7(p)
f=t.h(0,A.Z(o.h(p,"booking_id")))
if(f==null){x=5
break}n=A.dt(o.h(p,"amount"))
p=A.aG(o.h(p,"refunded_amount"))
if(p==null)p=null
d=n-(p==null?0:p)
if(d>0){p=s.h(0,f)
s.j(0,f,(p==null?0:p)+d)}x=5
break
case 6:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$I3,w)},
b8h(d,e){var x,w,v,u,t,s,r,q
for(x=J.uz(e),x=x.gX(x);x.t();){w={}
v=x.gE(x)
w.a=null
u=v.a
w.a=u.b
t=B.dnc(u.a)
s=D.e.FS(d,new B.aZd(t))
if(s<0)s=D.e.FS(d,new B.aZe(w))
if(s>=0){r=d[s]
d[s]=new B.no(r.a,r.b+v.b,r.c,r.d)}else{q=t==null?null:F.dtO(t)
w=q==null?w.a:q
D.e.C(d,new B.no(w,v.b,t,0))}}},
OP(d,e){return this.bDg(d,e)},
bDg(d,e){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$OP=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:l=u.x
k=u.ga4(0).b
if(l==null||k==null){x=1
break}t=$.Q()
s=t.b
s===$&&A.b()
r=y.z
j=J
x=5
return A.d(s.P("budget_categories").bj(0,A.R(["allocated",e],r,r)).V("wedding_id",l).V("name",d).aj(0,"id"),$async$OP)
case 5:x=j.dr(g)?3:4
break
case 3:s=k.c
q=A.eS(new A.a6(s,new B.aZl(d),A.a8(s).i("a6<1>")))
t=t.b.P("budget_categories")
if(q==null)r=null
else{r=q.c
r=r==null?null:r.b}x=6
return A.d(t.d8(0,A.R(["wedding_id",l,"name",d,"partner_category",r,"amount",0,"allocated",e,"position",s.length],y.N,y.X)),$async$OP)
case 6:case 4:t=u.ga4(0)
s=k.b
r=A.a([],y.Q)
for(p=k.c,o=p.length,n=0;n<p.length;p.length===o||(0,A.H)(p),++n){q=p[n]
m=q.a
r.push(m===d?new B.no(m,q.b,q.c,e):q)}u.sa4(0,t.awZ(new B.a0Q(s,r)))
case 1:return A.l(v,w)}})
return A.m($async$OP,w)},
a_x(d){return this.bDy(d)},
bDy(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$a_x=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=u.x
if(r==null){x=1
break}t=$.Q().b
t===$&&A.b()
x=3
return A.d(t.P("budgets").yu(A.R(["wedding_id",r,"total",d,"updated_at",new A.ac(Date.now(),0,!1).cg()],y.N,y.K)),$async$a_x)
case 3:s=u.ga4(0).b
if(s==null){x=1
break}u.sa4(0,u.ga4(0).awZ(new B.a0Q(d,s.c)))
case 1:return A.l(v,w)}})
return A.m($async$a_x,w)}}
B.no.prototype={
gaq(d){return this.a}}
B.i2.prototype={}
B.a0Q.prototype={
gpZ(){return D.e.cW(this.c,0,new B.aZm())}}
var z=a.updateTypes(["y(no)","uM()","T(T,no)","no(a5<c,@>)","zC()"])
B.aZf.prototype={
$1(d){return d.b},
$S:168}
B.aZg.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.aZh.prototype={
$1(d){return d},
$S:299}
B.aZi.prototype={
$1(d){return d},
$S:29}
B.aZj.prototype={
$1(d){return d},
$S:1320}
B.aZk.prototype={
$1(d){return null},
$S:11}
B.aZd.prototype={
$1(d){var x=this.a
return x!=null&&d.c===x},
$S:z+0}
B.aZe.prototype={
$1(d){return d.a.toLowerCase()===this.a.a.toLowerCase()},
$S:z+0}
B.aZl.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.aZm.prototype={
$2(d,e){return d+e.b},
$S:z+2};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u
x(B,"dHO","dDG",3)
w(B,"dHN","dnb",4)
v(B.zC.prototype,"giI","d5",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[B.uM,B.no,B.i2,B.a0Q])
w(B.zC,A.fe)
x(A.bw,[B.aZf,B.aZh,B.aZi,B.aZj,B.aZk,B.aZd,B.aZe,B.aZl])
w(B.aZg,A.bP)
w(B.aZm,A.cK)})()
A.bn(b.typeUniverse,JSON.parse('{"zC":{"fe":["uM"]}}'))
var y=(function rtii(){var x=A.w
return{u:x("no"),v:x("ed"),Q:x("r<no>"),s:x("r<c>"),p:x("t<a5<c,@>>"),P:x("a5<c,@>"),W:x("a5<+(c,c),T>"),K:x("J"),O:x("+(c,c)"),N:x("c"),i:x("T"),z:x("@"),V:x("fm?"),g:x("t<@>?"),h:x("a5<c,@>?"),Y:x("a5<+(c,c),T>?"),X:x("J?"),H:x("~")}})();(function constants(){C.agR=new B.uM(!1,null)
C.bIQ={awaiting_deposit:0,confirmed:1,payment_overdue:2,disputed:3,completed:4}
C.bVu=new A.ey(C.bIQ,5,A.w("ey<c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWA","CI",()=>A.mX(B.dHN(),null,!1,null,null,A.w("zC"),A.w("uM")))})()};
(a=>{a["ZGhJ1CSjfJI/cIBKrQ3kbZCrY6M="]=a.current})($__dart_deferred_initializers__);