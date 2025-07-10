import { useEffect, useState } from 'react'

export default function Timer({ duration, onTimeout }) {
  const [time, setTime] = useState(duration)

  useEffect(() => {
    if (time === 0) {
      onTimeout()
      return
    }
    const interval = setInterval(() => setTime(t => t - 1), 1000)
    return () => clearInterval(interval)
  }, [time])

  return (
    <div className="text-center text-red-500 font-bold text-xl">
      Time Left: {time}s
    </div>
  )
}
