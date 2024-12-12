import { useCallback, useEffect, useState } from "react"
import Product from "./Product"
import Shipping from "./Shipping"
import { FadeLoader } from "react-spinners"

function App() {
  console.log("App 렌더링")

  // const data = useMemo(
  //   () => ({
  //     _id: 2,
  //     price: 125000,
  //     shippingFees: 3000,
  //     name: "나이키 잼",
  //     quantity: 35,
  //     buyQuantity: 10,
  //     mainImage: "/files/00-nike/NIKE_JAM_01.jpg",
  //     content:
  //       "나이키가 세계적인 무대에 오르는 브레이크 댄서를 위해 제작한 첫 신발인 잼과 함께 몸과 마음, 정신을 하나로 만들어 보세요. 신발의 모든 디테일을 꼼꼼히 제작했기 때문에 자신 있게 사이퍼에 도전할 수 있습니다. 유연하고 내구성이 뛰어난 갑피가 몸을 따라 움직이며, 중창의 텍스처 처리된 핸드 그립 덕분에 공중에서 신발을 쉽게 잡을 수 있습니다. 그리고 위아래가 뒤집힌 로고를 배치해 프리즈 동작을 할 때 로고가 똑바로 보이는 재미를 더했죠.",
  //   }),
  //   []
  // )

  // 데이터 Ajax통신으로 서버에서 가져오겠다!
  const [data, setData] = useState() // 1. 마운트 - 지정안해서 값은 undefined
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async (_id) => {
    setIsLoading(true)
    try {
      // ?delay=1000와 같은 딜레이 값은 주로 요청 처리 시간을 지연시키기 위해 사용됨
      const res = await fetch(`https://11.fesp.shop/products/${_id}?delay=3000`, {
        headers: {
          "client-id": "00-nike",
        },
      })
      console.log("res", res)
      const jsonData = await res.json()
      console.log("jsonData", jsonData)

      if (res.ok) {
        setData(jsonData.item) // 4. 마운트 후에 화면을 갱신해줌
        setError(null) // 만약 이전 요청에서 에러가 발생했지만, 이후 요청이 성공하면 에러 메시지가 여전히 남아 있을 수 있습니다. 이를 방지하기 위해 새로운 요청을 보낼 때마다 에러 상태를 초기화합니다.
        // setIsLoading(false)
      } else {
        // 4XX, 5XX 응답 상태 코드를 받을 경우
        setError(jsonData)
        setData(null) // 이전 요청에서 성공적으로 가져온 데이터가 남아 있으면 사용자에게 혼란을 줄 수 있습니다. 이를 방지하기 위해 에러 발생 시 데이터를 초기화합니다.
      }
    } catch (err) {
      // network 에러
      console.error(err)
      setError({ message: "잠시 후 다시 요청하세요!" })
      // setIsLoading(false)
      setData(null)
    } finally {
      setIsLoading(false)
    }
  }

  // 3. (마운트 후)
  useEffect(() => {
    fetchData(4)
  }, []) // []: 이 함수는 마운트 된 이후에 최초 한 번만 실행

  const basicShippingFees = 3000

  const [quantity, setQuantity] = useState(1)
  const [shippingFees, setShippingFees] = useState(basicShippingFees)

  // 수량이 변경되면 배송비 다시 계산
  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value)
    setShippingFees(data.shippingFees * Math.ceil(newQuantity / 5))
    setQuantity(newQuantity)
  }

  const handlePayment = useCallback(() => {
    alert(`배송비 ${basicShippingFees}원이 추가됩니다. 상품을 결제하시겠습니까?`)
  }, [basicShippingFees])

  return (
    <>
      <h1>01 Nike 상품 상세 조회 - Fetch API</h1>
      {/* 2. 마운트 시 리턴 - <h1>01 Nike 상품 상세 조회</h1> */}

      {isLoading && <FadeLoader color="#b0d9ef" height={20} width={10} />}
      {error && <p>{error.message}</p>}

      {/* data가 있을 경우만 화면에 렌더링 되도록 작성 */}
      {data && (
        <div>
          <Product product={data} />

          <h2>수량 선택</h2>
          <div>
            가격: {data.price.toLocaleString()}원<br />
            수량:{" "}
            <input
              type="number"
              min="1"
              max={data.quantity - data.buyQuantity}
              value={quantity}
              onChange={handleQuantityChange}
            />
            (배송비는 5개당 {basicShippingFees.toLocaleString()}원씩 추가됩니다.)
            <br />
            상품 금액: {(data.price * quantity).toLocaleString()}원
          </div>

          <Shipping fees={shippingFees} handlePayment={handlePayment} />
        </div>
      )}
    </>
  )
}

export default App