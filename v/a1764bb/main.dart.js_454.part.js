((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dz9(d){var x=B.eS(new B.es(new B.a3(P.Wa,new A.cAr(d),y.A),new A.cAs(),y.U))
return x},
cAr:function cAr(d){this.a=d},
cAs:function cAs(){},
doX(){return new A.a8y(null)},
aNY:function aNY(d,e){this.a=d
this.b=e},
a8y:function a8y(d){this.a=d},
aNX:function aNX(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
csc:function csc(d){this.a=d},
cs0:function cs0(){},
cs1:function cs1(){},
cs2:function cs2(){},
csb:function csb(){},
cs3:function cs3(d,e){this.a=d
this.b=e},
cs4:function cs4(d){this.a=d},
cs_:function cs_(d){this.a=d},
cs5:function cs5(d){this.a=d},
crZ:function crZ(d){this.a=d},
cs6:function cs6(d,e){this.a=d
this.b=e},
cs7:function cs7(){},
cs8:function cs8(){},
cs9:function cs9(d,e){this.a=d
this.b=e},
csa:function csa(d,e){this.a=d
this.b=e},
crY:function crY(){},
aHs:function aHs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Oa:function Oa(d){this.a=d},
aHt:function aHt(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
c59:function c59(d){this.a=d},
c58:function c58(d,e){this.a=d
this.b=e},
c5a:function c5a(d){this.a=d},
c57:function c57(d,e){this.a=d
this.b=e},
c5b:function c5b(d,e){this.a=d
this.b=e},
c56:function c56(d){this.a=d},
aea:function aea(d){this.a=d},
cd3:function cd3(){},
cd4:function cd4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cd2:function cd2(d){this.a=d},
duO(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dz9(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
d4a(d,e,f){var x,w=B.dn(e,0,null)
if(w.gdl(w)==="/partners"){x=w.geh().h(0,"category")
if(x==null)x=f==null?null:f.w
B.aj(d).az("/partners",new M.KJ(x,!1),y.X)
return}B.aj(d).az(e,null,y.X)},
Pm(d,e,f){return A.dBL(d,e,f)},
dBL(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Pm=B.j(function(g,h){if(g===1){t.push(h)
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
return B.d(A.aSL(p,s),$async$Pm)
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
return B.d(B.rm(d,e,p,null,null),$async$Pm)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a1(0,$.ddt().gej(),y.e),$async$Pm)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=A.duO(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a8l||l==null?18:19
break
case 18:x=20
return B.d(B.ck(null,new A.cDM(f,l),!1,d,!0,!1,null,y.N),$async$Pm)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EL(f.a),$async$Pm)
case 24:if(d.e!=null)d.O(y.q).f.a4(B.cz(null,null,null,null,null,C.z,null,B.i('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.W,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.d4a(d,l,m)
case 22:x=1
break
case 19:if(q===C.a8k)j.VD(f.a)
A.d4a(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Pm,w)},
cKE:function cKE(){},
cDM:function cDM(d,e){this.a=d
this.b=e},
cDJ:function cDJ(d){this.a=d},
cDK:function cDK(d){this.a=d},
cDL:function cDL(d){this.a=d},
aSL(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aSL=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").aw(0,"partner_id, partner_profiles(business_name, cover_photo_url)").W("id",d).dN(0),$async$aSL)
case 3:u=g
p=J.a7(u)
t=B.a_(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.ue(t,e),$async$aSL)
case 4:r=g
p=s==null
q=B.J(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.hQ(r,q,B.J(p?null:J.h(s,"cover_photo_url")),e,t,null,null,0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aSL,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[130]
I=c[153]
E=c[156]
K=c[175]
L=c[126]
M=c[127]
G=c[83]
N=c[234]
A=a.updateHolder(c[50],A)
D=c[374]
O=c[75]
P=c[375]
H=c[169]
Q=c[292]
A.aNY.prototype={
I(){return"_TasksTab."+this.b}}
A.a8y.prototype={
R(){return new A.aNX(D.zO)}}
A.aNX.prototype={
am(){this.aJ()
B.jd(new A.csc(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gT().G($.q1(),y.z),e=B.W(f.c,y.S),d=f.d,a0=B.a8(d),a1=a0.i("a3<1>")
C.e.p(e,new B.a3(d,new A.cs0(),a1))
C.e.cO(e,new A.cs1())
x=f.b
w=x.length+new B.a3(d,new A.cs2(),a1).gA(0)
v=w+e.length
u=new A.csb()
t=y.p
s=B.a([new B.qy(new A.cs3(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ee("Por fazer",r===D.zO,w,new A.cs4(h),g),new B.ee("Feito",r===D.ac4,e.length,new A.cs5(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.p9(s,g),D.aFT,new K.lY(r,16,!1,g),B.v_(g,g,"O vosso plano",C.hs,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.zO){e=B.a([D.ck0,D.aFp],t)
if(x.length===0)e.push(D.aFe)
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
i=n.ax?g:D.aFH
s.push(new B.i4(D.aFc,n.e,k,i,!0,new A.cs6(h,n),!1,g))}e.push(B.f4(s,0))}e.push(D.aFo)
e.push(D.bIZ)
x=B.a([],t)
if(!new B.a3(d,new A.cs7(),a1).gV(0).t())x.push(D.aFg)
else for(d=C.e.gV(d),a0=new B.hr(d,new A.cs8(),a0.i("hr<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i4(new G.JN(!1,!1,new A.cs9(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.f4(x,0))
C.e.p(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aFn)
else for(o=0;o<e.length;e.length===a0||(0,B.G)(e),++o){n=e[o]
d.push(new B.i4(N.Pc,n.e,new A.csa(n,u).$0(),g,!1,g,!0,g))}C.e.p(q,B.a([D.aFr,B.f4(d,0)],t))}return B.cP(g,C.cO,B.ob(D.bTc,40,q,g,!0,!1),!0,g)},
KL(d,e){return this.bgW(d,e)},
bgW(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$KL=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.ck(null,new A.crY(),!1,d,!0,!0,null,y.v),$async$KL)
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
A.Oa.prototype={
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
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.e4(B.C(B.a([B.i("Nova tarefa",w,w,w,w,B.aq(d).ok.r,w,w,w),C.a4,new H.jK("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.jK("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.cN0("Prazo (opcional)",new A.c59(x),x.f),C.aB,new O.a0g(x.r,new A.c5a(x),w),C.a4,new B.fD("Adicionar",new A.c5b(x,d),!1,w)],y.p),C.J,C.j,C.P,0,C.v),C.z,w,new B.a0(20,20,20,v.f.d+20),w,C.a3)}}
A.aea.prototype={
KW(d,e,f,g){return this.b8K(0,e,f,g)},
b8K(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$KW=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cKV(g.a)
x=3
return B.d(f.a1(0,$.yQ().$1(g.a).gej(),y.K),$async$KW)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Tn(e,u,!1),$async$KW)
case 4:case 1:return B.l(v,w)}})
return B.m($async$KW,w)},
bc(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cw($.cm(),new A.cd3(),y.B,s),s)
s=e.G($.cLQ().$1(new B.XT(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dC(x))return C.aq
s=B.a([],y.G)
for(w=J.c9(x),v=w.gV(x),u=y.D;v.t();){t=v.gE(v)
t=e.G($.yQ().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aF(y.N)
for(w=w.gV(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.S(C.Ca,B.C(B.a([D.bIM,D.bJw,new F.KH(s,new A.cd4(this,d,e,x),v,null)],y.p),C.J,C.j,C.p,0,C.v),null)}}
var z=a.updateTypes(["Oa(N)","~(dN)","z(nj)"])
A.cAr.prototype={
$1(d){return d.a===this.a},
$S:473}
A.cAs.prototype={
$1(d){return d.b},
$S:1481}
A.csc.prototype={
$0(){return this.a.gT().a1(0,$.q1().gaV(),y.I).jE()},
$S:2}
A.cs0.prototype={
$1(d){return d.x===C.yv},
$S:52}
A.cs1.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bC(0,x==null?d.ch:x)},
$S:149}
A.cs2.prototype={
$1(d){return d.x===C.i4},
$S:52}
A.csb.prototype={
$1(d){return C.f.aZ(C.i.k(B.aN(d)),2,"0")+"/"+C.f.aZ(C.i.k(B.ay(d)),2,"0")},
$S:132}
A.cs3.prototype={
$0(){var x=this.a
return x.KL(this.b,x.gT())},
$S:0}
A.cs4.prototype={
$0(){var x=this.a
return x.q(new A.cs_(x))},
$S:0}
A.cs_.prototype={
$0(){return this.a.w=D.zO},
$S:0}
A.cs5.prototype={
$0(){var x=this.a
return x.q(new A.crZ(x))},
$S:0}
A.crZ.prototype={
$0(){return this.a.w=D.ac4},
$S:0}
A.cs6.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Pm(w,x.gT(),this.b)},
$S:0}
A.cs7.prototype={
$1(d){return d.x===C.i4},
$S:52}
A.cs8.prototype={
$1(d){return d.x===C.i4},
$S:52}
A.cs9.prototype={
$0(){return this.a.gT().a1(0,$.q1().gaV(),y.I).EL(this.b.a)},
$S:0}
A.csa.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:17}
A.crY.prototype={
$1(d){return D.cjL},
$S:z+0}
A.c59.prototype={
$1(d){var x=this.a
return x.q(new A.c58(x,d))},
$S:226}
A.c58.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.c5a.prototype={
$1(d){var x=this.a
return x.q(new A.c57(x,d))},
$S:101}
A.c57.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.c5b.prototype={
$0(){var x,w,v,u=this.a
u.q(new A.c56(u))
if(u.w!=null)return
x=B.as(this.b,!1)
w=C.f.D(u.d.a.a)
v=C.f.D(u.e.a.a)
if(v.length===0)v=null
x.ak(new A.aHs(w,v,u.f,u.r))},
$S:0}
A.c56.prototype={
$0(){var x=this.a
x.w=C.f.D(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cd3.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:34}
A.cd4.prototype={
$1(d){var x=this
return x.a.KW(0,x.b,x.c,J.cUs(x.d,new A.cd2(d)))},
$S:z+1}
A.cd2.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cKE.prototype={
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
J.b6(r,B.a_(J.h(o.a(q),"id")),B.d0v(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bF4
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
A.cDM.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.i(w.e,x,x,x,x,C.a9p,x,x,x)],v)
w=w.f
if(C.f.D(w==null?"":w).length!==0){w.toString
C.e.p(u,B.a([C.Z,B.i(C.f.D(w),x,x,x,x,D.c21,x,x,x)],v))}u.push(C.bR)
u.push(B.Dl(D.aCe,D.c8c,new A.cDJ(d),x))
if(this.b!=null)C.e.p(u,B.a([C.Z,B.iM(Q.a9z,new A.cDK(d),x)],v))
u.push(C.ar)
u.push(B.cr(C.oG,x,x,new A.cDL(d),x,x))
return B.bH(!0,new B.S(C.MK,B.C(u,C.J,C.j,C.P,0,C.v),x),x,C.a0,!0)},
$S:42}
A.cDJ.prototype={
$0(){return B.as(this.a,!1).ak("done")},
$S:0}
A.cDK.prototype={
$0(){return B.as(this.a,!1).ak("open")},
$S:0}
A.cDL.prototype={
$0(){return B.as(this.a,!1).bJ()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cAr,A.cAs,A.cs0,A.cs2,A.csb,A.cs7,A.cs8,A.crY,A.c59,A.c5a,A.cd3,A.cd4,A.cd2,A.cKE,A.cDM])
w(A.aNY,B.fx)
w(A.a8y,B.dD)
w(A.aNX,B.dv)
x(B.bR,[A.csc,A.cs3,A.cs4,A.cs_,A.cs5,A.crZ,A.cs6,A.cs9,A.csa,A.c58,A.c57,A.c5b,A.c56,A.cDJ,A.cDK,A.cDL])
w(A.cs1,B.cT)
w(A.aHs,B.L)
w(A.Oa,B.I)
w(A.aHt,B.a1)
w(A.aea,B.eo)})()
B.bw(b.typeUniverse,JSON.parse('{"a8y":{"I":[],"e":[],"f":[]},"Oa":{"I":[],"e":[],"f":[]},"aNX":{"a1":["a8y"]},"aHt":{"a1":["Oa"]},"aea":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.x
return{F:x("ax<r<nj>?>"),D:x("ax<dN?>"),R:x("hQ"),e:x("F<a5<c,oy>>"),K:x("F<dN?>"),E:x("t<ee>"),G:x("t<dN>"),s:x("t<c>"),p:x("t<e>"),r:x("a5<c,oy>"),P:x("a5<c,@>"),U:x("es<+(c,c),c>"),w:x("dx"),N:x("c"),I:x("tH"),z:x("r5"),c:x("oy"),B:x("ea"),S:x("nH"),A:x("a3<+(c,c)>"),v:x("aHs"),q:x("dA"),h:x("a5<c,@>?"),X:x("L?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aCe=new B.be(C.dg,null,null,null,null,null)
D.aFc=new G.JN(!1,!1,null,null)
D.aFm=new B.i4(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bbO=x([D.aFm],y.p)
D.aFe=new B.SA(D.bbO,0,null)
D.aFg=new B.i4(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aFn=new B.i4(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aFo=new E.E0("As vossas tarefas",null,null,null)
D.aFp=new E.E0("Pr\xf3ximas tarefas",null,null,null)
D.aFr=new E.E0("Feito",null,null,null)
D.aFH=new B.ep("Nova",C.d7,null)
D.aFT=new B.lZ("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bF4=new B.c0(C.cH,[],B.x("c0<c,oy>"))
D.ccm=new B.D("Sugest\xf5es para ti",null,C.by,null,null,null,null,null,null,null,null)
D.bIM=new B.S(C.bN,D.ccm,null)
D.cal=new B.D("Criadas por voc\xeas, sem limite.",null,C.Y,null,null,null,null,null,null,null,null)
D.bIZ=new B.S(C.jl,D.cal,null)
D.ass=new B.a0(20,2,20,10)
D.c9g=new B.D("Com base no que tens procurado.",null,C.Y,null,null,null,null,null,null,null,null)
D.bJw=new B.S(D.ass,D.c9g,null)
D.cfW=B.c5("aea")
D.bTc=new B.fg([D.cfW],B.x("fg<kv>"))
D.c21=new B.M(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c8c=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cjL=new A.Oa(null)
D.ck0=new A.aea(null)
D.zO=new A.aNY(0,"todo")
D.ac4=new A.aNY(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dPI","ddt",()=>B.ez(new A.cKE(),null,!1,null,null,y.r))})()};
(a=>{a["n6+e+3NvgCYaVNq1+KXz1wm/Bxk="]=a.current})($__dart_deferred_initializers__);