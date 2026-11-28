((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dGi(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
d_9(d){var x
A:{if(C.a6J===d){x="fotografia"
break A}if(C.GV===d){x="coment\xe1rio"
break A}if(C.GW===d||C.rr===d){x="mensagem"
break A}x=null}return x},
wy(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wy=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a_(0,$.b7(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.B(h).length===0?"esta pessoa":D.f.B(h)
x=3
return A.d(A.bQ(null,new B.cTw(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wy)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aUu(d,i,j),$async$wy)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.akG(d,e,g,u),$async$wy)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wy,w)},
aUu(d,e,f){return B.dId(d,e,f)},
dId(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aUu=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bQ(null,new B.cGX(e),!1,d,!0,!1,null,o),$async$aUu)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.P().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aG("report_content",A.R(["p_kind",B.dGi(e),"p_target",f,"p_reason",n],o,q),q),$async$aUu)
case 8:s="Obrigado. A equipa vai rever esta "+B.d_9(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a0(A.bZ(null,null,null,null,null,D.y,null,A.i(s,null,null,null,null,null,null,null),null,D.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aUu,w)},
Vd:function Vd(d,e){this.a=d
this.b=e},
cTw:function cTw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTt:function cTt(d){this.a=d},
cTu:function cTu(d){this.a=d},
cTv:function cTv(d){this.a=d},
cGX:function cGX(d){this.a=d},
cGW:function cGW(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[157],B)
C=c[237]
E=c[271]
F=c[162]
G=c[410]
B.Vd.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cTw.prototype={
$1(d){var x=this,w=null,v=A.a([A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.Pc,w,w,w,w,new B.cTt(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.d_9(x.a),w,w,w,w,C.c5g,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.aDd,w,w,w,w,new B.cTu(d),!1,w,w,w,w,w,C.c83,w,A.i("Bloquear "+x.d,w,w,w,w,D.iv,w,w),w,w,w))
v.push(A.jo(!1,w,w,w,!0,w,w,w,!0,w,C.aCZ,w,w,w,w,new B.cTv(d),!1,w,w,w,w,w,w,w,D.cZ,w,w,w))
return A.bB(!0,new A.S(D.ck,A.y(v,D.u,D.h,D.J),w),w,D.Z,!0)},
$S:31}
B.cTt.prototype={
$0(){return A.al(this.a,!1).ah("report")},
$S:0}
B.cTu.prototype={
$0(){return A.al(this.a,!1).ah("block")},
$S:0}
B.cTv.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
B.cGX.prototype={
$1(d){var x,w,v=null,u=A.a([new A.S(C.atp,A.i("Porque queres denunciar esta "+B.d_9(this.a)+"?",v,v,v,v,E.aag,v,v),v),C.bLq],y.u)
for(x=0;x<6;++x){w=C.buC[x]
u.push(A.jo(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cGW(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bB(!0,new A.S(D.ck,A.y(u,D.E,D.h,D.J),v),v,D.Z,!0)},
$S:31}
B.cGW.prototype={
$0(){return A.al(this.a,!1).ah(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Vd,A.f7)
w(A.bu,[B.cTw,B.cGX])
w(A.bL,[B.cTt,B.cTu,B.cTv,B.cGW])})()
var y={e:A.z("cH"),u:A.z("r<e>"),w:A.z("c"),q:A.z("dl"),b:A.z("@"),v:A.z("~")};(function constants(){var x=a.makeConstList
C.MP=new A.a4(0,0,0,2)
C.atp=new A.a4(20,8,20,4)
C.Pc=new A.b8(G.DY,null,D.fR,null,null,null)
C.aCZ=new A.b8(D.el,null,null,null,null,null)
C.aDd=new A.b8(D.nM,null,D.z,null,null,null)
C.bSq=new A.X("offensive","Ofensivo ou \xf3dio")
C.bRv=new A.X("harassment","Ass\xe9dio ou amea\xe7as")
C.bQY=new A.X("sexual","Conte\xfado sexual")
C.bSi=new A.X("violence","Viol\xeancia")
C.bRW=new A.X("spam","Spam ou burla")
C.bRu=new A.X("other","Outro motivo")
C.buC=x([C.bSq,C.bRv,C.bQY,C.bSi,C.bRW,C.bRu],A.z("r<+(c,c)>"))
C.asT=new A.a4(20,0,20,6)
C.cdM=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.kb,null,null,null,null,null,null,null)
C.bLq=new A.S(C.asT,C.cdM,null)
C.a6J=new B.Vd(0,"galleryPhoto")
C.GV=new B.Vd(1,"galleryComment")
C.GW=new B.Vd(2,"groupMessage")
C.rr=new B.Vd(3,"message")
C.c5g=new A.Q(!0,D.fR,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.c83=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["KnL0lGeDRpUdCZfTpcNt04ufm9s="]=a.current})($__dart_deferred_initializers__);