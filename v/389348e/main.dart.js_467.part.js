((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,F,E,G,B={
dE0(d){var x="partner_category",w=J.a7(d),v=A.Z(w.h(d,"name")),u=A.du(w.h(d,"amount")),t=A.C(w.h(d,x))==null?null:A.qC(G.Vw,A.Z(w.h(d,x)))
return new B.no(v,u,t,A.du(w.h(d,"allocated")))},
dnx(){return new B.zA()},
dny(d){var x
A:{if("venue"===d){x=E.y0
break A}if("catering"===d){x=E.xX
break A}if("photography"===d){x=E.xY
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xZ
break A}if("flowers_decor"===d){x=E.y_
break A}x=null
break A}return x},
uM:function uM(d,e){this.a=d
this.b=e},
zA:function zA(){this.b=this.x=null},
aZd:function aZd(){},
aZe:function aZe(d,e){this.a=d
this.b=e},
aZf:function aZf(){},
aZg:function aZg(){},
aZh:function aZh(){},
aZi:function aZi(){},
aZb:function aZb(d){this.a=d},
aZc:function aZc(d){this.a=d},
aZj:function aZj(d){this.a=d},
no:function no(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
i3:function i3(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
a0P:function a0P(d,e){this.b=d
this.c=e},
aZk:function aZk(){}},C
J=c[1]
A=c[0]
D=c[2]
F=c[117]
E=c[222]
G=c[418]
B=a.updateHolder(c[77],B)
C=c[417]
B.uM.prototype={
axd(d,e){var x=e==null?this.a:e
return new B.uM(x,d==null?this.b:d)},
im(d){return this.axd(null,d)},
ax_(d){return this.axd(d,null)}}
B.zA.prototype={
d5(){var x=y.V,w=A.eO(this).G(A.cF($.cq(),new B.aZd(),y.v,x),x)
x=w==null
this.x=x?null:w.a
if(!x)A.jk(new B.aZe(this,w),y.H)
return C.agK},
bY(d,e){return this.bxj(0,e)},
bxj(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l,k
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).im(!0))
u=$.Q()
t=u.b
t===$&&A.b()
s=e.a
r=t.P("budgets").cl(0).V("wedding_id",s).cj().b6(new B.aZf(),y.h)
q=u.b.P("budget_categories").cl(0).V("wedding_id",s).cR(0,"position",!0).b6(new B.aZg(),y.p)
p=v.I4(s).cC(new B.aZh(),new B.aZi(),y.Y)
x=2
return A.d(r,$async$bY)
case 2:o=g
x=3
return A.d(q,$async$bY)
case 3:n=g
x=o!=null?4:6
break
case 4:m=A.du(J.i(o,"total"))
x=5
break
case 6:m=e.as
if(m==null)m=0
x=m>0?7:8
break
case 7:x=9
return A.d(u.b.P("budgets").yu(A.R(["wedding_id",s,"total",m],y.N,y.K)),$async$bY)
case 9:case 8:case 5:l=J.da(n,B.dI8(),y.u).by(0)
x=10
return A.d(p,$async$bY)
case 10:k=g
if(k!=null)v.b8l(l,k)
v.sa4(0,new B.uM(!1,new B.a0P(m,l)))
return A.l(null,w)}})
return A.m($async$bY,w)},
ZR(d){var x=0,w=A.n(y.H),v=this,u
var $async$ZR=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.eO(v).a1(0,$.cq(),y.v).b
x=u!=null?2:3
break
case 2:x=4
return A.d(v.bY(0,u),$async$ZR)
case 4:case 3:return A.l(null,w)}})
return A.m($async$ZR,w)},
I4(d){return this.aSr(d)},
aSr(a2){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$I4=A.j(function(a3,a4){if(a3===1)return A.k(a4,w)
for(;;)switch(x){case 0:a0=$.Q().b
a0===$&&A.b()
x=3
return A.d(a0.P("bookings").aj(0,"id, status, total_amount, partner_profiles(partner_profile_categories(partner_categories(slug, label_pt)))").V("wedding_id",a2),$async$I4)
case 3:u=a4
a0=y.O
t=A.E(y.N,a0)
s=A.E(a0,y.i)
r=A.a([],y.s)
for(a0=y.P,q=J.bh(u,a0),p=A.u(q),q=new A.aj(q,q.gA(q),p.i("aj<V.E>")),o=y.h,n=y.g,p=p.i("V.E");q.t();){m=q.d
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
f=new A.a0(h,g==null?"Outros":g)
e=A.Z(l.h(m,"id"))
t.j(0,e,f)
if(C.bVe.q(0,l.h(m,"status"))){k=s.h(0,f)
if(k==null)k=0
m=A.aF(l.h(m,"total_amount"))
if(m==null)m=null
s.j(0,f,k+(m==null?0:m))}else r.push(e)}if(r.length===0){v=s
x=1
break}q=$.Q().b
q===$&&A.b()
a1=J
x=4
return A.d(q.P("payments").aj(0,"booking_id, amount, refunded_amount, status").dO("booking_id",r).dO("status",["paid","refunded"]),$async$I4)
case 4:a0=a1.bh(a4,a0),q=A.u(a0),a0=new A.aj(a0,a0.gA(a0),q.i("aj<V.E>")),q=q.i("V.E")
case 5:if(!a0.t()){x=6
break}p=a0.d
if(p==null)p=q.a(p)
o=J.a7(p)
f=t.h(0,A.Z(o.h(p,"booking_id")))
if(f==null){x=5
break}n=A.du(o.h(p,"amount"))
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
return A.m($async$I4,w)},
b8l(d,e){var x,w,v,u,t,s,r,q
for(x=J.uz(e),x=x.gX(x);x.t();){w={}
v=x.gE(x)
w.a=null
u=v.a
w.a=u.b
t=B.dny(u.a)
s=D.e.FT(d,new B.aZb(t))
if(s<0)s=D.e.FT(d,new B.aZc(w))
if(s>=0){r=d[s]
d[s]=new B.no(r.a,r.b+v.b,r.c,r.d)}else{q=t==null?null:F.du9(t)
w=q==null?w.a:q
D.e.C(d,new B.no(w,v.b,t,0))}}},
OQ(d,e){return this.bDl(d,e)},
bDl(d,e){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$OQ=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:l=u.x
k=u.ga4(0).b
if(l==null||k==null){x=1
break}t=$.Q()
s=t.b
s===$&&A.b()
r=y.z
j=J
x=5
return A.d(s.P("budget_categories").bj(0,A.R(["allocated",e],r,r)).V("wedding_id",l).V("name",d).aj(0,"id"),$async$OQ)
case 5:x=j.dn(g)?3:4
break
case 3:s=k.c
q=A.eR(new A.a4(s,new B.aZj(d),A.a8(s).i("a4<1>")))
t=t.b.P("budget_categories")
if(q==null)r=null
else{r=q.c
r=r==null?null:r.b}x=6
return A.d(t.d8(0,A.R(["wedding_id",l,"name",d,"partner_category",r,"amount",0,"allocated",e,"position",s.length],y.N,y.X)),$async$OQ)
case 6:case 4:t=u.ga4(0)
s=k.b
r=A.a([],y.Q)
for(p=k.c,o=p.length,n=0;n<p.length;p.length===o||(0,A.H)(p),++n){q=p[n]
m=q.a
r.push(m===d?new B.no(m,q.b,q.c,e):q)}u.sa4(0,t.ax_(new B.a0P(s,r)))
case 1:return A.l(v,w)}})
return A.m($async$OQ,w)},
a_z(d){return this.bDD(d)},
bDD(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$a_z=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=u.x
if(r==null){x=1
break}t=$.Q().b
t===$&&A.b()
x=3
return A.d(t.P("budgets").yu(A.R(["wedding_id",r,"total",d,"updated_at",new A.ac(Date.now(),0,!1).cg()],y.N,y.K)),$async$a_z)
case 3:s=u.ga4(0).b
if(s==null){x=1
break}u.sa4(0,u.ga4(0).ax_(new B.a0P(d,s.c)))
case 1:return A.l(v,w)}})
return A.m($async$a_z,w)}}
B.no.prototype={
gar(d){return this.a}}
B.i3.prototype={}
B.a0P.prototype={
gpZ(){return D.e.d_(this.c,0,new B.aZk())}}
var z=a.updateTypes(["B(no)","uM()","T(T,no)","no(a6<c,@>)","zA()"])
B.aZd.prototype={
$1(d){return d.b},
$S:172}
B.aZe.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.aZf.prototype={
$1(d){return d},
$S:322}
B.aZg.prototype={
$1(d){return d},
$S:31}
B.aZh.prototype={
$1(d){return d},
$S:1319}
B.aZi.prototype={
$1(d){return null},
$S:11}
B.aZb.prototype={
$1(d){var x=this.a
return x!=null&&d.c===x},
$S:z+0}
B.aZc.prototype={
$1(d){return d.a.toLowerCase()===this.a.a.toLowerCase()},
$S:z+0}
B.aZj.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.aZk.prototype={
$2(d,e){return d+e.b},
$S:z+2};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u
x(B,"dI8","dE0",3)
w(B,"dI7","dnx",4)
v(B.zA.prototype,"giI","d5",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[B.uM,B.no,B.i3,B.a0P])
w(B.zA,A.fe)
x(A.bw,[B.aZd,B.aZf,B.aZg,B.aZh,B.aZi,B.aZb,B.aZc,B.aZj])
w(B.aZe,A.bP)
w(B.aZk,A.cK)})()
A.br(b.typeUniverse,JSON.parse('{"zA":{"fe":["uM"]}}'))
var y=(function rtii(){var x=A.w
return{u:x("no"),v:x("ec"),Q:x("r<no>"),s:x("r<c>"),p:x("t<a6<c,@>>"),P:x("a6<c,@>"),W:x("a6<+(c,c),T>"),K:x("J"),O:x("+(c,c)"),N:x("c"),i:x("T"),z:x("@"),V:x("fn?"),g:x("t<@>?"),h:x("a6<c,@>?"),Y:x("a6<+(c,c),T>?"),X:x("J?"),H:x("~")}})();(function constants(){C.agK=new B.uM(!1,null)
C.bIK={awaiting_deposit:0,confirmed:1,payment_overdue:2,disputed:3,completed:4}
C.bVe=new A.ex(C.bIK,5,A.w("ex<c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWV","CH",()=>A.mX(B.dI7(),null,!1,null,null,A.w("zA"),A.w("uM")))})()};
(a=>{a["zLB8kkM6Da+Haz63rJJ1ZP398Dg="]=a.current})($__dart_deferred_initializers__);