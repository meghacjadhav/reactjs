import "./App.css";
import Header from "./Components/Header";
import CustomerInfo from "./Components/CustomerInfo";
import OrderInfo from "./Components/OrderInfo";
import ProductList from "./Components/ProductList";

const User = {
  name: "Alan Ford",
  employeeId: "00005152",
  appointment: "9:00 (24-05-2016)",
  email: "alan.form@email.nl",
  phone: "+31123456789",
  status: "In Progress",
  door: "Mark",
  time: { tym: "10:30", date: "(25-05-2016)" },
  productName: "Boltaart Bosbessen",
  profileImg: "https://www.w3schools.com/howto/img_avatar.png",
  productDesc:
    "Overheerlijke Boltaart met Bosbessen uit de keuken van de Bijenkorf.",
};
const App = () => {
  return (
    <>
      <Header user={User} />
      <CustomerInfo user={User} />
      <OrderInfo user={User} />
      <ProductList user={User} />
    </>
  );
};

export default App;
