import sidefolioAceternity from "public/images/cms.png";
import sidefolioAceternity2 from "public/images/cms2.png";
import sidefolioAlgochurn from "public/images/phishingurldetector.png";
import sidefolioAlgochurn2 from "public/images/phishingurldetector.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import EpidemicSim from "public/images/EpidemicSim.png";
import pentesterlabImg from "public/images/pentesterlab.png";


export const products = [
  {
    href: "https://github.com/Tahazouggari/CMS",
    title: "Content Management System ",
    description:
      "Content Management System (CMS)",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Laravel", "PHP", "MySQL"], 
    slug: "aceternity",
    content: (
  <div>
    <p className="text-base leading-relaxed">
      I developed this project during my <strong>second year of engineering studies (2A)</strong> at ENSICAEN as part of my academic work. 
      It was carried out under the supervision of the{" "}
      <a 
        href="https://www.ensicaen.fr/recherche/laboratoires/greyc/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 underline"
      >
        GREYC laboratory
      </a>.
    </p>
    <p>
      This content management system (CMS) is a web application that enables users to create and manage their own pages with ease. 
      It offers both the option to build from scratch and to use predefined templates. The interface is simple and intuitive, 
      making it accessible to both technical and non-technical users. With built-in authentication, the system ensures that 
      content is securely managed and only authorized users can access editing features.
    </p>
    <p>
      In addition to page creation, users can preview their content before publishing, delete pages if needed, and invite collaborators to work together in real time. The system is designed to support dynamic content and aims to offer a more flexible and interactive experience. It&apos;s ideal for users looking for a customizable and user-friendly platform to manage their website content efficiently.
    </p>
  </div>
),

  },
  {
    href: "https://github.com/Tahazouggari/Pishing-Urls-detector",
    title: "Phishing Url detector",
    description:
      "The project analyzes a URL's structure, domain data, and web behavior to extract features for a machine learning model that predicts whether the URL is phishing or legitimate.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Python", "Flask"],
    slug: "algochurn",
    content: (
  <div>
    <p>
      This project transforms a raw URL into a set of meaningful numerical features that can be analyzed by a machine learning model to determine whether the URL is legitimate or phishing. The process begins by examining the URL&apos;s structure—measuring its length, depth, presence of special symbols, and the use of shortening services. It also looks for suspicious patterns such as hyphens in domain names, excessive dots, or the inclusion of sensitive words like &quot;login&quot; or &quot;secure,&quot; which are common in phishing attempts. The system then checks domain registration details, such as the age and expiration date, using WHOIS data to assess the domain&apos;s credibility. If this information is unavailable, it flags the URL as more suspicious.
    </p>
    <p>
      The analysis continues by attempting to fetch the actual webpage content and scanning for common phishing behaviors in the HTML code, such as the use of iframe tags, misleading mouse-over actions, and multiple redirections. These behavioral signals are condensed using dimensionality reduction techniques to keep the model efficient. Additional checks include detecting URLs that use IP addresses instead of domain names, the presence of the &quot;@&quot; symbol, and hidden Unicode characters. All these extracted signals are compiled into a structured format that the model uses to make a prediction, effectively turning raw URL data into a security assessment powered by machine learning.
    </p>
  </div>
),
  },
 
{
  href: "https://gitlab.ecole.ensicaen.fr/toujani/epidemy-os",
  title: "Epidemic-simulation",
  description:
    "Simulation od an epidemic inside your machine.",
  thumbnail: EpidemicSim,
  images: [EpidemicSim],
  stack: ["threads", "inter-process communication", "shared memory"],
  slug: "epidemic-simulation",
  content: (
    <div>
      <p>
        This project simulates the spread of an epidemic within a city, using various mechanisms such as inter-process communication, shared memory, and threading. The goal is to model citizen roles and their interactions to manage and mitigate the contamination.
      </p>
      <iframe
        src="/pdf/EpidemicSim.pdf"
        width="100%"
        height="500px"
        style={{ border: "1px solid #ccc", borderRadius: "8px", marginTop: "16px" }}
        title="Epidemic Simulation Report"
      />
      <div className="mt-4 text-gray-700">
        Cant &apos; view the PDF?{" "}
        <a
          href="/pdf/EpidemicSim.pdf"
          download
          className="text-blue-600 underline"
        >
          Download it here.
        </a>
      </div>
    </div>
  ),
},

  {
    href: "https://tailwindmasterkit.com",
    title: "Tailwind Master Kit",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
];
