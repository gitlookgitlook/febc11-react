import Left2 from "@components/Left2"
import PropTypes from "prop-types"
import { useEffect } from "react"

function Left1({ count }) {
  // count prop 받기
  useEffect(() => {
    console.log("  # Left1 렌더링.")
  })
  return (
    <div>
      <h1>Left1</h1>
      {/* Left2에게 전달 */}
      <Left2 count={count} />
    </div>
  )
}

Left1.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Left1
