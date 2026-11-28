((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dDI(d){var x=B.eW(new B.ex(new B.a5(P.X2,new A.cDX(d),y.A),new A.cDY(),y.U))
return x},
cDX:function cDX(d){this.a=d},
cDY:function cDY(){},
dtq(){return new A.a9u(null)},
aPz:function aPz(d,e){this.a=d
this.b=e},
a9u:function a9u(d){this.a=d},
aPy:function aPy(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cw0:function cw0(d){this.a=d},
cvP:function cvP(){},
cvQ:function cvQ(){},
cvR:function cvR(){},
cw_:function cw_(){},
cvS:function cvS(d,e){this.a=d
this.b=e},
cvT:function cvT(d){this.a=d},
cvO:function cvO(d){this.a=d},
cvU:function cvU(d){this.a=d},
cvN:function cvN(d){this.a=d},
cvV:function cvV(d,e){this.a=d
this.b=e},
cvW:function cvW(){},
cvX:function cvX(){},
cvY:function cvY(d,e){this.a=d
this.b=e},
cvZ:function cvZ(d,e){this.a=d
this.b=e},
cvM:function cvM(){},
aIZ:function aIZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OD:function OD(d){this.a=d},
aJ_:function aJ_(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
c8B:function c8B(d){this.a=d},
c8A:function c8A(d,e){this.a=d
this.b=e},
c8C:function c8C(d){this.a=d},
c8z:function c8z(d,e){this.a=d
this.b=e},
c8D:function c8D(d,e){this.a=d
this.b=e},
c8y:function c8y(d){this.a=d},
afh:function afh(d){this.a=d},
cgx:function cgx(){},
cgy:function cgy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgw:function cgw(d){this.a=d},
dzj(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dDI(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
d86(d,e,f){var x,w=B.dr(e,0,null)
if(w.gdm(w)==="/partners"){x=w.gek().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ai(d).ar("/partners",new M.Lb(x,!1),y.X)
return}B.ai(d).ar(e,null,y.X)},
PO(d,e,f){return A.dGs(d,e,f)},
dGs(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$PO=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a1(0,$.qd().gaX(),y.I)
if(!f.ax)j.NH(f.a)
q=f.r
x=q==="parceiros"&&C.f.b4(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a1(0,$.co(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aUt(s,p),$async$PO)
case 11:r=h
if(d.e!=null){p=r.a
B.ai(d).ar("/chat/"+p,r,y.X)}x=1
break
u=2
x=10
break
case 8:u=7
i=t.pop()
x=10
break
case 7:x=2
break
case 10:case 6:case 4:p=f.ay
x=q==="pagamentos"&&p!=null?12:13
break
case 12:x=d.e!=null?14:15
break
case 14:x=16
return B.d(B.rB(d,e,p,null,null),$async$PO)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a1(0,$.dhx().gel(),y.e),$async$PO)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=A.dzj(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9q||l==null?18:19
break
case 18:x=20
return B.d(B.cn(null,new A.cHx(f,l),!1,d,!0,!1,null,y.N),$async$PO)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EW(f.a),$async$PO)
case 24:if(d.e!=null)d.O(y.q).f.a4(B.cA(null,null,null,null,null,C.z,null,B.i('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.d86(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9p)j.W_(f.a)
A.d86(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$PO,w)},
cOF:function cOF(){},
cHx:function cHx(d,e){this.a=d
this.b=e},
cHu:function cHu(d){this.a=d},
cHv:function cHv(d){this.a=d},
cHw:function cHw(d){this.a=d},
aUt(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aUt=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&B.b()
x=3
return B.d(p.R("proposals").az(0,"partner_id, partner_profiles(business_name, cover_photo_url)").W("id",e).dP(0),$async$aUt)
case 3:u=g
p=J.a7(u)
t=B.a1(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.uq(d,t),$async$aUt)
case 4:r=g
p=s==null
q=B.C(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.hU(r,q,B.C(p?null:J.h(s,"cover_photo_url")),d,t,null,null,0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aUt,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[134]
I=c[159]
E=c[163]
K=c[183]
L=c[129]
M=c[130]
G=c[85]
N=c[245]
A=a.updateHolder(c[52],A)
D=c[399]
O=c[78]
P=c[400]
H=c[176]
Q=c[331]
A.aPz.prototype={
I(){return"_TasksTab."+this.b}}
A.a9u.prototype={
P(){return new A.aPy(D.Ac)}}
A.aPy.prototype={
al(){this.aH()
B.jf(new A.cw0(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gT().H($.qd(),y.z),e=B.V(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a5<1>")
C.e.n(e,new B.a5(d,new A.cvP(),a1))
C.e.cO(e,new A.cvQ())
x=f.b
w=x.length+new B.a5(d,new A.cvR(),a1).gA(0)
v=w+e.length
u=new A.cw_()
t=y.p
s=B.a([new B.qL(new A.cvS(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ei("Por fazer",r===D.Ac,w,new A.cvT(h),g),new B.ei("Feito",r===D.adb,e.length,new A.cvU(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pl(s,g),D.aHs,new K.m4(r,16,!1,g),B.vc(g,g,"O vosso plano",C.hA,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ac){e=B.a([D.cnE,D.aGZ],t)
if(x.length===0)e.push(D.aGO)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.H)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9r?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.D(C.e.gM(C.f.f4(k,B.aW("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a3(k," \xb7 ")
i=n.ax?g:D.aHg
s.push(new B.i8(D.aGM,n.e,k,i,!0,new A.cvV(h,n),!1,g))}e.push(B.fa(s,0))}e.push(D.aGY)
e.push(D.bL7)
x=B.a([],t)
if(!new B.a5(d,new A.cvW(),a1).gV(0).t())x.push(D.aGQ)
else for(d=C.e.gV(d),a0=new B.hw(d,new A.cvX(),a0.i("hw<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i8(new G.Kd(!1,!1,new A.cvY(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.fa(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGX)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.i8(N.Q1,n.e,new A.cvZ(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aH0,B.fa(d,0)],t))}return B.cM(g,C.cP,B.ol(D.bVK,40,q,g,!0,!1),!0,g)},
L_(d,e){return this.bif(d,e)},
bif(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$L_=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.cn(null,new A.cvM(),!1,d,!0,!0,null,y.g),$async$L_)
case 3:q=g
if(q==null){x=1
break}u=e.a1(0,$.qd().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mf(q.d,s,r,t),$async$L_)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L_,w)}}
A.aIZ.prototype={}
A.OD.prototype={
P(){var x=$.ac()
return new A.aJ_(new B.aI(C.ao,x),new B.aI(C.ao,x))}}
A.aJ_.prototype={
m(){var x=this.d,w=$.ac()
x.Z$=w
x.X$=0
x=this.e
x.Z$=w
x.X$=0
this.a7()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.dX(B.B(B.a([B.i("Nova tarefa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a3,new H.jM("T\xedtulo",x.d,x.w,w,w,w),C.P,new H.jM("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.P,L.cQW("Prazo (opcional)",new A.c8B(x),x.f),C.aB,new O.a0Z(x.r,new A.c8C(x),w),C.a3,new B.fI("Adicionar",new A.c8D(x,d),!1,w)],y.p),C.I,C.j,C.K,0,C.v),C.z,w,new B.a2(20,20,20,v.f.d+20),w,w,C.a1)}}
A.afh.prototype={
La(d,e,f,g){return this.b9R(0,e,f,g)},
b9R(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$La=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cOW(g.a)
x=3
return B.d(f.a1(0,$.zg().$1(g.a).gel(),y.B),$async$La)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.TU(e,u,!1),$async$La)
case 4:case 1:return B.l(v,w)}})
return B.m($async$La,w)},
bc(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cv($.co(),new A.cgx(),y.v,s),s)
s=e.H($.cPM().$1(new B.YA(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dk(x))return C.as
s=B.a([],y.G)
for(w=J.c9(x),v=w.gV(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.zg().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aH(y.N)
for(w=w.gV(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.R(C.CI,B.B(B.a([D.bLc,D.bLK,new F.L9(s,new A.cgy(this,d,e,x),v,null)],y.p),C.I,C.j,C.m,0,C.v),null)}}
var z=a.updateTypes(["OD(N)","~(dQ)","y(nw)"])
A.cDX.prototype={
$1(d){return d.a===this.a},
$S:465}
A.cDY.prototype={
$1(d){return d.b},
$S:1509}
A.cw0.prototype={
$0(){return this.a.gT().a1(0,$.qd().gaX(),y.I).jH()},
$S:1}
A.cvP.prototype={
$1(d){return d.x===C.yT},
$S:60}
A.cvQ.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bC(0,x==null?d.ch:x)},
$S:183}
A.cvR.prototype={
$1(d){return d.x===C.i8},
$S:60}
A.cw_.prototype={
$1(d){return C.f.aW(C.i.k(B.aN(d)),2,"0")+"/"+C.f.aW(C.i.k(B.ay(d)),2,"0")},
$S:142}
A.cvS.prototype={
$0(){var x=this.a
return x.L_(this.b,x.gT())},
$S:0}
A.cvT.prototype={
$0(){var x=this.a
return x.q(new A.cvO(x))},
$S:0}
A.cvO.prototype={
$0(){return this.a.w=D.Ac},
$S:0}
A.cvU.prototype={
$0(){var x=this.a
return x.q(new A.cvN(x))},
$S:0}
A.cvN.prototype={
$0(){return this.a.w=D.adb},
$S:0}
A.cvV.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.PO(w,x.gT(),this.b)},
$S:0}
A.cvW.prototype={
$1(d){return d.x===C.i8},
$S:60}
A.cvX.prototype={
$1(d){return d.x===C.i8},
$S:60}
A.cvY.prototype={
$0(){return this.a.gT().a1(0,$.qd().gaX(),y.I).EW(this.b.a)},
$S:0}
A.cvZ.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:17}
A.cvM.prototype={
$1(d){return D.cnn},
$S:z+0}
A.c8B.prototype={
$1(d){var x=this.a
return x.q(new A.c8A(x,d))},
$S:267}
A.c8A.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.c8C.prototype={
$1(d){var x=this.a
return x.q(new A.c8z(x,d))},
$S:102}
A.c8z.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.c8D.prototype={
$0(){var x,w,v,u=this.a
u.q(new A.c8y(u))
if(u.w!=null)return
x=B.aq(this.b,!1)
w=C.f.D(u.d.a.a)
v=C.f.D(u.e.a.a)
if(v.length===0)v=null
x.aj(new A.aIZ(w,v,u.f,u.r))},
$S:0}
A.c8y.prototype={
$0(){var x=this.a
x.w=C.f.D(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cgx.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:36}
A.cgy.prototype={
$1(d){var x=this
return x.a.La(0,x.b,x.c,J.cYj(x.d,new A.cgw(d)))},
$S:z+1}
A.cgw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cOF.prototype={
$1(d){return this.aGL(d)},
aGL(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&B.b()
x=7
return B.d(p.R("task_templates").cj(0),$async$$1)
case 7:s=f
r=B.A(y.N,y.c)
for(p=J.ar(s),o=y.P;p.t();){q=p.gE(p)
J.b6(r,B.a1(J.h(o.a(q),"id")),B.d4u(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bH1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1510}
A.cHx.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.i(w.e,x,x,x,x,C.aa0,x,x,x)],v)
w=w.f
if(C.f.D(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.X,B.i(C.f.D(w),x,x,x,x,D.c5b,x,x,x)],v))}u.push(C.bC)
u.push(B.DI(D.aDM,D.cbv,new A.cHu(d),x))
if(this.b!=null)C.e.n(u,B.a([C.X,B.ia(Q.aaF,new A.cHv(d),x)],v))
u.push(C.at)
u.push(B.cs(C.mo,x,x,new A.cHw(d),x,x))
return B.bC(!0,new B.R(C.Nx,B.B(u,C.I,C.j,C.K,0,C.v),x),x,C.a_,!0)},
$S:48}
A.cHu.prototype={
$0(){return B.aq(this.a,!1).aj("done")},
$S:0}
A.cHv.prototype={
$0(){return B.aq(this.a,!1).aj("open")},
$S:0}
A.cHw.prototype={
$0(){return B.aq(this.a,!1).bJ()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cDX,A.cDY,A.cvP,A.cvR,A.cw_,A.cvW,A.cvX,A.cvM,A.c8B,A.c8C,A.cgx,A.cgy,A.cgw,A.cOF,A.cHx])
w(A.aPz,B.fr)
w(A.a9u,B.dD)
w(A.aPy,B.dy)
x(B.bR,[A.cw0,A.cvS,A.cvT,A.cvO,A.cvU,A.cvN,A.cvV,A.cvY,A.cvZ,A.c8A,A.c8z,A.c8D,A.c8y,A.cHu,A.cHv,A.cHw])
w(A.cvQ,B.cR)
w(A.aIZ,B.I)
w(A.OD,B.K)
w(A.aJ_,B.a_)
w(A.afh,B.en)})()
B.bq(b.typeUniverse,JSON.parse('{"a9u":{"K":[],"e":[],"f":[]},"OD":{"K":[],"e":[],"f":[]},"aPy":{"a_":["a9u"]},"aJ_":{"a_":["OD"]},"afh":{"K":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ax<t<nw>?>"),D:x("ax<dQ?>"),R:x("hU"),v:x("ed"),Z:x("nu"),e:x("F<a4<c,oK>>"),B:x("F<dQ?>"),E:x("r<ei>"),G:x("r<dQ>"),s:x("r<c>"),p:x("r<e>"),r:x("a4<c,oK>"),P:x("a4<c,@>"),U:x("ex<+(c,c),c>"),w:x("dn"),N:x("c"),I:x("tV"),z:x("rj"),c:x("oK"),A:x("a5<+(c,c)>"),g:x("aIZ"),q:x("ds"),h:x("a4<c,@>?"),X:x("I?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDM=new B.ba(C.d7,null,null,null,null,null)
D.aGM=new G.Kd(!1,!1,null,null)
D.aGW=new B.i8(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdt=x([D.aGW],y.p)
D.aGO=new B.T2(D.bdt,0,null)
D.aGQ=new B.i8(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGX=new B.i8(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGY=new E.Eo("As vossas tarefas",null,null,null)
D.aGZ=new E.Eo("Pr\xf3ximas tarefas",null,null,null)
D.aH0=new E.Eo("Feito",null,null,null)
D.aHg=new B.et("Nova",C.d8,null)
D.aHs=new B.m5("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bH1=new B.c4(C.cJ,[],B.w("c4<c,oK>"))
D.cdI=new B.E("Criadas por voc\xeas, sem limite.",null,C.W,null,null,null,null,null,null,null,null)
D.bL7=new B.R(C.js,D.cdI,null)
D.ce9=new B.E("Sugest\xf5es para ti",null,C.bu,null,null,null,null,null,null,null,null)
D.bLc=new B.R(C.bM,D.ce9,null)
D.atK=new B.a2(20,2,20,10)
D.ccz=new B.E("Com base no que tens procurado.",null,C.W,null,null,null,null,null,null,null,null)
D.bLK=new B.R(D.atK,D.ccz,null)
D.cjt=B.c8("afh")
D.bVK=new B.fm([D.cjt],B.w("fm<kx>"))
D.c5b=new B.M(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbv=new B.E("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cnn=new A.OD(null)
D.cnE=new A.afh(null)
D.Ac=new A.aPz(0,"todo")
D.adb=new A.aPz(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUy","dhx",()=>B.eE(new A.cOF(),null,!1,null,null,y.r))})()};
(a=>{a["xg1ruWxqkUHrsEAEN5XNjz5jbBA="]=a.current})($__dart_deferred_initializers__);