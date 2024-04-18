import React from 'react'

const data = [
    {
        id: 1,
        title: "● Software developer with about 1 years of experience in software development, application with Reactjs/React Native, Nextjs."
    },
    {
        id: 2,
        title: "● Always learning new technology and knowledge."
    },
    {
        id: 3,
        title: "● Teamwork, open mind, carefulness"
    },
    {
        id: 4,
        title: "● Easy to adapt to changes & new environments"
    },
    {
        id: 5,
        title: "● I am looking for a stable job, good environment and I look forward have the opportunity to become a path of the company."
    }
]

const Objective = () => {
  return (
    <section className='my-8'>
        <h3 className='uppercase text-2xl text-center'>objective (Mục tiêu nghề nghiệp)</h3>
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
        <p>&#8658; Moreover I want to learn and develop myself to become a professional software developer.</p>
    </section>
  )
}

export default Objective