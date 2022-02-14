import React from "react";

class ProfileStatus extends React.Component{

    state = {
        editMode: false,
        status: this.props.status,
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status,
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
        // this.forceUpdate();
    }

    deactivateEditMode(){
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) =>{
        let text = e.currentTarget.value;
        this.setState({
            status: text,
        });
    }
    
    render(){
        return(
            <div>
                {!this.state.editMode &&
                <div>
                    Status: <span onDoubleClick={this.activateEditMode}>{this.props.status || '------'}</span>
                </div>
                }

                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}/>
                </div>
                }
            </div>)
    }
}

export default ProfileStatus;

