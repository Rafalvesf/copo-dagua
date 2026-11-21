((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,G,B={
cYn(d){var x=A.i0(new A.el(new A.a4(H.VM,new B.ct5(d),y.A),new B.ct6(),y.U))
return x},
ct5:function ct5(d){this.a=d},
ct6:function ct6(){},
dlK(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=B.cYn(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
cWT(d,e,f){var x,w=A.di(e,0,null)
if(w.gdi(w)==="/partners"){x=w.geN().h(0,"category")
if(x==null)x=f==null?null:f.w
A.ar(d).aV("/partners",new I.SB(x,!1),y.X)
return}A.ar(d).aV(e,null,y.X)},
GI(d,e,f){return B.dsr(d,e,f)},
dsr(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$GI=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a2(0,$.n0().gaW(),y.I)
if(!f.ax)j.MX(f.a)
q=f.r
x=q==="parceiros"&&C.f.b5(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a2(0,$.cB(),y.B).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return A.d(B.aR_(p,s),$async$GI)
case 11:r=h
if(d.e!=null){p=r.a
A.ar(d).aV("/chat/"+p,r,y.X)}x=1
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
return A.d(G.BH(d,e,p),$async$GI)
case 16:case 15:x=1
break
case 13:x=17
return A.d(e.a2(0,$.d4s().gf1(),y.e),$async$GI)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=B.dlK(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a7N||l==null?18:19
break
case 18:x=20
return A.d(A.c8(null,new B.cwj(f,l),d,!0,!1,null,y.N),$async$GI)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return A.d(j.Ep(f.a),$async$GI)
case 24:if(d.e!=null)d.S(y.q).f.a7(A.cz(null,null,null,null,null,C.z,null,A.i('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)B.cWT(d,l,m)
case 22:x=1
break
case 19:if(q===C.a7M)j.V2(f.a)
B.cWT(d,l,m)
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$GI,w)},
cCU:function cCU(){},
cwj:function cwj(d,e){this.a=d
this.b=e},
cwg:function cwg(d){this.a=d},
cwh:function cwh(d){this.a=d},
cwi:function cwi(d){this.a=d},
cR9(d,e){return new B.Ea(e,d,null)},
Ea:function Ea(d,e,f){this.e=d
this.f=e
this.a=f},
aR_(d,e){var x=0,w=A.n(y.R),v,u,t,s,r,q,p
var $async$aR_=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.S().b
p===$&&A.b()
x=3
return A.d(p.T("proposals").aI(0,"partner_id, partner_profiles(business_name, cover_photo_url)").X("id",d).e_(0),$async$aR_)
case 3:u=g
p=J.a5(u)
t=A.a2(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return A.d(E.vG(t,e),$async$aR_)
case 4:r=g
p=s==null
q=A.L(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new F.hS(r,q,A.L(p?null:J.h(s,"cover_photo_url")),e,t,null,null,0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aR_,w)}},D,H,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[184]
F=c[185]
G=c[129]
B=a.updateHolder(c[108],B)
D=c[443]
H=c[422]
I=c[132]
K=c[387]
L=c[322]
B.Ea.prototype={
bk(d,e){var x,w,v,u,t=null,s=this.e,r=e.M($.OY().$1(s.a),y.D),q=r.gv(r)
r=q==null
if(r)x=t
else{w=q.w
x=w!=null?new A.af("DESDE",A.bh(w,!1)):K.a5n}w=s.c
w=w==null?A.G(t,D.aAV,C.t,C.dY,t,t,t,t,t,t,t,t,t):A.kY(w,t,C.bZ,t,t,t,t)
r=r?t:q.e
if(r==null)r=""
v=A.a([],y.s)
u=s.e
if(u!=null)v.push(u)
return A.cFH(t,v,w,this.f,x,r,s.b)}}
var z=a.updateTypes([])
B.ct5.prototype={
$1(d){return d.a===this.a},
$S:1417}
B.ct6.prototype={
$1(d){return d.b},
$S:1418}
B.cCU.prototype={
$1(d){return this.aEV(d)},
aEV(d){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.S().b
p===$&&A.b()
x=7
return A.d(p.T("task_templates").cq(0),$async$$1)
case 7:s=f
r=A.A(y.N,y.c)
for(p=J.aA(s),o=y.P;p.t();){q=p.gF(p)
J.b9(r,A.a2(J.h(o.a(q),"id")),A.cTk(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bDV
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:1419}
B.cwj.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=A.a([A.i(w.e,x,x,x,C.a8S,x,x,x)],v)
w=w.f
if(C.f.D(w==null?"":w).length!==0){w.toString
C.e.p(u,A.a([C.a0,A.i(C.f.D(w),x,x,x,D.c0q,x,x,x)],v))}u.push(C.bu)
u.push(A.wx(D.aBp,D.c6y,new B.cwg(d),x))
if(this.b!=null)C.e.p(u,A.a([C.a0,A.ia(L.a94,new B.cwh(d),x)],v))
u.push(C.ax)
u.push(A.cl(C.rz,x,x,new B.cwi(d),x,x))
return A.bB(!0,new A.U(C.Mn,A.I(u,C.I,C.l,C.W,0,C.w),x),x,C.X,!0)},
$S:50}
B.cwg.prototype={
$0(){return A.av(this.a,!1).aG("done")},
$S:0}
B.cwh.prototype={
$0(){return A.av(this.a,!1).aG("open")},
$S:0}
B.cwi.prototype={
$0(){return A.av(this.a,!1).bS()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bw,[B.ct5,B.ct6,B.cCU,B.cwj])
x(A.bL,[B.cwg,B.cwh,B.cwi])
w(B.Ea,A.eA)})()
A.bt(b.typeUniverse,JSON.parse('{"Ea":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.v
return{D:x("aF<f2?>"),R:x("hS"),e:x("E<a3<c,oj>>"),s:x("r<c>"),p:x("r<e>"),r:x("a3<c,oj>"),P:x("a3<c,@>"),U:x("el<+(c,c),c>"),N:x("c"),I:x("pj"),c:x("oj"),B:x("e8"),A:x("a4<+(c,c)>"),q:x("dF"),h:x("a3<c,@>?"),X:x("J?"),H:x("~")}})();(function constants(){D.aAV=new A.bi(C.ek,null,C.bd,null,null,null)
D.aBp=new A.bi(C.db,null,null,null,null,null)
D.bDV=new A.c5(C.cH,[],A.v("c5<c,oj>"))
D.c0q=new A.F(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6y=new A.C("Marcar como feita",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dGU","d4s",()=>A.eB(new B.cCU(),null,!1,null,null,y.r))})()};
(a=>{a["PJYkXL8jE2wrpUCILTD8hLa1zJA="]=a.current})($__dart_deferred_initializers__);