import Footer from "./Container/Footer";
import Header from "./Container/Header";
import Container from "./Container";
import Form from "./Container/Form";
import Clock from "./Container/Clock";

function App() {
  return (
    <Container>
      <Header title="Kalkulator walut" />
      <Clock />
      <Form />
      <Footer />
    </Container>
  );
}

export default App;
