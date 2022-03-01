import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, SideBar } from './components';
import styled from 'styled-components';
import { store } from '../src/store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Header />
          <AppBody>
            <SideBar />
            <Routes>
              <Route path="/"></Route>
            </Routes>
          </AppBody>
        </>
      </Router>
    </Provider>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export default App;
