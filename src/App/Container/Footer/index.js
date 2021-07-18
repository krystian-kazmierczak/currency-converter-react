import { Paragraph } from "./styled";

const Footer = ({table, date}) => (
  <footer>
    <Paragraph smaller>Pola wymagane oznaczonę są *</Paragraph>
    <Paragraph smaller>
      Kursy pochodzą z&nbsp;tabeli nr&nbsp;{table} z&nbsp;dnia {" "} {date}
    </Paragraph>
    <Paragraph smaller centered>
      &copy; 2021 Krystian Kaźmierczak
    </Paragraph>
  </footer>
);
export default Footer;
