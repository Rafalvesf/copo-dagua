((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,G,H,I,K,B={
cO9(d){var x=A.iW(new A.ek(new A.a4(L.Up,new B.cjR(d),y.A),new B.cjS(),y.U))
return x},
cjR:function cjR(d){this.a=d},
cjS:function cjS(){},
cAw(d){var x,w
A:{if("orcamento"===d){x=C.mJ
break A}if("convidados"===d){x=C.mP
break A}if("lugares"===d){x=C.jJ
break A}if("parceiros"===d){x=C.cL
break A}if("pagamentos"===d){x=F.pi
break A}if("cerimonia"===d){x=E.jA
break A}if("festa"===d){x=C.bo
break A}if("programa"===d){x=C.ep
break A}if(d!=null){x=B.cO9(d)!=null
w=d}else{w=null
x=!1}if(x){x=I.afO(w)
break A}x=C.dI
break A}return x},
dam(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=B.cO9(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
cMO(d,e,f){var x,w=A.dh(e,0,null)
if(w.gdc(w)==="/partners"){x=w.geK().h(0,"category")
if(x==null)x=f==null?null:f.w
A.au(d).b3("/partners",new M.QP(x,!1),y.X)
return}A.au(d).b3(e,null,y.X)},
Fp(d,e,f){return B.dgD(d,e,f)},
dgD(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Fp=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a2(0,$.my().gaV(),y.I)
if(!f.ax)j.LL(f.a)
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
return A.d(B.aNh(p,s),$async$Fp)
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
return A.d(K.Ay(d,e,p),$async$Fp)
case 16:case 15:x=1
break
case 13:x=17
return A.d(e.a2(0,$.cUH().ghr(),y.e),$async$Fp)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=B.dam(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a6n||l==null?18:19
break
case 18:x=20
return A.d(A.cb(null,new B.cmT(f,l),d,!0,!1,null,y.N),$async$Fp)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return A.d(j.Do(f.a),$async$Fp)
case 24:if(d.e!=null)d.S(y.q).f.ad(A.cH(null,null,null,null,null,C.D,null,A.i('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)B.cMO(d,l,m)
case 22:x=1
break
case 19:if(q===C.a6m)j.TC(f.a)
B.cMO(d,l,m)
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Fp,w)},
ctg:function ctg(){},
cmT:function cmT(d,e){this.a=d
this.b=e},
cmQ:function cmQ(d){this.a=d},
cmR:function cmR(d){this.a=d},
cmS:function cmS(d){this.a=d},
cHe(d,e){return new B.CY(e,d,null)},
CY:function CY(d,e,f){this.e=d
this.f=e
this.a=f},
aNh(d,e){var x=0,w=A.n(y.R),v,u,t,s,r,q,p
var $async$aNh=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.W().b
p===$&&A.b()
x=3
return A.d(p.T("proposals").aN(0,"partner_id, partner_profiles(business_name, cover_photo_url)").a_("id",d).e_(0),$async$aNh)
case 3:u=g
p=J.a3(u)
t=A.a1(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return A.d(G.xe(t,e),$async$aNh)
case 4:r=g
p=s==null
q=A.P(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new H.hT(r,q,A.P(p?null:J.h(s,"cover_photo_url")),e,t,null,null,0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aNh,w)}},D,L,M,N,O
J=c[1]
A=c[0]
C=c[2]
E=c[325]
F=c[225]
G=c[167]
H=c[168]
I=c[164]
K=c[126]
B=a.updateHolder(c[102],B)
D=c[395]
L=c[406]
M=c[127]
N=c[368]
O=c[307]
B.CY.prototype={
bf(d,e){var x,w,v,u,t=null,s=this.e,r=e.M($.Nk().$1(s.a),y.D),q=r.gt(r)
r=q==null
if(r)x=t
else{w=q.w
x=w!=null?new A.ag("DESDE",A.by(w,!1)):N.a40}w=s.c
w=w==null?A.E(t,D.awq,C.t,C.cI,t,t,t,t,t,t,t,t,t,t):A.l4(w,t,C.bZ,t,t,t,t)
r=r?t:q.e
if(r==null)r=""
v=A.a([],y.s)
u=s.e
if(u!=null)v.push(u)
return A.cw4(t,v,w,this.f,x,r,s.b)}}
var z=a.updateTypes([])
B.cjR.prototype={
$1(d){return d.a===this.a},
$S:1318}
B.cjS.prototype={
$1(d){return d.b},
$S:1319}
B.ctg.prototype={
$1(d){return this.aBr(d)},
aBr(d){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.W().b
p===$&&A.b()
x=7
return A.d(p.T("task_templates").cw(0),$async$$1)
case 7:s=f
r=A.B(y.N,y.c)
for(p=J.aD(s),o=y.P;p.p();){q=p.gF(p)
J.bg(r,A.a1(J.h(o.a(q),"id")),A.cJl(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.byl
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:1320}
B.cmT.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=A.a([A.i(w.e,x,x,x,C.a7j,x,x,x)],v)
w=w.f
if(C.f.L(w==null?"":w).length!==0){w.toString
C.e.A(u,A.a([C.a4,A.i(C.f.L(w),x,x,x,D.bVj,x,x,x)],v))}u.push(C.bq)
u.push(A.pD(D.awX,D.c00,new B.cmQ(d),x))
if(this.b!=null)C.e.A(u,A.a([C.a4,A.lu(O.a7z,new B.cmR(d),x)],v))
u.push(C.aK)
u.push(A.c7(C.qS,x,x,new B.cmS(d),x,x))
return A.bp(!0,new A.a_(C.Ll,A.J(u,C.R,C.m,C.a0,0,C.w),x),x,C.V,!0)},
$S:51}
B.cmQ.prototype={
$0(){return A.aB(this.a,!1).aX("done")},
$S:0}
B.cmR.prototype={
$0(){return A.aB(this.a,!1).aX("open")},
$S:0}
B.cmS.prototype={
$0(){return A.aB(this.a,!1).c8()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bv,[B.cjR,B.cjS,B.ctg,B.cmT])
x(A.bI,[B.cmQ,B.cmR,B.cmS])
w(B.CY,A.en)})()
A.bx(b.typeUniverse,JSON.parse('{"CY":{"G":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.v
return{D:x("aF<eZ?>"),R:x("hT"),e:x("H<a2<c,nT>>"),s:x("q<c>"),p:x("q<e>"),r:x("a2<c,nT>"),P:x("a2<c,@>"),U:x("ek<+(c,c),c>"),N:x("c"),I:x("oW"),c:x("nT"),B:x("ec"),A:x("a4<+(c,c)>"),q:x("dB"),h:x("a2<c,@>?"),X:x("F?"),H:x("~")}})();(function constants(){D.awq=new A.b_(C.cL,null,C.bj,null,null,null)
D.awX=new A.b_(C.dH,null,null,null,null,null)
D.byl=new A.ch(C.cN,[],A.v("ch<c,nT>"))
D.c_B=new A.I("Sugest\xf5es para ti",null,C.k5,null,null,null,null,null,null,null,null)
D.a_c=new A.a_(C.cz,D.c_B,null)
D.bVj=new A.C(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c00=new A.I("Marcar como feita",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"du5","cUH",()=>A.eA(new B.ctg(),null,!1,null,null,y.r))})()};
(a=>{a["2oLAQ4oaNylga0Zh2rxZ2vaSIeU="]=a.current})($__dart_deferred_initializers__);