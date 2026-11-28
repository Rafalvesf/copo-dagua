((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,K,H,B={
dqq(d){return new B.EX(d)},
EX:function EX(d){this.x=d
this.b=null},
bkM:function bkM(d){this.a=d},
dqr(d){return new B.a5u(d,null)},
a5u:function a5u(d,e){this.d=d
this.a=e},
afg:function afg(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
ccW:function ccW(d){this.a=d},
ccV:function ccV(d,e){this.a=d
this.b=e},
ccU:function ccU(d,e){this.a=d
this.b=e},
ccY:function ccY(d){this.a=d},
ccZ:function ccZ(d,e,f){this.a=d
this.b=e
this.c=f},
cd0:function cd0(){},
cd_:function cd_(d,e){this.a=d
this.b=e},
ccX:function ccX(d,e,f){this.a=d
this.b=e
this.c=f},
cd1:function cd1(d){this.a=d},
afq:function afq(d,e){this.c=d
this.a=e},
aK2:function aK2(){var _=this
_.c=_.a=_.e=_.d=null},
cgO:function cgO(d,e){this.a=d
this.b=e},
cgM:function cgM(d,e){this.a=d
this.b=e},
cgN:function cgN(d,e){this.a=d
this.b=e},
cgP:function cgP(){}},F,D,G,E,I,L,M
J=c[1]
A=c[0]
C=c[2]
K=c[152]
H=c[233]
B=a.updateHolder(c[37],B)
F=c[348]
D=c[118]
G=c[82]
E=c[228]
I=c[133]
L=c[115]
M=c[230]
B.EX.prototype={
d5(){A.jg(this.gNH(this),y.H)
return E.Lw},
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
case 2:t.sa3(0,new n.kh(m,l.d4(f,new B.bkM(t),y.y).by(0)))
v=4
r=y.z
x=7
return A.d(s.b.aT("mark_conversation_read",A.S(["p_conversation_id",q],y.N,r),r),$async$m8)
case 7:A.eP(t).ai($.cYY())
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
mm(d){return this.aIK(d)},
aIK(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$mm=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=C.f.D(d)
if(p.length===0){x=1
break}t=$.T()
s=t.b
s===$&&A.b()
s=s.R("messages")
t=t.b.gbE().e.a
r=y.N
x=3
return A.d(s.de(0,A.S(["conversation_id",u.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cj(0).dP(0),$async$mm)
case 3:q=f
r=u.ga3(0)
t=A.V(u.ga3(0).b,y.y)
t.push(u.a58(q))
u.sa3(0,r.F4(t))
case 1:return A.l(v,w)}})
return A.m($async$mm,w)},
mU(d){return this.aIF(d)},
aIF(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mU=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.T()
s=t.b
s===$&&A.b()
s=s.R("messages")
t=t.b.gbE().e.a
x=2
return A.d(s.de(0,A.S(["conversation_id",v.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cj(0).dP(0),$async$mU)
case 2:u=f
t=v.ga3(0)
s=A.V(v.ga3(0).b,y.y)
s.push(v.a58(u))
v.sa3(0,t.F4(s))
return A.l(null,w)}})
return A.m($async$mU,w)},
jV(d,e){return this.bsj(0,e)},
bsj(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jV=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.T().b
p===$&&A.b()
x=2
return A.d(p.aT("delete_message",A.S(["p_message_id",e],y.N,y.z),y.H),$async$jV)
case 2:p=v.ga3(0)
u=A.a([],y.t)
for(t=v.ga3(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa3(0,p.F4(u))
return A.l(null,w)}})
return A.m($async$jV,w)},
a58(d){var x,w=J.a7(d),v=A.a2(w.h(d,"id")),u=A.a2(w.h(d,"conversation_id")),t=J.o(w.h(d,"sender_role"),"partner"),s=A.E(w.h(d,"body")),r=A.E(w.h(d,"attachment_url")),q=A.E(w.h(d,"attachment_type")),p=A.E(w.h(d,"attachment_name")),o=A.d9(A.a2(w.h(d,"created_at"))),n=A.E(w.h(d,"proposal_id")),m=A.E(w.h(d,"proposal_title")),l=A.aK(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aK(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.dW(w.h(d,"is_quote_request_notice"))
return G.d_9(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a5u.prototype={
P(){return new B.afg(new A.aJ(C.ap,$.ac()),A.nN(null,0,null,null))}}
B.afg.prototype={
m(){var x=this.w
x.Z$=$.ac()
x.W$=0
this.x.m()
this.a6()},
a59(){$.az.k4$.push(new B.ccW(this))},
Tl(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Tl=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.D(s).length===0){x=1
break}t.j6(0,C.j4)
t=u.gS()
t.a0(0,$.CK().$1("c:"+u.a.d.a).gaW(),y.M).d3(0)
x=3
return A.d(t.a0(0,$.aVH().$1(u.a.d.a).gaW(),y.Q).mm(s),$async$Tl)
case 3:u.a59()
case 1:return A.l(v,w)}})
return A.m($async$Tl,w)},
K7(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$K7=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(D.rD(q),$async$K7)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gS().a0(0,$.aVH().$1(s.a.d.a).gaW(),y.Q).mU(r),$async$K7)
case 8:s.a59()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.O(y.q).f.a4(E.a9i)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$K7,w)},
apd(d,e,f){var x=null
if(!d||e.Q)return f
return A.de(x,f,C.a0,!1,x,x,x,x,x,x,x,new B.ccV(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.b_)},
u(d){var x,w,v,u=this,t=null,s=u.gS(),r=$.aVH(),q=y.n,p=s.H(r.$1(u.a.d.a),q)
s.pu(r.$1(u.a.d.a),new B.ccY(u),q)
q=u.a.d
q=A.bF(!1,D.cRy(q.d,t,q.b,t,new B.ccZ(u,d,p),t,!1),t,C.a_,!1)
if(p.a&&p.b.length===0)r=M.yV
else{r=u.x
x=p.b
w=x.length
x=G.dav(new B.cd_(u,d),new B.cd0(),x,t)
v=A.a8(x).i("cW<1>")
x=A.V(new A.cW(x,v),v.i("aZ.E"))
r=new D.Kd(r,w,A.cX(x,r,C.bj,t,t,!0,C.a1,!1),t)}return A.cO(t,C.l7,A.B(A.a([q,A.a5(r,1),A.ki(new D.QW(D.cXd(s.H($.CK().$1("c:"+u.a.d.a),y.a)),t),C.ac,!0),new D.QU(u.w,u.gbbN(),u.gbbM(),"Escreve uma mensagem",new B.cd1(u),t)],y.p),C.w,C.i,C.m,0,C.v),!0,t)}}
B.afq.prototype={
P(){return new B.aK2()}}
B.aK2.prototype={
ak(){this.aD()
var x=this.a.c.w
if(x==null)return
L.PP(x).b7(new B.cgO(this,x),y.P).es(new B.cgP())},
u(d){var x,w,v,u,t,s,r,q=null,p=this.a.c,o=this.d
A:{if("accepted"===o){x=this.e
B:{if("deposit_paid"===x||"final_due"===x){w=F.bRE
break B}if("paid"===x||"completed"===x){w=E.a7a
break B}if("cancelled"===x){w=E.a7g
break B}w=F.bSH
break B}break A}if("rejected"===o||"declined"===o){w=F.bSk
break A}if("expired"===o){w=F.bRO
break A}w=F.bTh
break A}v=w.a
u=q
t=w.b
u=t
s=v
w=p.x
if(C.f.D(w==null?"":w).length===0)w="Proposta"
else{w.toString
w=C.f.D(w)}r=o==null||o==="sent"?"Recebes o total menos a taxa de servi\xe7o.":q
return G.d_a(E.bAt,p.z,"PROPOSTA",q,r,p.y,s,q,w,u)}}
var z=a.updateTypes(["F<~>()","kh()","jz(@)","~(kh?,kh)","y(jz)","e(jz,y)","EX(c)"])
B.bkM.prototype={
$1(d){return this.a.a58(y.b.a(d))},
$S:z+2}
B.ccW.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.iI(0,C.cp,C.lt)},
$S:5}
B.ccV.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(I.PL(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(I.PY(s,new B.ccU(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
B.ccU.prototype={
$0(){var x=this.a
return x.gS().a0(0,$.aVH().$1(x.a.d.a).gaW(),y.Q).jV(0,this.b.a)},
$S:1}
B.ccY.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a59()},
$S:z+3}
B.ccZ.prototype={
$0(){var x,w,v,u,t,s=this.a.gS(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a8(x).i("cW<1>"),x=new A.cW(x,w),x=new A.ak(x,x.gA(0),w.i("ak<aZ.E>")),w=w.i("aZ.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new D.Bb(u,v==null?"":v,null,null))}}return D.a_6(this.b,s,!1,H.rL,r)},
$S:0}
B.cd0.prototype={
$1(d){return d.d},
$S:z+4}
B.cd_.prototype={
$2(d,e){var x,w=null,v=d.as
if(v!=null){x=d.at
if(x==null)x="file"
x=this.a.apd(e,d,new D.QS(v,x,d.ax,e,w))
v=x}else if(d.w!=null)v=new B.afq(d,w)
else{v=this.a
x=d.e
if(e)v=v.apd(!0,d,new D.zI(x==null?"":x,!0,w,w))
else v=A.de(w,new D.zI(x==null?"":x,!1,w,w),C.a0,!1,w,w,w,w,w,w,w,new B.ccX(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.b_)}return v},
$S:z+5}
B.ccX.prototype={
$0(){return K.wt(this.b,this.a.gS(),!1,null,null,H.rL,this.c.a)},
$S:0}
B.cd1.prototype={
$1(d){var x,w,v=this.a,u=v.gS(),t=u.a0(0,$.b8(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.D(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.D(s)}else{s=s?null:t.b
w=s==null?"":s}u.a0(0,$.CK().$1("c:"+v.a.d.a).gaW(),y.M).acP(w)},
$S:3}
B.cgO.prototype={
$1(d){return this.aEF(d)},
aEF(d){var x=0,w=A.n(y.P),v,u=this,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:s=u.a
if(s.c==null){x=1
break}s.q(new B.cgM(s,d))
x=d==="accepted"?3:4
break
case 3:x=5
return A.d(G.PO(u.b),$async$$1)
case 5:t=f
if(s.c!=null)s.q(new B.cgN(s,t))
case 4:case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:339}
B.cgM.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cgN.prototype={
$0(){return this.a.e=this.b},
$S:0}
B.cgP.prototype={
$1(d){},
$S:13};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dI2","dqq",6)
var u
w(u=B.EX.prototype,"giL","d5",1)
v(u,"gNH","m8",0)
w(u=B.afg.prototype,"gbbN","Tl",0)
w(u,"gbbM","K7",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.EX,A.fb)
w(A.bx,[B.bkM,B.ccW,B.cd0,B.cd1,B.cgO,B.cgP])
x(B.a5u,A.dB)
x(B.afg,A.dw)
w(A.bT,[B.ccV,B.ccU,B.ccZ,B.ccX,B.cgM,B.cgN])
w(A.cQ,[B.ccY,B.cd_])
x(B.afq,A.H)
x(B.aK2,A.a_)})()
A.bq(b.typeUniverse,JSON.parse('{"EX":{"fb":["kh"]},"a5u":{"H":[],"e":[],"f":[]},"afq":{"H":[],"e":[],"f":[]},"afg":{"a_":["a5u"]},"aK2":{"a_":["afq"]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cD"),y:x("jz"),n:x("kh"),t:x("r<jz>"),Y:x("r<Bb>"),p:x("r<e>"),a:x("t<c>"),b:x("a4<c,@>"),P:x("by"),Q:x("EX"),N:x("c"),M:x("w4"),q:x("dt"),z:x("@"),T:x("c?"),H:x("~")}})();(function constants(){F.bRE=new A.a3("Aceite \xb7 sinal recebido",E.u7)
F.bRO=new A.a3("Expirou",E.n4)
F.bSk=new A.a3("Recusada",E.n4)
F.bSH=new A.a3("Aceite \xb7 \xe0 espera do sinal",E.u6)
F.bTh=new A.a3("Enviada \xb7 \xe0 espera da resposta",E.n4)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUG","aVH",()=>E.L5.$3$1(B.dI2(),y.Q,y.n,y.N))})()};
(a=>{a["/gOTzfLD8NodSWF/xSttDhS0HSo="]=a.current})($__dart_deferred_initializers__);