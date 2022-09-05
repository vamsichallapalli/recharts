import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis,Legend,Tooltip} from 'recharts'
import './vaccinationCoverage.css'
function VaccinationCoverage (props){
    const {ListofvaccinationCoverage} = props
   
   const DataFormatter = (number) =>{
        if(number > 1000){
            return `${(number/1000).toString()}K`
        }
        else{
            return number.toString()
        }

    }
    return (
     <>
     <div className='barchart-container'>
        <h1 className='heading1'>Vaccination Coverage</h1>
     <ResponsiveContainer width="90%" height={500}>
        <BarChart  data = {ListofvaccinationCoverage} >
            <XAxis dataKey="vaccine_date" tick = {{stroke:"grey",
        strokeWidth:1.5}}/>
            <YAxis  tickFormatter = {DataFormatter} tick = {{stroke:"grey",
        strokeWidth:1}}/>
        <Legend iconType="circle" />
        <Tooltip/>
        <Bar dataKey="dose_1" name = "dose-1" fill = "red" ></Bar>
        <Bar dataKey="dose_2" name = "dose-2" fill = "green"></Bar>
        </BarChart>
     </ResponsiveContainer>
     </div>
     </>
    )
}
export default VaccinationCoverage