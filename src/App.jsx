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
        <section className="skills">
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
            <a href="https://byte-bazaar-blond.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/byte.png" alt="Byte Bazaar" className="project-img" />
            </a>
            <a href="https://expense-tracker-react-gold.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/expense.png" alt="Expense Tracker" className="project-img" />
            </a>
            <a href="https://jp-chatbot.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/chatbot.png" alt="Chatbot" className="project-img" />
            </a>
          </div>
        </section>
        <section>
          <h2>Socials</h2>
          <div className="socials">
            <a href="https://www.facebook.com/john.paul.escalona.2025/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={28} />
            </a>
            <a href="https://github.com/Papol14" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={28} />
            </a>
          </div>
        </section>
      </aside>
      <main className="main-content">
        <section>
          <h2>Profile</h2>
          <p>
            To leverage my proficiency in Microsoft Word, Canva, PowerPoint, and Excel to create high-quality documents, engaging presentations, and efficient data management solutions. I aim to contribute effectively to organizational goals by applying my technical skills, attention to detail, and creativity in a collaborative and dynamic work environment.
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
              <strong>Primary Education:</strong> Don Vicente Delgado Memorial, 2009-2015
            </li>
          </ul>
        </section>
        <section>
          <h2>Certificates/Seminars/Training</h2>
          <ul>
            <li>
              <strong>Business Summit 2023</strong> - Divine Word College Of Calapan, May 03, 2023
            </li>
            <li>
              <strong>The Rise of Artificial Intelligence</strong> - Divine Word College Of Calapan, Nov 24, 2023
            </li>
            <li>
              <strong>International Business & Global Strategy</strong> - University of Santo Thomas, Nov 18, 2023
            </li>
            <li>
              <strong>Software Programming 101</strong> - Mst Connect, Nov 16, 2024
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
