((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,D,B={
d8k(d){var x=C.aS('[,()"\\\\]',!0,!1,!1)
if(!(x.b.test(d)||d!==D.f.B(d)))return d
x=C.aY(d,"\\","\\\\")
return'"'+C.aY(x,'"','\\"')+'"'},
oB:function oB(d,e){this.a=d
this.b=e},
Ft:function Ft(d,e,f){this.a=d
this.b=e
this.c=f},
bop:function bop(){}},A
C=c[0]
D=c[2]
B=a.updateHolder(c[124],B)
A=c[239]
B.oB.prototype={
I(){return"PostgresChangeFilterType."+this.b},
gbBO(){var x,w=this
A:{if(A.a5K===w){x="in"
break A}if(A.bPK===w){x="is"
break A}if(A.bPD===w){x="isdistinct"
break A}if(A.y5===w||A.bPA===w||A.bPE===w||A.bPF===w||A.bPG===w||A.bPH===w||A.bPI===w||A.bPJ===w||A.bPB===w||A.bPC===w){x=w.b
break A}x=null}return x}}
B.Ft.prototype={
k(d){var x=this,w=x.a
if(w===A.a5K)return x.b+"=in.("+C.p(y.h.a(x.c).dq(0,new B.bop(),y.g).a2(0,","))+")"
return x.b+"="+w.gbBO()+"."+B.d8k(x.c)}}
var z=a.updateTypes([])
B.bop.prototype={
$1(d){return B.d8k(d)},
$S:73};(function inheritance(){var x=a.inherit
x(B.oB,C.f7)
x(B.Ft,C.M)
x(B.bop,C.bu)})()
var y={h:C.C("w<@>"),g:C.C("c")};(function constants(){A.y5=new B.oB(0,"eq")
A.bPA=new B.oB(1,"neq")
A.bPB=new B.oB(10,"match")
A.bPC=new B.oB(11,"imatch")
A.bPD=new B.oB(12,"isDistinct")
A.bPE=new B.oB(2,"lt")
A.bPF=new B.oB(3,"lte")
A.bPG=new B.oB(4,"gt")
A.bPH=new B.oB(5,"gte")
A.a5K=new B.oB(6,"inFilter")
A.bPI=new B.oB(7,"like")
A.bPJ=new B.oB(8,"ilike")
A.bPK=new B.oB(9,"isFilter")})()};
(a=>{a["FysoNZNL6+v96O5+cj2X/RiiKTE="]=a.current})($__dart_deferred_initializers__);