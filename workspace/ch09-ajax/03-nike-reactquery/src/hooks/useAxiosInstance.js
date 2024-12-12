import axios from "axios"
import { toast } from "react-toastify"

function useAxiosInstance() {
  const instance = axios.create({
    baseURL: "https://11.fesp.shop",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json", // request의 데이터 타입
      accept: "application/json", // response의 데이터 타입
      "client-id": "00-nike",
    },
  })

  // 인터셉터: axios로 서버에 HTTP 요청을 보내기 직전이나 응답이 도착해서 리턴되기 전에 요청과 응답을 가로채서 추가적인 작업 수행 가능
  //

  // 요청 인터셉터 추가하기
  instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjQsInR5cGUiOiJ1c2VyIiwibmFtZSI6IuygnOydtOyKqCIsImVtYWlsIjoidTFAZ21haWwuY29tIiwiaW1hZ2UiOiIvZmlsZXMvMDAtbmlrZS91c2VyLWpheWcud2VicCIsImxvZ2luVHlwZSI6ImVtYWlsIiwiaWF0IjoxNzMzMjc5MjQyLCJleHAiOjE3MzMzNjU2NDIsImlzcyI6IkZFU1AifQ.-tPi9k6xr47LYH6ZRrSLbG5ihDCqfMc2_L_3CnXkBtg`
    // 요청이 전달되기 전에 필요한 공통 작업 수행
    console.log(config)
    config.params = {
      delay: 2000, // delay 값이 있으면, 그 값으로 없으면 기본값은 2초로
      ...config.params, // 기존 쿼리스트링 복사
    }
    return config
  })

  // 응답 인터셉터 추가하기
  instance.interceptors.response.use(
    (response) => {
      // 2xx 범위에 있는 상태 코드는 이 함수가 호출됨
      // 응답 데이터를 이용해서 필요한 공통 작업 수행
      if (response.data?.ok !== undefined) {
        response.data.ok = !!response.data.ok // 0 => false, 1=> true, 숫자값을 불린값으로 변환하는 방법
      }
      console.log("인터셉터", response)
      return response
    },
    (error) => {
      // 2xx 외의 범위에 있는 상태 코드는 이 함수가 호출됨
      // 공통 에러 처리
      console.error("인터셉터", error)
      const message = "잠시 후 다시 요청하세요"
      // alert(message)
      // error.message = message
      toast(message)
      return Promise.reject(error)
    }
  )

  return instance
}

export default useAxiosInstance
