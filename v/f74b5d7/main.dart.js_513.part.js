((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dJB(d){var x=B.eL(new B.er(new B.a6(P.WZ,new A.cIE(d),y.A),new A.cIF(),y.U))
return x},
cIE:function cIE(d){this.a=d},
cIF:function cIF(){},
dzf(){return new A.aa0(null)},
aQn:function aQn(d,e){this.a=d
this.b=e},
aa0:function aa0(d){this.a=d},
aQm:function aQm(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cAM:function cAM(d){this.a=d},
cAA:function cAA(){},
cAB:function cAB(){},
cAC:function cAC(){},
cAL:function cAL(){},
cAD:function cAD(d,e){this.a=d
this.b=e},
cAE:function cAE(d){this.a=d},
cAz:function cAz(d){this.a=d},
cAF:function cAF(d){this.a=d},
cAy:function cAy(d){this.a=d},
cAG:function cAG(d,e){this.a=d
this.b=e},
cAH:function cAH(){},
cAI:function cAI(){},
cAJ:function cAJ(d,e){this.a=d
this.b=e},
cAK:function cAK(d,e){this.a=d
this.b=e},
cAx:function cAx(){},
aJL:function aJL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OX:function OX(d){this.a=d},
aJM:function aJM(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cbO:function cbO(d){this.a=d},
cbN:function cbN(d,e){this.a=d
this.b=e},
cbP:function cbP(d){this.a=d},
cbM:function cbM(d,e){this.a=d
this.b=e},
cbQ:function cbQ(d,e){this.a=d
this.b=e},
cbL:function cbL(d){this.a=d},
afV:function afV(d){this.a=d},
ckb:function ckb(){},
ckc:function ckc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cka:function cka(d){this.a=d},
dF9(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dJB(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
ddA(d,e,f){var x,w=B.dz(e,0,null)
if(w.gdn(w)==="/partners"){x=w.gej().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ad(d).ak("/partners",new M.Lr(x,!1),y.X)
return}B.ad(d).ak(e,null,y.X)},
Qd(d,e,f){return A.dMo(d,e,f)},
dMo(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
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
return B.d(A.aVp(s,p),$async$Qd)
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
return B.d(e.a_(0,$.dnb().gdN(),y.e),$async$Qd)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dF9(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9p||l==null?18:19
break
case 18:x=20
return B.d(B.bU(null,new A.cMt(f,l),!1,d,!0,!1,null,y.N),$async$Qd)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.F1(f.a),$async$Qd)
case 24:if(d.e!=null)d.O(y.q).f.a2(B.c_(null,null,null,null,null,C.y,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.ddA(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9o)j.WC(f.a)
A.ddA(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qd,w)},
cTY:function cTY(){},
cMt:function cMt(d,e){this.a=d
this.b=e},
cMq:function cMq(d){this.a=d},
cMr:function cMr(d){this.a=d},
cMs:function cMs(d){this.a=d},
aVp(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVp=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.P().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").ai(0,"partner_id, partner_profiles(business_name, cover_photo_url)").U("id",e).dR(0),$async$aVp)
case 3:u=g
p=J.a7(u)
t=B.a_(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qd(d,t),$async$aVp)
case 4:r=g
p=s==null
q=B.C(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eD(r,q,t,B.C(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.jX)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVp,w)}},D,O,P,H,Q
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
A.aQn.prototype={
I(){return"_TasksTab."+this.b}}
A.aa0.prototype={
R(){return new A.aQm(D.An)}}
A.aQm.prototype={
ac(){this.ap()
B.jl(new A.cAM(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().G($.zn(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cAA(),a1))
C.e.cr(e,new A.cAB())
x=f.b
w=x.length+new B.a6(d,new A.cAC(),a1).gA(0)
v=w+e.length
u=new A.cAL()
t=y.p
s=B.a([new B.qP(new A.cAD(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ek("Por fazer",r===D.An,w,new A.cAE(h),g),new B.ek("Feito",r===D.ad_,e.length,new A.cAF(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pt(s,g),D.aHw,new K.me(r,16,!1,g),B.vj(g,g,"O vosso plano",C.hG,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.An){e=B.a([D.cnW,D.aH6],t)
if(x.length===0)e.push(D.aGX)
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
k=k.length===0?g:C.e.a0(k," \xb7 ")
i=n.ax?g:D.aHk
s.push(new B.ir(D.aGV,n.e,k,i,!0,new A.cAG(h,n),!1,g))}e.push(B.eT(s,0))}e.push(D.aH5)
e.push(D.bLg)
x=B.a([],t)
if(!new B.a6(d,new A.cAH(),a1).gX(0).t())x.push(D.aGY)
else for(d=C.e.gX(d),a0=new B.hb(d,new A.cAI(),a0.i("hb<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.p(u.$1(s))
x.push(new B.ir(new G.Kt(!1,!1,new A.cAJ(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eT(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aH2)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.ir(N.Q1,n.e,new A.cAK(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aH4,B.eT(d,0)],t))}return B.cQ(g,C.cW,B.nN(D.bW2,40,q,g,!0,!1),!0,g)},
Lj(d,e){return this.bjk(d,e)},
bjk(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$Lj=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bU(null,new A.cAx(),!1,d,!0,!0,null,y.g),$async$Lj)
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
A.aJL.prototype={}
A.OX.prototype={
R(){var x=$.aa()
return new A.aJM(new B.aF(C.ak,x),new B.aF(C.ak,x))}}
A.aJM.prototype={
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.aO(d,w,y.w).w
return B.dT(B.z(B.a([B.h("Nova tarefa",w,w,w,w,B.av(d).ok.r,w,w,w),C.a_,new H.mC("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.mC("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d4j("Prazo (opcional)",new A.cbO(x),x.f),C.aB,new O.a1t(x.r,new A.cbP(x),w),C.a_,new B.fX("Adicionar",new A.cbQ(x,d),!1,w)],y.p),C.E,C.h,C.J),C.y,w,new B.a3(20,20,20,v.f.d+20),w,C.av)}}
A.afV.prototype={
Lu(d,e,f,g){return this.baG(0,e,f,g)},
baG(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Lu=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cUe(g.a)
x=3
return B.d(f.a_(0,$.wD().$1(g.a).gdN(),y.B),$async$Lu)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Ue(e,u,!1),$async$Lu)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lu,w)},
ba(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cH($.cr(),new A.ckb(),y.v,s),s)
s=e.G($.cV5().$1(new B.Z0(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.di(x))return C.ap
s=B.a([],y.G)
for(w=J.c9(x),v=w.gX(x),u=y.D;v.t();){t=v.gE(v)
t=e.G($.wD().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aL(y.N)
for(w=w.gX(x);w.t();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.S(C.CR,B.z(B.a([D.bL4,D.bLS,new F.Ln(s,new A.ckc(this,d,e,x),v,null)],y.p),C.E,C.h,C.l),null)}}
var z=a.updateTypes(["OX(N)","~(dH)","B(nD)"])
A.cIE.prototype={
$1(d){return d.a===this.a},
$S:462}
A.cIF.prototype={
$1(d){return d.b},
$S:1519}
A.cAM.prototype={
$0(){return this.a.gS().a_(0,$.zn().gaX(),y.I).jF()},
$S:1}
A.cAA.prototype={
$1(d){return d.x===C.z8},
$S:62}
A.cAB.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bC(0,x==null?d.ch:x)},
$S:163}
A.cAC.prototype={
$1(d){return d.x===C.ip},
$S:62}
A.cAL.prototype={
$1(d){return C.f.aU(C.j.k(B.ay(d)),2,"0")+"/"+C.f.aU(C.j.k(B.an(d)),2,"0")},
$S:154}
A.cAD.prototype={
$0(){var x=this.a
return x.Lj(this.b,x.gS())},
$S:0}
A.cAE.prototype={
$0(){var x=this.a
return x.p(new A.cAz(x))},
$S:0}
A.cAz.prototype={
$0(){return this.a.w=D.An},
$S:0}
A.cAF.prototype={
$0(){var x=this.a
return x.p(new A.cAy(x))},
$S:0}
A.cAy.prototype={
$0(){return this.a.w=D.ad_},
$S:0}
A.cAG.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qd(w,x.gS(),this.b)},
$S:0}
A.cAH.prototype={
$1(d){return d.x===C.ip},
$S:62}
A.cAI.prototype={
$1(d){return d.x===C.ip},
$S:62}
A.cAJ.prototype={
$0(){return this.a.gS().a_(0,$.zn().gaX(),y.I).F1(this.b.a)},
$S:0}
A.cAK.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.p(this.b.$1(v))},
$S:18}
A.cAx.prototype={
$1(d){return D.cnG},
$S:z+0}
A.cbO.prototype={
$1(d){var x=this.a
return x.p(new A.cbN(x,d))},
$S:507}
A.cbN.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cbP.prototype={
$1(d){var x=this.a
return x.p(new A.cbM(x,d))},
$S:130}
A.cbM.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cbQ.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cbL(u))
if(u.w!=null)return
x=B.am(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.ae(new A.aJL(w,v,u.f,u.r))},
$S:0}
A.cbL.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.ckb.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:38}
A.ckc.prototype={
$1(d){var x=this
return x.a.Lu(0,x.b,x.c,J.d2J(x.d,new A.cka(d)))},
$S:z+1}
A.cka.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cTY.prototype={
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
for(p=J.ao(s),o=y.P;p.t();){q=p.gE(p)
J.b2(r,B.a_(J.i(o.a(q),"id")),B.d9X(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bH8
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
A.cMt.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aaw,x,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.Q,B.h(C.f.B(w),x,x,x,x,D.c5q,x,x,x)],v))}u.push(C.bN)
u.push(B.A5(D.aDR,D.cbI,new A.cMq(d),x))
if(this.b!=null)C.e.n(u,B.a([C.Q,B.hj(Q.aaH,new A.cMr(d),x)],v))
u.push(C.as)
u.push(B.cA(C.mu,x,x,new A.cMs(d),x,x))
return B.bA(!0,new B.S(C.Nx,B.z(u,C.E,C.h,C.J),x),x,C.Z,!0)},
$S:40}
A.cMq.prototype={
$0(){return B.am(this.a,!1).ae("done")},
$S:0}
A.cMr.prototype={
$0(){return B.am(this.a,!1).ae("open")},
$S:0}
A.cMs.prototype={
$0(){return B.am(this.a,!1).bm()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cIE,A.cIF,A.cAA,A.cAC,A.cAL,A.cAH,A.cAI,A.cAx,A.cbO,A.cbP,A.ckb,A.ckc,A.cka,A.cTY,A.cMt])
w(A.aQn,B.f_)
w(A.aa0,B.dB)
w(A.aQm,B.dv)
x(B.bQ,[A.cAM,A.cAD,A.cAE,A.cAz,A.cAF,A.cAy,A.cAG,A.cAJ,A.cAK,A.cbN,A.cbM,A.cbQ,A.cbL,A.cMq,A.cMr,A.cMs])
w(A.cAB,B.cL)
w(A.aJL,B.K)
w(A.OX,B.G)
w(A.aJM,B.Z)
w(A.afV,B.ey)})()
B.bu(b.typeUniverse,JSON.parse('{"aa0":{"G":[],"e":[],"f":[]},"OX":{"G":[],"e":[],"f":[]},"aQm":{"Z":["aa0"]},"aJM":{"Z":["OX"]},"afV":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.x
return{F:x("az<t<nD>?>"),D:x("az<dH?>"),R:x("eD"),v:x("ee"),Z:x("nC"),e:x("F<a5<c,oR>>"),B:x("F<dH?>"),E:x("r<ek>"),G:x("r<dH>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oR>"),P:x("a5<c,@>"),U:x("er<+(c,c),c>"),w:x("dh"),N:x("c"),I:x("tY"),z:x("By"),c:x("oR"),A:x("a6<+(c,c)>"),g:x("aJL"),q:x("dr"),h:x("a5<c,@>?"),X:x("K?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDR=new B.b8(C.dt,null,null,null,null,null)
D.aGV=new G.Kt(!1,!1,null,null)
D.aH1=new B.ir(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdD=x([D.aH1],y.p)
D.aGX=new B.Tn(D.bdD,0,null)
D.aGY=new B.ir(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aH2=new B.ir(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aH4=new E.Ew("Feito",null)
D.aH5=new E.Ew("As vossas tarefas",null)
D.aH6=new E.Ew("Pr\xf3ximas tarefas",null)
D.aHk=new B.dW("Nova",C.d0,null)
D.aHw=new B.lg("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bH8=new B.c7(C.cJ,[],B.x("c7<c,oR>"))
D.cgk=new B.D("Sugest\xf5es para ti",null,C.bj,null,null,null,null,null,null,null,null)
D.bL4=new B.S(C.bI,D.cgk,null)
D.ce9=new B.D("Criadas por voc\xeas, sem limite.",null,C.L,null,null,null,null,null,null,null,null)
D.bLg=new B.S(C.kw,D.ce9,null)
D.atB=new B.a3(20,2,20,10)
D.ccX=new B.D("Com base no que tens procurado.",null,C.L,null,null,null,null,null,null,null,null)
D.bLS=new B.S(D.atB,D.ccX,null)
D.cjM=B.ca("afV")
D.bW2=new B.fp([D.cjM],B.x("fp<kz>"))
D.c5q=new B.Q(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbI=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cnG=new A.OX(null)
D.cnW=new A.afV(null)
D.An=new A.aQn(0,"todo")
D.ad_=new A.aQn(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_N","dnb",()=>B.eA(new A.cTY(),null,!1,null,null,y.r))})()};
(a=>{a["41GpTBVzvVaBNbGcHmq5ijjZ4Dg="]=a.current})($__dart_deferred_initializers__);