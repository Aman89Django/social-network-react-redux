import React from 'react';
import s from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        title: 'Example'
    };

    activateEditMode (){
        this.setState({
            editMode: true
        })
        // this.state.editMode = true;
        // this.forceUpdate();
    };
    deactivateEditMode (){
        this.setState({
            editMode: false
        })
        // this.state.editMode = true;
        // this.forceUpdate();
    }

    render() {
        return <div>
            {!this.state.editMode
                ? <div><span onDoubleClick={this.activateEditMode.bind(this)}> {this.props.status}</span></div>
                : <div><input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} type="text"/></div>}


        </div>

    }
}

export default ProfileStatus;