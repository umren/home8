import React, { useState } from "react";

export function TrackForm(props) {
  const handleSubmit = props.onSubmit;

  const [form, setForm] = useState({ date: "", distance: "" });

  // handle input change
  const handleChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    setForm({ ...form, [name]: value });
  };

  // reset ui form
  const resetForm = () => {
    setForm({ date: "", distance: "" });
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
    </div>
  );
}
