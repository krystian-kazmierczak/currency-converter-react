import Container from "./Container/styled";
import Footer from "./Container/Footer";
import Header from "./Container/Header";
import Form from "./Container/Form";
import Clock from "./Container/Clock";
import { Info } from "./Container/Info/styled";
import { useDataFromApi } from "./useDataFromApi";

function App() {
  const data = useDataFromApi();
  const currencies = data.rates;
  return (
    <>
      {data.status === "loading" && (
        <Container>
          <Info>Ładuję kursy walut z Narodowego Banku Polskiego...</Info>
        </Container>
      )}
      {data.status === "error" && (
        <Container>
          <Info error>
            Coś poszło nie tak... Sprawdź połączenie z internetem i spróbuj
            ponownie!
          </Info>
        </Container>
      )}
      {data.status === "success" && (
        <Container>
          <Header title="Kalkulator walut" />
          <Clock />
          <Form currencies={currencies} />
          <Footer table={data.table} date={data.date} />
        </Container>
      )}
    </>
  );
}

export default App;
