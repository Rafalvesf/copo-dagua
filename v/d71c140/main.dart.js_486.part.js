((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dFl(d){var x=B.eV(new B.et(new B.a6(P.Xn,new A.cFh(d),y.A),new A.cFi(),y.U))
return x},
cFh:function cFh(d){this.a=d},
cFi:function cFi(){},
dv2(){return new A.a9I(null)},
aQ6:function aQ6(d,e){this.a=d
this.b=e},
a9I:function a9I(d){this.a=d},
aQ5:function aQ5(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cxj:function cxj(d){this.a=d},
cx7:function cx7(){},
cx8:function cx8(){},
cx9:function cx9(){},
cxi:function cxi(){},
cxa:function cxa(d,e){this.a=d
this.b=e},
cxb:function cxb(d){this.a=d},
cx6:function cx6(d){this.a=d},
cxc:function cxc(d){this.a=d},
cx5:function cx5(d){this.a=d},
cxd:function cxd(d,e){this.a=d
this.b=e},
cxe:function cxe(){},
cxf:function cxf(){},
cxg:function cxg(d,e){this.a=d
this.b=e},
cxh:function cxh(d,e){this.a=d
this.b=e},
cx4:function cx4(){},
aJs:function aJs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OK:function OK(d){this.a=d},
aJt:function aJt(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
c9z:function c9z(d){this.a=d},
c9y:function c9y(d,e){this.a=d
this.b=e},
c9A:function c9A(d){this.a=d},
c9x:function c9x(d,e){this.a=d
this.b=e},
c9B:function c9B(d,e){this.a=d
this.b=e},
c9w:function c9w(d){this.a=d},
afB:function afB(d){this.a=d},
chD:function chD(){},
chE:function chE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
chC:function chC(d){this.a=d},
dAZ(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dFl(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
d9C(d,e,f){var x,w=B.dt(e,0,null)
if(w.gdm(w)==="/partners"){x=w.gel().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ai(d).ap("/partners",new M.Li(x,!1),y.X)
return}B.ai(d).ap(e,null,y.X)},
PZ(d,e,f){return A.dI5(d,e,f)},
dI5(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$PZ=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a0(0,$.qg().gaW(),y.I)
if(!f.ax)j.NO(f.a)
q=f.r
x=q==="parceiros"&&C.f.b4(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a0(0,$.cl(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aV2(s,p),$async$PZ)
case 11:r=h
if(d.e!=null){p=r.a
B.ai(d).ap("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rF(d,e,p,null,null),$async$PZ)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a0(0,$.dj7().gei(),y.e),$async$PZ)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dAZ(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9O||l==null?18:19
break
case 18:x=20
return B.d(B.cc(null,new A.cIT(f,l),!1,d,!0,!1,null,y.N),$async$PZ)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EZ(f.a),$async$PZ)
case 24:if(d.e!=null)d.O(y.q).f.a4(B.cB(null,null,null,null,null,C.z,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.d9C(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9N)j.W8(f.a)
A.d9C(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$PZ,w)},
cQ6:function cQ6(){},
cIT:function cIT(d,e){this.a=d
this.b=e},
cIQ:function cIQ(d){this.a=d},
cIR:function cIR(d){this.a=d},
cIS:function cIS(d){this.a=d},
aV2(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aV2=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.S().b
p===$&&B.b()
x=3
return B.d(p.R("proposals").az(0,"partner_id, partner_profiles(business_name, cover_photo_url)").X("id",e).dP(0),$async$aV2)
case 3:u=g
p=J.a7(u)
t=B.a2(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.rC(d,t),$async$aV2)
case 4:r=g
p=s==null
q=B.E(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.hV(r,q,B.E(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aV2,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[138]
I=c[162]
E=c[166]
K=c[186]
L=c[120]
M=c[133]
G=c[87]
N=c[248]
A=a.updateHolder(c[52],A)
D=c[405]
O=c[80]
P=c[406]
H=c[170]
Q=c[334]
A.aQ6.prototype={
I(){return"_TasksTab."+this.b}}
A.a9I.prototype={
P(){return new A.aQ5(D.Ap)}}
A.aQ5.prototype={
ak(){this.aD()
B.jg(new A.cxj(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().H($.qg(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cx7(),a1))
C.e.cP(e,new A.cx8())
x=f.b
w=x.length+new B.a6(d,new A.cx9(),a1).gA(0)
v=w+e.length
u=new A.cxi()
t=y.p
s=B.a([new B.qP(new A.cxa(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ek("Por fazer",r===D.Ap,w,new A.cxb(h),g),new B.ek("Feito",r===D.adC,e.length,new A.cxc(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.po(s,g),D.aI4,new K.m4(r,16,!1,g),B.ve(g,g,"O vosso plano",C.hG,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ap){e=B.a([D.coS,D.aHB],t)
if(x.length===0)e.push(D.aHq)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.J)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9P?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.C(C.e.gM(C.f.f4(k,B.aV("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a2(k," \xb7 ")
i=n.ax?g:D.aHT
s.push(new B.i9(D.aHo,n.e,k,i,!0,new A.cxd(h,n),!1,g))}e.push(B.fb(s,0))}e.push(D.aHA)
e.push(D.bLS)
x=B.a([],t)
if(!new B.a6(d,new A.cxe(),a1).gV(0).t())x.push(D.aHs)
else for(d=C.e.gV(d),a0=new B.h6(d,new A.cxf(),a0.i("h6<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i9(new G.Kj(!1,!1,new A.cxg(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.fb(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aHz)
else for(o=0;o<e.length;e.length===a0||(0,B.J)(e),++o){n=e[o]
d.push(new B.i9(N.Ql,n.e,new A.cxh(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aHD,B.fb(d,0)],t))}return B.cO(g,C.cT,B.oo(D.bWD,40,q,g,!0,!1),!0,g)},
L6(d,e){return this.biN(d,e)},
biN(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$L6=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.cc(null,new A.cx4(),!1,d,!0,!0,null,y.g),$async$L6)
case 3:q=g
if(q==null){x=1
break}u=e.a0(0,$.qg().gaW(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mm(q.d,s,r,t),$async$L6)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L6,w)}}
A.aJs.prototype={}
A.OK.prototype={
P(){var x=$.ad()
return new A.aJt(new B.aJ(C.ap,x),new B.aJ(C.ap,x))}}
A.aJt.prototype={
m(){var x=this.d,w=$.ad()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.dO(B.B(B.a([B.h("Nova tarefa",w,w,w,w,B.as(d).ok.r,w,w,w),C.a1,new H.mx("T\xedtulo",x.d,x.w,w,w,w),C.Q,new H.mx("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.Q,L.d0n("Prazo (opcional)",new A.c9z(x),x.f),C.aC,new O.a1c(x.r,new A.c9A(x),w),C.a1,new B.fT("Adicionar",new A.c9B(x,d),!1,w)],y.p),C.I,C.i,C.K,0,C.v),C.z,w,new B.a0(20,20,20,v.f.d+20),w,w,C.a2)}}
A.afB.prototype={
Lh(d,e,f,g){return this.bal(0,e,f,g)},
bal(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Lh=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cQn(g.a)
x=3
return B.d(f.a0(0,$.zi().$1(g.a).gei(),y.B),$async$Lh)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.U1(e,u,!1),$async$Lh)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lh,w)},
bc(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cw($.cl(),new A.chD(),y.v,s),s)
s=e.H($.cRe().$1(new B.YM(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dn(x))return C.ar
s=B.a([],y.G)
for(w=J.c5(x),v=w.gV(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.zi().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aH(y.N)
for(w=w.gV(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.Q(C.CV,B.B(B.a([D.bLE,D.bMt,new F.Lg(s,new A.chE(this,d,e,x),v,null)],y.p),C.I,C.i,C.m,0,C.v),null)}}
var z=a.updateTypes(["OK(O)","~(dT)","x(nx)"])
A.cFh.prototype={
$1(d){return d.a===this.a},
$S:464}
A.cFi.prototype={
$1(d){return d.b},
$S:1511}
A.cxj.prototype={
$0(){return this.a.gS().a0(0,$.qg().gaW(),y.I).jH()},
$S:1}
A.cx7.prototype={
$1(d){return d.x===C.z7},
$S:61}
A.cx8.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bE(0,x==null?d.ch:x)},
$S:169}
A.cx9.prototype={
$1(d){return d.x===C.ih},
$S:61}
A.cxi.prototype={
$1(d){return C.f.aX(C.j.k(B.aK(d)),2,"0")+"/"+C.f.aX(C.j.k(B.ax(d)),2,"0")},
$S:148}
A.cxa.prototype={
$0(){var x=this.a
return x.L6(this.b,x.gS())},
$S:0}
A.cxb.prototype={
$0(){var x=this.a
return x.q(new A.cx6(x))},
$S:0}
A.cx6.prototype={
$0(){return this.a.w=D.Ap},
$S:0}
A.cxc.prototype={
$0(){var x=this.a
return x.q(new A.cx5(x))},
$S:0}
A.cx5.prototype={
$0(){return this.a.w=D.adC},
$S:0}
A.cxd.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.PZ(w,x.gS(),this.b)},
$S:0}
A.cxe.prototype={
$1(d){return d.x===C.ih},
$S:61}
A.cxf.prototype={
$1(d){return d.x===C.ih},
$S:61}
A.cxg.prototype={
$0(){return this.a.gS().a0(0,$.qg().gaW(),y.I).EZ(this.b.a)},
$S:0}
A.cxh.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:17}
A.cx4.prototype={
$1(d){return D.coB},
$S:z+0}
A.c9z.prototype={
$1(d){var x=this.a
return x.q(new A.c9y(x,d))},
$S:504}
A.c9y.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.c9A.prototype={
$1(d){var x=this.a
return x.q(new A.c9x(x,d))},
$S:99}
A.c9x.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.c9B.prototype={
$0(){var x,w,v,u=this.a
u.q(new A.c9w(u))
if(u.w!=null)return
x=B.an(this.b,!1)
w=C.f.C(u.d.a.a)
v=C.f.C(u.e.a.a)
if(v.length===0)v=null
x.aj(new A.aJs(w,v,u.f,u.r))},
$S:0}
A.c9w.prototype={
$0(){var x=this.a
x.w=C.f.C(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.chD.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:36}
A.chE.prototype={
$1(d){var x=this
return x.a.Lh(0,x.b,x.c,J.cZM(x.d,new A.chC(d)))},
$S:z+1}
A.chC.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cQ6.prototype={
$1(d){return this.aH1(d)},
aH1(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.S().b
p===$&&B.b()
x=7
return B.d(p.R("task_templates").cj(0),$async$$1)
case 7:s=f
r=B.D(y.N,y.c)
for(p=J.aq(s),o=y.P;p.t();){q=p.gE(p)
J.b6(r,B.a2(J.i(o.a(q),"id")),B.d5Z(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bHF
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1512}
A.cIT.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aaU,x,x,x)],v)
w=w.f
if(C.f.C(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.X,B.h(C.f.C(w),x,x,x,x,D.c6a,x,x,x)],v))}u.push(C.br)
u.push(B.DM(D.aEk,D.ccu,new A.cIQ(d),x))
if(this.b!=null)C.e.n(u,B.a([C.X,B.hs(Q.ab4,new A.cIR(d),x)],v))
u.push(C.as)
u.push(B.cu(C.mw,x,x,new A.cIS(d),x,x))
return B.bC(!0,new B.Q(C.NT,B.B(u,C.I,C.i,C.K,0,C.v),x),x,C.Z,!0)},
$S:46}
A.cIQ.prototype={
$0(){return B.an(this.a,!1).aj("done")},
$S:0}
A.cIR.prototype={
$0(){return B.an(this.a,!1).aj("open")},
$S:0}
A.cIS.prototype={
$0(){return B.an(this.a,!1).bB()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.cFh,A.cFi,A.cx7,A.cx9,A.cxi,A.cxe,A.cxf,A.cx4,A.c9z,A.c9A,A.chD,A.chE,A.chC,A.cQ6,A.cIT])
w(A.aQ6,B.f6)
w(A.a9I,B.dB)
w(A.aQ5,B.dx)
x(B.bS,[A.cxj,A.cxa,A.cxb,A.cx6,A.cxc,A.cx5,A.cxd,A.cxg,A.cxh,A.c9y,A.c9x,A.c9B,A.c9w,A.cIQ,A.cIR,A.cIS])
w(A.cx8,B.cQ)
w(A.aJs,B.K)
w(A.OK,B.G)
w(A.aJt,B.a_)
w(A.afB,B.ep)})()
B.bp(b.typeUniverse,JSON.parse('{"a9I":{"G":[],"e":[],"f":[]},"OK":{"G":[],"e":[],"f":[]},"aQ5":{"a_":["a9I"]},"aJt":{"a_":["OK"]},"afB":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ay<t<nx>?>"),D:x("ay<dT?>"),R:x("hV"),v:x("ee"),Z:x("nv"),e:x("F<a5<c,oO>>"),B:x("F<dT?>"),E:x("r<ek>"),G:x("r<dT>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oO>"),P:x("a5<c,@>"),U:x("et<+(c,c),c>"),w:x("dg"),N:x("c"),I:x("tY"),z:x("rl"),c:x("oO"),A:x("a6<+(c,c)>"),g:x("aJs"),q:x("du"),h:x("a5<c,@>?"),X:x("K?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aEk=new B.ba(C.dm,null,null,null,null,null)
D.aHo=new G.Kj(!1,!1,null,null)
D.aHy=new B.i9(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bea=x([D.aHy],y.p)
D.aHq=new B.Td(D.bea,0,null)
D.aHs=new B.i9(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aHz=new B.i9(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aHA=new E.Es("As vossas tarefas",null,null,null)
D.aHB=new E.Es("Pr\xf3ximas tarefas",null,null,null)
D.aHD=new E.Es("Feito",null,null,null)
D.aHT=new B.ew("Nova",C.db,null)
D.aI4=new B.m5("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bHF=new B.c1(C.cI,[],B.w("c1<c,oO>"))
D.cgZ=new B.C("Sugest\xf5es para ti",null,C.bl,null,null,null,null,null,null,null,null)
D.bLE=new B.Q(C.bO,D.cgZ,null)
D.ceR=new B.C("Criadas por voc\xeas, sem limite.",null,C.R,null,null,null,null,null,null,null,null)
D.bLS=new B.Q(C.jy,D.ceR,null)
D.auh=new B.a0(20,2,20,10)
D.cdK=new B.C("Com base no que tens procurado.",null,C.R,null,null,null,null,null,null,null,null)
D.bMt=new B.Q(D.auh,D.cdK,null)
D.ckH=B.c9("afB")
D.bWD=new B.fn([D.ckH],B.w("fn<ky>"))
D.c6a=new B.N(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccu=new B.C("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.coB=new A.OK(null)
D.coS=new A.afB(null)
D.Ap=new A.aQ6(0,"todo")
D.adC=new A.aQ6(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dWg","dj7",()=>B.eF(new A.cQ6(),null,!1,null,null,y.r))})()};
(a=>{a["CY0aZnWg3o6OIclzTTvUlC9RE90="]=a.current})($__dart_deferred_initializers__);