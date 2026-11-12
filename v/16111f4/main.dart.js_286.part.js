((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,F,B={
d9Z(d){var x
switch(d.a){case 0:x="gallery_photo"
break
case 1:x="gallery_comment"
break
case 2:x="group_message"
break
case 3:x="message"
break
default:x=null}return x},
cy9(d){var x
A:{if(C.a4d===d){x="fotografia"
break A}if(C.Fg===d){x="coment\xe1rio"
break A}if(C.Fh===d||C.qd===d){x="mensagem"
break A}x=null}return x},
uP(d,e,f,g,h,i,j){var x=0,w=A.n(y.v),v,u,t,s,r
var $async$uP=A.j(function(k,l){if(k===1)return A.k(l,w)
for(;;)switch(x){case 0:s=e.a2(0,$.bp(),y.e).b
r=s==null?null:s.a
s=g!=null
if(s&&g===r){x=1
break}u=h==null||D.f.L(h).length===0?"esta pessoa":D.f.L(h)
x=3
return A.d(A.cd(null,new B.crQ(i,f,g,u),d,!0,!1,null,y.w),$async$uP)
case 3:t=l
if(d.e==null){x=1
break}x=t==="report"?4:5
break
case 4:x=6
return A.d(B.aMo(d,i,j),$async$uP)
case 6:case 5:x=t==="block"&&s&&d.e!=null?7:8
break
case 7:x=9
return A.d(H.aMb(d,e,g,u),$async$uP)
case 9:case 8:case 1:return A.l(v,w)}})
return A.m($async$uP,w)},
aMo(d,e,f){return B.dbx(d,e,f)},
dbx(d,e,f){var x=0,w=A.n(y.v),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMo=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:o=y.w
x=3
return A.d(A.cd(null,new B.chR(e),d,!0,!1,null,o),$async$aMo)
case 3:n=h
if(n==null){x=1
break}s=null
u=5
r=$.Z().b
r===$&&A.b()
q=y.b
x=8
return A.d(r.bd("report_content",A.R(["p_kind",B.d9Z(e),"p_target",f,"p_reason",n],o,q),q),$async$aMo)
case 8:s="Obrigado. A equipa vai rever esta "+B.cy9(e)+" em menos de 24 horas."
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
case 7:if(d.e!=null)d.T(y.q).f.ah(A.cV(null,null,null,null,null,D.C,null,A.i(s,null,null,null,null,null,null,null),null,D.a0,null,null,null,null,null,null,null,null,null,null))
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$aMo,w)},
Rm:function Rm(d,e){this.a=d
this.b=e},
crQ:function crQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crN:function crN(d){this.a=d},
crO:function crO(d){this.a=d},
crP:function crP(d){this.a=d},
chR:function chR(d){this.a=d},
chQ:function chQ(d,e){this.a=d
this.b=e}},C,E,G,H
A=c[0]
D=c[2]
F=c[410]
B=a.updateHolder(c[145],B)
C=c[240]
E=c[197]
G=c[408]
H=c[152]
B.Rm.prototype={
H(){return"ReportKind."+this.b}}
var z=a.updateTypes([])
B.crQ.prototype={
$1(d){var x=this,w=null,v=A.a([A.i8(!1,w,w,w,!0,w,w,w,!0,w,C.N5,w,w,w,w,new B.crN(d),!1,w,w,w,w,w,w,w,A.i("Denunciar "+B.cy9(x.a),w,w,w,C.bV5,w,w,w),w,w,w)],y.u)
if(x.b&&x.c!=null)v.push(A.i8(!1,w,w,w,!0,w,w,w,!0,w,C.awH,w,w,w,w,new B.crO(d),!1,w,w,w,w,w,C.bYl,w,A.i("Bloquear "+x.d,w,w,w,D.ef,w,w,w),w,w,w))
v.push(A.i8(!1,w,w,w,!0,w,w,w,!0,w,C.awp,w,w,w,w,new B.crP(d),!1,w,w,w,w,w,w,w,D.dc,w,w,w))
return A.bn(!0,new A.a_(E.i1,A.I(v,D.x,D.m,D.a_,0,D.w),w),w,D.V,!0)},
$S:51}
B.crN.prototype={
$0(){return A.aC(this.a,!1).b0("report")},
$S:0}
B.crO.prototype={
$0(){return A.aC(this.a,!1).b0("block")},
$S:0}
B.crP.prototype={
$0(){return A.aC(this.a,!1).c7()},
$S:0}
B.chR.prototype={
$1(d){var x,w,v=null,u=A.a([new A.a_(C.anr,A.i("Porque queres denunciar esta "+B.cy9(this.a)+"?",v,v,v,G.GC,v,v,v),v),C.bBo],y.u)
for(x=0;x<6;++x){w=C.bmk[x]
u.push(A.i8(!1,v,v,v,!0,v,v,v,!0,v,v,v,v,v,v,new B.chQ(d,w),!1,v,v,v,v,v,v,v,A.i(w.b,v,v,v,v,v,v,v),v,v,v))}return A.bn(!0,new A.a_(E.i1,A.I(u,D.T,D.m,D.a_,0,D.w),v),v,D.V,!0)},
$S:51}
B.chQ.prototype={
$0(){return A.aC(this.a,!1).b0(this.b.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Rm,A.fq)
w(A.bv,[B.crQ,B.chR])
w(A.bI,[B.crN,B.crO,B.crP,B.chQ])})()
var y={e:A.v("cI"),u:A.v("q<e>"),w:A.v("c"),q:A.v("dD"),b:A.v("@"),v:A.v("~")};(function constants(){var x=a.makeConstList
C.KN=new A.V(0,0,0,2)
C.anr=new A.V(20,8,20,4)
C.N5=new A.aY(F.u5,null,D.dv,null,null,null)
C.awp=new A.aY(D.iX,null,null,null,null,null)
C.awH=new A.aY(D.jJ,null,D.E,null,null,null)
C.bHM=new A.ag("offensive","Ofensivo ou \xf3dio")
C.bH9=new A.ag("harassment","Ass\xe9dio ou amea\xe7as")
C.bGN=new A.ag("sexual","Conte\xfado sexual")
C.bHF=new A.ag("violence","Viol\xeancia")
C.bHw=new A.ag("spam","Spam ou burla")
C.bH8=new A.ag("other","Outro motivo")
C.bmk=x([C.bHM,C.bH9,C.bGN,C.bHF,C.bHw,C.bH8],A.v("q<+(c,c)>"))
C.amP=new A.V(20,0,20,6)
C.c19=new A.J("A equipa \xc0 Nossa! rev\xea todas as den\xfancias em menos de 24 horas. Quem publicou n\xe3o sabe que foste tu.",null,D.xD,null,null,null,null,null,null,null,null)
C.bBo=new A.a_(C.amP,C.c19,null)
C.a4d=new B.Rm(0,"galleryPhoto")
C.Fg=new B.Rm(1,"galleryComment")
C.Fh=new B.Rm(2,"groupMessage")
C.qd=new B.Rm(3,"message")
C.bV5=new A.C(!0,D.dv,null,null,null,null,null,D.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
C.bYl=new A.J("Deixas de ver as fotografias, coment\xe1rios e mensagens desta pessoa.",null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["DPq/oLlltRkXJXByuzEEeaAyPhk="]=a.current})($__dart_deferred_initializers__);