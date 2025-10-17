import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

    return (
        <div className="min-h-dvh flex flex-col bg-white text-slate-800">
            {/* Hero */}
            <header className="relative isolate">
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-white" />
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
                    <div className="flex items-center gap-2">
                        <div className="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">FZ</div>
                        <span className="text-lg font-semibold tracking-tight">FaziLabs</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm">
                        <a className="hover:text-indigo-600 transition-colors" href="#services">Services</a>
                        <a className="hover:text-indigo-600 transition-colors" href="#why">Why Us</a>
                        <a className="hover:text-indigo-600 transition-colors" href="#contact">Contact</a>
                        <a className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors" href="#download">Get the App</a>
                    </div>
                </nav>

                <div className="mx-auto max-w-7xl px-6 pt-6 pb-20 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:px-8 lg:pt-12 lg:pb-28">
                    <div className="max-w-2xl lg:col-span-7">
                        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">Fitness reimagined</span>
                        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                            Train smarter. Track better. Feel stronger.
                        </h1>
                        <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                            FaziLabs Fitness gives you personalized workout plans, real‑time tracking, and coaching support—all in one app. Build momentum, stay consistent, and see results.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                            <AppLinkButton code="FAZI123" />
                            <a href="#services" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300">
                                Explore Services
                            </a>
                        </div>
                        <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
                            <div className="flex items-center gap-2">
                                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                <span>Real‑time tracking</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                                <span>Science‑backed plans</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                                <span>Coach support</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:col-span-5">
                        <DevicePreview />
                    </div>
                </div>
            </header>

            {/* Services */}
            <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">What you get</h2>
                <p className="mt-3 max-w-2xl text-slate-600">Everything you need to move better, train consistently, and stay motivated.</p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                        <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">A</div>
                        <h3 className="mt-4 text-lg font-semibold">Guided Workouts</h3>
                        <p className="mt-2 text-sm text-slate-600">HIIT, strength, mobility, and yoga plans tailored to your goals.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                        <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">B</div>
                        <h3 className="mt-4 text-lg font-semibold">Activity & Health Tracking</h3>
                        <p className="mt-2 text-sm text-slate-600">Steps, heart rate, calories, and body metrics with smart insights.</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                        <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">C</div>
                        <h3 className="mt-4 text-lg font-semibold">Coaching & Community</h3>
                        <p className="mt-2 text-sm text-slate-600">1:1 coaching, programs, and challenges to keep you accountable.</p>
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section id="why" className="bg-slate-50">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Why FaziLabs Fitness</h2>
                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                        <li className="flex gap-3">
                            <span className="mt-1 h-5 w-5 rounded-full bg-emerald-500" />
                            <div>
                                <p className="font-medium">Personalized plans</p>
                                <p className="text-sm text-slate-600">Adaptive programming that grows with your performance and schedule.</p>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-1 h-5 w-5 rounded-full bg-indigo-500" />
                            <div>
                                <p className="font-medium">Progress that motivates</p>
                                <p className="text-sm text-slate-600">Clear charts, weekly targets, and streaks to keep you on track.</p>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-1 h-5 w-5 rounded-full bg-amber-500" />
                            <div>
                                <p className="font-medium">Form and safety first</p>
                                <p className="text-sm text-slate-600">Video cues and tips so every rep counts and risks stay low.</p>
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-1 h-5 w-5 rounded-full bg-rose-500" />
                            <div>
                                <p className="font-medium">Scales with you</p>
                                <p className="text-sm text-slate-600">From beginner to advanced—with deloads, progressions, and cycles.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="relative isolate">
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 opacity-10" />
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-md">
                        <h3 className="text-2xl font-bold tracking-tight text-slate-900">Ready to move better?</h3>
                        <p className="mt-2 text-slate-600">Download the app, set your goal, and start your first workout today.</p>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                            <AppLinkButton code="FAZI123" />
                            <a href="#contact" className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="mt-auto border-t border-slate-200">
                <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">FZ</div>
                            <span className="text-sm font-semibold">FaziLabs</span>
                        </div>
                        <p className="text-xs text-slate-500">© {new Date().getFullYear()} FaziLabs. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App

function AppLinkButton({ code }: { code: string }) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        
        // Store referral code in localStorage for persistence
        localStorage.setItem('fazilabs_referral_code', code);
        
        const schemeUrl = `exporeferallinking://referral?code=${code}`;
        const universalUrl = `https://expo-react-native-linking.vercel.app/referral?code=${code}`;
        const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.fazitech.exporeferallinking';
        
        let didHide = false;
        const visibilityHandler = () => {
            didHide = true;
            document.removeEventListener('visibilitychange', visibilityHandler);
        };
        document.addEventListener('visibilitychange', visibilityHandler);
        
        const timeout = window.setTimeout(() => {
            if (!didHide) {
                // If app didn't open, redirect to Play Store
                window.location.href = playStoreUrl;
            }
        }, 1200);
        
        // Try custom scheme first
        const anchor = document.createElement('a');
        anchor.style.display = 'none';
        anchor.href = schemeUrl;
        document.body.appendChild(anchor);
        anchor.click();
        
        // Fallback to universal link after a short delay
        window.setTimeout(() => {
            if (!didHide) {
                window.location.href = universalUrl;
            }
        }, 500);
        
        window.setTimeout(() => {
            document.body.removeChild(anchor);
            window.clearTimeout(timeout);
        }, 2000);
    };
    
    return (
        <a
            href={`https://expo-react-native-linking.vercel.app/referral?code=${code}`}
            onClick={handleClick}
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors"
        >
            Open in App
        </a>
    );
}

function DevicePreview() {
    const slides = [
        {
            title: 'Quick Start',
            description: 'Tell us your goal—strength, cardio, or mobility—and get a plan.',
            bg: 'bg-[radial-gradient(circle_at_30%_20%,#e0e7ff,transparent_40%),radial-gradient(circle_at_70%_80%,#fce7f3,transparent_40%)]'
        },
        {
            title: 'Workout Tracker',
            description: 'Log sets, reps, and weight with rest timers and form tips.',
            bg: 'bg-[radial-gradient(circle_at_70%_20%,#dcfce7,transparent_45%),radial-gradient(circle_at_30%_80%,#e0e7ff,transparent_45%)]'
        },
        {
            title: 'Progress & Recovery',
            description: 'Weekly targets, heart rate insights, and deload recommendations.',
            bg: 'bg-[radial-gradient(circle_at_20%_30%,#fee2e2,transparent_45%),radial-gradient(circle_at_80%_70%,#fef9c3,transparent_45%)]'
        }
    ] as const

    const [current, setCurrent] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const touchStartX = useRef<number | null>(null)
    const touchDeltaX = useRef(0)
    const autoplayRef = useRef<number | null>(null)

    const goTo = (index: number) => {
        const next = (index + slides.length) % slides.length
        setCurrent(next)
    }

    const next = () => goTo(current + 1)
    const prev = () => goTo(current - 1)

    useEffect(() => {
        if (isPaused) return
        autoplayRef.current = window.setInterval(() => {
            setCurrent((c) => (c + 1) % slides.length)
        }, 4000)
        return () => {
            if (autoplayRef.current) window.clearInterval(autoplayRef.current)
        }
    }, [isPaused, slides.length])

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') next()
            if (e.key === 'ArrowLeft') prev()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
        touchStartX.current = e.touches[0].clientX
        touchDeltaX.current = 0
    }
    const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
        if (touchStartX.current == null) return
        touchDeltaX.current = e.touches[0].clientX - touchStartX.current
    }
    const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
        const threshold = 40
        if (touchDeltaX.current > threshold) prev()
        else if (touchDeltaX.current < -threshold) next()
        touchStartX.current = null
        touchDeltaX.current = 0
    }

    return (
        <div className="relative rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 p-1 shadow-xl">
            <div className="rounded-2xl bg-white p-4">
                <div
                    className="relative aspect-[9/19] w-full overflow-hidden rounded-xl border border-slate-200"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    role="region"
                    aria-roledescription="carousel"
                    aria-label="FaziLabs app preview"
                >
                    {/* Slides */}
                    <div
                        className="absolute inset-0 flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {slides.map((s, i) => (
                            <div key={i} className="min-w-full">
                                <div className={`h-full w-full ${s.bg} p-5 flex flex-col justify-between`}>
                                    <div className="flex items-center justify-between">
                                        <div className="h-8 w-20 rounded-full bg-white/60" />
                                        <div className="flex gap-1.5">
                                            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                                            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                                            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-base font-semibold text-slate-800">{s.title}</h4>
                                        <p className="mt-1 px-4 text-xs leading-5 text-slate-600">{s.description}</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="h-16 rounded-lg bg-white/60" />
                                        <div className="h-16 rounded-lg bg-white/60" />
                                        <div className="h-16 rounded-lg bg-white/60" />
                                        <div className="col-span-3 h-10 rounded-lg bg-white/60" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Controls */}
                    <button
                        type="button"
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
                        onClick={prev}
                        aria-label="Previous slide"
                    >
                        <span className="block h-4 w-4 rotate-180 border-y-2 border-l-2 border-slate-700" style={{ borderRight: '0', borderTop: '0' }} />
                    </button>
                    <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
                        onClick={next}
                        aria-label="Next slide"
                    >
                        <span className="block h-4 w-4 border-y-2 border-l-2 border-slate-700" style={{ borderRight: '0', borderTop: '0' }} />
                    </button>

                    {/* Dots */}
                    <div className="pointer-events-none absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                        {slides.map((_, i) => (
                            <span
                                key={i}
                                className={`h-1.5 w-6 rounded-full ${i === current ? 'bg-slate-800' : 'bg-slate-300'}`}
                                aria-hidden="true"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
