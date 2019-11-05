import  React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({onClick, text}) => {

    return (
        <button onClick={onClick} >  {text}</button>
    )
}

// const Stat = ({good, bad, neutral}) => {
//     if(good === 0 && bad === 0 && neutral === 0 ) {
//         return (
//             <p>No feedback given</p>
//         )
//     }
//     return (
//         <>

//         <table>
            
//                 <tr>
//                     <td>Good</td>
//                     <td>{good}</td>
//                 </tr>
//                 <tr>
//                     <td>Bad</td>
//                     <td>{bad}</td>
//                 </tr>
//                 <tr>
//                     <td>Neutral</td>
//                     <td>{neutral}</td>
//                 </tr>
            
//         </table>
//         </>
//     )
// }
const Statistic = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({good, bad, neutral}) => {
        if(good === 0 && bad === 0 && neutral === 0 ) {
            return (
                <p>No feedback given</p>
            )
        }
        let feedbackSum = good + bad + neutral;
        return (
            <table>
                <thead>

                </thead>
                <tbody>
                <Statistic text="Good" value={good} />
                <Statistic text="Bad" value={bad} />
                <Statistic text="Neutral" value={neutral} />
                <Statistic text="All" value={feedbackSum} />
                <Statistic text="Average" value={(good - bad)/feedbackSum} />
                <Statistic text="Positive" value={(good*100/feedbackSum) + '%'} />
                </tbody>
            </table>
        )
}

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const setToGood = value => setGood(value);
    const setToBad = value => setBad(value);
    const setToNeutral = value => setNeutral(value);

    return (
        <div>
            <h1>Give feedback</h1>
            <Button 
                onClick={() => setToGood(good + 1)}
                text="good" 
            />
            <Button 
                onClick={() => setToBad(bad + 1)} 
                text="bad"
            />
            <Button
                onClick={() => setToNeutral(neutral + 1)} 
                text="neutral"
            />
            <h1>Statistics</h1>
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

