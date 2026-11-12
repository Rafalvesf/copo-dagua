((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B,C={fc:function fc(d,e,f){this.a=d
this.b=e
this.c=f},aXD:function aXD(){}},D
A=c[0]
B=c[2]
C=a.updateHolder(c[180],C)
D=c[193]
C.fc.prototype={
gLz(){var x=this.c
return x!=null&&new A.am(Date.now(),0,!1).fj(x)},
gVq(){if(!this.gLz())var x=this.a.length===0&&this.b<=0
else x=!0
return x},
atX(d){var x,w,v,u,t,s,r,q,p,o
if(this.gLz())return 0
x=B.k.aP(d*100)
w=this.a
v=w.length
if(v===0)return B.k.aP(x*this.b/100)/100
for(u=0,t=0,s=0;s<v;++s,t=p){r=w[s]
q=r.b
p=q==null?9007199254740991:B.k.aP(q*100)
o=(x<p?x:p)-t
if(o<=0)break
u+=o*r.a/100}return B.k.aP(u)/100},
oP(d){var x,w=this
if(w.gLz())return 0
x=w.a
if(x.length===0)return w.b
if(d<=0)return B.e.gO(x).a
return w.atX(d)/d*100},
a6s(d,e){var x,w=this
if(w.gLz())return 0
if(w.a.length===0)return B.k.aP(B.k.aP(d*100)*w.b/100)/100+1
if(e<=0)return 0
x=B.k.aP(w.atX(e)*100*d/e)/100+1
return x>d?d:x},
DG(d){var x,w,v,u,t,s,r=new C.aXD(),q=this.a
if(q.length===0)return A.u(r.$1(this.b))+"%"
x=A.a([],y.d)
for(w=q.length,v=0;v<q.length;q.length===w||(0,A.K)(q),++v){u=q[v]
t=u.b
s=u.a
x.push(t==null?A.u(r.$1(s))+"% acima":A.u(r.$1(s))+"% at\xe9 "+A.u(d.$1(t)))}return B.e.ap(x,", ")}}
var z=a.updateTypes([])
C.aXD.prototype={
$1(d){var x=B.k.ah(d,1)===0?B.k.a8(d,0):B.k.a8(d,1)
return A.b9(x,".",",")},
$S:185};(function inheritance(){var x=a.inherit
x(C.fc,A.F)
x(C.aXD,A.bv)})()
var y={d:A.v("q<c>")};(function constants(){var x=a.makeConstList
D.bqB=x([],A.v("q<+pct,upTo(V,V?)>"))
D.fW=new C.fc(D.bqB,0,null)})()};
(a=>{a["QXDKtAvCDlGp7lVDmEOpsWgS4/k="]=a.current})($__dart_deferred_initializers__);