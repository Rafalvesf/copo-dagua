((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dDz(d){var x=B.eV(new B.ex(new B.a5(P.X3,new A.cDT(d),y.A),new A.cDU(),y.U))
return x},
cDT:function cDT(d){this.a=d},
cDU:function cDU(){},
dth(){return new A.a9r(null)},
aPy:function aPy(d,e){this.a=d
this.b=e},
a9r:function a9r(d){this.a=d},
aPx:function aPx(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cvX:function cvX(d){this.a=d},
cvL:function cvL(){},
cvM:function cvM(){},
cvN:function cvN(){},
cvW:function cvW(){},
cvO:function cvO(d,e){this.a=d
this.b=e},
cvP:function cvP(d){this.a=d},
cvK:function cvK(d){this.a=d},
cvQ:function cvQ(d){this.a=d},
cvJ:function cvJ(d){this.a=d},
cvR:function cvR(d,e){this.a=d
this.b=e},
cvS:function cvS(){},
cvT:function cvT(){},
cvU:function cvU(d,e){this.a=d
this.b=e},
cvV:function cvV(d,e){this.a=d
this.b=e},
cvI:function cvI(){},
aIY:function aIY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OE:function OE(d){this.a=d},
aIZ:function aIZ(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
c8y:function c8y(d){this.a=d},
c8x:function c8x(d,e){this.a=d
this.b=e},
c8z:function c8z(d){this.a=d},
c8w:function c8w(d,e){this.a=d
this.b=e},
c8A:function c8A(d,e){this.a=d
this.b=e},
c8v:function c8v(d){this.a=d},
afe:function afe(d){this.a=d},
cgu:function cgu(){},
cgv:function cgv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgt:function cgt(d){this.a=d},
dza(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dDz(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
d82(d,e,f){var x,w=B.dr(e,0,null)
if(w.gdm(w)==="/partners"){x=w.gel().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ai(d).aq("/partners",new M.La(x,!1),y.X)
return}B.ai(d).aq(e,null,y.X)},
PQ(d,e,f){return A.dGj(d,e,f)},
dGj(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$PQ=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a1(0,$.qc().gaX(),y.I)
if(!f.ax)j.NQ(f.a)
q=f.r
x=q==="parceiros"&&C.f.b4(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a1(0,$.co(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aUr(s,p),$async$PQ)
case 11:r=h
if(d.e!=null){p=r.a
B.ai(d).aq("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rB(d,e,p,null,null),$async$PQ)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a1(0,$.dhn().gem(),y.e),$async$PQ)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=A.dza(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9o||l==null?18:19
break
case 18:x=20
return B.d(B.cn(null,new A.cHt(f,l),!1,d,!0,!1,null,y.N),$async$PQ)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.F_(f.a),$async$PQ)
case 24:if(d.e!=null)d.O(y.q).f.a4(B.cA(null,null,null,null,null,C.z,null,B.i('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.d82(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9n)j.W8(f.a)
A.d82(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$PQ,w)},
cOB:function cOB(){},
cHt:function cHt(d,e){this.a=d
this.b=e},
cHq:function cHq(d){this.a=d},
cHr:function cHr(d){this.a=d},
cHs:function cHs(d){this.a=d},
aUr(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aUr=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&B.b()
x=3
return B.d(p.R("proposals").az(0,"partner_id, partner_profiles(business_name, cover_photo_url)").W("id",e).dP(0),$async$aUr)
case 3:u=g
p=J.a7(u)
t=B.a1(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.uq(d,t),$async$aUr)
case 4:r=g
p=s==null
q=B.C(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.hU(r,q,B.C(p?null:J.h(s,"cover_photo_url")),d,t,null,null,0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aUr,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[137]
I=c[160]
E=c[163]
K=c[182]
L=c[132]
M=c[133]
G=c[85]
N=c[241]
A=a.updateHolder(c[52],A)
D=c[399]
O=c[78]
P=c[400]
H=c[176]
Q=c[327]
A.aPy.prototype={
I(){return"_TasksTab."+this.b}}
A.a9r.prototype={
P(){return new A.aPx(D.Ab)}}
A.aPx.prototype={
al(){this.aH()
B.jf(new A.cvX(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gT().H($.qc(),y.z),e=B.V(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a5<1>")
C.e.n(e,new B.a5(d,new A.cvL(),a1))
C.e.cO(e,new A.cvM())
x=f.b
w=x.length+new B.a5(d,new A.cvN(),a1).gA(0)
v=w+e.length
u=new A.cvW()
t=y.p
s=B.a([new B.qK(new A.cvO(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ei("Por fazer",r===D.Ab,w,new A.cvP(h),g),new B.ei("Feito",r===D.ad9,e.length,new A.cvQ(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pk(s,g),D.aHq,new K.m4(r,16,!1,g),B.vc(g,g,"O vosso plano",C.hB,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ab){e=B.a([D.cnw,D.aGX],t)
if(x.length===0)e.push(D.aGM)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.K)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9p?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.D(C.e.gM(C.f.f4(k,B.aW("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a3(k," \xb7 ")
i=n.ax?g:D.aHe
s.push(new B.i8(D.aGK,n.e,k,i,!0,new A.cvR(h,n),!1,g))}e.push(B.fa(s,0))}e.push(D.aGW)
e.push(D.bL8)
x=B.a([],t)
if(!new B.a5(d,new A.cvS(),a1).gV(0).t())x.push(D.aGO)
else for(d=C.e.gV(d),a0=new B.hw(d,new A.cvT(),a0.i("hw<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i8(new G.Kd(!1,!1,new A.cvU(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.fa(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGV)
else for(o=0;o<e.length;e.length===a0||(0,B.K)(e),++o){n=e[o]
d.push(new B.i8(N.Q2,n.e,new A.cvV(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGZ,B.fa(d,0)],t))}return B.cM(g,C.cP,B.ol(D.bVJ,40,q,g,!0,!1),!0,g)},
L6(d,e){return this.bil(d,e)},
bil(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$L6=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.cn(null,new A.cvI(),!1,d,!0,!0,null,y.g),$async$L6)
case 3:q=g
if(q==null){x=1
break}u=e.a1(0,$.qc().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mo(q.d,s,r,t),$async$L6)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L6,w)}}
A.aIY.prototype={}
A.OE.prototype={
P(){var x=$.ac()
return new A.aIZ(new B.aI(C.an,x),new B.aI(C.an,x))}}
A.aIZ.prototype={
m(){var x=this.d,w=$.ac()
x.Z$=w
x.X$=0
x=this.e
x.Z$=w
x.X$=0
this.a7()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.dX(B.B(B.a([B.i("Nova tarefa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a3,new H.jM("T\xedtulo",x.d,x.w,w,w,w),C.P,new H.jM("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.P,L.cQS("Prazo (opcional)",new A.c8y(x),x.f),C.aA,new O.a1_(x.r,new A.c8z(x),w),C.a3,new B.fJ("Adicionar",new A.c8A(x,d),!1,w)],y.p),C.J,C.j,C.L,0,C.v),C.z,w,new B.a2(20,20,20,v.f.d+20),w,w,C.a1)}}
A.afe.prototype={
Lh(d,e,f,g){return this.b9Y(0,e,f,g)},
b9Y(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Lh=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cOS(g.a)
x=3
return B.d(f.a1(0,$.zd().$1(g.a).gem(),y.B),$async$Lh)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.TW(e,u,!1),$async$Lh)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lh,w)},
bc(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cv($.co(),new A.cgu(),y.v,s),s)
s=e.H($.cPI().$1(new B.YB(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dk(x))return C.ar
s=B.a([],y.G)
for(w=J.c9(x),v=w.gV(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.zd().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aH(y.N)
for(w=w.gV(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.R(C.CG,B.B(B.a([D.bKU,D.bLK,new F.L8(s,new A.cgv(this,d,e,x),v,null)],y.p),C.J,C.j,C.m,0,C.v),null)}}
var z=a.updateTypes(["OE(N)","~(dQ)","y(nw)"])
A.cDT.prototype={
$1(d){return d.a===this.a},
$S:463}
A.cDU.prototype={
$1(d){return d.b},
$S:1507}
A.cvX.prototype={
$0(){return this.a.gT().a1(0,$.qc().gaX(),y.I).jI()},
$S:1}
A.cvL.prototype={
$1(d){return d.x===C.yQ},
$S:55}
A.cvM.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bC(0,x==null?d.ch:x)},
$S:184}
A.cvN.prototype={
$1(d){return d.x===C.ia},
$S:55}
A.cvW.prototype={
$1(d){return C.f.aW(C.i.k(B.aN(d)),2,"0")+"/"+C.f.aW(C.i.k(B.ay(d)),2,"0")},
$S:139}
A.cvO.prototype={
$0(){var x=this.a
return x.L6(this.b,x.gT())},
$S:0}
A.cvP.prototype={
$0(){var x=this.a
return x.q(new A.cvK(x))},
$S:0}
A.cvK.prototype={
$0(){return this.a.w=D.Ab},
$S:0}
A.cvQ.prototype={
$0(){var x=this.a
return x.q(new A.cvJ(x))},
$S:0}
A.cvJ.prototype={
$0(){return this.a.w=D.ad9},
$S:0}
A.cvR.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.PQ(w,x.gT(),this.b)},
$S:0}
A.cvS.prototype={
$1(d){return d.x===C.ia},
$S:55}
A.cvT.prototype={
$1(d){return d.x===C.ia},
$S:55}
A.cvU.prototype={
$0(){return this.a.gT().a1(0,$.qc().gaX(),y.I).F_(this.b.a)},
$S:0}
A.cvV.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:17}
A.cvI.prototype={
$1(d){return D.cnf},
$S:z+0}
A.c8y.prototype={
$1(d){var x=this.a
return x.q(new A.c8x(x,d))},
$S:268}
A.c8x.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.c8z.prototype={
$1(d){var x=this.a
return x.q(new A.c8w(x,d))},
$S:102}
A.c8w.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.c8A.prototype={
$0(){var x,w,v,u=this.a
u.q(new A.c8v(u))
if(u.w!=null)return
x=B.aq(this.b,!1)
w=C.f.D(u.d.a.a)
v=C.f.D(u.e.a.a)
if(v.length===0)v=null
x.aj(new A.aIY(w,v,u.f,u.r))},
$S:0}
A.c8v.prototype={
$0(){var x=this.a
x.w=C.f.D(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cgu.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:36}
A.cgv.prototype={
$1(d){var x=this
return x.a.Lh(0,x.b,x.c,J.cYf(x.d,new A.cgt(d)))},
$S:z+1}
A.cgt.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cOB.prototype={
$1(d){return this.aGS(d)},
aGS(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&B.b()
x=7
return B.d(p.R("task_templates").cj(0),$async$$1)
case 7:s=f
r=B.A(y.N,y.c)
for(p=J.ar(s),o=y.P;p.t();){q=p.gE(p)
J.b6(r,B.a1(J.h(o.a(q),"id")),B.d4q(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGZ
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1508}
A.cHt.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.i(w.e,x,x,x,x,C.aat,x,x,x)],v)
w=w.f
if(C.f.D(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.X,B.i(C.f.D(w),x,x,x,x,D.c56,x,x,x)],v))}u.push(C.bC)
u.push(B.DH(D.aDK,D.cbk,new A.cHq(d),x))
if(this.b!=null)C.e.n(u,B.a([C.X,B.ia(Q.aaD,new A.cHr(d),x)],v))
u.push(C.as)
u.push(B.cp(C.mr,x,x,new A.cHs(d),x,x))
return B.bE(!0,new B.R(C.Nz,B.B(u,C.J,C.j,C.L,0,C.v),x),x,C.a_,!0)},
$S:47}
A.cHq.prototype={
$0(){return B.aq(this.a,!1).aj("done")},
$S:0}
A.cHr.prototype={
$0(){return B.aq(this.a,!1).aj("open")},
$S:0}
A.cHs.prototype={
$0(){return B.aq(this.a,!1).bJ()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cDT,A.cDU,A.cvL,A.cvN,A.cvW,A.cvS,A.cvT,A.cvI,A.c8y,A.c8z,A.cgu,A.cgv,A.cgt,A.cOB,A.cHt])
w(A.aPy,B.fr)
w(A.a9r,B.dD)
w(A.aPx,B.dy)
x(B.bR,[A.cvX,A.cvO,A.cvP,A.cvK,A.cvQ,A.cvJ,A.cvR,A.cvU,A.cvV,A.c8x,A.c8w,A.c8A,A.c8v,A.cHq,A.cHr,A.cHs])
w(A.cvM,B.cR)
w(A.aIY,B.H)
w(A.OE,B.J)
w(A.aIZ,B.a_)
w(A.afe,B.en)})()
B.br(b.typeUniverse,JSON.parse('{"a9r":{"J":[],"e":[],"f":[]},"OE":{"J":[],"e":[],"f":[]},"aPx":{"a_":["a9r"]},"aIZ":{"a_":["OE"]},"afe":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ax<t<nw>?>"),D:x("ax<dQ?>"),R:x("hU"),v:x("ed"),Z:x("nu"),e:x("F<a4<c,oJ>>"),B:x("F<dQ?>"),E:x("r<ei>"),G:x("r<dQ>"),s:x("r<c>"),p:x("r<e>"),r:x("a4<c,oJ>"),P:x("a4<c,@>"),U:x("ex<+(c,c),c>"),w:x("dn"),N:x("c"),I:x("tV"),z:x("rj"),c:x("oJ"),A:x("a5<+(c,c)>"),g:x("aIY"),q:x("ds"),h:x("a4<c,@>?"),X:x("H?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDK=new B.ba(C.d9,null,null,null,null,null)
D.aGK=new G.Kd(!1,!1,null,null)
D.aGU=new B.i8(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdr=x([D.aGU],y.p)
D.aGM=new B.T5(D.bdr,0,null)
D.aGO=new B.i8(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGV=new B.i8(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGW=new E.En("As vossas tarefas",null,null,null)
D.aGX=new E.En("Pr\xf3ximas tarefas",null,null,null)
D.aGZ=new E.En("Feito",null,null,null)
D.aHe=new B.et("Nova",C.da,null)
D.aHq=new B.m5("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGZ=new B.c3(C.cJ,[],B.w("c3<c,oJ>"))
D.cfF=new B.E("Sugest\xf5es para ti",null,C.bw,null,null,null,null,null,null,null,null)
D.bKU=new B.R(C.bM,D.cfF,null)
D.cdA=new B.E("Criadas por voc\xeas, sem limite.",null,C.W,null,null,null,null,null,null,null,null)
D.bL8=new B.R(C.jw,D.cdA,null)
D.atI=new B.a2(20,2,20,10)
D.cct=new B.E("Com base no que tens procurado.",null,C.W,null,null,null,null,null,null,null,null)
D.bLK=new B.R(D.atI,D.cct,null)
D.cjl=B.c7("afe")
D.bVJ=new B.fm([D.cjl],B.w("fm<kw>"))
D.c56=new B.M(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbk=new B.E("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cnf=new A.OE(null)
D.cnw=new A.afe(null)
D.Ab=new A.aPy(0,"todo")
D.ad9=new A.aPy(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUv","dhn",()=>B.eE(new A.cOB(),null,!1,null,null,y.r))})()};
(a=>{a["rtS9uHUPuD8fSBGgG0OSrMvvBbU="]=a.current})($__dart_deferred_initializers__);