((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
cUX(d){var x,w,v,u="due_date",t="partner_category",s=J.a7(d),r=A.a1(s.h(d,"id")),q=A.a1(s.h(d,"wedding_id")),p=A.a1(s.h(d,"title")),o=A.C(s.h(d,"category"))
if(o==null)o="Geral"
x=A.dU(s.h(d,"done"))
w=s.h(d,u)==null?null:A.d9(A.a1(s.h(d,u)))
v=A.C(s.h(d,t))==null?null:A.qx(E.Vy,A.a1(s.h(d,t)))
return new B.hD(r,q,p,o,x===!0,w,v,A.C(s.h(d,"selected_partner_id")),A.e_(s.h(d,"progress_percent")),D.a9)},
dji(){return new B.wQ()},
rS:function rS(d,e){this.a=d
this.b=e},
aZO:function aZO(){},
wQ:function wQ(){this.b=this.x=null},
aZJ:function aZJ(){},
aZK:function aZK(d,e){this.a=d
this.b=e},
aZN:function aZN(d){this.a=d},
aZL:function aZL(d){this.a=d},
aZM:function aZM(d){this.a=d},
Da:function Da(d,e){this.a=d
this.b=e},
hD:function hD(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m}},C,E
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[114],B)
C=c[243]
E=c[405]
B.rS.prototype={
ga9d(){var x=this.b
return new A.a5(x,new B.aZO(),A.a8(x).i("a5<1>")).gA(0)},
awM(d,e){var x=e==null?this.a:e
return new B.rS(x,d==null?this.b:d)},
im(d){return this.awM(null,d)},
a8u(d){return this.awM(d,null)}}
B.wQ.prototype={
d4(){var x=y.w,w=this.x=A.eP(this).H(A.cv($.co(),new B.aZJ(),y.e,x),x)
if(w!=null)A.jf(new B.aZK(this,w),y.v)
return C.ajY},
c_(d,e){return this.bwT(0,e)},
bwT(d,e){var x=0,w=A.n(y.v),v=this,u,t,s,r
var $async$c_=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa2(0,v.ga2(0).im(!0))
u=$.T().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.R("checklist_items").cj(0).W("wedding_id",e).dl(0,"created_at",!0),$async$c_)
case 2:v.sa2(0,new t.rS(s,r.d3(g,B.dDz(),y.u).by(0)))
return A.l(null,w)}})
return A.m($async$c_,w)},
LA(d){return this.bmN(d)},
bmN(d){var x=0,w=A.n(y.v),v=this,u,t,s,r
var $async$LA=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=$.T().b
r===$&&A.b()
r=r.R("checklist_items")
u=d.f
u=u==null?null:D.e.gM(u.ci().split("T"))
t=d.r
t=t==null?null:t.b
x=2
return A.d(r.de(0,A.S(["wedding_id",d.b,"title",d.c,"category",d.d,"due_date",u,"partner_category",t],y.x,y.w)).cj(0).dP(0),$async$LA)
case 2:s=f
t=v.ga2(0)
r=A.V(v.ga2(0).b,y.u)
r.push(B.cUX(s))
v.sa2(0,t.a8u(r))
return A.l(null,w)}})
return A.m($async$LA,w)},
ZM(d){return this.bCm(d)},
bCm(d){var x=0,w=A.n(y.v),v=this,u
var $async$ZM=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=D.e.lk(v.ga2(0).b,new B.aZN(d))
x=2
return A.d(v.Li(0,u.bpt(!u.e)),$async$ZM)
case 2:return A.l(null,w)}})
return A.m($async$ZM,w)},
Zu(d,e){return this.bB9(0,e)},
bB9(d,e){var x=0,w=A.n(y.v),v=this,u,t,s
var $async$Zu=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:s=$.T().b
s===$&&A.b()
x=2
return A.d(s.R("checklist_items").kA(0).W("id",e),$async$Zu)
case 2:s=v.ga2(0)
u=v.ga2(0).b
t=A.a8(u).i("a5<1>")
u=A.V(new A.a5(u,new B.aZL(e),t),t.i("z.E"))
v.sa2(0,s.a8u(u))
return A.l(null,w)}})
return A.m($async$Zu,w)},
Pl(d,e){return this.aIc(d,e)},
aIc(d,e){var x=0,w=A.n(y.v),v=this
var $async$Pl=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:x=2
return A.d(v.Li(0,D.e.lk(v.ga2(0).b,new B.aZM(d)).awK(!0,e)),$async$Pl)
case 2:return A.l(null,w)}})
return A.m($async$Pl,w)},
Li(d,e){return this.bkw(0,e)},
bkw(d,e){var x=0,w=A.n(y.v),v=this,u,t,s,r,q,p,o,n,m
var $async$Li=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:n=$.T().b
n===$&&A.b()
n=n.R("checklist_items")
u=e.f
u=u==null?null:D.e.gM(u.ci().split("T"))
t=e.r
t=t==null?null:t.b
s=y.b
m=B
x=2
return A.d(n.bh(0,A.S(["title",e.c,"category",e.d,"done",e.e,"due_date",u,"partner_category",t,"selected_partner_id",e.w,"progress_percent",e.x,"updated_at",new A.ae(Date.now(),0,!1).ci()],s,s)).W("id",e.a).cj(0).dP(0),$async$Li)
case 2:r=m.cUX(g)
s=v.ga2(0)
t=A.a([],y.D)
for(n=v.ga2(0).b,u=n.length,q=r.a,p=0;p<n.length;n.length===u||(0,A.H)(n),++p){o=n[p]
if(o.a===q)t.push(r)
else t.push(o)}v.sa2(0,s.a8u(t))
return A.l(null,w)}})
return A.m($async$Li,w)}}
B.Da.prototype={
I(){return"ChecklistStatus."+this.b}}
B.hD.prototype={
gbv(d){var x
if(this.e)return C.pF
x=this.x
if(x!=null&&x>0&&x<100)return C.n0
return C.pE},
awK(d,e){var x=this,w=e===D.KZ?x.w:A.C(e)
return new B.hD(x.a,x.b,x.c,x.d,d,x.f,x.r,w,x.x,x.y)},
bpt(d){return this.awK(d,D.KZ)}}
var z=a.updateTypes(["y(hD)","rS()","hD(a4<c,@>)","wQ()"])
B.aZO.prototype={
$1(d){return d.e},
$S:z+0}
B.aZJ.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.aZK.prototype={
$0(){return this.a.c_(0,this.b)},
$S:1}
B.aZN.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.aZL.prototype={
$1(d){return d.a!==this.a},
$S:z+0}
B.aZM.prototype={
$1(d){return d.a===this.a},
$S:z+0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u
x(B,"dDz","cUX",2)
w(B,"dDy","dji",3)
v(B.wQ.prototype,"giJ","d4",1)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.I,[B.rS,B.hD])
x(A.bx,[B.aZO,B.aZJ,B.aZN,B.aZL,B.aZM])
w(B.wQ,A.fb)
w(B.aZK,A.bR)
w(B.Da,A.fr)})()
A.bq(b.typeUniverse,JSON.parse('{"wQ":{"fb":["rS"]}}'))
var y={u:A.w("hD"),e:A.w("ed"),D:A.w("r<hD>"),x:A.w("c"),b:A.w("@"),w:A.w("c?"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.bzi=x([],y.D)
C.ajY=new B.rS(!1,C.bzi)
C.pE=new B.Da(0,"todo")
C.n0=new B.Da(1,"inProgress")
C.pF=new B.Da(2,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dS0","HO",()=>A.mT(B.dDy(),null,!1,null,null,A.w("wQ"),A.w("rS")))})()};
(a=>{a["TzlDs5rSUJYu72nKejz/0vpHTFM="]=a.current})($__dart_deferred_initializers__);