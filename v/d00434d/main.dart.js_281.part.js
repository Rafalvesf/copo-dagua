((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dC0(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cWj(d){var x
A:{if(C.a7q===d){x="fotografia"
break A}if(C.Hh===d){x="coment\xe1rio"
break A}if(C.Hi===d||C.rO===d){x="mensagem"
break A}x=null}return x},
wv(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wv=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a0(0,$.b8(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.C(h).length===0?"esta pessoa":D.f.C(h)
x=3
return A.d(A.cc(null,new B.cPF(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wv)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUj(d,i,j),$async$wv)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akB(d,e,g,u),$async$wv)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wv,w)},
aUj(d,e,f){return B.dDS(d,e,f)},
dDS(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUj=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.cc(null,new B.cDO(e),!1,d,!0,!1,null,o),$async$aUj)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.T().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aS("report_content",A.S(["p_kind",B.dC0(e),"p_target",f,"p_reason",n],o,q),q),$async$aUj)
case 8:s="Obrigado. A equipa vai rever esta "+B.cWj(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a4(A.cx(null,null,null,null,null,D.z,null,A.h(s,null,null,null,null,null,null,null,null),null,D.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUj,w)},
UT:function UT(d,e){this.a=d
this.b=e},
cPF:function cPF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cPC:function cPC(d){this.a=d},
cPD:function cPD(d){this.a=d},
cPE:function cPE(d){this.a=d},
cDO:function cDO(d){this.a=d},
cDN:function cDN(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[153],B)
C=c[234]
E=c[269]
F=c[161]
G=c[409]
B.UT.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cPF.prototype={
$1(d){var x=this,w=null,v=A.a([A.jk(!1,w,w,w,!0,w,w,w,!0,w,C.PL,w,w,w,w,new B.cPC(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cWj(x.a),w,w,w,w,C.c6F,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jk(!1,w,w,w,!0,w,w,w,!0,w,C.aEc,w,w,w,w,new B.cPD(d),!1,w,w,w,w,w,C.caa,w,A.h("Bloquear "+x.d,w,w,w,w,D.hc,w,w,w),w,w,w))
v.push(A.jk(!1,w,w,w,!0,w,w,w,!0,w,C.aDZ,w,w,w,w,new B.cPE(d),!1,w,w,w,w,w,w,w,D.cP,w,w,w))
return A.bC(!0,new A.Q(D.cm,A.B(v,D.w,D.i,D.K,0,D.v),w),w,D.Z,!0)},
$S:46}
B.cPC.prototype={
$0(){return A.an(this.a,!1).ak("report")},
$S:0}
B.cPD.prototype={
$0(){return A.an(this.a,!1).ak("block")},
$S:0}
B.cPE.prototype={
$0(){return A.an(this.a,!1).bB()},
$S:0}
B.cDO.prototype={
$1(d){var x,w,v=null,u=A.a([new A.Q(C.auw,A.h("Porque queres denunciar esta "+B.cWj(this.a)+"?",v,v,v,v,E.IQ,v,v,v),v),C.bLX],y.u)
for(x=0;x<6;++x){w=C.bvH[x]
u.push(A.jk(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cDN(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bC(!0,new A.Q(D.cm,A.B(u,D.I,D.i,D.K,0,D.v),v),v,D.Z,!0)},
$S:46}
B.cDN.prototype={
$0(){return A.an(this.a,!1).ak(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.UT,A.f6)
w(A.bw,[B.cPF,B.cDO])
w(A.bR,[B.cPC,B.cPD,B.cPE,B.cDN])})()
var y={e:A.w("cE"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dq"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.No=new A.a0(0,0,0,2)
C.auw=new A.a0(20,8,20,4)
C.PL=new A.ba(G.Ej,null,D.fo,null,null,null)
C.aDZ=new A.ba(D.ew,null,null,null,null,null)
C.aEc=new A.ba(D.nV,null,D.A,null,null,null)
C.bTu=new A.a3("offensive","Ofensivo ou \xf3dio")
C.bSz=new A.a3("harassment","Ass\xe9dio ou amea\xe7as")
C.bS1=new A.a3("sexual","Conte\xfado sexual")
C.bTl=new A.a3("violence","Viol\xeancia")
C.bT2=new A.a3("spam","Spam ou burla")
C.bSy=new A.a3("other","Outro motivo")
C.bvH=x([C.bTu,C.bSz,C.bS1,C.bTl,C.bT2,C.bSy],A.w("r<+(c,c)>"))
C.au_=new A.a0(20,0,20,6)
C.ceP=new A.C("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k3,null,null,null,null,null,null,null,null)
C.bLX=new A.Q(C.au_,C.ceP,null)
C.a7q=new B.UT(0,"galleryPhoto")
C.Hh=new B.UT(1,"galleryComment")
C.Hi=new B.UT(2,"groupMessage")
C.rO=new B.UT(3,"message")
C.c6F=new A.N(!0,D.fo,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.caa=new A.C("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["H3CtJ13ImljXPIJAdA8iQjwB+1k="]=a.current})($__dart_deferred_initializers__);