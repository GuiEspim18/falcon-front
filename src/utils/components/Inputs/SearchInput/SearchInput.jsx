import "./SearchInput.scss";

function SearchInput(props) {
    return (
        <div className={"search-input " + props.className}>
            <input type="text" placeholder="Pesquisar..." />
            <img src="/src/images/icons/search.png" alt="" />
        </div>
    );
}

export default SearchInput;