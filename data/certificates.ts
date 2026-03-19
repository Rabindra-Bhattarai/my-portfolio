export type Certificate = {
  platform: string
  name: string
  skill: string
  proficiency: number
  status: 'completed' | 'in-progress'
}

export const certificates: Certificate[] = [
  {
    platform: 'DataCamp',
    name: 'Introduction to Python',
    skill: 'Python · Data Foundations',
    proficiency: 95,
    status: 'completed',
  },
  {
    platform: 'DataCamp',
    name: 'Intermediate Python',
    skill: 'Python · Data Structures · OOP',
    proficiency: 90,
    status: 'completed',
  },
  {
    platform: 'DataCamp',
    name: 'Introduction to SQL',
    skill: 'SQL · Data Querying · Joins',
    proficiency: 88,
    status: 'completed',
  },
  {
    platform: 'DataCamp',
    name: 'Introduction to R',
    skill: 'R · Statistical Computing',
    proficiency: 82,
    status: 'completed',
  },
  {
    platform: 'DataCamp',
    name: 'Data Manipulation with pandas',
    skill: 'Python · pandas · Data Wrangling',
    proficiency: 86,
    status: 'completed',
  },
  {
    platform: 'Academic',
    name: 'Hospital Dashboard Thesis',
    skill: 'Data Visualization · Optimization · Research',
    proficiency: 65,
    status: 'in-progress',
  },
]