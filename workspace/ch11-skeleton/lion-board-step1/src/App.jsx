import { RouterProvider } from "react-router"
import router from "@/routes"

{
  /* <RouterProvider router={router} />는 React Router v6.4+ 에서 라우터를 앱에 연결하는 컴포넌트입니다.
간단히 말하면: routes.jsx에서 만든 라우터 설정을 실제로 적용하는 컴포넌트입니다.
앱의 최상위 레벨(보통 main.jsx나 App.jsx)에서 사용됩니다.
router prop으로 createBrowserRouter()로 만든 라우터 객체를 받습니다. */
}

// 앱 전체에 라우팅 기능이 적용됩니다.
// URL이 변경될 때마다 해당하는 컴포넌트를 자동으로 렌더링합니다.
// 라우터에 정의된 Layout과 페이지 구조가 실제로 동작하게 됩니다.

// 즉, RouterProvider는 우리가 정의한 라우팅 설정을 실제로 작동하게 만드는 "연결고리" 역할을 한다고 보시면 됩니다.

function App() {
  return <RouterProvider router={router} /> // 라우터 적용
}

export default App
