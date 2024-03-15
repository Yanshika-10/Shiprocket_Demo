
import Category from "../category/Category"
import Chapter from "../chapter/Chapter"
import Class from "../class/Class"
import Course from "../course/Course"
import Demo from "../demo/Demo"
import OnlineExam from "../onlineExam/OnlineExam"
import QuestionBank from "../questionBank/QuestionBank"
import StudyContent from "../studycontent/StudyContent"
import SubCategory from "../subCategory/SubCategory"
import Topic from "../topic/Topic"




export const routes =[
    {
        route:<Course/>,
        path:'/admin/subject'
    },
     {
         route:<Class/>,
         path:'/admin/classes'
     },
    {
        route:<StudyContent/>,
        path:'/admin/studycontent'
    },
    
    {
        route:<Chapter/>,
        path:'/admin/chapter'
    },
    {
        route:<Topic/>,
        path:'/admin/topic'
    },
    {
        route:<QuestionBank />,
        path:'/admin/question/questionbank'  
      },
      {
          route: <OnlineExam />,
          path:'/admin/question/onlineexam'  
      },
      {
          route: <Category />,
          path:'/admin/question/examcategory'  
      },
      {
          route: <SubCategory />,
          path:'/admin/question/examsubcategory'  
      },
      {
        route: <Demo />,
        path:'/admin/demo'  
      },
 
]

// export const employeeRoutes = [
//     {
//         route:<ProfileEdit/>,
//         path:'profileview'
//     },
//     {
//         route:<UpdatePassword/>,
//         path:'updatepassword'
//     },
// ]