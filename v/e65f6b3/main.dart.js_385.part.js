((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,I,G,B={
dcI(d){return new B.DW(d)},
DW:function DW(d){this.x=d
this.b=null},
bfl:function bfl(d){this.a=d},
dcJ(d){return new B.a3z(d,null)},
a3z:function a3z(d,e){this.d=d
this.a=e},
ad6:function ad6(d,e){var _=this
_.w=d
_.x=e
_.d=$
_.c=_.a=null},
c3C:function c3C(d){this.a=d},
c3B:function c3B(d,e){this.a=d
this.b=e},
c3A:function c3A(d,e){this.a=d
this.b=e},
c3E:function c3E(d){this.a=d},
c3F:function c3F(d,e,f){this.a=d
this.b=e
this.c=f},
c3H:function c3H(){},
c3G:function c3G(d,e){this.a=d
this.b=e},
c3D:function c3D(d,e,f){this.a=d
this.b=e
this.c=f},
c3I:function c3I(d){this.a=d}},D,E,F,H
J=c[1]
A=c[0]
C=c[2]
I=c[148]
G=c[240]
B=a.updateHolder(c[34],B)
D=c[114]
E=c[77]
F=c[236]
H=c[131]
B.DW.prototype={
cT(){A.iO(this.gMZ(this),y.H)
return F.K0},
lW(d){var x=0,w=A.n(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l
var $async$lW=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:t.sa2(0,t.ga2(0).ic(!0))
s=$.R()
r=s.b
r===$&&A.b()
q=t.x
n=E
m=!1
l=J
x=2
return A.d(r.S("messages").cl(0).X("conversation_id",q).du(0,"created_at",!0),$async$lW)
case 2:t.sa2(0,new n.k1(m,l.d0(f,new B.bfl(t),y.y).bB(0)))
v=4
r=y.z
x=7
return A.d(s.b.b2("mark_conversation_read",A.Q(["p_conversation_id",q],y.N,r),r),$async$lW)
case 7:A.es(t).al($.cMP())
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
return A.m($async$lW,w)},
mL(d){return this.aGJ(d)},
aGJ(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p
var $async$mL=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=C.f.D(d)
if(p.length===0){x=1
break}t=$.R()
s=t.b
s===$&&A.b()
s=s.S("messages")
t=t.b.gbG().e.a
r=y.N
x=3
return A.d(s.dg(0,A.Q(["conversation_id",u.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",p],r,r)).cl(0).dT(0),$async$mL)
case 3:q=f
r=u.ga2(0)
t=A.U(u.ga2(0).b,y.y)
t.push(u.a4_(q))
u.sa2(0,r.EA(t))
case 1:return A.l(v,w)}})
return A.m($async$mL,w)},
mK(d){return this.aGE(d)},
aGE(d){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$mK=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:t=$.R()
s=t.b
s===$&&A.b()
s=s.S("messages")
t=t.b.gbG().e.a
x=2
return A.d(s.dg(0,A.Q(["conversation_id",v.x,"sender_role","partner","sender_id",(t==null?null:t.r).a,"body",null,"attachment_url",d.a,"attachment_type",d.b,"attachment_name",d.c],y.N,y.T)).cl(0).dT(0),$async$mK)
case 2:u=f
t=v.ga2(0)
s=A.U(v.ga2(0).b,y.y)
s.push(v.a4_(u))
v.sa2(0,t.EA(s))
return A.l(null,w)}})
return A.m($async$mK,w)},
jM(d,e){return this.boJ(0,e)},
boJ(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p
var $async$jM=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:p=$.R().b
p===$&&A.b()
x=2
return A.d(p.b2("delete_message",A.Q(["p_message_id",e],y.N,y.z),y.H),$async$jM)
case 2:p=v.ga2(0)
u=A.a([],y.t)
for(t=v.ga2(0).b,s=t.length,r=0;r<t.length;t.length===s||(0,A.K)(t),++r){q=t[r]
if(q.a!==e)u.push(q)}v.sa2(0,p.EA(u))
return A.l(null,w)}})
return A.m($async$jM,w)},
a4_(d){var x,w=J.a5(d),v=A.a2(w.h(d,"id")),u=A.a2(w.h(d,"conversation_id")),t=J.p(w.h(d,"sender_role"),"partner"),s=A.L(w.h(d,"body")),r=A.L(w.h(d,"attachment_url")),q=A.L(w.h(d,"attachment_type")),p=A.L(w.h(d,"attachment_name")),o=A.dc(A.a2(w.h(d,"created_at"))),n=A.L(w.h(d,"proposal_id")),m=A.L(w.h(d,"proposal_title")),l=A.aV(w.h(d,"proposal_price"))
if(l==null)l=null
x=A.aV(w.h(d,"proposal_deposit_amount"))
if(x==null)x=null
w=A.e2(w.h(d,"is_quote_request_notice"))
return E.cO0(p,q,r,u,t,v,w===!0,x,n,l,m,o,s)}}
B.a3z.prototype={
P(){return new B.ad6(new A.aG(C.al,$.ad()),A.t7(null,0,null,null))}}
B.ad6.prototype={
m(){var x=this.w
x.a0$=$.ad()
x.V$=0
this.x.m()
this.a8()},
a40(){$.ay.k4$.push(new B.c3C(this))},
Sv(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$Sv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.w
s=t.a.a
if(C.f.D(s).length===0){x=1
break}t.jD(0,C.km)
t=u.gU()
t.a1(0,$.BS().$1("c:"+u.a.d.a).gaW(),y.M).fQ(0)
x=3
return A.d(t.a1(0,$.aRQ().$1(u.a.d.a).gaW(),y.Q).mL(s),$async$Sv)
case 3:u.a40()
case 1:return A.l(v,w)}})
return A.m($async$Sv,w)},
Ju(){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$Ju=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
q=s.c
q.toString
x=7
return A.d(D.qW(q),$async$Ju)
case 7:r=e
if(r==null||s.c==null){x=1
break}x=8
return A.d(s.gU().a1(0,$.aRQ().$1(s.a.d.a).gaW(),y.Q).mK(r),$async$Ju)
case 8:s.a40()
u=2
x=6
break
case 4:u=3
o=t.pop()
q=s.c
if(q==null){x=1
break}q.R(y.q).f.a7(F.a7l)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$Ju,w)},
anP(d,e,f){var x=null
if(!d||e.Q)return f
return A.dH(x,f,C.a2,!1,x,x,x,x,x,x,x,new B.c3B(this,e),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,!1,C.bd)},
u(d){var x,w=this,v=null,u=w.gU(),t=$.aRQ(),s=y.n,r=u.L(t.$1(w.a.d.a),s)
u.pl(t.$1(w.a.d.a),new B.c3E(w),s)
s=w.a.d
s=A.bA(!1,D.cFE(s.d,v,s.b,v,new B.c3F(w,d,r),v,!1),v,C.Z,!1)
if(r.a&&r.b.length===0)t=C.bo
else{t=E.cZ0(new B.c3G(w,d),new B.c3H(),r.b,v)
x=A.a6(t).i("cW<1>")
t=A.U(new A.cW(t,x),x.i("b2.E"))
t=A.d2(t,w.x,C.bc,v,v,!0,C.a0,!1)}return A.cP(v,C.kH,A.G(A.a([s,A.a9(t,1),A.lG(new D.PL(D.cL7(u.L($.BS().$1("c:"+w.a.d.a),y.a)),v),C.af,!0),new D.PJ(w.w,w.gb8L(),w.gb8K(),"Escreve uma mensagem",new B.c3I(w),v)],y.p),C.x,C.l,C.q,0,C.w),!0,v)}}
var z=a.updateTypes(["E<~>()","k1()","kN(@)","~(k1?,k1)","z(kN)","e(kN,z)","DW(c)"])
B.bfl.prototype={
$1(d){return this.a.a4_(y.P.a(d))},
$S:z+2}
B.c3C.prototype={
$1(d){var x=this.a.x
if(x.f.length===0)return
x.iA(0,C.cl,C.l_)},
$S:7}
B.c3B.prototype={
$0(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
s=t.c
s.toString
x=3
return A.d(H.Ow(s,"A mensagem desaparece para os dois lados.","Apagar mensagem","Apagar a mensagem?"),$async$$0)
case 3:if(!e||t.c==null){x=1
break}s=t.c
s.toString
x=4
return A.d(H.OH(s,new B.c3A(t,u.b)),$async$$0)
case 4:case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:2}
B.c3A.prototype={
$0(){var x=this.a
return x.gU().a1(0,$.aRQ().$1(x.a.d.a).gaW(),y.Q).jM(0,this.b.a)},
$S:2}
B.c3E.prototype={
$2(d,e){var x=d==null?null:d.b.length
if(x==null)x=0
if(x!==e.b.length)this.a.a40()},
$S:z+3}
B.c3F.prototype={
$0(){var x,w,v,u,t,s=this.a.gU(),r=A.a([],y.Y)
for(x=this.c.b,w=A.a6(x).i("cW<1>"),x=new A.cW(x,w),x=new A.ao(x,x.gA(0),w.i("ao<b2.E>")),w=w.i("b2.E");x.t();){v=x.d
if(v==null)v=w.a(v)
if(!v.d&&v.w==null&&!v.Q){u=v.a
t=v.e
v=t==null?v.ax:t
r.push(new D.Am(u,v==null?"":v,null,null))}}return D.Yp(this.b,s,!1,G.r9,r)},
$S:0}
B.c3H.prototype={
$1(d){return d.d},
$S:z+4}
B.c3G.prototype={
$2(d,e){var x,w=null,v=d.as
if(v!=null){x=d.at
if(x==null)x="file"
x=this.a.anP(e,d,new D.PI(v,x,d.ax,e,w))
v=x}else if(d.w!=null){v=d.x
if(v==null)v="Proposta"
v=E.cO1(F.bwT,d.z,"PROPOSTA ENVIADA",w,w,d.y,w,v)}else{v=this.a
x=d.e
if(e)v=v.anP(!0,d,new D.yO(x==null?"":x,!0,w,w))
else v=A.dH(w,new D.yO(x==null?"":x,!1,w,w),C.a2,!1,w,w,w,w,w,w,w,new B.c3D(v,this.b,d),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!1,C.bd)}return v},
$S:z+5}
B.c3D.prototype={
$0(){return I.vL(this.b,this.a.gU(),!1,null,null,G.r9,this.c.a)},
$S:0}
B.c3I.prototype={
$1(d){var x,w,v=this.a,u=v.gU(),t=u.a1(0,$.b7(),y.D).b,s=t==null
if(s)x=null
else{x=t.x
x=x==null?null:C.f.D(x).length!==0}if(x===!0){s=t.x
s.toString
w=C.f.D(s)}else{s=s?null:t.b
w=s==null?"":s}u.a1(0,$.BS().$1("c:"+v.a.d.a).gaW(),y.M).abz(w)},
$S:3};(function installTearOffs(){var x=a._static_1,w=a._instance_0u,v=a._instance_0i
x(B,"dtG","dcI",6)
var u
w(u=B.DW.prototype,"gib","cT",1)
v(u,"gMZ","lW",0)
w(u=B.ad6.prototype,"gb8L","Sv",0)
w(u,"gb8K","Ju",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.DW,A.eY)
w(A.bv,[B.bfl,B.c3C,B.c3H,B.c3I])
x(B.a3z,A.ds)
x(B.ad6,A.di)
w(A.bN,[B.c3B,B.c3A,B.c3F,B.c3D])
w(A.cM,[B.c3E,B.c3G])})()
A.bt(b.typeUniverse,JSON.parse('{"DW":{"eY":["k1"]},"a3z":{"I":[],"e":[],"f":[]},"ad6":{"a1":["a3z"]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cw"),y:x("kN"),n:x("k1"),t:x("r<kN>"),Y:x("r<Am>"),p:x("r<e>"),a:x("t<c>"),P:x("a3<c,@>"),Q:x("DW"),N:x("c"),M:x("vo"),q:x("dF"),z:x("@"),T:x("c?"),H:x("~")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dGK","aRQ",()=>F.JA.$3$1(B.dtG(),y.Q,y.n,y.N))})()};
(a=>{a["L+/V2nt8MaBU+hyMIT0MRHD+dCs="]=a.current})($__dart_deferred_initializers__);