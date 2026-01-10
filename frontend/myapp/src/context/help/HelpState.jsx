import HelpContext from "./HelpContext";


export default function HelpState({ children }) {
  const value = {
    // Define any state or functions you want to provide to the context
  };

  return (
    <HelpState.Provider value={value}>
      {children}
    </HelpState.Provider>
  );
}