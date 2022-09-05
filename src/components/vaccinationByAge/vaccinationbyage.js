import './vaccinationbyage.css'
import {ResponsiveContainer,Cell,Legend,Pie,PieChart,Tooltip} from 'recharts'
export default function VaccinationByAge (props){
    const {VaccinationByAgeBased} = props
    console.log(VaccinationByAgeBased)
    return(
        <>
        <div className='piechart-container'>
            <h1 className='heading'>Vaccination by age</h1>
            <ResponsiveContainer width="90%" height={400}>
                <PieChart>
                    <Pie startAngle={0} endAngle ={360} data = {VaccinationByAgeBased} dataKey = "count">
                        <Cell name='18-44' fill='#2d87bb'></Cell>
                        <Cell name='45-60' fill='#a3df9f'></Cell>
                        <Cell name='Above-60' fill = "#64c2a6"></Cell>
                    </Pie>
                    <Legend iconType='circle'/>
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>

        </div>
        </>

    )

}
