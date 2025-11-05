import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Code2, Settings, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const internships = [
  {
    id: 1,
    role: "AI / Machine Learning Intern",
    icon: Brain,
    tag: "AI",
    description: "Work on real-world AI and ML projects under mentorship. Help build intelligent systems, train models, and work with Python, TensorFlow, and real datasets.",
    skills: ["Python", "Pandas", "TensorFlow", "NumPy", "Scikit-learn", "ML basics"],
  },
  {
    id: 2,
    role: "Full Stack Development Intern",
    icon: Code2,
    tag: "Development",
    description: "Build and maintain web applications using modern web technologies (MERN Stack). Work with real projects, mentors, and a collaborative tech team.",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "Git"],
  },
  {
    id: 3,
    role: "Google Workspace Admin Intern",
    icon: Settings,
    tag: "Admin",
    description: "Assist in managing Google Workspace (Gmail, Drive, Classroom, Admin Console, etc.). Learn about automation, user management, and Workspace integrations.",
    skills: ["Google Admin Console", "Sheets", "GAM commands", "APIs (preferred)", "Basic scripting"],
  },
];

const InternshipCards = () => {
  const navigate = useNavigate();

  const cardColors = [
    { bg: "bg-blue-50 dark:bg-blue-950/30", border: "border-blue-200 dark:border-blue-800", iconBg: "bg-blue-500" },
    { bg: "bg-pink-50 dark:bg-pink-950/30", border: "border-pink-200 dark:border-pink-800", iconBg: "bg-pink-500" },
    { bg: "bg-cyan-50 dark:bg-cyan-950/30", border: "border-cyan-200 dark:border-cyan-800", iconBg: "bg-cyan-500" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Internship Opportunities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Gain hands-on experience with real-world projects and expert mentorship
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {internships.map((internship, index) => {
            const Icon = internship.icon;
            const colorScheme = cardColors[index % 3];
            
            return (
              <Card 
                key={internship.id} 
                className={`${colorScheme.bg} ${colorScheme.border} border-2 overflow-hidden group animate-fade-in-up hover-lift`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${colorScheme.iconBg} w-fit`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    {internship.id === 1 && "💼"} 
                    {internship.id === 2 && "💻"} 
                    {internship.id === 3 && "⚙️"} 
                    {internship.role}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {internship.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.slice(0, 3).map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {internship.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{internship.skills.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      className="w-full gap-2 shadow-sm"
                      onClick={() => navigate(`/internship/${internship.id}`)}
                    >
                      I am Interested
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/career')}
          >
            View All Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InternshipCards;