import Right3 from "@components/Right3"
import PropTypes from "prop-types"
import { useEffect } from "react"

function Right2({ countUp }) {
  // onCountUp prop 받기
  useEffect(() => {
    console.log("    # Right2 렌더링.")
  })
  return (
    <div>
      <h2>Right2</h2>
      {/* Right3에게 전달 */}
      <Right3 countUp={countUp} />
    </div>
  )
}

Right2.propTypes = {
  countUp: PropTypes.func.isRequired,
}

export default Right2
