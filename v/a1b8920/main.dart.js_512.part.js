((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dIJ(d){var x=B.eL(new B.eq(new B.a5(P.WT,new A.cHZ(d),y.A),new A.cI_(),y.U))
return x},
cHZ:function cHZ(d){this.a=d},
cI_:function cI_(){},
dyo(){return new A.a9W(null)},
aQc:function aQc(d,e){this.a=d
this.b=e},
a9W:function a9W(d){this.a=d},
aQb:function aQb(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cA8:function cA8(d){this.a=d},
czX:function czX(){},
czY:function czY(){},
czZ:function czZ(){},
cA7:function cA7(){},
cA_:function cA_(d,e){this.a=d
this.b=e},
cA0:function cA0(d){this.a=d},
czW:function czW(d){this.a=d},
cA1:function cA1(d){this.a=d},
czV:function czV(d){this.a=d},
cA2:function cA2(d,e){this.a=d
this.b=e},
cA3:function cA3(){},
cA4:function cA4(){},
cA5:function cA5(d,e){this.a=d
this.b=e},
cA6:function cA6(d,e){this.a=d
this.b=e},
czU:function czU(){},
aJz:function aJz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OV:function OV(d){this.a=d},
aJA:function aJA(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cbr:function cbr(d){this.a=d},
cbq:function cbq(d,e){this.a=d
this.b=e},
cbs:function cbs(d){this.a=d},
cbp:function cbp(d,e){this.a=d
this.b=e},
cbt:function cbt(d,e){this.a=d
this.b=e},
cbo:function cbo(d){this.a=d},
afN:function afN(d){this.a=d},
cjA:function cjA(){},
cjB:function cjB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjz:function cjz(d){this.a=d},
dEi(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dIJ(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
dcM(d,e,f){var x,w=B.dy(e,0,null)
if(w.gdn(w)==="/partners"){x=w.gej().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ae(d).al("/partners",new M.Lp(x,!1),y.X)
return}B.ae(d).al(e,null,y.X)},
Qb(d,e,f){return A.dLw(d,e,f)},
dLw(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qb=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a1(0,$.zm().gaX(),y.I)
if(!f.ax)j.NT(f.a)
q=f.r
x=q==="parceiros"&&C.f.b1(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a1(0,$.cr(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aVe(s,p),$async$Qb)
case 11:r=h
if(d.e!=null){p=r.a
B.ae(d).al("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rF(d,e,p,null,null),$async$Qb)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a1(0,$.dml().ge_(),y.e),$async$Qb)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dEi(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9i||l==null?18:19
break
case 18:x=20
return B.d(B.bW(null,new A.cLM(f,l),!1,d,!0,!1,null,y.N),$async$Qb)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.F1(f.a),$async$Qb)
case 24:if(d.e!=null)d.O(y.q).f.a2(B.c0(null,null,null,null,null,C.y,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.dcM(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9h)j.Wx(f.a)
A.dcM(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qb,w)},
cTd:function cTd(){},
cLM:function cLM(d,e){this.a=d
this.b=e},
cLJ:function cLJ(d){this.a=d},
cLK:function cLK(d){this.a=d},
cLL:function cLL(d){this.a=d},
aVe(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVe=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.P().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").ai(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",e).dQ(0),$async$aVe)
case 3:u=g
p=J.a7(u)
t=B.a_(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qc(d,t),$async$aVe)
case 4:r=g
p=s==null
q=B.C(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eA(r,q,t,B.C(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.jV)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVe,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[139]
I=c[161]
E=c[149]
K=c[187]
L=c[122]
M=c[134]
G=c[86]
N=c[252]
A=a.updateHolder(c[52],A)
D=c[409]
O=c[79]
P=c[410]
H=c[170]
Q=c[337]
A.aQc.prototype={
I(){return"_TasksTab."+this.b}}
A.a9W.prototype={
R(){return new A.aQb(D.Ag)}}
A.aQb.prototype={
ac(){this.ap()
B.jl(new A.cA8(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().G($.zm(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a5<1>")
C.e.n(e,new B.a5(d,new A.czX(),a1))
C.e.cw(e,new A.czY())
x=f.b
w=x.length+new B.a5(d,new A.czZ(),a1).gA(0)
v=w+e.length
u=new A.cA7()
t=y.p
s=B.a([new B.qO(new A.cA_(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ek("Por fazer",r===D.Ag,w,new A.cA0(h),g),new B.ek("Feito",r===D.acQ,e.length,new A.cA1(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pr(s,g),D.aHg,new K.me(r,16,!1,g),B.vh(g,g,"O vosso plano",C.hF,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ag){e=B.a([D.cnx,D.aGR],t)
if(x.length===0)e.push(D.aGH)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.H)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9j?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.B(C.e.gJ(C.f.eW(k,B.aS("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a0(k," \xb7 ")
i=n.ax?g:D.aH4
s.push(new B.ir(D.aGF,n.e,k,i,!0,new A.cA2(h,n),!1,g))}e.push(B.eT(s,0))}e.push(D.aGQ)
e.push(D.bL_)
x=B.a([],t)
if(!new B.a5(d,new A.cA3(),a1).gX(0).t())x.push(D.aGI)
else for(d=C.e.gX(d),a0=new B.ha(d,new A.cA4(),a0.i("ha<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.ir(new G.Kt(!1,!1,new A.cA5(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eT(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGN)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.ir(N.PW,n.e,new A.cA6(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGP,B.eT(d,0)],t))}return B.cQ(g,C.d1,B.or(D.bVK,40,q,g,!0,!1),!0,g)},
Lg(d,e){return this.bj5(d,e)},
bj5(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$Lg=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bW(null,new A.czU(),!1,d,!0,!0,null,y.g),$async$Lg)
case 3:q=g
if(q==null){x=1
break}u=e.a1(0,$.zm().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.MA(q.d,s,r,t),$async$Lg)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lg,w)}}
A.aJz.prototype={}
A.OV.prototype={
R(){var x=$.aa()
return new A.aJA(new B.aE(C.aj,x),new B.aE(C.aj,x))}}
A.aJA.prototype={
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.aO(d,w,y.w).w
return B.dT(B.A(B.a([B.h("Nova tarefa",w,w,w,w,B.av(d).ok.r,w,w,w),C.a0,new H.mC("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.mC("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d3w("Prazo (opcional)",new A.cbr(x),x.f),C.aB,new O.a1o(x.r,new A.cbs(x),w),C.a0,new B.fX("Adicionar",new A.cbt(x,d),!1,w)],y.p),C.E,C.h,C.J),C.y,w,new B.a3(20,20,20,v.f.d+20),w,C.av)}}
A.afN.prototype={
Lr(d,e,f,g){return this.bau(0,e,f,g)},
bau(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Lr=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cTu(g.a)
x=3
return B.d(f.a1(0,$.wB().$1(g.a).ge_(),y.B),$async$Lr)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Ub(e,u,!1),$async$Lr)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lr,w)},
bb(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cG($.cr(),new A.cjA(),y.v,s),s)
s=e.G($.cUl().$1(new B.YY(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.di(x))return C.ap
s=B.a([],y.G)
for(w=J.c7(x),v=w.gX(x),u=y.D;v.t();){t=v.gE(v)
t=e.G($.wB().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aL(y.N)
for(w=w.gX(x);w.t();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.T(C.CJ,B.A(B.a([D.bKP,D.bLz,new F.Ln(s,new A.cjB(this,d,e,x),v,null)],y.p),C.E,C.h,C.l),null)}}
var z=a.updateTypes(["OV(N)","~(dS)","z(nD)"])
A.cHZ.prototype={
$1(d){return d.a===this.a},
$S:482}
A.cI_.prototype={
$1(d){return d.b},
$S:1514}
A.cA8.prototype={
$0(){return this.a.gS().a1(0,$.zm().gaX(),y.I).jF()},
$S:1}
A.czX.prototype={
$1(d){return d.x===C.z2},
$S:55}
A.czY.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bC(0,x==null?d.ch:x)},
$S:170}
A.czZ.prototype={
$1(d){return d.x===C.io},
$S:55}
A.cA7.prototype={
$1(d){return C.f.aV(C.j.k(B.ay(d)),2,"0")+"/"+C.f.aV(C.j.k(B.an(d)),2,"0")},
$S:152}
A.cA_.prototype={
$0(){var x=this.a
return x.Lg(this.b,x.gS())},
$S:0}
A.cA0.prototype={
$0(){var x=this.a
return x.p(new A.czW(x))},
$S:0}
A.czW.prototype={
$0(){return this.a.w=D.Ag},
$S:0}
A.cA1.prototype={
$0(){var x=this.a
return x.p(new A.czV(x))},
$S:0}
A.czV.prototype={
$0(){return this.a.w=D.acQ},
$S:0}
A.cA2.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qb(w,x.gS(),this.b)},
$S:0}
A.cA3.prototype={
$1(d){return d.x===C.io},
$S:55}
A.cA4.prototype={
$1(d){return d.x===C.io},
$S:55}
A.cA5.prototype={
$0(){return this.a.gS().a1(0,$.zm().gaX(),y.I).F1(this.b.a)},
$S:0}
A.cA6.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:18}
A.czU.prototype={
$1(d){return D.cnh},
$S:z+0}
A.cbr.prototype={
$1(d){var x=this.a
return x.p(new A.cbq(x,d))},
$S:512}
A.cbq.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cbs.prototype={
$1(d){var x=this.a
return x.p(new A.cbp(x,d))},
$S:135}
A.cbp.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cbt.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cbo(u))
if(u.w!=null)return
x=B.am(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.ae(new A.aJz(w,v,u.f,u.r))},
$S:0}
A.cbo.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cjA.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:37}
A.cjB.prototype={
$1(d){var x=this
return x.a.Lr(0,x.b,x.c,J.d1W(x.d,new A.cjz(d)))},
$S:z+1}
A.cjz.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cTd.prototype={
$1(d){return this.aHk(d)},
aHk(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").cm(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ap(s),o=y.P;p.t();){q=p.gE(p)
J.b2(r,B.a_(J.i(o.a(q),"id")),B.d98(q))}v=r
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
$S:1515}
A.cLM.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aap,x,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.Q,B.h(C.f.B(w),x,x,x,x,D.c56,x,x,x)],v))}u.push(C.bM)
u.push(B.A4(D.aDC,D.cbm,new A.cLJ(d),x))
if(this.b!=null)C.e.n(u,B.a([C.Q,B.hh(Q.aaA,new A.cLK(d),x)],v))
u.push(C.ar)
u.push(B.cx(C.mu,x,x,new A.cLL(d),x,x))
return B.bD(!0,new B.T(C.Ns,B.A(u,C.E,C.h,C.J),x),x,C.Z,!0)},
$S:43}
A.cLJ.prototype={
$0(){return B.am(this.a,!1).ae("done")},
$S:0}
A.cLK.prototype={
$0(){return B.am(this.a,!1).ae("open")},
$S:0}
A.cLL.prototype={
$0(){return B.am(this.a,!1).bp()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.cHZ,A.cI_,A.czX,A.czZ,A.cA7,A.cA3,A.cA4,A.czU,A.cbr,A.cbs,A.cjA,A.cjB,A.cjz,A.cTd,A.cLM])
w(A.aQc,B.eX)
w(A.a9W,B.dA)
w(A.aQb,B.dv)
x(B.bO,[A.cA8,A.cA_,A.cA0,A.czW,A.cA1,A.czV,A.cA2,A.cA5,A.cA6,A.cbq,A.cbp,A.cbt,A.cbo,A.cLJ,A.cLK,A.cLL])
w(A.czY,B.cK)
w(A.aJz,B.J)
w(A.OV,B.G)
w(A.aJA,B.Y)
w(A.afN,B.et)})()
B.bt(b.typeUniverse,JSON.parse('{"a9W":{"G":[],"e":[],"f":[]},"OV":{"G":[],"e":[],"f":[]},"aQb":{"Y":["a9W"]},"aJA":{"Y":["OV"]},"afN":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("az<t<nD>?>"),D:x("az<dS?>"),R:x("eA"),v:x("ed"),Z:x("nC"),e:x("F<a4<c,oP>>"),B:x("F<dS?>"),E:x("r<ek>"),G:x("r<dS>"),s:x("r<c>"),p:x("r<e>"),r:x("a4<c,oP>"),P:x("a4<c,@>"),U:x("eq<+(c,c),c>"),w:x("dh"),N:x("c"),I:x("tX"),z:x("Bx"),c:x("oP"),A:x("a5<+(c,c)>"),g:x("aJz"),q:x("dr"),h:x("a4<c,@>?"),X:x("J?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDC=new B.b7(C.ds,null,null,null,null,null)
D.aGF=new G.Kt(!1,!1,null,null)
D.aGM=new B.ir(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdm=x([D.aGM],y.p)
D.aGH=new B.Tl(D.bdm,0,null)
D.aGI=new B.ir(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGN=new B.ir(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGP=new E.Ev("Feito",null)
D.aGQ=new E.Ev("As vossas tarefas",null)
D.aGR=new E.Ev("Pr\xf3ximas tarefas",null)
D.aH4=new B.dY("Nova",C.d5,null)
D.aHg=new B.lL("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGT=new B.c3(C.cI,[],B.w("c3<c,oP>"))
D.cfX=new B.D("Sugest\xf5es para ti",null,C.bl,null,null,null,null,null,null,null,null)
D.bKP=new B.T(C.bO,D.cfX,null)
D.cdO=new B.D("Criadas por voc\xeas, sem limite.",null,C.L,null,null,null,null,null,null,null,null)
D.bL_=new B.T(C.ks,D.cdO,null)
D.atp=new B.a3(20,2,20,10)
D.ccB=new B.D("Com base no que tens procurado.",null,C.L,null,null,null,null,null,null,null,null)
D.bLz=new B.T(D.atp,D.ccB,null)
D.cjn=B.c8("afN")
D.bVK=new B.fo([D.cjn],B.w("fo<ky>"))
D.c56=new B.Q(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbm=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cnh=new A.OV(null)
D.cnx=new A.afN(null)
D.Ag=new A.aQc(0,"todo")
D.acQ=new A.aQc(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZS","dml",()=>B.ey(new A.cTd(),null,!1,null,null,y.r))})()};
(a=>{a["RWnqZ4wlNeS86Ih96DykfoOsi9w="]=a.current})($__dart_deferred_initializers__);