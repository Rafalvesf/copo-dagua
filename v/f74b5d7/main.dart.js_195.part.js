((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,E,A={
dvk(d){return new A.F4(d,null)},
F4:function F4(d,e){this.d=d
this.a=e},
aKv:function aKv(){var _=this
_.x=_.w=null
_.y=!1
_.d=$
_.c=_.a=null},
chd:function chd(d){this.a=d},
ch5:function ch5(d){this.a=d},
ch6:function ch6(d,e){this.a=d
this.b=e},
ch7:function ch7(d,e){this.a=d
this.b=e},
ch8:function ch8(d){this.a=d},
ch9:function ch9(d){this.a=d},
cha:function cha(d){this.a=d},
chb:function chb(d,e){this.a=d
this.b=e},
chc:function chc(d,e){this.a=d
this.b=e}},F
B=c[0]
C=c[2]
D=c[189]
E=c[181]
A=a.updateHolder(c[17],A)
F=c[331]
A.F4.prototype={
R(){return new A.aKv()}}
A.aKv.prototype={
ac(){this.ap()
$.aA.k4$.push(new A.chd(this))},
Jq(){var x=0,w=B.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Jq=B.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:B.tg("partner_invite_open",s.a.d.toUpperCase())
x=s.gS().a_(0,$.b7(),y.e).a!==C.iz?3:4
break
case 3:x=5
return B.d(B.aVu(s.a.d),$async$Jq)
case 5:x=1
break
case 4:s.p(new A.ch5(s))
u=7
x=10
return B.d(B.alb(s.a.d),$async$Jq)
case 10:r=e
if(s.c==null){x=1
break}s.p(new A.ch6(s,r))
u=2
x=9
break
case 7:u=6
n=t.pop()
o=B.a9(n)
if(o instanceof B.a61){q=o
if(s.c==null){x=1
break}s.p(new A.ch7(s,q))}else throw n
x=9
break
case 6:x=2
break
case 9:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Jq,w)},
ganJ(){var x=this.gS().a_(0,$.b7(),y.e).b
switch(x==null?null:x.e){case C.eq:x="/home"
break
case C.dR:x="/partner-home"
break
default:x="/eventos"
break}return x},
u(d){var x,w,v,u,t=this,s=null,r="Continuar",q=t.gS().G($.b7(),y.e),p=t.w
if(q.a!==C.iz){x=B.a([new B.fX("Criar conta",new A.ch8(d),!1,s),B.cA(D.IN,s,s,new A.ch9(d),s,s)],y.l)
x.push(B.cA(F.aaY,s,s,new A.cha(d),s,s))
w=B.tK(x,s,s,"Organiza o teu evento na \xc0 Nossa!: or\xe7amento, convidados, contratos e pagamentos seguros num s\xf3 s\xedtio. Cria conta (ou entra) e o convite fica ligado a ti. Contas novas t\xeam 50 % de desconto na taxa de servi\xe7o da primeira transa\xe7\xe3o.",C.Gg,"Foste convidado para a \xc0 Nossa!")}else{if(!t.y)x=p==null&&t.x==null
else x=!0
if(x)w=C.ko
else{x=t.x
if(x!=null)w=B.tK(B.a([new B.fX(r,new A.chb(t,d),!1,s)],y.l),s,s,x,C.op,"N\xe3o deu para abrir o convite")
else{x=p.c
v=p.b
u=x?"Convite de "+v:"J\xe1 est\xe1s ligado a "+v
if(!p.d)x=x?v+" convidou-te para a \xc0 Nossa!. Tens 50 % de desconto na taxa de servi\xe7o da tua primeira transa\xe7\xe3o.":"Este convite j\xe1 n\xe3o conta para ti, mas podes usar a app normalmente."
else x=x?v+" convidou-te para a \xc0 Nossa!. Faz as reservas e os pagamentos com eles pela app: fica tudo com contrato, recibo e pagamento protegido.":"J\xe1 tinhas falado com "+v+" pela app \u2014 continua tudo como estava."
w=B.tK(B.a([new B.fX(r,new A.chc(t,d),!1,s)],y.l),s,s,x,C.a1g,u)}}}return B.cQ(s,C.by,B.bA(!0,new B.S(C.hx,B.bM(w,s,s),s),s,C.Z,!0),!0,s)}}
var z=a.updateTypes([])
A.chd.prototype={
$1(d){return this.a.Jq()},
$S:5}
A.ch5.prototype={
$0(){return this.a.y=!0},
$S:0}
A.ch6.prototype={
$0(){var x=this.a
x.y=!1
x.w=this.b},
$S:0}
A.ch7.prototype={
$0(){var x=this.a
x.y=!1
x.x=this.b.geT(0)},
$S:0}
A.ch8.prototype={
$0(){return B.ad(this.a).ak("/comecar",null,y.a)},
$S:0}
A.ch9.prototype={
$0(){return B.ad(this.a).ak("/login",null,y.a)},
$S:0}
A.cha.prototype={
$0(){return E.a_s(this.a,null)},
$S:0}
A.chb.prototype={
$0(){var x=this.a.ganJ()
return B.ad(this.b).bQ(0,x,null)},
$S:0}
A.chc.prototype={
$0(){var x=this.a.ganJ()
return B.ad(this.b).bQ(0,x,null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.F4,B.dB)
x(A.aKv,B.dv)
x(A.chd,B.bx)
w(B.bQ,[A.ch5,A.ch6,A.ch7,A.ch8,A.ch9,A.cha,A.chb,A.chc])})()
B.bu(b.typeUniverse,JSON.parse('{"F4":{"G":[],"e":[],"f":[]},"aKv":{"Z":["F4"]}}'))
var y={e:B.x("cK"),l:B.x("r<e>"),a:B.x("K?"),f:B.x("~")}};
(a=>{a["8m9OmCKRSqRm6uCUmMtasAEALRw="]=a.current})($__dart_deferred_initializers__);