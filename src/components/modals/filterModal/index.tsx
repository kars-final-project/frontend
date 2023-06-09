import FilterList from "../../../components/FilterList"
import { StyledModal } from "./style"

interface iPropsModal {
    closeModal: () => void
    showFilter: boolean
}

function FilterModal ({ closeModal, showFilter }: iPropsModal) {
    return (
        <StyledModal>
            <div className="modal-box">
                <div className="modal-header">
                    <div>
                        <h2>Filtro</h2>
                        <button onClick={closeModal}>X</button>
                    </div>
                </div>
                <FilterList showFilter={showFilter}/>
            </div>
        </StyledModal>
    )
}

export default FilterModal