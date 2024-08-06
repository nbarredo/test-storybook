import "./App.css";
import TotalBalance, { AccountCard } from "@eversource/storybook";

function App() {
  return (
    <>
      <TotalBalance
        buttonLabel="Pay Multiple Bills"
        onClick={function noRefCheck() {}}
        subtitle="$1,375.11"
        title="Total Balance"
      />
      <AccountCard
        acctDetailsURL="http://www.yahoo.com"
        acctID={12345678987}
        address="124 Main Street NH 120384"
        alertText="Warning message appears here"
        cardStyle="default"
        dateDue="02/06/23"
        hasAutopay
        mobileCTAType="paperless"
        onCardBodyClick={function noRefCheck() {}}
        onClick={function noRefCheck() {}}
        onClickAutopay={function noRefCheck() {}}
        onClickPaperless={function noRefCheck() {}}
        onClickPayBill={function noRefCheck() {}}
        showAutopayBtn
        showPaperlessBtn
        status="nothingDue"
        totalDue="$900,853.02"
        type="electric"
      />
    </>
  );
}

export default App;
