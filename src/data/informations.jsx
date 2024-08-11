import reactjs from '../../src/assets/ReactLogo.png'
import html from '../../src/assets/HTML.png'
import css from '../../src/assets/css.png'
import bootstrap from '../../src/assets/bootstrap.png'
import js from '../../src/assets/js.png'
import nextjs from '../../src/assets/nextjs.png'
import tailwindcss from '../../src/assets/tailwind.png'
import typescript from '../../src/assets/typescript.png'
import weatherapp from '../../src/assets/weatherapp.png'
import calculatorapp from '../../src/assets/calculatorapp.png'
import cartapp from '../../src/assets/cartapp.png'
import ecommerceapp from '../../src/assets/ecommerceapp.png'
import porfolio from '../../src/assets/portfolio.jpg'
import mustang from '../../src/assets/mustang.png'
import pu from '../../src/assets/pu.png'
import ns from '../../src/assets/ns.png'
import tinpatan from '../../src/assets/tinpatan.png'
import bardibas from '../../src/assets/bardibas.png'
import puLogo from '../../src/assets/puLogo.png'
import php from '../../src/assets/php.png'
import nodejs from '../../src/assets/nodejs.png'
import expressjs from '../../src/assets/expressjs.png'
import mysql from '../../src/assets/mysql.png'
import mongodb from '../../src/assets/mongodb.png'
import todolist from '../../src/assets/todolist.png'

export const intro ={
    name:"Kshitiz Rajan",
    roles:[
        "Web Developer",
        "Moto Vlogger"
    ],
    description:
    "In this portfolio, you'll find a web developer and motovlogger ready to assist you.",

    github:"https://github.com/kshitizrajan7",
    resume:"make a resume and add the link here",
    linkedin:"https://www.linkedin.com/in/kshitiz-magar-7830a22a7/",
    instagram:"https://www.instagram.com/kshitizrajanrides/?next=%2F",
    facebook:"https://www.facebook.com/profile.php?id=61550560747070"
};

export const skills=[
    {
        title: "Frontend",
        skills: [
            {
                name:"React JS",
                image:reactjs
            },
            {
                name: "NextJS",
                image:nextjs
            },
            {
                name: "TypeScript",
                image:typescript
            },
            {
                name: "Tailwind CSS",
                image:tailwindcss
            },
            {
                name:"Bootstrap",
                image:bootstrap
            }
        ]

    },
    {
        title: "Backend",
        skills: [
            {
                name:"PHP",
                image:php
            },
            {
                name: "Node JS",
                image:nodejs
            },
            {
                name: "Express JS",
                image:expressjs
            }
        ]
    },
    {
        title: "Database",
        skills: [
            {
                name:"My SQL",
                image:mysql
            },
            {
                name: "Mongo DB",
                image:mongodb
            }
        ]
    }
]

// export const experiences =[
//     {
//         id:0,
//         img:"",
//         role:"Student",
//         company:"",
//         date:"zxc",
//         desc:"zxc",
//         skills:[
//             "React JS",
//             "HTML",
//             "CSS",
//             "JS"
//         ],
//         doc:"link"

//     },
//     {
//         id:1,
//         img:"zxc",
//         role:"zxc",
//         company:"zxc",
//         date:"zxc",
//         desc:"zxc",
//         skills:[
//             "React JS",
//             "HTML",
//             "CSS",
//             "JS"
//         ],
//         doc:"link"

//     }
// ]

export const projects =[
    {
        id:10,
        title:"TodoList",
        date:"2023-2024",
        description:"Todolist using Typescript, tailwindcss and nextjs",
        img:todolist,
        tags:["TypeScript","NextJS","TailwindCSS"],
        category:"web app",
        github:"https://kshitizrajan7.github.io/todolist/",
        webapp:"zxc",
        // member:[
        //     {
        //         name:"Kshitiz",
        //         img:"zxc",
        //         linkedin:"link",
        //         github:"link"
        //     },
        //     {
        //         name:"rajan",
        //         img:"zxc",
        //         linkedin:"link",
        //         github:"link"
        //     }
        // ]
    },
    {
        id:0,
        title:"Weather App",
        date:"2023-2024",
        description:"Web App that used weather api to fetch dynamic data.",
        img:weatherapp,
        tags:["JavaScript","HTML","CSS","BOOTSTRAP"],
        category:"web app",
        github:"https://KshitizRajan7.github.io/weatherapp",
        webapp:"zxc",
        // member:[
        //     {
        //         name:"Kshitiz",
        //         img:"zxc",
        //         linkedin:"link",
        //         github:"link"
        //     },
        //     {
        //         name:"rajan",
        //         img:"zxc",
        //         linkedin:"link",
        //         github:"link"
        //     }
        // ]
    },
    {
        id:1,
        title:"Portfolio",
        date:"2023-2024",
        description:"Porfolio that provides information about the user.",
        img:porfolio,
        tags:["JavaScript","HTML","CSS","BOOTSTRAP"],
        category:"web app",
        github:"https://KshitizRajan7.github.io/pf",
        webapp:"zxc"
    },
    {
        id:2,
        title:"Cart App",
        date:"2023-2024",
        description:"Can be used in Ecommerce apps.",
        img:cartapp,
        tags:["JavaScript","HTML","CSS","BOOTSTRAP"],
        category:"web app",
        github:"https://KshitizRajan7.github.io/cartapp",
        webapp:"zxc"
    },
    {
        id:3,
        title:"Calculator App",
        date:"2023-2024",
        description:"Performs basic mathematical calculations.(in process..)s",
        img:calculatorapp,
        tags:["JavaScript","HTML","CSS","BOOTSTRAP"],
        category:"Web App",
        github:"https://github.com/KshitizRajan7/Calculator",
        webapp:"zxc"
    },
    {
        id:4,
        title:"Ecommerce App",
        date:"2023-2024",
        description:"In process..",
        img:ecommerceapp,
        tags:["JavaScript","HTML","CSS","BOOTSTRAP"],
        category:"web app",
        github:"https://github.com/KshitizRajan7/Ecommerce",
        webapp:"zxc"
    },
    {
        id:5,
        title:"Tinpaatan Gaupalika, Sindhuli",
        date:"2023-2024",
        description:"A small journey in search of peace.",
        img:tinpatan,
        tags:["CapCut","Gopro hero 9","Bolano Microphone"],
        category:"youtube documentry",
        github:"https://www.youtube.com/watch?v=R6ZK2AYnvdk&t=49s",
        webapp:"zxc"
    },
    {
        id:6,
        title:"Mustang",
        date:"2023-2024",
        description:"Almost travelled 1100kms in total.",
        img:mustang,
        tags:["CapCut","Gopro hero 9","Bolano Microphone"],
        category:"youtube documentry",
        github:"https://www.youtube.com/watch?v=Wr5ooD3NqKU&t=4s",
        webapp:"zxc"
    },
    {
        id:7,
        title:"NS200 after 6 years of ownership.",
        date:"2023-2024",
        description:"The result is still too good.",
        img:ns,
        tags:["CapCut","Gopro hero 9","Bolano Microphone"],
        category:"youtube documentry",
        github:"https://www.youtube.com/watch?v=E9ePk7j3m0k",
        webapp:"zxc"
    },
    {
        id:8,
        title:"Purbanchal University Convocation 2024",
        date:"2023-2024",
        description:"Pubanchal university convocation.",
        img:pu,
        tags:["CapCut","Gopro hero 9","Bolano Microphone"],
        category:"youtube documentry",
        github:"https://www.youtube.com/watch?v=Z6waKcWFUQs&t=12s",
        webapp:"zxc"
    },
    {
        id:9,
        title:"Bardibas",
        date:"2023-2024",
        description:"Provides information about vehicle document renewal.",
        img:bardibas,
        tags:["CapCut","Gopro hero 9","Bolano Microphone"],
        category:"youtube documentry",
        github:"https://www.youtube.com/watch?v=QB5-g_QFo9I",
        webapp:"zxc"
    }
]

export const education =[
    {
        id:0,
        img:puLogo,
        school:"Purbanchal University Faculty of Science And Technology ",
        date:"2018 - 2022",
        grade:"3.11 CGPA",
        desc:"Learned much more about the fundamentals of Science and  Technology.",
        degree:"Bachelors in Computer Application."
    },
    {
        id:1,
        img:puLogo,
        school:"Purbanchal University Faculty of Science and Technology",
        date:"running",
        grade:"#",
        desc:"Its all about the deep research of Informtion Technology",
        degree:"Masters in Information Technology"
    }
]