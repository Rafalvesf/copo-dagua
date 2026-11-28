((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var C,D,B={
d48(d){var x=C.aV('[,()"\\\\]',!0,!1,!1)
if(!(x.b.test(d)||d!==D.f.C(d)))return d
x=C.b_(d,"\\","\\\\")
return'"'+C.b_(x,'"','\\"')+'"'},
ow:function ow(d,e){this.a=d
this.b=e},
Fq:function Fq(d,e,f){this.a=d
this.b=e
this.c=f},
bnv:function bnv(){}},A
C=c[0]
D=c[2]
B=a.updateHolder(c[121],B)
A=c[236]
B.ow.prototype={
I(){return"PostgresChangeFilterType."+this.b},
gbCY(){var x,w=this
A:{if(A.a6p===w){x="in"
break A}if(A.bQS===w){x="is"
break A}if(A.bQL===w){x="isdistinct"
break A}if(A.yi===w||A.bQI===w||A.bQM===w||A.bQN===w||A.bQO===w||A.bQP===w||A.bQQ===w||A.bQR===w||A.bQJ===w||A.bQK===w){x=w.b
break A}x=null}return x}}
B.Fq.prototype={
k(d){var x=this,w=x.a
if(w===A.a6p)return x.b+"=in.("+C.q(y.h.a(x.c).dz(0,new B.bnv(),y.g).a2(0,","))+")"
return x.b+"="+w.gbCY()+"."+B.d48(x.c)}}
var z=a.updateTypes([])
B.bnv.prototype={
$1(d){return B.d48(d)},
$S:68};(function inheritance(){var x=a.inherit
x(B.ow,C.f6)
x(B.Fq,C.K)
x(B.bnv,C.bw)})()
var y={h:C.w("z<@>"),g:C.w("c")};(function constants(){A.yi=new B.ow(0,"eq")
A.bQI=new B.ow(1,"neq")
A.bQJ=new B.ow(10,"match")
A.bQK=new B.ow(11,"imatch")
A.bQL=new B.ow(12,"isDistinct")
A.bQM=new B.ow(2,"lt")
A.bQN=new B.ow(3,"lte")
A.bQO=new B.ow(4,"gt")
A.bQP=new B.ow(5,"gte")
A.a6p=new B.ow(6,"inFilter")
A.bQQ=new B.ow(7,"like")
A.bQR=new B.ow(8,"ilike")
A.bQS=new B.ow(9,"isFilter")})()};
(a=>{a["1icgika+T1QXn2bUOre3iOM0puI="]=a.current})($__dart_deferred_initializers__);