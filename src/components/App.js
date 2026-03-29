import React, { useRef } from "react";

const initialData = [
  { id: 1, name:"Romee sahil", age: 25 },
  { id: 2, name: "Shyam", age: 30 },
  { id: 3, name: "Ali", age: 35 },
  { id: 4, name: "Shaw", age: 20 },
  { id: 5, name: "Tavneet", age: 50 },
  { id: 6, name: "Lakshmi", age: 40 }
];

function App() {
  const editedRows = useRef({});

  const handleChange = (id, field, value) => {
    if (!editedRows.current[id]) {
      editedRows.current[id] = {};
    }

    editedRows.current[id][field] =
      field === "age" ? Number(value) : value;
  };

  const handleSave = () => {
    console.log(editedRows.current);
  };

  return (
    <div>
      <h2>Editable Table</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {initialData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>

              <td>
                <input
                  type="text"
                  defaultValue={row.name}
                  onChange={(e) =>
                    handleChange(row.id, "name", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  defaultValue={row.age}
                  onChange={(e) =>
                    handleChange(row.id, "age", e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <button onClick={handleSave}>Save changes</button>
    </div>
  );
}

export default App;