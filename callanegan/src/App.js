import { Header } from "./Header";
import MenuBar from "./MenuBar";
import Profile from "./Profile";
import { Footer } from "./Footer";

function App() {
  return (
    <div className={"app"}>
      <Header />
      <main>
        <div className={"main-wrapper"}>
          <Profile />
          <MenuBar />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
