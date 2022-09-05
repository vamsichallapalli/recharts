import './vaccbygender.css'
import {ResponsiveContainer,Cell,Legend,Pie,PieChart,Tooltip} from 'recharts'
function VaccinationByGender (props) {
    const {VaccinationByGenderBased} = props
   
return(
    <>
    <div className = "piechart-container">
        <h1 className='heading'>Vaccination by gender</h1>
        <ResponsiveContainer width="90%" height={400}>
            <PieChart>
                <Pie CX ="50%" CY ="50%"data={VaccinationByGenderBased} startAngle = {0} endAngle = {180}     innerRadius="40%"
          outerRadius="70%" dataKey = "count">
                    <Cell fill = "#b3d23f" name='Others'></Cell>
                    <Cell fill = "green"   name = "Female"></Cell>
                    <Cell fill = "orange" name = "Male"></Cell>
                </Pie>
                <Legend iconType="circle"/>
                <Tooltip/>
            </PieChart>
        </ResponsiveContainer>

    </div>
    </>
)
}
export default VaccinationByGender