import axios from "axios";
import React, { useEffect, useState } from "react";

const JsonServer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3004/Users")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="px-20 py-20">
        <table>
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 text-left border">Name</th>
              <th className="px-3 py-2 text-left border">Email</th>
              <th className="px-3 py-2 text-left border">Username</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => {
              return (
                <tr key={i}>
                  <td className="px-3 py-2 text-left border">{d.name}</td>
                  <td className="px-3 py-2 text-left border">{d.email}</td>
                  <td className="px-3 py-2 text-left border">{d.username}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JsonServer;
