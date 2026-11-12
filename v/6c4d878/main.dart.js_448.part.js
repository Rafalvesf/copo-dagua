((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,G,H,I,K,B={
cN1(d){var x=A.iq(new A.el(new A.a5(L.Us,new B.cj_(d),y.A),new B.cj0(),y.U))
return x},
cj_:function cj_(d){this.a=d},
cj0:function cj0(){},
czy(d){var x,w
A:{if("orcamento"===d){x=C.mG
break A}if("convidados"===d){x=C.kW
break A}if("lugares"===d){x=C.iW
break A}if("parceiros"===d){x=C.cB
break A}if("pagamentos"===d){x=F.p5
break A}if("cerimonia"===d){x=O.iR
break A}if("festa"===d){x=C.bg
break A}if("programa"===d){x=C.eo
break A}if(d!=null){x=B.cN1(d)!=null
w=d}else{w=null
x=!1}if(x){x=I.afC(w)
break A}x=C.dx
break A}return x},
d9b(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=B.cN1(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
cLJ(d,e,f){var x,w=A.dh(e,0,null)
if(w.gda(w)==="/partners"){x=w.geK().h(0,"category")
if(x==null)x=f==null?null:f.w
A.av(d).b5("/partners",new N.II(x,!1),y.X)
return}A.av(d).b5(e,null,y.X)},
Fg(d,e,f){return B.dfv(d,e,f)},
dfv(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Fg=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a2(0,$.mz().gaZ(),y.I)
if(!f.ax)j.LB(f.a)
q=f.r
x=q==="parceiros"&&C.f.be(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a2(0,$.cB(),y.B).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return A.d(B.aMZ(p,s),$async$Fg)
case 11:r=h
if(d.e!=null){p=r.a
A.av(d).b5("/chat/"+p,r,y.X)}x=1
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
return A.d(K.As(d,e,p),$async$Fg)
case 16:case 15:x=1
break
case 13:x=17
return A.d(e.a2(0,$.cTA().ghr(),y.e),$async$Fg)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=B.d9b(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a6u||l==null?18:19
break
case 18:x=20
return A.d(A.cd(null,new B.cm_(f,l),d,!0,!1,null,y.N),$async$Fg)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return A.d(j.Dh(f.a),$async$Fg)
case 24:if(d.e!=null)d.T(y.q).f.ah(A.cV(null,null,null,null,null,C.C,null,A.i('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.a0,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)B.cLJ(d,l,m)
case 22:x=1
break
case 19:if(q===C.a6t)j.Tm(f.a)
B.cLJ(d,l,m)
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Fg,w)},
csj:function csj(){},
cm_:function cm_(d,e){this.a=d
this.b=e},
clX:function clX(d){this.a=d},
clY:function clY(d){this.a=d},
clZ:function clZ(d){this.a=d},
cGe(d,e){return new B.CP(e,d,null)},
CP:function CP(d,e,f){this.e=d
this.f=e
this.a=f},
aMZ(d,e){var x=0,w=A.n(y.R),v,u,t,s,r,q,p
var $async$aMZ=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.Z().b
p===$&&A.b()
x=3
return A.d(p.S("proposals").aP(0,"partner_id, partner_profiles(business_name, cover_photo_url)").a0("id",d).dZ(0),$async$aMZ)
case 3:u=g
p=J.a3(u)
t=A.a1(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return A.d(G.xb(t,e),$async$aMZ)
case 4:r=g
p=s==null
q=A.P(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new H.hQ(r,q,A.P(p?null:J.h(s,"cover_photo_url")),e,t,null,null,0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aMZ,w)}},D,L,M,N,O
J=c[1]
A=c[0]
C=c[2]
E=c[306]
F=c[225]
G=c[166]
H=c[167]
I=c[162]
K=c[124]
B=a.updateHolder(c[101],B)
D=c[405]
L=c[413]
M=c[379]
N=c[144]
O=c[317]
B.CP.prototype={
bf(d,e){var x,w,v,u,t=null,s=this.e,r=e.M($.N6().$1(s.a),y.D),q=r.gq(r)
r=q==null
if(r)x=t
else{w=q.w
x=w!=null?new A.ag("DESDE",A.by(w,!1)):M.a45}w=s.c
w=w==null?A.E(t,D.awo,C.t,C.cy,t,t,t,t,t,t,t,t,t,t):A.l4(w,t,C.bZ,t,t,t,t)
r=r?t:q.e
if(r==null)r=""
v=A.a([],y.s)
u=s.e
if(u!=null)v.push(u)
return A.cv4(t,v,w,this.f,x,r,s.b)}}
var z=a.updateTypes([])
B.cj_.prototype={
$1(d){return d.a===this.a},
$S:1312}
B.cj0.prototype={
$1(d){return d.b},
$S:1313}
B.csj.prototype={
$1(d){return this.aB8(d)},
aB8(d){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Z().b
p===$&&A.b()
x=7
return A.d(p.S("task_templates").cz(0),$async$$1)
case 7:s=f
r=A.B(y.N,y.c)
for(p=J.aE(s),o=y.P;p.p();){q=p.gF(p)
J.bj(r,A.a1(J.h(o.a(q),"id")),A.cIj(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.byc
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:1314}
B.cm_.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=A.a([A.i(w.e,x,x,x,C.a7j,x,x,x)],v)
w=w.f
if(C.f.L(w==null?"":w).length!==0){w.toString
C.e.A(u,A.a([C.a4,A.i(C.f.L(w),x,x,x,D.bUC,x,x,x)],v))}u.push(C.bq)
u.push(A.pB(D.awX,D.c_m,new B.clX(d),x))
if(this.b!=null)C.e.A(u,A.a([C.a4,A.m6(E.a7y,new B.clY(d),x)],v))
u.push(C.aK)
u.push(A.c7(C.qF,x,x,new B.clZ(d),x,x))
return A.bn(!0,new A.a_(C.Lk,A.I(u,C.S,C.l,C.a_,0,C.w),x),x,C.V,!0)},
$S:51}
B.clX.prototype={
$0(){return A.aC(this.a,!1).b0("done")},
$S:0}
B.clY.prototype={
$0(){return A.aC(this.a,!1).b0("open")},
$S:0}
B.clZ.prototype={
$0(){return A.aC(this.a,!1).c7()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bv,[B.cj_,B.cj0,B.csj,B.cm_])
x(A.bI,[B.clX,B.clY,B.clZ])
w(B.CP,A.ei)})()
A.bx(b.typeUniverse,JSON.parse('{"CP":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.v
return{D:x("aG<f_?>"),R:x("hQ"),e:x("H<a2<c,nW>>"),s:x("q<c>"),p:x("q<e>"),r:x("a2<c,nW>"),P:x("a2<c,@>"),U:x("el<+(c,c),c>"),N:x("c"),I:x("oZ"),c:x("nW"),B:x("ed"),A:x("a5<+(c,c)>"),q:x("dD"),h:x("a2<c,@>?"),X:x("F?"),H:x("~")}})();(function constants(){D.awo=new A.aY(C.cB,null,C.bD,null,null,null)
D.awX=new A.aY(C.dw,null,null,null,null,null)
D.byc=new A.ch(C.cK,[],A.v("ch<c,nW>"))
D.bZY=new A.J("Sugest\xf5es para ti",null,C.k9,null,null,null,null,null,null,null,null)
D.a_g=new A.a_(C.cA,D.bZY,null)
D.bUC=new A.C(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c_m=new A.J("Marcar como feita",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dsX","cTA",()=>A.eD(new B.csj(),null,!1,null,null,y.r))})()};
(a=>{a["tEO4Wby/NxoHHwYXOExG8kS5Zco="]=a.current})($__dart_deferred_initializers__);