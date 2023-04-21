// import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
  filter: '',
};

const contactsRed = createSlice({
  name: 'contact',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      return { ...state, contacts: [...state.contacts, action.payload] };
    },
    changeFilter(state, action) {
      return { ...state, filter: action.payload };
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

export const { addContact, changeFilter, deleteContact } = contactsRed.actions;

export const store = configureStore({
  reducer: contactsRed.reducer,
});

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'tasks/addContact': {
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     }

//     case 'tasks/changeFilter': {
//       return { ...state, filter: action.payload };
//     }
//     case 'tasks/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//   }

//   return state;
// };

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
