import { StyledComments } from "./style"

function Comments () {
    return (
        <StyledComments>    
            <ul>
                <h2>Comentarios</h2>
                <li>
                    <div className="user-info">
                        <img src="" alt="" />
                        <h3>Júlia Lima</h3>
                        <span></span>
                        <p>há 3 dias</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus facilis molestias repellat. Consequuntur esse ipsam sed repudiandae ipsa libero mollitia consequatur repellendus nisi. Esse, minus. Sed esse minus eveniet?</p>
                </li>
                <li>
                    <div className="user-info">
                        <img src="" alt="" />
                        <h3>Júlia Lima</h3>
                        <span></span>
                        <p>há 3 dias</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus facilis molestias repellat. Consequuntur esse ipsam sed repudiandae ipsa libero mollitia consequatur repellendus nisi. Esse, minus. Sed esse minus eveniet?</p>
                </li>
                <li>
                    <div className="user-info">
                        <img src="" alt="" />
                        <h3>Júlia Lima</h3>
                        <span></span>
                        <p>há 3 dias</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus facilis molestias repellat. Consequuntur esse ipsam sed repudiandae ipsa libero mollitia consequatur repellendus nisi. Esse, minus. Sed esse minus eveniet?</p>
                </li>
            </ul>
            <div className="add-comment">
                <div className="user-info-comment">
                    <img src="" alt="" />
                    <h3>Samuel Leão</h3>
                </div>
                <div className="comment-input">
                    <textarea />
                    <button>Comentar</button>
                </div>
                <div className="suggestions">
                    <p>Gostei muito</p>
                    <p>Incrivel</p>
                    <p>Recomendarei para meus amigos</p>
                </div>
            </div>
        </StyledComments>
    )
}

export default Comments