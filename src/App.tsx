import React from 'react';
//packages
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//styles
import { GlobalStyles } from './assets/GlobalStyle';
import { Login } from './routes/Login';
import { Cadastro } from './routes/Cadastro';
//components


function App() {

  //stilos
  const theme = {
    corPadrao: "#0B1641",
    corSecudaria: "#1F1F1F",
    corBranco: "#fff",
  }


  //autenticação de rotas
  const AuthenticatedRoutes = () => {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/cadastro" exact>
          <Cadastro />
        </Route>

      </Router >
    )
  }

  return (
    <React.Fragment>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route component={AuthenticatedRoutes} />
          </Switch>

        </ThemeProvider>
      </Router>
    </React.Fragment>
  );
}

export default App;
