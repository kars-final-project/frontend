import { useState } from 'react'
import { localAPI } from '../../../services'
import { z } from 'zod'
// por algum motivo o commentId está entrando como um objeto
// para chamar a função de deletar ou editar, é preciso mandar como param commentId.commentId
// desta forma => onClick={deletePost(commentId.commentId)}
// não consegui descobrir pq ainda
// a função delete está funcionando, mas é preciso atualizar a page pra ver que o comentário foi removido
// a função update também funciona e tem o mesmo problema, é preciso atualizar a page para ver a mudança

export const EditComment = (commentId: number) => {
	const [ editText, setEditText ] = useState<string>('')

    const deletePost = async (commentId: number) => {
        try {
            await localAPI.delete(`comments/${commentId}`)
        }
        catch (error) {
            console.log('Não foi possível excluir o comentário', error)
        }
    }

	const updatePost = async (commentId: number, comment: string) => {
		try {
			const data = {
				comment: comment
			}
			await localAPI.patch(`comments/${commentId}`, data)
		}
		catch (error){
			console.error('Erro ao atualizar o comentário', error)
		}
	}

	return (
		<>
			<form >
				<div>
					<h2>Editar comentário</h2>
					<button> X </button>
				</div>
				<input
					type='text'
					name=''
					id='comment-text'
					onChange={e => setEditText(e.target.value)}
				/>
				<div>
					<button onClick={(e) => {
						e.preventDefault();
						console.log(commentId.commentId, editText);
						updatePost(commentId.commentId, editText);

					}}> Salvar </button>
					<button onClick={(e) => {
						e.preventDefault(); 
						deletePost(commentId.commentId); 

					}}> Excluir </button>
				</div>
			</form>
		</>
	)
}
