
import { useState } from 'react';
import {QuestionAnswer } from '../QuestionAnswer';

import S from './styles.module.css';
import { Button } from '../Button';


const QUESTIONS = [
    {
        id:1,
        question:'Qual é o meu nome?',
        answers:['Luis', 'Andre', 'Damaris', 'Ferreira'],
        correctAnswer:'Andre',
    },

    {
        id:2,
        question:'Qual é a minha idade?',
        answers:['16', '21', '20', '43'],
        correctAnswer:'21',
    },

    {
        id:3,
        question:'O que eu sou?',
        answers:['Mecanico', 'Desenvolvedor/Físico', 'Namorado da Damaris', 'Professor'],
        correctAnswer:'Desenvolvedor/Físico',
    },

    {
        id:4,
        question:'Quem é Damaris?',
        answers:['Namorada do André', 'Engenheira Civil', 'Estudante', 'Ajudante'],
        correctAnswer:'Engenheira Civil',
    },
]



export function Quiz (){
   
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [correctAnswerCount, setCorrectAnswersCount] = useState(0)
    const[IsCurrentQuestionAnswered,setIsCurrentQuestionAnswered] = useState(false)



    const handleAnswerQuestion = (event, question, answer) =>{ 
          if(IsCurrentQuestionAnswered){
            return
          }
        
        const isCorrectAnswer = question.correctAnswer === answer

        const resultClassName = isCorrectAnswer ? S.correct : S.incorrect
        event.currentTarget.classList.toggle(resultClassName)

        if(isCorrectAnswer){
            setCorrectAnswersCount(correctAnswerCount + 1)
        }
     
      setIsCurrentQuestionAnswered(true)

    }

    const handleNextQuestion = () => {
        if(currentQuestionIndex + 1 < QUESTIONS.length){
            setCurrentQuestionIndex(index => index + 1)
        }
        
        setIsCurrentQuestionAnswered(false)

    }

    const currentQuestion = QUESTIONS[currentQuestionIndex]

    return(
        <div className={S.container}>
            <div className={S.card}>
                <div className={S.quiz}>
                    <header className={S.quizHeader}>
                        <span className={S.questionCount}>Pergunta 1/3</span>
                        <p className={S.question}>
                            {currentQuestion.question}
                            </p>
                    </header>
                    <ul className={S.answers}>
                        {currentQuestion.answers.map(answer => (
                            <li key={answer}>
                                <QuestionAnswer 
                                answer = {answer} 
                                question = {currentQuestion} 
                                handleAnswerQuestion = {handleAnswerQuestion}

                                />
                           </li>
                        ))}
                    </ul>

                    <Button onClick={handleNextQuestion}>Proxima Pergunta</Button>

                </div>
            </div>
        </div>
        
    )
}