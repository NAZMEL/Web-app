import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea} from "../../common/FormsControls/FormsControls";

const ProfileDataForm = (props) =>{
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div><button>Save</button></div>
            <div>
                Full name:  <Field component={Input} 
                        name="fullName" 
                        placeholder="Full name"
                        validate={[]}/>
            </div>
            <div>
                Looking for a job: <Field component={Input} 
                        name="lookingForAJob" 
                        placeholder="Looking for a job"
                        validate={[]}
                        type="checkbox"/>
            </div>

            {props.profile.lookingForAJob &&
                <div>
                    My professional skills: <Field component={Textarea} 
                        name="lookingForAJobDescription" 
                        placeholder="Looking for a job description"
                        validate={[]}
                        />
                </div>
            }
            {props.profile.aboutMe &&
                <div>
                    About me: <Field component={Textarea} 
                        name="aboutMe" 
                        placeholder="About me"
                        validate={[]}
                        />
                </div>
            }
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
