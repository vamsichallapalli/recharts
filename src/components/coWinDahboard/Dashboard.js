import { Component } from "react";
import { AiOutlinePlusCircle} from "react-icons/ai";
import './Dashboard.css';
import VaccinationCoverage from "../vaccinationCoverage/vaccinationCoverage";
import VaccinationByGender from "../vaccinationByGender/vaccbygender";
import VaccinationByAge from "../vaccinationByAge/vaccinationbyage";
class Dashboard extends Component{
    state = {
        ListOfLastsSevenDaysVaccination :[],
        VaccinationByAgeBase:[],
        VaccinationByGenderBase:[]
    }
    componentDidMount(){
     this.getVaccinationBenificaryDetails()
    }
    getVaccinationBenificaryDetails = async() =>{
        const Url = "https://apis.ccbp.in/covid-vaccination-data"
        const options = {
            method :"GET"
        }
        const response = await fetch(Url,options);
        const data = await response.json()
        this.setState
            (
            {
            ListOfLastsSevenDaysVaccination:data.last_7_days_vaccination,
            VaccinationByAgeBase:data.vaccination_by_age,
            VaccinationByGenderBase:data.vaccination_by_gender
            }
            )
    }
    render(){
        const {ListOfLastsSevenDaysVaccination,VaccinationByGenderBase,VaccinationByAgeBase} = this.state
        return(
            <div className="cowin-container">
               <div className="cowin-header">
                <AiOutlinePlusCircle className="plus-icon"/>
                <h2 className="cowin-heading">Co-Win</h2>
                
                </div> 
                <h1 className="heading">Co-win vaccination in india</h1>
                 <VaccinationCoverage ListofvaccinationCoverage = {ListOfLastsSevenDaysVaccination}/>
                 <VaccinationByGender VaccinationByGenderBased = {VaccinationByGenderBase}/>
                 <VaccinationByAge VaccinationByAgeBased = {VaccinationByAgeBase}/>
            </div>
        )
    }
}
export default Dashboard