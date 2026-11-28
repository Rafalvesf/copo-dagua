((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dEX(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cZ4(d){var x
A:{if(C.a6R===d){x="fotografia"
break A}if(C.H3===d){x="coment\xe1rio"
break A}if(C.H4===d||C.rH===d){x="mensagem"
break A}x=null}return x},
wu(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wu=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a1(0,$.b8(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bW(null,new B.cSp(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wu)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUp(d,i,j),$async$wu)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akG(d,e,g,u),$async$wu)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wu,w)},
aUp(d,e,f){return B.dGP(d,e,f)},
dGP(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUp=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bW(null,new B.cGa(e),!1,d,!0,!1,null,o),$async$aUp)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.P().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aK("report_content",A.R(["p_kind",B.dEX(e),"p_target",f,"p_reason",n],o,q),q),$async$aUp)
case 8:s="Obrigado. A equipa vai rever esta "+B.cZ4(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a2(A.c0(null,null,null,null,null,D.y,null,A.h(s,null,null,null,null,null,null,null,null),null,D.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUp,w)},
V3:function V3(d,e){this.a=d
this.b=e},
cSp:function cSp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSm:function cSm(d){this.a=d},
cSn:function cSn(d){this.a=d},
cSo:function cSo(d){this.a=d},
cGa:function cGa(d){this.a=d},
cG9:function cG9(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[155],B)
C=c[240]
E=c[275]
F=c[160]
G=c[413]
B.V3.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cSp.prototype={
$1(d){var x=this,w=null,v=A.a([A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.Pl,w,w,w,w,new B.cSm(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.cZ4(x.a),w,w,w,w,C.c5r,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.aDi,w,w,w,w,new B.cSn(d),!1,w,w,w,w,w,C.c8U,w,A.h("Bloquear "+x.d,w,w,w,w,D.ir,w,w,w),w,w,w))
v.push(A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.aD3,w,w,w,w,new B.cSo(d),!1,w,w,w,w,w,w,w,D.cR,w,w,w))
return A.bD(!0,new A.S(D.cm,A.B(v,D.v,D.h,D.J),w),w,D.Z,!0)},
$S:44}
B.cSm.prototype={
$0(){return A.am(this.a,!1).ae("report")},
$S:0}
B.cSn.prototype={
$0(){return A.am(this.a,!1).ae("block")},
$S:0}
B.cSo.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
B.cGa.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atz,A.h("Porque queres denunciar esta "+B.cZ4(this.a)+"?",v,v,v,v,E.aal,v,v,v),v),C.bKY],y.u)
for(x=0;x<6;++x){w=C.buH[x]
u.push(A.jp(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cG9(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bD(!0,new A.S(D.cm,A.B(u,D.E,D.h,D.J),v),v,D.Z,!0)},
$S:44}
B.cG9.prototype={
$0(){return A.am(this.a,!1).ae(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.V3,A.eX)
w(A.bw,[B.cSp,B.cGa])
w(A.bO,[B.cSm,B.cSn,B.cSo,B.cG9])})()
var y={e:A.w("cJ"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dr"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.N1=new A.a3(0,0,0,2)
C.atz=new A.a3(20,8,20,4)
C.Pl=new A.b7(G.E1,null,D.fN,null,null,null)
C.aD3=new A.b7(D.ej,null,null,null,null,null)
C.aDi=new A.b7(D.nX,null,D.z,null,null,null)
C.bSu=new A.a0("offensive","Ofensivo ou \xf3dio")
C.bRC=new A.a0("harassment","Ass\xe9dio ou amea\xe7as")
C.bR4=new A.a0("sexual","Conte\xfado sexual")
C.bSm=new A.a0("violence","Viol\xeancia")
C.bS2=new A.a0("spam","Spam ou burla")
C.bRB=new A.a0("other","Outro motivo")
C.buH=x([C.bSu,C.bRC,C.bR4,C.bSm,C.bS2,C.bRB],A.w("r<+(c,c)>"))
C.at2=new A.a3(20,0,20,6)
C.cdF=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.k7,null,null,null,null,null,null,null,null)
C.bKY=new A.S(C.at2,C.cdF,null)
C.a6R=new B.V3(0,"galleryPhoto")
C.H3=new B.V3(1,"galleryComment")
C.H4=new B.V3(2,"groupMessage")
C.rH=new B.V3(3,"message")
C.c5r=new A.Q(!0,D.fN,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c8U=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["5qaUijhDl3zvkRy++xKjVp8t7Yo="]=a.current})($__dart_deferred_initializers__);