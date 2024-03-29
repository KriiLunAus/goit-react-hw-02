import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Description from './components/Description/Description.jsx';
import Notification from './components/Notification.jsx';
import { useState, useEffect } from 'react';1
import './App.css'


export default function App() {
    
    let [feedback, setFeedback] = useState({
            good: 0,
            neutral: 0,
            bad: 0
        });
    
   

   useEffect(() => {
        const savedFeedback = window.localStorage.getItem("feedback");
        if (savedFeedback) {
            setFeedback(JSON.parse(savedFeedback));
        }
    }, []);


    useEffect(() => {
        if (feedback !== null) {
            window.localStorage.setItem("feedback", JSON.stringify(feedback))
        }
    }, [feedback]);
    


    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0, 
            bad: 0
        })
    }

    const updateFeedback = (feedbackType) =>{
        setFeedback(feedbackBefore => ({
            ...feedbackBefore,
            [feedbackType]: feedbackBefore[feedbackType] + 1
        }));
    }

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad; 
    const positivePercent = totalFeedback !== 0 ? Math.trunc((feedback.good * 100) / totalFeedback) : 0;

    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback}
                totalFeedback={totalFeedback}
                resetFeedback={resetFeedback}
            />
            {totalFeedback !== 0
            ? <Feedback
            totalFeedback={totalFeedback}
            positivePercent={positivePercent}
            feedback={feedback} />
                : <Notification
             message="No feedback yet"   />}
            </>
    )
}
