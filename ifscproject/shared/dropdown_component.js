import React from 'react';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    onChangeDropdown = (e) => {
        console.log(e.target.value);
        this.props.callbackFn(e.target.value)
    };

    render() {

        const makeDropDown = () => {
            console.log(this.data)
            return this.props.data.map((x) => {
                return <option key={x.seo_val} value={x.seo_val}>{x.text_val}</option>;
            })
        }
        return (
            <div>
                <div>
                    <select value={this.props.value} onChange={this.onChangeDropdown}>
                        <option value="" disabled>{this.props.defaultOption}</option>

                        {makeDropDown()}
                    </select>;
                </div>
            </div>
        )
    }
}

export default  DropDown;