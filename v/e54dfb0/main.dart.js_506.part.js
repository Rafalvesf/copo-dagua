((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dJv(d){var x=B.eV(new B.eu(new B.a6(P.Xz,new A.cJ_(d),y.A),new A.cJ0(),y.U))
return x},
cJ_:function cJ_(d){this.a=d},
cJ0:function cJ0(){},
dzb(){return new A.aae(null)},
aQT:function aQT(d,e){this.a=d
this.b=e},
aae:function aae(d){this.a=d},
aQS:function aQS(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cAR:function cAR(d){this.a=d},
cAF:function cAF(){},
cAG:function cAG(){},
cAH:function cAH(){},
cAQ:function cAQ(){},
cAI:function cAI(d,e){this.a=d
this.b=e},
cAJ:function cAJ(d){this.a=d},
cAE:function cAE(d){this.a=d},
cAK:function cAK(d){this.a=d},
cAD:function cAD(d){this.a=d},
cAL:function cAL(d,e){this.a=d
this.b=e},
cAM:function cAM(){},
cAN:function cAN(){},
cAO:function cAO(d,e){this.a=d
this.b=e},
cAP:function cAP(d,e){this.a=d
this.b=e},
cAC:function cAC(){},
aKc:function aKc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
P4:function P4(d){this.a=d},
aKd:function aKd(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
ccc:function ccc(d){this.a=d},
ccb:function ccb(d,e){this.a=d
this.b=e},
ccd:function ccd(d){this.a=d},
cca:function cca(d,e){this.a=d
this.b=e},
cce:function cce(d,e){this.a=d
this.b=e},
cc9:function cc9(d){this.a=d},
agb:function agb(d){this.a=d},
ck9:function ck9(){},
cka:function cka(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ck8:function ck8(d){this.a=d},
dF7(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dJv(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
ddE(d,e,f){var x,w=B.dx(e,0,null)
if(w.gds(w)==="/partners"){x=w.gep().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ai(d).aw("/partners",new M.Ly(x,!1),y.X)
return}B.ai(d).aw(e,null,y.X)},
Qm(d,e,f){return A.dMh(d,e,f)},
dMh(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qm=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a0(0,$.zs().gaY(),y.I)
if(!f.ax)j.Og(f.a)
q=f.r
x=q==="parceiros"&&C.f.b4(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a0(0,$.cr(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aVT(s,p),$async$Qm)
case 11:r=h
if(d.e!=null){p=r.a
B.ai(d).aw("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rP(d,e,p,null,null),$async$Qm)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a0(0,$.dnc().ge7(),y.e),$async$Qm)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dF7(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9Y||l==null?18:19
break
case 18:x=20
return B.d(B.bZ(null,new A.cMJ(f,l),!1,d,!0,!1,null,y.N),$async$Qm)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.Fj(f.a),$async$Qm)
case 24:if(d.e!=null)d.O(y.q).f.a2(B.c1(null,null,null,null,null,C.z,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.ddE(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9X)j.X_(f.a)
A.ddE(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qm,w)},
cU4:function cU4(){},
cMJ:function cMJ(d,e){this.a=d
this.b=e},
cMG:function cMG(d){this.a=d},
cMH:function cMH(d){this.a=d},
cMI:function cMI(d){this.a=d},
aVT(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVT=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&B.b()
x=3
return B.d(p.R("proposals").ak(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",e).dS(0),$async$aVT)
case 3:u=g
p=J.a7(u)
t=B.Z(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qi(d,t),$async$aVT)
case 4:r=g
p=s==null
q=B.C(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eG(r,q,t,B.C(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.k2)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVT,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[140]
I=c[163]
E=c[167]
K=c[190]
L=c[122]
M=c[135]
G=c[87]
N=c[255]
A=a.updateHolder(c[52],A)
D=c[410]
O=c[80]
P=c[411]
H=c[173]
Q=c[338]
A.aQT.prototype={
I(){return"_TasksTab."+this.b}}
A.aae.prototype={
P(){return new A.aQS(D.AD)}}
A.aQS.prototype={
ad(){this.ao()
B.jl(new A.cAR(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().H($.zs(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cAF(),a1))
C.e.cC(e,new A.cAG())
x=f.b
w=x.length+new B.a6(d,new A.cAH(),a1).gA(0)
v=w+e.length
u=new A.cAQ()
t=y.p
s=B.a([new B.qW(new A.cAI(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.em("Por fazer",r===D.AD,w,new A.cAJ(h),g),new B.em("Feito",r===D.adO,e.length,new A.cAK(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pw(s,g),D.aIl,new K.me(r,16,!1,g),B.vm(g,g,"O vosso plano",C.hO,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.AD){e=B.a([D.cpA,D.aHS],t)
if(x.length===0)e.push(D.aHH)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.H)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9Z?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.C(C.e.gL(C.f.eX(k,B.aT("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a1(k," \xb7 ")
i=n.ax?g:D.aI9
s.push(new B.ia(D.aHF,n.e,k,i,!0,new A.cAL(h,n),!1,g))}e.push(B.ff(s,0))}e.push(D.aHR)
e.push(D.bM8)
x=B.a([],t)
if(!new B.a6(d,new A.cAM(),a1).gX(0).t())x.push(D.aHJ)
else for(d=C.e.gX(d),a0=new B.hc(d,new A.cAN(),a0.i("hc<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.ia(new G.Kz(!1,!1,new A.cAO(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.ff(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aHQ)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.ia(N.Qz,n.e,new A.cAP(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aHU,B.ff(d,0)],t))}return B.cQ(g,C.d2,B.ox(D.bWZ,40,q,g,!0,!1),!0,g)},
Lz(d,e){return this.bkv(d,e)},
bkv(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$Lz=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bZ(null,new A.cAC(),!1,d,!0,!0,null,y.g),$async$Lz)
case 3:q=g
if(q==null){x=1
break}u=e.a0(0,$.zs().gaY(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.MQ(q.d,s,r,t),$async$Lz)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lz,w)}}
A.aKc.prototype={}
A.P4.prototype={
P(){var x=$.aa()
return new A.aKd(new B.aF(C.al,x),new B.aF(C.al,x))}}
A.aKd.prototype={
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a5()},
u(d){var x=this,w=null,v=B.ax(d,w,y.w).w
return B.dR(B.x(B.a([B.h("Nova tarefa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a1,new H.mH("T\xedtulo",x.d,x.w,w,w,w),C.S,new H.mH("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.S,L.d4n("Prazo (opcional)",new A.ccc(x),x.f),C.aC,new O.a1I(x.r,new A.ccd(x),w),C.a1,new B.h0("Adicionar",new A.cce(x,d),!1,w)],y.p),C.G,C.h,C.K,0,C.u),C.z,w,new B.a2(20,20,20,v.f.d+20),w,w,C.a2)}}
A.agb.prototype={
LK(d,e,f,g){return this.bbQ(0,e,f,g)},
bbQ(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$LK=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cUl(g.a)
x=3
return B.d(f.a0(0,$.wG().$1(g.a).ge7(),y.B),$async$LK)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Ur(e,u,!1),$async$LK)
case 4:case 1:return B.l(v,w)}})
return B.m($async$LK,w)},
bf(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cJ($.cr(),new A.ck9(),y.v,s),s)
s=e.H($.cVc().$1(new B.Zd(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dr(x))return C.as
s=B.a([],y.G)
for(w=J.cb(x),v=w.gX(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.wG().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aK(y.N)
for(w=w.gX(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.R(C.D5,B.x(B.a([D.bLV,D.bMK,new F.Lw(s,new A.cka(this,d,e,x),v,null)],y.p),C.G,C.h,C.l,0,C.u),null)}}
var z=a.updateTypes(["P4(N)","~(dW)","y(nG)"])
A.cJ_.prototype={
$1(d){return d.a===this.a},
$S:486}
A.cJ0.prototype={
$1(d){return d.b},
$S:1514}
A.cAR.prototype={
$0(){return this.a.gS().a0(0,$.zs().gaY(),y.I).jK()},
$S:1}
A.cAF.prototype={
$1(d){return d.x===C.zo},
$S:57}
A.cAG.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bE(0,x==null?d.ch:x)},
$S:161}
A.cAH.prototype={
$1(d){return d.x===C.is},
$S:57}
A.cAQ.prototype={
$1(d){return C.f.aW(C.j.k(B.aA(d)),2,"0")+"/"+C.f.aW(C.j.k(B.ao(d)),2,"0")},
$S:152}
A.cAI.prototype={
$0(){var x=this.a
return x.Lz(this.b,x.gS())},
$S:0}
A.cAJ.prototype={
$0(){var x=this.a
return x.p(new A.cAE(x))},
$S:0}
A.cAE.prototype={
$0(){return this.a.w=D.AD},
$S:0}
A.cAK.prototype={
$0(){var x=this.a
return x.p(new A.cAD(x))},
$S:0}
A.cAD.prototype={
$0(){return this.a.w=D.adO},
$S:0}
A.cAL.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qm(w,x.gS(),this.b)},
$S:0}
A.cAM.prototype={
$1(d){return d.x===C.is},
$S:57}
A.cAN.prototype={
$1(d){return d.x===C.is},
$S:57}
A.cAO.prototype={
$0(){return this.a.gS().a0(0,$.zs().gaY(),y.I).Fj(this.b.a)},
$S:0}
A.cAP.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:17}
A.cAC.prototype={
$1(d){return D.cpk},
$S:z+0}
A.ccc.prototype={
$1(d){var x=this.a
return x.p(new A.ccb(x,d))},
$S:514}
A.ccb.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.ccd.prototype={
$1(d){var x=this.a
return x.p(new A.cca(x,d))},
$S:96}
A.cca.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cce.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cc9(u))
if(u.w!=null)return
x=B.am(this.b,!1)
w=C.f.C(u.d.a.a)
v=C.f.C(u.e.a.a)
if(v.length===0)v=null
x.af(new A.aKc(w,v,u.f,u.r))},
$S:0}
A.cc9.prototype={
$0(){var x=this.a
x.w=C.f.C(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.ck9.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:36}
A.cka.prototype={
$1(d){var x=this
return x.a.LK(0,x.b,x.c,J.d2L(x.d,new A.ck8(d)))},
$S:z+1}
A.ck8.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cU4.prototype={
$1(d){return this.aIf(d)},
aIf(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.R("task_templates").cn(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ap(s),o=y.P;p.t();){q=p.gE(p)
J.b3(r,B.Z(J.i(o.a(q),"id")),B.da_(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bHZ
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
A.cMJ.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.ab5,x,x,x)],v)
w=w.f
if(C.f.C(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.R,B.h(C.f.C(w),x,x,x,x,D.c6z,x,x,x)],v))}u.push(C.bt)
u.push(B.DW(D.aEz,D.ccY,new A.cMG(d),x))
if(this.b!=null)C.e.n(u,B.a([C.R,B.h9(Q.abg,new A.cMH(d),x)],v))
u.push(C.av)
u.push(B.cx(C.mL,x,x,new A.cMI(d),x,x))
return B.bF(!0,new B.R(C.NZ,B.x(u,C.G,C.h,C.K,0,C.u),x),x,C.a_,!0)},
$S:45}
A.cMG.prototype={
$0(){return B.am(this.a,!1).af("done")},
$S:0}
A.cMH.prototype={
$0(){return B.am(this.a,!1).af("open")},
$S:0}
A.cMI.prototype={
$0(){return B.am(this.a,!1).bu()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.cJ_,A.cJ0,A.cAF,A.cAH,A.cAQ,A.cAM,A.cAN,A.cAC,A.ccc,A.ccd,A.ck9,A.cka,A.ck8,A.cU4,A.cMJ])
w(A.aQT,B.f3)
w(A.aae,B.dA)
w(A.aQS,B.du)
x(B.bQ,[A.cAR,A.cAI,A.cAJ,A.cAE,A.cAK,A.cAD,A.cAL,A.cAO,A.cAP,A.ccb,A.cca,A.cce,A.cc9,A.cMG,A.cMH,A.cMI])
w(A.cAG,B.cL)
w(A.aKc,B.L)
w(A.P4,B.G)
w(A.aKd,B.Y)
w(A.agb,B.ex)})()
B.bs(b.typeUniverse,JSON.parse('{"aae":{"G":[],"e":[],"f":[]},"P4":{"G":[],"e":[],"f":[]},"aQS":{"Y":["aae"]},"aKd":{"Y":["P4"]},"agb":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("az<t<nG>?>"),D:x("az<dW?>"),R:x("eG"),v:x("eg"),Z:x("nE"),e:x("F<a5<c,oV>>"),B:x("F<dW?>"),E:x("r<em>"),G:x("r<dW>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oV>"),P:x("a5<c,@>"),U:x("eu<+(c,c),c>"),w:x("di"),N:x("c"),I:x("u3"),z:x("BG"),c:x("oV"),A:x("a6<+(c,c)>"),g:x("aKc"),q:x("dp"),h:x("a5<c,@>?"),X:x("L?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aEz=new B.b7(C.dt,null,null,null,null,null)
D.aHF=new G.Kz(!1,!1,null,null)
D.aHP=new B.ia(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.ber=x([D.aHP],y.p)
D.aHH=new B.TB(D.ber,0,null)
D.aHJ=new B.ia(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aHQ=new B.ia(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aHR=new E.EC("As vossas tarefas",null,null,null)
D.aHS=new E.EC("Pr\xf3ximas tarefas",null,null,null)
D.aHU=new E.EC("Feito",null,null,null)
D.aI9=new B.ey("Nova",C.dg,null)
D.aIl=new B.mf("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bHZ=new B.c5(C.cN,[],B.w("c5<c,oV>"))
D.chC=new B.D("Sugest\xf5es para ti",null,C.bl,null,null,null,null,null,null,null,null)
D.bLV=new B.R(C.bQ,D.chC,null)
D.cfr=new B.D("Criadas por voc\xeas, sem limite.",null,C.O,null,null,null,null,null,null,null,null)
D.bM8=new B.R(C.jI,D.cfr,null)
D.aus=new B.a2(20,2,20,10)
D.ced=new B.D("Com base no que tens procurado.",null,C.O,null,null,null,null,null,null,null,null)
D.bMK=new B.R(D.aus,D.ced,null)
D.cln=B.cc("agb")
D.bWZ=new B.fr([D.cln],B.w("fr<kB>"))
D.c6z=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccY=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cpk=new A.P4(null)
D.cpA=new A.agb(null)
D.AD=new A.aQT(0,"todo")
D.adO=new A.aQT(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_z","dnc",()=>B.eI(new A.cU4(),null,!1,null,null,y.r))})()};
(a=>{a["4I0dfPuHiOjDB7ue/2lYqNC0aAs="]=a.current})($__dart_deferred_initializers__);