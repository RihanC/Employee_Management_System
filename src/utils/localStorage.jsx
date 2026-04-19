const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Dashboard UI",
        taskDescription: "Improve layout and responsiveness",
        taskDate: "2026-04-18",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve authentication issue",
        taskDate: "2026-04-15",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate payment gateway API",
        taskDate: "2026-04-10",
        category: "Backend"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Test Cases",
        taskDescription: "Cover user authentication module",
        taskDate: "2026-04-18",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve DB performance",
        taskDate: "2026-04-17",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve UI glitches",
        taskDate: "2026-04-14",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deploy to production",
        taskDate: "2026-04-12",
        category: "DevOps"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Wireframes",
        taskDescription: "Design initial product screens",
        taskDate: "2026-04-18",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Discuss requirements",
        taskDate: "2026-04-16",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prototype Testing",
        taskDescription: "Test UI prototype",
        taskDate: "2026-04-13",
        category: "Testing"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Auth",
        taskDescription: "JWT authentication setup",
        taskDate: "2026-04-18",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review team PRs",
        taskDate: "2026-04-17",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS Issues",
        taskDescription: "Resolve styling bugs",
        taskDate: "2026-04-14",
        category: "Frontend"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Market Research",
        taskDescription: "Analyze competitors",
        taskDate: "2026-04-18",
        category: "Business"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare Report",
        taskDescription: "Monthly analytics report",
        taskDate: "2026-04-15",
        category: "Analysis"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Campaign Launch",
        taskDescription: "Launch ad campaign",
        taskDate: "2026-04-11",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Follow-up",
        taskDescription: "Check client feedback",
        taskDate: "2026-04-17",
        category: "Communication"
      }
    ]
  }
]

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
]