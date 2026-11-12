((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,F,B={
daO(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cyV(d){var x
A:{if(C.a4h===d){x="fotografia"
break A}if(C.Fl===d){x="coment\xe1rio"
break A}if(C.Fm===d||C.qh===d){x="mensagem"
break A}x=null}return x},
uQ(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$uQ=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a2(0,$.bi(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.L(h).length===0?"esta pessoa":D.f.L(h)
x=3
return A.d(A.cb(null,new B.csA(i,f,g,u),d,!0,!1,null,y.w),$async$uQ)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aMC(d,i,j),$async$uQ)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(H.aMp(d,e,g,u),$async$uQ)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$uQ,w)},
aMC(d,e,f){return B.dcm(d,e,f)},
dcm(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMC=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.cb(null,new B.ciw(e),d,!0,!1,null,o),$async$aMC)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Z().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.b9("report_content",A.Q(["p_kind",B.daO(e),"p_target",f,"p_reason",n],o,q),q),$async$aMC)
case 8:s="Obrigado. A equipa vai rever esta "+B.cyV(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.T(y.q).f.af(A.cP(null,null,null,null,null,D.C,null,A.i(s,null,null,null,null,null,null,null),null,D.a0,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aMC,w)},
Rs:function Rs(d,e){this.a=d
this.b=e},
csA:function csA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csx:function csx(d){this.a=d},
csy:function csy(d){this.a=d},
csz:function csz(d){this.a=d},
ciw:function ciw(d){this.a=d},
civ:function civ(d,e){this.a=d
this.b=e}},C,E,G,H
A=c[0]
D=c[2]
F=c[407]
B=a.updateHolder(c[145],B)
C=c[241]
E=c[196]
G=c[405]
H=c[152]
B.Rs.prototype={
H(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.csA.prototype={
$1(d){var x=this,w=null,v=A.a([A.i8(!1,w,w,w,!0,w,w,w,!0,w,C.Na,w,w,w,w,new B.csx(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.cyV(x.a),w,w,w,C.bVk,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.i8(!1,w,w,w,!0,w,w,w,!0,w,C.awR,w,w,w,w,new B.csy(d),!1,w,w,w,w,w,C.bYz,w,A.i("Bloquear "+x.d,w,w,w,D.eg,w,w,w),w,w,w))
v.push(A.i8(!1,w,w,w,!0,w,w,w,!0,w,C.awz,w,w,w,w,new B.csz(d),!1,w,w,w,w,w,w,w,D.d4,w,w,w))
return A.bo(!0,new A.a_(E.i2,A.I(v,D.x,D.l,D.a_,0,D.w),w),w,D.V,!0)},
$S:56}
B.csx.prototype={
$0(){return A.aC(this.a,!1).b_("report")},
$S:0}
B.csy.prototype={
$0(){return A.aC(this.a,!1).b_("block")},
$S:0}
B.csz.prototype={
$0(){return A.aC(this.a,!1).c8()},
$S:0}
B.ciw.prototype={
$1(d){var x,w,v=null,u=A.a([new A.a_(C.any,A.i("Porque queres denunciar esta "+B.cyV(this.a)+"?",v,v,v,G.GE,v,v,v),v),C.bBz],y.u)
for(x=0;x<6;++x){w=C.bmt[x]
u.push(A.i8(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.civ(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bo(!0,new A.a_(E.i2,A.I(u,D.T,D.l,D.a_,0,D.w),v),v,D.V,!0)},
$S:56}
B.civ.prototype={
$0(){return A.aC(this.a,!1).b_(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Rs,A.fq)
w(A.bv,[B.csA,B.ciw])
w(A.bI,[B.csx,B.csy,B.csz,B.civ])})()
var y={e:A.v("cE"),u:A.v("q<e>"),w:A.v("c"),q:A.v("dC"),b:A.v("@"),v:A.v("~")};(function constants(){var x=a.makeConstList
C.KS=new A.X(0,0,0,2)
C.any=new A.X(20,8,20,4)
C.Na=new A.aZ(F.ua,null,D.dv,null,null,null)
C.awz=new A.aZ(D.iZ,null,null,null,null,null)
C.awR=new A.aZ(D.jK,null,D.D,null,null,null)
C.bI_=new A.ag("offensive","Ofensivo ou \xf3dio")
C.bHk=new A.ag("harassment","Ass\xe9dio ou amea\xe7as")
C.bGY=new A.ag("sexual","Conte\xfado sexual")
C.bHT=new A.ag("violence","Viol\xeancia")
C.bHH=new A.ag("spam","Spam ou burla")
C.bHj=new A.ag("other","Outro motivo")
C.bmt=x([C.bI_,C.bHk,C.bGY,C.bHT,C.bHH,C.bHj],A.v("q<+(c,c)>"))
C.amW=new A.X(20,0,20,6)
C.c1q=new A.J("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.xJ,null,null,null,null,null,null,null,null)
C.bBz=new A.a_(C.amW,C.c1q,null)
C.a4h=new B.Rs(0,"galleryPhoto")
C.Fl=new B.Rs(1,"galleryComment")
C.Fm=new B.Rs(2,"groupMessage")
C.qh=new B.Rs(3,"message")
C.bVk=new A.C(!0,D.dv,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.bYz=new A.J("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["RHlhjJhzpkR27t2+vUf+yr00dz0="]=a.current})($__dart_deferred_initializers__);