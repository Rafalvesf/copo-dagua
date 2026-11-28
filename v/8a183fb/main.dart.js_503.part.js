((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dHW(d){var x=B.eV(new B.eu(new B.a6(P.Xy,new A.cHx(d),y.A),new A.cHy(),y.U))
return x},
cHx:function cHx(d){this.a=d},
cHy:function cHy(){},
dxC(){return new A.a9W(null)},
aQv:function aQv(d,e){this.a=d
this.b=e},
a9W:function a9W(d){this.a=d},
aQu:function aQu(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
czu:function czu(d){this.a=d},
czi:function czi(){},
czj:function czj(){},
czk:function czk(){},
czt:function czt(){},
czl:function czl(d,e){this.a=d
this.b=e},
czm:function czm(d){this.a=d},
czh:function czh(d){this.a=d},
czn:function czn(d){this.a=d},
czg:function czg(d){this.a=d},
czo:function czo(d,e){this.a=d
this.b=e},
czp:function czp(){},
czq:function czq(){},
czr:function czr(d,e){this.a=d
this.b=e},
czs:function czs(d,e){this.a=d
this.b=e},
czf:function czf(){},
aJP:function aJP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OU:function OU(d){this.a=d},
aJQ:function aJQ(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
caX:function caX(d){this.a=d},
caW:function caW(d,e){this.a=d
this.b=e},
caY:function caY(d){this.a=d},
caV:function caV(d,e){this.a=d
this.b=e},
caZ:function caZ(d,e){this.a=d
this.b=e},
caU:function caU(d){this.a=d},
afP:function afP(d){this.a=d},
ciU:function ciU(){},
ciV:function ciV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ciT:function ciT(d){this.a=d},
dDy(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dHW(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
dc5(d,e,f){var x,w=B.dw(e,0,null)
if(w.gdn(w)==="/partners"){x=w.gen().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ah(d).av("/partners",new M.Ln(x,!1),y.X)
return}B.ah(d).av(e,null,y.X)},
Qc(d,e,f){return A.dKG(d,e,f)},
dKG(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Qc=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a1(0,$.zp().gaX(),y.I)
if(!f.ax)j.O3(f.a)
q=f.r
x=q==="parceiros"&&C.f.b2(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a1(0,$.cr(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aVr(s,p),$async$Qc)
case 11:r=h
if(d.e!=null){p=r.a
B.ah(d).av("/chat/"+p,r,y.X)}x=1
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
return B.d(B.rL(d,e,p,null,null),$async$Qc)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a1(0,$.dlE().geh(),y.e),$async$Qc)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dDy(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9X||l==null?18:19
break
case 18:x=20
return B.d(B.c1(null,new A.cLe(f,l),!1,d,!0,!1,null,y.N),$async$Qc)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.Fb(f.a),$async$Qc)
case 24:if(d.e!=null)d.O(y.q).f.a3(B.c7(null,null,null,null,null,C.z,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.dc5(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9W)j.Wy(f.a)
A.dc5(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Qc,w)},
cSz:function cSz(){},
cLe:function cLe(d,e){this.a=d
this.b=e},
cLb:function cLb(d){this.a=d},
cLc:function cLc(d){this.a=d},
cLd:function cLd(d){this.a=d},
aVr(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVr=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.R().b
p===$&&B.b()
x=3
return B.d(p.R("proposals").am(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",e).dP(0),$async$aVr)
case 3:u=g
p=J.a7(u)
t=B.a_(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qf(d,t),$async$aVr)
case 4:r=g
p=s==null
q=B.C(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.eG(r,q,t,B.C(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0,null,null,C.k0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVr,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[139]
I=c[162]
E=c[166]
K=c[188]
L=c[121]
M=c[134]
G=c[86]
N=c[255]
A=a.updateHolder(c[52],A)
D=c[408]
O=c[80]
P=c[409]
H=c[171]
Q=c[338]
A.aQv.prototype={
I(){return"_TasksTab."+this.b}}
A.a9W.prototype={
P(){return new A.aQu(D.Az)}}
A.aQu.prototype={
ad(){this.ar()
B.ji(new A.czu(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().H($.zp(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.czi(),a1))
C.e.cz(e,new A.czj())
x=f.b
w=x.length+new B.a6(d,new A.czk(),a1).gA(0)
v=w+e.length
u=new A.czt()
t=y.p
s=B.a([new B.qT(new A.czl(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.el("Por fazer",r===D.Az,w,new A.czm(h),g),new B.el("Feito",r===D.adJ,e.length,new A.czn(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.ps(s,g),D.aI9,new K.m4(r,16,!1,g),B.vh(g,g,"O vosso plano",C.hL,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Az){e=B.a([D.cpn,D.aHG],t)
if(x.length===0)e.push(D.aHv)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.H)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9Y?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.C(C.e.gK(C.f.eW(k,B.aS("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a0(k," \xb7 ")
i=n.ax?g:D.aHY
s.push(new B.i8(D.aHt,n.e,k,i,!0,new A.czo(h,n),!1,g))}e.push(B.fc(s,0))}e.push(D.aHF)
e.push(D.bLX)
x=B.a([],t)
if(!new B.a6(d,new A.czp(),a1).gX(0).t())x.push(D.aHx)
else for(d=C.e.gX(d),a0=new B.h9(d,new A.czq(),a0.i("h9<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i8(new G.Kq(!1,!1,new A.czr(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.fc(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aHE)
else for(o=0;o<e.length;e.length===a0||(0,B.H)(e),++o){n=e[o]
d.push(new B.i8(N.Qy,n.e,new A.czs(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aHI,B.fc(d,0)],t))}return B.cP(g,C.cY,B.ot(D.bWN,40,q,g,!0,!1),!0,g)},
Ln(d,e){return this.bjx(d,e)},
bjx(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$Ln=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.c1(null,new A.czf(),!1,d,!0,!0,null,y.g),$async$Ln)
case 3:q=g
if(q==null){x=1
break}u=e.a1(0,$.zp().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.MD(q.d,s,r,t),$async$Ln)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Ln,w)}}
A.aJP.prototype={}
A.OU.prototype={
P(){var x=$.aa()
return new A.aJQ(new B.aF(C.al,x),new B.aF(C.al,x))}}
A.aJQ.prototype={
m(){var x=this.d,w=$.aa()
x.Y$=w
x.W$=0
x=this.e
x.Y$=w
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=B.ax(d,w,y.w).w
return B.dQ(B.y(B.a([B.h("Nova tarefa",w,w,w,w,B.ar(d).ok.r,w,w,w),C.a1,new H.mx("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.mx("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d2Q("Prazo (opcional)",new A.caX(x),x.f),C.aC,new O.a1r(x.r,new A.caY(x),w),C.a1,new B.fZ("Adicionar",new A.caZ(x,d),!1,w)],y.p),C.G,C.h,C.K,0,C.u),C.z,w,new B.a2(20,20,20,v.f.d+20),w,w,C.a3)}}
A.afP.prototype={
Ly(d,e,f,g){return this.baX(0,e,f,g)},
baX(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Ly=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cSQ(g.a)
x=3
return B.d(f.a1(0,$.wF().$1(g.a).geh(),y.B),$async$Ly)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.Ue(e,u,!1),$async$Ly)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Ly,w)},
bg(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cI($.cr(),new A.ciU(),y.v,s),s)
s=e.H($.cTH().$1(new B.Z1(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dq(x))return C.at
s=B.a([],y.G)
for(w=J.cb(x),v=w.gX(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.wF().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aJ(y.N)
for(w=w.gX(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.Q(C.D3,B.y(B.a([D.bLJ,D.bMy,new F.Ll(s,new A.ciV(this,d,e,x),v,null)],y.p),C.G,C.h,C.l,0,C.u),null)}}
var z=a.updateTypes(["OU(O)","~(dU)","x(nA)"])
A.cHx.prototype={
$1(d){return d.a===this.a},
$S:349}
A.cHy.prototype={
$1(d){return d.b},
$S:1514}
A.czu.prototype={
$0(){return this.a.gS().a1(0,$.zp().gaX(),y.I).jH()},
$S:1}
A.czi.prototype={
$1(d){return d.x===C.zk},
$S:60}
A.czj.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bD(0,x==null?d.ch:x)},
$S:177}
A.czk.prototype={
$1(d){return d.x===C.ip},
$S:60}
A.czt.prototype={
$1(d){return C.f.aY(C.j.k(B.aH(d)),2,"0")+"/"+C.f.aY(C.j.k(B.au(d)),2,"0")},
$S:153}
A.czl.prototype={
$0(){var x=this.a
return x.Ln(this.b,x.gS())},
$S:0}
A.czm.prototype={
$0(){var x=this.a
return x.p(new A.czh(x))},
$S:0}
A.czh.prototype={
$0(){return this.a.w=D.Az},
$S:0}
A.czn.prototype={
$0(){var x=this.a
return x.p(new A.czg(x))},
$S:0}
A.czg.prototype={
$0(){return this.a.w=D.adJ},
$S:0}
A.czo.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Qc(w,x.gS(),this.b)},
$S:0}
A.czp.prototype={
$1(d){return d.x===C.ip},
$S:60}
A.czq.prototype={
$1(d){return d.x===C.ip},
$S:60}
A.czr.prototype={
$0(){return this.a.gS().a1(0,$.zp().gaX(),y.I).Fb(this.b.a)},
$S:0}
A.czs.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:17}
A.czf.prototype={
$1(d){return D.cp7},
$S:z+0}
A.caX.prototype={
$1(d){var x=this.a
return x.p(new A.caW(x,d))},
$S:438}
A.caW.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.caY.prototype={
$1(d){var x=this.a
return x.p(new A.caV(x,d))},
$S:95}
A.caV.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.caZ.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.caU(u))
if(u.w!=null)return
x=B.am(this.b,!1)
w=C.f.C(u.d.a.a)
v=C.f.C(u.e.a.a)
if(v.length===0)v=null
x.ae(new A.aJP(w,v,u.f,u.r))},
$S:0}
A.caU.prototype={
$0(){var x=this.a
x.w=C.f.C(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.ciU.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:35}
A.ciV.prototype={
$1(d){var x=this
return x.a.Ly(0,x.b,x.c,J.d1e(x.d,new A.ciT(d)))},
$S:z+1}
A.ciT.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cSz.prototype={
$1(d){return this.aHB(d)},
aHB(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&B.b()
x=7
return B.d(p.R("task_templates").ck(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.ap(s),o=y.P;p.t();){q=p.gE(p)
J.b3(r,B.a_(J.i(o.a(q),"id")),B.d8r(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bHN
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1515}
A.cLe.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.ab3,x,x,x)],v)
w=w.f
if(C.f.C(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.S,B.h(C.f.C(w),x,x,x,x,D.c6n,x,x,x)],v))}u.push(C.bs)
u.push(B.DR(D.aEn,D.ccM,new A.cLb(d),x))
if(this.b!=null)C.e.n(u,B.a([C.S,B.h5(Q.abe,new A.cLc(d),x)],v))
u.push(C.av)
u.push(B.cw(C.mG,x,x,new A.cLd(d),x,x))
return B.bE(!0,new B.Q(C.O_,B.y(u,C.G,C.h,C.K,0,C.u),x),x,C.a_,!0)},
$S:47}
A.cLb.prototype={
$0(){return B.am(this.a,!1).ae("done")},
$S:0}
A.cLc.prototype={
$0(){return B.am(this.a,!1).ae("open")},
$S:0}
A.cLd.prototype={
$0(){return B.am(this.a,!1).bx()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.by,[A.cHx,A.cHy,A.czi,A.czk,A.czt,A.czp,A.czq,A.czf,A.caX,A.caY,A.ciU,A.ciV,A.ciT,A.cSz,A.cLe])
w(A.aQv,B.f8)
w(A.a9W,B.dD)
w(A.aQu,B.dz)
x(B.bR,[A.czu,A.czl,A.czm,A.czh,A.czn,A.czg,A.czo,A.czr,A.czs,A.caW,A.caV,A.caZ,A.caU,A.cLb,A.cLc,A.cLd])
w(A.czj,B.cN)
w(A.aJP,B.K)
w(A.OU,B.G)
w(A.aJQ,B.Y)
w(A.afP,B.eq)})()
B.bq(b.typeUniverse,JSON.parse('{"a9W":{"G":[],"e":[],"f":[]},"OU":{"G":[],"e":[],"f":[]},"aQu":{"Y":["a9W"]},"aJQ":{"Y":["OU"]},"afP":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ay<t<nA>?>"),D:x("ay<dU?>"),R:x("eG"),v:x("ef"),Z:x("ny"),e:x("F<a5<c,oR>>"),B:x("F<dU?>"),E:x("r<el>"),G:x("r<dU>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oR>"),P:x("a5<c,@>"),U:x("eu<+(c,c),c>"),w:x("df"),N:x("c"),I:x("u1"),z:x("Bz"),c:x("oR"),A:x("a6<+(c,c)>"),g:x("aJP"),q:x("dn"),h:x("a5<c,@>?"),X:x("K?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aEn=new B.b7(C.dq,null,null,null,null,null)
D.aHt=new G.Kq(!1,!1,null,null)
D.aHD=new B.i8(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.bef=x([D.aHD],y.p)
D.aHv=new B.To(D.bef,0,null)
D.aHx=new B.i8(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aHE=new B.i8(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aHF=new E.Ey("As vossas tarefas",null,null,null)
D.aHG=new E.Ey("Pr\xf3ximas tarefas",null,null,null)
D.aHI=new E.Ey("Feito",null,null,null)
D.aHY=new B.ex("Nova",C.df,null)
D.aI9=new B.m5("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bHN=new B.c3(C.cK,[],B.w("c3<c,oR>"))
D.cho=new B.D("Sugest\xf5es para ti",null,C.bk,null,null,null,null,null,null,null,null)
D.bLJ=new B.Q(C.bV,D.cho,null)
D.cfd=new B.D("Criadas por voc\xeas, sem limite.",null,C.O,null,null,null,null,null,null,null,null)
D.bLX=new B.Q(C.jE,D.cfd,null)
D.auj=new B.a2(20,2,20,10)
D.ce2=new B.D("Com base no que tens procurado.",null,C.O,null,null,null,null,null,null,null,null)
D.bMy=new B.Q(D.auj,D.ce2,null)
D.cla=B.cc("afP")
D.bWN=new B.fo([D.cla],B.w("fo<ky>"))
D.c6n=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccM=new B.D("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.cp7=new A.OU(null)
D.cpn=new A.afP(null)
D.Az=new A.aQv(0,"todo")
D.adJ=new A.aQv(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYW","dlE",()=>B.eI(new A.cSz(),null,!1,null,null,y.r))})()};
(a=>{a["GxFmA7uEbn0UPOnOR5fjCNhylLg="]=a.current})($__dart_deferred_initializers__);