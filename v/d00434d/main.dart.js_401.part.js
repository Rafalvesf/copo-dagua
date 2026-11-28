((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,H,B={
drg(d){return new B.EY(d)},
EY:function EY(d){this.x=d
this.b=null},
bl5:function bl5(d){this.a=d},
drh(d){return new B.a5F(d,null)},
a5F:function a5F(d,e){this.d=d
this.a=e},
afr:function afr(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
cdn:function cdn(d){this.a=d},
cdm:function cdm(d,e){this.a=d
this.b=e},
cdl:function cdl(d,e){this.a=d
this.b=e},
cdp:function cdp(d){this.a=d},
cdq:function cdq(d,e,f){this.a=d
this.b=e
this.c=f},
cds:function cds(){},
cdr:function cdr(d,e){this.a=d
this.b=e},
cdo:function cdo(d,e,f){this.a=d
this.b=e
this.c=f},
cdt:function cdt(d){this.a=d},
afB:function afB(d,e){this.c=d
this.a=e},
aKl:function aKl(){var _=this
_.c=_.a=_.e=_.d=null},
chf:function chf(d,e){this.a=d
this.b=e},
chd:function chd(d,e){this.a=d
this.b=e},
che:function che(d,e){this.a=d
this.b=e},
chg:function chg(){}},F,D,G,E,I,L,M
J=c[1]
A=c[0]
C=c[2]
K=c[153]
H=c[234]
B=a.updateHolder(c[37],B)
F=c[351]
D=c[119]
G=c[83]
E=c[229]
I=c[134]
L=c[116]
M=c[231]
B.EY.prototype={
d5(){A.jh(this.gNN(this),y.H)
return E.Ly},
m8(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$m8=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.sa3(0,t.ga3(0).io(!0))
s=$.T()
r=s.b
r===$&&A.b()
q=t.x
n=G
m=!1
l=J
x=2
return A.d(r.R("messages").cj(0).X("conversation_id",q).dl(0,"created_at",!0),$async$m8)
case 2:t.sa3(0,new n.kg(m,l.d5(f,new B.bl5(t),y.y).by(0)))
v=4
r=y.z
x=7
return A.d(s.b.aS("mark_conversation_read",A.S(["p_conversation_id",q],y.N,r),r),$async$m8)
case 7:A.eP(t).aj($.cZK())
v=1
x=6
break
case 4:v=3
o=u.pop()
x=6
break
case 3:x=1
break
case 6:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$m8,w)},
mm(d){return this.aIS(d)},
aIS(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$mm=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=C.f.C(d)
if(p.length===0){x=1
break}t=$.T()
s=t.b
s===$&&A.b()
s=s.R("messages")
t=t.b.gbD().e.a
r=y.N
x=3
return A.d(s.d8(0,A.S(["conversation_id",u.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cj(0).dP(0),$async$mm)
case 3:q=f
r=u.ga3(0)
t=A.U(u.ga3(0).b,y.y)
t.push(u.a5f(q))
u.sa3(0,r.F7(t))
case 1:return A.l(v,w)}})
return A.m($async$mm,w)},
mU(d){return this.aIN(d)},
aIN(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mU=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.T()
s=t.b
s===$&&A.b()
s=s.R("messages")
t=t.b.gbD().e.a
x=2
return A.d(s.d8(0,A.S(["conversation_id",v.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cj(0).dP(0),$async$mU)
case 2:u=f
t=v.ga3(0)
s=A.U(v.ga3(0).b,y.y)
s.push(v.a5f(u))
v.sa3(0,t.F7(s))
return A.l(null,w)}})
return A.m($async$mU,w)},
jV(d,e){return this.bsv(0,e)},
bsv(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jV=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&A.b()
x=2
return A.d(p.aS("delete_message",A.S(["p_message_id",e],y.N,y.z),y.H),$async$jV)
case 2:p=v.ga3(0)
u=A.a([],y.t)
for(t=v.ga3(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa3(0,p.F7(u))
return A.l(null,w)}})
return A.m($async$jV,w)},
a5f(d){var x,w,v=J.a7(d),u=A.a2(v.h(d,"id")),t=A.a2(v.h(d,"conversation_id")),s=J.o(v.h(d,"sender_role"),"partner"),r=A.E(v.h(d,"body")),q=A.E(v.h(d,"attachment_url")),p=A.E(v.h(d,"attachment_type")),o=A.E(v.h(d,"attachment_name")),n=A.da(A.a2(v.h(d,"created_at"))),m=A.E(v.h(d,"proposal_id")),l=A.E(v.h(d,"proposal_title")),k=A.aL(v.h(d,"proposal_price"))
if(k==null)k=null
x=A.aL(v.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dX(v.h(d,"is_quote_request_notice"))
return G.d_W(o,p,q,A.E(v.h(d,"change_request_id")),t,s,u,w===!0,x,m,k,l,n,r)}}
B.a5F.prototype={
P(){return new B.afr(new A.aJ(C.ap,$.ad()),A.nN(null,0,null,null))}}
B.afr.prototype={
m(){var x=this.w
x.Z$=$.ad()
x.W$=0
this.x.m()
this.a6()},
a5g(){$.az.k4$.push(new B.cdn(this))},
Tr(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Tr=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.C(s).length===0){x=1
break}t.j6(0,C.j5)
t=u.gS()
t.a0(0,$.CL().$1("c:"+u.a.d.a).gaX(),y.M).d3(0)
x=3
return A.d(t.a0(0,$.aW0().$1(u.a.d.a).gaX(),y.Q).mm(s),$async$Tr)
case 3:u.a5g()
case 1:return A.l(v,w)}})
return A.m($async$Tr,w)},
Ke(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Ke=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(D.rH(q),$async$Ke)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gS().a0(0,$.aW0().$1(s.a.d.a).gaX(),y.Q).mU(r),$async$Ke)
case 8:s.a5g()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.O(y.q).f.a4(E.a9q)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ke,w)},
apl(d,e,f){var x=null
if(!d||e.Q)return f
return A.db(x,f,C.a0,!1,x,x,x,x,x,x,x,new B.cdm(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.b_)},
u(d){var x,w,v,u=this,t=null,s=u.gS(),r=$.aW0(),q=y.n,p=s.H(r.$1(u.a.d.a),q)
s.pu(r.$1(u.a.d.a),new B.cdp(u),q)
q=u.a.d
q=A.bC(!1,D.cSj(q.d,t,q.b,t,new B.cdq(u,d,p),t,!1),t,C.Z,!1)
if(p.a&&p.b.length===0)r=M.yW
else{r=u.x
x=p.b
w=x.length
x=G.dbl(new B.cdr(u,d),new B.cds(),x,t)
v=A.a8(x).i("cW<1>")
x=A.U(new A.cW(x,v),v.i("aZ.E"))
r=new D.Kf(r,w,A.cX(x,r,C.bj,t,t,!0,C.a2,!1),t)}return A.cO(t,C.lc,A.B(A.a([q,A.a4(r,1),A.kh(new D.R_(D.cY_(s.H($.CL().$1("c:"+u.a.d.a),y.a)),t),C.aa,!0),new D.QY(u.w,u.gbbZ(),u.gbbY(),"Escreve uma mensagem",new B.cdt(u),t)],y.p),C.w,C.i,C.m,0,C.v),!0,t)}}
B.afB.prototype={
P(){return new B.aKl()}}
B.aKl.prototype={
ai(){this.aA()
var x=this.a.c.w
if(x==null)return
L.PS(x).b7(new B.chf(this,x),y.P).es(new B.chg())},
u(d){var x,w,v,u,t,s,r,q=null,p=this.a.c,o=this.d
A:{if("accepted"===o){x=this.e
B:{if("deposit_paid"===x||"final_due"===x){w=F.bRM
break B}if("paid"===x||"completed"===x){w=E.a7h
break B}if("cancelled"===x){w=E.a7n
break B}w=F.bSP
break B}break A}if("rejected"===o||"declined"===o){w=E.a7a
break A}if("expired"===o){w=F.bRX
break A}w=F.bTp
break A}v=w.a
u=q
t=w.b
u=t
s=v
w=p.x
if(C.f.C(w==null?"":w).length===0)w="Proposta"
else{w.toString
w=C.f.C(w)}r=o==null||o==="sent"?"Recebes o total menos a taxa de servi\xe7o.":q
return G.cSk(E.WX,p.z,"PROPOSTA",q,r,p.y,s,q,w,u)}}
var z=a.updateTypes(["F<~>()","kg()","jz(@)","~(kg?,kg)","x(jz)","e(jz,x)","EY(c)"])
B.bl5.prototype={
$1(d){return this.a.a5f(y.b.a(d))},
$S:z+2}
B.cdn.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.iI(0,C.cq,C.lA)},
$S:6}
B.cdm.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(I.PO(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(I.Q0(s,new B.cdl(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.cdl.prototype={
$0(){var x=this.a
return x.gS().a0(0,$.aW0().$1(x.a.d.a).gaX(),y.Q).jV(0,this.b.a)},
$S:1}
B.cdp.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a5g()},
$S:z+3}
B.cdq.prototype={
$0(){var x,w,v,u,t,s=this.a.gS(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("cW<1>"),x=new A.cW(x,w),x=new A.ak(x,x.gA(0),w.i("ak<aZ.E>")),w=w.i("aZ.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ay:t
r.push(new D.Bb(u,v==null?"":v,null,null))}}return D.a_f(this.b,s,!1,H.rO,r)},
$S:0}
B.cds.prototype={
$1(d){return d.d},
$S:z+4}
B.cdr.prototype={
$2(d,e){var x,w=null,v=d.at
if(v!=null){x=d.ax
if(x==null)x="file"
x=this.a.apl(e,d,new D.QW(v,x,d.ay,e,w))
v=x}else{v=d.as
if(v!=null)v=new G.QU(v,e,w,w)
else if(d.w!=null)v=new B.afB(d,w)
else{v=this.a
x=d.e
if(e)v=v.apl(!0,d,new D.zI(x==null?"":x,!0,w,w))
else v=A.db(w,new D.zI(x==null?"":x,!1,w,w),C.a0,!1,w,w,w,w,w,w,w,new B.cdo(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.b_)}}return v},
$S:z+5}
B.cdo.prototype={
$0(){return K.wv(this.b,this.a.gS(),!1,null,null,H.rO,this.c.a)},
$S:0}
B.cdt.prototype={
$1(d){var x,w,v=this.a,u=v.gS(),t=u.a0(0,$.b8(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.C(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.C(s)}else{s=s?null:t.b
w=s==null?"":s}u.a0(0,$.CL().$1("c:"+v.a.d.a).gaX(),y.M).acX(w)},
$S:3}
B.chf.prototype={
$1(d){return this.aEN(d)},
aEN(d){var x=0,w=A.n(y.P),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null){x=1
break}s.p(new B.chd(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(G.PR(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.p(new B.che(s,t))
case 4:case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:473}
B.chd.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.che.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.chg.prototype={
$1(d){},
$S:13};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dIS","drg",6)
var u
w(u=B.EY.prototype,"giL","d5",1)
v(u,"gNN","m8",0)
w(u=B.afr.prototype,"gbbZ","Tr",0)
w(u,"gbbY","Ke",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.EY,A.fc)
w(A.bw,[B.bl5,B.cdn,B.cds,B.cdt,B.chf,B.chg])
x(B.a5F,A.dB)
x(B.afr,A.dx)
w(A.bR,[B.cdm,B.cdl,B.cdq,B.cdo,B.chd,B.che])
w(A.cQ,[B.cdp,B.cdr])
x(B.afB,A.G)
x(B.aKl,A.a_)})()
A.bp(b.typeUniverse,JSON.parse('{"EY":{"fc":["kg"]},"a5F":{"G":[],"e":[],"f":[]},"afB":{"G":[],"e":[],"f":[]},"afr":{"a_":["a5F"]},"aKl":{"a_":["afB"]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cE"),y:x("jz"),n:x("kg"),t:x("r<jz>"),Y:x("r<Bb>"),p:x("r<e>"),a:x("t<c>"),b:x("a5<c,@>"),P:x("bx"),Q:x("EY"),N:x("c"),M:x("w6"),q:x("dq"),z:x("@"),T:x("c?"),H:x("~")}})();(function constants(){F.bRM=new A.a3("Aceite \xb7 sinal recebido",E.pN)
F.bRX=new A.a3("Expirou",E.lq)
F.bSP=new A.a3("Aceite \xb7 \xe0 espera do sinal",E.pM)
F.bTp=new A.a3("Enviada \xb7 \xe0 espera da resposta",E.lq)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVy","aW0",()=>E.L7.$3$1(B.dIS(),y.Q,y.n,y.N))})()};
(a=>{a["HyTZIqgZ7IuLN9RNHD52gmzNiWs="]=a.current})($__dart_deferred_initializers__);