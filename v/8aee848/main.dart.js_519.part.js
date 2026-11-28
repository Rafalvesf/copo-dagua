((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dJT(d){var x=B.eL(new B.eq(new B.a6(P.WI,new A.cIE(d),y.A),new A.cIF(),y.U))
return x},
cIE:function cIE(d){this.a=d},
cIF:function cIF(){},
dzv(){return new A.a9Z(null)},
aQk:function aQk(d,e){this.a=d
this.b=e},
a9Z:function a9Z(d){this.a=d},
aQj:function aQj(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cAQ:function cAQ(d){this.a=d},
cAE:function cAE(){},
cAF:function cAF(){},
cAG:function cAG(){},
cAP:function cAP(){},
cAH:function cAH(d,e){this.a=d
this.b=e},
cAI:function cAI(d){this.a=d},
cAD:function cAD(d){this.a=d},
cAJ:function cAJ(d){this.a=d},
cAC:function cAC(d){this.a=d},
cAK:function cAK(d,e){this.a=d
this.b=e},
cAL:function cAL(){},
cAM:function cAM(){},
cAN:function cAN(d,e){this.a=d
this.b=e},
cAO:function cAO(d,e){this.a=d
this.b=e},
cAB:function cAB(){},
aJG:function aJG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
P3:function P3(d){this.a=d},
aJH:function aJH(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cbH:function cbH(d){this.a=d},
cbG:function cbG(d,e){this.a=d
this.b=e},
cbI:function cbI(d){this.a=d},
cbF:function cbF(d,e){this.a=d
this.b=e},
cbJ:function cbJ(d,e){this.a=d
this.b=e},
cbE:function cbE(d){this.a=d},
afL:function afL(d){this.a=d},
ck8:function ck8(){},
ck9:function ck9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ck7:function ck7(d){this.a=d},
dFp(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dJT(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
ddN(d,e,f){var x,w=B.dA(e,0,null)
if(w.gdi(w)==="/partners"){x=w.gel().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ae(d).aj("/partners",new M.Lv(x,!1),y.X)
return}B.ae(d).aj(e,null,y.X)},
Ql(d,e,f){return A.dMJ(d,e,f)},
dMJ(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Ql=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a_(0,$.zk().gaX(),y.I)
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
return B.d(A.aVk(s,p),$async$Ql)
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
return B.d(B.rH(d,e,p,null,null),$async$Ql)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a_(0,$.dnt().gdI(),y.e),$async$Ql)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=A.dFp(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9d||l==null?18:19
break
case 18:x=20
return B.d(B.bQ(null,new A.cMv(f,l),!1,d,!0,!1,null,y.N),$async$Ql)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EX(f.a),$async$Ql)
case 24:if(d.e!=null)d.O(y.q).f.a0(B.bZ(null,null,null,null,null,C.y,null,B.i('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.ddN(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9c)j.W9(f.a)
A.ddN(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Ql,w)},
cU9:function cU9(){},
cMv:function cMv(d,e){this.a=d
this.b=e},
cMs:function cMs(d){this.a=d},
cMt:function cMt(d){this.a=d},
cMu:function cMu(d){this.a=d},
aVk(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVk=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.P().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").al(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",e).e9(0),$async$aVk)
case 3:u=g
p=J.a7(u)
t=B.Y(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qa(d,t),$async$aVk)
case 4:r=g
p=s==null
q=B.B(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eB(r,q,t,B.B(p?null:J.h(s,"cover_photo_url")),d,t,null,null,0,null,null,C.jX)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVk,w)}},D,O,P,H,Q
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
A.aQk.prototype={
I(){return"_TasksTab."+this.b}}
A.a9Z.prototype={
R(){return new A.aQj(D.Ad)}}
A.aQj.prototype={
ad(){this.aq()
B.j8(new A.cAQ(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().G($.zk(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cAE(),a1))
C.e.ct(e,new A.cAF())
x=f.b
w=x.length+new B.a6(d,new A.cAG(),a1).gA(0)
v=w+e.length
u=new A.cAP()
t=y.p
s=B.a([new B.qO(new A.cAH(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ek("Por fazer",r===D.Ad,w,new A.cAI(h),g),new B.ek("Feito",r===D.acJ,e.length,new A.cAJ(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pu(s,g),D.aH4,new K.mb(r,16,!1,g),B.vn(g,g,"O vosso plano",C.hG,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ad){e=B.a([D.cnt,D.aGF],t)
if(x.length===0)e.push(D.aGv)
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
k=k.length===0?g:C.e.a2(k," \xb7 ")
i=n.ax?g:D.aGT
s.push(new B.ip(D.aGt,n.e,k,i,!0,new A.cAK(h,n),!1,g))}e.push(B.eR(s,0))}e.push(D.aGE)
e.push(D.bKL)
x=B.a([],t)
if(!new B.a6(d,new A.cAL(),a1).gX(0).q())x.push(D.aGw)
else for(d=C.e.gX(d),a0=new B.fA(d,new A.cAM(),a0.i("fA<1>"));a0.q();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.p(u.$1(s))
x.push(new B.ip(new G.Kw(!1,!1,new A.cAN(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eR(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGB)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.ip(N.PN,n.e,new A.cAO(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGD,B.eR(d,0)],t))}return B.cP(g,C.cP,B.nK(D.bVx,40,q,g,!0,!1),!0,g)},
KX(d,e){return this.bhR(d,e)},
bhR(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$KX=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bQ(null,new A.cAB(),!1,d,!0,!0,null,y.g),$async$KX)
case 3:q=g
if(q==null){x=1
break}u=e.a_(0,$.zk().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mh(q.d,s,r,t),$async$KX)
case 4:case 1:return B.l(v,w)}})
return B.m($async$KX,w)}}
A.aJG.prototype={}
A.P3.prototype={
R(){var x=$.aa()
return new A.aJH(new B.aF(C.ak,x),new B.aF(C.ak,x))}}
A.aJH.prototype={
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.aT(d,w,y.w).w
return B.dS(B.y(B.a([B.i("Nova tarefa",w,w,w,w,B.ay(d).ok.r,w,w),C.a_,new H.np("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.np("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d4n("Prazo (opcional)",new A.cbH(x),x.f),C.aA,new O.a1w(x.r,new A.cbI(x),w),C.a_,new B.fY("Adicionar",new A.cbJ(x,d),!1,w)],y.p),C.E,C.h,C.J),C.y,w,new B.a4(20,20,20,v.f.d+20),w,C.av)}}
A.afL.prototype={
L7(d,e,f,g){return this.b9f(0,e,f,g)},
b9f(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$L7=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cUq(g.a)
x=3
return B.d(f.a_(0,$.wF().$1(g.a).gdI(),y.B),$async$L7)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Un(e,u,!1),$async$L7)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L7,w)},
b9(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cC($.cq(),new A.ck8(),y.v,s),s)
s=e.G($.cVi().$1(new B.Z4(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dg(x))return C.an
s=B.a([],y.G)
for(w=J.ca(x),v=w.gX(x),u=y.D;v.q();){t=v.gE(v)
t=e.G($.wF().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aL(y.N)
for(w=w.gX(x);w.q();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.S(C.CE,B.y(B.a([D.bKn,D.bKo,new F.Lr(s,new A.ck9(this,d,e,x),v,null)],y.p),C.E,C.h,C.l),null)}}
var z=a.updateTypes(["P3(N)","~(dq)","C(nB)"])
A.cIE.prototype={
$1(d){return d.a===this.a},
$S:466}
A.cIF.prototype={
$1(d){return d.b},
$S:1530}
A.cAQ.prototype={
$0(){return this.a.gS().a_(0,$.zk().gaX(),y.I).jf()},
$S:1}
A.cAE.prototype={
$1(d){return d.x===C.yY},
$S:55}
A.cAF.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bA(0,x==null?d.ch:x)},
$S:194}
A.cAG.prototype={
$1(d){return d.x===C.is},
$S:55}
A.cAP.prototype={
$1(d){return C.f.aT(C.j.k(B.aE(d)),2,"0")+"/"+C.f.aT(C.j.k(B.aw(d)),2,"0")},
$S:152}
A.cAH.prototype={
$0(){var x=this.a
return x.KX(this.b,x.gS())},
$S:0}
A.cAI.prototype={
$0(){var x=this.a
return x.p(new A.cAD(x))},
$S:0}
A.cAD.prototype={
$0(){return this.a.w=D.Ad},
$S:0}
A.cAJ.prototype={
$0(){var x=this.a
return x.p(new A.cAC(x))},
$S:0}
A.cAC.prototype={
$0(){return this.a.w=D.acJ},
$S:0}
A.cAK.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Ql(w,x.gS(),this.b)},
$S:0}
A.cAL.prototype={
$1(d){return d.x===C.is},
$S:55}
A.cAM.prototype={
$1(d){return d.x===C.is},
$S:55}
A.cAN.prototype={
$0(){return this.a.gS().a_(0,$.zk().gaX(),y.I).EX(this.b.a)},
$S:0}
A.cAO.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.p(this.b.$1(v))},
$S:18}
A.cAB.prototype={
$1(d){return D.cnd},
$S:z+0}
A.cbH.prototype={
$1(d){var x=this.a
return x.p(new A.cbG(x,d))},
$S:510}
A.cbG.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cbI.prototype={
$1(d){var x=this.a
return x.p(new A.cbF(x,d))},
$S:138}
A.cbF.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cbJ.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cbE(u))
if(u.w!=null)return
x=B.al(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.ah(new A.aJG(w,v,u.f,u.r))},
$S:0}
A.cbE.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.ck8.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:37}
A.ck9.prototype={
$1(d){var x=this
return x.a.L7(0,x.b,x.c,J.d2O(x.d,new A.ck7(d)))},
$S:z+1}
A.ck7.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cU9.prototype={
$1(d){return this.aGH(d)},
aGH(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").cl(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ao(s),o=y.P;p.q();){q=p.gE(p)
J.b1(r,B.Y(J.h(o.a(q),"id")),B.da6(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGA
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1531}
A.cMv.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.i(w.e,x,x,x,x,C.aaj,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.P,B.i(C.f.B(w),x,x,x,x,D.c4R,x,x)],v))}u.push(C.bP)
u.push(new B.am(B.A1(D.aDp,D.cfS,new A.cMs(d),x),x))
if(this.b!=null)C.e.n(u,B.a([C.P,new B.am(B.hl(Q.aaJ,new A.cMt(d),x),x)],v))
u.push(C.ar)
u.push(new B.am(B.cJ(C.mq,x,x,new A.cMu(d),x,x),x))
return B.bB(!0,new B.S(C.Ng,B.y(u,C.E,C.h,C.J),x),x,C.Z,!0)},
$S:31}
A.cMs.prototype={
$0(){return B.al(this.a,!1).ah("done")},
$S:0}
A.cMt.prototype={
$0(){return B.al(this.a,!1).ah("open")},
$S:0}
A.cMu.prototype={
$0(){return B.al(this.a,!1).bj()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bu,[A.cIE,A.cIF,A.cAE,A.cAG,A.cAP,A.cAL,A.cAM,A.cAB,A.cbH,A.cbI,A.ck8,A.ck9,A.ck7,A.cU9,A.cMv])
w(A.aQk,B.f7)
w(A.a9Z,B.dC)
w(A.aQj,B.dw)
x(B.bL,[A.cAQ,A.cAH,A.cAI,A.cAD,A.cAJ,A.cAC,A.cAK,A.cAN,A.cAO,A.cbG,A.cbF,A.cbJ,A.cbE,A.cMs,A.cMt,A.cMu])
w(A.cAF,B.cK)
w(A.aJG,B.M)
w(A.P3,B.G)
w(A.aJH,B.a_)
w(A.afL,B.ew)})()
B.br(b.typeUniverse,JSON.parse('{"a9Z":{"G":[],"e":[],"f":[]},"P3":{"G":[],"e":[],"f":[]},"aQj":{"a_":["a9Z"]},"aJH":{"a_":["P3"]},"afL":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.z
return{F:x("ax<t<nB>?>"),D:x("ax<dq?>"),R:x("eB"),v:x("ed"),Z:x("nA"),e:x("F<a3<c,oR>>"),B:x("F<dq?>"),E:x("r<ek>"),G:x("r<dq>"),s:x("r<c>"),p:x("r<e>"),r:x("a3<c,oR>"),P:x("a3<c,@>"),U:x("eq<+(c,c),c>"),w:x("du"),N:x("c"),I:x("u2"),z:x("Bx"),c:x("oR"),A:x("a6<+(c,c)>"),g:x("aJG"),q:x("dl"),h:x("a3<c,@>?"),X:x("M?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDp=new B.b8(C.dp,null,null,null,null,null)
D.aGt=new G.Kw(!1,!1,null,null)
D.aGA=new B.ip(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdc=x([D.aGA],y.p)
D.aGv=new B.Tw(D.bdc,0,null)
D.aGw=new B.ip(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGB=new B.ip(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGD=new E.Ew("Feito",null)
D.aGE=new E.Ew("As vossas tarefas",null)
D.aGF=new E.Ew("Pr\xf3ximas tarefas",null)
D.aGT=new B.dU("Nova",C.cU,null)
D.aH4=new B.lh("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGA=new B.c7(C.cJ,[],B.z("c7<c,oR>"))
D.cat=new B.D("Sugest\xf5es para ti",null,C.bi,null,null,null,null,null,null,null)
D.bKn=new B.S(C.bF,D.cat,null)
D.atc=new B.a4(20,2,20,10)
D.c7w=new B.D("Com base no que tens procurado.",null,C.L,null,null,null,null,null,null,null)
D.bKo=new B.S(D.atc,D.c7w,null)
D.cbo=new B.D("Criadas por voc\xeas, sem limite.",null,C.L,null,null,null,null,null,null,null)
D.bKL=new B.S(C.jC,D.cbo,null)
D.cji=B.cb("afL")
D.bVx=new B.fn([D.cji],B.z("fn<l1>"))
D.c4R=new B.Q(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cfS=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null)
D.cnd=new A.P3(null)
D.cnt=new A.afL(null)
D.Ad=new A.aQk(0,"todo")
D.acJ=new A.aQk(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e0c","dnt",()=>B.ez(new A.cU9(),null,!1,null,null,y.r))})()};
(a=>{a["alWCRrmFZ1fN+Ugd5w8W4smVS7E="]=a.current})($__dart_deferred_initializers__);