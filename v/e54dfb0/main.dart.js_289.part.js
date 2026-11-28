((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,B={
dG_(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
d_5(d){var x
A:{if(C.a7w===d){x="fotografia"
break A}if(C.Hp===d){x="coment\xe1rio"
break A}if(C.Hq===d||C.t_===d){x="mensagem"
break A}x=null}return x},
wA(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$wA=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a0(0,$.ba(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.C(h).length===0?"esta pessoa":D.f.C(h)
x=3
return A.d(A.bZ(null,new B.cTs(i,f,g,u),!1,d,!0,!1,null,y.w),$async$wA)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aV5(d,i,j),$async$wA)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(F.ale(d,e,g,u),$async$wA)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$wA,w)},
aV5(d,e,f){return B.dHS(d,e,f)},
dHS(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aV5=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.bZ(null,new B.cHl(e),!1,d,!0,!1,null,o),$async$aV5)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Q().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.aM("report_content",A.T(["p_kind",B.dG_(e),"p_target",f,"p_reason",n],o,q),q),$async$aV5)
case 8:s="Obrigado. A equipa vai rever esta "+B.d_5(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.O(y.q).f.a2(A.c1(null,null,null,null,null,D.z,null,A.h(s,null,null,null,null,null,null,null,null),null,D.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aV5,w)},
Vf:function Vf(d,e){this.a=d
this.b=e},
cTs:function cTs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTp:function cTp(d){this.a=d},
cTq:function cTq(d){this.a=d},
cTr:function cTr(d){this.a=d},
cHl:function cHl(d){this.a=d},
cHk:function cHk(d,e){this.a=d
this.b=e}},C,E,F,G
A=c[0]
D=c[2]
B=a.updateHolder(c[156],B)
C=c[242]
E=c[275]
F=c[162]
G=c[414]
B.Vf.prototype={
I(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.cTs.prototype={
$1(d){var x=this,w=null,v=A.a([A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.PX,w,w,w,w,new B.cTp(d),!1,w,w,w,w,w,w,w,A.h("Denunciar "+B.d_5(x.a),w,w,w,w,C.c70,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.aEn,w,w,w,w,new B.cTq(d),!1,w,w,w,w,w,C.cay,w,A.h("Bloquear "+x.d,w,w,w,w,D.hj,w,w,w),w,w,w))
v.push(A.jp(!1,w,w,w,!0,w,w,w,!0,w,C.aE7,w,w,w,w,new B.cTr(d),!1,w,w,w,w,w,w,w,D.cV,w,w,w))
return A.bF(!0,new A.R(D.cn,A.x(v,D.v,D.h,D.K,0,D.u),w),w,D.a_,!0)},
$S:45}
B.cTp.prototype={
$0(){return A.am(this.a,!1).af("report")},
$S:0}
B.cTq.prototype={
$0(){return A.am(this.a,!1).af("block")},
$S:0}
B.cTr.prototype={
$0(){return A.am(this.a,!1).bu()},
$S:0}
B.cHl.prototype={
$1(d){var x,w,v=null,u=A.a([new A.R(C.auF,A.h("Porque queres denunciar esta "+B.d_5(this.a)+"?",v,v,v,v,E.ab1,v,v,v),v),C.bMc],y.u)
for(x=0;x<6;++x){w=C.bvW[x]
u.push(A.jp(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.cHk(d,w),!1,v,v,v,v,v,v,v,A.h(w.b,v,v,v,v,v,v,v,v),v,v,v))}return A.bF(!0,new A.R(D.cn,A.x(u,D.G,D.h,D.K,0,D.u),v),v,D.a_,!0)},
$S:45}
B.cHk.prototype={
$0(){return A.am(this.a,!1).af(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Vf,A.f3)
w(A.bw,[B.cTs,B.cHl])
w(A.bQ,[B.cTp,B.cTq,B.cTr,B.cHk])})()
var y={e:A.w("cF"),u:A.w("r<e>"),w:A.w("c"),q:A.w("dp"),b:A.w("@"),v:A.w("~")};(function constants(){var x=a.makeConstList
C.Nw=new A.a2(0,0,0,2)
C.auF=new A.a2(20,8,20,4)
C.PX=new A.b7(G.Ep,null,D.fr,null,null,null)
C.aE7=new A.b7(D.em,null,null,null,null,null)
C.aEn=new A.b7(D.oa,null,D.A,null,null,null)
C.bTJ=new A.a0("offensive","Ofensivo ou \xf3dio")
C.bSR=new A.a0("harassment","Ass\xe9dio ou amea\xe7as")
C.bSj=new A.a0("sexual","Conte\xfado sexual")
C.bTB=new A.a0("violence","Viol\xeancia")
C.bTh=new A.a0("spam","Spam ou burla")
C.bSQ=new A.a0("other","Outro motivo")
C.bvW=x([C.bTJ,C.bSR,C.bSj,C.bTB,C.bTh,C.bSQ],A.w("r<+(c,c)>"))
C.au8=new A.a2(20,0,20,6)
C.cfl=new A.D("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.kf,null,null,null,null,null,null,null,null)
C.bMc=new A.R(C.au8,C.cfl,null)
C.a7w=new B.Vf(0,"galleryPhoto")
C.Hp=new B.Vf(1,"galleryComment")
C.Hq=new B.Vf(2,"groupMessage")
C.t_=new B.Vf(3,"message")
C.c70=new A.P(!0,D.fr,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.cay=new A.D("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["E07XMo1Ot9l4ItWdGh4Gfvn0U8k="]=a.current})($__dart_deferred_initializers__);