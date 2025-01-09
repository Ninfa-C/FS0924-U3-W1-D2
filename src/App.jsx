import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
//import AllTheBoooks from "./components/AllTheBooks";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList />
      <MyFooter />
    </>
  );
}

export default App;
