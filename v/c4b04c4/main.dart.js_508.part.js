((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dIs(d){var x=B.eO(new B.eu(new B.a6(P.Xz,new A.cI0(d),y.A),new A.cI1(),y.U))
return x},
cI0:function cI0(d){this.a=d},
cI1:function cI1(){},
dy8(){return new A.a9W(null)},
aQz:function aQz(d,e){this.a=d
this.b=e},
a9W:function a9W(d){this.a=d},
aQy:function aQy(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
czZ:function czZ(d){this.a=d},
czN:function czN(){},
czO:function czO(){},
czP:function czP(){},
czY:function czY(){},
czQ:function czQ(d,e){this.a=d
this.b=e},
czR:function czR(d){this.a=d},
czM:function czM(d){this.a=d},
czS:function czS(d){this.a=d},
czL:function czL(d){this.a=d},
czT:function czT(d,e){this.a=d
this.b=e},
czU:function czU(){},
czV:function czV(){},
czW:function czW(d,e){this.a=d
this.b=e},
czX:function czX(d,e){this.a=d
this.b=e},
czK:function czK(){},
aJT:function aJT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OY:function OY(d){this.a=d},
aJU:function aJU(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cbo:function cbo(d){this.a=d},
cbn:function cbn(d,e){this.a=d
this.b=e},
cbp:function cbp(d){this.a=d},
cbm:function cbm(d,e){this.a=d
this.b=e},
cbq:function cbq(d,e){this.a=d
this.b=e},
cbl:function cbl(d){this.a=d},
afR:function afR(d){this.a=d},
cjl:function cjl(){},
cjm:function cjm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjk:function cjk(d){this.a=d},
dE4(d){var x,w
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
dcD(d,e,f){var x,w=B.dx(e,0,null)
if(w.gdn(w)==="/partners"){x=w.gen().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ag(d).ap("/partners",new M.Lr(x,!1),y.X)
return}B.ag(d).ap(e,null,y.X)},
Qg(d,e,f){return A.dLc(d,e,f)},
dLc(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qg=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a1(0,$.zp().gaX(),y.I)
if(!f.ax)j.O6(f.a)
q=f.r
x=q==="parceiros"&&C.f.b2(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a1(0,$.cr(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aVw(s,p),$async$Qg)
case 11:r=h
if(d.e!=null){p=r.a
B.ag(d).ap("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rM(d,e,p,null,null),$async$Qg)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a1(0,$.dmb().gec(),y.e),$async$Qg)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dE4(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9Y||l==null?18:19
break
case 18:x=20
return B.d(B.bZ(null,new A.cLI(f,l),!1,d,!0,!1,null,y.N),$async$Qg)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.Fd(f.a),$async$Qg)
case 24:if(d.e!=null)d.O(y.q).f.a2(B.c1(null,null,null,null,null,C.z,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.dcD(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9X)j.WF(f.a)
A.dcD(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qg,w)},
cT4:function cT4(){},
cLI:function cLI(d,e){this.a=d
this.b=e},
cLF:function cLF(d){this.a=d},
cLG:function cLG(d){this.a=d},
cLH:function cLH(d){this.a=d},
aVw(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVw=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.R().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").al(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",e).dR(0),$async$aVw)
case 3:u=g
p=J.a7(u)
t=B.a0(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qg(d,t),$async$aVw)
case 4:r=g
p=s==null
q=B.C(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eG(r,q,t,B.C(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.k1)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVw,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[139]
I=c[163]
E=c[167]
K=c[188]
L=c[121]
M=c[134]
G=c[86]
N=c[255]
A=a.updateHolder(c[52],A)
D=c[409]
O=c[80]
P=c[410]
H=c[172]
Q=c[338]
A.aQz.prototype={
I(){return"_TasksTab."+this.b}}
A.a9W.prototype={
R(){return new A.aQy(D.AB)}}
A.aQy.prototype={
ac(){this.au()
B.jj(new A.czZ(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().H($.zp(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.czN(),a1))
C.e.cA(e,new A.czO())
x=f.b
w=x.length+new B.a6(d,new A.czP(),a1).gA(0)
v=w+e.length
u=new A.czY()
t=y.p
s=B.a([new B.qU(new A.czQ(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.el("Por fazer",r===D.AB,w,new A.czR(h),g),new B.el("Feito",r===D.adO,e.length,new A.czS(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pt(s,g),D.aIe,new K.m5(r,16,!1,g),B.vi(g,g,"O vosso plano",C.hO,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.AB){e=B.a([D.cpp,D.aHL],t)
if(x.length===0)e.push(D.aHA)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.H)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9Z?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.C(C.e.gK(C.f.eW(k,B.aS("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a0(k," \xb7 ")
i=n.ax?g:D.aI2
s.push(new B.i8(D.aHy,n.e,k,i,!0,new A.czT(h,n),!1,g))}e.push(B.fc(s,0))}e.push(D.aHK)
e.push(D.bM1)
x=B.a([],t)
if(!new B.a6(d,new A.czU(),a1).gX(0).t())x.push(D.aHC)
else for(d=C.e.gX(d),a0=new B.h9(d,new A.czV(),a0.i("h9<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i8(new G.Kt(!1,!1,new A.czW(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.fc(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aHJ)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.i8(N.Qz,n.e,new A.czX(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aHN,B.fc(d,0)],t))}return B.cP(g,C.cY,B.ou(D.bWS,40,q,g,!0,!1),!0,g)},
Lq(d,e){return this.bjH(d,e)},
bjH(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$Lq=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bZ(null,new A.czK(),!1,d,!0,!0,null,y.g),$async$Lq)
case 3:q=g
if(q==null){x=1
break}u=e.a1(0,$.zp().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.MG(q.d,s,r,t),$async$Lq)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lq,w)}}
A.aJT.prototype={}
A.OY.prototype={
R(){var x=$.aa()
return new A.aJU(new B.aF(C.al,x),new B.aF(C.al,x))}}
A.aJU.prototype={
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.ax(d,w,y.w).w
return B.dR(B.x(B.a([B.h("Nova tarefa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a1,new H.my("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.my("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d3n("Prazo (opcional)",new A.cbo(x),x.f),C.aC,new O.a1r(x.r,new A.cbp(x),w),C.a1,new B.fZ("Adicionar",new A.cbq(x,d),!1,w)],y.p),C.G,C.h,C.K,0,C.u),C.z,w,new B.a2(20,20,20,v.f.d+20),w,w,C.a3)}}
A.afR.prototype={
LB(d,e,f,g){return this.bb5(0,e,f,g)},
bb5(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$LB=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cTl(g.a)
x=3
return B.d(f.a1(0,$.wE().$1(g.a).gec(),y.B),$async$LB)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Ui(e,u,!1),$async$LB)
case 4:case 1:return B.l(v,w)}})
return B.m($async$LB,w)},
bg(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cI($.cr(),new A.cjl(),y.v,s),s)
s=e.H($.cUc().$1(new B.Z2(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dq(x))return C.au
s=B.a([],y.G)
for(w=J.cb(x),v=w.gX(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.wE().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aK(y.N)
for(w=w.gX(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.Q(C.D5,B.x(B.a([D.bLO,D.bMD,new F.Lp(s,new A.cjm(this,d,e,x),v,null)],y.p),C.G,C.h,C.l,0,C.u),null)}}
var z=a.updateTypes(["OY(O)","~(dV)","y(nB)"])
A.cI0.prototype={
$1(d){return d.a===this.a},
$S:350}
A.cI1.prototype={
$1(d){return d.b},
$S:1514}
A.czZ.prototype={
$0(){return this.a.gS().a1(0,$.zp().gaX(),y.I).jH()},
$S:1}
A.czN.prototype={
$1(d){return d.x===C.zm},
$S:59}
A.czO.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bD(0,x==null?d.ch:x)},
$S:177}
A.czP.prototype={
$1(d){return d.x===C.ir},
$S:59}
A.czY.prototype={
$1(d){return C.f.aY(C.j.k(B.aA(d)),2,"0")+"/"+C.f.aY(C.j.k(B.ar(d)),2,"0")},
$S:143}
A.czQ.prototype={
$0(){var x=this.a
return x.Lq(this.b,x.gS())},
$S:0}
A.czR.prototype={
$0(){var x=this.a
return x.p(new A.czM(x))},
$S:0}
A.czM.prototype={
$0(){return this.a.w=D.AB},
$S:0}
A.czS.prototype={
$0(){var x=this.a
return x.p(new A.czL(x))},
$S:0}
A.czL.prototype={
$0(){return this.a.w=D.adO},
$S:0}
A.czT.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qg(w,x.gS(),this.b)},
$S:0}
A.czU.prototype={
$1(d){return d.x===C.ir},
$S:59}
A.czV.prototype={
$1(d){return d.x===C.ir},
$S:59}
A.czW.prototype={
$0(){return this.a.gS().a1(0,$.zp().gaX(),y.I).Fd(this.b.a)},
$S:0}
A.czX.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:17}
A.czK.prototype={
$1(d){return D.cp9},
$S:z+0}
A.cbo.prototype={
$1(d){var x=this.a
return x.p(new A.cbn(x,d))},
$S:438}
A.cbn.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cbp.prototype={
$1(d){var x=this.a
return x.p(new A.cbm(x,d))},
$S:106}
A.cbm.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cbq.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cbl(u))
if(u.w!=null)return
x=B.am(this.b,!1)
w=C.f.C(u.d.a.a)
v=C.f.C(u.e.a.a)
if(v.length===0)v=null
x.ae(new A.aJT(w,v,u.f,u.r))},
$S:0}
A.cbl.prototype={
$0(){var x=this.a
x.w=C.f.C(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cjl.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:35}
A.cjm.prototype={
$1(d){var x=this
return x.a.LB(0,x.b,x.c,J.d1L(x.d,new A.cjk(d)))},
$S:z+1}
A.cjk.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cT4.prototype={
$1(d){return this.aHI(d)},
aHI(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").ck(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ao(s),o=y.P;p.t();){q=p.gE(p)
J.b3(r,B.a0(J.i(o.a(q),"id")),B.d8Z(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bHS
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1515}
A.cLI.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.ab4,x,x,x)],v)
w=w.f
if(C.f.C(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.S,B.h(C.f.C(w),x,x,x,x,D.c6s,x,x,x)],v))}u.push(C.bt)
u.push(B.DR(D.aEt,D.ccQ,new A.cLF(d),x))
if(this.b!=null)C.e.n(u,B.a([C.S,B.h5(Q.abf,new A.cLG(d),x)],v))
u.push(C.av)
u.push(B.cx(C.mK,x,x,new A.cLH(d),x,x))
return B.bF(!0,new B.Q(C.O_,B.x(u,C.G,C.h,C.K,0,C.u),x),x,C.a_,!0)},
$S:46}
A.cLF.prototype={
$0(){return B.am(this.a,!1).ae("done")},
$S:0}
A.cLG.prototype={
$0(){return B.am(this.a,!1).ae("open")},
$S:0}
A.cLH.prototype={
$0(){return B.am(this.a,!1).bx()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bz,[A.cI0,A.cI1,A.czN,A.czP,A.czY,A.czU,A.czV,A.czK,A.cbo,A.cbp,A.cjl,A.cjm,A.cjk,A.cT4,A.cLI])
w(A.aQz,B.f8)
w(A.a9W,B.dA)
w(A.aQy,B.dt)
x(B.bR,[A.czZ,A.czQ,A.czR,A.czM,A.czS,A.czL,A.czT,A.czW,A.czX,A.cbn,A.cbm,A.cbq,A.cbl,A.cLF,A.cLG,A.cLH])
w(A.czO,B.cN)
w(A.aJT,B.L)
w(A.OY,B.G)
w(A.aJU,B.Y)
w(A.afR,B.eq)})()
B.br(b.typeUniverse,JSON.parse('{"a9W":{"G":[],"e":[],"f":[]},"OY":{"G":[],"e":[],"f":[]},"aQy":{"Y":["a9W"]},"aJU":{"Y":["OY"]},"afR":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ay<t<nB>?>"),D:x("ay<dV?>"),R:x("eG"),v:x("ef"),Z:x("nz"),e:x("F<a5<c,oS>>"),B:x("F<dV?>"),E:x("r<el>"),G:x("r<dV>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oS>"),P:x("a5<c,@>"),U:x("eu<+(c,c),c>"),w:x("dg"),N:x("c"),I:x("u2"),z:x("BA"),c:x("oS"),A:x("a6<+(c,c)>"),g:x("aJT"),q:x("dn"),h:x("a5<c,@>?"),X:x("L?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aEt=new B.b7(C.dr,null,null,null,null,null)
D.aHy=new G.Kt(!1,!1,null,null)
D.aHI=new B.i8(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bek=x([D.aHI],y.p)
D.aHA=new B.Ts(D.bek,0,null)
D.aHC=new B.i8(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aHJ=new B.i8(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aHK=new E.Ey("As vossas tarefas",null,null,null)
D.aHL=new E.Ey("Pr\xf3ximas tarefas",null,null,null)
D.aHN=new E.Ey("Feito",null,null,null)
D.aI2=new B.ex("Nova",C.df,null)
D.aIe=new B.m6("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bHS=new B.c4(C.cL,[],B.w("c4<c,oS>"))
D.chr=new B.D("Sugest\xf5es para ti",null,C.bk,null,null,null,null,null,null,null,null)
D.bLO=new B.Q(C.bV,D.chr,null)
D.cfg=new B.D("Criadas por voc\xeas, sem limite.",null,C.N,null,null,null,null,null,null,null,null)
D.bM1=new B.Q(C.jG,D.cfg,null)
D.aup=new B.a2(20,2,20,10)
D.ce5=new B.D("Com base no que tens procurado.",null,C.N,null,null,null,null,null,null,null,null)
D.bMD=new B.Q(D.aup,D.ce5,null)
D.clc=B.cc("afR")
D.bWS=new B.fo([D.clc],B.w("fo<ky>"))
D.c6s=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccQ=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cp9=new A.OY(null)
D.cpp=new A.afR(null)
D.AB=new A.aQz(0,"todo")
D.adO=new A.aQz(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZs","dmb",()=>B.eI(new A.cT4(),null,!1,null,null,y.r))})()};
(a=>{a["LCL8YgATRNWUzWnU1Be0FJ2iX3A="]=a.current})($__dart_deferred_initializers__);