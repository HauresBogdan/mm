import PriceCard from "./PriceCard";

export default function PriceSection() {
  return (
    <>
      <div className="flex-this-price-cards th-container">
        <PriceCard pach="BASIC" bgcolor="black" textcolor="white" time="60" nrsesions="1" price="132"/>
        <PriceCard pach="STANDARD" bgcolor="green" textcolor="white" time="120" nrsesions="3" price="366"/>
        <PriceCard pach="PRO" bgcolor="black" textcolor="white" time="240" nrsesions="5" price="555"/>
      </div>
    </>
  );
}
