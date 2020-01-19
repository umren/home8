import React, { useState } from "react";
import { TrackResults } from "./TrackResults";
import { dateSort, clear } from "../utils";
import { TrackForm } from "./TrackForm";

export function Track(props) {
  const [form, setForm] = useState({ date: "", distance: "" });
  const [trackData, setTrackData] = useState([]);

  // handle input change
  const handleChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    setForm({ ...form, [name]: value });
  };

  // handle form submit
  const handleSubmit = evt => {
    evt.preventDefault();

    const date = form.date;
    const distance = form.distance;

    if ((trackData.length > 0) && (dateExists(date).filter(clear)[0] !== undefined)) {
      const existDateIndex = dateExists(date).filter(clear)[0];
      let newTrackData = trackData;
      newTrackData[existDateIndex].distance =
        parseInt(newTrackData[existDateIndex].distance) + parseInt(distance);
      setTrackData(newTrackData);
    } else {
      setTrackData(
        [...trackData, { date: date, distance: distance }].sort(dateSort)
      );
    }

    resetForm();
  };

  // handle edit element by index
  // not complete
  const handleEdit = evt => {
    const index = evt.target.value;
    const elem = trackData[index];
    setForm({ date: elem.date, distance: elem.distance });
  };

  // handle delete element by index
  const handleRemove = evt => {
    const index = evt.target.value;
    let newTrackData = trackData;
    newTrackData.splice(index, 1);
    setTrackData(newTrackData);
    resetForm();
  };

  // reset ui form
  const resetForm = () => {
    setForm({ date: "", distance: "" });
  };

  // check if date already exists in trackData
  const dateExists = d => {
    return trackData.map((e, i) => {
      if (e.date === d) {
        return i;
      }
    });
  };

  return (
    <div>
      <TrackForm form={form} handleSubmit={handleSubmit} handleChange={handleChange}/>
      <TrackResults
        data={trackData}
        handleEdit={handleEdit}
        handleRemove={handleRemove}
      />
    </div>
  );
}