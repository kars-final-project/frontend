
export const SoloComment = ({ comment }: any) => {
    let message = ``
    const currentTime = new Date()
    const commentTime = new Date(comment.created_at)
    const timeSince = currentTime - commentTime
    const commentCreatedSince = timeSince/(1000 * 3600 * 24)
    if (commentCreatedSince < 1){
        message = `há ${(commentCreatedSince * 24).toFixed(0)} horas`
    }
    if (commentCreatedSince < 30){
        message = `há ${commentCreatedSince.toFixed(0)} dias`
    }
    if (commentCreatedSince >= 30){
        message = `há ${(commentCreatedSince / 30).toFixed(0)} meses`
    }

    return (
        <li>
            <div className="user-info">
                <img src="" alt="" />
                <h3>{comment.user_id}</h3>
                <span></span>
                <p>{message}</p>
                <p>{comment.comment}</p>
            </div>
        </li>
    )
}