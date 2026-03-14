import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import {type Bowler} from "./types/bowler";

function BowlerList() {
    const [bowlers, setBowlers] = useState<Bowler[]>([]);

    useEffect(() => {
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
    }, []); // Empty dependency array means this effect runs once on mount

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
              <th>Middle Initial</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Phone Number</th>
              <th>Team Name</th>
            </tr>
          </thead>
          <tbody>
            {
              bowlers.map((bowler) => (
                <tr key={bowler.bowlerId}>
                  <td>{bowler.bowlerId}</td>
                  <td>{bowler.bowlerFirstName}</td>
                  <td>{bowler.bowlerMiddleInit}</td>
                  <td>{bowler.bowlerLastName}</td>
                  <td>{bowler.bowlerAddress}</td>
                  <td>{bowler.bowlerCity}</td>
                  <td>{bowler.bowlerState}</td>
                  <td>{bowler.bowlerZip}</td>
                  <td>{bowler.bowlerPhoneNumber}</td>
                  <td>{bowler.team?.teamName || "N/A"}</td>
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