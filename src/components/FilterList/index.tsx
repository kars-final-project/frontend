import StyledFilterList from "./style";

function FilterList () {
    return (
        <StyledFilterList>
            <section>
                <h2>Marca</h2>
                <div>
                    <button>General Motors</button>
                    <button>Fiat</button>
                    <button>Ford</button>
                    <button>Honda</button>
                    <button>Porsche</button>
                    <button>Volswagen</button>
                </div>
            </section>
            <section>
                <h2>Modelo</h2>
                <div>
                    <button>Civic</button>
                    <button>Corolla</button>
                    <button>Cruze</button>
                    <button>Fit</button>
                    <button>Gol</button>
                    <button>Ka</button>
                    <button>Onix</button>
                    <button>Porsche 718</button>
                </div>
            </section>
            <section>
                <h2>Cor</h2>
                <div>
                    <button>Azul</button>
                    <button>Branco</button>
                    <button>Cinza</button>
                    <button>Prata</button>
                    <button>Preta</button>
                    <button>Verde</button>
                </div>
            </section>
            <section>
                <h2>Ano</h2>
                <div>
                    <button>2022</button>
                    <button>2021</button>
                    <button>2018</button>
                    <button>2015</button>
                    <button>2013</button>
                    <button>2012</button>
                    <button>2010</button>
                </div>
            </section>
            <section>
                <h2>Combustivel</h2>
                <div>
                    <button>Diesel</button>
                    <button>Etanol</button>
                    <button>Gasolina</button>
                    <button>Flex</button>
                </div>
            </section>
            <section>
                <h2>Km</h2>
                <div>
                    <button>Minima</button>
                    <button>Máxima</button>
                </div>
            </section>
            <section>
                <h2>Preço</h2>
                <div>
                    <button>Minima</button>
                    <button>Máxima</button>
                </div>
            </section>
        </StyledFilterList>
    )
}

export default FilterList