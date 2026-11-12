((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,E,B={
db8(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cz8(d){var x
A:{if(C.a4b===d){x="fotografia"
break A}if(C.Fm===d){x="coment\xe1rio"
break A}if(C.Fn===d||C.qr===d){x="mensagem"
break A}x=null}return x},
uP(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$uP=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a2(0,$.be(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.L(h).length===0?"esta pessoa":D.f.L(h)
x=3
return A.d(A.cb(null,new B.csN(i,f,g,u),d,!0,!1,null,y.w),$async$uP)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aMG(d,i,j),$async$uP)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(G.aMt(d,e,g,u),$async$uP)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$uP,w)},
aMG(d,e,f){return B.dcG(d,e,f)},
dcG(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMG=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.cb(null,new B.ciI(e),d,!0,!1,null,o),$async$aMG)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.W().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.b9("report_content",A.Q(["p_kind",B.db8(e),"p_target",f,"p_reason",n],o,q),q),$async$aMG)
case 8:s="Obrigado. A equipa vai rever esta "+B.cz8(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.S(y.q).f.ad(A.cH(null,null,null,null,null,D.D,null,A.i(s,null,null,null,null,null,null,null),null,D.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aMG,w)},
RA:function RA(d,e){this.a=d
this.b=e},
csN:function csN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csK:function csK(d){this.a=d},
csL:function csL(d){this.a=d},
csM:function csM(d){this.a=d},
ciI:function ciI(d){this.a=d},
ciH:function ciH(d,e){this.a=d
this.b=e}},C,F,G
A=c[0]
D=c[2]
E=c[403]
B=a.updateHolder(c[146],B)
C=c[241]
F=c[400]
G=c[153]
B.RA.prototype={
H(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.csN.prototype={
$1(d){var x=this,w=null,v=A.a([A.i8(!1,w,w,w,!0,w,w,w,!0,w,C.N7,w,w,w,w,new B.csK(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.cz8(x.a),w,w,w,C.bVQ,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.i8(!1,w,w,w,!0,w,w,w,!0,w,C.awM,w,w,w,w,new B.csL(d),!1,w,w,w,w,w,C.bZ1,w,A.i("Bloquear "+x.d,w,w,w,D.eh,w,w,w),w,w,w))
v.push(A.i8(!1,w,w,w,!0,w,w,w,!0,w,C.awv,w,w,w,w,new B.csM(d),!1,w,w,w,w,w,w,w,D.cV,w,w,w))
return A.bp(!0,new A.a_(D.hl,A.J(v,D.x,D.m,D.a0,0,D.w),w),w,D.V,!0)},
$S:51}
B.csK.prototype={
$0(){return A.aB(this.a,!1).aX("report")},
$S:0}
B.csL.prototype={
$0(){return A.aB(this.a,!1).aX("block")},
$S:0}
B.csM.prototype={
$0(){return A.aB(this.a,!1).c8()},
$S:0}
B.ciI.prototype={
$1(d){var x,w,v=null,u=A.a([new A.a_(C.anv,A.i("Porque queres denunciar esta "+B.cz8(this.a)+"?",v,v,v,F.GB,v,v,v),v),C.bBM],y.u)
for(x=0;x<6;++x){w=C.bmr[x]
u.push(A.i8(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.ciH(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bp(!0,new A.a_(D.hl,A.J(u,D.R,D.m,D.a0,0,D.w),v),v,D.V,!0)},
$S:51}
B.ciH.prototype={
$0(){return A.aB(this.a,!1).aX(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.RA,A.fr)
w(A.bv,[B.csN,B.ciI])
w(A.bI,[B.csK,B.csL,B.csM,B.ciH])})()
var y={e:A.v("cC"),u:A.v("q<e>"),w:A.v("c"),q:A.v("dB"),b:A.v("@"),v:A.v("~")};(function constants(){var x=a.makeConstList
C.KR=new A.Y(0,0,0,2)
C.anv=new A.Y(20,8,20,4)
C.N7=new A.b_(E.ub,null,D.dt,null,null,null)
C.awv=new A.b_(D.iV,null,null,null,null,null)
C.awM=new A.b_(D.jE,null,D.C,null,null,null)
C.bIq=new A.ag("offensive","Ofensivo ou \xf3dio")
C.bHF=new A.ag("harassment","Ass\xe9dio ou amea\xe7as")
C.bHe=new A.ag("sexual","Conte\xfado sexual")
C.bIi=new A.ag("violence","Viol\xeancia")
C.bI4=new A.ag("spam","Spam ou burla")
C.bHE=new A.ag("other","Outro motivo")
C.bmr=x([C.bIq,C.bHF,C.bHe,C.bIi,C.bI4,C.bHE],A.v("q<+(c,c)>"))
C.amU=new A.Y(20,0,20,6)
C.c1R=new A.I("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.xL,null,null,null,null,null,null,null,null)
C.bBM=new A.a_(C.amU,C.c1R,null)
C.a4b=new B.RA(0,"galleryPhoto")
C.Fm=new B.RA(1,"galleryComment")
C.Fn=new B.RA(2,"groupMessage")
C.qr=new B.RA(3,"message")
C.bVQ=new A.C(!0,D.dt,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.bZ1=new A.I("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["MvICmC1yssdcu2+WmqqlsMQ06JM="]=a.current})($__dart_deferred_initializers__);