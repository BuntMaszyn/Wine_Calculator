(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(3),r=t.n(n),i=(t(15),t(1)),s=t(4),c=t(5),u=t(7),m=t(6),d=t(8),p=(t(16),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).state={bo:26,juice:10,water:0,waterAdd:0,sugarAdd:0,bx:0,allCalculated:!1},t.submitHandle=function(e){e.preventDefault();var a=t.state,l=a.bo,o=a.juice,n=a.water,r=a.waterAdd,i=a.sugarAdd,s=a.bx;console.log(t.state);var c=o/(o+n)*4;console.log("poprawka: "+c);var u=l-c;console.log("Blg o skorygowany: "+u);var m=10*u,d=.62*m,p=1e3-m,w=p,g=w+d;console.log("cukier g/l: "+m,"cukier ml: "+d,"woda g/l ml: "+p,"obj\u0119to\u015b\u0107 kg roztworu: "+g);var b=1e3*m/g,E=b*(o+n);console.log("ilo\u015b\u0107 cukru w litrze nastawu: "+b,"ilo\u015b\u0107 cukru w nastawie: "+E);var k=i/1e3*.62,y=E+i,f=o/(o+r+n+k)*4;console.log("skorygowana poprawka na niecukry uwzgl\u0119dniaj\u0105ca dodan\u0105 wod\u0119 i dos\u0142adzanie: "+f);var v=n+o+k+r,h=y/v,z=h/16.9,j=.1974*z;0!==z&&(j+=1.3);var F=s-f+j,N=10*F,A=h-N,x=A/16.9;console.log(x),t.setState({pop:parseFloat(c),boPop:parseFloat(u),sugarInitial:parseFloat(m),sugarInitialVolume:parseFloat(d),waterInitial:parseFloat(p),waterInitialVolume:parseFloat(w),wineInitialKgVolume:parseFloat(g),sugarInLiterOfInitialWine:parseFloat(b),allSugarInInitialWine:parseFloat(E),sugarAddVolume:parseFloat(k),sugarWhole:parseFloat(y),popWithAdditions:parseFloat(f),volumeOfAllUsed:parseFloat(v),potentialSugarPerLiter:parseFloat(h),potentialAlkoToProduce:parseFloat(z),popAlko:parseFloat(j),bxWithPops:parseFloat(F),sugarRest:parseFloat(N),allFermentedSugarPerLiter:parseFloat(A),finalAlkoVol:parseFloat(x),allCalculated:!0},function(){window.scrollTo(0,t.myRef.current.offsetTop)}),console.log(t.state)},t.setBo=function(e){var a=parseFloat(e.target.value);Number.isNaN(a)||a>30||a<-4?(alert("B\u0142\u0105d: pocz\u0105tkowa g\u0119sto\u015b\u0107 nie mo\u017ce by\u0107 wi\u0119ksza od 30 ani mniejsza od -4 Blg, pole nie mo\u017ce by\u0107 puste"),document.querySelector(".bo").value=0):t.setState({bo:a})},t.setJuice=function(e){var a=parseFloat(e.target.value);console.log(a),Number.isNaN(a)||a<0?alert("B\u0142\u0105d: pole nie mo\u017ce by\u0107 puste, warto\u015bci ujemne s\u0105 wykluczone"):(console.log(a),t.setState({juice:a}))},t.setWater=function(e){var a=parseFloat(e.target.value);Number.isNaN(a)||a<0?alert("B\u0142\u0105d: pole nie mo\u017ce by\u0107 puste, warto\u015bci ujemne s\u0105 wykluczone"):t.setState({water:a})},t.setWaterAdd=function(e){var a=parseFloat(e.target.value);Number.isNaN(a)||a<0?alert("B\u0142\u0105d: pole nie mo\u017ce by\u0107 puste, warto\u015bci ujemne s\u0105 wykluczone"):t.setState({waterAdd:a})},t.setSugarAdd=function(e){var a=parseFloat(e.target.value);Number.isNaN(a)||a<0?alert("B\u0142\u0105d: pole nie mo\u017ce by\u0107 puste, warto\u015bci ujemne s\u0105 wykluczone"):t.setState({sugarAdd:a})},t.setBx=function(e){var a=parseFloat(e.target.value);Number.isNaN(a)||a>30||a<-4?(alert("B\u0142\u0105d: ko\u0144cowa g\u0119sto\u015b\u0107 nie mo\u017ce by\u0107 wi\u0119ksza od 30 ani mniejsza od -4 Blg, pole nie mo\u017ce by\u0107 puste"),document.querySelector(".bx").value=0):t.setState({bx:a})},t.reset=function(e){e.preventDefault(),t.setState({bo:26,juice:10,water:0,waterAdd:0,sugarAdd:0,bx:0,allCalculated:!1}),document.querySelector(".bo").value=t.state.bo,document.querySelector(".bx").value=t.state.bx},t.myRef=o.a.createRef(),t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"header"}," Kalkulator Winiarski"),o.a.createElement("div",{className:"wrapper"},o.a.createElement("form",{className:"form",onSubmit:this.submitHandle},o.a.createElement("label",null," 1) Ilo\u015b\u0107 soku w nastawie [l]:"),o.a.createElement("input",{type:"number",value:this.state.juice,onChange:this.setJuice}),o.a.createElement("label",null," 2) Ilo\u015b\u0107 wody w nastawie [l]:"),o.a.createElement("input",{type:"number",value:this.state.water,onChange:this.setWater}),o.a.createElement("label",null," ","3) Wskazania g\u0119sto\u015bciomierz\u0105 przed fermentacj\u0105 [Blg]:"),o.a.createElement("input",{className:"bo",type:"number",defaultValue:this.state.bo,onBlur:this.setBo}),o.a.createElement("label",null," 4) Cukier dodany przed/podczas fermentacji [g]:"),o.a.createElement("input",{type:"number",value:this.state.sugarAdd,onChange:this.setSugarAdd}),o.a.createElement("label",null," 5) Woda dodana podczas fermentacji [l]:"),o.a.createElement("input",{type:"number",value:this.state.waterAdd,onChange:this.setWaterAdd}),o.a.createElement("label",null," ","6) Wskazania g\u0119sto\u015bciomierz\u0105 po zako\u0144czeniu fermentacji [Blg]:"),o.a.createElement("input",{className:"bx",type:"number",defaultValue:this.state.bx,onBlur:this.setBx}),o.a.createElement("div",null),o.a.createElement("button",{className:"button",type:"submit"},"Oblicz"),o.a.createElement("div",null),o.a.createElement("button",{className:"button button2",onClick:this.reset},"Reset")),o.a.createElement("div",{className:"animationContainer flex"},o.a.createElement(w,{props:this.state})),o.a.createElement("div",{className:"sweetContainer flex"},this.state.allCalculated?o.a.createElement(b,{props:this.state.sugarRest}):o.a.createElement(E,{props:this.state.sugarRest})),o.a.createElement("div",{ref:this.myRef,className:"reportRef"},this.state.allCalculated?o.a.createElement(k,{props:this.state}):o.a.createElement("div",null)))))}}]),a}(l.Component)),w=function(e){return console.log(e),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"reportList informationList"},o.a.createElement("ul",null,o.a.createElement("h3",null,"Uwagi:"),o.a.createElement("li",null,"Pomiar\xf3w g\u0119sto\u015bciomierzem nale\u017cy dokona\u0107 w tej samej temperaturze, nalepiej ",o.a.createElement("sup",null,"o"),"20 C, w\xa0niewzburzonym nastawie, po ustabilizowaniu si\u0119 pozycji p\u0142ywaka"),o.a.createElement("li",null,"Kalkulator podaje jedynie wyniki prawdopodobne ustalone na podstawie wzor\xf3w empirycznych. Wyniki bezwzgl\u0119dne s\u0105 mo\u017cliwe do uzyskania za pomoc\u0105 bada\u0144 laboratoryjnych (np. destylacji)"),o.a.createElement("p",null,"\xa0"),o.a.createElement("p",null,"\u24b8 Rafa\u0142 Baran (visit my GitHub projects) =>"," ",o.a.createElement("a",{href:"https://github.com/BuntMaszyn"},"www.Github.com/BuntMaszyn")))),o.a.createElement("div",{className:"circle"},o.a.createElement("div",{className:"wave"})),e.props.allCalculated?o.a.createElement("h1",null,"Uzyska\u0142e\u015b ",e.props.finalAlkoVol.toFixed(2)," % alkoholu i wino:"):o.a.createElement(o.a.Fragment,null))},g={border:"1px solid black",borderRadius:"50%",lineHeight:"3em",width:"10em",justifyContent:"center",backgroundColor:"#a6d2ff",display:"flex",alignItems:"center",margin:"1em"},b=function(e){console.log(e);var a=e.props;return o.a.createElement(o.a.Fragment,null,a<=4?o.a.createElement("div",{style:Object(i.a)({},g,{background:"red",transform:"scale(1.4)"})},"Wytrawne"):o.a.createElement("div",{style:Object(i.a)({},g,{background:"#a6d2ff"})},"Wytrawne"),a>4&&a<=12?o.a.createElement("div",{style:Object(i.a)({},g,{background:"red",transform:"scale(1.4)"})},"P\xf3\u0142wytrawne"):o.a.createElement("div",{style:Object(i.a)({},g,{background:"#a6d2ff"})},"P\xf3\u0142wytrawne"),a>12&&a<=45?o.a.createElement("div",{style:Object(i.a)({},g,{background:"red",transform:"scale(1.4)"})},"P\xf3\u0142s\u0142odkie"):o.a.createElement("div",{style:Object(i.a)({},g,{background:"#a6d2ff"})},"P\xf3\u0142s\u0142odkie"),a>45?o.a.createElement("div",{style:Object(i.a)({},g,{background:"red",transform:"scale(1.4)"})},"S\u0142odkie"):o.a.createElement("div",{style:Object(i.a)({},g,{background:"#a6d2ff"})},"S\u0142odkie"))},E=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:Object(i.a)({},g,{background:"#a6d2ff"})},"Wytrawne"),o.a.createElement("div",{style:Object(i.a)({},g,{background:"#a6d2ff"})},"P\xf3\u0142wytrawne"),o.a.createElement("div",{style:Object(i.a)({},g,{background:"#a6d2ff"})},"P\xf3\u0142s\u0142odkie"),o.a.createElement("div",{style:Object(i.a)({},g,{background:"#a6d2ff"})},"S\u0142odkie"))},k=function(e){return console.log(e),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"reportContainer flex"},o.a.createElement("div",{className:"reportList"},o.a.createElement("h3",null,"Winiarzu, nastawi\u0142e\u015b wino o nast\u0119puj\u0105cych parametrach:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Sok owocowy: ",e.props.juice," l"),0!==e.props.water||""!==e.props.water?o.a.createElement("li",null,"Woda: ",e.props.water," l"):o.a.createElement("li",null,"nie dodano wody"),o.a.createElement("li",null,"Wskazania g\u0119sto\u015bciomierza: ",e.props.bo," Blg"),o.a.createElement("li",null,"Poprawka na niecukry: ",e.props.pop.toFixed(2)," Blg "),o.a.createElement("li",null,"W jednym kilogramie nastawu znajduje si\u0119"," ",Math.floor(e.props.sugarInitial)," g czyli"," ",Math.floor(e.props.sugarInitialVolume)," ml cukru oraz"," ",Math.floor(e.props.waterInitialVolume)," ml wody"),o.a.createElement("li",null,"Ca\u0142kowita ilo\u015b\u0107 cukru w ",e.props.water+e.props.juice," l nastawu to: ",Math.floor(e.props.allSugarInInitialWine)," g"," ")),0!==e.props.sugarAdd||0!==e.props.waterAdd?o.a.createElement("div",{className:"reportList optionalReport"},o.a.createElement("h3",null,"Do pocz\u0105tkowego nastawu doda\u0142e\u015b:"),o.a.createElement("ul",null,0!==e.props.sugarAdd?o.a.createElement("li",null,"Dos\u0142odzono cukrem w ilo\u015bci: ",e.props.sugarAdd," g"):o.a.createElement("li",null,"Nie dos\u0142adzano"),0!==e.props.waterAdd?o.a.createElement("li",null,"Dolano wody w ilo\u015bci: ",e.props.waterAdd," l"):o.a.createElement("li",null,"Nie dolewano wody"),e.props.pop!==e.props.popWithAdditions?o.a.createElement("li",null,console.log(e.props.popWithAdditions.toFixed(2),"ada"),"Skorygowana poprawka na niecukry:"," ",e.props.popWithAdditions.toFixed(2)," Blg"):o.a.createElement(o.a.Fragment,null),o.a.createElement("li",null,"Obj\u0119to\u015b\u0107 z uwgl\u0119dnieniem dodatk\xf3w:"," ",e.props.volumeOfAllUsed.toFixed(2)," l"))):o.a.createElement("div",null)),o.a.createElement("div",{className:"reportList"},o.a.createElement("h3",null,"Po fermentacji:"),o.a.createElement("ul",null,o.a.createElement("li",null,"W litrze nastawu by\u0142o:"," ",Math.floor(e.props.potentialSugarPerLiter)," g cukru co dawa\u0142o potencjaln\u0105 mo\u017cliwo\u015b\u0107 uzyskania"," ",e.props.potentialAlkoToProduce.toFixed(2)," % alkoholu"),o.a.createElement("li",null,"Wskazania g\u0119sto\u015bciomierza po fermentacji: ",e.props.bx.toFixed(2)," ","Blg"),o.a.createElement("li",null,"Poprawka g\u0119sto\u015bciowa na zawarto\u015b\u0107 alkoholu:"," ",e.props.popAlko.toFixed(2)," Blg"," "),o.a.createElement("li",null,"Skorygowane wskazanie g\u0119sto\u015bciomierza:"," ",e.props.bxWithPops.toFixed(2)," Blg"," "),o.a.createElement("li",null,"Cukier przefermentowany"," ",e.props.allFermentedSugarPerLiter.toFixed(2)," g/l"," "),o.a.createElement("li",null,"Cukier resztkowy (s\u0142odko\u015b\u0107) ",e.props.sugarRest.toFixed(2)," g/l"," "),o.a.createElement("li",null,"Finalna moc wina ",e.props.finalAlkoVol.toFixed(2)," % alk ")))))},y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.d3dbf5b7.chunk.js.map