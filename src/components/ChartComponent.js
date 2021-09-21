import React from "react";
import { VictoryPie } from "victory";

export default function ChartComponent() {
  return (
    <div style={{ maxHeight: "400px", maxWidth: "400px" }}>
      <VictoryPie />
    </div>
  );
}
