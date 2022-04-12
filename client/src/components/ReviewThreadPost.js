import { useUI } from "context/ui.context";
import RatingStars from "./common/RatingStars";
import Button from "./ui/Button";

function ReviewThreadPost(props) {
	const { id, author, postedOn, postRating, postContent } = props;
	const { openModal, closeModal, setModalView } = useUI();

	const handleReply = () => {
		setModalView("COMMENT_VIEW");
		openModal();
	};

	return (
		<li key={id}>
			<figure className="comment-thumb">
				<img src={require(`assets/images/img20.jpg`)} alt="" />
			</figure>
			<div className="comment-content">
				<div className="comment-header">
					<h5 className="author-name">{author}</h5>
					<span className="post-on">{postedOn}</span>
					<div className="rating-wrap">{postRating && <RatingStars rating={postRating} />}</div>
				</div>
				<p>{postContent}</p>
				<Button styleClassNames="btn-small" type="button" onClick={handleReply}>
					<i className="fas fa-reply" /> Reply
				</Button>
			</div>
		</li>
	);
}

export default ReviewThreadPost;
