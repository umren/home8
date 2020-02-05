import React, { useState } from "react";
import { dateSort, clear } from "../utils";
import { TrackForm } from "./TrackForm";
import { TrackResults } from "./TrackResults";

export function Track(props) {
  const [trackData, setTrackData] = useState([]);

  // handle form submit
  const handleSubmit = evt => {
    evt.preventDefault();

    const date = evt.target.date.value;
    const distance = evt.target.distance.value;

    if (
      trackData.length > 0 &&
      dateExists(date).filter(clear)[0] !== undefined
    ) {
      const existDateIndex = dateExists(date).filter(clear)[0];
      let newTrackData = trackData;
      newTrackData[existDateIndex].distance =
        parseInt(newTrackData[existDateIndex].distance) + parseInt(distance);

      setTrackData([...newTrackData]);
    } else {
      setTrackData(
        [...trackData, { date: date, distance: distance }].sort(dateSort)
      );
    }
  };

  // check if date already exists in trackData
  const dateExists = d => {
    return trackData.map((e, i) => {
      if (e.date === d) {
        return i;
      }
    });
  };

  // handle delete element by index
  const handleRemove = evt => {
    const index = evt.target.value;
    let newTrackData = trackData;
    newTrackData.splice(index, 1);
    setTrackData([...newTrackData]);
  };

  return (
    <div>
      <TrackForm onSubmit={handleSubmit} />
      <TrackResults data={trackData} handleRemove={handleRemove} />
    </div>
  );
}
