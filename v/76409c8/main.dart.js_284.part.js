((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dGa(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cZS(d){var x
A:{if(C.a6S===d){x="fotografia"
break A}if(C.H4===d){x="coment\xe1rio"
break A}if(C.H5===d||C.ro===d){x="mensagem"
break A}x=null}return x},
wz(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wz=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a0(0,$.bb(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.C(h).length===0?"esta pessoa":D.f.C(h)
x=3
return A.d(A.bR(null,new B.cT6(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wz)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aV5(d,i,j),$async$wz)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.al8(d,e,g,u),$async$wz)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wz,w)},
aV5(d,e,f){return B.dI8(d,e,f)},
dI8(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aV5=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bR(null,new B.cGd(e),!1,d,!0,!1,null,o),$async$aV5)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aH("report_content",A.R(["p_kind",B.dGa(e),"p_target",f,"p_reason",n],o,q),q),$async$aV5)
case 8:s="Obrigado. A equipa vai rever esta "+B.cZS(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a4(A.c7(null,null,null,null,null,D.x,null,A.h(s,null,null,null,null,null,null,null),null,D.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aV5,w)},
Vn:function Vn(d,e){this.a=d
this.b=e},
cT6:function cT6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cT3:function cT3(d){this.a=d},
cT4:function cT4(d){this.a=d},
cT5:function cT5(d){this.a=d},
cGd:function cGd(d){this.a=d},
cGc:function cGc(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[156],B)
C=c[239]
E=c[275]
F=c[164]
G=c[413]
B.Vn.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cT6.prototype={
$1(d){var x=this,w=null,v=A.a([A.jq(!1,w,w,w,!0,w,w,w,!0,w,C.Pi,w,w,w,w,new B.cT3(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cZS(x.a),w,w,w,w,C.c5W,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jq(!1,w,w,w,!0,w,w,w,!0,w,C.aDu,w,w,w,w,new B.cT4(d),!1,w,w,w,w,w,C.c8L,w,A.h("Bloquear "+x.d,w,w,w,w,D.hS,w,w),w,w,w))
v.push(A.jq(!1,w,w,w,!0,w,w,w,!0,w,C.aDg,w,w,w,w,new B.cT5(d),!1,w,w,w,w,w,w,w,D.d3,w,w,w))
return A.bF(!0,new A.S(D.co,A.x(v,D.u,D.h,D.I),w),w,D.Y,!0)},
$S:32}
B.cT3.prototype={
$0(){return A.ap(this.a,!1).au("report")},
$S:0}
B.cT4.prototype={
$0(){return A.ap(this.a,!1).au("block")},
$S:0}
B.cT5.prototype={
$0(){return A.ap(this.a,!1).by()},
$S:0}
B.cGd.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atr,A.h("Porque queres denunciar esta "+B.cZS(this.a)+"?",v,v,v,v,E.aat,v,v),v),C.bLg],y.u)
for(x=0;x<6;++x){w=C.buH[x]
u.push(A.jq(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cGc(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bF(!0,new A.S(D.co,A.x(u,D.F,D.h,D.I),v),v,D.Y,!0)},
$S:32}
B.cGc.prototype={
$0(){return A.ap(this.a,!1).au(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Vn,A.fj)
w(A.bv,[B.cT6,B.cGd])
w(A.bO,[B.cT3,B.cT4,B.cT5,B.cGc])})()
var y={e:A.B("cH"),u:A.B("r<e>"),w:A.B("c"),q:A.B("dj"),b:A.B("@"),v:A.B("~")};(function constants(){var x=a.makeConstList
C.N0=new A.a3(0,0,0,2)
C.atr=new A.a3(20,8,20,4)
C.Pi=new A.ba(G.E4,null,D.fW,null,null,null)
C.aDg=new A.ba(D.id,null,null,null,null,null)
C.aDu=new A.ba(D.nT,null,D.z,null,null,null)
C.bSl=new A.X("offensive","Ofensivo ou \xf3dio")
C.bRq=new A.X("harassment","Ass\xe9dio ou amea\xe7as")
C.bQT=new A.X("sexual","Conte\xfado sexual")
C.bSd=new A.X("violence","Viol\xeancia")
C.bRQ=new A.X("spam","Spam ou burla")
C.bRp=new A.X("other","Outro motivo")
C.buH=x([C.bSl,C.bRq,C.bQT,C.bSd,C.bRQ,C.bRp],A.B("r<+(c,c)>"))
C.asT=new A.a3(20,0,20,6)
C.ceq=new A.E("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.kf,null,null,null,null,null,null,null)
C.bLg=new A.S(C.asT,C.ceq,null)
C.a6S=new B.Vn(0,"galleryPhoto")
C.H4=new B.Vn(1,"galleryComment")
C.H5=new B.Vn(2,"groupMessage")
C.ro=new B.Vn(3,"message")
C.c5W=new A.P(!0,D.fW,null,null,null,null,null,D.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c8L=new A.E("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["FE1/1PN7xfNob1cpkah0bweXgtU="]=a.current})($__dart_deferred_initializers__);