import React, { useState } from "react";

import { TrackForm } from "./TrackForm";

export function Track(props) {
  const [trackData, setTrackData] = useState([]);

  return <TrackForm trackData={trackData} setTrackData={setTrackData} />;
}
