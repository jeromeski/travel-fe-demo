import React from "react";
import ReviewThreadPost from "./ReviewThreadPost";



function ReviewThread({ posts }) {
	return (
		<ol>
			{posts &&
				posts.map(({ id, comments, ...rest }) => {
					if (!comments) {
						return <ReviewThreadPost key={`ReviewPost:${id}`} {...rest} />;
					}
					return (
						<div key={`ReviewPost:${id}`}>
							<div>
								<ReviewThreadPost {...rest} />;
								<ol>
									{comments.map(({ id, ...rest }) => (
										<ReviewThreadPost key={`CommentPost:${id}`} {...rest} />
									))}
								</ol>
							</div>
						</div>
					);
				})}
		</ol>
	);
}

export default ReviewThread;

/*
<ReviewThreadPost key={id} {...rest} />

<li>
  <figure className="comment-thumb">
    <img src={require(`assets/images/img20.jpg`)} alt="" />
  </figure>
  <div className="comment-content">
    <div className="comment-header">
      <h5 className="author-name">Tom Sawyer</h5>
      <span className="post-on">Jan 10 2020</span>
      <div className="rating-wrap">
        <div className="rating-start" title="Rated 5 out of 5">
          <span style={{ width: "90%" }} />
        </div>
      </div>
    </div>
    <p>
      Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque
      cupidatat dolor pariatur, pariatur auctor.
    </p>
    <a href="#" className="reply">
      <i className="fas fa-reply" />
      Reply
    </a>
  </div>
</li>
<li>
  <ol>
    <li>
      <figure className="comment-thumb">
        <img src={require(`assets/images/img21.jpg`)} alt="" />
      </figure>
      <div className="comment-content">
        <div className="comment-header">
          <h5 className="author-name">John Doe</h5>
          <span className="post-on">Jana 10 2020</span>
          <div className="rating-wrap">
            <div className="rating-start" title="Rated 5 out of 5">
              <span style={{ width: "90%" }} />
            </div>
          </div>
        </div>
        <p>
          Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque
          cupidatat dolor pariatur, pariatur auctor.
        </p>
        <a href="#" className="reply">
          <i className="fas fa-reply" />
          Reply
        </a>
      </div>
    </li>
  </ol>
</li>

<li key={post.id}>
			<figure className="comment-thumb">
				<img src={require(`assets/images/img20.jpg`)} alt="" />
			</figure>
			<div className="comment-content">
				<div className="comment-header">
					<h5 className="author-name">{post.author}</h5>
					<span className="post-on">{post.postedOn}</span>
					<div className="rating-wrap">
						<div className="rating-start" title={`Rated ${post.postRating} out of 5`}>
							<span style={{ width: "90%" }} />
						</div>
					</div>
				</div>
				<p>{post.postContent}</p>
				<a href="#" className="reply">
					<i className="fas fa-reply" />
					Reply
				</a>
			</div>
		</li>
*/
