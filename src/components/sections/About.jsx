import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "MongoDB", "Express.js"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="mb-6" style={{ color: "var(--text)" }}>
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-theme space-y-2">
                <li>
                  <strong> B.S. in Computer Science </strong> - UMass Amherst
                  (2025-2026)
                </li>
                <li>
                    <strong> A.S. in Computer Science </strong> - North Shore CC
                    (2022-2024)
                </li>
                <li>
                  Relevant Coursework: Data Structures, OOP, Web Development, Programming Methodology,...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-theme">
                <div className="space-y-2">
                  <div>
                    <h4 className="font-semibold">Astrion Bank</h4>
                    <p className="muted-theme">
                      Software Engineer Intern (Security Platform Team) • May
                      2025 – Aug 2025
                    </p>
                  </div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Implemented secure Java Spring Boot APIs for IAM Service,
                      adding JWT-based authorization, input validation, and rate
                      limiting to reduce unauthorized request attempts by 45%
                    </li>
                    <li>
                      Built automated CI/CD pipeline for the Identity and Access
                      Management (IAM) Service using GitHub Actions and Docker
                      Compose, reducing deploy rollback risk by 50% with
                      integrated security scan by Semgrep
                    </li>
                    <li>
                      Integrated Prometheus and Grafana with AWS CloudWatch to
                      monitor global transaction service performance and
                      optimize AWS EC2 usage, improved alerting accuracy and
                      helped reduce idle resource cost by $5,000 per month
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div>
                    <h4 className="font-semibold">CloudyScale.ai</h4>
                    <p className="muted-theme">
                      Software Engineer Intern (Web Development Team) • May 2024
                      – Aug 2024
                    </p>
                  </div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Developed internal chatbot platform using React.js, Redux,
                      and Bootstrap, enabling legal teams to retrieve document
                      insights via natural language, increased legal research
                      speed by 40% and used by 100+ employees
                    </li>
                    <li>
                      Improved backend for chatbot history in Golang, MySQL, and
                      Google Cloud Storage, implementing timestamped message
                      logging and file retrieval API, increased chatbot usage by
                      80% across legal teams
                    </li>
                    <li>
                      Wrote 40+ unit and integration tests across backend and
                      frontend using Pytest, pytest-mock, and Selenium,
                      increasing test coverage to 85% and reducing manual QA
                      time by 20% in weekly deployments
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};