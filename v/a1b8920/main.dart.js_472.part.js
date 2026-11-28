((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,F,E,G,B={
dEf(d){var x="partner_category",w=J.a7(d),v=A.a_(w.h(d,"name")),u=A.du(w.h(d,"amount")),t=A.C(w.h(d,x))==null?null:A.qC(G.Vt,A.a_(w.h(d,x)))
return new B.ns(v,u,t,A.du(w.h(d,"allocated")))},
dnM(){return new B.zA()},
dnN(d){var x
A:{if("venue"===d){x=E.y_
break A}if("catering"===d){x=E.xW
break A}if("photography"===d){x=E.xX
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xY
break A}if("flowers_decor"===d){x=E.xZ
break A}x=null
break A}return x},
uM:function uM(d,e){this.a=d
this.b=e},
zA:function zA(){this.b=this.x=null},
aZa:function aZa(){},
aZb:function aZb(d,e){this.a=d
this.b=e},
aZc:function aZc(){},
aZd:function aZd(){},
aZe:function aZe(){},
aZf:function aZf(){},
aZ8:function aZ8(d){this.a=d},
aZ9:function aZ9(d){this.a=d},
aZg:function aZg(d){this.a=d},
ns:function ns(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
i5:function i5(d,e,f,g,h,i,j,k){var _=this
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
aZh:function aZh(){}},C
J=c[1]
A=c[0]
D=c[2]
F=c[118]
E=c[221]
G=c[417]
B=a.updateHolder(c[77],B)
C=c[416]
B.uM.prototype={
axd(d,e){var x=e==null?this.a:e
return new B.uM(x,d==null?this.b:d)},
im(d){return this.axd(null,d)},
ax_(d){return this.axd(d,null)}}
B.zA.prototype={
d5(){var x=y.V,w=A.eQ(this).G(A.cG($.cr(),new B.aZa(),y.v,x),x)
x=w==null
this.x=x?null:w.a
if(!x)A.jl(new B.aZb(this,w),y.H)
return C.agL},
bY(d,e){return this.bxl(0,e)},
bxl(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l,k
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).im(!0))
u=$.P()
t=u.b
t===$&&A.b()
s=e.a
r=t.P("budgets").cm(0).V("wedding_id",s).ck().b6(new B.aZc(),y.h)
q=u.b.P("budget_categories").cm(0).V("wedding_id",s).cO(0,"position",!0).b6(new B.aZd(),y.p)
p=v.I5(s).cE(new B.aZe(),new B.aZf(),y.Y)
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
case 9:case 8:case 5:l=J.da(n,B.dIp(),y.u).by(0)
x=10
return A.d(p,$async$bY)
case 10:k=g
if(k!=null)v.b8n(l,k)
v.sa4(0,new B.uM(!1,new B.a0P(m,l)))
return A.l(null,w)}})
return A.m($async$bY,w)},
ZS(d){var x=0,w=A.n(y.H),v=this,u
var $async$ZS=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.eQ(v).a1(0,$.cr(),y.v).b
x=u!=null?2:3
break
case 2:x=4
return A.d(v.bY(0,u),$async$ZS)
case 4:case 3:return A.l(null,w)}})
return A.m($async$ZS,w)},
I5(d){return this.aSs(d)},
aSs(a2){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$I5=A.j(function(a3,a4){if(a3===1)return A.k(a4,w)
for(;;)switch(x){case 0:a0=$.P().b
a0===$&&A.b()
x=3
return A.d(a0.P("bookings").ai(0,"id, status, total_amount, partner_profiles(partner_profile_categories(partner_categories(slug, label_pt)))").V("wedding_id",a2),$async$I5)
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
i=k.gZ(j)?null:o.a(J.i(a0.a(k.gJ(j)),"partner_categories"))
k=i==null
h=A.C(k?null:J.i(i,"slug"))
if(h==null)h="other"
g=A.C(k?null:J.i(i,"label_pt"))
f=new A.Z(h,g==null?"Outros":g)
e=A.a_(l.h(m,"id"))
t.j(0,e,f)
if(C.bVl.q(0,l.h(m,"status"))){k=s.h(0,f)
if(k==null)k=0
m=A.aF(l.h(m,"total_amount"))
if(m==null)m=null
s.j(0,f,k+(m==null?0:m))}else r.push(e)}if(r.length===0){v=s
x=1
break}q=$.P().b
q===$&&A.b()
a1=J
x=4
return A.d(q.P("payments").ai(0,"booking_id, amount, refunded_amount, status").dO("booking_id",r).dO("status",["paid","refunded"]),$async$I5)
case 4:a0=a1.bh(a4,a0),q=A.u(a0),a0=new A.aj(a0,a0.gA(a0),q.i("aj<V.E>")),q=q.i("V.E")
case 5:if(!a0.t()){x=6
break}p=a0.d
if(p==null)p=q.a(p)
o=J.a7(p)
f=t.h(0,A.a_(o.h(p,"booking_id")))
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
return A.m($async$I5,w)},
b8n(d,e){var x,w,v,u,t,s,r,q
for(x=J.uz(e),x=x.gX(x);x.t();){w={}
v=x.gE(x)
w.a=null
u=v.a
w.a=u.b
t=B.dnN(u.a)
s=D.e.FV(d,new B.aZ8(t))
if(s<0)s=D.e.FV(d,new B.aZ9(w))
if(s>=0){r=d[s]
d[s]=new B.ns(r.a,r.b+v.b,r.c,r.d)}else{q=t==null?null:F.duo(t)
w=q==null?w.a:q
D.e.C(d,new B.ns(w,v.b,t,0))}}},
OQ(d,e){return this.bDn(d,e)},
bDn(d,e){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$OQ=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:l=u.x
k=u.ga4(0).b
if(l==null||k==null){x=1
break}t=$.P()
s=t.b
s===$&&A.b()
r=y.z
j=J
x=5
return A.d(s.P("budget_categories").bj(0,A.R(["allocated",e],r,r)).V("wedding_id",l).V("name",d).ai(0,"id"),$async$OQ)
case 5:x=j.di(g)?3:4
break
case 3:s=k.c
q=A.eL(new A.a5(s,new B.aZg(d),A.a8(s).i("a5<1>")))
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
r.push(m===d?new B.ns(m,q.b,q.c,e):q)}u.sa4(0,t.ax_(new B.a0P(s,r)))
case 1:return A.l(v,w)}})
return A.m($async$OQ,w)},
a_A(d){return this.bDF(d)},
bDF(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$a_A=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=u.x
if(r==null){x=1
break}t=$.P().b
t===$&&A.b()
x=3
return A.d(t.P("budgets").yu(A.R(["wedding_id",r,"total",d,"updated_at",new A.ac(Date.now(),0,!1).ci()],y.N,y.K)),$async$a_A)
case 3:s=u.ga4(0).b
if(s==null){x=1
break}u.sa4(0,u.ga4(0).ax_(new B.a0P(d,s.c)))
case 1:return A.l(v,w)}})
return A.m($async$a_A,w)}}
B.ns.prototype={
gar(d){return this.a}}
B.i5.prototype={}
B.a0P.prototype={
gpZ(){return D.e.d_(this.c,0,new B.aZh())}}
var z=a.updateTypes(["z(ns)","uM()","S(S,ns)","ns(a4<c,@>)","zA()"])
B.aZa.prototype={
$1(d){return d.b},
$S:161}
B.aZb.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.aZc.prototype={
$1(d){return d},
$S:301}
B.aZd.prototype={
$1(d){return d},
$S:29}
B.aZe.prototype={
$1(d){return d},
$S:1322}
B.aZf.prototype={
$1(d){return null},
$S:11}
B.aZ8.prototype={
$1(d){var x=this.a
return x!=null&&d.c===x},
$S:z+0}
B.aZ9.prototype={
$1(d){return d.a.toLowerCase()===this.a.a.toLowerCase()},
$S:z+0}
B.aZg.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.aZh.prototype={
$2(d,e){return d+e.b},
$S:z+2};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u
x(B,"dIp","dEf",3)
w(B,"dIo","dnM",4)
v(B.zA.prototype,"giI","d5",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.J,[B.uM,B.ns,B.i5,B.a0P])
w(B.zA,A.fd)
x(A.bw,[B.aZa,B.aZc,B.aZd,B.aZe,B.aZf,B.aZ8,B.aZ9,B.aZg])
w(B.aZb,A.bO)
w(B.aZh,A.cK)})()
A.bt(b.typeUniverse,JSON.parse('{"zA":{"fd":["uM"]}}'))
var y=(function rtii(){var x=A.w
return{u:x("ns"),v:x("ed"),Q:x("r<ns>"),s:x("r<c>"),p:x("t<a4<c,@>>"),P:x("a4<c,@>"),W:x("a4<+(c,c),S>"),K:x("J"),O:x("+(c,c)"),N:x("c"),i:x("S"),z:x("@"),V:x("fm?"),g:x("t<@>?"),h:x("a4<c,@>?"),Y:x("a4<+(c,c),S>?"),X:x("J?"),H:x("~")}})();(function constants(){C.agL=new B.uM(!1,null)
C.bIQ={awaiting_deposit:0,confirmed:1,payment_overdue:2,disputed:3,completed:4}
C.bVl=new A.ex(C.bIQ,5,A.w("ex<c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXc","CI",()=>A.mZ(B.dIo(),null,!1,null,null,A.w("zA"),A.w("uM")))})()};
(a=>{a["wQW5OMWZIn0KZm5DRVjap1vi8pY="]=a.current})($__dart_deferred_initializers__);