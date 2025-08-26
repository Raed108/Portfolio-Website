function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}


const StartChat = ()=>{
	const chatLog1 = document.getElementById("chat-log");
	const newMessage = document.createElement("li");
	newMessage.innerHTML = `<span class="avatar bot"> User </span>
							<div class="message"> I have a question to ask you about this resume </div>`;
	chatLog1.appendChild(newMessage);

	setTimeout(()=>{
		const newMessage2 = document.createElement("li");
		newMessage2.innerHTML = `<span class="avatar bot"> AI </span>
							<div class="message"> Sure, what's your question about? </div>`;
		chatLog1.appendChild(newMessage2);
	}, 1000);

    const startButton = document.getElementById("start-button");
    startButton.style.display = "none";


	const buttonLabels = [
		["Objective", "Raed is driven by a strong passion for solving complex technical problems and developing innovative software solutions that enhance user experience. He aims to leverage his solid background in programming, debugging, and software development, combined with his excellent communication skills, to collaborate effectively within a team. Raed is committed to continuous learning and is eager to contribute his skills towards developing high-end software solutions that address real-world challenges."],
		
		["Education", "Raed's education at the German University in Cairo has equipped him with a robust foundation in computer science and engineering principles. His major in Media Engineering and Technology has provided him with both theoretical knowledge and practical skills in software development, programming languages, and problem-solving. Courses focused on advanced topics in computer science have prepared Raed to tackle complex technical issues and innovate within the software engineering field."],
		
		["Bachelor Thesis", "Raed received an A+ (100%) on his thesis: 'Integrating Logical Constraints in Multimodal AI Assistant Outputs', combining AI, Prolog, and multimodal validation."],
		
		["Experience", `Since September 2022, Raed has been a Junior Computer Science Teaching Assistant at the German University in Cairo (GUC), tutoring students and supporting the learning process.
						From September 2023 to Jan 2024, he worked as a Java Developer at Code Alpha, creating user-friendly programs and systems.
						Currently, Raed is a Software Developer at The Study Vista, where he develops and deploys functional websites, enhancing user experience and streamlining communication workflows.`],
		
		["Internship", "In 2024, Raed took on a Java Developer internship at Code Alpha, where he was involved in various stages of software development, including coding, testing, and debugging Java applications. This internship provided Raed with hands-on experience in developing and maintaining software applications, enhancing his Java programming skills and understanding of the software development life cycle. He also learned about collaborating effectively within a team and adhering to industry best practices in software development."],
		
		["Projects", `Raed has been involved in multiple projects that showcase his versatility and expertise in different areas of software development:
			1. Database Engine (2024): Raed developed a small database engine using Java, focusing on implementing B+ tree indexes. This project provided functionalities such as creating tables, inserting and updating tuples, deleting tuples, and searching in tables. Raed’s work on this project enhanced his understanding of data structures, particularly B+ trees, and strengthened his skills in database management and algorithm optimization.
			2. Donation App (2024): Using Angular, Raed developed a non-monetary donation application aimed at facilitating communication between donors and NGOs. The app allows users to donate various items like clothes, medical supplies, and toys. This project allowed Raed to apply his front-end development skills with Angular, and he gained experience in building user-friendly interfaces and managing client-server interactions.
			3. Simulating a Fictional Processor Design and Architecture (2024): Raed simulated a Harvard Memory Architecture using C, gaining insight into low-level programming and processor design. This project improved his understanding of computer architecture and reinforced his skills in C programming.
			4. Java Game (2023): Raed designed a game using Java and JavaFX, dividing the project into three milestones: creating packages and classes, defining game flow and action, and developing the GUI. This project enhanced Raed's object-oriented programming skills and his ability to create interactive and visually appealing user interfaces.
			5. University Advising System (2023): Raed worked on a system using SQL and ASP.NET to track students, instructors, schedules, rooms, exams, and graduation plans. This project improved Raed's backend development skills and his ability to work with relational databases and web technologies.
			6. Plant Care System (2023): In this project, Raed developed a system using VHDL code, FPGA, and Arduino to automate plant watering and fertilization. The system switches between these tasks based on a specified schedule. This project expanded Raed’s knowledge in hardware programming, embedded systems, and IoT applications.
			7. Portfolio Website (2024): Raed created a personal portfolio website using HTML, CSS, and JavaScript to showcase his skills, projects, and achievements. This project helped him refine his front-end development skills, particularly in creating responsive and aesthetically pleasing web designs.
			8. Blog Website (2024): Using React, TypeScript, and Firebase, Raed developed a dynamic blog website. This project allowed him to practice his skills in modern front-end frameworks (React), type safety with TypeScript, and backend services with Firebase for real-time data handling and user authentication.
			9. MERN Bookstore (2024): Raed built a full-stack bookstore application using the MERN stack (MongoDB, Express.js, React, and Node.js). This project involved creating a responsive UI for browsing and purchasing books, setting up a backend server to handle requests, and integrating a database for storing book information and user data. This project enhanced Raed’s understanding of full-stack development and his ability to build scalable web applications.`],
			
		["Courses", "The Introduction to Cybersecurity course (Cisco) has been highly impactful for Raed. This course provided him with essential knowledge about network security, including understanding vulnerabilities, encryption techniques, and methods to protect data from cyber threats. Raed's exposure to cybersecurity aligns with his interest in building secure software systems, making this knowledge valuable in an era where data protection is critical."],
		
		["Extra Cultural Activities", "Raed’s involvement with the IEEE Students Branch and other extracurricular activities has significantly contributed to his professional development. Through these activities, Raed has honed his leadership and teamwork skills, gained exposure to the latest technological advancements, and built a network with like-minded professionals. His volunteer work, such as participating in the Egyptian Food Bank and the El Warsha x Darb 1718 exhibition, has instilled in him a sense of community service and social responsibility."],
		
		["Languages", "Raed's proficiency in Arabic, English, and German has enabled him to communicate effectively in multicultural environments, enhancing collaboration with colleagues from different backgrounds. His language skills have also allowed him to access a broader range of academic resources and technical documentation, making him versatile in both academic and professional settings."],
		
		["Skills", "Raed’s expertise in Microsoft Office applications such as Excel, Access, and Outlook complements his technical skills by providing him with tools for efficient project management, data analysis, and documentation. These skills are essential for organizing information, preparing reports, managing schedules, and maintaining effective communication within a team, thereby supporting his overall productivity in software development projects."],
		
		["Personal Qualities", "Raed's eagerness to learn is his most critical personal quality in a software development role. In a field that constantly evolves with new technologies and methodologies, Raed’s commitment to continuous learning allows him to adapt quickly to changes, acquire new skills, and innovate. This quality ensures that he remains a valuable asset to any team by staying updated with the latest advancements and best practices in the industry."]
	];
	

	const chatLog = document.getElementById("chat-log");
	const chatMessageDiv = document.getElementById("chat-message");
	const buttonsContainer = document.createElement("div");
	buttonsContainer.classList.add("buttons-container");
	chatMessageDiv.appendChild(buttonsContainer);
	
	setTimeout(()=>{
		buttonLabels.forEach((item, index) => {
			const button = document.createElement("button");
			button.innerText = item[0];
			button.classList.add("button");
			button.onclick = function() {
				addUserMessage(item[0]);
				setTimeout(() => addAIMessage(item[1]), 1500);
			};
			buttonsContainer.appendChild(button);
		});

		const chatBox= document.getElementById("chat-box");
		const button = document.createElement("button");
		button.classList.add("end-chat");
		button.innerText = "End Chat";
		button.style.backgroundColor = "red";
		button.style.color = "white";
		button.style.border = "none";
		button.style.padding = "10px 20px";
		button.style.marginLeft = "220px";
		button.style.fontSize = "20px";
		button.style.maxWidth = "300px"
		button.style.cursor = "pointer";
		button.style.borderRadius = "10px";
		button.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
		button.style.transition = "background-color 0.3s";
		button.addEventListener("mouseover", () => {
			button.style.backgroundColor = "darkred";
		});
		button.addEventListener("mouseout", () => {
			button.style.backgroundColor = "red";
		});
		button.onclick = function() {
			const newMessage = document.createElement("li");
			newMessage.innerHTML = `<span class="avatar bot"> User </span>
								<div class="message"> End Chat </div>`;
			chatLog.appendChild(newMessage);
			setTimeout(() => {
				const newMessage = document.createElement("li");
				newMessage.innerHTML = `<span class="avatar bot"> AI </span>
									<div class="message"> Thank you for your time. Have a great day! </div>`;
				chatLog.appendChild(newMessage);
			}, 1500);
			setTimeout(() => {
				buttonsContainer.style.display = "none";
				startButton.style.display = "block";
				button.style.display = "none";
			}, 3500);
		}
		chatBox.appendChild(button);
	}, 1500);

	
	
	function addUserMessage(message) {
		const newMessage = document.createElement("li");
		newMessage.classList.add("user-message");
		newMessage.innerHTML = `<span class="avatar bot"> User </span>
							<div class="message"> I want to ask about Raed's ${message} </div>`;
		chatLog.appendChild(newMessage);
	}
	

	function addAIMessage(message) {
		const newMessage = document.createElement("li");
		newMessage.classList.add("ai-message");
		newMessage.innerHTML = `<span class="avatar bot"> AI </span>
							<div class="message">${message} </div>`;
		chatLog.appendChild(newMessage);
	}
	

}


document.addEventListener("DOMContentLoaded", function() {
	const scrollArea = document.querySelector(".scroll-area");
  
	const scrollToBottom = () => {
	  scrollArea.scrollTop = scrollArea.scrollHeight;
	};
  
	const observer = new MutationObserver(scrollToBottom);
  
	observer.observe(scrollArea.querySelector("ul"), {
	  childList: true,
	});
  
	scrollToBottom();
  });
  



