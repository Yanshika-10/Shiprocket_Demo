import React from 'react';
import {
  HiOutlineViewGrid,
  HiUserGroup,
  HiUserAdd,
  HiOutlineLogout,
  HiQuestionMarkCircle,
  HiDocumentText
} from 'react-icons/hi';
import { FaFileInvoice, FaFilePdf, FaFileVideo } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { BsFillBookFill } from 'react-icons/bs';
import { GrChapterAdd } from 'react-icons/gr';
import { MdOutlineSubject } from 'react-icons/md';
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { HiDocumentDuplicate } from "react-icons/hi2";
import { PiExam } from "react-icons/pi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/admin/dashboard',
    icon: <HiOutlineViewGrid />
  },
 
  {
    key: 'class',
    label: 'Class',
    path: '/admin/classes',
    icon: <SiGoogleclassroom />
  },
  {
    key: 'course',
    label: 'Subject',
    path: '/admin/subject',
    icon: <BsFillBookFill />
  },
  {
    key: 'chapter',
    label: 'Chapter',
    path: '/admin/chapter',
    icon: <GrChapterAdd />
  },
  {
    key: 'course1',
    label: 'Topic',
    path: '/admin/topic',
    icon: <MdOutlineSubject />
  },
  {
    key: 'studycontent',
    label: 'Study Content',
    path: '/admin/studycontent',
    icon: <FaFilePdf />
  },
 
  {
    key: 'question',
    
    label: 'Quiz Test',
 
    icon: <BsFillQuestionSquareFill />,
    subLinks: [
      {
        key: 'category',
        label: 'Category',
        path: '/admin/question/examcategory',
        icon: <HiDocumentDuplicate />
      },
      {
        key: 'subcategory',
        label: 'SubCategory',
        path: '/admin/question/examsubcategory',
        icon: <HiDocumentDuplicate />
      },
      {
        key: 'questions',
        label: 'Questions Bank',
        path: '/admin/question/questionbank',
        icon: <HiDocumentDuplicate />
      },
      {
        key: 'answers',
        label: 'Online Exams',
        path: '/admin/question/onlineexam',
        icon: <PiExam />,
      }, 
      
    ],
  },
  {
    key: 'demo',
    label: 'Demo',
    path: '/admin/demo',
    icon: <FaFilePdf />
  },
];

// export const DASHBOARD_SIDEBAR_SETTING_LINKS = [
//   {
//     id: 1,
//     name: 'My Profile',
//     link: 'myprofile',
//     areaHidden: ''
//   },
//   {
//     id: 2,
//     name: 'Roles & Permission',
//     link: 'rolesandpermission',
//     areaHidden: ''
//   }
// ];
