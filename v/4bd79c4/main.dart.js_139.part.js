((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dvY(d){var x=B.f.i3(B.f.D(d),A.b5("^@+",!0,!1,!1),"").toLowerCase(),w=x.length
if(w<3)return"Pelo menos 3 caracteres."
if(w>30)return"No m\xe1ximo 30 caracteres."
w=A.b5("^[a-z0-9._]+$",!0,!1,!1)
if(!w.b.test(x))return"S\xf3 letras, n\xfameros, ponto e _ (sem espa\xe7os nem acentos)."
if(B.f.b3(x,".")||B.f.fl(x,"."))return"N\xe3o pode come\xe7ar nem acabar em ponto."
if(B.f.n(x,".."))return"Sem dois pontos seguidos."
return null},
cDQ(d){var x=0,w=A.n(y.w),v,u,t,s
var $async$cDQ=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.R().b
t===$&&A.b()
u=y.b
s=A
x=3
return A.d(t.b2("username_status",A.Q(["p_username",B.f.i3(B.f.D(d),A.b5("^@+",!0,!1,!1),"").toLowerCase()],y.w,u),u),$async$cDQ)
case 3:v=s.a2(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cDQ,w)},
cCm(d){return C.dvb(d)},
dvb(d){var x=0,w=A.n(y.w),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cCm=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
q=$.R().b
q===$&&A.b()
p=y.b
l=A
x=7
return A.d(q.b2("set_my_username",A.Q(["p_username",B.f.i3(B.f.D(d),A.b5("^@+",!0,!1,!1),"").toLowerCase()],y.w,p),p),$async$cCm)
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
for(n=0;n<4;++n){r=D.by0[n]
q=s.a
if(A.vN(q,r,0)){q=s.c
q=q==null?null:J.cL(q)
throw A.p(new C.UT(r,A.eM(q==null?"":q)))}}throw A.p(D.cf9)}else throw m
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cCm,w)},
UT:function UT(d,e){this.a=d
this.b=e},
di7(){return new C.Fs(null)},
Fs:function Fs(d){this.a=d},
agy:function agy(d){var _=this
_.w=d
_.z=_.y=_.x=null
_.as=_.Q=!1
_.d=$
_.c=_.a=null},
co_:function co_(d,e,f){this.a=d
this.b=e
this.c=f},
co0:function co0(d,e){this.a=d
this.b=e},
cnZ:function cnZ(d,e){this.a=d
this.b=e},
co1:function co1(d){this.a=d},
co2:function co2(d,e){this.a=d
this.b=e},
co3:function co3(d){this.a=d},
co4:function co4(d,e){this.a=d
this.b=e}},D,F
J=c[1]
A=c[0]
B=c[2]
E=c[396]
C=a.updateHolder(c[12],C)
D=c[397]
F=c[398]
C.UT.prototype={$ibj:1}
C.Fs.prototype={
R(){return new C.agy(new A.aG(B.al,$.ae()))}}
C.agy.prototype={
m(){var x=this.x
if(x!=null)x.aV(0)
x=this.w
x.a0$=$.ae()
x.V$=0
this.a8()},
b66(d){var x,w,v=this,u=B.f.i3(B.f.D(d),A.b5("^@+",!0,!1,!1),"").toLowerCase()
if(u!==d)v.w.jF(0,new A.bE(u,A.vm(B.ad,u.length),B.av))
x=v.x
if(x!=null)x.aV(0)
w=C.dvY(u)
v.q(new C.co_(v,u,w))
if(w!=null||u.length===0)return
v.x=A.dv(E.LM,new C.co0(v,u))},
KK(){var x=0,w=A.n(y.v),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$KK=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.q(new C.co1(s))
r=s.c.S(y.q).f
v=3
x=6
return A.d(C.cCm(s.w.a.a),$async$KK)
case 6:q=e
s.gU().al($.cEE())
r.a7(A.cB(null,null,null,null,null,B.z,null,A.i("O teu @ agora \xe9 @"+A.q(q)+".",null,null,null,null,null,null,null),null,B.X,null,null,null,null,null,null,null,null,null,null))
n=s.c
if(n!=null)A.ar(n).aD(null)
t.push(5)
x=4
break
case 3:v=2
l=u.pop()
n=A.a7(l)
if(n instanceof C.UT){p=n
s.q(new C.co2(s,p))
if(p.a==="too_soon"){o=p.b
r.a7(A.cB(null,null,null,null,null,B.z,null,A.i(o==null?"S\xf3 podes mudar o @ uma vez a cada 30 dias.":"S\xf3 podes voltar a mudar o @ a partir de "+A.aR(o)+" "+B.wS[A.aB(o)-1]+".",null,null,null,null,null,null,null),null,B.X,null,null,null,null,null,null,null,null,null,null))}}else r.a7(B.fj)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new C.co3(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KK,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gU().L($.cEE(),y.n),l=m.gv(m)
if(!o.as)m=(l==null?n:l.a)!=null
else m=!1
if(m){o.as=!0
m=l.a
m.toString
o.w.sbz(0,m)
o.y="mine"}m=l==null
x=!1
if(!m)if(l.a!=null){w=l.b
w=!(w==null||new A.ah(Date.now(),0,!1).hY(w))
x=w}w=o.z
v=w==null
switch(!v?"format":o.y){case"format":w.toString
w=new A.cv(w,B.ew,B.uV)
break
case"checking":w=D.bPB
break
case"ok":w=D.bPv
break
case"mine":w=D.bPA
break
case"taken":w=D.bPM
break
case"reserved":w=D.bPG
break
case"invalid":w=D.bPt
break
case"error":w=D.bPH
break
default:w=D.bPq
break}u=w.a
t=w.b
s=!x
r=s&&!o.Q&&v&&o.y==="ok"
v=A.cFc(B.am,0,n,D.c5e)
q=D.arL.B(0,new A.a0(0,A.au(d,B.bb,y.x).w.r.b,0,0))
p=y.u
s=A.a([A.cR(!1,B.a7,(m?n:l.a)==null,n,!0,B.z,n,A.cS(),o.w,n,n,n,n,n,2,D.aDa,B.a2,!0,n,!1,s,!1,n,B.aM,n,n,n,n,n,n,30,n,1,n,n,!1,"\u2022",n,o.gb65(),n,new C.co4(o,r),n,!1,n,n,!1,n,!0,n,B.az,n,n,n,n,n,n,n,n,n,n,n,F.a8f,!0,B.at,n,B.b9,n,n,n,n),B.a8],p)
if(u.length!==0)s.push(A.Y(A.a([A.b9(w.c,t,n,n,18),B.bC,A.a9(A.i(u,n,n,n,A.aH(n,n,t,n,n,n,n,n,n,n,n,13,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],p),B.x,B.l,B.q,0,n,n))
s.push(B.bD)
s.push(D.c3R)
if(x){m=l.b
m.toString
B.e.p(s,A.a([B.a8,A.i("Podes voltar a mudar a partir de "+A.aR(m)+" "+B.wS[A.aB(m)-1]+".",n,n,n,B.dF,n,n,n)],p))}s.push(B.o4)
m=o.Q
s.push(new A.fr("Guardar",r?o.gbiC():n,m,n))
return A.cP(v,B.by,A.bB(!0,A.d2(s,n,q,n,n,!1,B.a0,!1),n,B.Z,!1),!0,n)}}
var z=a.updateTypes(["~(c)","E<~>()"])
C.co_.prototype={
$0(){var x=this,w=x.a,v=x.b.length===0
w.z=v?null:x.c
w.y=x.c==null&&!v?"checking":null},
$S:0}
C.co0.prototype={
$0(){return this.aD0()},
aD0(){var x=0,w=A.n(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p={}
p.a=null
u=4
n=p
x=7
return A.d(C.cDQ(s.b),$async$$0)
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
if(q.c==null||B.f.i3(B.f.D(q.w.a.a),A.b5("^@+",!0,!1,!1),"").toLowerCase()!==s.b){x=1
break}q.q(new C.cnZ(p,q))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:2}
C.cnZ.prototype={
$0(){return this.b.y=this.a.a},
$S:0}
C.co1.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.co2.prototype={
$0(){return this.a.y=this.b.a},
$S:0}
C.co3.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.co4.prototype={
$1(d){return this.b?this.a.KK():null},
$S:3};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=C.agy.prototype,"gb65","b66",0)
w(v,"gbiC","KK",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.UT,A.J)
x(C.Fs,A.ds)
x(C.agy,A.di)
w(A.bM,[C.co_,C.co0,C.cnZ,C.co1,C.co2,C.co3])
x(C.co4,A.bv)})()
A.bt(b.typeUniverse,JSON.parse('{"UT":{"bj":[]},"Fs":{"I":[],"e":[],"f":[]},"agy":{"a1":["Fs"]}}'))
var y={n:A.w("aE<zR>"),u:A.w("r<e>"),x:A.w("dk"),w:A.w("c"),q:A.w("dF"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
D.arL=new A.a0(20,12,20,32)
D.aDa=new A.e4(null,null,null,"Nome de utilizador",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"@",null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.by0=x(["invalid","reserved","taken","too_soon"],A.w("r<c>"))
D.bPq=new A.cv("",B.P,B.k2)
D.bPt=new A.cv("Este @ n\xe3o \xe9 v\xe1lido.",B.ew,B.uV)
D.bPv=new A.cv("Est\xe1 livre. Fica s\xf3 teu.",B.AY,B.jX)
D.bPA=new A.cv("\xc9 o teu @.",B.AY,B.jX)
D.bPB=new A.cv("A verificar\u2026",B.P,B.fC)
D.bPG=new A.cv("Este @ est\xe1 reservado.",B.ew,B.nd)
D.bPH=new A.cv("N\xe3o foi poss\xedvel verificar. Tenta outra vez.",B.ew,B.uV)
D.bPM=new A.cv("J\xe1 \xe9 de outra conta.",B.ew,B.nd)
D.c3R=new A.C("3 a 30 caracteres: letras, n\xfameros, ponto e _. Sem espa\xe7os nem acentos. Podes mudar uma vez a cada 30 dias.",null,B.He,null,null,null,null,null,null,null,null)
D.c5e=new A.C("O teu @",null,null,null,null,null,null,null,null,null,null)
D.cf9=new C.UT("unknown",null)})()};
(a=>{a["QqEYZfH595wD4d4QTT5SmGaY/yY="]=a.current})($__dart_deferred_initializers__);