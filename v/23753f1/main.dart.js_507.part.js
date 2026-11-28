((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dI7(d){var x=B.eS(new B.eq(new B.a6(P.X2,new A.cHB(d),y.A),new A.cHC(),y.U))
return x},
cHB:function cHB(d){this.a=d},
cHC:function cHC(){},
dxO(){return new A.a9Z(null)},
aQe:function aQe(d,e){this.a=d
this.b=e},
a9Z:function a9Z(d){this.a=d},
aQd:function aQd(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
czS:function czS(d){this.a=d},
czG:function czG(){},
czH:function czH(){},
czI:function czI(){},
czR:function czR(){},
czJ:function czJ(d,e){this.a=d
this.b=e},
czK:function czK(d){this.a=d},
czF:function czF(d){this.a=d},
czL:function czL(d){this.a=d},
czE:function czE(d){this.a=d},
czM:function czM(d,e){this.a=d
this.b=e},
czN:function czN(){},
czO:function czO(){},
czP:function czP(d,e){this.a=d
this.b=e},
czQ:function czQ(d,e){this.a=d
this.b=e},
czD:function czD(){},
aJy:function aJy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OT:function OT(d){this.a=d},
aJz:function aJz(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cbe:function cbe(d){this.a=d},
cbd:function cbd(d,e){this.a=d
this.b=e},
cbf:function cbf(d){this.a=d},
cbc:function cbc(d,e){this.a=d
this.b=e},
cbg:function cbg(d,e){this.a=d
this.b=e},
cbb:function cbb(d){this.a=d},
afQ:function afQ(d){this.a=d},
cjb:function cjb(){},
cjc:function cjc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cja:function cja(d){this.a=d},
dDJ(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dI7(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
dce(d,e,f){var x,w=B.dx(e,0,null)
if(w.gdn(w)==="/partners"){x=w.gej().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ah(d).au("/partners",new M.Lm(x,!1),y.X)
return}B.ah(d).au(e,null,y.X)},
Qa(d,e,f){return A.dKV(d,e,f)},
dKV(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qa=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a0(0,$.zo().gaX(),y.I)
if(!f.ax)j.NS(f.a)
q=f.r
x=q==="parceiros"&&C.f.b2(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a0(0,$.cr(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aVg(s,p),$async$Qa)
case 11:r=h
if(d.e!=null){p=r.a
B.ah(d).au("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rE(d,e,p,null,null),$async$Qa)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a0(0,$.dlL().ge5(),y.e),$async$Qa)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dDJ(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9q||l==null?18:19
break
case 18:x=20
return B.d(B.bW(null,new A.cLl(f,l),!1,d,!0,!1,null,y.N),$async$Qa)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EZ(f.a),$async$Qa)
case 24:if(d.e!=null)d.O(y.q).f.a1(B.c1(null,null,null,null,null,C.y,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.dce(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9p)j.Wu(f.a)
A.dce(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qa,w)},
cSK:function cSK(){},
cLl:function cLl(d,e){this.a=d
this.b=e},
cLi:function cLi(d){this.a=d},
cLj:function cLj(d){this.a=d},
cLk:function cLk(d){this.a=d},
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
return B.d(B.q9(d,t),$async$aVg)
case 4:r=g
p=s==null
q=B.C(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eB(r,q,t,B.C(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.jV)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVg,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[140]
I=c[162]
E=c[166]
K=c[191]
L=c[122]
M=c[135]
G=c[87]
N=c[257]
A=a.updateHolder(c[52],A)
D=c[413]
O=c[80]
P=c[414]
H=c[173]
Q=c[340]
A.aQe.prototype={
I(){return"_TasksTab."+this.b}}
A.a9Z.prototype={
R(){return new A.aQd(D.Aj)}}
A.aQd.prototype={
ac(){this.ao()
B.jk(new A.czS(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().G($.zo(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.czG(),a1))
C.e.cv(e,new A.czH())
x=f.b
w=x.length+new B.a6(d,new A.czI(),a1).gA(0)
v=w+e.length
u=new A.czR()
t=y.p
s=B.a([new B.qM(new A.czJ(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ek("Por fazer",r===D.Aj,w,new A.czK(h),g),new B.ek("Feito",r===D.acW,e.length,new A.czL(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pn(s,g),D.aHi,new K.mc(r,16,!1,g),B.vh(g,g,"O vosso plano",C.hI,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Aj){e=B.a([D.co3,D.aGP],t)
if(x.length===0)e.push(D.aGF)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.H)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9r?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.B(C.e.gL(C.f.eW(k,B.aS("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a2(k," \xb7 ")
i=n.ax?g:D.aH6
s.push(new B.i8(D.aGD,n.e,k,i,!0,new A.czM(h,n),!1,g))}e.push(B.fd(s,0))}e.push(D.aGO)
e.push(D.bL2)
x=B.a([],t)
if(!new B.a6(d,new A.czN(),a1).gX(0).t())x.push(D.aGG)
else for(d=C.e.gX(d),a0=new B.h9(d,new A.czO(),a0.i("h9<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i8(new G.Kp(!1,!1,new A.czP(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.fd(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGN)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.i8(N.Q5,n.e,new A.czQ(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGR,B.fd(d,0)],t))}return B.cP(g,C.d1,B.on(D.bVT,40,q,g,!0,!1),!0,g)},
Lf(d,e){return this.biZ(d,e)},
biZ(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$Lf=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bW(null,new A.czD(),!1,d,!0,!0,null,y.g),$async$Lf)
case 3:q=g
if(q==null){x=1
break}u=e.a0(0,$.zo().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mz(q.d,s,r,t),$async$Lf)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lf,w)}}
A.aJy.prototype={}
A.OT.prototype={
R(){var x=$.aa()
return new A.aJz(new B.aE(C.aj,x),new B.aE(C.aj,x))}}
A.aJz.prototype={
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.aO(d,w,y.w).w
return B.dU(B.A(B.a([B.h("Nova tarefa",w,w,w,w,B.au(d).ok.r,w,w,w),C.a0,new H.mB("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.mB("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d32("Prazo (opcional)",new A.cbe(x),x.f),C.aB,new O.a1r(x.r,new A.cbf(x),w),C.a0,new B.fW("Adicionar",new A.cbg(x,d),!1,w)],y.p),C.F,C.h,C.J),C.y,w,new B.a3(20,20,20,v.f.d+20),w,C.av)}}
A.afQ.prototype={
Lq(d,e,f,g){return this.ban(0,e,f,g)},
ban(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Lq=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cT0(g.a)
x=3
return B.d(f.a0(0,$.wC().$1(g.a).ge5(),y.B),$async$Lq)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Uf(e,u,!1),$async$Lq)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lq,w)},
bc(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cI($.cr(),new A.cjb(),y.v,s),s)
s=e.G($.cTS().$1(new B.Z_(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dr(x))return C.aq
s=B.a([],y.G)
for(w=J.c8(x),v=w.gX(x),u=y.D;v.t();){t=v.gE(v)
t=e.G($.wC().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aL(y.N)
for(w=w.gX(x);w.t();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.S(C.CM,B.A(B.a([D.bKP,D.bLE,new F.Lk(s,new A.cjc(this,d,e,x),v,null)],y.p),C.F,C.h,C.l),null)}}
var z=a.updateTypes(["OT(N)","~(dT)","y(nz)"])
A.cHB.prototype={
$1(d){return d.a===this.a},
$S:480}
A.cHC.prototype={
$1(d){return d.b},
$S:1502}
A.czS.prototype={
$0(){return this.a.gS().a0(0,$.zo().gaX(),y.I).jE()},
$S:1}
A.czG.prototype={
$1(d){return d.x===C.z5},
$S:58}
A.czH.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bC(0,x==null?d.ch:x)},
$S:183}
A.czI.prototype={
$1(d){return d.x===C.io},
$S:58}
A.czR.prototype={
$1(d){return C.f.aW(C.j.k(B.az(d)),2,"0")+"/"+C.f.aW(C.j.k(B.ao(d)),2,"0")},
$S:129}
A.czJ.prototype={
$0(){var x=this.a
return x.Lf(this.b,x.gS())},
$S:0}
A.czK.prototype={
$0(){var x=this.a
return x.p(new A.czF(x))},
$S:0}
A.czF.prototype={
$0(){return this.a.w=D.Aj},
$S:0}
A.czL.prototype={
$0(){var x=this.a
return x.p(new A.czE(x))},
$S:0}
A.czE.prototype={
$0(){return this.a.w=D.acW},
$S:0}
A.czM.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qa(w,x.gS(),this.b)},
$S:0}
A.czN.prototype={
$1(d){return d.x===C.io},
$S:58}
A.czO.prototype={
$1(d){return d.x===C.io},
$S:58}
A.czP.prototype={
$0(){return this.a.gS().a0(0,$.zo().gaX(),y.I).EZ(this.b.a)},
$S:0}
A.czQ.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:17}
A.czD.prototype={
$1(d){return D.cnO},
$S:z+0}
A.cbe.prototype={
$1(d){var x=this.a
return x.p(new A.cbd(x,d))},
$S:508}
A.cbd.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cbf.prototype={
$1(d){var x=this.a
return x.p(new A.cbc(x,d))},
$S:127}
A.cbc.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cbg.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cbb(u))
if(u.w!=null)return
x=B.am(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.ae(new A.aJy(w,v,u.f,u.r))},
$S:0}
A.cbb.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cjb.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:36}
A.cjc.prototype={
$1(d){var x=this
return x.a.Lq(0,x.b,x.c,J.d1s(x.d,new A.cja(d)))},
$S:z+1}
A.cja.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cSK.prototype={
$1(d){return this.aHg(d)},
aHg(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").cl(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ap(s),o=y.P;p.t();){q=p.gE(p)
J.b3(r,B.Z(J.i(o.a(q),"id")),B.d8C(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGT
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1503}
A.cLl.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aax,x,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.Q,B.h(C.f.B(w),x,x,x,x,D.c5m,x,x,x)],v))}u.push(C.bs)
u.push(B.DR(D.aDy,D.cbL,new A.cLi(d),x))
if(this.b!=null)C.e.n(u,B.a([C.Q,B.h5(Q.aaI,new A.cLj(d),x)],v))
u.push(C.as)
u.push(B.cx(C.mw,x,x,new A.cLk(d),x,x))
return B.bD(!0,new B.S(C.Ny,B.A(u,C.F,C.h,C.J),x),x,C.Z,!0)},
$S:43}
A.cLi.prototype={
$0(){return B.am(this.a,!1).ae("done")},
$S:0}
A.cLj.prototype={
$0(){return B.am(this.a,!1).ae("open")},
$S:0}
A.cLk.prototype={
$0(){return B.am(this.a,!1).bp()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.cHB,A.cHC,A.czG,A.czI,A.czR,A.czN,A.czO,A.czD,A.cbe,A.cbf,A.cjb,A.cjc,A.cja,A.cSK,A.cLl])
w(A.aQe,B.eW)
w(A.a9Z,B.dz)
w(A.aQd,B.du)
x(B.bP,[A.czS,A.czJ,A.czK,A.czF,A.czL,A.czE,A.czM,A.czP,A.czQ,A.cbd,A.cbc,A.cbg,A.cbb,A.cLi,A.cLj,A.cLk])
w(A.czH,B.cK)
w(A.aJy,B.J)
w(A.OT,B.G)
w(A.aJz,B.Y)
w(A.afQ,B.et)})()
B.bn(b.typeUniverse,JSON.parse('{"a9Z":{"G":[],"e":[],"f":[]},"OT":{"G":[],"e":[],"f":[]},"aQd":{"Y":["a9Z"]},"aJz":{"Y":["OT"]},"afQ":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ay<t<nz>?>"),D:x("ay<dT?>"),R:x("eB"),v:x("ed"),Z:x("ny"),e:x("F<a5<c,oM>>"),B:x("F<dT?>"),E:x("r<ek>"),G:x("r<dT>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oM>"),P:x("a5<c,@>"),U:x("eq<+(c,c),c>"),w:x("dg"),N:x("c"),I:x("tX"),z:x("By"),c:x("oM"),A:x("a6<+(c,c)>"),g:x("aJy"),q:x("dp"),h:x("a5<c,@>?"),X:x("J?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDy=new B.b7(C.ds,null,null,null,null,null)
D.aGD=new G.Kp(!1,!1,null,null)
D.aGM=new B.i8(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdo=x([D.aGM],y.p)
D.aGF=new B.Tp(D.bdo,0,null)
D.aGG=new B.i8(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGN=new B.i8(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGO=new E.Ew("As vossas tarefas",null,null,null)
D.aGP=new E.Ew("Pr\xf3ximas tarefas",null,null,null)
D.aGR=new E.Ew("Feito",null,null,null)
D.aH6=new B.ev("Nova",C.dd,null)
D.aHi=new B.md("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGT=new B.c5(C.cJ,[],B.w("c5<c,oM>"))
D.cgq=new B.D("Sugest\xf5es para ti",null,C.bj,null,null,null,null,null,null,null,null)
D.bKP=new B.S(C.bL,D.cgq,null)
D.cee=new B.D("Criadas por voc\xeas, sem limite.",null,C.N,null,null,null,null,null,null,null,null)
D.bL2=new B.S(C.jA,D.cee,null)
D.atu=new B.a3(20,2,20,10)
D.cd0=new B.D("Com base no que tens procurado.",null,C.N,null,null,null,null,null,null,null,null)
D.bLE=new B.S(D.atu,D.cd0,null)
D.cjU=B.c9("afQ")
D.bVT=new B.fo([D.cjU],B.w("fo<ky>"))
D.c5m=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbL=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cnO=new A.OT(null)
D.co3=new A.afQ(null)
D.Aj=new A.aQe(0,"todo")
D.acW=new A.aQe(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZd","dlL",()=>B.eD(new A.cSK(),null,!1,null,null,y.r))})()};
(a=>{a["pKhNAa6dh/i7kzEGOFJLDRgfHAA="]=a.current})($__dart_deferred_initializers__);