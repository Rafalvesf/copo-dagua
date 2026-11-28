((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dJw(d){var x=B.eL(new B.er(new B.a6(P.WZ,new A.cIA(d),y.A),new A.cIB(),y.U))
return x},
cIA:function cIA(d){this.a=d},
cIB:function cIB(){},
dzb(){return new A.aa0(null)},
aQm:function aQm(d,e){this.a=d
this.b=e},
aa0:function aa0(d){this.a=d},
aQl:function aQl(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cAK:function cAK(d){this.a=d},
cAy:function cAy(){},
cAz:function cAz(){},
cAA:function cAA(){},
cAJ:function cAJ(){},
cAB:function cAB(d,e){this.a=d
this.b=e},
cAC:function cAC(d){this.a=d},
cAx:function cAx(d){this.a=d},
cAD:function cAD(d){this.a=d},
cAw:function cAw(d){this.a=d},
cAE:function cAE(d,e){this.a=d
this.b=e},
cAF:function cAF(){},
cAG:function cAG(){},
cAH:function cAH(d,e){this.a=d
this.b=e},
cAI:function cAI(d,e){this.a=d
this.b=e},
cAv:function cAv(){},
aJK:function aJK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OX:function OX(d){this.a=d},
aJL:function aJL(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cbM:function cbM(d){this.a=d},
cbL:function cbL(d,e){this.a=d
this.b=e},
cbN:function cbN(d){this.a=d},
cbK:function cbK(d,e){this.a=d
this.b=e},
cbO:function cbO(d,e){this.a=d
this.b=e},
cbJ:function cbJ(d){this.a=d},
afU:function afU(d){this.a=d},
ck9:function ck9(){},
cka:function cka(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ck8:function ck8(d){this.a=d},
dF5(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dJw(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
ddw(d,e,f){var x,w=B.dy(e,0,null)
if(w.gdn(w)==="/partners"){x=w.gej().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ad(d).ak("/partners",new M.Lr(x,!1),y.X)
return}B.ad(d).ak(e,null,y.X)},
Qd(d,e,f){return A.dMj(d,e,f)},
dMj(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qd=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a_(0,$.zn().gaX(),y.I)
if(!f.ax)j.NX(f.a)
q=f.r
x=q==="parceiros"&&C.f.b1(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a_(0,$.cr(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aVo(s,p),$async$Qd)
case 11:r=h
if(d.e!=null){p=r.a
B.ad(d).ak("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rG(d,e,p,null,null),$async$Qd)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a_(0,$.dn7().gdN(),y.e),$async$Qd)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dF5(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9p||l==null?18:19
break
case 18:x=20
return B.d(B.bW(null,new A.cMp(f,l),!1,d,!0,!1,null,y.N),$async$Qd)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.F1(f.a),$async$Qd)
case 24:if(d.e!=null)d.O(y.q).f.a2(B.bZ(null,null,null,null,null,C.y,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.ddw(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9o)j.WC(f.a)
A.ddw(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qd,w)},
cTU:function cTU(){},
cMp:function cMp(d,e){this.a=d
this.b=e},
cMm:function cMm(d){this.a=d},
cMn:function cMn(d){this.a=d},
cMo:function cMo(d){this.a=d},
aVo(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVo=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.P().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").ai(0,"partner_id, partner_profiles(business_name, cover_photo_url)").U("id",e).dR(0),$async$aVo)
case 3:u=g
p=J.a7(u)
t=B.a_(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qd(d,t),$async$aVo)
case 4:r=g
p=s==null
q=B.C(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eC(r,q,t,B.C(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.jX)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVo,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[139]
I=c[161]
E=c[149]
K=c[186]
L=c[122]
M=c[134]
G=c[86]
N=c[251]
A=a.updateHolder(c[52],A)
D=c[408]
O=c[79]
P=c[409]
H=c[169]
Q=c[335]
A.aQm.prototype={
I(){return"_TasksTab."+this.b}}
A.aa0.prototype={
R(){return new A.aQl(D.An)}}
A.aQl.prototype={
ac(){this.ap()
B.jl(new A.cAK(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().G($.zn(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cAy(),a1))
C.e.cr(e,new A.cAz())
x=f.b
w=x.length+new B.a6(d,new A.cAA(),a1).gA(0)
v=w+e.length
u=new A.cAJ()
t=y.p
s=B.a([new B.qP(new A.cAB(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ek("Por fazer",r===D.An,w,new A.cAC(h),g),new B.ek("Feito",r===D.ad_,e.length,new A.cAD(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pt(s,g),D.aHt,new K.me(r,16,!1,g),B.vi(g,g,"O vosso plano",C.hG,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.An){e=B.a([D.cnT,D.aH3],t)
if(x.length===0)e.push(D.aGU)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.H)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9q?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.B(C.e.gJ(C.f.eW(k,B.aS("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a1(k," \xb7 ")
i=n.ax?g:D.aHh
s.push(new B.ir(D.aGS,n.e,k,i,!0,new A.cAE(h,n),!1,g))}e.push(B.eT(s,0))}e.push(D.aH2)
e.push(D.bLd)
x=B.a([],t)
if(!new B.a6(d,new A.cAF(),a1).gX(0).t())x.push(D.aGV)
else for(d=C.e.gX(d),a0=new B.ha(d,new A.cAG(),a0.i("ha<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.ir(new G.Kt(!1,!1,new A.cAH(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eT(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aH_)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.ir(N.Q1,n.e,new A.cAI(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aH1,B.eT(d,0)],t))}return B.cQ(g,C.cV,B.nN(D.bW_,40,q,g,!0,!1),!0,g)},
Lj(d,e){return this.bjk(d,e)},
bjk(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$Lj=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bW(null,new A.cAv(),!1,d,!0,!0,null,y.g),$async$Lj)
case 3:q=g
if(q==null){x=1
break}u=e.a_(0,$.zn().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.ME(q.d,s,r,t),$async$Lj)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lj,w)}}
A.aJK.prototype={}
A.OX.prototype={
R(){var x=$.aa()
return new A.aJL(new B.aE(C.aj,x),new B.aE(C.aj,x))}}
A.aJL.prototype={
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.aO(d,w,y.w).w
return B.dT(B.z(B.a([B.h("Nova tarefa",w,w,w,w,B.av(d).ok.r,w,w,w),C.a_,new H.mC("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.mC("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d4f("Prazo (opcional)",new A.cbM(x),x.f),C.aB,new O.a1t(x.r,new A.cbN(x),w),C.a_,new B.fX("Adicionar",new A.cbO(x,d),!1,w)],y.p),C.E,C.h,C.J),C.y,w,new B.a3(20,20,20,v.f.d+20),w,C.av)}}
A.afU.prototype={
Lu(d,e,f,g){return this.baG(0,e,f,g)},
baG(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Lu=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cUa(g.a)
x=3
return B.d(f.a_(0,$.wC().$1(g.a).gdN(),y.B),$async$Lu)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Ue(e,u,!1),$async$Lu)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lu,w)},
ba(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cH($.cr(),new A.ck9(),y.v,s),s)
s=e.G($.cV1().$1(new B.Z0(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.di(x))return C.ap
s=B.a([],y.G)
for(w=J.c8(x),v=w.gX(x),u=y.D;v.t();){t=v.gE(v)
t=e.G($.wC().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aL(y.N)
for(w=w.gX(x);w.t();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.S(C.CR,B.z(B.a([D.bL1,D.bLP,new F.Ln(s,new A.cka(this,d,e,x),v,null)],y.p),C.E,C.h,C.l),null)}}
var z=a.updateTypes(["OX(N)","~(dH)","B(nD)"])
A.cIA.prototype={
$1(d){return d.a===this.a},
$S:462}
A.cIB.prototype={
$1(d){return d.b},
$S:1519}
A.cAK.prototype={
$0(){return this.a.gS().a_(0,$.zn().gaX(),y.I).jF()},
$S:1}
A.cAy.prototype={
$1(d){return d.x===C.z8},
$S:62}
A.cAz.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bC(0,x==null?d.ch:x)},
$S:163}
A.cAA.prototype={
$1(d){return d.x===C.ip},
$S:62}
A.cAJ.prototype={
$1(d){return C.f.aU(C.j.k(B.ay(d)),2,"0")+"/"+C.f.aU(C.j.k(B.an(d)),2,"0")},
$S:154}
A.cAB.prototype={
$0(){var x=this.a
return x.Lj(this.b,x.gS())},
$S:0}
A.cAC.prototype={
$0(){var x=this.a
return x.p(new A.cAx(x))},
$S:0}
A.cAx.prototype={
$0(){return this.a.w=D.An},
$S:0}
A.cAD.prototype={
$0(){var x=this.a
return x.p(new A.cAw(x))},
$S:0}
A.cAw.prototype={
$0(){return this.a.w=D.ad_},
$S:0}
A.cAE.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qd(w,x.gS(),this.b)},
$S:0}
A.cAF.prototype={
$1(d){return d.x===C.ip},
$S:62}
A.cAG.prototype={
$1(d){return d.x===C.ip},
$S:62}
A.cAH.prototype={
$0(){return this.a.gS().a_(0,$.zn().gaX(),y.I).F1(this.b.a)},
$S:0}
A.cAI.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:18}
A.cAv.prototype={
$1(d){return D.cnD},
$S:z+0}
A.cbM.prototype={
$1(d){var x=this.a
return x.p(new A.cbL(x,d))},
$S:507}
A.cbL.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cbN.prototype={
$1(d){var x=this.a
return x.p(new A.cbK(x,d))},
$S:130}
A.cbK.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cbO.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cbJ(u))
if(u.w!=null)return
x=B.am(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.ae(new A.aJK(w,v,u.f,u.r))},
$S:0}
A.cbJ.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.ck9.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:38}
A.cka.prototype={
$1(d){var x=this
return x.a.Lu(0,x.b,x.c,J.d2F(x.d,new A.ck8(d)))},
$S:z+1}
A.ck8.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cTU.prototype={
$1(d){return this.aHw(d)},
aHw(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").cm(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ap(s),o=y.P;p.t();){q=p.gE(p)
J.b2(r,B.a_(J.i(o.a(q),"id")),B.d9T(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bH5
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1520}
A.cMp.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aaw,x,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.Q,B.h(C.f.B(w),x,x,x,x,D.c5n,x,x,x)],v))}u.push(C.bN)
u.push(B.A5(D.aDP,D.cbF,new A.cMm(d),x))
if(this.b!=null)C.e.n(u,B.a([C.Q,B.hi(Q.aaH,new A.cMn(d),x)],v))
u.push(C.as)
u.push(B.cA(C.mu,x,x,new A.cMo(d),x,x))
return B.bB(!0,new B.S(C.Nx,B.z(u,C.E,C.h,C.J),x),x,C.Z,!0)},
$S:42}
A.cMm.prototype={
$0(){return B.am(this.a,!1).ae("done")},
$S:0}
A.cMn.prototype={
$0(){return B.am(this.a,!1).ae("open")},
$S:0}
A.cMo.prototype={
$0(){return B.am(this.a,!1).bm()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cIA,A.cIB,A.cAy,A.cAA,A.cAJ,A.cAF,A.cAG,A.cAv,A.cbM,A.cbN,A.ck9,A.cka,A.ck8,A.cTU,A.cMp])
w(A.aQm,B.f_)
w(A.aa0,B.dA)
w(A.aQl,B.dv)
x(B.bQ,[A.cAK,A.cAB,A.cAC,A.cAx,A.cAD,A.cAw,A.cAE,A.cAH,A.cAI,A.cbL,A.cbK,A.cbO,A.cbJ,A.cMm,A.cMn,A.cMo])
w(A.cAz,B.cL)
w(A.aJK,B.K)
w(A.OX,B.G)
w(A.aJL,B.Y)
w(A.afU,B.ex)})()
B.bu(b.typeUniverse,JSON.parse('{"aa0":{"G":[],"e":[],"f":[]},"OX":{"G":[],"e":[],"f":[]},"aQl":{"Y":["aa0"]},"aJL":{"Y":["OX"]},"afU":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.x
return{F:x("az<t<nD>?>"),D:x("az<dH?>"),R:x("eC"),v:x("ee"),Z:x("nC"),e:x("F<a5<c,oR>>"),B:x("F<dH?>"),E:x("r<ek>"),G:x("r<dH>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oR>"),P:x("a5<c,@>"),U:x("er<+(c,c),c>"),w:x("dh"),N:x("c"),I:x("tY"),z:x("By"),c:x("oR"),A:x("a6<+(c,c)>"),g:x("aJK"),q:x("dr"),h:x("a5<c,@>?"),X:x("K?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDP=new B.b8(C.dt,null,null,null,null,null)
D.aGS=new G.Kt(!1,!1,null,null)
D.aGZ=new B.ir(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdA=x([D.aGZ],y.p)
D.aGU=new B.Tn(D.bdA,0,null)
D.aGV=new B.ir(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aH_=new B.ir(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aH1=new E.Ew("Feito",null)
D.aH2=new E.Ew("As vossas tarefas",null)
D.aH3=new E.Ew("Pr\xf3ximas tarefas",null)
D.aHh=new B.dW("Nova",C.d0,null)
D.aHt=new B.lg("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bH5=new B.c4(C.cJ,[],B.x("c4<c,oR>"))
D.cgh=new B.D("Sugest\xf5es para ti",null,C.bk,null,null,null,null,null,null,null,null)
D.bL1=new B.S(C.bI,D.cgh,null)
D.ce6=new B.D("Criadas por voc\xeas, sem limite.",null,C.L,null,null,null,null,null,null,null,null)
D.bLd=new B.S(C.kv,D.ce6,null)
D.atA=new B.a3(20,2,20,10)
D.ccU=new B.D("Com base no que tens procurado.",null,C.L,null,null,null,null,null,null,null,null)
D.bLP=new B.S(D.atA,D.ccU,null)
D.cjJ=B.c9("afU")
D.bW_=new B.fp([D.cjJ],B.x("fp<kz>"))
D.c5n=new B.Q(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbF=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cnD=new A.OX(null)
D.cnT=new A.afU(null)
D.An=new A.aQm(0,"todo")
D.ad_=new A.aQm(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_I","dn7",()=>B.ez(new A.cTU(),null,!1,null,null,y.r))})()};
(a=>{a["tMB65Npriv4FurK6WkjVegCJXRY="]=a.current})($__dart_deferred_initializers__);