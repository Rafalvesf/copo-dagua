((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,E,B={
dn0(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cJo(d){var x
A:{if(C.a5v===d){x="fotografia"
break A}if(C.FY===d){x="coment\xe1rio"
break A}if(C.FZ===d||C.r6===d){x="mensagem"
break A}x=null}return x},
vM(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$vM=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a1(0,$.b7(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.D(h).length===0?"esta pessoa":D.f.D(h)
x=3
return A.d(A.bG(null,new B.cCT(i,f,g,u),d,!0,!1,null,y.w),$async$vM)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aQi(d,i,j),$async$vM)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(G.aQ5(d,e,g,u),$async$vM)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$vM,w)},
aQi(d,e,f){return B.doN(d,e,f)},
doN(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQi=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bG(null,new B.csn(e),d,!0,!1,null,o),$async$aQi)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.R().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.b2("report_content",A.Q(["p_kind",B.dn0(e),"p_target",f,"p_reason",n],o,q),q),$async$aQi)
case 8:s="Obrigado. A equipa vai rever esta "+B.cJo(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.S(y.q).f.a7(A.cB(null,null,null,null,null,D.z,null,A.i(s,null,null,null,null,null,null,null),null,D.X,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aQi,w)},
Tr:function Tr(d,e){this.a=d
this.b=e},
cCT:function cCT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cCQ:function cCQ(d){this.a=d},
cCR:function cCR(d){this.a=d},
cCS:function cCS(d){this.a=d},
csn:function csn(d){this.a=d},
csm:function csm(d,e){this.a=d
this.b=e}},C,F,G
A=c[0]
D=c[2]
E=c[411]
B=a.updateHolder(c[148],B)
C=c[241]
F=c[409]
G=c[154]
B.Tr.prototype={
H(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cCT.prototype={
$1(d){var x=this,w=null,v=A.a([A.iS(!1,w,w,w,!0,w,w,w,!0,w,C.O8,w,w,w,w,new B.cCQ(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.cJo(x.a),w,w,w,C.c1q,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.iS(!1,w,w,w,!0,w,w,w,!0,w,C.aBw,w,w,w,w,new B.cCR(d),!1,w,w,w,w,w,C.c4O,w,A.i("Bloquear "+x.d,w,w,w,D.f_,w,w,w),w,w,w))
v.push(A.iS(!1,w,w,w,!0,w,w,w,!0,w,C.aBf,w,w,w,w,new B.cCS(d),!1,w,w,w,w,w,w,w,D.cR,w,w,w))
return A.bB(!0,new A.X(D.ef,A.G(v,D.x,D.l,D.U,0,D.w),w),w,D.Z,!0)},
$S:49}
B.cCQ.prototype={
$0(){return A.av(this.a,!1).aD("report")},
$S:0}
B.cCR.prototype={
$0(){return A.av(this.a,!1).aD("block")},
$S:0}
B.cCS.prototype={
$0(){return A.av(this.a,!1).bS()},
$S:0}
B.csn.prototype={
$1(d){var x,w,v=null,u=A.a([new A.X(C.asj,A.i("Porque queres denunciar esta "+B.cJo(this.a)+"?",v,v,v,F.Ho,v,v,v),v),C.bIc],y.u)
for(x=0;x<6;++x){w=C.bsu[x]
u.push(A.iS(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.csm(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bB(!0,new A.X(D.ef,A.G(u,D.I,D.l,D.U,0,D.w),v),v,D.Z,!0)},
$S:49}
B.csm.prototype={
$0(){return A.av(this.a,!1).aD(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Tr,A.fv)
w(A.bv,[B.cCT,B.csn])
w(A.bM,[B.cCQ,B.cCR,B.cCS,B.csm])})()
var y={e:A.w("cx"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dF"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.LU=new A.a0(0,0,0,2)
C.asj=new A.a0(20,8,20,4)
C.O8=new A.b3(E.Db,null,D.ew,null,null,null)
C.aBf=new A.b3(D.ij,null,null,null,null,null)
C.aBw=new A.b3(D.nc,null,D.A,null,null,null)
C.bP3=new A.ac("offensive","Ofensivo ou \xf3dio")
C.bOh=new A.ac("harassment","Ass\xe9dio ou amea\xe7as")
C.bNR=new A.ac("sexual","Conte\xfado sexual")
C.bOX=new A.ac("violence","Viol\xeancia")
C.bOH=new A.ac("spam","Spam ou burla")
C.bOg=new A.ac("other","Outro motivo")
C.bsu=x([C.bP3,C.bOh,C.bNR,C.bOX,C.bOH,C.bOg],A.w("r<+(c,c)>"))
C.arH=new A.a0(20,0,20,6)
C.c9b=new A.C("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.o9,null,null,null,null,null,null,null,null)
C.bIc=new A.X(C.arH,C.c9b,null)
C.a5v=new B.Tr(0,"galleryPhoto")
C.FY=new B.Tr(1,"galleryComment")
C.FZ=new B.Tr(2,"groupMessage")
C.r6=new B.Tr(3,"message")
C.c1q=new A.H(!0,D.ew,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c4O=new A.C("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["WmXrIDmdcQcBcIxZ0Gv3ADcxsSM="]=a.current})($__dart_deferred_initializers__);