import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
//import AllTheBoooks from "./components/AllTheBooks";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import Category from "./components/Category"

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <Category/>
      <BookList />
      <MyFooter />
    </>
  );
}

export default App;
