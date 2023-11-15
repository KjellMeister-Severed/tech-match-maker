'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
	FlowData,
	FormAnswer,
	FormQuestion,
	LinkToType,
} from './Data/Formdata';
import { useRouter } from 'next/navigation';

export default function Home() {
	// Functionality hooks
	const router = useRouter();

	return (
		<main
			className={`flex min-h-screen bg-black text-white flex-col items-start p-12`}>
			<p className="font-bold text-lg mb-5">
				Question 1: How many rams have you{' '}
				<span className="gradient-underline">downloaded</span> (select all that
				apply) ?
			</p>
			<article className="mb-3 w-full h-20 rounded-3xl p-1 bg-gradient-to-r from-red-400 to-purple-400">
				<div className="w-full px-4 h-full bg-slate-900 rounded-3xl flex items-center">
					<p className="font-bold">Option 1: 1</p>
				</div>
			</article>
			<article className="mb-3 w-full h-20 rounded-3xl p-1 bg-gradient-to-r from-red-400 to-purple-400">
				<div className="w-full h-full bg-slate-900 rounded-3xl"></div>
			</article>{' '}
			<article className="mb-3 w-full h-20 rounded-3xl p-1 bg-gradient-to-r from-red-400 to-purple-400">
				<div className="w-full h-full bg-slate-900 rounded-3xl"></div>
			</article>{' '}
			<article className="mb-3 w-full h-20 rounded-3xl p-1 bg-gradient-to-r from-red-400 to-purple-400">
				<div className="w-full h-full bg-slate-900 rounded-3xl"></div>
			</article>
		</main>
	);
}
