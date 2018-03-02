/**
 * Created by Naveen.Sharma on 02-03-2018.
 */
import React from 'react';
import DropDown from "./dropdown_component";


class Home extends React.Component {

    constructor(props) {
        super(props);
        if(props.initialData){
            console.log("initail dataa")
            console.log(props.initialData)
            let initialData = props.initialData;
            this.state = {
                bankData: initialData,
                bankName: '',

            };
        }

    }

    render() {
        return (
            <div>
                <DropDown data={this.state.bankData}
                          defaultOption="select Bank"
                          value={this.state.bankName}
                          />
            </div>
        )
    }
}

export default Home;
