import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { GraduationCap, Monitor, Globe, Languages, BookOpen } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "Expected 2027",
      title: "Higher National Diploma in IT (HNDIT)",
      subtitle: "SLIATE — In Progress",
      description:
        "Studying Programming, OOP, Web Development, Database Management Systems, Software Engineering, System Analysis & Design, Software Testing, Computer Networks and Project Management.",
      icon: <GraduationCap className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Academic Project",
      title: "Multi-Item Rental System",
      subtitle: "PHP · MySQL · Bootstrap 5 · JavaScript · TCPDF · Chart.js",
      description:
        "Built a full web rental platform with booking management, double-booking prevention, rental fee and late-return penalty calculation, rental agreement PDFs and an admin dashboard with reports.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Academic Project",
      title: "Student Results Management System",
      subtitle: "Java · MySQL · NetBeans",
      description:
        "Developed a desktop application with admin and student login, result entry and search, automated result calculation, and printable result sheets — reducing manual errors.",
      icon: <Monitor className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Feb – Aug 2024",
      title: "Diploma in IT & Professional Diploma in English",
      subtitle: "Universal Business and Technology Campus (UBT)",
      description:
        "Completed IT fundamentals, Microsoft Office, database setup and HTML/CSS/JavaScript web development, alongside professional English writing, presentations and interview skills.",
      icon: <Languages className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023",
      title: "G.C.E. Advanced Level",
      subtitle: "Arts Stream — Political Science, Geography, Islam",
      description:
        "Completed my A/Ls in the Arts stream, then moved into the IT field through a Diploma in IT and the HNDIT programme.",
      icon: <BookOpen className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="My Journey"
        subtitle="From the classroom to building complete software systems"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
