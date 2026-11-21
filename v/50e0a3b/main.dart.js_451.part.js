((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={uv:function uv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h},b85:function b85(){},cvh:function cvh(){}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[94],B)
D=c[302]
B.uv.prototype={
gatq(){var x,w,v,u=this.f
if(u==null)return null
if(J.o(u.h(0,"attending"),!1))return"Respondeu que n\xe3o vai"
x=y.d.a(u.h(0,"companions"))
if(x==null)x=C.ao
x=J.BX(x,y.B)
w=A.W(x,x.$ti.i("y.E"))
x=A.L(u.h(0,"dietary"))
v=x==null?null:C.f.D(x)
x=A.a([w.length===0?"Vai sozinho/a":"Vai com "+new A.ak(w,new B.b85(),A.a6(w).i("ak<1,@>")).ah(0,", ")],y.x)
if(u.h(0,"menu")!=null)x.push(A.a2(u.h(0,"menu")))
x.push(v==null||v.length===0?"sem alergias":v)
return C.e.ah(x," \xb7 ")},
gaA(d){return this.b}}
var z=a.updateTypes(["E<t<uv>>(au,c)"])
B.b85.prototype={
$1(d){return J.h(d,"name")},
$S:1286}
B.cvh.prototype={
$2(d,e){return this.aDU(d,e)},
aDU(a1,a2){var x=0,w=A.n(y.D),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$2=A.j(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:u=4
s=null
u=8
p=$.S().b
p===$&&A.b()
x=11
return A.d(p.T("guest_join_requests").aI(0,"id, full_name, email, phone, created_at, answers").X("wedding_id",a2).xR(0,"created_at"),$async$$2)
case 11:s=a4
u=4
x=10
break
case 8:u=7
d=t.pop()
x=A.a9(d) instanceof A.cY?12:14
break
case 12:p=$.S().b
p===$&&A.b()
x=15
return A.d(p.T("guest_join_requests").aI(0,"id, full_name, email, phone, created_at").X("wedding_id",a2).xR(0,"created_at"),$async$$2)
case 15:s=a4
x=13
break
case 14:throw d
case 13:x=10
break
case 7:x=4
break
case 10:r=A.a([],y.n)
for(p=J.by(s,y.y),n=A.u(p),p=new A.ap(p,p.gA(p),n.i("ap<T.E>")),m=y.w,l=y.b,k=y.u,n=n.i("T.E");p.t();){j=p.d
q=j==null?n.a(j):j
j=q
i=J.a5(j)
h=A.a2(i.h(j,"id"))
g=A.L(i.h(j,"full_name"))
g=(g==null?null:C.f.D(g).length!==0)===!0?A.a2(i.h(j,"full_name")):"Sem nome"
f=A.L(i.h(j,"email"))
e=A.L(i.h(j,"phone"))
A.dd(A.a2(i.h(j,"created_at")))
j=k.a(i.h(j,"answers"))
j=j==null?null:J.hR(j,m,l)
J.bT(r,new B.uv(h,g,f,e,j))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
a0=t.pop()
if(A.a9(a0) instanceof A.cY){v=D.Vg
x=1
break}else throw a0
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$2,w)},
$S:z+0};(function inheritance(){var x=a.inherit
x(B.uv,A.J)
x(B.b85,A.bw)
x(B.cvh,A.cM)})()
var y={n:A.v("r<uv>"),x:A.v("r<c>"),D:A.v("t<uv>"),y:A.v("a3<c,@>"),B:A.v("a3<@,@>"),w:A.v("c"),b:A.v("@"),d:A.v("t<@>?"),u:A.v("a3<@,@>?")};(function constants(){var x=a.makeConstList
D.Vg=x([],y.n)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dFq","cE4",()=>C.bI.$2$1(new B.cvh(),y.D,y.w))})()};
(a=>{a["ZfAzG58awZO9mPq2csLHCfKQyco="]=a.current})($__dart_deferred_initializers__);