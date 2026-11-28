((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dJb(d){var x=B.eV(new B.et(new B.a6(P.Xy,new A.cIH(d),y.A),new A.cII(),y.U))
return x},
cIH:function cIH(d){this.a=d},
cII:function cII(){},
dyS(){return new A.aa9(null)},
aQP:function aQP(d,e){this.a=d
this.b=e},
aa9:function aa9(d){this.a=d},
aQO:function aQO(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cAC:function cAC(d){this.a=d},
cAq:function cAq(){},
cAr:function cAr(){},
cAs:function cAs(){},
cAB:function cAB(){},
cAt:function cAt(d,e){this.a=d
this.b=e},
cAu:function cAu(d){this.a=d},
cAp:function cAp(d){this.a=d},
cAv:function cAv(d){this.a=d},
cAo:function cAo(d){this.a=d},
cAw:function cAw(d,e){this.a=d
this.b=e},
cAx:function cAx(){},
cAy:function cAy(){},
cAz:function cAz(d,e){this.a=d
this.b=e},
cAA:function cAA(d,e){this.a=d
this.b=e},
cAn:function cAn(){},
aK9:function aK9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
P4:function P4(d){this.a=d},
aKa:function aKa(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cc0:function cc0(d){this.a=d},
cc_:function cc_(d,e){this.a=d
this.b=e},
cc1:function cc1(d){this.a=d},
cbZ:function cbZ(d,e){this.a=d
this.b=e},
cc2:function cc2(d,e){this.a=d
this.b=e},
cbY:function cbY(d){this.a=d},
ag5:function ag5(d){this.a=d},
cjY:function cjY(){},
cjZ:function cjZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjX:function cjX(d){this.a=d},
dEO(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dJb(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
ddk(d,e,f){var x,w=B.dx(e,0,null)
if(w.gds(w)==="/partners"){x=w.gep().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ai(d).aw("/partners",new M.Ly(x,!1),y.X)
return}B.ai(d).aw(e,null,y.X)},
Qm(d,e,f){return A.dLX(d,e,f)},
dLX(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qm=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a2(0,$.zs().gaY(),y.I)
if(!f.ax)j.Oe(f.a)
q=f.r
x=q==="parceiros"&&C.f.b4(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a2(0,$.cs(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aVO(s,p),$async$Qm)
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
return B.d(e.a2(0,$.dmT().geh(),y.e),$async$Qm)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dEO(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9X||l==null?18:19
break
case 18:x=20
return B.d(B.bZ(null,new A.cMo(f,l),!1,d,!0,!1,null,y.N),$async$Qm)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.Fh(f.a),$async$Qm)
case 24:if(d.e!=null)d.O(y.q).f.a1(B.c1(null,null,null,null,null,C.z,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.ddk(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9W)j.WY(f.a)
A.ddk(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qm,w)},
cTL:function cTL(){},
cMo:function cMo(d,e){this.a=d
this.b=e},
cMl:function cMl(d){this.a=d},
cMm:function cMm(d){this.a=d},
cMn:function cMn(d){this.a=d},
aVO(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVO=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").ak(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",e).dS(0),$async$aVO)
case 3:u=g
p=J.a7(u)
t=B.Z(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qh(d,t),$async$aVO)
case 4:r=g
p=s==null
q=B.C(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eF(r,q,t,B.C(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.k2)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVO,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[139]
I=c[162]
E=c[166]
K=c[189]
L=c[121]
M=c[134]
G=c[86]
N=c[254]
A=a.updateHolder(c[52],A)
D=c[409]
O=c[80]
P=c[410]
H=c[172]
Q=c[337]
A.aQP.prototype={
I(){return"_TasksTab."+this.b}}
A.aa9.prototype={
R(){return new A.aQO(D.AC)}}
A.aQO.prototype={
ae(){this.ao()
B.jl(new A.cAC(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().H($.zs(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cAq(),a1))
C.e.cB(e,new A.cAr())
x=f.b
w=x.length+new B.a6(d,new A.cAs(),a1).gA(0)
v=w+e.length
u=new A.cAB()
t=y.p
s=B.a([new B.qV(new A.cAt(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.el("Por fazer",r===D.AC,w,new A.cAu(h),g),new B.el("Feito",r===D.adN,e.length,new A.cAv(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pv(s,g),D.aIh,new K.mc(r,16,!1,g),B.vm(g,g,"O vosso plano",C.hP,p,"de "+v+" feitas",""+q)],t)
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
k=k.length===0?g:C.e.a0(k," \xb7 ")
i=n.ax?g:D.aI5
s.push(new B.ia(D.aHB,n.e,k,i,!0,new A.cAw(h,n),!1,g))}e.push(B.ff(s,0))}e.push(D.aHN)
e.push(D.bM4)
x=B.a([],t)
if(!new B.a6(d,new A.cAx(),a1).gX(0).t())x.push(D.aHF)
else for(d=C.e.gX(d),a0=new B.hb(d,new A.cAy(),a0.i("hb<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.ia(new G.Kz(!1,!1,new A.cAz(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.ff(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aHM)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.ia(N.Qy,n.e,new A.cAA(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aHQ,B.ff(d,0)],t))}return B.cQ(g,C.d2,B.ow(D.bWV,40,q,g,!0,!1),!0,g)},
Lx(d,e){return this.bks(d,e)},
bks(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$Lx=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bZ(null,new A.cAn(),!1,d,!0,!0,null,y.g),$async$Lx)
case 3:q=g
if(q==null){x=1
break}u=e.a2(0,$.zs().gaY(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.MO(q.d,s,r,t),$async$Lx)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lx,w)}}
A.aK9.prototype={}
A.P4.prototype={
R(){var x=$.aa()
return new A.aKa(new B.aF(C.al,x),new B.aF(C.al,x))}}
A.aKa.prototype={
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a5()},
u(d){var x=this,w=null,v=B.ax(d,w,y.w).w
return B.dR(B.y(B.a([B.h("Nova tarefa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a1,new H.mE("T\xedtulo",x.d,x.w,w,w,w),C.S,new H.mE("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.S,L.d43("Prazo (opcional)",new A.cc0(x),x.f),C.aC,new O.a1D(x.r,new A.cc1(x),w),C.a1,new B.h0("Adicionar",new A.cc2(x,d),!1,w)],y.p),C.G,C.h,C.K,0,C.u),C.z,w,new B.a2(20,20,20,v.f.d+20),w,w,C.a2)}}
A.ag5.prototype={
LI(d,e,f,g){return this.bbN(0,e,f,g)},
bbN(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$LI=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cU1(g.a)
x=3
return B.d(f.a2(0,$.wG().$1(g.a).geh(),y.B),$async$LI)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Ur(e,u,!1),$async$LI)
case 4:case 1:return B.l(v,w)}})
return B.m($async$LI,w)},
bf(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cJ($.cs(),new A.cjY(),y.v,s),s)
s=e.H($.cUT().$1(new B.Zc(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dr(x))return C.as
s=B.a([],y.G)
for(w=J.cb(x),v=w.gX(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.wG().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aK(y.N)
for(w=w.gX(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.R(C.D5,B.y(B.a([D.bLR,D.bMG,new F.Lw(s,new A.cjZ(this,d,e,x),v,null)],y.p),C.G,C.h,C.l,0,C.u),null)}}
var z=a.updateTypes(["P4(N)","~(dV)","x(nF)"])
A.cIH.prototype={
$1(d){return d.a===this.a},
$S:464}
A.cII.prototype={
$1(d){return d.b},
$S:1514}
A.cAC.prototype={
$0(){return this.a.gS().a2(0,$.zs().gaY(),y.I).jK()},
$S:1}
A.cAq.prototype={
$1(d){return d.x===C.zn},
$S:61}
A.cAr.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bE(0,x==null?d.ch:x)},
$S:190}
A.cAs.prototype={
$1(d){return d.x===C.ir},
$S:61}
A.cAB.prototype={
$1(d){return C.f.aX(C.j.k(B.aA(d)),2,"0")+"/"+C.f.aX(C.j.k(B.ao(d)),2,"0")},
$S:129}
A.cAt.prototype={
$0(){var x=this.a
return x.Lx(this.b,x.gS())},
$S:0}
A.cAu.prototype={
$0(){var x=this.a
return x.p(new A.cAp(x))},
$S:0}
A.cAp.prototype={
$0(){return this.a.w=D.AC},
$S:0}
A.cAv.prototype={
$0(){var x=this.a
return x.p(new A.cAo(x))},
$S:0}
A.cAo.prototype={
$0(){return this.a.w=D.adN},
$S:0}
A.cAw.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qm(w,x.gS(),this.b)},
$S:0}
A.cAx.prototype={
$1(d){return d.x===C.ir},
$S:61}
A.cAy.prototype={
$1(d){return d.x===C.ir},
$S:61}
A.cAz.prototype={
$0(){return this.a.gS().a2(0,$.zs().gaY(),y.I).Fh(this.b.a)},
$S:0}
A.cAA.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:18}
A.cAn.prototype={
$1(d){return D.cpd},
$S:z+0}
A.cc0.prototype={
$1(d){var x=this.a
return x.p(new A.cc_(x,d))},
$S:508}
A.cc_.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cc1.prototype={
$1(d){var x=this.a
return x.p(new A.cbZ(x,d))},
$S:104}
A.cbZ.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cc2.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cbY(u))
if(u.w!=null)return
x=B.am(this.b,!1)
w=C.f.C(u.d.a.a)
v=C.f.C(u.e.a.a)
if(v.length===0)v=null
x.af(new A.aK9(w,v,u.f,u.r))},
$S:0}
A.cbY.prototype={
$0(){var x=this.a
x.w=C.f.C(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cjY.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:36}
A.cjZ.prototype={
$1(d){var x=this
return x.a.LI(0,x.b,x.c,J.d2r(x.d,new A.cjX(d)))},
$S:z+1}
A.cjX.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cTL.prototype={
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
J.b3(r,B.Z(J.i(o.a(q),"id")),B.d9G(q))}v=r
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
A.cMo.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.ab4,x,x,x)],v)
w=w.f
if(C.f.C(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.R,B.h(C.f.C(w),x,x,x,x,D.c6v,x,x,x)],v))}u.push(C.bt)
u.push(B.DW(D.aEx,D.ccT,new A.cMl(d),x))
if(this.b!=null)C.e.n(u,B.a([C.R,B.h7(Q.abf,new A.cMm(d),x)],v))
u.push(C.av)
u.push(B.cv(C.mJ,x,x,new A.cMn(d),x,x))
return B.bF(!0,new B.R(C.NZ,B.y(u,C.G,C.h,C.K,0,C.u),x),x,C.a_,!0)},
$S:44}
A.cMl.prototype={
$0(){return B.am(this.a,!1).af("done")},
$S:0}
A.cMm.prototype={
$0(){return B.am(this.a,!1).af("open")},
$S:0}
A.cMn.prototype={
$0(){return B.am(this.a,!1).bw()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.by,[A.cIH,A.cII,A.cAq,A.cAs,A.cAB,A.cAx,A.cAy,A.cAn,A.cc0,A.cc1,A.cjY,A.cjZ,A.cjX,A.cTL,A.cMo])
w(A.aQP,B.f3)
w(A.aa9,B.dA)
w(A.aQO,B.du)
x(B.bQ,[A.cAC,A.cAt,A.cAu,A.cAp,A.cAv,A.cAo,A.cAw,A.cAz,A.cAA,A.cc_,A.cbZ,A.cc2,A.cbY,A.cMl,A.cMm,A.cMn])
w(A.cAr,B.cL)
w(A.aK9,B.L)
w(A.P4,B.G)
w(A.aKa,B.Y)
w(A.ag5,B.ex)})()
B.bs(b.typeUniverse,JSON.parse('{"aa9":{"G":[],"e":[],"f":[]},"P4":{"G":[],"e":[],"f":[]},"aQO":{"Y":["aa9"]},"aKa":{"Y":["P4"]},"ag5":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ay<t<nF>?>"),D:x("ay<dV?>"),R:x("eF"),v:x("ek"),Z:x("nD"),e:x("F<a5<c,oU>>"),B:x("F<dV?>"),E:x("r<el>"),G:x("r<dV>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oU>"),P:x("a5<c,@>"),U:x("et<+(c,c),c>"),w:x("di"),N:x("c"),I:x("u3"),z:x("BG"),c:x("oU"),A:x("a6<+(c,c)>"),g:x("aK9"),q:x("dp"),h:x("a5<c,@>?"),X:x("L?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
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
D.aIh=new B.md("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bHV=new B.c5(C.cM,[],B.w("c5<c,oU>"))
D.chv=new B.D("Sugest\xf5es para ti",null,C.bk,null,null,null,null,null,null,null,null)
D.bLR=new B.R(C.bQ,D.chv,null)
D.cfk=new B.D("Criadas por voc\xeas, sem limite.",null,C.O,null,null,null,null,null,null,null,null)
D.bM4=new B.R(C.jI,D.cfk,null)
D.auq=new B.a2(20,2,20,10)
D.ce8=new B.D("Com base no que tens procurado.",null,C.O,null,null,null,null,null,null,null,null)
D.bMG=new B.R(D.auq,D.ce8,null)
D.clg=B.cc("ag5")
D.bWV=new B.fq([D.clg],B.w("fq<kB>"))
D.c6v=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccT=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cpd=new A.P4(null)
D.cpt=new A.ag5(null)
D.AC=new A.aQP(0,"todo")
D.adN=new A.aQP(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_d","dmT",()=>B.eH(new A.cTL(),null,!1,null,null,y.r))})()};
(a=>{a["F3HwRKRutNp6z/rJNBjplRP48b8="]=a.current})($__dart_deferred_initializers__);