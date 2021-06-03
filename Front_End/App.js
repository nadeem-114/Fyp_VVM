import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./index.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("
  https://scontent.fisb1-1.fna.fbcdn.net/v/t1.6435-9/58852726_174878386762223_797567468292800512_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=e3f864&_nc_ohc=dhJ3yRmHP_IAX-ZOPA5&_nc_ht=scontent.fisb1-1.fna&oh=00b06c001a69780b89614c2ffbc375fa&oe=60DBB099");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <AppContainer>
          <Route path="/" exact component={AccountBox} />
        </AppContainer>
      </Switch>
    </Router>
  );
}

export default App;
