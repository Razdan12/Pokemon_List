import { useEffect, useRef } from "react";
import { Chart, ChartConfiguration, ChartItem, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

interface DataItem {
  venue: string;
  count1: number;
}

const ChartSide = ({
  data,
  id,
  title1,
  tipe,
}: {
  data: DataItem[];
  id: string;
  title1: string;
  tipe: any
}) => {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    Chart.register(...registerables);

    const chartConfig: ChartConfiguration = {
      type: tipe,
      data: {
        labels: data.map((row) => row.venue),
        datasets: [
          {
            label: title1,
            data: data.map((row) => row.count1),
            fill: true,
          },
        ],
      },
      options: {
        animation: {
          duration: 1000,
          delay: (context) => context.dataIndex * 100,
        },
        plugins: {
          datalabels: {
            anchor: "center",
            align: "center",
            formatter: (value) => value,
            color: "white",
          },
          legend: {
            position: 'bottom',
            labels: {
              color: "white"
              
            },
          },
        },
      },
      plugins: [ChartDataLabels],
    };

    const chartElement = document.getElementById(id) as ChartItem;
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (chartElement) {
      chartRef.current = new Chart(chartElement, chartConfig);
    }
  }, [data]);

  return (
    <div className="w-full ">
      <canvas id={id}></canvas>
    </div>
  );
};

export default ChartSide;
