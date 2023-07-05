import { StyledComments } from './style'
import { useEffect, useState } from 'react'
import { localAPI } from '../../services/index'
import { SoloComment } from '../SoloComment'

const CommentsList = () => {
    const [ commentsArray, setCommentsArray] = useState<any[]>([])

    useEffect(() => {
        getProductComments()
    }, [])

    const getProductComments = async () => {
        try {
            const response = await localAPI.get<any>("comments")
            setCommentsArray(response.data)
			console.log(response.data)
        }
        catch (error) {
            console.error("Erro ao obter comentários", error)
        }
    }

	return (
		<StyledComments>
			<ul>
				<h2>Comentarios</h2>
				{commentsArray.map((comment: any, index: number) => {
                    return <SoloComment comment={comment} key={index} />
                })}
			</ul>
			<div className='add-comment'>
				<div className='user-info-comment'>
					<img
						src=''
						alt=''
					/>
					<h3>Samuel Leão</h3>
				</div>
				<div className='comment-input'>
					<textarea />
					<button>Comentar</button>
				</div>
				<div className='suggestions'>
					<p>Gostei muito</p>
					<p>Incrivel</p>
					<p>Recomendarei para meus amigos</p>
				</div>
			</div>
		</StyledComments>
	)
}

export default CommentsList