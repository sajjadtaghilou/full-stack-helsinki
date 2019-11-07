import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]; 

    const Button = ({onClick, text}) => {
        return (
            <button onClick={onClick}>{text}</button>
        )
    }
    const Best = ({anecdotes, anecRate}) => {
        //const rateList =  anecdotes.map((value, i)=>{})
        
        let anecList = [];
        for (const key in anecRate) {
            
            //console.log(typeof )
            if (anecRate.hasOwnProperty(key)) {
               anecList = anecList.concat({
                    votes: anecRate[key],
                    text: anecdotes[parseFloat(key)]
                });
            }
        }
        anecList.forEach((elem)=> console.log(elem.votes, elem.text));
        anecList.sort((a, b) => b.votes -a.votes)
        console.log(anecList);
        if (anecList[0].votes === 0) {
            return (
                <p>There is no votes!</p>
            )
        }
        return (
            <p>{anecList[0].text} votes: {anecList[0].votes}</p>
            
        )
    }

    const App = (props) => {
        const [selected, setSelected] = useState(0);
//        const [anecRate, setAnecRate] = useState(new Array(6+1).join('0').split('').map(parseFloat));
        const [anecRate, setAnecRate] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0});

        const getRandomArrIndex = () => {
            return Math.floor(Math.random() * Math.floor(6))
        }

        const setToSelected = () => setSelected(getRandomArrIndex());
        const setToAnecRate = (index) => {
            const newAnecRate = {...anecRate};
            newAnecRate[index] += 1;
            setAnecRate(newAnecRate);
        }
        return (
            <div>
                <p>{props.anecdotes[selected]}</p>
                <Button onClick={() => setToSelected() } text="Another anec"/>
                <Button onClick={() => setToAnecRate(selected)} text="vote"/>
                
                <Best anecdotes={anecdotes} anecRate={anecRate}/>
            </div>
        )
    }

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
