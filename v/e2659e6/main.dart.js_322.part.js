((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,B={
cCw(d,e){var x=A.aN(y.N)
if(d!=null)x.B(0,d)
x.A(0,e)
if(x.cl(0,D.a51.giX(D.a51)))return D.aeK
if(x.cl(0,D.a52.giX(D.a52)))return D.aeL
return D.aeJ},
cV9(d,e,f){var x,w,v,u=null,t=B.cCw(e,f),s=d==null
switch(A.P(s?u:J.h(d,"cancellation_rule"))){case"hours":x=D.m4
break
case"until_purchase":x=D.zN
break
case"partner_terms":x=D.ol
break
default:x=u
break}w=A.P(s?u:J.h(d,"cancellation_note"))
v=w==null?u:C.f.L(w)
if(v==null)v=""
if(x==null)return new B.no(t.a,t.b,v)
w=A.eF(s?u:J.h(d,"cancellation_hours"))
s=w==null?t.b:w
return new B.no(x,s==null?2:s,v)},
cCx(d){var x
if(d<24||C.i.aj(d,24)!==0)return""+d+" h"
x=C.i.aT(d,24)
return x===1?"1 dia":""+x+" dias"},
v7:function v7(d,e){this.a=d
this.b=e},
no:function no(d,e,f){this.a=d
this.b=e
this.c=f},
cmI:function cmI(){},
d0_(){return new B.CA(null)},
CA:function CA(d){this.a=d},
aat:function aat(d,e){var _=this
_.x=_.w=$
_.y=d
_.z=e
_.Q=2
_.at=_.as=!1
_.d=$
_.c=_.a=null},
bWH:function bWH(d){this.a=d},
bWG:function bWG(d,e){this.a=d
this.b=e},
bWy:function bWy(d){this.a=d},
bWz:function bWz(d){this.a=d},
bWD:function bWD(d){this.a=d},
bWC:function bWC(d,e){this.a=d
this.b=e},
bWE:function bWE(d,e){this.a=d
this.b=e},
bWB:function bWB(d,e){this.a=d
this.b=e},
bWF:function bWF(d){this.a=d},
bWA:function bWA(){}},D,G,E,H
J=c[1]
A=c[0]
C=c[2]
F=c[252]
B=a.updateHolder(c[26],B)
D=c[354]
G=c[351]
E=c[114]
H=c[355]
B.v7.prototype={
H(){return"CancellationKind."+this.b}}
B.no.prototype={
gDv(){var x=null
switch(this.a.a){case 0:break
case 1:x="hours"
break
case 2:x="until_purchase"
break
case 3:x="partner_terms"
break}return x},
aEj(d){var x
switch(this.a.a){case 0:x="Sinal devolvido nas 48 h ap\xf3s pagar; restante at\xe9 30 dias antes"
break
case 1:x=this.b
x="Cancelamento gr\xe1tis at\xe9 "+B.cCx(x==null?2:x)+" antes"
break
case 2:x="Cancela at\xe9 \xe0 compra; depois, segundo o parceiro"
break
case 3:x=this.c
if(!(x.length!==0))x=d==="lodging"?"Cancelamento segundo o alojamento":"Cancelamento segundo o parceiro"
break
default:x=null}return x}}
B.CA.prototype={
R(){return new B.aat(new A.aM(C.aj,$.ah()),D.m4)}}
B.aat.prototype={
ga1W(){var x,w=this,v=w.w
if(v===$){x=w.gV().a2(0,$.bp(),y.D).b
x.toString
w.w!==$&&A.aV()
w.w=x
v=x}return v},
ga3_(){var x,w,v=this,u=v.x
if(u===$){x=v.ga1W().Q
w=G.Zt.h(0,x.length===0?null:C.e.gN(x))
v.x!==$&&A.aV()
v.x=w
u=w}return u},
ak(){var x=this
x.aG()
x.gV().a2(0,$.cBp().$1(new A.ag(x.ga1W().a,x.ga3_())).ghr(),y._).b7(new B.bWH(x),y.P)},
m(){var x=this.y
x.Z$=$.ah()
x.U$=0
this.a9()},
QN(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$QN=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(s.z===D.ol&&C.f.L(s.y.a.a).length===0){s.c.T(y.q).f.ah(D.bO7)
x=1
break}s.t(new B.bWy(s))
r=new B.no(s.z,s.Q,C.f.L(s.y.a.a))
q=!0
u=4
p=$.Z().b
p===$&&A.b()
p=p.S("partner_profiles")
o=r.gDv()
n=s.z
m=n===D.m4?s.Q:null
n=r.c.length===0||n===D.zM?null:r.c
l=y.z
l=p.bp(0,A.R(["cancellation_rule",o,"cancellation_hours",m,"cancellation_note",n],l,l))
n=s.ga1W().a
x=7
return A.d(l.a0("id",n),$async$QN)
case 7:s.gV().aw($.cBp().$1(new A.ag(n,s.ga3_())))
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
break}s.t(new B.bWz(s))
p=s.c.T(y.q).f
p.ah(A.cV(null,null,null,null,null,C.C,null,A.i(q?"Regras guardadas.":"N\xe3o foi poss\xedvel guardar. Tenta outra vez.",null,null,null,null,null,null,null),null,C.a0,null,null,null,null,null,null,null,null,null,null))
if(q){p=s.c
p.toString
A.aC(p,!1).qu()}case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$QN,w)},
QI(d,e){var x=null,w=$.a5
return E.cH0(w,C.V,A.i(e,x,x,x,A.as(x,x,C.E,x,x,x,x,x,x,x,x,15,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),d,y.m)},
u(d){var x,w,v,u,t=this,s=null,r=t.y,q=new B.no(t.z,t.Q,C.f.L(r.a.a)).aEj(t.ga3_()),p=C.ml.B(0,new A.X(0,A.at(d,C.bb,y.w).w.r.b,0,0)),o=y.p,n=A.a([D.bCd],o)
if(!t.as)n.push(F.EK)
else{x=A.T(20)
x=A.a([A.E(s,new E.Db(t.z,new B.bWD(t),A.I(A.a([t.QI(D.zM,"Regra base da \xc0 Nossa!"),C.oQ,t.QI(D.m4,"Gr\xe1tis at\xe9 um prazo antes"),C.oQ,t.QI(D.zN,"At\xe9 \xe0 compra; depois, segundo as minhas condi\xe7\xf5es"),C.oQ,t.QI(D.ol,"Segundo as minhas condi\xe7\xf5es")],o),C.x,C.m,C.q,0,C.w),s,y.U),C.t,s,s,new A.K(C.af,s,s,x,s,s,C.y),s,s,s,s,H.L1,s,s,s)],o)
if(t.z===D.m4){w=A.a([],o)
for(v=0;v<6;++v){u=D.bpA[v]
w.push(A.os(s,A.i(B.cCx(u),s,s,s,s,s,s,s),s,s,new B.bWE(t,u),s,t.Q===u,$.e1,!1,s))}C.e.A(x,A.a([C.bo,D.bZ9,C.a4,A.ef(C.bj,w,C.t,C.bw,8,8)],o))}w=t.z
if(w===D.zN||w===D.ol)C.e.A(x,A.a([C.bo,D.c18,C.a4,A.cB(s,C.a9,!1,s,!0,C.C,s,A.cH(),r,s,s,s,s,s,2,A.jO(s,new A.f6(4,A.T(14),C.ob),s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,"Ex.: Gr\xe1tis at\xe9 7 dias antes; depois, fica o sinal.",s,s,s,s,s,s,s,s,s,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),C.X,!0,s,!0,s,!1,s,C.aG,s,s,s,s,s,s,500,s,3,s,s,!1,"\u2022",s,new B.bWF(t),s,s,s,!1,s,s,!1,s,!0,s,C.av,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.au,s,C.b6,s,s,s,s)],o))
x.push(C.bH)
r=$.e1
w=A.T(14)
x.push(A.E(s,A.W(A.a([A.aJ(C.Co,$.a5,s,s,18),C.aW,A.ac(A.i(q,s,s,s,D.bQi,s,s,s),1)],o),C.x,C.m,C.q,0,s,s),C.t,s,s,new A.K(r,s,s,w,s,s,C.y),s,s,s,s,C.b8,s,s,s))
x.push(C.he)
x.push(new A.oo("Guardar",t.gb4a(),t.at,s))
n.push(new A.a_(C.fW,A.I(x,C.T,C.m,C.q,0,C.w),s))}return A.ku(s,C.af,A.bn(!0,A.cL(n,s,p,s,s,!1,C.Y,!1),s,C.V,!1),s,!1,s,s)}}
var z=a.updateTypes(["H<no>(ax,+(c,c?))","H<~>()","bw(no)","~(v7?)"])
B.cmI.prototype={
$2(d,e){return this.aAB(d,e)},
aAB(d,a0){var x=0,w=A.n(y.A),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$$2=A.j(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:h=null
g=null
h=a0.a
g=a0.b
s=C.a9
u=4
l=$.Z().b
l===$&&A.b()
x=7
return A.d(l.S("partner_profile_categories").aP(0,"partner_categories(slug)").a0("partner_id",h),$async$$2)
case 7:r=a2
q=A.a([],y.s)
for(l=J.aE(r),k=y.Y;l.p();){p=l.gF(l)
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
q=$.Z().b
q===$&&A.b()
x=12
return A.d(q.S("partner_profiles").aP(0,"cancellation_rule, cancellation_hours, cancellation_note").a0("id",h).em(),$async$$2)
case 12:m=a2
q=B.cV9(m,g,s)
v=q
x=1
break
u=2
x=11
break
case 9:u=8
e=t.pop()
q=B.cCw(g,s)
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
B.bWH.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.t(new B.bWG(x,d))},
$S:z+2}
B.bWG.prototype={
$0(){var x,w=this.a,v=this.b
w.z=v.a
x=v.b
w.Q=x==null?2:x
w.y.sbN(0,v.c)
w.as=!0},
$S:0}
B.bWy.prototype={
$0(){return this.a.at=!0},
$S:0}
B.bWz.prototype={
$0(){return this.a.at=!1},
$S:0}
B.bWD.prototype={
$1(d){var x=this.a
return x.t(new B.bWC(x,d))},
$S:z+3}
B.bWC.prototype={
$0(){var x=this.a,w=this.b
return x.z=w==null?x.z:w},
$S:0}
B.bWE.prototype={
$1(d){var x=this.a
return x.t(new B.bWB(x,this.b))},
$S:10}
B.bWB.prototype={
$0(){return this.a.Q=this.b},
$S:0}
B.bWF.prototype={
$1(d){return this.a.t(new B.bWA())},
$S:6}
B.bWA.prototype={
$0(){},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.aat.prototype,"gb4a","QN",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.v7,A.fq)
x(B.no,A.F)
x(B.cmI,A.cD)
x(B.CA,A.dy)
x(B.aat,A.dw)
w(A.bv,[B.bWH,B.bWD,B.bWE,B.bWF])
w(A.bI,[B.bWG,B.bWy,B.bWz,B.bWC,B.bWB,B.bWA])})()
A.bx(b.typeUniverse,JSON.parse('{"CA":{"G":[],"e":[],"f":[]},"aat":{"a0":["CA"]}}'))
var y=(function rtii(){var x=A.v
return{D:x("cI"),m:x("v7"),A:x("no"),M:x("eB<c>"),_:x("H<no>"),s:x("q<c>"),p:x("q<e>"),w:x("d8"),P:x("bw"),U:x("Db<v7>"),N:x("c"),q:x("dD"),z:x("@"),Y:x("a2<@,@>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.zM=new B.v7(0,"standard")
D.m4=new B.v7(1,"hours")
D.zN=new B.v7(2,"untilPurchase")
D.ol=new B.v7(3,"partnerTerms")
D.aeJ=new B.no(D.zM,null,"")
D.aeK=new B.no(D.m4,2,"")
D.aeL=new B.no(D.ol,null,"")
D.bpA=x([2,6,24,48,168,720],A.v("q<w>"))
D.bCd=new A.hj("Regras de cancelamento",null,!0,null,34,20,!0,null)
D.bzP={restaurants:0,bars_nightlife:1,adventure_activities:2,experiences_tours:3,games_escape:4,spa_wellness:5,kids_entertainment:6}
D.a51=new A.eB(D.bzP,7,y.M)
D.bzX={transport:0,lodging:1}
D.a52=new A.eB(D.bzX,2,y.M)
D.bXY=new A.J("Escreve as tuas condi\xe7\xf5es.",null,null,null,null,null,null,null,null,null,null)
D.bO7=new A.cc(D.bXY,null,null,null,null,null,null,null,null,null,null,null,null,C.a0,!1,null,null,null,C.C,null)
D.bQi=new A.C(!0,C.E,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bZ9=new A.J("At\xe9 quanto tempo antes",null,C.e7,null,null,null,null,null,null,null,null)
D.c18=new A.J("As tuas condi\xe7\xf5es",null,C.e7,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dsi","cBp",()=>C.bN.$2$1(new B.cmI(),y.A,A.v("+(c,c?)")))})()};
(a=>{a["TjA6p6iFVAHAvb/tVYGaT42VWf0="]=a.current})($__dart_deferred_initializers__);