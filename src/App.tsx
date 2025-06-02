import React from 'react';
import { ThemeProvider } from './components/theme-provider';
import Navbar from './components/layout/Navbar';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';

const App: React.FC = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Router>
                <div className="min-h-screen bg-background text-foreground">
                    <Navbar />
                    <main className="pt-16">
                        <div className="container mx-auto px-4">
                            <AppRoutes />
                        </div>
                    </main>
                    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
                            © {new Date().getFullYear()} AI Solutions. All rights reserved.
                        </div>
                    </footer>
                    <Toaster />
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;