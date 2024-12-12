// import { useParams } from "react-router-dom"

import { Link } from "react-router-dom"

export default function ListItem() {
  // const { type } = useParams()
  // // type이 'info'면 info 게시판
  // // type이 'free'면 자유 게시판
  // // type이 'qna'면 QnA 게시판

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
      <td className="p-2 text-center">2</td>
      <td className="p-2 truncate indent-4">
        <Link to="/info/2" className="cursor-pointer">
          안녕하세요.
        </Link>
      </td>
      <td className="p-2 text-center truncate">용쌤</td>
      <td className="p-2 text-center hidden sm:table-cell">29</td>
      <td className="p-2 text-center hidden sm:table-cell">2</td>
      <td className="p-2 truncate text-center hidden sm:table-cell">2024.07.05 13:39:23</td>
    </tr>
  )
}