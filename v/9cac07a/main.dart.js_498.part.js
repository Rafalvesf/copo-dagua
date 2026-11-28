((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dGJ(d){var x=B.eU(new B.eu(new B.a6(P.Xq,new A.cGz(d),y.A),new A.cGA(),y.U))
return x},
cGz:function cGz(d){this.a=d},
cGA:function cGA(){},
dwr(){return new A.a9S(null)},
aQk:function aQk(d,e){this.a=d
this.b=e},
a9S:function a9S(d){this.a=d},
aQj:function aQj(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cyA:function cyA(d){this.a=d},
cyo:function cyo(){},
cyp:function cyp(){},
cyq:function cyq(){},
cyz:function cyz(){},
cyr:function cyr(d,e){this.a=d
this.b=e},
cys:function cys(d){this.a=d},
cyn:function cyn(d){this.a=d},
cyt:function cyt(d){this.a=d},
cym:function cym(d){this.a=d},
cyu:function cyu(d,e){this.a=d
this.b=e},
cyv:function cyv(){},
cyw:function cyw(){},
cyx:function cyx(d,e){this.a=d
this.b=e},
cyy:function cyy(d,e){this.a=d
this.b=e},
cyl:function cyl(){},
aJG:function aJG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OQ:function OQ(d){this.a=d},
aJH:function aJH(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cal:function cal(d){this.a=d},
cak:function cak(d,e){this.a=d
this.b=e},
cam:function cam(d){this.a=d},
caj:function caj(d,e){this.a=d
this.b=e},
can:function can(d,e){this.a=d
this.b=e},
cai:function cai(d){this.a=d},
afK:function afK(d){this.a=d},
cig:function cig(){},
cih:function cih(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cif:function cif(d){this.a=d},
dCn(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dGJ(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
daX(d,e,f){var x,w=B.dw(e,0,null)
if(w.gdn(w)==="/partners"){x=w.gel().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ai(d).au("/partners",new M.Ll(x,!1),y.X)
return}B.ai(d).au(e,null,y.X)},
Q5(d,e,f){return A.dJt(d,e,f)},
dJt(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Q5=B.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a0(0,$.zn().gaX(),y.I)
if(!f.ax)j.O_(f.a)
q=f.r
x=q==="parceiros"&&C.f.b2(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a0(0,$.cm(),y.v).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return B.d(A.aVg(s,p),$async$Q5)
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
return B.d(B.rH(d,e,p,null,null),$async$Q5)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a0(0,$.dkt().gef(),y.e),$async$Q5)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dCn(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9Q||l==null?18:19
break
case 18:x=20
return B.d(B.c9(null,new A.cKa(f,l),!1,d,!0,!1,null,y.N),$async$Q5)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.F9(f.a),$async$Q5)
case 24:if(d.e!=null)d.O(y.q).f.a3(B.c6(null,null,null,null,null,C.z,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.V,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.daX(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9P)j.Wo(f.a)
A.daX(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Q5,w)},
cRr:function cRr(){},
cKa:function cKa(d,e){this.a=d
this.b=e},
cK7:function cK7(d){this.a=d},
cK8:function cK8(d){this.a=d},
cK9:function cK9(d){this.a=d},
aVg(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVg=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.S().b
p===$&&B.b()
x=3
return B.d(p.R("proposals").an(0,"partner_id, partner_profiles(business_name, cover_photo_url)").W("id",e).dP(0),$async$aVg)
case 3:u=g
p=J.a7(u)
t=B.a1(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qc(d,t),$async$aVg)
case 4:r=g
p=s==null
q=B.D(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.hU(r,q,B.D(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVg,w)}},D,O,P,H,Q
J=c[1]
B=c[0]
C=c[2]
F=c[139]
I=c[162]
E=c[166]
K=c[188]
L=c[121]
M=c[134]
G=c[87]
N=c[253]
A=a.updateHolder(c[52],A)
D=c[407]
O=c[80]
P=c[408]
H=c[171]
Q=c[336]
A.aQk.prototype={
I(){return"_TasksTab."+this.b}}
A.a9S.prototype={
P(){return new A.aQj(D.Ax)}}
A.aQj.prototype={
ag(){this.aA()
B.ji(new A.cyA(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().H($.zn(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cyo(),a1))
C.e.cO(e,new A.cyp())
x=f.b
w=x.length+new B.a6(d,new A.cyq(),a1).gA(0)
v=w+e.length
u=new A.cyz()
t=y.p
s=B.a([new B.qQ(new A.cyr(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.el("Por fazer",r===D.Ax,w,new A.cys(h),g),new B.el("Feito",r===D.adA,e.length,new A.cyt(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pq(s,g),D.aI3,new K.m4(r,16,!1,g),B.ve(g,g,"O vosso plano",C.hK,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ax){e=B.a([D.cpa,D.aHA],t)
if(x.length===0)e.push(D.aHp)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.K)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9R?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.C(C.e.gM(C.f.f4(k,B.aT("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a2(k," \xb7 ")
i=n.ax?g:D.aHS
s.push(new B.i9(D.aHn,n.e,k,i,!0,new A.cyu(h,n),!1,g))}e.push(B.fc(s,0))}e.push(D.aHz)
e.push(D.bLQ)
x=B.a([],t)
if(!new B.a6(d,new A.cyv(),a1).gX(0).t())x.push(D.aHr)
else for(d=C.e.gX(d),a0=new B.h6(d,new A.cyw(),a0.i("h6<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i9(new G.Ko(!1,!1,new A.cyx(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.fc(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aHy)
else for(o=0;o<e.length;e.length===a0||(0,B.K)(e),++o){n=e[o]
d.push(new B.i9(N.Qp,n.e,new A.cyy(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aHC,B.fc(d,0)],t))}return B.cP(g,C.cU,B.or(D.bWE,40,q,g,!0,!1),!0,g)},
Lj(d,e){return this.bjl(d,e)},
bjl(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$Lj=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.c9(null,new A.cyl(),!1,d,!0,!0,null,y.g),$async$Lj)
case 3:q=g
if(q==null){x=1
break}u=e.a0(0,$.zn().gaX(),y.I)
t=q.a
s=q.b
r=q.c
x=4
return B.d(u.Mz(q.d,s,r,t),$async$Lj)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lj,w)}}
A.aJG.prototype={}
A.OQ.prototype={
P(){var x=$.aa()
return new A.aJH(new B.aE(C.al,x),new B.aE(C.al,x))}}
A.aJH.prototype={
m(){var x=this.d,w=$.aa()
x.Y$=w
x.V$=0
x=this.e
x.Y$=w
x.V$=0
this.a6()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.dQ(B.A(B.a([B.h("Nova tarefa",w,w,w,w,B.ar(d).ok.r,w,w,w),C.a1,new H.mx("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.mx("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d1H("Prazo (opcional)",new A.cal(x),x.f),C.aC,new O.a1n(x.r,new A.cam(x),w),C.a1,new B.fV("Adicionar",new A.can(x,d),!1,w)],y.p),C.G,C.h,C.K,0,C.u),C.z,w,new B.a0(20,20,20,v.f.d+20),w,w,C.a2)}}
A.afK.prototype={
Lu(d,e,f,g){return this.baN(0,e,f,g)},
baN(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Lu=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cRI(g.a)
x=3
return B.d(f.a0(0,$.zh().$1(g.a).gef(),y.B),$async$Lu)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.U9(e,u,!1),$async$Lu)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lu,w)},
bg(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cH($.cm(),new A.cig(),y.v,s),s)
s=e.H($.cSz().$1(new B.YX(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dp(x))return C.at
s=B.a([],y.G)
for(w=J.cb(x),v=w.gX(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.zh().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aK(y.N)
for(w=w.gX(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.Q(C.D0,B.A(B.a([D.bLC,D.bMr,new F.Lj(s,new A.cih(this,d,e,x),v,null)],y.p),C.G,C.h,C.l,0,C.u),null)}}
var z=a.updateTypes(["OQ(O)","~(dT)","x(nz)"])
A.cGz.prototype={
$1(d){return d.a===this.a},
$S:462}
A.cGA.prototype={
$1(d){return d.b},
$S:1509}
A.cyA.prototype={
$0(){return this.a.gS().a0(0,$.zn().gaX(),y.I).jH()},
$S:1}
A.cyo.prototype={
$1(d){return d.x===C.zh},
$S:54}
A.cyp.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bE(0,x==null?d.ch:x)},
$S:156}
A.cyq.prototype={
$1(d){return d.x===C.ik},
$S:54}
A.cyz.prototype={
$1(d){return C.f.aY(C.j.k(B.aI(d)),2,"0")+"/"+C.f.aY(C.j.k(B.ax(d)),2,"0")},
$S:138}
A.cyr.prototype={
$0(){var x=this.a
return x.Lj(this.b,x.gS())},
$S:0}
A.cys.prototype={
$0(){var x=this.a
return x.p(new A.cyn(x))},
$S:0}
A.cyn.prototype={
$0(){return this.a.w=D.Ax},
$S:0}
A.cyt.prototype={
$0(){var x=this.a
return x.p(new A.cym(x))},
$S:0}
A.cym.prototype={
$0(){return this.a.w=D.adA},
$S:0}
A.cyu.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Q5(w,x.gS(),this.b)},
$S:0}
A.cyv.prototype={
$1(d){return d.x===C.ik},
$S:54}
A.cyw.prototype={
$1(d){return d.x===C.ik},
$S:54}
A.cyx.prototype={
$0(){return this.a.gS().a0(0,$.zn().gaX(),y.I).F9(this.b.a)},
$S:0}
A.cyy.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:19}
A.cyl.prototype={
$1(d){return D.coV},
$S:z+0}
A.cal.prototype={
$1(d){var x=this.a
return x.p(new A.cak(x,d))},
$S:503}
A.cak.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cam.prototype={
$1(d){var x=this.a
return x.p(new A.caj(x,d))},
$S:102}
A.caj.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.can.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cai(u))
if(u.w!=null)return
x=B.am(this.b,!1)
w=C.f.C(u.d.a.a)
v=C.f.C(u.e.a.a)
if(v.length===0)v=null
x.ad(new A.aJG(w,v,u.f,u.r))},
$S:0}
A.cai.prototype={
$0(){var x=this.a
x.w=C.f.C(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cig.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:35}
A.cih.prototype={
$1(d){var x=this
return x.a.Lu(0,x.b,x.c,J.d06(x.d,new A.cif(d)))},
$S:z+1}
A.cif.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cRr.prototype={
$1(d){return this.aHp(d)},
aHp(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.S().b
p===$&&B.b()
x=7
return B.d(p.R("task_templates").cj(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.aq(s),o=y.P;p.t();){q=p.gE(p)
J.b2(r,B.a1(J.i(o.a(q),"id")),B.d7i(q))}v=r
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
$S:1510}
A.cKa.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aaV,x,x,x)],v)
w=w.f
if(C.f.C(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.S,B.h(C.f.C(w),x,x,x,x,D.c6f,x,x,x)],v))}u.push(C.bs)
u.push(B.DP(D.aEi,D.ccC,new A.cK7(d),x))
if(this.b!=null)C.e.n(u,B.a([C.S,B.hf(Q.ab5,new A.cK8(d),x)],v))
u.push(C.au)
u.push(B.cv(C.mC,x,x,new A.cK9(d),x,x))
return B.bC(!0,new B.Q(C.NT,B.A(u,C.G,C.h,C.K,0,C.u),x),x,C.a_,!0)},
$S:43}
A.cK7.prototype={
$0(){return B.am(this.a,!1).ad("done")},
$S:0}
A.cK8.prototype={
$0(){return B.am(this.a,!1).ad("open")},
$S:0}
A.cK9.prototype={
$0(){return B.am(this.a,!1).bB()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bx,[A.cGz,A.cGA,A.cyo,A.cyq,A.cyz,A.cyv,A.cyw,A.cyl,A.cal,A.cam,A.cig,A.cih,A.cif,A.cRr,A.cKa])
w(A.aQk,B.f7)
w(A.a9S,B.dC)
w(A.aQj,B.dy)
x(B.bQ,[A.cyA,A.cyr,A.cys,A.cyn,A.cyt,A.cym,A.cyu,A.cyx,A.cyy,A.cak,A.caj,A.can,A.cai,A.cK7,A.cK8,A.cK9])
w(A.cyp,B.cO)
w(A.aJG,B.J)
w(A.OQ,B.G)
w(A.aJH,B.Z)
w(A.afK,B.eq)})()
B.bn(b.typeUniverse,JSON.parse('{"a9S":{"G":[],"e":[],"f":[]},"OQ":{"G":[],"e":[],"f":[]},"aQj":{"Z":["a9S"]},"aJH":{"Z":["OQ"]},"afK":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ay<t<nz>?>"),D:x("ay<dT?>"),R:x("hU"),v:x("ee"),Z:x("nx"),e:x("F<a5<c,oQ>>"),B:x("F<dT?>"),E:x("r<el>"),G:x("r<dT>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oQ>"),P:x("a5<c,@>"),U:x("eu<+(c,c),c>"),w:x("df"),N:x("c"),I:x("tZ"),z:x("By"),c:x("oQ"),A:x("a6<+(c,c)>"),g:x("aJG"),q:x("dm"),h:x("a5<c,@>?"),X:x("J?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aEi=new B.b7(C.dq,null,null,null,null,null)
D.aHn=new G.Ko(!1,!1,null,null)
D.aHx=new B.i9(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.be8=x([D.aHx],y.p)
D.aHp=new B.Tj(D.be8,0,null)
D.aHr=new B.i9(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aHy=new B.i9(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aHz=new E.Ew("As vossas tarefas",null,null,null)
D.aHA=new E.Ew("Pr\xf3ximas tarefas",null,null,null)
D.aHC=new E.Ew("Feito",null,null,null)
D.aHS=new B.ex("Nova",C.de,null)
D.aI3=new B.m5("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bHF=new B.c2(C.cI,[],B.w("c2<c,oQ>"))
D.chd=new B.C("Sugest\xf5es para ti",null,C.bk,null,null,null,null,null,null,null,null)
D.bLC=new B.Q(C.bU,D.chd,null)
D.cf3=new B.C("Criadas por voc\xeas, sem limite.",null,C.P,null,null,null,null,null,null,null,null)
D.bLQ=new B.Q(C.jA,D.cf3,null)
D.auc=new B.a0(20,2,20,10)
D.cdT=new B.C("Com base no que tens procurado.",null,C.P,null,null,null,null,null,null,null,null)
D.bMr=new B.Q(D.auc,D.cdT,null)
D.cl_=B.ca("afK")
D.bWE=new B.fn([D.cl_],B.w("fn<ky>"))
D.c6f=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccC=new B.C("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.coV=new A.OQ(null)
D.cpa=new A.afK(null)
D.Ax=new A.aQk(0,"todo")
D.adA=new A.aQk(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXF","dkt",()=>B.eG(new A.cRr(),null,!1,null,null,y.r))})()};
(a=>{a["ht67mtgsyvYJ8t4aajGjpOMfmzs="]=a.current})($__dart_deferred_initializers__);