((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dIh(d){var x=B.eV(new B.eu(new B.a6(P.Xz,new A.cHS(d),y.A),new A.cHT(),y.U))
return x},
cHS:function cHS(d){this.a=d},
cHT:function cHT(){},
dxY(){return new A.a9V(null)},
aQx:function aQx(d,e){this.a=d
this.b=e},
a9V:function a9V(d){this.a=d},
aQw:function aQw(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
czQ:function czQ(d){this.a=d},
czE:function czE(){},
czF:function czF(){},
czG:function czG(){},
czP:function czP(){},
czH:function czH(d,e){this.a=d
this.b=e},
czI:function czI(d){this.a=d},
czD:function czD(d){this.a=d},
czJ:function czJ(d){this.a=d},
czC:function czC(d){this.a=d},
czK:function czK(d,e){this.a=d
this.b=e},
czL:function czL(){},
czM:function czM(){},
czN:function czN(d,e){this.a=d
this.b=e},
czO:function czO(d,e){this.a=d
this.b=e},
czB:function czB(){},
aJR:function aJR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OX:function OX(d){this.a=d},
aJS:function aJS(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cbf:function cbf(d){this.a=d},
cbe:function cbe(d,e){this.a=d
this.b=e},
cbg:function cbg(d){this.a=d},
cbd:function cbd(d,e){this.a=d
this.b=e},
cbh:function cbh(d,e){this.a=d
this.b=e},
cbc:function cbc(d){this.a=d},
afP:function afP(d){this.a=d},
cjc:function cjc(){},
cjd:function cjd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjb:function cjb(d){this.a=d},
dDU(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dIh(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
dcs(d,e,f){var x,w=B.dw(e,0,null)
if(w.gdn(w)==="/partners"){x=w.gen().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ah(d).av("/partners",new M.Lq(x,!1),y.X)
return}B.ah(d).av(e,null,y.X)},
Qf(d,e,f){return A.dL1(d,e,f)},
dL1(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qf=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a1(0,$.zp().gaX(),y.I)
if(!f.ax)j.O4(f.a)
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
return B.d(A.aVu(s,p),$async$Qf)
case 11:r=h
if(d.e!=null){p=r.a
B.ah(d).av("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rL(d,e,p,null,null),$async$Qf)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a1(0,$.dm0().geh(),y.e),$async$Qf)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dDU(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9Y||l==null?18:19
break
case 18:x=20
return B.d(B.bZ(null,new A.cLz(f,l),!1,d,!0,!1,null,y.N),$async$Qf)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.Fc(f.a),$async$Qf)
case 24:if(d.e!=null)d.O(y.q).f.a2(B.c3(null,null,null,null,null,C.z,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.dcs(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9X)j.WB(f.a)
A.dcs(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qf,w)},
cSW:function cSW(){},
cLz:function cLz(d,e){this.a=d
this.b=e},
cLw:function cLw(d){this.a=d},
cLx:function cLx(d){this.a=d},
cLy:function cLy(d){this.a=d},
aVu(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVu=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.R().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").am(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",e).dQ(0),$async$aVu)
case 3:u=g
p=J.a7(u)
t=B.a0(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qf(d,t),$async$aVu)
case 4:r=g
p=s==null
q=B.C(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eG(r,q,t,B.C(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.k0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVu,w)}},D,O,P,H,Q
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
A.aQx.prototype={
I(){return"_TasksTab."+this.b}}
A.a9V.prototype={
R(){return new A.aQw(D.AA)}}
A.aQw.prototype={
ad(){this.ar()
B.ji(new A.czQ(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().H($.zp(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.czE(),a1))
C.e.cz(e,new A.czF())
x=f.b
w=x.length+new B.a6(d,new A.czG(),a1).gA(0)
v=w+e.length
u=new A.czP()
t=y.p
s=B.a([new B.qT(new A.czH(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.el("Por fazer",r===D.AA,w,new A.czI(h),g),new B.el("Feito",r===D.adO,e.length,new A.czJ(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.ps(s,g),D.aId,new K.m4(r,16,!1,g),B.vi(g,g,"O vosso plano",C.hO,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.AA){e=B.a([D.cpo,D.aHK],t)
if(x.length===0)e.push(D.aHz)
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
i=n.ax?g:D.aI1
s.push(new B.i8(D.aHx,n.e,k,i,!0,new A.czK(h,n),!1,g))}e.push(B.fc(s,0))}e.push(D.aHJ)
e.push(D.bM0)
x=B.a([],t)
if(!new B.a6(d,new A.czL(),a1).gX(0).t())x.push(D.aHB)
else for(d=C.e.gX(d),a0=new B.h9(d,new A.czM(),a0.i("h9<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i8(new G.Ks(!1,!1,new A.czN(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.fc(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aHI)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.i8(N.Qz,n.e,new A.czO(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aHM,B.fc(d,0)],t))}return B.cP(g,C.cY,B.os(D.bWR,40,q,g,!0,!1),!0,g)},
Lo(d,e){return this.bjE(d,e)},
bjE(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$Lo=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bZ(null,new A.czB(),!1,d,!0,!0,null,y.g),$async$Lo)
case 3:q=g
if(q==null){x=1
break}u=e.a1(0,$.zp().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.ME(q.d,s,r,t),$async$Lo)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lo,w)}}
A.aJR.prototype={}
A.OX.prototype={
R(){var x=$.aa()
return new A.aJS(new B.aF(C.al,x),new B.aF(C.al,x))}}
A.aJS.prototype={
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.ax(d,w,y.w).w
return B.dR(B.x(B.a([B.h("Nova tarefa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a1,new H.mx("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.mx("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d3c("Prazo (opcional)",new A.cbf(x),x.f),C.aC,new O.a1q(x.r,new A.cbg(x),w),C.a1,new B.fZ("Adicionar",new A.cbh(x,d),!1,w)],y.p),C.G,C.h,C.K,0,C.u),C.z,w,new B.a2(20,20,20,v.f.d+20),w,w,C.a3)}}
A.afP.prototype={
Lz(d,e,f,g){return this.bb2(0,e,f,g)},
bb2(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Lz=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cTc(g.a)
x=3
return B.d(f.a1(0,$.wE().$1(g.a).geh(),y.B),$async$Lz)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Uh(e,u,!1),$async$Lz)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lz,w)},
bg(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cI($.cr(),new A.cjc(),y.v,s),s)
s=e.H($.cU3().$1(new B.Z1(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dq(x))return C.au
s=B.a([],y.G)
for(w=J.cb(x),v=w.gX(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.wE().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aK(y.N)
for(w=w.gX(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.Q(C.D4,B.x(B.a([D.bLN,D.bMC,new F.Lo(s,new A.cjd(this,d,e,x),v,null)],y.p),C.G,C.h,C.l,0,C.u),null)}}
var z=a.updateTypes(["OX(O)","~(dV)","y(nA)"])
A.cHS.prototype={
$1(d){return d.a===this.a},
$S:350}
A.cHT.prototype={
$1(d){return d.b},
$S:1514}
A.czQ.prototype={
$0(){return this.a.gS().a1(0,$.zp().gaX(),y.I).jH()},
$S:1}
A.czE.prototype={
$1(d){return d.x===C.zl},
$S:54}
A.czF.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bD(0,x==null?d.ch:x)},
$S:177}
A.czG.prototype={
$1(d){return d.x===C.iq},
$S:54}
A.czP.prototype={
$1(d){return C.f.aY(C.j.k(B.aC(d)),2,"0")+"/"+C.f.aY(C.j.k(B.ar(d)),2,"0")},
$S:143}
A.czH.prototype={
$0(){var x=this.a
return x.Lo(this.b,x.gS())},
$S:0}
A.czI.prototype={
$0(){var x=this.a
return x.p(new A.czD(x))},
$S:0}
A.czD.prototype={
$0(){return this.a.w=D.AA},
$S:0}
A.czJ.prototype={
$0(){var x=this.a
return x.p(new A.czC(x))},
$S:0}
A.czC.prototype={
$0(){return this.a.w=D.adO},
$S:0}
A.czK.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qf(w,x.gS(),this.b)},
$S:0}
A.czL.prototype={
$1(d){return d.x===C.iq},
$S:54}
A.czM.prototype={
$1(d){return d.x===C.iq},
$S:54}
A.czN.prototype={
$0(){return this.a.gS().a1(0,$.zp().gaX(),y.I).Fc(this.b.a)},
$S:0}
A.czO.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:17}
A.czB.prototype={
$1(d){return D.cp8},
$S:z+0}
A.cbf.prototype={
$1(d){var x=this.a
return x.p(new A.cbe(x,d))},
$S:438}
A.cbe.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cbg.prototype={
$1(d){var x=this.a
return x.p(new A.cbd(x,d))},
$S:106}
A.cbd.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cbh.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cbc(u))
if(u.w!=null)return
x=B.am(this.b,!1)
w=C.f.C(u.d.a.a)
v=C.f.C(u.e.a.a)
if(v.length===0)v=null
x.ae(new A.aJR(w,v,u.f,u.r))},
$S:0}
A.cbc.prototype={
$0(){var x=this.a
x.w=C.f.C(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cjc.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:36}
A.cjd.prototype={
$1(d){var x=this
return x.a.Lz(0,x.b,x.c,J.d1B(x.d,new A.cjb(d)))},
$S:z+1}
A.cjb.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cSW.prototype={
$1(d){return this.aHF(d)},
aHF(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").ck(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ao(s),o=y.P;p.t();){q=p.gE(p)
J.b3(r,B.a0(J.i(o.a(q),"id")),B.d8O(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bHR
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
A.cLz.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.ab4,x,x,x)],v)
w=w.f
if(C.f.C(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.S,B.h(C.f.C(w),x,x,x,x,D.c6r,x,x,x)],v))}u.push(C.bs)
u.push(B.DR(D.aEs,D.ccP,new A.cLw(d),x))
if(this.b!=null)C.e.n(u,B.a([C.S,B.h5(Q.abf,new A.cLx(d),x)],v))
u.push(C.av)
u.push(B.cx(C.mG,x,x,new A.cLy(d),x,x))
return B.bF(!0,new B.Q(C.O_,B.x(u,C.G,C.h,C.K,0,C.u),x),x,C.a_,!0)},
$S:46}
A.cLw.prototype={
$0(){return B.am(this.a,!1).ae("done")},
$S:0}
A.cLx.prototype={
$0(){return B.am(this.a,!1).ae("open")},
$S:0}
A.cLy.prototype={
$0(){return B.am(this.a,!1).bx()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bz,[A.cHS,A.cHT,A.czE,A.czG,A.czP,A.czL,A.czM,A.czB,A.cbf,A.cbg,A.cjc,A.cjd,A.cjb,A.cSW,A.cLz])
w(A.aQx,B.f8)
w(A.a9V,B.dD)
w(A.aQw,B.dz)
x(B.bR,[A.czQ,A.czH,A.czI,A.czD,A.czJ,A.czC,A.czK,A.czN,A.czO,A.cbe,A.cbd,A.cbh,A.cbc,A.cLw,A.cLx,A.cLy])
w(A.czF,B.cN)
w(A.aJR,B.L)
w(A.OX,B.G)
w(A.aJS,B.Y)
w(A.afP,B.eq)})()
B.bq(b.typeUniverse,JSON.parse('{"a9V":{"G":[],"e":[],"f":[]},"OX":{"G":[],"e":[],"f":[]},"aQw":{"Y":["a9V"]},"aJS":{"Y":["OX"]},"afP":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ay<t<nA>?>"),D:x("ay<dV?>"),R:x("eG"),v:x("ef"),Z:x("ny"),e:x("F<a5<c,oR>>"),B:x("F<dV?>"),E:x("r<el>"),G:x("r<dV>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oR>"),P:x("a5<c,@>"),U:x("eu<+(c,c),c>"),w:x("dg"),N:x("c"),I:x("u1"),z:x("Bz"),c:x("oR"),A:x("a6<+(c,c)>"),g:x("aJR"),q:x("dn"),h:x("a5<c,@>?"),X:x("L?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aEs=new B.b7(C.dr,null,null,null,null,null)
D.aHx=new G.Ks(!1,!1,null,null)
D.aHH=new B.i8(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bej=x([D.aHH],y.p)
D.aHz=new B.Tr(D.bej,0,null)
D.aHB=new B.i8(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aHI=new B.i8(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aHJ=new E.Ey("As vossas tarefas",null,null,null)
D.aHK=new E.Ey("Pr\xf3ximas tarefas",null,null,null)
D.aHM=new E.Ey("Feito",null,null,null)
D.aI1=new B.ex("Nova",C.df,null)
D.aId=new B.m5("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bHR=new B.c4(C.cL,[],B.w("c4<c,oR>"))
D.chq=new B.D("Sugest\xf5es para ti",null,C.bk,null,null,null,null,null,null,null,null)
D.bLN=new B.Q(C.bV,D.chq,null)
D.cff=new B.D("Criadas por voc\xeas, sem limite.",null,C.N,null,null,null,null,null,null,null,null)
D.bM0=new B.Q(C.jF,D.cff,null)
D.auo=new B.a2(20,2,20,10)
D.ce4=new B.D("Com base no que tens procurado.",null,C.N,null,null,null,null,null,null,null,null)
D.bMC=new B.Q(D.auo,D.ce4,null)
D.clb=B.cc("afP")
D.bWR=new B.fo([D.clb],B.w("fo<ky>"))
D.c6r=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccP=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cp8=new A.OX(null)
D.cpo=new A.afP(null)
D.AA=new A.aQx(0,"todo")
D.adO=new A.aQx(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZh","dm0",()=>B.eI(new A.cSW(),null,!1,null,null,y.r))})()};
(a=>{a["hfBa5vP/PfC+v7MP4yvVn2bDZzw="]=a.current})($__dart_deferred_initializers__);