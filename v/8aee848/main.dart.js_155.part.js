((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,D,B={
d8e(d){var x=C.aS('[,()"\\\\]',!0,!1,!1)
if(!(x.b.test(d)||d!==D.f.B(d)))return d
x=C.aY(d,"\\","\\\\")
return'"'+C.aY(x,'"','\\"')+'"'},
oA:function oA(d,e){this.a=d
this.b=e},
Ft:function Ft(d,e,f){this.a=d
this.b=e
this.c=f},
bop:function bop(){}},A
C=c[0]
D=c[2]
B=a.updateHolder(c[124],B)
A=c[239]
B.oA.prototype={
I(){return"PostgresChangeFilterType."+this.b},
gbBO(){var x,w=this
A:{if(A.a5M===w){x="in"
break A}if(A.bPK===w){x="is"
break A}if(A.bPD===w){x="isdistinct"
break A}if(A.y6===w||A.bPA===w||A.bPE===w||A.bPF===w||A.bPG===w||A.bPH===w||A.bPI===w||A.bPJ===w||A.bPB===w||A.bPC===w){x=w.b
break A}x=null}return x}}
B.Ft.prototype={
k(d){var x=this,w=x.a
if(w===A.a5M)return x.b+"=in.("+C.p(y.h.a(x.c).dq(0,new B.bop(),y.g).a2(0,","))+")"
return x.b+"="+w.gbBO()+"."+B.d8e(x.c)}}
var z=a.updateTypes([])
B.bop.prototype={
$1(d){return B.d8e(d)},
$S:70};(function inheritance(){var x=a.inherit
x(B.oA,C.f7)
x(B.Ft,C.M)
x(B.bop,C.bu)})()
var y={h:C.z("w<@>"),g:C.z("c")};(function constants(){A.y6=new B.oA(0,"eq")
A.bPA=new B.oA(1,"neq")
A.bPB=new B.oA(10,"match")
A.bPC=new B.oA(11,"imatch")
A.bPD=new B.oA(12,"isDistinct")
A.bPE=new B.oA(2,"lt")
A.bPF=new B.oA(3,"lte")
A.bPG=new B.oA(4,"gt")
A.bPH=new B.oA(5,"gte")
A.a5M=new B.oA(6,"inFilter")
A.bPI=new B.oA(7,"like")
A.bPJ=new B.oA(8,"ilike")
A.bPK=new B.oA(9,"isFilter")})()};
(a=>{a["qyI3LTcu2QTLX7fjM0uIAuFQI8E="]=a.current})($__dart_deferred_initializers__);