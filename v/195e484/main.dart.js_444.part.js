((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,G,H,I,B={
cNO(d){var x=A.iq(new A.el(new A.a4(K.Uu,new B.cjF(d),y.A),new B.cjG(),y.U))
return x},
cjF:function cjF(d){this.a=d},
cjG:function cjG(){},
cAi(d){var x,w
A:{if("orcamento"===d){x=C.mG
break A}if("convidados"===d){x=C.kY
break A}if("lugares"===d){x=C.iY
break A}if("parceiros"===d){x=C.cA
break A}if("pagamentos"===d){x=E.p9
break A}if("cerimonia"===d){x=N.iT
break A}if("festa"===d){x=C.bh
break A}if("programa"===d){x=C.eo
break A}if(d!=null){x=B.cNO(d)!=null
w=d}else{w=null
x=!1}if(x){x=H.afL(w)
break A}x=C.dz
break A}return x},
da0(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=B.cNO(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
cMu(d,e,f){var x,w=A.di(e,0,null)
if(w.gdc(w)==="/partners"){x=w.geL().h(0,"category")
if(x==null)x=f==null?null:f.w
A.au(d).b3("/partners",new M.IL(x,!1),y.X)
return}A.au(d).b3(e,null,y.X)},
Fi(d,e,f){return B.dgk(d,e,f)},
dgk(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Fi=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a2(0,$.mz().gaW(),y.I)
if(!f.ax)j.LD(f.a)
q=f.r
x=q==="parceiros"&&C.f.be(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a2(0,$.cx(),y.B).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return A.d(B.aNc(p,s),$async$Fi)
case 11:r=h
if(d.e!=null){p=r.a
A.au(d).b3("/chat/"+p,r,y.X)}x=1
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
return A.d(I.At(d,e,p),$async$Fi)
case 16:case 15:x=1
break
case 13:x=17
return A.d(e.a2(0,$.cUo().ghr(),y.e),$async$Fi)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=B.da0(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a6w||l==null?18:19
break
case 18:x=20
return A.d(A.cb(null,new B.cmH(f,l),d,!0,!1,null,y.N),$async$Fi)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return A.d(j.Di(f.a),$async$Fi)
case 24:if(d.e!=null)d.T(y.q).f.af(A.cP(null,null,null,null,null,C.C,null,A.i('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.a0,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)B.cMu(d,l,m)
case 22:x=1
break
case 19:if(q===C.a6v)j.To(f.a)
B.cMu(d,l,m)
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Fi,w)},
ct3:function ct3(){},
cmH:function cmH(d,e){this.a=d
this.b=e},
cmE:function cmE(d){this.a=d},
cmF:function cmF(d){this.a=d},
cmG:function cmG(d){this.a=d},
cH_(d,e){return new B.CQ(e,d,null)},
CQ:function CQ(d,e,f){this.e=d
this.f=e
this.a=f},
aNc(d,e){var x=0,w=A.n(y.R),v,u,t,s,r,q,p
var $async$aNc=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.Z().b
p===$&&A.b()
x=3
return A.d(p.S("proposals").aO(0,"partner_id, partner_profiles(business_name, cover_photo_url)").a0("id",d).e_(0),$async$aNc)
case 3:u=g
p=J.a3(u)
t=A.a1(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return A.d(F.xc(t,e),$async$aNc)
case 4:r=g
p=s==null
q=A.P(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new G.hQ(r,q,A.P(p?null:J.h(s,"cover_photo_url")),e,t,null,null,0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aNc,w)}},D,K,L,M,N,O
J=c[1]
A=c[0]
C=c[2]
E=c[224]
F=c[166]
G=c[167]
H=c[162]
I=c[124]
B=a.updateHolder(c[101],B)
D=c[402]
K=c[410]
L=c[377]
M=c[144]
N=c[316]
O=c[305]
B.CQ.prototype={
bf(d,e){var x,w,v,u,t=null,s=this.e,r=e.M($.Nd().$1(s.a),y.D),q=r.gt(r)
r=q==null
if(r)x=t
else{w=q.w
x=w!=null?new A.ag("DESDE",A.by(w,!1)):L.a47}w=s.c
w=w==null?A.E(t,D.awu,C.t,C.cG,t,t,t,t,t,t,t,t,t,t):A.l4(w,t,C.c_,t,t,t,t)
r=r?t:q.e
if(r==null)r=""
v=A.a([],y.s)
u=s.e
if(u!=null)v.push(u)
return A.cvQ(t,v,w,this.f,x,r,s.b)}}
var z=a.updateTypes([])
B.cjF.prototype={
$1(d){return d.a===this.a},
$S:1315}
B.cjG.prototype={
$1(d){return d.b},
$S:1316}
B.ct3.prototype={
$1(d){return this.aBe(d)},
aBe(d){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Z().b
p===$&&A.b()
x=7
return A.d(p.S("task_templates").cz(0),$async$$1)
case 7:s=f
r=A.B(y.N,y.c)
for(p=J.aE(s),o=y.P;p.p();){q=p.gF(p)
J.bk(r,A.a1(J.h(o.a(q),"id")),A.cJ4(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.byj
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:1317}
B.cmH.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=A.a([A.i(w.e,x,x,x,C.a7m,x,x,x)],v)
w=w.f
if(C.f.L(w==null?"":w).length!==0){w.toString
C.e.A(u,A.a([C.a4,A.i(C.f.L(w),x,x,x,D.bUO,x,x,x)],v))}u.push(C.bp)
u.push(A.pB(D.ax1,D.c_z,new B.cmE(d),x))
if(this.b!=null)C.e.A(u,A.a([C.a4,A.lv(O.a7C,new B.cmF(d),x)],v))
u.push(C.aK)
u.push(A.c8(C.qI,x,x,new B.cmG(d),x,x))
return A.bo(!0,new A.a_(C.Lm,A.I(u,C.T,C.l,C.a_,0,C.w),x),x,C.V,!0)},
$S:56}
B.cmE.prototype={
$0(){return A.aC(this.a,!1).b_("done")},
$S:0}
B.cmF.prototype={
$0(){return A.aC(this.a,!1).b_("open")},
$S:0}
B.cmG.prototype={
$0(){return A.aC(this.a,!1).c8()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bv,[B.cjF,B.cjG,B.ct3,B.cmH])
x(A.bI,[B.cmE,B.cmF,B.cmG])
w(B.CQ,A.ei)})()
A.bx(b.typeUniverse,JSON.parse('{"CQ":{"F":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.v
return{D:x("aF<f_?>"),R:x("hQ"),e:x("H<a2<c,nW>>"),s:x("q<c>"),p:x("q<e>"),r:x("a2<c,nW>"),P:x("a2<c,@>"),U:x("el<+(c,c),c>"),N:x("c"),I:x("oZ"),c:x("nW"),B:x("ec"),A:x("a4<+(c,c)>"),q:x("dC"),h:x("a2<c,@>?"),X:x("G?"),H:x("~")}})();(function constants(){D.awu=new A.aZ(C.cA,null,C.bB,null,null,null)
D.ax1=new A.aZ(C.dy,null,null,null,null,null)
D.byj=new A.ch(C.cK,[],A.v("ch<c,nW>"))
D.c_9=new A.J("Sugest\xf5es para ti",null,C.k9,null,null,null,null,null,null,null,null)
D.a_h=new A.a_(C.cy,D.c_9,null)
D.bUO=new A.C(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c_z=new A.J("Marcar como feita",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dtM","cUo",()=>A.eD(new B.ct3(),null,!1,null,null,y.r))})()};
(a=>{a["xp6Sf00CR/kTNU5hNsoMIw5AQkQ="]=a.current})($__dart_deferred_initializers__);