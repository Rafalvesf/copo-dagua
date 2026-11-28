((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dvY(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cR6(d){var x
A:{if(C.a69===d){x="fotografia"
break A}if(C.Gi===d){x="coment\xe1rio"
break A}if(C.Gj===d||C.rk===d){x="mensagem"
break A}x=null}return x},
wd(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wd=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a1(0,$.b8(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.D(h).length===0?"esta pessoa":D.f.D(h)
x=3
return A.d(A.ck(null,new B.cKw(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wd)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aSf(d,i,j),$async$wd)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.aj8(d,e,g,u),$async$wd)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wd,w)},
aSf(d,e,f){return B.dxO(d,e,f)},
dxO(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aSf=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.ck(null,new B.cz6(e),!1,d,!0,!1,null,o),$async$aSf)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.T().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aU("report_content",A.S(["p_kind",B.dvY(e),"p_target",f,"p_reason",n],o,q),q),$async$aSf)
case 8:s="Obrigado. A equipa vai rever esta "+B.cR6(e)+" em menos de 24 horas."
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
return A.m($async$aSf,w)},
Ug:function Ug(d,e){this.a=d
this.b=e},
cKw:function cKw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cKt:function cKt(d){this.a=d},
cKu:function cKu(d){this.a=d},
cKv:function cKv(d){this.a=d},
cz6:function cz6(d){this.a=d},
cz5:function cz5(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[149],B)
C=c[225]
E=c[259]
F=c[155]
G=c[392]
B.Ug.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cKw.prototype={
$1(d){var x=this,w=null,v=A.a([A.iZ(!1,w,w,w,!0,w,w,w,!0,w,C.OG,w,w,w,w,new B.cKt(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.cR6(x.a),w,w,w,w,C.c3g,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.iZ(!1,w,w,w,!0,w,w,w,!0,w,C.aCh,w,w,w,w,new B.cKu(d),!1,w,w,w,w,w,C.c6F,w,A.i("Bloquear "+x.d,w,w,w,w,D.h1,w,w,w),w,w,w))
v.push(A.iZ(!1,w,w,w,!0,w,w,w,!0,w,C.aC3,w,w,w,w,new B.cKv(d),!1,w,w,w,w,w,w,w,D.cK,w,w,w))
return A.bG(!0,new A.Q(D.cu,A.B(v,D.x,D.j,D.N,0,D.v),w),w,D.a_,!0)},
$S:45}
B.cKt.prototype={
$0(){return A.as(this.a,!1).ak("report")},
$S:0}
B.cKu.prototype={
$0(){return A.as(this.a,!1).ak("block")},
$S:0}
B.cKv.prototype={
$0(){return A.as(this.a,!1).bJ()},
$S:0}
B.cz6.prototype={
$1(d){var x,w,v=null,u=A.a([new A.Q(C.asN,A.i("Porque queres denunciar esta "+B.cR6(this.a)+"?",v,v,v,v,E.HS,v,v,v),v),C.bJp],y.u)
for(x=0;x<6;++x){w=C.bts[x]
u.push(A.iZ(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cz5(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bG(!0,new A.Q(D.cu,A.B(u,D.J,D.j,D.N,0,D.v),v),v,D.a_,!0)},
$S:45}
B.cz5.prototype={
$0(){return A.as(this.a,!1).ak(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Ug,A.fx)
w(A.bx,[B.cKw,B.cz6])
w(A.bR,[B.cKt,B.cKu,B.cKv,B.cz5])})()
var y={e:A.w("cG"),u:A.w("t<e>"),w:A.w("c"),q:A.w("dA"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.Ml=new A.a0(0,0,0,2)
C.asN=new A.a0(20,8,20,4)
C.OG=new A.bc(G.Dr,null,D.eC,null,null,null)
C.aC3=new A.bc(D.f2,null,null,null,null,null)
C.aCh=new A.bc(D.nz,null,D.A,null,null,null)
C.bQB=new A.a4("offensive","Ofensivo ou \xf3dio")
C.bPO=new A.a4("harassment","Ass\xe9dio ou amea\xe7as")
C.bPj=new A.a4("sexual","Conte\xfado sexual")
C.bQt=new A.a4("violence","Viol\xeancia")
C.bQe=new A.a4("spam","Spam ou burla")
C.bPN=new A.a4("other","Outro motivo")
C.bts=x([C.bQB,C.bPO,C.bPj,C.bQt,C.bQe,C.bPN],A.w("t<+(c,c)>"))
C.asg=new A.a0(20,0,20,6)
C.cb3=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.jN,null,null,null,null,null,null,null,null)
C.bJp=new A.Q(C.asg,C.cb3,null)
C.a69=new B.Ug(0,"galleryPhoto")
C.Gi=new B.Ug(1,"galleryComment")
C.Gj=new B.Ug(2,"groupMessage")
C.rk=new B.Ug(3,"message")
C.c3g=new A.M(!0,D.eC,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c6F=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["1Ah2K+i27/hQVOI7bHs7N/inZ0A="]=a.current})($__dart_deferred_initializers__);