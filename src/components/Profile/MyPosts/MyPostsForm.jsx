import { Field, reduxForm } from "redux-form";

const MyPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component="textarea" name="newMyPostText" placeholder="Input your comment" />
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