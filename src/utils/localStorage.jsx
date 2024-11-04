const employee=[
    {
        "id": 1,
        "name": "Alice Johnson",
        "email": "employee1@example.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "new": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "new": true,
                "completed": false,
                "failed": false,
                "title": "Prepare Monthly Report",
                "category": "Reports",
                "description": "Compile and analyze monthly financial data.",
                "date": "2024-11-05"
            },
            {
                "active": false,
                "new": false,
                "completed": true,
                "failed": false,
                "title": "Team Meeting",
                "category": "Meetings",
                "description": "Discuss project progress and timelines.",
                "date": "2024-11-02"
            },
            {
                "active": false,
                "new": false,
                "completed": false,
                "failed": true,
                "title": "Client Presentation",
                "category": "Presentations",
                "description": "Present Q3 results to the client.",
                "date": "2024-10-28"
            }
        ]
    },
    {
        "id": 2,
        "name": "Bob Smith",
        "email": "employee2@example.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "new": 2,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "new": true,
                "completed": false,
                "failed": false,
                "title": "Database Optimization",
                "category": "Development",
                "description": "Optimize database queries for performance improvement.",
                "date": "2024-11-06"
            },
            {
                "active": false,
                "new": false,
                "completed": true,
                "failed": false,
                "title": "Project Kick-off",
                "category": "Meetings",
                "description": "Initiate new project with stakeholders.",
                "date": "2024-11-01"
            },
            {
                "active": false,
                "new": true,
                "completed": false,
                "failed": false,
                "title": "Review Code",
                "category": "Quality Assurance",
                "description": "Review code submitted by junior developers.",
                "date": "2024-11-03"
            }
        ]
    },
    {
        "id": 3,
        "name": "Clara Williams",
        "email": "employee3@example.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "new": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "new": false,
                "completed": false,
                "failed": false,
                "title": "Prepare Sales Forecast",
                "category": "Sales",
                "description": "Develop sales forecast for the next quarter.",
                "date": "2024-11-07"
            },
            {
                "active": false,
                "new": false,
                "completed": true,
                "failed": false,
                "title": "Client Follow-up",
                "category": "Customer Service",
                "description": "Follow up with clients on feedback.",
                "date": "2024-10-30"
            }
        ]
    },
    {
        "id": 4,
        "name": "David Brown",
        "email": "employee4@example.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "new": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "new": true,
                "completed": false,
                "failed": false,
                "title": "Market Research",
                "category": "Research",
                "description": "Conduct research on emerging market trends.",
                "date": "2024-11-09"
            },
            {
                "active": false,
                "new": false,
                "completed": false,
                "failed": true,
                "title": "Budget Planning",
                "category": "Finance",
                "description": "Plan budget for the upcoming fiscal year.",
                "date": "2024-10-20"
            },
            {
                "active": false,
                "new": false,
                "completed": true,
                "failed": false,
                "title": "Employee Onboarding",
                "category": "HR",
                "description": "Assist with onboarding of new employees.",
                "date": "2024-10-25"
            }
        ]
    },
    {
        "id": 5,
        "name": "Emma Davis",
        "email": "employee5@example.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "new": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "new": true,
                "completed": false,
                "failed": false,
                "title": "Website Redesign",
                "category": "Design",
                "description": "Update the design of the company website.",
                "date": "2024-11-15"
            },
            {
                "active": true,
                "new": false,
                "completed": false,
                "failed": false,
                "title": "System Backup",
                "category": "IT",
                "description": "Ensure all systems are backed up and secure.",
                "date": "2024-11-02"
            },
            {
                "active": false,
                "new": false,
                "completed": true,
                "failed": false,
                "title": "Annual Report",
                "category": "Reports",
                "description": "Compile and finalize the annual report.",
                "date": "2024-10-31"
            }
        ]
    }
]

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }    
]
    
export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employee))
    localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return{employees,admin}
  
}