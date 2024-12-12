import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

function TodoAdd() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm()

  // handleSubmit에서 검증을 통과할 경우 호출됨
  const onSubmit = (item) => {
    console.log("서버에 전송", item)

    const timer = setTimeout(() => {
      xhr.abort() // 요청이 너무 오래 걸리면 취소
    }, 2000)

    // XMLHttpRequest 객체 생성 (서버와 통신하기 위한 객체)
    const xhr = new XMLHttpRequest()

    // POST 요청 초기화
    // URL 끝에 delay 파라미터로 의도적으로 응답을 지연시킴 (타임아웃 테스트용) // "https://todo-api.fesp.shop/api/todolist?delay=1000000000000000000000"
    xhr.open("POST", "https://todo-api.fesp.shop/api/todolist")

    // 요청 헤더에 JSON 형식으로 데이터를 보낼 것임을 명시
    xhr.setRequestHeader("Content-Type", "application/json")

    // 서버로부터 받을 응답도 JSON 형식으로 자동 변환하도록 설정
    xhr.responseType = "json"

    // 서버로부터 응답이 왔을 때 실행될 함수
    xhr.onload = () => {
      clearTimeout(timer) // 응답이 왔으므로 타임아웃 타이머 제거

      // 성공적인 응답 처리 (200번대 상태코드)
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log(xhr.response)
        alert("할일이 추가 되었습니다.")
        setFocus("title") // // title input으로 포커스 이동 - React Hook Form에서 제공하는 기능들
        reset() //  // 폼 초기화 (입력값들을 비움) - React Hook Form에서 제공하는 기능들
      } else {
        // 실패한 응답 (400, 500번대 상태코드)
        console.error("서버에서 에러 응답", xhr.status, xhr.response)
        // 서버가 보낸 에러 메시지가 있으면 그 메시지를, 없으면 기본 메시지 표시
        alert(xhr.response.error?.message || "할일 추가에 실패했습니다.")
      }
    }

    // 요청이 취소되었을 때 실행될 함수 (타임아웃으로 인한 취소 포함)
    xhr.onabort = () => {
      alert("타임 아웃")
    }

    // 네트워크 오류 발생시 실행될 함수
    xhr.onerror = () => {
      console.log("네트워크 오류")
      alert("할일 추가에 실패했습니다.")
    }

    // 실제로 서버에 데이터 전송
    // item 객체를 JSON 문자열로 변환해서 전송
    xhr.send(JSON.stringify(item))
  }

  return (
    <div id="main">
      <h2>할일 추가</h2>
      <div className="todo">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">제목 :</label>
          <input
            type="text"
            id="title"
            autoFocus
            {...register("title", {
              required: "제목을 입력하세요.",
            })}
          />
          <div className="input-error">{errors.title?.message}</div>
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea
            id="content"
            cols="23"
            rows="5"
            {...register("content", {
              required: "내용을 입력하세요.",
            })}
          />
          <div className="input-error">{errors.content?.message}</div>
          <br />
          <button type="submit">추가</button>
          <Link to="/list">취소</Link>
        </form>
      </div>
    </div>
  )
}

export default TodoAdd
