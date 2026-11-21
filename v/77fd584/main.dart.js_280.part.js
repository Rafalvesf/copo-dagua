((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,E,B={
dne(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cJA(d){var x
A:{if(C.a5z===d){x="fotografia"
break A}if(C.FW===d){x="coment\xe1rio"
break A}if(C.FX===d||C.r9===d){x="mensagem"
break A}x=null}return x},
vL(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$vL=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a1(0,$.b7(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.D(h).length===0?"esta pessoa":D.f.D(h)
x=3
return A.d(A.bG(null,new B.cD5(i,f,g,u),d,!0,!1,null,y.w),$async$vL)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aQk(d,i,j),$async$vL)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(G.aQ7(d,e,g,u),$async$vL)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$vL,w)},
aQk(d,e,f){return B.dp_(d,e,f)},
dp_(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQk=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bG(null,new B.csz(e),d,!0,!1,null,o),$async$aQk)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.R().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.b2("report_content",A.Q(["p_kind",B.dne(e),"p_target",f,"p_reason",n],o,q),q),$async$aQk)
case 8:s="Obrigado. A equipa vai rever esta "+B.cJA(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.R(y.q).f.a7(A.cB(null,null,null,null,null,D.z,null,A.i(s,null,null,null,null,null,null,null),null,D.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aQk,w)},
Tv:function Tv(d,e){this.a=d
this.b=e},
cD5:function cD5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cD2:function cD2(d){this.a=d},
cD3:function cD3(d){this.a=d},
cD4:function cD4(d){this.a=d},
csz:function csz(d){this.a=d},
csy:function csy(d,e){this.a=d
this.b=e}},C,F,G
A=c[0]
D=c[2]
E=c[409]
B=a.updateHolder(c[148],B)
C=c[240]
F=c[407]
G=c[154]
B.Tv.prototype={
H(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cD5.prototype={
$1(d){var x=this,w=null,v=A.a([A.iS(!1,w,w,w,!0,w,w,w,!0,w,C.Ob,w,w,w,w,new B.cD2(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.cJA(x.a),w,w,w,C.c1s,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.iS(!1,w,w,w,!0,w,w,w,!0,w,C.aBv,w,w,w,w,new B.cD3(d),!1,w,w,w,w,w,C.c4Q,w,A.i("Bloquear "+x.d,w,w,w,D.f_,w,w,w),w,w,w))
v.push(A.iS(!1,w,w,w,!0,w,w,w,!0,w,C.aBf,w,w,w,w,new B.cD4(d),!1,w,w,w,w,w,w,w,D.cR,w,w,w))
return A.bA(!0,new A.V(D.ef,A.G(v,D.x,D.l,D.U,0,D.w),w),w,D.Z,!0)},
$S:50}
B.cD2.prototype={
$0(){return A.av(this.a,!1).aC("report")},
$S:0}
B.cD3.prototype={
$0(){return A.av(this.a,!1).aC("block")},
$S:0}
B.cD4.prototype={
$0(){return A.av(this.a,!1).bS()},
$S:0}
B.csz.prototype={
$1(d){var x,w,v=null,u=A.a([new A.V(C.ask,A.i("Porque queres denunciar esta "+B.cJA(this.a)+"?",v,v,v,F.Hk,v,v,v),v),C.bIb],y.u)
for(x=0;x<6;++x){w=C.bst[x]
u.push(A.iS(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.csy(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bA(!0,new A.V(D.ef,A.G(u,D.I,D.l,D.U,0,D.w),v),v,D.Z,!0)},
$S:50}
B.csy.prototype={
$0(){return A.av(this.a,!1).aC(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Tv,A.fv)
w(A.bv,[B.cD5,B.csz])
w(A.bN,[B.cD2,B.cD3,B.cD4,B.csy])})()
var y={e:A.w("cw"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dF"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.LT=new A.a0(0,0,0,2)
C.ask=new A.a0(20,8,20,4)
C.Ob=new A.b5(E.D8,null,D.ew,null,null,null)
C.aBf=new A.b5(D.ii,null,null,null,null,null)
C.aBv=new A.b5(D.nb,null,D.A,null,null,null)
C.bP6=new A.ab("offensive","Ofensivo ou \xf3dio")
C.bOk=new A.ab("harassment","Ass\xe9dio ou amea\xe7as")
C.bNU=new A.ab("sexual","Conte\xfado sexual")
C.bP_=new A.ab("violence","Viol\xeancia")
C.bOK=new A.ab("spam","Spam ou burla")
C.bOj=new A.ab("other","Outro motivo")
C.bst=x([C.bP6,C.bOk,C.bNU,C.bP_,C.bOK,C.bOj],A.w("r<+(c,c)>"))
C.arL=new A.a0(20,0,20,6)
C.c9f=new A.B("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.o9,null,null,null,null,null,null,null,null)
C.bIb=new A.V(C.arL,C.c9f,null)
C.a5z=new B.Tv(0,"galleryPhoto")
C.FW=new B.Tv(1,"galleryComment")
C.FX=new B.Tv(2,"groupMessage")
C.r9=new B.Tv(3,"message")
C.c1s=new A.H(!0,D.ew,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c4Q=new A.B("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["BVCsIpzjO0s+pF4lQjwn//dIDks="]=a.current})($__dart_deferred_initializers__);