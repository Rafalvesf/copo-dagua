((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dEG(d){var x=B.eV(new B.ex(new B.a6(P.Xi,new A.cEN(d),y.A),new A.cEO(),y.U))
return x},
cEN:function cEN(d){this.a=d},
cEO:function cEO(){},
dum(){return new A.a9y(null)},
aPP:function aPP(d,e){this.a=d
this.b=e},
a9y:function a9y(d){this.a=d},
aPO:function aPO(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cwQ:function cwQ(d){this.a=d},
cwE:function cwE(){},
cwF:function cwF(){},
cwG:function cwG(){},
cwP:function cwP(){},
cwH:function cwH(d,e){this.a=d
this.b=e},
cwI:function cwI(d){this.a=d},
cwD:function cwD(d){this.a=d},
cwJ:function cwJ(d){this.a=d},
cwC:function cwC(d){this.a=d},
cwK:function cwK(d,e){this.a=d
this.b=e},
cwL:function cwL(){},
cwM:function cwM(){},
cwN:function cwN(d,e){this.a=d
this.b=e},
cwO:function cwO(d,e){this.a=d
this.b=e},
cwB:function cwB(){},
aJb:function aJb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OI:function OI(d){this.a=d},
aJc:function aJc(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
c9f:function c9f(d){this.a=d},
c9e:function c9e(d,e){this.a=d
this.b=e},
c9g:function c9g(d){this.a=d},
c9d:function c9d(d,e){this.a=d
this.b=e},
c9h:function c9h(d,e){this.a=d
this.b=e},
c9c:function c9c(d){this.a=d},
afr:function afr(d){this.a=d},
chj:function chj(){},
chk:function chk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
chi:function chi(d){this.a=d},
dAi(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dEG(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
d8Z(d,e,f){var x,w=B.ds(e,0,null)
if(w.gdm(w)==="/partners"){x=w.gek().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ai(d).ar("/partners",new M.Lg(x,!1),y.X)
return}B.ai(d).ar(e,null,y.X)},
PW(d,e,f){return A.dHq(d,e,f)},
dHq(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$PW=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a0(0,$.qg().gaW(),y.I)
if(!f.ax)j.NL(f.a)
q=f.r
x=q==="parceiros"&&C.f.b4(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a0(0,$.ck(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aUL(s,p),$async$PW)
case 11:r=h
if(d.e!=null){p=r.a
B.ai(d).ar("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rC(d,e,p,null,null),$async$PW)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a0(0,$.dir().gel(),y.e),$async$PW)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dAi(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9I||l==null?18:19
break
case 18:x=20
return B.d(B.co(null,new A.cIm(f,l),!1,d,!0,!1,null,y.N),$async$PW)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EY(f.a),$async$PW)
case 24:if(d.e!=null)d.O(y.q).f.a4(B.cB(null,null,null,null,null,C.z,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.d8Z(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9H)j.W5(f.a)
A.d8Z(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$PW,w)},
cPu:function cPu(){},
cIm:function cIm(d,e){this.a=d
this.b=e},
cIj:function cIj(d){this.a=d},
cIk:function cIk(d){this.a=d},
cIl:function cIl(d){this.a=d},
aUL(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aUL=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&B.b()
x=3
return B.d(p.R("proposals").az(0,"partner_id, partner_profiles(business_name, cover_photo_url)").X("id",e).dP(0),$async$aUL)
case 3:u=g
p=J.a7(u)
t=B.a2(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.us(d,t),$async$aUL)
case 4:r=g
p=s==null
q=B.E(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.hT(r,q,B.E(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aUL,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[137]
I=c[161]
E=c[165]
K=c[185]
L=c[119]
M=c[132]
G=c[86]
N=c[247]
A=a.updateHolder(c[52],A)
D=c[402]
O=c[79]
P=c[403]
H=c[169]
Q=c[332]
A.aPP.prototype={
I(){return"_TasksTab."+this.b}}
A.a9y.prototype={
P(){return new A.aPO(D.Ao)}}
A.aPO.prototype={
ak(){this.aD()
B.jg(new A.cwQ(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().H($.qg(),y.z),e=B.V(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cwE(),a1))
C.e.cP(e,new A.cwF())
x=f.b
w=x.length+new B.a6(d,new A.cwG(),a1).gA(0)
v=w+e.length
u=new A.cwP()
t=y.p
s=B.a([new B.qN(new A.cwH(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ei("Por fazer",r===D.Ao,w,new A.cwI(h),g),new B.ei("Feito",r===D.adw,e.length,new A.cwJ(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.po(s,g),D.aHZ,new K.m4(r,16,!1,g),B.vd(g,g,"O vosso plano",C.hD,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ao){e=B.a([D.coD,D.aHv],t)
if(x.length===0)e.push(D.aHk)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.I)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9J?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.D(C.e.gM(C.f.f4(k,B.aV("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a2(k," \xb7 ")
i=n.ax?g:D.aHN
s.push(new B.i9(D.aHi,n.e,k,i,!0,new A.cwK(h,n),!1,g))}e.push(B.fa(s,0))}e.push(D.aHu)
e.push(D.bLM)
x=B.a([],t)
if(!new B.a6(d,new A.cwL(),a1).gV(0).t())x.push(D.aHm)
else for(d=C.e.gV(d),a0=new B.h5(d,new A.cwM(),a0.i("h5<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i9(new G.Kh(!1,!1,new A.cwN(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.fa(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aHt)
else for(o=0;o<e.length;e.length===a0||(0,B.I)(e),++o){n=e[o]
d.push(new B.i9(N.Qh,n.e,new A.cwO(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aHx,B.fa(d,0)],t))}return B.cO(g,C.cS,B.on(D.bWw,40,q,g,!0,!1),!0,g)},
L3(d,e){return this.biG(d,e)},
biG(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$L3=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.co(null,new A.cwB(),!1,d,!0,!0,null,y.g),$async$L3)
case 3:q=g
if(q==null){x=1
break}u=e.a0(0,$.qg().gaW(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mj(q.d,s,r,t),$async$L3)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L3,w)}}
A.aJb.prototype={}
A.OI.prototype={
P(){var x=$.ac()
return new A.aJc(new B.aJ(C.ap,x),new B.aJ(C.ap,x))}}
A.aJc.prototype={
m(){var x=this.d,w=$.ac()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.dV(B.B(B.a([B.h("Nova tarefa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a3,new H.mx("T\xedtulo",x.d,x.w,w,w,w),C.Q,new H.mx("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.Q,L.d_L("Prazo (opcional)",new A.c9f(x),x.f),C.aB,new O.a13(x.r,new A.c9g(x),w),C.a3,new B.fT("Adicionar",new A.c9h(x,d),!1,w)],y.p),C.I,C.i,C.K,0,C.v),C.z,w,new B.a0(20,20,20,v.f.d+20),w,w,C.a1)}}
A.afr.prototype={
Le(d,e,f,g){return this.bae(0,e,f,g)},
bae(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Le=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cPL(g.a)
x=3
return B.d(f.a0(0,$.zi().$1(g.a).gel(),y.B),$async$Le)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.TZ(e,u,!1),$async$Le)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Le,w)},
bc(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cv($.ck(),new A.chj(),y.v,s),s)
s=e.H($.cQC().$1(new B.YF(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dn(x))return C.ar
s=B.a([],y.G)
for(w=J.c5(x),v=w.gV(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.zi().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aH(y.N)
for(w=w.gV(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.Q(C.CU,B.B(B.a([D.bLy,D.bMn,new F.Le(s,new A.chk(this,d,e,x),v,null)],y.p),C.I,C.i,C.m,0,C.v),null)}}
var z=a.updateTypes(["OI(O)","~(dS)","y(nx)"])
A.cEN.prototype={
$1(d){return d.a===this.a},
$S:371}
A.cEO.prototype={
$1(d){return d.b},
$S:1509}
A.cwQ.prototype={
$0(){return this.a.gS().a0(0,$.qg().gaW(),y.I).jH()},
$S:1}
A.cwE.prototype={
$1(d){return d.x===C.z6},
$S:54}
A.cwF.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bC(0,x==null?d.ch:x)},
$S:168}
A.cwG.prototype={
$1(d){return d.x===C.ie},
$S:54}
A.cwP.prototype={
$1(d){return C.f.aY(C.j.k(B.aM(d)),2,"0")+"/"+C.f.aY(C.j.k(B.ay(d)),2,"0")},
$S:138}
A.cwH.prototype={
$0(){var x=this.a
return x.L3(this.b,x.gS())},
$S:0}
A.cwI.prototype={
$0(){var x=this.a
return x.q(new A.cwD(x))},
$S:0}
A.cwD.prototype={
$0(){return this.a.w=D.Ao},
$S:0}
A.cwJ.prototype={
$0(){var x=this.a
return x.q(new A.cwC(x))},
$S:0}
A.cwC.prototype={
$0(){return this.a.w=D.adw},
$S:0}
A.cwK.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.PW(w,x.gS(),this.b)},
$S:0}
A.cwL.prototype={
$1(d){return d.x===C.ie},
$S:54}
A.cwM.prototype={
$1(d){return d.x===C.ie},
$S:54}
A.cwN.prototype={
$0(){return this.a.gS().a0(0,$.qg().gaW(),y.I).EY(this.b.a)},
$S:0}
A.cwO.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:17}
A.cwB.prototype={
$1(d){return D.com},
$S:z+0}
A.c9f.prototype={
$1(d){var x=this.a
return x.q(new A.c9e(x,d))},
$S:430}
A.c9e.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.c9g.prototype={
$1(d){var x=this.a
return x.q(new A.c9d(x,d))},
$S:102}
A.c9d.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.c9h.prototype={
$0(){var x,w,v,u=this.a
u.q(new A.c9c(u))
if(u.w!=null)return
x=B.ap(this.b,!1)
w=C.f.D(u.d.a.a)
v=C.f.D(u.e.a.a)
if(v.length===0)v=null
x.aj(new A.aJb(w,v,u.f,u.r))},
$S:0}
A.c9c.prototype={
$0(){var x=this.a
x.w=C.f.D(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.chj.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:34}
A.chk.prototype={
$1(d){var x=this
return x.a.Le(0,x.b,x.c,J.cZ9(x.d,new A.chi(d)))},
$S:z+1}
A.chi.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cPu.prototype={
$1(d){return this.aGX(d)},
aGX(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&B.b()
x=7
return B.d(p.R("task_templates").cj(0),$async$$1)
case 7:s=f
r=B.C(y.N,y.c)
for(p=J.aq(s),o=y.P;p.t();){q=p.gE(p)
J.b6(r,B.a2(J.i(o.a(q),"id")),B.d5m(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bHz
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1510}
A.cIm.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aaN,x,x,x)],v)
w=w.f
if(C.f.D(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.X,B.h(C.f.D(w),x,x,x,x,D.c64,x,x,x)],v))}u.push(C.br)
u.push(B.DL(D.aEf,D.ccm,new A.cIj(d),x))
if(this.b!=null)C.e.n(u,B.a([C.X,B.hX(Q.aaZ,new A.cIk(d),x)],v))
u.push(C.as)
u.push(B.cp(C.mq,x,x,new A.cIl(d),x,x))
return B.bF(!0,new B.Q(C.NQ,B.B(u,C.I,C.i,C.K,0,C.v),x),x,C.a_,!0)},
$S:46}
A.cIj.prototype={
$0(){return B.ap(this.a,!1).aj("done")},
$S:0}
A.cIk.prototype={
$0(){return B.ap(this.a,!1).aj("open")},
$S:0}
A.cIl.prototype={
$0(){return B.ap(this.a,!1).bF()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cEN,A.cEO,A.cwE,A.cwG,A.cwP,A.cwL,A.cwM,A.cwB,A.c9f,A.c9g,A.chj,A.chk,A.chi,A.cPu,A.cIm])
w(A.aPP,B.fg)
w(A.a9y,B.dB)
w(A.aPO,B.dw)
x(B.bT,[A.cwQ,A.cwH,A.cwI,A.cwD,A.cwJ,A.cwC,A.cwK,A.cwN,A.cwO,A.c9e,A.c9d,A.c9h,A.c9c,A.cIj,A.cIk,A.cIl])
w(A.cwF,B.cQ)
w(A.aJb,B.J)
w(A.OI,B.H)
w(A.aJc,B.a_)
w(A.afr,B.eo)})()
B.bq(b.typeUniverse,JSON.parse('{"a9y":{"H":[],"e":[],"f":[]},"OI":{"H":[],"e":[],"f":[]},"aPO":{"a_":["a9y"]},"aJc":{"a_":["OI"]},"afr":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ax<t<nx>?>"),D:x("ax<dS?>"),R:x("hT"),v:x("ed"),Z:x("nv"),e:x("F<a4<c,oN>>"),B:x("F<dS?>"),E:x("r<ei>"),G:x("r<dS>"),s:x("r<c>"),p:x("r<e>"),r:x("a4<c,oN>"),P:x("a4<c,@>"),U:x("ex<+(c,c),c>"),w:x("dm"),N:x("c"),I:x("tW"),z:x("rj"),c:x("oN"),A:x("a6<+(c,c)>"),g:x("aJb"),q:x("dt"),h:x("a4<c,@>?"),X:x("J?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aEf=new B.b9(C.dm,null,null,null,null,null)
D.aHi=new G.Kh(!1,!1,null,null)
D.aHs=new B.i9(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.be4=x([D.aHs],y.p)
D.aHk=new B.Ta(D.be4,0,null)
D.aHm=new B.i9(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aHt=new B.i9(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aHu=new E.Er("As vossas tarefas",null,null,null)
D.aHv=new E.Er("Pr\xf3ximas tarefas",null,null,null)
D.aHx=new E.Er("Feito",null,null,null)
D.aHN=new B.eu("Nova",C.da,null)
D.aHZ=new B.m5("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bHz=new B.c1(C.cH,[],B.w("c1<c,oN>"))
D.cgM=new B.D("Sugest\xf5es para ti",null,C.bq,null,null,null,null,null,null,null,null)
D.bLy=new B.Q(C.bM,D.cgM,null)
D.ceG=new B.D("Criadas por voc\xeas, sem limite.",null,C.T,null,null,null,null,null,null,null,null)
D.bLM=new B.Q(C.jw,D.ceG,null)
D.auc=new B.a0(20,2,20,10)
D.cdz=new B.D("Com base no que tens procurado.",null,C.T,null,null,null,null,null,null,null,null)
D.bMn=new B.Q(D.auc,D.cdz,null)
D.cks=B.c9("afr")
D.bWw=new B.fn([D.cks],B.w("fn<kz>"))
D.c64=new B.N(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccm=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.com=new A.OI(null)
D.coD=new A.afr(null)
D.Ao=new A.aPP(0,"todo")
D.adw=new A.aPP(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVy","dir",()=>B.eE(new A.cPu(),null,!1,null,null,y.r))})()};
(a=>{a["SwdFmfpx3OCI2eQEt88VQSbaMIk="]=a.current})($__dart_deferred_initializers__);