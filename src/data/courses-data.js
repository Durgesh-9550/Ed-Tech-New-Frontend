import blaze from "../assests/courses/blaze.png";
import ignite from "../assests/courses/Ignite.png";
import inferno from "../assests/courses/inferno.png";
import one from '../assests/courses/Blaze/feature_tag.b3c29a28.svg (1).png';
import two from '../assests/courses/Blaze/feature_tag.b3c29a28.svg (2).png';
import three from '../assests/courses/Blaze/feature_tag.b3c29a28.svg (3).png';

const coursesData = [
  {
    id: 1,
    name: "Ignite",
    description: "For College Students",
    courseDetail:
      "Ignite is a comprehensive program designed to equip college students with the essential knowledge and skills of Data Structures and Algorithms (DSA), providing a solid foundation for coding interviews and career advancement.",
    highlights: [
      "Lifetime Access",
      "Live Classes",
      "Hands-On Projects",
      "Regular Assessments",
      "24x7 Doubt Solving",
      "1:1 Mentorship",
    ],
    perks: [
      {
        id: 1,
        title: "Strong foundation in",
        highlight: "Data Structures and Algorithms",
        img: one,
      },
      {
        id: 2,
        title: "Proficiency in",
        highlight: "Problem Solving Techniques",
        img: two,
      },
      {
        id: 3,
        title: "Ready for",
        highlight: "Internships and Coding Competitions",
        img: three,
      },
    ],
    curriculum: {
      module1: {
        name:"Module 1",
        title: "Foundations of Problem Solving and Algorithms",
        phases: [
          {
            name:"Phase 1",
            phase: "Orientation and Inspiration",
            topics: [
              "Course Introduction and Tools",
              "Dare to Dream: Encouragement to set personal goals",
            ],
          },
          {
            name:"Phase 2",
            phase: "Foundational Mathematics and Arrays",
            topics: [
              "Arrays and Maths",
              "Time Complexity",
              "1D and 2D Arrays",
              "Mathematical Problem-Solving Techniques",
              "Bit Manipulation",
            ],
          },
          {
            name:"Phase 3",
            phase: "Searching and Sorting Techniques",
            topics: [
              "Linear and Binary Search",
              "Sorting Algorithms (QuickSort, MergeSort, BubbleSort)",
            ],
          },
          {
            name:"Phase 4",
            phase: "Problem-Solving Paradigms",
            topics: [
              "Basics of Recursion",
              "Backtracking Strategies",
              "Two Pointers and Sliding Window Techniques",
              "Hashing and Optimization",
            ],
          },
        ],
      },
      module2: {
        name:"Module 2",
        title: "Core Data Structures and Algorithmic Strategies",
        phases: [
          {
            name:"Phase 5",
            phase: "Core Data Structures",
            topics: [
              "Stacks, Queues, and Linked Lists",
              "Trees and Binary Search Trees",
              "Heaps and Priority Queues",
              "Tries",
            ],
          },
          {
            name:"Phase 6",
            phase: "Algorithmic Paradigms",
            topics: [
              "Greedy Algorithms",
              "Dynamic Programming",
              "Graph Theory (BFS, DFS)",
            ],
          },
        ],
      },
      module3: {
        
        name:"Module 3",
        title: "Computer Science Essentials",
        phases: [
          {
            name:"Phase 7",
            phase: "Computer Science Fundamentals",
            topics: [
              "Computer Networks (Protocols and Concepts)",
              "Operating Systems (Processes, Memory Management, File Systems)",
              "Database Management Systems (SQL and Database Design)",
            ],
          },
        ],
      },
      module4: {
        name:"Module 4",
        title: "System Design and Architecture",
        phases: [
          {
            name:"Phase 8",
            phase: "System Design and Real-World Applications",
            topics: [
              "Low-Level Design",
              "High-Level Design",
            ],
          },
        ],
      },
      module5: {
        name:"Module 5",
        title: "Full Stack Development with Projects",
        phases: [
          {
            name:"Phase 9",
            phase: "Full Stack Development (MERN Stack)",
            topics: [
              "MongoDB, Express.js, React, Node.js",
              "Building a Complete Web Application",
              "Deploying and Maintaining Applications",
            ],
          },
          {
            name:"Phase 10",
            phase: "Capstone Project",
            topics: [
              "Solving Real-World Problems",
              "Integration of Frontend and Backend",
              "Deploying in a Production Environment",
            ],
          },
        ],
      },
      module6: {
        name:"Module 6",
        title: "Interview Preparation",
        phases: [
          {
            name:"Phase 11",
            phase: "Mock Interviews and Practice",
            topics: [
              "Coding Problem Walkthroughs",
              "Behavioral Interview Tips",
              "Mock Interview Sessions",
            ],
          },
        ],
      },
    },
    image: ignite,
    price:"₹ 60,000",
    discountedPrice:"₹ 45,000"
  },
  {
    id: 2,
    name: "Blaze",
    description: "For Working Professionals",
    courseDetail:
      "Blaze is a comprehensive program designed for working professionals, helping them master Data Structures and Algorithms (DSA) while balancing work responsibilities. It also includes modules on System Design and Full Stack Development.",
    highlights: [
      "Lifetime Access",
      "Industry-Relevant Projects",
      "Live Classes",
      "Regular Assessments",
      "24x7 Doubt Solving",
      "1:1 Mentorship",
    ],
    perks: [
      {
        id: 1,
        title: "Solid command on",
        highlight: "Problem Solving Skills in DS & Algo",
        img: one,
      },
      {
        id: 2,
        title: "Proficiency in",
        highlight: "System Design",
        img: two,
      },
      {
        id: 3,
        title: "Career transition to",
        highlight: "top product-based companies",
        img: three,
      },
    ],
    curriculum: {
      module1: {
        name:"Module 1",
        title: "Foundations of Problem Solving and Algorithms",
        phases: [
          {
            name:"Phase 1",
            phase: "Orientation and Inspiration",
            topics: [
              "Course Introduction and Tools",
              "Dare to Dream: Encouragement to set personal goals",
            ],
          },
          {
            name:"Phase 2",
            phase: "Foundational Mathematics and Arrays",
            topics: [
              "Arrays and Maths",
              "Time Complexity",
              "1D and 2D Arrays",
              "Mathematical Problem-Solving Techniques",
              "Bit Manipulation",
            ],
          },
          {
            name:"Phase 3",
            phase: "Searching and Sorting Techniques",
            topics: [
              "Linear and Binary Search",
              "Sorting Algorithms (QuickSort, MergeSort, BubbleSort)",
            ],
          },
          {
            name:"Phase 4",
            phase: "Problem-Solving Paradigms",
            topics: [
              "Basics of Recursion",
              "Backtracking Strategies",
              "Two Pointers and Sliding Window Techniques",
              "Hashing and Optimization",
            ],
          },
        ],
      },
      module2: {
        name:"Module 2",
        title: "Core Data Structures and Algorithmic Strategies",
        phases: [
          {
            name:"Phase 5",
            phase: "Core Data Structures",
            topics: [
              "Stacks, Queues, and Linked Lists",
              "Trees and Binary Search Trees",
              "Heaps and Priority Queues",
              "Tries",
            ],
          },
          {
            name:"Phase 6",
            phase: "Algorithmic Paradigms",
            topics: [
              "Greedy Algorithms",
              "Dynamic Programming",
              "Graph Theory (BFS, DFS)",
            ],
          },
        ],
      },
      module3: {
        
        name:"Module 3",
        title: "Computer Science Essentials",
        phases: [
          {
            name:"Phase 7",
            phase: "Computer Science Fundamentals",
            topics: [
              "Computer Networks (Protocols and Concepts)",
              "Operating Systems (Processes, Memory Management, File Systems)",
              "Database Management Systems (SQL and Database Design)",
            ],
          },
        ],
      },
      module4: {
        name:"Module 4",
        title: "System Design and Architecture",
        phases: [
          {
            name:"Phase 8",
            phase: "System Design and Real-World Applications",
            topics: [
              "Low-Level Design",
              "High-Level Design",
            ],
          },
        ],
      },
      module5: {
        name:"Module 5",
        title: "Full Stack Development with Projects",
        phases: [
          {
            name:"Phase 9",
            phase: "Full Stack Development (MERN Stack)",
            topics: [
              "MongoDB, Express.js, React, Node.js",
              "Building a Complete Web Application",
              "Deploying and Maintaining Applications",
            ],
          },
          {
            name:"Phase 10",
            phase: "Capstone Project",
            topics: [
              "Solving Real-World Problems",
              "Integration of Frontend and Backend",
              "Deploying in a Production Environment",
            ],
          },
        ],
      },
      module6: {
        name:"Module 6",
        title: "Interview Preparation",
        phases: [
          {
            name:"Phase 11",
            phase: "Mock Interviews and Practice",
            topics: [
              "Coding Problem Walkthroughs",
              "Behavioral Interview Tips",
              "Mock Interview Sessions",
            ],
          },
        ],
      },
    },
    image: blaze,
    price:"₹ 1,10,000",
    discountedPrice:"₹ 85,000"
  },
  {
    id: 3,
    name: "Inferno",
    description: "For Advanced Learners and Professionals",
    courseDetail:
      "Inferno is a specialized program for advanced learners, focusing on complex problem-solving, advanced system design, and scalable full stack application development.",
    highlights: [
      "Lifetime Access",
      "Cutting-Edge Topics",
      "Live Masterclasses",
      "Regular Code Reviews",
      "Dedicated Career Support",
      "1:1 Mentorship",
    ],
    perks: [
      {
        id: 1,
        title: "Expertise in",
        highlight: "Advanced Problem Solving and DS & Algo",
        img: one,
      },
      {
        id: 2,
        title: "Specialized knowledge in",
        highlight: "Scalable System Design",
        img: two,
      },
      {
        id: 3,
        title: "Lead in",
        highlight: "Enterprise-Level Full Stack Development",
        img: three,
      },
    ],
    curriculum: {
      module1: {
        name:"Module 1",
        title: "Foundations of Problem Solving and Algorithms",
        phases: [
          {
            name:"Phase 1",
            phase: "Orientation and Inspiration",
            topics: [
              "Course Introduction and Tools",
              "Dare to Dream: Encouragement to set personal goals",
            ],
          },
          {
            name:"Phase 2",
            phase: "Foundational Mathematics and Arrays",
            topics: [
              "Arrays and Maths",
              "Time Complexity",
              "1D and 2D Arrays",
              "Mathematical Problem-Solving Techniques",
              "Bit Manipulation",
            ],
          },
          {
            name:"Phase 3",
            phase: "Searching and Sorting Techniques",
            topics: [
              "Linear and Binary Search",
              "Sorting Algorithms (QuickSort, MergeSort, BubbleSort)",
            ],
          },
          {
            name:"Phase 4",
            phase: "Problem-Solving Paradigms",
            topics: [
              "Basics of Recursion",
              "Backtracking Strategies",
              "Two Pointers and Sliding Window Techniques",
              "Hashing and Optimization",
            ],
          },
        ],
      },
      module2: {
        name:"Module 2",
        title: "Core Data Structures and Algorithmic Strategies",
        phases: [
          {
            name:"Phase 5",
            phase: "Core Data Structures",
            topics: [
              "Stacks, Queues, and Linked Lists",
              "Trees and Binary Search Trees",
              "Heaps and Priority Queues",
              "Tries",
            ],
          },
          {
            name:"Phase 6",
            phase: "Algorithmic Paradigms",
            topics: [
              "Greedy Algorithms",
              "Dynamic Programming",
              "Graph Theory (BFS, DFS)",
            ],
          },
        ],
      },
      module3: {
        
        name:"Module 3",
        title: "Computer Science Essentials",
        phases: [
          {
            name:"Phase 7",
            phase: "Computer Science Fundamentals",
            topics: [
              "Computer Networks (Protocols and Concepts)",
              "Operating Systems (Processes, Memory Management, File Systems)",
              "Database Management Systems (SQL and Database Design)",
            ],
          },
        ],
      },
      module4: {
        name:"Module 4",
        title: "System Design and Architecture",
        phases: [
          {
            name:"Phase 8",
            phase: "System Design and Real-World Applications",
            topics: [
              "Low-Level Design",
              "High-Level Design",
            ],
          },
        ],
      },
      module5: {
        name:"Module 5",
        title: "Full Stack Development with Projects",
        phases: [
          {
            name:"Phase 9",
            phase: "Full Stack Development (MERN Stack)",
            topics: [
              "MongoDB, Express.js, React, Node.js",
              "Building a Complete Web Application",
              "Deploying and Maintaining Applications",
            ],
          },
          {
            name:"Phase 10",
            phase: "Capstone Project",
            topics: [
              "Solving Real-World Problems",
              "Integration of Frontend and Backend",
              "Deploying in a Production Environment",
            ],
          },
        ],
      },
      module6: {
        name:"Module 6",
        title: "Interview Preparation",
        phases: [
          {
            name:"Phase 11",
            phase: "Mock Interviews and Practice",
            topics: [
              "Coding Problem Walkthroughs",
              "Behavioral Interview Tips",
              "Mock Interview Sessions",
            ],
          },
        ],
      },
    },
    image: inferno,
    price:"₹ 1,45,000",
    discountedPrice:"₹ 1,20,000"
  },
];

export default coursesData;
