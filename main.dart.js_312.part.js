((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,B={
cDn(d,e){var x=A.aL(y.N)
if(d!=null)x.B(0,d)
x.A(0,e)
if(x.ci(0,D.a4Y.giX(D.a4Y)))return D.aeI
if(x.ci(0,D.a4Z.giX(D.a4Z)))return D.aeJ
return D.aeH},
cW6(d,e,f){var x,w,v,u=null,t=B.cDn(e,f),s=d==null
switch(A.P(s?u:J.h(d,"cancellation_rule"))){case"hours":x=D.m3
break
case"until_purchase":x=D.zP
break
case"partner_terms":x=D.oq
break
default:x=u
break}w=A.P(s?u:J.h(d,"cancellation_note"))
v=w==null?u:C.f.L(w)
if(v==null)v=""
if(x==null)return new B.no(t.a,t.b,v)
w=A.eC(s?u:J.h(d,"cancellation_hours"))
s=w==null?t.b:w
return new B.no(x,s==null?2:s,v)},
cDo(d){var x
if(d<24||C.i.ah(d,24)!==0)return""+d+" h"
x=C.i.aT(d,24)
return x===1?"1 dia":""+x+" dias"},
v6:function v6(d,e){this.a=d
this.b=e},
no:function no(d,e,f){this.a=d
this.b=e
this.c=f},
cns:function cns(){},
d1_(){return new B.CJ(null)},
CJ:function CJ(d){this.a=d},
aaA:function aaA(d,e){var _=this
_.x=_.w=$
_.y=d
_.z=e
_.Q=2
_.at=_.as=!1
_.d=$
_.c=_.a=null},
bXa:function bXa(d){this.a=d},
bX9:function bX9(d,e){this.a=d
this.b=e},
bX1:function bX1(d){this.a=d},
bX2:function bX2(d){this.a=d},
bX6:function bX6(d){this.a=d},
bX5:function bX5(d,e){this.a=d
this.b=e},
bX7:function bX7(d,e){this.a=d
this.b=e},
bX4:function bX4(d,e){this.a=d
this.b=e},
bX8:function bX8(d){this.a=d},
bX3:function bX3(){}},D,G,E,H
J=c[1]
A=c[0]
C=c[2]
F=c[253]
B=a.updateHolder(c[26],B)
D=c[342]
G=c[339]
E=c[116]
H=c[343]
B.v6.prototype={
H(){return"CancellationKind."+this.b}}
B.no.prototype={
gwt(){var x=null
switch(this.a.a){case 0:break
case 1:x="hours"
break
case 2:x="until_purchase"
break
case 3:x="partner_terms"
break}return x},
aED(d){var x
switch(this.a.a){case 0:x="Sinal devolvido nas 48 h ap\xf3s pagar; restante at\xe9 30 dias antes"
break
case 1:x=this.b
x="Cancelamento gr\xe1tis at\xe9 "+B.cDo(x==null?2:x)+" antes"
break
case 2:x="Cancela at\xe9 \xe0 compra; depois, segundo o parceiro"
break
case 3:x=this.c
if(!(x.length!==0))x=d==="lodging"?"Cancelamento segundo o alojamento":"Cancelamento segundo o parceiro"
break
default:x=null}return x}}
B.CJ.prototype={
R(){return new B.aaA(new A.aP(C.am,$.ah()),D.m3)}}
B.aaA.prototype={
ga29(){var x,w=this,v=w.w
if(v===$){x=w.gU().a2(0,$.be(),y.D).b
x.toString
w.w!==$&&A.aT()
w.w=x
v=x}return v},
ga3f(){var x,w,v=this,u=v.x
if(u===$){x=v.ga29().Q
w=G.Zq.h(0,x.length===0?null:C.e.gO(x))
v.x!==$&&A.aT()
v.x=w
u=w}return u},
ak(){var x=this
x.aG()
x.gU().a2(0,$.cCg().$1(new A.ag(x.ga29().a,x.ga3f())).ghr(),y._).b7(new B.bXa(x),y.P)},
m(){var x=this.y
x.a0$=$.ah()
x.V$=0
this.aa()},
QZ(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$QZ=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.z===D.oq&&C.f.L(s.y.a.a).length===0){s.c.S(y.q).f.ad(D.bOL)
x=1
break}s.q(new B.bX1(s))
r=new B.no(s.z,s.Q,C.f.L(s.y.a.a))
q=!0
u=4
p=$.W().b
p===$&&A.b()
p=p.T("partner_profiles")
o=r.gwt()
n=s.z
m=n===D.m3?s.Q:null
n=r.c.length===0||n===D.zO?null:r.c
l=y.z
l=p.bm(0,A.Q(["cancellation_rule",o,"cancellation_hours",m,"cancellation_note",n],l,l))
n=s.ga29().a
x=7
return A.d(l.a_("id",n),$async$QZ)
case 7:s.gU().av($.cCg().$1(new A.ag(n,s.ga3f())))
u=2
x=6
break
case 4:u=3
j=t.pop()
q=!1
x=6
break
case 3:x=2
break
case 6:if(s.c==null){x=1
break}s.q(new B.bX2(s))
p=s.c.S(y.q).f
p.ad(A.cH(null,null,null,null,null,C.D,null,A.i(q?"Regras guardadas.":"N\xe3o foi poss\xedvel guardar. Tenta outra vez.",null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
if(q){p=s.c
p.toString
A.aB(p,!1).qs()}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$QZ,w)},
QT(d,e){var x=null,w=$.a9
return E.cHT(w,C.V,A.i(e,x,x,x,A.as(x,x,C.C,x,x,x,x,x,x,x,x,15,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),d,y.m)},
u(d){var x,w,v,u,t=this,s=null,r=t.y,q=new B.no(t.z,t.Q,C.f.L(r.a.a)).aED(t.ga3f()),p=C.mj.B(0,new A.Y(0,A.at(d,C.ba,y.w).w.r.b,0,0)),o=y.p,n=A.a([D.bCx],o)
if(!t.as)n.push(F.EN)
else{x=A.T(20)
x=A.a([A.E(s,new E.Dl(t.z,new B.bX6(t),A.J(A.a([t.QT(D.zO,"Regra base da \xc0 Nossa!"),C.oW,t.QT(D.m3,"Gr\xe1tis at\xe9 um prazo antes"),C.oW,t.QT(D.zP,"At\xe9 \xe0 compra; depois, segundo as minhas condi\xe7\xf5es"),C.oW,t.QT(D.oq,"Segundo as minhas condi\xe7\xf5es")],o),C.x,C.m,C.q,0,C.w),s,y.U),C.t,s,s,new A.L(C.ag,s,s,x,s,s,C.y),s,s,s,s,H.L2,s,s,s)],o)
if(t.z===D.m3){w=A.a([],o)
for(v=0;v<6;++v){u=D.bpG[v]
w.push(A.on(s,A.i(B.cDo(u),s,s,s,s,s,s,s),s,s,new B.bX7(t,u),s,t.Q===u,$.e6,!1,s))}C.e.A(x,A.a([C.bq,D.bZM,C.a4,A.e9(C.bf,w,C.t,C.bt,8,8)],o))}w=t.z
if(w===D.zP||w===D.oq)C.e.A(x,A.a([C.bq,D.c1L,C.a4,A.cF(s,C.aa,!1,s,!0,C.D,s,A.cI(),r,s,s,s,s,s,2,A.jP(s,new A.f6(4,A.T(14),C.oe),s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,"Ex.: Gr\xe1tis at\xe9 7 dias antes; depois, fica o sinal.",s,s,s,s,s,s,s,s,s,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),C.Y,!0,s,!0,s,!1,s,C.aH,s,s,s,s,s,s,500,s,3,s,s,!1,"\u2022",s,new B.bX8(t),s,s,s,!1,s,s,!1,s,!0,s,C.aw,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.ar,s,C.b5,s,s,s,s)],o))
x.push(C.bM)
r=$.e6
w=A.T(14)
x.push(A.E(s,A.Z(A.a([A.aK(C.Cq,$.a9,s,s,18),C.aY,A.ac(A.i(q,s,s,s,D.bQZ,s,s,s),1)],o),C.x,C.m,C.q,0,s,s),C.t,s,s,new A.L(r,s,s,w,s,s,C.y),s,s,s,s,C.b8,s,s,s))
x.push(C.fj)
x.push(new A.pk("Guardar",t.gb4w(),t.at,s))
n.push(new A.a_(C.fV,A.J(x,C.R,C.m,C.q,0,C.w),s))}return A.ke(s,C.ag,A.bp(!0,A.cO(n,s,p,s,s,!1,C.Z,!1),s,C.V,!1),s,!1,s,s)}}
var z=a.updateTypes(["H<no>(ax,+(c,c?))","H<~>()","bw(no)","~(v6?)"])
B.cns.prototype={
$2(d,e){return this.aAT(d,e)},
aAT(d,a0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$2=A.j(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:h=null
g=null
h=a0.a
g=a0.b
s=C.aa
u=4
l=$.W().b
l===$&&A.b()
x=7
return A.d(l.T("partner_profile_categories").aN(0,"partner_categories(slug)").a_("partner_id",h),$async$$2)
case 7:r=a2
q=A.a([],y.s)
for(l=J.aD(r),k=y.Y;l.p();){p=l.gF(l)
j=k.a(J.h(p,"partner_categories"))
o=j==null?null:J.h(j,"slug")
n=null
if(typeof o=="string"){n=o
J.cg(q,n)}}s=q
u=2
x=6
break
case 4:u=3
f=t.pop()
x=6
break
case 3:x=2
break
case 6:u=9
q=$.W().b
q===$&&A.b()
x=12
return A.d(q.T("partner_profiles").aN(0,"cancellation_rule, cancellation_hours, cancellation_note").a_("id",h).ec(),$async$$2)
case 12:m=a2
q=B.cW6(m,g,s)
v=q
x=1
break
u=2
x=11
break
case 9:u=8
e=t.pop()
q=B.cDn(g,s)
v=q
x=1
break
x=11
break
case 8:x=2
break
case 11:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$2,w)},
$S:z+0}
B.bXa.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.q(new B.bX9(x,d))},
$S:z+2}
B.bX9.prototype={
$0(){var x,w=this.a,v=this.b
w.z=v.a
x=v.b
w.Q=x==null?2:x
w.y.sbL(0,v.c)
w.as=!0},
$S:0}
B.bX1.prototype={
$0(){return this.a.at=!0},
$S:0}
B.bX2.prototype={
$0(){return this.a.at=!1},
$S:0}
B.bX6.prototype={
$1(d){var x=this.a
return x.q(new B.bX5(x,d))},
$S:z+3}
B.bX5.prototype={
$0(){var x=this.a,w=this.b
return x.z=w==null?x.z:w},
$S:0}
B.bX7.prototype={
$1(d){var x=this.a
return x.q(new B.bX4(x,this.b))},
$S:10}
B.bX4.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bX8.prototype={
$1(d){return this.a.q(new B.bX3())},
$S:5}
B.bX3.prototype={
$0(){},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.aaA.prototype,"gb4w","QZ",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.v6,A.fr)
x(B.no,A.F)
x(B.cns,A.cD)
x(B.CJ,A.dx)
x(B.aaA,A.dt)
w(A.bv,[B.bXa,B.bX6,B.bX7,B.bX8])
w(A.bI,[B.bX9,B.bX1,B.bX2,B.bX5,B.bX4,B.bX3])})()
A.bx(b.typeUniverse,JSON.parse('{"CJ":{"G":[],"e":[],"f":[]},"aaA":{"a0":["CJ"]}}'))
var y=(function rtii(){var x=A.v
return{D:x("cC"),m:x("v6"),A:x("no"),M:x("et<c>"),_:x("H<no>"),s:x("q<c>"),p:x("q<e>"),w:x("d8"),P:x("bw"),U:x("Dl<v6>"),N:x("c"),q:x("dB"),z:x("@"),Y:x("a2<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.zO=new B.v6(0,"standard")
D.m3=new B.v6(1,"hours")
D.zP=new B.v6(2,"untilPurchase")
D.oq=new B.v6(3,"partnerTerms")
D.aeH=new B.no(D.zO,null,"")
D.aeI=new B.no(D.m3,2,"")
D.aeJ=new B.no(D.oq,null,"")
D.bpG=x([2,6,24,48,168,720],A.v("q<w>"))
D.bCx=new A.hi("Regras de cancelamento",null,!0,null,34,20,!0,null)
D.bzY={restaurants:0,bars_nightlife:1,adventure_activities:2,experiences_tours:3,games_escape:4,spa_wellness:5,kids_entertainment:6}
D.a4Y=new A.et(D.bzY,7,y.M)
D.bA5={transport:0,lodging:1}
D.a4Z=new A.et(D.bA5,2,y.M)
D.bYB=new A.I("Escreve as tuas condi\xe7\xf5es.",null,null,null,null,null,null,null,null,null,null)
D.bOL=new A.c4(D.bYB,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.D,null)
D.bQZ=new A.C(!0,C.C,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bZM=new A.I("At\xe9 quanto tempo antes",null,C.e5,null,null,null,null,null,null,null,null)
D.c1L=new A.I("As tuas condi\xe7\xf5es",null,C.e5,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dth","cCg",()=>C.bO.$2$1(new B.cns(),y.A,A.v("+(c,c?)")))})()};
(a=>{a["9Zx5roXXaS8HxmC9O7XqvXxoSUs="]=a.current})($__dart_deferred_initializers__);