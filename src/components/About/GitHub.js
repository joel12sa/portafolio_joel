import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { getGitHubEvents } from "../Api/GitHubServices";
import { Row } from "react-bootstrap";

// Registrar componentes de Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ContributionsChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const events = await getGitHubEvents();
        const contributions = events.filter(
          (event) => event.type === "PushEvent"
        );
        const dates = contributions.map((event) =>
          new Date(event.created_at).toLocaleDateString()
        );
        const counts = dates.reduce((acc, date) => {
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        setChartData({
          labels: Object.keys(counts),
          datasets: [
            {
              label: "Contribuciones de GitHub",
              data: Object.values(counts),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      {chartData.labels.length > 0 && chartData.datasets.length > 0 ? (
        <Line data={chartData} />
      ) : (
        <p>Cargando datos...</p>
      )}
    </Row>
  );
};

export default ContributionsChart;
