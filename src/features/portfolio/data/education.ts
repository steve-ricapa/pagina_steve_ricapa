import type { Experience } from "../types/experiences"

export const EDUCATION: Experience[] = [
  {
    id: "utec",
    companyName: "UTEC — Universidad de Ingeniería y Tecnología",
    positions: [
      {
        id: "data-science",
        title: "Ciencia de Datos",
        employmentPeriod: { start: "2021", current: true },
        icon: "education",
        skills: [
          "Data Science",
          "Machine Learning",
          "Computer Vision",
          "Cloud Computing",
          "Software Engineering",
          "Data Analytics",
        ],
      },
    ],
  },
]
