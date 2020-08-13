import React from 'react';
import s from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode =() =>{
        this.setState({
            editMode: true
        })
        // this.state.editMode = true;
        // this.forceUpdate();
    };
    deactivateEditMode = ()=>{
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
        // this.state.editMode = true;
        // this.forceUpdate();
    };
    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value,
        })
    };

    render() {
        return <div>
            Status:
            {!this.state.editMode
                ? <div><span onClick={this.activateEditMode}> {this.props.status || 'No status'}</span></div>
                : <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} type="text"/></div>}


        </div>

    }
}

export default ProfileStatus;