((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dw9(d){var x=B.f.i1(B.f.D(d),A.b4("^@+",!0,!1,!1),"").toLowerCase(),w=x.length
if(w<3)return"Pelo menos 3 caracteres."
if(w>30)return"No m\xe1ximo 30 caracteres."
w=A.b4("^[a-z0-9._]+$",!0,!1,!1)
if(!w.b.test(x))return"S\xf3 letras, n\xfameros, ponto e _ (sem espa\xe7os nem acentos)."
if(B.f.b3(x,".")||B.f.fl(x,"."))return"N\xe3o pode come\xe7ar nem acabar em ponto."
if(B.f.n(x,".."))return"Sem dois pontos seguidos."
return null},
cE1(d){var x=0,w=A.n(y.w),v,u,t,s
var $async$cE1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.R().b
t===$&&A.b()
u=y.b
s=A
x=3
return A.d(t.b2("username_status",A.Q(["p_username",B.f.i1(B.f.D(d),A.b4("^@+",!0,!1,!1),"").toLowerCase()],y.w,u),u),$async$cE1)
case 3:v=s.a2(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cE1,w)},
cCy(d){return C.dvn(d)},
dvn(d){var x=0,w=A.n(y.w),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cCy=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
q=$.R().b
q===$&&A.b()
p=y.b
l=A
x=7
return A.d(q.b2("set_my_username",A.Q(["p_username",B.f.i1(B.f.D(d),A.b4("^@+",!0,!1,!1),"").toLowerCase()],y.w,p),p),$async$cCy)
case 7:p=l.a2(f)
v=p
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
q=A.a7(m)
if(q instanceof A.cV){s=q
for(n=0;n<4;++n){r=D.by_[n]
q=s.a
if(A.vM(q,r,0)){q=s.c
q=q==null?null:J.cL(q)
throw A.o(new C.UV(r,A.eN(q==null?"":q)))}}throw A.o(D.cfd)}else throw m
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cCy,w)},
UV:function UV(d,e){this.a=d
this.b=e},
dhy(){return new C.Ft(null)},
Ft:function Ft(d){this.a=d},
agB:function agB(d){var _=this
_.w=d
_.z=_.y=_.x=null
_.as=_.Q=!1
_.d=$
_.c=_.a=null},
coc:function coc(d,e,f){this.a=d
this.b=e
this.c=f},
cod:function cod(d,e){this.a=d
this.b=e},
cob:function cob(d,e){this.a=d
this.b=e},
coe:function coe(d){this.a=d},
cof:function cof(d,e){this.a=d
this.b=e},
cog:function cog(d){this.a=d},
coh:function coh(d,e){this.a=d
this.b=e}},D,F
J=c[1]
A=c[0]
B=c[2]
E=c[394]
C=a.updateHolder(c[12],C)
D=c[395]
F=c[396]
C.UV.prototype={$ibj:1}
C.Ft.prototype={
P(){return new C.agB(new A.aG(B.al,$.ad()))}}
C.agB.prototype={
m(){var x=this.x
if(x!=null)x.aV(0)
x=this.w
x.a0$=$.ad()
x.V$=0
this.a8()},
b64(d){var x,w,v=this,u=B.f.i1(B.f.D(d),A.b4("^@+",!0,!1,!1),"").toLowerCase()
if(u!==d)v.w.jD(0,new A.bE(u,A.vl(B.ad,u.length),B.av))
x=v.x
if(x!=null)x.aV(0)
w=C.dw9(u)
v.q(new C.coc(v,u,w))
if(w!=null||u.length===0)return
v.x=A.dv(E.LL,new C.cod(v,u))},
KL(){var x=0,w=A.n(y.v),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$KL=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.q(new C.coe(s))
r=s.c.R(y.q).f
v=3
x=6
return A.d(C.cCy(s.w.a.a),$async$KL)
case 6:q=e
s.gU().al($.cEQ())
r.a7(A.cB(null,null,null,null,null,B.z,null,A.i("O teu @ agora \xe9 @"+A.q(q)+".",null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
n=s.c
if(n!=null)A.ar(n).aC(null)
t.push(5)
x=4
break
case 3:v=2
l=u.pop()
n=A.a7(l)
if(n instanceof C.UV){p=n
s.q(new C.cof(s,p))
if(p.a==="too_soon"){o=p.b
r.a7(A.cB(null,null,null,null,null,B.z,null,A.i(o==null?"S\xf3 podes mudar o @ uma vez a cada 30 dias.":"S\xf3 podes voltar a mudar o @ a partir de "+A.aR(o)+" "+B.wS[A.aB(o)-1]+".",null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}}else r.a7(B.fk)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new C.cog(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KL,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gU().L($.cEQ(),y.n),l=m.gv(m)
if(!o.as)m=(l==null?n:l.a)!=null
else m=!1
if(m){o.as=!0
m=l.a
m.toString
o.w.sbz(0,m)
o.y="mine"}m=l==null
x=!1
if(!m)if(l.a!=null){w=l.b
w=!(w==null||new A.ah(Date.now(),0,!1).hX(w))
x=w}w=o.z
v=w==null
switch(!v?"format":o.y){case"format":w.toString
w=new A.cu(w,B.ew,B.uW)
break
case"checking":w=D.bPE
break
case"ok":w=D.bPy
break
case"mine":w=D.bPD
break
case"taken":w=D.bPP
break
case"reserved":w=D.bPJ
break
case"invalid":w=D.bPw
break
case"error":w=D.bPK
break
default:w=D.bPt
break}u=w.a
t=w.b
s=!x
r=s&&!o.Q&&v&&o.y==="ok"
v=A.cFo(B.ap,0,n,D.c5g)
q=D.arP.B(0,new A.a0(0,A.au(d,B.bb,y.x).w.r.b,0,0))
p=y.u
s=A.a([A.cR(!1,B.a7,(m?n:l.a)==null,n,!0,B.z,n,A.cS(),o.w,n,n,n,n,n,2,D.aD9,B.a2,!0,n,!1,s,!1,n,B.aM,n,n,n,n,n,n,30,n,1,n,n,!1,"\u2022",n,o.gb63(),n,new C.coh(o,r),n,!1,n,n,!1,n,!0,n,B.aB,n,n,n,n,n,n,n,n,n,n,n,F.a8k,!0,B.at,n,B.b9,n,n,n,n),B.a8],p)
if(u.length!==0)s.push(A.Y(A.a([A.b6(w.c,t,n,n,18),B.bp,A.a9(A.i(u,n,n,n,A.aH(n,n,t,n,n,n,n,n,n,n,n,13,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],p),B.x,B.l,B.q,0,n,n))
s.push(B.bE)
s.push(D.c3T)
if(x){m=l.b
m.toString
B.e.p(s,A.a([B.a8,A.i("Podes voltar a mudar a partir de "+A.aR(m)+" "+B.wS[A.aB(m)-1]+".",n,n,n,B.dE,n,n,n)],p))}s.push(B.o3)
m=o.Q
s.push(new A.fr("Guardar",r?o.gbiA():n,m,n))
return A.cP(v,B.bA,A.bA(!0,A.d2(s,n,q,n,n,!1,B.a0,!1),n,B.Z,!1),!0,n)}}
var z=a.updateTypes(["~(c)","E<~>()"])
C.coc.prototype={
$0(){var x=this,w=x.a,v=x.b.length===0
w.z=v?null:x.c
w.y=x.c==null&&!v?"checking":null},
$S:0}
C.cod.prototype={
$0(){return this.aD_()},
aD_(){var x=0,w=A.n(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p={}
p.a=null
u=4
n=p
x=7
return A.d(C.cE1(s.b),$async$$0)
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
if(q.c==null||B.f.i1(B.f.D(q.w.a.a),A.b4("^@+",!0,!1,!1),"").toLowerCase()!==s.b){x=1
break}q.q(new C.cob(p,q))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:2}
C.cob.prototype={
$0(){return this.b.y=this.a.a},
$S:0}
C.coe.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.cof.prototype={
$0(){return this.a.y=this.b.a},
$S:0}
C.cog.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.coh.prototype={
$1(d){return this.b?this.a.KL():null},
$S:3};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=C.agB.prototype,"gb63","b64",0)
w(v,"gbiA","KL",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.UV,A.J)
x(C.Ft,A.ds)
x(C.agB,A.di)
w(A.bN,[C.coc,C.cod,C.cob,C.coe,C.cof,C.cog])
x(C.coh,A.bv)})()
A.bt(b.typeUniverse,JSON.parse('{"UV":{"bj":[]},"Ft":{"I":[],"e":[],"f":[]},"agB":{"a1":["Ft"]}}'))
var y={n:A.w("aE<zR>"),u:A.w("r<e>"),x:A.w("dk"),w:A.w("c"),q:A.w("dF"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
D.arP=new A.a0(20,12,20,32)
D.aD9=new A.e4(null,null,null,"Nome de utilizador",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"@",null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.by_=x(["invalid","reserved","taken","too_soon"],A.w("r<c>"))
D.bPt=new A.cu("",B.Q,B.k2)
D.bPw=new A.cu("Este @ n\xe3o \xe9 v\xe1lido.",B.ew,B.uW)
D.bPy=new A.cu("Est\xe1 livre. Fica s\xf3 teu.",B.AX,B.jX)
D.bPD=new A.cu("\xc9 o teu @.",B.AX,B.jX)
D.bPE=new A.cu("A verificar\u2026",B.Q,B.fD)
D.bPJ=new A.cu("Este @ est\xe1 reservado.",B.ew,B.nb)
D.bPK=new A.cu("N\xe3o foi poss\xedvel verificar. Tenta outra vez.",B.ew,B.uW)
D.bPP=new A.cu("J\xe1 \xe9 de outra conta.",B.ew,B.nb)
D.c3T=new A.B("3 a 30 caracteres: letras, n\xfameros, ponto e _. Sem espa\xe7os nem acentos. Podes mudar uma vez a cada 30 dias.",null,B.Hb,null,null,null,null,null,null,null,null)
D.c5g=new A.B("O teu @",null,null,null,null,null,null,null,null,null,null)
D.cfd=new C.UV("unknown",null)})()};
(a=>{a["AlMFZ0DxpPQbYpSsgwTfm5FLGP8="]=a.current})($__dart_deferred_initializers__);