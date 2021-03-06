import React,{Suspense,lazy}from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Loading from './componets/Loading';
import {Switch,Route}from 'react-router-dom';

const Home=lazy(()=>import('./pages/Home'));
const History=lazy(()=>import('./pages/History'));
const About=lazy(()=>import('./pages/About'));
const Login=lazy(()=>import('./pages/Login'));
const Register=lazy(()=>import('./pages/Register'));


function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/history" component={History} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default App;
