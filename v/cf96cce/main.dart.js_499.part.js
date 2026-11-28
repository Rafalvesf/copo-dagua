((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,I,E,K,L,M,G,N,A={
dGy(d){var x=B.eU(new B.eu(new B.a6(P.Xp,new A.cGp(d),y.A),new A.cGq(),y.U))
return x},
cGp:function cGp(d){this.a=d},
cGq:function cGq(){},
dwg(){return new A.a9S(null)},
aQj:function aQj(d,e){this.a=d
this.b=e},
a9S:function a9S(d){this.a=d},
aQi:function aQi(d){var _=this
_.w=d
_.d=$
_.c=_.a=null},
cyq:function cyq(d){this.a=d},
cye:function cye(){},
cyf:function cyf(){},
cyg:function cyg(){},
cyp:function cyp(){},
cyh:function cyh(d,e){this.a=d
this.b=e},
cyi:function cyi(d){this.a=d},
cyd:function cyd(d){this.a=d},
cyj:function cyj(d){this.a=d},
cyc:function cyc(d){this.a=d},
cyk:function cyk(d,e){this.a=d
this.b=e},
cyl:function cyl(){},
cym:function cym(){},
cyn:function cyn(d,e){this.a=d
this.b=e},
cyo:function cyo(d,e){this.a=d
this.b=e},
cyb:function cyb(){},
aJF:function aJF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OQ:function OQ(d){this.a=d},
aJG:function aJG(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=_.w=_.r=_.f=null},
cak:function cak(d){this.a=d},
caj:function caj(d,e){this.a=d
this.b=e},
cal:function cal(d){this.a=d},
cai:function cai(d,e){this.a=d
this.b=e},
cam:function cam(d,e){this.a=d
this.b=e},
cah:function cah(d){this.a=d},
afJ:function afJ(d){this.a=d},
cif:function cif(){},
cig:function cig(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cie:function cie(d){this.a=d},
dCc(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=A.dGy(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
daN(d,e,f){var x,w=B.dv(e,0,null)
if(w.gdn(w)==="/partners"){x=w.gel().h(0,"category")
if(x==null)x=f==null?null:f.w
B.ai(d).au("/partners",new M.Ll(x,!1),y.X)
return}B.ai(d).au(e,null,y.X)},
Q5(d,e,f){return A.dJi(d,e,f)},
dJi(d,e,f){var x=0,w=B.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
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
return B.d(A.aVf(s,p),$async$Q5)
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
return B.d(B.rG(d,e,p,null,null),$async$Q5)
case 16:case 15:x=1
break
case 13:x=17
return B.d(e.a0(0,$.dkj().gef(),y.e),$async$Q5)
case 17:n=h
p=f.c
m=p==null?null:J.i(n,p)
l=m==null?null:m.x
if(l==null)l=A.dCc(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a9P||l==null?18:19
break
case 18:x=20
return B.d(B.c9(null,new A.cK0(f,l),!1,d,!0,!1,null,y.N),$async$Q5)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return B.d(j.F9(f.a),$async$Q5)
case 24:if(d.e!=null)d.O(y.q).f.a3(B.c6(null,null,null,null,null,C.z,null,B.h('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.V,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)A.daN(d,l,m)
case 22:x=1
break
case 19:if(q===C.a9O)j.Wn(f.a)
A.daN(d,l,m)
case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$Q5,w)},
cRh:function cRh(){},
cK0:function cK0(d,e){this.a=d
this.b=e},
cJY:function cJY(d){this.a=d},
cJZ:function cJZ(d){this.a=d},
cK_:function cK_(d){this.a=d},
aVf(d,e){var x=0,w=B.n(y.R),v,u,t,s,r,q,p
var $async$aVf=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:p=$.S().b
p===$&&B.b()
x=3
return B.d(p.R("proposals").ao(0,"partner_id, partner_profiles(business_name, cover_photo_url)").W("id",e).dP(0),$async$aVf)
case 3:u=g
p=J.a7(u)
t=B.a1(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return B.d(B.qb(d,t),$async$aVf)
case 4:r=g
p=s==null
q=B.D(p?null:J.i(s,"business_name"))
if(q==null)q="Parceiro"
v=new B.hU(r,q,B.D(p?null:J.i(s,"cover_photo_url")),d,t,null,null,0)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$aVf,w)}},D,O,P,H,Q
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
A.aQj.prototype={
I(){return"_TasksTab."+this.b}}
A.a9S.prototype={
P(){return new A.aQi(D.Ax)}}
A.aQi.prototype={
ah(){this.aA()
B.ji(new A.cyq(this),y.H)},
u(a2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gS().H($.zn(),y.z),e=B.U(f.c,y.Z),d=f.d,a0=B.a8(d),a1=a0.i("a6<1>")
C.e.n(e,new B.a6(d,new A.cye(),a1))
C.e.cO(e,new A.cyf())
x=f.b
w=x.length+new B.a6(d,new A.cyg(),a1).gA(0)
v=w+e.length
u=new A.cyp()
t=y.p
s=B.a([new B.qP(new A.cyh(h,a2),"Nova tarefa",g)],t)
r=h.w
r=B.a([new B.el("Por fazer",r===D.Ax,w,new A.cyi(h),g),new B.el("Feito",r===D.adz,e.length,new A.cyj(h),g)],y.E)
q=e.length
p=v===0?0:q/v
q=B.a([new B.pp(s,g),D.aI2,new K.m4(r,16,!1,g),B.vd(g,g,"O vosso plano",C.hJ,p,"de "+v+" feitas",""+q)],t)
if(h.w===D.Ax){e=B.a([D.cp4,D.aHz],t)
if(x.length===0)e.push(D.aHo)
else{s=B.a([],t)
for(r=x.length,p=y.s,o=0;o<x.length;x.length===r||(0,B.K)(x),++o){n=x[o]
m=n.cx
if(m==null)l=g
else l=m===C.a9Q?"Sugest\xe3o":"Para concluir"
k=n.f
j=k==null?g:C.f.C(C.e.gM(C.f.f4(k,B.aT("(?<=[.!?])\\s",!0,!1,!1))))
k=B.a([],p)
if(l!=null)k.push(l)
if(j!=null&&j.length!==0)k.push(j)
k=k.length===0?g:C.e.a2(k," \xb7 ")
i=n.ax?g:D.aHR
s.push(new B.i9(D.aHm,n.e,k,i,!0,new A.cyk(h,n),!1,g))}e.push(B.fc(s,0))}e.push(D.aHy)
e.push(D.bLP)
x=B.a([],t)
if(!new B.a6(d,new A.cyl(),a1).gX(0).t())x.push(D.aHq)
else for(d=C.e.gX(d),a0=new B.h6(d,new A.cym(),a0.i("h6<1>"));a0.t();){a1=d.gE(0)
t=a1.e
s=a1.y
s=s==null?g:"At\xe9 "+B.q(u.$1(s))
x.push(new B.i9(new G.Ko(!1,!1,new A.cyn(h,a1),g),t,s,g,!1,g,!1,g))}e.push(B.fc(x,0))
C.e.n(q,e)}else{d=B.a([],t)
a0=e.length
if(a0===0)d.push(D.aHx)
else for(o=0;o<e.length;e.length===a0||(0,B.K)(e),++o){n=e[o]
d.push(new B.i9(N.Qo,n.e,new A.cyo(n,u).$0(),g,!1,g,!0,g))}C.e.n(q,B.a([D.aHB,B.fc(d,0)],t))}return B.cP(g,C.cT,B.or(D.bWD,40,q,g,!0,!1),!0,g)},
Lj(d,e){return this.bjh(d,e)},
bjh(d,e){var x=0,w=B.n(y.H),v,u,t,s,r,q
var $async$Lj=B.j(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:x=3
return B.d(B.c9(null,new A.cyb(),!1,d,!0,!0,null,y.g),$async$Lj)
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
A.aJF.prototype={}
A.OQ.prototype={
P(){var x=$.ab()
return new A.aJG(new B.aF(C.al,x),new B.aF(C.al,x))}}
A.aJG.prototype={
m(){var x=this.d,w=$.ab()
x.Z$=w
x.V$=0
x=this.e
x.Z$=w
x.V$=0
this.a6()},
u(d){var x=this,w=null,v=B.aw(d,w,y.w).w
return B.dQ(B.A(B.a([B.h("Nova tarefa",w,w,w,w,B.ar(d).ok.r,w,w,w),C.a1,new H.mx("T\xedtulo",x.d,x.w,w,w,w),C.R,new H.mx("Descri\xe7\xe3o (opcional)",x.e,w,w,w,w),C.R,L.d1x("Prazo (opcional)",new A.cak(x),x.f),C.aC,new O.a1n(x.r,new A.cal(x),w),C.a1,new B.fV("Adicionar",new A.cam(x,d),!1,w)],y.p),C.G,C.h,C.K,0,C.u),C.z,w,new B.a0(20,20,20,v.f.d+20),w,w,C.a2)}}
A.afJ.prototype={
Lu(d,e,f,g){return this.baJ(0,e,f,g)},
baJ(d,e,f,g){var x=0,w=B.n(y.H),v,u
var $async$Lu=B.j(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:if(g.f)F.cRy(g.a)
x=3
return B.d(f.a0(0,$.zh().$1(g.a).gef(),y.B),$async$Lu)
case 3:u=i
if(u==null||e.e==null){x=1
break}x=4
return B.d(I.U9(e,u,!1),$async$Lu)
case 4:case 1:return B.l(v,w)}})
return B.m($async$Lu,w)},
bg(d,e){var x,w,v,u,t,s=y.T,r=e.H(B.cH($.cm(),new A.cif(),y.v,s),s)
s=e.H($.cSp().$1(new B.YX(null,4,r)),y.F)
x=s.gv(s)
if(x==null||J.dp(x))return C.ar
s=B.a([],y.G)
for(w=J.cb(x),v=w.gX(x),u=y.D;v.t();){t=v.gE(v)
t=e.H($.zh().$1(t.a),u)
t=t.gv(t)
if(t!=null)s.push(t)}v=B.aK(y.N)
for(w=w.gX(x);w.t();){u=w.gE(w)
if(u.f)v.B(0,u.a)}return new B.Q(C.D0,B.A(B.a([D.bLB,D.bMq,new F.Lj(s,new A.cig(this,d,e,x),v,null)],y.p),C.G,C.h,C.l,0,C.u),null)}}
var z=a.updateTypes(["OQ(N)","~(dT)","x(nz)"])
A.cGp.prototype={
$1(d){return d.a===this.a},
$S:344}
A.cGq.prototype={
$1(d){return d.b},
$S:1508}
A.cyq.prototype={
$0(){return this.a.gS().a0(0,$.zn().gaX(),y.I).jH()},
$S:1}
A.cye.prototype={
$1(d){return d.x===C.zh},
$S:56}
A.cyf.prototype={
$2(d,e){var x,w=e.Q
if(w==null)w=e.ch
x=d.Q
return w.bE(0,x==null?d.ch:x)},
$S:179}
A.cyg.prototype={
$1(d){return d.x===C.ij},
$S:56}
A.cyp.prototype={
$1(d){return C.f.aY(C.j.k(B.aH(d)),2,"0")+"/"+C.f.aY(C.j.k(B.ax(d)),2,"0")},
$S:131}
A.cyh.prototype={
$0(){var x=this.a
return x.Lj(this.b,x.gS())},
$S:0}
A.cyi.prototype={
$0(){var x=this.a
return x.p(new A.cyd(x))},
$S:0}
A.cyd.prototype={
$0(){return this.a.w=D.Ax},
$S:0}
A.cyj.prototype={
$0(){var x=this.a
return x.p(new A.cyc(x))},
$S:0}
A.cyc.prototype={
$0(){return this.a.w=D.adz},
$S:0}
A.cyk.prototype={
$0(){var x=this.a,w=x.c
w.toString
return A.Q5(w,x.gS(),this.b)},
$S:0}
A.cyl.prototype={
$1(d){return d.x===C.ij},
$S:56}
A.cym.prototype={
$1(d){return d.x===C.ij},
$S:56}
A.cyn.prototype={
$0(){return this.a.gS().a0(0,$.zn().gaX(),y.I).F9(this.b.a)},
$S:0}
A.cyo.prototype={
$0(){var x=this.a,w=x.at==="cta_opened"?"Explorada":"Conclu\xedda",v=x.Q
return v==null?w:w+" a "+B.q(this.b.$1(v))},
$S:17}
A.cyb.prototype={
$1(d){return D.coP},
$S:z+0}
A.cak.prototype={
$1(d){var x=this.a
return x.p(new A.caj(x,d))},
$S:435}
A.caj.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.cal.prototype={
$1(d){var x=this.a
return x.p(new A.cai(x,d))},
$S:105}
A.cai.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.cam.prototype={
$0(){var x,w,v,u=this.a
u.p(new A.cah(u))
if(u.w!=null)return
x=B.am(this.b,!1)
w=C.f.C(u.d.a.a)
v=C.f.C(u.e.a.a)
if(v.length===0)v=null
x.ad(new A.aJF(w,v,u.f,u.r))},
$S:0}
A.cah.prototype={
$0(){var x=this.a
x.w=C.f.C(x.d.a.a).length===0?"A tarefa precisa de um t\xedtulo":null},
$S:0}
A.cif.prototype={
$1(d){var x=d.b
return x==null?null:x.w},
$S:36}
A.cig.prototype={
$1(d){var x=this
return x.a.Lu(0,x.b,x.c,J.d_X(x.d,new A.cie(d)))},
$S:z+1}
A.cie.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
A.cRh.prototype={
$1(d){return this.aHl(d)},
aHl(d){var x=0,w=B.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=B.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.S().b
p===$&&B.b()
x=7
return B.d(p.R("task_templates").cj(0),$async$$1)
case 7:s=f
r=B.E(y.N,y.c)
for(p=J.aq(s),o=y.P;p.t();){q=p.gE(p)
J.b6(r,B.a1(J.i(o.a(q),"id")),B.d78(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bHE
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return B.l(v,w)
case 2:return B.k(t.at(-1),w)}})
return B.m($async$$1,w)},
$S:1509}
A.cK0.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=B.a([B.h(w.e,x,x,x,x,C.aaU,x,x,x)],v)
w=w.f
if(C.f.C(w==null?"":w).length!==0){w.toString
C.e.n(u,B.a([C.T,B.h(C.f.C(w),x,x,x,x,D.c6d,x,x,x)],v))}u.push(C.bs)
u.push(B.DP(D.aEh,D.ccz,new A.cJY(d),x))
if(this.b!=null)C.e.n(u,B.a([C.T,B.hf(Q.ab4,new A.cJZ(d),x)],v))
u.push(C.au)
u.push(B.cu(C.mC,x,x,new A.cK_(d),x,x))
return B.bC(!0,new B.Q(C.NT,B.A(u,C.G,C.h,C.K,0,C.u),x),x,C.a_,!0)},
$S:45}
A.cJY.prototype={
$0(){return B.am(this.a,!1).ad("done")},
$S:0}
A.cJZ.prototype={
$0(){return B.am(this.a,!1).ad("open")},
$S:0}
A.cK_.prototype={
$0(){return B.am(this.a,!1).bB()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bw,[A.cGp,A.cGq,A.cye,A.cyg,A.cyp,A.cyl,A.cym,A.cyb,A.cak,A.cal,A.cif,A.cig,A.cie,A.cRh,A.cK0])
w(A.aQj,B.f7)
w(A.a9S,B.dC)
w(A.aQi,B.dy)
x(B.bQ,[A.cyq,A.cyh,A.cyi,A.cyd,A.cyj,A.cyc,A.cyk,A.cyn,A.cyo,A.caj,A.cai,A.cam,A.cah,A.cJY,A.cJZ,A.cK_])
w(A.cyf,B.cO)
w(A.aJF,B.J)
w(A.OQ,B.G)
w(A.aJG,B.Z)
w(A.afJ,B.eq)})()
B.bn(b.typeUniverse,JSON.parse('{"a9S":{"G":[],"e":[],"f":[]},"OQ":{"G":[],"e":[],"f":[]},"aQi":{"Z":["a9S"]},"aJG":{"Z":["OQ"]},"afJ":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=B.w
return{F:x("ay<t<nz>?>"),D:x("ay<dT?>"),R:x("hU"),v:x("ee"),Z:x("nx"),e:x("F<a5<c,oP>>"),B:x("F<dT?>"),E:x("r<el>"),G:x("r<dT>"),s:x("r<c>"),p:x("r<e>"),r:x("a5<c,oP>"),P:x("a5<c,@>"),U:x("eu<+(c,c),c>"),w:x("df"),N:x("c"),I:x("tY"),z:x("By"),c:x("oP"),A:x("a6<+(c,c)>"),g:x("aJF"),q:x("dm"),h:x("a5<c,@>?"),X:x("J?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aEh=new B.b7(C.dq,null,null,null,null,null)
D.aHm=new G.Ko(!1,!1,null,null)
D.aHw=new B.i9(null,"Sem tarefas recomendadas por agora","Bom trabalho!",null,!1,null,!1,null)
D.be7=x([D.aHw],y.p)
D.aHo=new B.Tj(D.be7,0,null)
D.aHq=new B.i9(null,"Ainda n\xe3o criaram nenhuma tarefa vossa.",null,null,!1,null,!1,null)
D.aHx=new B.i9(null,"Ainda n\xe3o conclu\xedram nenhuma tarefa.",null,null,!1,null,!1,null)
D.aHy=new E.Ev("As vossas tarefas",null,null,null)
D.aHz=new E.Ev("Pr\xf3ximas tarefas",null,null,null)
D.aHB=new E.Ev("Feito",null,null,null)
D.aHR=new B.ex("Nova",C.de,null)
D.aI2=new B.m5("Tarefas","O plano guia-vos, voc\xeas executam.",null)
D.bHE=new B.c2(C.cI,[],B.w("c2<c,oP>"))
D.ch8=new B.C("Sugest\xf5es para ti",null,C.bk,null,null,null,null,null,null,null,null)
D.bLB=new B.Q(C.bU,D.ch8,null)
D.ceZ=new B.C("Criadas por voc\xeas, sem limite.",null,C.P,null,null,null,null,null,null,null,null)
D.bLP=new B.Q(C.jA,D.ceZ,null)
D.aub=new B.a0(20,2,20,10)
D.cdP=new B.C("Com base no que tens procurado.",null,C.P,null,null,null,null,null,null,null,null)
D.bMq=new B.Q(D.aub,D.cdP,null)
D.ckU=B.ca("afJ")
D.bWD=new B.fn([D.ckU],B.w("fn<ky>"))
D.c6d=new B.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccz=new B.C("Marcar como feita",null,null,null,null,null,null,null,null,null,null)
D.coP=new A.OQ(null)
D.cp4=new A.afJ(null)
D.Ax=new A.aQj(0,"todo")
D.adz=new A.aQj(1,"done")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXu","dkj",()=>B.eG(new A.cRh(),null,!1,null,null,y.r))})()};
(a=>{a["8hj1JVbU5okwRAF/TOYpfQjdcbw="]=a.current})($__dart_deferred_initializers__);