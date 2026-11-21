((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,G,B={
cRQ(d){var x=A.hD(new A.eN(new A.a2(H.Vd,new B.cnA(d),y.A),new B.cnB(),y.U))
return x},
cnA:function cnA(d){this.a=d},
cnB:function cnB(){},
de3(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=B.cRQ(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
cQr(d,e,f){var x,w=A.e7(e,0,null)
if(w.gdz(w)==="/partners"){x=w.geB().h(0,"category")
if(x==null)x=f==null?null:f.w
A.ap(d).aQ("/partners",new I.Rb(x,!1),y.X)
return}A.ap(d).aQ(e,null,y.X)},
FN(d,e,f){return B.dkJ(d,e,f)},
dkJ(d,e,f){var x=0,w=A.m(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$FN=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a2(0,$.mz().gaR(),y.I)
if(!f.ax)j.M8(f.a)
q=f.r
x=q==="parceiros"&&C.f.b9(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a2(0,$.cw(),y.B).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return A.d(B.aNJ(p,s),$async$FN)
case 11:r=h
if(d.e!=null){p=r.a
A.ap(d).aQ("/chat/"+p,r,y.X)}x=1
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
return A.d(F.xK(d,e,p),$async$FN)
case 16:case 15:x=1
break
case 13:x=17
return A.d(e.a2(0,$.cYX().geD(),y.e),$async$FN)
case 17:n=h
p=f.c
m=p==null?null:J.f(n,p)
l=m==null?null:m.x
if(l==null)l=B.de3(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a78||l==null?18:19
break
case 18:x=20
return A.d(A.cx(null,new B.cqJ(f,l),!0,d,!0,!1,null,y.N),$async$FN)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return A.d(j.DK(f.a),$async$FN)
case 24:if(d.e!=null)d.R(y.q).f.a3(A.cr(null,null,null,null,null,C.A,null,A.h('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.X,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)B.cQr(d,l,m)
case 22:x=1
break
case 19:if(q===C.a77)j.U8(f.a)
B.cQr(d,l,m)
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$FN,w)},
cxn:function cxn(){},
cqJ:function cqJ(d,e){this.a=d
this.b=e},
cqG:function cqG(d){this.a=d},
cqH:function cqH(d){this.a=d},
cqI:function cqI(d){this.a=d},
cLd(d,e){return new B.Dl(e,d,null)},
Dl:function Dl(d,e,f){this.e=d
this.f=e
this.a=f},
aNJ(d,e){var x=0,w=A.m(y.R),v,u,t,s,r,q,p
var $async$aNJ=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:p=$.Q().b
p===$&&A.b()
x=3
return A.d(p.P("proposals").az(0,"partner_id, partner_profiles(business_name, cover_photo_url)").W("id",d).dH(0),$async$aNJ)
case 3:u=g
p=J.a3(u)
t=A.a1(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return A.d(E.tr(t,e),$async$aNJ)
case 4:r=g
p=s==null
q=A.I(p?null:J.f(s,"business_name"))
if(q==null)q="Parceiro"
v=new G.hJ(r,q,A.I(p?null:J.f(s,"cover_photo_url")),e,t,null,null,0)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$aNJ,w)}},D,H,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[183]
F=c[165]
G=c[184]
B=a.updateHolder(c[107],B)
D=c[440]
H=c[420]
I=c[129]
K=c[385]
L=c[325]
B.Dl.prototype={
bc(d,e){var x,w,v,u,t=null,s=this.e,r=e.M($.NL().$1(s.a),y.D),q=r.gv(r)
r=q==null
if(r)x=t
else{w=q.w
x=w!=null?new A.a4("DESDE",A.aT(w,!1)):K.a4N}w=s.c
w=w==null?A.B(t,D.aAk,C.r,C.dU,t,t,t,t,t,t,t,t,t):A.k5(w,t,C.bW,t,t,t,t)
r=r?t:q.e
if(r==null)r=""
v=A.a([],y.s)
u=s.e
if(u!=null)v.push(u)
return A.cA0(t,v,w,this.f,x,r,s.b)}}
var z=a.updateTypes([])
B.cnA.prototype={
$1(d){return d.a===this.a},
$S:1339}
B.cnB.prototype={
$1(d){return d.b},
$S:1340}
B.cxn.prototype={
$1(d){return this.aCA(d)},
aCA(d){var x=0,w=A.m(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=A.i(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.P("task_templates").cf(0),$async$$1)
case 7:s=f
r=A.K(y.N,y.c)
for(p=J.ax(s),o=y.P;p.t();){q=p.gG(p)
J.bo(r,A.a1(J.f(o.a(q),"id")),A.cN7(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bDs
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$1,w)},
$S:1341}
B.cqJ.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=A.a([A.h(w.e,x,x,x,C.a8e,x,x,x)],v)
w=w.f
if(C.f.D(w==null?"":w).length!==0){w.toString
C.e.q(u,A.a([C.Z,A.h(C.f.D(w),x,x,x,D.c0k,x,x,x)],v))}u.push(C.bD)
u.push(A.w0(D.aAQ,D.c6y,new B.cqG(d),x))
if(this.b!=null)C.e.q(u,A.a([C.Z,A.h8(L.a8r,new B.cqH(d),x)],v))
u.push(C.av)
u.push(A.cj(C.rq,x,x,new B.cqI(d),x,x))
return A.bA(!0,new A.R(C.LT,A.D(u,C.J,C.j,C.V,0,C.w),x),x,C.Y,!0)},
$S:48}
B.cqG.prototype={
$0(){return A.ar(this.a,!1).ap("done")},
$S:0}
B.cqH.prototype={
$0(){return A.ar(this.a,!1).ap("open")},
$S:0}
B.cqI.prototype={
$0(){return A.ar(this.a,!1).bL()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bq,[B.cnA,B.cnB,B.cxn,B.cqJ])
x(A.bI,[B.cqG,B.cqH,B.cqI])
w(B.Dl,A.es)})()
A.bj(b.typeUniverse,JSON.parse('{"Dl":{"F":[],"e":[]}}'))
var y=(function rtii(){var x=A.u
return{D:x("aA<eZ?>"),R:x("hJ"),e:x("G<a6<c,nU>>"),s:x("q<c>"),p:x("q<e>"),r:x("a6<c,nU>"),P:x("a6<c,@>"),U:x("eN<+(c,c),c>"),N:x("c"),I:x("oU"),c:x("nU"),B:x("e1"),A:x("a2<+(c,c)>"),q:x("dv"),h:x("a6<c,@>?"),X:x("H?"),H:x("~")}})();(function constants(){D.aAk=new A.aZ(C.ee,null,C.bd,null,null,null)
D.aAQ=new A.aZ(C.da,null,null,null,null,null)
D.bDs=new A.c6(C.cO,[],A.u("c6<c,nU>"))
D.c0k=new A.E(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6y=new A.z("Marcar como feita",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dxn","cYX",()=>A.eu(new B.cxn(),null,!1,null,null,y.r))})()};
(a=>{a["s7DojORDr6enBgCLDqWdmJgszpY="]=a.current})($__dart_deferred_initializers__);