((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,G,B={
cZ0(d){var x=A.i_(new A.ej(new A.a4(H.VN,new B.ctM(d),y.A),new B.ctN(),y.U))
return x},
ctM:function ctM(d){this.a=d},
ctN:function ctN(){},
dmn(d){var x,w
A:{x="/partners"
if("orcamento"===d){x="/budget"
break A}if("convidados"===d){x="/guests"
break A}if("lugares"===d){x="/seating"
break A}if("parceiros"===d)break A
if("pagamentos"===d){x="/bookings"
break A}if("programa"===d){x="/guest-page"
break A}if(d!=null)w=B.cZ0(d)!=null
else w=!1
if(w)break A
x=null
break A}return x},
cXx(d,e,f){var x,w=A.dm(e,0,null)
if(w.gdi(w)==="/partners"){x=w.geL().h(0,"category")
if(x==null)x=f==null?null:f.w
A.ar(d).aU("/partners",new I.SJ(x,!1),y.X)
return}A.ar(d).aU(e,null,y.X)},
GG(d,e,f){return B.dt6(d,e,f)},
dt6(d,e,f){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$GG=A.j(function(g,h){if(g===1){t.push(h)
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
return A.d(B.aQW(p,s),$async$GG)
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
return A.d(G.BH(d,e,p),$async$GG)
case 16:case 15:x=1
break
case 13:x=17
return A.d(e.a1(0,$.d57().gf_(),y.e),$async$GG)
case 17:n=h
p=f.c
m=p==null?null:J.h(n,p)
l=m==null?null:m.x
if(l==null)l=B.dmn(q)
if(d.e==null){x=1
break}q=f.CW
x=q===C.a7K||l==null?18:19
break
case 18:x=20
return A.d(A.bG(null,new B.cwY(f,l),d,!0,!1,null,y.N),$async$GG)
case 20:k=h
if(d.e==null){x=1
break}x=k==="done"?21:23
break
case 21:x=24
return A.d(j.Et(f.a),$async$GG)
case 24:if(d.e!=null)d.R(y.q).f.a7(A.cB(null,null,null,null,null,C.z,null,A.i('"'+f.e+'" feita.',null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=22
break
case 23:if(k==="open"&&l!=null)B.cXx(d,l,m)
case 22:x=1
break
case 19:if(q===C.a7J)j.V8(f.a)
B.cXx(d,l,m)
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$GG,w)},
cDy:function cDy(){},
cwY:function cwY(d,e){this.a=d
this.b=e},
cwV:function cwV(d){this.a=d},
cwW:function cwW(d){this.a=d},
cwX:function cwX(d){this.a=d},
cRO(d,e){return new B.E7(e,d,null)},
E7:function E7(d,e,f){this.e=d
this.f=e
this.a=f},
aQW(d,e){var x=0,w=A.n(y.R),v,u,t,s,r,q,p
var $async$aQW=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.R().b
p===$&&A.b()
x=3
return A.d(p.S("proposals").aG(0,"partner_id, partner_profiles(business_name, cover_photo_url)").X("id",d).dT(0),$async$aQW)
case 3:u=g
p=J.a5(u)
t=A.a2(p.h(u,"partner_id"))
s=y.h.a(p.h(u,"partner_profiles"))
x=4
return A.d(E.vJ(t,e),$async$aQW)
case 4:r=g
p=s==null
q=A.L(p?null:J.h(s,"business_name"))
if(q==null)q="Parceiro"
v=new F.hR(r,q,A.L(p?null:J.h(s,"cover_photo_url")),e,t,null,null,0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aQW,w)}},D,H,I,K
J=c[1]
A=c[0]
C=c[2]
E=c[181]
F=c[182]
G=c[127]
B=a.updateHolder(c[107],B)
D=c[430]
H=c[411]
I=c[130]
K=c[312]
B.E7.prototype={
bg(d,e){var x,w,v,u,t=null,s=this.e,r=e.L($.P_().$1(s.a),y.D),q=r.gv(r)
r=q==null
if(r)x=t
else{w=q.w
x=w!=null?new A.ab("DESDE",A.b8(w,!1)):D.bNE}w=s.c
w=w==null?A.F(t,D.aBb,C.r,C.dH,t,t,t,t,t,t,t,t,t):A.kf(w,t,C.bW,t,t,t,t)
r=r?t:q.e
if(r==null)r=""
v=A.a([],y.s)
u=s.e
if(u!=null)v.push(u)
return A.cPc(t,v,w,this.f,x,r,s.b)}}
var z=a.updateTypes([])
B.ctM.prototype={
$1(d){return d.a===this.a},
$S:1413}
B.ctN.prototype={
$1(d){return d.b},
$S:1414}
B.cDy.prototype={
$1(d){return this.aET(d)},
aET(d){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$$1=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
p=$.R().b
p===$&&A.b()
x=7
return A.d(p.S("task_templates").cl(0),$async$$1)
case 7:s=f
r=A.A(y.N,y.c)
for(p=J.aA(s),o=y.P;p.t();){q=p.gG(p)
J.ba(r,A.a2(J.h(o.a(q),"id")),A.cTZ(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=D.bEf
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$1,w)},
$S:1415}
B.cwY.prototype={
$1(d){var x=null,w=this.a,v=y.p,u=A.a([A.i(w.e,x,x,x,C.a8S,x,x,x)],v)
w=w.f
if(C.f.D(w==null?"":w).length!==0){w.toString
C.e.p(u,A.a([C.a1,A.i(C.f.D(w),x,x,x,D.c1_,x,x,x)],v))}u.push(C.bE)
u.push(A.wy(D.aBG,D.c75,new B.cwV(d),x))
if(this.b!=null)C.e.p(u,A.a([C.a1,A.ia(K.a95,new B.cwW(d),x)],v))
u.push(C.au)
u.push(A.ci(C.rE,x,x,new B.cwX(d),x,x))
return A.bA(!0,new A.V(C.Ml,A.G(u,C.I,C.l,C.U,0,C.w),x),x,C.Z,!0)},
$S:50}
B.cwV.prototype={
$0(){return A.av(this.a,!1).aC("done")},
$S:0}
B.cwW.prototype={
$0(){return A.av(this.a,!1).aC("open")},
$S:0}
B.cwX.prototype={
$0(){return A.av(this.a,!1).bS()},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bv,[B.ctM,B.ctN,B.cDy,B.cwY])
x(A.bN,[B.cwV,B.cwW,B.cwX])
w(B.E7,A.eC)})()
A.bt(b.typeUniverse,JSON.parse('{"E7":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("aE<eK?>"),R:x("hR"),e:x("E<a3<c,oi>>"),s:x("r<c>"),p:x("r<e>"),r:x("a3<c,oi>"),P:x("a3<c,@>"),U:x("ej<+(c,c),c>"),N:x("c"),I:x("pi"),c:x("oi"),B:x("e8"),A:x("a4<+(c,c)>"),q:x("dF"),h:x("a3<c,@>?"),X:x("J?"),H:x("~")}})();(function constants(){D.aBb=new A.b5(C.eh,null,C.bf,null,null,null)
D.aBG=new A.b5(C.de,null,null,null,null,null)
D.bEf=new A.c6(C.cE,[],A.w("c6<c,oi>"))
D.bNE=new A.ab("","Por or\xe7amento")
D.c1_=new A.H(!0,null,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c75=new A.B("Marcar como feita",null,null,null,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dHy","d57",()=>A.eD(new B.cDy(),null,!1,null,null,y.r))})()};
(a=>{a["5m2diNqnRKOY8VCKN9lJ34LfGqA="]=a.current})($__dart_deferred_initializers__);