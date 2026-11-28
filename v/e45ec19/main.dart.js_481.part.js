((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,F,E,G,B={
dF6(d){var x="partner_category",w=J.a6(d),v=A.a_(w.h(d,"name")),u=A.dt(w.h(d,"amount")),t=A.B(w.h(d,x))==null?null:A.qA(G.Vk,A.a_(w.h(d,x)))
return new B.nw(v,u,t,A.dt(w.h(d,"allocated")))},
doH(){return new B.zz()},
doI(d){var x
A:{if("venue"===d){x=E.xP
break A}if("catering"===d){x=E.xL
break A}if("photography"===d){x=E.xM
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xN
break A}if("flowers_decor"===d){x=E.xO
break A}x=null
break A}return x},
uV:function uV(d,e){this.a=d
this.b=e},
zz:function zz(){this.b=this.x=null},
aZl:function aZl(){},
aZm:function aZm(d,e){this.a=d
this.b=e},
aZn:function aZn(){},
aZo:function aZo(){},
aZp:function aZp(){},
aZq:function aZq(){},
aZj:function aZj(d){this.a=d},
aZk:function aZk(d){this.a=d},
aZr:function aZr(d){this.a=d},
nw:function nw(d,e,f,g){var _=this
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
a0Y:function a0Y(d,e){this.b=d
this.c=e},
aZs:function aZs(){}},C
J=c[1]
A=c[0]
D=c[2]
F=c[119]
E=c[219]
G=c[414]
B=a.updateHolder(c[77],B)
C=c[413]
B.uV.prototype={
aww(d,e){var x=e==null?this.a:e
return new B.uV(x,d==null?this.b:d)},
ii(d){return this.aww(null,d)},
awh(d){return this.aww(d,null)}}
B.zz.prototype={
d0(){var x=y.V,w=A.eP(this).G(A.cC($.cq(),new B.aZl(),y.v,x),x)
x=w==null
this.x=x?null:w.a
if(!x)A.j7(new B.aZm(this,w),y.H)
return C.agH},
bY(d,e){return this.bwb(0,e)},
bwb(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l,k
var $async$bY=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa2(0,v.ga2(0).ii(!0))
u=$.Q()
t=u.b
t===$&&A.b()
s=e.a
r=t.S("budgets").cv(0).X("wedding_id",s).cl().b6(new B.aZn(),y.h)
q=u.b.S("budget_categories").cv(0).X("wedding_id",s).cJ(0,"position",!0).b6(new B.aZo(),y.p)
p=v.HL(s).cG(new B.aZp(),new B.aZq(),y.Y)
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
return A.d(u.b.S("budgets").ym(A.R(["wedding_id",s,"total",m],y.N,y.K)),$async$bY)
case 9:case 8:case 5:l=J.dl(n,B.dJk(),y.u).bx(0)
x=10
return A.d(p,$async$bY)
case 10:k=g
if(k!=null)v.b75(l,k)
v.sa2(0,new B.uV(!1,new B.a0Y(m,l)))
return A.l(null,w)}})
return A.m($async$bY,w)},
Zk(d){var x=0,w=A.n(y.H),v=this,u
var $async$Zk=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.eP(v).a0(0,$.cq(),y.v).b
x=u!=null?2:3
break
case 2:x=4
return A.d(v.bY(0,u),$async$Zk)
case 4:case 3:return A.l(null,w)}})
return A.m($async$Zk,w)},
HL(d){return this.aRM(d)},
aRM(a2){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$HL=A.j(function(a3,a4){if(a3===1)return A.k(a4,w)
for(;;)switch(x){case 0:a0=$.Q().b
a0===$&&A.b()
x=3
return A.d(a0.S("bookings").an(0,"id, status, total_amount, partner_profiles(partner_profile_categories(partner_categories(slug, label_pt)))").X("wedding_id",a2),$async$HL)
case 3:u=a4
a0=y.O
t=A.E(y.N,a0)
s=A.E(a0,y.i)
r=A.a([],y.s)
for(a0=y.P,q=J.bj(u,a0),p=A.u(q),q=new A.aj(q,q.gA(q),p.i("aj<V.E>")),o=y.h,n=y.g,p=p.i("V.E");q.q();){m=q.d
if(m==null)m=p.a(m)
l=J.a6(m)
k=o.a(l.h(m,"partner_profiles"))
j=n.a(k==null?null:J.i(k,"partner_profile_categories"))
if(j==null)j=D.aj
k=J.a6(j)
i=k.gY(j)?null:o.a(J.i(a0.a(k.gJ(j)),"partner_categories"))
k=i==null
h=A.B(k?null:J.i(i,"slug"))
if(h==null)h="other"
g=A.B(k?null:J.i(i,"label_pt"))
f=new A.X(h,g==null?"Outros":g)
e=A.a_(l.h(m,"id"))
t.j(0,e,f)
if(C.bVi.t(0,l.h(m,"status"))){k=s.h(0,f)
if(k==null)k=0
m=A.aE(l.h(m,"total_amount"))
if(m==null)m=null
s.j(0,f,k+(m==null?0:m))}else r.push(e)}if(r.length===0){v=s
x=1
break}q=$.Q().b
q===$&&A.b()
a1=J
x=4
return A.d(q.S("payments").an(0,"booking_id, amount, refunded_amount, status").dG("booking_id",r).dG("status",["paid","refunded"]),$async$HL)
case 4:a0=a1.bj(a4,a0),q=A.u(a0),a0=new A.aj(a0,a0.gA(a0),q.i("aj<V.E>")),q=q.i("V.E")
case 5:if(!a0.q()){x=6
break}p=a0.d
if(p==null)p=q.a(p)
o=J.a6(p)
f=t.h(0,A.a_(o.h(p,"booking_id")))
if(f==null){x=5
break}n=A.dt(o.h(p,"amount"))
p=A.aE(o.h(p,"refunded_amount"))
if(p==null)p=null
d=n-(p==null?0:p)
if(d>0){p=s.h(0,f)
s.j(0,f,(p==null?0:p)+d)}x=5
break
case 6:v=s
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$HL,w)},
b75(d,e){var x,w,v,u,t,s,r,q
for(x=J.uJ(e),x=x.gW(x);x.q();){w={}
v=x.gE(x)
w.a=null
u=v.a
w.a=u.b
t=B.doI(u.a)
s=D.e.FJ(d,new B.aZj(t))
if(s<0)s=D.e.FJ(d,new B.aZk(w))
if(s>=0){r=d[s]
d[s]=new B.nw(r.a,r.b+v.b,r.c,r.d)}else{q=t==null?null:F.dvf(t)
w=q==null?w.a:q
D.e.C(d,new B.nw(w,v.b,t,0))}}},
Or(d,e){return this.bC8(d,e)},
bC8(d,e){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$Or=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:l=u.x
k=u.ga2(0).b
if(l==null||k==null){x=1
break}t=$.Q()
s=t.b
s===$&&A.b()
r=y.z
j=J
x=5
return A.d(s.S("budget_categories").bm(0,A.R(["allocated",e],r,r)).X("wedding_id",l).X("name",d).an(0,"id"),$async$Or)
case 5:x=j.de(g)?3:4
break
case 3:s=k.c
q=A.f4(new A.a7(s,new B.aZr(d),A.a8(s).i("a7<1>")))
t=t.b.S("budget_categories")
if(q==null)r=null
else{r=q.c
r=r==null?null:r.b}x=6
return A.d(t.da(0,A.R(["wedding_id",l,"name",d,"partner_category",r,"amount",0,"allocated",e,"position",s.length],y.N,y.X)),$async$Or)
case 6:case 4:t=u.ga2(0)
s=k.b
r=A.a([],y.Q)
for(p=k.c,o=p.length,n=0;n<p.length;p.length===o||(0,A.H)(p),++n){q=p[n]
m=q.a
r.push(m===d?new B.nw(m,q.b,q.c,e):q)}u.sa2(0,t.awh(new B.a0Y(s,r)))
case 1:return A.l(v,w)}})
return A.m($async$Or,w)},
a_3(d){return this.bCq(d)},
bCq(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$a_3=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=u.x
if(r==null){x=1
break}t=$.Q().b
t===$&&A.b()
x=3
return A.d(t.S("budgets").ym(A.R(["wedding_id",r,"total",d,"updated_at",new A.ad(Date.now(),0,!1).cK()],y.N,y.K)),$async$a_3)
case 3:s=u.ga2(0).b
if(s==null){x=1
break}u.sa2(0,u.ga2(0).awh(new B.a0Y(d,s.c)))
case 1:return A.l(v,w)}})
return A.m($async$a_3,w)}}
B.nw.prototype={
gap(d){return this.a}}
B.i6.prototype={}
B.a0Y.prototype={
gq0(){return D.e.cV(this.c,0,new B.aZs())}}
var z=a.updateTypes(["C(nw)","uV()","T(T,nw)","nw(a3<c,@>)","zz()"])
B.aZl.prototype={
$1(d){return d.b},
$S:174}
B.aZm.prototype={
$0(){return this.a.bY(0,this.b)},
$S:1}
B.aZn.prototype={
$1(d){return d},
$S:1331}
B.aZo.prototype={
$1(d){return d},
$S:44}
B.aZp.prototype={
$1(d){return d},
$S:1332}
B.aZq.prototype={
$1(d){return null},
$S:13}
B.aZj.prototype={
$1(d){var x=this.a
return x!=null&&d.c===x},
$S:z+0}
B.aZk.prototype={
$1(d){return d.a.toLowerCase()===this.a.a.toLowerCase()},
$S:z+0}
B.aZr.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.aZs.prototype={
$2(d,e){return d+e.b},
$S:z+2};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u
x(B,"dJk","dF6",3)
w(B,"dJj","doH",4)
v(B.zz.prototype,"giF","d0",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.M,[B.uV,B.nw,B.i6,B.a0Y])
w(B.zz,A.fb)
x(A.bu,[B.aZl,B.aZn,B.aZo,B.aZp,B.aZq,B.aZj,B.aZk,B.aZr])
w(B.aZm,A.bL)
w(B.aZs,A.cL)})()
A.br(b.typeUniverse,JSON.parse('{"zz":{"fb":["uV"]}}'))
var y=(function rtii(){var x=A.A
return{u:x("nw"),v:x("ed"),Q:x("r<nw>"),s:x("r<c>"),p:x("t<a3<c,@>>"),P:x("a3<c,@>"),W:x("a3<+(c,c),T>"),K:x("M"),O:x("+(c,c)"),N:x("c"),i:x("T"),z:x("@"),V:x("fj?"),g:x("t<@>?"),h:x("a3<c,@>?"),Y:x("a3<+(c,c),T>?"),X:x("M?"),H:x("~")}})();(function constants(){C.agH=new B.uV(!1,null)
C.bII={awaiting_deposit:0,confirmed:1,payment_overdue:2,disputed:3,completed:4}
C.bVi=new A.eA(C.bII,5,A.A("eA<c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYf","CJ",()=>A.n_(B.dJj(),null,!1,null,null,A.A("zz"),A.A("uV")))})()};
(a=>{a["jJrdGrmuaxzHaMVT6GYjPKqW4kc="]=a.current})($__dart_deferred_initializers__);