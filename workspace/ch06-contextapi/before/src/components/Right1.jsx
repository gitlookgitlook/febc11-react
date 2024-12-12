import Right2 from "@components/Right2"
import PropTypes from "prop-types"
import { useEffect } from "react"

function Right1({ countUp }) {
  // onCountUp prop 받기
  useEffect(() => {
    console.log("  # Right1 렌더링.")
  })
  return (
    <div>
      <h1>Right1</h1>
      {/* Right2에게 전달 */}
      <Right2 countUp={countUp} />
    </div>
  )
}

Right1.propTypes = {
  countUp: PropTypes.func.isRequired,
}

export default Right1
