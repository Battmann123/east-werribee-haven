import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Building2, Home, Briefcase, School, ShoppingBag, Trees, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-east-werribee.jpg";
import landEstatesImage from "@/assets/land-estates.jpg";
import buildersImage from "@/assets/builders.jpg";
import commercialImage from "@/assets/commercial.jpg";
import renderAerialView from "@/assets/render-aerial-view.png";
import renderMasterPlan from "@/assets/render-master-plan.png";
import renderPrecinctView from "@/assets/render-precinct-view.png";

const Index = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:info@halp.com.au";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Kororoit</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('master-plan')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-foreground hover:text-primary transition-colors"
              >
                Master Plan
              </button>
              <button
                onClick={() => document.getElementById('why-choose')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-foreground hover:text-primary transition-colors"
              >
                Why Choose Kororoit
              </button>
              <Button 
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Contact
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Victoria's Largest Business Precinct</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Welcome to<br />East Werribee
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              Discover exceptional opportunities in Victoria's fastest-growing community. 
              Your future home and business destination awaits.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-foreground"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                A Thriving Community for Your Future
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                East Werribee represents Victoria's most significant urban growth opportunity, 
                combining residential excellence with commercial innovation.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With world-class infrastructure, education facilities, and endless recreational 
                opportunities, East Werribee is where families thrive and businesses prosper.
              </p>
              <Button 
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Contact Us <Mail className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition-all">
                <Building2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Premium Estates</h3>
                <p className="text-muted-foreground text-sm">World-class residential developments</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <Briefcase className="w-12 h-12 text-secondary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Business Hub</h3>
                <p className="text-muted-foreground text-sm">Thriving commercial opportunities</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <School className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-muted-foreground text-sm">Top-tier schools and facilities</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all">
                <Trees className="w-12 h-12 text-secondary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Green Spaces</h3>
                <p className="text-muted-foreground text-sm">Parks and recreational areas</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Development Section */}
      <section id="master-plan" className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Master Planned Precinct</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Vision for East Werribee
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore the carefully designed master plan showcasing Victoria's most ambitious 
              mixed-use development with modern infrastructure and sustainable design.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Main Featured Render */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all">
              <img 
                src={renderAerialView} 
                alt="East Werribee aerial development render showing modern architecture with Melbourne CBD skyline"
                className="w-full h-[600px] object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Modern Living Meets Natural Beauty</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experience the perfect blend of contemporary architecture, waterfront amenities, 
                  and lush green spaces with stunning views of Melbourne's CBD skyline.
                </p>
              </div>
            </Card>

            {/* Secondary Renders Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-all">
                <img 
                  src={renderMasterPlan} 
                  alt="East Werribee master plan showing residential and commercial zones"
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">Strategic Master Plan</h3>
                  <p className="text-muted-foreground">
                    Thoughtfully zoned precincts for residential, commercial, and recreational spaces 
                    connected by modern infrastructure.
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all">
                <img 
                  src={renderPrecinctView} 
                  alt="East Werribee precinct overview showing urban development and waterways"
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">Integrated Urban Design</h3>
                  <p className="text-muted-foreground">
                    A vibrant community featuring mixed-use developments, waterfront living, 
                    and extensive public amenities.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Land Estates Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={landEstatesImage} 
                alt="Land estates development in East Werribee"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Home className="w-4 h-4" />
                <span className="text-sm font-medium">Land Estates</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Build Your Dream Home
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Secure your piece of Victoria's most sought-after land estates. With premium 
                lots designed for modern living, East Werribee offers the perfect foundation 
                for your family's future.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span>Premium residential lots with modern infrastructure</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span>Family-friendly neighborhoods with parks and amenities</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span>Exceptional value with strong growth potential</span>
                </li>
              </ul>
              <Button 
                size="lg"
                onClick={handleContactClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Explore Land Estates <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Builders Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Quality Builders</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Expert Builders You Can Trust
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Partner with Victoria's leading builders to bring your vision to life. 
                Our approved builder network delivers exceptional craftsmanship and 
                innovative home designs tailored to East Werribee living.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <span>Award-winning home designs and quality construction</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <span>Energy-efficient and sustainable building practices</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <span>Flexible designs to suit your lifestyle and budget</span>
                </li>
              </ul>
              <Button 
                size="lg"
                onClick={handleContactClick}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Connect with Builders <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div>
              <img 
                src={buildersImage} 
                alt="Quality home builders in East Werribee"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={commercialImage} 
                alt="Commercial opportunities in East Werribee"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm font-medium">Commercial Opportunities</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Your Business Belongs Here
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Position your business at the heart of Victoria's fastest-growing economic 
                hub. East Werribee offers unparalleled commercial opportunities with 
                strategic location and modern infrastructure.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span>Prime commercial land and development sites</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span>Modern office spaces and industrial facilities</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span>Strategic location with excellent transport links</span>
                </li>
              </ul>
              <Button 
                size="lg"
                onClick={handleContactClick}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Discover Opportunities <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why East Werribee Section */}
      <section id="why-choose" className="py-24 bg-muted/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose East Werribee?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              More than just a location—it's a lifestyle destination where opportunity meets quality of life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Strategic Location</h3>
              <p className="text-muted-foreground leading-relaxed">
                Perfectly positioned between Melbourne CBD and Geelong, with excellent 
                transport connectivity and infrastructure.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all">
              <School className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Education Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                World-class schools, childcare facilities, and educational institutions 
                ensure your family's future success.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all">
              <ShoppingBag className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Modern Amenities</h3>
              <p className="text-muted-foreground leading-relaxed">
                Shopping centers, dining precincts, healthcare facilities, and 
                recreational spaces all within easy reach.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make East Werribee Your Home?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Contact us today to explore land estates, builders, and commercial opportunities 
            in Victoria's most exciting growth corridor.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg"
              onClick={handleContactClick}
              className="bg-background text-foreground hover:bg-background/90 shadow-xl"
            >
              <Mail className="mr-2 w-5 h-5" />
              info@halp.com.au
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open('https://www.vic.gov.au/east-werribee', '_blank')}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn More About East Werribee
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">East Werribee</h3>
              <p className="opacity-80">
                Victoria's largest business precinct and premier residential destination.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 opacity-80">
                <li><a href="#about" className="hover:opacity-100 transition-opacity">About</a></li>
                <li><a href="#" onClick={handleContactClick} className="hover:opacity-100 transition-opacity">Land Estates</a></li>
                <li><a href="#" onClick={handleContactClick} className="hover:opacity-100 transition-opacity">Builders</a></li>
                <li><a href="#" onClick={handleContactClick} className="hover:opacity-100 transition-opacity">Commercial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="opacity-80 mb-2">
                Level 14/333 Collins St<br />
                Melbourne VIC 3000
              </p>
              <p className="opacity-80 mb-2">
                <a href="mailto:info@halp.com.au" className="hover:opacity-100 transition-opacity">
                  info@halp.com.au
                </a>
              </p>
              <p className="opacity-80">
                <a 
                  href="https://www.vic.gov.au/east-werribee" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  Official Government Information
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center opacity-80">
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              <Link to="/terms-of-use" className="hover:opacity-100 transition-opacity">Terms of Use</Link>
              <span>|</span>
              <Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <span>|</span>
              <a href="#" onClick={handleContactClick} className="hover:opacity-100 transition-opacity">Contact Us</a>
            </div>
            <p>2025 &copy; House And Land Packages Pty Ltd</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
