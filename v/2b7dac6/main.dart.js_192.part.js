((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,D,E,A={
du7(d){return new A.F1(d,null)},
F1:function F1(d,e){this.d=d
this.a=e},
aKl:function aKl(){var _=this
_.x=_.w=null
_.y=!1
_.d=$
_.c=_.a=null},
cgy:function cgy(d){this.a=d},
cgq:function cgq(d){this.a=d},
cgr:function cgr(d,e){this.a=d
this.b=e},
cgs:function cgs(d,e){this.a=d
this.b=e},
cgt:function cgt(d){this.a=d},
cgu:function cgu(d){this.a=d},
cgv:function cgv(d){this.a=d},
cgw:function cgw(d,e){this.a=d
this.b=e},
cgx:function cgx(d,e){this.a=d
this.b=e}},F
B=c[0]
C=c[2]
D=c[191]
E=c[183]
A=a.updateHolder(c[17],A)
F=c[332]
A.F1.prototype={
R(){return new A.aKl()}}
A.aKl.prototype={
ac(){this.ap()
$.aA.k4$.push(new A.cgy(this))},
Jo(){var x=0,w=B.n(y.f),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Jo=B.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:B.te("partner_invite_open",s.a.d.toUpperCase())
x=s.gS().a0(0,$.b8(),y.e).a!==C.iw?3:4
break
case 3:x=5
return B.d(B.aVk(s.a.d),$async$Jo)
case 5:x=1
break
case 4:s.p(new A.cgq(s))
u=7
x=10
return B.d(B.al7(s.a.d),$async$Jo)
case 10:r=e
if(s.c==null){x=1
break}s.p(new A.cgr(s,r))
u=2
x=9
break
case 7:u=6
n=t.pop()
o=B.a9(n)
if(o instanceof B.a6_){q=o
if(s.c==null){x=1
break}s.p(new A.cgs(s,q))}else throw n
x=9
break
case 6:x=2
break
case 9:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Jo,w)},
ganx(){var x=this.gS().a0(0,$.b8(),y.e).b
switch(x==null?null:x.e){case C.eo:x="/home"
break
case C.dR:x="/partner-home"
break
default:x="/eventos"
break}return x},
u(d){var x,w,v,u,t=this,s=null,r="Continuar",q=t.gS().G($.b8(),y.e),p=t.w
if(q.a!==C.iw){x=B.a([new B.fX("Criar conta",new A.cgt(d),!1,s),B.cw(D.IK,s,s,new A.cgu(d),s,s)],y.l)
x.push(B.cw(F.aaQ,s,s,new A.cgv(d),s,s))
w=B.tJ(x,s,s,"Organiza o teu evento na \xc0 Nossa!: or\xe7amento, convidados, contratos e pagamentos seguros num s\xf3 s\xedtio. Cria conta (ou entra) e o convite fica ligado a ti. Contas novas t\xeam 50 % de desconto na taxa de servi\xe7o da primeira transa\xe7\xe3o.",C.G9,"Foste convidado para a \xc0 Nossa!")}else{if(!t.y)x=p==null&&t.x==null
else x=!0
if(x)w=C.kl
else{x=t.x
if(x!=null)w=B.tJ(B.a([new B.fX(r,new A.cgw(t,d),!1,s)],y.l),s,s,x,C.om,"N\xe3o deu para abrir o convite")
else{x=p.c
v=p.b
u=x?"Convite de "+v:"J\xe1 est\xe1s ligado a "+v
if(!p.d)x=x?v+" convidou-te para a \xc0 Nossa!. Tens 50 % de desconto na taxa de servi\xe7o da tua primeira transa\xe7\xe3o.":"Este convite j\xe1 n\xe3o conta para ti, mas podes usar a app normalmente."
else x=x?v+" convidou-te para a \xc0 Nossa!. Faz as reservas e os pagamentos com eles pela app: fica tudo com contrato, recibo e pagamento protegido.":"J\xe1 tinhas falado com "+v+" pela app \u2014 continua tudo como estava."
w=B.tJ(B.a([new B.fX(r,new A.cgx(t,d),!1,s)],y.l),s,s,x,C.a1e,u)}}}return B.cP(s,C.by,B.bD(!0,new B.S(C.fU,B.bL(w,s,s),s),s,C.a_,!0),!0,s)}}
var z=a.updateTypes([])
A.cgy.prototype={
$1(d){return this.a.Jo()},
$S:5}
A.cgq.prototype={
$0(){return this.a.y=!0},
$S:0}
A.cgr.prototype={
$0(){var x=this.a
x.y=!1
x.w=this.b},
$S:0}
A.cgs.prototype={
$0(){var x=this.a
x.y=!1
x.x=this.b.geT(0)},
$S:0}
A.cgt.prototype={
$0(){return B.ae(this.a).am("/comecar",null,y.a)},
$S:0}
A.cgu.prototype={
$0(){return B.ae(this.a).am("/login",null,y.a)},
$S:0}
A.cgv.prototype={
$0(){return E.a_o(this.a,null)},
$S:0}
A.cgw.prototype={
$0(){var x=this.a.ganx()
return B.ae(this.b).bQ(0,x,null)},
$S:0}
A.cgx.prototype={
$0(){var x=this.a.ganx()
return B.ae(this.b).bQ(0,x,null)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.F1,B.dA)
x(A.aKl,B.du)
x(A.cgy,B.bw)
w(B.bO,[A.cgq,A.cgr,A.cgs,A.cgt,A.cgu,A.cgv,A.cgw,A.cgx])})()
B.br(b.typeUniverse,JSON.parse('{"F1":{"G":[],"e":[],"f":[]},"aKl":{"Y":["F1"]}}'))
var y={e:B.w("cI"),l:B.w("r<e>"),a:B.w("J?"),f:B.w("~")}};
(a=>{a["A3ChtaZRS0bvYBEiilLQY/GC+hM="]=a.current})($__dart_deferred_initializers__);