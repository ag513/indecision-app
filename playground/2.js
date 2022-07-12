
console.log('App.js is running changed!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};


const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option)
    e.target.elements.option.value="";
    renderApp()
  }
}

const wipeArray = () => {
  app.options = [];
  renderApp()
}
const makeDecision = () => {
  const randonNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randonNum]
  alert(option)
}

const renderApp = () => {
  let templateTwo = <div>
     <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <p>{app.options.length}</p>
    <button disabled={app.options.length === 0} onClick={makeDecision}>what should i do</button>
    <button onClick={wipeArray}>Remove all</button>
    <ol>
      {
        app.options.map((option)=>{
          return <li key={option}>{option}</li>
        })
      }
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add option</button>
    </form>
</div>;

let appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
}

renderApp();
