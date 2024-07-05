"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Image from "next/image";
// import { questions } from "@/data/questions";
import { easyQuestions } from "@/data/easyQuestions";
import { mediumQuestions } from "@/data/mediumQuestions";
import { hardQuestions } from "@/data/hardQuestions";

const Question = () => {
  const [difficulty, setDifficulty] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [key, setKey] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  // const handleStartQuiz = (selectedDifficulty) => {
  //   setDifficulty(selectedDifficulty);
  //   setIsPlaying(true);
  //   setQuestionIndex(0);
  //   setScore(0);
  //   setShowResult(false);
  //   setKey((prevKey) => prevKey + 1); // Reset the timer
  //   setAnswers([]);
  // };

  const getRandomQuestions = (difficulty) => {
    let questionPool = [];

    switch (difficulty) {
      case "easy":
        questionPool = easyQuestions;
        break;
      case "medium":
        questionPool = mediumQuestions;
        break;
      case "hard":
        questionPool = hardQuestions;
        break;
      default:
        return [];
    }

    // Shuffle questions to get a random order
    const shuffledQuestions = questionPool.sort(() => Math.random() - 0.5);

    // Select first 10 questions (or fewer if there are fewer than 10 questions available)
    return shuffledQuestions.slice(0, 10);
  };

  const handleStartQuiz = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setIsPlaying(true);
    setQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setKey((prevKey) => prevKey + 1); // Reset the timer
    setAnswers([]);

    // Get 10 random questions based on selected difficulty
    const randomQuestions = getRandomQuestions(selectedDifficulty);
    setQuestions(randomQuestions);
  };

  const handleAnswer = (option) => {
    const correctAnswer = questions[questionIndex].answer;
    const isCorrect = option === correctAnswer;
    setAnswers([
      ...answers,
      {
        question: questions[questionIndex].question,
        selected: option,
        correct: correctAnswer,
        isCorrect,
      },
    ]);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setKey((prevKey) => prevKey + 1); // Reset the timer for the next question
    } else {
      setShowResult(true);
    }
  };

  const handleTimeUp = () => {
    const correctAnswer = questions[questionIndex].answer;
    setAnswers([
      ...answers,
      {
        question: questions[questionIndex].question,
        selected: null,
        correct: correctAnswer,
        isCorrect: false,
      },
    ]);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setKey((prevKey) => prevKey + 1); // Reset the timer for the next question
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="w-2/3 flex items-center justify-center m-auto mt-11 mb-5 ctnQuestion">
      {!isPlaying ? (
        <div>
          <Card className="flex">
            <div className="w-3/4">
              <Image
                src="/image.jpg"
                alt="Image"
                width={852}
                height={388}
                priority
              />
            </div>
            <div className="flex justify-center mx-auto items-center">
              <div>
                <CardHeader>
                  <h2 className="font-bold text-5xl mb-5 emailWelcome ">
                    Start Quiz
                  </h2>
                  <p>
                    Welcome to the MusIQ Quiz! Select a difficulty level below
                    to start the quiz.
                  </p>
                </CardHeader>
                <CardContent className="flex justify-between">
                  <Button
                    onClick={() => handleStartQuiz("easy")}
                    className="mr-4 w-28"
                  >
                    Easy
                  </Button>
                  <Button
                    onClick={() => handleStartQuiz("medium")}
                    className="mr-4 w-28"
                  >
                    Medium
                  </Button>
                  <Button
                    onClick={() => handleStartQuiz("hard")}
                    className="w-28"
                  >
                    Hard
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      ) : showResult ? (
        <Card className="shadow-none border-none">
          <CardHeader>
            <div className="flex justify-between">
              <h2 className="font-bold">MusIQ</h2>
              <h2 className="font-bold">Your Score: {score} / 10</h2>
              <h2 className="font-bold">
                Difficulty: <span className="capitalize">{difficulty}</span>
              </h2>
            </div>
          </CardHeader>
          <CardContent>
            <table className="min-w-full bg-white border border-gray-200 rounded-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Question
                  </th>
                  <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Your Answer
                  </th>
                  <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Correct Answer
                  </th>
                </tr>
              </thead>
              <tbody>
                {answers.map((answer, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-4 py-2">{answer.question}</td>
                    <td className="px-4 py-2">
                      <span
                        className={
                          answer.isCorrect
                            ? "text-green-600 font-semibold"
                            : "text-red-600 font-semibold"
                        }
                      >
                        {answer.selected || "No Answer"}
                      </span>
                    </td>
                    <td className="px-4 py-2">{answer.correct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
          <CardFooter>
            <Button onClick={() => setIsPlaying(false)} className="button">
              Play Again
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card className="shadow-none border-none">
          <CardHeader>
            <div className="flex justify-between">
              <h2 className="font-bold items-center justify-center flex text-center">
                MusIQ
              </h2>
              <div className="flex">
                <span className="font-bold items-center justify-center flex text-center">
                  Q{questionIndex + 1}:
                </span>
                <h2 className="items-center justify-center flex text-center ml-1">
                  {questions[questionIndex].question}
                </h2>
              </div>

              <CountdownCircleTimer
                key={key}
                isPlaying
                duration={10}
                size={45}
                strokeWidth={4}
                colors={["#4a148c", "#ff6d00", "#4a148c", "#ff6d00"]}
                colorsTime={[10, 6, 3, 0]}
                onComplete={handleTimeUp}
              >
                {({ remainingTime }) => (
                  <div className="text-center">{remainingTime}</div>
                )}
              </CountdownCircleTimer>
            </div>
          </CardHeader>
          <CardContent>
            <div className="timer"></div>
            {/* <div>
              <Image
                src={questions[questionIndex].imageUrl}
                alt="Question"
                className="border rounded-xl contain"
                width={964}
                height={542}
              />
            </div> */}

            <div className="w-full h-[550px] overflow-hidden relative">
              <Image
                src={questions[questionIndex].imageUrl}
                alt="Question"
                className="border rounded-xl object-cover h-full"
                width={950}
                height={750}
                priority
              />
            </div>
            {questions[questionIndex].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full mt-4"
                variant="outline"
              >
                {option}
              </Button>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Question;
