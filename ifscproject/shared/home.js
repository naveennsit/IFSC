/**
 * Created by Naveen.Sharma on 02-03-2018.
 */
import React from 'react';
import DropDown from "./dropdown_component";
import axios from "axios";



class Home extends React.Component {

    constructor(props) {
        super(props);
        let initialData ;

        if (props.staticContext) {
            console.log("initail dataa")
            initialData = props.staticContext.initialData;
        } else {
            initialData = window.__initialData__;
            delete window.__initialData__;
        }

        this.state = {
            bankData: initialData,
            bankName: '',

        };

    }

    static requestInitialData(){
        return  axios
            .get("https://biz.timesofindia.indiatimes.com/bankifsc/getlist");
    }

    callStateService = (bankName) => {
        axios
            .get("https://biz.timesofindia.indiatimes.com/bankifsc/getlist?seo_bank=" + bankName)
            .then(response => {
                const data = response.data.data;
                this.setState({
                    districtName: '',
                    branchName: '',
                    stateData: data,
                    stateName: '',
                    bankName: bankName,
                    districtData: [],
                    branchData: [],


                });
            });


    }

    render() {
        return (
            <div>
                <DropDown data={this.state.bankData}
                          defaultOption="select Bank"
                          value={this.state.bankName}
                          callbackFn={this.callStateService}
                />
            </div>
        )
    }
}

export default Home;
