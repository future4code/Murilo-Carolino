import React, { useContext } from "react";
import { Chart } from "react-google-charts";
import { GlobalContext } from "../../contexts/global/GobalContext";
import { DonutContainer, ItemLegend, Legend } from "./styled";

const colors =  [
    '#4f7bd3',
    '#ff9900',
    '#109618',
    '#990099',
    '#0099c6',
    '#dd4477',
    '#66aa00',
    '#b82e2e',
    '#316395',
    '#994499'
]

const options = {
    pieHole: 0.4,
    is3D: false,
    legend: "none",
    colors: colors
};

const DonutChart = () => {

    const { states } = useContext(GlobalContext)

    const database = states.users.map((user) => {
        return [`${user.name} ${user.lastName}`, user.participation]
    })
    
    const total = states.users.reduce((total, user) => {
        return total + user.participation
    }, 0)

    return (
        <DonutContainer>
            <Chart
                chartType="PieChart"
                width="300px"
                height="300px"
                data={[["Name", "Participation"],
                    ...database,
                    ["No Participation", 100 - total]
                ]}
                options={options}
            />
            <Legend>
                {
                    states.users.map((user, index) => {
                        const colorIndex = index % (colors.length)
                        return (
                            <ItemLegend color={colors[colorIndex]}>
                                <div></div>
                                <p>{`${user.name} ${user.lastName}`}</p>
                            </ItemLegend>
                        )
                    })
                }
                <ItemLegend color={colors[states.users.length % (colors.length)]}>
                    <div></div>
                    <p>No Participation</p>
                </ItemLegend>
            </Legend>
        </DonutContainer>
    );
}

export default DonutChart
