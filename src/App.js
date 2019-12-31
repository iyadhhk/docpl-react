import React from "react";
import NavMenu from "./components/NavMenu/NavMenu";
import MainText from "./components/MainText/MainText";
import UserSpace from "./components/UserSpace/UserSpace";
import Clients from "./components/Clients/Clients";
import Show from "./components/Show/Show";
import TextCenter from "./components/TextCenter/TextCenter";
import Places from "./components/Places/Places";
import Footer from "./components/Footer/Footer";
import "./App.css";
const userInfo = [
  {
    title: "For patients",
    text: "Find a doctor, book a visit and solve any health- related doubt",
    img: " https://www.docplanner.com/img/screen-marketplace@2x.png",
    background: "bg-green",
    select: [
      "Choose country",
      "Argentina",
      "Australia",
      "Brazil",
      "Chile",
      "Colombia",
      "Czech",
      "France",
      "Italy",
      "Mexico",
      "Peru",
      "Poland",
      "Portugal",
      "Spain",
      "Turkey",
      "UK"
    ]
  },
  {
    title: "For doctors",
    text: "Save time managing visits and cut no-shows by half",
    img: "https://www.docplanner.com/img/screen-saas@2x.png",
    background: "bg-blue"
  }
];
const navLinks = [
  { link: "About us", address: "#" },
  { link: "Career", address: "#" },
  {
    link: "Departments",
    address: "#",
    dropMenu: [
      { link: "Marketing & PR", address: "#" },
      { link: "Customer Success & Sales", address: "#" },
      { link: "IT, Product, Design & UX", address: "#" },
      { link: "Finance & Administration", address: "#" },
      { link: "HR & more", address: "#" }
    ]
  }
];
const cities = [
  { city: "Warsaw", img: "https://www.docplanner.com/images/warsaw.png" },
  { city: "Barcelona", img: "https://www.docplanner.com/images/barcelona.png" },
  { city: "Istanbul", img: "https://www.docplanner.com/images/istanbul.png" },
  { city: "Rome", img: "https://www.docplanner.com/images/rome.png" },
  {
    city: "Mexico City",
    img: "https://www.docplanner.com/images/mexico-city.png"
  },
  { city: "Curitiba", img: "https://www.docplanner.com/images/curitiba.png" }
];
const cards = [
  {
    img: "https://www.docplanner.com/img/flag.png",
    title: "Leader in 10 countries",
    text:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia,Argentina and Chile",
    margin: true
  },
  {
    img: "https://www.docplanner.com/img/patients.png",
    title: "30 million unique patients",
    text: "visit us every month"
  },
  {
    img: "https://www.docplanner.com/img/visits.png",
    title: "1.5 million appointments",
    text: "booked last month",
    margin: true
  },
  {
    img: "https://www.docplanner.com/img/doctors.png",
    title: "2 million active doctors",
    text: "trust in our solutions"
  }
];

function App() {
  return (
    <div className="App">
      <NavMenu menu={navLinks} />
      <MainText />
      <UserSpace user={userInfo} />
      <Clients />
      <Show cards={cards} />
      <TextCenter />
      <Places places={cities} />
      <Footer />
    </div>
  );
}

export default App;
