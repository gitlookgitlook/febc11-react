import PropTypes from "prop-types"
import { useEffect } from "react"

function Right3({ countUp }) {
  // onCountUp prop 받기
  useEffect(() => {
    console.log("      # Right3 렌더링.")
  })
  return (
    <div>
      <h3>Right3</h3>
      {/* 클릭하면 함수 실행 */}
      <button
        onClick={() => {
          countUp(1)
        }}
      >
        +1
      </button>
    </div>
  )
}

Right3.propTypes = {
  countUp: PropTypes.func.isRequired,
}

export default Right3
