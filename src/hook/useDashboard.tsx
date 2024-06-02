import { dashboardApi } from "../api/dashboardApi";

const useDashboard = () => {
  const handleGetDashboard = async () => {
    try {
      const response = await dashboardApi.get("/api/dashboard", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status !== 200) {
        throw new Error("Error al momento de obtener los datos");
      }

      const responseData = response.data;

      return responseData
    } catch (error) {
      throw new Error("Error al momento de obtener los datos");
    }
  };

  return { handleGetDashboard };
};

export default useDashboard;
