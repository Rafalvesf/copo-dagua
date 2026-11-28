((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dyZ(d){var x=B.eS(new B.er(new B.a3(P.Wa,new A.cAi(d),y.A),new A.cAj(),y.U))
return x},
cAi:function cAi(d){this.a=d},
cAj:function cAj(){},
doM(){return new A.a8v(null)},
aNX:function aNX(d,e){this.a=d
this.b=e},
a8v:function a8v(d){this.a=d},
aNW:function aNW(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cs3:function cs3(d){this.a=d},
crS:function crS(){},
crT:function crT(){},
crU:function crU(){},
cs2:function cs2(){},
crV:function crV(d,e){this.a=d
this.b=e},
crW:function crW(d){this.a=d},
crR:function crR(d){this.a=d},
crX:function crX(d){this.a=d},
crQ:function crQ(d){this.a=d},
crY:function crY(d,e){this.a=d
this.b=e},
crZ:function crZ(){},
cs_:function cs_(){},
cs0:function cs0(d,e){this.a=d
this.b=e},
cs1:function cs1(d,e){this.a=d
this.b=e},
crP:function crP(){},
aHs:function aHs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
O9:function O9(d){this.a=d},
aHt:function aHt(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
c50:function c50(d){this.a=d},
c5_:function c5_(d,e){this.a=d
this.b=e},
c51:function c51(d){this.a=d},
c4Z:function c4Z(d,e){this.a=d
this.b=e},
c52:function c52(d,e){this.a=d
this.b=e},
c4Y:function c4Y(d){this.a=d},
ae7:function ae7(d){this.a=d},
ccV:function ccV(){},
ccW:function ccW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ccU:function ccU(d){this.a=d},
duD(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dyZ(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
d40(d,e,f){var x,w=B.dn(e,0,null)
if(w.gdl(w)==="/partners"){x=w.geh().h(0,"category")
if(x==null)x=f==null?null:f.w
B.aj(d).az("/partners",new M.KI(x,!1),y.X)
return}B.aj(d).az(e,null,y.X)},
Pl(d,e,f){return A.dBA(d,e,f)},
dBA(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Pl=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a1(0,$.q1().gaV(),y.I)
if(!f.ax)j.Nq(f.a)
q=f.r
x=q==="parceiros"&&C.f.b3(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a1(0,$.cm(),y.B).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aSK(p,s),$async$Pl)
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
return B.d(B.rm(d,e,p,null,null),$async$Pl)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a1(0,$.ddj().gej(),y.e),$async$Pl)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=A.duD(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a8l||l==null?18:19
break
case 18:x=20
return B.d(B.ck(null,new A.cDD(f,l),!1,d,!0,!1,null,y.N),$async$Pl)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EL(f.a),$async$Pl)
case 24:if(d.e!=null)d.O(y.q).f.a4(B.cz(null,null,null,null,null,C.z,null,B.i('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.W,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.d40(d,l,m)
case 22:x=1
break
case 19:if(q===C.a8k)j.VD(f.a)
A.d40(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Pl,w)},
cKv:function cKv(){},
cDD:function cDD(d,e){this.a=d
this.b=e},
cDA:function cDA(d){this.a=d},
cDB:function cDB(d){this.a=d},
cDC:function cDC(d){this.a=d},
aSK(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aSK=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").aw(0,"partner_id, partner_profiles(business_name, cover_photo_url)").W("id",d).dN(0),$async$aSK)
case 3:u=g
p=J.a7(u)
t=B.a_(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.ue(t,e),$async$aSK)
case 4:r=g
p=s==null
q=B.J(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.hQ(r,q,B.J(p?null:J.h(s,"cover_photo_url")),e,t,null,null,0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aSK,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[129]
I=c[152]
E=c[155]
K=c[174]
L=c[125]
M=c[126]
G=c[82]
N=c[234]
A=a.updateHolder(c[50],A)
D=c[374]
O=c[74]
P=c[375]
H=c[168]
Q=c[292]
A.aNX.prototype={
I(){return"_TasksTab."+this.b}}
A.a8v.prototype={
R(){return new A.aNW(D.zP)}}
A.aNW.prototype={
am(){this.aJ()
B.jd(new A.cs3(this),y.H)},
v(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gT().F($.q1(),y.z),e=B.V(f.c,y.S),d=f.d,a0=B.a8(d),a1=a0.i("a3<1>")
C.e.p(e,new B.a3(d,new A.crS(),a1))
C.e.cO(e,new A.crT())
x=f.b
w=x.length+new B.a3(d,new A.crU(),a1).gA(0)
v=w+e.length
u=new A.cs2()
t=y.p
s=B.a([new B.qy(new A.crV(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ed("Por fazer",r===D.zP,w,new A.crW(h),g),new B.ed("Feito",r===D.ac4,e.length,new A.crX(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.p9(s,g),D.aFQ,new K.lX(r,16,!1,g),B.uZ(g,g,"O vosso plano",C.hs,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.zP){e=B.a([D.cjX,D.aFn],t)
if(x.length===0)e.push(D.aFc)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.G)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a8m?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.D(C.e.gM(C.f.f1(k,B.aV("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a3(k," \xb7 ")
i=n.ax?g:D.aFE
s.push(new B.i4(D.aFa,n.e,k,i,!0,new A.crY(h,n),!1,g))}e.push(B.f5(s,0))}e.push(D.aFm)
e.push(D.bIU)
x=B.a([],t)
if(!new B.a3(d,new A.crZ(),a1).gV(0).t())x.push(D.aFe)
else for(d=C.e.gV(d),a0=new B.hr(d,new A.cs_(),a0.i("hr<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i4(new G.JM(!1,!1,new A.cs0(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.f5(x,0))
C.e.p(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aFl)
else for(o=0;o<e.length;e.length===a0||(0,B.G)(e),++o){n=e[o]
d.push(new B.i4(N.Pc,n.e,new A.cs1(n,u).$0(),g,!1,g,!0,g))}C.e.p(q,B.a([D.aFp,B.f5(d,0)],t))}return B.cP(g,C.cO,B.ob(D.bT6,40,q,g,!0,!1),!0,g)},
KL(d,e){return this.bgW(d,e)},
bgW(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$KL=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.ck(null,new A.crP(),!1,d,!0,!0,null,y.v),$async$KL)
case 3:q=g
if(q==null){x=1
break}u=e.a1(0,$.q1().gaV(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.M1(q.d,s,r,t),$async$KL)
case 4:case 1:return B.l(v,w)}})
return B.m($async$KL,w)}}
A.aHs.prototype={}
A.O9.prototype={
R(){var x=$.ad()
return new A.aHt(new B.aI(C.ao,x),new B.aI(C.ao,x))}}
A.aHt.prototype={
m(){var x=this.d,w=$.ad()
x.Z$=w
x.X$=0
x=this.e
x.Z$=w
x.X$=0
this.a8()},
v(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.e2(B.B(B.a([B.i("Nova tarefa",w,w,w,w,B.aq(d).ok.r,w,w,w),C.a4,new H.jL("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.jL("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.cMS("Prazo (opcional)",new A.c50(x),x.f),C.aB,new O.a0d(x.r,new A.c51(x),w),C.a4,new B.fE("Adicionar",new A.c52(x,d),!1,w)],y.p),C.J,C.j,C.P,0,C.v),C.z,w,new B.a0(20,20,20,v.f.d+20),w,C.a3)}}
A.ae7.prototype={
KW(d,e,f,g){return this.b8K(0,e,f,g)},
b8K(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$KW=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cKM(g.a)
x=3
return B.d(f.a1(0,$.yO().$1(g.a).gej(),y.K),$async$KW)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Tk(e,u,!1),$async$KW)
case 4:case 1:return B.l(v,w)}})
return B.m($async$KW,w)},
bc(d,e){var x,w,v,u,t,s=y.T,r=e.F(B.cw($.cm(),new A.ccV(),y.B,s),s)
s=e.F($.cLH().$1(new B.XQ(null,4,r)),y.F)
x=s.gu(s)
if(x==null||J.dC(x))return C.ap
s=B.a([],y.G)
for(w=J.c7(x),v=w.gV(x),u=y.D;v.t();){t=v.gE(v)
t=e.F($.yO().$1(t.a),u)
t=t.gu(t)
if(t!=null)s.push(t)}v=B.aF(y.N)
for(w=w.gV(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.R(C.Cb,B.B(B.a([D.bIH,D.bJr,new F.KG(s,new A.ccW(this,d,e,x),v,null)],y.p),C.J,C.j,C.o,0,C.v),null)}}
var z=a.updateTypes(["O9(N)","~(dM)","z(nj)"])
A.cAi.prototype={
$1(d){return d.a===this.a},
$S:473}
A.cAj.prototype={
$1(d){return d.b},
$S:1481}
A.cs3.prototype={
$0(){return this.a.gT().a1(0,$.q1().gaV(),y.I).jE()},
$S:2}
A.crS.prototype={
$1(d){return d.x===C.yv},
$S:52}
A.crT.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bC(0,x==null?d.ch:x)},
$S:148}
A.crU.prototype={
$1(d){return d.x===C.i4},
$S:52}
A.cs2.prototype={
$1(d){return C.f.aZ(C.i.k(B.aM(d)),2,"0")+"/"+C.f.aZ(C.i.k(B.ay(d)),2,"0")},
$S:132}
A.crV.prototype={
$0(){var x=this.a
return x.KL(this.b,x.gT())},
$S:0}
A.crW.prototype={
$0(){var x=this.a
return x.q(new A.crR(x))},
$S:0}
A.crR.prototype={
$0(){return this.a.w=D.zP},
$S:0}
A.crX.prototype={
$0(){var x=this.a
return x.q(new A.crQ(x))},
$S:0}
A.crQ.prototype={
$0(){return this.a.w=D.ac4},
$S:0}
A.crY.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Pl(w,x.gT(),this.b)},
$S:0}
A.crZ.prototype={
$1(d){return d.x===C.i4},
$S:52}
A.cs_.prototype={
$1(d){return d.x===C.i4},
$S:52}
A.cs0.prototype={
$0(){return this.a.gT().a1(0,$.q1().gaV(),y.I).EL(this.b.a)},
$S:0}
A.cs1.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:17}
A.crP.prototype={
$1(d){return D.cjH},
$S:z+0}
A.c50.prototype={
$1(d){var x=this.a
return x.q(new A.c5_(x,d))},
$S:226}
A.c5_.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.c51.prototype={
$1(d){var x=this.a
return x.q(new A.c4Z(x,d))},
$S:101}
A.c4Z.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.c52.prototype={
$0(){var x,w,v,u=this.a
u.q(new A.c4Y(u))
if(u.w!=null)return
x=B.as(this.b,!1)
w=C.f.D(u.d.a.a)
v=C.f.D(u.e.a.a)
if(v.length===0)v=null
x.ak(new A.aHs(w,v,u.f,u.r))},
$S:0}
A.c4Y.prototype={
$0(){var x=this.a
x.w=C.f.D(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.ccV.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:34}
A.ccW.prototype={
$1(d){var x=this
return x.a.KW(0,x.b,x.c,J.cUj(x.d,new A.ccU(d)))},
$S:z+1}
A.ccU.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cKv.prototype={
$1(d){return this.aG0(d)},
aG0(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.T().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").cj(0),$async$$1)
case 7:s=f
r=B.A(y.N,y.c)
for(p=J.at(s),o=y.P;p.t();){q=p.gE(p)
J.b6(r,B.a_(J.h(o.a(q),"id")),B.d0l(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bF0
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
A.cDD.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.i(w.e,x,x,x,x,C.a9p,x,x,x)],v)
w=w.f
if(C.f.D(w==null?"":w).length!==0){w.toString
C.e.p(u,B.a([C.Y,B.i(C.f.D(w),x,x,x,x,D.c1W,x,x,x)],v))}u.push(C.bR)
u.push(B.Dj(D.aCc,D.c85,new A.cDA(d),x))
if(this.b!=null)C.e.p(u,B.a([C.Y,B.iM(Q.a9z,new A.cDB(d),x)],v))
u.push(C.aq)
u.push(B.cr(C.oG,x,x,new A.cDC(d),x,x))
return B.bH(!0,new B.R(C.MK,B.B(u,C.J,C.j,C.P,0,C.v),x),x,C.a0,!0)},
$S:42}
A.cDA.prototype={
$0(){return B.as(this.a,!1).ak("done")},
$S:0}
A.cDB.prototype={
$0(){return B.as(this.a,!1).ak("open")},
$S:0}
A.cDC.prototype={
$0(){return B.as(this.a,!1).bJ()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.cAi,A.cAj,A.crS,A.crU,A.cs2,A.crZ,A.cs_,A.crP,A.c50,A.c51,A.ccV,A.ccW,A.ccU,A.cKv,A.cDD])
w(A.aNX,B.fy)
w(A.a8v,B.dD)
w(A.aNW,B.dv)
x(B.bR,[A.cs3,A.crV,A.crW,A.crR,A.crX,A.crQ,A.crY,A.cs0,A.cs1,A.c5_,A.c4Z,A.c52,A.c4Y,A.cDA,A.cDB,A.cDC])
w(A.crT,B.cS)
w(A.aHs,B.L)
w(A.O9,B.I)
w(A.aHt,B.a1)
w(A.ae7,B.em)})()
B.bx(b.typeUniverse,JSON.parse('{"a8v":{"I":[],"e":[],"f":[]},"O9":{"I":[],"e":[],"f":[]},"aNW":{"a1":["a8v"]},"aHt":{"a1":["O9"]},"ae7":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.x
return{F:x("ax<r<nj>?>"),D:x("ax<dM?>"),R:x("hQ"),e:x("F<a4<c,oy>>"),K:x("F<dM?>"),E:x("t<ed>"),G:x("t<dM>"),s:x("t<c>"),p:x("t<e>"),r:x("a4<c,oy>"),P:x("a4<c,@>"),U:x("er<+(c,c),c>"),w:x("dx"),N:x("c"),I:x("tH"),z:x("r5"),c:x("oy"),B:x("e9"),S:x("nH"),A:x("a3<+(c,c)>"),v:x("aHs"),q:x("dA"),h:x("a4<c,@>?"),X:x("L?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aCc=new B.be(C.df,null,null,null,null,null)
D.aFa=new G.JM(!1,!1,null,null)
D.aFk=new B.i4(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bbL=x([D.aFk],y.p)
D.aFc=new B.Sx(D.bbL,0,null)
D.aFe=new B.i4(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aFl=new B.i4(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aFm=new E.DZ("As vossas tarefas",null,null,null)
D.aFn=new E.DZ("Pr\xf3ximas tarefas",null,null,null)
D.aFp=new E.DZ("Feito",null,null,null)
D.aFE=new B.eq("Nova",C.dg,null)
D.aFQ=new B.lY("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bF0=new B.c0(C.cH,[],B.x("c0<c,oy>"))
D.cci=new B.D("Sugest\xf5es para ti",null,C.bu,null,null,null,null,null,null,null,null)
D.bIH=new B.R(C.bN,D.cci,null)
D.caf=new B.D("Criadas por voc\xeas, sem limite.",null,C.Z,null,null,null,null,null,null,null,null)
D.bIU=new B.R(C.jm,D.caf,null)
D.ass=new B.a0(20,2,20,10)
D.c9a=new B.D("Com base no que tens procurado.",null,C.Z,null,null,null,null,null,null,null,null)
D.bJr=new B.R(D.ass,D.c9a,null)
D.cfS=B.c4("ae7")
D.bT6=new B.fh([D.cfS],B.x("fh<ku>"))
D.c1W=new B.K(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c85=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cjH=new A.O9(null)
D.cjX=new A.ae7(null)
D.zP=new A.aNX(0,"todo")
D.ac4=new A.aNX(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dPx","ddj",()=>B.ey(new A.cKv(),null,!1,null,null,y.r))})()};
(a=>{a["oITm1FCJhU5Ndni1TdvqrXZNnho="]=a.current})($__dart_deferred_initializers__);