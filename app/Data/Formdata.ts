export enum LinkToType {
  "result",
  "question"
}

export interface FormAnswer {
  text: string;
  linksTo: {
    type: LinkToType;
    levelId?: number;
    questionId?: number;
    resultIndex?: number;
  }
}

export interface FormQuestion {
  id: number;
  question: string;
  answers: Array<FormAnswer>;
}

export interface Formlevel {
  levelId: number;
  questions: Array<FormQuestion>;
}

export const FlowData : Array<Formlevel> = [
    {
      levelId: 1,
      questions: [
        {
          id: 1,
          question: "Do you have a digital strategy in place?",
          answers: [
            {
              text: "Yes",
              linksTo: {
                type: LinkToType.question,
                levelId: 2,
                questionId: 2
              }
            },             
            {
              text: "No",
              linksTo: {
                type: LinkToType.question,
                levelId: 1,
                questionId: 1
              }
            }
          ]
        },
      ]
    },
    {
      levelId: 2,
      questions: [
        {
          id: 1, 
          question: "How do you address user experience?",
          answers: [
            {
              text: "By designing our services based on users' need to ensure satisfaction and user retention",
              linksTo: {
                type: LinkToType.question,
                levelId: 3,
                questionId: 1
              }
            },
            {
              text: "I don't really know",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 1
              }
            }
          ]
        },
        {
          id: 2,
          question: "In your organization, decisions related to digital projects are driven by:",
          answers: [
            {
              text: "Users' perspective",
              linksTo: {
                type: LinkToType.question,
                levelId: 4,
                questionId: 4
              }
            },
            {
              text: "Business' perspective",
              linksTo: {
                type: LinkToType.question,
                levelId: 3,
                questionId: 2
              }
            }
          ]
        },
      ]
    },
    {
      levelId: 3,
      questions: [
        {
          id: 1,
          question: "In your organisation, decisions related to digital projects are driven by:",
          answers: [
            {
              text: "User's perspective",
              linksTo: {
                type: LinkToType.question,
                levelId: 4,
                questionId: 1
              }
            },             
            {
              text: "Business' perspective",
              linksTo: {
                type: LinkToType.question,
                levelId: 4,
                questionId: 2
              }
            }
          ]
        },
        {
          id: 2,
          question: "How do you adress user experience:",
          answers: [
            {
              text: "I don't really know",
              linksTo: {
                type: LinkToType.question,
                levelId: 4,
                questionId: 3
              }
            },             
            {
              text: "By designing our services based on users' needs to ensure satisfaction and user retention",
              linksTo: {
                type: LinkToType.question,
                levelId: 4,
                questionId: 4
              }
            }
          ]
        },
      ]
    },
    {
      levelId: 4,
      questions: [
        {
          id: 1,
          question: "Are your users satisfied?",
          answers: [
            {
              text: "I don't know, we don't measure satisfaction",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 2
              }
            },             
            {
              text: "Yes, our KPI's are good",
              linksTo: {
                type: LinkToType.question,
                levelId: 5,
                questionId: 1
              }
            }
          ]
        }, {
          id: 2,
          question: "What are your current needs in regards to digital?",
          answers: [
            {
              text: "Create new services",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 1,
              }
            },
            {
              text: "Improve existing services",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 2,
              }
            },
            {
              text: "I don't know, and would be interested to discuss them",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 3
              }
            },
            {
              text: "I would be interested to explore what Augmented/Mixed/Virtual Reality can bring to my organization",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 4
              }
            }
          ]
        },
        {
          id: 3,
          question: "What are your current needs in regards to digital?",
          answers: [
            {
              text: "Create new services",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 1,
              }
            },
            {
              text: "Improve existing services",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 2,
              }
            },
            {
              text: "I don't know, and would be interested to discuss them",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 3
              }
            },
            {
              text: "I would be interested to explore what Augmented/Mixed/Virtual Reality can bring to my organization",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 4
              }
            }
          ]
        },
        {
          id: 4,
          question: "Are your users satisfied?",
          answers: [
            {
              text: "Yes, our KPI's are good",
              linksTo: {
                type: LinkToType.question,
                levelId: 5,
                questionId: 2
              }
            },
            {
              text: "I don't know, we don't measure satisfaction",
              linksTo: {
                type: LinkToType.question,
                levelId: 5,
                questionId: 2
              }
            }
          ]
        }
      ]
    }, 
    {
      levelId: 5,
      questions: [
        {
          id: 1,
          question: "Our applications are...",
          answers: [
            {
              text: "... easy to use",
              linksTo: {
                type: LinkToType.question,
                levelId: 6,
                questionId: 1
              }
            },
            {
              text: "... could be improved",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 2
              }
            }
          ]
        },
        {
          id: 2,
          question: "Our applications are...",
          answers: [
            {
              text: "... easy to use",
              linksTo: {
                type: LinkToType.question,
                levelId: 6,
                questionId: 1
              }
            },
            {
              text: "... could be improved",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 2
              }
            }
          ]
        }
      ]
    }, {
        levelId: 6,
        questions: [
          {
            id: 1,
            question: "Do you believe that the majority of your target audience is aware of your services?",
            answers: [
              {
                text: "There might be some that haven't been reached",
                linksTo: {
                  type: LinkToType.question,
                  levelId: 7,
                  questionId: 1
                }
              },
              {
                text: "Yes, we have communicated a lot",
                linksTo: {
                  type: LinkToType.question,
                  levelId: 7,
                  questionId: 1
                }
              }
            ]
          },
          {
            id: 2,
            question: "How do you take into account your users' needs when you want to create a new service?",
            answers: [
              {
                text: "We already know our users' needs",
                linksTo: {
                  type: LinkToType.result,
                  resultIndex: 1
                }
              },
              {
                text: "We are asking our users what their needs are",
                linksTo: {
                  type: LinkToType.question,
                  levelId: 7,
                  questionId: 2
                }
              }
            ]
          }
        ]
    }, {
      levelId: 7,
      questions: [
          {
            id: 1,
            question: "What are your current needs in regards to digital?",
            answers: [
              {
                text: "Create new services",
                linksTo: {
                  type: LinkToType.result,
                  resultIndex: 1,
                }
              },
              {
                text: "Improve existing services",
                linksTo: {
                  type: LinkToType.result,
                  resultIndex: 2,
                }
              },
              {
                text: "I don't know, and would be interested to discuss them",
                linksTo: {
                  type: LinkToType.result,
                  resultIndex: 3
                }
              },
              {
                text: "I would be interested to explore what Augmented/Mixed/Virtual Reality can bring to my organization",
                linksTo: {
                  type: LinkToType.result,
                  resultIndex: 4
                }
              }
            ]
          },
          {
            id: 2,
            question: "Do you believe that the majority of your target audience is aware of your services?",
            answers: [
              {
                text: "There might be some that haven't been reached",
                linksTo: {
                  type: LinkToType.result,
                  resultIndex: 5
                }
              },
              {
                text: "Yes, we have communicated a lot",
                linksTo: {
                  type: LinkToType.question,
                  levelId: 8,
                  questionId: 1
                }
              }
            ]
          }
      ]
    },
    {
      levelId: 8,
      questions: [
        {
          id: 1,
          question: "What are your current needs in regards to digital?",
          answers: [
            {
              text: "Create new services",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 1,
              }
            },
            {
              text: "Improve existing services",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 2,
              }
            },
            {
              text: "I don't know, and would be interested to discuss them",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 3
              }
            },
            {
              text: "I would be interested to explore what Augmented/Mixed/Virtual Reality can bring to my organization",
              linksTo: {
                type: LinkToType.result,
                resultIndex: 4
              }
            }
          ]
        }
      ]
    }
]