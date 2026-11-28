((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dvB(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cQK(d){var x
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
return A.d(A.ck(null,new B.cK3(i,f,g,u),!1,d,!0,!1,null,y.w),$async$w8)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aS0(d,i,j),$async$w8)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.aiY(d,e,g,u),$async$w8)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$w8,w)},
aS0(d,e,f){return B.dxr(d,e,f)},
dxr(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aS0=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.ck(null,new B.cyK(e),!1,d,!0,!1,null,o),$async$aS0)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.T().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aU("report_content",A.R(["p_kind",B.dvB(e),"p_target",f,"p_reason",n],o,q),q),$async$aS0)
case 8:s="Obrigado. A equipa vai rever esta "+B.cQK(e)+" em menos de 24 horas."
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
return A.m($async$aS0,w)},
U9:function U9(d,e){this.a=d
this.b=e},
cK3:function cK3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cK0:function cK0(d){this.a=d},
cK1:function cK1(d){this.a=d},
cK2:function cK2(d){this.a=d},
cyK:function cyK(d){this.a=d},
cyJ:function cyJ(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[146],B)
C=c[222]
E=c[383]
F=c[152]
G=c[386]
B.U9.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cK3.prototype={
$1(d){var x=this,w=null,v=A.a([A.iZ(!1,w,w,w,!0,w,w,w,!0,w,C.OC,w,w,w,w,new B.cK0(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.cQK(x.a),w,w,w,w,C.c2s,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.iZ(!1,w,w,w,!0,w,w,w,!0,w,C.aC4,w,w,w,w,new B.cK1(d),!1,w,w,w,w,w,C.c5R,w,A.i("Bloquear "+x.d,w,w,w,w,D.h_,w,w,w),w,w,w))
v.push(A.iZ(!1,w,w,w,!0,w,w,w,!0,w,C.aBR,w,w,w,w,new B.cK2(d),!1,w,w,w,w,w,w,w,D.cK,w,w,w))
return A.bH(!0,new A.S(D.cC,A.C(v,D.x,D.j,D.P,0,D.v),w),w,D.a0,!0)},
$S:42}
B.cK0.prototype={
$0(){return A.as(this.a,!1).ak("report")},
$S:0}
B.cK1.prototype={
$0(){return A.as(this.a,!1).ak("block")},
$S:0}
B.cK2.prototype={
$0(){return A.as(this.a,!1).bJ()},
$S:0}
B.cyK.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.asF,A.i("Porque queres denunciar esta "+B.cQK(this.a)+"?",v,v,v,v,E.HO,v,v,v),v),C.bJ1],y.u)
for(x=0;x<6;++x){w=C.bt9[x]
u.push(A.iZ(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cyJ(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bH(!0,new A.S(D.cC,A.C(u,D.J,D.j,D.P,0,D.v),v),v,D.a0,!0)},
$S:42}
B.cyJ.prototype={
$0(){return A.as(this.a,!1).ak(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.U9,A.fx)
w(A.bx,[B.cK3,B.cyK])
w(A.bR,[B.cK0,B.cK1,B.cK2,B.cyJ])})()
var y={e:A.x("cG"),u:A.x("t<e>"),w:A.x("c"),q:A.x("dA"),b:A.x("@"),v:A.x("~")};(function constants(){var x=a.makeConstList
C.Mh=new A.a0(0,0,0,2)
C.asF=new A.a0(20,8,20,4)
C.OC=new A.be(G.Dq,null,D.eA,null,null,null)
C.aBR=new A.be(D.f1,null,null,null,null,null)
C.aC4=new A.be(D.nz,null,D.A,null,null,null)
C.bQ9=new A.a4("offensive","Ofensivo ou \xf3dio")
C.bPm=new A.a4("harassment","Ass\xe9dio ou amea\xe7as")
C.bOS=new A.a4("sexual","Conte\xfado sexual")
C.bQ1=new A.a4("violence","Viol\xeancia")
C.bPN=new A.a4("spam","Spam ou burla")
C.bPl=new A.a4("other","Outro motivo")
C.bt9=x([C.bQ9,C.bPm,C.bOS,C.bQ1,C.bPN,C.bPl],A.x("t<+(c,c)>"))
C.as6=new A.a0(20,0,20,6)
C.cae=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.jM,null,null,null,null,null,null,null,null)
C.bJ1=new A.S(C.as6,C.cae,null)
C.a63=new B.U9(0,"galleryPhoto")
C.Gh=new B.U9(1,"galleryComment")
C.Gi=new B.U9(2,"groupMessage")
C.rk=new B.U9(3,"message")
C.c2s=new A.M(!0,D.eA,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c5R=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["2Wf9bQPHVniU8/vCFuUMiCDlkF4="]=a.current})($__dart_deferred_initializers__);