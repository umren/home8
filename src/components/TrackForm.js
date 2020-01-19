import React from "react";

export function TrackForm(props) {
  const handleSubmit = props.handleSubmit;
  const handleChange = props.handleChange;
  const form = props.form;

  return (
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
  );
}
