((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,F,E,G,B={
dC9(d){var x="partner_category",w=J.a7(d),v=A.a1(w.h(d,"name")),u=A.dw(w.h(d,"amount")),t=A.D(w.h(d,x))==null?null:A.qD(G.VV,A.a1(w.h(d,x)))
return new B.np(v,u,t,A.dw(w.h(d,"allocated")))},
dlI(){return new B.zE()},
dlJ(d){var x
A:{if("venue"===d){x=E.yc
break A}if("catering"===d){x=E.y8
break A}if("photography"===d){x=E.y9
break A}if("music_dj"===d||"bands_musicians"===d){x=E.ya
break A}if("flowers_decor"===d){x=E.yb
break A}x=null
break A}return x},
uK:function uK(d,e){this.a=d
this.b=e},
zE:function zE(){this.b=this.x=null},
aZc:function aZc(){},
aZd:function aZd(d,e){this.a=d
this.b=e},
aZe:function aZe(){},
aZf:function aZf(){},
aZg:function aZg(){},
aZh:function aZh(){},
aZa:function aZa(d){this.a=d},
aZb:function aZb(d){this.a=d},
aZi:function aZi(d){this.a=d},
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
a0M:function a0M(d,e){this.b=d
this.c=e},
aZj:function aZj(){}},C
J=c[1]
A=c[0]
D=c[2]
F=c[118]
E=c[222]
G=c[415]
B=a.updateHolder(c[77],B)
C=c[414]
B.uK.prototype={
axe(d,e){var x=e==null?this.a:e
return new B.uK(x,d==null?this.b:d)},
ip(d){return this.axe(null,d)},
ax_(d){return this.axe(d,null)}}
B.zE.prototype={
d6(){var x=y.V,w=A.eQ(this).H(A.cH($.cm(),new B.aZc(),y.v,x),x)
x=w==null
this.x=x?null:w.a
if(!x)A.ji(new B.aZd(this,w),y.H)
return C.ahw},
c_(d,e){return this.bxS(0,e)},
bxS(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l,k
var $async$c_=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).ip(!0))
u=$.S()
t=u.b
t===$&&A.b()
s=e.a
r=t.R("budgets").cj(0).W("wedding_id",s).d3().b7(new B.aZe(),y.h)
q=u.b.R("budget_categories").cj(0).W("wedding_id",s).da(0,"position",!0).b7(new B.aZf(),y.p)
p=v.I8(s).cC(new B.aZg(),new B.aZh(),y.Y)
x=2
return A.d(r,$async$c_)
case 2:o=g
x=3
return A.d(q,$async$c_)
case 3:n=g
x=o!=null?4:6
break
case 4:m=A.dw(J.i(o,"total"))
x=5
break
case 6:m=e.as
if(m==null)m=0
x=m>0?7:8
break
case 7:x=9
return A.d(u.b.R("budgets").yw(A.T(["wedding_id",s,"total",m],y.N,y.K)),$async$c_)
case 9:case 8:case 5:l=J.d7(n,B.dGe(),y.u).by(0)
x=10
return A.d(p,$async$c_)
case 10:k=g
if(k!=null)v.b8B(l,k)
v.sa4(0,new B.uK(!1,new B.a0M(m,l)))
return A.l(null,w)}})
return A.m($async$c_,w)},
ZM(d){var x=0,w=A.n(y.H),v=this,u
var $async$ZM=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.eQ(v).a0(0,$.cm(),y.v).b
x=u!=null?2:3
break
case 2:x=4
return A.d(v.c_(0,u),$async$ZM)
case 4:case 3:return A.l(null,w)}})
return A.m($async$ZM,w)},
I8(d){return this.aSA(d)},
aSA(a2){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$I8=A.j(function(a3,a4){if(a3===1)return A.k(a4,w)
for(;;)switch(x){case 0:a0=$.S().b
a0===$&&A.b()
x=3
return A.d(a0.R("bookings").ao(0,"id, status, total_amount, partner_profiles(partner_profile_categories(partner_categories(slug, label_pt)))").W("wedding_id",a2),$async$I8)
case 3:u=a4
a0=y.O
t=A.E(y.N,a0)
s=A.E(a0,y.i)
r=A.a([],y.s)
for(a0=y.P,q=J.bl(u,a0),p=A.u(q),q=new A.al(q,q.gA(q),p.i("al<V.E>")),o=y.h,n=y.g,p=p.i("V.E");q.t();){m=q.d
if(m==null)m=p.a(m)
l=J.a7(m)
k=o.a(l.h(m,"partner_profiles"))
j=n.a(k==null?null:J.i(k,"partner_profile_categories"))
if(j==null)j=D.an
k=J.a7(j)
i=k.gY(j)?null:o.a(J.i(a0.a(k.gM(j)),"partner_categories"))
k=i==null
h=A.D(k?null:J.i(i,"slug"))
if(h==null)h="other"
g=A.D(k?null:J.i(i,"label_pt"))
f=new A.a3(h,g==null?"Outros":g)
e=A.a1(l.h(m,"id"))
t.j(0,e,f)
if(C.bWe.q(0,l.h(m,"status"))){k=s.h(0,f)
if(k==null)k=0
m=A.aL(l.h(m,"total_amount"))
if(m==null)m=null
s.j(0,f,k+(m==null?0:m))}else r.push(e)}if(r.length===0){v=s
x=1
break}q=$.S().b
q===$&&A.b()
a1=J
x=4
return A.d(q.R("payments").ao(0,"booking_id, amount, refunded_amount, status").ep("booking_id",r).ep("status",["paid","refunded"]),$async$I8)
case 4:a0=a1.bl(a4,a0),q=A.u(a0),a0=new A.al(a0,a0.gA(a0),q.i("al<V.E>")),q=q.i("V.E")
case 5:if(!a0.t()){x=6
break}p=a0.d
if(p==null)p=q.a(p)
o=J.a7(p)
f=t.h(0,A.a1(o.h(p,"booking_id")))
if(f==null){x=5
break}n=A.dw(o.h(p,"amount"))
p=A.aL(o.h(p,"refunded_amount"))
if(p==null)p=null
d=n-(p==null?0:p)
if(d>0){p=s.h(0,f)
s.j(0,f,(p==null?0:p)+d)}x=5
break
case 6:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$I8,w)},
b8B(d,e){var x,w,v,u,t,s,r,q
for(x=J.uz(e),x=x.gX(x);x.t();){w={}
v=x.gE(x)
w.a=null
u=v.a
w.a=u.b
t=B.dlJ(u.a)
s=D.e.G1(d,new B.aZa(t))
if(s<0)s=D.e.G1(d,new B.aZb(w))
if(s>=0){r=d[s]
d[s]=new B.np(r.a,r.b+v.b,r.c,r.d)}else{q=t==null?null:F.dsi(t)
w=q==null?w.a:q
D.e.B(d,new B.np(w,v.b,t,0))}}},
OY(d,e){return this.bDO(d,e)},
bDO(d,e){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$OY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:l=u.x
k=u.ga4(0).b
if(l==null||k==null){x=1
break}t=$.S()
s=t.b
s===$&&A.b()
r=y.z
j=J
x=5
return A.d(s.R("budget_categories").bh(0,A.T(["allocated",e],r,r)).W("wedding_id",l).W("name",d).ao(0,"id"),$async$OY)
case 5:x=j.dp(g)?3:4
break
case 3:s=k.c
q=A.eU(new A.a6(s,new B.aZi(d),A.a8(s).i("a6<1>")))
t=t.b.R("budget_categories")
if(q==null)r=null
else{r=q.c
r=r==null?null:r.b}x=6
return A.d(t.d9(0,A.T(["wedding_id",l,"name",d,"partner_category",r,"amount",0,"allocated",e,"position",s.length],y.N,y.X)),$async$OY)
case 6:case 4:t=u.ga4(0)
s=k.b
r=A.a([],y.Q)
for(p=k.c,o=p.length,n=0;n<p.length;p.length===o||(0,A.K)(p),++n){q=p[n]
m=q.a
r.push(m===d?new B.np(m,q.b,q.c,e):q)}u.sa4(0,t.ax_(new B.a0M(s,r)))
case 1:return A.l(v,w)}})
return A.m($async$OY,w)},
a_v(d){return this.bE5(d)},
bE5(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$a_v=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=u.x
if(r==null){x=1
break}t=$.S().b
t===$&&A.b()
x=3
return A.d(t.R("budgets").yw(A.T(["wedding_id",r,"total",d,"updated_at",new A.ad(Date.now(),0,!1).cf()],y.N,y.K)),$async$a_v)
case 3:s=u.ga4(0).b
if(s==null){x=1
break}u.sa4(0,u.ga4(0).ax_(new B.a0M(d,s.c)))
case 1:return A.l(v,w)}})
return A.m($async$a_v,w)}}
B.np.prototype={
gaq(d){return this.a}}
B.i4.prototype={}
B.a0M.prototype={
gpX(){return D.e.d_(this.c,0,new B.aZj())}}
var z=a.updateTypes(["x(np)","uK()","R(R,np)","np(a5<c,@>)","zE()"])
B.aZc.prototype={
$1(d){return d.b},
$S:158}
B.aZd.prototype={
$0(){return this.a.c_(0,this.b)},
$S:1}
B.aZe.prototype={
$1(d){return d},
$S:296}
B.aZf.prototype={
$1(d){return d},
$S:31}
B.aZg.prototype={
$1(d){return d},
$S:1329}
B.aZh.prototype={
$1(d){return null},
$S:13}
B.aZa.prototype={
$1(d){var x=this.a
return x!=null&&d.c===x},
$S:z+0}
B.aZb.prototype={
$1(d){return d.a.toLowerCase()===this.a.a.toLowerCase()},
$S:z+0}
B.aZi.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.aZj.prototype={
$2(d,e){return d+e.b},
$S:z+2};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u
x(B,"dGe","dC9",3)
w(B,"dGd","dlI",4)
v(B.zE.prototype,"giM","d6",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[B.uK,B.np,B.i4,B.a0M])
w(B.zE,A.fd)
x(A.bw,[B.aZc,B.aZe,B.aZf,B.aZg,B.aZh,B.aZa,B.aZb,B.aZi])
w(B.aZd,A.bQ)
w(B.aZj,A.cO)})()
A.bn(b.typeUniverse,JSON.parse('{"zE":{"fd":["uK"]}}'))
var y=(function rtii(){var x=A.w
return{u:x("np"),v:x("ee"),Q:x("r<np>"),s:x("r<c>"),p:x("t<a5<c,@>>"),P:x("a5<c,@>"),W:x("a5<+(c,c),R>"),K:x("J"),O:x("+(c,c)"),N:x("c"),i:x("R"),z:x("@"),V:x("fy?"),g:x("t<@>?"),h:x("a5<c,@>?"),Y:x("a5<+(c,c),R>?"),X:x("J?"),H:x("~")}})();(function constants(){C.ahw=new B.uK(!1,null)
C.bJB={awaiting_deposit:0,confirmed:1,payment_overdue:2,disputed:3,completed:4}
C.bWe=new A.eA(C.bJB,5,A.w("eA<c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUR","CI",()=>A.mV(B.dGd(),null,!1,null,null,A.w("zE"),A.w("uK")))})()};
(a=>{a["QAKckIJwsirTuRlFvngzE5sH+lg="]=a.current})($__dart_deferred_initializers__);