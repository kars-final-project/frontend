import { useState } from 'react'
import { EditComment } from '../modals/editCommentModal'

export const SoloComment = ({ comment }: any) => {
	let message = ``
	const currentTime = new Date()
	const commentTime = new Date(comment.created_at)
	const timeSince = currentTime - commentTime
	const commentCreatedSince = timeSince / (1000 * 3600 * 24)
	if (commentCreatedSince <= 1) {
		message = `há ${(commentCreatedSince * 24).toFixed(0)} hora(s)`
	}
	if (commentCreatedSince > 1) {
		message = `há ${commentCreatedSince.toFixed(0)} dia(s)`
	}
	if (commentCreatedSince >= 30) {
		message = `há ${(commentCreatedSince / 30).toFixed(0)} mes(es)`
	}

	const [ showEditCommentModal, setShowEditCommentModal ] = useState(false)

    const changeEditCommentModalState = () => {
        setShowEditCommentModal((prevState) => !prevState);
    };

	return (
		<li>
			<div className='user-info'>
				<div className='row-div'>
					<img
						src={comment.user.user_image}
						alt=''
					/>
					<h3>{comment.user.name}</h3>
					<span className='comment-span'> ● </span>
					<p className='date-info'>{message}</p>
					<button onClick={changeEditCommentModalState}> Editar </button>
				</div>
				<p className='comment-text'>{comment.comment}</p>
			</div>
            {showEditCommentModal && <EditComment commentId={comment.id} />}
		</li>
	)
}
