((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={fb:function fb(d,e,f){this.a=d
this.b=e
this.c=f},aXj:function aXj(){}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[180],C)
D=c[190]
C.fb.prototype={
gLp(){var x=this.c
return x!=null&&new A.ao(Date.now(),0,!1).f8(x)},
gV8(){if(!this.gLp())var x=this.a.length===0&&this.b<=0
else x=!0
return x},
atE(d){var x,w,v,u,t,s,r,q,p,o
if(this.gLp())return 0
x=B.k.aN(d*100)
w=this.a
v=w.length
if(v===0)return B.k.aN(x*this.b/100)/100
for(u=0,t=0,s=0;s<v;++s,t=p){r=w[s]
q=r.b
p=q==null?9007199254740991:B.k.aN(q*100)
o=(x<p?x:p)-t
if(o<=0)break
u+=o*r.a/100}return B.k.aN(u)/100},
oP(d){var x,w=this
if(w.gLp())return 0
x=w.a
if(x.length===0)return w.b
if(d<=0)return B.e.gN(x).a
return w.atE(d)/d*100},
a6d(d,e){var x,w=this
if(w.gLp())return 0
if(w.a.length===0)return B.k.aN(B.k.aN(d*100)*w.b/100)/100+1
if(e<=0)return 0
x=B.k.aN(w.atE(e)*100*d/e)/100+1
return x>d?d:x},
Dz(d){var x,w,v,u,t,s,r=new C.aXj(),q=this.a
if(q.length===0)return A.u(r.$1(this.b))+"%"
x=A.a([],y.d)
for(w=q.length,v=0;v<q.length;q.length===w||(0,A.L)(q),++v){u=q[v]
t=u.b
s=u.a
x.push(t==null?A.u(r.$1(s))+"% acima":A.u(r.$1(s))+"% at\xe9 "+A.u(d.$1(t)))}return B.e.aq(x,", ")}}
var z=a.updateTypes([])
C.aXj.prototype={
$1(d){var x=B.k.aj(d,1)===0?B.k.a8(d,0):B.k.a8(d,1)
return A.b4(x,".",",")},
$S:173};(function inheritance(){var x=a.inherit
x(C.fb,A.F)
x(C.aXj,A.bv)})()
var y={d:A.v("q<c>")};(function constants(){var x=a.makeConstList
D.br9=x([],A.v("q<+pct,upTo(X,X?)>"))
D.fX=new C.fb(D.br9,0,null)})()};
(a=>{a["JSwqD3Tv+JgwJwJlEBN4Abbcw0o="]=a.current})($__dart_deferred_initializers__);