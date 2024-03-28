
const Feedback = ({ feedback,totalFeedback,positivePercent }) => {
   
    return (
         <>
        <p>Good:{ feedback.good}</p>
        <p>Neutral:{ feedback.neutral }</p>
        <p>Bad:{ feedback.bad }</p>
        <p>Total:{ totalFeedback }</p>
        <p>Positive:{ positivePercent }%</p>
            
        </>
        )
}


export default Feedback;