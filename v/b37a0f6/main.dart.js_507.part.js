((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dJh(d){var x=B.eV(new B.et(new B.a6(P.Xy,new A.cIL(d),y.A),new A.cIM(),y.U))
return x},
cIL:function cIL(d){this.a=d},
cIM:function cIM(){},
dyY(){return new A.aaa(null)},
aQQ:function aQQ(d,e){this.a=d
this.b=e},
aaa:function aaa(d){this.a=d},
aQP:function aQP(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cAF:function cAF(d){this.a=d},
cAt:function cAt(){},
cAu:function cAu(){},
cAv:function cAv(){},
cAE:function cAE(){},
cAw:function cAw(d,e){this.a=d
this.b=e},
cAx:function cAx(d){this.a=d},
cAs:function cAs(d){this.a=d},
cAy:function cAy(d){this.a=d},
cAr:function cAr(d){this.a=d},
cAz:function cAz(d,e){this.a=d
this.b=e},
cAA:function cAA(){},
cAB:function cAB(){},
cAC:function cAC(d,e){this.a=d
this.b=e},
cAD:function cAD(d,e){this.a=d
this.b=e},
cAq:function cAq(){},
aKa:function aKa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
P4:function P4(d){this.a=d},
aKb:function aKb(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cc2:function cc2(d){this.a=d},
cc1:function cc1(d,e){this.a=d
this.b=e},
cc3:function cc3(d){this.a=d},
cc0:function cc0(d,e){this.a=d
this.b=e},
cc4:function cc4(d,e){this.a=d
this.b=e},
cc_:function cc_(d){this.a=d},
ag6:function ag6(d){this.a=d},
ck_:function ck_(){},
ck0:function ck0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjZ:function cjZ(d){this.a=d},
dEU(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dJh(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
ddq(d,e,f){var x,w=B.dx(e,0,null)
if(w.gds(w)==="/partners"){x=w.gep().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ai(d).aw("/partners",new M.Ly(x,!1),y.X)
return}B.ai(d).aw(e,null,y.X)},
Qm(d,e,f){return A.dM3(d,e,f)},
dM3(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qm=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a0(0,$.zs().gaY(),y.I)
if(!f.ax)j.Oe(f.a)
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
return B.d(A.aVP(s,p),$async$Qm)
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
return B.d(B.rO(d,e,p,null,null),$async$Qm)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a0(0,$.dmZ().gec(),y.e),$async$Qm)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dEU(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9X||l==null?18:19
break
case 18:x=20
return B.d(B.bZ(null,new A.cMu(f,l),!1,d,!0,!1,null,y.N),$async$Qm)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.Fh(f.a),$async$Qm)
case 24:if(d.e!=null)d.O(y.q).f.a2(B.c1(null,null,null,null,null,C.z,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.ddq(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9W)j.WY(f.a)
A.ddq(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qm,w)},
cTR:function cTR(){},
cMu:function cMu(d,e){this.a=d
this.b=e},
cMr:function cMr(d){this.a=d},
cMs:function cMs(d){this.a=d},
cMt:function cMt(d){this.a=d},
aVP(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVP=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").ak(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",e).dS(0),$async$aVP)
case 3:u=g
p=J.a7(u)
t=B.Z(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qi(d,t),$async$aVP)
case 4:r=g
p=s==null
q=B.C(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eF(r,q,t,B.C(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.k2)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVP,w)}},D,O,P,H,Q
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
A.aQQ.prototype={
I(){return"_TasksTab."+this.b}}
A.aaa.prototype={
R(){return new A.aQP(D.AC)}}
A.aQP.prototype={
ae(){this.ao()
B.jl(new A.cAF(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().H($.zs(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cAt(),a1))
C.e.cB(e,new A.cAu())
x=f.b
w=x.length+new B.a6(d,new A.cAv(),a1).gA(0)
v=w+e.length
u=new A.cAE()
t=y.p
s=B.a([new B.qV(new A.cAw(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.el("Por fazer",r===D.AC,w,new A.cAx(h),g),new B.el("Feito",r===D.adN,e.length,new A.cAy(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pw(s,g),D.aIh,new K.md(r,16,!1,g),B.vm(g,g,"O vosso plano",C.hP,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.AC){e=B.a([D.cpt,D.aHO],t)
if(x.length===0)e.push(D.aHD)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.H)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9Y?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.C(C.e.gL(C.f.eX(k,B.aT("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a1(k," \xb7 ")
i=n.ax?g:D.aI5
s.push(new B.ia(D.aHB,n.e,k,i,!0,new A.cAz(h,n),!1,g))}e.push(B.ff(s,0))}e.push(D.aHN)
e.push(D.bM4)
x=B.a([],t)
if(!new B.a6(d,new A.cAA(),a1).gX(0).t())x.push(D.aHF)
else for(d=C.e.gX(d),a0=new B.hc(d,new A.cAB(),a0.i("hc<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.ia(new G.Kz(!1,!1,new A.cAC(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.ff(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aHM)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.ia(N.Qy,n.e,new A.cAD(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aHQ,B.ff(d,0)],t))}return B.cQ(g,C.d2,B.ox(D.bWV,40,q,g,!0,!1),!0,g)},
Lx(d,e){return this.bks(d,e)},
bks(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$Lx=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bZ(null,new A.cAq(),!1,d,!0,!0,null,y.g),$async$Lx)
case 3:q=g
if(q==null){x=1
break}u=e.a0(0,$.zs().gaY(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.MO(q.d,s,r,t),$async$Lx)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lx,w)}}
A.aKa.prototype={}
A.P4.prototype={
R(){var x=$.aa()
return new A.aKb(new B.aF(C.al,x),new B.aF(C.al,x))}}
A.aKb.prototype={
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a5()},
u(d){var x=this,w=null,v=B.ax(d,w,y.w).w
return B.dR(B.y(B.a([B.h("Nova tarefa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a1,new H.mF("T\xedtulo",x.d,x.w,w,w,w),C.S,new H.mF("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.S,L.d49("Prazo (opcional)",new A.cc2(x),x.f),C.aC,new O.a1E(x.r,new A.cc3(x),w),C.a1,new B.h0("Adicionar",new A.cc4(x,d),!1,w)],y.p),C.G,C.h,C.K,0,C.u),C.z,w,new B.a2(20,20,20,v.f.d+20),w,w,C.a2)}}
A.ag6.prototype={
LI(d,e,f,g){return this.bbN(0,e,f,g)},
bbN(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$LI=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cU7(g.a)
x=3
return B.d(f.a0(0,$.wG().$1(g.a).gec(),y.B),$async$LI)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Ur(e,u,!1),$async$LI)
case 4:case 1:return B.l(v,w)}})
return B.m($async$LI,w)},
bf(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cJ($.cr(),new A.ck_(),y.v,s),s)
s=e.H($.cUZ().$1(new B.Zc(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dr(x))return C.as
s=B.a([],y.G)
for(w=J.cb(x),v=w.gX(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.wG().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aK(y.N)
for(w=w.gX(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.R(C.D5,B.y(B.a([D.bLR,D.bMG,new F.Lw(s,new A.ck0(this,d,e,x),v,null)],y.p),C.G,C.h,C.l,0,C.u),null)}}
var z=a.updateTypes(["P4(N)","~(dV)","x(nF)"])
A.cIL.prototype={
$1(d){return d.a===this.a},
$S:464}
A.cIM.prototype={
$1(d){return d.b},
$S:1514}
A.cAF.prototype={
$0(){return this.a.gS().a0(0,$.zs().gaY(),y.I).jK()},
$S:1}
A.cAt.prototype={
$1(d){return d.x===C.zn},
$S:61}
A.cAu.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bE(0,x==null?d.ch:x)},
$S:190}
A.cAv.prototype={
$1(d){return d.x===C.ir},
$S:61}
A.cAE.prototype={
$1(d){return C.f.aX(C.j.k(B.aA(d)),2,"0")+"/"+C.f.aX(C.j.k(B.ao(d)),2,"0")},
$S:129}
A.cAw.prototype={
$0(){var x=this.a
return x.Lx(this.b,x.gS())},
$S:0}
A.cAx.prototype={
$0(){var x=this.a
return x.p(new A.cAs(x))},
$S:0}
A.cAs.prototype={
$0(){return this.a.w=D.AC},
$S:0}
A.cAy.prototype={
$0(){var x=this.a
return x.p(new A.cAr(x))},
$S:0}
A.cAr.prototype={
$0(){return this.a.w=D.adN},
$S:0}
A.cAz.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qm(w,x.gS(),this.b)},
$S:0}
A.cAA.prototype={
$1(d){return d.x===C.ir},
$S:61}
A.cAB.prototype={
$1(d){return d.x===C.ir},
$S:61}
A.cAC.prototype={
$0(){return this.a.gS().a0(0,$.zs().gaY(),y.I).Fh(this.b.a)},
$S:0}
A.cAD.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:18}
A.cAq.prototype={
$1(d){return D.cpd},
$S:z+0}
A.cc2.prototype={
$1(d){var x=this.a
return x.p(new A.cc1(x,d))},
$S:508}
A.cc1.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cc3.prototype={
$1(d){var x=this.a
return x.p(new A.cc0(x,d))},
$S:104}
A.cc0.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cc4.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cc_(u))
if(u.w!=null)return
x=B.am(this.b,!1)
w=C.f.C(u.d.a.a)
v=C.f.C(u.e.a.a)
if(v.length===0)v=null
x.af(new A.aKa(w,v,u.f,u.r))},
$S:0}
A.cc_.prototype={
$0(){var x=this.a
x.w=C.f.C(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.ck_.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:36}
A.ck0.prototype={
$1(d){var x=this
return x.a.LI(0,x.b,x.c,J.d2x(x.d,new A.cjZ(d)))},
$S:z+1}
A.cjZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cTR.prototype={
$1(d){return this.aIc(d)},
aIc(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").cn(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ap(s),o=y.P;p.t();){q=p.gE(p)
J.b3(r,B.Z(J.i(o.a(q),"id")),B.d9M(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bHV
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
A.cMu.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.ab4,x,x,x)],v)
w=w.f
if(C.f.C(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.R,B.h(C.f.C(w),x,x,x,x,D.c6v,x,x,x)],v))}u.push(C.bt)
u.push(B.DW(D.aEx,D.ccT,new A.cMr(d),x))
if(this.b!=null)C.e.n(u,B.a([C.R,B.h8(Q.abf,new A.cMs(d),x)],v))
u.push(C.av)
u.push(B.cv(C.mK,x,x,new A.cMt(d),x,x))
return B.bF(!0,new B.R(C.NZ,B.y(u,C.G,C.h,C.K,0,C.u),x),x,C.a_,!0)},
$S:44}
A.cMr.prototype={
$0(){return B.am(this.a,!1).af("done")},
$S:0}
A.cMs.prototype={
$0(){return B.am(this.a,!1).af("open")},
$S:0}
A.cMt.prototype={
$0(){return B.am(this.a,!1).bv()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.cIL,A.cIM,A.cAt,A.cAv,A.cAE,A.cAA,A.cAB,A.cAq,A.cc2,A.cc3,A.ck_,A.ck0,A.cjZ,A.cTR,A.cMu])
w(A.aQQ,B.f3)
w(A.aaa,B.dA)
w(A.aQP,B.du)
x(B.bQ,[A.cAF,A.cAw,A.cAx,A.cAs,A.cAy,A.cAr,A.cAz,A.cAC,A.cAD,A.cc1,A.cc0,A.cc4,A.cc_,A.cMr,A.cMs,A.cMt])
w(A.cAu,B.cL)
w(A.aKa,B.L)
w(A.P4,B.G)
w(A.aKb,B.Y)
w(A.ag6,B.ex)})()
B.bs(b.typeUniverse,JSON.parse('{"aaa":{"G":[],"e":[],"f":[]},"P4":{"G":[],"e":[],"f":[]},"aQP":{"Y":["aaa"]},"aKb":{"Y":["P4"]},"ag6":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ay<t<nF>?>"),D:x("ay<dV?>"),R:x("eF"),v:x("ef"),Z:x("nD"),e:x("F<a5<c,oV>>"),B:x("F<dV?>"),E:x("r<el>"),G:x("r<dV>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oV>"),P:x("a5<c,@>"),U:x("et<+(c,c),c>"),w:x("di"),N:x("c"),I:x("u3"),z:x("BG"),c:x("oV"),A:x("a6<+(c,c)>"),g:x("aKa"),q:x("dp"),h:x("a5<c,@>?"),X:x("L?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aEx=new B.b8(C.dt,null,null,null,null,null)
D.aHB=new G.Kz(!1,!1,null,null)
D.aHL=new B.ia(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.ben=x([D.aHL],y.p)
D.aHD=new B.TB(D.ben,0,null)
D.aHF=new B.ia(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aHM=new B.ia(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aHN=new E.EC("As vossas tarefas",null,null,null)
D.aHO=new E.EC("Pr\xf3ximas tarefas",null,null,null)
D.aHQ=new E.EC("Feito",null,null,null)
D.aI5=new B.ey("Nova",C.dg,null)
D.aIh=new B.me("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bHV=new B.c5(C.cM,[],B.w("c5<c,oV>"))
D.chv=new B.D("Sugest\xf5es para ti",null,C.bl,null,null,null,null,null,null,null,null)
D.bLR=new B.R(C.bQ,D.chv,null)
D.cfk=new B.D("Criadas por voc\xeas, sem limite.",null,C.O,null,null,null,null,null,null,null,null)
D.bM4=new B.R(C.jI,D.cfk,null)
D.auq=new B.a2(20,2,20,10)
D.ce8=new B.D("Com base no que tens procurado.",null,C.O,null,null,null,null,null,null,null,null)
D.bMG=new B.R(D.auq,D.ce8,null)
D.clg=B.cc("ag6")
D.bWV=new B.fq([D.clg],B.w("fq<kB>"))
D.c6v=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccT=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cpd=new A.P4(null)
D.cpt=new A.ag6(null)
D.AC=new A.aQQ(0,"todo")
D.adN=new A.aQQ(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_k","dmZ",()=>B.eH(new A.cTR(),null,!1,null,null,y.r))})()};
(a=>{a["C8kUZOCgBgxWaKsytHyDyk7U3Pw="]=a.current})($__dart_deferred_initializers__);