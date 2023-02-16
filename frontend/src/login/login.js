
import './login.css';

function App() {
  return (
    <div className="App">
      <div class="container" ng-app="app" ng-controller="MainController">
      <h1>Iniciar sesion</h1>
<form name="loginForm" class="form-section" action="/auth" method="post">

  <div class="pwd-section">

    <div class="field">
    
      <input type="text" ng-model="pwd" maxlength="10" placeholder="Usuario" id="user"  name="user" required />
    </div>
    <div class="field2">
      
      <input type="password" ng-model="pwd" maxlength="10" placeholder="password" id="pass"  name="pass" required />
    </div> 
    <div class="field3">
      
      <input  type="submit" value="Iniciar Sesion"></input>
    </div>
    
    <div class="indicator">

      <img ng-hide="pwd" alt="default" src="https://static.wixstatic.com/media/52672d_00d9d51b4b6d4b29a5786119e6c813d0~mv2.gif" title="default" />
    
  
    
    </div>
  </div>
</form>
<br />
</div>
    </div>
  );
}

export default App;
