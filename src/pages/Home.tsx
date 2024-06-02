import { useEffect, useState } from "react";
import useDashboard from "../hook/useDashboard";

const Home = () => {
  const { handleGetDashboard } = useDashboard();
  const [dashboards, setDashboards] = useState([]);

  const onGetDashboardInfo = async () => {
    const { data } = await handleGetDashboard();

    console.log(data);
    setDashboards(data);

    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetDashboardInfo();
  }, []);

  return (
    <div>
      {dashboards.map((dashboard: any) => (
        <div key={dashboard.id}>
          <iframe
            title="DB DATAWAREHOUSE (1)"
            width="600"
            style={{ width: "100%", height: "100vh" }}
            height="373.5"
            src={dashboard.linkdashboard}
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default Home;
