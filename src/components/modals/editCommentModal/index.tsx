import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { localAPI } from '../../../services'
import { z } from 'zod'
// por algum motivo o commentId está entrando como um objeto
// para chamar a função de deletar ou editar, é preciso mandar como param commentId.commentId
// desta forma => onClick={deletePost(commentId.commentId)}
// não consegui descobrir pq ainda
// a função delete está funcionando, mas é preciso atualizar a page pra ver que o comentário foi removido

export const EditComment = (commentId: number) => {
	interface iFormComment {
		comment: string
	}

	const editFormSchema = z.object({
		comment: z.string(),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<iFormComment>({
		resolver: zodResolver(editFormSchema),
	})

    const deletePost = async (commentId: number) => {
        try {
            await localAPI.delete(`comments/${commentId}`)
        }
        catch (error) {
            console.log('Não foi possível excluir o comentário', error)
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
					id=''
				/>
				<div>
					<button> Salvar </button>
					<button > Excluir </button>
				</div>
			</form>
		</>
	)
}
