import { useState } from 'react'
import { Card, Radio, Button } from 'antd'

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "HyperText Markup Language",
      "HyperText Markdown Language",
      "HyperTool Multi Language"
    ],
    answer: "HyperText Markup Language"
  },
  {
    question: "What is the purpose of CSS?",
    options: [
      "Structure content",
      "Style content",
      "Add interactivity",
      "Connect to server"
    ],
    answer: "Style content"
  },
  {
    question: "Which language is used for web apps?",
    options: ["PHP", "Python", "JavaScript", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of these is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "Flask"],
    answer: "React"
  },
  {
    question: "Which tag is used to define a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<hyperlink>"],
    answer: "<a>"
  },
  {
    question: "Which HTTP method is used to retrieve data?",
    options: ["POST", "PUT", "GET", "DELETE"],
    answer: "GET"
  },
  {
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Application Program Interaction",
      "Advanced Programming Interface",
      "Application Protocol Interface"
    ],
    answer: "Application Programming Interface"
  },
  {
    question: "Which of these is a version control system?",
    options: ["Git", "Docker", "Node", "Jenkins"],
    answer: "Git"
  },
  {
    question: "What is the default port of HTTP?",
    options: ["21", "443", "80", "22"],
    answer: "80"
  },
  {
    question: "Which of these is used to style React components?",
    options: ["JSX", "CSS-in-JS", "SCSS", "All of the above"],
    answer: "All of the above"
  }
]

export default function Quiz({ onFinish }) {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState("")
  const [score, setScore] = useState(0)

  const next = () => {
    if (selected === questions[index].answer) setScore(score + 1)
    if (index + 1 < questions.length) {
      setIndex(index + 1)
      setSelected("")
    } else {
      onFinish(score + (selected === questions[index].answer ? 1 : 0))
    }
  }

  return (
    <Card className="max-w-xl mx-auto mt-6">
      <h2 className="text-xl font-semibold">{questions[index].question}</h2>
      <Radio.Group
        className="flex flex-col mt-4"
        onChange={(e) => setSelected(e.target.value)}
        value={selected}
      >
        {questions[index].options.map((option) => (
          <Radio key={option} value={option}>{option}</Radio>
        ))}
      </Radio.Group>
      <Button className="mt-4" type="primary" onClick={next}>
        {index + 1 === questions.length ? "Submit" : "Next"}
      </Button>
    </Card>
  )
}
