import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import StudentDetail from './pages/StudentDetail';
import AddStudent from './pages/AddStudent';
import Teachers from './pages/Teachers';
import TeacherDetail from './pages/TeacherDetail';
import AddTeacher from './pages/AddTeacher';
import Finance from './pages/Finance';
import Chat from './pages/Chat';
import Events from './pages/Events';
import AddEvent from './pages/AddEvent';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';
import DashboardLayout from './layouts/DashboardLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="students/:id" element={<StudentDetail />} />
          <Route path="students/add" element={<AddStudent />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="teachers/:id" element={<TeacherDetail />} />
          <Route path="teachers/add" element={<AddTeacher />} />
          <Route path="finance" element={<Finance />} />
          <Route path="chats" element={<Chat />} />
          <Route path="events" element={<Events />} />
          <Route path="events/add" element={<AddEvent />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;