import PriceCard from "./PriceCard";

export default function PriceSection() {
  return (
    <>
      <div className="flex-this-price-cards th-container">
        <PriceCard pach="BASIC" bgcolor="black" textcolor="white" time="1" nrsesions="1" price="121"/>
        <PriceCard pach="STANDARD" bgcolor="green" textcolor="white" time="2" nrsesions="2" price="222"/>
        <PriceCard pach="PRO" bgcolor="black" textcolor="white" time="4" nrsesions="4" price="444"/>
      </div>
    </>
  );
}
