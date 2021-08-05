(this.webpackJsonpboard=this.webpackJsonpboard||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(10),s=n.n(c),i=n(7),o=n(9),l=n(2),u=n(3),h=n(5),j=n(4),d=n(6),p=n.n(d),b=n(0),O=function(e){var t=e.players,n=t.length,r=t.reduce((function(e,t){return e+t.score}),0);return Object(b.jsx)("table",{className:"stats",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Players:"}),Object(b.jsx)("td",{children:n})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Total Points:"}),Object(b.jsx)("td",{children:r})]})]})})};O.PropTypes={players:p.a.arrayOf(p.a.shape({score:p.a.number}))};var y=O,m=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isRunning:!1,elapsedTime:0,previousTime:0},e.tick=function(){if(e.state.isRunning){var t=Date.now();e.setState((function(n){return{previousTime:t,elapsedTime:n.elapsedTime+(t-e.state.previousTime)}}))}},e.handleStopWatch=function(){e.setState((function(e){return{isRunning:!e.isRunning}})),e.state.isRunning||e.setState({previousTime:Date.now()})},e.handleReset=function(){e.setState({elapsedTime:0})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){return e.tick()}),100)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){var e=Math.floor(this.state.elapsedTime/1e3);return Object(b.jsxs)("div",{className:"stopwatch",children:[Object(b.jsx)("h2",{children:"Stopwatch"}),Object(b.jsx)("span",{className:"stopwatch-time",children:e}),Object(b.jsx)("button",{onClick:this.handleStopWatch,children:this.state.isRunning?"Stop":"Start"}),Object(b.jsx)("button",{onClick:this.handleReset,children:"Reset"})]})}}]),n}(r.Component),f=function(e){var t=e.players,n=e.title;return Object(b.jsxs)("header",{children:[Object(b.jsx)(y,{players:t}),Object(b.jsxs)("h1",{children:[n," "]}),Object(b.jsx)(m,{})]})};f.PropTypes={title:p.a.string,players:p.a.arrayOf(p.a.object)},f.defaultProps={title:"Scoreboard"};var v=f,x=function(e){var t=e.index,n=e.score,r=e.changeScore;return Object(b.jsxs)("div",{className:"counter",children:[Object(b.jsx)("button",{className:"counter-action decrement",onClick:function(){return r(t,-1)},children:" - "}),Object(b.jsx)("span",{className:"counter-score",children:n}),Object(b.jsx)("button",{className:"counter-action increment",onClick:function(){return r(t,1)},children:" + "})]})},g=function(e){return Object(b.jsxs)("svg",{viewBox:"0 0 44 35",className:e.isHighScore?"is-high-score":null,children:[Object(b.jsx)("path",{d:"M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z",transform:"translate(0 0.301727)"}),Object(b.jsx)("rect",{width:"30.4986",height:"3.07759",transform:"translate(6.56987 31.5603)"})]})},S=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.id,r=e.score,a=e.index,c=e.removePlayer,s=e.changeScore;return Object(b.jsxs)("div",{className:"player",children:[Object(b.jsxs)("span",{className:"player-name",children:[Object(b.jsx)("button",{className:"remove-player",onClick:function(){return c(n)},children:"\u2716"}),Object(b.jsx)(g,{isHighScore:this.props.isHighScore}),t]}),Object(b.jsx)(x,{score:r,index:a,changeScore:s})]})}}]),n}(r.PureComponent),P=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={value:""},e.playerInput=a.a.createRef(),e.handleValueChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.AddPlayer(e.playerInput.current.value),t.currentTarget.reset()},e}return Object(u.a)(n,[{key:"render",value:function(){return console.log(this.state.value),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsx)("input",{type:"text",ref:this.playerInput,placeholder:"Enter a player's name..."}),Object(b.jsx)("input",{type:"submit",value:"Add Player"})]})}}]),n}(r.Component),k=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={players:[{name:"Player 1",score:0,id:1},{name:"Player 2",score:0,id:2},{name:"Player 3",score:0,id:3},{name:"Player 4",score:0,id:4}]},e.prevPlayerID=4,e.getHighScore=function(){var t=e.state.players.map((function(e){return e.score})),n=Math.max.apply(Math,Object(o.a)(t));return n||null},e.handleScoreChange=function(t,n){e.setState((function(e){return{score:e.players[t].score+=n}}))},e.handleAddPlayer=function(t){e.setState((function(n){return{players:[].concat(Object(o.a)(n.players),[{name:t,score:0,id:e.prevPlayerID+=1}])}}))},e.handleRemovePlayer=function(t){e.setState((function(e){return{players:e.players.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.getHighScore();return Object(b.jsxs)("div",{className:"scoreboard",children:[Object(b.jsx)(v,{players:this.state.players}),this.state.players.map((function(n,r){var a;return Object(b.jsx)(S,(a={name:n.name,score:n.score,id:n.id},Object(i.a)(a,"score",n.score),Object(i.a)(a,"index",r),Object(i.a)(a,"changeScore",e.handleScoreChange),Object(i.a)(a,"removePlayer",e.handleRemovePlayer),Object(i.a)(a,"isHighScore",t===n.score),a),n.id.toString())})),Object(b.jsx)(P,{AddPlayer:this.handleAddPlayer})]})}}]),n}(r.Component);n(18);s.a.render(Object(b.jsx)(k,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.bf0d4377.chunk.js.map