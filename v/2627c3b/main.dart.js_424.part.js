((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
d_X(d){var x=A.i2(new A.em(new A.a4(E.VW,new B.cve(d),y.A),new B.cvf(),y.U))
return x},
cve:function cve(d){this.a=d},
cvf:function cvf(){},
doZ(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=B.d_X(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
cZt(d,e,f){var x,w=A.dl(e,0,null)
if(w.gdi(w)==="/partners"){x=w.geN().h(0,"category")
if(x==null)x=f==null?null:f.w
A.ar(d).aW("/partners",new F.SN(x,!1),y.X)
return}A.ar(d).aW(e,null,y.X)},
GO(d,e,f){return B.dvL(d,e,f)},
dvL(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$GO=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:j=e.a2(0,$.mY().gaU(),y.I)
if(!f.ax)j.N9(f.a)
q=f.r
x=q==="parceiros"&&C.f.b3(f.e,"Rever proposta")&&f.ay!=null?3:4
break
case 3:p=e.a2(0,$.cC(),y.B).b
s=p==null?null:p.a
x=s!=null?5:6
break
case 5:u=8
p=f.ay
p.toString
x=11
return A.d(B.aRm(p,s),$async$GO)
case 11:r=h
if(d.e!=null){p=r.a
A.ar(d).aW("/chat/"+p,r,y.X)}x=1
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
return A.d(A.vM(d,e,p),$async$GO)
case 16:case 15:x=1
break
case 13:x=17
return A.d(e.a2(0,$.d7K().geP(),y.e),$async$GO)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=B.doZ(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a7Z||l==null?18:19
break
case 18:x=20
return A.d(A.cB(null,new B.cyu(f,l),!0,d,!0,!1,null,y.N),$async$GO)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return A.d(j.Ev(f.a),$async$GO)
case 24:if(d.e!=null)d.R(y.q).f.a5(A.cA(null,null,null,null,null,C.A,null,A.i('"'+f.e+'" feita.',null,null,null,null,null,null,null,null),null,C.X,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)B.cZt(d,l,m)
case 22:x=1
break
case 19:if(q===C.a7Y)j.Vj(f.a)
B.cZt(d,l,m)
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$GO,w)},
cF9:function cF9(){},
cyu:function cyu(d,e){this.a=d
this.b=e},
cyr:function cyr(d){this.a=d},
cys:function cys(d){this.a=d},
cyt:function cyt(d){this.a=d},
cTH(d,e){return new B.Ee(e,d,null)},
Ee:function Ee(d,e,f){this.e=d
this.f=e
this.a=f},
aRm(d,e){var x=0,w=A.n(y.R),v,u,t,s,r,q,p
var $async$aRm=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.R().b
p===$&&A.b()
x=3
return A.d(p.P("proposals").aG(0,"partner_id, partner_profiles(business_name, cover_photo_url)").V("id",d).dO(0),$async$aRm)
case 3:u=g
p=J.a5(u)
t=A.a2(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return A.d(A.tV(t,e),$async$aRm)
case 4:r=g
p=s==null
q=A.M(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new A.hL(r,q,A.M(p?null:J.h(s,"cover_photo_url")),e,t,null,null,0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aRm,w)}},D,E,F,G
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[105],B)
D=c[415]
E=c[397]
F=c[126]
G=c[301]
B.Ee.prototype={
bg(d,e){var x,w,v,u,t=null,s=this.e,r=e.L($.P4().$1(s.a),y.D),q=r.gv(r)
r=q==null
if(r)x=t
else{w=q.w
x=w!=null?new A.a6("DESDE",A.aX(w,!1)):D.bNV}w=s.c
w=w==null?A.C(t,D.aBq,C.r,C.e_,t,t,t,t,t,t,t,t,t):A.ki(w,t,C.bY,t,t,t,t)
r=r?t:q.e
if(r==null)r=""
v=A.a([],y.s)
u=s.e
if(u!=null)v.push(u)
return A.cR3(t,v,w,this.f,x,r,s.b)}}
var z=a.updateTypes([])
B.cve.prototype={
$1(d){return d.a===this.a},
$S:1426}
B.cvf.prototype={
$1(d){return d.b},
$S:1427}
B.cF9.prototype={
$1(d){return this.aFg(d)},
aFg(d){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&A.b()
x=7
return A.d(p.P("task_templates").cl(0),$async$$1)
case 7:s=f
r=A.B(y.N,y.c)
for(p=J.ay(s),o=y.P;p.t();){q=p.gE(p)
J.bc(r,A.a2(J.h(o.a(q),"id")),A.cVT(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bEy
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:1428}
B.cyu.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=A.a([A.i(w.e,x,x,x,x,C.a93,x,x,x)],v)
w=w.f
if(C.f.D(w==null?"":w).length!==0){w.toString
C.e.p(u,A.a([C.Y,A.i(C.f.D(w),x,x,x,x,D.c1w,x,x,x)],v))}u.push(C.bF)
u.push(A.wD(D.aBW,D.c7H,new B.cyr(d),x))
if(this.b!=null)C.e.p(u,A.a([C.Y,A.hA(G.a9g,new B.cys(d),x)],v))
u.push(C.ar)
u.push(A.cm(C.rD,x,x,new B.cyt(d),x,x))
return A.bE(!0,new A.T(C.Mx,A.E(u,C.J,C.k,C.U,0,C.w),x),x,C.Z,!0)},
$S:50}
B.cyr.prototype={
$0(){return A.at(this.a,!1).ar("done")},
$S:0}
B.cys.prototype={
$0(){return A.at(this.a,!1).ar("open")},
$S:0}
B.cyt.prototype={
$0(){return A.at(this.a,!1).bQ()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bx,[B.cve,B.cvf,B.cF9,B.cyu])
x(A.bS,[B.cyr,B.cys,B.cyt])
w(B.Ee,A.eD)})()
A.bu(b.typeUniverse,JSON.parse('{"Ee":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("aB<ef?>"),R:x("hL"),e:x("G<a3<c,oi>>"),s:x("r<c>"),p:x("r<e>"),r:x("a3<c,oi>"),P:x("a3<c,@>"),U:x("em<+(c,c),c>"),N:x("c"),I:x("pk"),c:x("oi"),B:x("e7"),A:x("a4<+(c,c)>"),q:x("dJ"),h:x("a3<c,@>?"),X:x("K?"),H:x("~")}})();(function constants(){D.aBq=new A.b6(C.eD,null,C.bf,null,null,null)
D.aBW=new A.b6(C.dh,null,null,null,null,null)
D.bEy=new A.c5(C.cI,[],A.w("c5<c,oi>"))
D.bNV=new A.a6("","Por or\xe7amento")
D.c1w=new A.H(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c7H=new A.A("Marcar como feita",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dJt","d7K",()=>A.eE(new B.cF9(),null,!1,null,null,y.r))})()};
(a=>{a["92n3iZbAnsGb5lSs2gRLLtNE5bM="]=a.current})($__dart_deferred_initializers__);