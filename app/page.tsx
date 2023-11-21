'use client';
import { useRouter } from 'next/navigation';
import { FieldArray, Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { useCompletion } from 'ai/react';

enum Type {
	MULTI,
	SINGLE,
}

interface Question {
	selectedMulti: string[];
	selectedSingle: string;
	multiSentence: string;
	question: JSX.Element;
	type: Type;
	answers: {
		label: string;
		value: string;
	}[];
}

export default function Home() {
	// Functionality hooks
	const router = useRouter();
	const [stepperCount, setStepperCount] = useState(0);
	const { completion, complete } = useCompletion({
		api: '/api/chat-completion',
	});

	const initialValues: { questions: Question[] } = {
		questions: [
			{
				selectedMulti: [] as string[],
				selectedSingle: '',
				question: (
					<>
						Question 1: Which{' '}
						<span className="gradient-underline">platforms</span> do you need to
						target (select all that apply)?
					</>
				),
				type: Type.MULTI,
				multiSentence:
					'The application should be able to function in the following environments:',
				answers: [
					{
						label: 'Mobile',
						value: 'mobile devices',
					},
					{
						label: 'Web Browser',
						value: 'web browsers',
					},
					{
						label: 'Desktop Application',
						value: 'desktops (natively)',
					},
				],
			},
			{
				selectedMulti: [],
				selectedSingle: '',
				question: (
					<>
						Question 2: What describes your{' '}
						<span className="gradient-underline">project goal</span> better
						(select one)?
					</>
				),
				type: Type.SINGLE,
				multiSentence: '',
				answers: [
					{
						label: 'Building a full-fledged production application.',
						value: 'I want to use something out of the ordinary',
					},
					{
						label: 'Building stateful user interaces.',
						value: 'I want to use something regular',
					},
				],
			},
			{
				selectedMulti: [],
				selectedSingle: '',
				question: (
					<>
						Question 3: How{' '}
						<span className="gradient-underline">experienced</span> is your team
						with JavaScript application development (Select one)?
					</>
				),
				type: Type.SINGLE,
				multiSentence: '',
				answers: [
					{
						label: 'Completelu Unexperienced',
						value:
							'The team is not at all experienced with Javascript application development',
					},
					{
						label: 'Somewhat Experienced',
						value:
							'The team is somewhat experienced in Javascript application development',
					},
					{
						label: 'Fairly Experienced',
						value:
							'The team is fairly experienced in Javascript application development',
					},
					{
						label: 'Expert',
						value:
							'The team is an expert in Javascript application development',
					},
				],
			},
			{
				selectedMulti: [],
				selectedSingle: '',
				question: (
					<>
						Question 4: How important is it that your framework has a thriving
						community & reliable documentation (Select one)?
					</>
				),
				type: Type.SINGLE,
				multiSentence: '',
				answers: [
					{
						label: 'Very Important',
						value:
							'It is very important that the chosen framework has a thriving community & reliable documentation',
					},
					{
						label: 'Somewhat Important',
						value:
							'It is somewhat important that the chosen framework has a thriving community & reliable documentation',
					},
					{
						label: 'Not Important',
						value:
							'The chosen framework does not have to have a thriving community or reliable documentation, we can figure things out on our own.',
					},
				],
			},
			{
				selectedMulti: [],
				selectedSingle: '',
				question: (
					<>
						Question 5: Will you be creating a{' '}
						<span className="gradient-underline">Single page application</span>?
					</>
				),
				multiSentence: '',
				type: Type.SINGLE,
				answers: [
					{
						label: 'Yes',
						value:
							'The intended use of the framework should be to create a Single Page Application',
					},
					{
						label: 'No',
						value:
							'We do not want a framework that is meant to create Single Page Applications, as this is not the intention to create an SPA.',
					},
					{
						label: 'Not sure',
						value:
							'We are not sure yet if the application will be a Single Page Application or not. Do not base your decision on that possibility.',
					},
				],
			},
			{
				selectedMulti: [],
				selectedSingle: '',
				question: (
					<>
						Question 6: How important is it that all required framework features
						are included <span className="gradient-underline">in-the-box,</span>{' '}
						as opposed to installed manually via a package manager?
					</>
				),
				type: Type.SINGLE,
				multiSentence: '',
				answers: [
					{
						label: 'Very important',
						value:
							'It is very important to us that all framework features are included in-the-box, as opposed to installed manually.',
					},
					{
						label: 'Somewhat important',
						value:
							'We would prefer all framework features to be included included in-the-box, as opposed to installed manually. This is not a dealbreaker though.',
					},
					{
						label: 'Not important',
						value:
							'We are fine with having to install some framework features manually through a package manager.',
					},
				],
			},
			{
				selectedMulti: [],
				selectedSingle: '',
				question: (
					<>
						Question 7: Which of the following languages or syntax styles are
						you familliar with?
					</>
				),
				multiSentence:
					'The team is familliar with the following syntax styles:',
				type: Type.MULTI,
				answers: [
					{
						label: 'Liquid/HTML-template syntax',
						value: 'Liquid/HTML-template syntax',
					},
					{
						label: 'JSX',
						value: 'JSX',
					},
					{
						label: 'TypeScript',
						value: 'TypeScript',
					},
				],
			},
		],
	};

	// 'mb-3 w-full h-20 rounded-3xl p-1 bg-gradient-to-r from-red-400 to-purple-400'
	// w-full px-4 h-full bg-slate-900 rounded-3xl flex items-center

	return (
		<>
			<main
				className={`flex min-h-screen text-white flex-col items-start p-12 z-10`}>
				{completion ? (
					<pre className="w-full">{completion}</pre>
				) : (
					<Formik
						initialValues={initialValues}
						onSubmit={async (values) => {
							let sendprompt = `
              We are looking to choose a frontend framework based on some requirements, defined by choices made in a form. Listed below are the results of that form, please recommend a fitting frontend framework and for each of the listed parameters, a short explanation on how you came to that conclusion. Here is the list, but don't explicitly mention the parameters and answer: 
              \n`;
							values.questions.forEach((item, index) => {
								if (item.type === Type.SINGLE) {
									sendprompt += `Requirement ${index + 1}: ${
										item.selectedSingle
									} \n`;
								} else {
									sendprompt += `Requirement ${index + 1}: ${
										item.multiSentence
									} ${item.selectedMulti.map((answer) => {
										return `${answer}`;
									})} \n`;
								}
							});

							complete(sendprompt);
						}}>
						{({ values }) => {
							return (
								<Form className="w-full">
									{values.questions.map((item, index) => {
										if (index === stepperCount)
											return (
												<div key={index} className="w-full">
													<p className="font-bold text-lg mb-5">
														{item.question}
													</p>
													<FieldArray name="questions">
														{({}) => {
															if (item.type === Type.MULTI)
																return (
																	<div role="group" className="w-full">
																		{item.answers.map((answer, answerIndex) => {
																			return (
																				<div
																					key={answerIndex}
																					className="w-full">
																					<label
																						className={`mb-3 flex w-full h-20 rounded-3xl p-1 bg-gradient-to-r ${
																							!item.selectedMulti.includes(
																								answer.value,
																							)
																								? 'from-red-400 to-purple-400'
																								: 'from-green-400 to-purple-400'
																						}`}>
																						<div className="w-full px-4 h-full bg-slate-900 rounded-3xl flex items-center">
																							<Field
																								className={'hidden'}
																								type="checkbox"
																								name={`questions.${index}.selectedMulti`}
																								value={answer.value}
																							/>
																							{answer.label}
																						</div>
																					</label>
																				</div>
																			);
																		})}
																	</div>
																);
															if (item.type === Type.SINGLE)
																return (
																	<div role="group" className="w-full">
																		{item.answers.map((answer, answerIndex) => {
																			return (
																				<div
																					key={answerIndex}
																					className="w-full">
																					<label
																						className={`mb-3 flex w-full h-20 rounded-3xl p-1 bg-gradient-to-r ${
																							item.selectedSingle !==
																							answer.value
																								? 'from-red-400 to-purple-400'
																								: 'from-green-400 to-purple-400'
																						}`}>
																						<div className="w-full px-4 h-full bg-slate-900 rounded-3xl flex items-center">
																							<Field
																								className={'hidden'}
																								type="radio"
																								name={`questions.${index}.selectedSingle`}
																								value={answer.value}
																							/>
																							{answer.label}
																						</div>
																					</label>
																				</div>
																			);
																		})}
																	</div>
																);
														}}
													</FieldArray>
												</div>
											);
									})}
									<div className="flex gap-x-5">
										{stepperCount !== 0 && (
											<button
												type="button"
												className=" text-white px-10 py-3 border-white border-2 rounded-2xl"
												onClick={(e) => {
													setStepperCount(stepperCount - 1);
												}}>
												Back
											</button>
										)}
										{stepperCount !== values.questions.length - 1 && (
											<button
												type="button"
												className=" text-white px-10 py-3 border-white border-2 rounded-2xl"
												onClick={(e) => {
													setStepperCount(stepperCount + 1);
												}}>
												Next
											</button>
										)}
										{stepperCount === values.questions.length - 1 && (
											<button
												type="submit"
												className=" text-white px-10 py-3 border-white border-2 rounded-2xl">
												Get my recommendation
											</button>
										)}
									</div>
								</Form>
							);
						}}
					</Formik>
				)}
			</main>
		</>
	);
}
