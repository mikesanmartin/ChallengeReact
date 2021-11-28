import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserRoutes from './routes/UserRoutes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="main">
      <h3>Alkemy Challenge Frontend React</h3>
      <div className='container'>
        <UserRoutes/>
      </div>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
