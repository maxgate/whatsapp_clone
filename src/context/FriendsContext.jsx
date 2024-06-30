import propTypes from "prop-types";
import { createContext, useContext, useReducer } from "react";

export const FriendsContext = createContext();

const intitialState = {
  status: "loading",
  isOpen: false,
  profile: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "open":
      return { ...state, isOpen: true, status: "ready" };

    case "profile":
      return { ...state, profile: action.payload, status: "profile" };

    default:
      throw new Error("Unkown action type");
  }
}

function FriendsProvider({ children }) {
  const [{ isOpen, profile, error }, dispatch,] = useReducer(
    reducer,
    intitialState
  );

  return (
    <FriendsContext.Provider
      value={{
        isOpen,
        profile,
        status,
        error,
        dispatch,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
}

function useFriends() {
  const context = useContext(FriendsContext);
  if (context === undefined)
    throw new Error("");
}

FriendsProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export { FriendsProvider, useFriends };
