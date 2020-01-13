import React, { useState } from "react";
import { TrackResults } from "./TrackResults";

export function TrackForm(props) {
  const [form, setForm] = useState({ date: "", distance: "" });
  const [trackData, setTrackData] = useState([]);

  const handleChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const date = form.date;
    const distance = form.distance;

    setTrackData([...trackData, { date: date, distance: distance }]);
    setForm({ date: "", distance: "" });
    // TODO
  };

  const handleEdit = evt => {
    // TODO
  };

  const handleRemove = evt => {
    // TODO
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input
          id="date"
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />
        <label htmlFor="distance">Пройдено км</label>
        <input
          id="distance"
          name="distance"
          type="text"
          value={form.distance}
          onChange={handleChange}
        />
        <button type="submit">OK</button>
      </form>
      <TrackResults
        data={trackData}
        handleEdit={handleEdit}
        handleRemove={handleRemove}
      />
    </div>
  );
}
