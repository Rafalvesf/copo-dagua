((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dJJ(d){var x=B.eL(new B.eq(new B.a6(P.WE,new A.cIw(d),y.A),new A.cIx(),y.U))
return x},
cIw:function cIw(d){this.a=d},
cIx:function cIx(){},
dzm(){return new A.a9W(null)},
aQi:function aQi(d,e){this.a=d
this.b=e},
a9W:function a9W(d){this.a=d},
aQh:function aQh(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cAI:function cAI(d){this.a=d},
cAw:function cAw(){},
cAx:function cAx(){},
cAy:function cAy(){},
cAH:function cAH(){},
cAz:function cAz(d,e){this.a=d
this.b=e},
cAA:function cAA(d){this.a=d},
cAv:function cAv(d){this.a=d},
cAB:function cAB(d){this.a=d},
cAu:function cAu(d){this.a=d},
cAC:function cAC(d,e){this.a=d
this.b=e},
cAD:function cAD(){},
cAE:function cAE(){},
cAF:function cAF(d,e){this.a=d
this.b=e},
cAG:function cAG(d,e){this.a=d
this.b=e},
cAt:function cAt(){},
aJE:function aJE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
P1:function P1(d){this.a=d},
aJF:function aJF(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cbz:function cbz(d){this.a=d},
cby:function cby(d,e){this.a=d
this.b=e},
cbA:function cbA(d){this.a=d},
cbx:function cbx(d,e){this.a=d
this.b=e},
cbB:function cbB(d,e){this.a=d
this.b=e},
cbw:function cbw(d){this.a=d},
afI:function afI(d){this.a=d},
ck0:function ck0(){},
ck1:function ck1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ck_:function ck_(d){this.a=d},
dFf(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dJJ(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
ddD(d,e,f){var x,w=B.dA(e,0,null)
if(w.gdi(w)==="/partners"){x=w.gel().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ae(d).aj("/partners",new M.Lt(x,!1),y.X)
return}B.ae(d).aj(e,null,y.X)},
Qj(d,e,f){return A.dMz(d,e,f)},
dMz(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qj=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a_(0,$.zj().gaX(),y.I)
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
return B.d(A.aVi(s,p),$async$Qj)
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
return B.d(B.rH(d,e,p,null,null),$async$Qj)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a_(0,$.dnk().gdI(),y.e),$async$Qj)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=A.dFf(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9a||l==null?18:19
break
case 18:x=20
return B.d(B.bQ(null,new A.cMn(f,l),!1,d,!0,!1,null,y.N),$async$Qj)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EX(f.a),$async$Qj)
case 24:if(d.e!=null)d.O(y.q).f.a0(B.bY(null,null,null,null,null,C.y,null,B.i('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.ddD(d,l,m)
case 22:x=1
break
case 19:if(q===C.a99)j.W9(f.a)
A.ddD(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qj,w)},
cU1:function cU1(){},
cMn:function cMn(d,e){this.a=d
this.b=e},
cMk:function cMk(d){this.a=d},
cMl:function cMl(d){this.a=d},
cMm:function cMm(d){this.a=d},
aVi(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVi=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.P().b
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
q=B.B(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eB(r,q,t,B.B(p?null:J.h(s,"cover_photo_url")),d,t,null,null,0,null,null,C.jX)
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
A.aQi.prototype={
I(){return"_TasksTab."+this.b}}
A.a9W.prototype={
R(){return new A.aQh(D.Ab)}}
A.aQh.prototype={
ad(){this.aq()
B.j8(new A.cAI(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().G($.zj(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cAw(),a1))
C.e.ct(e,new A.cAx())
x=f.b
w=x.length+new B.a6(d,new A.cAy(),a1).gA(0)
v=w+e.length
u=new A.cAH()
t=y.p
s=B.a([new B.qO(new A.cAz(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ek("Por fazer",r===D.Ab,w,new A.cAA(h),g),new B.ek("Feito",r===D.acG,e.length,new A.cAB(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pu(s,g),D.aH2,new K.mb(r,16,!1,g),B.vm(g,g,"O vosso plano",C.hG,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ab){e=B.a([D.cnp,D.aGD],t)
if(x.length===0)e.push(D.aGt)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.G)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9b?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.B(C.e.gJ(C.f.eW(k,B.aS("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a2(k," \xb7 ")
i=n.ax?g:D.aGR
s.push(new B.ip(D.aGr,n.e,k,i,!0,new A.cAC(h,n),!1,g))}e.push(B.eR(s,0))}e.push(D.aGC)
e.push(D.bKJ)
x=B.a([],t)
if(!new B.a6(d,new A.cAD(),a1).gX(0).q())x.push(D.aGu)
else for(d=C.e.gX(d),a0=new B.fA(d,new A.cAE(),a0.i("fA<1>"));a0.q();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.p(u.$1(s))
x.push(new B.ip(new G.Ku(!1,!1,new A.cAF(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eR(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGz)
else for(o=0;o<e.length;e.length===a0||(0,B.G)(e),++o){n=e[o]
d.push(new B.ip(N.PJ,n.e,new A.cAG(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGB,B.eR(d,0)],t))}return B.cP(g,C.cP,B.nJ(D.bVu,40,q,g,!0,!1),!0,g)},
KX(d,e){return this.bhR(d,e)},
bhR(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$KX=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bQ(null,new A.cAt(),!1,d,!0,!0,null,y.g),$async$KX)
case 3:q=g
if(q==null){x=1
break}u=e.a_(0,$.zj().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mh(q.d,s,r,t),$async$KX)
case 4:case 1:return B.l(v,w)}})
return B.m($async$KX,w)}}
A.aJE.prototype={}
A.P1.prototype={
R(){var x=$.aa()
return new A.aJF(new B.aF(C.ak,x),new B.aF(C.ak,x))}}
A.aJF.prototype={
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.aT(d,w,y.w).w
return B.dS(B.y(B.a([B.i("Nova tarefa",w,w,w,w,B.ay(d).ok.r,w,w),C.a_,new H.no("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.no("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d4f("Prazo (opcional)",new A.cbz(x),x.f),C.aA,new O.a1t(x.r,new A.cbA(x),w),C.a_,new B.fY("Adicionar",new A.cbB(x,d),!1,w)],y.p),C.E,C.h,C.J),C.y,w,new B.a4(20,20,20,v.f.d+20),w,C.av)}}
A.afI.prototype={
L7(d,e,f,g){return this.b9f(0,e,f,g)},
b9f(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$L7=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cUi(g.a)
x=3
return B.d(f.a_(0,$.wE().$1(g.a).gdI(),y.B),$async$L7)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Um(e,u,!1),$async$L7)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L7,w)},
ba(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cC($.cq(),new A.ck0(),y.v,s),s)
s=e.G($.cVa().$1(new B.Z2(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dg(x))return C.an
s=B.a([],y.G)
for(w=J.c9(x),v=w.gX(x),u=y.D;v.q();){t=v.gE(v)
t=e.G($.wE().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aL(y.N)
for(w=w.gX(x);w.q();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.S(C.CC,B.y(B.a([D.bKl,D.bKm,new F.Lp(s,new A.ck1(this,d,e,x),v,null)],y.p),C.E,C.h,C.l),null)}}
var z=a.updateTypes(["P1(N)","~(dq)","C(nA)"])
A.cIw.prototype={
$1(d){return d.a===this.a},
$S:465}
A.cIx.prototype={
$1(d){return d.b},
$S:1528}
A.cAI.prototype={
$0(){return this.a.gS().a_(0,$.zj().gaX(),y.I).jf()},
$S:1}
A.cAw.prototype={
$1(d){return d.x===C.yW},
$S:62}
A.cAx.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bA(0,x==null?d.ch:x)},
$S:173}
A.cAy.prototype={
$1(d){return d.x===C.is},
$S:62}
A.cAH.prototype={
$1(d){return C.f.aT(C.j.k(B.aE(d)),2,"0")+"/"+C.f.aT(C.j.k(B.aw(d)),2,"0")},
$S:140}
A.cAz.prototype={
$0(){var x=this.a
return x.KX(this.b,x.gS())},
$S:0}
A.cAA.prototype={
$0(){var x=this.a
return x.p(new A.cAv(x))},
$S:0}
A.cAv.prototype={
$0(){return this.a.w=D.Ab},
$S:0}
A.cAB.prototype={
$0(){var x=this.a
return x.p(new A.cAu(x))},
$S:0}
A.cAu.prototype={
$0(){return this.a.w=D.acG},
$S:0}
A.cAC.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qj(w,x.gS(),this.b)},
$S:0}
A.cAD.prototype={
$1(d){return d.x===C.is},
$S:62}
A.cAE.prototype={
$1(d){return d.x===C.is},
$S:62}
A.cAF.prototype={
$0(){return this.a.gS().a_(0,$.zj().gaX(),y.I).EX(this.b.a)},
$S:0}
A.cAG.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.p(this.b.$1(v))},
$S:18}
A.cAt.prototype={
$1(d){return D.cn9},
$S:z+0}
A.cbz.prototype={
$1(d){var x=this.a
return x.p(new A.cby(x,d))},
$S:510}
A.cby.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cbA.prototype={
$1(d){var x=this.a
return x.p(new A.cbx(x,d))},
$S:139}
A.cbx.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cbB.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cbw(u))
if(u.w!=null)return
x=B.al(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.ah(new A.aJE(w,v,u.f,u.r))},
$S:0}
A.cbw.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.ck0.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:37}
A.ck1.prototype={
$1(d){var x=this
return x.a.L7(0,x.b,x.c,J.d2G(x.d,new A.ck_(d)))},
$S:z+1}
A.ck_.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cU1.prototype={
$1(d){return this.aGH(d)},
aGH(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").cl(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ao(s),o=y.P;p.q();){q=p.gE(p)
J.b1(r,B.Y(J.h(o.a(q),"id")),B.d9X(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGy
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1529}
A.cMn.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.i(w.e,x,x,x,x,C.aag,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.P,B.i(C.f.B(w),x,x,x,x,D.c4N,x,x)],v))}u.push(C.bP)
u.push(new B.am(B.A0(D.aDn,D.cfO,new A.cMk(d),x),x))
if(this.b!=null)C.e.n(u,B.a([C.P,new B.am(B.hk(Q.aaG,new A.cMl(d),x),x)],v))
u.push(C.ar)
u.push(new B.am(B.cJ(C.mp,x,x,new A.cMm(d),x,x),x))
return B.bB(!0,new B.S(C.Ng,B.y(u,C.E,C.h,C.J),x),x,C.Z,!0)},
$S:33}
A.cMk.prototype={
$0(){return B.al(this.a,!1).ah("done")},
$S:0}
A.cMl.prototype={
$0(){return B.al(this.a,!1).ah("open")},
$S:0}
A.cMm.prototype={
$0(){return B.al(this.a,!1).bj()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bu,[A.cIw,A.cIx,A.cAw,A.cAy,A.cAH,A.cAD,A.cAE,A.cAt,A.cbz,A.cbA,A.ck0,A.ck1,A.ck_,A.cU1,A.cMn])
w(A.aQi,B.fg)
w(A.a9W,B.dC)
w(A.aQh,B.dw)
x(B.bL,[A.cAI,A.cAz,A.cAA,A.cAv,A.cAB,A.cAu,A.cAC,A.cAF,A.cAG,A.cby,A.cbx,A.cbB,A.cbw,A.cMk,A.cMl,A.cMm])
w(A.cAx,B.cK)
w(A.aJE,B.M)
w(A.P1,B.H)
w(A.aJF,B.a_)
w(A.afI,B.ew)})()
B.br(b.typeUniverse,JSON.parse('{"a9W":{"H":[],"e":[],"f":[]},"P1":{"H":[],"e":[],"f":[]},"aQh":{"a_":["a9W"]},"aJF":{"a_":["P1"]},"afI":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.z
return{F:x("ax<t<nA>?>"),D:x("ax<dq?>"),R:x("eB"),v:x("ed"),Z:x("nz"),e:x("F<a3<c,oR>>"),B:x("F<dq?>"),E:x("r<ek>"),G:x("r<dq>"),s:x("r<c>"),p:x("r<e>"),r:x("a3<c,oR>"),P:x("a3<c,@>"),U:x("eq<+(c,c),c>"),w:x("du"),N:x("c"),I:x("u1"),z:x("Bw"),c:x("oR"),A:x("a6<+(c,c)>"),g:x("aJE"),q:x("dl"),h:x("a3<c,@>?"),X:x("M?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDn=new B.b8(C.dp,null,null,null,null,null)
D.aGr=new G.Ku(!1,!1,null,null)
D.aGy=new B.ip(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bda=x([D.aGy],y.p)
D.aGt=new B.Tv(D.bda,0,null)
D.aGu=new B.ip(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGz=new B.ip(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGB=new E.Ev("Feito",null)
D.aGC=new E.Ev("As vossas tarefas",null)
D.aGD=new E.Ev("Pr\xf3ximas tarefas",null)
D.aGR=new B.dU("Nova",C.cU,null)
D.aH2=new B.lg("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGy=new B.c6(C.cJ,[],B.z("c6<c,oR>"))
D.cap=new B.D("Sugest\xf5es para ti",null,C.bh,null,null,null,null,null,null,null)
D.bKl=new B.S(C.bF,D.cap,null)
D.at9=new B.a4(20,2,20,10)
D.c7s=new B.D("Com base no que tens procurado.",null,C.L,null,null,null,null,null,null,null)
D.bKm=new B.S(D.at9,D.c7s,null)
D.cbk=new B.D("Criadas por voc\xeas, sem limite.",null,C.L,null,null,null,null,null,null,null)
D.bKJ=new B.S(C.jC,D.cbk,null)
D.cje=B.ca("afI")
D.bVu=new B.fn([D.cje],B.z("fn<l0>"))
D.c4N=new B.Q(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cfO=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null)
D.cn9=new A.P1(null)
D.cnp=new A.afI(null)
D.Ab=new A.aQi(0,"todo")
D.acG=new A.aQi(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e01","dnk",()=>B.ez(new A.cU1(),null,!1,null,null,y.r))})()};
(a=>{a["lRsvOeR/vADt8XM0rLU3ZqUf2eI="]=a.current})($__dart_deferred_initializers__);