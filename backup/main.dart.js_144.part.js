((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
diU(d){var x=B.f.k6(B.f.L(d),A.bg("^@+",!0,!1,!1),"").toLowerCase(),w=x.length
if(w<3)return"Pelo menos 3 caracteres."
if(w>30)return"No m\xe1ximo 30 caracteres."
w=A.bg("^[a-z0-9._]+$",!0,!1,!1)
if(!w.b.test(x))return"S\xf3 letras, n\xfameros, ponto e _ (sem espa\xe7os nem acentos)."
if(B.f.be(x,".")||B.f.hL(x,"."))return"N\xe3o pode come\xe7ar nem acabar em ponto."
if(B.f.n(x,".."))return"Sem dois pontos seguidos."
return null},
ctt(d){var x=0,w=A.n(y.w),v,u,t,s
var $async$ctt=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.Z().b
t===$&&A.b()
u=y.b
s=A
x=3
return A.d(t.b9("username_status",A.Q(["p_username",B.f.k6(B.f.L(d),A.bg("^@+",!0,!1,!1),"").toLowerCase()],y.w,u),u),$async$ctt)
case 3:v=s.a1(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$ctt,w)},
cs0(d){return C.di7(d)},
di7(d){var x=0,w=A.n(y.w),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cs0=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
q=$.Z().b
q===$&&A.b()
p=y.b
l=A
x=7
return A.d(q.b9("set_my_username",A.Q(["p_username",B.f.k6(B.f.L(d),A.bg("^@+",!0,!1,!1),"").toLowerCase()],y.w,p),p),$async$cs0)
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
if(q instanceof A.dc){s=q
for(n=0;n<4;++n){r=D.bs6[n]
q=s.a
if(A.Ax(q,r,0)){q=s.c
q=q==null?null:J.cJ(q)
throw A.p(new C.SP(r,A.fO(q==null?"":q)))}}throw A.p(D.c6Y)}else throw m
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cs0,w)},
SP:function SP(d,e){this.a=d
this.b=e},
d5w(){return new C.E7(null)},
E7:function E7(d){this.a=d},
adS:function adS(d){var _=this
_.w=d
_.z=_.y=_.x=null
_.as=_.Q=!1
_.d=$
_.c=_.a=null},
ceq:function ceq(d,e,f){this.a=d
this.b=e
this.c=f},
cer:function cer(d,e){this.a=d
this.b=e},
cep:function cep(d,e){this.a=d
this.b=e},
ces:function ces(d){this.a=d},
cet:function cet(d,e){this.a=d
this.b=e},
ceu:function ceu(d){this.a=d},
cev:function cev(d,e){this.a=d
this.b=e}},D,E,F
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[11],C)
D=c[397]
E=c[398]
F=c[324]
C.SP.prototype={$ibf:1}
C.E7.prototype={
R(){return new C.adS(new A.aM(B.aj,$.ah()))}}
C.adS.prototype={
m(){var x=this.x
if(x!=null)x.aQ(0)
x=this.w
x.a_$=$.ah()
x.V$=0
this.a9()},
b1Q(d){var x,w,v=this,u=B.f.k6(B.f.L(d),A.bg("^@+",!0,!1,!1),"").toLowerCase()
if(u!==d)v.w.jU(0,new A.bR(u,A.uo(B.a8,u.length),B.aI))
x=v.x
if(x!=null)x.aQ(0)
w=C.diU(u)
v.q(new C.ceq(v,u,w))
if(w!=null||u.length===0)return
v.x=A.dd(F.Ba,new C.cer(v,u))},
Ji(){var x=0,w=A.n(y.v),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$Ji=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.q(new C.ces(s))
r=s.c.T(y.q).f
v=3
x=6
return A.d(C.cs0(s.w.a.a),$async$Ji)
case 6:q=e
s.gU().av($.cuf())
r.af(A.cP(null,null,null,null,null,B.C,null,A.i("O teu @ agora \xe9 @"+A.u(q)+".",null,null,null,null,null,null,null),null,B.a0,null,null,null,null,null,null,null,null,null,null))
n=s.c
if(n!=null)A.au(n).b_(null)
t.push(5)
x=4
break
case 3:v=2
l=u.pop()
n=A.aa(l)
if(n instanceof C.SP){p=n
s.q(new C.cet(s,p))
if(p.a==="too_soon"){o=p.b
r.af(A.cP(null,null,null,null,null,B.C,null,A.i(o==null?"S\xf3 podes mudar o @ uma vez a cada 30 dias.":"S\xf3 podes voltar a mudar o @ a partir de "+A.aU(o)+" "+B.pH[A.aD(o)-1]+".",null,null,null,null,null,null,null),null,B.a0,null,null,null,null,null,null,null,null,null,null))}}else r.af(B.hg)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new C.ceu(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Ji,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gU().M($.cuf(),y.n),l=m.gt(m)
if(!o.as)m=(l==null?n:l.a)!=null
else m=!1
if(m){o.as=!0
m=l.a
m.toString
o.w.sbN(0,m)
o.y="mine"}m=l==null
x=!1
if(!m)if(l.a!=null){w=l.b
w=!(w==null||new A.an(Date.now(),0,!1).ik(w))
x=w}w=o.z
v=w==null
switch(!v?"format":o.y){case"format":w.toString
w=new A.cv(w,B.dv,B.mK)
break
case"checking":w=D.bIw
break
case"ok":w=D.bIn
break
case"mine":w=D.bIv
break
case"taken":w=D.bIP
break
case"reserved":w=D.bII
break
case"invalid":w=D.bIl
break
case"error":w=D.bIJ
break
default:w=D.bIg
break}u=w.a
t=w.b
s=!x
r=s&&!o.Q&&v&&o.y==="ok"
v=A.cuS(B.ad,0,n,D.bZ_)
q=D.an_.B(0,new A.X(0,A.at(d,B.bb,y.x).w.r.b,0,0))
p=y.u
s=A.a([A.cD(!1,B.a9,(m?n:l.a)==null,n,!0,B.C,n,A.cI(),o.w,n,n,n,n,n,2,D.ayz,B.X,!0,n,!1,s,!1,n,B.aG,n,n,n,n,n,n,30,n,1,n,n,!1,"\u2022",n,o.gb1P(),n,new C.cev(o,r),n,!1,n,n,!1,n,!0,n,B.av,n,n,n,n,n,n,n,n,n,n,n,E.a6Y,!0,B.au,n,B.b6,n,n,n,n),B.a5],p)
if(u.length!==0)s.push(A.V(A.a([A.aJ(w.c,t,n,n,18),B.bo,A.ab(A.i(u,n,n,n,A.as(n,n,t,n,n,n,n,n,n,n,n,13,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],p),B.x,B.l,B.q,0,n,n))
s.push(B.bp)
s.push(D.bXK)
if(x){m=l.b
m.toString
B.e.A(s,A.a([B.a5,A.i("Podes voltar a mudar a partir de "+A.aU(m)+" "+B.pH[A.aD(m)-1]+".",n,n,n,B.dE,n,n,n)],p))}s.push(B.nB)
m=o.Q
s.push(new A.f7("Guardar",r?o.gbdJ():n,m,n))
return A.cG(v,B.be,A.bo(!0,A.cM(s,n,q,n,n,!1,B.Z,!1),n,B.V,!1),!0,n)}}
var z=a.updateTypes(["~(c)","H<~>()"])
C.ceq.prototype={
$0(){var x=this,w=x.a,v=x.b.length===0
w.z=v?null:x.c
w.y=x.c==null&&!v?"checking":null},
$S:0}
C.cer.prototype={
$0(){return this.azB()},
azB(){var x=0,w=A.n(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p={}
p.a=null
u=4
n=p
x=7
return A.d(C.ctt(s.b),$async$$0)
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
break}q.q(new C.cep(p,q))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:2}
C.cep.prototype={
$0(){return this.b.y=this.a.a},
$S:0}
C.ces.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.cet.prototype={
$0(){return this.a.y=this.b.a},
$S:0}
C.ceu.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.cev.prototype={
$1(d){return this.b?this.a.Ji():null},
$S:6};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=C.adS.prototype,"gb1P","b1Q",0)
w(v,"gbdJ","Ji",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.SP,A.G)
x(C.E7,A.dx)
x(C.adS,A.ds)
w(A.bI,[C.ceq,C.cer,C.cep,C.ces,C.cet,C.ceu])
x(C.cev,A.bv)})()
A.bx(b.typeUniverse,JSON.parse('{"SP":{"bf":[]},"E7":{"F":[],"e":[],"f":[]},"adS":{"a0":["E7"]}}'))
var y={n:A.v("aF<yz>"),u:A.v("q<e>"),x:A.v("d9"),w:A.v("c"),q:A.v("dC"),b:A.v("@"),v:A.v("~")};(function constants(){var x=a.makeConstList
D.an_=new A.X(20,12,20,32)
D.ayz=new A.dz(null,null,null,"Nome de utilizador",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"@",null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bs6=x(["invalid","reserved","taken","too_soon"],A.v("q<c>"))
D.bIg=new A.cv("",B.L,B.hu)
D.bIl=new A.cv("Este @ n\xe3o \xe9 v\xe1lido.",B.dv,B.mK)
D.bIn=new A.cv("Est\xe1 livre. Fica s\xf3 teu.",B.Ak,B.jJ)
D.bIv=new A.cv("\xc9 o teu @.",B.Ak,B.jJ)
D.bIw=new A.cv("A verificar\u2026",B.L,B.eo)
D.bII=new A.cv("Este @ est\xe1 reservado.",B.dv,B.jK)
D.bIJ=new A.cv("N\xe3o foi poss\xedvel verificar. Tenta outra vez.",B.dv,B.mK)
D.bIP=new A.cv("J\xe1 \xe9 de outra conta.",B.dv,B.jK)
D.bRS=new A.C(!0,B.L,null,null,null,null,13,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bXK=new A.J("3 a 30 caracteres: letras, n\xfameros, ponto e _. Sem espa\xe7os nem acentos. Podes mudar uma vez a cada 30 dias.",null,D.bRS,null,null,null,null,null,null,null,null)
D.bZ_=new A.J("O teu @",null,null,null,null,null,null,null,null,null,null)
D.c6Y=new C.SP("unknown",null)})()};
(a=>{a["F+JZ9RWW6myjsRKyq5X/kvqm9to="]=a.current})($__dart_deferred_initializers__);