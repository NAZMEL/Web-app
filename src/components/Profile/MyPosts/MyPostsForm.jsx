import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import {requiredField, maxLengthCreator} from "./../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const MyPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} name="newMyPostText" placeholder="Input your comment" validate={[requiredField, maxLength10]} />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    )
  }
  
  const MyPostFormRedux = reduxForm({
    form: 'myPostForm',
  })(MyPostForm);

  
  export default MyPostFormRedux;