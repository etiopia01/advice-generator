import { useState, useEffect, Fragment } from 'react'

const random_advice_url = 'https://api.adviceslip.com/advice'

export default function AdviceGenerator() {
	const [advice, setAdvice] = useState({ id: '', advice: '' })
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		fetchAdvice()
	}, [])

	async function fetchAdvice() {
		setIsLoading(true)
		const response = await fetch(random_advice_url)
		const jsonRes = await response.json()
		const randomAdvice = jsonRes.slip
		setAdvice(randomAdvice)
		setIsLoading(false)
	}
	return (
		<div className='advice-gen'>
			{isLoading ? (
				<p className='loading'>Loading...</p>
			) : (
				<Fragment>
					<p className='id'>ADVICE #{advice.id}</p>
					<h1 className='advice'>"{advice.advice}"</h1>
				</Fragment>
			)}
			{/* 
			{!isLoading && <p className='id'>ADVICE #{advice.id}</p>}
			{!isLoading && <h1 className='advice'>"{advice.advice}"</h1>}
			{isLoading && <p className='loading'>Loading...</p>} */}
			<img className='divider' src='./pattern-divider-desktop.svg' alt='' />
			<button onClick={fetchAdvice}>
				<img src='./icon-dice.svg' alt='' />
			</button>
		</div>
	)
}
