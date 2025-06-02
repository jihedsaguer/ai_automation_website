import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award, Heart, Lightbulb, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Sarah Chen',
        role: 'CEO & Co-founder',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces',
        bio: 'AI expert with 15+ years of experience in machine learning and business automation.'
    },
    {
        name: 'Michael Torres',
        role: 'CTO',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
        bio: 'Former tech lead at Google, specializing in AI infrastructure and scalable systems.'
    },
    {
        name: 'Emily Johnson',
        role: 'Head of AI Research',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces',
        bio: 'PhD in Machine Learning, leading our AI innovation and research initiatives.'
    },
    {
        name: 'David Kim',
        role: 'Product Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
        bio: 'Product visionary with a track record of successful AI product launches.'
    }
];

const values = [
    {
        icon: <Target className="w-6 h-6" />,
        title: 'Innovation First',
        description: "Pushing the boundaries of what's possible with AI technology."
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: 'Customer Success',
        description: 'Dedicated to helping our clients achieve their business goals.'
    },
    {
        icon: <Lightbulb className="w-6 h-6" />,
        title: 'Continuous Learning',
        description: 'Constantly evolving and improving our AI solutions.'
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: 'Agile Development',
        description: 'Fast-paced innovation with rapid deployment capabilities.'
    }
];

export function About() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="container py-16 sm:py-24 relative overflow-hidden mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Users className="w-4 h-4" />
                        Our Story
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                        About <span className="text-primary">AI Nexus</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We're a team of AI enthusiasts and experts dedicated to transforming businesses through intelligent automation.
                    </p>
                </motion.div>
            </section>

            {/* Mission Section */}
            <section className="container py-16 sm:py-24 bg-muted/50 relative overflow-hidden mx-auto">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                <Target className="w-4 h-4" />
                                Our Mission
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">
                                Empowering Businesses with AI
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Our mission is to democratize AI technology and make it accessible to businesses of all sizes. We believe in creating intelligent solutions that drive growth, efficiency, and innovation.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    {teamMembers.slice(0, 3).map((member) => (
                                        <img
                                            key={member.name}
                                            src={member.image}
                                            alt={member.name}
                                            className="w-10 h-10 rounded-full border-2 border-background"
                                        />
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Join our team of experts
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="p-6 rounded-lg bg-card border border-primary/20 hover:border-primary/40 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="container py-16 sm:py-24 relative overflow-hidden mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        The brilliant minds behind our AI solutions
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-xl aspect-square mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                            <p className="text-primary mb-2">{member.role}</p>
                            <p className="text-sm text-muted-foreground">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="container py-16 sm:py-24 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl bg-primary/10 p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Join Us in Shaping the Future of AI
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Be part of our mission to transform businesses through intelligent automation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/careers">
                            <Button size="lg" className="w-full sm:w-auto">
                                View Careers <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

export default About;