import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/useQueries";
import {
  ArrowRight,
  Bell,
  Bus,
  CalendarCheck,
  CheckCircle2,
  Eye,
  Facebook,
  Github,
  Instagram,
  Loader2,
  MapPin,
  Menu,
  Navigation,
  Route,
  Smartphone,
  Star,
  Twitter,
  Users,
  WifiOff,
  X,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// ─── Animated Section Wrapper ────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-xs border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <img
            src="/assets/uploads/f58ced34-d4fb-4175-ae26-cebf4a4feed6-1.jpeg"
            alt="Keriyo Logo"
            className="w-8 h-8 rounded-lg object-cover"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md transition-colors"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Button
            className="rounded-full px-5 font-semibold"
            data-ocid="nav.primary_button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Started
            <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-card border-b border-border px-6 pb-4"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <Button
            className="mt-3 w-full rounded-full"
            data-ocid="nav.primary_button"
            onClick={() => {
              setMobileOpen(false);
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </Button>
        </motion.div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative transit lines */}
        <svg
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full h-64 opacity-5"
          viewBox="0 0 1400 200"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 Q350 20 700 100 Q1050 180 1400 100"
            stroke="oklch(0.88 0.22 95)"
            strokeWidth="4"
          />
          <path
            d="M0 140 Q350 60 700 140 Q1050 220 1400 140"
            stroke="oklch(0.72 0.19 150)"
            strokeWidth="3"
          />
          <path
            d="M0 60 Q350 140 700 60 Q1050 -20 1400 60"
            stroke="oklch(0.88 0.22 95)"
            strokeWidth="2"
          />
        </svg>
        {/* Floating dots */}
        {["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"].map((id, i) => (
          <motion.div
            key={id}
            className="absolute w-2 h-2 rounded-full bg-primary opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Live Tracking Available
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight text-balance mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Track Every Bus,{" "}
              <span className="text-primary">Every Route,</span> In Real Time
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Keriyo helps commuters and operators monitor public and private
              bus locations live — so you always know when the next ride
              arrives.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="rounded-full px-7 font-semibold text-base shadow-md"
                data-ocid="hero.primary_button"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Smartphone className="mr-2 w-4 h-4" />
                Download App
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-7 font-semibold text-base border-border hover:bg-secondary"
                data-ocid="hero.secondary_button"
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-8 mt-10 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { value: "50K+", label: "Active Users" },
                { value: "1,200+", label: "Bus Routes" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Mockup */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow backdrop */}
            <div className="absolute inset-0 rounded-3xl bg-primary/8 blur-3xl transform scale-90" />
            <div className="relative">
              {/* Map card UI */}
              <div className="bg-card rounded-2xl shadow-card p-3 max-w-md w-full border border-border">
                {/* Mini map header */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-sm font-semibold text-foreground">
                    Live Bus Map
                  </span>
                  <span className="flex items-center gap-1 text-xs text-accent font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    LIVE
                  </span>
                </div>
                {/* Map visual */}
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 h-52">
                  {/* Grid lines */}
                  <svg
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full opacity-30"
                    viewBox="0 0 320 200"
                  >
                    {[0, 40, 80, 120, 160, 200].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="320"
                        y2={y}
                        stroke="oklch(0.88 0.22 95)"
                        strokeWidth="0.5"
                      />
                    ))}
                    {[0, 64, 128, 192, 256, 320].map((x) => (
                      <line
                        key={x}
                        x1={x}
                        y1="0"
                        x2={x}
                        y2="200"
                        stroke="oklch(0.88 0.22 95)"
                        strokeWidth="0.5"
                      />
                    ))}
                    {/* Route lines */}
                    <path
                      d="M30 160 Q100 80 200 100 Q260 110 290 50"
                      stroke="oklch(0.88 0.22 95)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 80 Q80 140 160 120 Q220 105 300 150"
                      stroke="oklch(0.72 0.19 150)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Bus markers */}
                  {[
                    { x: "38%", y: "58%", label: "B12", color: "bg-primary" },
                    { x: "62%", y: "42%", label: "A7", color: "bg-accent" },
                    { x: "80%", y: "25%", label: "C3", color: "bg-primary" },
                  ].map((bus) => (
                    <div
                      key={bus.label}
                      className={`absolute flex items-center justify-center w-8 h-8 rounded-full ${bus.color} text-primary-foreground text-[10px] font-bold shadow-md border-2 border-border transform -translate-x-1/2 -translate-y-1/2`}
                      style={{ left: bus.x, top: bus.y }}
                    >
                      {bus.label}
                    </div>
                  ))}
                  {/* Location pin */}
                  <div className="absolute bottom-4 right-4 bg-card rounded-full p-1.5 shadow-md">
                    <Navigation className="w-4 h-4 text-primary" />
                  </div>
                </div>
                {/* Locations list */}
                <div className="mt-3 space-y-2">
                  {[
                    {
                      name: "Central Station",
                      eta: "2 min",
                      color: "text-accent",
                    },
                    {
                      name: "Market Square",
                      eta: "7 min",
                      color: "text-primary",
                    },
                    {
                      name: "University Gate",
                      eta: "14 min",
                      color: "text-muted-foreground",
                    },
                  ].map((stop) => (
                    <div
                      key={stop.name}
                      className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-xs font-medium text-foreground">
                          {stop.name}
                        </span>
                      </div>
                      <span className={`text-xs font-semibold ${stop.color}`}>
                        {stop.eta}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* App mockup image floating */}
              <motion.img
                src="/assets/generated/bus-tracker-mockup-transparent.dim_600x900.png"
                alt="Keriyo mobile app"
                className="absolute -right-8 -bottom-6 w-36 lg:w-44 drop-shadow-2xl hidden sm:block"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: MapPin,
    title: "Live GPS Tracking",
    description:
      "See every bus on the map in real time with sub-second location updates.",
    color: "text-primary bg-primary/10",
  },
  {
    icon: Route,
    title: "Route Management",
    description:
      "Create, edit, and optimize bus routes for any city layout with ease.",
    color: "text-accent bg-accent/10",
  },
  {
    icon: Bus,
    title: "Public & Private Buses",
    description:
      "Unified platform for both city transit fleets and private operators.",
    color: "text-primary bg-primary/10",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description:
      "Push notifications for delays, route changes, and arrival reminders.",
    color: "text-accent bg-accent/10",
  },
  {
    icon: WifiOff,
    title: "Offline Mode",
    description:
      "Access cached routes and schedules even without an internet connection.",
    color: "text-primary bg-primary/10",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Why Keriyo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Keriyo Features
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to track, manage, and optimize bus operations —
            all in one beautifully designed platform.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {FEATURES.map((feat, i) => (
            <FadeUp key={feat.title} delay={i * 0.08}>
              <div
                className="group bg-background rounded-2xl p-6 border border-border card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 text-center"
                data-ocid={`features.card.${i + 1}`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${feat.color}`}
                >
                  <feat.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
const STEPS = [
  {
    number: "01",
    icon: Smartphone,
    title: "Open the App",
    description:
      "Search for your route or bus number from our comprehensive database of public and private routes.",
    color: "bg-primary text-primary-foreground",
  },
  {
    number: "02",
    icon: Eye,
    title: "See Live Locations",
    description:
      "Watch buses move on the interactive map in real time with accurate GPS positioning.",
    color: "bg-accent text-accent-foreground",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Plan Your Journey",
    description:
      "Get precise ETAs, plan connections, and never miss your bus again with smart alerts.",
    color: "bg-primary text-primary-foreground",
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Get started in seconds. No configuration required.
          </p>
        </FadeUp>

        {/* Connector line */}
        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <FadeUp key={step.title} delay={i * 0.12}>
                <div
                  className="relative bg-card rounded-2xl p-8 border border-border card-shadow text-center group hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
                  data-ocid={`steps.card.${i + 1}`}
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${step.color}`}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 mt-2 ${step.color} opacity-90`}
                  >
                    <step.icon className="w-7 h-7" />
                  </div>

                  <div className="text-4xl font-black text-border mb-3 select-none">
                    {step.number}
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Social Proof ─────────────────────────────────────────────────────────────
const OPERATORS = [
  "City Metro",
  "SwiftBus",
  "UrbanRide",
  "ExpressLink",
  "CommuteCo",
  "RapidTransit",
  "CityConnect",
  "BusNet",
];

function SocialProofSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Trusted by Millions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Operators & Commuters Love Keriyo
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From large city transit authorities to private shuttle services —
            Keriyo powers the world's bus networks.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Logo wall */}
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-4 gap-3">
              {OPERATORS.map((op) => (
                <div
                  key={op}
                  className="flex items-center justify-center bg-background rounded-xl border border-border p-4 text-xs font-semibold text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors text-center leading-tight"
                >
                  {op}
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Testimonial */}
          <FadeUp delay={0.2}>
            <div className="bg-background rounded-2xl p-8 border border-border card-shadow">
              <div className="flex gap-1 mb-4">
                {["s1", "s2", "s3", "s4", "s5"].map((id) => (
                  <Star
                    key={id}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <blockquote className="text-lg text-foreground font-medium leading-relaxed mb-6">
                "Keriyo transformed how our city manages public transit.
                Commuters now rely on it daily and driver satisfaction has gone
                up significantly. It's the best transit tracking tool we've
                used."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">AK</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    Amara Kone
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Director of Transit, City Metro Authority
                  </div>
                </div>
                <div className="ml-auto">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── Contact / Waitlist ───────────────────────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const mutation = useSubmitContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      await mutation.mutateAsync(form);
      toast.success("You're on the waitlist! We'll be in touch soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <FadeUp className="text-center mb-10">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Early Access
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              Join the Waitlist
            </h2>
            <p className="text-muted-foreground">
              Be among the first to experience Keriyo. Sign up and we'll notify
              you when we launch in your city.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 border border-border card-shadow space-y-5"
              data-ocid="contact.section"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="rounded-lg"
                    data-ocid="contact.input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="rounded-lg"
                    data-ocid="contact.input"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your transit needs or questions..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  rows={4}
                  className="rounded-lg resize-none"
                  data-ocid="contact.textarea"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-full font-semibold"
                disabled={mutation.isPending}
                data-ocid="contact.submit_button"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
              {mutation.isSuccess && (
                <p
                  className="flex items-center justify-center gap-2 text-sm text-accent font-medium"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  You're on the list!
                </p>
              )}
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const footerLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy", href: "#" },
  ];
  const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2"
            data-ocid="footer.link"
          >
            <img
              src="/assets/uploads/f58ced34-d4fb-4175-ae26-cebf4a4feed6-1.jpeg"
              alt="Keriyo Logo"
              className="w-7 h-7 rounded-lg object-cover"
            />
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="footer.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                data-ocid="footer.link"
              >
                <s.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <span>© {year} Keriyo. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SocialProofSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
