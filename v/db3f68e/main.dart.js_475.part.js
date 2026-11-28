((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dDJ(d){var x=B.eV(new B.ex(new B.a5(P.X3,new A.cDV(d),y.A),new A.cDW(),y.U))
return x},
cDV:function cDV(d){this.a=d},
cDW:function cDW(){},
dtr(){return new A.a9s(null)},
aPy:function aPy(d,e){this.a=d
this.b=e},
a9s:function a9s(d){this.a=d},
aPx:function aPx(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cvZ:function cvZ(d){this.a=d},
cvN:function cvN(){},
cvO:function cvO(){},
cvP:function cvP(){},
cvY:function cvY(){},
cvQ:function cvQ(d,e){this.a=d
this.b=e},
cvR:function cvR(d){this.a=d},
cvM:function cvM(d){this.a=d},
cvS:function cvS(d){this.a=d},
cvL:function cvL(d){this.a=d},
cvT:function cvT(d,e){this.a=d
this.b=e},
cvU:function cvU(){},
cvV:function cvV(){},
cvW:function cvW(d,e){this.a=d
this.b=e},
cvX:function cvX(d,e){this.a=d
this.b=e},
cvK:function cvK(){},
aIY:function aIY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OF:function OF(d){this.a=d},
aIZ:function aIZ(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
c8A:function c8A(d){this.a=d},
c8z:function c8z(d,e){this.a=d
this.b=e},
c8B:function c8B(d){this.a=d},
c8y:function c8y(d,e){this.a=d
this.b=e},
c8C:function c8C(d,e){this.a=d
this.b=e},
c8x:function c8x(d){this.a=d},
afg:function afg(d){this.a=d},
cgw:function cgw(){},
cgx:function cgx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgv:function cgv(d){this.a=d},
dzk(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dDJ(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
d84(d,e,f){var x,w=B.dr(e,0,null)
if(w.gdm(w)==="/partners"){x=w.gel().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ai(d).aq("/partners",new M.Lb(x,!1),y.X)
return}B.ai(d).aq(e,null,y.X)},
PQ(d,e,f){return A.dGt(d,e,f)},
dGt(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
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
return B.d(A.aUs(s,p),$async$PQ)
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
return B.d(e.a1(0,$.dhx().gem(),y.e),$async$PQ)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=A.dzk(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9p||l==null?18:19
break
case 18:x=20
return B.d(B.cn(null,new A.cHv(f,l),!1,d,!0,!1,null,y.N),$async$PQ)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.F_(f.a),$async$PQ)
case 24:if(d.e!=null)d.O(y.q).f.a4(B.cA(null,null,null,null,null,C.z,null,B.i('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.d84(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9o)j.W8(f.a)
A.d84(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$PQ,w)},
cOD:function cOD(){},
cHv:function cHv(d,e){this.a=d
this.b=e},
cHs:function cHs(d){this.a=d},
cHt:function cHt(d){this.a=d},
cHu:function cHu(d){this.a=d},
aUs(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aUs=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&B.b()
x=3
return B.d(p.R("proposals").az(0,"partner_id, partner_profiles(business_name, cover_photo_url)").W("id",e).dP(0),$async$aUs)
case 3:u=g
p=J.a7(u)
t=B.a1(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.uq(d,t),$async$aUs)
case 4:r=g
p=s==null
q=B.C(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.hU(r,q,B.C(p?null:J.h(s,"cover_photo_url")),d,t,null,null,0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aUs,w)}},D,O,P,H,Q
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
A.a9s.prototype={
P(){return new A.aPx(D.A9)}}
A.aPx.prototype={
al(){this.aH()
B.jf(new A.cvZ(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gT().H($.qc(),y.z),e=B.V(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a5<1>")
C.e.n(e,new B.a5(d,new A.cvN(),a1))
C.e.cO(e,new A.cvO())
x=f.b
w=x.length+new B.a5(d,new A.cvP(),a1).gA(0)
v=w+e.length
u=new A.cvY()
t=y.p
s=B.a([new B.qK(new A.cvQ(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ei("Por fazer",r===D.A9,w,new A.cvR(h),g),new B.ei("Feito",r===D.ad9,e.length,new A.cvS(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pk(s,g),D.aHp,new K.m4(r,16,!1,g),B.vc(g,g,"O vosso plano",C.hB,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.A9){e=B.a([D.cnv,D.aGW],t)
if(x.length===0)e.push(D.aGL)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.H)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9q?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.D(C.e.gM(C.f.f4(k,B.aW("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a3(k," \xb7 ")
i=n.ax?g:D.aHd
s.push(new B.i8(D.aGJ,n.e,k,i,!0,new A.cvT(h,n),!1,g))}e.push(B.fa(s,0))}e.push(D.aGV)
e.push(D.bL5)
x=B.a([],t)
if(!new B.a5(d,new A.cvU(),a1).gV(0).t())x.push(D.aGN)
else for(d=C.e.gV(d),a0=new B.hw(d,new A.cvV(),a0.i("hw<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i8(new G.Ke(!1,!1,new A.cvW(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.fa(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGU)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.i8(N.Q2,n.e,new A.cvX(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGY,B.fa(d,0)],t))}return B.cM(g,C.cP,B.ol(D.bVK,40,q,g,!0,!1),!0,g)},
L6(d,e){return this.bin(d,e)},
bin(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$L6=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.cn(null,new A.cvK(),!1,d,!0,!0,null,y.g),$async$L6)
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
A.OF.prototype={
P(){var x=$.ac()
return new A.aIZ(new B.aI(C.ao,x),new B.aI(C.ao,x))}}
A.aIZ.prototype={
m(){var x=this.d,w=$.ac()
x.Z$=w
x.X$=0
x=this.e
x.Z$=w
x.X$=0
this.a7()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.dX(B.B(B.a([B.i("Nova tarefa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a3,new H.jM("T\xedtulo",x.d,x.w,w,w,w),C.P,new H.jM("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.P,L.cQU("Prazo (opcional)",new A.c8A(x),x.f),C.aB,new O.a10(x.r,new A.c8B(x),w),C.a3,new B.fJ("Adicionar",new A.c8C(x,d),!1,w)],y.p),C.I,C.j,C.K,0,C.v),C.z,w,new B.a2(20,20,20,v.f.d+20),w,w,C.a1)}}
A.afg.prototype={
Lh(d,e,f,g){return this.b9Y(0,e,f,g)},
b9Y(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Lh=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cOU(g.a)
x=3
return B.d(f.a1(0,$.zd().$1(g.a).gem(),y.B),$async$Lh)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.TX(e,u,!1),$async$Lh)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lh,w)},
bc(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cv($.co(),new A.cgw(),y.v,s),s)
s=e.H($.cPK().$1(new B.YC(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dk(x))return C.as
s=B.a([],y.G)
for(w=J.c9(x),v=w.gV(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.zd().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aH(y.N)
for(w=w.gV(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.Q(C.CF,B.B(B.a([D.bLb,D.bLJ,new F.L9(s,new A.cgx(this,d,e,x),v,null)],y.p),C.I,C.j,C.m,0,C.v),null)}}
var z=a.updateTypes(["OF(N)","~(dQ)","y(nx)"])
A.cDV.prototype={
$1(d){return d.a===this.a},
$S:349}
A.cDW.prototype={
$1(d){return d.b},
$S:1508}
A.cvZ.prototype={
$0(){return this.a.gT().a1(0,$.qc().gaX(),y.I).jI()},
$S:1}
A.cvN.prototype={
$1(d){return d.x===C.yP},
$S:53}
A.cvO.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bC(0,x==null?d.ch:x)},
$S:169}
A.cvP.prototype={
$1(d){return d.x===C.ia},
$S:53}
A.cvY.prototype={
$1(d){return C.f.aW(C.i.k(B.aN(d)),2,"0")+"/"+C.f.aW(C.i.k(B.ay(d)),2,"0")},
$S:138}
A.cvQ.prototype={
$0(){var x=this.a
return x.L6(this.b,x.gT())},
$S:0}
A.cvR.prototype={
$0(){var x=this.a
return x.q(new A.cvM(x))},
$S:0}
A.cvM.prototype={
$0(){return this.a.w=D.A9},
$S:0}
A.cvS.prototype={
$0(){var x=this.a
return x.q(new A.cvL(x))},
$S:0}
A.cvL.prototype={
$0(){return this.a.w=D.ad9},
$S:0}
A.cvT.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.PQ(w,x.gT(),this.b)},
$S:0}
A.cvU.prototype={
$1(d){return d.x===C.ia},
$S:53}
A.cvV.prototype={
$1(d){return d.x===C.ia},
$S:53}
A.cvW.prototype={
$0(){return this.a.gT().a1(0,$.qc().gaX(),y.I).F_(this.b.a)},
$S:0}
A.cvX.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:17}
A.cvK.prototype={
$1(d){return D.cne},
$S:z+0}
A.c8A.prototype={
$1(d){var x=this.a
return x.q(new A.c8z(x,d))},
$S:240}
A.c8z.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.c8B.prototype={
$1(d){var x=this.a
return x.q(new A.c8y(x,d))},
$S:102}
A.c8y.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.c8C.prototype={
$0(){var x,w,v,u=this.a
u.q(new A.c8x(u))
if(u.w!=null)return
x=B.aq(this.b,!1)
w=C.f.D(u.d.a.a)
v=C.f.D(u.e.a.a)
if(v.length===0)v=null
x.aj(new A.aIY(w,v,u.f,u.r))},
$S:0}
A.c8x.prototype={
$0(){var x=this.a
x.w=C.f.D(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cgw.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:34}
A.cgx.prototype={
$1(d){var x=this
return x.a.Lh(0,x.b,x.c,J.cYh(x.d,new A.cgv(d)))},
$S:z+1}
A.cgv.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cOD.prototype={
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
J.b6(r,B.a1(J.h(o.a(q),"id")),B.d4s(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGY
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1509}
A.cHv.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.i(w.e,x,x,x,x,C.aa_,x,x,x)],v)
w=w.f
if(C.f.D(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.X,B.i(C.f.D(w),x,x,x,x,D.c52,x,x,x)],v))}u.push(C.bC)
u.push(B.DH(D.aDJ,D.cbm,new A.cHs(d),x))
if(this.b!=null)C.e.n(u,B.a([C.X,B.ia(Q.aaE,new A.cHt(d),x)],v))
u.push(C.at)
u.push(B.cs(C.mr,x,x,new A.cHu(d),x,x))
return B.bC(!0,new B.Q(C.Nz,B.B(u,C.I,C.j,C.K,0,C.v),x),x,C.a_,!0)},
$S:44}
A.cHs.prototype={
$0(){return B.aq(this.a,!1).aj("done")},
$S:0}
A.cHt.prototype={
$0(){return B.aq(this.a,!1).aj("open")},
$S:0}
A.cHu.prototype={
$0(){return B.aq(this.a,!1).bJ()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cDV,A.cDW,A.cvN,A.cvP,A.cvY,A.cvU,A.cvV,A.cvK,A.c8A,A.c8B,A.cgw,A.cgx,A.cgv,A.cOD,A.cHv])
w(A.aPy,B.fr)
w(A.a9s,B.dD)
w(A.aPx,B.dy)
x(B.bR,[A.cvZ,A.cvQ,A.cvR,A.cvM,A.cvS,A.cvL,A.cvT,A.cvW,A.cvX,A.c8z,A.c8y,A.c8C,A.c8x,A.cHs,A.cHt,A.cHu])
w(A.cvO,B.cR)
w(A.aIY,B.I)
w(A.OF,B.K)
w(A.aIZ,B.a_)
w(A.afg,B.en)})()
B.br(b.typeUniverse,JSON.parse('{"a9s":{"K":[],"e":[],"f":[]},"OF":{"K":[],"e":[],"f":[]},"aPx":{"a_":["a9s"]},"aIZ":{"a_":["OF"]},"afg":{"K":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ax<t<nx>?>"),D:x("ax<dQ?>"),R:x("hU"),v:x("ed"),Z:x("nv"),e:x("F<a4<c,oJ>>"),B:x("F<dQ?>"),E:x("r<ei>"),G:x("r<dQ>"),s:x("r<c>"),p:x("r<e>"),r:x("a4<c,oJ>"),P:x("a4<c,@>"),U:x("ex<+(c,c),c>"),w:x("dn"),N:x("c"),I:x("tV"),z:x("rj"),c:x("oJ"),A:x("a5<+(c,c)>"),g:x("aIY"),q:x("ds"),h:x("a4<c,@>?"),X:x("I?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDJ=new B.ba(C.d8,null,null,null,null,null)
D.aGJ=new G.Ke(!1,!1,null,null)
D.aGT=new B.i8(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdq=x([D.aGT],y.p)
D.aGL=new B.T5(D.bdq,0,null)
D.aGN=new B.i8(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGU=new B.i8(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGV=new E.En("As vossas tarefas",null,null,null)
D.aGW=new E.En("Pr\xf3ximas tarefas",null,null,null)
D.aGY=new E.En("Feito",null,null,null)
D.aHd=new B.et("Nova",C.d9,null)
D.aHp=new B.m5("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGY=new B.c3(C.cJ,[],B.w("c3<c,oJ>"))
D.cdz=new B.E("Criadas por voc\xeas, sem limite.",null,C.W,null,null,null,null,null,null,null,null)
D.bL5=new B.Q(C.jw,D.cdz,null)
D.ce0=new B.E("Sugest\xf5es para ti",null,C.bu,null,null,null,null,null,null,null,null)
D.bLb=new B.Q(C.bM,D.ce0,null)
D.atH=new B.a2(20,2,20,10)
D.ccq=new B.E("Com base no que tens procurado.",null,C.W,null,null,null,null,null,null,null,null)
D.bLJ=new B.Q(D.atH,D.ccq,null)
D.cjk=B.c8("afg")
D.bVK=new B.fm([D.cjk],B.w("fm<kw>"))
D.c52=new B.M(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cbm=new B.E("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cne=new A.OF(null)
D.cnv=new A.afg(null)
D.A9=new A.aPy(0,"todo")
D.ad9=new A.aPy(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUy","dhx",()=>B.eE(new A.cOD(),null,!1,null,null,y.r))})()};
(a=>{a["6O3mGpzfvMtPWpF0Cn3yhYRmQMk="]=a.current})($__dart_deferred_initializers__);