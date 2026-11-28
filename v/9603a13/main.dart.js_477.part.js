((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,F,E,G,B={
dDS(d){var x="partner_category",w=J.a7(d),v=A.Y(w.h(d,"name")),u=A.dv(w.h(d,"amount")),t=A.B(w.h(d,x))==null?null:A.qv(G.Vb,A.Y(w.h(d,x)))
return new B.no(v,u,t,A.dv(w.h(d,"allocated")))},
dnq(){return new B.zs()},
dnr(d){var x
A:{if("venue"===d){x=E.xO
break A}if("catering"===d){x=E.xK
break A}if("photography"===d){x=E.xL
break A}if("music_dj"===d||"bands_musicians"===d){x=E.xM
break A}if("flowers_decor"===d){x=E.xN
break A}x=null
break A}return x},
uN:function uN(d,e){this.a=d
this.b=e},
zs:function zs(){this.b=this.x=null},
aYB:function aYB(){},
aYC:function aYC(d,e){this.a=d
this.b=e},
aYD:function aYD(){},
aYE:function aYE(){},
aYF:function aYF(){},
aYG:function aYG(){},
aYz:function aYz(d){this.a=d},
aYA:function aYA(d){this.a=d},
aYH:function aYH(d){this.a=d},
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
a0G:function a0G(d,e){this.b=d
this.c=e},
aYI:function aYI(){}},C
J=c[1]
A=c[0]
D=c[2]
F=c[119]
E=c[219]
G=c[414]
B=a.updateHolder(c[77],B)
C=c[413]
B.uN.prototype={
awq(d,e){var x=e==null?this.a:e
return new B.uN(x,d==null?this.b:d)},
ik(d){return this.awq(null,d)},
awb(d){return this.awq(d,null)}}
B.zs.prototype={
d_(){var x=y.V,w=A.eQ(this).G(A.cD($.cp(),new B.aYB(),y.v,x),x)
x=w==null
this.x=x?null:w.a
if(!x)A.j4(new B.aYC(this,w),y.H)
return C.agy},
bX(d,e){return this.bvM(0,e)},
bvM(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l,k
var $async$bX=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa4(0,v.ga4(0).ik(!0))
u=$.Q()
t=u.b
t===$&&A.b()
s=e.a
r=t.P("budgets").ck(0).U("wedding_id",s).cf().b3(new B.aYD(),y.h)
q=u.b.P("budget_categories").ck(0).U("wedding_id",s).cJ(0,"position",!0).b3(new B.aYE(),y.p)
p=v.HI(s).cB(new B.aYF(),new B.aYG(),y.Y)
x=2
return A.d(r,$async$bX)
case 2:o=g
x=3
return A.d(q,$async$bX)
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
return A.d(u.b.P("budgets").yh(A.R(["wedding_id",s,"total",m],y.N,y.K)),$async$bX)
case 9:case 8:case 5:l=J.da(n,B.dI2(),y.u).bx(0)
x=10
return A.d(p,$async$bX)
case 10:k=g
if(k!=null)v.b6L(l,k)
v.sa4(0,new B.uN(!1,new B.a0G(m,l)))
return A.l(null,w)}})
return A.m($async$bX,w)},
Zf(d){var x=0,w=A.n(y.H),v=this,u
var $async$Zf=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.eQ(v).a_(0,$.cp(),y.v).b
x=u!=null?2:3
break
case 2:x=4
return A.d(v.bX(0,u),$async$Zf)
case 4:case 3:return A.l(null,w)}})
return A.m($async$Zf,w)},
HI(d){return this.aRy(d)},
aRy(a2){var x=0,w=A.n(y.W),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$HI=A.j(function(a3,a4){if(a3===1)return A.k(a4,w)
for(;;)switch(x){case 0:a0=$.Q().b
a0===$&&A.b()
x=3
return A.d(a0.P("bookings").ai(0,"id, status, total_amount, partner_profiles(partner_profile_categories(partner_categories(slug, label_pt)))").U("wedding_id",a2),$async$HI)
case 3:u=a4
a0=y.O
t=A.E(y.N,a0)
s=A.E(a0,y.i)
r=A.a([],y.s)
for(a0=y.P,q=J.be(u,a0),p=A.u(q),q=new A.ag(q,q.gA(q),p.i("ag<V.E>")),o=y.h,n=y.g,p=p.i("V.E");q.q();){m=q.d
if(m==null)m=p.a(m)
l=J.a7(m)
k=o.a(l.h(m,"partner_profiles"))
j=n.a(k==null?null:J.i(k,"partner_profile_categories"))
if(j==null)j=D.ai
k=J.a7(j)
i=k.gY(j)?null:o.a(J.i(a0.a(k.gJ(j)),"partner_categories"))
k=i==null
h=A.B(k?null:J.i(i,"slug"))
if(h==null)h="other"
g=A.B(k?null:J.i(i,"label_pt"))
f=new A.X(h,g==null?"Outros":g)
e=A.Y(l.h(m,"id"))
t.j(0,e,f)
if(C.bUU.t(0,l.h(m,"status"))){k=s.h(0,f)
if(k==null)k=0
m=A.aD(l.h(m,"total_amount"))
if(m==null)m=null
s.j(0,f,k+(m==null?0:m))}else r.push(e)}if(r.length===0){v=s
x=1
break}q=$.Q().b
q===$&&A.b()
a1=J
x=4
return A.d(q.P("payments").ai(0,"booking_id, amount, refunded_amount, status").dK("booking_id",r).dK("status",["paid","refunded"]),$async$HI)
case 4:a0=a1.be(a4,a0),q=A.u(a0),a0=new A.ag(a0,a0.gA(a0),q.i("ag<V.E>")),q=q.i("V.E")
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
return A.m($async$HI,w)},
b6L(d,e){var x,w,v,u,t,s,r,q
for(x=J.uB(e),x=x.gX(x);x.q();){w={}
v=x.gE(x)
w.a=null
u=v.a
w.a=u.b
t=B.dnr(u.a)
s=D.e.FD(d,new B.aYz(t))
if(s<0)s=D.e.FD(d,new B.aYA(w))
if(s>=0){r=d[s]
d[s]=new B.no(r.a,r.b+v.b,r.c,r.d)}else{q=t==null?null:F.du1(t)
w=q==null?w.a:q
D.e.C(d,new B.no(w,v.b,t,0))}}},
On(d,e){return this.bBJ(d,e)},
bBJ(d,e){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l,k,j
var $async$On=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:l=u.x
k=u.ga4(0).b
if(l==null||k==null){x=1
break}t=$.Q()
s=t.b
s===$&&A.b()
r=y.z
j=J
x=5
return A.d(s.P("budget_categories").bh(0,A.R(["allocated",e],r,r)).U("wedding_id",l).U("name",d).ai(0,"id"),$async$On)
case 5:x=j.dg(g)?3:4
break
case 3:s=k.c
q=A.eL(new A.a6(s,new B.aYH(d),A.a8(s).i("a6<1>")))
t=t.b.P("budget_categories")
if(q==null)r=null
else{r=q.c
r=r==null?null:r.b}x=6
return A.d(t.d3(0,A.R(["wedding_id",l,"name",d,"partner_category",r,"amount",0,"allocated",e,"position",s.length],y.N,y.X)),$async$On)
case 6:case 4:t=u.ga4(0)
s=k.b
r=A.a([],y.Q)
for(p=k.c,o=p.length,n=0;n<p.length;p.length===o||(0,A.H)(p),++n){q=p[n]
m=q.a
r.push(m===d?new B.no(m,q.b,q.c,e):q)}u.sa4(0,t.awb(new B.a0G(s,r)))
case 1:return A.l(v,w)}})
return A.m($async$On,w)},
ZY(d){return this.bC0(d)},
bC0(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$ZY=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=u.x
if(r==null){x=1
break}t=$.Q().b
t===$&&A.b()
x=3
return A.d(t.P("budgets").yh(A.R(["wedding_id",r,"total",d,"updated_at",new A.ac(Date.now(),0,!1).cg()],y.N,y.K)),$async$ZY)
case 3:s=u.ga4(0).b
if(s==null){x=1
break}u.sa4(0,u.ga4(0).awb(new B.a0G(d,s.c)))
case 1:return A.l(v,w)}})
return A.m($async$ZY,w)}}
B.no.prototype={
gap(d){return this.a}}
B.i3.prototype={}
B.a0G.prototype={
gpW(){return D.e.cU(this.c,0,new B.aYI())}}
var z=a.updateTypes(["C(no)","uN()","T(T,no)","no(a5<c,@>)","zs()"])
B.aYB.prototype={
$1(d){return d.b},
$S:195}
B.aYC.prototype={
$0(){return this.a.bX(0,this.b)},
$S:1}
B.aYD.prototype={
$1(d){return d},
$S:394}
B.aYE.prototype={
$1(d){return d},
$S:29}
B.aYF.prototype={
$1(d){return d},
$S:1329}
B.aYG.prototype={
$1(d){return null},
$S:11}
B.aYz.prototype={
$1(d){var x=this.a
return x!=null&&d.c===x},
$S:z+0}
B.aYA.prototype={
$1(d){return d.a.toLowerCase()===this.a.a.toLowerCase()},
$S:z+0}
B.aYH.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.aYI.prototype={
$2(d,e){return d+e.b},
$S:z+2};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u
x(B,"dI2","dDS",3)
w(B,"dI1","dnq",4)
v(B.zs.prototype,"giD","d_",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.L,[B.uN,B.no,B.i3,B.a0G])
w(B.zs,A.fa)
x(A.bs,[B.aYB,B.aYD,B.aYE,B.aYF,B.aYG,B.aYz,B.aYA,B.aYH])
w(B.aYC,A.bL)
w(B.aYI,A.cK)})()
A.bq(b.typeUniverse,JSON.parse('{"zs":{"fa":["uN"]}}'))
var y=(function rtii(){var x=A.y
return{u:x("no"),v:x("eb"),Q:x("r<no>"),s:x("r<c>"),p:x("t<a5<c,@>>"),P:x("a5<c,@>"),W:x("a5<+(c,c),T>"),K:x("L"),O:x("+(c,c)"),N:x("c"),i:x("T"),z:x("@"),V:x("fl?"),g:x("t<@>?"),h:x("a5<c,@>?"),Y:x("a5<+(c,c),T>?"),X:x("L?"),H:x("~")}})();(function constants(){C.agy=new B.uN(!1,null)
C.bIr={awaiting_deposit:0,confirmed:1,payment_overdue:2,disputed:3,completed:4}
C.bUU=new A.ey(C.bIr,5,A.y("ey<c>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWP","CA",()=>A.mU(B.dI1(),null,!1,null,null,A.y("zs"),A.y("uN")))})()};
(a=>{a["udTP9kvzq+rb3d3GETKDuoL/wuc="]=a.current})($__dart_deferred_initializers__);