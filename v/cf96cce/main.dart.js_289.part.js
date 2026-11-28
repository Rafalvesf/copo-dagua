((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dD4(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cXk(d){var x
A:{if(C.a7n===d){x="fotografia"
break A}if(C.Hl===d){x="coment\xe1rio"
break A}if(C.Hm===d||C.rT===d){x="mensagem"
break A}x=null}return x},
ww(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$ww=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a0(0,$.ba(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.C(h).length===0?"esta pessoa":D.f.C(h)
x=3
return A.d(A.c9(null,new B.cQG(i,f,g,u),!1,d,!0,!1,null,y.w),$async$ww)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUu(d,i,j),$async$ww)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akJ(d,e,g,u),$async$ww)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$ww,w)},
aUu(d,e,f){return B.dEV(d,e,f)},
dEV(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUu=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.c9(null,new B.cEM(e),!1,d,!0,!1,null,o),$async$aUu)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.S().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aM("report_content",A.T(["p_kind",B.dD4(e),"p_target",f,"p_reason",n],o,q),q),$async$aUu)
case 8:s="Obrigado. A equipa vai rever esta "+B.cXk(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a3(A.c6(null,null,null,null,null,D.z,null,A.h(s,null,null,null,null,null,null,null,null),null,D.V,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUu,w)},
V_:function V_(d,e){this.a=d
this.b=e},
cQG:function cQG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cQD:function cQD(d){this.a=d},
cQE:function cQE(d){this.a=d},
cQF:function cQF(d){this.a=d},
cEM:function cEM(d){this.a=d},
cEL:function cEL(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[154],B)
C=c[240]
E=c[273]
F=c[160]
G=c[411]
B.V_.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cQG.prototype={
$1(d){var x=this,w=null,v=A.a([A.jl(!1,w,w,w,!0,w,w,w,!0,w,C.PO,w,w,w,w,new B.cQD(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cXk(x.a),w,w,w,w,C.c6F,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jl(!1,w,w,w,!0,w,w,w,!0,w,C.aE6,w,w,w,w,new B.cQE(d),!1,w,w,w,w,w,C.caa,w,A.h("Bloquear "+x.d,w,w,w,w,D.hd,w,w,w),w,w,w))
v.push(A.jl(!1,w,w,w,!0,w,w,w,!0,w,C.aDR,w,w,w,w,new B.cQF(d),!1,w,w,w,w,w,w,w,D.cP,w,w,w))
return A.bC(!0,new A.Q(D.cn,A.A(v,D.w,D.h,D.K,0,D.u),w),w,D.a_,!0)},
$S:45}
B.cQD.prototype={
$0(){return A.am(this.a,!1).ad("report")},
$S:0}
B.cQE.prototype={
$0(){return A.am(this.a,!1).ad("block")},
$S:0}
B.cQF.prototype={
$0(){return A.am(this.a,!1).bB()},
$S:0}
B.cEM.prototype={
$1(d){var x,w,v=null,u=A.a([new A.Q(C.auo,A.h("Porque queres denunciar esta "+B.cXk(this.a)+"?",v,v,v,v,E.aaQ,v,v,v),v),C.bLT],y.u)
for(x=0;x<6;++x){w=C.bvC[x]
u.push(A.jl(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cEL(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bC(!0,new A.Q(D.cn,A.A(u,D.G,D.h,D.K,0,D.u),v),v,D.a_,!0)},
$S:45}
B.cEL.prototype={
$0(){return A.am(this.a,!1).ad(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.V_,A.f7)
w(A.bw,[B.cQG,B.cEM])
w(A.bQ,[B.cQD,B.cQE,B.cQF,B.cEL])})()
var y={e:A.w("cE"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dm"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.Nq=new A.a0(0,0,0,2)
C.auo=new A.a0(20,8,20,4)
C.PO=new A.b7(G.El,null,D.fq,null,null,null)
C.aDR=new A.b7(D.ei,null,null,null,null,null)
C.aE6=new A.b7(D.o2,null,D.A,null,null,null)
C.bTn=new A.a3("offensive","Ofensivo ou \xf3dio")
C.bSv=new A.a3("harassment","Ass\xe9dio ou amea\xe7as")
C.bRY=new A.a3("sexual","Conte\xfado sexual")
C.bTf=new A.a3("violence","Viol\xeancia")
C.bSW=new A.a3("spam","Spam ou burla")
C.bSu=new A.a3("other","Outro motivo")
C.bvC=x([C.bTn,C.bSv,C.bRY,C.bTf,C.bSW,C.bSu],A.w("r<+(c,c)>"))
C.atS=new A.a0(20,0,20,6)
C.ceT=new A.C("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k9,null,null,null,null,null,null,null,null)
C.bLT=new A.Q(C.atS,C.ceT,null)
C.a7n=new B.V_(0,"galleryPhoto")
C.Hl=new B.V_(1,"galleryComment")
C.Hm=new B.V_(2,"groupMessage")
C.rT=new B.V_(3,"message")
C.c6F=new A.P(!0,D.fq,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.caa=new A.C("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["lREkFsAVWfLsB+8+bYFGQcHP7Lg="]=a.current})($__dart_deferred_initializers__);