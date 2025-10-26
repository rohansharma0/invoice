import { createContext, useContext, useEffect, useState } from "react";
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  Database, 
  Lock, 
  Zap,
  Check,
  Download,
  Mail,
  CreditCard,
  Star,
  FileText,
  Github,
  Twitter,
  Linkedin,
  Menu,
  Moon,
  Sun,
  Globe,
  Shield,
  TrendingUp,
  Users
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

// ==================== THEME PROVIDER ====================
type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// ==================== HEADER COMPONENT ====================
function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-emerald-700 dark:bg-emerald-600 p-2 transition-colors">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <span className="tracking-tight text-foreground">InvoicePro</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5 text-emerald-700" />
                ) : (
                  <Sun className="h-5 w-5 text-emerald-400" />
                )}
              </Button>
              <Button variant="outline" className="rounded-full border-emerald-200 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all">
                Sign In
              </Button>
            </div>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

// ==================== HERO SECTION ====================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-emerald-950/5 dark:via-emerald-950/20 to-background">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]"></div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 dark:bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-12">

          {/* Badge */}
          <div className="flex justify-center animate-fade-in">
            <Badge>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm text-emerald-700 dark:text-emerald-300">Trusted by 50,000+ businesses worldwide</span>
            </div>
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-8">
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground tracking-tight leading-[0.95]">
              Invoice with
              <span className="block mt-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 dark:from-emerald-400 dark:via-teal-400 dark:to-green-400 bg-clip-text text-transparent">
                Confidence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              The complete invoicing solution for modern businesses.
              <span className="block mt-2">Create, send, and get paid—faster than ever.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg"
              className="px-10 py-7 text-lg rounded-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 group"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-7 text-lg rounded-full border-2 border-border hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-emerald-500/5 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-sm text-muted-foreground">
            {["Free 14-day trial", "No credit card required", "Cancel anytime"].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-emerald-500/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

// ==================== PARTNERS SECTION ====================
function PartnersSection() {
  const partners = [
    { name: "Stripe", description: "Payment Processing" },
    { name: "QuickBooks", description: "Accounting Software" },
    { name: "Xero", description: "Cloud Accounting" },
    { name: "PayPal", description: "Payment Gateway" },
  ];

  return (
    <section className="relative py-24 overflow-hidden border-y border-border bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              Integrations
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Works with your favorite tools
            </h2>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-emerald-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="space-y-4">
                  <div className="h-12 flex items-center justify-center">
                    <div className="text-2xl font-display text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {partner.name}
                    </div>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    {partner.description}
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-emerald-500/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== DATABASE SECTION ====================
function DatabaseSection() {
  return (
    <section className="relative py-32 overflow-hidden border-y border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left - Icon/Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl p-16 border border-emerald-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-50 animate-pulse"></div>
                    <Database className="relative h-32 w-32 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute top-8 right-8 bg-card rounded-lg px-4 py-2 border border-border shadow-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Lightning Fast</span>
                  </div>
                </div>
                
                <div className="absolute bottom-8 left-8 bg-card rounded-lg px-4 py-2 border border-border shadow-lg">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm">Encrypted</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  Next-Generation Database
                </span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-tight leading-tight">
                Built on a{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                  serverless database
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform is powered by a seamless database that provides a serverless database. 
                The database developers trust, on a serverless platform designed to help you build 
                reliable and scalable applications faster.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: "Uptime", value: "99.99%" },
                  { label: "Latency", value: "<10ms" },
                  { label: "Scale", value: "Auto" },
                  { label: "Backup", value: "24/7" },
                ].map((stat, index) => (
                  <div key={index} className="bg-muted/50 rounded-xl p-4 border border-border">
                    <div className="text-2xl font-display text-emerald-600 dark:text-emerald-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== OUTLINE TEXT SECTION ====================
function OutlineTextSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-emerald-950/5 dark:to-emerald-950/20">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Large Outlined Text */}
          <div className="relative mb-20">
            <h2 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-display leading-none tracking-tighter text-transparent outline-text text-center">
              INVOICELY
            </h2>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-lg md:text-xl lg:text-2xl text-foreground text-center max-w-2xl px-4">
                Professional invoicing built for the modern era
              </p>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-32">
            {[
              {
                title: "Smart Automation",
                description: "Automate recurring invoices, payment reminders, and follow-ups. Save hours every week.",
                stat: "10hrs",
                label: "saved weekly"
              },
              {
                title: "Global Payments",
                description: "Accept payments in 135+ currencies. Get paid anywhere, anytime.",
                stat: "135+",
                label: "currencies"
              },
              {
                title: "Instant Reports",
                description: "Real-time insights into your cash flow, revenue, and outstanding payments.",
                stat: "Real-time",
                label: "analytics"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-emerald-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 h-full">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="text-5xl font-display text-emerald-600 dark:text-emerald-400">
                        {feature.stat}
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">
                        {feature.label}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== FEATURES SECTION ====================
function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Beautiful Templates",
      description: "Professionally designed invoice templates that make your business look exceptional. Fully customizable to match your brand.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Create and send invoices in seconds. Our streamlined workflow is designed for maximum productivity and efficiency.",
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption and compliance. Your data is protected with the highest security standards available.",
    },
    {
      icon: Globe,
      title: "Global Ready",
      description: "Support for 150+ currencies and multiple languages. Perfect for businesses operating across borders.",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "Track payment status, monitor cash flow, and get actionable insights to make better business decisions.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Invite team members, set permissions, and work together seamlessly. Everyone stays on the same page.",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-block">
            <span className="text-emerald-600 dark:text-emerald-400 uppercase tracking-widest text-sm font-medium">
              Features
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-tight">
            Everything you need,
            <span className="block text-emerald-700 dark:text-emerald-500">nothing you don't</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Powerful features designed to help you create professional invoices and get paid faster.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-xl dark:hover:shadow-emerald-900/20 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-emerald-700 dark:text-emerald-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl mb-3 text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:via-teal-500/5 group-hover:to-green-500/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ==================== STATS SECTION ====================
function StatsSection() {
  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "$2.4M+", label: "Processed Monthly" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.9/5", label: "Customer Rating" },
  ];

  return (
    <section className="py-24 bg-muted/30 border-y border-border relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-muted-foreground uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== SHOWCASE SECTION ====================
function ShowcaseSection() {
  return (
    <section className="relative py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* First Showcase */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-block">
                <span className="text-emerald-600 dark:text-emerald-400 uppercase tracking-widest text-sm font-medium">
                  Create & Customize
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-tight">
                Beautiful invoices that represent your brand
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Choose from professionally designed templates or create your own. Add your logo, customize colors, and make every invoice uniquely yours.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  "Drag-and-drop invoice builder",
                  "Custom branding and colors",
                  "Professional PDF exports",
                  "Automatic tax calculations"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 p-1">
                      <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-all duration-500"></div>
              <div className="relative bg-card rounded-2xl shadow-2xl border border-border p-8 group-hover:shadow-emerald-200 dark:group-hover:shadow-emerald-900/20 transition-all duration-500">
                {/* Mock Invoice */}
                <div className="space-y-6">
                  <div className="flex justify-between items-start pb-6 border-b border-border">
                    <div>
                      <div className="h-10 w-10 rounded-lg bg-emerald-700 dark:bg-emerald-600 mb-3"></div>
                      <div className="h-3 w-32 bg-muted rounded mb-2"></div>
                      <div className="h-2 w-40 bg-muted/60 rounded"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground mb-1">INVOICE</div>
                      <div className="font-display text-2xl text-foreground">#00123</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pb-6 border-b border-border">
                    <div>
                      <div className="text-xs text-muted-foreground uppercase mb-2">Bill To</div>
                      <div className="h-2 w-24 bg-muted rounded mb-2"></div>
                      <div className="h-2 w-32 bg-muted/60 rounded"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground uppercase mb-2">Date</div>
                      <div className="h-2 w-24 bg-muted rounded ml-auto mb-2"></div>
                      <div className="h-2 w-20 bg-muted/60 rounded ml-auto"></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex justify-between items-center py-2">
                        <div className="h-2 w-40 bg-muted/60 rounded"></div>
                        <div className="h-2 w-16 bg-muted rounded"></div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border">
                    <div className="flex justify-between items-center">
                      <div className="font-display text-lg text-foreground">Total</div>
                      <div className="font-display text-2xl text-emerald-700 dark:text-emerald-500">$2,847.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Showcase */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-green-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-all duration-500"></div>
              <div className="relative bg-card rounded-2xl shadow-2xl border border-border p-8 group-hover:shadow-teal-200 dark:group-hover:shadow-teal-900/20 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <h3 className="font-display text-xl text-foreground">Payment Options</h3>
                    <CreditCard className="h-5 w-5 text-emerald-600" />
                  </div>
                  
                  {[
                    { icon: Mail, label: "Email Invoice", status: "Sent" },
                    { icon: Download, label: "Download PDF", status: "Ready" },
                    { icon: CreditCard, label: "Accept Cards", status: "Enabled" },
                  ].map((option, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                          <option.icon className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
                        </div>
                        <span className="text-foreground">{option.label}</span>
                      </div>
                      <span className="text-sm text-emerald-600 dark:text-emerald-400">{option.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-emerald-600 dark:text-emerald-400 uppercase tracking-widest text-sm font-medium">
                  Send & Track
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-tight">
                Get paid faster with smart payment options
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Send invoices via email, accept online payments, and track everything in real-time. Your clients can pay with their preferred method.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  "Multiple payment gateways",
                  "Automatic payment reminders",
                  "Real-time payment tracking",
                  "Instant payment notifications"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 p-1">
                      <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ==================== SPONSOR SECTION ====================
function SponsorSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/10 via-background to-teal-950/10 dark:from-emerald-950/30 dark:via-background dark:to-teal-950/30"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  Free Sponsor
                </span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight leading-tight">
                Your Company Here
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We'd love to showcase your enterprise. If you'd like to sponsor us with a service that benefits our platform and users, contact us below.
              </p>

              <div className="pt-4">
                <Button 
                  size="lg"
                  className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Right - Placeholder */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative aspect-square rounded-2xl border-2 border-dashed border-border flex items-center justify-center bg-muted/30 backdrop-blur-sm group-hover:border-emerald-500/50 transition-all duration-500">
                <div className="text-center space-y-3 p-8">
                  <div className="text-6xl">🏢</div>
                  <div className="text-lg text-muted-foreground">Your Logo Here</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ==================== TESTIMONIALS SECTION ====================
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Founder, Design Studio",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      content: "InvoicePro has completely transformed how we handle billing. The templates are beautiful, and our clients love the professional look.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Freelance Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      content: "I've tried many invoicing tools, but this is by far the best. Simple, elegant, and gets the job done without any hassle.",
      rating: 5,
    },
    {
      name: "Emily Thompson",
      role: "Marketing Agency Owner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      content: "The automation features save me hours every week. I can focus on my business while InvoicePro handles all the billing.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-emerald-50/50 via-background to-background dark:from-emerald-950/20 dark:via-background dark:to-background overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-block">
            <span className="text-emerald-600 dark:text-emerald-400 uppercase tracking-widest text-sm font-medium">
              Testimonials
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-foreground tracking-tight">
            Loved by thousands
            <span className="block text-emerald-700 dark:text-emerald-500">of professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See what our customers have to say about their experience with InvoicePro.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-emerald-300 dark:hover:border-emerald-700 shadow-lg hover:shadow-2xl dark:hover:shadow-emerald-900/20 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-8 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-50 group-hover:opacity-75 blur transition-opacity"></div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="relative h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== CTA SECTION ====================
function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600 dark:from-emerald-800 dark:via-teal-800 dark:to-green-800"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Icon */}
          <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm">
            <Sparkles className="h-8 w-8 text-white" />
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1]">
              Ready to transform your invoicing?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join thousands of businesses already using InvoicePro to streamline their billing and get paid faster.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="px-8 py-6 rounded-full bg-white text-emerald-700 hover:bg-white/90 shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 group text-lg"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 rounded-full bg-transparent text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 text-lg"
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-white/80 pt-6">
            No credit card required • Cancel anytime • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
}

// ==================== FOOTER COMPONENT ====================
function Footer() {
  const links = {
    product: ["Features", "Pricing", "Security", "Integrations"],
    company: ["About", "Blog", "Careers", "Contact"],
    resources: ["Documentation", "Help Center", "API Reference", "Status"],
    legal: ["Privacy", "Terms", "Cookie Policy", "Licenses"],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-6 gap-12 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-emerald-700 dark:bg-emerald-600 p-2">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <span className="font-display text-xl text-foreground">InvoicePro</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The most intuitive invoicing platform for modern businesses. Create, send, and manage professional invoices with ease.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors">
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
                <a href="#" className="p-2 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors">
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
                <a href="#" className="p-2 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors">
                  <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-foreground mb-4 capitalize">{category}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 InvoicePro. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==================== MAIN LANDING PAGE COMPONENT ====================
export default function LandingPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <PartnersSection />
          <DatabaseSection />
          <OutlineTextSection />
          <FeaturesSection />
          <StatsSection />
          <ShowcaseSection />
          <SponsorSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
