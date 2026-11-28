((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,E,A={
due(d){return new A.F2(d,null)},
F2:function F2(d,e){this.d=d
this.a=e},
aKl:function aKl(){var _=this
_.x=_.w=null
_.y=!1
_.d=$
_.c=_.a=null},
cgE:function cgE(d){this.a=d},
cgw:function cgw(d){this.a=d},
cgx:function cgx(d,e){this.a=d
this.b=e},
cgy:function cgy(d,e){this.a=d
this.b=e},
cgz:function cgz(d){this.a=d},
cgA:function cgA(d){this.a=d},
cgB:function cgB(d){this.a=d},
cgC:function cgC(d,e){this.a=d
this.b=e},
cgD:function cgD(d,e){this.a=d
this.b=e}},F
B=c[0]
C=c[2]
D=c[191]
E=c[183]
A=a.updateHolder(c[17],A)
F=c[333]
A.F2.prototype={
R(){return new A.aKl()}}
A.aKl.prototype={
ac(){this.ap()
$.aA.k4$.push(new A.cgE(this))},
Jp(){var x=0,w=B.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Jp=B.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:B.te("partner_invite_open",s.a.d.toUpperCase())
x=s.gS().a1(0,$.b8(),y.e).a!==C.iy?3:4
break
case 3:x=5
return B.d(B.aVl(s.a.d),$async$Jp)
case 5:x=1
break
case 4:s.p(new A.cgw(s))
u=7
x=10
return B.d(B.al7(s.a.d),$async$Jp)
case 10:r=e
if(s.c==null){x=1
break}s.p(new A.cgx(s,r))
u=2
x=9
break
case 7:u=6
n=t.pop()
o=B.a9(n)
if(o instanceof B.a6_){q=o
if(s.c==null){x=1
break}s.p(new A.cgy(s,q))}else throw n
x=9
break
case 6:x=2
break
case 9:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Jp,w)},
ganz(){var x=this.gS().a1(0,$.b8(),y.e).b
switch(x==null?null:x.e){case C.ep:x="/home"
break
case C.dR:x="/partner-home"
break
default:x="/eventos"
break}return x},
u(d){var x,w,v,u,t=this,s=null,r="Continuar",q=t.gS().G($.b8(),y.e),p=t.w
if(q.a!==C.iy){x=B.a([new B.fX("Criar conta",new A.cgz(d),!1,s),B.cw(D.IJ,s,s,new A.cgA(d),s,s)],y.l)
x.push(B.cw(F.aaP,s,s,new A.cgB(d),s,s))
w=B.tJ(x,s,s,"Organiza o teu evento na \xc0 Nossa!: or\xe7amento, convidados, contratos e pagamentos seguros num s\xf3 s\xedtio. Cria conta (ou entra) e o convite fica ligado a ti. Contas novas t\xeam 50 % de desconto na taxa de servi\xe7o da primeira transa\xe7\xe3o.",C.G9,"Foste convidado para a \xc0 Nossa!")}else{if(!t.y)x=p==null&&t.x==null
else x=!0
if(x)w=C.km
else{x=t.x
if(x!=null)w=B.tJ(B.a([new B.fX(r,new A.cgC(t,d),!1,s)],y.l),s,s,x,C.on,"N\xe3o deu para abrir o convite")
else{x=p.c
v=p.b
u=x?"Convite de "+v:"J\xe1 est\xe1s ligado a "+v
if(!p.d)x=x?v+" convidou-te para a \xc0 Nossa!. Tens 50 % de desconto na taxa de servi\xe7o da tua primeira transa\xe7\xe3o.":"Este convite j\xe1 n\xe3o conta para ti, mas podes usar a app normalmente."
else x=x?v+" convidou-te para a \xc0 Nossa!. Faz as reservas e os pagamentos com eles pela app: fica tudo com contrato, recibo e pagamento protegido.":"J\xe1 tinhas falado com "+v+" pela app \u2014 continua tudo como estava."
w=B.tJ(B.a([new B.fX(r,new A.cgD(t,d),!1,s)],y.l),s,s,x,C.a1d,u)}}}return B.cP(s,C.bx,B.bD(!0,new B.S(C.fU,B.bL(w,s,s),s),s,C.a_,!0),!0,s)}}
var z=a.updateTypes([])
A.cgE.prototype={
$1(d){return this.a.Jp()},
$S:5}
A.cgw.prototype={
$0(){return this.a.y=!0},
$S:0}
A.cgx.prototype={
$0(){var x=this.a
x.y=!1
x.w=this.b},
$S:0}
A.cgy.prototype={
$0(){var x=this.a
x.y=!1
x.x=this.b.geT(0)},
$S:0}
A.cgz.prototype={
$0(){return B.ae(this.a).am("/comecar",null,y.a)},
$S:0}
A.cgA.prototype={
$0(){return B.ae(this.a).am("/login",null,y.a)},
$S:0}
A.cgB.prototype={
$0(){return E.a_o(this.a,null)},
$S:0}
A.cgC.prototype={
$0(){var x=this.a.ganz()
return B.ae(this.b).bQ(0,x,null)},
$S:0}
A.cgD.prototype={
$0(){var x=this.a.ganz()
return B.ae(this.b).bQ(0,x,null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.F2,B.dA)
x(A.aKl,B.dv)
x(A.cgE,B.bw)
w(B.bP,[A.cgw,A.cgx,A.cgy,A.cgz,A.cgA,A.cgB,A.cgC,A.cgD])})()
B.br(b.typeUniverse,JSON.parse('{"F2":{"G":[],"e":[],"f":[]},"aKl":{"Y":["F2"]}}'))
var y={e:B.w("cI"),l:B.w("r<e>"),a:B.w("J?"),f:B.w("~")}};
(a=>{a["j+bgAFaMdN9Pe9Ip92QAHFqQcy4="]=a.current})($__dart_deferred_initializers__);