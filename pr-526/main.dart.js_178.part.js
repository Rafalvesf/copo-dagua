((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={fc:function fc(d,e,f){this.a=d
this.b=e
this.c=f},aXU:function aXU(){}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[190],C)
D=c[202]
C.fc.prototype={
gLV(){var x=this.c
return x!=null&&new A.an(Date.now(),0,!1).fa(x)},
gVX(){if(!this.gLV())var x=this.a.length===0&&this.b<=0
else x=!0
return x},
aux(d){var x,w,v,u,t,s,r,q,p,o
if(this.gLV())return 0
x=B.k.aF(d*100)
w=this.a
v=w.length
if(v===0)return B.k.aF(x*this.b/100)/100
for(u=0,t=0,s=0;s<v;++s,t=p){r=w[s]
q=r.b
p=q==null?9007199254740991:B.k.aF(q*100)
o=(x<p?x:p)-t
if(o<=0)break
u+=o*r.a/100}return B.k.aF(u)/100},
mL(d){var x,w=this
if(w.gLV())return 0
x=w.a
if(x.length===0)return w.b
if(d<=0)return B.e.gO(x).a
return w.aux(d)/d*100},
V1(d,e){var x,w=this
if(w.gLV())return 0
if(w.a.length===0)return B.k.aF(B.k.aF(d*100)*w.b/100)/100+1
if(e<=0)return 0
x=B.k.aF(w.aux(e)*100*d/e)/100+1
return x>d?d:x},
E1(d){var x,w,v,u,t,s,r=new C.aXU(),q=this.a
if(q.length===0)return A.p(r.$1(this.b))+"%"
x=A.a([],y.d)
for(w=q.length,v=0;v<q.length;q.length===w||(0,A.L)(q),++v){u=q[v]
t=u.b
s=u.a
x.push(t==null?A.p(r.$1(s))+"% acima":A.p(r.$1(s))+"% at\xe9 "+A.p(d.$1(t)))}return B.e.a6(x,", ")}}
var z=a.updateTypes([])
C.aXU.prototype={
$1(d){var x=B.k.am(d,1)===0?B.k.a8(d,0):B.k.a8(d,1)
return A.bs(x,".",",")},
$S:203};(function inheritance(){var x=a.inherit
x(C.fc,A.H)
x(C.aXU,A.bq)})()
var y={d:A.u("q<c>")};(function constants(){var x=a.makeConstList
D.bvR=x([],A.u("q<+pct,upTo(T,T?)>"))
D.f7=new C.fc(D.bvR,0,null)})()};
(a=>{a["AmePGKMvYW57WgpDKOM92N9pSIY="]=a.current})($__dart_deferred_initializers__);