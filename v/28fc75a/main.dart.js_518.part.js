((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dJx(d){var x=B.eL(new B.eq(new B.a6(P.WD,new A.cIl(d),y.A),new A.cIm(),y.U))
return x},
cIl:function cIl(d){this.a=d},
cIm:function cIm(){},
dza(){return new A.a9Q(null)},
aQb:function aQb(d,e){this.a=d
this.b=e},
a9Q:function a9Q(d){this.a=d},
aQa:function aQa(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cAx:function cAx(d){this.a=d},
cAl:function cAl(){},
cAm:function cAm(){},
cAn:function cAn(){},
cAw:function cAw(){},
cAo:function cAo(d,e){this.a=d
this.b=e},
cAp:function cAp(d){this.a=d},
cAk:function cAk(d){this.a=d},
cAq:function cAq(d){this.a=d},
cAj:function cAj(d){this.a=d},
cAr:function cAr(d,e){this.a=d
this.b=e},
cAs:function cAs(){},
cAt:function cAt(){},
cAu:function cAu(d,e){this.a=d
this.b=e},
cAv:function cAv(d,e){this.a=d
this.b=e},
cAi:function cAi(){},
aJx:function aJx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OX:function OX(d){this.a=d},
aJy:function aJy(d,e){var _=this
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
afC:function afC(d){this.a=d},
cjQ:function cjQ(){},
cjR:function cjR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjP:function cjP(d){this.a=d},
dF3(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dJx(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
dds(d,e,f){var x,w=B.dA(e,0,null)
if(w.gdi(w)==="/partners"){x=w.gel().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ae(d).aj("/partners",new M.Lp(x,!1),y.X)
return}B.ae(d).aj(e,null,y.X)},
Qe(d,e,f){return A.dMn(d,e,f)},
dMn(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qe=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a_(0,$.zi().gaX(),y.I)
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
return B.d(A.aVb(s,p),$async$Qe)
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
return B.d(B.rH(d,e,p,null,null),$async$Qe)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a_(0,$.dn8().gdI(),y.e),$async$Qe)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dF3(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a99||l==null?18:19
break
case 18:x=20
return B.d(B.bQ(null,new A.cMc(f,l),!1,d,!0,!1,null,y.N),$async$Qe)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EW(f.a),$async$Qe)
case 24:if(d.e!=null)d.O(y.q).f.a0(B.bY(null,null,null,null,null,C.y,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.dds(d,l,m)
case 22:x=1
break
case 19:if(q===C.a98)j.W9(f.a)
A.dds(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qe,w)},
cTQ:function cTQ(){},
cMc:function cMc(d,e){this.a=d
this.b=e},
cM9:function cM9(d){this.a=d},
cMa:function cMa(d){this.a=d},
cMb:function cMb(d){this.a=d},
aVb(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVb=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").al(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",e).e9(0),$async$aVb)
case 3:u=g
p=J.a7(u)
t=B.Y(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qa(d,t),$async$aVb)
case 4:r=g
p=s==null
q=B.C(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eB(r,q,t,B.C(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.jW)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVb,w)}},D,O,P,H,Q
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
A.aQb.prototype={
I(){return"_TasksTab."+this.b}}
A.a9Q.prototype={
R(){return new A.aQa(D.Ab)}}
A.aQa.prototype={
ad(){this.aq()
B.j7(new A.cAx(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().G($.zi(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cAl(),a1))
C.e.ct(e,new A.cAm())
x=f.b
w=x.length+new B.a6(d,new A.cAn(),a1).gA(0)
v=w+e.length
u=new A.cAw()
t=y.p
s=B.a([new B.qO(new A.cAo(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ek("Por fazer",r===D.Ab,w,new A.cAp(h),g),new B.ek("Feito",r===D.acF,e.length,new A.cAq(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pu(s,g),D.aH0,new K.mb(r,16,!1,g),B.vm(g,g,"O vosso plano",C.hG,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ab){e=B.a([D.cnl,D.aGB],t)
if(x.length===0)e.push(D.aGr)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.G)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9a?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.B(C.e.gJ(C.f.eW(k,B.aS("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a2(k," \xb7 ")
i=n.ax?g:D.aGP
s.push(new B.ip(D.aGp,n.e,k,i,!0,new A.cAr(h,n),!1,g))}e.push(B.eR(s,0))}e.push(D.aGA)
e.push(D.bKH)
x=B.a([],t)
if(!new B.a6(d,new A.cAs(),a1).gX(0).q())x.push(D.aGs)
else for(d=C.e.gX(d),a0=new B.fA(d,new A.cAt(),a0.i("fA<1>"));a0.q();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.p(u.$1(s))
x.push(new B.ip(new G.Kq(!1,!1,new A.cAu(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eR(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGx)
else for(o=0;o<e.length;e.length===a0||(0,B.G)(e),++o){n=e[o]
d.push(new B.ip(N.PI,n.e,new A.cAv(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGz,B.eR(d,0)],t))}return B.cP(g,C.cP,B.nJ(D.bVr,40,q,g,!0,!1),!0,g)},
KX(d,e){return this.bhN(d,e)},
bhN(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$KX=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bQ(null,new A.cAi(),!1,d,!0,!0,null,y.g),$async$KX)
case 3:q=g
if(q==null){x=1
break}u=e.a_(0,$.zi().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mh(q.d,s,r,t),$async$KX)
case 4:case 1:return B.l(v,w)}})
return B.m($async$KX,w)}}
A.aJx.prototype={}
A.OX.prototype={
R(){var x=$.aa()
return new A.aJy(new B.aF(C.ak,x),new B.aF(C.ak,x))}}
A.aJy.prototype={
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.aT(d,w,y.w).w
return B.dS(B.y(B.a([B.h("Nova tarefa",w,w,w,w,B.ay(d).ok.r,w,w),C.a_,new H.no("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.no("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d44("Prazo (opcional)",new A.cbo(x),x.f),C.aA,new O.a1o(x.r,new A.cbp(x),w),C.a_,new B.fY("Adicionar",new A.cbq(x,d),!1,w)],y.p),C.E,C.h,C.J),C.y,w,new B.a4(20,20,20,v.f.d+20),w,C.av)}}
A.afC.prototype={
L7(d,e,f,g){return this.b9b(0,e,f,g)},
b9b(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$L7=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cU6(g.a)
x=3
return B.d(f.a_(0,$.wE().$1(g.a).gdI(),y.B),$async$L7)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Uh(e,u,!1),$async$L7)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L7,w)},
bb(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cC($.cq(),new A.cjQ(),y.v,s),s)
s=e.G($.cUZ().$1(new B.YZ(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dg(x))return C.ao
s=B.a([],y.G)
for(w=J.c9(x),v=w.gX(x),u=y.D;v.q();){t=v.gE(v)
t=e.G($.wE().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aL(y.N)
for(w=w.gX(x);w.q();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.S(C.CC,B.y(B.a([D.bKj,D.bKk,new F.Ll(s,new A.cjR(this,d,e,x),v,null)],y.p),C.E,C.h,C.l),null)}}
var z=a.updateTypes(["OX(N)","~(dq)","B(nA)"])
A.cIl.prototype={
$1(d){return d.a===this.a},
$S:464}
A.cIm.prototype={
$1(d){return d.b},
$S:1526}
A.cAx.prototype={
$0(){return this.a.gS().a_(0,$.zi().gaX(),y.I).jf()},
$S:1}
A.cAl.prototype={
$1(d){return d.x===C.yW},
$S:60}
A.cAm.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bA(0,x==null?d.ch:x)},
$S:172}
A.cAn.prototype={
$1(d){return d.x===C.is},
$S:60}
A.cAw.prototype={
$1(d){return C.f.aT(C.j.k(B.aE(d)),2,"0")+"/"+C.f.aT(C.j.k(B.aw(d)),2,"0")},
$S:155}
A.cAo.prototype={
$0(){var x=this.a
return x.KX(this.b,x.gS())},
$S:0}
A.cAp.prototype={
$0(){var x=this.a
return x.p(new A.cAk(x))},
$S:0}
A.cAk.prototype={
$0(){return this.a.w=D.Ab},
$S:0}
A.cAq.prototype={
$0(){var x=this.a
return x.p(new A.cAj(x))},
$S:0}
A.cAj.prototype={
$0(){return this.a.w=D.acF},
$S:0}
A.cAr.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qe(w,x.gS(),this.b)},
$S:0}
A.cAs.prototype={
$1(d){return d.x===C.is},
$S:60}
A.cAt.prototype={
$1(d){return d.x===C.is},
$S:60}
A.cAu.prototype={
$0(){return this.a.gS().a_(0,$.zi().gaX(),y.I).EW(this.b.a)},
$S:0}
A.cAv.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.p(this.b.$1(v))},
$S:18}
A.cAi.prototype={
$1(d){return D.cn5},
$S:z+0}
A.cbo.prototype={
$1(d){var x=this.a
return x.p(new A.cbn(x,d))},
$S:529}
A.cbn.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cbp.prototype={
$1(d){var x=this.a
return x.p(new A.cbm(x,d))},
$S:137}
A.cbm.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cbq.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cbl(u))
if(u.w!=null)return
x=B.al(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.ah(new A.aJx(w,v,u.f,u.r))},
$S:0}
A.cbl.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cjQ.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:38}
A.cjR.prototype={
$1(d){var x=this
return x.a.L7(0,x.b,x.c,J.d2v(x.d,new A.cjP(d)))},
$S:z+1}
A.cjP.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cTQ.prototype={
$1(d){return this.aGE(d)},
aGE(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").cl(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ao(s),o=y.P;p.q();){q=p.gE(p)
J.b2(r,B.Y(J.i(o.a(q),"id")),B.d9M(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGw
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1527}
A.cMc.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aaf,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.P,B.h(C.f.B(w),x,x,x,x,D.c4K,x,x)],v))}u.push(C.bO)
u.push(new B.am(B.A0(D.aDl,D.cfK,new A.cM9(d),x),x))
if(this.b!=null)C.e.n(u,B.a([C.P,new B.am(B.hk(Q.aaF,new A.cMa(d),x),x)],v))
u.push(C.ar)
u.push(new B.am(B.cJ(C.mp,x,x,new A.cMb(d),x,x),x))
return B.bB(!0,new B.S(C.Nf,B.y(u,C.E,C.h,C.J),x),x,C.Z,!0)},
$S:31}
A.cM9.prototype={
$0(){return B.al(this.a,!1).ah("done")},
$S:0}
A.cMa.prototype={
$0(){return B.al(this.a,!1).ah("open")},
$S:0}
A.cMb.prototype={
$0(){return B.al(this.a,!1).bj()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bu,[A.cIl,A.cIm,A.cAl,A.cAn,A.cAw,A.cAs,A.cAt,A.cAi,A.cbo,A.cbp,A.cjQ,A.cjR,A.cjP,A.cTQ,A.cMc])
w(A.aQb,B.fg)
w(A.a9Q,B.dC)
w(A.aQa,B.dw)
x(B.bL,[A.cAx,A.cAo,A.cAp,A.cAk,A.cAq,A.cAj,A.cAr,A.cAu,A.cAv,A.cbn,A.cbm,A.cbq,A.cbl,A.cM9,A.cMa,A.cMb])
w(A.cAm,B.cK)
w(A.aJx,B.M)
w(A.OX,B.H)
w(A.aJy,B.a_)
w(A.afC,B.ew)})()
B.br(b.typeUniverse,JSON.parse('{"a9Q":{"H":[],"e":[],"f":[]},"OX":{"H":[],"e":[],"f":[]},"aQa":{"a_":["a9Q"]},"aJy":{"a_":["OX"]},"afC":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.z
return{F:x("ax<t<nA>?>"),D:x("ax<dq?>"),R:x("eB"),v:x("ed"),Z:x("nz"),e:x("F<a3<c,oR>>"),B:x("F<dq?>"),E:x("r<ek>"),G:x("r<dq>"),s:x("r<c>"),p:x("r<e>"),r:x("a3<c,oR>"),P:x("a3<c,@>"),U:x("eq<+(c,c),c>"),w:x("du"),N:x("c"),I:x("u1"),z:x("Bv"),c:x("oR"),A:x("a6<+(c,c)>"),g:x("aJx"),q:x("dl"),h:x("a3<c,@>?"),X:x("M?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDl=new B.b8(C.dp,null,null,null,null,null)
D.aGp=new G.Kq(!1,!1,null,null)
D.aGw=new B.ip(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bd8=x([D.aGw],y.p)
D.aGr=new B.Tq(D.bd8,0,null)
D.aGs=new B.ip(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGx=new B.ip(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGz=new E.Eu("Feito",null)
D.aGA=new E.Eu("As vossas tarefas",null)
D.aGB=new E.Eu("Pr\xf3ximas tarefas",null)
D.aGP=new B.dU("Nova",C.cU,null)
D.aH0=new B.lg("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGw=new B.c6(C.cJ,[],B.z("c6<c,oR>"))
D.cal=new B.D("Sugest\xf5es para ti",null,C.bi,null,null,null,null,null,null,null)
D.bKj=new B.S(C.bH,D.cal,null)
D.at8=new B.a4(20,2,20,10)
D.c7p=new B.D("Com base no que tens procurado.",null,C.L,null,null,null,null,null,null,null)
D.bKk=new B.S(D.at8,D.c7p,null)
D.cbg=new B.D("Criadas por voc\xeas, sem limite.",null,C.L,null,null,null,null,null,null,null)
D.bKH=new B.S(C.jB,D.cbg,null)
D.cja=B.ca("afC")
D.bVr=new B.fn([D.cja],B.z("fn<l0>"))
D.c4K=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cfK=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null)
D.cn5=new A.OX(null)
D.cnl=new A.afC(null)
D.Ab=new A.aQb(0,"todo")
D.acF=new A.aQb(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_P","dn8",()=>B.ez(new A.cTQ(),null,!1,null,null,y.r))})()};
(a=>{a["E47zGV9EVDh+/T/tePkSGMeoTqI="]=a.current})($__dart_deferred_initializers__);