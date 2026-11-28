((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,B={cM5:function cM5(){},cM4:function cM4(){},
dtK(){return new B.F9(null)},
F9:function F9(d){this.a=d},
aKA:function aKA(d){var _=this
_.w=d
_.x=!1
_.d=$
_.c=_.a=null},
cgo:function cgo(d){this.a=d},
cgn:function cgn(){},
cgl:function cgl(){},
cgk:function cgk(d){this.a=d},
cga:function cga(d){this.a=d},
cgj:function cgj(d,e,f){this.a=d
this.b=e
this.c=f},
cgb:function cgb(){},
cgc:function cgc(d){this.a=d},
cgd:function cgd(){},
cge:function cge(){},
cgf:function cgf(){},
cgm:function cgm(){},
cgg:function cgg(d){this.a=d},
cg9:function cg9(d){this.a=d},
cgh:function cgh(d){this.a=d},
cg8:function cg8(d){this.a=d},
cgi:function cgi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,F,I,K
J=c[1]
A=c[0]
C=c[2]
G=c[153]
H=c[207]
B=a.updateHolder(c[36],B)
D=c[355]
E=c[82]
F=c[228]
I=c[118]
K=c[229]
B.F9.prototype={
P(){return new B.aKA(new A.aF(C.al,$.aa()))}}
B.aKA.prototype={
ad(){this.ar()
this.w.an(0,new B.cgo(this))},
m(){var x=this.w
x.Y$=$.aa()
x.W$=0
this.a6()},
u(d){var x=this,w=null,v=x.gS().H($.d1_(),y.m),u=x.w,t=C.f.C(u.a.a),s=y.u
return A.cP(w,C.li,new A.bD(C.az,w,C.aG,C.z,A.a([A.bE(!1,new A.mg(A.a([A.aG(w,A.ax(d,C.b4,y.x).w.r.b,w),D.bMT,new A.Q(C.eh,new G.G3(u,"Pesquisar conversas",!0,w),w),F.aa0],s),A.hq(v,new B.cgj(x,t.toLowerCase(),d),new B.cgk(x),new B.cgl(),!1,!0,!1),w),w,C.a_,!1),D.bQJ],s),w),!0,w)}}
var z=a.updateTypes([])
B.cM5.prototype={
$1(d){return this.aH0(d)},
aH0(d){var x=0,w=A.n(y.p),v,u,t,s
var $async$$1=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.Cv(d)
t=$.R().b
t===$&&A.b()
s=J
x=3
return A.d(t.R("conversations").am(0,"id, wedding_id, partner_id, last_message, last_message_at, events(partner_name_1, partner_name_2, profile_photo_url, cover_photo_url, owner_id, event_type, event_date)").V("partner_id",u).d1(0,"last_message_at",!1),$async$$1)
case 3:v=s.d6(f,new B.cM4(),y.g).by(0)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1454}
B.cM4.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i="wedding_id",h="last_message_at"
y.y.a(d)
x=J.a7(d)
w=y.A.a(x.h(d,"events"))
v=w==null
u=A.C(v?j:J.i(w,"partner_name_1"))
t=A.C(v?j:J.i(w,"partner_name_2"))
if(u==null||u.length===0)s="Cliente"
else s=t==null||t.length===0?u:u+" & "+t
r=A.a_(x.h(d,"id"))
q=A.a_(x.h(d,i))
p=A.a_(x.h(d,"partner_id"))
o=A.a_(x.h(d,i))
n=A.cYq(w,j)
m=A.C(x.h(d,"last_message"))
x=x.h(d,h)==null?j:A.dc(A.a_(x.h(d,h)))
l=A.C(v?j:J.i(w,"owner_id"))
k=A.DG(A.C(v?j:J.i(w,"event_type")))
v=v?j:J.i(w,"event_date")
return new A.eG(r,s,o,n,q,p,m,x,0,l,I.cIy(k,A.dh(A.q(v==null?"":v))),C.k0)},
$S:1455}
B.cgo.prototype={
$0(){return this.a.p(new B.cgn())},
$S:0}
B.cgn.prototype={
$0(){},
$S:0}
B.cgl.prototype={
$0(){return C.ep},
$S:45}
B.cgk.prototype={
$2(d,e){return new A.jf("N\xe3o foi poss\xedvel carregar.",new B.cga(this.a),null)},
$S:49}
B.cga.prototype={
$0(){return this.a.gS().aj($.d1_())},
$S:0}
B.cgj.prototype={
$1(a5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=E.dez(a5,new B.cgb()),a4=a1.b
if(a4.length===0)x=a3
else{w=A.a8(a3).i("a6<1>")
x=A.U(new A.a6(a3,new B.cgc(a4),w),w.i("A.E"))}if(a3.length===0)return D.aF0
if(x.length===0)return A.bN(A.h('Sem conversas para "'+C.f.C(a1.a.w.a.a)+'".',a2,a2,a2,a2,a2,a2,a2,a2),a2,a2)
v=new A.a6(a3,new B.cgd(),A.a8(a3).i("a6<1>")).gA(0)
a4=a1.a
if(a4.x){w=A.a8(x).i("a6<1>")
u=A.U(new A.a6(x,new B.cge(),w),w.i("A.E"))}else u=x
t=A.E(y.e,y.p)
for(w=u.length,s=0;s<u.length;u.length===w||(0,A.H)(u),++s){r=u[s]
J.bu(t.bK(0,E.deA(r.w),new B.cgf()),r)}q=new B.cgm()
w=y.u
a4=A.a([new A.Q(K.Dd,A.N(A.a([q.$3("Todas",!a4.x,new B.cgg(a4)),C.ag,q.$4$count("N\xe3o lidas",a4.x,new B.cgh(a4),v)],w),C.w,C.h,C.l,0,a2,a2),a2)],w)
for(p=[0,1,2],o=p.length,n=a1.c,s=0;s<o;++s){m=p[s]
if(t.h(0,m)!=null){l=A.B(a2,A.h(C.FX[m],a2,a2,a2,a2,C.aL,a2,a2,a2),C.r,a2,a2,F.L_,a2,a2,F.NY,C.iM,a2,a2,a2)
k=A.a([],w)
j=0
for(;;){i=t.h(0,m)
i.toString
if(!(j<J.aR(i)))break
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
f=E.cKC(J.i(f,j).w)
e=t.h(0,m)
e.toString
e=J.i(e,j).r
if(e==null)e="Sem mensagens ainda."
d=t.h(0,m)
d.toString
d=J.i(d,j)
a0=t.h(0,m)
a0.toString
k.push(new E.a4K(new A.cp(i.b,52,h.d,!1,!0,a2),g.b,f,e,a2,d.x,F.FJ,new B.cgi(n,t,m,j),j===J.aR(a0)-1,!1,!1,a2));++j}C.e.n(a4,A.a([l,new A.Q(C.bV,A.y(k,C.w,C.h,C.l,0,C.u),a2)],w))}}return A.d0(a4,a2,H.nC,a2,a2,!1,C.a3,!1)},
$S:1456}
B.cgb.prototype={
$1(d){return d.y},
$S:266}
B.cgc.prototype={
$1(d){return C.f.q(d.b.toLowerCase(),this.a)},
$S:146}
B.cgd.prototype={
$1(d){return d.x>0},
$S:146}
B.cge.prototype={
$1(d){return d.x>0},
$S:146}
B.cgf.prototype={
$0(){return A.a([],y.B)},
$S:464}
B.cgm.prototype={
$4$count(d,e,f,g){var x,w,v=null,u=e?$.at:C.t,t=A.W(19),s=y.u,r=A.a([A.h(d,v,v,v,v,A.aI(v,v,e?C.t:C.A,v,v,v,v,v,v,v,v,14,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],s)
if(g!=null&&g>0){x=e?C.t:C.A
w=A.W(10)
C.e.n(r,A.a([C.bm,A.B(C.L,A.h(A.q(g),v,v,v,v,A.aI(v,v,e?$.at:C.t,v,v,v,v,v,v,v,v,11,v,v,C.F,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),C.r,v,C.lp,new A.L(x,v,v,w,v,v,C.y),v,20,v,C.lG,v,v,v)],s))}return A.aW(A.B(v,A.N(r,C.w,C.h,C.K,0,v,v),C.r,v,v,new A.L(u,v,v,t,v,v,C.y),v,38,v,C.cO,v,v,v),f,v)},
$3(d,e,f){return this.$4$count(d,e,f,null)},
$S:1457}
B.cgg.prototype={
$0(){var x=this.a
return x.p(new B.cg9(x))},
$S:0}
B.cg9.prototype={
$0(){return this.a.x=!1},
$S:0}
B.cgh.prototype={
$0(){var x=this.a
return x.p(new B.cg8(x))},
$S:0}
B.cg8.prototype={
$0(){return this.a.x=!0},
$S:0}
B.cgi.prototype={
$0(){var x,w=this,v=w.b,u=w.c,t=v.h(0,u)
t.toString
x=w.d
t=J.i(t,x)
u=v.h(0,u)
u.toString
x=J.i(u,x)
return A.ah(w.a).av("/partner-messages/"+t.a,x,y.q)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.by,[B.cM5,B.cM4,B.cgj,B.cgb,B.cgc,B.cgd,B.cge,B.cgm])
w(B.F9,A.dD)
w(B.aKA,A.dz)
x(A.bR,[B.cgo,B.cgn,B.cgl,B.cga,B.cgf,B.cgg,B.cg9,B.cgh,B.cg8,B.cgi])
w(B.cgk,A.cN)})()
A.bq(b.typeUniverse,JSON.parse('{"F9":{"G":[],"e":[],"f":[]},"aKA":{"Y":["F9"]}}'))
var y=(function rtii(){var x=A.w
return{m:x("ay<t<eG>>"),g:x("eG"),B:x("r<eG>"),u:x("r<e>"),p:x("t<eG>"),y:x("a5<c,@>"),x:x("df"),e:x("v"),A:x("a5<c,@>?"),q:x("K?")}})();(function constants(){D.aF0=new E.a3D(C.Gv,"Ainda sem conversas","Quando um cliente te pedir um or\xe7amento, a conversa aparece aqui.",null,null,180,!1,null)
D.bMT=new A.lI("Mensagens",null,!1,null,20,!1,null)
D.bNa=new A.Lk(C.a2G,null)
D.bQJ=new A.eM(0,null,0,0,null,null,D.bNa,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dY6","d1_",()=>A.eI(new B.cM5(),null,!1,null,null,y.p))})()};
(a=>{a["ogv17Jm0bm7zXU5aDUrcL4TJ6SU="]=a.current})($__dart_deferred_initializers__);