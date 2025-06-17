import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Button } from '../components';

interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
}

const projects: Project[] = [
    {
        title: 'AI-Powered Customer Service',
        description: 'Implemented an intelligent chatbot system that reduced response time by 60% and improved customer satisfaction.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
        tags: ['AI', 'NLP', 'Customer Service'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com'
    },
    {
        title: 'Supply Chain Optimization',
        description: 'Developed a predictive analytics platform that optimized inventory management and reduced costs by 25%.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
        tags: ['Machine Learning', 'Analytics', 'Supply Chain'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com'
    },
    {
        title: 'Workflow Automation System',
        description: 'Created an intelligent automation solution that streamlined business processes and increased productivity by 40%.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        tags: ['Automation', 'AI', 'Productivity'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com'
    },
    {
        title: 'Smart Document Processing',
        description: 'Built an AI system that automatically processes and categorizes documents with 99% accuracy.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        tags: ['Document Processing', 'AI', 'OCR'],
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com'
    }
];

export function Portfolio() {
    return (
        <div className="min-h-screen py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        Our <span className="text-primary">Portfolio</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Explore our successful AI implementations and innovative solutions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
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
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
                                        >
                                            <Github className="mr-2 h-4 w-4" />
                                            View Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <Link to="/contact">
                        <Button size="lg">
                            Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default Portfolio; 