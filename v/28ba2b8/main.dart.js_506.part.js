((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dIt(d){var x=B.eR(new B.eq(new B.a4(P.WT,new A.cHP(d),y.A),new A.cHQ(),y.U))
return x},
cHP:function cHP(d){this.a=d},
cHQ:function cHQ(){},
dy9(){return new A.a9X(null)},
aQc:function aQc(d,e){this.a=d
this.b=e},
a9X:function a9X(d){this.a=d},
aQb:function aQb(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cA4:function cA4(d){this.a=d},
czT:function czT(){},
czU:function czU(){},
czV:function czV(){},
cA3:function cA3(){},
czW:function czW(d,e){this.a=d
this.b=e},
czX:function czX(d){this.a=d},
czS:function czS(d){this.a=d},
czY:function czY(d){this.a=d},
czR:function czR(d){this.a=d},
czZ:function czZ(d,e){this.a=d
this.b=e},
cA_:function cA_(){},
cA0:function cA0(){},
cA1:function cA1(d,e){this.a=d
this.b=e},
cA2:function cA2(d,e){this.a=d
this.b=e},
czQ:function czQ(){},
aJz:function aJz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OV:function OV(d){this.a=d},
aJA:function aJA(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cbu:function cbu(d){this.a=d},
cbt:function cbt(d,e){this.a=d
this.b=e},
cbv:function cbv(d){this.a=d},
cbs:function cbs(d,e){this.a=d
this.b=e},
cbw:function cbw(d,e){this.a=d
this.b=e},
cbr:function cbr(d){this.a=d},
afO:function afO(d){this.a=d},
cjw:function cjw(){},
cjx:function cjx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjv:function cjv(d){this.a=d},
dE3(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dIt(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
dcy(d,e,f){var x,w=B.dy(e,0,null)
if(w.gdn(w)==="/partners"){x=w.gej().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ae(d).am("/partners",new M.Lp(x,!1),y.X)
return}B.ae(d).am(e,null,y.X)},
Qb(d,e,f){return A.dLg(d,e,f)},
dLg(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
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
return B.d(A.aVe(s,p),$async$Qb)
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
return B.d(B.rF(d,e,p,null,null),$async$Qb)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a1(0,$.dm6().ge_(),y.e),$async$Qb)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dE3(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9h||l==null?18:19
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
case 19:if(q===C.a9g)j.Ww(f.a)
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
aVe(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVe=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.P().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").aj(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",e).dQ(0),$async$aVe)
case 3:u=g
p=J.a7(u)
t=B.Z(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qb(d,t),$async$aVe)
case 4:r=g
p=s==null
q=B.C(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eA(r,q,t,B.C(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.jX)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVe,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[139]
I=c[161]
E=c[164]
K=c[188]
L=c[122]
M=c[134]
G=c[86]
N=c[253]
A=a.updateHolder(c[52],A)
D=c[409]
O=c[79]
P=c[410]
H=c[171]
Q=c[337]
A.aQc.prototype={
I(){return"_TasksTab."+this.b}}
A.a9X.prototype={
R(){return new A.aQb(D.Af)}}
A.aQb.prototype={
ac(){this.ap()
B.jl(new A.cA4(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().G($.zm(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a4<1>")
C.e.n(e,new B.a4(d,new A.czT(),a1))
C.e.cE(e,new A.czU())
x=f.b
w=x.length+new B.a4(d,new A.czV(),a1).gA(0)
v=w+e.length
u=new A.cA3()
t=y.p
s=B.a([new B.qO(new A.czW(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ek("Por fazer",r===D.Af,w,new A.czX(h),g),new B.ek("Feito",r===D.acO,e.length,new A.czY(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pq(s,g),D.aHa,new K.me(r,16,!1,g),B.vg(g,g,"O vosso plano",C.hE,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Af){e=B.a([D.cnt,D.aGJ],t)
if(x.length===0)e.push(D.aGA)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.H)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9i?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.B(C.e.gJ(C.f.eW(k,B.aS("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a0(k," \xb7 ")
i=n.ax?g:D.aGZ
s.push(new B.i9(D.aGy,n.e,k,i,!0,new A.czZ(h,n),!1,g))}e.push(B.eV(s,0))}e.push(D.aGI)
e.push(D.bKU)
x=B.a([],t)
if(!new B.a4(d,new A.cA_(),a1).gX(0).t())x.push(D.aGB)
else for(d=C.e.gX(d),a0=new B.ha(d,new A.cA0(),a0.i("ha<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i9(new G.Kt(!1,!1,new A.cA1(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eV(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGH)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.i9(N.PW,n.e,new A.cA2(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGL,B.eV(d,0)],t))}return B.cQ(g,C.d1,B.oq(D.bVD,40,q,g,!0,!1),!0,g)},
Lg(d,e){return this.bj2(d,e)},
bj2(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$Lg=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bW(null,new A.czQ(),!1,d,!0,!0,null,y.g),$async$Lg)
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
A.aJz.prototype={}
A.OV.prototype={
R(){var x=$.aa()
return new A.aJA(new B.aE(C.aj,x),new B.aE(C.aj,x))}}
A.aJA.prototype={
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.aO(d,w,y.w).w
return B.dT(B.B(B.a([B.h("Nova tarefa",w,w,w,w,B.av(d).ok.r,w,w,w),C.a0,new H.mB("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.mB("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d3m("Prazo (opcional)",new A.cbu(x),x.f),C.aB,new O.a1p(x.r,new A.cbv(x),w),C.a0,new B.fX("Adicionar",new A.cbw(x,d),!1,w)],y.p),C.E,C.h,C.J),C.y,w,new B.a3(20,20,20,v.f.d+20),w,C.av)}}
A.afO.prototype={
Lr(d,e,f,g){return this.bar(0,e,f,g)},
bar(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Lr=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cTj(g.a)
x=3
return B.d(f.a1(0,$.wA().$1(g.a).ge_(),y.B),$async$Lr)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Ud(e,u,!1),$async$Lr)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lr,w)},
bb(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cG($.cq(),new A.cjw(),y.v,s),s)
s=e.G($.cUa().$1(new B.YZ(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dn(x))return C.ap
s=B.a([],y.G)
for(w=J.cc(x),v=w.gX(x),u=y.D;v.t();){t=v.gE(v)
t=e.G($.wA().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aL(y.N)
for(w=w.gX(x);w.t();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.S(C.CI,B.B(B.a([D.bKI,D.bLt,new F.Ln(s,new A.cjx(this,d,e,x),v,null)],y.p),C.E,C.h,C.l),null)}}
var z=a.updateTypes(["OV(N)","~(dS)","z(nC)"])
A.cHP.prototype={
$1(d){return d.a===this.a},
$S:460}
A.cHQ.prototype={
$1(d){return d.b},
$S:1512}
A.cA4.prototype={
$0(){return this.a.gS().a1(0,$.zm().gaX(),y.I).jF()},
$S:1}
A.czT.prototype={
$1(d){return d.x===C.z2},
$S:62}
A.czU.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bE(0,x==null?d.ch:x)},
$S:185}
A.czV.prototype={
$1(d){return d.x===C.io},
$S:62}
A.cA3.prototype={
$1(d){return C.f.aV(C.j.k(B.ay(d)),2,"0")+"/"+C.f.aV(C.j.k(B.an(d)),2,"0")},
$S:155}
A.czW.prototype={
$0(){var x=this.a
return x.Lg(this.b,x.gS())},
$S:0}
A.czX.prototype={
$0(){var x=this.a
return x.p(new A.czS(x))},
$S:0}
A.czS.prototype={
$0(){return this.a.w=D.Af},
$S:0}
A.czY.prototype={
$0(){var x=this.a
return x.p(new A.czR(x))},
$S:0}
A.czR.prototype={
$0(){return this.a.w=D.acO},
$S:0}
A.czZ.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qb(w,x.gS(),this.b)},
$S:0}
A.cA_.prototype={
$1(d){return d.x===C.io},
$S:62}
A.cA0.prototype={
$1(d){return d.x===C.io},
$S:62}
A.cA1.prototype={
$0(){return this.a.gS().a1(0,$.zm().gaX(),y.I).F_(this.b.a)},
$S:0}
A.cA2.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:18}
A.czQ.prototype={
$1(d){return D.cnd},
$S:z+0}
A.cbu.prototype={
$1(d){var x=this.a
return x.p(new A.cbt(x,d))},
$S:505}
A.cbt.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cbv.prototype={
$1(d){var x=this.a
return x.p(new A.cbs(x,d))},
$S:126}
A.cbs.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cbw.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cbr(u))
if(u.w!=null)return
x=B.am(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.ae(new A.aJz(w,v,u.f,u.r))},
$S:0}
A.cbr.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cjw.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:38}
A.cjx.prototype={
$1(d){var x=this
return x.a.Lr(0,x.b,x.c,J.d1M(x.d,new A.cjv(d)))},
$S:z+1}
A.cjv.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cT2.prototype={
$1(d){return this.aHi(d)},
aHi(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").cl(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ar(s),o=y.P;p.t();){q=p.gE(p)
J.b2(r,B.Z(J.i(o.a(q),"id")),B.d8W(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGM
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1513}
A.cLC.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aao,x,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.Q,B.h(C.f.B(w),x,x,x,x,D.c51,x,x,x)],v))}u.push(C.bM)
u.push(B.A4(D.aDu,D.cbi,new A.cLz(d),x))
if(this.b!=null)C.e.n(u,B.a([C.Q,B.hh(Q.aaz,new A.cLA(d),x)],v))
u.push(C.ar)
u.push(B.cw(C.ms,x,x,new A.cLB(d),x,x))
return B.bD(!0,new B.S(C.Ns,B.B(u,C.E,C.h,C.J),x),x,C.Z,!0)},
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
x(B.bw,[A.cHP,A.cHQ,A.czT,A.czV,A.cA3,A.cA_,A.cA0,A.czQ,A.cbu,A.cbv,A.cjw,A.cjx,A.cjv,A.cT2,A.cLC])
w(A.aQc,B.eX)
w(A.a9X,B.dA)
w(A.aQb,B.dv)
x(B.bO,[A.cA4,A.czW,A.czX,A.czS,A.czY,A.czR,A.czZ,A.cA1,A.cA2,A.cbt,A.cbs,A.cbw,A.cbr,A.cLz,A.cLA,A.cLB])
w(A.czU,B.cL)
w(A.aJz,B.J)
w(A.OV,B.G)
w(A.aJA,B.Y)
w(A.afO,B.et)})()
B.br(b.typeUniverse,JSON.parse('{"a9X":{"G":[],"e":[],"f":[]},"OV":{"G":[],"e":[],"f":[]},"aQb":{"Y":["a9X"]},"aJA":{"Y":["OV"]},"afO":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("az<t<nC>?>"),D:x("az<dS?>"),R:x("eA"),v:x("ec"),Z:x("nB"),e:x("F<a6<c,oP>>"),B:x("F<dS?>"),E:x("r<ek>"),G:x("r<dS>"),s:x("r<c>"),p:x("r<e>"),r:x("a6<c,oP>"),P:x("a6<c,@>"),U:x("eq<+(c,c),c>"),w:x("dh"),N:x("c"),I:x("tW"),z:x("Bw"),c:x("oP"),A:x("a4<+(c,c)>"),g:x("aJz"),q:x("dr"),h:x("a6<c,@>?"),X:x("J?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDu=new B.b7(C.ds,null,null,null,null,null)
D.aGy=new G.Kt(!1,!1,null,null)
D.aGG=new B.i9(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdh=x([D.aGG],y.p)
D.aGA=new B.Tn(D.bdh,0,null)
D.aGB=new B.i9(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGH=new B.i9(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGI=new E.Ev("As vossas tarefas",null,null,null)
D.aGJ=new E.Ev("Pr\xf3ximas tarefas",null,null,null)
D.aGL=new E.Ev("Feito",null,null,null)
D.aGZ=new B.ed("Nova",C.dd,null)
D.aHa=new B.lL("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGM=new B.c3(C.cH,[],B.w("c3<c,oP>"))
D.cfT=new B.D("Sugest\xf5es para ti",null,C.bm,null,null,null,null,null,null,null,null)
D.bKI=new B.S(C.bO,D.cfT,null)
D.cdL=new B.D("Criadas por voc\xeas, sem limite.",null,C.M,null,null,null,null,null,null,null,null)
D.bKU=new B.S(C.jD,D.cdL,null)
D.atm=new B.a3(20,2,20,10)
D.ccx=new B.D("Com base no que tens procurado.",null,C.M,null,null,null,null,null,null,null,null)
D.bLt=new B.S(D.atm,D.ccx,null)
D.cjj=B.c6("afO")
D.bVD=new B.fp([D.cjj],B.w("fp<ky>"))
D.c51=new B.Q(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbi=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cnd=new A.OV(null)
D.cnt=new A.afO(null)
D.Af=new A.aQc(0,"todo")
D.acO=new A.aQc(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZB","dm6",()=>B.ey(new A.cT2(),null,!1,null,null,y.r))})()};
(a=>{a["g0WaRw5D1y5EiFBPBWWiTK7/w3E="]=a.current})($__dart_deferred_initializers__);