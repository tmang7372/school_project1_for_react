/*
 Assignment 2
 Ang Theow Meng
 P7339041
 I also add some function to ChooseGenre.jsx,
 AddMember.jsx and Member.jsx
 */
// RecordSlice.js
import { createSlice } from "@reduxjs/toolkit";
export const recordSlice = createSlice({
  name: "Record Slice",
  initialState: {
    value: [{
      id: 1,
      "movie name": "Ticket to Paradise",
      display: true,
      description: "Academy Award® winners George Clooney and Julia Roberts reunite on the big screen as exes who find themselves on a shared mission to stop their lovestruck daughter from making the same mistake they once made",
      genre: "Comedy",
      "lead actor": ["George Clooney", "Julia Roberts"],
      rating: 5,
      displayOneMovie: false,
      selecttobepinned: false,
      language: "english"
    }, {
      id: 2,
      "movie name": "Black Panter",
      display: true,
      description: "Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston Duke), Okoye (Danai Gurira) and the Dora Milaje (including Florence Kasumba), fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.",
      genre: "Action",
      "lead actor": ["Angela Bassett", "Letitia Wright"],
      rating: 6,
      displayOneMovie: false,
      selecttobepinned: false,
      language: "english"
    }, {
      id: 3,
      "movie name": "Smile",
      display: true,
      description: "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter (Sosie Bacon) starts experiencing frightening occurrences that she can't explain.",
      genre: "Drama",
      "lead actor": ["Sosie Bacon", "Jessie T. Usher"],
      rating: 6,
      displayOneMovie: false,
      selecttobepinned: false,
      language: "english"
    }, {
      id: 4,
      "movie name": "Come Back Home",
      display: true,
      description: "In the cold winter, a group of Shenzhen tourist families take a trip to the northeast Changbai Mountain. It was originally intended to be a happy and harmonious holiday, but due to the negligence of his father, an 8-year-old boy is unfortunately lost.",
      genre: "Mistery",
      "lead actor": ["Donnie Yen", "Han Xue"],
      rating: 6,
      displayOneMovie: false,
      selecttobepinned: false,
      language: "mandarian"
    }, {
      id: 5,
      "movie name": "Ajoomma",
      display: true,
      description: "Auntie (Hong Huifang), is a middle-aged Singaporean woman who has dedicated the best years of her life to caring for her family. Now widowed with her grown up son, Sam (Shane Pow) about to fly the roost, Auntie is left to contend with a whole new identity beyond her roles of daughter, wife, and mother.",
      genre: "Drama",
      "lead actor": ["Hong Huifang", "Jung Dong-Hwan"],
      rating: 4,
      displayOneMovie: false,
      selecttobepinned: false,
      language: "mandarian"
    }, {
      id: 6,
      "movie name": "The King Of Musang King",
      display: true,
      description: "Mao Shan (Jack Neo) is an ambitious durian farmer who wishes to expand his sales overseas, against pressures from the “Three Heavenly Kings” of the business. He helps Mei Lian (Yeo Yann Yann), his neighbour and sole supporter, to improve her durian farm harvests, and develops feelings for her in the process.",
      genre: "Comedy",
      "lead actor": ["Mark Lee", "Henry Thia"],
      rating: 4,
      displayOneMovie: false,
      selecttobepinned: false,
      language: "mandarian"
    }]
  },
  reducers: {
    saveaddMovie: function (state, action) {
      return {
        ...state,
        value: [...state.value, action.payload]
      };
    },
    displayHideItem: function (state, action) {
      return {
        ...state,
        value: state.value.map((item, index) => item.id === action.payload ? {
          ...item,
          display: false
        } : item)
      };
    },
    showHideItem: function (state, action) {
      return {
        ...state,
        value: state.value.map(record => {
          for (let i = 0; i < action.payload.length; i++) {
            if (action.payload[i] === record.id) {
              let tempRecord = {
                ...record,
                "display": true
              };
              return tempRecord;
            }
          }
          return record;
        })
      };
    },
    deleteItem: function (state, action) {
      let copy = [...state.value];
      for (let i = 0; i < action.payload.length; i++) {
        copy = copy.filter((item, index) => action.payload[i] !== item.id);
      }
      return {
        ...state,
        value: copy
      };
    },
    showSelectMovieForEdit: function (state, action) {
      return {
        ...state,
        value: state.value.map((item, index) => item.id !== action.payload ? {
          ...item,
          displayOneMovie: false
        } : {
          ...item,
          displayOneMovie: true
        })
      };
    },
    showSelectedPinnedMovie: function (state, action) {
      return {
        ...state,
        value: state.value.map(record => {
          for (let i = 0; i < action.payload.length; i++) {
            if (action.payload[i] === record.id) {
              let tempRecord = {
                ...record,
                "selecttobepinned": true
              };
              return tempRecord;
            }
          }
          return {
            ...record,
            "selecttobepinned": false
          };
        })
      };
    },
    showSelectGenre: function (state, action) {
      return {
        ...state,
        value: state.value.map((item, index) => item.genre == action.payload ? {
          ...item,
          "display": true
        } : {
          ...item,
          "display": false
        })
      };
    },
    resetShowGenre: function (state, action) {
      return {
        ...state,
        value: state.value.map(record => {
          return {
            ...record,
            "display": true
          };
        })
      };
    },
    saveMovieChangeDescription: function (state, action) {
      return {
        ...state,
        value: state.value.map(record => {
          if (action.payload.id === record.id) {
            return {
              ...record,
              "description": action.payload.description
            };
          }
          return record;
        })
      };
    },
    saveMovieChangeName: function (state, action) {
      return {
        ...state,
        value: state.value.map(record => {
          if (action.payload.id === record.id) {
            return {
              ...record,
              "movie name": action.payload["movie name"]
            };
          }
          return record;
        })
      };
    },
    saveMovieChangeGenre: function (state, action) {
      return {
        ...state,
        value: state.value.map(record => {
          if (action.payload.id === record.id) {
            return {
              ...record,
              "genre": action.payload.genre
            };
          }
          return record;
        })
      };
    },
    saveMovieChangeLeadActor: function (state, action) {
      return {
        ...state,
        value: state.value.map(record => {
          if (action.payload.id === record.id) {
            return {
              ...record,
              "lead actor": action.payload["lead actor"].split(",")
            };
          }
          return record;
        })
      };
    },
    saveMovieChangeRating: function (state, action) {
      return {
        ...state,
        value: state.value.map(record => {
          if (action.payload.id === record.id) {
            return {
              ...record,
              "rating": action.payload.rating
            };
          }
          return record;
        })
      };
    },
    saveMovieChangeLanguage: function (state, action) {
      return {
        ...state,
        value: state.value.map(record => {
          if (action.payload.id === record.id) {
            return {
              ...record,
              "language": action.payload.language
            };
          }
          return record;
        })
      };
    }
  }
});

// Use these to update the state in your component
export const {
  showSelectMovieForEdit,
  saveMovieChangeGenre,
  saveMovieChangeDescription,
  saveMovieChangeLeadActor,
  saveMovieChangeRating,
  saveMovieChangeLanguage,
  saveMovieChangeName,
  showSelectGenre,
  resetShowGenre,
  saveaddMovie,
  displayHideItem,
  showHideItem,
  deleteItem,
  showSelectedPinnedMovie
} = recordSlice.actions;

// This part goes into the store.
export default recordSlice.reducer;