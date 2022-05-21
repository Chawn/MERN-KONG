
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <div className="container p-5">
      <NavbarComponent />

      <h1>MERN STACK Workshop</h1>
      <a className="btn btn-primary" href="/create">เขียนบทความ</a>
    </div>
  );
}

export default App;
