((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,F,B={
da8(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cyi(d){var x
A:{if(C.a4f===d){x="fotografia"
break A}if(C.Fi===d){x="coment\xe1rio"
break A}if(C.Fj===d||C.qg===d){x="mensagem"
break A}x=null}return x},
uQ(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$uQ=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a2(0,$.bp(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.L(h).length===0?"esta pessoa":D.f.L(h)
x=3
return A.d(A.cd(null,new B.crZ(i,f,g,u),d,!0,!1,null,y.w),$async$uQ)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aMu(d,i,j),$async$uQ)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(H.aMh(d,e,g,u),$async$uQ)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$uQ,w)},
aMu(d,e,f){return B.dbH(d,e,f)},
dbH(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMu=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.cd(null,new B.chZ(e),d,!0,!1,null,o),$async$aMu)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Z().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.bd("report_content",A.R(["p_kind",B.da8(e),"p_target",f,"p_reason",n],o,q),q),$async$aMu)
case 8:s="Obrigado. A equipa vai rever esta "+B.cyi(e)+" em menos de 24 horas."
u=2
x=7
break
case 5:u=4
m=t.pop()
s="N\xe3o foi poss\xedvel enviar a den\xfancia. Tenta outra vez."
x=7
break
case 4:x=2
break
case 7:if(d.e!=null)d.T(y.q).f.ah(A.cV(null,null,null,null,null,D.C,null,A.i(s,null,null,null,null,null,null,null),null,D.a0,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aMu,w)},
Rm:function Rm(d,e){this.a=d
this.b=e},
crZ:function crZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crW:function crW(d){this.a=d},
crX:function crX(d){this.a=d},
crY:function crY(d){this.a=d},
chZ:function chZ(d){this.a=d},
chY:function chY(d,e){this.a=d
this.b=e}},C,E,G,H
A=c[0]
D=c[2]
F=c[410]
B=a.updateHolder(c[145],B)
C=c[241]
E=c[196]
G=c[408]
H=c[152]
B.Rm.prototype={
H(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.crZ.prototype={
$1(d){var x=this,w=null,v=A.a([A.i8(!1,w,w,w,!0,w,w,w,!0,w,C.N8,w,w,w,w,new B.crW(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.cyi(x.a),w,w,w,C.bV8,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.i8(!1,w,w,w,!0,w,w,w,!0,w,C.awM,w,w,w,w,new B.crX(d),!1,w,w,w,w,w,C.bYo,w,A.i("Bloquear "+x.d,w,w,w,D.ef,w,w,w),w,w,w))
v.push(A.i8(!1,w,w,w,!0,w,w,w,!0,w,C.awu,w,w,w,w,new B.crY(d),!1,w,w,w,w,w,w,w,D.dc,w,w,w))
return A.bn(!0,new A.a_(E.i1,A.I(v,D.x,D.m,D.a_,0,D.w),w),w,D.V,!0)},
$S:51}
B.crW.prototype={
$0(){return A.aC(this.a,!1).b0("report")},
$S:0}
B.crX.prototype={
$0(){return A.aC(this.a,!1).b0("block")},
$S:0}
B.crY.prototype={
$0(){return A.aC(this.a,!1).c7()},
$S:0}
B.chZ.prototype={
$1(d){var x,w,v=null,u=A.a([new A.a_(C.anv,A.i("Porque queres denunciar esta "+B.cyi(this.a)+"?",v,v,v,G.GC,v,v,v),v),C.bBs],y.u)
for(x=0;x<6;++x){w=C.bmo[x]
u.push(A.i8(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.chY(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bn(!0,new A.a_(E.i1,A.I(u,D.T,D.m,D.a_,0,D.w),v),v,D.V,!0)},
$S:51}
B.chY.prototype={
$0(){return A.aC(this.a,!1).b0(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Rm,A.fq)
w(A.bv,[B.crZ,B.chZ])
w(A.bI,[B.crW,B.crX,B.crY,B.chY])})()
var y={e:A.v("cI"),u:A.v("q<e>"),w:A.v("c"),q:A.v("dD"),b:A.v("@"),v:A.v("~")};(function constants(){var x=a.makeConstList
C.KQ=new A.X(0,0,0,2)
C.anv=new A.X(20,8,20,4)
C.N8=new A.aY(F.u8,null,D.dv,null,null,null)
C.awu=new A.aY(D.iY,null,null,null,null,null)
C.awM=new A.aY(D.jK,null,D.E,null,null,null)
C.bHT=new A.ag("offensive","Ofensivo ou \xf3dio")
C.bHd=new A.ag("harassment","Ass\xe9dio ou amea\xe7as")
C.bGR=new A.ag("sexual","Conte\xfado sexual")
C.bHM=new A.ag("violence","Viol\xeancia")
C.bHA=new A.ag("spam","Spam ou burla")
C.bHc=new A.ag("other","Outro motivo")
C.bmo=x([C.bHT,C.bHd,C.bGR,C.bHM,C.bHA,C.bHc],A.v("q<+(c,c)>"))
C.amT=new A.X(20,0,20,6)
C.c1e=new A.J("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.xG,null,null,null,null,null,null,null,null)
C.bBs=new A.a_(C.amT,C.c1e,null)
C.a4f=new B.Rm(0,"galleryPhoto")
C.Fi=new B.Rm(1,"galleryComment")
C.Fj=new B.Rm(2,"groupMessage")
C.qg=new B.Rm(3,"message")
C.bV8=new A.C(!0,D.dv,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.bYo=new A.J("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["l7hIotOky77RVmZHqAanDy7pYao="]=a.current})($__dart_deferred_initializers__);