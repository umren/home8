import React from "react";

export function TrackResults(props) {
  const data = props.data;
  const handleEdit = props.handleEdit;
  const handleRemove = props.handleRemove;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Дата (ДД.ММ.ГГ)</th>
            <th>Пройдено км</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.date}</td>
                <td>{e.distance}</td>
                <td>
                  <button onClick={handleEdit} value={i}>
                    Edit
                  </button>
                  <button onClick={handleRemove} value={i}>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}