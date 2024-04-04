import { posthog } from "posthog-js";
import { useEffect } from "react";

const Analytics = ({ PH_TRACKING_ID }: { PH_TRACKING_ID?: string }) => {
  useEffect(() => {
    posthog.init(PH_TRACKING_ID || "", {
      api_host: "https://app.posthog.com",
    });
  }, [PH_TRACKING_ID]);

  return null;
};

export default Analytics;
