((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,G,L,M,N,H,O,A={
dK_(d){var x=B.f8(new B.ez(new B.a7(Q.WX,new A.cI8(d),y.A),new A.cI9(),y.U))
return x},
cI8:function cI8(d){this.a=d},
cI9:function cI9(){},
dzA(){return new A.aai(null)},
aQV:function aQV(d,e){this.a=d
this.b=e},
aai:function aai(d){this.a=d},
aQU:function aQU(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cA6:function cA6(d){this.a=d},
czV:function czV(){},
czW:function czW(){},
czX:function czX(){},
cA5:function cA5(){},
czY:function czY(d,e){this.a=d
this.b=e},
czZ:function czZ(d){this.a=d},
czU:function czU(d){this.a=d},
cA_:function cA_(d){this.a=d},
czT:function czT(d){this.a=d},
cA0:function cA0(d,e){this.a=d
this.b=e},
cA1:function cA1(){},
cA2:function cA2(){},
cA3:function cA3(d,e){this.a=d
this.b=e},
cA4:function cA4(d,e){this.a=d
this.b=e},
czS:function czS(){},
aKi:function aKi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
P6:function P6(d){this.a=d},
aKj:function aKj(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cca:function cca(d){this.a=d},
cc9:function cc9(d,e){this.a=d
this.b=e},
ccb:function ccb(d){this.a=d},
cc8:function cc8(d,e){this.a=d
this.b=e},
ccc:function ccc(d,e){this.a=d
this.b=e},
cc7:function cc7(d){this.a=d},
agd:function agd(d){this.a=d},
ck5:function ck5(){},
ck6:function ck6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ck4:function ck4(d){this.a=d},
dFu(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dK_(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
ddL(d,e,f){var x,w=B.dA(e,0,null)
if(w.gdd(w)==="/partners"){x=w.gem().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ae(d).ag("/partners",new M.Lv(x,!1),y.X)
return}B.ae(d).ag(e,null,y.X)},
Qr(d,e,f){return A.dMP(d,e,f)},
dMP(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qr=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a0(0,$.zk().gb1(),y.I)
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
return B.d(A.aVY(s,p),$async$Qr)
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
return B.d(e.a0(0,$.dny().gdN(),y.e),$async$Qr)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dFu(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9r||l==null?18:19
break
case 18:x=20
return B.d(B.bV(null,new A.cM3(f,l),!1,d,!0,!1,null,y.N),$async$Qr)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.EV(f.a),$async$Qr)
case 24:if(d.e!=null)d.O(y.q).f.a4(B.c7(null,null,null,null,null,C.y,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.ddL(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9q)j.Wh(f.a)
A.ddL(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qr,w)},
cTY:function cTY(){},
cM3:function cM3(d,e){this.a=d
this.b=e},
cM0:function cM0(d){this.a=d},
cM1:function cM1(d){this.a=d},
cM2:function cM2(d){this.a=d},
aVY(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVY=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&B.b()
x=3
return B.d(p.R("proposals").al(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",e).e9(0),$async$aVY)
case 3:u=g
p=J.a6(u)
t=B.a0(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.q9(d,t),$async$aVY)
case 4:r=g
p=s==null
q=B.x(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eD(r,q,t,B.x(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.j3)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVY,w)}},D,P,Q
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
D=c[408]
P=c[78]
Q=c[409]
A.aQV.prototype={
I(){return"_TasksTab."+this.b}}
A.aai.prototype={
P(){return new A.aQU(D.Ak)}}
A.aQU.prototype={
ad(){this.ao()
B.jI(new A.cA6(this),y.H)},
t(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().G($.zk(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a7<1>")
C.e.n(e,new B.a7(d,new A.czV(),a1))
C.e.cv(e,new A.czW())
x=f.b
w=x.length+new B.a7(d,new A.czX(),a1).gA(0)
v=w+e.length
u=new A.cA5()
t=y.p
s=B.a([new B.qK(new A.czY(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.eq("Por fazer",r===D.Ak,w,new A.czZ(h),g),new B.eq("Feito",r===D.ad0,e.length,new A.cA_(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pt(s,g),D.aHk,new K.md(r,16,!1,g),B.vj(g,g,"O vosso plano",C.hJ,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ak){e=B.a([D.co4,D.aGV],t)
if(x.length===0)e.push(D.aGL)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.I)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9s?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.C(C.e.gJ(C.f.eW(k,B.aT("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a1(k," \xb7 ")
i=n.ax?g:D.aH8
s.push(new B.im(D.aGJ,n.e,k,i,!0,new A.cA0(h,n),!1,g))}e.push(B.eQ(s,0))}e.push(D.aGU)
e.push(D.bKB)
x=B.a([],t)
if(!new B.a7(d,new A.cA1(),a1).gW(0).q())x.push(D.aGM)
else for(d=C.e.gW(d),a0=new B.fD(d,new A.cA2(),a0.i("fD<1>"));a0.q();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.p(u.$1(s))
x.push(new B.im(new H.Kx(!1,!1,new A.cA3(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.eQ(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aGR)
else for(o=0;o<e.length;e.length===a0||(0,B.I)(e),++o){n=e[o]
d.push(new B.im(O.PZ,n.e,new A.cA4(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aGT,B.eQ(d,0)],t))}return B.cP(g,C.cR,B.nN(D.bVQ,40,q,g,!0,!1),!0,g)},
L2(d,e){return this.biV(d,e)},
biV(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$L2=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.bV(null,new A.czS(),!1,d,!0,!0,null,y.g),$async$L2)
case 3:q=g
if(q==null){x=1
break}u=e.a0(0,$.zk().gb1(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mn(q.d,s,r,t),$async$L2)
case 4:case 1:return B.l(v,w)}})
return B.m($async$L2,w)}}
A.aKi.prototype={}
A.P6.prototype={
P(){var x=$.aa()
return new A.aKj(new B.aH(C.ap,x),new B.aH(C.ap,x))}}
A.aKj.prototype={
m(){var x=this.d,w=$.aa()
x.a_$=w
x.X$=0
x=this.e
x.a_$=w
x.X$=0
this.a6()},
t(d){var x=this,w=null,v=B.aU(d,w,y.w).w
return B.dU(B.y(B.a([B.h("Nova tarefa",w,w,w,w,B.az(d).ok.r,w,w),C.a0,G.zt(x.d,x.w,"T\xedtulo"),C.S,G.zt(x.e,w,"Descri\xe7\xe3o (opcional)"),C.S,L.d4c("Prazo (opcional)",new A.cca(x),x.f),C.aA,new P.a1L(x.r,new A.ccb(x),w),C.a0,new B.fZ("Adicionar",new A.ccc(x,d),!1,w)],y.p),C.F,C.h,C.I),C.y,w,new B.a3(20,20,20,v.f.d+20),w,C.au)}}
A.agd.prototype={
Ld(d,e,f,g){return this.ba3(0,e,f,g)},
ba3(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Ld=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cUe(g.a)
x=3
return B.d(f.a0(0,$.wG().$1(g.a).gdN(),y.B),$async$Ld)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Uy(e,u,!1),$async$Ld)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Ld,w)},
b8(d,e){var x,w,v,u,t,s=y.T,r=e.G(B.cA($.cp(),new A.ck5(),y.v,s),s)
s=e.G($.cV8().$1(new B.Zk(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dF(x))return C.aq
s=B.a([],y.G)
for(w=J.ca(x),v=w.gW(x),u=y.D;v.q();){t=v.gE(v)
t=e.G($.wG().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aO(y.N)
for(w=w.gW(x);w.q();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.S(C.CS,B.y(B.a([D.bKb,D.bKc,new F.Lr(s,new A.ck6(this,d,e,x),v,null)],y.p),C.F,C.h,C.l),null)}}
var z=a.updateTypes(["P6(N)","~(dn)","C(nE)"])
A.cI8.prototype={
$1(d){return d.a===this.a},
$S:482}
A.cI9.prototype={
$1(d){return d.b},
$S:1536}
A.cA6.prototype={
$0(){return this.a.gS().a0(0,$.zk().gb1(),y.I).nA()},
$S:1}
A.czV.prototype={
$1(d){return d.x===C.In},
$S:100}
A.czW.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bA(0,x==null?d.ch:x)},
$S:304}
A.czX.prototype={
$1(d){return d.x===C.l4},
$S:100}
A.cA5.prototype={
$1(d){return C.f.aP(C.j.k(B.ax(d)),2,"0")+"/"+C.f.aP(C.j.k(B.aq(d)),2,"0")},
$S:157}
A.czY.prototype={
$0(){var x=this.a
return x.L2(this.b,x.gS())},
$S:0}
A.czZ.prototype={
$0(){var x=this.a
return x.p(new A.czU(x))},
$S:0}
A.czU.prototype={
$0(){return this.a.w=D.Ak},
$S:0}
A.cA_.prototype={
$0(){var x=this.a
return x.p(new A.czT(x))},
$S:0}
A.czT.prototype={
$0(){return this.a.w=D.ad0},
$S:0}
A.cA0.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qr(w,x.gS(),this.b)},
$S:0}
A.cA1.prototype={
$1(d){return d.x===C.l4},
$S:100}
A.cA2.prototype={
$1(d){return d.x===C.l4},
$S:100}
A.cA3.prototype={
$0(){return this.a.gS().a0(0,$.zk().gb1(),y.I).EV(this.b.a)},
$S:0}
A.cA4.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.p(this.b.$1(v))},
$S:18}
A.czS.prototype={
$1(d){return D.cnO},
$S:z+0}
A.cca.prototype={
$1(d){var x=this.a
return x.p(new A.cc9(x,d))},
$S:515}
A.cc9.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.ccb.prototype={
$1(d){var x=this.a
return x.p(new A.cc8(x,d))},
$S:151}
A.cc8.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.ccc.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cc7(u))
if(u.w!=null)return
x=B.an(this.b,!1)
w=C.f.C(u.d.a.a)
v=C.f.C(u.e.a.a)
if(v.length===0)v=null
x.ar(new A.aKi(w,v,u.f,u.r))},
$S:0}
A.cc7.prototype={
$0(){var x=this.a
x.w=C.f.C(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.ck5.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:38}
A.ck6.prototype={
$1(d){var x=this
return x.a.Ld(0,x.b,x.c,J.cVA(x.d,new A.ck4(d)))},
$S:z+1}
A.ck4.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cTY.prototype={
$1(d){return this.aHc(d)},
aHc(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&B.b()
x=7
return B.d(p.R("task_templates").cu(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ao(s),o=y.P;p.q();){q=p.gE(p)
J.b3(r,B.a0(J.i(o.a(q),"id")),B.dzz(q))}v=r
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
A.cM3.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aaB,x,x)],v)
w=w.f
if(C.f.C(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.M,B.h(C.f.C(w),x,x,x,x,D.c5q,x,x)],v))}u.push(C.bP)
u.push(new B.am(B.zZ(D.aDG,D.cgm,new A.cM0(d),x),x))
if(this.b!=null)C.e.n(u,B.a([C.M,new B.am(B.ht(N.ab_,new A.cM1(d),x),x)],v))
u.push(C.ao)
u.push(new B.am(B.cS(C.mA,x,x,new A.cM2(d),x,x),x))
return B.bE(!0,new B.S(C.Nz,B.y(u,C.F,C.h,C.I),x),x,C.Z,!0)},
$S:32}
A.cM0.prototype={
$0(){return B.an(this.a,!1).ar("done")},
$S:0}
A.cM1.prototype={
$0(){return B.an(this.a,!1).ar("open")},
$S:0}
A.cM2.prototype={
$0(){return B.an(this.a,!1).bi()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bv,[A.cI8,A.cI9,A.czV,A.czX,A.cA5,A.cA1,A.cA2,A.czS,A.cca,A.ccb,A.ck5,A.ck6,A.ck4,A.cTY,A.cM3])
w(A.aQV,B.fj)
w(A.aai,B.dB)
w(A.aQU,B.dx)
x(B.bN,[A.cA6,A.czY,A.czZ,A.czU,A.cA_,A.czT,A.cA0,A.cA3,A.cA4,A.cc9,A.cc8,A.ccc,A.cc7,A.cM0,A.cM1,A.cM2])
w(A.czW,B.cM)
w(A.aKi,B.L)
w(A.P6,B.G)
w(A.aKj,B.Z)
w(A.agd,B.ev)})()
B.bq(b.typeUniverse,JSON.parse('{"aai":{"G":[],"e":[],"f":[]},"P6":{"G":[],"e":[],"f":[]},"aQU":{"Z":["aai"]},"aKj":{"Z":["P6"]},"agd":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.B
return{F:x("aw<t<nE>?>"),D:x("aw<dn?>"),R:x("eD"),v:x("en"),Z:x("pi"),e:x("D<a5<c,Bw>>"),B:x("D<dn?>"),E:x("r<eq>"),G:x("r<dn>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,Bw>"),P:x("a5<c,@>"),U:x("ez<+(c,c),c>"),w:x("dC"),N:x("c"),I:x("u_"),z:x("Bv"),c:x("Bw"),A:x("a7<+(c,c)>"),g:x("aKi"),q:x("di"),h:x("a5<c,@>?"),X:x("L?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aDG=new B.b8(C.du,null,null,null,null,null)
D.aGJ=new H.Kx(!1,!1,null,null)
D.aGQ=new B.im(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bdr=x([D.aGQ],y.p)
D.aGL=new B.TF(D.bdr,0,null)
D.aGM=new B.im(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aGR=new B.im(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aGT=new E.Ex("Feito",null)
D.aGU=new E.Ex("As vossas tarefas",null)
D.aGV=new E.Ex("Pr\xf3ximas tarefas",null)
D.aH8=new B.dX("Nova",C.cV,null)
D.aHk=new B.lh("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bGx=new B.c9(C.cH,[],B.B("c9<c,Bw>"))
D.cb1=new B.F("Sugest\xf5es para ti",null,C.b3,null,null,null,null,null,null,null)
D.bKb=new B.S(C.by,D.cb1,null)
D.atf=new B.a3(20,2,20,10)
D.c87=new B.F("Com base no que tens procurado.",null,C.L,null,null,null,null,null,null,null)
D.bKc=new B.S(D.atf,D.c87,null)
D.cc_=new B.F("Criadas por voc\xeas, sem limite.",null,C.L,null,null,null,null,null,null,null)
D.bKB=new B.S(C.kA,D.cc_,null)
D.cjN=B.cb("agd")
D.bVQ=new B.fd([D.cjN],B.B("fd<kH>"))
D.c5q=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cgm=new B.F("Marcar como feita",null,null,null,null,null,null,null,null,null)
D.cnO=new A.P6(null)
D.co4=new A.agd(null)
D.Ak=new A.aQV(0,"todo")
D.ad0=new A.aQV(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e0j","dny",()=>B.ey(new A.cTY(),null,!1,null,null,y.r))})()};
(a=>{a["1K+To+0SKinccGPY8F69hUaPzzI="]=a.current})($__dart_deferred_initializers__);