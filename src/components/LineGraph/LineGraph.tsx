import React, { FC } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip,
  AreaChart,
} from "recharts";
import styles from "./LineGraph.module.css";

interface LineGraphProps {
  data: {
    Name: string;
    Value: number;
  }[];
}

const LineGraph: FC<LineGraphProps> = ({ data }) => {
  return (
    <div className="graph">
      <div className={styles.LineGraph} data-testid="LineGraph">
        <AreaChart width={452} height={152} data={data}>
          <CartesianGrid stroke="#ddd" strokeDasharray="5 5" />
          <XAxis dataKey="Name" stroke="#9261a5" fontSize="12" />
          <YAxis stroke="#9261a5" fontSize="12" />
          <Area dataKey="Value" stroke="#9261a5" fill="#9261a5" />
          <Tooltip />
        </AreaChart>
      </div>
    </div>
  );
};

export default LineGraph;
