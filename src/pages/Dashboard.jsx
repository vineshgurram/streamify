import { Link } from "react-router-dom";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import KeyMetrics from "../components/KeyMetrics";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Legend,
  Cell,
  Bar,
  BarChart,
} from "recharts";

const keyMetricsData = [
  {
    name: "Total Users",
    no: "1M+",
  },
  {
    name: "Active Users",
    no: "0.5M+",
  },
  {
    name: "Total Streams",
    no: 3000,
  },
  {
    name: "Revenue",
    no: "1B+",
  },
  {
    name: "Top Artist",
    no: "Hans Zimmer",
  },
];

const userGrowthData = [
  { month: "Jan", totalUsers: 1000, activeUsers: 500 },
  { month: "Feb", totalUsers: 2000, activeUsers: 900 },
  { month: "Mar", totalUsers: 3000, activeUsers: 1500 },
  { month: "Apr", totalUsers: 4500, activeUsers: 2500 },
  { month: "May", totalUsers: 6000, activeUsers: 3500 },
  { month: "Jun", totalUsers: 7500, activeUsers: 4000 },
  { month: "Jul", totalUsers: 9000, activeUsers: 5000 },
  { month: "Aug", totalUsers: 11000, activeUsers: 6000 },
  { month: "Sep", totalUsers: 13000, activeUsers: 7000 },
  { month: "Oct", totalUsers: 15000, activeUsers: 8000 },
  { month: "Nov", totalUsers: 17000, activeUsers: 9000 },
  { month: "Dec", totalUsers: 20000, activeUsers: 10000 },
];

const revenueDistribution = [
  { name: "Subscriptions", value: 60000 },
  { name: "Ads", value: 40000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const streamedSongs = [
  { name: "Cornfield Chase", streams: 500000 },
  { name: "Recuerda", streams: 450000 },
  { name: "First Step", streams: 420000 },
  { name: "A Dark Knight", streams: 390000 },
  { name: "Is She with You?", streams: 360000 },
];

export default function Homepage() {
  return (
    <div className="lyt-page typ-home">
      <section className="bs-breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>Pages</Breadcrumb.Item>
          <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
      </section>
      <section className="lyt-section pb-5">
        <h1 className="bs-heading typ30 mb-5">Dashboard Overview</h1>
        <h2 className="bs-heading typ20 typ600 mb-4">Key Metrics</h2>
        <Row className="justify-content-between">
          {keyMetricsData.map((metrics, index) => (
            <Col xl={2} lg={4} key={index}>
              <KeyMetrics name={metrics.name} no={metrics.no} />
            </Col>
          ))}
        </Row>
      </section>
      <section className="lyt-section">
        <h2 className="bs-heading typ20 typ600 mb-4">Data Visualization</h2>
        <Row className="g-5">
          <Col lg={6}>
            <h3 className="bs-para typ14 mb-4">User Growth Chart</h3>
            <div className="graph-box">
              <div style={{ width: "100%", height: "400px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="totalUsers"
                      stroke="#0075FF"
                    />
                    <Line
                      type="monotone"
                      dataKey="activeUsers"
                      stroke="#A0AEC0"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <h3 className="bs-para typ14 mb-4">Revenue Distribution</h3>
            <div className="graph-box">
              <div style={{ width: "100%", height: "400px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={600} height={600}>
                    <Tooltip />
                    <Legend />
                    <Pie
                      data={revenueDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {revenueDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                  <Tooltip />
                </ResponsiveContainer>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="graph-box">
              <h3 className="bs-para typ14 mb-4">Top 5 Streamed Songs</h3>
              <div style={{ width: "100%", height: "400px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart width={450} height={40} data={streamedSongs}>
                    <Bar dataKey="streams" fill="#0075FF" />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}
