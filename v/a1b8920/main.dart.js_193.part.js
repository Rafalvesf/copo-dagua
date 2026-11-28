((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,E,A={
dut(d){return new A.F4(d,null)},
F4:function F4(d,e){this.d=d
this.a=e},
aKj:function aKj(){var _=this
_.x=_.w=null
_.y=!1
_.d=$
_.c=_.a=null},
cgG:function cgG(d){this.a=d},
cgy:function cgy(d){this.a=d},
cgz:function cgz(d,e){this.a=d
this.b=e},
cgA:function cgA(d,e){this.a=d
this.b=e},
cgB:function cgB(d){this.a=d},
cgC:function cgC(d){this.a=d},
cgD:function cgD(d){this.a=d},
cgE:function cgE(d,e){this.a=d
this.b=e},
cgF:function cgF(d,e){this.a=d
this.b=e}},F
B=c[0]
C=c[2]
D=c[190]
E=c[182]
A=a.updateHolder(c[17],A)
F=c[333]
A.F4.prototype={
R(){return new A.aKj()}}
A.aKj.prototype={
ac(){this.ap()
$.aA.k4$.push(new A.cgG(this))},
Jq(){var x=0,w=B.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Jq=B.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:B.tf("partner_invite_open",s.a.d.toUpperCase())
x=s.gS().a1(0,$.b8(),y.e).a!==C.iy?3:4
break
case 3:x=5
return B.d(B.aVj(s.a.d),$async$Jq)
case 5:x=1
break
case 4:s.p(new A.cgy(s))
u=7
x=10
return B.d(B.al3(s.a.d),$async$Jq)
case 10:r=e
if(s.c==null){x=1
break}s.p(new A.cgz(s,r))
u=2
x=9
break
case 7:u=6
n=t.pop()
o=B.a9(n)
if(o instanceof B.a5X){q=o
if(s.c==null){x=1
break}s.p(new A.cgA(s,q))}else throw n
x=9
break
case 6:x=2
break
case 9:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Jq,w)},
ganz(){var x=this.gS().a1(0,$.b8(),y.e).b
switch(x==null?null:x.e){case C.eq:x="/home"
break
case C.dQ:x="/partner-home"
break
default:x="/eventos"
break}return x},
u(d){var x,w,v,u,t=this,s=null,r="Continuar",q=t.gS().G($.b8(),y.e),p=t.w
if(q.a!==C.iy){x=B.a([new B.fX("Criar conta",new A.cgB(d),!1,s),B.cx(D.II,s,s,new A.cgC(d),s,s)],y.l)
x.push(B.cx(F.aaQ,s,s,new A.cgD(d),s,s))
w=B.tJ(x,s,s,"Organiza o teu evento na \xc0 Nossa!: or\xe7amento, convidados, contratos e pagamentos seguros num s\xf3 s\xedtio. Cria conta (ou entra) e o convite fica ligado a ti. Contas novas t\xeam 50 % de desconto na taxa de servi\xe7o da primeira transa\xe7\xe3o.",C.G9,"Foste convidado para a \xc0 Nossa!")}else{if(!t.y)x=p==null&&t.x==null
else x=!0
if(x)w=C.kk
else{x=t.x
if(x!=null)w=B.tJ(B.a([new B.fX(r,new A.cgE(t,d),!1,s)],y.l),s,s,x,C.oo,"N\xe3o deu para abrir o convite")
else{x=p.c
v=p.b
u=x?"Convite de "+v:"J\xe1 est\xe1s ligado a "+v
if(!p.d)x=x?v+" convidou-te para a \xc0 Nossa!. Tens 50 % de desconto na taxa de servi\xe7o da tua primeira transa\xe7\xe3o.":"Este convite j\xe1 n\xe3o conta para ti, mas podes usar a app normalmente."
else x=x?v+" convidou-te para a \xc0 Nossa!. Faz as reservas e os pagamentos com eles pela app: fica tudo com contrato, recibo e pagamento protegido.":"J\xe1 tinhas falado com "+v+" pela app \u2014 continua tudo como estava."
w=B.tJ(B.a([new B.fX(r,new A.cgF(t,d),!1,s)],y.l),s,s,x,C.a1a,u)}}}return B.cQ(s,C.bx,B.bD(!0,new B.T(C.hw,B.bL(w,s,s),s),s,C.Z,!0),!0,s)}}
var z=a.updateTypes([])
A.cgG.prototype={
$1(d){return this.a.Jq()},
$S:5}
A.cgy.prototype={
$0(){return this.a.y=!0},
$S:0}
A.cgz.prototype={
$0(){var x=this.a
x.y=!1
x.w=this.b},
$S:0}
A.cgA.prototype={
$0(){var x=this.a
x.y=!1
x.x=this.b.geT(0)},
$S:0}
A.cgB.prototype={
$0(){return B.ae(this.a).al("/comecar",null,y.a)},
$S:0}
A.cgC.prototype={
$0(){return B.ae(this.a).al("/login",null,y.a)},
$S:0}
A.cgD.prototype={
$0(){return E.a_o(this.a,null)},
$S:0}
A.cgE.prototype={
$0(){var x=this.a.ganz()
return B.ae(this.b).bQ(0,x,null)},
$S:0}
A.cgF.prototype={
$0(){var x=this.a.ganz()
return B.ae(this.b).bQ(0,x,null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.F4,B.dA)
x(A.aKj,B.dv)
x(A.cgG,B.bw)
w(B.bO,[A.cgy,A.cgz,A.cgA,A.cgB,A.cgC,A.cgD,A.cgE,A.cgF])})()
B.bt(b.typeUniverse,JSON.parse('{"F4":{"G":[],"e":[],"f":[]},"aKj":{"Y":["F4"]}}'))
var y={e:B.w("cJ"),l:B.w("r<e>"),a:B.w("J?"),f:B.w("~")}};
(a=>{a["9QKEfo3dK8OA2kjOHw8IZLcC1Hw="]=a.current})($__dart_deferred_initializers__);