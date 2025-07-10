import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

export default function ResultChart({ score, total }) {
  const data = [
    { name: 'Correct', value: score },
    { name: 'Wrong', value: total - score }
  ]
  const COLORS = ['#00C49F', '#FF8042']

  return (
    <div className="flex justify-center mt-6">
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" outerRadius={80} label>
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}
