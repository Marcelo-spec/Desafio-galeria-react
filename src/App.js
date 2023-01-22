import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <div className="App">
        <Header
          subtitle="Gallery"
          title="The Cat Page"
        />
        <div className="row">
          <Card title="Cat" desc="This is a cat" photo="https://www.latercera.com/resizer/hGDUsmfcwrjN_aFhJa7CKzoMavY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/OAJIF267MBH4ZE4WF4QJBOONIA.jpg" />
          <Card title="Cat" desc="This is a cat" photo="https://www.latercera.com/resizer/hGDUsmfcwrjN_aFhJa7CKzoMavY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/OAJIF267MBH4ZE4WF4QJBOONIA.jpg" />
          <Card title="Cat" desc="This is a cat" photo="https://www.latercera.com/resizer/hGDUsmfcwrjN_aFhJa7CKzoMavY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/OAJIF267MBH4ZE4WF4QJBOONIA.jpg" />
          <Card title="Cat" desc="This is a cat" photo="https://www.latercera.com/resizer/hGDUsmfcwrjN_aFhJa7CKzoMavY=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/OAJIF267MBH4ZE4WF4QJBOONIA.jpg" />
        </div>
      </div>
      <Footer desc="The Cat Page 2023" />
    </>
  );
}



export default App;
