((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dvw(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cQH(d){var x
A:{if(C.a63===d){x="fotografia"
break A}if(C.Gh===d){x="coment\xe1rio"
break A}if(C.Gi===d||C.rk===d){x="mensagem"
break A}x=null}return x},
w8(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$w8=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a1(0,$.b8(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.D(h).length===0?"esta pessoa":D.f.D(h)
x=3
return A.d(A.ck(null,new B.cK0(i,f,g,u),!1,d,!0,!1,null,y.w),$async$w8)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aS_(d,i,j),$async$w8)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.aiX(d,e,g,u),$async$w8)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$w8,w)},
aS_(d,e,f){return B.dxm(d,e,f)},
dxm(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aS_=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.ck(null,new B.cyH(e),!1,d,!0,!1,null,o),$async$aS_)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.T().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aU("report_content",A.S(["p_kind",B.dvw(e),"p_target",f,"p_reason",n],o,q),q),$async$aS_)
case 8:s="Obrigado. A equipa vai rever esta "+B.cQH(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a4(A.cz(null,null,null,null,null,D.z,null,A.i(s,null,null,null,null,null,null,null,null),null,D.W,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aS_,w)},
U7:function U7(d,e){this.a=d
this.b=e},
cK0:function cK0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cJY:function cJY(d){this.a=d},
cJZ:function cJZ(d){this.a=d},
cK_:function cK_(d){this.a=d},
cyH:function cyH(d){this.a=d},
cyG:function cyG(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[145],B)
C=c[222]
E=c[382]
F=c[151]
G=c[385]
B.U7.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cK0.prototype={
$1(d){var x=this,w=null,v=A.a([A.iZ(!1,w,w,w,!0,w,w,w,!0,w,C.OC,w,w,w,w,new B.cJY(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.cQH(x.a),w,w,w,w,C.c2n,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.iZ(!1,w,w,w,!0,w,w,w,!0,w,C.aC2,w,w,w,w,new B.cJZ(d),!1,w,w,w,w,w,C.c5M,w,A.i("Bloquear "+x.d,w,w,w,w,D.fv,w,w,w),w,w,w))
v.push(A.iZ(!1,w,w,w,!0,w,w,w,!0,w,C.aBP,w,w,w,w,new B.cK_(d),!1,w,w,w,w,w,w,w,D.cK,w,w,w))
return A.bH(!0,new A.R(D.cS,A.B(v,D.x,D.j,D.P,0,D.v),w),w,D.a0,!0)},
$S:42}
B.cJY.prototype={
$0(){return A.as(this.a,!1).ak("report")},
$S:0}
B.cJZ.prototype={
$0(){return A.as(this.a,!1).ak("block")},
$S:0}
B.cK_.prototype={
$0(){return A.as(this.a,!1).bJ()},
$S:0}
B.cyH.prototype={
$1(d){var x,w,v=null,u=A.a([new A.R(C.asF,A.i("Porque queres denunciar esta "+B.cQH(this.a)+"?",v,v,v,v,E.HO,v,v,v),v),C.bIY],y.u)
for(x=0;x<6;++x){w=C.bt4[x]
u.push(A.iZ(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cyG(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bH(!0,new A.R(D.cS,A.B(u,D.J,D.j,D.P,0,D.v),v),v,D.a0,!0)},
$S:42}
B.cyG.prototype={
$0(){return A.as(this.a,!1).ak(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.U7,A.fy)
w(A.bw,[B.cK0,B.cyH])
w(A.bR,[B.cJY,B.cJZ,B.cK_,B.cyG])})()
var y={e:A.x("cG"),u:A.x("t<e>"),w:A.x("c"),q:A.x("dA"),b:A.x("@"),v:A.x("~")};(function constants(){var x=a.makeConstList
C.Mh=new A.a0(0,0,0,2)
C.asF=new A.a0(20,8,20,4)
C.OC=new A.be(G.Dq,null,D.eA,null,null,null)
C.aBP=new A.be(D.f1,null,null,null,null,null)
C.aC2=new A.be(D.nA,null,D.A,null,null,null)
C.bQ5=new A.a5("offensive","Ofensivo ou \xf3dio")
C.bPi=new A.a5("harassment","Ass\xe9dio ou amea\xe7as")
C.bOO=new A.a5("sexual","Conte\xfado sexual")
C.bPY=new A.a5("violence","Viol\xeancia")
C.bPJ=new A.a5("spam","Spam ou burla")
C.bPh=new A.a5("other","Outro motivo")
C.bt4=x([C.bQ5,C.bPi,C.bOO,C.bPY,C.bPJ,C.bPh],A.x("t<+(c,c)>"))
C.as6=new A.a0(20,0,20,6)
C.caa=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.jN,null,null,null,null,null,null,null,null)
C.bIY=new A.R(C.as6,C.caa,null)
C.a63=new B.U7(0,"galleryPhoto")
C.Gh=new B.U7(1,"galleryComment")
C.Gi=new B.U7(2,"groupMessage")
C.rk=new B.U7(3,"message")
C.c2n=new A.K(!0,D.eA,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c5M=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["GrJE65DlqGZG+iLD04pjLVOCLOc="]=a.current})($__dart_deferred_initializers__);