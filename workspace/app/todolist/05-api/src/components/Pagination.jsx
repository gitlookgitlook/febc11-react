// 페이지네이션을 여러 곳에서 사용해야 되므로 재사용 가능한 컴포넌트로 만드는 것
import PropTypes from "prop-types"
import { Link, useSearchParams } from "react-router-dom"

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  current: PropTypes.number,
}

function Pagination({ totalPages, current = 1 }) {
  // 페이지 번호들을 담을 빈 배열 생성
  let pageList = []

  const [searchParams] = useSearchParams()
  // API로부터 받은 전체 페이지 수만큼 반복
  for (let page = 1; page <= totalPages; page++) {
    // 현재 URL의 쿼리 파라미터에서 page 값을 설정
    searchParams.set("page", page)

    // 설정된 쿼리 파라미터들을 문자열로 변환 => 왜? URL은 문자열이여야 브라우저가 이해할 수 있기 때문에
    let search = searchParams.toString()

    // 페이지 링크 생성하여 배열에 추가
    pageList.push(
      <li key={page} className={current === page ? "active" : ""}>
        <Link to={`/list?${search}`}>{page}</Link>
      </li>
    )
  }

  return (
    // 페이지네이션을 위한 태그
    <div className="pagination">
      <ul>{pageList}</ul>
    </div>
  )
}

export default Pagination
