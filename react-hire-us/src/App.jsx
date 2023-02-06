import './App.scss';
import Inquiries from './containers/Inquiries/Inquiries.jsx';
import NewInquiry from './components/NewInquiry/NewInquiry.jsx';


function App() {
  return (
    <div className="App">
      <NewInquiry />
      <Inquiries />
    </div>
  );
}



export default App;