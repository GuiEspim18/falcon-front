import "./SearchInput.scss";

function SearchInput(props) {
    return (
        <div className={"search-input " + props.className}>
            <img src="/src/images/icons/search.png" alt="" />
            <input type="text" />
        </div>
    );
}

export default SearchInput;