import React, { useEffect, useState } from "react";
import { getTrainers } from "../../api/trainerApi";
import "./Trainers.scss";

export default function Trainers() {
    const [trainers, setTrainers] = useState(null);

    useEffect(async () => {
        setTrainers(await getTrainers());
    }, []);

    return (
        <main className="trainers-page">
            <h1>Trainers</h1>
            {trainers ? (
                <table>
                    <tbody>
                        {trainers.map((trainer) => (
                            <tr key={trainer.id}>
                                <td>{trainer.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}
        </main>
    );
}
