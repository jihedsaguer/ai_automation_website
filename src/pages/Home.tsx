import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import {
    ArrowRight,
    Brain,
    Shield,
    Zap,
    Sparkles,
    Code,
    Bot,
    Workflow,
} from 'lucide-react';
import {Button} from "../components";
import Chatbot from "../components/Chatbot";

export function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="container py-12 sm:py-16 relative overflow-hidden mx-auto">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left side - Main content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                                <Bot className="w-4 h-4" />
                                AI-Powered Solutions
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                                Welcome to <span className="text-white">AI Automation</span>
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Build intelligent systems to simplify your workflow with our automation tools.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/signup">
                                    <Button size="lg" className="btn-accent w-full sm:w-auto">
                                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link to="/solutions">
                                    <Button size="lg" variant="outline" className="border-accent-glow w-full sm:w-auto hover:text-accent">
                                        Explore Solutions
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Right side - Feature cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <motion.div
                                className="card-accent p-6 rounded-lg relative overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"
                                    animate={{
                                        x: ["0%", "100%"],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                                <Shield className="w-8 h-8 mb-4 text-accent" />
                                <motion.h3
                                    className="text-lg font-semibold mb-2"
                                    whileHover={{ x: 5 }}
                                >
                                    Secure & Reliable
                                </motion.h3>
                                <p className="text-sm text-muted-foreground">Enterprise-grade security for your automation needs</p>
                            </motion.div>

                            <motion.div
                                className="card-glass p-6 rounded-lg relative overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"
                                    animate={{
                                        x: ["0%", "100%"],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{
                                        duration: 3,
                                        delay: 1,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                                <Zap className="w-8 h-8 mb-4 text-primary" />
                                <motion.h3
                                    className="text-lg font-semibold mb-2"
                                    whileHover={{ x: 5 }}
                                >
                                    Lightning Fast
                                </motion.h3>
                                <p className="text-sm text-muted-foreground">Optimized performance for rapid processing</p>
                            </motion.div>

                            <motion.div
                                className="card-glass p-6 rounded-lg relative overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"
                                    animate={{
                                        x: ["0%", "100%"],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{
                                        duration: 3,
                                        delay: 1.5,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                                <Brain className="w-8 h-8 mb-4 text-primary" />
                                <motion.h3
                                    className="text-lg font-semibold mb-2"
                                    whileHover={{ x: 5 }}
                                >
                                    Smart AI
                                </motion.h3>
                                <p className="text-sm text-muted-foreground">Advanced AI algorithms for better results</p>
                            </motion.div>

                            <motion.div
                                className="card-accent p-6 rounded-lg relative overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"
                                    animate={{
                                        x: ["0%", "100%"],
                                        opacity: [0.5, 0.8, 0.5]
                                    }}
                                    transition={{
                                        duration: 3,
                                        delay: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                                <Workflow className="w-8 h-8 mb-4 text-accent" />
                                <motion.h3
                                    className="text-lg font-semibold mb-2"
                                    whileHover={{ x: 5 }}
                                >
                                    Custom Flows
                                </motion.h3>
                                <p className="text-sm text-muted-foreground">Tailor automation to your needs</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Background effects */}
                <div className="absolute inset-0 -z-10 bg-neural-pattern opacity-30"></div>
                <div className="absolute inset-0 -z-20 bg-circuit-pattern opacity-20"></div>
            </section>

            {/* Innovation Section */}
            <section className="container py-16 sm:py-24 bg-muted/50 relative overflow-hidden mx-auto">
                <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center max-w-4xl mx-auto mb-12 px-4 relative z-10"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Empowering Business Automation with AI
                    </h2>
                    <p className="text-lg leading-relaxed max-w-xl mx-auto text-muted-foreground">
                        Unlock the future of workflows with intelligent automation and AI-powered tools designed for the modern enterprise.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 items-center relative z-10 max-w-6xl mx-auto">
                    {/* Left Text & List */}
                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="md:col-span-1 space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shadow-glow-soft">
                                <Brain className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-semibold text-primary">
                                Next-Gen AI Innovation
                            </h3>
                        </div>
                        <p className="leading-relaxed text-muted-foreground">
                            Seamlessly integrate powerful AI capabilities into your workflows with our no-code platform.
                        </p>
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="md:col-span-2"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: <Zap className="w-5 h-5" />, text: 'State-of-the-art Machine Learning Models' },
                                { icon: <Brain className="w-5 h-5" />, text: 'Contextual Natural Language Understanding' },
                                { icon: <Shield className="w-5 h-5" />, text: 'Advanced Computer Vision APIs' },
                                { icon: <Code className="w-5 h-5" />, text: 'Real-time Predictive Analytics' },
                            ].map((item) => (
                                <motion.div
                                    key={item.text}
                                    whileHover={{ y: -5 }}
                                    className="p-4 rounded-lg bg-background/50 border border-primary/20 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <span className="font-medium">{item.text}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container py-16 sm:py-24 relative overflow-hidden mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 relative z-10"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        NLS Consulting Features
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive AI solutions for modern businesses
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                    {[
                        {
                            icon: <Shield className="h-6 w-6 text-primary" />,
                            title: 'Secure AI Infrastructure',
                            description: 'Enterprise-grade security with advanced encryption and compliance features.'
                        },
                        {
                            icon: <Brain className="h-6 w-6 text-primary" />,
                            title: 'Advanced AI Models',
                            description: 'State-of-the-art machine learning models for complex business challenges.'
                        },
                        {
                            icon: <Sparkles className="h-6 w-6 text-primary" />,
                            title: 'Smart Automation',
                            description: 'Intelligent process automation that learns and adapts to your business needs.'
                        },
                        {
                            icon: <Zap className="h-6 w-6 text-primary" />,
                            title: 'Real-time Processing',
                            description: 'Lightning-fast AI processing for real-time business operations.'
                        },
                        {
                            icon: <Code className="h-6 w-6 text-primary" />,
                            title: 'No-Code Solutions',
                            description: 'Build powerful applications without writing a single line of code.'
                        },
                        {
                            icon: <Brain className="h-6 w-6 text-primary" />,
                            title: 'Predictive Analytics',
                            description: 'Make data-driven decisions with advanced predictive modeling.'
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.2), 0 8px 10px -6px rgba(59, 130, 246, 0.1)',
                            }}
                            className="flex flex-col items-center text-center p-6 rounded-xl border border-primary/20 hover:border-primary/40 relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"
                                animate={{
                                    x: ["0%", "100%"],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 3,
                                    delay: index * 0.2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                            <motion.div
                                className="mb-4 rounded-lg bg-primary/10 p-3 relative z-10"
                                whileHover={{
                                    rotate: [0, -10, 10, -10, 0],
                                    transition: { duration: 0.5 },
                                }}
                            >
                                {feature.icon}
                            </motion.div>
                            <motion.h3
                                className="text-xl font-semibold relative z-10"
                                whileHover={{ scale: 1.05 }}
                            >
                                {feature.title}
                            </motion.h3>
                            <p className="mt-2 text-muted-foreground relative z-10">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Portfolio Preview Section */}
            <section className="container py-16 sm:py-24 bg-muted/50 overflow-hidden mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-center mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-center">
                        Discover how we've helped businesses transform with AI
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {[
                        {
                            title: 'AI-Powered Customer Service',
                            description: 'Reduced response time by 60% with intelligent automation',
                            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
                            tags: ['AI', 'NLP', 'Customer Service']
                        },
                        {
                            title: 'Supply Chain Optimization',
                            description: '25% cost reduction through predictive analytics',
                            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
                            tags: ['Machine Learning', 'Analytics']
                        }
                    ].map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Link to="/portfolio">
                        <Button size="lg" variant="outline">
                            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="container py-16 sm:py-24 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl bg-primary/10 p-8 md:p-12 lg:p-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Ready to Transform Your Business with AI?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Join the future of intelligent automation and start your AI journey today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/signup">
                            <Button size="lg" className="w-full sm:w-auto">
                                Get Started <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link to="/solutions">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                View Solutions
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Chatbot />
        </div>
    );
}

export default Home;

