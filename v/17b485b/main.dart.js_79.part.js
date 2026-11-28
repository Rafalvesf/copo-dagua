((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
dmz(d){return new C.CT(d,null)},
CT:function CT(d,e){this.c=d
this.a=e},
abC:function abC(d){var _=this
_.d=null
_.e=!0
_.r=_.f=!1
_.w=null
_.x=d
_.c=_.a=null},
bIm:function bIm(d,e){this.a=d
this.b=e},
bIn:function bIn(d){this.a=d},
bIo:function bIo(d){this.a=d},
bIp:function bIp(d){this.a=d},
bIq:function bIq(d){this.a=d},
bIr:function bIr(d){this.a=d},
bIl:function bIl(){},
bIs:function bIs(d,e){this.a=d
this.b=e}},D,E,F,G,H,I
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[5],C)
D=c[339]
E=c[150]
F=c[159]
G=c[338]
H=c[326]
I=c[340]
C.CT.prototype={
R(){return new C.abC(new A.aE(B.aj,$.aa()))}}
C.abC.prototype={
ac(){this.ao()
this.Qv()},
m(){var x=this.x
x.Y$=$.aa()
x.W$=0
this.a6()},
Qv(){var x=0,w=A.n(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qv=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=$.Q().b
q===$&&A.b()
p=y.b
m=y.i
x=7
return A.d(q.aK("get_admin_message",A.R(["p_id",s.a.c],y.w,p),p),$async$Qv)
case 7:r=m.a(e)
if(s.c==null){x=1
break}s.p(new C.bIm(s,r))
u=2
x=6
break
case 4:u=3
n=t.pop()
if(s.c!=null)s.p(new C.bIn(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Qv,w)},
Qw(){var x=0,w=A.n(y.v),v,u=2,t=[],s=this,r,q,p,o,n
var $async$Qw=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:o=B.f.B(s.x.a.a)
if(J.aQ(o)<2){s.p(new C.bIo(s))
x=1
break}s.p(new C.bIp(s))
u=4
r=$.Q().b
r===$&&A.b()
q=y.b
x=7
return A.d(r.aK("reply_admin_message",A.R(["p_id",s.a.c,"p_body",o],y.w,q),q),$async$Qw)
case 7:if(s.c==null){x=1
break}s.p(new C.bIq(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
if(s.c==null){x=1
break}s.p(new C.bIr(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Qw,w)},
aS9(d){var x,w
if(d==null)x=null
else{w=A.d4(d)
x=w==null?null:w.dP()}if(x==null)return""
w=new C.bIl()
return A.q(w.$1(A.az(x)))+"/"+A.q(w.$1(A.ao(x)))+"/"+A.ax(x)+" \xb7 "+A.q(w.$1(A.ib(x)))+":"+A.q(w.$1(A.hX(x)))},
u(d){var x,w,v,u,t=this,s=null,r="image_url",q=t.d,p=q==null,o=A.C(p?s:J.i(q,"link"))
if(t.e)p=D.bXW
else if(p)p=D.bKZ
else{p=E.cTg(s,20,1)
x=y.u
w=A.a([],x)
v=J.a7(q)
u=A.C(v.h(q,r))
if((u==null?s:u.length!==0)===!0)B.e.n(w,A.a([A.fT(A.W(14),A.k4(A.Z(v.h(q,r)),s,B.bH,s,s,s,s),B.bc),B.aB],x))
u=A.C(v.h(q,"title"))
w.push(A.h(u==null?"":u,s,s,s,s,B.a9,s,s,s))
w.push(B.as)
w.push(A.h(t.aS9(A.C(v.h(q,"created_at"))),s,s,s,s,B.bb,s,s,s))
w.push(B.R)
v=A.C(v.h(q,"body"))
w.push(A.h(v==null?"":v,s,s,s,s,H.zd,s,s,s))
if(o!=null&&o.length!==0)B.e.n(w,A.a([B.a0,A.h5(I.aaI,new C.bIs(d,o),s)],x))
p=A.a([A.x(s,A.A(w,B.G,B.h,B.l),B.r,s,s,p,s,s,s,B.dq,s,s,s),B.bh],x)
if(t.r)p.push(A.x(s,D.ccs,B.r,s,s,new A.I($.ft,s,s,A.W(16),s,s,B.x),s,s,s,B.bg,s,s,s))
else{w=t.w
w=A.cs(s,B.a6,!1,s,!0,B.y,s,A.ct(),t.x,s,s,s,s,s,2,A.iT(s,new A.f4(4,A.W(16),B.px),s,s,s,s,s,s,!0,s,s,s,s,s,w,B.t,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,"Escreve a tua resposta\u2026",s,s,s,s,s,s,s,s,s,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.W,!0,s,!0,s,!1,s,B.aC,s,s,s,s,s,s,2000,s,8,3,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,B.am,s,s,s,s,s,s,s,s,s,s,s,s,!0,B.au,s,B.b_,s,s,s,s)
v=t.f
B.e.n(p,A.a([D.c8A,B.Q,w,B.Q,new A.fW("Enviar resposta",v?s:t.gaSa(),v,s)],x))}p=A.d5(p,s,G.NH,s,s,!1,!1)}return A.cP(s,B.by,A.bD(!0,A.A(A.a([D.bLW,A.a4(p,1)],y.u),B.v,B.h,B.l),s,B.Z,!0),!0,s)}}
var z=a.updateTypes(["F<~>()"])
C.bIm.prototype={
$0(){var x=this.a,w=this.b,v=J.a7(w)
x.d=v.gZ(w)?null:y.y.a(v.gL(w))
x.e=!1},
$S:0}
C.bIn.prototype={
$0(){return this.a.e=!1},
$S:0}
C.bIo.prototype={
$0(){return this.a.w="Escreve a tua resposta."},
$S:0}
C.bIp.prototype={
$0(){var x=this.a
x.f=!0
x.w=null},
$S:0}
C.bIq.prototype={
$0(){var x=this.a
x.f=!1
x.r=!0},
$S:0}
C.bIr.prototype={
$0(){var x=this.a
x.f=!1
x.w="N\xe3o foi poss\xedvel enviar. Tenta outra vez."},
$S:0}
C.bIl.prototype={
$1(d){return B.f.aW(B.j.k(d),2,"0")},
$S:36}
C.bIs.prototype={
$0(){return A.ah(this.a).au(this.b,null,y.q)},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(C.abC.prototype,"gaSa","Qw",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.CT,A.G)
x(C.abC,A.Y)
w(A.bP,[C.bIm,C.bIn,C.bIo,C.bIp,C.bIq,C.bIr,C.bIs])
x(C.bIl,A.bw)})()
A.bn(b.typeUniverse,JSON.parse('{"CT":{"G":[],"e":[],"f":[]},"abC":{"Y":["CT"]}}'))
var y={u:A.w("r<e>"),i:A.w("t<@>"),y:A.w("a5<c,@>"),w:A.w("c"),b:A.w("@"),q:A.w("J?"),v:A.w("~")};(function constants(){D.cbk=new A.D("Esta mensagem j\xe1 n\xe3o est\xe1 dispon\xedvel.",null,null,B.a4,null,null,null,null,null,null,null)
D.bKZ=new A.S(B.fV,D.cbk,null)
D.bLW=new A.lM("Mensagem da \xc0 Nossa!",null,!0,null,20,!0,null)
D.bXW=new F.a9d(2,null)
D.c8A=new A.D("Responder",null,B.kX,null,null,null,null,null,null,null,null)
D.c6N=new A.P(!0,null,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ccs=new A.D("Resposta enviada. A equipa \xc0 Nossa! vai responder-te em breve \u2014 recebes uma notifica\xe7\xe3o.",null,D.c6N,null,null,null,null,null,null,null,null)})()};
(a=>{a["p5hvdwCtSLD9OvyKQEOKuCXT/qU="]=a.current})($__dart_deferred_initializers__);