import { certification } from "../lib/certification-catalog"

const courses = [
  ["Fundamentos de Bases de Datos", "2022-01"],
  ["Pensamiento computacional con Python"],
  [
    "Cálculo diferencial para Data Science e Inteligencia Artificial",
    "2022-01",
  ],
  ["Redes Sociales para Empresas"],
  ["Introducción al pensamiento Probabilístico"],
  ["Álgebra"],
  ["Basic Python", "2021-03"],
  ["Cálculo Diferencial"],
  ["Negocios Online"],
  ["Begin to sell in Internet"],
  ["POO y algoritmos en python"],
  ["Lenguaje y Notación Matematica"],
  ["Análisis de negocios para ciencia de datos"],
  ["Física Mecánica Estática"],
  ["Fundamentos de Cálculo"],
  ["Funciones Matemáticas para Data Science e Inteligencia Artificial"],
  ["Creación de blogs con Wordpress"],
  ["Astrobiología"],
  ["Matemáticas para Física"],
  ["Glosario de Términos de diseño"],
  ["Ciencias"],
  ["Data Science y Inteligencia Artificial"],
  ["Estadística Computacional con Python"],
] as const

export const PLATZI_CERTIFICATIONS = courses.map(([title, issueDate], index) =>
  certification({
    id: `platzi-${String(index + 1).padStart(2, "0")}`,
    title,
    issuer: "Platzi",
    category: "training",
    issueDate: issueDate ?? null,
    logo: "/brand-icons/platzi.svg",
    isPublic: true,
    source: "LinkedIn inventory supplied by Steve Ricapa",
  })
)
