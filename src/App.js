import logo from './logo.svg';
import './App.css';
import Btns, {Card} from './components'


function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className="row sec-header justify-content-center">
          <div className="col-3 py-3 mb-3">
            <img src="https://via.placeholder.com/100x50" className="w-img mx-auto" />
          </div>
        </div>
        <div className="row sec-btn">
          <Btns name='letter' isFirst={true} />
          <Btns name='album' isSecond={true} />
          <Btns name='dboard' isThird={true} />
          <Btns name='sentence' isFourth={true} />
        </div>
        <div className="row sec-album">
          <div className="col-md-12 col-lg-8 offset-lg-2 row mx-auto h-100">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
