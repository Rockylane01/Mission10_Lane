import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {type Bowler} from "./types/bowler";

function BowlerList() {
    const [bowlers, setBowlers] = useState<Bowler[]>([]);

    const fetchBowlers = async () => {
        try {
            const response = await fetch("https://localhost:5000/api/bowler");

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: Bowler[] = await response.json();
            setBowlers(data);
        } 
        catch (error) {
            console.error("Error fetching bowlers:", error);
        }
    };

    fetchBowlers();

  return (
    <>
      <div className="container mt-4">
        <h2 className="mb-3">Bowler List</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Bowler ID</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {
              bowlers.map((bowler) => (
                <tr key={bowler.bowlerId}>
                  <td>{bowler.bowlerId}</td>
                  <td>{bowler.bowlerFirstName}</td>
                  <td>{bowler.bowlerLastName}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BowlerList;