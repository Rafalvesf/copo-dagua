((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dmX(d){var x=B.f.jh(B.f.D(d),A.bt("^@+",!0,!1,!1),"").toLowerCase(),w=x.length
if(w<3)return"Pelo menos 3 caracteres."
if(w>30)return"No m\xe1ximo 30 caracteres."
w=A.bt("^[a-z0-9._]+$",!0,!1,!1)
if(!w.b.test(x))return"S\xf3 letras, n\xfameros, ponto e _ (sem espa\xe7os nem acentos)."
if(B.f.b9(x,".")||B.f.fv(x,"."))return"N\xe3o pode come\xe7ar nem acabar em ponto."
if(B.f.n(x,".."))return"Sem dois pontos seguidos."
return null},
cxO(d){var x=0,w=A.m(y.w),v,u,t,s
var $async$cxO=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:t=$.Q().b
t===$&&A.b()
u=y.b
s=A
x=3
return A.d(t.aT("username_status",A.U(["p_username",B.f.jh(B.f.D(d),A.bt("^@+",!0,!1,!1),"").toLowerCase()],y.w,u),u),$async$cxO)
case 3:v=s.a1(f)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$cxO,w)},
cwk(d){return C.dmb(d)},
dmb(d){var x=0,w=A.m(y.w),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cwk=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
q=$.Q().b
q===$&&A.b()
p=y.b
l=A
x=7
return A.d(q.aT("set_my_username",A.U(["p_username",B.f.jh(B.f.D(d),A.bt("^@+",!0,!1,!1),"").toLowerCase()],y.w,p),p),$async$cwk)
case 7:p=l.a1(f)
v=p
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
q=A.af(m)
if(q instanceof A.cT){s=q
for(n=0;n<4;++n){r=D.bxa[n]
q=s.a
if(A.xM(q,r,0)){q=s.c
q=q==null?null:J.d1(q)
throw A.o(new C.Th(r,A.et(q==null?"":q)))}}throw A.o(D.ceK)}else throw m
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$cwk,w)},
Th:function Th(d,e){this.a=d
this.b=e},
d9k(){return new C.EE(null)},
EE:function EE(d){this.a=d},
aeO:function aeO(d){var _=this
_.w=d
_.z=_.y=_.x=null
_.as=_.Q=!1
_.d=$
_.c=_.a=null},
chX:function chX(d,e,f){this.a=d
this.b=e
this.c=f},
chY:function chY(d,e){this.a=d
this.b=e},
chW:function chW(d,e){this.a=d
this.b=e},
chZ:function chZ(d){this.a=d},
ci_:function ci_(d,e){this.a=d
this.b=e},
ci0:function ci0(d){this.a=d},
ci1:function ci1(d,e){this.a=d
this.b=e}},D,F
J=c[1]
A=c[0]
B=c[2]
E=c[404]
C=a.updateHolder(c[12],C)
D=c[405]
F=c[406]
C.Th.prototype={$ibe:1}
C.EE.prototype={
S(){return new C.aeO(new A.aE(B.am,$.ac()))}}
C.aeO.prototype={
m(){var x=this.x
if(x!=null)x.aX(0)
x=this.w
x.T$=$.ac()
x.X$=0
this.a5()},
b38(d){var x,w,v=this,u=B.f.jh(B.f.D(d),A.bt("^@+",!0,!1,!1),"").toLowerCase()
if(u!==d)v.w.jl(0,new A.bD(u,A.uQ(B.ad,u.length),B.az))
x=v.x
if(x!=null)x.aX(0)
w=C.dmX(u)
v.p(new C.chX(v,u,w))
if(w!=null||u.length===0)return
v.x=A.dC(E.Lj,new C.chY(v,u))},
JT(){var x=0,w=A.m(y.v),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$JT=A.i(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.p(new C.chZ(s))
r=s.c.R(y.q).f
v=3
x=6
return A.d(C.cwk(s.w.a.a),$async$JT)
case 6:q=e
s.gV().ai($.cyB())
r.a3(A.cr(null,null,null,null,null,B.A,null,A.h("O teu @ agora \xe9 @"+A.p(q)+".",null,null,null,null,null,null,null),null,B.X,null,null,null,null,null,null,null,null,null,null))
n=s.c
if(n!=null)A.ap(n).ap(null)
t.push(5)
x=4
break
case 3:v=2
l=u.pop()
n=A.af(l)
if(n instanceof C.Th){p=n
s.p(new C.ci_(s,p))
if(p.a==="too_soon"){o=p.b
r.a3(A.cr(null,null,null,null,null,B.A,null,A.h(o==null?"S\xf3 podes mudar o @ uma vez a cada 30 dias.":"S\xf3 podes voltar a mudar o @ a partir de "+A.aN(o)+" "+B.wz[A.ay(o)-1]+".",null,null,null,null,null,null,null),null,B.X,null,null,null,null,null,null,null,null,null,null))}}else r.a3(B.fi)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.ci0(s))
x=t.pop()
break
case 5:return A.k(null,w)
case 1:return A.j(u.at(-1),w)}})
return A.l($async$JT,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gV().M($.cyB(),y.n),l=m.gv(m)
if(!o.as)m=(l==null?n:l.a)!=null
else m=!1
if(m){o.as=!0
m=l.a
m.toString
o.w.sbv(0,m)
o.y="mine"}m=l==null
x=!1
if(!m)if(l.a!=null){w=l.b
w=!(w==null||new A.an(Date.now(),0,!1).jb(w))
x=w}w=o.z
v=w==null
switch(!v?"format":o.y){case"format":w.toString
w=new A.cc(w,B.eu,B.uC)
break
case"checking":w=D.bOR
break
case"ok":w=D.bOJ
break
case"mine":w=D.bOQ
break
case"taken":w=D.bP2
break
case"reserved":w=D.bOX
break
case"invalid":w=D.bOH
break
case"error":w=D.bOY
break
default:w=D.bOE
break}u=w.a
t=w.b
s=!x
r=s&&!o.Q&&v&&o.y==="ok"
v=A.cz5(B.ao,0,n,D.c4I)
q=D.aqY.C(0,new A.Z(0,A.au(d,B.ba,y.x).w.r.b,0,0))
p=y.u
s=A.a([A.cP(!1,B.ab,(m?n:l.a)==null,n,!0,B.A,n,A.cQ(),o.w,n,n,n,n,n,2,D.aCk,B.a2,!0,n,!1,s,!1,n,B.aO,n,n,n,n,n,n,30,n,1,n,n,!1,"\u2022",n,o.gb37(),n,new C.ci1(o,r),n,!1,n,n,!1,n,!0,n,B.ay,n,n,n,n,n,n,n,n,n,n,n,F.a7J,!0,B.at,n,B.bb,n,n,n,n),B.aa],p)
if(u.length!==0)s.push(A.S(A.a([A.b0(w.c,t,n,n,18),B.bC,A.a5(A.h(u,n,n,n,A.aF(n,n,t,n,n,n,n,n,n,n,n,13,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],p),B.x,B.j,B.q,0,n,n))
s.push(B.bD)
s.push(D.c3e)
if(x){m=l.b
m.toString
B.e.q(s,A.a([B.aa,A.h("Podes voltar a mudar a partir de "+A.aN(m)+" "+B.wz[A.ay(m)-1]+".",n,n,n,B.dB,n,n,n)],p))}s.push(B.nV)
m=o.Q
s.push(new A.fi("Guardar",r?o.gbfn():n,m,n))
return A.cM(v,B.by,A.bA(!0,A.cX(s,n,q,n,n,!1,B.a_,!1),n,B.Y,!1),!0,n)}}
var z=a.updateTypes(["~(c)","G<~>()"])
C.chX.prototype={
$0(){var x=this,w=x.a,v=x.b.length===0
w.z=v?null:x.c
w.y=x.c==null&&!v?"checking":null},
$S:0}
C.chY.prototype={
$0(){return this.aAF()},
aAF(){var x=0,w=A.m(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$$0=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p={}
p.a=null
u=4
n=p
x=7
return A.d(C.cxO(s.b),$async$$0)
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
if(q.c==null||B.f.jh(B.f.D(q.w.a.a),A.bt("^@+",!0,!1,!1),"").toLowerCase()!==s.b){x=1
break}q.p(new C.chW(p,q))
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$0,w)},
$S:2}
C.chW.prototype={
$0(){return this.b.y=this.a.a},
$S:0}
C.chZ.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ci_.prototype={
$0(){return this.a.y=this.b.a},
$S:0}
C.ci0.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ci1.prototype={
$1(d){return this.b?this.a.JT():null},
$S:3};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=C.aeO.prototype,"gb37","b38",0)
w(v,"gbfn","JT",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Th,A.H)
x(C.EE,A.dk)
x(C.aeO,A.df)
w(A.bI,[C.chX,C.chY,C.chW,C.chZ,C.ci_,C.ci0])
x(C.ci1,A.bq)})()
A.bj(b.typeUniverse,JSON.parse('{"Th":{"be":[]},"EE":{"F":[],"e":[]},"aeO":{"a_":["EE"]}}'))
var y={n:A.u("aA<za>"),u:A.u("q<e>"),x:A.u("dh"),w:A.u("c"),q:A.u("dv"),b:A.u("@"),v:A.u("~")};(function constants(){var x=a.makeConstList
D.aqY=new A.Z(20,12,20,32)
D.aCk=new A.dW(null,null,null,"Nome de utilizador",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"@",null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxa=x(["invalid","reserved","taken","too_soon"],A.u("q<c>"))
D.bOE=new A.cc("",B.P,B.jV)
D.bOH=new A.cc("Este @ n\xe3o \xe9 v\xe1lido.",B.eu,B.uC)
D.bOJ=new A.cc("Est\xe1 livre. Fica s\xf3 teu.",B.AE,B.jP)
D.bOQ=new A.cc("\xc9 o teu @.",B.AE,B.jP)
D.bOR=new A.cc("A verificar\u2026",B.P,B.fz)
D.bOX=new A.cc("Este @ est\xe1 reservado.",B.eu,B.n3)
D.bOY=new A.cc("N\xe3o foi poss\xedvel verificar. Tenta outra vez.",B.eu,B.uC)
D.bP2=new A.cc("J\xe1 \xe9 de outra conta.",B.eu,B.n3)
D.c3e=new A.z("3 a 30 caracteres: letras, n\xfameros, ponto e _. Sem espa\xe7os nem acentos. Podes mudar uma vez a cada 30 dias.",null,B.GN,null,null,null,null,null,null,null,null)
D.c4I=new A.z("O teu @",null,null,null,null,null,null,null,null,null,null)
D.ceK=new C.Th("unknown",null)})()};
(a=>{a["DnBhfdQiAX0KYDyugADpJC8jjCM="]=a.current})($__dart_deferred_initializers__);