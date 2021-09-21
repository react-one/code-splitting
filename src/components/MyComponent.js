import React, { useState } from "react";
export default function MyComponent() {
  const [isChartDisplayed, setChartDisplayed] = useState(false);
  const [ChartComponent, setChartComponent] = useState();

  const loadChartComponent = async () => {
    const loadResult = await import("./ChartComponent");
    setChartComponent(() => loadResult.default);
  };

  return (
    <div>
      <button
        onClick={async () => {
          loadChartComponent();
          setChartDisplayed(!isChartDisplayed);
        }}>
        show analytics
      </button>
      {isChartDisplayed && ChartComponent ? <ChartComponent /> : null}
    </div>
  );
}
