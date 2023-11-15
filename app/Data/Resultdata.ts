export const getResultData = (id: number) => {
  return FormResultData.find(item => item.resultId === id)
}

export interface Contact{
  name: string;
  email: string;
}

export interface Result {
  resultId: number;
  title: string;
  descriptions: Array<string> // Item in array per paragraph
  references: Array<number>,
  contact: Contact;
}

export const FormResultData : Array<Result> = [
  {
    resultId: 1,
    title: "XR", 
    descriptions: ["You could use extended reality.", "Let's have a workshop to discuss how Augmented/Virtual/Mixed reality can be relevant to your organization. We could then develop a prototype or a Proof-of-Concept."],
    references: [],
    contact: {
      name: "Karel Niemegeers",
      email: "kniemegeers@deloitte.com"
    }
  },
  {
    resultId: 2,
    title: "Innovation and Strategy",
    descriptions: ["Let's have a workshop to discuss how to adress your challenges in regards to digital: for instance, how to get your ambitions transformed  in an actionable roadmap? Or how to get organized internally to implement it? Or what could be your new services or product?"],
    references: [],
    contact: {
      name: "Karel Niemegeers",
      email: "kniemegeers@deloitte.com"
    }
  },
  {
    resultId: 3,
    title: "From idea to prototype",
    descriptions: ["Are you struggling to get your ideas   (of new services, improvements of user experience, etc.) transformed into a solution?", "Let's discuss how we usually help our clients understand their customers and their expectations, design quickly a prototype that is tested, then build the MVP and the final application."],
    references: [],
    contact: {
      name: "Karel Niemegeers",
      email: "kniemegeers@deloitte.com"
    }
  },
  {
    resultId: 4,
    title: "Services in communication",
    descriptions: ["Do you want to increase the adoption of your services or products?", "Let's discuss how we help clients like you define the communication plan, to reach out to your audience and deliver the right message."],
    references: [],
    contact: {
      name: "Karel Niemegeers",
      email: "kniemegeers@deloitte.com"
    }
  },
  {
    resultId: 5,
    title: "Factory services and incremental innovation",
    descriptions: ["Are you struggling to get your solutions or user experience evolving frequently?", "Let's have a workshop to discuss how we manage incremental evolution, based on client needs and opportunities offered by latest technological changes"],
    references: [],
    contact: {
      name: "Karel Niemegeers",
      email: "kniemegeers@deloitte.com"
    }
  }
]