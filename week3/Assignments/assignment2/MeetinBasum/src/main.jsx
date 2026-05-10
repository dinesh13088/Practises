import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import NewMeeting from "./components/NewMeeting/NewMeering.jsx"
import JoinMeeting from "./components/JoinMeeting/JoinMeeting.jsx";
import Calendar from "./components/Calendar/Calendar.jsx";
import ScheduleMeeting from "./components/ScheduleMeeting/ScheduleMeeting.jsx";
import ProfileSetting from "./components/ProfileSetting/ProfileSetting.jsx";
import Meeting from "./components/Meetings/Meeting.jsx";
import Details from "./components/Meetings/Details/Details.jsx";
import Participants from "./components/Meetings/Participants/Participants.jsx";
import DefaultPage from "./components/DefaultPage/DefaultPage.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/new-meeting" element={<NewMeeting />}></Route>
        <Route path="/join-meeting" element={<JoinMeeting />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/schedule-meeting" element={<ScheduleMeeting />}></Route>
        <Route path="/profile-setting" element={<ProfileSetting />}></Route>
        
        <Route path="/meetings/:meetingId" element={<Meeting />}>
          <Route index element={<Details/>}></Route>
          <Route path="/meetings/:meetingId/details" element={<Details/>}></Route>
          <Route path="/meetings/:meetingId/participants" element={<Participants/>}></Route>
        </Route>
        <Route path="*" element={<DefaultPage/>}></Route>
      </Route>

    </Routes>
  </BrowserRouter>
)
