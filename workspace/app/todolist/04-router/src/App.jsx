import { RouterProvider } from "react-router-dom"
import router from "./routes"
import { Suspense } from "react"
// import router from "./routes-lazy";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </Suspense>
  )
}

export default App
