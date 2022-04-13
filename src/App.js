import logo from './logo.svg';
import './App.css';
import Btns from './components'


function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className="row header">
          
        </div>
        <div className="row main">
          <div className='row row-btn'>
            {/* <div className="col-md-3 col-lg-2 offset-lg-2">
              <button type='button' className='btn btn-primary btn-lg'>click</button>
            </div>
            <div className="col-md-3 col-lg-2">
              <button type='button' className='btn btn-primary btn-lg'>click</button>
            </div>
            <div className="col-md-3 col-lg-2">
              <button type='button' className='btn btn-primary btn-lg'>click</button>
            </div>
            <div className="col-md-3 col-lg-2">
              <button type='button' className='btn btn-primary btn-lg'>click</button>
            </div> */}
            <Btns name='letter' isFirst={true} />
            <Btns name='album'/>
            <Btns name='dboard'/>
            <Btns name='sentence'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
