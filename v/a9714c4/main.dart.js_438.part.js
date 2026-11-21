((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,G,B={
cYP(d){var x=A.i_(new A.ei(new A.a4(H.VH,new B.ctz(d),y.A),new B.ctA(),y.U))
return x},
ctz:function ctz(d){this.a=d},
ctA:function ctA(){},
dm9(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=B.cYP(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
cXl(d,e,f){var x,w=A.dm(e,0,null)
if(w.gdi(w)==="/partners"){x=w.geL().h(0,"category")
if(x==null)x=f==null?null:f.w
A.ar(d).aU("/partners",new I.SF(x,!1),y.X)
return}A.ar(d).aU(e,null,y.X)},
GF(d,e,f){return B.dsU(d,e,f)},
dsU(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$GF=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a1(0,$.mX().gaW(),y.I)
if(!f.ax)j.N2(f.a)
q=f.r
x=q==="parceiros"&&C.f.b3(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a1(0,$.cC(),y.B).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return A.d(B.aQV(p,s),$async$GF)
case 11:r=h
if(d.e!=null){p=r.a
A.ar(d).aU("/chat/"+p,r,y.X)}x=1
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
return A.d(G.BG(d,e,p),$async$GF)
case 16:case 15:x=1
break
case 13:x=17
return A.d(e.a1(0,$.d4V().gf_(),y.e),$async$GF)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=B.dm9(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a7F||l==null?18:19
break
case 18:x=20
return A.d(A.bG(null,new B.cwL(f,l),d,!0,!1,null,y.N),$async$GF)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return A.d(j.Et(f.a),$async$GF)
case 24:if(d.e!=null)d.S(y.q).f.a7(A.cB(null,null,null,null,null,C.z,null,A.i('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.X,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)B.cXl(d,l,m)
case 22:x=1
break
case 19:if(q===C.a7E)j.V8(f.a)
B.cXl(d,l,m)
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$GF,w)},
cDl:function cDl(){},
cwL:function cwL(d,e){this.a=d
this.b=e},
cwI:function cwI(d){this.a=d},
cwJ:function cwJ(d){this.a=d},
cwK:function cwK(d){this.a=d},
cRC(d,e){return new B.E6(e,d,null)},
E6:function E6(d,e,f){this.e=d
this.f=e
this.a=f},
aQV(d,e){var x=0,w=A.n(y.R),v,u,t,s,r,q,p
var $async$aQV=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.R().b
p===$&&A.b()
x=3
return A.d(p.T("proposals").aG(0,"partner_id, partner_profiles(business_name, cover_photo_url)").X("id",d).dS(0),$async$aQV)
case 3:u=g
p=J.a5(u)
t=A.a2(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return A.d(E.vK(t,e),$async$aQV)
case 4:r=g
p=s==null
q=A.L(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new F.hR(r,q,A.L(p?null:J.h(s,"cover_photo_url")),e,t,null,null,0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aQV,w)}},D,H,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[181]
F=c[182]
G=c[127]
B=a.updateHolder(c[107],B)
D=c[433]
H=c[413]
I=c[130]
K=c[377]
L=c[315]
B.E6.prototype={
bh(d,e){var x,w,v,u,t=null,s=this.e,r=e.L($.OY().$1(s.a),y.D),q=r.gv(r)
r=q==null
if(r)x=t
else{w=q.w
x=w!=null?new A.ac("DESDE",A.b6(w,!1)):K.a5j}w=s.c
w=w==null?A.F(t,D.aBb,C.r,C.dY,t,t,t,t,t,t,t,t,t):A.kh(w,t,C.bW,t,t,t,t)
r=r?t:q.e
if(r==null)r=""
v=A.a([],y.s)
u=s.e
if(u!=null)v.push(u)
return A.cG8(t,v,w,this.f,x,r,s.b)}}
var z=a.updateTypes([])
B.ctz.prototype={
$1(d){return d.a===this.a},
$S:1415}
B.ctA.prototype={
$1(d){return d.b},
$S:1416}
B.cDl.prototype={
$1(d){return this.aEU(d)},
aEU(d){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&A.b()
x=7
return A.d(p.T("task_templates").cl(0),$async$$1)
case 7:s=f
r=A.A(y.N,y.c)
for(p=J.az(s),o=y.P;p.t();){q=p.gG(p)
J.bb(r,A.a2(J.h(o.a(q),"id")),A.cTN(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bEh
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:1417}
B.cwL.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=A.a([A.i(w.e,x,x,x,C.a8M,x,x,x)],v)
w=w.f
if(C.f.D(w==null?"":w).length!==0){w.toString
C.e.p(u,A.a([C.a1,A.i(C.f.D(w),x,x,x,D.c0Y,x,x,x)],v))}u.push(C.bD)
u.push(A.wz(D.aBH,D.c72,new B.cwI(d),x))
if(this.b!=null)C.e.p(u,A.a([C.a1,A.ia(L.a9_,new B.cwJ(d),x)],v))
u.push(C.au)
u.push(A.ci(C.rC,x,x,new B.cwK(d),x,x))
return A.bB(!0,new A.X(C.Mk,A.G(u,C.I,C.l,C.U,0,C.w),x),x,C.Z,!0)},
$S:49}
B.cwI.prototype={
$0(){return A.av(this.a,!1).aD("done")},
$S:0}
B.cwJ.prototype={
$0(){return A.av(this.a,!1).aD("open")},
$S:0}
B.cwK.prototype={
$0(){return A.av(this.a,!1).bS()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bv,[B.ctz,B.ctA,B.cDl,B.cwL])
x(A.bM,[B.cwI,B.cwJ,B.cwK])
w(B.E6,A.eD)})()
A.bt(b.typeUniverse,JSON.parse('{"E6":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("aE<f6?>"),R:x("hR"),e:x("E<a3<c,oi>>"),s:x("r<c>"),p:x("r<e>"),r:x("a3<c,oi>"),P:x("a3<c,@>"),U:x("ei<+(c,c),c>"),N:x("c"),I:x("ph"),c:x("oi"),B:x("e8"),A:x("a4<+(c,c)>"),q:x("dF"),h:x("a3<c,@>?"),X:x("J?"),H:x("~")}})();(function constants(){D.aBb=new A.b3(C.eg,null,C.be,null,null,null)
D.aBH=new A.b3(C.de,null,null,null,null,null)
D.bEh=new A.c6(C.cE,[],A.w("c6<c,oi>"))
D.c0Y=new A.H(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c72=new A.C("Marcar como feita",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dHl","d4V",()=>A.eE(new B.cDl(),null,!1,null,null,y.r))})()};
(a=>{a["8WE7XiETokN4eV0upiyBjiNMbVg="]=a.current})($__dart_deferred_initializers__);