((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dGn(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
d_3(d){var x
A:{if(C.a6X===d){x="fotografia"
break A}if(C.Hb===d){x="coment\xe1rio"
break A}if(C.Hc===d||C.rs===d){x="mensagem"
break A}x=null}return x},
wy(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wy=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a0(0,$.bb(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.C(h).length===0?"esta pessoa":D.f.C(h)
x=3
return A.d(A.bV(null,new B.cTj(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wy)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aV4(d,i,j),$async$wy)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.alb(d,e,g,u),$async$wy)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wy,w)},
aV4(d,e,f){return B.dIl(d,e,f)},
dIl(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aV4=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bV(null,new B.cGn(e),!1,d,!0,!1,null,o),$async$aV4)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aH("report_content",A.R(["p_kind",B.dGn(e),"p_target",f,"p_reason",n],o,q),q),$async$aV4)
case 8:s="Obrigado. A equipa vai rever esta "+B.d_3(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a4(A.c7(null,null,null,null,null,D.y,null,A.h(s,null,null,null,null,null,null,null),null,D.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aV4,w)},
Vp:function Vp(d,e){this.a=d
this.b=e},
cTj:function cTj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTg:function cTg(d){this.a=d},
cTh:function cTh(d){this.a=d},
cTi:function cTi(d){this.a=d},
cGn:function cGn(d){this.a=d},
cGm:function cGm(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[156],B)
C=c[239]
E=c[275]
F=c[164]
G=c[412]
B.Vp.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cTj.prototype={
$1(d){var x=this,w=null,v=A.a([A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.Pn,w,w,w,w,new B.cTg(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.d_3(x.a),w,w,w,w,C.c5R,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.aDv,w,w,w,w,new B.cTh(d),!1,w,w,w,w,w,C.c8F,w,A.h("Bloquear "+x.d,w,w,w,w,D.hU,w,w),w,w,w))
v.push(A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.aDh,w,w,w,w,new B.cTi(d),!1,w,w,w,w,w,w,w,D.d3,w,w,w))
return A.bE(!0,new A.S(D.co,A.y(v,D.u,D.h,D.I),w),w,D.Z,!0)},
$S:32}
B.cTg.prototype={
$0(){return A.an(this.a,!1).ar("report")},
$S:0}
B.cTh.prototype={
$0(){return A.an(this.a,!1).ar("block")},
$S:0}
B.cTi.prototype={
$0(){return A.an(this.a,!1).bi()},
$S:0}
B.cGn.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.ats,A.h("Porque queres denunciar esta "+B.d_3(this.a)+"?",v,v,v,v,E.aav,v,v),v),C.bLf],y.u)
for(x=0;x<6;++x){w=C.buH[x]
u.push(A.jp(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cGm(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bE(!0,new A.S(D.co,A.y(u,D.F,D.h,D.I),v),v,D.Z,!0)},
$S:32}
B.cGm.prototype={
$0(){return A.an(this.a,!1).ar(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Vp,A.fj)
w(A.bv,[B.cTj,B.cGn])
w(A.bN,[B.cTg,B.cTh,B.cTi,B.cGm])})()
var y={e:A.B("cI"),u:A.B("r<e>"),w:A.B("c"),q:A.B("di"),b:A.B("@"),v:A.B("~")};(function constants(){var x=a.makeConstList
C.N5=new A.a3(0,0,0,2)
C.ats=new A.a3(20,8,20,4)
C.Pn=new A.b8(G.Ea,null,D.fX,null,null,null)
C.aDh=new A.b8(D.eC,null,null,null,null,null)
C.aDv=new A.b8(D.nX,null,D.x,null,null,null)
C.bSk=new A.X("offensive","Ofensivo ou \xf3dio")
C.bRp=new A.X("harassment","Ass\xe9dio ou amea\xe7as")
C.bQS=new A.X("sexual","Conte\xfado sexual")
C.bSc=new A.X("violence","Viol\xeancia")
C.bRP=new A.X("spam","Spam ou burla")
C.bRo=new A.X("other","Outro motivo")
C.buH=x([C.bSk,C.bRp,C.bQS,C.bSc,C.bRP,C.bRo],A.B("r<+(c,c)>"))
C.asU=new A.a3(20,0,20,6)
C.cek=new A.F("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.kh,null,null,null,null,null,null,null)
C.bLf=new A.S(C.asU,C.cek,null)
C.a6X=new B.Vp(0,"galleryPhoto")
C.Hb=new B.Vp(1,"galleryComment")
C.Hc=new B.Vp(2,"groupMessage")
C.rs=new B.Vp(3,"message")
C.c5R=new A.P(!0,D.fX,null,null,null,null,null,D.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c8F=new A.F("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["JhUy+MHahcHQjh4I8EjnDhgJaS0="]=a.current})($__dart_deferred_initializers__);