((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dvt(d){var x=B.f.i5(B.f.D(d),A.b3("^@+",!0,!1,!1),"").toLowerCase(),w=x.length
if(w<3)return"Pelo menos 3 caracteres."
if(w>30)return"No m\xe1ximo 30 caracteres."
w=A.b3("^[a-z0-9._]+$",!0,!1,!1)
if(!w.b.test(x))return"S\xf3 letras, n\xfameros, ponto e _ (sem espa\xe7os nem acentos)."
if(B.f.b5(x,".")||B.f.fp(x,"."))return"N\xe3o pode come\xe7ar nem acabar em ponto."
if(B.f.n(x,".."))return"Sem dois pontos seguidos."
return null},
cDm(d){var x=0,w=A.n(y.w),v,u,t,s
var $async$cDm=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.S().b
t===$&&A.b()
u=y.b
s=A
x=3
return A.d(t.b4("username_status",A.Q(["p_username",B.f.i5(B.f.D(d),A.b3("^@+",!0,!1,!1),"").toLowerCase()],y.w,u),u),$async$cDm)
case 3:v=s.a2(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cDm,w)},
cBQ(d){return C.duG(d)},
duG(d){var x=0,w=A.n(y.w),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cBQ=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
q=$.S().b
q===$&&A.b()
p=y.b
l=A
x=7
return A.d(q.b4("set_my_username",A.Q(["p_username",B.f.i5(B.f.D(d),A.b3("^@+",!0,!1,!1),"").toLowerCase()],y.w,p),p),$async$cBQ)
case 7:p=l.a2(f)
v=p
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
q=A.a9(m)
if(q instanceof A.cY){s=q
for(n=0;n<4;++n){r=D.bxD[n]
q=s.a
if(A.vJ(q,r,0)){q=s.c
q=q==null?null:J.cL(q)
throw A.p(new C.UQ(r,A.eO(q==null?"":q)))}}throw A.p(D.ceC)}else throw m
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cBQ,w)},
UQ:function UQ(d,e){this.a=d
this.b=e},
dgT(){return new C.Fw(null)},
Fw:function Fw(d){this.a=d},
agE:function agE(d){var _=this
_.w=d
_.z=_.y=_.x=null
_.as=_.Q=!1
_.d=$
_.c=_.a=null},
cnx:function cnx(d,e,f){this.a=d
this.b=e
this.c=f},
cny:function cny(d,e){this.a=d
this.b=e},
cnw:function cnw(d,e){this.a=d
this.b=e},
cnz:function cnz(d){this.a=d},
cnA:function cnA(d,e){this.a=d
this.b=e},
cnB:function cnB(d){this.a=d},
cnC:function cnC(d,e){this.a=d
this.b=e}},D,F
J=c[1]
A=c[0]
B=c[2]
E=c[405]
C=a.updateHolder(c[12],C)
D=c[406]
F=c[407]
C.UQ.prototype={$ibj:1}
C.Fw.prototype={
R(){return new C.agE(new A.aH(B.al,$.ag()))}}
C.agE.prototype={
m(){var x=this.x
if(x!=null)x.aT(0)
x=this.w
x.a0$=$.ag()
x.V$=0
this.a8()},
b6a(d){var x,w,v=this,u=B.f.i5(B.f.D(d),A.b3("^@+",!0,!1,!1),"").toLowerCase()
if(u!==d)v.w.jJ(0,new A.bF(u,A.vh(B.a8,u.length),B.av))
x=v.x
if(x!=null)x.aT(0)
w=C.dvt(u)
v.q(new C.cnx(v,u,w))
if(w!=null||u.length===0)return
v.x=A.dq(E.LI,new C.cny(v,u))},
KG(){var x=0,w=A.n(y.v),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$KG=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.q(new C.cnz(s))
r=s.c.S(y.q).f
v=3
x=6
return A.d(C.cBQ(s.w.a.a),$async$KG)
case 6:q=e
s.gU().al($.cEa())
r.a7(A.cz(null,null,null,null,null,B.z,null,A.i("O teu @ agora \xe9 @"+A.q(q)+".",null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
n=s.c
if(n!=null)A.ar(n).aG(null)
t.push(5)
x=4
break
case 3:v=2
l=u.pop()
n=A.a9(l)
if(n instanceof C.UQ){p=n
s.q(new C.cnA(s,p))
if(p.a==="too_soon"){o=p.b
r.a7(A.cz(null,null,null,null,null,B.z,null,A.i(o==null?"S\xf3 podes mudar o @ uma vez a cada 30 dias.":"S\xf3 podes voltar a mudar o @ a partir de "+A.aQ(o)+" "+B.wO[A.aC(o)-1]+".",null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}}else r.a7(B.fl)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new C.cnB(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KG,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gU().M($.cEa(),y.n),l=m.gv(m)
if(!o.as)m=(l==null?n:l.a)!=null
else m=!1
if(m){o.as=!0
m=l.a
m.toString
o.w.sbF(0,m)
o.y="mine"}m=l==null
x=!1
if(!m)if(l.a!=null){w=l.b
w=!(w==null||new A.ai(Date.now(),0,!1).i0(w))
x=w}w=o.z
v=w==null
switch(!v?"format":o.y){case"format":w.toString
w=new A.cp(w,B.ew,B.uT)
break
case"checking":w=D.bPc
break
case"ok":w=D.bP6
break
case"mine":w=D.bPb
break
case"taken":w=D.bPo
break
case"reserved":w=D.bPi
break
case"invalid":w=D.bP4
break
case"error":w=D.bPj
break
default:w=D.bP1
break}u=w.a
t=w.b
s=!x
r=s&&!o.Q&&v&&o.y==="ok"
v=A.cEK(B.ag,0,n,D.c4K)
q=D.arB.B(0,new A.a0(0,A.at(d,B.bb,y.x).w.r.b,0,0))
p=y.u
s=A.a([A.cO(!1,B.a7,(m?n:l.a)==null,n,!0,B.z,n,A.cR(),o.w,n,n,n,n,n,2,D.aCR,B.a1,!0,n,!1,s,!1,n,B.aK,n,n,n,n,n,n,30,n,1,n,n,!1,"\u2022",n,o.gb69(),n,new C.cnC(o,r),n,!1,n,n,!1,n,!0,n,B.aA,n,n,n,n,n,n,n,n,n,n,n,F.a8m,!0,B.ap,n,B.b9,n,n,n,n),B.ab],p)
if(u.length!==0)s.push(A.a_(A.a([A.b6(w.c,t,n,n,18),B.bC,A.ae(A.i(u,n,n,n,A.aE(n,n,t,n,n,n,n,n,n,n,n,13,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],p),B.x,B.l,B.q,0,n,n))
s.push(B.bu)
s.push(D.c3i)
if(x){m=l.b
m.toString
B.e.p(s,A.a([B.ab,A.i("Podes voltar a mudar a partir de "+A.aQ(m)+" "+B.wO[A.aC(m)-1]+".",n,n,n,B.dN,n,n,n)],p))}s.push(B.o2)
m=o.Q
s.push(new A.ff("Guardar",r?o.gbiD():n,m,n))
return A.cP(v,B.bz,A.bB(!0,A.d3(s,n,q,n,n,!1,B.Z,!1),n,B.X,!1),!0,n)}}
var z=a.updateTypes(["~(c)","E<~>()"])
C.cnx.prototype={
$0(){var x=this,w=x.a,v=x.b.length===0
w.z=v?null:x.c
w.y=x.c==null&&!v?"checking":null},
$S:0}
C.cny.prototype={
$0(){return this.aD2()},
aD2(){var x=0,w=A.n(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p={}
p.a=null
u=4
n=p
x=7
return A.d(C.cDm(s.b),$async$$0)
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
if(q.c==null||B.f.i5(B.f.D(q.w.a.a),A.b3("^@+",!0,!1,!1),"").toLowerCase()!==s.b){x=1
break}q.q(new C.cnw(p,q))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:2}
C.cnw.prototype={
$0(){return this.b.y=this.a.a},
$S:0}
C.cnz.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.cnA.prototype={
$0(){return this.a.y=this.b.a},
$S:0}
C.cnB.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.cnC.prototype={
$1(d){return this.b?this.a.KG():null},
$S:3};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=C.agE.prototype,"gb69","b6a",0)
w(v,"gbiD","KG",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.UQ,A.J)
x(C.Fw,A.dv)
x(C.agE,A.dk)
w(A.bL,[C.cnx,C.cny,C.cnw,C.cnz,C.cnA,C.cnB])
x(C.cnC,A.bw)})()
A.bt(b.typeUniverse,JSON.parse('{"UQ":{"bj":[]},"Fw":{"H":[],"e":[],"f":[]},"agE":{"a1":["Fw"]}}'))
var y={n:A.v("aF<zR>"),u:A.v("r<e>"),x:A.v("dn"),w:A.v("c"),q:A.v("dF"),b:A.v("@"),v:A.v("~")};(function constants(){var x=a.makeConstList
D.arB=new A.a0(20,12,20,32)
D.aCR=new A.dI(null,null,null,"Nome de utilizador",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"@",null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxD=x(["invalid","reserved","taken","too_soon"],A.v("r<c>"))
D.bP1=new A.cp("",B.R,B.k2)
D.bP4=new A.cp("Este @ n\xe3o \xe9 v\xe1lido.",B.ew,B.uT)
D.bP6=new A.cp("Est\xe1 livre. Fica s\xf3 teu.",B.AX,B.jX)
D.bPb=new A.cp("\xc9 o teu @.",B.AX,B.jX)
D.bPc=new A.cp("A verificar\u2026",B.R,B.h7)
D.bPi=new A.cp("Este @ est\xe1 reservado.",B.ew,B.ne)
D.bPj=new A.cp("N\xe3o foi poss\xedvel verificar. Tenta outra vez.",B.ew,B.uT)
D.bPo=new A.cp("J\xe1 \xe9 de outra conta.",B.ew,B.ne)
D.c3i=new A.C("3 a 30 caracteres: letras, n\xfameros, ponto e _. Sem espa\xe7os nem acentos. Podes mudar uma vez a cada 30 dias.",null,B.Ha,null,null,null,null,null,null,null,null)
D.c4K=new A.C("O teu @",null,null,null,null,null,null,null,null,null,null)
D.ceC=new C.UQ("unknown",null)})()};
(a=>{a["8APJ4DG8ugcvGJfuf451B1OrOBQ="]=a.current})($__dart_deferred_initializers__);