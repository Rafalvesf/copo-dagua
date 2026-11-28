((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dJp(d){var x=B.f4(new B.eq(new B.a7(P.WH,new A.cI3(d),y.A),new A.cI4(),y.U))
return x},
cI3:function cI3(d){this.a=d},
cI4:function cI4(){},
dz_(){return new A.aa_(null)},
aQh:function aQh(d,e){this.a=d
this.b=e},
aa_:function aa_(d){this.a=d},
aQg:function aQg(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cAd:function cAd(d){this.a=d},
cA1:function cA1(){},
cA2:function cA2(){},
cA3:function cA3(){},
cAc:function cAc(){},
cA4:function cA4(d,e){this.a=d
this.b=e},
cA5:function cA5(d){this.a=d},
cA0:function cA0(d){this.a=d},
cA6:function cA6(d){this.a=d},
cA_:function cA_(d){this.a=d},
cA7:function cA7(d,e){this.a=d
this.b=e},
cA8:function cA8(){},
cA9:function cA9(){},
cAa:function cAa(d,e){this.a=d
this.b=e},
cAb:function cAb(d,e){this.a=d
this.b=e},
czZ:function czZ(){},
aJE:function aJE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
P7:function P7(d){this.a=d},
aJF:function aJF(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cb0:function cb0(d){this.a=d},
cb_:function cb_(d,e){this.a=d
this.b=e},
cb1:function cb1(d){this.a=d},
caZ:function caZ(d,e){this.a=d
this.b=e},
cb2:function cb2(d,e){this.a=d
this.b=e},
caY:function caY(d){this.a=d},
afM:function afM(d){this.a=d},
cjs:function cjs(){},
cjt:function cjt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjr:function cjr(d){this.a=d},
dEV(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dJp(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
ddg(d,e,f){var x,w=B.dA(e,0,null)
if(w.gdc(w)==="/partners"){x=w.gek().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ae(d).ah("/partners",new M.Ly(x,!1),y.X)
return}B.ae(d).ah(e,null,y.X)},
Qp(d,e,f){return A.dMf(d,e,f)},
dMf(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qp=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a_(0,$.zm().gaX(),y.I)
if(!f.ax)j.Nr(f.a)
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
return B.d(A.aVj(s,p),$async$Qp)
case 11:r=h
if(d.e!=null){p=r.a
B.ae(d).ah("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rJ(d,e,p,null,null),$async$Qp)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a_(0,$.dmZ().gdE(),y.e),$async$Qp)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dEV(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9b||l==null?18:19
break
case 18:x=20
return B.d(B.bP(null,new A.cLZ(f,l),!1,d,!0,!1,null,y.N),$async$Qp)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EV(f.a),$async$Qp)
case 24:if(d.e!=null)d.O(y.q).f.a0(B.bZ(null,null,null,null,null,C.y,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.ddg(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9a)j.W5(f.a)
A.ddg(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qp,w)},
cTE:function cTE(){},
cLZ:function cLZ(d,e){this.a=d
this.b=e},
cLW:function cLW(d){this.a=d},
cLX:function cLX(d){this.a=d},
cLY:function cLY(d){this.a=d},
aVj(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVj=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&B.b()
x=3
return B.d(p.S("proposals").an(0,"partner_id, partner_profiles(business_name, cover_photo_url)").X("id",e).e9(0),$async$aVj)
case 3:u=g
p=J.a6(u)
t=B.a_(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qb(d,t),$async$aVj)
case 4:r=g
p=s==null
q=B.A(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.ez(r,q,t,B.A(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.iW)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVj,w)}},D,O,P,H,Q
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
A.aQh.prototype={
I(){return"_TasksTab."+this.b}}
A.aa_.prototype={
P(){return new A.aQg(D.Ab)}}
A.aQg.prototype={
ac(){this.ap()
B.j7(new A.cAd(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gR().G($.zm(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a7<1>")
C.e.p(e,new B.a7(d,new A.cA1(),a1))
C.e.cv(e,new A.cA2())
x=f.b
w=x.length+new B.a7(d,new A.cA3(),a1).gA(0)
v=w+e.length
u=new A.cAc()
t=y.p
s=B.a([new B.qP(new A.cA4(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ej("Por fazer",r===D.Ab,w,new A.cA5(h),g),new B.ej("Feito",r===D.acI,e.length,new A.cA6(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pu(s,g),D.aH6,new K.mc(r,16,!1,g),B.vo(g,g,"O vosso plano",C.hG,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ab){e=B.a([D.cnv,D.aGH],t)
if(x.length===0)e.push(D.aGx)
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
i=n.ax?g:D.aGV
s.push(new B.io(D.aGv,n.e,k,i,!0,new A.cA7(h,n),!1,g))}e.push(B.eQ(s,0))}e.push(D.aGG)
e.push(D.bKM)
x=B.a([],t)
if(!new B.a7(d,new A.cA8(),a1).gW(0).q())x.push(D.aGy)
else for(d=C.e.gW(d),a0=new B.fA(d,new A.cA9(),a0.i("fA<1>"));a0.q();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.p(u.$1(s))
x.push(new B.io(new G.KA(!1,!1,new A.cAa(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eQ(x,0))
C.e.p(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGD)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.io(N.PN,n.e,new A.cAb(n,u).$0(),g,!1,g,!0,g))}C.e.p(q,B.a([D.aGF,B.eQ(d,0)],t))}return B.cP(g,C.cQ,B.nM(D.bVx,40,q,g,!0,!1),!0,g)},
KU(d,e){return this.bhM(d,e)},
bhM(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$KU=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bP(null,new A.czZ(),!1,d,!0,!0,null,y.g),$async$KU)
case 3:q=g
if(q==null){x=1
break}u=e.a_(0,$.zm().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mf(q.d,s,r,t),$async$KU)
case 4:case 1:return B.l(v,w)}})
return B.m($async$KU,w)}}
A.aJE.prototype={}
A.P7.prototype={
P(){var x=$.aa()
return new A.aJF(new B.aF(C.ak,x),new B.aF(C.ak,x))}}
A.aJF.prototype={
m(){var x=this.d,w=$.aa()
x.Z$=w
x.V$=0
x=this.e
x.Z$=w
x.V$=0
this.a6()},
u(d){var x=this,w=null,v=B.aT(d,w,y.w).w
return B.dR(B.x(B.a([B.h("Nova tarefa",w,w,w,w,B.ay(d).ok.r,w,w),C.a_,new H.ns("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.ns("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d3R("Prazo (opcional)",new A.cb0(x),x.f),C.aA,new O.a1y(x.r,new A.cb1(x),w),C.a_,new B.fY("Adicionar",new A.cb2(x,d),!1,w)],y.p),C.E,C.h,C.J),C.y,w,new B.a4(20,20,20,v.f.d+20),w,C.av)}}
A.afM.prototype={
L4(d,e,f,g){return this.b9a(0,e,f,g)},
b9a(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$L4=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cTV(g.a)
x=3
return B.d(f.a_(0,$.wH().$1(g.a).gdE(),y.B),$async$L4)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Up(e,u,!1),$async$L4)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L4,w)},
b9(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cB($.cq(),new A.cjs(),y.v,s),s)
s=e.G($.cUO().$1(new B.Z5(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.de(x))return C.an
s=B.a([],y.G)
for(w=J.ca(x),v=w.gW(x),u=y.D;v.q();){t=v.gE(v)
t=e.G($.wH().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aN(y.N)
for(w=w.gW(x);w.q();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.S(C.CE,B.x(B.a([D.bKo,D.bKp,new F.Lu(s,new A.cjt(this,d,e,x),v,null)],y.p),C.E,C.h,C.l),null)}}
var z=a.updateTypes(["P7(N)","~(dq)","C(nD)"])
A.cI3.prototype={
$1(d){return d.a===this.a},
$S:450}
A.cI4.prototype={
$1(d){return d.b},
$S:1524}
A.cAd.prototype={
$0(){return this.a.gR().a_(0,$.zm().gaX(),y.I).ny()},
$S:1}
A.cA1.prototype={
$1(d){return d.x===C.I9},
$S:96}
A.cA2.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bA(0,x==null?d.ch:x)},
$S:392}
A.cA3.prototype={
$1(d){return d.x===C.kU},
$S:96}
A.cAc.prototype={
$1(d){return C.f.aT(C.j.k(B.aE(d)),2,"0")+"/"+C.f.aT(C.j.k(B.aw(d)),2,"0")},
$S:151}
A.cA4.prototype={
$0(){var x=this.a
return x.KU(this.b,x.gR())},
$S:0}
A.cA5.prototype={
$0(){var x=this.a
return x.n(new A.cA0(x))},
$S:0}
A.cA0.prototype={
$0(){return this.a.w=D.Ab},
$S:0}
A.cA6.prototype={
$0(){var x=this.a
return x.n(new A.cA_(x))},
$S:0}
A.cA_.prototype={
$0(){return this.a.w=D.acI},
$S:0}
A.cA7.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qp(w,x.gR(),this.b)},
$S:0}
A.cA8.prototype={
$1(d){return d.x===C.kU},
$S:96}
A.cA9.prototype={
$1(d){return d.x===C.kU},
$S:96}
A.cAa.prototype={
$0(){return this.a.gR().a_(0,$.zm().gaX(),y.I).EV(this.b.a)},
$S:0}
A.cAb.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.p(this.b.$1(v))},
$S:18}
A.czZ.prototype={
$1(d){return D.cnf},
$S:z+0}
A.cb0.prototype={
$1(d){var x=this.a
return x.n(new A.cb_(x,d))},
$S:522}
A.cb_.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cb1.prototype={
$1(d){var x=this.a
return x.n(new A.caZ(x,d))},
$S:126}
A.caZ.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cb2.prototype={
$0(){var x,w,v,u=this.a
u.n(new A.caY(u))
if(u.w!=null)return
x=B.an(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.aq(new A.aJE(w,v,u.f,u.r))},
$S:0}
A.caY.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cjs.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:37}
A.cjt.prototype={
$1(d){var x=this
return x.a.L4(0,x.b,x.c,J.d2g(x.d,new A.cjr(d)))},
$S:z+1}
A.cjr.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cTE.prototype={
$1(d){return this.aGC(d)},
aGC(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.S("task_templates").cu(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ao(s),o=y.P;p.q();){q=p.gE(p)
J.b2(r,B.a_(J.i(o.a(q),"id")),B.dyZ(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGD
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
A.cLZ.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aai,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.p(u,B.a([C.P,B.h(C.f.B(w),x,x,x,x,D.c4S,x,x)],v))}u.push(C.bP)
u.push(new B.ak(B.A3(D.aDr,D.cfU,new A.cLW(d),x),x))
if(this.b!=null)C.e.p(u,B.a([C.P,new B.ak(B.hm(Q.aaI,new A.cLX(d),x),x)],v))
u.push(C.ar)
u.push(new B.ak(B.cK(C.mp,x,x,new A.cLY(d),x,x),x))
return B.bB(!0,new B.S(C.Ng,B.x(u,C.E,C.h,C.J),x),x,C.Z,!0)},
$S:31}
A.cLW.prototype={
$0(){return B.an(this.a,!1).aq("done")},
$S:0}
A.cLX.prototype={
$0(){return B.an(this.a,!1).aq("open")},
$S:0}
A.cLY.prototype={
$0(){return B.an(this.a,!1).bj()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bu,[A.cI3,A.cI4,A.cA1,A.cA3,A.cAc,A.cA8,A.cA9,A.czZ,A.cb0,A.cb1,A.cjs,A.cjt,A.cjr,A.cTE,A.cLZ])
w(A.aQh,B.f7)
w(A.aa_,B.dC)
w(A.aQg,B.dw)
x(B.bL,[A.cAd,A.cA4,A.cA5,A.cA0,A.cA6,A.cA_,A.cA7,A.cAa,A.cAb,A.cb_,A.caZ,A.cb2,A.caY,A.cLW,A.cLX,A.cLY])
w(A.cA2,B.cL)
w(A.aJE,B.M)
w(A.P7,B.G)
w(A.aJF,B.Z)
w(A.afM,B.ew)})()
B.br(b.typeUniverse,JSON.parse('{"aa_":{"G":[],"e":[],"f":[]},"P7":{"G":[],"e":[],"f":[]},"aQg":{"Z":["aa_"]},"aJF":{"Z":["P7"]},"afM":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.B
return{F:x("ax<t<nD>?>"),D:x("ax<dq?>"),R:x("ez"),v:x("ed"),Z:x("pl"),e:x("F<a3<c,Bz>>"),B:x("F<dq?>"),E:x("r<ej>"),G:x("r<dq>"),s:x("r<c>"),p:x("r<e>"),r:x("a3<c,Bz>"),P:x("a3<c,@>"),U:x("eq<+(c,c),c>"),w:x("dv"),N:x("c"),I:x("u3"),z:x("By"),c:x("Bz"),A:x("a7<+(c,c)>"),g:x("aJE"),q:x("dj"),h:x("a3<c,@>?"),X:x("M?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDr=new B.b8(C.dp,null,null,null,null,null)
D.aGv=new G.KA(!1,!1,null,null)
D.aGC=new B.io(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bde=x([D.aGC],y.p)
D.aGx=new B.Tx(D.bde,0,null)
D.aGy=new B.io(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGD=new B.io(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGF=new E.Ey("Feito",null)
D.aGG=new E.Ey("As vossas tarefas",null)
D.aGH=new E.Ey("Pr\xf3ximas tarefas",null)
D.aGV=new B.dU("Nova",C.cV,null)
D.aH6=new B.li("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGD=new B.c7(C.cK,[],B.B("c7<c,Bz>"))
D.cav=new B.D("Sugest\xf5es para ti",null,C.bj,null,null,null,null,null,null,null)
D.bKo=new B.S(C.bF,D.cav,null)
D.ate=new B.a4(20,2,20,10)
D.c7y=new B.D("Com base no que tens procurado.",null,C.L,null,null,null,null,null,null,null)
D.bKp=new B.S(D.ate,D.c7y,null)
D.cbq=new B.D("Criadas por voc\xeas, sem limite.",null,C.L,null,null,null,null,null,null,null)
D.bKM=new B.S(C.jC,D.cbq,null)
D.cjk=B.cb("afM")
D.bVx=new B.fk([D.cjk],B.B("fk<l1>"))
D.c4S=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cfU=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null)
D.cnf=new A.P7(null)
D.cnv=new A.afM(null)
D.Ab=new A.aQh(0,"todo")
D.acI=new A.aQh(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_K","dmZ",()=>B.ey(new A.cTE(),null,!1,null,null,y.r))})()};
(a=>{a["CTYLg7x4V6+ULCgf/Sm9ylaE0qg="]=a.current})($__dart_deferred_initializers__);