import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts"

export const Graphic = () => {

    const options = {
        title: "",
        legend: "none",
        is3D: false,
        pieHole: 0.4,
    };

    const data = persons && persons.map((user) => {
        return [`${user.name} ${user.lastName}`, user.participation]
    })


    return ( <div>

            <Chart
                chartType="PieChart"
                data={[["Name", "Participation"],
                ...data]}
                options={options}
                width={"100%"}
                height={"100%"}
                padding={"0px"}
                backgroundColor={'red'}
              />

        </div>

    )
}