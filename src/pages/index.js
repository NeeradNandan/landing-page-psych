import { CircleChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"
import { useForm } from "react-hook-form";

export default function Home() {
	const [ toggleIcon, setToggleIcon ] = useState(false);
	const [ openFAQ, setOpenFAQ ] = useState({});
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, touchedFields },
		reset,
		watch
	} = useForm({
		            mode: 'onBlur',
		            defaultValues: {
			            name: '',
			            email: '',
			            phone: '',
			            message: '',
			            contactTime: '',
			            contactMethod: ''
		            }
	            })
	
	const messageLength = watch('message')?.length || 0
	
	const onSubmit = async (data) => {
		try {
			// Your API call here
			await new Promise(resolve => setTimeout(resolve, 2000))
			console.log('Form data:', data)
			alert('Form submitted successfully!')
			reset()
		} catch (error) {
			alert('Error submitting form')
		}
	}
	
	const fees = {
		Individual: 200,
		Couple: 225,
	}
	
	/*const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(`Form Submitted: ${formData}`);
	}*/
	
	const toggleFAQItems = (id) => {
		setOpenFAQ(currentState => ({
			...currentState,
			[id]: !currentState[id]
		}));
	}
	
	const FAQData = [
		{
			id: 1,
			Q: 'Do you accept insurance?',
			A: 'No, but a superbill is provided for self-submission.'
		},
		{
			id: 2,
			Q: 'Are online sessions available?',
			A: 'Yes—all virtual sessions via Zoom.'
		},
		{
			id: 3,
			Q: 'What is your cancellation policy?',
			A: '24-hour notice required.'
		}
	];
	
	return (
		<div>
			<motion.section
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className='bg-[#f3f0e8] text-[#41413f]'
			>
				<header className='flex items-center justify-between box-border lg:py-[9.5vh] lg:px-[4.2vw] px-[6vw] h-[14vh]'>
					<div className='flex items-center lg:gap-2 lg:ml-0 ml-[2vw]'>
						{/* Geometric Logo */ }
						<svg width="50" height="60" viewBox="0 0 120 80" className='text-[#6b8e7f]'>
							{/* Outer rectangle */ }
							<rect x="2" y="2" width="116" height="100" fill="none" stroke="currentColor"
							      strokeWidth="2"/>
							
							{/* Diagonal lines */ }
							<line x1="2" y1="78" x2="40" y2="40" stroke="currentColor" strokeWidth="2"/>
							<line x1="40" y1="40" x2="2" y2="2" stroke="currentColor" strokeWidth="2"/>
							<line x1="40" y1="40" x2="78" y2="2" stroke="currentColor" strokeWidth="2"/>
							
							{/* Small circle */ }
							<circle cx="30" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
						</svg>
						
						{/* Text */ }
						<div className='ml-[1vw] mt-[2vw] lg:ml-0 lg:mt-0'>
							<h1 className='lg:text-2xl font-[500] lg:font-[400] font-["Freight_Display_Pro"] lg:tracking-[0.2px] text-xl lg:leading-8 text-[#2d4a3d]'>
								Serena Blake, Psy.D.
							</h1>
							<h2 className='lg:text-xl font-[500] text-xl lg:font-[400] font-["Freight_Display_Pro"] text-[#2d4a3d] -mt-1 lg:tracking-[0.2px]'>
								Psychological Services
							</h2>
						</div>
					</div>
						<button
							onClick={() => setToggleIcon(!toggleIcon)}
							className="right-4 z-60 lg:hidden mr-[5vw]"
							aria-label={toggleIcon ? "Close menu" : "Open menu"}
						>
							{/*<svg
								className="w-12 h-10"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 30 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="0.8"
									d={toggleIcon ? "M6 6l18 12" : "M3 5h24"}
									className="transition-all duration-300 ease-in-out"
								/>
							</svg>*/}
							{/*<svg
								className="w-12 h-10"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 30 24"
							>
								 Top line
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="0.8"
									d={toggleIcon ? "M7 7l16 10" : "M3 5h24"}
									className="transition-all duration-300"
								/>
								 Middle line
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="0.8"
									d="M3 12h24"
									className={`transition-all duration-300 ${
										toggleIcon ? 'opacity-0' : 'opacity-100'
									}`}
								/>
								 Bottom line
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="0.8"
									d={toggleIcon ? "M7 17l16-10" : "M3 19h24"}
									className="transition-all duration-300"
								/>
							</svg>*/}
							<div className="w-12 h-10 relative flex items-center justify-center">
								<div className="w-8 h-6 relative">
									{/* Top line */}
									<span
										className={`absolute h-[1px] w-full bg-current transform transition-all duration-400 ease-in-out ${
											toggleIcon ? 'rotate-[45deg] top-2.5' : 'rotate-0 top-0'
										}`}
									/>
									{/* Middle line */}
									<span
										className={`absolute h-[1px] w-full bg-current top-2.5 transition-all duration-400 ease-in-out ${
											toggleIcon ? 'opacity-0' : 'opacity-100'
										}`}
									/>
									{/* Bottom line */}
									<span
										className={`absolute h-[1px] w-full bg-current transform transition-all duration-400 ease-in-out ${
											toggleIcon ? '-rotate-[45deg] top-2.5' : 'rotate-0 top-5'
										}`}
									/>
								</div>
							</div>
						</button>
					<div
						className={`bg-[#f3f0e8] fixed top-0 right-0 h-full w-full z-40 lg:hidden transition-all duration-400 transform ${
							toggleIcon ? 'opacity-100 scale-100'
							             : 'opacity-0 scale-95 pointer-events-none'
						}`}
					>
						{/* Empty page with same background */}
					</div>
				</header>
				<div className='flex justify-center items-center box-content lg:px-[4vw] lg:pb-[6vh] px-[4vw] pb-[2vh]'>
					<div className='relative w-full'>
						<div className='hidden relative sm:block w-full'>
							<video
								className='w-full h-auto brightness-70'
								src='/video.mp4'
								autoPlay
								muted
								loop
								playisinline
							/>
						</div>
						<div className='relative sm:hidden w-full' style={{paddingBottom: '228%'}}>
							<video
								className='absolute inset-0 w-full h-full brightness-70 object-cover'
								src='/video.mp4'
								autoPlay
								muted
								loop
								playIsinline
							/>
						</div>
							<div className='absolute w-full inset-0 lg:py-[9.5vmax] py-[7vmax] h-[91vh] flex flex-col items-center'>
								<h1 className='text-white font-["Freight_Display_Pro"] font-semibold block text-center mb-[6vh] lg:my-[12px] text-5xl lg:text-7xl mt-[15vmax]'>
									Psychological Care for
								</h1>
								<h1 className='mx-auto text-white font-["Freight_Display_Pro"] text-5xl font-semibold mb-[vh] max-w-[80vw] text-center lg:text-7xl lg:mt-[3vh]'>
									Change, Insight and WellBeing
								</h1>
								<h1 className='text-white text-pretty font-["Freight_Display_Pro"] lg:text-2xl text-xl text-center mt-[4vh] w-[82vw] lg:pt-[2vh]'>
									Offering individual psychotherapy for adults via telehealth in Michigan and <span className='underline decoration-1 underline-offset-4'>most U.S. states</span> through PSYPACT participation
								</h1>
								<div className='font-["Freight_Display_Pro"] flex justify-center items-center lg:mt-[4vmax] mt-[3vmax]'>
									<button
										className='text-white bg-[#94b0b0] rounded-[50%/50%] lg:px-12 lg:py-6 cursor-pointer lg:w-[290px] lg:h-[100px] w-[210px] h-[60px]'
										onClick={() => null}
									>
										<div className='uppercase'>
											<span className='block tracking-wider font-[500]'>schedule a</span>
											<span className='block tracking-wider font-[500]'>consultation</span>
										</div>
										
									</button>
								</div>
							</div>
						</div>
					</div>
			</motion.section>
			<motion.section
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className='bg-white text-[#7e7e6b]'
			>
				<div className='hidden lg:flex pl-[16vmax] pr-[14vmax] py-[12vmax] w-full'>
					<div className='flex-1 basis-1'>
						<h2 className='text-4xl font-["Freight_Display_Pro"] font-bold mb-[2vw]'>
							About Dr. Serena Blake
						</h2>
						<div className='leading-9 text-[#7e7e6b] text-lg font-[300]'>
							Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
						</div>
					</div>
					<div className='flex-1 relative'>
						<Image
							src='/potrait.jpg'
							alt="About Me"
							width={500}
							height={500}
							loading='lazy'
							className='object-cover rounded-2xl h-[620px] ml-[8vw]'
						/>
					</div>
				</div>
				
				<div className='lg:hidden flex flex-col pl-[3vmax] pr-[3vmax] py-[9vh] w-full'>
					<div className='flex-1 basis-1'>
						<h2 className='text-3xl font-["Freight_Display_Pro"] tracking-tight font-bold mb-[4vh] '>
							About Dr. Serena Blake
						</h2>
						<div className='flex-1 relative mb-[5vh] max-w-[70vw] mx-auto'>
							<Image
								src='/potrait.jpg'
								alt="About Me"
								width={500}
								height={500}
								loading='lazy'
								className='object-cover rounded-2xl h-[340px]'
							/>
						</div>
						<div className='leading-8 text-[#7e7e6b] text-lg font-[300]'>
							Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
						</div>
					</div>
				</div>
				<hr
					className='mx-[4vw] mb-[4vmax] border-gray-400'
				/>
			</motion.section>
			<motion.section
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.1 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className='bg-[#f3f0e8] text-[#41413f]'
			>
				<div className='flex flex-col items-center pb-[6vh]'>
					<div className='font-["Freight_Display_Pro"] text-3xl max-w-[65vmax] font-[300]  pt-[4vmax] tracking-wide'>
						<div className='text-center'>
							Therapy can be a space where you invest in
						</div>
						<div className='max-w-[90vw] ml-[15vw] mb-[2vh]'>
							yourself—one of the
						</div>
						<div className='max-w-[90vw] ml-[7vw]'>
							highest forms of self-care.
						</div>
					</div>
					<div className='font-["Freight_Display_Pro"] text-xl text-center max-w-[90vw] font-[300] pb-[6vh] tracking-wide mt-[4vh] leading-8'>
						You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you don&apos;t have to face it alone. Therapy offers you the time and space to work toward wellness and peace.
					</div>
					<hr className='w-[91vw] mb-[10vh] border-gray-400' />
					<div className='font-["Freight_Display_Pro"] text-3xl font-[300]'>
						Areas of Focus
					</div>
					<div className='hidden h-full lg:flex flex-row gap-[9vw] mt-[14vh] font-["Freight_Display_Pro"] items-start justify-center w-full'>
						<div className='text-2xl flex flex-col items-center max-w-[25vw]'>
							<Image
								src='/anxiety.jpg'
								width={500}
								height={500}
								loading='lazy'
								className='object-cover w-[600px] h-[350px] rounded-[100%]'
								
							/>
							<div className='mt-[2vh] text-2xl text-center font-[300]'>
								Anxiety & Stress Management
							</div>
							<div className='text-base leading-7 text-center mt-[1.1vmax] font-[300] tracking-[0.1em]'>
								Life&apos;s pressures can feel overwhelming, leaving you caught in cycles of worry, tension, and exhaustion. I provide a compassionate space where you can learn practical tools to manage anxiety and stress effectively. Through evidence-based techniques including cognitive-behavioral strategies and mindfulness practices, we&apos;ll work together to help you regain control, develop healthy coping mechanisms, and build resilience for life&apos;s challenges.
							</div>
						</div>
						<div className='text-2xl flex flex-col max-w-[25vw] items-center'>
							<Image
								src='/couple.jpg'
								width={500}
								height={500}
								loading='lazy'
								className='rounded-[100%] object-cover w-[600px] h-[350px]'
							/>
							<div className='mt-[2vh] text-center font-[300]'>
								Relationship Counselling
							</div>
							<div className='text-base leading-7 text-center mt-[1.1vmax] font-[300] tracking-[0.1em]'>
								Relationships are at the heart of our well-being, yet they can also be sources of profound pain and confusion. Whether you&apos;re navigating communication breakdowns, trust issues, or simply feeling disconnected from your partner, I offer a safe, non-judgmental environment where both individuals and couples can explore their patterns, rebuild intimacy, and develop the skills needed for lasting, fulfilling connections.
							</div>
						</div>
						<div className='h-full text-2xl flex flex-col max-w-[25vmax] items-center'>
							<Image
								src='/trauma.jpg'
								width={500}
								height={500}
								loading='lazy'
								className='rounded-[100%] object-cover w-[600px] h-[350px]'
							/>
							<div className='mt-[2vh] text-center font-[300]'>
								Trauma Recovery
							</div>
							<div className='text-base leading-7 text-center mt-[1.1vmax] font-[300] tracking-[0.1em]'>
								Trauma can leave lasting imprints that affect every aspect of your life, from relationships to self-worth to daily functioning. I specialize in trauma-informed therapy that honors your unique healing journey. Using gentle, research-backed approaches, we&apos;ll work at your pace to process difficult experiences, reduce symptoms, and help you reclaim your sense of safety and empowerment in the world.
							</div>
						</div>
					</div>
					
					<div className='flex lg:hidden h-full flex-col gap-[9vw] mt-[14vh] font-["Freight_Display_Pro"] items-center justify-center w-full'>
						<div className='text-2xl flex flex-col items-center max-w-[80vw]'>
							<Image
								src='/anxiety.jpg'
								width={500}
								height={500}
								loading='lazy'
								className='object-cover w-[275px] h-[275px] rounded-[100%]'
							
							/>
							<div className='mt-[2vh] text-2xl text-center font-[300]'>
								Anxiety & Stress Management
							</div>
							<div className='text-base leading-7 text-center mt-[6vh] font-[300] tracking-wide'>
								Life&apos;s pressures can feel overwhelming, leaving you caught in cycles of worry, tension, and exhaustion. I provide a compassionate space where you can learn practical tools to manage anxiety and stress effectively. Through evidence-based techniques including cognitive-behavioral strategies and mindfulness practices, we&apos;ll work together to help you regain control, develop healthy coping mechanisms, and build resilience for life&apos;s challenges.
							</div>
						</div>
						<div className='text-2xl flex flex-col max-w-[80vw] items-center'>
							<Image
								src='/couple.jpg'
								width={500}
								height={500}
								loading='lazy'
								className='rounded-[100%] object-cover w-[275px] h-[275px]'
							/>
							<div className='mt-[2vh] text-center font-[300]'>
								Relationship Counselling
							</div>
							<div className='text-base leading-7 text-center mt-[6vh] font-[300] tracking-wide'>
								Relationships are at the heart of our well-being, yet they can also be sources of profound pain and confusion. Whether you&apos;re navigating communication breakdowns, trust issues, or simply feeling disconnected from your partner, I offer a safe, non-judgmental environment where both individuals and couples can explore their patterns, rebuild intimacy, and develop the skills needed for lasting, fulfilling connections.
							</div>
						</div>
						<div className='h-full text-2xl flex flex-col max-w-[80vw] items-center'>
							<Image
								src='/trauma.jpg'
								width={500}
								height={500}
								loading='lazy'
								className='rounded-[100%] object-cover w-[275px] h-[275px]'
							/>
							<div className='mt-[2vh] text-center font-[300]'>
								Trauma Recovery
							</div>
							<div className='text-base leading-7 text-center mt-[6vh] font-[300] tracking-wide'>
								Trauma can leave lasting imprints that affect every aspect of your life, from relationships to self-worth to daily functioning. I specialize in trauma-informed therapy that honors your unique healing journey. Using gentle, research-backed approaches, we&apos;ll work at your pace to process difficult experiences, reduce symptoms, and help you reclaim your sense of safety and empowerment in the world.
							</div>
						</div>
					</div>
					
				</div>
			</motion.section>
			<motion.section
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className='bg-[#99afb1] text-black p-[4vmax] font-["Freight_Display_Pro"]'
			>
				<div className='text-center font-[300] flex flex-col gap-y-[4vh] tracking-[0.1em]'>
					<div className='text-4xl'>
						Rate
					</div>
					<div className='text-xl'>
						Individual Session Fee - &#36;{fees.Individual}
					</div>
					<div className='text-xl'>
						Couple Session Fee - &#36;{fees.Couple}
					</div>
				</div>
			</motion.section>
			<motion.section
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className='bg-gray-100 text-[#949bA3] p-[4vmax]'
			>
				<div className='font-[300] flex gap-y-[3vmax] font-["Freight_Display_Pro"] justify-center items-center'>
					<div className='flex flex-col space-y-[2vmax] w-full max-w-2xl'>
						<div className='text-center lg:text-4xl text-3xl'>
							Frequently Asked Questions
						</div>
						<div className='lg:text-3xl text-2xl'>
							Therapy
						</div>
						<div className='w-full'>
							{
								FAQData.map(({id, Q, A}, index) => (
									<div key={id} className='lg:text-3xl text-2xl border-b'>
										<button
											onClick={() => toggleFAQItems(id)}
											className='text-left focus:outline-none group w-full py-2'
										>
											<div className='flex '>
												<div className='flex items-center'>
													<div className={`transform transition-transform duration-300 ${openFAQ[id] ? 'rotate-90' : ''}`}>
														<CircleChevronRight />
													</div>
													<div className='lg:text-3xl text-2xl'>
														{Q}
													</div>
												</div>
											</div>
										</button>
										<div className={`text-3xl w-full break-words overflow-hidden transition-all duration-300 ease-in-out ${
											openFAQ[id] ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0'
										}`}>
											{A}
										</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</motion.section>
			<motion.section
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className='bg-white text-[#41413f] p-[4vmax]'
			>
				<div className='font-[300] flex gap-y-[3vmax] font-["Freight_Display_Pro"] justify-center items-center'>
					<div className='flex flex-col space-y-[2vmax] w-full max-w-2xl bg-white border-2 border-gray-600 rounded-2xl justify-center items-center p-[2vmax] '>
						<div className='text-3xl text-center font-bold'>
							Get in Touch
						</div>
						<div className='text-xl text-center max-w-sm'>
							Simply fill out the brief fields below and Dr. Serene will be in
							touch with you soon, usually within one business day. This form is
							safe, private, and completely free.
						</div>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='space-y-4'
							noValidate
						>
							<div>
								<label htmlFor='name' className='block mb-1'>
									Name
								</label>
								<input
									id='name'
									type='text'
									placeholder='Name'
									{...register('name', {
										required: 'Name is required',
										minLength: {
											value: 2,
											message: 'Name must be at least 2 characters'
										},
										maxLength: {
											value: 50,
											message: 'Name must be less than 50 characters'
										},
										pattern: {
											value: /^[a-zA-Z\s]*$/,
											message: 'Name can only contain letters and spaces'
										}
									})}
									
									className={`w-full border-2 border-gray-400 rounded-lg px-3 py-2 ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-teal-700'}`}
								/>
								{errors.name && (
									<p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
								)}
							</div>
							<div>
								<label htmlFor='email' className='block mb-1'>
									Email
								</label>
								<input
									id='email'
									type='email'
									placeholder='you@example.com'
									{...register('email', {
										required: 'Email is required',
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'Invalid email address'
										}
									})}
									className={`w-full border-2 border-gray-400 rounded-lg px-3 py-2 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-teal-700'}`}
								/>
								{errors.email && (
									<p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
								)}
							</div>
							<div>
								<label htmlFor='phone' className='block mb-1'>
									Phone
								</label>
								<input
									id='phone'
									type='tel'
									placeholder='(555) 234-5678'
									{...register('phone', {
										pattern: {
											value: /^[(]?[0-9]{3}[)]?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/,
											message: 'Invalid phone number format'
										}
									})}
									className={`w-full border-2 border-gray-400 rounded-lg px-3 py-2 ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-600 focus:border-teal-700'}`}
								/>
								{errors.phone && (
									<p className="text-sm text-red-600">{errors.phone.message}</p>
								)}
							</div>
							<div>
								<label htmlFor='message' className='block mb-1'>
									Message
								</label>
								<textarea
									id='message'
									placeholder='How can I help you?'
									rows={4}
									{...register('message', {
										required: 'Message is required',
										minLength: {
											value: 10,
											message: 'Message must be at least 10 characters'
										},
										maxLength: {
											value: 500,
											message: 'Message must be less than 500 characters'
										}
									})}
									className={`w-full border-2 border-gray-400 rounded-lg px-3 py-2 ${errors.email
									                                                                   ? 'border-red-500 focus:border-red-500'
									                                                                   : 'border-gray-600 focus:border-teal-700'}`}
								/>
								{errors.message && (
									<p className="text-sm text-red-600">{errors.message.message}</p>
								)}
							</div>
							<div>
								<label htmlFor='contactTime' className='block mb-1'>
									Preferred Contact Time
								</label>
								<input
									id='contactTime'
									type='text'
									placeholder='e.g., Mornings, Afternoons, Evenings, Weekends'
									{...register('contactTime')}
									className='w-full border-2 border-gray-400 rounded-lg px-3 py-2'
								/>
								<p>
									Let us know when you&apos;re typically available for a call or consultation
								</p>
							</div>
							<div>
								<label htmlFor='contactMethod' className='block mb-1'>
									Preferred Contact Method
								</label>
								<div className='relative'>
									<select
										id='contactMethod'
										{...register('contactMethod', {
											required: 'Please select a contact method'
										})}
										className={`w-full border-2 border-gray-400 rounded-lg px-3 py-2 ${errors.contactMethod
										                                                                   ? 'border-red-500 focus:border-red-500'
										                                                                   : 'border-gray-600 focus:border-teal-700'}`}
									>
										<option value="">Select preferred method</option>
										<option value="phone">Phone</option>
										<option value="email">Email</option>
										<option value="text">Text Message</option>
									</select>
									{errors.contactMethod && (
										<p className="mt-1 text-sm text-red-600">{errors.contactMethod.message}</p>
									)}
								</div>
							</div>
							<button
								type='submit'
								disabled={isSubmitting}
								className={`w-full py-2 px-3 rounded-lg bg-teal-800 text-white ${
								isSubmitting
								? 'bg-gray-400 text-gray-200 cursor-not-allowed'
								: 'bg-teal-800 text-white hover:bg-teal-900 transform hover:scale-[1.02]'}`}
							>
								{isSubmitting ? (
									<span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
								) : 'Submit'}
							</button>
						</form>
					</div>
				</div>
			</motion.section>
			<footer className='tracking-wide px-[3vmax] py-[3vmax] lg:h-[70vh] h-[100vh] bg-[#f3f0e8] text-[#41413f] text-center font-[300] text-xl font-["Freight_Display_Pro"]'>
				<div className='lg:text-4xl text-3xl lg:mb-[6vh] mb-[5vh]'>
					Dr. Serena Blake, PsyD (Clinical Psychologist)
				</div>
				<div className='lg:text-xl text-lg underline decoration-1 underline-offset-4'>
					serena@blakepsychology.com
				</div>
				<div className='lg:text-xl text-lg mb-[4vh]'>
					<span>Phone: </span><span className='underline decoration-1 underline-offset-5'>(323) 555-0192</span>
				</div>
				<div className='mb-[2vh] text-lg lg:text-xl leading-4'>
					1287 Maplewood Drive, Los Angeles, CA 90026
				</div>
				<div className='text-base mb-[8vh]'>
					<span className='underline decoration-1 underline-offset-4 mr-3'><Link href='/home'>Home</Link></span>
					<span className='underline decoration-1 underline-offset-4 mr-3'><Link href='/privacy-policy'>Privacy Policy</Link></span>
					<span className='underline decoration-1 underline-offset-4'><Link href='/good-faith-estimate'>Good Faith Estimate</Link></span>
				</div>
				<div className='text-xl lg:mb-[8vh] mb-[6vh] underline decoration-1 underline-offset-4'>
					Client Portal
				</div>
				<div className='leading-7 w-full'>
					&#169; 2025 Serene Blake Psych.D. Psychological Services, PLLC. All Rights Reserved.
				</div>
			</footer>
		</div>
	)
}
