const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState =
    {
        dialogs: [
            {id: 1, name: "Aman", img: "https://i.ebayimg.com/00/s/MTYwMFgxMDE4/z/zzwAAOSwstJZR5WU/$_7.PNG"},
            {id: 2, name: "Aigerim", img: "https://miraclelearningcentre.com/wp-content/uploads/2016/04/song.png"},
            {id: 3, name: "Sultan", img: "https://i.ebayimg.com/00/s/MTYwMFgxMDE4/z/zzwAAOSwstJZR5WU/$_7.PNG"},
            {id: 4, name: "Aiganym", img: "https://miraclelearningcentre.com/wp-content/uploads/2016/04/song.png"},
            {id: 5, name: "Makhambet", img: "https://i.ebayimg.com/00/s/MTYwMFgxMDE4/z/zzwAAOSwstJZR5WU/$_7.PNG"},
        ],
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "Hello there!"},
            {id: 3, message: "How are you?"},
            {id: 4, message: "Yo!"},
            {id: 5, message: "Everything cools!"},
        ],
        newMessageBody: "",
    };

const dialogsReducer = (state = initialState, action) => {

    // let stateCopy;
    switch (action.type)  {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,
                newMessageBody: action.body};


            // stateCopy = {...state, newMessageBody: action.body};
            // return stateCopy;

        // state.newMessageBody = action.body;
        // return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;

            return {...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]};

        // let body = state.newMessageBody;
        // state.newMessageBody = '';
        // state.messages.push({id: 6, message: body});
        // return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;