import { useQuery } from "@tanstack/react-query";
import AnimatedText from "react-animated-text-content";
import Loading from "../../Shared/Loading/Loading";
import Project from "./Project";

export const Projects = () => {
  const {
    isLoading,
    error,
    data: projects,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () =>
      fetch("https://personal-portfolio-server-plum.vercel.app/projects").then(
        (res) => res.json()
      ),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) return "An error has occurred: " + error.message;
  return (
    <section id="projects"
    
    data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="2000">
      <h1 className="text-center text-3xl">
        <AnimatedText
          type="bounce" // animate words or chars
          animation={{
            x: "-20px",
            y: "-20px",
            scale: 1.1,
            ease: "ease-in-out",
          }}
          animationType="string"
          interval={0.06}
          duration={0.8}
          tag="p"
          className="animated-paragraph"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          Recent Projects
        </AnimatedText>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 my-12 lg:w-10/12 mx-auto ">
        {projects.map((project) => (
          <Project key={project._id} project={project}></Project>
        ))}
      </div>
    </section>
  );
};
