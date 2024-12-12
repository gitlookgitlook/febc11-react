import PropTypes from "prop-types"
import { useEffect } from "react"

function Left3({ count }) {
  // count prop 받기
  useEffect(() => {
    console.log("      # Left3 렌더링.")
  })
  return (
    <div>
      <h3>Left3</h3>
      {/* 최종적으로 사용 */}
      <span>{count}</span>
    </div>
  )
}

Left3.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Left3
