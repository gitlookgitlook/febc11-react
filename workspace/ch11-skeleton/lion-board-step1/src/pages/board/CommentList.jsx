import CommentListItem from "@pages/board/CommentListItem"
import CommentNew from "@pages/board/CommentNew"

// 댓글 목록
export default function CommentList() {
  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>
      <CommentListItem />

      <CommentNew />
    </section>
  )
}
