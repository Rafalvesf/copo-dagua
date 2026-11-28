((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dIs(d){var x=B.eR(new B.eq(new B.a4(P.WW,new A.cHQ(d),y.A),new A.cHR(),y.U))
return x},
cHQ:function cHQ(d){this.a=d},
cHR:function cHR(){},
dy9(){return new A.aa_(null)},
aQe:function aQe(d,e){this.a=d
this.b=e},
aa_:function aa_(d){this.a=d},
aQd:function aQd(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cA5:function cA5(d){this.a=d},
czU:function czU(){},
czV:function czV(){},
czW:function czW(){},
cA4:function cA4(){},
czX:function czX(d,e){this.a=d
this.b=e},
czY:function czY(d){this.a=d},
czT:function czT(d){this.a=d},
czZ:function czZ(d){this.a=d},
czS:function czS(d){this.a=d},
cA_:function cA_(d,e){this.a=d
this.b=e},
cA0:function cA0(){},
cA1:function cA1(){},
cA2:function cA2(d,e){this.a=d
this.b=e},
cA3:function cA3(d,e){this.a=d
this.b=e},
czR:function czR(){},
aJB:function aJB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OV:function OV(d){this.a=d},
aJC:function aJC(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cbv:function cbv(d){this.a=d},
cbu:function cbu(d,e){this.a=d
this.b=e},
cbw:function cbw(d){this.a=d},
cbt:function cbt(d,e){this.a=d
this.b=e},
cbx:function cbx(d,e){this.a=d
this.b=e},
cbs:function cbs(d){this.a=d},
afR:function afR(d){this.a=d},
cjx:function cjx(){},
cjy:function cjy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjw:function cjw(d){this.a=d},
dE3(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dIs(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
dcy(d,e,f){var x,w=B.dy(e,0,null)
if(w.gdn(w)==="/partners"){x=w.gej().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ae(d).am("/partners",new M.Lo(x,!1),y.X)
return}B.ae(d).am(e,null,y.X)},
Qb(d,e,f){return A.dLf(d,e,f)},
dLf(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qb=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a1(0,$.zm().gaX(),y.I)
if(!f.ax)j.NT(f.a)
q=f.r
x=q==="parceiros"&&C.f.b2(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a1(0,$.cq(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aVg(s,p),$async$Qb)
case 11:r=h
if(d.e!=null){p=r.a
B.ae(d).am("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rG(d,e,p,null,null),$async$Qb)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a1(0,$.dm6().ge5(),y.e),$async$Qb)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dE3(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9j||l==null?18:19
break
case 18:x=20
return B.d(B.bW(null,new A.cLC(f,l),!1,d,!0,!1,null,y.N),$async$Qb)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.F_(f.a),$async$Qb)
case 24:if(d.e!=null)d.O(y.q).f.a2(B.c0(null,null,null,null,null,C.y,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.dcy(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9i)j.Ww(f.a)
A.dcy(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qb,w)},
cT2:function cT2(){},
cLC:function cLC(d,e){this.a=d
this.b=e},
cLz:function cLz(d){this.a=d},
cLA:function cLA(d){this.a=d},
cLB:function cLB(d){this.a=d},
aVg(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVg=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").aj(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",e).dQ(0),$async$aVg)
case 3:u=g
p=J.a7(u)
t=B.Z(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qb(d,t),$async$aVg)
case 4:r=g
p=s==null
q=B.C(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eA(r,q,t,B.C(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.jX)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVg,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[139]
I=c[161]
E=c[164]
K=c[188]
L=c[121]
M=c[134]
G=c[86]
N=c[253]
A=a.updateHolder(c[52],A)
D=c[410]
O=c[79]
P=c[411]
H=c[171]
Q=c[337]
A.aQe.prototype={
I(){return"_TasksTab."+this.b}}
A.aa_.prototype={
R(){return new A.aQd(D.Ag)}}
A.aQd.prototype={
ac(){this.ap()
B.jk(new A.cA5(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().G($.zm(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a4<1>")
C.e.n(e,new B.a4(d,new A.czU(),a1))
C.e.cE(e,new A.czV())
x=f.b
w=x.length+new B.a4(d,new A.czW(),a1).gA(0)
v=w+e.length
u=new A.cA4()
t=y.p
s=B.a([new B.qO(new A.czX(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ej("Por fazer",r===D.Ag,w,new A.czY(h),g),new B.ej("Feito",r===D.acP,e.length,new A.czZ(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pp(s,g),D.aHd,new K.mc(r,16,!1,g),B.vh(g,g,"O vosso plano",C.hF,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ag){e=B.a([D.cnC,D.aGM],t)
if(x.length===0)e.push(D.aGD)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.H)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9k?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.B(C.e.gL(C.f.eW(k,B.aS("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a0(k," \xb7 ")
i=n.ax?g:D.aH1
s.push(new B.i9(D.aGB,n.e,k,i,!0,new A.cA_(h,n),!1,g))}e.push(B.eV(s,0))}e.push(D.aGL)
e.push(D.bKV)
x=B.a([],t)
if(!new B.a4(d,new A.cA0(),a1).gX(0).t())x.push(D.aGE)
else for(d=C.e.gX(d),a0=new B.ha(d,new A.cA1(),a0.i("ha<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i9(new G.Ks(!1,!1,new A.cA2(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eV(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGK)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.i9(N.PZ,n.e,new A.cA3(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGO,B.eV(d,0)],t))}return B.cP(g,C.d1,B.op(D.bVD,40,q,g,!0,!1),!0,g)},
Lg(d,e){return this.bj3(d,e)},
bj3(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$Lg=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bW(null,new A.czR(),!1,d,!0,!0,null,y.g),$async$Lg)
case 3:q=g
if(q==null){x=1
break}u=e.a1(0,$.zm().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.MA(q.d,s,r,t),$async$Lg)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lg,w)}}
A.aJB.prototype={}
A.OV.prototype={
R(){var x=$.aa()
return new A.aJC(new B.aE(C.aj,x),new B.aE(C.aj,x))}}
A.aJC.prototype={
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.aO(d,w,y.w).w
return B.dT(B.A(B.a([B.h("Nova tarefa",w,w,w,w,B.av(d).ok.r,w,w,w),C.a0,new H.mB("T\xedtulo",x.d,x.w,w,w,w),C.Q,new H.mB("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.Q,L.d3l("Prazo (opcional)",new A.cbv(x),x.f),C.aB,new O.a1q(x.r,new A.cbw(x),w),C.a0,new B.fX("Adicionar",new A.cbx(x,d),!1,w)],y.p),C.E,C.h,C.J),C.y,w,new B.a3(20,20,20,v.f.d+20),w,C.av)}}
A.afR.prototype={
Lr(d,e,f,g){return this.bas(0,e,f,g)},
bas(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Lr=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cTj(g.a)
x=3
return B.d(f.a1(0,$.wA().$1(g.a).ge5(),y.B),$async$Lr)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Ud(e,u,!1),$async$Lr)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lr,w)},
bb(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cF($.cq(),new A.cjx(),y.v,s),s)
s=e.G($.cUa().$1(new B.YY(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dn(x))return C.ap
s=B.a([],y.G)
for(w=J.cc(x),v=w.gX(x),u=y.D;v.t();){t=v.gE(v)
t=e.G($.wA().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aL(y.N)
for(w=w.gX(x);w.t();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.S(C.CJ,B.A(B.a([D.bKI,D.bLv,new F.Lm(s,new A.cjy(this,d,e,x),v,null)],y.p),C.E,C.h,C.l),null)}}
var z=a.updateTypes(["OV(N)","~(dS)","B(nz)"])
A.cHQ.prototype={
$1(d){return d.a===this.a},
$S:460}
A.cHR.prototype={
$1(d){return d.b},
$S:1509}
A.cA5.prototype={
$0(){return this.a.gS().a1(0,$.zm().gaX(),y.I).jF()},
$S:1}
A.czU.prototype={
$1(d){return d.x===C.z3},
$S:62}
A.czV.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bE(0,x==null?d.ch:x)},
$S:177}
A.czW.prototype={
$1(d){return d.x===C.io},
$S:62}
A.cA4.prototype={
$1(d){return C.f.aV(C.j.k(B.ay(d)),2,"0")+"/"+C.f.aV(C.j.k(B.an(d)),2,"0")},
$S:155}
A.czX.prototype={
$0(){var x=this.a
return x.Lg(this.b,x.gS())},
$S:0}
A.czY.prototype={
$0(){var x=this.a
return x.p(new A.czT(x))},
$S:0}
A.czT.prototype={
$0(){return this.a.w=D.Ag},
$S:0}
A.czZ.prototype={
$0(){var x=this.a
return x.p(new A.czS(x))},
$S:0}
A.czS.prototype={
$0(){return this.a.w=D.acP},
$S:0}
A.cA_.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qb(w,x.gS(),this.b)},
$S:0}
A.cA0.prototype={
$1(d){return d.x===C.io},
$S:62}
A.cA1.prototype={
$1(d){return d.x===C.io},
$S:62}
A.cA2.prototype={
$0(){return this.a.gS().a1(0,$.zm().gaX(),y.I).F_(this.b.a)},
$S:0}
A.cA3.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:18}
A.czR.prototype={
$1(d){return D.cnm},
$S:z+0}
A.cbv.prototype={
$1(d){var x=this.a
return x.p(new A.cbu(x,d))},
$S:505}
A.cbu.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cbw.prototype={
$1(d){var x=this.a
return x.p(new A.cbt(x,d))},
$S:126}
A.cbt.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cbx.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cbs(u))
if(u.w!=null)return
x=B.am(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.ae(new A.aJB(w,v,u.f,u.r))},
$S:0}
A.cbs.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cjx.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:38}
A.cjy.prototype={
$1(d){var x=this
return x.a.Lr(0,x.b,x.c,J.d1L(x.d,new A.cjw(d)))},
$S:z+1}
A.cjw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cT2.prototype={
$1(d){return this.aHj(d)},
aHj(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").cl(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ar(s),o=y.P;p.t();){q=p.gE(p)
J.b2(r,B.Z(J.i(o.a(q),"id")),B.d8V(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGN
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
A.cLC.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aap,x,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.R,B.h(C.f.B(w),x,x,x,x,D.c53,x,x,x)],v))}u.push(C.bE)
u.push(B.A4(D.aDx,D.cbo,new A.cLz(d),x))
if(this.b!=null)C.e.n(u,B.a([C.R,B.hh(Q.aaA,new A.cLA(d),x)],v))
u.push(C.aq)
u.push(B.cw(C.mt,x,x,new A.cLB(d),x,x))
return B.bD(!0,new B.S(C.Nv,B.A(u,C.E,C.h,C.J),x),x,C.a_,!0)},
$S:44}
A.cLz.prototype={
$0(){return B.am(this.a,!1).ae("done")},
$S:0}
A.cLA.prototype={
$0(){return B.am(this.a,!1).ae("open")},
$S:0}
A.cLB.prototype={
$0(){return B.am(this.a,!1).bp()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.cHQ,A.cHR,A.czU,A.czW,A.cA4,A.cA0,A.cA1,A.czR,A.cbv,A.cbw,A.cjx,A.cjy,A.cjw,A.cT2,A.cLC])
w(A.aQe,B.eX)
w(A.aa_,B.dA)
w(A.aQd,B.dv)
x(B.bP,[A.cA5,A.czX,A.czY,A.czT,A.czZ,A.czS,A.cA_,A.cA2,A.cA3,A.cbu,A.cbt,A.cbx,A.cbs,A.cLz,A.cLA,A.cLB])
w(A.czV,B.cK)
w(A.aJB,B.J)
w(A.OV,B.G)
w(A.aJC,B.Y)
w(A.afR,B.et)})()
B.br(b.typeUniverse,JSON.parse('{"aa_":{"G":[],"e":[],"f":[]},"OV":{"G":[],"e":[],"f":[]},"aQd":{"Y":["aa_"]},"aJC":{"Y":["OV"]},"afR":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("az<t<nz>?>"),D:x("az<dS?>"),R:x("eA"),v:x("ec"),Z:x("ny"),e:x("F<a6<c,oO>>"),B:x("F<dS?>"),E:x("r<ej>"),G:x("r<dS>"),s:x("r<c>"),p:x("r<e>"),r:x("a6<c,oO>"),P:x("a6<c,@>"),U:x("eq<+(c,c),c>"),w:x("dh"),N:x("c"),I:x("tX"),z:x("Bw"),c:x("oO"),A:x("a4<+(c,c)>"),g:x("aJB"),q:x("dr"),h:x("a6<c,@>?"),X:x("J?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDx=new B.b7(C.dr,null,null,null,null,null)
D.aGB=new G.Ks(!1,!1,null,null)
D.aGJ=new B.i9(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdj=x([D.aGJ],y.p)
D.aGD=new B.Tn(D.bdj,0,null)
D.aGE=new B.i9(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGK=new B.i9(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGL=new E.Et("As vossas tarefas",null,null,null)
D.aGM=new E.Et("Pr\xf3ximas tarefas",null,null,null)
D.aGO=new E.Et("Feito",null,null,null)
D.aH1=new B.eo("Nova",C.ds,null)
D.aHd=new B.md("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGN=new B.c3(C.cI,[],B.w("c3<c,oO>"))
D.cg0=new B.D("Sugest\xf5es para ti",null,C.bl,null,null,null,null,null,null,null,null)
D.bKI=new B.S(C.bL,D.cg0,null)
D.cdT=new B.D("Criadas por voc\xeas, sem limite.",null,C.M,null,null,null,null,null,null,null,null)
D.bKV=new B.S(C.jD,D.cdT,null)
D.atp=new B.a3(20,2,20,10)
D.ccE=new B.D("Com base no que tens procurado.",null,C.M,null,null,null,null,null,null,null,null)
D.bLv=new B.S(D.atp,D.ccE,null)
D.cjs=B.c6("afR")
D.bVD=new B.fp([D.cjs],B.w("fp<kz>"))
D.c53=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbo=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cnm=new A.OV(null)
D.cnC=new A.afR(null)
D.Ag=new A.aQe(0,"todo")
D.acP=new A.aQe(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZz","dm6",()=>B.ey(new A.cT2(),null,!1,null,null,y.r))})()};
(a=>{a["CGvxqFskO16lWzoOy0ngKcKVrfo="]=a.current})($__dart_deferred_initializers__);