((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dJE(d){var x=B.f4(new B.eq(new B.a7(P.WJ,new A.cIf(d),y.A),new A.cIg(),y.U))
return x},
cIf:function cIf(d){this.a=d},
cIg:function cIg(){},
dze(){return new A.aa_(null)},
aQn:function aQn(d,e){this.a=d
this.b=e},
aa_:function aa_(d){this.a=d},
aQm:function aQm(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cAp:function cAp(d){this.a=d},
cAd:function cAd(){},
cAe:function cAe(){},
cAf:function cAf(){},
cAo:function cAo(){},
cAg:function cAg(d,e){this.a=d
this.b=e},
cAh:function cAh(d){this.a=d},
cAc:function cAc(d){this.a=d},
cAi:function cAi(d){this.a=d},
cAb:function cAb(d){this.a=d},
cAj:function cAj(d,e){this.a=d
this.b=e},
cAk:function cAk(){},
cAl:function cAl(){},
cAm:function cAm(d,e){this.a=d
this.b=e},
cAn:function cAn(d,e){this.a=d
this.b=e},
cAa:function cAa(){},
aJL:function aJL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
P7:function P7(d){this.a=d},
aJM:function aJM(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cbc:function cbc(d){this.a=d},
cbb:function cbb(d,e){this.a=d
this.b=e},
cbd:function cbd(d){this.a=d},
cba:function cba(d,e){this.a=d
this.b=e},
cbe:function cbe(d,e){this.a=d
this.b=e},
cb9:function cb9(d){this.a=d},
afP:function afP(d){this.a=d},
cjE:function cjE(){},
cjF:function cjF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjD:function cjD(d){this.a=d},
dF9(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dJE(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
ddy(d,e,f){var x,w=B.dA(e,0,null)
if(w.gdc(w)==="/partners"){x=w.gek().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ae(d).ag("/partners",new M.Ly(x,!1),y.X)
return}B.ae(d).ag(e,null,y.X)},
Qp(d,e,f){return A.dMu(d,e,f)},
dMu(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qp=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a0(0,$.zm().gaX(),y.I)
if(!f.ax)j.Ns(f.a)
q=f.r
x=q==="parceiros"&&C.f.aY(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a0(0,$.cq(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aVp(s,p),$async$Qp)
case 11:r=h
if(d.e!=null){p=r.a
B.ae(d).ag("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rK(d,e,p,null,null),$async$Qp)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a0(0,$.dnf().gdE(),y.e),$async$Qp)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dF9(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9d||l==null?18:19
break
case 18:x=20
return B.d(B.bP(null,new A.cMa(f,l),!1,d,!0,!1,null,y.N),$async$Qp)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EV(f.a),$async$Qp)
case 24:if(d.e!=null)d.O(y.q).f.a1(B.bZ(null,null,null,null,null,C.y,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.ddy(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9c)j.W6(f.a)
A.ddy(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qp,w)},
cTT:function cTT(){},
cMa:function cMa(d,e){this.a=d
this.b=e},
cM7:function cM7(d){this.a=d},
cM8:function cM8(d){this.a=d},
cM9:function cM9(d){this.a=d},
aVp(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVp=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&B.b()
x=3
return B.d(p.S("proposals").an(0,"partner_id, partner_profiles(business_name, cover_photo_url)").X("id",e).e9(0),$async$aVp)
case 3:u=g
p=J.a6(u)
t=B.a_(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qb(d,t),$async$aVp)
case 4:r=g
p=s==null
q=B.B(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.ez(r,q,t,B.B(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.iX)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVp,w)}},D,O,P,H,Q
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
A.aQn.prototype={
I(){return"_TasksTab."+this.b}}
A.aa_.prototype={
P(){return new A.aQm(D.Ae)}}
A.aQm.prototype={
ac(){this.ao()
B.j7(new A.cAp(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gR().G($.zm(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a7<1>")
C.e.p(e,new B.a7(d,new A.cAd(),a1))
C.e.cw(e,new A.cAe())
x=f.b
w=x.length+new B.a7(d,new A.cAf(),a1).gA(0)
v=w+e.length
u=new A.cAo()
t=y.p
s=B.a([new B.qP(new A.cAg(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ej("Por fazer",r===D.Ae,w,new A.cAh(h),g),new B.ej("Feito",r===D.acK,e.length,new A.cAi(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pu(s,g),D.aHc,new K.mc(r,16,!1,g),B.vp(g,g,"O vosso plano",C.hG,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ae){e=B.a([D.cnP,D.aGN],t)
if(x.length===0)e.push(D.aGD)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.H)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9e?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.B(C.e.gJ(C.f.eW(k,B.aS("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a_(k," \xb7 ")
i=n.ax?g:D.aH0
s.push(new B.io(D.aGB,n.e,k,i,!0,new A.cAj(h,n),!1,g))}e.push(B.eQ(s,0))}e.push(D.aGM)
e.push(D.bKV)
x=B.a([],t)
if(!new B.a7(d,new A.cAk(),a1).gW(0).q())x.push(D.aGE)
else for(d=C.e.gW(d),a0=new B.fB(d,new A.cAl(),a0.i("fB<1>"));a0.q();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.p(u.$1(s))
x.push(new B.io(new G.KA(!1,!1,new A.cAm(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eQ(x,0))
C.e.p(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGJ)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.io(N.PP,n.e,new A.cAn(n,u).$0(),g,!1,g,!0,g))}C.e.p(q,B.a([D.aGL,B.eQ(d,0)],t))}return B.cP(g,C.cQ,B.nO(D.bVG,40,q,g,!0,!1),!0,g)},
KV(d,e){return this.bhP(d,e)},
bhP(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$KV=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bP(null,new A.cAa(),!1,d,!0,!0,null,y.g),$async$KV)
case 3:q=g
if(q==null){x=1
break}u=e.a0(0,$.zm().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mg(q.d,s,r,t),$async$KV)
case 4:case 1:return B.l(v,w)}})
return B.m($async$KV,w)}}
A.aJL.prototype={}
A.P7.prototype={
P(){var x=$.aa()
return new A.aJM(new B.aF(C.ak,x),new B.aF(C.ak,x))}}
A.aJM.prototype={
m(){var x=this.d,w=$.aa()
x.Z$=w
x.V$=0
x=this.e
x.Z$=w
x.V$=0
this.a6()},
u(d){var x=this,w=null,v=B.aT(d,w,y.w).w
return B.dR(B.x(B.a([B.h("Nova tarefa",w,w,w,w,B.ay(d).ok.r,w,w),C.a_,new H.nv("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.nv("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d45("Prazo (opcional)",new A.cbc(x),x.f),C.aA,new O.a1y(x.r,new A.cbd(x),w),C.a_,new B.fZ("Adicionar",new A.cbe(x,d),!1,w)],y.p),C.E,C.h,C.J),C.y,w,new B.a4(20,20,20,v.f.d+20),w,C.av)}}
A.afP.prototype={
L5(d,e,f,g){return this.b9d(0,e,f,g)},
b9d(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$L5=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cU9(g.a)
x=3
return B.d(f.a0(0,$.wI().$1(g.a).gdE(),y.B),$async$L5)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Uq(e,u,!1),$async$L5)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L5,w)},
b9(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cC($.cq(),new A.cjE(),y.v,s),s)
s=e.G($.cV2().$1(new B.Z6(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.de(x))return C.an
s=B.a([],y.G)
for(w=J.cb(x),v=w.gW(x),u=y.D;v.q();){t=v.gE(v)
t=e.G($.wI().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aN(y.N)
for(w=w.gW(x);w.q();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.S(C.CI,B.x(B.a([D.bKx,D.bKy,new F.Lu(s,new A.cjF(this,d,e,x),v,null)],y.p),C.E,C.h,C.l),null)}}
var z=a.updateTypes(["P7(N)","~(dq)","C(nF)"])
A.cIf.prototype={
$1(d){return d.a===this.a},
$S:444}
A.cIg.prototype={
$1(d){return d.b},
$S:1524}
A.cAp.prototype={
$0(){return this.a.gR().a0(0,$.zm().gaX(),y.I).ny()},
$S:1}
A.cAd.prototype={
$1(d){return d.x===C.I9},
$S:96}
A.cAe.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bA(0,x==null?d.ch:x)},
$S:392}
A.cAf.prototype={
$1(d){return d.x===C.kW},
$S:96}
A.cAo.prototype={
$1(d){return C.f.aT(C.j.k(B.aD(d)),2,"0")+"/"+C.f.aT(C.j.k(B.aw(d)),2,"0")},
$S:151}
A.cAg.prototype={
$0(){var x=this.a
return x.KV(this.b,x.gR())},
$S:0}
A.cAh.prototype={
$0(){var x=this.a
return x.n(new A.cAc(x))},
$S:0}
A.cAc.prototype={
$0(){return this.a.w=D.Ae},
$S:0}
A.cAi.prototype={
$0(){var x=this.a
return x.n(new A.cAb(x))},
$S:0}
A.cAb.prototype={
$0(){return this.a.w=D.acK},
$S:0}
A.cAj.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qp(w,x.gR(),this.b)},
$S:0}
A.cAk.prototype={
$1(d){return d.x===C.kW},
$S:96}
A.cAl.prototype={
$1(d){return d.x===C.kW},
$S:96}
A.cAm.prototype={
$0(){return this.a.gR().a0(0,$.zm().gaX(),y.I).EV(this.b.a)},
$S:0}
A.cAn.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.p(this.b.$1(v))},
$S:18}
A.cAa.prototype={
$1(d){return D.cny},
$S:z+0}
A.cbc.prototype={
$1(d){var x=this.a
return x.n(new A.cbb(x,d))},
$S:519}
A.cbb.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cbd.prototype={
$1(d){var x=this.a
return x.n(new A.cba(x,d))},
$S:126}
A.cba.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cbe.prototype={
$0(){var x,w,v,u=this.a
u.n(new A.cb9(u))
if(u.w!=null)return
x=B.an(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.aq(new A.aJL(w,v,u.f,u.r))},
$S:0}
A.cb9.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cjE.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:37}
A.cjF.prototype={
$1(d){var x=this
return x.a.L5(0,x.b,x.c,J.d2v(x.d,new A.cjD(d)))},
$S:z+1}
A.cjD.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cTT.prototype={
$1(d){return this.aGE(d)},
aGE(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.S("task_templates").cv(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ao(s),o=y.P;p.q();){q=p.gE(p)
J.b2(r,B.a_(J.i(o.a(q),"id")),B.dzd(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGM
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1525}
A.cMa.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aaj,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.p(u,B.a([C.P,B.h(C.f.B(w),x,x,x,x,D.c54,x,x)],v))}u.push(C.bP)
u.push(new B.ak(B.A3(D.aDy,D.cg9,new A.cM7(d),x),x))
if(this.b!=null)C.e.p(u,B.a([C.P,new B.ak(B.hm(Q.aaJ,new A.cM8(d),x),x)],v))
u.push(C.ap)
u.push(new B.ak(B.cK(C.mq,x,x,new A.cM9(d),x,x),x))
return B.bB(!0,new B.S(C.Ni,B.x(u,C.E,C.h,C.J),x),x,C.Z,!0)},
$S:31}
A.cM7.prototype={
$0(){return B.an(this.a,!1).aq("done")},
$S:0}
A.cM8.prototype={
$0(){return B.an(this.a,!1).aq("open")},
$S:0}
A.cM9.prototype={
$0(){return B.an(this.a,!1).bj()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bu,[A.cIf,A.cIg,A.cAd,A.cAf,A.cAo,A.cAk,A.cAl,A.cAa,A.cbc,A.cbd,A.cjE,A.cjF,A.cjD,A.cTT,A.cMa])
w(A.aQn,B.f7)
w(A.aa_,B.dC)
w(A.aQm,B.dx)
x(B.bL,[A.cAp,A.cAg,A.cAh,A.cAc,A.cAi,A.cAb,A.cAj,A.cAm,A.cAn,A.cbb,A.cba,A.cbe,A.cb9,A.cM7,A.cM8,A.cM9])
w(A.cAe,B.cL)
w(A.aJL,B.M)
w(A.P7,B.G)
w(A.aJM,B.Z)
w(A.afP,B.ew)})()
B.br(b.typeUniverse,JSON.parse('{"aa_":{"G":[],"e":[],"f":[]},"P7":{"G":[],"e":[],"f":[]},"aQm":{"Z":["aa_"]},"aJM":{"Z":["P7"]},"afP":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.A
return{F:x("ax<t<nF>?>"),D:x("ax<dq?>"),R:x("ez"),v:x("ed"),Z:x("pl"),e:x("F<a3<c,By>>"),B:x("F<dq?>"),E:x("r<ej>"),G:x("r<dq>"),s:x("r<c>"),p:x("r<e>"),r:x("a3<c,By>"),P:x("a3<c,@>"),U:x("eq<+(c,c),c>"),w:x("dw"),N:x("c"),I:x("u4"),z:x("Bx"),c:x("By"),A:x("a7<+(c,c)>"),g:x("aJL"),q:x("dj"),h:x("a3<c,@>?"),X:x("M?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDy=new B.b8(C.dr,null,null,null,null,null)
D.aGB=new G.KA(!1,!1,null,null)
D.aGI=new B.io(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdm=x([D.aGI],y.p)
D.aGD=new B.Ty(D.bdm,0,null)
D.aGE=new B.io(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGJ=new B.io(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGL=new E.EA("Feito",null)
D.aGM=new E.EA("As vossas tarefas",null)
D.aGN=new E.EA("Pr\xf3ximas tarefas",null)
D.aH0=new B.dU("Nova",C.cV,null)
D.aHc=new B.lj("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGM=new B.c7(C.cK,[],B.A("c7<c,By>"))
D.caJ=new B.D("Sugest\xf5es para ti",null,C.bj,null,null,null,null,null,null,null)
D.bKx=new B.S(C.bF,D.caJ,null)
D.atj=new B.a4(20,2,20,10)
D.c7L=new B.D("Com base no que tens procurado.",null,C.L,null,null,null,null,null,null,null)
D.bKy=new B.S(D.atj,D.c7L,null)
D.cbF=new B.D("Criadas por voc\xeas, sem limite.",null,C.L,null,null,null,null,null,null,null)
D.bKV=new B.S(C.jD,D.cbF,null)
D.cjD=B.cc("afP")
D.bVG=new B.fl([D.cjD],B.A("fl<l1>"))
D.c54=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cg9=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null)
D.cny=new A.P7(null)
D.cnP=new A.afP(null)
D.Ae=new A.aQn(0,"todo")
D.acK=new A.aQn(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_Z","dnf",()=>B.ey(new A.cTT(),null,!1,null,null,y.r))})()};
(a=>{a["hlqPkJ65Doxn7+KwscVdknBrQBI="]=a.current})($__dart_deferred_initializers__);