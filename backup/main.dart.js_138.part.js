((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,C={
dy1(d){var x=B.f.i4(B.f.D(d),A.b5("^@+",!0,!1,!1),"").toLowerCase(),w=x.length
if(w<3)return"Pelo menos 3 caracteres."
if(w>30)return"No m\xe1ximo 30 caracteres."
w=A.b5("^[a-z0-9._]+$",!0,!1,!1)
if(!w.b.test(x))return"S\xf3 letras, n\xfameros, ponto e _ (sem espa\xe7os nem acentos)."
if(B.f.b3(x,".")||B.f.fl(x,"."))return"N\xe3o pode come\xe7ar nem acabar em ponto."
if(B.f.n(x,".."))return"Sem dois pontos seguidos."
return null},
cFB(d){var x=0,w=A.n(y.w),v,u,t,s
var $async$cFB=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.R().b
t===$&&A.b()
u=y.b
s=A
x=3
return A.d(t.b1("username_status",A.Q(["p_username",B.f.i4(B.f.D(d),A.b5("^@+",!0,!1,!1),"").toLowerCase()],y.w,u),u),$async$cFB)
case 3:v=s.a2(f)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$cFB,w)},
cE6(d){return C.dxe(d)},
dxe(d){var x=0,w=A.n(y.w),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$cE6=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
q=$.R().b
q===$&&A.b()
p=y.b
l=A
x=7
return A.d(q.b1("set_my_username",A.Q(["p_username",B.f.i4(B.f.D(d),A.b5("^@+",!0,!1,!1),"").toLowerCase()],y.w,p),p),$async$cE6)
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
if(q instanceof A.cW){s=q
for(n=0;n<4;++n){r=D.byf[n]
q=s.a
if(A.vO(q,r,0)){q=s.c
q=q==null?null:J.cJ(q)
throw A.p(new C.V_(r,A.eK(q==null?"":q)))}}throw A.p(D.cg_)}else throw m
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cE6,w)},
V_:function V_(d,e){this.a=d
this.b=e},
dk7(){return new C.FC(null)},
FC:function FC(d){this.a=d},
agP:function agP(d){var _=this
_.w=d
_.z=_.y=_.x=null
_.as=_.Q=!1
_.d=$
_.c=_.a=null},
cpw:function cpw(d,e,f){this.a=d
this.b=e
this.c=f},
cpx:function cpx(d,e){this.a=d
this.b=e},
cpv:function cpv(d,e){this.a=d
this.b=e},
cpy:function cpy(d){this.a=d},
cpz:function cpz(d,e){this.a=d
this.b=e},
cpA:function cpA(d){this.a=d},
cpB:function cpB(d,e){this.a=d
this.b=e}},D,F
J=c[1]
A=c[0]
B=c[2]
E=c[380]
C=a.updateHolder(c[12],C)
D=c[381]
F=c[382]
C.V_.prototype={$ibj:1}
C.FC.prototype={
S(){return new C.agP(new A.aH(B.am,$.ae()))}}
C.agP.prototype={
m(){var x=this.x
if(x!=null)x.aV(0)
x=this.w
x.a0$=$.ae()
x.W$=0
this.aa()},
b6A(d){var x,w,v=this,u=B.f.i4(B.f.D(d),A.b5("^@+",!0,!1,!1),"").toLowerCase()
if(u!==d)v.w.jF(0,new A.bG(u,A.vo(B.ad,u.length),B.aA))
x=v.x
if(x!=null)x.aV(0)
w=C.dy1(u)
v.q(new C.cpw(v,u,w))
if(w!=null||u.length===0)return
v.x=A.dt(E.LY,new C.cpx(v,u))},
KQ(){var x=0,w=A.n(y.v),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l
var $async$KQ=A.j(function(d,e){if(d===1){u.push(e)
x=v}for(;;)switch(x){case 0:s.q(new C.cpy(s))
r=s.c.R(y.q).f
v=3
x=6
return A.d(C.cE6(s.w.a.a),$async$KQ)
case 6:q=e
s.gU().aj($.cGp())
r.a5(A.cA(null,null,null,null,null,B.A,null,A.i("O teu @ agora \xe9 @"+A.q(q)+".",null,null,null,null,null,null,null,null),null,B.X,null,null,null,null,null,null,null,null,null,null))
n=s.c
if(n!=null)A.ar(n).ar(null)
t.push(5)
x=4
break
case 3:v=2
l=u.pop()
n=A.a9(l)
if(n instanceof C.V_){p=n
s.q(new C.cpz(s,p))
if(p.a==="too_soon"){o=p.b
r.a5(A.cA(null,null,null,null,null,B.A,null,A.i(o==null?"S\xf3 podes mudar o @ uma vez a cada 30 dias.":"S\xf3 podes voltar a mudar o @ a partir de "+A.aQ(o)+" "+B.wQ[A.aA(o)-1]+".",null,null,null,null,null,null,null,null),null,B.X,null,null,null,null,null,null,null,null,null,null))}}else r.a5(B.fn)
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new C.cpA(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$KQ,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gU().L($.cGp(),y.n),l=m.gv(m)
if(!o.as)m=(l==null?n:l.a)!=null
else m=!1
if(m){o.as=!0
m=l.a
m.toString
o.w.sbA(0,m)
o.y="mine"}m=l==null
x=!1
if(!m)if(l.a!=null){w=l.b
w=!(w==null||new A.ai(Date.now(),0,!1).hE(w))
x=w}w=o.z
v=w==null
switch(!v?"format":o.y){case"format":w.toString
w=new A.cg(w,B.ez,B.uT)
break
case"checking":w=D.bQ5
break
case"ok":w=D.bPY
break
case"mine":w=D.bQ4
break
case"taken":w=D.bQh
break
case"reserved":w=D.bQc
break
case"invalid":w=D.bPW
break
case"error":w=D.bQd
break
default:w=D.bPT
break}u=w.a
t=w.b
s=!x
r=s&&!o.Q&&v&&o.y==="ok"
v=A.cGZ(B.ao,0,n,D.c5T)
q=D.as4.B(0,new A.a0(0,A.av(d,B.bb,y.x).w.r.b,0,0))
p=y.u
s=A.a([A.cR(!1,B.aa,(m?n:l.a)==null,n,!0,B.A,n,A.cT(),o.w,n,n,n,n,n,2,D.aDq,B.a1,!0,n,!1,s,!1,n,B.aN,n,n,n,n,n,n,30,n,1,n,n,!1,"\u2022",n,o.gb6z(),n,new C.cpB(o,r),n,!1,n,n,!1,n,!0,n,B.ay,n,n,n,n,n,n,n,n,n,n,n,F.a8z,!0,B.as,n,B.bc,n,n,n,n),B.ac],p)
if(u.length!==0)s.push(A.S(A.a([A.b7(w.c,t,n,n,18),B.bt,A.a7(A.i(u,n,n,n,n,A.aF(n,n,t,n,n,n,n,n,n,n,n,13,n,n,B.F,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],p),B.x,B.k,B.p,0,n,n))
s.push(B.bF)
s.push(D.c4p)
if(x){m=l.b
m.toString
B.e.p(s,A.a([B.ac,A.i("Podes voltar a mudar a partir de "+A.aQ(m)+" "+B.wQ[A.aA(m)-1]+".",n,n,n,n,B.dQ,n,n,n)],p))}s.push(B.oa)
m=o.Q
s.push(new A.fu("Guardar",r?o.gbjg():n,m,n))
return A.cP(v,B.bC,A.bE(!0,A.d5(s,n,q,n,n,!1,B.a2,!1),n,B.Z,!1),!0,n)}}
var z=a.updateTypes(["~(c)","G<~>()"])
C.cpw.prototype={
$0(){var x=this,w=x.a,v=x.b.length===0
w.z=v?null:x.c
w.y=x.c==null&&!v?"checking":null},
$S:0}
C.cpx.prototype={
$0(){return this.aDm()},
aDm(){var x=0,w=A.n(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:p={}
p.a=null
u=4
n=p
x=7
return A.d(C.cFB(s.b),$async$$0)
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
if(q.c==null||B.f.i4(B.f.D(q.w.a.a),A.b5("^@+",!0,!1,!1),"").toLowerCase()!==s.b){x=1
break}q.q(new C.cpv(p,q))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:2}
C.cpv.prototype={
$0(){return this.b.y=this.a.a},
$S:0}
C.cpy.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.cpz.prototype={
$0(){return this.a.y=this.b.a},
$S:0}
C.cpA.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.cpB.prototype={
$1(d){return this.b?this.a.KQ():null},
$S:3};(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=C.agP.prototype,"gb6z","b6A",0)
w(v,"gbjg","KQ",1)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.V_,A.K)
x(C.FC,A.dw)
x(C.agP,A.dq)
w(A.bS,[C.cpw,C.cpx,C.cpv,C.cpy,C.cpz,C.cpA])
x(C.cpB,A.bx)})()
A.bu(b.typeUniverse,JSON.parse('{"V_":{"bj":[]},"FC":{"I":[],"e":[],"f":[]},"agP":{"a1":["FC"]}}'))
var y={n:A.w("aB<zW>"),u:A.w("r<e>"),x:A.w("dy"),w:A.w("c"),q:A.w("dJ"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
D.as4=new A.a0(20,12,20,32)
D.aDq=new A.e3(null,null,null,"Nome de utilizador",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,"@",null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.byf=x(["invalid","reserved","taken","too_soon"],A.w("r<c>"))
D.bPT=new A.cg("",B.P,B.k9)
D.bPW=new A.cg("Este @ n\xe3o \xe9 v\xe1lido.",B.ez,B.uT)
D.bPY=new A.cg("Est\xe1 livre. Fica s\xf3 teu.",B.AX,B.k3)
D.bQ4=new A.cg("\xc9 o teu @.",B.AX,B.k3)
D.bQ5=new A.cg("A verificar\u2026",B.P,B.fG)
D.bQc=new A.cg("Este @ est\xe1 reservado.",B.ez,B.ni)
D.bQd=new A.cg("N\xe3o foi poss\xedvel verificar. Tenta outra vez.",B.ez,B.uT)
D.bQh=new A.cg("J\xe1 \xe9 de outra conta.",B.ez,B.ni)
D.c4p=new A.A("3 a 30 caracteres: letras, n\xfameros, ponto e _. Sem espa\xe7os nem acentos. Podes mudar uma vez a cada 30 dias.",null,B.Hj,null,null,null,null,null,null,null,null)
D.c5T=new A.A("O teu @",null,null,null,null,null,null,null,null,null,null)
D.cg_=new C.V_("unknown",null)})()};
(a=>{a["Bbh0EOsPC5UbYOQ2FV1xIOaCQ2g="]=a.current})($__dart_deferred_initializers__);