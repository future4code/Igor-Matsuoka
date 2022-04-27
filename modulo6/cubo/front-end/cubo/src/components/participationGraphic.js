import React, { useContext } from "react";
import { Chart } from "react-google-charts";
import GlobalStateContext from "../global/globalStateContext";

const ParticipationGraphic = () => {

    const { states } = useContext(GlobalStateContext)

    const data = states.person && states.person.map((user) => {
        return [`${user.name} ${user.lastName}`, user.participation]
    })

    const options = {
        title: "",
        pieHole: 0.4,
        is3D: false,
    };

    return (

        <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={[["Name", "Participation"], ...data]}
            options={options}
        />

    );
}

export default ParticipationGraphic