

export default function Home() {
	return (
		<div>
			<section className='bg-[#f3f0e8] text-[#41413f]'>
				<header className='block box-border py-[3vw] px-[4vw]'>
					{/* Logo */ }
					<div className='flex items-center gap-4'>
						{/* Geometric Logo */ }
						<svg width="50" height="40" viewBox="0 0 120 80" className='text-[#6b8e7f]'>
							{/* Outer rectangle */ }
							<rect x="2" y="2" width="116" height="76" fill="none" stroke="currentColor"
							      strokeWidth="2"/>
							
							{/* Diagonal lines */ }
							<line x1="2" y1="78" x2="40" y2="40" stroke="currentColor" strokeWidth="2"/>
							<line x1="40" y1="40" x2="2" y2="2" stroke="currentColor" strokeWidth="2"/>
							<line x1="40" y1="40" x2="78" y2="2" stroke="currentColor" strokeWidth="2"/>
							
							{/* Small circle */ }
							<circle cx="30" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
						</svg>
						
						{/* Text */ }
						<div>
							<h1 className='text-xl font-serif text-[#2d4a3d]'>
								Dr. Serena Blake, Psy.D.
							</h1>
							<h2 className='text-xl font-serif text-[#2d4a3d] -mt-1'>
								Psychological Services
							</h2>
						</div>
					</div>
				</header>
				<div className='flex justify-center items-center box-content px-[4vw] pb-[4vw]'>
					<video
						src='/video.mp4'
						autoPlay
						muted
						loop
						playIsinline
					/>
					<h1 className='absolute text-white font-sans text-6xl  '>
						Psychological Services
					</h1>
				</div>
			</section>
			<section>About</section>
		</div>
	)
}
