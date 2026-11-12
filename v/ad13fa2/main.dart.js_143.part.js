((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
djb(d){var x=B.f.k6(B.f.L(d),A.bf("^@+",!0,!1,!1),"").toLowerCase(),w=x.length
if(w<3)return"Pelo menos 3 caracteres."
if(w>30)return"No m\xe1ximo 30 caracteres."
w=A.bf("^[a-z0-9._]+$",!0,!1,!1)
if(!w.b.test(x))return"S\xf3 letras, n\xfameros, ponto e _ (sem espa\xe7os nem acentos)."
if(B.f.be(x,".")||B.f.hM(x,"."))return"N\xe3o pode come\xe7ar nem acabar em ponto."
if(B.f.n(x,".."))return"Sem dois pontos seguidos."
return null},
ctI(d){var x=0,w=A.n(y.w),v,u,t,s
var $async$ctI=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.W().b
t===$&&A.b()
u=y.b
s=A
x=3
return A.d(t.b9("username_status",A.Q(["p_username",B.f.k6(B.f.L(d),A.bf("^@+",!0,!1,!1),"").toLowerCase()],y.w,u),u),$async$ctI)
case 3:v=s.a1(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$ctI,w)},
csd(d){return C.diq(d)},
diq(d){var x=0,w=A.n(y.w),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$csd=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
q=$.W().b
q===$&&A.b()
p=y.b
l=A
x=7
return A.d(q.b9("set_my_username",A.Q(["p_username",B.f.k6(B.f.L(d),A.bf("^@+",!0,!1,!1),"").toLowerCase()],y.w,p),p),$async$csd)
case 7:p=l.a1(f)
v=p
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
q=A.aa(m)
if(q instanceof A.db){s=q
for(n=0;n<4;++n){r=D.bs7[n]
q=s.a
if(A.xh(q,r,0)){q=s.c
q=q==null?null:J.cG(q)
throw A.p(new C.SX(r,A.fN(q==null?"":q)))}}throw A.p(D.c7u)}else throw m
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$csd,w)},
SX:function SX(d,e){this.a=d
this.b=e},
d5R(){return new C.Eg(null)},
Eg:function Eg(d){this.a=d},
adW:function adW(d){var _=this
_.w=d
_.z=_.y=_.x=null
_.as=_.Q=!1
_.d=$
_.c=_.a=null},
ceC:function ceC(d,e,f){this.a=d
this.b=e
this.c=f},
ceD:function ceD(d,e){this.a=d
this.b=e},
ceB:function ceB(d,e){this.a=d
this.b=e},
ceE:function ceE(d){this.a=d},
ceF:function ceF(d,e){this.a=d
this.b=e},
ceG:function ceG(d){this.a=d},
ceH:function ceH(d,e){this.a=d
this.b=e}},D,F
J=c[1]
A=c[0]
B=c[2]
E=c[389]
C=a.updateHolder(c[11],C)
D=c[390]
F=c[391]
C.SX.prototype={$ibi:1}
C.Eg.prototype={
R(){return new C.adW(new A.aP(B.am,$.ah()))}}
C.adW.prototype={
m(){var x=this.x
if(x!=null)x.aQ(0)
x=this.w
x.a0$=$.ah()
x.V$=0
this.aa()},
b26(d){var x,w,v=this,u=B.f.k6(B.f.L(d),A.bf("^@+",!0,!1,!1),"").toLowerCase()
if(u!==d)v.w.jv(0,new A.bK(u,A.un(B.a9,u.length),B.aD))
x=v.x
if(x!=null)x.aQ(0)
w=C.djb(u)
v.q(new C.ceC(v,u,w))
if(w!=null||u.length===0)return
v.x=A.dc(E.KI,new C.ceD(v,u))},
Jr(){var x=0,w=A.n(y.v),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$Jr=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.q(new C.ceE(s))
r=s.c.S(y.q).f
v=3
x=6
return A.d(C.csd(s.w.a.a),$async$Jr)
case 6:q=e
s.gU().av($.cuv())
r.ad(A.cH(null,null,null,null,null,B.D,null,A.i("O teu @ agora \xe9 @"+A.u(q)+".",null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
n=s.c
if(n!=null)A.au(n).aX(null)
t.push(5)
x=4
break
case 3:v=2
l=u.pop()
n=A.aa(l)
if(n instanceof C.SX){p=n
s.q(new C.ceF(s,p))
if(p.a==="too_soon"){o=p.b
r.ad(A.cH(null,null,null,null,null,B.D,null,A.i(o==null?"S\xf3 podes mudar o @ uma vez a cada 30 dias.":"S\xf3 podes voltar a mudar o @ a partir de "+A.aY(o)+" "+B.pR[A.aH(o)-1]+".",null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))}}else r.ad(B.h9)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new C.ceG(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Jr,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gU().M($.cuv(),y.n),l=m.gt(m)
if(!o.as)m=(l==null?n:l.a)!=null
else m=!1
if(m){o.as=!0
m=l.a
m.toString
o.w.sbL(0,m)
o.y="mine"}m=l==null
x=!1
if(!m)if(l.a!=null){w=l.b
w=!(w==null||new A.am(Date.now(),0,!1).iD(w))
x=w}w=o.z
v=w==null
switch(!v?"format":o.y){case"format":w.toString
w=new A.cn(w,B.dt,B.mL)
break
case"checking":w=D.bIY
break
case"ok":w=D.bIS
break
case"mine":w=D.bIX
break
case"taken":w=D.bJe
break
case"reserved":w=D.bJ7
break
case"invalid":w=D.bIQ
break
case"error":w=D.bJ8
break
default:w=D.bIM
break}u=w.a
t=w.b
s=!x
r=s&&!o.Q&&v&&o.y==="ok"
v=A.cv7(B.ae,0,n,D.bZq)
q=D.amY.B(0,new A.Y(0,A.at(d,B.ba,y.x).w.r.b,0,0))
p=y.u
s=A.a([A.cF(!1,B.aa,(m?n:l.a)==null,n,!0,B.D,n,A.cI(),o.w,n,n,n,n,n,2,D.ayu,B.Y,!0,n,!1,s,!1,n,B.aH,n,n,n,n,n,n,30,n,1,n,n,!1,"\u2022",n,o.gb25(),n,new C.ceH(o,r),n,!1,n,n,!1,n,!0,n,B.aw,n,n,n,n,n,n,n,n,n,n,n,F.a6R,!0,B.ar,n,B.b5,n,n,n,n),B.a5],p)
if(u.length!==0)s.push(A.Z(A.a([A.aK(w.c,t,n,n,18),B.bp,A.ac(A.i(u,n,n,n,A.as(n,n,t,n,n,n,n,n,n,n,n,13,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],p),B.x,B.m,B.q,0,n,n))
s.push(B.bq)
s.push(D.bYc)
if(x){m=l.b
m.toString
B.e.A(s,A.a([B.a5,A.i("Podes voltar a mudar a partir de "+A.aY(m)+" "+B.pR[A.aH(m)-1]+".",n,n,n,B.e6,n,n,n)],p))}s.push(B.nC)
m=o.Q
s.push(new A.f7("Guardar",r?o.gbe1():n,m,n))
return A.cL(v,B.bh,A.bp(!0,A.cO(s,n,q,n,n,!1,B.Z,!1),n,B.V,!1),!0,n)}}
var z=a.updateTypes(["~(c)","H<~>()"])
C.ceC.prototype={
$0(){var x=this,w=x.a,v=x.b.length===0
w.z=v?null:x.c
w.y=x.c==null&&!v?"checking":null},
$S:0}
C.ceD.prototype={
$0(){return this.azO()},
azO(){var x=0,w=A.n(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p={}
p.a=null
u=4
n=p
x=7
return A.d(C.ctI(s.b),$async$$0)
case 7:n.a=e
u=2
x=6
break
case 4:u=3
o=t.pop()
p.a="error"
x=6
break
case 3:x=2
break
case 6:q=s.a
if(q.c==null||B.f.k6(B.f.L(q.w.a.a),A.bf("^@+",!0,!1,!1),"").toLowerCase()!==s.b){x=1
break}q.q(new C.ceB(p,q))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:2}
C.ceB.prototype={
$0(){return this.b.y=this.a.a},
$S:0}
C.ceE.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ceF.prototype={
$0(){return this.a.y=this.b.a},
$S:0}
C.ceG.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ceH.prototype={
$1(d){return this.b?this.a.Jr():null},
$S:5};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=C.adW.prototype,"gb25","b26",0)
w(v,"gbe1","Jr",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.SX,A.F)
x(C.Eg,A.dx)
x(C.adW,A.dt)
w(A.bI,[C.ceC,C.ceD,C.ceB,C.ceE,C.ceF,C.ceG])
x(C.ceH,A.bv)})()
A.bx(b.typeUniverse,JSON.parse('{"SX":{"bi":[]},"Eg":{"G":[],"e":[],"f":[]},"adW":{"a0":["Eg"]}}'))
var y={n:A.v("aF<yD>"),u:A.v("q<e>"),x:A.v("d8"),w:A.v("c"),q:A.v("dB"),b:A.v("@"),v:A.v("~")};(function constants(){var x=a.makeConstList
D.amY=new A.Y(20,12,20,32)
D.ayu=new A.dC(null,null,null,"Nome de utilizador",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"@",null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bs7=x(["invalid","reserved","taken","too_soon"],A.v("q<c>"))
D.bIM=new A.cn("",B.L,B.i2)
D.bIQ=new A.cn("Este @ n\xe3o \xe9 v\xe1lido.",B.dt,B.mL)
D.bIS=new A.cn("Est\xe1 livre. Fica s\xf3 teu.",B.Ak,B.jC)
D.bIX=new A.cn("\xc9 o teu @.",B.Ak,B.jC)
D.bIY=new A.cn("A verificar\u2026",B.L,B.ep)
D.bJ7=new A.cn("Este @ est\xe1 reservado.",B.dt,B.jE)
D.bJ8=new A.cn("N\xe3o foi poss\xedvel verificar. Tenta outra vez.",B.dt,B.mL)
D.bJe=new A.cn("J\xe1 \xe9 de outra conta.",B.dt,B.jE)
D.bSp=new A.C(!0,B.L,null,null,null,null,13,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bYc=new A.I("3 a 30 caracteres: letras, n\xfameros, ponto e _. Sem espa\xe7os nem acentos. Podes mudar uma vez a cada 30 dias.",null,D.bSp,null,null,null,null,null,null,null,null)
D.bZq=new A.I("O teu @",null,null,null,null,null,null,null,null,null,null)
D.c7u=new C.SX("unknown",null)})()};
(a=>{a["1DTzGoecgh+FOympP09vjbHJ27s="]=a.current})($__dart_deferred_initializers__);