import Header from '../header';
import './src/questions.css'
import { Fragment, Component } from 'react';
import '../../json/2010.json'

class Questions extends Component {
  state = {
    questions: []
  };

  componentDidMount(){
    fetch('https://raw.githubusercontent.com/ryanzin10/if-simulador/master/src/json/2010.json')
    .then(response => response.json())
    .then(questions => this.setState({questions}))
  }

  render(){

    const { questions } = this.state;

    return(
      <Fragment>
        <Header/>
  
        <div class="questions">

          {questions.map(question => (
            <div class="question">
            <h4>{question.titulo}</h4>
            <div class="text-question">
              <p>{question.enunciado}</p>
            </div>
          </div>
          ))}
          
        </div>
        
      </Fragment>
    );
  }
}

export default Questions;