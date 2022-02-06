import News from "./News";
import { addNewsCreator, clearNewsFieldsCreator, updateNewNewsDescriptionCreator, updateNewNewsTitleCreator } from "../../redux/newsReducer";
import { connect } from "react-redux";
    

let mapStateToProps = (state) =>{
    return{
        newsPage: state.newsPage,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addNews: () =>{
            dispatch(addNewsCreator());
        },
        changeTitle: (text) =>{
            dispatch(updateNewNewsTitleCreator(text));
        },
        changeDescription: (text) =>{
            dispatch(updateNewNewsDescriptionCreator(text));
        },
        clearFields: () =>{
            dispatch(clearNewsFieldsCreator());
        }
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;