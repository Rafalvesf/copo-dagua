((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,E,A={
dv_(d){return new A.F_(d,null)},
F_:function F_(d,e){this.d=d
this.a=e},
aKa:function aKa(){var _=this
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
D=c[189]
E=c[182]
A=a.updateHolder(c[17],A)
F=c[330]
A.F_.prototype={
R(){return new A.aKa()}}
A.aKa.prototype={
ad(){this.aq()
$.az.k4$.push(new A.cgG(this))},
J3(){var x=0,w=B.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n
var $async$J3=B.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:B.tf("partner_invite_open",s.a.d.toUpperCase())
x=s.gS().a_(0,$.b7(),y.e).a!==C.iA?3:4
break
case 3:x=5
return B.d(B.aV9(s.a.d),$async$J3)
case 5:x=1
break
case 4:s.p(new A.cgy(s))
u=7
x=10
return B.d(B.akR(s.a.d),$async$J3)
case 10:r=e
if(s.c==null){x=1
break}s.p(new A.cgz(s,r))
u=2
x=9
break
case 7:u=6
n=t.pop()
o=B.a9(n)
if(o instanceof B.a5R){q=o
if(s.c==null){x=1
break}s.p(new A.cgA(s,q))}else throw n
x=9
break
case 6:x=2
break
case 9:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$J3,w)},
gamX(){var x=this.gS().a_(0,$.b7(),y.e).b
switch(x==null?null:x.e){case C.ep:x="/home"
break
case C.dQ:x="/partner-home"
break
default:x="/eventos"
break}return x},
u(d){var x,w,v,u,t=this,s=null,r="Continuar",q=t.gS().G($.b7(),y.e),p=t.w
if(q.a!==C.iA){x=B.a([new B.fZ("Criar conta",new A.cgB(d),!1,s),new B.am(B.cJ(D.Iu,s,s,new A.cgC(d),s,s),s)],y.l)
x.push(new B.am(B.cJ(F.aaq,s,s,new A.cgD(d),s,s),s))
w=B.tK(x,s,s,"Organiza o teu evento na \xc0 Nossa!: or\xe7amento, convidados, contratos e pagamentos seguros num s\xf3 s\xedtio. Cria conta (ou entra) e o convite fica ligado a ti. Contas novas t\xeam 50 % de desconto na taxa de servi\xe7o da primeira transa\xe7\xe3o.",C.G_,"Foste convidado para a \xc0 Nossa!")}else{if(!t.y)x=p==null&&t.x==null
else x=!0
if(x)w=C.ks
else{x=t.x
if(x!=null)w=B.tK(B.a([new B.fZ(r,new A.cgE(t,d),!1,s)],y.l),s,s,x,C.of,"N\xe3o deu para abrir o convite")
else{x=p.c
v=p.b
u=x?"Convite de "+v:"J\xe1 est\xe1s ligado a "+v
if(!p.d)x=x?v+" convidou-te para a \xc0 Nossa!. Tens 50 % de desconto na taxa de servi\xe7o da tua primeira transa\xe7\xe3o.":"Este convite j\xe1 n\xe3o conta para ti, mas podes usar a app normalmente."
else x=x?v+" convidou-te para a \xc0 Nossa!. Faz as reservas e os pagamentos com eles pela app: fica tudo com contrato, recibo e pagamento protegido.":"J\xe1 tinhas falado com "+v+" pela app \u2014 continua tudo como estava."
w=B.tK(B.a([new B.fZ(r,new A.cgF(t,d),!1,s)],y.l),s,s,x,C.a0V,u)}}}return B.cP(s,C.by,B.bB(!0,new B.S(C.hx,B.bO(w,s,s),s),s,C.Z,!0),!0,s)}}
var z=a.updateTypes([])
A.cgG.prototype={
$1(d){return this.a.J3()},
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
x.x=this.b.geS(0)},
$S:0}
A.cgB.prototype={
$0(){return B.ae(this.a).aj("/comecar",null,y.a)},
$S:0}
A.cgC.prototype={
$0(){return B.ae(this.a).aj("/login",null,y.a)},
$S:0}
A.cgD.prototype={
$0(){return E.a_m(this.a,null)},
$S:0}
A.cgE.prototype={
$0(){var x=this.a.gamX()
return B.ae(this.b).bQ(0,x,null)},
$S:0}
A.cgF.prototype={
$0(){var x=this.a.gamX()
return B.ae(this.b).bQ(0,x,null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.F_,B.dC)
x(A.aKa,B.dw)
x(A.cgG,B.bt)
w(B.bL,[A.cgy,A.cgz,A.cgA,A.cgB,A.cgC,A.cgD,A.cgE,A.cgF])})()
B.br(b.typeUniverse,JSON.parse('{"F_":{"H":[],"e":[],"f":[]},"aKa":{"a_":["F_"]}}'))
var y={e:B.A("cH"),l:B.A("r<e>"),a:B.A("M?"),f:B.A("~")}};
(a=>{a["aYh/KC42rfaWOKKA4q3xwOL6ZOU="]=a.current})($__dart_deferred_initializers__);