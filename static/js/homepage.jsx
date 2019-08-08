class Homepage extends React.Component {
	render(){
		return (
            <div>
                <p>Welcome to this world, i hope you get to survive</p> 
                <a href="/cards"> Cards </a>
                <br/>
                <img src="/static/img/balloonicorn.jpg"/>
            </div>
        );
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));



