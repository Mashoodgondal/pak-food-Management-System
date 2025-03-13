"use client"
import HomePage from "./hero/page";
import HeaderPage from "./head/page";
import CalculatorModal from "./calculator/page";
// import CalculatorModal from "./(components)/calcutaror/page";

export default function Home() {
  return (
    <div >
      <HeaderPage />
      <HomePage />
      <CalculatorModal />
      {/* <CalculatorModal /> */}
    </div>
  );
}
