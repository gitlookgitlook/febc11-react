// routes.jsx는 React 애플리케이션의 라우팅 구조를 정의하는 파일입니다. 모든 페이지의 경로와 구조를 한 곳에서 관리할 수 있어요.
// Layout 컴포넌트 안에 있는 <Outlet /> 위치에 따라 Home, Page1, Page2 중 현재 경로에 맞는 컴포넌트가 렌더링됩니다.
import Layout from "@components/layout"
import Detail from "@pages/board/Detail"
import Edit from "@pages/board/Edit"
import List from "@pages/board/List"
import New from "@pages/board/New"
import MainPage from "@pages/index"
import Login from "@pages/user/Login"
import Signup from "@pages/user/Signup"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // 모든 페이지는 <Layout /> 안의 <Outlet /> 위치에 렌더링됩니다.
    children: [
      // index: true는 부모 경로(여기서는 "/")와 정확히 일치할 때 보여줄 컴포넌트를 지정하는 것임.
      { index: true, element: <MainPage /> },
      // { path: "info", element: <List /> },
      // { path: "free", element: <List /> },
      // { path: "qna", element: <List /> },
      // 동적 세그먼트(Dynamic Segments)는 URL의 일부를 변수처럼 사용하는 방법입니다. : 콜론으로 시작하는 부분이 동적 세그먼트입니다.
      { path: ":type", element: <List /> },
      { path: ":type/new", element: <New /> },
      { path: ":type/:_id", element: <Detail /> },
      { path: ":type/:_id/edit", element: <Edit /> },
      { path: "users/signup", element: <Signup /> },
      { path: "users/login", element: <Login /> },
    ],
  },
])

export default router
