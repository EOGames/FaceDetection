import './App.css';
import Navigation from './components/navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
