((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dK_(d){var x=B.eK(new B.eq(new B.a6(P.WG,new A.cIG(d),y.A),new A.cIH(),y.U))
return x},
cIG:function cIG(d){this.a=d},
cIH:function cIH(){},
dzB(){return new A.a9Y(null)},
aQg:function aQg(d,e){this.a=d
this.b=e},
a9Y:function a9Y(d){this.a=d},
aQf:function aQf(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cAT:function cAT(d){this.a=d},
cAH:function cAH(){},
cAI:function cAI(){},
cAJ:function cAJ(){},
cAS:function cAS(){},
cAK:function cAK(d,e){this.a=d
this.b=e},
cAL:function cAL(d){this.a=d},
cAG:function cAG(d){this.a=d},
cAM:function cAM(d){this.a=d},
cAF:function cAF(d){this.a=d},
cAN:function cAN(d,e){this.a=d
this.b=e},
cAO:function cAO(){},
cAP:function cAP(){},
cAQ:function cAQ(d,e){this.a=d
this.b=e},
cAR:function cAR(d,e){this.a=d
this.b=e},
cAE:function cAE(){},
aJC:function aJC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
P5:function P5(d){this.a=d},
aJD:function aJD(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cbG:function cbG(d){this.a=d},
cbF:function cbF(d,e){this.a=d
this.b=e},
cbH:function cbH(d){this.a=d},
cbE:function cbE(d,e){this.a=d
this.b=e},
cbI:function cbI(d,e){this.a=d
this.b=e},
cbD:function cbD(d){this.a=d},
afK:function afK(d){this.a=d},
ck7:function ck7(){},
ck8:function ck8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ck6:function ck6(d){this.a=d},
dFw(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dK_(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
ddT(d,e,f){var x,w=B.dA(e,0,null)
if(w.gdi(w)==="/partners"){x=w.gek().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ae(d).aj("/partners",new M.Lw(x,!1),y.X)
return}B.ae(d).aj(e,null,y.X)},
Qn(d,e,f){return A.dMQ(d,e,f)},
dMQ(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qn=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a_(0,$.zl().gaX(),y.I)
if(!f.ax)j.Nt(f.a)
q=f.r
x=q==="parceiros"&&C.f.aY(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a_(0,$.cq(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aVi(s,p),$async$Qn)
case 11:r=h
if(d.e!=null){p=r.a
B.ae(d).aj("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rI(d,e,p,null,null),$async$Qn)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a_(0,$.dnB().gdJ(),y.e),$async$Qn)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=A.dFw(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9b||l==null?18:19
break
case 18:x=20
return B.d(B.bQ(null,new A.cMA(f,l),!1,d,!0,!1,null,y.N),$async$Qn)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EW(f.a),$async$Qn)
case 24:if(d.e!=null)d.O(y.q).f.a0(B.bZ(null,null,null,null,null,C.y,null,B.i('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.ddT(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9a)j.W9(f.a)
A.ddT(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qn,w)},
cUe:function cUe(){},
cMA:function cMA(d,e){this.a=d
this.b=e},
cMx:function cMx(d){this.a=d},
cMy:function cMy(d){this.a=d},
cMz:function cMz(d){this.a=d},
aVi(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVi=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").al(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",e).e9(0),$async$aVi)
case 3:u=g
p=J.a7(u)
t=B.Y(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qa(d,t),$async$aVi)
case 4:r=g
p=s==null
q=B.A(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eB(r,q,t,B.A(p?null:J.h(s,"cover_photo_url")),d,t,null,null,0,null,null,C.jW)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVi,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[141]
I=c[163]
E=c[151]
K=c[186]
L=c[123]
M=c[136]
G=c[86]
N=c[250]
A=a.updateHolder(c[52],A)
D=c[406]
O=c[79]
P=c[407]
H=c[170]
Q=c[334]
A.aQg.prototype={
I(){return"_TasksTab."+this.b}}
A.a9Y.prototype={
R(){return new A.aQf(D.Ac)}}
A.aQf.prototype={
ad(){this.aq()
B.j7(new A.cAT(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().G($.zl(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cAH(),a1))
C.e.ct(e,new A.cAI())
x=f.b
w=x.length+new B.a6(d,new A.cAJ(),a1).gA(0)
v=w+e.length
u=new A.cAS()
t=y.p
s=B.a([new B.qO(new A.cAK(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ek("Por fazer",r===D.Ac,w,new A.cAL(h),g),new B.ek("Feito",r===D.acI,e.length,new A.cAM(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pu(s,g),D.aH5,new K.mb(r,16,!1,g),B.vm(g,g,"O vosso plano",C.hG,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ac){e=B.a([D.cnv,D.aGG],t)
if(x.length===0)e.push(D.aGw)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.H)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9c?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.B(C.e.gJ(C.f.eW(k,B.aS("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a2(k," \xb7 ")
i=n.ax?g:D.aGU
s.push(new B.ip(D.aGu,n.e,k,i,!0,new A.cAN(h,n),!1,g))}e.push(B.eR(s,0))}e.push(D.aGF)
e.push(D.bKM)
x=B.a([],t)
if(!new B.a6(d,new A.cAO(),a1).gX(0).q())x.push(D.aGx)
else for(d=C.e.gX(d),a0=new B.fA(d,new A.cAP(),a0.i("fA<1>"));a0.q();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.p(u.$1(s))
x.push(new B.ip(new G.Ky(!1,!1,new A.cAQ(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eR(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGC)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.ip(N.PM,n.e,new A.cAR(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGE,B.eR(d,0)],t))}return B.cP(g,C.cQ,B.nL(D.bVy,40,q,g,!0,!1),!0,g)},
KW(d,e){return this.bhS(d,e)},
bhS(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$KW=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bQ(null,new A.cAE(),!1,d,!0,!0,null,y.g),$async$KW)
case 3:q=g
if(q==null){x=1
break}u=e.a_(0,$.zl().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mh(q.d,s,r,t),$async$KW)
case 4:case 1:return B.l(v,w)}})
return B.m($async$KW,w)}}
A.aJC.prototype={}
A.P5.prototype={
R(){var x=$.aa()
return new A.aJD(new B.aF(C.ak,x),new B.aF(C.ak,x))}}
A.aJD.prototype={
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.aT(d,w,y.w).w
return B.dS(B.y(B.a([B.i("Nova tarefa",w,w,w,w,B.ay(d).ok.r,w,w),C.a_,new H.nq("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.nq("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d4t("Prazo (opcional)",new A.cbG(x),x.f),C.aA,new O.a1w(x.r,new A.cbH(x),w),C.a_,new B.fX("Adicionar",new A.cbI(x,d),!1,w)],y.p),C.E,C.h,C.J),C.y,w,new B.a4(20,20,20,v.f.d+20),w,C.av)}}
A.afK.prototype={
L6(d,e,f,g){return this.b9g(0,e,f,g)},
b9g(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$L6=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cUv(g.a)
x=3
return B.d(f.a_(0,$.wF().$1(g.a).gdJ(),y.B),$async$L6)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Un(e,u,!1),$async$L6)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L6,w)},
b9(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cB($.cq(),new A.ck7(),y.v,s),s)
s=e.G($.cVn().$1(new B.Z3(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dg(x))return C.an
s=B.a([],y.G)
for(w=J.ca(x),v=w.gX(x),u=y.D;v.q();){t=v.gE(v)
t=e.G($.wF().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aL(y.N)
for(w=w.gX(x);w.q();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.S(C.CE,B.y(B.a([D.bKo,D.bKp,new F.Ls(s,new A.ck8(this,d,e,x),v,null)],y.p),C.E,C.h,C.l),null)}}
var z=a.updateTypes(["P5(N)","~(dq)","B(nC)"])
A.cIG.prototype={
$1(d){return d.a===this.a},
$S:486}
A.cIH.prototype={
$1(d){return d.b},
$S:1529}
A.cAT.prototype={
$0(){return this.a.gS().a_(0,$.zl().gaX(),y.I).jg()},
$S:1}
A.cAH.prototype={
$1(d){return d.x===C.yW},
$S:64}
A.cAI.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.by(0,x==null?d.ch:x)},
$S:159}
A.cAJ.prototype={
$1(d){return d.x===C.ir},
$S:64}
A.cAS.prototype={
$1(d){return C.f.aT(C.j.k(B.aE(d)),2,"0")+"/"+C.f.aT(C.j.k(B.aw(d)),2,"0")},
$S:134}
A.cAK.prototype={
$0(){var x=this.a
return x.KW(this.b,x.gS())},
$S:0}
A.cAL.prototype={
$0(){var x=this.a
return x.p(new A.cAG(x))},
$S:0}
A.cAG.prototype={
$0(){return this.a.w=D.Ac},
$S:0}
A.cAM.prototype={
$0(){var x=this.a
return x.p(new A.cAF(x))},
$S:0}
A.cAF.prototype={
$0(){return this.a.w=D.acI},
$S:0}
A.cAN.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qn(w,x.gS(),this.b)},
$S:0}
A.cAO.prototype={
$1(d){return d.x===C.ir},
$S:64}
A.cAP.prototype={
$1(d){return d.x===C.ir},
$S:64}
A.cAQ.prototype={
$0(){return this.a.gS().a_(0,$.zl().gaX(),y.I).EW(this.b.a)},
$S:0}
A.cAR.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.p(this.b.$1(v))},
$S:18}
A.cAE.prototype={
$1(d){return D.cnf},
$S:z+0}
A.cbG.prototype={
$1(d){var x=this.a
return x.p(new A.cbF(x,d))},
$S:515}
A.cbF.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cbH.prototype={
$1(d){var x=this.a
return x.p(new A.cbE(x,d))},
$S:148}
A.cbE.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cbI.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cbD(u))
if(u.w!=null)return
x=B.al(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.ah(new A.aJC(w,v,u.f,u.r))},
$S:0}
A.cbD.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.ck7.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:39}
A.ck8.prototype={
$1(d){var x=this
return x.a.L6(0,x.b,x.c,J.d2T(x.d,new A.ck6(d)))},
$S:z+1}
A.ck6.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cUe.prototype={
$1(d){return this.aGI(d)},
aGI(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").cl(0),$async$$1)
case 7:s=f
r=B.D(y.N,y.c)
for(p=J.ao(s),o=y.P;p.q();){q=p.gE(p)
J.b1(r,B.Y(J.h(o.a(q),"id")),B.dac(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGC
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1530}
A.cMA.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.i(w.e,x,x,x,x,C.aai,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.P,B.i(C.f.B(w),x,x,x,x,D.c4S,x,x)],v))}u.push(C.bP)
u.push(new B.am(B.A2(D.aDq,D.cfU,new A.cMx(d),x),x))
if(this.b!=null)C.e.n(u,B.a([C.P,new B.am(B.hm(Q.aaI,new A.cMy(d),x),x)],v))
u.push(C.ar)
u.push(new B.am(B.cK(C.mp,x,x,new A.cMz(d),x,x),x))
return B.bB(!0,new B.S(C.Nf,B.y(u,C.E,C.h,C.J),x),x,C.Z,!0)},
$S:33}
A.cMx.prototype={
$0(){return B.al(this.a,!1).ah("done")},
$S:0}
A.cMy.prototype={
$0(){return B.al(this.a,!1).ah("open")},
$S:0}
A.cMz.prototype={
$0(){return B.al(this.a,!1).bj()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bu,[A.cIG,A.cIH,A.cAH,A.cAJ,A.cAS,A.cAO,A.cAP,A.cAE,A.cbG,A.cbH,A.ck7,A.ck8,A.ck6,A.cUe,A.cMA])
w(A.aQg,B.f7)
w(A.a9Y,B.dC)
w(A.aQf,B.dw)
x(B.bL,[A.cAT,A.cAK,A.cAL,A.cAG,A.cAM,A.cAF,A.cAN,A.cAQ,A.cAR,A.cbF,A.cbE,A.cbI,A.cbD,A.cMx,A.cMy,A.cMz])
w(A.cAI,B.cL)
w(A.aJC,B.M)
w(A.P5,B.G)
w(A.aJD,B.a_)
w(A.afK,B.ew)})()
B.br(b.typeUniverse,JSON.parse('{"a9Y":{"G":[],"e":[],"f":[]},"P5":{"G":[],"e":[],"f":[]},"aQf":{"a_":["a9Y"]},"aJD":{"a_":["P5"]},"afK":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.C
return{F:x("ax<t<nC>?>"),D:x("ax<dq?>"),R:x("eB"),v:x("ed"),Z:x("nB"),e:x("F<a3<c,oR>>"),B:x("F<dq?>"),E:x("r<ek>"),G:x("r<dq>"),s:x("r<c>"),p:x("r<e>"),r:x("a3<c,oR>"),P:x("a3<c,@>"),U:x("eq<+(c,c),c>"),w:x("dv"),N:x("c"),I:x("u2"),z:x("Bx"),c:x("oR"),A:x("a6<+(c,c)>"),g:x("aJC"),q:x("dl"),h:x("a3<c,@>?"),X:x("M?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDq=new B.b8(C.dp,null,null,null,null,null)
D.aGu=new G.Ky(!1,!1,null,null)
D.aGB=new B.ip(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdd=x([D.aGB],y.p)
D.aGw=new B.Tv(D.bdd,0,null)
D.aGx=new B.ip(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGC=new B.ip(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGE=new E.Ew("Feito",null)
D.aGF=new E.Ew("As vossas tarefas",null)
D.aGG=new E.Ew("Pr\xf3ximas tarefas",null)
D.aGU=new B.dU("Nova",C.cV,null)
D.aH5=new B.lh("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGC=new B.c7(C.cK,[],B.C("c7<c,oR>"))
D.cav=new B.E("Sugest\xf5es para ti",null,C.bj,null,null,null,null,null,null,null)
D.bKo=new B.S(C.bF,D.cav,null)
D.atd=new B.a4(20,2,20,10)
D.c7y=new B.E("Com base no que tens procurado.",null,C.L,null,null,null,null,null,null,null)
D.bKp=new B.S(D.atd,D.c7y,null)
D.cbq=new B.E("Criadas por voc\xeas, sem limite.",null,C.L,null,null,null,null,null,null,null)
D.bKM=new B.S(C.jB,D.cbq,null)
D.cjk=B.cb("afK")
D.bVy=new B.fl([D.cjk],B.C("fl<l1>"))
D.c4S=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cfU=new B.E("Marcar como feita",null,null,null,null,null,null,null,null,null)
D.cnf=new A.P5(null)
D.cnv=new A.afK(null)
D.Ac=new A.aQg(0,"todo")
D.acI=new A.aQg(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e0j","dnB",()=>B.ez(new A.cUe(),null,!1,null,null,y.r))})()};
(a=>{a["zJSmp5jqtFvnzB32cCWxnvjUQ28="]=a.current})($__dart_deferred_initializers__);