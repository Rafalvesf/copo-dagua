((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dIZ(d){var x=B.eL(new B.eq(new B.a6(P.WC,new A.cHV(d),y.A),new A.cHW(),y.U))
return x},
cHV:function cHV(d){this.a=d},
cHW:function cHW(){},
dyD(){return new A.a9K(null)},
aPZ:function aPZ(d,e){this.a=d
this.b=e},
a9K:function a9K(d){this.a=d},
aPY:function aPY(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cAb:function cAb(d){this.a=d},
cA_:function cA_(){},
cA0:function cA0(){},
cA1:function cA1(){},
cAa:function cAa(){},
cA2:function cA2(d,e){this.a=d
this.b=e},
cA3:function cA3(d){this.a=d},
czZ:function czZ(d){this.a=d},
cA4:function cA4(d){this.a=d},
czY:function czY(d){this.a=d},
cA5:function cA5(d,e){this.a=d
this.b=e},
cA6:function cA6(){},
cA7:function cA7(){},
cA8:function cA8(d,e){this.a=d
this.b=e},
cA9:function cA9(d,e){this.a=d
this.b=e},
czX:function czX(){},
aJk:function aJk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OT:function OT(d){this.a=d},
aJl:function aJl(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cb2:function cb2(d){this.a=d},
cb1:function cb1(d,e){this.a=d
this.b=e},
cb3:function cb3(d){this.a=d},
cb0:function cb0(d,e){this.a=d
this.b=e},
cb4:function cb4(d,e){this.a=d
this.b=e},
cb_:function cb_(d){this.a=d},
afw:function afw(d){this.a=d},
cju:function cju(){},
cjv:function cjv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjt:function cjt(d){this.a=d},
dEw(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dIZ(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
dcU(d,e,f){var x,w=B.dA(e,0,null)
if(w.gdh(w)==="/partners"){x=w.gek().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ae(d).ak("/partners",new M.Ll(x,!1),y.X)
return}B.ae(d).ak(e,null,y.X)},
Qa(d,e,f){return A.dLN(d,e,f)},
dLN(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qa=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a_(0,$.zf().gaX(),y.I)
if(!f.ax)j.Np(f.a)
q=f.r
x=q==="parceiros"&&C.f.b1(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a_(0,$.cq(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aUZ(s,p),$async$Qa)
case 11:r=h
if(d.e!=null){p=r.a
B.ae(d).ak("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rF(d,e,p,null,null),$async$Qa)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a_(0,$.dmA().gdH(),y.e),$async$Qa)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dEw(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a99||l==null?18:19
break
case 18:x=20
return B.d(B.bQ(null,new A.cLK(f,l),!1,d,!0,!1,null,y.N),$async$Qa)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EQ(f.a),$async$Qa)
case 24:if(d.e!=null)d.O(y.q).f.a0(B.bY(null,null,null,null,null,C.y,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.dcU(d,l,m)
case 22:x=1
break
case 19:if(q===C.a98)j.W5(f.a)
A.dcU(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qa,w)},
cTk:function cTk(){},
cLK:function cLK(d,e){this.a=d
this.b=e},
cLH:function cLH(d){this.a=d},
cLI:function cLI(d){this.a=d},
cLJ:function cLJ(d){this.a=d},
aUZ(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aUZ=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&B.b()
x=3
return B.d(p.P("proposals").ai(0,"partner_id, partner_profiles(business_name, cover_photo_url)").U("id",e).dO(0),$async$aUZ)
case 3:u=g
p=J.a7(u)
t=B.Y(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.q8(d,t),$async$aUZ)
case 4:r=g
p=s==null
q=B.B(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eB(r,q,t,B.B(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.jW)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aUZ,w)}},D,O,P,H,Q
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
A.aPZ.prototype={
I(){return"_TasksTab."+this.b}}
A.a9K.prototype={
R(){return new A.aPY(D.A9)}}
A.aPY.prototype={
ad(){this.aq()
B.j5(new A.cAb(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().G($.zf(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cA_(),a1))
C.e.cr(e,new A.cA0())
x=f.b
w=x.length+new B.a6(d,new A.cA1(),a1).gA(0)
v=w+e.length
u=new A.cAa()
t=y.p
s=B.a([new B.qL(new A.cA2(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.ej("Por fazer",r===D.A9,w,new A.cA3(h),g),new B.ej("Feito",r===D.acF,e.length,new A.cA4(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.ps(s,g),D.aH2,new K.mb(r,16,!1,g),B.vj(g,g,"O vosso plano",C.hF,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.A9){e=B.a([D.cnj,D.aGD],t)
if(x.length===0)e.push(D.aGt)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.H)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9a?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.B(C.e.gJ(C.f.eW(k,B.aS("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a1(k," \xb7 ")
i=n.ax?g:D.aGR
s.push(new B.im(D.aGr,n.e,k,i,!0,new A.cA5(h,n),!1,g))}e.push(B.eR(s,0))}e.push(D.aGC)
e.push(D.bKJ)
x=B.a([],t)
if(!new B.a6(d,new A.cA6(),a1).gX(0).q())x.push(D.aGu)
else for(d=C.e.gX(d),a0=new B.fz(d,new A.cA7(),a0.i("fz<1>"));a0.q();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.p(u.$1(s))
x.push(new B.im(new G.Km(!1,!1,new A.cA8(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eR(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGz)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.im(N.PH,n.e,new A.cA9(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGB,B.eR(d,0)],t))}return B.cP(g,C.cP,B.nJ(D.bVq,40,q,g,!0,!1),!0,g)},
KV(d,e){return this.bhG(d,e)},
bhG(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$KV=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bQ(null,new A.czX(),!1,d,!0,!0,null,y.g),$async$KV)
case 3:q=g
if(q==null){x=1
break}u=e.a_(0,$.zf().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Md(q.d,s,r,t),$async$KV)
case 4:case 1:return B.l(v,w)}})
return B.m($async$KV,w)}}
A.aJk.prototype={}
A.OT.prototype={
R(){var x=$.aa()
return new A.aJl(new B.aF(C.ak,x),new B.aF(C.ak,x))}}
A.aJl.prototype={
m(){var x=this.d,w=$.aa()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.aT(d,w,y.w).w
return B.dS(B.y(B.a([B.h("Nova tarefa",w,w,w,w,B.ay(d).ok.r,w,w),C.a_,new H.no("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.no("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d3B("Prazo (opcional)",new A.cb2(x),x.f),C.aA,new O.a1h(x.r,new A.cb3(x),w),C.a_,new B.fY("Adicionar",new A.cb4(x,d),!1,w)],y.p),C.E,C.h,C.J),C.y,w,new B.a3(20,20,20,v.f.d+20),w,C.av)}}
A.afw.prototype={
L5(d,e,f,g){return this.b92(0,e,f,g)},
b92(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$L5=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cTB(g.a)
x=3
return B.d(f.a_(0,$.wA().$1(g.a).gdH(),y.B),$async$L5)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Uc(e,u,!1),$async$L5)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L5,w)},
b9(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cB($.cq(),new A.cju(),y.v,s),s)
s=e.G($.cUs().$1(new B.YU(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dg(x))return C.ao
s=B.a([],y.G)
for(w=J.c9(x),v=w.gX(x),u=y.D;v.q();){t=v.gE(v)
t=e.G($.wA().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aL(y.N)
for(w=w.gX(x);w.q();){u=w.gE(w)
if(u.f)v.C(0,u.a)}return new B.S(C.CB,B.y(B.a([D.bKl,D.bKm,new F.Lh(s,new A.cjv(this,d,e,x),v,null)],y.p),C.E,C.h,C.l),null)}}
var z=a.updateTypes(["OT(N)","~(dq)","C(nA)"])
A.cHV.prototype={
$1(d){return d.a===this.a},
$S:337}
A.cHW.prototype={
$1(d){return d.b},
$S:1524}
A.cAb.prototype={
$0(){return this.a.gS().a_(0,$.zf().gaX(),y.I).jy()},
$S:1}
A.cA_.prototype={
$1(d){return d.x===C.yU},
$S:57}
A.cA0.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bA(0,x==null?d.ch:x)},
$S:176}
A.cA1.prototype={
$1(d){return d.x===C.iq},
$S:57}
A.cAa.prototype={
$1(d){return C.f.aT(C.j.k(B.aE(d)),2,"0")+"/"+C.f.aT(C.j.k(B.aw(d)),2,"0")},
$S:129}
A.cA2.prototype={
$0(){var x=this.a
return x.KV(this.b,x.gS())},
$S:0}
A.cA3.prototype={
$0(){var x=this.a
return x.p(new A.czZ(x))},
$S:0}
A.czZ.prototype={
$0(){return this.a.w=D.A9},
$S:0}
A.cA4.prototype={
$0(){var x=this.a
return x.p(new A.czY(x))},
$S:0}
A.czY.prototype={
$0(){return this.a.w=D.acF},
$S:0}
A.cA5.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qa(w,x.gS(),this.b)},
$S:0}
A.cA6.prototype={
$1(d){return d.x===C.iq},
$S:57}
A.cA7.prototype={
$1(d){return d.x===C.iq},
$S:57}
A.cA8.prototype={
$0(){return this.a.gS().a_(0,$.zf().gaX(),y.I).EQ(this.b.a)},
$S:0}
A.cA9.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.p(this.b.$1(v))},
$S:18}
A.czX.prototype={
$1(d){return D.cn3},
$S:z+0}
A.cb2.prototype={
$1(d){var x=this.a
return x.p(new A.cb1(x,d))},
$S:524}
A.cb1.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cb3.prototype={
$1(d){var x=this.a
return x.p(new A.cb0(x,d))},
$S:154}
A.cb0.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cb4.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cb_(u))
if(u.w!=null)return
x=B.al(this.b,!1)
w=C.f.B(u.d.a.a)
v=C.f.B(u.e.a.a)
if(v.length===0)v=null
x.af(new A.aJk(w,v,u.f,u.r))},
$S:0}
A.cb_.prototype={
$0(){var x=this.a
x.w=C.f.B(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cju.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:40}
A.cjv.prototype={
$1(d){var x=this
return x.a.L5(0,x.b,x.c,J.d20(x.d,new A.cjt(d)))},
$S:z+1}
A.cjt.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cTk.prototype={
$1(d){return this.aGy(d)},
aGy(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.P("task_templates").ck(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ao(s),o=y.P;p.q();){q=p.gE(p)
J.b3(r,B.Y(J.i(o.a(q),"id")),B.d9e(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGy
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1525}
A.cLK.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aaf,x,x)],v)
w=w.f
if(C.f.B(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.P,B.h(C.f.B(w),x,x,x,x,D.c4I,x,x)],v))}u.push(C.bO)
u.push(new B.am(B.zY(D.aDn,D.cfI,new A.cLH(d),x),x))
if(this.b!=null)C.e.n(u,B.a([C.P,new B.am(B.hj(Q.aaF,new A.cLI(d),x),x)],v))
u.push(C.ar)
u.push(new B.am(B.cJ(C.mp,x,x,new A.cLJ(d),x,x),x))
return B.bB(!0,new B.S(C.Ne,B.y(u,C.E,C.h,C.J),x),x,C.Z,!0)},
$S:32}
A.cLH.prototype={
$0(){return B.al(this.a,!1).af("done")},
$S:0}
A.cLI.prototype={
$0(){return B.al(this.a,!1).af("open")},
$S:0}
A.cLJ.prototype={
$0(){return B.al(this.a,!1).bk()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bt,[A.cHV,A.cHW,A.cA_,A.cA1,A.cAa,A.cA6,A.cA7,A.czX,A.cb2,A.cb3,A.cju,A.cjv,A.cjt,A.cTk,A.cLK])
w(A.aPZ,B.fg)
w(A.a9K,B.dC)
w(A.aPY,B.dw)
x(B.bL,[A.cAb,A.cA2,A.cA3,A.czZ,A.cA4,A.czY,A.cA5,A.cA8,A.cA9,A.cb1,A.cb0,A.cb4,A.cb_,A.cLH,A.cLI,A.cLJ])
w(A.cA0,B.cK)
w(A.aJk,B.M)
w(A.OT,B.G)
w(A.aJl,B.a_)
w(A.afw,B.ew)})()
B.bq(b.typeUniverse,JSON.parse('{"a9K":{"G":[],"e":[],"f":[]},"OT":{"G":[],"e":[],"f":[]},"aPY":{"a_":["a9K"]},"aJl":{"a_":["OT"]},"afw":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.z
return{F:x("ax<t<nA>?>"),D:x("ax<dq?>"),R:x("eB"),v:x("ec"),Z:x("nz"),e:x("F<a5<c,oP>>"),B:x("F<dq?>"),E:x("r<ej>"),G:x("r<dq>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oP>"),P:x("a5<c,@>"),U:x("eq<+(c,c),c>"),w:x("dt"),N:x("c"),I:x("tY"),z:x("Br"),c:x("oP"),A:x("a6<+(c,c)>"),g:x("aJk"),q:x("dl"),h:x("a5<c,@>?"),X:x("M?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDn=new B.b8(C.dn,null,null,null,null,null)
D.aGr=new G.Km(!1,!1,null,null)
D.aGy=new B.im(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bda=x([D.aGy],y.p)
D.aGt=new B.Tl(D.bda,0,null)
D.aGu=new B.im(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGz=new B.im(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGB=new E.Eq("Feito",null)
D.aGC=new E.Eq("As vossas tarefas",null)
D.aGD=new E.Eq("Pr\xf3ximas tarefas",null)
D.aGR=new B.dU("Nova",C.cU,null)
D.aH2=new B.lf("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGy=new B.c6(C.cI,[],B.z("c6<c,oP>"))
D.caj=new B.D("Sugest\xf5es para ti",null,C.bi,null,null,null,null,null,null,null)
D.bKl=new B.S(C.bG,D.caj,null)
D.ata=new B.a3(20,2,20,10)
D.c7n=new B.D("Com base no que tens procurado.",null,C.L,null,null,null,null,null,null,null)
D.bKm=new B.S(D.ata,D.c7n,null)
D.cbe=new B.D("Criadas por voc\xeas, sem limite.",null,C.L,null,null,null,null,null,null,null)
D.bKJ=new B.S(C.jB,D.cbe,null)
D.cj8=B.ca("afw")
D.bVq=new B.fn([D.cj8],B.z("fn<kZ>"))
D.c4I=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cfI=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null)
D.cn3=new A.OT(null)
D.cnj=new A.afw(null)
D.A9=new A.aPZ(0,"todo")
D.acF=new A.aPZ(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_b","dmA",()=>B.ez(new A.cTk(),null,!1,null,null,y.r))})()};
(a=>{a["0mAmTgMiqo8+AZFQ5kYLAkdj2ug="]=a.current})($__dart_deferred_initializers__);