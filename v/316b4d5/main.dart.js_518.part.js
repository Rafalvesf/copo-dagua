((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,G,L,M,N,H,O,A={
dJN(d){var x=B.f9(new B.eA(new B.a7(Q.WS,new A.cI_(d),y.A),new A.cI0(),y.U))
return x},
cI_:function cI_(d){this.a=d},
cI0:function cI0(){},
dzn(){return new A.aag(null)},
aQW:function aQW(d,e){this.a=d
this.b=e},
aag:function aag(d){this.a=d},
aQV:function aQV(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
czZ:function czZ(d){this.a=d},
czN:function czN(){},
czO:function czO(){},
czP:function czP(){},
czY:function czY(){},
czQ:function czQ(d,e){this.a=d
this.b=e},
czR:function czR(d){this.a=d},
czM:function czM(d){this.a=d},
czS:function czS(d){this.a=d},
czL:function czL(d){this.a=d},
czT:function czT(d,e){this.a=d
this.b=e},
czU:function czU(){},
czV:function czV(){},
czW:function czW(d,e){this.a=d
this.b=e},
czX:function czX(d,e){this.a=d
this.b=e},
czK:function czK(){},
aKh:function aKh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
P6:function P6(d){this.a=d},
aKi:function aKi(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cc6:function cc6(d){this.a=d},
cc5:function cc5(d,e){this.a=d
this.b=e},
cc7:function cc7(d){this.a=d},
cc4:function cc4(d,e){this.a=d
this.b=e},
cc8:function cc8(d,e){this.a=d
this.b=e},
cc3:function cc3(d){this.a=d},
agb:function agb(d){this.a=d},
cjZ:function cjZ(){},
ck_:function ck_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjY:function cjY(d){this.a=d},
dFh(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dJN(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
ddz(d,e,f){var x,w=B.dA(e,0,null)
if(w.gdd(w)==="/partners"){x=w.gem().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ae(d).ag("/partners",new M.Lw(x,!1),y.X)
return}B.ae(d).ag(e,null,y.X)},
Qr(d,e,f){return A.dMC(d,e,f)},
dMC(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qr=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a0(0,$.zm().gb1(),y.I)
if(!f.ax)j.NA(f.a)
q=f.r
x=q==="parceiros"&&C.f.b2(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a0(0,$.cp(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aVZ(s,p),$async$Qr)
case 11:r=h
if(d.e!=null){p=r.a
B.ae(d).ag("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rF(d,e,p,null,null,null),$async$Qr)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a0(0,$.dnl().gdO(),y.e),$async$Qr)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dFh(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9q||l==null?18:19
break
case 18:x=20
return B.d(B.bR(null,new A.cLV(f,l),!1,d,!0,!1,null,y.N),$async$Qr)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EV(f.a),$async$Qr)
case 24:if(d.e!=null)d.O(y.q).f.a4(B.c7(null,null,null,null,null,C.x,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.ddz(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9p)j.Wf(f.a)
A.ddz(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qr,w)},
cTM:function cTM(){},
cLV:function cLV(d,e){this.a=d
this.b=e},
cLS:function cLS(d){this.a=d},
cLT:function cLT(d){this.a=d},
cLU:function cLU(d){this.a=d},
aVZ(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVZ=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&B.b()
x=3
return B.d(p.R("proposals").al(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",e).e9(0),$async$aVZ)
case 3:u=g
p=J.a6(u)
t=B.a0(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qb(d,t),$async$aVZ)
case 4:r=g
p=s==null
q=B.y(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eD(r,q,t,B.y(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.j1)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVZ,w)}},D,P,Q
J=c[1]
B=c[0]
C=c[2]
F=c[139]
I=c[166]
E=c[149]
K=c[183]
G=c[158]
L=c[124]
M=c[136]
N=c[339]
H=c[85]
O=c[251]
A=a.updateHolder(c[52],A)
D=c[409]
P=c[78]
Q=c[410]
A.aQW.prototype={
I(){return"_TasksTab."+this.b}}
A.aag.prototype={
P(){return new A.aQV(D.Ag)}}
A.aQV.prototype={
ad(){this.ao()
B.jK(new A.czZ(this),y.H)},
t(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().G($.zm(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a7<1>")
C.e.n(e,new B.a7(d,new A.czN(),a1))
C.e.cv(e,new A.czO())
x=f.b
w=x.length+new B.a7(d,new A.czP(),a1).gA(0)
v=w+e.length
u=new A.czY()
t=y.p
s=B.a([new B.qM(new A.czQ(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.eq("Por fazer",r===D.Ag,w,new A.czR(h),g),new B.eq("Feito",r===D.acZ,e.length,new A.czS(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pv(s,g),D.aHj,new K.mf(r,16,!1,g),B.vm(g,g,"O vosso plano",C.hH,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ag){e=B.a([D.coc,D.aGU],t)
if(x.length===0)e.push(D.aGK)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.I)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9r?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.C(C.e.gJ(C.f.eW(k,B.aU("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a1(k," \xb7 ")
i=n.ax?g:D.aH7
s.push(new B.im(D.aGI,n.e,k,i,!0,new A.czT(h,n),!1,g))}e.push(B.eQ(s,0))}e.push(D.aGT)
e.push(D.bKB)
x=B.a([],t)
if(!new B.a7(d,new A.czU(),a1).gW(0).q())x.push(D.aGL)
else for(d=C.e.gW(d),a0=new B.fE(d,new A.czV(),a0.i("fE<1>"));a0.q();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.p(u.$1(s))
x.push(new B.im(new H.Ky(!1,!1,new A.czW(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eQ(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGQ)
else for(o=0;o<e.length;e.length===a0||(0,B.I)(e),++o){n=e[o]
d.push(new B.im(O.PU,n.e,new A.czX(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGS,B.eQ(d,0)],t))}return B.cO(g,C.cS,B.nO(D.bVR,40,q,g,!0,!1),!0,g)},
L2(d,e){return this.biU(d,e)},
biU(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$L2=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bR(null,new A.czK(),!1,d,!0,!0,null,y.g),$async$L2)
case 3:q=g
if(q==null){x=1
break}u=e.a0(0,$.zm().gb1(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mn(q.d,s,r,t),$async$L2)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L2,w)}}
A.aKh.prototype={}
A.P6.prototype={
P(){var x=$.ab()
return new A.aKi(new B.aI(C.aq,x),new B.aI(C.aq,x))}}
A.aKi.prototype={
m(){var x=this.d,w=$.ab()
x.a_$=w
x.X$=0
x=this.e
x.a_$=w
x.X$=0
this.a6()},
t(d){var x=this,w=null,v=B.aT(d,w,y.w).w
return B.dU(B.x(B.a([B.h("Nova tarefa",w,w,w,w,B.az(d).ok.r,w,w),C.a0,G.zv(x.d,x.w,"T\xedtulo"),C.S,G.zv(x.e,w,"Descri\xe7\xe3o (opcional)"),C.S,L.d40("Prazo (opcional)",new A.cc6(x),x.f),C.aB,new P.a1J(x.r,new A.cc7(x),w),C.a0,new B.h_("Adicionar",new A.cc8(x,d),!1,w)],y.p),C.F,C.h,C.I),C.x,w,new B.a3(20,20,20,v.f.d+20),w,C.av)}}
A.agb.prototype={
Ld(d,e,f,g){return this.ba1(0,e,f,g)},
ba1(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Ld=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cU2(g.a)
x=3
return B.d(f.a0(0,$.wH().$1(g.a).gdO(),y.B),$async$Ld)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Ux(e,u,!1),$async$Ld)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Ld,w)},
b8(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cA($.cp(),new A.cjZ(),y.v,s),s)
s=e.G($.cUX().$1(new B.Zj(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dG(x))return C.ag
s=B.a([],y.G)
for(w=J.cb(x),v=w.gW(x),u=y.D;v.q();){t=v.gE(v)
t=e.G($.wH().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aN(y.N)
for(w=w.gW(x);w.q();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.S(C.CN,B.x(B.a([D.bKb,D.bKc,new F.Ls(s,new A.ck_(this,d,e,x),v,null)],y.p),C.F,C.h,C.l),null)}}
var z=a.updateTypes(["P6(M)","~(dp)","C(nF)"])
A.cI_.prototype={
$1(d){return d.a===this.a},
$S:482}
A.cI0.prototype={
$1(d){return d.b},
$S:1536}
A.czZ.prototype={
$0(){return this.a.gS().a0(0,$.zm().gb1(),y.I).nA()},
$S:1}
A.czN.prototype={
$1(d){return d.x===C.If},
$S:100}
A.czO.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bA(0,x==null?d.ch:x)},
$S:304}
A.czP.prototype={
$1(d){return d.x===C.l2},
$S:100}
A.czY.prototype={
$1(d){return C.f.aN(C.j.k(B.aw(d)),2,"0")+"/"+C.f.aN(C.j.k(B.aq(d)),2,"0")},
$S:157}
A.czQ.prototype={
$0(){var x=this.a
return x.L2(this.b,x.gS())},
$S:0}
A.czR.prototype={
$0(){var x=this.a
return x.p(new A.czM(x))},
$S:0}
A.czM.prototype={
$0(){return this.a.w=D.Ag},
$S:0}
A.czS.prototype={
$0(){var x=this.a
return x.p(new A.czL(x))},
$S:0}
A.czL.prototype={
$0(){return this.a.w=D.acZ},
$S:0}
A.czT.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qr(w,x.gS(),this.b)},
$S:0}
A.czU.prototype={
$1(d){return d.x===C.l2},
$S:100}
A.czV.prototype={
$1(d){return d.x===C.l2},
$S:100}
A.czW.prototype={
$0(){return this.a.gS().a0(0,$.zm().gb1(),y.I).EV(this.b.a)},
$S:0}
A.czX.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.p(this.b.$1(v))},
$S:18}
A.czK.prototype={
$1(d){return D.cnW},
$S:z+0}
A.cc6.prototype={
$1(d){var x=this.a
return x.p(new A.cc5(x,d))},
$S:515}
A.cc5.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cc7.prototype={
$1(d){var x=this.a
return x.p(new A.cc4(x,d))},
$S:151}
A.cc4.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cc8.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cc3(u))
if(u.w!=null)return
x=B.ap(this.b,!1)
w=C.f.C(u.d.a.a)
v=C.f.C(u.e.a.a)
if(v.length===0)v=null
x.au(new A.aKh(w,v,u.f,u.r))},
$S:0}
A.cc3.prototype={
$0(){var x=this.a
x.w=C.f.C(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cjZ.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:38}
A.ck_.prototype={
$1(d){var x=this
return x.a.Ld(0,x.b,x.c,J.cVo(x.d,new A.cjY(d)))},
$S:z+1}
A.cjY.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cTM.prototype={
$1(d){return this.aHc(d)},
aHc(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.R("task_templates").cu(0),$async$$1)
case 7:s=f
r=B.F(y.N,y.c)
for(p=J.an(s),o=y.P;p.q();){q=p.gE(p)
J.b3(r,B.a0(J.i(o.a(q),"id")),B.dzm(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bGx
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1537}
A.cLV.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aaz,x,x)],v)
w=w.f
if(C.f.C(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.M,B.h(C.f.C(w),x,x,x,x,D.c5v,x,x)],v))}u.push(C.bQ)
u.push(new B.am(B.A0(D.aDF,D.cgt,new A.cLS(d),x),x))
if(this.b!=null)C.e.n(u,B.a([C.M,new B.am(B.ht(N.aaY,new A.cLT(d),x),x)],v))
u.push(C.ap)
u.push(new B.am(B.cR(C.my,x,x,new A.cLU(d),x,x),x))
return B.bF(!0,new B.S(C.Nu,B.x(u,C.F,C.h,C.I),x),x,C.Y,!0)},
$S:32}
A.cLS.prototype={
$0(){return B.ap(this.a,!1).au("done")},
$S:0}
A.cLT.prototype={
$0(){return B.ap(this.a,!1).au("open")},
$S:0}
A.cLU.prototype={
$0(){return B.ap(this.a,!1).by()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bv,[A.cI_,A.cI0,A.czN,A.czP,A.czY,A.czU,A.czV,A.czK,A.cc6,A.cc7,A.cjZ,A.ck_,A.cjY,A.cTM,A.cLV])
w(A.aQW,B.fj)
w(A.aag,B.dB)
w(A.aQV,B.dx)
x(B.bO,[A.czZ,A.czQ,A.czR,A.czM,A.czS,A.czL,A.czT,A.czW,A.czX,A.cc5,A.cc4,A.cc8,A.cc3,A.cLS,A.cLT,A.cLU])
w(A.czO,B.cM)
w(A.aKh,B.L)
w(A.P6,B.G)
w(A.aKi,B.Z)
w(A.agb,B.ev)})()
B.bq(b.typeUniverse,JSON.parse('{"aag":{"G":[],"e":[],"f":[]},"P6":{"G":[],"e":[],"f":[]},"aQV":{"Z":["aag"]},"aKi":{"Z":["P6"]},"agb":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.B
return{F:x("ax<t<nF>?>"),D:x("ax<dp?>"),R:x("eD"),v:x("en"),Z:x("pk"),e:x("D<a4<c,By>>"),B:x("D<dp?>"),E:x("r<eq>"),G:x("r<dp>"),s:x("r<c>"),p:x("r<e>"),r:x("a4<c,By>"),P:x("a4<c,@>"),U:x("eA<+(c,c),c>"),w:x("dC"),N:x("c"),I:x("u1"),z:x("Bx"),c:x("By"),A:x("a7<+(c,c)>"),g:x("aKh"),q:x("dj"),h:x("a4<c,@>?"),X:x("L?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDF=new B.ba(C.du,null,null,null,null,null)
D.aGI=new H.Ky(!1,!1,null,null)
D.aGP=new B.im(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdq=x([D.aGP],y.p)
D.aGK=new B.TE(D.bdq,0,null)
D.aGL=new B.im(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGQ=new B.im(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGS=new E.Ez("Feito",null)
D.aGT=new E.Ez("As vossas tarefas",null)
D.aGU=new E.Ez("Pr\xf3ximas tarefas",null)
D.aH7=new B.dX("Nova",C.cW,null)
D.aHj=new B.li("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGx=new B.c9(C.cH,[],B.B("c9<c,By>"))
D.cb7=new B.E("Sugest\xf5es para ti",null,C.b4,null,null,null,null,null,null,null)
D.bKb=new B.S(C.bz,D.cb7,null)
D.ate=new B.a3(20,2,20,10)
D.c8d=new B.E("Com base no que tens procurado.",null,C.L,null,null,null,null,null,null,null)
D.bKc=new B.S(D.ate,D.c8d,null)
D.cc5=new B.E("Criadas por voc\xeas, sem limite.",null,C.L,null,null,null,null,null,null,null)
D.bKB=new B.S(C.ky,D.cc5,null)
D.cjU=B.cc("agb")
D.bVR=new B.fe([D.cjU],B.B("fe<kI>"))
D.c5v=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cgt=new B.E("Marcar como feita",null,null,null,null,null,null,null,null,null)
D.cnW=new A.P6(null)
D.coc=new A.agb(null)
D.Ag=new A.aQW(0,"todo")
D.acZ=new A.aQW(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e08","dnl",()=>B.ez(new A.cTM(),null,!1,null,null,y.r))})()};
(a=>{a["t8ovV94DDGnSdVr7DdraVAKOXkk="]=a.current})($__dart_deferred_initializers__);