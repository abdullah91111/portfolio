export type Education = {
  school: string;
  degree: string;
  cgpa: string;
  dates: string;
  location: string;
  coursework: string[];
};

export const education: Education = {
  school: "Swinburne University of Technology", degree: "BSc Computer Science, Artificial Intelligence",
  cgpa: "3.25 / 4.0", dates: "2021 — 2024", location: "Sarawak, Malaysia", coursework: []
};
export type Certification = { name: string; issuer: string; date: string; note?: string; link?: string };
export const certifications: Certification[] = [];
