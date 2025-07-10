// pages/index.js

import { useState, useEffect } from 'react';
import { Button, Card, Progress, Radio, Space, Statistic, Row, Col, Divider } from 'antd';
import { Pie } from '@ant-design/charts';
import Head from 'next/head';

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const questions = [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Markup Language",
        "HyperText Markup Language",
        "HighText Machine Language",
        "HyperText and Links Markup Language"
      ],
      correctAnswer: "HyperText Markup Language"
    },
    {
      id: 2,
      question: "Which language is primarily used for adding interactivity to web pages?",
      options: ["HTML", "CSS", "JavaScript", "Python"],
      correctAnswer: "JavaScript"
    },
    {
      id: 3,
      question: "Which of the following is a version control system?",
      options: ["Docker", "Git", "Jenkins", "AWS"],
      correctAnswer: "Git"
    },
    {
      id: 4,
      question: "What is the correct HTML tag for inserting a line break?",
      options: ["<break>", "<br>", "<lb>", "<line>"],
      correctAnswer: "<br>"
    },
    {
      id: 5,
      question: "Which HTTP status code means 'Not Found'?",
      options: ["200", "403", "404", "500"],
      correctAnswer: "404"
    }
  ];

  useEffect(() => {
    if (timeLeft > 0 && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizCompleted) {
      setQuizCompleted(true);
    }
  }, [timeLeft, quizCompleted]);

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnsweredQuestions([
      ...answeredQuestions,
      {
        questionId: questions[currentQuestion].id,
        question: questions[currentQuestion].question,
        selectedAnswer,
        correctAnswer: questions[currentQuestion].correctAnswer,
        isCorrect
      }
    ]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(60);
    setQuizCompleted(false);
    setAnsweredQuestions([]);
  };

  const chartData = [
    { type: 'Correct', value: score },
    { type: 'Incorrect', value: questions.length - score },
  ];

  const config = {
    data: chartData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [{ type: 'element-active' }],
    colors: ['#52c41a', '#ff4d4f'],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Quiz App</title>
        <meta name="description" content="Tech Quiz Application" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">🧠 Tech Quiz App</h1>

        {!quizCompleted ? (
          <Card className="max-w-2xl mx-auto shadow-lg">
            <div className="flex justify-between mb-6">
              <Statistic title="Score" value={score} />
              <Statistic title="Question" value={`${currentQuestion + 1}/${questions.length}`} />
              <Statistic
                title="Time Left"
                value={timeLeft}
                suffix="sec"
                valueStyle={timeLeft <= 10 ? { color: '#ff4d4f' } : {}}
              />
            </div>

            <Progress percent={((currentQuestion + 1) / questions.length) * 100} showInfo={false} />

            <Divider />

            <h2 className="text-xl font-semibold mb-6">{questions[currentQuestion].question}</h2>

            <Radio.Group onChange={(e) => handleAnswerSelect(e.target.value)} value={selectedAnswer}>
              <Space direction="vertical" className="w-full">
                {questions[currentQuestion].options.map((option, index) => (
                  <Radio key={index} value={option}>
                    {option}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>

            <div className="mt-8 flex justify-end">
              <Button
                type="primary"
                onClick={handleNextQuestion}
                disabled={!selectedAnswer}
              >
                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="max-w-4xl mx-auto shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Quiz Results</h2>

            <Row gutter={[16, 16]} className="mb-8">
              <Col xs={24} sm={12}>
                <Card>
                  <Statistic
                    title="Your Score"
                    value={score}
                    suffix={`/ ${questions.length}`}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card>
                  <Statistic
                    title="Percentage"
                    value={(score / questions.length) * 100}
                    suffix="%"
                    precision={2}
                  />
                </Card>
              </Col>
            </Row>

            <div className="h-64 mb-8">
              <Pie {...config} />
            </div>

            <div className="flex justify-center">
              <Button type="primary" size="large" onClick={restartQuiz}>
                Restart Quiz
              </Button>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
};

export default QuizApp;
