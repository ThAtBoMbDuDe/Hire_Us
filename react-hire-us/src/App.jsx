import './App.css';
import Inquiries from './containers/Inquiries/';
import NewInquiry from './components/NewInquiry/NewInquiry';


function App() {
  return (
    <div className="App">
      <NewInquiry />
      <Inquiries />
    </div>
  );
}



export default App;