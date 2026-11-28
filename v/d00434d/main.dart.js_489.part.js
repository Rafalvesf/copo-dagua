((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,M,N,O,P,E,Q,R,F,G,S,H,K,T,U,V,I,W,B={cEG:function cEG(){},cEC:function cEC(){},cED:function cED(){},cEE:function cEE(){},cEF:function cEF(){},
dFB(d,e){var x,w,v,u=A.a([],y.D)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v)u.push(new B.Dx(x[v]))
return new B.b3r(d.b,u)},
Dx:function Dx(d){this.a=d},
b3r:function b3r(d,e){this.a=d
this.b=e},
b3s:function b3s(){},
cWi(d){var x="category",w="due_date",v=J.a7(d),u=A.a2(v.h(d,"id")),t=A.a2(v.h(d,"wedding_id")),s=A.a2(v.h(d,"title")),r=B.dBV(B.daU(A.E(v.h(d,x)))),q=B.daU(A.E(v.h(d,x))),p=A.dv(v.h(d,"amount")),o=v.h(d,w)==null?null:A.da(A.a2(v.h(d,w)))
v=A.dX(v.h(d,"paid"))
return new H.i4(u,t,s,r,q,p,o,v===!0)},
daU(d){var x
A:{if(d==null||""===d){x=null
break A}if("music"===d){x="music_dj"
break A}if("decoration"===d){x="flowers_decor"
break A}x=d
break A}return x},
dBV(d){var x
A:{if("venue"===d){x=E.y3
break A}if("catering"===d){x=E.y_
break A}if("photography"===d){x=E.y0
break A}if("music_dj"===d||"bands_musicians"===d){x=E.y1
break A}if("flowers_decor"===d){x=E.y2
break A}x=null
break A}return x},
dnp(){return new B.DH()},
A1:function A1(d,e){this.a=d
this.b=e},
b55:function b55(){},
b56:function b56(){},
DH:function DH(){this.b=this.x=null},
b52:function b52(){},
b53:function b53(d,e){this.a=d
this.b=e},
b54:function b54(d){this.a=d},
Cu(d){var x=0,w=A.n(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Cu=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=3
return A.d(F.akJ(),$async$Cu)
case 3:u=$.T()
t=u.b
t===$&&A.b()
x=4
return A.d(t.R("events").az(0,"partner_name_1, partner_name_2").X("id",d).ds(),$async$Cu)
case 4:s=f
x=5
return A.d(u.b.R("bookings").az(0,"*, partner_profiles(business_name), events(partner_name_1, partner_name_2, location), proposals(title)").X("wedding_id",d).dl(0,"event_date",!1),$async$Cu)
case 5:r=f
u=A.a([],y.s)
for(t=J.aq(r);t.t();)u.push(A.a2(J.i(t.gE(t),"id")))
x=u.length===0?6:8
break
case 6:q=A.a([],y.Y)
x=7
break
case 8:t=$.T().b
t===$&&A.b()
x=9
return A.d(t.R("payments").az(0,"booking_id, type, status, amount, paid_at, due_at, provider").eI("booking_id",u).tJ(0,"created_at"),$async$Cu)
case 9:q=f
case 7:u=$.T()
t=u.b
t===$&&A.b()
x=10
return A.d(t.R("expenses").az(0,"title, category, amount, due_date, paid").X("wedding_id",d).tJ(0,"due_date"),$async$Cu)
case 10:p=f
x=11
return A.d(u.b.R("budget_categories").az(0,"name, amount").X("wedding_id",d).tJ(0,"position"),$async$Cu)
case 11:o=f
x=12
return A.d(u.b.R("budgets").az(0,"total").X("wedding_id",d).ds(),$async$Cu)
case 12:n=f
m=F.cW4(F.cBT(s),"Gastos e parceiros",r,q,!1)
u=A.a([],y.c)
for(t=J.aq(p);t.t();){l=t.gE(t)
k=J.a7(l)
j=k.h(l,"title")
j=J.cz(j==null?"":j)
i=k.h(l,"category")
i=J.cz(i==null?"":i)
h=k.h(l,"amount")
if(!(typeof h=="number")){h=A.fp(A.q(h))
if(h==null)h=0}g=k.h(l,"due_date")
if(g==null)g=null
else{g=A.dH(A.q(g))
g=g==null?null:g.e0()}u.push(new B.Mi(j,i,h,g,J.o(k.h(l,"paid"),!0)))}t=A.a([],y.E)
for(l=J.aq(o);l.t();){k=l.gE(l)
j=J.a7(k)
i=j.h(k,"name")
i=J.cz(i==null?"":i)
k=j.h(k,"amount")
if(!(typeof k=="number")){k=A.fp(A.q(k))
if(k==null)k=0}t.push(new B.a7E(i,k))}l=n==null?null:F.cWB(J.i(n,"total"))
v=new F.lL(m.a,m.b,m.c,m.d,u,t,l)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$Cu,w)},
Mi:function Mi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a7E:function a7E(d,e){this.a=d
this.b=e},
dkI(){return new B.a0D(null)},
aU2(d,e,f){var x=0,w=A.n(y.I),v,u,t
var $async$aU2=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:u=f===0?"":C.k.a8(f,0)
x=3
return A.d(A.fW(!0,new B.cBi(e,new A.aJ(new A.bH(u,C.aJ,C.aB),$.ad())),d,y.i),$async$aU2)
case 3:t=h
if(t==null||t<0){v=null
x=1
break}v=t
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aU2,w)},
akD(d,e,f,g){return B.dBI(d,e,f,g)},
dBI(d,e,f,g){var x=0,w=A.n(y.H),v,u=2,t=[],s,r,q
var $async$akD=A.j(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:x=3
return A.d(B.aU2(d,"Teto para "+f,g),$async$akD)
case 3:r=i
if(r==null){x=1
break}u=5
x=8
return A.d(e.a0(0,$.CF().gaX(),y.x).OP(f,r),$async$akD)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
if(d.e!=null)d.O(y.q).f.a4(I.Ic)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$akD,w)},
d8Y(d){var x=A.U(d,y._)
C.e.cP(x,new B.cBr())
return x},
d9r(d){var x=C.f.aW(C.j.k(A.aK(d)),2,"0"),w=C.f.aW(C.j.k(A.ax(d)),2,"0"),v=A.aD(d)===A.aD(new A.ac(Date.now(),0,!1))?"":"/"+A.aD(d)
return x+"/"+w+v},
cVr(d){var x,w,v,u
if(d===C.k.fD(d))x=C.k.a8(d,0)
else{w=C.k.a8(d,2)
x=A.b_(w,".",",")}v=x.split(",")
u=A.CB(v[0],A.aV("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bGW(),null)
return(v.length>1?u+","+v[1]:u)+" \u20ac"},
abD:function abD(d,e){this.a=d
this.b=e},
a0D:function a0D(d){this.a=d},
abE:function abE(d){var _=this
_.w=d
_.y=_.x=!1
_.d=$
_.c=_.a=null},
bK_:function bK_(d){this.a=d},
bK0:function bK0(d){this.a=d},
bKh:function bKh(d){this.a=d},
bKg:function bKg(){},
bJW:function bJW(){},
bJY:function bJY(){},
bJZ:function bJZ(){},
bJX:function bJX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bK5:function bK5(){},
bK6:function bK6(d){this.a=d},
bKf:function bKf(d){this.a=d},
bK7:function bK7(){},
bK8:function bK8(){},
bK9:function bK9(d,e){this.a=d
this.b=e},
bKa:function bKa(d){this.a=d},
bK4:function bK4(d){this.a=d},
bKb:function bKb(d){this.a=d},
bK3:function bK3(d){this.a=d},
bKc:function bKc(d){this.a=d},
bK2:function bK2(d){this.a=d},
bKd:function bKd(d){this.a=d},
bK1:function bK1(d){this.a=d},
bKe:function bKe(d){this.a=d},
cBi:function cBi(d,e){this.a=d
this.b=e},
cBg:function cBg(d){this.a=d},
cBh:function cBh(d,e){this.a=d
this.b=e},
cBr:function cBr(){},
aPD:function aPD(d,e,f){this.c=d
this.d=e
this.a=f},
aDw:function aDw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDx:function aDx(d,e){this.e=d
this.a=e},
bMt:function bMt(){},
bMv:function bMv(d,e){this.a=d
this.b=e},
bMw:function bMw(d){this.a=d},
bMu:function bMu(d,e,f){this.a=d
this.b=e
this.c=f},
aD3:function aD3(d,e){this.c=d
this.a=e},
bJo:function bJo(d){this.a=d},
bJn:function bJn(d){this.a=d},
aGf:function aGf(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g},
bVZ:function bVZ(d,e){this.a=d
this.b=e},
bVV:function bVV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVW:function bVW(d){this.a=d},
bVX:function bVX(d,e){this.a=d
this.b=e},
bVY:function bVY(d,e){this.a=d
this.b=e},
Xn:function Xn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aC8:function aC8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NI:function NI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abj:function abj(d,e){var _=this
_.d=d
_.e=e
_.r=_.f=null
_.x=_.w=!1
_.c=_.a=null},
bH9:function bH9(d){this.a=d},
bH8:function bH8(){},
bHa:function bHa(d){this.a=d},
bH7:function bH7(){},
bGW:function bGW(){},
bGX:function bGX(d){this.a=d},
bH6:function bH6(){},
bH1:function bH1(d){this.a=d},
bH2:function bH2(d){this.a=d},
bH0:function bH0(d,e){this.a=d
this.b=e},
bH3:function bH3(d){this.a=d},
bH_:function bH_(d){this.a=d},
bH4:function bH4(d){this.a=d},
bGZ:function bGZ(d){this.a=d},
bH5:function bH5(d,e){this.a=d
this.b=e},
bGY:function bGY(d,e){this.a=d
this.b=e},
WZ:function WZ(d,e){this.e=d
this.a=e},
bMx:function bMx(d){this.a=d},
bMy:function bMy(d){this.a=d},
bMz:function bMz(){},
bMA:function bMA(){},
bMB:function bMB(d){this.a=d},
bMC:function bMC(d,e,f){this.a=d
this.b=e
this.c=f},
bMD:function bMD(d,e){this.a=d
this.b=e},
ahU:function ahU(d,e,f){this.c=d
this.d=e
this.a=f},
aCd:function aCd(d,e,f){this.e=d
this.f=e
this.a=f},
bI6:function bI6(){},
bIc:function bIc(d){this.a=d},
bI9:function bI9(){},
bI8:function bI8(d){this.a=d},
bI_:function bI_(d){this.a=d},
bI7:function bI7(d,e,f){this.a=d
this.b=e
this.c=f},
bIa:function bIa(d){this.a=d},
bHY:function bHY(d){this.a=d},
bHZ:function bHZ(){},
bIb:function bIb(d,e){this.a=d
this.b=e},
bI4:function bI4(d){this.a=d},
bI5:function bI5(d){this.a=d},
bI0:function bI0(){},
bI1:function bI1(d){this.a=d},
bI2:function bI2(d){this.a=d},
bI3:function bI3(d,e){this.a=d
this.b=e},
anr:function anr(d,e){this.c=d
this.a=e},
aYz:function aYz(d){this.a=d},
ddU(d){var x
switch(d){case E.y3:x=D.bE1
break
case E.y_:x=D.bzf
break
case E.y0:x=D.bCP
break
case E.y1:x=D.bCg
break
case E.y2:x=D.bAL
break
default:x=C.a9
break}return x}},D,L,X
J=c[1]
A=c[0]
C=c[2]
M=c[186]
N=c[202]
O=c[215]
P=c[217]
E=c[218]
Q=c[160]
R=c[214]
F=c[132]
G=c[79]
S=c[159]
H=c[77]
K=c[213]
T=c[196]
U=c[216]
V=c[130]
I=c[212]
W=c[80]
B=a.updateHolder(c[53],B)
D=c[211]
L=c[72]
X=c[78]
B.Dx.prototype={
gar(d){return this.a.a}}
B.b3r.prototype={
gpX(){return C.e.d2(this.b,0,new B.b3s())},
gaBY(){var x=this.a
return x===0?0:C.k.ae(this.gpX()/x,0,1)}}
B.A1.prototype={
gbA5(){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b55(),w),w.i("z.E"))
return x},
gbAr(d){var x=this.b,w=A.a8(x).i("a6<1>")
x=A.U(new A.a6(x,new B.b56(),w),w.i("z.E"))
return x},
ax2(d,e){var x=e==null?this.a:e
return new B.A1(x,d==null?this.b:d)},
io(d){return this.ax2(null,d)},
awK(d){return this.ax2(d,null)}}
B.DH.prototype={
d5(){var x=y.T,w=this.x=A.eP(this).H(A.cw($.cl(),new B.b52(),y.v,x),x)
if(w!=null)A.jh(new B.b53(this,w),y.H)
return D.aAR},
c_(d,e){return this.bxx(0,e)},
bxx(d,e){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$c_=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:v.sa3(0,v.ga3(0).io(!0))
u=$.T().b
u===$&&A.b()
t=B
s=!1
r=J
x=2
return A.d(u.R("expenses").cj(0).X("wedding_id",e).dl(0,"created_at",!0),$async$c_)
case 2:v.sa3(0,new t.A1(s,r.d5(g,B.dGr(),y._).by(0)))
return A.l(null,w)}})
return A.m($async$c_,w)},
Vq(d){return this.bnm(d)},
bnm(d){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$Vq=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:r=$.T().b
r===$&&A.b()
r=r.R("expenses")
u=A.D(y.N,y.X)
u.j(0,"wedding_id",d.b)
u.j(0,"title",d.c)
t=d.e
if(t==null){t=d.d
t=t==null?null:t.b}u.j(0,"category",t)
u.j(0,"amount",d.f)
t=d.r
u.j(0,"due_date",t==null?null:C.e.gM(t.ci().split("T")))
if(d.w)u.j(0,"paid",!0)
x=2
return A.d(r.d8(0,u).cj(0).dP(0),$async$Vq)
case 2:s=f
r=v.ga3(0)
u=A.U(v.ga3(0).b,y._)
u.push(B.cWi(s))
v.sa3(0,r.awK(u))
return A.l(null,w)}})
return A.m($async$Vq,w)},
OM(d){return this.bD_(d)},
bD_(d){var x=0,w=A.n(y.H),v=this,u,t,s,r,q,p,o,n,m,l
var $async$OM=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:n=C.e.ll(v.ga3(0).b,new B.b54(d))
m=$.T().b
m===$&&A.b()
u=y.z
l=B
x=2
return A.d(m.R("expenses").bh(0,A.S(["paid",!n.w,"updated_at",new A.ac(Date.now(),0,!1).ci()],u,u)).X("id",d).cj(0).dP(0),$async$OM)
case 2:t=l.cWi(f)
u=v.ga3(0)
m=A.a([],y.r)
for(s=v.ga3(0).b,r=s.length,q=t.a,p=0;p<s.length;s.length===r||(0,A.J)(s),++p){o=s[p]
if(o.a===q)m.push(t)
else m.push(o)}v.sa3(0,u.awK(m))
return A.l(null,w)}})
return A.m($async$OM,w)}}
B.Mi.prototype={}
B.a7E.prototype={
gar(d){return this.a}}
B.abD.prototype={
I(){return"_BudgetFilter."+this.b}}
B.a0D.prototype={
P(){return new B.abE(D.Jt)}}
B.abE.prototype={
TG(d){return this.bda(d)},
bda(d){var x=0,w=A.n(y.H),v,u=this,t,s,r
var $async$TG=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(d==null){u.p(new B.bK_(u))
x=1
break}u.p(new B.bK0(u))
t=u.gS()
s=$.cl()
r=t.a0(0,s,y.v).b
x=d!==(r==null?null:r.a)?3:4
break
case 3:x=5
return A.d(t.a0(0,s.gaX(),y.Z).az(0,d),$async$TG)
case 5:case 4:case 1:return A.l(v,w)}})
return A.m($async$TG,w)},
ai(){this.aA()
A.jh(new B.bKh(this),y.H)},
Qq(){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m,l
var $async$Qq=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:o=u.gS()
n=$.am4()
m=y.h
l=o.a0(0,n.gaX(),m).x
if(l==null){x=1
break}t=o.a0(0,$.CF(),y.b).b
s=t==null?null:t.b
r=C.e.d2(o.a0(0,n,y.g).b,0,new B.bJW())
t=o.a0(0,$.cl(),y.v).b
q=t==null?null:t.gco()
t=u.c
t.toString
x=3
return A.d(A.cc(null,new B.bJX(q,s,new B.bJY(),r),!1,t,!0,!0,null,y.B),$async$Qq)
case 3:p=e
if(p==null){x=1
break}o=o.a0(0,n.gaX(),m)
n=p.a
m=p.b
t=p.c
o.Vq(new H.i4("",l,n,null,p.d,m,t,p.e))
case 1:return A.l(v,w)}})
return A.m($async$Qq,w)},
u(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d="pagamento",a0="pagamentos",a1=f.gS(),a2=a1.H($.CF(),y.b),a3=a1.H($.HS(),y.d),a4=a1.H($.am4(),y.g),a5=a2.b,a6=a5==null?e:B.dFB(a5,a3.b)
a5=A.iZ(a1.H($.jc(),y.u),y.R)
x=a5==null?e:a5.b.a
if(x==null)x=C.iP
a5=y.T
w=a1.H(A.cw($.cl(),new B.bK5(),y.v,a5),a5)
if(f.y){a1=f.gapx()
return A.cO(e,C.cT,A.oo(C.fc,40,A.a([C.fY,D.aIa,L.cSQ(a1,e),new B.aCd(x,a1,e)],y.p),e,!0,!1),!0,e)}v=J.d2(x,new B.bK6(w))
a1=a1.H($.uz(),y.l)
u=a1.gv(a1)
t=new B.bKf(u==null?C.f9:u)
a1=y._
a5=A.U(a4.gbA5(),a1)
for(s=v.a,r=J.c5(s),q=r.gV(s),p=v.b,o=v.$ti.i("h6<1>"),n=new A.h6(q,p,o);n.t();){m=q.gE(q)
l=m.CW
if(l>0)a5.push(new H.i4("booking:"+m.a+":paid",m.b,"Pago \xb7 "+m.c,e,e,t.$2(l,m.w),e,!0))}q=A.U(a4.gbAr(0),a1)
for(s=r.gV(s),o=new A.h6(s,p,o),p=y.r;o.t();){r=s.gE(s)
n=A.a([],p)
m=r.y
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.z
if(i==null)i=0
n.push(new H.i4("booking:"+l+":pay:"+m,k,"Sinal \xb7 "+j,e,e,t.$2(i,r.w),r.as,!1))}m=r.at
if(m!=null){l=r.a
k=r.b
j=r.c
i=r.ax
if(i==null)i=0
n.push(new H.i4("booking:"+l+":pay:"+m,k,"Restante \xb7 "+j,e,e,t.$2(i,r.w),r.ay,!1))}C.e.n(q,n)}switch(f.w.a){case 0:a1=A.U(B.d8Y(q),a1)
C.e.n(a1,a5)
break
case 1:a1=a5
break
case 2:a1=B.d8Y(q)
break
default:a1=e}h=C.e.d2(q,0,new B.bK7())
s=a6==null
if(s)g=D.bAh
else{r=a6.b
p=A.a8(r).i("a6<1>")
g=A.U(new A.a6(r,new B.bK8(),p),p.i("z.E"))}if(s)a1=D.bZ8
else{s=f.gaRE()
r=y.p
p=A.a([new A.po(A.a([new A.qQ(s,"Nova despesa",e)],r),e),D.aIg,L.cSQ(f.gapx(),w),new B.aPD(a6,new B.bK9(f,a6),e)],r)
if(a6.a>0||a5.length!==0||q.length!==0){o=A.aQ(a6.gpX(),!1)
n=a5.length
m=n===1?d:a0
l=A.aQ(h,!1)
k=q.length
j=k===1?d:a0
p.push(new A.dQ("N\xfameros",e,A.a([new G.Sk(A.a([new G.xl("Gasto",o,""+n+" "+m),new G.xl("Por pagar",l,""+k+" "+j)],y.Q),e)],r),16,e))}o=A.a([],r)
n=a5.length
if(n!==0||q.length!==0){m=q.length
l=f.w
C.e.n(o,A.a([new M.m4(A.a([new A.ek("Todos",l===D.Jt,n+m,new B.bKa(f),e),new A.ek("Pendentes",l===D.acv,m,new B.bKb(f),e),new A.ek("Pagos",l===D.acu,n,new B.bKc(f),e)],y.F),4,!0,e),C.as],r))}o.push(new B.aGf(a1,s,a5.length===0&&q.length===0,e))
p.push(new A.dQ("Pagamentos",e,o,16,e))
a1=A.a([new A.kL(g.length===0?"Aparecem sozinhas quando reservares parceiros ou juntares despesas.":"Aparecem sozinhas com as reservas e as despesas. Toca numa para lhe p\xf4r um teto.",0,e)],r)
if(g.length!==0)a1.push(new B.aDw(g,f.x,new B.bKd(f),e))
p.push(new A.dQ("Categorias",e,a1,16,e))
p.push(new A.dQ("Exportar",e,A.a([new F.DI("Gastos e parceiros",!1,new B.bKe(f),e)],r),16,e))
a1=A.oo(C.fc,40,p,e,!0,!1)}return A.cO(e,C.cT,a1,!0,e)},
IH(d){return this.aYA(d)},
aYA(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o
var $async$IH=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=s.c
p.toString
x=3
return A.d(B.aU2(p,d===0?"Teto do or\xe7amento":"Mudar o teto",d),$async$IH)
case 3:r=f
if(r==null){x=1
break}u=5
x=8
return A.d(s.gS().a0(0,$.CF().gaX(),y.x).a_j(r),$async$IH)
case 8:u=2
x=7
break
case 5:u=4
o=t.pop()
p=s.c
if(p!=null)p.O(y.q).f.a4(I.Ic)
x=7
break
case 4:x=2
break
case 7:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$IH,w)}}
B.aPD.prototype={
u(d){var x,w,v,u,t=this.c,s=t.a
if(s<=0){t=t.gpX()>0?"Gastos "+A.aQ(t.gpX(),!1)+" \xb7 diz quanto querem gastar":"Diz quanto querem gastar e v\xeas quanto falta."
return A.vf(new A.io("Definir o teto",this.d,!1,null),t,"Teto do or\xe7amento",C.hG,0,"por definir","\u2014")}x=C.k.aK(t.gaBY()*100)
w=s-t.gpX()<0?"Acima do teto":"Ainda tens"
v=A.aQ(Math.abs(s-t.gpX()),!1)
s=A.aQ(s,!1)
u=t.gaBY()
return A.aU(A.vf(I.a2m,"Gastos "+A.aQ(t.gpX(),!1)+" \xb7 "+x+"% do teto",w,C.hG,u,"de "+s,v),this.d,"Mudar o teto do or\xe7amento")}}
B.aDw.prototype={
u(d){var x,w,v=this,u=v.d,t=u||v.c.length<=5,s=v.c,r=t?s:A.e4(s,0,A.eU(5,"count",y.S),A.a8(s).c).by(0),q=y.p,p=A.a([],q)
for(x=r.length,w=0;w<r.length;r.length===x||(0,A.J)(r),++w)p.push(new B.aDx(r[w],null))
q=A.a([A.fb(p,0)],q)
p=s.length
if(p>5){u=u?"Ver menos":"Ver todas ("+p+")"
q.push(new A.io(u,v.e,!0,null))}return A.B(q,C.I,C.i,C.m,0,C.v)}}
B.aDx.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p=null,o=this.e.a,n=o.d,m=y.T,l=e.H(A.cw($.cl(),new B.bMt(),y.v,m),m)
if(l==null)x=C.rt
else{m=e.H($.cZe().$1(l),y.y)
m=m.gv(m)
x=m==null?C.rt:m}m=A.a([],y.s)
for(w=B.ddU(o.c),v=w.length,u=J.a7(x),t=0;t<v;++t){s=u.h(x,w[t])
if(s!=null)C.e.n(m,s)}w=n===0
r=w?0:o.b/n
v=new B.bMv(this,d)
if(w)return A.jT(!1,!1,p,v,A.aQ(o.b,!1)+" gastos \xb7 sem teto",o.a,new A.oi("P\xf4r teto",new B.bMu(this,d,e),!0,p))
w=A.aQ(o.b,!1)
u=A.aQ(n,!1)
s=y.p
q=A.a([A.aI(new A.Td(r,6,p),p,92)],s)
if(m.length!==0)C.e.n(q,A.a([C.aE,new B.anr(m,p)],s))
return A.jT(!1,!1,p,v,w+" de "+u,o.a,A.B(q,C.dg,C.i,C.K,0,C.v))}}
B.aD3.prototype={
u(d){var x,w,v=null,u=$.ar,t=$.fi.cc(0.55),s=A.X(18),r=A.X(12),q=this.c,p=q.e
r=A.fZ(r,A.aI(p==null?A.kh(A.b2(C.hA,u,v,v,v),C.t,!0):A.tj(p,144,new B.bJn(u),!1,C.bS,A.ww(),!1,v,v,v),48,48),C.ba)
p=A.h(q.b,1,C.a3,v,v,D.c4U,v,v,v)
x=A.b2(C.iJ,u,v,v,14)
w=q.d
q=w>0?q.gQ_()+" \xb7 "+A.aQ(w,!1):q.gQ_()
w=y.p
return new A.Q(C.cr,A.aU(A.A(v,A.P(A.a([r,C.af,A.a4(A.B(A.a([p,C.fF,A.P(A.a([x,C.ej,new A.di(1,C.bd,A.h(q,1,C.a3,v,v,A.aF(v,v,u,v,v,v,v,v,v,v,v,13,v,v,C.bk,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v)],w),C.w,C.i,C.m,0,v,v)],w),C.G,C.i,C.m,0,C.v),1),A.b2(C.i5,u,v,v,v)],w),C.w,C.i,C.m,0,v,v),C.r,v,v,new A.M(t,v,v,s,v,v,C.y),v,v,v,C.dU,v,v,v),new B.bJo(d),v),v)}}
B.aGf.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.e
if(i.length===0)return this.r?A.Sj(A.a([new A.io("+ Nova despesa",this.f,!0,j)],y.p),C.fp,"Aparecem aqui os das reservas e os que juntares \xe0 m\xe3o.","Ainda sem pagamentos"):D.aC_
x=new B.bVZ(e,d)
w=y.p
v=A.a([],w)
for(u=i.length,t=0;t<i.length;i.length===u||(0,A.J)(i),++t){s=i[t]
r=s.a
q=C.f.dj(r,":pay:")
r=C.f.b4(r,"booking:")
if(r&&!s.w&&q>0){r=s.c
p=C.e.ga5(r.split(" \xb7 "))
o=C.e.ga5(r.split(" \xb7 "))
r=C.e.gM(r.split(" \xb7 "))
n=A.aQ(s.f,!1)
m=s.r
l=m==null?"":" \xb7 at\xe9 "+B.d9r(m)
v.push(new V.DU(new A.cv(p,44,j,!1,!0,j),o,r+" "+n+l,"Pagar",new B.bVV(d,e,s,q),A.HM(m)===C.fj,j))
continue}p=r?new B.bVW(d):new B.bVX(x,s)
v.push(new B.Xn(s,p,r||s.w?j:new B.bVY(x,s),j))}i=A.a([],w)
for(k=0;k<v.length;++k){u=A.a([],w)
if(k>0&&v[k] instanceof B.Xn&&v[k-1] instanceof B.Xn)u.push(C.iE)
u.push(v[k])
C.e.n(i,u)}i.push(D.aBP)
return A.B(i,C.I,C.i,C.m,0,C.v)}}
B.Xn.prototype={
u(d){var x=this.c,w=x.r,v=A.a([A.aQ(x.f,!1)],y.s),u=x.w
if(!u&&w!=null)v.push("at\xe9 "+B.d9r(w))
v=C.e.a2(v," \xb7 ")
if(u)u=D.aHX
else{u=this.e
u=u!=null?new A.oi("Marcar pago",u,!0,null):D.aI3}return A.jT(!1,!1,null,this.d,v,x.c,u)}}
B.aC8.prototype={}
B.NI.prototype={
P(){var x=$.ad()
return new B.abj(new A.aJ(C.ap,x),new A.aJ(C.ap,x))}}
B.abj.prototype={
ai(){var x=this
x.aA()
x.d.am(0,new B.bH9(x))
x.e.am(0,new B.bHa(x))},
m(){var x=this.d,w=$.ad()
x.Z$=w
x.W$=0
x=this.e
x.Z$=w
x.W$=0
this.a6()},
gahP(){var x=C.f.C(this.e.a.a)
x=A.b_(x," ","")
return A.fp(A.b_(x,",","."))},
aSQ(){var x,w,v,u,t=this,s=t.gahP()
t.p(new B.bGX(t))
x=C.f.C(t.d.a.a)
if(x.length===0||s==null||s<=0)return
w=t.c
w.toString
w=A.an(w,!1)
v=t.w
u=v?null:t.f
w.ak(new B.aC8(x,s,u,t.r,v))},
ash(d,e,f,g,h){var x=null,w=h?C.kg:x,v=y.p,u=A.a4(A.B(A.a([A.h(d,x,x,x,x,C.aj,x,x,x),C.b0,A.h(e,x,x,x,x,C.R,x,x,x)],v),C.G,C.i,C.m,0,C.v),1),t=f?C.bv:x,s=f?x:A.bA(C.lu,1.5),r=f?T.vD:x
return A.b9(x,!0,x,A.db(C.bU,A.A(x,A.P(A.a([u,A.A(x,r,C.r,x,x,new A.M(t,x,s,x,x,x,C.ax),x,24,x,x,x,x,24)],v),C.w,C.i,C.m,0,x,x),C.r,x,C.dw,new A.M(x,x,w,x,x,x,C.y),x,x,x,C.hu,x,x,x),C.a0,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,!1,C.b_),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,f,x,x,x,x,x,x,C.a5,x)},
bjw(d,e,f,g){return this.ash(d,e,f,g,!0)},
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gahP()
if(j==null)j=0
x=l.a
w=x.d
v=w==null?k:w-x.e-j
x=l.d
u=C.f.C(x.a.a).length!==0&&j>0
w=new B.bH6()
t=y.w
s=A.aw(d,k,t).w
r=y.p
q=A.a([D.cdt],r)
q.push(A.h(l.a.c,k,k,k,k,C.R,k,k,k))
q=A.P(A.a([A.a4(A.B(q,C.G,C.i,C.m,0,C.v),1),A.b9(k,!0,k,A.db(k,A.A(k,C.qI,C.r,k,k,C.ck,k,44,k,k,k,k,44),C.a0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bH1(d),k,k,k,k,k,k,!1,C.b_),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,"Fechar",k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k)],r),C.w,C.i,C.m,0,k,k)
p=A.X(22)
o=A.a([D.chR,A.P(A.a([X.d2B(A.cC(k,C.a9,!1,k,!0,C.z,k,A.cI(),l.e,k,k,k,k,k,2,D.aFV,C.a0,!0,k,!0,k,!1,k,C.aG,k,k,k,k,C.ii,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.au,k,k,k,k,k,k,k,k,k,k,k,D.aaZ,!0,C.dD,k,C.b1,k,k,k,k)),C.bm,D.cdv],r),C.eQ,C.bV,C.m,0,C.aL,k)],r)
if(v!=null){n=v>=0
m=n?"Ainda tens "+B.cVr(v)+" no teto":"Passa o teto em "+B.cVr(-v)
o.push(A.h(m,k,k,k,k,A.aF(k,k,n?C.T:C.c1,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))}if(l.x&&j<=0)o.push(D.cfC)
p=A.A(k,A.B(o,C.w,C.i,C.m,0,C.v),C.r,k,k,new A.M(C.aa,k,k,p,k,k,C.y),k,k,k,C.bj,k,k,k)
o=A.h("O QU\xca",k,k,k,k,C.b8,k,k,k)
n=A.X(26)
m=l.x&&C.f.C(x.a.a).length===0?A.bA(C.c1,1.5):k
n=A.a([p,C.a1,new A.Q(C.cr,o,k),A.A(C.bh,A.cC(k,C.a9,!1,k,!0,C.z,k,A.cI(),x,k,k,k,k,k,2,D.aFA,C.a0,!0,k,!0,k,!1,k,C.aG,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,C.au,k,k,k,k,k,k,k,k,k,k,k,C.ff,!0,C.at,k,C.ha,k,k,k,k),C.r,k,k,new A.M(C.aa,k,m,n,k,k,C.y),k,52,k,C.i0,k,k,k)],r)
if(l.x&&C.f.C(x.a.a).length===0)n.push(D.bLA)
n.push(C.a1)
n.push(new W.a1d(l.r,new B.bH2(l),k))
n.push(C.a1)
n.push(new A.Q(C.cr,A.h("ESTADO",k,k,k,k,C.b8,k,k,k),k))
x=A.X(22)
p=l.w
o=!p
o=A.a([l.bjw("Por pagar","Fica em \xabPor pagar\xbb at\xe9 marcares como pago.",o,new B.bH3(l)),l.ash("J\xe1 est\xe1 pago","Conta logo no \xabGasto\xbb.",p,new B.bH4(l),o)],r)
if(!l.w){p=l.f
if(p==null)w="Opcional"
else{p=A.q(w.$1(A.aK(p)))
m=l.f
m.toString
m=A.q(w.$1(A.ax(m)))
w=l.f
w.toString
w=p+"/"+m+"/"+A.aD(w)}o.push(A.b9(k,!0,k,A.db(C.bU,A.aI(A.P(A.a([D.aAK,A.h(w,k,k,k,k,C.cf,k,k,k),C.ej,C.kG],r),C.w,C.i,C.m,0,k,k),56,k),C.a0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new B.bH5(l,d),k,k,k,k,k,k,!1,C.b_),!1,k,k,k,k,!1,k,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.a5,k))}n.push(A.A(k,A.B(o,C.w,C.i,C.m,0,C.v),C.r,k,k,new A.M(C.aa,k,k,x,k,k,C.y),k,k,k,C.dy,k,k,k))
n.push(C.a1)
n.push(D.cd5)
x=A.dO(A.B(n,C.I,C.i,C.m,0,C.v),C.z,k,C.e2,k,k,C.a2)
t=A.aw(d,C.b2,t).w
w=A.cp(u?C.A:C.A.cc(0.35),k,k,C.t,k,k,C.ad,k,k,C.eG)
return new A.Q(new A.a0(0,0,0,s.f.d),A.B(A.a([new A.Q(C.kv,q,k),new A.di(1,C.bd,x,k),new A.Q(new A.a0(20,16,20,20+t.r.d),A.aI(A.bF(A.h(u?"Guardar \xb7 "+B.cVr(j):"Guardar",k,k,k,k,k,k,k,k),l.gaSP(),w),52,k),k)],r),C.I,C.i,C.K,0,C.v),k)}}
B.WZ.prototype={
bc(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=e.H($.CF(),y.b).b
if(j==null)x=k
else{j=j.c
j=A.eQ(new A.a6(j,new B.bMx(l),A.a8(j).i("a6<1>")))
x=j}if(x==null)x=l.e
j=e.H($.am4(),y.g).b
w=A.a8(j).i("a6<1>")
v=A.U(new A.a6(j,new B.bMy(l),w),w.i("z.E"))
C.e.cP(v,new B.bMz())
j=y.T
u=e.H(A.cw($.cl(),new B.bMA(),y.v,j),j)
t=B.ddU(l.e.c)
if(u==null)s=K.FG
else{j=e.H($.aVP().$1(u),y.k)
j=j.gv(j)
if(j==null)j=K.FG
j=J.d2(j,new B.bMB(t))
s=A.U(j,j.$ti.i("z.E"))}j=A.aw(d,k,y.w).w
w=A.bO(A.A(k,k,C.r,k,k,new A.M(C.bA,k,k,A.X(2),k,k,C.y),k,4,k,k,k,k,40),k,k)
r=A.h(x.a,k,k,k,k,A.as(d).ok.r,k,k,k)
q=A.a4(new B.ahU("Gasto",A.aQ(x.b,!1),k),1)
p=x.d
o=y.p
p=A.a([w,C.a1,r,C.aC,A.P(A.a([q,C.ak,A.a4(A.aU(new B.ahU("Teto \xb7 tocar para mudar",p===0?"Definir":A.aQ(p,!1),k),new B.bMC(d,e,x),k),1)],o),C.w,C.i,C.m,0,k,k)],o)
if(s.length!==0){w=A.a([C.bi,A.h("Contratado na app",k,k,k,k,A.as(d).ok.w,k,k,k),C.X],o)
for(r=s.length,n=0;n<s.length;s.length===r||(0,A.J)(s),++n)w.push(new B.aD3(s[n],k))
C.e.n(p,w)}p.push(C.bi)
p.push(A.h("Despesas",k,k,k,k,A.as(d).ok.w,k,k,k))
p.push(C.X)
w=v.length
if(w===0)p.push(D.bLW)
else for(n=0;n<v.length;v.length===w||(0,A.J)(v),++n){m=v[n]
r=A.h(m.c,k,k,k,k,C.hc,k,k,k)
q=m.r
q=q==null?k:A.h("At\xe9 "+C.f.aW(C.j.k(A.aK(q)),2,"0")+"/"+C.f.aW(C.j.k(A.ax(q)),2,"0")+"/"+A.aD(q),k,k,k,k,k,k,k,k)
p.push(A.jk(!1,C.Z,k,k,!0,k,k,k,!0,k,k,k,k,k,k,k,!1,k,k,k,k,k,q,k,r,k,A.P(A.a([A.h(A.aQ(m.f,!1),k,k,k,k,D.c73,k,k,k),C.ae,new Q.Dc(m.w,new B.bMD(e,m),k,$.ar,k,k,!1,k,k,k,k,!1,k,k,!1,k,R.Jv,k)],o),C.w,C.i,C.K,0,k,k),k))}return A.bC(!0,new A.ev(new A.aP(0,1/0,0,j.a.b*0.8),A.cX(p,k,N.Db,k,k,!1,C.a2,!0),k),k,C.Z,!0)}}
B.ahU.prototype={
u(d){var x=null,w=A.X(16)
return A.A(x,A.B(A.a([A.h(this.c,x,x,x,x,C.bc,x,x,x),C.as,A.h(this.d,x,x,x,x,O.aaM,x,x,x)],y.p),C.G,C.i,C.m,0,C.v),C.r,x,x,new A.M(C.aa,x,x,w,x,x,C.y),x,x,x,C.cv,x,x,x)}}
B.aCd.prototype={
bc(d,e){var x,w=y.t,v=e.H(A.cw($.cl(),new B.bI6(),y.v,w),w),u=e.H($.cZd(),y.o)
w=e.H($.uz(),y.l)
x=w.gv(w)
return A.hn(u,new B.bI7(this,new B.bIc(x==null?C.f9:x),v),new B.bI8(e),new B.bI9(),!1,!0,!1)}}
B.anr.prototype={
u(d){var x,w,v,u,t,s,r,q,p=null,o=$.ar,n=y.p,m=A.a([],n)
for(x=this.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v]
t=$.fi
s=new A.b5(999,999)
r=new A.bc(o.cc(0.25),1,C.ai,-1)
q=A.b2(C.iJ,o,p,p,13)
t=A.A(p,A.P(A.a([q,C.ta,new A.di(1,C.bd,A.h(u,1,C.a3,p,p,new A.N(!0,o,p,p,p,p,14,C.cX,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),p),A.b2(C.i5,o,p,p,16)],n),C.w,C.i,C.K,0,p,p),C.r,p,D.agp,new A.M(t,p,new A.dS(r,r,r,r),new A.ci(s,s,s,s),p,p,C.y),p,p,p,D.av9,p,p,p)
m.push(new A.jY(new A.oH(p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,"Contratado na app: "+u+". Abrir reservas",p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,C.a5,p,p,p,p),!1,!1,p,!1,!1,new A.hx(t,new B.aYz(d),p,p),p))}return A.eb(C.bf,m,C.r,C.bn,6,6)}}
var z=a.updateTypes(["x(i4)","R(R,i4)","v(i4,i4)","R(R,Dx)","A1()","F<~>(c?)","F<~>()","NI(O)","x(Dx)","F<lL>()","WZ(O)","~(i4)","~()","x(nn)","x(rR)","i4(a5<c,@>)","DH()"])
B.cEG.prototype={
$1(d){return this.aFf(d)},
aFf(a1){var x=0,w=A.n(y.m),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$$1=A.j(function(a2,a3){if(a2===1)return A.k(a3,w)
for(;;)switch(x){case 0:f=y.t
e=a1.H(A.cw($.cl(),new B.cEC(),y.v,f),f)
f=J.a7(e)
if(f.gY(e)){v=D.bAi
x=1
break}u=A.a([],y.s)
for(t=f.gV(e);t.t();)u.push(t.gE(t).a)
t=$.T()
s=t.b
s===$&&A.b()
r=y.G
q=s.R("budgets").az(0,"wedding_id, total").eI("wedding_id",u).b7(new B.cED(),r)
p=t.b.R("budget_categories").az(0,"wedding_id, amount").eI("wedding_id",u).b7(new B.cEE(),r)
o=t.b.R("expenses").az(0,"wedding_id, amount, paid").eI("wedding_id",u).b7(new B.cEF(),r)
r=y.N
u=y.i
t=A.D(r,u)
d=s=y.P
a0=J
x=3
return A.d(q,$async$$1)
case 3:d,n=a0.bl(a3,s),m=A.u(n),n=new A.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E")
case 4:if(!n.t()){x=5
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
t.j(0,A.a2(k.h(l,"wedding_id")),A.dv(k.h(l,"total")))
x=4
break
case 5:j=A.D(r,u)
d=J
x=6
return A.d(p,$async$$1)
case 6:n=d.bl(a3,s),m=A.u(n),n=new A.ak(n,n.gA(n),m.i("ak<V.E>")),m=m.i("V.E")
case 7:if(!n.t()){x=8
break}l=n.d
if(l==null)l=m.a(l)
k=J.a7(l)
i=A.a2(k.h(l,"wedding_id"))
h=j.h(0,i)
if(h==null)h=0
l=A.aL(k.h(l,"amount"))
if(l==null)l=null
j.j(0,i,h+(l==null?0:l))
x=7
break
case 8:g=A.D(r,u)
d=J
x=9
return A.d(o,$async$$1)
case 9:u=d.bl(a3,s),s=A.u(u),u=new A.ak(u,u.gA(u),s.i("ak<V.E>")),s=s.i("V.E")
case 10:if(!u.t()){x=11
break}r=u.d
if(r==null)r=s.a(r)
n=J.a7(r)
if(J.o(n.h(r,"paid"),!0)){x=10
break}i=A.a2(n.h(r,"wedding_id"))
m=g.h(0,i)
if(m==null)m=0
r=A.aL(n.h(r,"amount"))
if(r==null)r=null
g.j(0,i,m+(r==null?0:r))
x=10
break
case 11:u=A.a([],y.n)
for(f=f.gV(e);f.t();){s=f.gE(f)
r=s.a
n=t.h(0,r)
s=n==null?s.as:n
if(s==null)s=0
n=j.h(0,r)
if(n==null)n=0
m=g.h(0,r)
u.push(new A.aMT([r,n,s,m==null?0:m]))}v=u
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$$1,w)},
$S:1303}
B.cEC.prototype={
$1(d){return d.c},
$S:144}
B.cED.prototype={
$1(d){return d},
$S:31}
B.cEE.prototype={
$1(d){return d},
$S:31}
B.cEF.prototype={
$1(d){return d},
$S:31}
B.b3s.prototype={
$2(d,e){return d+e.a.b},
$S:z+3}
B.b55.prototype={
$1(d){return d.w},
$S:z+0}
B.b56.prototype={
$1(d){return!d.w},
$S:z+0}
B.b52.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.b53.prototype={
$0(){return this.a.c_(0,this.b)},
$S:1}
B.b54.prototype={
$1(d){return d.a===this.a},
$S:z+0}
B.bK_.prototype={
$0(){return this.a.y=!0},
$S:0}
B.bK0.prototype={
$0(){return this.a.y=!1},
$S:0}
B.bKh.prototype={
$0(){return this.a.gS().a0(0,$.CF().gaX(),y.x).ZA(0).es(new B.bKg())},
$S:1}
B.bKg.prototype={
$1(d){},
$S:13}
B.bJW.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bJY.prototype={
$1(d){return A.CB(C.k.a8(d,0),A.aV("(\\d)(?=(\\d{3})+$)",!0,!1,!1),new B.bJZ(),null)+" \u20ac"},
$S:109}
B.bJZ.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:41}
B.bJX.prototype={
$1(d){var x,w=this,v=A.a([],y.s),u=w.a
if(u!=null)v.push(u)
u=w.b
x=u!=null
if(x&&u>0)v.push("teto de "+A.q(w.c.$1(u)))
v=C.e.a2(v," \xb7 ")
u=x&&u>0?u:null
return new B.NI(v,u,w.d,null)},
$S:z+7}
B.bK5.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.bK6.prototype={
$1(d){return d.x!==C.eM&&d.b===this.a},
$S:66}
B.bKf.prototype={
$2(d,e){return A.ja(d,this.a.lh(e))},
$1(d){return this.$2(d,null)},
$S:1306}
B.bK7.prototype={
$2(d,e){return d+e.f},
$S:z+1}
B.bK8.prototype={
$1(d){var x=d.a
return x.b>0||x.d>0},
$S:z+8}
B.bK9.prototype={
$0(){return this.a.IH(this.b.a)},
$S:0}
B.bKa.prototype={
$0(){var x=this.a
return x.p(new B.bK4(x))},
$S:0}
B.bK4.prototype={
$0(){return this.a.w=D.Jt},
$S:0}
B.bKb.prototype={
$0(){var x=this.a
return x.p(new B.bK3(x))},
$S:0}
B.bK3.prototype={
$0(){return this.a.w=D.acv},
$S:0}
B.bKc.prototype={
$0(){var x=this.a
return x.p(new B.bK2(x))},
$S:0}
B.bK2.prototype={
$0(){return this.a.w=D.acu},
$S:0}
B.bKd.prototype={
$0(){var x=this.a
return x.p(new B.bK1(x))},
$S:0}
B.bK1.prototype={
$0(){var x=this.a
return x.x=!x.x},
$S:0}
B.bKe.prototype={
$0(){return B.Cu(this.a.gS().a0(0,$.cl(),y.v).b.a)},
$S:z+9}
B.cBi.prototype={
$1(d){var x=null,w=this.b
return new A.eT(A.h(this.a,x,x,x,x,x,x,x,x),A.cC(x,C.a9,!0,x,!0,C.z,x,A.cI(),w,x,x,x,x,x,2,D.aG7,C.a0,!0,x,!0,x,!1,x,C.aG,x,x,x,x,C.ii,x,x,x,1,x,x,!1,"\u2022",x,x,x,x,x,!1,x,x,!1,x,!0,x,C.au,x,x,x,x,x,x,x,x,x,x,x,x,!0,C.at,x,C.b1,x,x,x,x),A.a([A.cu(C.cP,x,x,new B.cBg(d),x,x),A.bF(C.du,new B.cBh(d,w),x)],y.p),x)},
$S:18}
B.cBg.prototype={
$0(){return A.an(this.a,!1).bB()},
$S:0}
B.cBh.prototype={
$0(){var x=A.an(this.a,!1),w=C.f.C(this.b.a.a)
w=A.b_(w," ","")
return x.ak(A.fp(A.b_(w,",",".")))},
$S:0}
B.cBr.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bB(2100,1,1,0,0)
x=e.r
return w.bE(0,x==null?A.bB(2100,1,1,0,0):x)},
$S:z+2}
B.bMt.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.bMv.prototype={
$0(){return A.cc(null,new B.bMw(this.a),!1,this.b,!0,!0,null,y.H)},
$S:0}
B.bMw.prototype={
$1(d){return new B.WZ(this.a.e.a,null)},
$S:z+10}
B.bMu.prototype={
$0(){return B.akD(this.b,this.c,this.a.e.a.a,0)},
$S:0}
B.bJo.prototype={
$0(){var x=this.a
A.an(x,!1).bB()
A.ai(x).ap("/bookings",null,y.X)},
$S:0}
B.bJn.prototype={
$3(d,e,f){return A.kh(A.b2(C.hA,this.a,null,null,null),C.t,!0)},
$S:145}
B.bVZ.prototype={
$1(d){var x,w,v=null
this.a.a0(0,$.am4().gaX(),y.h).OM(d.a)
x=this.b.O(y.q).f
w='"'+d.c
x.a4(A.cx(v,v,v,v,v,C.z,v,A.h(d.w?w+'" marcada como por pagar.':w+'" marcada como paga.',v,v,v,v,v,v,v,v),v,C.Y,v,v,v,v,v,v,v,v,v,v))},
$S:z+11}
B.bVV.prototype={
$0(){var x=this
return A.rG(x.a,x.b,C.f.bF(x.c.a,x.d+5),null,null)},
$S:0}
B.bVW.prototype={
$0(){return A.ai(this.a).ap("/bookings",null,y.X)},
$S:0}
B.bVX.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bVY.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
B.bH9.prototype={
$0(){return this.a.p(new B.bH8())},
$S:0}
B.bH8.prototype={
$0(){},
$S:0}
B.bHa.prototype={
$0(){return this.a.p(new B.bH7())},
$S:0}
B.bH7.prototype={
$0(){},
$S:0}
B.bGW.prototype={
$1(d){return A.q(d.h(0,1))+" "},
$S:41}
B.bGX.prototype={
$0(){return this.a.x=!0},
$S:0}
B.bH6.prototype={
$1(d){return C.f.aW(C.j.k(d),2,"0")},
$S:39}
B.bH1.prototype={
$0(){return A.an(this.a,!1).bB()},
$S:0}
B.bH2.prototype={
$1(d){var x=this.a
return x.p(new B.bH0(x,d))},
$S:104}
B.bH0.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.bH3.prototype={
$0(){var x=this.a
return x.p(new B.bH_(x))},
$S:0}
B.bH_.prototype={
$0(){return this.a.w=!1},
$S:0}
B.bH4.prototype={
$0(){var x=this.a
return x.p(new B.bGZ(x))},
$S:0}
B.bGZ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.bH5.prototype={
$0(){var x=0,w=A.n(y.H),v=this,u,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=new A.ac(Date.now(),0,!1)
s=v.a
r=s.f
if(r==null)r=t
x=2
return A.d(S.alw(v.b,A.bB(A.aD(t)-1,1,1,0,0),r,A.bB(A.aD(t)+5,1,1,0,0)),$async$$0)
case 2:u=e
if(u!=null&&s.c!=null)s.p(new B.bGY(s,u))
return A.l(null,w)}})
return A.m($async$$0,w)},
$S:1}
B.bGY.prototype={
$0(){return this.a.f=this.b},
$S:0}
B.bMx.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+13}
B.bMy.prototype={
$1(d){return d.d==this.a.e.c},
$S:z+0}
B.bMz.prototype={
$2(d,e){var x,w=d.r
if(w==null)w=A.bB(2100,1,1,0,0)
x=e.r
return w.bE(0,x==null?A.bB(2100,1,1,0,0):x)},
$S:z+2}
B.bMA.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:36}
B.bMB.prototype={
$1(d){return C.e.q(this.a,d.a)},
$S:z+14}
B.bMC.prototype={
$0(){var x=this.c
return B.akD(this.a,this.b,x.a,x.d)},
$S:0}
B.bMD.prototype={
$1(d){return this.a.a0(0,$.am4().gaX(),y.h).OM(this.b.a)},
$S:129}
B.bI6.prototype={
$1(d){return d.c},
$S:144}
B.bIc.prototype={
$2(d,e){return A.ja(d,this.a.lh(e))},
$S:42}
B.bI9.prototype={
$0(){return D.bMA},
$S:88}
B.bI8.prototype={
$2(d,e){return A.Sj(A.a([new A.io("Tentar outra vez",new B.bI_(this.a),!1,null)],y.p),C.fp,"Verifica a liga\xe7\xe3o e tenta outra vez.","N\xe3o foi poss\xedvel carregar")},
$S:1307}
B.bI_.prototype={
$0(){return this.a.aj($.cZd())},
$S:0}
B.bI7.prototype={
$1(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h="em todos os eventos",g=this.a,f=new B.bIa(g),e=new B.bIb(g,this.b),d=J.c5(a4),a0=d.d2(a4,0,new B.bI0()),a1=d.d2(a4,0,new B.bI1(f)),a2=d.d2(a4,0,new B.bI2(e)),a3=y.N
a3=A.D(a3,a3)
for(x=J.aq(this.c);x.t();){w=x.gE(x)
v=w.a
u=w.d
t=u==null||u.length===0
w=w.c
s=C.f.C0(t?w:w+" & "+u)
a3.j(0,v,s.length===0?s:s[0].toUpperCase()+C.f.bF(s,1))}x=A.aQ(a1,!1)
w=a0>0
v=w?"de "+A.aQ(a0,!1):"gastos"
u=w?C.k.ae(a1/a0,0,1):0
t=d.gA(a4)
r=d.gA(a4)===1?"evento":"eventos"
w=w?" \xb7 "+C.k.aK(a1/a0*100)+"% dos tetos":""
x=A.vf(i,""+t+" "+r+w,"Todos os eventos",C.hG,u,v,x)
v=y.p
u=A.a([new G.Sk(A.a([new G.xl("Gasto",A.aQ(a1,!1),h),new G.xl("Por pagar",A.aQ(a2,!1),h)],y.Q),i)],v)
d=d.gA(a4)
w=A.a([],v)
for(t=A.eA(a4,0,y.A),r=J.aq(t.a),q=t.b,t=new A.c0(r,q,A.u(t).i("c0<1>")),p=y.s;t.t();){o={}
n=t.c
n=n>=0?new A.a3(q+n,r.gE(r)):A.aj(A.c2())
o.a=null
m=n.b
o.a=m
l=A.a([],v)
if(n.a>0)l.push(C.iE)
n=a3.h(0,m.a[0])
n=A.h(n==null?"Evento":n,1,C.a3,i,i,C.aj,i,i,i)
k=o.a.a[2]
k=A.a([k>0?"Teto "+A.aQ(k,!1):"Sem teto"],p)
j=o.a.a
if(j[3]+e.$1(j[0])>0){j=o.a.a
k.push("por pagar "+A.aQ(j[3]+e.$1(j[0]),!1))}n=A.B(A.a([n,C.b0,A.h(C.e.a2(k," \xb7 "),i,i,i,i,C.R,i,i,i)],v),C.G,C.i,C.m,0,C.v)
k=o.a.a
l.push(new A.hx(A.A(i,A.P(A.a([new A.bQ(1,C.av,n,i),C.ak,A.h(A.aQ(k[1]+f.$1(k[0]),!1),i,i,i,i,C.aj,i,i,i),C.bm,C.kG],v),C.w,C.i,C.m,0,i,i),C.r,C.an,C.dw,i,i,i,i,C.cm,i,i,i),new B.bI3(o,g),i,i))
C.e.n(w,l)}return A.B(A.a([x,new A.dQ("N\xfameros",i,u,16,i),new A.dQ("Por evento \xb7 "+d,i,w,16,i),D.aBR],v),C.I,C.i,C.m,0,C.v)},
$S:1308}
B.bIa.prototype={
$1(d){return J.d2(this.a.e,new B.bHY(d)).d2(0,0,new B.bHZ())},
$S:181}
B.bHY.prototype={
$1(d){return d.b===this.a&&d.x!==C.eM},
$S:66}
B.bHZ.prototype={
$2(d,e){return d+e.w},
$S:459}
B.bIb.prototype={
$1(d){return J.d2(this.a.e,new B.bI4(d)).d2(0,0,new B.bI5(this.b))},
$S:181}
B.bI4.prototype={
$1(d){return d.b===this.a&&d.x!==C.eM},
$S:66}
B.bI5.prototype={
$2(d,e){var x,w
if(e.y!=null){x=e.z
if(x==null)x=0
x=this.a.$2(x,e.w)}else x=0
if(e.at!=null){w=e.ax
if(w==null)w=0
w=this.a.$2(w,e.w)}else w=0
return d+x+w},
$S:459}
B.bI0.prototype={
$2(d,e){return d+e.a[2]},
$S:264}
B.bI1.prototype={
$2(d,e){var x=e.a
return d+x[1]+this.a.$1(x[0])},
$S:264}
B.bI2.prototype={
$2(d,e){var x=e.a
return d+x[3]+this.a.$1(x[0])},
$S:264}
B.bI3.prototype={
$0(){return this.b.f.$1(this.a.a.a[0])},
$S:0}
B.aYz.prototype={
$0(){return A.ai(this.a).ap("/bookings",null,y.X)},
$S:0};(function installTearOffs(){var x=a._static_1,w=a._static_0,v=a._instance_0u,u=a._instance_1u
x(B,"dGr","cWi",15)
w(B,"dGq","dnp",16)
v(B.DH.prototype,"giL","d5",4)
var t
u(t=B.abE.prototype,"gapx","TG",5)
v(t,"gaRE","Qq",6)
v(B.abj.prototype,"gaSP","aSQ",12)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bw,[B.cEG,B.cEC,B.cED,B.cEE,B.cEF,B.b55,B.b56,B.b52,B.b54,B.bKg,B.bJY,B.bJZ,B.bJX,B.bK5,B.bK6,B.bKf,B.bK8,B.cBi,B.bMt,B.bMw,B.bJn,B.bVZ,B.bGW,B.bH6,B.bH2,B.bMx,B.bMy,B.bMA,B.bMB,B.bMD,B.bI6,B.bI7,B.bIa,B.bHY,B.bIb,B.bI4])
x(A.K,[B.Dx,B.b3r,B.A1,B.Mi,B.a7E,B.aC8])
x(A.cQ,[B.b3s,B.bJW,B.bK7,B.cBr,B.bMz,B.bIc,B.bI8,B.bHZ,B.bI5,B.bI0,B.bI1,B.bI2])
w(B.DH,A.fc)
x(A.bR,[B.b53,B.bK_,B.bK0,B.bKh,B.bK9,B.bKa,B.bK4,B.bKb,B.bK3,B.bKc,B.bK2,B.bKd,B.bK1,B.bKe,B.cBg,B.cBh,B.bMv,B.bMu,B.bJo,B.bVV,B.bVW,B.bVX,B.bVY,B.bH9,B.bH8,B.bHa,B.bH7,B.bGX,B.bH1,B.bH0,B.bH3,B.bH_,B.bH4,B.bGZ,B.bH5,B.bGY,B.bMC,B.bI9,B.bI_,B.bI3,B.aYz])
w(B.abD,A.f6)
w(B.a0D,A.dB)
w(B.abE,A.dx)
x(A.I,[B.aPD,B.aDw,B.aD3,B.Xn,B.ahU,B.anr])
x(A.ep,[B.aDx,B.aGf,B.WZ,B.aCd])
w(B.NI,A.G)
w(B.abj,A.a_)})()
A.bp(b.typeUniverse,JSON.parse('{"DH":{"fc":["A1"]},"a0D":{"G":[],"e":[],"f":[]},"NI":{"G":[],"e":[],"f":[]},"WZ":{"G":[],"e":[],"f":[]},"abE":{"a_":["a0D"]},"aPD":{"I":[],"e":[],"f":[]},"aDw":{"I":[],"e":[],"f":[]},"aDx":{"G":[],"e":[],"f":[]},"aD3":{"I":[],"e":[],"f":[]},"aGf":{"G":[],"e":[],"f":[]},"Xn":{"I":[],"e":[],"f":[]},"abj":{"a_":["NI"]},"ahU":{"I":[],"e":[],"f":[]},"aCd":{"G":[],"e":[],"f":[]},"anr":{"I":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{l:x("ay<f9>"),k:x("ay<t<rR>>"),u:x("ay<t<fR>>"),o:x("ay<t<+eventId,spentByHand,total,unpaidByHand(c,R,R,R)>>"),y:x("ay<a5<c,t<c>>>"),x:x("zE"),b:x("uN"),d:x("rW"),Z:x("pf"),v:x("ee"),_:x("i4"),h:x("DH"),g:x("A1"),D:x("r<Dx>"),r:x("r<i4>"),Q:x("r<xl>"),F:x("r<ek>"),Y:x("r<a5<c,@>>"),n:x("r<+eventId,spentByHand,total,unpaidByHand(c,R,R,R)>"),E:x("r<a7E>"),c:x("r<Mi>"),s:x("r<c>"),p:x("r<e>"),R:x("t<fR>"),t:x("t<fy>"),G:x("t<a5<c,@>>"),m:x("t<+eventId,spentByHand,total,unpaidByHand(c,R,R,R)>"),P:x("a5<c,@>"),w:x("dg"),A:x("+eventId,spentByHand,total,unpaidByHand(c,R,R,R)"),e:x("lL"),N:x("c"),B:x("aC8"),q:x("dq"),i:x("R"),z:x("@"),S:x("v"),X:x("K?"),T:x("c?"),I:x("R?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.agp=new A.aP(0,1/0,32,1/0)
D.av9=new A.a0(8,5,6,5)
D.c9b=new A.C("Prazo",null,C.aj,null,null,null,null,null,null,null,null)
D.aAK=new A.bQ(1,C.av,D.c9b,null)
D.bA0=x([],y.r)
D.aAR=new B.A1(!1,D.bA0)
D.aBP=new A.kL("Os pagamentos que fazes por fora: \xabMarcar pago\xbb quando pagares.",10,null)
D.aBR=new A.kL("Toca num evento para ver os pagamentos e as categorias dele.",12,null)
D.aC_=new A.kL("Sem pagamentos nesta vista.",8,null)
D.aFA=new A.dM(null,null,null,null,null,null,null,null,null,null,"Ex.: vestido, convites, alian\xe7as",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bH,null,null,C.bH,C.bH,!0,null,null,null,null)
D.aFV=new A.dM(null,null,null,null,null,null,null,null,null,null,"0,00",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1,null,null,null,null,C.bH,null,null,C.bH,C.bH,!0,null,null,null,null)
D.aG7=new A.dM(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"\u20ac",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aHX=new A.ew("Pago",C.db,null)
D.aI3=new A.ew("Por pagar",C.hE,null)
D.aIa=new A.m5("Or\xe7amento","Todos os teus eventos",null)
D.aIg=new A.m5("Or\xe7amento",null,null)
D.bzf=x(["catering"],y.s)
D.bAh=x([],y.D)
D.bAi=x([],y.n)
D.bAL=x(["flowers_decor"],y.s)
D.bCg=x(["music_dj","bands_musicians"],y.s)
D.bCP=x(["photography"],y.s)
D.bE1=x(["venue"],y.s)
D.ca7=new A.C("A despesa precisa de um t\xedtulo",null,C.mw,null,null,null,null,null,null,null,null)
D.bLA=new A.Q(U.O9,D.ca7,null)
D.aFn=new A.qO("Ainda n\xe3o h\xe1 despesas nesta categoria.",C.kE,null)
D.bLW=new A.Q(C.ht,D.aFn,null)
D.bMA=new A.Q(P.uZ,C.ek,null)
D.bZ8=new A.vX(!1,6,!0,null)
D.c4U=new A.N(!0,C.A,null,null,null,null,14,C.cX,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c73=new A.N(!0,null,null,null,null,null,null,C.cX,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaZ=new A.N(!0,C.A,null,null,null,null,40,C.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cd5=new A.C("Fica s\xf3 no or\xe7amento: os pagamentos que juntas \xe0 m\xe3o fazem-se fora da app.",null,C.cy,null,null,null,null,null,null,null,null)
D.cdt=new A.C("Nova despesa",null,C.bl,null,null,null,null,null,null,null,null)
D.cdv=new A.C("\u20ac",null,D.aaZ,null,null,null,null,null,null,null,null)
D.cfC=new A.C("Indica um valor v\xe1lido",null,C.mw,null,null,null,null,null,null,null,null)
D.chR=new A.C("VALOR",null,C.b8,null,null,null,null,null,null,null,null)
D.Jt=new B.abD(0,"all")
D.acu=new B.abD(1,"paid")
D.acv=new B.abD(2,"pending")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dTB","cZd",()=>C.bW.$1$1(new B.cEG(),y.m))
x($,"dUq","am4",()=>A.mU(B.dGq(),null,!1,null,null,y.h,y.g))})()};
(a=>{a["4zLb1AxAxtRSLQBq0X/HLWmLuBo="]=a.current})($__dart_deferred_initializers__);