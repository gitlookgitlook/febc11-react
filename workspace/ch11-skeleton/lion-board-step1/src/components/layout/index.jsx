import Footer from "@components/layout/Footer"
import Header from "@components/layout/Header"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <Header />
      <Outlet /> {/* 여기에 자식 라우트의 컴포넌트가 렌더링됩니다 */}
      <Footer />
    </div>
  )
}
