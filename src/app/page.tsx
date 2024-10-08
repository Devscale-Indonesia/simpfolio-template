import { BlogPostGrid } from "@/components/blog-post-grid";
import type { TMetadata } from "@/components/content-hub";
import { getContentDocs } from "@/libs/get-content-docs";
import { Button } from "@/components/button";
import { ExperienceCard } from "@/components/experience.card";
import { ProjectCard } from "@/components/project.card";
import Image from "next/image";
import Link from "next/link";

const dummyExperience = [
  {
    company: "Acme.inc",
    position: "Chief Usability Analyst",
    startPeriod: "Aug 2024",
    description:
      "As the Chief Usability Analyst, leads the charge in optimizing user experiences through intuitive design and data-driven strategies. With a focus on balancing functionality and user satisfaction, they work closely with cross-functional teams to streamline digital interactions, ensuring that every touchpoint is seamless and accessible. Their innovative approach and commitment to continuous improvement drive measurable results, enhancing both user engagement and business outcomes.",
    keys: [
      "Spearhead usability testing and research to identify pain points and areas for improvement.",
      "Collaborate with designers, developers, and product managers to implement user-centric solutions.",
      "Leverage user feedback and analytics to refine workflows and interface designs.",
      "Advocate for best practices in usability, acccessibility, and design consistency.",
    ],
  },
  {
    company: "Sther, Flatley and Doyle",
    position: "International Quality Officer",
    startPeriod: "May 2023",
    endPeriod: "August 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    keys: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
  {
    company: "Jacobi, Zemlak and Mayer",
    position: "National Identity Specialist",
    startPeriod: "Aug 2020",
    endPeriod: "May 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    keys: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
  {
    company: "Champlin LLC",
    position: "National Identity Specialist",
    startPeriod: "Aug 2016",
    endPeriod: "July 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    keys: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
  {
    company: "Keeling - Price",
    position: "Chief Marketing Administrator",
    startPeriod: "Aug 2011",
    endPeriod: "July 2016",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    keys: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
  {
    company: "Quitzon - Swift",
    position: "Global Directive Assistant",
    startPeriod: "Aug 2000",
    endPeriod: "Aug 2011",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    keys: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
  },
];

const dummyProjects = [
  {
    src: "/assets/icon-project-1.webp",
    title: "Finance Tracker",
    description: "An App for managing personal finances and budgeting",
    websiteHref: "/",
    repositoryHref: "/",
    docsHref: "/",
  },
  {
    src: "/assets/icon-project-2.webp",
    title: "Recipe Manager",
    description: "An App for storing and sharing favorite recipes",
    websiteHref: "/",
    repositoryHref: "/",
    docsHref: "/",
  },
  {
    src: "/assets/icon-project-3.webp",
    title: "Fitness Tracker",
    description: "An App for tracking workouts and health goals.",
    websiteHref: "/",
    repositoryHref: "/",
    docsHref: "/",
  },
  {
    src: "/assets/icon-project-4.webp",
    title: "Travel Planner",
    description: "An App for planning trips and exploring destinations.",
    websiteHref: "/",
    repositoryHref: "/",
    docsHref: "/",
  },
  {
    src: "/assets/icon-project-5.webp",
    title: "Task Manager",
    description: "An App for organizing tasks and increasing productivity.",
    websiteHref: "/",
    repositoryHref: "/",
  },
];

export default async function Home() {
  const metadatas = (await getContentDocs(6)) as TMetadata[];

  return (
    <main className="flex justify-center items-center bg-bodyGray">
      <div className="max-w-[1080px] mt-[5rem] p-16">
        <section className="space-y-12 pb-20">
          <h1 className="text-lightGray font-semibold max-w-[850px]">
            A <span className="text-blackColor">Minimalist</span> Portfolio
            Template for Developer
          </h1>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-5">
              <Image
                src={`/assets/profile.webp`}
                width={500}
                height={500}
                alt="profile icon"
                className="w-[120px] h-[120px] border rounded-full"
              />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <h2 className="text-blackColor font-semibold">
                    Roberta Deckow
                  </h2>
                  <p className="text-mediumGray">Chief Usability Analyst</p>
                </div>
                <div className="flex gap-2.5">
                  <div className="social-icon">
                    <Image
                      src={`/assets/x-icon.webp`}
                      width={500}
                      height={500}
                      alt="x icon"
                    />
                  </div>
                  <div className="social-icon">
                    <Image
                      src={`/assets/github-icon.webp`}
                      width={500}
                      height={500}
                      alt="github icon"
                      className="scale-125"
                    />
                  </div>
                  <div className="social-icon pb-3">
                    <Image
                      src={`/assets/stackoverflow-icon.webp`}
                      width={500}
                      height={500}
                      alt="stackoverflow icon"
                      className="scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
            <h5 className="text-mediumGray max-w-[600px]">
              Simpfolio offers a{" "}
              <span className="font-bold">sleek design for developers</span> to
              showcase their work effectively. Whether you&apos;re a{" "}
              <span className="font-bold">
                coder, designer, or tech enthusiast
              </span>
              , this template helps you display your projects with style.
            </h5>
            <div className="flex items-center gap-5">
              <Button className="flex items-center gap-3">
                <div className="relative inline-flex">
                  <div className="w-2 h-2 bg-greenColor rounded-full"></div>
                  <div className="w-2 h-2 bg-greenColor rounded-full absolute top-0 left-0 animate-ping"></div>
                  <div className="w-2 h-2 bg-greenColor rounded-full absolute top-0 left-0 animate-pulse"></div>
                </div>
                <span>Let&apos;s Talk With Me</span>
              </Button>
              <Button variant="secondary">Find Out More</Button>
            </div>
          </div>
        </section>

        <section className="space-y-5 pb-20">
          <h3 className="font-semibold">Experience</h3>
          <div>
            {dummyExperience.map((experience, index) => {
              return <ExperienceCard key={index} {...experience} />;
            })}
          </div>
        </section>

        <section className="space-y-5 pb-20">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="grid grid-cols-3 gap-x-5 gap-y-6">
            {dummyProjects.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </div>
        </section>

        <div className="space-y-5">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <Link href="/blog">
              <p className="text-mediumGray hover:underline">
                See My Another Blog &#10095;
              </p>
            </Link>
          </div>
          <BlogPostGrid metadatas={metadatas} />
        </div>
      </div>
    </main>
  );
}
