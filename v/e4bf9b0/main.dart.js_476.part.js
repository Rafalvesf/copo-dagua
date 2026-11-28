((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dDu(d){var x=B.eV(new B.ew(new B.a5(P.X_,new A.cDO(d),y.A),new A.cDP(),y.U))
return x},
cDO:function cDO(d){this.a=d},
cDP:function cDP(){},
dtc(){return new A.a9n(null)},
aPu:function aPu(d,e){this.a=d
this.b=e},
a9n:function a9n(d){this.a=d},
aPt:function aPt(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cvS:function cvS(d){this.a=d},
cvG:function cvG(){},
cvH:function cvH(){},
cvI:function cvI(){},
cvR:function cvR(){},
cvJ:function cvJ(d,e){this.a=d
this.b=e},
cvK:function cvK(d){this.a=d},
cvF:function cvF(d){this.a=d},
cvL:function cvL(d){this.a=d},
cvE:function cvE(d){this.a=d},
cvM:function cvM(d,e){this.a=d
this.b=e},
cvN:function cvN(){},
cvO:function cvO(){},
cvP:function cvP(d,e){this.a=d
this.b=e},
cvQ:function cvQ(d,e){this.a=d
this.b=e},
cvD:function cvD(){},
aIU:function aIU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OC:function OC(d){this.a=d},
aIV:function aIV(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
c8u:function c8u(d){this.a=d},
c8t:function c8t(d,e){this.a=d
this.b=e},
c8v:function c8v(d){this.a=d},
c8s:function c8s(d,e){this.a=d
this.b=e},
c8w:function c8w(d,e){this.a=d
this.b=e},
c8r:function c8r(d){this.a=d},
afa:function afa(d){this.a=d},
cgq:function cgq(){},
cgr:function cgr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgp:function cgp(d){this.a=d},
dz5(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dDu(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
d7Y(d,e,f){var x,w=B.dr(e,0,null)
if(w.gdm(w)==="/partners"){x=w.gel().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ai(d).au("/partners",new M.L8(x,!1),y.X)
return}B.ai(d).au(e,null,y.X)},
PO(d,e,f){return A.dGe(d,e,f)},
dGe(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$PO=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a1(0,$.qb().gaX(),y.I)
if(!f.ax)j.NO(f.a)
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
return B.d(A.aUn(s,p),$async$PO)
case 11:r=h
if(d.e!=null){p=r.a
B.ai(d).au("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rB(d,e,p,null,null),$async$PO)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a1(0,$.dhi().gem(),y.e),$async$PO)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=A.dz5(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9k||l==null?18:19
break
case 18:x=20
return B.d(B.cn(null,new A.cHo(f,l),!1,d,!0,!1,null,y.N),$async$PO)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.F_(f.a),$async$PO)
case 24:if(d.e!=null)d.O(y.q).f.a4(B.cA(null,null,null,null,null,C.z,null,B.i('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.X,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.d7Y(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9j)j.W7(f.a)
A.d7Y(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$PO,w)},
cOv:function cOv(){},
cHo:function cHo(d,e){this.a=d
this.b=e},
cHl:function cHl(d){this.a=d},
cHm:function cHm(d){this.a=d},
cHn:function cHn(d){this.a=d},
aUn(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aUn=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&B.b()
x=3
return B.d(p.R("proposals").az(0,"partner_id, partner_profiles(business_name, cover_photo_url)").W("id",e).dP(0),$async$aUn)
case 3:u=g
p=J.a6(u)
t=B.a0(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.uq(d,t),$async$aUn)
case 4:r=g
p=s==null
q=B.B(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.hU(r,q,B.B(p?null:J.h(s,"cover_photo_url")),d,t,null,null,0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aUn,w)}},D,O,P,H,Q
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
N=c[242]
A=a.updateHolder(c[52],A)
D=c[400]
O=c[78]
P=c[401]
H=c[176]
Q=c[329]
A.aPu.prototype={
I(){return"_TasksTab."+this.b}}
A.a9n.prototype={
P(){return new A.aPt(D.Aa)}}
A.aPt.prototype={
al(){this.aH()
B.je(new A.cvS(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gT().H($.qb(),y.z),e=B.V(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a5<1>")
C.e.n(e,new B.a5(d,new A.cvG(),a1))
C.e.cO(e,new A.cvH())
x=f.b
w=x.length+new B.a5(d,new A.cvI(),a1).gA(0)
v=w+e.length
u=new A.cvR()
t=y.p
s=B.a([new B.qJ(new A.cvJ(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ei("Por fazer",r===D.Aa,w,new A.cvK(h),g),new B.ei("Feito",r===D.ad5,e.length,new A.cvL(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pi(s,g),D.aHo,new K.m3(r,16,!1,g),B.vc(g,g,"O vosso plano",C.hA,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Aa){e=B.a([D.cnk,D.aGV],t)
if(x.length===0)e.push(D.aGK)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.K)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9l?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.D(C.e.gM(C.f.f4(k,B.aW("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a3(k," \xb7 ")
i=n.ax?g:D.aHc
s.push(new B.i8(D.aGI,n.e,k,i,!0,new A.cvM(h,n),!1,g))}e.push(B.f9(s,0))}e.push(D.aGU)
e.push(D.bL3)
x=B.a([],t)
if(!new B.a5(d,new A.cvN(),a1).gV(0).t())x.push(D.aGM)
else for(d=C.e.gV(d),a0=new B.hv(d,new A.cvO(),a0.i("hv<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i8(new G.Kb(!1,!1,new A.cvP(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.f9(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGT)
else for(o=0;o<e.length;e.length===a0||(0,B.K)(e),++o){n=e[o]
d.push(new B.i8(N.PZ,n.e,new A.cvQ(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGX,B.f9(d,0)],t))}return B.cM(g,C.cP,B.oj(D.bVE,40,q,g,!0,!1),!0,g)},
L4(d,e){return this.bik(d,e)},
bik(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$L4=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.cn(null,new A.cvD(),!1,d,!0,!0,null,y.g),$async$L4)
case 3:q=g
if(q==null){x=1
break}u=e.a1(0,$.qb().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mm(q.d,s,r,t),$async$L4)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L4,w)}}
A.aIU.prototype={}
A.OC.prototype={
P(){var x=$.ac()
return new A.aIV(new B.aI(C.an,x),new B.aI(C.an,x))}}
A.aIV.prototype={
m(){var x=this.d,w=$.ac()
x.Z$=w
x.X$=0
x=this.e
x.Z$=w
x.X$=0
this.a7()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.dX(B.C(B.a([B.i("Nova tarefa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a3,new H.jL("T\xedtulo",x.d,x.w,w,w,w),C.P,new H.jL("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.P,L.cQM("Prazo (opcional)",new A.c8u(x),x.f),C.aA,new O.a0X(x.r,new A.c8v(x),w),C.a3,new B.fJ("Adicionar",new A.c8w(x,d),!1,w)],y.p),C.J,C.j,C.L,0,C.v),C.z,w,new B.a2(20,20,20,v.f.d+20),w,w,C.a1)}}
A.afa.prototype={
Lf(d,e,f,g){return this.b9X(0,e,f,g)},
b9X(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Lf=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cOM(g.a)
x=3
return B.d(f.a1(0,$.zb().$1(g.a).gem(),y.B),$async$Lf)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.TU(e,u,!1),$async$Lf)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lf,w)},
bc(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cv($.co(),new A.cgq(),y.v,s),s)
s=e.H($.cPC().$1(new B.Yy(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dk(x))return C.aq
s=B.a([],y.G)
for(w=J.c9(x),v=w.gV(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.zb().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aH(y.N)
for(w=w.gV(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.R(C.CF,B.C(B.a([D.bKQ,D.bLF,new F.L6(s,new A.cgr(this,d,e,x),v,null)],y.p),C.J,C.j,C.m,0,C.v),null)}}
var z=a.updateTypes(["OC(N)","~(dP)","y(nu)"])
A.cDO.prototype={
$1(d){return d.a===this.a},
$S:463}
A.cDP.prototype={
$1(d){return d.b},
$S:1505}
A.cvS.prototype={
$0(){return this.a.gT().a1(0,$.qb().gaX(),y.I).jI()},
$S:1}
A.cvG.prototype={
$1(d){return d.x===C.yO},
$S:54}
A.cvH.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bC(0,x==null?d.ch:x)},
$S:159}
A.cvI.prototype={
$1(d){return d.x===C.i9},
$S:54}
A.cvR.prototype={
$1(d){return C.f.aW(C.i.k(B.aM(d)),2,"0")+"/"+C.f.aW(C.i.k(B.ay(d)),2,"0")},
$S:132}
A.cvJ.prototype={
$0(){var x=this.a
return x.L4(this.b,x.gT())},
$S:0}
A.cvK.prototype={
$0(){var x=this.a
return x.q(new A.cvF(x))},
$S:0}
A.cvF.prototype={
$0(){return this.a.w=D.Aa},
$S:0}
A.cvL.prototype={
$0(){var x=this.a
return x.q(new A.cvE(x))},
$S:0}
A.cvE.prototype={
$0(){return this.a.w=D.ad5},
$S:0}
A.cvM.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.PO(w,x.gT(),this.b)},
$S:0}
A.cvN.prototype={
$1(d){return d.x===C.i9},
$S:54}
A.cvO.prototype={
$1(d){return d.x===C.i9},
$S:54}
A.cvP.prototype={
$0(){return this.a.gT().a1(0,$.qb().gaX(),y.I).F_(this.b.a)},
$S:0}
A.cvQ.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:17}
A.cvD.prototype={
$1(d){return D.cn3},
$S:z+0}
A.c8u.prototype={
$1(d){var x=this.a
return x.q(new A.c8t(x,d))},
$S:259}
A.c8t.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.c8v.prototype={
$1(d){var x=this.a
return x.q(new A.c8s(x,d))},
$S:95}
A.c8s.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.c8w.prototype={
$0(){var x,w,v,u=this.a
u.q(new A.c8r(u))
if(u.w!=null)return
x=B.aq(this.b,!1)
w=C.f.D(u.d.a.a)
v=C.f.D(u.e.a.a)
if(v.length===0)v=null
x.aj(new A.aIU(w,v,u.f,u.r))},
$S:0}
A.c8r.prototype={
$0(){var x=this.a
x.w=C.f.D(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cgq.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:35}
A.cgr.prototype={
$1(d){var x=this
return x.a.Lf(0,x.b,x.c,J.cYa(x.d,new A.cgp(d)))},
$S:z+1}
A.cgp.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cOv.prototype={
$1(d){return this.aGR(d)},
aGR(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&B.b()
x=7
return B.d(p.R("task_templates").cj(0),$async$$1)
case 7:s=f
r=B.A(y.N,y.c)
for(p=J.ar(s),o=y.P;p.t();){q=p.gE(p)
J.b6(r,B.a0(J.h(o.a(q),"id")),B.d4l(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGV
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1506}
A.cHo.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.i(w.e,x,x,x,x,C.aap,x,x,x)],v)
w=w.f
if(C.f.D(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.Y,B.i(C.f.D(w),x,x,x,x,D.c4W,x,x,x)],v))}u.push(C.bC)
u.push(B.DG(D.aDI,D.cb9,new A.cHl(d),x))
if(this.b!=null)C.e.n(u,B.a([C.Y,B.ip(Q.aaz,new A.cHm(d),x)],v))
u.push(C.as)
u.push(B.cp(C.mp,x,x,new A.cHn(d),x,x))
return B.bD(!0,new B.R(C.Nu,B.C(u,C.J,C.j,C.L,0,C.v),x),x,C.a_,!0)},
$S:46}
A.cHl.prototype={
$0(){return B.aq(this.a,!1).aj("done")},
$S:0}
A.cHm.prototype={
$0(){return B.aq(this.a,!1).aj("open")},
$S:0}
A.cHn.prototype={
$0(){return B.aq(this.a,!1).bJ()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cDO,A.cDP,A.cvG,A.cvI,A.cvR,A.cvN,A.cvO,A.cvD,A.c8u,A.c8v,A.cgq,A.cgr,A.cgp,A.cOv,A.cHo])
w(A.aPu,B.fs)
w(A.a9n,B.dD)
w(A.aPt,B.dy)
x(B.bR,[A.cvS,A.cvJ,A.cvK,A.cvF,A.cvL,A.cvE,A.cvM,A.cvP,A.cvQ,A.c8t,A.c8s,A.c8w,A.c8r,A.cHl,A.cHm,A.cHn])
w(A.cvH,B.cR)
w(A.aIU,B.H)
w(A.OC,B.J)
w(A.aIV,B.a_)
w(A.afa,B.en)})()
B.bs(b.typeUniverse,JSON.parse('{"a9n":{"J":[],"e":[],"f":[]},"OC":{"J":[],"e":[],"f":[]},"aPt":{"a_":["a9n"]},"aIV":{"a_":["OC"]},"afa":{"J":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ax<t<nu>?>"),D:x("ax<dP?>"),R:x("hU"),v:x("ed"),Z:x("nt"),e:x("F<a4<c,oH>>"),B:x("F<dP?>"),E:x("r<ei>"),G:x("r<dP>"),s:x("r<c>"),p:x("r<e>"),r:x("a4<c,oH>"),P:x("a4<c,@>"),U:x("ew<+(c,c),c>"),w:x("dn"),N:x("c"),I:x("tV"),z:x("rj"),c:x("oH"),A:x("a5<+(c,c)>"),g:x("aIU"),q:x("ds"),h:x("a4<c,@>?"),X:x("H?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDI=new B.ba(C.d9,null,null,null,null,null)
D.aGI=new G.Kb(!1,!1,null,null)
D.aGS=new B.i8(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdo=x([D.aGS],y.p)
D.aGK=new B.T3(D.bdo,0,null)
D.aGM=new B.i8(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGT=new B.i8(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGU=new E.Em("As vossas tarefas",null,null,null)
D.aGV=new E.Em("Pr\xf3ximas tarefas",null,null,null)
D.aGX=new E.Em("Feito",null,null,null)
D.aHc=new B.et("Nova",C.da,null)
D.aHo=new B.m4("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGV=new B.c3(C.cJ,[],B.w("c3<c,oH>"))
D.cft=new B.D("Sugest\xf5es para ti",null,C.bv,null,null,null,null,null,null,null,null)
D.bKQ=new B.R(C.bQ,D.cft,null)
D.cdp=new B.D("Criadas por voc\xeas, sem limite.",null,C.W,null,null,null,null,null,null,null,null)
D.bL3=new B.R(C.jt,D.cdp,null)
D.atG=new B.a2(20,2,20,10)
D.cci=new B.D("Com base no que tens procurado.",null,C.W,null,null,null,null,null,null,null,null)
D.bLF=new B.R(D.atG,D.cci,null)
D.cj9=B.c8("afa")
D.bVE=new B.fn([D.cj9],B.w("fn<kv>"))
D.c4W=new B.M(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cb9=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cn3=new A.OC(null)
D.cnk=new A.afa(null)
D.Aa=new A.aPu(0,"todo")
D.ad5=new A.aPu(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUq","dhi",()=>B.eE(new A.cOv(),null,!1,null,null,y.r))})()};
(a=>{a["0qhEfMQu8cBodjfDSYYtrXp2BCg="]=a.current})($__dart_deferred_initializers__);