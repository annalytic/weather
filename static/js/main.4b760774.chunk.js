(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),i=(n(14),n(3)),l=n(4),u=n(6),s=n(5),h=n(7);n(16);var d=function(t){var e=t.location,n=t.current;return o.a.createElement("div",{className:"weather"},o.a.createElement("h1",null,"".concat(e.name,", ").concat(e.country)),o.a.createElement("img",{src:n.condition.icon,alt:n.condition.text}),o.a.createElement("p",null,n.condition.text),o.a.createElement("span",null,"".concat(n.temp_c," \xb0C")))},f=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={data:"",input:"",found:!0},n.handleInput=function(t){n.setState({input:t.target.value})},n.handleSubmit=function(t){t.preventDefault(),n.fetchData(n.state.input)},n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"fetchData",value:function(t){var e=this,n="http://api.apixu.com/v1/current.json?key=2b5a0fb89f0d45029a5203614182911&q=".concat(t);fetch(n).then(function(t){return t.ok?(console.log("200"),e.setState({data:"",found:!0}),t.json()):(e.setState({data:"",found:!1}),void console.log("not 200"))}).then(function(t){e.setState({data:t}),console.log(t)}).catch(function(t){return console.error(t)})}},{key:"render",value:function(){var t,e=this.state,n=e.data,a=e.input,c=e.found;return n&&(t=o.a.createElement(d,n),console.log("weather")),c||(t=o.a.createElement("p",null,"Not found. Try a new search."),console.log("not found")),o.a.createElement("div",{className:"App"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",placeholder:"Search for city, country etc.",value:a,onChange:this.handleInput}),o.a.createElement("button",{type:"submit"},"Search")),t)}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.4b760774.chunk.js.map