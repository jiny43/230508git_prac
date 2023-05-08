import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD:src/NavBar.js
import MainFeedContents from "../components/MainFeedContents";
import ReviewPage from "./ReviewPage";
=======
import MainFeedContents from "./MainFeedContents";
import ReviewPage from "../src/ReviewPage";
>>>>>>> nowkwon97/issuetest:components/NavBar.js
=======
import MainFeedContents from "../components/MainFeedContents";
import ReviewPage from "./ReviewPage";
>>>>>>> origin/0507
import TopMenu from "./TopMenu";

const navBarStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  listStyleType: "none",
  padding: "0",
  margin: '0',
  marginTop: '50px'
};

// 테스트를 위한 임시 코드
const Page1 = () => <h1>실시간, 인기 리뷰 피드</h1>;
const Page2 = () => <h1>챌린지 피드</h1>;
const Page3 = () => <h1>글작성 피드</h1>;
const Page4 = () => <h1>검색 피드</h1>;
const Page5 = () => <h1>내 정보 피드</h1>;

const NavBar = () => {
  return (
    <nav>
      <ul style={navBarStyle}>
        <li>
          <Link to="/"><svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.16 6.86781C23.9434 5.54048 26.0567 5.54048 26.84 6.86781L30.915 13.7732C31.2161 14.2834 31.7619 14.6402 32.3942 14.7403L40.9504 16.0945C42.5952 16.3548 43.2481 18.1636 42.0875 19.2443L36.0498 24.8663C35.6036 25.2816 35.3952 25.8591 35.4848 26.4311L36.6979 34.1734C36.9311 35.6616 35.2213 36.7794 33.7209 36.12L25.9142 32.6893C25.3373 32.4356 24.6627 32.4356 24.0858 32.6893L16.2792 36.12C14.7787 36.7794 13.069 35.6616 13.3022 34.1734L14.5152 26.4311C14.6049 25.8591 14.3964 25.2816 13.9503 24.8663L7.91245 19.2443C6.75187 18.1636 7.40491 16.3548 9.0496 16.0945L17.6059 14.7403C18.2382 14.6402 18.7839 14.2834 19.085 13.7732L23.16 6.86781Z" stroke="#1B1B1B" stroke-width="1.5"/>
          </svg>
          </Link>
        </li>
        <li>
          <Link to="/page2"><svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.65 22.0513L5 28.535L10.05 29.9975L13.1833 34.125L17.8833 27.5925" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M30.35 22.0513L35 28.535L29.95 29.9975L26.8166 34.125L22.1166 27.5925" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M32.1333 16.25C32.1333 17.485 31.0166 18.525 30.65 19.63C30.2833 20.735 30.5333 22.2463 29.8166 23.205C29.1 24.1638 27.5666 24.375 26.6666 25.09C25.7666 25.805 25 27.1375 23.8333 27.5113C22.6666 27.885 21.35 27.17 20.0833 27.17C18.8166 27.17 17.4666 27.8688 16.3333 27.5113C15.2 27.1538 14.4833 25.7725 13.5 25.09C12.5166 24.4075 10.9833 24.1638 10.2666 23.205C9.54997 22.2463 9.81664 20.7675 9.4333 19.63C9.04997 18.4925 7.86664 17.485 7.86664 16.25C7.86664 15.015 8.98331 13.975 9.34997 12.87C9.71664 11.765 9.46664 10.2538 10.1833 9.29501C10.9 8.33626 12.4333 8.12501 13.4166 7.41001C14.4 6.69501 15 5.36251 16.25 4.98876C17.5 4.61501 18.7333 5.33001 20 5.33001C21.2666 5.33001 22.6166 4.63126 23.75 4.98876C24.8833 5.34626 25.6 6.72751 26.6666 7.41001C27.7333 8.09251 29.1833 8.33626 29.9 9.29501C30.6166 10.2538 30.35 11.7325 30.7333 12.87C31.1166 14.0075 32.1333 15.015 32.1333 16.25ZM20 21.125C19.0111 21.125 18.0444 20.8391 17.2221 20.3034C16.3999 19.7677 15.759 19.0064 15.3806 18.1156C15.0021 17.2248 14.9031 16.2446 15.096 15.2989C15.289 14.3533 15.7652 13.4846 16.4644 12.8029C17.1637 12.1211 18.0546 11.6568 19.0245 11.4687C19.9944 11.2806 20.9998 11.3771 21.9134 11.7461C22.827 12.1151 23.6079 12.7399 24.1573 13.5416C24.7067 14.3433 25 15.2858 25 16.25C25 17.5429 24.4732 18.7829 23.5355 19.6972C22.5978 20.6114 21.3261 21.125 20 21.125Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </Link>
        </li>
        <li>
          <Link to="/page3"><svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5417 40.25H41.125" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M33.0655 9.24557C30.3845 6.94566 26.2889 7.18638 23.9156 9.78455C23.9156 9.78455 12.1199 22.697 8.02952 27.1789C3.9338 31.6583 6.93607 37.8465 6.93607 37.8465C6.93607 37.8465 13.6966 39.9213 17.7302 35.5047C21.7665 31.0879 33.6216 18.1129 33.6216 18.1129C35.995 15.5147 35.7439 11.5455 33.0655 9.24557Z" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M27.1555 15.7073L36.0955 23.3486" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </Link>
        </li>
        <li>
          <Link to="/page4"><svg width="39" height="47" viewBox="0 0 39 47" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 5.38541H8.125C6.10571 5.38541 4.46875 7.35815 4.46875 9.79166V15.6667C4.46875 18.1002 6.10571 20.0729 8.125 20.0729H13C15.0193 20.0729 16.6562 18.1002 16.6562 15.6667V9.79166C16.6562 7.35815 15.0193 5.38541 13 5.38541Z" stroke="#1B1B1B" stroke-width="1.5"/>
          <path d="M30.875 5.38541H26C23.9807 5.38541 22.3438 7.35815 22.3438 9.79166V15.6667C22.3438 18.1002 23.9807 20.0729 26 20.0729H30.875C32.8943 20.0729 34.5312 18.1002 34.5312 15.6667V9.79166C34.5312 7.35815 32.8943 5.38541 30.875 5.38541Z" stroke="#1B1B1B" stroke-width="1.5"/>
          <path d="M30.875 26.9271H26C23.9807 26.9271 22.3438 28.8998 22.3438 31.3333V37.2083C22.3438 39.6418 23.9807 41.6146 26 41.6146H30.875C32.8943 41.6146 34.5312 39.6418 34.5312 37.2083V31.3333C34.5312 28.8998 32.8943 26.9271 30.875 26.9271Z" stroke="#1B1B1B" stroke-width="1.5"/>
          <path d="M13 26.9271H8.125C6.10571 26.9271 4.46875 28.8998 4.46875 31.3333V37.2083C4.46875 39.6418 6.10571 41.6146 8.125 41.6146H13C15.0193 41.6146 16.6562 39.6418 16.6562 37.2083V31.3333C16.6562 28.8998 15.0193 26.9271 13 26.9271Z" stroke="#1B1B1B" stroke-width="1.5"/>
          </svg>
          </Link>
        </li>
        <li>
          <Link to="/page5"><svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.6875 11.5C26.6875 14.9403 24.1411 17.7292 21 17.7292C17.8589 17.7292 15.3125 14.9403 15.3125 11.5C15.3125 8.05973 17.8589 5.27084 21 5.27084C24.1411 5.27084 26.6875 8.05973 26.6875 11.5Z" stroke="#1B1B1B" stroke-width="1.5"/>
          <path d="M31.9375 32.5833C31.9375 34.6449 30.8716 36.6471 28.8991 38.19C26.9293 39.7312 24.1407 40.7292 21 40.7292C17.8593 40.7292 15.0707 39.7312 13.1008 38.19C11.1284 36.6471 10.0625 34.6449 10.0625 32.5833C10.0625 30.5218 11.1284 28.5196 13.1008 26.9767C15.0707 25.4355 17.8593 24.4375 21 24.4375C24.1407 24.4375 26.9293 25.4355 28.8991 26.9767C30.8716 28.5196 31.9375 30.5218 31.9375 32.5833Z" stroke="#1B1B1B" stroke-width="1.5"/>
          </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <div>
<<<<<<< HEAD
<<<<<<< HEAD:src/NavBar.js
      
      <TopMenu/>
=======
>>>>>>> nowkwon97/issuetest:components/NavBar.js
=======
      
      <TopMenu/>
>>>>>>> origin/0507
        <Routes>
          <Route path="/" element={<MainFeedContents />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<ReviewPage />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
        </Routes>
        <div>
          <NavBar />
        </div>
      
    </div>
  );
};

export default App;
