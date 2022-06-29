import DataTable from "../../components/DataTable/DataTable"
import Header from "../../components/Header/Header"
import Title from "../../components/Title/Title"
import { DataContainer } from "./styled"
import DonutChart from "../../components/DonutChart/DonutChart"

const Home = () => {

    return (
        <div>
            <Header />
            <Title />
            <DataContainer>
                <DataTable />
                <DonutChart />
            </DataContainer>
        </div>
    )
}

export default Home