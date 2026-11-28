((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dDw(d){var x=B.eV(new B.ew(new B.a5(P.X0,new A.cDP(d),y.A),new A.cDQ(),y.U))
return x},
cDP:function cDP(d){this.a=d},
cDQ:function cDQ(){},
dte(){return new A.a9n(null)},
aPu:function aPu(d,e){this.a=d
this.b=e},
a9n:function a9n(d){this.a=d},
aPt:function aPt(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cvT:function cvT(d){this.a=d},
cvH:function cvH(){},
cvI:function cvI(){},
cvJ:function cvJ(){},
cvS:function cvS(){},
cvK:function cvK(d,e){this.a=d
this.b=e},
cvL:function cvL(d){this.a=d},
cvG:function cvG(d){this.a=d},
cvM:function cvM(d){this.a=d},
cvF:function cvF(d){this.a=d},
cvN:function cvN(d,e){this.a=d
this.b=e},
cvO:function cvO(){},
cvP:function cvP(){},
cvQ:function cvQ(d,e){this.a=d
this.b=e},
cvR:function cvR(d,e){this.a=d
this.b=e},
cvE:function cvE(){},
aIU:function aIU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OC:function OC(d){this.a=d},
aIV:function aIV(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
c8t:function c8t(d){this.a=d},
c8s:function c8s(d,e){this.a=d
this.b=e},
c8u:function c8u(d){this.a=d},
c8r:function c8r(d,e){this.a=d
this.b=e},
c8v:function c8v(d,e){this.a=d
this.b=e},
c8q:function c8q(d){this.a=d},
afa:function afa(d){this.a=d},
cgp:function cgp(){},
cgq:function cgq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgo:function cgo(d){this.a=d},
dz7(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dDw(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
d8_(d,e,f){var x,w=B.dr(e,0,null)
if(w.gdm(w)==="/partners"){x=w.gel().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ai(d).aq("/partners",new M.L9(x,!1),y.X)
return}B.ai(d).aq(e,null,y.X)},
PO(d,e,f){return A.dGg(d,e,f)},
dGg(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$PO=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a1(0,$.qb().gaX(),y.I)
if(!f.ax)j.NQ(f.a)
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
return B.d(A.aUn(s,p),$async$PO)
case 11:r=h
if(d.e!=null){p=r.a
B.ai(d).aq("/chat/"+p,r,y.X)}x=1
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
return B.d(e.a1(0,$.dhk().gem(),y.e),$async$PO)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=A.dz7(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9l||l==null?18:19
break
case 18:x=20
return B.d(B.cn(null,new A.cHp(f,l),!1,d,!0,!1,null,y.N),$async$PO)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.F_(f.a),$async$PO)
case 24:if(d.e!=null)d.O(y.q).f.a4(B.cA(null,null,null,null,null,C.z,null,B.i('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.X,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.d8_(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9k)j.W8(f.a)
A.d8_(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$PO,w)},
cOx:function cOx(){},
cHp:function cHp(d,e){this.a=d
this.b=e},
cHm:function cHm(d){this.a=d},
cHn:function cHn(d){this.a=d},
cHo:function cHo(d){this.a=d},
aUn(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aUn=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&B.b()
x=3
return B.d(p.R("proposals").az(0,"partner_id, partner_profiles(business_name, cover_photo_url)").W("id",e).dP(0),$async$aUn)
case 3:u=g
p=J.a6(u)
t=B.a0(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.uq(d,t),$async$aUn)
case 4:r=g
p=s==null
q=B.B(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.hU(r,q,B.B(p?null:J.h(s,"cover_photo_url")),d,t,null,null,0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aUn,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[137]
I=c[160]
E=c[163]
K=c[182]
L=c[132]
M=c[133]
G=c[85]
N=c[242]
A=a.updateHolder(c[52],A)
D=c[400]
O=c[78]
P=c[401]
H=c[176]
Q=c[329]
A.aPu.prototype={
I(){return"_TasksTab."+this.b}}
A.a9n.prototype={
P(){return new A.aPt(D.Ab)}}
A.aPt.prototype={
al(){this.aH()
B.je(new A.cvT(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gT().H($.qb(),y.z),e=B.V(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a5<1>")
C.e.n(e,new B.a5(d,new A.cvH(),a1))
C.e.cO(e,new A.cvI())
x=f.b
w=x.length+new B.a5(d,new A.cvJ(),a1).gA(0)
v=w+e.length
u=new A.cvS()
t=y.p
s=B.a([new B.qJ(new A.cvK(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ei("Por fazer",r===D.Ab,w,new A.cvL(h),g),new B.ei("Feito",r===D.ad6,e.length,new A.cvM(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pi(s,g),D.aHp,new K.m3(r,16,!1,g),B.vc(g,g,"O vosso plano",C.hB,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ab){e=B.a([D.cnm,D.aGW],t)
if(x.length===0)e.push(D.aGL)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.K)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9m?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.D(C.e.gM(C.f.f4(k,B.aW("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a3(k," \xb7 ")
i=n.ax?g:D.aHd
s.push(new B.i8(D.aGJ,n.e,k,i,!0,new A.cvN(h,n),!1,g))}e.push(B.fa(s,0))}e.push(D.aGV)
e.push(D.bL4)
x=B.a([],t)
if(!new B.a5(d,new A.cvO(),a1).gV(0).t())x.push(D.aGN)
else for(d=C.e.gV(d),a0=new B.hw(d,new A.cvP(),a0.i("hw<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i8(new G.Kc(!1,!1,new A.cvQ(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.fa(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGU)
else for(o=0;o<e.length;e.length===a0||(0,B.K)(e),++o){n=e[o]
d.push(new B.i8(N.Q_,n.e,new A.cvR(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGY,B.fa(d,0)],t))}return B.cM(g,C.cP,B.oj(D.bVF,40,q,g,!0,!1),!0,g)},
L6(d,e){return this.bil(d,e)},
bil(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$L6=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.cn(null,new A.cvE(),!1,d,!0,!0,null,y.g),$async$L6)
case 3:q=g
if(q==null){x=1
break}u=e.a1(0,$.qb().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mo(q.d,s,r,t),$async$L6)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L6,w)}}
A.aIU.prototype={}
A.OC.prototype={
P(){var x=$.ac()
return new A.aIV(new B.aI(C.an,x),new B.aI(C.an,x))}}
A.aIV.prototype={
m(){var x=this.d,w=$.ac()
x.Z$=w
x.X$=0
x=this.e
x.Z$=w
x.X$=0
this.a7()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.dX(B.C(B.a([B.i("Nova tarefa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a3,new H.jL("T\xedtulo",x.d,x.w,w,w,w),C.P,new H.jL("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.P,L.cQO("Prazo (opcional)",new A.c8t(x),x.f),C.aA,new O.a0X(x.r,new A.c8u(x),w),C.a3,new B.fJ("Adicionar",new A.c8v(x,d),!1,w)],y.p),C.J,C.j,C.L,0,C.v),C.z,w,new B.a2(20,20,20,v.f.d+20),w,w,C.a1)}}
A.afa.prototype={
Lh(d,e,f,g){return this.b9Y(0,e,f,g)},
b9Y(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Lh=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cOO(g.a)
x=3
return B.d(f.a1(0,$.zc().$1(g.a).gem(),y.B),$async$Lh)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.TU(e,u,!1),$async$Lh)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lh,w)},
bc(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cv($.co(),new A.cgp(),y.v,s),s)
s=e.H($.cPE().$1(new B.Yy(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dk(x))return C.aq
s=B.a([],y.G)
for(w=J.c9(x),v=w.gV(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.zc().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aH(y.N)
for(w=w.gV(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.R(C.CG,B.C(B.a([D.bKR,D.bLH,new F.L7(s,new A.cgq(this,d,e,x),v,null)],y.p),C.J,C.j,C.m,0,C.v),null)}}
var z=a.updateTypes(["OC(N)","~(dQ)","y(nu)"])
A.cDP.prototype={
$1(d){return d.a===this.a},
$S:487}
A.cDQ.prototype={
$1(d){return d.b},
$S:1506}
A.cvT.prototype={
$0(){return this.a.gT().a1(0,$.qb().gaX(),y.I).jI()},
$S:1}
A.cvH.prototype={
$1(d){return d.x===C.yQ},
$S:56}
A.cvI.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bC(0,x==null?d.ch:x)},
$S:168}
A.cvJ.prototype={
$1(d){return d.x===C.ia},
$S:56}
A.cvS.prototype={
$1(d){return C.f.aW(C.i.k(B.aN(d)),2,"0")+"/"+C.f.aW(C.i.k(B.ay(d)),2,"0")},
$S:138}
A.cvK.prototype={
$0(){var x=this.a
return x.L6(this.b,x.gT())},
$S:0}
A.cvL.prototype={
$0(){var x=this.a
return x.q(new A.cvG(x))},
$S:0}
A.cvG.prototype={
$0(){return this.a.w=D.Ab},
$S:0}
A.cvM.prototype={
$0(){var x=this.a
return x.q(new A.cvF(x))},
$S:0}
A.cvF.prototype={
$0(){return this.a.w=D.ad6},
$S:0}
A.cvN.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.PO(w,x.gT(),this.b)},
$S:0}
A.cvO.prototype={
$1(d){return d.x===C.ia},
$S:56}
A.cvP.prototype={
$1(d){return d.x===C.ia},
$S:56}
A.cvQ.prototype={
$0(){return this.a.gT().a1(0,$.qb().gaX(),y.I).F_(this.b.a)},
$S:0}
A.cvR.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:18}
A.cvE.prototype={
$1(d){return D.cn5},
$S:z+0}
A.c8t.prototype={
$1(d){var x=this.a
return x.q(new A.c8s(x,d))},
$S:207}
A.c8s.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.c8u.prototype={
$1(d){var x=this.a
return x.q(new A.c8r(x,d))},
$S:100}
A.c8r.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.c8v.prototype={
$0(){var x,w,v,u=this.a
u.q(new A.c8q(u))
if(u.w!=null)return
x=B.aq(this.b,!1)
w=C.f.D(u.d.a.a)
v=C.f.D(u.e.a.a)
if(v.length===0)v=null
x.aj(new A.aIU(w,v,u.f,u.r))},
$S:0}
A.c8q.prototype={
$0(){var x=this.a
x.w=C.f.D(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cgp.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:36}
A.cgq.prototype={
$1(d){var x=this
return x.a.Lh(0,x.b,x.c,J.cYc(x.d,new A.cgo(d)))},
$S:z+1}
A.cgo.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cOx.prototype={
$1(d){return this.aGS(d)},
aGS(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&B.b()
x=7
return B.d(p.R("task_templates").cj(0),$async$$1)
case 7:s=f
r=B.A(y.N,y.c)
for(p=J.ar(s),o=y.P;p.t();){q=p.gE(p)
J.b6(r,B.a0(J.h(o.a(q),"id")),B.d4n(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGW
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1507}
A.cHp.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.i(w.e,x,x,x,x,C.aaq,x,x,x)],v)
w=w.f
if(C.f.D(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.Y,B.i(C.f.D(w),x,x,x,x,D.c4X,x,x,x)],v))}u.push(C.bC)
u.push(B.DG(D.aDJ,D.cba,new A.cHm(d),x))
if(this.b!=null)C.e.n(u,B.a([C.Y,B.ia(Q.aaA,new A.cHn(d),x)],v))
u.push(C.as)
u.push(B.cp(C.mq,x,x,new A.cHo(d),x,x))
return B.bD(!0,new B.R(C.Nv,B.C(u,C.J,C.j,C.L,0,C.v),x),x,C.a_,!0)},
$S:43}
A.cHm.prototype={
$0(){return B.aq(this.a,!1).aj("done")},
$S:0}
A.cHn.prototype={
$0(){return B.aq(this.a,!1).aj("open")},
$S:0}
A.cHo.prototype={
$0(){return B.aq(this.a,!1).bJ()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cDP,A.cDQ,A.cvH,A.cvJ,A.cvS,A.cvO,A.cvP,A.cvE,A.c8t,A.c8u,A.cgp,A.cgq,A.cgo,A.cOx,A.cHp])
w(A.aPu,B.fr)
w(A.a9n,B.dD)
w(A.aPt,B.dy)
x(B.bR,[A.cvT,A.cvK,A.cvL,A.cvG,A.cvM,A.cvF,A.cvN,A.cvQ,A.cvR,A.c8s,A.c8r,A.c8v,A.c8q,A.cHm,A.cHn,A.cHo])
w(A.cvI,B.cR)
w(A.aIU,B.H)
w(A.OC,B.J)
w(A.aIV,B.a_)
w(A.afa,B.en)})()
B.br(b.typeUniverse,JSON.parse('{"a9n":{"J":[],"e":[],"f":[]},"OC":{"J":[],"e":[],"f":[]},"aPt":{"a_":["a9n"]},"aIV":{"a_":["OC"]},"afa":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ax<t<nu>?>"),D:x("ax<dQ?>"),R:x("hU"),v:x("ed"),Z:x("nt"),e:x("F<a4<c,oH>>"),B:x("F<dQ?>"),E:x("r<ei>"),G:x("r<dQ>"),s:x("r<c>"),p:x("r<e>"),r:x("a4<c,oH>"),P:x("a4<c,@>"),U:x("ew<+(c,c),c>"),w:x("dn"),N:x("c"),I:x("tV"),z:x("rj"),c:x("oH"),A:x("a5<+(c,c)>"),g:x("aIU"),q:x("ds"),h:x("a4<c,@>?"),X:x("H?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDJ=new B.ba(C.d9,null,null,null,null,null)
D.aGJ=new G.Kc(!1,!1,null,null)
D.aGT=new B.i8(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdq=x([D.aGT],y.p)
D.aGL=new B.T3(D.bdq,0,null)
D.aGN=new B.i8(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGU=new B.i8(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGV=new E.Em("As vossas tarefas",null,null,null)
D.aGW=new E.Em("Pr\xf3ximas tarefas",null,null,null)
D.aGY=new E.Em("Feito",null,null,null)
D.aHd=new B.et("Nova",C.da,null)
D.aHp=new B.m4("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGW=new B.c3(C.cJ,[],B.w("c3<c,oH>"))
D.cfv=new B.D("Sugest\xf5es para ti",null,C.bv,null,null,null,null,null,null,null,null)
D.bKR=new B.R(C.bQ,D.cfv,null)
D.cdq=new B.D("Criadas por voc\xeas, sem limite.",null,C.W,null,null,null,null,null,null,null,null)
D.bL4=new B.R(C.jv,D.cdq,null)
D.atH=new B.a2(20,2,20,10)
D.ccj=new B.D("Com base no que tens procurado.",null,C.W,null,null,null,null,null,null,null,null)
D.bLH=new B.R(D.atH,D.ccj,null)
D.cjb=B.c8("afa")
D.bVF=new B.fm([D.cjb],B.w("fm<kv>"))
D.c4X=new B.M(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cba=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cn5=new A.OC(null)
D.cnm=new A.afa(null)
D.Ab=new A.aPu(0,"todo")
D.ad6=new A.aPu(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUs","dhk",()=>B.eE(new A.cOx(),null,!1,null,null,y.r))})()};
(a=>{a["cMPQEJR4eeU49pOWhjPJieoxAjQ="]=a.current})($__dart_deferred_initializers__);