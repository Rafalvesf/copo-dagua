((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cM1:function cM1(){},cM0:function cM0(){},
dtL(){return new B.F5(null)},
F5:function F5(d){this.a=d},
aKh:function aKh(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cgw:function cgw(d){this.a=d},
cgv:function cgv(){},
cgt:function cgt(){},
cgs:function cgs(d){this.a=d},
cgi:function cgi(d){this.a=d},
cgr:function cgr(d,e,f){this.a=d
this.b=e
this.c=f},
cgj:function cgj(){},
cgk:function cgk(d){this.a=d},
cgl:function cgl(){},
cgm:function cgm(){},
cgn:function cgn(){},
cgu:function cgu(){},
cgo:function cgo(d){this.a=d},
cgh:function cgh(d){this.a=d},
cgp:function cgp(d){this.a=d},
cgg:function cgg(d){this.a=d},
cgq:function cgq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I,K
J=c[1]
A=c[0]
C=c[2]
G=c[154]
H=c[211]
B=a.updateHolder(c[36],B)
D=c[361]
E=c[82]
F=c[233]
I=c[119]
K=c[234]
B.F5.prototype={
R(){return new B.aKh(new A.aE(C.ak,$.aa()))}}
B.aKh.prototype={
ac(){this.ao()
this.w.am(0,new B.cgw(this))},
m(){var x=this.w
x.Y$=$.aa()
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=x.gS().G($.d13(),y.m),u=x.w,t=C.f.B(u.a.a),s=y.u
return A.cP(w,C.jl,new A.bB(C.ax,w,C.aE,C.y,A.a([A.bD(!1,new A.n4(A.a([A.aH(w,A.aO(d,C.b5,y.x).w.r.b,w),D.bLZ,new A.S(C.eg,new G.FZ(u,"Pesquisar conversas",!0,w),w),F.a9u],s),A.hC(v,new B.cgr(x,t.toLowerCase(),d),new B.cgs(x),new B.cgt(),!1,!0,!1),w),w,C.Z,!1),D.bPP],s),w),!0,w)}}
var z=a.updateTypes([])
B.cM1.prototype={
$1(d){return this.aGG(d)},
aGG(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cs(d)
t=$.Q().b
t===$&&A.b()
s=J
x=3
return A.d(t.P("conversations").aj(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, event_date)").V("partner_id",u).cR(0,"last_message_at",!1),$async$$1)
case 3:v=s.d9(f,new B.cM0(),y.g).bx(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1440}
B.cM0.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="wedding_id",h="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.C(v?j:J.i(w,"partner_name_1"))
t=A.C(v?j:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
r=A.Z(x.h(d,"id"))
q=A.Z(x.h(d,i))
p=A.Z(x.h(d,"partner_id"))
o=A.Z(x.h(d,i))
n=A.cYq(w,j)
m=A.C(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.db(A.Z(x.h(d,h)))
l=A.C(v?j:J.i(w,"owner_id"))
k=A.zW(A.C(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"event_date")
return new A.eB(r,s,o,n,q,p,m,x,0,l,I.cIs(k,A.d5(A.q(v==null?"":v))),C.jV)},
$S:1441}
B.cgw.prototype={
$0(){return this.a.p(new B.cgv())},
$S:0}
B.cgv.prototype={
$0(){},
$S:0}
B.cgt.prototype={
$0(){return C.eD},
$S:52}
B.cgs.prototype={
$2(d,e){return new A.jg("N\xe3o foi poss\xedvel carregar.",new B.cgi(this.a),null)},
$S:51}
B.cgi.prototype={
$0(){return this.a.gS().ak($.d13())},
$S:0}
B.cgr.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.dey(a5,new B.cgj()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a6<1>")
x=A.U(new A.a6(a3,new B.cgk(a4),w),w.i("B.E"))}if(a3.length===0)return D.aE9
if(x.length===0)return A.bM(A.h('Sem conversas para "'+C.f.B(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a6(a3,new B.cgl(),A.a8(a3).i("a6<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a6<1>")
u=A.U(new A.a6(x,new B.cgm(),w),w.i("B.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.H)(u),++s){r=u[s]
J.bt(t.bI(0,E.dez(r.w),new B.cgn()),r)}q=new B.cgu()
w=y.u
a4=A.a([new A.S(K.CW,A.O(A.a([q.$3("Todas",!a4.x,new B.cgo(a4)),C.af,q.$4$count("N\xe3o lidas",a4.x,new B.cgp(a4),v)],w),C.v,C.h,C.l,0,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.x(a2,A.h(C.FB[m],a2,a2,a2,a2,C.aN,a2,a2,a2),C.r,a2,a2,F.Ky,a2,a2,F.Nv,C.iJ,a2,a2,a2)
k=A.a([],w)
j=0
for(;;){i=t.h(0,m)
i.toString
if(!(j<J.aQ(i)))break
i=t.h(0,m)
i.toString
i=J.i(i,j)
h=t.h(0,m)
h.toString
h=J.i(h,j)
g=t.h(0,m)
g.toString
g=J.i(g,j)
f=t.h(0,m)
f.toString
f=E.cKw(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4M(new A.cq(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.Fn,new B.cgq(n,t,m,j),j===J.aQ(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.S(C.bL,A.A(k,C.v,C.h,C.l),a2)],w))}}return A.d_(a4,a2,H.nq,a2,a2,!1,C.a1,!1)},
$S:1442}
B.cgj.prototype={
$1(d){return d.y},
$S:229}
B.cgk.prototype={
$1(d){return C.f.q(d.b.toLowerCase(),this.a)},
$S:136}
B.cgl.prototype={
$1(d){return d.x>0},
$S:136}
B.cgm.prototype={
$1(d){return d.x>0},
$S:136}
B.cgn.prototype={
$0(){return A.a([],y.B)},
$S:471}
B.cgu.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.at:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aI(v,v,e?C.t:C.z,v,v,v,v,v,v,v,v,14,v,v,C.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.z
w=A.W(10)
C.e.n(r,A.a([C.bk,A.x(C.K,A.h(A.q(g),v,v,v,v,A.aI(v,v,e?$.at:C.t,v,v,v,v,v,v,v,v,11,v,v,C.E,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.lg,new A.I(x,v,v,w,v,v,C.x),v,20,v,C.lw,v,v,v)],s))}return A.aX(A.x(v,A.O(r,C.v,C.h,C.J,0,v),C.r,v,v,new A.I(u,v,v,t,v,v,C.x),v,38,v,C.cH,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1443}
B.cgo.prototype={
$0(){var x=this.a
return x.p(new B.cgh(x))},
$S:0}
B.cgh.prototype={
$0(){return this.a.x=!1},
$S:0}
B.cgp.prototype={
$0(){var x=this.a
return x.p(new B.cgg(x))},
$S:0}
B.cgg.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cgq.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ah(w.a).av("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bu,[B.cM1,B.cM0,B.cgr,B.cgj,B.cgk,B.cgl,B.cgm,B.cgu])
w(B.F5,A.dz)
w(B.aKh,A.du)
x(A.bP,[B.cgw,B.cgv,B.cgt,B.cgi,B.cgn,B.cgo,B.cgh,B.cgp,B.cgg,B.cgq])
w(B.cgs,A.cK)})()
A.bn(b.typeUniverse,JSON.parse('{"F5":{"G":[],"e":[],"f":[]},"aKh":{"Y":["F5"]}}'))
var y=(function rtii(){var x=A.w
return{m:x("ay<t<eB>>"),g:x("eB"),B:x("r<eB>"),u:x("r<e>"),p:x("t<eB>"),y:x("a4<c,@>"),x:x("dg"),e:x("v"),A:x("a4<c,@>?"),q:x("J?")}})();(function constants(){D.aE9=new E.a3C(C.Ga,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bLZ=new A.lL("Mensagens",null,!1,null,20,!1,null)
D.bMg=new A.Lj(C.a27,null)
D.bPP=new A.eH(0,null,0,0,null,null,D.bMg,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYc","d13",()=>A.eD(new B.cM1(),null,!1,null,null,y.p))})()};
(a=>{a["npap5A5VLiT9NkuIKnCIQNXiXr0="]=a.current})($__dart_deferred_initializers__);