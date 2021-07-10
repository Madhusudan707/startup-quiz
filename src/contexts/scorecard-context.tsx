import { useContext,createContext,useState } from "react";
import { ScoreCardContextType,ScoreCardProviderProp } from "../types/scorecard.types";

export const ScoreCardContext = createContext<ScoreCardContextType>({} as ScoreCardContextType);

export const ScoreCardProvider = ({children}:ScoreCardProviderProp):JSX.Element => {
    const [totalQuestion,setTotalQuestion] = useState(0)
    const [attempted,setAttempted] = useState(0)
    const [skipped,setSkipped] = useState(0)
    const [totalRight,setTotalRight] = useState(0)
    const [totalWrong,setTotalWrong] = useState(0)
    
    return (
      <ScoreCardContext.Provider value={{totalQuestion,setTotalQuestion,attempted,setAttempted,skipped,setSkipped,totalRight,setTotalRight,totalWrong,setTotalWrong }} >
        {children}
      </ScoreCardContext.Provider>
    );
  };
  export const useScore = () => useContext(ScoreCardContext);