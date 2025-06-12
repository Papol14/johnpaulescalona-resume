import './App.css';
import { Facebook, Github } from 'lucide-react';

function App() {
  return (
    <div className="container">
      <aside className="sidebar">
        <img src="/me.png" alt="Profile" className="profile-pic" />
        <h1>ESCALONA, JOHN PAUL</h1>
        <ul className="contact">
          <li>+63 9566505010</li>
          <li>johnpaulescalona2@gmail.com</li>
          <li>Pagkakaisa, Naujan, Oriental Mindoro</li>
        </ul>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>Microsoft Word, Canva, PowerPoint, Excel, Airtable</li>
            <li>Web Development (HTML, CSS, Bootstrap, Tailwind, React.js, GIT, Github)</li>
            <li>Automation (n8n, deepseek)</li>
          </ul>
        </section>
        <section>
          <h2>Projects</h2>
          <div className="projects">
            <a href="https://byte-bazaar-blond.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Byte Bazaar">
              <img src="/byte.png" alt="Byte Bazaar" className="project-img" />
            </a>
            <a href="https://expense-tracker-react-gold.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Expense Tracker">
              <img src="/expense.png" alt="Expense Tracker" className="project-img" />
            </a>
            <a href="https://jp-chatbot.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Chatbot">
              <img src="/chatbot.png" alt="Chatbot" className="project-img" />
            </a>
          </div>
        </section>
        <section>
          <h2>Socials</h2>
          <div className="socials">
            <a href="https://www.facebook.com/profile.php?id=61576928804795" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="https://github.com/Papol14" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
          </div>
        </section>
      </aside>
      <main className="main-content">
        <section>
          <h2>Profile</h2>
          <p>
          Recent graduate with strong numerical skills and proficiency. Highly detail-oriented, with a passion for delivering excellent customer service and ensuring accurate financial transactions. Quick learner with a solid foundation in data organization and digital tools, eager to apply my technical skills in a fast-paced banking environment. Committed to maintaining efficiency, security, and a positive client experience as a Bank Teller.
          </p>
        </section>
        <section>
          <h2>Education</h2>
          <ul>
            <li>
              <strong>Bachelor of Science in Business Administration - Financial Management</strong><br />
              Divine Word College of Calapan, 2021-Present
            </li>
            <li>
              <strong>Senior High School:</strong> Accountancy, Business and Management<br />
              Divine Word College of Calapan, 2019-2021
            </li>
            <li>
              <strong>Junior High School:</strong> Good Shepherd Academy, 2015-2019
            </li>
            <li>
              <strong>Primary Education:</strong> Don Vicente Delgado Memorial Elementary School, 2009-2015
            </li>
          </ul>
        </section>
        <section>
          <h2>Work Experience</h2>
          <div>
            <strong>INTERN</strong><br />
            Mindoro Medical Center Calapan Inc.,<br />
            Masipit, Calapan City, Oriental Mindoro<br />
            Duration: Feb - May (600 hours)
            <ul>
              <li>
                Assisted with financial encoding, patient account summaries, shareholder records, and front desk customer support during a 600-hour internship.
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Certificates/Seminars/Training</h2>
          <ul>
            <li>
              <strong>MASTERING BUSINESS COMMUNICATION</strong><br />
              Department of Information and Communications Technology, Jan 24, 2025
            </li>
            <li>
              <strong>XERO ADVISOR CERTIFIED</strong><br />
              Xero central, Jan 2, 2025
            </li>
            <li>
              <strong>INTERNATIONAL BUSINESS & GLOBAL STRATEGY: TRENDS, DEVELOPMENTS AND CHALLENGES</strong><br />
              University of Santo Thomas, Nov 18, 2023
            </li>
            <li>
              <strong>SOFTWARE PROGRAMMING 101</strong><br />
              MST Connect, Nov 16, 2024
            </li>
          </ul>
        </section>
        <section>
          <h2>Membership</h2>
          <ul>
            <li>Junior Confederation of Finance Associations - Philippines (JCFAP), 2023</li>
            <li>Boys Scout of the Philippines, 2014</li>
            <li>Altar Server, 2020-2021</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
