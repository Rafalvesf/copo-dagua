((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
di5(d){var x=B.f.k6(B.f.L(d),A.bg("^@+",!0,!1,!1),"").toLowerCase(),w=x.length
if(w<3)return"Pelo menos 3 caracteres."
if(w>30)return"No m\xe1ximo 30 caracteres."
w=A.bg("^[a-z0-9._]+$",!0,!1,!1)
if(!w.b.test(x))return"S\xf3 letras, n\xfameros, ponto e _ (sem espa\xe7os nem acentos)."
if(B.f.be(x,".")||B.f.hL(x,"."))return"N\xe3o pode come\xe7ar nem acabar em ponto."
if(B.f.n(x,".."))return"Sem dois pontos seguidos."
return null},
csJ(d){var x=0,w=A.n(y.w),v,u,t,s
var $async$csJ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.Z().b
t===$&&A.b()
u=y.b
s=A
x=3
return A.d(t.bd("username_status",A.R(["p_username",B.f.k6(B.f.L(d),A.bg("^@+",!0,!1,!1),"").toLowerCase()],y.w,u),u),$async$csJ)
case 3:v=s.a1(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$csJ,w)},
crh(d){return C.dhj(d)},
dhj(d){var x=0,w=A.n(y.w),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$crh=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
q=$.Z().b
q===$&&A.b()
p=y.b
l=A
x=7
return A.d(q.bd("set_my_username",A.R(["p_username",B.f.k6(B.f.L(d),A.bg("^@+",!0,!1,!1),"").toLowerCase()],y.w,p),p),$async$crh)
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
if(q instanceof A.dm){s=q
for(n=0;n<4;++n){r=D.brY[n]
q=s.a
if(A.Av(q,r,0)){q=s.c
q=q==null?null:J.cJ(q)
throw A.p(new C.SI(r,A.h_(q==null?"":q)))}}throw A.p(D.c6G)}else throw m
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$crh,w)},
SI:function SI(d,e){this.a=d
this.b=e},
d4H(){return new C.E5(null)},
E5:function E5(d){this.a=d},
adK:function adK(d){var _=this
_.w=d
_.z=_.y=_.x=null
_.as=_.Q=!1
_.d=$
_.c=_.a=null},
cdL:function cdL(d,e,f){this.a=d
this.b=e
this.c=f},
cdM:function cdM(d,e){this.a=d
this.b=e},
cdK:function cdK(d,e){this.a=d
this.b=e},
cdN:function cdN(d){this.a=d},
cdO:function cdO(d,e){this.a=d
this.b=e},
cdP:function cdP(d){this.a=d},
cdQ:function cdQ(d,e){this.a=d
this.b=e}},D,E,F
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[11],C)
D=c[399]
E=c[400]
F=c[325]
C.SI.prototype={$ibf:1}
C.E5.prototype={
R(){return new C.adK(new A.aM(B.aj,$.ah()))}}
C.adK.prototype={
m(){var x=this.x
if(x!=null)x.aQ(0)
x=this.w
x.Z$=$.ah()
x.U$=0
this.aa()},
b1K(d){var x,w,v=this,u=B.f.k6(B.f.L(d),A.bg("^@+",!0,!1,!1),"").toLowerCase()
if(u!==d)v.w.jU(0,new A.bR(u,A.un(B.a8,u.length),B.aI))
x=v.x
if(x!=null)x.aQ(0)
w=C.di5(u)
v.t(new C.cdL(v,u,w))
if(w!=null||u.length===0)return
v.x=A.db(F.B7,new C.cdM(v,u))},
Jg(){var x=0,w=A.n(y.v),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$Jg=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.t(new C.cdN(s))
r=s.c.T(y.q).f
v=3
x=6
return A.d(C.crh(s.w.a.a),$async$Jg)
case 6:q=e
s.gV().aw($.ctu())
r.ah(A.cV(null,null,null,null,null,B.C,null,A.i("O teu @ agora \xe9 @"+A.u(q)+".",null,null,null,null,null,null,null),null,B.a0,null,null,null,null,null,null,null,null,null,null))
n=s.c
if(n!=null)A.av(n).b0(null)
t.push(5)
x=4
break
case 3:v=2
l=u.pop()
n=A.aa(l)
if(n instanceof C.SI){p=n
s.t(new C.cdO(s,p))
if(p.a==="too_soon"){o=p.b
r.ah(A.cV(null,null,null,null,null,B.C,null,A.i(o==null?"S\xf3 podes mudar o @ uma vez a cada 30 dias.":"S\xf3 podes voltar a mudar o @ a partir de "+A.aV(o)+" "+B.pD[A.aD(o)-1]+".",null,null,null,null,null,null,null),null,B.a0,null,null,null,null,null,null,null,null,null,null))}}else r.ah(B.he)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.t(new C.cdP(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Jg,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gV().M($.ctu(),y.n),l=m.gq(m)
if(!o.as)m=(l==null?n:l.a)!=null
else m=!1
if(m){o.as=!0
m=l.a
m.toString
o.w.sbM(0,m)
o.y="mine"}m=l==null
x=!1
if(!m)if(l.a!=null){w=l.b
w=!(w==null||new A.ao(Date.now(),0,!1).ii(w))
x=w}w=o.z
v=w==null
switch(!v?"format":o.y){case"format":w.toString
w=new A.cs(w,B.dv,B.mI)
break
case"checking":w=D.bIi
break
case"ok":w=D.bI9
break
case"mine":w=D.bIh
break
case"taken":w=D.bIB
break
case"reserved":w=D.bIu
break
case"invalid":w=D.bI7
break
case"error":w=D.bIv
break
default:w=D.bI2
break}u=w.a
t=w.b
s=!x
r=s&&!o.Q&&v&&o.y==="ok"
v=A.cu6(B.ad,0,n,D.bYM)
q=D.amT.B(0,new A.V(0,A.at(d,B.bc,y.x).w.r.b,0,0))
p=y.u
s=A.a([A.cA(!1,B.a9,(m?n:l.a)==null,n,!0,B.C,n,A.cH(),o.w,n,n,n,n,n,2,D.ayq,B.X,!0,n,!1,s,!1,n,B.aG,n,n,n,n,n,n,30,n,1,n,n,!1,"\u2022",n,o.gb1J(),n,new C.cdQ(o,r),n,!1,n,n,!1,n,!0,n,B.av,n,n,n,n,n,n,n,n,n,n,n,E.a6U,!0,B.au,n,B.b6,n,n,n,n),B.a5],p)
if(u.length!==0)s.push(A.X(A.a([A.aJ(w.c,t,n,n,18),B.bp,A.ac(A.i(u,n,n,n,A.as(n,n,t,n,n,n,n,n,n,n,n,13,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],p),B.x,B.m,B.q,0,n,n))
s.push(B.bq)
s.push(D.bXw)
if(x){m=l.b
m.toString
B.e.A(s,A.a([B.a5,A.i("Podes voltar a mudar a partir de "+A.aV(m)+" "+B.pD[A.aD(m)-1]+".",n,n,n,B.dQ,n,n,n)],p))}s.push(B.nz)
m=o.Q
s.push(new A.f7("Guardar",r?o.gbdy():n,m,n))
return A.cF(v,B.be,A.bn(!0,A.cL(s,n,q,n,n,!1,B.Z,!1),n,B.V,!1),!0,n)}}
var z=a.updateTypes(["~(c)","H<~>()"])
C.cdL.prototype={
$0(){var x=this,w=x.a,v=x.b.length===0
w.z=v?null:x.c
w.y=x.c==null&&!v?"checking":null},
$S:0}
C.cdM.prototype={
$0(){return this.azx()},
azx(){var x=0,w=A.n(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p={}
p.a=null
u=4
n=p
x=7
return A.d(C.csJ(s.b),$async$$0)
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
if(q.c==null||B.f.k6(B.f.L(q.w.a.a),A.bg("^@+",!0,!1,!1),"").toLowerCase()!==s.b){x=1
break}q.t(new C.cdK(p,q))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:2}
C.cdK.prototype={
$0(){return this.b.y=this.a.a},
$S:0}
C.cdN.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.cdO.prototype={
$0(){return this.a.y=this.b.a},
$S:0}
C.cdP.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.cdQ.prototype={
$1(d){return this.b?this.a.Jg():null},
$S:6};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=C.adK.prototype,"gb1J","b1K",0)
w(v,"gbdy","Jg",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.SI,A.F)
x(C.E5,A.dy)
x(C.adK,A.dw)
w(A.bI,[C.cdL,C.cdM,C.cdK,C.cdN,C.cdO,C.cdP])
x(C.cdQ,A.bv)})()
A.bx(b.typeUniverse,JSON.parse('{"SI":{"bf":[]},"E5":{"G":[],"e":[],"f":[]},"adK":{"a0":["E5"]}}'))
var y={n:A.v("aG<yx>"),u:A.v("q<e>"),x:A.v("d8"),w:A.v("c"),q:A.v("dD"),b:A.v("@"),v:A.v("~")};(function constants(){var x=a.makeConstList
D.amT=new A.V(20,12,20,32)
D.ayq=new A.dz(null,null,null,"Nome de utilizador",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"@",null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.brY=x(["invalid","reserved","taken","too_soon"],A.v("q<c>"))
D.bI2=new A.cs("",B.L,B.hs)
D.bI7=new A.cs("Este @ n\xe3o \xe9 v\xe1lido.",B.dv,B.mI)
D.bI9=new A.cs("Est\xe1 livre. Fica s\xf3 teu.",B.Af,B.jI)
D.bIh=new A.cs("\xc9 o teu @.",B.Af,B.jI)
D.bIi=new A.cs("A verificar\u2026",B.L,B.eo)
D.bIu=new A.cs("Este @ est\xe1 reservado.",B.dv,B.jJ)
D.bIv=new A.cs("N\xe3o foi poss\xedvel verificar. Tenta outra vez.",B.dv,B.mI)
D.bIB=new A.cs("J\xe1 \xe9 de outra conta.",B.dv,B.jJ)
D.bRB=new A.C(!0,B.L,null,null,null,null,13,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bXw=new A.J("3 a 30 caracteres: letras, n\xfameros, ponto e _. Sem espa\xe7os nem acentos. Podes mudar uma vez a cada 30 dias.",null,D.bRB,null,null,null,null,null,null,null,null)
D.bYM=new A.J("O teu @",null,null,null,null,null,null,null,null,null,null)
D.c6G=new C.SI("unknown",null)})()};
(a=>{a["rzQ4gcuTOtJFnfMkAW+k82XvqiQ="]=a.current})($__dart_deferred_initializers__);