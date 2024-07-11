import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isDataAcive, setIsDataAcive] = useState(false);
  return (
    <>
      <Header isDataAcive={isDataAcive} />
      <main></main>
      <Footer setIsDataAcive={setIsDataAcive} isDataAcive={isDataAcive} />
    </>
  );
}

export default App;
