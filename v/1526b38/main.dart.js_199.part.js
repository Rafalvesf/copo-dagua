((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,E,A={
dvt(d){return new A.F2(d,null)},
F2:function F2(d,e){this.d=d
this.a=e},
aKo:function aKo(){var _=this
_.x=_.w=null
_.y=!1
_.d=$
_.c=_.a=null},
ch2:function ch2(d){this.a=d},
cgV:function cgV(d){this.a=d},
cgW:function cgW(d,e){this.a=d
this.b=e},
cgX:function cgX(d,e){this.a=d
this.b=e},
cgY:function cgY(d){this.a=d},
cgZ:function cgZ(d){this.a=d},
ch_:function ch_(d){this.a=d},
ch0:function ch0(d,e){this.a=d
this.b=e},
ch1:function ch1(d,e){this.a=d
this.b=e}},F
B=c[0]
C=c[2]
D=c[189]
E=c[182]
A=a.updateHolder(c[17],A)
F=c[330]
A.F2.prototype={
R(){return new A.aKo()}}
A.aKo.prototype={
ad(){this.aq()
$.az.k4$.push(new A.ch2(this))},
J3(){var x=0,w=B.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n
var $async$J3=B.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:B.th("partner_invite_open",s.a.d.toUpperCase())
x=s.gS().a_(0,$.b7(),y.e).a!==C.iB?3:4
break
case 3:x=5
return B.d(B.aVn(s.a.d),$async$J3)
case 5:x=1
break
case 4:s.p(new A.cgV(s))
u=7
x=10
return B.d(B.al1(s.a.d),$async$J3)
case 10:r=e
if(s.c==null){x=1
break}s.p(new A.cgW(s,r))
u=2
x=9
break
case 7:u=6
n=t.pop()
o=B.a9(n)
if(o instanceof B.a61){q=o
if(s.c==null){x=1
break}s.p(new A.cgX(s,q))}else throw n
x=9
break
case 6:x=2
break
case 9:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$J3,w)},
gamZ(){var x=this.gS().a_(0,$.b7(),y.e).b
switch(x==null?null:x.e){case C.eq:x="/home"
break
case C.dQ:x="/partner-home"
break
default:x="/eventos"
break}return x},
u(d){var x,w,v,u,t=this,s=null,r="Continuar",q=t.gS().G($.b7(),y.e),p=t.w
if(q.a!==C.iB){x=B.a([new B.fY("Criar conta",new A.cgY(d),!1,s),new B.am(B.cJ(D.Iv,s,s,new A.cgZ(d),s,s),s)],y.l)
x.push(new B.am(B.cJ(F.aaq,s,s,new A.ch_(d),s,s),s))
w=B.tM(x,s,s,"Organiza o teu evento na \xc0 Nossa!: or\xe7amento, convidados, contratos e pagamentos seguros num s\xf3 s\xedtio. Cria conta (ou entra) e o convite fica ligado a ti. Contas novas t\xeam 50 % de desconto na taxa de servi\xe7o da primeira transa\xe7\xe3o.",C.G0,"Foste convidado para a \xc0 Nossa!")}else{if(!t.y)x=p==null&&t.x==null
else x=!0
if(x)w=C.ks
else{x=t.x
if(x!=null)w=B.tM(B.a([new B.fY(r,new A.ch0(t,d),!1,s)],y.l),s,s,x,C.of,"N\xe3o deu para abrir o convite")
else{x=p.c
v=p.b
u=x?"Convite de "+v:"J\xe1 est\xe1s ligado a "+v
if(!p.d)x=x?v+" convidou-te para a \xc0 Nossa!. Tens 50 % de desconto na taxa de servi\xe7o da tua primeira transa\xe7\xe3o.":"Este convite j\xe1 n\xe3o conta para ti, mas podes usar a app normalmente."
else x=x?v+" convidou-te para a \xc0 Nossa!. Faz as reservas e os pagamentos com eles pela app: fica tudo com contrato, recibo e pagamento protegido.":"J\xe1 tinhas falado com "+v+" pela app \u2014 continua tudo como estava."
w=B.tM(B.a([new B.fY(r,new A.ch1(t,d),!1,s)],y.l),s,s,x,C.a0W,u)}}}return B.cP(s,C.by,B.bB(!0,new B.S(C.hx,B.bO(w,s,s),s),s,C.Z,!0),!0,s)}}
var z=a.updateTypes([])
A.ch2.prototype={
$1(d){return this.a.J3()},
$S:5}
A.cgV.prototype={
$0(){return this.a.y=!0},
$S:0}
A.cgW.prototype={
$0(){var x=this.a
x.y=!1
x.w=this.b},
$S:0}
A.cgX.prototype={
$0(){var x=this.a
x.y=!1
x.x=this.b.geS(0)},
$S:0}
A.cgY.prototype={
$0(){return B.ae(this.a).aj("/comecar",null,y.a)},
$S:0}
A.cgZ.prototype={
$0(){return B.ae(this.a).aj("/login",null,y.a)},
$S:0}
A.ch_.prototype={
$0(){return E.a_t(this.a,null)},
$S:0}
A.ch0.prototype={
$0(){var x=this.a.gamZ()
return B.ae(this.b).bQ(0,x,null)},
$S:0}
A.ch1.prototype={
$0(){var x=this.a.gamZ()
return B.ae(this.b).bQ(0,x,null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.F2,B.dC)
x(A.aKo,B.dw)
x(A.ch2,B.bu)
w(B.bL,[A.cgV,A.cgW,A.cgX,A.cgY,A.cgZ,A.ch_,A.ch0,A.ch1])})()
B.br(b.typeUniverse,JSON.parse('{"F2":{"H":[],"e":[],"f":[]},"aKo":{"a_":["F2"]}}'))
var y={e:B.z("cH"),l:B.z("r<e>"),a:B.z("M?"),f:B.z("~")}};
(a=>{a["nmZm/xtgHP37HKraM2qMqtvl5+Q="]=a.current})($__dart_deferred_initializers__);