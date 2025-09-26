// Portfolio Configuration File
// Update these values to customize your portfolio

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Samialla Jafar Mulla",
        title: "Mechanical Engineering Student",
        description: "Aspiring to secure a challenging role in Mechanical Engineering to apply knowledge in design, manufacturing and automation to improve efficiency and drive innovation.",
        email: "samiallamulla2002@gmail.com",
        phone: "+91 8546851090",
        location: "India",
        profileImage: "" // Optional: path to your profile image
    },

    // Social Media Links
    social: {
        github: "https://github.com/Samialla8546",
        linkedin: "https://www.linkedin.com/in/samialla-mulla-2170a020b/",
        twitter: "https://twitter.com/yourusername",
        // Add more social platforms as needed
    },

    // About Section
    about: {
        description: [
            "Aspiring to secure a challenging role in the field of Mechanical Engineering where I can apply my knowledge and design, manufacturing and automation to improve efficiency and drive innovations."
        ],
        stats: [
            { number: "8.0", label: "CGPA (BE up to 6th sem)" },
            { number: "81.6%", label: "Diploma Percentage" },
            { number: "86.40%", label: "SSLC Percentage" }
        ]
    },

    // Work Experience
    experience: [
        {
            title: "Bachelor of Engineering",
            company: "VTU",
            period: "Year of Passing: 2026",
            description: [
                "CGPA: 8.0 up to 6th semester"
            ]
        },
        {
            title: "Diploma",
            company: "DTE",
            period: "Year of Passing: 2022",
            description: [
                "Percentage: 81.6%"
            ]
        },
        {
            title: "SSLC",
            company: "KSEEB",
            period: "Year of Passing: 2019",
            description: [
                "Percentage: 86.40%"
            ]
        }
    ],

    // Projects
    projects: [
        {
            title: "Automatic Car Parking Barrier System",
            description: "Diploma project focusing on automation to control parking access using sensors and microcontrollers.",
            technologies: ["Automation", "Sensors", "Embedded"],
            image: "",
            demoLink: "#contact",
            githubLink: ""
        },
        {
            title: "Shredder: Organic Waste to Compost Converter",
            description: "Mini project (BE 5th semester) designing a shredding system to accelerate composting of organic waste.",
            technologies: ["Mechanical Design", "Manufacturing", "Sustainability"],
            image: "",
            demoLink: "#contact",
            githubLink: ""
        }
    ],

    // Skills
    skills: {
        "Engineering Design": ["Solid Edge", "Fusion 360"],
        "Soft Skills": ["Team Work", "Communication"],
        "Languages Known": ["Kannada", "English", "Hindi"]
    },

    // Contact Form Configuration
    contact: {
        // For EmailJS integration
        emailjs: {
            serviceId: "service_123abc",
            templateId: "template_xyz456",
            userId: "Fc-0m5b4YQyMSBtV6"
        },
        // For Formspree integration
        formspree: {
            formId: "" // Optional: set to your Formspree form ID to enable direct email
        }
    },

    // Theme Configuration
    theme: {
        primaryColor: "#2563eb",
        secondaryColor: "#fbbf24",
        accentColor: "#667eea",
        backgroundColor: "#f9fafb",
        darkBackground: "#1f2937"
    },

    // SEO Configuration
    seo: {
        title: "Samialla Jafar Mulla - Mechanical Engineering Portfolio",
        description: "Portfolio highlighting education, projects, skills and contact details of Samialla Jafar Mulla.",
        keywords: "Mechanical engineering, projects, Solid Edge, Fusion 360, resume",
        author: "Samialla Jafar Mulla"
    }
};

// Export configuration (for module systems)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
}

// Make configuration available globally
window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
