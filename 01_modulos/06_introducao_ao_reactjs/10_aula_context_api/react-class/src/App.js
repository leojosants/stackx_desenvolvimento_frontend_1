import PlansAndPrices from "./components/plansAndPrices/plansAndPrices";
import UseThemeButton from "./contextApi/contextApi";
import MiniGame from "./miniGame/miniGame";

const App = () => {
  return (
    <div>
      <PlansAndPrices />
      <MiniGame />
      <UseThemeButton/>
    </div>
  );
};

export default App;