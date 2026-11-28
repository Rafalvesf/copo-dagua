((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dzq(d){var x=B.eS(new B.es(new B.a3(P.We,new A.cAI(d),y.A),new A.cAJ(),y.U))
return x},
cAI:function cAI(d){this.a=d},
cAJ:function cAJ(){},
dpg(){return new A.a8I(null)},
aOd:function aOd(d,e){this.a=d
this.b=e},
a8I:function a8I(d){this.a=d},
aOc:function aOc(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
csP:function csP(d){this.a=d},
csD:function csD(){},
csE:function csE(){},
csF:function csF(){},
csO:function csO(){},
csG:function csG(d,e){this.a=d
this.b=e},
csH:function csH(d){this.a=d},
csC:function csC(d){this.a=d},
csI:function csI(d){this.a=d},
csB:function csB(d){this.a=d},
csJ:function csJ(d,e){this.a=d
this.b=e},
csK:function csK(){},
csL:function csL(){},
csM:function csM(d,e){this.a=d
this.b=e},
csN:function csN(d,e){this.a=d
this.b=e},
csA:function csA(){},
aHI:function aHI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Of:function Of(d){this.a=d},
aHJ:function aHJ(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
c5M:function c5M(d){this.a=d},
c5L:function c5L(d,e){this.a=d
this.b=e},
c5N:function c5N(d){this.a=d},
c5K:function c5K(d,e){this.a=d
this.b=e},
c5O:function c5O(d,e){this.a=d
this.b=e},
c5J:function c5J(d){this.a=d},
aek:function aek(d){this.a=d},
cdG:function cdG(){},
cdH:function cdH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdF:function cdF(d){this.a=d},
dv4(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dzq(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
d4r(d,e,f){var x,w=B.dn(e,0,null)
if(w.gdl(w)==="/partners"){x=w.geh().h(0,"category")
if(x==null)x=f==null?null:f.w
B.aj(d).az("/partners",new M.KN(x,!1),y.X)
return}B.aj(d).az(e,null,y.X)},
Pr(d,e,f){return A.dC2(d,e,f)},
dC2(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Pr=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a1(0,$.q2().gaV(),y.I)
if(!f.ax)j.Nq(f.a)
q=f.r
x=q==="parceiros"&&C.f.b3(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a1(0,$.cm(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aT_(s,p),$async$Pr)
case 11:r=h
if(d.e!=null){p=r.a
B.aj(d).az("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rp(d,e,p,null,null),$async$Pr)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a1(0,$.ddK().gej(),y.e),$async$Pr)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=A.dv4(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a8t||l==null?18:19
break
case 18:x=20
return B.d(B.ck(null,new A.cE8(f,l),!1,d,!0,!1,null,y.N),$async$Pr)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EL(f.a),$async$Pr)
case 24:if(d.e!=null)d.O(y.q).f.a4(B.cz(null,null,null,null,null,C.z,null,B.i('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.W,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.d4r(d,l,m)
case 22:x=1
break
case 19:if(q===C.a8s)j.VD(f.a)
A.d4r(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Pr,w)},
cL1:function cL1(){},
cE8:function cE8(d,e){this.a=d
this.b=e},
cE5:function cE5(d){this.a=d},
cE6:function cE6(d){this.a=d},
cE7:function cE7(d){this.a=d},
aT_(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aT_=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").aw(0,"partner_id, partner_profiles(business_name, cover_photo_url)").W("id",e).dN(0),$async$aT_)
case 3:u=g
p=J.a7(u)
t=B.a_(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.ug(d,t),$async$aT_)
case 4:r=g
p=s==null
q=B.J(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.hQ(r,q,B.J(p?null:J.h(s,"cover_photo_url")),d,t,null,null,0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aT_,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[133]
I=c[156]
E=c[159]
K=c[178]
L=c[129]
M=c[130]
G=c[83]
N=c[237]
A=a.updateHolder(c[50],A)
D=c[388]
O=c[76]
P=c[389]
H=c[172]
Q=c[315]
A.aOd.prototype={
I(){return"_TasksTab."+this.b}}
A.a8I.prototype={
R(){return new A.aOc(D.zN)}}
A.aOc.prototype={
am(){this.aJ()
B.je(new A.csP(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gT().G($.q2(),y.z),e=B.W(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a3<1>")
C.e.p(e,new B.a3(d,new A.csD(),a1))
C.e.cO(e,new A.csE())
x=f.b
w=x.length+new B.a3(d,new A.csF(),a1).gA(0)
v=w+e.length
u=new A.csO()
t=y.p
s=B.a([new B.qz(new A.csG(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ef("Por fazer",r===D.zN,w,new A.csH(h),g),new B.ef("Feito",r===D.acc,e.length,new A.csI(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pa(s,g),D.aG5,new K.lY(r,16,!1,g),B.v2(g,g,"O vosso plano",C.ht,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.zN){e=B.a([D.ckM,D.aFC],t)
if(x.length===0)e.push(D.aFr)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.G)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a8u?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.D(C.e.gM(C.f.f1(k,B.aV("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a3(k," \xb7 ")
i=n.ax?g:D.aFU
s.push(new B.i4(D.aFp,n.e,k,i,!0,new A.csJ(h,n),!1,g))}e.push(B.f5(s,0))}e.push(D.aFB)
e.push(D.bJl)
x=B.a([],t)
if(!new B.a3(d,new A.csK(),a1).gV(0).t())x.push(D.aFt)
else for(d=C.e.gV(d),a0=new B.hr(d,new A.csL(),a0.i("hr<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i4(new G.JR(!1,!1,new A.csM(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.f5(x,0))
C.e.p(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aFA)
else for(o=0;o<e.length;e.length===a0||(0,B.G)(e),++o){n=e[o]
d.push(new B.i4(N.Pg,n.e,new A.csN(n,u).$0(),g,!1,g,!0,g))}C.e.p(q,B.a([D.aFE,B.f5(d,0)],t))}return B.cP(g,C.cO,B.oc(D.bTE,40,q,g,!0,!1),!0,g)},
KN(d,e){return this.bgY(d,e)},
bgY(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$KN=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.ck(null,new A.csA(),!1,d,!0,!0,null,y.g),$async$KN)
case 3:q=g
if(q==null){x=1
break}u=e.a1(0,$.q2().gaV(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.M1(q.d,s,r,t),$async$KN)
case 4:case 1:return B.l(v,w)}})
return B.m($async$KN,w)}}
A.aHI.prototype={}
A.Of.prototype={
R(){var x=$.ad()
return new A.aHJ(new B.aI(C.ao,x),new B.aI(C.ao,x))}}
A.aHJ.prototype={
m(){var x=this.d,w=$.ad()
x.Z$=w
x.X$=0
x=this.e
x.Z$=w
x.X$=0
this.a8()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.dV(B.B(B.a([B.i("Nova tarefa",w,w,w,w,B.aq(d).ok.r,w,w,w),C.a4,new H.jL("T\xedtulo",x.d,x.w,w,w,w),C.Q,new H.jL("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.Q,L.cNi("Prazo (opcional)",new A.c5M(x),x.f),C.aC,new O.a0n(x.r,new A.c5N(x),w),C.a4,new B.fC("Adicionar",new A.c5O(x,d),!1,w)],y.p),C.J,C.j,C.N,0,C.v),C.z,w,new B.a0(20,20,20,v.f.d+20),w,w,C.a1)}}
A.aek.prototype={
KY(d,e,f,g){return this.b8M(0,e,f,g)},
b8M(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$KY=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cLi(g.a)
x=3
return B.d(f.a1(0,$.yT().$1(g.a).gej(),y.B),$async$KY)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Tt(e,u,!1),$async$KY)
case 4:case 1:return B.l(v,w)}})
return B.m($async$KY,w)},
bc(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cw($.cm(),new A.cdG(),y.v,s),s)
s=e.G($.cM8().$1(new B.Y1(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dC(x))return C.aq
s=B.a([],y.G)
for(w=J.c9(x),v=w.gV(x),u=y.D;v.t();){t=v.gE(v)
t=e.G($.yT().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aF(y.N)
for(w=w.gV(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.Q(C.C9,B.B(B.a([D.bJ8,D.bJU,new F.KL(s,new A.cdH(this,d,e,x),v,null)],y.p),C.J,C.j,C.o,0,C.v),null)}}
var z=a.updateTypes(["Of(N)","~(dN)","y(nk)"])
A.cAI.prototype={
$1(d){return d.a===this.a},
$S:458}
A.cAJ.prototype={
$1(d){return d.b},
$S:1481}
A.csP.prototype={
$0(){return this.a.gT().a1(0,$.q2().gaV(),y.I).jE()},
$S:2}
A.csD.prototype={
$1(d){return d.x===C.yu},
$S:61}
A.csE.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bC(0,x==null?d.ch:x)},
$S:162}
A.csF.prototype={
$1(d){return d.x===C.i5},
$S:61}
A.csO.prototype={
$1(d){return C.f.aZ(C.i.k(B.aN(d)),2,"0")+"/"+C.f.aZ(C.i.k(B.ay(d)),2,"0")},
$S:148}
A.csG.prototype={
$0(){var x=this.a
return x.KN(this.b,x.gT())},
$S:0}
A.csH.prototype={
$0(){var x=this.a
return x.q(new A.csC(x))},
$S:0}
A.csC.prototype={
$0(){return this.a.w=D.zN},
$S:0}
A.csI.prototype={
$0(){var x=this.a
return x.q(new A.csB(x))},
$S:0}
A.csB.prototype={
$0(){return this.a.w=D.acc},
$S:0}
A.csJ.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Pr(w,x.gT(),this.b)},
$S:0}
A.csK.prototype={
$1(d){return d.x===C.i5},
$S:61}
A.csL.prototype={
$1(d){return d.x===C.i5},
$S:61}
A.csM.prototype={
$0(){return this.a.gT().a1(0,$.q2().gaV(),y.I).EL(this.b.a)},
$S:0}
A.csN.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:16}
A.csA.prototype={
$1(d){return D.ckw},
$S:z+0}
A.c5M.prototype={
$1(d){var x=this.a
return x.q(new A.c5L(x,d))},
$S:266}
A.c5L.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.c5N.prototype={
$1(d){var x=this.a
return x.q(new A.c5K(x,d))},
$S:101}
A.c5K.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.c5O.prototype={
$0(){var x,w,v,u=this.a
u.q(new A.c5J(u))
if(u.w!=null)return
x=B.as(this.b,!1)
w=C.f.D(u.d.a.a)
v=C.f.D(u.e.a.a)
if(v.length===0)v=null
x.ak(new A.aHI(w,v,u.f,u.r))},
$S:0}
A.c5J.prototype={
$0(){var x=this.a
x.w=C.f.D(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cdG.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:35}
A.cdH.prototype={
$1(d){var x=this
return x.a.KY(0,x.b,x.c,J.cUJ(x.d,new A.cdF(d)))},
$S:z+1}
A.cdF.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cL1.prototype={
$1(d){return this.aG5(d)},
aG5(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").cj(0),$async$$1)
case 7:s=f
r=B.A(y.N,y.c)
for(p=J.at(s),o=y.P;p.t();){q=p.gE(p)
J.b6(r,B.a_(J.h(o.a(q),"id")),B.d0N(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bFp
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1482}
A.cE8.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.i(w.e,x,x,x,x,C.a9x,x,x,x)],v)
w=w.f
if(C.f.D(w==null?"":w).length!==0){w.toString
C.e.p(u,B.a([C.X,B.i(C.f.D(w),x,x,x,x,D.c2P,x,x,x)],v))}u.push(C.bO)
u.push(B.Dr(D.aCr,D.c9_,new A.cE5(d),x))
if(this.b!=null)C.e.p(u,B.a([C.X,B.iM(Q.a9H,new A.cE6(d),x)],v))
u.push(C.ar)
u.push(B.cr(C.oH,x,x,new A.cE7(d),x,x))
return B.bG(!0,new B.Q(C.MO,B.B(u,C.J,C.j,C.N,0,C.v),x),x,C.a_,!0)},
$S:45}
A.cE5.prototype={
$0(){return B.as(this.a,!1).ak("done")},
$S:0}
A.cE6.prototype={
$0(){return B.as(this.a,!1).ak("open")},
$S:0}
A.cE7.prototype={
$0(){return B.as(this.a,!1).bJ()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cAI,A.cAJ,A.csD,A.csF,A.csO,A.csK,A.csL,A.csA,A.c5M,A.c5N,A.cdG,A.cdH,A.cdF,A.cL1,A.cE8])
w(A.aOd,B.fx)
w(A.a8I,B.dD)
w(A.aOc,B.dv)
x(B.bR,[A.csP,A.csG,A.csH,A.csC,A.csI,A.csB,A.csJ,A.csM,A.csN,A.c5L,A.c5K,A.c5O,A.c5J,A.cE5,A.cE6,A.cE7])
w(A.csE,B.cS)
w(A.aHI,B.L)
w(A.Of,B.I)
w(A.aHJ,B.a1)
w(A.aek,B.eo)})()
B.bu(b.typeUniverse,JSON.parse('{"a8I":{"I":[],"e":[],"f":[]},"Of":{"I":[],"e":[],"f":[]},"aOc":{"a1":["a8I"]},"aHJ":{"a1":["Of"]},"aek":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ax<r<nk>?>"),D:x("ax<dN?>"),R:x("hQ"),v:x("e8"),Z:x("nj"),e:x("F<a5<c,oz>>"),B:x("F<dN?>"),E:x("t<ef>"),G:x("t<dN>"),s:x("t<c>"),p:x("t<e>"),r:x("a5<c,oz>"),P:x("a5<c,@>"),U:x("es<+(c,c),c>"),w:x("dx"),N:x("c"),I:x("tJ"),z:x("r8"),c:x("oz"),A:x("a3<+(c,c)>"),g:x("aHI"),q:x("dA"),h:x("a5<c,@>?"),X:x("L?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aCr=new B.bc(C.dg,null,null,null,null,null)
D.aFp=new G.JR(!1,!1,null,null)
D.aFz=new B.i4(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bc3=x([D.aFz],y.p)
D.aFr=new B.SG(D.bc3,0,null)
D.aFt=new B.i4(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aFA=new B.i4(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aFB=new E.E6("As vossas tarefas",null,null,null)
D.aFC=new E.E6("Pr\xf3ximas tarefas",null,null,null)
D.aFE=new E.E6("Feito",null,null,null)
D.aFU=new B.ep("Nova",C.d7,null)
D.aG5=new B.lZ("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bFp=new B.c0(C.cH,[],B.w("c0<c,oz>"))
D.cd9=new B.D("Sugest\xf5es para ti",null,C.bx,null,null,null,null,null,null,null,null)
D.bJ8=new B.Q(C.bM,D.cd9,null)
D.cb8=new B.D("Criadas por voc\xeas, sem limite.",null,C.Z,null,null,null,null,null,null,null,null)
D.bJl=new B.Q(C.jm,D.cb8,null)
D.asA=new B.a0(20,2,20,10)
D.ca3=new B.D("Com base no que tens procurado.",null,C.Z,null,null,null,null,null,null,null,null)
D.bJU=new B.Q(D.asA,D.ca3,null)
D.cgJ=B.c6("aek")
D.bTE=new B.fg([D.cgJ],B.w("fg<kv>"))
D.c2P=new B.M(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c9_=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.ckw=new A.Of(null)
D.ckM=new A.aek(null)
D.zN=new A.aOd(0,"todo")
D.acc=new A.aOd(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dQ6","ddK",()=>B.ez(new A.cL1(),null,!1,null,null,y.r))})()};
(a=>{a["7J+1ZD5fCU1dRuWVFRtfMyhqnpM="]=a.current})($__dart_deferred_initializers__);