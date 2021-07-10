export type ScoreCardContextType = {
 
    totalQuestion:number
    setTotalQuestion:React.Dispatch<React.SetStateAction<number>>
    attempted:number
    setAttempted:React.Dispatch<React.SetStateAction<number>>
    skipped:number
    setSkipped:React.Dispatch<React.SetStateAction<number>>
    totalRight:number
    setTotalRight:React.Dispatch<React.SetStateAction<number>>
    totalWrong:number
    setTotalWrong:React.Dispatch<React.SetStateAction<number>>
 
};

export type ScoreCardProviderProp = {
  children: JSX.Element;
};
