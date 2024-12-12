import Left3 from "@components/Left3"
import PropTypes from "prop-types"
import { useEffect } from "react"

function Left2({ count }) {
  // count prop 받기
  useEffect(() => {
    console.log("    # Left2 렌더링.")
  })
  return (
    <div>
      <h2>Left2</h2>
      {/* Left3에게 전달 */}
      <Left3 count={count} />
    </div>
  )
}

Left2.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Left2
